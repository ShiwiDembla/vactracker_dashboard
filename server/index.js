require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const requestRoutes = require("./routes/requests");
const vaccineRoutes = require("./routes/vaccines");
const slotsRoutes = require("./routes/slots");
const vaccinatedRoutes = require("./routes/vaccinated");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/vaccines", vaccineRoutes);
app.use("/api/slots", slotsRoutes);
app.use("/api/vaccinated", vaccinatedRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
