import ShopList from "../components/shop/ShopList";

const ShopListPage = () => {
  return (
    <div>
      <h1 className="title">Shop List</h1>
      <ShopList />
      <style>
        {`
            .title {
                text-align: center;
            }
        `}
      </style>
    </div>
  );
};

export default ShopListPage;
