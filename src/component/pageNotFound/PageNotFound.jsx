import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="container-404">
      <div className="card-404">
        <h3 className="titel-404">PageNotFound</h3>

        <p className="description-404">
          It seems you are lost! click on this for come back home
        </p>
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
