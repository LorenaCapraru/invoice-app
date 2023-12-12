import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Main from "./Main/Main";
import "./page.css";

const PriceList = () => {
  return (
    <main>
      <Sidebar />
      <div className="home-body">
        <Header />
        <Main />
      </div>
    </main>
  );
};

export default PriceList;
