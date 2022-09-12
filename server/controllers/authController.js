const bcrypt = require("bcryptjs");
const { User, validateUser } = require("../models/User.js");
const jwt = require("jsonwebtoken");

class AuthController {
  async registerUser(req, res) {
    try {
      const { error } = validateUser(req.body);
      if (error) {
        return res.status(400).json({ message: error.message });
      }

      const { firstname, lastname, email, password } = req.body;
      const avatarPath = process.env.SERVER_URL + "/" + req.file.path;

      const candidate = await User.findOne({ email: email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} is already exist!` });
      }

      const hashPassword = await bcrypt.hash(password, 8);

      const newUser = await User({
        firstname,
        lastname,
        email,
        password: hashPassword,
        avatar: avatarPath,
      });
      await newUser.save();

      res.status(200).json({ message: "User was created!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server error!" });
    }
  }

  async logIn(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: `User with email ${email} is not exist!` });
      }

      const isPassword = await bcrypt.compare(password, user.password);
      if (!isPassword) {
        return res.status(400).json({ message: "Uncorrect password!" });
      }

      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "8h",
      });

      res.status(200).json({
        user: {
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          avatar: user.avatar,
          email: user.email,
          createdAt: user.createdAt,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server error!" });
    }
  }
}

module.exports = new AuthController();
