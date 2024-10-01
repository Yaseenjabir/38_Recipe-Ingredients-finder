import { useContext, useEffect, useState } from "react";
import { Store } from "../store/Store";
import SingleRecipeItem from "./SingleRecipeItem";
const RecipesList = () => {
  const API_URL = "https://forkify-api.herokuapp.com/api";

  const { userInput } = useContext(Store);
  const [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async (searchedQuery) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/search?q=${searchedQuery}`);
        const data = await response.json();
        setData(data.recipes);
      } catch (error) {
        console.log(error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };
    getData(userInput);
  }, [userInput]);

  return (
    <>
      {isLoading ? (
        <div
          style={{ margin: "100px 50%", width: 60, height: 60 }}
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : data && data.length > 0 ? (
        <div className="recipeItems">
          {data.map((item, index) => (
            <SingleRecipeItem key={index} item={item} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "50px", marginTop: 100 }}>
          Item Not Found
        </p>
      )}
    </>
  );
};
export default RecipesList;
