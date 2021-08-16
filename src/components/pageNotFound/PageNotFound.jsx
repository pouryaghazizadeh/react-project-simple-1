import "./PageNotFoundStyle.css";

function PageNotFound({mood,DarkMood}) {
  return (
    <div className="container-404" style ={mood?DarkMood.bg.d2:DarkMood.bg.d2}>
      <div className="card-404"  style ={mood?DarkMood.bg.l:DarkMood.bg.d}>
        <h2 className="titel-404" style ={mood?DarkMood.c.d:DarkMood.c.l}>PageNotFound</h2>

        <h3 className="description-404" style ={mood?DarkMood.c.d:DarkMood.c.l}>
          It seems you are lost! click on this for come back home
        </h3>
        <a
          href="/"
          type="button"
          className="btn btn-primary "
          id="button-link-home-404"
        >
          Click
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
