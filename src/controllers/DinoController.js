import { navItems, dinosaurs } from "../data/data.js";

export const dino = (req, res) => {
  res.render("pages/dino", {
    title: "Dinosaurs",
    content: "A lot of different dinosaurs...",

    navItems,
    dinosaurs,
  });
};

export const detail = (req, res) => {
  const thisDino = dinosaurs.find((dino) => dino.slug === req.params.slug);

  res.render("pages/detail", {
    thisDino,
    isHerbivore: thisDino.isHerbivore ? "Yes" : "No",
    navItems,
    dinosaurs,
  });
};
