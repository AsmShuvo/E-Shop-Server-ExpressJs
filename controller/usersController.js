const { createUser, getUser, findUserByEmail } = require("../services/users.services");

const addUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    console.log("User have to be added: ", user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "user is not inserted",
      error: error.message,
    });
  }
};

const showUser = async (req, res) => {
  try {
    const { email } = req.query;
    const users = email ? await findUserByEmail(email) : await getUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing user",
      error: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("Email and password given is: ", email, password);

  try {
    const user = await findUserByEmail(email);
    console.log("Found user: ", user);

    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password.",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred during login.",
      error: error.message,
    });
  }
};

module.exports = { addUser, showUser, loginUser };
