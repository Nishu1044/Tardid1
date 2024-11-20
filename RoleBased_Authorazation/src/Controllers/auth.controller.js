const authModel = require("../Models/auth.model");

const postData = async(req,res) => {
    const {username,password,email} = req.body;
  try {
    const newUser = new authModel({
        username,password,email
    })
    await newUser.save()
    res.json({message:"new user added"})
  } catch (error) {
    console.log(error);
    res.json({message:message.error})
  }
}

module.exports = postData