

'use client';
import React from 'react';
import { WavePath } from "./wave-path";
import { cn } from '@/lib/utils';

export default function NewSection() {
	return (
		<div className="relative w-full flex flex-col items-center justify-center py-16">
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
					'blur-[30px]',
				)}
			/>

			<div className="flex w-[70vw] flex-col items-end">
				<WavePath className="mb-6" />
				<div className="flex w-full flex-col items-end">
					<div className="flex justify-end">
						<p className="text-muted-foreground mt-1 text-xs">Why GarinAI</p>
						<p className="text-foreground/80 ml-6 w-3/4 text-lg md:text-2xl">
							The AI economy belongs to its creators. Every model, dataset, and
							inference — recorded on-chain, attributed to its source, and rewarded fairly.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}