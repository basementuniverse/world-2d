(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BasementUniverseWorld2D"] = factory();
	else
		root["BasementUniverseWorld2D"] = factory();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLFNBQVM7YUFDVjtZQUdELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBR0QsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0M7WUFHRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMvQztZQUdELElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMs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O1FBQ2hDLE1BQU0sS0FBSyxHQUFHLGNBQUksRUFBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxNQUFNLEtBQUssR0FBRyxVQUFJLENBQUMsR0FBRyxDQUFDLFVBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxNQUFNLElBQUksR0FBRyxVQUFJLENBQUMsR0FBRyxDQUFDLFVBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxFLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMs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Ozs7Ozs7QUNqSmpELHlFQUFnQztBQUF2QixvR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQWQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yL3BhcnNlY29sb3IuanMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qcyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9jb3JlL0dsQ29udGV4dC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2NvcmUvdXRpbGl0aWVzLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL0FjdG9yLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL0Nhc3Rlci50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9MaWdodC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9MaWdodGluZ1N5c3RlbS50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9TY2VuZU9iamVjdC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9TaGFkZXJQYXNzLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL1N1cmZhY2UudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvV2FsbC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9tZXJnZS50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvcmVmbGVjdGlvbnMvUmVmbGVjdGlvblJlY2VpdmVyLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3JlZmxlY3Rpb25zL1JlZmxlY3Rpb25Tb3VyY2UudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvcmVmbGVjdGlvbnMvUmVmbGVjdGlvblN5c3RlbS50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9yZWZsZWN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy93YXRlci9SaXBwbGVGaWVsZC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy93YXRlci9XYXRlclBhc3MudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvd2F0ZXIvV2F0ZXJSZWdpb24udHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvd2F0ZXIvV2F0ZXJTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvd2F0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvd29ybGQvV29ybGQudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvd29ybGQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJhc2VtZW50VW5pdmVyc2VXb3JsZDJEXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJhc2VtZW50VW5pdmVyc2VXb3JsZDJEXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsIi8qXHJcblxyXG5QYXJzZSBhIHZhbGlkIENTUyBjb2xvciBzdHJpbmcgaW50byBhbiBvYmplY3QgbGlrZTogeyByLCBnLCBiLCBhIH1cclxuUHJvcGVydGllcyB3aWxsIGhhdmUgdGhlIGNvcnJlY3QgaW50ZXJ2YWwgYW5kIHByZWNpc2lvbi5cclxuVmFsaWQgaW5wdXQgZXhhbXBsZXM6XHJcblxyXG5yZWRcclxuI2YwMFxyXG4jZmYwMDAwXHJcbiNmZjAwMDBmZlxyXG5yZ2IoMjU1LCAwLCAwKVxyXG5yZ2IoMTAwJSwgMCUsIDAlKVxyXG5yZ2JhKDI1NSwgMCwgMCwgMSlcclxucmdiYSgxMDAlLCAwJSwgMCUsIDEpXHJcbmhzbCgwLCAxMDAlLCA1MCUpXHJcbmhzbGEoMCwgMTAwJSwgNTAlLCAxKVxyXG5cclxuKi9cclxuY29uc3QgcGFyc2VDb2xvciA9IChmdW5jdGlvbigpIHtcclxuXHRjb25zdCBuYW1lcyA9IHtcclxuXHRcdFwiYWxpY2VibHVlXCI6IFwiZjBmOGZmXCIsXHJcblx0XHRcImFudGlxdWV3aGl0ZVwiOiBcImZhZWJkN1wiLFxyXG5cdFx0XCJhcXVhXCI6IFwiMGZmXCIsXHJcblx0XHRcImFxdWFtYXJpbmVcIjogXCI3ZmZmZDRcIixcclxuXHRcdFwiYXp1cmVcIjogXCJmMGZmZmZcIixcclxuXHRcdFwiYmVpZ2VcIjogXCJmNWY1ZGNcIixcclxuXHRcdFwiYmlzcXVlXCI6IFwiZmZlNGM0XCIsXHJcblx0XHRcImJsYWNrXCI6IFwiMDAwXCIsXHJcblx0XHRcImJsYW5jaGVkYWxtb25kXCI6IFwiZmZlYmNkXCIsXHJcblx0XHRcImJsdWVcIjogXCIwMGZcIixcclxuXHRcdFwiYmx1ZXZpb2xldFwiOiBcIjhhMmJlMlwiLFxyXG5cdFx0XCJicm93blwiOiBcImE1MmEyYVwiLFxyXG5cdFx0XCJidXJseXdvb2RcIjogXCJkZWI4ODdcIixcclxuXHRcdFwiY2FkZXRibHVlXCI6IFwiNWY5ZWEwXCIsXHJcblx0XHRcImNoYXJ0cmV1c2VcIjogXCI3ZmZmMDBcIixcclxuXHRcdFwiY2hvY29sYXRlXCI6IFwiZDI2OTFlXCIsXHJcblx0XHRcImNvcmFsXCI6IFwiZmY3ZjUwXCIsXHJcblx0XHRcImNvcm5mbG93ZXJibHVlXCI6IFwiNjQ5NWVkXCIsXHJcblx0XHRcImNvcm5zaWxrXCI6IFwiZmZmOGRjXCIsXHJcblx0XHRcImNyaW1zb25cIjogXCJkYzE0M2NcIixcclxuXHRcdFwiY3lhblwiOiBcIjBmZlwiLFxyXG5cdFx0XCJkYXJrYmx1ZVwiOiBcIjAwMDA4YlwiLFxyXG5cdFx0XCJkYXJrY3lhblwiOiBcIjAwOGI4YlwiLFxyXG5cdFx0XCJkYXJrZ29sZGVucm9kXCI6IFwiYjg4NjBiXCIsXHJcblx0XHRcImRhcmtncmF5XCI6IFwiYTlhOWE5XCIsXHJcblx0XHRcImRhcmtncmVlblwiOiBcIjAwNjQwMFwiLFxyXG5cdFx0XCJkYXJrZ3JleVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJra2hha2lcIjogXCJiZGI3NmJcIixcclxuXHRcdFwiZGFya21hZ2VudGFcIjogXCI4YjAwOGJcIixcclxuXHRcdFwiZGFya29saXZlZ3JlZW5cIjogXCI1NTZiMmZcIixcclxuXHRcdFwiZGFya29yYW5nZVwiOiBcImZmOGMwMFwiLFxyXG5cdFx0XCJkYXJrb3JjaGlkXCI6IFwiOTkzMmNjXCIsXHJcblx0XHRcImRhcmtyZWRcIjogXCI4YjAwMDBcIixcclxuXHRcdFwiZGFya3NhbG1vblwiOiBcImU5OTY3YVwiLFxyXG5cdFx0XCJkYXJrc2VhZ3JlZW5cIjogXCI4ZmJjOGZcIixcclxuXHRcdFwiZGFya3NsYXRlYmx1ZVwiOiBcIjQ4M2Q4YlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmF5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWdyZXlcIjogXCIyZjRmNGZcIixcclxuXHRcdFwiZGFya3R1cnF1b2lzZVwiOiBcIjAwY2VkMVwiLFxyXG5cdFx0XCJkYXJrdmlvbGV0XCI6IFwiOTQwMGQzXCIsXHJcblx0XHRcImRlZXBwaW5rXCI6IFwiZmYxNDkzXCIsXHJcblx0XHRcImRlZXBza3libHVlXCI6IFwiMDBiZmZmXCIsXHJcblx0XHRcImRpbWdyYXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZGltZ3JleVwiOiBcIjY5Njk2OVwiLFxyXG5cdFx0XCJkb2RnZXJibHVlXCI6IFwiMWU5MGZmXCIsXHJcblx0XHRcImZpcmVicmlja1wiOiBcImIyMjIyMlwiLFxyXG5cdFx0XCJmbG9yYWx3aGl0ZVwiOiBcImZmZmFmMFwiLFxyXG5cdFx0XCJmb3Jlc3RncmVlblwiOiBcIjIyOGIyMlwiLFxyXG5cdFx0XCJmdWNoc2lhXCI6IFwiZjBmXCIsXHJcblx0XHRcImdhaW5zYm9yb1wiOiBcImRjZGNkY1wiLFxyXG5cdFx0XCJnaG9zdHdoaXRlXCI6IFwiZjhmOGZmXCIsXHJcblx0XHRcImdvbGRcIjogXCJmZmQ3MDBcIixcclxuXHRcdFwiZ29sZGVucm9kXCI6IFwiZGFhNTIwXCIsXHJcblx0XHRcImdyYXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiZ3JlZW5cIjogXCIwMDgwMDBcIixcclxuXHRcdFwiZ3JlZW55ZWxsb3dcIjogXCJhZGZmMmZcIixcclxuXHRcdFwiZ3JleVwiOiBcIjgwODA4MFwiLFxyXG5cdFx0XCJob25leWRld1wiOiBcImYwZmZmMFwiLFxyXG5cdFx0XCJob3RwaW5rXCI6IFwiZmY2OWI0XCIsXHJcblx0XHRcImluZGlhbnJlZFwiOiBcImNkNWM1Y1wiLFxyXG5cdFx0XCJpbmRpZ29cIjogXCI0YjAwODJcIixcclxuXHRcdFwiaXZvcnlcIjogXCJmZmZmZjBcIixcclxuXHRcdFwia2hha2lcIjogXCJmMGU2OGNcIixcclxuXHRcdFwibGF2ZW5kZXJcIjogXCJlNmU2ZmFcIixcclxuXHRcdFwibGF2ZW5kZXJibHVzaFwiOiBcImZmZjBmNVwiLFxyXG5cdFx0XCJsYXduZ3JlZW5cIjogXCI3Y2ZjMDBcIixcclxuXHRcdFwibGVtb25jaGlmZm9uXCI6IFwiZmZmYWNkXCIsXHJcblx0XHRcImxpZ2h0Ymx1ZVwiOiBcImFkZDhlNlwiLFxyXG5cdFx0XCJsaWdodGNvcmFsXCI6IFwiZjA4MDgwXCIsXHJcblx0XHRcImxpZ2h0Y3lhblwiOiBcImUwZmZmZlwiLFxyXG5cdFx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBcImZhZmFkMlwiLFxyXG5cdFx0XCJsaWdodGdyYXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRncmVlblwiOiBcIjkwZWU5MFwiLFxyXG5cdFx0XCJsaWdodGdyZXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRwaW5rXCI6IFwiZmZiNmMxXCIsXHJcblx0XHRcImxpZ2h0c2FsbW9uXCI6IFwiZmZhMDdhXCIsXHJcblx0XHRcImxpZ2h0c2VhZ3JlZW5cIjogXCIyMGIyYWFcIixcclxuXHRcdFwibGlnaHRza3libHVlXCI6IFwiODdjZWZhXCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmF5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmV5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c3RlZWxibHVlXCI6IFwiYjBjNGRlXCIsXHJcblx0XHRcImxpZ2h0eWVsbG93XCI6IFwiZmZmZmUwXCIsXHJcblx0XHRcImxpbWVcIjogXCIwZjBcIixcclxuXHRcdFwibGltZWdyZWVuXCI6IFwiMzJjZDMyXCIsXHJcblx0XHRcImxpbmVuXCI6IFwiZmFmMGU2XCIsXHJcblx0XHRcIm1hZ2VudGFcIjogXCJmMGZcIixcclxuXHRcdFwibWFyb29uXCI6IFwiODAwMDAwXCIsXHJcblx0XHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogXCI2NmNkYWFcIixcclxuXHRcdFwibWVkaXVtYmx1ZVwiOiBcIjAwMDBjZFwiLFxyXG5cdFx0XCJtZWRpdW1vcmNoaWRcIjogXCJiYTU1ZDNcIixcclxuXHRcdFwibWVkaXVtcHVycGxlXCI6IFwiOTM3MGRiXCIsXHJcblx0XHRcIm1lZGl1bXNlYWdyZWVuXCI6IFwiM2NiMzcxXCIsXHJcblx0XHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBcIjdiNjhlZVwiLFxyXG5cdFx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBcIjAwZmE5YVwiLFxyXG5cdFx0XCJtZWRpdW10dXJxdW9pc2VcIjogXCI0OGQxY2NcIixcclxuXHRcdFwibWVkaXVtdmlvbGV0cmVkXCI6IFwiYzcxNTg1XCIsXHJcblx0XHRcIm1pZG5pZ2h0Ymx1ZVwiOiBcIjE5MTk3MFwiLFxyXG5cdFx0XCJtaW50Y3JlYW1cIjogXCJmNWZmZmFcIixcclxuXHRcdFwibWlzdHlyb3NlXCI6IFwiZmZlNGUxXCIsXHJcblx0XHRcIm1vY2Nhc2luXCI6IFwiZmZlNGI1XCIsXHJcblx0XHRcIm5hdmFqb3doaXRlXCI6IFwiZmZkZWFkXCIsXHJcblx0XHRcIm5hdnlcIjogXCIwMDAwODBcIixcclxuXHRcdFwib2xkbGFjZVwiOiBcImZkZjVlNlwiLFxyXG5cdFx0XCJvbGl2ZVwiOiBcIjgwODAwMFwiLFxyXG5cdFx0XCJvbGl2ZWRyYWJcIjogXCI2YjhlMjNcIixcclxuXHRcdFwib3JhbmdlXCI6IFwiZmZhNTAwXCIsXHJcblx0XHRcIm9yYW5nZXJlZFwiOiBcImZmNDUwMFwiLFxyXG5cdFx0XCJvcmNoaWRcIjogXCJkYTcwZDZcIixcclxuXHRcdFwicGFsZWdvbGRlbnJvZFwiOiBcImVlZThhYVwiLFxyXG5cdFx0XCJwYWxlZ3JlZW5cIjogXCI5OGZiOThcIixcclxuXHRcdFwicGFsZXR1cnF1b2lzZVwiOiBcImFmZWVlZVwiLFxyXG5cdFx0XCJwYWxldmlvbGV0cmVkXCI6IFwiZGI3MDkzXCIsXHJcblx0XHRcInBhcGF5YXdoaXBcIjogXCJmZmVmZDVcIixcclxuXHRcdFwicGVhY2hwdWZmXCI6IFwiZmZkYWI5XCIsXHJcblx0XHRcInBlcnVcIjogXCJjZDg1M2ZcIixcclxuXHRcdFwicGlua1wiOiBcImZmYzBjYlwiLFxyXG5cdFx0XCJwbHVtXCI6IFwiZGRhMGRkXCIsXHJcblx0XHRcInBvd2RlcmJsdWVcIjogXCJiMGUwZTZcIixcclxuXHRcdFwicHVycGxlXCI6IFwiODAwMDgwXCIsXHJcblx0XHRcInJlYmVjY2FwdXJwbGVcIjogXCI2MzlcIixcclxuXHRcdFwicmVkXCI6IFwiZjAwXCIsXHJcblx0XHRcInJvc3licm93blwiOiBcImJjOGY4ZlwiLFxyXG5cdFx0XCJyb3lhbGJsdWVcIjogXCI0MTY5ZTFcIixcclxuXHRcdFwic2FkZGxlYnJvd25cIjogXCI4YjQ1MTNcIixcclxuXHRcdFwic2FsbW9uXCI6IFwiZmE4MDcyXCIsXHJcblx0XHRcInNhbmR5YnJvd25cIjogXCJmNGE0NjBcIixcclxuXHRcdFwic2VhZ3JlZW5cIjogXCIyZThiNTdcIixcclxuXHRcdFwic2Vhc2hlbGxcIjogXCJmZmY1ZWVcIixcclxuXHRcdFwic2llbm5hXCI6IFwiYTA1MjJkXCIsXHJcblx0XHRcInNpbHZlclwiOiBcImMwYzBjMFwiLFxyXG5cdFx0XCJza3libHVlXCI6IFwiODdjZWViXCIsXHJcblx0XHRcInNsYXRlYmx1ZVwiOiBcIjZhNWFjZFwiLFxyXG5cdFx0XCJzbGF0ZWdyYXlcIjogXCI3MDgwOTBcIixcclxuXHRcdFwic2xhdGVncmV5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNub3dcIjogXCJmZmZhZmFcIixcclxuXHRcdFwic3ByaW5nZ3JlZW5cIjogXCIwMGZmN2ZcIixcclxuXHRcdFwic3RlZWxibHVlXCI6IFwiNDY4MmI0XCIsXHJcblx0XHRcInRhblwiOiBcImQyYjQ4Y1wiLFxyXG5cdFx0XCJ0ZWFsXCI6IFwiMDA4MDgwXCIsXHJcblx0XHRcInRoaXN0bGVcIjogXCJkOGJmZDhcIixcclxuXHRcdFwidG9tYXRvXCI6IFwiZmY2MzQ3XCIsXHJcblx0XHRcInR1cnF1b2lzZVwiOiBcIjQwZTBkMFwiLFxyXG5cdFx0XCJ2aW9sZXRcIjogXCJlZTgyZWVcIixcclxuXHRcdFwid2hlYXRcIjogXCJmNWRlYjNcIixcclxuXHRcdFwid2hpdGVcIjogXCJmZmZcIixcclxuXHRcdFwid2hpdGVzbW9rZVwiOiBcImY1ZjVmNVwiLFxyXG5cdFx0XCJ5ZWxsb3dcIjogXCJmZjBcIixcclxuXHRcdFwieWVsbG93Z3JlZW5cIjogXCI5YWNkMzJcIixcclxuXHRcdFwidHJhbnNwYXJlbnRcIjogXCIwMDAwMDAwMFwiXHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBjbGFtcCA9IChuLCBhLCBiKSA9PiBuIDwgYSA/IGEgOiAobiA+IGIgPyBiIDogbiksXHQvLyBDbGFtcCBuIGluIGludGVydmFsIFthLCBiXVxyXG5cdFx0cm91bmQgPSAobiwgZCkgPT4ge1x0Ly8gUm91bmQgbiB0byBuZWFyZXN0IGludGVnZXIsIG9yIHRvIGQgZGVjaW1hbCBwbGFjZXMgKGlmIGQgaXMgZGVmaW5lZClcclxuXHRcdFx0dmFyIHAgPSBNYXRoLnBvdygxMCwgZCB8fCAwKTtcclxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQobiAqIHApIC8gcDtcclxuXHRcdH0sXHJcblx0XHRoaSA9IG4gPT4gY2xhbXAocGFyc2VJbnQobiwgMTYpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCAyLWRpZ2l0IGhleCB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdGhmID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUsIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0c2kgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRzZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSwgMiksIDAsIDEpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0cGkgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikgLyAxMDAgKiAyNTUpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBwZXJjZW50YWdlIHN0cmluZyB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdHVmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMzYwLCAwLCAxKSxcdC8vIENvbnZlcnQgaHVlIHN0cmluZyB0byBmbG9hdCBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMTAwLCAwLCAxKTtcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHJcblx0Ly8gQ29udmVydCBoc2wgdG8gcmdiLCBhbHBoYSB2YWx1ZSBnZXRzIHBhc3NlZCBzdHJhaWdodCB0aHJvdWdoXHJcblx0Ly8gaCwgcywgbCB2YWx1ZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0Ly8gUmV0dXJucyBhbiBvYmplY3QgbGlrZSB7IHIsIGcsIGIsIGEgfVxyXG5cdC8vIGh0dHA6Ly9heG9uZmx1eC5jb20vaGFuZHktcmdiLXRvLWhzbC1hbmQtcmdiLXRvLWhzdi1jb2xvci1tb2RlbC1jXHJcblx0ZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCwgYSkge1xyXG5cdFx0dmFyIHIsIGcsIGIsXHJcblx0XHRcdGh1ZSA9IGZ1bmN0aW9uKHAsIHEsIHQpIHtcclxuXHRcdFx0XHRpZiAodCA8IDApIHsgdCArPSAxOyB9XHJcblx0XHRcdFx0aWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMSAvIDYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQgfTtcclxuXHRcdFx0XHRpZiAodCA8IDEgLyAyKSB7IHJldHVybiBxOyB9XHJcblx0XHRcdFx0aWYgKHQgPCAyIC8gMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDYgfTtcclxuXHRcdFx0XHRyZXR1cm4gcDtcclxuXHRcdFx0fTtcclxuXHRcdGlmIChzID09IDApIHtcclxuXHRcdFx0ciA9IGcgPSBiID0gbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcyxcclxuXHRcdFx0XHRwID0gMiAqIGwgLSBxO1xyXG5cdFx0XHRyID0gaHVlKHAsIHEsIGggKyAxIC8gMyk7XHJcblx0XHRcdGcgPSBodWUocCwgcSwgaCk7XHJcblx0XHRcdGIgPSBodWUocCwgcSwgaCAtIDEgLyAzKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7IHI6IHJvdW5kKHIgKiAyNTUpLCBnOiByb3VuZChnICogMjU1KSwgYjogcm91bmQoYiAqIDI1NSksIGE6IGEgfTtcclxuXHR9XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGMpIHtcclxuXHRcdHZhciBvID0geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIG0gPSBudWxsO1xyXG5cdFx0aWYgKHR5cGVvZiBjID09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0aWYgKGMgaW4gbmFtZXMpIHsgYyA9IFwiI1wiICsgbmFtZXNbY107IH1cclxuXHRcdFx0aWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XSkoW2EtZjAtOV0pKFthLWYwLTldKSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSArIG1bMV0pLCBnOiBoaShtWzJdICsgbVsyXSksIGI6IGhpKG1bM10gKyBtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSksIGc6IGhpKG1bMl0pLCBiOiBoaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IGhmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYlxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogc2YobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL2hzbFxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/KVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgc2YobVs0XSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0aWYgKGMuciAhPT0gdW5kZWZpbmVkICYmIGMuZyAhPSB1bmRlZmluZWQgJiYgYy5iICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShjLnIpLCBnOiBzaShjLmcpLCBiOiBzaShjLmIpLCBhOiBzZihjLmEgfHwgMSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmIChjLmggIT09IHVuZGVmaW5lZCAmJiBjLnMgIT09IHVuZGVmaW5lZCAmJiBjLmwgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihjLmgpLCBwZihjLnMpLCBwZihjLmwpLCBzZihjLmEgfHwgMSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbztcclxuXHR9O1xyXG59KCkpO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHBhcnNlQ29sb3IgfTtcclxufVxyXG4iLCIvKipcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIE1lbW9pemUgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZiBUaGUgZnVuY3Rpb24gdG8gbWVtb2l6ZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIG1lbW9pemVkIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uXG4gKi9cbmNvbnN0IG1lbW9pemUgPSBmID0+IHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ3NdID8/IChjYWNoZVthcmdzXSA9IGYuYXBwbHkodGhpcywgYXJncykpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXG4gKiBAcGFyYW0ge251bWJlcn0gW3A9TnVtYmVyLkVQU0lMT05dIFRoZSBwcmVjaXNpb24gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKi9cbmNvbnN0IGZsb2F0RXF1YWxzID0gKGEsIGIsIHAgPSBOdW1iZXIuRVBTSUxPTikgPT4gTWF0aC5hYnMoYSAtIGIpIDwgcDtcblxuLyoqXG4gKiBDbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gVGhlIG1heGltdW0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxuICovXG5jb25zdCBjbGFtcCA9IChhLCBtaW4gPSAwLCBtYXggPSAxKSA9PiBhIDwgbWluID8gbWluIDogKGEgPiBtYXggPyBtYXggOiBhKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZyYWN0aW9uYWwgcGFydCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxuICovXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG5cbi8qKlxuICogUm91bmQgbiB0byBkIGRlY2ltYWwgcGxhY2VzXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIHJvdW5kXG4gKiBAcGFyYW0ge251bWJlcn0gW2Q9MF0gVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byByb3VuZCB0b1xuICogQHJldHVybiB7bnVtYmVyfSBBIHJvdW5kZWQgbnVtYmVyXG4gKi9cbmNvbnN0IHJvdW5kID0gKG4sIGQgPSAwKSA9PiB7XG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgZCk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG4gKiBwICsgTnVtYmVyLkVQU0lMT04pIC8gcDtcbn1cblxuLyoqXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICovXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XG5cbi8qKlxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYzAwIFRvcC1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMSBCb3R0b20tcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcbiAqIEByZXR1cm4ge251bWJlcn0gQSBiaWxpbmVhciBpbnRlcnBvbGF0ZWQgdmFsdWVcbiAqL1xuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcblxuLyoqXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIG51bWJlciB0byByZS1tYXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxuICogQHBhcmFtIHtudW1iZXJ9IGEyXG4gKiBAcGFyYW0ge251bWJlcn0gYjFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcblxuLyoqXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICovXG5jb25zdCBkZWdyZWVzID0gcmFkaWFucyA9PiAoMTgwIC8gTWF0aC5QSSkgKiByYWRpYW5zO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqL1xuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKi9cbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTAuNV0gVGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IHNhbXBsZXM7IGktLTspIHtcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xuICB9XG4gIHJldHVybiBtdSArICh0b3RhbCAtIHNhbXBsZXMgLyAyKSAvIChzYW1wbGVzIC8gMikgKiBzaWdtYTtcbn07XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKG1pbiArIGNsdFJhbmRvbSgwLjUsIDAuNSwgMikgKiAobWF4ICsgMSAtIG1pbikpO1xuXG4vKipcbiAqIFJldHVybiBhIHdlaWdodGVkIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcbiAqL1xuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XG4gIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcbiAgICB0b3RhbCAtPSB3W24rK107XG4gIH1cbiAgcmV0dXJuIG4gLSAxO1xufTtcblxuLyoqXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXG4gKiBAY2FsbGJhY2sgSW50ZXJwb2xhdGlvbkZ1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgQW4gYXJyYXkgb2YgdmFsdWVzIGludGVycG9sYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcGFyYW0ge0ludGVycG9sYXRpb25GdW5jdGlvbn0gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbbWluKGEpLCBtYXgoYSldXG4gKi9cbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xuICBjb25zdCBzID0gaSAqIChhLmxlbmd0aCAtIDEpO1xuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXG4gKi9cbmNvbnN0IGZhY3RvcmlhbCA9IGEgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XG4gICAgcmVzdWx0ICo9IGk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gblByXG4gKi9cbmNvbnN0IG5wciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxuICovXG5jb25zdCBuY3IgPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gKGZhY3RvcmlhbChyKSAqIGZhY3RvcmlhbChuIC0gcikpO1xuXG4vKipcbiAqIEdlbmVyYXRlIGFsbCBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBwZXJtdXRhdGlvbnMoWzEsIDIsIDNdLCAyKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIDJdLFxuICogICBbMSwgM10sXG4gKiAgIFsyLCAxXSxcbiAqICAgWzIsIDNdLFxuICogICBbMywgMV0sXG4gKiAgIFszLCAyXVxuICogXVxuICogYGBgXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGNob29zZSBpbiBlYWNoIHBlcm11dGF0aW9uXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIHBlcm11dGF0aW9uIGFycmF5c1xuICovXG5jb25zdCBwZXJtdXRhdGlvbnMgPSAoYSwgcikgPT4ge1xuICBpZiAociA9PT0gMSkge1xuICAgIHJldHVybiBhLm1hcChpdGVtID0+IFtpdGVtXSk7XG4gIH1cblxuICByZXR1cm4gYS5yZWR1Y2UoXG4gICAgKGFjYywgaXRlbSwgaSkgPT4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4ucGVybXV0YXRpb25zKGEuc2xpY2UoMCwgaSkuY29uY2F0KGEuc2xpY2UoaSArIDEpKSwgciAtIDEpLm1hcChjID0+IFtpdGVtLCAuLi5jXSksXG4gICAgXSxcbiAgICBbXVxuICApO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGFsbCBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjb21iaW5hdGlvbnMoWzEsIDIsIDNdLCAyKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIDJdLFxuICogICBbMSwgM10sXG4gKiAgIFsyLCAzXVxuICogXVxuICogYGBgXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGNob29zZSBpbiBlYWNoIGNvbWJpbmF0aW9uXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGNvbWJpbmF0aW9uIGFycmF5c1xuICovXG5jb25zdCBjb21iaW5hdGlvbnMgPSAoYSwgcikgPT4ge1xuICBpZiAociA9PT0gMSkge1xuICAgIHJldHVybiBhLm1hcChpdGVtID0+IFtpdGVtXSk7XG4gIH1cblxuICByZXR1cm4gYS5yZWR1Y2UoXG4gICAgKGFjYywgaXRlbSwgaSkgPT4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uY29tYmluYXRpb25zKGEuc2xpY2UoaSArIDEpLCByIC0gMSkubWFwKGMgPT4gW2l0ZW0sIC4uLmNdKSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG59O1xuXG4vKipcbiAqIEdldCBhIGNhcnRlc2lhbiBwcm9kdWN0IG9mIGFycmF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY2FydGVzaWFuKFsxLCAyLCAzXSwgWydhJywgJ2InXSk7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCBcImFcIl0sXG4gKiAgIFsxLCBcImJcIl0sXG4gKiAgIFsyLCBcImFcIl0sXG4gKiAgIFsyLCBcImJcIl0sXG4gKiAgIFszLCBcImFcIl0sXG4gKiAgIFszLCBcImJcIl1cbiAqIF1cbiAqIGBgYFxuICovXG5jb25zdCBjYXJ0ZXNpYW4gPSAoLi4uYXJyKSA9PlxuICBhcnIucmVkdWNlKFxuICAgIChhLCBiKSA9PiBhLmZsYXRNYXAoYyA9PiBiLm1hcChkID0+IFsuLi5jLCBkXSkpLFxuICAgIFtbXV1cbiAgKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xuICogQGNhbGxiYWNrIFRpbWVzRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge1RpbWVzRnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8Kj59XG4gKi9cbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgMC0+KG4gLSAxKVxuICovXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcblxuLyoqXG4gKiBaaXAgbXVsdGlwbGUgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXG4gKiBAcGFyYW0gey4uLkFycmF5PCo+fSBhIFRoZSBhcnJheXMgdG8gemlwXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XG4gKi9cbmNvbnN0IHppcCA9ICguLi5hKSA9PiB0aW1lcyhpID0+IGEubWFwKGEgPT4gYVtpXSksIE1hdGgubWF4KC4uLmEubWFwKGEgPT4gYS5sZW5ndGgpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFycmF5W2ldIHdpdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHdyYXBwaW5nXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhIFRoZSBhcnJheSB0byBhY2Nlc3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gQW4gZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkgd2l0aG91dCByZW1vdmluZyBpdFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHJldHVybiB7Kn0gVGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBwZWVrID0gKGEpID0+IHtcbiAgaWYgKCFhLmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gYVthLmxlbmd0aCAtIDFdO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IGZvciBhIGdpdmVuIHBvc2l0aW9uIGluIGFuIHVucm9sbGVkIDJkIGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0geCBUaGUgeCBwb3NpdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHkgVGhlIHkgcG9zaXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSB3IFRoZSB3aWR0aCBvZiB0aGUgMmQgYXJyYXlcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCBpbiB0aGUgdW5yb2xsZWQgYXJyYXlcbiAqL1xuY29uc3QgaW5kID0gKHgsIHksIHcpID0+IHggKyB5ICogdztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIHBvc2l0aW9uIGZvciBhIGdpdmVuIGluZGV4IGluIGFuIHVucm9sbGVkIDJkIGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSB3IFRoZSB3aWR0aCBvZiB0aGUgMmQgYXJyYXlcbiAqIEByZXR1cm5zIHtBcnJheTxudW1iZXI+fSBUaGUgcG9zaXRpb24gYXMgYSAyLXR1cGxlXG4gKi9cbmNvbnN0IHBvcyA9IChpLCB3KSA9PiBbaSAlIHcsIE1hdGguZmxvb3IoaSAvIHcpXTtcblxuLyoqXG4gKiBDaG9wIGFuIGFycmF5IGludG8gY2h1bmtzIG9mIHNpemUgblxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXkgY2h1bmtzXG4gKi9cbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuXG4vKipcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcbiAqL1xuY29uc3Qgc2h1ZmZsZSA9IGEgPT4gYS5zbGljZSgpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbi8qKlxuICogRmxhdHRlbiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uY2F0ZW5hdG9yIFRoZSBzdHJpbmcgdG8gdXNlIGZvciBjb25jYXRlbmF0aW5nIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQSBmbGF0dGVuZWQgb2JqZWN0XG4gKi9cbmNvbnN0IGZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKG9ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9ba2V5XSAhPT0gJ29iamVjdCcgfHwgIW9ba2V5XSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogb1trZXldLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZmxhdHRlbmVkID0gZmxhdChvW2tleV0sIGNvbmNhdGVuYXRvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5yZWR1Y2UoXG4gICAgICAgIChjaGlsZEFjYywgY2hpbGRLZXkpID0+ICh7XG4gICAgICAgICAgLi4uY2hpbGRBY2MsXG4gICAgICAgICAgW2Ake2tleX0ke2NvbmNhdGVuYXRvcn0ke2NoaWxkS2V5fWBdOiBmbGF0dGVuZWRbY2hpbGRLZXldLFxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgICksXG4gICAgfTtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBVbmZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIGNoZWNrIGZvciBpbiBjb25jYXRlbmF0ZWQga2V5c1xuICogQHJldHVybiB7b2JqZWN0fSBBbiB1bi1mbGF0dGVuZWQgb2JqZWN0XG4gKi9cbmNvbnN0IHVuZmxhdCA9IChvLCBjb25jYXRlbmF0b3IgPSAnLicpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9LCB0ZW1wLCBzdWJzdHJpbmdzLCBwcm9wZXJ0eSwgaTtcblxuICBmb3IgKHByb3BlcnR5IGluIG8pIHtcbiAgICBzdWJzdHJpbmdzID0gcHJvcGVydHkuc3BsaXQoY29uY2F0ZW5hdG9yKTtcbiAgICB0ZW1wID0gcmVzdWx0O1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKCEoc3Vic3RyaW5nc1tpXSBpbiB0ZW1wKSkge1xuICAgICAgICBpZiAoaXNGaW5pdGUoc3Vic3RyaW5nc1tpICsgMV0pKSB7XG4gICAgICAgICAgdGVtcFtzdWJzdHJpbmdzW2ldXSA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGVtcCA9IHRlbXBbc3Vic3RyaW5nc1tpXV07XG4gICAgfVxuICAgIHRlbXBbc3Vic3RyaW5nc1tzdWJzdHJpbmdzLmxlbmd0aCAtIDFdXSA9IG9bcHJvcGVydHldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQSBzcGxpdCBwcmVkaWNhdGVcbiAqIEBjYWxsYmFjayBTcGxpdFByZWRpY2F0ZVxuICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcnJheSBzaG91bGQgc3BsaXQgYXQgdGhpcyBpbmRleFxuICovXG5cbi8qKlxuICogU3BsaXQgYW4gYXJyYXkgaW50byBzdWItYXJyYXlzIGJhc2VkIG9uIGEgcHJlZGljYXRlXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnJheVxuICogQHBhcmFtIHtTcGxpdFByZWRpY2F0ZX0gcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5c1xuICovXG5jb25zdCBzcGxpdCA9IChhcnJheSwgcHJlZGljYXRlKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBsZXQgY3VycmVudCA9IFtdO1xuICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFycmF5KSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBbdmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChjdXJyZW50KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQbHVjayBrZXlzIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IGtleXMgVGhlIGtleXMgdG8gcGx1Y2sgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwbHVja2VkIGtleXNcbiAqL1xuY29uc3QgcGx1Y2sgPSAobywgLi4ua2V5cykgPT4ge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwga2V5KSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBba2V5XTogb1trZXldIH0pLFxuICAgIHt9XG4gICk7XG59O1xuXG4vKipcbiAqIEV4Y2x1ZGUga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBrZXlzIGV4Y2VwdCBleGNsdWRlZCBrZXlzXG4gKi9cbmNvbnN0IGV4Y2x1ZGUgPSAobywgLi4ua2V5cykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKG8pLmZpbHRlcigoW2tleV0pID0+ICFrZXlzLmluY2x1ZGVzKGtleSkpXG4gICk7XG59O1xuXG4vKipcbiAqIEEga2V5IHRyYW5zZm9ybSBwcmVkaWNhdGVcbiAqIEBjYWxsYmFjayBLZXlUcmFuc2Zvcm1GdW5jdGlvblxuICogQHBhcmFtIHtvYmplY3R9IG8gVGhlIG9iamVjdCBiZWluZyB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIGN1cnJlbnQgcGF0aCBpbiBkb3Qgbm90YXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGN1cnJlbnQga2V5XG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGN1cnJlbnQgdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ3xudWxsfSBUaGUgdHJhbnNmb3JtZWQga2V5LCBvciBudWxsIHRvIG9taXQgdGhlIGtleVxuICovXG5cbi8qKlxuICogQSB2YWx1ZSB0cmFuc2Zvcm0gcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgVmFsdWVUcmFuc2Zvcm1GdW5jdGlvblxuICogQHBhcmFtIHtvYmplY3R9IG8gVGhlIG9iamVjdCBiZWluZyB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIGN1cnJlbnQgcGF0aCBpbiBkb3Qgbm90YXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGN1cnJlbnQga2V5XG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGN1cnJlbnQgdmFsdWVcbiAqIEByZXR1cm4ge2FueX0gVGhlIHRyYW5zZm9ybWVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmFuc2Zvcm0gdGhlIGtleXMgYW5kIHZhbHVlcyBvZiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvIFRoZSBvYmplY3QgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge0tleVRyYW5zZm9ybUZ1bmN0aW9ufSBba2Y9dW5kZWZpbmVkXSBPcHRpb25hbCBrZXkgdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1ZhbHVlVHJhbnNmb3JtRnVuY3Rpb259IFt2Zj11bmRlZmluZWRdIE9wdGlvbmFsIHZhbHVlIHRyYW5zZm9ybVxuICogQHJldHVybiB7b2JqZWN0fSBUaGUgdHJhbnNmb3JtZWQgb2JqZWN0XG4gKi9cbmNvbnN0IHRyYW5zZm9ybSA9IChvLCBrZiA9IHVuZGVmaW5lZCwgdmYgPSB1bmRlZmluZWQpID0+IHtcbiAgY29uc3QgaW5uZXJUcmFuc2Zvcm0gPSAob2JqLCBjdXJyZW50UGF0aCkgPT4ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGxldCBuZXdLZXkgPSBrZXk7XG4gICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgIGNvbnN0IHBhdGggPSBjdXJyZW50UGF0aCA/IGAke2N1cnJlbnRQYXRofS4ke2tleX1gIDoga2V5O1xuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgbmV3VmFsdWUgIT09IG51bGwgJiZcbiAgICAgICAgIShuZXdWYWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KG5ld1ZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5uZXJUcmFuc2Zvcm0obmV3VmFsdWUsIHBhdGgpO1xuICAgICAgfSBlbHNlIGlmICh2Zikge1xuICAgICAgICBuZXdWYWx1ZSA9IHZmKG9iaiwgcGF0aCwga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoa2YpIHtcbiAgICAgICAgbmV3S2V5ID0ga2Yob2JqLCBwYXRoLCBrZXksIG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld0tleSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBbbmV3S2V5XTogbmV3VmFsdWUsXG4gICAgICB9O1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICByZXR1cm4gaW5uZXJUcmFuc2Zvcm0obywgJycpO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIG1lbW9pemUsXG4gICAgZmxvYXRFcXVhbHMsXG4gICAgY2xhbXAsXG4gICAgZnJhYyxcbiAgICByb3VuZCxcbiAgICBsZXJwLFxuICAgIHVubGVycCxcbiAgICBibGVycCxcbiAgICByZW1hcCxcbiAgICBzbW9vdGhzdGVwLFxuICAgIHJhZGlhbnMsXG4gICAgZGVncmVlcyxcbiAgICByYW5kb21CZXR3ZWVuLFxuICAgIHJhbmRvbUludEJldHdlZW4sXG4gICAgY2x0UmFuZG9tLFxuICAgIGNsdFJhbmRvbUludCxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcbiAgICBsZXJwQXJyYXksXG4gICAgZG90LFxuICAgIGZhY3RvcmlhbCxcbiAgICBucHIsXG4gICAgbmNyLFxuICAgIHBlcm11dGF0aW9ucyxcbiAgICBjb21iaW5hdGlvbnMsXG4gICAgY2FydGVzaWFuLFxuICAgIHRpbWVzLFxuICAgIHJhbmdlLFxuICAgIHppcCxcbiAgICBhdCxcbiAgICBwZWVrLFxuICAgIGluZCxcbiAgICBwb3MsXG4gICAgY2h1bmssXG4gICAgc2h1ZmZsZSxcbiAgICBmbGF0LFxuICAgIHVuZmxhdCxcbiAgICBzcGxpdCxcbiAgICBwbHVjayxcbiAgICBleGNsdWRlLFxuICAgIHRyYW5zZm9ybSxcbiAgfTtcbn1cbiIsIi8qKlxuICogQG92ZXJ2aWV3IEEgc21hbGwgdmVjdG9yIGFuZCBtYXRyaXggbGlicmFyeVxuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG5jb25zdCBfdmVjX3RpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcbmNvbnN0IF92ZWNfY2h1bmsgPSAoYSwgbikgPT4gX3ZlY190aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcbmNvbnN0IF92ZWNfZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuY29uc3QgX3ZlY19pc192ZWMyID0gYSA9PiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgJ3gnIGluIGEgJiYgJ3knIGluIGE7XG5jb25zdCBfdmVjX2lzX3ZlYzMgPSBhID0+IHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiAneCcgaW4gYSAmJiAneScgaW4gYSAmJiAneicgaW4gYTtcblxuLyoqXG4gKiBBIDJkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjMlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgMmQgdmVjdG9yXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSAyZCB2ZWN0b3IsIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc1ZlYzIodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAneCcgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUueCA9PT0gJ251bWJlcicgJiZcbiAgICAneScgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUueSA9PT0gJ251bWJlcicgJiZcbiAgICAhKCd6JyBpbiB2YWx1ZSlcbiAgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgMmQgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWMyfSBbeF0gVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIGEgdmVjdG9yIHRvIGNvcHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgbmV3IDJkIHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+dmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYzIoMywgMik7IC8vICgzLCAyKVxuICogbGV0IGIgPSB2ZWMyKDQpOyAgICAvLyAoNCwgNClcbiAqIGxldCBjID0gdmVjMihhKTsgICAgLy8gKDMsIDIpXG4gKiBsZXQgZCA9IHZlYzIoKTsgICAgIC8vICgwLCAwKVxuICovXG5jb25zdCB2ZWMyID0gKHgsIHkpID0+IHtcbiAgaWYgKCF4ICYmICF5KSB7XG4gICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICB9XG4gIGlmIChfdmVjX2lzX3ZlYzIoeCkpIHtcbiAgICByZXR1cm4geyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfTtcbiAgfVxuICByZXR1cm4geyB4OiB4LCB5OiB5ID8/IHggfTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjMi5jb21wb25lbnRzID0gYSA9PiBbYS54LCBhLnldO1xuXG4vKipcbiAqIENyZWF0ZSBhIHZlY3RvciBmcm9tIGFuIGFycmF5IG9mIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29tcG9uZW50cyBUaGUgY29tcG9uZW50cyBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIG5ldyB2ZWN0b3JcbiAqL1xudmVjMi5mcm9tQ29tcG9uZW50cyA9IGNvbXBvbmVudHMgPT4gdmVjMiguLi5jb21wb25lbnRzLnNsaWNlKDAsIDIpKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMClcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKi9cbnZlYzIudXggPSAoKSA9PiB2ZWMyKDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxKVxuICogQHJldHVybiB7dmVjMn0gQSB1bml0IHZlY3RvciAoMCwgMSlcbiAqL1xudmVjMi51eSA9ICgpID0+IHZlYzIoMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgKyBiXG4gKi9cbnZlYzIuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIChiLnggPz8gYiksIHk6IGEueSArIChiLnkgPz8gYikgfSk7XG5cbi8qKlxuICogQWRkIG11bHRpcGxlIHZlY3RvcnNcbiAqIEBwYXJhbSAgey4uLmFueX0gdiBWZWN0b3JzIHRvIGFkZFxuICogQHJldHVybnMge3ZlYzJ9IFRoZSBzdW0gb2YgdGhlIHZlY3RvcnNcbiAqL1xudmVjMi5hZGRtID0gKC4uLnYpID0+IHYucmVkdWNlKChhLCBiKSA9PiB2ZWMyLmFkZChhLCBiKSwgdmVjMigpKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMnxudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhIC0gYlxuICovXG52ZWMyLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSAoYi54ID8/IGIpLCB5OiBhLnkgLSAoYi55ID8/IGIpIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG11bHRpcGxlIHZlY3RvcnNcbiAqIEBwYXJhbSAgey4uLmFueX0gdiBWZWN0b3JzIHRvIHN1YnRyYWN0XG4gKiBAcmV0dXJucyB7dmVjMn0gVGhlIHJlc3VsdCBvZiBzdWJ0cmFjdGluZyB0aGUgdmVjdG9yc1xuICovXG52ZWMyLnN1Ym0gPSAoLi4udikgPT4gdi5yZWR1Y2UoKGEsIGIpID0+IHZlYzIuc3ViKGEsIGIpKTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSAqIGJcbiAqL1xudmVjMi5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogKGIueCA/PyBiKSwgeTogYS55ICogKGIueSA/PyBiKSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvciBieSBhIHNjYWxhciwgYWxpYXMgZm9yIHZlYzIubXVsXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhICogYlxuICovXG52ZWMyLnNjYWxlID0gKGEsIGIpID0+IHZlYzIubXVsKGEsIGIpO1xuXG4vKipcbiAqIERpdmlkZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSAvIGJcbiAqL1xudmVjMi5kaXYgPSAoYSwgYikgPT4gKHsgeDogYS54IC8gKGIueCA/PyBiKSwgeTogYS55IC8gKGIueSA/PyBiKSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMyLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMyLm1hbmhhdHRhbiA9IGEgPT4gTWF0aC5hYnMoYS54KSArIE1hdGguYWJzKGEueSk7XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge3ZlYzJ9IF5hXG4gKi9cbnZlYzIubm9yID0gYSA9PiB7XG4gIGxldCBsZW4gPSB2ZWMyLmxlbihhKTtcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYzIoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMyLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzIucm90ID0gKGEsIHIpID0+IHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcbiAgICBjID0gTWF0aC5jb3Mocik7XG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xufTtcblxuLyoqXG4gKiBGYXN0IG1ldGhvZCB0byByb3RhdGUgYSB2ZWN0b3IgYnkgLTkwLCA5MCBvciAxODAgZGVncmVlc1xuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciAxIGZvciA5MCBkZWdyZWVzIChjdyksIC0xIGZvciAtOTAgZGVncmVlcyAoY2N3KSwgMiBvciAtMiBmb3IgMTgwIGRlZ3JlZXNcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMi5yb3RmID0gKGEsIHIpID0+IHtcbiAgc3dpdGNoIChyKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gdmVjMihhLnksIC1hLngpO1xuICAgIGNhc2UgLTE6IHJldHVybiB2ZWMyKC1hLnksIGEueCk7XG4gICAgY2FzZSAyOiBjYXNlIC0yOiByZXR1cm4gdmVjMigtYS54LCAtYS55KTtcbiAgICBkZWZhdWx0OiByZXR1cm4gYTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY2FsYXIgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDDlyBiXG4gKi9cbnZlYzIuY3Jvc3MgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gYS54ICogYi55IC0gYS55ICogYi54O1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmVjdG9ycyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMyLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMyLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gY29weVxuICogQHJldHVybiB7dmVjMn0gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYzIuY3B5ID0gYSA9PiB2ZWMyKGEpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIDJkIHZlY3RvclxuICogQGNhbGxiYWNrIHZlYzJNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4IG9yIHkpXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMk1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzJ9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjMi5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xudmVjMi5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9YDtcblxuLyoqXG4gKiBTd2l6emxlIGEgdmVjdG9yIHdpdGggYSBzdHJpbmcgb2YgY29tcG9uZW50IGxhYmVsc1xuICpcbiAqIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW46XG4gKiAtIGB4YCBvciBgeWBcbiAqIC0gYHVgIG9yIGB2YCAoYWxpYXNlcyBmb3IgYHhgIGFuZCBgeWAsIHJlc3BlY3RpdmVseSlcbiAqIC0gYFhgLCBgWWAsIGBVYCwgYFZgIChuZWdhdGVkIHZlcnNpb25zIG9mIHRoZSBhYm92ZSlcbiAqIC0gYDBgIG9yIGAxYCAodGhlc2Ugd2lsbCBiZSBwYXNzZWQgdGhyb3VnaCB1bmNoYW5nZWQpXG4gKiAtIGAuYCB0byByZXR1cm4gdGhlIGNvbXBvbmVudCB0aGF0IHdvdWxkIG5vcm1hbGx5IGJlIGF0IHRoaXMgcG9zaXRpb24gKG9yIDApXG4gKlxuICogQW55IG90aGVyIGNoYXJhY3RlcnMgd2lsbCBkZWZhdWx0IHRvIDBcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIHN3aXp6bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLi4nXSBUaGUgc3dpenpsZSBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSBzd2l6emxlZCBjb21wb25lbnRzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5zd2l6emxpbmcgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYzIoMywgLTIpO1xuICogdmVjMi5zd2l6KGEsICd4Jyk7ICAgIC8vIFszXVxuICogdmVjMi5zd2l6KGEsICd5eCcpOyAgIC8vIFstMiwgM11cbiAqIHZlYzIuc3dpeihhLCAneFknKTsgICAvLyBbMywgMl1cbiAqIHZlYzIuc3dpeihhLCAnWXknKTsgICAvLyBbMiwgLTJdXG4gKiB2ZWMyLnN3aXooYSwgJ3gueCcpOyAgLy8gWzMsIC0yLCAzXVxuICogdmVjMi5zd2l6KGEsICd5MDF4Jyk7IC8vIFstMiwgMCwgMSwgM11cbiAqL1xudmVjMi5zd2l6ID0gKGEsIHMgPSAnLi4nKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBzLnNwbGl0KCcnKS5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICd4JzogY2FzZSAndSc6IHJlc3VsdC5wdXNoKGEueCk7IGJyZWFrO1xuICAgICAgY2FzZSAneSc6IGNhc2UgJ3YnOiByZXN1bHQucHVzaChhLnkpOyBicmVhaztcbiAgICAgIGNhc2UgJ1gnOiBjYXNlICdVJzogcmVzdWx0LnB1c2goLWEueCk7IGJyZWFrO1xuICAgICAgY2FzZSAnWSc6IGNhc2UgJ1YnOiByZXN1bHQucHVzaCgtYS55KTsgYnJlYWs7XG4gICAgICBjYXNlICcwJzogcmVzdWx0LnB1c2goMCk7IGJyZWFrO1xuICAgICAgY2FzZSAnMSc6IHJlc3VsdC5wdXNoKDEpOyBicmVhaztcbiAgICAgIGNhc2UgJy4nOiByZXN1bHQucHVzaChbYS54LCBhLnldW2ldID8/IDApOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHJlc3VsdC5wdXNoKDApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBvbGFyIGNvb3JkaW5hdGVzIGZvciBhIDJkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gcG9sYXJDb29yZGluYXRlczJkXG4gKiBAcHJvcGVydHkge251bWJlcn0gciBUaGUgbWFnbml0dWRlIChyYWRpdXMpIG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aGV0YSBUaGUgYW5nbGUgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIHBvbGFyIGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcmV0dXJuIHtwb2xhckNvb3JkaW5hdGVzMmR9IFRoZSBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqL1xudmVjMi5wb2xhciA9IGEgPT4gKHsgcjogdmVjMi5sZW4oYSksIHRoZXRhOiBNYXRoLmF0YW4yKGEueSwgYS54KSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IHBvbGFyIGNvb3JkaW5hdGVzIGludG8gYSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBtYWduaXR1ZGUgKHJhZGl1cykgb2YgdGhlIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHRoZXRhIFRoZSBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBhbmdsZSBhbmQgbWFnbml0dWRlXG4gKi9cbnZlYzIuZnJvbVBvbGFyID0gKHIsIHRoZXRhKSA9PiB2ZWMyKHIgKiBNYXRoLmNvcyh0aGV0YSksIHIgKiBNYXRoLnNpbih0aGV0YSkpO1xuXG4vKipcbiAqIEEgM2QgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSB2ZWMzXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB6IFRoZSB6IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgM2QgdmVjdG9yXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSAzZCB2ZWN0b3IsIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc1ZlYzModmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAneCcgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUueCA9PT0gJ251bWJlcicgJiZcbiAgICAneScgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUueSA9PT0gJ251bWJlcicgJiZcbiAgICAneicgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUueiA9PT0gJ251bWJlcidcbiAgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgM2QgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWMzfHZlYzJ9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgdGhlIHogY29tcG9uZW50IGlmIHggaXMgYSB2ZWMyXG4gKiBAcGFyYW0ge251bWJlcn0gW3pdIFRoZSB6IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIG5ldyAzZCB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMzKDMsIDIsIDEpOyAgICAgICAvLyAoMywgMiwgMSlcbiAqIGxldCBiID0gdmVjMyg0LCA1KTsgICAgICAgICAgLy8gKDQsIDUsIDApXG4gKiBsZXQgYyA9IHZlYzMoNik7ICAgICAgICAgICAgIC8vICg2LCA2LCA2KVxuICogbGV0IGQgPSB2ZWMzKGEpOyAgICAgICAgICAgICAvLyAoMywgMiwgMSlcbiAqIGxldCBlID0gdmVjMygpOyAgICAgICAgICAgICAgLy8gKDAsIDAsIDApXG4gKiBsZXQgZiA9IHZlYzModmVjMigxLCAyKSwgMyk7IC8vICgxLCAyLCAzKVxuICogbGV0IGcgPSB2ZWMzKHZlYzIoNCwgNSkpOyAgICAvLyAoNCwgNSwgMClcbiAqL1xuY29uc3QgdmVjMyA9ICh4LCB5LCB6KSA9PiB7XG4gIGlmICgheCAmJiAheSAmJiAheikge1xuICAgIHJldHVybiB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcbiAgfVxuICBpZiAoX3ZlY19pc192ZWMzKHgpKSB7XG4gICAgcmV0dXJuIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwLCB6OiB4LnogfHwgMCB9O1xuICB9XG4gIGlmIChfdmVjX2lzX3ZlYzIoeCkpIHtcbiAgICByZXR1cm4geyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAsIHo6IHkgfHwgMCB9O1xuICB9XG4gIHJldHVybiB7IHg6IHgsIHk6IHkgPz8geCwgejogeiA/PyB4IH07XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gZ2V0IGNvbXBvbmVudHMgZnJvbVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XG4gKi9cbnZlYzMuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55LCBhLnpdO1xuXG4vKipcbiAqIENyZWF0ZSBhIHZlY3RvciBmcm9tIGFuIGFycmF5IG9mIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29tcG9uZW50cyBUaGUgY29tcG9uZW50cyBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIG5ldyB2ZWN0b3JcbiAqL1xudmVjMy5mcm9tQ29tcG9uZW50cyA9IGNvbXBvbmVudHMgPT4gdmVjMyguLi5jb21wb25lbnRzLnNsaWNlKDAsIDMpKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMCwgMClcbiAqIEByZXR1cm4ge3ZlYzN9IEEgdW5pdCB2ZWN0b3IgKDEsIDAsIDApXG4gKi9cbnZlYzMudXggPSAoKSA9PiB2ZWMzKDEsIDAsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxLCAwKVxuICogQHJldHVybiB7dmVjM30gQSB1bml0IHZlY3RvciAoMCwgMSwgMClcbiAqL1xudmVjMy51eSA9ICgpID0+IHZlYzMoMCwgMSwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDAsIDEpXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHVuaXQgdmVjdG9yICgwLCAwLCAxKVxuICovXG52ZWMzLnV6ID0gKCkgPT4gdmVjMygwLCAwLCAxKTtcblxuLyoqXG4gKiBBZGQgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSArIGJcbiAqL1xudmVjMy5hZGQgPSAoYSwgYikgPT4gKHsgeDogYS54ICsgKGIueCA/PyBiKSwgeTogYS55ICsgKGIueSA/PyBiKSwgejogYS56ICsgKGIueiA/PyBiKSB9KTtcblxuLyoqXG4gKiBBZGQgbXVsdGlwbGUgdmVjdG9yc1xuICogQHBhcmFtICB7Li4uYW55fSB2IFZlY3RvcnMgdG8gYWRkXG4gKiBAcmV0dXJucyB7dmVjM30gVGhlIHN1bSBvZiB0aGUgdmVjdG9yc1xuICovXG52ZWMzLmFkZG0gPSAoLi4udikgPT4gdi5yZWR1Y2UoKGEsIGIpID0+IHZlYzMuYWRkKGEsIGIpLCB2ZWMzKCkpO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgLSBiXG4gKi9cbnZlYzMuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIChiLnggPz8gYiksIHk6IGEueSAtIChiLnkgPz8gYiksIHo6IGEueiAtIChiLnogPz8gYikgfSk7XG5cbi8qKlxuICogU3VidHJhY3QgbXVsdGlwbGUgdmVjdG9yc1xuICogQHBhcmFtICB7Li4uYW55fSB2IFZlY3RvcnMgdG8gc3VidHJhY3RcbiAqIEByZXR1cm5zIHt2ZWMzfSBUaGUgcmVzdWx0IG9mIHN1YnRyYWN0aW5nIHRoZSB2ZWN0b3JzXG4gKi9cbnZlYzMuc3VibSA9ICguLi52KSA9PiB2LnJlZHVjZSgoYSwgYikgPT4gdmVjMy5zdWIoYSwgYikpO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM3xudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhICogYlxuICovXG52ZWMzLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiAoYi54ID8/IGIpLCB5OiBhLnkgKiAoYi55ID8/IGIpLCB6OiBhLnogKiAoYi56ID8/IGIpIH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLCBhbGlhcyBmb3IgdmVjMy5tdWxcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgKiBiXG4gKi9cbnZlYzMuc2NhbGUgPSAoYSwgYikgPT4gdmVjMy5tdWwoYSwgYik7XG5cbi8qKlxuICogRGl2aWRlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM3xudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhIC8gYlxuICovXG52ZWMzLmRpdiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLyAoYi54ID8/IGIpLCB5OiBhLnkgLyAoYi55ID8/IGIpLCB6OiBhLnogLyAoYi56ID8/IGIpIH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYzMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55ICsgYS56ICogYS56KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYzMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KSArIE1hdGguYWJzKGEueik7XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge3ZlYzN9IF5hXG4gKi9cbnZlYzMubm9yID0gYSA9PiB7XG4gIGxldCBsZW4gPSB2ZWMzLmxlbihhKTtcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4sIHo6IGEueiAvIGxlbiB9IDogdmVjMygpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbnZlYzMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIuejtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgdXNpbmcgYSByb3RhdGlvbiBtYXRyaXhcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHttYXR9IG0gVGhlIHJvdGF0aW9uIG1hdHJpeFxuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdCA9IChhLCBtKSA9PiB2ZWMzKFxuICB2ZWMzLmRvdCh2ZWMzLmZyb21Db21wb25lbnRzKG1hdC5yb3cobSwgMSkpLCBhKSxcbiAgdmVjMy5kb3QodmVjMy5mcm9tQ29tcG9uZW50cyhtYXQucm93KG0sIDIpKSwgYSksXG4gIHZlYzMuZG90KHZlYzMuZnJvbUNvbXBvbmVudHMobWF0LnJvdyhtLCAzKSksIGEpXG4pO1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnMgYXJvdW5kIHRoZSB4IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdHggPSAoYSwgcikgPT4gdmVjMyhcbiAgYS54LFxuICBhLnkgKiBNYXRoLmNvcyhyKSAtIGEueiAqIE1hdGguc2luKHIpLFxuICBhLnkgKiBNYXRoLnNpbihyKSArIGEueiAqIE1hdGguY29zKHIpXG4pO1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnMgYXJvdW5kIHRoZSB5IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdHkgPSAoYSwgcikgPT4gdmVjMyhcbiAgYS54ICogTWF0aC5jb3MocikgKyBhLnogKiBNYXRoLnNpbihyKSxcbiAgYS55LFxuICAtYS54ICogTWF0aC5zaW4ocikgKyBhLnogKiBNYXRoLmNvcyhyKVxuKTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zIGFyb3VuZCB0aGUgeiBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3R6ID0gKGEsIHIpID0+IHZlYzMoXG4gIGEueCAqIE1hdGguY29zKHIpIC0gYS55ICogTWF0aC5zaW4ociksXG4gIGEueCAqIE1hdGguc2luKHIpICsgYS55ICogTWF0aC5jb3MociksXG4gIGEuelxuKTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgdXNpbmcgYSBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gcSBUaGUgcXVhdGVybmlvbiB0byByb3RhdGUgYnlcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3RxID0gKHYsIHEpID0+IHtcbiAgaWYgKHEubGVuZ3RoICE9PSA0KSB7XG4gICAgcmV0dXJuIHZlYzMoKTtcbiAgfVxuXG4gIGNvbnN0IGQgPSBNYXRoLnNxcnQocVswXSAqIHFbMF0gKyBxWzFdICogcVsxXSArIHFbMl0gKiBxWzJdICsgcVszXSAqIHFbM10pO1xuICBpZiAoZCA9PT0gMCkge1xuICAgIHJldHVybiB2ZWMzKCk7XG4gIH1cblxuICBjb25zdCB1cSA9IFtxWzBdIC8gZCwgcVsxXSAvIGQsIHFbMl0gLyBkLCBxWzNdIC8gZF07XG4gIGNvbnN0IHUgPSB2ZWMzKC4uLnVxLnNsaWNlKDAsIDMpKTtcbiAgY29uc3QgcyA9IHVxWzNdO1xuICByZXR1cm4gdmVjMy5hZGQoXG4gICAgdmVjMy5hZGQoXG4gICAgICB2ZWMzLm11bCh1LCAyICogdmVjMy5kb3QodSwgdikpLFxuICAgICAgdmVjMy5tdWwodiwgcyAqIHMgLSB2ZWMzLmRvdCh1LCB1KSlcbiAgICApLFxuICAgIHZlYzMubXVsKHZlYzMuY3Jvc3ModSwgdiksIDIgKiBzKVxuICApO1xufTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgdXNpbmcgRXVsZXIgYW5nbGVzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gZSBUaGUgRXVsZXIgYW5nbGVzIHRvIHJvdGF0ZSBieVxuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdGEgPSAoYSwgZSkgPT4gdmVjMy5yb3R6KHZlYzMucm90eSh2ZWMzLnJvdHgoYSwgZS54KSwgZS55KSwgZS56KTtcblxuLyoqXG4gKiBHZXQgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgw5cgYlxuICovXG52ZWMzLmNyb3NzID0gKGEsIGIpID0+IHZlYzMoXG4gIGEueSAqIGIueiAtIGEueiAqIGIueSxcbiAgYS56ICogYi54IC0gYS54ICogYi56LFxuICBhLnggKiBiLnkgLSBhLnkgKiBiLnhcbik7XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2ZWN0b3JzIGEgYW5kIGIgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xudmVjMy5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueSAmJiBhLnogPT09IGIuejtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yIGZyb20gdGhlIHggYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYzMucmFkeCA9IGEgPT4gTWF0aC5hdGFuMihhLnosIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvciBmcm9tIHRoZSB5IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMzLnJhZHkgPSBhID0+IE1hdGguYXRhbjIoYS54LCBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IgZnJvbSB0aGUgeiBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjMy5yYWR6ID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS56KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWMzfSBBIGNvcHkgb2YgdmVjdG9yIGFcbiAqL1xudmVjMy5jcHkgPSBhID0+IHZlYzMoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgM2QgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjM01hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGNvbXBvbmVudCB2YWx1ZVxuICogQHBhcmFtIHsneCcgfCAneScgfCAneid9IGxhYmVsIFRoZSBjb21wb25lbnQgbGFiZWwgKHgsIHkgb3IgeilcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvciBhbmQgYnVpbGQgYSBuZXcgdmVjdG9yIGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjM30gVmVjdG9yIGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG52ZWMzLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JyksIHo6IGYoYS56LCAneicpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xudmVjMy5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9JHtzfSR7YS56fWA7XG5cbi8qKlxuICogU3dpenpsZSBhIHZlY3RvciB3aXRoIGEgc3RyaW5nIG9mIGNvbXBvbmVudCBsYWJlbHNcbiAqXG4gKiBUaGUgc3RyaW5nIGNhbiBjb250YWluOlxuICogLSBgeGAsIGB5YCBvciBgemBcbiAqIC0gYHVgLCBgdmAgb3IgYHdgIChhbGlhc2VzIGZvciBgeGAsIGB5YCBhbmQgYHpgLCByZXNwZWN0aXZlbHkpXG4gKiAtIGByYCwgYGdgIG9yIGBiYCAoYWxpYXNlcyBmb3IgYHhgLCBgeWAgYW5kIGB6YCwgcmVzcGVjdGl2ZWx5KVxuICogLSBgWGAsIGBZYCwgYFpgLCBgVWAsIGBWYCwgYFdgLCBgUmAsIGBHYCwgYEJgIChuZWdhdGVkIHZlcnNpb25zIG9mIHRoZSBhYm92ZSlcbiAqIC0gYDBgIG9yIGAxYCAodGhlc2Ugd2lsbCBiZSBwYXNzZWQgdGhyb3VnaCB1bmNoYW5nZWQpXG4gKiAtIGAuYCB0byByZXR1cm4gdGhlIGNvbXBvbmVudCB0aGF0IHdvdWxkIG5vcm1hbGx5IGJlIGF0IHRoaXMgcG9zaXRpb24gKG9yIDApXG4gKlxuICogQW55IG90aGVyIGNoYXJhY3RlcnMgd2lsbCBkZWZhdWx0IHRvIDBcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHN3aXp6bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLi4uJ10gVGhlIHN3aXp6bGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgc3dpenpsZWQgY29tcG9uZW50c1xuICogQGV4YW1wbGUgPGNhcHRpb24+c3dpenpsaW5nIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMzKDMsIC0yLCAxKTtcbiAqIHZlYzMuc3dpeihhLCAneCcpOyAgICAgLy8gWzNdXG4gKiB2ZWMzLnN3aXooYSwgJ3p5eCcpOyAgIC8vIFsxLCAtMiwgM11cbiAqIHZlYzMuc3dpeihhLCAneFlaJyk7ICAgLy8gWzMsIDIsIC0xXVxuICogdmVjMy5zd2l6KGEsICdaengnKTsgICAvLyBbLTEsIDEsIDNdXG4gKiB2ZWMzLnN3aXooYSwgJ3gueCcpOyAgIC8vIFszLCAtMiwgM11cbiAqIHZlYzMuc3dpeihhLCAneTAxengnKTsgLy8gWy0yLCAwLCAxLCAxLCAzXVxuICovXG52ZWMzLnN3aXogPSAoYSwgcyA9ICcuLi4nKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBzLnNwbGl0KCcnKS5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICd4JzogY2FzZSAndSc6IGNhc2UgJ3InOiByZXN1bHQucHVzaChhLngpOyBicmVhaztcbiAgICAgIGNhc2UgJ3knOiBjYXNlICd2JzogY2FzZSAnZyc6IHJlc3VsdC5wdXNoKGEueSk7IGJyZWFrO1xuICAgICAgY2FzZSAneic6IGNhc2UgJ3cnOiBjYXNlICdiJzogcmVzdWx0LnB1c2goYS56KTsgYnJlYWs7XG4gICAgICBjYXNlICdYJzogY2FzZSAnVSc6IGNhc2UgJ1InOiByZXN1bHQucHVzaCgtYS54KTsgYnJlYWs7XG4gICAgICBjYXNlICdZJzogY2FzZSAnVic6IGNhc2UgJ0cnOiByZXN1bHQucHVzaCgtYS55KTsgYnJlYWs7XG4gICAgICBjYXNlICdaJzogY2FzZSAnVyc6IGNhc2UgJ0InOiByZXN1bHQucHVzaCgtYS56KTsgYnJlYWs7XG4gICAgICBjYXNlICcwJzogcmVzdWx0LnB1c2goMCk7IGJyZWFrO1xuICAgICAgY2FzZSAnMSc6IHJlc3VsdC5wdXNoKDEpOyBicmVhaztcbiAgICAgIGNhc2UgJy4nOiByZXN1bHQucHVzaChbYS54LCBhLnksIGEuel1baV0gPz8gMCk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcmVzdWx0LnB1c2goMCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUG9sYXIgY29vcmRpbmF0ZXMgZm9yIGEgM2QgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBwb2xhckNvb3JkaW5hdGVzM2RcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByIFRoZSBtYWduaXR1ZGUgKHJhZGl1cykgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRoZXRhIFRoZSB0aWx0IGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwaGkgVGhlIHBhbiBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gcG9sYXIgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge3BvbGFyQ29vcmRpbmF0ZXMzZH0gVGhlIG1hZ25pdHVkZSwgdGlsdCBhbmQgcGFuIG9mIHRoZSB2ZWN0b3JcbiAqL1xudmVjMy5wb2xhciA9IGEgPT4ge1xuICBsZXQgciA9IHZlYzMubGVuKGEpLFxuICAgIHRoZXRhID0gTWF0aC5hY29zKGEueSAvIHIpLFxuICAgIHBoaSA9IE1hdGguYXRhbjIoYS56LCBhLngpO1xuICByZXR1cm4geyByLCB0aGV0YSwgcGhpIH07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgcG9sYXIgY29vcmRpbmF0ZXMgaW50byBhIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG1hZ25pdHVkZSAocmFkaXVzKSBvZiB0aGUgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gdGhldGEgVGhlIHRpbHQgb2YgdGhlIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHBoaSBUaGUgcGFuIG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzN9IEEgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGFuZ2xlIGFuZCBtYWduaXR1ZGVcbiAqL1xudmVjMy5mcm9tUG9sYXIgPSAociwgdGhldGEsIHBoaSkgPT4ge1xuICBjb25zdCBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKTtcbiAgcmV0dXJuIHZlYzMoXG4gICAgciAqIHNpblRoZXRhICogTWF0aC5jb3MocGhpKSxcbiAgICByICogTWF0aC5jb3ModGhldGEpLFxuICAgIHIgKiBzaW5UaGV0YSAqIE1hdGguc2luKHBoaSlcbiAgKTtcbn07XG5cbi8qKlxuICogQSBtYXRyaXhcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBtYXRyaXhcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIG1hdHJpeCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzTWF0KHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgJ20nIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLm0gPT09ICdudW1iZXInICYmXG4gICAgJ24nIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLm4gPT09ICdudW1iZXInICYmXG4gICAgJ2VudHJpZXMnIGluIHZhbHVlICYmXG4gICAgQXJyYXkuaXNBcnJheSh2YWx1ZS5lbnRyaWVzKVxuICApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcbiAqL1xuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xuICBtLCBuLFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXG59KTtcblxuLyoqXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcbiAqL1xubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcblxuLyoqXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXG4gKi9cbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcblxuLyoqXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcbiAqL1xubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xuXG4vKipcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LnJvdyA9IChhLCBtKSA9PiB7XG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5jb2wgPSAoYSwgbikgPT4gX3ZlY190aW1lcyhpID0+IG1hdC5nZXQoYSwgKGkgKyAxKSwgbiksIGEubSk7XG5cbi8qKlxuICogQWRkIG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSArIGJcbiAqL1xubWF0LmFkZCA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2ICsgYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgLSBiXG4gKi9cbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogTXVsdGlwbHkgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fGZhbHNlfSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bCA9IChhLCBiKSA9PiB7XG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIF92ZWNfZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogTXVsdGlwbHkgYSBtYXRyaXggYnkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge3ZlYzJ8dmVjM3xudW1iZXJbXX0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjMnx2ZWMzfG51bWJlcltdfGZhbHNlfSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGFuZCB2ZWN0b3IgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bHYgPSAoYSwgYikgPT4ge1xuICBsZXQgbiwgYmIsIHJ0O1xuICBpZiAoX3ZlY19pc192ZWMzKGIpKSB7XG4gICAgYmIgPSB2ZWMzLmNvbXBvbmVudHMoYik7XG4gICAgbiA9IDM7XG4gICAgcnQgPSB2ZWMzLmZyb21Db21wb25lbnRzO1xuICB9IGVsc2UgaWYgKF92ZWNfaXNfdmVjMihiKSkge1xuICAgIGJiID0gdmVjMi5jb21wb25lbnRzKGIpO1xuICAgIG4gPSAyO1xuICAgIHJ0ID0gdmVjMi5mcm9tQ29tcG9uZW50cztcbiAgfSBlbHNlIHtcbiAgICBiYiA9IGI7XG4gICAgbiA9IGIubGVuZ3RoID8/IDA7XG4gICAgcnQgPSB2ID0+IHY7XG4gIH1cbiAgaWYgKGEubiAhPT0gbikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goX3ZlY19kb3QobWF0LnJvdyhhLCBpKSwgYmIpKTtcbiAgfVxuICByZXR1cm4gcnQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBTY2FsZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXG4gKi9cbm1hdC5zY2FsZSA9IChhLCBiKSA9PiBtYXQubWFwKGEsIHYgPT4gdiAqIGIpO1xuXG4vKipcbiAqIFRyYW5zcG9zZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcbiAqIEByZXR1cm4ge21hdH0gQSB0cmFuc3Bvc2VkIG1hdHJpeFxuICovXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgX3ZlY190aW1lcyhpID0+IG1hdC5jb2woYSwgKGkgKyAxKSksIGEubikuZmxhdCgpKTtcblxuLyoqXG4gKiBHZXQgdGhlIG1pbm9yIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHttYXR8ZmFsc2V9IFRoZSAoaSwgaikgbWlub3Igb2YgbWF0cml4IGEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZW50cmllcyA9IFtdO1xuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xuICAgIGlmIChpaSA9PT0gaSkgeyBjb250aW51ZTsgfVxuICAgIGZvciAobGV0IGpqID0gMTsgamogPD0gYS5uOyBqaisrKSB7XG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cbiAgICAgIGVudHJpZXMucHVzaChtYXQuZ2V0KGEsIGlpLCBqaikpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0KGEubSAtIDEsIGEubiAtIDEsIGVudHJpZXMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHJldHVybiB7bnVtYmVyfGZhbHNlfSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5kZXQgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYS5tID09PSAxKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcbiAgfVxuICBpZiAoYS5tID09PSAyKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcbiAgfVxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcbiAgICBzaWduICo9IC0xO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7bWF0fGZhbHNlfSBeYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm5vciA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICByZXR1cm4gbWF0Lm1hcChhLCBpID0+IGkgKiBkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcbiAqIEByZXR1cm4ge21hdH0gVGhlIGFkanVnYXRlIG9mIGFcbiAqL1xubWF0LmFkaiA9IGEgPT4ge1xuICBjb25zdCBtaW5vcnMgPSBtYXQoYS5tLCBhLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KG1pbm9ycywgaSwgaiwgbWF0LmRldChtYXQubWlub3IoYSwgaSwgaikpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29mYWN0b3JzID0gbWF0Lm1hcChtaW5vcnMsICh2LCBpKSA9PiB2ICogKGkgJSAyID8gLTEgOiAxKSk7XG4gIHJldHVybiBtYXQudHJhbnMoY29mYWN0b3JzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybiB7bWF0fGZhbHNlfSBhXi0xIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaGFzIG5vIGludmVyc2VcbiAqL1xubWF0LmludiA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuIG1hdC5zY2FsZShtYXQuYWRqKGEpLCAxIC8gZCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBtYXRyaWNlcyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtYXRyaWNlcyBhIGFuZCBiIGFyZSBpZGVudGljYWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG5tYXQuZXEgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0LnN0cihhKSA9PT0gbWF0LnN0cihiKTtcblxuLyoqXG4gKiBDb3B5IGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXG4gKi9cbm1hdC5jcHkgPSBhID0+IG1hdChhLm0sIGEubiwgWy4uLmEuZW50cmllc10pO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgZW50cnkgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgZW50cnkgaW5kZXhcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBlbnRyeVxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXggYW5kIGJ1aWxkIGEgbmV3IG1hdHJpeCBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXRyaXhNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gTWF0cml4IGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG5tYXQubWFwID0gKGEsIGYpID0+IG1hdChhLm0sIGEubiwgYS5lbnRyaWVzLm1hcChmKSk7XG5cbi8qKlxuICogQ29udmVydCBhIG1hdHJpeCBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbnM9J1xcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcbicpID0+IF92ZWNfY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHZlYzIsIHZlYzMsIG1hdCwgaXNWZWMyLCBpc1ZlYzMsIGlzTWF0IH07XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFNjZW5lSW1hZ2UgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjb3B5U2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2NvcHkuZnJhZy5nbHNsJyk7XG5pbXBvcnQgcXVhZFNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9xdWFkLnZlcnQuZ2xzbCcpO1xuXG5leHBvcnQgdHlwZSBHbFByb2dyYW0gPSB7XG4gIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcbiAgdW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIFdlYkdMVW5pZm9ybUxvY2F0aW9uPjtcbn07XG5cbmV4cG9ydCB0eXBlIEdsUmVuZGVyVGFyZ2V0ID0ge1xuICB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIGZyYW1lYnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xuICBzaXplOiB2ZWMyO1xufTtcblxuLyoqXG4gKiBBIFdlYkdMIGNvbnRleHQgdGhhdCBjYW4gYmUgc2hhcmVkIGJ5IGFueXRoaW5nIHJlbmRlcmluZyBwYXJ0IG9mIGEgc2NlbmVcbiAqXG4gKiBUZXh0dXJlcyBjYW4ndCBiZSBzaGFyZWQgYmV0d2VlbiBjb250ZXh0cywgc28gc2hhcmluZyBhIGNvbnRleHQgbWVhbnMgdGhhdFxuICogdGhlIG91dHB1dCBvZiBvbmUgcGFzcyBjYW4gYmUgdXNlZCBieSBhbm90aGVyIHdpdGhvdXQgY29weWluZyBpdCB0aHJvdWdoIGFcbiAqIGNhbnZhcy5cbiAqXG4gKiBFdmVyeXRoaW5nIGluIHRoZSBjb250ZXh0IGlzIGxvc3Qgd2hlbiB0aGUgY29udGV4dCBpcyBsb3N0LCBzbyBhbnl0aGluZyB1c2luZ1xuICogdGhpcyBzaG91bGQgY3JlYXRlIGl0cyBwcm9ncmFtcyBhbmQgdGV4dHVyZXMgaW4gYW4gYG9uSW5pdGlhbGlzZSgpYCBjYWxsYmFjay5cbiAqIFRoZSBtZXRob2RzIGhlcmUgc2hvdWxkIG9ubHkgYmUgdXNlZCBmcm9tIHRoYXQgY2FsbGJhY2ssIG9yIHdoaWxlIGBhdmFpbGFibGVgXG4gKiBpcyB0cnVlXG4gKi9cbmV4cG9ydCBjbGFzcyBHbENvbnRleHQge1xuICAvKipcbiAgICogVGhlIHRleHR1cmUgdW5pdCB1c2VkIGZvciBpbWFnZXMgdGhhdCBhcmUgb25seSBuZWVkZWQgZm9yIGEgc2luZ2xlIGRyYXdcbiAgICpcbiAgICogV2ViR0wgZ3VhcmFudGVlcyA4IHRleHR1cmUgdW5pdHMsIHRoaXMgaXMgdGhlIGxhc3Qgb2YgdGhlbVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBJTUFHRV9VTklUID0gNztcblxuICAvKipcbiAgICogVGhlIG91dHB1dCBvZiB0aGUgbW9zdCByZWNlbnQgcGFzc1xuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXG4gIHB1YmxpYyBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBjb3B5UHJvZ3JhbTogR2xQcm9ncmFtO1xuXG4gIHByaXZhdGUgaW5pdGlhbGlzZUNhbGxiYWNrczogKChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSA9PiB2b2lkKVtdID0gW107XG5cbiAgLyoqXG4gICAqIEltYWdlcyBvbmx5IG5lZWQgdG8gYmUgdXBsb2FkZWQgb25jZSwgYnV0IGNhbnZhc2VzIG1pZ2h0IGNoYW5nZVxuICAgKi9cbiAgcHJpdmF0ZSBpbWFnZVRleHR1cmVzID0gbmV3IFdlYWtNYXA8U2NlbmVJbWFnZSwgV2ViR0xUZXh0dXJlPigpO1xuICBwcml2YXRlIHVwbG9hZGVkQ2FudmFzZXMgPSBuZXcgU2V0PFNjZW5lSW1hZ2U+KCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dGxvc3QnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCAoKSA9PlxuICAgICAgdGhpcy5pbml0aWFsaXNlKClcbiAgICApO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGNvbnRleHQgY2FuIGJlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdsICE9PSBudWxsICYmICF0aGlzLmdsLmlzQ29udGV4dExvc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGZ1bmN0aW9uIHRoYXQgc2V0cyB1cCBwcm9ncmFtcyBhbmQgdGV4dHVyZXNcbiAgICpcbiAgICogVGhpcyBpcyBjYWxsZWQgc3RyYWlnaHQgYXdheSBpZiB0aGUgY29udGV4dCBpcyByZWFkeSwgYW5kIGFnYWluIHdoZW5ldmVyXG4gICAqIHRoZSBjb250ZXh0IGlzIHJlc3RvcmVkXG4gICAqL1xuICBwdWJsaWMgb25Jbml0aWFsaXNlKGNhbGxiYWNrOiAoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgPT4gdm9pZCkge1xuICAgIHRoaXMuaW5pdGlhbGlzZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblxuICAgIGlmICh0aGlzLmdsKSB7XG4gICAgICBjYWxsYmFjayh0aGlzLmdsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5nbCA9IG51bGw7XG5cbiAgICBjb25zdCBnbCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywge1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzOiBmYWxzZSxcbiAgICAgIGRlcHRoOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWw6IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmICghZ2wpIHtcbiAgICAgIGNvbnNvbGUud2FybignV2ViR0wgaXMgbm90IGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ2wgPSBnbDtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvcHlQcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKGNvcHlTaGFkZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYkdMIGhhcyBiZWVuIGRpc2FibGVkJywgZSk7XG4gICAgICB0aGlzLmdsID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmltYWdlVGV4dHVyZXMgPSBuZXcgV2Vha01hcCgpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGdsLmNyZWF0ZUJ1ZmZlcigpKTtcbiAgICBnbC5idWZmZXJEYXRhKFxuICAgICAgZ2wuQVJSQVlfQlVGRkVSLFxuICAgICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMV0pLFxuICAgICAgZ2wuU1RBVElDX0RSQVdcbiAgICApO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMLCBnbC5OT05FKTtcblxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMuaGVpZ2h0ID0gMDtcblxuICAgIHRoaXMuaW5pdGlhbGlzZUNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKGdsKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbXBpbGVTaGFkZXIodHlwZTogbnVtYmVyLCBzb3VyY2U6IHN0cmluZyk6IFdlYkdMU2hhZGVyIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKSE7XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICBpZiAoXG4gICAgICAhZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpICYmXG4gICAgICAhZ2wuaXNDb250ZXh0TG9zdCgpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpID8/ICdVbmFibGUgdG8gY29tcGlsZScpO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgcHJvZ3JhbSBmcm9tIGEgZnJhZ21lbnQgc2hhZGVyLCB0aGlzIHdpbGwgdXNlIHRoZSBxdWFkIHZlcnRleFxuICAgKiBzaGFkZXIgc28gaXQgY2FuIGJlIGRyYXduIHdpdGggYGRyYXdRdWFkKClgXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUHJvZ3JhbShmcmFnbWVudFNvdXJjZTogc3RyaW5nKTogR2xQcm9ncmFtIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCkhO1xuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHRoaXMuY29tcGlsZVNoYWRlcihnbC5WRVJURVhfU0hBREVSLCBxdWFkU2hhZGVyKSk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKFxuICAgICAgcHJvZ3JhbSxcbiAgICAgIHRoaXMuY29tcGlsZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U291cmNlKVxuICAgICk7XG4gICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsICdhX2Nvcm5lcicpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgaWYgKFxuICAgICAgIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpICYmXG4gICAgICAhZ2wuaXNDb250ZXh0TG9zdCgpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkgPz8gJ1VuYWJsZSB0byBsaW5rJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5pZm9ybXM6IEdsUHJvZ3JhbVsndW5pZm9ybXMnXSA9IHt9O1xuICAgIGNvbnN0IGNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHByb2dyYW0sIGkpITtcbiAgICAgIHVuaWZvcm1zW25hbWVdID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpITtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9ncmFtLCB1bmlmb3JtcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRleHR1cmUgdGhhdCBjYW4gYmUgcmVuZGVyZWQgaW50bywgdGhpcyB3aWxsIG5lZWQgdG8gYmUgZ2l2ZW4gYVxuICAgKiBzaXplIHVzaW5nIGByZXNpemVUYXJnZXQoKWBcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVSZW5kZXJUYXJnZXQoKTogR2xSZW5kZXJUYXJnZXQge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dHVyZTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIGZyYW1lYnVmZmVyOiBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpISxcbiAgICAgIHNpemU6IHZlYzIoKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgYSB0ZXh0dXJlIGFuZCBzZXQgaXRzIGZpbHRlcmluZ1xuICAgKlxuICAgKiBUZXh0dXJlcyBjYW4gb25seSByZXBlYXQgaWYgdGhlaXIgc2l6ZSBpcyBhIHBvd2VyIG9mIDJcbiAgICovXG4gIHB1YmxpYyBiaW5kVGV4dHVyZShcbiAgICB1bml0OiBudW1iZXIsXG4gICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlLFxuICAgIGZpbHRlcjogbnVtYmVyLFxuICAgIHJlcGVhdDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG4gICAgY29uc3Qgd3JhcCA9IHJlcGVhdCA/IGdsLlJFUEVBVCA6IGdsLkNMQU1QX1RPX0VER0U7XG5cbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdW5pdCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGZpbHRlcik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGZpbHRlcik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgd3JhcCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgd3JhcCk7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY29udGVudHMgb2YgYSB0ZXh0dXJlIHdpdGggYW4gaW1hZ2VcbiAgICovXG4gIHB1YmxpYyB1cGxvYWQoXG4gICAgdW5pdDogbnVtYmVyLFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBpbWFnZTogU2NlbmVJbWFnZSxcbiAgICBmaWx0ZXI6IG51bWJlcixcbiAgICByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZSh1bml0LCB0ZXh0dXJlLCBmaWx0ZXIsIHJlcGVhdCk7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY29udGVudHMgb2YgYSB0ZXh0dXJlIHdpdGggUkdCQSBwaXhlbCBkYXRhXG4gICAqL1xuICBwdWJsaWMgdXBsb2FkRGF0YShcbiAgICB1bml0OiBudW1iZXIsXG4gICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlLFxuICAgIHNpemU6IHZlYzIsXG4gICAgZGF0YTogVWludDhBcnJheSxcbiAgICBmaWx0ZXI6IG51bWJlcixcbiAgICByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZSh1bml0LCB0ZXh0dXJlLCBmaWx0ZXIsIHJlcGVhdCk7XG4gICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAwLFxuICAgICAgZ2wuUkdCQSxcbiAgICAgIHNpemUueCxcbiAgICAgIHNpemUueSxcbiAgICAgIDAsXG4gICAgICBnbC5SR0JBLFxuICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgIGRhdGFcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgYW4gaW1hZ2UsIHVwbG9hZGluZyBpdCBpZiB3ZSBoYXZlbid0IHNlZW4gaXQgYmVmb3JlXG4gICAqL1xuICBwdWJsaWMgYmluZEltYWdlKFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZpbHRlcjogbnVtYmVyLFxuICAgIHVuaXQ6IG51bWJlciA9IEdsQ29udGV4dC5JTUFHRV9VTklUXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICBsZXQgdGV4dHVyZSA9IHRoaXMuaW1hZ2VUZXh0dXJlcy5nZXQoaW1hZ2UpO1xuICAgIGNvbnN0IGlzTmV3ID0gdGV4dHVyZSA9PT0gdW5kZWZpbmVkO1xuICAgIGlmICghdGV4dHVyZSkge1xuICAgICAgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgICB0aGlzLmltYWdlVGV4dHVyZXMuc2V0KGltYWdlLCB0ZXh0dXJlKTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKHVuaXQsIHRleHR1cmUsIGZpbHRlcik7XG5cbiAgICBjb25zdCBpc1N0YWxlID1cbiAgICAgIGltYWdlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgJiYgIXRoaXMudXBsb2FkZWRDYW52YXNlcy5oYXMoaW1hZ2UpO1xuICAgIGlmIChpc05ldyB8fCBpc1N0YWxlKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgICAwLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICBpbWFnZVxuICAgICAgKTtcbiAgICAgIHRoaXMudXBsb2FkZWRDYW52YXNlcy5hZGQoaW1hZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYW52YXNlcyBtaWdodCBoYXZlIGNoYW5nZWQgc2luY2UgdGhleSB3ZXJlIGxhc3QgdXNlZCwgc28gYGJpbmRJbWFnZSgpYFxuICAgKiBzaG91bGQgdXBsb2FkIHRoZW0gYWdhaW5cbiAgICovXG4gIHB1YmxpYyBpbnZhbGlkYXRlQ2FudmFzZXMoKSB7XG4gICAgdGhpcy51cGxvYWRlZENhbnZhc2VzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzaXplIG9mIGEgdGV4dHVyZSB0aGF0IHdlJ3JlIHJlbmRlcmluZyBpbnRvXG4gICAqL1xuICBwdWJsaWMgcmVzaXplVGFyZ2V0KHRhcmdldDogR2xSZW5kZXJUYXJnZXQsIHNpemU6IHZlYzIpIHtcbiAgICBpZiAodGFyZ2V0LnNpemUueCA9PT0gc2l6ZS54ICYmIHRhcmdldC5zaXplLnkgPT09IHNpemUueSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICB0YXJnZXQuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZShHbENvbnRleHQuSU1BR0VfVU5JVCwgdGFyZ2V0LnRleHR1cmUsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnRleEltYWdlMkQoXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBzaXplLngsXG4gICAgICBzaXplLnksXG4gICAgICAwLFxuICAgICAgZ2wuUkdCQSxcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICBudWxsXG4gICAgKTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChcbiAgICAgIGdsLkZSQU1FQlVGRkVSLFxuICAgICAgZ2wuQ09MT1JfQVRUQUNITUVOVDAsXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgdGFyZ2V0LnRleHR1cmUsXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhlIG91dHB1dCBtYXRjaGVzIHRoZSBzY3JlZW4gc2l6ZVxuICAgKi9cbiAgcHVibGljIHJlc2l6ZShzY3JlZW46IHZlYzIpIHtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggPT09IHNjcmVlbi54ICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gc2NyZWVuLnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHNjcmVlbi54O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHNjcmVlbi55O1xuICAgIHRoaXMuZ2whLnZpZXdwb3J0KDAsIDAsIHNjcmVlbi54LCBzY3JlZW4ueSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIHF1YWQgY292ZXJpbmcgcGFydCBvZiB0aGUgc2NyZWVuXG4gICAqL1xuICBwdWJsaWMgZHJhd1F1YWQoXG4gICAgeyB1bmlmb3JtcyB9OiBHbFByb2dyYW0sXG4gICAgc2NyZWVuUmVjdGFuZ2xlOiBudW1iZXJbXSxcbiAgICB3b3JsZFJlY3RhbmdsZTogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF0sXG4gICAgbWFza1JlY3RhbmdsZTogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF1cbiAgKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV9zY3JlZW5SZWN0YW5nbGUsIHNjcmVlblJlY3RhbmdsZSk7XG4gICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X3dvcmxkUmVjdGFuZ2xlLCB3b3JsZFJlY3RhbmdsZSk7XG4gICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X21hc2tSZWN0YW5nbGUsIG1hc2tSZWN0YW5nbGUpO1xuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSB0ZXh0dXJlIG92ZXIgdGhlIHdob2xlIHNjcmVlbiwgcmVwbGFjaW5nIHdoYXQncyBhbHJlYWR5IHRoZXJlXG4gICAqL1xuICBwdWJsaWMgZHJhd1RleHR1cmUodGV4dHVyZTogV2ViR0xUZXh0dXJlLCBzY3JlZW46IHZlYzIpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvcHlQcm9ncmFtO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0ucHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKHByb2dyYW0udW5pZm9ybXMudV9zY3JlZW4sIHNjcmVlbi54LCBzY3JlZW4ueSk7XG4gICAgZ2wudW5pZm9ybTFmKHByb2dyYW0udW5pZm9ybXMudV9mbGlwWSwgMSk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKEdsQ29udGV4dC5JTUFHRV9VTklULCB0ZXh0dXJlLCBnbC5ORUFSRVNUKTtcbiAgICBnbC51bmlmb3JtMWkocHJvZ3JhbS51bmlmb3Jtcy51X2ltYWdlLCBHbENvbnRleHQuSU1BR0VfVU5JVCk7XG5cbiAgICB0aGlzLmRyYXdRdWFkKHByb2dyYW0sIFswLCAwLCBzY3JlZW4ueCwgc2NyZWVuLnldKTtcblxuICAgIC8vIEEgdGV4dHVyZSBjYW4ndCBzdGF5IGJvdW5kIHdoaWxlIHdlJ3JlIHJlbmRlcmluZyBpbnRvIGl0XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEdsQ29udGV4dCB9IGZyb20gJy4vR2xDb250ZXh0JztcbmV4cG9ydCB0eXBlIHsgR2xQcm9ncmFtLCBHbFJlbmRlclRhcmdldCB9IGZyb20gJy4vR2xDb250ZXh0JztcbmV4cG9ydCB0eXBlIHtcbiAgQ29sb3VyLFxuICBGcmFtZSxcbiAgSW50ZXJ2YWwxZCxcbiAgSW50ZXJ2YWwyZCxcbiAgUmVjdGFuZ2xlLFxuICBTY2VuZUNhbWVyYSxcbiAgU2NlbmVJbWFnZSxcbn0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQge1xuICBib3VuZGluZ1JlY3RhbmdsZSxcbiAgY29sb3VyVG9TdHJpbmcsXG4gIGRyYXdJbWFnZUluUmVjdGFuZ2xlLFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICBsZXJwQ29sb3VyLFxuICBtYXhWZWMsXG4gIG1pblZlYyxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbiAgcmVjdGFuZ2xlVG9JbnRlcnZhbCxcbiAgcmVjdGFuZ2xlVmVydGljZXMsXG4gIHNwcml0ZUJvdW5kcyxcbn0gZnJvbSAnLi91dGlsaXRpZXMnO1xuIiwiaW1wb3J0IHR5cGUgeyBTcHJpdGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zcHJpdGUnO1xuaW1wb3J0IHsgbGVycCB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgQ29sb3VyLCBJbnRlcnZhbDJkLCBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBHZXQgdGhlIG1pbmltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWluVmVjKC4uLnZlY3RvcnM6IHZlYzJbXSk6IHZlYzIge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1pbiwgdikgPT4gdmVjMihNYXRoLm1pbihtaW4ueCwgdi54KSwgTWF0aC5taW4obWluLnksIHYueSkpLFxuICAgIHZlYzIoSW5maW5pdHksIEluZmluaXR5KVxuICApO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbWF4aW11bSBvZiBhIHNldCBvZiB2ZWN0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhWZWMoLi4udmVjdG9yczogdmVjMltdKTogdmVjMiB7XG4gIHJldHVybiB2ZWN0b3JzLnJlZHVjZShcbiAgICAobWF4LCB2KSA9PiB2ZWMyKE1hdGgubWF4KG1heC54LCB2LngpLCBNYXRoLm1heChtYXgueSwgdi55KSksXG4gICAgdmVjMigtSW5maW5pdHksIC1JbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNtYWxsZXN0IHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIDIgcmVjdGFuZ2xlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYm91bmRpbmdSZWN0YW5nbGUoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICBjb25zdCBwb3NpdGlvbiA9IG1pblZlYyhhLnBvc2l0aW9uLCBiLnBvc2l0aW9uKTtcbiAgY29uc3QgYm90dG9tUmlnaHQgPSBtYXhWZWMoXG4gICAgdmVjMi5hZGQoYS5wb3NpdGlvbiwgYS5zaXplKSxcbiAgICB2ZWMyLmFkZChiLnBvc2l0aW9uLCBiLnNpemUpXG4gICk7XG5cbiAgcmV0dXJuIHsgcG9zaXRpb24sIHNpemU6IHZlYzIuc3ViKGJvdHRvbVJpZ2h0LCBwb3NpdGlvbikgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgY29sb3VyIG9iamVjdCB0byBhIENTUyBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG91clRvU3RyaW5nKGNvbG91cjogQ29sb3VyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGByZ2JhKCR7Y29sb3VyLnJ9LCAke2NvbG91ci5nfSwgJHtjb2xvdXIuYn0sICR7Y29sb3VyLmF9KWA7XG59XG5cbi8qKlxuICogTGluZWFyIGludGVycG9sYXRlIGJldHdlZW4gMiBjb2xvdXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwQ29sb3VyKGE6IENvbG91ciwgYjogQ29sb3VyLCBpOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByOiBsZXJwKGEuciwgYi5yLCBpKSxcbiAgICBnOiBsZXJwKGEuZywgYi5nLCBpKSxcbiAgICBiOiBsZXJwKGEuYiwgYi5iLCBpKSxcbiAgICBhOiBsZXJwKGEuYSwgYi5hLCBpKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgMmQgaW50ZXJ2YWwgdG8gYSByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVydmFsVG9SZWN0YW5nbGUoaW50ZXJ2YWw6IEludGVydmFsMmQpOiBSZWN0YW5nbGUge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiB2ZWMyKGludGVydmFsLmxlZnQsIGludGVydmFsLnRvcCksXG4gICAgc2l6ZTogdmVjMihpbnRlcnZhbC5yaWdodCAtIGludGVydmFsLmxlZnQsIGludGVydmFsLmJvdHRvbSAtIGludGVydmFsLnRvcCksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIHJlY3RhbmdsZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVUb0ludGVydmFsKHJlY3RhbmdsZTogUmVjdGFuZ2xlKTogSW50ZXJ2YWwyZCB7XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgcmlnaHQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54ICsgcmVjdGFuZ2xlLnNpemUueCxcbiAgICB0b3A6IHJlY3RhbmdsZS5wb3NpdGlvbi55LFxuICAgIGJvdHRvbTogcmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyByZWN0YW5nbGUuc2l6ZS55LFxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIDIgQUFCQnMgaW50ZXJzZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVzSW50ZXJzZWN0KGE6IFJlY3RhbmdsZSwgYjogUmVjdGFuZ2xlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRsMSA9IGEucG9zaXRpb247XG4gIGNvbnN0IGJyMSA9IHZlYzIuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSk7XG4gIGNvbnN0IHRsMiA9IGIucG9zaXRpb247XG4gIGNvbnN0IGJyMiA9IHZlYzIuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSk7XG5cbiAgcmV0dXJuIHRsMS54IDwgYnIyLnggJiYgYnIxLnggPiB0bDIueCAmJiB0bDEueSA8IGJyMi55ICYmIGJyMS55ID4gdGwyLnk7XG59XG5cbi8qKlxuICogR2V0IGFuIGFycmF5IG9mIHZlcnRpY2VzIGZvciBhIHJlY3RhbmdsZSBpbiBDVyB3aW5kaW5nIG9yZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVWZXJ0aWNlcyhyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IHZlYzJbXSB7XG4gIGNvbnN0IHRsID0gcmVjdGFuZ2xlLnBvc2l0aW9uO1xuICBjb25zdCBiciA9IHZlYzIuYWRkKHJlY3RhbmdsZS5wb3NpdGlvbiwgcmVjdGFuZ2xlLnNpemUpO1xuXG4gIHJldHVybiBbcmVjdGFuZ2xlLnBvc2l0aW9uLCB2ZWMyKGJyLngsIHRsLnkpLCBiciwgdmVjMih0bC54LCBici55KV07XG59XG5cbi8qKlxuICogR2V0IHRoZSBhcmVhIGNvdmVyZWQgYnkgYSBzcHJpdGUncyBjdXJyZW50IGZyYW1lLCB0aGlzIG1hdGNoZXMgd2hlcmVcbiAqIGBTcHJpdGUuZHJhdygpYCBwdXRzIHRoZSBpbWFnZSAoaWYgdGhlIHNwcml0ZSBpc24ndCByb3RhdGVkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlQm91bmRzKHNwcml0ZTogU3ByaXRlKTogUmVjdGFuZ2xlIHtcbiAgY29uc3QgeyBpbWFnZSB9ID0gc3ByaXRlO1xuICBjb25zdCBzaXplID0gaW1hZ2UgPyB2ZWMyKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpIDogc3ByaXRlLnNpemU7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogdmVjMi5zdWIoc3ByaXRlLnBvc2l0aW9uLCB2ZWMyLm11bChzcHJpdGUub3JpZ2luLCBzcHJpdGUuc2NhbGUpKSxcbiAgICBzaXplOiB2ZWMyLm11bChzaXplLCBzcHJpdGUuc2NhbGUpLFxuICB9O1xufVxuXG4vKipcbiAqIERyYXcgYW4gaW1hZ2UgaW50byBhIHJlY3RhbmdsZSwgZWl0aGVyIHJlcGVhdGluZyBpdCBvciBzdHJldGNoaW5nIGl0IHRvIGZpdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd0ltYWdlSW5SZWN0YW5nbGUoXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgaW1hZ2U6IFNjZW5lSW1hZ2UsXG4gIHJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICByZXBlYXQ6IGJvb2xlYW5cbikge1xuICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSByZWN0YW5nbGU7XG5cbiAgaWYgKCFyZXBlYXQpIHtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsICdyZXBlYXQnKTtcbiAgaWYgKHBhdHRlcm4pIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG59XG4iLCJleHBvcnQgdHlwZSB7IEZyYW1lIH0gZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vbGlnaHRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWZsZWN0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3dhdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vd29ybGQnO1xuIiwiaW1wb3J0IHR5cGUgeyBTcHJpdGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zcHJpdGUnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIHNwcml0ZUJvdW5kcyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2lyY2xlQ2FzdGVyLFxuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBTcHJpdGVDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFdhbGxSZWNlaXZlciwgV2FsbFJlY2VpdmVyT3B0aW9ucyB9IGZyb20gJy4vU3VyZmFjZSc7XG5cbnR5cGUgQWN0b3JTaGFkb3dPcHRpb25zID0ge1xuICAvKipcbiAgICogSGVpZ2h0IG9mIHRoZSBhcmVhIGF0IHRoZSBib3R0b20gb2YgdGhlIGFjdG9yIHRoYXQgY2FzdHMgYSBzaGFkb3csXG4gICAqIGRlZmF1bHRzIHRvIGEgdGhpcmQgb2YgdGhlIGFjdG9yJ3MgaGVpZ2h0XG4gICAqL1xuICBmb290cHJpbnRIZWlnaHQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBY3RvclNoYWRvdyA9XG4gIHwgJ25vbmUnXG4gIHwgJ3Nwcml0ZSdcbiAgfCAnY2lyY2xlJ1xuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdub25lJyB9KVxuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdzcHJpdGUnIH0gJiBQYXJ0aWFsPFxuICAgICAgICBPbWl0PFNwcml0ZUNhc3Rlck9wdGlvbnMsICdwb3NpdGlvbicgfCAnc2l6ZSc+XG4gICAgICA+KVxuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdjaXJjbGUnIH0gJiBQYXJ0aWFsPFxuICAgICAgICBPbWl0PENpcmNsZUNhc3Rlck9wdGlvbnMsICdwb3NpdGlvbicgfCAnc2l6ZSc+XG4gICAgICA+KTtcblxuZXhwb3J0IHR5cGUgQWN0b3JPcHRpb25zID0gT21pdDxXYWxsUmVjZWl2ZXJPcHRpb25zLCAncmVjZWl2ZUxpZ2h0Jz4gJiB7XG4gIC8qKlxuICAgKiBUaGUgc2hhZG93IGNhc3QgYnkgdGhpcyBhY3RvciwgdGhlIGRlZmF1bHQgaXMgYSBzdHJldGNoZWQgc2lsaG91ZXR0ZSBvZlxuICAgKiB0aGUgYWN0b3IncyBpbWFnZVxuICAgKi9cbiAgc2hhZG93PzogQWN0b3JTaGFkb3c7XG59O1xuXG5leHBvcnQgdHlwZSBTcHJpdGVBY3Rvck9wdGlvbnMgPSBPbWl0PFxuICBBY3Rvck9wdGlvbnMsXG4gICdwb3NpdGlvbicgfCAnc2l6ZScgfCAnaW1hZ2UnIHwgJ21hc2snIHwgJ25vcm1hbE1hcCcgfCAnc3BlY3VsYXJNYXAnXG4+ICYge1xuICAvKipcbiAgICogVGhlIHNwcml0ZSB0aGF0IHRoaXMgYWN0b3IgZm9sbG93c1xuICAgKlxuICAgKiBUaGUgYWN0b3IncyBwb3NpdGlvbiwgc2l6ZSwgYW5kIGltYWdlcyBjb21lIGZyb20gdGhlIHNwcml0ZSBldmVyeSB0aW1lIHRoZVxuICAgKiBzY2VuZSBpcyByZW5kZXJlZC4gTm9ybWFsIG1hcHMgYW5kIHNwZWN1bGFyIG1hcHMgY29tZSBmcm9tIHRoZSBzcHJpdGUnc1xuICAgKiBgbm9ybWFsYCBhbmQgYHNwZWN1bGFyYCBsYXllcnNcbiAgICovXG4gIHNwcml0ZTogU3ByaXRlO1xufTtcblxuLyoqXG4gKiBBIG1vdmluZyBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgY2FzdHMgYSBzaGFkb3dcbiAqL1xuZXhwb3J0IGNsYXNzIEFjdG9yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GT09UUFJJTlRfU0NBTEUgPSAxIC8gMztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSEFET1dfTEVOR1RIX1NDQUxFID0gMS4zMztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9STUFMX0xBWUVSID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNQRUNVTEFSX0xBWUVSID0gJ3NwZWN1bGFyJztcblxuICBwdWJsaWMgcmVhZG9ubHkgc3VyZmFjZTogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgY2FzdGVyOiBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXIgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlIHwgbnVsbDtcblxuICBwcml2YXRlIGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbTtcbiAgcHJpdmF0ZSBmb290cHJpbnRIZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogR2V0IHRoZSBhcmVhIGNvdmVyZWQgYnkgYSBzcHJpdGUncyBjdXJyZW50IGZyYW1lIGFuZCB0aGUgaW1hZ2VzIGZvciBpdFxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgc3ByaXRlRnJhbWUoc3ByaXRlOiBTcHJpdGUpIHtcbiAgICBjb25zdCB7IGltYWdlIH0gPSBzcHJpdGU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3ByaXRlQm91bmRzKHNwcml0ZSksXG4gICAgICBpbWFnZSxcbiAgICAgIG5vcm1hbE1hcDogaW1hZ2UgJiYgc3ByaXRlLmdldEltYWdlKHVuZGVmaW5lZCwgQWN0b3IuTk9STUFMX0xBWUVSKSxcbiAgICAgIHNwZWN1bGFyTWFwOiBpbWFnZSAmJiBzcHJpdGUuZ2V0SW1hZ2UodW5kZWZpbmVkLCBBY3Rvci5TUEVDVUxBUl9MQVlFUiksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHNwcml0ZSBhY3RvciBvcHRpb25zIGludG8gdGhlIGVxdWl2YWxlbnQgYWN0b3Igb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVzb2x2ZU9wdGlvbnMoXG4gICAgb3B0aW9uczogQWN0b3JPcHRpb25zIHwgU3ByaXRlQWN0b3JPcHRpb25zXG4gICk6IEFjdG9yT3B0aW9ucyB7XG4gICAgaWYgKCEoJ3Nwcml0ZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3ByaXRlLCAuLi5hY3RvciB9ID0gb3B0aW9ucztcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY3RvcixcbiAgICAgIC4uLkFjdG9yLnNwcml0ZUZyYW1lKHNwcml0ZSksXG4gICAgICBjdXN0b21EcmF3OiB7XG4gICAgICAgIGltYWdlOiBjb250ZXh0ID0+IHNwcml0ZS5kcmF3KGNvbnRleHQpLFxuICAgICAgICAuLi5hY3Rvci5jdXN0b21EcmF3LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSxcbiAgICBhY3Rvck9wdGlvbnM6IEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9uc1xuICApIHtcbiAgICBjb25zdCBvcHRpb25zID0gQWN0b3IucmVzb2x2ZU9wdGlvbnMoYWN0b3JPcHRpb25zKTtcbiAgICBjb25zdCB7IHNoYWRvdyA9ICdzcHJpdGUnLCAuLi5zdXJmYWNlIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHsgdHlwZSwgZm9vdHByaW50SGVpZ2h0LCAuLi5jYXN0ZXJPcHRpb25zIH0gPSAoXG4gICAgICB0eXBlb2Ygc2hhZG93ID09PSAnc3RyaW5nJyA/IHsgdHlwZTogc2hhZG93IH0gOiBzaGFkb3dcbiAgICApIGFzIEV4Y2x1ZGU8QWN0b3JTaGFkb3csIHN0cmluZz47XG5cbiAgICB0aGlzLmxpZ2h0aW5nID0gbGlnaHRpbmc7XG4gICAgdGhpcy5zcHJpdGUgPSAnc3ByaXRlJyBpbiBhY3Rvck9wdGlvbnMgPyBhY3Rvck9wdGlvbnMuc3ByaXRlIDogbnVsbDtcbiAgICB0aGlzLmZvb3RwcmludEhlaWdodCA9XG4gICAgICBmb290cHJpbnRIZWlnaHQgPz8gb3B0aW9ucy5zaXplLnkgKiBBY3Rvci5ERUZBVUxUX0ZPT1RQUklOVF9TQ0FMRTtcblxuICAgIHRoaXMuc3VyZmFjZSA9IGxpZ2h0aW5nLmFkZFdhbGxSZWNlaXZlcih7XG4gICAgICBtZXJnZWFibGU6IGZhbHNlLFxuICAgICAgcHJvamVjdFNoYWRvd3M6IGZhbHNlLFxuICAgICAgLi4uc3VyZmFjZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3RwcmludCA9IHRoaXMuZm9vdHByaW50KG9wdGlvbnMucG9zaXRpb24sIG9wdGlvbnMuc2l6ZSk7XG4gICAgaWYgKHR5cGUgPT09ICdzcHJpdGUnKSB7XG4gICAgICBjb25zdCBzaGFkb3dMZW5ndGggPSBvcHRpb25zLnNpemUueSAqIEFjdG9yLkRFRkFVTFRfU0hBRE9XX0xFTkdUSF9TQ0FMRTtcblxuICAgICAgdGhpcy5jYXN0ZXIgPSBsaWdodGluZy5hZGRTcHJpdGVDYXN0ZXIoe1xuICAgICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcbiAgICAgICAgbWluU2hhZG93TGVuZ3RoOiBzaGFkb3dMZW5ndGgsXG4gICAgICAgIG1heFNoYWRvd0xlbmd0aDogc2hhZG93TGVuZ3RoLFxuICAgICAgICAuLi5jYXN0ZXJPcHRpb25zLFxuICAgICAgICAuLi5mb290cHJpbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkQ2lyY2xlQ2FzdGVyKHtcbiAgICAgICAgLi4uY2FzdGVyT3B0aW9ucyxcbiAgICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTG9vayBmb3Igc2hhZG93cyBmcm9tIGZhciBlbm91Z2ggYXdheSB0byBhdm9pZCBvdXIgb3duIHNoYWRvd1xuICAgIGlmICh0aGlzLmNhc3RlciAmJiBvcHRpb25zLnNoYWRvd0JpYXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdXJmYWNlLnNoYWRvd0JpYXMgPSB0aGlzLmNhc3RlckJpYXModGhpcy5jYXN0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRpc3RhbmNlIHRoYXQgYSBjYXN0ZXIncyBzaGFkb3cgcmVhY2hlcyBiYWNrIHRvd2FyZHMgdGhlIGxpZ2h0XG4gICAqL1xuICBwcml2YXRlIGNhc3RlckJpYXMoY2FzdGVyOiBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXIpOiBudW1iZXIge1xuICAgIGlmIChjYXN0ZXIgaW5zdGFuY2VvZiBTcHJpdGVDYXN0ZXIpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGNhc3Rlci5tYXhTaGFkb3dMZW5ndGggPz8gY2FzdGVyLm1pblNoYWRvd0xlbmd0aDtcblxuICAgICAgcmV0dXJuIGxlbmd0aCAqICgxIC0gY2FzdGVyLm9mZnNldC55KSArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KGNhc3Rlci5zaXplLngsIGNhc3Rlci5zaXplLnkpIC8gMiArIDE7XG4gIH1cblxuICBwcml2YXRlIGZvb3RwcmludChwb3NpdGlvbjogdmVjMiwgc2l6ZTogdmVjMik6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyBzaXplLnkgLSB0aGlzLmZvb3RwcmludEhlaWdodCksXG4gICAgICBzaXplOiB2ZWMyKHNpemUueCwgdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgY3VycmVudCBwb3NpdGlvbiwgc2l6ZSwgYW5kIGltYWdlcyBmcm9tIHRoaXMgYWN0b3IncyBzcHJpdGUsIHRoaXNcbiAgICogaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgc2NlbmUgaXMgcmVuZGVyZWRcbiAgICovXG4gIHB1YmxpYyBzeW5jKCkge1xuICAgIGlmICghdGhpcy5zcHJpdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmcmFtZSA9IEFjdG9yLnNwcml0ZUZyYW1lKHRoaXMuc3ByaXRlKTtcblxuICAgIHRoaXMuc3VyZmFjZS5zZXQoZnJhbWUpO1xuICAgIHRoaXMuY2FzdGVyPy5zZXQodGhpcy5mb290cHJpbnQoZnJhbWUucG9zaXRpb24sIGZyYW1lLnNpemUpKTtcblxuICAgIGlmICh0aGlzLmNhc3RlciBpbnN0YW5jZW9mIFNwcml0ZUNhc3Rlcikge1xuICAgICAgdGhpcy5jYXN0ZXIuaW1hZ2UgPSBmcmFtZS5pbWFnZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGFjdG9yIHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqXG4gICAqIElmIHRoaXMgYWN0b3IgaGFzIGEgc3ByaXRlIHRoZW4gdGhpcyB3aWxsIHNldCB0aGUgc3ByaXRlJ3MgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICAgICAgdGhpcy5zeW5jKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdXJmYWNlLm1vdmVUbyhwb3NpdGlvbik7XG4gICAgdGhpcy5jYXN0ZXI/Lm1vdmVUbyh0aGlzLmZvb3RwcmludChwb3NpdGlvbiwgdGhpcy5zdXJmYWNlLnNpemUpLnBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBhY3RvciBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5zdXJmYWNlLnJlbW92ZSgpO1xuICAgIHRoaXMuY2FzdGVyPy5yZW1vdmUoKTtcbiAgICB0aGlzLmxpZ2h0aW5nLnJlbW92ZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBib3VuZGluZ1JlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgU2NlbmVPYmplY3QsIFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgc2lsaG91ZXR0ZSB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgUmVnaW9uQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFNob3VsZCBzaGFkb3dzIGluY2x1ZGUgdGhlIHJlY3Rhbmd1bGFyIHJlZ2lvbiBvZiB0aGlzIGNhc3Rlcj9cbiAgICovXG4gIGluY2x1ZGVSZWdpb25TaGFkb3c/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSB0aGF0IGNhc3RzIHBvbHlnb25hbCBzaGFkb3dzXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWdpb25DYXN0ZXIgZXh0ZW5kcyBTY2VuZU9iamVjdDxSZWdpb25DYXN0ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBpbmNsdWRlUmVnaW9uU2hhZG93OiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogUmVnaW9uQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGlzIGNhc3RlciBjYW4gYmUgbWVyZ2VkIHdpdGggYW5vdGhlciBjYXN0ZXJcbiAgICovXG4gIHB1YmxpYyBjYW5NZXJnZShvdGhlcjogUmVnaW9uQ2FzdGVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWVyZ2VhYmxlICYmXG4gICAgICBvdGhlci5tZXJnZWFibGUgJiZcbiAgICAgIHRoaXMuaW5jbHVkZVJlZ2lvblNoYWRvdyA9PT0gb3RoZXIuaW5jbHVkZVJlZ2lvblNoYWRvd1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGNhc3RlciB0aGF0IGNvdmVycyB0aGlzIGNhc3RlciBhbmQgYW5vdGhlciBjYXN0ZXJcbiAgICovXG4gIHB1YmxpYyBtZXJnZShvdGhlcjogUmVnaW9uQ2FzdGVyKTogUmVnaW9uQ2FzdGVyIHtcbiAgICByZXR1cm4gbmV3IFJlZ2lvbkNhc3Rlcih0aGlzLmxpZ2h0aW5nLCB7XG4gICAgICAuLi4odGhpcyBhcyBSZWdpb25DYXN0ZXIpLFxuICAgICAgLi4uYm91bmRpbmdSZWN0YW5nbGUodGhpcywgb3RoZXIpLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNwcml0ZUNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgdXNlZCBmb3IgdGhpcyBjYXN0ZXIncyBzaGFkb3csIGl0IHNob3VsZCBiZSBibGFjayB3aXRoIGFuIGFscGhhXG4gICAqIGNoYW5uZWxcbiAgICovXG4gIHNoYWRvdz86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBJZiBgc2hhZG93YCBpc24ndCBzZXQsIHdlJ2xsIHVzZSB0aGUgc2lsaG91ZXR0ZSBvZiB0aGlzIGltYWdlIGluc3RlYWRcbiAgICovXG4gIGltYWdlPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBzaGFkb3cgYmVnaW5zLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBzaXplIG9mIHRoaXMgY2FzdGVyLCB3aGVyZVxuICAgKiAoMCwgMCkgaXMgdGhlIHRvcC1sZWZ0IGNvcm5lciBhbmQgKDEsIDEpIGlzIHRoZSBib3R0b20tcmlnaHQgY29ybmVyXG4gICAqL1xuICBhbmNob3I/OiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgdGhlIHNoYWRvdyBmcm9tIHRoZSBhbmNob3IsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNoYWRvdyBzaXplXG4gICAqL1xuICBvZmZzZXQ/OiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBTaGFkb3cgbGVuZ3RoIHdoZW4gdGhlIGxpZ2h0IGlzIGF0IHRoZSBjZW50ZXIgb2YgdGhpcyBjYXN0ZXJcbiAgICovXG4gIG1pblNoYWRvd0xlbmd0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hhZG93IGxlbmd0aCB3aGVuIHRoaXMgY2FzdGVyIGlzIGF0IHRoZSBlZGdlIG9mIHRoZSBsaWdodCdzIHJhZGl1cywgb3JcbiAgICogbnVsbCB0byB1c2UgdGhlIGxpZ2h0J3MgcmFkaXVzXG4gICAqL1xuICBtYXhTaGFkb3dMZW5ndGg/OiBudW1iZXIgfCBudWxsO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGEgc2hhZG93IGJ5IHJvdGF0aW5nIGFuZCBzdHJldGNoaW5nIGFuIGltYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBTcHJpdGVDYXN0ZXIgZXh0ZW5kcyBTY2VuZU9iamVjdDxTcHJpdGVDYXN0ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBzaGFkb3c6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGltYWdlOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBhbmNob3I6IHZlYzIgPSB2ZWMyKDAuNSwgMC45KTtcbiAgcHVibGljIG9mZnNldDogdmVjMiA9IHZlYzIoMC41LCAwLjkpO1xuICBwdWJsaWMgbWluU2hhZG93TGVuZ3RoOiBudW1iZXIgPSA2NDtcbiAgcHVibGljIG1heFNoYWRvd0xlbmd0aDogbnVtYmVyIHwgbnVsbCA9IDY0O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFNwcml0ZUNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBpbWFnZSBmb3IgdGhpcyBjYXN0ZXIncyBzaGFkb3csIGlmIGl0IGhhcyBvbmVcbiAgICovXG4gIHB1YmxpYyBnZXRTaGFkb3coKTogU2NlbmVJbWFnZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvdyA/PyAodGhpcy5pbWFnZSAmJiBzaWxob3VldHRlKHRoaXMuaW1hZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDaXJjbGVDYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogV2hlcmUgdGhlIHNoYWRvdyBpcyBjZW50ZXJlZCwgYXMgYSBmcmFjdGlvbiBvZiB0aGUgc2l6ZSBvZiB0aGlzIGNhc3RlcixcbiAgICogd2hlcmUgKDAsIDApIGlzIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kICgxLCAxKSBpcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lclxuICAgKi9cbiAgYW5jaG9yPzogdmVjMjtcblxuICAvKipcbiAgICogRGlzdGFuY2UgZnJvbSB0aGUgYW5jaG9yIHRvIHRoZSBzaGFkb3cgd2hlbiB0aGUgbGlnaHQgaXMgYXQgdGhlIGNlbnRlciBvZlxuICAgKiB0aGlzIGNhc3RlclxuICAgKi9cbiAgbWluU2hhZG93RGlzdGFuY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGZyb20gdGhlIGFuY2hvciB0byB0aGUgc2hhZG93IHdoZW4gdGhpcyBjYXN0ZXIgaXMgYXQgdGhlIGVkZ2Ugb2ZcbiAgICogdGhlIGxpZ2h0J3MgcmFkaXVzLCBvciBudWxsIHRvIHVzZSB0aGUgbGlnaHQncyByYWRpdXNcbiAgICovXG4gIG1heFNoYWRvd0Rpc3RhbmNlPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogT3BhY2l0eSBvZiB0aGUgc2hhZG93XG4gICAqL1xuICBhbHBoYT86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhbiBlbGxpcHRpY2FsIHNoYWRvd1xuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8Q2lyY2xlQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgYW5jaG9yOiB2ZWMyID0gdmVjMigwLjUsIDAuOSk7XG4gIHB1YmxpYyBtaW5TaGFkb3dEaXN0YW5jZTogbnVtYmVyID0gNTtcbiAgcHVibGljIG1heFNoYWRvd0Rpc3RhbmNlOiBudW1iZXIgfCBudWxsID0gMjA7XG4gIHB1YmxpYyBhbHBoYTogbnVtYmVyID0gMTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBDaXJjbGVDYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNoYWRvd0Nhc3RlciA9IFJlZ2lvbkNhc3RlciB8IFNwcml0ZUNhc3RlciB8IENpcmNsZUNhc3RlcjtcbiIsImltcG9ydCB7IHBhcnNlQ29sb3IgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yJztcbmltcG9ydCB7IGF0LCBzbW9vdGhzdGVwLCB1bmxlcnAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgY29sb3VyVG9TdHJpbmcsXG4gIFJlY3RhbmdsZSxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbiAgcmVjdGFuZ2xlVG9JbnRlcnZhbCxcbiAgcmVjdGFuZ2xlVmVydGljZXMsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgQ2lyY2xlQ2FzdGVyLCBSZWdpb25DYXN0ZXIsIFNwcml0ZUNhc3RlciB9IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IExpbmUsIFBvbHlnb25WZXJ0aWNlcywgU2VjdG9yMmQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGxpbmVJc0ZhY2luZywgcG9seWdvbiwgc2VjdG9yMmQgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IEhBTEZfUEkgPSBNYXRoLlBJIC8gMjtcblxuZXhwb3J0IHR5cGUgTGlnaHRPcHRpb25zID0ge1xuICAvKipcbiAgICogV29ybGQgcG9zaXRpb24gb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgcG9zaXRpb246IHZlYzI7XG5cbiAgLyoqXG4gICAqIFJhZGl1cyBvZiB0aGlzIGxpZ2h0IGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiB0aGlzIGxpZ2h0XG4gICAqL1xuICBjb2xvdXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmdWxseS1saXQgYXJlYSBhdCB0aGUgY2VudGVyIG9mIHRoaXMgbGlnaHQsIGFzIGEgZnJhY3Rpb25cbiAgICogb2YgdGhlIHJhZGl1c1xuICAgKi9cbiAgY29yZVJhZGl1cz86IG51bWJlcjtcblxuICAvKipcbiAgICogQnJpZ2h0bmVzcyBvZiB0aGlzIGxpZ2h0XG4gICAqL1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhlaWdodCBvZiB0aGlzIGxpZ2h0IGFib3ZlIHRoZSBncm91bmQsIHRoaXMgaXMgdXNlZCBmb3Igc2hhZGluZyBub3JtYWwgbWFwc1xuICAgKiBhbmQgc3BlY3VsYXIgbWFwc1xuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBsaWdodCBjYXN0IHNoYWRvd3M/XG4gICAqL1xuICBjYXN0U2hhZG93cz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgTGlnaHQge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1JBRElVUyA9IDEwMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT0xPVVIgPSAnd2hpdGUnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPUkVfUkFESVVTID0gMC4yO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfQ09SRV9SQURJVVMgPSAwLjk5O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0lOVEVOU0lUWSA9IDE7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSEVJR0hUID0gNDg7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNIQURPV19CVUZGRVIgPSAyMDtcblxuICBwcml2YXRlIGxpZ2h0aW5nU3lzdGVtOiBMaWdodGluZ1N5c3RlbTtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYzI7XG4gIHByaXZhdGUgX3JhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9jb2xvdXI6IHN0cmluZztcbiAgcHVibGljIGNvbG91ck9iamVjdDogQ29sb3VyO1xuICBwcml2YXRlIF9jb3JlUmFkaXVzOiBudW1iZXI7XG4gIHByaXZhdGUgX2ludGVuc2l0eTogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIHB1YmxpYyBjYXN0U2hhZG93czogYm9vbGVhbjtcblxuICBwdWJsaWMgbGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGxpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIC8qKlxuICAgKiBXaGl0ZSB3aGVyZSBsaWdodCByZWFjaGVzIHRoZSBncm91bmQsIGFuZCBibGFjayBpbiB0aGUgc2hhZG93cyBvZiByZWdpb25cbiAgICogY2FzdGVyc1xuICAgKi9cbiAgcHVibGljIHJlZ2lvblNoYWRvd0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgcmVnaW9uU2hhZG93Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIC8qKlxuICAgKiBXaGl0ZSB3aGVyZSBsaWdodCByZWFjaGVzIHRoZSBncm91bmQsIGFuZCBibGFjayBpbiB0aGUgc2hhZG93cyBvZiBzcHJpdGVcbiAgICogYW5kIGNpcmNsZSBjYXN0ZXJzXG4gICAqL1xuICBwdWJsaWMgb2JqZWN0U2hhZG93Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBvYmplY3RTaGFkb3dDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHJpdmF0ZSBkaXJ0eSA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nU3lzdGVtOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogTGlnaHRPcHRpb25zKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbSA9IGxpZ2h0aW5nU3lzdGVtO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KG9wdGlvbnMucG9zaXRpb24pO1xuICAgIHRoaXMuX3JhZGl1cyA9IG9wdGlvbnMucmFkaXVzID8/IExpZ2h0LkRFRkFVTFRfUkFESVVTO1xuICAgIHRoaXMuX2NvbG91ciA9IG9wdGlvbnMuY29sb3VyID8/IExpZ2h0LkRFRkFVTFRfQ09MT1VSO1xuICAgIHRoaXMuX2NvcmVSYWRpdXMgPSBvcHRpb25zLmNvcmVSYWRpdXMgPz8gTGlnaHQuREVGQVVMVF9DT1JFX1JBRElVUztcbiAgICB0aGlzLl9pbnRlbnNpdHkgPSBvcHRpb25zLmludGVuc2l0eSA/PyBMaWdodC5ERUZBVUxUX0lOVEVOU0lUWTtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ID8/IExpZ2h0LkRFRkFVTFRfSEVJR0hUO1xuICAgIHRoaXMuY2FzdFNoYWRvd3MgPSBvcHRpb25zLmNhc3RTaGFkb3dzID8/IHRydWU7XG4gICAgdGhpcy5jb2xvdXJPYmplY3QgPSBwYXJzZUNvbG9yKHRoaXMuX2NvbG91cik7XG5cbiAgICB0aGlzLmxpZ2h0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dCA9IHRoaXMubGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLnJlZ2lvblNoYWRvd0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMucmVnaW9uU2hhZG93Q29udGV4dCA9IHRoaXMucmVnaW9uU2hhZG93Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy5vYmplY3RTaGFkb3dDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQgPSB0aGlzLm9iamVjdFNoYWRvd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIC8qKlxuICAgKiBCb3VuZGluZyBib3ggZm9yIHRoaXMgbGlnaHQsIGluY2x1ZGluZyB0aGUgb2Zmc2V0IHdhbGwgbGlnaHRtYXBzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGJvdW5kcygpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IHdhbGxMaWdodGluZ1lPZmZzZXQgPSB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldDtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLl9yYWRpdXMgKyBNYXRoLm1pbih3YWxsTGlnaHRpbmdZT2Zmc2V0LCAwKVxuICAgICAgKSxcbiAgICAgIHNpemU6IHZlYzIoXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIsXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIgKyBNYXRoLmFicyh3YWxsTGlnaHRpbmdZT2Zmc2V0KVxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCByYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3JhZGl1cykge1xuICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICB9XG5cbiAgcHVibGljIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29sb3VyKSB7XG4gICAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih2YWx1ZSk7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvcmVSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVSYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvcmVSYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29yZVJhZGl1cykge1xuICAgICAgdGhpcy5fY29yZVJhZGl1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVuc2l0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2ludGVuc2l0eSkge1xuICAgICAgdGhpcy5faW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGxpZ2h0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc29tZSBvZiB0aGUgb3B0aW9ucyBmb3IgdGhpcyBsaWdodFxuICAgKi9cbiAgcHVibGljIHNldChvcHRpb25zOiBQYXJ0aWFsPExpZ2h0T3B0aW9ucz4pIHtcbiAgICBjb25zdCB7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIHJhZGl1cyxcbiAgICAgIGNvbG91cixcbiAgICAgIGNvcmVSYWRpdXMsXG4gICAgICBpbnRlbnNpdHksXG4gICAgICBoZWlnaHQsXG4gICAgICBjYXN0U2hhZG93cyxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbiA/PyB0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyA/PyB0aGlzLnJhZGl1cztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91ciA/PyB0aGlzLmNvbG91cjtcbiAgICB0aGlzLmNvcmVSYWRpdXMgPSBjb3JlUmFkaXVzID8/IHRoaXMuY29yZVJhZGl1cztcbiAgICB0aGlzLmludGVuc2l0eSA9IGludGVuc2l0eSA/PyB0aGlzLmludGVuc2l0eTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCA/PyB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmNhc3RTaGFkb3dzID0gY2FzdFNoYWRvd3MgPz8gdGhpcy5jYXN0U2hhZG93cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBsaWdodCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5yZW1vdmUodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShcbiAgICByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXSxcbiAgICBzcHJpdGVDYXN0ZXJzOiBTcHJpdGVDYXN0ZXJbXSxcbiAgICBjaXJjbGVDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXVxuICApIHtcbiAgICAvLyBJZiB0aGUgbGlnaHQgc2V0dGluZ3MgaGF2ZSBjaGFuZ2VkLCB3ZSBuZWVkIHRvIHJlZHJhdyB0aGUgYmFzZSBsaWdodG1hcFxuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLnByZXBhcmVMaWdodE1hcCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRTaGFkb3dDb250ZXh0KHRoaXMucmVnaW9uU2hhZG93Q29udGV4dCk7XG4gICAgdGhpcy5yZXNldFNoYWRvd0NvbnRleHQodGhpcy5vYmplY3RTaGFkb3dDb250ZXh0KTtcblxuICAgIGlmICh0aGlzLmNhc3RTaGFkb3dzKSB7XG4gICAgICBjb25zdCBsaWdodFJlY3RhbmdsZSA9IHRoaXMuYm91bmRzO1xuXG4gICAgICB0aGlzLnByZXBhcmVSZWdpb25TaGFkb3dzKGxpZ2h0UmVjdGFuZ2xlLCByZWdpb25DYXN0ZXJzKTtcbiAgICAgIHRoaXMucHJlcGFyZVNwcml0ZVNoYWRvd3MobGlnaHRSZWN0YW5nbGUsIHNwcml0ZUNhc3RlcnMpO1xuICAgICAgdGhpcy5wcmVwYXJlQ2lyY2xlU2hhZG93cyhsaWdodFJlY3RhbmdsZSwgY2lyY2xlQ2FzdGVycyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNoYWRvdyBjYW52YXMgbWF0Y2hlcyB0aGlzIGxpZ2h0J3Mgc2l6ZSwgYW5kIGZpbGwgaXQgd2l0aCB3aGl0ZVxuICAgKiBzbyB0aGF0IG5vdGhpbmcgaXMgaW4gc2hhZG93XG4gICAqL1xuICBwcml2YXRlIHJlc2V0U2hhZG93Q29udGV4dChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb25zdCBzaXplID0gTWF0aC5mbG9vcih0aGlzLl9yYWRpdXMgKiAyKTtcbiAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHNpemUgfHwgY29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBzaXplKSB7XG4gICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGNvbnRleHQuY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPVxuICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUxpZ2h0TWFwKCkge1xuICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGgsXG4gICAgICB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBncmFkaWVudCA9IHRoaXMubGlnaHRDb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzICogTWF0aC5taW4odGhpcy5fY29yZVJhZGl1cywgTGlnaHQuTUFYX0NPUkVfUkFESVVTKSxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1c1xuICAgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxuICAgICAgMCxcbiAgICAgIGNvbG91clRvU3RyaW5nKHtcbiAgICAgICAgLi4udGhpcy5jb2xvdXJPYmplY3QsXG4gICAgICAgIHI6IHRoaXMuY29sb3VyT2JqZWN0LnIgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICAgIGc6IHRoaXMuY29sb3VyT2JqZWN0LmcgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICAgIGI6IHRoaXMuY29sb3VyT2JqZWN0LmIgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICB9KVxuICAgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdibGFjaycpO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgdGhpcy5saWdodENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5saWdodENvbnRleHQuYXJjKFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkgKiAyXG4gICAgKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsKCk7XG5cbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuXG4gIHByaXZhdGUgcHJlcGFyZVJlZ2lvblNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXVxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5yZWdpb25TaGFkb3dDb250ZXh0O1xuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyhjb250ZXh0KTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIC10aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9yYWRpdXMsXG4gICAgICAtdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5fcmFkaXVzXG4gICAgKTtcblxuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIHJlZ2lvbkNhc3RlcnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlcikpIHtcbiAgICAgICAgcG9seWdvbihcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIC4uLnRoaXMucHJlcGFyZVJlZ2lvblNoYWRvdyhjYXN0ZXIsIGNhc3Rlci5pbmNsdWRlUmVnaW9uU2hhZG93KVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNwcml0ZVNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBzcHJpdGVDYXN0ZXJzOiBTcHJpdGVDYXN0ZXJbXVxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5vYmplY3RTaGFkb3dDb250ZXh0O1xuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcblxuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIHNwcml0ZUNhc3RlcnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlcikpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93U3ByaXRlID0gY2FzdGVyLmdldFNoYWRvdygpO1xuXG4gICAgICAgIC8vIElmIHRoZSBzaGFkb3cgc3ByaXRlIGlzIG1pc3NpbmcgZm9yIHRoaXMgY2FzdGVyIHRoZW4gaXQgZG9lc24ndFxuICAgICAgICAvLyBjYXN0IGEgc2hhZG93XG4gICAgICAgIGlmICghc2hhZG93U3ByaXRlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGFkb3dPcmlnaW4gPSB2ZWMyLmFkZChcbiAgICAgICAgICBjYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgdmVjMihjYXN0ZXIuc2l6ZS54ICogY2FzdGVyLmFuY2hvci54LCBjYXN0ZXIuc2l6ZS55ICogY2FzdGVyLmFuY2hvci55KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dMZW5ndGggPSBzbW9vdGhzdGVwKFxuICAgICAgICAgIGNhc3Rlci5taW5TaGFkb3dMZW5ndGgsXG4gICAgICAgICAgY2FzdGVyLm1heFNoYWRvd0xlbmd0aCA/PyB0aGlzLnJhZGl1cyxcbiAgICAgICAgICB1bmxlcnAoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICB2ZWMyLmxlbih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RWRnZSA9IHZlYzIubXVsKFxuICAgICAgICAgIHZlYzIubm9yKHZlYzIuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIHNoYWRvd0xlbmd0aFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dFZGdlTGVuZ3RoID0gdmVjMi5sZW4oc2hhZG93RWRnZSk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0FuZ2xlID0gdmVjMi5yYWQoc2hhZG93RWRnZSkgKyBIQUxGX1BJO1xuXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueCAtIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueSAtIHRoaXMucG9zaXRpb24ueVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LnJvdGF0ZShzaGFkb3dBbmdsZSk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgIHNoYWRvd1Nwcml0ZSxcbiAgICAgICAgICAtY2FzdGVyLnNpemUueCAqIGNhc3Rlci5vZmZzZXQueCxcbiAgICAgICAgICAtc2hhZG93RWRnZUxlbmd0aCAqIGNhc3Rlci5vZmZzZXQueSxcbiAgICAgICAgICBjYXN0ZXIuc2l6ZS54LFxuICAgICAgICAgIHNoYWRvd0VkZ2VMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVDaXJjbGVTaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgY2lyY2xlQ2FzdGVyczogQ2lyY2xlQ2FzdGVyW11cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMub2JqZWN0U2hhZG93Q29udGV4dDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3MoY29udGV4dCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5fcmFkaXVzLCB0aGlzLl9yYWRpdXMpO1xuXG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2YgY2lyY2xlQ2FzdGVycykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgY2FzdGVyKSkge1xuICAgICAgICBjb25zdCBzaGFkb3dPcmlnaW4gPSB2ZWMyLmFkZChcbiAgICAgICAgICBjYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgdmVjMihjYXN0ZXIuc2l6ZS54ICogY2FzdGVyLmFuY2hvci54LCBjYXN0ZXIuc2l6ZS55ICogY2FzdGVyLmFuY2hvci55KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dEaXN0YW5jZSA9IHNtb290aHN0ZXAoXG4gICAgICAgICAgY2FzdGVyLm1pblNoYWRvd0Rpc3RhbmNlLFxuICAgICAgICAgIGNhc3Rlci5tYXhTaGFkb3dEaXN0YW5jZSA/PyB0aGlzLnJhZGl1cyxcbiAgICAgICAgICB1bmxlcnAoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICB2ZWMyLmxlbih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93UG9zaXRpb24gPSB2ZWMyLm11bChcbiAgICAgICAgICB2ZWMyLm5vcih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKSxcbiAgICAgICAgICBzaGFkb3dEaXN0YW5jZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dTaXplID0gdmVjMi5tdWwoY2FzdGVyLnNpemUsIDAuNSk7XG5cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBjYXN0ZXIuYWxwaGE7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgICAgIHNoYWRvd09yaWdpbi54IC0gdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgIHNoYWRvd09yaWdpbi55IC0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuZWxsaXBzZShcbiAgICAgICAgICBzaGFkb3dQb3NpdGlvbi54LFxuICAgICAgICAgIHNoYWRvd1Bvc2l0aW9uLnksXG4gICAgICAgICAgc2hhZG93U2l6ZS54LFxuICAgICAgICAgIHNoYWRvd1NpemUueSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlUmVnaW9uU2hhZG93KFxuICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGluY2x1ZGVDYXN0ZXJSZWdpb246IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQb2x5Z29uVmVydGljZXMge1xuICAgIGNvbnN0IGxpZ2h0UG9zaXRpb24gPSB2ZWMyLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICBjb25zdCBsaWdodFJhZGl1cyA9IHRoaXMuX3JhZGl1cztcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlKTtcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcyA9IHJlY3RhbmdsZVZlcnRpY2VzKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93RWRnZXM6IExpbmVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBhdChzaGFkb3dDYXN0ZXJWZXJ0aWNlcywgaSAtIDEpO1xuICAgICAgY29uc3QgY3VycmVudCA9IHNoYWRvd0Nhc3RlclZlcnRpY2VzW2ldO1xuXG4gICAgICBpZiAoIWxpbmVJc0ZhY2luZyh7IHN0YXJ0OiBwcmV2aW91cywgZW5kOiBjdXJyZW50IH0sIHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSB2ZWMyLnN1YihwcmV2aW91cywgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHZlcnRleDIgPSB2ZWMyLnN1YihjdXJyZW50LCBsaWdodFBvc2l0aW9uKTtcbiAgICAgICAgc2hhZG93RWRnZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogcHJldmlvdXMsXG4gICAgICAgICAgICBlbmQ6IHZlYzIuYWRkKFxuICAgICAgICAgICAgICBwcmV2aW91cyxcbiAgICAgICAgICAgICAgdmVjMi5tdWwoXG4gICAgICAgICAgICAgICAgdmVjMi5ub3IodmVydGV4MSksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSIC0gdmVjMi5sZW4odmVydGV4MSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogY3VycmVudCxcbiAgICAgICAgICAgIGVuZDogdmVjMi5hZGQoXG4gICAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICAgIHZlYzIubXVsKFxuICAgICAgICAgICAgICAgIHZlYzIubm9yKHZlcnRleDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYzIubGVuKHZlcnRleDIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGFkb3dQb2x5Z29uOiBQb2x5Z29uVmVydGljZXMgPSBbXTtcbiAgICBzd2l0Y2ggKHNlY3RvcjJkKHRoaXMucG9zaXRpb24sIHNoYWRvd0Nhc3RlckludGVydmFsKSkge1xuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BMZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbixcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzJdLmVuZCwgc2hhZG93RWRnZXNbMl0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1sxXS5lbmQsIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMV0uZW5kLCBzaGFkb3dFZGdlc1sxXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BSaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHZlYzIoXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi54ICsgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUueCxcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMV0uZW5kLngsIHNoYWRvd0VkZ2VzWzJdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLmVuZFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5JbnNpZGU6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1szXS5lbmQsIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s0XS5lbmQsIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b21MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1szXS5lbmQueCwgc2hhZG93RWRnZXNbMF0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICB2ZWMyKFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZS55XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbM10uZW5kLngsIHNoYWRvd0VkZ2VzWzBdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbTpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHZlYzIuYWRkKHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbiwgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkb3dQb2x5Z29uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBmbG9hdEVxdWFscyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBHbENvbnRleHQsXG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIGxlcnBDb2xvdXIsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIFNjZW5lQ2FtZXJhLFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEFjdG9yLCBBY3Rvck9wdGlvbnMsIFNwcml0ZUFjdG9yT3B0aW9ucyB9IGZyb20gJy4vQWN0b3InO1xuaW1wb3J0IHtcbiAgQ2lyY2xlQ2FzdGVyLFxuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBSZWdpb25DYXN0ZXIsXG4gIFJlZ2lvbkNhc3Rlck9wdGlvbnMsXG4gIFNwcml0ZUNhc3RlcixcbiAgU3ByaXRlQ2FzdGVyT3B0aW9ucyxcbn0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHsgTGlnaHQsIExpZ2h0T3B0aW9ucyB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuL21lcmdlJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0IH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5pbXBvcnQgeyBTaGFkZXJQYXNzLCBTaGFkZXJTdXJmYWNlIH0gZnJvbSAnLi9TaGFkZXJQYXNzJztcbmltcG9ydCB7XG4gIEdyb3VuZFJlY2VpdmVyLFxuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIFN1cmZhY2UsXG4gIFdhbGxSZWNlaXZlcixcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9TdXJmYWNlJztcbmltcG9ydCB7IFdhbGwsIFdhbGxPcHRpb25zIH0gZnJvbSAnLi9XYWxsJztcblxuZXhwb3J0IHR5cGUgTGlnaHRpbmdTeXN0ZW1PcHRpb25zID0ge1xuICAvKipcbiAgICogU2hvdWxkIGxpZ2h0aW5nIGJlIGFwcGxpZWQgdG8gdGhlIHNjZW5lP1xuICAgKlxuICAgKiBJZiB0aGlzIGlzIGZhbHNlIHRoZW4gdGhlIHNjZW5lIHdpbGwgYmUgZHJhd24gd2l0aG91dCBhbnkgbGlnaHRpbmcsIGFuZFxuICAgKiBXZWJHTCB3b24ndCBiZSB1c2VkXG4gICAqL1xuICBsaWdodGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3VsZCBpbWFnZSBzbW9vdGhpbmcgYmUgZW5hYmxlZD9cbiAgICpcbiAgICogU2V0IHRoaXMgdG8gZmFsc2UgZm9yIHBpeGVsIGFydCBzdHlsZVxuICAgKi9cbiAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgc29mdCBzaGFkb3dzIGJlIGVuYWJsZWQ/XG4gICAqXG4gICAqIFRoaXMgd2lsbCBvbmx5IGFwcGx5IGlmIHNvZnRTaGFkb3dzQW1vdW50IGlzID4gMFxuICAgKi9cbiAgc29mdFNoYWRvd3NFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2Ygc29mdCBzaGFkb3dzIHRvIGFwcGx5XG4gICAqXG4gICAqIFNldCB0aGlzIHRvIDAgdG8gZGlzYWJsZSBzb2Z0IHNoYWRvd3NcbiAgICovXG4gIHNvZnRTaGFkb3dzQW1vdW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBub3JtYWwgbWFwcyBhbmQgc3BlY3VsYXIgbWFwcyBiZSB1c2VkP1xuICAgKi9cbiAgc3VyZmFjZU1hcHNFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTdHJlbmd0aCBvZiBoaWdobGlnaHRzIGZyb20gbm9ybWFsIG1hcHNcbiAgICovXG4gIHNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0cmVuZ3RoIG9mIHNoYWRpbmcgZnJvbSBub3JtYWwgbWFwc1xuICAgKi9cbiAgc2hhZGVyU2hhZG93U3RyZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogU3RyZW5ndGggb2Ygc3BlY3VsYXIgaGlnaGxpZ2h0c1xuICAgKi9cbiAgc2hhZGVyU3BlY3VsYXJTdHJlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHNwZWN1bGFyIGhpZ2hsaWdodHMsIGxhcmdlciBudW1iZXJzIG1ha2Ugc21hbGxlciBoaWdobGlnaHRzXG4gICAqL1xuICBzaGFkZXJTaGluaW5lc3M6IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGZhciB0aGUgY2FtZXJhIGlzIHRpbHRlZCBhd2F5IGZyb20gbG9va2luZyBzdHJhaWdodCBkb3duLCB0aGlzIG1vdmVzXG4gICAqIHNwZWN1bGFyIGhpZ2hsaWdodHMgdG93YXJkcyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cbiAgICovXG4gIHNoYWRlclZpZXdUaWx0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFF1YW50aXplIHNoYWRpbmcgaW50byBiYW5kcyBvZiB0aGlzIHNpemUsIHNldCB0aGlzIHRvIDAgZm9yIHNtb290aCBzaGFkaW5nXG4gICAqL1xuICBzaGFkZXJCYW5kaW5nOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiBhbWJpZW50IChnbG9iYWwpIGxpZ2h0XG4gICAqL1xuICBhbWJpZW50TGlnaHRDb2xvdXI6IHN0cmluZztcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHQgd2hlbiBmYWNpbmcgYXdheSBmcm9tIHRoZSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiBhbWJpZW50IChnbG9iYWwpIGxpZ2h0IHdoZW4gZmFjaW5nIHRvd2FyZHMgdGhlIGxpZ2h0XG4gICAqL1xuICBhbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXI6IHN0cmluZztcblxuICAvKipcbiAgICogRGlyZWN0aW9uIG9mIGFtYmllbnQgbGlnaHQgaW4gcmFkaWFuc1xuICAgKi9cbiAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZlcnRpY2FsIG9mZnNldCBmb3Igd2FsbCBsaWdodGluZ1xuICAgKi9cbiAgd2FsbExpZ2h0aW5nWU9mZnNldDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSBhYm92ZSBib3R0b20gZWRnZSBvZiB3YWxsIHNoYWRvdyByZWNlaXZlcnMgYmVmb3JlIGxpZ2h0IGlzXG4gICAqIHRvdGFsbHkgY3V0IG9mZlxuICAgKi9cbiAgd2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2U6IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGZhciBzcHJpdGUgYW5kIGNpcmNsZSBzaGFkb3dzIGNsaW1iIHdhbGxzLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsZW5ndGhcbiAgICogb2YgdGhlIHNoYWRvdyB0aGF0IHJlYWNoZXMgdGhlIHdhbGxcbiAgICovXG4gIHdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjbGFzcyBMaWdodGluZ1N5c3RlbSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfT1BUSU9OUzogTGlnaHRpbmdTeXN0ZW1PcHRpb25zID0ge1xuICAgIGxpZ2h0aW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgc29mdFNoYWRvd3NFbmFibGVkOiBmYWxzZSxcbiAgICBzb2Z0U2hhZG93c0Ftb3VudDogMixcbiAgICBzdXJmYWNlTWFwc0VuYWJsZWQ6IHRydWUsXG4gICAgc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGg6IDAuNSxcbiAgICBzaGFkZXJTaGFkb3dTdHJlbmd0aDogMC41LFxuICAgIHNoYWRlclNwZWN1bGFyU3RyZW5ndGg6IDEsXG4gICAgc2hhZGVyU2hpbmluZXNzOiAxNixcbiAgICBzaGFkZXJWaWV3VGlsdDogMC41LFxuICAgIHNoYWRlckJhbmRpbmc6IDAuMSxcbiAgICBhbWJpZW50TGlnaHRDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHREaXJlY3Rpb246IDAsXG4gICAgd2FsbExpZ2h0aW5nWU9mZnNldDogLTMwLFxuICAgIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiAyMCxcbiAgICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiAwLjc1LFxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUNvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjb21wYXJlU3VyZmFjZXMoYTogU3VyZmFjZTxhbnk+LCBiOiBTdXJmYWNlPGFueT4pOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICBhLnpJbmRleCAtIGIuekluZGV4IHx8IGEucG9zaXRpb24ueSArIGEuc2l6ZS55IC0gKGIucG9zaXRpb24ueSArIGIuc2l6ZS55KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb3B0aW9uczogTGlnaHRpbmdTeXN0ZW1PcHRpb25zO1xuXG4gIHB1YmxpYyBsaWdodHM6IExpZ2h0W10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIG1vc3QgcmVjZW50bHkgcmVuZGVyZWQgc2NyZWVuXG4gICAqL1xuICBwdWJsaWMgc2NyZWVuOiB2ZWMyID0gdmVjMigpO1xuXG4gIHByaXZhdGUgZ3JvdW5kUmVjZWl2ZXJzOiBHcm91bmRSZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgd2FsbFJlY2VpdmVyczogV2FsbFJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIHNwcml0ZUNhc3RlcnM6IFNwcml0ZUNhc3RlcltdID0gW107XG4gIHByaXZhdGUgY2lyY2xlQ2FzdGVyczogQ2lyY2xlQ2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBhY3RvcnM6IEFjdG9yW10gPSBbXTtcblxuICBwcml2YXRlIGxpZ2h0TWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIGxpZ2h0TWFwQ2FudmFzID0gdGhpcy5saWdodE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc3BlY3VsYXJMaWdodE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzcGVjdWxhckxpZ2h0TWFwQ2FudmFzID0gdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzY2VuZU5vcm1hbE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzY2VuZU5vcm1hbE1hcENhbnZhcyA9IHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNjZW5lU3BlY3VsYXJNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc2NlbmVTcGVjdWxhck1hcENhbnZhcyA9IHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgZ2xDb250ZXh0OiBHbENvbnRleHQgfCBudWxsO1xuICBwcml2YXRlIHNoYWRlclBhc3M6IFNoYWRlclBhc3MgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzcGVjdWxhclZpc2libGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogYGdsQ29udGV4dGAgbGV0cyB0aGUgbGlnaHRpbmcgc3lzdGVtIHNoYXJlIGEgV2ViR0wgY29udGV4dCB3aXRoIG90aGVyXG4gICAqIHN5c3RlbXMsIG90aGVyd2lzZSBpdCB3aWxsIGNyZWF0ZSBpdHMgb3duXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8TGlnaHRpbmdTeXN0ZW1PcHRpb25zPixcbiAgICBnbENvbnRleHQ/OiBHbENvbnRleHRcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgTGlnaHRpbmdTeXN0ZW0uREVGQVVMVF9PUFRJT05TLFxuICAgICAgb3B0aW9ucyA/PyB7fVxuICAgICk7XG4gICAgdGhpcy5nbENvbnRleHQgPSBnbENvbnRleHQgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gYXJlYSBvZiBncm91bmQgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZEdyb3VuZChvcHRpb25zOiBHcm91bmRSZWNlaXZlck9wdGlvbnMpOiBHcm91bmRSZWNlaXZlciB7XG4gICAgY29uc3QgZ3JvdW5kID0gbmV3IEdyb3VuZFJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLnB1c2goZ3JvdW5kKTtcblxuICAgIHJldHVybiBncm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgc29saWQgd2FsbCwgbWFkZSBmcm9tIGEgbGl0IGZyb250IGZhY2UsIGFuIHVubGl0IHRvcCwgYW5kIGEgZm9vdHByaW50XG4gICAqIHRoYXQgY2FzdHMgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZFdhbGwob3B0aW9uczogV2FsbE9wdGlvbnMpOiBXYWxsIHtcbiAgICByZXR1cm4gbmV3IFdhbGwodGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbW92aW5nIG9iamVjdCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBjYXN0cyBhIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZEFjdG9yKG9wdGlvbnM6IEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9ucyk6IEFjdG9yIHtcbiAgICBjb25zdCBhY3RvciA9IG5ldyBBY3Rvcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmFjdG9ycy5wdXNoKGFjdG9yKTtcblxuICAgIHJldHVybiBhY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaWdodFxuICAgKi9cbiAgcHVibGljIGFkZExpZ2h0KG9wdGlvbnM6IExpZ2h0T3B0aW9ucyk6IExpZ2h0IHtcbiAgICBjb25zdCBsaWdodCA9IG5ldyBMaWdodCh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmxpZ2h0cy5wdXNoKGxpZ2h0KTtcblxuICAgIHJldHVybiBsaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgb3Igc3ByaXRlIHRoYXQgcmVjZWl2ZXMgd2FsbCBzaGFkb3dzXG4gICAqXG4gICAqIFRoaXMgaXMgd2hhdCBgYWRkV2FsbCgpYCBhbmQgYGFkZEFjdG9yKClgIHVzZSB0byBjcmVhdGUgdGhlaXIgc3VyZmFjZXNcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsUmVjZWl2ZXIob3B0aW9uczogV2FsbFJlY2VpdmVyT3B0aW9ucyk6IFdhbGxSZWNlaXZlciB7XG4gICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsUmVjZWl2ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLnB1c2god2FsbCk7XG5cbiAgICByZXR1cm4gd2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBwb2x5Z29uYWwgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZFJlZ2lvbkNhc3RlcihvcHRpb25zOiBSZWdpb25DYXN0ZXJPcHRpb25zKTogUmVnaW9uQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgUmVnaW9uQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMucmVnaW9uQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGEgcm90YXRlZCBhbmQgc3RyZXRjaGVkIGltYWdlIGFzIGEgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkU3ByaXRlQ2FzdGVyKG9wdGlvbnM6IFNwcml0ZUNhc3Rlck9wdGlvbnMpOiBTcHJpdGVDYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBTcHJpdGVDYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5zcHJpdGVDYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYW4gZWxsaXB0aWNhbCBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRDaXJjbGVDYXN0ZXIob3B0aW9uczogQ2lyY2xlQ2FzdGVyT3B0aW9ucyk6IENpcmNsZUNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IENpcmNsZUNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmNpcmNsZUNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gb2JqZWN0IG9yIGxpZ2h0IGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZShvYmplY3Q6IFNjZW5lT2JqZWN0PGFueT4gfCBMaWdodCB8IEFjdG9yKSB7XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIExpZ2h0KSB7XG4gICAgICB0aGlzLmxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PiBsaWdodCAhPT0gb2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgQWN0b3IpIHtcbiAgICAgIHRoaXMuYWN0b3JzID0gdGhpcy5hY3RvcnMuZmlsdGVyKGFjdG9yID0+IGFjdG9yICE9PSBvYmplY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzID0gdGhpcy5ncm91bmRSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSB0aGlzLndhbGxSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLnJlZ2lvbkNhc3RlcnMgPSB0aGlzLnJlZ2lvbkNhc3RlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLnNwcml0ZUNhc3RlcnMgPSB0aGlzLnNwcml0ZUNhc3RlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLmNpcmNsZUNhc3RlcnMgPSB0aGlzLmNpcmNsZUNhc3RlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSB3YWxsIHJlY2VpdmVycyBhbmQgcmVnaW9uIGNhc3RlcnMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlclxuICAgKiBhbmQgcGVyZmVjdGx5IGNvbm5lY3RlZCBvbiBvbmUgc2lkZSwgc28gdGhhdCB0aGVyZSBhcmUgZmV3ZXIgdG8gcHJvY2Vzc1xuICAgKlxuICAgKiBNZXJnZWQgb2JqZWN0cyBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW0gYW5kIGNhbid0IGJlIG1vdmVkXG4gICAqIGFmdGVyd2FyZHMsIHNvIHRoaXMgaXMgaW50ZW5kZWQgZm9yIGxldmVsIGdlb21ldHJ5LiBTZXQgYG1lcmdlYWJsZWAgdG9cbiAgICogZmFsc2Ugb24gYW4gb2JqZWN0IHRvIGV4Y2x1ZGUgaXRcbiAgICpcbiAgICogYG9uTWVyZ2VgIGlzIGNhbGxlZCBlYWNoIHRpbWUgMiBvYmplY3RzIGFyZSByZXBsYWNlZCB3aXRoIGEgc2luZ2xlIG9iamVjdC5cbiAgICogSWYgdGhlIG9iamVjdHMgd2VyZSBkdXBsaWNhdGVzLCB0aGUgbWVyZ2VkIG9iamVjdCBpcyB0aGUgZmlyc3Qgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgb3B0aW1pc2UoXG4gICAgb25NZXJnZT86IChcbiAgICAgIG1lcmdlZDogV2FsbFJlY2VpdmVyIHwgUmVnaW9uQ2FzdGVyLFxuICAgICAgYTogV2FsbFJlY2VpdmVyIHwgUmVnaW9uQ2FzdGVyLFxuICAgICAgYjogV2FsbFJlY2VpdmVyIHwgUmVnaW9uQ2FzdGVyXG4gICAgKSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMud2FsbFJlY2VpdmVycyA9IG1lcmdlPFdhbGxSZWNlaXZlcj4odGhpcy53YWxsUmVjZWl2ZXJzLCBvbk1lcmdlKTtcbiAgICB0aGlzLnJlZ2lvbkNhc3RlcnMgPSBtZXJnZTxSZWdpb25DYXN0ZXI+KHRoaXMucmVnaW9uQ2FzdGVycywgb25NZXJnZSk7XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgYSBXZWJHTCBjb250ZXh0IHdpdGggb3RoZXIgc3lzdGVtcywgdGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYmVmb3JlXG4gICAqIHRoZSBmaXJzdCByZW5kZXIgYW5kIGRvZXMgbm90aGluZyBpZiBhIGNvbnRleHQgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgICovXG4gIHB1YmxpYyB1c2VHbENvbnRleHQoZ2xDb250ZXh0OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmdsQ29udGV4dCA/Pz0gZ2xDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hhZGVyIHBhc3MsIGlmIGl0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwcml2YXRlIGdldFNoYWRlclBhc3MoKTogU2hhZGVyUGFzcyB8IG51bGwge1xuICAgIHRoaXMuc2hhZGVyUGFzcyA/Pz0gbmV3IFNoYWRlclBhc3ModGhpcy5nbENvbnRleHQgPz8gbmV3IEdsQ29udGV4dCgpKTtcblxuICAgIHJldHVybiB0aGlzLnNoYWRlclBhc3MuYXZhaWxhYmxlID8gdGhpcy5zaGFkZXJQYXNzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzY3JlZW4tc2l6ZWQgY2FudmFzIG1hdGNoZXMgdGhlIHNjcmVlbiBzaXplIGFuZCBjbGVhciBpdFxuICAgKi9cbiAgcHJpdmF0ZSByZXNldENvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gdGhpcy5zY3JlZW4ueCB8fCBjYW52YXMuaGVpZ2h0ICE9PSB0aGlzLnNjcmVlbi55KSB7XG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLnNjcmVlbi54O1xuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuc2NyZWVuLnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIGxpdCBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKlxuICAgKiBJZiBgZHJhd1NjZW5lYCBpcyBwcm92aWRlZCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIHRvIGRyYXcgdGhlIHNjZW5lIHdpdGhcbiAgICogdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZCwgb3RoZXJ3aXNlIHdlJ2xsIGRyYXcgYWxsIG9mIHRoZSBzdXJmYWNlc1xuICAgKiB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBjYW1lcmE6IFNjZW5lQ2FtZXJhLFxuICAgIGRyYXdTY2VuZT86IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWRcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gICAgaWYgKGRyYXdTY2VuZSkge1xuICAgICAgZHJhd1NjZW5lKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdTdXJmYWNlcyhjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLnByZXBhcmUoY2FtZXJhLCB2ZWMyKGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpKTtcbiAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhbGwgb2YgdGhlIHN1cmZhY2VzIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyBkcmF3U3VyZmFjZXMoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3R3JvdW5kKGNvbnRleHQpO1xuICAgIHRoaXMuZHJhd1dhbGxzKGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIGdyb3VuZCwgdGhpcyBpcyB0aGUgcGFydCBvZiB0aGUgc2NlbmUgdGhhdCdzIHVuZGVybmVhdGggZXZlcnl0aGluZ1xuICAgKiBlbHNlXG4gICAqL1xuICBwdWJsaWMgZHJhd0dyb3VuZChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4gZ3JvdW5kLmRyYXcoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHdhbGxzIGFuZCBhY3RvcnMgdGhhdCBzdGFuZCBvbiB0aGUgZ3JvdW5kXG4gICAqL1xuICBwdWJsaWMgZHJhd1dhbGxzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMudXBkYXRlU3VyZmFjZXMoKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZHJhdyhjb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHN1cmZhY2VzIGFyZSB1cCB0byBkYXRlIGFuZCBpbiBkcmF3aW5nIG9yZGVyLCBhY3RvcnMgY29tZSBmaXJzdFxuICAgKiBiZWNhdXNlIG1vdmluZyBhbiBhY3RvciBjYW4gY2hhbmdlIHRoZSBvcmRlclxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVTdXJmYWNlcygpIHtcbiAgICB0aGlzLmFjdG9ycy5mb3JFYWNoKGFjdG9yID0+IGFjdG9yLnN5bmMoKSk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuc29ydChMaWdodGluZ1N5c3RlbS5jb21wYXJlU3VyZmFjZXMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5zb3J0KExpZ2h0aW5nU3lzdGVtLmNvbXBhcmVTdXJmYWNlcyk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbGlnaHRtYXBzIGZvciByZW5kZXJpbmdcbiAgICpcbiAgICogSWYgV2ViR0wgaXNuJ3QgYXZhaWxhYmxlIHRoZW4gbGlnaHRtYXBzIGFyZSBsZWZ0IGFzIHRoZXkgYXJlLCBzbyB0aGUgc2NlbmVcbiAgICoga2VlcHMgaXRzIGxhc3QgbGlnaHRpbmcgd2hlbiB0aGUgY29udGV4dCBpcyBsb3N0IGFuZCB0aGVuIHJlc3RvcmVkXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZShjYW1lcmE6IFNjZW5lQ2FtZXJhLCBzY3JlZW46IHZlYzIpIHtcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5saWdodGluZ0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZXJQYXNzID0gdGhpcy5nZXRTaGFkZXJQYXNzKCk7XG4gICAgaWYgKCFzaGFkZXJQYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhUmVjdGFuZ2xlID0gaW50ZXJ2YWxUb1JlY3RhbmdsZShjYW1lcmEuYm91bmRzKTtcbiAgICBjb25zdCBzdXJmYWNlcyA9IFsuLi50aGlzLmdyb3VuZFJlY2VpdmVycywgLi4udGhpcy53YWxsUmVjZWl2ZXJzXS5maWx0ZXIoXG4gICAgICBzdXJmYWNlID0+IHJlY3RhbmdsZXNJbnRlcnNlY3Qoc3VyZmFjZSwgY2FtZXJhUmVjdGFuZ2xlKVxuICAgICk7XG5cbiAgICBjb25zdCB7IHN1cmZhY2VNYXBzRW5hYmxlZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGhhc05vcm1hbE1hcHMgPVxuICAgICAgc3VyZmFjZU1hcHNFbmFibGVkICYmXG4gICAgICBzdXJmYWNlcy5zb21lKFxuICAgICAgICBzdXJmYWNlID0+IHN1cmZhY2Uubm9ybWFsTWFwIHx8IHN1cmZhY2UuY3VzdG9tRHJhdy5ub3JtYWxNYXBcbiAgICAgICk7XG4gICAgY29uc3QgaGFzU3BlY3VsYXJNYXBzID1cbiAgICAgIHN1cmZhY2VNYXBzRW5hYmxlZCAmJlxuICAgICAgc3VyZmFjZXMuc29tZShcbiAgICAgICAgc3VyZmFjZSA9PiBzdXJmYWNlLnNwZWN1bGFyTWFwIHx8IHN1cmZhY2UuY3VzdG9tRHJhdy5zcGVjdWxhck1hcFxuICAgICAgKTtcblxuICAgIGlmIChoYXNOb3JtYWxNYXBzKSB7XG4gICAgICB0aGlzLmRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmEsIHN1cmZhY2VzKTtcbiAgICB9XG4gICAgaWYgKGhhc1NwZWN1bGFyTWFwcykge1xuICAgICAgdGhpcy5kcmF3U2NlbmVTcGVjdWxhck1hcChjYW1lcmEsIHN1cmZhY2VzKTtcbiAgICB9XG5cbiAgICAvLyBMaWdodHMgb3V0c2lkZSB0aGUgY2FtZXJhIGJvdW5kcyBjYW4ndCBhZmZlY3QgdGhlIHZpc2libGUgc2NlbmVcbiAgICBjb25zdCB2aXNpYmxlTGlnaHRzID0gdGhpcy5saWdodHMuZmlsdGVyKGxpZ2h0ID0+XG4gICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0LmJvdW5kcywgY2FtZXJhUmVjdGFuZ2xlKVxuICAgICk7XG5cbiAgICB2aXNpYmxlTGlnaHRzLmZvckVhY2gobGlnaHQgPT5cbiAgICAgIGxpZ2h0LnByZXBhcmUodGhpcy5yZWdpb25DYXN0ZXJzLCB0aGlzLnNwcml0ZUNhc3RlcnMsIHRoaXMuY2lyY2xlQ2FzdGVycylcbiAgICApO1xuXG4gICAgc2hhZGVyUGFzcy5yZW5kZXIoe1xuICAgICAgY2FtZXJhLFxuICAgICAgc2NyZWVuLFxuICAgICAgbGlnaHRzOiB2aXNpYmxlTGlnaHRzLFxuICAgICAgc3VyZmFjZXM6IHRoaXMuY2FsY3VsYXRlQW1iaWVudExpZ2h0cyhzdXJmYWNlcyksXG4gICAgICBub3JtYWxNYXA6IGhhc05vcm1hbE1hcHMgPyB0aGlzLnNjZW5lTm9ybWFsTWFwQ2FudmFzIDogbnVsbCxcbiAgICAgIHNwZWN1bGFyTWFwOiBoYXNTcGVjdWxhck1hcHMgPyB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDYW52YXMgOiBudWxsLFxuICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgd2FsbExpZ2h0aW5nWU9mZnNldDogdGhpcy5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXQsXG4gICAgICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogdGhpcy5vcHRpb25zLndhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlLFxuICAgICAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogdGhpcy5vcHRpb25zLndhbGxTaGFkb3dMZW5ndGhGYWN0b3IsXG4gICAgICBoaWdobGlnaHRTdHJlbmd0aDogdGhpcy5vcHRpb25zLnNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJTaGFkb3dTdHJlbmd0aCxcbiAgICAgIHNwZWN1bGFyU3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJTcGVjdWxhclN0cmVuZ3RoLFxuICAgICAgc2hpbmluZXNzOiB0aGlzLm9wdGlvbnMuc2hhZGVyU2hpbmluZXNzLFxuICAgICAgdmlld1RpbHQ6IHRoaXMub3B0aW9ucy5zaGFkZXJWaWV3VGlsdCxcbiAgICAgIGJhbmRpbmc6IHRoaXMub3B0aW9ucy5zaGFkZXJCYW5kaW5nLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5saWdodE1hcENvbnRleHQpO1xuICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShzaGFkZXJQYXNzLmNhbnZhcywgMCwgMCk7XG5cbiAgICB0aGlzLnNwZWN1bGFyVmlzaWJsZSA9IGhhc1NwZWN1bGFyTWFwcztcbiAgICBpZiAoaGFzU3BlY3VsYXJNYXBzKSB7XG4gICAgICBzaGFkZXJQYXNzLnNob3dTcGVjdWxhcihzY3JlZW4pO1xuXG4gICAgICAvLyBIaWdobGlnaHRzIGNhbiBvbmx5IGFwcGVhciBvbiB0aGUgc3VyZmFjZXMgaW4gdGhlIGxpZ2h0IG1hcFxuICAgICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LnNhdmUoKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHNoYWRlclBhc3MuY2FudmFzLCAwLCAwKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyBzaG93aW5nIHdoaWNoIHN1cmZhY2UgaXMgYXQgZWFjaCBwaXhlbCwgZm9yIGRlYnVnZ2luZ1xuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBkcmF3biBzdHJhaWdodCBhd2F5LCBiZWNhdXNlIHRoZSBjYW52YXMgaXMgcmV1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0U3VyZmFjZU1hcENhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgdGhpcy5zaGFkZXJQYXNzPy5zaG93U3VyZmFjZXModGhpcy5zY3JlZW4pO1xuXG4gICAgcmV0dXJuIHRoaXMuc2hhZGVyUGFzcz8uY2FudmFzID8/IHRoaXMubGlnaHRNYXBDYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgYW1iaWVudCBsaWdodCBvbiBlYWNoIHN1cmZhY2VcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlQW1iaWVudExpZ2h0cyhzdXJmYWNlczogU3VyZmFjZTxhbnk+W10pOiBTaGFkZXJTdXJmYWNlW10ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZlYzIucm90KHZlYzIoMSwgMCksIHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHREaXJlY3Rpb24pO1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IHBhcnNlQ29sb3IodGhpcy5vcHRpb25zLmFtYmllbnRMaWdodENvbG91cik7XG4gICAgY29uc3Qgc2hhZG93ID0gcGFyc2VDb2xvcih0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyKTtcbiAgICBjb25zdCBoaWdobGlnaHQgPSBwYXJzZUNvbG9yKHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXIpO1xuXG4gICAgcmV0dXJuIHN1cmZhY2VzLm1hcChzdXJmYWNlID0+ICh7XG4gICAgICBzdXJmYWNlLFxuICAgICAgYW1iaWVudExpZ2h0OlxuICAgICAgICBzdXJmYWNlIGluc3RhbmNlb2YgV2FsbFJlY2VpdmVyXG4gICAgICAgICAgPyB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICAgICAgICAgICAgc3VyZmFjZS5zdXJmYWNlTm9ybWFsLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgIGFtYmllbnRMaWdodCxcbiAgICAgICAgICAgICAgc2hhZG93LFxuICAgICAgICAgICAgICBoaWdobGlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGFtYmllbnRMaWdodCxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3R1YWwgY29sb3VyIG9mIGFtYmllbnQgbGlnaHQgYmFzZWQgb24gdGhlIHN1cmZhY2Ugbm9ybWFsXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICBzdXJmYWNlTm9ybWFsOiB2ZWMyLFxuICAgIGFtYmllbnRMaWdodERpcmVjdGlvbjogdmVjMixcbiAgICBhbWJpZW50TGlnaHQ6IENvbG91cixcbiAgICBhbWJpZW50TGlnaHRTaGFkb3c6IENvbG91cixcbiAgICBhbWJpZW50TGlnaHRIaWdobGlnaHQ6IENvbG91clxuICApOiBDb2xvdXIge1xuICAgIGlmICh2ZWMyLmVxKHN1cmZhY2VOb3JtYWwsIHZlYzIoKSkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgZG90ID0gdmVjMi5kb3QodmVjMi5ub3Ioc3VyZmFjZU5vcm1hbCksIGFtYmllbnRMaWdodERpcmVjdGlvbik7XG4gICAgaWYgKGZsb2F0RXF1YWxzKGRvdCwgMCkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGRvdCA8IDApIHtcbiAgICAgIHJldHVybiBsZXJwQ29sb3VyKGFtYmllbnRMaWdodCwgYW1iaWVudExpZ2h0SGlnaGxpZ2h0LCAtZG90KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVycENvbG91cihhbWJpZW50TGlnaHQsIGFtYmllbnRMaWdodFNoYWRvdywgZG90KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgc29mdCBzaGFkb3cgc2V0dGluZ3Mgb24gdGhlIHNwZWNpZmllZCBjYW52YXMgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHNldHVwU29mdFNoYWRvd3MoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzRW5hYmxlZCAmJlxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnYmxhY2snO1xuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50O1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsYXkgdGhlIGxpZ2h0bWFwIG9udG8gdGhlIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmxpZ2h0aW5nRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgYWZ0ZXJ3YXJkcyBzbyB0aGF0IHRoZXkgY2FuIGJlIGJyaWdodGVyXG4gICAgLy8gdGhhbiB0aGUgc2NlbmUgdW5kZXJuZWF0aCB0aGVtXG4gICAgaWYgKHRoaXMuc3BlY3VsYXJWaXNpYmxlKSB7XG4gICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3BlY3VsYXJMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBub3JtYWwgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmE6IFNjZW5lQ2FtZXJhLCBzdXJmYWNlczogU3VyZmFjZTxhbnk+W10pIHtcbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dCk7XG4gICAgdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcblxuICAgIHN1cmZhY2VzLmZvckVhY2goc3VyZmFjZSA9PiB7XG4gICAgICBzdXJmYWNlLmRyYXdOb3JtYWxNYXAodGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgc3BlY3VsYXIgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZVNwZWN1bGFyTWFwKFxuICAgIGNhbWVyYTogU2NlbmVDYW1lcmEsXG4gICAgc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdXG4gICkge1xuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuXG4gICAgc3VyZmFjZXMuZm9yRWFjaChzdXJmYWNlID0+IHtcbiAgICAgIHN1cmZhY2UuZHJhd1NwZWN1bGFyTWFwKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuXG5leHBvcnQgdHlwZSBTY2VuZU9iamVjdE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXb3JsZCBwb3NpdGlvbiBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoaXMgb2JqZWN0XG4gICAqL1xuICBwb3NpdGlvbjogdmVjMjtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGlzIG9iamVjdCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgc2l6ZTogdmVjMjtcblxuICAvKipcbiAgICogQ2FuIHRoaXMgb2JqZWN0IGJlIG1lcmdlZCB3aXRoIGl0cyBuZWlnaGJvdXJzIGJ5XG4gICAqIGBMaWdodGluZ1N5c3RlbS5vcHRpbWlzZSgpYD9cbiAgICovXG4gIG1lcmdlYWJsZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgd2l0aCBhIGBMaWdodGluZ1N5c3RlbWBcbiAqXG4gKiBUaGVzZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgYExpZ2h0aW5nU3lzdGVtLmFkZC4uLigpYCBtZXRob2RzIGFuZCBhcmUgdXNlZFxuICogdG8gY2hhbmdlIG9yIHJlbW92ZSB0aGUgb2JqZWN0IGxhdGVyIG9uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuZU9iamVjdDxPcHRpb25zIGV4dGVuZHMgU2NlbmVPYmplY3RPcHRpb25zPiB7XG4gIHByb3RlY3RlZCBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1lcmdlYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSByZW1vdmVDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogT3B0aW9ucykge1xuICAgIHRoaXMubGlnaHRpbmcgPSBsaWdodGluZztcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkob3B0aW9ucy5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgb2JqZWN0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHNpemUgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2l6ZTogdmVjMikge1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzb21lIG9mIHRoZSBvcHRpb25zIGZvciB0aGlzIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHNldChvcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweSh0aGlzLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgb2JqZWN0IGlzIHJlbW92ZWRcbiAgICovXG4gIHB1YmxpYyBvblJlbW92ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIG9iamVjdCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5saWdodGluZy5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEdsQ29udGV4dCxcbiAgR2xQcm9ncmFtLFxuICBHbFJlbmRlclRhcmdldCxcbiAgU2NlbmVDYW1lcmEsXG4gIFNjZW5lSW1hZ2UsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgR3JvdW5kUmVjZWl2ZXIsIFN1cmZhY2UsIFdhbGxSZWNlaXZlciB9IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgZGlmZnVzZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9kaWZmdXNlLmZyYWcuZ2xzbCcpO1xuaW1wb3J0IG1hc2tTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvbWFzay5mcmFnLmdsc2wnKTtcbmltcG9ydCBzcGVjdWxhclNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9zcGVjdWxhci5mcmFnLmdsc2wnKTtcbmltcG9ydCBzdXJmYWNlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3N1cmZhY2UuZ2xzbCcpO1xuXG4vKipcbiAqIEEgc3VyZmFjZSB0aGF0J3MgdmlzaWJsZSBpbiB0aGUgc2NlbmUsIGFuZCBpdHMgYW1iaWVudCBsaWdodFxuICovXG5leHBvcnQgdHlwZSBTaGFkZXJTdXJmYWNlID0ge1xuICBzdXJmYWNlOiBTdXJmYWNlPGFueT47XG4gIGFtYmllbnRMaWdodDogQ29sb3VyO1xufTtcblxuLyoqXG4gKiBFdmVyeXRoaW5nIHRoYXQgdGhlIHNoYWRlcnMgbmVlZCBmb3IgcmVuZGVyaW5nIGEgZnJhbWVcbiAqL1xuZXhwb3J0IHR5cGUgU2hhZGVyU2NlbmUgPSB7XG4gIGNhbWVyYTogU2NlbmVDYW1lcmE7XG4gIHNjcmVlbjogdmVjMjtcbiAgbGlnaHRzOiBMaWdodFtdO1xuICBzdXJmYWNlczogU2hhZGVyU3VyZmFjZVtdO1xuICBub3JtYWxNYXA6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBzcGVjdWxhck1hcDogU2NlbmVJbWFnZSB8IG51bGw7XG4gIGltYWdlU21vb3RoaW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgd2FsbExpZ2h0aW5nWU9mZnNldDogbnVtYmVyO1xuICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogbnVtYmVyO1xuICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiBudW1iZXI7XG4gIGhpZ2hsaWdodFN0cmVuZ3RoOiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIHNwZWN1bGFyU3RyZW5ndGg6IG51bWJlcjtcbiAgc2hpbmluZXNzOiBudW1iZXI7XG4gIHZpZXdUaWx0OiBudW1iZXI7XG4gIGJhbmRpbmc6IG51bWJlcjtcbn07XG5cbmVudW0gVGV4dHVyZVVuaXQge1xuICBOb3JtYWxNYXAsXG4gIFNwZWN1bGFyTWFwLFxuICBTdXJmYWNlTWFwLFxuICBMaWdodE1hcCxcbiAgUmVnaW9uU2hhZG93TWFwLFxuICBPYmplY3RTaGFkb3dNYXAsXG59XG5cbi8qKlxuICogVGhlIGFscGhhIGNoYW5uZWwgb2YgdGhlIHN1cmZhY2UgbWFwIHNheXMgd2hhdCdzIGF0IGVhY2ggcGl4ZWwsIHRoZXNlIHZhbHVlc1xuICogYXJlIGFsc28gaW4gdGhlIHNoYWRlcnNcbiAqL1xuZW51bSBTdXJmYWNlVHlwZSB7XG4gIE5vbmUgPSAwLFxuICBHcm91bmQgPSAwLjI1LFxuICBQcm9qZWN0ZWRXYWxsID0gMC41LFxuICBGbGF0V2FsbCA9IDAuNzUsXG4gIFVubGl0ID0gMSxcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBsaWdodGluZyBmb3IgYSBzY2VuZVxuICpcbiAqIFN1cmZhY2VzIGFyZSBkcmF3biBpbnRvIGEgc3VyZmFjZSBtYXAgd2l0aG91dCBhbnkgYmxlbmRpbmcsIHNvIGVhY2ggcGl4ZWxcbiAqIGJlbG9uZ3MgdG8gZXhhY3RseSBvbmUgc3VyZmFjZSBhbmQga25vd3Mgd2hlcmUgdGhhdCBzdXJmYWNlIG1lZXRzIHRoZSBncm91bmQuXG4gKiBUaGlzIG1lYW5zIG92ZXJsYXBwaW5nIHN1cmZhY2VzIGRvbid0IG5lZWQgYW55IHNwZWNpYWwgaGFuZGxpbmcuXG4gKlxuICogRWFjaCBsaWdodCBpcyB0aGVuIHNoYWRlZCBzZXBhcmF0ZWx5IGFuZCBibGVuZGVkIGludG8gYSBsaWdodCBtYXAsIHNvIGFcbiAqIGxpZ2h0J3MgYnVtcHMgb25seSBhZmZlY3QgdGhhdCBsaWdodC4gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgdXAgaW4gYVxuICogc2VwYXJhdGUgYnVmZmVyLCBiZWNhdXNlIHRoZXkgbmVlZCB0byBiZSBicmlnaHRlciB0aGFuIHRoZSBzY2VuZVxuICovXG5leHBvcnQgY2xhc3MgU2hhZGVyUGFzcyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPT1RfU0NBTEUgPSA0O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT09UX01BWCA9IDY1NTM1O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0hBRE9XX0JJQVMgPSAyNTU7XG5cbiAgcHJpdmF0ZSBjb250ZXh0OiBHbENvbnRleHQ7XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgbWFza1Byb2dyYW06IEdsUHJvZ3JhbTtcbiAgcHJpdmF0ZSBkaWZmdXNlUHJvZ3JhbTogR2xQcm9ncmFtO1xuICBwcml2YXRlIHNwZWN1bGFyUHJvZ3JhbTogR2xQcm9ncmFtO1xuXG4gIHByaXZhdGUgdGV4dHVyZXM6IFJlY29yZDxcbiAgICBFeGNsdWRlPFRleHR1cmVVbml0LCBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwPixcbiAgICBXZWJHTFRleHR1cmVcbiAgPjtcbiAgcHJpdmF0ZSBzdXJmYWNlVGFyZ2V0OiBHbFJlbmRlclRhcmdldDtcbiAgcHJpdmF0ZSBzcGVjdWxhclRhcmdldDogR2xSZW5kZXJUYXJnZXQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRleHQ6IEdsQ29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0Lm9uSW5pdGlhbGlzZShnbCA9PiB0aGlzLmluaXRpYWxpc2UoZ2wpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IG9mIHRoZSBtb3N0IHJlY2VudCBwYXNzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5jYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoYWRlcnMgY2FuIGJlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuY29udGV4dC5hdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpc2UoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVwZW5kID0gKHNvdXJjZTogc3RyaW5nKSA9PiBgJHtzdXJmYWNlU2hhZGVyfVxcbiR7c291cmNlfWA7XG5cbiAgICAgIHRoaXMubWFza1Byb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbShtYXNrU2hhZGVyKTtcbiAgICAgIHRoaXMuZGlmZnVzZVByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbShwcmVwZW5kKGRpZmZ1c2VTaGFkZXIpKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJQcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oXG4gICAgICAgIHByZXBlbmQoc3BlY3VsYXJTaGFkZXIpXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpZ2h0aW5nIGhhcyBiZWVuIGRpc2FibGVkJywgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0dXJlcyA9IHtcbiAgICAgIFtUZXh0dXJlVW5pdC5Ob3JtYWxNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0LlNwZWN1bGFyTWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5MaWdodE1hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuUmVnaW9uU2hhZG93TWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5PYmplY3RTaGFkb3dNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgIH07XG4gICAgdGhpcy5zdXJmYWNlVGFyZ2V0ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJlbmRlclRhcmdldCgpO1xuICAgIHRoaXMuc3BlY3VsYXJUYXJnZXQgPSB0aGlzLmNvbnRleHQuY3JlYXRlUmVuZGVyVGFyZ2V0KCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWQgYW4gaW1hZ2UgdG8gb25lIG9mIHRoZSBzaGFyZWQgdGV4dHVyZXNcbiAgICovXG4gIHByaXZhdGUgdXBsb2FkKFxuICAgIHVuaXQ6IEV4Y2x1ZGU8VGV4dHVyZVVuaXQsIFRleHR1cmVVbml0LlN1cmZhY2VNYXA+LFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuY29udGV4dC51cGxvYWQodW5pdCwgdGhpcy50ZXh0dXJlc1t1bml0XSwgaW1hZ2UsIGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBvdXRwdXQgYW5kIHRoZSByZW5kZXIgdGFyZ2V0cyBtYXRjaCB0aGUgc2NyZWVuIHNpemVcbiAgICovXG4gIHByaXZhdGUgcmVzaXplKHNjcmVlbjogdmVjMikge1xuICAgIHRoaXMuY29udGV4dC5yZXNpemUoc2NyZWVuKTtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplVGFyZ2V0KHRoaXMuc3VyZmFjZVRhcmdldCwgc2NyZWVuKTtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplVGFyZ2V0KHRoaXMuc3BlY3VsYXJUYXJnZXQsIHNjcmVlbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoYXQgd2UgbmVlZCB0byB3cml0ZSB0byB0aGUgc3VyZmFjZSBtYXAgZm9yIGEgc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBzdXJmYWNlVmFsdWUoc3VyZmFjZTogU3VyZmFjZTxhbnk+LCBzY2VuZTogU2hhZGVyU2NlbmUpOiBudW1iZXJbXSB7XG4gICAgaWYgKHN1cmZhY2UgaW5zdGFuY2VvZiBHcm91bmRSZWNlaXZlcikge1xuICAgICAgcmV0dXJuIFswLCAwLCAwLCBTdXJmYWNlVHlwZS5Hcm91bmRdO1xuICAgIH1cblxuICAgIGNvbnN0IHdhbGwgPSBzdXJmYWNlIGFzIFdhbGxSZWNlaXZlcjtcblxuICAgIGxldCB0eXBlID0gU3VyZmFjZVR5cGUuVW5saXQ7XG4gICAgaWYgKHdhbGwucmVjZWl2ZUxpZ2h0KSB7XG4gICAgICB0eXBlID0gd2FsbC5wcm9qZWN0U2hhZG93c1xuICAgICAgICA/IFN1cmZhY2VUeXBlLlByb2plY3RlZFdhbGxcbiAgICAgICAgOiBTdXJmYWNlVHlwZS5GbGF0V2FsbDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9vdCBwb3NpdGlvbiBpcyBzdG9yZWQgcmVsYXRpdmUgdG8gdGhlIHRvcCBvZiB0aGUgY2FtZXJhJ3Mgdmlld1xuICAgIGNvbnN0IGZvb3QgPSBNYXRoLnJvdW5kKFxuICAgICAgKHdhbGwucG9zaXRpb24ueSArIHdhbGwuc2l6ZS55IC0gc2NlbmUuY2FtZXJhLmJvdW5kcy50b3ApICpcbiAgICAgICAgU2hhZGVyUGFzcy5GT09UX1NDQUxFXG4gICAgKTtcbiAgICBjb25zdCBjbGFtcGVkRm9vdCA9IE1hdGgubWluKE1hdGgubWF4KGZvb3QsIDApLCBTaGFkZXJQYXNzLkZPT1RfTUFYKTtcbiAgICBjb25zdCBiaWFzID0gTWF0aC5taW4od2FsbC5zaGFkb3dCaWFzLCBTaGFkZXJQYXNzLk1BWF9TSEFET1dfQklBUyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5mbG9vcihjbGFtcGVkRm9vdCAvIDI1NikgLyAyNTUsXG4gICAgICAoY2xhbXBlZEZvb3QgJSAyNTYpIC8gMjU1LFxuICAgICAgTWF0aC5yb3VuZChiaWFzKSAvIDI1NSxcbiAgICAgIHR5cGUsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGVhY2ggdmlzaWJsZSBzdXJmYWNlLCB3cml0aW5nIGEgdmFsdWUgdG8gYWxsIG9mIHRoZSBzdXJmYWNlJ3MgcGl4ZWxzXG4gICAqL1xuICBwcml2YXRlIGRyYXdTdXJmYWNlcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZSxcbiAgICBnZXRWYWx1ZTogKGl0ZW06IFNoYWRlclN1cmZhY2UpID0+IG51bWJlcltdXG4gICkge1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMubWFza1Byb2dyYW07XG4gICAgY29uc3QgZmlsdGVyID0gc2NlbmUuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X21hc2ssIEdsQ29udGV4dC5JTUFHRV9VTklUKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzY2VuZS5zdXJmYWNlcykge1xuICAgICAgY29uc3QgeyBzdXJmYWNlIH0gPSBpdGVtO1xuICAgICAgY29uc3QgbWFzayA9IHN1cmZhY2UuZ2V0TWFzaygpO1xuICAgICAgaWYgKG1hc2sgPT09IG51bGwgfHwgc3VyZmFjZS52aXNpYmxlSGVpZ2h0IDw9IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXNrUmVjdGFuZ2xlID0gWzAsIDAsIDEsIDFdO1xuICAgICAgaWYgKG1hc2sgIT09ICdzb2xpZCcpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRJbWFnZShtYXNrLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIFJlcGVhdGVkIGltYWdlcyBhcmUgbGluZWQgdXAgd2l0aCB0aGUgd29ybGQsIHRoZSBzYW1lIGFzIGEgcGF0dGVyblxuICAgICAgICBpZiAoc3VyZmFjZS5yZXBlYXQgJiYgIXN1cmZhY2UuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICAgICAgbWFza1JlY3RhbmdsZSA9IFtcbiAgICAgICAgICAgIHN1cmZhY2UucG9zaXRpb24ueCAvIG1hc2sud2lkdGgsXG4gICAgICAgICAgICBzdXJmYWNlLnBvc2l0aW9uLnkgLyBtYXNrLmhlaWdodCxcbiAgICAgICAgICAgIHN1cmZhY2Uuc2l6ZS54IC8gbWFzay53aWR0aCxcbiAgICAgICAgICAgIHN1cmZhY2Uuc2l6ZS55IC8gbWFzay5oZWlnaHQsXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2aXNpYmxlU2l6ZSA9IHZlYzIoc3VyZmFjZS5zaXplLngsIHN1cmZhY2UudmlzaWJsZUhlaWdodCk7XG4gICAgICBtYXNrUmVjdGFuZ2xlWzNdICo9IHZpc2libGVTaXplLnkgLyBzdXJmYWNlLnNpemUueTtcblxuICAgICAgY29uc3QgdG9wTGVmdCA9IHNjZW5lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHN1cmZhY2UucG9zaXRpb24pO1xuICAgICAgY29uc3QgYm90dG9tUmlnaHQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihcbiAgICAgICAgdmVjMi5hZGQoc3VyZmFjZS5wb3NpdGlvbiwgdmlzaWJsZVNpemUpXG4gICAgICApO1xuXG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VNYXNrLCBtYXNrID09PSAnc29saWQnID8gMCA6IDEpO1xuICAgICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X3ZhbHVlLCBnZXRWYWx1ZShpdGVtKSk7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICAgIHRoaXMubWFza1Byb2dyYW0sXG4gICAgICAgIFtcbiAgICAgICAgICB0b3BMZWZ0LngsXG4gICAgICAgICAgdG9wTGVmdC55LFxuICAgICAgICAgIGJvdHRvbVJpZ2h0LnggLSB0b3BMZWZ0LngsXG4gICAgICAgICAgYm90dG9tUmlnaHQueSAtIHRvcExlZnQueSxcbiAgICAgICAgXSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICBtYXNrUmVjdGFuZ2xlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHVuaWZvcm1zIHRoYXQgYXJlIHRoZSBzYW1lIGZvciBldmVyeSBsaWdodCBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHByaXZhdGUgc2V0U2NlbmVVbmlmb3JtcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHsgcHJvZ3JhbSwgdW5pZm9ybXMgfTogR2xQcm9ncmFtLFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZVxuICApIHtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3Jtcy51X3NjcmVlbiwgc2NlbmUuc2NyZWVuLngsIHNjZW5lLnNjcmVlbi55KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VOb3JtYWxNYXAsIHNjZW5lLm5vcm1hbE1hcCA/IDEgOiAwKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YWxsTGlnaHRpbmdZT2Zmc2V0LCBzY2VuZS53YWxsTGlnaHRpbmdZT2Zmc2V0KTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB1bmlmb3Jtcy51X3dhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlLFxuICAgICAgc2NlbmUud2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2VcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHVuaWZvcm1zLnVfd2FsbFNoYWRvd0xlbmd0aEZhY3RvcixcbiAgICAgIHNjZW5lLndhbGxTaGFkb3dMZW5ndGhGYWN0b3JcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X2JhbmRpbmcsIHNjZW5lLmJhbmRpbmcpO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3NjZW5lTm9ybWFsTWFwLCBUZXh0dXJlVW5pdC5Ob3JtYWxNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3N1cmZhY2VNYXAsIFRleHR1cmVVbml0LlN1cmZhY2VNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X2xpZ2h0TWFwLCBUZXh0dXJlVW5pdC5MaWdodE1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfcmVnaW9uU2hhZG93TWFwLCBUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X29iamVjdFNoYWRvd01hcCwgVGV4dHVyZVVuaXQuT2JqZWN0U2hhZG93TWFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHVuaWZvcm1zIGZvciBhIGxpZ2h0IGFuZCBkcmF3IGl0cyBib3VuZGluZyBib3hcbiAgICovXG4gIHByaXZhdGUgZHJhd0xpZ2h0KFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgcHJvZ3JhbTogR2xQcm9ncmFtLFxuICAgIGxpZ2h0OiBMaWdodCxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmVcbiAgKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gbGlnaHQuYm91bmRzO1xuICAgIGNvbnN0IHRvcExlZnQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihwb3NpdGlvbik7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbih2ZWMyLmFkZChwb3NpdGlvbiwgc2l6ZSkpO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRSYWRpdXMsIGxpZ2h0LnJhZGl1cyk7XG4gICAgZ2wudW5pZm9ybTFmKHByb2dyYW0udW5pZm9ybXMudV9saWdodEhlaWdodCwgbGlnaHQuaGVpZ2h0KTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICBwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRNYXBTaXplLFxuICAgICAgbGlnaHQucmVnaW9uU2hhZG93Q2FudmFzLndpZHRoXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICBwcm9ncmFtLnVuaWZvcm1zLnVfZm9vdE9yaWdpbixcbiAgICAgIHNjZW5lLmNhbWVyYS5ib3VuZHMudG9wIC0gbGlnaHQucG9zaXRpb24ueVxuICAgICk7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICBwcm9ncmFtLFxuICAgICAgW1xuICAgICAgICB0b3BMZWZ0LngsXG4gICAgICAgIHRvcExlZnQueSxcbiAgICAgICAgYm90dG9tUmlnaHQueCAtIHRvcExlZnQueCxcbiAgICAgICAgYm90dG9tUmlnaHQueSAtIHRvcExlZnQueSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHBvc2l0aW9uLnggLSBsaWdodC5wb3NpdGlvbi54LFxuICAgICAgICBwb3NpdGlvbi55IC0gbGlnaHQucG9zaXRpb24ueSxcbiAgICAgICAgc2l6ZS54LFxuICAgICAgICBzaXplLnksXG4gICAgICBdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNjZW5lJ3MgbGlnaHQgbWFwIGludG8gdGhlIGNhbnZhcywgYW5kIGFkZCB1cCB0aGUgc2NlbmUnc1xuICAgKiBzcGVjdWxhciBoaWdobGlnaHRzIGlmIGl0IGhhcyBhIHNwZWN1bGFyIG1hcFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihzY2VuZTogU2hhZGVyU2NlbmUpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKCFnbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplKHNjZW5lLnNjcmVlbik7XG4gICAgdGhpcy5jb250ZXh0LmludmFsaWRhdGVDYW52YXNlcygpO1xuXG4gICAgaWYgKHNjZW5lLm5vcm1hbE1hcCkge1xuICAgICAgdGhpcy51cGxvYWQoVGV4dHVyZVVuaXQuTm9ybWFsTWFwLCBzY2VuZS5ub3JtYWxNYXAsIGdsLk5FQVJFU1QpO1xuICAgIH1cblxuICAgIC8vIEVhY2ggcGl4ZWwgb2YgdGhlIHN1cmZhY2UgbWFwIGJlbG9uZ3MgdG8gb25lIHN1cmZhY2UsIHNvIHRoZXJlJ3Mgbm9cbiAgICAvLyBibGVuZGluZyBhbmQgc3VyZmFjZXMgY292ZXIgd2hhdGV2ZXIncyB1bmRlcm5lYXRoIHRoZW1cbiAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMubWFza1Byb2dyYW0ucHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKFxuICAgICAgdGhpcy5tYXNrUHJvZ3JhbS51bmlmb3Jtcy51X3NjcmVlbixcbiAgICAgIHNjZW5lLnNjcmVlbi54LFxuICAgICAgc2NlbmUuc2NyZWVuLnlcbiAgICApO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnN1cmZhY2VUYXJnZXQuZnJhbWVidWZmZXIpO1xuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgU3VyZmFjZVR5cGUuTm9uZSk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgdGhpcy5kcmF3U3VyZmFjZXMoZ2wsIHNjZW5lLCAoeyBzdXJmYWNlIH0pID0+XG4gICAgICB0aGlzLnN1cmZhY2VWYWx1ZShzdXJmYWNlLCBzY2VuZSlcbiAgICApO1xuXG4gICAgLy8gU3RhcnQgdGhlIGxpZ2h0IG1hcCB3aXRoIHRoZSBhbWJpZW50IGxpZ2h0IG9uIGVhY2ggc3VyZmFjZVxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB0aGlzLmRyYXdTdXJmYWNlcyhnbCwgc2NlbmUsICh7IGFtYmllbnRMaWdodDogeyByLCBnLCBiLCBhIH0gfSkgPT4gW1xuICAgICAgciAvIDI1NSxcbiAgICAgIGcgLyAyNTUsXG4gICAgICBiIC8gMjU1LFxuICAgICAgYSxcbiAgICBdKTtcblxuICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShcbiAgICAgIFRleHR1cmVVbml0LlN1cmZhY2VNYXAsXG4gICAgICB0aGlzLnN1cmZhY2VUYXJnZXQudGV4dHVyZSxcbiAgICAgIGdsLk5FQVJFU1RcbiAgICApO1xuXG4gICAgdGhpcy5zZXRTY2VuZVVuaWZvcm1zKGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBzY2VuZSk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdGhpcy5kaWZmdXNlUHJvZ3JhbS51bmlmb3Jtcy51X2hpZ2hsaWdodFN0cmVuZ3RoLFxuICAgICAgc2NlbmUuaGlnaGxpZ2h0U3RyZW5ndGhcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHRoaXMuZGlmZnVzZVByb2dyYW0udW5pZm9ybXMudV9zaGFkb3dTdHJlbmd0aCxcbiAgICAgIHNjZW5lLnNoYWRvd1N0cmVuZ3RoXG4gICAgKTtcblxuICAgIGlmIChzY2VuZS5zcGVjdWxhck1hcCkge1xuICAgICAgdGhpcy51cGxvYWQoVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXAsIHNjZW5lLnNwZWN1bGFyTWFwLCBnbC5ORUFSRVNUKTtcblxuICAgICAgY29uc3QgeyB1bmlmb3JtcyB9ID0gdGhpcy5zcGVjdWxhclByb2dyYW07XG4gICAgICB0aGlzLnNldFNjZW5lVW5pZm9ybXMoZ2wsIHRoaXMuc3BlY3VsYXJQcm9ncmFtLCBzY2VuZSk7XG4gICAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zY2VuZVNwZWN1bGFyTWFwLCBUZXh0dXJlVW5pdC5TcGVjdWxhck1hcCk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zcGVjdWxhclN0cmVuZ3RoLCBzY2VuZS5zcGVjdWxhclN0cmVuZ3RoKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3NoaW5pbmVzcywgc2NlbmUuc2hpbmluZXNzKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3ZpZXdUaWx0LCBzY2VuZS52aWV3VGlsdCk7XG5cbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zcGVjdWxhclRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyID0gc2NlbmUuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgZm9yIChjb25zdCBsaWdodCBvZiBzY2VuZS5saWdodHMpIHtcbiAgICAgIHRoaXMudXBsb2FkKFRleHR1cmVVbml0LkxpZ2h0TWFwLCBsaWdodC5saWdodENhbnZhcywgZmlsdGVyKTtcbiAgICAgIHRoaXMudXBsb2FkKFxuICAgICAgICBUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXAsXG4gICAgICAgIGxpZ2h0LnJlZ2lvblNoYWRvd0NhbnZhcyxcbiAgICAgICAgZmlsdGVyXG4gICAgICApO1xuICAgICAgdGhpcy51cGxvYWQoXG4gICAgICAgIFRleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcCxcbiAgICAgICAgbGlnaHQub2JqZWN0U2hhZG93Q2FudmFzLFxuICAgICAgICBmaWx0ZXJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJsZW5kIHRoZSBzYW1lIHdheSBhcyB0aGUgJ3NjcmVlbicgY29tcG9zaXRlIG9wZXJhdGlvbiwgYW5kIGxlYXZlIHRoZVxuICAgICAgLy8gYWxwaGEgY2hhbm5lbCBhbG9uZVxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLk9ORSwgZ2wuT05FX01JTlVTX1NSQ19DT0xPUiwgZ2wuWkVSTywgZ2wuT05FKTtcbiAgICAgIHRoaXMuZHJhd0xpZ2h0KGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBsaWdodCwgc2NlbmUpO1xuXG4gICAgICBpZiAoc2NlbmUuc3BlY3VsYXJNYXApIHtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnNwZWN1bGFyVGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICAgICAgZ2wuYmxlbmRGdW5jU2VwYXJhdGUoZ2wuT05FLCBnbC5PTkUsIGdsLlpFUk8sIGdsLk9ORSk7XG4gICAgICAgIHRoaXMuZHJhd0xpZ2h0KGdsLCB0aGlzLnNwZWN1bGFyUHJvZ3JhbSwgbGlnaHQsIHNjZW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgc3BlY3VsYXIgaGlnaGxpZ2h0cyBmcm9tIHRoZVxuICAgKiBtb3N0IHJlY2VudCByZW5kZXJcbiAgICovXG4gIHB1YmxpYyBzaG93U3BlY3VsYXIoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nbCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdUZXh0dXJlKHRoaXMuc3BlY3VsYXJUYXJnZXQudGV4dHVyZSwgc2NyZWVuKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY29udGVudHMgb2YgdGhlIGNhbnZhcyB3aXRoIHRoZSBzdXJmYWNlIG1hcCBmcm9tIHRoZSBtb3N0XG4gICAqIHJlY2VudCByZW5kZXJcbiAgICovXG4gIHB1YmxpYyBzaG93U3VyZmFjZXMoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nbCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdUZXh0dXJlKHRoaXMuc3VyZmFjZVRhcmdldC50ZXh0dXJlLCBzY3JlZW4pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBib3VuZGluZ1JlY3RhbmdsZSwgZHJhd0ltYWdlSW5SZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcblxudHlwZSBEcmF3Q2FsbGJhY2sgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBTdXJmYWNlT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGJhY2tncm91bmQgY29sb3VyXG4gICAqL1xuICBjb2xvdXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpbWFnZSBmb3IgdGhpcyBzdXJmYWNlXG4gICAqL1xuICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBub3JtYWwgbWFwLCB1c2VkIHdoZW4gdGhlIHNoYWRlciBpcyBlbmFibGVkXG4gICAqL1xuICBub3JtYWxNYXA/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgc3BlY3VsYXIgbWFwLCB1c2VkIHdoZW4gdGhlIHNoYWRlciBpcyBlbmFibGVkXG4gICAqL1xuICBzcGVjdWxhck1hcD86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTdXJmYWNlcyBhcmUgZHJhd24gaW4gb3JkZXIgb2Ygei1pbmRleCBhbmQgdGhlbiBieSB0aGVpciBib3R0b20gZWRnZVxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGFueSBvZiB0aGUgZGVmYXVsdCBkcmF3aW5nIHN0ZXBzIGZvciB0aGlzIHN1cmZhY2UsIGZvciBvYmplY3RzXG4gICAqIHRoYXQgYXJlbid0IGEgc2luZ2xlIGltYWdlXG4gICAqL1xuICBjdXN0b21EcmF3Pzoge1xuICAgIGltYWdlPzogRHJhd0NhbGxiYWNrO1xuICAgIG1hc2s/OiBEcmF3Q2FsbGJhY2s7XG4gICAgbm9ybWFsTWFwPzogRHJhd0NhbGxiYWNrO1xuICAgIHNwZWN1bGFyTWFwPzogRHJhd0NhbGxiYWNrO1xuICB9O1xufTtcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgc2hhZG93c1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VyZmFjZTxcbiAgT3B0aW9ucyBleHRlbmRzIFN1cmZhY2VPcHRpb25zXG4+IGV4dGVuZHMgU2NlbmVPYmplY3Q8T3B0aW9ucz4ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBOT1JNQUxfTUFQX0RFRkFVTFRfQ09MT1VSID0gJyM3ZjdmZmYnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTUEVDVUxBUl9NQVBfREVGQVVMVF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyBjb2xvdXI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgaW1hZ2U6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIG5vcm1hbE1hcDogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgc3BlY3VsYXJNYXA6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHpJbmRleDogbnVtYmVyID0gMDtcbiAgcHVibGljIGN1c3RvbURyYXc6IE5vbk51bGxhYmxlPFN1cmZhY2VPcHRpb25zWydjdXN0b21EcmF3J10+ID0ge307XG5cbiAgLyoqXG4gICAqIFdvcmxkIHktcG9zaXRpb24gd2hlcmUgdGhpcyBzdXJmYWNlIHN0b3BzLCBvciBudWxsIHRvIHNob3cgYWxsIG9mIGl0XG4gICAqXG4gICAqIFRoZSByZXN0IG9mIHRoZSBzdXJmYWNlIGlzIGhpZGRlbiBhbmQgZG9lc24ndCByZWNlaXZlIGFueSBsaWdodGluZywgdGhpcyBpc1xuICAgKiB1c2VmdWwgZm9yIHNvbWV0aGluZyB0aGF0J3Mgc3RhbmRpbmcgaW4gd2F0ZXJcbiAgICovXG4gIHB1YmxpYyBjbGlwQm90dG9tOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBwcm90ZWN0ZWQgb3ZlcmxheXM6IERyYXdDYWxsYmFja1tdID0gW107XG5cbiAgcHJpdmF0ZSBjdXN0b21NYXNrQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBpbWFnZXMgYmUgcmVwZWF0ZWQgYWNyb3NzIHRoaXMgc3VyZmFjZSwgb3Igc3RyZXRjaGVkIHRvIGZpdD9cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCByZXBlYXQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW1hZ2Ugd2hvc2UgYWxwaGEgY2hhbm5lbCBkZWNpZGVzIHdoaWNoIHBhcnRzIG9mIHRoaXMgc3VyZmFjZVxuICAgKiByZWNlaXZlIGxpZ2h0aW5nXG4gICAqXG4gICAqIFJldHVybnMgJ3NvbGlkJyBpZiB0aGUgd2hvbGUgc3VyZmFjZSByZWNlaXZlcyBsaWdodGluZywgb3IgbnVsbCBpZiBub3RoaW5nXG4gICAqIGRvZXMgKGZvciBleGFtcGxlIGlmIHRoZSBpbWFnZSBoYXNuJ3QgbG9hZGVkIHlldClcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRNYXNrKCk6IFNjZW5lSW1hZ2UgfCAnc29saWQnIHwgbnVsbDtcblxuICBwcml2YXRlIGZpbGxCYWNrZ3JvdW5kKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3VyOiBzdHJpbmcpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZHJhd0ltYWdlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgaW1hZ2U6IFNjZW5lSW1hZ2UpIHtcbiAgICBkcmF3SW1hZ2VJblJlY3RhbmdsZShjb250ZXh0LCBpbWFnZSwgdGhpcywgdGhpcy5yZXBlYXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBzb21ldGhpbmcgdG8gYmUgZHJhd24gb24gdG9wIG9mIHRoaXMgc3VyZmFjZSwgaXQncyBkcmF3biBzdHJhaWdodCBhZnRlclxuICAgKiB0aGUgc3VyZmFjZSBzbyB0aGF0IGFueXRoaW5nIGluIGZyb250IG9mIHRoZSBzdXJmYWNlIHdpbGwgY292ZXIgaXRcbiAgICpcbiAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIHJlbW92ZXMgdGhlIG92ZXJsYXkuIE92ZXJsYXlzIGRvbid0IGNoYW5nZSB0aGVcbiAgICogc2hhcGUgb2YgdGhlIHN1cmZhY2UsIGFuZCBzdXJmYWNlcyB3aXRoIG92ZXJsYXlzIGNhbid0IGJlIG1lcmdlZFxuICAgKi9cbiAgcHVibGljIGFkZE92ZXJsYXkoZHJhdzogRHJhd0NhbGxiYWNrKTogKCkgPT4gdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5cy5wdXNoKGRyYXcpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMub3ZlcmxheXMgPSB0aGlzLm92ZXJsYXlzLmZpbHRlcihvdmVybGF5ID0+IG92ZXJsYXkgIT09IGRyYXcpO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmRyYXdDb250ZW50KGNvbnRleHQpO1xuICAgIHRoaXMub3ZlcmxheXMuZm9yRWFjaChvdmVybGF5ID0+IG92ZXJsYXkoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBhcnQgb2YgdGhpcyBzdXJmYWNlIGFib3ZlIGBjbGlwQm90dG9tYFxuICAgKi9cbiAgcHVibGljIGdldCB2aXNpYmxlSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2xpcEJvdHRvbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZS55O1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2xpcEJvdHRvbSAtIHRoaXMucG9zaXRpb24ueTtcblxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChoZWlnaHQsIDApLCB0aGlzLnNpemUueSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIGRyYXdpbmcgZnVuY3Rpb24sIGtlZXBpbmcgaXQgaW5zaWRlIHRoZSB2aXNpYmxlIHBhcnQgb2YgdGhpcyBzdXJmYWNlXG4gICAqL1xuICBwcml2YXRlIGRyYXdWaXNpYmxlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZHJhdzogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLmNsaXBCb3R0b20gPT09IG51bGwpIHtcbiAgICAgIGRyYXcoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgdGhpcy52aXNpYmxlSGVpZ2h0XG4gICAgKTtcbiAgICBjb250ZXh0LmNsaXAoKTtcbiAgICBkcmF3KCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGlzIHN1cmZhY2Ugd2l0aG91dCBpdHMgb3ZlcmxheXNcbiAgICovXG4gIHB1YmxpYyBkcmF3Q29udGVudChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmRyYXdWaXNpYmxlKGNvbnRleHQsICgpID0+IHRoaXMuZHJhd1dob2xlU3VyZmFjZShjb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgcGFydCBvZiB0aGlzIHN1cmZhY2UgdGhhdCdzIGhpZGRlbiBieSBgY2xpcEJvdHRvbWBcbiAgICovXG4gIHB1YmxpYyBkcmF3SGlkZGVuKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmNsaXBCb3R0b20gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMucG9zaXRpb247XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy52aXNpYmxlSGVpZ2h0O1xuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoeCwgeSArIGhlaWdodCwgdGhpcy5zaXplLngsIHRoaXMuc2l6ZS55IC0gaGVpZ2h0KTtcbiAgICBjb250ZXh0LmNsaXAoKTtcbiAgICB0aGlzLmRyYXdXaG9sZVN1cmZhY2UoY29udGV4dCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdXaG9sZVN1cmZhY2UoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5pbWFnZSkge1xuICAgICAgdGhpcy5jdXN0b21EcmF3LmltYWdlKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKGNvbnRleHQsIHRoaXMuY29sb3VyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgdGhpcy5pbWFnZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZHJhd0NvbG91ck1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgaW1hZ2U6IFNjZW5lSW1hZ2UgfCBudWxsLFxuICAgIGRlZmF1bHRDb2xvdXI6IHN0cmluZ1xuICApIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGlmIChpbWFnZSkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgaW1hZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKGNvbnRleHQsIGRlZmF1bHRDb2xvdXIpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdOb3JtYWxNYXAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3VmlzaWJsZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm5vcm1hbE1hcCkge1xuICAgICAgICB0aGlzLmN1c3RvbURyYXcubm9ybWFsTWFwKGNvbnRleHQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhd0NvbG91ck1hcChcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgdGhpcy5ub3JtYWxNYXAsXG4gICAgICAgIFN1cmZhY2UuTk9STUFMX01BUF9ERUZBVUxUX0NPTE9VUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3U3BlY3VsYXJNYXAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3VmlzaWJsZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jdXN0b21EcmF3LnNwZWN1bGFyTWFwKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tRHJhdy5zcGVjdWxhck1hcChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYXdDb2xvdXJNYXAoXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRoaXMuc3BlY3VsYXJNYXAsXG4gICAgICAgIFN1cmZhY2UuU1BFQ1VMQVJfTUFQX0RFRkFVTFRfQ09MT1VSXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIGN1c3RvbSBtYXNrLCByZWxhdGl2ZSB0byB0aGUgcG9zaXRpb24gb2YgdGhpcyBzdXJmYWNlXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVuZGVyQ3VzdG9tTWFzayhkcmF3OiBEcmF3Q2FsbGJhY2spOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgdGhpcy5jdXN0b21NYXNrQ29udGV4dCA/Pz0gZG9jdW1lbnRcbiAgICAgIC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY3VzdG9tTWFza0NvbnRleHQ7XG4gICAgY29udGV4dC5jYW52YXMud2lkdGggPSBNYXRoLmNlaWwodGhpcy5zaXplLngpO1xuICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IE1hdGguY2VpbCh0aGlzLnNpemUueSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoLXRoaXMucG9zaXRpb24ueCwgLXRoaXMucG9zaXRpb24ueSk7XG4gICAgZHJhdyhjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250ZXh0LmNhbnZhcztcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHcm91bmRSZWNlaXZlck9wdGlvbnMgPSBTdXJmYWNlT3B0aW9ucztcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSBvZiBncm91bmQgdGhhdCByZWNlaXZlcyBncm91bmQgc2hhZG93c1xuICpcbiAqIEltYWdlcyBhcmUgcmVwZWF0ZWQgYWNyb3NzIHRoZSByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VuZFJlY2VpdmVyIGV4dGVuZHMgU3VyZmFjZTxHcm91bmRSZWNlaXZlck9wdGlvbnM+IHtcbiAgcHVibGljIHJlcGVhdCA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogR3JvdW5kUmVjZWl2ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1hc2soKTogU2NlbmVJbWFnZSB8ICdzb2xpZCcgfCBudWxsIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckN1c3RvbU1hc2sodGhpcy5jdXN0b21EcmF3Lm1hc2spO1xuICAgIH1cblxuICAgIHJldHVybiAnc29saWQnO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdhbGxSZWNlaXZlck9wdGlvbnMgPSBTdXJmYWNlT3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIEltYWdlIHdob3NlIGFscGhhIGNoYW5uZWwgZGVjaWRlcyB3aGljaCBwYXJ0cyBvZiB0aGlzIHN1cmZhY2UgcmVjZWl2ZVxuICAgKiBsaWdodGluZywgdGhlIGRlZmF1bHQgaXMgdGhlIGFscGhhIGNoYW5uZWwgb2YgYGltYWdlYFxuICAgKi9cbiAgbWFzaz86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhlIGltYWdlIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgc3VyZmFjZT8gT3RoZXJ3aXNlIGl0IHdpbGwgYmVcbiAgICogc3RyZXRjaGVkIHRvIGZpdFxuICAgKi9cbiAgcmVwZWF0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gZmFsc2UgaWYgdGhpcyBzdXJmYWNlIHNob3VsZCBvbmx5IHJlY2VpdmUgYW1iaWVudCBsaWdodCAodGhpc1xuICAgKiBpcyB1c2VmdWwgZm9yIHRoZSB0b3BzIG9mIHdhbGxzKVxuICAgKi9cbiAgcmVjZWl2ZUxpZ2h0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlyZWN0aW9uIHRoYXQgdGhpcyBzdXJmYWNlIGlzIGZhY2luZywgZm9yIGFtYmllbnQgbGlnaHRpbmdcbiAgICovXG4gIHN1cmZhY2VOb3JtYWw/OiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRvd2FyZHMgdGhlIGxpZ2h0IHRvIGxvb2sgZm9yIHNoYWRvd3Mgb24gdGhlIGdyb3VuZCwgaW4gd29ybGRcbiAgICogdW5pdHMuIFRoaXMgc2hvdWxkIGJlIGVub3VnaCB0byBnZXQgb3V0IG9mIHRoZSBzdXJmYWNlJ3Mgb3duIHNoYWRvd1xuICAgKi9cbiAgc2hhZG93Qmlhcz86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHNwcml0ZSBhbmQgY2lyY2xlIHNoYWRvd3MgY2xpbWIgdGhpcyBzdXJmYWNlPyBUaGlzIHNob3VsZCBiZSBmYWxzZVxuICAgKiBmb3IgYW55dGhpbmcgdGhhdCBjYXN0cyBvbmUgb2YgdGhlc2Ugc2hhZG93cywgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgaW4gaXRzXG4gICAqIG93biBzaGFkb3dcbiAgICovXG4gIHByb2plY3RTaGFkb3dzPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgb3Igc3ByaXRlIHRoYXQgcmVjZWl2ZXMgd2FsbCBzaGFkb3dzXG4gKi9cbmV4cG9ydCBjbGFzcyBXYWxsUmVjZWl2ZXIgZXh0ZW5kcyBTdXJmYWNlPFdhbGxSZWNlaXZlck9wdGlvbnM+IHtcbiAgcHVibGljIG1hc2s6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHJlcGVhdCA9IGZhbHNlO1xuICBwdWJsaWMgcmVjZWl2ZUxpZ2h0OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHN1cmZhY2VOb3JtYWw6IHZlYzIgPSB2ZWMyKCk7XG4gIHB1YmxpYyBzaGFkb3dCaWFzOiBudW1iZXIgPSAxO1xuICBwdWJsaWMgcHJvamVjdFNoYWRvd3M6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFdhbGxSZWNlaXZlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFzaygpOiBTY2VuZUltYWdlIHwgJ3NvbGlkJyB8IG51bGwge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcubWFzaykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ3VzdG9tTWFzayh0aGlzLmN1c3RvbURyYXcubWFzayk7XG4gICAgfVxuXG4gICAgLy8gQSBiYWNrZ3JvdW5kIGNvbG91ciBjb3ZlcnMgdGhlIHdob2xlIHN1cmZhY2VcbiAgICBpZiAodGhpcy5jb2xvdXIpIHtcbiAgICAgIHJldHVybiAnc29saWQnO1xuICAgIH1cblxuICAgIGNvbnN0IG1hc2sgPSB0aGlzLm1hc2sgPz8gdGhpcy5pbWFnZTtcblxuICAgIHJldHVybiBtYXNrICYmIG1hc2sud2lkdGggPiAwICYmIG1hc2suaGVpZ2h0ID4gMCA/IG1hc2sgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoaXMgc3VyZmFjZSBjYW4gYmUgbWVyZ2VkIHdpdGggYW5vdGhlciBzdXJmYWNlXG4gICAqL1xuICBwdWJsaWMgY2FuTWVyZ2Uob3RoZXI6IFdhbGxSZWNlaXZlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhhc0ltYWdlcyA9XG4gICAgICB0aGlzLmltYWdlIHx8IHRoaXMubWFzayB8fCB0aGlzLm5vcm1hbE1hcCB8fCB0aGlzLnNwZWN1bGFyTWFwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWVyZ2VhYmxlICYmXG4gICAgICBvdGhlci5tZXJnZWFibGUgJiZcbiAgICAgIHRoaXMub3ZlcmxheXMubGVuZ3RoID09PSAwICYmXG4gICAgICBvdGhlci5vdmVybGF5cy5sZW5ndGggPT09IDAgJiZcbiAgICAgIC8vIE5vbi1yZXBlYXRpbmcgaW1hZ2VzIHdvdWxkIHN0cmV0Y2ggYWNyb3NzIHRoZSBtZXJnZWQgc3VyZmFjZVxuICAgICAgKHRoaXMucmVwZWF0IHx8ICFoYXNJbWFnZXMpICYmXG4gICAgICB0aGlzLnpJbmRleCA9PT0gb3RoZXIuekluZGV4ICYmXG4gICAgICB0aGlzLmNvbG91ciA9PT0gb3RoZXIuY29sb3VyICYmXG4gICAgICB0aGlzLmltYWdlID09PSBvdGhlci5pbWFnZSAmJlxuICAgICAgdGhpcy5tYXNrID09PSBvdGhlci5tYXNrICYmXG4gICAgICB0aGlzLm5vcm1hbE1hcCA9PT0gb3RoZXIubm9ybWFsTWFwICYmXG4gICAgICB0aGlzLnNwZWN1bGFyTWFwID09PSBvdGhlci5zcGVjdWxhck1hcCAmJlxuICAgICAgdGhpcy5yZXBlYXQgPT09IG90aGVyLnJlcGVhdCAmJlxuICAgICAgdGhpcy5yZWNlaXZlTGlnaHQgPT09IG90aGVyLnJlY2VpdmVMaWdodCAmJlxuICAgICAgdmVjMi5lcSh0aGlzLnN1cmZhY2VOb3JtYWwsIG90aGVyLnN1cmZhY2VOb3JtYWwpICYmXG4gICAgICB0aGlzLnNoYWRvd0JpYXMgPT09IG90aGVyLnNoYWRvd0JpYXMgJiZcbiAgICAgIHRoaXMucHJvamVjdFNoYWRvd3MgPT09IG90aGVyLnByb2plY3RTaGFkb3dzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgc3VyZmFjZSB0aGF0IGNvdmVycyB0aGlzIHN1cmZhY2UgYW5kIGFub3RoZXIgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIG1lcmdlKG90aGVyOiBXYWxsUmVjZWl2ZXIpOiBXYWxsUmVjZWl2ZXIge1xuICAgIHJldHVybiBuZXcgV2FsbFJlY2VpdmVyKHRoaXMubGlnaHRpbmcsIHtcbiAgICAgIC4uLih0aGlzIGFzIFdhbGxSZWNlaXZlciksXG4gICAgICAuLi5ib3VuZGluZ1JlY3RhbmdsZSh0aGlzLCBvdGhlciksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBSZWdpb25DYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBXYWxsUmVjZWl2ZXIsIFdhbGxSZWNlaXZlck9wdGlvbnMgfSBmcm9tICcuL1N1cmZhY2UnO1xuXG5leHBvcnQgdHlwZSBXYWxsT3B0aW9ucyA9IE9taXQ8XG4gIFdhbGxSZWNlaXZlck9wdGlvbnMsXG4gICdwb3NpdGlvbicgfCAnc2l6ZScgfCAncmVjZWl2ZUxpZ2h0J1xuPiAmIHtcbiAgLyoqXG4gICAqIFRoZSBhcmVhIG9mIHRoZSBncm91bmQgdGhhdCB0aGlzIHdhbGwgc3RhbmRzIG9uXG4gICAqL1xuICBmb290cHJpbnQ6IFJlY3RhbmdsZTtcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgd2FsbCdzIGZyb250IGZhY2VcbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgc2hhZG93cyBpbmNsdWRlIHRoZSB3YWxsJ3MgZm9vdHByaW50P1xuICAgKi9cbiAgaW5jbHVkZVJlZ2lvblNoYWRvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFwcGVhcmFuY2Ugb2YgdGhlIHRvcCBvZiB0aGUgd2FsbCwgaXQgb25seSByZWNlaXZlcyBhbWJpZW50IGxpZ2h0XG4gICAqL1xuICB0b3A/OiB7XG4gICAgY29sb3VyPzogc3RyaW5nO1xuICAgIGltYWdlPzogU2NlbmVJbWFnZSB8IG51bGw7XG4gIH07XG59O1xuXG4vKipcbiAqIEEgc29saWQgd2FsbCBpbiBhIDMvNCB2aWV3XG4gKlxuICogVGhpcyBpcyBtYWRlIGZyb20gYSBmcm9udCBmYWNlIHRoYXQgcmVjZWl2ZXMgbGlnaHQsIGEgdG9wIHRoYXQgb25seSByZWNlaXZlc1xuICogYW1iaWVudCBsaWdodCwgYW5kIGEgZm9vdHByaW50IHRoYXQgY2FzdHMgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgV2FsbCB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfVE9QX0NPTE9VUiA9ICdibGFjayc7XG5cbiAgcHVibGljIHJlYWRvbmx5IGZyb250OiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSB0b3A6IFdhbGxSZWNlaXZlcjtcbiAgcHVibGljIHJlYWRvbmx5IGNhc3RlcjogUmVnaW9uQ2FzdGVyO1xuXG4gIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogV2FsbE9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGZvb3RwcmludCwgaGVpZ2h0LCBpbmNsdWRlUmVnaW9uU2hhZG93LCB0b3AsIC4uLmZyb250IH0gPSBvcHRpb25zO1xuXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5jYXN0ZXIgPSBsaWdodGluZy5hZGRSZWdpb25DYXN0ZXIoe1xuICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgbWVyZ2VhYmxlOiBvcHRpb25zLm1lcmdlYWJsZSxcbiAgICAgIGluY2x1ZGVSZWdpb25TaGFkb3csXG4gICAgfSk7XG4gICAgdGhpcy5mcm9udCA9IGxpZ2h0aW5nLmFkZFdhbGxSZWNlaXZlcih7XG4gICAgICAuLi5mcm9udCxcbiAgICAgIC4uLnRoaXMuZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50KSxcbiAgICB9KTtcbiAgICB0aGlzLnRvcCA9IGxpZ2h0aW5nLmFkZFdhbGxSZWNlaXZlcih7XG4gICAgICB6SW5kZXg6IG9wdGlvbnMuekluZGV4LFxuICAgICAgbWVyZ2VhYmxlOiBvcHRpb25zLm1lcmdlYWJsZSxcbiAgICAgIGNvbG91cjogdG9wPy5jb2xvdXIgPz8gV2FsbC5ERUZBVUxUX1RPUF9DT0xPVVIsXG4gICAgICBpbWFnZTogdG9wPy5pbWFnZSxcbiAgICAgIHJlY2VpdmVMaWdodDogZmFsc2UsXG4gICAgICAuLi50aGlzLnRvcFJlY3RhbmdsZShmb290cHJpbnQpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmcm9udFJlY3RhbmdsZShmb290cHJpbnQ6IFJlY3RhbmdsZSk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3QgYm90dG9tID0gZm9vdHByaW50LnBvc2l0aW9uLnkgKyBmb290cHJpbnQuc2l6ZS55O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKGZvb3RwcmludC5wb3NpdGlvbi54LCBib3R0b20gLSB0aGlzLmhlaWdodCksXG4gICAgICBzaXplOiB2ZWMyKGZvb3RwcmludC5zaXplLngsIHRoaXMuaGVpZ2h0KSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB0b3BSZWN0YW5nbGUoZm9vdHByaW50OiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihmb290cHJpbnQucG9zaXRpb24ueCwgZm9vdHByaW50LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCksXG4gICAgICBzaXplOiBmb290cHJpbnQuc2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyB3YWxsIHNvIHRoYXQgaXRzIGZvb3RwcmludCBpcyBhdCBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjMikge1xuICAgIGNvbnN0IGZvb3RwcmludCA9IHsgcG9zaXRpb24sIHNpemU6IHRoaXMuY2FzdGVyLnNpemUgfTtcblxuICAgIHRoaXMuY2FzdGVyLm1vdmVUbyhwb3NpdGlvbik7XG4gICAgdGhpcy5mcm9udC5tb3ZlVG8odGhpcy5mcm9udFJlY3RhbmdsZShmb290cHJpbnQpLnBvc2l0aW9uKTtcbiAgICB0aGlzLnRvcC5tb3ZlVG8odGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KS5wb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgd2FsbCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5mcm9udC5yZW1vdmUoKTtcbiAgICB0aGlzLnRvcC5yZW1vdmUoKTtcbiAgICB0aGlzLmNhc3Rlci5yZW1vdmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgR2xDb250ZXh0IH0gZnJvbSAnLi4vY29yZSc7XG5leHBvcnQgdHlwZSB7IFJlY3RhbmdsZSwgU2NlbmVDYW1lcmEsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmV4cG9ydCB7IEFjdG9yIH0gZnJvbSAnLi9BY3Rvcic7XG5leHBvcnQgdHlwZSB7IEFjdG9yT3B0aW9ucywgQWN0b3JTaGFkb3csIFNwcml0ZUFjdG9yT3B0aW9ucyB9IGZyb20gJy4vQWN0b3InO1xuZXhwb3J0IHsgQ2lyY2xlQ2FzdGVyLCBSZWdpb25DYXN0ZXIsIFNwcml0ZUNhc3RlciB9IGZyb20gJy4vQ2FzdGVyJztcbmV4cG9ydCB0eXBlIHtcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgUmVnaW9uQ2FzdGVyT3B0aW9ucyxcbiAgU2hhZG93Q2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5leHBvcnQgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuZXhwb3J0IHR5cGUgeyBMaWdodE9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0JztcbmV4cG9ydCB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5leHBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtT3B0aW9ucyB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuZXhwb3J0IHsgU2NlbmVPYmplY3QgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmV4cG9ydCB0eXBlIHsgU2NlbmVPYmplY3RPcHRpb25zIH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5leHBvcnQgeyBHcm91bmRSZWNlaXZlciwgU3VyZmFjZSwgV2FsbFJlY2VpdmVyIH0gZnJvbSAnLi9TdXJmYWNlJztcbmV4cG9ydCB0eXBlIHtcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBTdXJmYWNlT3B0aW9ucyxcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9TdXJmYWNlJztcbmV4cG9ydCB7IFdhbGwgfSBmcm9tICcuL1dhbGwnO1xuZXhwb3J0IHR5cGUgeyBXYWxsT3B0aW9ucyB9IGZyb20gJy4vV2FsbCc7XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUsIHJlY3RhbmdsZVRvSW50ZXJ2YWwgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFNpZGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgTUVSR0VfTUFYX0lURVJBVElPTlMgPSAxMDA7XG5jb25zdCBNRVJHRV9PUkRFUiA9IFsnZHVwbGljYXRlJywgU2lkZS5Cb3R0b20sIFNpZGUuUmlnaHQsIFNpZGUuVG9wLCBTaWRlLkxlZnRdO1xuXG50eXBlIE1lcmdlYWJsZTxUPiA9IFJlY3RhbmdsZSAmIHtcbiAgY2FuTWVyZ2Uob3RoZXI6IFQpOiBib29sZWFuO1xuICBtZXJnZShvdGhlcjogVCk6IFQ7XG59O1xuXG50eXBlIE1lcmdlPFQ+ID0gW1QsIFQsIFNpZGUgfCAnZHVwbGljYXRlJ107XG5cbi8qKlxuICogRmluZCBwYWlycyBvZiBpdGVtcyB0aGF0IGFyZSBhZGphY2VudCB0byBlYWNoIG90aGVyIGFuZCBjYW4gYmUgbWVyZ2VkXG4gKi9cbmZ1bmN0aW9uIGZpbmRNZXJnZXM8VCBleHRlbmRzIE1lcmdlYWJsZTxUPj4oaXRlbXM6IFRbXSk6IE1lcmdlPFQ+W10ge1xuICBjb25zdCByZXN1bHQ6IE1lcmdlPFQ+W10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoaXRlbXNbaV0pO1xuXG4gICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgaXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGIgPSByZWN0YW5nbGVUb0ludGVydmFsKGl0ZW1zW2pdKTtcblxuICAgICAgaWYgKCFpdGVtc1tpXS5jYW5NZXJnZShpdGVtc1tqXSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEEgYW5kIEIgYXJlIHRoZSBzYW1lXG4gICAgICBpZiAoXG4gICAgICAgIGEudG9wID09PSBiLnRvcCAmJlxuICAgICAgICBhLmJvdHRvbSA9PT0gYi5ib3R0b20gJiZcbiAgICAgICAgYS5sZWZ0ID09PSBiLmxlZnQgJiZcbiAgICAgICAgYS5yaWdodCA9PT0gYi5yaWdodFxuICAgICAgKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sICdkdXBsaWNhdGUnXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgYm90dG9tIGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEuYm90dG9tID09PSBiLnRvcCAmJiBhLmxlZnQgPT09IGIubGVmdCAmJiBhLnJpZ2h0ID09PSBiLnJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuQm90dG9tXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSB0b3AgZWRnZSBvZiBBXG4gICAgICBpZiAoYS50b3AgPT09IGIuYm90dG9tICYmIGEubGVmdCA9PT0gYi5sZWZ0ICYmIGEucmlnaHQgPT09IGIucmlnaHQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5Ub3BdKTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIHJpZ2h0IGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEucmlnaHQgPT09IGIubGVmdCAmJiBhLnRvcCA9PT0gYi50b3AgJiYgYS5ib3R0b20gPT09IGIuYm90dG9tKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuUmlnaHRdKTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIGxlZnQgZWRnZSBvZiBBXG4gICAgICBpZiAoYS5sZWZ0ID09PSBiLnJpZ2h0ICYmIGEudG9wID09PSBiLnRvcCAmJiBhLmJvdHRvbSA9PT0gYi5ib3R0b20pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5MZWZ0XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBNZXJnZSBpdGVtcyB0aGF0IGFyZSBhZGphY2VudCB0byBlYWNoIG90aGVyIGFuZCBwZXJmZWN0bHkgY29ubmVjdGVkIG9uIG9uZVxuICogc2lkZSwgb3IgYXJlIGV4YWN0IGR1cGxpY2F0ZXMgb2YgZWFjaCBvdGhlclxuICpcbiAqIGBvbk1lcmdlYCBpcyBjYWxsZWQgZWFjaCB0aW1lIDIgaXRlbXMgYXJlIHJlcGxhY2VkIHdpdGggYSBzaW5nbGUgaXRlbS4gSWZcbiAqIHRoZSBpdGVtcyB3ZXJlIGR1cGxpY2F0ZXMsIHRoZSBtZXJnZWQgaXRlbSBpcyB0aGUgZmlyc3QgaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2U8VCBleHRlbmRzIE1lcmdlYWJsZTxUPj4oXG4gIGl0ZW1zOiBUW10sXG4gIG9uTWVyZ2U/OiAobWVyZ2VkOiBULCBhOiBULCBiOiBUKSA9PiB2b2lkXG4pOiBUW10ge1xuICAvLyBTb3J0IGl0ZW1zIGJ5IHktcG9zaXRpb24gdGhlbiB4LXBvc2l0aW9uXG4gIGxldCByZXN1bHQgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5wb3NpdGlvbi55ID09PSBiLnBvc2l0aW9uLnkpIHtcbiAgICAgIHJldHVybiBhLnBvc2l0aW9uLnggLSBiLnBvc2l0aW9uLng7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEucG9zaXRpb24ueSAtIGIucG9zaXRpb24ueTtcbiAgfSk7XG5cbiAgbGV0IGkgPSAwO1xuICBsZXQgbWVyZ2VzOiBNZXJnZTxUPltdO1xuICB3aGlsZSAoXG4gICAgKG1lcmdlcyA9IGZpbmRNZXJnZXMocmVzdWx0KSkubGVuZ3RoID4gMCAmJlxuICAgIGkrKyA8IE1FUkdFX01BWF9JVEVSQVRJT05TXG4gICkge1xuICAgIC8vIE1lcmdlIGl0ZW1zIGluIGEgc3BlY2lmaWMgb3JkZXIgKGUuZy4gaXRlbXMgdGhhdCBjb25uZWN0IG9uIHRoZSBib3R0b21cbiAgICAvLyBmYWNlIGZpcnN0LCBvciBpdGVtcyB0aGF0IGFyZSBleGFjdCBkdXBsaWNhdGVzIGZpcnN0LCBldGMuKVxuICAgIG1lcmdlcy5zb3J0KFxuICAgICAgKGEsIGIpID0+IE1FUkdFX09SREVSLmluZGV4T2YoYVsyXSkgLSBNRVJHRV9PUkRFUi5pbmRleE9mKGJbMl0pXG4gICAgKTtcblxuICAgIGZvciAoY29uc3QgW2EsIGIsIHNpZGVdIG9mIG1lcmdlcykge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBpdGVtcyBzdGlsbCBleGlzdCAodGhleSBtaWdodCBoYXZlIGJlZW4gbWVyZ2VkIGFuZFxuICAgICAgLy8gcmVtb3ZlZCBpbiBhIHByZXZpb3VzIGl0ZXJhdGlvbilcbiAgICAgIGlmICghcmVzdWx0LmluY2x1ZGVzKGEpIHx8ICFyZXN1bHQuaW5jbHVkZXMoYikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaWRlID09PSAnZHVwbGljYXRlJykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gYik7XG4gICAgICAgIG9uTWVyZ2U/LihhLCBhLCBiKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lcmdlZCA9IGEubWVyZ2UoYik7XG4gICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gYSAmJiBpdGVtICE9PSBiKTtcbiAgICAgIHJlc3VsdC5wdXNoKG1lcmdlZCk7XG4gICAgICBvbk1lcmdlPy4obWVyZ2VkLCBhLCBiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5cbmV4cG9ydCB0eXBlIExpbmUgPSB7XG4gIHN0YXJ0OiB2ZWMyO1xuICBlbmQ6IHZlYzI7XG59O1xuXG5leHBvcnQgZW51bSBTZWN0b3IxZCB7XG4gIEJlZm9yZSA9ICdiZWZvcmUnLFxuICBJbnNpZGUgPSAnaW5zaWRlJyxcbiAgQWZ0ZXIgPSAnYWZ0ZXInLFxufVxuXG5leHBvcnQgZW51bSBTZWN0b3IyZCB7XG4gIFRvcExlZnQgPSAndG9wLWxlZnQnLFxuICBUb3AgPSAndG9wJyxcbiAgVG9wUmlnaHQgPSAndG9wLXJpZ2h0JyxcbiAgTGVmdCA9ICdsZWZ0JyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcbiAgQm90dG9tTGVmdCA9ICdib3R0b20tbGVmdCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBCb3R0b21SaWdodCA9ICdib3R0b20tcmlnaHQnLFxufVxuXG5leHBvcnQgdHlwZSBQb2x5Z29uVmVydGljZXMgPSAoXG4gIHwgdmVjMlxuICB8ICgoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkKVxuKVtdO1xuXG5leHBvcnQgZW51bSBTaWRlIHtcbiAgVG9wID0gJ3RvcCcsXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIExlZnQgPSAnbGVmdCcsXG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IEludGVydmFsMWQsIEludGVydmFsMmQsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IExpbmUsIFBvbHlnb25WZXJ0aWNlcywgU2VjdG9yMWQsIFNlY3RvcjJkIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBsaW5lIHNlZ21lbnQncyBub3JtYWwgaXMgZmFjaW5nIHRvd2FyZHMgYSBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZUlzRmFjaW5nKGxpbmU6IExpbmUsIHBvc2l0aW9uOiB2ZWMyKSB7XG4gIGNvbnN0IGVkZ2UgPSB2ZWMyLm5vcih2ZWMyLnN1YihsaW5lLmVuZCwgbGluZS5zdGFydCkpO1xuICBjb25zdCBlZGdlTm9ybWFsID0gdmVjMihlZGdlLnksIC1lZGdlLngpO1xuICBjb25zdCBsaWdodE5vcm1hbCA9IHZlYzIubm9yKFxuICAgIHZlYzIuc3ViKHZlYzIubXVsKHZlYzIuYWRkKGxpbmUuc3RhcnQsIGxpbmUuZW5kKSwgMC41KSwgcG9zaXRpb24pXG4gICk7XG5cbiAgcmV0dXJuIHZlYzIuZG90KGxpZ2h0Tm9ybWFsLCBlZGdlTm9ybWFsKSA8PSAwO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBvbHlnb24gcGF0aCBvbiBhIGNhbnZhcyBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKFxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIC4uLnZlcnRpY2VzOiBQb2x5Z29uVmVydGljZXNcbikge1xuICBpZiAodmVydGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZlcnRpY2VzWzBdKGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRleHQubW92ZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICB9XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHZlcnRpY2VzW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAodmVydGljZXNbaV0gYXMgRnVuY3Rpb24pKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmxpbmVUbygodmVydGljZXNbaV0gYXMgdmVjMikueCwgKHZlcnRpY2VzW2ldIGFzIHZlYzIpLnkpO1xuICAgIH1cbiAgfVxuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdG9yIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG8gYSAxZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VjdG9yMWQobjogbnVtYmVyLCBpbnRlcnZhbDogSW50ZXJ2YWwxZCk6IFNlY3RvcjFkIHtcbiAgaWYgKG4gPD0gaW50ZXJ2YWwuc3RhcnQpIHtcbiAgICByZXR1cm4gU2VjdG9yMWQuQmVmb3JlO1xuICB9XG5cbiAgaWYgKG4gPj0gaW50ZXJ2YWwuZW5kKSB7XG4gICAgcmV0dXJuIFNlY3RvcjFkLkFmdGVyO1xuICB9XG5cbiAgcmV0dXJuIFNlY3RvcjFkLkluc2lkZTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3RvciBvZiBhIHBvaW50IHJlbGF0aXZlIHRvIGEgMmQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3RvcjJkKHBvaW50OiB2ZWMyLCBpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IFNlY3RvcjJkIHtcbiAgY29uc3QgeCA9IHNlY3RvcjFkKHBvaW50LngsIHsgc3RhcnQ6IGludGVydmFsLmxlZnQsIGVuZDogaW50ZXJ2YWwucmlnaHQgfSk7XG4gIGNvbnN0IHkgPSBzZWN0b3IxZChwb2ludC55LCB7IHN0YXJ0OiBpbnRlcnZhbC50b3AsIGVuZDogaW50ZXJ2YWwuYm90dG9tIH0pO1xuXG4gIHJldHVybiB7XG4gICAgW1NlY3RvcjFkLkJlZm9yZV06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BMZWZ0LFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkxlZnQsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b21MZWZ0LFxuICAgIH0sXG4gICAgW1NlY3RvcjFkLkluc2lkZV06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3AsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuSW5zaWRlLFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tLFxuICAgIH0sXG4gICAgW1NlY3RvcjFkLkFmdGVyXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcFJpZ2h0LFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLlJpZ2h0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tUmlnaHQsXG4gICAgfSxcbiAgfVt4XVt5XTtcbn1cblxuY29uc3Qgc2lsaG91ZXR0ZXMgPSBuZXcgV2Vha01hcDxTY2VuZUltYWdlLCBIVE1MQ2FudmFzRWxlbWVudD4oKTtcblxuLyoqXG4gKiBHZXQgYSBibGFjayBjb3B5IG9mIGFuIGltYWdlIHdoaWNoIGtlZXBzIHRoZSBpbWFnZSdzIGFscGhhIGNoYW5uZWwsIG9yIG51bGxcbiAqIGlmIHRoZSBpbWFnZSBoYXNuJ3QgbG9hZGVkIHlldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2lsaG91ZXR0ZShpbWFnZTogU2NlbmVJbWFnZSk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIGlmIChpbWFnZS53aWR0aCA9PT0gMCB8fCBpbWFnZS5oZWlnaHQgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgIWltYWdlLmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gc2lsaG91ZXR0ZXMuZ2V0KGltYWdlKTtcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByZXN1bHQud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICByZXN1bHQuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHJlc3VsdC5nZXRDb250ZXh0KCcyZCcpITtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLWluJztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCByZXN1bHQud2lkdGgsIHJlc3VsdC5oZWlnaHQpO1xuXG4gICAgc2lsaG91ZXR0ZXMuc2V0KGltYWdlLCByZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlSW5SZWN0YW5nbGUsIFJlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBSZWZsZWN0aW9uU3lzdGVtIH0gZnJvbSAnLi9SZWZsZWN0aW9uU3lzdGVtJztcblxuZXhwb3J0IHR5cGUgUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyA9IFJlY3RhbmdsZSAmIHtcbiAgLyoqXG4gICAqIEltYWdlIHdob3NlIGFscGhhIGNoYW5uZWwgZGVjaWRlcyB3aGljaCBwYXJ0cyBvZiB0aGlzIHJlY3RhbmdsZSBhcmVcbiAgICogcmVmbGVjdGl2ZSwgdGhlIGRlZmF1bHQgaXMgdGhlIHdob2xlIHJlY3RhbmdsZVxuICAgKi9cbiAgbWFzaz86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhlIG1hc2sgYmUgcmVwZWF0ZWQgYWNyb3NzIHRoZSByZWN0YW5nbGU/IE90aGVyd2lzZSBpdCB3aWxsIGJlXG4gICAqIHN0cmV0Y2hlZCB0byBmaXRcbiAgICovXG4gIHJlcGVhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhvdyBzdHJvbmcgdGhlIHJlZmxlY3Rpb24gaXMsIGZyb20gMCB0byAxXG4gICAqL1xuICBzdHJlbmd0aD86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQW4gYXJlYSB0aGF0IHNob3dzIHJlZmxlY3Rpb25zXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICBwdWJsaWMgcG9zaXRpb246IHZlYzI7XG4gIHB1YmxpYyBzaXplOiB2ZWMyO1xuICBwdWJsaWMgbWFzazogU2NlbmVJbWFnZSB8IG51bGw7XG4gIHB1YmxpYyByZXBlYXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBzdHJlbmd0aDogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbTtcblxuICBwcml2YXRlIHJlbW92ZUNhbGxiYWNrczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW0sXG4gICAgb3B0aW9uczogUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbiAgICBkZWZhdWx0U3RyZW5ndGg6IG51bWJlclxuICApIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zID0gcmVmbGVjdGlvbnM7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KG9wdGlvbnMucG9zaXRpb24pO1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KG9wdGlvbnMuc2l6ZSk7XG4gICAgdGhpcy5tYXNrID0gb3B0aW9ucy5tYXNrID8/IG51bGw7XG4gICAgdGhpcy5yZXBlYXQgPSBvcHRpb25zLnJlcGVhdCA/PyBmYWxzZTtcbiAgICB0aGlzLnN0cmVuZ3RoID0gb3B0aW9ucy5zdHJlbmd0aCA/PyBkZWZhdWx0U3RyZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogRmlsbCB0aGlzIGFyZWEsIHNvIHRoYXQgdGhlIGNvbnRleHQgb25seSBrZWVwcyByZWZsZWN0aXZlIHBhcnRzIG9yIHNvIHRoYXRcbiAgICogaXQgc2hvd3Mgd2hpY2ggcGFydHMgYXJlIHJlZmxlY3RpdmVcbiAgICovXG4gIHB1YmxpYyBkcmF3TWFzayhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5tYXNrKSB7XG4gICAgICBkcmF3SW1hZ2VJblJlY3RhbmdsZShjb250ZXh0LCB0aGlzLm1hc2ssIHRoaXMsIHRoaXMucmVwZWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgICB0aGlzLnNpemUueVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhpcyByZWNlaXZlciBpcyByZW1vdmVkXG4gICAqL1xuICBwdWJsaWMgb25SZW1vdmUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyByZWNlaXZlciBmcm9tIHRoZSByZWZsZWN0aW9uIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zLnJlbW92ZSh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyA9IFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM7XG5cbi8qKlxuICogQSByZWZsZWN0aXZlIHBhcnQgb2YgdGhlIGZsb29yXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG9vclJlZmxlY3Rpb25SZWNlaXZlciBleHRlbmRzIFJlZmxlY3Rpb25SZWNlaXZlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU1RSRU5HVEggPSAwLjU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihyZWZsZWN0aW9ucywgb3B0aW9ucywgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIuREVGQVVMVF9TVFJFTkdUSCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgPSBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zICYge1xuICAvKipcbiAgICogV2hlcmUgdGhlIHdhbGwgbWVldHMgdGhlIGdyb3VuZCwgdGhlIGRlZmF1bHQgaXMgdGhlIGJvdHRvbSBvZiB0aGUgcmVjdGFuZ2xlXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIHNldCBpZiB0aGUgcmVjdGFuZ2xlIGlzIG9ubHkgcGFydCBvZiBhIHdhbGwsIGZvciBleGFtcGxlIGFcbiAgICogbWlycm9yIHRoYXQncyBoYW5naW5nIGFib3ZlIHRoZSBmbG9vclxuICAgKi9cbiAgZm9vdD86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQSByZWZsZWN0aXZlIHBhcnQgb2YgYSB3YWxsXG4gKi9cbmV4cG9ydCBjbGFzcyBXYWxsUmVmbGVjdGlvblJlY2VpdmVyIGV4dGVuZHMgUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TVFJFTkdUSCA9IDE7XG5cbiAgcHVibGljIGZvb3Q6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW0sXG4gICAgb3B0aW9uczogV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIocmVmbGVjdGlvbnMsIG9wdGlvbnMsIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIuREVGQVVMVF9TVFJFTkdUSCk7XG4gICAgdGhpcy5mb290ID0gb3B0aW9ucy5mb290ID8/IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhpcyByZWNlaXZlcidzIHJlZmxlY3Rpb25zIHdpdGggdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZFxuICAgKlxuICAgKiBSZWZsZWN0aW9ucyBpbiB3YWxscyBjYW4gYmUgY292ZXJlZCBieSB0aGluZ3MgdGhhdCBhcmUgZHJhd24gYWZ0ZXJ3YXJkcywgc29cbiAgICogdGhpcyBuZWVkcyB0byBiZSBkcmF3biBzdHJhaWdodCBhZnRlciB0aGUgd2FsbFxuICAgKi9cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucy5kcmF3V2FsbFJlY2VpdmVyKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IFNwcml0ZSB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3Nwcml0ZSc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFJlY3RhbmdsZSwgU2NlbmVJbWFnZSwgc3ByaXRlQm91bmRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IFJlZmxlY3Rpb25TeXN0ZW0gfSBmcm9tICcuL1JlZmxlY3Rpb25TeXN0ZW0nO1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGlzbid0IGEgc3ByaXRlIGJ1dCBjYW4gc3RpbGwgYmUgcmVmbGVjdGVkXG4gKlxuICogVGhpcyBvYmplY3QgaXMgcmVhZCBldmVyeSBmcmFtZSwgc28gaXQgY2FuIGJlIG1vdmVkIGJ5IGNoYW5naW5nIGl0cyBwb3NpdGlvblxuICovXG5leHBvcnQgdHlwZSBSZWZsZWN0aW9uT2JqZWN0ID0gUmVjdGFuZ2xlICYge1xuICAvKipcbiAgICogVGhlIGltYWdlIGZvciB0aGlzIG9iamVjdCwgdGhpcyBpcyBzdHJldGNoZWQgdG8gZml0IHRoZSByZWN0YW5nbGVcbiAgICovXG4gIGltYWdlPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIERyYXcgdGhpcyBvYmplY3QgaW4gd29ybGQgY29vcmRpbmF0ZXMsIHRoaXMgaXMgdXNlZCBpbnN0ZWFkIG9mIGBpbWFnZWBcbiAgICovXG4gIGRyYXc/OiAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IHR5cGUgUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzID0ge1xuICAvKipcbiAgICogSG93IGZhciB0aGUgb2JqZWN0J3MgZmVldCBhcmUgYWJvdmUgdGhlIGJvdHRvbSBlZGdlIG9mIGl0cyByZWN0YW5nbGUsIHRoaXNcbiAgICogaXMgdXNlZnVsIGlmIGFuIGltYWdlIGhhcyBzb21lIGVtcHR5IHNwYWNlIHVuZGVybmVhdGggdGhlIG9iamVjdFxuICAgKi9cbiAgZm9vdE9mZnNldD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHRoaXMgc291cmNlIGFwcGVhciBpbiBmbG9vcnM/XG4gICAqL1xuICBmbG9vcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIHNvdXJjZSBhcHBlYXIgaW4gd2FsbHM/XG4gICAqL1xuICB3YWxsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hpY2ggd2F5IGEgc3ByaXRlIGFwcGVhcnMgdG8gYmUgZmFjaW5nIGluIGEgd2FsbCwgZm9yIGVhY2ggZGlyZWN0aW9uIHRoYXRcbiAgICogaXQgY291bGQgYmUgZmFjaW5nLiBEaXJlY3Rpb25zIHRoYXQgYXJlbid0IGluIHRoaXMgbGlzdCB3aWxsIHN0YXkgdGhlIHNhbWVcbiAgICpcbiAgICogV2FsbHMgZmFjZSB0aGUgY2FtZXJhLCBzbyB0aGlzIHNob3VsZCBzd2FwIGRpcmVjdGlvbnMgd2hpY2ggcG9pbnQgdG93YXJkc1xuICAgKiBhbmQgYXdheSBmcm9tIHRoZSBjYW1lcmEuIFRoZSBkZWZhdWx0IHN3YXBzIG5vcnRoIGFuZCBzb3V0aCwgYW5kIHVwIGFuZFxuICAgKiBkb3duXG4gICAqL1xuICB3YWxsRGlyZWN0aW9ucz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFRoZSBpbWFnZSBmb3IgYW4gb2JqZWN0IHdoZW4gaXQncyBzZWVuIGluIGEgd2FsbCwgdGhpcyBzaG91bGQgc2hvdyB0aGVcbiAgICogb3Bwb3NpdGUgc2lkZSBvZiB0aGUgb2JqZWN0LiBJZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBvYmplY3QgbG9va3MgdGhlXG4gICAqIHNhbWUgYXMgaXQgZG9lcyBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHdhbGxJbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xufTtcblxuZXhwb3J0IHR5cGUgUmVmbGVjdGlvblNvdXJjZU9wdGlvbnMgPSBSZWZsZWN0aW9uU291cmNlU2V0dGluZ3MgJlxuICAoeyBzcHJpdGU6IFNwcml0ZSB9IHwgeyBvYmplY3Q6IFJlZmxlY3Rpb25PYmplY3QgfSk7XG5cbi8qKlxuICogU29tZXRoaW5nIHRoYXQgYXBwZWFycyBpbiBmbG9vcnMgYW5kIHdhbGxzIHRoYXQgYXJlIHJlZmxlY3RpdmVcbiAqL1xuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25Tb3VyY2Uge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1dBTExfRElSRUNUSU9OUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBub3J0aDogJ3NvdXRoJyxcbiAgICBzb3V0aDogJ25vcnRoJyxcbiAgICB1cDogJ2Rvd24nLFxuICAgIGRvd246ICd1cCcsXG4gIH07XG5cbiAgcHVibGljIHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlIHwgbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IG9iamVjdDogUmVmbGVjdGlvbk9iamVjdCB8IG51bGw7XG5cbiAgcHVibGljIGZvb3RPZmZzZXQ6IG51bWJlcjtcbiAgcHVibGljIGZsb29yOiBib29sZWFuO1xuICBwdWJsaWMgd2FsbDogYm9vbGVhbjtcbiAgcHVibGljIHdhbGxEaXJlY3Rpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBwdWJsaWMgd2FsbEltYWdlOiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogV29ybGQgeS1wb3NpdGlvbiB3aGVyZSB0aGlzIHNvdXJjZSBtZWV0cyB0aGUgc3VyZmFjZSBvZiBzb21lIHdhdGVyLCBvciBudWxsXG4gICAqIGlmIGl0IGlzbid0IGluIHdhdGVyXG4gICAqXG4gICAqIE9ubHkgdGhlIHBhcnQgYWJvdmUgdGhpcyBsaW5lIGlzIHJlZmxlY3RlZCwgYW5kIGl0J3MgcmVmbGVjdGVkIGFyb3VuZCB0aGlzXG4gICAqIGxpbmUgaW5zdGVhZCBvZiBhcm91bmQgdGhlIHNvdXJjZSdzIGZlZXRcbiAgICovXG4gIHB1YmxpYyB3YXRlcmxpbmU6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zXG4gICkge1xuICAgIHRoaXMucmVmbGVjdGlvbnMgPSByZWZsZWN0aW9ucztcbiAgICB0aGlzLnNwcml0ZSA9ICdzcHJpdGUnIGluIG9wdGlvbnMgPyBvcHRpb25zLnNwcml0ZSA6IG51bGw7XG4gICAgdGhpcy5vYmplY3QgPSAnb2JqZWN0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5vYmplY3QgOiBudWxsO1xuICAgIHRoaXMuZm9vdE9mZnNldCA9IG9wdGlvbnMuZm9vdE9mZnNldCA/PyAwO1xuICAgIHRoaXMuZmxvb3IgPSBvcHRpb25zLmZsb29yID8/IHRydWU7XG4gICAgdGhpcy53YWxsID0gb3B0aW9ucy53YWxsID8/IHRydWU7XG4gICAgdGhpcy53YWxsRGlyZWN0aW9ucyA9XG4gICAgICBvcHRpb25zLndhbGxEaXJlY3Rpb25zID8/IFJlZmxlY3Rpb25Tb3VyY2UuREVGQVVMVF9XQUxMX0RJUkVDVElPTlM7XG4gICAgdGhpcy53YWxsSW1hZ2UgPSBvcHRpb25zLndhbGxJbWFnZSA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcmVhIGNvdmVyZWQgYnkgdGhpcyBzb3VyY2UgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwdWJsaWMgZ2V0IGJvdW5kcygpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiB0aGlzLnNwcml0ZSA/IHNwcml0ZUJvdW5kcyh0aGlzLnNwcml0ZSkgOiB0aGlzLm9iamVjdCE7XG4gIH1cblxuICAvKipcbiAgICogV2hlcmUgdGhpcyBzb3VyY2UgbWVldHMgdGhlIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGdldCBmb290KCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICByZXR1cm4gcG9zaXRpb24ueSArIHNpemUueSAtIHRoaXMuZm9vdE9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbGluZSB0aGF0IHRoaXMgc291cmNlIGlzIHJlZmxlY3RlZCBhcm91bmQgaW4gYSBmbG9vclxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZmxvb3JBeGlzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2F0ZXJsaW5lID8/IHRoaXMuZm9vdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXJlYSBjb3ZlcmVkIGJ5IHRoaXMgc291cmNlIHdoZW4gaXQncyByZWZsZWN0ZWQgaW4gYSBmbG9vclxuICAgKi9cbiAgcHVibGljIGdldCBmbG9vckJvdW5kcygpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMuYm91bmRzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKHBvc2l0aW9uLngsIHRoaXMuZmxvb3JBeGlzICogMiAtIChwb3NpdGlvbi55ICsgc2l6ZS55KSksXG4gICAgICBzaXplLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFyZWEgY292ZXJlZCBieSB0aGlzIHNvdXJjZSB3aGVuIGl0J3MgcmVmbGVjdGVkIGluIGEgd2FsbFxuICAgKi9cbiAgcHVibGljIHdhbGxCb3VuZHMod2FsbEZvb3Q6IG51bWJlcik6IFJlY3RhbmdsZSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIocG9zaXRpb24ueCwgcG9zaXRpb24ueSArICh3YWxsRm9vdCAtIHRoaXMuZm9vdCkgKiAyKSxcbiAgICAgIHNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgc291cmNlJ3MgcmVmbGVjdGlvbiBpbiBhIGZsb29yXG4gICAqXG4gICAqIEdvaW5nIGJlbG93IHRoZSBmbG9vciBkb2Vzbid0IGNoYW5nZSB3aGVyZSBzb21ldGhpbmcncyBmZWV0IGFyZSwgc28gdGhlXG4gICAqIHJlZmxlY3Rpb24gaXMgZmxpcHBlZCB1cHNpZGUtZG93biBhcm91bmQgaXRzIGZlZXRcbiAgICovXG4gIHB1YmxpYyBkcmF3SW5GbG9vcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLCB0aGlzLmZsb29yQXhpcyAqIDIpO1xuICAgIGNvbnRleHQuc2NhbGUoMSwgLTEpO1xuXG4gICAgaWYgKHRoaXMud2F0ZXJsaW5lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnRleHQucmVjdChcbiAgICAgICAgcG9zaXRpb24ueCxcbiAgICAgICAgcG9zaXRpb24ueSxcbiAgICAgICAgc2l6ZS54LFxuICAgICAgICB0aGlzLndhdGVybGluZSAtIHBvc2l0aW9uLnlcbiAgICAgICk7XG4gICAgICBjb250ZXh0LmNsaXAoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGlzIHNvdXJjZSdzIHJlZmxlY3Rpb24gaW4gYSB3YWxsXG4gICAqXG4gICAqIFRoZSByZWZsZWN0aW9uIGlzIGFzIGZhciBiZWhpbmQgdGhlIHdhbGwgYXMgdGhpcyBzb3VyY2UgaXMgaW4gZnJvbnQgb2YgaXQsXG4gICAqIHNvIGl0J3MgdGhlIHNhbWUgd2F5IHVwIGJ1dCBmdXJ0aGVyIHVwIHRoZSBzY3JlZW4sIGFuZCB3ZSBjYW4gc2VlIHRoZSBzaWRlXG4gICAqIG9mIHRoaXMgc291cmNlIHRoYXQgZmFjZXMgdGhlIHdhbGxcbiAgICovXG4gIHB1YmxpYyBkcmF3SW5XYWxsKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgd2FsbEZvb3Q6IG51bWJlcikge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKDAsICh3YWxsRm9vdCAtIHRoaXMuZm9vdCkgKiAyKTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdGhpcy5kcmF3U3ByaXRlSW5XYWxsKGNvbnRleHQsIHRoaXMuc3ByaXRlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMud2FsbEltYWdlKSB7XG4gICAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHRoaXMud2FsbEltYWdlLFxuICAgICAgICBwb3NpdGlvbi54LFxuICAgICAgICBwb3NpdGlvbi55LFxuICAgICAgICBzaXplLngsXG4gICAgICAgIHNpemUueVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3U3ByaXRlSW5XYWxsKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc3ByaXRlOiBTcHJpdGUpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPVxuICAgICAgdGhpcy53YWxsRGlyZWN0aW9uc1tzcHJpdGUuZGlyZWN0aW9uXSA/PyBzcHJpdGUuZGlyZWN0aW9uO1xuXG4gICAgLy8gVGhlIHNwcml0ZSBjYW4gb25seSBkcmF3IGl0c2VsZiBmYWNpbmcgaXRzIGN1cnJlbnQgZGlyZWN0aW9uXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gc3ByaXRlLmRpcmVjdGlvbikge1xuICAgICAgc3ByaXRlLmRyYXcoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSBzcHJpdGUuZ2V0SW1hZ2UoZGlyZWN0aW9uKTtcbiAgICBpZiAoIWltYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC50cmFuc2xhdGUoc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnNjYWxlKHNwcml0ZS5zY2FsZSwgc3ByaXRlLnNjYWxlKTtcbiAgICBjb250ZXh0LnJvdGF0ZShzcHJpdGUucm90YXRpb24pO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgaW1hZ2UsXG4gICAgICAtc3ByaXRlLm9yaWdpbi54LFxuICAgICAgLXNwcml0ZS5vcmlnaW4ueSxcbiAgICAgIGltYWdlLndpZHRoLFxuICAgICAgaW1hZ2UuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLmRyYXcoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSwgaW1hZ2UsIGRyYXcgfSA9IHRoaXMub2JqZWN0ITtcblxuICAgIGlmIChkcmF3KSB7XG4gICAgICBkcmF3KGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoaW1hZ2UpIHtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLngsIHNpemUueSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHNvdXJjZSBmcm9tIHRoZSByZWZsZWN0aW9uIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zLnJlbW92ZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRnJhbWUsXG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIFJlY3RhbmdsZSxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlcixcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1JlZmxlY3Rpb25SZWNlaXZlcic7XG5pbXBvcnQgeyBSZWZsZWN0aW9uU291cmNlLCBSZWZsZWN0aW9uU291cmNlT3B0aW9ucyB9IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5cbi8qKlxuICogUmVuZGVycyBmbG9vciBhbmQgd2FsbCByZWZsZWN0aW9uc1xuICpcbiAqIFJlZmxlY3Rpb25zIGFyZSBkcmF3biBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY2VuZSwgc28gdGhpcyBoYXMgdG8gYmUgY2FsbGVkIGluXG4gKiBzZXZlcmFsIHN0ZXBzLiBTZWUgYFdvcmxkYCBmb3IgaG93IHRoaXMgZml0cyB0b2dldGhlciB3aXRoIGV2ZXJ5dGhpbmcgZWxzZVxuICpcbiAqIDEuIENhbGwgYHByZXBhcmUoKWAgYXQgdGhlIHN0YXJ0IG9mIGVhY2ggZnJhbWVcbiAqIDIuIERyYXcgdGhlIGdyb3VuZFxuICogMy4gQ2FsbCBgZHJhd0Zsb29yKClgXG4gKiA0LiBEcmF3IHdhbGxzIGFuZCBhY3RvcnMsIGNhbGxpbmcgYGRyYXcoKWAgb24gZWFjaCB3YWxsIHJlY2VpdmVyIGFzIHNvb24gYXNcbiAqICAgIGl0cyB3YWxsIGhhcyBiZWVuIGRyYXduXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHByaXZhdGUgc291cmNlczogUmVmbGVjdGlvblNvdXJjZVtdID0gW107XG4gIHByaXZhdGUgZmxvb3JSZWNlaXZlcnM6IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSB3YWxsUmVjZWl2ZXJzOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyW10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIHNjcmVlbi1zaXplZCBjYW52YXNlcyB0aGF0IHJlZmxlY3Rpb25zIGFyZSBkcmF3biBpbnRvXG4gICAqXG4gICAqIGBmbG9vclNvdXJjZXNDYW52YXNgIHNob3dzIGV2ZXJ5IHNvdXJjZSByZWZsZWN0ZWQgaW4gdGhlIGZsb29yLCBhcyBpZiB0aGVcbiAgICogd2hvbGUgZmxvb3Igd2FzIHJlZmxlY3RpdmVcbiAgICovXG4gIHByaXZhdGUgZmxvb3JTb3VyY2VzQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgZmxvb3JTb3VyY2VzQ2FudmFzID0gdGhpcy5mbG9vclNvdXJjZXNDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIGZsb29yQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwcml2YXRlIHdhbGxDb250ZXh0ID0gUmVmbGVjdGlvblN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG5cbiAgcHJpdmF0ZSBmcmFtZTogRnJhbWUgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBmbG9vclNvdXJjZXNSZWFkeSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBZGQgc29tZXRoaW5nIHRoYXQgYXBwZWFycyBpbiByZWZsZWN0aW9uc1xuICAgKi9cbiAgcHVibGljIGFkZFNvdXJjZShvcHRpb25zOiBSZWZsZWN0aW9uU291cmNlT3B0aW9ucyk6IFJlZmxlY3Rpb25Tb3VyY2Uge1xuICAgIGNvbnN0IHNvdXJjZSA9IG5ldyBSZWZsZWN0aW9uU291cmNlKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuc291cmNlcy5wdXNoKHNvdXJjZSk7XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlZmxlY3RpdmUgcGFydCBvZiB0aGUgZmxvb3JcbiAgICovXG4gIHB1YmxpYyBhZGRGbG9vclJlY2VpdmVyKFxuICAgIG9wdGlvbnM6IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9uc1xuICApOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlciB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBuZXcgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5mbG9vclJlY2VpdmVycy5wdXNoKHJlY2VpdmVyKTtcblxuICAgIHJldHVybiByZWNlaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWZsZWN0aXZlIHBhcnQgb2YgYSB3YWxsXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbFJlY2VpdmVyKFxuICAgIG9wdGlvbnM6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zXG4gICk6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gbmV3IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLnB1c2gocmVjZWl2ZXIpO1xuXG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHNvdXJjZSBvciByZWNlaXZlciBmcm9tIHRoZSByZWZsZWN0aW9uIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZShvYmplY3Q6IFJlZmxlY3Rpb25Tb3VyY2UgfCBSZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSB0aGlzLnNvdXJjZXMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLmZsb29yUmVjZWl2ZXJzID0gdGhpcy5mbG9vclJlY2VpdmVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycyA9IHRoaXMud2FsbFJlY2VpdmVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCByZWFkeSB0byBkcmF3IHJlZmxlY3Rpb25zIGZvciBhIGZyYW1lXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZShmcmFtZTogRnJhbWUpIHtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5mbG9vclNvdXJjZXNSZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBgZmxvb3JTb3VyY2VzQ2FudmFzYCBpcyB1cCB0byBkYXRlIGZvciB0aGlzIGZyYW1lXG4gICAqL1xuICBwdWJsaWMgZHJhd0Zsb29yU291cmNlcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgY29uc3QgeyBmcmFtZSB9ID0gdGhpcztcbiAgICBpZiAoIWZyYW1lIHx8IHRoaXMuZmxvb3JTb3VyY2VzUmVhZHkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZsb29yU291cmNlc0NhbnZhcztcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy52aXNpYmxlQXJlYShmcmFtZSk7XG4gICAgY29uc3Qgc291cmNlcyA9IHRoaXMuc29ydGVkU291cmNlcyhcbiAgICAgIHRoaXMuc291cmNlcy5maWx0ZXIoXG4gICAgICAgIHNvdXJjZSA9PlxuICAgICAgICAgIHNvdXJjZS5mbG9vciAmJiByZWN0YW5nbGVzSW50ZXJzZWN0KHNvdXJjZS5mbG9vckJvdW5kcywgdmlzaWJsZSlcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5mbG9vclNvdXJjZXNDb250ZXh0LCBmcmFtZSk7XG4gICAgc291cmNlcy5mb3JFYWNoKHNvdXJjZSA9PiBzb3VyY2UuZHJhd0luRmxvb3IodGhpcy5mbG9vclNvdXJjZXNDb250ZXh0KSk7XG4gICAgdGhpcy5mbG9vclNvdXJjZXNSZWFkeSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5mbG9vclNvdXJjZXNDYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIGEgc2NyZWVuLXNpemVkIGNvbnRleHQgbWF0Y2hlcyB0aGUgZnJhbWUgYW5kIGNsZWFyIGl0LCByZWFkeSBmb3JcbiAgICogZHJhd2luZyBpbiB3b3JsZCBjb29yZGluYXRlc1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldENvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcmFtZTogRnJhbWUpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gY29udGV4dDtcbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSBmcmFtZS5zY3JlZW4ueCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBmcmFtZS5zY3JlZW4ueSkge1xuICAgICAgY2FudmFzLndpZHRoID0gZnJhbWUuc2NyZWVuLng7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZnJhbWUuc2NyZWVuLnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZyYW1lLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICAgIGZyYW1lLmNhbWVyYS5zZXRUcmFuc2Zvcm1zKGNvbnRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpYmxlQXJlYSh7IGNhbWVyYSB9OiBGcmFtZSk6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIGludGVydmFsVG9SZWN0YW5nbGUoY2FtZXJhLmJvdW5kcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNvdXJjZXMgaW4gdGhlIG9yZGVyIHRoYXQgdGhleSBzaG91bGQgYmUgZHJhd24sIHNvdXJjZXMgd2l0aCBmZWV0XG4gICAqIGZ1cnRoZXIgZG93biB0aGUgc2NyZWVuIGFyZSBkcmF3biBsYXN0XG4gICAqL1xuICBwcml2YXRlIHNvcnRlZFNvdXJjZXMoc291cmNlczogUmVmbGVjdGlvblNvdXJjZVtdKTogUmVmbGVjdGlvblNvdXJjZVtdIHtcbiAgICByZXR1cm4gc291cmNlc1xuICAgICAgLm1hcChzb3VyY2UgPT4gKHsgc291cmNlLCBmb290OiBzb3VyY2UuZm9vdCB9KSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmZvb3QgLSBiLmZvb3QpXG4gICAgICAubWFwKCh7IHNvdXJjZSB9KSA9PiBzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgcmVmbGVjdGlvbnMgb250byB0aGUgZmxvb3IsIHRoaXMgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBkcmF3aW5nIHRoZVxuICAgKiBncm91bmQgYW5kIGJlZm9yZSBkcmF3aW5nIGFueXRoaW5nIHRoYXQgc3RhbmRzIG9uIGl0XG4gICAqL1xuICBwdWJsaWMgZHJhd0Zsb29yKCkge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLnZpc2libGVBcmVhKGZyYW1lKTtcbiAgICBjb25zdCByZWNlaXZlcnMgPSB0aGlzLmZsb29yUmVjZWl2ZXJzLmZpbHRlcihyZWNlaXZlciA9PlxuICAgICAgcmVjdGFuZ2xlc0ludGVyc2VjdChyZWNlaXZlciwgdmlzaWJsZSlcbiAgICApO1xuICAgIGlmIChyZWNlaXZlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3Rmxvb3JTb3VyY2VzKCk7XG5cbiAgICAvLyBTdGFydCB3aXRoIHRoZSBzaGFwZSBvZiB0aGUgcmVjZWl2ZXJzIGFuZCBrZWVwIHRoZSBzb3VyY2VzIGluc2lkZSBpdCxcbiAgICAvLyB0aGlzIHdheSBzb3VyY2VzIGRvbid0IHNob3cgdGhyb3VnaCBlYWNoIG90aGVyIHdoZW4gc3RyZW5ndGggaXMgYmVsb3cgMVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmZsb29yQ29udGV4dDtcbiAgICB0aGlzLnJlc2V0Q29udGV4dChjb250ZXh0LCBmcmFtZSk7XG4gICAgcmVjZWl2ZXJzLmZvckVhY2gocmVjZWl2ZXIgPT4ge1xuICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IHJlY2VpdmVyLnN0cmVuZ3RoO1xuICAgICAgcmVjZWl2ZXIuZHJhd01hc2soY29udGV4dCk7XG4gICAgfSk7XG4gICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLWluJztcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmZsb29yU291cmNlc0NhbnZhcywgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgZnJhbWUuY29udGV4dC5zYXZlKCk7XG4gICAgZnJhbWUuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgZnJhbWUuY29udGV4dC5kcmF3SW1hZ2UoY29udGV4dC5jYW52YXMsIDAsIDApO1xuICAgIGZyYW1lLmNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHJlZmxlY3Rpb25zIGluIGEgd2FsbCByZWNlaXZlclxuICAgKi9cbiAgcHVibGljIGRyYXdXYWxsUmVjZWl2ZXIoXG4gICAgcmVjZWl2ZXI6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gICAgdGFyZ2V0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKSB7XG4gICAgY29uc3QgeyBmcmFtZSB9ID0gdGhpcztcbiAgICBpZiAoIWZyYW1lIHx8ICFyZWN0YW5nbGVzSW50ZXJzZWN0KHJlY2VpdmVyLCB0aGlzLnZpc2libGVBcmVhKGZyYW1lKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHRoaW5ncyBpbiBmcm9udCBvZiB0aGUgd2FsbCBjYW4gYmUgc2VlbiBpbiBpdFxuICAgIGNvbnN0IHNvdXJjZXMgPSB0aGlzLnNvcnRlZFNvdXJjZXMoXG4gICAgICB0aGlzLnNvdXJjZXMuZmlsdGVyKFxuICAgICAgICBzb3VyY2UgPT5cbiAgICAgICAgICBzb3VyY2Uud2FsbCAmJlxuICAgICAgICAgIHNvdXJjZS5mb290ID4gcmVjZWl2ZXIuZm9vdCAmJlxuICAgICAgICAgIHJlY3RhbmdsZXNJbnRlcnNlY3Qoc291cmNlLndhbGxCb3VuZHMocmVjZWl2ZXIuZm9vdCksIHJlY2VpdmVyKVxuICAgICAgKVxuICAgICk7XG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMud2FsbENvbnRleHQ7XG4gICAgdGhpcy5yZXNldENvbnRleHQoY29udGV4dCwgZnJhbWUpO1xuXG4gICAgLy8gVGhlIGNsb3Nlc3QgdGhpbmcgdG8gdGhlIHdhbGwgaXMgYWxzbyB0aGUgY2xvc2VzdCB0aGluZyB0byB1cyB3aGVuIHdlXG4gICAgLy8gbG9vayBpbnRvIHRoZSByZWZsZWN0aW9uLCBzbyBzb3VyY2VzIGFyZSBkcmF3biBpbiByZXZlcnNlIG9yZGVyXG4gICAgc291cmNlc1xuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goc291cmNlID0+IHNvdXJjZS5kcmF3SW5XYWxsKGNvbnRleHQsIHJlY2VpdmVyLmZvb3QpKTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICByZWNlaXZlci5kcmF3TWFzayhjb250ZXh0KTtcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG5cbiAgICB0YXJnZXQuc2F2ZSgpO1xuICAgIHRhcmdldC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgdGFyZ2V0Lmdsb2JhbEFscGhhID0gcmVjZWl2ZXIuc3RyZW5ndGg7XG4gICAgdGFyZ2V0LmRyYXdJbWFnZShjb250ZXh0LmNhbnZhcywgMCwgMCk7XG4gICAgdGFyZ2V0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IHtcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlcixcbn0gZnJvbSAnLi9SZWZsZWN0aW9uUmVjZWl2ZXInO1xuZXhwb3J0IHR5cGUge1xuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gIFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1JlZmxlY3Rpb25SZWNlaXZlcic7XG5leHBvcnQgeyBSZWZsZWN0aW9uU291cmNlIH0gZnJvbSAnLi9SZWZsZWN0aW9uU291cmNlJztcbmV4cG9ydCB0eXBlIHtcbiAgUmVmbGVjdGlvbk9iamVjdCxcbiAgUmVmbGVjdGlvblNvdXJjZU9wdGlvbnMsXG4gIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyxcbn0gZnJvbSAnLi9SZWZsZWN0aW9uU291cmNlJztcbmV4cG9ydCB7IFJlZmxlY3Rpb25TeXN0ZW0gfSBmcm9tICcuL1JlZmxlY3Rpb25TeXN0ZW0nO1xuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5cbmV4cG9ydCB0eXBlIFJpcHBsZU9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgY292ZXJlZCBieSB0aGUgZGlzdHVyYmFuY2UsIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBoYXJkIHRoZSB3YXRlciBpcyBwdXNoZWQsIHRoaXMgY2FuIGJlIG5lZ2F0aXZlXG4gICAqL1xuICBzdHJlbmd0aD86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQSBncmlkIG9mIHdhdGVyIGhlaWdodHMgdGhhdCBzcHJlYWRzIGRpc3R1cmJhbmNlcyBvdXQgYXMgcmlwcGxlc1xuICpcbiAqIFRoaXMgdXNlcyB0aGUgd2F2ZSBlcXVhdGlvbiwgZWFjaCBjZWxsIGlzIHB1bGxlZCB0b3dhcmRzIHRoZSBhdmVyYWdlIG9mIGl0c1xuICogbmVpZ2hib3VycyBhbmQga2VlcHMgbW92aW5nIGFmdGVyd2FyZHMuIFRoZXJlJ3MgYSBmaXhlZCB0aW1lIHN0ZXAgc28gdGhhdFxuICogcmlwcGxlcyBiZWhhdmUgdGhlIHNhbWUgd2F5IGF0IGFueSBmcmFtZSByYXRlLCBhbmQgbm90aGluZyBpcyBjYWxjdWxhdGVkXG4gKiB3aGlsZSB0aGUgd2F0ZXIgaXMgc3RpbGxcbiAqL1xuZXhwb3J0IGNsYXNzIFJpcHBsZUZpZWxkIHtcbiAgLyoqXG4gICAqIFJpcHBsZXMgYXJlIHN0b3BwZWQgd2hlbiB0aGV5J3JlIHNtYWxsZXIgdGhhbiB0aGlzXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNSU5fSEVJR0hUID0gMC4wMDI7XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIG9mIGl0cyBoZWlnaHQgdGhlIHdhdGVyIGtlZXBzIGVhY2ggc3RlcCwgd2l0aG91dCB0aGlzIGEgc3BsYXNoXG4gICAqIHdvdWxkIHJhaXNlIHRoZSBsZXZlbCBvZiB0aGUgd2F0ZXIgZm9yZXZlciBiZWNhdXNlIHRoZSB3YXZlcyBvbmx5IG1vdmVcbiAgICogd2F0ZXIgYXJvdW5kXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBIRUlHSFRfUkVUQUlORUQgPSAwLjk5NTtcblxuICAvKipcbiAgICogSGlnaGVyIHNwZWVkcyB0aGFuIHRoaXMgbWFrZSB0aGUgc2ltdWxhdGlvbiB1bnN0YWJsZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1dBVkVfTlVNQkVSID0gMC41O1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVElNRV9TVEVQID0gMSAvIDYwO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZ3JpZCwgaW4gY2VsbHNcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBzaXplOiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBSR0JBIGRhdGEgd2l0aCB0aGUgc2xvcGUgb2YgdGhlIHdhdGVyIGluIHRoZSByZWQgYW5kIGdyZWVuIGNoYW5uZWxzLCBhbmRcbiAgICogdGhlIGhlaWdodCBvZiB0aGUgd2F0ZXIgaW4gdGhlIGJsdWUgY2hhbm5lbFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHBpeGVsczogVWludDhBcnJheTtcblxuICAvKipcbiAgICogSXMgdGhlIHdhdGVyIG1vdmluZz9cbiAgICovXG4gIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGNlbGxTaXplOiB2ZWMyO1xuICBwcml2YXRlIGhlaWdodDogRmxvYXQzMkFycmF5O1xuICBwcml2YXRlIHByZXZpb3VzOiBGbG9hdDMyQXJyYXk7XG5cbiAgLyoqXG4gICAqIENlbGxzIHdpdGggYSB2YWx1ZSBvZiAxIGFyZSBsYW5kLCB3aGljaCBzdG9wcyByaXBwbGVzXG4gICAqL1xuICBwcml2YXRlIGJsb2NrZWQ6IFVpbnQ4QXJyYXkgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHRpbWU6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IHZlYzIsIGNlbGxTaXplOiB2ZWMyKSB7XG4gICAgY29uc3QgY2VsbHMgPSBzaXplLnggKiBzaXplLnk7XG5cbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweShzaXplKTtcbiAgICB0aGlzLmNlbGxTaXplID0gdmVjMi5jcHkoY2VsbFNpemUpO1xuICAgIHRoaXMuaGVpZ2h0ID0gbmV3IEZsb2F0MzJBcnJheShjZWxscyk7XG4gICAgdGhpcy5wcmV2aW91cyA9IG5ldyBGbG9hdDMyQXJyYXkoY2VsbHMpO1xuICAgIHRoaXMucGl4ZWxzID0gbmV3IFVpbnQ4QXJyYXkoY2VsbHMgKiA0KTtcbiAgICB0aGlzLnVwZGF0ZVBpeGVscygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGljaCBjZWxscyBhcmUgbGFuZFxuICAgKi9cbiAgcHVibGljIHNldEJsb2NrZWQoYmxvY2tlZDogVWludDhBcnJheSkge1xuICAgIHRoaXMuYmxvY2tlZCA9IGJsb2NrZWQ7XG4gIH1cblxuICAvKipcbiAgICogUHVzaCB0aGUgd2F0ZXIgYXQgYSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdG9wLWxlZnQgb2YgdGhlIGdyaWQsIG1lYXN1cmVkXG4gICAqIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICBwdWJsaWMgZGlzdHVyYihwb3NpdGlvbjogdmVjMiwgeyByYWRpdXMgPSA2LCBzdHJlbmd0aCA9IDEgfTogUmlwcGxlT3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2l6ZSwgY2VsbFNpemUgfSA9IHRoaXM7XG4gICAgY29uc3QgcmVhY2ggPSB2ZWMyKHJhZGl1cyAqIDIsIHJhZGl1cyAqIDIpO1xuICAgIGNvbnN0IGZpcnN0ID0gdmVjMi5tYXAodmVjMi5zdWIocG9zaXRpb24sIHJlYWNoKSwgTWF0aC5mbG9vcik7XG4gICAgY29uc3QgbGFzdCA9IHZlYzIubWFwKHZlYzIuYWRkKHBvc2l0aW9uLCByZWFjaCksIE1hdGguY2VpbCk7XG5cbiAgICBjb25zdCBzdGFydFggPSBNYXRoLm1heChNYXRoLmZsb29yKGZpcnN0LnggLyBjZWxsU2l6ZS54KSwgMCk7XG4gICAgY29uc3QgZW5kWCA9IE1hdGgubWluKE1hdGguY2VpbChsYXN0LnggLyBjZWxsU2l6ZS54KSwgc2l6ZS54IC0gMSk7XG4gICAgY29uc3Qgc3RhcnRZID0gTWF0aC5tYXgoTWF0aC5mbG9vcihmaXJzdC55IC8gY2VsbFNpemUueSksIDApO1xuICAgIGNvbnN0IGVuZFkgPSBNYXRoLm1pbihNYXRoLmNlaWwobGFzdC55IC8gY2VsbFNpemUueSksIHNpemUueSAtIDEpO1xuXG4gICAgZm9yIChsZXQgeSA9IHN0YXJ0WTsgeSA8PSBlbmRZOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPD0gZW5kWDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gKHggKyAwLjUpICogY2VsbFNpemUueCAtIHBvc2l0aW9uLng7XG4gICAgICAgIGNvbnN0IGR5ID0gKHkgKyAwLjUpICogY2VsbFNpemUueSAtIHBvc2l0aW9uLnk7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9XG4gICAgICAgICAgc3RyZW5ndGggKiBNYXRoLmV4cCgtKGR4ICogZHggKyBkeSAqIGR5KSAvIChyYWRpdXMgKiByYWRpdXMpKTtcblxuICAgICAgICB0aGlzLmhlaWdodFt4ICsgeSAqIHNpemUueF0gKz0gYW1vdW50O1xuICAgICAgICB0aGlzLnByZXZpb3VzW3ggKyB5ICogc2l6ZS54XSArPSBhbW91bnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHNpbXVsYXRpb24gZm9yd2FyZFxuICAgKlxuICAgKiBgc3BlZWRgIGlzIGhvdyBmYXIgcmlwcGxlcyB0cmF2ZWwgZWFjaCBzZWNvbmQsIGluIHdvcmxkIHVuaXRzLCBhbmRcbiAgICogYGRhbXBpbmdgIGlzIGhvdyBtdWNoIG9mIHRoZWlyIG1vdmVtZW50IGlzIGtlcHQgZWFjaCBzdGVwXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIsIHNwZWVkOiBudW1iZXIsIGRhbXBpbmc6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWUgKz0gZHQ7XG5cbiAgICAvLyBEb24ndCB0cnkgdG8gY2F0Y2ggdXAgYWZ0ZXIgYSBsb25nIHBhdXNlXG4gICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbihNYXRoLmZsb29yKHRoaXMudGltZSAvIFJpcHBsZUZpZWxkLlRJTUVfU1RFUCksIDQpO1xuICAgIHRoaXMudGltZSAlPSBSaXBwbGVGaWVsZC5USU1FX1NURVA7XG5cbiAgICBjb25zdCBjZWxsID0gTWF0aC5taW4odGhpcy5jZWxsU2l6ZS54LCB0aGlzLmNlbGxTaXplLnkpO1xuICAgIGNvbnN0IHdhdmUgPSBNYXRoLm1pbihcbiAgICAgIHNwZWVkICogUmlwcGxlRmllbGQuVElNRV9TVEVQIC8gY2VsbCxcbiAgICAgIFJpcHBsZUZpZWxkLk1BWF9XQVZFX05VTUJFUlxuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ZXBzOyBpKyspIHtcbiAgICAgIHRoaXMuc3RlcCh3YXZlICogd2F2ZSwgZGFtcGluZyk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQaXhlbHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RlcCh3YXZlOiBudW1iZXIsIGRhbXBpbmc6IG51bWJlcikge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCBwcmV2aW91cywgYmxvY2tlZCB9ID0gdGhpcztcbiAgICBjb25zdCB7IHg6IGNvbHVtbnMsIHk6IHJvd3MgfSA9IHRoaXMuc2l6ZTtcblxuICAgIGxldCBsYXJnZXN0ID0gMDtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSsrKSB7XG4gICAgICBjb25zdCB1cCA9IHkgPiAwID8gLWNvbHVtbnMgOiAwO1xuICAgICAgY29uc3QgZG93biA9IHkgPCByb3dzIC0gMSA/IGNvbHVtbnMgOiAwO1xuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHVtbnM7IHgrKykge1xuICAgICAgICBjb25zdCBpID0geCArIHkgKiBjb2x1bW5zO1xuXG4gICAgICAgIGlmIChibG9ja2VkPy5baV0pIHtcbiAgICAgICAgICBwcmV2aW91c1tpXSA9IDA7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZWZ0ID0geCA+IDAgPyAtMSA6IDA7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0geCA8IGNvbHVtbnMgLSAxID8gMSA6IDA7XG4gICAgICAgIGNvbnN0IG5laWdoYm91cnMgPVxuICAgICAgICAgIGhlaWdodFtpICsgbGVmdF0gK1xuICAgICAgICAgIGhlaWdodFtpICsgcmlnaHRdICtcbiAgICAgICAgICBoZWlnaHRbaSArIHVwXSArXG4gICAgICAgICAgaGVpZ2h0W2kgKyBkb3duXTtcblxuICAgICAgICAvLyBUaGUgcHJldmlvdXMgaGVpZ2h0IGlzIG92ZXJ3cml0dGVuIGhlcmUgYmVjYXVzZSB0aGF0J3MgYWxsIHdlIG5lZWRcbiAgICAgICAgLy8gaXQgZm9yLCBzbyB0aGVzZSAyIGFycmF5cyBzd2FwIHJvbGVzIGFmdGVyIGVhY2ggc3RlcFxuICAgICAgICBjb25zdCBuZXh0ID1cbiAgICAgICAgICAoaGVpZ2h0W2ldICtcbiAgICAgICAgICAgIChoZWlnaHRbaV0gLSBwcmV2aW91c1tpXSkgKiBkYW1waW5nICtcbiAgICAgICAgICAgIChuZWlnaGJvdXJzIC0gaGVpZ2h0W2ldICogNCkgKiB3YXZlKSAqXG4gICAgICAgICAgUmlwcGxlRmllbGQuSEVJR0hUX1JFVEFJTkVEO1xuXG4gICAgICAgIHByZXZpb3VzW2ldID0gbmV4dDtcbiAgICAgICAgbGFyZ2VzdCA9IE1hdGgubWF4KGxhcmdlc3QsIE1hdGguYWJzKG5leHQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhlaWdodCA9IHByZXZpb3VzO1xuICAgIHRoaXMucHJldmlvdXMgPSBoZWlnaHQ7XG5cbiAgICBpZiAobGFyZ2VzdCA8IFJpcHBsZUZpZWxkLk1JTl9IRUlHSFQpIHtcbiAgICAgIHRoaXMuaGVpZ2h0LmZpbGwoMCk7XG4gICAgICB0aGlzLnByZXZpb3VzLmZpbGwoMCk7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGl4ZWxzKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCBwaXhlbHMgfSA9IHRoaXM7XG4gICAgY29uc3QgeyB4OiBjb2x1bW5zLCB5OiByb3dzIH0gPSB0aGlzLnNpemU7XG5cbiAgICBjb25zdCBlbmNvZGUgPSAodmFsdWU6IG51bWJlcikgPT5cbiAgICAgIE1hdGgubWluKE1hdGgubWF4KE1hdGgucm91bmQodmFsdWUgKiAxMjcpICsgMTI4LCAwKSwgMjU1KTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSsrKSB7XG4gICAgICBjb25zdCB1cCA9IHkgPiAwID8gLWNvbHVtbnMgOiAwO1xuICAgICAgY29uc3QgZG93biA9IHkgPCByb3dzIC0gMSA/IGNvbHVtbnMgOiAwO1xuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHVtbnM7IHgrKykge1xuICAgICAgICBjb25zdCBpID0geCArIHkgKiBjb2x1bW5zO1xuICAgICAgICBjb25zdCBsZWZ0ID0geCA+IDAgPyAtMSA6IDA7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0geCA8IGNvbHVtbnMgLSAxID8gMSA6IDA7XG5cbiAgICAgICAgcGl4ZWxzW2kgKiA0XSA9IGVuY29kZSgoaGVpZ2h0W2kgKyByaWdodF0gLSBoZWlnaHRbaSArIGxlZnRdKSAvIDIpO1xuICAgICAgICBwaXhlbHNbaSAqIDQgKyAxXSA9IGVuY29kZSgoaGVpZ2h0W2kgKyBkb3duXSAtIGhlaWdodFtpICsgdXBdKSAvIDIpO1xuICAgICAgICBwaXhlbHNbaSAqIDQgKyAyXSA9IGVuY29kZShoZWlnaHRbaV0pO1xuICAgICAgICBwaXhlbHNbaSAqIDQgKyAzXSA9IDI1NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlQ29sb3IgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgRnJhbWUsIEdsQ29udGV4dCwgR2xQcm9ncmFtLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IFdhdGVyUmVnaW9uIH0gZnJvbSAnLi9XYXRlclJlZ2lvbic7XG5pbXBvcnQgd2F0ZXJTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvd2F0ZXIuZnJhZy5nbHNsJyk7XG5cbmVudW0gVGV4dHVyZVVuaXQge1xuICBTY2VuZSxcbiAgUmVmbGVjdGlvbk1hcCxcbiAgTWFzayxcbiAgRGVwdGhNYXAsXG4gIEZsb3dNYXAsXG4gIFdhdmVNYXAsXG4gIE5vaXNlTWFwLFxuICBSaXBwbGVNYXAsXG59XG5cbi8qKlxuICogV2hhdCB0aGUgc2hhZGVyIHNob3VsZCBvdXRwdXQsIHRoZXNlIHZhbHVlcyBhcmUgYWxzbyBpbiB0aGUgc2hhZGVyXG4gKi9cbmV4cG9ydCBlbnVtIFdhdGVyT3V0cHV0IHtcbiAgQ29sb3VyID0gMCxcbiAgTm9ybWFsID0gMSxcbiAgU3BlY3VsYXIgPSAyLFxufVxuXG50eXBlIFJlZ2lvblRleHR1cmVzID0ge1xuICBkZXB0aDogV2ViR0xUZXh0dXJlO1xuICBkZXB0aFZlcnNpb246IG51bWJlcjtcbiAgZmxvdzogV2ViR0xUZXh0dXJlO1xuICBmbG93VmVyc2lvbjogbnVtYmVyO1xuICByaXBwbGVzOiBXZWJHTFRleHR1cmU7XG4gIHJpcHBsZXNVcGxvYWRlZDogYm9vbGVhbjtcbiAgd2F2ZXM6IFdlYkdMVGV4dHVyZSB8IG51bGw7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgd2F0ZXIgdXNpbmcgYSBzaGFyZWQgV2ViR0wgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgV2F0ZXJQYXNzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FWRV9NQVBfU0laRSA9IDI1NjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FWRV9DT1VOVCA9IDMyO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBXQVZFX01BWF9GUkVRVUVOQ1kgPSAxNDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9JU0VfV0FWRV9DT1VOVCA9IDg7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PSVNFX01BWF9GUkVRVUVOQ1kgPSAzO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGTE9XX0NZQ0xFID0gMjtcblxuICBwcml2YXRlIHN0YXRpYyB3YXZlTWFwRGF0YTogVWludDhBcnJheSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBNYWtlIGEgdGlsaW5nIG5vcm1hbCBtYXAgd2l0aCBub2lzZSBpbiB0aGUgYmx1ZSBjaGFubmVsLCB0aGUgbm9ybWFsIG1hcCBpc1xuICAgKiBtYWRlIGZyb20gc2luZSB3YXZlcyB0aGF0IHJlcGVhdCBhIHdob2xlIG51bWJlciBvZiB0aW1lcyBhY3Jvc3MgdGhlIHRleHR1cmVcbiAgICogc28gdGhhdCBpdCB0aWxlcyBwZXJmZWN0bHlcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGdldFdhdmVNYXBEYXRhKCk6IFVpbnQ4QXJyYXkge1xuICAgIGlmIChXYXRlclBhc3Mud2F2ZU1hcERhdGEpIHtcbiAgICAgIHJldHVybiBXYXRlclBhc3Mud2F2ZU1hcERhdGE7XG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IFdhdGVyUGFzcy5XQVZFX01BUF9TSVpFO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShzaXplICogc2l6ZSAqIDQpO1xuICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyKSAvIHNpemU7XG5cbiAgICAvLyBUaGUgdGV4dHVyZXMgc2hvdWxkIGJlIHRoZSBzYW1lIGV2ZXJ5IHRpbWUsIHNvIHRoaXMgdXNlcyBhIHNtYWxsIHJhbmRvbVxuICAgIC8vIG51bWJlciBnZW5lcmF0b3IgaW5zdGVhZCBvZiBNYXRoLnJhbmRvbSgpXG4gICAgbGV0IHNlZWQgPSAxMjM0NTtcbiAgICBjb25zdCByYW5kb20gPSAoKSA9PiB7XG4gICAgICBzZWVkID0gKHNlZWQgKiAxNjgwNykgJSAyMTQ3NDgzNjQ3O1xuXG4gICAgICByZXR1cm4gc2VlZCAvIDIxNDc0ODM2NDc7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVdhdmVzID0gKGNvdW50OiBudW1iZXIsIG1heEZyZXF1ZW5jeTogbnVtYmVyKSA9PlxuICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmcmVxdWVuY3kgPSAoKSA9PlxuICAgICAgICAgIE1hdGgucm91bmQoKHJhbmRvbSgpICogMiAtIDEpICogbWF4RnJlcXVlbmN5KSB8fCAxO1xuICAgICAgICBjb25zdCB4ID0gZnJlcXVlbmN5KCk7XG4gICAgICAgIGNvbnN0IHkgPSBmcmVxdWVuY3koKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBwaGFzZTogcmFuZG9tKCkgKiBNYXRoLlBJICogMixcbiAgICAgICAgICBhbXBsaXR1ZGU6IDEgLyBNYXRoLmh5cG90KHgsIHkpLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBjb25zdCB3YXZlcyA9IGNyZWF0ZVdhdmVzKFxuICAgICAgV2F0ZXJQYXNzLldBVkVfQ09VTlQsXG4gICAgICBXYXRlclBhc3MuV0FWRV9NQVhfRlJFUVVFTkNZXG4gICAgKTtcbiAgICBjb25zdCBub2lzZSA9IGNyZWF0ZVdhdmVzKFxuICAgICAgV2F0ZXJQYXNzLk5PSVNFX1dBVkVfQ09VTlQsXG4gICAgICBXYXRlclBhc3MuTk9JU0VfTUFYX0ZSRVFVRU5DWVxuICAgICk7XG5cbiAgICBjb25zdCBzbG9wZXMgPSBuZXcgRmxvYXQzMkFycmF5KHNpemUgKiBzaXplICogMik7XG4gICAgY29uc3QgaGVpZ2h0cyA9IG5ldyBGbG9hdDMyQXJyYXkoc2l6ZSAqIHNpemUpO1xuICAgIGxldCBsYXJnZXN0U2xvcGUgPSAwO1xuICAgIGxldCBsYXJnZXN0SGVpZ2h0ID0gMDtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemU7IHgrKykge1xuICAgICAgICBjb25zdCBpID0geCArIHkgKiBzaXplO1xuXG4gICAgICAgIGZvciAoY29uc3Qgd2F2ZSBvZiB3YXZlcykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5jb3MoXG4gICAgICAgICAgICAod2F2ZS54ICogeCArIHdhdmUueSAqIHkpICogYW5nbGUgKyB3YXZlLnBoYXNlXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHNsb3Blc1tpICogMl0gKz0gd2F2ZS5hbXBsaXR1ZGUgKiB3YXZlLnggKiB2YWx1ZTtcbiAgICAgICAgICBzbG9wZXNbaSAqIDIgKyAxXSArPSB3YXZlLmFtcGxpdHVkZSAqIHdhdmUueSAqIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCB3YXZlIG9mIG5vaXNlKSB7XG4gICAgICAgICAgaGVpZ2h0c1tpXSArPVxuICAgICAgICAgICAgd2F2ZS5hbXBsaXR1ZGUgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKHdhdmUueCAqIHggKyB3YXZlLnkgKiB5KSAqIGFuZ2xlICsgd2F2ZS5waGFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXJnZXN0U2xvcGUgPSBNYXRoLm1heChcbiAgICAgICAgICBsYXJnZXN0U2xvcGUsXG4gICAgICAgICAgTWF0aC5hYnMoc2xvcGVzW2kgKiAyXSksXG4gICAgICAgICAgTWF0aC5hYnMoc2xvcGVzW2kgKiAyICsgMV0pXG4gICAgICAgICk7XG4gICAgICAgIGxhcmdlc3RIZWlnaHQgPSBNYXRoLm1heChsYXJnZXN0SGVpZ2h0LCBNYXRoLmFicyhoZWlnaHRzW2ldKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplICogc2l6ZTsgaSsrKSB7XG4gICAgICBkYXRhW2kgKiA0XSA9IChzbG9wZXNbaSAqIDJdIC8gbGFyZ2VzdFNsb3BlKSAqIDEyNy41ICsgMTI3LjU7XG4gICAgICBkYXRhW2kgKiA0ICsgMV0gPSAoc2xvcGVzW2kgKiAyICsgMV0gLyBsYXJnZXN0U2xvcGUpICogMTI3LjUgKyAxMjcuNTtcbiAgICAgIGRhdGFbaSAqIDQgKyAyXSA9IChoZWlnaHRzW2ldIC8gbGFyZ2VzdEhlaWdodCkgKiAxMjcuNSArIDEyNy41O1xuICAgICAgZGF0YVtpICogNCArIDNdID0gMjU1O1xuICAgIH1cblxuICAgIFdhdGVyUGFzcy53YXZlTWFwRGF0YSA9IGRhdGE7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgY29udGV4dDogR2xDb250ZXh0O1xuICBwcml2YXRlIGluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBwcm9ncmFtOiBHbFByb2dyYW07XG4gIHByaXZhdGUgc2NlbmVUZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIHByaXZhdGUgcmVmbGVjdGlvblRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgcHJpdmF0ZSB3YXZlVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBwcml2YXRlIHJlZ2lvblRleHR1cmVzID0gbmV3IE1hcDxXYXRlclJlZ2lvbiwgUmVnaW9uVGV4dHVyZXM+KCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRleHQ6IEdsQ29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0Lm9uSW5pdGlhbGlzZShnbCA9PiB0aGlzLmluaXRpYWxpc2UoZ2wpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IG9mIHRoZSBtb3N0IHJlY2VudCBwYXNzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5jYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoYWRlcnMgY2FuIGJlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuY29udGV4dC5hdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpc2UoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSh3YXRlclNoYWRlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignV2F0ZXIgaGFzIGJlZW4gZGlzYWJsZWQnLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjZW5lVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgdGhpcy5yZWZsZWN0aW9uVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgdGhpcy53YXZlVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgdGhpcy5yZWdpb25UZXh0dXJlcyA9IG5ldyBNYXAoKTtcblxuICAgIHRoaXMuY29udGV4dC51cGxvYWREYXRhKFxuICAgICAgVGV4dHVyZVVuaXQuV2F2ZU1hcCxcbiAgICAgIHRoaXMud2F2ZVRleHR1cmUsXG4gICAgICB2ZWMyKFdhdGVyUGFzcy5XQVZFX01BUF9TSVpFKSxcbiAgICAgIFdhdGVyUGFzcy5nZXRXYXZlTWFwRGF0YSgpLFxuICAgICAgZ2wuTElORUFSLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JnZXQgYWJvdXQgYSByZWdpb24ncyB0ZXh0dXJlc1xuICAgKi9cbiAgcHVibGljIHJlbGVhc2UocmVnaW9uOiBXYXRlclJlZ2lvbikge1xuICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5yZWdpb25UZXh0dXJlcy5nZXQocmVnaW9uKTtcbiAgICBpZiAoIXRleHR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGdsPy5kZWxldGVUZXh0dXJlKHRleHR1cmVzLmRlcHRoKTtcbiAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy5mbG93KTtcbiAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy5yaXBwbGVzKTtcbiAgICBpZiAodGV4dHVyZXMud2F2ZXMpIHtcbiAgICAgIGdsPy5kZWxldGVUZXh0dXJlKHRleHR1cmVzLndhdmVzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lvblRleHR1cmVzLmRlbGV0ZShyZWdpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZXh0dXJlcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb25cbiAgKTogUmVnaW9uVGV4dHVyZXMge1xuICAgIGxldCB0ZXh0dXJlcyA9IHRoaXMucmVnaW9uVGV4dHVyZXMuZ2V0KHJlZ2lvbik7XG4gICAgaWYgKCF0ZXh0dXJlcykge1xuICAgICAgdGV4dHVyZXMgPSB7XG4gICAgICAgIGRlcHRoOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgICBkZXB0aFZlcnNpb246IC0xLFxuICAgICAgICBmbG93OiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgICBmbG93VmVyc2lvbjogLTEsXG4gICAgICAgIHJpcHBsZXM6IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICAgIHJpcHBsZXNVcGxvYWRlZDogZmFsc2UsXG4gICAgICAgIHdhdmVzOiByZWdpb24ubm9ybWFsTWFwID8gZ2wuY3JlYXRlVGV4dHVyZSgpISA6IG51bGwsXG4gICAgICB9O1xuICAgICAgdGhpcy5yZWdpb25UZXh0dXJlcy5zZXQocmVnaW9uLCB0ZXh0dXJlcyk7XG5cbiAgICAgIGlmIChyZWdpb24ubm9ybWFsTWFwICYmIHRleHR1cmVzLndhdmVzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC51cGxvYWQoXG4gICAgICAgICAgVGV4dHVyZVVuaXQuV2F2ZU1hcCxcbiAgICAgICAgICB0ZXh0dXJlcy53YXZlcyxcbiAgICAgICAgICB0aGlzLnBvd2VyT2ZUd29JbWFnZShyZWdpb24ubm9ybWFsTWFwKSxcbiAgICAgICAgICBnbC5MSU5FQVIsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXh0dXJlcyBjYW4gb25seSB0aWxlIGlmIHRoZWlyIHNpemUgaXMgYSBwb3dlciBvZiAyXG4gICAqL1xuICBwcml2YXRlIHBvd2VyT2ZUd29JbWFnZShpbWFnZTogU2NlbmVJbWFnZSk6IFNjZW5lSW1hZ2Uge1xuICAgIGNvbnN0IGlzUG93ZXJPZlR3byA9IChuOiBudW1iZXIpID0+IChuICYgKG4gLSAxKSkgPT09IDA7XG4gICAgaWYgKGlzUG93ZXJPZlR3byhpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mVHdvKGltYWdlLmhlaWdodCkpIHtcbiAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gV2F0ZXJQYXNzLldBVkVfTUFQX1NJWkU7XG4gICAgY2FudmFzXG4gICAgICAuZ2V0Q29udGV4dCgnMmQnKSFcbiAgICAgIC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHJlZ2lvbidzIHRleHR1cmVzIGFyZSB1cCB0byBkYXRlIGFuZCBiaW5kIHRoZW1cbiAgICovXG4gIHByaXZhdGUgYmluZFJlZ2lvbihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCByZWdpb246IFdhdGVyUmVnaW9uKSB7XG4gICAgY29uc3QgdGV4dHVyZXMgPSB0aGlzLmdldFRleHR1cmVzKGdsLCByZWdpb24pO1xuICAgIGNvbnN0IHsgZGVwdGhQaXhlbHMsIGZsb3dQaXhlbHMsIHJpcHBsZXMgfSA9IHJlZ2lvbjtcblxuICAgIGlmICh0ZXh0dXJlcy5kZXB0aFZlcnNpb24gPT09IGRlcHRoUGl4ZWxzLnZlcnNpb24pIHtcbiAgICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShUZXh0dXJlVW5pdC5EZXB0aE1hcCwgdGV4dHVyZXMuZGVwdGgsIGdsLkxJTkVBUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGV4dC51cGxvYWREYXRhKFxuICAgICAgICBUZXh0dXJlVW5pdC5EZXB0aE1hcCxcbiAgICAgICAgdGV4dHVyZXMuZGVwdGgsXG4gICAgICAgIGRlcHRoUGl4ZWxzLnNpemUsXG4gICAgICAgIGRlcHRoUGl4ZWxzLmRhdGEsXG4gICAgICAgIGdsLkxJTkVBUlxuICAgICAgKTtcbiAgICAgIHRleHR1cmVzLmRlcHRoVmVyc2lvbiA9IGRlcHRoUGl4ZWxzLnZlcnNpb247XG4gICAgfVxuXG4gICAgaWYgKHRleHR1cmVzLmZsb3dWZXJzaW9uID09PSBmbG93UGl4ZWxzLnZlcnNpb24pIHtcbiAgICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShUZXh0dXJlVW5pdC5GbG93TWFwLCB0ZXh0dXJlcy5mbG93LCBnbC5MSU5FQVIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkRGF0YShcbiAgICAgICAgVGV4dHVyZVVuaXQuRmxvd01hcCxcbiAgICAgICAgdGV4dHVyZXMuZmxvdyxcbiAgICAgICAgZmxvd1BpeGVscy5zaXplLFxuICAgICAgICBmbG93UGl4ZWxzLmRhdGEsXG4gICAgICAgIGdsLkxJTkVBUlxuICAgICAgKTtcbiAgICAgIHRleHR1cmVzLmZsb3dWZXJzaW9uID0gZmxvd1BpeGVscy52ZXJzaW9uO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShcbiAgICAgIFRleHR1cmVVbml0LldhdmVNYXAsXG4gICAgICB0ZXh0dXJlcy53YXZlcyA/PyB0aGlzLndhdmVUZXh0dXJlLFxuICAgICAgZ2wuTElORUFSLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICAvLyBSaXBwbGVzIG9ubHkgbmVlZCB1cGxvYWRpbmcgd2hpbGUgdGhleSdyZSBtb3ZpbmdcbiAgICBpZiAocmlwcGxlcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuY29udGV4dC51cGxvYWREYXRhKFxuICAgICAgICBUZXh0dXJlVW5pdC5SaXBwbGVNYXAsXG4gICAgICAgIHRleHR1cmVzLnJpcHBsZXMsXG4gICAgICAgIHJpcHBsZXMuc2l6ZSxcbiAgICAgICAgcmlwcGxlcy5waXhlbHMsXG4gICAgICAgIGdsLkxJTkVBUlxuICAgICAgKTtcbiAgICAgIHRleHR1cmVzLnJpcHBsZXNVcGxvYWRlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlcy5yaXBwbGVzVXBsb2FkZWQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShcbiAgICAgICAgVGV4dHVyZVVuaXQuUmlwcGxlTWFwLFxuICAgICAgICB0ZXh0dXJlcy5yaXBwbGVzLFxuICAgICAgICBnbC5MSU5FQVJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZWdpb25Vbmlmb3JtcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb24sXG4gICAgZnJhbWU6IEZyYW1lXG4gICkge1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMucHJvZ3JhbTtcbiAgICBjb25zdCBjb2xvdXIgPSBwYXJzZUNvbG9yKHJlZ2lvbi5jb2xvdXIpO1xuICAgIGNvbnN0IGRlZXBDb2xvdXIgPSBwYXJzZUNvbG9yKHJlZ2lvbi5kZWVwQ29sb3VyKTtcbiAgICBjb25zdCB7IG1hc2sgfSA9IHJlZ2lvbjtcbiAgICBjb25zdCBmaWx0ZXIgPSBmcmFtZS5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1Q7XG5cbiAgICBnbC51bmlmb3JtMmYoXG4gICAgICB1bmlmb3Jtcy51X3JlZ2lvblBvc2l0aW9uLFxuICAgICAgcmVnaW9uLnBvc2l0aW9uLngsXG4gICAgICByZWdpb24ucG9zaXRpb24ueVxuICAgICk7XG4gICAgZ2wudW5pZm9ybTJmKHVuaWZvcm1zLnVfcmVnaW9uU2l6ZSwgcmVnaW9uLnNpemUueCwgcmVnaW9uLnNpemUueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTWFzaywgbWFzayA/IDEgOiAwKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VNYXNrUmVwZWF0LCByZWdpb24ucmVwZWF0ID8gMSA6IDApO1xuICAgIGlmIChtYXNrKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZEltYWdlKG1hc2ssIGZpbHRlciwgVGV4dHVyZVVuaXQuTWFzayk7XG4gICAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9tYXNrU2l6ZSwgbWFzay53aWR0aCwgbWFzay5oZWlnaHQpO1xuICAgIH1cblxuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3VzZVJpcHBsZXMsIHJlZ2lvbi5yaXBwbGVzLmFjdGl2ZSA/IDEgOiAwKTtcbiAgICBnbC51bmlmb3JtM2YoXG4gICAgICB1bmlmb3Jtcy51X2NvbG91cixcbiAgICAgIGNvbG91ci5yIC8gMjU1LFxuICAgICAgY29sb3VyLmcgLyAyNTUsXG4gICAgICBjb2xvdXIuYiAvIDI1NVxuICAgICk7XG4gICAgZ2wudW5pZm9ybTNmKFxuICAgICAgdW5pZm9ybXMudV9kZWVwQ29sb3VyLFxuICAgICAgZGVlcENvbG91ci5yIC8gMjU1LFxuICAgICAgZGVlcENvbG91ci5nIC8gMjU1LFxuICAgICAgZGVlcENvbG91ci5iIC8gMjU1XG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9vcGFjaXR5LCByZWdpb24ub3BhY2l0eSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc2hvcmVCbGVuZCwgcmVnaW9uLnNob3JlQmxlbmQpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3JlZnJhY3Rpb24sIHJlZ2lvbi5yZWZyYWN0aW9uKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9yZWZsZWN0aW9uLCByZWdpb24ucmVmbGVjdGlvbik7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfcmVmbGVjdGlvbkRpc3RvcnRpb24sIHJlZ2lvbi5yZWZsZWN0aW9uRGlzdG9ydGlvbik7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2F2ZVNpemUsIHJlZ2lvbi53YXZlU2l6ZSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2F2ZVNwZWVkLCByZWdpb24ud2F2ZVNwZWVkKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YXZlU3RyZW5ndGgsIHJlZ2lvbi53YXZlU3RyZW5ndGgpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3JpcHBsZVN0cmVuZ3RoLCByZWdpb24ucmlwcGxlU3RyZW5ndGgpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X2Zsb3dDeWNsZSwgV2F0ZXJQYXNzLkZMT1dfQ1lDTEUpO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHVuaWZvcm1zLnVfZmxvd0Rpc3RhbmNlLFxuICAgICAgcmVnaW9uLmZsb3dTcGVlZCAqIFdhdGVyUGFzcy5GTE9XX0NZQ0xFXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zcGVjdWxhciwgcmVnaW9uLnNwZWN1bGFyKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zdXJmYWNlU2hhZGluZywgcmVnaW9uLnN1cmZhY2VTaGFkaW5nKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9waXhlbFNpemUsIHJlZ2lvbi5waXhlbFNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3UmVnaW9uKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvbixcbiAgICBmcmFtZTogRnJhbWVcbiAgKSB7XG4gICAgY29uc3QgdG9wTGVmdCA9IGZyYW1lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHJlZ2lvbi5wb3NpdGlvbik7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbihcbiAgICAgIHZlYzIuYWRkKHJlZ2lvbi5wb3NpdGlvbiwgcmVnaW9uLnNpemUpXG4gICAgKTtcbiAgICBjb25zdCBzaXplID0gdmVjMi5zdWIoYm90dG9tUmlnaHQsIHRvcExlZnQpO1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMucHJvZ3JhbTtcblxuICAgIHRoaXMuYmluZFJlZ2lvbihnbCwgcmVnaW9uKTtcbiAgICB0aGlzLnNldFJlZ2lvblVuaWZvcm1zKGdsLCByZWdpb24sIGZyYW1lKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9yZWdpb25TY3JlZW5Qb3NpdGlvbiwgdG9wTGVmdC54LCB0b3BMZWZ0LnkpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X2NhbWVyYVNjYWxlLCBzaXplLnggLyByZWdpb24uc2l6ZS54KTtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3UXVhZChcbiAgICAgIHRoaXMucHJvZ3JhbSxcbiAgICAgIFt0b3BMZWZ0LngsIHRvcExlZnQueSwgc2l6ZS54LCBzaXplLnldLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgWzAsIDAsIDEsIDFdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgc29tZSB3YXRlciBpbnRvIHRoZSBjYW52YXNcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoXG4gICAgZnJhbWU6IEZyYW1lLFxuICAgIHJlZ2lvbnM6IFdhdGVyUmVnaW9uW10sXG4gICAgb3V0cHV0OiBXYXRlck91dHB1dCxcbiAgICB0aW1lOiBudW1iZXJcbiAgKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmICghZ2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHVuaWZvcm1zLCBwcm9ncmFtIH0gPSB0aGlzLnByb2dyYW07XG4gICAgY29uc3QgZmlsdGVyID0gZnJhbWUuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUO1xuXG4gICAgdGhpcy5jb250ZXh0LnJlc2l6ZShmcmFtZS5zY3JlZW4pO1xuICAgIHRoaXMuY29udGV4dC5pbnZhbGlkYXRlQ2FudmFzZXMoKTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcblxuICAgIC8vIFRoZSBzY2VuZSBhbmQgaXRzIHJlZmxlY3Rpb25zIG9ubHkgbWF0dGVyIGZvciB0aGUgd2F0ZXIncyBjb2xvdXJcbiAgICBpZiAob3V0cHV0ID09PSBXYXRlck91dHB1dC5Db2xvdXIpIHtcbiAgICAgIHRoaXMuY29udGV4dC51cGxvYWQoXG4gICAgICAgIFRleHR1cmVVbml0LlNjZW5lLFxuICAgICAgICB0aGlzLnNjZW5lVGV4dHVyZSxcbiAgICAgICAgZnJhbWUuY29udGV4dC5jYW52YXMsXG4gICAgICAgIGZpbHRlclxuICAgICAgKTtcblxuICAgICAgaWYgKGZyYW1lLnJlZmxlY3Rpb25NYXApIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZChcbiAgICAgICAgICBUZXh0dXJlVW5pdC5SZWZsZWN0aW9uTWFwLFxuICAgICAgICAgIHRoaXMucmVmbGVjdGlvblRleHR1cmUsXG4gICAgICAgICAgZnJhbWUucmVmbGVjdGlvbk1hcCxcbiAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgbm9pc2UgaXMgYWx3YXlzIGluIHRoZSBkZWZhdWx0IG1hcCwgZXZlbiBpZiBhIHJlZ2lvbiBoYXMgaXRzIG93blxuICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShcbiAgICAgIFRleHR1cmVVbml0Lk5vaXNlTWFwLFxuICAgICAgdGhpcy53YXZlVGV4dHVyZSxcbiAgICAgIGdsLkxJTkVBUixcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9zY3JlZW4sIGZyYW1lLnNjcmVlbi54LCBmcmFtZS5zY3JlZW4ueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdGltZSwgdGltZSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfb3V0cHV0LCBvdXRwdXQpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3VzZVJlZmxlY3Rpb24sIGZyYW1lLnJlZmxlY3Rpb25NYXAgPyAxIDogMCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfc2NlbmUsIFRleHR1cmVVbml0LlNjZW5lKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9yZWZsZWN0aW9uTWFwLCBUZXh0dXJlVW5pdC5SZWZsZWN0aW9uTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9tYXNrLCBUZXh0dXJlVW5pdC5NYXNrKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9kZXB0aE1hcCwgVGV4dHVyZVVuaXQuRGVwdGhNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X2Zsb3dNYXAsIFRleHR1cmVVbml0LkZsb3dNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3dhdmVNYXAsIFRleHR1cmVVbml0LldhdmVNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X25vaXNlTWFwLCBUZXh0dXJlVW5pdC5Ob2lzZU1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfcmlwcGxlTWFwLCBUZXh0dXJlVW5pdC5SaXBwbGVNYXApO1xuXG4gICAgcmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB0aGlzLmRyYXdSZWdpb24oZ2wsIHJlZ2lvbiwgZnJhbWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBkcmF3SW1hZ2VJblJlY3RhbmdsZSwgUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBSaXBwbGVGaWVsZCwgUmlwcGxlT3B0aW9ucyB9IGZyb20gJy4vUmlwcGxlRmllbGQnO1xuaW1wb3J0IHR5cGUgeyBXYXRlclN5c3RlbSB9IGZyb20gJy4vV2F0ZXJTeXN0ZW0nO1xuXG4vKipcbiAqIEEgZ3JpZCBvZiB2YWx1ZXMgdGhhdCBjb3ZlcnMgYSByZWdpb24sIHRoZSBmaXJzdCBpbmRleCBpcyB0aGUgcm93XG4gKlxuICogVmFsdWVzIGFyZSBpbnRlcnBvbGF0ZWQgYmV0d2VlbiB0aGUgY2VudGVycyBvZiB0aGUgY2VsbHNcbiAqL1xuZXhwb3J0IHR5cGUgV2F0ZXJHcmlkPFQ+ID0gVFtdW107XG5cbmV4cG9ydCB0eXBlIFdhdGVyUmVnaW9uT3B0aW9ucyA9IFJlY3RhbmdsZSAmIHtcbiAgLyoqXG4gICAqIEltYWdlIHdob3NlIGFscGhhIGNoYW5uZWwgZGVjaWRlcyB3aGVyZSB0aGUgd2F0ZXIgaXMsIHRoZSBkZWZhdWx0IGlzIHRoZVxuICAgKiB3aG9sZSByZWN0YW5nbGVcbiAgICpcbiAgICogVGhlIGVkZ2Ugb2YgdGhlIG1hc2sgaXMgYSBoYXJkIGVkZ2UgdW5sZXNzIHRoZSB3YXRlciBnZXRzIHNoYWxsb3dlciB0b3dhcmRzXG4gICAqIGl0LCBzbyB0aGlzIGNhbiBiZSB1c2VkIGZvciBzaG9yZXMgdGhhdCBmb2xsb3cgdGhlIHNoYXBlIG9mIHRoZSB0ZXJyYWluXG4gICAqL1xuICBtYXNrPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGUgbWFzayBiZSByZXBlYXRlZCBhY3Jvc3MgdGhlIHJlZ2lvbj8gT3RoZXJ3aXNlIGl0IHdpbGwgYmVcbiAgICogc3RyZXRjaGVkIHRvIGZpdFxuICAgKi9cbiAgcmVwZWF0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSG93IGRlZXAgdGhlIHdhdGVyIGlzLCBmcm9tIDAgYXQgdGhlIHNob3JlIHRvIDEgaW4gdGhlIGRlZXBlc3QgcGFydHNcbiAgICpcbiAgICogVGhpcyBjYW4gYmUgYSBzaW5nbGUgbnVtYmVyIG9yIGEgZ3JpZFxuICAgKi9cbiAgZGVwdGg/OiBudW1iZXIgfCBXYXRlckdyaWQ8bnVtYmVyPjtcblxuICAvKipcbiAgICogV2hpY2ggd2F5IHRoZSB3YXRlciBmbG93cyBhbmQgaG93IHF1aWNrbHksIHRoZXNlIHZlY3RvcnMgc2hvdWxkIGJlIG5vXG4gICAqIGxvbmdlciB0aGFuIDFcbiAgICpcbiAgICogVGhpcyBjYW4gYmUgYSBzaW5nbGUgdmVjdG9yIG9yIGEgZ3JpZFxuICAgKi9cbiAgZmxvdz86IHZlYzIgfCBXYXRlckdyaWQ8dmVjMj47XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIHRoYXQgd2F0ZXIgbW92ZXMgZWFjaCBzZWNvbmQgd2hlbiBhIGZsb3cgdmVjdG9yIGhhcyBhIGxlbmd0aCBvZiAxXG4gICAqL1xuICBmbG93U3BlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvdXIgb2Ygc2hhbGxvdyB3YXRlclxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgY29sb3VyIG9mIGRlZXAgd2F0ZXJcbiAgICovXG4gIGRlZXBDb2xvdXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSB3YXRlciBoaWRlcyB3aGF0J3MgdW5kZXJuZWF0aCBpdCBhdCB0aGUgZGVlcGVzdCBwb2ludCwgZnJvbSAwXG4gICAqIHRvIDFcbiAgICovXG4gIG9wYWNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkZXB0aCBhdCB3aGljaCB3YXRlciBpcyBmdWxseSB2aXNpYmxlLCBpdCBmYWRlcyBvdXQgYXQgZGVwdGhzIGJlbG93XG4gICAqIHRoaXMgdG8gYmxlbmQgd2l0aCB0aGUgc2hvcmUuIFVzZSAwIGZvciB3YXRlciB0aGF0IGRvZXNuJ3QgZmFkZSBvdXRcbiAgICovXG4gIHNob3JlQmxlbmQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgd2F2ZXMgY2FuIGJlbmQgd2hhdCdzIHVuZGVybmVhdGggdGhlIHdhdGVyLCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmVmcmFjdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IHN0cm9uZyByZWZsZWN0aW9ucyBhcmUsIGZyb20gMCB0byAxXG4gICAqL1xuICByZWZsZWN0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHdhdmVzIGNhbiBiZW5kIHJlZmxlY3Rpb25zLCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmVmbGVjdGlvbkRpc3RvcnRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgdGlsaW5nIG5vcm1hbCBtYXAgZm9yIHdhdmVzLCB0aGUgZGVmYXVsdCBpcyBhIGdlbmVyYXRlZCBvbmVcbiAgICovXG4gIG5vcm1hbE1hcD86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgbm9ybWFsIG1hcCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgd2F2ZVNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBxdWlja2x5IHdhdmVzIG1vdmUsIGluIHdvcmxkIHVuaXRzIHBlciBzZWNvbmRcbiAgICovXG4gIHdhdmVTcGVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IHN0ZWVwIHdhdmVzIGFyZSwgZnJvbSAwIGZvciBmbGF0IHdhdGVyIHRvIDFcbiAgICovXG4gIHdhdmVTdHJlbmd0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IHN0ZWVwIHJpcHBsZXMgYXJlIGNvbXBhcmVkIHRvIHdhdmVzXG4gICAqL1xuICByaXBwbGVTdHJlbmd0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGZhciByaXBwbGVzIHRyYXZlbCBlYWNoIHNlY29uZCwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJpcHBsZVNwZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCBvZiB0aGVpciBtb3ZlbWVudCByaXBwbGVzIGtlZXAgZWFjaCBzdGVwLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgcmlwcGxlRGFtcGluZz86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgZWFjaCBjZWxsIGluIHRoZSByaXBwbGUgc2ltdWxhdGlvbiwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJpcHBsZUNlbGxTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIHJhaW5kcm9wcyBlYWNoIHNlY29uZCwgZm9yIGV2ZXJ5IDEwMDAwIHNxdWFyZSB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmFpbj86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IG11Y2ggZWFjaCByYWluZHJvcCBkaXN0dXJicyB0aGUgd2F0ZXJcbiAgICovXG4gIHJhaW5TdHJlbmd0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IHNoaW55IHRoZSB3YXRlciBpcyB3aGVuIGxpZ2h0aW5nIGlzIHVzZWQsIGZyb20gMCB0byAxXG4gICAqL1xuICBzcGVjdWxhcj86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IG11Y2ggdGhlIHNsb3BlIG9mIHRoZSB3YXRlciBjaGFuZ2VzIGl0cyBicmlnaHRuZXNzLCB0aGlzIGxldHMgd2F2ZXMgYW5kXG4gICAqIHJpcHBsZXMgYmUgc2VlbiBldmVuIGlmIHRoZXJlIGFyZW4ndCBhbnkgbGlnaHRzXG4gICAqL1xuICBzdXJmYWNlU2hhZGluZz86IG51bWJlcjtcblxuICAvKipcbiAgICogU25hcCB0aGUgd2F0ZXIgdG8gYSBncmlkIG9mIHRoaXMgc2l6ZSBpbiB3b3JsZCB1bml0cyBmb3IgYSBwaXhlbCBhcnRcbiAgICogc3R5bGUsIG9yIHVzZSAwIGZvciBzbW9vdGggd2F0ZXJcbiAgICovXG4gIHBpeGVsU2l6ZT86IG51bWJlcjtcbn07XG5cbi8qKlxuICogV2hhdCdzIGF0IGEgcG9pbnQgaW4gdGhlIHdhdGVyXG4gKi9cbmV4cG9ydCB0eXBlIFdhdGVyU2FtcGxlID0ge1xuICByZWdpb246IFdhdGVyUmVnaW9uO1xuICBkZXB0aDogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBbiBhcmVhIG9mIHdhdGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBXYXRlclJlZ2lvbiB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICByZXBlYXQ6IGZhbHNlLFxuICAgIGZsb3dTcGVlZDogMTYsXG4gICAgY29sb3VyOiAnIzNmOGZhOCcsXG4gICAgZGVlcENvbG91cjogJyMxMjNmNjMnLFxuICAgIG9wYWNpdHk6IDAuNyxcbiAgICBzaG9yZUJsZW5kOiAwLjE1LFxuICAgIHJlZnJhY3Rpb246IDQsXG4gICAgcmVmbGVjdGlvbjogMC42LFxuICAgIHJlZmxlY3Rpb25EaXN0b3J0aW9uOiAzLFxuICAgIHdhdmVTaXplOiAxMjgsXG4gICAgd2F2ZVNwZWVkOiA2LFxuICAgIHdhdmVTdHJlbmd0aDogMC4zNSxcbiAgICByaXBwbGVTdHJlbmd0aDogMixcbiAgICByaXBwbGVTcGVlZDogNjAsXG4gICAgcmlwcGxlRGFtcGluZzogMC45NyxcbiAgICByaXBwbGVDZWxsU2l6ZTogMixcbiAgICByYWluOiAwLFxuICAgIHJhaW5TdHJlbmd0aDogMC41LFxuICAgIHNwZWN1bGFyOiAwLjUsXG4gICAgc3VyZmFjZVNoYWRpbmc6IDAuMixcbiAgICBwaXhlbFNpemU6IDAsXG4gIH07XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1JJUFBMRV9DRUxMUyA9IDI1NjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUkFJTkRST1BfUkFESVVTID0gMi41O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBSQUlOX0FSRUEgPSAxMDAwMDtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYzI7XG4gIHB1YmxpYyBzaXplOiB2ZWMyO1xuICBwdWJsaWMgbWFzazogU2NlbmVJbWFnZSB8IG51bGw7XG4gIHB1YmxpYyBub3JtYWxNYXA6IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIHB1YmxpYyByZXBlYXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBmbG93U3BlZWQ6IG51bWJlcjtcbiAgcHVibGljIGNvbG91cjogc3RyaW5nO1xuICBwdWJsaWMgZGVlcENvbG91cjogc3RyaW5nO1xuICBwdWJsaWMgb3BhY2l0eTogbnVtYmVyO1xuICBwdWJsaWMgc2hvcmVCbGVuZDogbnVtYmVyO1xuICBwdWJsaWMgcmVmcmFjdGlvbjogbnVtYmVyO1xuICBwdWJsaWMgcmVmbGVjdGlvbjogbnVtYmVyO1xuICBwdWJsaWMgcmVmbGVjdGlvbkRpc3RvcnRpb246IG51bWJlcjtcbiAgcHVibGljIHdhdmVTaXplOiBudW1iZXI7XG4gIHB1YmxpYyB3YXZlU3BlZWQ6IG51bWJlcjtcbiAgcHVibGljIHdhdmVTdHJlbmd0aDogbnVtYmVyO1xuICBwdWJsaWMgcmlwcGxlU3RyZW5ndGg6IG51bWJlcjtcbiAgcHVibGljIHJpcHBsZVNwZWVkOiBudW1iZXI7XG4gIHB1YmxpYyByaXBwbGVEYW1waW5nOiBudW1iZXI7XG4gIHB1YmxpYyByYWluOiBudW1iZXI7XG4gIHB1YmxpYyByYWluU3RyZW5ndGg6IG51bWJlcjtcbiAgcHVibGljIHNwZWN1bGFyOiBudW1iZXI7XG4gIHB1YmxpYyBzdXJmYWNlU2hhZGluZzogbnVtYmVyO1xuICBwdWJsaWMgcGl4ZWxTaXplOiBudW1iZXI7XG5cbiAgcHVibGljIHJlYWRvbmx5IHJpcHBsZXM6IFJpcHBsZUZpZWxkO1xuXG4gIC8qKlxuICAgKiBSR0JBIGRhdGEgZm9yIHRoZSBkZXB0aCBhbmQgZmxvdyBncmlkcywgdGhlIHZlcnNpb24gbnVtYmVycyBhcmUgY2hhbmdlZFxuICAgKiB3aGVuZXZlciB0aGUgZGF0YSBjaGFuZ2VzXG4gICAqL1xuICBwdWJsaWMgZGVwdGhQaXhlbHM6IHsgc2l6ZTogdmVjMjsgZGF0YTogVWludDhBcnJheTsgdmVyc2lvbjogbnVtYmVyIH07XG4gIHB1YmxpYyBmbG93UGl4ZWxzOiB7IHNpemU6IHZlYzI7IGRhdGE6IFVpbnQ4QXJyYXk7IHZlcnNpb246IG51bWJlciB9O1xuXG4gIHByaXZhdGUgc3lzdGVtOiBXYXRlclN5c3RlbTtcbiAgcHJpdmF0ZSBkZXB0aEdyaWQ6IFdhdGVyR3JpZDxudW1iZXI+ID0gW1sxXV07XG4gIHByaXZhdGUgc2hhcGU6IFVpbnQ4QXJyYXkgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByYWluVGltZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSByZW1vdmVDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHN5c3RlbTogV2F0ZXJTeXN0ZW0sIG9wdGlvbnM6IFdhdGVyUmVnaW9uT3B0aW9ucykge1xuICAgIGNvbnN0IHsgbWFzaywgbm9ybWFsTWFwLCBkZXB0aCwgZmxvdywgcG9zaXRpb24sIHNpemUsIC4uLnNldHRpbmdzIH0gPVxuICAgICAgb3B0aW9ucztcblxuICAgIHRoaXMuc3lzdGVtID0gc3lzdGVtO1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkoc2l6ZSk7XG4gICAgdGhpcy5tYXNrID0gbWFzayA/PyBudWxsO1xuICAgIHRoaXMubm9ybWFsTWFwID0gbm9ybWFsTWFwID8/IG51bGw7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBXYXRlclJlZ2lvbi5ERUZBVUxUX09QVElPTlMsIHNldHRpbmdzKTtcblxuICAgIHRoaXMuZGVwdGhQaXhlbHMgPSB7IHNpemU6IHZlYzIoMSksIGRhdGE6IG5ldyBVaW50OEFycmF5KDQpLCB2ZXJzaW9uOiAwIH07XG4gICAgdGhpcy5mbG93UGl4ZWxzID0geyBzaXplOiB2ZWMyKDEpLCBkYXRhOiBuZXcgVWludDhBcnJheSg0KSwgdmVyc2lvbjogMCB9O1xuICAgIHRoaXMuc2V0RGVwdGgoZGVwdGggPz8gMSk7XG4gICAgdGhpcy5zZXRGbG93KGZsb3cgPz8gdmVjMigpKTtcblxuICAgIGNvbnN0IGNlbGxTaXplID0gTWF0aC5tYXgoXG4gICAgICBvcHRpb25zLnJpcHBsZUNlbGxTaXplID8/IFdhdGVyUmVnaW9uLkRFRkFVTFRfT1BUSU9OUy5yaXBwbGVDZWxsU2l6ZSxcbiAgICAgIE1hdGgubWF4KHNpemUueCwgc2l6ZS55KSAvIFdhdGVyUmVnaW9uLk1BWF9SSVBQTEVfQ0VMTFNcbiAgICApO1xuICAgIGNvbnN0IGNlbGxzID0gdmVjMihcbiAgICAgIE1hdGgubWF4KE1hdGguY2VpbChzaXplLnggLyBjZWxsU2l6ZSksIDEpLFxuICAgICAgTWF0aC5tYXgoTWF0aC5jZWlsKHNpemUueSAvIGNlbGxTaXplKSwgMSlcbiAgICApO1xuXG4gICAgdGhpcy5yaXBwbGVzID0gbmV3IFJpcHBsZUZpZWxkKFxuICAgICAgY2VsbHMsXG4gICAgICB2ZWMyKHNpemUueCAvIGNlbGxzLngsIHNpemUueSAvIGNlbGxzLnkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgaG93IGRlZXAgdGhlIHdhdGVyIGlzXG4gICAqL1xuICBwdWJsaWMgc2V0RGVwdGgoZGVwdGg6IG51bWJlciB8IFdhdGVyR3JpZDxudW1iZXI+KSB7XG4gICAgdGhpcy5kZXB0aEdyaWQgPSB0eXBlb2YgZGVwdGggPT09ICdudW1iZXInID8gW1tkZXB0aF1dIDogZGVwdGg7XG5cbiAgICBjb25zdCByb3dzID0gdGhpcy5kZXB0aEdyaWQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmRlcHRoR3JpZFswXS5sZW5ndGg7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHJvd3MgKiBjb2x1bW5zICogNCk7XG5cbiAgICB0aGlzLmRlcHRoR3JpZC5mb3JFYWNoKChyb3csIHkpID0+XG4gICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgICAgZGF0YVsoeCArIHkgKiBjb2x1bW5zKSAqIDRdID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDI1NSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmRlcHRoUGl4ZWxzID0ge1xuICAgICAgc2l6ZTogdmVjMihjb2x1bW5zLCByb3dzKSxcbiAgICAgIGRhdGEsXG4gICAgICB2ZXJzaW9uOiB0aGlzLmRlcHRoUGl4ZWxzLnZlcnNpb24gKyAxLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHdoaWNoIHdheSB0aGUgd2F0ZXIgZmxvd3NcbiAgICovXG4gIHB1YmxpYyBzZXRGbG93KGZsb3c6IHZlYzIgfCBXYXRlckdyaWQ8dmVjMj4pIHtcbiAgICBjb25zdCBncmlkID0gQXJyYXkuaXNBcnJheShmbG93KSA/IGZsb3cgOiBbW2Zsb3ddXTtcbiAgICBjb25zdCByb3dzID0gZ3JpZC5sZW5ndGg7XG4gICAgY29uc3QgY29sdW1ucyA9IGdyaWRbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShyb3dzICogY29sdW1ucyAqIDQpO1xuXG4gICAgLy8gMTI4IGlzIHVzZWQgZm9yIDAgc28gdGhhdCBzdGlsbCB3YXRlciBzdGF5cyBwZXJmZWN0bHkgc3RpbGxcbiAgICBncmlkLmZvckVhY2goKHJvdywgeSkgPT5cbiAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xuICAgICAgICBkYXRhWyh4ICsgeSAqIGNvbHVtbnMpICogNF0gPSBNYXRoLnJvdW5kKHZhbHVlLnggKiAxMjcpICsgMTI4O1xuICAgICAgICBkYXRhWyh4ICsgeSAqIGNvbHVtbnMpICogNCArIDFdID0gTWF0aC5yb3VuZCh2YWx1ZS55ICogMTI3KSArIDEyODtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZmxvd1BpeGVscyA9IHtcbiAgICAgIHNpemU6IHZlYzIoY29sdW1ucywgcm93cyksXG4gICAgICBkYXRhLFxuICAgICAgdmVyc2lvbjogdGhpcy5mbG93UGl4ZWxzLnZlcnNpb24gKyAxLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgbWFzayBhdCB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcmlwcGxlIGdyaWQsIHNvIHRoYXQgd2UgY2FuIGZpbmQgb3V0XG4gICAqIHdoZXJlIHRoZSB3YXRlciBpcyB3aXRob3V0IHVzaW5nIHRoZSBHUFVcbiAgICpcbiAgICogVGhpcyByZXR1cm5zIG51bGwgaWYgdGhlIG1hc2sgaGFzbid0IGxvYWRlZCB5ZXRcbiAgICovXG4gIHByaXZhdGUgZ2V0U2hhcGUoKTogVWludDhBcnJheSB8IG51bGwge1xuICAgIGlmICh0aGlzLnNoYXBlIHx8ICF0aGlzLm1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLnNoYXBlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMubWFzay53aWR0aCA9PT0gMCB8fFxuICAgICAgKHRoaXMubWFzayBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgIXRoaXMubWFzay5jb21wbGV0ZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgeDogY29sdW1ucywgeTogcm93cyB9ID0gdGhpcy5yaXBwbGVzLnNpemU7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gY29sdW1ucztcbiAgICBjYW52YXMuaGVpZ2h0ID0gcm93cztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSE7XG4gICAgY29udGV4dC5zY2FsZShjb2x1bW5zIC8gdGhpcy5zaXplLngsIHJvd3MgLyB0aGlzLnNpemUueSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoLXRoaXMucG9zaXRpb24ueCwgLXRoaXMucG9zaXRpb24ueSk7XG4gICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgdGhpcy5tYXNrLCB0aGlzLCB0aGlzLnJlcGVhdCk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNvbHVtbnMsIHJvd3MpO1xuICAgIGNvbnN0IHNoYXBlID0gbmV3IFVpbnQ4QXJyYXkoY29sdW1ucyAqIHJvd3MpO1xuICAgIGNvbnN0IGJsb2NrZWQgPSBuZXcgVWludDhBcnJheShjb2x1bW5zICogcm93cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFwZS5sZW5ndGg7IGkrKykge1xuICAgICAgc2hhcGVbaV0gPSBkYXRhW2kgKiA0ICsgM107XG4gICAgICBibG9ja2VkW2ldID0gc2hhcGVbaV0gPCAxMjggPyAxIDogMDtcbiAgICB9XG5cbiAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgdGhpcy5yaXBwbGVzLnNldEJsb2NrZWQoYmxvY2tlZCk7XG5cbiAgICByZXR1cm4gc2hhcGU7XG4gIH1cblxuICAvKipcbiAgICogRm9yZ2V0IHRoZSBtYXNrJ3Mgc2hhcGUsIHRoaXMgc2hvdWxkIGJlIGNhbGxlZCBpZiB0aGUgbWFzayBpcyBjaGFuZ2VkXG4gICAqL1xuICBwdWJsaWMgaW52YWxpZGF0ZU1hc2soKSB7XG4gICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgZGVwdGggYXQgYSB3b3JsZCBwb3NpdGlvbiwgdGhpcyBpcyAwIGlmIHRoZXJlJ3Mgbm8gd2F0ZXIgdGhlcmVcbiAgICovXG4gIHB1YmxpYyBkZXB0aEF0KHBvc2l0aW9uOiB2ZWMyKTogbnVtYmVyIHtcbiAgICBjb25zdCBsb2NhbCA9IHZlYzIuc3ViKHBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICBpZiAoXG4gICAgICBsb2NhbC54IDwgMCB8fFxuICAgICAgbG9jYWwueSA8IDAgfHxcbiAgICAgIGxvY2FsLnggPj0gdGhpcy5zaXplLnggfHxcbiAgICAgIGxvY2FsLnkgPj0gdGhpcy5zaXplLnlcbiAgICApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IHNoYXBlID0gdGhpcy5nZXRTaGFwZSgpO1xuICAgIGlmIChzaGFwZSkge1xuICAgICAgY29uc3QgeyB4OiBjb2x1bW5zLCB5OiByb3dzIH0gPSB0aGlzLnJpcHBsZXMuc2l6ZTtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKChsb2NhbC54IC8gdGhpcy5zaXplLngpICogY29sdW1ucyk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcigobG9jYWwueSAvIHRoaXMuc2l6ZS55KSAqIHJvd3MpO1xuXG4gICAgICBpZiAoc2hhcGVbeCArIHkgKiBjb2x1bW5zXSA8IDEyOCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZURlcHRoKGxvY2FsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgdmFsdWUgZnJvbSB0aGUgZGVwdGggZ3JpZCwgaW4gdGhlIHNhbWUgd2F5IHRoYXQgYSB0ZXh0dXJlIHdvdWxkXG4gICAqL1xuICBwcml2YXRlIGludGVycG9sYXRlRGVwdGgobG9jYWw6IHZlYzIpOiBudW1iZXIge1xuICAgIGNvbnN0IGdyaWQgPSB0aGlzLmRlcHRoR3JpZDtcbiAgICBjb25zdCByb3dzID0gZ3JpZC5sZW5ndGg7XG4gICAgY29uc3QgY29sdW1ucyA9IGdyaWRbMF0ubGVuZ3RoO1xuXG4gICAgY29uc3QgdSA9IChsb2NhbC54IC8gdGhpcy5zaXplLngpICogY29sdW1ucyAtIDAuNTtcbiAgICBjb25zdCB2ID0gKGxvY2FsLnkgLyB0aGlzLnNpemUueSkgKiByb3dzIC0gMC41O1xuICAgIGNvbnN0IGNsYW1wWCA9ICh4OiBudW1iZXIpID0+IE1hdGgubWluKE1hdGgubWF4KHgsIDApLCBjb2x1bW5zIC0gMSk7XG4gICAgY29uc3QgY2xhbXBZID0gKHk6IG51bWJlcikgPT4gTWF0aC5taW4oTWF0aC5tYXgoeSwgMCksIHJvd3MgLSAxKTtcblxuICAgIGNvbnN0IHgwID0gTWF0aC5mbG9vcih1KTtcbiAgICBjb25zdCB5MCA9IE1hdGguZmxvb3Iodik7XG4gICAgY29uc3QgdHggPSB1IC0geDA7XG4gICAgY29uc3QgdHkgPSB2IC0geTA7XG5cbiAgICBjb25zdCB2YWx1ZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gZ3JpZFtjbGFtcFkoeSldW2NsYW1wWCh4KV07XG4gICAgY29uc3QgdG9wID0gdmFsdWUoeDAsIHkwKSAqICgxIC0gdHgpICsgdmFsdWUoeDAgKyAxLCB5MCkgKiB0eDtcbiAgICBjb25zdCBib3R0b20gPSB2YWx1ZSh4MCwgeTAgKyAxKSAqICgxIC0gdHgpICsgdmFsdWUoeDAgKyAxLCB5MCArIDEpICogdHg7XG5cbiAgICByZXR1cm4gdG9wICogKDEgLSB0eSkgKyBib3R0b20gKiB0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXN0dXJiIHRoZSB3YXRlciBhdCBhIHdvcmxkIHBvc2l0aW9uLCBmb3IgZXhhbXBsZSBpZiBzb21ldGhpbmcgaGFzIGZhbGxlblxuICAgKiBpbnRvIGl0XG4gICAqL1xuICBwdWJsaWMgZGlzdHVyYihwb3NpdGlvbjogdmVjMiwgb3B0aW9uczogUmlwcGxlT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5nZXRTaGFwZSgpO1xuICAgIHRoaXMucmlwcGxlcy5kaXN0dXJiKHZlYzIuc3ViKHBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLnVwZGF0ZVJhaW4oZHQpO1xuICAgIHRoaXMucmlwcGxlcy51cGRhdGUoZHQsIHRoaXMucmlwcGxlU3BlZWQsIHRoaXMucmlwcGxlRGFtcGluZyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJhaW4oZHQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnJhaW4gPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZWEgPSB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55O1xuICAgIGNvbnN0IGludGVydmFsID0gV2F0ZXJSZWdpb24uUkFJTl9BUkVBIC8gKHRoaXMucmFpbiAqIGFyZWEpO1xuXG4gICAgdGhpcy5yYWluVGltZSArPSBkdDtcbiAgICB3aGlsZSAodGhpcy5yYWluVGltZSA+PSBpbnRlcnZhbCkge1xuICAgICAgdGhpcy5yYWluVGltZSAtPSBpbnRlcnZhbDtcbiAgICAgIHRoaXMuZGlzdHVyYihcbiAgICAgICAgdmVjMihcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyBNYXRoLnJhbmRvbSgpICogdGhpcy5zaXplLngsXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMuc2l6ZS55XG4gICAgICAgICksXG4gICAgICAgIHtcbiAgICAgICAgICByYWRpdXM6IFdhdGVyUmVnaW9uLlJBSU5EUk9QX1JBRElVUyxcbiAgICAgICAgICBzdHJlbmd0aDogLXRoaXMucmFpblN0cmVuZ3RoLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGlzIHJlZ2lvbiBpcyByZW1vdmVkXG4gICAqL1xuICBwdWJsaWMgb25SZW1vdmUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyByZWdpb24gZnJvbSB0aGUgd2F0ZXIgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMuc3lzdGVtLnJlbW92ZSh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIEZyYW1lLFxuICBHbENvbnRleHQsXG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUmlwcGxlT3B0aW9ucyB9IGZyb20gJy4vUmlwcGxlRmllbGQnO1xuaW1wb3J0IHsgV2F0ZXJPdXRwdXQsIFdhdGVyUGFzcyB9IGZyb20gJy4vV2F0ZXJQYXNzJztcbmltcG9ydCB7XG4gIFdhdGVyUmVnaW9uLFxuICBXYXRlclJlZ2lvbk9wdGlvbnMsXG4gIFdhdGVyU2FtcGxlLFxufSBmcm9tICcuL1dhdGVyUmVnaW9uJztcblxuLyoqXG4gKiBSZW5kZXJzIHdhdGVyXG4gKlxuICogV2F0ZXIgc2hvd3Mgd2hhdCdzIHVuZGVybmVhdGggaXQsIHNvIHRoaXMgaGFzIHRvIGJlIGNhbGxlZCBwYXJ0LXdheSB0aHJvdWdoXG4gKiBkcmF3aW5nIHRoZSBzY2VuZS4gU2VlIGBXb3JsZGAgZm9yIGhvdyB0aGlzIGZpdHMgdG9nZXRoZXIgd2l0aCBldmVyeXRoaW5nXG4gKiBlbHNlXG4gKlxuICogMS4gQ2FsbCBgdXBkYXRlKClgIGV2ZXJ5IGZyYW1lXG4gKiAyLiBEcmF3IGV2ZXJ5dGhpbmcgdGhhdCdzIHVuZGVybmVhdGggdGhlIHdhdGVyXG4gKiAzLiBDYWxsIGBkcmF3KClgXG4gKiA0LiBEcmF3IGV2ZXJ5dGhpbmcgdGhhdCdzIG9uIHRvcCBvZiB0aGUgd2F0ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFdhdGVyU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaW9uczogV2F0ZXJSZWdpb25bXSA9IFtdO1xuICBwcml2YXRlIGdsQ29udGV4dDogR2xDb250ZXh0IHwgbnVsbDtcbiAgcHJpdmF0ZSBwYXNzOiBXYXRlclBhc3MgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSB0aW1lOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGZyYW1lOiBGcmFtZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTY3JlZW4tc2l6ZWQgaW1hZ2VzIG9mIHRoZSB3YXRlcidzIHN1cmZhY2UsIGZvciB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbE1hcENvbnRleHQgPSBXYXRlclN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBub3JtYWxNYXBDYW52YXMgPSB0aGlzLm5vcm1hbE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc3BlY3VsYXJNYXBDb250ZXh0ID0gV2F0ZXJTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc3BlY3VsYXJNYXBDYW52YXMgPSB0aGlzLnNwZWN1bGFyTWFwQ29udGV4dC5jYW52YXM7XG5cbiAgLyoqXG4gICAqIGBnbENvbnRleHRgIGxldHMgdGhlIHdhdGVyIHN5c3RlbSBzaGFyZSBhIFdlYkdMIGNvbnRleHQgd2l0aCBvdGhlciBzeXN0ZW1zLFxuICAgKiBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgaXRzIG93blxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKGdsQ29udGV4dD86IEdsQ29udGV4dCkge1xuICAgIHRoaXMuZ2xDb250ZXh0ID0gZ2xDb250ZXh0ID8/IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgYSBXZWJHTCBjb250ZXh0IHdpdGggb3RoZXIgc3lzdGVtcywgdGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYmVmb3JlXG4gICAqIHRoZSBmaXJzdCByZW5kZXIgYW5kIGRvZXMgbm90aGluZyBpZiBhIGNvbnRleHQgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgICovXG4gIHB1YmxpYyB1c2VHbENvbnRleHQoZ2xDb250ZXh0OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmdsQ29udGV4dCA/Pz0gZ2xDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIHdhdGVyXG4gICAqL1xuICBwdWJsaWMgYWRkUmVnaW9uKG9wdGlvbnM6IFdhdGVyUmVnaW9uT3B0aW9ucyk6IFdhdGVyUmVnaW9uIHtcbiAgICBjb25zdCByZWdpb24gPSBuZXcgV2F0ZXJSZWdpb24odGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5yZWdpb25zLnB1c2gocmVnaW9uKTtcblxuICAgIHJldHVybiByZWdpb247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGFyZWEgb2Ygd2F0ZXJcbiAgICovXG4gIHB1YmxpYyByZW1vdmUocmVnaW9uOiBXYXRlclJlZ2lvbikge1xuICAgIHRoaXMucmVnaW9ucyA9IHRoaXMucmVnaW9ucy5maWx0ZXIociA9PiByICE9PSByZWdpb24pO1xuICAgIHRoaXMucGFzcz8ucmVsZWFzZShyZWdpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHdhdGVyIGF0IGEgd29ybGQgcG9zaXRpb24sIHRoaXMgaXMgbnVsbCBpZiB0aGVyZSBpc24ndCBhbnlcbiAgICovXG4gIHB1YmxpYyBzYW1wbGUocG9zaXRpb246IHZlYzIpOiBXYXRlclNhbXBsZSB8IG51bGwge1xuICAgIGZvciAoY29uc3QgcmVnaW9uIG9mIHRoaXMucmVnaW9ucykge1xuICAgICAgY29uc3QgZGVwdGggPSByZWdpb24uZGVwdGhBdChwb3NpdGlvbik7XG4gICAgICBpZiAoZGVwdGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IHJlZ2lvbiwgZGVwdGggfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXN0dXJiIHRoZSB3YXRlciBhdCBhIHdvcmxkIHBvc2l0aW9uLCBmb3IgZXhhbXBsZSBpZiBzb21ldGhpbmcgaGFzIGZhbGxlblxuICAgKiBpbnRvIGl0LiBUaGlzIGRvZXMgbm90aGluZyBpZiB0aGVyZSdzIG5vIHdhdGVyIHRoZXJlXG4gICAqL1xuICBwdWJsaWMgZGlzdHVyYihwb3NpdGlvbjogdmVjMiwgb3B0aW9ucz86IFJpcHBsZU9wdGlvbnMpIHtcbiAgICB0aGlzLnNhbXBsZShwb3NpdGlvbik/LnJlZ2lvbi5kaXN0dXJiKHBvc2l0aW9uLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSB3YXRlciBmb3J3YXJkLCB0aGlzIHNob3VsZCBiZSBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMudGltZSArPSBkdDtcbiAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4gcmVnaW9uLnVwZGF0ZShkdCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hhZGVyIHBhc3MsIGlmIGl0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwcml2YXRlIGdldFBhc3MoKTogV2F0ZXJQYXNzIHwgbnVsbCB7XG4gICAgdGhpcy5wYXNzID8/PSBuZXcgV2F0ZXJQYXNzKHRoaXMuZ2xDb250ZXh0ID8/IG5ldyBHbENvbnRleHQoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5wYXNzLmF2YWlsYWJsZSA/IHRoaXMucGFzcyA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHZpc2libGVSZWdpb25zKHsgY2FtZXJhIH06IEZyYW1lKTogV2F0ZXJSZWdpb25bXSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IGludGVydmFsVG9SZWN0YW5nbGUoY2FtZXJhLmJvdW5kcyk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWdpb25zLmZpbHRlcihyZWdpb24gPT4gcmVjdGFuZ2xlc0ludGVyc2VjdChyZWdpb24sIHZpc2libGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSB3YXRlciBvbnRvIHRoZSBmcmFtZSdzIGNvbnRleHQsIHVzaW5nIHdoYXQncyBhbHJlYWR5IHRoZXJlIGFzIHRoZVxuICAgKiBzY2VuZSB1bmRlcm5lYXRoIHRoZSB3YXRlclxuICAgKi9cbiAgcHVibGljIGRyYXcoZnJhbWU6IEZyYW1lKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgY29uc3QgcmVnaW9ucyA9IHRoaXMudmlzaWJsZVJlZ2lvbnMoZnJhbWUpO1xuICAgIGNvbnN0IHBhc3MgPSByZWdpb25zLmxlbmd0aCA+IDAgPyB0aGlzLmdldFBhc3MoKSA6IG51bGw7XG4gICAgaWYgKCFwYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGFzcy5yZW5kZXIoZnJhbWUsIHJlZ2lvbnMsIFdhdGVyT3V0cHV0LkNvbG91ciwgdGhpcy50aW1lKTtcblxuICAgIGZyYW1lLmNvbnRleHQuc2F2ZSgpO1xuICAgIGZyYW1lLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGZyYW1lLmNvbnRleHQuZHJhd0ltYWdlKHBhc3MuY2FudmFzLCAwLCAwKTtcbiAgICBmcmFtZS5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIG5vcm1hbCBtYXAgYW5kIHNwZWN1bGFyIG1hcCBvZiB0aGUgd2F0ZXIncyBzdXJmYWNlXG4gICAqL1xuICBwdWJsaWMgZHJhd0xpZ2h0aW5nTWFwcyhmcmFtZTogRnJhbWUpIHtcbiAgICBjb25zdCByZWdpb25zID0gdGhpcy52aXNpYmxlUmVnaW9ucyhmcmFtZSk7XG4gICAgY29uc3QgcGFzcyA9IHJlZ2lvbnMubGVuZ3RoID4gMCA/IHRoaXMuZ2V0UGFzcygpIDogbnVsbDtcbiAgICBpZiAoIXBhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtjb250ZXh0LCBvdXRwdXRdIG9mIFtcbiAgICAgIFt0aGlzLm5vcm1hbE1hcENvbnRleHQsIFdhdGVyT3V0cHV0Lk5vcm1hbF0sXG4gICAgICBbdGhpcy5zcGVjdWxhck1hcENvbnRleHQsIFdhdGVyT3V0cHV0LlNwZWN1bGFyXSxcbiAgICBdIGFzIGNvbnN0KSB7XG4gICAgICBwYXNzLnJlbmRlcihmcmFtZSwgcmVnaW9ucywgb3V0cHV0LCB0aGlzLnRpbWUpO1xuXG4gICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGZyYW1lLnNjcmVlbi54O1xuICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gZnJhbWUuc2NyZWVuLnk7XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShwYXNzLmNhbnZhcywgMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgcGFydCBvZiBhIHNjcmVlbi1zaXplZCBtYXAgb250byBhIGNvbnRleHQgdGhhdCdzIHVzaW5nIHRoZSBjYW1lcmEnc1xuICAgKiB0cmFuc2Zvcm1zLCB0aGlzIGlzIGZvciBhZGRpbmcgdGhlIHdhdGVyJ3Mgc3VyZmFjZSB0byB0aGUgc2NlbmUncyBtYXBzXG4gICAqL1xuICBwcml2YXRlIGRyYXdSZWdpb25NYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb24sXG4gICAgbWFwOiBIVE1MQ2FudmFzRWxlbWVudFxuICApIHtcbiAgICBjb25zdCB7IGZyYW1lIH0gPSB0aGlzO1xuICAgIGlmICghZnJhbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3BMZWZ0ID0gZnJhbWUuY2FtZXJhLndvcmxkVG9TY3JlZW4ocmVnaW9uLnBvc2l0aW9uKTtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IGZyYW1lLmNhbWVyYS53b3JsZFRvU2NyZWVuKFxuICAgICAgdmVjMi5hZGQocmVnaW9uLnBvc2l0aW9uLCByZWdpb24uc2l6ZSlcbiAgICApO1xuICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heChNYXRoLmZsb29yKHRvcExlZnQueCksIDApO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KE1hdGguZmxvb3IodG9wTGVmdC55KSwgMCk7XG4gICAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbihNYXRoLmNlaWwoYm90dG9tUmlnaHQueCksIG1hcC53aWR0aCk7XG4gICAgY29uc3QgYm90dG9tID0gTWF0aC5taW4oTWF0aC5jZWlsKGJvdHRvbVJpZ2h0LnkpLCBtYXAuaGVpZ2h0KTtcbiAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICBjb25zdCBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgICBpZiAod2lkdGggPD0gMCB8fCBoZWlnaHQgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKG1hcCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdSZWdpb25Ob3JtYWxNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb25cbiAgKSB7XG4gICAgdGhpcy5kcmF3UmVnaW9uTWFwKGNvbnRleHQsIHJlZ2lvbiwgdGhpcy5ub3JtYWxNYXBDYW52YXMpO1xuICB9XG5cbiAgcHVibGljIGRyYXdSZWdpb25TcGVjdWxhck1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvblxuICApIHtcbiAgICB0aGlzLmRyYXdSZWdpb25NYXAoY29udGV4dCwgcmVnaW9uLCB0aGlzLnNwZWN1bGFyTWFwQ2FudmFzKTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgUmlwcGxlRmllbGQgfSBmcm9tICcuL1JpcHBsZUZpZWxkJztcbmV4cG9ydCB0eXBlIHsgUmlwcGxlT3B0aW9ucyB9IGZyb20gJy4vUmlwcGxlRmllbGQnO1xuZXhwb3J0IHsgV2F0ZXJSZWdpb24gfSBmcm9tICcuL1dhdGVyUmVnaW9uJztcbmV4cG9ydCB0eXBlIHtcbiAgV2F0ZXJHcmlkLFxuICBXYXRlclJlZ2lvbk9wdGlvbnMsXG4gIFdhdGVyU2FtcGxlLFxufSBmcm9tICcuL1dhdGVyUmVnaW9uJztcbmV4cG9ydCB7IFdhdGVyU3lzdGVtIH0gZnJvbSAnLi9XYXRlclN5c3RlbSc7XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIGJvdW5kaW5nUmVjdGFuZ2xlLFxuICBGcmFtZSxcbiAgR2xDb250ZXh0LFxuICBSZWN0YW5nbGUsXG4gIFNjZW5lQ2FtZXJhLFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7XG4gIEFjdG9yLFxuICBBY3Rvck9wdGlvbnMsXG4gIEdyb3VuZFJlY2VpdmVyLFxuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIExpZ2h0LFxuICBMaWdodGluZ1N5c3RlbSxcbiAgTGlnaHRPcHRpb25zLFxuICBTcHJpdGVBY3Rvck9wdGlvbnMsXG4gIFN1cmZhY2UsXG4gIFdhbGwsXG4gIFdhbGxPcHRpb25zLFxuICBXYWxsUmVjZWl2ZXIsXG59IGZyb20gJy4uL2xpZ2h0aW5nJztcbmltcG9ydCB0eXBlIHtcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbiAgUmVmbGVjdGlvbk9iamVjdCxcbiAgUmVmbGVjdGlvblNvdXJjZSxcbiAgUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzLFxuICBSZWZsZWN0aW9uU3lzdGVtLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi4vcmVmbGVjdGlvbnMnO1xuaW1wb3J0IHR5cGUge1xuICBXYXRlclJlZ2lvbixcbiAgV2F0ZXJSZWdpb25PcHRpb25zLFxuICBXYXRlclN5c3RlbSxcbn0gZnJvbSAnLi4vd2F0ZXInO1xuXG5leHBvcnQgdHlwZSBXb3JsZE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBUaGUgbGlnaHRpbmcgc3lzdGVtIGZvciB0aGlzIHdvcmxkXG4gICAqXG4gICAqIFRoZSBsaWdodGluZyBzeXN0ZW0gaG9sZHMgdGhlIHNjZW5lLCBzbyBhIHdvcmxkIGFsd2F5cyBoYXMgb25lLiBJZiB0aGlzXG4gICAqIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZSB3aWxsIGJlIGRyYXduIHdpdGhvdXQgYW55IGxpZ2h0aW5nXG4gICAqL1xuICBsaWdodGluZz86IExpZ2h0aW5nU3lzdGVtO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVmbGVjdGlvbiBzeXN0ZW0gZm9yIHRoaXMgd29ybGQsIGlmIHRoaXMgaXNuJ3Qgc2V0IHRoZW4gdGhlIHNjZW5lXG4gICAqIHdvbid0IGhhdmUgYW55IHJlZmxlY3Rpb25zXG4gICAqL1xuICByZWZsZWN0aW9ucz86IFJlZmxlY3Rpb25TeXN0ZW07XG5cbiAgLyoqXG4gICAqIFRoZSB3YXRlciBzeXN0ZW0gZm9yIHRoaXMgd29ybGQsIGlmIHRoaXMgaXNuJ3Qgc2V0IHRoZW4gdGhlIHNjZW5lIHdvbid0XG4gICAqIGhhdmUgYW55IHdhdGVyXG4gICAqL1xuICB3YXRlcj86IFdhdGVyU3lzdGVtO1xuXG4gIC8qKlxuICAgKiBUaGUgV2ViR0wgY29udGV4dCB0byBzaGFyZSBiZXR3ZWVuIHN5c3RlbXMsIHRoZSBkZWZhdWx0IGlzIGEgbmV3IGNvbnRleHRcbiAgICovXG4gIGdsQ29udGV4dD86IEdsQ29udGV4dDtcbn07XG5cbnR5cGUgUmVmbGVjdGlvblNvdXJjZU9wdGlvbiA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIG9iamVjdCBhcHBlYXIgaW4gcmVmbGVjdGlvbnM/IFVzZSBhbiBvYmplY3QgdG8gY29uZmlndXJlIGhvd1xuICAgKiBpdCdzIHJlZmxlY3RlZFxuICAgKi9cbiAgcmVmbGVjdGlvblNvdXJjZT86IGJvb2xlYW4gfCBSZWZsZWN0aW9uU291cmNlU2V0dGluZ3M7XG59O1xuXG5leHBvcnQgdHlwZSBXb3JsZEFjdG9yV2F0ZXJPcHRpb25zID0ge1xuICAvKipcbiAgICogSG93IG11Y2ggb2YgdGhpcyBhY3RvciBpcyB1bmRlcndhdGVyIGluIHRoZSBkZWVwZXN0IHdhdGVyLCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgbWF4RGVwdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhpcyBhY3RvcidzIGZlZXQgYXJlIGFib3ZlIHRoZSBib3R0b20gZWRnZSBvZiBpdHMgaW1hZ2VcbiAgICovXG4gIGZvb3RPZmZzZXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERvZXMgdGhpcyBhY3RvciBtYWtlIHJpcHBsZXMgd2hlbiBpdCBtb3ZlcyB0aHJvdWdoIHRoZSB3YXRlcj9cbiAgICovXG4gIHJpcHBsZXM/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRBY3Rvck9wdGlvbnMgPSAoQWN0b3JPcHRpb25zIHwgU3ByaXRlQWN0b3JPcHRpb25zKSAmXG4gIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb24gJiB7XG4gICAgLyoqXG4gICAgICogU2hvdWxkIHRoZSBsb3dlciBwYXJ0IG9mIHRoaXMgYWN0b3IgZ28gdW5kZXJ3YXRlciB3aGVuIGl0IHN0YW5kcyBpblxuICAgICAqIHdhdGVyPyBVc2UgYW4gb2JqZWN0IHRvIGNvbmZpZ3VyZSBob3cgaXQgYmVoYXZlc1xuICAgICAqL1xuICAgIHN1Ym1lcnNpYmxlPzogYm9vbGVhbiB8IFdvcmxkQWN0b3JXYXRlck9wdGlvbnM7XG4gIH07XG5cbmV4cG9ydCB0eXBlIFdvcmxkR3JvdW5kT3B0aW9ucyA9IEdyb3VuZFJlY2VpdmVyT3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIGdyb3VuZCBzaG93IHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvIGNvbmZpZ3VyZSB0aGVcbiAgICogcmVmbGVjdGlvbiwgYnkgZGVmYXVsdCBpdCB3aWxsIGNvdmVyIHRoZSB3aG9sZSBhcmVhIG9mIHRoZSBncm91bmRcbiAgICovXG4gIHJlZmxlY3Rpb25SZWNlaXZlcj86IGJvb2xlYW4gfCBQYXJ0aWFsPEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucz47XG59O1xuXG5leHBvcnQgdHlwZSBXb3JsZFdhbGxPcHRpb25zID0gV2FsbE9wdGlvbnMgJlxuICBSZWZsZWN0aW9uU291cmNlT3B0aW9uICYge1xuICAgIC8qKlxuICAgICAqIFNob3VsZCB0aGUgZnJvbnQgb2YgdGhpcyB3YWxsIHNob3cgcmVmbGVjdGlvbnM/IFVzZSBhbiBvYmplY3QgdG9cbiAgICAgKiBjb25maWd1cmUgdGhlIHJlZmxlY3Rpb24sIGJ5IGRlZmF1bHQgaXQgd2lsbCBjb3ZlciB0aGUgd2hvbGUgZnJvbnRcbiAgICAgKi9cbiAgICByZWZsZWN0aW9uUmVjZWl2ZXI/OiBib29sZWFuIHwgUGFydGlhbDxXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucz47XG4gIH07XG5cbnR5cGUgU3VibWVyc2libGVBY3RvciA9IFJlcXVpcmVkPFdvcmxkQWN0b3JXYXRlck9wdGlvbnM+ICYge1xuICBhY3RvcjogQWN0b3I7XG4gIHNvdXJjZTogUmVmbGVjdGlvblNvdXJjZSB8IG51bGw7XG4gIGxhc3RSaXBwbGU6IHZlYzIgfCBudWxsO1xufTtcblxuLyoqXG4gKiBBIHNjZW5lIHRoYXQncyByZW5kZXJlZCBieSBzZXZlcmFsIHN5c3RlbXMgd29ya2luZyB0b2dldGhlclxuICpcbiAqIFN5c3RlbXMgZG9uJ3Qga25vdyBhYm91dCBlYWNoIG90aGVyLCB0aGV5IGVhY2ggZHJhdyBhIHBhcnQgb2YgdGhlIGZyYW1lIGFuZFxuICogdGhpcyBjbGFzcyBkZWNpZGVzIHRoZSBvcmRlci4gVGhlIGZyYW1lIGlzIHJlbmRlcmVkIGluIHRoZXNlIHN0ZXBzOlxuICpcbiAqIDEuIERyYXcgdGhlIGdyb3VuZFxuICogMi4gRHJhdyB0aGUgcGFydHMgb2YgYWN0b3JzIHRoYXQgYXJlIHVuZGVyd2F0ZXJcbiAqIDMuIERyYXcgcmVmbGVjdGlvbnMgb250byB0aGUgZmxvb3JcbiAqIDQuIERyYXcgdGhlIHdhdGVyLCB3aGljaCBzaG93cyBldmVyeXRoaW5nIGRyYXduIHNvIGZhciB1bmRlcm5lYXRoIGl0XG4gKiA1LiBEcmF3IHRoZSB3YWxscyBhbmQgYWN0b3JzIHRoYXQgc3RhbmQgb24gdGhlIGdyb3VuZCwgcmVmbGVjdGlvbnMgaW4gYSB3YWxsXG4gKiAgICBhcmUgZHJhd24gYWxvbmcgd2l0aCB0aGF0IHdhbGxcbiAqIDYuIEFwcGx5IGxpZ2h0aW5nIHRvIHRoZSB3aG9sZSBzY2VuZVxuICovXG5leHBvcnQgY2xhc3MgV29ybGQge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBXQVRFUl9aX0lOREVYID0gMTAwMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9XQVRFUl9PUFRJT05TID0ge1xuICAgIG1heERlcHRoOiAyNCxcbiAgICBmb290T2Zmc2V0OiAwLFxuICAgIHJpcHBsZXM6IHRydWUsXG4gIH07XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJJUFBMRV9ESVNUQU5DRSA9IDEyO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBSSVBQTEVfUkFESVVTID0gNTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUklQUExFX1NUUkVOR1RIID0gMC4zNTtcblxuICBwdWJsaWMgcmVhZG9ubHkgbGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtO1xuICBwdWJsaWMgcmVhZG9ubHkgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW0gfCBudWxsO1xuICBwdWJsaWMgcmVhZG9ubHkgd2F0ZXI6IFdhdGVyU3lzdGVtIHwgbnVsbDtcblxuICBwcml2YXRlIHN1Ym1lcnNpYmxlQWN0b3JzOiBTdWJtZXJzaWJsZUFjdG9yW10gPSBbXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9ucz86IFdvcmxkT3B0aW9ucykge1xuICAgIHRoaXMubGlnaHRpbmcgPVxuICAgICAgb3B0aW9ucz8ubGlnaHRpbmcgPz8gbmV3IExpZ2h0aW5nU3lzdGVtKHsgbGlnaHRpbmdFbmFibGVkOiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlZmxlY3Rpb25zID0gb3B0aW9ucz8ucmVmbGVjdGlvbnMgPz8gbnVsbDtcbiAgICB0aGlzLndhdGVyID0gb3B0aW9ucz8ud2F0ZXIgPz8gbnVsbDtcblxuICAgIGlmICh0aGlzLndhdGVyKSB7XG4gICAgICBjb25zdCBnbENvbnRleHQgPSBvcHRpb25zPy5nbENvbnRleHQgPz8gbmV3IEdsQ29udGV4dCgpO1xuXG4gICAgICB0aGlzLmxpZ2h0aW5nLnVzZUdsQ29udGV4dChnbENvbnRleHQpO1xuICAgICAgdGhpcy53YXRlci51c2VHbENvbnRleHQoZ2xDb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHN1cmZhY2Ugb3IgYSBncm91cCBvZiBzdXJmYWNlcyBsb29rIGxpa2UgYSBzaW5nbGUgb2JqZWN0IHRvIHRoZVxuICAgKiByZWZsZWN0aW9uIHN5c3RlbSwgdGhlIGJvdHRvbSBvZiB0aGUgZ3JvdXAgc2hvdWxkIGJlIHdoZXJlIGl0IG1lZXRzIHRoZVxuICAgKiBncm91bmRcbiAgICpcbiAgICogT3ZlcmxheXMgYXJlbid0IGluY2x1ZGVkLCB0aGV5IG1pZ2h0IGJlIHNob3dpbmcgcmVmbGVjdGlvbnMgdGhlbXNlbHZlc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVmbGVjdGlvbk9iamVjdChcbiAgICAuLi5zdXJmYWNlczogU3VyZmFjZTxhbnk+W11cbiAgKTogUmVmbGVjdGlvbk9iamVjdCB7XG4gICAgY29uc3QgYm91bmRzID0gKCkgPT5cbiAgICAgIHN1cmZhY2VzLnJlZHVjZTxSZWN0YW5nbGU+KGJvdW5kaW5nUmVjdGFuZ2xlLCBzdXJmYWNlc1swXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gYm91bmRzKCkucG9zaXRpb247XG4gICAgICB9LFxuICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiBib3VuZHMoKS5zaXplO1xuICAgICAgfSxcbiAgICAgIGRyYXc6IGNvbnRleHQgPT4gc3VyZmFjZXMuZm9yRWFjaChzID0+IHMuZHJhd0NvbnRlbnQoY29udGV4dCkpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGFyZWEgb2YgZ3JvdW5kXG4gICAqL1xuICBwdWJsaWMgYWRkR3JvdW5kKG9wdGlvbnM6IFdvcmxkR3JvdW5kT3B0aW9ucyk6IEdyb3VuZFJlY2VpdmVyIHtcbiAgICBjb25zdCB7IHJlZmxlY3Rpb25SZWNlaXZlciwgLi4uZ3JvdW5kIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHN1cmZhY2UgPSB0aGlzLmxpZ2h0aW5nLmFkZEdyb3VuZChncm91bmQpO1xuXG4gICAgaWYgKHJlZmxlY3Rpb25SZWNlaXZlcikge1xuICAgICAgdGhpcy5hZGRGbG9vclJlZmxlY3Rpb24oXG4gICAgICAgIHN1cmZhY2UsXG4gICAgICAgIHJlZmxlY3Rpb25SZWNlaXZlciA9PT0gdHJ1ZSA/IHt9IDogcmVmbGVjdGlvblJlY2VpdmVyXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXJmYWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNvbGlkIHdhbGxcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsKG9wdGlvbnM6IFdvcmxkV2FsbE9wdGlvbnMpOiBXYWxsIHtcbiAgICBjb25zdCB7IHJlZmxlY3Rpb25Tb3VyY2UsIHJlZmxlY3Rpb25SZWNlaXZlciwgLi4ud2FsbE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgd2FsbCA9IHRoaXMubGlnaHRpbmcuYWRkV2FsbCh3YWxsT3B0aW9ucyk7XG5cbiAgICBpZiAocmVmbGVjdGlvblNvdXJjZSkge1xuICAgICAgLy8gQSBtaXJyb3Igd291bGQgc2hvdyB0aGUgYmFjayBvZiBhIHdhbGwsIHdoaWNoIHdlIGRvbid0IGhhdmUgYSBwaWN0dXJlXG4gICAgICAvLyBvZiwgc28gYnkgZGVmYXVsdCB3YWxscyBvbmx5IGFwcGVhciBpbiB0aGUgZmxvb3JcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMucmVmbGVjdGlvbnM/LmFkZFNvdXJjZSh7XG4gICAgICAgIHdhbGw6IGZhbHNlLFxuICAgICAgICAuLi4ocmVmbGVjdGlvblNvdXJjZSA9PT0gdHJ1ZSA/IHt9IDogcmVmbGVjdGlvblNvdXJjZSksXG4gICAgICAgIG9iamVjdDogV29ybGQucmVmbGVjdGlvbk9iamVjdCh3YWxsLmZyb250LCB3YWxsLnRvcCksXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICB3YWxsLmZyb250Lm9uUmVtb3ZlKCgpID0+IHNvdXJjZS5yZW1vdmUoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmxlY3Rpb25SZWNlaXZlcikge1xuICAgICAgdGhpcy5hZGRNaXJyb3IoXG4gICAgICAgIHdhbGwuZnJvbnQsXG4gICAgICAgIHJlZmxlY3Rpb25SZWNlaXZlciA9PT0gdHJ1ZSA/IHt9IDogcmVmbGVjdGlvblJlY2VpdmVyXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB3YWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1vdmluZyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBhZGRBY3RvcihvcHRpb25zOiBXb3JsZEFjdG9yT3B0aW9ucyk6IEFjdG9yIHtcbiAgICBjb25zdCB7IHJlZmxlY3Rpb25Tb3VyY2UsIHN1Ym1lcnNpYmxlLCAuLi5hY3Rvck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgYWN0b3IgPSB0aGlzLmxpZ2h0aW5nLmFkZEFjdG9yKFxuICAgICAgYWN0b3JPcHRpb25zIGFzIEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9uc1xuICAgICk7XG5cbiAgICBjb25zdCBzb3VyY2UgPSByZWZsZWN0aW9uU291cmNlXG4gICAgICA/IHRoaXMuYWRkQWN0b3JSZWZsZWN0aW9uKFxuICAgICAgICAgIGFjdG9yLFxuICAgICAgICAgIHJlZmxlY3Rpb25Tb3VyY2UgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25Tb3VyY2VcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBhY3Rvci5zdXJmYWNlLm9uUmVtb3ZlKCgpID0+IHNvdXJjZS5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgaWYgKHN1Ym1lcnNpYmxlKSB7XG4gICAgICBjb25zdCBpdGVtOiBTdWJtZXJzaWJsZUFjdG9yID0ge1xuICAgICAgICAuLi5Xb3JsZC5ERUZBVUxUX1dBVEVSX09QVElPTlMsXG4gICAgICAgIC4uLihzdWJtZXJzaWJsZSA9PT0gdHJ1ZSA/IHt9IDogc3VibWVyc2libGUpLFxuICAgICAgICBhY3RvcixcbiAgICAgICAgc291cmNlOiBzb3VyY2UgPz8gbnVsbCxcbiAgICAgICAgbGFzdFJpcHBsZTogbnVsbCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc3VibWVyc2libGVBY3RvcnMucHVzaChpdGVtKTtcbiAgICAgIGFjdG9yLnN1cmZhY2Uub25SZW1vdmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnN1Ym1lcnNpYmxlQWN0b3JzID0gdGhpcy5zdWJtZXJzaWJsZUFjdG9ycy5maWx0ZXIoXG4gICAgICAgICAgb3RoZXIgPT4gb3RoZXIgIT09IGl0ZW1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY3RvcjtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQWN0b3JSZWZsZWN0aW9uKFxuICAgIGFjdG9yOiBBY3RvcixcbiAgICBzZXR0aW5nczogUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzXG4gICk6IFJlZmxlY3Rpb25Tb3VyY2UgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25zPy5hZGRTb3VyY2Uoe1xuICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICAuLi4oYWN0b3Iuc3ByaXRlXG4gICAgICAgID8geyBzcHJpdGU6IGFjdG9yLnNwcml0ZSB9XG4gICAgICAgIDogeyBvYmplY3Q6IFdvcmxkLnJlZmxlY3Rpb25PYmplY3QoYWN0b3Iuc3VyZmFjZSkgfSksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGFyZWEgb2Ygd2F0ZXIsIHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGlzIHdvcmxkIGRvZXNuJ3QgaGF2ZSBhXG4gICAqIHdhdGVyIHN5c3RlbVxuICAgKlxuICAgKiBXYXRlciBpcyBsaXQgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBncm91bmQsIGFuZCBoYXMgaXRzIG93biBzdXJmYWNlIGZvclxuICAgKiB0aGlzIHNvIHRoYXQgd2F2ZXMgY2FuIGNhdGNoIHRoZSBsaWdodFxuICAgKi9cbiAgcHVibGljIGFkZFdhdGVyKG9wdGlvbnM6IFdhdGVyUmVnaW9uT3B0aW9ucyk6IFdhdGVyUmVnaW9uIHwgbnVsbCB7XG4gICAgY29uc3QgeyB3YXRlciB9ID0gdGhpcztcbiAgICBpZiAoIXdhdGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZWdpb24gPSB3YXRlci5hZGRSZWdpb24ob3B0aW9ucyk7XG4gICAgY29uc3Qgc3VyZmFjZSA9IHRoaXMubGlnaHRpbmcuYWRkR3JvdW5kKHtcbiAgICAgIHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogb3B0aW9ucy5zaXplLFxuICAgICAgekluZGV4OiBXb3JsZC5XQVRFUl9aX0lOREVYLFxuICAgICAgY3VzdG9tRHJhdzoge1xuICAgICAgICBpbWFnZTogKCkgPT4ge30sXG4gICAgICAgIG5vcm1hbE1hcDogY29udGV4dCA9PiB3YXRlci5kcmF3UmVnaW9uTm9ybWFsTWFwKGNvbnRleHQsIHJlZ2lvbiksXG4gICAgICAgIHNwZWN1bGFyTWFwOiBjb250ZXh0ID0+IHdhdGVyLmRyYXdSZWdpb25TcGVjdWxhck1hcChjb250ZXh0LCByZWdpb24pLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJlZ2lvbi5vblJlbW92ZSgoKSA9PiBzdXJmYWNlLnJlbW92ZSgpKTtcblxuICAgIHJldHVybiByZWdpb247XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRMaWdodChvcHRpb25zOiBMaWdodE9wdGlvbnMpOiBMaWdodCB7XG4gICAgcmV0dXJuIHRoaXMubGlnaHRpbmcuYWRkTGlnaHQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBwYXJ0IG9mIGFuIGFyZWEgb2YgZ3JvdW5kIHJlZmxlY3RpdmVcbiAgICpcbiAgICogVGhpcyBjYW4gYmUgY2FsbGVkIHNldmVyYWwgdGltZXMgZm9yIGRpZmZlcmVudCBwYXJ0cyBvZiB0aGUgc2FtZSBncm91bmRcbiAgICovXG4gIHB1YmxpYyBhZGRGbG9vclJlZmxlY3Rpb24oXG4gICAgZ3JvdW5kOiBHcm91bmRSZWNlaXZlcixcbiAgICBvcHRpb25zPzogUGFydGlhbDxGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+XG4gICk6IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyIHwgbnVsbCB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPVxuICAgICAgdGhpcy5yZWZsZWN0aW9ucz8uYWRkRmxvb3JSZWNlaXZlcih7XG4gICAgICAgIHBvc2l0aW9uOiBncm91bmQucG9zaXRpb24sXG4gICAgICAgIHNpemU6IGdyb3VuZC5zaXplLFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfSkgPz8gbnVsbDtcblxuICAgIGlmIChyZWNlaXZlcikge1xuICAgICAgZ3JvdW5kLm9uUmVtb3ZlKCgpID0+IHJlY2VpdmVyLnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjZWl2ZXI7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBwYXJ0IG9mIGEgd2FsbCByZWZsZWN0aXZlXG4gICAqXG4gICAqIFRoZSByZWZsZWN0aW9uIGlzIGRyYXduIHN0cmFpZ2h0IGFmdGVyIHRoZSB3YWxsLCBzbyBpdCdzIGNvdmVyZWQgYnlcbiAgICogYW55dGhpbmcgaW4gZnJvbnQgb2YgdGhlIHdhbGwuIFRoaXMgY2FuIGJlIGNhbGxlZCBzZXZlcmFsIHRpbWVzIGZvclxuICAgKiBkaWZmZXJlbnQgcGFydHMgb2YgdGhlIHNhbWUgd2FsbFxuICAgKi9cbiAgcHVibGljIGFkZE1pcnJvcihcbiAgICB3YWxsOiBXYWxsUmVjZWl2ZXIsXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8V2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+XG4gICk6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIgfCBudWxsIHtcbiAgICBjb25zdCByZWNlaXZlciA9XG4gICAgICB0aGlzLnJlZmxlY3Rpb25zPy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgICBwb3NpdGlvbjogd2FsbC5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogd2FsbC5zaXplLFxuICAgICAgICBmb290OiB3YWxsLnBvc2l0aW9uLnkgKyB3YWxsLnNpemUueSxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH0pID8/IG51bGw7XG5cbiAgICBpZiAocmVjZWl2ZXIpIHtcbiAgICAgIHJlY2VpdmVyLm9uUmVtb3ZlKHdhbGwuYWRkT3ZlcmxheShjb250ZXh0ID0+IHJlY2VpdmVyLmRyYXcoY29udGV4dCkpKTtcbiAgICAgIHdhbGwub25SZW1vdmUoKCkgPT4gcmVjZWl2ZXIucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZWNlaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSB3b3JsZCBmb3J3YXJkLCB0aGlzIHNob3VsZCBiZSBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMud2F0ZXI/LnVwZGF0ZShkdCk7XG4gICAgdGhpcy51cGRhdGVSaXBwbGVzKCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB3aGVyZSBhIHN1Ym1lcnNpYmxlIGFjdG9yJ3MgZmVldCBhcmVcbiAgICovXG4gIHByaXZhdGUgZm9vdFBvc2l0aW9uKHsgYWN0b3IsIGZvb3RPZmZzZXQgfTogU3VibWVyc2libGVBY3Rvcik6IHZlYzIge1xuICAgIGFjdG9yLnN5bmMoKTtcblxuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IGFjdG9yLnN1cmZhY2U7XG5cbiAgICByZXR1cm4gdmVjMihcbiAgICAgIHBvc2l0aW9uLnggKyBzaXplLnggLyAyLFxuICAgICAgcG9zaXRpb24ueSArIHNpemUueSAtIGZvb3RPZmZzZXRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdG9ycyBtYWtlIHJpcHBsZXMgYXMgdGhleSBtb3ZlIHRocm91Z2ggdGhlIHdhdGVyXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZVJpcHBsZXMoKSB7XG4gICAgY29uc3QgeyB3YXRlciB9ID0gdGhpcztcbiAgICBpZiAoIXdhdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuc3VibWVyc2libGVBY3RvcnMpIHtcbiAgICAgIGlmICghaXRlbS5yaXBwbGVzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb290ID0gdGhpcy5mb290UG9zaXRpb24oaXRlbSk7XG4gICAgICBjb25zdCBtb3ZlZCA9XG4gICAgICAgIGl0ZW0ubGFzdFJpcHBsZSA9PT0gbnVsbCB8fFxuICAgICAgICB2ZWMyLmxlbih2ZWMyLnN1Yihmb290LCBpdGVtLmxhc3RSaXBwbGUpKSA+PSBXb3JsZC5SSVBQTEVfRElTVEFOQ0U7XG5cbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICBpdGVtLmxhc3RSaXBwbGUgPSBmb290O1xuICAgICAgICB3YXRlci5kaXN0dXJiKGZvb3QsIHtcbiAgICAgICAgICByYWRpdXM6IFdvcmxkLlJJUFBMRV9SQURJVVMsXG4gICAgICAgICAgc3RyZW5ndGg6IFdvcmxkLlJJUFBMRV9TVFJFTkdUSCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgb3V0IGhvdyBmYXIgZWFjaCBzdWJtZXJzaWJsZSBhY3RvciBpcyB1bmRlcndhdGVyLCB0aGlzIG5lZWRzIHRvIGJlXG4gICAqIGRvbmUgYmVmb3JlIGFueXRoaW5nIGlzIGRyYXduIGJlY2F1c2UgaXQgc3BsaXRzIHRoZSBhY3RvciBpbnRvIDIgcGFydHNcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlV2F0ZXJsaW5lcygpIHtcbiAgICBjb25zdCB7IHdhdGVyIH0gPSB0aGlzO1xuICAgIGlmICghd2F0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5zdWJtZXJzaWJsZUFjdG9ycykge1xuICAgICAgY29uc3QgZm9vdCA9IHRoaXMuZm9vdFBvc2l0aW9uKGl0ZW0pO1xuICAgICAgY29uc3QgZGVwdGggPSB3YXRlci5zYW1wbGUoZm9vdCk/LmRlcHRoID8/IDA7XG4gICAgICBjb25zdCB3YXRlcmxpbmUgPSBkZXB0aCA+IDAgPyBmb290LnkgLSBkZXB0aCAqIGl0ZW0ubWF4RGVwdGggOiBudWxsO1xuXG4gICAgICBpdGVtLmFjdG9yLnN1cmZhY2UuY2xpcEJvdHRvbSA9IHdhdGVybGluZTtcbiAgICAgIGlmIChpdGVtLnNvdXJjZSkge1xuICAgICAgICBpdGVtLnNvdXJjZS53YXRlcmxpbmUgPSB3YXRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgc2NlbmUgb250byBhIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW1lcmE6IFNjZW5lQ2FtZXJhKSB7XG4gICAgY29uc3QgZnJhbWU6IEZyYW1lID0ge1xuICAgICAgY29udGV4dCxcbiAgICAgIGNhbWVyYSxcbiAgICAgIHNjcmVlbjogdmVjMihjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KSxcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVXYXRlcmxpbmVzKCk7XG4gICAgdGhpcy5yZWZsZWN0aW9ucz8ucHJlcGFyZShmcmFtZSk7XG5cbiAgICB0aGlzLmRyYXdMYXllcihmcmFtZSwgKCkgPT4ge1xuICAgICAgdGhpcy5saWdodGluZy5kcmF3R3JvdW5kKGNvbnRleHQpO1xuICAgICAgdGhpcy5kcmF3U3VibWVyZ2VkQWN0b3JzKGNvbnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMucmVmbGVjdGlvbnM/LmRyYXdGbG9vcigpO1xuICAgIHRoaXMuZHJhd1dhdGVyKGZyYW1lKTtcbiAgICB0aGlzLmRyYXdMYXllcihmcmFtZSwgKCkgPT4gdGhpcy5saWdodGluZy5kcmF3V2FsbHMoY29udGV4dCkpO1xuICAgIHRoaXMuYXBwbHlMaWdodGluZyhmcmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgcGFydHMgb2YgYWN0b3JzIHRoYXQgYXJlIHVuZGVyd2F0ZXIsIHRoZSBsb3dlc3QgdGhpbmdzIG9uIHRoZVxuICAgKiBzY3JlZW4gYXJlIGRyYXduIGxhc3RcbiAgICovXG4gIHByaXZhdGUgZHJhd1N1Ym1lcmdlZEFjdG9ycyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb25zdCBib3R0b20gPSAoeyBhY3RvcjogeyBzdXJmYWNlIH0gfTogU3VibWVyc2libGVBY3RvcikgPT5cbiAgICAgIHN1cmZhY2UucG9zaXRpb24ueSArIHN1cmZhY2Uuc2l6ZS55O1xuXG4gICAgWy4uLnRoaXMuc3VibWVyc2libGVBY3RvcnNdXG4gICAgICAuc29ydCgoYSwgYikgPT4gYm90dG9tKGEpIC0gYm90dG9tKGIpKVxuICAgICAgLmZvckVhY2goKHsgYWN0b3IgfSkgPT4gYWN0b3Iuc3VyZmFjZS5kcmF3SGlkZGVuKGNvbnRleHQpKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1dhdGVyKGZyYW1lOiBGcmFtZSkge1xuICAgIGlmICghdGhpcy53YXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZyYW1lLnJlZmxlY3Rpb25NYXAgPSB0aGlzLnJlZmxlY3Rpb25zPy5kcmF3Rmxvb3JTb3VyY2VzKCkgPz8gbnVsbDtcbiAgICB0aGlzLndhdGVyLmRyYXcoZnJhbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgcGFydCBvZiB0aGUgc2NlbmUgd2l0aCB0aGUgY2FtZXJhJ3MgdHJhbnNmb3JtcyBhcHBsaWVkXG4gICAqL1xuICBwcml2YXRlIGRyYXdMYXllcih7IGNvbnRleHQsIGNhbWVyYSB9OiBGcmFtZSwgZHJhdzogKCkgPT4gdm9pZCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKGNvbnRleHQpO1xuICAgIGRyYXcoKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlMaWdodGluZyhmcmFtZTogRnJhbWUpIHtcbiAgICBjb25zdCB7IGNvbnRleHQsIGNhbWVyYSwgc2NyZWVuIH0gPSBmcmFtZTtcblxuICAgIGlmICh0aGlzLmxpZ2h0aW5nLm9wdGlvbnMubGlnaHRpbmdFbmFibGVkKSB7XG4gICAgICB0aGlzLndhdGVyPy5kcmF3TGlnaHRpbmdNYXBzKGZyYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpZ2h0aW5nLnByZXBhcmUoY2FtZXJhLCBzY3JlZW4pO1xuICAgIHRoaXMubGlnaHRpbmcuZHJhdyhjb250ZXh0KTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgV29ybGQgfSBmcm9tICcuL1dvcmxkJztcbmV4cG9ydCB0eXBlIHtcbiAgV29ybGRBY3Rvck9wdGlvbnMsXG4gIFdvcmxkQWN0b3JXYXRlck9wdGlvbnMsXG4gIFdvcmxkR3JvdW5kT3B0aW9ucyxcbiAgV29ybGRPcHRpb25zLFxuICBXb3JsZFdhbGxPcHRpb25zLFxufSBmcm9tICcuL1dvcmxkJztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==