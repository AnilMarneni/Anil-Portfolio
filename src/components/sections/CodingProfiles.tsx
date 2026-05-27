"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Code, Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/layout/Container";
import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

export function CodingProfiles() {
  const [leetcodeStats, setLeetcodeStats] = useState(portfolioData.leetcodeStats);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/leetcode");
        if (response.ok) {
          const data = await response.json();
          setLeetcodeStats(data);
        }
      } catch (err) {
        console.error("Failed to load live LeetCode stats, fallback active:", err);
      }
    }
    fetchStats();
  }, []);

  const solved = useAnimatedNumber(leetcodeStats?.solved ?? portfolioData.leetcodeStats?.solved ?? 0);
  const easy = useAnimatedNumber(leetcodeStats?.easy ?? portfolioData.leetcodeStats?.easy ?? 0);
  const medium = useAnimatedNumber(leetcodeStats?.medium ?? portfolioData.leetcodeStats?.medium ?? 0);
  const hard = useAnimatedNumber(leetcodeStats?.hard ?? portfolioData.leetcodeStats?.hard ?? 0);
  const contestRating = useAnimatedNumber(leetcodeStats?.contestRating ?? portfolioData.leetcodeStats?.contestRating ?? 0);

  const rawAcceptance = parseFloat(leetcodeStats?.acceptanceRate ?? portfolioData.leetcodeStats?.acceptanceRate ?? "0");
  const acceptanceRate = useAnimatedNumber(rawAcceptance, 2);

  const solvedVal = solved > 0 ? solved : 1;

  const profiles = [
    { name: "LeetCode", url: portfolioData.codingProfiles.leetcode, icon: Code, color: "text-orange-500", stats: `${solved} Solved` },
    { name: "Codeforces", url: portfolioData.codingProfiles.codeforces, icon: Trophy, color: "text-blue-500", stats: "Active" },
    { name: "HackerRank", url: portfolioData.codingProfiles.hackerrank, icon: Award, color: "text-green-500", stats: "Verified" },
  ];

  return (
    <Container className="bg-foreground/[0.01]">
      <SectionHeader 
        label="Competitive Programming"
        title="Problem"
        subtitle="solving metrics."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-foreground/5 bg-background hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl bg-foreground/[0.03] ${profile.color}`}>
                <profile.icon size={24} />
              </div>
              <div className="flex flex-col items-end gap-2">
                <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                {profile.name === "LeetCode" && leetcodeStats?.recentBadge && (
                  <div className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[9px] font-bold text-accent uppercase tracking-tighter">
                    {leetcodeStats.recentBadge}
                  </div>
                )}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
            
            {profile.name === "LeetCode" && leetcodeStats ? (
              <div className="flex-1">
                <div className="flex items-end justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{solved}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Solved</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Acceptance</p>
                    <p className="text-xs font-bold text-emerald-500">{acceptanceRate}%</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-emerald-500" 
                      style={{ 
                        width: `${(easy / solvedVal) * 100}%`,
                        transition: "width 1s cubic-bezier(0.25, 1, 0.5, 1)"
                      }}
                    />
                    <div 
                      className="h-full bg-orange-500" 
                      style={{ 
                        width: `${(medium / solvedVal) * 100}%`,
                        transition: "width 1s cubic-bezier(0.25, 1, 0.5, 1)"
                      }}
                    />
                    <div 
                      className="h-full bg-rose-500" 
                      style={{ 
                        width: `${(hard / solvedVal) * 100}%`,
                        transition: "width 1s cubic-bezier(0.25, 1, 0.5, 1)"
                      }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight">
                    <span className="text-emerald-500">Easy {easy}</span>
                    <span className="text-orange-500">Med {medium}</span>
                    <span className="text-rose-500">Hard {hard}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/5">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Rating</p>
                    <p className="text-sm font-bold">{contestRating}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Global Rank</p>
                    <p className="text-sm font-bold truncate">
                      {leetcodeStats.globalRanking ? leetcodeStats.globalRanking.split('/')[0].trim() : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-6">Strategic algorithmic thinking and efficient problem solving.</p>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-[10px] font-mono font-bold px-3 py-1 bg-foreground/5 rounded-full uppercase tracking-widest">{profile.stats}</span>
                </div>
              </>
            )}
          </motion.a>
        ))}
      </div>
    </Container>
  );
}
