const express = require("express");
const app = express(); // арр це наш веб сервер

app.get("/", (request, response) => {
  response.send("<h2>home page</h2>");
});

app.get("/contacts", (request, response) => {
  console.log(request.url);
  console.log(request.method);
  response.send("<h2>contacts page</h2>");
});

app.listen(3001, () => {
  console.log("Server running");
});
