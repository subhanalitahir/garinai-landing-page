"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotGlobeHero } from "./globe-hero";
import { ArrowRight, Zap } from "lucide-react";

export default function DotGlobeHeroDemo() {
  return (
    <DotGlobeHero
      rotationSpeed={0.004}
      className="bg-linear-to-br from-background via-background/95 to-muted/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-background/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 text-center space-y-12 max-w-5xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 backdrop-blur-xl shadow-2xl"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary/10 via-transparent to-primary/10 animate-pulse" />
            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="relative z-10 text-sm font-bold text-primary tracking-wider uppercase">GLOBAL NETWORK</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-ping animation-delay-500" />
          </motion.div> */}
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] select-none"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span className="block font-light text-foreground/70 mb-3 text-3xl md:text-5xl lg:text-6xl">
                Deploy Once
              </span>
              <span className="block relative">
                <span className="bg-linear-to-br from-primary via-primary to-primary/60 bg-clip-text text-transparent font-black relative z-10">
                  earn Forever
                </span>
                <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/60 bg-clip-text text-transparent font-black blur-2xl opacity-50 scale-105" 
                     style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Earn Forever
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  className="absolute -bottom-6 left-0 h-3 bg-linear-to-r from-primary via-primary/80 to-transparent rounded-full shadow-lg shadow-primary/50"
                />
              </span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium" 
               style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Publish AI models, run them in live Spaces{" "}
              <span className="text-foreground font-semibold bg-linear-to-r from-primary/20 to-primary/10 px-2 py-1 rounded-md">
                and earn automatically from usage.
              </span>
            </p>
            <p className="text-sm hidden md:block lg:block text-muted-foreground/80 leading-relaxed">
GarbinAI is a blockchain-powered AI platform where developers publish models, run them in live inference environments, and automatically earn rewards whenever their models are used.            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 25px hsl(var(--primary) / 0.3)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 sm:px-6 sm:py-3 bg-linear-to-r from-primary via-primary to-primary/90 text-primary-foreground rounded-xl font-semibold text-sm sm:text-base shadow-xl hover:shadow-primary/30 transition-all duration-500 overflow-hidden border border-primary/20"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10 tracking-wide">Start Exploring</span>
            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "hsl(var(--accent))",
              borderColor: "hsl(var(--primary))",
              boxShadow: "0 15px 30px rgba(0,0,0,0.1), 0 0 15px hsl(var(--primary) / 0.1)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 sm:px-6 sm:py-3 border-2 border-border/40 rounded-xl font-semibold text-sm sm:text-base hover:border-primary/40 transition-all duration-500 backdrop-blur-xl bg-background/60 hover:bg-background/90 shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <span className="relative z-10 tracking-wide">View Live Demo</span>
          </motion.button>
        </motion.div>
      </div>
    </DotGlobeHero>
  );
}