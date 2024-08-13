import axios from "axios";
import React, { useEffect, useState } from "react";

// const baseURL = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const CocktailPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("a");
  const [loading, setLoading] = useState(false);

  // Fetch all cocktails initially
  useEffect(() => {
    // Function to fetch cocktails from API
    const fetchCocktails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https:www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`
        );
        setCocktails(response.data.drinks || []);
        console.log("response", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCocktails();
  }, [search]);

  // Handle search input change
  const handlClick = (e) => {
    setSearch(e);
  };
  console.log("cocktails >> ", cocktails);

  return (
    <>
      <div className="container py-2">
        <h3>COCKTAIL</h3>

        <button className="btn border" onClick={() => handlClick("a")}>
          A
        </button>
        <button className="btn border" onClick={() => handlClick("b")}>
          B
        </button>
        <button className="btn border" onClick={() => handlClick("c")}>
          C
        </button>
        <button className="btn border" onClick={() => handlClick("d")}>
          D
        </button>
        <button className="btn border" onClick={() => handlClick("e")}>
          E
        </button>
        <button className="btn border" onClick={() => handlClick("f")}>
          F
        </button>
        <button className="btn border" onClick={() => handlClick("g")}>
          G
        </button>
        <button className="btn border" onClick={() => handlClick("h")}>
          H
        </button>
        <button className="btn border" onClick={() => handlClick("i")}>
          I
        </button>
        <button className="btn border" onClick={() => handlClick("j")}>
          J
        </button>
        <button className="btn border" onClick={() => handlClick("k")}>
          K
        </button>
        <button className="btn border" onClick={() => handlClick("l")}>
          L
        </button>
        <button className="btn border" onClick={() => handlClick("m")}>
          M
        </button>
        <button className="btn border" onClick={() => handlClick("n")}>
          N
        </button>

        {loading ? (
          <h2 className="mt-3">Loading....</h2>
        ) : (
          <div className="row  mt-3">
            {cocktails.length > 0 ? (
              cocktails.map((cocktail, index) => {
                return (
                  <div
                    className="col col-sm-12 col-md-6 col-lg-3 my-2"
                    key={index}
                  >
                    <div className="card overflow-hidden">
                      <img
                        src={cocktail.strDrinkThumb}
                        alt={cocktail.strDrink}
                      />
                      <div className="card-body">
                        <h5 className="">Drink : {cocktail.strDrink}</h5>
                        <h6 className="">Glass : {cocktail.strGlass}</h6>
                        <p
                          className="card-text"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            height: "3em",
                            lineHeight: "1.5em",
                          }}
                        >
                          {cocktail.strInstructions}
                        </p>
                        <button
                          className="btn btn-primary w-100">
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No Cocktails Found.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default CocktailPage;
