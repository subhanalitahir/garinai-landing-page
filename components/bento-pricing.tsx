'use client';
import React from 'react';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
	title: string;
	description: string;
	className?: string;
	children?: React.ReactNode;
};

function FeatureCard({ title, description, className, children }: FeatureCardProps) {
	return (
		<div
			className={cn(
				'bg-background border-foreground/10 relative overflow-hidden rounded-md border p-6 flex flex-col gap-4',
				'supports-backdrop-filter:bg-background/10 backdrop-blur',
				className,
			)}
		>
			{children}
			<div>
				<h3 className="text-foreground text-lg font-semibold tracking-tight">{title}</h3>
				<p className="text-muted-foreground mt-2 text-sm leading-relaxed">{description}</p>
			</div>
		</div>
	);
}

export function BentoPricing() {
	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8">
			{/* Model Marketplace — wide */}
			<div
				className={cn(
					'bg-background border-foreground/10 relative w-full overflow-hidden rounded-md border lg:col-span-5',
				'supports-backdrop-filter:bg-background/10 backdrop-blur',
				)}
			>
				<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)]">
					<div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-linear-to-r mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
						<div
							aria-hidden="true"
							className={cn(
								'absolute inset-0 size-full mix-blend-overlay',
								'bg-[linear-gradient(to_right,--theme(--color-foreground/.1)_1px,transparent_1px)]',
								'bg-size-[24px]',
							)}
						/>
					</div>
				</div>
				<div className="relative flex h-full flex-col justify-end p-6">
					<h3 className="text-foreground text-xl font-semibold tracking-tight">Model Marketplace</h3>
					<p className="text-muted-foreground mt-2 max-w-sm text-sm leading-relaxed">
						Browse and discover AI models with search, filters, and detailed information.
					</p>
				</div>
			</div>

			{/* Spaces Runtime — narrow */}
			<FeatureCard
				title="Spaces Runtime"
				description="Live environments where AI models run and serve real user requests."
				className="lg:col-span-3"
			/>

			{/* Provenance Graph */}
			<FeatureCard
				title="Provenance Graph"
				description="A transparent record of how models were built and who contributed."
				className="lg:col-span-4"
			/>

			{/* Smart Contract Layer */}
			<FeatureCard
				title="Smart Contract Layer"
				description="Automated revenue sharing among contributors using blockchain contracts."
				className="lg:col-span-4"
			/>
		</div>
	);
}
