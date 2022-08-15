const app = require("./src/app.js");

const APP_PORT = 3306;

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
