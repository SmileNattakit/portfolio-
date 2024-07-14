import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ModalLink({ link, linkText, repoType }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<button
				onClick={openModal}
				className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out flex items-center text-sm"
			>
				<FontAwesomeIcon icon={faGithub} className="mr-2" />
				{linkText}
			</button>

			<dialog
				id={`modal-${linkText}`}
				className="modal"
				open={isModalOpen}
			>
				<div className="modal-box">
					<h3 className="font-bold text-lg">{repoType} Repository</h3>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="link link-primary"
					>
						{link}
					</a>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn" onClick={closeModal}>
								Close
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}

const Project = (props) => {
	const {
		logo,
		title,
		description,
		linkText,
		link,
		deploymentLink,
		status,
		img,
		subTitle,
	} = props;

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden flex h- mb-6">
			{/* Left section - Image with Browser Mockup */}
			<div className="w-2/5  p-4 flex items-center justify-center">
				<div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
					{/* Browser Top Bar */}
					<div className="bg-gray-200 px-4 py-2 flex items-center space-x-2">
						<div className="w-3 h-3 rounded-full bg-red-500"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
						<div className="w-3 h-3 rounded-full bg-green-500"></div>
					</div>
					{/* Image */}
					<img
						src={img}
						alt={`${title} image`}
						className="w-full h-auto"
					/>
				</div>
			</div>

			{/* Right section - Details */}
			<div className="w-3/5 p-6 flex flex-col justify-between">
				<div>
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-xl font-semibold">{title}</h2>

						{status && (
							<span className="text-sm font-medium px-4 text-white bg-blue-500 rounded-full px-3 py-1">
								{status}
							</span>
						)}
					</div>
					<h2 className="text-lg font-semibold mt-2">{subTitle}</h2>
					<ul className="list-disc list-inside text-gray-700 text-sm mb-4">
						{description.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>

				<div className="flex justify-between items-center mt-auto">
					{deploymentLink && (
						<a
							href={deploymentLink}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out flex items-center text-sm"
						>
							<FontAwesomeIcon
								icon={faExternalLinkAlt}
								className="mr-2"
							/>
							Live Demo
						</a>
					)}
					<Link
						to={link}
						className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out flex items-center text-sm"
					>
						<FontAwesomeIcon icon={faGithub} className="mr-2" />
						Client Repository
					</Link>
					<Link
						to={link}
						className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out flex items-center text-sm"
					>
						<FontAwesomeIcon icon={faGithub} className="mr-2" />
						Server Repository
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Project;
