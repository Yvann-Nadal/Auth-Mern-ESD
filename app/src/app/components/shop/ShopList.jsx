import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../src/context/UserContext";
import ShopService from "../../../src/services/shop.service";

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShops = async () => {
      const data = await ShopService.getAll();
      setShops(data);
    };
    fetchShops();
  }, []);

  return (
    <>
      <div className="list">
        {shops.map(shop => (
          <div key={shop._id}>
            <h2>{shop.name}</h2>
            <img src={shop.imageUrl} alt="img" />
            <p><strong>Description : </strong>{shop.description}</p>
            <p><strong>Location : </strong>{shop.location}</p>
          </div>
        ))}
        {user && <button onClick={() => navigate("/shops/create")}>Create new shop</button>}
      </div>
      <style>
        {`
            .list {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `}
      </style>
    </>
  );
};

export default ShopList;
