import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <>
      <SearchBar />
      <Link to="/details">asa</Link>
    </>
  );
}

export default Home;
