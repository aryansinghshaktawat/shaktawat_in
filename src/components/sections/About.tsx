"use client";
import React from "react";
import Image from "next/image";

const About = () => {
	// static heading (scramble effect removed)

	return (
		<>
			<section
				id="about"
				className="relative w-full min-h-screen overflow-hidden font-geist-mono"
			>
				{/* Floating geometric elements */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-spin-slow"></div>
					<div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-lg animate-pulse"></div>
					<div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-500/10 rounded-full animate-bounce"></div>
					<div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-lg animate-spin-slow"></div>
				</div>

				<div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
					<div className="md:grid md:grid-cols-2 md:gap-10 items-center">
						{/* Left: Intro + CTA */}
						<div className="order-2 md:order-1 animate-fade-in-up">
							<h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-4 font-space-grotesk">
								Welcome — I build and learn by doing
							</h1>
							<p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-6 font-geist-mono">
								I&apos;m{" "}
								<span className="font-bold text-white">
									Aryan Singh Shaktawat
								</span>
								, a B.Tech Computer Science student focused on practical
								learning: building tools, integrating AI models, and exploring
								cybersecurity and forensics.
							</p>

							<div className="flex flex-wrap gap-3 items-center mb-6">
								{/* action buttons removed as requested */}
							</div>
						</div>

						{/* Right: Profile card + mini-timeline */}
						<div className="order-1 md:order-2 mb-6 md:mb-0 flex justify-center animate-fade-in-up">
							<div className="w-56 md:w-72 glass hover-lift rounded-2xl overflow-hidden">
								<Image
									src="/profile.webp"
									alt="Aryan profile"
									width={448}
									height={560}
									className="w-full h-auto object-cover"
								/>
								<div className="p-4">
									<div className="text-sm text-white/60">
										B.Tech CSE · UPES
									</div>
									<div className="text-lg font-semibold text-white mt-1">
										Aryan Singh Shaktawat
									</div>
									<div className="mt-3 text-sm text-white/80">
										Hands-on in AI integrations, OSINT tooling, and
										security-focused projects.
									</div>

									<div className="mt-4 border-t border-white/20 pt-3">
										<div className="text-xs text-white/60 mb-2">
											Recent
										</div>
										<ul className="text-sm text-white space-y-2">
											<li>Rebuilding portfolio — deeper UX &amp; tooling</li>
											<li>Integrating Llama-3 in local tools</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
