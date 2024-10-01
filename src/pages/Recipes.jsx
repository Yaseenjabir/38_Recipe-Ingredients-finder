import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import RecipesList from "../components/RecipesList";
import { Store } from "../store/Store";

const Recipes = () => {
  const { userInput, dispatchUserInput } = useContext(Store);

  const searchRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatchUserInput({
      type: "ADD_INPUT",
      payload: {
        searchedQuery: searchRef.current.value,
      },
    });
  };
  return (
    <>
      <div className="recipes">
        <div className="searchRecipe">
          <h1>
            Search With Our <span style={{ color: "blue" }}>Recipe</span>
          </h1>
          <form style={{ display: "flex", alignItems: "center" }}>
            <input
              ref={searchRef}
              type="text"
              placeholder="Tomatoe, pizza, onion"
            />
            <button
              onClick={handleSearch}
              type="submit"
              className="btn btn-primary"
            >
              <FaSearch />
            </button>
          </form>
        </div>
        <h1 style={{ textAlign: "center" }}>Recipe List For {userInput}</h1>
      </div>
      <RecipesList />
    </>
  );
};
export default Recipes;
