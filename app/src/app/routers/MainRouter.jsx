import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../src/context/UserContext";
import FormUpdatePage from "../pages/user/FormUpdatePage";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Account from "../pages/user/Account";
import ShopListPage from "../pages/ShopListPage";
import ProtectedRoute from "./ProtectedRoute";
import ShopForm from "../components/shop/ShopForm";

const MainRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />

        {!user && <Route path="/auth" element={<AuthPage />} />}

        <Route path="/users/:id" element={<FormUpdatePage />} />

        <Route path="/shops" element={<ShopListPage/>} />
        <Route path="/shops/create" element={<ShopForm />} />

        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default MainRouter;
