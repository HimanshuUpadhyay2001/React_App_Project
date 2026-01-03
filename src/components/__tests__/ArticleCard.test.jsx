import { render, screen } from "@testing-library/react";
import ArticleCard from "../ArticleCard";

test("renders article title and abstract", () => {
  const article = {
    title: "Test Article",
    abstract: "This is a test abstract",
    url: "https://example.com"
  };

  render(<ArticleCard article={article} />);

  expect(screen.getByText("Test Article")).toBeInTheDocument();
  expect(screen.getByText("This is a test abstract")).toBeInTheDocument();
  expect(screen.getByText(/read more/i)).toBeInTheDocument();
});
