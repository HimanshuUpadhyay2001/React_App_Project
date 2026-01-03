import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import "../styles/app.css";

const columns = [
  { key: "title", label: "Title" },
  { key: "abstract", label: "Abstract" },
  { key: "type", label: "Type" },
  { key: "published_date", label: "Published Date" },
  { key: "byline", label: "Byline" },
  { key: "source", label: "Source" },
  { key: "updated", label: "Updated Time" },
  { key: "url", label: "URL" },
];

const ITEMS_PER_PAGE = 25;

export default function ArticleTable({ articles }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Search filter
  const filteredArticles = useMemo(() => {
    return articles.filter((article) =>
      [article.title, article.abstract, article.byline, article.source]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [articles, search]);

  // ↕ Sorting
  const sortedArticles = useMemo(() => {
    if (!sortConfig.key) return filteredArticles;

    return [...filteredArticles].sort((a, b) => {
      const aVal = a[sortConfig.key] ?? "";
      const bVal = b[sortConfig.key] ?? "";

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredArticles, sortConfig]);

  // 📄 Pagination
  const totalPages = Math.ceil(sortedArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = sortedArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="article-table-container">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search articles..."
        className="search-input"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* 🗂 Table */}
      <div className="table-wrapper">
        <table className="articles-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="sortable-header"
                >
                  {col.label}
                  {sortConfig.key === col.key
                    ? sortConfig.direction === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedArticles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>
                  {article.abstract.length > 120
                    ? article.abstract.substring(0, 120) + "..."
                    : article.abstract}
                </td>
                <td>{article.type}</td>
                <td>{article.published_date}</td>
                <td>{article.byline}</td>
                <td>{article.source}</td>
                <td>{article.updated}</td>
                <td>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="url-link"
                  >
                    Read
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📄 Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

ArticleTable.propTypes = {
  articles: PropTypes.array.isRequired,
};
