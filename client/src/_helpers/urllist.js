import baseurl from "./baseUrl";

class urllist {
 static getAll() {
    return baseurl.get("/dc");
  }

  static getByCategory(category) {
    return baseurl.get("/dc?categ=${category}");
  }

  static get(id) {
    return baseurl.get(`/dc/${id}`);
  }

  /* Creation by backoffice*/
  static create(data) {
    return baseurl.post("/dc", data);
  }

  /*User save */
  static update(id, data, isCompleted) {
    return baseurl.put(`/dc/${id}?completed=${isCompleted}`, data);
  }

  static searchByName(name) {
    return baseurl.get(`/dc?name=${name}`);
  }

  static searchByTag(tag) {
    return baseurl.get(`/dc?tag=${tag}`);
  }
}

export default urllist;
