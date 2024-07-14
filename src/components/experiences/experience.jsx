import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./style/experience.css";

const Experience = (props) => {
	const { date, title, description, details } = props;
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="experience">
			<div className="experience-left-side">
				<div className="experience-date">{date}</div>
			</div>

			<div className="experience-right-side">
				<div className="experience-title">{title}</div>
				<div className="experience-description">{description}</div>
				<div
					className="experience-toggle"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? "Hide Details" : "Show Details"}
					<FontAwesomeIcon
						style={{ fontSize: "12px", marginLeft: "5px" }}
						icon={isExpanded ? faChevronUp : faChevronDown}
					/>
				</div>
				{isExpanded && (
					<ul className="experience-details">
						{details.map((detail, index) => (
							<li key={index}>{detail}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Experience;
