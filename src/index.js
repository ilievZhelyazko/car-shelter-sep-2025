import http from "http";
import fs from "fs/promises";
import path from "path";
import siteCSS from "./site.css.js";
const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    const homeHtml = await fs.readFile("./src/views/home/index.html", {
      encoding: "utf-8",
    });
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(homeHtml);
  } else if (req.url === "/styles/site.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(siteCSS);
  }
  res.end();
});
server.listen(5000);
console.log("Server is listening on http://localhost:5000....");
