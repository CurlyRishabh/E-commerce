const express = require("express");
const cors = require("cors");

// const itemsRoutes = require('./routes/items')
const userRoutes = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/user",userRoutes);
// app.use("/items", itemsRoutes);
app.listen(3001, () => {
	console.log("server running on 3001");
});
