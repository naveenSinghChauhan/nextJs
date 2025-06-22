"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
	{
		id: "app-dev",
		title: "Application Development",
		icon: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Apps_illustration.svg",
		description:
			"We offer end-to-end application development services to create robust and scalable apps tailored to your business needs. Our solutions ensure seamless user experiences and high performance across platforms.",
		services: [
			"Mobile App Development services",
			"Cross-Platform Development",
			"Flutter App Development Services",
			"React Native App Development",
			"Android App Development Services",
			"IOS App Development Services",
			"Progressive Web App Development",
			"Wearable App Development",
		],
		icons: [
			"https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
			"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
			"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
		],
	},
	{
		id: "soft-dev",
		title: "Software Development",
		icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Software-icon.svg",
		description:
			"Our software development services provide custom solutions that align with your strategic goals. We deliver high-quality, efficient, and secure software tailored to your unique business requirements.",
		services: [
			"Custom Software Development",
			"SaaS Development",
			"Software Integration",
			"Enterprise Software Development",
			"API Development company",
			"Software Testing Services",
		],
		icons: [
			"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
			"https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
		],
	},
	{
		id: "digital-transformation",
		title: "Digital Transformation",
		icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Digital_transformation_icon.svg",
		description:
			"Transform your business digitally with our comprehensive services. We focus on leveraging technology to optimize processes, enhance customer experiences, and drive innovation.",
		services: [
			"Digital Strategy Consulting",
			"Customer Experience Enhancement",
			"Change Management",
			"Process Optimization",
			"Technology Implementation",
		],
		icons: [
			"https://upload.wikimedia.org/wikipedia/commons/3/3b/Internet_of_Things_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/0/06/Data_Analytics_Icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/4/42/Automation_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/8/89/Chat_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/6/6f/Artificial_Intelligence_logo.svg",
		],
	},
	{
		id: "Business Automation",
		title: "Business Automation",
		icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/Automation_icon.svg",
		description:
			"Our business automation services streamline operations, reduce manual effort, and improve efficiency. We implement automation solutions that boost productivity and cut costs.",
		services: [
			"Workflow Automation",
			"RPA (Robotic Process Automation)",
			"CRM Automation",
			"Supply Chain Automation",
			"Document Management Systems",
		],
		icons: [
			"https://upload.wikimedia.org/wikipedia/commons/6/6f/Artificial_Intelligence_logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/3/3b/Internet_of_Things_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/c/cf/Microsoft_Power_BI_Logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/4/42/Automation_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/6/65/Big_data_icon.svg",
		],
	},
	{
		id: "Artificial Intelligence Development",
		title: "Artificial Intelligence Development",
		icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Artificial_Intelligence_logo.svg",
		description:
			"Bring AI into your business operations to automate tasks and facilitate insight-driven decisions. Our artificial intelligence solutions are designed to perform profound analysis and provide personalized customer experiences.",
		services: [
			"AI Chatbot Development",
			"AI Development",
			"Generative AI development",
			"AI Recommendation Engine Development",
			"AI Agent Development",
			"AI Consulting",
			"ML Development",
			"Computer Vision Software Development",
			"Agentic AI Development",
			"Enterprise AI Development",
		],
		icons: [
			"https://upload.wikimedia.org/wikipedia/commons/1/19/Chatbot_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/6/6f/Artificial_Intelligence_logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/0/08/Generative_AI_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/e/e1/Customer_service_bot_icon.svg",
			"https://upload.wikimedia.org/wikipedia/commons/8/89/Voice_assistant_icon.svg",
		],
	},
	{
		id: "Cloud Implementation",
		title: "Cloud Implementation",
		icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Cloud_computing_icon.svg",
		description:
			"Migrate to the cloud with confidence. Our cloud implementation services ensure smooth transitions and efficient operations in the cloud environment, enhancing flexibility and scalability.",
		services: [
			"Cloud Strategy and Consulting",
			"Cloud Migration",
			"Cloud Security Solutions",
			"Multi-Cloud Management",
			"Cloud Infrastructure",
		],
		icons: [
			"https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
			"https://upload.wikimedia.org/wikipedia/commons/3/35/Devops-toolchain.svg",
			"https://upload.wikimedia.org/wikipedia/commons/3/3b/Internet_of_Things_icon.svg",
		],
	},
	{
		id: "Staff Augmentation",
		title: "Staff Augmentation",
		icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Teamwork_icon.svg",
		description:
			"Boost your team’s capabilities with our staff augmentation services. We provide skilled professionals to fill gaps and support your projects efficiently",
		services: [
			"IT Staffing Solutions",
			"Project-Based Augmentation",
			"On-Demand Expertise",
			"Team Expansion",
			"Skills Gap Analysis",
		],
		icons: [
			"https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
			"https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Corporate_Logo.svg",
			"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
			"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
		],
	},
];
const TabSection = () => {
	const [activeTab, setActiveTab] = useState("app-dev");
	const current = categories.find((cat) => cat.id === activeTab);

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const headingVariants = {
		hidden: { opacity: 0, y: 5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	const paragraphVariants = {
		hidden: { opacity: 0, y: -5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: 0.2 },
		},
	};

	return (
		<section className="bg-[#f9fafe] py-16 px-4 md:px-10">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-10" ref={ref}>
					<motion.h2
						className="text-3xl md:text-4xl font-bold text-gray-900"
						variants={headingVariants}
						initial="hidden"
						animate={controls}
					>
						Our Offerings to Cultivate Tech Empowerment
					</motion.h2>
					<motion.p
						className="text-gray-700 max-w-3xl mx-auto mt-4"
						variants={paragraphVariants}
						initial="hidden"
						animate={controls}
					>
						Our comprehensive services help us ignite a digital transformation
						journey for our clients. Not only do we give an automation touch to
						the business workflows but also help them walk a step ahead of the
						competitors.
					</motion.p>
				</div>

				{/* Your existing tab layout here */}
				<div className="flex flex-col md:flex-row bg-white shadow-xl p-6 md:p-10 rounded-3xl gap-6">
					<div className="md:w-1/3 bg-gray-50 rounded-lg p-4 md:p-6 space-y-3">
						{categories.map((cat) => (
							<button
								key={cat.id}
								onClick={() => setActiveTab(cat.id)}
								className={`flex items-center w-full px-4 py-3 my-2 rounded-lg text-left font-semibold transition-all duration-200 ${
									activeTab === cat.id
										? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
										: "bg-gray-100 text-black"
								}`}
							>
								<span className="mr-3 w-8 h-8 flex items-center justify-center">
									<img
										src={cat.icon}
										alt={cat.title + " icon"}
										className="w-5 h-5"
									/>
								</span>
								{cat.title}
							</button>
						))}
					</div>

					<div className="md:w-2/3 space-y-4 my-6">
						<h2 className="text-2xl font-bold text-black font-bold">{current?.title}</h2>
						<div className="border border-3 border-dashed rounded-lg py-8 px-6 my-6">
							<p className="text-gray-700">{current?.description}</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-600">
							{current?.services.map((service, idx) => (
								<a key={idx} href="#" className="hover:underline">
									{service}
								</a>
							))}
						</div>
						<div className="flex flex-wrap gap-15 mt-6">
							{current?.icons.map((icon, idx) => (
								<div
									key={idx}
									className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-black font-semibold shadow"
								>
									<img src={icon} alt={icon} className="w-8 h-8" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TabSection;