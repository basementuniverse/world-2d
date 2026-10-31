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
    bindTexture(unit, texture, filter) {
        const gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    upload(unit, texture, image, filter) {
        const gl = this.gl;
        this.bindTexture(unit, texture, filter);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }
    bindImage(image, filter) {
        const gl = this.gl;
        let texture = this.imageTextures.get(image);
        const isNew = texture === undefined;
        if (!texture) {
            texture = gl.createTexture();
            this.imageTextures.set(image, texture);
        }
        this.bindTexture(GlContext.IMAGE_UNIT, texture, filter);
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
        if (context.canvas.width !== size) {
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
            if (mask === null) {
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
            const topLeft = scene.camera.worldToScreen(surface.position);
            const bottomRight = scene.camera.worldToScreen(vec_1.vec2.add(surface.position, surface.size));
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
    drawContent(context) {
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
        if (this.customDraw.normalMap) {
            this.customDraw.normalMap(context);
            return;
        }
        this.drawColourMap(context, this.normalMap, Surface.NORMAL_MAP_DEFAULT_COLOUR);
    }
    drawSpecularMap(context) {
        if (this.customDraw.specularMap) {
            this.customDraw.specularMap(context);
            return;
        }
        this.drawColourMap(context, this.specularMap, Surface.SPECULAR_MAP_DEFAULT_COLOUR);
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
    get floorBounds() {
        const { position, size } = this.bounds;
        return {
            position: (0, vec_1.vec2)(position.x, this.foot * 2 - (position.y + size.y)),
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
        context.translate(0, this.foot * 2);
        context.scale(1, -1);
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
        const sources = this.sortedSources(this.sources.filter(source => source.floor && (0, core_1.rectanglesIntersect)(source.floorBounds, visible)));
        this.resetContext(this.floorSourcesContext, frame);
        sources.forEach(source => source.drawInFloor(this.floorSourcesContext));
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
        var _a, _b;
        this.lighting =
            (_a = options === null || options === void 0 ? void 0 : options.lighting) !== null && _a !== void 0 ? _a : new lighting_1.LightingSystem({ lightingEnabled: false });
        this.reflections = (_b = options === null || options === void 0 ? void 0 : options.reflections) !== null && _b !== void 0 ? _b : null;
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
        const { reflectionSource, ...actorOptions } = options;
        const actor = this.lighting.addActor(actorOptions);
        if (reflectionSource) {
            const source = this.addActorReflection(actor, reflectionSource === true ? {} : reflectionSource);
            if (source) {
                actor.surface.onRemove(() => source.remove());
            }
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
    render(context, camera) {
        var _a, _b;
        const frame = {
            context,
            camera,
            screen: (0, vec_1.vec2)(context.canvas.width, context.canvas.height),
        };
        (_a = this.reflections) === null || _a === void 0 ? void 0 : _a.prepare(frame);
        this.drawLayer(frame, () => this.lighting.drawGround(context));
        (_b = this.reflections) === null || _b === void 0 ? void 0 : _b.drawFloor();
        this.drawLayer(frame, () => this.lighting.drawWalls(context));
        this.applyLighting(frame);
    }
    drawLayer({ context, camera }, draw) {
        context.save();
        camera.setTransforms(context);
        draw();
        context.restore();
    }
    applyLighting({ context, camera, screen }) {
        this.lighting.prepare(camera, screen);
        this.lighting.draw(context);
    }
}
exports.World = World;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFLTyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFTLEVBQUUsSUFBZ0I7UUFDNUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLEVBQUUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sYUFBYSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQVM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRjtBQTlNRCxzQkE4TUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pTRCx5RUFBZ0M7QUFBdkIsb0dBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3IvcGFyc2Vjb2xvci5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2NvcmUvR2xDb250ZXh0LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvY29yZS91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvQWN0b3IudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvQ2FzdGVyLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0xpZ2h0LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0xpZ2h0aW5nU3lzdGVtLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL1NjZW5lT2JqZWN0LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL1NoYWRlclBhc3MudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvU3VyZmFjZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9XYWxsLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL2luZGV4LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL21lcmdlLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL3R5cGVzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL3V0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9yZWZsZWN0aW9ucy9SZWZsZWN0aW9uUmVjZWl2ZXIudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvcmVmbGVjdGlvbnMvUmVmbGVjdGlvblNvdXJjZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9yZWZsZWN0aW9ucy9SZWZsZWN0aW9uU3lzdGVtLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL3JlZmxlY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL3dvcmxkL1dvcmxkLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL3dvcmxkL2luZGV4LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpZ2h0aW5nLTJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2xpZ2h0aW5nLTJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMaWdodGluZzJEXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxpZ2h0aW5nMkRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLypcclxuXHJcblBhcnNlIGEgdmFsaWQgQ1NTIGNvbG9yIHN0cmluZyBpbnRvIGFuIG9iamVjdCBsaWtlOiB7IHIsIGcsIGIsIGEgfVxyXG5Qcm9wZXJ0aWVzIHdpbGwgaGF2ZSB0aGUgY29ycmVjdCBpbnRlcnZhbCBhbmQgcHJlY2lzaW9uLlxyXG5WYWxpZCBpbnB1dCBleGFtcGxlczpcclxuXHJcbnJlZFxyXG4jZjAwXHJcbiNmZjAwMDBcclxuI2ZmMDAwMGZmXHJcbnJnYigyNTUsIDAsIDApXHJcbnJnYigxMDAlLCAwJSwgMCUpXHJcbnJnYmEoMjU1LCAwLCAwLCAxKVxyXG5yZ2JhKDEwMCUsIDAlLCAwJSwgMSlcclxuaHNsKDAsIDEwMCUsIDUwJSlcclxuaHNsYSgwLCAxMDAlLCA1MCUsIDEpXHJcblxyXG4qL1xyXG5jb25zdCBwYXJzZUNvbG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IG5hbWVzID0ge1xyXG5cdFx0XCJhbGljZWJsdWVcIjogXCJmMGY4ZmZcIixcclxuXHRcdFwiYW50aXF1ZXdoaXRlXCI6IFwiZmFlYmQ3XCIsXHJcblx0XHRcImFxdWFcIjogXCIwZmZcIixcclxuXHRcdFwiYXF1YW1hcmluZVwiOiBcIjdmZmZkNFwiLFxyXG5cdFx0XCJhenVyZVwiOiBcImYwZmZmZlwiLFxyXG5cdFx0XCJiZWlnZVwiOiBcImY1ZjVkY1wiLFxyXG5cdFx0XCJiaXNxdWVcIjogXCJmZmU0YzRcIixcclxuXHRcdFwiYmxhY2tcIjogXCIwMDBcIixcclxuXHRcdFwiYmxhbmNoZWRhbG1vbmRcIjogXCJmZmViY2RcIixcclxuXHRcdFwiYmx1ZVwiOiBcIjAwZlwiLFxyXG5cdFx0XCJibHVldmlvbGV0XCI6IFwiOGEyYmUyXCIsXHJcblx0XHRcImJyb3duXCI6IFwiYTUyYTJhXCIsXHJcblx0XHRcImJ1cmx5d29vZFwiOiBcImRlYjg4N1wiLFxyXG5cdFx0XCJjYWRldGJsdWVcIjogXCI1ZjllYTBcIixcclxuXHRcdFwiY2hhcnRyZXVzZVwiOiBcIjdmZmYwMFwiLFxyXG5cdFx0XCJjaG9jb2xhdGVcIjogXCJkMjY5MWVcIixcclxuXHRcdFwiY29yYWxcIjogXCJmZjdmNTBcIixcclxuXHRcdFwiY29ybmZsb3dlcmJsdWVcIjogXCI2NDk1ZWRcIixcclxuXHRcdFwiY29ybnNpbGtcIjogXCJmZmY4ZGNcIixcclxuXHRcdFwiY3JpbXNvblwiOiBcImRjMTQzY1wiLFxyXG5cdFx0XCJjeWFuXCI6IFwiMGZmXCIsXHJcblx0XHRcImRhcmtibHVlXCI6IFwiMDAwMDhiXCIsXHJcblx0XHRcImRhcmtjeWFuXCI6IFwiMDA4YjhiXCIsXHJcblx0XHRcImRhcmtnb2xkZW5yb2RcIjogXCJiODg2MGJcIixcclxuXHRcdFwiZGFya2dyYXlcIjogXCJhOWE5YTlcIixcclxuXHRcdFwiZGFya2dyZWVuXCI6IFwiMDA2NDAwXCIsXHJcblx0XHRcImRhcmtncmV5XCI6IFwiYTlhOWE5XCIsXHJcblx0XHRcImRhcmtraGFraVwiOiBcImJkYjc2YlwiLFxyXG5cdFx0XCJkYXJrbWFnZW50YVwiOiBcIjhiMDA4YlwiLFxyXG5cdFx0XCJkYXJrb2xpdmVncmVlblwiOiBcIjU1NmIyZlwiLFxyXG5cdFx0XCJkYXJrb3JhbmdlXCI6IFwiZmY4YzAwXCIsXHJcblx0XHRcImRhcmtvcmNoaWRcIjogXCI5OTMyY2NcIixcclxuXHRcdFwiZGFya3JlZFwiOiBcIjhiMDAwMFwiLFxyXG5cdFx0XCJkYXJrc2FsbW9uXCI6IFwiZTk5NjdhXCIsXHJcblx0XHRcImRhcmtzZWFncmVlblwiOiBcIjhmYmM4ZlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVibHVlXCI6IFwiNDgzZDhiXCIsXHJcblx0XHRcImRhcmtzbGF0ZWdyYXlcIjogXCIyZjRmNGZcIixcclxuXHRcdFwiZGFya3NsYXRlZ3JleVwiOiBcIjJmNGY0ZlwiLFxyXG5cdFx0XCJkYXJrdHVycXVvaXNlXCI6IFwiMDBjZWQxXCIsXHJcblx0XHRcImRhcmt2aW9sZXRcIjogXCI5NDAwZDNcIixcclxuXHRcdFwiZGVlcHBpbmtcIjogXCJmZjE0OTNcIixcclxuXHRcdFwiZGVlcHNreWJsdWVcIjogXCIwMGJmZmZcIixcclxuXHRcdFwiZGltZ3JheVwiOiBcIjY5Njk2OVwiLFxyXG5cdFx0XCJkaW1ncmV5XCI6IFwiNjk2OTY5XCIsXHJcblx0XHRcImRvZGdlcmJsdWVcIjogXCIxZTkwZmZcIixcclxuXHRcdFwiZmlyZWJyaWNrXCI6IFwiYjIyMjIyXCIsXHJcblx0XHRcImZsb3JhbHdoaXRlXCI6IFwiZmZmYWYwXCIsXHJcblx0XHRcImZvcmVzdGdyZWVuXCI6IFwiMjI4YjIyXCIsXHJcblx0XHRcImZ1Y2hzaWFcIjogXCJmMGZcIixcclxuXHRcdFwiZ2FpbnNib3JvXCI6IFwiZGNkY2RjXCIsXHJcblx0XHRcImdob3N0d2hpdGVcIjogXCJmOGY4ZmZcIixcclxuXHRcdFwiZ29sZFwiOiBcImZmZDcwMFwiLFxyXG5cdFx0XCJnb2xkZW5yb2RcIjogXCJkYWE1MjBcIixcclxuXHRcdFwiZ3JheVwiOiBcIjgwODA4MFwiLFxyXG5cdFx0XCJncmVlblwiOiBcIjAwODAwMFwiLFxyXG5cdFx0XCJncmVlbnllbGxvd1wiOiBcImFkZmYyZlwiLFxyXG5cdFx0XCJncmV5XCI6IFwiODA4MDgwXCIsXHJcblx0XHRcImhvbmV5ZGV3XCI6IFwiZjBmZmYwXCIsXHJcblx0XHRcImhvdHBpbmtcIjogXCJmZjY5YjRcIixcclxuXHRcdFwiaW5kaWFucmVkXCI6IFwiY2Q1YzVjXCIsXHJcblx0XHRcImluZGlnb1wiOiBcIjRiMDA4MlwiLFxyXG5cdFx0XCJpdm9yeVwiOiBcImZmZmZmMFwiLFxyXG5cdFx0XCJraGFraVwiOiBcImYwZTY4Y1wiLFxyXG5cdFx0XCJsYXZlbmRlclwiOiBcImU2ZTZmYVwiLFxyXG5cdFx0XCJsYXZlbmRlcmJsdXNoXCI6IFwiZmZmMGY1XCIsXHJcblx0XHRcImxhd25ncmVlblwiOiBcIjdjZmMwMFwiLFxyXG5cdFx0XCJsZW1vbmNoaWZmb25cIjogXCJmZmZhY2RcIixcclxuXHRcdFwibGlnaHRibHVlXCI6IFwiYWRkOGU2XCIsXHJcblx0XHRcImxpZ2h0Y29yYWxcIjogXCJmMDgwODBcIixcclxuXHRcdFwibGlnaHRjeWFuXCI6IFwiZTBmZmZmXCIsXHJcblx0XHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFwiZmFmYWQyXCIsXHJcblx0XHRcImxpZ2h0Z3JheVwiOiBcImQzZDNkM1wiLFxyXG5cdFx0XCJsaWdodGdyZWVuXCI6IFwiOTBlZTkwXCIsXHJcblx0XHRcImxpZ2h0Z3JleVwiOiBcImQzZDNkM1wiLFxyXG5cdFx0XCJsaWdodHBpbmtcIjogXCJmZmI2YzFcIixcclxuXHRcdFwibGlnaHRzYWxtb25cIjogXCJmZmEwN2FcIixcclxuXHRcdFwibGlnaHRzZWFncmVlblwiOiBcIjIwYjJhYVwiLFxyXG5cdFx0XCJsaWdodHNreWJsdWVcIjogXCI4N2NlZmFcIixcclxuXHRcdFwibGlnaHRzbGF0ZWdyYXlcIjogXCI3ODlcIixcclxuXHRcdFwibGlnaHRzbGF0ZWdyZXlcIjogXCI3ODlcIixcclxuXHRcdFwibGlnaHRzdGVlbGJsdWVcIjogXCJiMGM0ZGVcIixcclxuXHRcdFwibGlnaHR5ZWxsb3dcIjogXCJmZmZmZTBcIixcclxuXHRcdFwibGltZVwiOiBcIjBmMFwiLFxyXG5cdFx0XCJsaW1lZ3JlZW5cIjogXCIzMmNkMzJcIixcclxuXHRcdFwibGluZW5cIjogXCJmYWYwZTZcIixcclxuXHRcdFwibWFnZW50YVwiOiBcImYwZlwiLFxyXG5cdFx0XCJtYXJvb25cIjogXCI4MDAwMDBcIixcclxuXHRcdFwibWVkaXVtYXF1YW1hcmluZVwiOiBcIjY2Y2RhYVwiLFxyXG5cdFx0XCJtZWRpdW1ibHVlXCI6IFwiMDAwMGNkXCIsXHJcblx0XHRcIm1lZGl1bW9yY2hpZFwiOiBcImJhNTVkM1wiLFxyXG5cdFx0XCJtZWRpdW1wdXJwbGVcIjogXCI5MzcwZGJcIixcclxuXHRcdFwibWVkaXVtc2VhZ3JlZW5cIjogXCIzY2IzNzFcIixcclxuXHRcdFwibWVkaXVtc2xhdGVibHVlXCI6IFwiN2I2OGVlXCIsXHJcblx0XHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFwiMDBmYTlhXCIsXHJcblx0XHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBcIjQ4ZDFjY1wiLFxyXG5cdFx0XCJtZWRpdW12aW9sZXRyZWRcIjogXCJjNzE1ODVcIixcclxuXHRcdFwibWlkbmlnaHRibHVlXCI6IFwiMTkxOTcwXCIsXHJcblx0XHRcIm1pbnRjcmVhbVwiOiBcImY1ZmZmYVwiLFxyXG5cdFx0XCJtaXN0eXJvc2VcIjogXCJmZmU0ZTFcIixcclxuXHRcdFwibW9jY2FzaW5cIjogXCJmZmU0YjVcIixcclxuXHRcdFwibmF2YWpvd2hpdGVcIjogXCJmZmRlYWRcIixcclxuXHRcdFwibmF2eVwiOiBcIjAwMDA4MFwiLFxyXG5cdFx0XCJvbGRsYWNlXCI6IFwiZmRmNWU2XCIsXHJcblx0XHRcIm9saXZlXCI6IFwiODA4MDAwXCIsXHJcblx0XHRcIm9saXZlZHJhYlwiOiBcIjZiOGUyM1wiLFxyXG5cdFx0XCJvcmFuZ2VcIjogXCJmZmE1MDBcIixcclxuXHRcdFwib3JhbmdlcmVkXCI6IFwiZmY0NTAwXCIsXHJcblx0XHRcIm9yY2hpZFwiOiBcImRhNzBkNlwiLFxyXG5cdFx0XCJwYWxlZ29sZGVucm9kXCI6IFwiZWVlOGFhXCIsXHJcblx0XHRcInBhbGVncmVlblwiOiBcIjk4ZmI5OFwiLFxyXG5cdFx0XCJwYWxldHVycXVvaXNlXCI6IFwiYWZlZWVlXCIsXHJcblx0XHRcInBhbGV2aW9sZXRyZWRcIjogXCJkYjcwOTNcIixcclxuXHRcdFwicGFwYXlhd2hpcFwiOiBcImZmZWZkNVwiLFxyXG5cdFx0XCJwZWFjaHB1ZmZcIjogXCJmZmRhYjlcIixcclxuXHRcdFwicGVydVwiOiBcImNkODUzZlwiLFxyXG5cdFx0XCJwaW5rXCI6IFwiZmZjMGNiXCIsXHJcblx0XHRcInBsdW1cIjogXCJkZGEwZGRcIixcclxuXHRcdFwicG93ZGVyYmx1ZVwiOiBcImIwZTBlNlwiLFxyXG5cdFx0XCJwdXJwbGVcIjogXCI4MDAwODBcIixcclxuXHRcdFwicmViZWNjYXB1cnBsZVwiOiBcIjYzOVwiLFxyXG5cdFx0XCJyZWRcIjogXCJmMDBcIixcclxuXHRcdFwicm9zeWJyb3duXCI6IFwiYmM4ZjhmXCIsXHJcblx0XHRcInJveWFsYmx1ZVwiOiBcIjQxNjllMVwiLFxyXG5cdFx0XCJzYWRkbGVicm93blwiOiBcIjhiNDUxM1wiLFxyXG5cdFx0XCJzYWxtb25cIjogXCJmYTgwNzJcIixcclxuXHRcdFwic2FuZHlicm93blwiOiBcImY0YTQ2MFwiLFxyXG5cdFx0XCJzZWFncmVlblwiOiBcIjJlOGI1N1wiLFxyXG5cdFx0XCJzZWFzaGVsbFwiOiBcImZmZjVlZVwiLFxyXG5cdFx0XCJzaWVubmFcIjogXCJhMDUyMmRcIixcclxuXHRcdFwic2lsdmVyXCI6IFwiYzBjMGMwXCIsXHJcblx0XHRcInNreWJsdWVcIjogXCI4N2NlZWJcIixcclxuXHRcdFwic2xhdGVibHVlXCI6IFwiNmE1YWNkXCIsXHJcblx0XHRcInNsYXRlZ3JheVwiOiBcIjcwODA5MFwiLFxyXG5cdFx0XCJzbGF0ZWdyZXlcIjogXCI3MDgwOTBcIixcclxuXHRcdFwic25vd1wiOiBcImZmZmFmYVwiLFxyXG5cdFx0XCJzcHJpbmdncmVlblwiOiBcIjAwZmY3ZlwiLFxyXG5cdFx0XCJzdGVlbGJsdWVcIjogXCI0NjgyYjRcIixcclxuXHRcdFwidGFuXCI6IFwiZDJiNDhjXCIsXHJcblx0XHRcInRlYWxcIjogXCIwMDgwODBcIixcclxuXHRcdFwidGhpc3RsZVwiOiBcImQ4YmZkOFwiLFxyXG5cdFx0XCJ0b21hdG9cIjogXCJmZjYzNDdcIixcclxuXHRcdFwidHVycXVvaXNlXCI6IFwiNDBlMGQwXCIsXHJcblx0XHRcInZpb2xldFwiOiBcImVlODJlZVwiLFxyXG5cdFx0XCJ3aGVhdFwiOiBcImY1ZGViM1wiLFxyXG5cdFx0XCJ3aGl0ZVwiOiBcImZmZlwiLFxyXG5cdFx0XCJ3aGl0ZXNtb2tlXCI6IFwiZjVmNWY1XCIsXHJcblx0XHRcInllbGxvd1wiOiBcImZmMFwiLFxyXG5cdFx0XCJ5ZWxsb3dncmVlblwiOiBcIjlhY2QzMlwiLFxyXG5cdFx0XCJ0cmFuc3BhcmVudFwiOiBcIjAwMDAwMDAwXCJcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGNsYW1wID0gKG4sIGEsIGIpID0+IG4gPCBhID8gYSA6IChuID4gYiA/IGIgOiBuKSxcdC8vIENsYW1wIG4gaW4gaW50ZXJ2YWwgW2EsIGJdXHJcblx0XHRyb3VuZCA9IChuLCBkKSA9PiB7XHQvLyBSb3VuZCBuIHRvIG5lYXJlc3QgaW50ZWdlciwgb3IgdG8gZCBkZWNpbWFsIHBsYWNlcyAoaWYgZCBpcyBkZWZpbmVkKVxyXG5cdFx0XHR2YXIgcCA9IE1hdGgucG93KDEwLCBkIHx8IDApO1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChuICogcCkgLyBwO1xyXG5cdFx0fSxcclxuXHRcdGhpID0gbiA9PiBjbGFtcChwYXJzZUludChuLCAxNiksIDAsIDI1NSksXHQvLyBDb252ZXJ0IDItZGlnaXQgaGV4IHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0aGYgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSwgMiksIDAsIDEpLFx0Ly8gQ29udmVydCAyLWRpZ2l0IGhleCB0byBmbG9hdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXMgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRzaSA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSksIDAsIDI1NSksXHQvLyBDb252ZXJ0IHN0cmluZyB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdHNmID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pLCAyKSwgMCwgMSksXHQvLyBDb252ZXJ0IHN0cmluZyB0byBmbG9hdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXMgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRwaSA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSAvIDEwMCAqIDI1NSksIDAsIDI1NSksXHQvLyBDb252ZXJ0IHBlcmNlbnRhZ2Ugc3RyaW5nIHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0dWYgPSBuID0+IGNsYW1wKHBhcnNlRmxvYXQobikgLyAzNjAsIDAsIDEpLFx0Ly8gQ29udmVydCBodWUgc3RyaW5nIHRvIGZsb2F0IGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0cGYgPSBuID0+IGNsYW1wKHBhcnNlRmxvYXQobikgLyAxMDAsIDAsIDEpO1x0Ly8gQ29udmVydCBwZXJjZW50YWdlIHN0cmluZyB0byBmbG9hdCBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcclxuXHQvLyBDb252ZXJ0IGhzbCB0byByZ2IsIGFscGhhIHZhbHVlIGdldHMgcGFzc2VkIHN0cmFpZ2h0IHRocm91Z2hcclxuXHQvLyBoLCBzLCBsIHZhbHVlcyBhcmUgYXNzdW1lZCB0byBiZSBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHQvLyBSZXR1cm5zIGFuIG9iamVjdCBsaWtlIHsgciwgZywgYiwgYSB9XHJcblx0Ly8gaHR0cDovL2F4b25mbHV4LmNvbS9oYW5keS1yZ2ItdG8taHNsLWFuZC1yZ2ItdG8taHN2LWNvbG9yLW1vZGVsLWNcclxuXHRmdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsLCBhKSB7XHJcblx0XHR2YXIgciwgZywgYixcclxuXHRcdFx0aHVlID0gZnVuY3Rpb24ocCwgcSwgdCkge1xyXG5cdFx0XHRcdGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cclxuXHRcdFx0XHRpZiAodCA+IDEpIHsgdCAtPSAxOyB9XHJcblx0XHRcdFx0aWYgKHQgPCAxIC8gNikgeyByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdCB9O1xyXG5cdFx0XHRcdGlmICh0IDwgMSAvIDIpIHsgcmV0dXJuIHE7IH1cclxuXHRcdFx0XHRpZiAodCA8IDIgLyAzKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNiB9O1xyXG5cdFx0XHRcdHJldHVybiBwO1xyXG5cdFx0XHR9O1xyXG5cdFx0aWYgKHMgPT0gMCkge1xyXG5cdFx0XHRyID0gZyA9IGIgPSBsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzLFxyXG5cdFx0XHRcdHAgPSAyICogbCAtIHE7XHJcblx0XHRcdHIgPSBodWUocCwgcSwgaCArIDEgLyAzKTtcclxuXHRcdFx0ZyA9IGh1ZShwLCBxLCBoKTtcclxuXHRcdFx0YiA9IGh1ZShwLCBxLCBoIC0gMSAvIDMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHsgcjogcm91bmQociAqIDI1NSksIGc6IHJvdW5kKGcgKiAyNTUpLCBiOiByb3VuZChiICogMjU1KSwgYTogYSB9O1xyXG5cdH1cclxuXHRyZXR1cm4gZnVuY3Rpb24oYykge1xyXG5cdFx0dmFyIG8gPSB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbSA9IG51bGw7XHJcblx0XHRpZiAodHlwZW9mIGMgPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRpZiAoYyBpbiBuYW1lcykgeyBjID0gXCIjXCIgKyBuYW1lc1tjXTsgfVxyXG5cdFx0XHRpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldKShbYS1mMC05XSkoW2EtZjAtOV0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdICsgbVsxXSksIGc6IGhpKG1bMl0gKyBtWzJdKSwgYjogaGkobVszXSArIG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdKSwgZzogaGkobVsyXSksIGI6IGhpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSksIGc6IGhpKG1bMl0pLCBiOiBoaShtWzNdKSwgYTogaGYobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2kobVsxXSksIGc6IHNpKG1bMl0pLCBiOiBzaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBwaShtWzFdKSwgZzogcGkobVsyXSksIGI6IHBpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2kobVsxXSksIGc6IHNpKG1bMl0pLCBiOiBzaShtWzNdKSwgYTogc2YobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYmFcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBwaShtWzFdKSwgZzogcGkobVsyXSksIGI6IHBpKG1bM10pLCBhOiBzZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvaHNsXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/KVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihtWzFdKSwgcGYobVsyXSksIHBmKG1bM10pLCAxKTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL2hzbGFcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8pXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihtWzFdKSwgcGYobVsyXSksIHBmKG1bM10pLCBzZihtWzRdKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGMgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRpZiAoYy5yICE9PSB1bmRlZmluZWQgJiYgYy5nICE9IHVuZGVmaW5lZCAmJiBjLmIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKGMuciksIGc6IHNpKGMuZyksIGI6IHNpKGMuYiksIGE6IHNmKGMuYSB8fCAxKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGMuaCAhPT0gdW5kZWZpbmVkICYmIGMucyAhPT0gdW5kZWZpbmVkICYmIGMubCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKGMuaCksIHBmKGMucyksIHBmKGMubCksIHNmKGMuYSB8fCAxKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvO1xyXG5cdH07XHJcbn0oKSk7XHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHsgcGFyc2VDb2xvciB9O1xyXG59XHJcbiIsIi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogTWVtb2l6ZSBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIFRoZSBmdW5jdGlvbiB0byBtZW1vaXplXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbWVtb2l6ZWQgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb25cbiAqL1xuY29uc3QgbWVtb2l6ZSA9IGYgPT4ge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gY2FjaGVbYXJnc10gPz8gKGNhY2hlW2FyZ3NdID0gZi5hcHBseSh0aGlzLCBhcmdzKSk7XG4gIH07XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBSb3VuZCBuIHRvIGQgZGVjaW1hbCBwbGFjZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gcm91bmRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZD0wXSBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHJvdW5kIHRvXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcm91bmRlZCBudW1iZXJcbiAqL1xuY29uc3Qgcm91bmQgPSAobiwgZCA9IDApID0+IHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBkKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAqIHAgKyBOdW1iZXIuRVBTSUxPTikgLyBwO1xufVxuXG4vKipcbiAqIERvIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IGxlcnAgPSAoYSwgYiwgaSkgPT4gYSArIChiIC0gYSkgKiBpO1xuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmNvbnN0IHVubGVycCA9IChhLCBiLCBpKSA9PiAoaSAtIGEpIC8gKGIgLSBhKTtcblxuLyoqXG4gKiBEbyBhIGJpbGluZWFyIGludGVycG9sYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzAxIEJvdHRvbS1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxuICogQHBhcmFtIHtudW1iZXJ9IGl5IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeVxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxuICovXG5jb25zdCBibGVycCA9IChjMDAsIGMxMCwgYzAxLCBjMTEsIGl4LCBpeSkgPT4gbGVycChsZXJwKGMwMCwgYzEwLCBpeCksIGxlcnAoYzAxLCBjMTEsIGl4KSwgaXkpO1xuXG4vKipcbiAqIFJlLW1hcCBhIG51bWJlciBpIGZyb20gcmFuZ2UgYTEuLi5hMiB0byBiMS4uLmIyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxuICogQHBhcmFtIHtudW1iZXJ9IGExXG4gKiBAcGFyYW0ge251bWJlcn0gYTJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxuICogQHBhcmFtIHtudW1iZXJ9IGIyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xuXG4vKipcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzIFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmNvbnN0IHJhZGlhbnMgPSBkZWdyZWVzID0+IChNYXRoLlBJIC8gMTgwKSAqIGRlZ3JlZXM7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKi9cbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggRXhjbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICovXG5jb25zdCByYW5kb21CZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqL1xuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW211PTAuNV0gVGhlIG1lYW4gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICovXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XG4gIH1cbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xufTtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxuICovXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGluZGV4IGZyb20gd1xuICovXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xuICBsZXQgdG90YWwgPSB3LnJlZHVjZSgoYSwgaSkgPT4gYSArIGksIDApLCBuID0gMDtcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcbiAgd2hpbGUgKHRvdGFsID4gcikge1xuICAgIHRvdGFsIC09IHdbbisrXTtcbiAgfVxuICByZXR1cm4gbiAtIDE7XG59O1xuXG4vKipcbiAqIEFuIGludGVycG9sYXRpb24gZnVuY3Rpb25cbiAqIEBjYWxsYmFjayBJbnRlcnBvbGF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gaW50ZXJwb2xhdGVkIHZhbHVlIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEBwYXJhbSB7SW50ZXJwb2xhdGlvbkZ1bmN0aW9ufSBbZj1NYXRoLmxlcnBdIFRoZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRvIHVzZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cbiAqL1xuY29uc3QgbGVycEFycmF5ID0gKGEsIGksIGYgPSBsZXJwKSA9PiB7XG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIGZyYWMocykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbmNvbnN0IGRvdCA9IChhLCBiKSA9PiBhLnJlZHVjZSgobiwgdiwgaSkgPT4gbiArIHYgKiBiW2ldLCAwKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY3RvcmlhbCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcbiAqL1xuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpID0gMjsgaSA8PSBhOyBpKyspIHtcbiAgICByZXN1bHQgKj0gaTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcbiAqL1xuY29uc3QgbnByID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IG5jciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHBlcm11dGF0aW9ucyhbMSwgMiwgM10sIDIpO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgMl0sXG4gKiAgIFsxLCAzXSxcbiAqICAgWzIsIDFdLFxuICogICBbMiwgM10sXG4gKiAgIFszLCAxXSxcbiAqICAgWzMsIDJdXG4gKiBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY2hvb3NlIGluIGVhY2ggcGVybXV0YXRpb25cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgcGVybXV0YXRpb24gYXJyYXlzXG4gKi9cbmNvbnN0IHBlcm11dGF0aW9ucyA9IChhLCByKSA9PiB7XG4gIGlmIChyID09PSAxKSB7XG4gICAgcmV0dXJuIGEubWFwKGl0ZW0gPT4gW2l0ZW1dKTtcbiAgfVxuXG4gIHJldHVybiBhLnJlZHVjZShcbiAgICAoYWNjLCBpdGVtLCBpKSA9PiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5wZXJtdXRhdGlvbnMoYS5zbGljZSgwLCBpKS5jb25jYXQoYS5zbGljZShpICsgMSkpLCByIC0gMSkubWFwKGMgPT4gW2l0ZW0sIC4uLmNdKSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbWJpbmF0aW9ucyhbMSwgMiwgM10sIDIpO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgMl0sXG4gKiAgIFsxLCAzXSxcbiAqICAgWzIsIDNdXG4gKiBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY2hvb3NlIGluIGVhY2ggY29tYmluYXRpb25cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgY29tYmluYXRpb24gYXJyYXlzXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9ucyA9IChhLCByKSA9PiB7XG4gIGlmIChyID09PSAxKSB7XG4gICAgcmV0dXJuIGEubWFwKGl0ZW0gPT4gW2l0ZW1dKTtcbiAgfVxuXG4gIHJldHVybiBhLnJlZHVjZShcbiAgICAoYWNjLCBpdGVtLCBpKSA9PiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5jb21iaW5hdGlvbnMoYS5zbGljZShpICsgMSksIHIgLSAxKS5tYXAoYyA9PiBbaXRlbSwgLi4uY10pLFxuICAgIF0sXG4gICAgW11cbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY2FydGVzaWFuIHByb2R1Y3Qgb2YgYXJyYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjYXJ0ZXNpYW4oWzEsIDIsIDNdLCBbJ2EnLCAnYiddKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIFwiYVwiXSxcbiAqICAgWzEsIFwiYlwiXSxcbiAqICAgWzIsIFwiYVwiXSxcbiAqICAgWzIsIFwiYlwiXSxcbiAqICAgWzMsIFwiYVwiXSxcbiAqICAgWzMsIFwiYlwiXVxuICogXVxuICogYGBgXG4gKi9cbmNvbnN0IGNhcnRlc2lhbiA9ICguLi5hcnIpID0+XG4gIGFyci5yZWR1Y2UoXG4gICAgKGEsIGIpID0+IGEuZmxhdE1hcChjID0+IGIubWFwKGQgPT4gWy4uLmMsIGRdKSksXG4gICAgW1tdXVxuICApO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXG4gKiBAY2FsbGJhY2sgVGltZXNGdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFJldHVybiBhIG5ldyBhcnJheSB3aXRoIGxlbmd0aCBuIGJ5IGNhbGxpbmcgZnVuY3Rpb24gZihpKSBvbiBlYWNoIGVsZW1lbnRcbiAqIEBwYXJhbSB7VGltZXNGdW5jdGlvbn0gZlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTwqPn1cbiAqL1xuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXG4gKi9cbmNvbnN0IHJhbmdlID0gbiA9PiB0aW1lcyhpID0+IGksIG4pO1xuXG4vKipcbiAqIFppcCBtdWx0aXBsZSBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7Li4uQXJyYXk8Kj59IGEgVGhlIGFycmF5cyB0byB6aXBcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuY29uc3QgemlwID0gKC4uLmEpID0+IHRpbWVzKGkgPT4gYS5tYXAoYSA9PiBhW2ldKSwgTWF0aC5tYXgoLi4uYS5tYXAoYSA9PiBhLmxlbmd0aCkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXlbaV0gd2l0aCBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgd3JhcHBpbmdcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGEgVGhlIGFycmF5IHRvIGFjY2Vzc1xuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IGF0ID0gKGEsIGkpID0+IGFbaSA8IDAgPyBhLmxlbmd0aCAtIChNYXRoLmFicyhpICsgMSkgJSBhLmxlbmd0aCkgLSAxIDogaSAlIGEubGVuZ3RoXTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheSB3aXRob3V0IHJlbW92aW5nIGl0XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHsqfSBUaGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IHBlZWsgPSAoYSkgPT4ge1xuICBpZiAoIWEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBhW2EubGVuZ3RoIC0gMV07XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gcG9zaXRpb24gaW4gYW4gdW5yb2xsZWQgMmQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHcgVGhlIHdpZHRoIG9mIHRoZSAyZCBhcnJheVxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4IGluIHRoZSB1bnJvbGxlZCBhcnJheVxuICovXG5jb25zdCBpbmQgPSAoeCwgeSwgdykgPT4geCArIHkgKiB3O1xuXG4vKipcbiAqIFJldHVybiB0aGUgcG9zaXRpb24gZm9yIGEgZ2l2ZW4gaW5kZXggaW4gYW4gdW5yb2xsZWQgMmQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IHcgVGhlIHdpZHRoIG9mIHRoZSAyZCBhcnJheVxuICogQHJldHVybnMge0FycmF5PG51bWJlcj59IFRoZSBwb3NpdGlvbiBhcyBhIDItdHVwbGVcbiAqL1xuY29uc3QgcG9zID0gKGksIHcpID0+IFtpICUgdywgTWF0aC5mbG9vcihpIC8gdyldO1xuXG4vKipcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY2h1bmsgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcbiAqL1xuY29uc3QgY2h1bmsgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBhLnNsaWNlKGkgKiBuLCBpICogbiArIG4pLCBNYXRoLmNlaWwoYS5sZW5ndGggLyBuKSk7XG5cbi8qKlxuICogUmFuZG9tbHkgc2h1ZmZsZSBhIHNoYWxsb3cgY29weSBvZiBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxuICovXG5jb25zdCBzaHVmZmxlID0gYSA9PiBhLnNsaWNlKCkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuLyoqXG4gKiBGbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byB1c2UgZm9yIGNvbmNhdGVuYXRpbmcga2V5c1xuICogQHJldHVybiB7b2JqZWN0fSBBIGZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgZmxhdCA9IChvLCBjb25jYXRlbmF0b3IgPSAnLicpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG8pLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAob1trZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogb1trZXldLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb1trZXldICE9PSAnb2JqZWN0JyB8fCAhb1trZXldKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0KG9ba2V5XSwgY29uY2F0ZW5hdG9yKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5PYmplY3Qua2V5cyhmbGF0dGVuZWQpLnJlZHVjZShcbiAgICAgICAgKGNoaWxkQWNjLCBjaGlsZEtleSkgPT4gKHtcbiAgICAgICAgICAuLi5jaGlsZEFjYyxcbiAgICAgICAgICBbYCR7a2V5fSR7Y29uY2F0ZW5hdG9yfSR7Y2hpbGRLZXl9YF06IGZsYXR0ZW5lZFtjaGlsZEtleV0sXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKSxcbiAgICB9O1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIFVuZmxhdHRlbiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uY2F0ZW5hdG9yIFRoZSBzdHJpbmcgdG8gY2hlY2sgZm9yIGluIGNvbmNhdGVuYXRlZCBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIHVuLWZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgdW5mbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge30sIHRlbXAsIHN1YnN0cmluZ3MsIHByb3BlcnR5LCBpO1xuXG4gIGZvciAocHJvcGVydHkgaW4gbykge1xuICAgIHN1YnN0cmluZ3MgPSBwcm9wZXJ0eS5zcGxpdChjb25jYXRlbmF0b3IpO1xuICAgIHRlbXAgPSByZXN1bHQ7XG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoIShzdWJzdHJpbmdzW2ldIGluIHRlbXApKSB7XG4gICAgICAgIGlmIChpc0Zpbml0ZShzdWJzdHJpbmdzW2kgKyAxXSkpIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFtzdWJzdHJpbmdzW2ldXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0ZW1wID0gdGVtcFtzdWJzdHJpbmdzW2ldXTtcbiAgICB9XG4gICAgdGVtcFtzdWJzdHJpbmdzW3N1YnN0cmluZ3MubGVuZ3RoIC0gMV1dID0gb1twcm9wZXJ0eV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBBIHNwbGl0IHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIFNwbGl0UHJlZGljYXRlXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGN1cnJlbnQgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFycmF5IHNob3VsZCBzcGxpdCBhdCB0aGlzIGluZGV4XG4gKi9cblxuLyoqXG4gKiBTcGxpdCBhbiBhcnJheSBpbnRvIHN1Yi1hcnJheXMgYmFzZWQgb24gYSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFycmF5XG4gKiBAcGFyYW0ge1NwbGl0UHJlZGljYXRlfSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKi9cbmNvbnN0IHNwbGl0ID0gKGFycmF5LCBwcmVkaWNhdGUpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGxldCBjdXJyZW50ID0gW107XG4gIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBsdWNrIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBwbHVjayBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBsdWNrZWQga2V5c1xuICovXG5jb25zdCBwbHVjayA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShcbiAgICAocmVzdWx0LCBrZXkpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvW2tleV0gfSksXG4gICAge31cbiAgKTtcbn07XG5cbi8qKlxuICogRXhjbHVkZSBrZXlzIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IGtleXMgVGhlIGtleXMgdG8gZXhjbHVkZSBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGtleXMgZXhjZXB0IGV4Y2x1ZGVkIGtleXNcbiAqL1xuY29uc3QgZXhjbHVkZSA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMobykuZmlsdGVyKChba2V5XSkgPT4gIWtleXMuaW5jbHVkZXMoa2V5KSlcbiAgKTtcbn07XG5cbi8qKlxuICogQSBrZXkgdHJhbnNmb3JtIHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIEtleVRyYW5zZm9ybUZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gbyBUaGUgb2JqZWN0IGJlaW5nIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgY3VycmVudCBwYXRoIGluIGRvdCBub3RhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgY3VycmVudCBrZXlcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfG51bGx9IFRoZSB0cmFuc2Zvcm1lZCBrZXksIG9yIG51bGwgdG8gb21pdCB0aGUga2V5XG4gKi9cblxuLyoqXG4gKiBBIHZhbHVlIHRyYW5zZm9ybSBwcmVkaWNhdGVcbiAqIEBjYWxsYmFjayBWYWx1ZVRyYW5zZm9ybUZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gbyBUaGUgb2JqZWN0IGJlaW5nIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgY3VycmVudCBwYXRoIGluIGRvdCBub3RhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgY3VycmVudCBrZXlcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7YW55fSBUaGUgdHJhbnNmb3JtZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYW5zZm9ybSB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG8gVGhlIG9iamVjdCB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7S2V5VHJhbnNmb3JtRnVuY3Rpb259IFtrZj11bmRlZmluZWRdIE9wdGlvbmFsIGtleSB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7VmFsdWVUcmFuc2Zvcm1GdW5jdGlvbn0gW3ZmPXVuZGVmaW5lZF0gT3B0aW9uYWwgdmFsdWUgdHJhbnNmb3JtXG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSB0cmFuc2Zvcm1lZCBvYmplY3RcbiAqL1xuY29uc3QgdHJhbnNmb3JtID0gKG8sIGtmID0gdW5kZWZpbmVkLCB2ZiA9IHVuZGVmaW5lZCkgPT4ge1xuICBjb25zdCBpbm5lclRyYW5zZm9ybSA9IChvYmosIGN1cnJlbnRQYXRoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaikucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgbGV0IG5ld0tleSA9IGtleTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgY29uc3QgcGF0aCA9IGN1cnJlbnRQYXRoID8gYCR7Y3VycmVudFBhdGh9LiR7a2V5fWAgOiBrZXk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBuZXdWYWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAhKG5ld1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkobmV3VmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbm5lclRyYW5zZm9ybShuZXdWYWx1ZSwgcGF0aCk7XG4gICAgICB9IGVsc2UgaWYgKHZmKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdmYob2JqLCBwYXRoLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZikge1xuICAgICAgICBuZXdLZXkgPSBrZihvYmosIHBhdGgsIGtleSwgbmV3VmFsdWUpO1xuICAgICAgICBpZiAobmV3S2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtuZXdLZXldOiBuZXdWYWx1ZSxcbiAgICAgIH07XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBpbm5lclRyYW5zZm9ybShvLCAnJyk7XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbWVtb2l6ZSxcbiAgICBmbG9hdEVxdWFscyxcbiAgICBjbGFtcCxcbiAgICBmcmFjLFxuICAgIHJvdW5kLFxuICAgIGxlcnAsXG4gICAgdW5sZXJwLFxuICAgIGJsZXJwLFxuICAgIHJlbWFwLFxuICAgIHNtb290aHN0ZXAsXG4gICAgcmFkaWFucyxcbiAgICBkZWdyZWVzLFxuICAgIHJhbmRvbUJldHdlZW4sXG4gICAgcmFuZG9tSW50QmV0d2VlbixcbiAgICBjbHRSYW5kb20sXG4gICAgY2x0UmFuZG9tSW50LFxuICAgIHdlaWdodGVkUmFuZG9tLFxuICAgIGxlcnBBcnJheSxcbiAgICBkb3QsXG4gICAgZmFjdG9yaWFsLFxuICAgIG5wcixcbiAgICBuY3IsXG4gICAgcGVybXV0YXRpb25zLFxuICAgIGNvbWJpbmF0aW9ucyxcbiAgICBjYXJ0ZXNpYW4sXG4gICAgdGltZXMsXG4gICAgcmFuZ2UsXG4gICAgemlwLFxuICAgIGF0LFxuICAgIHBlZWssXG4gICAgaW5kLFxuICAgIHBvcyxcbiAgICBjaHVuayxcbiAgICBzaHVmZmxlLFxuICAgIGZsYXQsXG4gICAgdW5mbGF0LFxuICAgIHNwbGl0LFxuICAgIHBsdWNrLFxuICAgIGV4Y2x1ZGUsXG4gICAgdHJhbnNmb3JtLFxuICB9O1xufVxuIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBzbWFsbCB2ZWN0b3IgYW5kIG1hdHJpeCBsaWJyYXJ5XG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbmNvbnN0IF92ZWNfdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xuY29uc3QgX3ZlY19jaHVuayA9IChhLCBuKSA9PiBfdmVjX3RpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuY29uc3QgX3ZlY19kb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5jb25zdCBfdmVjX2lzX3ZlYzIgPSBhID0+IHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiAneCcgaW4gYSAmJiAneScgaW4gYTtcbmNvbnN0IF92ZWNfaXNfdmVjMyA9IGEgPT4gdHlwZW9mIGEgPT09ICdvYmplY3QnICYmICd4JyBpbiBhICYmICd5JyBpbiBhICYmICd6JyBpbiBhO1xuXG4vKipcbiAqIEEgMmQgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSB2ZWMyXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSAyZCB2ZWN0b3JcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIDJkIHZlY3RvciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzVmVjMih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICd4JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS54ID09PSAnbnVtYmVyJyAmJlxuICAgICd5JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS55ID09PSAnbnVtYmVyJyAmJlxuICAgICEoJ3onIGluIHZhbHVlKVxuICApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyAyZCB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlYzJ9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gQSBuZXcgMmQgdmVjdG9yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj52YXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMigzLCAyKTsgLy8gKDMsIDIpXG4gKiBsZXQgYiA9IHZlYzIoNCk7ICAgIC8vICg0LCA0KVxuICogbGV0IGMgPSB2ZWMyKGEpOyAgICAvLyAoMywgMilcbiAqIGxldCBkID0gdmVjMigpOyAgICAgLy8gKDAsIDApXG4gKi9cbmNvbnN0IHZlYzIgPSAoeCwgeSkgPT4ge1xuICBpZiAoIXggJiYgIXkpIHtcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gIH1cbiAgaWYgKF92ZWNfaXNfdmVjMih4KSkge1xuICAgIHJldHVybiB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9O1xuICB9XG4gIHJldHVybiB7IHg6IHgsIHk6IHkgPz8geCB9O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMyLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogQ3JlYXRlIGEgdmVjdG9yIGZyb20gYW4gYXJyYXkgb2YgY29tcG9uZW50c1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb21wb25lbnRzIFRoZSBjb21wb25lbnRzIG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgbmV3IHZlY3RvclxuICovXG52ZWMyLmZyb21Db21wb25lbnRzID0gY29tcG9uZW50cyA9PiB2ZWMyKC4uLmNvbXBvbmVudHMuc2xpY2UoMCwgMikpO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwKVxuICogQHJldHVybiB7dmVjMn0gQSB1bml0IHZlY3RvciAoMSwgMClcbiAqL1xudmVjMi51eCA9ICgpID0+IHZlYzIoMSwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxuICovXG52ZWMyLnV5ID0gKCkgPT4gdmVjMigwLCAxKTtcblxuLyoqXG4gKiBBZGQgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSArIGJcbiAqL1xudmVjMi5hZGQgPSAoYSwgYikgPT4gKHsgeDogYS54ICsgKGIueCA/PyBiKSwgeTogYS55ICsgKGIueSA/PyBiKSB9KTtcblxuLyoqXG4gKiBBZGQgbXVsdGlwbGUgdmVjdG9yc1xuICogQHBhcmFtICB7Li4uYW55fSB2IFZlY3RvcnMgdG8gYWRkXG4gKiBAcmV0dXJucyB7dmVjMn0gVGhlIHN1bSBvZiB0aGUgdmVjdG9yc1xuICovXG52ZWMyLmFkZG0gPSAoLi4udikgPT4gdi5yZWR1Y2UoKGEsIGIpID0+IHZlYzIuYWRkKGEsIGIpLCB2ZWMyKCkpO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgLSBiXG4gKi9cbnZlYzIuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIChiLnggPz8gYiksIHk6IGEueSAtIChiLnkgPz8gYikgfSk7XG5cbi8qKlxuICogU3VidHJhY3QgbXVsdGlwbGUgdmVjdG9yc1xuICogQHBhcmFtICB7Li4uYW55fSB2IFZlY3RvcnMgdG8gc3VidHJhY3RcbiAqIEByZXR1cm5zIHt2ZWMyfSBUaGUgcmVzdWx0IG9mIHN1YnRyYWN0aW5nIHRoZSB2ZWN0b3JzXG4gKi9cbnZlYzIuc3VibSA9ICguLi52KSA9PiB2LnJlZHVjZSgoYSwgYikgPT4gdmVjMi5zdWIoYSwgYikpO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMnxudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhICogYlxuICovXG52ZWMyLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiAoYi54ID8/IGIpLCB5OiBhLnkgKiAoYi55ID8/IGIpIH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLCBhbGlhcyBmb3IgdmVjMi5tdWxcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgKiBiXG4gKi9cbnZlYzIuc2NhbGUgPSAoYSwgYikgPT4gdmVjMi5tdWwoYSwgYik7XG5cbi8qKlxuICogRGl2aWRlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMnxudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhIC8gYlxuICovXG52ZWMyLmRpdiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLyAoYi54ID8/IGIpLCB5OiBhLnkgLyAoYi55ID8/IGIpIH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYzIubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYzIubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7dmVjMn0gXmFcbiAqL1xudmVjMi5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYzIubGVuKGEpO1xuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiB9IDogdmVjMigpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbnZlYzIuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMi5yb3QgPSAoYSwgcikgPT4ge1xuICBsZXQgcyA9IE1hdGguc2luKHIpLFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XG59O1xuXG4vKipcbiAqIEZhc3QgbWV0aG9kIHRvIHJvdGF0ZSBhIHZlY3RvciBieSAtOTAsIDkwIG9yIDE4MCBkZWdyZWVzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIDEgZm9yIDkwIGRlZ3JlZXMgKGN3KSwgLTEgZm9yIC05MCBkZWdyZWVzIChjY3cpLCAyIG9yIC0yIGZvciAxODAgZGVncmVlc1xuICogQHJldHVybiB7dmVjMn0gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMyLnJvdGYgPSAoYSwgcikgPT4ge1xuICBzd2l0Y2ggKHIpIHtcbiAgICBjYXNlIDE6IHJldHVybiB2ZWMyKGEueSwgLWEueCk7XG4gICAgY2FzZSAtMTogcmV0dXJuIHZlYzIoLWEueSwgYS54KTtcbiAgICBjYXNlIDI6IGNhc2UgLTI6IHJldHVybiB2ZWMyKC1hLngsIC1hLnkpO1xuICAgIGRlZmF1bHQ6IHJldHVybiBhO1xuICB9XG59O1xuXG4vKipcbiAqIFNjYWxhciBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIMOXIGJcbiAqL1xudmVjMi5jcm9zcyA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBhLnggKiBiLnkgLSBhLnkgKiBiLng7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYzIuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYzIucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWMyfSBBIGNvcHkgb2YgdmVjdG9yIGFcbiAqL1xudmVjMi5jcHkgPSBhID0+IHZlYzIoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgMmQgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjMk1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGNvbXBvbmVudCB2YWx1ZVxuICogQHBhcmFtIHsneCcgfCAneSd9IGxhYmVsIFRoZSBjb21wb25lbnQgbGFiZWwgKHggb3IgeSlcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvciBhbmQgYnVpbGQgYSBuZXcgdmVjdG9yIGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gVmVjdG9yIGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG52ZWMyLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMyLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX1gO1xuXG4vKipcbiAqIFN3aXp6bGUgYSB2ZWN0b3Igd2l0aCBhIHN0cmluZyBvZiBjb21wb25lbnQgbGFiZWxzXG4gKlxuICogVGhlIHN0cmluZyBjYW4gY29udGFpbjpcbiAqIC0gYHhgIG9yIGB5YFxuICogLSBgdWAgb3IgYHZgIChhbGlhc2VzIGZvciBgeGAgYW5kIGB5YCwgcmVzcGVjdGl2ZWx5KVxuICogLSBgWGAsIGBZYCwgYFVgLCBgVmAgKG5lZ2F0ZWQgdmVyc2lvbnMgb2YgdGhlIGFib3ZlKVxuICogLSBgMGAgb3IgYDFgICh0aGVzZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHVuY2hhbmdlZClcbiAqIC0gYC5gIHRvIHJldHVybiB0aGUgY29tcG9uZW50IHRoYXQgd291bGQgbm9ybWFsbHkgYmUgYXQgdGhpcyBwb3NpdGlvbiAob3IgMClcbiAqXG4gKiBBbnkgb3RoZXIgY2hhcmFjdGVycyB3aWxsIGRlZmF1bHQgdG8gMFxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gc3dpenpsZVxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScuLiddIFRoZSBzd2l6emxlIHN0cmluZ1xuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHN3aXp6bGVkIGNvbXBvbmVudHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnN3aXp6bGluZyBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMigzLCAtMik7XG4gKiB2ZWMyLnN3aXooYSwgJ3gnKTsgICAgLy8gWzNdXG4gKiB2ZWMyLnN3aXooYSwgJ3l4Jyk7ICAgLy8gWy0yLCAzXVxuICogdmVjMi5zd2l6KGEsICd4WScpOyAgIC8vIFszLCAyXVxuICogdmVjMi5zd2l6KGEsICdZeScpOyAgIC8vIFsyLCAtMl1cbiAqIHZlYzIuc3dpeihhLCAneC54Jyk7ICAvLyBbMywgLTIsIDNdXG4gKiB2ZWMyLnN3aXooYSwgJ3kwMXgnKTsgLy8gWy0yLCAwLCAxLCAzXVxuICovXG52ZWMyLnN3aXogPSAoYSwgcyA9ICcuLicpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHMuc3BsaXQoJycpLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJ3gnOiBjYXNlICd1JzogcmVzdWx0LnB1c2goYS54KTsgYnJlYWs7XG4gICAgICBjYXNlICd5JzogY2FzZSAndic6IHJlc3VsdC5wdXNoKGEueSk7IGJyZWFrO1xuICAgICAgY2FzZSAnWCc6IGNhc2UgJ1UnOiByZXN1bHQucHVzaCgtYS54KTsgYnJlYWs7XG4gICAgICBjYXNlICdZJzogY2FzZSAnVic6IHJlc3VsdC5wdXNoKC1hLnkpOyBicmVhaztcbiAgICAgIGNhc2UgJzAnOiByZXN1bHQucHVzaCgwKTsgYnJlYWs7XG4gICAgICBjYXNlICcxJzogcmVzdWx0LnB1c2goMSk7IGJyZWFrO1xuICAgICAgY2FzZSAnLic6IHJlc3VsdC5wdXNoKFthLngsIGEueV1baV0gPz8gMCk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcmVzdWx0LnB1c2goMCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUG9sYXIgY29vcmRpbmF0ZXMgZm9yIGEgMmQgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBwb2xhckNvb3JkaW5hdGVzMmRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByIFRoZSBtYWduaXR1ZGUgKHJhZGl1cykgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRoZXRhIFRoZSBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gcG9sYXIgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge3BvbGFyQ29vcmRpbmF0ZXMyZH0gVGhlIG1hZ25pdHVkZSBhbmQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICovXG52ZWMyLnBvbGFyID0gYSA9PiAoeyByOiB2ZWMyLmxlbihhKSwgdGhldGE6IE1hdGguYXRhbjIoYS55LCBhLngpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgcG9sYXIgY29vcmRpbmF0ZXMgaW50byBhIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG1hZ25pdHVkZSAocmFkaXVzKSBvZiB0aGUgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gdGhldGEgVGhlIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGFuZ2xlIGFuZCBtYWduaXR1ZGVcbiAqL1xudmVjMi5mcm9tUG9sYXIgPSAociwgdGhldGEpID0+IHZlYzIociAqIE1hdGguY29zKHRoZXRhKSwgciAqIE1hdGguc2luKHRoZXRhKSk7XG5cbi8qKlxuICogQSAzZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlYzNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHogVGhlIHogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSAzZCB2ZWN0b3JcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIDNkIHZlY3RvciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzVmVjMyh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICd4JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS54ID09PSAnbnVtYmVyJyAmJlxuICAgICd5JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS55ID09PSAnbnVtYmVyJyAmJlxuICAgICd6JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS56ID09PSAnbnVtYmVyJ1xuICApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyAzZCB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlYzN8dmVjMn0gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciB0aGUgeiBjb21wb25lbnQgaWYgeCBpcyBhIHZlYzJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbel0gVGhlIHogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzN9IEEgbmV3IDNkIHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+dmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYzMoMywgMiwgMSk7ICAgICAgIC8vICgzLCAyLCAxKVxuICogbGV0IGIgPSB2ZWMzKDQsIDUpOyAgICAgICAgICAvLyAoNCwgNSwgMClcbiAqIGxldCBjID0gdmVjMyg2KTsgICAgICAgICAgICAgLy8gKDYsIDYsIDYpXG4gKiBsZXQgZCA9IHZlYzMoYSk7ICAgICAgICAgICAgIC8vICgzLCAyLCAxKVxuICogbGV0IGUgPSB2ZWMzKCk7ICAgICAgICAgICAgICAvLyAoMCwgMCwgMClcbiAqIGxldCBmID0gdmVjMyh2ZWMyKDEsIDIpLCAzKTsgLy8gKDEsIDIsIDMpXG4gKiBsZXQgZyA9IHZlYzModmVjMig0LCA1KSk7ICAgIC8vICg0LCA1LCAwKVxuICovXG5jb25zdCB2ZWMzID0gKHgsIHksIHopID0+IHtcbiAgaWYgKCF4ICYmICF5ICYmICF6KSB7XG4gICAgcmV0dXJuIHsgeDogMCwgeTogMCwgejogMCB9O1xuICB9XG4gIGlmIChfdmVjX2lzX3ZlYzMoeCkpIHtcbiAgICByZXR1cm4geyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAsIHo6IHgueiB8fCAwIH07XG4gIH1cbiAgaWYgKF92ZWNfaXNfdmVjMih4KSkge1xuICAgIHJldHVybiB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCwgejogeSB8fCAwIH07XG4gIH1cbiAgcmV0dXJuIHsgeDogeCwgeTogeSA/PyB4LCB6OiB6ID8/IHggfTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjMy5jb21wb25lbnRzID0gYSA9PiBbYS54LCBhLnksIGEuel07XG5cbi8qKlxuICogQ3JlYXRlIGEgdmVjdG9yIGZyb20gYW4gYXJyYXkgb2YgY29tcG9uZW50c1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb21wb25lbnRzIFRoZSBjb21wb25lbnRzIG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzN9IEEgbmV3IHZlY3RvclxuICovXG52ZWMzLmZyb21Db21wb25lbnRzID0gY29tcG9uZW50cyA9PiB2ZWMzKC4uLmNvbXBvbmVudHMuc2xpY2UoMCwgMykpO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwLCAwKVxuICogQHJldHVybiB7dmVjM30gQSB1bml0IHZlY3RvciAoMSwgMCwgMClcbiAqL1xudmVjMy51eCA9ICgpID0+IHZlYzMoMSwgMCwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEsIDApXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHVuaXQgdmVjdG9yICgwLCAxLCAwKVxuICovXG52ZWMzLnV5ID0gKCkgPT4gdmVjMygwLCAxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMCwgMSlcbiAqIEByZXR1cm4ge3ZlYzN9IEEgdW5pdCB2ZWN0b3IgKDAsIDAsIDEpXG4gKi9cbnZlYzMudXogPSAoKSA9PiB2ZWMzKDAsIDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM3xudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhICsgYlxuICovXG52ZWMzLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyAoYi54ID8/IGIpLCB5OiBhLnkgKyAoYi55ID8/IGIpLCB6OiBhLnogKyAoYi56ID8/IGIpIH0pO1xuXG4vKipcbiAqIEFkZCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBhZGRcbiAqIEByZXR1cm5zIHt2ZWMzfSBUaGUgc3VtIG9mIHRoZSB2ZWN0b3JzXG4gKi9cbnZlYzMuYWRkbSA9ICguLi52KSA9PiB2LnJlZHVjZSgoYSwgYikgPT4gdmVjMy5hZGQoYSwgYiksIHZlYzMoKSk7XG5cbi8qKlxuICogU3VidHJhY3QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAtIGJcbiAqL1xudmVjMy5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gKGIueCA/PyBiKSwgeTogYS55IC0gKGIueSA/PyBiKSwgejogYS56IC0gKGIueiA/PyBiKSB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBzdWJ0cmFjdFxuICogQHJldHVybnMge3ZlYzN9IFRoZSByZXN1bHQgb2Ygc3VidHJhY3RpbmcgdGhlIHZlY3RvcnNcbiAqL1xudmVjMy5zdWJtID0gKC4uLnYpID0+IHYucmVkdWNlKChhLCBiKSA9PiB2ZWMzLnN1YihhLCBiKSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgKiBiXG4gKi9cbnZlYzMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIChiLnggPz8gYiksIHk6IGEueSAqIChiLnkgPz8gYiksIHo6IGEueiAqIChiLnogPz8gYikgfSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3IgYnkgYSBzY2FsYXIsIGFsaWFzIGZvciB2ZWMzLm11bFxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAqIGJcbiAqL1xudmVjMy5zY2FsZSA9IChhLCBiKSA9PiB2ZWMzLm11bChhLCBiKTtcblxuLyoqXG4gKiBEaXZpZGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgLyBiXG4gKi9cbnZlYzMuZGl2ID0gKGEsIGIpID0+ICh7IHg6IGEueCAvIChiLnggPz8gYiksIHk6IGEueSAvIChiLnkgPz8gYiksIHo6IGEueiAvIChiLnogPz8gYikgfSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnopO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpICsgTWF0aC5hYnMoYS56KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7dmVjM30gXmFcbiAqL1xudmVjMy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYzMubGVuKGEpO1xuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiwgejogYS56IC8gbGVuIH0gOiB2ZWMzKCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjMy5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciB1c2luZyBhIHJvdGF0aW9uIG1hdHJpeFxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge21hdH0gbSBUaGUgcm90YXRpb24gbWF0cml4XG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90ID0gKGEsIG0pID0+IHZlYzMoXG4gIHZlYzMuZG90KHZlYzMuZnJvbUNvbXBvbmVudHMobWF0LnJvdyhtLCAxKSksIGEpLFxuICB2ZWMzLmRvdCh2ZWMzLmZyb21Db21wb25lbnRzKG1hdC5yb3cobSwgMikpLCBhKSxcbiAgdmVjMy5kb3QodmVjMy5mcm9tQ29tcG9uZW50cyhtYXQucm93KG0sIDMpKSwgYSlcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFucyBhcm91bmQgdGhlIHggYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90eCA9IChhLCByKSA9PiB2ZWMzKFxuICBhLngsXG4gIGEueSAqIE1hdGguY29zKHIpIC0gYS56ICogTWF0aC5zaW4ociksXG4gIGEueSAqIE1hdGguc2luKHIpICsgYS56ICogTWF0aC5jb3Mocilcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFucyBhcm91bmQgdGhlIHkgYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90eSA9IChhLCByKSA9PiB2ZWMzKFxuICBhLnggKiBNYXRoLmNvcyhyKSArIGEueiAqIE1hdGguc2luKHIpLFxuICBhLnksXG4gIC1hLnggKiBNYXRoLnNpbihyKSArIGEueiAqIE1hdGguY29zKHIpXG4pO1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnMgYXJvdW5kIHRoZSB6IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdHogPSAoYSwgcikgPT4gdmVjMyhcbiAgYS54ICogTWF0aC5jb3MocikgLSBhLnkgKiBNYXRoLnNpbihyKSxcbiAgYS54ICogTWF0aC5zaW4ocikgKyBhLnkgKiBNYXRoLmNvcyhyKSxcbiAgYS56XG4pO1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciB1c2luZyBhIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBxIFRoZSBxdWF0ZXJuaW9uIHRvIHJvdGF0ZSBieVxuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdHEgPSAodiwgcSkgPT4ge1xuICBpZiAocS5sZW5ndGggIT09IDQpIHtcbiAgICByZXR1cm4gdmVjMygpO1xuICB9XG5cbiAgY29uc3QgZCA9IE1hdGguc3FydChxWzBdICogcVswXSArIHFbMV0gKiBxWzFdICsgcVsyXSAqIHFbMl0gKyBxWzNdICogcVszXSk7XG4gIGlmIChkID09PSAwKSB7XG4gICAgcmV0dXJuIHZlYzMoKTtcbiAgfVxuXG4gIGNvbnN0IHVxID0gW3FbMF0gLyBkLCBxWzFdIC8gZCwgcVsyXSAvIGQsIHFbM10gLyBkXTtcbiAgY29uc3QgdSA9IHZlYzMoLi4udXEuc2xpY2UoMCwgMykpO1xuICBjb25zdCBzID0gdXFbM107XG4gIHJldHVybiB2ZWMzLmFkZChcbiAgICB2ZWMzLmFkZChcbiAgICAgIHZlYzMubXVsKHUsIDIgKiB2ZWMzLmRvdCh1LCB2KSksXG4gICAgICB2ZWMzLm11bCh2LCBzICogcyAtIHZlYzMuZG90KHUsIHUpKVxuICAgICksXG4gICAgdmVjMy5tdWwodmVjMy5jcm9zcyh1LCB2KSwgMiAqIHMpXG4gICk7XG59O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciB1c2luZyBFdWxlciBhbmdsZXNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBlIFRoZSBFdWxlciBhbmdsZXMgdG8gcm90YXRlIGJ5XG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90YSA9IChhLCBlKSA9PiB2ZWMzLnJvdHoodmVjMy5yb3R5KHZlYzMucm90eChhLCBlLngpLCBlLnkpLCBlLnopO1xuXG4vKipcbiAqIEdldCB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjM30gYSDDlyBiXG4gKi9cbnZlYzMuY3Jvc3MgPSAoYSwgYikgPT4gdmVjMyhcbiAgYS55ICogYi56IC0gYS56ICogYi55LFxuICBhLnogKiBiLnggLSBhLnggKiBiLnosXG4gIGEueCAqIGIueSAtIGEueSAqIGIueFxuKTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmVjdG9ycyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMzLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55ICYmIGEueiA9PT0gYi56O1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IgZnJvbSB0aGUgeCBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjMy5yYWR4ID0gYSA9PiBNYXRoLmF0YW4yKGEueiwgYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yIGZyb20gdGhlIHkgYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYzMucmFkeSA9IGEgPT4gTWF0aC5hdGFuMihhLngsIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvciBmcm9tIHRoZSB6IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMzLnJhZHogPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLnopO1xuXG4vKipcbiAqIENvcHkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlYzN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMzLmNweSA9IGEgPT4gdmVjMyhhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSAzZCB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWMzTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5JyB8ICd6J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCwgeSBvciB6KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzNNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMzfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYzMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSwgejogZihhLnosICd6JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMzLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX0ke3N9JHthLnp9YDtcblxuLyoqXG4gKiBTd2l6emxlIGEgdmVjdG9yIHdpdGggYSBzdHJpbmcgb2YgY29tcG9uZW50IGxhYmVsc1xuICpcbiAqIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW46XG4gKiAtIGB4YCwgYHlgIG9yIGB6YFxuICogLSBgdWAsIGB2YCBvciBgd2AgKGFsaWFzZXMgZm9yIGB4YCwgYHlgIGFuZCBgemAsIHJlc3BlY3RpdmVseSlcbiAqIC0gYHJgLCBgZ2Agb3IgYGJgIChhbGlhc2VzIGZvciBgeGAsIGB5YCBhbmQgYHpgLCByZXNwZWN0aXZlbHkpXG4gKiAtIGBYYCwgYFlgLCBgWmAsIGBVYCwgYFZgLCBgV2AsIGBSYCwgYEdgLCBgQmAgKG5lZ2F0ZWQgdmVyc2lvbnMgb2YgdGhlIGFib3ZlKVxuICogLSBgMGAgb3IgYDFgICh0aGVzZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHVuY2hhbmdlZClcbiAqIC0gYC5gIHRvIHJldHVybiB0aGUgY29tcG9uZW50IHRoYXQgd291bGQgbm9ybWFsbHkgYmUgYXQgdGhpcyBwb3NpdGlvbiAob3IgMClcbiAqXG4gKiBBbnkgb3RoZXIgY2hhcmFjdGVycyB3aWxsIGRlZmF1bHQgdG8gMFxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gc3dpenpsZVxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScuLi4nXSBUaGUgc3dpenpsZSBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSBzd2l6emxlZCBjb21wb25lbnRzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5zd2l6emxpbmcgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYzMoMywgLTIsIDEpO1xuICogdmVjMy5zd2l6KGEsICd4Jyk7ICAgICAvLyBbM11cbiAqIHZlYzMuc3dpeihhLCAnenl4Jyk7ICAgLy8gWzEsIC0yLCAzXVxuICogdmVjMy5zd2l6KGEsICd4WVonKTsgICAvLyBbMywgMiwgLTFdXG4gKiB2ZWMzLnN3aXooYSwgJ1p6eCcpOyAgIC8vIFstMSwgMSwgM11cbiAqIHZlYzMuc3dpeihhLCAneC54Jyk7ICAgLy8gWzMsIC0yLCAzXVxuICogdmVjMy5zd2l6KGEsICd5MDF6eCcpOyAvLyBbLTIsIDAsIDEsIDEsIDNdXG4gKi9cbnZlYzMuc3dpeiA9IChhLCBzID0gJy4uLicpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHMuc3BsaXQoJycpLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJ3gnOiBjYXNlICd1JzogY2FzZSAncic6IHJlc3VsdC5wdXNoKGEueCk7IGJyZWFrO1xuICAgICAgY2FzZSAneSc6IGNhc2UgJ3YnOiBjYXNlICdnJzogcmVzdWx0LnB1c2goYS55KTsgYnJlYWs7XG4gICAgICBjYXNlICd6JzogY2FzZSAndyc6IGNhc2UgJ2InOiByZXN1bHQucHVzaChhLnopOyBicmVhaztcbiAgICAgIGNhc2UgJ1gnOiBjYXNlICdVJzogY2FzZSAnUic6IHJlc3VsdC5wdXNoKC1hLngpOyBicmVhaztcbiAgICAgIGNhc2UgJ1knOiBjYXNlICdWJzogY2FzZSAnRyc6IHJlc3VsdC5wdXNoKC1hLnkpOyBicmVhaztcbiAgICAgIGNhc2UgJ1onOiBjYXNlICdXJzogY2FzZSAnQic6IHJlc3VsdC5wdXNoKC1hLnopOyBicmVhaztcbiAgICAgIGNhc2UgJzAnOiByZXN1bHQucHVzaCgwKTsgYnJlYWs7XG4gICAgICBjYXNlICcxJzogcmVzdWx0LnB1c2goMSk7IGJyZWFrO1xuICAgICAgY2FzZSAnLic6IHJlc3VsdC5wdXNoKFthLngsIGEueSwgYS56XVtpXSA/PyAwKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiByZXN1bHQucHVzaCgwKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQb2xhciBjb29yZGluYXRlcyBmb3IgYSAzZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHBvbGFyQ29vcmRpbmF0ZXMzZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHIgVGhlIG1hZ25pdHVkZSAocmFkaXVzKSBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGhldGEgVGhlIHRpbHQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBoaSBUaGUgcGFuIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBwb2xhciBjb29yZGluYXRlc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHJldHVybiB7cG9sYXJDb29yZGluYXRlczNkfSBUaGUgbWFnbml0dWRlLCB0aWx0IGFuZCBwYW4gb2YgdGhlIHZlY3RvclxuICovXG52ZWMzLnBvbGFyID0gYSA9PiB7XG4gIGxldCByID0gdmVjMy5sZW4oYSksXG4gICAgdGhldGEgPSBNYXRoLmFjb3MoYS55IC8gciksXG4gICAgcGhpID0gTWF0aC5hdGFuMihhLnosIGEueCk7XG4gIHJldHVybiB7IHIsIHRoZXRhLCBwaGkgfTtcbn07XG5cbi8qKlxuICogQ29udmVydCBwb2xhciBjb29yZGluYXRlcyBpbnRvIGEgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbWFnbml0dWRlIChyYWRpdXMpIG9mIHRoZSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGV0YSBUaGUgdGlsdCBvZiB0aGUgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gcGhpIFRoZSBwYW4gb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjM30gQSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gYW5nbGUgYW5kIG1hZ25pdHVkZVxuICovXG52ZWMzLmZyb21Qb2xhciA9IChyLCB0aGV0YSwgcGhpKSA9PiB7XG4gIGNvbnN0IHNpblRoZXRhID0gTWF0aC5zaW4odGhldGEpO1xuICByZXR1cm4gdmVjMyhcbiAgICByICogc2luVGhldGEgKiBNYXRoLmNvcyhwaGkpLFxuICAgIHIgKiBNYXRoLmNvcyh0aGV0YSksXG4gICAgciAqIHNpblRoZXRhICogTWF0aC5zaW4ocGhpKVxuICApO1xufTtcblxuLyoqXG4gKiBBIG1hdHJpeFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIG1hdHJpeFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgbWF0cml4LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNNYXQodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAnbScgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUubSA9PT0gJ251bWJlcicgJiZcbiAgICAnbicgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUubiA9PT0gJ251bWJlcicgJiZcbiAgICAnZW50cmllcycgaW4gdmFsdWUgJiZcbiAgICBBcnJheS5pc0FycmF5KHZhbHVlLmVudHJpZXMpXG4gICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxuICovXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XG4gIG0sIG4sXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcbn0pO1xuXG4vKipcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxuICovXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xuXG4vKipcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcbiAqL1xubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xuXG4vKipcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxuICovXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XG5cbi8qKlxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxuICovXG5tYXQucm93ID0gKGEsIG0pID0+IHtcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XG59O1xuXG4vKipcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LmNvbCA9IChhLCBuKSA9PiBfdmVjX3RpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcblxuLyoqXG4gKiBBZGQgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhICsgYlxuICovXG5tYXQuYWRkID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgKyBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSAtIGJcbiAqL1xubWF0LnN1YiA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2IC0gYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBNdWx0aXBseSBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR8ZmFsc2V9IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgX3ZlY19kb3QobWF0LnJvdyhhLCBpKSwgbWF0LmNvbChiLCBqKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBNdWx0aXBseSBhIG1hdHJpeCBieSBhIHZlY3RvclxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7dmVjMnx2ZWMzfG51bWJlcltdfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWMyfHZlYzN8bnVtYmVyW118ZmFsc2V9IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggYW5kIHZlY3RvciBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsdiA9IChhLCBiKSA9PiB7XG4gIGxldCBuLCBiYiwgcnQ7XG4gIGlmIChfdmVjX2lzX3ZlYzMoYikpIHtcbiAgICBiYiA9IHZlYzMuY29tcG9uZW50cyhiKTtcbiAgICBuID0gMztcbiAgICBydCA9IHZlYzMuZnJvbUNvbXBvbmVudHM7XG4gIH0gZWxzZSBpZiAoX3ZlY19pc192ZWMyKGIpKSB7XG4gICAgYmIgPSB2ZWMyLmNvbXBvbmVudHMoYik7XG4gICAgbiA9IDI7XG4gICAgcnQgPSB2ZWMyLmZyb21Db21wb25lbnRzO1xuICB9IGVsc2Uge1xuICAgIGJiID0gYjtcbiAgICBuID0gYi5sZW5ndGggPz8gMDtcbiAgICBydCA9IHYgPT4gdjtcbiAgfVxuICBpZiAoYS5uICE9PSBuKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChfdmVjX2RvdChtYXQucm93KGEsIGkpLCBiYikpO1xuICB9XG4gIHJldHVybiBydChyZXN1bHQpO1xufVxuXG4vKipcbiAqIFNjYWxlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcbiAqL1xubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XG5cbi8qKlxuICogVHJhbnNwb3NlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XG4gKi9cbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCBfdmVjX3RpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBlbnRyaWVzID0gW107XG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcmV0dXJuIHtudW1iZXJ8ZmFsc2V9IHxhfCBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0LmRldCA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChhLm0gPT09IDEpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xuICB9XG4gIGlmIChhLm0gPT09IDIpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xuICB9XG4gIGxldCB0b3RhbCA9IDAsIHNpZ24gPSAxO1xuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgIHRvdGFsICs9IHNpZ24gKiBhLmVudHJpZXNbaiAtIDFdICogbWF0LmRldChtYXQubWlub3IoYSwgMSwgaikpO1xuICAgIHNpZ24gKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHttYXR8ZmFsc2V9IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8ZmFsc2V9IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxuICovXG5tYXQuaW52ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xuXG4vKipcbiAqIENvcHkgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcbiAqL1xubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxuJykgPT4gX3ZlY19jaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjMiwgdmVjMywgbWF0LCBpc1ZlYzIsIGlzVmVjMywgaXNNYXQgfTtcbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgU2NlbmVJbWFnZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNvcHlTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvY29weS5mcmFnLmdsc2wnKTtcbmltcG9ydCBxdWFkU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3F1YWQudmVydC5nbHNsJyk7XG5cbmV4cG9ydCB0eXBlIEdsUHJvZ3JhbSA9IHtcbiAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xuICB1bmlmb3JtczogUmVjb3JkPHN0cmluZywgV2ViR0xVbmlmb3JtTG9jYXRpb24+O1xufTtcblxuZXhwb3J0IHR5cGUgR2xSZW5kZXJUYXJnZXQgPSB7XG4gIHRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgZnJhbWVidWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XG4gIHNpemU6IHZlYzI7XG59O1xuXG4vKipcbiAqIEEgV2ViR0wgY29udGV4dCB0aGF0IGNhbiBiZSBzaGFyZWQgYnkgYW55dGhpbmcgcmVuZGVyaW5nIHBhcnQgb2YgYSBzY2VuZVxuICpcbiAqIFRleHR1cmVzIGNhbid0IGJlIHNoYXJlZCBiZXR3ZWVuIGNvbnRleHRzLCBzbyBzaGFyaW5nIGEgY29udGV4dCBtZWFucyB0aGF0XG4gKiB0aGUgb3V0cHV0IG9mIG9uZSBwYXNzIGNhbiBiZSB1c2VkIGJ5IGFub3RoZXIgd2l0aG91dCBjb3B5aW5nIGl0IHRocm91Z2ggYVxuICogY2FudmFzLlxuICpcbiAqIEV2ZXJ5dGhpbmcgaW4gdGhlIGNvbnRleHQgaXMgbG9zdCB3aGVuIHRoZSBjb250ZXh0IGlzIGxvc3QsIHNvIGFueXRoaW5nIHVzaW5nXG4gKiB0aGlzIHNob3VsZCBjcmVhdGUgaXRzIHByb2dyYW1zIGFuZCB0ZXh0dXJlcyBpbiBhbiBgb25Jbml0aWFsaXNlKClgIGNhbGxiYWNrLlxuICogVGhlIG1ldGhvZHMgaGVyZSBzaG91bGQgb25seSBiZSB1c2VkIGZyb20gdGhhdCBjYWxsYmFjaywgb3Igd2hpbGUgYGF2YWlsYWJsZWBcbiAqIGlzIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEdsQ29udGV4dCB7XG4gIC8qKlxuICAgKiBUaGUgdGV4dHVyZSB1bml0IHVzZWQgZm9yIGltYWdlcyB0aGF0IGFyZSBvbmx5IG5lZWRlZCBmb3IgYSBzaW5nbGUgZHJhd1xuICAgKlxuICAgKiBXZWJHTCBndWFyYW50ZWVzIDggdGV4dHVyZSB1bml0cywgdGhpcyBpcyB0aGUgbGFzdCBvZiB0aGVtXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElNQUdFX1VOSVQgPSA3O1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IG9mIHRoZSBtb3N0IHJlY2VudCBwYXNzXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGNvcHlQcm9ncmFtOiBHbFByb2dyYW07XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlQ2FsbGJhY2tzOiAoKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpID0+IHZvaWQpW10gPSBbXTtcblxuICAvKipcbiAgICogSW1hZ2VzIG9ubHkgbmVlZCB0byBiZSB1cGxvYWRlZCBvbmNlLCBidXQgY2FudmFzZXMgbWlnaHQgY2hhbmdlXG4gICAqL1xuICBwcml2YXRlIGltYWdlVGV4dHVyZXMgPSBuZXcgV2Vha01hcDxTY2VuZUltYWdlLCBXZWJHTFRleHR1cmU+KCk7XG4gIHByaXZhdGUgdXBsb2FkZWRDYW52YXNlcyA9IG5ldyBTZXQ8U2NlbmVJbWFnZT4oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0bG9zdCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsICgpID0+XG4gICAgICB0aGlzLmluaXRpYWxpc2UoKVxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgY29udGV4dCBjYW4gYmUgdXNlZFxuICAgKi9cbiAgcHVibGljIGdldCBhdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2wgIT09IG51bGwgJiYgIXRoaXMuZ2wuaXNDb250ZXh0TG9zdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdGhhdCBzZXRzIHVwIHByb2dyYW1zIGFuZCB0ZXh0dXJlc1xuICAgKlxuICAgKiBUaGlzIGlzIGNhbGxlZCBzdHJhaWdodCBhd2F5IGlmIHRoZSBjb250ZXh0IGlzIHJlYWR5LCBhbmQgYWdhaW4gd2hlbmV2ZXJcbiAgICogdGhlIGNvbnRleHQgaXMgcmVzdG9yZWRcbiAgICovXG4gIHB1YmxpYyBvbkluaXRpYWxpc2UoY2FsbGJhY2s6IChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5pbml0aWFsaXNlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgaWYgKHRoaXMuZ2wpIHtcbiAgICAgIGNhbGxiYWNrKHRoaXMuZ2wpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmdsID0gbnVsbDtcblxuICAgIGNvbnN0IGdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCB7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG4gICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgZGVwdGg6IGZhbHNlLFxuICAgICAgc3RlbmNpbDogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKCFnbCkge1xuICAgICAgY29uc29sZS53YXJuKCdXZWJHTCBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29weVByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oY29weVNoYWRlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignV2ViR0wgaGFzIGJlZW4gZGlzYWJsZWQnLCBlKTtcbiAgICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW1hZ2VUZXh0dXJlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgZ2wuY3JlYXRlQnVmZmVyKCkpO1xuICAgIGdsLmJ1ZmZlckRhdGEoXG4gICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxXSksXG4gICAgICBnbC5TVEFUSUNfRFJBV1xuICAgICk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigwLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0wsIGdsLk5PTkUpO1xuXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgPSAwO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZ2wpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcGlsZVNoYWRlcih0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpITtcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgIGlmIChcbiAgICAgICFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykgJiZcbiAgICAgICFnbC5pc0NvbnRleHRMb3N0KClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikgPz8gJ1VuYWJsZSB0byBjb21waWxlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBwcm9ncmFtIGZyb20gYSBmcmFnbWVudCBzaGFkZXIsIHRoaXMgd2lsbCB1c2UgdGhlIHF1YWQgdmVydGV4XG4gICAqIHNoYWRlciBzbyBpdCBjYW4gYmUgZHJhd24gd2l0aCBgZHJhd1F1YWQoKWBcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVQcm9ncmFtKGZyYWdtZW50U291cmNlOiBzdHJpbmcpOiBHbFByb2dyYW0ge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKSE7XG5cbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdGhpcy5jb21waWxlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIsIHF1YWRTaGFkZXIpKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIoXG4gICAgICBwcm9ncmFtLFxuICAgICAgdGhpcy5jb21waWxlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTb3VyY2UpXG4gICAgKTtcbiAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgMCwgJ2FfY29ybmVyJyk7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICBpZiAoXG4gICAgICAhZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykgJiZcbiAgICAgICFnbC5pc0NvbnRleHRMb3N0KClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSA/PyAnVW5hYmxlIHRvIGxpbmsnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmlmb3JtczogR2xQcm9ncmFtWyd1bmlmb3JtcyddID0ge307XG4gICAgY29uc3QgY291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaSkhO1xuICAgICAgdW5pZm9ybXNbbmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkhO1xuICAgIH1cblxuICAgIHJldHVybiB7IHByb2dyYW0sIHVuaWZvcm1zIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGV4dHVyZSB0aGF0IGNhbiBiZSByZW5kZXJlZCBpbnRvLCB0aGlzIHdpbGwgbmVlZCB0byBiZSBnaXZlbiBhXG4gICAqIHNpemUgdXNpbmcgYHJlc2l6ZVRhcmdldCgpYFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlbmRlclRhcmdldCgpOiBHbFJlbmRlclRhcmdldCB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZXh0dXJlOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgZnJhbWVidWZmZXI6IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCkhLFxuICAgICAgc2l6ZTogdmVjMigpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIHRleHR1cmUgYW5kIHNldCBpdHMgZmlsdGVyaW5nXG4gICAqL1xuICBwdWJsaWMgYmluZFRleHR1cmUodW5pdDogbnVtYmVyLCB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsIGZpbHRlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZmlsdGVyKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiBhIHRleHR1cmUgd2l0aCBhbiBpbWFnZVxuICAgKi9cbiAgcHVibGljIHVwbG9hZChcbiAgICB1bml0OiBudW1iZXIsXG4gICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlLFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKHVuaXQsIHRleHR1cmUsIGZpbHRlcik7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhbiBpbWFnZSB0byBgSU1BR0VfVU5JVGAsIHVwbG9hZGluZyBpdCBpZiB3ZSBoYXZlbid0IHNlZW4gaXQgYmVmb3JlXG4gICAqL1xuICBwdWJsaWMgYmluZEltYWdlKGltYWdlOiBTY2VuZUltYWdlLCBmaWx0ZXI6IG51bWJlcikge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICBsZXQgdGV4dHVyZSA9IHRoaXMuaW1hZ2VUZXh0dXJlcy5nZXQoaW1hZ2UpO1xuICAgIGNvbnN0IGlzTmV3ID0gdGV4dHVyZSA9PT0gdW5kZWZpbmVkO1xuICAgIGlmICghdGV4dHVyZSkge1xuICAgICAgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgICB0aGlzLmltYWdlVGV4dHVyZXMuc2V0KGltYWdlLCB0ZXh0dXJlKTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKEdsQ29udGV4dC5JTUFHRV9VTklULCB0ZXh0dXJlLCBmaWx0ZXIpO1xuXG4gICAgY29uc3QgaXNTdGFsZSA9XG4gICAgICBpbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50ICYmICF0aGlzLnVwbG9hZGVkQ2FudmFzZXMuaGFzKGltYWdlKTtcbiAgICBpZiAoaXNOZXcgfHwgaXNTdGFsZSkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgaW1hZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnVwbG9hZGVkQ2FudmFzZXMuYWRkKGltYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FudmFzZXMgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZXkgd2VyZSBsYXN0IHVzZWQsIHNvIGBiaW5kSW1hZ2UoKWBcbiAgICogc2hvdWxkIHVwbG9hZCB0aGVtIGFnYWluXG4gICAqL1xuICBwdWJsaWMgaW52YWxpZGF0ZUNhbnZhc2VzKCkge1xuICAgIHRoaXMudXBsb2FkZWRDYW52YXNlcy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc2l6ZSBvZiBhIHRleHR1cmUgdGhhdCB3ZSdyZSByZW5kZXJpbmcgaW50b1xuICAgKi9cbiAgcHVibGljIHJlc2l6ZVRhcmdldCh0YXJnZXQ6IEdsUmVuZGVyVGFyZ2V0LCBzaXplOiB2ZWMyKSB7XG4gICAgaWYgKHRhcmdldC5zaXplLnggPT09IHNpemUueCAmJiB0YXJnZXQuc2l6ZS55ID09PSBzaXplLnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgdGFyZ2V0LnNpemUgPSB2ZWMyLmNweShzaXplKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmUoR2xDb250ZXh0LklNQUdFX1VOSVQsIHRhcmdldC50ZXh0dXJlLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIDAsXG4gICAgICBnbC5SR0JBLFxuICAgICAgc2l6ZS54LFxuICAgICAgc2l6ZS55LFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgbnVsbFxuICAgICk7XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoXG4gICAgICBnbC5GUkFNRUJVRkZFUixcbiAgICAgIGdsLkNPTE9SX0FUVEFDSE1FTlQwLFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIHRhcmdldC50ZXh0dXJlLFxuICAgICAgMFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBvdXRwdXQgbWF0Y2hlcyB0aGUgc2NyZWVuIHNpemVcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID09PSBzY3JlZW4ueCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IHNjcmVlbi55KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBzY3JlZW4ueDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBzY3JlZW4ueTtcbiAgICB0aGlzLmdsIS52aWV3cG9ydCgwLCAwLCBzY3JlZW4ueCwgc2NyZWVuLnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBxdWFkIGNvdmVyaW5nIHBhcnQgb2YgdGhlIHNjcmVlblxuICAgKi9cbiAgcHVibGljIGRyYXdRdWFkKFxuICAgIHsgdW5pZm9ybXMgfTogR2xQcm9ncmFtLFxuICAgIHNjcmVlblJlY3RhbmdsZTogbnVtYmVyW10sXG4gICAgd29ybGRSZWN0YW5nbGU6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdLFxuICAgIG1hc2tSZWN0YW5nbGU6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICBnbC51bmlmb3JtNGZ2KHVuaWZvcm1zLnVfc2NyZWVuUmVjdGFuZ2xlLCBzY3JlZW5SZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV93b3JsZFJlY3RhbmdsZSwgd29ybGRSZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV9tYXNrUmVjdGFuZ2xlLCBtYXNrUmVjdGFuZ2xlKTtcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgdGV4dHVyZSBvdmVyIHRoZSB3aG9sZSBzY3JlZW4sIHJlcGxhY2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZVxuICAgKi9cbiAgcHVibGljIGRyYXdUZXh0dXJlKHRleHR1cmU6IFdlYkdMVGV4dHVyZSwgc2NyZWVuOiB2ZWMyKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb3B5UHJvZ3JhbTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZihwcm9ncmFtLnVuaWZvcm1zLnVfc2NyZWVuLCBzY3JlZW4ueCwgc2NyZWVuLnkpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfZmxpcFksIDEpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZShHbENvbnRleHQuSU1BR0VfVU5JVCwgdGV4dHVyZSwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudV9pbWFnZSwgR2xDb250ZXh0LklNQUdFX1VOSVQpO1xuXG4gICAgdGhpcy5kcmF3UXVhZChwcm9ncmFtLCBbMCwgMCwgc2NyZWVuLngsIHNjcmVlbi55XSk7XG5cbiAgICAvLyBBIHRleHR1cmUgY2FuJ3Qgc3RheSBib3VuZCB3aGlsZSB3ZSdyZSByZW5kZXJpbmcgaW50byBpdFxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHbENvbnRleHQgfSBmcm9tICcuL0dsQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7IEdsUHJvZ3JhbSwgR2xSZW5kZXJUYXJnZXQgfSBmcm9tICcuL0dsQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7XG4gIENvbG91cixcbiAgRnJhbWUsXG4gIEludGVydmFsMWQsXG4gIEludGVydmFsMmQsXG4gIFJlY3RhbmdsZSxcbiAgU2NlbmVDYW1lcmEsXG4gIFNjZW5lSW1hZ2UsXG59IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IHtcbiAgYm91bmRpbmdSZWN0YW5nbGUsXG4gIGNvbG91clRvU3RyaW5nLFxuICBkcmF3SW1hZ2VJblJlY3RhbmdsZSxcbiAgaW50ZXJ2YWxUb1JlY3RhbmdsZSxcbiAgbGVycENvbG91cixcbiAgbWF4VmVjLFxuICBtaW5WZWMsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxuICBzcHJpdGVCb3VuZHMsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcbiIsImltcG9ydCB0eXBlIHsgU3ByaXRlIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2Uvc3ByaXRlJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IENvbG91ciwgSW50ZXJ2YWwyZCwgUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5pbXVtIG9mIGEgc2V0IG9mIHZlY3RvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pblZlYyguLi52ZWN0b3JzOiB2ZWMyW10pOiB2ZWMyIHtcbiAgcmV0dXJuIHZlY3RvcnMucmVkdWNlKFxuICAgIChtaW4sIHYpID0+IHZlYzIoTWF0aC5taW4obWluLngsIHYueCksIE1hdGgubWluKG1pbi55LCB2LnkpKSxcbiAgICB2ZWMyKEluZmluaXR5LCBJbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1heGltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4VmVjKC4uLnZlY3RvcnM6IHZlYzJbXSk6IHZlYzIge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1heCwgdikgPT4gdmVjMihNYXRoLm1heChtYXgueCwgdi54KSwgTWF0aC5tYXgobWF4LnksIHYueSkpLFxuICAgIHZlYzIoLUluZmluaXR5LCAtSW5maW5pdHkpXG4gICk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzbWFsbGVzdCByZWN0YW5nbGUgdGhhdCBjb250YWlucyAyIHJlY3RhbmdsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kaW5nUmVjdGFuZ2xlKGE6IFJlY3RhbmdsZSwgYjogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgY29uc3QgcG9zaXRpb24gPSBtaW5WZWMoYS5wb3NpdGlvbiwgYi5wb3NpdGlvbik7XG4gIGNvbnN0IGJvdHRvbVJpZ2h0ID0gbWF4VmVjKFxuICAgIHZlYzIuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSksXG4gICAgdmVjMi5hZGQoYi5wb3NpdGlvbiwgYi5zaXplKVxuICApO1xuXG4gIHJldHVybiB7IHBvc2l0aW9uLCBzaXplOiB2ZWMyLnN1Yihib3R0b21SaWdodCwgcG9zaXRpb24pIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIGNvbG91ciBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvdXJUb1N0cmluZyhjb2xvdXI6IENvbG91cik6IHN0cmluZyB7XG4gIHJldHVybiBgcmdiYSgke2NvbG91ci5yfSwgJHtjb2xvdXIuZ30sICR7Y29sb3VyLmJ9LCAke2NvbG91ci5hfSlgO1xufVxuXG4vKipcbiAqIExpbmVhciBpbnRlcnBvbGF0ZSBiZXR3ZWVuIDIgY29sb3Vyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycENvbG91cihhOiBDb2xvdXIsIGI6IENvbG91ciwgaTogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgcjogbGVycChhLnIsIGIuciwgaSksXG4gICAgZzogbGVycChhLmcsIGIuZywgaSksXG4gICAgYjogbGVycChhLmIsIGIuYiwgaSksXG4gICAgYTogbGVycChhLmEsIGIuYSwgaSksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIDJkIGludGVydmFsIHRvIGEgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbFRvUmVjdGFuZ2xlKGludGVydmFsOiBJbnRlcnZhbDJkKTogUmVjdGFuZ2xlIHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogdmVjMihpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC50b3ApLFxuICAgIHNpemU6IHZlYzIoaW50ZXJ2YWwucmlnaHQgLSBpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC5ib3R0b20gLSBpbnRlcnZhbC50b3ApLFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByZWN0YW5nbGUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IEludGVydmFsMmQge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgIHJpZ2h0OiByZWN0YW5nbGUucG9zaXRpb24ueCArIHJlY3RhbmdsZS5zaXplLngsXG4gICAgdG9wOiByZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICBib3R0b206IHJlY3RhbmdsZS5wb3NpdGlvbi55ICsgcmVjdGFuZ2xlLnNpemUueSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiAyIEFBQkJzIGludGVyc2VjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlc0ludGVyc2VjdChhOiBSZWN0YW5nbGUsIGI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xuICBjb25zdCB0bDEgPSBhLnBvc2l0aW9uO1xuICBjb25zdCBicjEgPSB2ZWMyLmFkZChhLnBvc2l0aW9uLCBhLnNpemUpO1xuICBjb25zdCB0bDIgPSBiLnBvc2l0aW9uO1xuICBjb25zdCBicjIgPSB2ZWMyLmFkZChiLnBvc2l0aW9uLCBiLnNpemUpO1xuXG4gIHJldHVybiB0bDEueCA8IGJyMi54ICYmIGJyMS54ID4gdGwyLnggJiYgdGwxLnkgPCBicjIueSAmJiBicjEueSA+IHRsMi55O1xufVxuXG4vKipcbiAqIEdldCBhbiBhcnJheSBvZiB2ZXJ0aWNlcyBmb3IgYSByZWN0YW5nbGUgaW4gQ1cgd2luZGluZyBvcmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVmVydGljZXMocmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB2ZWMyW10ge1xuICBjb25zdCB0bCA9IHJlY3RhbmdsZS5wb3NpdGlvbjtcbiAgY29uc3QgYnIgPSB2ZWMyLmFkZChyZWN0YW5nbGUucG9zaXRpb24sIHJlY3RhbmdsZS5zaXplKTtcblxuICByZXR1cm4gW3JlY3RhbmdsZS5wb3NpdGlvbiwgdmVjMihici54LCB0bC55KSwgYnIsIHZlYzIodGwueCwgYnIueSldO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYXJlYSBjb3ZlcmVkIGJ5IGEgc3ByaXRlJ3MgY3VycmVudCBmcmFtZSwgdGhpcyBtYXRjaGVzIHdoZXJlXG4gKiBgU3ByaXRlLmRyYXcoKWAgcHV0cyB0aGUgaW1hZ2UgKGlmIHRoZSBzcHJpdGUgaXNuJ3Qgcm90YXRlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwcml0ZUJvdW5kcyhzcHJpdGU6IFNwcml0ZSk6IFJlY3RhbmdsZSB7XG4gIGNvbnN0IHsgaW1hZ2UgfSA9IHNwcml0ZTtcbiAgY29uc3Qgc2l6ZSA9IGltYWdlID8gdmVjMihpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KSA6IHNwcml0ZS5zaXplO1xuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHZlYzIuc3ViKHNwcml0ZS5wb3NpdGlvbiwgdmVjMi5tdWwoc3ByaXRlLm9yaWdpbiwgc3ByaXRlLnNjYWxlKSksXG4gICAgc2l6ZTogdmVjMi5tdWwoc2l6ZSwgc3ByaXRlLnNjYWxlKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuIGltYWdlIGludG8gYSByZWN0YW5nbGUsIGVpdGhlciByZXBlYXRpbmcgaXQgb3Igc3RyZXRjaGluZyBpdCB0byBmaXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdJbWFnZUluUmVjdGFuZ2xlKFxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIGltYWdlOiBTY2VuZUltYWdlLFxuICByZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgcmVwZWF0OiBib29sZWFuXG4pIHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gcmVjdGFuZ2xlO1xuXG4gIGlmICghcmVwZWF0KSB7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCAncmVwZWF0Jyk7XG4gIGlmIChwYXR0ZXJuKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxufVxuIiwiZXhwb3J0IHR5cGUgeyBGcmFtZSB9IGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpZ2h0aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vcmVmbGVjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi93b3JsZCc7XG4iLCJpbXBvcnQgdHlwZSB7IFNwcml0ZSB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3Nwcml0ZSc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFJlY3RhbmdsZSwgc3ByaXRlQm91bmRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBDaXJjbGVDYXN0ZXIsXG4gIENpcmNsZUNhc3Rlck9wdGlvbnMsXG4gIFNwcml0ZUNhc3RlcixcbiAgU3ByaXRlQ2FzdGVyT3B0aW9ucyxcbn0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgV2FsbFJlY2VpdmVyLCBXYWxsUmVjZWl2ZXJPcHRpb25zIH0gZnJvbSAnLi9TdXJmYWNlJztcblxudHlwZSBBY3RvclNoYWRvd09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhlIGFyZWEgYXQgdGhlIGJvdHRvbSBvZiB0aGUgYWN0b3IgdGhhdCBjYXN0cyBhIHNoYWRvdyxcbiAgICogZGVmYXVsdHMgdG8gYSB0aGlyZCBvZiB0aGUgYWN0b3IncyBoZWlnaHRcbiAgICovXG4gIGZvb3RwcmludEhlaWdodD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdG9yU2hhZG93ID1cbiAgfCAnbm9uZSdcbiAgfCAnc3ByaXRlJ1xuICB8ICdjaXJjbGUnXG4gIHwgKEFjdG9yU2hhZG93T3B0aW9ucyAmIHsgdHlwZTogJ25vbmUnIH0pXG4gIHwgKEFjdG9yU2hhZG93T3B0aW9ucyAmIHsgdHlwZTogJ3Nwcml0ZScgfSAmIFBhcnRpYWw8XG4gICAgICAgIE9taXQ8U3ByaXRlQ2FzdGVyT3B0aW9ucywgJ3Bvc2l0aW9uJyB8ICdzaXplJz5cbiAgICAgID4pXG4gIHwgKEFjdG9yU2hhZG93T3B0aW9ucyAmIHsgdHlwZTogJ2NpcmNsZScgfSAmIFBhcnRpYWw8XG4gICAgICAgIE9taXQ8Q2lyY2xlQ2FzdGVyT3B0aW9ucywgJ3Bvc2l0aW9uJyB8ICdzaXplJz5cbiAgICAgID4pO1xuXG5leHBvcnQgdHlwZSBBY3Rvck9wdGlvbnMgPSBPbWl0PFdhbGxSZWNlaXZlck9wdGlvbnMsICdyZWNlaXZlTGlnaHQnPiAmIHtcbiAgLyoqXG4gICAqIFRoZSBzaGFkb3cgY2FzdCBieSB0aGlzIGFjdG9yLCB0aGUgZGVmYXVsdCBpcyBhIHN0cmV0Y2hlZCBzaWxob3VldHRlIG9mXG4gICAqIHRoZSBhY3RvcidzIGltYWdlXG4gICAqL1xuICBzaGFkb3c/OiBBY3RvclNoYWRvdztcbn07XG5cbmV4cG9ydCB0eXBlIFNwcml0ZUFjdG9yT3B0aW9ucyA9IE9taXQ8XG4gIEFjdG9yT3B0aW9ucyxcbiAgJ3Bvc2l0aW9uJyB8ICdzaXplJyB8ICdpbWFnZScgfCAnbWFzaycgfCAnbm9ybWFsTWFwJyB8ICdzcGVjdWxhck1hcCdcbj4gJiB7XG4gIC8qKlxuICAgKiBUaGUgc3ByaXRlIHRoYXQgdGhpcyBhY3RvciBmb2xsb3dzXG4gICAqXG4gICAqIFRoZSBhY3RvcidzIHBvc2l0aW9uLCBzaXplLCBhbmQgaW1hZ2VzIGNvbWUgZnJvbSB0aGUgc3ByaXRlIGV2ZXJ5IHRpbWUgdGhlXG4gICAqIHNjZW5lIGlzIHJlbmRlcmVkLiBOb3JtYWwgbWFwcyBhbmQgc3BlY3VsYXIgbWFwcyBjb21lIGZyb20gdGhlIHNwcml0ZSdzXG4gICAqIGBub3JtYWxgIGFuZCBgc3BlY3VsYXJgIGxheWVyc1xuICAgKi9cbiAgc3ByaXRlOiBTcHJpdGU7XG59O1xuXG4vKipcbiAqIEEgbW92aW5nIG9iamVjdCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBjYXN0cyBhIHNoYWRvd1xuICovXG5leHBvcnQgY2xhc3MgQWN0b3Ige1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0ZPT1RQUklOVF9TQ0FMRSA9IDEgLyAzO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NIQURPV19MRU5HVEhfU0NBTEUgPSAxLjMzO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBOT1JNQUxfTEFZRVIgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1BFQ1VMQVJfTEFZRVIgPSAnc3BlY3VsYXInO1xuXG4gIHB1YmxpYyByZWFkb25seSBzdXJmYWNlOiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSBjYXN0ZXI6IFNwcml0ZUNhc3RlciB8IENpcmNsZUNhc3RlciB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgcmVhZG9ubHkgc3ByaXRlOiBTcHJpdGUgfCBudWxsO1xuXG4gIHByaXZhdGUgbGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtO1xuICBwcml2YXRlIGZvb3RwcmludEhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFyZWEgY292ZXJlZCBieSBhIHNwcml0ZSdzIGN1cnJlbnQgZnJhbWUgYW5kIHRoZSBpbWFnZXMgZm9yIGl0XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBzcHJpdGVGcmFtZShzcHJpdGU6IFNwcml0ZSkge1xuICAgIGNvbnN0IHsgaW1hZ2UgfSA9IHNwcml0ZTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zcHJpdGVCb3VuZHMoc3ByaXRlKSxcbiAgICAgIGltYWdlLFxuICAgICAgbm9ybWFsTWFwOiBpbWFnZSAmJiBzcHJpdGUuZ2V0SW1hZ2UodW5kZWZpbmVkLCBBY3Rvci5OT1JNQUxfTEFZRVIpLFxuICAgICAgc3BlY3VsYXJNYXA6IGltYWdlICYmIHNwcml0ZS5nZXRJbWFnZSh1bmRlZmluZWQsIEFjdG9yLlNQRUNVTEFSX0xBWUVSKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc3ByaXRlIGFjdG9yIG9wdGlvbnMgaW50byB0aGUgZXF1aXZhbGVudCBhY3RvciBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZXNvbHZlT3B0aW9ucyhcbiAgICBvcHRpb25zOiBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnNcbiAgKTogQWN0b3JPcHRpb25zIHtcbiAgICBpZiAoISgnc3ByaXRlJyBpbiBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgY29uc3QgeyBzcHJpdGUsIC4uLmFjdG9yIH0gPSBvcHRpb25zO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjdG9yLFxuICAgICAgLi4uQWN0b3Iuc3ByaXRlRnJhbWUoc3ByaXRlKSxcbiAgICAgIGN1c3RvbURyYXc6IHtcbiAgICAgICAgaW1hZ2U6IGNvbnRleHQgPT4gc3ByaXRlLmRyYXcoY29udGV4dCksXG4gICAgICAgIC4uLmFjdG9yLmN1c3RvbURyYXcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgbGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLFxuICAgIGFjdG9yT3B0aW9uczogQWN0b3JPcHRpb25zIHwgU3ByaXRlQWN0b3JPcHRpb25zXG4gICkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBBY3Rvci5yZXNvbHZlT3B0aW9ucyhhY3Rvck9wdGlvbnMpO1xuICAgIGNvbnN0IHsgc2hhZG93ID0gJ3Nwcml0ZScsIC4uLnN1cmZhY2UgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgeyB0eXBlLCBmb290cHJpbnRIZWlnaHQsIC4uLmNhc3Rlck9wdGlvbnMgfSA9IChcbiAgICAgIHR5cGVvZiBzaGFkb3cgPT09ICdzdHJpbmcnID8geyB0eXBlOiBzaGFkb3cgfSA6IHNoYWRvd1xuICAgICkgYXMgRXhjbHVkZTxBY3RvclNoYWRvdywgc3RyaW5nPjtcblxuICAgIHRoaXMubGlnaHRpbmcgPSBsaWdodGluZztcbiAgICB0aGlzLnNwcml0ZSA9ICdzcHJpdGUnIGluIGFjdG9yT3B0aW9ucyA/IGFjdG9yT3B0aW9ucy5zcHJpdGUgOiBudWxsO1xuICAgIHRoaXMuZm9vdHByaW50SGVpZ2h0ID1cbiAgICAgIGZvb3RwcmludEhlaWdodCA/PyBvcHRpb25zLnNpemUueSAqIEFjdG9yLkRFRkFVTFRfRk9PVFBSSU5UX1NDQUxFO1xuXG4gICAgdGhpcy5zdXJmYWNlID0gbGlnaHRpbmcuYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgIG1lcmdlYWJsZTogZmFsc2UsXG4gICAgICBwcm9qZWN0U2hhZG93czogZmFsc2UsXG4gICAgICAuLi5zdXJmYWNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZm9vdHByaW50ID0gdGhpcy5mb290cHJpbnQob3B0aW9ucy5wb3NpdGlvbiwgb3B0aW9ucy5zaXplKTtcbiAgICBpZiAodHlwZSA9PT0gJ3Nwcml0ZScpIHtcbiAgICAgIGNvbnN0IHNoYWRvd0xlbmd0aCA9IG9wdGlvbnMuc2l6ZS55ICogQWN0b3IuREVGQVVMVF9TSEFET1dfTEVOR1RIX1NDQUxFO1xuXG4gICAgICB0aGlzLmNhc3RlciA9IGxpZ2h0aW5nLmFkZFNwcml0ZUNhc3Rlcih7XG4gICAgICAgIGltYWdlOiBvcHRpb25zLmltYWdlLFxuICAgICAgICBtaW5TaGFkb3dMZW5ndGg6IHNoYWRvd0xlbmd0aCxcbiAgICAgICAgbWF4U2hhZG93TGVuZ3RoOiBzaGFkb3dMZW5ndGgsXG4gICAgICAgIC4uLmNhc3Rlck9wdGlvbnMsXG4gICAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgdGhpcy5jYXN0ZXIgPSBsaWdodGluZy5hZGRDaXJjbGVDYXN0ZXIoe1xuICAgICAgICAuLi5jYXN0ZXJPcHRpb25zLFxuICAgICAgICAuLi5mb290cHJpbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29rIGZvciBzaGFkb3dzIGZyb20gZmFyIGVub3VnaCBhd2F5IHRvIGF2b2lkIG91ciBvd24gc2hhZG93XG4gICAgaWYgKHRoaXMuY2FzdGVyICYmIG9wdGlvbnMuc2hhZG93QmlhcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN1cmZhY2Uuc2hhZG93QmlhcyA9IHRoaXMuY2FzdGVyQmlhcyh0aGlzLmNhc3Rlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGlzdGFuY2UgdGhhdCBhIGNhc3RlcidzIHNoYWRvdyByZWFjaGVzIGJhY2sgdG93YXJkcyB0aGUgbGlnaHRcbiAgICovXG4gIHByaXZhdGUgY2FzdGVyQmlhcyhjYXN0ZXI6IFNwcml0ZUNhc3RlciB8IENpcmNsZUNhc3Rlcik6IG51bWJlciB7XG4gICAgaWYgKGNhc3RlciBpbnN0YW5jZW9mIFNwcml0ZUNhc3Rlcikge1xuICAgICAgY29uc3QgbGVuZ3RoID0gY2FzdGVyLm1heFNoYWRvd0xlbmd0aCA/PyBjYXN0ZXIubWluU2hhZG93TGVuZ3RoO1xuXG4gICAgICByZXR1cm4gbGVuZ3RoICogKDEgLSBjYXN0ZXIub2Zmc2V0LnkpICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoY2FzdGVyLnNpemUueCwgY2FzdGVyLnNpemUueSkgLyAyICsgMTtcbiAgfVxuXG4gIHByaXZhdGUgZm9vdHByaW50KHBvc2l0aW9uOiB2ZWMyLCBzaXplOiB2ZWMyKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIHNpemUueSAtIHRoaXMuZm9vdHByaW50SGVpZ2h0KSxcbiAgICAgIHNpemU6IHZlYzIoc2l6ZS54LCB0aGlzLmZvb3RwcmludEhlaWdodCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBjdXJyZW50IHBvc2l0aW9uLCBzaXplLCBhbmQgaW1hZ2VzIGZyb20gdGhpcyBhY3RvcidzIHNwcml0ZSwgdGhpc1xuICAgKiBpcyBjYWxsZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSBzY2VuZSBpcyByZW5kZXJlZFxuICAgKi9cbiAgcHVibGljIHN5bmMoKSB7XG4gICAgaWYgKCF0aGlzLnNwcml0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYW1lID0gQWN0b3Iuc3ByaXRlRnJhbWUodGhpcy5zcHJpdGUpO1xuXG4gICAgdGhpcy5zdXJmYWNlLnNldChmcmFtZSk7XG4gICAgdGhpcy5jYXN0ZXI/LnNldCh0aGlzLmZvb3RwcmludChmcmFtZS5wb3NpdGlvbiwgZnJhbWUuc2l6ZSkpO1xuXG4gICAgaWYgKHRoaXMuY2FzdGVyIGluc3RhbmNlb2YgU3ByaXRlQ2FzdGVyKSB7XG4gICAgICB0aGlzLmNhc3Rlci5pbWFnZSA9IGZyYW1lLmltYWdlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgYWN0b3IgdG8gYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICpcbiAgICogSWYgdGhpcyBhY3RvciBoYXMgYSBzcHJpdGUgdGhlbiB0aGlzIHdpbGwgc2V0IHRoZSBzcHJpdGUncyBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjMikge1xuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdGhpcy5zcHJpdGUucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbik7XG4gICAgICB0aGlzLnN5bmMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN1cmZhY2UubW92ZVRvKHBvc2l0aW9uKTtcbiAgICB0aGlzLmNhc3Rlcj8ubW92ZVRvKHRoaXMuZm9vdHByaW50KHBvc2l0aW9uLCB0aGlzLnN1cmZhY2Uuc2l6ZSkucG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIGFjdG9yIGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnN1cmZhY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5jYXN0ZXI/LnJlbW92ZSgpO1xuICAgIHRoaXMubGlnaHRpbmcucmVtb3ZlKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IGJvdW5kaW5nUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBTY2VuZU9iamVjdCwgU2NlbmVPYmplY3RPcHRpb25zIH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5pbXBvcnQgeyBzaWxob3VldHRlIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBSZWdpb25DYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogU2hvdWxkIHNoYWRvd3MgaW5jbHVkZSB0aGUgcmVjdGFuZ3VsYXIgcmVnaW9uIG9mIHRoaXMgY2FzdGVyP1xuICAgKi9cbiAgaW5jbHVkZVJlZ2lvblNoYWRvdz86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgcG9seWdvbmFsIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFJlZ2lvbkNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PFJlZ2lvbkNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIGluY2x1ZGVSZWdpb25TaGFkb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBSZWdpb25DYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoaXMgY2FzdGVyIGNhbiBiZSBtZXJnZWQgd2l0aCBhbm90aGVyIGNhc3RlclxuICAgKi9cbiAgcHVibGljIGNhbk1lcmdlKG90aGVyOiBSZWdpb25DYXN0ZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tZXJnZWFibGUgJiZcbiAgICAgIG90aGVyLm1lcmdlYWJsZSAmJlxuICAgICAgdGhpcy5pbmNsdWRlUmVnaW9uU2hhZG93ID09PSBvdGhlci5pbmNsdWRlUmVnaW9uU2hhZG93XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY2FzdGVyIHRoYXQgY292ZXJzIHRoaXMgY2FzdGVyIGFuZCBhbm90aGVyIGNhc3RlclxuICAgKi9cbiAgcHVibGljIG1lcmdlKG90aGVyOiBSZWdpb25DYXN0ZXIpOiBSZWdpb25DYXN0ZXIge1xuICAgIHJldHVybiBuZXcgUmVnaW9uQ2FzdGVyKHRoaXMubGlnaHRpbmcsIHtcbiAgICAgIC4uLih0aGlzIGFzIFJlZ2lvbkNhc3RlciksXG4gICAgICAuLi5ib3VuZGluZ1JlY3RhbmdsZSh0aGlzLCBvdGhlciksXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3ByaXRlQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFRoZSBpbWFnZSB1c2VkIGZvciB0aGlzIGNhc3RlcidzIHNoYWRvdywgaXQgc2hvdWxkIGJlIGJsYWNrIHdpdGggYW4gYWxwaGFcbiAgICogY2hhbm5lbFxuICAgKi9cbiAgc2hhZG93PzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIElmIGBzaGFkb3dgIGlzbid0IHNldCwgd2UnbGwgdXNlIHRoZSBzaWxob3VldHRlIG9mIHRoaXMgaW1hZ2UgaW5zdGVhZFxuICAgKi9cbiAgaW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogV2hlcmUgdGhlIHNoYWRvdyBiZWdpbnMsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNpemUgb2YgdGhpcyBjYXN0ZXIsIHdoZXJlXG4gICAqICgwLCAwKSBpcyB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCAoMSwgMSkgaXMgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXJcbiAgICovXG4gIGFuY2hvcj86IHZlYzI7XG5cbiAgLyoqXG4gICAqIE9mZnNldCB0aGUgc2hhZG93IGZyb20gdGhlIGFuY2hvciwgYXMgYSBmcmFjdGlvbiBvZiB0aGUgc2hhZG93IHNpemVcbiAgICovXG4gIG9mZnNldD86IHZlYzI7XG5cbiAgLyoqXG4gICAqIFNoYWRvdyBsZW5ndGggd2hlbiB0aGUgbGlnaHQgaXMgYXQgdGhlIGNlbnRlciBvZiB0aGlzIGNhc3RlclxuICAgKi9cbiAgbWluU2hhZG93TGVuZ3RoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaGFkb3cgbGVuZ3RoIHdoZW4gdGhpcyBjYXN0ZXIgaXMgYXQgdGhlIGVkZ2Ugb2YgdGhlIGxpZ2h0J3MgcmFkaXVzLCBvclxuICAgKiBudWxsIHRvIHVzZSB0aGUgbGlnaHQncyByYWRpdXNcbiAgICovXG4gIG1heFNoYWRvd0xlbmd0aD86IG51bWJlciB8IG51bGw7XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYSBzaGFkb3cgYnkgcm90YXRpbmcgYW5kIHN0cmV0Y2hpbmcgYW4gaW1hZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIFNwcml0ZUNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PFNwcml0ZUNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIHNoYWRvdzogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgaW1hZ2U6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGFuY2hvcjogdmVjMiA9IHZlYzIoMC41LCAwLjkpO1xuICBwdWJsaWMgb2Zmc2V0OiB2ZWMyID0gdmVjMigwLjUsIDAuOSk7XG4gIHB1YmxpYyBtaW5TaGFkb3dMZW5ndGg6IG51bWJlciA9IDY0O1xuICBwdWJsaWMgbWF4U2hhZG93TGVuZ3RoOiBudW1iZXIgfCBudWxsID0gNjQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogU3ByaXRlQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGltYWdlIGZvciB0aGlzIGNhc3RlcidzIHNoYWRvdywgaWYgaXQgaGFzIG9uZVxuICAgKi9cbiAgcHVibGljIGdldFNoYWRvdygpOiBTY2VuZUltYWdlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93ID8/ICh0aGlzLmltYWdlICYmIHNpbGhvdWV0dGUodGhpcy5pbWFnZSkpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENpcmNsZUNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgc2hhZG93IGlzIGNlbnRlcmVkLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBzaXplIG9mIHRoaXMgY2FzdGVyLFxuICAgKiB3aGVyZSAoMCwgMCkgaXMgdGhlIHRvcC1sZWZ0IGNvcm5lciBhbmQgKDEsIDEpIGlzIHRoZSBib3R0b20tcmlnaHQgY29ybmVyXG4gICAqL1xuICBhbmNob3I/OiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSBmcm9tIHRoZSBhbmNob3IgdG8gdGhlIHNoYWRvdyB3aGVuIHRoZSBsaWdodCBpcyBhdCB0aGUgY2VudGVyIG9mXG4gICAqIHRoaXMgY2FzdGVyXG4gICAqL1xuICBtaW5TaGFkb3dEaXN0YW5jZT86IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzdGFuY2UgZnJvbSB0aGUgYW5jaG9yIHRvIHRoZSBzaGFkb3cgd2hlbiB0aGlzIGNhc3RlciBpcyBhdCB0aGUgZWRnZSBvZlxuICAgKiB0aGUgbGlnaHQncyByYWRpdXMsIG9yIG51bGwgdG8gdXNlIHRoZSBsaWdodCdzIHJhZGl1c1xuICAgKi9cbiAgbWF4U2hhZG93RGlzdGFuY2U/OiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBPcGFjaXR5IG9mIHRoZSBzaGFkb3dcbiAgICovXG4gIGFscGhhPzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGFuIGVsbGlwdGljYWwgc2hhZG93XG4gKi9cbmV4cG9ydCBjbGFzcyBDaXJjbGVDYXN0ZXIgZXh0ZW5kcyBTY2VuZU9iamVjdDxDaXJjbGVDYXN0ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBhbmNob3I6IHZlYzIgPSB2ZWMyKDAuNSwgMC45KTtcbiAgcHVibGljIG1pblNoYWRvd0Rpc3RhbmNlOiBudW1iZXIgPSA1O1xuICBwdWJsaWMgbWF4U2hhZG93RGlzdGFuY2U6IG51bWJlciB8IG51bGwgPSAyMDtcbiAgcHVibGljIGFscGhhOiBudW1iZXIgPSAxO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IENpcmNsZUNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2hhZG93Q2FzdGVyID0gUmVnaW9uQ2FzdGVyIHwgU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyO1xuIiwiaW1wb3J0IHsgcGFyc2VDb2xvciB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3InO1xuaW1wb3J0IHsgYXQsIHNtb290aHN0ZXAsIHVubGVycCB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBjb2xvdXJUb1N0cmluZyxcbiAgUmVjdGFuZ2xlLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxuICByZWN0YW5nbGVUb0ludGVydmFsLFxuICByZWN0YW5nbGVWZXJ0aWNlcyxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBDaXJjbGVDYXN0ZXIsIFJlZ2lvbkNhc3RlciwgU3ByaXRlQ2FzdGVyIH0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgTGluZSwgUG9seWdvblZlcnRpY2VzLCBTZWN0b3IyZCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgbGluZUlzRmFjaW5nLCBwb2x5Z29uLCBzZWN0b3IyZCB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxuY29uc3QgSEFMRl9QSSA9IE1hdGguUEkgLyAyO1xuXG5leHBvcnQgdHlwZSBMaWdodE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXb3JsZCBwb3NpdGlvbiBvZiB0aGlzIGxpZ2h0XG4gICAqL1xuICBwb3NpdGlvbjogdmVjMjtcblxuICAvKipcbiAgICogUmFkaXVzIG9mIHRoaXMgbGlnaHQgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJhZGl1cz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ29sb3VyIG9mIHRoaXMgbGlnaHRcbiAgICovXG4gIGNvbG91cj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGZ1bGx5LWxpdCBhcmVhIGF0IHRoZSBjZW50ZXIgb2YgdGhpcyBsaWdodCwgYXMgYSBmcmFjdGlvblxuICAgKiBvZiB0aGUgcmFkaXVzXG4gICAqL1xuICBjb3JlUmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBCcmlnaHRuZXNzIG9mIHRoaXMgbGlnaHRcbiAgICovXG4gIGludGVuc2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogSGVpZ2h0IG9mIHRoaXMgbGlnaHQgYWJvdmUgdGhlIGdyb3VuZCwgdGhpcyBpcyB1c2VkIGZvciBzaGFkaW5nIG5vcm1hbCBtYXBzXG4gICAqIGFuZCBzcGVjdWxhciBtYXBzXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIGxpZ2h0IGNhc3Qgc2hhZG93cz9cbiAgICovXG4gIGNhc3RTaGFkb3dzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBMaWdodCB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfUkFESVVTID0gMTAwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPTE9VUiA9ICd3aGl0ZSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09SRV9SQURJVVMgPSAwLjI7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9DT1JFX1JBRElVUyA9IDAuOTk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSU5URU5TSVRZID0gMTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9IRUlHSFQgPSA0ODtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU0hBRE9XX0JVRkZFUiA9IDIwO1xuXG4gIHByaXZhdGUgbGlnaHRpbmdTeXN0ZW06IExpZ2h0aW5nU3lzdGVtO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjMjtcbiAgcHJpdmF0ZSBfcmFkaXVzOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbG91cjogc3RyaW5nO1xuICBwdWJsaWMgY29sb3VyT2JqZWN0OiBDb2xvdXI7XG4gIHByaXZhdGUgX2NvcmVSYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaW50ZW5zaXR5OiBudW1iZXI7XG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgcHVibGljIGNhc3RTaGFkb3dzOiBib29sZWFuO1xuXG4gIHB1YmxpYyBsaWdodENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgbGlnaHRDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgLyoqXG4gICAqIFdoaXRlIHdoZXJlIGxpZ2h0IHJlYWNoZXMgdGhlIGdyb3VuZCwgYW5kIGJsYWNrIGluIHRoZSBzaGFkb3dzIG9mIHJlZ2lvblxuICAgKiBjYXN0ZXJzXG4gICAqL1xuICBwdWJsaWMgcmVnaW9uU2hhZG93Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSByZWdpb25TaGFkb3dDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgLyoqXG4gICAqIFdoaXRlIHdoZXJlIGxpZ2h0IHJlYWNoZXMgdGhlIGdyb3VuZCwgYW5kIGJsYWNrIGluIHRoZSBzaGFkb3dzIG9mIHNwcml0ZVxuICAgKiBhbmQgY2lyY2xlIGNhc3RlcnNcbiAgICovXG4gIHB1YmxpYyBvYmplY3RTaGFkb3dDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIG9iamVjdFNoYWRvd0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwcml2YXRlIGRpcnR5ID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmdTeXN0ZW06IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBMaWdodE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtID0gbGlnaHRpbmdTeXN0ZW07XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5fcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgPz8gTGlnaHQuREVGQVVMVF9SQURJVVM7XG4gICAgdGhpcy5fY29sb3VyID0gb3B0aW9ucy5jb2xvdXIgPz8gTGlnaHQuREVGQVVMVF9DT0xPVVI7XG4gICAgdGhpcy5fY29yZVJhZGl1cyA9IG9wdGlvbnMuY29yZVJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX0NPUkVfUkFESVVTO1xuICAgIHRoaXMuX2ludGVuc2l0eSA9IG9wdGlvbnMuaW50ZW5zaXR5ID8/IExpZ2h0LkRFRkFVTFRfSU5URU5TSVRZO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgPz8gTGlnaHQuREVGQVVMVF9IRUlHSFQ7XG4gICAgdGhpcy5jYXN0U2hhZG93cyA9IG9wdGlvbnMuY2FzdFNoYWRvd3MgPz8gdHJ1ZTtcbiAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodGhpcy5fY29sb3VyKTtcblxuICAgIHRoaXMubGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuICAgIHRoaXMubGlnaHRDb250ZXh0ID0gdGhpcy5saWdodENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMucmVnaW9uU2hhZG93Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5yZWdpb25TaGFkb3dDb250ZXh0ID0gdGhpcy5yZWdpb25TaGFkb3dDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLm9iamVjdFNoYWRvd0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMub2JqZWN0U2hhZG93Q29udGV4dCA9IHRoaXMub2JqZWN0U2hhZG93Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgLyoqXG4gICAqIEJvdW5kaW5nIGJveCBmb3IgdGhpcyBsaWdodCwgaW5jbHVkaW5nIHRoZSBvZmZzZXQgd2FsbCBsaWdodG1hcHNcbiAgICovXG4gIHB1YmxpYyBnZXQgYm91bmRzKCk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3Qgd2FsbExpZ2h0aW5nWU9mZnNldCA9IHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuX3JhZGl1cyArIE1hdGgubWluKHdhbGxMaWdodGluZ1lPZmZzZXQsIDApXG4gICAgICApLFxuICAgICAgc2l6ZTogdmVjMihcbiAgICAgICAgdGhpcy5fcmFkaXVzICogMixcbiAgICAgICAgdGhpcy5fcmFkaXVzICogMiArIE1hdGguYWJzKHdhbGxMaWdodGluZ1lPZmZzZXQpXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFkaXVzO1xuICB9XG5cbiAgcHVibGljIHNldCByYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcmFkaXVzKSB7XG4gICAgICB0aGlzLl9yYWRpdXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvdXI7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvbG91cih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9jb2xvdXIpIHtcbiAgICAgIHRoaXMuX2NvbG91ciA9IHZhbHVlO1xuICAgICAgdGhpcy5jb2xvdXJPYmplY3QgPSBwYXJzZUNvbG9yKHZhbHVlKTtcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29yZVJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29yZVJhZGl1cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29yZVJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9jb3JlUmFkaXVzKSB7XG4gICAgICB0aGlzLl9jb3JlUmFkaXVzID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVuc2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW5zaXR5O1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5faW50ZW5zaXR5KSB7XG4gICAgICB0aGlzLl9pbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgbGlnaHQgdG8gYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzb21lIG9mIHRoZSBvcHRpb25zIGZvciB0aGlzIGxpZ2h0XG4gICAqL1xuICBwdWJsaWMgc2V0KG9wdGlvbnM6IFBhcnRpYWw8TGlnaHRPcHRpb25zPikge1xuICAgIGNvbnN0IHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgcmFkaXVzLFxuICAgICAgY29sb3VyLFxuICAgICAgY29yZVJhZGl1cyxcbiAgICAgIGludGVuc2l0eSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGNhc3RTaGFkb3dzLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uID8/IHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzID8/IHRoaXMucmFkaXVzO1xuICAgIHRoaXMuY29sb3VyID0gY29sb3VyID8/IHRoaXMuY29sb3VyO1xuICAgIHRoaXMuY29yZVJhZGl1cyA9IGNvcmVSYWRpdXMgPz8gdGhpcy5jb3JlUmFkaXVzO1xuICAgIHRoaXMuaW50ZW5zaXR5ID0gaW50ZW5zaXR5ID8/IHRoaXMuaW50ZW5zaXR5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ID8/IHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuY2FzdFNoYWRvd3MgPSBjYXN0U2hhZG93cyA/PyB0aGlzLmNhc3RTaGFkb3dzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIGxpZ2h0IGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlKFxuICAgIHJlZ2lvbkNhc3RlcnM6IFJlZ2lvbkNhc3RlcltdLFxuICAgIHNwcml0ZUNhc3RlcnM6IFNwcml0ZUNhc3RlcltdLFxuICAgIGNpcmNsZUNhc3RlcnM6IENpcmNsZUNhc3RlcltdXG4gICkge1xuICAgIC8vIElmIHRoZSBsaWdodCBzZXR0aW5ncyBoYXZlIGNoYW5nZWQsIHdlIG5lZWQgdG8gcmVkcmF3IHRoZSBiYXNlIGxpZ2h0bWFwXG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMucHJlcGFyZUxpZ2h0TWFwKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFNoYWRvd0NvbnRleHQodGhpcy5yZWdpb25TaGFkb3dDb250ZXh0KTtcbiAgICB0aGlzLnJlc2V0U2hhZG93Q29udGV4dCh0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQpO1xuXG4gICAgaWYgKHRoaXMuY2FzdFNoYWRvd3MpIHtcbiAgICAgIGNvbnN0IGxpZ2h0UmVjdGFuZ2xlID0gdGhpcy5ib3VuZHM7XG5cbiAgICAgIHRoaXMucHJlcGFyZVJlZ2lvblNoYWRvd3MobGlnaHRSZWN0YW5nbGUsIHJlZ2lvbkNhc3RlcnMpO1xuICAgICAgdGhpcy5wcmVwYXJlU3ByaXRlU2hhZG93cyhsaWdodFJlY3RhbmdsZSwgc3ByaXRlQ2FzdGVycyk7XG4gICAgICB0aGlzLnByZXBhcmVDaXJjbGVTaGFkb3dzKGxpZ2h0UmVjdGFuZ2xlLCBjaXJjbGVDYXN0ZXJzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIGEgc2hhZG93IGNhbnZhcyBtYXRjaGVzIHRoaXMgbGlnaHQncyBzaXplLCBhbmQgZmlsbCBpdCB3aXRoIHdoaXRlXG4gICAqIHNvIHRoYXQgbm90aGluZyBpcyBpbiBzaGFkb3dcbiAgICovXG4gIHByaXZhdGUgcmVzZXRTaGFkb3dDb250ZXh0KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLmZsb29yKHRoaXMuX3JhZGl1cyAqIDIpO1xuICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gc2l6ZSkge1xuICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIH1cblxuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID1cbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVMaWdodE1hcCgpIHtcbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxSZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoLFxuICAgICAgdGhpcy5saWdodENhbnZhcy5oZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgZ3JhZGllbnQgPSB0aGlzLmxpZ2h0Q29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyAqIE1hdGgubWluKHRoaXMuX2NvcmVSYWRpdXMsIExpZ2h0Lk1BWF9DT1JFX1JBRElVUyksXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXNcbiAgICApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcbiAgICAgIDAsXG4gICAgICBjb2xvdXJUb1N0cmluZyh7XG4gICAgICAgIC4uLnRoaXMuY29sb3VyT2JqZWN0LFxuICAgICAgICByOiB0aGlzLmNvbG91ck9iamVjdC5yICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgICBnOiB0aGlzLmNvbG91ck9iamVjdC5nICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgICBiOiB0aGlzLmNvbG91ck9iamVjdC5iICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgfSlcbiAgICApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnYmxhY2snKTtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmFyYyhcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIDAsXG4gICAgICBNYXRoLlBJICogMlxuICAgICk7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbCgpO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cblxuICBwcml2YXRlIHByZXBhcmVSZWdpb25TaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgcmVnaW9uQ2FzdGVyczogUmVnaW9uQ2FzdGVyW11cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMucmVnaW9uU2hhZG93Q29udGV4dDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3MoY29udGV4dCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArIHRoaXMuX3JhZGl1c1xuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IGNhc3RlciBvZiByZWdpb25DYXN0ZXJzKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXIpKSB7XG4gICAgICAgIHBvbHlnb24oXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAuLi50aGlzLnByZXBhcmVSZWdpb25TaGFkb3coY2FzdGVyLCBjYXN0ZXIuaW5jbHVkZVJlZ2lvblNoYWRvdylcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVTcHJpdGVTaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgc3ByaXRlQ2FzdGVyczogU3ByaXRlQ2FzdGVyW11cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMub2JqZWN0U2hhZG93Q29udGV4dDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyhjb250ZXh0KTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XG5cbiAgICBmb3IgKGNvbnN0IGNhc3RlciBvZiBzcHJpdGVDYXN0ZXJzKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXIpKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Nwcml0ZSA9IGNhc3Rlci5nZXRTaGFkb3coKTtcblxuICAgICAgICAvLyBJZiB0aGUgc2hhZG93IHNwcml0ZSBpcyBtaXNzaW5nIGZvciB0aGlzIGNhc3RlciB0aGVuIGl0IGRvZXNuJ3RcbiAgICAgICAgLy8gY2FzdCBhIHNoYWRvd1xuICAgICAgICBpZiAoIXNoYWRvd1Nwcml0ZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhZG93T3JpZ2luID0gdmVjMi5hZGQoXG4gICAgICAgICAgY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgIHZlYzIoY2FzdGVyLnNpemUueCAqIGNhc3Rlci5hbmNob3IueCwgY2FzdGVyLnNpemUueSAqIGNhc3Rlci5hbmNob3IueSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93TGVuZ3RoID0gc21vb3Roc3RlcChcbiAgICAgICAgICBjYXN0ZXIubWluU2hhZG93TGVuZ3RoLFxuICAgICAgICAgIGNhc3Rlci5tYXhTaGFkb3dMZW5ndGggPz8gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgdW5sZXJwKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgdmVjMi5sZW4odmVjMi5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0VkZ2UgPSB2ZWMyLm11bChcbiAgICAgICAgICB2ZWMyLm5vcih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKSxcbiAgICAgICAgICBzaGFkb3dMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RWRnZUxlbmd0aCA9IHZlYzIubGVuKHNoYWRvd0VkZ2UpO1xuICAgICAgICBjb25zdCBzaGFkb3dBbmdsZSA9IHZlYzIucmFkKHNoYWRvd0VkZ2UpICsgSEFMRl9QSTtcblxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnggLSB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnkgLSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUoc2hhZG93QW5nbGUpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBzaGFkb3dTcHJpdGUsXG4gICAgICAgICAgLWNhc3Rlci5zaXplLnggKiBjYXN0ZXIub2Zmc2V0LngsXG4gICAgICAgICAgLXNoYWRvd0VkZ2VMZW5ndGggKiBjYXN0ZXIub2Zmc2V0LnksXG4gICAgICAgICAgY2FzdGVyLnNpemUueCxcbiAgICAgICAgICBzaGFkb3dFZGdlTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlQ2lyY2xlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGNpcmNsZUNhc3RlcnM6IENpcmNsZUNhc3RlcltdXG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcblxuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIGNpcmNsZUNhc3RlcnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlcikpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93T3JpZ2luID0gdmVjMi5hZGQoXG4gICAgICAgICAgY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgIHZlYzIoY2FzdGVyLnNpemUueCAqIGNhc3Rlci5hbmNob3IueCwgY2FzdGVyLnNpemUueSAqIGNhc3Rlci5hbmNob3IueSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RGlzdGFuY2UgPSBzbW9vdGhzdGVwKFxuICAgICAgICAgIGNhc3Rlci5taW5TaGFkb3dEaXN0YW5jZSxcbiAgICAgICAgICBjYXN0ZXIubWF4U2hhZG93RGlzdGFuY2UgPz8gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgdW5sZXJwKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgdmVjMi5sZW4odmVjMi5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Bvc2l0aW9uID0gdmVjMi5tdWwoXG4gICAgICAgICAgdmVjMi5ub3IodmVjMi5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSksXG4gICAgICAgICAgc2hhZG93RGlzdGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93U2l6ZSA9IHZlYzIubXVsKGNhc3Rlci5zaXplLCAwLjUpO1xuXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gY2FzdGVyLmFscGhhO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueCAtIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueSAtIHRoaXMucG9zaXRpb24ueVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmVsbGlwc2UoXG4gICAgICAgICAgc2hhZG93UG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dQb3NpdGlvbi55LFxuICAgICAgICAgIHNoYWRvd1NpemUueCxcbiAgICAgICAgICBzaGFkb3dTaXplLnksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIE1hdGguUEkgKiAyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVJlZ2lvblNoYWRvdyhcbiAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBpbmNsdWRlQ2FzdGVyUmVnaW9uOiBib29sZWFuID0gZmFsc2VcbiAgKTogUG9seWdvblZlcnRpY2VzIHtcbiAgICBjb25zdCBsaWdodFBvc2l0aW9uID0gdmVjMi5jcHkodGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgbGlnaHRSYWRpdXMgPSB0aGlzLl9yYWRpdXM7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVyVmVydGljZXMgPSByZWN0YW5nbGVWZXJ0aWNlcyhzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpO1xuICAgIGNvbnN0IHNoYWRvd0VkZ2VzOiBMaW5lW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhZG93Q2FzdGVyVmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gYXQoc2hhZG93Q2FzdGVyVmVydGljZXMsIGkgLSAxKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzaGFkb3dDYXN0ZXJWZXJ0aWNlc1tpXTtcblxuICAgICAgaWYgKCFsaW5lSXNGYWNpbmcoeyBzdGFydDogcHJldmlvdXMsIGVuZDogY3VycmVudCB9LCB0aGlzLnBvc2l0aW9uKSkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXgxID0gdmVjMi5zdWIocHJldmlvdXMsIGxpZ2h0UG9zaXRpb24pO1xuICAgICAgICBjb25zdCB2ZXJ0ZXgyID0gdmVjMi5zdWIoY3VycmVudCwgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIHNoYWRvd0VkZ2VzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHByZXZpb3VzLFxuICAgICAgICAgICAgZW5kOiB2ZWMyLmFkZChcbiAgICAgICAgICAgICAgcHJldmlvdXMsXG4gICAgICAgICAgICAgIHZlYzIubXVsKFxuICAgICAgICAgICAgICAgIHZlYzIubm9yKHZlcnRleDEpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYzIubGVuKHZlcnRleDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IGN1cnJlbnQsXG4gICAgICAgICAgICBlbmQ6IHZlYzIuYWRkKFxuICAgICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgICB2ZWMyLm11bChcbiAgICAgICAgICAgICAgICB2ZWMyLm5vcih2ZXJ0ZXgyKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIgLSB2ZWMyLmxlbih2ZXJ0ZXgyKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hhZG93UG9seWdvbjogUG9seWdvblZlcnRpY2VzID0gW107XG4gICAgc3dpdGNoIChzZWN0b3IyZCh0aGlzLnBvc2l0aW9uLCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCkpIHtcbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMV0uZW5kLCBzaGFkb3dFZGdlc1sxXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMl0uZW5kLCBzaGFkb3dFZGdlc1syXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICB2ZWMyKFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueCArIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5zaXplLngsXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5lbmRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1sxXS5lbmQueCwgc2hhZG93RWRnZXNbMl0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuSW5zaWRlOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5SaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s0XS5lbmQsIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNF0uZW5kLCBzaGFkb3dFZGdlc1s0XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzNdLmVuZCwgc2hhZG93RWRnZXNbM10uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbM10uZW5kLngsIHNoYWRvd0VkZ2VzWzBdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgdmVjMihcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi55ICsgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUueVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzNdLmVuZC54LCBzaGFkb3dFZGdlc1swXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b206XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbVJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICB2ZWMyLmFkZChzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24sIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5zaXplKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZG93UG9seWdvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VDb2xvciB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3InO1xuaW1wb3J0IHsgZmxvYXRFcXVhbHMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgR2xDb250ZXh0LFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICBsZXJwQ29sb3VyLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxuICBTY2VuZUNhbWVyYSxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBBY3RvciwgQWN0b3JPcHRpb25zLCBTcHJpdGVBY3Rvck9wdGlvbnMgfSBmcm9tICcuL0FjdG9yJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgUmVnaW9uQ2FzdGVyLFxuICBSZWdpb25DYXN0ZXJPcHRpb25zLFxuICBTcHJpdGVDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB7IExpZ2h0LCBMaWdodE9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9tZXJnZSc7XG5pbXBvcnQgeyBTY2VuZU9iamVjdCB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgU2hhZGVyUGFzcywgU2hhZGVyU3VyZmFjZSB9IGZyb20gJy4vU2hhZGVyUGFzcyc7XG5pbXBvcnQge1xuICBHcm91bmRSZWNlaXZlcixcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBTdXJmYWNlLFxuICBXYWxsUmVjZWl2ZXIsXG4gIFdhbGxSZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgeyBXYWxsLCBXYWxsT3B0aW9ucyB9IGZyb20gJy4vV2FsbCc7XG5cbmV4cG9ydCB0eXBlIExpZ2h0aW5nU3lzdGVtT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBsaWdodGluZyBiZSBhcHBsaWVkIHRvIHRoZSBzY2VuZT9cbiAgICpcbiAgICogSWYgdGhpcyBpcyBmYWxzZSB0aGVuIHRoZSBzY2VuZSB3aWxsIGJlIGRyYXduIHdpdGhvdXQgYW55IGxpZ2h0aW5nLCBhbmRcbiAgICogV2ViR0wgd29uJ3QgYmUgdXNlZFxuICAgKi9cbiAgbGlnaHRpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgaW1hZ2Ugc21vb3RoaW5nIGJlIGVuYWJsZWQ/XG4gICAqXG4gICAqIFNldCB0aGlzIHRvIGZhbHNlIGZvciBwaXhlbCBhcnQgc3R5bGVcbiAgICovXG4gIGltYWdlU21vb3RoaW5nRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdWxkIHNvZnQgc2hhZG93cyBiZSBlbmFibGVkP1xuICAgKlxuICAgKiBUaGlzIHdpbGwgb25seSBhcHBseSBpZiBzb2Z0U2hhZG93c0Ftb3VudCBpcyA+IDBcbiAgICovXG4gIHNvZnRTaGFkb3dzRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQW1vdW50IG9mIHNvZnQgc2hhZG93cyB0byBhcHBseVxuICAgKlxuICAgKiBTZXQgdGhpcyB0byAwIHRvIGRpc2FibGUgc29mdCBzaGFkb3dzXG4gICAqL1xuICBzb2Z0U2hhZG93c0Ftb3VudDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgbm9ybWFsIG1hcHMgYW5kIHNwZWN1bGFyIG1hcHMgYmUgdXNlZD9cbiAgICovXG4gIHN1cmZhY2VNYXBzRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3RyZW5ndGggb2YgaGlnaGxpZ2h0cyBmcm9tIG5vcm1hbCBtYXBzXG4gICAqL1xuICBzaGFkZXJIaWdobGlnaHRTdHJlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdHJlbmd0aCBvZiBzaGFkaW5nIGZyb20gbm9ybWFsIG1hcHNcbiAgICovXG4gIHNoYWRlclNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0cmVuZ3RoIG9mIHNwZWN1bGFyIGhpZ2hsaWdodHNcbiAgICovXG4gIHNoYWRlclNwZWN1bGFyU3RyZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogU2l6ZSBvZiBzcGVjdWxhciBoaWdobGlnaHRzLCBsYXJnZXIgbnVtYmVycyBtYWtlIHNtYWxsZXIgaGlnaGxpZ2h0c1xuICAgKi9cbiAgc2hhZGVyU2hpbmluZXNzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhlIGNhbWVyYSBpcyB0aWx0ZWQgYXdheSBmcm9tIGxvb2tpbmcgc3RyYWlnaHQgZG93biwgdGhpcyBtb3Zlc1xuICAgKiBzcGVjdWxhciBoaWdobGlnaHRzIHRvd2FyZHMgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXG4gICAqL1xuICBzaGFkZXJWaWV3VGlsdDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBRdWFudGl6ZSBzaGFkaW5nIGludG8gYmFuZHMgb2YgdGhpcyBzaXplLCBzZXQgdGhpcyB0byAwIGZvciBzbW9vdGggc2hhZGluZ1xuICAgKi9cbiAgc2hhZGVyQmFuZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiBhbWJpZW50IChnbG9iYWwpIGxpZ2h0IHdoZW4gZmFjaW5nIGF3YXkgZnJvbSB0aGUgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodCB3aGVuIGZhY2luZyB0b3dhcmRzIHRoZSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiBvZiBhbWJpZW50IGxpZ2h0IGluIHJhZGlhbnNcbiAgICovXG4gIGFtYmllbnRMaWdodERpcmVjdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBvZmZzZXQgZm9yIHdhbGwgbGlnaHRpbmdcbiAgICovXG4gIHdhbGxMaWdodGluZ1lPZmZzZXQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzdGFuY2UgYWJvdmUgYm90dG9tIGVkZ2Ugb2Ygd2FsbCBzaGFkb3cgcmVjZWl2ZXJzIGJlZm9yZSBsaWdodCBpc1xuICAgKiB0b3RhbGx5IGN1dCBvZmZcbiAgICovXG4gIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgc3ByaXRlIGFuZCBjaXJjbGUgc2hhZG93cyBjbGltYiB3YWxscywgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGVuZ3RoXG4gICAqIG9mIHRoZSBzaGFkb3cgdGhhdCByZWFjaGVzIHRoZSB3YWxsXG4gICAqL1xuICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgTGlnaHRpbmdTeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucyA9IHtcbiAgICBsaWdodGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0cnVlLFxuICAgIHNvZnRTaGFkb3dzRW5hYmxlZDogZmFsc2UsXG4gICAgc29mdFNoYWRvd3NBbW91bnQ6IDIsXG4gICAgc3VyZmFjZU1hcHNFbmFibGVkOiB0cnVlLFxuICAgIHNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoOiAwLjUsXG4gICAgc2hhZGVyU2hhZG93U3RyZW5ndGg6IDAuNSxcbiAgICBzaGFkZXJTcGVjdWxhclN0cmVuZ3RoOiAxLFxuICAgIHNoYWRlclNoaW5pbmVzczogMTYsXG4gICAgc2hhZGVyVmlld1RpbHQ6IDAuNSxcbiAgICBzaGFkZXJCYW5kaW5nOiAwLjEsXG4gICAgYW1iaWVudExpZ2h0Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiAwLFxuICAgIHdhbGxMaWdodGluZ1lPZmZzZXQ6IC0zMCxcbiAgICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogMjAsXG4gICAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogMC43NSxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyBjcmVhdGVDb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY29tcGFyZVN1cmZhY2VzKGE6IFN1cmZhY2U8YW55PiwgYjogU3VyZmFjZTxhbnk+KTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS56SW5kZXggLSBiLnpJbmRleCB8fCBhLnBvc2l0aW9uLnkgKyBhLnNpemUueSAtIChiLnBvc2l0aW9uLnkgKyBiLnNpemUueSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9wdGlvbnM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucztcblxuICBwdWJsaWMgbGlnaHRzOiBMaWdodFtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBtb3N0IHJlY2VudGx5IHJlbmRlcmVkIHNjcmVlblxuICAgKi9cbiAgcHVibGljIHNjcmVlbjogdmVjMiA9IHZlYzIoKTtcblxuICBwcml2YXRlIGdyb3VuZFJlY2VpdmVyczogR3JvdW5kUmVjZWl2ZXJbXSA9IFtdO1xuICBwcml2YXRlIHdhbGxSZWNlaXZlcnM6IFdhbGxSZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgcmVnaW9uQ2FzdGVyczogUmVnaW9uQ2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBzcHJpdGVDYXN0ZXJzOiBTcHJpdGVDYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIGNpcmNsZUNhc3RlcnM6IENpcmNsZUNhc3RlcltdID0gW107XG4gIHByaXZhdGUgYWN0b3JzOiBBY3RvcltdID0gW107XG5cbiAgcHJpdmF0ZSBsaWdodE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBsaWdodE1hcENhbnZhcyA9IHRoaXMubGlnaHRNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNwZWN1bGFyTGlnaHRNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc3BlY3VsYXJMaWdodE1hcENhbnZhcyA9IHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc2NlbmVOb3JtYWxNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc2NlbmVOb3JtYWxNYXBDYW52YXMgPSB0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzY2VuZVNwZWN1bGFyTWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNjZW5lU3BlY3VsYXJNYXBDYW52YXMgPSB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIGdsQ29udGV4dDogR2xDb250ZXh0IHwgbnVsbDtcbiAgcHJpdmF0ZSBzaGFkZXJQYXNzOiBTaGFkZXJQYXNzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3BlY3VsYXJWaXNpYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGBnbENvbnRleHRgIGxldHMgdGhlIGxpZ2h0aW5nIHN5c3RlbSBzaGFyZSBhIFdlYkdMIGNvbnRleHQgd2l0aCBvdGhlclxuICAgKiBzeXN0ZW1zLCBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgaXRzIG93blxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPExpZ2h0aW5nU3lzdGVtT3B0aW9ucz4sXG4gICAgZ2xDb250ZXh0PzogR2xDb250ZXh0XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIExpZ2h0aW5nU3lzdGVtLkRFRkFVTFRfT1BUSU9OUyxcbiAgICAgIG9wdGlvbnMgPz8ge31cbiAgICApO1xuICAgIHRoaXMuZ2xDb250ZXh0ID0gZ2xDb250ZXh0ID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGFyZWEgb2YgZ3JvdW5kIHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRHcm91bmQob3B0aW9uczogR3JvdW5kUmVjZWl2ZXJPcHRpb25zKTogR3JvdW5kUmVjZWl2ZXIge1xuICAgIGNvbnN0IGdyb3VuZCA9IG5ldyBHcm91bmRSZWNlaXZlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycy5wdXNoKGdyb3VuZCk7XG5cbiAgICByZXR1cm4gZ3JvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNvbGlkIHdhbGwsIG1hZGUgZnJvbSBhIGxpdCBmcm9udCBmYWNlLCBhbiB1bmxpdCB0b3AsIGFuZCBhIGZvb3RwcmludFxuICAgKiB0aGF0IGNhc3RzIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsKG9wdGlvbnM6IFdhbGxPcHRpb25zKTogV2FsbCB7XG4gICAgcmV0dXJuIG5ldyBXYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1vdmluZyBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgY2FzdHMgYSBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRBY3RvcihvcHRpb25zOiBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnMpOiBBY3RvciB7XG4gICAgY29uc3QgYWN0b3IgPSBuZXcgQWN0b3IodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5hY3RvcnMucHVzaChhY3Rvcik7XG5cbiAgICByZXR1cm4gYWN0b3I7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRMaWdodChvcHRpb25zOiBMaWdodE9wdGlvbnMpOiBMaWdodCB7XG4gICAgY29uc3QgbGlnaHQgPSBuZXcgTGlnaHQodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XG5cbiAgICByZXR1cm4gbGlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIG9yIHNwcml0ZSB0aGF0IHJlY2VpdmVzIHdhbGwgc2hhZG93c1xuICAgKlxuICAgKiBUaGlzIGlzIHdoYXQgYGFkZFdhbGwoKWAgYW5kIGBhZGRBY3RvcigpYCB1c2UgdG8gY3JlYXRlIHRoZWlyIHN1cmZhY2VzXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbFJlY2VpdmVyKG9wdGlvbnM6IFdhbGxSZWNlaXZlck9wdGlvbnMpOiBXYWxsUmVjZWl2ZXIge1xuICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbFJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5wdXNoKHdhbGwpO1xuXG4gICAgcmV0dXJuIHdhbGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgcG9seWdvbmFsIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRSZWdpb25DYXN0ZXIob3B0aW9uczogUmVnaW9uQ2FzdGVyT3B0aW9ucyk6IFJlZ2lvbkNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IFJlZ2lvbkNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnJlZ2lvbkNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhIHJvdGF0ZWQgYW5kIHN0cmV0Y2hlZCBpbWFnZSBhcyBhIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZFNwcml0ZUNhc3RlcihvcHRpb25zOiBTcHJpdGVDYXN0ZXJPcHRpb25zKTogU3ByaXRlQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgU3ByaXRlQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuc3ByaXRlQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGFuIGVsbGlwdGljYWwgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkQ2lyY2xlQ2FzdGVyKG9wdGlvbnM6IENpcmNsZUNhc3Rlck9wdGlvbnMpOiBDaXJjbGVDYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBDaXJjbGVDYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5jaXJjbGVDYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIG9iamVjdCBvciBsaWdodCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUob2JqZWN0OiBTY2VuZU9iamVjdDxhbnk+IHwgTGlnaHQgfCBBY3Rvcikge1xuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBMaWdodCkge1xuICAgICAgdGhpcy5saWdodHMgPSB0aGlzLmxpZ2h0cy5maWx0ZXIobGlnaHQgPT4gbGlnaHQgIT09IG9iamVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEFjdG9yKSB7XG4gICAgICB0aGlzLmFjdG9ycyA9IHRoaXMuYWN0b3JzLmZpbHRlcihhY3RvciA9PiBhY3RvciAhPT0gb2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycyA9IHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzID0gdGhpcy53YWxsUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gdGhpcy5yZWdpb25DYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5zcHJpdGVDYXN0ZXJzID0gdGhpcy5zcHJpdGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5jaXJjbGVDYXN0ZXJzID0gdGhpcy5jaXJjbGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2Ugd2FsbCByZWNlaXZlcnMgYW5kIHJlZ2lvbiBjYXN0ZXJzIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXJcbiAgICogYW5kIHBlcmZlY3RseSBjb25uZWN0ZWQgb24gb25lIHNpZGUsIHNvIHRoYXQgdGhlcmUgYXJlIGZld2VyIHRvIHByb2Nlc3NcbiAgICpcbiAgICogTWVyZ2VkIG9iamVjdHMgYXJlIHJlbW92ZWQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtIGFuZCBjYW4ndCBiZSBtb3ZlZFxuICAgKiBhZnRlcndhcmRzLCBzbyB0aGlzIGlzIGludGVuZGVkIGZvciBsZXZlbCBnZW9tZXRyeS4gU2V0IGBtZXJnZWFibGVgIHRvXG4gICAqIGZhbHNlIG9uIGFuIG9iamVjdCB0byBleGNsdWRlIGl0XG4gICAqXG4gICAqIGBvbk1lcmdlYCBpcyBjYWxsZWQgZWFjaCB0aW1lIDIgb2JqZWN0cyBhcmUgcmVwbGFjZWQgd2l0aCBhIHNpbmdsZSBvYmplY3QuXG4gICAqIElmIHRoZSBvYmplY3RzIHdlcmUgZHVwbGljYXRlcywgdGhlIG1lcmdlZCBvYmplY3QgaXMgdGhlIGZpcnN0IG9iamVjdFxuICAgKi9cbiAgcHVibGljIG9wdGltaXNlKFxuICAgIG9uTWVyZ2U/OiAoXG4gICAgICBtZXJnZWQ6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGE6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGI6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlclxuICAgICkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSBtZXJnZTxXYWxsUmVjZWl2ZXI+KHRoaXMud2FsbFJlY2VpdmVycywgb25NZXJnZSk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gbWVyZ2U8UmVnaW9uQ2FzdGVyPih0aGlzLnJlZ2lvbkNhc3RlcnMsIG9uTWVyZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hhZGVyIHBhc3MsIGlmIGl0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwcml2YXRlIGdldFNoYWRlclBhc3MoKTogU2hhZGVyUGFzcyB8IG51bGwge1xuICAgIHRoaXMuc2hhZGVyUGFzcyA/Pz0gbmV3IFNoYWRlclBhc3ModGhpcy5nbENvbnRleHQgPz8gbmV3IEdsQ29udGV4dCgpKTtcblxuICAgIHJldHVybiB0aGlzLnNoYWRlclBhc3MuYXZhaWxhYmxlID8gdGhpcy5zaGFkZXJQYXNzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzY3JlZW4tc2l6ZWQgY2FudmFzIG1hdGNoZXMgdGhlIHNjcmVlbiBzaXplIGFuZCBjbGVhciBpdFxuICAgKi9cbiAgcHJpdmF0ZSByZXNldENvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gdGhpcy5zY3JlZW4ueCB8fCBjYW52YXMuaGVpZ2h0ICE9PSB0aGlzLnNjcmVlbi55KSB7XG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLnNjcmVlbi54O1xuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuc2NyZWVuLnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIGxpdCBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKlxuICAgKiBJZiBgZHJhd1NjZW5lYCBpcyBwcm92aWRlZCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIHRvIGRyYXcgdGhlIHNjZW5lIHdpdGhcbiAgICogdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZCwgb3RoZXJ3aXNlIHdlJ2xsIGRyYXcgYWxsIG9mIHRoZSBzdXJmYWNlc1xuICAgKiB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBjYW1lcmE6IFNjZW5lQ2FtZXJhLFxuICAgIGRyYXdTY2VuZT86IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWRcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gICAgaWYgKGRyYXdTY2VuZSkge1xuICAgICAgZHJhd1NjZW5lKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdTdXJmYWNlcyhjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLnByZXBhcmUoY2FtZXJhLCB2ZWMyKGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpKTtcbiAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhbGwgb2YgdGhlIHN1cmZhY2VzIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyBkcmF3U3VyZmFjZXMoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3R3JvdW5kKGNvbnRleHQpO1xuICAgIHRoaXMuZHJhd1dhbGxzKGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIGdyb3VuZCwgdGhpcyBpcyB0aGUgcGFydCBvZiB0aGUgc2NlbmUgdGhhdCdzIHVuZGVybmVhdGggZXZlcnl0aGluZ1xuICAgKiBlbHNlXG4gICAqL1xuICBwdWJsaWMgZHJhd0dyb3VuZChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4gZ3JvdW5kLmRyYXcoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHdhbGxzIGFuZCBhY3RvcnMgdGhhdCBzdGFuZCBvbiB0aGUgZ3JvdW5kXG4gICAqL1xuICBwdWJsaWMgZHJhd1dhbGxzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMudXBkYXRlU3VyZmFjZXMoKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZHJhdyhjb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHN1cmZhY2VzIGFyZSB1cCB0byBkYXRlIGFuZCBpbiBkcmF3aW5nIG9yZGVyLCBhY3RvcnMgY29tZSBmaXJzdFxuICAgKiBiZWNhdXNlIG1vdmluZyBhbiBhY3RvciBjYW4gY2hhbmdlIHRoZSBvcmRlclxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVTdXJmYWNlcygpIHtcbiAgICB0aGlzLmFjdG9ycy5mb3JFYWNoKGFjdG9yID0+IGFjdG9yLnN5bmMoKSk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuc29ydChMaWdodGluZ1N5c3RlbS5jb21wYXJlU3VyZmFjZXMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5zb3J0KExpZ2h0aW5nU3lzdGVtLmNvbXBhcmVTdXJmYWNlcyk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbGlnaHRtYXBzIGZvciByZW5kZXJpbmdcbiAgICpcbiAgICogSWYgV2ViR0wgaXNuJ3QgYXZhaWxhYmxlIHRoZW4gbGlnaHRtYXBzIGFyZSBsZWZ0IGFzIHRoZXkgYXJlLCBzbyB0aGUgc2NlbmVcbiAgICoga2VlcHMgaXRzIGxhc3QgbGlnaHRpbmcgd2hlbiB0aGUgY29udGV4dCBpcyBsb3N0IGFuZCB0aGVuIHJlc3RvcmVkXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZShjYW1lcmE6IFNjZW5lQ2FtZXJhLCBzY3JlZW46IHZlYzIpIHtcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5saWdodGluZ0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZXJQYXNzID0gdGhpcy5nZXRTaGFkZXJQYXNzKCk7XG4gICAgaWYgKCFzaGFkZXJQYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhUmVjdGFuZ2xlID0gaW50ZXJ2YWxUb1JlY3RhbmdsZShjYW1lcmEuYm91bmRzKTtcbiAgICBjb25zdCBzdXJmYWNlcyA9IFsuLi50aGlzLmdyb3VuZFJlY2VpdmVycywgLi4udGhpcy53YWxsUmVjZWl2ZXJzXS5maWx0ZXIoXG4gICAgICBzdXJmYWNlID0+IHJlY3RhbmdsZXNJbnRlcnNlY3Qoc3VyZmFjZSwgY2FtZXJhUmVjdGFuZ2xlKVxuICAgICk7XG5cbiAgICBjb25zdCB7IHN1cmZhY2VNYXBzRW5hYmxlZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGhhc05vcm1hbE1hcHMgPVxuICAgICAgc3VyZmFjZU1hcHNFbmFibGVkICYmXG4gICAgICBzdXJmYWNlcy5zb21lKFxuICAgICAgICBzdXJmYWNlID0+IHN1cmZhY2Uubm9ybWFsTWFwIHx8IHN1cmZhY2UuY3VzdG9tRHJhdy5ub3JtYWxNYXBcbiAgICAgICk7XG4gICAgY29uc3QgaGFzU3BlY3VsYXJNYXBzID1cbiAgICAgIHN1cmZhY2VNYXBzRW5hYmxlZCAmJlxuICAgICAgc3VyZmFjZXMuc29tZShcbiAgICAgICAgc3VyZmFjZSA9PiBzdXJmYWNlLnNwZWN1bGFyTWFwIHx8IHN1cmZhY2UuY3VzdG9tRHJhdy5zcGVjdWxhck1hcFxuICAgICAgKTtcblxuICAgIGlmIChoYXNOb3JtYWxNYXBzKSB7XG4gICAgICB0aGlzLmRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmEsIHN1cmZhY2VzKTtcbiAgICB9XG4gICAgaWYgKGhhc1NwZWN1bGFyTWFwcykge1xuICAgICAgdGhpcy5kcmF3U2NlbmVTcGVjdWxhck1hcChjYW1lcmEsIHN1cmZhY2VzKTtcbiAgICB9XG5cbiAgICAvLyBMaWdodHMgb3V0c2lkZSB0aGUgY2FtZXJhIGJvdW5kcyBjYW4ndCBhZmZlY3QgdGhlIHZpc2libGUgc2NlbmVcbiAgICBjb25zdCB2aXNpYmxlTGlnaHRzID0gdGhpcy5saWdodHMuZmlsdGVyKGxpZ2h0ID0+XG4gICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0LmJvdW5kcywgY2FtZXJhUmVjdGFuZ2xlKVxuICAgICk7XG5cbiAgICB2aXNpYmxlTGlnaHRzLmZvckVhY2gobGlnaHQgPT5cbiAgICAgIGxpZ2h0LnByZXBhcmUodGhpcy5yZWdpb25DYXN0ZXJzLCB0aGlzLnNwcml0ZUNhc3RlcnMsIHRoaXMuY2lyY2xlQ2FzdGVycylcbiAgICApO1xuXG4gICAgc2hhZGVyUGFzcy5yZW5kZXIoe1xuICAgICAgY2FtZXJhLFxuICAgICAgc2NyZWVuLFxuICAgICAgbGlnaHRzOiB2aXNpYmxlTGlnaHRzLFxuICAgICAgc3VyZmFjZXM6IHRoaXMuY2FsY3VsYXRlQW1iaWVudExpZ2h0cyhzdXJmYWNlcyksXG4gICAgICBub3JtYWxNYXA6IGhhc05vcm1hbE1hcHMgPyB0aGlzLnNjZW5lTm9ybWFsTWFwQ2FudmFzIDogbnVsbCxcbiAgICAgIHNwZWN1bGFyTWFwOiBoYXNTcGVjdWxhck1hcHMgPyB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDYW52YXMgOiBudWxsLFxuICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgd2FsbExpZ2h0aW5nWU9mZnNldDogdGhpcy5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXQsXG4gICAgICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogdGhpcy5vcHRpb25zLndhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlLFxuICAgICAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogdGhpcy5vcHRpb25zLndhbGxTaGFkb3dMZW5ndGhGYWN0b3IsXG4gICAgICBoaWdobGlnaHRTdHJlbmd0aDogdGhpcy5vcHRpb25zLnNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJTaGFkb3dTdHJlbmd0aCxcbiAgICAgIHNwZWN1bGFyU3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJTcGVjdWxhclN0cmVuZ3RoLFxuICAgICAgc2hpbmluZXNzOiB0aGlzLm9wdGlvbnMuc2hhZGVyU2hpbmluZXNzLFxuICAgICAgdmlld1RpbHQ6IHRoaXMub3B0aW9ucy5zaGFkZXJWaWV3VGlsdCxcbiAgICAgIGJhbmRpbmc6IHRoaXMub3B0aW9ucy5zaGFkZXJCYW5kaW5nLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5saWdodE1hcENvbnRleHQpO1xuICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShzaGFkZXJQYXNzLmNhbnZhcywgMCwgMCk7XG5cbiAgICB0aGlzLnNwZWN1bGFyVmlzaWJsZSA9IGhhc1NwZWN1bGFyTWFwcztcbiAgICBpZiAoaGFzU3BlY3VsYXJNYXBzKSB7XG4gICAgICBzaGFkZXJQYXNzLnNob3dTcGVjdWxhcihzY3JlZW4pO1xuXG4gICAgICAvLyBIaWdobGlnaHRzIGNhbiBvbmx5IGFwcGVhciBvbiB0aGUgc3VyZmFjZXMgaW4gdGhlIGxpZ2h0IG1hcFxuICAgICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LnNhdmUoKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHNoYWRlclBhc3MuY2FudmFzLCAwLCAwKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyBzaG93aW5nIHdoaWNoIHN1cmZhY2UgaXMgYXQgZWFjaCBwaXhlbCwgZm9yIGRlYnVnZ2luZ1xuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBkcmF3biBzdHJhaWdodCBhd2F5LCBiZWNhdXNlIHRoZSBjYW52YXMgaXMgcmV1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0U3VyZmFjZU1hcENhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgdGhpcy5zaGFkZXJQYXNzPy5zaG93U3VyZmFjZXModGhpcy5zY3JlZW4pO1xuXG4gICAgcmV0dXJuIHRoaXMuc2hhZGVyUGFzcz8uY2FudmFzID8/IHRoaXMubGlnaHRNYXBDYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgYW1iaWVudCBsaWdodCBvbiBlYWNoIHN1cmZhY2VcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlQW1iaWVudExpZ2h0cyhzdXJmYWNlczogU3VyZmFjZTxhbnk+W10pOiBTaGFkZXJTdXJmYWNlW10ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZlYzIucm90KHZlYzIoMSwgMCksIHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHREaXJlY3Rpb24pO1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IHBhcnNlQ29sb3IodGhpcy5vcHRpb25zLmFtYmllbnRMaWdodENvbG91cik7XG4gICAgY29uc3Qgc2hhZG93ID0gcGFyc2VDb2xvcih0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyKTtcbiAgICBjb25zdCBoaWdobGlnaHQgPSBwYXJzZUNvbG9yKHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXIpO1xuXG4gICAgcmV0dXJuIHN1cmZhY2VzLm1hcChzdXJmYWNlID0+ICh7XG4gICAgICBzdXJmYWNlLFxuICAgICAgYW1iaWVudExpZ2h0OlxuICAgICAgICBzdXJmYWNlIGluc3RhbmNlb2YgV2FsbFJlY2VpdmVyXG4gICAgICAgICAgPyB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICAgICAgICAgICAgc3VyZmFjZS5zdXJmYWNlTm9ybWFsLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgIGFtYmllbnRMaWdodCxcbiAgICAgICAgICAgICAgc2hhZG93LFxuICAgICAgICAgICAgICBoaWdobGlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGFtYmllbnRMaWdodCxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3R1YWwgY29sb3VyIG9mIGFtYmllbnQgbGlnaHQgYmFzZWQgb24gdGhlIHN1cmZhY2Ugbm9ybWFsXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICBzdXJmYWNlTm9ybWFsOiB2ZWMyLFxuICAgIGFtYmllbnRMaWdodERpcmVjdGlvbjogdmVjMixcbiAgICBhbWJpZW50TGlnaHQ6IENvbG91cixcbiAgICBhbWJpZW50TGlnaHRTaGFkb3c6IENvbG91cixcbiAgICBhbWJpZW50TGlnaHRIaWdobGlnaHQ6IENvbG91clxuICApOiBDb2xvdXIge1xuICAgIGlmICh2ZWMyLmVxKHN1cmZhY2VOb3JtYWwsIHZlYzIoKSkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgZG90ID0gdmVjMi5kb3QodmVjMi5ub3Ioc3VyZmFjZU5vcm1hbCksIGFtYmllbnRMaWdodERpcmVjdGlvbik7XG4gICAgaWYgKGZsb2F0RXF1YWxzKGRvdCwgMCkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGRvdCA8IDApIHtcbiAgICAgIHJldHVybiBsZXJwQ29sb3VyKGFtYmllbnRMaWdodCwgYW1iaWVudExpZ2h0SGlnaGxpZ2h0LCAtZG90KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVycENvbG91cihhbWJpZW50TGlnaHQsIGFtYmllbnRMaWdodFNoYWRvdywgZG90KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgc29mdCBzaGFkb3cgc2V0dGluZ3Mgb24gdGhlIHNwZWNpZmllZCBjYW52YXMgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHNldHVwU29mdFNoYWRvd3MoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzRW5hYmxlZCAmJlxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnYmxhY2snO1xuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50O1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsYXkgdGhlIGxpZ2h0bWFwIG9udG8gdGhlIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmxpZ2h0aW5nRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgYWZ0ZXJ3YXJkcyBzbyB0aGF0IHRoZXkgY2FuIGJlIGJyaWdodGVyXG4gICAgLy8gdGhhbiB0aGUgc2NlbmUgdW5kZXJuZWF0aCB0aGVtXG4gICAgaWYgKHRoaXMuc3BlY3VsYXJWaXNpYmxlKSB7XG4gICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3BlY3VsYXJMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBub3JtYWwgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmE6IFNjZW5lQ2FtZXJhLCBzdXJmYWNlczogU3VyZmFjZTxhbnk+W10pIHtcbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dCk7XG4gICAgdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcblxuICAgIHN1cmZhY2VzLmZvckVhY2goc3VyZmFjZSA9PiB7XG4gICAgICBzdXJmYWNlLmRyYXdOb3JtYWxNYXAodGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgc3BlY3VsYXIgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZVNwZWN1bGFyTWFwKFxuICAgIGNhbWVyYTogU2NlbmVDYW1lcmEsXG4gICAgc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdXG4gICkge1xuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuXG4gICAgc3VyZmFjZXMuZm9yRWFjaChzdXJmYWNlID0+IHtcbiAgICAgIHN1cmZhY2UuZHJhd1NwZWN1bGFyTWFwKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuXG5leHBvcnQgdHlwZSBTY2VuZU9iamVjdE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXb3JsZCBwb3NpdGlvbiBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoaXMgb2JqZWN0XG4gICAqL1xuICBwb3NpdGlvbjogdmVjMjtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGlzIG9iamVjdCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgc2l6ZTogdmVjMjtcblxuICAvKipcbiAgICogQ2FuIHRoaXMgb2JqZWN0IGJlIG1lcmdlZCB3aXRoIGl0cyBuZWlnaGJvdXJzIGJ5XG4gICAqIGBMaWdodGluZ1N5c3RlbS5vcHRpbWlzZSgpYD9cbiAgICovXG4gIG1lcmdlYWJsZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgd2l0aCBhIGBMaWdodGluZ1N5c3RlbWBcbiAqXG4gKiBUaGVzZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgYExpZ2h0aW5nU3lzdGVtLmFkZC4uLigpYCBtZXRob2RzIGFuZCBhcmUgdXNlZFxuICogdG8gY2hhbmdlIG9yIHJlbW92ZSB0aGUgb2JqZWN0IGxhdGVyIG9uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuZU9iamVjdDxPcHRpb25zIGV4dGVuZHMgU2NlbmVPYmplY3RPcHRpb25zPiB7XG4gIHByb3RlY3RlZCBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1lcmdlYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSByZW1vdmVDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogT3B0aW9ucykge1xuICAgIHRoaXMubGlnaHRpbmcgPSBsaWdodGluZztcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkob3B0aW9ucy5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgb2JqZWN0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHNpemUgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2l6ZTogdmVjMikge1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzb21lIG9mIHRoZSBvcHRpb25zIGZvciB0aGlzIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHNldChvcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweSh0aGlzLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgb2JqZWN0IGlzIHJlbW92ZWRcbiAgICovXG4gIHB1YmxpYyBvblJlbW92ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIG9iamVjdCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5saWdodGluZy5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEdsQ29udGV4dCxcbiAgR2xQcm9ncmFtLFxuICBHbFJlbmRlclRhcmdldCxcbiAgU2NlbmVDYW1lcmEsXG4gIFNjZW5lSW1hZ2UsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgR3JvdW5kUmVjZWl2ZXIsIFN1cmZhY2UsIFdhbGxSZWNlaXZlciB9IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgZGlmZnVzZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9kaWZmdXNlLmZyYWcuZ2xzbCcpO1xuaW1wb3J0IG1hc2tTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvbWFzay5mcmFnLmdsc2wnKTtcbmltcG9ydCBzcGVjdWxhclNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9zcGVjdWxhci5mcmFnLmdsc2wnKTtcbmltcG9ydCBzdXJmYWNlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3N1cmZhY2UuZ2xzbCcpO1xuXG4vKipcbiAqIEEgc3VyZmFjZSB0aGF0J3MgdmlzaWJsZSBpbiB0aGUgc2NlbmUsIGFuZCBpdHMgYW1iaWVudCBsaWdodFxuICovXG5leHBvcnQgdHlwZSBTaGFkZXJTdXJmYWNlID0ge1xuICBzdXJmYWNlOiBTdXJmYWNlPGFueT47XG4gIGFtYmllbnRMaWdodDogQ29sb3VyO1xufTtcblxuLyoqXG4gKiBFdmVyeXRoaW5nIHRoYXQgdGhlIHNoYWRlcnMgbmVlZCBmb3IgcmVuZGVyaW5nIGEgZnJhbWVcbiAqL1xuZXhwb3J0IHR5cGUgU2hhZGVyU2NlbmUgPSB7XG4gIGNhbWVyYTogU2NlbmVDYW1lcmE7XG4gIHNjcmVlbjogdmVjMjtcbiAgbGlnaHRzOiBMaWdodFtdO1xuICBzdXJmYWNlczogU2hhZGVyU3VyZmFjZVtdO1xuICBub3JtYWxNYXA6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBzcGVjdWxhck1hcDogU2NlbmVJbWFnZSB8IG51bGw7XG4gIGltYWdlU21vb3RoaW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgd2FsbExpZ2h0aW5nWU9mZnNldDogbnVtYmVyO1xuICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogbnVtYmVyO1xuICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiBudW1iZXI7XG4gIGhpZ2hsaWdodFN0cmVuZ3RoOiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIHNwZWN1bGFyU3RyZW5ndGg6IG51bWJlcjtcbiAgc2hpbmluZXNzOiBudW1iZXI7XG4gIHZpZXdUaWx0OiBudW1iZXI7XG4gIGJhbmRpbmc6IG51bWJlcjtcbn07XG5cbmVudW0gVGV4dHVyZVVuaXQge1xuICBOb3JtYWxNYXAsXG4gIFNwZWN1bGFyTWFwLFxuICBTdXJmYWNlTWFwLFxuICBMaWdodE1hcCxcbiAgUmVnaW9uU2hhZG93TWFwLFxuICBPYmplY3RTaGFkb3dNYXAsXG59XG5cbi8qKlxuICogVGhlIGFscGhhIGNoYW5uZWwgb2YgdGhlIHN1cmZhY2UgbWFwIHNheXMgd2hhdCdzIGF0IGVhY2ggcGl4ZWwsIHRoZXNlIHZhbHVlc1xuICogYXJlIGFsc28gaW4gdGhlIHNoYWRlcnNcbiAqL1xuZW51bSBTdXJmYWNlVHlwZSB7XG4gIE5vbmUgPSAwLFxuICBHcm91bmQgPSAwLjI1LFxuICBQcm9qZWN0ZWRXYWxsID0gMC41LFxuICBGbGF0V2FsbCA9IDAuNzUsXG4gIFVubGl0ID0gMSxcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBsaWdodGluZyBmb3IgYSBzY2VuZVxuICpcbiAqIFN1cmZhY2VzIGFyZSBkcmF3biBpbnRvIGEgc3VyZmFjZSBtYXAgd2l0aG91dCBhbnkgYmxlbmRpbmcsIHNvIGVhY2ggcGl4ZWxcbiAqIGJlbG9uZ3MgdG8gZXhhY3RseSBvbmUgc3VyZmFjZSBhbmQga25vd3Mgd2hlcmUgdGhhdCBzdXJmYWNlIG1lZXRzIHRoZSBncm91bmQuXG4gKiBUaGlzIG1lYW5zIG92ZXJsYXBwaW5nIHN1cmZhY2VzIGRvbid0IG5lZWQgYW55IHNwZWNpYWwgaGFuZGxpbmcuXG4gKlxuICogRWFjaCBsaWdodCBpcyB0aGVuIHNoYWRlZCBzZXBhcmF0ZWx5IGFuZCBibGVuZGVkIGludG8gYSBsaWdodCBtYXAsIHNvIGFcbiAqIGxpZ2h0J3MgYnVtcHMgb25seSBhZmZlY3QgdGhhdCBsaWdodC4gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgdXAgaW4gYVxuICogc2VwYXJhdGUgYnVmZmVyLCBiZWNhdXNlIHRoZXkgbmVlZCB0byBiZSBicmlnaHRlciB0aGFuIHRoZSBzY2VuZVxuICovXG5leHBvcnQgY2xhc3MgU2hhZGVyUGFzcyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPT1RfU0NBTEUgPSA0O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT09UX01BWCA9IDY1NTM1O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0hBRE9XX0JJQVMgPSAyNTU7XG5cbiAgcHJpdmF0ZSBjb250ZXh0OiBHbENvbnRleHQ7XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgbWFza1Byb2dyYW06IEdsUHJvZ3JhbTtcbiAgcHJpdmF0ZSBkaWZmdXNlUHJvZ3JhbTogR2xQcm9ncmFtO1xuICBwcml2YXRlIHNwZWN1bGFyUHJvZ3JhbTogR2xQcm9ncmFtO1xuXG4gIHByaXZhdGUgdGV4dHVyZXM6IFJlY29yZDxcbiAgICBFeGNsdWRlPFRleHR1cmVVbml0LCBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwPixcbiAgICBXZWJHTFRleHR1cmVcbiAgPjtcbiAgcHJpdmF0ZSBzdXJmYWNlVGFyZ2V0OiBHbFJlbmRlclRhcmdldDtcbiAgcHJpdmF0ZSBzcGVjdWxhclRhcmdldDogR2xSZW5kZXJUYXJnZXQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRleHQ6IEdsQ29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0Lm9uSW5pdGlhbGlzZShnbCA9PiB0aGlzLmluaXRpYWxpc2UoZ2wpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IG9mIHRoZSBtb3N0IHJlY2VudCBwYXNzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5jYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoYWRlcnMgY2FuIGJlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuY29udGV4dC5hdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpc2UoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVwZW5kID0gKHNvdXJjZTogc3RyaW5nKSA9PiBgJHtzdXJmYWNlU2hhZGVyfVxcbiR7c291cmNlfWA7XG5cbiAgICAgIHRoaXMubWFza1Byb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbShtYXNrU2hhZGVyKTtcbiAgICAgIHRoaXMuZGlmZnVzZVByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbShwcmVwZW5kKGRpZmZ1c2VTaGFkZXIpKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJQcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oXG4gICAgICAgIHByZXBlbmQoc3BlY3VsYXJTaGFkZXIpXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpZ2h0aW5nIGhhcyBiZWVuIGRpc2FibGVkJywgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0dXJlcyA9IHtcbiAgICAgIFtUZXh0dXJlVW5pdC5Ob3JtYWxNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0LlNwZWN1bGFyTWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5MaWdodE1hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuUmVnaW9uU2hhZG93TWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5PYmplY3RTaGFkb3dNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgIH07XG4gICAgdGhpcy5zdXJmYWNlVGFyZ2V0ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJlbmRlclRhcmdldCgpO1xuICAgIHRoaXMuc3BlY3VsYXJUYXJnZXQgPSB0aGlzLmNvbnRleHQuY3JlYXRlUmVuZGVyVGFyZ2V0KCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWQgYW4gaW1hZ2UgdG8gb25lIG9mIHRoZSBzaGFyZWQgdGV4dHVyZXNcbiAgICovXG4gIHByaXZhdGUgdXBsb2FkKFxuICAgIHVuaXQ6IEV4Y2x1ZGU8VGV4dHVyZVVuaXQsIFRleHR1cmVVbml0LlN1cmZhY2VNYXA+LFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuY29udGV4dC51cGxvYWQodW5pdCwgdGhpcy50ZXh0dXJlc1t1bml0XSwgaW1hZ2UsIGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBvdXRwdXQgYW5kIHRoZSByZW5kZXIgdGFyZ2V0cyBtYXRjaCB0aGUgc2NyZWVuIHNpemVcbiAgICovXG4gIHByaXZhdGUgcmVzaXplKHNjcmVlbjogdmVjMikge1xuICAgIHRoaXMuY29udGV4dC5yZXNpemUoc2NyZWVuKTtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplVGFyZ2V0KHRoaXMuc3VyZmFjZVRhcmdldCwgc2NyZWVuKTtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplVGFyZ2V0KHRoaXMuc3BlY3VsYXJUYXJnZXQsIHNjcmVlbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoYXQgd2UgbmVlZCB0byB3cml0ZSB0byB0aGUgc3VyZmFjZSBtYXAgZm9yIGEgc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBzdXJmYWNlVmFsdWUoc3VyZmFjZTogU3VyZmFjZTxhbnk+LCBzY2VuZTogU2hhZGVyU2NlbmUpOiBudW1iZXJbXSB7XG4gICAgaWYgKHN1cmZhY2UgaW5zdGFuY2VvZiBHcm91bmRSZWNlaXZlcikge1xuICAgICAgcmV0dXJuIFswLCAwLCAwLCBTdXJmYWNlVHlwZS5Hcm91bmRdO1xuICAgIH1cblxuICAgIGNvbnN0IHdhbGwgPSBzdXJmYWNlIGFzIFdhbGxSZWNlaXZlcjtcblxuICAgIGxldCB0eXBlID0gU3VyZmFjZVR5cGUuVW5saXQ7XG4gICAgaWYgKHdhbGwucmVjZWl2ZUxpZ2h0KSB7XG4gICAgICB0eXBlID0gd2FsbC5wcm9qZWN0U2hhZG93c1xuICAgICAgICA/IFN1cmZhY2VUeXBlLlByb2plY3RlZFdhbGxcbiAgICAgICAgOiBTdXJmYWNlVHlwZS5GbGF0V2FsbDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9vdCBwb3NpdGlvbiBpcyBzdG9yZWQgcmVsYXRpdmUgdG8gdGhlIHRvcCBvZiB0aGUgY2FtZXJhJ3Mgdmlld1xuICAgIGNvbnN0IGZvb3QgPSBNYXRoLnJvdW5kKFxuICAgICAgKHdhbGwucG9zaXRpb24ueSArIHdhbGwuc2l6ZS55IC0gc2NlbmUuY2FtZXJhLmJvdW5kcy50b3ApICpcbiAgICAgICAgU2hhZGVyUGFzcy5GT09UX1NDQUxFXG4gICAgKTtcbiAgICBjb25zdCBjbGFtcGVkRm9vdCA9IE1hdGgubWluKE1hdGgubWF4KGZvb3QsIDApLCBTaGFkZXJQYXNzLkZPT1RfTUFYKTtcbiAgICBjb25zdCBiaWFzID0gTWF0aC5taW4od2FsbC5zaGFkb3dCaWFzLCBTaGFkZXJQYXNzLk1BWF9TSEFET1dfQklBUyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5mbG9vcihjbGFtcGVkRm9vdCAvIDI1NikgLyAyNTUsXG4gICAgICAoY2xhbXBlZEZvb3QgJSAyNTYpIC8gMjU1LFxuICAgICAgTWF0aC5yb3VuZChiaWFzKSAvIDI1NSxcbiAgICAgIHR5cGUsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGVhY2ggdmlzaWJsZSBzdXJmYWNlLCB3cml0aW5nIGEgdmFsdWUgdG8gYWxsIG9mIHRoZSBzdXJmYWNlJ3MgcGl4ZWxzXG4gICAqL1xuICBwcml2YXRlIGRyYXdTdXJmYWNlcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZSxcbiAgICBnZXRWYWx1ZTogKGl0ZW06IFNoYWRlclN1cmZhY2UpID0+IG51bWJlcltdXG4gICkge1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMubWFza1Byb2dyYW07XG4gICAgY29uc3QgZmlsdGVyID0gc2NlbmUuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X21hc2ssIEdsQ29udGV4dC5JTUFHRV9VTklUKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzY2VuZS5zdXJmYWNlcykge1xuICAgICAgY29uc3QgeyBzdXJmYWNlIH0gPSBpdGVtO1xuICAgICAgY29uc3QgbWFzayA9IHN1cmZhY2UuZ2V0TWFzaygpO1xuICAgICAgaWYgKG1hc2sgPT09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXNrUmVjdGFuZ2xlID0gWzAsIDAsIDEsIDFdO1xuICAgICAgaWYgKG1hc2sgIT09ICdzb2xpZCcpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRJbWFnZShtYXNrLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIFJlcGVhdGVkIGltYWdlcyBhcmUgbGluZWQgdXAgd2l0aCB0aGUgd29ybGQsIHRoZSBzYW1lIGFzIGEgcGF0dGVyblxuICAgICAgICBpZiAoc3VyZmFjZS5yZXBlYXQgJiYgIXN1cmZhY2UuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICAgICAgbWFza1JlY3RhbmdsZSA9IFtcbiAgICAgICAgICAgIHN1cmZhY2UucG9zaXRpb24ueCAvIG1hc2sud2lkdGgsXG4gICAgICAgICAgICBzdXJmYWNlLnBvc2l0aW9uLnkgLyBtYXNrLmhlaWdodCxcbiAgICAgICAgICAgIHN1cmZhY2Uuc2l6ZS54IC8gbWFzay53aWR0aCxcbiAgICAgICAgICAgIHN1cmZhY2Uuc2l6ZS55IC8gbWFzay5oZWlnaHQsXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b3BMZWZ0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4oc3VyZmFjZS5wb3NpdGlvbik7XG4gICAgICBjb25zdCBib3R0b21SaWdodCA9IHNjZW5lLmNhbWVyYS53b3JsZFRvU2NyZWVuKFxuICAgICAgICB2ZWMyLmFkZChzdXJmYWNlLnBvc2l0aW9uLCBzdXJmYWNlLnNpemUpXG4gICAgICApO1xuXG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VNYXNrLCBtYXNrID09PSAnc29saWQnID8gMCA6IDEpO1xuICAgICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X3ZhbHVlLCBnZXRWYWx1ZShpdGVtKSk7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICAgIHRoaXMubWFza1Byb2dyYW0sXG4gICAgICAgIFtcbiAgICAgICAgICB0b3BMZWZ0LngsXG4gICAgICAgICAgdG9wTGVmdC55LFxuICAgICAgICAgIGJvdHRvbVJpZ2h0LnggLSB0b3BMZWZ0LngsXG4gICAgICAgICAgYm90dG9tUmlnaHQueSAtIHRvcExlZnQueSxcbiAgICAgICAgXSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICBtYXNrUmVjdGFuZ2xlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHVuaWZvcm1zIHRoYXQgYXJlIHRoZSBzYW1lIGZvciBldmVyeSBsaWdodCBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHByaXZhdGUgc2V0U2NlbmVVbmlmb3JtcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHsgcHJvZ3JhbSwgdW5pZm9ybXMgfTogR2xQcm9ncmFtLFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZVxuICApIHtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3Jtcy51X3NjcmVlbiwgc2NlbmUuc2NyZWVuLngsIHNjZW5lLnNjcmVlbi55KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VOb3JtYWxNYXAsIHNjZW5lLm5vcm1hbE1hcCA/IDEgOiAwKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YWxsTGlnaHRpbmdZT2Zmc2V0LCBzY2VuZS53YWxsTGlnaHRpbmdZT2Zmc2V0KTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB1bmlmb3Jtcy51X3dhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlLFxuICAgICAgc2NlbmUud2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2VcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHVuaWZvcm1zLnVfd2FsbFNoYWRvd0xlbmd0aEZhY3RvcixcbiAgICAgIHNjZW5lLndhbGxTaGFkb3dMZW5ndGhGYWN0b3JcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X2JhbmRpbmcsIHNjZW5lLmJhbmRpbmcpO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3NjZW5lTm9ybWFsTWFwLCBUZXh0dXJlVW5pdC5Ob3JtYWxNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3N1cmZhY2VNYXAsIFRleHR1cmVVbml0LlN1cmZhY2VNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X2xpZ2h0TWFwLCBUZXh0dXJlVW5pdC5MaWdodE1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfcmVnaW9uU2hhZG93TWFwLCBUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X29iamVjdFNoYWRvd01hcCwgVGV4dHVyZVVuaXQuT2JqZWN0U2hhZG93TWFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHVuaWZvcm1zIGZvciBhIGxpZ2h0IGFuZCBkcmF3IGl0cyBib3VuZGluZyBib3hcbiAgICovXG4gIHByaXZhdGUgZHJhd0xpZ2h0KFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgcHJvZ3JhbTogR2xQcm9ncmFtLFxuICAgIGxpZ2h0OiBMaWdodCxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmVcbiAgKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gbGlnaHQuYm91bmRzO1xuICAgIGNvbnN0IHRvcExlZnQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihwb3NpdGlvbik7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbih2ZWMyLmFkZChwb3NpdGlvbiwgc2l6ZSkpO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRSYWRpdXMsIGxpZ2h0LnJhZGl1cyk7XG4gICAgZ2wudW5pZm9ybTFmKHByb2dyYW0udW5pZm9ybXMudV9saWdodEhlaWdodCwgbGlnaHQuaGVpZ2h0KTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICBwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRNYXBTaXplLFxuICAgICAgbGlnaHQucmVnaW9uU2hhZG93Q2FudmFzLndpZHRoXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICBwcm9ncmFtLnVuaWZvcm1zLnVfZm9vdE9yaWdpbixcbiAgICAgIHNjZW5lLmNhbWVyYS5ib3VuZHMudG9wIC0gbGlnaHQucG9zaXRpb24ueVxuICAgICk7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICBwcm9ncmFtLFxuICAgICAgW1xuICAgICAgICB0b3BMZWZ0LngsXG4gICAgICAgIHRvcExlZnQueSxcbiAgICAgICAgYm90dG9tUmlnaHQueCAtIHRvcExlZnQueCxcbiAgICAgICAgYm90dG9tUmlnaHQueSAtIHRvcExlZnQueSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHBvc2l0aW9uLnggLSBsaWdodC5wb3NpdGlvbi54LFxuICAgICAgICBwb3NpdGlvbi55IC0gbGlnaHQucG9zaXRpb24ueSxcbiAgICAgICAgc2l6ZS54LFxuICAgICAgICBzaXplLnksXG4gICAgICBdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNjZW5lJ3MgbGlnaHQgbWFwIGludG8gdGhlIGNhbnZhcywgYW5kIGFkZCB1cCB0aGUgc2NlbmUnc1xuICAgKiBzcGVjdWxhciBoaWdobGlnaHRzIGlmIGl0IGhhcyBhIHNwZWN1bGFyIG1hcFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihzY2VuZTogU2hhZGVyU2NlbmUpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKCFnbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplKHNjZW5lLnNjcmVlbik7XG4gICAgdGhpcy5jb250ZXh0LmludmFsaWRhdGVDYW52YXNlcygpO1xuXG4gICAgaWYgKHNjZW5lLm5vcm1hbE1hcCkge1xuICAgICAgdGhpcy51cGxvYWQoVGV4dHVyZVVuaXQuTm9ybWFsTWFwLCBzY2VuZS5ub3JtYWxNYXAsIGdsLk5FQVJFU1QpO1xuICAgIH1cblxuICAgIC8vIEVhY2ggcGl4ZWwgb2YgdGhlIHN1cmZhY2UgbWFwIGJlbG9uZ3MgdG8gb25lIHN1cmZhY2UsIHNvIHRoZXJlJ3Mgbm9cbiAgICAvLyBibGVuZGluZyBhbmQgc3VyZmFjZXMgY292ZXIgd2hhdGV2ZXIncyB1bmRlcm5lYXRoIHRoZW1cbiAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMubWFza1Byb2dyYW0ucHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKFxuICAgICAgdGhpcy5tYXNrUHJvZ3JhbS51bmlmb3Jtcy51X3NjcmVlbixcbiAgICAgIHNjZW5lLnNjcmVlbi54LFxuICAgICAgc2NlbmUuc2NyZWVuLnlcbiAgICApO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnN1cmZhY2VUYXJnZXQuZnJhbWVidWZmZXIpO1xuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgU3VyZmFjZVR5cGUuTm9uZSk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgdGhpcy5kcmF3U3VyZmFjZXMoZ2wsIHNjZW5lLCAoeyBzdXJmYWNlIH0pID0+XG4gICAgICB0aGlzLnN1cmZhY2VWYWx1ZShzdXJmYWNlLCBzY2VuZSlcbiAgICApO1xuXG4gICAgLy8gU3RhcnQgdGhlIGxpZ2h0IG1hcCB3aXRoIHRoZSBhbWJpZW50IGxpZ2h0IG9uIGVhY2ggc3VyZmFjZVxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB0aGlzLmRyYXdTdXJmYWNlcyhnbCwgc2NlbmUsICh7IGFtYmllbnRMaWdodDogeyByLCBnLCBiLCBhIH0gfSkgPT4gW1xuICAgICAgciAvIDI1NSxcbiAgICAgIGcgLyAyNTUsXG4gICAgICBiIC8gMjU1LFxuICAgICAgYSxcbiAgICBdKTtcblxuICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShcbiAgICAgIFRleHR1cmVVbml0LlN1cmZhY2VNYXAsXG4gICAgICB0aGlzLnN1cmZhY2VUYXJnZXQudGV4dHVyZSxcbiAgICAgIGdsLk5FQVJFU1RcbiAgICApO1xuXG4gICAgdGhpcy5zZXRTY2VuZVVuaWZvcm1zKGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBzY2VuZSk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdGhpcy5kaWZmdXNlUHJvZ3JhbS51bmlmb3Jtcy51X2hpZ2hsaWdodFN0cmVuZ3RoLFxuICAgICAgc2NlbmUuaGlnaGxpZ2h0U3RyZW5ndGhcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHRoaXMuZGlmZnVzZVByb2dyYW0udW5pZm9ybXMudV9zaGFkb3dTdHJlbmd0aCxcbiAgICAgIHNjZW5lLnNoYWRvd1N0cmVuZ3RoXG4gICAgKTtcblxuICAgIGlmIChzY2VuZS5zcGVjdWxhck1hcCkge1xuICAgICAgdGhpcy51cGxvYWQoVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXAsIHNjZW5lLnNwZWN1bGFyTWFwLCBnbC5ORUFSRVNUKTtcblxuICAgICAgY29uc3QgeyB1bmlmb3JtcyB9ID0gdGhpcy5zcGVjdWxhclByb2dyYW07XG4gICAgICB0aGlzLnNldFNjZW5lVW5pZm9ybXMoZ2wsIHRoaXMuc3BlY3VsYXJQcm9ncmFtLCBzY2VuZSk7XG4gICAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zY2VuZVNwZWN1bGFyTWFwLCBUZXh0dXJlVW5pdC5TcGVjdWxhck1hcCk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zcGVjdWxhclN0cmVuZ3RoLCBzY2VuZS5zcGVjdWxhclN0cmVuZ3RoKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3NoaW5pbmVzcywgc2NlbmUuc2hpbmluZXNzKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3ZpZXdUaWx0LCBzY2VuZS52aWV3VGlsdCk7XG5cbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zcGVjdWxhclRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyID0gc2NlbmUuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgZm9yIChjb25zdCBsaWdodCBvZiBzY2VuZS5saWdodHMpIHtcbiAgICAgIHRoaXMudXBsb2FkKFRleHR1cmVVbml0LkxpZ2h0TWFwLCBsaWdodC5saWdodENhbnZhcywgZmlsdGVyKTtcbiAgICAgIHRoaXMudXBsb2FkKFxuICAgICAgICBUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXAsXG4gICAgICAgIGxpZ2h0LnJlZ2lvblNoYWRvd0NhbnZhcyxcbiAgICAgICAgZmlsdGVyXG4gICAgICApO1xuICAgICAgdGhpcy51cGxvYWQoXG4gICAgICAgIFRleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcCxcbiAgICAgICAgbGlnaHQub2JqZWN0U2hhZG93Q2FudmFzLFxuICAgICAgICBmaWx0ZXJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJsZW5kIHRoZSBzYW1lIHdheSBhcyB0aGUgJ3NjcmVlbicgY29tcG9zaXRlIG9wZXJhdGlvbiwgYW5kIGxlYXZlIHRoZVxuICAgICAgLy8gYWxwaGEgY2hhbm5lbCBhbG9uZVxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLk9ORSwgZ2wuT05FX01JTlVTX1NSQ19DT0xPUiwgZ2wuWkVSTywgZ2wuT05FKTtcbiAgICAgIHRoaXMuZHJhd0xpZ2h0KGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBsaWdodCwgc2NlbmUpO1xuXG4gICAgICBpZiAoc2NlbmUuc3BlY3VsYXJNYXApIHtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnNwZWN1bGFyVGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICAgICAgZ2wuYmxlbmRGdW5jU2VwYXJhdGUoZ2wuT05FLCBnbC5PTkUsIGdsLlpFUk8sIGdsLk9ORSk7XG4gICAgICAgIHRoaXMuZHJhd0xpZ2h0KGdsLCB0aGlzLnNwZWN1bGFyUHJvZ3JhbSwgbGlnaHQsIHNjZW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgc3BlY3VsYXIgaGlnaGxpZ2h0cyBmcm9tIHRoZVxuICAgKiBtb3N0IHJlY2VudCByZW5kZXJcbiAgICovXG4gIHB1YmxpYyBzaG93U3BlY3VsYXIoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nbCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdUZXh0dXJlKHRoaXMuc3BlY3VsYXJUYXJnZXQudGV4dHVyZSwgc2NyZWVuKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY29udGVudHMgb2YgdGhlIGNhbnZhcyB3aXRoIHRoZSBzdXJmYWNlIG1hcCBmcm9tIHRoZSBtb3N0XG4gICAqIHJlY2VudCByZW5kZXJcbiAgICovXG4gIHB1YmxpYyBzaG93U3VyZmFjZXMoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nbCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdUZXh0dXJlKHRoaXMuc3VyZmFjZVRhcmdldC50ZXh0dXJlLCBzY3JlZW4pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBib3VuZGluZ1JlY3RhbmdsZSwgZHJhd0ltYWdlSW5SZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcblxudHlwZSBEcmF3Q2FsbGJhY2sgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBTdXJmYWNlT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGJhY2tncm91bmQgY29sb3VyXG4gICAqL1xuICBjb2xvdXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpbWFnZSBmb3IgdGhpcyBzdXJmYWNlXG4gICAqL1xuICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBub3JtYWwgbWFwLCB1c2VkIHdoZW4gdGhlIHNoYWRlciBpcyBlbmFibGVkXG4gICAqL1xuICBub3JtYWxNYXA/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgc3BlY3VsYXIgbWFwLCB1c2VkIHdoZW4gdGhlIHNoYWRlciBpcyBlbmFibGVkXG4gICAqL1xuICBzcGVjdWxhck1hcD86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTdXJmYWNlcyBhcmUgZHJhd24gaW4gb3JkZXIgb2Ygei1pbmRleCBhbmQgdGhlbiBieSB0aGVpciBib3R0b20gZWRnZVxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGFueSBvZiB0aGUgZGVmYXVsdCBkcmF3aW5nIHN0ZXBzIGZvciB0aGlzIHN1cmZhY2UsIGZvciBvYmplY3RzXG4gICAqIHRoYXQgYXJlbid0IGEgc2luZ2xlIGltYWdlXG4gICAqL1xuICBjdXN0b21EcmF3Pzoge1xuICAgIGltYWdlPzogRHJhd0NhbGxiYWNrO1xuICAgIG1hc2s/OiBEcmF3Q2FsbGJhY2s7XG4gICAgbm9ybWFsTWFwPzogRHJhd0NhbGxiYWNrO1xuICAgIHNwZWN1bGFyTWFwPzogRHJhd0NhbGxiYWNrO1xuICB9O1xufTtcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgc2hhZG93c1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VyZmFjZTxcbiAgT3B0aW9ucyBleHRlbmRzIFN1cmZhY2VPcHRpb25zXG4+IGV4dGVuZHMgU2NlbmVPYmplY3Q8T3B0aW9ucz4ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBOT1JNQUxfTUFQX0RFRkFVTFRfQ09MT1VSID0gJyM3ZjdmZmYnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTUEVDVUxBUl9NQVBfREVGQVVMVF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyBjb2xvdXI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgaW1hZ2U6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIG5vcm1hbE1hcDogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgc3BlY3VsYXJNYXA6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHpJbmRleDogbnVtYmVyID0gMDtcbiAgcHVibGljIGN1c3RvbURyYXc6IE5vbk51bGxhYmxlPFN1cmZhY2VPcHRpb25zWydjdXN0b21EcmF3J10+ID0ge307XG5cbiAgcHJvdGVjdGVkIG92ZXJsYXlzOiBEcmF3Q2FsbGJhY2tbXSA9IFtdO1xuXG4gIHByaXZhdGUgY3VzdG9tTWFza0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgaW1hZ2VzIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGlzIHN1cmZhY2UsIG9yIHN0cmV0Y2hlZCB0byBmaXQ/XG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcmVwZWF0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGltYWdlIHdob3NlIGFscGhhIGNoYW5uZWwgZGVjaWRlcyB3aGljaCBwYXJ0cyBvZiB0aGlzIHN1cmZhY2VcbiAgICogcmVjZWl2ZSBsaWdodGluZ1xuICAgKlxuICAgKiBSZXR1cm5zICdzb2xpZCcgaWYgdGhlIHdob2xlIHN1cmZhY2UgcmVjZWl2ZXMgbGlnaHRpbmcsIG9yIG51bGwgaWYgbm90aGluZ1xuICAgKiBkb2VzIChmb3IgZXhhbXBsZSBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXQpXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0TWFzaygpOiBTY2VuZUltYWdlIHwgJ3NvbGlkJyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBmaWxsQmFja2dyb3VuZChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG91cjogc3RyaW5nKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvdXI7XG4gICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgdGhpcy5zaXplLnlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdJbWFnZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGltYWdlOiBTY2VuZUltYWdlKSB7XG4gICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgaW1hZ2UsIHRoaXMsIHRoaXMucmVwZWF0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgc29tZXRoaW5nIHRvIGJlIGRyYXduIG9uIHRvcCBvZiB0aGlzIHN1cmZhY2UsIGl0J3MgZHJhd24gc3RyYWlnaHQgYWZ0ZXJcbiAgICogdGhlIHN1cmZhY2Ugc28gdGhhdCBhbnl0aGluZyBpbiBmcm9udCBvZiB0aGUgc3VyZmFjZSB3aWxsIGNvdmVyIGl0XG4gICAqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCByZW1vdmVzIHRoZSBvdmVybGF5LiBPdmVybGF5cyBkb24ndCBjaGFuZ2UgdGhlXG4gICAqIHNoYXBlIG9mIHRoZSBzdXJmYWNlLCBhbmQgc3VyZmFjZXMgd2l0aCBvdmVybGF5cyBjYW4ndCBiZSBtZXJnZWRcbiAgICovXG4gIHB1YmxpYyBhZGRPdmVybGF5KGRyYXc6IERyYXdDYWxsYmFjayk6ICgpID0+IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheXMucHVzaChkcmF3KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJsYXlzID0gdGhpcy5vdmVybGF5cy5maWx0ZXIob3ZlcmxheSA9PiBvdmVybGF5ICE9PSBkcmF3KTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3Q29udGVudChjb250ZXh0KTtcbiAgICB0aGlzLm92ZXJsYXlzLmZvckVhY2gob3ZlcmxheSA9PiBvdmVybGF5KGNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgc3VyZmFjZSB3aXRob3V0IGl0cyBvdmVybGF5c1xuICAgKi9cbiAgcHVibGljIGRyYXdDb250ZW50KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcuaW1hZ2UpIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5pbWFnZShjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGlmICh0aGlzLmNvbG91cikge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCB0aGlzLmNvbG91cik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIHRoaXMuaW1hZ2UpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdDb2xvdXJNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGltYWdlOiBTY2VuZUltYWdlIHwgbnVsbCxcbiAgICBkZWZhdWx0Q29sb3VyOiBzdHJpbmdcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIGltYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCBkZWZhdWx0Q29sb3VyKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3Tm9ybWFsTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcubm9ybWFsTWFwKSB7XG4gICAgICB0aGlzLmN1c3RvbURyYXcubm9ybWFsTWFwKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0NvbG91ck1hcChcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLm5vcm1hbE1hcCxcbiAgICAgIFN1cmZhY2UuTk9STUFMX01BUF9ERUZBVUxUX0NPTE9VUlxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZHJhd1NwZWN1bGFyTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcuc3BlY3VsYXJNYXApIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5zcGVjdWxhck1hcChjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdDb2xvdXJNYXAoXG4gICAgICBjb250ZXh0LFxuICAgICAgdGhpcy5zcGVjdWxhck1hcCxcbiAgICAgIFN1cmZhY2UuU1BFQ1VMQVJfTUFQX0RFRkFVTFRfQ09MT1VSXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBjdXN0b20gbWFzaywgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uIG9mIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgcHJvdGVjdGVkIHJlbmRlckN1c3RvbU1hc2soZHJhdzogRHJhd0NhbGxiYWNrKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHRoaXMuY3VzdG9tTWFza0NvbnRleHQgPz89IGRvY3VtZW50XG4gICAgICAuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIC5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmN1c3RvbU1hc2tDb250ZXh0O1xuICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuc2l6ZS54KTtcbiAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5zaXplLnkpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKC10aGlzLnBvc2l0aW9uLngsIC10aGlzLnBvc2l0aW9uLnkpO1xuICAgIGRyYXcoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGV4dC5jYW52YXM7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR3JvdW5kUmVjZWl2ZXJPcHRpb25zID0gU3VyZmFjZU9wdGlvbnM7XG5cbi8qKlxuICogQSByZWN0YW5nbGUgb2YgZ3JvdW5kIHRoYXQgcmVjZWl2ZXMgZ3JvdW5kIHNoYWRvd3NcbiAqXG4gKiBJbWFnZXMgYXJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91bmRSZWNlaXZlciBleHRlbmRzIFN1cmZhY2U8R3JvdW5kUmVjZWl2ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyByZXBlYXQgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IEdyb3VuZFJlY2VpdmVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXNrKCk6IFNjZW5lSW1hZ2UgfCAnc29saWQnIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDdXN0b21NYXNrKHRoaXMuY3VzdG9tRHJhdy5tYXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJ3NvbGlkJztcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXYWxsUmVjZWl2ZXJPcHRpb25zID0gU3VyZmFjZU9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hpY2ggcGFydHMgb2YgdGhpcyBzdXJmYWNlIHJlY2VpdmVcbiAgICogbGlnaHRpbmcsIHRoZSBkZWZhdWx0IGlzIHRoZSBhbHBoYSBjaGFubmVsIG9mIGBpbWFnZWBcbiAgICovXG4gIG1hc2s/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBpbWFnZSBiZSByZXBlYXRlZCBhY3Jvc3MgdGhlIHN1cmZhY2U/IE90aGVyd2lzZSBpdCB3aWxsIGJlXG4gICAqIHN0cmV0Y2hlZCB0byBmaXRcbiAgICovXG4gIHJlcGVhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIGZhbHNlIGlmIHRoaXMgc3VyZmFjZSBzaG91bGQgb25seSByZWNlaXZlIGFtYmllbnQgbGlnaHQgKHRoaXNcbiAgICogaXMgdXNlZnVsIGZvciB0aGUgdG9wcyBvZiB3YWxscylcbiAgICovXG4gIHJlY2VpdmVMaWdodD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiB0aGF0IHRoaXMgc3VyZmFjZSBpcyBmYWNpbmcsIGZvciBhbWJpZW50IGxpZ2h0aW5nXG4gICAqL1xuICBzdXJmYWNlTm9ybWFsPzogdmVjMjtcblxuICAvKipcbiAgICogSG93IGZhciB0b3dhcmRzIHRoZSBsaWdodCB0byBsb29rIGZvciBzaGFkb3dzIG9uIHRoZSBncm91bmQsIGluIHdvcmxkXG4gICAqIHVuaXRzLiBUaGlzIHNob3VsZCBiZSBlbm91Z2ggdG8gZ2V0IG91dCBvZiB0aGUgc3VyZmFjZSdzIG93biBzaGFkb3dcbiAgICovXG4gIHNoYWRvd0JpYXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzcHJpdGUgYW5kIGNpcmNsZSBzaGFkb3dzIGNsaW1iIHRoaXMgc3VyZmFjZT8gVGhpcyBzaG91bGQgYmUgZmFsc2VcbiAgICogZm9yIGFueXRoaW5nIHRoYXQgY2FzdHMgb25lIG9mIHRoZXNlIHNoYWRvd3MsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGluIGl0c1xuICAgKiBvd24gc2hhZG93XG4gICAqL1xuICBwcm9qZWN0U2hhZG93cz86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIG9yIHNwcml0ZSB0aGF0IHJlY2VpdmVzIHdhbGwgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgV2FsbFJlY2VpdmVyIGV4dGVuZHMgU3VyZmFjZTxXYWxsUmVjZWl2ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBtYXNrOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyByZXBlYXQgPSBmYWxzZTtcbiAgcHVibGljIHJlY2VpdmVMaWdodDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzdXJmYWNlTm9ybWFsOiB2ZWMyID0gdmVjMigpO1xuICBwdWJsaWMgc2hhZG93QmlhczogbnVtYmVyID0gMTtcbiAgcHVibGljIHByb2plY3RTaGFkb3dzOiBib29sZWFuID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBXYWxsUmVjZWl2ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1hc2soKTogU2NlbmVJbWFnZSB8ICdzb2xpZCcgfCBudWxsIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckN1c3RvbU1hc2sodGhpcy5jdXN0b21EcmF3Lm1hc2spO1xuICAgIH1cblxuICAgIC8vIEEgYmFja2dyb3VuZCBjb2xvdXIgY292ZXJzIHRoZSB3aG9sZSBzdXJmYWNlXG4gICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICByZXR1cm4gJ3NvbGlkJztcbiAgICB9XG5cbiAgICBjb25zdCBtYXNrID0gdGhpcy5tYXNrID8/IHRoaXMuaW1hZ2U7XG5cbiAgICByZXR1cm4gbWFzayAmJiBtYXNrLndpZHRoID4gMCAmJiBtYXNrLmhlaWdodCA+IDAgPyBtYXNrIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGlzIHN1cmZhY2UgY2FuIGJlIG1lcmdlZCB3aXRoIGFub3RoZXIgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIGNhbk1lcmdlKG90aGVyOiBXYWxsUmVjZWl2ZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBoYXNJbWFnZXMgPVxuICAgICAgdGhpcy5pbWFnZSB8fCB0aGlzLm1hc2sgfHwgdGhpcy5ub3JtYWxNYXAgfHwgdGhpcy5zcGVjdWxhck1hcDtcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lcmdlYWJsZSAmJlxuICAgICAgb3RoZXIubWVyZ2VhYmxlICYmXG4gICAgICB0aGlzLm92ZXJsYXlzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgb3RoZXIub3ZlcmxheXMubGVuZ3RoID09PSAwICYmXG4gICAgICAvLyBOb24tcmVwZWF0aW5nIGltYWdlcyB3b3VsZCBzdHJldGNoIGFjcm9zcyB0aGUgbWVyZ2VkIHN1cmZhY2VcbiAgICAgICh0aGlzLnJlcGVhdCB8fCAhaGFzSW1hZ2VzKSAmJlxuICAgICAgdGhpcy56SW5kZXggPT09IG90aGVyLnpJbmRleCAmJlxuICAgICAgdGhpcy5jb2xvdXIgPT09IG90aGVyLmNvbG91ciAmJlxuICAgICAgdGhpcy5pbWFnZSA9PT0gb3RoZXIuaW1hZ2UgJiZcbiAgICAgIHRoaXMubWFzayA9PT0gb3RoZXIubWFzayAmJlxuICAgICAgdGhpcy5ub3JtYWxNYXAgPT09IG90aGVyLm5vcm1hbE1hcCAmJlxuICAgICAgdGhpcy5zcGVjdWxhck1hcCA9PT0gb3RoZXIuc3BlY3VsYXJNYXAgJiZcbiAgICAgIHRoaXMucmVwZWF0ID09PSBvdGhlci5yZXBlYXQgJiZcbiAgICAgIHRoaXMucmVjZWl2ZUxpZ2h0ID09PSBvdGhlci5yZWNlaXZlTGlnaHQgJiZcbiAgICAgIHZlYzIuZXEodGhpcy5zdXJmYWNlTm9ybWFsLCBvdGhlci5zdXJmYWNlTm9ybWFsKSAmJlxuICAgICAgdGhpcy5zaGFkb3dCaWFzID09PSBvdGhlci5zaGFkb3dCaWFzICYmXG4gICAgICB0aGlzLnByb2plY3RTaGFkb3dzID09PSBvdGhlci5wcm9qZWN0U2hhZG93c1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHN1cmZhY2UgdGhhdCBjb3ZlcnMgdGhpcyBzdXJmYWNlIGFuZCBhbm90aGVyIHN1cmZhY2VcbiAgICovXG4gIHB1YmxpYyBtZXJnZShvdGhlcjogV2FsbFJlY2VpdmVyKTogV2FsbFJlY2VpdmVyIHtcbiAgICByZXR1cm4gbmV3IFdhbGxSZWNlaXZlcih0aGlzLmxpZ2h0aW5nLCB7XG4gICAgICAuLi4odGhpcyBhcyBXYWxsUmVjZWl2ZXIpLFxuICAgICAgLi4uYm91bmRpbmdSZWN0YW5nbGUodGhpcywgb3RoZXIpLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFJlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUmVnaW9uQ2FzdGVyIH0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgV2FsbFJlY2VpdmVyLCBXYWxsUmVjZWl2ZXJPcHRpb25zIH0gZnJvbSAnLi9TdXJmYWNlJztcblxuZXhwb3J0IHR5cGUgV2FsbE9wdGlvbnMgPSBPbWl0PFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxuICAncG9zaXRpb24nIHwgJ3NpemUnIHwgJ3JlY2VpdmVMaWdodCdcbj4gJiB7XG4gIC8qKlxuICAgKiBUaGUgYXJlYSBvZiB0aGUgZ3JvdW5kIHRoYXQgdGhpcyB3YWxsIHN0YW5kcyBvblxuICAgKi9cbiAgZm9vdHByaW50OiBSZWN0YW5nbGU7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHdhbGwncyBmcm9udCBmYWNlXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHNoYWRvd3MgaW5jbHVkZSB0aGUgd2FsbCdzIGZvb3RwcmludD9cbiAgICovXG4gIGluY2x1ZGVSZWdpb25TaGFkb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBlYXJhbmNlIG9mIHRoZSB0b3Agb2YgdGhlIHdhbGwsIGl0IG9ubHkgcmVjZWl2ZXMgYW1iaWVudCBsaWdodFxuICAgKi9cbiAgdG9wPzoge1xuICAgIGNvbG91cj86IHN0cmluZztcbiAgICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuICB9O1xufTtcblxuLyoqXG4gKiBBIHNvbGlkIHdhbGwgaW4gYSAzLzQgdmlld1xuICpcbiAqIFRoaXMgaXMgbWFkZSBmcm9tIGEgZnJvbnQgZmFjZSB0aGF0IHJlY2VpdmVzIGxpZ2h0LCBhIHRvcCB0aGF0IG9ubHkgcmVjZWl2ZXNcbiAqIGFtYmllbnQgbGlnaHQsIGFuZCBhIGZvb3RwcmludCB0aGF0IGNhc3RzIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGwge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RPUF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyByZWFkb25seSBmcm9udDogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgdG9wOiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSBjYXN0ZXI6IFJlZ2lvbkNhc3RlcjtcblxuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFdhbGxPcHRpb25zKSB7XG4gICAgY29uc3QgeyBmb290cHJpbnQsIGhlaWdodCwgaW5jbHVkZVJlZ2lvblNoYWRvdywgdG9wLCAuLi5mcm9udCB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkUmVnaW9uQ2FzdGVyKHtcbiAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBpbmNsdWRlUmVnaW9uU2hhZG93LFxuICAgIH0pO1xuICAgIHRoaXMuZnJvbnQgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgLi4uZnJvbnQsXG4gICAgICAuLi50aGlzLmZyb250UmVjdGFuZ2xlKGZvb3RwcmludCksXG4gICAgfSk7XG4gICAgdGhpcy50b3AgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgekluZGV4OiBvcHRpb25zLnpJbmRleCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBjb2xvdXI6IHRvcD8uY29sb3VyID8/IFdhbGwuREVGQVVMVF9UT1BfQ09MT1VSLFxuICAgICAgaW1hZ2U6IHRvcD8uaW1hZ2UsXG4gICAgICByZWNlaXZlTGlnaHQ6IGZhbHNlLFxuICAgICAgLi4udGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50OiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IGJvdHRvbSA9IGZvb3RwcmludC5wb3NpdGlvbi55ICsgZm9vdHByaW50LnNpemUueTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihmb290cHJpbnQucG9zaXRpb24ueCwgYm90dG9tIC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogdmVjMihmb290cHJpbnQuc2l6ZS54LCB0aGlzLmhlaWdodCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdG9wUmVjdGFuZ2xlKGZvb3RwcmludDogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIoZm9vdHByaW50LnBvc2l0aW9uLngsIGZvb3RwcmludC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogZm9vdHByaW50LnNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgd2FsbCBzbyB0aGF0IGl0cyBmb290cHJpbnQgaXMgYXQgYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICBjb25zdCBmb290cHJpbnQgPSB7IHBvc2l0aW9uLCBzaXplOiB0aGlzLmNhc3Rlci5zaXplIH07XG5cbiAgICB0aGlzLmNhc3Rlci5tb3ZlVG8ocG9zaXRpb24pO1xuICAgIHRoaXMuZnJvbnQubW92ZVRvKHRoaXMuZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50KS5wb3NpdGlvbik7XG4gICAgdGhpcy50b3AubW92ZVRvKHRoaXMudG9wUmVjdGFuZ2xlKGZvb3RwcmludCkucG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHdhbGwgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMuZnJvbnQucmVtb3ZlKCk7XG4gICAgdGhpcy50b3AucmVtb3ZlKCk7XG4gICAgdGhpcy5jYXN0ZXIucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEdsQ29udGV4dCB9IGZyb20gJy4uL2NvcmUnO1xuZXhwb3J0IHR5cGUgeyBSZWN0YW5nbGUsIFNjZW5lQ2FtZXJhLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5leHBvcnQgeyBBY3RvciB9IGZyb20gJy4vQWN0b3InO1xuZXhwb3J0IHR5cGUgeyBBY3Rvck9wdGlvbnMsIEFjdG9yU2hhZG93LCBTcHJpdGVBY3Rvck9wdGlvbnMgfSBmcm9tICcuL0FjdG9yJztcbmV4cG9ydCB7IENpcmNsZUNhc3RlciwgUmVnaW9uQ2FzdGVyLCBTcHJpdGVDYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5leHBvcnQgdHlwZSB7XG4gIENpcmNsZUNhc3Rlck9wdGlvbnMsXG4gIFJlZ2lvbkNhc3Rlck9wdGlvbnMsXG4gIFNoYWRvd0Nhc3RlcixcbiAgU3ByaXRlQ2FzdGVyT3B0aW9ucyxcbn0gZnJvbSAnLi9DYXN0ZXInO1xuZXhwb3J0IHsgTGlnaHQgfSBmcm9tICcuL0xpZ2h0JztcbmV4cG9ydCB0eXBlIHsgTGlnaHRPcHRpb25zIH0gZnJvbSAnLi9MaWdodCc7XG5leHBvcnQgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuZXhwb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbU9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmV4cG9ydCB7IFNjZW5lT2JqZWN0IH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5leHBvcnQgdHlwZSB7IFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuZXhwb3J0IHsgR3JvdW5kUmVjZWl2ZXIsIFN1cmZhY2UsIFdhbGxSZWNlaXZlciB9IGZyb20gJy4vU3VyZmFjZSc7XG5leHBvcnQgdHlwZSB7XG4gIEdyb3VuZFJlY2VpdmVyT3B0aW9ucyxcbiAgU3VyZmFjZU9wdGlvbnMsXG4gIFdhbGxSZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vU3VyZmFjZSc7XG5leHBvcnQgeyBXYWxsIH0gZnJvbSAnLi9XYWxsJztcbmV4cG9ydCB0eXBlIHsgV2FsbE9wdGlvbnMgfSBmcm9tICcuL1dhbGwnO1xuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCByZWN0YW5nbGVUb0ludGVydmFsIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBTaWRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IE1FUkdFX01BWF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgTUVSR0VfT1JERVIgPSBbJ2R1cGxpY2F0ZScsIFNpZGUuQm90dG9tLCBTaWRlLlJpZ2h0LCBTaWRlLlRvcCwgU2lkZS5MZWZ0XTtcblxudHlwZSBNZXJnZWFibGU8VD4gPSBSZWN0YW5nbGUgJiB7XG4gIGNhbk1lcmdlKG90aGVyOiBUKTogYm9vbGVhbjtcbiAgbWVyZ2Uob3RoZXI6IFQpOiBUO1xufTtcblxudHlwZSBNZXJnZTxUPiA9IFtULCBULCBTaWRlIHwgJ2R1cGxpY2F0ZSddO1xuXG4vKipcbiAqIEZpbmQgcGFpcnMgb2YgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgY2FuIGJlIG1lcmdlZFxuICovXG5mdW5jdGlvbiBmaW5kTWVyZ2VzPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KGl0ZW1zOiBUW10pOiBNZXJnZTxUPltdIHtcbiAgY29uc3QgcmVzdWx0OiBNZXJnZTxUPltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGEgPSByZWN0YW5nbGVUb0ludGVydmFsKGl0ZW1zW2ldKTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBiID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChpdGVtc1tqXSk7XG5cbiAgICAgIGlmICghaXRlbXNbaV0uY2FuTWVyZ2UoaXRlbXNbal0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGFuZCBCIGFyZSB0aGUgc2FtZVxuICAgICAgaWYgKFxuICAgICAgICBhLnRvcCA9PT0gYi50b3AgJiZcbiAgICAgICAgYS5ib3R0b20gPT09IGIuYm90dG9tICYmXG4gICAgICAgIGEubGVmdCA9PT0gYi5sZWZ0ICYmXG4gICAgICAgIGEucmlnaHQgPT09IGIucmlnaHRcbiAgICAgICkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCAnZHVwbGljYXRlJ10pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIGJvdHRvbSBlZGdlIG9mIEFcbiAgICAgIGlmIChhLmJvdHRvbSA9PT0gYi50b3AgJiYgYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS5yaWdodCA9PT0gYi5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkJvdHRvbV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgdG9wIGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEudG9wID09PSBiLmJvdHRvbSAmJiBhLmxlZnQgPT09IGIubGVmdCAmJiBhLnJpZ2h0ID09PSBiLnJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuVG9wXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSByaWdodCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLnJpZ2h0ID09PSBiLmxlZnQgJiYgYS50b3AgPT09IGIudG9wICYmIGEuYm90dG9tID09PSBiLmJvdHRvbSkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlJpZ2h0XSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSBsZWZ0IGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEubGVmdCA9PT0gYi5yaWdodCAmJiBhLnRvcCA9PT0gYi50b3AgJiYgYS5ib3R0b20gPT09IGIuYm90dG9tKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuTGVmdF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogTWVyZ2UgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgcGVyZmVjdGx5IGNvbm5lY3RlZCBvbiBvbmVcbiAqIHNpZGUsIG9yIGFyZSBleGFjdCBkdXBsaWNhdGVzIG9mIGVhY2ggb3RoZXJcbiAqXG4gKiBgb25NZXJnZWAgaXMgY2FsbGVkIGVhY2ggdGltZSAyIGl0ZW1zIGFyZSByZXBsYWNlZCB3aXRoIGEgc2luZ2xlIGl0ZW0uIElmXG4gKiB0aGUgaXRlbXMgd2VyZSBkdXBsaWNhdGVzLCB0aGUgbWVyZ2VkIGl0ZW0gaXMgdGhlIGZpcnN0IGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KFxuICBpdGVtczogVFtdLFxuICBvbk1lcmdlPzogKG1lcmdlZDogVCwgYTogVCwgYjogVCkgPT4gdm9pZFxuKTogVFtdIHtcbiAgLy8gU29ydCBpdGVtcyBieSB5LXBvc2l0aW9uIHRoZW4geC1wb3NpdGlvblxuICBsZXQgcmVzdWx0ID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEucG9zaXRpb24ueSA9PT0gYi5wb3NpdGlvbi55KSB7XG4gICAgICByZXR1cm4gYS5wb3NpdGlvbi54IC0gYi5wb3NpdGlvbi54O1xuICAgIH1cblxuICAgIHJldHVybiBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG4gIH0pO1xuXG4gIGxldCBpID0gMDtcbiAgbGV0IG1lcmdlczogTWVyZ2U8VD5bXTtcbiAgd2hpbGUgKFxuICAgIChtZXJnZXMgPSBmaW5kTWVyZ2VzKHJlc3VsdCkpLmxlbmd0aCA+IDAgJiZcbiAgICBpKysgPCBNRVJHRV9NQVhfSVRFUkFUSU9OU1xuICApIHtcbiAgICAvLyBNZXJnZSBpdGVtcyBpbiBhIHNwZWNpZmljIG9yZGVyIChlLmcuIGl0ZW1zIHRoYXQgY29ubmVjdCBvbiB0aGUgYm90dG9tXG4gICAgLy8gZmFjZSBmaXJzdCwgb3IgaXRlbXMgdGhhdCBhcmUgZXhhY3QgZHVwbGljYXRlcyBmaXJzdCwgZXRjLilcbiAgICBtZXJnZXMuc29ydChcbiAgICAgIChhLCBiKSA9PiBNRVJHRV9PUkRFUi5pbmRleE9mKGFbMl0pIC0gTUVSR0VfT1JERVIuaW5kZXhPZihiWzJdKVxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IFthLCBiLCBzaWRlXSBvZiBtZXJnZXMpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaXRlbXMgc3RpbGwgZXhpc3QgKHRoZXkgbWlnaHQgaGF2ZSBiZWVuIG1lcmdlZCBhbmRcbiAgICAgIC8vIHJlbW92ZWQgaW4gYSBwcmV2aW91cyBpdGVyYXRpb24pXG4gICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhhKSB8fCAhcmVzdWx0LmluY2x1ZGVzKGIpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2lkZSA9PT0gJ2R1cGxpY2F0ZScpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGIpO1xuICAgICAgICBvbk1lcmdlPy4oYSwgYSwgYik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXJnZWQgPSBhLm1lcmdlKGIpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGEgJiYgaXRlbSAhPT0gYik7XG4gICAgICByZXN1bHQucHVzaChtZXJnZWQpO1xuICAgICAgb25NZXJnZT8uKG1lcmdlZCwgYSwgYik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG5leHBvcnQgdHlwZSBMaW5lID0ge1xuICBzdGFydDogdmVjMjtcbiAgZW5kOiB2ZWMyO1xufTtcblxuZXhwb3J0IGVudW0gU2VjdG9yMWQge1xuICBCZWZvcmUgPSAnYmVmb3JlJyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIEFmdGVyID0gJ2FmdGVyJyxcbn1cblxuZXhwb3J0IGVudW0gU2VjdG9yMmQge1xuICBUb3BMZWZ0ID0gJ3RvcC1sZWZ0JyxcbiAgVG9wID0gJ3RvcCcsXG4gIFRvcFJpZ2h0ID0gJ3RvcC1yaWdodCcsXG4gIExlZnQgPSAnbGVmdCcsXG4gIEluc2lkZSA9ICdpbnNpZGUnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbUxlZnQgPSAnYm90dG9tLWxlZnQnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgQm90dG9tUmlnaHQgPSAnYm90dG9tLXJpZ2h0Jyxcbn1cblxuZXhwb3J0IHR5cGUgUG9seWdvblZlcnRpY2VzID0gKFxuICB8IHZlYzJcbiAgfCAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZClcbilbXTtcblxuZXhwb3J0IGVudW0gU2lkZSB7XG4gIFRvcCA9ICd0b3AnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBMZWZ0ID0gJ2xlZnQnLFxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBJbnRlcnZhbDFkLCBJbnRlcnZhbDJkLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBMaW5lLCBQb2x5Z29uVmVydGljZXMsIFNlY3RvcjFkLCBTZWN0b3IyZCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbGluZSBzZWdtZW50J3Mgbm9ybWFsIGlzIGZhY2luZyB0b3dhcmRzIGEgcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJc0ZhY2luZyhsaW5lOiBMaW5lLCBwb3NpdGlvbjogdmVjMikge1xuICBjb25zdCBlZGdlID0gdmVjMi5ub3IodmVjMi5zdWIobGluZS5lbmQsIGxpbmUuc3RhcnQpKTtcbiAgY29uc3QgZWRnZU5vcm1hbCA9IHZlYzIoZWRnZS55LCAtZWRnZS54KTtcbiAgY29uc3QgbGlnaHROb3JtYWwgPSB2ZWMyLm5vcihcbiAgICB2ZWMyLnN1Yih2ZWMyLm11bCh2ZWMyLmFkZChsaW5lLnN0YXJ0LCBsaW5lLmVuZCksIDAuNSksIHBvc2l0aW9uKVxuICApO1xuXG4gIHJldHVybiB2ZWMyLmRvdChsaWdodE5vcm1hbCwgZWRnZU5vcm1hbCkgPD0gMDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwb2x5Z29uIHBhdGggb24gYSBjYW52YXMgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbihcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAuLi52ZXJ0aWNlczogUG9seWdvblZlcnRpY2VzXG4pIHtcbiAgaWYgKHZlcnRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGlmICh0eXBlb2YgdmVydGljZXNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2ZXJ0aWNlc1swXShjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHZlcnRpY2VzW2ldIGFzIEZ1bmN0aW9uKShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5saW5lVG8oKHZlcnRpY2VzW2ldIGFzIHZlYzIpLngsICh2ZXJ0aWNlc1tpXSBhcyB2ZWMyKS55KTtcbiAgICB9XG4gIH1cbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3RvciBvZiBhIHBvaW50IHJlbGF0aXZlIHRvIGEgMWQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3RvcjFkKG46IG51bWJlciwgaW50ZXJ2YWw6IEludGVydmFsMWQpOiBTZWN0b3IxZCB7XG4gIGlmIChuIDw9IGludGVydmFsLnN0YXJ0KSB7XG4gICAgcmV0dXJuIFNlY3RvcjFkLkJlZm9yZTtcbiAgfVxuXG4gIGlmIChuID49IGludGVydmFsLmVuZCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5BZnRlcjtcbiAgfVxuXG4gIHJldHVybiBTZWN0b3IxZC5JbnNpZGU7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IyZChwb2ludDogdmVjMiwgaW50ZXJ2YWw6IEludGVydmFsMmQpOiBTZWN0b3IyZCB7XG4gIGNvbnN0IHggPSBzZWN0b3IxZChwb2ludC54LCB7IHN0YXJ0OiBpbnRlcnZhbC5sZWZ0LCBlbmQ6IGludGVydmFsLnJpZ2h0IH0pO1xuICBjb25zdCB5ID0gc2VjdG9yMWQocG9pbnQueSwgeyBzdGFydDogaW50ZXJ2YWwudG9wLCBlbmQ6IGludGVydmFsLmJvdHRvbSB9KTtcblxuICByZXR1cm4ge1xuICAgIFtTZWN0b3IxZC5CZWZvcmVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5MZWZ0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tTGVmdCxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5JbnNpZGVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wLFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkluc2lkZSxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbSxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5BZnRlcl06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BSaWdodCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5SaWdodCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbVJpZ2h0LFxuICAgIH0sXG4gIH1beF1beV07XG59XG5cbmNvbnN0IHNpbGhvdWV0dGVzID0gbmV3IFdlYWtNYXA8U2NlbmVJbWFnZSwgSFRNTENhbnZhc0VsZW1lbnQ+KCk7XG5cbi8qKlxuICogR2V0IGEgYmxhY2sgY29weSBvZiBhbiBpbWFnZSB3aGljaCBrZWVwcyB0aGUgaW1hZ2UncyBhbHBoYSBjaGFubmVsLCBvciBudWxsXG4gKiBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbGhvdWV0dGUoaW1hZ2U6IFNjZW5lSW1hZ2UpOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICBpZiAoaW1hZ2Uud2lkdGggPT09IDAgfHwgaW1hZ2UuaGVpZ2h0ID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmICFpbWFnZS5jb21wbGV0ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHNpbGhvdWV0dGVzLmdldChpbWFnZSk7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcmVzdWx0LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgcmVzdWx0LmhlaWdodCA9IGltYWdlLmhlaWdodDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSByZXN1bHQuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgcmVzdWx0LndpZHRoLCByZXN1bHQuaGVpZ2h0KTtcblxuICAgIHNpbGhvdWV0dGVzLnNldChpbWFnZSwgcmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IGRyYXdJbWFnZUluUmVjdGFuZ2xlLCBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgUmVmbGVjdGlvblN5c3RlbSB9IGZyb20gJy4vUmVmbGVjdGlvblN5c3RlbSc7XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgPSBSZWN0YW5nbGUgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hpY2ggcGFydHMgb2YgdGhpcyByZWN0YW5nbGUgYXJlXG4gICAqIHJlZmxlY3RpdmUsIHRoZSBkZWZhdWx0IGlzIHRoZSB3aG9sZSByZWN0YW5nbGVcbiAgICovXG4gIG1hc2s/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBtYXNrIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVjdGFuZ2xlPyBPdGhlcndpc2UgaXQgd2lsbCBiZVxuICAgKiBzdHJldGNoZWQgdG8gZml0XG4gICAqL1xuICByZXBlYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIb3cgc3Ryb25nIHRoZSByZWZsZWN0aW9uIGlzLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgc3RyZW5ndGg/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEFuIGFyZWEgdGhhdCBzaG93cyByZWZsZWN0aW9uc1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1hc2s6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBwdWJsaWMgcmVwZWF0OiBib29sZWFuO1xuICBwdWJsaWMgc3RyZW5ndGg6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW07XG5cbiAgcHJpdmF0ZSByZW1vdmVDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gICAgZGVmYXVsdFN0cmVuZ3RoOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucyA9IHJlZmxlY3Rpb25zO1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweShvcHRpb25zLnNpemUpO1xuICAgIHRoaXMubWFzayA9IG9wdGlvbnMubWFzayA/PyBudWxsO1xuICAgIHRoaXMucmVwZWF0ID0gb3B0aW9ucy5yZXBlYXQgPz8gZmFsc2U7XG4gICAgdGhpcy5zdHJlbmd0aCA9IG9wdGlvbnMuc3RyZW5ndGggPz8gZGVmYXVsdFN0cmVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGwgdGhpcyBhcmVhLCBzbyB0aGF0IHRoZSBjb250ZXh0IG9ubHkga2VlcHMgcmVmbGVjdGl2ZSBwYXJ0cyBvciBzbyB0aGF0XG4gICAqIGl0IHNob3dzIHdoaWNoIHBhcnRzIGFyZSByZWZsZWN0aXZlXG4gICAqL1xuICBwdWJsaWMgZHJhd01hc2soY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgdGhpcy5tYXNrLCB0aGlzLCB0aGlzLnJlcGVhdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB0aGlzLnNpemUueCxcbiAgICAgICAgdGhpcy5zaXplLnlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgcmVjZWl2ZXIgaXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIG9uUmVtb3ZlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgcmVjZWl2ZXIgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucy5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgPSBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zO1xuXG4vKipcbiAqIEEgcmVmbGVjdGl2ZSBwYXJ0IG9mIHRoZSBmbG9vclxuICovXG5leHBvcnQgY2xhc3MgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIgZXh0ZW5kcyBSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NUUkVOR1RIID0gMC41O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbSxcbiAgICBvcHRpb25zOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIocmVmbGVjdGlvbnMsIG9wdGlvbnMsIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLkRFRkFVTFRfU1RSRU5HVEgpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zID0gUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSB3YWxsIG1lZXRzIHRoZSBncm91bmQsIHRoZSBkZWZhdWx0IGlzIHRoZSBib3R0b20gb2YgdGhlIHJlY3RhbmdsZVxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBzZXQgaWYgdGhlIHJlY3RhbmdsZSBpcyBvbmx5IHBhcnQgb2YgYSB3YWxsLCBmb3IgZXhhbXBsZSBhXG4gICAqIG1pcnJvciB0aGF0J3MgaGFuZ2luZyBhYm92ZSB0aGUgZmxvb3JcbiAgICovXG4gIGZvb3Q/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgcmVmbGVjdGl2ZSBwYXJ0IG9mIGEgd2FsbFxuICovXG5leHBvcnQgY2xhc3MgV2FsbFJlZmxlY3Rpb25SZWNlaXZlciBleHRlbmRzIFJlZmxlY3Rpb25SZWNlaXZlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU1RSRU5HVEggPSAxO1xuXG4gIHB1YmxpYyBmb290OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKHJlZmxlY3Rpb25zLCBvcHRpb25zLCBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLkRFRkFVTFRfU1RSRU5HVEgpO1xuICAgIHRoaXMuZm9vdCA9IG9wdGlvbnMuZm9vdCA/PyB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgcmVjZWl2ZXIncyByZWZsZWN0aW9ucyB3aXRoIHRoZSBjYW1lcmEncyB0cmFuc2Zvcm1zIGFwcGxpZWRcbiAgICpcbiAgICogUmVmbGVjdGlvbnMgaW4gd2FsbHMgY2FuIGJlIGNvdmVyZWQgYnkgdGhpbmdzIHRoYXQgYXJlIGRyYXduIGFmdGVyd2FyZHMsIHNvXG4gICAqIHRoaXMgbmVlZHMgdG8gYmUgZHJhd24gc3RyYWlnaHQgYWZ0ZXIgdGhlIHdhbGxcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMucmVmbGVjdGlvbnMuZHJhd1dhbGxSZWNlaXZlcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBTcHJpdGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zcHJpdGUnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UsIHNwcml0ZUJvdW5kcyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBSZWZsZWN0aW9uU3lzdGVtIH0gZnJvbSAnLi9SZWZsZWN0aW9uU3lzdGVtJztcblxuLyoqXG4gKiBTb21ldGhpbmcgdGhhdCBpc24ndCBhIHNwcml0ZSBidXQgY2FuIHN0aWxsIGJlIHJlZmxlY3RlZFxuICpcbiAqIFRoaXMgb2JqZWN0IGlzIHJlYWQgZXZlcnkgZnJhbWUsIHNvIGl0IGNhbiBiZSBtb3ZlZCBieSBjaGFuZ2luZyBpdHMgcG9zaXRpb25cbiAqL1xuZXhwb3J0IHR5cGUgUmVmbGVjdGlvbk9iamVjdCA9IFJlY3RhbmdsZSAmIHtcbiAgLyoqXG4gICAqIFRoZSBpbWFnZSBmb3IgdGhpcyBvYmplY3QsIHRoaXMgaXMgc3RyZXRjaGVkIHRvIGZpdCB0aGUgcmVjdGFuZ2xlXG4gICAqL1xuICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgb2JqZWN0IGluIHdvcmxkIGNvb3JkaW5hdGVzLCB0aGlzIGlzIHVzZWQgaW5zdGVhZCBvZiBgaW1hZ2VgXG4gICAqL1xuICBkcmF3PzogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyA9IHtcbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhlIG9iamVjdCdzIGZlZXQgYXJlIGFib3ZlIHRoZSBib3R0b20gZWRnZSBvZiBpdHMgcmVjdGFuZ2xlLCB0aGlzXG4gICAqIGlzIHVzZWZ1bCBpZiBhbiBpbWFnZSBoYXMgc29tZSBlbXB0eSBzcGFjZSB1bmRlcm5lYXRoIHRoZSBvYmplY3RcbiAgICovXG4gIGZvb3RPZmZzZXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIHNvdXJjZSBhcHBlYXIgaW4gZmxvb3JzP1xuICAgKi9cbiAgZmxvb3I/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBzb3VyY2UgYXBwZWFyIGluIHdhbGxzP1xuICAgKi9cbiAgd2FsbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoaWNoIHdheSBhIHNwcml0ZSBhcHBlYXJzIHRvIGJlIGZhY2luZyBpbiBhIHdhbGwsIGZvciBlYWNoIGRpcmVjdGlvbiB0aGF0XG4gICAqIGl0IGNvdWxkIGJlIGZhY2luZy4gRGlyZWN0aW9ucyB0aGF0IGFyZW4ndCBpbiB0aGlzIGxpc3Qgd2lsbCBzdGF5IHRoZSBzYW1lXG4gICAqXG4gICAqIFdhbGxzIGZhY2UgdGhlIGNhbWVyYSwgc28gdGhpcyBzaG91bGQgc3dhcCBkaXJlY3Rpb25zIHdoaWNoIHBvaW50IHRvd2FyZHNcbiAgICogYW5kIGF3YXkgZnJvbSB0aGUgY2FtZXJhLiBUaGUgZGVmYXVsdCBzd2FwcyBub3J0aCBhbmQgc291dGgsIGFuZCB1cCBhbmRcbiAgICogZG93blxuICAgKi9cbiAgd2FsbERpcmVjdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgZm9yIGFuIG9iamVjdCB3aGVuIGl0J3Mgc2VlbiBpbiBhIHdhbGwsIHRoaXMgc2hvdWxkIHNob3cgdGhlXG4gICAqIG9wcG9zaXRlIHNpZGUgb2YgdGhlIG9iamVjdC4gSWYgdGhpcyBpc24ndCBzZXQgdGhlbiB0aGUgb2JqZWN0IGxvb2tzIHRoZVxuICAgKiBzYW1lIGFzIGl0IGRvZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICB3YWxsSW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zID0gUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzICZcbiAgKHsgc3ByaXRlOiBTcHJpdGUgfSB8IHsgb2JqZWN0OiBSZWZsZWN0aW9uT2JqZWN0IH0pO1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGFwcGVhcnMgaW4gZmxvb3JzIGFuZCB3YWxscyB0aGF0IGFyZSByZWZsZWN0aXZlXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uU291cmNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9XQUxMX0RJUkVDVElPTlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgbm9ydGg6ICdzb3V0aCcsXG4gICAgc291dGg6ICdub3J0aCcsXG4gICAgdXA6ICdkb3duJyxcbiAgICBkb3duOiAndXAnLFxuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBzcHJpdGU6IFNwcml0ZSB8IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSBvYmplY3Q6IFJlZmxlY3Rpb25PYmplY3QgfCBudWxsO1xuXG4gIHB1YmxpYyBmb290T2Zmc2V0OiBudW1iZXI7XG4gIHB1YmxpYyBmbG9vcjogYm9vbGVhbjtcbiAgcHVibGljIHdhbGw6IGJvb2xlYW47XG4gIHB1YmxpYyB3YWxsRGlyZWN0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHVibGljIHdhbGxJbWFnZTogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgcHJpdmF0ZSByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW0sXG4gICAgb3B0aW9uczogUmVmbGVjdGlvblNvdXJjZU9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucyA9IHJlZmxlY3Rpb25zO1xuICAgIHRoaXMuc3ByaXRlID0gJ3Nwcml0ZScgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3ByaXRlIDogbnVsbDtcbiAgICB0aGlzLm9iamVjdCA9ICdvYmplY3QnIGluIG9wdGlvbnMgPyBvcHRpb25zLm9iamVjdCA6IG51bGw7XG4gICAgdGhpcy5mb290T2Zmc2V0ID0gb3B0aW9ucy5mb290T2Zmc2V0ID8/IDA7XG4gICAgdGhpcy5mbG9vciA9IG9wdGlvbnMuZmxvb3IgPz8gdHJ1ZTtcbiAgICB0aGlzLndhbGwgPSBvcHRpb25zLndhbGwgPz8gdHJ1ZTtcbiAgICB0aGlzLndhbGxEaXJlY3Rpb25zID1cbiAgICAgIG9wdGlvbnMud2FsbERpcmVjdGlvbnMgPz8gUmVmbGVjdGlvblNvdXJjZS5ERUZBVUxUX1dBTExfRElSRUNUSU9OUztcbiAgICB0aGlzLndhbGxJbWFnZSA9IG9wdGlvbnMud2FsbEltYWdlID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFyZWEgY292ZXJlZCBieSB0aGlzIHNvdXJjZSBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHB1YmxpYyBnZXQgYm91bmRzKCk6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIHRoaXMuc3ByaXRlID8gc3ByaXRlQm91bmRzKHRoaXMuc3ByaXRlKSA6IHRoaXMub2JqZWN0ITtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHNvdXJjZSBtZWV0cyB0aGUgZ3JvdW5kXG4gICAqL1xuICBwdWJsaWMgZ2V0IGZvb3QoKTogbnVtYmVyIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgIHJldHVybiBwb3NpdGlvbi55ICsgc2l6ZS55IC0gdGhpcy5mb290T2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcmVhIGNvdmVyZWQgYnkgdGhpcyBzb3VyY2Ugd2hlbiBpdCdzIHJlZmxlY3RlZCBpbiBhIGZsb29yXG4gICAqL1xuICBwdWJsaWMgZ2V0IGZsb29yQm91bmRzKCk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIocG9zaXRpb24ueCwgdGhpcy5mb290ICogMiAtIChwb3NpdGlvbi55ICsgc2l6ZS55KSksXG4gICAgICBzaXplLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFyZWEgY292ZXJlZCBieSB0aGlzIHNvdXJjZSB3aGVuIGl0J3MgcmVmbGVjdGVkIGluIGEgd2FsbFxuICAgKi9cbiAgcHVibGljIHdhbGxCb3VuZHMod2FsbEZvb3Q6IG51bWJlcik6IFJlY3RhbmdsZSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIocG9zaXRpb24ueCwgcG9zaXRpb24ueSArICh3YWxsRm9vdCAtIHRoaXMuZm9vdCkgKiAyKSxcbiAgICAgIHNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgc291cmNlJ3MgcmVmbGVjdGlvbiBpbiBhIGZsb29yXG4gICAqXG4gICAqIEdvaW5nIGJlbG93IHRoZSBmbG9vciBkb2Vzbid0IGNoYW5nZSB3aGVyZSBzb21ldGhpbmcncyBmZWV0IGFyZSwgc28gdGhlXG4gICAqIHJlZmxlY3Rpb24gaXMgZmxpcHBlZCB1cHNpZGUtZG93biBhcm91bmQgaXRzIGZlZXRcbiAgICovXG4gIHB1YmxpYyBkcmF3SW5GbG9vcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLCB0aGlzLmZvb3QgKiAyKTtcbiAgICBjb250ZXh0LnNjYWxlKDEsIC0xKTtcbiAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGlzIHNvdXJjZSdzIHJlZmxlY3Rpb24gaW4gYSB3YWxsXG4gICAqXG4gICAqIFRoZSByZWZsZWN0aW9uIGlzIGFzIGZhciBiZWhpbmQgdGhlIHdhbGwgYXMgdGhpcyBzb3VyY2UgaXMgaW4gZnJvbnQgb2YgaXQsXG4gICAqIHNvIGl0J3MgdGhlIHNhbWUgd2F5IHVwIGJ1dCBmdXJ0aGVyIHVwIHRoZSBzY3JlZW4sIGFuZCB3ZSBjYW4gc2VlIHRoZSBzaWRlXG4gICAqIG9mIHRoaXMgc291cmNlIHRoYXQgZmFjZXMgdGhlIHdhbGxcbiAgICovXG4gIHB1YmxpYyBkcmF3SW5XYWxsKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgd2FsbEZvb3Q6IG51bWJlcikge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKDAsICh3YWxsRm9vdCAtIHRoaXMuZm9vdCkgKiAyKTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdGhpcy5kcmF3U3ByaXRlSW5XYWxsKGNvbnRleHQsIHRoaXMuc3ByaXRlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMud2FsbEltYWdlKSB7XG4gICAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHRoaXMud2FsbEltYWdlLFxuICAgICAgICBwb3NpdGlvbi54LFxuICAgICAgICBwb3NpdGlvbi55LFxuICAgICAgICBzaXplLngsXG4gICAgICAgIHNpemUueVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3U3ByaXRlSW5XYWxsKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc3ByaXRlOiBTcHJpdGUpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPVxuICAgICAgdGhpcy53YWxsRGlyZWN0aW9uc1tzcHJpdGUuZGlyZWN0aW9uXSA/PyBzcHJpdGUuZGlyZWN0aW9uO1xuXG4gICAgLy8gVGhlIHNwcml0ZSBjYW4gb25seSBkcmF3IGl0c2VsZiBmYWNpbmcgaXRzIGN1cnJlbnQgZGlyZWN0aW9uXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gc3ByaXRlLmRpcmVjdGlvbikge1xuICAgICAgc3ByaXRlLmRyYXcoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSBzcHJpdGUuZ2V0SW1hZ2UoZGlyZWN0aW9uKTtcbiAgICBpZiAoIWltYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC50cmFuc2xhdGUoc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnNjYWxlKHNwcml0ZS5zY2FsZSwgc3ByaXRlLnNjYWxlKTtcbiAgICBjb250ZXh0LnJvdGF0ZShzcHJpdGUucm90YXRpb24pO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgaW1hZ2UsXG4gICAgICAtc3ByaXRlLm9yaWdpbi54LFxuICAgICAgLXNwcml0ZS5vcmlnaW4ueSxcbiAgICAgIGltYWdlLndpZHRoLFxuICAgICAgaW1hZ2UuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLmRyYXcoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSwgaW1hZ2UsIGRyYXcgfSA9IHRoaXMub2JqZWN0ITtcblxuICAgIGlmIChkcmF3KSB7XG4gICAgICBkcmF3KGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoaW1hZ2UpIHtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLngsIHNpemUueSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHNvdXJjZSBmcm9tIHRoZSByZWZsZWN0aW9uIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zLnJlbW92ZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRnJhbWUsXG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIFJlY3RhbmdsZSxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlcixcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1JlZmxlY3Rpb25SZWNlaXZlcic7XG5pbXBvcnQgeyBSZWZsZWN0aW9uU291cmNlLCBSZWZsZWN0aW9uU291cmNlT3B0aW9ucyB9IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5cbi8qKlxuICogUmVuZGVycyBmbG9vciBhbmQgd2FsbCByZWZsZWN0aW9uc1xuICpcbiAqIFJlZmxlY3Rpb25zIGFyZSBkcmF3biBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY2VuZSwgc28gdGhpcyBoYXMgdG8gYmUgY2FsbGVkIGluXG4gKiBzZXZlcmFsIHN0ZXBzLiBTZWUgYFdvcmxkYCBmb3IgaG93IHRoaXMgZml0cyB0b2dldGhlciB3aXRoIGV2ZXJ5dGhpbmcgZWxzZVxuICpcbiAqIDEuIENhbGwgYHByZXBhcmUoKWAgYXQgdGhlIHN0YXJ0IG9mIGVhY2ggZnJhbWVcbiAqIDIuIERyYXcgdGhlIGdyb3VuZFxuICogMy4gQ2FsbCBgZHJhd0Zsb29yKClgXG4gKiA0LiBEcmF3IHdhbGxzIGFuZCBhY3RvcnMsIGNhbGxpbmcgYGRyYXcoKWAgb24gZWFjaCB3YWxsIHJlY2VpdmVyIGFzIHNvb24gYXNcbiAqICAgIGl0cyB3YWxsIGhhcyBiZWVuIGRyYXduXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHByaXZhdGUgc291cmNlczogUmVmbGVjdGlvblNvdXJjZVtdID0gW107XG4gIHByaXZhdGUgZmxvb3JSZWNlaXZlcnM6IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSB3YWxsUmVjZWl2ZXJzOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyW10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIHNjcmVlbi1zaXplZCBjYW52YXNlcyB0aGF0IHJlZmxlY3Rpb25zIGFyZSBkcmF3biBpbnRvXG4gICAqXG4gICAqIGBmbG9vclNvdXJjZXNDYW52YXNgIHNob3dzIGV2ZXJ5IHNvdXJjZSByZWZsZWN0ZWQgaW4gdGhlIGZsb29yLCBhcyBpZiB0aGVcbiAgICogd2hvbGUgZmxvb3Igd2FzIHJlZmxlY3RpdmVcbiAgICovXG4gIHByaXZhdGUgZmxvb3JTb3VyY2VzQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgZmxvb3JTb3VyY2VzQ2FudmFzID0gdGhpcy5mbG9vclNvdXJjZXNDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIGZsb29yQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwcml2YXRlIHdhbGxDb250ZXh0ID0gUmVmbGVjdGlvblN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG5cbiAgcHJpdmF0ZSBmcmFtZTogRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQWRkIHNvbWV0aGluZyB0aGF0IGFwcGVhcnMgaW4gcmVmbGVjdGlvbnNcbiAgICovXG4gIHB1YmxpYyBhZGRTb3VyY2Uob3B0aW9uczogUmVmbGVjdGlvblNvdXJjZU9wdGlvbnMpOiBSZWZsZWN0aW9uU291cmNlIHtcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgUmVmbGVjdGlvblNvdXJjZSh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNvdXJjZXMucHVzaChzb3VyY2UpO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWZsZWN0aXZlIHBhcnQgb2YgdGhlIGZsb29yXG4gICAqL1xuICBwdWJsaWMgYWRkRmxvb3JSZWNlaXZlcihcbiAgICBvcHRpb25zOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKTogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gbmV3IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZmxvb3JSZWNlaXZlcnMucHVzaChyZWNlaXZlcik7XG5cbiAgICByZXR1cm4gcmVjZWl2ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVmbGVjdGl2ZSBwYXJ0IG9mIGEgd2FsbFxuICAgKi9cbiAgcHVibGljIGFkZFdhbGxSZWNlaXZlcihcbiAgICBvcHRpb25zOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9uc1xuICApOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgICBjb25zdCByZWNlaXZlciA9IG5ldyBXYWxsUmVmbGVjdGlvblJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5wdXNoKHJlY2VpdmVyKTtcblxuICAgIHJldHVybiByZWNlaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzb3VyY2Ugb3IgcmVjZWl2ZXIgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUob2JqZWN0OiBSZWZsZWN0aW9uU291cmNlIHwgUmVmbGVjdGlvblJlY2VpdmVyKSB7XG4gICAgdGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2VzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5mbG9vclJlY2VpdmVycyA9IHRoaXMuZmxvb3JSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSB0aGlzLndhbGxSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVhZHkgdG8gZHJhdyByZWZsZWN0aW9ucyBmb3IgYSBmcmFtZVxuICAgKi9cbiAgcHVibGljIHByZXBhcmUoZnJhbWU6IEZyYW1lKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNjcmVlbi1zaXplZCBjb250ZXh0IG1hdGNoZXMgdGhlIGZyYW1lIGFuZCBjbGVhciBpdCwgcmVhZHkgZm9yXG4gICAqIGRyYXdpbmcgaW4gd29ybGQgY29vcmRpbmF0ZXNcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDb250ZXh0KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gZnJhbWUuc2NyZWVuLnggfHwgY2FudmFzLmhlaWdodCAhPT0gZnJhbWUuc2NyZWVuLnkpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGZyYW1lLnNjcmVlbi54O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGZyYW1lLnNjcmVlbi55O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmcmFtZS5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICBmcmFtZS5jYW1lcmEuc2V0VHJhbnNmb3Jtcyhjb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaWJsZUFyZWEoeyBjYW1lcmEgfTogRnJhbWUpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiBpbnRlcnZhbFRvUmVjdGFuZ2xlKGNhbWVyYS5ib3VuZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzb3VyY2VzIGluIHRoZSBvcmRlciB0aGF0IHRoZXkgc2hvdWxkIGJlIGRyYXduLCBzb3VyY2VzIHdpdGggZmVldFxuICAgKiBmdXJ0aGVyIGRvd24gdGhlIHNjcmVlbiBhcmUgZHJhd24gbGFzdFxuICAgKi9cbiAgcHJpdmF0ZSBzb3J0ZWRTb3VyY2VzKHNvdXJjZXM6IFJlZmxlY3Rpb25Tb3VyY2VbXSk6IFJlZmxlY3Rpb25Tb3VyY2VbXSB7XG4gICAgcmV0dXJuIHNvdXJjZXNcbiAgICAgIC5tYXAoc291cmNlID0+ICh7IHNvdXJjZSwgZm9vdDogc291cmNlLmZvb3QgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5mb290IC0gYi5mb290KVxuICAgICAgLm1hcCgoeyBzb3VyY2UgfSkgPT4gc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHJlZmxlY3Rpb25zIG9udG8gdGhlIGZsb29yLCB0aGlzIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgZHJhd2luZyB0aGVcbiAgICogZ3JvdW5kIGFuZCBiZWZvcmUgZHJhd2luZyBhbnl0aGluZyB0aGF0IHN0YW5kcyBvbiBpdFxuICAgKi9cbiAgcHVibGljIGRyYXdGbG9vcigpIHtcbiAgICBjb25zdCB7IGZyYW1lIH0gPSB0aGlzO1xuICAgIGlmICghZnJhbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy52aXNpYmxlQXJlYShmcmFtZSk7XG4gICAgY29uc3QgcmVjZWl2ZXJzID0gdGhpcy5mbG9vclJlY2VpdmVycy5maWx0ZXIocmVjZWl2ZXIgPT5cbiAgICAgIHJlY3RhbmdsZXNJbnRlcnNlY3QocmVjZWl2ZXIsIHZpc2libGUpXG4gICAgKTtcbiAgICBpZiAocmVjZWl2ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZXMgPSB0aGlzLnNvcnRlZFNvdXJjZXMoXG4gICAgICB0aGlzLnNvdXJjZXMuZmlsdGVyKFxuICAgICAgICBzb3VyY2UgPT5cbiAgICAgICAgICBzb3VyY2UuZmxvb3IgJiYgcmVjdGFuZ2xlc0ludGVyc2VjdChzb3VyY2UuZmxvb3JCb3VuZHMsIHZpc2libGUpXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dCwgZnJhbWUpO1xuICAgIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4gc291cmNlLmRyYXdJbkZsb29yKHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dCkpO1xuXG4gICAgLy8gU3RhcnQgd2l0aCB0aGUgc2hhcGUgb2YgdGhlIHJlY2VpdmVycyBhbmQga2VlcCB0aGUgc291cmNlcyBpbnNpZGUgaXQsXG4gICAgLy8gdGhpcyB3YXkgc291cmNlcyBkb24ndCBzaG93IHRocm91Z2ggZWFjaCBvdGhlciB3aGVuIHN0cmVuZ3RoIGlzIGJlbG93IDFcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5mbG9vckNvbnRleHQ7XG4gICAgdGhpcy5yZXNldENvbnRleHQoY29udGV4dCwgZnJhbWUpO1xuICAgIHJlY2VpdmVycy5mb3JFYWNoKHJlY2VpdmVyID0+IHtcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSByZWNlaXZlci5zdHJlbmd0aDtcbiAgICAgIHJlY2VpdmVyLmRyYXdNYXNrKGNvbnRleHQpO1xuICAgIH0pO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5mbG9vclNvdXJjZXNDYW52YXMsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgIGZyYW1lLmNvbnRleHQuc2F2ZSgpO1xuICAgIGZyYW1lLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGZyYW1lLmNvbnRleHQuZHJhd0ltYWdlKGNvbnRleHQuY2FudmFzLCAwLCAwKTtcbiAgICBmcmFtZS5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSByZWZsZWN0aW9ucyBpbiBhIHdhbGwgcmVjZWl2ZXJcbiAgICovXG4gIHB1YmxpYyBkcmF3V2FsbFJlY2VpdmVyKFxuICAgIHJlY2VpdmVyOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLFxuICAgIHRhcmdldDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICkge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSB8fCAhcmVjdGFuZ2xlc0ludGVyc2VjdChyZWNlaXZlciwgdGhpcy52aXNpYmxlQXJlYShmcmFtZSkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT25seSB0aGluZ3MgaW4gZnJvbnQgb2YgdGhlIHdhbGwgY2FuIGJlIHNlZW4gaW4gaXRcbiAgICBjb25zdCBzb3VyY2VzID0gdGhpcy5zb3J0ZWRTb3VyY2VzKFxuICAgICAgdGhpcy5zb3VyY2VzLmZpbHRlcihcbiAgICAgICAgc291cmNlID0+XG4gICAgICAgICAgc291cmNlLndhbGwgJiZcbiAgICAgICAgICBzb3VyY2UuZm9vdCA+IHJlY2VpdmVyLmZvb3QgJiZcbiAgICAgICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KHNvdXJjZS53YWxsQm91bmRzKHJlY2VpdmVyLmZvb3QpLCByZWNlaXZlcilcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChzb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLndhbGxDb250ZXh0O1xuICAgIHRoaXMucmVzZXRDb250ZXh0KGNvbnRleHQsIGZyYW1lKTtcblxuICAgIC8vIFRoZSBjbG9zZXN0IHRoaW5nIHRvIHRoZSB3YWxsIGlzIGFsc28gdGhlIGNsb3Nlc3QgdGhpbmcgdG8gdXMgd2hlbiB3ZVxuICAgIC8vIGxvb2sgaW50byB0aGUgcmVmbGVjdGlvbiwgc28gc291cmNlcyBhcmUgZHJhd24gaW4gcmV2ZXJzZSBvcmRlclxuICAgIHNvdXJjZXNcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKHNvdXJjZSA9PiBzb3VyY2UuZHJhd0luV2FsbChjb250ZXh0LCByZWNlaXZlci5mb290KSk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgcmVjZWl2ZXIuZHJhd01hc2soY29udGV4dCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgdGFyZ2V0LnNhdmUoKTtcbiAgICB0YXJnZXQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIHRhcmdldC5nbG9iYWxBbHBoYSA9IHJlY2VpdmVyLnN0cmVuZ3RoO1xuICAgIHRhcmdldC5kcmF3SW1hZ2UoY29udGV4dC5jYW52YXMsIDAsIDApO1xuICAgIHRhcmdldC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIsXG59IGZyb20gJy4vUmVmbGVjdGlvblJlY2VpdmVyJztcbmV4cG9ydCB0eXBlIHtcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9SZWZsZWN0aW9uUmVjZWl2ZXInO1xuZXhwb3J0IHsgUmVmbGVjdGlvblNvdXJjZSB9IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5leHBvcnQgdHlwZSB7XG4gIFJlZmxlY3Rpb25PYmplY3QsXG4gIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zLFxuICBSZWZsZWN0aW9uU291cmNlU2V0dGluZ3MsXG59IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5leHBvcnQgeyBSZWZsZWN0aW9uU3lzdGVtIH0gZnJvbSAnLi9SZWZsZWN0aW9uU3lzdGVtJztcbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgYm91bmRpbmdSZWN0YW5nbGUsIEZyYW1lLCBSZWN0YW5nbGUsIFNjZW5lQ2FtZXJhIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBBY3RvcixcbiAgQWN0b3JPcHRpb25zLFxuICBHcm91bmRSZWNlaXZlcixcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBMaWdodCxcbiAgTGlnaHRpbmdTeXN0ZW0sXG4gIExpZ2h0T3B0aW9ucyxcbiAgU3ByaXRlQWN0b3JPcHRpb25zLFxuICBTdXJmYWNlLFxuICBXYWxsLFxuICBXYWxsT3B0aW9ucyxcbiAgV2FsbFJlY2VpdmVyLFxufSBmcm9tICcuLi9saWdodGluZyc7XG5pbXBvcnQgdHlwZSB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gIFJlZmxlY3Rpb25PYmplY3QsXG4gIFJlZmxlY3Rpb25Tb3VyY2UsXG4gIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyxcbiAgUmVmbGVjdGlvblN5c3RlbSxcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4uL3JlZmxlY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgV29ybGRPcHRpb25zID0ge1xuICAvKipcbiAgICogVGhlIGxpZ2h0aW5nIHN5c3RlbSBmb3IgdGhpcyB3b3JsZFxuICAgKlxuICAgKiBUaGUgbGlnaHRpbmcgc3lzdGVtIGhvbGRzIHRoZSBzY2VuZSwgc28gYSB3b3JsZCBhbHdheXMgaGFzIG9uZS4gSWYgdGhpc1xuICAgKiBpc24ndCBzZXQgdGhlbiB0aGUgc2NlbmUgd2lsbCBiZSBkcmF3biB3aXRob3V0IGFueSBsaWdodGluZ1xuICAgKi9cbiAgbGlnaHRpbmc/OiBMaWdodGluZ1N5c3RlbTtcblxuICAvKipcbiAgICogVGhlIHJlZmxlY3Rpb24gc3lzdGVtIGZvciB0aGlzIHdvcmxkLCBpZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZVxuICAgKiB3b24ndCBoYXZlIGFueSByZWZsZWN0aW9uc1xuICAgKi9cbiAgcmVmbGVjdGlvbnM/OiBSZWZsZWN0aW9uU3lzdGVtO1xufTtcblxudHlwZSBSZWZsZWN0aW9uU291cmNlT3B0aW9uID0ge1xuICAvKipcbiAgICogU2hvdWxkIHRoaXMgb2JqZWN0IGFwcGVhciBpbiByZWZsZWN0aW9ucz8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgaG93XG4gICAqIGl0J3MgcmVmbGVjdGVkXG4gICAqL1xuICByZWZsZWN0aW9uU291cmNlPzogYm9vbGVhbiB8IFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCB0eXBlIFdvcmxkQWN0b3JPcHRpb25zID0gKEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9ucykgJlxuICBSZWZsZWN0aW9uU291cmNlT3B0aW9uO1xuXG5leHBvcnQgdHlwZSBXb3JsZEdyb3VuZE9wdGlvbnMgPSBHcm91bmRSZWNlaXZlck9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBncm91bmQgc2hvdyByZWZsZWN0aW9ucz8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgdGhlXG4gICAqIHJlZmxlY3Rpb24sIGJ5IGRlZmF1bHQgaXQgd2lsbCBjb3ZlciB0aGUgd2hvbGUgYXJlYSBvZiB0aGUgZ3JvdW5kXG4gICAqL1xuICByZWZsZWN0aW9uUmVjZWl2ZXI/OiBib29sZWFuIHwgUGFydGlhbDxGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRXYWxsT3B0aW9ucyA9IFdhbGxPcHRpb25zICZcbiAgUmVmbGVjdGlvblNvdXJjZU9wdGlvbiAmIHtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGhlIGZyb250IG9mIHRoaXMgd2FsbCBzaG93IHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvXG4gICAgICogY29uZmlndXJlIHRoZSByZWZsZWN0aW9uLCBieSBkZWZhdWx0IGl0IHdpbGwgY292ZXIgdGhlIHdob2xlIGZyb250XG4gICAgICovXG4gICAgcmVmbGVjdGlvblJlY2VpdmVyPzogYm9vbGVhbiB8IFBhcnRpYWw8V2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xuICB9O1xuXG4vKipcbiAqIEEgc2NlbmUgdGhhdCdzIHJlbmRlcmVkIGJ5IHNldmVyYWwgc3lzdGVtcyB3b3JraW5nIHRvZ2V0aGVyXG4gKlxuICogU3lzdGVtcyBkb24ndCBrbm93IGFib3V0IGVhY2ggb3RoZXIsIHRoZXkgZWFjaCBkcmF3IGEgcGFydCBvZiB0aGUgZnJhbWUgYW5kXG4gKiB0aGlzIGNsYXNzIGRlY2lkZXMgdGhlIG9yZGVyLiBUaGUgZnJhbWUgaXMgcmVuZGVyZWQgaW4gdGhlc2Ugc3RlcHM6XG4gKlxuICogMS4gRHJhdyB0aGUgZ3JvdW5kXG4gKiAyLiBEcmF3IHJlZmxlY3Rpb25zIG9udG8gdGhlIGZsb29yXG4gKiAzLiBEcmF3IHRoZSB3YWxscyBhbmQgYWN0b3JzIHRoYXQgc3RhbmQgb24gdGhlIGdyb3VuZCwgcmVmbGVjdGlvbnMgaW4gYSB3YWxsXG4gKiAgICBhcmUgZHJhd24gYWxvbmcgd2l0aCB0aGF0IHdhbGxcbiAqIDQuIEFwcGx5IGxpZ2h0aW5nIHRvIHRoZSB3aG9sZSBzY2VuZVxuICovXG5leHBvcnQgY2xhc3MgV29ybGQge1xuICBwdWJsaWMgcmVhZG9ubHkgbGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtO1xuICBwdWJsaWMgcmVhZG9ubHkgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW0gfCBudWxsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zPzogV29ybGRPcHRpb25zKSB7XG4gICAgdGhpcy5saWdodGluZyA9XG4gICAgICBvcHRpb25zPy5saWdodGluZyA/PyBuZXcgTGlnaHRpbmdTeXN0ZW0oeyBsaWdodGluZ0VuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVmbGVjdGlvbnMgPSBvcHRpb25zPy5yZWZsZWN0aW9ucyA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzdXJmYWNlIG9yIGEgZ3JvdXAgb2Ygc3VyZmFjZXMgbG9vayBsaWtlIGEgc2luZ2xlIG9iamVjdCB0byB0aGVcbiAgICogcmVmbGVjdGlvbiBzeXN0ZW0sIHRoZSBib3R0b20gb2YgdGhlIGdyb3VwIHNob3VsZCBiZSB3aGVyZSBpdCBtZWV0cyB0aGVcbiAgICogZ3JvdW5kXG4gICAqXG4gICAqIE92ZXJsYXlzIGFyZW4ndCBpbmNsdWRlZCwgdGhleSBtaWdodCBiZSBzaG93aW5nIHJlZmxlY3Rpb25zIHRoZW1zZWx2ZXNcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlZmxlY3Rpb25PYmplY3QoXG4gICAgLi4uc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdXG4gICk6IFJlZmxlY3Rpb25PYmplY3Qge1xuICAgIGNvbnN0IGJvdW5kcyA9ICgpID0+XG4gICAgICBzdXJmYWNlcy5yZWR1Y2U8UmVjdGFuZ2xlPihib3VuZGluZ1JlY3RhbmdsZSwgc3VyZmFjZXNbMF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcygpLnBvc2l0aW9uO1xuICAgICAgfSxcbiAgICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gYm91bmRzKCkuc2l6ZTtcbiAgICAgIH0sXG4gICAgICBkcmF3OiBjb250ZXh0ID0+IHN1cmZhY2VzLmZvckVhY2gocyA9PiBzLmRyYXdDb250ZW50KGNvbnRleHQpKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGFkZEdyb3VuZChvcHRpb25zOiBXb3JsZEdyb3VuZE9wdGlvbnMpOiBHcm91bmRSZWNlaXZlciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLmdyb3VuZCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzdXJmYWNlID0gdGhpcy5saWdodGluZy5hZGRHcm91bmQoZ3JvdW5kKTtcblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkRmxvb3JSZWZsZWN0aW9uKFxuICAgICAgICBzdXJmYWNlLFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VyZmFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBzb2xpZCB3YWxsXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbChvcHRpb25zOiBXb3JsZFdhbGxPcHRpb25zKTogV2FsbCB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLndhbGxPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHdhbGwgPSB0aGlzLmxpZ2h0aW5nLmFkZFdhbGwod2FsbE9wdGlvbnMpO1xuXG4gICAgaWYgKHJlZmxlY3Rpb25Tb3VyY2UpIHtcbiAgICAgIC8vIEEgbWlycm9yIHdvdWxkIHNob3cgdGhlIGJhY2sgb2YgYSB3YWxsLCB3aGljaCB3ZSBkb24ndCBoYXZlIGEgcGljdHVyZVxuICAgICAgLy8gb2YsIHNvIGJ5IGRlZmF1bHQgd2FsbHMgb25seSBhcHBlYXIgaW4gdGhlIGZsb29yXG4gICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnJlZmxlY3Rpb25zPy5hZGRTb3VyY2Uoe1xuICAgICAgICB3YWxsOiBmYWxzZSxcbiAgICAgICAgLi4uKHJlZmxlY3Rpb25Tb3VyY2UgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25Tb3VyY2UpLFxuICAgICAgICBvYmplY3Q6IFdvcmxkLnJlZmxlY3Rpb25PYmplY3Qod2FsbC5mcm9udCwgd2FsbC50b3ApLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgd2FsbC5mcm9udC5vblJlbW92ZSgoKSA9PiBzb3VyY2UucmVtb3ZlKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkTWlycm9yKFxuICAgICAgICB3YWxsLmZyb250LFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBtb3Zpbmcgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgYWRkQWN0b3Iob3B0aW9uczogV29ybGRBY3Rvck9wdGlvbnMpOiBBY3RvciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCAuLi5hY3Rvck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgYWN0b3IgPSB0aGlzLmxpZ2h0aW5nLmFkZEFjdG9yKFxuICAgICAgYWN0b3JPcHRpb25zIGFzIEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAocmVmbGVjdGlvblNvdXJjZSkge1xuICAgICAgY29uc3Qgc291cmNlID0gdGhpcy5hZGRBY3RvclJlZmxlY3Rpb24oXG4gICAgICAgIGFjdG9yLFxuICAgICAgICByZWZsZWN0aW9uU291cmNlID09PSB0cnVlID8ge30gOiByZWZsZWN0aW9uU291cmNlXG4gICAgICApO1xuXG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFjdG9yLnN1cmZhY2Uub25SZW1vdmUoKCkgPT4gc291cmNlLnJlbW92ZSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0b3I7XG4gIH1cblxuICBwcml2YXRlIGFkZEFjdG9yUmVmbGVjdGlvbihcbiAgICBhY3RvcjogQWN0b3IsXG4gICAgc2V0dGluZ3M6IFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5nc1xuICApOiBSZWZsZWN0aW9uU291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9ucz8uYWRkU291cmNlKHtcbiAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgLi4uKGFjdG9yLnNwcml0ZVxuICAgICAgICA/IHsgc3ByaXRlOiBhY3Rvci5zcHJpdGUgfVxuICAgICAgICA6IHsgb2JqZWN0OiBXb3JsZC5yZWZsZWN0aW9uT2JqZWN0KGFjdG9yLnN1cmZhY2UpIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpZ2h0XG4gICAqL1xuICBwdWJsaWMgYWRkTGlnaHQob3B0aW9uczogTGlnaHRPcHRpb25zKTogTGlnaHQge1xuICAgIHJldHVybiB0aGlzLmxpZ2h0aW5nLmFkZExpZ2h0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgcGFydCBvZiBhbiBhcmVhIG9mIGdyb3VuZCByZWZsZWN0aXZlXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIGNhbGxlZCBzZXZlcmFsIHRpbWVzIGZvciBkaWZmZXJlbnQgcGFydHMgb2YgdGhlIHNhbWUgZ3JvdW5kXG4gICAqL1xuICBwdWJsaWMgYWRkRmxvb3JSZWZsZWN0aW9uKFxuICAgIGdyb3VuZDogR3JvdW5kUmVjZWl2ZXIsXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Rmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zPlxuICApOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlciB8IG51bGwge1xuICAgIGNvbnN0IHJlY2VpdmVyID1cbiAgICAgIHRoaXMucmVmbGVjdGlvbnM/LmFkZEZsb29yUmVjZWl2ZXIoe1xuICAgICAgICBwb3NpdGlvbjogZ3JvdW5kLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiBncm91bmQuc2l6ZSxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH0pID8/IG51bGw7XG5cbiAgICBpZiAocmVjZWl2ZXIpIHtcbiAgICAgIGdyb3VuZC5vblJlbW92ZSgoKSA9PiByZWNlaXZlci5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgcGFydCBvZiBhIHdhbGwgcmVmbGVjdGl2ZVxuICAgKlxuICAgKiBUaGUgcmVmbGVjdGlvbiBpcyBkcmF3biBzdHJhaWdodCBhZnRlciB0aGUgd2FsbCwgc28gaXQncyBjb3ZlcmVkIGJ5XG4gICAqIGFueXRoaW5nIGluIGZyb250IG9mIHRoZSB3YWxsLiBUaGlzIGNhbiBiZSBjYWxsZWQgc2V2ZXJhbCB0aW1lcyBmb3JcbiAgICogZGlmZmVyZW50IHBhcnRzIG9mIHRoZSBzYW1lIHdhbGxcbiAgICovXG4gIHB1YmxpYyBhZGRNaXJyb3IoXG4gICAgd2FsbDogV2FsbFJlY2VpdmVyLFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zPlxuICApOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyIHwgbnVsbCB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPVxuICAgICAgdGhpcy5yZWZsZWN0aW9ucz8uYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgICAgcG9zaXRpb246IHdhbGwucG9zaXRpb24sXG4gICAgICAgIHNpemU6IHdhbGwuc2l6ZSxcbiAgICAgICAgZm9vdDogd2FsbC5wb3NpdGlvbi55ICsgd2FsbC5zaXplLnksXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9KSA/PyBudWxsO1xuXG4gICAgaWYgKHJlY2VpdmVyKSB7XG4gICAgICByZWNlaXZlci5vblJlbW92ZSh3YWxsLmFkZE92ZXJsYXkoY29udGV4dCA9PiByZWNlaXZlci5kcmF3KGNvbnRleHQpKSk7XG4gICAgICB3YWxsLm9uUmVtb3ZlKCgpID0+IHJlY2VpdmVyLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjZWl2ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbWVyYTogU2NlbmVDYW1lcmEpIHtcbiAgICBjb25zdCBmcmFtZTogRnJhbWUgPSB7XG4gICAgICBjb250ZXh0LFxuICAgICAgY2FtZXJhLFxuICAgICAgc2NyZWVuOiB2ZWMyKGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpLFxuICAgIH07XG5cbiAgICB0aGlzLnJlZmxlY3Rpb25zPy5wcmVwYXJlKGZyYW1lKTtcblxuICAgIHRoaXMuZHJhd0xheWVyKGZyYW1lLCAoKSA9PiB0aGlzLmxpZ2h0aW5nLmRyYXdHcm91bmQoY29udGV4dCkpO1xuICAgIHRoaXMucmVmbGVjdGlvbnM/LmRyYXdGbG9vcigpO1xuICAgIHRoaXMuZHJhd0xheWVyKGZyYW1lLCAoKSA9PiB0aGlzLmxpZ2h0aW5nLmRyYXdXYWxscyhjb250ZXh0KSk7XG4gICAgdGhpcy5hcHBseUxpZ2h0aW5nKGZyYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHBhcnQgb2YgdGhlIHNjZW5lIHdpdGggdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3TGF5ZXIoeyBjb250ZXh0LCBjYW1lcmEgfTogRnJhbWUsIGRyYXc6ICgpID0+IHZvaWQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyhjb250ZXh0KTtcbiAgICBkcmF3KCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5TGlnaHRpbmcoeyBjb250ZXh0LCBjYW1lcmEsIHNjcmVlbiB9OiBGcmFtZSkge1xuICAgIHRoaXMubGlnaHRpbmcucHJlcGFyZShjYW1lcmEsIHNjcmVlbik7XG4gICAgdGhpcy5saWdodGluZy5kcmF3KGNvbnRleHQpO1xuICB9XG59XG4iLCJleHBvcnQgeyBXb3JsZCB9IGZyb20gJy4vV29ybGQnO1xuZXhwb3J0IHR5cGUge1xuICBXb3JsZEFjdG9yT3B0aW9ucyxcbiAgV29ybGRHcm91bmRPcHRpb25zLFxuICBXb3JsZE9wdGlvbnMsXG4gIFdvcmxkV2FsbE9wdGlvbnMsXG59IGZyb20gJy4vV29ybGQnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9