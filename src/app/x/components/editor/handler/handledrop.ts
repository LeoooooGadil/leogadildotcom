
import { EditorView } from "@tiptap/pm/view";
import UploadImage from "../actions/uploadimage";
import { Slice } from "@tiptap/pm/model";

type Coordinates = {
	pos: number;
	inside: number;
  };

const DropHandler = (
	view: EditorView,
	event: DragEvent,
	_slice: Slice,
	moved: boolean
  ): boolean => {
	if (
	  !moved &&
	  event.dataTransfer &&
	  event.dataTransfer.files &&
	  event.dataTransfer.files[0]
	) {
	  const file = event.dataTransfer.files[0]; // the dropped file
	  const filesize: number = parseFloat((file.size / 1024 / 1024).toFixed(4));
  
	  if (
		(file.type === "image/jpeg" || file.type === "image/png") &&
		filesize < 10
	  ) {
		// Validate file type and size
  
		const { schema } = view.state;
		const coordinates: Coordinates | null = view.posAtCoords({
		  left: event.clientX,
		  top: event.clientY,
		});
  
		// Insert "Uploading..." placeholder text
		const placeholderText = "Uploading..";
		const placeholderNode = schema.text(placeholderText);
		let placeholderPosition = 0;
		if (coordinates !== null) {
		  const placeholderTransaction = view.state.tr.insert(
			coordinates.pos,
			placeholderNode
		  );
		  view.dispatch(placeholderTransaction);
  
		  placeholderPosition = coordinates.pos;
		}
  
		// Upload the image
		UploadImage(file)
		  .then((imageUrl) => {
			// Ensure we delete only the exact range of the placeholder
			const transaction = view.state.tr
			  .delete(placeholderPosition, placeholderPosition + placeholderText.length)
			  .insert(
				placeholderPosition,
				schema.nodes.image.create({ src: imageUrl })
			  );
			view.dispatch(transaction);
		  })
		  .catch((error) => {
			console.error("Image upload failed:", error);
			// Optionally, remove the placeholder on error
			const errorTransaction = view.state.tr.delete(
			  placeholderPosition,
			  placeholderPosition + placeholderText.length
			);
			view.dispatch(errorTransaction);
  
			window.alert(
			  "There was a problem uploading your image, please try again."
			);
		  });
	  } else {
		window.alert(
		  "Images need to be in jpg or png format and less than 10mb in size."
		);
	  }
	  return true; // handled
	}
	return false; // not handled
  };

  

export default DropHandler;