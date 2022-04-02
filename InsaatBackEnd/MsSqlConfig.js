var myServer2 = "DESKTOP-0LJ44J0";
var myServer = "DESKTOP-8IA8HLI\\SQLEXPRESS";

const config = {
  user: "sa",
  password: "1234",
  server: myServer,
  database: "InsaatHoca",
  options: {
    port: 1433,
    encrypt: false,
  },
  pool: {
    max: 20,
    min: 5,
    idleTimeoutMillis: 150000,
  },
};

module.exports = {
  Config: config,
};
