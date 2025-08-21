const jwt = require("jsonwebtoken");
const secret = "hgsdvjyfcsvcg1876rt36@!!U*(@Y&*(@";
const sessionIdToUserMap = new Map();
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}
// function setUser(id, user) {
//   sessionIdToUserMap.set(id, user);
// }

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
// function getUser(id) {
//   return sessionIdToUserMap.get(id);
// }

module.exports = {
  setUser,
  getUser,
};
