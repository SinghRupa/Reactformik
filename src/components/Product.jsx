import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "../product.css";
import { Button } from "react-bootstrap";
import ProductModal from "./ProductModal";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching the products:", error));
  }, []);

  return (
    <div className="container">
      <h2
        className="py-2"
        style={{
          marginTop: "15px",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Product
      </h2>
      {/* <Link to="/Addproduct">
                <button className="btn btn1 btn-success">Add Product</button>
            </Link> */}
      <Button variant="primary" onClick={handleShow}>Add product</Button>

      <div className="row">
        {productData.length > 0 ? (
          productData.map((ele) => (
            <div className="col col-sm-12 col-md-6 col-lg-3 my-2" key={ele.id}>
              <div className="card p-3" style={{ height: "500px" }}>
                <img
                  src={ele.image}
                  className="card-img-top"
                  alt="..."
                  height={"300px"}
                  style={{ objectFit: "contain" }}
                />
                <div className="product-des">Category : {ele.category}</div>
                <div className="product-des">Rating : {ele.rating.rate}</div>
                <div className="product-des">Price : Rs.{ele.price}</div>
                <button className="btn btn-primary mt-3">ADD TO CART</button>
              </div>
            </div>
          ))
        ) : (
          <h5>{"No Data..."}</h5>
        )}
      </div>
      <ProductModal show={show} handleClose={handleClose} />

    </div>
  );
};

export default Product;




// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

// function Cocktail() {
//     const [cocktails, setCocktails] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filteredCocktails, setFilteredCocktails] = useState([]);

//     useEffect(() => {
//         axios.get(baseURL)
//             .then(response => {
//                 setCocktails(response.data.drinks);
//                 setFilteredCocktails(response.data.drinks);
//             })
//             .catch(error => {
//                 console.error("Error fetching data: ", error);
//             });
//     }, []);

//     const handleSearch = (event) => {
//         event.preventDefault();
//         const filtered = cocktails.filter(cocktail =>
//             cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredCocktails(filtered);
//     };

//     return (
//         <div>
//             <h3>COCKTAILS</h3>
//             <form className="d-flex" onSubmit={handleSearch}>
//                 <input
//                     className="form-control me-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//             <div className="mt-3">
//                 {filteredCocktails.length > 0 ? (
//                     <ul>
//                         {filteredCocktails.map(cocktail => (
//                             <li key={cocktail.idDrink}>
//                                 {cocktail.strDrink}
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No cocktails found.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Cocktail;
