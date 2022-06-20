import { useState } from "react";
import Card from "./card";
import Cards from "./cardsData";

export default function CardList() {
  const [cardsData, setCardsData] = useState(Cards);
  const [first, setFirst] = useState(-1);
  const flipcard = (id) => {
    cardsData[id].status = "active";
    setCardsData([...cardsData]);
    if (first == -1) {
      setFirst(id);
    } else {
      if (cardsData[id].id != cardsData[first].id) {
        setTimeout(() => {
          cardsData[id].status = "";
          cardsData[first].status = "";
          setCardsData([...cardsData]);
          setFirst(-1);
        }, 1000);
      } else if (cardsData[id].id == cardsData[first].id) {
        cardsData[id].status = "similar";
        cardsData[first].status = "similar";
        setCardsData([...cardsData]);
        setFirst(-1);
      }
    }
  };
  const listcard = cardsData.map((cardinfo, index) => (
    <Card cardinfo={cardinfo} key={index} id={index} flipcard={flipcard} />
  ));
  return (
    <div>
      <div className="cardlist">{listcard}</div>
    </div>
  );
}

// let counter = 0;
// cardsData.forEach((card) => {
//   if (card.status == "similar") {
//     counter++;
//   }
// });
// if (counter == 15) {
//   setTimeout(() => {
//     cardsData.map((card) => (card.status = ""));
//   }, 1000);
//   setCardsData([...cardsData]);
// }
