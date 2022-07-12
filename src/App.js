import "./App.css";
import Layout from "./Components/layout";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCategoriesAsyncAction } from "./store/category/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategoriesAsyncAction());
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
