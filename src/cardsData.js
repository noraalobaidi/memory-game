import apple from "C:/Users/HP/Development/memory-game/src/data/apple.jpg";
import avocado from "C:/Users/HP/Development/memory-game/src/data/avocado.jpg";
import banana from "C:/Users/HP/Development/memory-game/src/data/banana.jpg";
import grapes from "C:/Users/HP/Development/memory-game/src/data/grapes.jpg";
import kiwi from "C:/Users/HP/Development/memory-game/src/data/kiwi.png";
import pineapple from "C:/Users/HP/Development/memory-game/src/data/pineapple.jpg";
import strawberry from "C:/Users/HP/Development/memory-game/src/data/strawberry.jpg";
import watermelon from "C:/Users/HP/Development/memory-game/src/data/watermelon.png";

const Cards = [
  {
    id: 1,
    face: apple,
    status: "",
  },
  {
    id: 1,
    face: apple,
    status: "",
  },
  {
    id: 2,
    face: avocado,
    status: "",
  },
  {
    id: 2,
    face: avocado,
    status: "",
  },
  {
    id: 3,
    face: banana,
    status: "",
  },
  {
    id: 3,
    face: banana,
    status: "",
  },
  {
    id: 4,
    face: grapes,
    status: "",
  },
  {
    id: 4,
    face: grapes,
    status: "",
  },
  {
    id: 5,
    face: kiwi,
    status: "",
  },
  {
    id: 5,
    face: kiwi,
    status: "",
  },
  {
    id: 6,
    face: pineapple,
    status: "",
  },
  {
    id: 6,
    face: pineapple,
    status: "",
  },
  {
    id: 7,
    face: strawberry,
    status: "",
  },
  {
    id: 7,
    face: strawberry,
    status: "",
  },
  {
    id: 8,
    face: watermelon,
    status: "",
  },
  {
    id: 8,
    face: watermelon,
    status: "",
  },
].sort((a, b) => 0.5 - Math.random());
//used sort function to shuffle the array elements

export default Cards;
