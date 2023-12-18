import mongoose from "mongoose";

const connect = async () => {
	try {
		if (mongoose.connection.readyState === 0) {
			await mongoose.connect(process.env.MONGO_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log("Mongo sucessful");
		} else {
			console.log("Already connected");
		}
	} catch (error) {
		throw new Error("Error in connecting to mongodb.");
	}
};

export default connect;
