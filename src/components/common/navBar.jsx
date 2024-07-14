import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
	const { active } = props;

	return (
		<div className="flex justify-center items-center">
			<nav className="fixed top-[3vh] z-50">
				<div className="w-[380px] h-10 bg-white shadow-md rounded-full flex justify-between items-center px-4">
					<ul className="flex justify-between w-full list-none">
						<li
							className={`font-bold text-sm ${
								active === "home"
									? "text-link-color"
									: "text-primary-color"
							}`}
						>
							<Link to="/">Home</Link>
						</li>
						<li
							className={`font-bold text-sm ${
								active === "about"
									? "text-link-color"
									: "text-primary-color"
							}`}
						>
							<Link to="/about">About</Link>
						</li>
						<li
							className={`font-bold text-sm ${
								active === "projects"
									? "text-link-color"
									: "text-primary-color"
							}`}
						>
							<Link to="/projects">Projects</Link>
						</li>
						<li
							className={`font-bold text-sm ${
								active === "articles"
									? "text-link-color"
									: "text-primary-color"
							}`}
						>
							<Link to="/experience">Experience</Link>
						</li>
						<li
							className={`font-bold text-sm ${
								active === "contact"
									? "text-link-color"
									: "text-primary-color"
							}`}
						>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
