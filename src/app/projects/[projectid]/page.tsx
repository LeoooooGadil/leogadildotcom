"use client"

import React from "react";
import ProfileComponent from "@/app/components/home/landing/profilecomponent";
import { useParams } from "next/navigation";

const ProjectPage = () => {

	const params = useParams();
	const { projectid } = params;

	return (
		<div className="flex flex-col lg:flex-row">
			<div className="relative hidden lg:block">
				<ProfileComponent />
			</div>
			<div className="mt-8 flex flex-col gap-10">
				<h1>It Works. {projectid}.</h1>
			</div>
		</div>
	);
};

export default ProjectPage;
