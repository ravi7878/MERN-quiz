const express = require("express");
const connectDB = require("./config/db");

const app = express();
// connect db
connectDB();
//init middleware
app.use(express.json({ extended: false }));

// define routes
app.use("/api/user", require("./Routes/api/user"));
app.use("/api/quiz", require("./Routes/api/quiz"));
app.use("/api/questions", require("./Routes/api/questions"));

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("API Running"));
app.listen(PORT, () => console.log(`sever started on port ${PORT}`));
