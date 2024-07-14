import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";
import {
	FaJs,
	FaReact,
	FaNodeJs,
	FaDatabase,
	FaHtml5,
	FaCss3,
	FaCode,
} from "react-icons/fa";
import {
	SiExpress,
	SiMongodb,
	SiSqlite,
	SiTailwindcss,
	SiVisualstudiocode,
	SiPostman,
	SiVercel,
	SiRender,
	SiCloudinary,
	SiJsonwebtokens,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";

const TechBadge = ({ icon, text }) => (
	<div className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
		{icon}
		<span className="ml-1">{text}</span>
	</div>
);

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container flex justify-start pt-6">
						<div className="about-logo fixed top-[4vh] border border-white rounded-full shadow-lg">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container pt-[120px]">
						<div className="about-main flex flex-col lg:flex-row">
							<div className="about-right-side lg:w-3/4 pr-8">
								<h1 className="title projects-title">
									{INFO.about.title}
								</h1>
								<p className="about-subtitle text-xl mb-8 w-4/5">
									{INFO.about.description}
								</p>

								<h2 className="text-2xl font-semibold mb-4">
									🛠️ Tech Stack
								</h2>
								<div className="flex flex-wrap mb-8">
									<TechBadge
										icon={<FaJs className="mr-1" />}
										text="JavaScript"
									/>
									<TechBadge
										icon={<FaReact className="mr-1" />}
										text="React"
									/>
									<TechBadge
										icon={<FaNodeJs className="mr-1" />}
										text="NodeJS"
									/>
									<TechBadge
										icon={<SiExpress className="mr-1" />}
										text="Express.js"
									/>
									<TechBadge
										icon={<SiMongodb className="mr-1" />}
										text="MongoDB"
									/>
									<TechBadge
										icon={<SiSqlite className="mr-1" />}
										text="SQLite"
									/>
									<TechBadge
										icon={<FaHtml5 className="mr-1" />}
										text="HTML5"
									/>
									<TechBadge
										icon={<FaCss3 className="mr-1" />}
										text="CSS3"
									/>
									<TechBadge
										icon={
											<SiTailwindcss className="mr-1" />
										}
										text="TailwindCSS"
									/>
								</div>

								<h3 className="text-xl font-semibold mb-2">
									Development Tools:
								</h3>
								<div className="flex flex-wrap mb-4">
									<TechBadge
										icon={
											<SiVisualstudiocode className="mr-1" />
										}
										text="VS Code"
									/>
									<TechBadge
										icon={<SiPostman className="mr-1" />}
										text="Postman"
									/>
								</div>

								<h3 className="text-xl font-semibold mb-2">
									Deployment & Cloud Services:
								</h3>
								<div className="flex flex-wrap mb-4">
									<TechBadge
										icon={<SiVercel className="mr-1" />}
										text="Vercel"
									/>
									<TechBadge
										icon={<SiRender className="mr-1" />}
										text="Render"
									/>
									<TechBadge
										icon={<SiCloudinary className="mr-1" />}
										text="Cloudinary"
									/>
								</div>

								<h3 className="text-xl font-semibold mb-2">
									APIs & Authentication:
								</h3>
								<div className="flex flex-wrap mb-4">
									<TechBadge
										icon={<TbApi className="mr-1" />}
										text="REST API"
									/>
									<TechBadge
										icon={
											<SiJsonwebtokens className="mr-1" />
										}
										text="JWT"
									/>
								</div>

								<h3 className="text-xl font-semibold mb-2">
									AI & Emerging Tech:
								</h3>
								<div className="flex flex-wrap mb-4">
									<TechBadge
										icon={<BsRobot className="mr-1" />}
										text="AI"
									/>

									<TechBadge
										icon={<FaCode className="mr-1" />}
										text="Prompt Engineering"
									/>
								</div>
							</div>

							<div className="about-left-side lg:w-1/4 mt-8 lg:mt-0">
								<div className="about-image-container w-full lg:w-[300px]">
									<div className="about-image-wrapper inline-block overflow-hidden w-full rounded-[10%] transform rotate-3">
										<img
											src="homepage.jpg"
											alt="About"
											className="w-full"
										/>
									</div>
								</div>
								<div className="about-socials hidden lg:block pt-12 pb-12">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile lg:hidden pt-8">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
