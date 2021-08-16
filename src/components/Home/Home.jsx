import Card from "../card/Card";
import "./homeStyle.css";
const Home = ({ update, mood, DarkMood }) => {
  return (
    <div style={mood ? DarkMood.darkMood : DarkMood.lightMood}>
      <img
        className="img-gameOfThrones"
        alt="gameOfThrones"
        src="https://images7.alphacoders.com/475/thumbbig-475264.webp"
      />
      <Card update={update} mood={mood} DarkMood={DarkMood} />
    </div>
  );
};

export default Home;
