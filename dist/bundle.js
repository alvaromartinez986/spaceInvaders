/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameObject {

    constructor(sourceImg, ctx, gameSize, x, y, size) {

        this.ctx = ctx;
        this.gameSize = gameSize;
        this.ctx.fillStyle = "#FFFFFF";

        this.heigth = (size / gameSize) * size;
        this.width = (size / gameSize) * size;

        this.xPos = x;
        this.yPos = y;

        this.img = new Image();
        this.sourceImg = sourceImg;
        this.stateAnim = 0;

    }

    move(xPos, yPos) {
        this.animate();
        this.xPos += xPos;
        this.yPos += yPos;
        this.draw(xPos, yPos);
    }

    clear() {
        this.ctx.fillRect(this.xPos, this.yPos, this.heigth + 3, this.width + 2);
    }

    draw(xPos, yPos) {
        this.ctx.fillRect(this.xPos - xPos, this.yPos - yPos, this.heigth + 3, this.width + 2);
        this.ctx.drawImage(this.img, this.xPos, this.yPos, this.heigth, this.width);
    }


    animate() {
        if (this.sourceImg.length != 1) {
            if (this.stateAnim == 0) {
                this.stateAnim = 1;
                this.img.src = this.sourceImg[this.stateAnim];
            } else {
                this.stateAnim = 0;
                this.img.src = this.sourceImg[this.stateAnim];
            }
        } else {
            this.img.src = this.sourceImg[this.stateAnim];
        }
    }

    getXPos() {
        return this.xPos;
    }

    getYPos() {
        return this.yPos;
    }

    getHeigth() {
        return this.heigth;
    }

    getWidth() {
        return this.width;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(9);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameSpace__ = __webpack_require__(3);


window.onload = () => {
    const game = new __WEBPACK_IMPORTED_MODULE_0__gameSpace__["a" /* GameSpace */](document.getElementById("spaceGame").getContext('2d'));
    window.onkeydown = game.keypress.bind(game);
    setInterval(() => {
        game.draw();
        document.getElementById("score").innerHTML = game.getScore();
    }, 100);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__groupInvaders__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ship__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall__ = __webpack_require__(8);




class GameSpace {
    constructor(ctx) {
        this.ctx = ctx;
        this.gameSize = 350;
        this.enemys = [];
        this.score = 0;


        // Game Interface
        this.ctx.strokeRect(2, 2, this.gameSize, this.gameSize);
        //this.createWalls();
        this.createShipPlayer();
        this.createInvaders();
    }

    createShipPlayer() {
        let srcImgShip = ['src/assets/ship.png'];
        this.player = new __WEBPACK_IMPORTED_MODULE_1__ship__["a" /* Ship */](srcImgShip, this.ctx, this.gameSize, 40, 310, 100);
        this.player.moveShip(0);
    }

    createInvaders() {
        let srcImgInv = ['src/assets/invaderOne-1.png', 'src/assets/invaderOne-2.png'];
        this.groupInvaders = new __WEBPACK_IMPORTED_MODULE_0__groupInvaders__["a" /* GroupInvaders */](this.ctx, this.gameSize, srcImgInv);
    }

    createWalls() {
        let srcImgWall = ['src/assets/wall.png'];
        this.wall = [];
        //Numbers of wall
        for (let i = 0; i < 3; i++) {
            this.wall.push(new __WEBPACK_IMPORTED_MODULE_2__wall__["a" /* Wall */](srcImgWall, this.ctx, this.gameSize, 50 + (i * 100), 250, 3));
        }
    }

    displayWalls() {
        for (let i = 0; i < this.wall.length; i++) {
            this.wall[i].displayWall();
        }
    }

    draw() {
        //this.displayWalls();
        this.groupInvaders.moveInvaders();
    }

    keypress(event) {
        let nextDirection = {
            37: -1, // Left
            39: 1 // Right
        }[event.keyCode] || 0;

        let shoot = {
            32: true // shoot
        }[event.keyCode] || false;

        this.player.moveShip(nextDirection);

        if (shoot) {
            this.player.shoot(this.groupInvaders.getInvaders(), this);
        }
    }

    getScore() {
        return "Score: " + this.score;
    }

    destroyEnemy(i) {
        this.score += 10;
        this.groupInvaders.destroyAlien(i);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameSpace;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alien__ = __webpack_require__(5);


class GroupInvaders {

    constructor(ctx, gameSize, srcImg) {
        this.ctx = ctx;
        this.gameSize = gameSize;
        this.moveX = 1;
        this.moveY = 0;
        this.invader = [];
        this.createInvaders(srcImg);
        this.score = 0;
    }

    createInvaders(srcImg) {
        let x = 40;
        let y = 40;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                this.invader.push(new __WEBPACK_IMPORTED_MODULE_0__alien__["a" /* Alien */](srcImg, this.ctx, this.gameSize, x, y, 100));
                x += 80;
            }
            y += 30;
            x = 40;
        }
    }

    moveInvaders() {
        this.changeDirInvaders();
        this.invader.map(e => {
            e.move(this.moveX, this.moveY);
        });
    }

    changeDirInvaders() {

        let flagChange = false;

        for (let i = 0; i < this.invader.length; i++) {
            if (0 != this.invader[i].getDirection()) {
                this.moveX = this.invader[i].getDirection();
                flagChange = true;
                i += this.invader.length;
            }
        }

        if (flagChange) {
            this.moveY = 4;

            this.invader.map(e => {
                e.move(0, this.moveY);
            });

            this.moveY = 0;

            this.invader.map(e => {
                e.move(this.moveX, this.moveY);
            });

        }
    }

    getInvaders() {
        return this.invader;
    }

    destroyAlien(i) {
        this.score += 10;
        this.invader[i].clear();
        this.invader.splice(i, 1);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GroupInvaders;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameObject__ = __webpack_require__(0);


class Alien extends __WEBPACK_IMPORTED_MODULE_0__gameObject__["a" /* GameObject */] {

    constructor(sourceImg, ctx, gameSize, x, y, size) {
        super(sourceImg, ctx, gameSize, x, y, size);
        this.nextDirection = 0;
    }

    getDirection() {

        //Limit rigth
        if (this.xPos == (this.gameSize - 50)) {
            return -1;
        }

        //Limit left
        if (this.xPos == 25) {
            return 1;
        }
        return 0;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Alien;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameObject__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bullet__ = __webpack_require__(7);



class Ship extends __WEBPACK_IMPORTED_MODULE_0__gameObject__["a" /* GameObject */] {

    constructor(sourceImg, ctx, gameSize, x, y, size) {
        super(sourceImg, ctx, gameSize, x, y, size);
    }

    moveShip(x) {
        //Limit rigth
        if (this.xPos == (this.gameSize - 50) && (x == -1)) {
            this.move(x, 0);
        }

        //Limit left
        if (this.xPos == 25 && x == 1) {
            this.move(x, 0);
        }

        if (this.xPos < (this.gameSize - 50) && this.xPos > 25) {
            this.move(x, 0);
        }
    }

    shoot(enemys, game) {
        let srcImgBullet = ['src/assets/bullet.png'];
        this.bullet = new __WEBPACK_IMPORTED_MODULE_1__bullet__["a" /* Bullet */](srcImgBullet, this.ctx, this.gameSize, this.xPos, this.yPos, 50, game);
        this.bullet.setEnemys(enemys);
        this.bullet.shootBullet(-1, 10);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ship;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameObject__ = __webpack_require__(0);


class Bullet extends __WEBPACK_IMPORTED_MODULE_0__gameObject__["a" /* GameObject */] {

    constructor(sourceImg, ctx, gameSize, x, y, size, game) {
        super(sourceImg, ctx, gameSize, x, y, size);
        this.collision = false;
        this.game = game;
    }

    shootBullet(direction, velocY) {
        let transVel = (1 / velocY) * 100;
        let inter = setInterval(() => {
            if (!this.collision) {
                this.move(0, direction);
                this.setCollision();
            }
        }, transVel);
    }

    setEnemys(enemys) {
        this.enemys = enemys;
    }

    setCollision(inter) {

        //Limit down
        if (this.yPos == (this.gameSize - 25)) {
            this.collision = true;
            this.clear();
        }

        //Limit up
        if (this.yPos == 15) {
            this.collision = true;
            this.clear();
        }

        // Crash a invader
        this.enemys = this.enemys.filter((e, i) => {
            // Get limits of the object collider
            let limitLeft = e.getXPos() - e.getWidth();
            let limitRigth = e.getXPos() + e.getWidth();
            let limitUp = e.getYPos() - e.getHeigth();
            let limitBottom = e.getYPos() + e.getHeigth();

            // Check if bullet collide with the invader
            if ((this.xPos > limitLeft && this.xPos < limitRigth) &&
                (this.yPos < limitBottom && this.yPos > limitUp)) {
                this.clear();
                e.clear();
                this.game.destroyEnemy(i);
                this.collision = true;
            } else {
                return e;
            }

        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bullet;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameObject__ = __webpack_require__(0);


class Wall {

    constructor(sourceImg, ctx, gameSize, x, y, length) {
        this.brick = [];
        this.makeWall(sourceImg, ctx, gameSize, x, y, length);
    }

    makeWall(sourceImg, ctx, gameSize, x, y, length) {
        for (let i = 0; i < length; i++) {
            this.brick.push(new __WEBPACK_IMPORTED_MODULE_0__gameObject__["a" /* GameObject */](sourceImg, ctx, gameSize, x + (i * 15), y, 80));
        }
    }

    displayWall() {
        for (let i = 0; i < this.brick.length; i++) {
            this.brick[i].move(0, 0);
        }
    }

    getBrick() {
        return this.brick;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Wall;



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(10);

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "../dist/bundle.js",
        path: path.join(__dirname, "src")
    }
};

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);