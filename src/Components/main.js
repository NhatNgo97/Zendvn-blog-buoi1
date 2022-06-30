import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  SearchPage,
  DetailPage,
  RegisterPage,
} from "../Pages/index";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/post-detail/:slug" element={<DetailPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Main;
