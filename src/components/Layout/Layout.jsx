import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

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
      <Footer />
    </>
  );
}

export default Layout;
