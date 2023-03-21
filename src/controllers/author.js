import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const signup = async (req, res) => {
  try {
    const { data: products } = await axios.post(
      `${process.env.API_URL}/signup`,
      req.body
    );
    return res.json({
      message: "Đăng ký thành công",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { data: products } = await axios.post(
      `${process.env.API_URL}/signin`,
      req.body
    );
    return res.json({
      message: "Đăng nhập thành công",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export { signin, signup };
