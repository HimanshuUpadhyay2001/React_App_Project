import Header from "../components/Header";
import ArticleListContainer from "../containers/ArticleListContainer";
import "../styles/app.css";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <ArticleListContainer />
    </div>
  );
};

export default Home;
