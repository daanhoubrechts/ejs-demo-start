/**
 *
 * todo 1: render de person in contact
 * todo 2: render de navigatie items in ELKE template
 *  STAP 1: importeer
 *  STAP 2: voeg toe aan het renderobject
 *  STAP 3: voeg een navigatiebalk toe aan alle templates
 */

import { person, navItems, dinosaurs } from "../data/data.js";

export const home = (req, res) => {
  // res.render("<NAAM VAN DE VIEW>", {<DATA NAAR DE VIEW>})
  res.render("pages/home", {
    title: "Dinosaurs around the world",
    content: "Welcome to the world of dinosaurs",
    navItems,
  });
};
export const about = (req, res) => {
  res.render("pages/default", {
    title: "About us",
    content: "We are a group of dinosaur enthusiasts",
    team: [
      "T-Rex",
      "Velociraptor",
      "Stegosaurus",
      "<strong>Premium</strong> Diplodocus",
    ],
    navItems,
  });
};
export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    content: "Contact us at 09 233 40 89",
    person,
    navItems,
  });
};
export const dino = (req, res) => {
  res.render("pages/dino", {
    title: "Dinosaurs",
    content: "A lot of different dinosaurs...",

    navItems,
    dinosaurs,
  });
};
export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy",
    team: false,
    navItems,
  });
};
