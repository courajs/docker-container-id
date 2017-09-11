# `docker-container-id`

This is a simple function to get the id of the docker container the
current process is running in. Not tested for Windows containers.

```
npm install --save docker-container-id
```

The function returns a promise for the conatiner id.

```js
const getId = require('docker-container-id');

async function() {
  console.log("I'm in container:", await getId());
}
```

If you don't appear to be in a docker container, the promise resolves
with `false`:
```js
const getId = require('docker-container-id');

async function() {
  let id = await getId();
  if (!id) {
    console.error("Woah, you need to containerize this thing!");
    process.exit(1);
  } else {
    // ...
  }
}
```
