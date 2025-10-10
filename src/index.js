import http from "http";
import fs from "fs/promises";
import path from "path";

async function siteCss(params) {}
const server = http.createServer(async (req, res) => {
  let html;

  switch (req.url) {
    case "/":
      html = await homeView();

      break;

    case "/cats/add-breed":
      html = await addBreedView();

      break;
    case "/cats/add-cat":
      html = await addCatView();
      break;
    case "/styles/site.css":
      const siteCss = await fs.readFile("./src/styles/site.css", {
        encoding: "utf-8",
      });

      res.write(siteCss);
      res.end();
      return;
    default:
      return res.end();
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});
function renderView(path) {
  return fs.readFile(path, { encoding: "utf-8" });
}
async function homeView() {
  const homeHtml = renderView("./src/views/home/index.html");
  return homeHtml;
}
async function addBreedView() {
  const html = await fs.readFile("./src/views/addBreed.html", {
    encoding: "utf-8",
  });
  return html;
}
async function addCatView() {
  const html = await renderView("./src/views/addCat.html");
  return html;
}
server.listen(5000);
console.log("Server is listening on http://localhost:5000....");
