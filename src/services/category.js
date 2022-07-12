import api from "./api";

const categoryService = {
  getList({ page = 1, per_page = 100 } = {}) {
    return api.get("/wp/v2/categories", {
      params: {
        page,
        per_page,
        lang: "vi",
      },
    });
  },
};

export default categoryService;
