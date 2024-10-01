import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const RecipeDetails = () => {
  const API_URL = "https://forkify-api.herokuapp.com/api";

  const { recipeId } = useParams();

  const [id, setId] = useState({});
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getId = async (searchedQuery) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/get?rId=${searchedQuery}`);
        const data = await response.json();

        setId(data.recipe);
      } catch (error) {
        console.log(error);
        setId({});
      } finally {
        setIsLoading(false);
      }
    };
    getId(recipeId);
  }, [recipeId]);

  return (
    <>
      {isLoading ? (
        <div
          style={{ margin: "250px 50%", width: 60, height: 60 }}
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : Object.keys(id).length > 0 ? (
        <div className="recipeDetails">
          <div className="recipeDiv">
            <div style={{ maxWidth: "700px" }}>
              <Link to={"/recipes"}>
                <button
                  style={{ margin: "10px 0px" }}
                  type="button"
                  className="btn btn-warning"
                >
                  Back To Menu
                </button>
              </Link>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src={id.image_url}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>{id.title}</h1>
              <p>Provided by {id.publisher}</p>
              <div>
                <Link to={id.publisher_url}>
                  <button
                    style={{ margin: "0px 10px" }}
                    type="button"
                    className="btn btn-primary"
                  >
                    Pubslisher
                  </button>
                </Link>
                <Link to={id.source_url}>
                  <button
                    style={{ margin: "0px 10px" }}
                    type="button"
                    className="btn btn-success"
                  >
                    Recipe Url
                  </button>
                </Link>
              </div>
              <div style={{ marginTop: "20px" }}>
                <h1>Ingredients</h1>
                <ul className="list-group">
                  {id.ingredients.map((item, index) => (
                    <li key={index} className="list-group-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RecipeDetails;
