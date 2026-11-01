(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Lighting2D"] = factory();
	else
		root["Lighting2D"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/parsecolor/parsecolor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@basementuniverse/parsecolor/parsecolor.js ***!
  \*****************************************************************/
/***/ ((module) => {

/*

Parse a valid CSS color string into an object like: { r, g, b, a }
Properties will have the correct interval and precision.
Valid input examples:

red
#f00
#ff0000
#ff0000ff
rgb(255, 0, 0)
rgb(100%, 0%, 0%)
rgba(255, 0, 0, 1)
rgba(100%, 0%, 0%, 1)
hsl(0, 100%, 50%)
hsla(0, 100%, 50%, 1)

*/
const parseColor = (function() {
	const names = {
		"aliceblue": "f0f8ff",
		"antiquewhite": "faebd7",
		"aqua": "0ff",
		"aquamarine": "7fffd4",
		"azure": "f0ffff",
		"beige": "f5f5dc",
		"bisque": "ffe4c4",
		"black": "000",
		"blanchedalmond": "ffebcd",
		"blue": "00f",
		"blueviolet": "8a2be2",
		"brown": "a52a2a",
		"burlywood": "deb887",
		"cadetblue": "5f9ea0",
		"chartreuse": "7fff00",
		"chocolate": "d2691e",
		"coral": "ff7f50",
		"cornflowerblue": "6495ed",
		"cornsilk": "fff8dc",
		"crimson": "dc143c",
		"cyan": "0ff",
		"darkblue": "00008b",
		"darkcyan": "008b8b",
		"darkgoldenrod": "b8860b",
		"darkgray": "a9a9a9",
		"darkgreen": "006400",
		"darkgrey": "a9a9a9",
		"darkkhaki": "bdb76b",
		"darkmagenta": "8b008b",
		"darkolivegreen": "556b2f",
		"darkorange": "ff8c00",
		"darkorchid": "9932cc",
		"darkred": "8b0000",
		"darksalmon": "e9967a",
		"darkseagreen": "8fbc8f",
		"darkslateblue": "483d8b",
		"darkslategray": "2f4f4f",
		"darkslategrey": "2f4f4f",
		"darkturquoise": "00ced1",
		"darkviolet": "9400d3",
		"deeppink": "ff1493",
		"deepskyblue": "00bfff",
		"dimgray": "696969",
		"dimgrey": "696969",
		"dodgerblue": "1e90ff",
		"firebrick": "b22222",
		"floralwhite": "fffaf0",
		"forestgreen": "228b22",
		"fuchsia": "f0f",
		"gainsboro": "dcdcdc",
		"ghostwhite": "f8f8ff",
		"gold": "ffd700",
		"goldenrod": "daa520",
		"gray": "808080",
		"green": "008000",
		"greenyellow": "adff2f",
		"grey": "808080",
		"honeydew": "f0fff0",
		"hotpink": "ff69b4",
		"indianred": "cd5c5c",
		"indigo": "4b0082",
		"ivory": "fffff0",
		"khaki": "f0e68c",
		"lavender": "e6e6fa",
		"lavenderblush": "fff0f5",
		"lawngreen": "7cfc00",
		"lemonchiffon": "fffacd",
		"lightblue": "add8e6",
		"lightcoral": "f08080",
		"lightcyan": "e0ffff",
		"lightgoldenrodyellow": "fafad2",
		"lightgray": "d3d3d3",
		"lightgreen": "90ee90",
		"lightgrey": "d3d3d3",
		"lightpink": "ffb6c1",
		"lightsalmon": "ffa07a",
		"lightseagreen": "20b2aa",
		"lightskyblue": "87cefa",
		"lightslategray": "789",
		"lightslategrey": "789",
		"lightsteelblue": "b0c4de",
		"lightyellow": "ffffe0",
		"lime": "0f0",
		"limegreen": "32cd32",
		"linen": "faf0e6",
		"magenta": "f0f",
		"maroon": "800000",
		"mediumaquamarine": "66cdaa",
		"mediumblue": "0000cd",
		"mediumorchid": "ba55d3",
		"mediumpurple": "9370db",
		"mediumseagreen": "3cb371",
		"mediumslateblue": "7b68ee",
		"mediumspringgreen": "00fa9a",
		"mediumturquoise": "48d1cc",
		"mediumvioletred": "c71585",
		"midnightblue": "191970",
		"mintcream": "f5fffa",
		"mistyrose": "ffe4e1",
		"moccasin": "ffe4b5",
		"navajowhite": "ffdead",
		"navy": "000080",
		"oldlace": "fdf5e6",
		"olive": "808000",
		"olivedrab": "6b8e23",
		"orange": "ffa500",
		"orangered": "ff4500",
		"orchid": "da70d6",
		"palegoldenrod": "eee8aa",
		"palegreen": "98fb98",
		"paleturquoise": "afeeee",
		"palevioletred": "db7093",
		"papayawhip": "ffefd5",
		"peachpuff": "ffdab9",
		"peru": "cd853f",
		"pink": "ffc0cb",
		"plum": "dda0dd",
		"powderblue": "b0e0e6",
		"purple": "800080",
		"rebeccapurple": "639",
		"red": "f00",
		"rosybrown": "bc8f8f",
		"royalblue": "4169e1",
		"saddlebrown": "8b4513",
		"salmon": "fa8072",
		"sandybrown": "f4a460",
		"seagreen": "2e8b57",
		"seashell": "fff5ee",
		"sienna": "a0522d",
		"silver": "c0c0c0",
		"skyblue": "87ceeb",
		"slateblue": "6a5acd",
		"slategray": "708090",
		"slategrey": "708090",
		"snow": "fffafa",
		"springgreen": "00ff7f",
		"steelblue": "4682b4",
		"tan": "d2b48c",
		"teal": "008080",
		"thistle": "d8bfd8",
		"tomato": "ff6347",
		"turquoise": "40e0d0",
		"violet": "ee82ee",
		"wheat": "f5deb3",
		"white": "fff",
		"whitesmoke": "f5f5f5",
		"yellow": "ff0",
		"yellowgreen": "9acd32",
		"transparent": "00000000"
	};
	
	const clamp = (n, a, b) => n < a ? a : (n > b ? b : n),	// Clamp n in interval [a, b]
		round = (n, d) => {	// Round n to nearest integer, or to d decimal places (if d is defined)
			var p = Math.pow(10, d || 0);
			return Math.round(n * p) / p;
		},
		hi = n => clamp(parseInt(n, 16), 0, 255),	// Convert 2-digit hex to int in interval [0, 255]
		hf = n => clamp(round(parseInt(n, 16) / 255, 2), 0, 1),	// Convert 2-digit hex to float with 2 decimal places in interval [0, 1]
		si = n => clamp(round(parseFloat(n)), 0, 255),	// Convert string to int in interval [0, 255]
		sf = n => clamp(round(parseFloat(n), 2), 0, 1),	// Convert string to float with 2 decimal places in interval [0, 1]
		pi = n => clamp(round(parseFloat(n) / 100 * 255), 0, 255),	// Convert percentage string to int in interval [0, 255]
		uf = n => clamp(parseFloat(n) / 360, 0, 1),	// Convert hue string to float in interval [0, 1]
		pf = n => clamp(parseFloat(n) / 100, 0, 1);	// Convert percentage string to float in interval [0, 1]
	
	// Convert hsl to rgb, alpha value gets passed straight through
	// h, s, l values are assumed to be in interval [0, 1]
	// Returns an object like { r, g, b, a }
	// http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
	function hslToRgb(h, s, l, a) {
		var r, g, b,
			hue = function(p, q, t) {
				if (t < 0) { t += 1; }
				if (t > 1) { t -= 1; }
				if (t < 1 / 6) { return p + (q - p) * 6 * t };
				if (t < 1 / 2) { return q; }
				if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6 };
				return p;
			};
		if (s == 0) {
			r = g = b = l;
		} else {
			var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
				p = 2 * l - q;
			r = hue(p, q, h + 1 / 3);
			g = hue(p, q, h);
			b = hue(p, q, h - 1 / 3);
		}
		return { r: round(r * 255), g: round(g * 255), b: round(b * 255), a: a };
	}
	return function(c) {
		var o = { r: 0, g: 0, b: 0, a: 0 }, m = null;
		if (typeof c == "string") {
			if (c in names) { c = "#" + names[c]; }
			if ((m = c.match(/#([a-f0-9])([a-f0-9])([a-f0-9])$/i)) !== null) {
				o = { r: hi(m[1] + m[1]), g: hi(m[2] + m[2]), b: hi(m[3] + m[3]), a: 1 };
			} else if ((m = c.match(/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i)) !== null) {
				o = { r: hi(m[1]), g: hi(m[2]), b: hi(m[3]), a: 1 };
			} else if ((m = c.match(/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i)) !== null) {
				o = { r: hi(m[1]), g: hi(m[2]), b: hi(m[3]), a: hf(m[4]) };
			} else if ((m = c.match(/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/)) !== null) {
				o = { r: si(m[1]), g: si(m[2]), b: si(m[3]), a: 1 };
			} else if ((m = c.match(/rgb\(\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*\)/)) !== null) {
				o = { r: pi(m[1]), g: pi(m[2]), b: pi(m[3]), a: 1 };
			} else if ((m = c.match(/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d*?)?\s*\)/)) !== null) {
				o = { r: si(m[1]), g: si(m[2]), b: si(m[3]), a: sf(m[4]) };
			} else if ((m = c.match(/rgba\(\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d?\.?\d*?)?\s*\)/)) !== null) {
				o = { r: pi(m[1]), g: pi(m[2]), b: pi(m[3]), a: sf(m[4]) };
			} else if ((m = c.match(/hsl\(\s*(\d{1,3}\.?\d?)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*\)/)) !== null) {
				o = hslToRgb(uf(m[1]), pf(m[2]), pf(m[3]), 1);
			} else if ((m = c.match(/hsla\(\s*(\d{1,3}\.?\d?)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d?\.?\d*?)?\s*\)/)) !== null) {
				o = hslToRgb(uf(m[1]), pf(m[2]), pf(m[3]), sf(m[4]));
			}
		} else if (typeof c == "object") {
			if (c.r !== undefined && c.g != undefined && c.b !== undefined) {
				o = { r: si(c.r), g: si(c.g), b: si(c.b), a: sf(c.a || 1) };
			} else if (c.h !== undefined && c.s !== undefined && c.l !== undefined) {
				o = hslToRgb(uf(c.h), pf(c.s), pf(c.l), sf(c.a || 1));
			}
		}
		return o;
	};
}());

if (true) {
  module.exports = { parseColor };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * Memoize a function
 * @param {Function} f The function to memoize
 * @returns {Function} A memoized version of the function
 */
const memoize = f => {
  var cache = {};
  return function(...args) {
    return cache[args] ?? (cache[args] = f.apply(this, args));
  };
};

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
const clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
const frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);

/**
 * Round n to d decimal places
 * @param {number} n The number to round
 * @param {number} [d=0] The number of decimal places to round to
 * @return {number} A rounded number
 */
const round = (n, d = 0) => {
  const p = Math.pow(10, d);
  return Math.round(n * p + Number.EPSILON) / p;
}

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
const lerp = (a, b, i) => a + (b - a) * i;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
const unlerp = (a, b, i) => (i - a) / (b - a);

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
const blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
const remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
const smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
const radians = degrees => (Math.PI / 180) * degrees;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
const degrees = radians => (180 / Math.PI) * radians;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
const cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {
  let total = 0;
  for (let i = samples; i--;) {
    total += Math.random();
  }
  return mu + (total - samples / 2) / (samples / 2) * sigma;
};

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
const cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
const weightedRandom = w => {
  let total = w.reduce((a, i) => a + i, 0), n = 0;
  const r = Math.random() * total;
  while (total > r) {
    total -= w[n++];
  }
  return n - 1;
};

/**
 * An interpolation function
 * @callback InterpolationFunction
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {InterpolationFunction} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
const lerpArray = (a, i, f = lerp) => {
  const s = i * (a.length - 1);
  const p = clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, frac(s));
};

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
const dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
const factorial = a => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
const npr = (n, r) => factorial(n) / factorial(n - r);

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
const ncr = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * Generate all permutations of r elements from an array
 *
 * @example
 * ```js
 * permutations([1, 2, 3], 2);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, 2],
 *   [1, 3],
 *   [2, 1],
 *   [2, 3],
 *   [3, 1],
 *   [3, 2]
 * ]
 * ```
 * @param {Array<*>} a
 * @param {number} r The number of elements to choose in each permutation
 * @return {Array<Array<*>>} An array of permutation arrays
 */
const permutations = (a, r) => {
  if (r === 1) {
    return a.map(item => [item]);
  }

  return a.reduce(
    (acc, item, i) => [
      ...acc,
      ...permutations(a.slice(0, i).concat(a.slice(i + 1)), r - 1).map(c => [item, ...c]),
    ],
    []
  );
}

/**
 * Generate all combinations of r elements from an array
 *
 * @example
 * ```js
 * combinations([1, 2, 3], 2);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, 2],
 *   [1, 3],
 *   [2, 3]
 * ]
 * ```
 * @param {Array<*>} a
 * @param {number} r The number of elements to choose in each combination
 * @return {Array<Array<*>>} An array of combination arrays
 */
const combinations = (a, r) => {
  if (r === 1) {
    return a.map(item => [item]);
  }

  return a.reduce(
    (acc, item, i) => [
      ...acc,
      ...combinations(a.slice(i + 1), r - 1).map(c => [item, ...c]),
    ],
    []
  );
};

/**
 * Get a cartesian product of arrays
 *
 * @example
 * ```js
 * cartesian([1, 2, 3], ['a', 'b']);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, "a"],
 *   [1, "b"],
 *   [2, "a"],
 *   [2, "b"],
 *   [3, "a"],
 *   [3, "b"]
 * ]
 * ```
 */
const cartesian = (...arr) =>
  arr.reduce(
    (a, b) => a.flatMap(c => b.map(d => [...c, d])),
    [[]]
  );

/**
 * A function for generating array values
 * @callback TimesFunction
 * @param {number} i The array index
 * @return {*} The array value
 */

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {TimesFunction} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
const times = (f, n) => Array(n).fill(0).map((_, i) => f(i));

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
const range = n => times(i => i, n);

/**
 * Zip multiple arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {...Array<*>} a The arrays to zip
 * @return {Array<Array<*>>}
 */
const zip = (...a) => times(i => a.map(a => a[i]), Math.max(...a.map(a => a.length)));

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a The array to access
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
const at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];

/**
 * Return the last element of an array without removing it
 * @param {Array<*>} a
 * @return {*} The last element from the array
 */
const peek = (a) => {
  if (!a.length) {
    return undefined;
  }

  return a[a.length - 1];
};

/**
 * Return the index for a given position in an unrolled 2d array
 * @param {number} x The x position
 * @param {number} y The y position
 * @param {number} w The width of the 2d array
 * @returns {number} The index in the unrolled array
 */
const ind = (x, y, w) => x + y * w;

/**
 * Return the position for a given index in an unrolled 2d array
 * @param {number} i The index
 * @param {number} w The width of the 2d array
 * @returns {Array<number>} The position as a 2-tuple
 */
const pos = (i, w) => [i % w, Math.floor(i / w)];

/**
 * Chop an array into chunks of size n
 * @param {Array<*>} a
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
const chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));

/**
 * Randomly shuffle a shallow copy of an array
 * @param {Array<*>} a
 * @return {Array<*>} The shuffled array
 */
const shuffle = a => a.slice().sort(() => Math.random() - 0.5);

/**
 * Flatten an object
 * @param {object} o
 * @param {string} concatenator The string to use for concatenating keys
 * @return {object} A flattened object
 */
const flat = (o, concatenator = '.') => {
  return Object.keys(o).reduce((acc, key) => {
    if (o[key] instanceof Date) {
      return {
        ...acc,
        [key]: o[key].toISOString(),
      };
    }

    if (typeof o[key] !== 'object' || !o[key]) {
      return {
        ...acc,
        [key]: o[key],
      };
    }
    const flattened = flat(o[key], concatenator);

    return {
      ...acc,
      ...Object.keys(flattened).reduce(
        (childAcc, childKey) => ({
          ...childAcc,
          [`${key}${concatenator}${childKey}`]: flattened[childKey],
        }),
        {}
      ),
    };
  }, {});
};

/**
 * Unflatten an object
 * @param {object} o
 * @param {string} concatenator The string to check for in concatenated keys
 * @return {object} An un-flattened object
 */
const unflat = (o, concatenator = '.') => {
  let result = {}, temp, substrings, property, i;

  for (property in o) {
    substrings = property.split(concatenator);
    temp = result;
    for (i = 0; i < substrings.length - 1; i++) {
      if (!(substrings[i] in temp)) {
        if (isFinite(substrings[i + 1])) {
          temp[substrings[i]] = [];
        } else {
          temp[substrings[i]] = {};
        }
      }
      temp = temp[substrings[i]];
    }
    temp[substrings[substrings.length - 1]] = o[property];
  }

  return result;
};

/**
 * A split predicate
 * @callback SplitPredicate
 * @param {any} value The current value
 * @return {boolean} True if the array should split at this index
 */

/**
 * Split an array into sub-arrays based on a predicate
 * @param {Array<*>} array
 * @param {SplitPredicate} predicate
 * @return {Array<Array<*>>} An array of arrays
 */
const split = (array, predicate) => {
  const result = [];
  let current = [];
  for (const value of array) {
    if (predicate(value)) {
      if (current.length) {
        result.push(current);
      }
      current = [value];
    } else {
      current.push(value);
    }
  }
  result.push(current);

  return result;
};

/**
 * Pluck keys from an object
 * @param {object} o
 * @param {...string} keys The keys to pluck from the object
 * @return {object} An object containing the plucked keys
 */
const pluck = (o, ...keys) => {
  return keys.reduce(
    (result, key) => Object.assign(result, { [key]: o[key] }),
    {}
  );
};

/**
 * Exclude keys from an object
 * @param {object} o
 * @param {...string} keys The keys to exclude from the object
 * @return {object} An object containing all keys except excluded keys
 */
const exclude = (o, ...keys) => {
  return Object.fromEntries(
    Object.entries(o).filter(([key]) => !keys.includes(key))
  );
};

/**
 * A key transform predicate
 * @callback KeyTransformFunction
 * @param {object} o The object being transformed
 * @param {string} path The current path in dot notation
 * @param {string} key The current key
 * @param {any} value The current value
 * @return {string|null} The transformed key, or null to omit the key
 */

/**
 * A value transform predicate
 * @callback ValueTransformFunction
 * @param {object} o The object being transformed
 * @param {string} path The current path in dot notation
 * @param {string} key The current key
 * @param {any} value The current value
 * @return {any} The transformed value
 */

/**
 * Recursively transform the keys and values of an object
 * @param {object} o The object to transform
 * @param {KeyTransformFunction} [kf=undefined] Optional key transform
 * @param {ValueTransformFunction} [vf=undefined] Optional value transform
 * @return {object} The transformed object
 */
const transform = (o, kf = undefined, vf = undefined) => {
  const innerTransform = (obj, currentPath) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      let newKey = key;
      let newValue = value;
      const path = currentPath ? `${currentPath}.${key}` : key;

      if (
        typeof newValue === 'object' &&
        newValue !== null &&
        !(newValue instanceof Date) &&
        !Array.isArray(newValue)
      ) {
        newValue = innerTransform(newValue, path);
      } else if (vf) {
        newValue = vf(obj, path, key, value);
      }
      if (kf) {
        newKey = kf(obj, path, key, newValue);
        if (newKey === null) {
          return acc;
        }
      }

      return {
        ...acc,
        [newKey]: newValue,
      };
    }, {});
  };

  return innerTransform(o, '');
};

if (true) {
  module.exports = {
    memoize,
    floatEquals,
    clamp,
    frac,
    round,
    lerp,
    unlerp,
    blerp,
    remap,
    smoothstep,
    radians,
    degrees,
    randomBetween,
    randomIntBetween,
    cltRandom,
    cltRandomInt,
    weightedRandom,
    lerpArray,
    dot,
    factorial,
    npr,
    ncr,
    permutations,
    combinations,
    cartesian,
    times,
    range,
    zip,
    at,
    peek,
    ind,
    pos,
    chunk,
    shuffle,
    flat,
    unflat,
    split,
    pluck,
    exclude,
    transform,
  };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * @overview A small vector and matrix library
 * @author Gordon Larrigan
 */

const _vec_times = (f, n) => Array(n).fill(0).map((_, i) => f(i));
const _vec_chunk = (a, n) => _vec_times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));
const _vec_dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);
const _vec_is_vec2 = a => typeof a === 'object' && 'x' in a && 'y' in a;
const _vec_is_vec3 = a => typeof a === 'object' && 'x' in a && 'y' in a && 'z' in a;

/**
 * A 2d vector
 * @typedef {Object} vec2
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Check if a value is a 2d vector
 * @param {*} value The value to check
 * @returns {boolean} True if value is a 2d vector, false otherwise
 */
function isVec2(value) {
  return (
    value &&
    typeof value === 'object' &&
    'x' in value &&
    typeof value.x === 'number' &&
    'y' in value &&
    typeof value.y === 'number' &&
    !('z' in value)
  );
}

/**
 * Create a new 2d vector
 * @param {number|vec2} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec2} A new 2d vector
 * @example <caption>various ways to initialise a vector</caption>
 * let a = vec2(3, 2); // (3, 2)
 * let b = vec2(4);    // (4, 4)
 * let c = vec2(a);    // (3, 2)
 * let d = vec2();     // (0, 0)
 */
const vec2 = (x, y) => {
  if (!x && !y) {
    return { x: 0, y: 0 };
  }
  if (_vec_is_vec2(x)) {
    return { x: x.x || 0, y: x.y || 0 };
  }
  return { x: x, y: y ?? x };
};

/**
 * Get the components of a vector as an array
 * @param {vec2} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec2.components = a => [a.x, a.y];

/**
 * Create a vector from an array of components
 * @param {Array<number>} components The components of the vector
 * @return {vec2} A new vector
 */
vec2.fromComponents = components => vec2(...components.slice(0, 2));

/**
 * Return a unit vector (1, 0)
 * @return {vec2} A unit vector (1, 0)
 */
vec2.ux = () => vec2(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec2} A unit vector (0, 1)
 */
vec2.uy = () => vec2(0, 1);

/**
 * Add vectors
 * @param {vec2} a Vector a
 * @param {vec2|number} b Vector or scalar b
 * @return {vec2} a + b
 */
vec2.add = (a, b) => ({ x: a.x + (b.x ?? b), y: a.y + (b.y ?? b) });

/**
 * Add multiple vectors
 * @param  {...any} v Vectors to add
 * @returns {vec2} The sum of the vectors
 */
vec2.addm = (...v) => v.reduce((a, b) => vec2.add(a, b), vec2());

/**
 * Subtract vectors
 * @param {vec2} a Vector a
 * @param {vec2|number} b Vector or scalar b
 * @return {vec2} a - b
 */
vec2.sub = (a, b) => ({ x: a.x - (b.x ?? b), y: a.y - (b.y ?? b) });

/**
 * Subtract multiple vectors
 * @param  {...any} v Vectors to subtract
 * @returns {vec2} The result of subtracting the vectors
 */
vec2.subm = (...v) => v.reduce((a, b) => vec2.sub(a, b));

/**
 * Scale a vector
 * @param {vec2} a Vector a
 * @param {vec2|number} b Vector or scalar b
 * @return {vec2} a * b
 */
vec2.mul = (a, b) => ({ x: a.x * (b.x ?? b), y: a.y * (b.y ?? b) });

/**
 * Scale a vector by a scalar, alias for vec2.mul
 * @param {vec2} a Vector a
 * @param {number} b Scalar b
 * @return {vec2} a * b
 */
vec2.scale = (a, b) => vec2.mul(a, b);

/**
 * Divide a vector
 * @param {vec2} a Vector a
 * @param {vec2|number} b Vector or scalar b
 * @return {vec2} a / b
 */
vec2.div = (a, b) => ({ x: a.x / (b.x ?? b), y: a.y / (b.y ?? b) });

/**
 * Get the length of a vector
 * @param {vec2} a Vector a
 * @return {number} |a|
 */
vec2.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec2} a Vector a
 * @return {number} |a|
 */
vec2.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec2} a The vector to normalise
 * @return {vec2} ^a
 */
vec2.nor = a => {
  let len = vec2.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec2();
};

/**
 * Get a dot product of vectors
 * @param {vec2} a Vector a
 * @param {vec2} b Vector b
 * @return {number} a ∙ b
 */
vec2.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec2} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec2} A rotated vector
 */
vec2.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
};

/**
 * Fast method to rotate a vector by -90, 90 or 180 degrees
 * @param {vec2} a The vector to rotate
 * @param {number} r 1 for 90 degrees (cw), -1 for -90 degrees (ccw), 2 or -2 for 180 degrees
 * @return {vec2} A rotated vector
 */
vec2.rotf = (a, r) => {
  switch (r) {
    case 1: return vec2(a.y, -a.x);
    case -1: return vec2(-a.y, a.x);
    case 2: case -2: return vec2(-a.x, -a.y);
    default: return a;
  }
};

/**
 * Scalar cross product of two vectors
 * @param {vec2} a Vector a
 * @param {vec2} b Vector b
 * @return {number} a × b
 */
vec2.cross = (a, b) => {
  return a.x * b.y - a.y * b.x;
};

/**
 * Check if two vectors are equal
 * @param {vec2} a Vector a
 * @param {vec2} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec2.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec2} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec2.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec2} a The vector to copy
 * @return {vec2} A copy of vector a
 */
vec2.cpy = a => vec2(a);

/**
 * A function to call on each component of a 2d vector
 * @callback vec2MapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec2} a Vector a
 * @param {vec2MapCallback} f The function to call on each component of the vector
 * @return {vec2} Vector a mapped through f
 */
vec2.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec2} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec2.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * Swizzle a vector with a string of component labels
 *
 * The string can contain:
 * - `x` or `y`
 * - `u` or `v` (aliases for `x` and `y`, respectively)
 * - `X`, `Y`, `U`, `V` (negated versions of the above)
 * - `0` or `1` (these will be passed through unchanged)
 * - `.` to return the component that would normally be at this position (or 0)
 *
 * Any other characters will default to 0
 * @param {vec2} a The vector to swizzle
 * @param {string} [s='..'] The swizzle string
 * @return {Array<number>} The swizzled components
 * @example <caption>swizzling a vector</caption>
 * let a = vec2(3, -2);
 * vec2.swiz(a, 'x');    // [3]
 * vec2.swiz(a, 'yx');   // [-2, 3]
 * vec2.swiz(a, 'xY');   // [3, 2]
 * vec2.swiz(a, 'Yy');   // [2, -2]
 * vec2.swiz(a, 'x.x');  // [3, -2, 3]
 * vec2.swiz(a, 'y01x'); // [-2, 0, 1, 3]
 */
vec2.swiz = (a, s = '..') => {
  const result = [];
  s.split('').forEach((c, i) => {
    switch (c) {
      case 'x': case 'u': result.push(a.x); break;
      case 'y': case 'v': result.push(a.y); break;
      case 'X': case 'U': result.push(-a.x); break;
      case 'Y': case 'V': result.push(-a.y); break;
      case '0': result.push(0); break;
      case '1': result.push(1); break;
      case '.': result.push([a.x, a.y][i] ?? 0); break;
      default: result.push(0);
    }
  });
  return result;
};

/**
 * Polar coordinates for a 2d vector
 * @typedef {Object} polarCoordinates2d
 * @property {number} r The magnitude (radius) of the vector
 * @property {number} theta The angle of the vector
 */

/**
 * Convert a vector into polar coordinates
 * @param {vec2} a The vector to convert
 * @return {polarCoordinates2d} The magnitude and angle of the vector
 */
vec2.polar = a => ({ r: vec2.len(a), theta: Math.atan2(a.y, a.x) });

/**
 * Convert polar coordinates into a vector
 * @param {number} r The magnitude (radius) of the vector
 * @param {number} theta The angle of the vector
 * @return {vec2} A vector with the given angle and magnitude
 */
vec2.fromPolar = (r, theta) => vec2(r * Math.cos(theta), r * Math.sin(theta));

/**
 * A 3d vector
 * @typedef {Object} vec3
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 * @property {number} z The z component of the vector
 */

/**
 * Check if a value is a 3d vector
 * @param {*} value The value to check
 * @returns {boolean} True if value is a 3d vector, false otherwise
 */
function isVec3(value) {
  return (
    value &&
    typeof value === 'object' &&
    'x' in value &&
    typeof value.x === 'number' &&
    'y' in value &&
    typeof value.y === 'number' &&
    'z' in value &&
    typeof value.z === 'number'
  );
}

/**
 * Create a new 3d vector
 * @param {number|vec3|vec2} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector, or the z component if x is a vec2
 * @param {number} [z] The z component of the vector
 * @return {vec3} A new 3d vector
 * @example <caption>various ways to initialise a vector</caption>
 * let a = vec3(3, 2, 1);       // (3, 2, 1)
 * let b = vec3(4, 5);          // (4, 5, 0)
 * let c = vec3(6);             // (6, 6, 6)
 * let d = vec3(a);             // (3, 2, 1)
 * let e = vec3();              // (0, 0, 0)
 * let f = vec3(vec2(1, 2), 3); // (1, 2, 3)
 * let g = vec3(vec2(4, 5));    // (4, 5, 0)
 */
const vec3 = (x, y, z) => {
  if (!x && !y && !z) {
    return { x: 0, y: 0, z: 0 };
  }
  if (_vec_is_vec3(x)) {
    return { x: x.x || 0, y: x.y || 0, z: x.z || 0 };
  }
  if (_vec_is_vec2(x)) {
    return { x: x.x || 0, y: x.y || 0, z: y || 0 };
  }
  return { x: x, y: y ?? x, z: z ?? x };
};

/**
 * Get the components of a vector as an array
 * @param {vec3} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec3.components = a => [a.x, a.y, a.z];

/**
 * Create a vector from an array of components
 * @param {Array<number>} components The components of the vector
 * @return {vec3} A new vector
 */
vec3.fromComponents = components => vec3(...components.slice(0, 3));

/**
 * Return a unit vector (1, 0, 0)
 * @return {vec3} A unit vector (1, 0, 0)
 */
vec3.ux = () => vec3(1, 0, 0);

/**
 * Return a unit vector (0, 1, 0)
 * @return {vec3} A unit vector (0, 1, 0)
 */
vec3.uy = () => vec3(0, 1, 0);

/**
 * Return a unit vector (0, 0, 1)
 * @return {vec3} A unit vector (0, 0, 1)
 */
vec3.uz = () => vec3(0, 0, 1);

/**
 * Add vectors
 * @param {vec3} a Vector a
 * @param {vec3|number} b Vector or scalar b
 * @return {vec3} a + b
 */
vec3.add = (a, b) => ({ x: a.x + (b.x ?? b), y: a.y + (b.y ?? b), z: a.z + (b.z ?? b) });

/**
 * Add multiple vectors
 * @param  {...any} v Vectors to add
 * @returns {vec3} The sum of the vectors
 */
vec3.addm = (...v) => v.reduce((a, b) => vec3.add(a, b), vec3());

/**
 * Subtract vectors
 * @param {vec3} a Vector a
 * @param {vec3|number} b Vector or scalar b
 * @return {vec3} a - b
 */
vec3.sub = (a, b) => ({ x: a.x - (b.x ?? b), y: a.y - (b.y ?? b), z: a.z - (b.z ?? b) });

/**
 * Subtract multiple vectors
 * @param  {...any} v Vectors to subtract
 * @returns {vec3} The result of subtracting the vectors
 */
vec3.subm = (...v) => v.reduce((a, b) => vec3.sub(a, b));

/**
 * Scale a vector
 * @param {vec3} a Vector a
 * @param {vec3|number} b Vector or scalar b
 * @return {vec3} a * b
 */
vec3.mul = (a, b) => ({ x: a.x * (b.x ?? b), y: a.y * (b.y ?? b), z: a.z * (b.z ?? b) });

/**
 * Scale a vector by a scalar, alias for vec3.mul
 * @param {vec3} a Vector a
 * @param {number} b Scalar b
 * @return {vec3} a * b
 */
vec3.scale = (a, b) => vec3.mul(a, b);

/**
 * Divide a vector
 * @param {vec3} a Vector a
 * @param {vec3|number} b Vector or scalar b
 * @return {vec3} a / b
 */
vec3.div = (a, b) => ({ x: a.x / (b.x ?? b), y: a.y / (b.y ?? b), z: a.z / (b.z ?? b) });

/**
 * Get the length of a vector
 * @param {vec3} a Vector a
 * @return {number} |a|
 */
vec3.len = a => Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec3} a Vector a
 * @return {number} |a|
 */
vec3.manhattan = a => Math.abs(a.x) + Math.abs(a.y) + Math.abs(a.z);

/**
 * Normalise a vector
 * @param {vec3} a The vector to normalise
 * @return {vec3} ^a
 */
vec3.nor = a => {
  let len = vec3.len(a);
  return len ? { x: a.x / len, y: a.y / len, z: a.z / len } : vec3();
};

/**
 * Get a dot product of vectors
 * @param {vec3} a Vector a
 * @param {vec3} b Vector b
 * @return {number} a ∙ b
 */
vec3.dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;

/**
 * Rotate a vector using a rotation matrix
 * @param {vec3} a The vector to rotate
 * @param {mat} m The rotation matrix
 * @return {vec3} A rotated vector
 */
vec3.rot = (a, m) => vec3(
  vec3.dot(vec3.fromComponents(mat.row(m, 1)), a),
  vec3.dot(vec3.fromComponents(mat.row(m, 2)), a),
  vec3.dot(vec3.fromComponents(mat.row(m, 3)), a)
);

/**
 * Rotate a vector by r radians around the x axis
 * @param {vec3} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec3} A rotated vector
 */
vec3.rotx = (a, r) => vec3(
  a.x,
  a.y * Math.cos(r) - a.z * Math.sin(r),
  a.y * Math.sin(r) + a.z * Math.cos(r)
);

/**
 * Rotate a vector by r radians around the y axis
 * @param {vec3} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec3} A rotated vector
 */
vec3.roty = (a, r) => vec3(
  a.x * Math.cos(r) + a.z * Math.sin(r),
  a.y,
  -a.x * Math.sin(r) + a.z * Math.cos(r)
);

/**
 * Rotate a vector by r radians around the z axis
 * @param {vec3} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec3} A rotated vector
 */
vec3.rotz = (a, r) => vec3(
  a.x * Math.cos(r) - a.y * Math.sin(r),
  a.x * Math.sin(r) + a.y * Math.cos(r),
  a.z
);

/**
 * Rotate a vector using a quaternion
 * @param {vec3} a The vector to rotate
 * @param {Array<number>} q The quaternion to rotate by
 * @return {vec3} A rotated vector
 */
vec3.rotq = (v, q) => {
  if (q.length !== 4) {
    return vec3();
  }

  const d = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
  if (d === 0) {
    return vec3();
  }

  const uq = [q[0] / d, q[1] / d, q[2] / d, q[3] / d];
  const u = vec3(...uq.slice(0, 3));
  const s = uq[3];
  return vec3.add(
    vec3.add(
      vec3.mul(u, 2 * vec3.dot(u, v)),
      vec3.mul(v, s * s - vec3.dot(u, u))
    ),
    vec3.mul(vec3.cross(u, v), 2 * s)
  );
};

/**
 * Rotate a vector using Euler angles
 * @param {vec3} a The vector to rotate
 * @param {vec3} e The Euler angles to rotate by
 * @return {vec3} A rotated vector
 */
vec3.rota = (a, e) => vec3.rotz(vec3.roty(vec3.rotx(a, e.x), e.y), e.z);

/**
 * Get the cross product of vectors
 * @param {vec3} a Vector a
 * @param {vec3} b Vector b
 * @return {vec3} a × b
 */
vec3.cross = (a, b) => vec3(
  a.y * b.z - a.z * b.y,
  a.z * b.x - a.x * b.z,
  a.x * b.y - a.y * b.x
);

/**
 * Check if two vectors are equal
 * @param {vec3} a Vector a
 * @param {vec3} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec3.eq = (a, b) => a.x === b.x && a.y === b.y && a.z === b.z;

/**
 * Get the angle of a vector from the x axis
 * @param {vec3} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec3.radx = a => Math.atan2(a.z, a.y);

/**
 * Get the angle of a vector from the y axis
 * @param {vec3} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec3.rady = a => Math.atan2(a.x, a.y);

/**
 * Get the angle of a vector from the z axis
 * @param {vec3} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec3.radz = a => Math.atan2(a.y, a.z);

/**
 * Copy a vector
 * @param {vec3} a The vector to copy
 * @return {vec3} A copy of vector a
 */
vec3.cpy = a => vec3(a);

/**
 * A function to call on each component of a 3d vector
 * @callback vec3MapCallback
 * @param {number} value The component value
 * @param {'x' | 'y' | 'z'} label The component label (x, y or z)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec3} a Vector a
 * @param {vec3MapCallback} f The function to call on each component of the vector
 * @return {vec3} Vector a mapped through f
 */
vec3.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y'), z: f(a.z, 'z') });

/**
 * Convert a vector into a string
 * @param {vec3} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec3.str = (a, s = ', ') => `${a.x}${s}${a.y}${s}${a.z}`;

/**
 * Swizzle a vector with a string of component labels
 *
 * The string can contain:
 * - `x`, `y` or `z`
 * - `u`, `v` or `w` (aliases for `x`, `y` and `z`, respectively)
 * - `r`, `g` or `b` (aliases for `x`, `y` and `z`, respectively)
 * - `X`, `Y`, `Z`, `U`, `V`, `W`, `R`, `G`, `B` (negated versions of the above)
 * - `0` or `1` (these will be passed through unchanged)
 * - `.` to return the component that would normally be at this position (or 0)
 *
 * Any other characters will default to 0
 * @param {vec3} a The vector to swizzle
 * @param {string} [s='...'] The swizzle string
 * @return {Array<number>} The swizzled components
 * @example <caption>swizzling a vector</caption>
 * let a = vec3(3, -2, 1);
 * vec3.swiz(a, 'x');     // [3]
 * vec3.swiz(a, 'zyx');   // [1, -2, 3]
 * vec3.swiz(a, 'xYZ');   // [3, 2, -1]
 * vec3.swiz(a, 'Zzx');   // [-1, 1, 3]
 * vec3.swiz(a, 'x.x');   // [3, -2, 3]
 * vec3.swiz(a, 'y01zx'); // [-2, 0, 1, 1, 3]
 */
vec3.swiz = (a, s = '...') => {
  const result = [];
  s.split('').forEach((c, i) => {
    switch (c) {
      case 'x': case 'u': case 'r': result.push(a.x); break;
      case 'y': case 'v': case 'g': result.push(a.y); break;
      case 'z': case 'w': case 'b': result.push(a.z); break;
      case 'X': case 'U': case 'R': result.push(-a.x); break;
      case 'Y': case 'V': case 'G': result.push(-a.y); break;
      case 'Z': case 'W': case 'B': result.push(-a.z); break;
      case '0': result.push(0); break;
      case '1': result.push(1); break;
      case '.': result.push([a.x, a.y, a.z][i] ?? 0); break;
      default: result.push(0);
    }
  });
  return result;
};

/**
 * Polar coordinates for a 3d vector
 * @typedef {Object} polarCoordinates3d
 * @property {number} r The magnitude (radius) of the vector
 * @property {number} theta The tilt angle of the vector
 * @property {number} phi The pan angle of the vector
 */

/**
 * Convert a vector into polar coordinates
 * @param {vec3} a The vector to convert
 * @return {polarCoordinates3d} The magnitude, tilt and pan of the vector
 */
vec3.polar = a => {
  let r = vec3.len(a),
    theta = Math.acos(a.y / r),
    phi = Math.atan2(a.z, a.x);
  return { r, theta, phi };
};

/**
 * Convert polar coordinates into a vector
 * @param {number} r The magnitude (radius) of the vector
 * @param {number} theta The tilt of the vector
 * @param {number} phi The pan of the vector
 * @return {vec3} A vector with the given angle and magnitude
 */
vec3.fromPolar = (r, theta, phi) => {
  const sinTheta = Math.sin(theta);
  return vec3(
    r * sinTheta * Math.cos(phi),
    r * Math.cos(theta),
    r * sinTheta * Math.sin(phi)
  );
};

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

/**
 * Check if a value is a matrix
 * @param {*} value The value to check
 * @returns {boolean} True if value is a matrix, false otherwise
 */
function isMat(value) {
  return (
    value &&
    typeof value === 'object' &&
    'm' in value &&
    typeof value.m === 'number' &&
    'n' in value &&
    typeof value.n === 'number' &&
    'entries' in value &&
    Array.isArray(value.entries)
  );
}

/**
 * Create a new matrix
 * @param {number} [m=4] The number of rows
 * @param {number} [n=4] The number of columns
 * @param {Array<number>} [entries=[]] Matrix values in reading order
 * @return {mat} A new matrix
 */
const mat = (m = 4, n = 4, entries = []) => ({
  m, n,
  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)
});

/**
 * Get an identity matrix of size n
 * @param {number} n The size of the matrix
 * @return {mat} An identity matrix
 */
mat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));

/**
 * Get an entry from a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {number} The value at position (i, j) in matrix a
 */
mat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];

/**
 * Set an entry of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @param {number} v The value to set in matrix a
 */
mat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };

/**
 * Get a row from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} m The row offset
 * @return {Array<number>} Row m from matrix a
 */
mat.row = (a, m) => {
  const s = (m - 1) * a.n;
  return a.entries.slice(s, s + a.n);
};

/**
 * Get a column from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} n The column offset
 * @return {Array<number>} Column n from matrix a
 */
mat.col = (a, n) => _vec_times(i => mat.get(a, (i + 1), n), a.m);

/**
 * Add matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a + b
 */
mat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);

/**
 * Subtract matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a - b
 */
mat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);

/**
 * Multiply matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat|false} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, _vec_dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

/**
 * Multiply a matrix by a vector
 * @param {mat} a Matrix a
 * @param {vec2|vec3|number[]} b Vector b
 * @return {vec2|vec3|number[]|false} ab or false if the matrix and vector cannot be multiplied
 */
mat.mulv = (a, b) => {
  let n, bb, rt;
  if (_vec_is_vec3(b)) {
    bb = vec3.components(b);
    n = 3;
    rt = vec3.fromComponents;
  } else if (_vec_is_vec2(b)) {
    bb = vec2.components(b);
    n = 2;
    rt = vec2.fromComponents;
  } else {
    bb = b;
    n = b.length ?? 0;
    rt = v => v;
  }
  if (a.n !== n) { return false; }
  const result = [];
  for (let i = 1; i <= a.m; i++) {
    result.push(_vec_dot(mat.row(a, i), bb));
  }
  return rt(result);
}

/**
 * Scale a matrix
 * @param {mat} a Matrix a
 * @param {number} b Scalar b
 * @return {mat} a * b
 */
mat.scale = (a, b) => mat.map(a, v => v * b);

/**
 * Transpose a matrix
 * @param {mat} a The matrix to transpose
 * @return {mat} A transposed matrix
 */
mat.trans = a => mat(a.n, a.m, _vec_times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|false} The (i, j) minor of matrix a or false if the matrix is not square
 */
mat.minor = (a, i, j) => {
  if (a.m !== a.n) { return false; }
  const entries = [];
  for (let ii = 1; ii <= a.m; ii++) {
    if (ii === i) { continue; }
    for (let jj = 1; jj <= a.n; jj++) {
      if (jj === j) { continue; }
      entries.push(mat.get(a, ii, jj));
    }
  }
  return mat(a.m - 1, a.n - 1, entries);
};

/**
 * Get the determinant of a matrix
 * @param {mat} a Matrix a
 * @return {number|false} |a| or false if the matrix is not square
 */
mat.det = a => {
  if (a.m !== a.n) { return false; }
  if (a.m === 1) {
    return a.entries[0];
  }
  if (a.m === 2) {
    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];
  }
  let total = 0, sign = 1;
  for (let j = 1; j <= a.n; j++) {
    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));
    sign *= -1;
  }
  return total;
};

/**
 * Normalise a matrix
 * @param {mat} a The matrix to normalise
 * @return {mat|false} ^a or false if the matrix is not square
 */
mat.nor = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  return mat.map(a, i => i * d);
};

/**
 * Get the adjugate of a matrix
 * @param {mat} a The matrix from which to get the adjugate
 * @return {mat} The adjugate of a
 */
mat.adj = a => {
  const minors = mat(a.m, a.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= a.n; j++) {
      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));
    }
  }
  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));
  return mat.trans(cofactors);
};

/**
 * Get the inverse of a matrix
 * @param {mat} a The matrix to invert
 * @return {mat|false} a^-1 or false if the matrix has no inverse
 */
mat.inv = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  if (d === 0) { return false; }
  return mat.scale(mat.adj(a), 1 / d);
};

/**
 * Check if two matrices are equal
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {boolean} True if matrices a and b are identical, false otherwise
 */
mat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);

/**
 * Copy a matrix
 * @param {mat} a The matrix to copy
 * @return {mat} A copy of matrix a
 */
mat.cpy = a => mat(a.m, a.n, [...a.entries]);

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */

/**
 * Call a function on each entry of a matrix and build a new matrix from the results
 * @param {mat} a Matrix a
 * @param {matrixMapCallback} f The function to call on each entry of the matrix
 * @return {mat} Matrix a mapped through f
 */
mat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));

/**
 * Convert a matrix into a string
 * @param {mat} a The matrix to convert
 * @param {string} [ms=', '] The separator string for columns
 * @param {string} [ns='\n'] The separator string for rows
 * @return {string} A string representation of the matrix
 */
mat.str = (a, ms = ', ', ns = '\n') => _vec_chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec2, vec3, mat, isVec2, isVec3, isMat };
}


/***/ }),

/***/ "./src/core/GlContext.ts":
/*!*******************************!*\
  !*** ./src/core/GlContext.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlContext = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const copyShader = __webpack_require__(/*! ./shaders/copy.frag.glsl */ "./src/core/shaders/copy.frag.glsl");
const quadShader = __webpack_require__(/*! ./shaders/quad.vert.glsl */ "./src/core/shaders/quad.vert.glsl");
class GlContext {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.gl = null;
        this.initialiseCallbacks = [];
        this.imageTextures = new WeakMap();
        this.uploadedCanvases = new Set();
        this.canvas.addEventListener('webglcontextlost', e => e.preventDefault());
        this.canvas.addEventListener('webglcontextrestored', () => this.initialise());
        this.initialise();
    }
    get available() {
        return this.gl !== null && !this.gl.isContextLost();
    }
    onInitialise(callback) {
        this.initialiseCallbacks.push(callback);
        if (this.gl) {
            callback(this.gl);
        }
    }
    initialise() {
        this.gl = null;
        const gl = this.canvas.getContext('webgl', {
            alpha: true,
            premultipliedAlpha: false,
            antialias: false,
            depth: false,
            stencil: false,
        });
        if (!gl) {
            console.warn('WebGL is not available');
            return;
        }
        this.gl = gl;
        try {
            this.copyProgram = this.createProgram(copyShader);
        }
        catch (e) {
            console.error('WebGL has been disabled', e);
            this.gl = null;
            return;
        }
        this.imageTextures = new WeakMap();
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
        this.canvas.width = this.canvas.height = 0;
        this.initialiseCallbacks.forEach(callback => callback(gl));
    }
    compileShader(type, source) {
        var _a;
        const gl = this.gl;
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS) &&
            !gl.isContextLost()) {
            throw new Error((_a = gl.getShaderInfoLog(shader)) !== null && _a !== void 0 ? _a : 'Unable to compile');
        }
        return shader;
    }
    createProgram(fragmentSource) {
        var _a;
        const gl = this.gl;
        const program = gl.createProgram();
        gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, quadShader));
        gl.attachShader(program, this.compileShader(gl.FRAGMENT_SHADER, fragmentSource));
        gl.bindAttribLocation(program, 0, 'a_corner');
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS) &&
            !gl.isContextLost()) {
            throw new Error((_a = gl.getProgramInfoLog(program)) !== null && _a !== void 0 ? _a : 'Unable to link');
        }
        const uniforms = {};
        const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < count; i++) {
            const { name } = gl.getActiveUniform(program, i);
            uniforms[name] = gl.getUniformLocation(program, name);
        }
        return { program, uniforms };
    }
    createRenderTarget() {
        const gl = this.gl;
        return {
            texture: gl.createTexture(),
            framebuffer: gl.createFramebuffer(),
            size: (0, vec_1.vec2)(),
        };
    }
    bindTexture(unit, texture, filter, repeat = false) {
        const gl = this.gl;
        const wrap = repeat ? gl.REPEAT : gl.CLAMP_TO_EDGE;
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
    }
    upload(unit, texture, image, filter, repeat = false) {
        const gl = this.gl;
        this.bindTexture(unit, texture, filter, repeat);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }
    uploadData(unit, texture, size, data, filter, repeat = false) {
        const gl = this.gl;
        this.bindTexture(unit, texture, filter, repeat);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size.x, size.y, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
    }
    bindImage(image, filter, unit = GlContext.IMAGE_UNIT) {
        const gl = this.gl;
        let texture = this.imageTextures.get(image);
        const isNew = texture === undefined;
        if (!texture) {
            texture = gl.createTexture();
            this.imageTextures.set(image, texture);
        }
        this.bindTexture(unit, texture, filter);
        const isStale = image instanceof HTMLCanvasElement && !this.uploadedCanvases.has(image);
        if (isNew || isStale) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            this.uploadedCanvases.add(image);
        }
    }
    invalidateCanvases() {
        this.uploadedCanvases.clear();
    }
    resizeTarget(target, size) {
        if (target.size.x === size.x && target.size.y === size.y) {
            return;
        }
        const gl = this.gl;
        target.size = vec_1.vec2.cpy(size);
        this.bindTexture(GlContext.IMAGE_UNIT, target.texture, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size.x, size.y, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target.texture, 0);
    }
    resize(screen) {
        if (this.canvas.width === screen.x && this.canvas.height === screen.y) {
            return;
        }
        this.canvas.width = screen.x;
        this.canvas.height = screen.y;
        this.gl.viewport(0, 0, screen.x, screen.y);
    }
    drawQuad({ uniforms }, screenRectangle, worldRectangle = [0, 0, 0, 0], maskRectangle = [0, 0, 0, 0]) {
        const gl = this.gl;
        gl.uniform4fv(uniforms.u_screenRectangle, screenRectangle);
        gl.uniform4fv(uniforms.u_worldRectangle, worldRectangle);
        gl.uniform4fv(uniforms.u_maskRectangle, maskRectangle);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    drawTexture(texture, screen) {
        const gl = this.gl;
        const program = this.copyProgram;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.disable(gl.BLEND);
        gl.useProgram(program.program);
        gl.uniform2f(program.uniforms.u_screen, screen.x, screen.y);
        gl.uniform1f(program.uniforms.u_flipY, 1);
        this.bindTexture(GlContext.IMAGE_UNIT, texture, gl.NEAREST);
        gl.uniform1i(program.uniforms.u_image, GlContext.IMAGE_UNIT);
        this.drawQuad(program, [0, 0, screen.x, screen.y]);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
}
exports.GlContext = GlContext;
GlContext.IMAGE_UNIT = 7;


/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.spriteBounds = exports.rectangleVertices = exports.rectangleToInterval = exports.rectanglesIntersect = exports.minVec = exports.maxVec = exports.lerpColour = exports.intervalToRectangle = exports.drawImageInRectangle = exports.colourToString = exports.boundingRectangle = exports.GlContext = void 0;
var GlContext_1 = __webpack_require__(/*! ./GlContext */ "./src/core/GlContext.ts");
Object.defineProperty(exports, "GlContext", ({ enumerable: true, get: function () { return GlContext_1.GlContext; } }));
var utilities_1 = __webpack_require__(/*! ./utilities */ "./src/core/utilities.ts");
Object.defineProperty(exports, "boundingRectangle", ({ enumerable: true, get: function () { return utilities_1.boundingRectangle; } }));
Object.defineProperty(exports, "colourToString", ({ enumerable: true, get: function () { return utilities_1.colourToString; } }));
Object.defineProperty(exports, "drawImageInRectangle", ({ enumerable: true, get: function () { return utilities_1.drawImageInRectangle; } }));
Object.defineProperty(exports, "intervalToRectangle", ({ enumerable: true, get: function () { return utilities_1.intervalToRectangle; } }));
Object.defineProperty(exports, "lerpColour", ({ enumerable: true, get: function () { return utilities_1.lerpColour; } }));
Object.defineProperty(exports, "maxVec", ({ enumerable: true, get: function () { return utilities_1.maxVec; } }));
Object.defineProperty(exports, "minVec", ({ enumerable: true, get: function () { return utilities_1.minVec; } }));
Object.defineProperty(exports, "rectanglesIntersect", ({ enumerable: true, get: function () { return utilities_1.rectanglesIntersect; } }));
Object.defineProperty(exports, "rectangleToInterval", ({ enumerable: true, get: function () { return utilities_1.rectangleToInterval; } }));
Object.defineProperty(exports, "rectangleVertices", ({ enumerable: true, get: function () { return utilities_1.rectangleVertices; } }));
Object.defineProperty(exports, "spriteBounds", ({ enumerable: true, get: function () { return utilities_1.spriteBounds; } }));


/***/ }),

/***/ "./src/core/utilities.ts":
/*!*******************************!*\
  !*** ./src/core/utilities.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawImageInRectangle = exports.spriteBounds = exports.rectangleVertices = exports.rectanglesIntersect = exports.rectangleToInterval = exports.intervalToRectangle = exports.lerpColour = exports.colourToString = exports.boundingRectangle = exports.maxVec = exports.minVec = void 0;
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
function minVec(...vectors) {
    return vectors.reduce((min, v) => (0, vec_1.vec2)(Math.min(min.x, v.x), Math.min(min.y, v.y)), (0, vec_1.vec2)(Infinity, Infinity));
}
exports.minVec = minVec;
function maxVec(...vectors) {
    return vectors.reduce((max, v) => (0, vec_1.vec2)(Math.max(max.x, v.x), Math.max(max.y, v.y)), (0, vec_1.vec2)(-Infinity, -Infinity));
}
exports.maxVec = maxVec;
function boundingRectangle(a, b) {
    const position = minVec(a.position, b.position);
    const bottomRight = maxVec(vec_1.vec2.add(a.position, a.size), vec_1.vec2.add(b.position, b.size));
    return { position, size: vec_1.vec2.sub(bottomRight, position) };
}
exports.boundingRectangle = boundingRectangle;
function colourToString(colour) {
    return `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`;
}
exports.colourToString = colourToString;
function lerpColour(a, b, i) {
    return {
        r: (0, utils_1.lerp)(a.r, b.r, i),
        g: (0, utils_1.lerp)(a.g, b.g, i),
        b: (0, utils_1.lerp)(a.b, b.b, i),
        a: (0, utils_1.lerp)(a.a, b.a, i),
    };
}
exports.lerpColour = lerpColour;
function intervalToRectangle(interval) {
    return {
        position: (0, vec_1.vec2)(interval.left, interval.top),
        size: (0, vec_1.vec2)(interval.right - interval.left, interval.bottom - interval.top),
    };
}
exports.intervalToRectangle = intervalToRectangle;
function rectangleToInterval(rectangle) {
    return {
        left: rectangle.position.x,
        right: rectangle.position.x + rectangle.size.x,
        top: rectangle.position.y,
        bottom: rectangle.position.y + rectangle.size.y,
    };
}
exports.rectangleToInterval = rectangleToInterval;
function rectanglesIntersect(a, b) {
    const tl1 = a.position;
    const br1 = vec_1.vec2.add(a.position, a.size);
    const tl2 = b.position;
    const br2 = vec_1.vec2.add(b.position, b.size);
    return tl1.x < br2.x && br1.x > tl2.x && tl1.y < br2.y && br1.y > tl2.y;
}
exports.rectanglesIntersect = rectanglesIntersect;
function rectangleVertices(rectangle) {
    const tl = rectangle.position;
    const br = vec_1.vec2.add(rectangle.position, rectangle.size);
    return [rectangle.position, (0, vec_1.vec2)(br.x, tl.y), br, (0, vec_1.vec2)(tl.x, br.y)];
}
exports.rectangleVertices = rectangleVertices;
function spriteBounds(sprite) {
    const { image } = sprite;
    const size = image ? (0, vec_1.vec2)(image.width, image.height) : sprite.size;
    return {
        position: vec_1.vec2.sub(sprite.position, vec_1.vec2.mul(sprite.origin, sprite.scale)),
        size: vec_1.vec2.mul(size, sprite.scale),
    };
}
exports.spriteBounds = spriteBounds;
function drawImageInRectangle(context, image, rectangle, repeat) {
    const { position, size } = rectangle;
    if (!repeat) {
        context.drawImage(image, position.x, position.y, size.x, size.y);
        return;
    }
    const pattern = context.createPattern(image, 'repeat');
    if (pattern) {
        context.fillStyle = pattern;
        context.beginPath();
        context.rect(position.x, position.y, size.x, size.y);
        context.fill();
    }
}
exports.drawImageInRectangle = drawImageInRectangle;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lighting */ "./src/lighting/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./reflections */ "./src/reflections/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./water */ "./src/water/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./world */ "./src/world/index.ts"), exports);


/***/ }),

/***/ "./src/lighting/Actor.ts":
/*!*******************************!*\
  !*** ./src/lighting/Actor.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Actor = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const Caster_1 = __webpack_require__(/*! ./Caster */ "./src/lighting/Caster.ts");
class Actor {
    static spriteFrame(sprite) {
        const { image } = sprite;
        return {
            ...(0, core_1.spriteBounds)(sprite),
            image,
            normalMap: image && sprite.getImage(undefined, Actor.NORMAL_LAYER),
            specularMap: image && sprite.getImage(undefined, Actor.SPECULAR_LAYER),
        };
    }
    static resolveOptions(options) {
        if (!('sprite' in options)) {
            return options;
        }
        const { sprite, ...actor } = options;
        return {
            ...actor,
            ...Actor.spriteFrame(sprite),
            customDraw: {
                image: context => sprite.draw(context),
                ...actor.customDraw,
            },
        };
    }
    constructor(lighting, actorOptions) {
        this.caster = null;
        const options = Actor.resolveOptions(actorOptions);
        const { shadow = 'sprite', ...surface } = options;
        const { type, footprintHeight, ...casterOptions } = (typeof shadow === 'string' ? { type: shadow } : shadow);
        this.lighting = lighting;
        this.sprite = 'sprite' in actorOptions ? actorOptions.sprite : null;
        this.footprintHeight =
            footprintHeight !== null && footprintHeight !== void 0 ? footprintHeight : options.size.y * Actor.DEFAULT_FOOTPRINT_SCALE;
        this.surface = lighting.addWallReceiver({
            mergeable: false,
            projectShadows: false,
            ...surface,
        });
        const footprint = this.footprint(options.position, options.size);
        if (type === 'sprite') {
            const shadowLength = options.size.y * Actor.DEFAULT_SHADOW_LENGTH_SCALE;
            this.caster = lighting.addSpriteCaster({
                image: options.image,
                minShadowLength: shadowLength,
                maxShadowLength: shadowLength,
                ...casterOptions,
                ...footprint,
            });
        }
        if (type === 'circle') {
            this.caster = lighting.addCircleCaster({
                ...casterOptions,
                ...footprint,
            });
        }
        if (this.caster && options.shadowBias === undefined) {
            this.surface.shadowBias = this.casterBias(this.caster);
        }
    }
    casterBias(caster) {
        var _a;
        if (caster instanceof Caster_1.SpriteCaster) {
            const length = (_a = caster.maxShadowLength) !== null && _a !== void 0 ? _a : caster.minShadowLength;
            return length * (1 - caster.offset.y) + 1;
        }
        return Math.max(caster.size.x, caster.size.y) / 2 + 1;
    }
    footprint(position, size) {
        return {
            position: (0, vec_1.vec2)(position.x, position.y + size.y - this.footprintHeight),
            size: (0, vec_1.vec2)(size.x, this.footprintHeight),
        };
    }
    sync() {
        var _a;
        if (!this.sprite) {
            return;
        }
        const frame = Actor.spriteFrame(this.sprite);
        this.surface.set(frame);
        (_a = this.caster) === null || _a === void 0 ? void 0 : _a.set(this.footprint(frame.position, frame.size));
        if (this.caster instanceof Caster_1.SpriteCaster) {
            this.caster.image = frame.image;
        }
    }
    moveTo(position) {
        var _a;
        if (this.sprite) {
            this.sprite.position = vec_1.vec2.cpy(position);
            this.sync();
            return;
        }
        this.surface.moveTo(position);
        (_a = this.caster) === null || _a === void 0 ? void 0 : _a.moveTo(this.footprint(position, this.surface.size).position);
    }
    remove() {
        var _a;
        this.surface.remove();
        (_a = this.caster) === null || _a === void 0 ? void 0 : _a.remove();
        this.lighting.remove(this);
    }
}
exports.Actor = Actor;
Actor.DEFAULT_FOOTPRINT_SCALE = 1 / 3;
Actor.DEFAULT_SHADOW_LENGTH_SCALE = 1.33;
Actor.NORMAL_LAYER = 'normal';
Actor.SPECULAR_LAYER = 'specular';


/***/ }),

/***/ "./src/lighting/Caster.ts":
/*!********************************!*\
  !*** ./src/lighting/Caster.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleCaster = exports.SpriteCaster = exports.RegionCaster = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const SceneObject_1 = __webpack_require__(/*! ./SceneObject */ "./src/lighting/SceneObject.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
class RegionCaster extends SceneObject_1.SceneObject {
    constructor(lighting, options) {
        super(lighting, options);
        this.includeRegionShadow = false;
        this.set(options);
    }
    canMerge(other) {
        return (this.mergeable &&
            other.mergeable &&
            this.includeRegionShadow === other.includeRegionShadow);
    }
    merge(other) {
        return new RegionCaster(this.lighting, {
            ...this,
            ...(0, core_1.boundingRectangle)(this, other),
        });
    }
}
exports.RegionCaster = RegionCaster;
class SpriteCaster extends SceneObject_1.SceneObject {
    constructor(lighting, options) {
        super(lighting, options);
        this.shadow = null;
        this.image = null;
        this.anchor = (0, vec_1.vec2)(0.5, 0.9);
        this.offset = (0, vec_1.vec2)(0.5, 0.9);
        this.minShadowLength = 64;
        this.maxShadowLength = 64;
        this.set(options);
    }
    getShadow() {
        var _a;
        return (_a = this.shadow) !== null && _a !== void 0 ? _a : (this.image && (0, utilities_1.silhouette)(this.image));
    }
}
exports.SpriteCaster = SpriteCaster;
class CircleCaster extends SceneObject_1.SceneObject {
    constructor(lighting, options) {
        super(lighting, options);
        this.anchor = (0, vec_1.vec2)(0.5, 0.9);
        this.minShadowDistance = 5;
        this.maxShadowDistance = 20;
        this.alpha = 1;
        this.set(options);
    }
}
exports.CircleCaster = CircleCaster;


/***/ }),

/***/ "./src/lighting/Light.ts":
/*!*******************************!*\
  !*** ./src/lighting/Light.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Light = void 0;
const parsecolor_1 = __webpack_require__(/*! @basementuniverse/parsecolor */ "./node_modules/@basementuniverse/parsecolor/parsecolor.js");
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
const HALF_PI = Math.PI / 2;
class Light {
    constructor(lightingSystem, options) {
        var _a, _b, _c, _d, _e, _f;
        this.dirty = true;
        this.lightingSystem = lightingSystem;
        this.position = vec_1.vec2.cpy(options.position);
        this._radius = (_a = options.radius) !== null && _a !== void 0 ? _a : Light.DEFAULT_RADIUS;
        this._colour = (_b = options.colour) !== null && _b !== void 0 ? _b : Light.DEFAULT_COLOUR;
        this._coreRadius = (_c = options.coreRadius) !== null && _c !== void 0 ? _c : Light.DEFAULT_CORE_RADIUS;
        this._intensity = (_d = options.intensity) !== null && _d !== void 0 ? _d : Light.DEFAULT_INTENSITY;
        this.height = (_e = options.height) !== null && _e !== void 0 ? _e : Light.DEFAULT_HEIGHT;
        this.castShadows = (_f = options.castShadows) !== null && _f !== void 0 ? _f : true;
        this.colourObject = (0, parsecolor_1.parseColor)(this._colour);
        this.lightCanvas = document.createElement('canvas');
        this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;
        this.lightContext = this.lightCanvas.getContext('2d');
        this.regionShadowCanvas = document.createElement('canvas');
        this.regionShadowContext = this.regionShadowCanvas.getContext('2d');
        this.objectShadowCanvas = document.createElement('canvas');
        this.objectShadowContext = this.objectShadowCanvas.getContext('2d');
    }
    get bounds() {
        const wallLightingYOffset = this.lightingSystem.options.wallLightingYOffset;
        return {
            position: (0, vec_1.vec2)(this.position.x - this._radius, this.position.y - this._radius + Math.min(wallLightingYOffset, 0)),
            size: (0, vec_1.vec2)(this._radius * 2, this._radius * 2 + Math.abs(wallLightingYOffset)),
        };
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value !== this._radius) {
            this._radius = value;
            this.dirty = true;
        }
    }
    get colour() {
        return this._colour;
    }
    set colour(value) {
        if (value !== this._colour) {
            this._colour = value;
            this.colourObject = (0, parsecolor_1.parseColor)(value);
            this.dirty = true;
        }
    }
    get coreRadius() {
        return this._coreRadius;
    }
    set coreRadius(value) {
        if (value !== this._coreRadius) {
            this._coreRadius = value;
            this.dirty = true;
        }
    }
    get intensity() {
        return this._intensity;
    }
    set intensity(value) {
        if (value !== this._intensity) {
            this._intensity = value;
            this.dirty = true;
        }
    }
    moveTo(position) {
        this.position = vec_1.vec2.cpy(position);
    }
    set(options) {
        const { position, radius, colour, coreRadius, intensity, height, castShadows, } = options;
        this.position = vec_1.vec2.cpy(position !== null && position !== void 0 ? position : this.position);
        this.radius = radius !== null && radius !== void 0 ? radius : this.radius;
        this.colour = colour !== null && colour !== void 0 ? colour : this.colour;
        this.coreRadius = coreRadius !== null && coreRadius !== void 0 ? coreRadius : this.coreRadius;
        this.intensity = intensity !== null && intensity !== void 0 ? intensity : this.intensity;
        this.height = height !== null && height !== void 0 ? height : this.height;
        this.castShadows = castShadows !== null && castShadows !== void 0 ? castShadows : this.castShadows;
    }
    remove() {
        this.lightingSystem.remove(this);
    }
    prepare(regionCasters, spriteCasters, circleCasters) {
        if (this.dirty) {
            this.prepareLightMap();
        }
        this.resetShadowContext(this.regionShadowContext);
        this.resetShadowContext(this.objectShadowContext);
        if (this.castShadows) {
            const lightRectangle = this.bounds;
            this.prepareRegionShadows(lightRectangle, regionCasters);
            this.prepareSpriteShadows(lightRectangle, spriteCasters);
            this.prepareCircleShadows(lightRectangle, circleCasters);
        }
    }
    resetShadowContext(context) {
        const size = Math.floor(this._radius * 2);
        if (context.canvas.width !== size || context.canvas.height !== size) {
            context.canvas.width = context.canvas.height = size;
        }
        context.imageSmoothingEnabled =
            this.lightingSystem.options.imageSmoothingEnabled;
        context.fillStyle = 'white';
        context.fillRect(0, 0, size, size);
    }
    prepareLightMap() {
        this.dirty = false;
        this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;
        this.lightContext.save();
        this.lightContext.fillStyle = 'black';
        this.lightContext.fillRect(0, 0, this.lightCanvas.width, this.lightCanvas.height);
        const gradient = this.lightContext.createRadialGradient(this._radius, this._radius, this._radius * Math.min(this._coreRadius, Light.MAX_CORE_RADIUS), this._radius, this._radius, this._radius);
        gradient.addColorStop(0, (0, core_1.colourToString)({
            ...this.colourObject,
            r: this.colourObject.r * this._intensity,
            g: this.colourObject.g * this._intensity,
            b: this.colourObject.b * this._intensity,
        }));
        gradient.addColorStop(1, 'black');
        this.lightContext.fillStyle = gradient;
        this.lightContext.beginPath();
        this.lightContext.arc(this._radius, this._radius, this._radius, 0, Math.PI * 2);
        this.lightContext.fill();
        this.lightContext.restore();
    }
    prepareRegionShadows(lightRectangle, regionCasters) {
        const context = this.regionShadowContext;
        context.save();
        context.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(context);
        context.translate(-this.position.x + this._radius, -this.position.y + this._radius);
        for (const caster of regionCasters) {
            if ((0, core_1.rectanglesIntersect)(lightRectangle, caster)) {
                (0, utilities_1.polygon)(context, ...this.prepareRegionShadow(caster, caster.includeRegionShadow));
                context.fill();
            }
        }
        context.restore();
    }
    prepareSpriteShadows(lightRectangle, spriteCasters) {
        var _a;
        const context = this.objectShadowContext;
        context.save();
        this.lightingSystem.setupSoftShadows(context);
        context.translate(this._radius, this._radius);
        for (const caster of spriteCasters) {
            if ((0, core_1.rectanglesIntersect)(lightRectangle, caster)) {
                const shadowSprite = caster.getShadow();
                if (!shadowSprite) {
                    continue;
                }
                const shadowOrigin = vec_1.vec2.add(caster.position, (0, vec_1.vec2)(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y));
                const shadowLength = (0, utils_1.smoothstep)(caster.minShadowLength, (_a = caster.maxShadowLength) !== null && _a !== void 0 ? _a : this.radius, (0, utils_1.unlerp)(0, this.radius, vec_1.vec2.len(vec_1.vec2.sub(shadowOrigin, this.position))));
                const shadowEdge = vec_1.vec2.mul(vec_1.vec2.nor(vec_1.vec2.sub(shadowOrigin, this.position)), shadowLength);
                const shadowEdgeLength = vec_1.vec2.len(shadowEdge);
                const shadowAngle = vec_1.vec2.rad(shadowEdge) + HALF_PI;
                context.save();
                context.translate(shadowOrigin.x - this.position.x, shadowOrigin.y - this.position.y);
                context.rotate(shadowAngle);
                context.drawImage(shadowSprite, -caster.size.x * caster.offset.x, -shadowEdgeLength * caster.offset.y, caster.size.x, shadowEdgeLength);
                context.restore();
            }
        }
        context.restore();
    }
    prepareCircleShadows(lightRectangle, circleCasters) {
        var _a;
        const context = this.objectShadowContext;
        context.save();
        context.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(context);
        context.translate(this._radius, this._radius);
        for (const caster of circleCasters) {
            if ((0, core_1.rectanglesIntersect)(lightRectangle, caster)) {
                const shadowOrigin = vec_1.vec2.add(caster.position, (0, vec_1.vec2)(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y));
                const shadowDistance = (0, utils_1.smoothstep)(caster.minShadowDistance, (_a = caster.maxShadowDistance) !== null && _a !== void 0 ? _a : this.radius, (0, utils_1.unlerp)(0, this.radius, vec_1.vec2.len(vec_1.vec2.sub(shadowOrigin, this.position))));
                const shadowPosition = vec_1.vec2.mul(vec_1.vec2.nor(vec_1.vec2.sub(shadowOrigin, this.position)), shadowDistance);
                const shadowSize = vec_1.vec2.mul(caster.size, 0.5);
                context.save();
                context.globalAlpha = caster.alpha;
                context.translate(shadowOrigin.x - this.position.x, shadowOrigin.y - this.position.y);
                context.beginPath();
                context.ellipse(shadowPosition.x, shadowPosition.y, shadowSize.x, shadowSize.y, 0, 0, Math.PI * 2);
                context.fill();
                context.restore();
            }
        }
        context.restore();
    }
    prepareRegionShadow(shadowCasterRectangle, includeCasterRegion = false) {
        const lightPosition = vec_1.vec2.cpy(this.position);
        const lightRadius = this._radius;
        const shadowCasterInterval = (0, core_1.rectangleToInterval)(shadowCasterRectangle);
        const shadowCasterVertices = (0, core_1.rectangleVertices)(shadowCasterRectangle);
        const shadowEdges = [];
        for (let i = 0; i < shadowCasterVertices.length; i++) {
            const previous = (0, utils_1.at)(shadowCasterVertices, i - 1);
            const current = shadowCasterVertices[i];
            if (!(0, utilities_1.lineIsFacing)({ start: previous, end: current }, this.position)) {
                const vertex1 = vec_1.vec2.sub(previous, lightPosition);
                const vertex2 = vec_1.vec2.sub(current, lightPosition);
                shadowEdges.push({
                    start: previous,
                    end: vec_1.vec2.add(previous, vec_1.vec2.mul(vec_1.vec2.nor(vertex1), Math.max(Light.SHADOW_BUFFER, lightRadius + Light.SHADOW_BUFFER - vec_1.vec2.len(vertex1)))),
                }, {
                    start: current,
                    end: vec_1.vec2.add(current, vec_1.vec2.mul(vec_1.vec2.nor(vertex2), Math.max(Light.SHADOW_BUFFER, lightRadius + Light.SHADOW_BUFFER - vec_1.vec2.len(vertex2)))),
                });
            }
        }
        const shadowPolygon = [];
        switch ((0, utilities_1.sector2d)(this.position, shadowCasterInterval)) {
            case types_1.Sector2d.TopLeft:
                if (shadowEdges.length !== 4) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowCasterRectangle.position, shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec2)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start);
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec2)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                }
                break;
            case types_1.Sector2d.Top:
                if (shadowEdges.length !== 6) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[1].start, shadowEdges[2].start, shadowEdges[2].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[2].end, shadowEdges[2].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[1].end, shadowEdges[1].start)), false);
                    });
                }
                else {
                    shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[2].end, shadowEdges[2].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[1].end, shadowEdges[1].start)), false);
                    }, shadowEdges[1].start, shadowEdges[5].start, shadowEdges[4].start);
                }
                break;
            case types_1.Sector2d.TopRight:
                if (shadowEdges.length !== 4) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[1].start, (0, vec_1.vec2)(shadowCasterRectangle.position.x + shadowCasterRectangle.size.x, shadowCasterRectangle.position.y), shadowEdges[2].start, shadowEdges[2].end, (0, vec_1.vec2)(shadowEdges[1].end.x, shadowEdges[2].end.y), shadowEdges[1].end);
                }
                else {
                    shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (0, vec_1.vec2)(shadowEdges[1].end.x, shadowEdges[2].end.y), shadowEdges[1].end, shadowEdges[1].start, shadowEdges[3].start);
                }
                break;
            case types_1.Sector2d.Left:
                if (shadowEdges.length !== 6) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                    }, shadowEdges[5].start);
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                    }, shadowEdges[5].start, shadowEdges[4].start, shadowEdges[2].start);
                }
                break;
            case types_1.Sector2d.Inside:
                break;
            case types_1.Sector2d.Right:
                if (shadowEdges.length !== 6) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[3].start, shadowEdges[4].start, shadowEdges[4].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[4].end, shadowEdges[4].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[3].end, shadowEdges[3].start)), false);
                    });
                }
                else {
                    shadowPolygon.push(shadowEdges[4].start, shadowEdges[4].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[4].end, shadowEdges[4].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[3].end, shadowEdges[3].start)), false);
                    }, shadowEdges[3].start, shadowEdges[2].start, shadowEdges[5].start);
                }
                break;
            case types_1.Sector2d.BottomLeft:
                if (shadowEdges.length !== 4) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec2)(shadowEdges[3].end.x, shadowEdges[0].end.y), shadowEdges[3].end, shadowEdges[3].start, (0, vec_1.vec2)(shadowCasterRectangle.position.x, shadowCasterRectangle.position.y + shadowCasterRectangle.size.y));
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec2)(shadowEdges[3].end.x, shadowEdges[0].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                }
                break;
            case types_1.Sector2d.Bottom:
                if (shadowEdges.length !== 6) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                    }, shadowEdges[5].start);
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec2.rad(vec_1.vec2.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                    }, shadowEdges[5].start, shadowEdges[4].start, shadowEdges[2].start);
                }
                break;
            case types_1.Sector2d.BottomRight:
                if (shadowEdges.length !== 4) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec2)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, vec_1.vec2.add(shadowCasterRectangle.position, shadowCasterRectangle.size));
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec2)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                }
                break;
        }
        return shadowPolygon;
    }
}
exports.Light = Light;
Light.DEFAULT_RADIUS = 100;
Light.DEFAULT_COLOUR = 'white';
Light.DEFAULT_CORE_RADIUS = 0.2;
Light.MAX_CORE_RADIUS = 0.99;
Light.DEFAULT_INTENSITY = 1;
Light.DEFAULT_HEIGHT = 48;
Light.SHADOW_BUFFER = 20;


/***/ }),

/***/ "./src/lighting/LightingSystem.ts":
/*!****************************************!*\
  !*** ./src/lighting/LightingSystem.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LightingSystem = void 0;
const parsecolor_1 = __webpack_require__(/*! @basementuniverse/parsecolor */ "./node_modules/@basementuniverse/parsecolor/parsecolor.js");
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const Actor_1 = __webpack_require__(/*! ./Actor */ "./src/lighting/Actor.ts");
const Caster_1 = __webpack_require__(/*! ./Caster */ "./src/lighting/Caster.ts");
const Light_1 = __webpack_require__(/*! ./Light */ "./src/lighting/Light.ts");
const merge_1 = __webpack_require__(/*! ./merge */ "./src/lighting/merge.ts");
const ShaderPass_1 = __webpack_require__(/*! ./ShaderPass */ "./src/lighting/ShaderPass.ts");
const Surface_1 = __webpack_require__(/*! ./Surface */ "./src/lighting/Surface.ts");
const Wall_1 = __webpack_require__(/*! ./Wall */ "./src/lighting/Wall.ts");
class LightingSystem {
    static createContext() {
        return document.createElement('canvas').getContext('2d');
    }
    static compareSurfaces(a, b) {
        return (a.zIndex - b.zIndex || a.position.y + a.size.y - (b.position.y + b.size.y));
    }
    constructor(options, glContext) {
        this.lights = [];
        this.screen = (0, vec_1.vec2)();
        this.groundReceivers = [];
        this.wallReceivers = [];
        this.regionCasters = [];
        this.spriteCasters = [];
        this.circleCasters = [];
        this.actors = [];
        this.lightMapContext = LightingSystem.createContext();
        this.lightMapCanvas = this.lightMapContext.canvas;
        this.specularLightMapContext = LightingSystem.createContext();
        this.specularLightMapCanvas = this.specularLightMapContext.canvas;
        this.sceneNormalMapContext = LightingSystem.createContext();
        this.sceneNormalMapCanvas = this.sceneNormalMapContext.canvas;
        this.sceneSpecularMapContext = LightingSystem.createContext();
        this.sceneSpecularMapCanvas = this.sceneSpecularMapContext.canvas;
        this.shaderPass = null;
        this.specularVisible = false;
        this.options = Object.assign({}, LightingSystem.DEFAULT_OPTIONS, options !== null && options !== void 0 ? options : {});
        this.glContext = glContext !== null && glContext !== void 0 ? glContext : null;
    }
    addGround(options) {
        const ground = new Surface_1.GroundReceiver(this, options);
        this.groundReceivers.push(ground);
        return ground;
    }
    addWall(options) {
        return new Wall_1.Wall(this, options);
    }
    addActor(options) {
        const actor = new Actor_1.Actor(this, options);
        this.actors.push(actor);
        return actor;
    }
    addLight(options) {
        const light = new Light_1.Light(this, options);
        this.lights.push(light);
        return light;
    }
    addWallReceiver(options) {
        const wall = new Surface_1.WallReceiver(this, options);
        this.wallReceivers.push(wall);
        return wall;
    }
    addRegionCaster(options) {
        const caster = new Caster_1.RegionCaster(this, options);
        this.regionCasters.push(caster);
        return caster;
    }
    addSpriteCaster(options) {
        const caster = new Caster_1.SpriteCaster(this, options);
        this.spriteCasters.push(caster);
        return caster;
    }
    addCircleCaster(options) {
        const caster = new Caster_1.CircleCaster(this, options);
        this.circleCasters.push(caster);
        return caster;
    }
    remove(object) {
        if (object instanceof Light_1.Light) {
            this.lights = this.lights.filter(light => light !== object);
            return;
        }
        if (object instanceof Actor_1.Actor) {
            this.actors = this.actors.filter(actor => actor !== object);
            return;
        }
        this.groundReceivers = this.groundReceivers.filter(o => o !== object);
        this.wallReceivers = this.wallReceivers.filter(o => o !== object);
        this.regionCasters = this.regionCasters.filter(o => o !== object);
        this.spriteCasters = this.spriteCasters.filter(o => o !== object);
        this.circleCasters = this.circleCasters.filter(o => o !== object);
    }
    optimise(onMerge) {
        this.wallReceivers = (0, merge_1.merge)(this.wallReceivers, onMerge);
        this.regionCasters = (0, merge_1.merge)(this.regionCasters, onMerge);
    }
    useGlContext(glContext) {
        var _a;
        (_a = this.glContext) !== null && _a !== void 0 ? _a : (this.glContext = glContext);
    }
    getShaderPass() {
        var _a, _b;
        (_a = this.shaderPass) !== null && _a !== void 0 ? _a : (this.shaderPass = new ShaderPass_1.ShaderPass((_b = this.glContext) !== null && _b !== void 0 ? _b : new core_1.GlContext()));
        return this.shaderPass.available ? this.shaderPass : null;
    }
    resetContext(context) {
        const { canvas } = context;
        if (canvas.width !== this.screen.x || canvas.height !== this.screen.y) {
            canvas.width = this.screen.x;
            canvas.height = this.screen.y;
        }
        else {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        context.imageSmoothingEnabled = this.options.imageSmoothingEnabled;
    }
    render(context, camera, drawScene) {
        context.save();
        camera.setTransforms(context);
        if (drawScene) {
            drawScene(context);
        }
        else {
            this.drawSurfaces(context);
        }
        context.restore();
        this.prepare(camera, (0, vec_1.vec2)(context.canvas.width, context.canvas.height));
        this.draw(context);
    }
    drawSurfaces(context) {
        this.drawGround(context);
        this.drawWalls(context);
    }
    drawGround(context) {
        this.updateSurfaces();
        this.groundReceivers.forEach(ground => ground.draw(context));
    }
    drawWalls(context) {
        this.updateSurfaces();
        this.wallReceivers.forEach(wall => wall.draw(context));
    }
    updateSurfaces() {
        this.actors.forEach(actor => actor.sync());
        this.groundReceivers.sort(LightingSystem.compareSurfaces);
        this.wallReceivers.sort(LightingSystem.compareSurfaces);
    }
    prepare(camera, screen) {
        this.screen = screen;
        this.updateSurfaces();
        if (!this.options.lightingEnabled) {
            return;
        }
        const shaderPass = this.getShaderPass();
        if (!shaderPass) {
            return;
        }
        const cameraRectangle = (0, core_1.intervalToRectangle)(camera.bounds);
        const surfaces = [...this.groundReceivers, ...this.wallReceivers].filter(surface => (0, core_1.rectanglesIntersect)(surface, cameraRectangle));
        const { surfaceMapsEnabled } = this.options;
        const hasNormalMaps = surfaceMapsEnabled &&
            surfaces.some(surface => surface.normalMap || surface.customDraw.normalMap);
        const hasSpecularMaps = surfaceMapsEnabled &&
            surfaces.some(surface => surface.specularMap || surface.customDraw.specularMap);
        if (hasNormalMaps) {
            this.drawSceneNormalMap(camera, surfaces);
        }
        if (hasSpecularMaps) {
            this.drawSceneSpecularMap(camera, surfaces);
        }
        const visibleLights = this.lights.filter(light => (0, core_1.rectanglesIntersect)(light.bounds, cameraRectangle));
        visibleLights.forEach(light => light.prepare(this.regionCasters, this.spriteCasters, this.circleCasters));
        shaderPass.render({
            camera,
            screen,
            lights: visibleLights,
            surfaces: this.calculateAmbientLights(surfaces),
            normalMap: hasNormalMaps ? this.sceneNormalMapCanvas : null,
            specularMap: hasSpecularMaps ? this.sceneSpecularMapCanvas : null,
            imageSmoothingEnabled: this.options.imageSmoothingEnabled,
            wallLightingYOffset: this.options.wallLightingYOffset,
            wallLightingCutoffDistance: this.options.wallLightingCutoffDistance,
            wallShadowLengthFactor: this.options.wallShadowLengthFactor,
            highlightStrength: this.options.shaderHighlightStrength,
            shadowStrength: this.options.shaderShadowStrength,
            specularStrength: this.options.shaderSpecularStrength,
            shininess: this.options.shaderShininess,
            viewTilt: this.options.shaderViewTilt,
            banding: this.options.shaderBanding,
        });
        this.resetContext(this.lightMapContext);
        this.lightMapContext.drawImage(shaderPass.canvas, 0, 0);
        this.specularVisible = hasSpecularMaps;
        if (hasSpecularMaps) {
            shaderPass.showSpecular(screen);
            this.resetContext(this.specularLightMapContext);
            this.specularLightMapContext.save();
            this.specularLightMapContext.drawImage(shaderPass.canvas, 0, 0);
            this.specularLightMapContext.globalCompositeOperation = 'destination-in';
            this.specularLightMapContext.drawImage(this.lightMapCanvas, 0, 0);
            this.specularLightMapContext.restore();
        }
    }
    getSurfaceMapCanvas() {
        var _a, _b, _c;
        (_a = this.shaderPass) === null || _a === void 0 ? void 0 : _a.showSurfaces(this.screen);
        return (_c = (_b = this.shaderPass) === null || _b === void 0 ? void 0 : _b.canvas) !== null && _c !== void 0 ? _c : this.lightMapCanvas;
    }
    calculateAmbientLights(surfaces) {
        const direction = vec_1.vec2.rot((0, vec_1.vec2)(1, 0), this.options.ambientLightDirection);
        const ambientLight = (0, parsecolor_1.parseColor)(this.options.ambientLightColour);
        const shadow = (0, parsecolor_1.parseColor)(this.options.ambientLightShadowColour);
        const highlight = (0, parsecolor_1.parseColor)(this.options.ambientLightHighlightColour);
        return surfaces.map(surface => ({
            surface,
            ambientLight: surface instanceof Surface_1.WallReceiver
                ? this.calculateAmbientLight(surface.surfaceNormal, direction, ambientLight, shadow, highlight)
                : ambientLight,
        }));
    }
    calculateAmbientLight(surfaceNormal, ambientLightDirection, ambientLight, ambientLightShadow, ambientLightHighlight) {
        if (vec_1.vec2.eq(surfaceNormal, (0, vec_1.vec2)())) {
            return ambientLight;
        }
        const dot = vec_1.vec2.dot(vec_1.vec2.nor(surfaceNormal), ambientLightDirection);
        if ((0, utils_1.floatEquals)(dot, 0)) {
            return ambientLight;
        }
        if (dot < 0) {
            return (0, core_1.lerpColour)(ambientLight, ambientLightHighlight, -dot);
        }
        return (0, core_1.lerpColour)(ambientLight, ambientLightShadow, dot);
    }
    setupSoftShadows(context) {
        if (this.options.softShadowsEnabled &&
            this.options.softShadowsAmount !== undefined &&
            this.options.softShadowsAmount > 0) {
            context.shadowColor = 'black';
            context.shadowBlur = this.options.softShadowsAmount;
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
        }
    }
    draw(context) {
        if (!this.options.lightingEnabled) {
            return;
        }
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.globalCompositeOperation = 'multiply';
        context.drawImage(this.lightMapCanvas, 0, 0);
        if (this.specularVisible) {
            context.globalCompositeOperation = 'lighter';
            context.drawImage(this.specularLightMapCanvas, 0, 0);
        }
        context.restore();
    }
    drawSceneNormalMap(camera, surfaces) {
        this.resetContext(this.sceneNormalMapContext);
        this.sceneNormalMapContext.save();
        camera.setTransforms(this.sceneNormalMapContext);
        surfaces.forEach(surface => {
            surface.drawNormalMap(this.sceneNormalMapContext);
        });
        this.sceneNormalMapContext.restore();
    }
    drawSceneSpecularMap(camera, surfaces) {
        this.resetContext(this.sceneSpecularMapContext);
        this.sceneSpecularMapContext.save();
        camera.setTransforms(this.sceneSpecularMapContext);
        surfaces.forEach(surface => {
            surface.drawSpecularMap(this.sceneSpecularMapContext);
        });
        this.sceneSpecularMapContext.restore();
    }
}
exports.LightingSystem = LightingSystem;
LightingSystem.DEFAULT_OPTIONS = {
    lightingEnabled: true,
    imageSmoothingEnabled: true,
    softShadowsEnabled: false,
    softShadowsAmount: 2,
    surfaceMapsEnabled: true,
    shaderHighlightStrength: 0.5,
    shaderShadowStrength: 0.5,
    shaderSpecularStrength: 1,
    shaderShininess: 16,
    shaderViewTilt: 0.5,
    shaderBanding: 0.1,
    ambientLightColour: 'black',
    ambientLightShadowColour: 'black',
    ambientLightHighlightColour: 'black',
    ambientLightDirection: 0,
    wallLightingYOffset: -30,
    wallLightingCutoffDistance: 20,
    wallShadowLengthFactor: 0.75,
};


/***/ }),

/***/ "./src/lighting/SceneObject.ts":
/*!*************************************!*\
  !*** ./src/lighting/SceneObject.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneObject = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
class SceneObject {
    constructor(lighting, options) {
        this.mergeable = true;
        this.removeCallbacks = [];
        this.lighting = lighting;
        this.position = vec_1.vec2.cpy(options.position);
        this.size = vec_1.vec2.cpy(options.size);
    }
    moveTo(position) {
        this.position = vec_1.vec2.cpy(position);
    }
    resize(size) {
        this.size = vec_1.vec2.cpy(size);
    }
    set(options) {
        for (const [key, value] of Object.entries(options)) {
            if (value !== undefined) {
                this[key] = value;
            }
        }
        this.position = vec_1.vec2.cpy(this.position);
        this.size = vec_1.vec2.cpy(this.size);
    }
    onRemove(callback) {
        this.removeCallbacks.push(callback);
    }
    remove() {
        this.lighting.remove(this);
        this.removeCallbacks.forEach(callback => callback());
    }
}
exports.SceneObject = SceneObject;


/***/ }),

/***/ "./src/lighting/ShaderPass.ts":
/*!************************************!*\
  !*** ./src/lighting/ShaderPass.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShaderPass = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const Surface_1 = __webpack_require__(/*! ./Surface */ "./src/lighting/Surface.ts");
const diffuseShader = __webpack_require__(/*! ./shaders/diffuse.frag.glsl */ "./src/lighting/shaders/diffuse.frag.glsl");
const maskShader = __webpack_require__(/*! ./shaders/mask.frag.glsl */ "./src/lighting/shaders/mask.frag.glsl");
const specularShader = __webpack_require__(/*! ./shaders/specular.frag.glsl */ "./src/lighting/shaders/specular.frag.glsl");
const surfaceShader = __webpack_require__(/*! ./shaders/surface.glsl */ "./src/lighting/shaders/surface.glsl");
var TextureUnit;
(function (TextureUnit) {
    TextureUnit[TextureUnit["NormalMap"] = 0] = "NormalMap";
    TextureUnit[TextureUnit["SpecularMap"] = 1] = "SpecularMap";
    TextureUnit[TextureUnit["SurfaceMap"] = 2] = "SurfaceMap";
    TextureUnit[TextureUnit["LightMap"] = 3] = "LightMap";
    TextureUnit[TextureUnit["RegionShadowMap"] = 4] = "RegionShadowMap";
    TextureUnit[TextureUnit["ObjectShadowMap"] = 5] = "ObjectShadowMap";
})(TextureUnit || (TextureUnit = {}));
var SurfaceType;
(function (SurfaceType) {
    SurfaceType[SurfaceType["None"] = 0] = "None";
    SurfaceType[SurfaceType["Ground"] = 0.25] = "Ground";
    SurfaceType[SurfaceType["ProjectedWall"] = 0.5] = "ProjectedWall";
    SurfaceType[SurfaceType["FlatWall"] = 0.75] = "FlatWall";
    SurfaceType[SurfaceType["Unlit"] = 1] = "Unlit";
})(SurfaceType || (SurfaceType = {}));
class ShaderPass {
    constructor(context) {
        this.initialised = false;
        this.context = context;
        this.context.onInitialise(gl => this.initialise(gl));
    }
    get canvas() {
        return this.context.canvas;
    }
    get available() {
        return this.initialised && this.context.available;
    }
    initialise(gl) {
        this.initialised = false;
        try {
            const prepend = (source) => `${surfaceShader}\n${source}`;
            this.maskProgram = this.context.createProgram(maskShader);
            this.diffuseProgram = this.context.createProgram(prepend(diffuseShader));
            this.specularProgram = this.context.createProgram(prepend(specularShader));
        }
        catch (e) {
            console.error('Lighting has been disabled', e);
            return;
        }
        this.textures = {
            [TextureUnit.NormalMap]: gl.createTexture(),
            [TextureUnit.SpecularMap]: gl.createTexture(),
            [TextureUnit.LightMap]: gl.createTexture(),
            [TextureUnit.RegionShadowMap]: gl.createTexture(),
            [TextureUnit.ObjectShadowMap]: gl.createTexture(),
        };
        this.surfaceTarget = this.context.createRenderTarget();
        this.specularTarget = this.context.createRenderTarget();
        this.initialised = true;
    }
    upload(unit, image, filter) {
        this.context.upload(unit, this.textures[unit], image, filter);
    }
    resize(screen) {
        this.context.resize(screen);
        this.context.resizeTarget(this.surfaceTarget, screen);
        this.context.resizeTarget(this.specularTarget, screen);
    }
    surfaceValue(surface, scene) {
        if (surface instanceof Surface_1.GroundReceiver) {
            return [0, 0, 0, SurfaceType.Ground];
        }
        const wall = surface;
        let type = SurfaceType.Unlit;
        if (wall.receiveLight) {
            type = wall.projectShadows
                ? SurfaceType.ProjectedWall
                : SurfaceType.FlatWall;
        }
        const foot = Math.round((wall.position.y + wall.size.y - scene.camera.bounds.top) *
            ShaderPass.FOOT_SCALE);
        const clampedFoot = Math.min(Math.max(foot, 0), ShaderPass.FOOT_MAX);
        const bias = Math.min(wall.shadowBias, ShaderPass.MAX_SHADOW_BIAS);
        return [
            Math.floor(clampedFoot / 256) / 255,
            (clampedFoot % 256) / 255,
            Math.round(bias) / 255,
            type,
        ];
    }
    drawSurfaces(gl, scene, getValue) {
        const { uniforms } = this.maskProgram;
        const filter = scene.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;
        gl.uniform1i(uniforms.u_mask, core_1.GlContext.IMAGE_UNIT);
        for (const item of scene.surfaces) {
            const { surface } = item;
            const mask = surface.getMask();
            if (mask === null || surface.visibleHeight <= 0) {
                continue;
            }
            let maskRectangle = [0, 0, 1, 1];
            if (mask !== 'solid') {
                this.context.bindImage(mask, filter);
                if (surface.repeat && !surface.customDraw.mask) {
                    maskRectangle = [
                        surface.position.x / mask.width,
                        surface.position.y / mask.height,
                        surface.size.x / mask.width,
                        surface.size.y / mask.height,
                    ];
                }
            }
            const visibleSize = (0, vec_1.vec2)(surface.size.x, surface.visibleHeight);
            maskRectangle[3] *= visibleSize.y / surface.size.y;
            const topLeft = scene.camera.worldToScreen(surface.position);
            const bottomRight = scene.camera.worldToScreen(vec_1.vec2.add(surface.position, visibleSize));
            gl.uniform1f(uniforms.u_useMask, mask === 'solid' ? 0 : 1);
            gl.uniform4fv(uniforms.u_value, getValue(item));
            this.context.drawQuad(this.maskProgram, [
                topLeft.x,
                topLeft.y,
                bottomRight.x - topLeft.x,
                bottomRight.y - topLeft.y,
            ], undefined, maskRectangle);
        }
    }
    setSceneUniforms(gl, { program, uniforms }, scene) {
        gl.useProgram(program);
        gl.uniform2f(uniforms.u_screen, scene.screen.x, scene.screen.y);
        gl.uniform1f(uniforms.u_useNormalMap, scene.normalMap ? 1 : 0);
        gl.uniform1f(uniforms.u_wallLightingYOffset, scene.wallLightingYOffset);
        gl.uniform1f(uniforms.u_wallLightingCutoffDistance, scene.wallLightingCutoffDistance);
        gl.uniform1f(uniforms.u_wallShadowLengthFactor, scene.wallShadowLengthFactor);
        gl.uniform1f(uniforms.u_banding, scene.banding);
        gl.uniform1i(uniforms.u_sceneNormalMap, TextureUnit.NormalMap);
        gl.uniform1i(uniforms.u_surfaceMap, TextureUnit.SurfaceMap);
        gl.uniform1i(uniforms.u_lightMap, TextureUnit.LightMap);
        gl.uniform1i(uniforms.u_regionShadowMap, TextureUnit.RegionShadowMap);
        gl.uniform1i(uniforms.u_objectShadowMap, TextureUnit.ObjectShadowMap);
    }
    drawLight(gl, program, light, scene) {
        const { position, size } = light.bounds;
        const topLeft = scene.camera.worldToScreen(position);
        const bottomRight = scene.camera.worldToScreen(vec_1.vec2.add(position, size));
        gl.useProgram(program.program);
        gl.uniform1f(program.uniforms.u_lightRadius, light.radius);
        gl.uniform1f(program.uniforms.u_lightHeight, light.height);
        gl.uniform1f(program.uniforms.u_lightMapSize, light.regionShadowCanvas.width);
        gl.uniform1f(program.uniforms.u_footOrigin, scene.camera.bounds.top - light.position.y);
        this.context.drawQuad(program, [
            topLeft.x,
            topLeft.y,
            bottomRight.x - topLeft.x,
            bottomRight.y - topLeft.y,
        ], [
            position.x - light.position.x,
            position.y - light.position.y,
            size.x,
            size.y,
        ]);
    }
    render(scene) {
        const { gl } = this.context;
        if (!gl) {
            return;
        }
        this.resize(scene.screen);
        this.context.invalidateCanvases();
        if (scene.normalMap) {
            this.upload(TextureUnit.NormalMap, scene.normalMap, gl.NEAREST);
        }
        gl.disable(gl.BLEND);
        gl.useProgram(this.maskProgram.program);
        gl.uniform2f(this.maskProgram.uniforms.u_screen, scene.screen.x, scene.screen.y);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.surfaceTarget.framebuffer);
        gl.clearColor(0, 0, 0, SurfaceType.None);
        gl.clear(gl.COLOR_BUFFER_BIT);
        this.drawSurfaces(gl, scene, ({ surface }) => this.surfaceValue(surface, scene));
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        this.drawSurfaces(gl, scene, ({ ambientLight: { r, g, b, a } }) => [
            r / 255,
            g / 255,
            b / 255,
            a,
        ]);
        this.context.bindTexture(TextureUnit.SurfaceMap, this.surfaceTarget.texture, gl.NEAREST);
        this.setSceneUniforms(gl, this.diffuseProgram, scene);
        gl.uniform1f(this.diffuseProgram.uniforms.u_highlightStrength, scene.highlightStrength);
        gl.uniform1f(this.diffuseProgram.uniforms.u_shadowStrength, scene.shadowStrength);
        if (scene.specularMap) {
            this.upload(TextureUnit.SpecularMap, scene.specularMap, gl.NEAREST);
            const { uniforms } = this.specularProgram;
            this.setSceneUniforms(gl, this.specularProgram, scene);
            gl.uniform1i(uniforms.u_sceneSpecularMap, TextureUnit.SpecularMap);
            gl.uniform1f(uniforms.u_specularStrength, scene.specularStrength);
            gl.uniform1f(uniforms.u_shininess, scene.shininess);
            gl.uniform1f(uniforms.u_viewTilt, scene.viewTilt);
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularTarget.framebuffer);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        const filter = scene.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;
        gl.enable(gl.BLEND);
        for (const light of scene.lights) {
            this.upload(TextureUnit.LightMap, light.lightCanvas, filter);
            this.upload(TextureUnit.RegionShadowMap, light.regionShadowCanvas, filter);
            this.upload(TextureUnit.ObjectShadowMap, light.objectShadowCanvas, filter);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
            this.drawLight(gl, this.diffuseProgram, light, scene);
            if (scene.specularMap) {
                gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularTarget.framebuffer);
                gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE);
                this.drawLight(gl, this.specularProgram, light, scene);
            }
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    showSpecular(screen) {
        if (this.context.gl) {
            this.context.drawTexture(this.specularTarget.texture, screen);
        }
    }
    showSurfaces(screen) {
        if (this.context.gl) {
            this.context.drawTexture(this.surfaceTarget.texture, screen);
        }
    }
}
exports.ShaderPass = ShaderPass;
ShaderPass.FOOT_SCALE = 4;
ShaderPass.FOOT_MAX = 65535;
ShaderPass.MAX_SHADOW_BIAS = 255;


/***/ }),

/***/ "./src/lighting/Surface.ts":
/*!*********************************!*\
  !*** ./src/lighting/Surface.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WallReceiver = exports.GroundReceiver = exports.Surface = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const SceneObject_1 = __webpack_require__(/*! ./SceneObject */ "./src/lighting/SceneObject.ts");
class Surface extends SceneObject_1.SceneObject {
    constructor() {
        super(...arguments);
        this.colour = '';
        this.image = null;
        this.normalMap = null;
        this.specularMap = null;
        this.zIndex = 0;
        this.customDraw = {};
        this.clipBottom = null;
        this.overlays = [];
        this.customMaskContext = null;
    }
    fillBackground(context, colour) {
        context.fillStyle = colour;
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    drawImage(context, image) {
        (0, core_1.drawImageInRectangle)(context, image, this, this.repeat);
    }
    addOverlay(draw) {
        this.overlays.push(draw);
        return () => {
            this.overlays = this.overlays.filter(overlay => overlay !== draw);
        };
    }
    draw(context) {
        this.drawContent(context);
        this.overlays.forEach(overlay => overlay(context));
    }
    get visibleHeight() {
        if (this.clipBottom === null) {
            return this.size.y;
        }
        const height = this.clipBottom - this.position.y;
        return Math.min(Math.max(height, 0), this.size.y);
    }
    drawVisible(context, draw) {
        if (this.clipBottom === null) {
            draw();
            return;
        }
        context.save();
        context.beginPath();
        context.rect(this.position.x, this.position.y, this.size.x, this.visibleHeight);
        context.clip();
        draw();
        context.restore();
    }
    drawContent(context) {
        this.drawVisible(context, () => this.drawWholeSurface(context));
    }
    drawHidden(context) {
        if (this.clipBottom === null) {
            return;
        }
        const { x, y } = this.position;
        const height = this.visibleHeight;
        context.save();
        context.beginPath();
        context.rect(x, y + height, this.size.x, this.size.y - height);
        context.clip();
        this.drawWholeSurface(context);
        context.restore();
    }
    drawWholeSurface(context) {
        if (this.customDraw.image) {
            this.customDraw.image(context);
            return;
        }
        context.save();
        if (this.colour) {
            this.fillBackground(context, this.colour);
        }
        if (this.image) {
            this.drawImage(context, this.image);
        }
        context.restore();
    }
    drawColourMap(context, image, defaultColour) {
        context.save();
        if (image) {
            this.drawImage(context, image);
        }
        else {
            this.fillBackground(context, defaultColour);
        }
        context.restore();
    }
    drawNormalMap(context) {
        this.drawVisible(context, () => {
            if (this.customDraw.normalMap) {
                this.customDraw.normalMap(context);
                return;
            }
            this.drawColourMap(context, this.normalMap, Surface.NORMAL_MAP_DEFAULT_COLOUR);
        });
    }
    drawSpecularMap(context) {
        this.drawVisible(context, () => {
            if (this.customDraw.specularMap) {
                this.customDraw.specularMap(context);
                return;
            }
            this.drawColourMap(context, this.specularMap, Surface.SPECULAR_MAP_DEFAULT_COLOUR);
        });
    }
    renderCustomMask(draw) {
        var _a;
        (_a = this.customMaskContext) !== null && _a !== void 0 ? _a : (this.customMaskContext = document
            .createElement('canvas')
            .getContext('2d'));
        const context = this.customMaskContext;
        context.canvas.width = Math.ceil(this.size.x);
        context.canvas.height = Math.ceil(this.size.y);
        context.translate(-this.position.x, -this.position.y);
        draw(context);
        return context.canvas;
    }
}
exports.Surface = Surface;
Surface.NORMAL_MAP_DEFAULT_COLOUR = '#7f7fff';
Surface.SPECULAR_MAP_DEFAULT_COLOUR = 'black';
class GroundReceiver extends Surface {
    constructor(lighting, options) {
        super(lighting, options);
        this.repeat = true;
        this.set(options);
    }
    getMask() {
        if (this.customDraw.mask) {
            return this.renderCustomMask(this.customDraw.mask);
        }
        return 'solid';
    }
}
exports.GroundReceiver = GroundReceiver;
class WallReceiver extends Surface {
    constructor(lighting, options) {
        super(lighting, options);
        this.mask = null;
        this.repeat = false;
        this.receiveLight = true;
        this.surfaceNormal = (0, vec_1.vec2)();
        this.shadowBias = 1;
        this.projectShadows = true;
        this.set(options);
    }
    getMask() {
        var _a;
        if (this.customDraw.mask) {
            return this.renderCustomMask(this.customDraw.mask);
        }
        if (this.colour) {
            return 'solid';
        }
        const mask = (_a = this.mask) !== null && _a !== void 0 ? _a : this.image;
        return mask && mask.width > 0 && mask.height > 0 ? mask : null;
    }
    canMerge(other) {
        const hasImages = this.image || this.mask || this.normalMap || this.specularMap;
        return (this.mergeable &&
            other.mergeable &&
            this.overlays.length === 0 &&
            other.overlays.length === 0 &&
            (this.repeat || !hasImages) &&
            this.zIndex === other.zIndex &&
            this.colour === other.colour &&
            this.image === other.image &&
            this.mask === other.mask &&
            this.normalMap === other.normalMap &&
            this.specularMap === other.specularMap &&
            this.repeat === other.repeat &&
            this.receiveLight === other.receiveLight &&
            vec_1.vec2.eq(this.surfaceNormal, other.surfaceNormal) &&
            this.shadowBias === other.shadowBias &&
            this.projectShadows === other.projectShadows);
    }
    merge(other) {
        return new WallReceiver(this.lighting, {
            ...this,
            ...(0, core_1.boundingRectangle)(this, other),
        });
    }
}
exports.WallReceiver = WallReceiver;


/***/ }),

/***/ "./src/lighting/Wall.ts":
/*!******************************!*\
  !*** ./src/lighting/Wall.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wall = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
class Wall {
    constructor(lighting, options) {
        var _a;
        const { footprint, height, includeRegionShadow, top, ...front } = options;
        this.height = height;
        this.caster = lighting.addRegionCaster({
            ...footprint,
            mergeable: options.mergeable,
            includeRegionShadow,
        });
        this.front = lighting.addWallReceiver({
            ...front,
            ...this.frontRectangle(footprint),
        });
        this.top = lighting.addWallReceiver({
            zIndex: options.zIndex,
            mergeable: options.mergeable,
            colour: (_a = top === null || top === void 0 ? void 0 : top.colour) !== null && _a !== void 0 ? _a : Wall.DEFAULT_TOP_COLOUR,
            image: top === null || top === void 0 ? void 0 : top.image,
            receiveLight: false,
            ...this.topRectangle(footprint),
        });
    }
    frontRectangle(footprint) {
        const bottom = footprint.position.y + footprint.size.y;
        return {
            position: (0, vec_1.vec2)(footprint.position.x, bottom - this.height),
            size: (0, vec_1.vec2)(footprint.size.x, this.height),
        };
    }
    topRectangle(footprint) {
        return {
            position: (0, vec_1.vec2)(footprint.position.x, footprint.position.y - this.height),
            size: footprint.size,
        };
    }
    moveTo(position) {
        const footprint = { position, size: this.caster.size };
        this.caster.moveTo(position);
        this.front.moveTo(this.frontRectangle(footprint).position);
        this.top.moveTo(this.topRectangle(footprint).position);
    }
    remove() {
        this.front.remove();
        this.top.remove();
        this.caster.remove();
    }
}
exports.Wall = Wall;
Wall.DEFAULT_TOP_COLOUR = 'black';


/***/ }),

/***/ "./src/lighting/index.ts":
/*!*******************************!*\
  !*** ./src/lighting/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wall = exports.WallReceiver = exports.Surface = exports.GroundReceiver = exports.SceneObject = exports.LightingSystem = exports.Light = exports.SpriteCaster = exports.RegionCaster = exports.CircleCaster = exports.Actor = exports.GlContext = void 0;
var core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
Object.defineProperty(exports, "GlContext", ({ enumerable: true, get: function () { return core_1.GlContext; } }));
var Actor_1 = __webpack_require__(/*! ./Actor */ "./src/lighting/Actor.ts");
Object.defineProperty(exports, "Actor", ({ enumerable: true, get: function () { return Actor_1.Actor; } }));
var Caster_1 = __webpack_require__(/*! ./Caster */ "./src/lighting/Caster.ts");
Object.defineProperty(exports, "CircleCaster", ({ enumerable: true, get: function () { return Caster_1.CircleCaster; } }));
Object.defineProperty(exports, "RegionCaster", ({ enumerable: true, get: function () { return Caster_1.RegionCaster; } }));
Object.defineProperty(exports, "SpriteCaster", ({ enumerable: true, get: function () { return Caster_1.SpriteCaster; } }));
var Light_1 = __webpack_require__(/*! ./Light */ "./src/lighting/Light.ts");
Object.defineProperty(exports, "Light", ({ enumerable: true, get: function () { return Light_1.Light; } }));
var LightingSystem_1 = __webpack_require__(/*! ./LightingSystem */ "./src/lighting/LightingSystem.ts");
Object.defineProperty(exports, "LightingSystem", ({ enumerable: true, get: function () { return LightingSystem_1.LightingSystem; } }));
var SceneObject_1 = __webpack_require__(/*! ./SceneObject */ "./src/lighting/SceneObject.ts");
Object.defineProperty(exports, "SceneObject", ({ enumerable: true, get: function () { return SceneObject_1.SceneObject; } }));
var Surface_1 = __webpack_require__(/*! ./Surface */ "./src/lighting/Surface.ts");
Object.defineProperty(exports, "GroundReceiver", ({ enumerable: true, get: function () { return Surface_1.GroundReceiver; } }));
Object.defineProperty(exports, "Surface", ({ enumerable: true, get: function () { return Surface_1.Surface; } }));
Object.defineProperty(exports, "WallReceiver", ({ enumerable: true, get: function () { return Surface_1.WallReceiver; } }));
var Wall_1 = __webpack_require__(/*! ./Wall */ "./src/lighting/Wall.ts");
Object.defineProperty(exports, "Wall", ({ enumerable: true, get: function () { return Wall_1.Wall; } }));


/***/ }),

/***/ "./src/lighting/merge.ts":
/*!*******************************!*\
  !*** ./src/lighting/merge.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.merge = void 0;
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
const MERGE_MAX_ITERATIONS = 100;
const MERGE_ORDER = ['duplicate', types_1.Side.Bottom, types_1.Side.Right, types_1.Side.Top, types_1.Side.Left];
function findMerges(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const a = (0, core_1.rectangleToInterval)(items[i]);
        for (let j = i + 1; j < items.length; j++) {
            const b = (0, core_1.rectangleToInterval)(items[j]);
            if (!items[i].canMerge(items[j])) {
                continue;
            }
            if (a.top === b.top &&
                a.bottom === b.bottom &&
                a.left === b.left &&
                a.right === b.right) {
                result.push([items[i], items[j], 'duplicate']);
                continue;
            }
            if (a.bottom === b.top && a.left === b.left && a.right === b.right) {
                result.push([items[i], items[j], types_1.Side.Bottom]);
            }
            if (a.top === b.bottom && a.left === b.left && a.right === b.right) {
                result.push([items[i], items[j], types_1.Side.Top]);
            }
            if (a.right === b.left && a.top === b.top && a.bottom === b.bottom) {
                result.push([items[i], items[j], types_1.Side.Right]);
            }
            if (a.left === b.right && a.top === b.top && a.bottom === b.bottom) {
                result.push([items[i], items[j], types_1.Side.Left]);
            }
        }
    }
    return result;
}
function merge(items, onMerge) {
    let result = [...items].sort((a, b) => {
        if (a.position.y === b.position.y) {
            return a.position.x - b.position.x;
        }
        return a.position.y - b.position.y;
    });
    let i = 0;
    let merges;
    while ((merges = findMerges(result)).length > 0 &&
        i++ < MERGE_MAX_ITERATIONS) {
        merges.sort((a, b) => MERGE_ORDER.indexOf(a[2]) - MERGE_ORDER.indexOf(b[2]));
        for (const [a, b, side] of merges) {
            if (!result.includes(a) || !result.includes(b)) {
                continue;
            }
            if (side === 'duplicate') {
                result = result.filter(item => item !== b);
                onMerge === null || onMerge === void 0 ? void 0 : onMerge(a, a, b);
                continue;
            }
            const merged = a.merge(b);
            result = result.filter(item => item !== a && item !== b);
            result.push(merged);
            onMerge === null || onMerge === void 0 ? void 0 : onMerge(merged, a, b);
        }
    }
    return result;
}
exports.merge = merge;


/***/ }),

/***/ "./src/lighting/types.ts":
/*!*******************************!*\
  !*** ./src/lighting/types.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Side = exports.Sector2d = exports.Sector1d = void 0;
var Sector1d;
(function (Sector1d) {
    Sector1d["Before"] = "before";
    Sector1d["Inside"] = "inside";
    Sector1d["After"] = "after";
})(Sector1d = exports.Sector1d || (exports.Sector1d = {}));
var Sector2d;
(function (Sector2d) {
    Sector2d["TopLeft"] = "top-left";
    Sector2d["Top"] = "top";
    Sector2d["TopRight"] = "top-right";
    Sector2d["Left"] = "left";
    Sector2d["Inside"] = "inside";
    Sector2d["Right"] = "right";
    Sector2d["BottomLeft"] = "bottom-left";
    Sector2d["Bottom"] = "bottom";
    Sector2d["BottomRight"] = "bottom-right";
})(Sector2d = exports.Sector2d || (exports.Sector2d = {}));
var Side;
(function (Side) {
    Side["Top"] = "top";
    Side["Right"] = "right";
    Side["Bottom"] = "bottom";
    Side["Left"] = "left";
})(Side = exports.Side || (exports.Side = {}));


/***/ }),

/***/ "./src/lighting/utilities.ts":
/*!***********************************!*\
  !*** ./src/lighting/utilities.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.silhouette = exports.sector2d = exports.sector1d = exports.polygon = exports.lineIsFacing = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
function lineIsFacing(line, position) {
    const edge = vec_1.vec2.nor(vec_1.vec2.sub(line.end, line.start));
    const edgeNormal = (0, vec_1.vec2)(edge.y, -edge.x);
    const lightNormal = vec_1.vec2.nor(vec_1.vec2.sub(vec_1.vec2.mul(vec_1.vec2.add(line.start, line.end), 0.5), position));
    return vec_1.vec2.dot(lightNormal, edgeNormal) <= 0;
}
exports.lineIsFacing = lineIsFacing;
function polygon(context, ...vertices) {
    if (vertices.length === 0) {
        return;
    }
    context.beginPath();
    if (typeof vertices[0] === 'function') {
        vertices[0](context);
    }
    else {
        context.moveTo(vertices[0].x, vertices[0].y);
    }
    for (let i = 1; i < vertices.length; i++) {
        if (typeof vertices[i] === 'function') {
            vertices[i](context);
        }
        else {
            context.lineTo(vertices[i].x, vertices[i].y);
        }
    }
    context.closePath();
}
exports.polygon = polygon;
function sector1d(n, interval) {
    if (n <= interval.start) {
        return types_1.Sector1d.Before;
    }
    if (n >= interval.end) {
        return types_1.Sector1d.After;
    }
    return types_1.Sector1d.Inside;
}
exports.sector1d = sector1d;
function sector2d(point, interval) {
    const x = sector1d(point.x, { start: interval.left, end: interval.right });
    const y = sector1d(point.y, { start: interval.top, end: interval.bottom });
    return {
        [types_1.Sector1d.Before]: {
            [types_1.Sector1d.Before]: types_1.Sector2d.TopLeft,
            [types_1.Sector1d.Inside]: types_1.Sector2d.Left,
            [types_1.Sector1d.After]: types_1.Sector2d.BottomLeft,
        },
        [types_1.Sector1d.Inside]: {
            [types_1.Sector1d.Before]: types_1.Sector2d.Top,
            [types_1.Sector1d.Inside]: types_1.Sector2d.Inside,
            [types_1.Sector1d.After]: types_1.Sector2d.Bottom,
        },
        [types_1.Sector1d.After]: {
            [types_1.Sector1d.Before]: types_1.Sector2d.TopRight,
            [types_1.Sector1d.Inside]: types_1.Sector2d.Right,
            [types_1.Sector1d.After]: types_1.Sector2d.BottomRight,
        },
    }[x][y];
}
exports.sector2d = sector2d;
const silhouettes = new WeakMap();
function silhouette(image) {
    if (image.width === 0 || image.height === 0) {
        return null;
    }
    if (image instanceof HTMLImageElement && !image.complete) {
        return null;
    }
    let result = silhouettes.get(image);
    if (!result) {
        result = document.createElement('canvas');
        result.width = image.width;
        result.height = image.height;
        const context = result.getContext('2d');
        context.drawImage(image, 0, 0);
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = 'black';
        context.fillRect(0, 0, result.width, result.height);
        silhouettes.set(image, result);
    }
    return result;
}
exports.silhouette = silhouette;


/***/ }),

/***/ "./src/reflections/ReflectionReceiver.ts":
/*!***********************************************!*\
  !*** ./src/reflections/ReflectionReceiver.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WallReflectionReceiver = exports.FloorReflectionReceiver = exports.ReflectionReceiver = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
class ReflectionReceiver {
    constructor(reflections, options, defaultStrength) {
        var _a, _b, _c;
        this.removeCallbacks = [];
        this.reflections = reflections;
        this.position = vec_1.vec2.cpy(options.position);
        this.size = vec_1.vec2.cpy(options.size);
        this.mask = (_a = options.mask) !== null && _a !== void 0 ? _a : null;
        this.repeat = (_b = options.repeat) !== null && _b !== void 0 ? _b : false;
        this.strength = (_c = options.strength) !== null && _c !== void 0 ? _c : defaultStrength;
    }
    drawMask(context) {
        if (this.mask) {
            (0, core_1.drawImageInRectangle)(context, this.mask, this, this.repeat);
        }
        else {
            context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
        }
    }
    onRemove(callback) {
        this.removeCallbacks.push(callback);
    }
    remove() {
        this.reflections.remove(this);
        this.removeCallbacks.forEach(callback => callback());
    }
}
exports.ReflectionReceiver = ReflectionReceiver;
class FloorReflectionReceiver extends ReflectionReceiver {
    constructor(reflections, options) {
        super(reflections, options, FloorReflectionReceiver.DEFAULT_STRENGTH);
    }
}
exports.FloorReflectionReceiver = FloorReflectionReceiver;
FloorReflectionReceiver.DEFAULT_STRENGTH = 0.5;
class WallReflectionReceiver extends ReflectionReceiver {
    constructor(reflections, options) {
        var _a;
        super(reflections, options, WallReflectionReceiver.DEFAULT_STRENGTH);
        this.foot = (_a = options.foot) !== null && _a !== void 0 ? _a : this.position.y + this.size.y;
    }
    draw(context) {
        this.reflections.drawWallReceiver(this, context);
    }
}
exports.WallReflectionReceiver = WallReflectionReceiver;
WallReflectionReceiver.DEFAULT_STRENGTH = 1;


/***/ }),

/***/ "./src/reflections/ReflectionSource.ts":
/*!*********************************************!*\
  !*** ./src/reflections/ReflectionSource.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReflectionSource = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
class ReflectionSource {
    constructor(reflections, options) {
        var _a, _b, _c, _d, _e;
        this.waterline = null;
        this.reflections = reflections;
        this.sprite = 'sprite' in options ? options.sprite : null;
        this.object = 'object' in options ? options.object : null;
        this.footOffset = (_a = options.footOffset) !== null && _a !== void 0 ? _a : 0;
        this.floor = (_b = options.floor) !== null && _b !== void 0 ? _b : true;
        this.wall = (_c = options.wall) !== null && _c !== void 0 ? _c : true;
        this.wallDirections =
            (_d = options.wallDirections) !== null && _d !== void 0 ? _d : ReflectionSource.DEFAULT_WALL_DIRECTIONS;
        this.wallImage = (_e = options.wallImage) !== null && _e !== void 0 ? _e : null;
    }
    get bounds() {
        return this.sprite ? (0, core_1.spriteBounds)(this.sprite) : this.object;
    }
    get foot() {
        const { position, size } = this.bounds;
        return position.y + size.y - this.footOffset;
    }
    get floorAxis() {
        var _a;
        return (_a = this.waterline) !== null && _a !== void 0 ? _a : this.foot;
    }
    get floorBounds() {
        const { position, size } = this.bounds;
        return {
            position: (0, vec_1.vec2)(position.x, this.floorAxis * 2 - (position.y + size.y)),
            size,
        };
    }
    wallBounds(wallFoot) {
        const { position, size } = this.bounds;
        return {
            position: (0, vec_1.vec2)(position.x, position.y + (wallFoot - this.foot) * 2),
            size,
        };
    }
    drawInFloor(context) {
        context.save();
        context.translate(0, this.floorAxis * 2);
        context.scale(1, -1);
        if (this.waterline !== null) {
            const { position, size } = this.bounds;
            context.beginPath();
            context.rect(position.x, position.y, size.x, this.waterline - position.y);
            context.clip();
        }
        this.draw(context);
        context.restore();
    }
    drawInWall(context, wallFoot) {
        context.save();
        context.translate(0, (wallFoot - this.foot) * 2);
        if (this.sprite) {
            this.drawSpriteInWall(context, this.sprite);
        }
        else if (this.wallImage) {
            const { position, size } = this.bounds;
            context.drawImage(this.wallImage, position.x, position.y, size.x, size.y);
        }
        else {
            this.draw(context);
        }
        context.restore();
    }
    drawSpriteInWall(context, sprite) {
        var _a;
        const direction = (_a = this.wallDirections[sprite.direction]) !== null && _a !== void 0 ? _a : sprite.direction;
        if (direction === sprite.direction) {
            sprite.draw(context);
            return;
        }
        const image = sprite.getImage(direction);
        if (!image) {
            return;
        }
        context.translate(sprite.position.x, sprite.position.y);
        context.scale(sprite.scale, sprite.scale);
        context.rotate(sprite.rotation);
        context.drawImage(image, -sprite.origin.x, -sprite.origin.y, image.width, image.height);
    }
    draw(context) {
        if (this.sprite) {
            this.sprite.draw(context);
            return;
        }
        const { position, size, image, draw } = this.object;
        if (draw) {
            draw(context);
        }
        else if (image) {
            context.drawImage(image, position.x, position.y, size.x, size.y);
        }
    }
    remove() {
        this.reflections.remove(this);
    }
}
exports.ReflectionSource = ReflectionSource;
ReflectionSource.DEFAULT_WALL_DIRECTIONS = {
    north: 'south',
    south: 'north',
    up: 'down',
    down: 'up',
};


/***/ }),

/***/ "./src/reflections/ReflectionSystem.ts":
/*!*********************************************!*\
  !*** ./src/reflections/ReflectionSystem.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReflectionSystem = void 0;
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const ReflectionReceiver_1 = __webpack_require__(/*! ./ReflectionReceiver */ "./src/reflections/ReflectionReceiver.ts");
const ReflectionSource_1 = __webpack_require__(/*! ./ReflectionSource */ "./src/reflections/ReflectionSource.ts");
class ReflectionSystem {
    constructor() {
        this.sources = [];
        this.floorReceivers = [];
        this.wallReceivers = [];
        this.floorSourcesContext = ReflectionSystem.createContext();
        this.floorSourcesCanvas = this.floorSourcesContext.canvas;
        this.floorContext = ReflectionSystem.createContext();
        this.wallContext = ReflectionSystem.createContext();
        this.frame = null;
        this.floorSourcesReady = false;
    }
    static createContext() {
        return document.createElement('canvas').getContext('2d');
    }
    addSource(options) {
        const source = new ReflectionSource_1.ReflectionSource(this, options);
        this.sources.push(source);
        return source;
    }
    addFloorReceiver(options) {
        const receiver = new ReflectionReceiver_1.FloorReflectionReceiver(this, options);
        this.floorReceivers.push(receiver);
        return receiver;
    }
    addWallReceiver(options) {
        const receiver = new ReflectionReceiver_1.WallReflectionReceiver(this, options);
        this.wallReceivers.push(receiver);
        return receiver;
    }
    remove(object) {
        this.sources = this.sources.filter(o => o !== object);
        this.floorReceivers = this.floorReceivers.filter(o => o !== object);
        this.wallReceivers = this.wallReceivers.filter(o => o !== object);
    }
    prepare(frame) {
        this.frame = frame;
        this.floorSourcesReady = false;
    }
    drawFloorSources() {
        const { frame } = this;
        if (!frame || this.floorSourcesReady) {
            return this.floorSourcesCanvas;
        }
        const visible = this.visibleArea(frame);
        const sources = this.sortedSources(this.sources.filter(source => source.floor && (0, core_1.rectanglesIntersect)(source.floorBounds, visible)));
        this.resetContext(this.floorSourcesContext, frame);
        sources.forEach(source => source.drawInFloor(this.floorSourcesContext));
        this.floorSourcesReady = true;
        return this.floorSourcesCanvas;
    }
    resetContext(context, frame) {
        const { canvas } = context;
        if (canvas.width !== frame.screen.x || canvas.height !== frame.screen.y) {
            canvas.width = frame.screen.x;
            canvas.height = frame.screen.y;
        }
        else {
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        context.imageSmoothingEnabled = frame.context.imageSmoothingEnabled;
        frame.camera.setTransforms(context);
    }
    visibleArea({ camera }) {
        return (0, core_1.intervalToRectangle)(camera.bounds);
    }
    sortedSources(sources) {
        return sources
            .map(source => ({ source, foot: source.foot }))
            .sort((a, b) => a.foot - b.foot)
            .map(({ source }) => source);
    }
    drawFloor() {
        const { frame } = this;
        if (!frame) {
            return;
        }
        const visible = this.visibleArea(frame);
        const receivers = this.floorReceivers.filter(receiver => (0, core_1.rectanglesIntersect)(receiver, visible));
        if (receivers.length === 0) {
            return;
        }
        this.drawFloorSources();
        const context = this.floorContext;
        this.resetContext(context, frame);
        receivers.forEach(receiver => {
            context.globalAlpha = receiver.strength;
            receiver.drawMask(context);
        });
        context.globalAlpha = 1;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.globalCompositeOperation = 'source-in';
        context.drawImage(this.floorSourcesCanvas, 0, 0);
        context.globalCompositeOperation = 'source-over';
        frame.context.save();
        frame.context.setTransform(1, 0, 0, 1, 0, 0);
        frame.context.drawImage(context.canvas, 0, 0);
        frame.context.restore();
    }
    drawWallReceiver(receiver, target) {
        const { frame } = this;
        if (!frame || !(0, core_1.rectanglesIntersect)(receiver, this.visibleArea(frame))) {
            return;
        }
        const sources = this.sortedSources(this.sources.filter(source => source.wall &&
            source.foot > receiver.foot &&
            (0, core_1.rectanglesIntersect)(source.wallBounds(receiver.foot), receiver)));
        if (sources.length === 0) {
            return;
        }
        const context = this.wallContext;
        this.resetContext(context, frame);
        sources
            .reverse()
            .forEach(source => source.drawInWall(context, receiver.foot));
        context.globalCompositeOperation = 'destination-in';
        receiver.drawMask(context);
        context.globalCompositeOperation = 'source-over';
        target.save();
        target.setTransform(1, 0, 0, 1, 0, 0);
        target.globalAlpha = receiver.strength;
        target.drawImage(context.canvas, 0, 0);
        target.restore();
    }
}
exports.ReflectionSystem = ReflectionSystem;


/***/ }),

/***/ "./src/reflections/index.ts":
/*!**********************************!*\
  !*** ./src/reflections/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReflectionSystem = exports.ReflectionSource = exports.WallReflectionReceiver = exports.ReflectionReceiver = exports.FloorReflectionReceiver = void 0;
var ReflectionReceiver_1 = __webpack_require__(/*! ./ReflectionReceiver */ "./src/reflections/ReflectionReceiver.ts");
Object.defineProperty(exports, "FloorReflectionReceiver", ({ enumerable: true, get: function () { return ReflectionReceiver_1.FloorReflectionReceiver; } }));
Object.defineProperty(exports, "ReflectionReceiver", ({ enumerable: true, get: function () { return ReflectionReceiver_1.ReflectionReceiver; } }));
Object.defineProperty(exports, "WallReflectionReceiver", ({ enumerable: true, get: function () { return ReflectionReceiver_1.WallReflectionReceiver; } }));
var ReflectionSource_1 = __webpack_require__(/*! ./ReflectionSource */ "./src/reflections/ReflectionSource.ts");
Object.defineProperty(exports, "ReflectionSource", ({ enumerable: true, get: function () { return ReflectionSource_1.ReflectionSource; } }));
var ReflectionSystem_1 = __webpack_require__(/*! ./ReflectionSystem */ "./src/reflections/ReflectionSystem.ts");
Object.defineProperty(exports, "ReflectionSystem", ({ enumerable: true, get: function () { return ReflectionSystem_1.ReflectionSystem; } }));


/***/ }),

/***/ "./src/water/RippleField.ts":
/*!**********************************!*\
  !*** ./src/water/RippleField.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RippleField = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
class RippleField {
    constructor(size, cellSize) {
        this.active = false;
        this.blocked = null;
        this.time = 0;
        const cells = size.x * size.y;
        this.size = vec_1.vec2.cpy(size);
        this.cellSize = vec_1.vec2.cpy(cellSize);
        this.height = new Float32Array(cells);
        this.previous = new Float32Array(cells);
        this.pixels = new Uint8Array(cells * 4);
        this.updatePixels();
    }
    setBlocked(blocked) {
        this.blocked = blocked;
    }
    disturb(position, { radius = 6, strength = 1 }) {
        const { size, cellSize } = this;
        const reach = (0, vec_1.vec2)(radius * 2, radius * 2);
        const first = vec_1.vec2.map(vec_1.vec2.sub(position, reach), Math.floor);
        const last = vec_1.vec2.map(vec_1.vec2.add(position, reach), Math.ceil);
        const startX = Math.max(Math.floor(first.x / cellSize.x), 0);
        const endX = Math.min(Math.ceil(last.x / cellSize.x), size.x - 1);
        const startY = Math.max(Math.floor(first.y / cellSize.y), 0);
        const endY = Math.min(Math.ceil(last.y / cellSize.y), size.y - 1);
        for (let y = startY; y <= endY; y++) {
            for (let x = startX; x <= endX; x++) {
                const dx = (x + 0.5) * cellSize.x - position.x;
                const dy = (y + 0.5) * cellSize.y - position.y;
                const amount = strength * Math.exp(-(dx * dx + dy * dy) / (radius * radius));
                this.height[x + y * size.x] += amount;
                this.previous[x + y * size.x] += amount;
            }
        }
        this.active = true;
    }
    update(dt, speed, damping) {
        if (!this.active) {
            return;
        }
        this.time += dt;
        const steps = Math.min(Math.floor(this.time / RippleField.TIME_STEP), 4);
        this.time %= RippleField.TIME_STEP;
        const cell = Math.min(this.cellSize.x, this.cellSize.y);
        const wave = Math.min(speed * RippleField.TIME_STEP / cell, RippleField.MAX_WAVE_NUMBER);
        for (let i = 0; i < steps; i++) {
            this.step(wave * wave, damping);
        }
        this.updatePixels();
    }
    step(wave, damping) {
        const { height, previous, blocked } = this;
        const { x: columns, y: rows } = this.size;
        let largest = 0;
        for (let y = 0; y < rows; y++) {
            const up = y > 0 ? -columns : 0;
            const down = y < rows - 1 ? columns : 0;
            for (let x = 0; x < columns; x++) {
                const i = x + y * columns;
                if (blocked === null || blocked === void 0 ? void 0 : blocked[i]) {
                    previous[i] = 0;
                    continue;
                }
                const left = x > 0 ? -1 : 0;
                const right = x < columns - 1 ? 1 : 0;
                const neighbours = height[i + left] +
                    height[i + right] +
                    height[i + up] +
                    height[i + down];
                const next = (height[i] +
                    (height[i] - previous[i]) * damping +
                    (neighbours - height[i] * 4) * wave) *
                    RippleField.HEIGHT_RETAINED;
                previous[i] = next;
                largest = Math.max(largest, Math.abs(next));
            }
        }
        this.height = previous;
        this.previous = height;
        if (largest < RippleField.MIN_HEIGHT) {
            this.height.fill(0);
            this.previous.fill(0);
            this.active = false;
        }
    }
    updatePixels() {
        const { height, pixels } = this;
        const { x: columns, y: rows } = this.size;
        const encode = (value) => Math.min(Math.max(Math.round(value * 127) + 128, 0), 255);
        for (let y = 0; y < rows; y++) {
            const up = y > 0 ? -columns : 0;
            const down = y < rows - 1 ? columns : 0;
            for (let x = 0; x < columns; x++) {
                const i = x + y * columns;
                const left = x > 0 ? -1 : 0;
                const right = x < columns - 1 ? 1 : 0;
                pixels[i * 4] = encode((height[i + right] - height[i + left]) / 2);
                pixels[i * 4 + 1] = encode((height[i + down] - height[i + up]) / 2);
                pixels[i * 4 + 2] = encode(height[i]);
                pixels[i * 4 + 3] = 255;
            }
        }
    }
}
exports.RippleField = RippleField;
RippleField.MIN_HEIGHT = 0.002;
RippleField.HEIGHT_RETAINED = 0.995;
RippleField.MAX_WAVE_NUMBER = 0.5;
RippleField.TIME_STEP = 1 / 60;


/***/ }),

/***/ "./src/water/WaterPass.ts":
/*!********************************!*\
  !*** ./src/water/WaterPass.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaterPass = exports.WaterOutput = void 0;
const parsecolor_1 = __webpack_require__(/*! @basementuniverse/parsecolor */ "./node_modules/@basementuniverse/parsecolor/parsecolor.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const waterShader = __webpack_require__(/*! ./shaders/water.frag.glsl */ "./src/water/shaders/water.frag.glsl");
var TextureUnit;
(function (TextureUnit) {
    TextureUnit[TextureUnit["Scene"] = 0] = "Scene";
    TextureUnit[TextureUnit["ReflectionMap"] = 1] = "ReflectionMap";
    TextureUnit[TextureUnit["Mask"] = 2] = "Mask";
    TextureUnit[TextureUnit["DepthMap"] = 3] = "DepthMap";
    TextureUnit[TextureUnit["FlowMap"] = 4] = "FlowMap";
    TextureUnit[TextureUnit["WaveMap"] = 5] = "WaveMap";
    TextureUnit[TextureUnit["NoiseMap"] = 6] = "NoiseMap";
    TextureUnit[TextureUnit["RippleMap"] = 7] = "RippleMap";
})(TextureUnit || (TextureUnit = {}));
var WaterOutput;
(function (WaterOutput) {
    WaterOutput[WaterOutput["Colour"] = 0] = "Colour";
    WaterOutput[WaterOutput["Normal"] = 1] = "Normal";
    WaterOutput[WaterOutput["Specular"] = 2] = "Specular";
})(WaterOutput = exports.WaterOutput || (exports.WaterOutput = {}));
class WaterPass {
    static getWaveMapData() {
        if (WaterPass.waveMapData) {
            return WaterPass.waveMapData;
        }
        const size = WaterPass.WAVE_MAP_SIZE;
        const data = new Uint8Array(size * size * 4);
        const angle = (Math.PI * 2) / size;
        let seed = 12345;
        const random = () => {
            seed = (seed * 16807) % 2147483647;
            return seed / 2147483647;
        };
        const createWaves = (count, maxFrequency) => Array.from({ length: count }, () => {
            const frequency = () => Math.round((random() * 2 - 1) * maxFrequency) || 1;
            const x = frequency();
            const y = frequency();
            return {
                x,
                y,
                phase: random() * Math.PI * 2,
                amplitude: 1 / Math.hypot(x, y),
            };
        });
        const waves = createWaves(WaterPass.WAVE_COUNT, WaterPass.WAVE_MAX_FREQUENCY);
        const noise = createWaves(WaterPass.NOISE_WAVE_COUNT, WaterPass.NOISE_MAX_FREQUENCY);
        const slopes = new Float32Array(size * size * 2);
        const heights = new Float32Array(size * size);
        let largestSlope = 0;
        let largestHeight = 0;
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const i = x + y * size;
                for (const wave of waves) {
                    const value = Math.cos((wave.x * x + wave.y * y) * angle + wave.phase);
                    slopes[i * 2] += wave.amplitude * wave.x * value;
                    slopes[i * 2 + 1] += wave.amplitude * wave.y * value;
                }
                for (const wave of noise) {
                    heights[i] +=
                        wave.amplitude *
                            Math.sin((wave.x * x + wave.y * y) * angle + wave.phase);
                }
                largestSlope = Math.max(largestSlope, Math.abs(slopes[i * 2]), Math.abs(slopes[i * 2 + 1]));
                largestHeight = Math.max(largestHeight, Math.abs(heights[i]));
            }
        }
        for (let i = 0; i < size * size; i++) {
            data[i * 4] = (slopes[i * 2] / largestSlope) * 127.5 + 127.5;
            data[i * 4 + 1] = (slopes[i * 2 + 1] / largestSlope) * 127.5 + 127.5;
            data[i * 4 + 2] = (heights[i] / largestHeight) * 127.5 + 127.5;
            data[i * 4 + 3] = 255;
        }
        WaterPass.waveMapData = data;
        return data;
    }
    constructor(context) {
        this.initialised = false;
        this.regionTextures = new Map();
        this.context = context;
        this.context.onInitialise(gl => this.initialise(gl));
    }
    get canvas() {
        return this.context.canvas;
    }
    get available() {
        return this.initialised && this.context.available;
    }
    initialise(gl) {
        this.initialised = false;
        try {
            this.program = this.context.createProgram(waterShader);
        }
        catch (e) {
            console.error('Water has been disabled', e);
            return;
        }
        this.sceneTexture = gl.createTexture();
        this.reflectionTexture = gl.createTexture();
        this.waveTexture = gl.createTexture();
        this.regionTextures = new Map();
        this.context.uploadData(TextureUnit.WaveMap, this.waveTexture, (0, vec_1.vec2)(WaterPass.WAVE_MAP_SIZE), WaterPass.getWaveMapData(), gl.LINEAR, true);
        this.initialised = true;
    }
    release(region) {
        const textures = this.regionTextures.get(region);
        if (!textures) {
            return;
        }
        const { gl } = this.context;
        gl === null || gl === void 0 ? void 0 : gl.deleteTexture(textures.depth);
        gl === null || gl === void 0 ? void 0 : gl.deleteTexture(textures.flow);
        gl === null || gl === void 0 ? void 0 : gl.deleteTexture(textures.ripples);
        if (textures.waves) {
            gl === null || gl === void 0 ? void 0 : gl.deleteTexture(textures.waves);
        }
        this.regionTextures.delete(region);
    }
    getTextures(gl, region) {
        let textures = this.regionTextures.get(region);
        if (!textures) {
            textures = {
                depth: gl.createTexture(),
                depthVersion: -1,
                flow: gl.createTexture(),
                flowVersion: -1,
                ripples: gl.createTexture(),
                ripplesUploaded: false,
                waves: region.normalMap ? gl.createTexture() : null,
            };
            this.regionTextures.set(region, textures);
            if (region.normalMap && textures.waves) {
                this.context.upload(TextureUnit.WaveMap, textures.waves, this.powerOfTwoImage(region.normalMap), gl.LINEAR, true);
            }
        }
        return textures;
    }
    powerOfTwoImage(image) {
        const isPowerOfTwo = (n) => (n & (n - 1)) === 0;
        if (isPowerOfTwo(image.width) && isPowerOfTwo(image.height)) {
            return image;
        }
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = WaterPass.WAVE_MAP_SIZE;
        canvas
            .getContext('2d')
            .drawImage(image, 0, 0, canvas.width, canvas.height);
        return canvas;
    }
    bindRegion(gl, region) {
        var _a;
        const textures = this.getTextures(gl, region);
        const { depthPixels, flowPixels, ripples } = region;
        if (textures.depthVersion === depthPixels.version) {
            this.context.bindTexture(TextureUnit.DepthMap, textures.depth, gl.LINEAR);
        }
        else {
            this.context.uploadData(TextureUnit.DepthMap, textures.depth, depthPixels.size, depthPixels.data, gl.LINEAR);
            textures.depthVersion = depthPixels.version;
        }
        if (textures.flowVersion === flowPixels.version) {
            this.context.bindTexture(TextureUnit.FlowMap, textures.flow, gl.LINEAR);
        }
        else {
            this.context.uploadData(TextureUnit.FlowMap, textures.flow, flowPixels.size, flowPixels.data, gl.LINEAR);
            textures.flowVersion = flowPixels.version;
        }
        this.context.bindTexture(TextureUnit.WaveMap, (_a = textures.waves) !== null && _a !== void 0 ? _a : this.waveTexture, gl.LINEAR, true);
        if (ripples.active) {
            this.context.uploadData(TextureUnit.RippleMap, textures.ripples, ripples.size, ripples.pixels, gl.LINEAR);
            textures.ripplesUploaded = true;
        }
        else if (textures.ripplesUploaded) {
            this.context.bindTexture(TextureUnit.RippleMap, textures.ripples, gl.LINEAR);
        }
    }
    setRegionUniforms(gl, region, frame) {
        const { uniforms } = this.program;
        const colour = (0, parsecolor_1.parseColor)(region.colour);
        const deepColour = (0, parsecolor_1.parseColor)(region.deepColour);
        const { mask } = region;
        const filter = frame.context.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;
        gl.uniform2f(uniforms.u_regionPosition, region.position.x, region.position.y);
        gl.uniform2f(uniforms.u_regionSize, region.size.x, region.size.y);
        gl.uniform1f(uniforms.u_useMask, mask ? 1 : 0);
        gl.uniform1f(uniforms.u_useMaskRepeat, region.repeat ? 1 : 0);
        if (mask) {
            this.context.bindImage(mask, filter, TextureUnit.Mask);
            gl.uniform2f(uniforms.u_maskSize, mask.width, mask.height);
        }
        gl.uniform1f(uniforms.u_useRipples, region.ripples.active ? 1 : 0);
        gl.uniform3f(uniforms.u_colour, colour.r / 255, colour.g / 255, colour.b / 255);
        gl.uniform3f(uniforms.u_deepColour, deepColour.r / 255, deepColour.g / 255, deepColour.b / 255);
        gl.uniform1f(uniforms.u_opacity, region.opacity);
        gl.uniform1f(uniforms.u_shoreBlend, region.shoreBlend);
        gl.uniform1f(uniforms.u_refraction, region.refraction);
        gl.uniform1f(uniforms.u_reflection, region.reflection);
        gl.uniform1f(uniforms.u_reflectionDistortion, region.reflectionDistortion);
        gl.uniform1f(uniforms.u_waveSize, region.waveSize);
        gl.uniform1f(uniforms.u_waveSpeed, region.waveSpeed);
        gl.uniform1f(uniforms.u_waveStrength, region.waveStrength);
        gl.uniform1f(uniforms.u_rippleStrength, region.rippleStrength);
        gl.uniform1f(uniforms.u_flowCycle, WaterPass.FLOW_CYCLE);
        gl.uniform1f(uniforms.u_flowDistance, region.flowSpeed * WaterPass.FLOW_CYCLE);
        gl.uniform1f(uniforms.u_specular, region.specular);
        gl.uniform1f(uniforms.u_surfaceShading, region.surfaceShading);
        gl.uniform1f(uniforms.u_pixelSize, region.pixelSize);
    }
    drawRegion(gl, region, frame) {
        const topLeft = frame.camera.worldToScreen(region.position);
        const bottomRight = frame.camera.worldToScreen(vec_1.vec2.add(region.position, region.size));
        const size = vec_1.vec2.sub(bottomRight, topLeft);
        const { uniforms } = this.program;
        this.bindRegion(gl, region);
        this.setRegionUniforms(gl, region, frame);
        gl.uniform2f(uniforms.u_regionScreenPosition, topLeft.x, topLeft.y);
        gl.uniform1f(uniforms.u_cameraScale, size.x / region.size.x);
        this.context.drawQuad(this.program, [topLeft.x, topLeft.y, size.x, size.y], undefined, [0, 0, 1, 1]);
    }
    render(frame, regions, output, time) {
        const { gl } = this.context;
        if (!gl) {
            return;
        }
        const { uniforms, program } = this.program;
        const filter = frame.context.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;
        this.context.resize(frame.screen);
        this.context.invalidateCanvases();
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.disable(gl.BLEND);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        if (output === WaterOutput.Colour) {
            this.context.upload(TextureUnit.Scene, this.sceneTexture, frame.context.canvas, filter);
            if (frame.reflectionMap) {
                this.context.upload(TextureUnit.ReflectionMap, this.reflectionTexture, frame.reflectionMap, filter);
            }
        }
        this.context.bindTexture(TextureUnit.NoiseMap, this.waveTexture, gl.LINEAR, true);
        gl.useProgram(program);
        gl.uniform2f(uniforms.u_screen, frame.screen.x, frame.screen.y);
        gl.uniform1f(uniforms.u_time, time);
        gl.uniform1f(uniforms.u_output, output);
        gl.uniform1f(uniforms.u_useReflection, frame.reflectionMap ? 1 : 0);
        gl.uniform1i(uniforms.u_scene, TextureUnit.Scene);
        gl.uniform1i(uniforms.u_reflectionMap, TextureUnit.ReflectionMap);
        gl.uniform1i(uniforms.u_mask, TextureUnit.Mask);
        gl.uniform1i(uniforms.u_depthMap, TextureUnit.DepthMap);
        gl.uniform1i(uniforms.u_flowMap, TextureUnit.FlowMap);
        gl.uniform1i(uniforms.u_waveMap, TextureUnit.WaveMap);
        gl.uniform1i(uniforms.u_noiseMap, TextureUnit.NoiseMap);
        gl.uniform1i(uniforms.u_rippleMap, TextureUnit.RippleMap);
        regions.forEach(region => this.drawRegion(gl, region, frame));
    }
}
exports.WaterPass = WaterPass;
WaterPass.WAVE_MAP_SIZE = 256;
WaterPass.WAVE_COUNT = 32;
WaterPass.WAVE_MAX_FREQUENCY = 14;
WaterPass.NOISE_WAVE_COUNT = 8;
WaterPass.NOISE_MAX_FREQUENCY = 3;
WaterPass.FLOW_CYCLE = 2;
WaterPass.waveMapData = null;


/***/ }),

/***/ "./src/water/WaterRegion.ts":
/*!**********************************!*\
  !*** ./src/water/WaterRegion.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaterRegion = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const RippleField_1 = __webpack_require__(/*! ./RippleField */ "./src/water/RippleField.ts");
class WaterRegion {
    constructor(system, options) {
        var _a;
        this.depthGrid = [[1]];
        this.shape = null;
        this.rainTime = 0;
        this.removeCallbacks = [];
        const { mask, normalMap, depth, flow, position, size, ...settings } = options;
        this.system = system;
        this.position = vec_1.vec2.cpy(position);
        this.size = vec_1.vec2.cpy(size);
        this.mask = mask !== null && mask !== void 0 ? mask : null;
        this.normalMap = normalMap !== null && normalMap !== void 0 ? normalMap : null;
        Object.assign(this, WaterRegion.DEFAULT_OPTIONS, settings);
        this.depthPixels = { size: (0, vec_1.vec2)(1), data: new Uint8Array(4), version: 0 };
        this.flowPixels = { size: (0, vec_1.vec2)(1), data: new Uint8Array(4), version: 0 };
        this.setDepth(depth !== null && depth !== void 0 ? depth : 1);
        this.setFlow(flow !== null && flow !== void 0 ? flow : (0, vec_1.vec2)());
        const cellSize = Math.max((_a = options.rippleCellSize) !== null && _a !== void 0 ? _a : WaterRegion.DEFAULT_OPTIONS.rippleCellSize, Math.max(size.x, size.y) / WaterRegion.MAX_RIPPLE_CELLS);
        const cells = (0, vec_1.vec2)(Math.max(Math.ceil(size.x / cellSize), 1), Math.max(Math.ceil(size.y / cellSize), 1));
        this.ripples = new RippleField_1.RippleField(cells, (0, vec_1.vec2)(size.x / cells.x, size.y / cells.y));
    }
    setDepth(depth) {
        this.depthGrid = typeof depth === 'number' ? [[depth]] : depth;
        const rows = this.depthGrid.length;
        const columns = this.depthGrid[0].length;
        const data = new Uint8Array(rows * columns * 4);
        this.depthGrid.forEach((row, y) => row.forEach((value, x) => {
            data[(x + y * columns) * 4] = Math.round(value * 255);
        }));
        this.depthPixels = {
            size: (0, vec_1.vec2)(columns, rows),
            data,
            version: this.depthPixels.version + 1,
        };
    }
    setFlow(flow) {
        const grid = Array.isArray(flow) ? flow : [[flow]];
        const rows = grid.length;
        const columns = grid[0].length;
        const data = new Uint8Array(rows * columns * 4);
        grid.forEach((row, y) => row.forEach((value, x) => {
            data[(x + y * columns) * 4] = Math.round(value.x * 127) + 128;
            data[(x + y * columns) * 4 + 1] = Math.round(value.y * 127) + 128;
        }));
        this.flowPixels = {
            size: (0, vec_1.vec2)(columns, rows),
            data,
            version: this.flowPixels.version + 1,
        };
    }
    getShape() {
        if (this.shape || !this.mask) {
            return this.shape;
        }
        if (this.mask.width === 0 ||
            (this.mask instanceof HTMLImageElement && !this.mask.complete)) {
            return null;
        }
        const { x: columns, y: rows } = this.ripples.size;
        const canvas = document.createElement('canvas');
        canvas.width = columns;
        canvas.height = rows;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        context.scale(columns / this.size.x, rows / this.size.y);
        context.translate(-this.position.x, -this.position.y);
        (0, core_1.drawImageInRectangle)(context, this.mask, this, this.repeat);
        const { data } = context.getImageData(0, 0, columns, rows);
        const shape = new Uint8Array(columns * rows);
        const blocked = new Uint8Array(columns * rows);
        for (let i = 0; i < shape.length; i++) {
            shape[i] = data[i * 4 + 3];
            blocked[i] = shape[i] < 128 ? 1 : 0;
        }
        this.shape = shape;
        this.ripples.setBlocked(blocked);
        return shape;
    }
    invalidateMask() {
        this.shape = null;
    }
    depthAt(position) {
        const local = vec_1.vec2.sub(position, this.position);
        if (local.x < 0 ||
            local.y < 0 ||
            local.x >= this.size.x ||
            local.y >= this.size.y) {
            return 0;
        }
        const shape = this.getShape();
        if (shape) {
            const { x: columns, y: rows } = this.ripples.size;
            const x = Math.floor((local.x / this.size.x) * columns);
            const y = Math.floor((local.y / this.size.y) * rows);
            if (shape[x + y * columns] < 128) {
                return 0;
            }
        }
        return this.interpolateDepth(local);
    }
    interpolateDepth(local) {
        const grid = this.depthGrid;
        const rows = grid.length;
        const columns = grid[0].length;
        const u = (local.x / this.size.x) * columns - 0.5;
        const v = (local.y / this.size.y) * rows - 0.5;
        const clampX = (x) => Math.min(Math.max(x, 0), columns - 1);
        const clampY = (y) => Math.min(Math.max(y, 0), rows - 1);
        const x0 = Math.floor(u);
        const y0 = Math.floor(v);
        const tx = u - x0;
        const ty = v - y0;
        const value = (x, y) => grid[clampY(y)][clampX(x)];
        const top = value(x0, y0) * (1 - tx) + value(x0 + 1, y0) * tx;
        const bottom = value(x0, y0 + 1) * (1 - tx) + value(x0 + 1, y0 + 1) * tx;
        return top * (1 - ty) + bottom * ty;
    }
    disturb(position, options = {}) {
        this.getShape();
        this.ripples.disturb(vec_1.vec2.sub(position, this.position), options);
    }
    update(dt) {
        this.updateRain(dt);
        this.ripples.update(dt, this.rippleSpeed, this.rippleDamping);
    }
    updateRain(dt) {
        if (this.rain <= 0) {
            return;
        }
        const area = this.size.x * this.size.y;
        const interval = WaterRegion.RAIN_AREA / (this.rain * area);
        this.rainTime += dt;
        while (this.rainTime >= interval) {
            this.rainTime -= interval;
            this.disturb((0, vec_1.vec2)(this.position.x + Math.random() * this.size.x, this.position.y + Math.random() * this.size.y), {
                radius: WaterRegion.RAINDROP_RADIUS,
                strength: -this.rainStrength,
            });
        }
    }
    onRemove(callback) {
        this.removeCallbacks.push(callback);
    }
    remove() {
        this.system.remove(this);
        this.removeCallbacks.forEach(callback => callback());
    }
}
exports.WaterRegion = WaterRegion;
WaterRegion.DEFAULT_OPTIONS = {
    repeat: false,
    flowSpeed: 16,
    colour: '#3f8fa8',
    deepColour: '#123f63',
    opacity: 0.7,
    shoreBlend: 0.15,
    refraction: 4,
    reflection: 0.6,
    reflectionDistortion: 3,
    waveSize: 128,
    waveSpeed: 6,
    waveStrength: 0.35,
    rippleStrength: 2,
    rippleSpeed: 60,
    rippleDamping: 0.97,
    rippleCellSize: 2,
    rain: 0,
    rainStrength: 0.5,
    specular: 0.5,
    surfaceShading: 0.2,
    pixelSize: 0,
};
WaterRegion.MAX_RIPPLE_CELLS = 256;
WaterRegion.RAINDROP_RADIUS = 2.5;
WaterRegion.RAIN_AREA = 10000;


/***/ }),

/***/ "./src/water/WaterSystem.ts":
/*!**********************************!*\
  !*** ./src/water/WaterSystem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaterSystem = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const WaterPass_1 = __webpack_require__(/*! ./WaterPass */ "./src/water/WaterPass.ts");
const WaterRegion_1 = __webpack_require__(/*! ./WaterRegion */ "./src/water/WaterRegion.ts");
class WaterSystem {
    static createContext() {
        return document.createElement('canvas').getContext('2d');
    }
    constructor(glContext) {
        this.regions = [];
        this.pass = null;
        this.time = 0;
        this.frame = null;
        this.normalMapContext = WaterSystem.createContext();
        this.normalMapCanvas = this.normalMapContext.canvas;
        this.specularMapContext = WaterSystem.createContext();
        this.specularMapCanvas = this.specularMapContext.canvas;
        this.glContext = glContext !== null && glContext !== void 0 ? glContext : null;
    }
    useGlContext(glContext) {
        var _a;
        (_a = this.glContext) !== null && _a !== void 0 ? _a : (this.glContext = glContext);
    }
    addRegion(options) {
        const region = new WaterRegion_1.WaterRegion(this, options);
        this.regions.push(region);
        return region;
    }
    remove(region) {
        var _a;
        this.regions = this.regions.filter(r => r !== region);
        (_a = this.pass) === null || _a === void 0 ? void 0 : _a.release(region);
    }
    sample(position) {
        for (const region of this.regions) {
            const depth = region.depthAt(position);
            if (depth > 0) {
                return { region, depth };
            }
        }
        return null;
    }
    disturb(position, options) {
        var _a;
        (_a = this.sample(position)) === null || _a === void 0 ? void 0 : _a.region.disturb(position, options);
    }
    update(dt) {
        this.time += dt;
        this.regions.forEach(region => region.update(dt));
    }
    getPass() {
        var _a, _b;
        (_a = this.pass) !== null && _a !== void 0 ? _a : (this.pass = new WaterPass_1.WaterPass((_b = this.glContext) !== null && _b !== void 0 ? _b : new core_1.GlContext()));
        return this.pass.available ? this.pass : null;
    }
    visibleRegions({ camera }) {
        const visible = (0, core_1.intervalToRectangle)(camera.bounds);
        return this.regions.filter(region => (0, core_1.rectanglesIntersect)(region, visible));
    }
    draw(frame) {
        this.frame = frame;
        const regions = this.visibleRegions(frame);
        const pass = regions.length > 0 ? this.getPass() : null;
        if (!pass) {
            return;
        }
        pass.render(frame, regions, WaterPass_1.WaterOutput.Colour, this.time);
        frame.context.save();
        frame.context.setTransform(1, 0, 0, 1, 0, 0);
        frame.context.drawImage(pass.canvas, 0, 0);
        frame.context.restore();
    }
    drawLightingMaps(frame) {
        const regions = this.visibleRegions(frame);
        const pass = regions.length > 0 ? this.getPass() : null;
        if (!pass) {
            return;
        }
        for (const [context, output] of [
            [this.normalMapContext, WaterPass_1.WaterOutput.Normal],
            [this.specularMapContext, WaterPass_1.WaterOutput.Specular],
        ]) {
            pass.render(frame, regions, output, this.time);
            context.canvas.width = frame.screen.x;
            context.canvas.height = frame.screen.y;
            context.drawImage(pass.canvas, 0, 0);
        }
    }
    drawRegionMap(context, region, map) {
        const { frame } = this;
        if (!frame) {
            return;
        }
        const topLeft = frame.camera.worldToScreen(region.position);
        const bottomRight = frame.camera.worldToScreen(vec_1.vec2.add(region.position, region.size));
        const left = Math.max(Math.floor(topLeft.x), 0);
        const top = Math.max(Math.floor(topLeft.y), 0);
        const right = Math.min(Math.ceil(bottomRight.x), map.width);
        const bottom = Math.min(Math.ceil(bottomRight.y), map.height);
        const width = right - left;
        const height = bottom - top;
        if (width <= 0 || height <= 0) {
            return;
        }
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.drawImage(map, left, top, width, height, left, top, width, height);
        context.restore();
    }
    drawRegionNormalMap(context, region) {
        this.drawRegionMap(context, region, this.normalMapCanvas);
    }
    drawRegionSpecularMap(context, region) {
        this.drawRegionMap(context, region, this.specularMapCanvas);
    }
}
exports.WaterSystem = WaterSystem;


/***/ }),

/***/ "./src/water/index.ts":
/*!****************************!*\
  !*** ./src/water/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaterSystem = exports.WaterRegion = exports.RippleField = void 0;
var RippleField_1 = __webpack_require__(/*! ./RippleField */ "./src/water/RippleField.ts");
Object.defineProperty(exports, "RippleField", ({ enumerable: true, get: function () { return RippleField_1.RippleField; } }));
var WaterRegion_1 = __webpack_require__(/*! ./WaterRegion */ "./src/water/WaterRegion.ts");
Object.defineProperty(exports, "WaterRegion", ({ enumerable: true, get: function () { return WaterRegion_1.WaterRegion; } }));
var WaterSystem_1 = __webpack_require__(/*! ./WaterSystem */ "./src/water/WaterSystem.ts");
Object.defineProperty(exports, "WaterSystem", ({ enumerable: true, get: function () { return WaterSystem_1.WaterSystem; } }));


/***/ }),

/***/ "./src/world/World.ts":
/*!****************************!*\
  !*** ./src/world/World.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.World = void 0;
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const core_1 = __webpack_require__(/*! ../core */ "./src/core/index.ts");
const lighting_1 = __webpack_require__(/*! ../lighting */ "./src/lighting/index.ts");
class World {
    constructor(options) {
        var _a, _b, _c, _d;
        this.submersibleActors = [];
        this.lighting =
            (_a = options === null || options === void 0 ? void 0 : options.lighting) !== null && _a !== void 0 ? _a : new lighting_1.LightingSystem({ lightingEnabled: false });
        this.reflections = (_b = options === null || options === void 0 ? void 0 : options.reflections) !== null && _b !== void 0 ? _b : null;
        this.water = (_c = options === null || options === void 0 ? void 0 : options.water) !== null && _c !== void 0 ? _c : null;
        if (this.water) {
            const glContext = (_d = options === null || options === void 0 ? void 0 : options.glContext) !== null && _d !== void 0 ? _d : new core_1.GlContext();
            this.lighting.useGlContext(glContext);
            this.water.useGlContext(glContext);
        }
    }
    static reflectionObject(...surfaces) {
        const bounds = () => surfaces.reduce(core_1.boundingRectangle, surfaces[0]);
        return {
            get position() {
                return bounds().position;
            },
            get size() {
                return bounds().size;
            },
            draw: context => surfaces.forEach(s => s.drawContent(context)),
        };
    }
    addGround(options) {
        const { reflectionReceiver, ...ground } = options;
        const surface = this.lighting.addGround(ground);
        if (reflectionReceiver) {
            this.addFloorReflection(surface, reflectionReceiver === true ? {} : reflectionReceiver);
        }
        return surface;
    }
    addWall(options) {
        var _a;
        const { reflectionSource, reflectionReceiver, ...wallOptions } = options;
        const wall = this.lighting.addWall(wallOptions);
        if (reflectionSource) {
            const source = (_a = this.reflections) === null || _a === void 0 ? void 0 : _a.addSource({
                wall: false,
                ...(reflectionSource === true ? {} : reflectionSource),
                object: World.reflectionObject(wall.front, wall.top),
            });
            if (source) {
                wall.front.onRemove(() => source.remove());
            }
        }
        if (reflectionReceiver) {
            this.addMirror(wall.front, reflectionReceiver === true ? {} : reflectionReceiver);
        }
        return wall;
    }
    addActor(options) {
        const { reflectionSource, submersible, ...actorOptions } = options;
        const actor = this.lighting.addActor(actorOptions);
        const source = reflectionSource
            ? this.addActorReflection(actor, reflectionSource === true ? {} : reflectionSource)
            : undefined;
        if (source) {
            actor.surface.onRemove(() => source.remove());
        }
        if (submersible) {
            const item = {
                ...World.DEFAULT_WATER_OPTIONS,
                ...(submersible === true ? {} : submersible),
                actor,
                source: source !== null && source !== void 0 ? source : null,
                lastRipple: null,
            };
            this.submersibleActors.push(item);
            actor.surface.onRemove(() => {
                this.submersibleActors = this.submersibleActors.filter(other => other !== item);
            });
        }
        return actor;
    }
    addActorReflection(actor, settings) {
        var _a;
        return (_a = this.reflections) === null || _a === void 0 ? void 0 : _a.addSource({
            ...settings,
            ...(actor.sprite
                ? { sprite: actor.sprite }
                : { object: World.reflectionObject(actor.surface) }),
        });
    }
    addWater(options) {
        const { water } = this;
        if (!water) {
            return null;
        }
        const region = water.addRegion(options);
        const surface = this.lighting.addGround({
            position: options.position,
            size: options.size,
            zIndex: World.WATER_Z_INDEX,
            customDraw: {
                image: () => { },
                normalMap: context => water.drawRegionNormalMap(context, region),
                specularMap: context => water.drawRegionSpecularMap(context, region),
            },
        });
        region.onRemove(() => surface.remove());
        return region;
    }
    addLight(options) {
        return this.lighting.addLight(options);
    }
    addFloorReflection(ground, options) {
        var _a, _b;
        const receiver = (_b = (_a = this.reflections) === null || _a === void 0 ? void 0 : _a.addFloorReceiver({
            position: ground.position,
            size: ground.size,
            ...options,
        })) !== null && _b !== void 0 ? _b : null;
        if (receiver) {
            ground.onRemove(() => receiver.remove());
        }
        return receiver;
    }
    addMirror(wall, options) {
        var _a, _b;
        const receiver = (_b = (_a = this.reflections) === null || _a === void 0 ? void 0 : _a.addWallReceiver({
            position: wall.position,
            size: wall.size,
            foot: wall.position.y + wall.size.y,
            ...options,
        })) !== null && _b !== void 0 ? _b : null;
        if (receiver) {
            receiver.onRemove(wall.addOverlay(context => receiver.draw(context)));
            wall.onRemove(() => receiver.remove());
        }
        return receiver;
    }
    update(dt) {
        var _a;
        (_a = this.water) === null || _a === void 0 ? void 0 : _a.update(dt);
        this.updateRipples();
    }
    footPosition({ actor, footOffset }) {
        actor.sync();
        const { position, size } = actor.surface;
        return (0, vec_1.vec2)(position.x + size.x / 2, position.y + size.y - footOffset);
    }
    updateRipples() {
        const { water } = this;
        if (!water) {
            return;
        }
        for (const item of this.submersibleActors) {
            if (!item.ripples) {
                continue;
            }
            const foot = this.footPosition(item);
            const moved = item.lastRipple === null ||
                vec_1.vec2.len(vec_1.vec2.sub(foot, item.lastRipple)) >= World.RIPPLE_DISTANCE;
            if (moved) {
                item.lastRipple = foot;
                water.disturb(foot, {
                    radius: World.RIPPLE_RADIUS,
                    strength: World.RIPPLE_STRENGTH,
                });
            }
        }
    }
    updateWaterlines() {
        var _a, _b;
        const { water } = this;
        if (!water) {
            return;
        }
        for (const item of this.submersibleActors) {
            const foot = this.footPosition(item);
            const depth = (_b = (_a = water.sample(foot)) === null || _a === void 0 ? void 0 : _a.depth) !== null && _b !== void 0 ? _b : 0;
            const waterline = depth > 0 ? foot.y - depth * item.maxDepth : null;
            item.actor.surface.clipBottom = waterline;
            if (item.source) {
                item.source.waterline = waterline;
            }
        }
    }
    render(context, camera) {
        var _a, _b;
        const frame = {
            context,
            camera,
            screen: (0, vec_1.vec2)(context.canvas.width, context.canvas.height),
        };
        this.updateWaterlines();
        (_a = this.reflections) === null || _a === void 0 ? void 0 : _a.prepare(frame);
        this.drawLayer(frame, () => {
            this.lighting.drawGround(context);
            this.drawSubmergedActors(context);
        });
        (_b = this.reflections) === null || _b === void 0 ? void 0 : _b.drawFloor();
        this.drawWater(frame);
        this.drawLayer(frame, () => this.lighting.drawWalls(context));
        this.applyLighting(frame);
    }
    drawSubmergedActors(context) {
        const bottom = ({ actor: { surface } }) => surface.position.y + surface.size.y;
        [...this.submersibleActors]
            .sort((a, b) => bottom(a) - bottom(b))
            .forEach(({ actor }) => actor.surface.drawHidden(context));
    }
    drawWater(frame) {
        var _a, _b;
        if (!this.water) {
            return;
        }
        frame.reflectionMap = (_b = (_a = this.reflections) === null || _a === void 0 ? void 0 : _a.drawFloorSources()) !== null && _b !== void 0 ? _b : null;
        this.water.draw(frame);
    }
    drawLayer({ context, camera }, draw) {
        context.save();
        camera.setTransforms(context);
        draw();
        context.restore();
    }
    applyLighting(frame) {
        var _a;
        const { context, camera, screen } = frame;
        if (this.lighting.options.lightingEnabled) {
            (_a = this.water) === null || _a === void 0 ? void 0 : _a.drawLightingMaps(frame);
        }
        this.lighting.prepare(camera, screen);
        this.lighting.draw(context);
    }
}
exports.World = World;
World.WATER_Z_INDEX = 1000;
World.DEFAULT_WATER_OPTIONS = {
    maxDepth: 24,
    footOffset: 0,
    ripples: true,
};
World.RIPPLE_DISTANCE = 12;
World.RIPPLE_RADIUS = 5;
World.RIPPLE_STRENGTH = 0.35;


/***/ }),

/***/ "./src/world/index.ts":
/*!****************************!*\
  !*** ./src/world/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.World = void 0;
var World_1 = __webpack_require__(/*! ./World */ "./src/world/World.ts");
Object.defineProperty(exports, "World", ({ enumerable: true, get: function () { return World_1.World; } }));


/***/ }),

/***/ "./src/core/shaders/copy.frag.glsl":
/*!*****************************************!*\
  !*** ./src/core/shaders/copy.frag.glsl ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\nuniform sampler2D u_image;\nuniform float u_flipY;\n\nvarying vec2 v_sceneUV;\n\nvoid main() {\n  gl_FragColor = texture2D(\n    u_image,\n    vec2(v_sceneUV.x, mix(v_sceneUV.y, 1.0 - v_sceneUV.y, u_flipY))\n  );\n}\n";

/***/ }),

/***/ "./src/core/shaders/quad.vert.glsl":
/*!*****************************************!*\
  !*** ./src/core/shaders/quad.vert.glsl ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\nattribute vec2 a_corner;\n\n// Size of the screen in pixels\nuniform vec2 u_screen;\n\n// Area to draw, as (x, y, width, height) in screen pixels\nuniform vec4 u_screenRectangle;\n\n// The same area, as (x, y, width, height) in world units relative to the light\nuniform vec4 u_worldRectangle;\n\n// The same area, as (x, y, width, height) in texture coordinates of a mask\nuniform vec4 u_maskRectangle;\n\nvarying vec2 v_sceneUV;\nvarying vec2 v_fromLight;\nvarying vec2 v_maskUV;\n\nvoid main() {\n  vec2 position = u_screenRectangle.xy + a_corner * u_screenRectangle.zw;\n\n  v_sceneUV = position / u_screen;\n  v_fromLight = u_worldRectangle.xy + a_corner * u_worldRectangle.zw;\n  v_maskUV = u_maskRectangle.xy + a_corner * u_maskRectangle.zw;\n\n  gl_Position = vec4(\n    v_sceneUV.x * 2.0 - 1.0,\n    1.0 - v_sceneUV.y * 2.0,\n    0.0,\n    1.0\n  );\n}\n";

/***/ }),

/***/ "./src/lighting/shaders/diffuse.frag.glsl":
/*!************************************************!*\
  !*** ./src/lighting/shaders/diffuse.frag.glsl ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "uniform float u_highlightStrength;\nuniform float u_shadowStrength;\n\n// Bumps can't make a surface more than this many times brighter than if it was\n// flat (these get very strong when the light is at a low angle)\nconst float MAX_BUMP = 2.0;\n\nvoid main() {\n  Surface surface = getSurface();\n\n  // How much light this surface gets, compared to the light it would get if it\n  // was flat. A flat surface is always 1, so it isn't changed by this pass\n  float bump = dot(surface.normal, surface.toLight) / surface.toLight.z - 1.0;\n  bump = clamp(bump, -1.0, MAX_BUMP - 1.0);\n\n  float strength = bump > 0.0 ? u_highlightStrength : u_shadowStrength;\n\n  gl_FragColor = vec4(surface.light * (1.0 + band(bump * strength)), 1.0);\n}\n";

/***/ }),

/***/ "./src/lighting/shaders/mask.frag.glsl":
/*!*********************************************!*\
  !*** ./src/lighting/shaders/mask.frag.glsl ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\nuniform sampler2D u_mask;\nuniform float u_useMask;\nuniform vec4 u_value;\n\nvarying vec2 v_maskUV;\n\nconst float MASK_THRESHOLD = 0.5;\n\nvoid main() {\n  if (u_useMask > 0.5) {\n    // Repeating masks wrap around, and non-repeating masks stay inside 0 to 1\n    if (texture2D(u_mask, fract(v_maskUV)).a < MASK_THRESHOLD) {\n      discard;\n    }\n  }\n\n  gl_FragColor = u_value;\n}\n";

/***/ }),

/***/ "./src/lighting/shaders/specular.frag.glsl":
/*!*************************************************!*\
  !*** ./src/lighting/shaders/specular.frag.glsl ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "uniform sampler2D u_sceneSpecularMap;\nuniform float u_specularStrength;\nuniform float u_shininess;\nuniform float u_viewTilt;\n\nvoid main() {\n  Surface surface = getSurface();\n\n  // The camera is orthographic so it's in the same direction for all surfaces\n  vec3 toCamera = normalize(vec3(0.0, u_viewTilt, 1.0));\n  vec3 halfway = normalize(normalize(surface.toLight) + toCamera);\n\n  float highlight = pow(max(dot(surface.normal, halfway), 0.0), u_shininess);\n  float specular = texture2D(u_sceneSpecularMap, v_sceneUV).r;\n\n  gl_FragColor = vec4(\n    surface.light * band(highlight * specular * u_specularStrength),\n    1.0\n  );\n}\n";

/***/ }),

/***/ "./src/lighting/shaders/surface.glsl":
/*!*******************************************!*\
  !*** ./src/lighting/shaders/surface.glsl ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\n// -----------------------------------------------------------------------------\n// SAMPLERS\n// -----------------------------------------------------------------------------\nuniform sampler2D u_sceneNormalMap;\nuniform sampler2D u_surfaceMap;\nuniform sampler2D u_lightMap;\nuniform sampler2D u_regionShadowMap;\nuniform sampler2D u_objectShadowMap;\n\n// -----------------------------------------------------------------------------\n// UNIFORMS\n// -----------------------------------------------------------------------------\nuniform float u_lightRadius;\nuniform float u_lightHeight;\nuniform float u_lightMapSize;\nuniform float u_footOrigin;\nuniform float u_useNormalMap;\nuniform float u_wallLightingYOffset;\nuniform float u_wallLightingCutoffDistance;\nuniform float u_wallShadowLengthFactor;\nuniform float u_banding;\n\n// -----------------------------------------------------------------------------\n// VARYINGS\n// -----------------------------------------------------------------------------\nvarying vec2 v_sceneUV;\nvarying vec2 v_fromLight;\n\n// -----------------------------------------------------------------------------\n// GLOBAL CONSTANTS\n// -----------------------------------------------------------------------------\n// The alpha channel of the surface map says what's at each pixel\nconst float TYPE_NONE_LIMIT = 0.125;\nconst float TYPE_GROUND_LIMIT = 0.375;\nconst float TYPE_PROJECTED_WALL_LIMIT = 0.625;\nconst float TYPE_FLAT_WALL_LIMIT = 0.875;\n\n// The foot position in the surface map is in quarters of a world unit\nconst float FOOT_SCALE = 4.0;\n\n// The red and green channels of a flat normal map (#7f7fff)\nconst float NORMAL_MAP_CENTER = 127.0 / 255.0;\n\n// Walls face the camera less directly than the ground, so bumps look stronger\nconst float WALL_NORMAL_Z_OFFSET = 0.2;\n\n// -----------------------------------------------------------------------------\n// UTILITY FUNCTIONS\n// -----------------------------------------------------------------------------\nfloat band(float amount) {\n  if (u_banding <= 0.0) {\n    return amount;\n  }\n\n  return floor(amount / u_banding + 0.5) * u_banding;\n}\n\nvec2 lightMapUV(vec2 fromLight) {\n  return (fromLight + u_lightRadius) / u_lightMapSize;\n}\n\nfloat insideLightMap(vec2 uv) {\n  vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));\n\n  return inside.x * inside.y;\n}\n\n// Sample the light's colour and falloff, there's no light outside of the map\nvec3 sampleLight(vec2 fromLight) {\n  vec2 uv = lightMapUV(fromLight);\n\n  return texture2D(u_lightMap, uv).rgb * insideLightMap(uv);\n}\n\n// Sample a shadow map, there are no shadows outside of the map\nvec3 sampleShadow(sampler2D map, vec2 fromLight) {\n  vec2 uv = lightMapUV(fromLight);\n\n  return mix(vec3(1.0), texture2D(map, uv).rgb, insideLightMap(uv));\n}\n\n// -----------------------------------------------------------------------------\n// SURFACE\n// -----------------------------------------------------------------------------\nstruct Surface {\n  // Light from this light that reaches this surface, including shadows\n  vec3 light;\n\n  // Unit normal, where x is right, y is down the screen, and z is towards the\n  // camera\n  vec3 normal;\n\n  // From this surface to the light, not normalized\n  vec3 toLight;\n};\n\n// Find how much light reaches a pixel on a wall by looking up the shadows on\n// the ground at the wall's foot\nvec3 wallLight(float footY, float bias, bool projected) {\n  vec2 foot = vec2(v_fromLight.x, footY);\n  float footDistance = length(foot);\n  vec2 awayFromLight = vec2(0.0, 1.0);\n  if (footDistance > 0.0) {\n    awayFromLight = foot / footDistance;\n  }\n\n  // Region casters are as tall as the wall, so their shadows reach the top of\n  // the wall once they reach the wall's foot\n  vec3 regionShadow = sampleShadow(\n    u_regionShadowMap,\n    foot - awayFromLight * bias\n  );\n\n  // Other shadows have a length, so they climb the wall until they run out. The\n  // higher up the wall we are, the further along the shadow we need to look\n  float height = footY - v_fromLight.y;\n  float climb = projected ? height / u_wallShadowLengthFactor : 0.0;\n  vec3 objectShadow = sampleShadow(\n    u_objectShadowMap,\n    awayFromLight * clamp(footDistance - bias + climb, 0.0, u_lightRadius)\n  );\n\n  // Walls can't be lit from behind, this fades out to avoid a hard edge\n  float facing = 1.0 - clamp(foot.y / u_wallLightingCutoffDistance, 0.0, 1.0);\n\n  vec2 wallOffset = vec2(0.0, u_wallLightingYOffset);\n\n  return sampleLight(v_fromLight - wallOffset) *\n    regionShadow *\n    objectShadow *\n    facing;\n}\n\n// Find the surface at this fragment, whether it's on the ground or a wall\nSurface getSurface() {\n  vec4 data = texture2D(u_surfaceMap, vec2(v_sceneUV.x, 1.0 - v_sceneUV.y));\n\n  // Unlit surfaces only receive ambient light\n  if (data.a < TYPE_NONE_LIMIT || data.a > TYPE_FLAT_WALL_LIMIT) {\n    discard;\n  }\n\n  bool isGround = data.a < TYPE_GROUND_LIMIT;\n  float foot = floor(data.r * 255.0 + 0.5) * 256.0;\n  foot += floor(data.g * 255.0 + 0.5);\n  float footY = foot / FOOT_SCALE + u_footOrigin;\n\n  vec3 light;\n  vec3 toLight;\n  float wallAmount;\n  if (isGround) {\n    light =\n      sampleLight(v_fromLight) *\n      sampleShadow(u_regionShadowMap, v_fromLight) *\n      sampleShadow(u_objectShadowMap, v_fromLight);\n    toLight = vec3(-v_fromLight, 0.0);\n    wallAmount = 0.0;\n  } else {\n    light = wallLight(\n      footY,\n      floor(data.b * 255.0 + 0.5),\n      data.a < TYPE_PROJECTED_WALL_LIMIT\n    );\n    toLight = vec3(vec2(0.0, u_wallLightingYOffset) - v_fromLight, 0.0);\n    wallAmount = 1.0;\n  }\n  toLight.z = max(u_lightHeight, 1.0);\n\n  vec3 normal = vec3(NORMAL_MAP_CENTER, NORMAL_MAP_CENTER, 1.0);\n  if (u_useNormalMap > 0.5) {\n    normal = texture2D(u_sceneNormalMap, v_sceneUV).rgb;\n  }\n\n  return Surface(\n    light,\n    normalize(vec3(\n      normal.rg - NORMAL_MAP_CENTER,\n      normal.b - 0.5 - WALL_NORMAL_Z_OFFSET * wallAmount\n    )),\n    toLight\n  );\n}\n";

/***/ }),

/***/ "./src/water/shaders/water.frag.glsl":
/*!*******************************************!*\
  !*** ./src/water/shaders/water.frag.glsl ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\n// -----------------------------------------------------------------------------\n// SAMPLERS\n// -----------------------------------------------------------------------------\nuniform sampler2D u_scene;\nuniform sampler2D u_reflectionMap;\nuniform sampler2D u_mask;\nuniform sampler2D u_depthMap;\nuniform sampler2D u_flowMap;\nuniform sampler2D u_waveMap;\nuniform sampler2D u_noiseMap;\nuniform sampler2D u_rippleMap;\n\n// -----------------------------------------------------------------------------\n// UNIFORMS\n// -----------------------------------------------------------------------------\nuniform vec2 u_screen;\nuniform float u_time;\nuniform float u_output;\n\n// The region in the world, and where it is on the screen\nuniform vec2 u_regionPosition;\nuniform vec2 u_regionSize;\nuniform vec2 u_regionScreenPosition;\nuniform float u_cameraScale;\n\nuniform float u_useMask;\nuniform float u_useMaskRepeat;\nuniform vec2 u_maskSize;\nuniform float u_useReflection;\nuniform float u_useRipples;\n\nuniform vec3 u_colour;\nuniform vec3 u_deepColour;\nuniform float u_opacity;\nuniform float u_shoreBlend;\nuniform float u_refraction;\nuniform float u_reflection;\nuniform float u_reflectionDistortion;\nuniform float u_waveSize;\nuniform float u_waveSpeed;\nuniform float u_waveStrength;\nuniform float u_rippleStrength;\nuniform float u_flowDistance;\nuniform float u_flowCycle;\nuniform float u_specular;\nuniform float u_surfaceShading;\nuniform float u_pixelSize;\n\n// -----------------------------------------------------------------------------\n// VARYINGS\n// -----------------------------------------------------------------------------\nvarying vec2 v_maskUV;\n\n// -----------------------------------------------------------------------------\n// GLOBAL CONSTANTS\n// -----------------------------------------------------------------------------\nconst float OUTPUT_NORMAL = 1.0;\nconst float OUTPUT_SPECULAR = 2.0;\n\n// The red and green channels of a flat normal map (#7f7fff)\nconst float NORMAL_MAP_CENTER = 127.0 / 255.0;\n\n// The second layer of waves is larger, and they move in a different direction\nconst float SECOND_LAYER_SCALE = 0.57;\nconst vec2 FIRST_LAYER_DIRECTION = vec2(0.8, 0.6);\nconst vec2 SECOND_LAYER_DIRECTION = vec2(-0.5, 0.86);\n\n// The direction that the water's own shading comes from\nconst vec2 SHADING_DIRECTION = vec2(-0.6, -0.8);\n\n// How many normal map tiles each patch of noise covers\nconst float NOISE_SCALE = 0.2;\n\n// -----------------------------------------------------------------------------\n// UTILITY FUNCTIONS\n// -----------------------------------------------------------------------------\n// Grid values are stored with 128 as 0, so that 0 can be stored exactly\nvec2 decodeVector(vec2 encoded) {\n  return (encoded * 255.0 - 128.0) / 127.0;\n}\n\nvec2 regionUV(vec2 world) {\n  return (world - u_regionPosition) / u_regionSize;\n}\n\nvec2 sceneUV(vec2 world) {\n  return (\n    u_regionScreenPosition + (world - u_regionPosition) * u_cameraScale\n  ) / u_screen;\n}\n\nfloat sampleMask(vec2 world) {\n  if (u_useMask < 0.5) {\n    return 1.0;\n  }\n\n  vec2 uv = regionUV(world);\n  if (u_useMaskRepeat > 0.5) {\n    uv = fract(world / u_maskSize);\n  }\n\n  return texture2D(u_mask, uv).a;\n}\n\n// Is this inside the water? This looks one pixel in each direction, otherwise\n// smoothing could blend in a pixel of the land next to the water\nfloat insideWater(vec2 world) {\n  vec2 margin = vec2(1.0 / u_cameraScale);\n  vec2 inside =\n    step(vec2(0.0), regionUV(world - margin)) *\n    step(regionUV(world + margin), vec2(1.0));\n\n  return\n    inside.x *\n    inside.y *\n    step(0.5, sampleMask(world - margin)) *\n    step(0.5, sampleMask(world + margin));\n}\n\n// -----------------------------------------------------------------------------\n// WAVES\n// -----------------------------------------------------------------------------\nvec2 waveSlope(vec2 uv) {\n  return texture2D(u_waveMap, uv).rg * 2.0 - 1.0;\n}\n\n// 2 layers of waves on top of each other\nvec2 layeredWaves(vec2 world) {\n  vec2 first = world + FIRST_LAYER_DIRECTION * u_time * u_waveSpeed;\n  vec2 second = world + SECOND_LAYER_DIRECTION * u_time * u_waveSpeed;\n\n  return (\n    waveSlope(first / u_waveSize) +\n    waveSlope(second / u_waveSize * SECOND_LAYER_SCALE)\n  ) * 0.5;\n}\n\n// Move waves along a flow vector\n//\n// We can only stretch the waves so far before they stop looking like waves, so\n// they're moved along the flow for one cycle and then they start again. There\n// are 2 sets of waves half a cycle apart, and each set fades out before it\n// jumps back to the start. The noise stops all of the water from fading at the\n// same time, which would look like the water was pulsing.\nvec2 flowingWaves(vec2 world, vec2 flow) {\n  float noise = texture2D(\n    u_noiseMap,\n    world / u_waveSize * NOISE_SCALE\n  ).b;\n  float phase0 = fract(u_time / u_flowCycle + noise * 0.5);\n  float phase1 = fract(phase0 + 0.5);\n\n  vec2 waves0 = layeredWaves(world - flow * u_flowDistance * phase0);\n  vec2 waves1 = layeredWaves(world - flow * u_flowDistance * phase1);\n\n  return mix(waves0, waves1, abs(0.5 - phase0) / 0.5);\n}\n\n// -----------------------------------------------------------------------------\n// MAIN\n// -----------------------------------------------------------------------------\nvoid main() {\n  vec2 world = u_regionPosition + v_maskUV * u_regionSize;\n  if (u_pixelSize > 0.0) {\n    world = (floor(world / u_pixelSize) + 0.5) * u_pixelSize;\n  }\n\n  vec2 uv = regionUV(world);\n  float depth = texture2D(u_depthMap, uv).r;\n\n  // The edge of the mask is a hard edge, and the water can also fade out as it\n  // gets shallower\n  float shore = 1.0;\n  if (u_shoreBlend > 0.0) {\n    shore = smoothstep(0.0, u_shoreBlend, depth);\n  }\n  float alpha = sampleMask(world) * shore;\n  if (alpha <= 0.0) {\n    discard;\n  }\n\n  vec2 flow = decodeVector(texture2D(u_flowMap, uv).rg);\n  vec2 slope = flowingWaves(world, flow) * u_waveStrength;\n  if (u_useRipples > 0.5) {\n    slope += decodeVector(texture2D(u_rippleMap, uv).rg) * u_rippleStrength;\n  }\n\n  if (u_output == OUTPUT_NORMAL) {\n    vec3 normal = normalize(vec3(-slope, 1.0));\n\n    gl_FragColor = vec4(\n      normal.xy * 0.5 + NORMAL_MAP_CENTER,\n      normal.z * 0.5 + 0.5,\n      alpha\n    );\n    return;\n  }\n\n  if (u_output == OUTPUT_SPECULAR) {\n    gl_FragColor = vec4(vec3(u_specular), alpha);\n    return;\n  }\n\n  // Deeper water bends things more, and we can't see anything outside of the\n  // water because it's in front of the water\n  vec2 refracted = world + slope * u_refraction * depth;\n  if (insideWater(refracted) < 0.5) {\n    refracted = world;\n  }\n\n  vec3 colour = mix(u_colour, u_deepColour, depth);\n  vec3 scene = texture2D(u_scene, sceneUV(refracted)).rgb;\n  vec3 result = mix(scene, colour, u_opacity * depth);\n\n  // Slopes facing one way are brighter than slopes facing the other way, so\n  // that waves can be seen without any lights\n  result += dot(slope, SHADING_DIRECTION) * u_surfaceShading;\n\n  if (u_useReflection > 0.5) {\n    vec4 reflected = texture2D(\n      u_reflectionMap,\n      sceneUV(world + slope * u_reflectionDistortion)\n    );\n\n    result = mix(result, reflected.rgb, reflected.a * u_reflection);\n  }\n\n  gl_FragColor = vec4(result, alpha);\n}\n";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLFNBQVM7YUFDVjtZQUdELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBR0QsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0M7WUFHRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMvQztZQUdELElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFTRCxTQUFnQixLQUFLLENBQ25CLEtBQVUsRUFDVixPQUF5QztJQUd6QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDakMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLE1BQWtCLENBQUM7SUFDdkIsT0FDRSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUN4QyxDQUFDLEVBQUUsR0FBRyxvQkFBb0IsRUFDMUI7UUFHQSxNQUFNLENBQUMsSUFBSSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoRSxDQUFDO1FBRUYsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFHakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5QyxTQUFTO2FBQ1Y7WUFFRCxJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQ3hCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsU0FBUzthQUNWO1lBRUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekI7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUE5Q0Qsc0JBOENDOzs7Ozs7Ozs7Ozs7Ozs7QUMvR0QsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDZCQUFpQjtJQUNqQiw2QkFBaUI7SUFDakIsMkJBQWU7QUFDakIsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBRUQsSUFBWSxRQVVYO0FBVkQsV0FBWSxRQUFRO0lBQ2xCLGdDQUFvQjtJQUNwQix1QkFBVztJQUNYLGtDQUFzQjtJQUN0Qix5QkFBYTtJQUNiLDZCQUFpQjtJQUNqQiwyQkFBZTtJQUNmLHNDQUEwQjtJQUMxQiw2QkFBaUI7SUFDakIsd0NBQTRCO0FBQzlCLENBQUMsRUFWVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQVVuQjtBQU9ELElBQVksSUFLWDtBQUxELFdBQVksSUFBSTtJQUNkLG1CQUFXO0lBQ1gsdUJBQWU7SUFDZix5QkFBaUI7SUFDakIscUJBQWE7QUFDZixDQUFDLEVBTFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBS2Y7Ozs7Ozs7Ozs7Ozs7OztBQ25DRCw4R0FBNkM7QUFFN0MsOEVBQW9FO0FBS3BFLFNBQWdCLFlBQVksQ0FBQyxJQUFVLEVBQUUsUUFBYztJQUNyRCxNQUFNLElBQUksR0FBRyxVQUFJLENBQUMsR0FBRyxDQUFDLFVBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLFVBQVUsR0FBRyxjQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxNQUFNLFdBQVcsR0FBRyxVQUFJLENBQUMsR0FBRyxDQUMxQixVQUFJLENBQUMsR0FBRyxDQUFDLFVBQUksQ0FBQyxHQUFHLENBQUMsVUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FDbEUsQ0FBQztJQUVGLE9BQU8sVUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFSRCxvQ0FRQztBQUtELFNBQWdCLE9BQU8sQ0FDckIsT0FBaUMsRUFDakMsR0FBRyxRQUF5QjtJQUU1QixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU87S0FDUjtJQUVELE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQixJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNyQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNwQyxRQUFRLENBQUMsQ0FBQyxDQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBVSxDQUFDLENBQUMsRUFBRyxRQUFRLENBQUMsQ0FBQyxDQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEU7S0FDRjtJQUNELE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBdEJELDBCQXNCQztBQUtELFNBQWdCLFFBQVEsQ0FBQyxDQUFTLEVBQUUsUUFBb0I7SUFDdEQsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtRQUN2QixPQUFPLGdCQUFRLENBQUMsTUFBTSxDQUFDO0tBQ3hCO0lBRUQsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNyQixPQUFPLGdCQUFRLENBQUMsS0FBSyxDQUFDO0tBQ3ZCO0lBRUQsT0FBTyxnQkFBUSxDQUFDLE1BQU0sQ0FBQztBQUN6QixDQUFDO0FBVkQsNEJBVUM7QUFLRCxTQUFnQixRQUFRLENBQUMsS0FBVyxFQUFFLFFBQW9CO0lBQ3hELE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRTNFLE9BQU87UUFDTCxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsT0FBTztZQUNuQyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJO1lBQ2hDLENBQUMsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBUSxDQUFDLFVBQVU7U0FDdEM7UUFDRCxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsR0FBRztZQUMvQixDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxNQUFNO1lBQ2xDLENBQUMsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBUSxDQUFDLE1BQU07U0FDbEM7UUFDRCxDQUFDLGdCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEIsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsUUFBUTtZQUNwQyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxLQUFLO1lBQ2pDLENBQUMsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBUSxDQUFDLFdBQVc7U0FDdkM7S0FDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQXJCRCw0QkFxQkM7QUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBaUMsQ0FBQztBQU1qRSxTQUFnQixVQUFVLENBQUMsS0FBaUI7SUFDMUMsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUMzQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxLQUFLLFlBQVksZ0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTdCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxXQUFXLENBQUM7UUFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDNUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQXpCRCxnQ0F5QkM7Ozs7Ozs7Ozs7Ozs7OztBQ3BIRCw4R0FBNkM7QUFDN0MseUVBQXNFO0FBeUJ0RSxNQUFzQixrQkFBa0I7SUFXdEMsWUFDRSxXQUE2QixFQUM3QixPQUFrQyxFQUNsQyxlQUF1Qjs7UUFMakIsb0JBQWUsR0FBbUIsRUFBRSxDQUFDO1FBTzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQU8sQ0FBQyxJQUFJLG1DQUFJLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQU8sQ0FBQyxNQUFNLG1DQUFJLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQU8sQ0FBQyxRQUFRLG1DQUFJLGVBQWUsQ0FBQztJQUN0RCxDQUFDO0lBTU0sUUFBUSxDQUFDLE9BQWlDO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLCtCQUFvQixFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNMLE9BQU8sQ0FBQyxRQUFRLENBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ1osQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUtNLFFBQVEsQ0FBQyxRQUFvQjtRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBS00sTUFBTTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7QUF2REQsZ0RBdURDO0FBT0QsTUFBYSx1QkFBd0IsU0FBUSxrQkFBa0I7SUFHN0QsWUFDRSxXQUE2QixFQUM3QixPQUF1QztRQUV2QyxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O0FBUkgsMERBU0M7QUFSeUIsd0NBQWdCLEdBQUcsR0FBRyxDQUFDO0FBdUJqRCxNQUFhLHNCQUF1QixTQUFRLGtCQUFrQjtJQUs1RCxZQUNFLFdBQTZCLEVBQzdCLE9BQXNDOztRQUV0QyxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBTyxDQUFDLElBQUksbUNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVFNLElBQUksQ0FBQyxPQUFpQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDOztBQXJCSCx3REFzQkM7QUFyQnlCLHVDQUFnQixHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEgvQyw4R0FBNkM7QUFDN0MseUVBQThEO0FBNkQ5RCxNQUFhLGdCQUFnQjtJQTRCM0IsWUFDRSxXQUE2QixFQUM3QixPQUFnQzs7UUFOM0IsY0FBUyxHQUFrQixJQUFJLENBQUM7UUFRckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFPLENBQUMsVUFBVSxtQ0FBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFPLENBQUMsS0FBSyxtQ0FBSSxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFPLENBQUMsSUFBSSxtQ0FBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWM7WUFDakIsYUFBTyxDQUFDLGNBQWMsbUNBQUksZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFPLENBQUMsU0FBUyxtQ0FBSSxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUtELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsdUJBQVksRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUM7SUFDaEUsQ0FBQztJQUtELElBQVcsSUFBSTtRQUNiLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxPQUFPLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQy9DLENBQUM7SUFLRCxJQUFZLFNBQVM7O1FBQ25CLE9BQU8sVUFBSSxDQUFDLFNBQVMsbUNBQUksSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBS0QsSUFBVyxXQUFXO1FBQ3BCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSTtTQUNMLENBQUM7SUFDSixDQUFDO0lBS00sVUFBVSxDQUFDLFFBQWdCO1FBQ2hDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRSxJQUFJO1NBQ0wsQ0FBQztJQUNKLENBQUM7SUFRTSxXQUFXLENBQUMsT0FBaUM7UUFDbEQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDM0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXZDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQixPQUFPLENBQUMsSUFBSSxDQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsUUFBUSxDQUFDLENBQUMsRUFDVixJQUFJLENBQUMsQ0FBQyxFQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FDNUIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFTTSxVQUFVLENBQUMsT0FBaUMsRUFBRSxRQUFnQjtRQUNuRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXZDLE9BQU8sQ0FBQyxTQUFTLENBQ2YsSUFBSSxDQUFDLFNBQVMsRUFDZCxRQUFRLENBQUMsQ0FBQyxFQUNWLFFBQVEsQ0FBQyxDQUFDLEVBQ1YsSUFBSSxDQUFDLENBQUMsRUFDTixJQUFJLENBQUMsQ0FBQyxDQUNQLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjtRQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsT0FBaUMsRUFBRSxNQUFjOztRQUN4RSxNQUFNLFNBQVMsR0FDYixVQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUNBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUc1RCxJQUFJLFNBQVMsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsT0FBTztTQUNSO1FBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FDZixLQUFLLEVBQ0wsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDaEIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDaEIsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsTUFBTSxDQUNiLENBQUM7SUFDSixDQUFDO0lBRU8sSUFBSSxDQUFDLE9BQWlDO1FBQzVDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDUjtRQUVELE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTyxDQUFDO1FBRXJELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2Y7YUFBTSxJQUFJLEtBQUssRUFBRTtZQUNoQixPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBS00sTUFBTTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O0FBbk1ILDRDQW9NQztBQW5NeUIsd0NBQXVCLEdBQTJCO0lBQ3hFLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87SUFDZCxFQUFFLEVBQUUsTUFBTTtJQUNWLElBQUksRUFBRSxJQUFJO0NBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckVKLHlFQUtpQjtBQUNqQix3SEFNOEI7QUFDOUIsa0hBQStFO0FBYy9FLE1BQWEsZ0JBQWdCO0lBQTdCO1FBS1UsWUFBTyxHQUF1QixFQUFFLENBQUM7UUFDakMsbUJBQWMsR0FBOEIsRUFBRSxDQUFDO1FBQy9DLGtCQUFhLEdBQTZCLEVBQUUsQ0FBQztRQVE3Qyx3QkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBRXBELGlCQUFZLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEQsZ0JBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUvQyxVQUFLLEdBQWlCLElBQUksQ0FBQztRQUMzQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFrTXBDLENBQUM7SUF2TlMsTUFBTSxDQUFDLGFBQWE7UUFDMUIsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUM1RCxDQUFDO0lBd0JNLFNBQVMsQ0FBQyxPQUFnQztRQUMvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLG1DQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBS00sZ0JBQWdCLENBQ3JCLE9BQXVDO1FBRXZDLE1BQU0sUUFBUSxHQUFHLElBQUksNENBQXVCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFLTSxlQUFlLENBQ3BCLE9BQXNDO1FBRXRDLE1BQU0sUUFBUSxHQUFHLElBQUksMkNBQXNCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFLTSxNQUFNLENBQUMsTUFBNkM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUtNLE9BQU8sQ0FBQyxLQUFZO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUtNLGdCQUFnQjtRQUNyQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FDakIsTUFBTSxDQUFDLEVBQUUsQ0FDUCxNQUFNLENBQUMsS0FBSyxJQUFJLDhCQUFtQixFQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQ25FLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUU5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBTU8sWUFBWSxDQUFDLE9BQWlDLEVBQUUsS0FBWTtRQUNsRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzNCLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ3ZFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RDtRQUVELE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ3BFLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQVM7UUFDbkMsT0FBTyw4QkFBbUIsRUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQU1PLGFBQWEsQ0FBQyxPQUEyQjtRQUMvQyxPQUFPLE9BQU87YUFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDL0IsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQU1NLFNBQVM7UUFDZCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQ3RELDhCQUFtQixFQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FDdkMsQ0FBQztRQUNGLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFJeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxXQUFXLENBQUM7UUFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxhQUFhLENBQUM7UUFFakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUtNLGdCQUFnQixDQUNyQixRQUFnQyxFQUNoQyxNQUFnQztRQUVoQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyw4QkFBbUIsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3JFLE9BQU87U0FDUjtRQUdELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUNqQixNQUFNLENBQUMsRUFBRSxDQUNQLE1BQU0sQ0FBQyxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtZQUMzQiw4QkFBbUIsRUFBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FDbEUsQ0FDRixDQUFDO1FBQ0YsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QixPQUFPO1NBQ1I7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBSWxDLE9BQU87YUFDSixPQUFPLEVBQUU7YUFDVCxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVoRSxPQUFPLENBQUMsd0JBQXdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsd0JBQXdCLEdBQUcsYUFBYSxDQUFDO1FBRWpELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBeE5ELDRDQXdOQzs7Ozs7Ozs7Ozs7Ozs7O0FDblBELHNIQUk4QjtBQUg1QixxSkFBdUI7QUFDdkIsMklBQWtCO0FBQ2xCLG1KQUFzQjtBQU94QixnSEFBc0Q7QUFBN0MscUlBQWdCO0FBTXpCLGdIQUFzRDtBQUE3QyxxSUFBZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ2hCekIsOEdBQTZDO0FBc0I3QyxNQUFhLFdBQVc7SUErQ3RCLFlBQW1CLElBQVUsRUFBRSxRQUFjO1FBYnRDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFTdkIsWUFBTyxHQUFzQixJQUFJLENBQUM7UUFFbEMsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUd2QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFLTSxVQUFVLENBQUMsT0FBbUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQU1NLE9BQU8sQ0FBQyxRQUFjLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQWlCO1FBQ3hFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLGNBQUksRUFBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxNQUFNLEtBQUssR0FBRyxVQUFJLENBQUMsR0FBRyxDQUFDLFVBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxNQUFNLElBQUksR0FBRyxVQUFJLENBQUMsR0FBRyxDQUFDLFVBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxFLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMs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Ozs7Ozs7QUNqSmpELHlFQUFnQztBQUF2QixvR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQWQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZ2h0aW5nLTJkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yL3BhcnNlY29sb3IuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9jb3JlL0dsQ29udGV4dC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2NvcmUvdXRpbGl0aWVzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0FjdG9yLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0Nhc3Rlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9MaWdodC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9MaWdodGluZ1N5c3RlbS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9TY2VuZU9iamVjdC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9TaGFkZXJQYXNzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL1N1cmZhY2UudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvV2FsbC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9tZXJnZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvcmVmbGVjdGlvbnMvUmVmbGVjdGlvblJlY2VpdmVyLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL3JlZmxlY3Rpb25zL1JlZmxlY3Rpb25Tb3VyY2UudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvcmVmbGVjdGlvbnMvUmVmbGVjdGlvblN5c3RlbS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9yZWZsZWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy93YXRlci9SaXBwbGVGaWVsZC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy93YXRlci9XYXRlclBhc3MudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvd2F0ZXIvV2F0ZXJSZWdpb24udHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvd2F0ZXIvV2F0ZXJTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvd2F0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvd29ybGQvV29ybGQudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvd29ybGQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9saWdodGluZy0yZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkxpZ2h0aW5nMkRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGlnaHRpbmcyRFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvKlxyXG5cclxuUGFyc2UgYSB2YWxpZCBDU1MgY29sb3Igc3RyaW5nIGludG8gYW4gb2JqZWN0IGxpa2U6IHsgciwgZywgYiwgYSB9XHJcblByb3BlcnRpZXMgd2lsbCBoYXZlIHRoZSBjb3JyZWN0IGludGVydmFsIGFuZCBwcmVjaXNpb24uXHJcblZhbGlkIGlucHV0IGV4YW1wbGVzOlxyXG5cclxucmVkXHJcbiNmMDBcclxuI2ZmMDAwMFxyXG4jZmYwMDAwZmZcclxucmdiKDI1NSwgMCwgMClcclxucmdiKDEwMCUsIDAlLCAwJSlcclxucmdiYSgyNTUsIDAsIDAsIDEpXHJcbnJnYmEoMTAwJSwgMCUsIDAlLCAxKVxyXG5oc2woMCwgMTAwJSwgNTAlKVxyXG5oc2xhKDAsIDEwMCUsIDUwJSwgMSlcclxuXHJcbiovXHJcbmNvbnN0IHBhcnNlQ29sb3IgPSAoZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgbmFtZXMgPSB7XHJcblx0XHRcImFsaWNlYmx1ZVwiOiBcImYwZjhmZlwiLFxyXG5cdFx0XCJhbnRpcXVld2hpdGVcIjogXCJmYWViZDdcIixcclxuXHRcdFwiYXF1YVwiOiBcIjBmZlwiLFxyXG5cdFx0XCJhcXVhbWFyaW5lXCI6IFwiN2ZmZmQ0XCIsXHJcblx0XHRcImF6dXJlXCI6IFwiZjBmZmZmXCIsXHJcblx0XHRcImJlaWdlXCI6IFwiZjVmNWRjXCIsXHJcblx0XHRcImJpc3F1ZVwiOiBcImZmZTRjNFwiLFxyXG5cdFx0XCJibGFja1wiOiBcIjAwMFwiLFxyXG5cdFx0XCJibGFuY2hlZGFsbW9uZFwiOiBcImZmZWJjZFwiLFxyXG5cdFx0XCJibHVlXCI6IFwiMDBmXCIsXHJcblx0XHRcImJsdWV2aW9sZXRcIjogXCI4YTJiZTJcIixcclxuXHRcdFwiYnJvd25cIjogXCJhNTJhMmFcIixcclxuXHRcdFwiYnVybHl3b29kXCI6IFwiZGViODg3XCIsXHJcblx0XHRcImNhZGV0Ymx1ZVwiOiBcIjVmOWVhMFwiLFxyXG5cdFx0XCJjaGFydHJldXNlXCI6IFwiN2ZmZjAwXCIsXHJcblx0XHRcImNob2NvbGF0ZVwiOiBcImQyNjkxZVwiLFxyXG5cdFx0XCJjb3JhbFwiOiBcImZmN2Y1MFwiLFxyXG5cdFx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBcIjY0OTVlZFwiLFxyXG5cdFx0XCJjb3Juc2lsa1wiOiBcImZmZjhkY1wiLFxyXG5cdFx0XCJjcmltc29uXCI6IFwiZGMxNDNjXCIsXHJcblx0XHRcImN5YW5cIjogXCIwZmZcIixcclxuXHRcdFwiZGFya2JsdWVcIjogXCIwMDAwOGJcIixcclxuXHRcdFwiZGFya2N5YW5cIjogXCIwMDhiOGJcIixcclxuXHRcdFwiZGFya2dvbGRlbnJvZFwiOiBcImI4ODYwYlwiLFxyXG5cdFx0XCJkYXJrZ3JheVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJrZ3JlZW5cIjogXCIwMDY0MDBcIixcclxuXHRcdFwiZGFya2dyZXlcIjogXCJhOWE5YTlcIixcclxuXHRcdFwiZGFya2toYWtpXCI6IFwiYmRiNzZiXCIsXHJcblx0XHRcImRhcmttYWdlbnRhXCI6IFwiOGIwMDhiXCIsXHJcblx0XHRcImRhcmtvbGl2ZWdyZWVuXCI6IFwiNTU2YjJmXCIsXHJcblx0XHRcImRhcmtvcmFuZ2VcIjogXCJmZjhjMDBcIixcclxuXHRcdFwiZGFya29yY2hpZFwiOiBcIjk5MzJjY1wiLFxyXG5cdFx0XCJkYXJrcmVkXCI6IFwiOGIwMDAwXCIsXHJcblx0XHRcImRhcmtzYWxtb25cIjogXCJlOTk2N2FcIixcclxuXHRcdFwiZGFya3NlYWdyZWVuXCI6IFwiOGZiYzhmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWJsdWVcIjogXCI0ODNkOGJcIixcclxuXHRcdFwiZGFya3NsYXRlZ3JheVwiOiBcIjJmNGY0ZlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmV5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmt0dXJxdW9pc2VcIjogXCIwMGNlZDFcIixcclxuXHRcdFwiZGFya3Zpb2xldFwiOiBcIjk0MDBkM1wiLFxyXG5cdFx0XCJkZWVwcGlua1wiOiBcImZmMTQ5M1wiLFxyXG5cdFx0XCJkZWVwc2t5Ymx1ZVwiOiBcIjAwYmZmZlwiLFxyXG5cdFx0XCJkaW1ncmF5XCI6IFwiNjk2OTY5XCIsXHJcblx0XHRcImRpbWdyZXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZG9kZ2VyYmx1ZVwiOiBcIjFlOTBmZlwiLFxyXG5cdFx0XCJmaXJlYnJpY2tcIjogXCJiMjIyMjJcIixcclxuXHRcdFwiZmxvcmFsd2hpdGVcIjogXCJmZmZhZjBcIixcclxuXHRcdFwiZm9yZXN0Z3JlZW5cIjogXCIyMjhiMjJcIixcclxuXHRcdFwiZnVjaHNpYVwiOiBcImYwZlwiLFxyXG5cdFx0XCJnYWluc2Jvcm9cIjogXCJkY2RjZGNcIixcclxuXHRcdFwiZ2hvc3R3aGl0ZVwiOiBcImY4ZjhmZlwiLFxyXG5cdFx0XCJnb2xkXCI6IFwiZmZkNzAwXCIsXHJcblx0XHRcImdvbGRlbnJvZFwiOiBcImRhYTUyMFwiLFxyXG5cdFx0XCJncmF5XCI6IFwiODA4MDgwXCIsXHJcblx0XHRcImdyZWVuXCI6IFwiMDA4MDAwXCIsXHJcblx0XHRcImdyZWVueWVsbG93XCI6IFwiYWRmZjJmXCIsXHJcblx0XHRcImdyZXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiaG9uZXlkZXdcIjogXCJmMGZmZjBcIixcclxuXHRcdFwiaG90cGlua1wiOiBcImZmNjliNFwiLFxyXG5cdFx0XCJpbmRpYW5yZWRcIjogXCJjZDVjNWNcIixcclxuXHRcdFwiaW5kaWdvXCI6IFwiNGIwMDgyXCIsXHJcblx0XHRcIml2b3J5XCI6IFwiZmZmZmYwXCIsXHJcblx0XHRcImtoYWtpXCI6IFwiZjBlNjhjXCIsXHJcblx0XHRcImxhdmVuZGVyXCI6IFwiZTZlNmZhXCIsXHJcblx0XHRcImxhdmVuZGVyYmx1c2hcIjogXCJmZmYwZjVcIixcclxuXHRcdFwibGF3bmdyZWVuXCI6IFwiN2NmYzAwXCIsXHJcblx0XHRcImxlbW9uY2hpZmZvblwiOiBcImZmZmFjZFwiLFxyXG5cdFx0XCJsaWdodGJsdWVcIjogXCJhZGQ4ZTZcIixcclxuXHRcdFwibGlnaHRjb3JhbFwiOiBcImYwODA4MFwiLFxyXG5cdFx0XCJsaWdodGN5YW5cIjogXCJlMGZmZmZcIixcclxuXHRcdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogXCJmYWZhZDJcIixcclxuXHRcdFwibGlnaHRncmF5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0Z3JlZW5cIjogXCI5MGVlOTBcIixcclxuXHRcdFwibGlnaHRncmV5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0cGlua1wiOiBcImZmYjZjMVwiLFxyXG5cdFx0XCJsaWdodHNhbG1vblwiOiBcImZmYTA3YVwiLFxyXG5cdFx0XCJsaWdodHNlYWdyZWVuXCI6IFwiMjBiMmFhXCIsXHJcblx0XHRcImxpZ2h0c2t5Ymx1ZVwiOiBcIjg3Y2VmYVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JheVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JleVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBcImIwYzRkZVwiLFxyXG5cdFx0XCJsaWdodHllbGxvd1wiOiBcImZmZmZlMFwiLFxyXG5cdFx0XCJsaW1lXCI6IFwiMGYwXCIsXHJcblx0XHRcImxpbWVncmVlblwiOiBcIjMyY2QzMlwiLFxyXG5cdFx0XCJsaW5lblwiOiBcImZhZjBlNlwiLFxyXG5cdFx0XCJtYWdlbnRhXCI6IFwiZjBmXCIsXHJcblx0XHRcIm1hcm9vblwiOiBcIjgwMDAwMFwiLFxyXG5cdFx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFwiNjZjZGFhXCIsXHJcblx0XHRcIm1lZGl1bWJsdWVcIjogXCIwMDAwY2RcIixcclxuXHRcdFwibWVkaXVtb3JjaGlkXCI6IFwiYmE1NWQzXCIsXHJcblx0XHRcIm1lZGl1bXB1cnBsZVwiOiBcIjkzNzBkYlwiLFxyXG5cdFx0XCJtZWRpdW1zZWFncmVlblwiOiBcIjNjYjM3MVwiLFxyXG5cdFx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogXCI3YjY4ZWVcIixcclxuXHRcdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogXCIwMGZhOWFcIixcclxuXHRcdFwibWVkaXVtdHVycXVvaXNlXCI6IFwiNDhkMWNjXCIsXHJcblx0XHRcIm1lZGl1bXZpb2xldHJlZFwiOiBcImM3MTU4NVwiLFxyXG5cdFx0XCJtaWRuaWdodGJsdWVcIjogXCIxOTE5NzBcIixcclxuXHRcdFwibWludGNyZWFtXCI6IFwiZjVmZmZhXCIsXHJcblx0XHRcIm1pc3R5cm9zZVwiOiBcImZmZTRlMVwiLFxyXG5cdFx0XCJtb2NjYXNpblwiOiBcImZmZTRiNVwiLFxyXG5cdFx0XCJuYXZham93aGl0ZVwiOiBcImZmZGVhZFwiLFxyXG5cdFx0XCJuYXZ5XCI6IFwiMDAwMDgwXCIsXHJcblx0XHRcIm9sZGxhY2VcIjogXCJmZGY1ZTZcIixcclxuXHRcdFwib2xpdmVcIjogXCI4MDgwMDBcIixcclxuXHRcdFwib2xpdmVkcmFiXCI6IFwiNmI4ZTIzXCIsXHJcblx0XHRcIm9yYW5nZVwiOiBcImZmYTUwMFwiLFxyXG5cdFx0XCJvcmFuZ2VyZWRcIjogXCJmZjQ1MDBcIixcclxuXHRcdFwib3JjaGlkXCI6IFwiZGE3MGQ2XCIsXHJcblx0XHRcInBhbGVnb2xkZW5yb2RcIjogXCJlZWU4YWFcIixcclxuXHRcdFwicGFsZWdyZWVuXCI6IFwiOThmYjk4XCIsXHJcblx0XHRcInBhbGV0dXJxdW9pc2VcIjogXCJhZmVlZWVcIixcclxuXHRcdFwicGFsZXZpb2xldHJlZFwiOiBcImRiNzA5M1wiLFxyXG5cdFx0XCJwYXBheWF3aGlwXCI6IFwiZmZlZmQ1XCIsXHJcblx0XHRcInBlYWNocHVmZlwiOiBcImZmZGFiOVwiLFxyXG5cdFx0XCJwZXJ1XCI6IFwiY2Q4NTNmXCIsXHJcblx0XHRcInBpbmtcIjogXCJmZmMwY2JcIixcclxuXHRcdFwicGx1bVwiOiBcImRkYTBkZFwiLFxyXG5cdFx0XCJwb3dkZXJibHVlXCI6IFwiYjBlMGU2XCIsXHJcblx0XHRcInB1cnBsZVwiOiBcIjgwMDA4MFwiLFxyXG5cdFx0XCJyZWJlY2NhcHVycGxlXCI6IFwiNjM5XCIsXHJcblx0XHRcInJlZFwiOiBcImYwMFwiLFxyXG5cdFx0XCJyb3N5YnJvd25cIjogXCJiYzhmOGZcIixcclxuXHRcdFwicm95YWxibHVlXCI6IFwiNDE2OWUxXCIsXHJcblx0XHRcInNhZGRsZWJyb3duXCI6IFwiOGI0NTEzXCIsXHJcblx0XHRcInNhbG1vblwiOiBcImZhODA3MlwiLFxyXG5cdFx0XCJzYW5keWJyb3duXCI6IFwiZjRhNDYwXCIsXHJcblx0XHRcInNlYWdyZWVuXCI6IFwiMmU4YjU3XCIsXHJcblx0XHRcInNlYXNoZWxsXCI6IFwiZmZmNWVlXCIsXHJcblx0XHRcInNpZW5uYVwiOiBcImEwNTIyZFwiLFxyXG5cdFx0XCJzaWx2ZXJcIjogXCJjMGMwYzBcIixcclxuXHRcdFwic2t5Ymx1ZVwiOiBcIjg3Y2VlYlwiLFxyXG5cdFx0XCJzbGF0ZWJsdWVcIjogXCI2YTVhY2RcIixcclxuXHRcdFwic2xhdGVncmF5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNsYXRlZ3JleVwiOiBcIjcwODA5MFwiLFxyXG5cdFx0XCJzbm93XCI6IFwiZmZmYWZhXCIsXHJcblx0XHRcInNwcmluZ2dyZWVuXCI6IFwiMDBmZjdmXCIsXHJcblx0XHRcInN0ZWVsYmx1ZVwiOiBcIjQ2ODJiNFwiLFxyXG5cdFx0XCJ0YW5cIjogXCJkMmI0OGNcIixcclxuXHRcdFwidGVhbFwiOiBcIjAwODA4MFwiLFxyXG5cdFx0XCJ0aGlzdGxlXCI6IFwiZDhiZmQ4XCIsXHJcblx0XHRcInRvbWF0b1wiOiBcImZmNjM0N1wiLFxyXG5cdFx0XCJ0dXJxdW9pc2VcIjogXCI0MGUwZDBcIixcclxuXHRcdFwidmlvbGV0XCI6IFwiZWU4MmVlXCIsXHJcblx0XHRcIndoZWF0XCI6IFwiZjVkZWIzXCIsXHJcblx0XHRcIndoaXRlXCI6IFwiZmZmXCIsXHJcblx0XHRcIndoaXRlc21va2VcIjogXCJmNWY1ZjVcIixcclxuXHRcdFwieWVsbG93XCI6IFwiZmYwXCIsXHJcblx0XHRcInllbGxvd2dyZWVuXCI6IFwiOWFjZDMyXCIsXHJcblx0XHRcInRyYW5zcGFyZW50XCI6IFwiMDAwMDAwMDBcIlxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgY2xhbXAgPSAobiwgYSwgYikgPT4gbiA8IGEgPyBhIDogKG4gPiBiID8gYiA6IG4pLFx0Ly8gQ2xhbXAgbiBpbiBpbnRlcnZhbCBbYSwgYl1cclxuXHRcdHJvdW5kID0gKG4sIGQpID0+IHtcdC8vIFJvdW5kIG4gdG8gbmVhcmVzdCBpbnRlZ2VyLCBvciB0byBkIGRlY2ltYWwgcGxhY2VzIChpZiBkIGlzIGRlZmluZWQpXHJcblx0XHRcdHZhciBwID0gTWF0aC5wb3coMTAsIGQgfHwgMCk7XHJcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKG4gKiBwKSAvIHA7XHJcblx0XHR9LFxyXG5cdFx0aGkgPSBuID0+IGNsYW1wKHBhcnNlSW50KG4sIDE2KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRoZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1LCAyKSwgMCwgMSksXHQvLyBDb252ZXJ0IDItZGlnaXQgaGV4IHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHNpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pKSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0c2YgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobiksIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pIC8gMTAwICogMjU1KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHR1ZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDM2MCwgMCwgMSksXHQvLyBDb252ZXJ0IGh1ZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRwZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDEwMCwgMCwgMSk7XHQvLyBDb252ZXJ0IHBlcmNlbnRhZ2Ugc3RyaW5nIHRvIGZsb2F0IGluIGludGVydmFsIFswLCAxXVxyXG5cdFxyXG5cdC8vIENvbnZlcnQgaHNsIHRvIHJnYiwgYWxwaGEgdmFsdWUgZ2V0cyBwYXNzZWQgc3RyYWlnaHQgdGhyb3VnaFxyXG5cdC8vIGgsIHMsIGwgdmFsdWVzIGFyZSBhc3N1bWVkIHRvIGJlIGluIGludGVydmFsIFswLCAxXVxyXG5cdC8vIFJldHVybnMgYW4gb2JqZWN0IGxpa2UgeyByLCBnLCBiLCBhIH1cclxuXHQvLyBodHRwOi8vYXhvbmZsdXguY29tL2hhbmR5LXJnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY1xyXG5cdGZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwsIGEpIHtcclxuXHRcdHZhciByLCBnLCBiLFxyXG5cdFx0XHRodWUgPSBmdW5jdGlvbihwLCBxLCB0KSB7XHJcblx0XHRcdFx0aWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxyXG5cdFx0XHRcdGlmICh0ID4gMSkgeyB0IC09IDE7IH1cclxuXHRcdFx0XHRpZiAodCA8IDEgLyA2KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0IH07XHJcblx0XHRcdFx0aWYgKHQgPCAxIC8gMikgeyByZXR1cm4gcTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMiAvIDMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2IH07XHJcblx0XHRcdFx0cmV0dXJuIHA7XHJcblx0XHRcdH07XHJcblx0XHRpZiAocyA9PSAwKSB7XHJcblx0XHRcdHIgPSBnID0gYiA9IGw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHMsXHJcblx0XHRcdFx0cCA9IDIgKiBsIC0gcTtcclxuXHRcdFx0ciA9IGh1ZShwLCBxLCBoICsgMSAvIDMpO1xyXG5cdFx0XHRnID0gaHVlKHAsIHEsIGgpO1xyXG5cdFx0XHRiID0gaHVlKHAsIHEsIGggLSAxIC8gMyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4geyByOiByb3VuZChyICogMjU1KSwgZzogcm91bmQoZyAqIDI1NSksIGI6IHJvdW5kKGIgKiAyNTUpLCBhOiBhIH07XHJcblx0fVxyXG5cdHJldHVybiBmdW5jdGlvbihjKSB7XHJcblx0XHR2YXIgbyA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBtID0gbnVsbDtcclxuXHRcdGlmICh0eXBlb2YgYyA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGlmIChjIGluIG5hbWVzKSB7IGMgPSBcIiNcIiArIG5hbWVzW2NdOyB9XHJcblx0XHRcdGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV0pKFthLWYwLTldKShbYS1mMC05XSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0gKyBtWzFdKSwgZzogaGkobVsyXSArIG1bMl0pLCBiOiBoaShtWzNdICsgbVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdKSwgZzogaGkobVsyXSksIGI6IGhpKG1bM10pLCBhOiBoZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiBzZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8pXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvaHNsYVxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIHNmKG1bNF0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYyA9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGlmIChjLnIgIT09IHVuZGVmaW5lZCAmJiBjLmcgIT0gdW5kZWZpbmVkICYmIGMuYiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2koYy5yKSwgZzogc2koYy5nKSwgYjogc2koYy5iKSwgYTogc2YoYy5hIHx8IDEpIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoYy5oICE9PSB1bmRlZmluZWQgJiYgYy5zICE9PSB1bmRlZmluZWQgJiYgYy5sICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYoYy5oKSwgcGYoYy5zKSwgcGYoYy5sKSwgc2YoYy5hIHx8IDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG87XHJcblx0fTtcclxufSgpKTtcclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0geyBwYXJzZUNvbG9yIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBNZW1vaXplIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgVGhlIGZ1bmN0aW9uIHRvIG1lbW9pemVcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBtZW1vaXplZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxuICovXG5jb25zdCBtZW1vaXplID0gZiA9PiB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIHJldHVybiBjYWNoZVthcmdzXSA/PyAoY2FjaGVbYXJnc10gPSBmLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIE51bWJlciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXIgYlxuICogQHBhcmFtIHtudW1iZXJ9IFtwPU51bWJlci5FUFNJTE9OXSBUaGUgcHJlY2lzaW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG51bWJlcnMgYSBhbmQgYiBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICovXG5jb25zdCBmbG9hdEVxdWFscyA9IChhLCBiLCBwID0gTnVtYmVyLkVQU0lMT04pID0+IE1hdGguYWJzKGEgLSBiKSA8IHA7XG5cbi8qKlxuICogQ2xhbXAgYSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciB0byBjbGFtcFxuICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gVGhlIG1pbmltdW0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIFRoZSBtYXhpbXVtIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgY2xhbXBlZCBudW1iZXJcbiAqL1xuY29uc3QgY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG5cbi8qKlxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgZnJvbSB3aGljaCB0byBnZXQgdGhlIGZyYWN0aW9uYWwgcGFydFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcbiAqL1xuY29uc3QgZnJhYyA9IGEgPT4gYSA+PSAwID8gYSAtIE1hdGguZmxvb3IoYSkgOiBhIC0gTWF0aC5jZWlsKGEpO1xuXG4vKipcbiAqIFJvdW5kIG4gdG8gZCBkZWNpbWFsIHBsYWNlc1xuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byByb3VuZFxuICogQHBhcmFtIHtudW1iZXJ9IFtkPTBdIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gcm91bmQgdG9cbiAqIEByZXR1cm4ge251bWJlcn0gQSByb3VuZGVkIG51bWJlclxuICovXG5jb25zdCByb3VuZCA9IChuLCBkID0gMCkgPT4ge1xuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIGQpO1xuICByZXR1cm4gTWF0aC5yb3VuZChuICogcCArIE51bWJlci5FUFNJTE9OKSAvIHA7XG59XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xuXG4vKipcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMCBUb3AtcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaXggSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB4XG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXG4gKi9cbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3QgcmVtYXAgPSAoaSwgYTEsIGEyLCBiMSwgYjIpID0+IGIxICsgKGkgLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG5cbi8qKlxuICogRG8gYSBzbW9vdGggaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBzbW9vdGhzdGVwID0gKGEsIGIsIGkpID0+IGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKi9cbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5jb25zdCByYW5kb21JbnRCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0yXSBUaGUgbnVtYmVyIG9mIHNhbXBsZXNcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbSA9IChtdSA9IDAuNSwgc2lnbWEgPSAwLjUsIHNhbXBsZXMgPSAyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XG4gICAgdG90YWwgKz0gTWF0aC5yYW5kb20oKTtcbiAgfVxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XG59O1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB3IEFuIGFycmF5IG9mIHdlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XG4gKi9cbmNvbnN0IHdlaWdodGVkUmFuZG9tID0gdyA9PiB7XG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICB3aGlsZSAodG90YWwgPiByKSB7XG4gICAgdG90YWwgLT0gd1tuKytdO1xuICB9XG4gIHJldHVybiBuIC0gMTtcbn07XG5cbi8qKlxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxuICogQGNhbGxiYWNrIEludGVycG9sYXRpb25GdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuXG4vKipcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQSBudW1iZXIgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHBhcmFtIHtJbnRlcnBvbGF0aW9uRnVuY3Rpb259IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxuICovXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcbiAgY29uc3QgcCA9IGNsYW1wKE1hdGgudHJ1bmMocyksIDAsIGEubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuXG4vKipcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHJldHVybiB7bnVtYmVyfSBhIVxuICovXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xuICAgIHJlc3VsdCAqPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxuICovXG5jb25zdCBucHIgPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gZmFjdG9yaWFsKG4gLSByKTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuQ3JcbiAqL1xuY29uc3QgbmNyID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbGwgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogcGVybXV0YXRpb25zKFsxLCAyLCAzXSwgMik7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCAyXSxcbiAqICAgWzEsIDNdLFxuICogICBbMiwgMV0sXG4gKiAgIFsyLCAzXSxcbiAqICAgWzMsIDFdLFxuICogICBbMywgMl1cbiAqIF1cbiAqIGBgYFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBjaG9vc2UgaW4gZWFjaCBwZXJtdXRhdGlvblxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBwZXJtdXRhdGlvbiBhcnJheXNcbiAqL1xuY29uc3QgcGVybXV0YXRpb25zID0gKGEsIHIpID0+IHtcbiAgaWYgKHIgPT09IDEpIHtcbiAgICByZXR1cm4gYS5tYXAoaXRlbSA9PiBbaXRlbV0pO1xuICB9XG5cbiAgcmV0dXJuIGEucmVkdWNlKFxuICAgIChhY2MsIGl0ZW0sIGkpID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLnBlcm11dGF0aW9ucyhhLnNsaWNlKDAsIGkpLmNvbmNhdChhLnNsaWNlKGkgKyAxKSksIHIgLSAxKS5tYXAoYyA9PiBbaXRlbSwgLi4uY10pLFxuICAgIF0sXG4gICAgW11cbiAgKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbGwgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY29tYmluYXRpb25zKFsxLCAyLCAzXSwgMik7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCAyXSxcbiAqICAgWzEsIDNdLFxuICogICBbMiwgM11cbiAqIF1cbiAqIGBgYFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBjaG9vc2UgaW4gZWFjaCBjb21iaW5hdGlvblxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBjb21iaW5hdGlvbiBhcnJheXNcbiAqL1xuY29uc3QgY29tYmluYXRpb25zID0gKGEsIHIpID0+IHtcbiAgaWYgKHIgPT09IDEpIHtcbiAgICByZXR1cm4gYS5tYXAoaXRlbSA9PiBbaXRlbV0pO1xuICB9XG5cbiAgcmV0dXJuIGEucmVkdWNlKFxuICAgIChhY2MsIGl0ZW0sIGkpID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLmNvbWJpbmF0aW9ucyhhLnNsaWNlKGkgKyAxKSwgciAtIDEpLm1hcChjID0+IFtpdGVtLCAuLi5jXSksXG4gICAgXSxcbiAgICBbXVxuICApO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjYXJ0ZXNpYW4gcHJvZHVjdCBvZiBhcnJheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNhcnRlc2lhbihbMSwgMiwgM10sIFsnYScsICdiJ10pO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgXCJhXCJdLFxuICogICBbMSwgXCJiXCJdLFxuICogICBbMiwgXCJhXCJdLFxuICogICBbMiwgXCJiXCJdLFxuICogICBbMywgXCJhXCJdLFxuICogICBbMywgXCJiXCJdXG4gKiBdXG4gKiBgYGBcbiAqL1xuY29uc3QgY2FydGVzaWFuID0gKC4uLmFycikgPT5cbiAgYXJyLnJlZHVjZShcbiAgICAoYSwgYikgPT4gYS5mbGF0TWFwKGMgPT4gYi5tYXAoZCA9PiBbLi4uYywgZF0pKSxcbiAgICBbW11dXG4gICk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhcnJheSB2YWx1ZXNcbiAqIEBjYWxsYmFjayBUaW1lc0Z1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IFRoZSBhcnJheSB2YWx1ZVxuICovXG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHtUaW1lc0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxuICovXG5jb25zdCB0aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgbnVtYmVycyAwLT4obiAtIDEpXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcbiAqL1xuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XG5cbi8qKlxuICogWmlwIG11bHRpcGxlIGFycmF5cyB0b2dldGhlciwgaS5lLiAoWzEsIDIsIDNdLCBbYSwgYiwgY10pID0+IFtbMSwgYV0sIFsyLCBiXSwgWzMsIGNdXVxuICogQHBhcmFtIHsuLi5BcnJheTwqPn0gYSBUaGUgYXJyYXlzIHRvIHppcFxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fVxuICovXG5jb25zdCB6aXAgPSAoLi4uYSkgPT4gdGltZXMoaSA9PiBhLm1hcChhID0+IGFbaV0pLCBNYXRoLm1heCguLi5hLm1hcChhID0+IGEubGVuZ3RoKSkpO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQHBhcmFtIHtBcnJheTwqPn0gYSBUaGUgYXJyYXkgdG8gYWNjZXNzXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5IHdpdGhvdXQgcmVtb3ZpbmcgaXRcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4geyp9IFRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgcGVlayA9IChhKSA9PiB7XG4gIGlmICghYS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGFbYS5sZW5ndGggLSAxXTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBwb3NpdGlvbiBpbiBhbiB1bnJvbGxlZCAyZCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gdyBUaGUgd2lkdGggb2YgdGhlIDJkIGFycmF5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgaW5kZXggaW4gdGhlIHVucm9sbGVkIGFycmF5XG4gKi9cbmNvbnN0IGluZCA9ICh4LCB5LCB3KSA9PiB4ICsgeSAqIHc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwb3NpdGlvbiBmb3IgYSBnaXZlbiBpbmRleCBpbiBhbiB1bnJvbGxlZCAyZCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gdyBUaGUgd2lkdGggb2YgdGhlIDJkIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gVGhlIHBvc2l0aW9uIGFzIGEgMi10dXBsZVxuICovXG5jb25zdCBwb3MgPSAoaSwgdykgPT4gW2kgJSB3LCBNYXRoLmZsb29yKGkgLyB3KV07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4vKipcbiAqIEZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIHVzZSBmb3IgY29uY2F0ZW5hdGluZyBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEEgZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCBmbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChvW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0udG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8ICFvW2tleV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXQob1trZXldLCBjb25jYXRlbmF0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLk9iamVjdC5rZXlzKGZsYXR0ZW5lZCkucmVkdWNlKFxuICAgICAgICAoY2hpbGRBY2MsIGNoaWxkS2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmNoaWxkQWNjLFxuICAgICAgICAgIFtgJHtrZXl9JHtjb25jYXRlbmF0b3J9JHtjaGlsZEtleX1gXTogZmxhdHRlbmVkW2NoaWxkS2V5XSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApLFxuICAgIH07XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogVW5mbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byBjaGVjayBmb3IgaW4gY29uY2F0ZW5hdGVkIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gdW4tZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCB1bmZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIGxldCByZXN1bHQgPSB7fSwgdGVtcCwgc3Vic3RyaW5ncywgcHJvcGVydHksIGk7XG5cbiAgZm9yIChwcm9wZXJ0eSBpbiBvKSB7XG4gICAgc3Vic3RyaW5ncyA9IHByb3BlcnR5LnNwbGl0KGNvbmNhdGVuYXRvcik7XG4gICAgdGVtcCA9IHJlc3VsdDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vic3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmICghKHN1YnN0cmluZ3NbaV0gaW4gdGVtcCkpIHtcbiAgICAgICAgaWYgKGlzRmluaXRlKHN1YnN0cmluZ3NbaSArIDFdKSkge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRlbXAgPSB0ZW1wW3N1YnN0cmluZ3NbaV1dO1xuICAgIH1cbiAgICB0ZW1wW3N1YnN0cmluZ3Nbc3Vic3RyaW5ncy5sZW5ndGggLSAxXV0gPSBvW3Byb3BlcnR5XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEEgc3BsaXQgcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgU3BsaXRQcmVkaWNhdGVcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJyYXkgc2hvdWxkIHNwbGl0IGF0IHRoaXMgaW5kZXhcbiAqL1xuXG4vKipcbiAqIFNwbGl0IGFuIGFycmF5IGludG8gc3ViLWFycmF5cyBiYXNlZCBvbiBhIHByZWRpY2F0ZVxuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyYXlcbiAqIEBwYXJhbSB7U3BsaXRQcmVkaWNhdGV9IHByZWRpY2F0ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheXNcbiAqL1xuY29uc3Qgc3BsaXQgPSAoYXJyYXksIHByZWRpY2F0ZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBbXTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gW3ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goY3VycmVudCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUGx1Y2sga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIHBsdWNrIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGx1Y2tlZCBrZXlzXG4gKi9cbmNvbnN0IHBsdWNrID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9ba2V5XSB9KSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBFeGNsdWRlIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBleGNsdWRlIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwga2V5cyBleGNlcHQgZXhjbHVkZWQga2V5c1xuICovXG5jb25zdCBleGNsdWRlID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhvKS5maWx0ZXIoKFtrZXldKSA9PiAha2V5cy5pbmNsdWRlcyhrZXkpKVxuICApO1xufTtcblxuLyoqXG4gKiBBIGtleSB0cmFuc2Zvcm0gcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgS2V5VHJhbnNmb3JtRnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBvIFRoZSBvYmplY3QgYmVpbmcgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBjdXJyZW50IHBhdGggaW4gZG90IG5vdGF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBjdXJyZW50IGtleVxuICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gVGhlIHRyYW5zZm9ybWVkIGtleSwgb3IgbnVsbCB0byBvbWl0IHRoZSBrZXlcbiAqL1xuXG4vKipcbiAqIEEgdmFsdWUgdHJhbnNmb3JtIHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIFZhbHVlVHJhbnNmb3JtRnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBvIFRoZSBvYmplY3QgYmVpbmcgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBjdXJyZW50IHBhdGggaW4gZG90IG5vdGF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBjdXJyZW50IGtleVxuICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9IFRoZSB0cmFuc2Zvcm1lZCB2YWx1ZVxuICovXG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhbnNmb3JtIHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gbyBUaGUgb2JqZWN0IHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtLZXlUcmFuc2Zvcm1GdW5jdGlvbn0gW2tmPXVuZGVmaW5lZF0gT3B0aW9uYWwga2V5IHRyYW5zZm9ybVxuICogQHBhcmFtIHtWYWx1ZVRyYW5zZm9ybUZ1bmN0aW9ufSBbdmY9dW5kZWZpbmVkXSBPcHRpb25hbCB2YWx1ZSB0cmFuc2Zvcm1cbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIHRyYW5zZm9ybWVkIG9iamVjdFxuICovXG5jb25zdCB0cmFuc2Zvcm0gPSAobywga2YgPSB1bmRlZmluZWQsIHZmID0gdW5kZWZpbmVkKSA9PiB7XG4gIGNvbnN0IGlubmVyVHJhbnNmb3JtID0gKG9iaiwgY3VycmVudFBhdGgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBsZXQgbmV3S2V5ID0ga2V5O1xuICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICBjb25zdCBwYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0uJHtrZXl9YCA6IGtleTtcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgIG5ld1ZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICEobmV3VmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShuZXdWYWx1ZSlcbiAgICAgICkge1xuICAgICAgICBuZXdWYWx1ZSA9IGlubmVyVHJhbnNmb3JtKG5ld1ZhbHVlLCBwYXRoKTtcbiAgICAgIH0gZWxzZSBpZiAodmYpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB2ZihvYmosIHBhdGgsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGtmKSB7XG4gICAgICAgIG5ld0tleSA9IGtmKG9iaiwgcGF0aCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdLZXkgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW25ld0tleV06IG5ld1ZhbHVlLFxuICAgICAgfTtcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIGlubmVyVHJhbnNmb3JtKG8sICcnKTtcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtZW1vaXplLFxuICAgIGZsb2F0RXF1YWxzLFxuICAgIGNsYW1wLFxuICAgIGZyYWMsXG4gICAgcm91bmQsXG4gICAgbGVycCxcbiAgICB1bmxlcnAsXG4gICAgYmxlcnAsXG4gICAgcmVtYXAsXG4gICAgc21vb3Roc3RlcCxcbiAgICByYWRpYW5zLFxuICAgIGRlZ3JlZXMsXG4gICAgcmFuZG9tQmV0d2VlbixcbiAgICByYW5kb21JbnRCZXR3ZWVuLFxuICAgIGNsdFJhbmRvbSxcbiAgICBjbHRSYW5kb21JbnQsXG4gICAgd2VpZ2h0ZWRSYW5kb20sXG4gICAgbGVycEFycmF5LFxuICAgIGRvdCxcbiAgICBmYWN0b3JpYWwsXG4gICAgbnByLFxuICAgIG5jcixcbiAgICBwZXJtdXRhdGlvbnMsXG4gICAgY29tYmluYXRpb25zLFxuICAgIGNhcnRlc2lhbixcbiAgICB0aW1lcyxcbiAgICByYW5nZSxcbiAgICB6aXAsXG4gICAgYXQsXG4gICAgcGVlayxcbiAgICBpbmQsXG4gICAgcG9zLFxuICAgIGNodW5rLFxuICAgIHNodWZmbGUsXG4gICAgZmxhdCxcbiAgICB1bmZsYXQsXG4gICAgc3BsaXQsXG4gICAgcGx1Y2ssXG4gICAgZXhjbHVkZSxcbiAgICB0cmFuc2Zvcm0sXG4gIH07XG59XG4iLCIvKipcbiAqIEBvdmVydmlldyBBIHNtYWxsIHZlY3RvciBhbmQgbWF0cml4IGxpYnJhcnlcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuY29uc3QgX3ZlY190aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5jb25zdCBfdmVjX2NodW5rID0gKGEsIG4pID0+IF92ZWNfdGltZXMoaSA9PiBhLnNsaWNlKGkgKiBuLCBpICogbiArIG4pLCBNYXRoLmNlaWwoYS5sZW5ndGggLyBuKSk7XG5jb25zdCBfdmVjX2RvdCA9IChhLCBiKSA9PiBhLnJlZHVjZSgobiwgdiwgaSkgPT4gbiArIHYgKiBiW2ldLCAwKTtcbmNvbnN0IF92ZWNfaXNfdmVjMiA9IGEgPT4gdHlwZW9mIGEgPT09ICdvYmplY3QnICYmICd4JyBpbiBhICYmICd5JyBpbiBhO1xuY29uc3QgX3ZlY19pc192ZWMzID0gYSA9PiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgJ3gnIGluIGEgJiYgJ3knIGluIGEgJiYgJ3onIGluIGE7XG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlYzJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIDJkIHZlY3RvclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgMmQgdmVjdG9yLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNWZWMyKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgJ3gnIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnggPT09ICdudW1iZXInICYmXG4gICAgJ3knIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnkgPT09ICdudW1iZXInICYmXG4gICAgISgneicgaW4gdmFsdWUpXG4gICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IDJkIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ8dmVjMn0gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIG5ldyAyZCB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMyKDMsIDIpOyAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjMig0KTsgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYzIoYSk7ICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMyKCk7ICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjMiA9ICh4LCB5KSA9PiB7XG4gIGlmICgheCAmJiAheSkge1xuICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgfVxuICBpZiAoX3ZlY19pc192ZWMyKHgpKSB7XG4gICAgcmV0dXJuIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwIH07XG4gIH1cbiAgcmV0dXJuIHsgeDogeCwgeTogeSA/PyB4IH07XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gZ2V0IGNvbXBvbmVudHMgZnJvbVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XG4gKi9cbnZlYzIuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcblxuLyoqXG4gKiBDcmVhdGUgYSB2ZWN0b3IgZnJvbSBhbiBhcnJheSBvZiBjb21wb25lbnRzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbXBvbmVudHMgVGhlIGNvbXBvbmVudHMgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gQSBuZXcgdmVjdG9yXG4gKi9cbnZlYzIuZnJvbUNvbXBvbmVudHMgPSBjb21wb25lbnRzID0+IHZlYzIoLi4uY29tcG9uZW50cy5zbGljZSgwLCAyKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxuICovXG52ZWMyLnV4ID0gKCkgPT4gdmVjMigxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKi9cbnZlYzIudXkgPSAoKSA9PiB2ZWMyKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMnxudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhICsgYlxuICovXG52ZWMyLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyAoYi54ID8/IGIpLCB5OiBhLnkgKyAoYi55ID8/IGIpIH0pO1xuXG4vKipcbiAqIEFkZCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBhZGRcbiAqIEByZXR1cm5zIHt2ZWMyfSBUaGUgc3VtIG9mIHRoZSB2ZWN0b3JzXG4gKi9cbnZlYzIuYWRkbSA9ICguLi52KSA9PiB2LnJlZHVjZSgoYSwgYikgPT4gdmVjMi5hZGQoYSwgYiksIHZlYzIoKSk7XG5cbi8qKlxuICogU3VidHJhY3QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSAtIGJcbiAqL1xudmVjMi5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gKGIueCA/PyBiKSwgeTogYS55IC0gKGIueSA/PyBiKSB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBzdWJ0cmFjdFxuICogQHJldHVybnMge3ZlYzJ9IFRoZSByZXN1bHQgb2Ygc3VidHJhY3RpbmcgdGhlIHZlY3RvcnNcbiAqL1xudmVjMi5zdWJtID0gKC4uLnYpID0+IHYucmVkdWNlKChhLCBiKSA9PiB2ZWMyLnN1YihhLCBiKSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgKiBiXG4gKi9cbnZlYzIubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIChiLnggPz8gYiksIHk6IGEueSAqIChiLnkgPz8gYikgfSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3IgYnkgYSBzY2FsYXIsIGFsaWFzIGZvciB2ZWMyLm11bFxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSAqIGJcbiAqL1xudmVjMi5zY2FsZSA9IChhLCBiKSA9PiB2ZWMyLm11bChhLCBiKTtcblxuLyoqXG4gKiBEaXZpZGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgLyBiXG4gKi9cbnZlYzIuZGl2ID0gKGEsIGIpID0+ICh7IHg6IGEueCAvIChiLnggPz8gYiksIHk6IGEueSAvIChiLnkgPz8gYikgfSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMi5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMi5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWMyfSBeYVxuICovXG52ZWMyLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjMi5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMyKCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjMi5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjMn0gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMyLnJvdCA9IChhLCByKSA9PiB7XG4gIGxldCBzID0gTWF0aC5zaW4ociksXG4gICAgYyA9IE1hdGguY29zKHIpO1xuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcbn07XG5cbi8qKlxuICogRmFzdCBtZXRob2QgdG8gcm90YXRlIGEgdmVjdG9yIGJ5IC05MCwgOTAgb3IgMTgwIGRlZ3JlZXNcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgMSBmb3IgOTAgZGVncmVlcyAoY3cpLCAtMSBmb3IgLTkwIGRlZ3JlZXMgKGNjdyksIDIgb3IgLTIgZm9yIDE4MCBkZWdyZWVzXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzIucm90ZiA9IChhLCByKSA9PiB7XG4gIHN3aXRjaCAocikge1xuICAgIGNhc2UgMTogcmV0dXJuIHZlYzIoYS55LCAtYS54KTtcbiAgICBjYXNlIC0xOiByZXR1cm4gdmVjMigtYS55LCBhLngpO1xuICAgIGNhc2UgMjogY2FzZSAtMjogcmV0dXJuIHZlYzIoLWEueCwgLWEueSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIGE7XG4gIH1cbn07XG5cbi8qKlxuICogU2NhbGFyIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEgw5cgYlxuICovXG52ZWMyLmNyb3NzID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2ZWN0b3JzIGEgYW5kIGIgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xudmVjMi5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjMi5yYWQgPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLngpO1xuXG4vKipcbiAqIENvcHkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMyLmNweSA9IGEgPT4gdmVjMihhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSAyZCB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWMyTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMyfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYzIubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzIuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogU3dpenpsZSBhIHZlY3RvciB3aXRoIGEgc3RyaW5nIG9mIGNvbXBvbmVudCBsYWJlbHNcbiAqXG4gKiBUaGUgc3RyaW5nIGNhbiBjb250YWluOlxuICogLSBgeGAgb3IgYHlgXG4gKiAtIGB1YCBvciBgdmAgKGFsaWFzZXMgZm9yIGB4YCBhbmQgYHlgLCByZXNwZWN0aXZlbHkpXG4gKiAtIGBYYCwgYFlgLCBgVWAsIGBWYCAobmVnYXRlZCB2ZXJzaW9ucyBvZiB0aGUgYWJvdmUpXG4gKiAtIGAwYCBvciBgMWAgKHRoZXNlIHdpbGwgYmUgcGFzc2VkIHRocm91Z2ggdW5jaGFuZ2VkKVxuICogLSBgLmAgdG8gcmV0dXJuIHRoZSBjb21wb25lbnQgdGhhdCB3b3VsZCBub3JtYWxseSBiZSBhdCB0aGlzIHBvc2l0aW9uIChvciAwKVxuICpcbiAqIEFueSBvdGhlciBjaGFyYWN0ZXJzIHdpbGwgZGVmYXVsdCB0byAwXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBzd2l6emxlXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9Jy4uJ10gVGhlIHN3aXp6bGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgc3dpenpsZWQgY29tcG9uZW50c1xuICogQGV4YW1wbGUgPGNhcHRpb24+c3dpenpsaW5nIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMyKDMsIC0yKTtcbiAqIHZlYzIuc3dpeihhLCAneCcpOyAgICAvLyBbM11cbiAqIHZlYzIuc3dpeihhLCAneXgnKTsgICAvLyBbLTIsIDNdXG4gKiB2ZWMyLnN3aXooYSwgJ3hZJyk7ICAgLy8gWzMsIDJdXG4gKiB2ZWMyLnN3aXooYSwgJ1l5Jyk7ICAgLy8gWzIsIC0yXVxuICogdmVjMi5zd2l6KGEsICd4LngnKTsgIC8vIFszLCAtMiwgM11cbiAqIHZlYzIuc3dpeihhLCAneTAxeCcpOyAvLyBbLTIsIDAsIDEsIDNdXG4gKi9cbnZlYzIuc3dpeiA9IChhLCBzID0gJy4uJykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgcy5zcGxpdCgnJykuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSAneCc6IGNhc2UgJ3UnOiByZXN1bHQucHVzaChhLngpOyBicmVhaztcbiAgICAgIGNhc2UgJ3knOiBjYXNlICd2JzogcmVzdWx0LnB1c2goYS55KTsgYnJlYWs7XG4gICAgICBjYXNlICdYJzogY2FzZSAnVSc6IHJlc3VsdC5wdXNoKC1hLngpOyBicmVhaztcbiAgICAgIGNhc2UgJ1knOiBjYXNlICdWJzogcmVzdWx0LnB1c2goLWEueSk7IGJyZWFrO1xuICAgICAgY2FzZSAnMCc6IHJlc3VsdC5wdXNoKDApOyBicmVhaztcbiAgICAgIGNhc2UgJzEnOiByZXN1bHQucHVzaCgxKTsgYnJlYWs7XG4gICAgICBjYXNlICcuJzogcmVzdWx0LnB1c2goW2EueCwgYS55XVtpXSA/PyAwKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiByZXN1bHQucHVzaCgwKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQb2xhciBjb29yZGluYXRlcyBmb3IgYSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHBvbGFyQ29vcmRpbmF0ZXMyZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHIgVGhlIG1hZ25pdHVkZSAocmFkaXVzKSBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGhldGEgVGhlIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBwb2xhciBjb29yZGluYXRlc1xuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHJldHVybiB7cG9sYXJDb29yZGluYXRlczJkfSBUaGUgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzIucG9sYXIgPSBhID0+ICh7IHI6IHZlYzIubGVuKGEpLCB0aGV0YTogTWF0aC5hdGFuMihhLnksIGEueCkgfSk7XG5cbi8qKlxuICogQ29udmVydCBwb2xhciBjb29yZGluYXRlcyBpbnRvIGEgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbWFnbml0dWRlIChyYWRpdXMpIG9mIHRoZSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGV0YSBUaGUgYW5nbGUgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gQSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gYW5nbGUgYW5kIG1hZ25pdHVkZVxuICovXG52ZWMyLmZyb21Qb2xhciA9IChyLCB0aGV0YSkgPT4gdmVjMihyICogTWF0aC5jb3ModGhldGEpLCByICogTWF0aC5zaW4odGhldGEpKTtcblxuLyoqXG4gKiBBIDNkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjM1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geiBUaGUgeiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIDNkIHZlY3RvclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgM2QgdmVjdG9yLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNWZWMzKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgJ3gnIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnggPT09ICdudW1iZXInICYmXG4gICAgJ3knIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnkgPT09ICdudW1iZXInICYmXG4gICAgJ3onIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnogPT09ICdudW1iZXInXG4gICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IDNkIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ8dmVjM3x2ZWMyfSBbeF0gVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIGEgdmVjdG9yIHRvIGNvcHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIHRoZSB6IGNvbXBvbmVudCBpZiB4IGlzIGEgdmVjMlxuICogQHBhcmFtIHtudW1iZXJ9IFt6XSBUaGUgeiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjM30gQSBuZXcgM2QgdmVjdG9yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj52YXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMygzLCAyLCAxKTsgICAgICAgLy8gKDMsIDIsIDEpXG4gKiBsZXQgYiA9IHZlYzMoNCwgNSk7ICAgICAgICAgIC8vICg0LCA1LCAwKVxuICogbGV0IGMgPSB2ZWMzKDYpOyAgICAgICAgICAgICAvLyAoNiwgNiwgNilcbiAqIGxldCBkID0gdmVjMyhhKTsgICAgICAgICAgICAgLy8gKDMsIDIsIDEpXG4gKiBsZXQgZSA9IHZlYzMoKTsgICAgICAgICAgICAgIC8vICgwLCAwLCAwKVxuICogbGV0IGYgPSB2ZWMzKHZlYzIoMSwgMiksIDMpOyAvLyAoMSwgMiwgMylcbiAqIGxldCBnID0gdmVjMyh2ZWMyKDQsIDUpKTsgICAgLy8gKDQsIDUsIDApXG4gKi9cbmNvbnN0IHZlYzMgPSAoeCwgeSwgeikgPT4ge1xuICBpZiAoIXggJiYgIXkgJiYgIXopIHtcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwLCB6OiAwIH07XG4gIH1cbiAgaWYgKF92ZWNfaXNfdmVjMyh4KSkge1xuICAgIHJldHVybiB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCwgejogeC56IHx8IDAgfTtcbiAgfVxuICBpZiAoX3ZlY19pc192ZWMyKHgpKSB7XG4gICAgcmV0dXJuIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwLCB6OiB5IHx8IDAgfTtcbiAgfVxuICByZXR1cm4geyB4OiB4LCB5OiB5ID8/IHgsIHo6IHogPz8geCB9O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMzLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueSwgYS56XTtcblxuLyoqXG4gKiBDcmVhdGUgYSB2ZWN0b3IgZnJvbSBhbiBhcnJheSBvZiBjb21wb25lbnRzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbXBvbmVudHMgVGhlIGNvbXBvbmVudHMgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjM30gQSBuZXcgdmVjdG9yXG4gKi9cbnZlYzMuZnJvbUNvbXBvbmVudHMgPSBjb21wb25lbnRzID0+IHZlYzMoLi4uY29tcG9uZW50cy5zbGljZSgwLCAzKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDAsIDApXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHVuaXQgdmVjdG9yICgxLCAwLCAwKVxuICovXG52ZWMzLnV4ID0gKCkgPT4gdmVjMygxLCAwLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSwgMClcbiAqIEByZXR1cm4ge3ZlYzN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEsIDApXG4gKi9cbnZlYzMudXkgPSAoKSA9PiB2ZWMzKDAsIDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAwLCAxKVxuICogQHJldHVybiB7dmVjM30gQSB1bml0IHZlY3RvciAoMCwgMCwgMSlcbiAqL1xudmVjMy51eiA9ICgpID0+IHZlYzMoMCwgMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgKyBiXG4gKi9cbnZlYzMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIChiLnggPz8gYiksIHk6IGEueSArIChiLnkgPz8gYiksIHo6IGEueiArIChiLnogPz8gYikgfSk7XG5cbi8qKlxuICogQWRkIG11bHRpcGxlIHZlY3RvcnNcbiAqIEBwYXJhbSAgey4uLmFueX0gdiBWZWN0b3JzIHRvIGFkZFxuICogQHJldHVybnMge3ZlYzN9IFRoZSBzdW0gb2YgdGhlIHZlY3RvcnNcbiAqL1xudmVjMy5hZGRtID0gKC4uLnYpID0+IHYucmVkdWNlKChhLCBiKSA9PiB2ZWMzLmFkZChhLCBiKSwgdmVjMygpKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM3xudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhIC0gYlxuICovXG52ZWMzLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSAoYi54ID8/IGIpLCB5OiBhLnkgLSAoYi55ID8/IGIpLCB6OiBhLnogLSAoYi56ID8/IGIpIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG11bHRpcGxlIHZlY3RvcnNcbiAqIEBwYXJhbSAgey4uLmFueX0gdiBWZWN0b3JzIHRvIHN1YnRyYWN0XG4gKiBAcmV0dXJucyB7dmVjM30gVGhlIHJlc3VsdCBvZiBzdWJ0cmFjdGluZyB0aGUgdmVjdG9yc1xuICovXG52ZWMzLnN1Ym0gPSAoLi4udikgPT4gdi5yZWR1Y2UoKGEsIGIpID0+IHZlYzMuc3ViKGEsIGIpKTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAqIGJcbiAqL1xudmVjMy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogKGIueCA/PyBiKSwgeTogYS55ICogKGIueSA/PyBiKSwgejogYS56ICogKGIueiA/PyBiKSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvciBieSBhIHNjYWxhciwgYWxpYXMgZm9yIHZlYzMubXVsXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhICogYlxuICovXG52ZWMzLnNjYWxlID0gKGEsIGIpID0+IHZlYzMubXVsKGEsIGIpO1xuXG4vKipcbiAqIERpdmlkZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAvIGJcbiAqL1xudmVjMy5kaXYgPSAoYSwgYikgPT4gKHsgeDogYS54IC8gKGIueCA/PyBiKSwgeTogYS55IC8gKGIueSA/PyBiKSwgejogYS56IC8gKGIueiA/PyBiKSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMzLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueik7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMzLm1hbmhhdHRhbiA9IGEgPT4gTWF0aC5hYnMoYS54KSArIE1hdGguYWJzKGEueSkgKyBNYXRoLmFicyhhLnopO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWMzfSBeYVxuICovXG52ZWMzLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjMy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuLCB6OiBhLnogLyBsZW4gfSA6IHZlYzMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMzLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIHVzaW5nIGEgcm90YXRpb24gbWF0cml4XG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bWF0fSBtIFRoZSByb3RhdGlvbiBtYXRyaXhcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3QgPSAoYSwgbSkgPT4gdmVjMyhcbiAgdmVjMy5kb3QodmVjMy5mcm9tQ29tcG9uZW50cyhtYXQucm93KG0sIDEpKSwgYSksXG4gIHZlYzMuZG90KHZlYzMuZnJvbUNvbXBvbmVudHMobWF0LnJvdyhtLCAyKSksIGEpLFxuICB2ZWMzLmRvdCh2ZWMzLmZyb21Db21wb25lbnRzKG1hdC5yb3cobSwgMykpLCBhKVxuKTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zIGFyb3VuZCB0aGUgeCBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3R4ID0gKGEsIHIpID0+IHZlYzMoXG4gIGEueCxcbiAgYS55ICogTWF0aC5jb3MocikgLSBhLnogKiBNYXRoLnNpbihyKSxcbiAgYS55ICogTWF0aC5zaW4ocikgKyBhLnogKiBNYXRoLmNvcyhyKVxuKTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zIGFyb3VuZCB0aGUgeSBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3R5ID0gKGEsIHIpID0+IHZlYzMoXG4gIGEueCAqIE1hdGguY29zKHIpICsgYS56ICogTWF0aC5zaW4ociksXG4gIGEueSxcbiAgLWEueCAqIE1hdGguc2luKHIpICsgYS56ICogTWF0aC5jb3Mocilcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFucyBhcm91bmQgdGhlIHogYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90eiA9IChhLCByKSA9PiB2ZWMzKFxuICBhLnggKiBNYXRoLmNvcyhyKSAtIGEueSAqIE1hdGguc2luKHIpLFxuICBhLnggKiBNYXRoLnNpbihyKSArIGEueSAqIE1hdGguY29zKHIpLFxuICBhLnpcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIHVzaW5nIGEgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHEgVGhlIHF1YXRlcm5pb24gdG8gcm90YXRlIGJ5XG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90cSA9ICh2LCBxKSA9PiB7XG4gIGlmIChxLmxlbmd0aCAhPT0gNCkge1xuICAgIHJldHVybiB2ZWMzKCk7XG4gIH1cblxuICBjb25zdCBkID0gTWF0aC5zcXJ0KHFbMF0gKiBxWzBdICsgcVsxXSAqIHFbMV0gKyBxWzJdICogcVsyXSArIHFbM10gKiBxWzNdKTtcbiAgaWYgKGQgPT09IDApIHtcbiAgICByZXR1cm4gdmVjMygpO1xuICB9XG5cbiAgY29uc3QgdXEgPSBbcVswXSAvIGQsIHFbMV0gLyBkLCBxWzJdIC8gZCwgcVszXSAvIGRdO1xuICBjb25zdCB1ID0gdmVjMyguLi51cS5zbGljZSgwLCAzKSk7XG4gIGNvbnN0IHMgPSB1cVszXTtcbiAgcmV0dXJuIHZlYzMuYWRkKFxuICAgIHZlYzMuYWRkKFxuICAgICAgdmVjMy5tdWwodSwgMiAqIHZlYzMuZG90KHUsIHYpKSxcbiAgICAgIHZlYzMubXVsKHYsIHMgKiBzIC0gdmVjMy5kb3QodSwgdSkpXG4gICAgKSxcbiAgICB2ZWMzLm11bCh2ZWMzLmNyb3NzKHUsIHYpLCAyICogcylcbiAgKTtcbn07XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIHVzaW5nIEV1bGVyIGFuZ2xlc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGUgVGhlIEV1bGVyIGFuZ2xlcyB0byByb3RhdGUgYnlcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3RhID0gKGEsIGUpID0+IHZlYzMucm90eih2ZWMzLnJvdHkodmVjMy5yb3R4KGEsIGUueCksIGUueSksIGUueik7XG5cbi8qKlxuICogR2V0IHRoZSBjcm9zcyBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhIMOXIGJcbiAqL1xudmVjMy5jcm9zcyA9IChhLCBiKSA9PiB2ZWMzKFxuICBhLnkgKiBiLnogLSBhLnogKiBiLnksXG4gIGEueiAqIGIueCAtIGEueCAqIGIueixcbiAgYS54ICogYi55IC0gYS55ICogYi54XG4pO1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYzMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnkgJiYgYS56ID09PSBiLno7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvciBmcm9tIHRoZSB4IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMzLnJhZHggPSBhID0+IE1hdGguYXRhbjIoYS56LCBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IgZnJvbSB0aGUgeSBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjMy5yYWR5ID0gYSA9PiBNYXRoLmF0YW4yKGEueCwgYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yIGZyb20gdGhlIHogYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYzMucmFkeiA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueik7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gY29weVxuICogQHJldHVybiB7dmVjM30gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYzMuY3B5ID0gYSA9PiB2ZWMzKGEpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIDNkIHZlY3RvclxuICogQGNhbGxiYWNrIHZlYzNNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knIHwgJ3onfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4LCB5IG9yIHopXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM01hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjMy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpLCB6OiBmKGEueiwgJ3onKSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fSR7c30ke2Euen1gO1xuXG4vKipcbiAqIFN3aXp6bGUgYSB2ZWN0b3Igd2l0aCBhIHN0cmluZyBvZiBjb21wb25lbnQgbGFiZWxzXG4gKlxuICogVGhlIHN0cmluZyBjYW4gY29udGFpbjpcbiAqIC0gYHhgLCBgeWAgb3IgYHpgXG4gKiAtIGB1YCwgYHZgIG9yIGB3YCAoYWxpYXNlcyBmb3IgYHhgLCBgeWAgYW5kIGB6YCwgcmVzcGVjdGl2ZWx5KVxuICogLSBgcmAsIGBnYCBvciBgYmAgKGFsaWFzZXMgZm9yIGB4YCwgYHlgIGFuZCBgemAsIHJlc3BlY3RpdmVseSlcbiAqIC0gYFhgLCBgWWAsIGBaYCwgYFVgLCBgVmAsIGBXYCwgYFJgLCBgR2AsIGBCYCAobmVnYXRlZCB2ZXJzaW9ucyBvZiB0aGUgYWJvdmUpXG4gKiAtIGAwYCBvciBgMWAgKHRoZXNlIHdpbGwgYmUgcGFzc2VkIHRocm91Z2ggdW5jaGFuZ2VkKVxuICogLSBgLmAgdG8gcmV0dXJuIHRoZSBjb21wb25lbnQgdGhhdCB3b3VsZCBub3JtYWxseSBiZSBhdCB0aGlzIHBvc2l0aW9uIChvciAwKVxuICpcbiAqIEFueSBvdGhlciBjaGFyYWN0ZXJzIHdpbGwgZGVmYXVsdCB0byAwXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBzd2l6emxlXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9Jy4uLiddIFRoZSBzd2l6emxlIHN0cmluZ1xuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHN3aXp6bGVkIGNvbXBvbmVudHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnN3aXp6bGluZyBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMygzLCAtMiwgMSk7XG4gKiB2ZWMzLnN3aXooYSwgJ3gnKTsgICAgIC8vIFszXVxuICogdmVjMy5zd2l6KGEsICd6eXgnKTsgICAvLyBbMSwgLTIsIDNdXG4gKiB2ZWMzLnN3aXooYSwgJ3hZWicpOyAgIC8vIFszLCAyLCAtMV1cbiAqIHZlYzMuc3dpeihhLCAnWnp4Jyk7ICAgLy8gWy0xLCAxLCAzXVxuICogdmVjMy5zd2l6KGEsICd4LngnKTsgICAvLyBbMywgLTIsIDNdXG4gKiB2ZWMzLnN3aXooYSwgJ3kwMXp4Jyk7IC8vIFstMiwgMCwgMSwgMSwgM11cbiAqL1xudmVjMy5zd2l6ID0gKGEsIHMgPSAnLi4uJykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgcy5zcGxpdCgnJykuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSAneCc6IGNhc2UgJ3UnOiBjYXNlICdyJzogcmVzdWx0LnB1c2goYS54KTsgYnJlYWs7XG4gICAgICBjYXNlICd5JzogY2FzZSAndic6IGNhc2UgJ2cnOiByZXN1bHQucHVzaChhLnkpOyBicmVhaztcbiAgICAgIGNhc2UgJ3onOiBjYXNlICd3JzogY2FzZSAnYic6IHJlc3VsdC5wdXNoKGEueik7IGJyZWFrO1xuICAgICAgY2FzZSAnWCc6IGNhc2UgJ1UnOiBjYXNlICdSJzogcmVzdWx0LnB1c2goLWEueCk7IGJyZWFrO1xuICAgICAgY2FzZSAnWSc6IGNhc2UgJ1YnOiBjYXNlICdHJzogcmVzdWx0LnB1c2goLWEueSk7IGJyZWFrO1xuICAgICAgY2FzZSAnWic6IGNhc2UgJ1cnOiBjYXNlICdCJzogcmVzdWx0LnB1c2goLWEueik7IGJyZWFrO1xuICAgICAgY2FzZSAnMCc6IHJlc3VsdC5wdXNoKDApOyBicmVhaztcbiAgICAgIGNhc2UgJzEnOiByZXN1bHQucHVzaCgxKTsgYnJlYWs7XG4gICAgICBjYXNlICcuJzogcmVzdWx0LnB1c2goW2EueCwgYS55LCBhLnpdW2ldID8/IDApOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHJlc3VsdC5wdXNoKDApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBvbGFyIGNvb3JkaW5hdGVzIGZvciBhIDNkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gcG9sYXJDb29yZGluYXRlczNkXG4gKiBAcHJvcGVydHkge251bWJlcn0gciBUaGUgbWFnbml0dWRlIChyYWRpdXMpIG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aGV0YSBUaGUgdGlsdCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gcGhpIFRoZSBwYW4gYW5nbGUgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIHBvbGFyIGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcmV0dXJuIHtwb2xhckNvb3JkaW5hdGVzM2R9IFRoZSBtYWduaXR1ZGUsIHRpbHQgYW5kIHBhbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzMucG9sYXIgPSBhID0+IHtcbiAgbGV0IHIgPSB2ZWMzLmxlbihhKSxcbiAgICB0aGV0YSA9IE1hdGguYWNvcyhhLnkgLyByKSxcbiAgICBwaGkgPSBNYXRoLmF0YW4yKGEueiwgYS54KTtcbiAgcmV0dXJuIHsgciwgdGhldGEsIHBoaSB9O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHBvbGFyIGNvb3JkaW5hdGVzIGludG8gYSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBtYWduaXR1ZGUgKHJhZGl1cykgb2YgdGhlIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHRoZXRhIFRoZSB0aWx0IG9mIHRoZSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBwaGkgVGhlIHBhbiBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBhbmdsZSBhbmQgbWFnbml0dWRlXG4gKi9cbnZlYzMuZnJvbVBvbGFyID0gKHIsIHRoZXRhLCBwaGkpID0+IHtcbiAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSk7XG4gIHJldHVybiB2ZWMzKFxuICAgIHIgKiBzaW5UaGV0YSAqIE1hdGguY29zKHBoaSksXG4gICAgciAqIE1hdGguY29zKHRoZXRhKSxcbiAgICByICogc2luVGhldGEgKiBNYXRoLnNpbihwaGkpXG4gICk7XG59O1xuXG4vKipcbiAqIEEgbWF0cml4XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtIFRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbWF0cml4XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBtYXRyaXgsIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc01hdCh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICdtJyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS5tID09PSAnbnVtYmVyJyAmJlxuICAgICduJyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS5uID09PSAnbnVtYmVyJyAmJlxuICAgICdlbnRyaWVzJyBpbiB2YWx1ZSAmJlxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUuZW50cmllcylcbiAgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gW209NF0gVGhlIG51bWJlciBvZiByb3dzXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtlbnRyaWVzPVtdXSBNYXRyaXggdmFsdWVzIGluIHJlYWRpbmcgb3JkZXJcbiAqIEByZXR1cm4ge21hdH0gQSBuZXcgbWF0cml4XG4gKi9cbmNvbnN0IG1hdCA9IChtID0gNCwgbiA9IDQsIGVudHJpZXMgPSBbXSkgPT4gKHtcbiAgbSwgbixcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxufSk7XG5cbi8qKlxuICogR2V0IGFuIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XG4gKi9cbm1hdC5pZGVudGl0eSA9IG4gPT4gbWF0KG4sIG4sIEFycmF5KG4gKiBuKS5maWxsKDApLm1hcCgodiwgaSkgPT4gKyhNYXRoLmZsb29yKGkgLyBuKSA9PT0gaSAlIG4pKSk7XG5cbi8qKlxuICogR2V0IGFuIGVudHJ5IGZyb20gYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxuICovXG5tYXQuZ2V0ID0gKGEsIGksIGopID0+IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl07XG5cbi8qKlxuICogU2V0IGFuIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXG4gKi9cbm1hdC5zZXQgPSAoYSwgaSwgaiwgdikgPT4geyBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dID0gdjsgfTtcblxuLyoqXG4gKiBHZXQgYSByb3cgZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSByb3cgb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBSb3cgbSBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5yb3cgPSAoYSwgbSkgPT4ge1xuICBjb25zdCBzID0gKG0gLSAxKSAqIGEubjtcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY29sdW1uIGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQ29sdW1uIG4gZnJvbSBtYXRyaXggYVxuICovXG5tYXQuY29sID0gKGEsIG4pID0+IF92ZWNfdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpY2VzIGNhbm5vdCBiZSBtdWx0aXBsaWVkXG4gKi9cbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYS5uICE9PSBiLm0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IHJlc3VsdCA9IG1hdChhLm0sIGIubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYi5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQocmVzdWx0LCBpLCBqLCBfdmVjX2RvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIE11bHRpcGx5IGEgbWF0cml4IGJ5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHt2ZWMyfHZlYzN8bnVtYmVyW119IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlYzJ8dmVjM3xudW1iZXJbXXxmYWxzZX0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBhbmQgdmVjdG9yIGNhbm5vdCBiZSBtdWx0aXBsaWVkXG4gKi9cbm1hdC5tdWx2ID0gKGEsIGIpID0+IHtcbiAgbGV0IG4sIGJiLCBydDtcbiAgaWYgKF92ZWNfaXNfdmVjMyhiKSkge1xuICAgIGJiID0gdmVjMy5jb21wb25lbnRzKGIpO1xuICAgIG4gPSAzO1xuICAgIHJ0ID0gdmVjMy5mcm9tQ29tcG9uZW50cztcbiAgfSBlbHNlIGlmIChfdmVjX2lzX3ZlYzIoYikpIHtcbiAgICBiYiA9IHZlYzIuY29tcG9uZW50cyhiKTtcbiAgICBuID0gMjtcbiAgICBydCA9IHZlYzIuZnJvbUNvbXBvbmVudHM7XG4gIH0gZWxzZSB7XG4gICAgYmIgPSBiO1xuICAgIG4gPSBiLmxlbmd0aCA/PyAwO1xuICAgIHJ0ID0gdiA9PiB2O1xuICB9XG4gIGlmIChhLm4gIT09IG4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKF92ZWNfZG90KG1hdC5yb3coYSwgaSksIGJiKSk7XG4gIH1cbiAgcmV0dXJuIHJ0KHJlc3VsdCk7XG59XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIF92ZWNfdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bWF0fGZhbHNlfSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxmYWxzZX0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQuZGV0ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGEubSA9PT0gMSkge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF07XG4gIH1cbiAgaWYgKGEubSA9PT0gMikge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XG4gIH1cbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XG4gICAgc2lnbiAqPSAtMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59O1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gXmEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5ub3IgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgYWRqdWdhdGUgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggZnJvbSB3aGljaCB0byBnZXQgdGhlIGFkanVnYXRlXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXG4gKi9cbm1hdC5hZGogPSBhID0+IHtcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xuICByZXR1cm4gbWF0LnRyYW5zKGNvZmFjdG9ycyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBfdmVjX2NodW5rKGEuZW50cmllcywgYS5uKS5tYXAociA9PiByLmpvaW4obXMpKS5qb2luKG5zKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMyLCB2ZWMzLCBtYXQsIGlzVmVjMiwgaXNWZWMzLCBpc01hdCB9O1xufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBTY2VuZUltYWdlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgY29weVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9jb3B5LmZyYWcuZ2xzbCcpO1xuaW1wb3J0IHF1YWRTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvcXVhZC52ZXJ0Lmdsc2wnKTtcblxuZXhwb3J0IHR5cGUgR2xQcm9ncmFtID0ge1xuICBwcm9ncmFtOiBXZWJHTFByb2dyYW07XG4gIHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbj47XG59O1xuXG5leHBvcnQgdHlwZSBHbFJlbmRlclRhcmdldCA9IHtcbiAgdGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBmcmFtZWJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlcjtcbiAgc2l6ZTogdmVjMjtcbn07XG5cbi8qKlxuICogQSBXZWJHTCBjb250ZXh0IHRoYXQgY2FuIGJlIHNoYXJlZCBieSBhbnl0aGluZyByZW5kZXJpbmcgcGFydCBvZiBhIHNjZW5lXG4gKlxuICogVGV4dHVyZXMgY2FuJ3QgYmUgc2hhcmVkIGJldHdlZW4gY29udGV4dHMsIHNvIHNoYXJpbmcgYSBjb250ZXh0IG1lYW5zIHRoYXRcbiAqIHRoZSBvdXRwdXQgb2Ygb25lIHBhc3MgY2FuIGJlIHVzZWQgYnkgYW5vdGhlciB3aXRob3V0IGNvcHlpbmcgaXQgdGhyb3VnaCBhXG4gKiBjYW52YXMuXG4gKlxuICogRXZlcnl0aGluZyBpbiB0aGUgY29udGV4dCBpcyBsb3N0IHdoZW4gdGhlIGNvbnRleHQgaXMgbG9zdCwgc28gYW55dGhpbmcgdXNpbmdcbiAqIHRoaXMgc2hvdWxkIGNyZWF0ZSBpdHMgcHJvZ3JhbXMgYW5kIHRleHR1cmVzIGluIGFuIGBvbkluaXRpYWxpc2UoKWAgY2FsbGJhY2suXG4gKiBUaGUgbWV0aG9kcyBoZXJlIHNob3VsZCBvbmx5IGJlIHVzZWQgZnJvbSB0aGF0IGNhbGxiYWNrLCBvciB3aGlsZSBgYXZhaWxhYmxlYFxuICogaXMgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgR2xDb250ZXh0IHtcbiAgLyoqXG4gICAqIFRoZSB0ZXh0dXJlIHVuaXQgdXNlZCBmb3IgaW1hZ2VzIHRoYXQgYXJlIG9ubHkgbmVlZGVkIGZvciBhIHNpbmdsZSBkcmF3XG4gICAqXG4gICAqIFdlYkdMIGd1YXJhbnRlZXMgOCB0ZXh0dXJlIHVuaXRzLCB0aGlzIGlzIHRoZSBsYXN0IG9mIHRoZW1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU1BR0VfVU5JVCA9IDc7XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgb2YgdGhlIG1vc3QgcmVjZW50IHBhc3NcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICBwdWJsaWMgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgY29weVByb2dyYW06IEdsUHJvZ3JhbTtcblxuICBwcml2YXRlIGluaXRpYWxpc2VDYWxsYmFja3M6ICgoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbWFnZXMgb25seSBuZWVkIHRvIGJlIHVwbG9hZGVkIG9uY2UsIGJ1dCBjYW52YXNlcyBtaWdodCBjaGFuZ2VcbiAgICovXG4gIHByaXZhdGUgaW1hZ2VUZXh0dXJlcyA9IG5ldyBXZWFrTWFwPFNjZW5lSW1hZ2UsIFdlYkdMVGV4dHVyZT4oKTtcbiAgcHJpdmF0ZSB1cGxvYWRlZENhbnZhc2VzID0gbmV3IFNldDxTY2VuZUltYWdlPigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRsb3N0JywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgKCkgPT5cbiAgICAgIHRoaXMuaW5pdGlhbGlzZSgpXG4gICAgKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBjb250ZXh0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nbCAhPT0gbnVsbCAmJiAhdGhpcy5nbC5pc0NvbnRleHRMb3N0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB0aGF0IHNldHMgdXAgcHJvZ3JhbXMgYW5kIHRleHR1cmVzXG4gICAqXG4gICAqIFRoaXMgaXMgY2FsbGVkIHN0cmFpZ2h0IGF3YXkgaWYgdGhlIGNvbnRleHQgaXMgcmVhZHksIGFuZCBhZ2FpbiB3aGVuZXZlclxuICAgKiB0aGUgY29udGV4dCBpcyByZXN0b3JlZFxuICAgKi9cbiAgcHVibGljIG9uSW5pdGlhbGlzZShjYWxsYmFjazogKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpID0+IHZvaWQpIHtcbiAgICB0aGlzLmluaXRpYWxpc2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cbiAgICBpZiAodGhpcy5nbCkge1xuICAgICAgY2FsbGJhY2sodGhpcy5nbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuZ2wgPSBudWxsO1xuXG4gICAgY29uc3QgZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIHtcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcbiAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICBkZXB0aDogZmFsc2UsXG4gICAgICBzdGVuY2lsOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAoIWdsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dlYkdMIGlzIG5vdCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5jb3B5UHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbShjb3B5U2hhZGVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXZWJHTCBoYXMgYmVlbiBkaXNhYmxlZCcsIGUpO1xuICAgICAgdGhpcy5nbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZVRleHR1cmVzID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBnbC5jcmVhdGVCdWZmZXIoKSk7XG4gICAgZ2wuYnVmZmVyRGF0YShcbiAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDEsIDAsIDAsIDEsIDEsIDFdKSxcbiAgICAgIGdsLlNUQVRJQ19EUkFXXG4gICAgKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0NPTE9SU1BBQ0VfQ09OVkVSU0lPTl9XRUJHTCwgZ2wuTk9ORSk7XG5cbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLmhlaWdodCA9IDA7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhnbCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21waWxlU2hhZGVyKHR5cGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcpOiBXZWJHTFNoYWRlciB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSkhO1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgaWYgKFxuICAgICAgIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSAmJlxuICAgICAgIWdsLmlzQ29udGV4dExvc3QoKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSA/PyAnVW5hYmxlIHRvIGNvbXBpbGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHByb2dyYW0gZnJvbSBhIGZyYWdtZW50IHNoYWRlciwgdGhpcyB3aWxsIHVzZSB0aGUgcXVhZCB2ZXJ0ZXhcbiAgICogc2hhZGVyIHNvIGl0IGNhbiBiZSBkcmF3biB3aXRoIGBkcmF3UXVhZCgpYFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVByb2dyYW0oZnJhZ21lbnRTb3VyY2U6IHN0cmluZyk6IEdsUHJvZ3JhbSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpITtcblxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB0aGlzLmNvbXBpbGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUiwgcXVhZFNoYWRlcikpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihcbiAgICAgIHByb2dyYW0sXG4gICAgICB0aGlzLmNvbXBpbGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNvdXJjZSlcbiAgICApO1xuICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAwLCAnYV9jb3JuZXInKTtcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGlmIChcbiAgICAgICFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSAmJlxuICAgICAgIWdsLmlzQ29udGV4dExvc3QoKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pID8/ICdVbmFibGUgdG8gbGluaycpO1xuICAgIH1cblxuICAgIGNvbnN0IHVuaWZvcm1zOiBHbFByb2dyYW1bJ3VuaWZvcm1zJ10gPSB7fTtcbiAgICBjb25zdCBjb3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKSE7XG4gICAgICB1bmlmb3Jtc1tuYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvZ3JhbSwgdW5pZm9ybXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZXh0dXJlIHRoYXQgY2FuIGJlIHJlbmRlcmVkIGludG8sIHRoaXMgd2lsbCBuZWVkIHRvIGJlIGdpdmVuIGFcbiAgICogc2l6ZSB1c2luZyBgcmVzaXplVGFyZ2V0KClgXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUmVuZGVyVGFyZ2V0KCk6IEdsUmVuZGVyVGFyZ2V0IHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHR1cmU6IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBmcmFtZWJ1ZmZlcjogZ2wuY3JlYXRlRnJhbWVidWZmZXIoKSEsXG4gICAgICBzaXplOiB2ZWMyKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEgdGV4dHVyZSBhbmQgc2V0IGl0cyBmaWx0ZXJpbmdcbiAgICpcbiAgICogVGV4dHVyZXMgY2FuIG9ubHkgcmVwZWF0IGlmIHRoZWlyIHNpemUgaXMgYSBwb3dlciBvZiAyXG4gICAqL1xuICBwdWJsaWMgYmluZFRleHR1cmUoXG4gICAgdW5pdDogbnVtYmVyLFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBmaWx0ZXI6IG51bWJlcixcbiAgICByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuICAgIGNvbnN0IHdyYXAgPSByZXBlYXQgPyBnbC5SRVBFQVQgOiBnbC5DTEFNUF9UT19FREdFO1xuXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXQpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBmaWx0ZXIpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBmaWx0ZXIpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIHdyYXApO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIHdyYXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIGEgdGV4dHVyZSB3aXRoIGFuIGltYWdlXG4gICAqL1xuICBwdWJsaWMgdXBsb2FkKFxuICAgIHVuaXQ6IG51bWJlcixcbiAgICB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsXG4gICAgaW1hZ2U6IFNjZW5lSW1hZ2UsXG4gICAgZmlsdGVyOiBudW1iZXIsXG4gICAgcmVwZWF0OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIHRoaXMuYmluZFRleHR1cmUodW5pdCwgdGV4dHVyZSwgZmlsdGVyLCByZXBlYXQpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIGEgdGV4dHVyZSB3aXRoIFJHQkEgcGl4ZWwgZGF0YVxuICAgKi9cbiAgcHVibGljIHVwbG9hZERhdGEoXG4gICAgdW5pdDogbnVtYmVyLFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBzaXplOiB2ZWMyLFxuICAgIGRhdGE6IFVpbnQ4QXJyYXksXG4gICAgZmlsdGVyOiBudW1iZXIsXG4gICAgcmVwZWF0OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIHRoaXMuYmluZFRleHR1cmUodW5pdCwgdGV4dHVyZSwgZmlsdGVyLCByZXBlYXQpO1xuICAgIGdsLnRleEltYWdlMkQoXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBzaXplLngsXG4gICAgICBzaXplLnksXG4gICAgICAwLFxuICAgICAgZ2wuUkdCQSxcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGFuIGltYWdlLCB1cGxvYWRpbmcgaXQgaWYgd2UgaGF2ZW4ndCBzZWVuIGl0IGJlZm9yZVxuICAgKi9cbiAgcHVibGljIGJpbmRJbWFnZShcbiAgICBpbWFnZTogU2NlbmVJbWFnZSxcbiAgICBmaWx0ZXI6IG51bWJlcixcbiAgICB1bml0OiBudW1iZXIgPSBHbENvbnRleHQuSU1BR0VfVU5JVFxuICApIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgbGV0IHRleHR1cmUgPSB0aGlzLmltYWdlVGV4dHVyZXMuZ2V0KGltYWdlKTtcbiAgICBjb25zdCBpc05ldyA9IHRleHR1cmUgPT09IHVuZGVmaW5lZDtcbiAgICBpZiAoIXRleHR1cmUpIHtcbiAgICAgIHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgICAgdGhpcy5pbWFnZVRleHR1cmVzLnNldChpbWFnZSwgdGV4dHVyZSk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kVGV4dHVyZSh1bml0LCB0ZXh0dXJlLCBmaWx0ZXIpO1xuXG4gICAgY29uc3QgaXNTdGFsZSA9XG4gICAgICBpbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50ICYmICF0aGlzLnVwbG9hZGVkQ2FudmFzZXMuaGFzKGltYWdlKTtcbiAgICBpZiAoaXNOZXcgfHwgaXNTdGFsZSkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgaW1hZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnVwbG9hZGVkQ2FudmFzZXMuYWRkKGltYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FudmFzZXMgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZXkgd2VyZSBsYXN0IHVzZWQsIHNvIGBiaW5kSW1hZ2UoKWBcbiAgICogc2hvdWxkIHVwbG9hZCB0aGVtIGFnYWluXG4gICAqL1xuICBwdWJsaWMgaW52YWxpZGF0ZUNhbnZhc2VzKCkge1xuICAgIHRoaXMudXBsb2FkZWRDYW52YXNlcy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc2l6ZSBvZiBhIHRleHR1cmUgdGhhdCB3ZSdyZSByZW5kZXJpbmcgaW50b1xuICAgKi9cbiAgcHVibGljIHJlc2l6ZVRhcmdldCh0YXJnZXQ6IEdsUmVuZGVyVGFyZ2V0LCBzaXplOiB2ZWMyKSB7XG4gICAgaWYgKHRhcmdldC5zaXplLnggPT09IHNpemUueCAmJiB0YXJnZXQuc2l6ZS55ID09PSBzaXplLnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgdGFyZ2V0LnNpemUgPSB2ZWMyLmNweShzaXplKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmUoR2xDb250ZXh0LklNQUdFX1VOSVQsIHRhcmdldC50ZXh0dXJlLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIDAsXG4gICAgICBnbC5SR0JBLFxuICAgICAgc2l6ZS54LFxuICAgICAgc2l6ZS55LFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgbnVsbFxuICAgICk7XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoXG4gICAgICBnbC5GUkFNRUJVRkZFUixcbiAgICAgIGdsLkNPTE9SX0FUVEFDSE1FTlQwLFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIHRhcmdldC50ZXh0dXJlLFxuICAgICAgMFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBvdXRwdXQgbWF0Y2hlcyB0aGUgc2NyZWVuIHNpemVcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID09PSBzY3JlZW4ueCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IHNjcmVlbi55KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBzY3JlZW4ueDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBzY3JlZW4ueTtcbiAgICB0aGlzLmdsIS52aWV3cG9ydCgwLCAwLCBzY3JlZW4ueCwgc2NyZWVuLnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBxdWFkIGNvdmVyaW5nIHBhcnQgb2YgdGhlIHNjcmVlblxuICAgKi9cbiAgcHVibGljIGRyYXdRdWFkKFxuICAgIHsgdW5pZm9ybXMgfTogR2xQcm9ncmFtLFxuICAgIHNjcmVlblJlY3RhbmdsZTogbnVtYmVyW10sXG4gICAgd29ybGRSZWN0YW5nbGU6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdLFxuICAgIG1hc2tSZWN0YW5nbGU6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICBnbC51bmlmb3JtNGZ2KHVuaWZvcm1zLnVfc2NyZWVuUmVjdGFuZ2xlLCBzY3JlZW5SZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV93b3JsZFJlY3RhbmdsZSwgd29ybGRSZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV9tYXNrUmVjdGFuZ2xlLCBtYXNrUmVjdGFuZ2xlKTtcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgdGV4dHVyZSBvdmVyIHRoZSB3aG9sZSBzY3JlZW4sIHJlcGxhY2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZVxuICAgKi9cbiAgcHVibGljIGRyYXdUZXh0dXJlKHRleHR1cmU6IFdlYkdMVGV4dHVyZSwgc2NyZWVuOiB2ZWMyKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb3B5UHJvZ3JhbTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZihwcm9ncmFtLnVuaWZvcm1zLnVfc2NyZWVuLCBzY3JlZW4ueCwgc2NyZWVuLnkpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfZmxpcFksIDEpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZShHbENvbnRleHQuSU1BR0VfVU5JVCwgdGV4dHVyZSwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudV9pbWFnZSwgR2xDb250ZXh0LklNQUdFX1VOSVQpO1xuXG4gICAgdGhpcy5kcmF3UXVhZChwcm9ncmFtLCBbMCwgMCwgc2NyZWVuLngsIHNjcmVlbi55XSk7XG5cbiAgICAvLyBBIHRleHR1cmUgY2FuJ3Qgc3RheSBib3VuZCB3aGlsZSB3ZSdyZSByZW5kZXJpbmcgaW50byBpdFxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHbENvbnRleHQgfSBmcm9tICcuL0dsQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7IEdsUHJvZ3JhbSwgR2xSZW5kZXJUYXJnZXQgfSBmcm9tICcuL0dsQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7XG4gIENvbG91cixcbiAgRnJhbWUsXG4gIEludGVydmFsMWQsXG4gIEludGVydmFsMmQsXG4gIFJlY3RhbmdsZSxcbiAgU2NlbmVDYW1lcmEsXG4gIFNjZW5lSW1hZ2UsXG59IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IHtcbiAgYm91bmRpbmdSZWN0YW5nbGUsXG4gIGNvbG91clRvU3RyaW5nLFxuICBkcmF3SW1hZ2VJblJlY3RhbmdsZSxcbiAgaW50ZXJ2YWxUb1JlY3RhbmdsZSxcbiAgbGVycENvbG91cixcbiAgbWF4VmVjLFxuICBtaW5WZWMsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxuICBzcHJpdGVCb3VuZHMsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcbiIsImltcG9ydCB0eXBlIHsgU3ByaXRlIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2Uvc3ByaXRlJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IENvbG91ciwgSW50ZXJ2YWwyZCwgUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5pbXVtIG9mIGEgc2V0IG9mIHZlY3RvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pblZlYyguLi52ZWN0b3JzOiB2ZWMyW10pOiB2ZWMyIHtcbiAgcmV0dXJuIHZlY3RvcnMucmVkdWNlKFxuICAgIChtaW4sIHYpID0+IHZlYzIoTWF0aC5taW4obWluLngsIHYueCksIE1hdGgubWluKG1pbi55LCB2LnkpKSxcbiAgICB2ZWMyKEluZmluaXR5LCBJbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1heGltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4VmVjKC4uLnZlY3RvcnM6IHZlYzJbXSk6IHZlYzIge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1heCwgdikgPT4gdmVjMihNYXRoLm1heChtYXgueCwgdi54KSwgTWF0aC5tYXgobWF4LnksIHYueSkpLFxuICAgIHZlYzIoLUluZmluaXR5LCAtSW5maW5pdHkpXG4gICk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzbWFsbGVzdCByZWN0YW5nbGUgdGhhdCBjb250YWlucyAyIHJlY3RhbmdsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kaW5nUmVjdGFuZ2xlKGE6IFJlY3RhbmdsZSwgYjogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgY29uc3QgcG9zaXRpb24gPSBtaW5WZWMoYS5wb3NpdGlvbiwgYi5wb3NpdGlvbik7XG4gIGNvbnN0IGJvdHRvbVJpZ2h0ID0gbWF4VmVjKFxuICAgIHZlYzIuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSksXG4gICAgdmVjMi5hZGQoYi5wb3NpdGlvbiwgYi5zaXplKVxuICApO1xuXG4gIHJldHVybiB7IHBvc2l0aW9uLCBzaXplOiB2ZWMyLnN1Yihib3R0b21SaWdodCwgcG9zaXRpb24pIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIGNvbG91ciBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvdXJUb1N0cmluZyhjb2xvdXI6IENvbG91cik6IHN0cmluZyB7XG4gIHJldHVybiBgcmdiYSgke2NvbG91ci5yfSwgJHtjb2xvdXIuZ30sICR7Y29sb3VyLmJ9LCAke2NvbG91ci5hfSlgO1xufVxuXG4vKipcbiAqIExpbmVhciBpbnRlcnBvbGF0ZSBiZXR3ZWVuIDIgY29sb3Vyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycENvbG91cihhOiBDb2xvdXIsIGI6IENvbG91ciwgaTogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgcjogbGVycChhLnIsIGIuciwgaSksXG4gICAgZzogbGVycChhLmcsIGIuZywgaSksXG4gICAgYjogbGVycChhLmIsIGIuYiwgaSksXG4gICAgYTogbGVycChhLmEsIGIuYSwgaSksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIDJkIGludGVydmFsIHRvIGEgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbFRvUmVjdGFuZ2xlKGludGVydmFsOiBJbnRlcnZhbDJkKTogUmVjdGFuZ2xlIHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogdmVjMihpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC50b3ApLFxuICAgIHNpemU6IHZlYzIoaW50ZXJ2YWwucmlnaHQgLSBpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC5ib3R0b20gLSBpbnRlcnZhbC50b3ApLFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByZWN0YW5nbGUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IEludGVydmFsMmQge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgIHJpZ2h0OiByZWN0YW5nbGUucG9zaXRpb24ueCArIHJlY3RhbmdsZS5zaXplLngsXG4gICAgdG9wOiByZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICBib3R0b206IHJlY3RhbmdsZS5wb3NpdGlvbi55ICsgcmVjdGFuZ2xlLnNpemUueSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiAyIEFBQkJzIGludGVyc2VjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlc0ludGVyc2VjdChhOiBSZWN0YW5nbGUsIGI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xuICBjb25zdCB0bDEgPSBhLnBvc2l0aW9uO1xuICBjb25zdCBicjEgPSB2ZWMyLmFkZChhLnBvc2l0aW9uLCBhLnNpemUpO1xuICBjb25zdCB0bDIgPSBiLnBvc2l0aW9uO1xuICBjb25zdCBicjIgPSB2ZWMyLmFkZChiLnBvc2l0aW9uLCBiLnNpemUpO1xuXG4gIHJldHVybiB0bDEueCA8IGJyMi54ICYmIGJyMS54ID4gdGwyLnggJiYgdGwxLnkgPCBicjIueSAmJiBicjEueSA+IHRsMi55O1xufVxuXG4vKipcbiAqIEdldCBhbiBhcnJheSBvZiB2ZXJ0aWNlcyBmb3IgYSByZWN0YW5nbGUgaW4gQ1cgd2luZGluZyBvcmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVmVydGljZXMocmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB2ZWMyW10ge1xuICBjb25zdCB0bCA9IHJlY3RhbmdsZS5wb3NpdGlvbjtcbiAgY29uc3QgYnIgPSB2ZWMyLmFkZChyZWN0YW5nbGUucG9zaXRpb24sIHJlY3RhbmdsZS5zaXplKTtcblxuICByZXR1cm4gW3JlY3RhbmdsZS5wb3NpdGlvbiwgdmVjMihici54LCB0bC55KSwgYnIsIHZlYzIodGwueCwgYnIueSldO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYXJlYSBjb3ZlcmVkIGJ5IGEgc3ByaXRlJ3MgY3VycmVudCBmcmFtZSwgdGhpcyBtYXRjaGVzIHdoZXJlXG4gKiBgU3ByaXRlLmRyYXcoKWAgcHV0cyB0aGUgaW1hZ2UgKGlmIHRoZSBzcHJpdGUgaXNuJ3Qgcm90YXRlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwcml0ZUJvdW5kcyhzcHJpdGU6IFNwcml0ZSk6IFJlY3RhbmdsZSB7XG4gIGNvbnN0IHsgaW1hZ2UgfSA9IHNwcml0ZTtcbiAgY29uc3Qgc2l6ZSA9IGltYWdlID8gdmVjMihpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KSA6IHNwcml0ZS5zaXplO1xuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHZlYzIuc3ViKHNwcml0ZS5wb3NpdGlvbiwgdmVjMi5tdWwoc3ByaXRlLm9yaWdpbiwgc3ByaXRlLnNjYWxlKSksXG4gICAgc2l6ZTogdmVjMi5tdWwoc2l6ZSwgc3ByaXRlLnNjYWxlKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuIGltYWdlIGludG8gYSByZWN0YW5nbGUsIGVpdGhlciByZXBlYXRpbmcgaXQgb3Igc3RyZXRjaGluZyBpdCB0byBmaXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdJbWFnZUluUmVjdGFuZ2xlKFxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIGltYWdlOiBTY2VuZUltYWdlLFxuICByZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgcmVwZWF0OiBib29sZWFuXG4pIHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gcmVjdGFuZ2xlO1xuXG4gIGlmICghcmVwZWF0KSB7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCAncmVwZWF0Jyk7XG4gIGlmIChwYXR0ZXJuKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxufVxuIiwiZXhwb3J0IHR5cGUgeyBGcmFtZSB9IGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpZ2h0aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vcmVmbGVjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi93YXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3dvcmxkJztcbiIsImltcG9ydCB0eXBlIHsgU3ByaXRlIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2Uvc3ByaXRlJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlLCBzcHJpdGVCb3VuZHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgU3ByaXRlQ2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBXYWxsUmVjZWl2ZXIsIFdhbGxSZWNlaXZlck9wdGlvbnMgfSBmcm9tICcuL1N1cmZhY2UnO1xuXG50eXBlIEFjdG9yU2hhZG93T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIEhlaWdodCBvZiB0aGUgYXJlYSBhdCB0aGUgYm90dG9tIG9mIHRoZSBhY3RvciB0aGF0IGNhc3RzIGEgc2hhZG93LFxuICAgKiBkZWZhdWx0cyB0byBhIHRoaXJkIG9mIHRoZSBhY3RvcidzIGhlaWdodFxuICAgKi9cbiAgZm9vdHByaW50SGVpZ2h0PzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0b3JTaGFkb3cgPVxuICB8ICdub25lJ1xuICB8ICdzcHJpdGUnXG4gIHwgJ2NpcmNsZSdcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnbm9uZScgfSlcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnc3ByaXRlJyB9ICYgUGFydGlhbDxcbiAgICAgICAgT21pdDxTcHJpdGVDYXN0ZXJPcHRpb25zLCAncG9zaXRpb24nIHwgJ3NpemUnPlxuICAgICAgPilcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnY2lyY2xlJyB9ICYgUGFydGlhbDxcbiAgICAgICAgT21pdDxDaXJjbGVDYXN0ZXJPcHRpb25zLCAncG9zaXRpb24nIHwgJ3NpemUnPlxuICAgICAgPik7XG5cbmV4cG9ydCB0eXBlIEFjdG9yT3B0aW9ucyA9IE9taXQ8V2FsbFJlY2VpdmVyT3B0aW9ucywgJ3JlY2VpdmVMaWdodCc+ICYge1xuICAvKipcbiAgICogVGhlIHNoYWRvdyBjYXN0IGJ5IHRoaXMgYWN0b3IsIHRoZSBkZWZhdWx0IGlzIGEgc3RyZXRjaGVkIHNpbGhvdWV0dGUgb2ZcbiAgICogdGhlIGFjdG9yJ3MgaW1hZ2VcbiAgICovXG4gIHNoYWRvdz86IEFjdG9yU2hhZG93O1xufTtcblxuZXhwb3J0IHR5cGUgU3ByaXRlQWN0b3JPcHRpb25zID0gT21pdDxcbiAgQWN0b3JPcHRpb25zLFxuICAncG9zaXRpb24nIHwgJ3NpemUnIHwgJ2ltYWdlJyB8ICdtYXNrJyB8ICdub3JtYWxNYXAnIHwgJ3NwZWN1bGFyTWFwJ1xuPiAmIHtcbiAgLyoqXG4gICAqIFRoZSBzcHJpdGUgdGhhdCB0aGlzIGFjdG9yIGZvbGxvd3NcbiAgICpcbiAgICogVGhlIGFjdG9yJ3MgcG9zaXRpb24sIHNpemUsIGFuZCBpbWFnZXMgY29tZSBmcm9tIHRoZSBzcHJpdGUgZXZlcnkgdGltZSB0aGVcbiAgICogc2NlbmUgaXMgcmVuZGVyZWQuIE5vcm1hbCBtYXBzIGFuZCBzcGVjdWxhciBtYXBzIGNvbWUgZnJvbSB0aGUgc3ByaXRlJ3NcbiAgICogYG5vcm1hbGAgYW5kIGBzcGVjdWxhcmAgbGF5ZXJzXG4gICAqL1xuICBzcHJpdGU6IFNwcml0ZTtcbn07XG5cbi8qKlxuICogQSBtb3Zpbmcgb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIGNhc3RzIGEgc2hhZG93XG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RvciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRk9PVFBSSU5UX1NDQUxFID0gMSAvIDM7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0hBRE9XX0xFTkdUSF9TQ0FMRSA9IDEuMzM7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9MQVlFUiA9ICdub3JtYWwnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTUEVDVUxBUl9MQVlFUiA9ICdzcGVjdWxhcic7XG5cbiAgcHVibGljIHJlYWRvbmx5IHN1cmZhY2U6IFdhbGxSZWNlaXZlcjtcbiAgcHVibGljIHJlYWRvbmx5IGNhc3RlcjogU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSBzcHJpdGU6IFNwcml0ZSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW07XG4gIHByaXZhdGUgZm9vdHByaW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYXJlYSBjb3ZlcmVkIGJ5IGEgc3ByaXRlJ3MgY3VycmVudCBmcmFtZSBhbmQgdGhlIGltYWdlcyBmb3IgaXRcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHNwcml0ZUZyYW1lKHNwcml0ZTogU3ByaXRlKSB7XG4gICAgY29uc3QgeyBpbWFnZSB9ID0gc3ByaXRlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNwcml0ZUJvdW5kcyhzcHJpdGUpLFxuICAgICAgaW1hZ2UsXG4gICAgICBub3JtYWxNYXA6IGltYWdlICYmIHNwcml0ZS5nZXRJbWFnZSh1bmRlZmluZWQsIEFjdG9yLk5PUk1BTF9MQVlFUiksXG4gICAgICBzcGVjdWxhck1hcDogaW1hZ2UgJiYgc3ByaXRlLmdldEltYWdlKHVuZGVmaW5lZCwgQWN0b3IuU1BFQ1VMQVJfTEFZRVIpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBzcHJpdGUgYWN0b3Igb3B0aW9ucyBpbnRvIHRoZSBlcXVpdmFsZW50IGFjdG9yIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlc29sdmVPcHRpb25zKFxuICAgIG9wdGlvbnM6IEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9uc1xuICApOiBBY3Rvck9wdGlvbnMge1xuICAgIGlmICghKCdzcHJpdGUnIGluIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjb25zdCB7IHNwcml0ZSwgLi4uYWN0b3IgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWN0b3IsXG4gICAgICAuLi5BY3Rvci5zcHJpdGVGcmFtZShzcHJpdGUpLFxuICAgICAgY3VzdG9tRHJhdzoge1xuICAgICAgICBpbWFnZTogY29udGV4dCA9PiBzcHJpdGUuZHJhdyhjb250ZXh0KSxcbiAgICAgICAgLi4uYWN0b3IuY3VzdG9tRHJhdyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sXG4gICAgYWN0b3JPcHRpb25zOiBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnNcbiAgKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IEFjdG9yLnJlc29sdmVPcHRpb25zKGFjdG9yT3B0aW9ucyk7XG4gICAgY29uc3QgeyBzaGFkb3cgPSAnc3ByaXRlJywgLi4uc3VyZmFjZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7IHR5cGUsIGZvb3RwcmludEhlaWdodCwgLi4uY2FzdGVyT3B0aW9ucyB9ID0gKFxuICAgICAgdHlwZW9mIHNoYWRvdyA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IHNoYWRvdyB9IDogc2hhZG93XG4gICAgKSBhcyBFeGNsdWRlPEFjdG9yU2hhZG93LCBzdHJpbmc+O1xuXG4gICAgdGhpcy5saWdodGluZyA9IGxpZ2h0aW5nO1xuICAgIHRoaXMuc3ByaXRlID0gJ3Nwcml0ZScgaW4gYWN0b3JPcHRpb25zID8gYWN0b3JPcHRpb25zLnNwcml0ZSA6IG51bGw7XG4gICAgdGhpcy5mb290cHJpbnRIZWlnaHQgPVxuICAgICAgZm9vdHByaW50SGVpZ2h0ID8/IG9wdGlvbnMuc2l6ZS55ICogQWN0b3IuREVGQVVMVF9GT09UUFJJTlRfU0NBTEU7XG5cbiAgICB0aGlzLnN1cmZhY2UgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgbWVyZ2VhYmxlOiBmYWxzZSxcbiAgICAgIHByb2plY3RTaGFkb3dzOiBmYWxzZSxcbiAgICAgIC4uLnN1cmZhY2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290cHJpbnQgPSB0aGlzLmZvb3RwcmludChvcHRpb25zLnBvc2l0aW9uLCBvcHRpb25zLnNpemUpO1xuICAgIGlmICh0eXBlID09PSAnc3ByaXRlJykge1xuICAgICAgY29uc3Qgc2hhZG93TGVuZ3RoID0gb3B0aW9ucy5zaXplLnkgKiBBY3Rvci5ERUZBVUxUX1NIQURPV19MRU5HVEhfU0NBTEU7XG5cbiAgICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkU3ByaXRlQ2FzdGVyKHtcbiAgICAgICAgaW1hZ2U6IG9wdGlvbnMuaW1hZ2UsXG4gICAgICAgIG1pblNoYWRvd0xlbmd0aDogc2hhZG93TGVuZ3RoLFxuICAgICAgICBtYXhTaGFkb3dMZW5ndGg6IHNoYWRvd0xlbmd0aCxcbiAgICAgICAgLi4uY2FzdGVyT3B0aW9ucyxcbiAgICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLmNhc3RlciA9IGxpZ2h0aW5nLmFkZENpcmNsZUNhc3Rlcih7XG4gICAgICAgIC4uLmNhc3Rlck9wdGlvbnMsXG4gICAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExvb2sgZm9yIHNoYWRvd3MgZnJvbSBmYXIgZW5vdWdoIGF3YXkgdG8gYXZvaWQgb3VyIG93biBzaGFkb3dcbiAgICBpZiAodGhpcy5jYXN0ZXIgJiYgb3B0aW9ucy5zaGFkb3dCaWFzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3VyZmFjZS5zaGFkb3dCaWFzID0gdGhpcy5jYXN0ZXJCaWFzKHRoaXMuY2FzdGVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkaXN0YW5jZSB0aGF0IGEgY2FzdGVyJ3Mgc2hhZG93IHJlYWNoZXMgYmFjayB0b3dhcmRzIHRoZSBsaWdodFxuICAgKi9cbiAgcHJpdmF0ZSBjYXN0ZXJCaWFzKGNhc3RlcjogU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyKTogbnVtYmVyIHtcbiAgICBpZiAoY2FzdGVyIGluc3RhbmNlb2YgU3ByaXRlQ2FzdGVyKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBjYXN0ZXIubWF4U2hhZG93TGVuZ3RoID8/IGNhc3Rlci5taW5TaGFkb3dMZW5ndGg7XG5cbiAgICAgIHJldHVybiBsZW5ndGggKiAoMSAtIGNhc3Rlci5vZmZzZXQueSkgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heChjYXN0ZXIuc2l6ZS54LCBjYXN0ZXIuc2l6ZS55KSAvIDIgKyAxO1xuICB9XG5cbiAgcHJpdmF0ZSBmb290cHJpbnQocG9zaXRpb246IHZlYzIsIHNpemU6IHZlYzIpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgc2l6ZS55IC0gdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgICAgc2l6ZTogdmVjMihzaXplLngsIHRoaXMuZm9vdHByaW50SGVpZ2h0KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGN1cnJlbnQgcG9zaXRpb24sIHNpemUsIGFuZCBpbWFnZXMgZnJvbSB0aGlzIGFjdG9yJ3Mgc3ByaXRlLCB0aGlzXG4gICAqIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHNjZW5lIGlzIHJlbmRlcmVkXG4gICAqL1xuICBwdWJsaWMgc3luYygpIHtcbiAgICBpZiAoIXRoaXMuc3ByaXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBBY3Rvci5zcHJpdGVGcmFtZSh0aGlzLnNwcml0ZSk7XG5cbiAgICB0aGlzLnN1cmZhY2Uuc2V0KGZyYW1lKTtcbiAgICB0aGlzLmNhc3Rlcj8uc2V0KHRoaXMuZm9vdHByaW50KGZyYW1lLnBvc2l0aW9uLCBmcmFtZS5zaXplKSk7XG5cbiAgICBpZiAodGhpcy5jYXN0ZXIgaW5zdGFuY2VvZiBTcHJpdGVDYXN0ZXIpIHtcbiAgICAgIHRoaXMuY2FzdGVyLmltYWdlID0gZnJhbWUuaW1hZ2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBhY3RvciB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKlxuICAgKiBJZiB0aGlzIGFjdG9yIGhhcyBhIHNwcml0ZSB0aGVuIHRoaXMgd2lsbCBzZXQgdGhlIHNwcml0ZSdzIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICB0aGlzLnNwcml0ZS5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc3luYygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3VyZmFjZS5tb3ZlVG8ocG9zaXRpb24pO1xuICAgIHRoaXMuY2FzdGVyPy5tb3ZlVG8odGhpcy5mb290cHJpbnQocG9zaXRpb24sIHRoaXMuc3VyZmFjZS5zaXplKS5wb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgYWN0b3IgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMuc3VyZmFjZS5yZW1vdmUoKTtcbiAgICB0aGlzLmNhc3Rlcj8ucmVtb3ZlKCk7XG4gICAgdGhpcy5saWdodGluZy5yZW1vdmUodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgYm91bmRpbmdSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7IHNpbGhvdWV0dGUgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbkNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgc2hhZG93cyBpbmNsdWRlIHRoZSByZWN0YW5ndWxhciByZWdpb24gb2YgdGhpcyBjYXN0ZXI/XG4gICAqL1xuICBpbmNsdWRlUmVnaW9uU2hhZG93PzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBwb2x5Z29uYWwgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgUmVnaW9uQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8UmVnaW9uQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgaW5jbHVkZVJlZ2lvblNoYWRvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFJlZ2lvbkNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgY2FuIGJlIG1lcmdlZCB3aXRoIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgY2FuTWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lcmdlYWJsZSAmJlxuICAgICAgb3RoZXIubWVyZ2VhYmxlICYmXG4gICAgICB0aGlzLmluY2x1ZGVSZWdpb25TaGFkb3cgPT09IG90aGVyLmluY2x1ZGVSZWdpb25TaGFkb3dcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBjYXN0ZXIgdGhhdCBjb3ZlcnMgdGhpcyBjYXN0ZXIgYW5kIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgbWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IFJlZ2lvbkNhc3RlciB7XG4gICAgcmV0dXJuIG5ldyBSZWdpb25DYXN0ZXIodGhpcy5saWdodGluZywge1xuICAgICAgLi4uKHRoaXMgYXMgUmVnaW9uQ2FzdGVyKSxcbiAgICAgIC4uLmJvdW5kaW5nUmVjdGFuZ2xlKHRoaXMsIG90aGVyKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTcHJpdGVDYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogVGhlIGltYWdlIHVzZWQgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpdCBzaG91bGQgYmUgYmxhY2sgd2l0aCBhbiBhbHBoYVxuICAgKiBjaGFubmVsXG4gICAqL1xuICBzaGFkb3c/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogSWYgYHNoYWRvd2AgaXNuJ3Qgc2V0LCB3ZSdsbCB1c2UgdGhlIHNpbGhvdWV0dGUgb2YgdGhpcyBpbWFnZSBpbnN0ZWFkXG4gICAqL1xuICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgc2hhZG93IGJlZ2lucywgYXMgYSBmcmFjdGlvbiBvZiB0aGUgc2l6ZSBvZiB0aGlzIGNhc3Rlciwgd2hlcmVcbiAgICogKDAsIDApIGlzIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kICgxLCAxKSBpcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lclxuICAgKi9cbiAgYW5jaG9yPzogdmVjMjtcblxuICAvKipcbiAgICogT2Zmc2V0IHRoZSBzaGFkb3cgZnJvbSB0aGUgYW5jaG9yLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBzaGFkb3cgc2l6ZVxuICAgKi9cbiAgb2Zmc2V0PzogdmVjMjtcblxuICAvKipcbiAgICogU2hhZG93IGxlbmd0aCB3aGVuIHRoZSBsaWdodCBpcyBhdCB0aGUgY2VudGVyIG9mIHRoaXMgY2FzdGVyXG4gICAqL1xuICBtaW5TaGFkb3dMZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNoYWRvdyBsZW5ndGggd2hlbiB0aGlzIGNhc3RlciBpcyBhdCB0aGUgZWRnZSBvZiB0aGUgbGlnaHQncyByYWRpdXMsIG9yXG4gICAqIG51bGwgdG8gdXNlIHRoZSBsaWdodCdzIHJhZGl1c1xuICAgKi9cbiAgbWF4U2hhZG93TGVuZ3RoPzogbnVtYmVyIHwgbnVsbDtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhIHNoYWRvdyBieSByb3RhdGluZyBhbmQgc3RyZXRjaGluZyBhbiBpbWFnZVxuICovXG5leHBvcnQgY2xhc3MgU3ByaXRlQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8U3ByaXRlQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgc2hhZG93OiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBpbWFnZTogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgYW5jaG9yOiB2ZWMyID0gdmVjMigwLjUsIDAuOSk7XG4gIHB1YmxpYyBvZmZzZXQ6IHZlYzIgPSB2ZWMyKDAuNSwgMC45KTtcbiAgcHVibGljIG1pblNoYWRvd0xlbmd0aDogbnVtYmVyID0gNjQ7XG4gIHB1YmxpYyBtYXhTaGFkb3dMZW5ndGg6IG51bWJlciB8IG51bGwgPSA2NDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBTcHJpdGVDYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW1hZ2UgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpZiBpdCBoYXMgb25lXG4gICAqL1xuICBwdWJsaWMgZ2V0U2hhZG93KCk6IFNjZW5lSW1hZ2UgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3cgPz8gKHRoaXMuaW1hZ2UgJiYgc2lsaG91ZXR0ZSh0aGlzLmltYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2lyY2xlQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBzaGFkb3cgaXMgY2VudGVyZWQsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNpemUgb2YgdGhpcyBjYXN0ZXIsXG4gICAqIHdoZXJlICgwLCAwKSBpcyB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCAoMSwgMSkgaXMgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXJcbiAgICovXG4gIGFuY2hvcj86IHZlYzI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGZyb20gdGhlIGFuY2hvciB0byB0aGUgc2hhZG93IHdoZW4gdGhlIGxpZ2h0IGlzIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogdGhpcyBjYXN0ZXJcbiAgICovXG4gIG1pblNoYWRvd0Rpc3RhbmNlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSBmcm9tIHRoZSBhbmNob3IgdG8gdGhlIHNoYWRvdyB3aGVuIHRoaXMgY2FzdGVyIGlzIGF0IHRoZSBlZGdlIG9mXG4gICAqIHRoZSBsaWdodCdzIHJhZGl1cywgb3IgbnVsbCB0byB1c2UgdGhlIGxpZ2h0J3MgcmFkaXVzXG4gICAqL1xuICBtYXhTaGFkb3dEaXN0YW5jZT86IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wYWNpdHkgb2YgdGhlIHNoYWRvd1xuICAgKi9cbiAgYWxwaGE/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYW4gZWxsaXB0aWNhbCBzaGFkb3dcbiAqL1xuZXhwb3J0IGNsYXNzIENpcmNsZUNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PENpcmNsZUNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIGFuY2hvcjogdmVjMiA9IHZlYzIoMC41LCAwLjkpO1xuICBwdWJsaWMgbWluU2hhZG93RGlzdGFuY2U6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBtYXhTaGFkb3dEaXN0YW5jZTogbnVtYmVyIHwgbnVsbCA9IDIwO1xuICBwdWJsaWMgYWxwaGE6IG51bWJlciA9IDE7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogQ2lyY2xlQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTaGFkb3dDYXN0ZXIgPSBSZWdpb25DYXN0ZXIgfCBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXI7XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBhdCwgc21vb3Roc3RlcCwgdW5sZXJwIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIGNvbG91clRvU3RyaW5nLFxuICBSZWN0YW5nbGUsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IENpcmNsZUNhc3RlciwgUmVnaW9uQ2FzdGVyLCBTcHJpdGVDYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBMaW5lLCBQb2x5Z29uVmVydGljZXMsIFNlY3RvcjJkIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBsaW5lSXNGYWNpbmcsIHBvbHlnb24sIHNlY3RvcjJkIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5jb25zdCBIQUxGX1BJID0gTWF0aC5QSSAvIDI7XG5cbmV4cG9ydCB0eXBlIExpZ2h0T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdvcmxkIHBvc2l0aW9uIG9mIHRoaXMgbGlnaHRcbiAgICovXG4gIHBvc2l0aW9uOiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBSYWRpdXMgb2YgdGhpcyBsaWdodCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZnVsbHktbGl0IGFyZWEgYXQgdGhlIGNlbnRlciBvZiB0aGlzIGxpZ2h0LCBhcyBhIGZyYWN0aW9uXG4gICAqIG9mIHRoZSByYWRpdXNcbiAgICovXG4gIGNvcmVSYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJyaWdodG5lc3Mgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhpcyBsaWdodCBhYm92ZSB0aGUgZ3JvdW5kLCB0aGlzIGlzIHVzZWQgZm9yIHNoYWRpbmcgbm9ybWFsIG1hcHNcbiAgICogYW5kIHNwZWN1bGFyIG1hcHNcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHRoaXMgbGlnaHQgY2FzdCBzaGFkb3dzP1xuICAgKi9cbiAgY2FzdFNoYWRvd3M/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9SQURJVVMgPSAxMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJ3doaXRlJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT1JFX1JBRElVUyA9IDAuMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX0NPUkVfUkFESVVTID0gMC45OTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9JTlRFTlNJVFkgPSAxO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFSUdIVCA9IDQ4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTSEFET1dfQlVGRkVSID0gMjA7XG5cbiAgcHJpdmF0ZSBsaWdodGluZ1N5c3RlbTogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwcml2YXRlIF9yYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sb3VyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb2xvdXJPYmplY3Q6IENvbG91cjtcbiAgcHJpdmF0ZSBfY29yZVJhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9pbnRlbnNpdHk6IG51bWJlcjtcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICBwdWJsaWMgY2FzdFNoYWRvd3M6IGJvb2xlYW47XG5cbiAgcHVibGljIGxpZ2h0Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBsaWdodENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAvKipcbiAgICogV2hpdGUgd2hlcmUgbGlnaHQgcmVhY2hlcyB0aGUgZ3JvdW5kLCBhbmQgYmxhY2sgaW4gdGhlIHNoYWRvd3Mgb2YgcmVnaW9uXG4gICAqIGNhc3RlcnNcbiAgICovXG4gIHB1YmxpYyByZWdpb25TaGFkb3dDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHJlZ2lvblNoYWRvd0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAvKipcbiAgICogV2hpdGUgd2hlcmUgbGlnaHQgcmVhY2hlcyB0aGUgZ3JvdW5kLCBhbmQgYmxhY2sgaW4gdGhlIHNoYWRvd3Mgb2Ygc3ByaXRlXG4gICAqIGFuZCBjaXJjbGUgY2FzdGVyc1xuICAgKi9cbiAgcHVibGljIG9iamVjdFNoYWRvd0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgb2JqZWN0U2hhZG93Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHByaXZhdGUgZGlydHkgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZ1N5c3RlbTogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IExpZ2h0T3B0aW9ucykge1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0gPSBsaWdodGluZ1N5c3RlbTtcblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLl9yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX1JBRElVUztcbiAgICB0aGlzLl9jb2xvdXIgPSBvcHRpb25zLmNvbG91ciA/PyBMaWdodC5ERUZBVUxUX0NPTE9VUjtcbiAgICB0aGlzLl9jb3JlUmFkaXVzID0gb3B0aW9ucy5jb3JlUmFkaXVzID8/IExpZ2h0LkRFRkFVTFRfQ09SRV9SQURJVVM7XG4gICAgdGhpcy5faW50ZW5zaXR5ID0gb3B0aW9ucy5pbnRlbnNpdHkgPz8gTGlnaHQuREVGQVVMVF9JTlRFTlNJVFk7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCA/PyBMaWdodC5ERUZBVUxUX0hFSUdIVDtcbiAgICB0aGlzLmNhc3RTaGFkb3dzID0gb3B0aW9ucy5jYXN0U2hhZG93cyA/PyB0cnVlO1xuICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih0aGlzLl9jb2xvdXIpO1xuXG4gICAgdGhpcy5saWdodENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGggPSB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy5saWdodENvbnRleHQgPSB0aGlzLmxpZ2h0Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy5yZWdpb25TaGFkb3dDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLnJlZ2lvblNoYWRvd0NvbnRleHQgPSB0aGlzLnJlZ2lvblNoYWRvd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMub2JqZWN0U2hhZG93Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5vYmplY3RTaGFkb3dDb250ZXh0ID0gdGhpcy5vYmplY3RTaGFkb3dDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICAvKipcbiAgICogQm91bmRpbmcgYm94IGZvciB0aGlzIGxpZ2h0LCBpbmNsdWRpbmcgdGhlIG9mZnNldCB3YWxsIGxpZ2h0bWFwc1xuICAgKi9cbiAgcHVibGljIGdldCBib3VuZHMoKTogUmVjdGFuZ2xlIHtcbiAgICBjb25zdCB3YWxsTGlnaHRpbmdZT2Zmc2V0ID0gdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fcmFkaXVzICsgTWF0aC5taW4od2FsbExpZ2h0aW5nWU9mZnNldCwgMClcbiAgICAgICksXG4gICAgICBzaXplOiB2ZWMyKFxuICAgICAgICB0aGlzLl9yYWRpdXMgKiAyLFxuICAgICAgICB0aGlzLl9yYWRpdXMgKiAyICsgTWF0aC5hYnMod2FsbExpZ2h0aW5nWU9mZnNldClcbiAgICAgICksXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IHJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9yYWRpdXMpIHtcbiAgICAgIHRoaXMuX3JhZGl1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG91cjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29sb3VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvbG91cikge1xuICAgICAgdGhpcy5fY29sb3VyID0gdmFsdWU7XG4gICAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodmFsdWUpO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb3JlUmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JlUmFkaXVzO1xuICB9XG5cbiAgcHVibGljIHNldCBjb3JlUmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvcmVSYWRpdXMpIHtcbiAgICAgIHRoaXMuX2NvcmVSYWRpdXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZW5zaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnNpdHk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9pbnRlbnNpdHkpIHtcbiAgICAgIHRoaXMuX2ludGVuc2l0eSA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBsaWdodCB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjMikge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNvbWUgb2YgdGhlIG9wdGlvbnMgZm9yIHRoaXMgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxMaWdodE9wdGlvbnM+KSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9zaXRpb24sXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvdXIsXG4gICAgICBjb3JlUmFkaXVzLFxuICAgICAgaW50ZW5zaXR5LFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2FzdFNoYWRvd3MsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24gPz8gdGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgPz8gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXIgPz8gdGhpcy5jb2xvdXI7XG4gICAgdGhpcy5jb3JlUmFkaXVzID0gY29yZVJhZGl1cyA/PyB0aGlzLmNvcmVSYWRpdXM7XG4gICAgdGhpcy5pbnRlbnNpdHkgPSBpbnRlbnNpdHkgPz8gdGhpcy5pbnRlbnNpdHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5jYXN0U2hhZG93cyA9IGNhc3RTaGFkb3dzID8/IHRoaXMuY2FzdFNoYWRvd3M7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgbGlnaHQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmUoXG4gICAgcmVnaW9uQ2FzdGVyczogUmVnaW9uQ2FzdGVyW10sXG4gICAgc3ByaXRlQ2FzdGVyczogU3ByaXRlQ2FzdGVyW10sXG4gICAgY2lyY2xlQ2FzdGVyczogQ2lyY2xlQ2FzdGVyW11cbiAgKSB7XG4gICAgLy8gSWYgdGhlIGxpZ2h0IHNldHRpbmdzIGhhdmUgY2hhbmdlZCwgd2UgbmVlZCB0byByZWRyYXcgdGhlIGJhc2UgbGlnaHRtYXBcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5wcmVwYXJlTGlnaHRNYXAoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0U2hhZG93Q29udGV4dCh0aGlzLnJlZ2lvblNoYWRvd0NvbnRleHQpO1xuICAgIHRoaXMucmVzZXRTaGFkb3dDb250ZXh0KHRoaXMub2JqZWN0U2hhZG93Q29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5jYXN0U2hhZG93cykge1xuICAgICAgY29uc3QgbGlnaHRSZWN0YW5nbGUgPSB0aGlzLmJvdW5kcztcblxuICAgICAgdGhpcy5wcmVwYXJlUmVnaW9uU2hhZG93cyhsaWdodFJlY3RhbmdsZSwgcmVnaW9uQ2FzdGVycyk7XG4gICAgICB0aGlzLnByZXBhcmVTcHJpdGVTaGFkb3dzKGxpZ2h0UmVjdGFuZ2xlLCBzcHJpdGVDYXN0ZXJzKTtcbiAgICAgIHRoaXMucHJlcGFyZUNpcmNsZVNoYWRvd3MobGlnaHRSZWN0YW5nbGUsIGNpcmNsZUNhc3RlcnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzaGFkb3cgY2FudmFzIG1hdGNoZXMgdGhpcyBsaWdodCdzIHNpemUsIGFuZCBmaWxsIGl0IHdpdGggd2hpdGVcbiAgICogc28gdGhhdCBub3RoaW5nIGlzIGluIHNoYWRvd1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldFNoYWRvd0NvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguZmxvb3IodGhpcy5fcmFkaXVzICogMik7XG4gICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSBzaXplIHx8IGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gc2l6ZSkge1xuICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIH1cblxuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID1cbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVMaWdodE1hcCgpIHtcbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxSZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoLFxuICAgICAgdGhpcy5saWdodENhbnZhcy5oZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgZ3JhZGllbnQgPSB0aGlzLmxpZ2h0Q29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyAqIE1hdGgubWluKHRoaXMuX2NvcmVSYWRpdXMsIExpZ2h0Lk1BWF9DT1JFX1JBRElVUyksXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXNcbiAgICApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcbiAgICAgIDAsXG4gICAgICBjb2xvdXJUb1N0cmluZyh7XG4gICAgICAgIC4uLnRoaXMuY29sb3VyT2JqZWN0LFxuICAgICAgICByOiB0aGlzLmNvbG91ck9iamVjdC5yICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgICBnOiB0aGlzLmNvbG91ck9iamVjdC5nICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgICBiOiB0aGlzLmNvbG91ck9iamVjdC5iICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgfSlcbiAgICApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnYmxhY2snKTtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmFyYyhcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIDAsXG4gICAgICBNYXRoLlBJICogMlxuICAgICk7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbCgpO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cblxuICBwcml2YXRlIHByZXBhcmVSZWdpb25TaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgcmVnaW9uQ2FzdGVyczogUmVnaW9uQ2FzdGVyW11cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMucmVnaW9uU2hhZG93Q29udGV4dDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3MoY29udGV4dCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArIHRoaXMuX3JhZGl1c1xuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IGNhc3RlciBvZiByZWdpb25DYXN0ZXJzKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXIpKSB7XG4gICAgICAgIHBvbHlnb24oXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAuLi50aGlzLnByZXBhcmVSZWdpb25TaGFkb3coY2FzdGVyLCBjYXN0ZXIuaW5jbHVkZVJlZ2lvblNoYWRvdylcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVTcHJpdGVTaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgc3ByaXRlQ2FzdGVyczogU3ByaXRlQ2FzdGVyW11cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMub2JqZWN0U2hhZG93Q29udGV4dDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyhjb250ZXh0KTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XG5cbiAgICBmb3IgKGNvbnN0IGNhc3RlciBvZiBzcHJpdGVDYXN0ZXJzKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXIpKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Nwcml0ZSA9IGNhc3Rlci5nZXRTaGFkb3coKTtcblxuICAgICAgICAvLyBJZiB0aGUgc2hhZG93IHNwcml0ZSBpcyBtaXNzaW5nIGZvciB0aGlzIGNhc3RlciB0aGVuIGl0IGRvZXNuJ3RcbiAgICAgICAgLy8gY2FzdCBhIHNoYWRvd1xuICAgICAgICBpZiAoIXNoYWRvd1Nwcml0ZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhZG93T3JpZ2luID0gdmVjMi5hZGQoXG4gICAgICAgICAgY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgIHZlYzIoY2FzdGVyLnNpemUueCAqIGNhc3Rlci5hbmNob3IueCwgY2FzdGVyLnNpemUueSAqIGNhc3Rlci5hbmNob3IueSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93TGVuZ3RoID0gc21vb3Roc3RlcChcbiAgICAgICAgICBjYXN0ZXIubWluU2hhZG93TGVuZ3RoLFxuICAgICAgICAgIGNhc3Rlci5tYXhTaGFkb3dMZW5ndGggPz8gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgdW5sZXJwKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgdmVjMi5sZW4odmVjMi5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0VkZ2UgPSB2ZWMyLm11bChcbiAgICAgICAgICB2ZWMyLm5vcih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKSxcbiAgICAgICAgICBzaGFkb3dMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RWRnZUxlbmd0aCA9IHZlYzIubGVuKHNoYWRvd0VkZ2UpO1xuICAgICAgICBjb25zdCBzaGFkb3dBbmdsZSA9IHZlYzIucmFkKHNoYWRvd0VkZ2UpICsgSEFMRl9QSTtcblxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnggLSB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnkgLSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUoc2hhZG93QW5nbGUpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBzaGFkb3dTcHJpdGUsXG4gICAgICAgICAgLWNhc3Rlci5zaXplLnggKiBjYXN0ZXIub2Zmc2V0LngsXG4gICAgICAgICAgLXNoYWRvd0VkZ2VMZW5ndGggKiBjYXN0ZXIub2Zmc2V0LnksXG4gICAgICAgICAgY2FzdGVyLnNpemUueCxcbiAgICAgICAgICBzaGFkb3dFZGdlTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlQ2lyY2xlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGNpcmNsZUNhc3RlcnM6IENpcmNsZUNhc3RlcltdXG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcblxuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIGNpcmNsZUNhc3RlcnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlcikpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93T3JpZ2luID0gdmVjMi5hZGQoXG4gICAgICAgICAgY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgIHZlYzIoY2FzdGVyLnNpemUueCAqIGNhc3Rlci5hbmNob3IueCwgY2FzdGVyLnNpemUueSAqIGNhc3Rlci5hbmNob3IueSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RGlzdGFuY2UgPSBzbW9vdGhzdGVwKFxuICAgICAgICAgIGNhc3Rlci5taW5TaGFkb3dEaXN0YW5jZSxcbiAgICAgICAgICBjYXN0ZXIubWF4U2hhZG93RGlzdGFuY2UgPz8gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgdW5sZXJwKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgdmVjMi5sZW4odmVjMi5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Bvc2l0aW9uID0gdmVjMi5tdWwoXG4gICAgICAgICAgdmVjMi5ub3IodmVjMi5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSksXG4gICAgICAgICAgc2hhZG93RGlzdGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93U2l6ZSA9IHZlYzIubXVsKGNhc3Rlci5zaXplLCAwLjUpO1xuXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gY2FzdGVyLmFscGhhO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueCAtIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueSAtIHRoaXMucG9zaXRpb24ueVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmVsbGlwc2UoXG4gICAgICAgICAgc2hhZG93UG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dQb3NpdGlvbi55LFxuICAgICAgICAgIHNoYWRvd1NpemUueCxcbiAgICAgICAgICBzaGFkb3dTaXplLnksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIE1hdGguUEkgKiAyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVJlZ2lvblNoYWRvdyhcbiAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBpbmNsdWRlQ2FzdGVyUmVnaW9uOiBib29sZWFuID0gZmFsc2VcbiAgKTogUG9seWdvblZlcnRpY2VzIHtcbiAgICBjb25zdCBsaWdodFBvc2l0aW9uID0gdmVjMi5jcHkodGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgbGlnaHRSYWRpdXMgPSB0aGlzLl9yYWRpdXM7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVyVmVydGljZXMgPSByZWN0YW5nbGVWZXJ0aWNlcyhzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpO1xuICAgIGNvbnN0IHNoYWRvd0VkZ2VzOiBMaW5lW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhZG93Q2FzdGVyVmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gYXQoc2hhZG93Q2FzdGVyVmVydGljZXMsIGkgLSAxKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzaGFkb3dDYXN0ZXJWZXJ0aWNlc1tpXTtcblxuICAgICAgaWYgKCFsaW5lSXNGYWNpbmcoeyBzdGFydDogcHJldmlvdXMsIGVuZDogY3VycmVudCB9LCB0aGlzLnBvc2l0aW9uKSkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXgxID0gdmVjMi5zdWIocHJldmlvdXMsIGxpZ2h0UG9zaXRpb24pO1xuICAgICAgICBjb25zdCB2ZXJ0ZXgyID0gdmVjMi5zdWIoY3VycmVudCwgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIHNoYWRvd0VkZ2VzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHByZXZpb3VzLFxuICAgICAgICAgICAgZW5kOiB2ZWMyLmFkZChcbiAgICAgICAgICAgICAgcHJldmlvdXMsXG4gICAgICAgICAgICAgIHZlYzIubXVsKFxuICAgICAgICAgICAgICAgIHZlYzIubm9yKHZlcnRleDEpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYzIubGVuKHZlcnRleDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IGN1cnJlbnQsXG4gICAgICAgICAgICBlbmQ6IHZlYzIuYWRkKFxuICAgICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgICB2ZWMyLm11bChcbiAgICAgICAgICAgICAgICB2ZWMyLm5vcih2ZXJ0ZXgyKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIgLSB2ZWMyLmxlbih2ZXJ0ZXgyKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hhZG93UG9seWdvbjogUG9seWdvblZlcnRpY2VzID0gW107XG4gICAgc3dpdGNoIChzZWN0b3IyZCh0aGlzLnBvc2l0aW9uLCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCkpIHtcbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMV0uZW5kLCBzaGFkb3dFZGdlc1sxXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMl0uZW5kLCBzaGFkb3dFZGdlc1syXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICB2ZWMyKFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueCArIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5zaXplLngsXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5lbmRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1sxXS5lbmQueCwgc2hhZG93RWRnZXNbMl0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuSW5zaWRlOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5SaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s0XS5lbmQsIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNF0uZW5kLCBzaGFkb3dFZGdlc1s0XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzNdLmVuZCwgc2hhZG93RWRnZXNbM10uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbM10uZW5kLngsIHNoYWRvd0VkZ2VzWzBdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgdmVjMihcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi55ICsgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUueVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzNdLmVuZC54LCBzaGFkb3dFZGdlc1swXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b206XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbVJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICB2ZWMyLmFkZChzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24sIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5zaXplKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZG93UG9seWdvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VDb2xvciB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3InO1xuaW1wb3J0IHsgZmxvYXRFcXVhbHMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgR2xDb250ZXh0LFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICBsZXJwQ29sb3VyLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxuICBTY2VuZUNhbWVyYSxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBBY3RvciwgQWN0b3JPcHRpb25zLCBTcHJpdGVBY3Rvck9wdGlvbnMgfSBmcm9tICcuL0FjdG9yJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgUmVnaW9uQ2FzdGVyLFxuICBSZWdpb25DYXN0ZXJPcHRpb25zLFxuICBTcHJpdGVDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB7IExpZ2h0LCBMaWdodE9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9tZXJnZSc7XG5pbXBvcnQgeyBTY2VuZU9iamVjdCB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgU2hhZGVyUGFzcywgU2hhZGVyU3VyZmFjZSB9IGZyb20gJy4vU2hhZGVyUGFzcyc7XG5pbXBvcnQge1xuICBHcm91bmRSZWNlaXZlcixcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBTdXJmYWNlLFxuICBXYWxsUmVjZWl2ZXIsXG4gIFdhbGxSZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgeyBXYWxsLCBXYWxsT3B0aW9ucyB9IGZyb20gJy4vV2FsbCc7XG5cbmV4cG9ydCB0eXBlIExpZ2h0aW5nU3lzdGVtT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBsaWdodGluZyBiZSBhcHBsaWVkIHRvIHRoZSBzY2VuZT9cbiAgICpcbiAgICogSWYgdGhpcyBpcyBmYWxzZSB0aGVuIHRoZSBzY2VuZSB3aWxsIGJlIGRyYXduIHdpdGhvdXQgYW55IGxpZ2h0aW5nLCBhbmRcbiAgICogV2ViR0wgd29uJ3QgYmUgdXNlZFxuICAgKi9cbiAgbGlnaHRpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgaW1hZ2Ugc21vb3RoaW5nIGJlIGVuYWJsZWQ/XG4gICAqXG4gICAqIFNldCB0aGlzIHRvIGZhbHNlIGZvciBwaXhlbCBhcnQgc3R5bGVcbiAgICovXG4gIGltYWdlU21vb3RoaW5nRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdWxkIHNvZnQgc2hhZG93cyBiZSBlbmFibGVkP1xuICAgKlxuICAgKiBUaGlzIHdpbGwgb25seSBhcHBseSBpZiBzb2Z0U2hhZG93c0Ftb3VudCBpcyA+IDBcbiAgICovXG4gIHNvZnRTaGFkb3dzRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQW1vdW50IG9mIHNvZnQgc2hhZG93cyB0byBhcHBseVxuICAgKlxuICAgKiBTZXQgdGhpcyB0byAwIHRvIGRpc2FibGUgc29mdCBzaGFkb3dzXG4gICAqL1xuICBzb2Z0U2hhZG93c0Ftb3VudDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgbm9ybWFsIG1hcHMgYW5kIHNwZWN1bGFyIG1hcHMgYmUgdXNlZD9cbiAgICovXG4gIHN1cmZhY2VNYXBzRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3RyZW5ndGggb2YgaGlnaGxpZ2h0cyBmcm9tIG5vcm1hbCBtYXBzXG4gICAqL1xuICBzaGFkZXJIaWdobGlnaHRTdHJlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdHJlbmd0aCBvZiBzaGFkaW5nIGZyb20gbm9ybWFsIG1hcHNcbiAgICovXG4gIHNoYWRlclNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0cmVuZ3RoIG9mIHNwZWN1bGFyIGhpZ2hsaWdodHNcbiAgICovXG4gIHNoYWRlclNwZWN1bGFyU3RyZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogU2l6ZSBvZiBzcGVjdWxhciBoaWdobGlnaHRzLCBsYXJnZXIgbnVtYmVycyBtYWtlIHNtYWxsZXIgaGlnaGxpZ2h0c1xuICAgKi9cbiAgc2hhZGVyU2hpbmluZXNzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhlIGNhbWVyYSBpcyB0aWx0ZWQgYXdheSBmcm9tIGxvb2tpbmcgc3RyYWlnaHQgZG93biwgdGhpcyBtb3Zlc1xuICAgKiBzcGVjdWxhciBoaWdobGlnaHRzIHRvd2FyZHMgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXG4gICAqL1xuICBzaGFkZXJWaWV3VGlsdDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBRdWFudGl6ZSBzaGFkaW5nIGludG8gYmFuZHMgb2YgdGhpcyBzaXplLCBzZXQgdGhpcyB0byAwIGZvciBzbW9vdGggc2hhZGluZ1xuICAgKi9cbiAgc2hhZGVyQmFuZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiBhbWJpZW50IChnbG9iYWwpIGxpZ2h0IHdoZW4gZmFjaW5nIGF3YXkgZnJvbSB0aGUgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodCB3aGVuIGZhY2luZyB0b3dhcmRzIHRoZSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiBvZiBhbWJpZW50IGxpZ2h0IGluIHJhZGlhbnNcbiAgICovXG4gIGFtYmllbnRMaWdodERpcmVjdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBvZmZzZXQgZm9yIHdhbGwgbGlnaHRpbmdcbiAgICovXG4gIHdhbGxMaWdodGluZ1lPZmZzZXQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzdGFuY2UgYWJvdmUgYm90dG9tIGVkZ2Ugb2Ygd2FsbCBzaGFkb3cgcmVjZWl2ZXJzIGJlZm9yZSBsaWdodCBpc1xuICAgKiB0b3RhbGx5IGN1dCBvZmZcbiAgICovXG4gIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgc3ByaXRlIGFuZCBjaXJjbGUgc2hhZG93cyBjbGltYiB3YWxscywgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGVuZ3RoXG4gICAqIG9mIHRoZSBzaGFkb3cgdGhhdCByZWFjaGVzIHRoZSB3YWxsXG4gICAqL1xuICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgTGlnaHRpbmdTeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucyA9IHtcbiAgICBsaWdodGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0cnVlLFxuICAgIHNvZnRTaGFkb3dzRW5hYmxlZDogZmFsc2UsXG4gICAgc29mdFNoYWRvd3NBbW91bnQ6IDIsXG4gICAgc3VyZmFjZU1hcHNFbmFibGVkOiB0cnVlLFxuICAgIHNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoOiAwLjUsXG4gICAgc2hhZGVyU2hhZG93U3RyZW5ndGg6IDAuNSxcbiAgICBzaGFkZXJTcGVjdWxhclN0cmVuZ3RoOiAxLFxuICAgIHNoYWRlclNoaW5pbmVzczogMTYsXG4gICAgc2hhZGVyVmlld1RpbHQ6IDAuNSxcbiAgICBzaGFkZXJCYW5kaW5nOiAwLjEsXG4gICAgYW1iaWVudExpZ2h0Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiAwLFxuICAgIHdhbGxMaWdodGluZ1lPZmZzZXQ6IC0zMCxcbiAgICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogMjAsXG4gICAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogMC43NSxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyBjcmVhdGVDb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY29tcGFyZVN1cmZhY2VzKGE6IFN1cmZhY2U8YW55PiwgYjogU3VyZmFjZTxhbnk+KTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS56SW5kZXggLSBiLnpJbmRleCB8fCBhLnBvc2l0aW9uLnkgKyBhLnNpemUueSAtIChiLnBvc2l0aW9uLnkgKyBiLnNpemUueSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9wdGlvbnM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucztcblxuICBwdWJsaWMgbGlnaHRzOiBMaWdodFtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBtb3N0IHJlY2VudGx5IHJlbmRlcmVkIHNjcmVlblxuICAgKi9cbiAgcHVibGljIHNjcmVlbjogdmVjMiA9IHZlYzIoKTtcblxuICBwcml2YXRlIGdyb3VuZFJlY2VpdmVyczogR3JvdW5kUmVjZWl2ZXJbXSA9IFtdO1xuICBwcml2YXRlIHdhbGxSZWNlaXZlcnM6IFdhbGxSZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgcmVnaW9uQ2FzdGVyczogUmVnaW9uQ2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBzcHJpdGVDYXN0ZXJzOiBTcHJpdGVDYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIGNpcmNsZUNhc3RlcnM6IENpcmNsZUNhc3RlcltdID0gW107XG4gIHByaXZhdGUgYWN0b3JzOiBBY3RvcltdID0gW107XG5cbiAgcHJpdmF0ZSBsaWdodE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBsaWdodE1hcENhbnZhcyA9IHRoaXMubGlnaHRNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNwZWN1bGFyTGlnaHRNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc3BlY3VsYXJMaWdodE1hcENhbnZhcyA9IHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc2NlbmVOb3JtYWxNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc2NlbmVOb3JtYWxNYXBDYW52YXMgPSB0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzY2VuZVNwZWN1bGFyTWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNjZW5lU3BlY3VsYXJNYXBDYW52YXMgPSB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIGdsQ29udGV4dDogR2xDb250ZXh0IHwgbnVsbDtcbiAgcHJpdmF0ZSBzaGFkZXJQYXNzOiBTaGFkZXJQYXNzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3BlY3VsYXJWaXNpYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGBnbENvbnRleHRgIGxldHMgdGhlIGxpZ2h0aW5nIHN5c3RlbSBzaGFyZSBhIFdlYkdMIGNvbnRleHQgd2l0aCBvdGhlclxuICAgKiBzeXN0ZW1zLCBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgaXRzIG93blxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPExpZ2h0aW5nU3lzdGVtT3B0aW9ucz4sXG4gICAgZ2xDb250ZXh0PzogR2xDb250ZXh0XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIExpZ2h0aW5nU3lzdGVtLkRFRkFVTFRfT1BUSU9OUyxcbiAgICAgIG9wdGlvbnMgPz8ge31cbiAgICApO1xuICAgIHRoaXMuZ2xDb250ZXh0ID0gZ2xDb250ZXh0ID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGFyZWEgb2YgZ3JvdW5kIHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRHcm91bmQob3B0aW9uczogR3JvdW5kUmVjZWl2ZXJPcHRpb25zKTogR3JvdW5kUmVjZWl2ZXIge1xuICAgIGNvbnN0IGdyb3VuZCA9IG5ldyBHcm91bmRSZWNlaXZlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycy5wdXNoKGdyb3VuZCk7XG5cbiAgICByZXR1cm4gZ3JvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNvbGlkIHdhbGwsIG1hZGUgZnJvbSBhIGxpdCBmcm9udCBmYWNlLCBhbiB1bmxpdCB0b3AsIGFuZCBhIGZvb3RwcmludFxuICAgKiB0aGF0IGNhc3RzIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsKG9wdGlvbnM6IFdhbGxPcHRpb25zKTogV2FsbCB7XG4gICAgcmV0dXJuIG5ldyBXYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1vdmluZyBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgY2FzdHMgYSBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRBY3RvcihvcHRpb25zOiBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnMpOiBBY3RvciB7XG4gICAgY29uc3QgYWN0b3IgPSBuZXcgQWN0b3IodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5hY3RvcnMucHVzaChhY3Rvcik7XG5cbiAgICByZXR1cm4gYWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRMaWdodChvcHRpb25zOiBMaWdodE9wdGlvbnMpOiBMaWdodCB7XG4gICAgY29uc3QgbGlnaHQgPSBuZXcgTGlnaHQodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XG5cbiAgICByZXR1cm4gbGlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIG9yIHNwcml0ZSB0aGF0IHJlY2VpdmVzIHdhbGwgc2hhZG93c1xuICAgKlxuICAgKiBUaGlzIGlzIHdoYXQgYGFkZFdhbGwoKWAgYW5kIGBhZGRBY3RvcigpYCB1c2UgdG8gY3JlYXRlIHRoZWlyIHN1cmZhY2VzXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbFJlY2VpdmVyKG9wdGlvbnM6IFdhbGxSZWNlaXZlck9wdGlvbnMpOiBXYWxsUmVjZWl2ZXIge1xuICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbFJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5wdXNoKHdhbGwpO1xuXG4gICAgcmV0dXJuIHdhbGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgcG9seWdvbmFsIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRSZWdpb25DYXN0ZXIob3B0aW9uczogUmVnaW9uQ2FzdGVyT3B0aW9ucyk6IFJlZ2lvbkNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IFJlZ2lvbkNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnJlZ2lvbkNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhIHJvdGF0ZWQgYW5kIHN0cmV0Y2hlZCBpbWFnZSBhcyBhIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZFNwcml0ZUNhc3RlcihvcHRpb25zOiBTcHJpdGVDYXN0ZXJPcHRpb25zKTogU3ByaXRlQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgU3ByaXRlQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuc3ByaXRlQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGFuIGVsbGlwdGljYWwgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkQ2lyY2xlQ2FzdGVyKG9wdGlvbnM6IENpcmNsZUNhc3Rlck9wdGlvbnMpOiBDaXJjbGVDYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBDaXJjbGVDYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5jaXJjbGVDYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIG9iamVjdCBvciBsaWdodCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUob2JqZWN0OiBTY2VuZU9iamVjdDxhbnk+IHwgTGlnaHQgfCBBY3Rvcikge1xuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBMaWdodCkge1xuICAgICAgdGhpcy5saWdodHMgPSB0aGlzLmxpZ2h0cy5maWx0ZXIobGlnaHQgPT4gbGlnaHQgIT09IG9iamVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEFjdG9yKSB7XG4gICAgICB0aGlzLmFjdG9ycyA9IHRoaXMuYWN0b3JzLmZpbHRlcihhY3RvciA9PiBhY3RvciAhPT0gb2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycyA9IHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzID0gdGhpcy53YWxsUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gdGhpcy5yZWdpb25DYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5zcHJpdGVDYXN0ZXJzID0gdGhpcy5zcHJpdGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5jaXJjbGVDYXN0ZXJzID0gdGhpcy5jaXJjbGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2Ugd2FsbCByZWNlaXZlcnMgYW5kIHJlZ2lvbiBjYXN0ZXJzIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXJcbiAgICogYW5kIHBlcmZlY3RseSBjb25uZWN0ZWQgb24gb25lIHNpZGUsIHNvIHRoYXQgdGhlcmUgYXJlIGZld2VyIHRvIHByb2Nlc3NcbiAgICpcbiAgICogTWVyZ2VkIG9iamVjdHMgYXJlIHJlbW92ZWQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtIGFuZCBjYW4ndCBiZSBtb3ZlZFxuICAgKiBhZnRlcndhcmRzLCBzbyB0aGlzIGlzIGludGVuZGVkIGZvciBsZXZlbCBnZW9tZXRyeS4gU2V0IGBtZXJnZWFibGVgIHRvXG4gICAqIGZhbHNlIG9uIGFuIG9iamVjdCB0byBleGNsdWRlIGl0XG4gICAqXG4gICAqIGBvbk1lcmdlYCBpcyBjYWxsZWQgZWFjaCB0aW1lIDIgb2JqZWN0cyBhcmUgcmVwbGFjZWQgd2l0aCBhIHNpbmdsZSBvYmplY3QuXG4gICAqIElmIHRoZSBvYmplY3RzIHdlcmUgZHVwbGljYXRlcywgdGhlIG1lcmdlZCBvYmplY3QgaXMgdGhlIGZpcnN0IG9iamVjdFxuICAgKi9cbiAgcHVibGljIG9wdGltaXNlKFxuICAgIG9uTWVyZ2U/OiAoXG4gICAgICBtZXJnZWQ6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGE6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGI6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlclxuICAgICkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSBtZXJnZTxXYWxsUmVjZWl2ZXI+KHRoaXMud2FsbFJlY2VpdmVycywgb25NZXJnZSk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gbWVyZ2U8UmVnaW9uQ2FzdGVyPih0aGlzLnJlZ2lvbkNhc3RlcnMsIG9uTWVyZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGEgV2ViR0wgY29udGV4dCB3aXRoIG90aGVyIHN5c3RlbXMsIHRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGJlZm9yZVxuICAgKiB0aGUgZmlyc3QgcmVuZGVyIGFuZCBkb2VzIG5vdGhpbmcgaWYgYSBjb250ZXh0IGhhcyBhbHJlYWR5IGJlZW4gc2V0XG4gICAqL1xuICBwdWJsaWMgdXNlR2xDb250ZXh0KGdsQ29udGV4dDogR2xDb250ZXh0KSB7XG4gICAgdGhpcy5nbENvbnRleHQgPz89IGdsQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNoYWRlciBwYXNzLCBpZiBpdCBjYW4gYmUgdXNlZFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTaGFkZXJQYXNzKCk6IFNoYWRlclBhc3MgfCBudWxsIHtcbiAgICB0aGlzLnNoYWRlclBhc3MgPz89IG5ldyBTaGFkZXJQYXNzKHRoaXMuZ2xDb250ZXh0ID8/IG5ldyBHbENvbnRleHQoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5zaGFkZXJQYXNzLmF2YWlsYWJsZSA/IHRoaXMuc2hhZGVyUGFzcyA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIGEgc2NyZWVuLXNpemVkIGNhbnZhcyBtYXRjaGVzIHRoZSBzY3JlZW4gc2l6ZSBhbmQgY2xlYXIgaXRcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDb250ZXh0KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSBjb250ZXh0O1xuICAgIGlmIChjYW52YXMud2lkdGggIT09IHRoaXMuc2NyZWVuLnggfHwgY2FudmFzLmhlaWdodCAhPT0gdGhpcy5zY3JlZW4ueSkge1xuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5zY3JlZW4ueDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnNjcmVlbi55O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdGhpcy5vcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBsaXQgc2NlbmUgb250byBhIGNvbnRleHRcbiAgICpcbiAgICogSWYgYGRyYXdTY2VuZWAgaXMgcHJvdmlkZWQgdGhlbiBpdCB3aWxsIGJlIGNhbGxlZCB0byBkcmF3IHRoZSBzY2VuZSB3aXRoXG4gICAqIHRoZSBjYW1lcmEncyB0cmFuc2Zvcm1zIGFwcGxpZWQsIG90aGVyd2lzZSB3ZSdsbCBkcmF3IGFsbCBvZiB0aGUgc3VyZmFjZXNcbiAgICogdGhhdCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbmRlcihcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgY2FtZXJhOiBTY2VuZUNhbWVyYSxcbiAgICBkcmF3U2NlbmU/OiAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKGNvbnRleHQpO1xuICAgIGlmIChkcmF3U2NlbmUpIHtcbiAgICAgIGRyYXdTY2VuZShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3U3VyZmFjZXMoY29udGV4dCk7XG4gICAgfVxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgdGhpcy5wcmVwYXJlKGNhbWVyYSwgdmVjMihjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KSk7XG4gICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYWxsIG9mIHRoZSBzdXJmYWNlcyB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgZHJhd1N1cmZhY2VzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd0dyb3VuZChjb250ZXh0KTtcbiAgICB0aGlzLmRyYXdXYWxscyhjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBncm91bmQsIHRoaXMgaXMgdGhlIHBhcnQgb2YgdGhlIHNjZW5lIHRoYXQncyB1bmRlcm5lYXRoIGV2ZXJ5dGhpbmdcbiAgICogZWxzZVxuICAgKi9cbiAgcHVibGljIGRyYXdHcm91bmQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy51cGRhdGVTdXJmYWNlcygpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC5kcmF3KGNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSB3YWxscyBhbmQgYWN0b3JzIHRoYXQgc3RhbmQgb24gdGhlIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGRyYXdXYWxscyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLmZvckVhY2god2FsbCA9PiB3YWxsLmRyYXcoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBzdXJmYWNlcyBhcmUgdXAgdG8gZGF0ZSBhbmQgaW4gZHJhd2luZyBvcmRlciwgYWN0b3JzIGNvbWUgZmlyc3RcbiAgICogYmVjYXVzZSBtb3ZpbmcgYW4gYWN0b3IgY2FuIGNoYW5nZSB0aGUgb3JkZXJcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlU3VyZmFjZXMoKSB7XG4gICAgdGhpcy5hY3RvcnMuZm9yRWFjaChhY3RvciA9PiBhY3Rvci5zeW5jKCkpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLnNvcnQoTGlnaHRpbmdTeXN0ZW0uY29tcGFyZVN1cmZhY2VzKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuc29ydChMaWdodGluZ1N5c3RlbS5jb21wYXJlU3VyZmFjZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGxpZ2h0bWFwcyBmb3IgcmVuZGVyaW5nXG4gICAqXG4gICAqIElmIFdlYkdMIGlzbid0IGF2YWlsYWJsZSB0aGVuIGxpZ2h0bWFwcyBhcmUgbGVmdCBhcyB0aGV5IGFyZSwgc28gdGhlIHNjZW5lXG4gICAqIGtlZXBzIGl0cyBsYXN0IGxpZ2h0aW5nIHdoZW4gdGhlIGNvbnRleHQgaXMgbG9zdCBhbmQgdGhlbiByZXN0b3JlZFxuICAgKi9cbiAgcHVibGljIHByZXBhcmUoY2FtZXJhOiBTY2VuZUNhbWVyYSwgc2NyZWVuOiB2ZWMyKSB7XG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XG4gICAgdGhpcy51cGRhdGVTdXJmYWNlcygpO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubGlnaHRpbmdFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hhZGVyUGFzcyA9IHRoaXMuZ2V0U2hhZGVyUGFzcygpO1xuICAgIGlmICghc2hhZGVyUGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYVJlY3RhbmdsZSA9IGludGVydmFsVG9SZWN0YW5nbGUoY2FtZXJhLmJvdW5kcyk7XG4gICAgY29uc3Qgc3VyZmFjZXMgPSBbLi4udGhpcy5ncm91bmRSZWNlaXZlcnMsIC4uLnRoaXMud2FsbFJlY2VpdmVyc10uZmlsdGVyKFxuICAgICAgc3VyZmFjZSA9PiByZWN0YW5nbGVzSW50ZXJzZWN0KHN1cmZhY2UsIGNhbWVyYVJlY3RhbmdsZSlcbiAgICApO1xuXG4gICAgY29uc3QgeyBzdXJmYWNlTWFwc0VuYWJsZWQgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBoYXNOb3JtYWxNYXBzID1cbiAgICAgIHN1cmZhY2VNYXBzRW5hYmxlZCAmJlxuICAgICAgc3VyZmFjZXMuc29tZShcbiAgICAgICAgc3VyZmFjZSA9PiBzdXJmYWNlLm5vcm1hbE1hcCB8fCBzdXJmYWNlLmN1c3RvbURyYXcubm9ybWFsTWFwXG4gICAgICApO1xuICAgIGNvbnN0IGhhc1NwZWN1bGFyTWFwcyA9XG4gICAgICBzdXJmYWNlTWFwc0VuYWJsZWQgJiZcbiAgICAgIHN1cmZhY2VzLnNvbWUoXG4gICAgICAgIHN1cmZhY2UgPT4gc3VyZmFjZS5zcGVjdWxhck1hcCB8fCBzdXJmYWNlLmN1c3RvbURyYXcuc3BlY3VsYXJNYXBcbiAgICAgICk7XG5cbiAgICBpZiAoaGFzTm9ybWFsTWFwcykge1xuICAgICAgdGhpcy5kcmF3U2NlbmVOb3JtYWxNYXAoY2FtZXJhLCBzdXJmYWNlcyk7XG4gICAgfVxuICAgIGlmIChoYXNTcGVjdWxhck1hcHMpIHtcbiAgICAgIHRoaXMuZHJhd1NjZW5lU3BlY3VsYXJNYXAoY2FtZXJhLCBzdXJmYWNlcyk7XG4gICAgfVxuXG4gICAgLy8gTGlnaHRzIG91dHNpZGUgdGhlIGNhbWVyYSBib3VuZHMgY2FuJ3QgYWZmZWN0IHRoZSB2aXNpYmxlIHNjZW5lXG4gICAgY29uc3QgdmlzaWJsZUxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PlxuICAgICAgcmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodC5ib3VuZHMsIGNhbWVyYVJlY3RhbmdsZSlcbiAgICApO1xuXG4gICAgdmlzaWJsZUxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+XG4gICAgICBsaWdodC5wcmVwYXJlKHRoaXMucmVnaW9uQ2FzdGVycywgdGhpcy5zcHJpdGVDYXN0ZXJzLCB0aGlzLmNpcmNsZUNhc3RlcnMpXG4gICAgKTtcblxuICAgIHNoYWRlclBhc3MucmVuZGVyKHtcbiAgICAgIGNhbWVyYSxcbiAgICAgIHNjcmVlbixcbiAgICAgIGxpZ2h0czogdmlzaWJsZUxpZ2h0cyxcbiAgICAgIHN1cmZhY2VzOiB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodHMoc3VyZmFjZXMpLFxuICAgICAgbm9ybWFsTWFwOiBoYXNOb3JtYWxNYXBzID8gdGhpcy5zY2VuZU5vcm1hbE1hcENhbnZhcyA6IG51bGwsXG4gICAgICBzcGVjdWxhck1hcDogaGFzU3BlY3VsYXJNYXBzID8gdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ2FudmFzIDogbnVsbCxcbiAgICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZDogdGhpcy5vcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZCxcbiAgICAgIHdhbGxMaWdodGluZ1lPZmZzZXQ6IHRoaXMub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0LFxuICAgICAgd2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2U6IHRoaXMub3B0aW9ucy53YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZSxcbiAgICAgIHdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IHRoaXMub3B0aW9ucy53YWxsU2hhZG93TGVuZ3RoRmFjdG9yLFxuICAgICAgaGlnaGxpZ2h0U3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJIaWdobGlnaHRTdHJlbmd0aCxcbiAgICAgIHNoYWRvd1N0cmVuZ3RoOiB0aGlzLm9wdGlvbnMuc2hhZGVyU2hhZG93U3RyZW5ndGgsXG4gICAgICBzcGVjdWxhclN0cmVuZ3RoOiB0aGlzLm9wdGlvbnMuc2hhZGVyU3BlY3VsYXJTdHJlbmd0aCxcbiAgICAgIHNoaW5pbmVzczogdGhpcy5vcHRpb25zLnNoYWRlclNoaW5pbmVzcyxcbiAgICAgIHZpZXdUaWx0OiB0aGlzLm9wdGlvbnMuc2hhZGVyVmlld1RpbHQsXG4gICAgICBiYW5kaW5nOiB0aGlzLm9wdGlvbnMuc2hhZGVyQmFuZGluZyxcbiAgICB9KTtcblxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMubGlnaHRNYXBDb250ZXh0KTtcbiAgICB0aGlzLmxpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2Uoc2hhZGVyUGFzcy5jYW52YXMsIDAsIDApO1xuXG4gICAgdGhpcy5zcGVjdWxhclZpc2libGUgPSBoYXNTcGVjdWxhck1hcHM7XG4gICAgaWYgKGhhc1NwZWN1bGFyTWFwcykge1xuICAgICAgc2hhZGVyUGFzcy5zaG93U3BlY3VsYXIoc2NyZWVuKTtcblxuICAgICAgLy8gSGlnaGxpZ2h0cyBjYW4gb25seSBhcHBlYXIgb24gdGhlIHN1cmZhY2VzIGluIHRoZSBsaWdodCBtYXBcbiAgICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQpO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5zYXZlKCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShzaGFkZXJQYXNzLmNhbnZhcywgMCwgMCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBjYW52YXMgc2hvd2luZyB3aGljaCBzdXJmYWNlIGlzIGF0IGVhY2ggcGl4ZWwsIGZvciBkZWJ1Z2dpbmdcbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgZHJhd24gc3RyYWlnaHQgYXdheSwgYmVjYXVzZSB0aGUgY2FudmFzIGlzIHJldXNlZFxuICAgKi9cbiAgcHVibGljIGdldFN1cmZhY2VNYXBDYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHRoaXMuc2hhZGVyUGFzcz8uc2hvd1N1cmZhY2VzKHRoaXMuc2NyZWVuKTtcblxuICAgIHJldHVybiB0aGlzLnNoYWRlclBhc3M/LmNhbnZhcyA/PyB0aGlzLmxpZ2h0TWFwQ2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGFtYmllbnQgbGlnaHQgb24gZWFjaCBzdXJmYWNlXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUFtYmllbnRMaWdodHMoc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdKTogU2hhZGVyU3VyZmFjZVtdIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB2ZWMyLnJvdCh2ZWMyKDEsIDApLCB0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0RGlyZWN0aW9uKTtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBwYXJzZUNvbG9yKHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRDb2xvdXIpO1xuICAgIGNvbnN0IHNoYWRvdyA9IHBhcnNlQ29sb3IodGhpcy5vcHRpb25zLmFtYmllbnRMaWdodFNoYWRvd0NvbG91cik7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gcGFyc2VDb2xvcih0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyKTtcblxuICAgIHJldHVybiBzdXJmYWNlcy5tYXAoc3VyZmFjZSA9PiAoe1xuICAgICAgc3VyZmFjZSxcbiAgICAgIGFtYmllbnRMaWdodDpcbiAgICAgICAgc3VyZmFjZSBpbnN0YW5jZW9mIFdhbGxSZWNlaXZlclxuICAgICAgICAgID8gdGhpcy5jYWxjdWxhdGVBbWJpZW50TGlnaHQoXG4gICAgICAgICAgICAgIHN1cmZhY2Uuc3VyZmFjZU5vcm1hbCxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICBhbWJpZW50TGlnaHQsXG4gICAgICAgICAgICAgIHNoYWRvdyxcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0XG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBhbWJpZW50TGlnaHQsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgYWN0dWFsIGNvbG91ciBvZiBhbWJpZW50IGxpZ2h0IGJhc2VkIG9uIHRoZSBzdXJmYWNlIG5vcm1hbFxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBbWJpZW50TGlnaHQoXG4gICAgc3VyZmFjZU5vcm1hbDogdmVjMixcbiAgICBhbWJpZW50TGlnaHREaXJlY3Rpb246IHZlYzIsXG4gICAgYW1iaWVudExpZ2h0OiBDb2xvdXIsXG4gICAgYW1iaWVudExpZ2h0U2hhZG93OiBDb2xvdXIsXG4gICAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0OiBDb2xvdXJcbiAgKTogQ29sb3VyIHtcbiAgICBpZiAodmVjMi5lcShzdXJmYWNlTm9ybWFsLCB2ZWMyKCkpKSB7XG4gICAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IGRvdCA9IHZlYzIuZG90KHZlYzIubm9yKHN1cmZhY2VOb3JtYWwpLCBhbWJpZW50TGlnaHREaXJlY3Rpb24pO1xuICAgIGlmIChmbG9hdEVxdWFscyhkb3QsIDApKSB7XG4gICAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICAgIH1cblxuICAgIGlmIChkb3QgPCAwKSB7XG4gICAgICByZXR1cm4gbGVycENvbG91cihhbWJpZW50TGlnaHQsIGFtYmllbnRMaWdodEhpZ2hsaWdodCwgLWRvdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlcnBDb2xvdXIoYW1iaWVudExpZ2h0LCBhbWJpZW50TGlnaHRTaGFkb3csIGRvdCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIHNvZnQgc2hhZG93IHNldHRpbmdzIG9uIHRoZSBzcGVjaWZpZWQgY2FudmFzIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBzZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0VuYWJsZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLm9wdGlvbnMuc29mdFNoYWRvd3NBbW91bnQgPiAwXG4gICAgKSB7XG4gICAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gJ2JsYWNrJztcbiAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAgICBjb250ZXh0LnNoYWRvd09mZnNldFkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVybGF5IHRoZSBsaWdodG1hcCBvbnRvIHRoZSBjb250ZXh0XG4gICAqL1xuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5saWdodGluZ0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcblxuICAgIC8vIFNwZWN1bGFyIGhpZ2hsaWdodHMgYXJlIGFkZGVkIGFmdGVyd2FyZHMgc28gdGhhdCB0aGV5IGNhbiBiZSBicmlnaHRlclxuICAgIC8vIHRoYW4gdGhlIHNjZW5lIHVuZGVybmVhdGggdGhlbVxuICAgIGlmICh0aGlzLnNwZWN1bGFyVmlzaWJsZSkge1xuICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwZWN1bGFyTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgbm9ybWFsIG1hcHMgZm9yIHN1cmZhY2VzIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U2NlbmVOb3JtYWxNYXAoY2FtZXJhOiBTY2VuZUNhbWVyYSwgc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdKSB7XG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuICAgIHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dCk7XG5cbiAgICBzdXJmYWNlcy5mb3JFYWNoKHN1cmZhY2UgPT4ge1xuICAgICAgc3VyZmFjZS5kcmF3Tm9ybWFsTWFwKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHNwZWN1bGFyIG1hcHMgZm9yIHN1cmZhY2VzIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U2NlbmVTcGVjdWxhck1hcChcbiAgICBjYW1lcmE6IFNjZW5lQ2FtZXJhLFxuICAgIHN1cmZhY2VzOiBTdXJmYWNlPGFueT5bXVxuICApIHtcbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0KTtcbiAgICB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0KTtcblxuICAgIHN1cmZhY2VzLmZvckVhY2goc3VyZmFjZSA9PiB7XG4gICAgICBzdXJmYWNlLmRyYXdTcGVjdWxhck1hcCh0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcblxuZXhwb3J0IHR5cGUgU2NlbmVPYmplY3RPcHRpb25zID0ge1xuICAvKipcbiAgICogV29ybGQgcG9zaXRpb24gb2YgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGlzIG9iamVjdFxuICAgKi9cbiAgcG9zaXRpb246IHZlYzI7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhpcyBvYmplY3QgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHNpemU6IHZlYzI7XG5cbiAgLyoqXG4gICAqIENhbiB0aGlzIG9iamVjdCBiZSBtZXJnZWQgd2l0aCBpdHMgbmVpZ2hib3VycyBieVxuICAgKiBgTGlnaHRpbmdTeXN0ZW0ub3B0aW1pc2UoKWA/XG4gICAqL1xuICBtZXJnZWFibGU/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBTb21ldGhpbmcgdGhhdCBoYXMgYmVlbiByZWdpc3RlcmVkIHdpdGggYSBgTGlnaHRpbmdTeXN0ZW1gXG4gKlxuICogVGhlc2UgYXJlIHJldHVybmVkIGZyb20gdGhlIGBMaWdodGluZ1N5c3RlbS5hZGQuLi4oKWAgbWV0aG9kcyBhbmQgYXJlIHVzZWRcbiAqIHRvIGNoYW5nZSBvciByZW1vdmUgdGhlIG9iamVjdCBsYXRlciBvblxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NlbmVPYmplY3Q8T3B0aW9ucyBleHRlbmRzIFNjZW5lT2JqZWN0T3B0aW9ucz4ge1xuICBwcm90ZWN0ZWQgbGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjMjtcbiAgcHVibGljIHNpemU6IHZlYzI7XG4gIHB1YmxpYyBtZXJnZWFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgcmVtb3ZlQ2FsbGJhY2tzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nID0gbGlnaHRpbmc7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KG9wdGlvbnMucG9zaXRpb24pO1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KG9wdGlvbnMuc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIG9iamVjdCB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjMikge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBzaXplIG9mIHRoaXMgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgcmVzaXplKHNpemU6IHZlYzIpIHtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweShzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc29tZSBvZiB0aGUgb3B0aW9ucyBmb3IgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxPcHRpb25zPikge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAodGhpcyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkodGhpcy5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGlzIG9iamVjdCBpcyByZW1vdmVkXG4gICAqL1xuICBwdWJsaWMgb25SZW1vdmUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBvYmplY3QgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMubGlnaHRpbmcucmVtb3ZlKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBHbENvbnRleHQsXG4gIEdsUHJvZ3JhbSxcbiAgR2xSZW5kZXJUYXJnZXQsXG4gIFNjZW5lQ2FtZXJhLFxuICBTY2VuZUltYWdlLFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgTGlnaHQgfSBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCB7IEdyb3VuZFJlY2VpdmVyLCBTdXJmYWNlLCBXYWxsUmVjZWl2ZXIgfSBmcm9tICcuL1N1cmZhY2UnO1xuaW1wb3J0IGRpZmZ1c2VTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvZGlmZnVzZS5mcmFnLmdsc2wnKTtcbmltcG9ydCBtYXNrU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL21hc2suZnJhZy5nbHNsJyk7XG5pbXBvcnQgc3BlY3VsYXJTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvc3BlY3VsYXIuZnJhZy5nbHNsJyk7XG5pbXBvcnQgc3VyZmFjZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9zdXJmYWNlLmdsc2wnKTtcblxuLyoqXG4gKiBBIHN1cmZhY2UgdGhhdCdzIHZpc2libGUgaW4gdGhlIHNjZW5lLCBhbmQgaXRzIGFtYmllbnQgbGlnaHRcbiAqL1xuZXhwb3J0IHR5cGUgU2hhZGVyU3VyZmFjZSA9IHtcbiAgc3VyZmFjZTogU3VyZmFjZTxhbnk+O1xuICBhbWJpZW50TGlnaHQ6IENvbG91cjtcbn07XG5cbi8qKlxuICogRXZlcnl0aGluZyB0aGF0IHRoZSBzaGFkZXJzIG5lZWQgZm9yIHJlbmRlcmluZyBhIGZyYW1lXG4gKi9cbmV4cG9ydCB0eXBlIFNoYWRlclNjZW5lID0ge1xuICBjYW1lcmE6IFNjZW5lQ2FtZXJhO1xuICBzY3JlZW46IHZlYzI7XG4gIGxpZ2h0czogTGlnaHRbXTtcbiAgc3VyZmFjZXM6IFNoYWRlclN1cmZhY2VbXTtcbiAgbm9ybWFsTWFwOiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgc3BlY3VsYXJNYXA6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IGJvb2xlYW47XG4gIHdhbGxMaWdodGluZ1lPZmZzZXQ6IG51bWJlcjtcbiAgd2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2U6IG51bWJlcjtcbiAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogbnVtYmVyO1xuICBoaWdobGlnaHRTdHJlbmd0aDogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuICBzcGVjdWxhclN0cmVuZ3RoOiBudW1iZXI7XG4gIHNoaW5pbmVzczogbnVtYmVyO1xuICB2aWV3VGlsdDogbnVtYmVyO1xuICBiYW5kaW5nOiBudW1iZXI7XG59O1xuXG5lbnVtIFRleHR1cmVVbml0IHtcbiAgTm9ybWFsTWFwLFxuICBTcGVjdWxhck1hcCxcbiAgU3VyZmFjZU1hcCxcbiAgTGlnaHRNYXAsXG4gIFJlZ2lvblNoYWRvd01hcCxcbiAgT2JqZWN0U2hhZG93TWFwLFxufVxuXG4vKipcbiAqIFRoZSBhbHBoYSBjaGFubmVsIG9mIHRoZSBzdXJmYWNlIG1hcCBzYXlzIHdoYXQncyBhdCBlYWNoIHBpeGVsLCB0aGVzZSB2YWx1ZXNcbiAqIGFyZSBhbHNvIGluIHRoZSBzaGFkZXJzXG4gKi9cbmVudW0gU3VyZmFjZVR5cGUge1xuICBOb25lID0gMCxcbiAgR3JvdW5kID0gMC4yNSxcbiAgUHJvamVjdGVkV2FsbCA9IDAuNSxcbiAgRmxhdFdhbGwgPSAwLjc1LFxuICBVbmxpdCA9IDEsXG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgbGlnaHRpbmcgZm9yIGEgc2NlbmVcbiAqXG4gKiBTdXJmYWNlcyBhcmUgZHJhd24gaW50byBhIHN1cmZhY2UgbWFwIHdpdGhvdXQgYW55IGJsZW5kaW5nLCBzbyBlYWNoIHBpeGVsXG4gKiBiZWxvbmdzIHRvIGV4YWN0bHkgb25lIHN1cmZhY2UgYW5kIGtub3dzIHdoZXJlIHRoYXQgc3VyZmFjZSBtZWV0cyB0aGUgZ3JvdW5kLlxuICogVGhpcyBtZWFucyBvdmVybGFwcGluZyBzdXJmYWNlcyBkb24ndCBuZWVkIGFueSBzcGVjaWFsIGhhbmRsaW5nLlxuICpcbiAqIEVhY2ggbGlnaHQgaXMgdGhlbiBzaGFkZWQgc2VwYXJhdGVseSBhbmQgYmxlbmRlZCBpbnRvIGEgbGlnaHQgbWFwLCBzbyBhXG4gKiBsaWdodCdzIGJ1bXBzIG9ubHkgYWZmZWN0IHRoYXQgbGlnaHQuIFNwZWN1bGFyIGhpZ2hsaWdodHMgYXJlIGFkZGVkIHVwIGluIGFcbiAqIHNlcGFyYXRlIGJ1ZmZlciwgYmVjYXVzZSB0aGV5IG5lZWQgdG8gYmUgYnJpZ2h0ZXIgdGhhbiB0aGUgc2NlbmVcbiAqL1xuZXhwb3J0IGNsYXNzIFNoYWRlclBhc3Mge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT09UX1NDQUxFID0gNDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9PVF9NQVggPSA2NTUzNTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NIQURPV19CSUFTID0gMjU1O1xuXG4gIHByaXZhdGUgY29udGV4dDogR2xDb250ZXh0O1xuXG4gIHByaXZhdGUgaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIG1hc2tQcm9ncmFtOiBHbFByb2dyYW07XG4gIHByaXZhdGUgZGlmZnVzZVByb2dyYW06IEdsUHJvZ3JhbTtcbiAgcHJpdmF0ZSBzcGVjdWxhclByb2dyYW06IEdsUHJvZ3JhbTtcblxuICBwcml2YXRlIHRleHR1cmVzOiBSZWNvcmQ8XG4gICAgRXhjbHVkZTxUZXh0dXJlVW5pdCwgVGV4dHVyZVVuaXQuU3VyZmFjZU1hcD4sXG4gICAgV2ViR0xUZXh0dXJlXG4gID47XG4gIHByaXZhdGUgc3VyZmFjZVRhcmdldDogR2xSZW5kZXJUYXJnZXQ7XG4gIHByaXZhdGUgc3BlY3VsYXJUYXJnZXQ6IEdsUmVuZGVyVGFyZ2V0O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29udGV4dC5vbkluaXRpYWxpc2UoZ2wgPT4gdGhpcy5pbml0aWFsaXNlKGdsKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dHB1dCBvZiB0aGUgbW9zdCByZWNlbnQgcGFzc1xuICAgKi9cbiAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuY2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzaGFkZXJzIGNhbiBiZSB1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLmNvbnRleHQuYXZhaWxhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJlcGVuZCA9IChzb3VyY2U6IHN0cmluZykgPT4gYCR7c3VyZmFjZVNoYWRlcn1cXG4ke3NvdXJjZX1gO1xuXG4gICAgICB0aGlzLm1hc2tQcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0obWFza1NoYWRlcik7XG4gICAgICB0aGlzLmRpZmZ1c2VQcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0ocHJlcGVuZChkaWZmdXNlU2hhZGVyKSk7XG4gICAgICB0aGlzLnNwZWN1bGFyUHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKFxuICAgICAgICBwcmVwZW5kKHNwZWN1bGFyU2hhZGVyKVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMaWdodGluZyBoYXMgYmVlbiBkaXNhYmxlZCcsIGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dHVyZXMgPSB7XG4gICAgICBbVGV4dHVyZVVuaXQuTm9ybWFsTWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5TcGVjdWxhck1hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuTGlnaHRNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0LlJlZ2lvblNoYWRvd01hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuT2JqZWN0U2hhZG93TWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICB9O1xuICAgIHRoaXMuc3VyZmFjZVRhcmdldCA9IHRoaXMuY29udGV4dC5jcmVhdGVSZW5kZXJUYXJnZXQoKTtcbiAgICB0aGlzLnNwZWN1bGFyVGFyZ2V0ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJlbmRlclRhcmdldCgpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVXBsb2FkIGFuIGltYWdlIHRvIG9uZSBvZiB0aGUgc2hhcmVkIHRleHR1cmVzXG4gICAqL1xuICBwcml2YXRlIHVwbG9hZChcbiAgICB1bml0OiBFeGNsdWRlPFRleHR1cmVVbml0LCBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwPixcbiAgICBpbWFnZTogU2NlbmVJbWFnZSxcbiAgICBmaWx0ZXI6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmNvbnRleHQudXBsb2FkKHVuaXQsIHRoaXMudGV4dHVyZXNbdW5pdF0sIGltYWdlLCBmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSB0aGUgb3V0cHV0IGFuZCB0aGUgcmVuZGVyIHRhcmdldHMgbWF0Y2ggdGhlIHNjcmVlbiBzaXplXG4gICAqL1xuICBwcml2YXRlIHJlc2l6ZShzY3JlZW46IHZlYzIpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplKHNjcmVlbik7XG4gICAgdGhpcy5jb250ZXh0LnJlc2l6ZVRhcmdldCh0aGlzLnN1cmZhY2VUYXJnZXQsIHNjcmVlbik7XG4gICAgdGhpcy5jb250ZXh0LnJlc2l6ZVRhcmdldCh0aGlzLnNwZWN1bGFyVGFyZ2V0LCBzY3JlZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGF0IHdlIG5lZWQgdG8gd3JpdGUgdG8gdGhlIHN1cmZhY2UgbWFwIGZvciBhIHN1cmZhY2VcbiAgICovXG4gIHByaXZhdGUgc3VyZmFjZVZhbHVlKHN1cmZhY2U6IFN1cmZhY2U8YW55Piwgc2NlbmU6IFNoYWRlclNjZW5lKTogbnVtYmVyW10ge1xuICAgIGlmIChzdXJmYWNlIGluc3RhbmNlb2YgR3JvdW5kUmVjZWl2ZXIpIHtcbiAgICAgIHJldHVybiBbMCwgMCwgMCwgU3VyZmFjZVR5cGUuR3JvdW5kXTtcbiAgICB9XG5cbiAgICBjb25zdCB3YWxsID0gc3VyZmFjZSBhcyBXYWxsUmVjZWl2ZXI7XG5cbiAgICBsZXQgdHlwZSA9IFN1cmZhY2VUeXBlLlVubGl0O1xuICAgIGlmICh3YWxsLnJlY2VpdmVMaWdodCkge1xuICAgICAgdHlwZSA9IHdhbGwucHJvamVjdFNoYWRvd3NcbiAgICAgICAgPyBTdXJmYWNlVHlwZS5Qcm9qZWN0ZWRXYWxsXG4gICAgICAgIDogU3VyZmFjZVR5cGUuRmxhdFdhbGw7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvb3QgcG9zaXRpb24gaXMgc3RvcmVkIHJlbGF0aXZlIHRvIHRoZSB0b3Agb2YgdGhlIGNhbWVyYSdzIHZpZXdcbiAgICBjb25zdCBmb290ID0gTWF0aC5yb3VuZChcbiAgICAgICh3YWxsLnBvc2l0aW9uLnkgKyB3YWxsLnNpemUueSAtIHNjZW5lLmNhbWVyYS5ib3VuZHMudG9wKSAqXG4gICAgICAgIFNoYWRlclBhc3MuRk9PVF9TQ0FMRVxuICAgICk7XG4gICAgY29uc3QgY2xhbXBlZEZvb3QgPSBNYXRoLm1pbihNYXRoLm1heChmb290LCAwKSwgU2hhZGVyUGFzcy5GT09UX01BWCk7XG4gICAgY29uc3QgYmlhcyA9IE1hdGgubWluKHdhbGwuc2hhZG93QmlhcywgU2hhZGVyUGFzcy5NQVhfU0hBRE9XX0JJQVMpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIE1hdGguZmxvb3IoY2xhbXBlZEZvb3QgLyAyNTYpIC8gMjU1LFxuICAgICAgKGNsYW1wZWRGb290ICUgMjU2KSAvIDI1NSxcbiAgICAgIE1hdGgucm91bmQoYmlhcykgLyAyNTUsXG4gICAgICB0eXBlLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBlYWNoIHZpc2libGUgc3VyZmFjZSwgd3JpdGluZyBhIHZhbHVlIHRvIGFsbCBvZiB0aGUgc3VyZmFjZSdzIHBpeGVsc1xuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U3VyZmFjZXMoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmUsXG4gICAgZ2V0VmFsdWU6IChpdGVtOiBTaGFkZXJTdXJmYWNlKSA9PiBudW1iZXJbXVxuICApIHtcbiAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLm1hc2tQcm9ncmFtO1xuICAgIGNvbnN0IGZpbHRlciA9IHNjZW5lLmltYWdlU21vb3RoaW5nRW5hYmxlZCA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1Q7XG5cbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9tYXNrLCBHbENvbnRleHQuSU1BR0VfVU5JVCk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2NlbmUuc3VyZmFjZXMpIHtcbiAgICAgIGNvbnN0IHsgc3VyZmFjZSB9ID0gaXRlbTtcbiAgICAgIGNvbnN0IG1hc2sgPSBzdXJmYWNlLmdldE1hc2soKTtcbiAgICAgIGlmIChtYXNrID09PSBudWxsIHx8IHN1cmZhY2UudmlzaWJsZUhlaWdodCA8PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgbWFza1JlY3RhbmdsZSA9IFswLCAwLCAxLCAxXTtcbiAgICAgIGlmIChtYXNrICE9PSAnc29saWQnKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kSW1hZ2UobWFzaywgZmlsdGVyKTtcblxuICAgICAgICAvLyBSZXBlYXRlZCBpbWFnZXMgYXJlIGxpbmVkIHVwIHdpdGggdGhlIHdvcmxkLCB0aGUgc2FtZSBhcyBhIHBhdHRlcm5cbiAgICAgICAgaWYgKHN1cmZhY2UucmVwZWF0ICYmICFzdXJmYWNlLmN1c3RvbURyYXcubWFzaykge1xuICAgICAgICAgIG1hc2tSZWN0YW5nbGUgPSBbXG4gICAgICAgICAgICBzdXJmYWNlLnBvc2l0aW9uLnggLyBtYXNrLndpZHRoLFxuICAgICAgICAgICAgc3VyZmFjZS5wb3NpdGlvbi55IC8gbWFzay5oZWlnaHQsXG4gICAgICAgICAgICBzdXJmYWNlLnNpemUueCAvIG1hc2sud2lkdGgsXG4gICAgICAgICAgICBzdXJmYWNlLnNpemUueSAvIG1hc2suaGVpZ2h0LFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmlzaWJsZVNpemUgPSB2ZWMyKHN1cmZhY2Uuc2l6ZS54LCBzdXJmYWNlLnZpc2libGVIZWlnaHQpO1xuICAgICAgbWFza1JlY3RhbmdsZVszXSAqPSB2aXNpYmxlU2l6ZS55IC8gc3VyZmFjZS5zaXplLnk7XG5cbiAgICAgIGNvbnN0IHRvcExlZnQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihzdXJmYWNlLnBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICAgIHZlYzIuYWRkKHN1cmZhY2UucG9zaXRpb24sIHZpc2libGVTaXplKVxuICAgICAgKTtcblxuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTWFzaywgbWFzayA9PT0gJ3NvbGlkJyA/IDAgOiAxKTtcbiAgICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV92YWx1ZSwgZ2V0VmFsdWUoaXRlbSkpO1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdRdWFkKFxuICAgICAgICB0aGlzLm1hc2tQcm9ncmFtLFxuICAgICAgICBbXG4gICAgICAgICAgdG9wTGVmdC54LFxuICAgICAgICAgIHRvcExlZnQueSxcbiAgICAgICAgICBib3R0b21SaWdodC54IC0gdG9wTGVmdC54LFxuICAgICAgICAgIGJvdHRvbVJpZ2h0LnkgLSB0b3BMZWZ0LnksXG4gICAgICAgIF0sXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgbWFza1JlY3RhbmdsZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB1bmlmb3JtcyB0aGF0IGFyZSB0aGUgc2FtZSBmb3IgZXZlcnkgbGlnaHQgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIHNldFNjZW5lVW5pZm9ybXMoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICB7IHByb2dyYW0sIHVuaWZvcm1zIH06IEdsUHJvZ3JhbSxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmVcbiAgKSB7XG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9zY3JlZW4sIHNjZW5lLnNjcmVlbi54LCBzY2VuZS5zY3JlZW4ueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTm9ybWFsTWFwLCBzY2VuZS5ub3JtYWxNYXAgPyAxIDogMCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2FsbExpZ2h0aW5nWU9mZnNldCwgc2NlbmUud2FsbExpZ2h0aW5nWU9mZnNldCk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdW5pZm9ybXMudV93YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZSxcbiAgICAgIHNjZW5lLndhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB1bmlmb3Jtcy51X3dhbGxTaGFkb3dMZW5ndGhGYWN0b3IsXG4gICAgICBzY2VuZS53YWxsU2hhZG93TGVuZ3RoRmFjdG9yXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9iYW5kaW5nLCBzY2VuZS5iYW5kaW5nKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zY2VuZU5vcm1hbE1hcCwgVGV4dHVyZVVuaXQuTm9ybWFsTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zdXJmYWNlTWFwLCBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9saWdodE1hcCwgVGV4dHVyZVVuaXQuTGlnaHRNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3JlZ2lvblNoYWRvd01hcCwgVGV4dHVyZVVuaXQuUmVnaW9uU2hhZG93TWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9vYmplY3RTaGFkb3dNYXAsIFRleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB1bmlmb3JtcyBmb3IgYSBsaWdodCBhbmQgZHJhdyBpdHMgYm91bmRpbmcgYm94XG4gICAqL1xuICBwcml2YXRlIGRyYXdMaWdodChcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHByb2dyYW06IEdsUHJvZ3JhbSxcbiAgICBsaWdodDogTGlnaHQsXG4gICAgc2NlbmU6IFNoYWRlclNjZW5lXG4gICkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IGxpZ2h0LmJvdW5kcztcbiAgICBjb25zdCB0b3BMZWZ0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4ocG9zaXRpb24pO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4odmVjMi5hZGQocG9zaXRpb24sIHNpemUpKTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMWYocHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0UmFkaXVzLCBsaWdodC5yYWRpdXMpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRIZWlnaHQsIGxpZ2h0LmhlaWdodCk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgcHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0TWFwU2l6ZSxcbiAgICAgIGxpZ2h0LnJlZ2lvblNoYWRvd0NhbnZhcy53aWR0aFxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgcHJvZ3JhbS51bmlmb3Jtcy51X2Zvb3RPcmlnaW4sXG4gICAgICBzY2VuZS5jYW1lcmEuYm91bmRzLnRvcCAtIGxpZ2h0LnBvc2l0aW9uLnlcbiAgICApO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdRdWFkKFxuICAgICAgcHJvZ3JhbSxcbiAgICAgIFtcbiAgICAgICAgdG9wTGVmdC54LFxuICAgICAgICB0b3BMZWZ0LnksXG4gICAgICAgIGJvdHRvbVJpZ2h0LnggLSB0b3BMZWZ0LngsXG4gICAgICAgIGJvdHRvbVJpZ2h0LnkgLSB0b3BMZWZ0LnksXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBwb3NpdGlvbi54IC0gbGlnaHQucG9zaXRpb24ueCxcbiAgICAgICAgcG9zaXRpb24ueSAtIGxpZ2h0LnBvc2l0aW9uLnksXG4gICAgICAgIHNpemUueCxcbiAgICAgICAgc2l6ZS55LFxuICAgICAgXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzY2VuZSdzIGxpZ2h0IG1hcCBpbnRvIHRoZSBjYW52YXMsIGFuZCBhZGQgdXAgdGhlIHNjZW5lJ3NcbiAgICogc3BlY3VsYXIgaGlnaGxpZ2h0cyBpZiBpdCBoYXMgYSBzcGVjdWxhciBtYXBcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoc2NlbmU6IFNoYWRlclNjZW5lKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmICghZ2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZShzY2VuZS5zY3JlZW4pO1xuICAgIHRoaXMuY29udGV4dC5pbnZhbGlkYXRlQ2FudmFzZXMoKTtcblxuICAgIGlmIChzY2VuZS5ub3JtYWxNYXApIHtcbiAgICAgIHRoaXMudXBsb2FkKFRleHR1cmVVbml0Lk5vcm1hbE1hcCwgc2NlbmUubm9ybWFsTWFwLCBnbC5ORUFSRVNUKTtcbiAgICB9XG5cbiAgICAvLyBFYWNoIHBpeGVsIG9mIHRoZSBzdXJmYWNlIG1hcCBiZWxvbmdzIHRvIG9uZSBzdXJmYWNlLCBzbyB0aGVyZSdzIG5vXG4gICAgLy8gYmxlbmRpbmcgYW5kIHN1cmZhY2VzIGNvdmVyIHdoYXRldmVyJ3MgdW5kZXJuZWF0aCB0aGVtXG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG4gICAgZ2wudXNlUHJvZ3JhbSh0aGlzLm1hc2tQcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZihcbiAgICAgIHRoaXMubWFza1Byb2dyYW0udW5pZm9ybXMudV9zY3JlZW4sXG4gICAgICBzY2VuZS5zY3JlZW4ueCxcbiAgICAgIHNjZW5lLnNjcmVlbi55XG4gICAgKTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zdXJmYWNlVGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIFN1cmZhY2VUeXBlLk5vbmUpO1xuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIHRoaXMuZHJhd1N1cmZhY2VzKGdsLCBzY2VuZSwgKHsgc3VyZmFjZSB9KSA9PlxuICAgICAgdGhpcy5zdXJmYWNlVmFsdWUoc3VyZmFjZSwgc2NlbmUpXG4gICAgKTtcblxuICAgIC8vIFN0YXJ0IHRoZSBsaWdodCBtYXAgd2l0aCB0aGUgYW1iaWVudCBsaWdodCBvbiBlYWNoIHN1cmZhY2VcbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgdGhpcy5kcmF3U3VyZmFjZXMoZ2wsIHNjZW5lLCAoeyBhbWJpZW50TGlnaHQ6IHsgciwgZywgYiwgYSB9IH0pID0+IFtcbiAgICAgIHIgLyAyNTUsXG4gICAgICBnIC8gMjU1LFxuICAgICAgYiAvIDI1NSxcbiAgICAgIGEsXG4gICAgXSk7XG5cbiAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoXG4gICAgICBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwLFxuICAgICAgdGhpcy5zdXJmYWNlVGFyZ2V0LnRleHR1cmUsXG4gICAgICBnbC5ORUFSRVNUXG4gICAgKTtcblxuICAgIHRoaXMuc2V0U2NlbmVVbmlmb3JtcyhnbCwgdGhpcy5kaWZmdXNlUHJvZ3JhbSwgc2NlbmUpO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHRoaXMuZGlmZnVzZVByb2dyYW0udW5pZm9ybXMudV9oaWdobGlnaHRTdHJlbmd0aCxcbiAgICAgIHNjZW5lLmhpZ2hsaWdodFN0cmVuZ3RoXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB0aGlzLmRpZmZ1c2VQcm9ncmFtLnVuaWZvcm1zLnVfc2hhZG93U3RyZW5ndGgsXG4gICAgICBzY2VuZS5zaGFkb3dTdHJlbmd0aFxuICAgICk7XG5cbiAgICBpZiAoc2NlbmUuc3BlY3VsYXJNYXApIHtcbiAgICAgIHRoaXMudXBsb2FkKFRleHR1cmVVbml0LlNwZWN1bGFyTWFwLCBzY2VuZS5zcGVjdWxhck1hcCwgZ2wuTkVBUkVTVCk7XG5cbiAgICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMuc3BlY3VsYXJQcm9ncmFtO1xuICAgICAgdGhpcy5zZXRTY2VuZVVuaWZvcm1zKGdsLCB0aGlzLnNwZWN1bGFyUHJvZ3JhbSwgc2NlbmUpO1xuICAgICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfc2NlbmVTcGVjdWxhck1hcCwgVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXApO1xuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc3BlY3VsYXJTdHJlbmd0aCwgc2NlbmUuc3BlY3VsYXJTdHJlbmd0aCk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zaGluaW5lc3MsIHNjZW5lLnNoaW5pbmVzcyk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV92aWV3VGlsdCwgc2NlbmUudmlld1RpbHQpO1xuXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuc3BlY3VsYXJUYXJnZXQuZnJhbWVidWZmZXIpO1xuICAgICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAxKTtcbiAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlciA9IHNjZW5lLmltYWdlU21vb3RoaW5nRW5hYmxlZCA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1Q7XG5cbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUubGlnaHRzKSB7XG4gICAgICB0aGlzLnVwbG9hZChUZXh0dXJlVW5pdC5MaWdodE1hcCwgbGlnaHQubGlnaHRDYW52YXMsIGZpbHRlcik7XG4gICAgICB0aGlzLnVwbG9hZChcbiAgICAgICAgVGV4dHVyZVVuaXQuUmVnaW9uU2hhZG93TWFwLFxuICAgICAgICBsaWdodC5yZWdpb25TaGFkb3dDYW52YXMsXG4gICAgICAgIGZpbHRlclxuICAgICAgKTtcbiAgICAgIHRoaXMudXBsb2FkKFxuICAgICAgICBUZXh0dXJlVW5pdC5PYmplY3RTaGFkb3dNYXAsXG4gICAgICAgIGxpZ2h0Lm9iamVjdFNoYWRvd0NhbnZhcyxcbiAgICAgICAgZmlsdGVyXG4gICAgICApO1xuXG4gICAgICAvLyBCbGVuZCB0aGUgc2FtZSB3YXkgYXMgdGhlICdzY3JlZW4nIGNvbXBvc2l0ZSBvcGVyYXRpb24sIGFuZCBsZWF2ZSB0aGVcbiAgICAgIC8vIGFscGhhIGNoYW5uZWwgYWxvbmVcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICBnbC5ibGVuZEZ1bmNTZXBhcmF0ZShnbC5PTkUsIGdsLk9ORV9NSU5VU19TUkNfQ09MT1IsIGdsLlpFUk8sIGdsLk9ORSk7XG4gICAgICB0aGlzLmRyYXdMaWdodChnbCwgdGhpcy5kaWZmdXNlUHJvZ3JhbSwgbGlnaHQsIHNjZW5lKTtcblxuICAgICAgaWYgKHNjZW5lLnNwZWN1bGFyTWFwKSB7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zcGVjdWxhclRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLk9ORSwgZ2wuT05FLCBnbC5aRVJPLCBnbC5PTkUpO1xuICAgICAgICB0aGlzLmRyYXdMaWdodChnbCwgdGhpcy5zcGVjdWxhclByb2dyYW0sIGxpZ2h0LCBzY2VuZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiB0aGUgY2FudmFzIHdpdGggdGhlIHNwZWN1bGFyIGhpZ2hsaWdodHMgZnJvbSB0aGVcbiAgICogbW9zdCByZWNlbnQgcmVuZGVyXG4gICAqL1xuICBwdWJsaWMgc2hvd1NwZWN1bGFyKHNjcmVlbjogdmVjMikge1xuICAgIGlmICh0aGlzLmNvbnRleHQuZ2wpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3VGV4dHVyZSh0aGlzLnNwZWN1bGFyVGFyZ2V0LnRleHR1cmUsIHNjcmVlbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgc3VyZmFjZSBtYXAgZnJvbSB0aGUgbW9zdFxuICAgKiByZWNlbnQgcmVuZGVyXG4gICAqL1xuICBwdWJsaWMgc2hvd1N1cmZhY2VzKHNjcmVlbjogdmVjMikge1xuICAgIGlmICh0aGlzLmNvbnRleHQuZ2wpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3VGV4dHVyZSh0aGlzLnN1cmZhY2VUYXJnZXQudGV4dHVyZSwgc2NyZWVuKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgYm91bmRpbmdSZWN0YW5nbGUsIGRyYXdJbWFnZUluUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBTY2VuZU9iamVjdCwgU2NlbmVPYmplY3RPcHRpb25zIH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5cbnR5cGUgRHJhd0NhbGxiYWNrID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgU3VyZmFjZU9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBiYWNrZ3JvdW5kIGNvbG91clxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgZm9yIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgaW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgbm9ybWFsIG1hcCwgdXNlZCB3aGVuIHRoZSBzaGFkZXIgaXMgZW5hYmxlZFxuICAgKi9cbiAgbm9ybWFsTWFwPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHNwZWN1bGFyIG1hcCwgdXNlZCB3aGVuIHRoZSBzaGFkZXIgaXMgZW5hYmxlZFxuICAgKi9cbiAgc3BlY3VsYXJNYXA/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU3VyZmFjZXMgYXJlIGRyYXduIGluIG9yZGVyIG9mIHotaW5kZXggYW5kIHRoZW4gYnkgdGhlaXIgYm90dG9tIGVkZ2VcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVwbGFjZSBhbnkgb2YgdGhlIGRlZmF1bHQgZHJhd2luZyBzdGVwcyBmb3IgdGhpcyBzdXJmYWNlLCBmb3Igb2JqZWN0c1xuICAgKiB0aGF0IGFyZW4ndCBhIHNpbmdsZSBpbWFnZVxuICAgKi9cbiAgY3VzdG9tRHJhdz86IHtcbiAgICBpbWFnZT86IERyYXdDYWxsYmFjaztcbiAgICBtYXNrPzogRHJhd0NhbGxiYWNrO1xuICAgIG5vcm1hbE1hcD86IERyYXdDYWxsYmFjaztcbiAgICBzcGVjdWxhck1hcD86IERyYXdDYWxsYmFjaztcbiAgfTtcbn07XG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1cmZhY2U8XG4gIE9wdGlvbnMgZXh0ZW5kcyBTdXJmYWNlT3B0aW9uc1xuPiBleHRlbmRzIFNjZW5lT2JqZWN0PE9wdGlvbnM+IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9STUFMX01BUF9ERUZBVUxUX0NPTE9VUiA9ICcjN2Y3ZmZmJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1BFQ1VMQVJfTUFQX0RFRkFVTFRfQ09MT1VSID0gJ2JsYWNrJztcblxuICBwdWJsaWMgY29sb3VyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGltYWdlOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBub3JtYWxNYXA6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHNwZWN1bGFyTWFwOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyB6SW5kZXg6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBjdXN0b21EcmF3OiBOb25OdWxsYWJsZTxTdXJmYWNlT3B0aW9uc1snY3VzdG9tRHJhdyddPiA9IHt9O1xuXG4gIC8qKlxuICAgKiBXb3JsZCB5LXBvc2l0aW9uIHdoZXJlIHRoaXMgc3VyZmFjZSBzdG9wcywgb3IgbnVsbCB0byBzaG93IGFsbCBvZiBpdFxuICAgKlxuICAgKiBUaGUgcmVzdCBvZiB0aGUgc3VyZmFjZSBpcyBoaWRkZW4gYW5kIGRvZXNuJ3QgcmVjZWl2ZSBhbnkgbGlnaHRpbmcsIHRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBzb21ldGhpbmcgdGhhdCdzIHN0YW5kaW5nIGluIHdhdGVyXG4gICAqL1xuICBwdWJsaWMgY2xpcEJvdHRvbTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIG92ZXJsYXlzOiBEcmF3Q2FsbGJhY2tbXSA9IFtdO1xuXG4gIHByaXZhdGUgY3VzdG9tTWFza0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgaW1hZ2VzIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGlzIHN1cmZhY2UsIG9yIHN0cmV0Y2hlZCB0byBmaXQ/XG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcmVwZWF0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGltYWdlIHdob3NlIGFscGhhIGNoYW5uZWwgZGVjaWRlcyB3aGljaCBwYXJ0cyBvZiB0aGlzIHN1cmZhY2VcbiAgICogcmVjZWl2ZSBsaWdodGluZ1xuICAgKlxuICAgKiBSZXR1cm5zICdzb2xpZCcgaWYgdGhlIHdob2xlIHN1cmZhY2UgcmVjZWl2ZXMgbGlnaHRpbmcsIG9yIG51bGwgaWYgbm90aGluZ1xuICAgKiBkb2VzIChmb3IgZXhhbXBsZSBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXQpXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0TWFzaygpOiBTY2VuZUltYWdlIHwgJ3NvbGlkJyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBmaWxsQmFja2dyb3VuZChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG91cjogc3RyaW5nKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvdXI7XG4gICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgdGhpcy5zaXplLnlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdJbWFnZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGltYWdlOiBTY2VuZUltYWdlKSB7XG4gICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgaW1hZ2UsIHRoaXMsIHRoaXMucmVwZWF0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgc29tZXRoaW5nIHRvIGJlIGRyYXduIG9uIHRvcCBvZiB0aGlzIHN1cmZhY2UsIGl0J3MgZHJhd24gc3RyYWlnaHQgYWZ0ZXJcbiAgICogdGhlIHN1cmZhY2Ugc28gdGhhdCBhbnl0aGluZyBpbiBmcm9udCBvZiB0aGUgc3VyZmFjZSB3aWxsIGNvdmVyIGl0XG4gICAqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCByZW1vdmVzIHRoZSBvdmVybGF5LiBPdmVybGF5cyBkb24ndCBjaGFuZ2UgdGhlXG4gICAqIHNoYXBlIG9mIHRoZSBzdXJmYWNlLCBhbmQgc3VyZmFjZXMgd2l0aCBvdmVybGF5cyBjYW4ndCBiZSBtZXJnZWRcbiAgICovXG4gIHB1YmxpYyBhZGRPdmVybGF5KGRyYXc6IERyYXdDYWxsYmFjayk6ICgpID0+IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheXMucHVzaChkcmF3KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJsYXlzID0gdGhpcy5vdmVybGF5cy5maWx0ZXIob3ZlcmxheSA9PiBvdmVybGF5ICE9PSBkcmF3KTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3Q29udGVudChjb250ZXh0KTtcbiAgICB0aGlzLm92ZXJsYXlzLmZvckVhY2gob3ZlcmxheSA9PiBvdmVybGF5KGNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJ0IG9mIHRoaXMgc3VyZmFjZSBhYm92ZSBgY2xpcEJvdHRvbWBcbiAgICovXG4gIHB1YmxpYyBnZXQgdmlzaWJsZUhlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNsaXBCb3R0b20gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpemUueTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNsaXBCb3R0b20gLSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCAwKSwgdGhpcy5zaXplLnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBkcmF3aW5nIGZ1bmN0aW9uLCBrZWVwaW5nIGl0IGluc2lkZSB0aGUgdmlzaWJsZSBwYXJ0IG9mIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3VmlzaWJsZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGRyYXc6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5jbGlwQm90dG9tID09PSBudWxsKSB7XG4gICAgICBkcmF3KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUueCxcbiAgICAgIHRoaXMudmlzaWJsZUhlaWdodFxuICAgICk7XG4gICAgY29udGV4dC5jbGlwKCk7XG4gICAgZHJhdygpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhpcyBzdXJmYWNlIHdpdGhvdXQgaXRzIG92ZXJsYXlzXG4gICAqL1xuICBwdWJsaWMgZHJhd0NvbnRlbnQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3VmlzaWJsZShjb250ZXh0LCAoKSA9PiB0aGlzLmRyYXdXaG9sZVN1cmZhY2UoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHBhcnQgb2YgdGhpcyBzdXJmYWNlIHRoYXQncyBoaWRkZW4gYnkgYGNsaXBCb3R0b21gXG4gICAqL1xuICBwdWJsaWMgZHJhd0hpZGRlbihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5jbGlwQm90dG9tID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudmlzaWJsZUhlaWdodDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHkgKyBoZWlnaHQsIHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSAtIGhlaWdodCk7XG4gICAgY29udGV4dC5jbGlwKCk7XG4gICAgdGhpcy5kcmF3V2hvbGVTdXJmYWNlKGNvbnRleHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3V2hvbGVTdXJmYWNlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcuaW1hZ2UpIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5pbWFnZShjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGlmICh0aGlzLmNvbG91cikge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCB0aGlzLmNvbG91cik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIHRoaXMuaW1hZ2UpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdDb2xvdXJNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGltYWdlOiBTY2VuZUltYWdlIHwgbnVsbCxcbiAgICBkZWZhdWx0Q29sb3VyOiBzdHJpbmdcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIGltYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCBkZWZhdWx0Q29sb3VyKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3Tm9ybWFsTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd1Zpc2libGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5ub3JtYWxNYXApIHtcbiAgICAgICAgdGhpcy5jdXN0b21EcmF3Lm5vcm1hbE1hcChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYXdDb2xvdXJNYXAoXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRoaXMubm9ybWFsTWFwLFxuICAgICAgICBTdXJmYWNlLk5PUk1BTF9NQVBfREVGQVVMVF9DT0xPVVJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZHJhd1NwZWN1bGFyTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd1Zpc2libGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5zcGVjdWxhck1hcCkge1xuICAgICAgICB0aGlzLmN1c3RvbURyYXcuc3BlY3VsYXJNYXAoY29udGV4dCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmF3Q29sb3VyTWFwKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB0aGlzLnNwZWN1bGFyTWFwLFxuICAgICAgICBTdXJmYWNlLlNQRUNVTEFSX01BUF9ERUZBVUxUX0NPTE9VUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBjdXN0b20gbWFzaywgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uIG9mIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgcHJvdGVjdGVkIHJlbmRlckN1c3RvbU1hc2soZHJhdzogRHJhd0NhbGxiYWNrKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHRoaXMuY3VzdG9tTWFza0NvbnRleHQgPz89IGRvY3VtZW50XG4gICAgICAuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIC5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmN1c3RvbU1hc2tDb250ZXh0O1xuICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuc2l6ZS54KTtcbiAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5zaXplLnkpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKC10aGlzLnBvc2l0aW9uLngsIC10aGlzLnBvc2l0aW9uLnkpO1xuICAgIGRyYXcoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGV4dC5jYW52YXM7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR3JvdW5kUmVjZWl2ZXJPcHRpb25zID0gU3VyZmFjZU9wdGlvbnM7XG5cbi8qKlxuICogQSByZWN0YW5nbGUgb2YgZ3JvdW5kIHRoYXQgcmVjZWl2ZXMgZ3JvdW5kIHNoYWRvd3NcbiAqXG4gKiBJbWFnZXMgYXJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91bmRSZWNlaXZlciBleHRlbmRzIFN1cmZhY2U8R3JvdW5kUmVjZWl2ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyByZXBlYXQgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IEdyb3VuZFJlY2VpdmVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXNrKCk6IFNjZW5lSW1hZ2UgfCAnc29saWQnIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDdXN0b21NYXNrKHRoaXMuY3VzdG9tRHJhdy5tYXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJ3NvbGlkJztcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXYWxsUmVjZWl2ZXJPcHRpb25zID0gU3VyZmFjZU9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hpY2ggcGFydHMgb2YgdGhpcyBzdXJmYWNlIHJlY2VpdmVcbiAgICogbGlnaHRpbmcsIHRoZSBkZWZhdWx0IGlzIHRoZSBhbHBoYSBjaGFubmVsIG9mIGBpbWFnZWBcbiAgICovXG4gIG1hc2s/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBpbWFnZSBiZSByZXBlYXRlZCBhY3Jvc3MgdGhlIHN1cmZhY2U/IE90aGVyd2lzZSBpdCB3aWxsIGJlXG4gICAqIHN0cmV0Y2hlZCB0byBmaXRcbiAgICovXG4gIHJlcGVhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIGZhbHNlIGlmIHRoaXMgc3VyZmFjZSBzaG91bGQgb25seSByZWNlaXZlIGFtYmllbnQgbGlnaHQgKHRoaXNcbiAgICogaXMgdXNlZnVsIGZvciB0aGUgdG9wcyBvZiB3YWxscylcbiAgICovXG4gIHJlY2VpdmVMaWdodD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiB0aGF0IHRoaXMgc3VyZmFjZSBpcyBmYWNpbmcsIGZvciBhbWJpZW50IGxpZ2h0aW5nXG4gICAqL1xuICBzdXJmYWNlTm9ybWFsPzogdmVjMjtcblxuICAvKipcbiAgICogSG93IGZhciB0b3dhcmRzIHRoZSBsaWdodCB0byBsb29rIGZvciBzaGFkb3dzIG9uIHRoZSBncm91bmQsIGluIHdvcmxkXG4gICAqIHVuaXRzLiBUaGlzIHNob3VsZCBiZSBlbm91Z2ggdG8gZ2V0IG91dCBvZiB0aGUgc3VyZmFjZSdzIG93biBzaGFkb3dcbiAgICovXG4gIHNoYWRvd0JpYXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzcHJpdGUgYW5kIGNpcmNsZSBzaGFkb3dzIGNsaW1iIHRoaXMgc3VyZmFjZT8gVGhpcyBzaG91bGQgYmUgZmFsc2VcbiAgICogZm9yIGFueXRoaW5nIHRoYXQgY2FzdHMgb25lIG9mIHRoZXNlIHNoYWRvd3MsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGluIGl0c1xuICAgKiBvd24gc2hhZG93XG4gICAqL1xuICBwcm9qZWN0U2hhZG93cz86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIG9yIHNwcml0ZSB0aGF0IHJlY2VpdmVzIHdhbGwgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgV2FsbFJlY2VpdmVyIGV4dGVuZHMgU3VyZmFjZTxXYWxsUmVjZWl2ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBtYXNrOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyByZXBlYXQgPSBmYWxzZTtcbiAgcHVibGljIHJlY2VpdmVMaWdodDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzdXJmYWNlTm9ybWFsOiB2ZWMyID0gdmVjMigpO1xuICBwdWJsaWMgc2hhZG93QmlhczogbnVtYmVyID0gMTtcbiAgcHVibGljIHByb2plY3RTaGFkb3dzOiBib29sZWFuID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBXYWxsUmVjZWl2ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1hc2soKTogU2NlbmVJbWFnZSB8ICdzb2xpZCcgfCBudWxsIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckN1c3RvbU1hc2sodGhpcy5jdXN0b21EcmF3Lm1hc2spO1xuICAgIH1cblxuICAgIC8vIEEgYmFja2dyb3VuZCBjb2xvdXIgY292ZXJzIHRoZSB3aG9sZSBzdXJmYWNlXG4gICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICByZXR1cm4gJ3NvbGlkJztcbiAgICB9XG5cbiAgICBjb25zdCBtYXNrID0gdGhpcy5tYXNrID8/IHRoaXMuaW1hZ2U7XG5cbiAgICByZXR1cm4gbWFzayAmJiBtYXNrLndpZHRoID4gMCAmJiBtYXNrLmhlaWdodCA+IDAgPyBtYXNrIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGlzIHN1cmZhY2UgY2FuIGJlIG1lcmdlZCB3aXRoIGFub3RoZXIgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIGNhbk1lcmdlKG90aGVyOiBXYWxsUmVjZWl2ZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBoYXNJbWFnZXMgPVxuICAgICAgdGhpcy5pbWFnZSB8fCB0aGlzLm1hc2sgfHwgdGhpcy5ub3JtYWxNYXAgfHwgdGhpcy5zcGVjdWxhck1hcDtcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lcmdlYWJsZSAmJlxuICAgICAgb3RoZXIubWVyZ2VhYmxlICYmXG4gICAgICB0aGlzLm92ZXJsYXlzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgb3RoZXIub3ZlcmxheXMubGVuZ3RoID09PSAwICYmXG4gICAgICAvLyBOb24tcmVwZWF0aW5nIGltYWdlcyB3b3VsZCBzdHJldGNoIGFjcm9zcyB0aGUgbWVyZ2VkIHN1cmZhY2VcbiAgICAgICh0aGlzLnJlcGVhdCB8fCAhaGFzSW1hZ2VzKSAmJlxuICAgICAgdGhpcy56SW5kZXggPT09IG90aGVyLnpJbmRleCAmJlxuICAgICAgdGhpcy5jb2xvdXIgPT09IG90aGVyLmNvbG91ciAmJlxuICAgICAgdGhpcy5pbWFnZSA9PT0gb3RoZXIuaW1hZ2UgJiZcbiAgICAgIHRoaXMubWFzayA9PT0gb3RoZXIubWFzayAmJlxuICAgICAgdGhpcy5ub3JtYWxNYXAgPT09IG90aGVyLm5vcm1hbE1hcCAmJlxuICAgICAgdGhpcy5zcGVjdWxhck1hcCA9PT0gb3RoZXIuc3BlY3VsYXJNYXAgJiZcbiAgICAgIHRoaXMucmVwZWF0ID09PSBvdGhlci5yZXBlYXQgJiZcbiAgICAgIHRoaXMucmVjZWl2ZUxpZ2h0ID09PSBvdGhlci5yZWNlaXZlTGlnaHQgJiZcbiAgICAgIHZlYzIuZXEodGhpcy5zdXJmYWNlTm9ybWFsLCBvdGhlci5zdXJmYWNlTm9ybWFsKSAmJlxuICAgICAgdGhpcy5zaGFkb3dCaWFzID09PSBvdGhlci5zaGFkb3dCaWFzICYmXG4gICAgICB0aGlzLnByb2plY3RTaGFkb3dzID09PSBvdGhlci5wcm9qZWN0U2hhZG93c1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHN1cmZhY2UgdGhhdCBjb3ZlcnMgdGhpcyBzdXJmYWNlIGFuZCBhbm90aGVyIHN1cmZhY2VcbiAgICovXG4gIHB1YmxpYyBtZXJnZShvdGhlcjogV2FsbFJlY2VpdmVyKTogV2FsbFJlY2VpdmVyIHtcbiAgICByZXR1cm4gbmV3IFdhbGxSZWNlaXZlcih0aGlzLmxpZ2h0aW5nLCB7XG4gICAgICAuLi4odGhpcyBhcyBXYWxsUmVjZWl2ZXIpLFxuICAgICAgLi4uYm91bmRpbmdSZWN0YW5nbGUodGhpcywgb3RoZXIpLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFJlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUmVnaW9uQ2FzdGVyIH0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgV2FsbFJlY2VpdmVyLCBXYWxsUmVjZWl2ZXJPcHRpb25zIH0gZnJvbSAnLi9TdXJmYWNlJztcblxuZXhwb3J0IHR5cGUgV2FsbE9wdGlvbnMgPSBPbWl0PFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxuICAncG9zaXRpb24nIHwgJ3NpemUnIHwgJ3JlY2VpdmVMaWdodCdcbj4gJiB7XG4gIC8qKlxuICAgKiBUaGUgYXJlYSBvZiB0aGUgZ3JvdW5kIHRoYXQgdGhpcyB3YWxsIHN0YW5kcyBvblxuICAgKi9cbiAgZm9vdHByaW50OiBSZWN0YW5nbGU7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHdhbGwncyBmcm9udCBmYWNlXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHNoYWRvd3MgaW5jbHVkZSB0aGUgd2FsbCdzIGZvb3RwcmludD9cbiAgICovXG4gIGluY2x1ZGVSZWdpb25TaGFkb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBlYXJhbmNlIG9mIHRoZSB0b3Agb2YgdGhlIHdhbGwsIGl0IG9ubHkgcmVjZWl2ZXMgYW1iaWVudCBsaWdodFxuICAgKi9cbiAgdG9wPzoge1xuICAgIGNvbG91cj86IHN0cmluZztcbiAgICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuICB9O1xufTtcblxuLyoqXG4gKiBBIHNvbGlkIHdhbGwgaW4gYSAzLzQgdmlld1xuICpcbiAqIFRoaXMgaXMgbWFkZSBmcm9tIGEgZnJvbnQgZmFjZSB0aGF0IHJlY2VpdmVzIGxpZ2h0LCBhIHRvcCB0aGF0IG9ubHkgcmVjZWl2ZXNcbiAqIGFtYmllbnQgbGlnaHQsIGFuZCBhIGZvb3RwcmludCB0aGF0IGNhc3RzIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGwge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RPUF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyByZWFkb25seSBmcm9udDogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgdG9wOiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSBjYXN0ZXI6IFJlZ2lvbkNhc3RlcjtcblxuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFdhbGxPcHRpb25zKSB7XG4gICAgY29uc3QgeyBmb290cHJpbnQsIGhlaWdodCwgaW5jbHVkZVJlZ2lvblNoYWRvdywgdG9wLCAuLi5mcm9udCB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkUmVnaW9uQ2FzdGVyKHtcbiAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBpbmNsdWRlUmVnaW9uU2hhZG93LFxuICAgIH0pO1xuICAgIHRoaXMuZnJvbnQgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgLi4uZnJvbnQsXG4gICAgICAuLi50aGlzLmZyb250UmVjdGFuZ2xlKGZvb3RwcmludCksXG4gICAgfSk7XG4gICAgdGhpcy50b3AgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgekluZGV4OiBvcHRpb25zLnpJbmRleCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBjb2xvdXI6IHRvcD8uY29sb3VyID8/IFdhbGwuREVGQVVMVF9UT1BfQ09MT1VSLFxuICAgICAgaW1hZ2U6IHRvcD8uaW1hZ2UsXG4gICAgICByZWNlaXZlTGlnaHQ6IGZhbHNlLFxuICAgICAgLi4udGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50OiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IGJvdHRvbSA9IGZvb3RwcmludC5wb3NpdGlvbi55ICsgZm9vdHByaW50LnNpemUueTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihmb290cHJpbnQucG9zaXRpb24ueCwgYm90dG9tIC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogdmVjMihmb290cHJpbnQuc2l6ZS54LCB0aGlzLmhlaWdodCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdG9wUmVjdGFuZ2xlKGZvb3RwcmludDogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIoZm9vdHByaW50LnBvc2l0aW9uLngsIGZvb3RwcmludC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogZm9vdHByaW50LnNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgd2FsbCBzbyB0aGF0IGl0cyBmb290cHJpbnQgaXMgYXQgYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICBjb25zdCBmb290cHJpbnQgPSB7IHBvc2l0aW9uLCBzaXplOiB0aGlzLmNhc3Rlci5zaXplIH07XG5cbiAgICB0aGlzLmNhc3Rlci5tb3ZlVG8ocG9zaXRpb24pO1xuICAgIHRoaXMuZnJvbnQubW92ZVRvKHRoaXMuZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50KS5wb3NpdGlvbik7XG4gICAgdGhpcy50b3AubW92ZVRvKHRoaXMudG9wUmVjdGFuZ2xlKGZvb3RwcmludCkucG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHdhbGwgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMuZnJvbnQucmVtb3ZlKCk7XG4gICAgdGhpcy50b3AucmVtb3ZlKCk7XG4gICAgdGhpcy5jYXN0ZXIucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEdsQ29udGV4dCB9IGZyb20gJy4uL2NvcmUnO1xuZXhwb3J0IHR5cGUgeyBSZWN0YW5nbGUsIFNjZW5lQ2FtZXJhLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5leHBvcnQgeyBBY3RvciB9IGZyb20gJy4vQWN0b3InO1xuZXhwb3J0IHR5cGUgeyBBY3Rvck9wdGlvbnMsIEFjdG9yU2hhZG93LCBTcHJpdGVBY3Rvck9wdGlvbnMgfSBmcm9tICcuL0FjdG9yJztcbmV4cG9ydCB7IENpcmNsZUNhc3RlciwgUmVnaW9uQ2FzdGVyLCBTcHJpdGVDYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5leHBvcnQgdHlwZSB7XG4gIENpcmNsZUNhc3Rlck9wdGlvbnMsXG4gIFJlZ2lvbkNhc3Rlck9wdGlvbnMsXG4gIFNoYWRvd0Nhc3RlcixcbiAgU3ByaXRlQ2FzdGVyT3B0aW9ucyxcbn0gZnJvbSAnLi9DYXN0ZXInO1xuZXhwb3J0IHsgTGlnaHQgfSBmcm9tICcuL0xpZ2h0JztcbmV4cG9ydCB0eXBlIHsgTGlnaHRPcHRpb25zIH0gZnJvbSAnLi9MaWdodCc7XG5leHBvcnQgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuZXhwb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbU9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmV4cG9ydCB7IFNjZW5lT2JqZWN0IH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5leHBvcnQgdHlwZSB7IFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuZXhwb3J0IHsgR3JvdW5kUmVjZWl2ZXIsIFN1cmZhY2UsIFdhbGxSZWNlaXZlciB9IGZyb20gJy4vU3VyZmFjZSc7XG5leHBvcnQgdHlwZSB7XG4gIEdyb3VuZFJlY2VpdmVyT3B0aW9ucyxcbiAgU3VyZmFjZU9wdGlvbnMsXG4gIFdhbGxSZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vU3VyZmFjZSc7XG5leHBvcnQgeyBXYWxsIH0gZnJvbSAnLi9XYWxsJztcbmV4cG9ydCB0eXBlIHsgV2FsbE9wdGlvbnMgfSBmcm9tICcuL1dhbGwnO1xuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCByZWN0YW5nbGVUb0ludGVydmFsIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBTaWRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IE1FUkdFX01BWF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgTUVSR0VfT1JERVIgPSBbJ2R1cGxpY2F0ZScsIFNpZGUuQm90dG9tLCBTaWRlLlJpZ2h0LCBTaWRlLlRvcCwgU2lkZS5MZWZ0XTtcblxudHlwZSBNZXJnZWFibGU8VD4gPSBSZWN0YW5nbGUgJiB7XG4gIGNhbk1lcmdlKG90aGVyOiBUKTogYm9vbGVhbjtcbiAgbWVyZ2Uob3RoZXI6IFQpOiBUO1xufTtcblxudHlwZSBNZXJnZTxUPiA9IFtULCBULCBTaWRlIHwgJ2R1cGxpY2F0ZSddO1xuXG4vKipcbiAqIEZpbmQgcGFpcnMgb2YgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgY2FuIGJlIG1lcmdlZFxuICovXG5mdW5jdGlvbiBmaW5kTWVyZ2VzPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KGl0ZW1zOiBUW10pOiBNZXJnZTxUPltdIHtcbiAgY29uc3QgcmVzdWx0OiBNZXJnZTxUPltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGEgPSByZWN0YW5nbGVUb0ludGVydmFsKGl0ZW1zW2ldKTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBiID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChpdGVtc1tqXSk7XG5cbiAgICAgIGlmICghaXRlbXNbaV0uY2FuTWVyZ2UoaXRlbXNbal0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGFuZCBCIGFyZSB0aGUgc2FtZVxuICAgICAgaWYgKFxuICAgICAgICBhLnRvcCA9PT0gYi50b3AgJiZcbiAgICAgICAgYS5ib3R0b20gPT09IGIuYm90dG9tICYmXG4gICAgICAgIGEubGVmdCA9PT0gYi5sZWZ0ICYmXG4gICAgICAgIGEucmlnaHQgPT09IGIucmlnaHRcbiAgICAgICkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCAnZHVwbGljYXRlJ10pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIGJvdHRvbSBlZGdlIG9mIEFcbiAgICAgIGlmIChhLmJvdHRvbSA9PT0gYi50b3AgJiYgYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS5yaWdodCA9PT0gYi5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkJvdHRvbV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgdG9wIGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEudG9wID09PSBiLmJvdHRvbSAmJiBhLmxlZnQgPT09IGIubGVmdCAmJiBhLnJpZ2h0ID09PSBiLnJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuVG9wXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSByaWdodCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLnJpZ2h0ID09PSBiLmxlZnQgJiYgYS50b3AgPT09IGIudG9wICYmIGEuYm90dG9tID09PSBiLmJvdHRvbSkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlJpZ2h0XSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSBsZWZ0IGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEubGVmdCA9PT0gYi5yaWdodCAmJiBhLnRvcCA9PT0gYi50b3AgJiYgYS5ib3R0b20gPT09IGIuYm90dG9tKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuTGVmdF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogTWVyZ2UgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgcGVyZmVjdGx5IGNvbm5lY3RlZCBvbiBvbmVcbiAqIHNpZGUsIG9yIGFyZSBleGFjdCBkdXBsaWNhdGVzIG9mIGVhY2ggb3RoZXJcbiAqXG4gKiBgb25NZXJnZWAgaXMgY2FsbGVkIGVhY2ggdGltZSAyIGl0ZW1zIGFyZSByZXBsYWNlZCB3aXRoIGEgc2luZ2xlIGl0ZW0uIElmXG4gKiB0aGUgaXRlbXMgd2VyZSBkdXBsaWNhdGVzLCB0aGUgbWVyZ2VkIGl0ZW0gaXMgdGhlIGZpcnN0IGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KFxuICBpdGVtczogVFtdLFxuICBvbk1lcmdlPzogKG1lcmdlZDogVCwgYTogVCwgYjogVCkgPT4gdm9pZFxuKTogVFtdIHtcbiAgLy8gU29ydCBpdGVtcyBieSB5LXBvc2l0aW9uIHRoZW4geC1wb3NpdGlvblxuICBsZXQgcmVzdWx0ID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEucG9zaXRpb24ueSA9PT0gYi5wb3NpdGlvbi55KSB7XG4gICAgICByZXR1cm4gYS5wb3NpdGlvbi54IC0gYi5wb3NpdGlvbi54O1xuICAgIH1cblxuICAgIHJldHVybiBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG4gIH0pO1xuXG4gIGxldCBpID0gMDtcbiAgbGV0IG1lcmdlczogTWVyZ2U8VD5bXTtcbiAgd2hpbGUgKFxuICAgIChtZXJnZXMgPSBmaW5kTWVyZ2VzKHJlc3VsdCkpLmxlbmd0aCA+IDAgJiZcbiAgICBpKysgPCBNRVJHRV9NQVhfSVRFUkFUSU9OU1xuICApIHtcbiAgICAvLyBNZXJnZSBpdGVtcyBpbiBhIHNwZWNpZmljIG9yZGVyIChlLmcuIGl0ZW1zIHRoYXQgY29ubmVjdCBvbiB0aGUgYm90dG9tXG4gICAgLy8gZmFjZSBmaXJzdCwgb3IgaXRlbXMgdGhhdCBhcmUgZXhhY3QgZHVwbGljYXRlcyBmaXJzdCwgZXRjLilcbiAgICBtZXJnZXMuc29ydChcbiAgICAgIChhLCBiKSA9PiBNRVJHRV9PUkRFUi5pbmRleE9mKGFbMl0pIC0gTUVSR0VfT1JERVIuaW5kZXhPZihiWzJdKVxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IFthLCBiLCBzaWRlXSBvZiBtZXJnZXMpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaXRlbXMgc3RpbGwgZXhpc3QgKHRoZXkgbWlnaHQgaGF2ZSBiZWVuIG1lcmdlZCBhbmRcbiAgICAgIC8vIHJlbW92ZWQgaW4gYSBwcmV2aW91cyBpdGVyYXRpb24pXG4gICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhhKSB8fCAhcmVzdWx0LmluY2x1ZGVzKGIpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2lkZSA9PT0gJ2R1cGxpY2F0ZScpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGIpO1xuICAgICAgICBvbk1lcmdlPy4oYSwgYSwgYik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXJnZWQgPSBhLm1lcmdlKGIpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGEgJiYgaXRlbSAhPT0gYik7XG4gICAgICByZXN1bHQucHVzaChtZXJnZWQpO1xuICAgICAgb25NZXJnZT8uKG1lcmdlZCwgYSwgYik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG5leHBvcnQgdHlwZSBMaW5lID0ge1xuICBzdGFydDogdmVjMjtcbiAgZW5kOiB2ZWMyO1xufTtcblxuZXhwb3J0IGVudW0gU2VjdG9yMWQge1xuICBCZWZvcmUgPSAnYmVmb3JlJyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIEFmdGVyID0gJ2FmdGVyJyxcbn1cblxuZXhwb3J0IGVudW0gU2VjdG9yMmQge1xuICBUb3BMZWZ0ID0gJ3RvcC1sZWZ0JyxcbiAgVG9wID0gJ3RvcCcsXG4gIFRvcFJpZ2h0ID0gJ3RvcC1yaWdodCcsXG4gIExlZnQgPSAnbGVmdCcsXG4gIEluc2lkZSA9ICdpbnNpZGUnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbUxlZnQgPSAnYm90dG9tLWxlZnQnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgQm90dG9tUmlnaHQgPSAnYm90dG9tLXJpZ2h0Jyxcbn1cblxuZXhwb3J0IHR5cGUgUG9seWdvblZlcnRpY2VzID0gKFxuICB8IHZlYzJcbiAgfCAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZClcbilbXTtcblxuZXhwb3J0IGVudW0gU2lkZSB7XG4gIFRvcCA9ICd0b3AnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBMZWZ0ID0gJ2xlZnQnLFxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBJbnRlcnZhbDFkLCBJbnRlcnZhbDJkLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBMaW5lLCBQb2x5Z29uVmVydGljZXMsIFNlY3RvcjFkLCBTZWN0b3IyZCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbGluZSBzZWdtZW50J3Mgbm9ybWFsIGlzIGZhY2luZyB0b3dhcmRzIGEgcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJc0ZhY2luZyhsaW5lOiBMaW5lLCBwb3NpdGlvbjogdmVjMikge1xuICBjb25zdCBlZGdlID0gdmVjMi5ub3IodmVjMi5zdWIobGluZS5lbmQsIGxpbmUuc3RhcnQpKTtcbiAgY29uc3QgZWRnZU5vcm1hbCA9IHZlYzIoZWRnZS55LCAtZWRnZS54KTtcbiAgY29uc3QgbGlnaHROb3JtYWwgPSB2ZWMyLm5vcihcbiAgICB2ZWMyLnN1Yih2ZWMyLm11bCh2ZWMyLmFkZChsaW5lLnN0YXJ0LCBsaW5lLmVuZCksIDAuNSksIHBvc2l0aW9uKVxuICApO1xuXG4gIHJldHVybiB2ZWMyLmRvdChsaWdodE5vcm1hbCwgZWRnZU5vcm1hbCkgPD0gMDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwb2x5Z29uIHBhdGggb24gYSBjYW52YXMgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbihcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAuLi52ZXJ0aWNlczogUG9seWdvblZlcnRpY2VzXG4pIHtcbiAgaWYgKHZlcnRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGlmICh0eXBlb2YgdmVydGljZXNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2ZXJ0aWNlc1swXShjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHZlcnRpY2VzW2ldIGFzIEZ1bmN0aW9uKShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5saW5lVG8oKHZlcnRpY2VzW2ldIGFzIHZlYzIpLngsICh2ZXJ0aWNlc1tpXSBhcyB2ZWMyKS55KTtcbiAgICB9XG4gIH1cbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3RvciBvZiBhIHBvaW50IHJlbGF0aXZlIHRvIGEgMWQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3RvcjFkKG46IG51bWJlciwgaW50ZXJ2YWw6IEludGVydmFsMWQpOiBTZWN0b3IxZCB7XG4gIGlmIChuIDw9IGludGVydmFsLnN0YXJ0KSB7XG4gICAgcmV0dXJuIFNlY3RvcjFkLkJlZm9yZTtcbiAgfVxuXG4gIGlmIChuID49IGludGVydmFsLmVuZCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5BZnRlcjtcbiAgfVxuXG4gIHJldHVybiBTZWN0b3IxZC5JbnNpZGU7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IyZChwb2ludDogdmVjMiwgaW50ZXJ2YWw6IEludGVydmFsMmQpOiBTZWN0b3IyZCB7XG4gIGNvbnN0IHggPSBzZWN0b3IxZChwb2ludC54LCB7IHN0YXJ0OiBpbnRlcnZhbC5sZWZ0LCBlbmQ6IGludGVydmFsLnJpZ2h0IH0pO1xuICBjb25zdCB5ID0gc2VjdG9yMWQocG9pbnQueSwgeyBzdGFydDogaW50ZXJ2YWwudG9wLCBlbmQ6IGludGVydmFsLmJvdHRvbSB9KTtcblxuICByZXR1cm4ge1xuICAgIFtTZWN0b3IxZC5CZWZvcmVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5MZWZ0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tTGVmdCxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5JbnNpZGVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wLFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkluc2lkZSxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbSxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5BZnRlcl06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BSaWdodCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5SaWdodCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbVJpZ2h0LFxuICAgIH0sXG4gIH1beF1beV07XG59XG5cbmNvbnN0IHNpbGhvdWV0dGVzID0gbmV3IFdlYWtNYXA8U2NlbmVJbWFnZSwgSFRNTENhbnZhc0VsZW1lbnQ+KCk7XG5cbi8qKlxuICogR2V0IGEgYmxhY2sgY29weSBvZiBhbiBpbWFnZSB3aGljaCBrZWVwcyB0aGUgaW1hZ2UncyBhbHBoYSBjaGFubmVsLCBvciBudWxsXG4gKiBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbGhvdWV0dGUoaW1hZ2U6IFNjZW5lSW1hZ2UpOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICBpZiAoaW1hZ2Uud2lkdGggPT09IDAgfHwgaW1hZ2UuaGVpZ2h0ID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmICFpbWFnZS5jb21wbGV0ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHNpbGhvdWV0dGVzLmdldChpbWFnZSk7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcmVzdWx0LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgcmVzdWx0LmhlaWdodCA9IGltYWdlLmhlaWdodDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSByZXN1bHQuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgcmVzdWx0LndpZHRoLCByZXN1bHQuaGVpZ2h0KTtcblxuICAgIHNpbGhvdWV0dGVzLnNldChpbWFnZSwgcmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IGRyYXdJbWFnZUluUmVjdGFuZ2xlLCBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgUmVmbGVjdGlvblN5c3RlbSB9IGZyb20gJy4vUmVmbGVjdGlvblN5c3RlbSc7XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgPSBSZWN0YW5nbGUgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hpY2ggcGFydHMgb2YgdGhpcyByZWN0YW5nbGUgYXJlXG4gICAqIHJlZmxlY3RpdmUsIHRoZSBkZWZhdWx0IGlzIHRoZSB3aG9sZSByZWN0YW5nbGVcbiAgICovXG4gIG1hc2s/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBtYXNrIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVjdGFuZ2xlPyBPdGhlcndpc2UgaXQgd2lsbCBiZVxuICAgKiBzdHJldGNoZWQgdG8gZml0XG4gICAqL1xuICByZXBlYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIb3cgc3Ryb25nIHRoZSByZWZsZWN0aW9uIGlzLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgc3RyZW5ndGg/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEFuIGFyZWEgdGhhdCBzaG93cyByZWZsZWN0aW9uc1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1hc2s6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBwdWJsaWMgcmVwZWF0OiBib29sZWFuO1xuICBwdWJsaWMgc3RyZW5ndGg6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW07XG5cbiAgcHJpdmF0ZSByZW1vdmVDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gICAgZGVmYXVsdFN0cmVuZ3RoOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucyA9IHJlZmxlY3Rpb25zO1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweShvcHRpb25zLnNpemUpO1xuICAgIHRoaXMubWFzayA9IG9wdGlvbnMubWFzayA/PyBudWxsO1xuICAgIHRoaXMucmVwZWF0ID0gb3B0aW9ucy5yZXBlYXQgPz8gZmFsc2U7XG4gICAgdGhpcy5zdHJlbmd0aCA9IG9wdGlvbnMuc3RyZW5ndGggPz8gZGVmYXVsdFN0cmVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGwgdGhpcyBhcmVhLCBzbyB0aGF0IHRoZSBjb250ZXh0IG9ubHkga2VlcHMgcmVmbGVjdGl2ZSBwYXJ0cyBvciBzbyB0aGF0XG4gICAqIGl0IHNob3dzIHdoaWNoIHBhcnRzIGFyZSByZWZsZWN0aXZlXG4gICAqL1xuICBwdWJsaWMgZHJhd01hc2soY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgdGhpcy5tYXNrLCB0aGlzLCB0aGlzLnJlcGVhdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB0aGlzLnNpemUueCxcbiAgICAgICAgdGhpcy5zaXplLnlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgcmVjZWl2ZXIgaXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIG9uUmVtb3ZlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgcmVjZWl2ZXIgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucy5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgPSBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zO1xuXG4vKipcbiAqIEEgcmVmbGVjdGl2ZSBwYXJ0IG9mIHRoZSBmbG9vclxuICovXG5leHBvcnQgY2xhc3MgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIgZXh0ZW5kcyBSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NUUkVOR1RIID0gMC41O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbSxcbiAgICBvcHRpb25zOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIocmVmbGVjdGlvbnMsIG9wdGlvbnMsIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLkRFRkFVTFRfU1RSRU5HVEgpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zID0gUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSB3YWxsIG1lZXRzIHRoZSBncm91bmQsIHRoZSBkZWZhdWx0IGlzIHRoZSBib3R0b20gb2YgdGhlIHJlY3RhbmdsZVxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBzZXQgaWYgdGhlIHJlY3RhbmdsZSBpcyBvbmx5IHBhcnQgb2YgYSB3YWxsLCBmb3IgZXhhbXBsZSBhXG4gICAqIG1pcnJvciB0aGF0J3MgaGFuZ2luZyBhYm92ZSB0aGUgZmxvb3JcbiAgICovXG4gIGZvb3Q/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgcmVmbGVjdGl2ZSBwYXJ0IG9mIGEgd2FsbFxuICovXG5leHBvcnQgY2xhc3MgV2FsbFJlZmxlY3Rpb25SZWNlaXZlciBleHRlbmRzIFJlZmxlY3Rpb25SZWNlaXZlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU1RSRU5HVEggPSAxO1xuXG4gIHB1YmxpYyBmb290OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKHJlZmxlY3Rpb25zLCBvcHRpb25zLCBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLkRFRkFVTFRfU1RSRU5HVEgpO1xuICAgIHRoaXMuZm9vdCA9IG9wdGlvbnMuZm9vdCA/PyB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgcmVjZWl2ZXIncyByZWZsZWN0aW9ucyB3aXRoIHRoZSBjYW1lcmEncyB0cmFuc2Zvcm1zIGFwcGxpZWRcbiAgICpcbiAgICogUmVmbGVjdGlvbnMgaW4gd2FsbHMgY2FuIGJlIGNvdmVyZWQgYnkgdGhpbmdzIHRoYXQgYXJlIGRyYXduIGFmdGVyd2FyZHMsIHNvXG4gICAqIHRoaXMgbmVlZHMgdG8gYmUgZHJhd24gc3RyYWlnaHQgYWZ0ZXIgdGhlIHdhbGxcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMucmVmbGVjdGlvbnMuZHJhd1dhbGxSZWNlaXZlcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBTcHJpdGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zcHJpdGUnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UsIHNwcml0ZUJvdW5kcyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBSZWZsZWN0aW9uU3lzdGVtIH0gZnJvbSAnLi9SZWZsZWN0aW9uU3lzdGVtJztcblxuLyoqXG4gKiBTb21ldGhpbmcgdGhhdCBpc24ndCBhIHNwcml0ZSBidXQgY2FuIHN0aWxsIGJlIHJlZmxlY3RlZFxuICpcbiAqIFRoaXMgb2JqZWN0IGlzIHJlYWQgZXZlcnkgZnJhbWUsIHNvIGl0IGNhbiBiZSBtb3ZlZCBieSBjaGFuZ2luZyBpdHMgcG9zaXRpb25cbiAqL1xuZXhwb3J0IHR5cGUgUmVmbGVjdGlvbk9iamVjdCA9IFJlY3RhbmdsZSAmIHtcbiAgLyoqXG4gICAqIFRoZSBpbWFnZSBmb3IgdGhpcyBvYmplY3QsIHRoaXMgaXMgc3RyZXRjaGVkIHRvIGZpdCB0aGUgcmVjdGFuZ2xlXG4gICAqL1xuICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgb2JqZWN0IGluIHdvcmxkIGNvb3JkaW5hdGVzLCB0aGlzIGlzIHVzZWQgaW5zdGVhZCBvZiBgaW1hZ2VgXG4gICAqL1xuICBkcmF3PzogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyA9IHtcbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhlIG9iamVjdCdzIGZlZXQgYXJlIGFib3ZlIHRoZSBib3R0b20gZWRnZSBvZiBpdHMgcmVjdGFuZ2xlLCB0aGlzXG4gICAqIGlzIHVzZWZ1bCBpZiBhbiBpbWFnZSBoYXMgc29tZSBlbXB0eSBzcGFjZSB1bmRlcm5lYXRoIHRoZSBvYmplY3RcbiAgICovXG4gIGZvb3RPZmZzZXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIHNvdXJjZSBhcHBlYXIgaW4gZmxvb3JzP1xuICAgKi9cbiAgZmxvb3I/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBzb3VyY2UgYXBwZWFyIGluIHdhbGxzP1xuICAgKi9cbiAgd2FsbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoaWNoIHdheSBhIHNwcml0ZSBhcHBlYXJzIHRvIGJlIGZhY2luZyBpbiBhIHdhbGwsIGZvciBlYWNoIGRpcmVjdGlvbiB0aGF0XG4gICAqIGl0IGNvdWxkIGJlIGZhY2luZy4gRGlyZWN0aW9ucyB0aGF0IGFyZW4ndCBpbiB0aGlzIGxpc3Qgd2lsbCBzdGF5IHRoZSBzYW1lXG4gICAqXG4gICAqIFdhbGxzIGZhY2UgdGhlIGNhbWVyYSwgc28gdGhpcyBzaG91bGQgc3dhcCBkaXJlY3Rpb25zIHdoaWNoIHBvaW50IHRvd2FyZHNcbiAgICogYW5kIGF3YXkgZnJvbSB0aGUgY2FtZXJhLiBUaGUgZGVmYXVsdCBzd2FwcyBub3J0aCBhbmQgc291dGgsIGFuZCB1cCBhbmRcbiAgICogZG93blxuICAgKi9cbiAgd2FsbERpcmVjdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgZm9yIGFuIG9iamVjdCB3aGVuIGl0J3Mgc2VlbiBpbiBhIHdhbGwsIHRoaXMgc2hvdWxkIHNob3cgdGhlXG4gICAqIG9wcG9zaXRlIHNpZGUgb2YgdGhlIG9iamVjdC4gSWYgdGhpcyBpc24ndCBzZXQgdGhlbiB0aGUgb2JqZWN0IGxvb2tzIHRoZVxuICAgKiBzYW1lIGFzIGl0IGRvZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICB3YWxsSW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zID0gUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzICZcbiAgKHsgc3ByaXRlOiBTcHJpdGUgfSB8IHsgb2JqZWN0OiBSZWZsZWN0aW9uT2JqZWN0IH0pO1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGFwcGVhcnMgaW4gZmxvb3JzIGFuZCB3YWxscyB0aGF0IGFyZSByZWZsZWN0aXZlXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uU291cmNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9XQUxMX0RJUkVDVElPTlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgbm9ydGg6ICdzb3V0aCcsXG4gICAgc291dGg6ICdub3J0aCcsXG4gICAgdXA6ICdkb3duJyxcbiAgICBkb3duOiAndXAnLFxuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBzcHJpdGU6IFNwcml0ZSB8IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSBvYmplY3Q6IFJlZmxlY3Rpb25PYmplY3QgfCBudWxsO1xuXG4gIHB1YmxpYyBmb290T2Zmc2V0OiBudW1iZXI7XG4gIHB1YmxpYyBmbG9vcjogYm9vbGVhbjtcbiAgcHVibGljIHdhbGw6IGJvb2xlYW47XG4gIHB1YmxpYyB3YWxsRGlyZWN0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHVibGljIHdhbGxJbWFnZTogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFdvcmxkIHktcG9zaXRpb24gd2hlcmUgdGhpcyBzb3VyY2UgbWVldHMgdGhlIHN1cmZhY2Ugb2Ygc29tZSB3YXRlciwgb3IgbnVsbFxuICAgKiBpZiBpdCBpc24ndCBpbiB3YXRlclxuICAgKlxuICAgKiBPbmx5IHRoZSBwYXJ0IGFib3ZlIHRoaXMgbGluZSBpcyByZWZsZWN0ZWQsIGFuZCBpdCdzIHJlZmxlY3RlZCBhcm91bmQgdGhpc1xuICAgKiBsaW5lIGluc3RlYWQgb2YgYXJvdW5kIHRoZSBzb3VyY2UncyBmZWV0XG4gICAqL1xuICBwdWJsaWMgd2F0ZXJsaW5lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbSxcbiAgICBvcHRpb25zOiBSZWZsZWN0aW9uU291cmNlT3B0aW9uc1xuICApIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zID0gcmVmbGVjdGlvbnM7XG4gICAgdGhpcy5zcHJpdGUgPSAnc3ByaXRlJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zcHJpdGUgOiBudWxsO1xuICAgIHRoaXMub2JqZWN0ID0gJ29iamVjdCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMub2JqZWN0IDogbnVsbDtcbiAgICB0aGlzLmZvb3RPZmZzZXQgPSBvcHRpb25zLmZvb3RPZmZzZXQgPz8gMDtcbiAgICB0aGlzLmZsb29yID0gb3B0aW9ucy5mbG9vciA/PyB0cnVlO1xuICAgIHRoaXMud2FsbCA9IG9wdGlvbnMud2FsbCA/PyB0cnVlO1xuICAgIHRoaXMud2FsbERpcmVjdGlvbnMgPVxuICAgICAgb3B0aW9ucy53YWxsRGlyZWN0aW9ucyA/PyBSZWZsZWN0aW9uU291cmNlLkRFRkFVTFRfV0FMTF9ESVJFQ1RJT05TO1xuICAgIHRoaXMud2FsbEltYWdlID0gb3B0aW9ucy53YWxsSW1hZ2UgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXJlYSBjb3ZlcmVkIGJ5IHRoaXMgc291cmNlIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHVibGljIGdldCBib3VuZHMoKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4gdGhpcy5zcHJpdGUgPyBzcHJpdGVCb3VuZHModGhpcy5zcHJpdGUpIDogdGhpcy5vYmplY3QhO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgc291cmNlIG1lZXRzIHRoZSBncm91bmRcbiAgICovXG4gIHB1YmxpYyBnZXQgZm9vdCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMuYm91bmRzO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uLnkgKyBzaXplLnkgLSB0aGlzLmZvb3RPZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGxpbmUgdGhhdCB0aGlzIHNvdXJjZSBpcyByZWZsZWN0ZWQgYXJvdW5kIGluIGEgZmxvb3JcbiAgICovXG4gIHByaXZhdGUgZ2V0IGZsb29yQXhpcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndhdGVybGluZSA/PyB0aGlzLmZvb3Q7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFyZWEgY292ZXJlZCBieSB0aGlzIHNvdXJjZSB3aGVuIGl0J3MgcmVmbGVjdGVkIGluIGEgZmxvb3JcbiAgICovXG4gIHB1YmxpYyBnZXQgZmxvb3JCb3VuZHMoKTogUmVjdGFuZ2xlIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihwb3NpdGlvbi54LCB0aGlzLmZsb29yQXhpcyAqIDIgLSAocG9zaXRpb24ueSArIHNpemUueSkpLFxuICAgICAgc2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcmVhIGNvdmVyZWQgYnkgdGhpcyBzb3VyY2Ugd2hlbiBpdCdzIHJlZmxlY3RlZCBpbiBhIHdhbGxcbiAgICovXG4gIHB1YmxpYyB3YWxsQm91bmRzKHdhbGxGb290OiBudW1iZXIpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMuYm91bmRzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyAod2FsbEZvb3QgLSB0aGlzLmZvb3QpICogMiksXG4gICAgICBzaXplLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGlzIHNvdXJjZSdzIHJlZmxlY3Rpb24gaW4gYSBmbG9vclxuICAgKlxuICAgKiBHb2luZyBiZWxvdyB0aGUgZmxvb3IgZG9lc24ndCBjaGFuZ2Ugd2hlcmUgc29tZXRoaW5nJ3MgZmVldCBhcmUsIHNvIHRoZVxuICAgKiByZWZsZWN0aW9uIGlzIGZsaXBwZWQgdXBzaWRlLWRvd24gYXJvdW5kIGl0cyBmZWV0XG4gICAqL1xuICBwdWJsaWMgZHJhd0luRmxvb3IoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoMCwgdGhpcy5mbG9vckF4aXMgKiAyKTtcbiAgICBjb250ZXh0LnNjYWxlKDEsIC0xKTtcblxuICAgIGlmICh0aGlzLndhdGVybGluZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0LnJlY3QoXG4gICAgICAgIHBvc2l0aW9uLngsXG4gICAgICAgIHBvc2l0aW9uLnksXG4gICAgICAgIHNpemUueCxcbiAgICAgICAgdGhpcy53YXRlcmxpbmUgLSBwb3NpdGlvbi55XG4gICAgICApO1xuICAgICAgY29udGV4dC5jbGlwKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhpcyBzb3VyY2UncyByZWZsZWN0aW9uIGluIGEgd2FsbFxuICAgKlxuICAgKiBUaGUgcmVmbGVjdGlvbiBpcyBhcyBmYXIgYmVoaW5kIHRoZSB3YWxsIGFzIHRoaXMgc291cmNlIGlzIGluIGZyb250IG9mIGl0LFxuICAgKiBzbyBpdCdzIHRoZSBzYW1lIHdheSB1cCBidXQgZnVydGhlciB1cCB0aGUgc2NyZWVuLCBhbmQgd2UgY2FuIHNlZSB0aGUgc2lkZVxuICAgKiBvZiB0aGlzIHNvdXJjZSB0aGF0IGZhY2VzIHRoZSB3YWxsXG4gICAqL1xuICBwdWJsaWMgZHJhd0luV2FsbChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHdhbGxGb290OiBudW1iZXIpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLCAod2FsbEZvb3QgLSB0aGlzLmZvb3QpICogMik7XG5cbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZUluV2FsbChjb250ZXh0LCB0aGlzLnNwcml0ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLndhbGxJbWFnZSkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICB0aGlzLndhbGxJbWFnZSxcbiAgICAgICAgcG9zaXRpb24ueCxcbiAgICAgICAgcG9zaXRpb24ueSxcbiAgICAgICAgc2l6ZS54LFxuICAgICAgICBzaXplLnlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhdyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1Nwcml0ZUluV2FsbChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNwcml0ZTogU3ByaXRlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID1cbiAgICAgIHRoaXMud2FsbERpcmVjdGlvbnNbc3ByaXRlLmRpcmVjdGlvbl0gPz8gc3ByaXRlLmRpcmVjdGlvbjtcblxuICAgIC8vIFRoZSBzcHJpdGUgY2FuIG9ubHkgZHJhdyBpdHNlbGYgZmFjaW5nIGl0cyBjdXJyZW50IGRpcmVjdGlvblxuICAgIGlmIChkaXJlY3Rpb24gPT09IHNwcml0ZS5kaXJlY3Rpb24pIHtcbiAgICAgIHNwcml0ZS5kcmF3KGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlID0gc3ByaXRlLmdldEltYWdlKGRpcmVjdGlvbik7XG4gICAgaWYgKCFpbWFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQudHJhbnNsYXRlKHNwcml0ZS5wb3NpdGlvbi54LCBzcHJpdGUucG9zaXRpb24ueSk7XG4gICAgY29udGV4dC5zY2FsZShzcHJpdGUuc2NhbGUsIHNwcml0ZS5zY2FsZSk7XG4gICAgY29udGV4dC5yb3RhdGUoc3ByaXRlLnJvdGF0aW9uKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgIGltYWdlLFxuICAgICAgLXNwcml0ZS5vcmlnaW4ueCxcbiAgICAgIC1zcHJpdGUub3JpZ2luLnksXG4gICAgICBpbWFnZS53aWR0aCxcbiAgICAgIGltYWdlLmhlaWdodFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICB0aGlzLnNwcml0ZS5kcmF3KGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUsIGltYWdlLCBkcmF3IH0gPSB0aGlzLm9iamVjdCE7XG5cbiAgICBpZiAoZHJhdykge1xuICAgICAgZHJhdyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKGltYWdlKSB7XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBzb3VyY2UgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucy5yZW1vdmUodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEZyYW1lLFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICBSZWN0YW5nbGUsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbiAgUmVmbGVjdGlvblJlY2VpdmVyLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9SZWZsZWN0aW9uUmVjZWl2ZXInO1xuaW1wb3J0IHsgUmVmbGVjdGlvblNvdXJjZSwgUmVmbGVjdGlvblNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL1JlZmxlY3Rpb25Tb3VyY2UnO1xuXG4vKipcbiAqIFJlbmRlcnMgZmxvb3IgYW5kIHdhbGwgcmVmbGVjdGlvbnNcbiAqXG4gKiBSZWZsZWN0aW9ucyBhcmUgZHJhd24gaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NlbmUsIHNvIHRoaXMgaGFzIHRvIGJlIGNhbGxlZCBpblxuICogc2V2ZXJhbCBzdGVwcy4gU2VlIGBXb3JsZGAgZm9yIGhvdyB0aGlzIGZpdHMgdG9nZXRoZXIgd2l0aCBldmVyeXRoaW5nIGVsc2VcbiAqXG4gKiAxLiBDYWxsIGBwcmVwYXJlKClgIGF0IHRoZSBzdGFydCBvZiBlYWNoIGZyYW1lXG4gKiAyLiBEcmF3IHRoZSBncm91bmRcbiAqIDMuIENhbGwgYGRyYXdGbG9vcigpYFxuICogNC4gRHJhdyB3YWxscyBhbmQgYWN0b3JzLCBjYWxsaW5nIGBkcmF3KClgIG9uIGVhY2ggd2FsbCByZWNlaXZlciBhcyBzb29uIGFzXG4gKiAgICBpdHMgd2FsbCBoYXMgYmVlbiBkcmF3blxuICovXG5leHBvcnQgY2xhc3MgUmVmbGVjdGlvblN5c3RlbSB7XG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUNvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwcml2YXRlIHNvdXJjZXM6IFJlZmxlY3Rpb25Tb3VyY2VbXSA9IFtdO1xuICBwcml2YXRlIGZsb29yUmVjZWl2ZXJzOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgd2FsbFJlY2VpdmVyczogV2FsbFJlZmxlY3Rpb25SZWNlaXZlcltdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBzY3JlZW4tc2l6ZWQgY2FudmFzZXMgdGhhdCByZWZsZWN0aW9ucyBhcmUgZHJhd24gaW50b1xuICAgKlxuICAgKiBgZmxvb3JTb3VyY2VzQ2FudmFzYCBzaG93cyBldmVyeSBzb3VyY2UgcmVmbGVjdGVkIGluIHRoZSBmbG9vciwgYXMgaWYgdGhlXG4gICAqIHdob2xlIGZsb29yIHdhcyByZWZsZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIGZsb29yU291cmNlc0NvbnRleHQgPSBSZWZsZWN0aW9uU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIGZsb29yU291cmNlc0NhbnZhcyA9IHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBmbG9vckNvbnRleHQgPSBSZWZsZWN0aW9uU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHJpdmF0ZSB3YWxsQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuXG4gIHByaXZhdGUgZnJhbWU6IEZyYW1lIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZmxvb3JTb3VyY2VzUmVhZHkgPSBmYWxzZTtcblxuICAvKipcbiAgICogQWRkIHNvbWV0aGluZyB0aGF0IGFwcGVhcnMgaW4gcmVmbGVjdGlvbnNcbiAgICovXG4gIHB1YmxpYyBhZGRTb3VyY2Uob3B0aW9uczogUmVmbGVjdGlvblNvdXJjZU9wdGlvbnMpOiBSZWZsZWN0aW9uU291cmNlIHtcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgUmVmbGVjdGlvblNvdXJjZSh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNvdXJjZXMucHVzaChzb3VyY2UpO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWZsZWN0aXZlIHBhcnQgb2YgdGhlIGZsb29yXG4gICAqL1xuICBwdWJsaWMgYWRkRmxvb3JSZWNlaXZlcihcbiAgICBvcHRpb25zOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKTogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gbmV3IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZmxvb3JSZWNlaXZlcnMucHVzaChyZWNlaXZlcik7XG5cbiAgICByZXR1cm4gcmVjZWl2ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVmbGVjdGl2ZSBwYXJ0IG9mIGEgd2FsbFxuICAgKi9cbiAgcHVibGljIGFkZFdhbGxSZWNlaXZlcihcbiAgICBvcHRpb25zOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9uc1xuICApOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgICBjb25zdCByZWNlaXZlciA9IG5ldyBXYWxsUmVmbGVjdGlvblJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5wdXNoKHJlY2VpdmVyKTtcblxuICAgIHJldHVybiByZWNlaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzb3VyY2Ugb3IgcmVjZWl2ZXIgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUob2JqZWN0OiBSZWZsZWN0aW9uU291cmNlIHwgUmVmbGVjdGlvblJlY2VpdmVyKSB7XG4gICAgdGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2VzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5mbG9vclJlY2VpdmVycyA9IHRoaXMuZmxvb3JSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSB0aGlzLndhbGxSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVhZHkgdG8gZHJhdyByZWZsZWN0aW9ucyBmb3IgYSBmcmFtZVxuICAgKi9cbiAgcHVibGljIHByZXBhcmUoZnJhbWU6IEZyYW1lKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZmxvb3JTb3VyY2VzUmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYGZsb29yU291cmNlc0NhbnZhc2AgaXMgdXAgdG8gZGF0ZSBmb3IgdGhpcyBmcmFtZVxuICAgKi9cbiAgcHVibGljIGRyYXdGbG9vclNvdXJjZXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSB8fCB0aGlzLmZsb29yU291cmNlc1JlYWR5KSB7XG4gICAgICByZXR1cm4gdGhpcy5mbG9vclNvdXJjZXNDYW52YXM7XG4gICAgfVxuXG4gICAgY29uc3QgdmlzaWJsZSA9IHRoaXMudmlzaWJsZUFyZWEoZnJhbWUpO1xuICAgIGNvbnN0IHNvdXJjZXMgPSB0aGlzLnNvcnRlZFNvdXJjZXMoXG4gICAgICB0aGlzLnNvdXJjZXMuZmlsdGVyKFxuICAgICAgICBzb3VyY2UgPT5cbiAgICAgICAgICBzb3VyY2UuZmxvb3IgJiYgcmVjdGFuZ2xlc0ludGVyc2VjdChzb3VyY2UuZmxvb3JCb3VuZHMsIHZpc2libGUpXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dCwgZnJhbWUpO1xuICAgIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4gc291cmNlLmRyYXdJbkZsb29yKHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dCkpO1xuICAgIHRoaXMuZmxvb3JTb3VyY2VzUmVhZHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXMuZmxvb3JTb3VyY2VzQ2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNjcmVlbi1zaXplZCBjb250ZXh0IG1hdGNoZXMgdGhlIGZyYW1lIGFuZCBjbGVhciBpdCwgcmVhZHkgZm9yXG4gICAqIGRyYXdpbmcgaW4gd29ybGQgY29vcmRpbmF0ZXNcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDb250ZXh0KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gZnJhbWUuc2NyZWVuLnggfHwgY2FudmFzLmhlaWdodCAhPT0gZnJhbWUuc2NyZWVuLnkpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGZyYW1lLnNjcmVlbi54O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGZyYW1lLnNjcmVlbi55O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmcmFtZS5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICBmcmFtZS5jYW1lcmEuc2V0VHJhbnNmb3Jtcyhjb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaWJsZUFyZWEoeyBjYW1lcmEgfTogRnJhbWUpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiBpbnRlcnZhbFRvUmVjdGFuZ2xlKGNhbWVyYS5ib3VuZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzb3VyY2VzIGluIHRoZSBvcmRlciB0aGF0IHRoZXkgc2hvdWxkIGJlIGRyYXduLCBzb3VyY2VzIHdpdGggZmVldFxuICAgKiBmdXJ0aGVyIGRvd24gdGhlIHNjcmVlbiBhcmUgZHJhd24gbGFzdFxuICAgKi9cbiAgcHJpdmF0ZSBzb3J0ZWRTb3VyY2VzKHNvdXJjZXM6IFJlZmxlY3Rpb25Tb3VyY2VbXSk6IFJlZmxlY3Rpb25Tb3VyY2VbXSB7XG4gICAgcmV0dXJuIHNvdXJjZXNcbiAgICAgIC5tYXAoc291cmNlID0+ICh7IHNvdXJjZSwgZm9vdDogc291cmNlLmZvb3QgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5mb290IC0gYi5mb290KVxuICAgICAgLm1hcCgoeyBzb3VyY2UgfSkgPT4gc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHJlZmxlY3Rpb25zIG9udG8gdGhlIGZsb29yLCB0aGlzIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgZHJhd2luZyB0aGVcbiAgICogZ3JvdW5kIGFuZCBiZWZvcmUgZHJhd2luZyBhbnl0aGluZyB0aGF0IHN0YW5kcyBvbiBpdFxuICAgKi9cbiAgcHVibGljIGRyYXdGbG9vcigpIHtcbiAgICBjb25zdCB7IGZyYW1lIH0gPSB0aGlzO1xuICAgIGlmICghZnJhbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy52aXNpYmxlQXJlYShmcmFtZSk7XG4gICAgY29uc3QgcmVjZWl2ZXJzID0gdGhpcy5mbG9vclJlY2VpdmVycy5maWx0ZXIocmVjZWl2ZXIgPT5cbiAgICAgIHJlY3RhbmdsZXNJbnRlcnNlY3QocmVjZWl2ZXIsIHZpc2libGUpXG4gICAgKTtcbiAgICBpZiAocmVjZWl2ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0Zsb29yU291cmNlcygpO1xuXG4gICAgLy8gU3RhcnQgd2l0aCB0aGUgc2hhcGUgb2YgdGhlIHJlY2VpdmVycyBhbmQga2VlcCB0aGUgc291cmNlcyBpbnNpZGUgaXQsXG4gICAgLy8gdGhpcyB3YXkgc291cmNlcyBkb24ndCBzaG93IHRocm91Z2ggZWFjaCBvdGhlciB3aGVuIHN0cmVuZ3RoIGlzIGJlbG93IDFcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5mbG9vckNvbnRleHQ7XG4gICAgdGhpcy5yZXNldENvbnRleHQoY29udGV4dCwgZnJhbWUpO1xuICAgIHJlY2VpdmVycy5mb3JFYWNoKHJlY2VpdmVyID0+IHtcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSByZWNlaXZlci5zdHJlbmd0aDtcbiAgICAgIHJlY2VpdmVyLmRyYXdNYXNrKGNvbnRleHQpO1xuICAgIH0pO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5mbG9vclNvdXJjZXNDYW52YXMsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgIGZyYW1lLmNvbnRleHQuc2F2ZSgpO1xuICAgIGZyYW1lLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGZyYW1lLmNvbnRleHQuZHJhd0ltYWdlKGNvbnRleHQuY2FudmFzLCAwLCAwKTtcbiAgICBmcmFtZS5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSByZWZsZWN0aW9ucyBpbiBhIHdhbGwgcmVjZWl2ZXJcbiAgICovXG4gIHB1YmxpYyBkcmF3V2FsbFJlY2VpdmVyKFxuICAgIHJlY2VpdmVyOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLFxuICAgIHRhcmdldDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICkge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSB8fCAhcmVjdGFuZ2xlc0ludGVyc2VjdChyZWNlaXZlciwgdGhpcy52aXNpYmxlQXJlYShmcmFtZSkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT25seSB0aGluZ3MgaW4gZnJvbnQgb2YgdGhlIHdhbGwgY2FuIGJlIHNlZW4gaW4gaXRcbiAgICBjb25zdCBzb3VyY2VzID0gdGhpcy5zb3J0ZWRTb3VyY2VzKFxuICAgICAgdGhpcy5zb3VyY2VzLmZpbHRlcihcbiAgICAgICAgc291cmNlID0+XG4gICAgICAgICAgc291cmNlLndhbGwgJiZcbiAgICAgICAgICBzb3VyY2UuZm9vdCA+IHJlY2VpdmVyLmZvb3QgJiZcbiAgICAgICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KHNvdXJjZS53YWxsQm91bmRzKHJlY2VpdmVyLmZvb3QpLCByZWNlaXZlcilcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChzb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLndhbGxDb250ZXh0O1xuICAgIHRoaXMucmVzZXRDb250ZXh0KGNvbnRleHQsIGZyYW1lKTtcblxuICAgIC8vIFRoZSBjbG9zZXN0IHRoaW5nIHRvIHRoZSB3YWxsIGlzIGFsc28gdGhlIGNsb3Nlc3QgdGhpbmcgdG8gdXMgd2hlbiB3ZVxuICAgIC8vIGxvb2sgaW50byB0aGUgcmVmbGVjdGlvbiwgc28gc291cmNlcyBhcmUgZHJhd24gaW4gcmV2ZXJzZSBvcmRlclxuICAgIHNvdXJjZXNcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKHNvdXJjZSA9PiBzb3VyY2UuZHJhd0luV2FsbChjb250ZXh0LCByZWNlaXZlci5mb290KSk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgcmVjZWl2ZXIuZHJhd01hc2soY29udGV4dCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgdGFyZ2V0LnNhdmUoKTtcbiAgICB0YXJnZXQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIHRhcmdldC5nbG9iYWxBbHBoYSA9IHJlY2VpdmVyLnN0cmVuZ3RoO1xuICAgIHRhcmdldC5kcmF3SW1hZ2UoY29udGV4dC5jYW52YXMsIDAsIDApO1xuICAgIHRhcmdldC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIsXG59IGZyb20gJy4vUmVmbGVjdGlvblJlY2VpdmVyJztcbmV4cG9ydCB0eXBlIHtcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9SZWZsZWN0aW9uUmVjZWl2ZXInO1xuZXhwb3J0IHsgUmVmbGVjdGlvblNvdXJjZSB9IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5leHBvcnQgdHlwZSB7XG4gIFJlZmxlY3Rpb25PYmplY3QsXG4gIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zLFxuICBSZWZsZWN0aW9uU291cmNlU2V0dGluZ3MsXG59IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5leHBvcnQgeyBSZWZsZWN0aW9uU3lzdGVtIH0gZnJvbSAnLi9SZWZsZWN0aW9uU3lzdGVtJztcbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG5leHBvcnQgdHlwZSBSaXBwbGVPcHRpb25zID0ge1xuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIGNvdmVyZWQgYnkgdGhlIGRpc3R1cmJhbmNlLCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgaGFyZCB0aGUgd2F0ZXIgaXMgcHVzaGVkLCB0aGlzIGNhbiBiZSBuZWdhdGl2ZVxuICAgKi9cbiAgc3RyZW5ndGg/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgZ3JpZCBvZiB3YXRlciBoZWlnaHRzIHRoYXQgc3ByZWFkcyBkaXN0dXJiYW5jZXMgb3V0IGFzIHJpcHBsZXNcbiAqXG4gKiBUaGlzIHVzZXMgdGhlIHdhdmUgZXF1YXRpb24sIGVhY2ggY2VsbCBpcyBwdWxsZWQgdG93YXJkcyB0aGUgYXZlcmFnZSBvZiBpdHNcbiAqIG5laWdoYm91cnMgYW5kIGtlZXBzIG1vdmluZyBhZnRlcndhcmRzLiBUaGVyZSdzIGEgZml4ZWQgdGltZSBzdGVwIHNvIHRoYXRcbiAqIHJpcHBsZXMgYmVoYXZlIHRoZSBzYW1lIHdheSBhdCBhbnkgZnJhbWUgcmF0ZSwgYW5kIG5vdGhpbmcgaXMgY2FsY3VsYXRlZFxuICogd2hpbGUgdGhlIHdhdGVyIGlzIHN0aWxsXG4gKi9cbmV4cG9ydCBjbGFzcyBSaXBwbGVGaWVsZCB7XG4gIC8qKlxuICAgKiBSaXBwbGVzIGFyZSBzdG9wcGVkIHdoZW4gdGhleSdyZSBzbWFsbGVyIHRoYW4gdGhpc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX0hFSUdIVCA9IDAuMDAyO1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCBvZiBpdHMgaGVpZ2h0IHRoZSB3YXRlciBrZWVwcyBlYWNoIHN0ZXAsIHdpdGhvdXQgdGhpcyBhIHNwbGFzaFxuICAgKiB3b3VsZCByYWlzZSB0aGUgbGV2ZWwgb2YgdGhlIHdhdGVyIGZvcmV2ZXIgYmVjYXVzZSB0aGUgd2F2ZXMgb25seSBtb3ZlXG4gICAqIHdhdGVyIGFyb3VuZFxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSEVJR0hUX1JFVEFJTkVEID0gMC45OTU7XG5cbiAgLyoqXG4gICAqIEhpZ2hlciBzcGVlZHMgdGhhbiB0aGlzIG1ha2UgdGhlIHNpbXVsYXRpb24gdW5zdGFibGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9XQVZFX05VTUJFUiA9IDAuNTtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRJTUVfU1RFUCA9IDEgLyA2MDtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGdyaWQsIGluIGNlbGxzXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc2l6ZTogdmVjMjtcblxuICAvKipcbiAgICogUkdCQSBkYXRhIHdpdGggdGhlIHNsb3BlIG9mIHRoZSB3YXRlciBpbiB0aGUgcmVkIGFuZCBncmVlbiBjaGFubmVscywgYW5kXG4gICAqIHRoZSBoZWlnaHQgb2YgdGhlIHdhdGVyIGluIHRoZSBibHVlIGNoYW5uZWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwaXhlbHM6IFVpbnQ4QXJyYXk7XG5cbiAgLyoqXG4gICAqIElzIHRoZSB3YXRlciBtb3Zpbmc/XG4gICAqL1xuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjZWxsU2l6ZTogdmVjMjtcbiAgcHJpdmF0ZSBoZWlnaHQ6IEZsb2F0MzJBcnJheTtcbiAgcHJpdmF0ZSBwcmV2aW91czogRmxvYXQzMkFycmF5O1xuXG4gIC8qKlxuICAgKiBDZWxscyB3aXRoIGEgdmFsdWUgb2YgMSBhcmUgbGFuZCwgd2hpY2ggc3RvcHMgcmlwcGxlc1xuICAgKi9cbiAgcHJpdmF0ZSBibG9ja2VkOiBVaW50OEFycmF5IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSB0aW1lOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiB2ZWMyLCBjZWxsU2l6ZTogdmVjMikge1xuICAgIGNvbnN0IGNlbGxzID0gc2l6ZS54ICogc2l6ZS55O1xuXG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkoc2l6ZSk7XG4gICAgdGhpcy5jZWxsU2l6ZSA9IHZlYzIuY3B5KGNlbGxTaXplKTtcbiAgICB0aGlzLmhlaWdodCA9IG5ldyBGbG9hdDMyQXJyYXkoY2VsbHMpO1xuICAgIHRoaXMucHJldmlvdXMgPSBuZXcgRmxvYXQzMkFycmF5KGNlbGxzKTtcbiAgICB0aGlzLnBpeGVscyA9IG5ldyBVaW50OEFycmF5KGNlbGxzICogNCk7XG4gICAgdGhpcy51cGRhdGVQaXhlbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hpY2ggY2VsbHMgYXJlIGxhbmRcbiAgICovXG4gIHB1YmxpYyBzZXRCbG9ja2VkKGJsb2NrZWQ6IFVpbnQ4QXJyYXkpIHtcbiAgICB0aGlzLmJsb2NrZWQgPSBibG9ja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggdGhlIHdhdGVyIGF0IGEgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHRvcC1sZWZ0IG9mIHRoZSBncmlkLCBtZWFzdXJlZFxuICAgKiBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcHVibGljIGRpc3R1cmIocG9zaXRpb246IHZlYzIsIHsgcmFkaXVzID0gNiwgc3RyZW5ndGggPSAxIH06IFJpcHBsZU9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHNpemUsIGNlbGxTaXplIH0gPSB0aGlzO1xuICAgIGNvbnN0IHJlYWNoID0gdmVjMihyYWRpdXMgKiAyLCByYWRpdXMgKiAyKTtcbiAgICBjb25zdCBmaXJzdCA9IHZlYzIubWFwKHZlYzIuc3ViKHBvc2l0aW9uLCByZWFjaCksIE1hdGguZmxvb3IpO1xuICAgIGNvbnN0IGxhc3QgPSB2ZWMyLm1hcCh2ZWMyLmFkZChwb3NpdGlvbiwgcmVhY2gpLCBNYXRoLmNlaWwpO1xuXG4gICAgY29uc3Qgc3RhcnRYID0gTWF0aC5tYXgoTWF0aC5mbG9vcihmaXJzdC54IC8gY2VsbFNpemUueCksIDApO1xuICAgIGNvbnN0IGVuZFggPSBNYXRoLm1pbihNYXRoLmNlaWwobGFzdC54IC8gY2VsbFNpemUueCksIHNpemUueCAtIDEpO1xuICAgIGNvbnN0IHN0YXJ0WSA9IE1hdGgubWF4KE1hdGguZmxvb3IoZmlyc3QueSAvIGNlbGxTaXplLnkpLCAwKTtcbiAgICBjb25zdCBlbmRZID0gTWF0aC5taW4oTWF0aC5jZWlsKGxhc3QueSAvIGNlbGxTaXplLnkpLCBzaXplLnkgLSAxKTtcblxuICAgIGZvciAobGV0IHkgPSBzdGFydFk7IHkgPD0gZW5kWTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gc3RhcnRYOyB4IDw9IGVuZFg7IHgrKykge1xuICAgICAgICBjb25zdCBkeCA9ICh4ICsgMC41KSAqIGNlbGxTaXplLnggLSBwb3NpdGlvbi54O1xuICAgICAgICBjb25zdCBkeSA9ICh5ICsgMC41KSAqIGNlbGxTaXplLnkgLSBwb3NpdGlvbi55O1xuICAgICAgICBjb25zdCBhbW91bnQgPVxuICAgICAgICAgIHN0cmVuZ3RoICogTWF0aC5leHAoLShkeCAqIGR4ICsgZHkgKiBkeSkgLyAocmFkaXVzICogcmFkaXVzKSk7XG5cbiAgICAgICAgdGhpcy5oZWlnaHRbeCArIHkgKiBzaXplLnhdICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1t4ICsgeSAqIHNpemUueF0gKz0gYW1vdW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBzaW11bGF0aW9uIGZvcndhcmRcbiAgICpcbiAgICogYHNwZWVkYCBpcyBob3cgZmFyIHJpcHBsZXMgdHJhdmVsIGVhY2ggc2Vjb25kLCBpbiB3b3JsZCB1bml0cywgYW5kXG4gICAqIGBkYW1waW5nYCBpcyBob3cgbXVjaCBvZiB0aGVpciBtb3ZlbWVudCBpcyBrZXB0IGVhY2ggc3RlcFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyLCBzcGVlZDogbnVtYmVyLCBkYW1waW5nOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50aW1lICs9IGR0O1xuXG4gICAgLy8gRG9uJ3QgdHJ5IHRvIGNhdGNoIHVwIGFmdGVyIGEgbG9uZyBwYXVzZVxuICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4oTWF0aC5mbG9vcih0aGlzLnRpbWUgLyBSaXBwbGVGaWVsZC5USU1FX1NURVApLCA0KTtcbiAgICB0aGlzLnRpbWUgJT0gUmlwcGxlRmllbGQuVElNRV9TVEVQO1xuXG4gICAgY29uc3QgY2VsbCA9IE1hdGgubWluKHRoaXMuY2VsbFNpemUueCwgdGhpcy5jZWxsU2l6ZS55KTtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5taW4oXG4gICAgICBzcGVlZCAqIFJpcHBsZUZpZWxkLlRJTUVfU1RFUCAvIGNlbGwsXG4gICAgICBSaXBwbGVGaWVsZC5NQVhfV0FWRV9OVU1CRVJcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSB7XG4gICAgICB0aGlzLnN0ZXAod2F2ZSAqIHdhdmUsIGRhbXBpbmcpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGl4ZWxzKCk7XG4gIH1cblxuICBwcml2YXRlIHN0ZXAod2F2ZTogbnVtYmVyLCBkYW1waW5nOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgcHJldmlvdXMsIGJsb2NrZWQgfSA9IHRoaXM7XG4gICAgY29uc3QgeyB4OiBjb2x1bW5zLCB5OiByb3dzIH0gPSB0aGlzLnNpemU7XG5cbiAgICBsZXQgbGFyZ2VzdCA9IDA7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHJvd3M7IHkrKykge1xuICAgICAgY29uc3QgdXAgPSB5ID4gMCA/IC1jb2x1bW5zIDogMDtcbiAgICAgIGNvbnN0IGRvd24gPSB5IDwgcm93cyAtIDEgPyBjb2x1bW5zIDogMDtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjb2x1bW5zOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9IHggKyB5ICogY29sdW1ucztcblxuICAgICAgICBpZiAoYmxvY2tlZD8uW2ldKSB7XG4gICAgICAgICAgcHJldmlvdXNbaV0gPSAwO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVmdCA9IHggPiAwID8gLTEgOiAwO1xuICAgICAgICBjb25zdCByaWdodCA9IHggPCBjb2x1bW5zIC0gMSA/IDEgOiAwO1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJzID1cbiAgICAgICAgICBoZWlnaHRbaSArIGxlZnRdICtcbiAgICAgICAgICBoZWlnaHRbaSArIHJpZ2h0XSArXG4gICAgICAgICAgaGVpZ2h0W2kgKyB1cF0gK1xuICAgICAgICAgIGhlaWdodFtpICsgZG93bl07XG5cbiAgICAgICAgLy8gVGhlIHByZXZpb3VzIGhlaWdodCBpcyBvdmVyd3JpdHRlbiBoZXJlIGJlY2F1c2UgdGhhdCdzIGFsbCB3ZSBuZWVkXG4gICAgICAgIC8vIGl0IGZvciwgc28gdGhlc2UgMiBhcnJheXMgc3dhcCByb2xlcyBhZnRlciBlYWNoIHN0ZXBcbiAgICAgICAgY29uc3QgbmV4dCA9XG4gICAgICAgICAgKGhlaWdodFtpXSArXG4gICAgICAgICAgICAoaGVpZ2h0W2ldIC0gcHJldmlvdXNbaV0pICogZGFtcGluZyArXG4gICAgICAgICAgICAobmVpZ2hib3VycyAtIGhlaWdodFtpXSAqIDQpICogd2F2ZSkgKlxuICAgICAgICAgIFJpcHBsZUZpZWxkLkhFSUdIVF9SRVRBSU5FRDtcblxuICAgICAgICBwcmV2aW91c1tpXSA9IG5leHQ7XG4gICAgICAgIGxhcmdlc3QgPSBNYXRoLm1heChsYXJnZXN0LCBNYXRoLmFicyhuZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oZWlnaHQgPSBwcmV2aW91cztcbiAgICB0aGlzLnByZXZpb3VzID0gaGVpZ2h0O1xuXG4gICAgaWYgKGxhcmdlc3QgPCBSaXBwbGVGaWVsZC5NSU5fSEVJR0hUKSB7XG4gICAgICB0aGlzLmhlaWdodC5maWxsKDApO1xuICAgICAgdGhpcy5wcmV2aW91cy5maWxsKDApO1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBpeGVscygpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgcGl4ZWxzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgeDogY29sdW1ucywgeTogcm93cyB9ID0gdGhpcy5zaXplO1xuXG4gICAgY29uc3QgZW5jb2RlID0gKHZhbHVlOiBudW1iZXIpID0+XG4gICAgICBNYXRoLm1pbihNYXRoLm1heChNYXRoLnJvdW5kKHZhbHVlICogMTI3KSArIDEyOCwgMCksIDI1NSk7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHJvd3M7IHkrKykge1xuICAgICAgY29uc3QgdXAgPSB5ID4gMCA/IC1jb2x1bW5zIDogMDtcbiAgICAgIGNvbnN0IGRvd24gPSB5IDwgcm93cyAtIDEgPyBjb2x1bW5zIDogMDtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjb2x1bW5zOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9IHggKyB5ICogY29sdW1ucztcbiAgICAgICAgY29uc3QgbGVmdCA9IHggPiAwID8gLTEgOiAwO1xuICAgICAgICBjb25zdCByaWdodCA9IHggPCBjb2x1bW5zIC0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHBpeGVsc1tpICogNF0gPSBlbmNvZGUoKGhlaWdodFtpICsgcmlnaHRdIC0gaGVpZ2h0W2kgKyBsZWZ0XSkgLyAyKTtcbiAgICAgICAgcGl4ZWxzW2kgKiA0ICsgMV0gPSBlbmNvZGUoKGhlaWdodFtpICsgZG93bl0gLSBoZWlnaHRbaSArIHVwXSkgLyAyKTtcbiAgICAgICAgcGl4ZWxzW2kgKiA0ICsgMl0gPSBlbmNvZGUoaGVpZ2h0W2ldKTtcbiAgICAgICAgcGl4ZWxzW2kgKiA0ICsgM10gPSAyNTU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IEZyYW1lLCBHbENvbnRleHQsIEdsUHJvZ3JhbSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBXYXRlclJlZ2lvbiB9IGZyb20gJy4vV2F0ZXJSZWdpb24nO1xuaW1wb3J0IHdhdGVyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3dhdGVyLmZyYWcuZ2xzbCcpO1xuXG5lbnVtIFRleHR1cmVVbml0IHtcbiAgU2NlbmUsXG4gIFJlZmxlY3Rpb25NYXAsXG4gIE1hc2ssXG4gIERlcHRoTWFwLFxuICBGbG93TWFwLFxuICBXYXZlTWFwLFxuICBOb2lzZU1hcCxcbiAgUmlwcGxlTWFwLFxufVxuXG4vKipcbiAqIFdoYXQgdGhlIHNoYWRlciBzaG91bGQgb3V0cHV0LCB0aGVzZSB2YWx1ZXMgYXJlIGFsc28gaW4gdGhlIHNoYWRlclxuICovXG5leHBvcnQgZW51bSBXYXRlck91dHB1dCB7XG4gIENvbG91ciA9IDAsXG4gIE5vcm1hbCA9IDEsXG4gIFNwZWN1bGFyID0gMixcbn1cblxudHlwZSBSZWdpb25UZXh0dXJlcyA9IHtcbiAgZGVwdGg6IFdlYkdMVGV4dHVyZTtcbiAgZGVwdGhWZXJzaW9uOiBudW1iZXI7XG4gIGZsb3c6IFdlYkdMVGV4dHVyZTtcbiAgZmxvd1ZlcnNpb246IG51bWJlcjtcbiAgcmlwcGxlczogV2ViR0xUZXh0dXJlO1xuICByaXBwbGVzVXBsb2FkZWQ6IGJvb2xlYW47XG4gIHdhdmVzOiBXZWJHTFRleHR1cmUgfCBudWxsO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHdhdGVyIHVzaW5nIGEgc2hhcmVkIFdlYkdMIGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFdhdGVyUGFzcyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdBVkVfTUFQX1NJWkUgPSAyNTY7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdBVkVfQ09VTlQgPSAzMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FWRV9NQVhfRlJFUVVFTkNZID0gMTQ7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PSVNFX1dBVkVfQ09VTlQgPSA4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBOT0lTRV9NQVhfRlJFUVVFTkNZID0gMztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRkxPV19DWUNMRSA9IDI7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgd2F2ZU1hcERhdGE6IFVpbnQ4QXJyYXkgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogTWFrZSBhIHRpbGluZyBub3JtYWwgbWFwIHdpdGggbm9pc2UgaW4gdGhlIGJsdWUgY2hhbm5lbCwgdGhlIG5vcm1hbCBtYXAgaXNcbiAgICogbWFkZSBmcm9tIHNpbmUgd2F2ZXMgdGhhdCByZXBlYXQgYSB3aG9sZSBudW1iZXIgb2YgdGltZXMgYWNyb3NzIHRoZSB0ZXh0dXJlXG4gICAqIHNvIHRoYXQgaXQgdGlsZXMgcGVyZmVjdGx5XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBnZXRXYXZlTWFwRGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICBpZiAoV2F0ZXJQYXNzLndhdmVNYXBEYXRhKSB7XG4gICAgICByZXR1cm4gV2F0ZXJQYXNzLndhdmVNYXBEYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSBXYXRlclBhc3MuV0FWRV9NQVBfU0laRTtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSAqIHNpemUgKiA0KTtcbiAgICBjb25zdCBhbmdsZSA9IChNYXRoLlBJICogMikgLyBzaXplO1xuXG4gICAgLy8gVGhlIHRleHR1cmVzIHNob3VsZCBiZSB0aGUgc2FtZSBldmVyeSB0aW1lLCBzbyB0aGlzIHVzZXMgYSBzbWFsbCByYW5kb21cbiAgICAvLyBudW1iZXIgZ2VuZXJhdG9yIGluc3RlYWQgb2YgTWF0aC5yYW5kb20oKVxuICAgIGxldCBzZWVkID0gMTIzNDU7XG4gICAgY29uc3QgcmFuZG9tID0gKCkgPT4ge1xuICAgICAgc2VlZCA9IChzZWVkICogMTY4MDcpICUgMjE0NzQ4MzY0NztcblxuICAgICAgcmV0dXJuIHNlZWQgLyAyMTQ3NDgzNjQ3O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVXYXZlcyA9IChjb3VudDogbnVtYmVyLCBtYXhGcmVxdWVuY3k6IG51bWJlcikgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICgpID0+IHtcbiAgICAgICAgY29uc3QgZnJlcXVlbmN5ID0gKCkgPT5cbiAgICAgICAgICBNYXRoLnJvdW5kKChyYW5kb20oKSAqIDIgLSAxKSAqIG1heEZyZXF1ZW5jeSkgfHwgMTtcbiAgICAgICAgY29uc3QgeCA9IGZyZXF1ZW5jeSgpO1xuICAgICAgICBjb25zdCB5ID0gZnJlcXVlbmN5KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4LFxuICAgICAgICAgIHksXG4gICAgICAgICAgcGhhc2U6IHJhbmRvbSgpICogTWF0aC5QSSAqIDIsXG4gICAgICAgICAgYW1wbGl0dWRlOiAxIC8gTWF0aC5oeXBvdCh4LCB5KSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3Qgd2F2ZXMgPSBjcmVhdGVXYXZlcyhcbiAgICAgIFdhdGVyUGFzcy5XQVZFX0NPVU5ULFxuICAgICAgV2F0ZXJQYXNzLldBVkVfTUFYX0ZSRVFVRU5DWVxuICAgICk7XG4gICAgY29uc3Qgbm9pc2UgPSBjcmVhdGVXYXZlcyhcbiAgICAgIFdhdGVyUGFzcy5OT0lTRV9XQVZFX0NPVU5ULFxuICAgICAgV2F0ZXJQYXNzLk5PSVNFX01BWF9GUkVRVUVOQ1lcbiAgICApO1xuXG4gICAgY29uc3Qgc2xvcGVzID0gbmV3IEZsb2F0MzJBcnJheShzaXplICogc2l6ZSAqIDIpO1xuICAgIGNvbnN0IGhlaWdodHMgPSBuZXcgRmxvYXQzMkFycmF5KHNpemUgKiBzaXplKTtcbiAgICBsZXQgbGFyZ2VzdFNsb3BlID0gMDtcbiAgICBsZXQgbGFyZ2VzdEhlaWdodCA9IDA7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9IHggKyB5ICogc2l6ZTtcblxuICAgICAgICBmb3IgKGNvbnN0IHdhdmUgb2Ygd2F2ZXMpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IE1hdGguY29zKFxuICAgICAgICAgICAgKHdhdmUueCAqIHggKyB3YXZlLnkgKiB5KSAqIGFuZ2xlICsgd2F2ZS5waGFzZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBzbG9wZXNbaSAqIDJdICs9IHdhdmUuYW1wbGl0dWRlICogd2F2ZS54ICogdmFsdWU7XG4gICAgICAgICAgc2xvcGVzW2kgKiAyICsgMV0gKz0gd2F2ZS5hbXBsaXR1ZGUgKiB3YXZlLnkgKiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgd2F2ZSBvZiBub2lzZSkge1xuICAgICAgICAgIGhlaWdodHNbaV0gKz1cbiAgICAgICAgICAgIHdhdmUuYW1wbGl0dWRlICpcbiAgICAgICAgICAgIE1hdGguc2luKCh3YXZlLnggKiB4ICsgd2F2ZS55ICogeSkgKiBhbmdsZSArIHdhdmUucGhhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFyZ2VzdFNsb3BlID0gTWF0aC5tYXgoXG4gICAgICAgICAgbGFyZ2VzdFNsb3BlLFxuICAgICAgICAgIE1hdGguYWJzKHNsb3Blc1tpICogMl0pLFxuICAgICAgICAgIE1hdGguYWJzKHNsb3Blc1tpICogMiArIDFdKVxuICAgICAgICApO1xuICAgICAgICBsYXJnZXN0SGVpZ2h0ID0gTWF0aC5tYXgobGFyZ2VzdEhlaWdodCwgTWF0aC5hYnMoaGVpZ2h0c1tpXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgZGF0YVtpICogNF0gPSAoc2xvcGVzW2kgKiAyXSAvIGxhcmdlc3RTbG9wZSkgKiAxMjcuNSArIDEyNy41O1xuICAgICAgZGF0YVtpICogNCArIDFdID0gKHNsb3Blc1tpICogMiArIDFdIC8gbGFyZ2VzdFNsb3BlKSAqIDEyNy41ICsgMTI3LjU7XG4gICAgICBkYXRhW2kgKiA0ICsgMl0gPSAoaGVpZ2h0c1tpXSAvIGxhcmdlc3RIZWlnaHQpICogMTI3LjUgKyAxMjcuNTtcbiAgICAgIGRhdGFbaSAqIDQgKyAzXSA9IDI1NTtcbiAgICB9XG5cbiAgICBXYXRlclBhc3Mud2F2ZU1hcERhdGEgPSBkYXRhO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcml2YXRlIGNvbnRleHQ6IEdsQ29udGV4dDtcbiAgcHJpdmF0ZSBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcHJvZ3JhbTogR2xQcm9ncmFtO1xuICBwcml2YXRlIHNjZW5lVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBwcml2YXRlIHJlZmxlY3Rpb25UZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIHByaXZhdGUgd2F2ZVRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgcHJpdmF0ZSByZWdpb25UZXh0dXJlcyA9IG5ldyBNYXA8V2F0ZXJSZWdpb24sIFJlZ2lvblRleHR1cmVzPigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29udGV4dC5vbkluaXRpYWxpc2UoZ2wgPT4gdGhpcy5pbml0aWFsaXNlKGdsKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dHB1dCBvZiB0aGUgbW9zdCByZWNlbnQgcGFzc1xuICAgKi9cbiAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuY2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzaGFkZXJzIGNhbiBiZSB1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLmNvbnRleHQuYXZhaWxhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5wcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0od2F0ZXJTaGFkZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dhdGVyIGhhcyBiZWVuIGRpc2FibGVkJywgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zY2VuZVRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMucmVmbGVjdGlvblRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMud2F2ZVRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMucmVnaW9uVGV4dHVyZXMgPSBuZXcgTWFwKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudXBsb2FkRGF0YShcbiAgICAgIFRleHR1cmVVbml0LldhdmVNYXAsXG4gICAgICB0aGlzLndhdmVUZXh0dXJlLFxuICAgICAgdmVjMihXYXRlclBhc3MuV0FWRV9NQVBfU0laRSksXG4gICAgICBXYXRlclBhc3MuZ2V0V2F2ZU1hcERhdGEoKSxcbiAgICAgIGdsLkxJTkVBUixcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRm9yZ2V0IGFib3V0IGEgcmVnaW9uJ3MgdGV4dHVyZXNcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKHJlZ2lvbjogV2F0ZXJSZWdpb24pIHtcbiAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMucmVnaW9uVGV4dHVyZXMuZ2V0KHJlZ2lvbik7XG4gICAgaWYgKCF0ZXh0dXJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy5kZXB0aCk7XG4gICAgZ2w/LmRlbGV0ZVRleHR1cmUodGV4dHVyZXMuZmxvdyk7XG4gICAgZ2w/LmRlbGV0ZVRleHR1cmUodGV4dHVyZXMucmlwcGxlcyk7XG4gICAgaWYgKHRleHR1cmVzLndhdmVzKSB7XG4gICAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy53YXZlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWdpb25UZXh0dXJlcy5kZWxldGUocmVnaW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGV4dHVyZXMoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICByZWdpb246IFdhdGVyUmVnaW9uXG4gICk6IFJlZ2lvblRleHR1cmVzIHtcbiAgICBsZXQgdGV4dHVyZXMgPSB0aGlzLnJlZ2lvblRleHR1cmVzLmdldChyZWdpb24pO1xuICAgIGlmICghdGV4dHVyZXMpIHtcbiAgICAgIHRleHR1cmVzID0ge1xuICAgICAgICBkZXB0aDogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgICAgZGVwdGhWZXJzaW9uOiAtMSxcbiAgICAgICAgZmxvdzogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgICAgZmxvd1ZlcnNpb246IC0xLFxuICAgICAgICByaXBwbGVzOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgICByaXBwbGVzVXBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICB3YXZlczogcmVnaW9uLm5vcm1hbE1hcCA/IGdsLmNyZWF0ZVRleHR1cmUoKSEgOiBudWxsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVnaW9uVGV4dHVyZXMuc2V0KHJlZ2lvbiwgdGV4dHVyZXMpO1xuXG4gICAgICBpZiAocmVnaW9uLm5vcm1hbE1hcCAmJiB0ZXh0dXJlcy53YXZlcykge1xuICAgICAgICB0aGlzLmNvbnRleHQudXBsb2FkKFxuICAgICAgICAgIFRleHR1cmVVbml0LldhdmVNYXAsXG4gICAgICAgICAgdGV4dHVyZXMud2F2ZXMsXG4gICAgICAgICAgdGhpcy5wb3dlck9mVHdvSW1hZ2UocmVnaW9uLm5vcm1hbE1hcCksXG4gICAgICAgICAgZ2wuTElORUFSLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZXM7XG4gIH1cblxuICAvKipcbiAgICogVGV4dHVyZXMgY2FuIG9ubHkgdGlsZSBpZiB0aGVpciBzaXplIGlzIGEgcG93ZXIgb2YgMlxuICAgKi9cbiAgcHJpdmF0ZSBwb3dlck9mVHdvSW1hZ2UoaW1hZ2U6IFNjZW5lSW1hZ2UpOiBTY2VuZUltYWdlIHtcbiAgICBjb25zdCBpc1Bvd2VyT2ZUd28gPSAobjogbnVtYmVyKSA9PiAobiAmIChuIC0gMSkpID09PSAwO1xuICAgIGlmIChpc1Bvd2VyT2ZUd28oaW1hZ2Uud2lkdGgpICYmIGlzUG93ZXJPZlR3byhpbWFnZS5oZWlnaHQpKSB7XG4gICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IFdhdGVyUGFzcy5XQVZFX01BUF9TSVpFO1xuICAgIGNhbnZhc1xuICAgICAgLmdldENvbnRleHQoJzJkJykhXG4gICAgICAuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSByZWdpb24ncyB0ZXh0dXJlcyBhcmUgdXAgdG8gZGF0ZSBhbmQgYmluZCB0aGVtXG4gICAqL1xuICBwcml2YXRlIGJpbmRSZWdpb24oZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcmVnaW9uOiBXYXRlclJlZ2lvbikge1xuICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5nZXRUZXh0dXJlcyhnbCwgcmVnaW9uKTtcbiAgICBjb25zdCB7IGRlcHRoUGl4ZWxzLCBmbG93UGl4ZWxzLCByaXBwbGVzIH0gPSByZWdpb247XG5cbiAgICBpZiAodGV4dHVyZXMuZGVwdGhWZXJzaW9uID09PSBkZXB0aFBpeGVscy52ZXJzaW9uKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVGV4dHVyZVVuaXQuRGVwdGhNYXAsIHRleHR1cmVzLmRlcHRoLCBnbC5MSU5FQVIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkRGF0YShcbiAgICAgICAgVGV4dHVyZVVuaXQuRGVwdGhNYXAsXG4gICAgICAgIHRleHR1cmVzLmRlcHRoLFxuICAgICAgICBkZXB0aFBpeGVscy5zaXplLFxuICAgICAgICBkZXB0aFBpeGVscy5kYXRhLFxuICAgICAgICBnbC5MSU5FQVJcbiAgICAgICk7XG4gICAgICB0ZXh0dXJlcy5kZXB0aFZlcnNpb24gPSBkZXB0aFBpeGVscy52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmICh0ZXh0dXJlcy5mbG93VmVyc2lvbiA9PT0gZmxvd1BpeGVscy52ZXJzaW9uKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVGV4dHVyZVVuaXQuRmxvd01hcCwgdGV4dHVyZXMuZmxvdywgZ2wuTElORUFSKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZERhdGEoXG4gICAgICAgIFRleHR1cmVVbml0LkZsb3dNYXAsXG4gICAgICAgIHRleHR1cmVzLmZsb3csXG4gICAgICAgIGZsb3dQaXhlbHMuc2l6ZSxcbiAgICAgICAgZmxvd1BpeGVscy5kYXRhLFxuICAgICAgICBnbC5MSU5FQVJcbiAgICAgICk7XG4gICAgICB0ZXh0dXJlcy5mbG93VmVyc2lvbiA9IGZsb3dQaXhlbHMudmVyc2lvbjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoXG4gICAgICBUZXh0dXJlVW5pdC5XYXZlTWFwLFxuICAgICAgdGV4dHVyZXMud2F2ZXMgPz8gdGhpcy53YXZlVGV4dHVyZSxcbiAgICAgIGdsLkxJTkVBUixcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgLy8gUmlwcGxlcyBvbmx5IG5lZWQgdXBsb2FkaW5nIHdoaWxlIHRoZXkncmUgbW92aW5nXG4gICAgaWYgKHJpcHBsZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkRGF0YShcbiAgICAgICAgVGV4dHVyZVVuaXQuUmlwcGxlTWFwLFxuICAgICAgICB0ZXh0dXJlcy5yaXBwbGVzLFxuICAgICAgICByaXBwbGVzLnNpemUsXG4gICAgICAgIHJpcHBsZXMucGl4ZWxzLFxuICAgICAgICBnbC5MSU5FQVJcbiAgICAgICk7XG4gICAgICB0ZXh0dXJlcy5yaXBwbGVzVXBsb2FkZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGV4dHVyZXMucmlwcGxlc1VwbG9hZGVkKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoXG4gICAgICAgIFRleHR1cmVVbml0LlJpcHBsZU1hcCxcbiAgICAgICAgdGV4dHVyZXMucmlwcGxlcyxcbiAgICAgICAgZ2wuTElORUFSXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UmVnaW9uVW5pZm9ybXMoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICByZWdpb246IFdhdGVyUmVnaW9uLFxuICAgIGZyYW1lOiBGcmFtZVxuICApIHtcbiAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLnByb2dyYW07XG4gICAgY29uc3QgY29sb3VyID0gcGFyc2VDb2xvcihyZWdpb24uY29sb3VyKTtcbiAgICBjb25zdCBkZWVwQ29sb3VyID0gcGFyc2VDb2xvcihyZWdpb24uZGVlcENvbG91cik7XG4gICAgY29uc3QgeyBtYXNrIH0gPSByZWdpb247XG4gICAgY29uc3QgZmlsdGVyID0gZnJhbWUuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUO1xuXG4gICAgZ2wudW5pZm9ybTJmKFxuICAgICAgdW5pZm9ybXMudV9yZWdpb25Qb3NpdGlvbixcbiAgICAgIHJlZ2lvbi5wb3NpdGlvbi54LFxuICAgICAgcmVnaW9uLnBvc2l0aW9uLnlcbiAgICApO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3Jtcy51X3JlZ2lvblNpemUsIHJlZ2lvbi5zaXplLngsIHJlZ2lvbi5zaXplLnkpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3VzZU1hc2ssIG1hc2sgPyAxIDogMCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTWFza1JlcGVhdCwgcmVnaW9uLnJlcGVhdCA/IDEgOiAwKTtcbiAgICBpZiAobWFzaykge1xuICAgICAgdGhpcy5jb250ZXh0LmJpbmRJbWFnZShtYXNrLCBmaWx0ZXIsIFRleHR1cmVVbml0Lk1hc2spO1xuICAgICAgZ2wudW5pZm9ybTJmKHVuaWZvcm1zLnVfbWFza1NpemUsIG1hc2sud2lkdGgsIG1hc2suaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VSaXBwbGVzLCByZWdpb24ucmlwcGxlcy5hY3RpdmUgPyAxIDogMCk7XG4gICAgZ2wudW5pZm9ybTNmKFxuICAgICAgdW5pZm9ybXMudV9jb2xvdXIsXG4gICAgICBjb2xvdXIuciAvIDI1NSxcbiAgICAgIGNvbG91ci5nIC8gMjU1LFxuICAgICAgY29sb3VyLmIgLyAyNTVcbiAgICApO1xuICAgIGdsLnVuaWZvcm0zZihcbiAgICAgIHVuaWZvcm1zLnVfZGVlcENvbG91cixcbiAgICAgIGRlZXBDb2xvdXIuciAvIDI1NSxcbiAgICAgIGRlZXBDb2xvdXIuZyAvIDI1NSxcbiAgICAgIGRlZXBDb2xvdXIuYiAvIDI1NVxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfb3BhY2l0eSwgcmVnaW9uLm9wYWNpdHkpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3Nob3JlQmxlbmQsIHJlZ2lvbi5zaG9yZUJsZW5kKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9yZWZyYWN0aW9uLCByZWdpb24ucmVmcmFjdGlvbik7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfcmVmbGVjdGlvbiwgcmVnaW9uLnJlZmxlY3Rpb24pO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3JlZmxlY3Rpb25EaXN0b3J0aW9uLCByZWdpb24ucmVmbGVjdGlvbkRpc3RvcnRpb24pO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3dhdmVTaXplLCByZWdpb24ud2F2ZVNpemUpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3dhdmVTcGVlZCwgcmVnaW9uLndhdmVTcGVlZCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2F2ZVN0cmVuZ3RoLCByZWdpb24ud2F2ZVN0cmVuZ3RoKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9yaXBwbGVTdHJlbmd0aCwgcmVnaW9uLnJpcHBsZVN0cmVuZ3RoKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9mbG93Q3ljbGUsIFdhdGVyUGFzcy5GTE9XX0NZQ0xFKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB1bmlmb3Jtcy51X2Zsb3dEaXN0YW5jZSxcbiAgICAgIHJlZ2lvbi5mbG93U3BlZWQgKiBXYXRlclBhc3MuRkxPV19DWUNMRVxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc3BlY3VsYXIsIHJlZ2lvbi5zcGVjdWxhcik7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc3VyZmFjZVNoYWRpbmcsIHJlZ2lvbi5zdXJmYWNlU2hhZGluZyk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfcGl4ZWxTaXplLCByZWdpb24ucGl4ZWxTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1JlZ2lvbihcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb24sXG4gICAgZnJhbWU6IEZyYW1lXG4gICkge1xuICAgIGNvbnN0IHRvcExlZnQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbihyZWdpb24ucG9zaXRpb24pO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gZnJhbWUuY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICB2ZWMyLmFkZChyZWdpb24ucG9zaXRpb24sIHJlZ2lvbi5zaXplKVxuICAgICk7XG4gICAgY29uc3Qgc2l6ZSA9IHZlYzIuc3ViKGJvdHRvbVJpZ2h0LCB0b3BMZWZ0KTtcbiAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLnByb2dyYW07XG5cbiAgICB0aGlzLmJpbmRSZWdpb24oZ2wsIHJlZ2lvbik7XG4gICAgdGhpcy5zZXRSZWdpb25Vbmlmb3JtcyhnbCwgcmVnaW9uLCBmcmFtZSk7XG4gICAgZ2wudW5pZm9ybTJmKHVuaWZvcm1zLnVfcmVnaW9uU2NyZWVuUG9zaXRpb24sIHRvcExlZnQueCwgdG9wTGVmdC55KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9jYW1lcmFTY2FsZSwgc2l6ZS54IC8gcmVnaW9uLnNpemUueCk7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICB0aGlzLnByb2dyYW0sXG4gICAgICBbdG9wTGVmdC54LCB0b3BMZWZ0LnksIHNpemUueCwgc2l6ZS55XSxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIFswLCAwLCAxLCAxXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHNvbWUgd2F0ZXIgaW50byB0aGUgY2FudmFzXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKFxuICAgIGZyYW1lOiBGcmFtZSxcbiAgICByZWdpb25zOiBXYXRlclJlZ2lvbltdLFxuICAgIG91dHB1dDogV2F0ZXJPdXRwdXQsXG4gICAgdGltZTogbnVtYmVyXG4gICkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBpZiAoIWdsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB1bmlmb3JtcywgcHJvZ3JhbSB9ID0gdGhpcy5wcm9ncmFtO1xuICAgIGNvbnN0IGZpbHRlciA9IGZyYW1lLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIHRoaXMuY29udGV4dC5yZXNpemUoZnJhbWUuc2NyZWVuKTtcbiAgICB0aGlzLmNvbnRleHQuaW52YWxpZGF0ZUNhbnZhc2VzKCk7XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgIGdsLmRpc2FibGUoZ2wuQkxFTkQpO1xuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgICAvLyBUaGUgc2NlbmUgYW5kIGl0cyByZWZsZWN0aW9ucyBvbmx5IG1hdHRlciBmb3IgdGhlIHdhdGVyJ3MgY29sb3VyXG4gICAgaWYgKG91dHB1dCA9PT0gV2F0ZXJPdXRwdXQuQ29sb3VyKSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkKFxuICAgICAgICBUZXh0dXJlVW5pdC5TY2VuZSxcbiAgICAgICAgdGhpcy5zY2VuZVRleHR1cmUsXG4gICAgICAgIGZyYW1lLmNvbnRleHQuY2FudmFzLFxuICAgICAgICBmaWx0ZXJcbiAgICAgICk7XG5cbiAgICAgIGlmIChmcmFtZS5yZWZsZWN0aW9uTWFwKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC51cGxvYWQoXG4gICAgICAgICAgVGV4dHVyZVVuaXQuUmVmbGVjdGlvbk1hcCxcbiAgICAgICAgICB0aGlzLnJlZmxlY3Rpb25UZXh0dXJlLFxuICAgICAgICAgIGZyYW1lLnJlZmxlY3Rpb25NYXAsXG4gICAgICAgICAgZmlsdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIG5vaXNlIGlzIGFsd2F5cyBpbiB0aGUgZGVmYXVsdCBtYXAsIGV2ZW4gaWYgYSByZWdpb24gaGFzIGl0cyBvd25cbiAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoXG4gICAgICBUZXh0dXJlVW5pdC5Ob2lzZU1hcCxcbiAgICAgIHRoaXMud2F2ZVRleHR1cmUsXG4gICAgICBnbC5MSU5FQVIsXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKHVuaWZvcm1zLnVfc2NyZWVuLCBmcmFtZS5zY3JlZW4ueCwgZnJhbWUuc2NyZWVuLnkpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3RpbWUsIHRpbWUpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X291dHB1dCwgb3V0cHV0KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VSZWZsZWN0aW9uLCBmcmFtZS5yZWZsZWN0aW9uTWFwID8gMSA6IDApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3NjZW5lLCBUZXh0dXJlVW5pdC5TY2VuZSk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfcmVmbGVjdGlvbk1hcCwgVGV4dHVyZVVuaXQuUmVmbGVjdGlvbk1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfbWFzaywgVGV4dHVyZVVuaXQuTWFzayk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfZGVwdGhNYXAsIFRleHR1cmVVbml0LkRlcHRoTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9mbG93TWFwLCBUZXh0dXJlVW5pdC5GbG93TWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV93YXZlTWFwLCBUZXh0dXJlVW5pdC5XYXZlTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9ub2lzZU1hcCwgVGV4dHVyZVVuaXQuTm9pc2VNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3JpcHBsZU1hcCwgVGV4dHVyZVVuaXQuUmlwcGxlTWFwKTtcblxuICAgIHJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4gdGhpcy5kcmF3UmVnaW9uKGdsLCByZWdpb24sIGZyYW1lKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlSW5SZWN0YW5nbGUsIFJlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUmlwcGxlRmllbGQsIFJpcHBsZU9wdGlvbnMgfSBmcm9tICcuL1JpcHBsZUZpZWxkJztcbmltcG9ydCB0eXBlIHsgV2F0ZXJTeXN0ZW0gfSBmcm9tICcuL1dhdGVyU3lzdGVtJztcblxuLyoqXG4gKiBBIGdyaWQgb2YgdmFsdWVzIHRoYXQgY292ZXJzIGEgcmVnaW9uLCB0aGUgZmlyc3QgaW5kZXggaXMgdGhlIHJvd1xuICpcbiAqIFZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIGJldHdlZW4gdGhlIGNlbnRlcnMgb2YgdGhlIGNlbGxzXG4gKi9cbmV4cG9ydCB0eXBlIFdhdGVyR3JpZDxUPiA9IFRbXVtdO1xuXG5leHBvcnQgdHlwZSBXYXRlclJlZ2lvbk9wdGlvbnMgPSBSZWN0YW5nbGUgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hlcmUgdGhlIHdhdGVyIGlzLCB0aGUgZGVmYXVsdCBpcyB0aGVcbiAgICogd2hvbGUgcmVjdGFuZ2xlXG4gICAqXG4gICAqIFRoZSBlZGdlIG9mIHRoZSBtYXNrIGlzIGEgaGFyZCBlZGdlIHVubGVzcyB0aGUgd2F0ZXIgZ2V0cyBzaGFsbG93ZXIgdG93YXJkc1xuICAgKiBpdCwgc28gdGhpcyBjYW4gYmUgdXNlZCBmb3Igc2hvcmVzIHRoYXQgZm9sbG93IHRoZSBzaGFwZSBvZiB0aGUgdGVycmFpblxuICAgKi9cbiAgbWFzaz86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhlIG1hc2sgYmUgcmVwZWF0ZWQgYWNyb3NzIHRoZSByZWdpb24/IE90aGVyd2lzZSBpdCB3aWxsIGJlXG4gICAqIHN0cmV0Y2hlZCB0byBmaXRcbiAgICovXG4gIHJlcGVhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhvdyBkZWVwIHRoZSB3YXRlciBpcywgZnJvbSAwIGF0IHRoZSBzaG9yZSB0byAxIGluIHRoZSBkZWVwZXN0IHBhcnRzXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIGEgc2luZ2xlIG51bWJlciBvciBhIGdyaWRcbiAgICovXG4gIGRlcHRoPzogbnVtYmVyIHwgV2F0ZXJHcmlkPG51bWJlcj47XG5cbiAgLyoqXG4gICAqIFdoaWNoIHdheSB0aGUgd2F0ZXIgZmxvd3MgYW5kIGhvdyBxdWlja2x5LCB0aGVzZSB2ZWN0b3JzIHNob3VsZCBiZSBub1xuICAgKiBsb25nZXIgdGhhbiAxXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIGEgc2luZ2xlIHZlY3RvciBvciBhIGdyaWRcbiAgICovXG4gIGZsb3c/OiB2ZWMyIHwgV2F0ZXJHcmlkPHZlYzI+O1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSB0aGF0IHdhdGVyIG1vdmVzIGVhY2ggc2Vjb25kIHdoZW4gYSBmbG93IHZlY3RvciBoYXMgYSBsZW5ndGggb2YgMVxuICAgKi9cbiAgZmxvd1NwZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgY29sb3VyIG9mIHNoYWxsb3cgd2F0ZXJcbiAgICovXG4gIGNvbG91cj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGNvbG91ciBvZiBkZWVwIHdhdGVyXG4gICAqL1xuICBkZWVwQ29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgd2F0ZXIgaGlkZXMgd2hhdCdzIHVuZGVybmVhdGggaXQgYXQgdGhlIGRlZXBlc3QgcG9pbnQsIGZyb20gMFxuICAgKiB0byAxXG4gICAqL1xuICBvcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVwdGggYXQgd2hpY2ggd2F0ZXIgaXMgZnVsbHkgdmlzaWJsZSwgaXQgZmFkZXMgb3V0IGF0IGRlcHRocyBiZWxvd1xuICAgKiB0aGlzIHRvIGJsZW5kIHdpdGggdGhlIHNob3JlLiBVc2UgMCBmb3Igd2F0ZXIgdGhhdCBkb2Vzbid0IGZhZGUgb3V0XG4gICAqL1xuICBzaG9yZUJsZW5kPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHdhdmVzIGNhbiBiZW5kIHdoYXQncyB1bmRlcm5lYXRoIHRoZSB3YXRlciwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJlZnJhY3Rpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzdHJvbmcgcmVmbGVjdGlvbnMgYXJlLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgcmVmbGVjdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGZhciB3YXZlcyBjYW4gYmVuZCByZWZsZWN0aW9ucywgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJlZmxlY3Rpb25EaXN0b3J0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIHRpbGluZyBub3JtYWwgbWFwIGZvciB3YXZlcywgdGhlIGRlZmF1bHQgaXMgYSBnZW5lcmF0ZWQgb25lXG4gICAqL1xuICBub3JtYWxNYXA/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIG5vcm1hbCBtYXAgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHdhdmVTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgcXVpY2tseSB3YXZlcyBtb3ZlLCBpbiB3b3JsZCB1bml0cyBwZXIgc2Vjb25kXG4gICAqL1xuICB3YXZlU3BlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzdGVlcCB3YXZlcyBhcmUsIGZyb20gMCBmb3IgZmxhdCB3YXRlciB0byAxXG4gICAqL1xuICB3YXZlU3RyZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzdGVlcCByaXBwbGVzIGFyZSBjb21wYXJlZCB0byB3YXZlc1xuICAgKi9cbiAgcmlwcGxlU3RyZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgcmlwcGxlcyB0cmF2ZWwgZWFjaCBzZWNvbmQsIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByaXBwbGVTcGVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IG11Y2ggb2YgdGhlaXIgbW92ZW1lbnQgcmlwcGxlcyBrZWVwIGVhY2ggc3RlcCwgZnJvbSAwIHRvIDFcbiAgICovXG4gIHJpcHBsZURhbXBpbmc/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIGVhY2ggY2VsbCBpbiB0aGUgcmlwcGxlIHNpbXVsYXRpb24sIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByaXBwbGVDZWxsU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiByYWluZHJvcHMgZWFjaCBzZWNvbmQsIGZvciBldmVyeSAxMDAwMCBzcXVhcmUgd29ybGQgdW5pdHNcbiAgICovXG4gIHJhaW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIGVhY2ggcmFpbmRyb3AgZGlzdHVyYnMgdGhlIHdhdGVyXG4gICAqL1xuICByYWluU3RyZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzaGlueSB0aGUgd2F0ZXIgaXMgd2hlbiBsaWdodGluZyBpcyB1c2VkLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgc3BlY3VsYXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSBzbG9wZSBvZiB0aGUgd2F0ZXIgY2hhbmdlcyBpdHMgYnJpZ2h0bmVzcywgdGhpcyBsZXRzIHdhdmVzIGFuZFxuICAgKiByaXBwbGVzIGJlIHNlZW4gZXZlbiBpZiB0aGVyZSBhcmVuJ3QgYW55IGxpZ2h0c1xuICAgKi9cbiAgc3VyZmFjZVNoYWRpbmc/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNuYXAgdGhlIHdhdGVyIHRvIGEgZ3JpZCBvZiB0aGlzIHNpemUgaW4gd29ybGQgdW5pdHMgZm9yIGEgcGl4ZWwgYXJ0XG4gICAqIHN0eWxlLCBvciB1c2UgMCBmb3Igc21vb3RoIHdhdGVyXG4gICAqL1xuICBwaXhlbFNpemU/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIFdoYXQncyBhdCBhIHBvaW50IGluIHRoZSB3YXRlclxuICovXG5leHBvcnQgdHlwZSBXYXRlclNhbXBsZSA9IHtcbiAgcmVnaW9uOiBXYXRlclJlZ2lvbjtcbiAgZGVwdGg6IG51bWJlcjtcbn07XG5cbi8qKlxuICogQW4gYXJlYSBvZiB3YXRlclxuICovXG5leHBvcnQgY2xhc3MgV2F0ZXJSZWdpb24ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlMgPSB7XG4gICAgcmVwZWF0OiBmYWxzZSxcbiAgICBmbG93U3BlZWQ6IDE2LFxuICAgIGNvbG91cjogJyMzZjhmYTgnLFxuICAgIGRlZXBDb2xvdXI6ICcjMTIzZjYzJyxcbiAgICBvcGFjaXR5OiAwLjcsXG4gICAgc2hvcmVCbGVuZDogMC4xNSxcbiAgICByZWZyYWN0aW9uOiA0LFxuICAgIHJlZmxlY3Rpb246IDAuNixcbiAgICByZWZsZWN0aW9uRGlzdG9ydGlvbjogMyxcbiAgICB3YXZlU2l6ZTogMTI4LFxuICAgIHdhdmVTcGVlZDogNixcbiAgICB3YXZlU3RyZW5ndGg6IDAuMzUsXG4gICAgcmlwcGxlU3RyZW5ndGg6IDIsXG4gICAgcmlwcGxlU3BlZWQ6IDYwLFxuICAgIHJpcHBsZURhbXBpbmc6IDAuOTcsXG4gICAgcmlwcGxlQ2VsbFNpemU6IDIsXG4gICAgcmFpbjogMCxcbiAgICByYWluU3RyZW5ndGg6IDAuNSxcbiAgICBzcGVjdWxhcjogMC41LFxuICAgIHN1cmZhY2VTaGFkaW5nOiAwLjIsXG4gICAgcGl4ZWxTaXplOiAwLFxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9SSVBQTEVfQ0VMTFMgPSAyNTY7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJBSU5EUk9QX1JBRElVUyA9IDIuNTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUkFJTl9BUkVBID0gMTAwMDA7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1hc2s6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBwdWJsaWMgbm9ybWFsTWFwOiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICBwdWJsaWMgcmVwZWF0OiBib29sZWFuO1xuICBwdWJsaWMgZmxvd1NwZWVkOiBudW1iZXI7XG4gIHB1YmxpYyBjb2xvdXI6IHN0cmluZztcbiAgcHVibGljIGRlZXBDb2xvdXI6IHN0cmluZztcbiAgcHVibGljIG9wYWNpdHk6IG51bWJlcjtcbiAgcHVibGljIHNob3JlQmxlbmQ6IG51bWJlcjtcbiAgcHVibGljIHJlZnJhY3Rpb246IG51bWJlcjtcbiAgcHVibGljIHJlZmxlY3Rpb246IG51bWJlcjtcbiAgcHVibGljIHJlZmxlY3Rpb25EaXN0b3J0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyB3YXZlU2l6ZTogbnVtYmVyO1xuICBwdWJsaWMgd2F2ZVNwZWVkOiBudW1iZXI7XG4gIHB1YmxpYyB3YXZlU3RyZW5ndGg6IG51bWJlcjtcbiAgcHVibGljIHJpcHBsZVN0cmVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyByaXBwbGVTcGVlZDogbnVtYmVyO1xuICBwdWJsaWMgcmlwcGxlRGFtcGluZzogbnVtYmVyO1xuICBwdWJsaWMgcmFpbjogbnVtYmVyO1xuICBwdWJsaWMgcmFpblN0cmVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyBzcGVjdWxhcjogbnVtYmVyO1xuICBwdWJsaWMgc3VyZmFjZVNoYWRpbmc6IG51bWJlcjtcbiAgcHVibGljIHBpeGVsU2l6ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyByZWFkb25seSByaXBwbGVzOiBSaXBwbGVGaWVsZDtcblxuICAvKipcbiAgICogUkdCQSBkYXRhIGZvciB0aGUgZGVwdGggYW5kIGZsb3cgZ3JpZHMsIHRoZSB2ZXJzaW9uIG51bWJlcnMgYXJlIGNoYW5nZWRcbiAgICogd2hlbmV2ZXIgdGhlIGRhdGEgY2hhbmdlc1xuICAgKi9cbiAgcHVibGljIGRlcHRoUGl4ZWxzOiB7IHNpemU6IHZlYzI7IGRhdGE6IFVpbnQ4QXJyYXk7IHZlcnNpb246IG51bWJlciB9O1xuICBwdWJsaWMgZmxvd1BpeGVsczogeyBzaXplOiB2ZWMyOyBkYXRhOiBVaW50OEFycmF5OyB2ZXJzaW9uOiBudW1iZXIgfTtcblxuICBwcml2YXRlIHN5c3RlbTogV2F0ZXJTeXN0ZW07XG4gIHByaXZhdGUgZGVwdGhHcmlkOiBXYXRlckdyaWQ8bnVtYmVyPiA9IFtbMV1dO1xuICBwcml2YXRlIHNoYXBlOiBVaW50OEFycmF5IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcmFpblRpbWU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgcmVtb3ZlQ2FsbGJhY2tzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzeXN0ZW06IFdhdGVyU3lzdGVtLCBvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpIHtcbiAgICBjb25zdCB7IG1hc2ssIG5vcm1hbE1hcCwgZGVwdGgsIGZsb3csIHBvc2l0aW9uLCBzaXplLCAuLi5zZXR0aW5ncyB9ID1cbiAgICAgIG9wdGlvbnM7XG5cbiAgICB0aGlzLnN5c3RlbSA9IHN5c3RlbTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuICAgIHRoaXMubWFzayA9IG1hc2sgPz8gbnVsbDtcbiAgICB0aGlzLm5vcm1hbE1hcCA9IG5vcm1hbE1hcCA/PyBudWxsO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgV2F0ZXJSZWdpb24uREVGQVVMVF9PUFRJT05TLCBzZXR0aW5ncyk7XG5cbiAgICB0aGlzLmRlcHRoUGl4ZWxzID0geyBzaXplOiB2ZWMyKDEpLCBkYXRhOiBuZXcgVWludDhBcnJheSg0KSwgdmVyc2lvbjogMCB9O1xuICAgIHRoaXMuZmxvd1BpeGVscyA9IHsgc2l6ZTogdmVjMigxKSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkoNCksIHZlcnNpb246IDAgfTtcbiAgICB0aGlzLnNldERlcHRoKGRlcHRoID8/IDEpO1xuICAgIHRoaXMuc2V0RmxvdyhmbG93ID8/IHZlYzIoKSk7XG5cbiAgICBjb25zdCBjZWxsU2l6ZSA9IE1hdGgubWF4KFxuICAgICAgb3B0aW9ucy5yaXBwbGVDZWxsU2l6ZSA/PyBXYXRlclJlZ2lvbi5ERUZBVUxUX09QVElPTlMucmlwcGxlQ2VsbFNpemUsXG4gICAgICBNYXRoLm1heChzaXplLngsIHNpemUueSkgLyBXYXRlclJlZ2lvbi5NQVhfUklQUExFX0NFTExTXG4gICAgKTtcbiAgICBjb25zdCBjZWxscyA9IHZlYzIoXG4gICAgICBNYXRoLm1heChNYXRoLmNlaWwoc2l6ZS54IC8gY2VsbFNpemUpLCAxKSxcbiAgICAgIE1hdGgubWF4KE1hdGguY2VpbChzaXplLnkgLyBjZWxsU2l6ZSksIDEpXG4gICAgKTtcblxuICAgIHRoaXMucmlwcGxlcyA9IG5ldyBSaXBwbGVGaWVsZChcbiAgICAgIGNlbGxzLFxuICAgICAgdmVjMihzaXplLnggLyBjZWxscy54LCBzaXplLnkgLyBjZWxscy55KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGhvdyBkZWVwIHRoZSB3YXRlciBpc1xuICAgKi9cbiAgcHVibGljIHNldERlcHRoKGRlcHRoOiBudW1iZXIgfCBXYXRlckdyaWQ8bnVtYmVyPikge1xuICAgIHRoaXMuZGVwdGhHcmlkID0gdHlwZW9mIGRlcHRoID09PSAnbnVtYmVyJyA/IFtbZGVwdGhdXSA6IGRlcHRoO1xuXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZGVwdGhHcmlkLmxlbmd0aDtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5kZXB0aEdyaWRbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShyb3dzICogY29sdW1ucyAqIDQpO1xuXG4gICAgdGhpcy5kZXB0aEdyaWQuZm9yRWFjaCgocm93LCB5KSA9PlxuICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XG4gICAgICAgIGRhdGFbKHggKyB5ICogY29sdW1ucykgKiA0XSA9IE1hdGgucm91bmQodmFsdWUgKiAyNTUpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5kZXB0aFBpeGVscyA9IHtcbiAgICAgIHNpemU6IHZlYzIoY29sdW1ucywgcm93cyksXG4gICAgICBkYXRhLFxuICAgICAgdmVyc2lvbjogdGhpcy5kZXB0aFBpeGVscy52ZXJzaW9uICsgMSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB3aGljaCB3YXkgdGhlIHdhdGVyIGZsb3dzXG4gICAqL1xuICBwdWJsaWMgc2V0RmxvdyhmbG93OiB2ZWMyIHwgV2F0ZXJHcmlkPHZlYzI+KSB7XG4gICAgY29uc3QgZ3JpZCA9IEFycmF5LmlzQXJyYXkoZmxvdykgPyBmbG93IDogW1tmbG93XV07XG4gICAgY29uc3Qgcm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBncmlkWzBdLmxlbmd0aDtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocm93cyAqIGNvbHVtbnMgKiA0KTtcblxuICAgIC8vIDEyOCBpcyB1c2VkIGZvciAwIHNvIHRoYXQgc3RpbGwgd2F0ZXIgc3RheXMgcGVyZmVjdGx5IHN0aWxsXG4gICAgZ3JpZC5mb3JFYWNoKChyb3csIHkpID0+XG4gICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgICAgZGF0YVsoeCArIHkgKiBjb2x1bW5zKSAqIDRdID0gTWF0aC5yb3VuZCh2YWx1ZS54ICogMTI3KSArIDEyODtcbiAgICAgICAgZGF0YVsoeCArIHkgKiBjb2x1bW5zKSAqIDQgKyAxXSA9IE1hdGgucm91bmQodmFsdWUueSAqIDEyNykgKyAxMjg7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmZsb3dQaXhlbHMgPSB7XG4gICAgICBzaXplOiB2ZWMyKGNvbHVtbnMsIHJvd3MpLFxuICAgICAgZGF0YSxcbiAgICAgIHZlcnNpb246IHRoaXMuZmxvd1BpeGVscy52ZXJzaW9uICsgMSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIG1hc2sgYXQgdGhlIHJlc29sdXRpb24gb2YgdGhlIHJpcHBsZSBncmlkLCBzbyB0aGF0IHdlIGNhbiBmaW5kIG91dFxuICAgKiB3aGVyZSB0aGUgd2F0ZXIgaXMgd2l0aG91dCB1c2luZyB0aGUgR1BVXG4gICAqXG4gICAqIFRoaXMgcmV0dXJucyBudWxsIGlmIHRoZSBtYXNrIGhhc24ndCBsb2FkZWQgeWV0XG4gICAqL1xuICBwcml2YXRlIGdldFNoYXBlKCk6IFVpbnQ4QXJyYXkgfCBudWxsIHtcbiAgICBpZiAodGhpcy5zaGFwZSB8fCAhdGhpcy5tYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaGFwZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm1hc2sud2lkdGggPT09IDAgfHxcbiAgICAgICh0aGlzLm1hc2sgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmICF0aGlzLm1hc2suY29tcGxldGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHg6IGNvbHVtbnMsIHk6IHJvd3MgfSA9IHRoaXMucmlwcGxlcy5zaXplO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IGNvbHVtbnM7XG4gICAgY2FudmFzLmhlaWdodCA9IHJvd3M7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkhO1xuICAgIGNvbnRleHQuc2NhbGUoY29sdW1ucyAvIHRoaXMuc2l6ZS54LCByb3dzIC8gdGhpcy5zaXplLnkpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKC10aGlzLnBvc2l0aW9uLngsIC10aGlzLnBvc2l0aW9uLnkpO1xuICAgIGRyYXdJbWFnZUluUmVjdGFuZ2xlKGNvbnRleHQsIHRoaXMubWFzaywgdGhpcywgdGhpcy5yZXBlYXQpO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjb2x1bW5zLCByb3dzKTtcbiAgICBjb25zdCBzaGFwZSA9IG5ldyBVaW50OEFycmF5KGNvbHVtbnMgKiByb3dzKTtcbiAgICBjb25zdCBibG9ja2VkID0gbmV3IFVpbnQ4QXJyYXkoY29sdW1ucyAqIHJvd3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoYXBlW2ldID0gZGF0YVtpICogNCArIDNdO1xuICAgICAgYmxvY2tlZFtpXSA9IHNoYXBlW2ldIDwgMTI4ID8gMSA6IDA7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIHRoaXMucmlwcGxlcy5zZXRCbG9ja2VkKGJsb2NrZWQpO1xuXG4gICAgcmV0dXJuIHNoYXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmdldCB0aGUgbWFzaydzIHNoYXBlLCB0aGlzIHNob3VsZCBiZSBjYWxsZWQgaWYgdGhlIG1hc2sgaXMgY2hhbmdlZFxuICAgKi9cbiAgcHVibGljIGludmFsaWRhdGVNYXNrKCkge1xuICAgIHRoaXMuc2hhcGUgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGRlcHRoIGF0IGEgd29ybGQgcG9zaXRpb24sIHRoaXMgaXMgMCBpZiB0aGVyZSdzIG5vIHdhdGVyIHRoZXJlXG4gICAqL1xuICBwdWJsaWMgZGVwdGhBdChwb3NpdGlvbjogdmVjMik6IG51bWJlciB7XG4gICAgY29uc3QgbG9jYWwgPSB2ZWMyLnN1Yihwb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgaWYgKFxuICAgICAgbG9jYWwueCA8IDAgfHxcbiAgICAgIGxvY2FsLnkgPCAwIHx8XG4gICAgICBsb2NhbC54ID49IHRoaXMuc2l6ZS54IHx8XG4gICAgICBsb2NhbC55ID49IHRoaXMuc2l6ZS55XG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoKTtcbiAgICBpZiAoc2hhcGUpIHtcbiAgICAgIGNvbnN0IHsgeDogY29sdW1ucywgeTogcm93cyB9ID0gdGhpcy5yaXBwbGVzLnNpemU7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigobG9jYWwueCAvIHRoaXMuc2l6ZS54KSAqIGNvbHVtbnMpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoKGxvY2FsLnkgLyB0aGlzLnNpemUueSkgKiByb3dzKTtcblxuICAgICAgaWYgKHNoYXBlW3ggKyB5ICogY29sdW1uc10gPCAxMjgpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVEZXB0aChsb2NhbCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhIHZhbHVlIGZyb20gdGhlIGRlcHRoIGdyaWQsIGluIHRoZSBzYW1lIHdheSB0aGF0IGEgdGV4dHVyZSB3b3VsZFxuICAgKi9cbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZURlcHRoKGxvY2FsOiB2ZWMyKTogbnVtYmVyIHtcbiAgICBjb25zdCBncmlkID0gdGhpcy5kZXB0aEdyaWQ7XG4gICAgY29uc3Qgcm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBncmlkWzBdLmxlbmd0aDtcblxuICAgIGNvbnN0IHUgPSAobG9jYWwueCAvIHRoaXMuc2l6ZS54KSAqIGNvbHVtbnMgLSAwLjU7XG4gICAgY29uc3QgdiA9IChsb2NhbC55IC8gdGhpcy5zaXplLnkpICogcm93cyAtIDAuNTtcbiAgICBjb25zdCBjbGFtcFggPSAoeDogbnVtYmVyKSA9PiBNYXRoLm1pbihNYXRoLm1heCh4LCAwKSwgY29sdW1ucyAtIDEpO1xuICAgIGNvbnN0IGNsYW1wWSA9ICh5OiBudW1iZXIpID0+IE1hdGgubWluKE1hdGgubWF4KHksIDApLCByb3dzIC0gMSk7XG5cbiAgICBjb25zdCB4MCA9IE1hdGguZmxvb3IodSk7XG4gICAgY29uc3QgeTAgPSBNYXRoLmZsb29yKHYpO1xuICAgIGNvbnN0IHR4ID0gdSAtIHgwO1xuICAgIGNvbnN0IHR5ID0gdiAtIHkwO1xuXG4gICAgY29uc3QgdmFsdWUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGdyaWRbY2xhbXBZKHkpXVtjbGFtcFgoeCldO1xuICAgIGNvbnN0IHRvcCA9IHZhbHVlKHgwLCB5MCkgKiAoMSAtIHR4KSArIHZhbHVlKHgwICsgMSwgeTApICogdHg7XG4gICAgY29uc3QgYm90dG9tID0gdmFsdWUoeDAsIHkwICsgMSkgKiAoMSAtIHR4KSArIHZhbHVlKHgwICsgMSwgeTAgKyAxKSAqIHR4O1xuXG4gICAgcmV0dXJuIHRvcCAqICgxIC0gdHkpICsgYm90dG9tICogdHk7XG4gIH1cblxuICAvKipcbiAgICogRGlzdHVyYiB0aGUgd2F0ZXIgYXQgYSB3b3JsZCBwb3NpdGlvbiwgZm9yIGV4YW1wbGUgaWYgc29tZXRoaW5nIGhhcyBmYWxsZW5cbiAgICogaW50byBpdFxuICAgKi9cbiAgcHVibGljIGRpc3R1cmIocG9zaXRpb246IHZlYzIsIG9wdGlvbnM6IFJpcHBsZU9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZ2V0U2hhcGUoKTtcbiAgICB0aGlzLnJpcHBsZXMuZGlzdHVyYih2ZWMyLnN1Yihwb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiksIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy51cGRhdGVSYWluKGR0KTtcbiAgICB0aGlzLnJpcHBsZXMudXBkYXRlKGR0LCB0aGlzLnJpcHBsZVNwZWVkLCB0aGlzLnJpcHBsZURhbXBpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSYWluKGR0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5yYWluIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhcmVhID0gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IFdhdGVyUmVnaW9uLlJBSU5fQVJFQSAvICh0aGlzLnJhaW4gKiBhcmVhKTtcblxuICAgIHRoaXMucmFpblRpbWUgKz0gZHQ7XG4gICAgd2hpbGUgKHRoaXMucmFpblRpbWUgPj0gaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMucmFpblRpbWUgLT0gaW50ZXJ2YWw7XG4gICAgICB0aGlzLmRpc3R1cmIoXG4gICAgICAgIHZlYzIoXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMuc2l6ZS54LFxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnNpemUueVxuICAgICAgICApLFxuICAgICAgICB7XG4gICAgICAgICAgcmFkaXVzOiBXYXRlclJlZ2lvbi5SQUlORFJPUF9SQURJVVMsXG4gICAgICAgICAgc3RyZW5ndGg6IC10aGlzLnJhaW5TdHJlbmd0aCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhpcyByZWdpb24gaXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIG9uUmVtb3ZlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgcmVnaW9uIGZyb20gdGhlIHdhdGVyIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnN5c3RlbS5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBGcmFtZSxcbiAgR2xDb250ZXh0LFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFJpcHBsZU9wdGlvbnMgfSBmcm9tICcuL1JpcHBsZUZpZWxkJztcbmltcG9ydCB7IFdhdGVyT3V0cHV0LCBXYXRlclBhc3MgfSBmcm9tICcuL1dhdGVyUGFzcyc7XG5pbXBvcnQge1xuICBXYXRlclJlZ2lvbixcbiAgV2F0ZXJSZWdpb25PcHRpb25zLFxuICBXYXRlclNhbXBsZSxcbn0gZnJvbSAnLi9XYXRlclJlZ2lvbic7XG5cbi8qKlxuICogUmVuZGVycyB3YXRlclxuICpcbiAqIFdhdGVyIHNob3dzIHdoYXQncyB1bmRlcm5lYXRoIGl0LCBzbyB0aGlzIGhhcyB0byBiZSBjYWxsZWQgcGFydC13YXkgdGhyb3VnaFxuICogZHJhd2luZyB0aGUgc2NlbmUuIFNlZSBgV29ybGRgIGZvciBob3cgdGhpcyBmaXRzIHRvZ2V0aGVyIHdpdGggZXZlcnl0aGluZ1xuICogZWxzZVxuICpcbiAqIDEuIENhbGwgYHVwZGF0ZSgpYCBldmVyeSBmcmFtZVxuICogMi4gRHJhdyBldmVyeXRoaW5nIHRoYXQncyB1bmRlcm5lYXRoIHRoZSB3YXRlclxuICogMy4gQ2FsbCBgZHJhdygpYFxuICogNC4gRHJhdyBldmVyeXRoaW5nIHRoYXQncyBvbiB0b3Agb2YgdGhlIHdhdGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBXYXRlclN5c3RlbSB7XG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUNvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lvbnM6IFdhdGVyUmVnaW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBnbENvbnRleHQ6IEdsQ29udGV4dCB8IG51bGw7XG4gIHByaXZhdGUgcGFzczogV2F0ZXJQYXNzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdGltZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBmcmFtZTogRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogU2NyZWVuLXNpemVkIGltYWdlcyBvZiB0aGUgd2F0ZXIncyBzdXJmYWNlLCBmb3IgdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxNYXBDb250ZXh0ID0gV2F0ZXJTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgbm9ybWFsTWFwQ2FudmFzID0gdGhpcy5ub3JtYWxNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNwZWN1bGFyTWFwQ29udGV4dCA9IFdhdGVyU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNwZWN1bGFyTWFwQ2FudmFzID0gdGhpcy5zcGVjdWxhck1hcENvbnRleHQuY2FudmFzO1xuXG4gIC8qKlxuICAgKiBgZ2xDb250ZXh0YCBsZXRzIHRoZSB3YXRlciBzeXN0ZW0gc2hhcmUgYSBXZWJHTCBjb250ZXh0IHdpdGggb3RoZXIgc3lzdGVtcyxcbiAgICogb3RoZXJ3aXNlIGl0IHdpbGwgY3JlYXRlIGl0cyBvd25cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihnbENvbnRleHQ/OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmdsQ29udGV4dCA9IGdsQ29udGV4dCA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGEgV2ViR0wgY29udGV4dCB3aXRoIG90aGVyIHN5c3RlbXMsIHRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGJlZm9yZVxuICAgKiB0aGUgZmlyc3QgcmVuZGVyIGFuZCBkb2VzIG5vdGhpbmcgaWYgYSBjb250ZXh0IGhhcyBhbHJlYWR5IGJlZW4gc2V0XG4gICAqL1xuICBwdWJsaWMgdXNlR2xDb250ZXh0KGdsQ29udGV4dDogR2xDb250ZXh0KSB7XG4gICAgdGhpcy5nbENvbnRleHQgPz89IGdsQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gYXJlYSBvZiB3YXRlclxuICAgKi9cbiAgcHVibGljIGFkZFJlZ2lvbihvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpOiBXYXRlclJlZ2lvbiB7XG4gICAgY29uc3QgcmVnaW9uID0gbmV3IFdhdGVyUmVnaW9uKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMucmVnaW9ucy5wdXNoKHJlZ2lvbik7XG5cbiAgICByZXR1cm4gcmVnaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBhcmVhIG9mIHdhdGVyXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKHJlZ2lvbjogV2F0ZXJSZWdpb24pIHtcbiAgICB0aGlzLnJlZ2lvbnMgPSB0aGlzLnJlZ2lvbnMuZmlsdGVyKHIgPT4gciAhPT0gcmVnaW9uKTtcbiAgICB0aGlzLnBhc3M/LnJlbGVhc2UocmVnaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB3YXRlciBhdCBhIHdvcmxkIHBvc2l0aW9uLCB0aGlzIGlzIG51bGwgaWYgdGhlcmUgaXNuJ3QgYW55XG4gICAqL1xuICBwdWJsaWMgc2FtcGxlKHBvc2l0aW9uOiB2ZWMyKTogV2F0ZXJTYW1wbGUgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB0aGlzLnJlZ2lvbnMpIHtcbiAgICAgIGNvbnN0IGRlcHRoID0gcmVnaW9uLmRlcHRoQXQocG9zaXRpb24pO1xuICAgICAgaWYgKGRlcHRoID4gMCkge1xuICAgICAgICByZXR1cm4geyByZWdpb24sIGRlcHRoIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGlzdHVyYiB0aGUgd2F0ZXIgYXQgYSB3b3JsZCBwb3NpdGlvbiwgZm9yIGV4YW1wbGUgaWYgc29tZXRoaW5nIGhhcyBmYWxsZW5cbiAgICogaW50byBpdC4gVGhpcyBkb2VzIG5vdGhpbmcgaWYgdGhlcmUncyBubyB3YXRlciB0aGVyZVxuICAgKi9cbiAgcHVibGljIGRpc3R1cmIocG9zaXRpb246IHZlYzIsIG9wdGlvbnM/OiBSaXBwbGVPcHRpb25zKSB7XG4gICAgdGhpcy5zYW1wbGUocG9zaXRpb24pPy5yZWdpb24uZGlzdHVyYihwb3NpdGlvbiwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgd2F0ZXIgZm9yd2FyZCwgdGhpcyBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLnRpbWUgKz0gZHQ7XG4gICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHJlZ2lvbi51cGRhdGUoZHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNoYWRlciBwYXNzLCBpZiBpdCBjYW4gYmUgdXNlZFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYXNzKCk6IFdhdGVyUGFzcyB8IG51bGwge1xuICAgIHRoaXMucGFzcyA/Pz0gbmV3IFdhdGVyUGFzcyh0aGlzLmdsQ29udGV4dCA/PyBuZXcgR2xDb250ZXh0KCkpO1xuXG4gICAgcmV0dXJuIHRoaXMucGFzcy5hdmFpbGFibGUgPyB0aGlzLnBhc3MgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpYmxlUmVnaW9ucyh7IGNhbWVyYSB9OiBGcmFtZSk6IFdhdGVyUmVnaW9uW10ge1xuICAgIGNvbnN0IHZpc2libGUgPSBpbnRlcnZhbFRvUmVjdGFuZ2xlKGNhbWVyYS5ib3VuZHMpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVnaW9ucy5maWx0ZXIocmVnaW9uID0+IHJlY3RhbmdsZXNJbnRlcnNlY3QocmVnaW9uLCB2aXNpYmxlKSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgd2F0ZXIgb250byB0aGUgZnJhbWUncyBjb250ZXh0LCB1c2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZSBhcyB0aGVcbiAgICogc2NlbmUgdW5kZXJuZWF0aCB0aGUgd2F0ZXJcbiAgICovXG4gIHB1YmxpYyBkcmF3KGZyYW1lOiBGcmFtZSkge1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgIGNvbnN0IHJlZ2lvbnMgPSB0aGlzLnZpc2libGVSZWdpb25zKGZyYW1lKTtcbiAgICBjb25zdCBwYXNzID0gcmVnaW9ucy5sZW5ndGggPiAwID8gdGhpcy5nZXRQYXNzKCkgOiBudWxsO1xuICAgIGlmICghcGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBhc3MucmVuZGVyKGZyYW1lLCByZWdpb25zLCBXYXRlck91dHB1dC5Db2xvdXIsIHRoaXMudGltZSk7XG5cbiAgICBmcmFtZS5jb250ZXh0LnNhdmUoKTtcbiAgICBmcmFtZS5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBmcmFtZS5jb250ZXh0LmRyYXdJbWFnZShwYXNzLmNhbnZhcywgMCwgMCk7XG4gICAgZnJhbWUuY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBub3JtYWwgbWFwIGFuZCBzcGVjdWxhciBtYXAgb2YgdGhlIHdhdGVyJ3Mgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIGRyYXdMaWdodGluZ01hcHMoZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc3QgcmVnaW9ucyA9IHRoaXMudmlzaWJsZVJlZ2lvbnMoZnJhbWUpO1xuICAgIGNvbnN0IHBhc3MgPSByZWdpb25zLmxlbmd0aCA+IDAgPyB0aGlzLmdldFBhc3MoKSA6IG51bGw7XG4gICAgaWYgKCFwYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbY29udGV4dCwgb3V0cHV0XSBvZiBbXG4gICAgICBbdGhpcy5ub3JtYWxNYXBDb250ZXh0LCBXYXRlck91dHB1dC5Ob3JtYWxdLFxuICAgICAgW3RoaXMuc3BlY3VsYXJNYXBDb250ZXh0LCBXYXRlck91dHB1dC5TcGVjdWxhcl0sXG4gICAgXSBhcyBjb25zdCkge1xuICAgICAgcGFzcy5yZW5kZXIoZnJhbWUsIHJlZ2lvbnMsIG91dHB1dCwgdGhpcy50aW1lKTtcblxuICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSBmcmFtZS5zY3JlZW4ueDtcbiAgICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IGZyYW1lLnNjcmVlbi55O1xuICAgICAgY29udGV4dC5kcmF3SW1hZ2UocGFzcy5jYW52YXMsIDAsIDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHBhcnQgb2YgYSBzY3JlZW4tc2l6ZWQgbWFwIG9udG8gYSBjb250ZXh0IHRoYXQncyB1c2luZyB0aGUgY2FtZXJhJ3NcbiAgICogdHJhbnNmb3JtcywgdGhpcyBpcyBmb3IgYWRkaW5nIHRoZSB3YXRlcidzIHN1cmZhY2UgdG8gdGhlIHNjZW5lJ3MgbWFwc1xuICAgKi9cbiAgcHJpdmF0ZSBkcmF3UmVnaW9uTWFwKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICByZWdpb246IFdhdGVyUmVnaW9uLFxuICAgIG1hcDogSFRNTENhbnZhc0VsZW1lbnRcbiAgKSB7XG4gICAgY29uc3QgeyBmcmFtZSB9ID0gdGhpcztcbiAgICBpZiAoIWZyYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wTGVmdCA9IGZyYW1lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHJlZ2lvbi5wb3NpdGlvbik7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbihcbiAgICAgIHZlYzIuYWRkKHJlZ2lvbi5wb3NpdGlvbiwgcmVnaW9uLnNpemUpXG4gICAgKTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgoTWF0aC5mbG9vcih0b3BMZWZ0LngpLCAwKTtcbiAgICBjb25zdCB0b3AgPSBNYXRoLm1heChNYXRoLmZsb29yKHRvcExlZnQueSksIDApO1xuICAgIGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4oTWF0aC5jZWlsKGJvdHRvbVJpZ2h0LngpLCBtYXAud2lkdGgpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKE1hdGguY2VpbChib3R0b21SaWdodC55KSwgbWFwLmhlaWdodCk7XG4gICAgY29uc3Qgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgaWYgKHdpZHRoIDw9IDAgfHwgaGVpZ2h0IDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShtYXAsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3UmVnaW9uTm9ybWFsTWFwKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICByZWdpb246IFdhdGVyUmVnaW9uXG4gICkge1xuICAgIHRoaXMuZHJhd1JlZ2lvbk1hcChjb250ZXh0LCByZWdpb24sIHRoaXMubm9ybWFsTWFwQ2FudmFzKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3UmVnaW9uU3BlY3VsYXJNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb25cbiAgKSB7XG4gICAgdGhpcy5kcmF3UmVnaW9uTWFwKGNvbnRleHQsIHJlZ2lvbiwgdGhpcy5zcGVjdWxhck1hcENhbnZhcyk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IFJpcHBsZUZpZWxkIH0gZnJvbSAnLi9SaXBwbGVGaWVsZCc7XG5leHBvcnQgdHlwZSB7IFJpcHBsZU9wdGlvbnMgfSBmcm9tICcuL1JpcHBsZUZpZWxkJztcbmV4cG9ydCB7IFdhdGVyUmVnaW9uIH0gZnJvbSAnLi9XYXRlclJlZ2lvbic7XG5leHBvcnQgdHlwZSB7XG4gIFdhdGVyR3JpZCxcbiAgV2F0ZXJSZWdpb25PcHRpb25zLFxuICBXYXRlclNhbXBsZSxcbn0gZnJvbSAnLi9XYXRlclJlZ2lvbic7XG5leHBvcnQgeyBXYXRlclN5c3RlbSB9IGZyb20gJy4vV2F0ZXJTeXN0ZW0nO1xuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBib3VuZGluZ1JlY3RhbmdsZSxcbiAgRnJhbWUsXG4gIEdsQ29udGV4dCxcbiAgUmVjdGFuZ2xlLFxuICBTY2VuZUNhbWVyYSxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBBY3RvcixcbiAgQWN0b3JPcHRpb25zLFxuICBHcm91bmRSZWNlaXZlcixcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBMaWdodCxcbiAgTGlnaHRpbmdTeXN0ZW0sXG4gIExpZ2h0T3B0aW9ucyxcbiAgU3ByaXRlQWN0b3JPcHRpb25zLFxuICBTdXJmYWNlLFxuICBXYWxsLFxuICBXYWxsT3B0aW9ucyxcbiAgV2FsbFJlY2VpdmVyLFxufSBmcm9tICcuLi9saWdodGluZyc7XG5pbXBvcnQgdHlwZSB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gIFJlZmxlY3Rpb25PYmplY3QsXG4gIFJlZmxlY3Rpb25Tb3VyY2UsXG4gIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyxcbiAgUmVmbGVjdGlvblN5c3RlbSxcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4uL3JlZmxlY3Rpb25zJztcbmltcG9ydCB0eXBlIHtcbiAgV2F0ZXJSZWdpb24sXG4gIFdhdGVyUmVnaW9uT3B0aW9ucyxcbiAgV2F0ZXJTeXN0ZW0sXG59IGZyb20gJy4uL3dhdGVyJztcblxuZXhwb3J0IHR5cGUgV29ybGRPcHRpb25zID0ge1xuICAvKipcbiAgICogVGhlIGxpZ2h0aW5nIHN5c3RlbSBmb3IgdGhpcyB3b3JsZFxuICAgKlxuICAgKiBUaGUgbGlnaHRpbmcgc3lzdGVtIGhvbGRzIHRoZSBzY2VuZSwgc28gYSB3b3JsZCBhbHdheXMgaGFzIG9uZS4gSWYgdGhpc1xuICAgKiBpc24ndCBzZXQgdGhlbiB0aGUgc2NlbmUgd2lsbCBiZSBkcmF3biB3aXRob3V0IGFueSBsaWdodGluZ1xuICAgKi9cbiAgbGlnaHRpbmc/OiBMaWdodGluZ1N5c3RlbTtcblxuICAvKipcbiAgICogVGhlIHJlZmxlY3Rpb24gc3lzdGVtIGZvciB0aGlzIHdvcmxkLCBpZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZVxuICAgKiB3b24ndCBoYXZlIGFueSByZWZsZWN0aW9uc1xuICAgKi9cbiAgcmVmbGVjdGlvbnM/OiBSZWZsZWN0aW9uU3lzdGVtO1xuXG4gIC8qKlxuICAgKiBUaGUgd2F0ZXIgc3lzdGVtIGZvciB0aGlzIHdvcmxkLCBpZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZSB3b24ndFxuICAgKiBoYXZlIGFueSB3YXRlclxuICAgKi9cbiAgd2F0ZXI/OiBXYXRlclN5c3RlbTtcblxuICAvKipcbiAgICogVGhlIFdlYkdMIGNvbnRleHQgdG8gc2hhcmUgYmV0d2VlbiBzeXN0ZW1zLCB0aGUgZGVmYXVsdCBpcyBhIG5ldyBjb250ZXh0XG4gICAqL1xuICBnbENvbnRleHQ/OiBHbENvbnRleHQ7XG59O1xuXG50eXBlIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb24gPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBvYmplY3QgYXBwZWFyIGluIHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvIGNvbmZpZ3VyZSBob3dcbiAgICogaXQncyByZWZsZWN0ZWRcbiAgICovXG4gIHJlZmxlY3Rpb25Tb3VyY2U/OiBib29sZWFuIHwgUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzO1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRBY3RvcldhdGVyT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIEhvdyBtdWNoIG9mIHRoaXMgYWN0b3IgaXMgdW5kZXJ3YXRlciBpbiB0aGUgZGVlcGVzdCB3YXRlciwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIG1heERlcHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRoaXMgYWN0b3IncyBmZWV0IGFyZSBhYm92ZSB0aGUgYm90dG9tIGVkZ2Ugb2YgaXRzIGltYWdlXG4gICAqL1xuICBmb290T2Zmc2V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEb2VzIHRoaXMgYWN0b3IgbWFrZSByaXBwbGVzIHdoZW4gaXQgbW92ZXMgdGhyb3VnaCB0aGUgd2F0ZXI/XG4gICAqL1xuICByaXBwbGVzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFdvcmxkQWN0b3JPcHRpb25zID0gKEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9ucykgJlxuICBSZWZsZWN0aW9uU291cmNlT3B0aW9uICYge1xuICAgIC8qKlxuICAgICAqIFNob3VsZCB0aGUgbG93ZXIgcGFydCBvZiB0aGlzIGFjdG9yIGdvIHVuZGVyd2F0ZXIgd2hlbiBpdCBzdGFuZHMgaW5cbiAgICAgKiB3YXRlcj8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgaG93IGl0IGJlaGF2ZXNcbiAgICAgKi9cbiAgICBzdWJtZXJzaWJsZT86IGJvb2xlYW4gfCBXb3JsZEFjdG9yV2F0ZXJPcHRpb25zO1xuICB9O1xuXG5leHBvcnQgdHlwZSBXb3JsZEdyb3VuZE9wdGlvbnMgPSBHcm91bmRSZWNlaXZlck9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBncm91bmQgc2hvdyByZWZsZWN0aW9ucz8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgdGhlXG4gICAqIHJlZmxlY3Rpb24sIGJ5IGRlZmF1bHQgaXQgd2lsbCBjb3ZlciB0aGUgd2hvbGUgYXJlYSBvZiB0aGUgZ3JvdW5kXG4gICAqL1xuICByZWZsZWN0aW9uUmVjZWl2ZXI/OiBib29sZWFuIHwgUGFydGlhbDxGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRXYWxsT3B0aW9ucyA9IFdhbGxPcHRpb25zICZcbiAgUmVmbGVjdGlvblNvdXJjZU9wdGlvbiAmIHtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGhlIGZyb250IG9mIHRoaXMgd2FsbCBzaG93IHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvXG4gICAgICogY29uZmlndXJlIHRoZSByZWZsZWN0aW9uLCBieSBkZWZhdWx0IGl0IHdpbGwgY292ZXIgdGhlIHdob2xlIGZyb250XG4gICAgICovXG4gICAgcmVmbGVjdGlvblJlY2VpdmVyPzogYm9vbGVhbiB8IFBhcnRpYWw8V2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xuICB9O1xuXG50eXBlIFN1Ym1lcnNpYmxlQWN0b3IgPSBSZXF1aXJlZDxXb3JsZEFjdG9yV2F0ZXJPcHRpb25zPiAmIHtcbiAgYWN0b3I6IEFjdG9yO1xuICBzb3VyY2U6IFJlZmxlY3Rpb25Tb3VyY2UgfCBudWxsO1xuICBsYXN0UmlwcGxlOiB2ZWMyIHwgbnVsbDtcbn07XG5cbi8qKlxuICogQSBzY2VuZSB0aGF0J3MgcmVuZGVyZWQgYnkgc2V2ZXJhbCBzeXN0ZW1zIHdvcmtpbmcgdG9nZXRoZXJcbiAqXG4gKiBTeXN0ZW1zIGRvbid0IGtub3cgYWJvdXQgZWFjaCBvdGhlciwgdGhleSBlYWNoIGRyYXcgYSBwYXJ0IG9mIHRoZSBmcmFtZSBhbmRcbiAqIHRoaXMgY2xhc3MgZGVjaWRlcyB0aGUgb3JkZXIuIFRoZSBmcmFtZSBpcyByZW5kZXJlZCBpbiB0aGVzZSBzdGVwczpcbiAqXG4gKiAxLiBEcmF3IHRoZSBncm91bmRcbiAqIDIuIERyYXcgdGhlIHBhcnRzIG9mIGFjdG9ycyB0aGF0IGFyZSB1bmRlcndhdGVyXG4gKiAzLiBEcmF3IHJlZmxlY3Rpb25zIG9udG8gdGhlIGZsb29yXG4gKiA0LiBEcmF3IHRoZSB3YXRlciwgd2hpY2ggc2hvd3MgZXZlcnl0aGluZyBkcmF3biBzbyBmYXIgdW5kZXJuZWF0aCBpdFxuICogNS4gRHJhdyB0aGUgd2FsbHMgYW5kIGFjdG9ycyB0aGF0IHN0YW5kIG9uIHRoZSBncm91bmQsIHJlZmxlY3Rpb25zIGluIGEgd2FsbFxuICogICAgYXJlIGRyYXduIGFsb25nIHdpdGggdGhhdCB3YWxsXG4gKiA2LiBBcHBseSBsaWdodGluZyB0byB0aGUgd2hvbGUgc2NlbmVcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmxkIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FURVJfWl9JTkRFWCA9IDEwMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfV0FURVJfT1BUSU9OUyA9IHtcbiAgICBtYXhEZXB0aDogMjQsXG4gICAgZm9vdE9mZnNldDogMCxcbiAgICByaXBwbGVzOiB0cnVlLFxuICB9O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBSSVBQTEVfRElTVEFOQ0UgPSAxMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUklQUExFX1JBRElVUyA9IDU7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJJUFBMRV9TVFJFTkdUSCA9IDAuMzU7XG5cbiAgcHVibGljIHJlYWRvbmx5IGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbTtcbiAgcHVibGljIHJlYWRvbmx5IHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtIHwgbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IHdhdGVyOiBXYXRlclN5c3RlbSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBzdWJtZXJzaWJsZUFjdG9yczogU3VibWVyc2libGVBY3RvcltdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBXb3JsZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nID1cbiAgICAgIG9wdGlvbnM/LmxpZ2h0aW5nID8/IG5ldyBMaWdodGluZ1N5c3RlbSh7IGxpZ2h0aW5nRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZWZsZWN0aW9ucyA9IG9wdGlvbnM/LnJlZmxlY3Rpb25zID8/IG51bGw7XG4gICAgdGhpcy53YXRlciA9IG9wdGlvbnM/LndhdGVyID8/IG51bGw7XG5cbiAgICBpZiAodGhpcy53YXRlcikge1xuICAgICAgY29uc3QgZ2xDb250ZXh0ID0gb3B0aW9ucz8uZ2xDb250ZXh0ID8/IG5ldyBHbENvbnRleHQoKTtcblxuICAgICAgdGhpcy5saWdodGluZy51c2VHbENvbnRleHQoZ2xDb250ZXh0KTtcbiAgICAgIHRoaXMud2F0ZXIudXNlR2xDb250ZXh0KGdsQ29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzdXJmYWNlIG9yIGEgZ3JvdXAgb2Ygc3VyZmFjZXMgbG9vayBsaWtlIGEgc2luZ2xlIG9iamVjdCB0byB0aGVcbiAgICogcmVmbGVjdGlvbiBzeXN0ZW0sIHRoZSBib3R0b20gb2YgdGhlIGdyb3VwIHNob3VsZCBiZSB3aGVyZSBpdCBtZWV0cyB0aGVcbiAgICogZ3JvdW5kXG4gICAqXG4gICAqIE92ZXJsYXlzIGFyZW4ndCBpbmNsdWRlZCwgdGhleSBtaWdodCBiZSBzaG93aW5nIHJlZmxlY3Rpb25zIHRoZW1zZWx2ZXNcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlZmxlY3Rpb25PYmplY3QoXG4gICAgLi4uc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdXG4gICk6IFJlZmxlY3Rpb25PYmplY3Qge1xuICAgIGNvbnN0IGJvdW5kcyA9ICgpID0+XG4gICAgICBzdXJmYWNlcy5yZWR1Y2U8UmVjdGFuZ2xlPihib3VuZGluZ1JlY3RhbmdsZSwgc3VyZmFjZXNbMF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcygpLnBvc2l0aW9uO1xuICAgICAgfSxcbiAgICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gYm91bmRzKCkuc2l6ZTtcbiAgICAgIH0sXG4gICAgICBkcmF3OiBjb250ZXh0ID0+IHN1cmZhY2VzLmZvckVhY2gocyA9PiBzLmRyYXdDb250ZW50KGNvbnRleHQpKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGFkZEdyb3VuZChvcHRpb25zOiBXb3JsZEdyb3VuZE9wdGlvbnMpOiBHcm91bmRSZWNlaXZlciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLmdyb3VuZCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzdXJmYWNlID0gdGhpcy5saWdodGluZy5hZGRHcm91bmQoZ3JvdW5kKTtcblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkRmxvb3JSZWZsZWN0aW9uKFxuICAgICAgICBzdXJmYWNlLFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VyZmFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBzb2xpZCB3YWxsXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbChvcHRpb25zOiBXb3JsZFdhbGxPcHRpb25zKTogV2FsbCB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLndhbGxPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHdhbGwgPSB0aGlzLmxpZ2h0aW5nLmFkZFdhbGwod2FsbE9wdGlvbnMpO1xuXG4gICAgaWYgKHJlZmxlY3Rpb25Tb3VyY2UpIHtcbiAgICAgIC8vIEEgbWlycm9yIHdvdWxkIHNob3cgdGhlIGJhY2sgb2YgYSB3YWxsLCB3aGljaCB3ZSBkb24ndCBoYXZlIGEgcGljdHVyZVxuICAgICAgLy8gb2YsIHNvIGJ5IGRlZmF1bHQgd2FsbHMgb25seSBhcHBlYXIgaW4gdGhlIGZsb29yXG4gICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnJlZmxlY3Rpb25zPy5hZGRTb3VyY2Uoe1xuICAgICAgICB3YWxsOiBmYWxzZSxcbiAgICAgICAgLi4uKHJlZmxlY3Rpb25Tb3VyY2UgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25Tb3VyY2UpLFxuICAgICAgICBvYmplY3Q6IFdvcmxkLnJlZmxlY3Rpb25PYmplY3Qod2FsbC5mcm9udCwgd2FsbC50b3ApLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgd2FsbC5mcm9udC5vblJlbW92ZSgoKSA9PiBzb3VyY2UucmVtb3ZlKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkTWlycm9yKFxuICAgICAgICB3YWxsLmZyb250LFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBtb3Zpbmcgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgYWRkQWN0b3Iob3B0aW9uczogV29ybGRBY3Rvck9wdGlvbnMpOiBBY3RvciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCBzdWJtZXJzaWJsZSwgLi4uYWN0b3JPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGFjdG9yID0gdGhpcy5saWdodGluZy5hZGRBY3RvcihcbiAgICAgIGFjdG9yT3B0aW9ucyBhcyBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnNcbiAgICApO1xuXG4gICAgY29uc3Qgc291cmNlID0gcmVmbGVjdGlvblNvdXJjZVxuICAgICAgPyB0aGlzLmFkZEFjdG9yUmVmbGVjdGlvbihcbiAgICAgICAgICBhY3RvcixcbiAgICAgICAgICByZWZsZWN0aW9uU291cmNlID09PSB0cnVlID8ge30gOiByZWZsZWN0aW9uU291cmNlXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgYWN0b3Iuc3VyZmFjZS5vblJlbW92ZSgoKSA9PiBzb3VyY2UucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIGlmIChzdWJtZXJzaWJsZSkge1xuICAgICAgY29uc3QgaXRlbTogU3VibWVyc2libGVBY3RvciA9IHtcbiAgICAgICAgLi4uV29ybGQuREVGQVVMVF9XQVRFUl9PUFRJT05TLFxuICAgICAgICAuLi4oc3VibWVyc2libGUgPT09IHRydWUgPyB7fSA6IHN1Ym1lcnNpYmxlKSxcbiAgICAgICAgYWN0b3IsXG4gICAgICAgIHNvdXJjZTogc291cmNlID8/IG51bGwsXG4gICAgICAgIGxhc3RSaXBwbGU6IG51bGwsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN1Ym1lcnNpYmxlQWN0b3JzLnB1c2goaXRlbSk7XG4gICAgICBhY3Rvci5zdXJmYWNlLm9uUmVtb3ZlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdWJtZXJzaWJsZUFjdG9ycyA9IHRoaXMuc3VibWVyc2libGVBY3RvcnMuZmlsdGVyKFxuICAgICAgICAgIG90aGVyID0+IG90aGVyICE9PSBpdGVtXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0b3I7XG4gIH1cblxuICBwcml2YXRlIGFkZEFjdG9yUmVmbGVjdGlvbihcbiAgICBhY3RvcjogQWN0b3IsXG4gICAgc2V0dGluZ3M6IFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5nc1xuICApOiBSZWZsZWN0aW9uU291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9ucz8uYWRkU291cmNlKHtcbiAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgLi4uKGFjdG9yLnNwcml0ZVxuICAgICAgICA/IHsgc3ByaXRlOiBhY3Rvci5zcHJpdGUgfVxuICAgICAgICA6IHsgb2JqZWN0OiBXb3JsZC5yZWZsZWN0aW9uT2JqZWN0KGFjdG9yLnN1cmZhY2UpIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIHdhdGVyLCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgaWYgdGhpcyB3b3JsZCBkb2Vzbid0IGhhdmUgYVxuICAgKiB3YXRlciBzeXN0ZW1cbiAgICpcbiAgICogV2F0ZXIgaXMgbGl0IGluIHRoZSBzYW1lIHdheSBhcyB0aGUgZ3JvdW5kLCBhbmQgaGFzIGl0cyBvd24gc3VyZmFjZSBmb3JcbiAgICogdGhpcyBzbyB0aGF0IHdhdmVzIGNhbiBjYXRjaCB0aGUgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRXYXRlcihvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpOiBXYXRlclJlZ2lvbiB8IG51bGwge1xuICAgIGNvbnN0IHsgd2F0ZXIgfSA9IHRoaXM7XG4gICAgaWYgKCF3YXRlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnaW9uID0gd2F0ZXIuYWRkUmVnaW9uKG9wdGlvbnMpO1xuICAgIGNvbnN0IHN1cmZhY2UgPSB0aGlzLmxpZ2h0aW5nLmFkZEdyb3VuZCh7XG4gICAgICBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbixcbiAgICAgIHNpemU6IG9wdGlvbnMuc2l6ZSxcbiAgICAgIHpJbmRleDogV29ybGQuV0FURVJfWl9JTkRFWCxcbiAgICAgIGN1c3RvbURyYXc6IHtcbiAgICAgICAgaW1hZ2U6ICgpID0+IHt9LFxuICAgICAgICBub3JtYWxNYXA6IGNvbnRleHQgPT4gd2F0ZXIuZHJhd1JlZ2lvbk5vcm1hbE1hcChjb250ZXh0LCByZWdpb24pLFxuICAgICAgICBzcGVjdWxhck1hcDogY29udGV4dCA9PiB3YXRlci5kcmF3UmVnaW9uU3BlY3VsYXJNYXAoY29udGV4dCwgcmVnaW9uKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZWdpb24ub25SZW1vdmUoKCkgPT4gc3VyZmFjZS5yZW1vdmUoKSk7XG5cbiAgICByZXR1cm4gcmVnaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpZ2h0XG4gICAqL1xuICBwdWJsaWMgYWRkTGlnaHQob3B0aW9uczogTGlnaHRPcHRpb25zKTogTGlnaHQge1xuICAgIHJldHVybiB0aGlzLmxpZ2h0aW5nLmFkZExpZ2h0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgcGFydCBvZiBhbiBhcmVhIG9mIGdyb3VuZCByZWZsZWN0aXZlXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIGNhbGxlZCBzZXZlcmFsIHRpbWVzIGZvciBkaWZmZXJlbnQgcGFydHMgb2YgdGhlIHNhbWUgZ3JvdW5kXG4gICAqL1xuICBwdWJsaWMgYWRkRmxvb3JSZWZsZWN0aW9uKFxuICAgIGdyb3VuZDogR3JvdW5kUmVjZWl2ZXIsXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Rmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zPlxuICApOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlciB8IG51bGwge1xuICAgIGNvbnN0IHJlY2VpdmVyID1cbiAgICAgIHRoaXMucmVmbGVjdGlvbnM/LmFkZEZsb29yUmVjZWl2ZXIoe1xuICAgICAgICBwb3NpdGlvbjogZ3JvdW5kLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiBncm91bmQuc2l6ZSxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH0pID8/IG51bGw7XG5cbiAgICBpZiAocmVjZWl2ZXIpIHtcbiAgICAgIGdyb3VuZC5vblJlbW92ZSgoKSA9PiByZWNlaXZlci5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgcGFydCBvZiBhIHdhbGwgcmVmbGVjdGl2ZVxuICAgKlxuICAgKiBUaGUgcmVmbGVjdGlvbiBpcyBkcmF3biBzdHJhaWdodCBhZnRlciB0aGUgd2FsbCwgc28gaXQncyBjb3ZlcmVkIGJ5XG4gICAqIGFueXRoaW5nIGluIGZyb250IG9mIHRoZSB3YWxsLiBUaGlzIGNhbiBiZSBjYWxsZWQgc2V2ZXJhbCB0aW1lcyBmb3JcbiAgICogZGlmZmVyZW50IHBhcnRzIG9mIHRoZSBzYW1lIHdhbGxcbiAgICovXG4gIHB1YmxpYyBhZGRNaXJyb3IoXG4gICAgd2FsbDogV2FsbFJlY2VpdmVyLFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zPlxuICApOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyIHwgbnVsbCB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPVxuICAgICAgdGhpcy5yZWZsZWN0aW9ucz8uYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgICAgcG9zaXRpb246IHdhbGwucG9zaXRpb24sXG4gICAgICAgIHNpemU6IHdhbGwuc2l6ZSxcbiAgICAgICAgZm9vdDogd2FsbC5wb3NpdGlvbi55ICsgd2FsbC5zaXplLnksXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9KSA/PyBudWxsO1xuXG4gICAgaWYgKHJlY2VpdmVyKSB7XG4gICAgICByZWNlaXZlci5vblJlbW92ZSh3YWxsLmFkZE92ZXJsYXkoY29udGV4dCA9PiByZWNlaXZlci5kcmF3KGNvbnRleHQpKSk7XG4gICAgICB3YWxsLm9uUmVtb3ZlKCgpID0+IHJlY2VpdmVyLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjZWl2ZXI7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgd29ybGQgZm9yd2FyZCwgdGhpcyBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLndhdGVyPy51cGRhdGUoZHQpO1xuICAgIHRoaXMudXBkYXRlUmlwcGxlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgd2hlcmUgYSBzdWJtZXJzaWJsZSBhY3RvcidzIGZlZXQgYXJlXG4gICAqL1xuICBwcml2YXRlIGZvb3RQb3NpdGlvbih7IGFjdG9yLCBmb290T2Zmc2V0IH06IFN1Ym1lcnNpYmxlQWN0b3IpOiB2ZWMyIHtcbiAgICBhY3Rvci5zeW5jKCk7XG5cbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSBhY3Rvci5zdXJmYWNlO1xuXG4gICAgcmV0dXJuIHZlYzIoXG4gICAgICBwb3NpdGlvbi54ICsgc2l6ZS54IC8gMixcbiAgICAgIHBvc2l0aW9uLnkgKyBzaXplLnkgLSBmb290T2Zmc2V0XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RvcnMgbWFrZSByaXBwbGVzIGFzIHRoZXkgbW92ZSB0aHJvdWdoIHRoZSB3YXRlclxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVSaXBwbGVzKCkge1xuICAgIGNvbnN0IHsgd2F0ZXIgfSA9IHRoaXM7XG4gICAgaWYgKCF3YXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnN1Ym1lcnNpYmxlQWN0b3JzKSB7XG4gICAgICBpZiAoIWl0ZW0ucmlwcGxlcykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9vdCA9IHRoaXMuZm9vdFBvc2l0aW9uKGl0ZW0pO1xuICAgICAgY29uc3QgbW92ZWQgPVxuICAgICAgICBpdGVtLmxhc3RSaXBwbGUgPT09IG51bGwgfHxcbiAgICAgICAgdmVjMi5sZW4odmVjMi5zdWIoZm9vdCwgaXRlbS5sYXN0UmlwcGxlKSkgPj0gV29ybGQuUklQUExFX0RJU1RBTkNFO1xuXG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgaXRlbS5sYXN0UmlwcGxlID0gZm9vdDtcbiAgICAgICAgd2F0ZXIuZGlzdHVyYihmb290LCB7XG4gICAgICAgICAgcmFkaXVzOiBXb3JsZC5SSVBQTEVfUkFESVVTLFxuICAgICAgICAgIHN0cmVuZ3RoOiBXb3JsZC5SSVBQTEVfU1RSRU5HVEgsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIG91dCBob3cgZmFyIGVhY2ggc3VibWVyc2libGUgYWN0b3IgaXMgdW5kZXJ3YXRlciwgdGhpcyBuZWVkcyB0byBiZVxuICAgKiBkb25lIGJlZm9yZSBhbnl0aGluZyBpcyBkcmF3biBiZWNhdXNlIGl0IHNwbGl0cyB0aGUgYWN0b3IgaW50byAyIHBhcnRzXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVdhdGVybGluZXMoKSB7XG4gICAgY29uc3QgeyB3YXRlciB9ID0gdGhpcztcbiAgICBpZiAoIXdhdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuc3VibWVyc2libGVBY3RvcnMpIHtcbiAgICAgIGNvbnN0IGZvb3QgPSB0aGlzLmZvb3RQb3NpdGlvbihpdGVtKTtcbiAgICAgIGNvbnN0IGRlcHRoID0gd2F0ZXIuc2FtcGxlKGZvb3QpPy5kZXB0aCA/PyAwO1xuICAgICAgY29uc3Qgd2F0ZXJsaW5lID0gZGVwdGggPiAwID8gZm9vdC55IC0gZGVwdGggKiBpdGVtLm1heERlcHRoIDogbnVsbDtcblxuICAgICAgaXRlbS5hY3Rvci5zdXJmYWNlLmNsaXBCb3R0b20gPSB3YXRlcmxpbmU7XG4gICAgICBpZiAoaXRlbS5zb3VyY2UpIHtcbiAgICAgICAgaXRlbS5zb3VyY2Uud2F0ZXJsaW5lID0gd2F0ZXJsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNjZW5lIG9udG8gYSBjb250ZXh0XG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FtZXJhOiBTY2VuZUNhbWVyYSkge1xuICAgIGNvbnN0IGZyYW1lOiBGcmFtZSA9IHtcbiAgICAgIGNvbnRleHQsXG4gICAgICBjYW1lcmEsXG4gICAgICBzY3JlZW46IHZlYzIoY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCksXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlV2F0ZXJsaW5lcygpO1xuICAgIHRoaXMucmVmbGVjdGlvbnM/LnByZXBhcmUoZnJhbWUpO1xuXG4gICAgdGhpcy5kcmF3TGF5ZXIoZnJhbWUsICgpID0+IHtcbiAgICAgIHRoaXMubGlnaHRpbmcuZHJhd0dyb3VuZChjb250ZXh0KTtcbiAgICAgIHRoaXMuZHJhd1N1Ym1lcmdlZEFjdG9ycyhjb250ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZmxlY3Rpb25zPy5kcmF3Rmxvb3IoKTtcbiAgICB0aGlzLmRyYXdXYXRlcihmcmFtZSk7XG4gICAgdGhpcy5kcmF3TGF5ZXIoZnJhbWUsICgpID0+IHRoaXMubGlnaHRpbmcuZHJhd1dhbGxzKGNvbnRleHQpKTtcbiAgICB0aGlzLmFwcGx5TGlnaHRpbmcoZnJhbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHBhcnRzIG9mIGFjdG9ycyB0aGF0IGFyZSB1bmRlcndhdGVyLCB0aGUgbG93ZXN0IHRoaW5ncyBvbiB0aGVcbiAgICogc2NyZWVuIGFyZSBkcmF3biBsYXN0XG4gICAqL1xuICBwcml2YXRlIGRyYXdTdWJtZXJnZWRBY3RvcnMoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgYm90dG9tID0gKHsgYWN0b3I6IHsgc3VyZmFjZSB9IH06IFN1Ym1lcnNpYmxlQWN0b3IpID0+XG4gICAgICBzdXJmYWNlLnBvc2l0aW9uLnkgKyBzdXJmYWNlLnNpemUueTtcblxuICAgIFsuLi50aGlzLnN1Ym1lcnNpYmxlQWN0b3JzXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJvdHRvbShhKSAtIGJvdHRvbShiKSlcbiAgICAgIC5mb3JFYWNoKCh7IGFjdG9yIH0pID0+IGFjdG9yLnN1cmZhY2UuZHJhd0hpZGRlbihjb250ZXh0KSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdXYXRlcihmcmFtZTogRnJhbWUpIHtcbiAgICBpZiAoIXRoaXMud2F0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmcmFtZS5yZWZsZWN0aW9uTWFwID0gdGhpcy5yZWZsZWN0aW9ucz8uZHJhd0Zsb29yU291cmNlcygpID8/IG51bGw7XG4gICAgdGhpcy53YXRlci5kcmF3KGZyYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHBhcnQgb2YgdGhlIHNjZW5lIHdpdGggdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3TGF5ZXIoeyBjb250ZXh0LCBjYW1lcmEgfTogRnJhbWUsIGRyYXc6ICgpID0+IHZvaWQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyhjb250ZXh0KTtcbiAgICBkcmF3KCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5TGlnaHRpbmcoZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc3QgeyBjb250ZXh0LCBjYW1lcmEsIHNjcmVlbiB9ID0gZnJhbWU7XG5cbiAgICBpZiAodGhpcy5saWdodGluZy5vcHRpb25zLmxpZ2h0aW5nRW5hYmxlZCkge1xuICAgICAgdGhpcy53YXRlcj8uZHJhd0xpZ2h0aW5nTWFwcyhmcmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5saWdodGluZy5wcmVwYXJlKGNhbWVyYSwgc2NyZWVuKTtcbiAgICB0aGlzLmxpZ2h0aW5nLmRyYXcoY29udGV4dCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IFdvcmxkIH0gZnJvbSAnLi9Xb3JsZCc7XG5leHBvcnQgdHlwZSB7XG4gIFdvcmxkQWN0b3JPcHRpb25zLFxuICBXb3JsZEFjdG9yV2F0ZXJPcHRpb25zLFxuICBXb3JsZEdyb3VuZE9wdGlvbnMsXG4gIFdvcmxkT3B0aW9ucyxcbiAgV29ybGRXYWxsT3B0aW9ucyxcbn0gZnJvbSAnLi9Xb3JsZCc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=