import { navigation } from "./navigation";
import { szlider } from "./slider";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".nav-content");

  const navContent = [
    {
      title: "Navigation",
      href: "#",
      drops: ["lorem1", "lorem2", "lorem3"],
      color: "#4169E1",
    },
    {
      title: "Account",
      href: "#",
      drops: "",
      color: "#4169E1",
    },
    {
      title: "Lorem 1",
      href: "#",
      drops: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
      color: "#4169E1",
    },
    {
      title: "Lorem 2",
      href: "#",
      drops: "",
      color: "#4169E1",
    },
    {
      title: "Lorem 3",
      href: "#",
      drops: "",
      color: "#4169E1",
    },
  ];

  navigation.draw(content, navigation.init(navContent));

  const sliderDiv = document.querySelector(".szlider");

  const slider_ = new szlider(sliderDiv, {
    position: "horizontal", // vertical || horizontal
    perSlide: 3,
    perMove: 1,
    margin: "0px",
    arrows: true,
    pagination: true,
    rewind: true,
    autoSlide: true,
    autoTimeout: 5000, // in miliseconds
  });

  slider_.init();
});
