import http from "http";

const server = http.createServer((req, res) => {
  res.write("Hello word!!!");

  res.end();
});
server.listen(5000);
console.log("Server is listen on http://localhost5000.... ");
