const db = require("../data/database");

//signup post request
async function signup(req, res) {
  //entered data
  const enteredData = {
    fullname: req.body.fullname,
    email: req.body.email,
    confirmEmail: req.body["confirm-email"],
    password: req.body.password,
  };

  const user = {
    email: enteredData["email"],
    password: enteredData["password"],
  };

  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
}

module.exports = {
  signup: signup,
};
