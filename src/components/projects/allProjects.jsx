import React from "react";
import Project from "./project";
import INFO from "../../data/user";

const AllProjects = () => {
	return (
		<div className="grid grid-cols-1 md:grid-row-1 lg:grid-row-1 gap-6">
			{INFO.projects.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	);
};

export default AllProjects;
