"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Database, Tag, Cpu, Server, Code, ArrowRight } from "lucide-react";

const contributors = [
	{ icon: User, label: "Model creators", pct: 25 },
	{ icon: Database, label: "Dataset owners", pct: 20 },
	{ icon: Tag, label: "Annotators & labelers", pct: 12 },
	{ icon: Cpu, label: "Model trainers", pct: 20 },
	{ icon: Server, label: "GPU compute providers", pct: 15 },
	{ icon: Code, label: "Code contributors", pct: 8 },
];

export default function ContributorRewards() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div className="bg-background relative overflow-hidden">
			<div aria-hidden className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]" />
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-1/4 right-0 h-100 w-100 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06), transparent 65%)" }} />
				<div className="absolute bottom-0 left-0 h-80 w-80 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05), transparent 65%)" }} />
			</div>
			<div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px"
				style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }} />

			<section ref={ref} className="mx-auto w-full max-w-5xl px-4 py-28">
				<div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
					{/* Left */}
					<motion.div
						initial={{ opacity: 0, x: -32 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
						className="lg:sticky lg:top-28"
					>
						<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-white/40">
							<span className="h-1 w-1 rounded-full bg-green-400/60" />
							Rewards
						</span>
						<h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
							Fair Rewards for the Entire AI Supply Chain
						</h2>
						<p className="mt-5 text-sm text-white/45 leading-relaxed md:text-base">
							GarbinAI ensures every contributor is rewarded — from the original dataset creators to the inference compute providers.
						</p>
						<div className="mt-8 overflow-hidden rounded-xl border border-white/8 bg-white/3">
							<div className="border-b border-white/6 px-4 py-3">
								<span className="font-mono text-[10px] tracking-widest text-white/25">PROVENANCE_GRAPH</span>
							</div>
							<div className="px-4 py-4 text-[12px] font-mono text-white/40 leading-6">
								<p><span className="text-green-400/60">model</span> → <span className="text-blue-400/60">dataset</span> → <span className="text-purple-400/60">labels</span></p>
								<p className="mt-1"><span className="text-yellow-400/60">train</span> → <span className="text-orange-400/60">finetune</span> → <span className="text-pink-400/60">serve</span></p>
								<p className="mt-2 text-white/20">// Revenue splits calculated on-chain</p>
							</div>
						</div>
						<button className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors duration-200 hover:text-white/85">
							Learn about provenance <ArrowRight className="h-4 w-4" />
						</button>
					</motion.div>

					{/* Right — contribution bars */}
					<div className="space-y-3">
						{contributors.map(({ icon: Icon, label, pct }, i) => (
							<motion.div
								key={label}
								initial={{ opacity: 0, x: 32 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
								className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/3 px-5 py-4 transition-all duration-300 hover:border-white/15 hover:bg-white/5"
							>
								{/* Animated fill bar */}
								<motion.div
									className="absolute inset-y-0 left-0 rounded-xl"
									initiial={{ width: 0 }}
									initial={{ width: 0 }}
									animate={inView ? { width: `${pct}%` } : {}}
									transition={{ duration: 1.0, delay: 0.4 + i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
									style={{ background: "linear-gradient(to right, rgba(255,255,255,0.04), transparent)" }}
								/>
								<div className="relative flex items-center justify-between gap-4">
									<div className="flex items-center gap-3">
										<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
											<Icon className="h-3.5 w-3.5 text-white/55 transition-colors duration-300 group-hover:text-white/85" />
										</div>
										<span className="text-[13px] font-medium text-white/70">{label}</span>
									</div>
									<span className="font-mono text-sm font-bold text-white/55">{pct}%</span>
								</div>
								{/* Progress track */}
								<div className="relative mt-3 h-0.5 overflow-hidden rounded-full bg-white/8">
									<motion.div
										className="absolute inset-y-0 left-0 rounded-full bg-white/30"
										initial={{ width: 0 }}
										animate={inView ? { width: `${pct}%` } : {}}
										transition={{ duration: 1.0, delay: 0.4 + i * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
