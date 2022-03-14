const path = require("path");
const dotenv = require("dotenv");
const http = require("http");
// const colors = require('colors');

const env_path = path.join(__dirname, "./config/.env");

// Load env variables
dotenv.config({ path: env_path });

const app = require("./app");
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
