"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Lock, GitBranch } from "lucide-react";

const categories = [
	{
		icon: Monitor,
		title: "Frontend",
		items: ["Next.js", "React", "TypeScript", "TailwindCSS"],
	},
	{
		icon: Server,
		title: "Backend",
		items: ["Next.js API", "PostgreSQL", "Hugging Face API"],
	},
	{
		icon: Lock,
		title: "Authentication",
		items: ["OAuth", "Wallet login"],
	},
	{
		icon: GitBranch,
		title: "Blockchain",
		items: ["EVM smart contracts"],
	},
];

const cardV = {
	hidden: { opacity: 0, y: 32 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
	}),
};

export default function TechStack() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div className="bg-background relative overflow-hidden">
			{/* Dot grid */}
			<div
				aria-hidden
				className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]"
			/>

			{/* Ambient orb */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(255,255,255,0.035), transparent 65%)" }}
				/>
			</div>

			{/* Top hairline */}
			<div
				aria-hidden
				className="pointer-events-none absolute top-0 inset-x-0 h-px"
				style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }}
			/>

			<section ref={ref} className="mx-auto w-full max-w-5xl px-4 py-24">
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="mx-auto mb-16 max-w-2xl text-center"
				>
					<span className="mb-4 inline-block text-[10px] tracking-[0.4em] uppercase text-white/30">
						Technology
					</span>
					<h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
						Built with Modern Technology
					</h2>
					<p className="mx-auto mt-5 max-w-lg text-sm text-white/45 leading-relaxed md:text-base">
						Production-grade infrastructure across the full stack.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{categories.map(({ icon: Icon, title, items }, i) => (
						<motion.div
							key={title}
							custom={i}
							variants={cardV}
							initial="hidden"
							animate={inView ? "visible" : "hidden"}
							className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/3 p-5 transition-all duration-500 hover:border-white/15 hover:bg-white/5"
						>
							<div
								className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
							/>
							<div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
								<Icon className="h-4 w-4 text-white/50 transition-colors duration-300 group-hover:text-white/80" />
							</div>
							<h3 className="mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/45">
								{title}
							</h3>
							<ul className="space-y-2">
								{items.map((item) => (
									<li key={item} className="flex items-center gap-2.5 text-[13px] text-white/65">
										<span className="h-1 w-1 shrink-0 rounded-full bg-white/25" />
										{item}
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
