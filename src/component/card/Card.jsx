import Data from "../db/data.json";
import "./card.css";

const Card = ({ update, mood, DarkMood }) => {
  let tostring = "";
  tostring.concat("", update);
  tostring = tostring.toLocaleLowerCase().toString();
  let p = [];
  p.push(update);

  function FilterDataSearch() {
    if (p.length >= 1) {
      return Data.filter((i) => {
        //i is index
        return (i = i.name && i.summary.match(p));
      });
    }
  }

  return (
    <div
      className="container-card"
      style={mood ? DarkMood.bg.d2 : DarkMood.bg.l}
    >
      {FilterDataSearch().map((data, index) => {
        return (
          <div
            key={index}
            className="div-cards"
            style={mood ? DarkMood.bg.l : DarkMood.bg.d}
          >
            <h2 className="title" style={mood ? DarkMood.c.d : DarkMood.c.l}>
              {data.name}
              {`S${data.season}E${data.number}`}
            </h2>
            <img
              src={data.image.original}
              alt={data.name}
              className="img-card"
            />
            <p
              className="Description-card"
              style={mood ? DarkMood.c.d : DarkMood.c.l}
            >
              {" "}
              {data.summary.split("</p>").join("").replace("<p>", "")}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
