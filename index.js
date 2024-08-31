import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter The URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("newQr.png"));
    fs.writeFile("message.txt", url, (err) => {
      if (err) throw err;
      console.log("file has been created successfully");
    });
  })
  .catch((error) => {
    console.log(error);
  });
