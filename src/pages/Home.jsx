import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <h3 className="mb-4 pb-2 fw-normal">
                Check the weather forecast
              </h3>

              <div className="input-group rounded mb-3">
                <SearchBar />

                <Link to="/details">
                  <span
                    className="input-group-text border-0 fw-bold "
                    id="search-addon"
                  >
                    Check!
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
