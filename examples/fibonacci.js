#!/usr/bin/env node

var backoff = require('../index');

var testBackoff = backoff.fibonacci({
    initialDelay: 10,
    maxDelay: 1000
});

testBackoff.on('backoff', function(number, delay) {
    console.log(number + ' ' + delay + 'ms');

    if (number < 15) {
        testBackoff.backoff();
    }
});

testBackoff.backoff();
