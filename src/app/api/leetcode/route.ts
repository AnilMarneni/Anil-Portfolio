import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";

export const revalidate = 21600; // Cache the route for 6 hours

interface SubmissionNum {
  difficulty: string;
  count: number;
  submissions: number;
}

const QUERY = `
query userProfile($username: String!) {
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
      totalSubmissionNum {
        difficulty
        count
        submissions
      }
    }
    profile {
      ranking
      reputation
    }
    activeBadge {
      displayName
    }
  }
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
  }
}
`;

export async function GET() {
  try {
    const leetcodeUrl = portfolioData.codingProfiles.leetcode;
    // Extract username from "https://leetcode.com/u/AnilMarneni/"
    const urlParts = leetcodeUrl.replace(/\/$/, "").split("/");
    const username = urlParts[urlParts.length - 1] || "AnilMarneni";

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username },
      }),
      next: { revalidate: 21600 } // Cache this fetch call for 6 hours in Next.js data cache
    });

    if (!response.ok) {
      throw new Error(`LeetCode API returned status ${response.status}`);
    }

    const json = await response.json();
    if (json.errors) {
      throw new Error(json.errors[0]?.message || "GraphQL query errors");
    }

    const data = json.data;
    if (!data || !data.matchedUser) {
      throw new Error("User data not found in response");
    }

    const { matchedUser, userContestRanking } = data;
    const acSub = matchedUser.submitStats.acSubmissionNum as SubmissionNum[];
    const totalSub = matchedUser.submitStats.totalSubmissionNum as SubmissionNum[];

    const solvedAll = acSub.find((s) => s.difficulty === "All")?.count || 0;
    const easyAll = acSub.find((s) => s.difficulty === "Easy")?.count || 0;
    const medAll = acSub.find((s) => s.difficulty === "Medium")?.count || 0;
    const hardAll = acSub.find((s) => s.difficulty === "Hard")?.count || 0;

    const acAllSub = acSub.find((s) => s.difficulty === "All")?.submissions || 0;
    const totalAllSub = totalSub.find((s) => s.difficulty === "All")?.submissions || 0;
    const acceptanceRateNum = totalAllSub > 0 ? (acAllSub / totalAllSub) * 100 : 0;

    const dynamicStats = {
      solved: solvedAll,
      easy: easyAll,
      medium: medAll,
      hard: hardAll,
      ranking: matchedUser.profile.ranking?.toLocaleString() || "N/A",
      contestRating: userContestRanking ? Math.round(userContestRanking.rating) : 0,
      globalRanking: userContestRanking 
        ? `${userContestRanking.globalRanking.toLocaleString()} / ${userContestRanking.totalParticipants.toLocaleString()}`
        : "N/A",
      topPercentage: userContestRanking 
        ? `${userContestRanking.topPercentage}%` 
        : "N/A",
      acceptanceRate: `${acceptanceRateNum.toFixed(2)}%`,
      submissions: totalAllSub,
      activeDays: portfolioData.leetcodeStats?.activeDays || 80,
      maxStreak: portfolioData.leetcodeStats?.maxStreak || 30,
      recentBadge: matchedUser.activeBadge?.displayName || null,
      recentSubmissions: portfolioData.leetcodeStats?.recentSubmissions || []
    };

    return NextResponse.json(dynamicStats);
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    // Graceful fallback to static data
    return NextResponse.json(portfolioData.leetcodeStats);
  }
}
