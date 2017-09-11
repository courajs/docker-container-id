# `docker-container-id`

This is a simple function to get the id of the docker container the
current process is running in.

```
npm install --save docker-container-id
```
Just call the function to get the id as a string:
```
const getId = require('docker-container-id');
console.log("I'm in container:", getId());
```

If you don't appear to be in a docker container, the function returns
false:
```
let id = require('docker-container-id')();
if (!id) {
  console.error("woah, you need to containerize this thing");
} else {
  // ...
}
```
