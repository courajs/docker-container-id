const fs = require('fs');


module.exports = getContainerId;

function getContainerId() {
  return new Promise(function (resolve, reject) {
    fs.readFile('/proc/self/cgroup', 'utf8', function(err, data) {
      if (err && err.code === "ENOENT") {
        // Not on Linux
        resolve(false);
        return;
      } else if (err) {
        // whoops
        reject(err);
      }
      let lines = data.split('\n');
      let line_with_id = lines.find((l) => l.indexOf('docker/') > -1);
      if (line_with_id) {
        let id = line_with_id.split('docker/').pop();
        resolve(id);
      } else {
        resolve(false);
      }
    });
  });
}

if (require.main === module) {
  async function go() {
    console.log(await getContainerId());
  }
  go();
}
