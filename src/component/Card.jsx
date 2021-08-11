import Data from "../db/data.json";
import "../component/card.css";
// import { useState } from "react/cjs/react.development";

const Card = ({ update }) => {
  let p = [];
  p.push(update);

  function FilterDataSearch() {
    if (p.length >= 1) {
      return Data.filter((i) => {
        return i.name.match(p);
      });
    }
  }

  return (
    <div className="container-card">
      {FilterDataSearch().map((data, index) => {
        return (
          <div key={index} className="div-cards">
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

// return (

// <div className="container-card">
//   {Data.map((data, index) => {
//     return (
//       <div key={index} className="div-cards">
//         <h2 className="title">
//           {data.name}
//           {`S${data.season}E${data.number}`}
//         </h2>
//         <img
//           src={data.image.original}
//           alt={data.name}
//           className="img-card"
//         />
//         <p className="Description-card">
//           {" "}
//           {data.summary.split("</p>").join("").replace("<p>", "")}
//         </p>
//       </div>
//     );
//   })}
// </div>
// );
// };

export default Card;
