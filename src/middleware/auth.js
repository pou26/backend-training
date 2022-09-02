const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel');
const { invalid } = require('moment');

const authenticate = async function (req, res, next) {
  try{ 
    let token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(401).send("Header is missing");
  }
  let decodedToken = jwt.verify(token, "ZAakosmk");
  if (!decodedToken) {
    return res.status(403).send("Not a valid token");
  } 
  let userId = req.params.userId
  let idCheck = mongoose.Types.ObjectId.isValid(userId);
  if (!idCheck) {
    return res.status(404).send("Not a valid userID");
  }
  let check = await userModel.findById(userId);
  if (!check) {
    return res.status(404).send("No such user exist");
 }
  req.loggedInUser=decodedToken.userId
  next();

}catch(error){
  res.status(500).send({msg:"invalid"})
}
};

const authorise = function (req, res, next) {
  try{ 
  let requestedUserId = req.params.userId;
  if (requestedUserId !== req.loggedInUser) {
    res.status(406).send({ status: false, msg: "permission denied" });
  }
  next();
}catch(error){
  res.status(500).send({msg:"invalid"})
}
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise;