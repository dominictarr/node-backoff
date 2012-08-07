/*
 * Copyright (c) 2012 Mathieu Turcotte
 * Licensed under the MIT license.
 */

var Backoff = require('./lib/backoff'),
    FibonacciBackoffStrategy = require('./lib/strategy/fibonacci'),
    ExponentialBackoffStrategy = require('./lib/strategy/exponential');

module.exports.Backoff = Backoff;

/**
 * Constructs a Fibonacci backoff.
 * @param options Fibonacci backoff strategy arguments.
 * @see FibonacciBackoffStrategy
 */
module.exports.fibonnaci = module.exports.fibonacci = function(options) {
    return new Backoff(new FibonacciBackoffStrategy(options));
};

/**
 * Constructs an exponential backoff.
 * @param options Exponential strategy arguments.
 * @see FibonnaciBackoffStrategy
 */
module.exports.exponential = function(options) {
    return new Backoff(new ExponentialBackoffStrategy(options));
};
