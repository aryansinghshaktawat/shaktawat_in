"use client";
import React from 'react';
import Link from 'next/link';

const ContactInvite: React.FC = () => {
	return (
		<section className="max-w-3xl mx-auto p-8 glass rounded-3xl text-center">
			<h3 className="text-2xl font-space-grotesk font-bold text-white mb-3">Want to collaborate?</h3>
			<p className="text-slate-300 mb-6">I'm open to projects, internships, and learning opportunities. Feel free to reach out — I reply quickly.</p>
			<div className="flex flex-wrap justify-center gap-4">
				<a
					href="mailto:hello@aryansinghshaktawat.com"
					className="bg-cyan-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
				>
					Email Me
				</a>
				<Link
					href="/contact"
					className="border border-slate-600 text-slate-200 px-6 py-3 rounded-full hover:border-cyan-400"
				>
					Contact Form
				</Link>
			</div>
		</section>
	);
};

export default ContactInvite;
