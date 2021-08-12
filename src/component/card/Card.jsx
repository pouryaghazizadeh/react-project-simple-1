import Data from "../db/data.json";
import "./card.css";

const Card = ({ update,mood,DarkMood }) => {
  let tostring = "";
  tostring.concat("", update);
  tostring = tostring.toLocaleLowerCase().toString();
  let p = [];
  p.push(update);

  function FilterDataSearch() {
    if (p.length >= 1) {
      return Data.filter((i) => {
        //i is index
        return i.name && i.summary.match(p);
      });
    }
  }

  return (
    <div className="container-card" style = {mood ?DarkMood.darkMood:DarkMood.lightMood}>
      {FilterDataSearch().map((data, index) => {
        return (
          <div key={index} className="div-cards" style={mood?DarkMood.lightMood:DarkMood.darkMood}>
            <h2 className="title">
              {data.name}
              {`S${data.season}E${data.number}`}
            </h2>
            <img
              src={data.image.original}
              alt={data.name}
              className="img-card"
            />
            <p className="Description-card">
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
