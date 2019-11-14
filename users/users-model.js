const db = require("../data/dbconfig.js");

module.exports = {
  find,
  add,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username", "password");
}
function findBy(filter) {
  return db("users").where(filter);
}
function add(users) {
  return db("users")
    .insert(users, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}
