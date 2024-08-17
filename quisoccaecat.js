const os = require('os');
if (os.platform() !== 'linux') {
  return () => 0;
}
