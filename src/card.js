export default function Card({ cardinfo, id, flipcard }) {
  const itemclass = cardinfo.status ? " active " : "";
  return (
    //check on click
    <div class={"card" + itemclass} onClick={() => flipcard(id)}>
      <img style={{ width: "100px" }} src={cardinfo.face} />
    </div>
  );
}
