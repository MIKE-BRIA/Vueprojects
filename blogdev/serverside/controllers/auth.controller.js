const db = require("../data/database");
//*for harshing password
const bcrypt = require("bcryptjs");
const getAuthsession = require("../middleware/authmiddle");

//!signup post request function
async function signup(req, res) {
  //*userdata
  const userData = req.body;
  const fullname = userData.fullname;
  const email = userData.email;
  const confirmEmail = userData.confirmEmail;
  const password = userData.password;

  const trimpassword = password.trim();
  if (
    email !== confirmEmail ||
    trimpassword.length < 6 ||
    !email.includes("@")
  ) {
    return res.status(403).send({ message: "Validation failed" });
  }

  //*checking if email already exists in our database
  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: email });

  if (existingUser) {
    console.log("Email already exists");
    return res.status(403).send({ message: "user already exists" });
  }

  //*hashing the password
  const hashedpassword = await bcrypt.hash(trimpassword, 12);

  const user = {
    fullname: fullname,
    email: email,
    password: hashedpassword,
  };

  //*store to database
  await db.getDb().collection("users").insertOne(user);

  res.status(201).send("Signup successful");
}

//!login post request function
async function login(req, res) {
  //*login credentials
  const userData = req.body;
  const email = userData.email;
  const password = userData.password;

  //*find user with same entered email
  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: email });

  if (!existingUser) {
    return res.status(404).send({ message: "User not found" });
  }

  const passwordsAreEqual = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!passwordsAreEqual) {
    console.log("passwords are not equal");
    return res.status(404).send({ message: "User not found" });
  }

  //* adding user data to session and storing session to database
  req.session.user = { id: existingUser._id, email: existingUser.email };
  req.session.isAuth = true;

  req.session.save(() => {
    res.status(201).send("login successful");
  });
  // console.log("User is authenticated");
}

//! checks if user is authenticated in the sessiom
async function checkauth(req, res) {
  if (req.session.isAuth && req.session.user) {
    res.json({ isAuth: true, user: req.session.user });
  } else {
    res.json({ isAuth: false, user: req.session.user });
  }
}

module.exports = {
  signup: signup,
  login: login,
  checkauth: checkauth,
};
