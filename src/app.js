// import statements
import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import {
  home,
  about,
  contact,
  privacy,
  dino,
} from "./controllers/PageController.js";

// create an instance of express
const app = express();

// use express layouts
app.use(expressLayouts);
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("layout", "layouts/main");
app.set("views", path.resolve("src", "views"));

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// page routes
app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/privacy", privacy);
app.get("/dino", dino);

// 404 page
app.get("*", (req, res) => {
  res.status(404).render("errors/404", {
    layout: "layouts/error", // override the default layout
  });
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
