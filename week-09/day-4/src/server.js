'use strict';
require('dotenv').config();
const routes = require('./endpoints');
const PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

routes.listen(PORT, () => {
  console.log(`Server is avilable on port: ${PORT}`);
});
