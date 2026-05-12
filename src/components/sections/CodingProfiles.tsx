"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Code, Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/layout/Container";

export function CodingProfiles() {
  const profiles = [
    { name: "LeetCode", url: portfolioData.codingProfiles.leetcode, icon: Code, color: "text-orange-500", stats: "100+ Solved" },
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
            className="group p-8 rounded-[2rem] border border-foreground/5 bg-background hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl bg-foreground/[0.03] ${profile.color}`}>
                <profile.icon size={24} />
              </div>
              <div className="flex flex-col items-end gap-2">
                <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                {profile.name === "LeetCode" && portfolioData.leetcodeStats?.recentBadge && (
                  <div className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[9px] font-bold text-accent uppercase tracking-tighter">
                    {portfolioData.leetcodeStats.recentBadge}
                  </div>
                )}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
            
            {profile.name === "LeetCode" && portfolioData.leetcodeStats ? (
              <div className="flex-1">
                <div className="flex items-end justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{portfolioData.leetcodeStats.solved}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Solved</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Acceptance</p>
                    <p className="text-xs font-bold text-emerald-500">{portfolioData.leetcodeStats.acceptanceRate}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-emerald-500" 
                      style={{ width: `${(portfolioData.leetcodeStats.easy / portfolioData.leetcodeStats.solved) * 100}%` }}
                    />
                    <div 
                      className="h-full bg-orange-500" 
                      style={{ width: `${(portfolioData.leetcodeStats.medium / portfolioData.leetcodeStats.solved) * 100}%` }}
                    />
                    <div 
                      className="h-full bg-rose-500" 
                      style={{ width: `${(portfolioData.leetcodeStats.hard / portfolioData.leetcodeStats.solved) * 100}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight">
                    <span className="text-emerald-500">Easy {portfolioData.leetcodeStats.easy}</span>
                    <span className="text-orange-500">Med {portfolioData.leetcodeStats.medium}</span>
                    <span className="text-rose-500">Hard {portfolioData.leetcodeStats.hard}</span>
                  </div>
                </div>
 
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/5">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Rating</p>
                    <p className="text-sm font-bold">{portfolioData.leetcodeStats.contestRating}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Global Rank</p>
                    <p className="text-sm font-bold truncate">{portfolioData.leetcodeStats.globalRanking.split('/')[0]}</p>
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
