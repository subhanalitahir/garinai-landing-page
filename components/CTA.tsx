"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Cpu, Users, Database } from "lucide-react";

const stats = [
	{ icon: Cpu, label: "Compute Nodes", value: "2,400+" },
	{ icon: Users, label: "Contributors", value: "18,000+" },
	{ icon: Database, label: "Models Published", value: "340+" },
];

export default function CTA() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div className="bg-background relative overflow-hidden">
			{/* Dot grid */}
			<div
				aria-hidden
				className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]"
			/>

			{/* Animated background orbs */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<motion.div
					className="absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full"
					animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
					transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
					style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 60%)" }}
				/>
				<motion.div
					className="absolute -top-20 left-1/4 h-75 w-75 rounded-full"
					animate={{ opacity: [0.1, 0.25, 0.1], x: [0, 20, 0] }}
					transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
					style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 65%)" }}
				/>
				<motion.div
					className="absolute -bottom-20 right-1/4 h-62.5 w-62.5 rounded-full"
					animate={{ opacity: [0.1, 0.2, 0.1], x: [0, -15, 0] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
					style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12), transparent 65%)" }}
				/>
			</div>

			{/* Top hairline */}
			<div
				aria-hidden
				className="pointer-events-none absolute top-0 inset-x-0 h-px"
				style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }}
			/>

			<section ref={ref} className="mx-auto w-full max-w-4xl px-4 py-32 text-center">
				{/* Main content */}
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.9 }}
						animate={inView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-white/40"
					>
						<motion.span
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="h-1.5 w-1.5 rounded-full bg-white/50"
						/>
						Get Started
					</motion.span>

					{/* Heading with highlight */}
					<h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
						Join the{" "}
						<span className="relative inline-block">
							<span className="relative z-10">Decentralized</span>
							<motion.span
								className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
								initial={{ scaleX: 0 }}
								animate={inView ? { scaleX: 1 } : {}}
								transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
								style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", originX: 0 }}
							/>
						</span>
						{" "}AI Economy
					</h2>

					<p className="mx-auto mt-6 max-w-xl text-sm text-white/45 leading-relaxed md:text-base">
						Whether you&apos;re a model creator, dataset contributor, or compute provider — GarbinAI
						enables you to participate in a transparent AI marketplace and earn from real usage.
					</p>
				</motion.div>

				{/* CTA buttons */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
					className="mt-10 flex flex-wrap items-center justify-center gap-4"
				>
					{/* Primary — with glow */}
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className="relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl bg-white px-7 text-sm font-semibold text-black overflow-hidden group"
					>
						<motion.span
							className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 70%)" }}
						/>
						Explore Models
					</motion.button>

					{/* Secondary */}
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.97 }}
						className="relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/28 hover:bg-white/10 hover:text-white overflow-hidden group"
					>
						<div
							className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06), transparent 70%)" }}
						/>
						Publish Your Model
					</motion.button>

					{/* Ghost */}
					<motion.button
						whileHover={{ x: 4 }}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
						className="inline-flex h-11 cursor-pointer items-center gap-2 px-4 text-sm font-medium text-white/45 transition-colors duration-300 hover:text-white/80"
					>
						Join the Network
						<ArrowRight className="h-4 w-4" />
					</motion.button>
				</motion.div>

				{/* Stats row */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
					className="mt-16 flex flex-wrap items-center justify-center gap-1"
				>
					{stats.map(({ icon: Icon, label, value }, i) => (
						<div key={label} className="flex items-center">
							{i > 0 && <div className="mx-6 h-6 w-px bg-white/10" />}
							<motion.div
								initial={{ opacity: 0, y: 12 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
								className="flex flex-col items-center gap-1 group"
							>
								<div className="flex items-center gap-1.5 mb-0.5">
									<Icon className="h-3 w-3 text-white/25" />
									<span className="text-[10px] text-white/25 tracking-wider uppercase">{label}</span>
								</div>
								<span className="text-xl font-bold text-white/70">{value}</span>
							</motion.div>
						</div>
					))}
				</motion.div>
			</section>
		</div>
	);
}
