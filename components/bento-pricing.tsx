'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, Server, GitBranch, FileCode, Star, Cpu, Zap, Database, User } from 'lucide-react';

const cardVariants = {
	hidden: { opacity: 0, y: 48 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
	}),
};

function FeatureCard({
	index,
	icon: Icon,
	title,
	description,
	className,
	inView,
	children,
}: {
	index: number;
	icon: React.ElementType;
	title: string;
	description: string;
	className?: string;
	inView: boolean;
	children?: React.ReactNode;
}) {
	return (
		<motion.div
			custom={index}
			variants={cardVariants}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			className={cn(
				'group relative overflow-hidden rounded-xl border border-white/8 bg-white/3',
				'p-6 flex flex-col gap-5 transition-colors duration-500',
				'hover:border-white/15 hover:bg-white/5',
				className,
			)}
		>
			<div
				className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
				style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(255,255,255,0.05), transparent 60%)' }}
			/>
			<div
				className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
			/>
			<div className="flex items-center justify-between">
				<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
					<Icon className="h-4 w-4 text-white/55 transition-colors duration-300 group-hover:text-white/85" />
				</div>
				<span className="font-mono text-[10px] tracking-[0.2em] text-white/15">
					{String(index + 1).padStart(2, '0')}
				</span>
			</div>
			{children}
			<div className="mt-auto">
				<h3 className="text-white text-base font-semibold tracking-tight">{title}</h3>
				<p className="mt-1.5 text-sm text-white/45 leading-relaxed">{description}</p>
			</div>
		</motion.div>
	);
}

/* ── Model Marketplace — search + model cards with rating ── */
const models = [
	{ name: 'GPT-Vision-Pro', tag: 'Vision', stars: 4.9, icon: Cpu, usage: 92 },
	{ name: 'LinguaFlow-7B',  tag: 'NLP',    stars: 4.7, icon: Zap, usage: 75 },
	{ name: 'SynthAudio-v2',  tag: 'Audio',  stars: 4.5, icon: Database, usage: 61 },
];

function ModelMockup({ inView }: { inView: boolean }) {
	return (
		<div className="mt-2 flex flex-col gap-2">
			{/* Search row */}
			<div className="flex items-center gap-2 rounded-lg border border-white/8 bg-black/20 px-3 py-2">
				<Search className="h-3 w-3 shrink-0 text-white/25" />
				<div className="h-1.5 w-24 animate-pulse rounded-full bg-white/10" />
				<div className="ml-auto flex gap-1">
					<div className="rounded-sm border border-white/8 px-1.5 py-0.5 text-[9px] text-white/20">All</div>
					<div className="rounded-sm border border-white/8 px-1.5 py-0.5 text-[9px] text-white/20">↓</div>
				</div>
			</div>
			{/* Model cards */}
			{models.map((m, i) => (
				<motion.div
					key={m.name}
					initial={{ opacity: 0, y: 10 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.5 + i * 0.13, duration: 0.5, ease: 'easeOut' }}
					className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/2.5 px-3 py-2.5 group/card hover:border-white/12 transition-colors"
				>
					{/* Icon box */}
					<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
						<m.icon className="h-3.5 w-3.5 text-white/40" />
					</div>
					{/* Info */}
					<div className="min-w-0 flex-1">
						<div className="truncate text-[11px] font-medium text-white/75">{m.name}</div>
						<div className="mt-0.5 flex items-center gap-1.5">
							<span className="rounded-sm bg-white/6 px-1 py-px text-[9px] text-white/30">{m.tag}</span>
							<Star className="h-2.5 w-2.5 fill-white/20 text-white/20" />
							<span className="text-[9px] text-white/25">{m.stars}</span>
						</div>
					</div>
					{/* Usage bar */}
					<div className="flex w-12 shrink-0 flex-col items-end gap-1">
						<span className="font-mono text-[9px] text-white/20">{m.usage}%</span>
						<div className="h-1 w-full overflow-hidden rounded-full bg-white/6">
							<motion.div
								className="h-full rounded-full bg-white/35"
								initial={{ width: 0 }}
								animate={inView ? { width: `${m.usage}%` } : {}}
								transition={{ delay: 0.65 + i * 0.13, duration: 0.9, ease: 'easeOut' }}
							/>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}

/* ── Spaces Runtime — live request feed with pulse ── */
const feedLogs = [
	{ id: 'req_8f2a', model: 'GPT-Vision-Pro', ms: '124ms' },
	{ id: 'req_3b1c', model: 'LinguaFlow-7B',  ms: '89ms'  },
	{ id: 'req_9e4d', model: 'SynthAudio-v2',  ms: '201ms' },
	{ id: 'req_2a7f', model: 'GPT-Vision-Pro', ms: '117ms' },
];

function LiveFeed({ inView }: { inView: boolean }) {
	return (
		<div className="overflow-hidden rounded-lg border border-white/8 bg-black/30">
			{/* Status bar */}
			<div className="flex items-center gap-2 border-b border-white/6 px-3 py-2">
				<span className="relative flex h-2 w-2">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
					<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
				</span>
				<span className="text-[10px] tracking-widest text-white/25 uppercase">Live</span>
				<div className="ml-auto flex items-center gap-1">
					<span className="font-mono text-[10px] text-white/20">4 req/s</span>
					<span className="h-1 w-1 rounded-full bg-white/15" />
					<span className="font-mono text-[10px] text-emerald-400/50">99.9%</span>
				</div>
			</div>
			{/* Rows */}
			<div className="divide-y divide-white/4">
				{feedLogs.map((log, i) => (
					<motion.div
						key={log.id}
						initial={{ opacity: 0, x: -10 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.42 + i * 0.1, duration: 0.4, ease: 'easeOut' }}
						className="flex items-center gap-2 px-3 py-2"
					>
						<span className="font-mono text-[9px] text-white/18">{log.id}</span>
						<span className="flex-1 truncate text-[10px] text-white/50">{log.model}</span>
						<span className="font-mono text-[9px] text-white/25">{log.ms}</span>
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/55" />
					</motion.div>
				))}
			</div>
		</div>
	);
}

/* ── Provenance Graph — layered DAG with labels ── */
type PNode = { cx: number; cy: number; label: string; icon: React.ElementType };
const pNodes: PNode[] = [
	{ cx: 22,  cy: 48, label: 'Dataset',  icon: Database },
	{ cx: 22,  cy: 88, label: 'Code',     icon: FileCode },
	{ cx: 90,  cy: 68, label: 'Training', icon: Cpu      },
	{ cx: 160, cy: 48, label: 'v1.0',     icon: Zap      },
	{ cx: 160, cy: 88, label: 'v2.0',     icon: Zap      },
	{ cx: 228, cy: 68, label: 'Deploy',   icon: Server   },
];
const pEdges = [
	'M 36 48 L 74 68',
	'M 36 88 L 74 68',
	'M 104 68 L 144 48',
	'M 104 68 L 144 88',
	'M 174 48 L 212 68',
	'M 174 88 L 212 68',
];

function ProvenanceDAG({ inView }: { inView: boolean }) {
	return (
		<div className="relative">
			<svg className="h-24 w-full" viewBox="0 0 250 112" fill="none" overflow="visible">
				{/* Edges */}
				{pEdges.map((d, i) => (
					<motion.path
						key={i}
						d={d}
						stroke="rgba(255,255,255,0.14)"
						strokeWidth="1"
						strokeDasharray="3 3"
						initial={{ pathLength: 0, opacity: 0 }}
						animate={inView ? { pathLength: 1, opacity: 1 } : {}}
						transition={{ delay: 0.38 + i * 0.09, duration: 0.6, ease: 'easeOut' }}
					/>
				))}
				{/* Node circles */}
				{pNodes.map((n, i) => (
					<motion.g key={i}
						initial={{ opacity: 0, scale: 0 }}
						animate={inView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.36 + i * 0.1, duration: 0.38, type: 'spring', stiffness: 300, damping: 18 }}
						style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
					>
						<circle cx={n.cx} cy={n.cy} r="13" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
						{/* Label */}
						<text
							x={n.cx}
							y={n.cy + 24}
							textAnchor="middle"
							fontSize="7"
							fill="rgba(255,255,255,0.28)"
							fontFamily="monospace"
						>
							{n.label}
						</text>
					</motion.g>
				))}
				{/* Author avatars below two terminal nodes */}
				{([1, 5] as const).map((ni, i) => {
					const n = pNodes[ni];
					return (
						<motion.g key={`av-${i}`}
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : {}}
							transition={{ delay: 0.85 + i * 0.1 }}
						>
							<circle cx={n.cx + (i === 0 ? -10 : 0)} cy={n.cy + 38} r="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
							<circle cx={n.cx + (i === 0 ? 2 : 10)} cy={n.cy + 38} r="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
						</motion.g>
					);
				})}
			</svg>
		</div>
	);
}

/* ── Smart Contract — contributor revenue split ── */
const contributors = [
	{ label: 'Dataset Providers', pct: 35, icon: Database },
	{ label: 'Model Trainers',    pct: 40, icon: Cpu      },
	{ label: 'Fine-tuners',       pct: 15, icon: User     },
	{ label: 'Protocol',          pct: 10, icon: Zap      },
];

function RevenueSplit({ inView }: { inView: boolean }) {
	return (
		<div className="space-y-2.5">
			{contributors.map((c, i) => (
				<motion.div
					key={c.label}
					initial={{ opacity: 0, x: 12 }}
					animate={inView ? { opacity: 1, x: 0 } : {}}
					transition={{ delay: 0.38 + i * 0.1, duration: 0.45, ease: 'easeOut' }}
				>
					<div className="mb-1 flex items-center justify-between">
						<div className="flex items-center gap-1.5">
							<c.icon className="h-2.5 w-2.5 text-white/25" />
							<span className="text-[10px] text-white/40">{c.label}</span>
						</div>
						<span className="font-mono text-[10px] text-white/25">{c.pct}%</span>
					</div>
					<div className="h-1 overflow-hidden rounded-full bg-white/6">
						<motion.div
							className="h-full rounded-full"
							style={{ background: `rgba(255,255,255,${0.12 + (c.pct / 100) * 0.38})` }}
							initial={{ width: 0 }}
							animate={inView ? { width: `${c.pct}%` } : {}}
							transition={{ delay: 0.5 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
						/>
					</div>
				</motion.div>
			))}
			{/* Total distributed */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: 0.9 }}
				className="flex items-center justify-between rounded-lg border border-white/8 bg-white/3 px-2.5 py-1.5 mt-1"
			>
				<span className="text-[9px] tracking-widest text-white/25 uppercase">Auto-distributed</span>
				<span className="font-mono text-[10px] text-white/45">100%</span>
			</motion.div>
		</div>
	);
}

/* ── Main grid ──────────────────────────────────────────────── */
export function BentoPricing() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '-80px' });

	return (
		<div ref={ref} className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-8">
			{/* Model Marketplace — wide hero card */}
			<motion.div
				custom={0}
				variants={cardVariants}
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				className={cn(
					'group relative overflow-hidden rounded-xl border border-white/8 bg-white/3 lg:col-span-5',
					'transition-colors duration-500 hover:border-white/15 hover:bg-white/5',
				)}
			>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 opacity-20"
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)',
						backgroundSize: '28px 28px',
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute -top-10 left-1/2 h-40 w-1/2 -translate-x-1/2 opacity-20"
					style={{ background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.4), transparent 70%)' }}
				/>
				<div
					className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
					style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
				/>
				<div
					className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
					style={{ background: 'radial-gradient(500px circle at 50% 0%, rgba(255,255,255,0.05), transparent 60%)' }}
				/>
				<div className="relative flex h-full flex-col p-6">
					<div className="flex items-center justify-between">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
							<Search className="h-4 w-4 text-white/55 transition-colors duration-300 group-hover:text-white/85" />
						</div>
						<span className="font-mono text-[10px] tracking-[0.2em] text-white/15">01</span>
					</div>
					<ModelMockup inView={inView} />
					<div className="mt-5">
						<h3 className="text-base font-semibold tracking-tight text-white">Model Marketplace</h3>
						<p className="mt-1.5 max-w-sm text-sm text-white/45 leading-relaxed">
							Browse and discover AI models with search, filters, and detailed information.
						</p>
					</div>
				</div>
			</motion.div>

			{/* Spaces Runtime */}
			<FeatureCard
				index={1} icon={Server} title="Spaces Runtime"
				description="Live environments where AI models run and serve real user requests."
				className="lg:col-span-3" inView={inView}
			>
				<LiveFeed inView={inView} />
			</FeatureCard>

			{/* Provenance Graph */}
			<FeatureCard
				index={2} icon={GitBranch} title="Provenance Graph"
				description="A transparent record of how models were built and who contributed."
				className="lg:col-span-4" inView={inView}
			>
				<ProvenanceDAG inView={inView} />
			</FeatureCard>

			{/* Smart Contract Layer */}
			<FeatureCard
				index={3} icon={FileCode} title="Smart Contract Layer"
				description="Automated revenue sharing among contributors using blockchain contracts."
				className="lg:col-span-4" inView={inView}
			>
				<RevenueSplit inView={inView} />
			</FeatureCard>
		</div>
	);
}
