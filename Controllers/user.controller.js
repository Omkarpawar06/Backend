import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const HandleSignup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const latestUser = await User.findOne().sort({ userId: -1 });

    let newUserId;
    if (latestUser && latestUser.userId) {
      const latestUserIdNum = parseInt(
        latestUser.userId.replace("user", ""),
        10
      );
      newUserId = `user${String(latestUserIdNum + 1).padStart(2, "0")}`;
    } else {
      newUserId = "user01";
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      userId : newUserId,
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" , userId : newUserId});
  } catch (error) {
    res.status(500).json({ message: "Internal server Error." });
  }
};

export const HandleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!user || !isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    } else {
      res.status(200).json({message: "Login successful", userId: user.userId});
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server Error." });
  }
};
