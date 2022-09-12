const axios = require("axios").default;
const MockAdapter = require("axios-mock-adapter").default;
const clients = require("./accounts.json")
const mock = new MockAdapter(axios);

// Mock any GET request to /clients
mock.onGet("/clients").reply(200, {
  clients: clients
});

module.exports = {
     axios
}