import React, { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

// ส่วนประกอบอื่น ๆ ที่จำเป็น (NavBar, Footer, Logo)
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

// รวมข้อมูลทั้งหมดไว้ในไฟล์เดียว
const experiencesData = {
	INFO: {
		main: {
			title: "Full stack Developer",
		},
		experiences: {
			title: "My Experiences",
			description: "A summary of my professional journey and skills.",
		},
	},
	SEO: [
		{
			page: "experiences",
			description: "Description for experiences page.",
			keywords: ["experience", "skills", "work"],
		},
	],
	myExperiences: [
		{
			date: "April 2024 - Now",
			title: "Junior Software Developer Bootcamp: Generation Thailand",
			description:
				"Learned to build web applications using React, Node.js, and MongoDB. Acquired essential career-switching skills and developed a final project (Voyage).",
			details: [
				"Learned to build web applications using React for the front-end, Node.js for the back-end, and MongoDB as a database.",
				"Acquired essential career-switching skills, such as growth mindset, effective communication, agile methodologies, and teamwork.",
				"Developed a final project (Voyage) demonstrating the ability to apply new skills in a practical setting.",
			],
		},
		{
			date: "2019 - 2024",
			title: "Owner / Manager: Family restaurant - souvenir shop",
			description:
				"Managed day-to-day operations, transitioned business to online platforms, and achieved consistent profitability and growth.",
			details: [
				"Managed day-to-day operations, demonstrating strong leadership, problem-solving, and decision-making skills.",
				"Successfully transitioned the business to online platforms, increasing revenue by 30%.",
				"Achieved consistent profitability and growth through effective planning, resource management, and customer service.",
			],
		},
		{
			date: "2017 – 2019",
			title: "Assistant Restaurant Manager - Acting Manager: S&P Syndicate Public Co., Ltd",
			description:
				"Led team of 20+, improved efficiency, implemented new training programs, and optimized operations.",
			details: [
				"Led team of 20+, improving efficiency and reducing staff turnover by 15%",
				"Implemented new training programs, increasing customer satisfaction by 25%",
				"Optimized operations through data-driven decision making",
			],
		},
	],
};

const ExperienceCard = ({ date, title, description, details }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="flex mb-8 border-l-2 border-gray-200 pl-8">
			<div className="w-1/5 pr-4">
				<div className="text-sm text-gray-600">{date}</div>
			</div>
			<div className="w-4/5">
				<h3 className="text-lg font-semibold mb-2">{title}</h3>
				<p className="text-gray-700 mb-2">{description}</p>
				<button
					className="text-blue-600 font-semibold flex items-center"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? "Hide Details" : "Show Details"}
					<FontAwesomeIcon
						className="ml-1 text-xs"
						icon={isExpanded ? faChevronUp : faChevronDown}
					/>
				</button>
				{isExpanded && (
					<ul className="mt-2 list-disc pl-5">
						{details.map((detail, index) => (
							<li key={index} className="text-gray-700 mb-1">
								{detail}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

const Experiences = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = experiencesData.SEO.find(
		(item) => item.page === "experiences"
	);

	return (
		<React.Fragment>
			<HelmetProvider>
				<Helmet>
					<title>{`Experiences | ${experiencesData.INFO.main.title}`}</title>
					<meta
						name="description"
						content={currentSEO?.description || ""}
					/>
					<meta
						name="keywords"
						content={currentSEO?.keywords?.join(", ") || ""}
					/>
				</Helmet>

				<div className="min-h-screen bg-gray-100">
					<NavBar active="experiences" />

					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
						<div className="about-logo-container flex justify-start pt-6">
							<div className="about-logo fixed top-[4vh] border border-white rounded-full shadow-lg">
								<Logo width={46} />
							</div>
						</div>
						<div className="mt-24 ">
							<div className="title projects-title ">
								My journey of growth and learning through
								diverse experiences.
							</div>
							<p className="text-xl text-gray-600 mb-8"></p>

							<div className="space-y-8">
								{experiencesData.myExperiences.map(
									(experience, index) => (
										<ExperienceCard
											key={index}
											date={experience.date}
											title={experience.title}
											description={experience.description}
											details={experience.details}
										/>
									)
								)}
							</div>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</HelmetProvider>
		</React.Fragment>
	);
};

export default Experiences;
