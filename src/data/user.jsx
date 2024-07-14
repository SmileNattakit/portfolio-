const INFO = {
	main: {
		name: "Nattakit Rattanakeha",
		title: "Full Stack Developer | Entrepreneurial Strategist", // ปรับ title ให้เหมาะสม
		email: "nattakit.rattanakeha@gmail.com",
		logo: "../logo.png", // ตรวจสอบว่ามี logo.png หรือไม่ ถ้าไม่มีให้ลบหรือใส่ path ที่ถูกต้อง
	},

	socials: {
		github: "https://github.com/SmileNattakit",
		linkedin: "https://www.linkedin.com/in/nattakit-rattanakeha/",
		// เพิ่ม portfolio (ถ้ามี): "https://your-portfolio-link.com", // ถ้ามี portfolio ให้ใส่ link ตรงนี้
	},

	homepage: {
		title: "Nattakit Rattanakeha",
		description:
			"Passionate coder and entrepreneurial strategist, weaving innovative solutions and nurturing business growth in the ever-evolving digital landscape.",
	},

	about: {
		title: "Get to Know Me", // เปลี่ยน title ให้กระชับ
		description: `
A passionate software developer, With over 7 years of experience in restaurant management, I've honed my leadership, problem-solving, and communication skills, which I'm eager to apply to the tech industry. Recently graduated from Generation Thailand's Junior Software Developer Bootcamp, I'm proficient in the MERN stack and eager to contribute my skills to innovative projects. My unique background has instilled in me a strong work ethic, a collaborative spirit, and a passion for creating solutions that make a real difference in the world. I'm committed to continuous learning and growth, and I'm excited to embark on this new chapter in my career.`,
	},

	articles: {
		// ถ้าไม่มี articles ให้ลบส่วนนี้ออก
		title: "Articles & Thoughts",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.", // ปรับ description ตามความเหมาะสม
	},

	projects: [
		{
			title: "JobSquare",
			subTitle: "Talent Acquisition and Career Matching Platform",
			description: [
				"MERN Stack (MongoDB, Express.js, React, Node.js): Developed a modern, high-performance, and scalable platform for efficient job matching and talent acquisition.",
				"User Authentication with JWT: Implemented secure login and registration processes to protect user data and ensure platform integrity.",
				"Job Posting and Application: Streamlined the job posting and application process, facilitating seamless interaction between job seekers and employers.",
				"State Management with Jotai: Utilized Jotai for efficient state management, enhancing application performance and responsiveness.",
				"Integrated Cloudinary: Leveraged Cloudinary to optimize the storage, management, and delivery of media assets, including resumes and company logos.",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View on GitHub",
			link: "https://github.com/SmileNattakit/job-square-app",
			linkServer:
				"https://github.com/SmileNattakit/job-square-app-server",
			deploymentLink: "https://job-square-app.vercel.app/", // replace with actual deployment link
			status: "In Development",
			img: "./project/jobsquare.png", // replace with actual image path
		},
		{
			title: "Voyage",
			subTitle: "Curated Travel Package Platform",
			description: [
				"MERN Stack (MongoDB, Express.js, React, Node.js): Developed a modern, high-performance, and scalable platform for a seamless travel booking experience.",
				"User Authentication with JWT: Implemented secure login and registration processes to protect user data and ensure platform integrity.",
				"Package Browsing and Booking: Created an intuitive interface for browsing and booking travel packages from around the world.",
				"State Management with Jotai: Utilized Jotai for efficient state management, enhancing application performance and responsiveness.",
				"Integrated Cloudinary: Leveraged Cloudinary to optimize the storage, management, and delivery of media assets, including destination images.",
			],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View on GitHub",
			link: "https://github.com/Atreides-Group-5/frontend",
			linkServer: "https://github.com/Atreides-Group-5/backend",
			deploymentLink: "https://voyage-frontend-chi.vercel.app", // replace with actual deployment link
			status: "In Development",
			img: "./project/voyage.png", // replace with actual image path
		},
	],

	skills: [
		// เพิ่มส่วนนี้สำหรับแสดงทักษะ
		"MERN Stack",
		"JavaScript",
		"SQL",
		"Tailwind",
		"RESTful API",
		"AI Tools",
		"Prompt Engineering",
		"Agile/Scrum",
		"Team Management",
		"Problem-Solving",
		"Leadership",
		"Communication",
		"English (Intermediate)",
		"Thai (Native)",
	],

	experience: [
		// เพิ่มส่วนนี้สำหรับแสดงประสบการณ์ทำงาน
		{
			title: "Junior Software Developer Bootcamp",
			company: "Generation Thailand",
			date: "April 2024 - August 2024",
			description:
				"Learned to build web applications using React for the front-end, Node.js for the back-end, and MongoDB as a database. Acquired essential career-switching skills, such as growth mindset, effective communication, agile methodologies, and teamwork. Developed a final project (Voyage) demonstrating the ability to apply new skills in a practical setting.",
		},
	],

	education: [
		// เพิ่มส่วนนี้สำหรับแสดงการศึกษา
		{
			degree: "B.S. (Culinary Technology and Service)",
			school: "Suan Dusit University",
			year: "2017",
		},
	],
};

export default INFO;
