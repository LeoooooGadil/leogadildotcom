"use client";

import { useMDXContext } from "@/contexts/MDXContext";
import { UpdateMDX } from "@/services/mdxservices";
import { MDXData, useEditorContext } from "@/contexts/EditorContext";
import { useProjectsContext } from "@/contexts/ProjectsContext";
import { Editor } from "@tiptap/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { GetHumanizedDifference } from "@/utils/helpers";

interface EditorBottomToolbarProps {
	editor: Editor | null;
	mdxData: MDXData | null;
}

const EditorBottomToolbar = ({ editor, mdxData }: EditorBottomToolbarProps) => {
	const router = useRouter();
	const { saveState, setSaveState, setCurrentMDX } = useEditorContext();
	const { getProjectByMxd } = useProjectsContext();
	const { fetchData } = useMDXContext();
	const [isViewing, setIsViewing] = useState<boolean>(false);

	const SaveChanges = async () => {
		if (editor === null) return;

		setSaveState("saving");

		const content = editor.getHTML();

		if(!mdxData) return;

		await UpdateMDX(mdxData.id, {
			content: content,
		})
			// eslint-disable-next-line  @typescript-eslint/no-explicit-any
			.then((data: any) => {
				console.log("UpdateMDX Success");
				setCurrentMDX(data.data[0]);
				fetchData(); // fetch the data again.
				setSaveState("saved");
			})
			.catch((error) => {
				console.error("UpdateMDX Error:", error);
				setSaveState("normal");
				alert("An error occurred while saving changes." + error);
			});
	};

	const ViewProject = async () => {
		if (editor === null) return;

		setIsViewing(true);

		if(saveState === "normal") await SaveChanges();

		if(!mdxData) return;

		const slug = getProjectByMxd(mdxData.id)?.slug;
		router.push("/projects/" + slug);
	}

	// listen for changes in the editor
	useEffect(() => {
		if (editor === null) return;

		const handler = () => {
			setSaveState("normal");
		};

		editor.on("update", handler);

		return () => {
			editor.off("update", handler);
		};
	}, [editor, setSaveState]);

	return (
		<div className="fixed bottom-0 left-0 w-full z-10">
			<div className="bg-[--color-dark] border-t border-[--color-dark-accent-2] drop-shadow-[0_-35px_35px_rgba(0,0,0,0.50)] px-4 lg:px-0 py-3">
				<div className="max-w-[576px] mx-auto flex px-3 lg:px-0 justify-between">
					<div className="flex items-center">
						<div className="flex justify-between">
							{/* <h1 className=" text-sm opacity-80">Last Saved:</h1> */}
							<span className="text-sm">
								{editor === null
									? "Loading..."
									: mdxData && GetHumanizedDifference(mdxData?.update_date)}
							</span>
						</div>
					</div>
					<div className="flex items-center justify-between gap-2">
						<button
							className="transition-all bg-[--color-primary] hover:bg-[--color-primary-hover] disabled:grayscale disabled:cursor-not-allowed text-white h-10 w-24 rounded-xl flex items-center justify-center drop-shadow-lg"
							disabled={saveState === "saved" || mdxData === null}
							onClick={SaveChanges}
						>
							{saveState === "saving" ? (
								<Spinner />
							) : saveState === "saved" ? (
								"Save"
							) : (
								"Save"
							)}
						</button>
						<button
							className="transition-all bg-[--color-secondary] hover:bg-[--color-secondary-hover] disabled:grayscale disabled:cursor-not-allowed text-white h-10  w-24 rounded-xl flex items-center justify-center drop-shadow-lg"
							disabled={mdxData === null || isViewing}
							onClick={ViewProject}
						>
							{mdxData === null || isViewing ? <Spinner /> : "Publish"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Spinner = () => {
	return <ImSpinner2 className="animate-spin" size={24} />;
};

export default EditorBottomToolbar;
