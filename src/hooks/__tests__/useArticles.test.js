import { renderHook } from "@testing-library/react";
import useArticles from "../useArticles";
import * as api from "../../api/nytimesApi";

jest.spyOn(api, "fetchMostViewedArticles");

test("fetches articles successfully", async () => {
  api.fetchMostViewedArticles.mockResolvedValue([
    { id: 1, title: "Mock Article" }
  ]);

  const { result } = renderHook(() => useArticles());

  await new Promise(resolve => setTimeout(resolve, 0));

  expect(result.current.articles.length).toBe(1);
});
