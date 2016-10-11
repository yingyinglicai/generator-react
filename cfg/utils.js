const path = require('path')
const ifaces = require("os").networkInterfaces()


/**
 * 获取本机ip地址
 */
exports.ip = getIp()


function getIp() {
  var ip = "127.0.0.1";

  for (var dev in ifaces) {
    ifaces[dev].forEach(function (details) {
      if (details.family == 'IPv4' && details.address !== '127.0.0.1') {
        ip = details.address;
      }
    })
  }
  return ip
}
