"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, Coins } from "lucide-react";

const assets = [
	{
		symbol: "USDC",
		glyph: "$",
		tag: "Primary",
		tagColor: "rgba(59,130,246,0.25)",
		tagBorder: "rgba(59,130,246,0.4)",
		glowColor: "rgba(59,130,246,0.12)",
		ringColor: "rgba(59,130,246,0.3)",
		desc: "USD Coin — stable, widely accepted stablecoin for instant payouts.",
		perks: ["Zero-slippage transfer", "Instant settlement", "Circle-backed reserve"],
	},
	{
		symbol: "USDT",
		glyph: "₮",
		tag: "Alternative",
		tagColor: "rgba(20,184,166,0.25)",
		tagBorder: "rgba(20,184,166,0.4)",
		glowColor: "rgba(20,184,166,0.10)",
		ringColor: "rgba(20,184,166,0.3)",
		desc: "Tether — versatile stablecoin for global, borderless payments.",
		perks: ["Cross-chain liquidity", "Global acceptance", "High throughput"],
	},
	{
		symbol: "$GARB",
		glyph: "G",
		tag: "Coming Soon",
		tagColor: "rgba(168,85,247,0.25)",
		tagBorder: "rgba(168,85,247,0.4)",
		glowColor: "rgba(168,85,247,0.10)",
		ringColor: "rgba(168,85,247,0.3)",
		desc: "GarbinAI's native token for rewards, staking, and protocol governance.",
		perks: ["Protocol governance", "Staking rewards", "Fee discounts"],
	},
];

export default function Payments() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div className="bg-background relative overflow-hidden">
			<div aria-hidden className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]" />
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -bottom-40 left-1/3 h-120 w-120 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 65%)" }} />
				<div className="absolute top-0 right-0 h-80 w-80 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(168,85,247,0.06), transparent 65%)" }} />
			</div>
			<div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px"
				style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }} />

			<section ref={ref} className="mx-auto w-full max-w-5xl px-4 py-28">
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto mb-6 max-w-2xl text-center"
				>
					<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-white/40">
						<span className="h-1 w-1 rounded-full bg-blue-400/60" />
						Payments &amp; Tokens
					</span>
					<h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
						Built for the Web3 Economy
					</h2>
					<p className="mx-auto mt-5 max-w-lg text-sm text-white/45 leading-relaxed md:text-base">
						Smart contracts handle every payment — transparent, automatic, trustless.
					</p>
				</motion.div>

				{/* Trust badges */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
					className="mb-14 flex flex-wrap justify-center gap-4"
				>
					{[
						{ icon: ShieldCheck, text: "Non-custodial" },
						{ icon: Zap, text: "Instant settlement" },
						{ icon: Coins, text: "Multi-asset" },
					].map(({ icon: I, text }) => (
						<div key={text} className="flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-2">
							<I className="h-3.5 w-3.5 text-white/40" />
							<span className="text-[12px] text-white/50">{text}</span>
						</div>
					))}
				</motion.div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
					{assets.map(({ symbol, glyph, tag, tagColor, tagBorder, glowColor, ringColor, desc, perks }, i) => (
						<motion.div
							key={symbol}
							initial={{ opacity: 0, y: 40 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.75, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
							className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6 transition-all duration-500 hover:border-white/15"
							style={{ "--glow": glowColor } as React.CSSProperties}
						>
							{/* Colored glow on hover */}
							<div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
								style={{ background: `radial-gradient(280px circle at 50% 0%, ${glowColor}, transparent 60%)` }} />
							{/* Top shimmer */}
							<div className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style={{ background: `linear-gradient(90deg, transparent, ${ringColor}, transparent)` }} />

							{/* Coin */}
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
								style={{ background: glowColor, border: `1px solid ${ringColor}`, boxShadow: `0 0 28px ${glowColor}` }}>
								<span className="font-mono text-2xl font-bold text-white/75">{glyph}</span>
							</div>

							<div className="mb-3 flex flex-wrap items-center gap-2">
								<span className="text-lg font-bold tracking-tight text-white">{symbol}</span>
								<span className="rounded-full px-2 py-0.5 text-[10px] tracking-widest"
									style={{ background: tagColor, border: `1px solid ${tagBorder}`, color: "rgba(255,255,255,0.7)" }}>
									{tag}
								</span>
							</div>
							<p className="mb-5 text-[13px] text-white/45 leading-relaxed">{desc}</p>

							<ul className="space-y-2 border-t border-white/6 pt-4">
								{perks.map((perk) => (
									<li key={perk} className="flex items-center gap-2.5 text-[12px] text-white/45">
										<span className="h-1 w-1 shrink-0 rounded-full" style={{ background: ringColor }} />
										{perk}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}

import React from "react";
