'use strict';

var FamousPlatform = require('famous');
var Compositor = FamousPlatform.renderers.Compositor;
var ThreadManager = FamousPlatform.renderers.ThreadManager;
var Engine = FamousPlatform.engine;
var Famous = FamousPlatform.core.Famous;

// Boilerplate
var compositor = new Compositor();
var threadmanger = new ThreadManager(Famous, compositor);
var engine = new Engine();
engine.update(threadmanger);

// App Code
require('./twitterus/main')
