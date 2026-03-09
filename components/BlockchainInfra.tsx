"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Globe, Activity, Network } from "lucide-react";

const primary = {
	abbr: "BSC",
	full: "BNB Smart Chain",
	note: "Low fees · High throughput",
};

const stats = [
	{ label: "Block Time", value: "3s" },
	{ label: "Peak TPS", value: "2,000+" },
	{ label: "Avg Gas Fee", value: "~$0.01" },
];

const networks = [
	{ name: "Polygon", tier: "Layer 2", delay: 0 },
	{ name: "Arbitrum", tier: "Layer 2", delay: 0.1 },
	{ name: "Base", tier: "Layer 2", delay: 0.2 },
	{ name: "Ethereum", tier: "Layer 1", delay: 0.3 },
];

export default function BlockchainInfra() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div className="bg-background relative overflow-hidden">
			{/* Dot grid */}
			<div
				aria-hidden
				className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]"
			/>

			{/* Ambient orbs */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<motion.div
					className="absolute -top-40 -left-20 h-105 w-105 rounded-full"
					animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
					transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
					style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent 65%)" }}
				/>
				<motion.div
					className="absolute -bottom-40 -right-20 h-87.5 w-87.5 rounded-full"
					animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
					style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent 65%)" }}
				/>
			</div>

			{/* Top hairline */}
			<div
				aria-hidden
				className="pointer-events-none absolute top-0 inset-x-0 h-px"
				style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }}
			/>

			<section ref={ref} className="mx-auto w-full max-w-5xl px-4 py-24">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto mb-16 max-w-2xl text-center"
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.9 }}
						animate={inView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-white/40"
					>
						<Network className="h-2.5 w-2.5" />
						Blockchain Infrastructure
					</motion.span>
					<h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
						Multi-Chain Architecture
					</h2>
					<p className="mx-auto mt-5 max-w-lg text-sm text-white/45 leading-relaxed md:text-base">
						GarbinAI supports multiple EVM blockchains. The platform is chain-agnostic and infinitely extensible.
					</p>
				</motion.div>

				{/* Primary chain card */}
				<motion.div
					initial={{ opacity: 0, y: 28 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
					className="group relative mb-5 overflow-hidden rounded-2xl border border-white/12 bg-white/4 p-7"
				>
					{/* Top shimmer */}
					<div
						className="absolute top-0 left-0 right-0 h-px"
						style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
					/>
					{/* Animated inner glow */}
					<motion.div
						className="pointer-events-none absolute inset-0 rounded-2xl"
						animate={{ opacity: [0.4, 0.8, 0.4] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						style={{ background: "radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.05), transparent 60%)" }}
					/>

					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
						{/* Icon with pulse */}
						<div className="relative shrink-0">
							<motion.div
								className="absolute inset-0 rounded-xl"
								animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
								transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
								style={{ border: "1px solid rgba(255,255,255,0.25)", borderRadius: "12px" }}
							/>
							<motion.div
								className="absolute inset-0 rounded-xl"
								animate={{ scale: [1, 1.9, 1], opacity: [0.2, 0, 0.2] }}
								transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
								style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px" }}
							/>
							<div className="flex h-13 w-13 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/15">
								<Layers className="h-6 w-6 text-white/80" />
							</div>
						</div>

						{/* Info */}
						<div className="flex-1 min-w-0">
							<div className="flex flex-wrap items-center gap-2 mb-1">
								<span className="text-xl font-bold text-white">{primary.abbr}</span>
								<span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[10px] tracking-widest text-white/60 font-medium">
									Primary Chain
								</span>
								<motion.span
									animate={{ opacity: [0.6, 1, 0.6] }}
									transition={{ duration: 2, repeat: Infinity }}
									className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-[10px] text-green-400 font-medium"
								>
									<span className="h-1.5 w-1.5 rounded-full bg-green-400" />
									Live
								</motion.span>
							</div>
							<p className="text-[13px] text-white/40">{primary.full} — {primary.note}</p>
						</div>

						{/* Stats */}
						<div className="flex gap-6 shrink-0">
							{stats.map(({ label, value }, i) => (
								<motion.div
									key={label}
									initial={{ opacity: 0, y: 10 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
									className="text-center"
								>
									<div className="text-base font-bold text-white">{value}</div>
									<div className="text-[10px] text-white/30 mt-0.5 whitespace-nowrap">{label}</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Connector */}
				<div className="flex justify-center mb-5">
					<motion.div
						initial={{ scaleY: 0, opacity: 0 }}
						animate={inView ? { scaleY: 1, opacity: 1 } : {}}
						transition={{ duration: 0.5, delay: 0.55 }}
						className="h-6 w-px origin-top"
						style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }}
					/>
				</div>

				{/* L2 / additional chains */}
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					{networks.map(({ name, tier, delay }, i) => (
						<motion.div
							key={name}
							initial={{ opacity: 0, y: 24 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.65, delay: 0.6 + delay, ease: [0.22, 1, 0.36, 1] }}
							className="group relative flex flex-col items-center gap-3 rounded-xl border border-white/8 bg-white/3 py-6 transition-all duration-500 hover:border-white/18 hover:bg-white/6 cursor-default overflow-hidden"
						>
							{/* Hover glow */}
							<div
								className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05), transparent 70%)" }}
							/>
							<div className="relative">
								{/* Pulsing activity dot */}
								<motion.div
									className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
									animate={{ scale: [1, 1.8, 1], opacity: [0, 0.3, 0] }}
									transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
									style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px" }}
								/>
								<div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/22 group-hover:bg-white/10">
									<Globe className="h-4 w-4 text-white/40 transition-colors duration-300 group-hover:text-white/75" />
								</div>
							</div>
							<div className="text-center">
								<div className="text-[13px] font-semibold text-white/80">{name}</div>
								<div className="mt-1 text-[10px] tracking-widest uppercase text-white/30">{tier}</div>
							</div>
							<motion.div
								animate={{ opacity: [0.3, 0.8, 0.3] }}
								transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }}
								className="h-1 w-1 rounded-full bg-white/30"
							/>
						</motion.div>
					))}
				</div>

				{/* Bottom caption */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8, delay: 1.1 }}
					className="mt-10 flex items-center justify-center gap-3"
				>
					<div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1))" }} />
					<div className="flex items-center gap-2 text-[11px] text-white/20 tracking-wider">
						<Activity className="h-3 w-3" />
						EVM-compatible · More chains coming soon
					</div>
					<div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.1))" }} />
				</motion.div>
			</section>
		</div>
	);
}
