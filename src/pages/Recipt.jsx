import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "../components/Loader";

function Recipt() {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setshowRecipe] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRecipeShow = () => {
    setshowRecipe(!showRecipe);
  };

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);

  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h5>
            <b>Category:</b> {recipe.strCategory}
          </h5>
          {recipe.strArea ? (
            <h6>
              <b>Area: </b>
              {recipe.strArea}
            </h6>
          ) : null}
          <p>{recipe.strInstructions}</p>
          <button className="btn" onClick={handleRecipeShow}>
            Show Recipe
          </button>
          {showRecipe ? (
            <table className="centred" style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th> Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("strIngredient") && recipe[key]) {
                    return (
                      <tr>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          ) : null}
          {recipe.strYoutube ? (
            <div className="row">
              <h4>Video Recipe</h4>
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                width={"500px"}
                height={"500px"}
                allowFullScreen
                title={id}
                frameborder="0"
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Recipt;
