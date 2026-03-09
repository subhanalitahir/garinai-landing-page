"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Play, BarChart2, FileText, DollarSign } from "lucide-react";

const steps = [
	{
		n: "01",
		icon: Upload,
		title: "Publish",
		desc: "Creators publish AI models to the GarbinAI marketplace with rich metadata and provenance info.",
		accentColor: "rgba(168,85,247,0.15)",
		accentBorder: "rgba(168,85,247,0.35)",
	},
	{
		n: "02",
		icon: Play,
		title: "Run",
		desc: "Models run in Spaces where real users interact with them via API endpoints.",
		accentColor: "rgba(59,130,246,0.15)",
		accentBorder: "rgba(59,130,246,0.35)",
	},
	{
		n: "03",
		icon: BarChart2,
		title: "Track",
		desc: "Every API call, token consumed and GPU minute is recorded immutably.",
		accentColor: "rgba(20,184,166,0.15)",
		accentBorder: "rgba(20,184,166,0.35)",
	},
	{
		n: "04",
		icon: FileText,
		title: "Settle",
		desc: "Signed usage receipts are batched and anchored to blockchain contracts.",
		accentColor: "rgba(234,179,8,0.15)",
		accentBorder: "rgba(234,179,8,0.35)",
	},
	{
		n: "05",
		icon: DollarSign,
		title: "Earn",
		desc: "Revenue is atomically split among all contributors in real time.",
		accentColor: "rgba(34,197,94,0.15)",
		accentBorder: "rgba(34,197,94,0.35)",
	},
];

export default function HowItWorks() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div className="bg-background relative overflow-hidden">
			{/* Dot grid */}
			<div
				aria-hidden
				className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]"
			/>
			{/* Orbs */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-40 -left-20 h-120 w-120 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07), transparent 65%)" }} />
				<div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent 65%)" }} />
			</div>
			{/* Top hairline */}
			<div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px"
				style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }} />

			<section ref={ref} className="mx-auto w-full max-w-5xl px-4 py-28">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto mb-20 max-w-2xl text-center"
				>
					<span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-white/40">
						<span className="h-1 w-1 rounded-full bg-white/40" />
						Process
					</span>
					<h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
						How GarbinAI Works
					</h2>
					<p className="mx-auto mt-5 max-w-lg text-sm text-white/45 leading-relaxed md:text-base">
						A transparent five-step pipeline from creation to earning.
					</p>
				</motion.div>

				{/* Steps — vertical on mobile, single-row on desktop */}
				<div className="relative flex flex-col gap-0 lg:flex-row">
					{/* Vertical connector (mobile) */}
					<div
						aria-hidden
						className="absolute left-7 top-8 bottom-8 w-px lg:hidden"
						style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.10) 10%, rgba(255,255,255,0.10) 90%, transparent)" }}
					/>
					{/* Horizontal connector (desktop) */}
					<div
						aria-hidden
						className="absolute top-9 left-[10%] right-[10%] h-px hidden lg:block"
						style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10) 5%, rgba(255,255,255,0.10) 95%, transparent)" }}
					/>

					{steps.map(({ n, icon: Icon, title, desc, accentColor, accentBorder }, i) => (
						<motion.div
							key={n}
							initial={{ opacity: 0, y: 40 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 0.1 + i * 0.13, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
							className="group relative flex flex-1 flex-row gap-5 py-6 pl-5 pr-3 lg:flex-col lg:items-center lg:px-4 lg:py-0 lg:text-center"
						>
							{/* Icon circle */}
							<div
								className="relative z-10 flex h-[3.25rem] w-[3.25rem] shrink-0 flex-col items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110"
								style={{
									background: accentColor,
									borderColor: accentBorder,
									boxShadow: `0 0 24px ${accentColor}`,
								}}
							>
								<Icon className="h-5 w-5 text-white/70" />
							</div>
							{/* Text */}
							<div className="min-w-0">
								<div className="mb-1 flex items-center gap-2 lg:justify-center">
									<span className="font-mono text-[10px] tracking-[0.25em] text-white/25">{n}</span>
									<span className="text-[15px] font-bold text-white">{title}</span>
								</div>
								<p className="text-[12.5px] text-white/40 leading-relaxed">{desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
