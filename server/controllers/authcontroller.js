const {User}=require("../models/user")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const register = async (req,res) => {
  try{
    const { name, email, password } = req.body;
    const isExistUser = await User.findOne({ email });

    if (isExistUser) {
      return res.status(200).json({
        success: false,
        msg: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const userdata = await user.save();
    return res.status(200).send({
      success:1,
      msg:"User created successfully",
      data:userdata,
    });

  }catch(error){
    return res.status(500).send({
      success:0,
      msg:error.message,
    });
  }
}

const generateAccessToken = async (user) => {
  const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {
    expiresIn: "2h",
  });
  return token;
};

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;
    const userdata = await User.findOne({ email });
    if (!userdata) {
      return res.status(400).json({
        success: false,
        msg: "email and password is incorrect",
      });
    }

    const isPasswordmatch = await bcrypt.compare(password, userdata.password);
    if (!isPasswordmatch) {
      return res.status(400).json({
        success: false,
        msg: "email and password is incorrect",
      });
    }

    const accesstoken = await generateAccessToken({ user: userdata });

    return res.status(200).json({
      success: true,
      accesstoken: accesstoken,
      type: "Bearer",
      msg: "Login user successfully",
      data: userdata,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports={
  register,
  loginUser,
}
