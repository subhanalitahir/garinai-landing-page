"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Twitter, Instagram, Zap, ArrowUpRight } from "lucide-react";

const linkGroups = [
	{
		group: "Product",
		items: [
			{ label: "Documentation", href: "#" },
			{ label: "GitHub", href: "#" },
			{ label: "Community", href: "#" },
			{ label: "Changelog", href: "#" },
		],
	},
	{
		group: "Company",
		items: [
			{ label: "About", href: "#" },
			{ label: "Blog", href: "#" },
			{ label: "Careers", href: "#" },
		],
	},
	{
		group: "Legal",
		items: [
			{ label: "Privacy Policy", href: "#" },
			{ label: "Terms of Service", href: "#" },
			{ label: "Cookie Policy", href: "#" },
		],
	},
];

const socials = [
	{ Icon: Github, label: "GitHub", href: "#" },
	{ Icon: Twitter, label: "Twitter / X", href: "#" },
	{ Icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });

	return (
		<footer className="relative border-t border-white/8 bg-background overflow-hidden">
			{/* Dot grid */}
			<div
				aria-hidden
				className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_4%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]"
			/>

			{/* Ambient glow */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<motion.div
					className="absolute bottom-0 left-1/2 h-75 w-150 -translate-x-1/2 rounded-full"
					animate={{ opacity: [0.15, 0.3, 0.15] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
					style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.06), transparent 65%)" }}
				/>
			</div>

			{/* Top highlight */}
			<div
				aria-hidden
				className="pointer-events-none absolute top-0 inset-x-0 h-px"
				style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.14), transparent)" }}
			/>

			<div ref={ref} className="mx-auto w-full max-w-5xl px-4 pt-16 pb-10">
				{/* Main grid */}
				<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
					{/* Brand column */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="flex items-center gap-2 mb-4">
							<div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/8">
								<Zap className="h-3.5 w-3.5 text-white/70" />
							</div>
							<p className="text-sm font-semibold tracking-widest uppercase text-white/70">
								GarinAI
							</p>
						</div>
						<p className="max-w-52 text-[13px] text-white/35 leading-relaxed">
							Decentralised AI infrastructure for transparent model publishing,
							usage tracking, and revenue sharing.
						</p>

						{/* Social icons */}
						<div className="mt-6 flex items-center gap-2">
							{socials.map(({ Icon, label, href }, i) => (
								<motion.div
									key={label}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={inView ? { opacity: 1, scale: 1 } : {}}
									transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
								>
									<Link
										href={href}
										aria-label={label}
										className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/35 transition-all duration-300 hover:border-white/22 hover:bg-white/10 hover:text-white/80 hover:scale-110"
									>
										<Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-105" />
									</Link>
								</motion.div>
							))}
						</div>

					</motion.div>

					{/* Link groups */}
					{linkGroups.map(({ group, items }, gi) => (
						<motion.div
							key={group}
							initial={{ opacity: 0, y: 16 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.15 + gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
						>
							<p className="mb-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-white/28">
								{group}
							</p>
							<ul className="space-y-2.5">
								{items.map(({ label, href }) => (
									<li key={label}>
										<Link
											href={href}
											className="group inline-flex items-center gap-1 text-[13px] text-white/40 transition-all duration-200 hover:text-white/75"
										>
											<span className="relative">
												{label}
												<span className="absolute bottom-0 left-0 h-px w-0 bg-white/30 transition-all duration-300 group-hover:w-full" />
											</span>
											<ArrowUpRight className="h-2.5 w-2.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-60 group-hover:translate-x-0 group-hover:translate-y-0" />
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={inView ? { scaleX: 1 } : {}}
					transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
					className="mt-14 h-px origin-left"
					style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.04), transparent)" }}
				/>

				{/* Bottom bar */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row"
				>
					<p className="text-[12px] text-white/22">
						© {new Date().getFullYear()} GarinAI. All rights reserved.
					</p>
					<div className="flex items-center gap-4 text-[12px] text-white/18">
						<span>Built on EVM</span>
						<span className="h-3 w-px bg-white/10" />
						<span>Transparent by design</span>
						<span className="h-3 w-px bg-white/10" />
						<motion.span
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 3, repeat: Infinity }}
							className="font-mono"
						>
							v1.0.0-beta
						</motion.span>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
