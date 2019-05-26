const fs = require("fs");
const config = require("src/config.json");

const saveAvatar = userParam =>
  new Promise((resolve, reject) => {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
      if (!fs.existsSync("public/avatars")) {
        fs.mkdirSync("public/avatars");
      }
    }
    const base64Data = userParam.avatar.replace(/^data:image\/png;base64,/, "");
    const path = `avatars/${userParam.nickname}.png`;

    fs.writeFile(`public/${path}`, base64Data, "base64", function(err) {
      console.log(err);
      if (err) reject(err);
      resolve(`${config.devApiURL}/static/${path}`);
    });
  });

module.exports = saveAvatar;
