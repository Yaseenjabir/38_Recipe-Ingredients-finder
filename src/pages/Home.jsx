import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="searchRecipeDiv">
          <h1>Search Your Recipe</h1>
          <Link to={"/recipes"}>
            <button type="button" className="btn btn-primary">
              Search Recipe
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
