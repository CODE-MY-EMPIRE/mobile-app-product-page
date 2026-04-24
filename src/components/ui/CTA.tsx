'use client';

import Button from './Button';

const CTA = () => {
	return (
		<section className="py-16">
			<div className="flex flex-col justify-center items-center bg-primary/80 rounded-2xl p-10 text-center space-y-6">
				<h2>Launch your online presence today</h2>
				<p className="max-w-2xl mx-auto text-primary-foreground">
					Get your website live in just one day. No complexity, no delays - just
					a fast, clean launch.
				</p>
				<Button
					variant="primary"
					size="lg"
					className="w-1/4"
				>
					Get Started
				</Button>
			</div>
		</section>
	);
};

export default CTA;
