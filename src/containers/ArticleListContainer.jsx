import useArticles from "../hooks/useArticles";
import ArticleTable from "../components/ArticleTable";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function ArticleListContainer() {
  const { articles, loading, error } = useArticles();

  if (loading) return <Loader />;
  if (error) return <Error />;

  return <ArticleTable articles={articles} />;
}
