import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Store } from "./store/Store";
import { useReducer } from "react";
import RecipeDetails from "./components/RecipeDetails";

const reducer = (state, action) => {
  if (action.type === "ADD_INPUT") {
    return (state = action.payload.searchedQuery);
  }
};

function App() {
  const [userInput, dispatchUserInput] = useReducer(reducer, "Pizza");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/recipes"
            element={
              <Store.Provider value={{ userInput, dispatchUserInput }}>
                <Recipes />
              </Store.Provider>
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
