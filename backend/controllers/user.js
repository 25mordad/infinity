import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = "rickandmortyinfinity";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  ///mockup user
  // const email = "email@email.com";
  // const password = "pass";

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {

  const { email, password, name } = req.body;

  ///mockup user
  // const email = "email@email.com";
  // const password = "pass";
  // const name = "name";

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: name });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};




///like charac
export const likeCharac = async (req,res) => {

const { id } = req.params;

  try {

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    const user = await UserModal.findById(req.userId);

    const index = user.likes.findIndex((mid) => mid ===String(id));
    if (index === -1) {
      user.likes.push(id);
    }else{
      user.likes = user.likes.filter((mid) => mid !== String(id));
    }


    const updatedUser = await UserModal.findByIdAndUpdate(req.userId, user, { new: true });

    res.status(200).json(updatedUser);

  } catch (e) {
    res.status(404).json({ message: error.message });
  }
}
