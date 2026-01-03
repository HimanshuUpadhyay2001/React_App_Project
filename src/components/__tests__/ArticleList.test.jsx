import { render, screen } from "@testing-library/react";
import ArticleList from "../ArticleList";

test("renders list of articles", () => {
  const articles = [
    { id: 1, title: "Article 1", abstract: "Desc 1", url: "#" },
    { id: 2, title: "Article 2", abstract: "Desc 2", url: "#" }
  ];

  render(<ArticleList articles={articles} />);

  expect(screen.getByText("Article 1")).toBeInTheDocument();
  expect(screen.getByText("Article 2")).toBeInTheDocument();
});
