import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router";

function Layout({ children }) {
  const navigate = useNavigate();
  const handleSearch = (query) => {
    navigate("/search/" + query);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {children}
    </>
  );
}

export default Layout;
