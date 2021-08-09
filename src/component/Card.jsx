import Data from "../db/data.json";
import "../component/card.css";
// import { useState } from "react";
// import { useContext } from "react";

const Card = () => {

  // const [searchParam] = useState(["summary", "name"])
  // const[search ,setSearch] = useState("")

  // const  search =()=>{
  //   return(
  //     Data.filter(()=>{
  //       return(

  //         searchParam.some((newItem)=>{
  //           return(
  //             <></>

  //           )

  //         })
  //       )
  //     })

  //   )
  // }
  return (
    <div className="container-card">
      {Data.map((data, index) => {
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

  // const [error, setError] = useState(null); //this use state is for check error
  // const [isLoaded, setIsLoaded] = useState(false); //this use state active when data loading
  // const [items, setItems] = useState([]); // this is for update data that comming from api
  // const [q, setQ] = useState(""); //this useState is for set valeu from search box
  // const [searchParam] = useState(["capital", "name"]); // this is useState when using that you want check data api and value search box
  // // part1 => use,  useEffect and fetch for get api
  // useEffect(() => {
  //   fetch("https://restcountries.eu/rest/v2/all") //our api
  //     .then((res) => res.json()) //1=>this line our api become to json
  //     .then(
  //       (result) => {
  //         setIsLoaded(true); // use this that app Understand finish loading
  //         setItems(result); //data seted
  //       },

  //       (error) => {
  //         //is important to handel error here
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  // //this function filter our card when user searching sometiog
  // function search(items) {
  //   //item is updated value of searchBox
  //   return items.filter((item) => {
  //     return searchParam.some((newItem) => {
  //       //some() methode is for check data if you whant more information go to (MDN)
  //       return (
  //         item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
  //       );
  //     });
  //   });
  // }

  // // write Condition for if we have any problem
  // if (error) {
  //   return <>{error.message}</>;
  // } else if (!isLoaded) {
  //   return <>loading...</>;
  // } else {
  //   return (
  //     <div className="wrapper">
  //       {/* this is mother tag */}

  //       <div className="search-wrapper">
  //         {/* this div have search box */}
  //         <input
  //           type="search"
  //           name="search-form"
  //           id="search-form"
  //           className="search-input"
  //           placeholder="Search for..."
  //           value={q} //q comming from use state
  //           onChange={(e) => setQ(e.target.value)} //get and update value
  //         />
  //       </div>
  //       {/* this div is our cards */}
  //       <div className="card-grid">
  //         {search(items).map((item) => (
  //           <div>
  //           <div className="card">
  //             <div className="Card" key={item.callingCodes}>
  //               <h2 className="card-name">{item.name}</h2>
  //               <img className="img-card" src={item.flag} alt={item.name} />
  //               <ol className="card-list">
  //                 <li>population: {item.population}</li>
  //                 <li>Region: {item.region}</li>
  //                 <li>Capital:{item.capital}</li>
  //               </ol>
  //             </div>
  //           </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
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
