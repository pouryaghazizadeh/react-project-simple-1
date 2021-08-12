import Card from "./card/Card";
const Home = ({ update,mood,DarkMood }) => {
  return (
    <div
    style = {mood ?DarkMood.darkMood:DarkMood.lightMood}
    >
      <Card update={update}  mood={mood} DarkMood={DarkMood}  />
    </div>
  );
};

export default Home;
