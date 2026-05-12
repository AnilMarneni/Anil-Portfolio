"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const FORMSPREE_ID = "mnjwwggd";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Container id="contact" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader 
            label="Get in touch"
            title="Let's talk about"
            subtitle="engineering."
            description="Whether you want to discuss backend architecture, a new project, or just talk shop about distributed systems, I'm always open to connecting."
            className="mb-12"
          />
          
          <div className="space-y-6">
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="p-4 rounded-2xl bg-foreground/5 group-hover:bg-accent/10 transition-colors">
                <Mail size={24} className="group-hover:text-accent transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-1">Email</span>
                <span className="text-lg font-bold group-hover:text-accent transition-colors">{portfolioData.contact.email}</span>
              </div>
            </a>
            
            <div className="flex gap-4">
              <a 
                href={portfolioData.contact.github}
                target="_blank"
                className="flex-1 p-6 rounded-[2rem] border border-foreground/5 bg-foreground/[0.01] flex flex-col items-center gap-4 group hover:bg-foreground/5 transition-colors"
              >
                <Github size={32} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-xs font-bold font-mono tracking-widest uppercase">GitHub</span>
              </a>
              <a 
                href={portfolioData.contact.linkedin}
                target="_blank"
                className="flex-1 p-6 rounded-[2rem] border border-foreground/5 bg-foreground/[0.01] flex flex-col items-center gap-4 group hover:bg-foreground/5 transition-colors"
              >
                <Linkedin size={32} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-xs font-bold font-mono tracking-widest uppercase">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-12 glass rounded-[2rem] sm:rounded-[3rem] border-foreground/10 relative z-10"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-[10px] font-mono text-accent">
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-sm font-bold text-accent hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs flex items-center gap-3">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest opacity-60">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl p-4 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest opacity-60">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl p-4 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest opacity-60">Message</label>
                    <textarea 
                      required
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-foreground/[0.03] border border-foreground/10 rounded-2xl p-4 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <button 
                    disabled={status === "sending"}
                    className="w-full py-4 bg-foreground text-background rounded-2xl font-bold flex items-center justify-center gap-2 group hover:scale-[0.98] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message 
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Decorative terminal card */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-foreground/5 rounded-[3.5rem] -z-10 bg-foreground/[0.02]" />
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-accent/5 blur-[100px] lg:blur-[150px] -z-20 rounded-full opacity-50 lg:opacity-100" />
    </Container>
  );
}
