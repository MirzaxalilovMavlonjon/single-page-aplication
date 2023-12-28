import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filterCatalog, setfilterCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setfilterCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({ pathname, search: `?search=${str}` });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setfilterCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);
  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Loader /> : <CategoryList catalog={filterCatalog} />}
    </>
  );
}

export default Home;
