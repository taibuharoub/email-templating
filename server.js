/* eslint-disable quotes */
/* eslint-disable no-undef */
import server from "./app.js";
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
