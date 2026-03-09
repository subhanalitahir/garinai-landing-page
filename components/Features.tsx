"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoPricing } from "./bento-pricing";

export default function Features() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div className="bg-background relative flex size-full min-h-screen items-center justify-center overflow-hidden">
			{/* Dot grid */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 size-full bg-[radial-gradient(color-mix(in_oklab,white_6%,transparent)_1px,transparent_1px)] bg-size-[14px_14px]"
			/>

			{/* Ambient orbs */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div
					className="absolute -top-48 left-1/3 h-150 w-150 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(255,255,255,0.045), transparent 65%)" }}
				/>
				<div
					className="absolute -bottom-40 right-1/4 h-125 w-125 rounded-full"
					style={{ background: "radial-gradient(circle, rgba(255,255,255,0.025), transparent 65%)" }}
				/>
			</div>

			{/* Top edge line */}
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
						Infrastructure
					</span>
					<h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl xl:text-6xl">
						Platform Features
					</h1>
					<p className="mx-auto mt-5 max-w-lg text-sm text-white/45 leading-relaxed md:text-base">
						Everything you need to discover, deploy, and earn from AI models — built on a transparent, decentralised foundation.
					</p>
				</motion.div>
				<BentoPricing />
			</section>
		</div>
	);
}
