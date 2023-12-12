import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Main from "../clients/Main/Main";
import "./page.css";

const Clients = () => {
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

export default Clients;
