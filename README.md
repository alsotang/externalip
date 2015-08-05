# externalip

**WARNING**: perhaps https://github.com/sindresorhus/public-ip is more and more fast, but opendns does not work fine at mainland china.

[![Build Status](https://travis-ci.org/alsotang/externalip.svg?branch=master)](https://travis-ci.org/alsotang/externalip)

get your external ip in Node.js

## install

```bash
npm i externalip
```

## usage

```js
externalip(function (err, ip) {
  console.log(ip); // => 8.8.8.8
});
```
