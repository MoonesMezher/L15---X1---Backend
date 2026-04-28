// setup
require("dotenv").config();
const express = require("express");
const app = express();

// middlewares
const morgan = require("morgan");

app.use(express.json())
app.use(morgan("dev"));

// endpoints (apis)
app.use("/api/v1/users", require("./routes/users.route"));
/* app.use("/api/v1/subjects", require("./routes/subjects.route")); */

// PORT
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Mongodb Connected Successfully");
        
        // listen
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.log("ERROR: ", err.message);
    })
