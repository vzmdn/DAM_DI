const os = require('os');

const userInfo = os.userInfo();
const username = userInfo.username;

console.log("Hola", username);