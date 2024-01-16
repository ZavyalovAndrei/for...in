import { orderByProps } from "./js/app.js";


const character = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const sortItem = ["name", "level"];
console.log(orderByProps(character, sortItem));

