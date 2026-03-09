"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Clock, Rocket, Zap, Shield, Globe, Code2, MapPin } from "lucide-react";

const phases = [
	{
		phase: "Phase 1",
		label: "Genesis",
		period: "Q1 2025",
		status: "completed" as const,
		icon: Code2,
		items: [
			"Protocol architecture design",
			"Token economics whitepaper",
			"Core team formation",
			"Smart contract spec",
		],
	},
	{
		phase: "Phase 2",
		label: "Alpha",
		period: "Q2 2025",
		status: "completed" as const,
		icon: Zap,
		items: [
			"Core AI inference layer",
			"BSC testnet deployment",
			"Proof-of-Inference mining",
			"Smart contract audits",
		],
	},
	{
		phase: "Phase 3",
		label: "Beta",
		period: "Q3 2025",
		status: "active" as const,
		icon: Shield,
		items: [
			"Garbin-Shield SDK launch",
			"AI marketplace beta",
			"Compute cost oracle",
			"Developer documentation",
		],
	},
	{
		phase: "Phase 4",
		label: "Launch",
		period: "Q4 2025",
		status: "upcoming" as const,
		icon: Rocket,
		items: [
			"Mainnet deployment",
			"Cross-chain bridge",
			"Partner integrations",
			"Public token launch",
		],
	},
	{
		phase: "Phase 5",
		label: "Scale",
		period: "Q1 2026",
		status: "upcoming" as const,
		icon: Globe,
		items: [
			"Mobile SDK release",
			"DAO governance launch",
			"Enterprise licensing",
			"10+ chain support",
		],
	},
];

const statusConfig = {
	completed: {
		label: "Completed",
		badgeClass: "border-green-500/30 bg-green-500/10 text-green-400",
		dotClass: "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]",
		lineClass: "bg-green-500/30",
		iconClass: "text-green-400/70",
	},
	active: {
		label: "In Progress",
		badgeClass: "border-yellow-400/30 bg-yellow-400/10 text-yellow-400",
		dotClass: "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]",
		lineClass: "bg-yellow-400/20",
		iconClass: "text-yellow-400/70",
	},
	upcoming: {
		label: "Upcoming",
		badgeClass: "border-white/10 bg-white/5 text-white/35",
		dotClass: "bg-white/20",
		lineClass: "bg-white/8",
		iconClass: "text-white/35",
	},
};

export default function Roadmap() {
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
					className="absolute top-0 left-1/3 h-100 w-100 -translate-x-1/2 rounded-full"
					animate={{ opacity: [0.15, 0.3, 0.15] }}
					transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
					style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 65%)" }}
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
						<MapPin className="h-2.5 w-2.5" />
						Product Roadmap
					</motion.span>
					<h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
						Building the Future
					</h2>
					<p className="mx-auto mt-5 max-w-lg text-sm text-white/45 leading-relaxed md:text-base">
						A transparent roadmap for decentralised AI infrastructure — from genesis to global scale.
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Vertical spine line (desktop) */}
					<div className="hidden md:block absolute left-45 top-4 bottom-4 w-px bg-white/8" />
					{/* Animated fill on spine */}
					<motion.div
						className="hidden md:block absolute left-45 top-4 w-px origin-top"
						initial={{ scaleY: 0 }}
						animate={inView ? { scaleY: 1 } : {}}
						transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
						style={{ height: "calc(100% - 2rem)", background: "linear-gradient(to bottom, rgba(74,222,128,0.4), rgba(250,204,21,0.3), rgba(255,255,255,0.05))" }}
					/>

					{phases.map((phase, i) => {
						const cfg = statusConfig[phase.status];
						const Icon = phase.icon;
						return (
							<motion.div
								key={phase.phase}
								initial={{ opacity: 0, x: -20 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
								className="relative mb-5 last:mb-0 flex flex-col md:flex-row gap-4 md:gap-0"
							>
								{/* Left metadata column */}
								<div className="md:w-42 md:pr-6 md:text-right shrink-0 flex md:flex-col items-center md:items-end gap-3 md:gap-1 pt-0 md:pt-5">
									<span className="text-[10px] font-semibold tracking-widest uppercase text-white/25">{phase.phase}</span>
									<span className="text-[13px] font-semibold text-white/70">{phase.label}</span>
									<span className="text-[11px] text-white/30">{phase.period}</span>
								</div>

								{/* Timeline node (desktop) */}
								<div className="hidden md:flex items-start justify-center w-6 shrink-0 pt-6">
									<div className="relative">
										{phase.status === "active" && (
											<motion.div
												className="absolute inset-0 rounded-full"
												animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
												transition={{ duration: 2, repeat: Infinity }}
												style={{ background: "rgba(250,204,21,0.4)" }}
											/>
										)}
										<div className={`h-3 w-3 rounded-full ${cfg.dotClass} z-10 relative`} />
									</div>
								</div>

								{/* Card */}
								<motion.div
									className={`flex-1 md:ml-6 group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 ${
										phase.status === "active"
											? "border-yellow-400/20 bg-yellow-400/3 hover:border-yellow-400/35 hover:bg-yellow-400/5"
											: phase.status === "completed"
											? "border-green-500/15 bg-green-500/2 hover:border-green-500/25"
											: "border-white/8 bg-white/2 hover:border-white/14 hover:bg-white/4"
									}`}
								>
									{/* Top shimmer on active */}
									{phase.status === "active" && (
										<motion.div
											className="absolute top-0 left-0 right-0 h-px"
											animate={{ opacity: [0.4, 1, 0.4] }}
											transition={{ duration: 2.5, repeat: Infinity }}
											style={{ background: "linear-gradient(90deg, transparent, rgba(250,204,21,0.5), transparent)" }}
										/>
									)}
									{phase.status === "completed" && (
										<div
											className="absolute top-0 left-0 right-0 h-px"
											style={{ background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.3), transparent)" }}
										/>
									)}

									{/* Hover glow */}
									<div
										className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
										style={{ background: "radial-gradient(300px circle at 50% 0%, rgba(255,255,255,0.03), transparent 60%)" }}
									/>

									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center gap-3">
											<div className={`flex h-8 w-8 items-center justify-center rounded-lg border bg-white/5 transition-all duration-300 group-hover:bg-white/8 ${
												phase.status === "active" ? "border-yellow-400/20" : phase.status === "completed" ? "border-green-500/20" : "border-white/10"
											}`}>
												<Icon className={`h-3.5 w-3.5 ${cfg.iconClass}`} />
											</div>
											<h3 className="text-[15px] font-semibold text-white/85">{phase.label}</h3>
										</div>
										<span className={`rounded-full border px-2.5 py-0.5 text-[10px] tracking-wider font-medium ${cfg.badgeClass}`}>
											{cfg.label}
										</span>
									</div>

									<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
										{phase.items.map((item, j) => (
											<motion.li
												key={item}
												initial={{ opacity: 0, x: -8 }}
												animate={inView ? { opacity: 1, x: 0 } : {}}
												transition={{ duration: 0.4, delay: 0.5 + i * 0.15 + j * 0.06 }}
												className="flex items-start gap-2"
											>
												{phase.status === "completed" ? (
													<CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500/60" />
												) : phase.status === "active" ? (
													<Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400/50" />
												) : (
													<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/20" />
												)}
												<span className={`text-[12px] leading-snug ${
													phase.status === "completed" ? "text-white/50" : phase.status === "active" ? "text-white/60" : "text-white/35"
												}`}>
													{item}
												</span>
											</motion.li>
										))}
									</ul>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</section>
		</div>
	);
}
