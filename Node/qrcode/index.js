"use strict";
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },

    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    // Use user feedback for... whatever!!
    //writing to a file inside the folder much like
    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("This file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
