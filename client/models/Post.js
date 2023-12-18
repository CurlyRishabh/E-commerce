import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema(
	{
		Name: {
			type: String,
			required: true,
		},
		Password: {
			type: String,
			required: true,
		},
	}
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
