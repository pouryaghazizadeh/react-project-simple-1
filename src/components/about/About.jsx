import "./aboutStyle.css";
const Aboute = ({ mood, DarkMood }) => {
  //note => this component have tow h2 title one of them is for mobile screen
  return (
    <div
      className="mother-container"
      style={mood ? DarkMood.bg.d2 : DarkMood.bg.d2}
    >
      <h2 className="title-about1" style={mood ? DarkMood.c.l : DarkMood.c.l}>
        TvMaze Api
      </h2>
      <div className="card-about" style={mood ? DarkMood.bg.l : DarkMood.bg.d}>
        <h2 className="title-about2" style={mood ? DarkMood.c.d : DarkMood.c.l}>
          TvMaze Api
        </h2>
        <img
          className="image-tvshow-about"
          alt="logoTvMaze"
          src="data:image/png;base64,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"
        />
        <div className="description-div">
          <p className="description" style={mood ? DarkMood.c.d : DarkMood.c.l}>
            <b>
              this app use api from Tvmaze. Tvmaze is a website that
              Presentation series and also free api for developers if you want
              more information please click on this button.
            </b>
          </p>
          <a
            href="https://www.tvmaze.com/"
            type="button"
            className="btn btn-primary "
            id="button-link-tvmaze"
            style={mood ? DarkMood.c.d : DarkMood.c.l}
          >
            Click
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboute;
