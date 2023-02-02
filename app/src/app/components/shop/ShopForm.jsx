import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopService from "../../../src/services/shop.service";
import TokenService from "../../../src/services/token.service";

const ShopForm = () => {
  const [shop, setShop] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setShop({ ...shop, [e.target.name]: e.target.value });
    console.log(shop);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = TokenService.getTokenFromLocalStorage();
      const { accessToken } = await ShopService.create(shop, token);
      TokenService.setTokenInLocalStorage(accessToken);
      setShop(token);
      navigate("/shops");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h1 className="title">Create a new shop</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={shop.name || ""}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={shop.description || ""}
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={shop.location || ""}
            onChange={handleChange}
          />
          <label htmlFor="imageUrl">ImageUrl</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={shop.imageUrl || ""}
            onChange={handleChange}
          />
          <input type="submit" value="Create" />
        </div>
      </form>
      <style>
        {`
            .title {
                text-align: center;
            }
            
            .form {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            `}
      </style>
    </>
  );
};

export default ShopForm;
