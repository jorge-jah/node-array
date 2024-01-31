import OS from "os";

const wifiAddress = () => {
  OS.networkInterfaces();
};

console.log(wifiAddress);

module.exports = { wifiAddress };
