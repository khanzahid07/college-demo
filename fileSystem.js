import fs from "node:fs";

let h = fs.readFileSync("blog.txt", "utf8");

console.log(h);
console.log("hello bro , i am here to tell you something");

//making a folder

// fs.mkdir("images", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Folder created!");
// });

//deleting the folder

// fs.rmdir("images", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Folder is deleted");
// });

//write a file

fs.writeFile("message.txt", h, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File created!");
});
