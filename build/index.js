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
        this.lightMapVersion = 0;
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
        this.lightMapVersion++;
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
    resetContext(context, scale = 1) {
        const { canvas } = context;
        const width = Math.ceil(this.screen.x * scale);
        const height = Math.ceil(this.screen.y * scale);
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
        else {
            context.clearRect(0, 0, width, height);
        }
        context.imageSmoothingEnabled = this.options.imageSmoothingEnabled;
    }
    prepareSurfaceMap(context, camera) {
        const { surfaceMapScale: scale } = this.options;
        this.resetContext(context, scale);
        context.save();
        camera.setTransforms(context);
        if (scale !== 1) {
            const { a, b, c, d, e, f } = context.getTransform();
            context.setTransform(a * scale, b * scale, c * scale, d * scale, e * scale, f * scale);
        }
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
            allLights: this.lights,
            surfaces: this.calculateAmbientLights(surfaces),
            normalMap: hasNormalMaps ? this.sceneNormalMapCanvas : null,
            specularMap: hasSpecularMaps ? this.sceneSpecularMapCanvas : null,
            surfaceMapFilter: this.options.surfaceMapScale < 1 && this.options.imageSmoothingEnabled
                ? 'linear'
                : 'nearest',
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
        this.prepareSurfaceMap(this.sceneNormalMapContext, camera);
        surfaces.forEach(surface => {
            surface.drawNormalMap(this.sceneNormalMapContext);
        });
        this.sceneNormalMapContext.restore();
    }
    drawSceneSpecularMap(camera, surfaces) {
        this.prepareSurfaceMap(this.sceneSpecularMapContext, camera);
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
    surfaceMapScale: 1,
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
        this.lightTextures = new Map();
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
        this.lightTextures = new Map();
        this.initialised = true;
    }
    upload(unit, image, filter) {
        this.context.upload(unit, this.textures[unit], image, filter);
    }
    bindLight(gl, light, filter) {
        let cached = this.lightTextures.get(light);
        if (!cached) {
            cached = { texture: gl.createTexture(), version: -1 };
            this.lightTextures.set(light, cached);
        }
        if (cached.version === light.lightMapVersion) {
            this.context.bindTexture(TextureUnit.LightMap, cached.texture, filter);
        }
        else {
            this.context.upload(TextureUnit.LightMap, cached.texture, light.lightCanvas, filter);
            cached.version = light.lightMapVersion;
        }
    }
    releaseLights(gl, lights) {
        this.lightTextures.forEach(({ texture }, light) => {
            if (!lights.has(light)) {
                gl.deleteTexture(texture);
                this.lightTextures.delete(light);
            }
        });
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
        const surfaceMapFilter = scene.surfaceMapFilter === 'linear' ? gl.LINEAR : gl.NEAREST;
        if (scene.normalMap) {
            this.upload(TextureUnit.NormalMap, scene.normalMap, surfaceMapFilter);
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
            this.upload(TextureUnit.SpecularMap, scene.specularMap, surfaceMapFilter);
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
        this.releaseLights(gl, new Set(scene.allLights));
        gl.enable(gl.BLEND);
        for (const light of scene.lights) {
            this.bindLight(gl, light, filter);
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
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
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
            this.fillShape(context, defaultColour);
        }
        context.restore();
    }
    fillShape(context, colour) {
        const mask = this.customDraw.mask ? 'solid' : this.getMask();
        if (mask === 'solid') {
            this.fillBackground(context, colour);
            return;
        }
        const shape = mask && (0, utilities_1.tintedImage)(mask, colour);
        if (shape) {
            this.drawImage(context, shape);
        }
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
exports.silhouette = exports.tintedImage = exports.sector2d = exports.sector1d = exports.polygon = exports.lineIsFacing = void 0;
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
const tints = new WeakMap();
function tintedImage(image, colour) {
    if (image.width === 0 || image.height === 0) {
        return null;
    }
    if (image instanceof HTMLImageElement && !image.complete) {
        return null;
    }
    let imageTints = tints.get(image);
    if (!imageTints) {
        imageTints = new Map();
        tints.set(image, imageTints);
    }
    let result = imageTints.get(colour);
    if (!result) {
        result = document.createElement('canvas');
        result.width = image.width;
        result.height = image.height;
        const context = result.getContext('2d');
        context.drawImage(image, 0, 0);
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = colour;
        context.fillRect(0, 0, result.width, result.height);
        imageTints.set(colour, result);
    }
    return result;
}
exports.tintedImage = tintedImage;
function silhouette(image) {
    return tintedImage(image, 'black');
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.waterline = null;
        this.reflections = reflections;
        this.sprite = 'sprite' in options ? options.sprite : null;
        this.object = 'object' in options ? options.object : null;
        this.footOffset = (_a = options.footOffset) !== null && _a !== void 0 ? _a : 0;
        this.floorOffset = (_b = options.floorOffset) !== null && _b !== void 0 ? _b : 0;
        this.floorFade = (_c = options.floorFade) !== null && _c !== void 0 ? _c : 0;
        this.floorLayer =
            (_d = options.floorLayer) !== null && _d !== void 0 ? _d : ReflectionSource.DEFAULT_FLOOR_LAYER;
        this.floorImage = (_e = options.floorImage) !== null && _e !== void 0 ? _e : null;
        this.floor = (_f = options.floor) !== null && _f !== void 0 ? _f : true;
        this.wall = (_g = options.wall) !== null && _g !== void 0 ? _g : true;
        this.wallDirections =
            (_h = options.wallDirections) !== null && _h !== void 0 ? _h : ReflectionSource.DEFAULT_WALL_DIRECTIONS;
        this.wallImage = (_j = options.wallImage) !== null && _j !== void 0 ? _j : null;
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
    get floorStart() {
        return this.waterline === null
            ? this.floorAxis - this.floorOffset
            : this.floorAxis;
    }
    get floorShift() {
        return this.floorStart - this.floorAxis;
    }
    get floorBounds() {
        const { position, size } = this.bounds;
        return {
            position: (0, vec_1.vec2)(position.x, this.floorAxis * 2 + this.floorShift - (position.y + size.y)),
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
        context.translate(0, this.floorAxis * 2 + this.floorShift);
        context.scale(1, -1);
        if (this.waterline !== null) {
            const { position, size } = this.bounds;
            context.beginPath();
            context.rect(position.x, position.y, size.x, this.waterline - position.y);
            context.clip();
        }
        this.drawFloorImage(context);
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
    drawFloorImage(context) {
        const { sprite, floorImage } = this;
        if (sprite) {
            const image = sprite.image && sprite.getImage(undefined, this.floorLayer);
            if (image) {
                this.drawSpriteImage(context, sprite, image);
                return;
            }
        }
        else if (floorImage) {
            const { position, size } = this.bounds;
            context.drawImage(floorImage, position.x, position.y, size.x, size.y);
            return;
        }
        this.draw(context);
    }
    drawSpriteInWall(context, sprite) {
        var _a;
        const direction = (_a = this.wallDirections[sprite.direction]) !== null && _a !== void 0 ? _a : sprite.direction;
        if (direction === sprite.direction) {
            sprite.draw(context);
            return;
        }
        const image = sprite.getImage(direction);
        if (image) {
            this.drawSpriteImage(context, sprite, image);
        }
    }
    drawSpriteImage(context, sprite, image) {
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
ReflectionSource.DEFAULT_FLOOR_LAYER = 'floor-reflection';
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
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
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
        this.fadeContext = ReflectionSystem.createContext();
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
        if (sources.some(source => source.floorFade > 0)) {
            this.resetContext(this.fadeContext, frame);
        }
        sources.forEach(source => {
            if (source.floorFade > 0) {
                this.drawFadedSource(source, frame);
            }
            else {
                source.drawInFloor(this.floorSourcesContext);
            }
        });
        this.floorSourcesReady = true;
        return this.floorSourcesCanvas;
    }
    drawFadedSource(source, frame) {
        const context = this.fadeContext;
        const { position, size } = source.floorBounds;
        const start = source.floorStart;
        source.drawInFloor(context);
        const fade = context.createLinearGradient(0, start, 0, start + source.floorFade);
        fade.addColorStop(0, 'black');
        fade.addColorStop(1, 'transparent');
        context.globalCompositeOperation = 'destination-out';
        context.fillStyle = fade;
        context.fillRect(position.x, start, size.x, source.floorFade);
        context.globalCompositeOperation = 'source-over';
        const topLeft = frame.camera.worldToScreen(position);
        const bottomRight = frame.camera.worldToScreen(vec_1.vec2.add(position, size));
        const left = Math.floor(topLeft.x);
        const top = Math.floor(topLeft.y);
        const width = Math.ceil(bottomRight.x) - left;
        const height = Math.ceil(bottomRight.y) - top;
        this.floorSourcesContext.save();
        this.floorSourcesContext.setTransform(1, 0, 0, 1, 0, 0);
        this.floorSourcesContext.drawImage(context.canvas, left, top, width, height, left, top, width, height);
        this.floorSourcesContext.restore();
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(left, top, width, height);
        context.restore();
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
        gl === null || gl === void 0 ? void 0 : gl.deleteTexture(textures.mask);
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
                mask: gl.createTexture(),
                maskImage: null,
                maskVersion: -1,
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
    bindMask(region, textures, filter) {
        const { mask, maskVersion } = region;
        if (!mask) {
            return;
        }
        if (textures.maskImage === mask && textures.maskVersion === maskVersion) {
            this.context.bindTexture(TextureUnit.Mask, textures.mask, filter);
        }
        else {
            this.context.upload(TextureUnit.Mask, textures.mask, mask, filter);
            textures.maskImage = mask;
            textures.maskVersion = maskVersion;
        }
    }
    bindRegion(gl, region, filter) {
        var _a;
        const textures = this.getTextures(gl, region);
        const { depthPixels, flowPixels, ripples } = region;
        this.bindMask(region, textures, filter);
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
    setRegionUniforms(gl, region) {
        const { uniforms } = this.program;
        const colour = (0, parsecolor_1.parseColor)(region.colour);
        const deepColour = (0, parsecolor_1.parseColor)(region.deepColour);
        const { mask } = region;
        gl.uniform2f(uniforms.u_regionPosition, region.position.x, region.position.y);
        gl.uniform2f(uniforms.u_regionSize, region.size.x, region.size.y);
        gl.uniform1f(uniforms.u_useMask, mask ? 1 : 0);
        gl.uniform1f(uniforms.u_useMaskRepeat, region.repeat ? 1 : 0);
        if (mask) {
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
        this.bindRegion(gl, region, frame.context.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST);
        this.setRegionUniforms(gl, region);
        gl.uniform2f(uniforms.u_regionScreenPosition, topLeft.x, topLeft.y);
        gl.uniform1f(uniforms.u_cameraScale, size.x / region.size.x);
        this.context.drawQuad(this.program, [topLeft.x, topLeft.y, size.x, size.y], undefined, [0, 0, 1, 1]);
    }
    render(frame, regions, output, time, scale = 1, scene = frame.context.canvas) {
        const { gl } = this.context;
        if (!gl) {
            return;
        }
        const { uniforms, program } = this.program;
        const filter = frame.context.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;
        this.context.resize(frame.screen);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, Math.ceil(frame.screen.x * scale), Math.ceil(frame.screen.y * scale));
        gl.disable(gl.BLEND);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        if (output === WaterOutput.Colour) {
            this.context.upload(TextureUnit.Scene, this.sceneTexture, scene, filter);
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
        gl.viewport(0, 0, frame.screen.x, frame.screen.y);
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
        this.maskVersion = 0;
        this.depthGrid = [[1]];
        this.shape = null;
        this.rainTime = 0;
        this.moveCallbacks = [];
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
        this.maskVersion++;
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
    moveTo(position) {
        this.position = vec_1.vec2.cpy(position);
        this.moveCallbacks.forEach(callback => callback(this.position));
    }
    onMove(callback) {
        this.moveCallbacks.push(callback);
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
    constructor(options, glContext) {
        this.regions = [];
        this.pass = null;
        this.time = 0;
        this.frame = null;
        this.normalMapContext = WaterSystem.createContext();
        this.normalMapCanvas = this.normalMapContext.canvas;
        this.specularMapContext = WaterSystem.createContext();
        this.specularMapCanvas = this.specularMapContext.canvas;
        this.reflectionMapContext = WaterSystem.createContext();
        this.sceneContext = WaterSystem.createContext();
        this.specularMapKey = '';
        this.options = { ...WaterSystem.DEFAULT_OPTIONS, ...options };
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
        const { resolutionScale: scale, reflectionMapScale } = this.options;
        pass.render({
            ...frame,
            reflectionMap: frame.reflectionMap &&
                this.scaledCopy(this.reflectionMapContext, frame.reflectionMap, frame, reflectionMapScale),
        }, regions, WaterPass_1.WaterOutput.Colour, this.time, scale, this.scaledCopy(this.sceneContext, frame.context.canvas, frame, scale));
        this.copyWater(pass, frame, regions, scale);
    }
    copyWater(pass, { context, camera, screen }, regions, scale) {
        const corners = regions.flatMap(({ position, size }) => [
            camera.worldToScreen(position),
            camera.worldToScreen(vec_1.vec2.add(position, size)),
        ]);
        const left = Math.max(Math.floor((0, core_1.minVec)(...corners).x), 0);
        const top = Math.max(Math.floor((0, core_1.minVec)(...corners).y), 0);
        const right = Math.min(Math.ceil((0, core_1.maxVec)(...corners).x), screen.x);
        const bottom = Math.min(Math.ceil((0, core_1.maxVec)(...corners).y), screen.y);
        const outputWidth = Math.ceil(screen.x * scale);
        const outputHeight = Math.ceil(screen.y * scale);
        const scaleX = outputWidth / screen.x;
        const scaleY = outputHeight / screen.y;
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.drawImage(pass.canvas, left * scaleX, screen.y - outputHeight + top * scaleY, (right - left) * scaleX, (bottom - top) * scaleY, left, top, right - left, bottom - top);
        context.restore();
    }
    scaledCopy(context, image, frame, scale) {
        if (scale === 1) {
            return image;
        }
        const { canvas } = context;
        const width = Math.ceil(frame.screen.x * scale);
        const height = Math.ceil(frame.screen.y * scale);
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
        else {
            context.clearRect(0, 0, width, height);
        }
        context.imageSmoothingEnabled = frame.context.imageSmoothingEnabled;
        context.drawImage(image, 0, 0, width, height);
        return canvas;
    }
    drawLightingMaps(frame) {
        const regions = this.visibleRegions(frame);
        const pass = regions.length > 0 ? this.getPass() : null;
        if (!pass) {
            return;
        }
        const { lightingMapScale } = this.options;
        pass.render(frame, regions, WaterPass_1.WaterOutput.Normal, this.time, lightingMapScale);
        this.copyLightingMap(this.normalMapContext, pass, frame, lightingMapScale);
        const key = JSON.stringify([
            frame.camera.bounds,
            frame.screen,
            regions.map(region => [
                region.position,
                region.size,
                region.specular,
                region.shoreBlend,
                region.depthPixels.version,
                region.maskVersion,
            ]),
        ]);
        if (key !== this.specularMapKey) {
            this.specularMapKey = key;
            pass.render(frame, regions, WaterPass_1.WaterOutput.Specular, this.time);
            this.copyLightingMap(this.specularMapContext, pass, frame, 1);
        }
    }
    copyLightingMap(context, pass, { screen }, scale) {
        const { canvas } = context;
        const width = Math.ceil(screen.x * scale);
        const height = Math.ceil(screen.y * scale);
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
        else {
            context.clearRect(0, 0, width, height);
        }
        context.drawImage(pass.canvas, 0, screen.y - height, width, height, 0, 0, width, height);
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
        const right = Math.min(Math.ceil(bottomRight.x), frame.screen.x);
        const bottom = Math.min(Math.ceil(bottomRight.y), frame.screen.y);
        const width = right - left;
        const height = bottom - top;
        if (width <= 0 || height <= 0) {
            return;
        }
        const sourceScale = map.width / frame.screen.x;
        const targetScale = context.canvas.width / frame.screen.x;
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.drawImage(map, left * sourceScale, top * sourceScale, width * sourceScale, height * sourceScale, left * targetScale, top * targetScale, width * targetScale, height * targetScale);
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
WaterSystem.DEFAULT_OPTIONS = {
    resolutionScale: 1,
    lightingMapScale: 0.5,
    reflectionMapScale: 0.5,
};


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
        region.onMove(position => surface.moveTo(position));
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
        const { lightingEnabled, surfaceMapsEnabled } = this.lighting.options;
        if (lightingEnabled && surfaceMapsEnabled) {
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
module.exports = "precision highp float;\n\n// -----------------------------------------------------------------------------\n// SAMPLERS\n// -----------------------------------------------------------------------------\nuniform sampler2D u_scene;\nuniform sampler2D u_reflectionMap;\nuniform sampler2D u_mask;\nuniform sampler2D u_depthMap;\nuniform sampler2D u_flowMap;\nuniform sampler2D u_waveMap;\nuniform sampler2D u_noiseMap;\nuniform sampler2D u_rippleMap;\n\n// -----------------------------------------------------------------------------\n// UNIFORMS\n// -----------------------------------------------------------------------------\nuniform vec2 u_screen;\nuniform float u_time;\nuniform float u_output;\n\n// The region in the world, and where it is on the screen\nuniform vec2 u_regionPosition;\nuniform vec2 u_regionSize;\nuniform vec2 u_regionScreenPosition;\nuniform float u_cameraScale;\n\nuniform float u_useMask;\nuniform float u_useMaskRepeat;\nuniform vec2 u_maskSize;\nuniform float u_useReflection;\nuniform float u_useRipples;\n\nuniform vec3 u_colour;\nuniform vec3 u_deepColour;\nuniform float u_opacity;\nuniform float u_shoreBlend;\nuniform float u_refraction;\nuniform float u_reflection;\nuniform float u_reflectionDistortion;\nuniform float u_waveSize;\nuniform float u_waveSpeed;\nuniform float u_waveStrength;\nuniform float u_rippleStrength;\nuniform float u_flowDistance;\nuniform float u_flowCycle;\nuniform float u_specular;\nuniform float u_surfaceShading;\nuniform float u_pixelSize;\n\n// -----------------------------------------------------------------------------\n// VARYINGS\n// -----------------------------------------------------------------------------\nvarying vec2 v_maskUV;\n\n// -----------------------------------------------------------------------------\n// GLOBAL CONSTANTS\n// -----------------------------------------------------------------------------\nconst float OUTPUT_NORMAL = 1.0;\nconst float OUTPUT_SPECULAR = 2.0;\n\n// The red and green channels of a flat normal map (#7f7fff)\nconst float NORMAL_MAP_CENTER = 127.0 / 255.0;\n\n// The second layer of waves is larger, and they move in a different direction\nconst float SECOND_LAYER_SCALE = 0.57;\nconst vec2 FIRST_LAYER_DIRECTION = vec2(0.8, 0.6);\nconst vec2 SECOND_LAYER_DIRECTION = vec2(-0.5, 0.86);\n\n// The direction that the water's own shading comes from\nconst vec2 SHADING_DIRECTION = vec2(-0.6, -0.8);\n\n// Waves in water that's slower than this don't need to be moved, this is the\n// squared length of a flow vector\nconst float MIN_FLOW = 0.00001;\n\n// How many normal map tiles each patch of noise covers\nconst float NOISE_SCALE = 0.2;\n\n// -----------------------------------------------------------------------------\n// UTILITY FUNCTIONS\n// -----------------------------------------------------------------------------\n// Grid values are stored with 128 as 0, so that 0 can be stored exactly\nvec2 decodeVector(vec2 encoded) {\n  return (encoded * 255.0 - 128.0) / 127.0;\n}\n\nvec2 regionUV(vec2 world) {\n  return (world - u_regionPosition) / u_regionSize;\n}\n\nvec2 sceneUV(vec2 world) {\n  return (\n    u_regionScreenPosition + (world - u_regionPosition) * u_cameraScale\n  ) / u_screen;\n}\n\nfloat sampleMask(vec2 world) {\n  if (u_useMask < 0.5) {\n    return 1.0;\n  }\n\n  vec2 uv = regionUV(world);\n  if (u_useMaskRepeat > 0.5) {\n    uv = fract(world / u_maskSize);\n  }\n\n  return texture2D(u_mask, uv).a;\n}\n\n// Is this inside the water? This looks one pixel in each direction, otherwise\n// smoothing could blend in a pixel of the land next to the water\nfloat insideWater(vec2 world) {\n  vec2 margin = vec2(1.0 / u_cameraScale);\n  vec2 inside =\n    step(vec2(0.0), regionUV(world - margin)) *\n    step(regionUV(world + margin), vec2(1.0));\n\n  return\n    inside.x *\n    inside.y *\n    step(0.5, sampleMask(world - margin)) *\n    step(0.5, sampleMask(world + margin));\n}\n\n// -----------------------------------------------------------------------------\n// WAVES\n// -----------------------------------------------------------------------------\nvec2 waveSlope(vec2 uv) {\n  return texture2D(u_waveMap, uv).rg * 2.0 - 1.0;\n}\n\n// 2 layers of waves on top of each other\nvec2 layeredWaves(vec2 world) {\n  vec2 first = world + FIRST_LAYER_DIRECTION * u_time * u_waveSpeed;\n  vec2 second = world + SECOND_LAYER_DIRECTION * u_time * u_waveSpeed;\n\n  return (\n    waveSlope(first / u_waveSize) +\n    waveSlope(second / u_waveSize * SECOND_LAYER_SCALE)\n  ) * 0.5;\n}\n\n// Move waves along a flow vector\n//\n// We can only stretch the waves so far before they stop looking like waves, so\n// they're moved along the flow for one cycle and then they start again. There\n// are 2 sets of waves half a cycle apart, and each set fades out before it\n// jumps back to the start. The noise stops all of the water from fading at the\n// same time, which would look like the water was pulsing.\nvec2 flowingWaves(vec2 world, vec2 flow) {\n  if (dot(flow, flow) < MIN_FLOW) {\n    return layeredWaves(world);\n  }\n\n  float noise = texture2D(\n    u_noiseMap,\n    world / u_waveSize * NOISE_SCALE\n  ).b;\n  float phase0 = fract(u_time / u_flowCycle + noise * 0.5);\n  float phase1 = fract(phase0 + 0.5);\n\n  vec2 waves0 = layeredWaves(world - flow * u_flowDistance * phase0);\n  vec2 waves1 = layeredWaves(world - flow * u_flowDistance * phase1);\n\n  return mix(waves0, waves1, abs(0.5 - phase0) / 0.5);\n}\n\n// -----------------------------------------------------------------------------\n// MAIN\n// -----------------------------------------------------------------------------\nvoid main() {\n  vec2 world = u_regionPosition + v_maskUV * u_regionSize;\n  if (u_pixelSize > 0.0) {\n    world = (floor(world / u_pixelSize) + 0.5) * u_pixelSize;\n  }\n\n  vec2 uv = regionUV(world);\n  float depth = texture2D(u_depthMap, uv).r;\n\n  // The edge of the mask is a hard edge, and the water can also fade out as it\n  // gets shallower\n  float shore = 1.0;\n  if (u_shoreBlend > 0.0) {\n    shore = smoothstep(0.0, u_shoreBlend, depth);\n  }\n  float alpha = sampleMask(world) * shore;\n  if (alpha <= 0.0) {\n    discard;\n  }\n\n  // The specular map only depends on the shape of the water\n  if (u_output == OUTPUT_SPECULAR) {\n    gl_FragColor = vec4(vec3(u_specular), alpha);\n    return;\n  }\n\n  vec2 flow = decodeVector(texture2D(u_flowMap, uv).rg);\n  vec2 slope = flowingWaves(world, flow) * u_waveStrength;\n  if (u_useRipples > 0.5) {\n    slope += decodeVector(texture2D(u_rippleMap, uv).rg) * u_rippleStrength;\n  }\n\n  if (u_output == OUTPUT_NORMAL) {\n    vec3 normal = normalize(vec3(-slope, 1.0));\n\n    gl_FragColor = vec4(\n      normal.xy * 0.5 + NORMAL_MAP_CENTER,\n      normal.z * 0.5 + 0.5,\n      alpha\n    );\n    return;\n  }\n\n  // Deeper water bends things more, and we can't see anything outside of the\n  // water because it's in front of the water\n  vec2 refracted = world + slope * u_refraction * depth;\n  if (insideWater(refracted) < 0.5) {\n    refracted = world;\n  }\n\n  vec3 colour = mix(u_colour, u_deepColour, depth);\n  vec3 scene = texture2D(u_scene, sceneUV(refracted)).rgb;\n  vec3 result = mix(scene, colour, u_opacity * depth);\n\n  // Slopes facing one way are brighter than slopes facing the other way, so\n  // that waves can be seen without any lights\n  result += dot(slope, SHADING_DIRECTION) * u_surfaceShading;\n\n  if (u_useReflection > 0.5) {\n    vec4 reflected = texture2D(\n      u_reflectionMap,\n      sceneUV(world + slope * u_reflectionDistortion)\n    );\n\n    result = mix(result, reflected.rgb, reflected.a * u_reflection);\n  }\n\n  gl_FragColor = vec4(result, alpha);\n}\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0lBQ1osVUFBVSxFQUFFLENBQUM7SUFDYixPQUFPLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFDc0IscUJBQWUsR0FBRyxFQUFFLENBQUM7QUFDckIsbUJBQWEsR0FBRyxDQUFDLENBQUM7QUFDbEIscUJBQWUsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pKakQseUVBQWdDO0FBQXZCLG9HQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3IvcGFyc2Vjb2xvci5qcyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2NvcmUvR2xDb250ZXh0LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvY29yZS91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvQWN0b3IudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvQ2FzdGVyLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL0xpZ2h0LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL0xpZ2h0aW5nU3lzdGVtLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL1NjZW5lT2JqZWN0LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL1NoYWRlclBhc3MudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvU3VyZmFjZS50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9XYWxsLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL21lcmdlLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL3R5cGVzLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL3V0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9yZWZsZWN0aW9ucy9SZWZsZWN0aW9uUmVjZWl2ZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvcmVmbGVjdGlvbnMvUmVmbGVjdGlvblNvdXJjZS50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9yZWZsZWN0aW9ucy9SZWZsZWN0aW9uU3lzdGVtLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3JlZmxlY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3dhdGVyL1JpcHBsZUZpZWxkLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3dhdGVyL1dhdGVyUGFzcy50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy93YXRlci9XYXRlclJlZ2lvbi50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy93YXRlci9XYXRlclN5c3RlbS50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy93YXRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy93b3JsZC9Xb3JsZC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy93b3JsZC9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQmFzZW1lbnRVbml2ZXJzZVdvcmxkMkRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQmFzZW1lbnRVbml2ZXJzZVdvcmxkMkRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLypcclxuXHJcblBhcnNlIGEgdmFsaWQgQ1NTIGNvbG9yIHN0cmluZyBpbnRvIGFuIG9iamVjdCBsaWtlOiB7IHIsIGcsIGIsIGEgfVxyXG5Qcm9wZXJ0aWVzIHdpbGwgaGF2ZSB0aGUgY29ycmVjdCBpbnRlcnZhbCBhbmQgcHJlY2lzaW9uLlxyXG5WYWxpZCBpbnB1dCBleGFtcGxlczpcclxuXHJcbnJlZFxyXG4jZjAwXHJcbiNmZjAwMDBcclxuI2ZmMDAwMGZmXHJcbnJnYigyNTUsIDAsIDApXHJcbnJnYigxMDAlLCAwJSwgMCUpXHJcbnJnYmEoMjU1LCAwLCAwLCAxKVxyXG5yZ2JhKDEwMCUsIDAlLCAwJSwgMSlcclxuaHNsKDAsIDEwMCUsIDUwJSlcclxuaHNsYSgwLCAxMDAlLCA1MCUsIDEpXHJcblxyXG4qL1xyXG5jb25zdCBwYXJzZUNvbG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IG5hbWVzID0ge1xyXG5cdFx0XCJhbGljZWJsdWVcIjogXCJmMGY4ZmZcIixcclxuXHRcdFwiYW50aXF1ZXdoaXRlXCI6IFwiZmFlYmQ3XCIsXHJcblx0XHRcImFxdWFcIjogXCIwZmZcIixcclxuXHRcdFwiYXF1YW1hcmluZVwiOiBcIjdmZmZkNFwiLFxyXG5cdFx0XCJhenVyZVwiOiBcImYwZmZmZlwiLFxyXG5cdFx0XCJiZWlnZVwiOiBcImY1ZjVkY1wiLFxyXG5cdFx0XCJiaXNxdWVcIjogXCJmZmU0YzRcIixcclxuXHRcdFwiYmxhY2tcIjogXCIwMDBcIixcclxuXHRcdFwiYmxhbmNoZWRhbG1vbmRcIjogXCJmZmViY2RcIixcclxuXHRcdFwiYmx1ZVwiOiBcIjAwZlwiLFxyXG5cdFx0XCJibHVldmlvbGV0XCI6IFwiOGEyYmUyXCIsXHJcblx0XHRcImJyb3duXCI6IFwiYTUyYTJhXCIsXHJcblx0XHRcImJ1cmx5d29vZFwiOiBcImRlYjg4N1wiLFxyXG5cdFx0XCJjYWRldGJsdWVcIjogXCI1ZjllYTBcIixcclxuXHRcdFwiY2hhcnRyZXVzZVwiOiBcIjdmZmYwMFwiLFxyXG5cdFx0XCJjaG9jb2xhdGVcIjogXCJkMjY5MWVcIixcclxuXHRcdFwiY29yYWxcIjogXCJmZjdmNTBcIixcclxuXHRcdFwiY29ybmZsb3dlcmJsdWVcIjogXCI2NDk1ZWRcIixcclxuXHRcdFwiY29ybnNpbGtcIjogXCJmZmY4ZGNcIixcclxuXHRcdFwiY3JpbXNvblwiOiBcImRjMTQzY1wiLFxyXG5cdFx0XCJjeWFuXCI6IFwiMGZmXCIsXHJcblx0XHRcImRhcmtibHVlXCI6IFwiMDAwMDhiXCIsXHJcblx0XHRcImRhcmtjeWFuXCI6IFwiMDA4YjhiXCIsXHJcblx0XHRcImRhcmtnb2xkZW5yb2RcIjogXCJiODg2MGJcIixcclxuXHRcdFwiZGFya2dyYXlcIjogXCJhOWE5YTlcIixcclxuXHRcdFwiZGFya2dyZWVuXCI6IFwiMDA2NDAwXCIsXHJcblx0XHRcImRhcmtncmV5XCI6IFwiYTlhOWE5XCIsXHJcblx0XHRcImRhcmtraGFraVwiOiBcImJkYjc2YlwiLFxyXG5cdFx0XCJkYXJrbWFnZW50YVwiOiBcIjhiMDA4YlwiLFxyXG5cdFx0XCJkYXJrb2xpdmVncmVlblwiOiBcIjU1NmIyZlwiLFxyXG5cdFx0XCJkYXJrb3JhbmdlXCI6IFwiZmY4YzAwXCIsXHJcblx0XHRcImRhcmtvcmNoaWRcIjogXCI5OTMyY2NcIixcclxuXHRcdFwiZGFya3JlZFwiOiBcIjhiMDAwMFwiLFxyXG5cdFx0XCJkYXJrc2FsbW9uXCI6IFwiZTk5NjdhXCIsXHJcblx0XHRcImRhcmtzZWFncmVlblwiOiBcIjhmYmM4ZlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVibHVlXCI6IFwiNDgzZDhiXCIsXHJcblx0XHRcImRhcmtzbGF0ZWdyYXlcIjogXCIyZjRmNGZcIixcclxuXHRcdFwiZGFya3NsYXRlZ3JleVwiOiBcIjJmNGY0ZlwiLFxyXG5cdFx0XCJkYXJrdHVycXVvaXNlXCI6IFwiMDBjZWQxXCIsXHJcblx0XHRcImRhcmt2aW9sZXRcIjogXCI5NDAwZDNcIixcclxuXHRcdFwiZGVlcHBpbmtcIjogXCJmZjE0OTNcIixcclxuXHRcdFwiZGVlcHNreWJsdWVcIjogXCIwMGJmZmZcIixcclxuXHRcdFwiZGltZ3JheVwiOiBcIjY5Njk2OVwiLFxyXG5cdFx0XCJkaW1ncmV5XCI6IFwiNjk2OTY5XCIsXHJcblx0XHRcImRvZGdlcmJsdWVcIjogXCIxZTkwZmZcIixcclxuXHRcdFwiZmlyZWJyaWNrXCI6IFwiYjIyMjIyXCIsXHJcblx0XHRcImZsb3JhbHdoaXRlXCI6IFwiZmZmYWYwXCIsXHJcblx0XHRcImZvcmVzdGdyZWVuXCI6IFwiMjI4YjIyXCIsXHJcblx0XHRcImZ1Y2hzaWFcIjogXCJmMGZcIixcclxuXHRcdFwiZ2FpbnNib3JvXCI6IFwiZGNkY2RjXCIsXHJcblx0XHRcImdob3N0d2hpdGVcIjogXCJmOGY4ZmZcIixcclxuXHRcdFwiZ29sZFwiOiBcImZmZDcwMFwiLFxyXG5cdFx0XCJnb2xkZW5yb2RcIjogXCJkYWE1MjBcIixcclxuXHRcdFwiZ3JheVwiOiBcIjgwODA4MFwiLFxyXG5cdFx0XCJncmVlblwiOiBcIjAwODAwMFwiLFxyXG5cdFx0XCJncmVlbnllbGxvd1wiOiBcImFkZmYyZlwiLFxyXG5cdFx0XCJncmV5XCI6IFwiODA4MDgwXCIsXHJcblx0XHRcImhvbmV5ZGV3XCI6IFwiZjBmZmYwXCIsXHJcblx0XHRcImhvdHBpbmtcIjogXCJmZjY5YjRcIixcclxuXHRcdFwiaW5kaWFucmVkXCI6IFwiY2Q1YzVjXCIsXHJcblx0XHRcImluZGlnb1wiOiBcIjRiMDA4MlwiLFxyXG5cdFx0XCJpdm9yeVwiOiBcImZmZmZmMFwiLFxyXG5cdFx0XCJraGFraVwiOiBcImYwZTY4Y1wiLFxyXG5cdFx0XCJsYXZlbmRlclwiOiBcImU2ZTZmYVwiLFxyXG5cdFx0XCJsYXZlbmRlcmJsdXNoXCI6IFwiZmZmMGY1XCIsXHJcblx0XHRcImxhd25ncmVlblwiOiBcIjdjZmMwMFwiLFxyXG5cdFx0XCJsZW1vbmNoaWZmb25cIjogXCJmZmZhY2RcIixcclxuXHRcdFwibGlnaHRibHVlXCI6IFwiYWRkOGU2XCIsXHJcblx0XHRcImxpZ2h0Y29yYWxcIjogXCJmMDgwODBcIixcclxuXHRcdFwibGlnaHRjeWFuXCI6IFwiZTBmZmZmXCIsXHJcblx0XHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFwiZmFmYWQyXCIsXHJcblx0XHRcImxpZ2h0Z3JheVwiOiBcImQzZDNkM1wiLFxyXG5cdFx0XCJsaWdodGdyZWVuXCI6IFwiOTBlZTkwXCIsXHJcblx0XHRcImxpZ2h0Z3JleVwiOiBcImQzZDNkM1wiLFxyXG5cdFx0XCJsaWdodHBpbmtcIjogXCJmZmI2YzFcIixcclxuXHRcdFwibGlnaHRzYWxtb25cIjogXCJmZmEwN2FcIixcclxuXHRcdFwibGlnaHRzZWFncmVlblwiOiBcIjIwYjJhYVwiLFxyXG5cdFx0XCJsaWdodHNreWJsdWVcIjogXCI4N2NlZmFcIixcclxuXHRcdFwibGlnaHRzbGF0ZWdyYXlcIjogXCI3ODlcIixcclxuXHRcdFwibGlnaHRzbGF0ZWdyZXlcIjogXCI3ODlcIixcclxuXHRcdFwibGlnaHRzdGVlbGJsdWVcIjogXCJiMGM0ZGVcIixcclxuXHRcdFwibGlnaHR5ZWxsb3dcIjogXCJmZmZmZTBcIixcclxuXHRcdFwibGltZVwiOiBcIjBmMFwiLFxyXG5cdFx0XCJsaW1lZ3JlZW5cIjogXCIzMmNkMzJcIixcclxuXHRcdFwibGluZW5cIjogXCJmYWYwZTZcIixcclxuXHRcdFwibWFnZW50YVwiOiBcImYwZlwiLFxyXG5cdFx0XCJtYXJvb25cIjogXCI4MDAwMDBcIixcclxuXHRcdFwibWVkaXVtYXF1YW1hcmluZVwiOiBcIjY2Y2RhYVwiLFxyXG5cdFx0XCJtZWRpdW1ibHVlXCI6IFwiMDAwMGNkXCIsXHJcblx0XHRcIm1lZGl1bW9yY2hpZFwiOiBcImJhNTVkM1wiLFxyXG5cdFx0XCJtZWRpdW1wdXJwbGVcIjogXCI5MzcwZGJcIixcclxuXHRcdFwibWVkaXVtc2VhZ3JlZW5cIjogXCIzY2IzNzFcIixcclxuXHRcdFwibWVkaXVtc2xhdGVibHVlXCI6IFwiN2I2OGVlXCIsXHJcblx0XHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFwiMDBmYTlhXCIsXHJcblx0XHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBcIjQ4ZDFjY1wiLFxyXG5cdFx0XCJtZWRpdW12aW9sZXRyZWRcIjogXCJjNzE1ODVcIixcclxuXHRcdFwibWlkbmlnaHRibHVlXCI6IFwiMTkxOTcwXCIsXHJcblx0XHRcIm1pbnRjcmVhbVwiOiBcImY1ZmZmYVwiLFxyXG5cdFx0XCJtaXN0eXJvc2VcIjogXCJmZmU0ZTFcIixcclxuXHRcdFwibW9jY2FzaW5cIjogXCJmZmU0YjVcIixcclxuXHRcdFwibmF2YWpvd2hpdGVcIjogXCJmZmRlYWRcIixcclxuXHRcdFwibmF2eVwiOiBcIjAwMDA4MFwiLFxyXG5cdFx0XCJvbGRsYWNlXCI6IFwiZmRmNWU2XCIsXHJcblx0XHRcIm9saXZlXCI6IFwiODA4MDAwXCIsXHJcblx0XHRcIm9saXZlZHJhYlwiOiBcIjZiOGUyM1wiLFxyXG5cdFx0XCJvcmFuZ2VcIjogXCJmZmE1MDBcIixcclxuXHRcdFwib3JhbmdlcmVkXCI6IFwiZmY0NTAwXCIsXHJcblx0XHRcIm9yY2hpZFwiOiBcImRhNzBkNlwiLFxyXG5cdFx0XCJwYWxlZ29sZGVucm9kXCI6IFwiZWVlOGFhXCIsXHJcblx0XHRcInBhbGVncmVlblwiOiBcIjk4ZmI5OFwiLFxyXG5cdFx0XCJwYWxldHVycXVvaXNlXCI6IFwiYWZlZWVlXCIsXHJcblx0XHRcInBhbGV2aW9sZXRyZWRcIjogXCJkYjcwOTNcIixcclxuXHRcdFwicGFwYXlhd2hpcFwiOiBcImZmZWZkNVwiLFxyXG5cdFx0XCJwZWFjaHB1ZmZcIjogXCJmZmRhYjlcIixcclxuXHRcdFwicGVydVwiOiBcImNkODUzZlwiLFxyXG5cdFx0XCJwaW5rXCI6IFwiZmZjMGNiXCIsXHJcblx0XHRcInBsdW1cIjogXCJkZGEwZGRcIixcclxuXHRcdFwicG93ZGVyYmx1ZVwiOiBcImIwZTBlNlwiLFxyXG5cdFx0XCJwdXJwbGVcIjogXCI4MDAwODBcIixcclxuXHRcdFwicmViZWNjYXB1cnBsZVwiOiBcIjYzOVwiLFxyXG5cdFx0XCJyZWRcIjogXCJmMDBcIixcclxuXHRcdFwicm9zeWJyb3duXCI6IFwiYmM4ZjhmXCIsXHJcblx0XHRcInJveWFsYmx1ZVwiOiBcIjQxNjllMVwiLFxyXG5cdFx0XCJzYWRkbGVicm93blwiOiBcIjhiNDUxM1wiLFxyXG5cdFx0XCJzYWxtb25cIjogXCJmYTgwNzJcIixcclxuXHRcdFwic2FuZHlicm93blwiOiBcImY0YTQ2MFwiLFxyXG5cdFx0XCJzZWFncmVlblwiOiBcIjJlOGI1N1wiLFxyXG5cdFx0XCJzZWFzaGVsbFwiOiBcImZmZjVlZVwiLFxyXG5cdFx0XCJzaWVubmFcIjogXCJhMDUyMmRcIixcclxuXHRcdFwic2lsdmVyXCI6IFwiYzBjMGMwXCIsXHJcblx0XHRcInNreWJsdWVcIjogXCI4N2NlZWJcIixcclxuXHRcdFwic2xhdGVibHVlXCI6IFwiNmE1YWNkXCIsXHJcblx0XHRcInNsYXRlZ3JheVwiOiBcIjcwODA5MFwiLFxyXG5cdFx0XCJzbGF0ZWdyZXlcIjogXCI3MDgwOTBcIixcclxuXHRcdFwic25vd1wiOiBcImZmZmFmYVwiLFxyXG5cdFx0XCJzcHJpbmdncmVlblwiOiBcIjAwZmY3ZlwiLFxyXG5cdFx0XCJzdGVlbGJsdWVcIjogXCI0NjgyYjRcIixcclxuXHRcdFwidGFuXCI6IFwiZDJiNDhjXCIsXHJcblx0XHRcInRlYWxcIjogXCIwMDgwODBcIixcclxuXHRcdFwidGhpc3RsZVwiOiBcImQ4YmZkOFwiLFxyXG5cdFx0XCJ0b21hdG9cIjogXCJmZjYzNDdcIixcclxuXHRcdFwidHVycXVvaXNlXCI6IFwiNDBlMGQwXCIsXHJcblx0XHRcInZpb2xldFwiOiBcImVlODJlZVwiLFxyXG5cdFx0XCJ3aGVhdFwiOiBcImY1ZGViM1wiLFxyXG5cdFx0XCJ3aGl0ZVwiOiBcImZmZlwiLFxyXG5cdFx0XCJ3aGl0ZXNtb2tlXCI6IFwiZjVmNWY1XCIsXHJcblx0XHRcInllbGxvd1wiOiBcImZmMFwiLFxyXG5cdFx0XCJ5ZWxsb3dncmVlblwiOiBcIjlhY2QzMlwiLFxyXG5cdFx0XCJ0cmFuc3BhcmVudFwiOiBcIjAwMDAwMDAwXCJcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGNsYW1wID0gKG4sIGEsIGIpID0+IG4gPCBhID8gYSA6IChuID4gYiA/IGIgOiBuKSxcdC8vIENsYW1wIG4gaW4gaW50ZXJ2YWwgW2EsIGJdXHJcblx0XHRyb3VuZCA9IChuLCBkKSA9PiB7XHQvLyBSb3VuZCBuIHRvIG5lYXJlc3QgaW50ZWdlciwgb3IgdG8gZCBkZWNpbWFsIHBsYWNlcyAoaWYgZCBpcyBkZWZpbmVkKVxyXG5cdFx0XHR2YXIgcCA9IE1hdGgucG93KDEwLCBkIHx8IDApO1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChuICogcCkgLyBwO1xyXG5cdFx0fSxcclxuXHRcdGhpID0gbiA9PiBjbGFtcChwYXJzZUludChuLCAxNiksIDAsIDI1NSksXHQvLyBDb252ZXJ0IDItZGlnaXQgaGV4IHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0aGYgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSwgMiksIDAsIDEpLFx0Ly8gQ29udmVydCAyLWRpZ2l0IGhleCB0byBmbG9hdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXMgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRzaSA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSksIDAsIDI1NSksXHQvLyBDb252ZXJ0IHN0cmluZyB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdHNmID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pLCAyKSwgMCwgMSksXHQvLyBDb252ZXJ0IHN0cmluZyB0byBmbG9hdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXMgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRwaSA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSAvIDEwMCAqIDI1NSksIDAsIDI1NSksXHQvLyBDb252ZXJ0IHBlcmNlbnRhZ2Ugc3RyaW5nIHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0dWYgPSBuID0+IGNsYW1wKHBhcnNlRmxvYXQobikgLyAzNjAsIDAsIDEpLFx0Ly8gQ29udmVydCBodWUgc3RyaW5nIHRvIGZsb2F0IGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0cGYgPSBuID0+IGNsYW1wKHBhcnNlRmxvYXQobikgLyAxMDAsIDAsIDEpO1x0Ly8gQ29udmVydCBwZXJjZW50YWdlIHN0cmluZyB0byBmbG9hdCBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcclxuXHQvLyBDb252ZXJ0IGhzbCB0byByZ2IsIGFscGhhIHZhbHVlIGdldHMgcGFzc2VkIHN0cmFpZ2h0IHRocm91Z2hcclxuXHQvLyBoLCBzLCBsIHZhbHVlcyBhcmUgYXNzdW1lZCB0byBiZSBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHQvLyBSZXR1cm5zIGFuIG9iamVjdCBsaWtlIHsgciwgZywgYiwgYSB9XHJcblx0Ly8gaHR0cDovL2F4b25mbHV4LmNvbS9oYW5keS1yZ2ItdG8taHNsLWFuZC1yZ2ItdG8taHN2LWNvbG9yLW1vZGVsLWNcclxuXHRmdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsLCBhKSB7XHJcblx0XHR2YXIgciwgZywgYixcclxuXHRcdFx0aHVlID0gZnVuY3Rpb24ocCwgcSwgdCkge1xyXG5cdFx0XHRcdGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cclxuXHRcdFx0XHRpZiAodCA+IDEpIHsgdCAtPSAxOyB9XHJcblx0XHRcdFx0aWYgKHQgPCAxIC8gNikgeyByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdCB9O1xyXG5cdFx0XHRcdGlmICh0IDwgMSAvIDIpIHsgcmV0dXJuIHE7IH1cclxuXHRcdFx0XHRpZiAodCA8IDIgLyAzKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNiB9O1xyXG5cdFx0XHRcdHJldHVybiBwO1xyXG5cdFx0XHR9O1xyXG5cdFx0aWYgKHMgPT0gMCkge1xyXG5cdFx0XHRyID0gZyA9IGIgPSBsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzLFxyXG5cdFx0XHRcdHAgPSAyICogbCAtIHE7XHJcblx0XHRcdHIgPSBodWUocCwgcSwgaCArIDEgLyAzKTtcclxuXHRcdFx0ZyA9IGh1ZShwLCBxLCBoKTtcclxuXHRcdFx0YiA9IGh1ZShwLCBxLCBoIC0gMSAvIDMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHsgcjogcm91bmQociAqIDI1NSksIGc6IHJvdW5kKGcgKiAyNTUpLCBiOiByb3VuZChiICogMjU1KSwgYTogYSB9O1xyXG5cdH1cclxuXHRyZXR1cm4gZnVuY3Rpb24oYykge1xyXG5cdFx0dmFyIG8gPSB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbSA9IG51bGw7XHJcblx0XHRpZiAodHlwZW9mIGMgPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRpZiAoYyBpbiBuYW1lcykgeyBjID0gXCIjXCIgKyBuYW1lc1tjXTsgfVxyXG5cdFx0XHRpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldKShbYS1mMC05XSkoW2EtZjAtOV0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdICsgbVsxXSksIGc6IGhpKG1bMl0gKyBtWzJdKSwgYjogaGkobVszXSArIG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdKSwgZzogaGkobVsyXSksIGI6IGhpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSksIGc6IGhpKG1bMl0pLCBiOiBoaShtWzNdKSwgYTogaGYobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2kobVsxXSksIGc6IHNpKG1bMl0pLCBiOiBzaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBwaShtWzFdKSwgZzogcGkobVsyXSksIGI6IHBpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2kobVsxXSksIGc6IHNpKG1bMl0pLCBiOiBzaShtWzNdKSwgYTogc2YobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYmFcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBwaShtWzFdKSwgZzogcGkobVsyXSksIGI6IHBpKG1bM10pLCBhOiBzZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvaHNsXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/KVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihtWzFdKSwgcGYobVsyXSksIHBmKG1bM10pLCAxKTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL2hzbGFcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8pXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihtWzFdKSwgcGYobVsyXSksIHBmKG1bM10pLCBzZihtWzRdKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGMgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRpZiAoYy5yICE9PSB1bmRlZmluZWQgJiYgYy5nICE9IHVuZGVmaW5lZCAmJiBjLmIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKGMuciksIGc6IHNpKGMuZyksIGI6IHNpKGMuYiksIGE6IHNmKGMuYSB8fCAxKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGMuaCAhPT0gdW5kZWZpbmVkICYmIGMucyAhPT0gdW5kZWZpbmVkICYmIGMubCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKGMuaCksIHBmKGMucyksIHBmKGMubCksIHNmKGMuYSB8fCAxKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvO1xyXG5cdH07XHJcbn0oKSk7XHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHsgcGFyc2VDb2xvciB9O1xyXG59XHJcbiIsIi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogTWVtb2l6ZSBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIFRoZSBmdW5jdGlvbiB0byBtZW1vaXplXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbWVtb2l6ZWQgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb25cbiAqL1xuY29uc3QgbWVtb2l6ZSA9IGYgPT4ge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gY2FjaGVbYXJnc10gPz8gKGNhY2hlW2FyZ3NdID0gZi5hcHBseSh0aGlzLCBhcmdzKSk7XG4gIH07XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBSb3VuZCBuIHRvIGQgZGVjaW1hbCBwbGFjZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gcm91bmRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZD0wXSBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHJvdW5kIHRvXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcm91bmRlZCBudW1iZXJcbiAqL1xuY29uc3Qgcm91bmQgPSAobiwgZCA9IDApID0+IHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBkKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAqIHAgKyBOdW1iZXIuRVBTSUxPTikgLyBwO1xufVxuXG4vKipcbiAqIERvIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IGxlcnAgPSAoYSwgYiwgaSkgPT4gYSArIChiIC0gYSkgKiBpO1xuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmNvbnN0IHVubGVycCA9IChhLCBiLCBpKSA9PiAoaSAtIGEpIC8gKGIgLSBhKTtcblxuLyoqXG4gKiBEbyBhIGJpbGluZWFyIGludGVycG9sYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzAxIEJvdHRvbS1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxuICogQHBhcmFtIHtudW1iZXJ9IGl5IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeVxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxuICovXG5jb25zdCBibGVycCA9IChjMDAsIGMxMCwgYzAxLCBjMTEsIGl4LCBpeSkgPT4gbGVycChsZXJwKGMwMCwgYzEwLCBpeCksIGxlcnAoYzAxLCBjMTEsIGl4KSwgaXkpO1xuXG4vKipcbiAqIFJlLW1hcCBhIG51bWJlciBpIGZyb20gcmFuZ2UgYTEuLi5hMiB0byBiMS4uLmIyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxuICogQHBhcmFtIHtudW1iZXJ9IGExXG4gKiBAcGFyYW0ge251bWJlcn0gYTJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxuICogQHBhcmFtIHtudW1iZXJ9IGIyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xuXG4vKipcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzIFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmNvbnN0IHJhZGlhbnMgPSBkZWdyZWVzID0+IChNYXRoLlBJIC8gMTgwKSAqIGRlZ3JlZXM7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKi9cbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggRXhjbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICovXG5jb25zdCByYW5kb21CZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqL1xuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW211PTAuNV0gVGhlIG1lYW4gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICovXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XG4gIH1cbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xufTtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxuICovXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGluZGV4IGZyb20gd1xuICovXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xuICBsZXQgdG90YWwgPSB3LnJlZHVjZSgoYSwgaSkgPT4gYSArIGksIDApLCBuID0gMDtcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcbiAgd2hpbGUgKHRvdGFsID4gcikge1xuICAgIHRvdGFsIC09IHdbbisrXTtcbiAgfVxuICByZXR1cm4gbiAtIDE7XG59O1xuXG4vKipcbiAqIEFuIGludGVycG9sYXRpb24gZnVuY3Rpb25cbiAqIEBjYWxsYmFjayBJbnRlcnBvbGF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gaW50ZXJwb2xhdGVkIHZhbHVlIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEBwYXJhbSB7SW50ZXJwb2xhdGlvbkZ1bmN0aW9ufSBbZj1NYXRoLmxlcnBdIFRoZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRvIHVzZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cbiAqL1xuY29uc3QgbGVycEFycmF5ID0gKGEsIGksIGYgPSBsZXJwKSA9PiB7XG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIGZyYWMocykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbmNvbnN0IGRvdCA9IChhLCBiKSA9PiBhLnJlZHVjZSgobiwgdiwgaSkgPT4gbiArIHYgKiBiW2ldLCAwKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY3RvcmlhbCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcbiAqL1xuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpID0gMjsgaSA8PSBhOyBpKyspIHtcbiAgICByZXN1bHQgKj0gaTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcbiAqL1xuY29uc3QgbnByID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IG5jciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHBlcm11dGF0aW9ucyhbMSwgMiwgM10sIDIpO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgMl0sXG4gKiAgIFsxLCAzXSxcbiAqICAgWzIsIDFdLFxuICogICBbMiwgM10sXG4gKiAgIFszLCAxXSxcbiAqICAgWzMsIDJdXG4gKiBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY2hvb3NlIGluIGVhY2ggcGVybXV0YXRpb25cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgcGVybXV0YXRpb24gYXJyYXlzXG4gKi9cbmNvbnN0IHBlcm11dGF0aW9ucyA9IChhLCByKSA9PiB7XG4gIGlmIChyID09PSAxKSB7XG4gICAgcmV0dXJuIGEubWFwKGl0ZW0gPT4gW2l0ZW1dKTtcbiAgfVxuXG4gIHJldHVybiBhLnJlZHVjZShcbiAgICAoYWNjLCBpdGVtLCBpKSA9PiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5wZXJtdXRhdGlvbnMoYS5zbGljZSgwLCBpKS5jb25jYXQoYS5zbGljZShpICsgMSkpLCByIC0gMSkubWFwKGMgPT4gW2l0ZW0sIC4uLmNdKSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbWJpbmF0aW9ucyhbMSwgMiwgM10sIDIpO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgMl0sXG4gKiAgIFsxLCAzXSxcbiAqICAgWzIsIDNdXG4gKiBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY2hvb3NlIGluIGVhY2ggY29tYmluYXRpb25cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgY29tYmluYXRpb24gYXJyYXlzXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9ucyA9IChhLCByKSA9PiB7XG4gIGlmIChyID09PSAxKSB7XG4gICAgcmV0dXJuIGEubWFwKGl0ZW0gPT4gW2l0ZW1dKTtcbiAgfVxuXG4gIHJldHVybiBhLnJlZHVjZShcbiAgICAoYWNjLCBpdGVtLCBpKSA9PiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5jb21iaW5hdGlvbnMoYS5zbGljZShpICsgMSksIHIgLSAxKS5tYXAoYyA9PiBbaXRlbSwgLi4uY10pLFxuICAgIF0sXG4gICAgW11cbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY2FydGVzaWFuIHByb2R1Y3Qgb2YgYXJyYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjYXJ0ZXNpYW4oWzEsIDIsIDNdLCBbJ2EnLCAnYiddKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIFwiYVwiXSxcbiAqICAgWzEsIFwiYlwiXSxcbiAqICAgWzIsIFwiYVwiXSxcbiAqICAgWzIsIFwiYlwiXSxcbiAqICAgWzMsIFwiYVwiXSxcbiAqICAgWzMsIFwiYlwiXVxuICogXVxuICogYGBgXG4gKi9cbmNvbnN0IGNhcnRlc2lhbiA9ICguLi5hcnIpID0+XG4gIGFyci5yZWR1Y2UoXG4gICAgKGEsIGIpID0+IGEuZmxhdE1hcChjID0+IGIubWFwKGQgPT4gWy4uLmMsIGRdKSksXG4gICAgW1tdXVxuICApO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXG4gKiBAY2FsbGJhY2sgVGltZXNGdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFJldHVybiBhIG5ldyBhcnJheSB3aXRoIGxlbmd0aCBuIGJ5IGNhbGxpbmcgZnVuY3Rpb24gZihpKSBvbiBlYWNoIGVsZW1lbnRcbiAqIEBwYXJhbSB7VGltZXNGdW5jdGlvbn0gZlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTwqPn1cbiAqL1xuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXG4gKi9cbmNvbnN0IHJhbmdlID0gbiA9PiB0aW1lcyhpID0+IGksIG4pO1xuXG4vKipcbiAqIFppcCBtdWx0aXBsZSBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7Li4uQXJyYXk8Kj59IGEgVGhlIGFycmF5cyB0byB6aXBcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuY29uc3QgemlwID0gKC4uLmEpID0+IHRpbWVzKGkgPT4gYS5tYXAoYSA9PiBhW2ldKSwgTWF0aC5tYXgoLi4uYS5tYXAoYSA9PiBhLmxlbmd0aCkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXlbaV0gd2l0aCBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgd3JhcHBpbmdcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGEgVGhlIGFycmF5IHRvIGFjY2Vzc1xuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IGF0ID0gKGEsIGkpID0+IGFbaSA8IDAgPyBhLmxlbmd0aCAtIChNYXRoLmFicyhpICsgMSkgJSBhLmxlbmd0aCkgLSAxIDogaSAlIGEubGVuZ3RoXTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheSB3aXRob3V0IHJlbW92aW5nIGl0XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHsqfSBUaGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IHBlZWsgPSAoYSkgPT4ge1xuICBpZiAoIWEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBhW2EubGVuZ3RoIC0gMV07XG59O1xuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gcG9zaXRpb24gaW4gYW4gdW5yb2xsZWQgMmQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBwb3NpdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHcgVGhlIHdpZHRoIG9mIHRoZSAyZCBhcnJheVxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4IGluIHRoZSB1bnJvbGxlZCBhcnJheVxuICovXG5jb25zdCBpbmQgPSAoeCwgeSwgdykgPT4geCArIHkgKiB3O1xuXG4vKipcbiAqIFJldHVybiB0aGUgcG9zaXRpb24gZm9yIGEgZ2l2ZW4gaW5kZXggaW4gYW4gdW5yb2xsZWQgMmQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IHcgVGhlIHdpZHRoIG9mIHRoZSAyZCBhcnJheVxuICogQHJldHVybnMge0FycmF5PG51bWJlcj59IFRoZSBwb3NpdGlvbiBhcyBhIDItdHVwbGVcbiAqL1xuY29uc3QgcG9zID0gKGksIHcpID0+IFtpICUgdywgTWF0aC5mbG9vcihpIC8gdyldO1xuXG4vKipcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY2h1bmsgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcbiAqL1xuY29uc3QgY2h1bmsgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBhLnNsaWNlKGkgKiBuLCBpICogbiArIG4pLCBNYXRoLmNlaWwoYS5sZW5ndGggLyBuKSk7XG5cbi8qKlxuICogUmFuZG9tbHkgc2h1ZmZsZSBhIHNoYWxsb3cgY29weSBvZiBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxuICovXG5jb25zdCBzaHVmZmxlID0gYSA9PiBhLnNsaWNlKCkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuLyoqXG4gKiBGbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byB1c2UgZm9yIGNvbmNhdGVuYXRpbmcga2V5c1xuICogQHJldHVybiB7b2JqZWN0fSBBIGZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgZmxhdCA9IChvLCBjb25jYXRlbmF0b3IgPSAnLicpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG8pLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAob1trZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogb1trZXldLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb1trZXldICE9PSAnb2JqZWN0JyB8fCAhb1trZXldKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0KG9ba2V5XSwgY29uY2F0ZW5hdG9yKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5PYmplY3Qua2V5cyhmbGF0dGVuZWQpLnJlZHVjZShcbiAgICAgICAgKGNoaWxkQWNjLCBjaGlsZEtleSkgPT4gKHtcbiAgICAgICAgICAuLi5jaGlsZEFjYyxcbiAgICAgICAgICBbYCR7a2V5fSR7Y29uY2F0ZW5hdG9yfSR7Y2hpbGRLZXl9YF06IGZsYXR0ZW5lZFtjaGlsZEtleV0sXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKSxcbiAgICB9O1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIFVuZmxhdHRlbiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uY2F0ZW5hdG9yIFRoZSBzdHJpbmcgdG8gY2hlY2sgZm9yIGluIGNvbmNhdGVuYXRlZCBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIHVuLWZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgdW5mbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge30sIHRlbXAsIHN1YnN0cmluZ3MsIHByb3BlcnR5LCBpO1xuXG4gIGZvciAocHJvcGVydHkgaW4gbykge1xuICAgIHN1YnN0cmluZ3MgPSBwcm9wZXJ0eS5zcGxpdChjb25jYXRlbmF0b3IpO1xuICAgIHRlbXAgPSByZXN1bHQ7XG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoIShzdWJzdHJpbmdzW2ldIGluIHRlbXApKSB7XG4gICAgICAgIGlmIChpc0Zpbml0ZShzdWJzdHJpbmdzW2kgKyAxXSkpIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFtzdWJzdHJpbmdzW2ldXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0ZW1wID0gdGVtcFtzdWJzdHJpbmdzW2ldXTtcbiAgICB9XG4gICAgdGVtcFtzdWJzdHJpbmdzW3N1YnN0cmluZ3MubGVuZ3RoIC0gMV1dID0gb1twcm9wZXJ0eV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBBIHNwbGl0IHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIFNwbGl0UHJlZGljYXRlXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGN1cnJlbnQgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFycmF5IHNob3VsZCBzcGxpdCBhdCB0aGlzIGluZGV4XG4gKi9cblxuLyoqXG4gKiBTcGxpdCBhbiBhcnJheSBpbnRvIHN1Yi1hcnJheXMgYmFzZWQgb24gYSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFycmF5XG4gKiBAcGFyYW0ge1NwbGl0UHJlZGljYXRlfSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKi9cbmNvbnN0IHNwbGl0ID0gKGFycmF5LCBwcmVkaWNhdGUpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGxldCBjdXJyZW50ID0gW107XG4gIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBsdWNrIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBwbHVjayBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBsdWNrZWQga2V5c1xuICovXG5jb25zdCBwbHVjayA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShcbiAgICAocmVzdWx0LCBrZXkpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvW2tleV0gfSksXG4gICAge31cbiAgKTtcbn07XG5cbi8qKlxuICogRXhjbHVkZSBrZXlzIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IGtleXMgVGhlIGtleXMgdG8gZXhjbHVkZSBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGtleXMgZXhjZXB0IGV4Y2x1ZGVkIGtleXNcbiAqL1xuY29uc3QgZXhjbHVkZSA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMobykuZmlsdGVyKChba2V5XSkgPT4gIWtleXMuaW5jbHVkZXMoa2V5KSlcbiAgKTtcbn07XG5cbi8qKlxuICogQSBrZXkgdHJhbnNmb3JtIHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIEtleVRyYW5zZm9ybUZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gbyBUaGUgb2JqZWN0IGJlaW5nIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgY3VycmVudCBwYXRoIGluIGRvdCBub3RhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgY3VycmVudCBrZXlcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfG51bGx9IFRoZSB0cmFuc2Zvcm1lZCBrZXksIG9yIG51bGwgdG8gb21pdCB0aGUga2V5XG4gKi9cblxuLyoqXG4gKiBBIHZhbHVlIHRyYW5zZm9ybSBwcmVkaWNhdGVcbiAqIEBjYWxsYmFjayBWYWx1ZVRyYW5zZm9ybUZ1bmN0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gbyBUaGUgb2JqZWN0IGJlaW5nIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgY3VycmVudCBwYXRoIGluIGRvdCBub3RhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgY3VycmVudCBrZXlcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7YW55fSBUaGUgdHJhbnNmb3JtZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYW5zZm9ybSB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG8gVGhlIG9iamVjdCB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7S2V5VHJhbnNmb3JtRnVuY3Rpb259IFtrZj11bmRlZmluZWRdIE9wdGlvbmFsIGtleSB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7VmFsdWVUcmFuc2Zvcm1GdW5jdGlvbn0gW3ZmPXVuZGVmaW5lZF0gT3B0aW9uYWwgdmFsdWUgdHJhbnNmb3JtXG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSB0cmFuc2Zvcm1lZCBvYmplY3RcbiAqL1xuY29uc3QgdHJhbnNmb3JtID0gKG8sIGtmID0gdW5kZWZpbmVkLCB2ZiA9IHVuZGVmaW5lZCkgPT4ge1xuICBjb25zdCBpbm5lclRyYW5zZm9ybSA9IChvYmosIGN1cnJlbnRQYXRoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9iaikucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgbGV0IG5ld0tleSA9IGtleTtcbiAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgY29uc3QgcGF0aCA9IGN1cnJlbnRQYXRoID8gYCR7Y3VycmVudFBhdGh9LiR7a2V5fWAgOiBrZXk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIG5ld1ZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBuZXdWYWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAhKG5ld1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiZcbiAgICAgICAgIUFycmF5LmlzQXJyYXkobmV3VmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbm5lclRyYW5zZm9ybShuZXdWYWx1ZSwgcGF0aCk7XG4gICAgICB9IGVsc2UgaWYgKHZmKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdmYob2JqLCBwYXRoLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZikge1xuICAgICAgICBuZXdLZXkgPSBrZihvYmosIHBhdGgsIGtleSwgbmV3VmFsdWUpO1xuICAgICAgICBpZiAobmV3S2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtuZXdLZXldOiBuZXdWYWx1ZSxcbiAgICAgIH07XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBpbm5lclRyYW5zZm9ybShvLCAnJyk7XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbWVtb2l6ZSxcbiAgICBmbG9hdEVxdWFscyxcbiAgICBjbGFtcCxcbiAgICBmcmFjLFxuICAgIHJvdW5kLFxuICAgIGxlcnAsXG4gICAgdW5sZXJwLFxuICAgIGJsZXJwLFxuICAgIHJlbWFwLFxuICAgIHNtb290aHN0ZXAsXG4gICAgcmFkaWFucyxcbiAgICBkZWdyZWVzLFxuICAgIHJhbmRvbUJldHdlZW4sXG4gICAgcmFuZG9tSW50QmV0d2VlbixcbiAgICBjbHRSYW5kb20sXG4gICAgY2x0UmFuZG9tSW50LFxuICAgIHdlaWdodGVkUmFuZG9tLFxuICAgIGxlcnBBcnJheSxcbiAgICBkb3QsXG4gICAgZmFjdG9yaWFsLFxuICAgIG5wcixcbiAgICBuY3IsXG4gICAgcGVybXV0YXRpb25zLFxuICAgIGNvbWJpbmF0aW9ucyxcbiAgICBjYXJ0ZXNpYW4sXG4gICAgdGltZXMsXG4gICAgcmFuZ2UsXG4gICAgemlwLFxuICAgIGF0LFxuICAgIHBlZWssXG4gICAgaW5kLFxuICAgIHBvcyxcbiAgICBjaHVuayxcbiAgICBzaHVmZmxlLFxuICAgIGZsYXQsXG4gICAgdW5mbGF0LFxuICAgIHNwbGl0LFxuICAgIHBsdWNrLFxuICAgIGV4Y2x1ZGUsXG4gICAgdHJhbnNmb3JtLFxuICB9O1xufVxuIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBzbWFsbCB2ZWN0b3IgYW5kIG1hdHJpeCBsaWJyYXJ5XG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbmNvbnN0IF92ZWNfdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xuY29uc3QgX3ZlY19jaHVuayA9IChhLCBuKSA9PiBfdmVjX3RpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuY29uc3QgX3ZlY19kb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5jb25zdCBfdmVjX2lzX3ZlYzIgPSBhID0+IHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiAneCcgaW4gYSAmJiAneScgaW4gYTtcbmNvbnN0IF92ZWNfaXNfdmVjMyA9IGEgPT4gdHlwZW9mIGEgPT09ICdvYmplY3QnICYmICd4JyBpbiBhICYmICd5JyBpbiBhICYmICd6JyBpbiBhO1xuXG4vKipcbiAqIEEgMmQgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSB2ZWMyXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSAyZCB2ZWN0b3JcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIDJkIHZlY3RvciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzVmVjMih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICd4JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS54ID09PSAnbnVtYmVyJyAmJlxuICAgICd5JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS55ID09PSAnbnVtYmVyJyAmJlxuICAgICEoJ3onIGluIHZhbHVlKVxuICApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyAyZCB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlYzJ9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gQSBuZXcgMmQgdmVjdG9yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj52YXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMigzLCAyKTsgLy8gKDMsIDIpXG4gKiBsZXQgYiA9IHZlYzIoNCk7ICAgIC8vICg0LCA0KVxuICogbGV0IGMgPSB2ZWMyKGEpOyAgICAvLyAoMywgMilcbiAqIGxldCBkID0gdmVjMigpOyAgICAgLy8gKDAsIDApXG4gKi9cbmNvbnN0IHZlYzIgPSAoeCwgeSkgPT4ge1xuICBpZiAoIXggJiYgIXkpIHtcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gIH1cbiAgaWYgKF92ZWNfaXNfdmVjMih4KSkge1xuICAgIHJldHVybiB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9O1xuICB9XG4gIHJldHVybiB7IHg6IHgsIHk6IHkgPz8geCB9O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMyLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogQ3JlYXRlIGEgdmVjdG9yIGZyb20gYW4gYXJyYXkgb2YgY29tcG9uZW50c1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb21wb25lbnRzIFRoZSBjb21wb25lbnRzIG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgbmV3IHZlY3RvclxuICovXG52ZWMyLmZyb21Db21wb25lbnRzID0gY29tcG9uZW50cyA9PiB2ZWMyKC4uLmNvbXBvbmVudHMuc2xpY2UoMCwgMikpO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwKVxuICogQHJldHVybiB7dmVjMn0gQSB1bml0IHZlY3RvciAoMSwgMClcbiAqL1xudmVjMi51eCA9ICgpID0+IHZlYzIoMSwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxuICovXG52ZWMyLnV5ID0gKCkgPT4gdmVjMigwLCAxKTtcblxuLyoqXG4gKiBBZGQgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSArIGJcbiAqL1xudmVjMi5hZGQgPSAoYSwgYikgPT4gKHsgeDogYS54ICsgKGIueCA/PyBiKSwgeTogYS55ICsgKGIueSA/PyBiKSB9KTtcblxuLyoqXG4gKiBBZGQgbXVsdGlwbGUgdmVjdG9yc1xuICogQHBhcmFtICB7Li4uYW55fSB2IFZlY3RvcnMgdG8gYWRkXG4gKiBAcmV0dXJucyB7dmVjMn0gVGhlIHN1bSBvZiB0aGUgdmVjdG9yc1xuICovXG52ZWMyLmFkZG0gPSAoLi4udikgPT4gdi5yZWR1Y2UoKGEsIGIpID0+IHZlYzIuYWRkKGEsIGIpLCB2ZWMyKCkpO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgLSBiXG4gKi9cbnZlYzIuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIChiLnggPz8gYiksIHk6IGEueSAtIChiLnkgPz8gYikgfSk7XG5cbi8qKlxuICogU3VidHJhY3QgbXVsdGlwbGUgdmVjdG9yc1xuICogQHBhcmFtICB7Li4uYW55fSB2IFZlY3RvcnMgdG8gc3VidHJhY3RcbiAqIEByZXR1cm5zIHt2ZWMyfSBUaGUgcmVzdWx0IG9mIHN1YnRyYWN0aW5nIHRoZSB2ZWN0b3JzXG4gKi9cbnZlYzIuc3VibSA9ICguLi52KSA9PiB2LnJlZHVjZSgoYSwgYikgPT4gdmVjMi5zdWIoYSwgYikpO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMnxudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhICogYlxuICovXG52ZWMyLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiAoYi54ID8/IGIpLCB5OiBhLnkgKiAoYi55ID8/IGIpIH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLCBhbGlhcyBmb3IgdmVjMi5tdWxcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgKiBiXG4gKi9cbnZlYzIuc2NhbGUgPSAoYSwgYikgPT4gdmVjMi5tdWwoYSwgYik7XG5cbi8qKlxuICogRGl2aWRlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMnxudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhIC8gYlxuICovXG52ZWMyLmRpdiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLyAoYi54ID8/IGIpLCB5OiBhLnkgLyAoYi55ID8/IGIpIH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYzIubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYzIubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7dmVjMn0gXmFcbiAqL1xudmVjMi5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYzIubGVuKGEpO1xuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiB9IDogdmVjMigpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbnZlYzIuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMi5yb3QgPSAoYSwgcikgPT4ge1xuICBsZXQgcyA9IE1hdGguc2luKHIpLFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XG59O1xuXG4vKipcbiAqIEZhc3QgbWV0aG9kIHRvIHJvdGF0ZSBhIHZlY3RvciBieSAtOTAsIDkwIG9yIDE4MCBkZWdyZWVzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIDEgZm9yIDkwIGRlZ3JlZXMgKGN3KSwgLTEgZm9yIC05MCBkZWdyZWVzIChjY3cpLCAyIG9yIC0yIGZvciAxODAgZGVncmVlc1xuICogQHJldHVybiB7dmVjMn0gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMyLnJvdGYgPSAoYSwgcikgPT4ge1xuICBzd2l0Y2ggKHIpIHtcbiAgICBjYXNlIDE6IHJldHVybiB2ZWMyKGEueSwgLWEueCk7XG4gICAgY2FzZSAtMTogcmV0dXJuIHZlYzIoLWEueSwgYS54KTtcbiAgICBjYXNlIDI6IGNhc2UgLTI6IHJldHVybiB2ZWMyKC1hLngsIC1hLnkpO1xuICAgIGRlZmF1bHQ6IHJldHVybiBhO1xuICB9XG59O1xuXG4vKipcbiAqIFNjYWxhciBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIMOXIGJcbiAqL1xudmVjMi5jcm9zcyA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBhLnggKiBiLnkgLSBhLnkgKiBiLng7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYzIuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYzIucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWMyfSBBIGNvcHkgb2YgdmVjdG9yIGFcbiAqL1xudmVjMi5jcHkgPSBhID0+IHZlYzIoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgMmQgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjMk1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGNvbXBvbmVudCB2YWx1ZVxuICogQHBhcmFtIHsneCcgfCAneSd9IGxhYmVsIFRoZSBjb21wb25lbnQgbGFiZWwgKHggb3IgeSlcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvciBhbmQgYnVpbGQgYSBuZXcgdmVjdG9yIGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gVmVjdG9yIGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG52ZWMyLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMyLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX1gO1xuXG4vKipcbiAqIFN3aXp6bGUgYSB2ZWN0b3Igd2l0aCBhIHN0cmluZyBvZiBjb21wb25lbnQgbGFiZWxzXG4gKlxuICogVGhlIHN0cmluZyBjYW4gY29udGFpbjpcbiAqIC0gYHhgIG9yIGB5YFxuICogLSBgdWAgb3IgYHZgIChhbGlhc2VzIGZvciBgeGAgYW5kIGB5YCwgcmVzcGVjdGl2ZWx5KVxuICogLSBgWGAsIGBZYCwgYFVgLCBgVmAgKG5lZ2F0ZWQgdmVyc2lvbnMgb2YgdGhlIGFib3ZlKVxuICogLSBgMGAgb3IgYDFgICh0aGVzZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHVuY2hhbmdlZClcbiAqIC0gYC5gIHRvIHJldHVybiB0aGUgY29tcG9uZW50IHRoYXQgd291bGQgbm9ybWFsbHkgYmUgYXQgdGhpcyBwb3NpdGlvbiAob3IgMClcbiAqXG4gKiBBbnkgb3RoZXIgY2hhcmFjdGVycyB3aWxsIGRlZmF1bHQgdG8gMFxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gc3dpenpsZVxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScuLiddIFRoZSBzd2l6emxlIHN0cmluZ1xuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHN3aXp6bGVkIGNvbXBvbmVudHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnN3aXp6bGluZyBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMigzLCAtMik7XG4gKiB2ZWMyLnN3aXooYSwgJ3gnKTsgICAgLy8gWzNdXG4gKiB2ZWMyLnN3aXooYSwgJ3l4Jyk7ICAgLy8gWy0yLCAzXVxuICogdmVjMi5zd2l6KGEsICd4WScpOyAgIC8vIFszLCAyXVxuICogdmVjMi5zd2l6KGEsICdZeScpOyAgIC8vIFsyLCAtMl1cbiAqIHZlYzIuc3dpeihhLCAneC54Jyk7ICAvLyBbMywgLTIsIDNdXG4gKiB2ZWMyLnN3aXooYSwgJ3kwMXgnKTsgLy8gWy0yLCAwLCAxLCAzXVxuICovXG52ZWMyLnN3aXogPSAoYSwgcyA9ICcuLicpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHMuc3BsaXQoJycpLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJ3gnOiBjYXNlICd1JzogcmVzdWx0LnB1c2goYS54KTsgYnJlYWs7XG4gICAgICBjYXNlICd5JzogY2FzZSAndic6IHJlc3VsdC5wdXNoKGEueSk7IGJyZWFrO1xuICAgICAgY2FzZSAnWCc6IGNhc2UgJ1UnOiByZXN1bHQucHVzaCgtYS54KTsgYnJlYWs7XG4gICAgICBjYXNlICdZJzogY2FzZSAnVic6IHJlc3VsdC5wdXNoKC1hLnkpOyBicmVhaztcbiAgICAgIGNhc2UgJzAnOiByZXN1bHQucHVzaCgwKTsgYnJlYWs7XG4gICAgICBjYXNlICcxJzogcmVzdWx0LnB1c2goMSk7IGJyZWFrO1xuICAgICAgY2FzZSAnLic6IHJlc3VsdC5wdXNoKFthLngsIGEueV1baV0gPz8gMCk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcmVzdWx0LnB1c2goMCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUG9sYXIgY29vcmRpbmF0ZXMgZm9yIGEgMmQgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBwb2xhckNvb3JkaW5hdGVzMmRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByIFRoZSBtYWduaXR1ZGUgKHJhZGl1cykgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRoZXRhIFRoZSBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gcG9sYXIgY29vcmRpbmF0ZXNcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEByZXR1cm4ge3BvbGFyQ29vcmRpbmF0ZXMyZH0gVGhlIG1hZ25pdHVkZSBhbmQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICovXG52ZWMyLnBvbGFyID0gYSA9PiAoeyByOiB2ZWMyLmxlbihhKSwgdGhldGE6IE1hdGguYXRhbjIoYS55LCBhLngpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgcG9sYXIgY29vcmRpbmF0ZXMgaW50byBhIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG1hZ25pdHVkZSAocmFkaXVzKSBvZiB0aGUgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gdGhldGEgVGhlIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGFuZ2xlIGFuZCBtYWduaXR1ZGVcbiAqL1xudmVjMi5mcm9tUG9sYXIgPSAociwgdGhldGEpID0+IHZlYzIociAqIE1hdGguY29zKHRoZXRhKSwgciAqIE1hdGguc2luKHRoZXRhKSk7XG5cbi8qKlxuICogQSAzZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlYzNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHogVGhlIHogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYSAzZCB2ZWN0b3JcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIDNkIHZlY3RvciwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGlzVmVjMyh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICd4JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS54ID09PSAnbnVtYmVyJyAmJlxuICAgICd5JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS55ID09PSAnbnVtYmVyJyAmJlxuICAgICd6JyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS56ID09PSAnbnVtYmVyJ1xuICApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyAzZCB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlYzN8dmVjMn0gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciB0aGUgeiBjb21wb25lbnQgaWYgeCBpcyBhIHZlYzJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbel0gVGhlIHogY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzN9IEEgbmV3IDNkIHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+dmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYzMoMywgMiwgMSk7ICAgICAgIC8vICgzLCAyLCAxKVxuICogbGV0IGIgPSB2ZWMzKDQsIDUpOyAgICAgICAgICAvLyAoNCwgNSwgMClcbiAqIGxldCBjID0gdmVjMyg2KTsgICAgICAgICAgICAgLy8gKDYsIDYsIDYpXG4gKiBsZXQgZCA9IHZlYzMoYSk7ICAgICAgICAgICAgIC8vICgzLCAyLCAxKVxuICogbGV0IGUgPSB2ZWMzKCk7ICAgICAgICAgICAgICAvLyAoMCwgMCwgMClcbiAqIGxldCBmID0gdmVjMyh2ZWMyKDEsIDIpLCAzKTsgLy8gKDEsIDIsIDMpXG4gKiBsZXQgZyA9IHZlYzModmVjMig0LCA1KSk7ICAgIC8vICg0LCA1LCAwKVxuICovXG5jb25zdCB2ZWMzID0gKHgsIHksIHopID0+IHtcbiAgaWYgKCF4ICYmICF5ICYmICF6KSB7XG4gICAgcmV0dXJuIHsgeDogMCwgeTogMCwgejogMCB9O1xuICB9XG4gIGlmIChfdmVjX2lzX3ZlYzMoeCkpIHtcbiAgICByZXR1cm4geyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAsIHo6IHgueiB8fCAwIH07XG4gIH1cbiAgaWYgKF92ZWNfaXNfdmVjMih4KSkge1xuICAgIHJldHVybiB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCwgejogeSB8fCAwIH07XG4gIH1cbiAgcmV0dXJuIHsgeDogeCwgeTogeSA/PyB4LCB6OiB6ID8/IHggfTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjMy5jb21wb25lbnRzID0gYSA9PiBbYS54LCBhLnksIGEuel07XG5cbi8qKlxuICogQ3JlYXRlIGEgdmVjdG9yIGZyb20gYW4gYXJyYXkgb2YgY29tcG9uZW50c1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb21wb25lbnRzIFRoZSBjb21wb25lbnRzIG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzN9IEEgbmV3IHZlY3RvclxuICovXG52ZWMzLmZyb21Db21wb25lbnRzID0gY29tcG9uZW50cyA9PiB2ZWMzKC4uLmNvbXBvbmVudHMuc2xpY2UoMCwgMykpO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwLCAwKVxuICogQHJldHVybiB7dmVjM30gQSB1bml0IHZlY3RvciAoMSwgMCwgMClcbiAqL1xudmVjMy51eCA9ICgpID0+IHZlYzMoMSwgMCwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEsIDApXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHVuaXQgdmVjdG9yICgwLCAxLCAwKVxuICovXG52ZWMzLnV5ID0gKCkgPT4gdmVjMygwLCAxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMCwgMSlcbiAqIEByZXR1cm4ge3ZlYzN9IEEgdW5pdCB2ZWN0b3IgKDAsIDAsIDEpXG4gKi9cbnZlYzMudXogPSAoKSA9PiB2ZWMzKDAsIDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM3xudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhICsgYlxuICovXG52ZWMzLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyAoYi54ID8/IGIpLCB5OiBhLnkgKyAoYi55ID8/IGIpLCB6OiBhLnogKyAoYi56ID8/IGIpIH0pO1xuXG4vKipcbiAqIEFkZCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBhZGRcbiAqIEByZXR1cm5zIHt2ZWMzfSBUaGUgc3VtIG9mIHRoZSB2ZWN0b3JzXG4gKi9cbnZlYzMuYWRkbSA9ICguLi52KSA9PiB2LnJlZHVjZSgoYSwgYikgPT4gdmVjMy5hZGQoYSwgYiksIHZlYzMoKSk7XG5cbi8qKlxuICogU3VidHJhY3QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAtIGJcbiAqL1xudmVjMy5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gKGIueCA/PyBiKSwgeTogYS55IC0gKGIueSA/PyBiKSwgejogYS56IC0gKGIueiA/PyBiKSB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBzdWJ0cmFjdFxuICogQHJldHVybnMge3ZlYzN9IFRoZSByZXN1bHQgb2Ygc3VidHJhY3RpbmcgdGhlIHZlY3RvcnNcbiAqL1xudmVjMy5zdWJtID0gKC4uLnYpID0+IHYucmVkdWNlKChhLCBiKSA9PiB2ZWMzLnN1YihhLCBiKSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgKiBiXG4gKi9cbnZlYzMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIChiLnggPz8gYiksIHk6IGEueSAqIChiLnkgPz8gYiksIHo6IGEueiAqIChiLnogPz8gYikgfSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3IgYnkgYSBzY2FsYXIsIGFsaWFzIGZvciB2ZWMzLm11bFxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAqIGJcbiAqL1xudmVjMy5zY2FsZSA9IChhLCBiKSA9PiB2ZWMzLm11bChhLCBiKTtcblxuLyoqXG4gKiBEaXZpZGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgLyBiXG4gKi9cbnZlYzMuZGl2ID0gKGEsIGIpID0+ICh7IHg6IGEueCAvIChiLnggPz8gYiksIHk6IGEueSAvIChiLnkgPz8gYiksIHo6IGEueiAvIChiLnogPz8gYikgfSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnopO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpICsgTWF0aC5hYnMoYS56KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7dmVjM30gXmFcbiAqL1xudmVjMy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYzMubGVuKGEpO1xuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiwgejogYS56IC8gbGVuIH0gOiB2ZWMzKCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjMy5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciB1c2luZyBhIHJvdGF0aW9uIG1hdHJpeFxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge21hdH0gbSBUaGUgcm90YXRpb24gbWF0cml4XG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90ID0gKGEsIG0pID0+IHZlYzMoXG4gIHZlYzMuZG90KHZlYzMuZnJvbUNvbXBvbmVudHMobWF0LnJvdyhtLCAxKSksIGEpLFxuICB2ZWMzLmRvdCh2ZWMzLmZyb21Db21wb25lbnRzKG1hdC5yb3cobSwgMikpLCBhKSxcbiAgdmVjMy5kb3QodmVjMy5mcm9tQ29tcG9uZW50cyhtYXQucm93KG0sIDMpKSwgYSlcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFucyBhcm91bmQgdGhlIHggYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90eCA9IChhLCByKSA9PiB2ZWMzKFxuICBhLngsXG4gIGEueSAqIE1hdGguY29zKHIpIC0gYS56ICogTWF0aC5zaW4ociksXG4gIGEueSAqIE1hdGguc2luKHIpICsgYS56ICogTWF0aC5jb3Mocilcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFucyBhcm91bmQgdGhlIHkgYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90eSA9IChhLCByKSA9PiB2ZWMzKFxuICBhLnggKiBNYXRoLmNvcyhyKSArIGEueiAqIE1hdGguc2luKHIpLFxuICBhLnksXG4gIC1hLnggKiBNYXRoLnNpbihyKSArIGEueiAqIE1hdGguY29zKHIpXG4pO1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnMgYXJvdW5kIHRoZSB6IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdHogPSAoYSwgcikgPT4gdmVjMyhcbiAgYS54ICogTWF0aC5jb3MocikgLSBhLnkgKiBNYXRoLnNpbihyKSxcbiAgYS54ICogTWF0aC5zaW4ocikgKyBhLnkgKiBNYXRoLmNvcyhyKSxcbiAgYS56XG4pO1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciB1c2luZyBhIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBxIFRoZSBxdWF0ZXJuaW9uIHRvIHJvdGF0ZSBieVxuICogQHJldHVybiB7dmVjM30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMzLnJvdHEgPSAodiwgcSkgPT4ge1xuICBpZiAocS5sZW5ndGggIT09IDQpIHtcbiAgICByZXR1cm4gdmVjMygpO1xuICB9XG5cbiAgY29uc3QgZCA9IE1hdGguc3FydChxWzBdICogcVswXSArIHFbMV0gKiBxWzFdICsgcVsyXSAqIHFbMl0gKyBxWzNdICogcVszXSk7XG4gIGlmIChkID09PSAwKSB7XG4gICAgcmV0dXJuIHZlYzMoKTtcbiAgfVxuXG4gIGNvbnN0IHVxID0gW3FbMF0gLyBkLCBxWzFdIC8gZCwgcVsyXSAvIGQsIHFbM10gLyBkXTtcbiAgY29uc3QgdSA9IHZlYzMoLi4udXEuc2xpY2UoMCwgMykpO1xuICBjb25zdCBzID0gdXFbM107XG4gIHJldHVybiB2ZWMzLmFkZChcbiAgICB2ZWMzLmFkZChcbiAgICAgIHZlYzMubXVsKHUsIDIgKiB2ZWMzLmRvdCh1LCB2KSksXG4gICAgICB2ZWMzLm11bCh2LCBzICogcyAtIHZlYzMuZG90KHUsIHUpKVxuICAgICksXG4gICAgdmVjMy5tdWwodmVjMy5jcm9zcyh1LCB2KSwgMiAqIHMpXG4gICk7XG59O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciB1c2luZyBFdWxlciBhbmdsZXNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBlIFRoZSBFdWxlciBhbmdsZXMgdG8gcm90YXRlIGJ5XG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90YSA9IChhLCBlKSA9PiB2ZWMzLnJvdHoodmVjMy5yb3R5KHZlYzMucm90eChhLCBlLngpLCBlLnkpLCBlLnopO1xuXG4vKipcbiAqIEdldCB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjM30gYSDDlyBiXG4gKi9cbnZlYzMuY3Jvc3MgPSAoYSwgYikgPT4gdmVjMyhcbiAgYS55ICogYi56IC0gYS56ICogYi55LFxuICBhLnogKiBiLnggLSBhLnggKiBiLnosXG4gIGEueCAqIGIueSAtIGEueSAqIGIueFxuKTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmVjdG9ycyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMzLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55ICYmIGEueiA9PT0gYi56O1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IgZnJvbSB0aGUgeCBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjMy5yYWR4ID0gYSA9PiBNYXRoLmF0YW4yKGEueiwgYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yIGZyb20gdGhlIHkgYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYzMucmFkeSA9IGEgPT4gTWF0aC5hdGFuMihhLngsIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvciBmcm9tIHRoZSB6IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMzLnJhZHogPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLnopO1xuXG4vKipcbiAqIENvcHkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlYzN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMzLmNweSA9IGEgPT4gdmVjMyhhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSAzZCB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWMzTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5JyB8ICd6J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCwgeSBvciB6KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzNNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMzfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYzMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSwgejogZihhLnosICd6JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMzLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX0ke3N9JHthLnp9YDtcblxuLyoqXG4gKiBTd2l6emxlIGEgdmVjdG9yIHdpdGggYSBzdHJpbmcgb2YgY29tcG9uZW50IGxhYmVsc1xuICpcbiAqIFRoZSBzdHJpbmcgY2FuIGNvbnRhaW46XG4gKiAtIGB4YCwgYHlgIG9yIGB6YFxuICogLSBgdWAsIGB2YCBvciBgd2AgKGFsaWFzZXMgZm9yIGB4YCwgYHlgIGFuZCBgemAsIHJlc3BlY3RpdmVseSlcbiAqIC0gYHJgLCBgZ2Agb3IgYGJgIChhbGlhc2VzIGZvciBgeGAsIGB5YCBhbmQgYHpgLCByZXNwZWN0aXZlbHkpXG4gKiAtIGBYYCwgYFlgLCBgWmAsIGBVYCwgYFZgLCBgV2AsIGBSYCwgYEdgLCBgQmAgKG5lZ2F0ZWQgdmVyc2lvbnMgb2YgdGhlIGFib3ZlKVxuICogLSBgMGAgb3IgYDFgICh0aGVzZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoIHVuY2hhbmdlZClcbiAqIC0gYC5gIHRvIHJldHVybiB0aGUgY29tcG9uZW50IHRoYXQgd291bGQgbm9ybWFsbHkgYmUgYXQgdGhpcyBwb3NpdGlvbiAob3IgMClcbiAqXG4gKiBBbnkgb3RoZXIgY2hhcmFjdGVycyB3aWxsIGRlZmF1bHQgdG8gMFxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gc3dpenpsZVxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScuLi4nXSBUaGUgc3dpenpsZSBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSBzd2l6emxlZCBjb21wb25lbnRzXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5zd2l6emxpbmcgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYzMoMywgLTIsIDEpO1xuICogdmVjMy5zd2l6KGEsICd4Jyk7ICAgICAvLyBbM11cbiAqIHZlYzMuc3dpeihhLCAnenl4Jyk7ICAgLy8gWzEsIC0yLCAzXVxuICogdmVjMy5zd2l6KGEsICd4WVonKTsgICAvLyBbMywgMiwgLTFdXG4gKiB2ZWMzLnN3aXooYSwgJ1p6eCcpOyAgIC8vIFstMSwgMSwgM11cbiAqIHZlYzMuc3dpeihhLCAneC54Jyk7ICAgLy8gWzMsIC0yLCAzXVxuICogdmVjMy5zd2l6KGEsICd5MDF6eCcpOyAvLyBbLTIsIDAsIDEsIDEsIDNdXG4gKi9cbnZlYzMuc3dpeiA9IChhLCBzID0gJy4uLicpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHMuc3BsaXQoJycpLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICBzd2l0Y2ggKGMpIHtcbiAgICAgIGNhc2UgJ3gnOiBjYXNlICd1JzogY2FzZSAncic6IHJlc3VsdC5wdXNoKGEueCk7IGJyZWFrO1xuICAgICAgY2FzZSAneSc6IGNhc2UgJ3YnOiBjYXNlICdnJzogcmVzdWx0LnB1c2goYS55KTsgYnJlYWs7XG4gICAgICBjYXNlICd6JzogY2FzZSAndyc6IGNhc2UgJ2InOiByZXN1bHQucHVzaChhLnopOyBicmVhaztcbiAgICAgIGNhc2UgJ1gnOiBjYXNlICdVJzogY2FzZSAnUic6IHJlc3VsdC5wdXNoKC1hLngpOyBicmVhaztcbiAgICAgIGNhc2UgJ1knOiBjYXNlICdWJzogY2FzZSAnRyc6IHJlc3VsdC5wdXNoKC1hLnkpOyBicmVhaztcbiAgICAgIGNhc2UgJ1onOiBjYXNlICdXJzogY2FzZSAnQic6IHJlc3VsdC5wdXNoKC1hLnopOyBicmVhaztcbiAgICAgIGNhc2UgJzAnOiByZXN1bHQucHVzaCgwKTsgYnJlYWs7XG4gICAgICBjYXNlICcxJzogcmVzdWx0LnB1c2goMSk7IGJyZWFrO1xuICAgICAgY2FzZSAnLic6IHJlc3VsdC5wdXNoKFthLngsIGEueSwgYS56XVtpXSA/PyAwKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiByZXN1bHQucHVzaCgwKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQb2xhciBjb29yZGluYXRlcyBmb3IgYSAzZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHBvbGFyQ29vcmRpbmF0ZXMzZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHIgVGhlIG1hZ25pdHVkZSAocmFkaXVzKSBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGhldGEgVGhlIHRpbHQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBoaSBUaGUgcGFuIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBwb2xhciBjb29yZGluYXRlc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHJldHVybiB7cG9sYXJDb29yZGluYXRlczNkfSBUaGUgbWFnbml0dWRlLCB0aWx0IGFuZCBwYW4gb2YgdGhlIHZlY3RvclxuICovXG52ZWMzLnBvbGFyID0gYSA9PiB7XG4gIGxldCByID0gdmVjMy5sZW4oYSksXG4gICAgdGhldGEgPSBNYXRoLmFjb3MoYS55IC8gciksXG4gICAgcGhpID0gTWF0aC5hdGFuMihhLnosIGEueCk7XG4gIHJldHVybiB7IHIsIHRoZXRhLCBwaGkgfTtcbn07XG5cbi8qKlxuICogQ29udmVydCBwb2xhciBjb29yZGluYXRlcyBpbnRvIGEgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbWFnbml0dWRlIChyYWRpdXMpIG9mIHRoZSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGV0YSBUaGUgdGlsdCBvZiB0aGUgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gcGhpIFRoZSBwYW4gb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjM30gQSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gYW5nbGUgYW5kIG1hZ25pdHVkZVxuICovXG52ZWMzLmZyb21Qb2xhciA9IChyLCB0aGV0YSwgcGhpKSA9PiB7XG4gIGNvbnN0IHNpblRoZXRhID0gTWF0aC5zaW4odGhldGEpO1xuICByZXR1cm4gdmVjMyhcbiAgICByICogc2luVGhldGEgKiBNYXRoLmNvcyhwaGkpLFxuICAgIHIgKiBNYXRoLmNvcyh0aGV0YSksXG4gICAgciAqIHNpblRoZXRhICogTWF0aC5zaW4ocGhpKVxuICApO1xufTtcblxuLyoqXG4gKiBBIG1hdHJpeFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIG1hdHJpeFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgbWF0cml4LCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNNYXQodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAnbScgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUubSA9PT0gJ251bWJlcicgJiZcbiAgICAnbicgaW4gdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUubiA9PT0gJ251bWJlcicgJiZcbiAgICAnZW50cmllcycgaW4gdmFsdWUgJiZcbiAgICBBcnJheS5pc0FycmF5KHZhbHVlLmVudHJpZXMpXG4gICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxuICovXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XG4gIG0sIG4sXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcbn0pO1xuXG4vKipcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxuICovXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xuXG4vKipcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcbiAqL1xubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xuXG4vKipcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxuICovXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XG5cbi8qKlxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxuICovXG5tYXQucm93ID0gKGEsIG0pID0+IHtcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XG59O1xuXG4vKipcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LmNvbCA9IChhLCBuKSA9PiBfdmVjX3RpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcblxuLyoqXG4gKiBBZGQgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhICsgYlxuICovXG5tYXQuYWRkID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgKyBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSAtIGJcbiAqL1xubWF0LnN1YiA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2IC0gYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBNdWx0aXBseSBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR8ZmFsc2V9IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgX3ZlY19kb3QobWF0LnJvdyhhLCBpKSwgbWF0LmNvbChiLCBqKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBNdWx0aXBseSBhIG1hdHJpeCBieSBhIHZlY3RvclxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7dmVjMnx2ZWMzfG51bWJlcltdfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWMyfHZlYzN8bnVtYmVyW118ZmFsc2V9IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggYW5kIHZlY3RvciBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsdiA9IChhLCBiKSA9PiB7XG4gIGxldCBuLCBiYiwgcnQ7XG4gIGlmIChfdmVjX2lzX3ZlYzMoYikpIHtcbiAgICBiYiA9IHZlYzMuY29tcG9uZW50cyhiKTtcbiAgICBuID0gMztcbiAgICBydCA9IHZlYzMuZnJvbUNvbXBvbmVudHM7XG4gIH0gZWxzZSBpZiAoX3ZlY19pc192ZWMyKGIpKSB7XG4gICAgYmIgPSB2ZWMyLmNvbXBvbmVudHMoYik7XG4gICAgbiA9IDI7XG4gICAgcnQgPSB2ZWMyLmZyb21Db21wb25lbnRzO1xuICB9IGVsc2Uge1xuICAgIGJiID0gYjtcbiAgICBuID0gYi5sZW5ndGggPz8gMDtcbiAgICBydCA9IHYgPT4gdjtcbiAgfVxuICBpZiAoYS5uICE9PSBuKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChfdmVjX2RvdChtYXQucm93KGEsIGkpLCBiYikpO1xuICB9XG4gIHJldHVybiBydChyZXN1bHQpO1xufVxuXG4vKipcbiAqIFNjYWxlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcbiAqL1xubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XG5cbi8qKlxuICogVHJhbnNwb3NlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XG4gKi9cbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCBfdmVjX3RpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBlbnRyaWVzID0gW107XG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcmV0dXJuIHtudW1iZXJ8ZmFsc2V9IHxhfCBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0LmRldCA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChhLm0gPT09IDEpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xuICB9XG4gIGlmIChhLm0gPT09IDIpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xuICB9XG4gIGxldCB0b3RhbCA9IDAsIHNpZ24gPSAxO1xuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgIHRvdGFsICs9IHNpZ24gKiBhLmVudHJpZXNbaiAtIDFdICogbWF0LmRldChtYXQubWlub3IoYSwgMSwgaikpO1xuICAgIHNpZ24gKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHttYXR8ZmFsc2V9IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8ZmFsc2V9IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxuICovXG5tYXQuaW52ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xuXG4vKipcbiAqIENvcHkgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcbiAqL1xubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxuJykgPT4gX3ZlY19jaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjMiwgdmVjMywgbWF0LCBpc1ZlYzIsIGlzVmVjMywgaXNNYXQgfTtcbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgU2NlbmVJbWFnZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNvcHlTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvY29weS5mcmFnLmdsc2wnKTtcbmltcG9ydCBxdWFkU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3F1YWQudmVydC5nbHNsJyk7XG5cbmV4cG9ydCB0eXBlIEdsUHJvZ3JhbSA9IHtcbiAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xuICB1bmlmb3JtczogUmVjb3JkPHN0cmluZywgV2ViR0xVbmlmb3JtTG9jYXRpb24+O1xufTtcblxuZXhwb3J0IHR5cGUgR2xSZW5kZXJUYXJnZXQgPSB7XG4gIHRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgZnJhbWVidWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XG4gIHNpemU6IHZlYzI7XG59O1xuXG4vKipcbiAqIEEgV2ViR0wgY29udGV4dCB0aGF0IGNhbiBiZSBzaGFyZWQgYnkgYW55dGhpbmcgcmVuZGVyaW5nIHBhcnQgb2YgYSBzY2VuZVxuICpcbiAqIFRleHR1cmVzIGNhbid0IGJlIHNoYXJlZCBiZXR3ZWVuIGNvbnRleHRzLCBzbyBzaGFyaW5nIGEgY29udGV4dCBtZWFucyB0aGF0XG4gKiB0aGUgb3V0cHV0IG9mIG9uZSBwYXNzIGNhbiBiZSB1c2VkIGJ5IGFub3RoZXIgd2l0aG91dCBjb3B5aW5nIGl0IHRocm91Z2ggYVxuICogY2FudmFzLlxuICpcbiAqIEV2ZXJ5dGhpbmcgaW4gdGhlIGNvbnRleHQgaXMgbG9zdCB3aGVuIHRoZSBjb250ZXh0IGlzIGxvc3QsIHNvIGFueXRoaW5nIHVzaW5nXG4gKiB0aGlzIHNob3VsZCBjcmVhdGUgaXRzIHByb2dyYW1zIGFuZCB0ZXh0dXJlcyBpbiBhbiBgb25Jbml0aWFsaXNlKClgIGNhbGxiYWNrLlxuICogVGhlIG1ldGhvZHMgaGVyZSBzaG91bGQgb25seSBiZSB1c2VkIGZyb20gdGhhdCBjYWxsYmFjaywgb3Igd2hpbGUgYGF2YWlsYWJsZWBcbiAqIGlzIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEdsQ29udGV4dCB7XG4gIC8qKlxuICAgKiBUaGUgdGV4dHVyZSB1bml0IHVzZWQgZm9yIGltYWdlcyB0aGF0IGFyZSBvbmx5IG5lZWRlZCBmb3IgYSBzaW5nbGUgZHJhd1xuICAgKlxuICAgKiBXZWJHTCBndWFyYW50ZWVzIDggdGV4dHVyZSB1bml0cywgdGhpcyBpcyB0aGUgbGFzdCBvZiB0aGVtXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElNQUdFX1VOSVQgPSA3O1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IG9mIHRoZSBtb3N0IHJlY2VudCBwYXNzXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cbiAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGNvcHlQcm9ncmFtOiBHbFByb2dyYW07XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlQ2FsbGJhY2tzOiAoKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpID0+IHZvaWQpW10gPSBbXTtcblxuICAvKipcbiAgICogSW1hZ2VzIG9ubHkgbmVlZCB0byBiZSB1cGxvYWRlZCBvbmNlLCBidXQgY2FudmFzZXMgbWlnaHQgY2hhbmdlXG4gICAqL1xuICBwcml2YXRlIGltYWdlVGV4dHVyZXMgPSBuZXcgV2Vha01hcDxTY2VuZUltYWdlLCBXZWJHTFRleHR1cmU+KCk7XG4gIHByaXZhdGUgdXBsb2FkZWRDYW52YXNlcyA9IG5ldyBTZXQ8U2NlbmVJbWFnZT4oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0bG9zdCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsICgpID0+XG4gICAgICB0aGlzLmluaXRpYWxpc2UoKVxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgY29udGV4dCBjYW4gYmUgdXNlZFxuICAgKi9cbiAgcHVibGljIGdldCBhdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2wgIT09IG51bGwgJiYgIXRoaXMuZ2wuaXNDb250ZXh0TG9zdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gdGhhdCBzZXRzIHVwIHByb2dyYW1zIGFuZCB0ZXh0dXJlc1xuICAgKlxuICAgKiBUaGlzIGlzIGNhbGxlZCBzdHJhaWdodCBhd2F5IGlmIHRoZSBjb250ZXh0IGlzIHJlYWR5LCBhbmQgYWdhaW4gd2hlbmV2ZXJcbiAgICogdGhlIGNvbnRleHQgaXMgcmVzdG9yZWRcbiAgICovXG4gIHB1YmxpYyBvbkluaXRpYWxpc2UoY2FsbGJhY2s6IChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5pbml0aWFsaXNlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgaWYgKHRoaXMuZ2wpIHtcbiAgICAgIGNhbGxiYWNrKHRoaXMuZ2wpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmdsID0gbnVsbDtcblxuICAgIGNvbnN0IGdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCB7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG4gICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgZGVwdGg6IGZhbHNlLFxuICAgICAgc3RlbmNpbDogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKCFnbCkge1xuICAgICAgY29uc29sZS53YXJuKCdXZWJHTCBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nbCA9IGdsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29weVByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oY29weVNoYWRlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignV2ViR0wgaGFzIGJlZW4gZGlzYWJsZWQnLCBlKTtcbiAgICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaW1hZ2VUZXh0dXJlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgZ2wuY3JlYXRlQnVmZmVyKCkpO1xuICAgIGdsLmJ1ZmZlckRhdGEoXG4gICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxXSksXG4gICAgICBnbC5TVEFUSUNfRFJBV1xuICAgICk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigwLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0wsIGdsLk5PTkUpO1xuXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgPSAwO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZ2wpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcGlsZVNoYWRlcih0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpITtcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICAgIGlmIChcbiAgICAgICFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykgJiZcbiAgICAgICFnbC5pc0NvbnRleHRMb3N0KClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikgPz8gJ1VuYWJsZSB0byBjb21waWxlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBwcm9ncmFtIGZyb20gYSBmcmFnbWVudCBzaGFkZXIsIHRoaXMgd2lsbCB1c2UgdGhlIHF1YWQgdmVydGV4XG4gICAqIHNoYWRlciBzbyBpdCBjYW4gYmUgZHJhd24gd2l0aCBgZHJhd1F1YWQoKWBcbiAgICovXG4gIHB1YmxpYyBjcmVhdGVQcm9ncmFtKGZyYWdtZW50U291cmNlOiBzdHJpbmcpOiBHbFByb2dyYW0ge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKSE7XG5cbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdGhpcy5jb21waWxlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIsIHF1YWRTaGFkZXIpKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIoXG4gICAgICBwcm9ncmFtLFxuICAgICAgdGhpcy5jb21waWxlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTb3VyY2UpXG4gICAgKTtcbiAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgMCwgJ2FfY29ybmVyJyk7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICBpZiAoXG4gICAgICAhZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykgJiZcbiAgICAgICFnbC5pc0NvbnRleHRMb3N0KClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSA/PyAnVW5hYmxlIHRvIGxpbmsnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmlmb3JtczogR2xQcm9ncmFtWyd1bmlmb3JtcyddID0ge307XG4gICAgY29uc3QgY291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaSkhO1xuICAgICAgdW5pZm9ybXNbbmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkhO1xuICAgIH1cblxuICAgIHJldHVybiB7IHByb2dyYW0sIHVuaWZvcm1zIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGV4dHVyZSB0aGF0IGNhbiBiZSByZW5kZXJlZCBpbnRvLCB0aGlzIHdpbGwgbmVlZCB0byBiZSBnaXZlbiBhXG4gICAqIHNpemUgdXNpbmcgYHJlc2l6ZVRhcmdldCgpYFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlbmRlclRhcmdldCgpOiBHbFJlbmRlclRhcmdldCB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZXh0dXJlOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgZnJhbWVidWZmZXI6IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCkhLFxuICAgICAgc2l6ZTogdmVjMigpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIHRleHR1cmUgYW5kIHNldCBpdHMgZmlsdGVyaW5nXG4gICAqXG4gICAqIFRleHR1cmVzIGNhbiBvbmx5IHJlcGVhdCBpZiB0aGVpciBzaXplIGlzIGEgcG93ZXIgb2YgMlxuICAgKi9cbiAgcHVibGljIGJpbmRUZXh0dXJlKFxuICAgIHVuaXQ6IG51bWJlcixcbiAgICB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsXG4gICAgZmlsdGVyOiBudW1iZXIsXG4gICAgcmVwZWF0OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCB3cmFwID0gcmVwZWF0ID8gZ2wuUkVQRUFUIDogZ2wuQ0xBTVBfVE9fRURHRTtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZmlsdGVyKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCB3cmFwKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCB3cmFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiBhIHRleHR1cmUgd2l0aCBhbiBpbWFnZVxuICAgKi9cbiAgcHVibGljIHVwbG9hZChcbiAgICB1bml0OiBudW1iZXIsXG4gICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlLFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZpbHRlcjogbnVtYmVyLFxuICAgIHJlcGVhdDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKHVuaXQsIHRleHR1cmUsIGZpbHRlciwgcmVwZWF0KTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiBhIHRleHR1cmUgd2l0aCBSR0JBIHBpeGVsIGRhdGFcbiAgICovXG4gIHB1YmxpYyB1cGxvYWREYXRhKFxuICAgIHVuaXQ6IG51bWJlcixcbiAgICB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsXG4gICAgc2l6ZTogdmVjMixcbiAgICBkYXRhOiBVaW50OEFycmF5LFxuICAgIGZpbHRlcjogbnVtYmVyLFxuICAgIHJlcGVhdDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKHVuaXQsIHRleHR1cmUsIGZpbHRlciwgcmVwZWF0KTtcbiAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIDAsXG4gICAgICBnbC5SR0JBLFxuICAgICAgc2l6ZS54LFxuICAgICAgc2l6ZS55LFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgZGF0YVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhbiBpbWFnZSB0byBgSU1BR0VfVU5JVGAsIHVwbG9hZGluZyBpdCBpZiB3ZSBoYXZlbid0IHNlZW4gaXQgYmVmb3JlXG4gICAqL1xuICBwdWJsaWMgYmluZEltYWdlKGltYWdlOiBTY2VuZUltYWdlLCBmaWx0ZXI6IG51bWJlcikge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICBsZXQgdGV4dHVyZSA9IHRoaXMuaW1hZ2VUZXh0dXJlcy5nZXQoaW1hZ2UpO1xuICAgIGNvbnN0IGlzTmV3ID0gdGV4dHVyZSA9PT0gdW5kZWZpbmVkO1xuICAgIGlmICghdGV4dHVyZSkge1xuICAgICAgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgICB0aGlzLmltYWdlVGV4dHVyZXMuc2V0KGltYWdlLCB0ZXh0dXJlKTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKEdsQ29udGV4dC5JTUFHRV9VTklULCB0ZXh0dXJlLCBmaWx0ZXIpO1xuXG4gICAgY29uc3QgaXNTdGFsZSA9XG4gICAgICBpbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50ICYmICF0aGlzLnVwbG9hZGVkQ2FudmFzZXMuaGFzKGltYWdlKTtcbiAgICBpZiAoaXNOZXcgfHwgaXNTdGFsZSkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgaW1hZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnVwbG9hZGVkQ2FudmFzZXMuYWRkKGltYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FudmFzZXMgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZXkgd2VyZSBsYXN0IHVzZWQsIHNvIGBiaW5kSW1hZ2UoKWBcbiAgICogc2hvdWxkIHVwbG9hZCB0aGVtIGFnYWluXG4gICAqL1xuICBwdWJsaWMgaW52YWxpZGF0ZUNhbnZhc2VzKCkge1xuICAgIHRoaXMudXBsb2FkZWRDYW52YXNlcy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc2l6ZSBvZiBhIHRleHR1cmUgdGhhdCB3ZSdyZSByZW5kZXJpbmcgaW50b1xuICAgKi9cbiAgcHVibGljIHJlc2l6ZVRhcmdldCh0YXJnZXQ6IEdsUmVuZGVyVGFyZ2V0LCBzaXplOiB2ZWMyKSB7XG4gICAgaWYgKHRhcmdldC5zaXplLnggPT09IHNpemUueCAmJiB0YXJnZXQuc2l6ZS55ID09PSBzaXplLnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgdGFyZ2V0LnNpemUgPSB2ZWMyLmNweShzaXplKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmUoR2xDb250ZXh0LklNQUdFX1VOSVQsIHRhcmdldC50ZXh0dXJlLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIDAsXG4gICAgICBnbC5SR0JBLFxuICAgICAgc2l6ZS54LFxuICAgICAgc2l6ZS55LFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgbnVsbFxuICAgICk7XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoXG4gICAgICBnbC5GUkFNRUJVRkZFUixcbiAgICAgIGdsLkNPTE9SX0FUVEFDSE1FTlQwLFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIHRhcmdldC50ZXh0dXJlLFxuICAgICAgMFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBvdXRwdXQgbWF0Y2hlcyB0aGUgc2NyZWVuIHNpemVcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID09PSBzY3JlZW4ueCAmJiB0aGlzLmNhbnZhcy5oZWlnaHQgPT09IHNjcmVlbi55KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBzY3JlZW4ueDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBzY3JlZW4ueTtcbiAgICB0aGlzLmdsIS52aWV3cG9ydCgwLCAwLCBzY3JlZW4ueCwgc2NyZWVuLnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBxdWFkIGNvdmVyaW5nIHBhcnQgb2YgdGhlIHNjcmVlblxuICAgKi9cbiAgcHVibGljIGRyYXdRdWFkKFxuICAgIHsgdW5pZm9ybXMgfTogR2xQcm9ncmFtLFxuICAgIHNjcmVlblJlY3RhbmdsZTogbnVtYmVyW10sXG4gICAgd29ybGRSZWN0YW5nbGU6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdLFxuICAgIG1hc2tSZWN0YW5nbGU6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdXG4gICkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICBnbC51bmlmb3JtNGZ2KHVuaWZvcm1zLnVfc2NyZWVuUmVjdGFuZ2xlLCBzY3JlZW5SZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV93b3JsZFJlY3RhbmdsZSwgd29ybGRSZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV9tYXNrUmVjdGFuZ2xlLCBtYXNrUmVjdGFuZ2xlKTtcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgdGV4dHVyZSBvdmVyIHRoZSB3aG9sZSBzY3JlZW4sIHJlcGxhY2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZVxuICAgKi9cbiAgcHVibGljIGRyYXdUZXh0dXJlKHRleHR1cmU6IFdlYkdMVGV4dHVyZSwgc2NyZWVuOiB2ZWMyKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb3B5UHJvZ3JhbTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZihwcm9ncmFtLnVuaWZvcm1zLnVfc2NyZWVuLCBzY3JlZW4ueCwgc2NyZWVuLnkpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfZmxpcFksIDEpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZShHbENvbnRleHQuSU1BR0VfVU5JVCwgdGV4dHVyZSwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudV9pbWFnZSwgR2xDb250ZXh0LklNQUdFX1VOSVQpO1xuXG4gICAgdGhpcy5kcmF3UXVhZChwcm9ncmFtLCBbMCwgMCwgc2NyZWVuLngsIHNjcmVlbi55XSk7XG5cbiAgICAvLyBBIHRleHR1cmUgY2FuJ3Qgc3RheSBib3VuZCB3aGlsZSB3ZSdyZSByZW5kZXJpbmcgaW50byBpdFxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHbENvbnRleHQgfSBmcm9tICcuL0dsQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7IEdsUHJvZ3JhbSwgR2xSZW5kZXJUYXJnZXQgfSBmcm9tICcuL0dsQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7XG4gIENvbG91cixcbiAgRnJhbWUsXG4gIEludGVydmFsMWQsXG4gIEludGVydmFsMmQsXG4gIFJlY3RhbmdsZSxcbiAgU2NlbmVDYW1lcmEsXG4gIFNjZW5lSW1hZ2UsXG59IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IHtcbiAgYm91bmRpbmdSZWN0YW5nbGUsXG4gIGNvbG91clRvU3RyaW5nLFxuICBkcmF3SW1hZ2VJblJlY3RhbmdsZSxcbiAgaW50ZXJ2YWxUb1JlY3RhbmdsZSxcbiAgbGVycENvbG91cixcbiAgbWF4VmVjLFxuICBtaW5WZWMsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxuICBzcHJpdGVCb3VuZHMsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcbiIsImltcG9ydCB0eXBlIHsgU3ByaXRlIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2Uvc3ByaXRlJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IENvbG91ciwgSW50ZXJ2YWwyZCwgUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5pbXVtIG9mIGEgc2V0IG9mIHZlY3RvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pblZlYyguLi52ZWN0b3JzOiB2ZWMyW10pOiB2ZWMyIHtcbiAgcmV0dXJuIHZlY3RvcnMucmVkdWNlKFxuICAgIChtaW4sIHYpID0+IHZlYzIoTWF0aC5taW4obWluLngsIHYueCksIE1hdGgubWluKG1pbi55LCB2LnkpKSxcbiAgICB2ZWMyKEluZmluaXR5LCBJbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1heGltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4VmVjKC4uLnZlY3RvcnM6IHZlYzJbXSk6IHZlYzIge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1heCwgdikgPT4gdmVjMihNYXRoLm1heChtYXgueCwgdi54KSwgTWF0aC5tYXgobWF4LnksIHYueSkpLFxuICAgIHZlYzIoLUluZmluaXR5LCAtSW5maW5pdHkpXG4gICk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzbWFsbGVzdCByZWN0YW5nbGUgdGhhdCBjb250YWlucyAyIHJlY3RhbmdsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kaW5nUmVjdGFuZ2xlKGE6IFJlY3RhbmdsZSwgYjogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgY29uc3QgcG9zaXRpb24gPSBtaW5WZWMoYS5wb3NpdGlvbiwgYi5wb3NpdGlvbik7XG4gIGNvbnN0IGJvdHRvbVJpZ2h0ID0gbWF4VmVjKFxuICAgIHZlYzIuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSksXG4gICAgdmVjMi5hZGQoYi5wb3NpdGlvbiwgYi5zaXplKVxuICApO1xuXG4gIHJldHVybiB7IHBvc2l0aW9uLCBzaXplOiB2ZWMyLnN1Yihib3R0b21SaWdodCwgcG9zaXRpb24pIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIGNvbG91ciBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvdXJUb1N0cmluZyhjb2xvdXI6IENvbG91cik6IHN0cmluZyB7XG4gIHJldHVybiBgcmdiYSgke2NvbG91ci5yfSwgJHtjb2xvdXIuZ30sICR7Y29sb3VyLmJ9LCAke2NvbG91ci5hfSlgO1xufVxuXG4vKipcbiAqIExpbmVhciBpbnRlcnBvbGF0ZSBiZXR3ZWVuIDIgY29sb3Vyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycENvbG91cihhOiBDb2xvdXIsIGI6IENvbG91ciwgaTogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgcjogbGVycChhLnIsIGIuciwgaSksXG4gICAgZzogbGVycChhLmcsIGIuZywgaSksXG4gICAgYjogbGVycChhLmIsIGIuYiwgaSksXG4gICAgYTogbGVycChhLmEsIGIuYSwgaSksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIDJkIGludGVydmFsIHRvIGEgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbFRvUmVjdGFuZ2xlKGludGVydmFsOiBJbnRlcnZhbDJkKTogUmVjdGFuZ2xlIHtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogdmVjMihpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC50b3ApLFxuICAgIHNpemU6IHZlYzIoaW50ZXJ2YWwucmlnaHQgLSBpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC5ib3R0b20gLSBpbnRlcnZhbC50b3ApLFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByZWN0YW5nbGUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IEludGVydmFsMmQge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgIHJpZ2h0OiByZWN0YW5nbGUucG9zaXRpb24ueCArIHJlY3RhbmdsZS5zaXplLngsXG4gICAgdG9wOiByZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICBib3R0b206IHJlY3RhbmdsZS5wb3NpdGlvbi55ICsgcmVjdGFuZ2xlLnNpemUueSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiAyIEFBQkJzIGludGVyc2VjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlc0ludGVyc2VjdChhOiBSZWN0YW5nbGUsIGI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xuICBjb25zdCB0bDEgPSBhLnBvc2l0aW9uO1xuICBjb25zdCBicjEgPSB2ZWMyLmFkZChhLnBvc2l0aW9uLCBhLnNpemUpO1xuICBjb25zdCB0bDIgPSBiLnBvc2l0aW9uO1xuICBjb25zdCBicjIgPSB2ZWMyLmFkZChiLnBvc2l0aW9uLCBiLnNpemUpO1xuXG4gIHJldHVybiB0bDEueCA8IGJyMi54ICYmIGJyMS54ID4gdGwyLnggJiYgdGwxLnkgPCBicjIueSAmJiBicjEueSA+IHRsMi55O1xufVxuXG4vKipcbiAqIEdldCBhbiBhcnJheSBvZiB2ZXJ0aWNlcyBmb3IgYSByZWN0YW5nbGUgaW4gQ1cgd2luZGluZyBvcmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVmVydGljZXMocmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB2ZWMyW10ge1xuICBjb25zdCB0bCA9IHJlY3RhbmdsZS5wb3NpdGlvbjtcbiAgY29uc3QgYnIgPSB2ZWMyLmFkZChyZWN0YW5nbGUucG9zaXRpb24sIHJlY3RhbmdsZS5zaXplKTtcblxuICByZXR1cm4gW3JlY3RhbmdsZS5wb3NpdGlvbiwgdmVjMihici54LCB0bC55KSwgYnIsIHZlYzIodGwueCwgYnIueSldO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYXJlYSBjb3ZlcmVkIGJ5IGEgc3ByaXRlJ3MgY3VycmVudCBmcmFtZSwgdGhpcyBtYXRjaGVzIHdoZXJlXG4gKiBgU3ByaXRlLmRyYXcoKWAgcHV0cyB0aGUgaW1hZ2UgKGlmIHRoZSBzcHJpdGUgaXNuJ3Qgcm90YXRlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwcml0ZUJvdW5kcyhzcHJpdGU6IFNwcml0ZSk6IFJlY3RhbmdsZSB7XG4gIGNvbnN0IHsgaW1hZ2UgfSA9IHNwcml0ZTtcbiAgY29uc3Qgc2l6ZSA9IGltYWdlID8gdmVjMihpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KSA6IHNwcml0ZS5zaXplO1xuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHZlYzIuc3ViKHNwcml0ZS5wb3NpdGlvbiwgdmVjMi5tdWwoc3ByaXRlLm9yaWdpbiwgc3ByaXRlLnNjYWxlKSksXG4gICAgc2l6ZTogdmVjMi5tdWwoc2l6ZSwgc3ByaXRlLnNjYWxlKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuIGltYWdlIGludG8gYSByZWN0YW5nbGUsIGVpdGhlciByZXBlYXRpbmcgaXQgb3Igc3RyZXRjaGluZyBpdCB0byBmaXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdJbWFnZUluUmVjdGFuZ2xlKFxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIGltYWdlOiBTY2VuZUltYWdlLFxuICByZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgcmVwZWF0OiBib29sZWFuXG4pIHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gcmVjdGFuZ2xlO1xuXG4gIGlmICghcmVwZWF0KSB7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCAncmVwZWF0Jyk7XG4gIGlmIChwYXR0ZXJuKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxufVxuIiwiZXhwb3J0IHR5cGUgeyBGcmFtZSB9IGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpZ2h0aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vcmVmbGVjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi93YXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3dvcmxkJztcbiIsImltcG9ydCB0eXBlIHsgU3ByaXRlIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2Uvc3ByaXRlJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlLCBzcHJpdGVCb3VuZHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgU3ByaXRlQ2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBXYWxsUmVjZWl2ZXIsIFdhbGxSZWNlaXZlck9wdGlvbnMgfSBmcm9tICcuL1N1cmZhY2UnO1xuXG50eXBlIEFjdG9yU2hhZG93T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIEhlaWdodCBvZiB0aGUgYXJlYSBhdCB0aGUgYm90dG9tIG9mIHRoZSBhY3RvciB0aGF0IGNhc3RzIGEgc2hhZG93LFxuICAgKiBkZWZhdWx0cyB0byBhIHRoaXJkIG9mIHRoZSBhY3RvcidzIGhlaWdodFxuICAgKi9cbiAgZm9vdHByaW50SGVpZ2h0PzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0b3JTaGFkb3cgPVxuICB8ICdub25lJ1xuICB8ICdzcHJpdGUnXG4gIHwgJ2NpcmNsZSdcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnbm9uZScgfSlcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnc3ByaXRlJyB9ICYgUGFydGlhbDxcbiAgICAgICAgT21pdDxTcHJpdGVDYXN0ZXJPcHRpb25zLCAncG9zaXRpb24nIHwgJ3NpemUnPlxuICAgICAgPilcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnY2lyY2xlJyB9ICYgUGFydGlhbDxcbiAgICAgICAgT21pdDxDaXJjbGVDYXN0ZXJPcHRpb25zLCAncG9zaXRpb24nIHwgJ3NpemUnPlxuICAgICAgPik7XG5cbmV4cG9ydCB0eXBlIEFjdG9yT3B0aW9ucyA9IE9taXQ8V2FsbFJlY2VpdmVyT3B0aW9ucywgJ3JlY2VpdmVMaWdodCc+ICYge1xuICAvKipcbiAgICogVGhlIHNoYWRvdyBjYXN0IGJ5IHRoaXMgYWN0b3IsIHRoZSBkZWZhdWx0IGlzIGEgc3RyZXRjaGVkIHNpbGhvdWV0dGUgb2ZcbiAgICogdGhlIGFjdG9yJ3MgaW1hZ2VcbiAgICovXG4gIHNoYWRvdz86IEFjdG9yU2hhZG93O1xufTtcblxuZXhwb3J0IHR5cGUgU3ByaXRlQWN0b3JPcHRpb25zID0gT21pdDxcbiAgQWN0b3JPcHRpb25zLFxuICAncG9zaXRpb24nIHwgJ3NpemUnIHwgJ2ltYWdlJyB8ICdtYXNrJyB8ICdub3JtYWxNYXAnIHwgJ3NwZWN1bGFyTWFwJ1xuPiAmIHtcbiAgLyoqXG4gICAqIFRoZSBzcHJpdGUgdGhhdCB0aGlzIGFjdG9yIGZvbGxvd3NcbiAgICpcbiAgICogVGhlIGFjdG9yJ3MgcG9zaXRpb24sIHNpemUsIGFuZCBpbWFnZXMgY29tZSBmcm9tIHRoZSBzcHJpdGUgZXZlcnkgdGltZSB0aGVcbiAgICogc2NlbmUgaXMgcmVuZGVyZWQuIE5vcm1hbCBtYXBzIGFuZCBzcGVjdWxhciBtYXBzIGNvbWUgZnJvbSB0aGUgc3ByaXRlJ3NcbiAgICogYG5vcm1hbGAgYW5kIGBzcGVjdWxhcmAgbGF5ZXJzXG4gICAqL1xuICBzcHJpdGU6IFNwcml0ZTtcbn07XG5cbi8qKlxuICogQSBtb3Zpbmcgb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIGNhc3RzIGEgc2hhZG93XG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RvciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRk9PVFBSSU5UX1NDQUxFID0gMSAvIDM7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0hBRE9XX0xFTkdUSF9TQ0FMRSA9IDEuMzM7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9MQVlFUiA9ICdub3JtYWwnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTUEVDVUxBUl9MQVlFUiA9ICdzcGVjdWxhcic7XG5cbiAgcHVibGljIHJlYWRvbmx5IHN1cmZhY2U6IFdhbGxSZWNlaXZlcjtcbiAgcHVibGljIHJlYWRvbmx5IGNhc3RlcjogU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSBzcHJpdGU6IFNwcml0ZSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW07XG4gIHByaXZhdGUgZm9vdHByaW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYXJlYSBjb3ZlcmVkIGJ5IGEgc3ByaXRlJ3MgY3VycmVudCBmcmFtZSBhbmQgdGhlIGltYWdlcyBmb3IgaXRcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHNwcml0ZUZyYW1lKHNwcml0ZTogU3ByaXRlKSB7XG4gICAgY29uc3QgeyBpbWFnZSB9ID0gc3ByaXRlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNwcml0ZUJvdW5kcyhzcHJpdGUpLFxuICAgICAgaW1hZ2UsXG4gICAgICBub3JtYWxNYXA6IGltYWdlICYmIHNwcml0ZS5nZXRJbWFnZSh1bmRlZmluZWQsIEFjdG9yLk5PUk1BTF9MQVlFUiksXG4gICAgICBzcGVjdWxhck1hcDogaW1hZ2UgJiYgc3ByaXRlLmdldEltYWdlKHVuZGVmaW5lZCwgQWN0b3IuU1BFQ1VMQVJfTEFZRVIpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBzcHJpdGUgYWN0b3Igb3B0aW9ucyBpbnRvIHRoZSBlcXVpdmFsZW50IGFjdG9yIG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlc29sdmVPcHRpb25zKFxuICAgIG9wdGlvbnM6IEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9uc1xuICApOiBBY3Rvck9wdGlvbnMge1xuICAgIGlmICghKCdzcHJpdGUnIGluIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjb25zdCB7IHNwcml0ZSwgLi4uYWN0b3IgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWN0b3IsXG4gICAgICAuLi5BY3Rvci5zcHJpdGVGcmFtZShzcHJpdGUpLFxuICAgICAgY3VzdG9tRHJhdzoge1xuICAgICAgICBpbWFnZTogY29udGV4dCA9PiBzcHJpdGUuZHJhdyhjb250ZXh0KSxcbiAgICAgICAgLi4uYWN0b3IuY3VzdG9tRHJhdyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sXG4gICAgYWN0b3JPcHRpb25zOiBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnNcbiAgKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IEFjdG9yLnJlc29sdmVPcHRpb25zKGFjdG9yT3B0aW9ucyk7XG4gICAgY29uc3QgeyBzaGFkb3cgPSAnc3ByaXRlJywgLi4uc3VyZmFjZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7IHR5cGUsIGZvb3RwcmludEhlaWdodCwgLi4uY2FzdGVyT3B0aW9ucyB9ID0gKFxuICAgICAgdHlwZW9mIHNoYWRvdyA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IHNoYWRvdyB9IDogc2hhZG93XG4gICAgKSBhcyBFeGNsdWRlPEFjdG9yU2hhZG93LCBzdHJpbmc+O1xuXG4gICAgdGhpcy5saWdodGluZyA9IGxpZ2h0aW5nO1xuICAgIHRoaXMuc3ByaXRlID0gJ3Nwcml0ZScgaW4gYWN0b3JPcHRpb25zID8gYWN0b3JPcHRpb25zLnNwcml0ZSA6IG51bGw7XG4gICAgdGhpcy5mb290cHJpbnRIZWlnaHQgPVxuICAgICAgZm9vdHByaW50SGVpZ2h0ID8/IG9wdGlvbnMuc2l6ZS55ICogQWN0b3IuREVGQVVMVF9GT09UUFJJTlRfU0NBTEU7XG5cbiAgICB0aGlzLnN1cmZhY2UgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgbWVyZ2VhYmxlOiBmYWxzZSxcbiAgICAgIHByb2plY3RTaGFkb3dzOiBmYWxzZSxcbiAgICAgIC4uLnN1cmZhY2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290cHJpbnQgPSB0aGlzLmZvb3RwcmludChvcHRpb25zLnBvc2l0aW9uLCBvcHRpb25zLnNpemUpO1xuICAgIGlmICh0eXBlID09PSAnc3ByaXRlJykge1xuICAgICAgY29uc3Qgc2hhZG93TGVuZ3RoID0gb3B0aW9ucy5zaXplLnkgKiBBY3Rvci5ERUZBVUxUX1NIQURPV19MRU5HVEhfU0NBTEU7XG5cbiAgICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkU3ByaXRlQ2FzdGVyKHtcbiAgICAgICAgaW1hZ2U6IG9wdGlvbnMuaW1hZ2UsXG4gICAgICAgIG1pblNoYWRvd0xlbmd0aDogc2hhZG93TGVuZ3RoLFxuICAgICAgICBtYXhTaGFkb3dMZW5ndGg6IHNoYWRvd0xlbmd0aCxcbiAgICAgICAgLi4uY2FzdGVyT3B0aW9ucyxcbiAgICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLmNhc3RlciA9IGxpZ2h0aW5nLmFkZENpcmNsZUNhc3Rlcih7XG4gICAgICAgIC4uLmNhc3Rlck9wdGlvbnMsXG4gICAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExvb2sgZm9yIHNoYWRvd3MgZnJvbSBmYXIgZW5vdWdoIGF3YXkgdG8gYXZvaWQgb3VyIG93biBzaGFkb3dcbiAgICBpZiAodGhpcy5jYXN0ZXIgJiYgb3B0aW9ucy5zaGFkb3dCaWFzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3VyZmFjZS5zaGFkb3dCaWFzID0gdGhpcy5jYXN0ZXJCaWFzKHRoaXMuY2FzdGVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkaXN0YW5jZSB0aGF0IGEgY2FzdGVyJ3Mgc2hhZG93IHJlYWNoZXMgYmFjayB0b3dhcmRzIHRoZSBsaWdodFxuICAgKi9cbiAgcHJpdmF0ZSBjYXN0ZXJCaWFzKGNhc3RlcjogU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyKTogbnVtYmVyIHtcbiAgICBpZiAoY2FzdGVyIGluc3RhbmNlb2YgU3ByaXRlQ2FzdGVyKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBjYXN0ZXIubWF4U2hhZG93TGVuZ3RoID8/IGNhc3Rlci5taW5TaGFkb3dMZW5ndGg7XG5cbiAgICAgIHJldHVybiBsZW5ndGggKiAoMSAtIGNhc3Rlci5vZmZzZXQueSkgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heChjYXN0ZXIuc2l6ZS54LCBjYXN0ZXIuc2l6ZS55KSAvIDIgKyAxO1xuICB9XG5cbiAgcHJpdmF0ZSBmb290cHJpbnQocG9zaXRpb246IHZlYzIsIHNpemU6IHZlYzIpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgc2l6ZS55IC0gdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgICAgc2l6ZTogdmVjMihzaXplLngsIHRoaXMuZm9vdHByaW50SGVpZ2h0KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGN1cnJlbnQgcG9zaXRpb24sIHNpemUsIGFuZCBpbWFnZXMgZnJvbSB0aGlzIGFjdG9yJ3Mgc3ByaXRlLCB0aGlzXG4gICAqIGlzIGNhbGxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHNjZW5lIGlzIHJlbmRlcmVkXG4gICAqL1xuICBwdWJsaWMgc3luYygpIHtcbiAgICBpZiAoIXRoaXMuc3ByaXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBBY3Rvci5zcHJpdGVGcmFtZSh0aGlzLnNwcml0ZSk7XG5cbiAgICB0aGlzLnN1cmZhY2Uuc2V0KGZyYW1lKTtcbiAgICB0aGlzLmNhc3Rlcj8uc2V0KHRoaXMuZm9vdHByaW50KGZyYW1lLnBvc2l0aW9uLCBmcmFtZS5zaXplKSk7XG5cbiAgICBpZiAodGhpcy5jYXN0ZXIgaW5zdGFuY2VvZiBTcHJpdGVDYXN0ZXIpIHtcbiAgICAgIHRoaXMuY2FzdGVyLmltYWdlID0gZnJhbWUuaW1hZ2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBhY3RvciB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKlxuICAgKiBJZiB0aGlzIGFjdG9yIGhhcyBhIHNwcml0ZSB0aGVuIHRoaXMgd2lsbCBzZXQgdGhlIHNwcml0ZSdzIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICB0aGlzLnNwcml0ZS5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc3luYygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3VyZmFjZS5tb3ZlVG8ocG9zaXRpb24pO1xuICAgIHRoaXMuY2FzdGVyPy5tb3ZlVG8odGhpcy5mb290cHJpbnQocG9zaXRpb24sIHRoaXMuc3VyZmFjZS5zaXplKS5wb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgYWN0b3IgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMuc3VyZmFjZS5yZW1vdmUoKTtcbiAgICB0aGlzLmNhc3Rlcj8ucmVtb3ZlKCk7XG4gICAgdGhpcy5saWdodGluZy5yZW1vdmUodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgYm91bmRpbmdSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7IHNpbGhvdWV0dGUgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbkNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgc2hhZG93cyBpbmNsdWRlIHRoZSByZWN0YW5ndWxhciByZWdpb24gb2YgdGhpcyBjYXN0ZXI/XG4gICAqL1xuICBpbmNsdWRlUmVnaW9uU2hhZG93PzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBwb2x5Z29uYWwgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgUmVnaW9uQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8UmVnaW9uQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgaW5jbHVkZVJlZ2lvblNoYWRvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFJlZ2lvbkNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgY2FuIGJlIG1lcmdlZCB3aXRoIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgY2FuTWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lcmdlYWJsZSAmJlxuICAgICAgb3RoZXIubWVyZ2VhYmxlICYmXG4gICAgICB0aGlzLmluY2x1ZGVSZWdpb25TaGFkb3cgPT09IG90aGVyLmluY2x1ZGVSZWdpb25TaGFkb3dcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBjYXN0ZXIgdGhhdCBjb3ZlcnMgdGhpcyBjYXN0ZXIgYW5kIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgbWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IFJlZ2lvbkNhc3RlciB7XG4gICAgcmV0dXJuIG5ldyBSZWdpb25DYXN0ZXIodGhpcy5saWdodGluZywge1xuICAgICAgLi4uKHRoaXMgYXMgUmVnaW9uQ2FzdGVyKSxcbiAgICAgIC4uLmJvdW5kaW5nUmVjdGFuZ2xlKHRoaXMsIG90aGVyKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTcHJpdGVDYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogVGhlIGltYWdlIHVzZWQgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpdCBzaG91bGQgYmUgYmxhY2sgd2l0aCBhbiBhbHBoYVxuICAgKiBjaGFubmVsXG4gICAqL1xuICBzaGFkb3c/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogSWYgYHNoYWRvd2AgaXNuJ3Qgc2V0LCB3ZSdsbCB1c2UgdGhlIHNpbGhvdWV0dGUgb2YgdGhpcyBpbWFnZSBpbnN0ZWFkXG4gICAqL1xuICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgc2hhZG93IGJlZ2lucywgYXMgYSBmcmFjdGlvbiBvZiB0aGUgc2l6ZSBvZiB0aGlzIGNhc3Rlciwgd2hlcmVcbiAgICogKDAsIDApIGlzIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kICgxLCAxKSBpcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lclxuICAgKi9cbiAgYW5jaG9yPzogdmVjMjtcblxuICAvKipcbiAgICogT2Zmc2V0IHRoZSBzaGFkb3cgZnJvbSB0aGUgYW5jaG9yLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBzaGFkb3cgc2l6ZVxuICAgKi9cbiAgb2Zmc2V0PzogdmVjMjtcblxuICAvKipcbiAgICogU2hhZG93IGxlbmd0aCB3aGVuIHRoZSBsaWdodCBpcyBhdCB0aGUgY2VudGVyIG9mIHRoaXMgY2FzdGVyXG4gICAqL1xuICBtaW5TaGFkb3dMZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNoYWRvdyBsZW5ndGggd2hlbiB0aGlzIGNhc3RlciBpcyBhdCB0aGUgZWRnZSBvZiB0aGUgbGlnaHQncyByYWRpdXMsIG9yXG4gICAqIG51bGwgdG8gdXNlIHRoZSBsaWdodCdzIHJhZGl1c1xuICAgKi9cbiAgbWF4U2hhZG93TGVuZ3RoPzogbnVtYmVyIHwgbnVsbDtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhIHNoYWRvdyBieSByb3RhdGluZyBhbmQgc3RyZXRjaGluZyBhbiBpbWFnZVxuICovXG5leHBvcnQgY2xhc3MgU3ByaXRlQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8U3ByaXRlQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgc2hhZG93OiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBpbWFnZTogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgYW5jaG9yOiB2ZWMyID0gdmVjMigwLjUsIDAuOSk7XG4gIHB1YmxpYyBvZmZzZXQ6IHZlYzIgPSB2ZWMyKDAuNSwgMC45KTtcbiAgcHVibGljIG1pblNoYWRvd0xlbmd0aDogbnVtYmVyID0gNjQ7XG4gIHB1YmxpYyBtYXhTaGFkb3dMZW5ndGg6IG51bWJlciB8IG51bGwgPSA2NDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBTcHJpdGVDYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW1hZ2UgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpZiBpdCBoYXMgb25lXG4gICAqL1xuICBwdWJsaWMgZ2V0U2hhZG93KCk6IFNjZW5lSW1hZ2UgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3cgPz8gKHRoaXMuaW1hZ2UgJiYgc2lsaG91ZXR0ZSh0aGlzLmltYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2lyY2xlQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBzaGFkb3cgaXMgY2VudGVyZWQsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNpemUgb2YgdGhpcyBjYXN0ZXIsXG4gICAqIHdoZXJlICgwLCAwKSBpcyB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCAoMSwgMSkgaXMgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXJcbiAgICovXG4gIGFuY2hvcj86IHZlYzI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGZyb20gdGhlIGFuY2hvciB0byB0aGUgc2hhZG93IHdoZW4gdGhlIGxpZ2h0IGlzIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogdGhpcyBjYXN0ZXJcbiAgICovXG4gIG1pblNoYWRvd0Rpc3RhbmNlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSBmcm9tIHRoZSBhbmNob3IgdG8gdGhlIHNoYWRvdyB3aGVuIHRoaXMgY2FzdGVyIGlzIGF0IHRoZSBlZGdlIG9mXG4gICAqIHRoZSBsaWdodCdzIHJhZGl1cywgb3IgbnVsbCB0byB1c2UgdGhlIGxpZ2h0J3MgcmFkaXVzXG4gICAqL1xuICBtYXhTaGFkb3dEaXN0YW5jZT86IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wYWNpdHkgb2YgdGhlIHNoYWRvd1xuICAgKi9cbiAgYWxwaGE/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYW4gZWxsaXB0aWNhbCBzaGFkb3dcbiAqL1xuZXhwb3J0IGNsYXNzIENpcmNsZUNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PENpcmNsZUNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIGFuY2hvcjogdmVjMiA9IHZlYzIoMC41LCAwLjkpO1xuICBwdWJsaWMgbWluU2hhZG93RGlzdGFuY2U6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBtYXhTaGFkb3dEaXN0YW5jZTogbnVtYmVyIHwgbnVsbCA9IDIwO1xuICBwdWJsaWMgYWxwaGE6IG51bWJlciA9IDE7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogQ2lyY2xlQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTaGFkb3dDYXN0ZXIgPSBSZWdpb25DYXN0ZXIgfCBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXI7XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBhdCwgc21vb3Roc3RlcCwgdW5sZXJwIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIGNvbG91clRvU3RyaW5nLFxuICBSZWN0YW5nbGUsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IENpcmNsZUNhc3RlciwgUmVnaW9uQ2FzdGVyLCBTcHJpdGVDYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBMaW5lLCBQb2x5Z29uVmVydGljZXMsIFNlY3RvcjJkIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBsaW5lSXNGYWNpbmcsIHBvbHlnb24sIHNlY3RvcjJkIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5jb25zdCBIQUxGX1BJID0gTWF0aC5QSSAvIDI7XG5cbmV4cG9ydCB0eXBlIExpZ2h0T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdvcmxkIHBvc2l0aW9uIG9mIHRoaXMgbGlnaHRcbiAgICovXG4gIHBvc2l0aW9uOiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBSYWRpdXMgb2YgdGhpcyBsaWdodCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZnVsbHktbGl0IGFyZWEgYXQgdGhlIGNlbnRlciBvZiB0aGlzIGxpZ2h0LCBhcyBhIGZyYWN0aW9uXG4gICAqIG9mIHRoZSByYWRpdXNcbiAgICovXG4gIGNvcmVSYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJyaWdodG5lc3Mgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhpcyBsaWdodCBhYm92ZSB0aGUgZ3JvdW5kLCB0aGlzIGlzIHVzZWQgZm9yIHNoYWRpbmcgbm9ybWFsIG1hcHNcbiAgICogYW5kIHNwZWN1bGFyIG1hcHNcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHRoaXMgbGlnaHQgY2FzdCBzaGFkb3dzP1xuICAgKi9cbiAgY2FzdFNoYWRvd3M/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9SQURJVVMgPSAxMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJ3doaXRlJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT1JFX1JBRElVUyA9IDAuMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX0NPUkVfUkFESVVTID0gMC45OTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9JTlRFTlNJVFkgPSAxO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFSUdIVCA9IDQ4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTSEFET1dfQlVGRkVSID0gMjA7XG5cbiAgcHJpdmF0ZSBsaWdodGluZ1N5c3RlbTogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwcml2YXRlIF9yYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sb3VyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb2xvdXJPYmplY3Q6IENvbG91cjtcbiAgcHJpdmF0ZSBfY29yZVJhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9pbnRlbnNpdHk6IG51bWJlcjtcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICBwdWJsaWMgY2FzdFNoYWRvd3M6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgY2hhbmdlZCB3aGVuZXZlciBgbGlnaHRDYW52YXNgIGlzIHJlZHJhd25cbiAgICovXG4gIHB1YmxpYyBsaWdodE1hcFZlcnNpb246IG51bWJlciA9IDA7XG5cbiAgcHVibGljIGxpZ2h0Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBsaWdodENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAvKipcbiAgICogV2hpdGUgd2hlcmUgbGlnaHQgcmVhY2hlcyB0aGUgZ3JvdW5kLCBhbmQgYmxhY2sgaW4gdGhlIHNoYWRvd3Mgb2YgcmVnaW9uXG4gICAqIGNhc3RlcnNcbiAgICovXG4gIHB1YmxpYyByZWdpb25TaGFkb3dDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHJlZ2lvblNoYWRvd0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAvKipcbiAgICogV2hpdGUgd2hlcmUgbGlnaHQgcmVhY2hlcyB0aGUgZ3JvdW5kLCBhbmQgYmxhY2sgaW4gdGhlIHNoYWRvd3Mgb2Ygc3ByaXRlXG4gICAqIGFuZCBjaXJjbGUgY2FzdGVyc1xuICAgKi9cbiAgcHVibGljIG9iamVjdFNoYWRvd0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgb2JqZWN0U2hhZG93Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHByaXZhdGUgZGlydHkgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZ1N5c3RlbTogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IExpZ2h0T3B0aW9ucykge1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0gPSBsaWdodGluZ1N5c3RlbTtcblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLl9yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX1JBRElVUztcbiAgICB0aGlzLl9jb2xvdXIgPSBvcHRpb25zLmNvbG91ciA/PyBMaWdodC5ERUZBVUxUX0NPTE9VUjtcbiAgICB0aGlzLl9jb3JlUmFkaXVzID0gb3B0aW9ucy5jb3JlUmFkaXVzID8/IExpZ2h0LkRFRkFVTFRfQ09SRV9SQURJVVM7XG4gICAgdGhpcy5faW50ZW5zaXR5ID0gb3B0aW9ucy5pbnRlbnNpdHkgPz8gTGlnaHQuREVGQVVMVF9JTlRFTlNJVFk7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCA/PyBMaWdodC5ERUZBVUxUX0hFSUdIVDtcbiAgICB0aGlzLmNhc3RTaGFkb3dzID0gb3B0aW9ucy5jYXN0U2hhZG93cyA/PyB0cnVlO1xuICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih0aGlzLl9jb2xvdXIpO1xuXG4gICAgdGhpcy5saWdodENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGggPSB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy5saWdodENvbnRleHQgPSB0aGlzLmxpZ2h0Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy5yZWdpb25TaGFkb3dDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLnJlZ2lvblNoYWRvd0NvbnRleHQgPSB0aGlzLnJlZ2lvblNoYWRvd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMub2JqZWN0U2hhZG93Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5vYmplY3RTaGFkb3dDb250ZXh0ID0gdGhpcy5vYmplY3RTaGFkb3dDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICAvKipcbiAgICogQm91bmRpbmcgYm94IGZvciB0aGlzIGxpZ2h0LCBpbmNsdWRpbmcgdGhlIG9mZnNldCB3YWxsIGxpZ2h0bWFwc1xuICAgKi9cbiAgcHVibGljIGdldCBib3VuZHMoKTogUmVjdGFuZ2xlIHtcbiAgICBjb25zdCB3YWxsTGlnaHRpbmdZT2Zmc2V0ID0gdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fcmFkaXVzICsgTWF0aC5taW4od2FsbExpZ2h0aW5nWU9mZnNldCwgMClcbiAgICAgICksXG4gICAgICBzaXplOiB2ZWMyKFxuICAgICAgICB0aGlzLl9yYWRpdXMgKiAyLFxuICAgICAgICB0aGlzLl9yYWRpdXMgKiAyICsgTWF0aC5hYnMod2FsbExpZ2h0aW5nWU9mZnNldClcbiAgICAgICksXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IHJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9yYWRpdXMpIHtcbiAgICAgIHRoaXMuX3JhZGl1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG91cjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29sb3VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvbG91cikge1xuICAgICAgdGhpcy5fY29sb3VyID0gdmFsdWU7XG4gICAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodmFsdWUpO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBjb3JlUmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3JlUmFkaXVzO1xuICB9XG5cbiAgcHVibGljIHNldCBjb3JlUmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NvcmVSYWRpdXMpIHtcbiAgICAgIHRoaXMuX2NvcmVSYWRpdXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaW50ZW5zaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnRlbnNpdHk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVuc2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9pbnRlbnNpdHkpIHtcbiAgICAgIHRoaXMuX2ludGVuc2l0eSA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBsaWdodCB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjMikge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNvbWUgb2YgdGhlIG9wdGlvbnMgZm9yIHRoaXMgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxMaWdodE9wdGlvbnM+KSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9zaXRpb24sXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvdXIsXG4gICAgICBjb3JlUmFkaXVzLFxuICAgICAgaW50ZW5zaXR5LFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2FzdFNoYWRvd3MsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24gPz8gdGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgPz8gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXIgPz8gdGhpcy5jb2xvdXI7XG4gICAgdGhpcy5jb3JlUmFkaXVzID0gY29yZVJhZGl1cyA/PyB0aGlzLmNvcmVSYWRpdXM7XG4gICAgdGhpcy5pbnRlbnNpdHkgPSBpbnRlbnNpdHkgPz8gdGhpcy5pbnRlbnNpdHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5jYXN0U2hhZG93cyA9IGNhc3RTaGFkb3dzID8/IHRoaXMuY2FzdFNoYWRvd3M7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgbGlnaHQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmUoXG4gICAgcmVnaW9uQ2FzdGVyczogUmVnaW9uQ2FzdGVyW10sXG4gICAgc3ByaXRlQ2FzdGVyczogU3ByaXRlQ2FzdGVyW10sXG4gICAgY2lyY2xlQ2FzdGVyczogQ2lyY2xlQ2FzdGVyW11cbiAgKSB7XG4gICAgLy8gSWYgdGhlIGxpZ2h0IHNldHRpbmdzIGhhdmUgY2hhbmdlZCwgd2UgbmVlZCB0byByZWRyYXcgdGhlIGJhc2UgbGlnaHRtYXBcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5wcmVwYXJlTGlnaHRNYXAoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0U2hhZG93Q29udGV4dCh0aGlzLnJlZ2lvblNoYWRvd0NvbnRleHQpO1xuICAgIHRoaXMucmVzZXRTaGFkb3dDb250ZXh0KHRoaXMub2JqZWN0U2hhZG93Q29udGV4dCk7XG5cbiAgICBpZiAodGhpcy5jYXN0U2hhZG93cykge1xuICAgICAgY29uc3QgbGlnaHRSZWN0YW5nbGUgPSB0aGlzLmJvdW5kcztcblxuICAgICAgdGhpcy5wcmVwYXJlUmVnaW9uU2hhZG93cyhsaWdodFJlY3RhbmdsZSwgcmVnaW9uQ2FzdGVycyk7XG4gICAgICB0aGlzLnByZXBhcmVTcHJpdGVTaGFkb3dzKGxpZ2h0UmVjdGFuZ2xlLCBzcHJpdGVDYXN0ZXJzKTtcbiAgICAgIHRoaXMucHJlcGFyZUNpcmNsZVNoYWRvd3MobGlnaHRSZWN0YW5nbGUsIGNpcmNsZUNhc3RlcnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzaGFkb3cgY2FudmFzIG1hdGNoZXMgdGhpcyBsaWdodCdzIHNpemUsIGFuZCBmaWxsIGl0IHdpdGggd2hpdGVcbiAgICogc28gdGhhdCBub3RoaW5nIGlzIGluIHNoYWRvd1xuICAgKi9cbiAgcHJpdmF0ZSByZXNldFNoYWRvd0NvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguZmxvb3IodGhpcy5fcmFkaXVzICogMik7XG4gICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSBzaXplIHx8IGNvbnRleHQuY2FudmFzLmhlaWdodCAhPT0gc2l6ZSkge1xuICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIH1cblxuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID1cbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVMaWdodE1hcCgpIHtcbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy5saWdodE1hcFZlcnNpb24rKztcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGgsXG4gICAgICB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBncmFkaWVudCA9IHRoaXMubGlnaHRDb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzICogTWF0aC5taW4odGhpcy5fY29yZVJhZGl1cywgTGlnaHQuTUFYX0NPUkVfUkFESVVTKSxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1c1xuICAgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxuICAgICAgMCxcbiAgICAgIGNvbG91clRvU3RyaW5nKHtcbiAgICAgICAgLi4udGhpcy5jb2xvdXJPYmplY3QsXG4gICAgICAgIHI6IHRoaXMuY29sb3VyT2JqZWN0LnIgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICAgIGc6IHRoaXMuY29sb3VyT2JqZWN0LmcgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICAgIGI6IHRoaXMuY29sb3VyT2JqZWN0LmIgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICB9KVxuICAgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdibGFjaycpO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgdGhpcy5saWdodENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5saWdodENvbnRleHQuYXJjKFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkgKiAyXG4gICAgKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsKCk7XG5cbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuXG4gIHByaXZhdGUgcHJlcGFyZVJlZ2lvblNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXVxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5yZWdpb25TaGFkb3dDb250ZXh0O1xuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyhjb250ZXh0KTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIC10aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9yYWRpdXMsXG4gICAgICAtdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5fcmFkaXVzXG4gICAgKTtcblxuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIHJlZ2lvbkNhc3RlcnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlcikpIHtcbiAgICAgICAgcG9seWdvbihcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIC4uLnRoaXMucHJlcGFyZVJlZ2lvblNoYWRvdyhjYXN0ZXIsIGNhc3Rlci5pbmNsdWRlUmVnaW9uU2hhZG93KVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNwcml0ZVNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBzcHJpdGVDYXN0ZXJzOiBTcHJpdGVDYXN0ZXJbXVxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5vYmplY3RTaGFkb3dDb250ZXh0O1xuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcblxuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIHNwcml0ZUNhc3RlcnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlcikpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93U3ByaXRlID0gY2FzdGVyLmdldFNoYWRvdygpO1xuXG4gICAgICAgIC8vIElmIHRoZSBzaGFkb3cgc3ByaXRlIGlzIG1pc3NpbmcgZm9yIHRoaXMgY2FzdGVyIHRoZW4gaXQgZG9lc24ndFxuICAgICAgICAvLyBjYXN0IGEgc2hhZG93XG4gICAgICAgIGlmICghc2hhZG93U3ByaXRlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGFkb3dPcmlnaW4gPSB2ZWMyLmFkZChcbiAgICAgICAgICBjYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgdmVjMihjYXN0ZXIuc2l6ZS54ICogY2FzdGVyLmFuY2hvci54LCBjYXN0ZXIuc2l6ZS55ICogY2FzdGVyLmFuY2hvci55KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dMZW5ndGggPSBzbW9vdGhzdGVwKFxuICAgICAgICAgIGNhc3Rlci5taW5TaGFkb3dMZW5ndGgsXG4gICAgICAgICAgY2FzdGVyLm1heFNoYWRvd0xlbmd0aCA/PyB0aGlzLnJhZGl1cyxcbiAgICAgICAgICB1bmxlcnAoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICB2ZWMyLmxlbih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RWRnZSA9IHZlYzIubXVsKFxuICAgICAgICAgIHZlYzIubm9yKHZlYzIuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIHNoYWRvd0xlbmd0aFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dFZGdlTGVuZ3RoID0gdmVjMi5sZW4oc2hhZG93RWRnZSk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0FuZ2xlID0gdmVjMi5yYWQoc2hhZG93RWRnZSkgKyBIQUxGX1BJO1xuXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueCAtIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueSAtIHRoaXMucG9zaXRpb24ueVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LnJvdGF0ZShzaGFkb3dBbmdsZSk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgIHNoYWRvd1Nwcml0ZSxcbiAgICAgICAgICAtY2FzdGVyLnNpemUueCAqIGNhc3Rlci5vZmZzZXQueCxcbiAgICAgICAgICAtc2hhZG93RWRnZUxlbmd0aCAqIGNhc3Rlci5vZmZzZXQueSxcbiAgICAgICAgICBjYXN0ZXIuc2l6ZS54LFxuICAgICAgICAgIHNoYWRvd0VkZ2VMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVDaXJjbGVTaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgY2lyY2xlQ2FzdGVyczogQ2lyY2xlQ2FzdGVyW11cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMub2JqZWN0U2hhZG93Q29udGV4dDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3MoY29udGV4dCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5fcmFkaXVzLCB0aGlzLl9yYWRpdXMpO1xuXG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2YgY2lyY2xlQ2FzdGVycykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgY2FzdGVyKSkge1xuICAgICAgICBjb25zdCBzaGFkb3dPcmlnaW4gPSB2ZWMyLmFkZChcbiAgICAgICAgICBjYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgdmVjMihjYXN0ZXIuc2l6ZS54ICogY2FzdGVyLmFuY2hvci54LCBjYXN0ZXIuc2l6ZS55ICogY2FzdGVyLmFuY2hvci55KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dEaXN0YW5jZSA9IHNtb290aHN0ZXAoXG4gICAgICAgICAgY2FzdGVyLm1pblNoYWRvd0Rpc3RhbmNlLFxuICAgICAgICAgIGNhc3Rlci5tYXhTaGFkb3dEaXN0YW5jZSA/PyB0aGlzLnJhZGl1cyxcbiAgICAgICAgICB1bmxlcnAoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICB2ZWMyLmxlbih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93UG9zaXRpb24gPSB2ZWMyLm11bChcbiAgICAgICAgICB2ZWMyLm5vcih2ZWMyLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKSxcbiAgICAgICAgICBzaGFkb3dEaXN0YW5jZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dTaXplID0gdmVjMi5tdWwoY2FzdGVyLnNpemUsIDAuNSk7XG5cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBjYXN0ZXIuYWxwaGE7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgICAgIHNoYWRvd09yaWdpbi54IC0gdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgIHNoYWRvd09yaWdpbi55IC0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuZWxsaXBzZShcbiAgICAgICAgICBzaGFkb3dQb3NpdGlvbi54LFxuICAgICAgICAgIHNoYWRvd1Bvc2l0aW9uLnksXG4gICAgICAgICAgc2hhZG93U2l6ZS54LFxuICAgICAgICAgIHNoYWRvd1NpemUueSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlUmVnaW9uU2hhZG93KFxuICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGluY2x1ZGVDYXN0ZXJSZWdpb246IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQb2x5Z29uVmVydGljZXMge1xuICAgIGNvbnN0IGxpZ2h0UG9zaXRpb24gPSB2ZWMyLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICBjb25zdCBsaWdodFJhZGl1cyA9IHRoaXMuX3JhZGl1cztcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlKTtcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcyA9IHJlY3RhbmdsZVZlcnRpY2VzKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93RWRnZXM6IExpbmVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBhdChzaGFkb3dDYXN0ZXJWZXJ0aWNlcywgaSAtIDEpO1xuICAgICAgY29uc3QgY3VycmVudCA9IHNoYWRvd0Nhc3RlclZlcnRpY2VzW2ldO1xuXG4gICAgICBpZiAoIWxpbmVJc0ZhY2luZyh7IHN0YXJ0OiBwcmV2aW91cywgZW5kOiBjdXJyZW50IH0sIHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSB2ZWMyLnN1YihwcmV2aW91cywgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHZlcnRleDIgPSB2ZWMyLnN1YihjdXJyZW50LCBsaWdodFBvc2l0aW9uKTtcbiAgICAgICAgc2hhZG93RWRnZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogcHJldmlvdXMsXG4gICAgICAgICAgICBlbmQ6IHZlYzIuYWRkKFxuICAgICAgICAgICAgICBwcmV2aW91cyxcbiAgICAgICAgICAgICAgdmVjMi5tdWwoXG4gICAgICAgICAgICAgICAgdmVjMi5ub3IodmVydGV4MSksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSIC0gdmVjMi5sZW4odmVydGV4MSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogY3VycmVudCxcbiAgICAgICAgICAgIGVuZDogdmVjMi5hZGQoXG4gICAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICAgIHZlYzIubXVsKFxuICAgICAgICAgICAgICAgIHZlYzIubm9yKHZlcnRleDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYzIubGVuKHZlcnRleDIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGFkb3dQb2x5Z29uOiBQb2x5Z29uVmVydGljZXMgPSBbXTtcbiAgICBzd2l0Y2ggKHNlY3RvcjJkKHRoaXMucG9zaXRpb24sIHNoYWRvd0Nhc3RlckludGVydmFsKSkge1xuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BMZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbixcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzJdLmVuZCwgc2hhZG93RWRnZXNbMl0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1sxXS5lbmQsIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMV0uZW5kLCBzaGFkb3dFZGdlc1sxXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BSaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHZlYzIoXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi54ICsgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUueCxcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMV0uZW5kLngsIHNoYWRvd0VkZ2VzWzJdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLmVuZFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5JbnNpZGU6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1szXS5lbmQsIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s0XS5lbmQsIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b21MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1szXS5lbmQueCwgc2hhZG93RWRnZXNbMF0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICB2ZWMyKFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZS55XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbM10uZW5kLngsIHNoYWRvd0VkZ2VzWzBdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbTpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHZlYzIuYWRkKHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbiwgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkb3dQb2x5Z29uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBmbG9hdEVxdWFscyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBHbENvbnRleHQsXG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIGxlcnBDb2xvdXIsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIFNjZW5lQ2FtZXJhLFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEFjdG9yLCBBY3Rvck9wdGlvbnMsIFNwcml0ZUFjdG9yT3B0aW9ucyB9IGZyb20gJy4vQWN0b3InO1xuaW1wb3J0IHtcbiAgQ2lyY2xlQ2FzdGVyLFxuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBSZWdpb25DYXN0ZXIsXG4gIFJlZ2lvbkNhc3Rlck9wdGlvbnMsXG4gIFNwcml0ZUNhc3RlcixcbiAgU3ByaXRlQ2FzdGVyT3B0aW9ucyxcbn0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHsgTGlnaHQsIExpZ2h0T3B0aW9ucyB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuL21lcmdlJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0IH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5pbXBvcnQgeyBTaGFkZXJQYXNzLCBTaGFkZXJTdXJmYWNlIH0gZnJvbSAnLi9TaGFkZXJQYXNzJztcbmltcG9ydCB7XG4gIEdyb3VuZFJlY2VpdmVyLFxuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIFN1cmZhY2UsXG4gIFdhbGxSZWNlaXZlcixcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9TdXJmYWNlJztcbmltcG9ydCB7IFdhbGwsIFdhbGxPcHRpb25zIH0gZnJvbSAnLi9XYWxsJztcblxuZXhwb3J0IHR5cGUgTGlnaHRpbmdTeXN0ZW1PcHRpb25zID0ge1xuICAvKipcbiAgICogU2hvdWxkIGxpZ2h0aW5nIGJlIGFwcGxpZWQgdG8gdGhlIHNjZW5lP1xuICAgKlxuICAgKiBJZiB0aGlzIGlzIGZhbHNlIHRoZW4gdGhlIHNjZW5lIHdpbGwgYmUgZHJhd24gd2l0aG91dCBhbnkgbGlnaHRpbmcsIGFuZFxuICAgKiBXZWJHTCB3b24ndCBiZSB1c2VkXG4gICAqL1xuICBsaWdodGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3VsZCBpbWFnZSBzbW9vdGhpbmcgYmUgZW5hYmxlZD9cbiAgICpcbiAgICogU2V0IHRoaXMgdG8gZmFsc2UgZm9yIHBpeGVsIGFydCBzdHlsZVxuICAgKi9cbiAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgc29mdCBzaGFkb3dzIGJlIGVuYWJsZWQ/XG4gICAqXG4gICAqIFRoaXMgd2lsbCBvbmx5IGFwcGx5IGlmIHNvZnRTaGFkb3dzQW1vdW50IGlzID4gMFxuICAgKi9cbiAgc29mdFNoYWRvd3NFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2Ygc29mdCBzaGFkb3dzIHRvIGFwcGx5XG4gICAqXG4gICAqIFNldCB0aGlzIHRvIDAgdG8gZGlzYWJsZSBzb2Z0IHNoYWRvd3NcbiAgICovXG4gIHNvZnRTaGFkb3dzQW1vdW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBub3JtYWwgbWFwcyBhbmQgc3BlY3VsYXIgbWFwcyBiZSB1c2VkP1xuICAgKi9cbiAgc3VyZmFjZU1hcHNFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZXNvbHV0aW9uIG9mIHRoZSBzY2VuZSdzIG5vcm1hbCBtYXAgYW5kIHNwZWN1bGFyIG1hcCwgY29tcGFyZWQgdG8gdGhlXG4gICAqIHJlc29sdXRpb24gb2YgdGhlIHNjcmVlblxuICAgKlxuICAgKiBVcGxvYWRpbmcgdGhlc2UgbWFwcyB0YWtlcyB1cCBhIGxvdCBvZiBlYWNoIGZyYW1lLCBzbyBsb3dlciB2YWx1ZXMgYXJlXG4gICAqIGZhc3Rlci4gSWYgdGhlIGNhbWVyYSBpcyB6b29tZWQgaW4gdGhlbiB0aGlzIHdvbid0IGxvc2UgYW55IGRldGFpbCBhcyBsb25nXG4gICAqIGFzIHRoZXJlJ3Mgc3RpbGwgYXQgbGVhc3Qgb25lIHBpeGVsIGZvciBlYWNoIHBpeGVsIGluIHRoZSBvcmlnaW5hbCBpbWFnZXMsXG4gICAqIGZvciBleGFtcGxlIDAuNSB3b3JrcyB3ZWxsIGZvciBhIGNhbWVyYSB3aXRoIGEgc2NhbGUgb2YgMlxuICAgKi9cbiAgc3VyZmFjZU1hcFNjYWxlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0cmVuZ3RoIG9mIGhpZ2hsaWdodHMgZnJvbSBub3JtYWwgbWFwc1xuICAgKi9cbiAgc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogU3RyZW5ndGggb2Ygc2hhZGluZyBmcm9tIG5vcm1hbCBtYXBzXG4gICAqL1xuICBzaGFkZXJTaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdHJlbmd0aCBvZiBzcGVjdWxhciBoaWdobGlnaHRzXG4gICAqL1xuICBzaGFkZXJTcGVjdWxhclN0cmVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNpemUgb2Ygc3BlY3VsYXIgaGlnaGxpZ2h0cywgbGFyZ2VyIG51bWJlcnMgbWFrZSBzbWFsbGVyIGhpZ2hsaWdodHNcbiAgICovXG4gIHNoYWRlclNoaW5pbmVzczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRoZSBjYW1lcmEgaXMgdGlsdGVkIGF3YXkgZnJvbSBsb29raW5nIHN0cmFpZ2h0IGRvd24sIHRoaXMgbW92ZXNcbiAgICogc3BlY3VsYXIgaGlnaGxpZ2h0cyB0b3dhcmRzIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblxuICAgKi9cbiAgc2hhZGVyVmlld1RpbHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUXVhbnRpemUgc2hhZGluZyBpbnRvIGJhbmRzIG9mIHRoaXMgc2l6ZSwgc2V0IHRoaXMgdG8gMCBmb3Igc21vb3RoIHNoYWRpbmdcbiAgICovXG4gIHNoYWRlckJhbmRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodENvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodCB3aGVuIGZhY2luZyBhd2F5IGZyb20gdGhlIGxpZ2h0XG4gICAqL1xuICBhbWJpZW50TGlnaHRTaGFkb3dDb2xvdXI6IHN0cmluZztcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHQgd2hlbiBmYWNpbmcgdG93YXJkcyB0aGUgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gb2YgYW1iaWVudCBsaWdodCBpbiByYWRpYW5zXG4gICAqL1xuICBhbWJpZW50TGlnaHREaXJlY3Rpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVmVydGljYWwgb2Zmc2V0IGZvciB3YWxsIGxpZ2h0aW5nXG4gICAqL1xuICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGFib3ZlIGJvdHRvbSBlZGdlIG9mIHdhbGwgc2hhZG93IHJlY2VpdmVycyBiZWZvcmUgbGlnaHQgaXNcbiAgICogdG90YWxseSBjdXQgb2ZmXG4gICAqL1xuICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHNwcml0ZSBhbmQgY2lyY2xlIHNoYWRvd3MgY2xpbWIgd2FsbHMsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxlbmd0aFxuICAgKiBvZiB0aGUgc2hhZG93IHRoYXQgcmVhY2hlcyB0aGUgd2FsbFxuICAgKi9cbiAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0aW5nU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9PUFRJT05TOiBMaWdodGluZ1N5c3RlbU9wdGlvbnMgPSB7XG4gICAgbGlnaHRpbmdFbmFibGVkOiB0cnVlLFxuICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBzb2Z0U2hhZG93c0VuYWJsZWQ6IGZhbHNlLFxuICAgIHNvZnRTaGFkb3dzQW1vdW50OiAyLFxuICAgIHN1cmZhY2VNYXBzRW5hYmxlZDogdHJ1ZSxcbiAgICBzdXJmYWNlTWFwU2NhbGU6IDEsXG4gICAgc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGg6IDAuNSxcbiAgICBzaGFkZXJTaGFkb3dTdHJlbmd0aDogMC41LFxuICAgIHNoYWRlclNwZWN1bGFyU3RyZW5ndGg6IDEsXG4gICAgc2hhZGVyU2hpbmluZXNzOiAxNixcbiAgICBzaGFkZXJWaWV3VGlsdDogMC41LFxuICAgIHNoYWRlckJhbmRpbmc6IDAuMSxcbiAgICBhbWJpZW50TGlnaHRDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHREaXJlY3Rpb246IDAsXG4gICAgd2FsbExpZ2h0aW5nWU9mZnNldDogLTMwLFxuICAgIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiAyMCxcbiAgICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiAwLjc1LFxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUNvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjb21wYXJlU3VyZmFjZXMoYTogU3VyZmFjZTxhbnk+LCBiOiBTdXJmYWNlPGFueT4pOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICBhLnpJbmRleCAtIGIuekluZGV4IHx8IGEucG9zaXRpb24ueSArIGEuc2l6ZS55IC0gKGIucG9zaXRpb24ueSArIGIuc2l6ZS55KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb3B0aW9uczogTGlnaHRpbmdTeXN0ZW1PcHRpb25zO1xuXG4gIHB1YmxpYyBsaWdodHM6IExpZ2h0W10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIG1vc3QgcmVjZW50bHkgcmVuZGVyZWQgc2NyZWVuXG4gICAqL1xuICBwdWJsaWMgc2NyZWVuOiB2ZWMyID0gdmVjMigpO1xuXG4gIHByaXZhdGUgZ3JvdW5kUmVjZWl2ZXJzOiBHcm91bmRSZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgd2FsbFJlY2VpdmVyczogV2FsbFJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIHNwcml0ZUNhc3RlcnM6IFNwcml0ZUNhc3RlcltdID0gW107XG4gIHByaXZhdGUgY2lyY2xlQ2FzdGVyczogQ2lyY2xlQ2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBhY3RvcnM6IEFjdG9yW10gPSBbXTtcblxuICBwcml2YXRlIGxpZ2h0TWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIGxpZ2h0TWFwQ2FudmFzID0gdGhpcy5saWdodE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc3BlY3VsYXJMaWdodE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzcGVjdWxhckxpZ2h0TWFwQ2FudmFzID0gdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzY2VuZU5vcm1hbE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzY2VuZU5vcm1hbE1hcENhbnZhcyA9IHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNjZW5lU3BlY3VsYXJNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc2NlbmVTcGVjdWxhck1hcENhbnZhcyA9IHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgZ2xDb250ZXh0OiBHbENvbnRleHQgfCBudWxsO1xuICBwcml2YXRlIHNoYWRlclBhc3M6IFNoYWRlclBhc3MgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzcGVjdWxhclZpc2libGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogYGdsQ29udGV4dGAgbGV0cyB0aGUgbGlnaHRpbmcgc3lzdGVtIHNoYXJlIGEgV2ViR0wgY29udGV4dCB3aXRoIG90aGVyXG4gICAqIHN5c3RlbXMsIG90aGVyd2lzZSBpdCB3aWxsIGNyZWF0ZSBpdHMgb3duXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8TGlnaHRpbmdTeXN0ZW1PcHRpb25zPixcbiAgICBnbENvbnRleHQ/OiBHbENvbnRleHRcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgTGlnaHRpbmdTeXN0ZW0uREVGQVVMVF9PUFRJT05TLFxuICAgICAgb3B0aW9ucyA/PyB7fVxuICAgICk7XG4gICAgdGhpcy5nbENvbnRleHQgPSBnbENvbnRleHQgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gYXJlYSBvZiBncm91bmQgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZEdyb3VuZChvcHRpb25zOiBHcm91bmRSZWNlaXZlck9wdGlvbnMpOiBHcm91bmRSZWNlaXZlciB7XG4gICAgY29uc3QgZ3JvdW5kID0gbmV3IEdyb3VuZFJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLnB1c2goZ3JvdW5kKTtcblxuICAgIHJldHVybiBncm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgc29saWQgd2FsbCwgbWFkZSBmcm9tIGEgbGl0IGZyb250IGZhY2UsIGFuIHVubGl0IHRvcCwgYW5kIGEgZm9vdHByaW50XG4gICAqIHRoYXQgY2FzdHMgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZFdhbGwob3B0aW9uczogV2FsbE9wdGlvbnMpOiBXYWxsIHtcbiAgICByZXR1cm4gbmV3IFdhbGwodGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbW92aW5nIG9iamVjdCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBjYXN0cyBhIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZEFjdG9yKG9wdGlvbnM6IEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9ucyk6IEFjdG9yIHtcbiAgICBjb25zdCBhY3RvciA9IG5ldyBBY3Rvcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmFjdG9ycy5wdXNoKGFjdG9yKTtcblxuICAgIHJldHVybiBhY3RvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaWdodFxuICAgKi9cbiAgcHVibGljIGFkZExpZ2h0KG9wdGlvbnM6IExpZ2h0T3B0aW9ucyk6IExpZ2h0IHtcbiAgICBjb25zdCBsaWdodCA9IG5ldyBMaWdodCh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmxpZ2h0cy5wdXNoKGxpZ2h0KTtcblxuICAgIHJldHVybiBsaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgb3Igc3ByaXRlIHRoYXQgcmVjZWl2ZXMgd2FsbCBzaGFkb3dzXG4gICAqXG4gICAqIFRoaXMgaXMgd2hhdCBgYWRkV2FsbCgpYCBhbmQgYGFkZEFjdG9yKClgIHVzZSB0byBjcmVhdGUgdGhlaXIgc3VyZmFjZXNcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsUmVjZWl2ZXIob3B0aW9uczogV2FsbFJlY2VpdmVyT3B0aW9ucyk6IFdhbGxSZWNlaXZlciB7XG4gICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsUmVjZWl2ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLnB1c2god2FsbCk7XG5cbiAgICByZXR1cm4gd2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBwb2x5Z29uYWwgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZFJlZ2lvbkNhc3RlcihvcHRpb25zOiBSZWdpb25DYXN0ZXJPcHRpb25zKTogUmVnaW9uQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgUmVnaW9uQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMucmVnaW9uQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGEgcm90YXRlZCBhbmQgc3RyZXRjaGVkIGltYWdlIGFzIGEgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkU3ByaXRlQ2FzdGVyKG9wdGlvbnM6IFNwcml0ZUNhc3Rlck9wdGlvbnMpOiBTcHJpdGVDYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBTcHJpdGVDYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5zcHJpdGVDYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYW4gZWxsaXB0aWNhbCBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRDaXJjbGVDYXN0ZXIob3B0aW9uczogQ2lyY2xlQ2FzdGVyT3B0aW9ucyk6IENpcmNsZUNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IENpcmNsZUNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmNpcmNsZUNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gb2JqZWN0IG9yIGxpZ2h0IGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZShvYmplY3Q6IFNjZW5lT2JqZWN0PGFueT4gfCBMaWdodCB8IEFjdG9yKSB7XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIExpZ2h0KSB7XG4gICAgICB0aGlzLmxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PiBsaWdodCAhPT0gb2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgQWN0b3IpIHtcbiAgICAgIHRoaXMuYWN0b3JzID0gdGhpcy5hY3RvcnMuZmlsdGVyKGFjdG9yID0+IGFjdG9yICE9PSBvYmplY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzID0gdGhpcy5ncm91bmRSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSB0aGlzLndhbGxSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLnJlZ2lvbkNhc3RlcnMgPSB0aGlzLnJlZ2lvbkNhc3RlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLnNwcml0ZUNhc3RlcnMgPSB0aGlzLnNwcml0ZUNhc3RlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLmNpcmNsZUNhc3RlcnMgPSB0aGlzLmNpcmNsZUNhc3RlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSB3YWxsIHJlY2VpdmVycyBhbmQgcmVnaW9uIGNhc3RlcnMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlclxuICAgKiBhbmQgcGVyZmVjdGx5IGNvbm5lY3RlZCBvbiBvbmUgc2lkZSwgc28gdGhhdCB0aGVyZSBhcmUgZmV3ZXIgdG8gcHJvY2Vzc1xuICAgKlxuICAgKiBNZXJnZWQgb2JqZWN0cyBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW0gYW5kIGNhbid0IGJlIG1vdmVkXG4gICAqIGFmdGVyd2FyZHMsIHNvIHRoaXMgaXMgaW50ZW5kZWQgZm9yIGxldmVsIGdlb21ldHJ5LiBTZXQgYG1lcmdlYWJsZWAgdG9cbiAgICogZmFsc2Ugb24gYW4gb2JqZWN0IHRvIGV4Y2x1ZGUgaXRcbiAgICpcbiAgICogYG9uTWVyZ2VgIGlzIGNhbGxlZCBlYWNoIHRpbWUgMiBvYmplY3RzIGFyZSByZXBsYWNlZCB3aXRoIGEgc2luZ2xlIG9iamVjdC5cbiAgICogSWYgdGhlIG9iamVjdHMgd2VyZSBkdXBsaWNhdGVzLCB0aGUgbWVyZ2VkIG9iamVjdCBpcyB0aGUgZmlyc3Qgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgb3B0aW1pc2UoXG4gICAgb25NZXJnZT86IChcbiAgICAgIG1lcmdlZDogV2FsbFJlY2VpdmVyIHwgUmVnaW9uQ2FzdGVyLFxuICAgICAgYTogV2FsbFJlY2VpdmVyIHwgUmVnaW9uQ2FzdGVyLFxuICAgICAgYjogV2FsbFJlY2VpdmVyIHwgUmVnaW9uQ2FzdGVyXG4gICAgKSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMud2FsbFJlY2VpdmVycyA9IG1lcmdlPFdhbGxSZWNlaXZlcj4odGhpcy53YWxsUmVjZWl2ZXJzLCBvbk1lcmdlKTtcbiAgICB0aGlzLnJlZ2lvbkNhc3RlcnMgPSBtZXJnZTxSZWdpb25DYXN0ZXI+KHRoaXMucmVnaW9uQ2FzdGVycywgb25NZXJnZSk7XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgYSBXZWJHTCBjb250ZXh0IHdpdGggb3RoZXIgc3lzdGVtcywgdGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYmVmb3JlXG4gICAqIHRoZSBmaXJzdCByZW5kZXIgYW5kIGRvZXMgbm90aGluZyBpZiBhIGNvbnRleHQgaGFzIGFscmVhZHkgYmVlbiBzZXRcbiAgICovXG4gIHB1YmxpYyB1c2VHbENvbnRleHQoZ2xDb250ZXh0OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmdsQ29udGV4dCA/Pz0gZ2xDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hhZGVyIHBhc3MsIGlmIGl0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwcml2YXRlIGdldFNoYWRlclBhc3MoKTogU2hhZGVyUGFzcyB8IG51bGwge1xuICAgIHRoaXMuc2hhZGVyUGFzcyA/Pz0gbmV3IFNoYWRlclBhc3ModGhpcy5nbENvbnRleHQgPz8gbmV3IEdsQ29udGV4dCgpKTtcblxuICAgIHJldHVybiB0aGlzLnNoYWRlclBhc3MuYXZhaWxhYmxlID8gdGhpcy5zaGFkZXJQYXNzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzY3JlZW4tc2l6ZWQgY2FudmFzIG1hdGNoZXMgdGhlIHNjcmVlbiBzaXplIGFuZCBjbGVhciBpdFxuICAgKi9cbiAgcHJpdmF0ZSByZXNldENvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzY2FsZTogbnVtYmVyID0gMSkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKHRoaXMuc2NyZWVuLnggKiBzY2FsZSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuc2NyZWVuLnkgKiBzY2FsZSk7XG5cbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIG1hcCByZWFkeSBmb3IgZHJhd2luZyBzdXJmYWNlcyBpbiB3b3JsZCBjb29yZGluYXRlcywgYXQgdGhlXG4gICAqIHJlc29sdXRpb24gb2YgdGhlIHNjZW5lJ3Mgc3VyZmFjZSBtYXBzXG4gICAqL1xuICBwcml2YXRlIHByZXBhcmVTdXJmYWNlTWFwKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBjYW1lcmE6IFNjZW5lQ2FtZXJhXG4gICkge1xuICAgIGNvbnN0IHsgc3VyZmFjZU1hcFNjYWxlOiBzY2FsZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgdGhpcy5yZXNldENvbnRleHQoY29udGV4dCwgc2NhbGUpO1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKGNvbnRleHQpO1xuXG4gICAgaWYgKHNjYWxlICE9PSAxKSB7XG4gICAgICBjb25zdCB7IGEsIGIsIGMsIGQsIGUsIGYgfSA9IGNvbnRleHQuZ2V0VHJhbnNmb3JtKCk7XG5cbiAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKFxuICAgICAgICBhICogc2NhbGUsXG4gICAgICAgIGIgKiBzY2FsZSxcbiAgICAgICAgYyAqIHNjYWxlLFxuICAgICAgICBkICogc2NhbGUsXG4gICAgICAgIGUgKiBzY2FsZSxcbiAgICAgICAgZiAqIHNjYWxlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBsaXQgc2NlbmUgb250byBhIGNvbnRleHRcbiAgICpcbiAgICogSWYgYGRyYXdTY2VuZWAgaXMgcHJvdmlkZWQgdGhlbiBpdCB3aWxsIGJlIGNhbGxlZCB0byBkcmF3IHRoZSBzY2VuZSB3aXRoXG4gICAqIHRoZSBjYW1lcmEncyB0cmFuc2Zvcm1zIGFwcGxpZWQsIG90aGVyd2lzZSB3ZSdsbCBkcmF3IGFsbCBvZiB0aGUgc3VyZmFjZXNcbiAgICogdGhhdCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbmRlcihcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgY2FtZXJhOiBTY2VuZUNhbWVyYSxcbiAgICBkcmF3U2NlbmU/OiAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKGNvbnRleHQpO1xuICAgIGlmIChkcmF3U2NlbmUpIHtcbiAgICAgIGRyYXdTY2VuZShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3U3VyZmFjZXMoY29udGV4dCk7XG4gICAgfVxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgdGhpcy5wcmVwYXJlKGNhbWVyYSwgdmVjMihjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KSk7XG4gICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYWxsIG9mIHRoZSBzdXJmYWNlcyB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgZHJhd1N1cmZhY2VzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd0dyb3VuZChjb250ZXh0KTtcbiAgICB0aGlzLmRyYXdXYWxscyhjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBncm91bmQsIHRoaXMgaXMgdGhlIHBhcnQgb2YgdGhlIHNjZW5lIHRoYXQncyB1bmRlcm5lYXRoIGV2ZXJ5dGhpbmdcbiAgICogZWxzZVxuICAgKi9cbiAgcHVibGljIGRyYXdHcm91bmQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy51cGRhdGVTdXJmYWNlcygpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC5kcmF3KGNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSB3YWxscyBhbmQgYWN0b3JzIHRoYXQgc3RhbmQgb24gdGhlIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGRyYXdXYWxscyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLmZvckVhY2god2FsbCA9PiB3YWxsLmRyYXcoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBzdXJmYWNlcyBhcmUgdXAgdG8gZGF0ZSBhbmQgaW4gZHJhd2luZyBvcmRlciwgYWN0b3JzIGNvbWUgZmlyc3RcbiAgICogYmVjYXVzZSBtb3ZpbmcgYW4gYWN0b3IgY2FuIGNoYW5nZSB0aGUgb3JkZXJcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlU3VyZmFjZXMoKSB7XG4gICAgdGhpcy5hY3RvcnMuZm9yRWFjaChhY3RvciA9PiBhY3Rvci5zeW5jKCkpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLnNvcnQoTGlnaHRpbmdTeXN0ZW0uY29tcGFyZVN1cmZhY2VzKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuc29ydChMaWdodGluZ1N5c3RlbS5jb21wYXJlU3VyZmFjZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGxpZ2h0bWFwcyBmb3IgcmVuZGVyaW5nXG4gICAqXG4gICAqIElmIFdlYkdMIGlzbid0IGF2YWlsYWJsZSB0aGVuIGxpZ2h0bWFwcyBhcmUgbGVmdCBhcyB0aGV5IGFyZSwgc28gdGhlIHNjZW5lXG4gICAqIGtlZXBzIGl0cyBsYXN0IGxpZ2h0aW5nIHdoZW4gdGhlIGNvbnRleHQgaXMgbG9zdCBhbmQgdGhlbiByZXN0b3JlZFxuICAgKi9cbiAgcHVibGljIHByZXBhcmUoY2FtZXJhOiBTY2VuZUNhbWVyYSwgc2NyZWVuOiB2ZWMyKSB7XG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XG4gICAgdGhpcy51cGRhdGVTdXJmYWNlcygpO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubGlnaHRpbmdFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hhZGVyUGFzcyA9IHRoaXMuZ2V0U2hhZGVyUGFzcygpO1xuICAgIGlmICghc2hhZGVyUGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYVJlY3RhbmdsZSA9IGludGVydmFsVG9SZWN0YW5nbGUoY2FtZXJhLmJvdW5kcyk7XG4gICAgY29uc3Qgc3VyZmFjZXMgPSBbLi4udGhpcy5ncm91bmRSZWNlaXZlcnMsIC4uLnRoaXMud2FsbFJlY2VpdmVyc10uZmlsdGVyKFxuICAgICAgc3VyZmFjZSA9PiByZWN0YW5nbGVzSW50ZXJzZWN0KHN1cmZhY2UsIGNhbWVyYVJlY3RhbmdsZSlcbiAgICApO1xuXG4gICAgY29uc3QgeyBzdXJmYWNlTWFwc0VuYWJsZWQgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBoYXNOb3JtYWxNYXBzID1cbiAgICAgIHN1cmZhY2VNYXBzRW5hYmxlZCAmJlxuICAgICAgc3VyZmFjZXMuc29tZShcbiAgICAgICAgc3VyZmFjZSA9PiBzdXJmYWNlLm5vcm1hbE1hcCB8fCBzdXJmYWNlLmN1c3RvbURyYXcubm9ybWFsTWFwXG4gICAgICApO1xuICAgIGNvbnN0IGhhc1NwZWN1bGFyTWFwcyA9XG4gICAgICBzdXJmYWNlTWFwc0VuYWJsZWQgJiZcbiAgICAgIHN1cmZhY2VzLnNvbWUoXG4gICAgICAgIHN1cmZhY2UgPT4gc3VyZmFjZS5zcGVjdWxhck1hcCB8fCBzdXJmYWNlLmN1c3RvbURyYXcuc3BlY3VsYXJNYXBcbiAgICAgICk7XG5cbiAgICBpZiAoaGFzTm9ybWFsTWFwcykge1xuICAgICAgdGhpcy5kcmF3U2NlbmVOb3JtYWxNYXAoY2FtZXJhLCBzdXJmYWNlcyk7XG4gICAgfVxuICAgIGlmIChoYXNTcGVjdWxhck1hcHMpIHtcbiAgICAgIHRoaXMuZHJhd1NjZW5lU3BlY3VsYXJNYXAoY2FtZXJhLCBzdXJmYWNlcyk7XG4gICAgfVxuXG4gICAgLy8gTGlnaHRzIG91dHNpZGUgdGhlIGNhbWVyYSBib3VuZHMgY2FuJ3QgYWZmZWN0IHRoZSB2aXNpYmxlIHNjZW5lXG4gICAgY29uc3QgdmlzaWJsZUxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PlxuICAgICAgcmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodC5ib3VuZHMsIGNhbWVyYVJlY3RhbmdsZSlcbiAgICApO1xuXG4gICAgdmlzaWJsZUxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+XG4gICAgICBsaWdodC5wcmVwYXJlKHRoaXMucmVnaW9uQ2FzdGVycywgdGhpcy5zcHJpdGVDYXN0ZXJzLCB0aGlzLmNpcmNsZUNhc3RlcnMpXG4gICAgKTtcblxuICAgIHNoYWRlclBhc3MucmVuZGVyKHtcbiAgICAgIGNhbWVyYSxcbiAgICAgIHNjcmVlbixcbiAgICAgIGxpZ2h0czogdmlzaWJsZUxpZ2h0cyxcbiAgICAgIGFsbExpZ2h0czogdGhpcy5saWdodHMsXG4gICAgICBzdXJmYWNlczogdGhpcy5jYWxjdWxhdGVBbWJpZW50TGlnaHRzKHN1cmZhY2VzKSxcbiAgICAgIG5vcm1hbE1hcDogaGFzTm9ybWFsTWFwcyA/IHRoaXMuc2NlbmVOb3JtYWxNYXBDYW52YXMgOiBudWxsLFxuICAgICAgc3BlY3VsYXJNYXA6IGhhc1NwZWN1bGFyTWFwcyA/IHRoaXMuc2NlbmVTcGVjdWxhck1hcENhbnZhcyA6IG51bGwsXG4gICAgICBzdXJmYWNlTWFwRmlsdGVyOlxuICAgICAgICB0aGlzLm9wdGlvbnMuc3VyZmFjZU1hcFNjYWxlIDwgMSAmJiB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkXG4gICAgICAgICAgPyAnbGluZWFyJ1xuICAgICAgICAgIDogJ25lYXJlc3QnLFxuICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgd2FsbExpZ2h0aW5nWU9mZnNldDogdGhpcy5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXQsXG4gICAgICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogdGhpcy5vcHRpb25zLndhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlLFxuICAgICAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogdGhpcy5vcHRpb25zLndhbGxTaGFkb3dMZW5ndGhGYWN0b3IsXG4gICAgICBoaWdobGlnaHRTdHJlbmd0aDogdGhpcy5vcHRpb25zLnNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoLFxuICAgICAgc2hhZG93U3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJTaGFkb3dTdHJlbmd0aCxcbiAgICAgIHNwZWN1bGFyU3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJTcGVjdWxhclN0cmVuZ3RoLFxuICAgICAgc2hpbmluZXNzOiB0aGlzLm9wdGlvbnMuc2hhZGVyU2hpbmluZXNzLFxuICAgICAgdmlld1RpbHQ6IHRoaXMub3B0aW9ucy5zaGFkZXJWaWV3VGlsdCxcbiAgICAgIGJhbmRpbmc6IHRoaXMub3B0aW9ucy5zaGFkZXJCYW5kaW5nLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5saWdodE1hcENvbnRleHQpO1xuICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShzaGFkZXJQYXNzLmNhbnZhcywgMCwgMCk7XG5cbiAgICB0aGlzLnNwZWN1bGFyVmlzaWJsZSA9IGhhc1NwZWN1bGFyTWFwcztcbiAgICBpZiAoaGFzU3BlY3VsYXJNYXBzKSB7XG4gICAgICBzaGFkZXJQYXNzLnNob3dTcGVjdWxhcihzY3JlZW4pO1xuXG4gICAgICAvLyBIaWdobGlnaHRzIGNhbiBvbmx5IGFwcGVhciBvbiB0aGUgc3VyZmFjZXMgaW4gdGhlIGxpZ2h0IG1hcFxuICAgICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LnNhdmUoKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHNoYWRlclBhc3MuY2FudmFzLCAwLCAwKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyBzaG93aW5nIHdoaWNoIHN1cmZhY2UgaXMgYXQgZWFjaCBwaXhlbCwgZm9yIGRlYnVnZ2luZ1xuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBkcmF3biBzdHJhaWdodCBhd2F5LCBiZWNhdXNlIHRoZSBjYW52YXMgaXMgcmV1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0U3VyZmFjZU1hcENhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgdGhpcy5zaGFkZXJQYXNzPy5zaG93U3VyZmFjZXModGhpcy5zY3JlZW4pO1xuXG4gICAgcmV0dXJuIHRoaXMuc2hhZGVyUGFzcz8uY2FudmFzID8/IHRoaXMubGlnaHRNYXBDYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgYW1iaWVudCBsaWdodCBvbiBlYWNoIHN1cmZhY2VcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlQW1iaWVudExpZ2h0cyhzdXJmYWNlczogU3VyZmFjZTxhbnk+W10pOiBTaGFkZXJTdXJmYWNlW10ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZlYzIucm90KHZlYzIoMSwgMCksIHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHREaXJlY3Rpb24pO1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IHBhcnNlQ29sb3IodGhpcy5vcHRpb25zLmFtYmllbnRMaWdodENvbG91cik7XG4gICAgY29uc3Qgc2hhZG93ID0gcGFyc2VDb2xvcih0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyKTtcbiAgICBjb25zdCBoaWdobGlnaHQgPSBwYXJzZUNvbG9yKHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXIpO1xuXG4gICAgcmV0dXJuIHN1cmZhY2VzLm1hcChzdXJmYWNlID0+ICh7XG4gICAgICBzdXJmYWNlLFxuICAgICAgYW1iaWVudExpZ2h0OlxuICAgICAgICBzdXJmYWNlIGluc3RhbmNlb2YgV2FsbFJlY2VpdmVyXG4gICAgICAgICAgPyB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICAgICAgICAgICAgc3VyZmFjZS5zdXJmYWNlTm9ybWFsLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgIGFtYmllbnRMaWdodCxcbiAgICAgICAgICAgICAgc2hhZG93LFxuICAgICAgICAgICAgICBoaWdobGlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGFtYmllbnRMaWdodCxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3R1YWwgY29sb3VyIG9mIGFtYmllbnQgbGlnaHQgYmFzZWQgb24gdGhlIHN1cmZhY2Ugbm9ybWFsXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICBzdXJmYWNlTm9ybWFsOiB2ZWMyLFxuICAgIGFtYmllbnRMaWdodERpcmVjdGlvbjogdmVjMixcbiAgICBhbWJpZW50TGlnaHQ6IENvbG91cixcbiAgICBhbWJpZW50TGlnaHRTaGFkb3c6IENvbG91cixcbiAgICBhbWJpZW50TGlnaHRIaWdobGlnaHQ6IENvbG91clxuICApOiBDb2xvdXIge1xuICAgIGlmICh2ZWMyLmVxKHN1cmZhY2VOb3JtYWwsIHZlYzIoKSkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgZG90ID0gdmVjMi5kb3QodmVjMi5ub3Ioc3VyZmFjZU5vcm1hbCksIGFtYmllbnRMaWdodERpcmVjdGlvbik7XG4gICAgaWYgKGZsb2F0RXF1YWxzKGRvdCwgMCkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGRvdCA8IDApIHtcbiAgICAgIHJldHVybiBsZXJwQ29sb3VyKGFtYmllbnRMaWdodCwgYW1iaWVudExpZ2h0SGlnaGxpZ2h0LCAtZG90KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVycENvbG91cihhbWJpZW50TGlnaHQsIGFtYmllbnRMaWdodFNoYWRvdywgZG90KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgc29mdCBzaGFkb3cgc2V0dGluZ3Mgb24gdGhlIHNwZWNpZmllZCBjYW52YXMgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHNldHVwU29mdFNoYWRvd3MoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzRW5hYmxlZCAmJlxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnYmxhY2snO1xuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50O1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsYXkgdGhlIGxpZ2h0bWFwIG9udG8gdGhlIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmxpZ2h0aW5nRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgYWZ0ZXJ3YXJkcyBzbyB0aGF0IHRoZXkgY2FuIGJlIGJyaWdodGVyXG4gICAgLy8gdGhhbiB0aGUgc2NlbmUgdW5kZXJuZWF0aCB0aGVtXG4gICAgaWYgKHRoaXMuc3BlY3VsYXJWaXNpYmxlKSB7XG4gICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3BlY3VsYXJMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBub3JtYWwgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmE6IFNjZW5lQ2FtZXJhLCBzdXJmYWNlczogU3VyZmFjZTxhbnk+W10pIHtcbiAgICB0aGlzLnByZXBhcmVTdXJmYWNlTWFwKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LCBjYW1lcmEpO1xuXG4gICAgc3VyZmFjZXMuZm9yRWFjaChzdXJmYWNlID0+IHtcbiAgICAgIHN1cmZhY2UuZHJhd05vcm1hbE1hcCh0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBzcGVjdWxhciBtYXBzIGZvciBzdXJmYWNlcyBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHByaXZhdGUgZHJhd1NjZW5lU3BlY3VsYXJNYXAoXG4gICAgY2FtZXJhOiBTY2VuZUNhbWVyYSxcbiAgICBzdXJmYWNlczogU3VyZmFjZTxhbnk+W11cbiAgKSB7XG4gICAgdGhpcy5wcmVwYXJlU3VyZmFjZU1hcCh0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0LCBjYW1lcmEpO1xuXG4gICAgc3VyZmFjZXMuZm9yRWFjaChzdXJmYWNlID0+IHtcbiAgICAgIHN1cmZhY2UuZHJhd1NwZWN1bGFyTWFwKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuXG5leHBvcnQgdHlwZSBTY2VuZU9iamVjdE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXb3JsZCBwb3NpdGlvbiBvZiB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoaXMgb2JqZWN0XG4gICAqL1xuICBwb3NpdGlvbjogdmVjMjtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGlzIG9iamVjdCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgc2l6ZTogdmVjMjtcblxuICAvKipcbiAgICogQ2FuIHRoaXMgb2JqZWN0IGJlIG1lcmdlZCB3aXRoIGl0cyBuZWlnaGJvdXJzIGJ5XG4gICAqIGBMaWdodGluZ1N5c3RlbS5vcHRpbWlzZSgpYD9cbiAgICovXG4gIG1lcmdlYWJsZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgd2l0aCBhIGBMaWdodGluZ1N5c3RlbWBcbiAqXG4gKiBUaGVzZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgYExpZ2h0aW5nU3lzdGVtLmFkZC4uLigpYCBtZXRob2RzIGFuZCBhcmUgdXNlZFxuICogdG8gY2hhbmdlIG9yIHJlbW92ZSB0aGUgb2JqZWN0IGxhdGVyIG9uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuZU9iamVjdDxPcHRpb25zIGV4dGVuZHMgU2NlbmVPYmplY3RPcHRpb25zPiB7XG4gIHByb3RlY3RlZCBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1lcmdlYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSByZW1vdmVDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogT3B0aW9ucykge1xuICAgIHRoaXMubGlnaHRpbmcgPSBsaWdodGluZztcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkob3B0aW9ucy5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgb2JqZWN0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHNpemUgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2l6ZTogdmVjMikge1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzb21lIG9mIHRoZSBvcHRpb25zIGZvciB0aGlzIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHNldChvcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweSh0aGlzLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgb2JqZWN0IGlzIHJlbW92ZWRcbiAgICovXG4gIHB1YmxpYyBvblJlbW92ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIG9iamVjdCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5saWdodGluZy5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEdsQ29udGV4dCxcbiAgR2xQcm9ncmFtLFxuICBHbFJlbmRlclRhcmdldCxcbiAgU2NlbmVDYW1lcmEsXG4gIFNjZW5lSW1hZ2UsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgR3JvdW5kUmVjZWl2ZXIsIFN1cmZhY2UsIFdhbGxSZWNlaXZlciB9IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgZGlmZnVzZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9kaWZmdXNlLmZyYWcuZ2xzbCcpO1xuaW1wb3J0IG1hc2tTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvbWFzay5mcmFnLmdsc2wnKTtcbmltcG9ydCBzcGVjdWxhclNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9zcGVjdWxhci5mcmFnLmdsc2wnKTtcbmltcG9ydCBzdXJmYWNlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3N1cmZhY2UuZ2xzbCcpO1xuXG4vKipcbiAqIEEgc3VyZmFjZSB0aGF0J3MgdmlzaWJsZSBpbiB0aGUgc2NlbmUsIGFuZCBpdHMgYW1iaWVudCBsaWdodFxuICovXG5leHBvcnQgdHlwZSBTaGFkZXJTdXJmYWNlID0ge1xuICBzdXJmYWNlOiBTdXJmYWNlPGFueT47XG4gIGFtYmllbnRMaWdodDogQ29sb3VyO1xufTtcblxuLyoqXG4gKiBFdmVyeXRoaW5nIHRoYXQgdGhlIHNoYWRlcnMgbmVlZCBmb3IgcmVuZGVyaW5nIGEgZnJhbWVcbiAqL1xuZXhwb3J0IHR5cGUgU2hhZGVyU2NlbmUgPSB7XG4gIGNhbWVyYTogU2NlbmVDYW1lcmE7XG4gIHNjcmVlbjogdmVjMjtcbiAgbGlnaHRzOiBMaWdodFtdO1xuICBhbGxMaWdodHM6IExpZ2h0W107XG4gIHN1cmZhY2VzOiBTaGFkZXJTdXJmYWNlW107XG4gIG5vcm1hbE1hcDogU2NlbmVJbWFnZSB8IG51bGw7XG4gIHNwZWN1bGFyTWFwOiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgc3VyZmFjZU1hcEZpbHRlcjogJ25lYXJlc3QnIHwgJ2xpbmVhcic7XG4gIGltYWdlU21vb3RoaW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgd2FsbExpZ2h0aW5nWU9mZnNldDogbnVtYmVyO1xuICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogbnVtYmVyO1xuICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiBudW1iZXI7XG4gIGhpZ2hsaWdodFN0cmVuZ3RoOiBudW1iZXI7XG4gIHNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG4gIHNwZWN1bGFyU3RyZW5ndGg6IG51bWJlcjtcbiAgc2hpbmluZXNzOiBudW1iZXI7XG4gIHZpZXdUaWx0OiBudW1iZXI7XG4gIGJhbmRpbmc6IG51bWJlcjtcbn07XG5cbmVudW0gVGV4dHVyZVVuaXQge1xuICBOb3JtYWxNYXAsXG4gIFNwZWN1bGFyTWFwLFxuICBTdXJmYWNlTWFwLFxuICBMaWdodE1hcCxcbiAgUmVnaW9uU2hhZG93TWFwLFxuICBPYmplY3RTaGFkb3dNYXAsXG59XG5cbi8qKlxuICogVGhlIGFscGhhIGNoYW5uZWwgb2YgdGhlIHN1cmZhY2UgbWFwIHNheXMgd2hhdCdzIGF0IGVhY2ggcGl4ZWwsIHRoZXNlIHZhbHVlc1xuICogYXJlIGFsc28gaW4gdGhlIHNoYWRlcnNcbiAqL1xuZW51bSBTdXJmYWNlVHlwZSB7XG4gIE5vbmUgPSAwLFxuICBHcm91bmQgPSAwLjI1LFxuICBQcm9qZWN0ZWRXYWxsID0gMC41LFxuICBGbGF0V2FsbCA9IDAuNzUsXG4gIFVubGl0ID0gMSxcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBsaWdodGluZyBmb3IgYSBzY2VuZVxuICpcbiAqIFN1cmZhY2VzIGFyZSBkcmF3biBpbnRvIGEgc3VyZmFjZSBtYXAgd2l0aG91dCBhbnkgYmxlbmRpbmcsIHNvIGVhY2ggcGl4ZWxcbiAqIGJlbG9uZ3MgdG8gZXhhY3RseSBvbmUgc3VyZmFjZSBhbmQga25vd3Mgd2hlcmUgdGhhdCBzdXJmYWNlIG1lZXRzIHRoZSBncm91bmQuXG4gKiBUaGlzIG1lYW5zIG92ZXJsYXBwaW5nIHN1cmZhY2VzIGRvbid0IG5lZWQgYW55IHNwZWNpYWwgaGFuZGxpbmcuXG4gKlxuICogRWFjaCBsaWdodCBpcyB0aGVuIHNoYWRlZCBzZXBhcmF0ZWx5IGFuZCBibGVuZGVkIGludG8gYSBsaWdodCBtYXAsIHNvIGFcbiAqIGxpZ2h0J3MgYnVtcHMgb25seSBhZmZlY3QgdGhhdCBsaWdodC4gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgdXAgaW4gYVxuICogc2VwYXJhdGUgYnVmZmVyLCBiZWNhdXNlIHRoZXkgbmVlZCB0byBiZSBicmlnaHRlciB0aGFuIHRoZSBzY2VuZVxuICovXG5leHBvcnQgY2xhc3MgU2hhZGVyUGFzcyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPT1RfU0NBTEUgPSA0O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT09UX01BWCA9IDY1NTM1O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0hBRE9XX0JJQVMgPSAyNTU7XG5cbiAgcHJpdmF0ZSBjb250ZXh0OiBHbENvbnRleHQ7XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgbWFza1Byb2dyYW06IEdsUHJvZ3JhbTtcbiAgcHJpdmF0ZSBkaWZmdXNlUHJvZ3JhbTogR2xQcm9ncmFtO1xuICBwcml2YXRlIHNwZWN1bGFyUHJvZ3JhbTogR2xQcm9ncmFtO1xuXG4gIHByaXZhdGUgdGV4dHVyZXM6IFJlY29yZDxcbiAgICBFeGNsdWRlPFRleHR1cmVVbml0LCBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwPixcbiAgICBXZWJHTFRleHR1cmVcbiAgPjtcbiAgcHJpdmF0ZSBzdXJmYWNlVGFyZ2V0OiBHbFJlbmRlclRhcmdldDtcbiAgcHJpdmF0ZSBzcGVjdWxhclRhcmdldDogR2xSZW5kZXJUYXJnZXQ7XG5cbiAgLyoqXG4gICAqIFRoZSBncmFkaWVudCBmb3IgZWFjaCBsaWdodCBvbmx5IG5lZWRzIHVwbG9hZGluZyB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIHByaXZhdGUgbGlnaHRUZXh0dXJlcyA9IG5ldyBNYXA8XG4gICAgTGlnaHQsXG4gICAgeyB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7IHZlcnNpb246IG51bWJlciB9XG4gID4oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29udGV4dDogR2xDb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbnRleHQub25Jbml0aWFsaXNlKGdsID0+IHRoaXMuaW5pdGlhbGlzZShnbCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgb2YgdGhlIG1vc3QgcmVjZW50IHBhc3NcbiAgICovXG4gIHB1YmxpYyBnZXQgY2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNhbnZhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgc2hhZGVycyBjYW4gYmUgdXNlZFxuICAgKi9cbiAgcHVibGljIGdldCBhdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZWQgJiYgdGhpcy5jb250ZXh0LmF2YWlsYWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGlzZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByZXBlbmQgPSAoc291cmNlOiBzdHJpbmcpID0+IGAke3N1cmZhY2VTaGFkZXJ9XFxuJHtzb3VyY2V9YDtcblxuICAgICAgdGhpcy5tYXNrUHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKG1hc2tTaGFkZXIpO1xuICAgICAgdGhpcy5kaWZmdXNlUHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKHByZXBlbmQoZGlmZnVzZVNoYWRlcikpO1xuICAgICAgdGhpcy5zcGVjdWxhclByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbShcbiAgICAgICAgcHJlcGVuZChzcGVjdWxhclNoYWRlcilcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTGlnaHRpbmcgaGFzIGJlZW4gZGlzYWJsZWQnLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHR1cmVzID0ge1xuICAgICAgW1RleHR1cmVVbml0Lk5vcm1hbE1hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0LkxpZ2h0TWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgfTtcbiAgICB0aGlzLnN1cmZhY2VUYXJnZXQgPSB0aGlzLmNvbnRleHQuY3JlYXRlUmVuZGVyVGFyZ2V0KCk7XG4gICAgdGhpcy5zcGVjdWxhclRhcmdldCA9IHRoaXMuY29udGV4dC5jcmVhdGVSZW5kZXJUYXJnZXQoKTtcbiAgICB0aGlzLmxpZ2h0VGV4dHVyZXMgPSBuZXcgTWFwKCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWQgYW4gaW1hZ2UgdG8gb25lIG9mIHRoZSBzaGFyZWQgdGV4dHVyZXNcbiAgICovXG4gIHByaXZhdGUgdXBsb2FkKFxuICAgIHVuaXQ6IEV4Y2x1ZGU8VGV4dHVyZVVuaXQsIFRleHR1cmVVbml0LlN1cmZhY2VNYXA+LFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuY29udGV4dC51cGxvYWQodW5pdCwgdGhpcy50ZXh0dXJlc1t1bml0XSwgaW1hZ2UsIGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGxpZ2h0J3MgZ3JhZGllbnQsIHVwbG9hZGluZyBpdCBpZiBpdCBoYXMgY2hhbmdlZFxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kTGlnaHQoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgbGlnaHQ6IExpZ2h0LCBmaWx0ZXI6IG51bWJlcikge1xuICAgIGxldCBjYWNoZWQgPSB0aGlzLmxpZ2h0VGV4dHVyZXMuZ2V0KGxpZ2h0KTtcbiAgICBpZiAoIWNhY2hlZCkge1xuICAgICAgY2FjaGVkID0geyB0ZXh0dXJlOiBnbC5jcmVhdGVUZXh0dXJlKCkhLCB2ZXJzaW9uOiAtMSB9O1xuICAgICAgdGhpcy5saWdodFRleHR1cmVzLnNldChsaWdodCwgY2FjaGVkKTtcbiAgICB9XG5cbiAgICBpZiAoY2FjaGVkLnZlcnNpb24gPT09IGxpZ2h0LmxpZ2h0TWFwVmVyc2lvbikge1xuICAgICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRleHR1cmVVbml0LkxpZ2h0TWFwLCBjYWNoZWQudGV4dHVyZSwgZmlsdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZChcbiAgICAgICAgVGV4dHVyZVVuaXQuTGlnaHRNYXAsXG4gICAgICAgIGNhY2hlZC50ZXh0dXJlLFxuICAgICAgICBsaWdodC5saWdodENhbnZhcyxcbiAgICAgICAgZmlsdGVyXG4gICAgICApO1xuICAgICAgY2FjaGVkLnZlcnNpb24gPSBsaWdodC5saWdodE1hcFZlcnNpb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcmdldCBhYm91dCB0ZXh0dXJlcyBmb3IgbGlnaHRzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICovXG4gIHByaXZhdGUgcmVsZWFzZUxpZ2h0cyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBsaWdodHM6IFNldDxMaWdodD4pIHtcbiAgICB0aGlzLmxpZ2h0VGV4dHVyZXMuZm9yRWFjaCgoeyB0ZXh0dXJlIH0sIGxpZ2h0KSA9PiB7XG4gICAgICBpZiAoIWxpZ2h0cy5oYXMobGlnaHQpKSB7XG4gICAgICAgIGdsLmRlbGV0ZVRleHR1cmUodGV4dHVyZSk7XG4gICAgICAgIHRoaXMubGlnaHRUZXh0dXJlcy5kZWxldGUobGlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSB0aGUgb3V0cHV0IGFuZCB0aGUgcmVuZGVyIHRhcmdldHMgbWF0Y2ggdGhlIHNjcmVlbiBzaXplXG4gICAqL1xuICBwcml2YXRlIHJlc2l6ZShzY3JlZW46IHZlYzIpIHtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplKHNjcmVlbik7XG4gICAgdGhpcy5jb250ZXh0LnJlc2l6ZVRhcmdldCh0aGlzLnN1cmZhY2VUYXJnZXQsIHNjcmVlbik7XG4gICAgdGhpcy5jb250ZXh0LnJlc2l6ZVRhcmdldCh0aGlzLnNwZWN1bGFyVGFyZ2V0LCBzY3JlZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGF0IHdlIG5lZWQgdG8gd3JpdGUgdG8gdGhlIHN1cmZhY2UgbWFwIGZvciBhIHN1cmZhY2VcbiAgICovXG4gIHByaXZhdGUgc3VyZmFjZVZhbHVlKHN1cmZhY2U6IFN1cmZhY2U8YW55Piwgc2NlbmU6IFNoYWRlclNjZW5lKTogbnVtYmVyW10ge1xuICAgIGlmIChzdXJmYWNlIGluc3RhbmNlb2YgR3JvdW5kUmVjZWl2ZXIpIHtcbiAgICAgIHJldHVybiBbMCwgMCwgMCwgU3VyZmFjZVR5cGUuR3JvdW5kXTtcbiAgICB9XG5cbiAgICBjb25zdCB3YWxsID0gc3VyZmFjZSBhcyBXYWxsUmVjZWl2ZXI7XG5cbiAgICBsZXQgdHlwZSA9IFN1cmZhY2VUeXBlLlVubGl0O1xuICAgIGlmICh3YWxsLnJlY2VpdmVMaWdodCkge1xuICAgICAgdHlwZSA9IHdhbGwucHJvamVjdFNoYWRvd3NcbiAgICAgICAgPyBTdXJmYWNlVHlwZS5Qcm9qZWN0ZWRXYWxsXG4gICAgICAgIDogU3VyZmFjZVR5cGUuRmxhdFdhbGw7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvb3QgcG9zaXRpb24gaXMgc3RvcmVkIHJlbGF0aXZlIHRvIHRoZSB0b3Agb2YgdGhlIGNhbWVyYSdzIHZpZXdcbiAgICBjb25zdCBmb290ID0gTWF0aC5yb3VuZChcbiAgICAgICh3YWxsLnBvc2l0aW9uLnkgKyB3YWxsLnNpemUueSAtIHNjZW5lLmNhbWVyYS5ib3VuZHMudG9wKSAqXG4gICAgICAgIFNoYWRlclBhc3MuRk9PVF9TQ0FMRVxuICAgICk7XG4gICAgY29uc3QgY2xhbXBlZEZvb3QgPSBNYXRoLm1pbihNYXRoLm1heChmb290LCAwKSwgU2hhZGVyUGFzcy5GT09UX01BWCk7XG4gICAgY29uc3QgYmlhcyA9IE1hdGgubWluKHdhbGwuc2hhZG93QmlhcywgU2hhZGVyUGFzcy5NQVhfU0hBRE9XX0JJQVMpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIE1hdGguZmxvb3IoY2xhbXBlZEZvb3QgLyAyNTYpIC8gMjU1LFxuICAgICAgKGNsYW1wZWRGb290ICUgMjU2KSAvIDI1NSxcbiAgICAgIE1hdGgucm91bmQoYmlhcykgLyAyNTUsXG4gICAgICB0eXBlLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBlYWNoIHZpc2libGUgc3VyZmFjZSwgd3JpdGluZyBhIHZhbHVlIHRvIGFsbCBvZiB0aGUgc3VyZmFjZSdzIHBpeGVsc1xuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U3VyZmFjZXMoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmUsXG4gICAgZ2V0VmFsdWU6IChpdGVtOiBTaGFkZXJTdXJmYWNlKSA9PiBudW1iZXJbXVxuICApIHtcbiAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLm1hc2tQcm9ncmFtO1xuICAgIGNvbnN0IGZpbHRlciA9IHNjZW5lLmltYWdlU21vb3RoaW5nRW5hYmxlZCA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1Q7XG5cbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9tYXNrLCBHbENvbnRleHQuSU1BR0VfVU5JVCk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2NlbmUuc3VyZmFjZXMpIHtcbiAgICAgIGNvbnN0IHsgc3VyZmFjZSB9ID0gaXRlbTtcbiAgICAgIGNvbnN0IG1hc2sgPSBzdXJmYWNlLmdldE1hc2soKTtcbiAgICAgIGlmIChtYXNrID09PSBudWxsIHx8IHN1cmZhY2UudmlzaWJsZUhlaWdodCA8PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgbWFza1JlY3RhbmdsZSA9IFswLCAwLCAxLCAxXTtcbiAgICAgIGlmIChtYXNrICE9PSAnc29saWQnKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kSW1hZ2UobWFzaywgZmlsdGVyKTtcblxuICAgICAgICAvLyBSZXBlYXRlZCBpbWFnZXMgYXJlIGxpbmVkIHVwIHdpdGggdGhlIHdvcmxkLCB0aGUgc2FtZSBhcyBhIHBhdHRlcm5cbiAgICAgICAgaWYgKHN1cmZhY2UucmVwZWF0ICYmICFzdXJmYWNlLmN1c3RvbURyYXcubWFzaykge1xuICAgICAgICAgIG1hc2tSZWN0YW5nbGUgPSBbXG4gICAgICAgICAgICBzdXJmYWNlLnBvc2l0aW9uLnggLyBtYXNrLndpZHRoLFxuICAgICAgICAgICAgc3VyZmFjZS5wb3NpdGlvbi55IC8gbWFzay5oZWlnaHQsXG4gICAgICAgICAgICBzdXJmYWNlLnNpemUueCAvIG1hc2sud2lkdGgsXG4gICAgICAgICAgICBzdXJmYWNlLnNpemUueSAvIG1hc2suaGVpZ2h0LFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmlzaWJsZVNpemUgPSB2ZWMyKHN1cmZhY2Uuc2l6ZS54LCBzdXJmYWNlLnZpc2libGVIZWlnaHQpO1xuICAgICAgbWFza1JlY3RhbmdsZVszXSAqPSB2aXNpYmxlU2l6ZS55IC8gc3VyZmFjZS5zaXplLnk7XG5cbiAgICAgIGNvbnN0IHRvcExlZnQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihzdXJmYWNlLnBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICAgIHZlYzIuYWRkKHN1cmZhY2UucG9zaXRpb24sIHZpc2libGVTaXplKVxuICAgICAgKTtcblxuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTWFzaywgbWFzayA9PT0gJ3NvbGlkJyA/IDAgOiAxKTtcbiAgICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV92YWx1ZSwgZ2V0VmFsdWUoaXRlbSkpO1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdRdWFkKFxuICAgICAgICB0aGlzLm1hc2tQcm9ncmFtLFxuICAgICAgICBbXG4gICAgICAgICAgdG9wTGVmdC54LFxuICAgICAgICAgIHRvcExlZnQueSxcbiAgICAgICAgICBib3R0b21SaWdodC54IC0gdG9wTGVmdC54LFxuICAgICAgICAgIGJvdHRvbVJpZ2h0LnkgLSB0b3BMZWZ0LnksXG4gICAgICAgIF0sXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgbWFza1JlY3RhbmdsZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB1bmlmb3JtcyB0aGF0IGFyZSB0aGUgc2FtZSBmb3IgZXZlcnkgbGlnaHQgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIHNldFNjZW5lVW5pZm9ybXMoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICB7IHByb2dyYW0sIHVuaWZvcm1zIH06IEdsUHJvZ3JhbSxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmVcbiAgKSB7XG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9zY3JlZW4sIHNjZW5lLnNjcmVlbi54LCBzY2VuZS5zY3JlZW4ueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTm9ybWFsTWFwLCBzY2VuZS5ub3JtYWxNYXAgPyAxIDogMCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2FsbExpZ2h0aW5nWU9mZnNldCwgc2NlbmUud2FsbExpZ2h0aW5nWU9mZnNldCk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdW5pZm9ybXMudV93YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZSxcbiAgICAgIHNjZW5lLndhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB1bmlmb3Jtcy51X3dhbGxTaGFkb3dMZW5ndGhGYWN0b3IsXG4gICAgICBzY2VuZS53YWxsU2hhZG93TGVuZ3RoRmFjdG9yXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9iYW5kaW5nLCBzY2VuZS5iYW5kaW5nKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zY2VuZU5vcm1hbE1hcCwgVGV4dHVyZVVuaXQuTm9ybWFsTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zdXJmYWNlTWFwLCBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9saWdodE1hcCwgVGV4dHVyZVVuaXQuTGlnaHRNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3JlZ2lvblNoYWRvd01hcCwgVGV4dHVyZVVuaXQuUmVnaW9uU2hhZG93TWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9vYmplY3RTaGFkb3dNYXAsIFRleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB1bmlmb3JtcyBmb3IgYSBsaWdodCBhbmQgZHJhdyBpdHMgYm91bmRpbmcgYm94XG4gICAqL1xuICBwcml2YXRlIGRyYXdMaWdodChcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHByb2dyYW06IEdsUHJvZ3JhbSxcbiAgICBsaWdodDogTGlnaHQsXG4gICAgc2NlbmU6IFNoYWRlclNjZW5lXG4gICkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IGxpZ2h0LmJvdW5kcztcbiAgICBjb25zdCB0b3BMZWZ0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4ocG9zaXRpb24pO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4odmVjMi5hZGQocG9zaXRpb24sIHNpemUpKTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMWYocHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0UmFkaXVzLCBsaWdodC5yYWRpdXMpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRIZWlnaHQsIGxpZ2h0LmhlaWdodCk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgcHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0TWFwU2l6ZSxcbiAgICAgIGxpZ2h0LnJlZ2lvblNoYWRvd0NhbnZhcy53aWR0aFxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgcHJvZ3JhbS51bmlmb3Jtcy51X2Zvb3RPcmlnaW4sXG4gICAgICBzY2VuZS5jYW1lcmEuYm91bmRzLnRvcCAtIGxpZ2h0LnBvc2l0aW9uLnlcbiAgICApO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdRdWFkKFxuICAgICAgcHJvZ3JhbSxcbiAgICAgIFtcbiAgICAgICAgdG9wTGVmdC54LFxuICAgICAgICB0b3BMZWZ0LnksXG4gICAgICAgIGJvdHRvbVJpZ2h0LnggLSB0b3BMZWZ0LngsXG4gICAgICAgIGJvdHRvbVJpZ2h0LnkgLSB0b3BMZWZ0LnksXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBwb3NpdGlvbi54IC0gbGlnaHQucG9zaXRpb24ueCxcbiAgICAgICAgcG9zaXRpb24ueSAtIGxpZ2h0LnBvc2l0aW9uLnksXG4gICAgICAgIHNpemUueCxcbiAgICAgICAgc2l6ZS55LFxuICAgICAgXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzY2VuZSdzIGxpZ2h0IG1hcCBpbnRvIHRoZSBjYW52YXMsIGFuZCBhZGQgdXAgdGhlIHNjZW5lJ3NcbiAgICogc3BlY3VsYXIgaGlnaGxpZ2h0cyBpZiBpdCBoYXMgYSBzcGVjdWxhciBtYXBcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoc2NlbmU6IFNoYWRlclNjZW5lKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmICghZ2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZShzY2VuZS5zY3JlZW4pO1xuICAgIHRoaXMuY29udGV4dC5pbnZhbGlkYXRlQ2FudmFzZXMoKTtcblxuICAgIGNvbnN0IHN1cmZhY2VNYXBGaWx0ZXIgPVxuICAgICAgc2NlbmUuc3VyZmFjZU1hcEZpbHRlciA9PT0gJ2xpbmVhcicgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUO1xuXG4gICAgaWYgKHNjZW5lLm5vcm1hbE1hcCkge1xuICAgICAgdGhpcy51cGxvYWQoVGV4dHVyZVVuaXQuTm9ybWFsTWFwLCBzY2VuZS5ub3JtYWxNYXAsIHN1cmZhY2VNYXBGaWx0ZXIpO1xuICAgIH1cblxuICAgIC8vIEVhY2ggcGl4ZWwgb2YgdGhlIHN1cmZhY2UgbWFwIGJlbG9uZ3MgdG8gb25lIHN1cmZhY2UsIHNvIHRoZXJlJ3Mgbm9cbiAgICAvLyBibGVuZGluZyBhbmQgc3VyZmFjZXMgY292ZXIgd2hhdGV2ZXIncyB1bmRlcm5lYXRoIHRoZW1cbiAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMubWFza1Byb2dyYW0ucHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKFxuICAgICAgdGhpcy5tYXNrUHJvZ3JhbS51bmlmb3Jtcy51X3NjcmVlbixcbiAgICAgIHNjZW5lLnNjcmVlbi54LFxuICAgICAgc2NlbmUuc2NyZWVuLnlcbiAgICApO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnN1cmZhY2VUYXJnZXQuZnJhbWVidWZmZXIpO1xuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgU3VyZmFjZVR5cGUuTm9uZSk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgdGhpcy5kcmF3U3VyZmFjZXMoZ2wsIHNjZW5lLCAoeyBzdXJmYWNlIH0pID0+XG4gICAgICB0aGlzLnN1cmZhY2VWYWx1ZShzdXJmYWNlLCBzY2VuZSlcbiAgICApO1xuXG4gICAgLy8gU3RhcnQgdGhlIGxpZ2h0IG1hcCB3aXRoIHRoZSBhbWJpZW50IGxpZ2h0IG9uIGVhY2ggc3VyZmFjZVxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB0aGlzLmRyYXdTdXJmYWNlcyhnbCwgc2NlbmUsICh7IGFtYmllbnRMaWdodDogeyByLCBnLCBiLCBhIH0gfSkgPT4gW1xuICAgICAgciAvIDI1NSxcbiAgICAgIGcgLyAyNTUsXG4gICAgICBiIC8gMjU1LFxuICAgICAgYSxcbiAgICBdKTtcblxuICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShcbiAgICAgIFRleHR1cmVVbml0LlN1cmZhY2VNYXAsXG4gICAgICB0aGlzLnN1cmZhY2VUYXJnZXQudGV4dHVyZSxcbiAgICAgIGdsLk5FQVJFU1RcbiAgICApO1xuXG4gICAgdGhpcy5zZXRTY2VuZVVuaWZvcm1zKGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBzY2VuZSk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdGhpcy5kaWZmdXNlUHJvZ3JhbS51bmlmb3Jtcy51X2hpZ2hsaWdodFN0cmVuZ3RoLFxuICAgICAgc2NlbmUuaGlnaGxpZ2h0U3RyZW5ndGhcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHRoaXMuZGlmZnVzZVByb2dyYW0udW5pZm9ybXMudV9zaGFkb3dTdHJlbmd0aCxcbiAgICAgIHNjZW5lLnNoYWRvd1N0cmVuZ3RoXG4gICAgKTtcblxuICAgIGlmIChzY2VuZS5zcGVjdWxhck1hcCkge1xuICAgICAgdGhpcy51cGxvYWQoVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXAsIHNjZW5lLnNwZWN1bGFyTWFwLCBzdXJmYWNlTWFwRmlsdGVyKTtcblxuICAgICAgY29uc3QgeyB1bmlmb3JtcyB9ID0gdGhpcy5zcGVjdWxhclByb2dyYW07XG4gICAgICB0aGlzLnNldFNjZW5lVW5pZm9ybXMoZ2wsIHRoaXMuc3BlY3VsYXJQcm9ncmFtLCBzY2VuZSk7XG4gICAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zY2VuZVNwZWN1bGFyTWFwLCBUZXh0dXJlVW5pdC5TcGVjdWxhck1hcCk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zcGVjdWxhclN0cmVuZ3RoLCBzY2VuZS5zcGVjdWxhclN0cmVuZ3RoKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3NoaW5pbmVzcywgc2NlbmUuc2hpbmluZXNzKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3ZpZXdUaWx0LCBzY2VuZS52aWV3VGlsdCk7XG5cbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zcGVjdWxhclRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyID0gc2NlbmUuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIHRoaXMucmVsZWFzZUxpZ2h0cyhnbCwgbmV3IFNldChzY2VuZS5hbGxMaWdodHMpKTtcblxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgZm9yIChjb25zdCBsaWdodCBvZiBzY2VuZS5saWdodHMpIHtcbiAgICAgIHRoaXMuYmluZExpZ2h0KGdsLCBsaWdodCwgZmlsdGVyKTtcbiAgICAgIHRoaXMudXBsb2FkKFxuICAgICAgICBUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXAsXG4gICAgICAgIGxpZ2h0LnJlZ2lvblNoYWRvd0NhbnZhcyxcbiAgICAgICAgZmlsdGVyXG4gICAgICApO1xuICAgICAgdGhpcy51cGxvYWQoXG4gICAgICAgIFRleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcCxcbiAgICAgICAgbGlnaHQub2JqZWN0U2hhZG93Q2FudmFzLFxuICAgICAgICBmaWx0ZXJcbiAgICAgICk7XG5cbiAgICAgIC8vIEJsZW5kIHRoZSBzYW1lIHdheSBhcyB0aGUgJ3NjcmVlbicgY29tcG9zaXRlIG9wZXJhdGlvbiwgYW5kIGxlYXZlIHRoZVxuICAgICAgLy8gYWxwaGEgY2hhbm5lbCBhbG9uZVxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLk9ORSwgZ2wuT05FX01JTlVTX1NSQ19DT0xPUiwgZ2wuWkVSTywgZ2wuT05FKTtcbiAgICAgIHRoaXMuZHJhd0xpZ2h0KGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBsaWdodCwgc2NlbmUpO1xuXG4gICAgICBpZiAoc2NlbmUuc3BlY3VsYXJNYXApIHtcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnNwZWN1bGFyVGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICAgICAgZ2wuYmxlbmRGdW5jU2VwYXJhdGUoZ2wuT05FLCBnbC5PTkUsIGdsLlpFUk8sIGdsLk9ORSk7XG4gICAgICAgIHRoaXMuZHJhd0xpZ2h0KGdsLCB0aGlzLnNwZWN1bGFyUHJvZ3JhbSwgbGlnaHQsIHNjZW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgc3BlY3VsYXIgaGlnaGxpZ2h0cyBmcm9tIHRoZVxuICAgKiBtb3N0IHJlY2VudCByZW5kZXJcbiAgICovXG4gIHB1YmxpYyBzaG93U3BlY3VsYXIoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nbCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdUZXh0dXJlKHRoaXMuc3BlY3VsYXJUYXJnZXQudGV4dHVyZSwgc2NyZWVuKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY29udGVudHMgb2YgdGhlIGNhbnZhcyB3aXRoIHRoZSBzdXJmYWNlIG1hcCBmcm9tIHRoZSBtb3N0XG4gICAqIHJlY2VudCByZW5kZXJcbiAgICovXG4gIHB1YmxpYyBzaG93U3VyZmFjZXMoc2NyZWVuOiB2ZWMyKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nbCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdUZXh0dXJlKHRoaXMuc3VyZmFjZVRhcmdldC50ZXh0dXJlLCBzY3JlZW4pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBib3VuZGluZ1JlY3RhbmdsZSwgZHJhd0ltYWdlSW5SZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7IHRpbnRlZEltYWdlIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG50eXBlIERyYXdDYWxsYmFjayA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFN1cmZhY2VPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogT3B0aW9uYWwgYmFja2dyb3VuZCBjb2xvdXJcbiAgICovXG4gIGNvbG91cj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGltYWdlIGZvciB0aGlzIHN1cmZhY2VcbiAgICovXG4gIGltYWdlPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIG5vcm1hbCBtYXAsIHVzZWQgd2hlbiB0aGUgc2hhZGVyIGlzIGVuYWJsZWRcbiAgICovXG4gIG5vcm1hbE1hcD86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBzcGVjdWxhciBtYXAsIHVzZWQgd2hlbiB0aGUgc2hhZGVyIGlzIGVuYWJsZWRcbiAgICovXG4gIHNwZWN1bGFyTWFwPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFN1cmZhY2VzIGFyZSBkcmF3biBpbiBvcmRlciBvZiB6LWluZGV4IGFuZCB0aGVuIGJ5IHRoZWlyIGJvdHRvbSBlZGdlXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYW55IG9mIHRoZSBkZWZhdWx0IGRyYXdpbmcgc3RlcHMgZm9yIHRoaXMgc3VyZmFjZSwgZm9yIG9iamVjdHNcbiAgICogdGhhdCBhcmVuJ3QgYSBzaW5nbGUgaW1hZ2VcbiAgICovXG4gIGN1c3RvbURyYXc/OiB7XG4gICAgaW1hZ2U/OiBEcmF3Q2FsbGJhY2s7XG4gICAgbWFzaz86IERyYXdDYWxsYmFjaztcbiAgICBub3JtYWxNYXA/OiBEcmF3Q2FsbGJhY2s7XG4gICAgc3BlY3VsYXJNYXA/OiBEcmF3Q2FsbGJhY2s7XG4gIH07XG59O1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBzaGFkb3dzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdXJmYWNlPFxuICBPcHRpb25zIGV4dGVuZHMgU3VyZmFjZU9wdGlvbnNcbj4gZXh0ZW5kcyBTY2VuZU9iamVjdDxPcHRpb25zPiB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9NQVBfREVGQVVMVF9DT0xPVVIgPSAnIzdmN2ZmZic7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNQRUNVTEFSX01BUF9ERUZBVUxUX0NPTE9VUiA9ICdibGFjayc7XG5cbiAgcHVibGljIGNvbG91cjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBpbWFnZTogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgbm9ybWFsTWFwOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBzcGVjdWxhck1hcDogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgekluZGV4OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY3VzdG9tRHJhdzogTm9uTnVsbGFibGU8U3VyZmFjZU9wdGlvbnNbJ2N1c3RvbURyYXcnXT4gPSB7fTtcblxuICAvKipcbiAgICogV29ybGQgeS1wb3NpdGlvbiB3aGVyZSB0aGlzIHN1cmZhY2Ugc3RvcHMsIG9yIG51bGwgdG8gc2hvdyBhbGwgb2YgaXRcbiAgICpcbiAgICogVGhlIHJlc3Qgb2YgdGhlIHN1cmZhY2UgaXMgaGlkZGVuIGFuZCBkb2Vzbid0IHJlY2VpdmUgYW55IGxpZ2h0aW5nLCB0aGlzIGlzXG4gICAqIHVzZWZ1bCBmb3Igc29tZXRoaW5nIHRoYXQncyBzdGFuZGluZyBpbiB3YXRlclxuICAgKi9cbiAgcHVibGljIGNsaXBCb3R0b206IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIHByb3RlY3RlZCBvdmVybGF5czogRHJhd0NhbGxiYWNrW10gPSBbXTtcblxuICBwcml2YXRlIGN1c3RvbU1hc2tDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIGltYWdlcyBiZSByZXBlYXRlZCBhY3Jvc3MgdGhpcyBzdXJmYWNlLCBvciBzdHJldGNoZWQgdG8gZml0P1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHJlcGVhdDogYm9vbGVhbjtcblxuICAvKipcbiAgICogR2V0IHRoZSBpbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hpY2ggcGFydHMgb2YgdGhpcyBzdXJmYWNlXG4gICAqIHJlY2VpdmUgbGlnaHRpbmdcbiAgICpcbiAgICogUmV0dXJucyAnc29saWQnIGlmIHRoZSB3aG9sZSBzdXJmYWNlIHJlY2VpdmVzIGxpZ2h0aW5nLCBvciBudWxsIGlmIG5vdGhpbmdcbiAgICogZG9lcyAoZm9yIGV4YW1wbGUgaWYgdGhlIGltYWdlIGhhc24ndCBsb2FkZWQgeWV0KVxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGdldE1hc2soKTogU2NlbmVJbWFnZSB8ICdzb2xpZCcgfCBudWxsO1xuXG4gIHByaXZhdGUgZmlsbEJhY2tncm91bmQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvdXI6IHN0cmluZykge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3VyO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUueCxcbiAgICAgIHRoaXMuc2l6ZS55XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkcmF3SW1hZ2UoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBpbWFnZTogU2NlbmVJbWFnZSkge1xuICAgIGRyYXdJbWFnZUluUmVjdGFuZ2xlKGNvbnRleHQsIGltYWdlLCB0aGlzLCB0aGlzLnJlcGVhdCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHNvbWV0aGluZyB0byBiZSBkcmF3biBvbiB0b3Agb2YgdGhpcyBzdXJmYWNlLCBpdCdzIGRyYXduIHN0cmFpZ2h0IGFmdGVyXG4gICAqIHRoZSBzdXJmYWNlIHNvIHRoYXQgYW55dGhpbmcgaW4gZnJvbnQgb2YgdGhlIHN1cmZhY2Ugd2lsbCBjb3ZlciBpdFxuICAgKlxuICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2ggcmVtb3ZlcyB0aGUgb3ZlcmxheS4gT3ZlcmxheXMgZG9uJ3QgY2hhbmdlIHRoZVxuICAgKiBzaGFwZSBvZiB0aGUgc3VyZmFjZSwgYW5kIHN1cmZhY2VzIHdpdGggb3ZlcmxheXMgY2FuJ3QgYmUgbWVyZ2VkXG4gICAqL1xuICBwdWJsaWMgYWRkT3ZlcmxheShkcmF3OiBEcmF3Q2FsbGJhY2spOiAoKSA9PiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlzLnB1c2goZHJhdyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5vdmVybGF5cyA9IHRoaXMub3ZlcmxheXMuZmlsdGVyKG92ZXJsYXkgPT4gb3ZlcmxheSAhPT0gZHJhdyk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd0NvbnRlbnQoY29udGV4dCk7XG4gICAgdGhpcy5vdmVybGF5cy5mb3JFYWNoKG92ZXJsYXkgPT4gb3ZlcmxheShjb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgcGFydCBvZiB0aGlzIHN1cmZhY2UgYWJvdmUgYGNsaXBCb3R0b21gXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZpc2libGVIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jbGlwQm90dG9tID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplLnk7XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jbGlwQm90dG9tIC0gdGhpcy5wb3NpdGlvbi55O1xuXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGhlaWdodCwgMCksIHRoaXMuc2l6ZS55KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgZHJhd2luZyBmdW5jdGlvbiwga2VlcGluZyBpdCBpbnNpZGUgdGhlIHZpc2libGUgcGFydCBvZiB0aGlzIHN1cmZhY2VcbiAgICovXG4gIHByaXZhdGUgZHJhd1Zpc2libGUoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBkcmF3OiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMuY2xpcEJvdHRvbSA9PT0gbnVsbCkge1xuICAgICAgZHJhdygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnZpc2libGVIZWlnaHRcbiAgICApO1xuICAgIGNvbnRleHQuY2xpcCgpO1xuICAgIGRyYXcoKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgc3VyZmFjZSB3aXRob3V0IGl0cyBvdmVybGF5c1xuICAgKi9cbiAgcHVibGljIGRyYXdDb250ZW50KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd1Zpc2libGUoY29udGV4dCwgKCkgPT4gdGhpcy5kcmF3V2hvbGVTdXJmYWNlKGNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBwYXJ0IG9mIHRoaXMgc3VyZmFjZSB0aGF0J3MgaGlkZGVuIGJ5IGBjbGlwQm90dG9tYFxuICAgKi9cbiAgcHVibGljIGRyYXdIaWRkZW4oY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY2xpcEJvdHRvbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnZpc2libGVIZWlnaHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdCh4LCB5ICsgaGVpZ2h0LCB0aGlzLnNpemUueCwgdGhpcy5zaXplLnkgLSBoZWlnaHQpO1xuICAgIGNvbnRleHQuY2xpcCgpO1xuICAgIHRoaXMuZHJhd1dob2xlU3VyZmFjZShjb250ZXh0KTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1dob2xlU3VyZmFjZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3LmltYWdlKSB7XG4gICAgICB0aGlzLmN1c3RvbURyYXcuaW1hZ2UoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBpZiAodGhpcy5jb2xvdXIpIHtcbiAgICAgIHRoaXMuZmlsbEJhY2tncm91bmQoY29udGV4dCwgdGhpcy5jb2xvdXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICB0aGlzLmRyYXdJbWFnZShjb250ZXh0LCB0aGlzLmltYWdlKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkcmF3Q29sb3VyTWFwKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBpbWFnZTogU2NlbmVJbWFnZSB8IG51bGwsXG4gICAgZGVmYXVsdENvbG91cjogc3RyaW5nXG4gICkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgaWYgKGltYWdlKSB7XG4gICAgICB0aGlzLmRyYXdJbWFnZShjb250ZXh0LCBpbWFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsbFNoYXBlKGNvbnRleHQsIGRlZmF1bHRDb2xvdXIpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGwgdGhlIHNoYXBlIG9mIHRoaXMgc3VyZmFjZSB3aXRoIGEgY29sb3VyLCBzbyB0aGF0IGEgc3ByaXRlIGRvZXNuJ3RcbiAgICogY292ZXIgdGhlIG5vcm1hbCBtYXAgb3Igc3BlY3VsYXIgbWFwIG9mIHdoYXRldmVyJ3MgYmVoaW5kIGl0XG4gICAqL1xuICBwcml2YXRlIGZpbGxTaGFwZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG91cjogc3RyaW5nKSB7XG4gICAgY29uc3QgbWFzayA9IHRoaXMuY3VzdG9tRHJhdy5tYXNrID8gJ3NvbGlkJyA6IHRoaXMuZ2V0TWFzaygpO1xuXG4gICAgaWYgKG1hc2sgPT09ICdzb2xpZCcpIHtcbiAgICAgIHRoaXMuZmlsbEJhY2tncm91bmQoY29udGV4dCwgY29sb3VyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFwZSA9IG1hc2sgJiYgdGludGVkSW1hZ2UobWFzaywgY29sb3VyKTtcbiAgICBpZiAoc2hhcGUpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIHNoYXBlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZHJhd05vcm1hbE1hcChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmRyYXdWaXNpYmxlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmN1c3RvbURyYXcubm9ybWFsTWFwKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tRHJhdy5ub3JtYWxNYXAoY29udGV4dCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmF3Q29sb3VyTWFwKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB0aGlzLm5vcm1hbE1hcCxcbiAgICAgICAgU3VyZmFjZS5OT1JNQUxfTUFQX0RFRkFVTFRfQ09MT1VSXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRyYXdTcGVjdWxhck1hcChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmRyYXdWaXNpYmxlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmN1c3RvbURyYXcuc3BlY3VsYXJNYXApIHtcbiAgICAgICAgdGhpcy5jdXN0b21EcmF3LnNwZWN1bGFyTWFwKGNvbnRleHQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhd0NvbG91ck1hcChcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgdGhpcy5zcGVjdWxhck1hcCxcbiAgICAgICAgU3VyZmFjZS5TUEVDVUxBUl9NQVBfREVGQVVMVF9DT0xPVVJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgY3VzdG9tIG1hc2ssIHJlbGF0aXZlIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGlzIHN1cmZhY2VcbiAgICovXG4gIHByb3RlY3RlZCByZW5kZXJDdXN0b21NYXNrKGRyYXc6IERyYXdDYWxsYmFjayk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICB0aGlzLmN1c3RvbU1hc2tDb250ZXh0ID8/PSBkb2N1bWVudFxuICAgICAgLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jdXN0b21NYXNrQ29udGV4dDtcbiAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IE1hdGguY2VpbCh0aGlzLnNpemUueCk7XG4gICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gTWF0aC5jZWlsKHRoaXMuc2l6ZS55KTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSgtdGhpcy5wb3NpdGlvbi54LCAtdGhpcy5wb3NpdGlvbi55KTtcbiAgICBkcmF3KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRleHQuY2FudmFzO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdyb3VuZFJlY2VpdmVyT3B0aW9ucyA9IFN1cmZhY2VPcHRpb25zO1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIG9mIGdyb3VuZCB0aGF0IHJlY2VpdmVzIGdyb3VuZCBzaGFkb3dzXG4gKlxuICogSW1hZ2VzIGFyZSByZXBlYXRlZCBhY3Jvc3MgdGhlIHJlY3RhbmdsZVxuICovXG5leHBvcnQgY2xhc3MgR3JvdW5kUmVjZWl2ZXIgZXh0ZW5kcyBTdXJmYWNlPEdyb3VuZFJlY2VpdmVyT3B0aW9ucz4ge1xuICBwdWJsaWMgcmVwZWF0ID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBHcm91bmRSZWNlaXZlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFzaygpOiBTY2VuZUltYWdlIHwgJ3NvbGlkJyB8IG51bGwge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcubWFzaykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ3VzdG9tTWFzayh0aGlzLmN1c3RvbURyYXcubWFzayk7XG4gICAgfVxuXG4gICAgcmV0dXJuICdzb2xpZCc7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV2FsbFJlY2VpdmVyT3B0aW9ucyA9IFN1cmZhY2VPcHRpb25zICYge1xuICAvKipcbiAgICogSW1hZ2Ugd2hvc2UgYWxwaGEgY2hhbm5lbCBkZWNpZGVzIHdoaWNoIHBhcnRzIG9mIHRoaXMgc3VyZmFjZSByZWNlaXZlXG4gICAqIGxpZ2h0aW5nLCB0aGUgZGVmYXVsdCBpcyB0aGUgYWxwaGEgY2hhbm5lbCBvZiBgaW1hZ2VgXG4gICAqL1xuICBtYXNrPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGUgaW1hZ2UgYmUgcmVwZWF0ZWQgYWNyb3NzIHRoZSBzdXJmYWNlPyBPdGhlcndpc2UgaXQgd2lsbCBiZVxuICAgKiBzdHJldGNoZWQgdG8gZml0XG4gICAqL1xuICByZXBlYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byBmYWxzZSBpZiB0aGlzIHN1cmZhY2Ugc2hvdWxkIG9ubHkgcmVjZWl2ZSBhbWJpZW50IGxpZ2h0ICh0aGlzXG4gICAqIGlzIHVzZWZ1bCBmb3IgdGhlIHRvcHMgb2Ygd2FsbHMpXG4gICAqL1xuICByZWNlaXZlTGlnaHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhhdCB0aGlzIHN1cmZhY2UgaXMgZmFjaW5nLCBmb3IgYW1iaWVudCBsaWdodGluZ1xuICAgKi9cbiAgc3VyZmFjZU5vcm1hbD86IHZlYzI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdG93YXJkcyB0aGUgbGlnaHQgdG8gbG9vayBmb3Igc2hhZG93cyBvbiB0aGUgZ3JvdW5kLCBpbiB3b3JsZFxuICAgKiB1bml0cy4gVGhpcyBzaG91bGQgYmUgZW5vdWdoIHRvIGdldCBvdXQgb2YgdGhlIHN1cmZhY2UncyBvd24gc2hhZG93XG4gICAqL1xuICBzaGFkb3dCaWFzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGFuZCBjaXJjbGUgc2hhZG93cyBjbGltYiB0aGlzIHN1cmZhY2U/IFRoaXMgc2hvdWxkIGJlIGZhbHNlXG4gICAqIGZvciBhbnl0aGluZyB0aGF0IGNhc3RzIG9uZSBvZiB0aGVzZSBzaGFkb3dzLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBpbiBpdHNcbiAgICogb3duIHNoYWRvd1xuICAgKi9cbiAgcHJvamVjdFNoYWRvd3M/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSBvciBzcHJpdGUgdGhhdCByZWNlaXZlcyB3YWxsIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGxSZWNlaXZlciBleHRlbmRzIFN1cmZhY2U8V2FsbFJlY2VpdmVyT3B0aW9ucz4ge1xuICBwdWJsaWMgbWFzazogU2NlbmVJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgcmVwZWF0ID0gZmFsc2U7XG4gIHB1YmxpYyByZWNlaXZlTGlnaHQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc3VyZmFjZU5vcm1hbDogdmVjMiA9IHZlYzIoKTtcbiAgcHVibGljIHNoYWRvd0JpYXM6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBwcm9qZWN0U2hhZG93czogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogV2FsbFJlY2VpdmVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXNrKCk6IFNjZW5lSW1hZ2UgfCAnc29saWQnIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDdXN0b21NYXNrKHRoaXMuY3VzdG9tRHJhdy5tYXNrKTtcbiAgICB9XG5cbiAgICAvLyBBIGJhY2tncm91bmQgY29sb3VyIGNvdmVycyB0aGUgd2hvbGUgc3VyZmFjZVxuICAgIGlmICh0aGlzLmNvbG91cikge1xuICAgICAgcmV0dXJuICdzb2xpZCc7XG4gICAgfVxuXG4gICAgY29uc3QgbWFzayA9IHRoaXMubWFzayA/PyB0aGlzLmltYWdlO1xuXG4gICAgcmV0dXJuIG1hc2sgJiYgbWFzay53aWR0aCA+IDAgJiYgbWFzay5oZWlnaHQgPiAwID8gbWFzayA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyBzdXJmYWNlIGNhbiBiZSBtZXJnZWQgd2l0aCBhbm90aGVyIHN1cmZhY2VcbiAgICovXG4gIHB1YmxpYyBjYW5NZXJnZShvdGhlcjogV2FsbFJlY2VpdmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaGFzSW1hZ2VzID1cbiAgICAgIHRoaXMuaW1hZ2UgfHwgdGhpcy5tYXNrIHx8IHRoaXMubm9ybWFsTWFwIHx8IHRoaXMuc3BlY3VsYXJNYXA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tZXJnZWFibGUgJiZcbiAgICAgIG90aGVyLm1lcmdlYWJsZSAmJlxuICAgICAgdGhpcy5vdmVybGF5cy5sZW5ndGggPT09IDAgJiZcbiAgICAgIG90aGVyLm92ZXJsYXlzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgLy8gTm9uLXJlcGVhdGluZyBpbWFnZXMgd291bGQgc3RyZXRjaCBhY3Jvc3MgdGhlIG1lcmdlZCBzdXJmYWNlXG4gICAgICAodGhpcy5yZXBlYXQgfHwgIWhhc0ltYWdlcykgJiZcbiAgICAgIHRoaXMuekluZGV4ID09PSBvdGhlci56SW5kZXggJiZcbiAgICAgIHRoaXMuY29sb3VyID09PSBvdGhlci5jb2xvdXIgJiZcbiAgICAgIHRoaXMuaW1hZ2UgPT09IG90aGVyLmltYWdlICYmXG4gICAgICB0aGlzLm1hc2sgPT09IG90aGVyLm1hc2sgJiZcbiAgICAgIHRoaXMubm9ybWFsTWFwID09PSBvdGhlci5ub3JtYWxNYXAgJiZcbiAgICAgIHRoaXMuc3BlY3VsYXJNYXAgPT09IG90aGVyLnNwZWN1bGFyTWFwICYmXG4gICAgICB0aGlzLnJlcGVhdCA9PT0gb3RoZXIucmVwZWF0ICYmXG4gICAgICB0aGlzLnJlY2VpdmVMaWdodCA9PT0gb3RoZXIucmVjZWl2ZUxpZ2h0ICYmXG4gICAgICB2ZWMyLmVxKHRoaXMuc3VyZmFjZU5vcm1hbCwgb3RoZXIuc3VyZmFjZU5vcm1hbCkgJiZcbiAgICAgIHRoaXMuc2hhZG93QmlhcyA9PT0gb3RoZXIuc2hhZG93QmlhcyAmJlxuICAgICAgdGhpcy5wcm9qZWN0U2hhZG93cyA9PT0gb3RoZXIucHJvamVjdFNoYWRvd3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBzdXJmYWNlIHRoYXQgY292ZXJzIHRoaXMgc3VyZmFjZSBhbmQgYW5vdGhlciBzdXJmYWNlXG4gICAqL1xuICBwdWJsaWMgbWVyZ2Uob3RoZXI6IFdhbGxSZWNlaXZlcik6IFdhbGxSZWNlaXZlciB7XG4gICAgcmV0dXJuIG5ldyBXYWxsUmVjZWl2ZXIodGhpcy5saWdodGluZywge1xuICAgICAgLi4uKHRoaXMgYXMgV2FsbFJlY2VpdmVyKSxcbiAgICAgIC4uLmJvdW5kaW5nUmVjdGFuZ2xlKHRoaXMsIG90aGVyKSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFJlZ2lvbkNhc3RlciB9IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFdhbGxSZWNlaXZlciwgV2FsbFJlY2VpdmVyT3B0aW9ucyB9IGZyb20gJy4vU3VyZmFjZSc7XG5cbmV4cG9ydCB0eXBlIFdhbGxPcHRpb25zID0gT21pdDxcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbiAgJ3Bvc2l0aW9uJyB8ICdzaXplJyB8ICdyZWNlaXZlTGlnaHQnXG4+ICYge1xuICAvKipcbiAgICogVGhlIGFyZWEgb2YgdGhlIGdyb3VuZCB0aGF0IHRoaXMgd2FsbCBzdGFuZHMgb25cbiAgICovXG4gIGZvb3RwcmludDogUmVjdGFuZ2xlO1xuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB3YWxsJ3MgZnJvbnQgZmFjZVxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzaGFkb3dzIGluY2x1ZGUgdGhlIHdhbGwncyBmb290cHJpbnQ/XG4gICAqL1xuICBpbmNsdWRlUmVnaW9uU2hhZG93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQXBwZWFyYW5jZSBvZiB0aGUgdG9wIG9mIHRoZSB3YWxsLCBpdCBvbmx5IHJlY2VpdmVzIGFtYmllbnQgbGlnaHRcbiAgICovXG4gIHRvcD86IHtcbiAgICBjb2xvdXI/OiBzdHJpbmc7XG4gICAgaW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qKlxuICogQSBzb2xpZCB3YWxsIGluIGEgMy80IHZpZXdcbiAqXG4gKiBUaGlzIGlzIG1hZGUgZnJvbSBhIGZyb250IGZhY2UgdGhhdCByZWNlaXZlcyBsaWdodCwgYSB0b3AgdGhhdCBvbmx5IHJlY2VpdmVzXG4gKiBhbWJpZW50IGxpZ2h0LCBhbmQgYSBmb290cHJpbnQgdGhhdCBjYXN0cyBzaGFkb3dzXG4gKi9cbmV4cG9ydCBjbGFzcyBXYWxsIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9UT1BfQ09MT1VSID0gJ2JsYWNrJztcblxuICBwdWJsaWMgcmVhZG9ubHkgZnJvbnQ6IFdhbGxSZWNlaXZlcjtcbiAgcHVibGljIHJlYWRvbmx5IHRvcDogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgY2FzdGVyOiBSZWdpb25DYXN0ZXI7XG5cbiAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBXYWxsT3B0aW9ucykge1xuICAgIGNvbnN0IHsgZm9vdHByaW50LCBoZWlnaHQsIGluY2x1ZGVSZWdpb25TaGFkb3csIHRvcCwgLi4uZnJvbnQgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmNhc3RlciA9IGxpZ2h0aW5nLmFkZFJlZ2lvbkNhc3Rlcih7XG4gICAgICAuLi5mb290cHJpbnQsXG4gICAgICBtZXJnZWFibGU6IG9wdGlvbnMubWVyZ2VhYmxlLFxuICAgICAgaW5jbHVkZVJlZ2lvblNoYWRvdyxcbiAgICB9KTtcbiAgICB0aGlzLmZyb250ID0gbGlnaHRpbmcuYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgIC4uLmZyb250LFxuICAgICAgLi4udGhpcy5mcm9udFJlY3RhbmdsZShmb290cHJpbnQpLFxuICAgIH0pO1xuICAgIHRoaXMudG9wID0gbGlnaHRpbmcuYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgIHpJbmRleDogb3B0aW9ucy56SW5kZXgsXG4gICAgICBtZXJnZWFibGU6IG9wdGlvbnMubWVyZ2VhYmxlLFxuICAgICAgY29sb3VyOiB0b3A/LmNvbG91ciA/PyBXYWxsLkRFRkFVTFRfVE9QX0NPTE9VUixcbiAgICAgIGltYWdlOiB0b3A/LmltYWdlLFxuICAgICAgcmVjZWl2ZUxpZ2h0OiBmYWxzZSxcbiAgICAgIC4uLnRoaXMudG9wUmVjdGFuZ2xlKGZvb3RwcmludCksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZyb250UmVjdGFuZ2xlKGZvb3RwcmludDogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgICBjb25zdCBib3R0b20gPSBmb290cHJpbnQucG9zaXRpb24ueSArIGZvb3RwcmludC5zaXplLnk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIoZm9vdHByaW50LnBvc2l0aW9uLngsIGJvdHRvbSAtIHRoaXMuaGVpZ2h0KSxcbiAgICAgIHNpemU6IHZlYzIoZm9vdHByaW50LnNpemUueCwgdGhpcy5oZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHRvcFJlY3RhbmdsZShmb290cHJpbnQ6IFJlY3RhbmdsZSk6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKGZvb3RwcmludC5wb3NpdGlvbi54LCBmb290cHJpbnQucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0KSxcbiAgICAgIHNpemU6IGZvb3RwcmludC5zaXplLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIHdhbGwgc28gdGhhdCBpdHMgZm9vdHByaW50IGlzIGF0IGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgY29uc3QgZm9vdHByaW50ID0geyBwb3NpdGlvbiwgc2l6ZTogdGhpcy5jYXN0ZXIuc2l6ZSB9O1xuXG4gICAgdGhpcy5jYXN0ZXIubW92ZVRvKHBvc2l0aW9uKTtcbiAgICB0aGlzLmZyb250Lm1vdmVUbyh0aGlzLmZyb250UmVjdGFuZ2xlKGZvb3RwcmludCkucG9zaXRpb24pO1xuICAgIHRoaXMudG9wLm1vdmVUbyh0aGlzLnRvcFJlY3RhbmdsZShmb290cHJpbnQpLnBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyB3YWxsIGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLmZyb250LnJlbW92ZSgpO1xuICAgIHRoaXMudG9wLnJlbW92ZSgpO1xuICAgIHRoaXMuY2FzdGVyLnJlbW92ZSgpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHbENvbnRleHQgfSBmcm9tICcuLi9jb3JlJztcbmV4cG9ydCB0eXBlIHsgUmVjdGFuZ2xlLCBTY2VuZUNhbWVyYSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuZXhwb3J0IHsgQWN0b3IgfSBmcm9tICcuL0FjdG9yJztcbmV4cG9ydCB0eXBlIHsgQWN0b3JPcHRpb25zLCBBY3RvclNoYWRvdywgU3ByaXRlQWN0b3JPcHRpb25zIH0gZnJvbSAnLi9BY3Rvcic7XG5leHBvcnQgeyBDaXJjbGVDYXN0ZXIsIFJlZ2lvbkNhc3RlciwgU3ByaXRlQ2FzdGVyIH0gZnJvbSAnLi9DYXN0ZXInO1xuZXhwb3J0IHR5cGUge1xuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBSZWdpb25DYXN0ZXJPcHRpb25zLFxuICBTaGFkb3dDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmV4cG9ydCB7IExpZ2h0IH0gZnJvbSAnLi9MaWdodCc7XG5leHBvcnQgdHlwZSB7IExpZ2h0T3B0aW9ucyB9IGZyb20gJy4vTGlnaHQnO1xuZXhwb3J0IHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmV4cG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW1PcHRpb25zIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5leHBvcnQgeyBTY2VuZU9iamVjdCB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuZXhwb3J0IHR5cGUgeyBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmV4cG9ydCB7IEdyb3VuZFJlY2VpdmVyLCBTdXJmYWNlLCBXYWxsUmVjZWl2ZXIgfSBmcm9tICcuL1N1cmZhY2UnO1xuZXhwb3J0IHR5cGUge1xuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIFN1cmZhY2VPcHRpb25zLFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1N1cmZhY2UnO1xuZXhwb3J0IHsgV2FsbCB9IGZyb20gJy4vV2FsbCc7XG5leHBvcnQgdHlwZSB7IFdhbGxPcHRpb25zIH0gZnJvbSAnLi9XYWxsJztcbiIsImltcG9ydCB7IFJlY3RhbmdsZSwgcmVjdGFuZ2xlVG9JbnRlcnZhbCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgU2lkZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBNRVJHRV9NQVhfSVRFUkFUSU9OUyA9IDEwMDtcbmNvbnN0IE1FUkdFX09SREVSID0gWydkdXBsaWNhdGUnLCBTaWRlLkJvdHRvbSwgU2lkZS5SaWdodCwgU2lkZS5Ub3AsIFNpZGUuTGVmdF07XG5cbnR5cGUgTWVyZ2VhYmxlPFQ+ID0gUmVjdGFuZ2xlICYge1xuICBjYW5NZXJnZShvdGhlcjogVCk6IGJvb2xlYW47XG4gIG1lcmdlKG90aGVyOiBUKTogVDtcbn07XG5cbnR5cGUgTWVyZ2U8VD4gPSBbVCwgVCwgU2lkZSB8ICdkdXBsaWNhdGUnXTtcblxuLyoqXG4gKiBGaW5kIHBhaXJzIG9mIGl0ZW1zIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXIgYW5kIGNhbiBiZSBtZXJnZWRcbiAqL1xuZnVuY3Rpb24gZmluZE1lcmdlczxUIGV4dGVuZHMgTWVyZ2VhYmxlPFQ+PihpdGVtczogVFtdKTogTWVyZ2U8VD5bXSB7XG4gIGNvbnN0IHJlc3VsdDogTWVyZ2U8VD5bXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChpdGVtc1tpXSk7XG5cbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgYiA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoaXRlbXNbal0pO1xuXG4gICAgICBpZiAoIWl0ZW1zW2ldLmNhbk1lcmdlKGl0ZW1zW2pdKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQSBhbmQgQiBhcmUgdGhlIHNhbWVcbiAgICAgIGlmIChcbiAgICAgICAgYS50b3AgPT09IGIudG9wICYmXG4gICAgICAgIGEuYm90dG9tID09PSBiLmJvdHRvbSAmJlxuICAgICAgICBhLmxlZnQgPT09IGIubGVmdCAmJlxuICAgICAgICBhLnJpZ2h0ID09PSBiLnJpZ2h0XG4gICAgICApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgJ2R1cGxpY2F0ZSddKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSBib3R0b20gZWRnZSBvZiBBXG4gICAgICBpZiAoYS5ib3R0b20gPT09IGIudG9wICYmIGEubGVmdCA9PT0gYi5sZWZ0ICYmIGEucmlnaHQgPT09IGIucmlnaHQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5Cb3R0b21dKTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIHRvcCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLnRvcCA9PT0gYi5ib3R0b20gJiYgYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS5yaWdodCA9PT0gYi5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlRvcF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgcmlnaHQgZWRnZSBvZiBBXG4gICAgICBpZiAoYS5yaWdodCA9PT0gYi5sZWZ0ICYmIGEudG9wID09PSBiLnRvcCAmJiBhLmJvdHRvbSA9PT0gYi5ib3R0b20pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5SaWdodF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgbGVmdCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLmxlZnQgPT09IGIucmlnaHQgJiYgYS50b3AgPT09IGIudG9wICYmIGEuYm90dG9tID09PSBiLmJvdHRvbSkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkxlZnRdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIE1lcmdlIGl0ZW1zIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXIgYW5kIHBlcmZlY3RseSBjb25uZWN0ZWQgb24gb25lXG4gKiBzaWRlLCBvciBhcmUgZXhhY3QgZHVwbGljYXRlcyBvZiBlYWNoIG90aGVyXG4gKlxuICogYG9uTWVyZ2VgIGlzIGNhbGxlZCBlYWNoIHRpbWUgMiBpdGVtcyBhcmUgcmVwbGFjZWQgd2l0aCBhIHNpbmdsZSBpdGVtLiBJZlxuICogdGhlIGl0ZW1zIHdlcmUgZHVwbGljYXRlcywgdGhlIG1lcmdlZCBpdGVtIGlzIHRoZSBmaXJzdCBpdGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxUIGV4dGVuZHMgTWVyZ2VhYmxlPFQ+PihcbiAgaXRlbXM6IFRbXSxcbiAgb25NZXJnZT86IChtZXJnZWQ6IFQsIGE6IFQsIGI6IFQpID0+IHZvaWRcbik6IFRbXSB7XG4gIC8vIFNvcnQgaXRlbXMgYnkgeS1wb3NpdGlvbiB0aGVuIHgtcG9zaXRpb25cbiAgbGV0IHJlc3VsdCA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLnBvc2l0aW9uLnkgPT09IGIucG9zaXRpb24ueSkge1xuICAgICAgcmV0dXJuIGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueDtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5wb3NpdGlvbi55IC0gYi5wb3NpdGlvbi55O1xuICB9KTtcblxuICBsZXQgaSA9IDA7XG4gIGxldCBtZXJnZXM6IE1lcmdlPFQ+W107XG4gIHdoaWxlIChcbiAgICAobWVyZ2VzID0gZmluZE1lcmdlcyhyZXN1bHQpKS5sZW5ndGggPiAwICYmXG4gICAgaSsrIDwgTUVSR0VfTUFYX0lURVJBVElPTlNcbiAgKSB7XG4gICAgLy8gTWVyZ2UgaXRlbXMgaW4gYSBzcGVjaWZpYyBvcmRlciAoZS5nLiBpdGVtcyB0aGF0IGNvbm5lY3Qgb24gdGhlIGJvdHRvbVxuICAgIC8vIGZhY2UgZmlyc3QsIG9yIGl0ZW1zIHRoYXQgYXJlIGV4YWN0IGR1cGxpY2F0ZXMgZmlyc3QsIGV0Yy4pXG4gICAgbWVyZ2VzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gTUVSR0VfT1JERVIuaW5kZXhPZihhWzJdKSAtIE1FUkdFX09SREVSLmluZGV4T2YoYlsyXSlcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCBbYSwgYiwgc2lkZV0gb2YgbWVyZ2VzKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGl0ZW1zIHN0aWxsIGV4aXN0ICh0aGV5IG1pZ2h0IGhhdmUgYmVlbiBtZXJnZWQgYW5kXG4gICAgICAvLyByZW1vdmVkIGluIGEgcHJldmlvdXMgaXRlcmF0aW9uKVxuICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMoYSkgfHwgIXJlc3VsdC5pbmNsdWRlcyhiKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNpZGUgPT09ICdkdXBsaWNhdGUnKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBiKTtcbiAgICAgICAgb25NZXJnZT8uKGEsIGEsIGIpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVyZ2VkID0gYS5tZXJnZShiKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBhICYmIGl0ZW0gIT09IGIpO1xuICAgICAgcmVzdWx0LnB1c2gobWVyZ2VkKTtcbiAgICAgIG9uTWVyZ2U/LihtZXJnZWQsIGEsIGIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcblxuZXhwb3J0IHR5cGUgTGluZSA9IHtcbiAgc3RhcnQ6IHZlYzI7XG4gIGVuZDogdmVjMjtcbn07XG5cbmV4cG9ydCBlbnVtIFNlY3RvcjFkIHtcbiAgQmVmb3JlID0gJ2JlZm9yZScsXG4gIEluc2lkZSA9ICdpbnNpZGUnLFxuICBBZnRlciA9ICdhZnRlcicsXG59XG5cbmV4cG9ydCBlbnVtIFNlY3RvcjJkIHtcbiAgVG9wTGVmdCA9ICd0b3AtbGVmdCcsXG4gIFRvcCA9ICd0b3AnLFxuICBUb3BSaWdodCA9ICd0b3AtcmlnaHQnLFxuICBMZWZ0ID0gJ2xlZnQnLFxuICBJbnNpZGUgPSAnaW5zaWRlJyxcbiAgUmlnaHQgPSAncmlnaHQnLFxuICBCb3R0b21MZWZ0ID0gJ2JvdHRvbS1sZWZ0JyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIEJvdHRvbVJpZ2h0ID0gJ2JvdHRvbS1yaWdodCcsXG59XG5cbmV4cG9ydCB0eXBlIFBvbHlnb25WZXJ0aWNlcyA9IChcbiAgfCB2ZWMyXG4gIHwgKChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQpXG4pW107XG5cbmV4cG9ydCBlbnVtIFNpZGUge1xuICBUb3AgPSAndG9wJyxcbiAgUmlnaHQgPSAncmlnaHQnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgTGVmdCA9ICdsZWZ0Jyxcbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgSW50ZXJ2YWwxZCwgSW50ZXJ2YWwyZCwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgTGluZSwgUG9seWdvblZlcnRpY2VzLCBTZWN0b3IxZCwgU2VjdG9yMmQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBDaGVjayBpZiBhIGxpbmUgc2VnbWVudCdzIG5vcm1hbCBpcyBmYWNpbmcgdG93YXJkcyBhIHBvaW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lSXNGYWNpbmcobGluZTogTGluZSwgcG9zaXRpb246IHZlYzIpIHtcbiAgY29uc3QgZWRnZSA9IHZlYzIubm9yKHZlYzIuc3ViKGxpbmUuZW5kLCBsaW5lLnN0YXJ0KSk7XG4gIGNvbnN0IGVkZ2VOb3JtYWwgPSB2ZWMyKGVkZ2UueSwgLWVkZ2UueCk7XG4gIGNvbnN0IGxpZ2h0Tm9ybWFsID0gdmVjMi5ub3IoXG4gICAgdmVjMi5zdWIodmVjMi5tdWwodmVjMi5hZGQobGluZS5zdGFydCwgbGluZS5lbmQpLCAwLjUpLCBwb3NpdGlvbilcbiAgKTtcblxuICByZXR1cm4gdmVjMi5kb3QobGlnaHROb3JtYWwsIGVkZ2VOb3JtYWwpIDw9IDA7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcG9seWdvbiBwYXRoIG9uIGEgY2FudmFzIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb24oXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgLi4udmVydGljZXM6IFBvbHlnb25WZXJ0aWNlc1xuKSB7XG4gIGlmICh2ZXJ0aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBpZiAodHlwZW9mIHZlcnRpY2VzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmVydGljZXNbMF0oY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5tb3ZlVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdmVydGljZXNbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICh2ZXJ0aWNlc1tpXSBhcyBGdW5jdGlvbikoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQubGluZVRvKCh2ZXJ0aWNlc1tpXSBhcyB2ZWMyKS54LCAodmVydGljZXNbaV0gYXMgdmVjMikueSk7XG4gICAgfVxuICB9XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDFkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IxZChuOiBudW1iZXIsIGludGVydmFsOiBJbnRlcnZhbDFkKTogU2VjdG9yMWQge1xuICBpZiAobiA8PSBpbnRlcnZhbC5zdGFydCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5CZWZvcmU7XG4gIH1cblxuICBpZiAobiA+PSBpbnRlcnZhbC5lbmQpIHtcbiAgICByZXR1cm4gU2VjdG9yMWQuQWZ0ZXI7XG4gIH1cblxuICByZXR1cm4gU2VjdG9yMWQuSW5zaWRlO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdG9yIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VjdG9yMmQocG9pbnQ6IHZlYzIsIGludGVydmFsOiBJbnRlcnZhbDJkKTogU2VjdG9yMmQge1xuICBjb25zdCB4ID0gc2VjdG9yMWQocG9pbnQueCwgeyBzdGFydDogaW50ZXJ2YWwubGVmdCwgZW5kOiBpbnRlcnZhbC5yaWdodCB9KTtcbiAgY29uc3QgeSA9IHNlY3RvcjFkKHBvaW50LnksIHsgc3RhcnQ6IGludGVydmFsLnRvcCwgZW5kOiBpbnRlcnZhbC5ib3R0b20gfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBbU2VjdG9yMWQuQmVmb3JlXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcExlZnQsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbUxlZnQsXG4gICAgfSxcbiAgICBbU2VjdG9yMWQuSW5zaWRlXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5JbnNpZGUsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b20sXG4gICAgfSxcbiAgICBbU2VjdG9yMWQuQWZ0ZXJdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wUmlnaHQsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuUmlnaHQsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b21SaWdodCxcbiAgICB9LFxuICB9W3hdW3ldO1xufVxuXG5jb25zdCB0aW50cyA9IG5ldyBXZWFrTWFwPFNjZW5lSW1hZ2UsIE1hcDxzdHJpbmcsIEhUTUxDYW52YXNFbGVtZW50Pj4oKTtcblxuLyoqXG4gKiBHZXQgYSBjb3B5IG9mIGFuIGltYWdlIGluIGEgc2luZ2xlIGNvbG91ciB3aGljaCBrZWVwcyB0aGUgaW1hZ2UncyBhbHBoYVxuICogY2hhbm5lbCwgb3IgbnVsbCBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbnRlZEltYWdlKFxuICBpbWFnZTogU2NlbmVJbWFnZSxcbiAgY29sb3VyOiBzdHJpbmdcbik6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIGlmIChpbWFnZS53aWR0aCA9PT0gMCB8fCBpbWFnZS5oZWlnaHQgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgIWltYWdlLmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgaW1hZ2VUaW50cyA9IHRpbnRzLmdldChpbWFnZSk7XG4gIGlmICghaW1hZ2VUaW50cykge1xuICAgIGltYWdlVGludHMgPSBuZXcgTWFwKCk7XG4gICAgdGludHMuc2V0KGltYWdlLCBpbWFnZVRpbnRzKTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBpbWFnZVRpbnRzLmdldChjb2xvdXIpO1xuICBpZiAoIXJlc3VsdCkge1xuICAgIHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJlc3VsdC53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgIHJlc3VsdC5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gcmVzdWx0LmdldENvbnRleHQoJzJkJykhO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtaW4nO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3VyO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgcmVzdWx0LndpZHRoLCByZXN1bHQuaGVpZ2h0KTtcblxuICAgIGltYWdlVGludHMuc2V0KGNvbG91ciwgcmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0IGEgYmxhY2sgY29weSBvZiBhbiBpbWFnZSB3aGljaCBrZWVwcyB0aGUgaW1hZ2UncyBhbHBoYSBjaGFubmVsLCBvciBudWxsXG4gKiBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbGhvdWV0dGUoaW1hZ2U6IFNjZW5lSW1hZ2UpOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICByZXR1cm4gdGludGVkSW1hZ2UoaW1hZ2UsICdibGFjaycpO1xufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBkcmF3SW1hZ2VJblJlY3RhbmdsZSwgUmVjdGFuZ2xlLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IFJlZmxlY3Rpb25TeXN0ZW0gfSBmcm9tICcuL1JlZmxlY3Rpb25TeXN0ZW0nO1xuXG5leHBvcnQgdHlwZSBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zID0gUmVjdGFuZ2xlICYge1xuICAvKipcbiAgICogSW1hZ2Ugd2hvc2UgYWxwaGEgY2hhbm5lbCBkZWNpZGVzIHdoaWNoIHBhcnRzIG9mIHRoaXMgcmVjdGFuZ2xlIGFyZVxuICAgKiByZWZsZWN0aXZlLCB0aGUgZGVmYXVsdCBpcyB0aGUgd2hvbGUgcmVjdGFuZ2xlXG4gICAqL1xuICBtYXNrPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGUgbWFzayBiZSByZXBlYXRlZCBhY3Jvc3MgdGhlIHJlY3RhbmdsZT8gT3RoZXJ3aXNlIGl0IHdpbGwgYmVcbiAgICogc3RyZXRjaGVkIHRvIGZpdFxuICAgKi9cbiAgcmVwZWF0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSG93IHN0cm9uZyB0aGUgcmVmbGVjdGlvbiBpcywgZnJvbSAwIHRvIDFcbiAgICovXG4gIHN0cmVuZ3RoPzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBbiBhcmVhIHRoYXQgc2hvd3MgcmVmbGVjdGlvbnNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlZmxlY3Rpb25SZWNlaXZlciB7XG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjMjtcbiAgcHVibGljIHNpemU6IHZlYzI7XG4gIHB1YmxpYyBtYXNrOiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgcHVibGljIHJlcGVhdDogYm9vbGVhbjtcbiAgcHVibGljIHN0cmVuZ3RoOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtO1xuXG4gIHByaXZhdGUgcmVtb3ZlQ2FsbGJhY2tzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbSxcbiAgICBvcHRpb25zOiBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICAgIGRlZmF1bHRTdHJlbmd0aDogbnVtYmVyXG4gICkge1xuICAgIHRoaXMucmVmbGVjdGlvbnMgPSByZWZsZWN0aW9ucztcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkob3B0aW9ucy5zaXplKTtcbiAgICB0aGlzLm1hc2sgPSBvcHRpb25zLm1hc2sgPz8gbnVsbDtcbiAgICB0aGlzLnJlcGVhdCA9IG9wdGlvbnMucmVwZWF0ID8/IGZhbHNlO1xuICAgIHRoaXMuc3RyZW5ndGggPSBvcHRpb25zLnN0cmVuZ3RoID8/IGRlZmF1bHRTdHJlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWxsIHRoaXMgYXJlYSwgc28gdGhhdCB0aGUgY29udGV4dCBvbmx5IGtlZXBzIHJlZmxlY3RpdmUgcGFydHMgb3Igc28gdGhhdFxuICAgKiBpdCBzaG93cyB3aGljaCBwYXJ0cyBhcmUgcmVmbGVjdGl2ZVxuICAgKi9cbiAgcHVibGljIGRyYXdNYXNrKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgIGRyYXdJbWFnZUluUmVjdGFuZ2xlKGNvbnRleHQsIHRoaXMubWFzaywgdGhpcywgdGhpcy5yZXBlYXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgdGhpcy5zaXplLngsXG4gICAgICAgIHRoaXMuc2l6ZS55XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGlzIHJlY2VpdmVyIGlzIHJlbW92ZWRcbiAgICovXG4gIHB1YmxpYyBvblJlbW92ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHJlY2VpdmVyIGZyb20gdGhlIHJlZmxlY3Rpb24gc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMucmVmbGVjdGlvbnMucmVtb3ZlKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zID0gUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucztcblxuLyoqXG4gKiBBIHJlZmxlY3RpdmUgcGFydCBvZiB0aGUgZmxvb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyIGV4dGVuZHMgUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TVFJFTkdUSCA9IDAuNTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW0sXG4gICAgb3B0aW9uczogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKHJlZmxlY3Rpb25zLCBvcHRpb25zLCBGbG9vclJlZmxlY3Rpb25SZWNlaXZlci5ERUZBVUxUX1NUUkVOR1RIKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyA9IFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgd2FsbCBtZWV0cyB0aGUgZ3JvdW5kLCB0aGUgZGVmYXVsdCBpcyB0aGUgYm90dG9tIG9mIHRoZSByZWN0YW5nbGVcbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgc2V0IGlmIHRoZSByZWN0YW5nbGUgaXMgb25seSBwYXJ0IG9mIGEgd2FsbCwgZm9yIGV4YW1wbGUgYVxuICAgKiBtaXJyb3IgdGhhdCdzIGhhbmdpbmcgYWJvdmUgdGhlIGZsb29yXG4gICAqL1xuICBmb290PzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBIHJlZmxlY3RpdmUgcGFydCBvZiBhIHdhbGxcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIgZXh0ZW5kcyBSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NUUkVOR1RIID0gMTtcblxuICBwdWJsaWMgZm9vdDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbSxcbiAgICBvcHRpb25zOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihyZWZsZWN0aW9ucywgb3B0aW9ucywgV2FsbFJlZmxlY3Rpb25SZWNlaXZlci5ERUZBVUxUX1NUUkVOR1RIKTtcbiAgICB0aGlzLmZvb3QgPSBvcHRpb25zLmZvb3QgPz8gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGlzIHJlY2VpdmVyJ3MgcmVmbGVjdGlvbnMgd2l0aCB0aGUgY2FtZXJhJ3MgdHJhbnNmb3JtcyBhcHBsaWVkXG4gICAqXG4gICAqIFJlZmxlY3Rpb25zIGluIHdhbGxzIGNhbiBiZSBjb3ZlcmVkIGJ5IHRoaW5ncyB0aGF0IGFyZSBkcmF3biBhZnRlcndhcmRzLCBzb1xuICAgKiB0aGlzIG5lZWRzIHRvIGJlIGRyYXduIHN0cmFpZ2h0IGFmdGVyIHRoZSB3YWxsXG4gICAqL1xuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zLmRyYXdXYWxsUmVjZWl2ZXIodGhpcywgY29udGV4dCk7XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgU3ByaXRlIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2Uvc3ByaXRlJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlLCBTY2VuZUltYWdlLCBzcHJpdGVCb3VuZHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgUmVmbGVjdGlvblN5c3RlbSB9IGZyb20gJy4vUmVmbGVjdGlvblN5c3RlbSc7XG5cbi8qKlxuICogU29tZXRoaW5nIHRoYXQgaXNuJ3QgYSBzcHJpdGUgYnV0IGNhbiBzdGlsbCBiZSByZWZsZWN0ZWRcbiAqXG4gKiBUaGlzIG9iamVjdCBpcyByZWFkIGV2ZXJ5IGZyYW1lLCBzbyBpdCBjYW4gYmUgbW92ZWQgYnkgY2hhbmdpbmcgaXRzIHBvc2l0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25PYmplY3QgPSBSZWN0YW5nbGUgJiB7XG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgZm9yIHRoaXMgb2JqZWN0LCB0aGlzIGlzIHN0cmV0Y2hlZCB0byBmaXQgdGhlIHJlY3RhbmdsZVxuICAgKi9cbiAgaW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogRHJhdyB0aGlzIG9iamVjdCBpbiB3b3JsZCBjb29yZGluYXRlcywgdGhpcyBpcyB1c2VkIGluc3RlYWQgb2YgYGltYWdlYFxuICAgKi9cbiAgZHJhdz86IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBSZWZsZWN0aW9uU291cmNlU2V0dGluZ3MgPSB7XG4gIC8qKlxuICAgKiBIb3cgZmFyIHRoZSBvYmplY3QncyBmZWV0IGFyZSBhYm92ZSB0aGUgYm90dG9tIGVkZ2Ugb2YgaXRzIHJlY3RhbmdsZSwgdGhpc1xuICAgKiBpcyB1c2VmdWwgaWYgYW4gaW1hZ2UgaGFzIHNvbWUgZW1wdHkgc3BhY2UgdW5kZXJuZWF0aCB0aGUgb2JqZWN0XG4gICAqL1xuICBmb290T2Zmc2V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRvIG1vdmUgdGhpcyBzb3VyY2UncyByZWZsZWN0aW9uIHVwIHRoZSBzY3JlZW4sIHRoaXMgY2FuIGJlIHVzZWRcbiAgICogdG8gY2xvc2UgdGhlIGdhcCBiZXR3ZWVuIGFuIGltYWdlJ3MgZmVldCBhbmQgaXRzIHJlZmxlY3Rpb25cbiAgICpcbiAgICogVGhpcyBpc24ndCB1c2VkIGZvciByZWZsZWN0aW9ucyBpbiB3YXRlciwgd2hpY2ggc3RhcnQgYXQgdGhlIHdhdGVybGluZVxuICAgKi9cbiAgZmxvb3JPZmZzZXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSBvdmVyIHdoaWNoIHRoaXMgc291cmNlJ3MgcmVmbGVjdGlvbiBmYWRlcyBpbiwgbWVhc3VyZWQgZnJvbVxuICAgKiB0aGUgZmVldC4gVGhpcyBjYW4gYmUgdXNlZCB0byBoaWRlIGFueSBvdmVybGFwIHdpdGggdGhlIHNvdXJjZVxuICAgKi9cbiAgZmxvb3JGYWRlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgbGF5ZXIgaW4gYSBzcHJpdGUncyBhbmltYXRpb25zIHRoYXQgaGFzIGltYWdlcyBmb3IgZmxvb3JcbiAgICogcmVmbGVjdGlvbnMsIHRoZSBkZWZhdWx0IGlzIGBmbG9vci1yZWZsZWN0aW9uYFxuICAgKlxuICAgKiBJbWFnZXMgaW4gYSAzLzQgdmlldyBjYW4gbG9vayBzdHJhbmdlIHdoZW4gdGhleSdyZSBmbGlwcGVkIHVwc2lkZS1kb3duLCBzb1xuICAgKiB0aGlzIGNhbiBiZSB1c2VkIGZvciBpbWFnZXMgdGhhdCBhcmUgZHJhd24gZm9yIHRoaXMgcHVycG9zZS4gVGhlc2UgYXJlXG4gICAqIGZsaXBwZWQgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBzcHJpdGUuIElmIGFuIGFuaW1hdGlvbiBkb2Vzbid0IGhhdmUgYW5cbiAgICogaW1hZ2UgaW4gdGhpcyBsYXllciB0aGVuIHRoZSBzcHJpdGUgaXMgdXNlZCBpbnN0ZWFkXG4gICAqL1xuICBmbG9vckxheWVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgdG8gdXNlIGluIGZsb29ycyBmb3IgYW4gb2JqZWN0IHRoYXQgaXNuJ3QgYSBzcHJpdGUsIHRoaXMgaXNcbiAgICogZmxpcHBlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIG9iamVjdFxuICAgKi9cbiAgZmxvb3JJbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBzb3VyY2UgYXBwZWFyIGluIGZsb29ycz9cbiAgICovXG4gIGZsb29yPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdWxkIHRoaXMgc291cmNlIGFwcGVhciBpbiB3YWxscz9cbiAgICovXG4gIHdhbGw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGljaCB3YXkgYSBzcHJpdGUgYXBwZWFycyB0byBiZSBmYWNpbmcgaW4gYSB3YWxsLCBmb3IgZWFjaCBkaXJlY3Rpb24gdGhhdFxuICAgKiBpdCBjb3VsZCBiZSBmYWNpbmcuIERpcmVjdGlvbnMgdGhhdCBhcmVuJ3QgaW4gdGhpcyBsaXN0IHdpbGwgc3RheSB0aGUgc2FtZVxuICAgKlxuICAgKiBXYWxscyBmYWNlIHRoZSBjYW1lcmEsIHNvIHRoaXMgc2hvdWxkIHN3YXAgZGlyZWN0aW9ucyB3aGljaCBwb2ludCB0b3dhcmRzXG4gICAqIGFuZCBhd2F5IGZyb20gdGhlIGNhbWVyYS4gVGhlIGRlZmF1bHQgc3dhcHMgbm9ydGggYW5kIHNvdXRoLCBhbmQgdXAgYW5kXG4gICAqIGRvd25cbiAgICovXG4gIHdhbGxEaXJlY3Rpb25zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuICAvKipcbiAgICogVGhlIGltYWdlIGZvciBhbiBvYmplY3Qgd2hlbiBpdCdzIHNlZW4gaW4gYSB3YWxsLCB0aGlzIHNob3VsZCBzaG93IHRoZVxuICAgKiBvcHBvc2l0ZSBzaWRlIG9mIHRoZSBvYmplY3QuIElmIHRoaXMgaXNuJ3Qgc2V0IHRoZW4gdGhlIG9iamVjdCBsb29rcyB0aGVcbiAgICogc2FtZSBhcyBpdCBkb2VzIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgd2FsbEltYWdlPzogU2NlbmVJbWFnZSB8IG51bGw7XG59O1xuXG5leHBvcnQgdHlwZSBSZWZsZWN0aW9uU291cmNlT3B0aW9ucyA9IFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyAmXG4gICh7IHNwcml0ZTogU3ByaXRlIH0gfCB7IG9iamVjdDogUmVmbGVjdGlvbk9iamVjdCB9KTtcblxuLyoqXG4gKiBTb21ldGhpbmcgdGhhdCBhcHBlYXJzIGluIGZsb29ycyBhbmQgd2FsbHMgdGhhdCBhcmUgcmVmbGVjdGl2ZVxuICovXG5leHBvcnQgY2xhc3MgUmVmbGVjdGlvblNvdXJjZSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRkxPT1JfTEFZRVIgPSAnZmxvb3ItcmVmbGVjdGlvbic7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfV0FMTF9ESVJFQ1RJT05TOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIG5vcnRoOiAnc291dGgnLFxuICAgIHNvdXRoOiAnbm9ydGgnLFxuICAgIHVwOiAnZG93bicsXG4gICAgZG93bjogJ3VwJyxcbiAgfTtcblxuICBwdWJsaWMgcmVhZG9ubHkgc3ByaXRlOiBTcHJpdGUgfCBudWxsO1xuICBwdWJsaWMgcmVhZG9ubHkgb2JqZWN0OiBSZWZsZWN0aW9uT2JqZWN0IHwgbnVsbDtcblxuICBwdWJsaWMgZm9vdE9mZnNldDogbnVtYmVyO1xuICBwdWJsaWMgZmxvb3JPZmZzZXQ6IG51bWJlcjtcbiAgcHVibGljIGZsb29yRmFkZTogbnVtYmVyO1xuICBwdWJsaWMgZmxvb3JMYXllcjogc3RyaW5nO1xuICBwdWJsaWMgZmxvb3JJbWFnZTogU2NlbmVJbWFnZSB8IG51bGw7XG4gIHB1YmxpYyBmbG9vcjogYm9vbGVhbjtcbiAgcHVibGljIHdhbGw6IGJvb2xlYW47XG4gIHB1YmxpYyB3YWxsRGlyZWN0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHVibGljIHdhbGxJbWFnZTogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFdvcmxkIHktcG9zaXRpb24gd2hlcmUgdGhpcyBzb3VyY2UgbWVldHMgdGhlIHN1cmZhY2Ugb2Ygc29tZSB3YXRlciwgb3IgbnVsbFxuICAgKiBpZiBpdCBpc24ndCBpbiB3YXRlclxuICAgKlxuICAgKiBPbmx5IHRoZSBwYXJ0IGFib3ZlIHRoaXMgbGluZSBpcyByZWZsZWN0ZWQsIGFuZCBpdCdzIHJlZmxlY3RlZCBhcm91bmQgdGhpc1xuICAgKiBsaW5lIGluc3RlYWQgb2YgYXJvdW5kIHRoZSBzb3VyY2UncyBmZWV0XG4gICAqL1xuICBwdWJsaWMgd2F0ZXJsaW5lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbSxcbiAgICBvcHRpb25zOiBSZWZsZWN0aW9uU291cmNlT3B0aW9uc1xuICApIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zID0gcmVmbGVjdGlvbnM7XG4gICAgdGhpcy5zcHJpdGUgPSAnc3ByaXRlJyBpbiBvcHRpb25zID8gb3B0aW9ucy5zcHJpdGUgOiBudWxsO1xuICAgIHRoaXMub2JqZWN0ID0gJ29iamVjdCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMub2JqZWN0IDogbnVsbDtcbiAgICB0aGlzLmZvb3RPZmZzZXQgPSBvcHRpb25zLmZvb3RPZmZzZXQgPz8gMDtcbiAgICB0aGlzLmZsb29yT2Zmc2V0ID0gb3B0aW9ucy5mbG9vck9mZnNldCA/PyAwO1xuICAgIHRoaXMuZmxvb3JGYWRlID0gb3B0aW9ucy5mbG9vckZhZGUgPz8gMDtcbiAgICB0aGlzLmZsb29yTGF5ZXIgPVxuICAgICAgb3B0aW9ucy5mbG9vckxheWVyID8/IFJlZmxlY3Rpb25Tb3VyY2UuREVGQVVMVF9GTE9PUl9MQVlFUjtcbiAgICB0aGlzLmZsb29ySW1hZ2UgPSBvcHRpb25zLmZsb29ySW1hZ2UgPz8gbnVsbDtcbiAgICB0aGlzLmZsb29yID0gb3B0aW9ucy5mbG9vciA/PyB0cnVlO1xuICAgIHRoaXMud2FsbCA9IG9wdGlvbnMud2FsbCA/PyB0cnVlO1xuICAgIHRoaXMud2FsbERpcmVjdGlvbnMgPVxuICAgICAgb3B0aW9ucy53YWxsRGlyZWN0aW9ucyA/PyBSZWZsZWN0aW9uU291cmNlLkRFRkFVTFRfV0FMTF9ESVJFQ1RJT05TO1xuICAgIHRoaXMud2FsbEltYWdlID0gb3B0aW9ucy53YWxsSW1hZ2UgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXJlYSBjb3ZlcmVkIGJ5IHRoaXMgc291cmNlIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHVibGljIGdldCBib3VuZHMoKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4gdGhpcy5zcHJpdGUgPyBzcHJpdGVCb3VuZHModGhpcy5zcHJpdGUpIDogdGhpcy5vYmplY3QhO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgc291cmNlIG1lZXRzIHRoZSBncm91bmRcbiAgICovXG4gIHB1YmxpYyBnZXQgZm9vdCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMuYm91bmRzO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uLnkgKyBzaXplLnkgLSB0aGlzLmZvb3RPZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGxpbmUgdGhhdCB0aGlzIHNvdXJjZSBpcyByZWZsZWN0ZWQgYXJvdW5kIGluIGEgZmxvb3JcbiAgICovXG4gIHByaXZhdGUgZ2V0IGZsb29yQXhpcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndhdGVybGluZSA/PyB0aGlzLmZvb3Q7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdvcmxkIHktcG9zaXRpb24gd2hlcmUgdGhpcyBzb3VyY2UncyByZWZsZWN0aW9uIGluIGEgZmxvb3Igc3RhcnRzLCB0aGlzXG4gICAqIGlzIHRoZSBzYW1lIGFzIHRoZSBsaW5lIGl0J3MgcmVmbGVjdGVkIGFyb3VuZCB1bmxlc3MgaXQgaGFzIGFuIG9mZnNldFxuICAgKi9cbiAgcHVibGljIGdldCBmbG9vclN0YXJ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2F0ZXJsaW5lID09PSBudWxsXG4gICAgICA/IHRoaXMuZmxvb3JBeGlzIC0gdGhpcy5mbG9vck9mZnNldFxuICAgICAgOiB0aGlzLmZsb29yQXhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRoaXMgc291cmNlJ3MgcmVmbGVjdGlvbiBoYXMgYmVlbiBtb3ZlZCBhbG9uZyB0aGUgc2NyZWVuXG4gICAqL1xuICBwcml2YXRlIGdldCBmbG9vclNoaWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZmxvb3JTdGFydCAtIHRoaXMuZmxvb3JBeGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcmVhIGNvdmVyZWQgYnkgdGhpcyBzb3VyY2Ugd2hlbiBpdCdzIHJlZmxlY3RlZCBpbiBhIGZsb29yXG4gICAqL1xuICBwdWJsaWMgZ2V0IGZsb29yQm91bmRzKCk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIoXG4gICAgICAgIHBvc2l0aW9uLngsXG4gICAgICAgIHRoaXMuZmxvb3JBeGlzICogMiArIHRoaXMuZmxvb3JTaGlmdCAtIChwb3NpdGlvbi55ICsgc2l6ZS55KVxuICAgICAgKSxcbiAgICAgIHNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXJlYSBjb3ZlcmVkIGJ5IHRoaXMgc291cmNlIHdoZW4gaXQncyByZWZsZWN0ZWQgaW4gYSB3YWxsXG4gICAqL1xuICBwdWJsaWMgd2FsbEJvdW5kcyh3YWxsRm9vdDogbnVtYmVyKTogUmVjdGFuZ2xlIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgKHdhbGxGb290IC0gdGhpcy5mb290KSAqIDIpLFxuICAgICAgc2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhpcyBzb3VyY2UncyByZWZsZWN0aW9uIGluIGEgZmxvb3JcbiAgICpcbiAgICogR29pbmcgYmVsb3cgdGhlIGZsb29yIGRvZXNuJ3QgY2hhbmdlIHdoZXJlIHNvbWV0aGluZydzIGZlZXQgYXJlLCBzbyB0aGVcbiAgICogcmVmbGVjdGlvbiBpcyBmbGlwcGVkIHVwc2lkZS1kb3duIGFyb3VuZCBpdHMgZmVldFxuICAgKi9cbiAgcHVibGljIGRyYXdJbkZsb29yKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKDAsIHRoaXMuZmxvb3JBeGlzICogMiArIHRoaXMuZmxvb3JTaGlmdCk7XG4gICAgY29udGV4dC5zY2FsZSgxLCAtMSk7XG5cbiAgICBpZiAodGhpcy53YXRlcmxpbmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMuYm91bmRzO1xuXG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgY29udGV4dC5yZWN0KFxuICAgICAgICBwb3NpdGlvbi54LFxuICAgICAgICBwb3NpdGlvbi55LFxuICAgICAgICBzaXplLngsXG4gICAgICAgIHRoaXMud2F0ZXJsaW5lIC0gcG9zaXRpb24ueVxuICAgICAgKTtcbiAgICAgIGNvbnRleHQuY2xpcCgpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0Zsb29ySW1hZ2UoY29udGV4dCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGlzIHNvdXJjZSdzIHJlZmxlY3Rpb24gaW4gYSB3YWxsXG4gICAqXG4gICAqIFRoZSByZWZsZWN0aW9uIGlzIGFzIGZhciBiZWhpbmQgdGhlIHdhbGwgYXMgdGhpcyBzb3VyY2UgaXMgaW4gZnJvbnQgb2YgaXQsXG4gICAqIHNvIGl0J3MgdGhlIHNhbWUgd2F5IHVwIGJ1dCBmdXJ0aGVyIHVwIHRoZSBzY3JlZW4sIGFuZCB3ZSBjYW4gc2VlIHRoZSBzaWRlXG4gICAqIG9mIHRoaXMgc291cmNlIHRoYXQgZmFjZXMgdGhlIHdhbGxcbiAgICovXG4gIHB1YmxpYyBkcmF3SW5XYWxsKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgd2FsbEZvb3Q6IG51bWJlcikge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKDAsICh3YWxsRm9vdCAtIHRoaXMuZm9vdCkgKiAyKTtcblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdGhpcy5kcmF3U3ByaXRlSW5XYWxsKGNvbnRleHQsIHRoaXMuc3ByaXRlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMud2FsbEltYWdlKSB7XG4gICAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIHRoaXMud2FsbEltYWdlLFxuICAgICAgICBwb3NpdGlvbi54LFxuICAgICAgICBwb3NpdGlvbi55LFxuICAgICAgICBzaXplLngsXG4gICAgICAgIHNpemUueVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Rmxvb3JJbWFnZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb25zdCB7IHNwcml0ZSwgZmxvb3JJbWFnZSB9ID0gdGhpcztcblxuICAgIGlmIChzcHJpdGUpIHtcbiAgICAgIGNvbnN0IGltYWdlID1cbiAgICAgICAgc3ByaXRlLmltYWdlICYmIHNwcml0ZS5nZXRJbWFnZSh1bmRlZmluZWQsIHRoaXMuZmxvb3JMYXllcik7XG5cbiAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICB0aGlzLmRyYXdTcHJpdGVJbWFnZShjb250ZXh0LCBzcHJpdGUsIGltYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmxvb3JJbWFnZSkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGZsb29ySW1hZ2UsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdTcHJpdGVJbldhbGwoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzcHJpdGU6IFNwcml0ZSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9XG4gICAgICB0aGlzLndhbGxEaXJlY3Rpb25zW3Nwcml0ZS5kaXJlY3Rpb25dID8/IHNwcml0ZS5kaXJlY3Rpb247XG5cbiAgICAvLyBUaGUgc3ByaXRlIGNhbiBvbmx5IGRyYXcgaXRzZWxmIGZhY2luZyBpdHMgY3VycmVudCBkaXJlY3Rpb25cbiAgICBpZiAoZGlyZWN0aW9uID09PSBzcHJpdGUuZGlyZWN0aW9uKSB7XG4gICAgICBzcHJpdGUuZHJhdyhjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZSA9IHNwcml0ZS5nZXRJbWFnZShkaXJlY3Rpb24pO1xuICAgIGlmIChpbWFnZSkge1xuICAgICAgdGhpcy5kcmF3U3ByaXRlSW1hZ2UoY29udGV4dCwgc3ByaXRlLCBpbWFnZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBzcHJpdGUgd2l0aCBhIGRpZmZlcmVudCBpbWFnZSwgaW4gdGhlIHNhbWUgd2F5IGFzIGBTcHJpdGUuZHJhdygpYFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U3ByaXRlSW1hZ2UoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHNwcml0ZTogU3ByaXRlLFxuICAgIGltYWdlOiBTY2VuZUltYWdlXG4gICkge1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHNwcml0ZS5wb3NpdGlvbi54LCBzcHJpdGUucG9zaXRpb24ueSk7XG4gICAgY29udGV4dC5zY2FsZShzcHJpdGUuc2NhbGUsIHNwcml0ZS5zY2FsZSk7XG4gICAgY29udGV4dC5yb3RhdGUoc3ByaXRlLnJvdGF0aW9uKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgIGltYWdlLFxuICAgICAgLXNwcml0ZS5vcmlnaW4ueCxcbiAgICAgIC1zcHJpdGUub3JpZ2luLnksXG4gICAgICBpbWFnZS53aWR0aCxcbiAgICAgIGltYWdlLmhlaWdodFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICB0aGlzLnNwcml0ZS5kcmF3KGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUsIGltYWdlLCBkcmF3IH0gPSB0aGlzLm9iamVjdCE7XG5cbiAgICBpZiAoZHJhdykge1xuICAgICAgZHJhdyhjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKGltYWdlKSB7XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBzb3VyY2UgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucy5yZW1vdmUodGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgRnJhbWUsXG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIFJlY3RhbmdsZSxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlcixcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1JlZmxlY3Rpb25SZWNlaXZlcic7XG5pbXBvcnQgeyBSZWZsZWN0aW9uU291cmNlLCBSZWZsZWN0aW9uU291cmNlT3B0aW9ucyB9IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5cbi8qKlxuICogUmVuZGVycyBmbG9vciBhbmQgd2FsbCByZWZsZWN0aW9uc1xuICpcbiAqIFJlZmxlY3Rpb25zIGFyZSBkcmF3biBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY2VuZSwgc28gdGhpcyBoYXMgdG8gYmUgY2FsbGVkIGluXG4gKiBzZXZlcmFsIHN0ZXBzLiBTZWUgYFdvcmxkYCBmb3IgaG93IHRoaXMgZml0cyB0b2dldGhlciB3aXRoIGV2ZXJ5dGhpbmcgZWxzZVxuICpcbiAqIDEuIENhbGwgYHByZXBhcmUoKWAgYXQgdGhlIHN0YXJ0IG9mIGVhY2ggZnJhbWVcbiAqIDIuIERyYXcgdGhlIGdyb3VuZFxuICogMy4gQ2FsbCBgZHJhd0Zsb29yKClgXG4gKiA0LiBEcmF3IHdhbGxzIGFuZCBhY3RvcnMsIGNhbGxpbmcgYGRyYXcoKWAgb24gZWFjaCB3YWxsIHJlY2VpdmVyIGFzIHNvb24gYXNcbiAqICAgIGl0cyB3YWxsIGhhcyBiZWVuIGRyYXduXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHByaXZhdGUgc291cmNlczogUmVmbGVjdGlvblNvdXJjZVtdID0gW107XG4gIHByaXZhdGUgZmxvb3JSZWNlaXZlcnM6IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSB3YWxsUmVjZWl2ZXJzOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyW10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIHNjcmVlbi1zaXplZCBjYW52YXNlcyB0aGF0IHJlZmxlY3Rpb25zIGFyZSBkcmF3biBpbnRvXG4gICAqXG4gICAqIGBmbG9vclNvdXJjZXNDYW52YXNgIHNob3dzIGV2ZXJ5IHNvdXJjZSByZWZsZWN0ZWQgaW4gdGhlIGZsb29yLCBhcyBpZiB0aGVcbiAgICogd2hvbGUgZmxvb3Igd2FzIHJlZmxlY3RpdmVcbiAgICovXG4gIHByaXZhdGUgZmxvb3JTb3VyY2VzQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgZmxvb3JTb3VyY2VzQ2FudmFzID0gdGhpcy5mbG9vclNvdXJjZXNDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIGZsb29yQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwcml2YXRlIGZhZGVDb250ZXh0ID0gUmVmbGVjdGlvblN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHByaXZhdGUgd2FsbENvbnRleHQgPSBSZWZsZWN0aW9uU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcblxuICBwcml2YXRlIGZyYW1lOiBGcmFtZSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGZsb29yU291cmNlc1JlYWR5ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFkZCBzb21ldGhpbmcgdGhhdCBhcHBlYXJzIGluIHJlZmxlY3Rpb25zXG4gICAqL1xuICBwdWJsaWMgYWRkU291cmNlKG9wdGlvbnM6IFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zKTogUmVmbGVjdGlvblNvdXJjZSB7XG4gICAgY29uc3Qgc291cmNlID0gbmV3IFJlZmxlY3Rpb25Tb3VyY2UodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5zb3VyY2VzLnB1c2goc291cmNlKTtcblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVmbGVjdGl2ZSBwYXJ0IG9mIHRoZSBmbG9vclxuICAgKi9cbiAgcHVibGljIGFkZEZsb29yUmVjZWl2ZXIoXG4gICAgb3B0aW9uczogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zXG4gICk6IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgICBjb25zdCByZWNlaXZlciA9IG5ldyBGbG9vclJlZmxlY3Rpb25SZWNlaXZlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmZsb29yUmVjZWl2ZXJzLnB1c2gocmVjZWl2ZXIpO1xuXG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlZmxlY3RpdmUgcGFydCBvZiBhIHdhbGxcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsUmVjZWl2ZXIoXG4gICAgb3B0aW9uczogV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKTogV2FsbFJlZmxlY3Rpb25SZWNlaXZlciB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBuZXcgV2FsbFJlZmxlY3Rpb25SZWNlaXZlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMucHVzaChyZWNlaXZlcik7XG5cbiAgICByZXR1cm4gcmVjZWl2ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgc291cmNlIG9yIHJlY2VpdmVyIGZyb20gdGhlIHJlZmxlY3Rpb24gc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKG9iamVjdDogUmVmbGVjdGlvblNvdXJjZSB8IFJlZmxlY3Rpb25SZWNlaXZlcikge1xuICAgIHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlcy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMuZmxvb3JSZWNlaXZlcnMgPSB0aGlzLmZsb29yUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzID0gdGhpcy53YWxsUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHJlYWR5IHRvIGRyYXcgcmVmbGVjdGlvbnMgZm9yIGEgZnJhbWVcbiAgICovXG4gIHB1YmxpYyBwcmVwYXJlKGZyYW1lOiBGcmFtZSkge1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLmZsb29yU291cmNlc1JlYWR5ID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIGBmbG9vclNvdXJjZXNDYW52YXNgIGlzIHVwIHRvIGRhdGUgZm9yIHRoaXMgZnJhbWVcbiAgICovXG4gIHB1YmxpYyBkcmF3Rmxvb3JTb3VyY2VzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICBjb25zdCB7IGZyYW1lIH0gPSB0aGlzO1xuICAgIGlmICghZnJhbWUgfHwgdGhpcy5mbG9vclNvdXJjZXNSZWFkeSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmxvb3JTb3VyY2VzQ2FudmFzO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLnZpc2libGVBcmVhKGZyYW1lKTtcbiAgICBjb25zdCBzb3VyY2VzID0gdGhpcy5zb3J0ZWRTb3VyY2VzKFxuICAgICAgdGhpcy5zb3VyY2VzLmZpbHRlcihcbiAgICAgICAgc291cmNlID0+XG4gICAgICAgICAgc291cmNlLmZsb29yICYmIHJlY3RhbmdsZXNJbnRlcnNlY3Qoc291cmNlLmZsb29yQm91bmRzLCB2aXNpYmxlKVxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLmZsb29yU291cmNlc0NvbnRleHQsIGZyYW1lKTtcbiAgICBpZiAoc291cmNlcy5zb21lKHNvdXJjZSA9PiBzb3VyY2UuZmxvb3JGYWRlID4gMCkpIHtcbiAgICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuZmFkZUNvbnRleHQsIGZyYW1lKTtcbiAgICB9XG5cbiAgICBzb3VyY2VzLmZvckVhY2goc291cmNlID0+IHtcbiAgICAgIGlmIChzb3VyY2UuZmxvb3JGYWRlID4gMCkge1xuICAgICAgICB0aGlzLmRyYXdGYWRlZFNvdXJjZShzb3VyY2UsIGZyYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZS5kcmF3SW5GbG9vcih0aGlzLmZsb29yU291cmNlc0NvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmxvb3JTb3VyY2VzUmVhZHkgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXMuZmxvb3JTb3VyY2VzQ2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBzb3VyY2UncyByZWZsZWN0aW9uIG9uIGl0cyBvd24gc28gdGhhdCBpdCBjYW4gZmFkZSBpbiB3aXRob3V0XG4gICAqIGFmZmVjdGluZyB0aGUgcmVmbGVjdGlvbnMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBkcmF3blxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3RmFkZWRTb3VyY2Uoc291cmNlOiBSZWZsZWN0aW9uU291cmNlLCBmcmFtZTogRnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5mYWRlQ29udGV4dDtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSBzb3VyY2UuZmxvb3JCb3VuZHM7XG4gICAgY29uc3Qgc3RhcnQgPSBzb3VyY2UuZmxvb3JTdGFydDtcblxuICAgIHNvdXJjZS5kcmF3SW5GbG9vcihjb250ZXh0KTtcblxuICAgIGNvbnN0IGZhZGUgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KFxuICAgICAgMCxcbiAgICAgIHN0YXJ0LFxuICAgICAgMCxcbiAgICAgIHN0YXJ0ICsgc291cmNlLmZsb29yRmFkZVxuICAgICk7XG4gICAgZmFkZS5hZGRDb2xvclN0b3AoMCwgJ2JsYWNrJyk7XG4gICAgZmFkZS5hZGRDb2xvclN0b3AoMSwgJ3RyYW5zcGFyZW50Jyk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmFkZTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KHBvc2l0aW9uLngsIHN0YXJ0LCBzaXplLngsIHNvdXJjZS5mbG9vckZhZGUpO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgIC8vIE9ubHkgdGhlIGFyZWEgYXJvdW5kIHRoaXMgc291cmNlIG5lZWRzIHRvIGJlIGNvcGllZCBhbmQgY2xlYXJlZFxuICAgIGNvbnN0IHRvcExlZnQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbihwb3NpdGlvbik7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbih2ZWMyLmFkZChwb3NpdGlvbiwgc2l6ZSkpO1xuICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHRvcExlZnQueCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcih0b3BMZWZ0LnkpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKGJvdHRvbVJpZ2h0LngpIC0gbGVmdDtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoYm90dG9tUmlnaHQueSkgLSB0b3A7XG5cbiAgICB0aGlzLmZsb29yU291cmNlc0NvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgdGhpcy5mbG9vclNvdXJjZXNDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgIGNvbnRleHQuY2FudmFzLFxuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmZsb29yU291cmNlc0NvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC5jbGVhclJlY3QobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzY3JlZW4tc2l6ZWQgY29udGV4dCBtYXRjaGVzIHRoZSBmcmFtZSBhbmQgY2xlYXIgaXQsIHJlYWR5IGZvclxuICAgKiBkcmF3aW5nIGluIHdvcmxkIGNvb3JkaW5hdGVzXG4gICAqL1xuICBwcml2YXRlIHJlc2V0Q29udGV4dChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGZyYW1lOiBGcmFtZSkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSBjb250ZXh0O1xuICAgIGlmIChjYW52YXMud2lkdGggIT09IGZyYW1lLnNjcmVlbi54IHx8IGNhbnZhcy5oZWlnaHQgIT09IGZyYW1lLnNjcmVlbi55KSB7XG4gICAgICBjYW52YXMud2lkdGggPSBmcmFtZS5zY3JlZW4ueDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBmcmFtZS5zY3JlZW4ueTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZnJhbWUuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gICAgZnJhbWUuY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gIH1cblxuICBwcml2YXRlIHZpc2libGVBcmVhKHsgY2FtZXJhIH06IEZyYW1lKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4gaW50ZXJ2YWxUb1JlY3RhbmdsZShjYW1lcmEuYm91bmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc291cmNlcyBpbiB0aGUgb3JkZXIgdGhhdCB0aGV5IHNob3VsZCBiZSBkcmF3biwgc291cmNlcyB3aXRoIGZlZXRcbiAgICogZnVydGhlciBkb3duIHRoZSBzY3JlZW4gYXJlIGRyYXduIGxhc3RcbiAgICovXG4gIHByaXZhdGUgc29ydGVkU291cmNlcyhzb3VyY2VzOiBSZWZsZWN0aW9uU291cmNlW10pOiBSZWZsZWN0aW9uU291cmNlW10ge1xuICAgIHJldHVybiBzb3VyY2VzXG4gICAgICAubWFwKHNvdXJjZSA9PiAoeyBzb3VyY2UsIGZvb3Q6IHNvdXJjZS5mb290IH0pKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZm9vdCAtIGIuZm9vdClcbiAgICAgIC5tYXAoKHsgc291cmNlIH0pID0+IHNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyByZWZsZWN0aW9ucyBvbnRvIHRoZSBmbG9vciwgdGhpcyBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGRyYXdpbmcgdGhlXG4gICAqIGdyb3VuZCBhbmQgYmVmb3JlIGRyYXdpbmcgYW55dGhpbmcgdGhhdCBzdGFuZHMgb24gaXRcbiAgICovXG4gIHB1YmxpYyBkcmF3Rmxvb3IoKSB7XG4gICAgY29uc3QgeyBmcmFtZSB9ID0gdGhpcztcbiAgICBpZiAoIWZyYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmlzaWJsZSA9IHRoaXMudmlzaWJsZUFyZWEoZnJhbWUpO1xuICAgIGNvbnN0IHJlY2VpdmVycyA9IHRoaXMuZmxvb3JSZWNlaXZlcnMuZmlsdGVyKHJlY2VpdmVyID0+XG4gICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KHJlY2VpdmVyLCB2aXNpYmxlKVxuICAgICk7XG4gICAgaWYgKHJlY2VpdmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdGbG9vclNvdXJjZXMoKTtcblxuICAgIC8vIFN0YXJ0IHdpdGggdGhlIHNoYXBlIG9mIHRoZSByZWNlaXZlcnMgYW5kIGtlZXAgdGhlIHNvdXJjZXMgaW5zaWRlIGl0LFxuICAgIC8vIHRoaXMgd2F5IHNvdXJjZXMgZG9uJ3Qgc2hvdyB0aHJvdWdoIGVhY2ggb3RoZXIgd2hlbiBzdHJlbmd0aCBpcyBiZWxvdyAxXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZmxvb3JDb250ZXh0O1xuICAgIHRoaXMucmVzZXRDb250ZXh0KGNvbnRleHQsIGZyYW1lKTtcbiAgICByZWNlaXZlcnMuZm9yRWFjaChyZWNlaXZlciA9PiB7XG4gICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gcmVjZWl2ZXIuc3RyZW5ndGg7XG4gICAgICByZWNlaXZlci5kcmF3TWFzayhjb250ZXh0KTtcbiAgICB9KTtcbiAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtaW4nO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuZmxvb3JTb3VyY2VzQ2FudmFzLCAwLCAwKTtcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG5cbiAgICBmcmFtZS5jb250ZXh0LnNhdmUoKTtcbiAgICBmcmFtZS5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBmcmFtZS5jb250ZXh0LmRyYXdJbWFnZShjb250ZXh0LmNhbnZhcywgMCwgMCk7XG4gICAgZnJhbWUuY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgcmVmbGVjdGlvbnMgaW4gYSB3YWxsIHJlY2VpdmVyXG4gICAqL1xuICBwdWJsaWMgZHJhd1dhbGxSZWNlaXZlcihcbiAgICByZWNlaXZlcjogV2FsbFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgICB0YXJnZXQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICApIHtcbiAgICBjb25zdCB7IGZyYW1lIH0gPSB0aGlzO1xuICAgIGlmICghZnJhbWUgfHwgIXJlY3RhbmdsZXNJbnRlcnNlY3QocmVjZWl2ZXIsIHRoaXMudmlzaWJsZUFyZWEoZnJhbWUpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE9ubHkgdGhpbmdzIGluIGZyb250IG9mIHRoZSB3YWxsIGNhbiBiZSBzZWVuIGluIGl0XG4gICAgY29uc3Qgc291cmNlcyA9IHRoaXMuc29ydGVkU291cmNlcyhcbiAgICAgIHRoaXMuc291cmNlcy5maWx0ZXIoXG4gICAgICAgIHNvdXJjZSA9PlxuICAgICAgICAgIHNvdXJjZS53YWxsICYmXG4gICAgICAgICAgc291cmNlLmZvb3QgPiByZWNlaXZlci5mb290ICYmXG4gICAgICAgICAgcmVjdGFuZ2xlc0ludGVyc2VjdChzb3VyY2Uud2FsbEJvdW5kcyhyZWNlaXZlci5mb290KSwgcmVjZWl2ZXIpXG4gICAgICApXG4gICAgKTtcbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy53YWxsQ29udGV4dDtcbiAgICB0aGlzLnJlc2V0Q29udGV4dChjb250ZXh0LCBmcmFtZSk7XG5cbiAgICAvLyBUaGUgY2xvc2VzdCB0aGluZyB0byB0aGUgd2FsbCBpcyBhbHNvIHRoZSBjbG9zZXN0IHRoaW5nIHRvIHVzIHdoZW4gd2VcbiAgICAvLyBsb29rIGludG8gdGhlIHJlZmxlY3Rpb24sIHNvIHNvdXJjZXMgYXJlIGRyYXduIGluIHJldmVyc2Ugb3JkZXJcbiAgICBzb3VyY2VzXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaChzb3VyY2UgPT4gc291cmNlLmRyYXdJbldhbGwoY29udGV4dCwgcmVjZWl2ZXIuZm9vdCkpO1xuXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgIHJlY2VpdmVyLmRyYXdNYXNrKGNvbnRleHQpO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgIHRhcmdldC5zYXZlKCk7XG4gICAgdGFyZ2V0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB0YXJnZXQuZ2xvYmFsQWxwaGEgPSByZWNlaXZlci5zdHJlbmd0aDtcbiAgICB0YXJnZXQuZHJhd0ltYWdlKGNvbnRleHQuY2FudmFzLCAwLCAwKTtcbiAgICB0YXJnZXQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJleHBvcnQge1xuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlcixcbiAgUmVmbGVjdGlvblJlY2VpdmVyLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLFxufSBmcm9tICcuL1JlZmxlY3Rpb25SZWNlaXZlcic7XG5leHBvcnQgdHlwZSB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbiAgUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vUmVmbGVjdGlvblJlY2VpdmVyJztcbmV4cG9ydCB7IFJlZmxlY3Rpb25Tb3VyY2UgfSBmcm9tICcuL1JlZmxlY3Rpb25Tb3VyY2UnO1xuZXhwb3J0IHR5cGUge1xuICBSZWZsZWN0aW9uT2JqZWN0LFxuICBSZWZsZWN0aW9uU291cmNlT3B0aW9ucyxcbiAgUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzLFxufSBmcm9tICcuL1JlZmxlY3Rpb25Tb3VyY2UnO1xuZXhwb3J0IHsgUmVmbGVjdGlvblN5c3RlbSB9IGZyb20gJy4vUmVmbGVjdGlvblN5c3RlbSc7XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcblxuZXhwb3J0IHR5cGUgUmlwcGxlT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFRoZSBkaXN0YW5jZSBjb3ZlcmVkIGJ5IHRoZSBkaXN0dXJiYW5jZSwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJhZGl1cz86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGhhcmQgdGhlIHdhdGVyIGlzIHB1c2hlZCwgdGhpcyBjYW4gYmUgbmVnYXRpdmVcbiAgICovXG4gIHN0cmVuZ3RoPzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBIGdyaWQgb2Ygd2F0ZXIgaGVpZ2h0cyB0aGF0IHNwcmVhZHMgZGlzdHVyYmFuY2VzIG91dCBhcyByaXBwbGVzXG4gKlxuICogVGhpcyB1c2VzIHRoZSB3YXZlIGVxdWF0aW9uLCBlYWNoIGNlbGwgaXMgcHVsbGVkIHRvd2FyZHMgdGhlIGF2ZXJhZ2Ugb2YgaXRzXG4gKiBuZWlnaGJvdXJzIGFuZCBrZWVwcyBtb3ZpbmcgYWZ0ZXJ3YXJkcy4gVGhlcmUncyBhIGZpeGVkIHRpbWUgc3RlcCBzbyB0aGF0XG4gKiByaXBwbGVzIGJlaGF2ZSB0aGUgc2FtZSB3YXkgYXQgYW55IGZyYW1lIHJhdGUsIGFuZCBub3RoaW5nIGlzIGNhbGN1bGF0ZWRcbiAqIHdoaWxlIHRoZSB3YXRlciBpcyBzdGlsbFxuICovXG5leHBvcnQgY2xhc3MgUmlwcGxlRmllbGQge1xuICAvKipcbiAgICogUmlwcGxlcyBhcmUgc3RvcHBlZCB3aGVuIHRoZXkncmUgc21hbGxlciB0aGFuIHRoaXNcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1JTl9IRUlHSFQgPSAwLjAwMjtcblxuICAvKipcbiAgICogSG93IG11Y2ggb2YgaXRzIGhlaWdodCB0aGUgd2F0ZXIga2VlcHMgZWFjaCBzdGVwLCB3aXRob3V0IHRoaXMgYSBzcGxhc2hcbiAgICogd291bGQgcmFpc2UgdGhlIGxldmVsIG9mIHRoZSB3YXRlciBmb3JldmVyIGJlY2F1c2UgdGhlIHdhdmVzIG9ubHkgbW92ZVxuICAgKiB3YXRlciBhcm91bmRcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhFSUdIVF9SRVRBSU5FRCA9IDAuOTk1O1xuXG4gIC8qKlxuICAgKiBIaWdoZXIgc3BlZWRzIHRoYW4gdGhpcyBtYWtlIHRoZSBzaW11bGF0aW9uIHVuc3RhYmxlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfV0FWRV9OVU1CRVIgPSAwLjU7XG5cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBUSU1FX1NURVAgPSAxIC8gNjA7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBncmlkLCBpbiBjZWxsc1xuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHNpemU6IHZlYzI7XG5cbiAgLyoqXG4gICAqIFJHQkEgZGF0YSB3aXRoIHRoZSBzbG9wZSBvZiB0aGUgd2F0ZXIgaW4gdGhlIHJlZCBhbmQgZ3JlZW4gY2hhbm5lbHMsIGFuZFxuICAgKiB0aGUgaGVpZ2h0IG9mIHRoZSB3YXRlciBpbiB0aGUgYmx1ZSBjaGFubmVsXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgcGl4ZWxzOiBVaW50OEFycmF5O1xuXG4gIC8qKlxuICAgKiBJcyB0aGUgd2F0ZXIgbW92aW5nP1xuICAgKi9cbiAgcHVibGljIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY2VsbFNpemU6IHZlYzI7XG4gIHByaXZhdGUgaGVpZ2h0OiBGbG9hdDMyQXJyYXk7XG4gIHByaXZhdGUgcHJldmlvdXM6IEZsb2F0MzJBcnJheTtcblxuICAvKipcbiAgICogQ2VsbHMgd2l0aCBhIHZhbHVlIG9mIDEgYXJlIGxhbmQsIHdoaWNoIHN0b3BzIHJpcHBsZXNcbiAgICovXG4gIHByaXZhdGUgYmxvY2tlZDogVWludDhBcnJheSB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgdGltZTogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogdmVjMiwgY2VsbFNpemU6IHZlYzIpIHtcbiAgICBjb25zdCBjZWxscyA9IHNpemUueCAqIHNpemUueTtcblxuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuICAgIHRoaXMuY2VsbFNpemUgPSB2ZWMyLmNweShjZWxsU2l6ZSk7XG4gICAgdGhpcy5oZWlnaHQgPSBuZXcgRmxvYXQzMkFycmF5KGNlbGxzKTtcbiAgICB0aGlzLnByZXZpb3VzID0gbmV3IEZsb2F0MzJBcnJheShjZWxscyk7XG4gICAgdGhpcy5waXhlbHMgPSBuZXcgVWludDhBcnJheShjZWxscyAqIDQpO1xuICAgIHRoaXMudXBkYXRlUGl4ZWxzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdoaWNoIGNlbGxzIGFyZSBsYW5kXG4gICAqL1xuICBwdWJsaWMgc2V0QmxvY2tlZChibG9ja2VkOiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy5ibG9ja2VkID0gYmxvY2tlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIHRoZSB3YXRlciBhdCBhIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB0b3AtbGVmdCBvZiB0aGUgZ3JpZCwgbWVhc3VyZWRcbiAgICogaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHB1YmxpYyBkaXN0dXJiKHBvc2l0aW9uOiB2ZWMyLCB7IHJhZGl1cyA9IDYsIHN0cmVuZ3RoID0gMSB9OiBSaXBwbGVPcHRpb25zKSB7XG4gICAgY29uc3QgeyBzaXplLCBjZWxsU2l6ZSB9ID0gdGhpcztcbiAgICBjb25zdCByZWFjaCA9IHZlYzIocmFkaXVzICogMiwgcmFkaXVzICogMik7XG4gICAgY29uc3QgZmlyc3QgPSB2ZWMyLm1hcCh2ZWMyLnN1Yihwb3NpdGlvbiwgcmVhY2gpLCBNYXRoLmZsb29yKTtcbiAgICBjb25zdCBsYXN0ID0gdmVjMi5tYXAodmVjMi5hZGQocG9zaXRpb24sIHJlYWNoKSwgTWF0aC5jZWlsKTtcblxuICAgIGNvbnN0IHN0YXJ0WCA9IE1hdGgubWF4KE1hdGguZmxvb3IoZmlyc3QueCAvIGNlbGxTaXplLngpLCAwKTtcbiAgICBjb25zdCBlbmRYID0gTWF0aC5taW4oTWF0aC5jZWlsKGxhc3QueCAvIGNlbGxTaXplLngpLCBzaXplLnggLSAxKTtcbiAgICBjb25zdCBzdGFydFkgPSBNYXRoLm1heChNYXRoLmZsb29yKGZpcnN0LnkgLyBjZWxsU2l6ZS55KSwgMCk7XG4gICAgY29uc3QgZW5kWSA9IE1hdGgubWluKE1hdGguY2VpbChsYXN0LnkgLyBjZWxsU2l6ZS55KSwgc2l6ZS55IC0gMSk7XG5cbiAgICBmb3IgKGxldCB5ID0gc3RhcnRZOyB5IDw9IGVuZFk7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0WDsgeCA8PSBlbmRYOyB4KyspIHtcbiAgICAgICAgY29uc3QgZHggPSAoeCArIDAuNSkgKiBjZWxsU2l6ZS54IC0gcG9zaXRpb24ueDtcbiAgICAgICAgY29uc3QgZHkgPSAoeSArIDAuNSkgKiBjZWxsU2l6ZS55IC0gcG9zaXRpb24ueTtcbiAgICAgICAgY29uc3QgYW1vdW50ID1cbiAgICAgICAgICBzdHJlbmd0aCAqIE1hdGguZXhwKC0oZHggKiBkeCArIGR5ICogZHkpIC8gKHJhZGl1cyAqIHJhZGl1cykpO1xuXG4gICAgICAgIHRoaXMuaGVpZ2h0W3ggKyB5ICogc2l6ZS54XSArPSBhbW91bnQ7XG4gICAgICAgIHRoaXMucHJldmlvdXNbeCArIHkgKiBzaXplLnhdICs9IGFtb3VudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgc2ltdWxhdGlvbiBmb3J3YXJkXG4gICAqXG4gICAqIGBzcGVlZGAgaXMgaG93IGZhciByaXBwbGVzIHRyYXZlbCBlYWNoIHNlY29uZCwgaW4gd29ybGQgdW5pdHMsIGFuZFxuICAgKiBgZGFtcGluZ2AgaXMgaG93IG11Y2ggb2YgdGhlaXIgbW92ZW1lbnQgaXMga2VwdCBlYWNoIHN0ZXBcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlciwgc3BlZWQ6IG51bWJlciwgZGFtcGluZzogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGltZSArPSBkdDtcblxuICAgIC8vIERvbid0IHRyeSB0byBjYXRjaCB1cCBhZnRlciBhIGxvbmcgcGF1c2VcbiAgICBjb25zdCBzdGVwcyA9IE1hdGgubWluKE1hdGguZmxvb3IodGhpcy50aW1lIC8gUmlwcGxlRmllbGQuVElNRV9TVEVQKSwgNCk7XG4gICAgdGhpcy50aW1lICU9IFJpcHBsZUZpZWxkLlRJTUVfU1RFUDtcblxuICAgIGNvbnN0IGNlbGwgPSBNYXRoLm1pbih0aGlzLmNlbGxTaXplLngsIHRoaXMuY2VsbFNpemUueSk7XG4gICAgY29uc3Qgd2F2ZSA9IE1hdGgubWluKFxuICAgICAgc3BlZWQgKiBSaXBwbGVGaWVsZC5USU1FX1NURVAgLyBjZWxsLFxuICAgICAgUmlwcGxlRmllbGQuTUFYX1dBVkVfTlVNQkVSXG4gICAgKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHM7IGkrKykge1xuICAgICAgdGhpcy5zdGVwKHdhdmUgKiB3YXZlLCBkYW1waW5nKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBpeGVscygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGVwKHdhdmU6IG51bWJlciwgZGFtcGluZzogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHByZXZpb3VzLCBibG9ja2VkIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgeDogY29sdW1ucywgeTogcm93cyB9ID0gdGhpcy5zaXplO1xuXG4gICAgbGV0IGxhcmdlc3QgPSAwO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCByb3dzOyB5KyspIHtcbiAgICAgIGNvbnN0IHVwID0geSA+IDAgPyAtY29sdW1ucyA6IDA7XG4gICAgICBjb25zdCBkb3duID0geSA8IHJvd3MgLSAxID8gY29sdW1ucyA6IDA7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29sdW1uczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGkgPSB4ICsgeSAqIGNvbHVtbnM7XG5cbiAgICAgICAgaWYgKGJsb2NrZWQ/LltpXSkge1xuICAgICAgICAgIHByZXZpb3VzW2ldID0gMDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlZnQgPSB4ID4gMCA/IC0xIDogMDtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB4IDwgY29sdW1ucyAtIDEgPyAxIDogMDtcbiAgICAgICAgY29uc3QgbmVpZ2hib3VycyA9XG4gICAgICAgICAgaGVpZ2h0W2kgKyBsZWZ0XSArXG4gICAgICAgICAgaGVpZ2h0W2kgKyByaWdodF0gK1xuICAgICAgICAgIGhlaWdodFtpICsgdXBdICtcbiAgICAgICAgICBoZWlnaHRbaSArIGRvd25dO1xuXG4gICAgICAgIC8vIFRoZSBwcmV2aW91cyBoZWlnaHQgaXMgb3ZlcndyaXR0ZW4gaGVyZSBiZWNhdXNlIHRoYXQncyBhbGwgd2UgbmVlZFxuICAgICAgICAvLyBpdCBmb3IsIHNvIHRoZXNlIDIgYXJyYXlzIHN3YXAgcm9sZXMgYWZ0ZXIgZWFjaCBzdGVwXG4gICAgICAgIGNvbnN0IG5leHQgPVxuICAgICAgICAgIChoZWlnaHRbaV0gK1xuICAgICAgICAgICAgKGhlaWdodFtpXSAtIHByZXZpb3VzW2ldKSAqIGRhbXBpbmcgK1xuICAgICAgICAgICAgKG5laWdoYm91cnMgLSBoZWlnaHRbaV0gKiA0KSAqIHdhdmUpICpcbiAgICAgICAgICBSaXBwbGVGaWVsZC5IRUlHSFRfUkVUQUlORUQ7XG5cbiAgICAgICAgcHJldmlvdXNbaV0gPSBuZXh0O1xuICAgICAgICBsYXJnZXN0ID0gTWF0aC5tYXgobGFyZ2VzdCwgTWF0aC5hYnMobmV4dCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaGVpZ2h0ID0gcHJldmlvdXM7XG4gICAgdGhpcy5wcmV2aW91cyA9IGhlaWdodDtcblxuICAgIGlmIChsYXJnZXN0IDwgUmlwcGxlRmllbGQuTUlOX0hFSUdIVCkge1xuICAgICAgdGhpcy5oZWlnaHQuZmlsbCgwKTtcbiAgICAgIHRoaXMucHJldmlvdXMuZmlsbCgwKTtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQaXhlbHMoKSB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHBpeGVscyB9ID0gdGhpcztcbiAgICBjb25zdCB7IHg6IGNvbHVtbnMsIHk6IHJvd3MgfSA9IHRoaXMuc2l6ZTtcblxuICAgIGNvbnN0IGVuY29kZSA9ICh2YWx1ZTogbnVtYmVyKSA9PlxuICAgICAgTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5yb3VuZCh2YWx1ZSAqIDEyNykgKyAxMjgsIDApLCAyNTUpO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCByb3dzOyB5KyspIHtcbiAgICAgIGNvbnN0IHVwID0geSA+IDAgPyAtY29sdW1ucyA6IDA7XG4gICAgICBjb25zdCBkb3duID0geSA8IHJvd3MgLSAxID8gY29sdW1ucyA6IDA7XG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29sdW1uczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGkgPSB4ICsgeSAqIGNvbHVtbnM7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB4ID4gMCA/IC0xIDogMDtcbiAgICAgICAgY29uc3QgcmlnaHQgPSB4IDwgY29sdW1ucyAtIDEgPyAxIDogMDtcblxuICAgICAgICBwaXhlbHNbaSAqIDRdID0gZW5jb2RlKChoZWlnaHRbaSArIHJpZ2h0XSAtIGhlaWdodFtpICsgbGVmdF0pIC8gMik7XG4gICAgICAgIHBpeGVsc1tpICogNCArIDFdID0gZW5jb2RlKChoZWlnaHRbaSArIGRvd25dIC0gaGVpZ2h0W2kgKyB1cF0pIC8gMik7XG4gICAgICAgIHBpeGVsc1tpICogNCArIDJdID0gZW5jb2RlKGhlaWdodFtpXSk7XG4gICAgICAgIHBpeGVsc1tpICogNCArIDNdID0gMjU1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VDb2xvciB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3InO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBGcmFtZSwgR2xDb250ZXh0LCBHbFByb2dyYW0sIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgV2F0ZXJSZWdpb24gfSBmcm9tICcuL1dhdGVyUmVnaW9uJztcbmltcG9ydCB3YXRlclNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy93YXRlci5mcmFnLmdsc2wnKTtcblxuZW51bSBUZXh0dXJlVW5pdCB7XG4gIFNjZW5lLFxuICBSZWZsZWN0aW9uTWFwLFxuICBNYXNrLFxuICBEZXB0aE1hcCxcbiAgRmxvd01hcCxcbiAgV2F2ZU1hcCxcbiAgTm9pc2VNYXAsXG4gIFJpcHBsZU1hcCxcbn1cblxuLyoqXG4gKiBXaGF0IHRoZSBzaGFkZXIgc2hvdWxkIG91dHB1dCwgdGhlc2UgdmFsdWVzIGFyZSBhbHNvIGluIHRoZSBzaGFkZXJcbiAqL1xuZXhwb3J0IGVudW0gV2F0ZXJPdXRwdXQge1xuICBDb2xvdXIgPSAwLFxuICBOb3JtYWwgPSAxLFxuICBTcGVjdWxhciA9IDIsXG59XG5cbnR5cGUgUmVnaW9uVGV4dHVyZXMgPSB7XG4gIG1hc2s6IFdlYkdMVGV4dHVyZTtcbiAgbWFza0ltYWdlOiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgbWFza1ZlcnNpb246IG51bWJlcjtcbiAgZGVwdGg6IFdlYkdMVGV4dHVyZTtcbiAgZGVwdGhWZXJzaW9uOiBudW1iZXI7XG4gIGZsb3c6IFdlYkdMVGV4dHVyZTtcbiAgZmxvd1ZlcnNpb246IG51bWJlcjtcbiAgcmlwcGxlczogV2ViR0xUZXh0dXJlO1xuICByaXBwbGVzVXBsb2FkZWQ6IGJvb2xlYW47XG4gIHdhdmVzOiBXZWJHTFRleHR1cmUgfCBudWxsO1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIHdhdGVyIHVzaW5nIGEgc2hhcmVkIFdlYkdMIGNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFdhdGVyUGFzcyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdBVkVfTUFQX1NJWkUgPSAyNTY7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdBVkVfQ09VTlQgPSAzMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FWRV9NQVhfRlJFUVVFTkNZID0gMTQ7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PSVNFX1dBVkVfQ09VTlQgPSA4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBOT0lTRV9NQVhfRlJFUVVFTkNZID0gMztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRkxPV19DWUNMRSA9IDI7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgd2F2ZU1hcERhdGE6IFVpbnQ4QXJyYXkgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogTWFrZSBhIHRpbGluZyBub3JtYWwgbWFwIHdpdGggbm9pc2UgaW4gdGhlIGJsdWUgY2hhbm5lbCwgdGhlIG5vcm1hbCBtYXAgaXNcbiAgICogbWFkZSBmcm9tIHNpbmUgd2F2ZXMgdGhhdCByZXBlYXQgYSB3aG9sZSBudW1iZXIgb2YgdGltZXMgYWNyb3NzIHRoZSB0ZXh0dXJlXG4gICAqIHNvIHRoYXQgaXQgdGlsZXMgcGVyZmVjdGx5XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBnZXRXYXZlTWFwRGF0YSgpOiBVaW50OEFycmF5IHtcbiAgICBpZiAoV2F0ZXJQYXNzLndhdmVNYXBEYXRhKSB7XG4gICAgICByZXR1cm4gV2F0ZXJQYXNzLndhdmVNYXBEYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSBXYXRlclBhc3MuV0FWRV9NQVBfU0laRTtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSAqIHNpemUgKiA0KTtcbiAgICBjb25zdCBhbmdsZSA9IChNYXRoLlBJICogMikgLyBzaXplO1xuXG4gICAgLy8gVGhlIHRleHR1cmVzIHNob3VsZCBiZSB0aGUgc2FtZSBldmVyeSB0aW1lLCBzbyB0aGlzIHVzZXMgYSBzbWFsbCByYW5kb21cbiAgICAvLyBudW1iZXIgZ2VuZXJhdG9yIGluc3RlYWQgb2YgTWF0aC5yYW5kb20oKVxuICAgIGxldCBzZWVkID0gMTIzNDU7XG4gICAgY29uc3QgcmFuZG9tID0gKCkgPT4ge1xuICAgICAgc2VlZCA9IChzZWVkICogMTY4MDcpICUgMjE0NzQ4MzY0NztcblxuICAgICAgcmV0dXJuIHNlZWQgLyAyMTQ3NDgzNjQ3O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVXYXZlcyA9IChjb3VudDogbnVtYmVyLCBtYXhGcmVxdWVuY3k6IG51bWJlcikgPT5cbiAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IGNvdW50IH0sICgpID0+IHtcbiAgICAgICAgY29uc3QgZnJlcXVlbmN5ID0gKCkgPT5cbiAgICAgICAgICBNYXRoLnJvdW5kKChyYW5kb20oKSAqIDIgLSAxKSAqIG1heEZyZXF1ZW5jeSkgfHwgMTtcbiAgICAgICAgY29uc3QgeCA9IGZyZXF1ZW5jeSgpO1xuICAgICAgICBjb25zdCB5ID0gZnJlcXVlbmN5KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4LFxuICAgICAgICAgIHksXG4gICAgICAgICAgcGhhc2U6IHJhbmRvbSgpICogTWF0aC5QSSAqIDIsXG4gICAgICAgICAgYW1wbGl0dWRlOiAxIC8gTWF0aC5oeXBvdCh4LCB5KSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3Qgd2F2ZXMgPSBjcmVhdGVXYXZlcyhcbiAgICAgIFdhdGVyUGFzcy5XQVZFX0NPVU5ULFxuICAgICAgV2F0ZXJQYXNzLldBVkVfTUFYX0ZSRVFVRU5DWVxuICAgICk7XG4gICAgY29uc3Qgbm9pc2UgPSBjcmVhdGVXYXZlcyhcbiAgICAgIFdhdGVyUGFzcy5OT0lTRV9XQVZFX0NPVU5ULFxuICAgICAgV2F0ZXJQYXNzLk5PSVNFX01BWF9GUkVRVUVOQ1lcbiAgICApO1xuXG4gICAgY29uc3Qgc2xvcGVzID0gbmV3IEZsb2F0MzJBcnJheShzaXplICogc2l6ZSAqIDIpO1xuICAgIGNvbnN0IGhlaWdodHMgPSBuZXcgRmxvYXQzMkFycmF5KHNpemUgKiBzaXplKTtcbiAgICBsZXQgbGFyZ2VzdFNsb3BlID0gMDtcbiAgICBsZXQgbGFyZ2VzdEhlaWdodCA9IDA7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9IHggKyB5ICogc2l6ZTtcblxuICAgICAgICBmb3IgKGNvbnN0IHdhdmUgb2Ygd2F2ZXMpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IE1hdGguY29zKFxuICAgICAgICAgICAgKHdhdmUueCAqIHggKyB3YXZlLnkgKiB5KSAqIGFuZ2xlICsgd2F2ZS5waGFzZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBzbG9wZXNbaSAqIDJdICs9IHdhdmUuYW1wbGl0dWRlICogd2F2ZS54ICogdmFsdWU7XG4gICAgICAgICAgc2xvcGVzW2kgKiAyICsgMV0gKz0gd2F2ZS5hbXBsaXR1ZGUgKiB3YXZlLnkgKiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qgd2F2ZSBvZiBub2lzZSkge1xuICAgICAgICAgIGhlaWdodHNbaV0gKz1cbiAgICAgICAgICAgIHdhdmUuYW1wbGl0dWRlICpcbiAgICAgICAgICAgIE1hdGguc2luKCh3YXZlLnggKiB4ICsgd2F2ZS55ICogeSkgKiBhbmdsZSArIHdhdmUucGhhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFyZ2VzdFNsb3BlID0gTWF0aC5tYXgoXG4gICAgICAgICAgbGFyZ2VzdFNsb3BlLFxuICAgICAgICAgIE1hdGguYWJzKHNsb3Blc1tpICogMl0pLFxuICAgICAgICAgIE1hdGguYWJzKHNsb3Blc1tpICogMiArIDFdKVxuICAgICAgICApO1xuICAgICAgICBsYXJnZXN0SGVpZ2h0ID0gTWF0aC5tYXgobGFyZ2VzdEhlaWdodCwgTWF0aC5hYnMoaGVpZ2h0c1tpXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSAqIHNpemU7IGkrKykge1xuICAgICAgZGF0YVtpICogNF0gPSAoc2xvcGVzW2kgKiAyXSAvIGxhcmdlc3RTbG9wZSkgKiAxMjcuNSArIDEyNy41O1xuICAgICAgZGF0YVtpICogNCArIDFdID0gKHNsb3Blc1tpICogMiArIDFdIC8gbGFyZ2VzdFNsb3BlKSAqIDEyNy41ICsgMTI3LjU7XG4gICAgICBkYXRhW2kgKiA0ICsgMl0gPSAoaGVpZ2h0c1tpXSAvIGxhcmdlc3RIZWlnaHQpICogMTI3LjUgKyAxMjcuNTtcbiAgICAgIGRhdGFbaSAqIDQgKyAzXSA9IDI1NTtcbiAgICB9XG5cbiAgICBXYXRlclBhc3Mud2F2ZU1hcERhdGEgPSBkYXRhO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcml2YXRlIGNvbnRleHQ6IEdsQ29udGV4dDtcbiAgcHJpdmF0ZSBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcHJvZ3JhbTogR2xQcm9ncmFtO1xuICBwcml2YXRlIHNjZW5lVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBwcml2YXRlIHJlZmxlY3Rpb25UZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIHByaXZhdGUgd2F2ZVRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgcHJpdmF0ZSByZWdpb25UZXh0dXJlcyA9IG5ldyBNYXA8V2F0ZXJSZWdpb24sIFJlZ2lvblRleHR1cmVzPigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29udGV4dC5vbkluaXRpYWxpc2UoZ2wgPT4gdGhpcy5pbml0aWFsaXNlKGdsKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dHB1dCBvZiB0aGUgbW9zdCByZWNlbnQgcGFzc1xuICAgKi9cbiAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuY2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzaGFkZXJzIGNhbiBiZSB1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLmNvbnRleHQuYXZhaWxhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5wcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0od2F0ZXJTaGFkZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dhdGVyIGhhcyBiZWVuIGRpc2FibGVkJywgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zY2VuZVRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMucmVmbGVjdGlvblRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMud2F2ZVRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMucmVnaW9uVGV4dHVyZXMgPSBuZXcgTWFwKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudXBsb2FkRGF0YShcbiAgICAgIFRleHR1cmVVbml0LldhdmVNYXAsXG4gICAgICB0aGlzLndhdmVUZXh0dXJlLFxuICAgICAgdmVjMihXYXRlclBhc3MuV0FWRV9NQVBfU0laRSksXG4gICAgICBXYXRlclBhc3MuZ2V0V2F2ZU1hcERhdGEoKSxcbiAgICAgIGdsLkxJTkVBUixcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRm9yZ2V0IGFib3V0IGEgcmVnaW9uJ3MgdGV4dHVyZXNcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKHJlZ2lvbjogV2F0ZXJSZWdpb24pIHtcbiAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMucmVnaW9uVGV4dHVyZXMuZ2V0KHJlZ2lvbik7XG4gICAgaWYgKCF0ZXh0dXJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy5tYXNrKTtcbiAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy5kZXB0aCk7XG4gICAgZ2w/LmRlbGV0ZVRleHR1cmUodGV4dHVyZXMuZmxvdyk7XG4gICAgZ2w/LmRlbGV0ZVRleHR1cmUodGV4dHVyZXMucmlwcGxlcyk7XG4gICAgaWYgKHRleHR1cmVzLndhdmVzKSB7XG4gICAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy53YXZlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZWdpb25UZXh0dXJlcy5kZWxldGUocmVnaW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGV4dHVyZXMoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICByZWdpb246IFdhdGVyUmVnaW9uXG4gICk6IFJlZ2lvblRleHR1cmVzIHtcbiAgICBsZXQgdGV4dHVyZXMgPSB0aGlzLnJlZ2lvblRleHR1cmVzLmdldChyZWdpb24pO1xuICAgIGlmICghdGV4dHVyZXMpIHtcbiAgICAgIHRleHR1cmVzID0ge1xuICAgICAgICBtYXNrOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgICBtYXNrSW1hZ2U6IG51bGwsXG4gICAgICAgIG1hc2tWZXJzaW9uOiAtMSxcbiAgICAgICAgZGVwdGg6IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICAgIGRlcHRoVmVyc2lvbjogLTEsXG4gICAgICAgIGZsb3c6IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICAgIGZsb3dWZXJzaW9uOiAtMSxcbiAgICAgICAgcmlwcGxlczogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgICAgcmlwcGxlc1VwbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgd2F2ZXM6IHJlZ2lvbi5ub3JtYWxNYXAgPyBnbC5jcmVhdGVUZXh0dXJlKCkhIDogbnVsbCxcbiAgICAgIH07XG4gICAgICB0aGlzLnJlZ2lvblRleHR1cmVzLnNldChyZWdpb24sIHRleHR1cmVzKTtcblxuICAgICAgaWYgKHJlZ2lvbi5ub3JtYWxNYXAgJiYgdGV4dHVyZXMud2F2ZXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZChcbiAgICAgICAgICBUZXh0dXJlVW5pdC5XYXZlTWFwLFxuICAgICAgICAgIHRleHR1cmVzLndhdmVzLFxuICAgICAgICAgIHRoaXMucG93ZXJPZlR3b0ltYWdlKHJlZ2lvbi5ub3JtYWxNYXApLFxuICAgICAgICAgIGdsLkxJTkVBUixcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRleHR1cmVzIGNhbiBvbmx5IHRpbGUgaWYgdGhlaXIgc2l6ZSBpcyBhIHBvd2VyIG9mIDJcbiAgICovXG4gIHByaXZhdGUgcG93ZXJPZlR3b0ltYWdlKGltYWdlOiBTY2VuZUltYWdlKTogU2NlbmVJbWFnZSB7XG4gICAgY29uc3QgaXNQb3dlck9mVHdvID0gKG46IG51bWJlcikgPT4gKG4gJiAobiAtIDEpKSA9PT0gMDtcbiAgICBpZiAoaXNQb3dlck9mVHdvKGltYWdlLndpZHRoKSAmJiBpc1Bvd2VyT2ZUd28oaW1hZ2UuaGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5oZWlnaHQgPSBXYXRlclBhc3MuV0FWRV9NQVBfU0laRTtcbiAgICBjYW52YXNcbiAgICAgIC5nZXRDb250ZXh0KCcyZCcpIVxuICAgICAgLmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogTWFza3MgY2FuIGJlIGNhbnZhc2VzLCBidXQgdGhleSBkb24ndCBjaGFuZ2UgdmVyeSBvZnRlbiBzbyB0aGV5J3JlIG9ubHlcbiAgICogdXBsb2FkZWQgaWYgd2UncmUgdG9sZCBhYm91dCBhIGNoYW5nZVxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kTWFzayhcbiAgICByZWdpb246IFdhdGVyUmVnaW9uLFxuICAgIHRleHR1cmVzOiBSZWdpb25UZXh0dXJlcyxcbiAgICBmaWx0ZXI6IG51bWJlclxuICApIHtcbiAgICBjb25zdCB7IG1hc2ssIG1hc2tWZXJzaW9uIH0gPSByZWdpb247XG4gICAgaWYgKCFtYXNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRleHR1cmVzLm1hc2tJbWFnZSA9PT0gbWFzayAmJiB0ZXh0dXJlcy5tYXNrVmVyc2lvbiA9PT0gbWFza1ZlcnNpb24pIHtcbiAgICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShUZXh0dXJlVW5pdC5NYXNrLCB0ZXh0dXJlcy5tYXNrLCBmaWx0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkKFRleHR1cmVVbml0Lk1hc2ssIHRleHR1cmVzLm1hc2ssIG1hc2ssIGZpbHRlcik7XG4gICAgICB0ZXh0dXJlcy5tYXNrSW1hZ2UgPSBtYXNrO1xuICAgICAgdGV4dHVyZXMubWFza1ZlcnNpb24gPSBtYXNrVmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIGEgcmVnaW9uJ3MgdGV4dHVyZXMgYXJlIHVwIHRvIGRhdGUgYW5kIGJpbmQgdGhlbVxuICAgKi9cbiAgcHJpdmF0ZSBiaW5kUmVnaW9uKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvbixcbiAgICBmaWx0ZXI6IG51bWJlclxuICApIHtcbiAgICBjb25zdCB0ZXh0dXJlcyA9IHRoaXMuZ2V0VGV4dHVyZXMoZ2wsIHJlZ2lvbik7XG4gICAgY29uc3QgeyBkZXB0aFBpeGVscywgZmxvd1BpeGVscywgcmlwcGxlcyB9ID0gcmVnaW9uO1xuXG4gICAgdGhpcy5iaW5kTWFzayhyZWdpb24sIHRleHR1cmVzLCBmaWx0ZXIpO1xuXG4gICAgaWYgKHRleHR1cmVzLmRlcHRoVmVyc2lvbiA9PT0gZGVwdGhQaXhlbHMudmVyc2lvbikge1xuICAgICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRleHR1cmVVbml0LkRlcHRoTWFwLCB0ZXh0dXJlcy5kZXB0aCwgZ2wuTElORUFSKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZERhdGEoXG4gICAgICAgIFRleHR1cmVVbml0LkRlcHRoTWFwLFxuICAgICAgICB0ZXh0dXJlcy5kZXB0aCxcbiAgICAgICAgZGVwdGhQaXhlbHMuc2l6ZSxcbiAgICAgICAgZGVwdGhQaXhlbHMuZGF0YSxcbiAgICAgICAgZ2wuTElORUFSXG4gICAgICApO1xuICAgICAgdGV4dHVyZXMuZGVwdGhWZXJzaW9uID0gZGVwdGhQaXhlbHMudmVyc2lvbjtcbiAgICB9XG5cbiAgICBpZiAodGV4dHVyZXMuZmxvd1ZlcnNpb24gPT09IGZsb3dQaXhlbHMudmVyc2lvbikge1xuICAgICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRleHR1cmVVbml0LkZsb3dNYXAsIHRleHR1cmVzLmZsb3csIGdsLkxJTkVBUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGV4dC51cGxvYWREYXRhKFxuICAgICAgICBUZXh0dXJlVW5pdC5GbG93TWFwLFxuICAgICAgICB0ZXh0dXJlcy5mbG93LFxuICAgICAgICBmbG93UGl4ZWxzLnNpemUsXG4gICAgICAgIGZsb3dQaXhlbHMuZGF0YSxcbiAgICAgICAgZ2wuTElORUFSXG4gICAgICApO1xuICAgICAgdGV4dHVyZXMuZmxvd1ZlcnNpb24gPSBmbG93UGl4ZWxzLnZlcnNpb247XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFxuICAgICAgVGV4dHVyZVVuaXQuV2F2ZU1hcCxcbiAgICAgIHRleHR1cmVzLndhdmVzID8/IHRoaXMud2F2ZVRleHR1cmUsXG4gICAgICBnbC5MSU5FQVIsXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIC8vIFJpcHBsZXMgb25seSBuZWVkIHVwbG9hZGluZyB3aGlsZSB0aGV5J3JlIG1vdmluZ1xuICAgIGlmIChyaXBwbGVzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZERhdGEoXG4gICAgICAgIFRleHR1cmVVbml0LlJpcHBsZU1hcCxcbiAgICAgICAgdGV4dHVyZXMucmlwcGxlcyxcbiAgICAgICAgcmlwcGxlcy5zaXplLFxuICAgICAgICByaXBwbGVzLnBpeGVscyxcbiAgICAgICAgZ2wuTElORUFSXG4gICAgICApO1xuICAgICAgdGV4dHVyZXMucmlwcGxlc1VwbG9hZGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVzLnJpcHBsZXNVcGxvYWRlZCkge1xuICAgICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFxuICAgICAgICBUZXh0dXJlVW5pdC5SaXBwbGVNYXAsXG4gICAgICAgIHRleHR1cmVzLnJpcHBsZXMsXG4gICAgICAgIGdsLkxJTkVBUlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFJlZ2lvblVuaWZvcm1zKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHJlZ2lvbjogV2F0ZXJSZWdpb24pIHtcbiAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLnByb2dyYW07XG4gICAgY29uc3QgY29sb3VyID0gcGFyc2VDb2xvcihyZWdpb24uY29sb3VyKTtcbiAgICBjb25zdCBkZWVwQ29sb3VyID0gcGFyc2VDb2xvcihyZWdpb24uZGVlcENvbG91cik7XG4gICAgY29uc3QgeyBtYXNrIH0gPSByZWdpb247XG5cbiAgICBnbC51bmlmb3JtMmYoXG4gICAgICB1bmlmb3Jtcy51X3JlZ2lvblBvc2l0aW9uLFxuICAgICAgcmVnaW9uLnBvc2l0aW9uLngsXG4gICAgICByZWdpb24ucG9zaXRpb24ueVxuICAgICk7XG4gICAgZ2wudW5pZm9ybTJmKHVuaWZvcm1zLnVfcmVnaW9uU2l6ZSwgcmVnaW9uLnNpemUueCwgcmVnaW9uLnNpemUueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTWFzaywgbWFzayA/IDEgOiAwKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VNYXNrUmVwZWF0LCByZWdpb24ucmVwZWF0ID8gMSA6IDApO1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9tYXNrU2l6ZSwgbWFzay53aWR0aCwgbWFzay5oZWlnaHQpO1xuICAgIH1cblxuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3VzZVJpcHBsZXMsIHJlZ2lvbi5yaXBwbGVzLmFjdGl2ZSA/IDEgOiAwKTtcbiAgICBnbC51bmlmb3JtM2YoXG4gICAgICB1bmlmb3Jtcy51X2NvbG91cixcbiAgICAgIGNvbG91ci5yIC8gMjU1LFxuICAgICAgY29sb3VyLmcgLyAyNTUsXG4gICAgICBjb2xvdXIuYiAvIDI1NVxuICAgICk7XG4gICAgZ2wudW5pZm9ybTNmKFxuICAgICAgdW5pZm9ybXMudV9kZWVwQ29sb3VyLFxuICAgICAgZGVlcENvbG91ci5yIC8gMjU1LFxuICAgICAgZGVlcENvbG91ci5nIC8gMjU1LFxuICAgICAgZGVlcENvbG91ci5iIC8gMjU1XG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9vcGFjaXR5LCByZWdpb24ub3BhY2l0eSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc2hvcmVCbGVuZCwgcmVnaW9uLnNob3JlQmxlbmQpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3JlZnJhY3Rpb24sIHJlZ2lvbi5yZWZyYWN0aW9uKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9yZWZsZWN0aW9uLCByZWdpb24ucmVmbGVjdGlvbik7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfcmVmbGVjdGlvbkRpc3RvcnRpb24sIHJlZ2lvbi5yZWZsZWN0aW9uRGlzdG9ydGlvbik7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2F2ZVNpemUsIHJlZ2lvbi53YXZlU2l6ZSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2F2ZVNwZWVkLCByZWdpb24ud2F2ZVNwZWVkKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YXZlU3RyZW5ndGgsIHJlZ2lvbi53YXZlU3RyZW5ndGgpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3JpcHBsZVN0cmVuZ3RoLCByZWdpb24ucmlwcGxlU3RyZW5ndGgpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X2Zsb3dDeWNsZSwgV2F0ZXJQYXNzLkZMT1dfQ1lDTEUpO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHVuaWZvcm1zLnVfZmxvd0Rpc3RhbmNlLFxuICAgICAgcmVnaW9uLmZsb3dTcGVlZCAqIFdhdGVyUGFzcy5GTE9XX0NZQ0xFXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zcGVjdWxhciwgcmVnaW9uLnNwZWN1bGFyKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zdXJmYWNlU2hhZGluZywgcmVnaW9uLnN1cmZhY2VTaGFkaW5nKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9waXhlbFNpemUsIHJlZ2lvbi5waXhlbFNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3UmVnaW9uKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvbixcbiAgICBmcmFtZTogRnJhbWVcbiAgKSB7XG4gICAgY29uc3QgdG9wTGVmdCA9IGZyYW1lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHJlZ2lvbi5wb3NpdGlvbik7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbihcbiAgICAgIHZlYzIuYWRkKHJlZ2lvbi5wb3NpdGlvbiwgcmVnaW9uLnNpemUpXG4gICAgKTtcbiAgICBjb25zdCBzaXplID0gdmVjMi5zdWIoYm90dG9tUmlnaHQsIHRvcExlZnQpO1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMucHJvZ3JhbTtcblxuICAgIHRoaXMuYmluZFJlZ2lvbihcbiAgICAgIGdsLFxuICAgICAgcmVnaW9uLFxuICAgICAgZnJhbWUuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUXG4gICAgKTtcbiAgICB0aGlzLnNldFJlZ2lvblVuaWZvcm1zKGdsLCByZWdpb24pO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3Jtcy51X3JlZ2lvblNjcmVlblBvc2l0aW9uLCB0b3BMZWZ0LngsIHRvcExlZnQueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfY2FtZXJhU2NhbGUsIHNpemUueCAvIHJlZ2lvbi5zaXplLngpO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdRdWFkKFxuICAgICAgdGhpcy5wcm9ncmFtLFxuICAgICAgW3RvcExlZnQueCwgdG9wTGVmdC55LCBzaXplLngsIHNpemUueV0sXG4gICAgICB1bmRlZmluZWQsXG4gICAgICBbMCwgMCwgMSwgMV1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBzb21lIHdhdGVyIGludG8gdGhlIGNhbnZhc1xuICAgKlxuICAgKiBXaXRoIGEgYHNjYWxlYCBiZWxvdyAxIHRoZSBvdXRwdXQgaXMgc21hbGxlciB0aGFuIHRoZSBjYW52YXMsIGFuZCBpdCdzIGluXG4gICAqIHRoZSBib3R0b20tbGVmdCBjb3JuZXIgb2YgdGhlIGNhbnZhc1xuICAgKlxuICAgKiBgc2NlbmVgIGlzIHdoYXQncyB1bmRlcm5lYXRoIHRoZSB3YXRlciwgaXQgY2FuIGJlIGEgc21hbGxlciBjb3B5IG9mIHRoZVxuICAgKiBmcmFtZSdzIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoXG4gICAgZnJhbWU6IEZyYW1lLFxuICAgIHJlZ2lvbnM6IFdhdGVyUmVnaW9uW10sXG4gICAgb3V0cHV0OiBXYXRlck91dHB1dCxcbiAgICB0aW1lOiBudW1iZXIsXG4gICAgc2NhbGU6IG51bWJlciA9IDEsXG4gICAgc2NlbmU6IFNjZW5lSW1hZ2UgPSBmcmFtZS5jb250ZXh0LmNhbnZhc1xuICApIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKCFnbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdW5pZm9ybXMsIHByb2dyYW0gfSA9IHRoaXMucHJvZ3JhbTtcbiAgICBjb25zdCBmaWx0ZXIgPSBmcmFtZS5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1Q7XG5cbiAgICB0aGlzLmNvbnRleHQucmVzaXplKGZyYW1lLnNjcmVlbik7XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgIGdsLnZpZXdwb3J0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBNYXRoLmNlaWwoZnJhbWUuc2NyZWVuLnggKiBzY2FsZSksXG4gICAgICBNYXRoLmNlaWwoZnJhbWUuc2NyZWVuLnkgKiBzY2FsZSlcbiAgICApO1xuICAgIGdsLmRpc2FibGUoZ2wuQkxFTkQpO1xuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG5cbiAgICAvLyBUaGUgc2NlbmUgYW5kIGl0cyByZWZsZWN0aW9ucyBvbmx5IG1hdHRlciBmb3IgdGhlIHdhdGVyJ3MgY29sb3VyXG4gICAgaWYgKG91dHB1dCA9PT0gV2F0ZXJPdXRwdXQuQ29sb3VyKSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkKFxuICAgICAgICBUZXh0dXJlVW5pdC5TY2VuZSxcbiAgICAgICAgdGhpcy5zY2VuZVRleHR1cmUsXG4gICAgICAgIHNjZW5lLFxuICAgICAgICBmaWx0ZXJcbiAgICAgICk7XG5cbiAgICAgIGlmIChmcmFtZS5yZWZsZWN0aW9uTWFwKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC51cGxvYWQoXG4gICAgICAgICAgVGV4dHVyZVVuaXQuUmVmbGVjdGlvbk1hcCxcbiAgICAgICAgICB0aGlzLnJlZmxlY3Rpb25UZXh0dXJlLFxuICAgICAgICAgIGZyYW1lLnJlZmxlY3Rpb25NYXAsXG4gICAgICAgICAgZmlsdGVyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIG5vaXNlIGlzIGFsd2F5cyBpbiB0aGUgZGVmYXVsdCBtYXAsIGV2ZW4gaWYgYSByZWdpb24gaGFzIGl0cyBvd25cbiAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoXG4gICAgICBUZXh0dXJlVW5pdC5Ob2lzZU1hcCxcbiAgICAgIHRoaXMud2F2ZVRleHR1cmUsXG4gICAgICBnbC5MSU5FQVIsXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKHVuaWZvcm1zLnVfc2NyZWVuLCBmcmFtZS5zY3JlZW4ueCwgZnJhbWUuc2NyZWVuLnkpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3RpbWUsIHRpbWUpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X291dHB1dCwgb3V0cHV0KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VSZWZsZWN0aW9uLCBmcmFtZS5yZWZsZWN0aW9uTWFwID8gMSA6IDApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3NjZW5lLCBUZXh0dXJlVW5pdC5TY2VuZSk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfcmVmbGVjdGlvbk1hcCwgVGV4dHVyZVVuaXQuUmVmbGVjdGlvbk1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfbWFzaywgVGV4dHVyZVVuaXQuTWFzayk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfZGVwdGhNYXAsIFRleHR1cmVVbml0LkRlcHRoTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9mbG93TWFwLCBUZXh0dXJlVW5pdC5GbG93TWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV93YXZlTWFwLCBUZXh0dXJlVW5pdC5XYXZlTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9ub2lzZU1hcCwgVGV4dHVyZVVuaXQuTm9pc2VNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3JpcHBsZU1hcCwgVGV4dHVyZVVuaXQuUmlwcGxlTWFwKTtcblxuICAgIHJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4gdGhpcy5kcmF3UmVnaW9uKGdsLCByZWdpb24sIGZyYW1lKSk7XG5cbiAgICBnbC52aWV3cG9ydCgwLCAwLCBmcmFtZS5zY3JlZW4ueCwgZnJhbWUuc2NyZWVuLnkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IGRyYXdJbWFnZUluUmVjdGFuZ2xlLCBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFJpcHBsZUZpZWxkLCBSaXBwbGVPcHRpb25zIH0gZnJvbSAnLi9SaXBwbGVGaWVsZCc7XG5pbXBvcnQgdHlwZSB7IFdhdGVyU3lzdGVtIH0gZnJvbSAnLi9XYXRlclN5c3RlbSc7XG5cbi8qKlxuICogQSBncmlkIG9mIHZhbHVlcyB0aGF0IGNvdmVycyBhIHJlZ2lvbiwgdGhlIGZpcnN0IGluZGV4IGlzIHRoZSByb3dcbiAqXG4gKiBWYWx1ZXMgYXJlIGludGVycG9sYXRlZCBiZXR3ZWVuIHRoZSBjZW50ZXJzIG9mIHRoZSBjZWxsc1xuICovXG5leHBvcnQgdHlwZSBXYXRlckdyaWQ8VD4gPSBUW11bXTtcblxuZXhwb3J0IHR5cGUgV2F0ZXJSZWdpb25PcHRpb25zID0gUmVjdGFuZ2xlICYge1xuICAvKipcbiAgICogSW1hZ2Ugd2hvc2UgYWxwaGEgY2hhbm5lbCBkZWNpZGVzIHdoZXJlIHRoZSB3YXRlciBpcywgdGhlIGRlZmF1bHQgaXMgdGhlXG4gICAqIHdob2xlIHJlY3RhbmdsZVxuICAgKlxuICAgKiBUaGUgZWRnZSBvZiB0aGUgbWFzayBpcyBhIGhhcmQgZWRnZSB1bmxlc3MgdGhlIHdhdGVyIGdldHMgc2hhbGxvd2VyIHRvd2FyZHNcbiAgICogaXQsIHNvIHRoaXMgY2FuIGJlIHVzZWQgZm9yIHNob3JlcyB0aGF0IGZvbGxvdyB0aGUgc2hhcGUgb2YgdGhlIHRlcnJhaW5cbiAgICovXG4gIG1hc2s/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBtYXNrIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVnaW9uPyBPdGhlcndpc2UgaXQgd2lsbCBiZVxuICAgKiBzdHJldGNoZWQgdG8gZml0XG4gICAqL1xuICByZXBlYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIb3cgZGVlcCB0aGUgd2F0ZXIgaXMsIGZyb20gMCBhdCB0aGUgc2hvcmUgdG8gMSBpbiB0aGUgZGVlcGVzdCBwYXJ0c1xuICAgKlxuICAgKiBUaGlzIGNhbiBiZSBhIHNpbmdsZSBudW1iZXIgb3IgYSBncmlkXG4gICAqL1xuICBkZXB0aD86IG51bWJlciB8IFdhdGVyR3JpZDxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBXaGljaCB3YXkgdGhlIHdhdGVyIGZsb3dzIGFuZCBob3cgcXVpY2tseSwgdGhlc2UgdmVjdG9ycyBzaG91bGQgYmUgbm9cbiAgICogbG9uZ2VyIHRoYW4gMVxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSBhIHNpbmdsZSB2ZWN0b3Igb3IgYSBncmlkXG4gICAqL1xuICBmbG93PzogdmVjMiB8IFdhdGVyR3JpZDx2ZWMyPjtcblxuICAvKipcbiAgICogRGlzdGFuY2UgdGhhdCB3YXRlciBtb3ZlcyBlYWNoIHNlY29uZCB3aGVuIGEgZmxvdyB2ZWN0b3IgaGFzIGEgbGVuZ3RoIG9mIDFcbiAgICovXG4gIGZsb3dTcGVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGNvbG91ciBvZiBzaGFsbG93IHdhdGVyXG4gICAqL1xuICBjb2xvdXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvdXIgb2YgZGVlcCB3YXRlclxuICAgKi9cbiAgZGVlcENvbG91cj86IHN0cmluZztcblxuICAvKipcbiAgICogSG93IG11Y2ggdGhlIHdhdGVyIGhpZGVzIHdoYXQncyB1bmRlcm5lYXRoIGl0IGF0IHRoZSBkZWVwZXN0IHBvaW50LCBmcm9tIDBcbiAgICogdG8gMVxuICAgKi9cbiAgb3BhY2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRlcHRoIGF0IHdoaWNoIHdhdGVyIGlzIGZ1bGx5IHZpc2libGUsIGl0IGZhZGVzIG91dCBhdCBkZXB0aHMgYmVsb3dcbiAgICogdGhpcyB0byBibGVuZCB3aXRoIHRoZSBzaG9yZS4gVXNlIDAgZm9yIHdhdGVyIHRoYXQgZG9lc24ndCBmYWRlIG91dFxuICAgKi9cbiAgc2hvcmVCbGVuZD86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGZhciB3YXZlcyBjYW4gYmVuZCB3aGF0J3MgdW5kZXJuZWF0aCB0aGUgd2F0ZXIsIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByZWZyYWN0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgc3Ryb25nIHJlZmxlY3Rpb25zIGFyZSwgZnJvbSAwIHRvIDFcbiAgICovXG4gIHJlZmxlY3Rpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgd2F2ZXMgY2FuIGJlbmQgcmVmbGVjdGlvbnMsIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByZWZsZWN0aW9uRGlzdG9ydGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogQSB0aWxpbmcgbm9ybWFsIG1hcCBmb3Igd2F2ZXMsIHRoZSBkZWZhdWx0IGlzIGEgZ2VuZXJhdGVkIG9uZVxuICAgKi9cbiAgbm9ybWFsTWFwPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBub3JtYWwgbWFwIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICB3YXZlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IHF1aWNrbHkgd2F2ZXMgbW92ZSwgaW4gd29ybGQgdW5pdHMgcGVyIHNlY29uZFxuICAgKi9cbiAgd2F2ZVNwZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgc3RlZXAgd2F2ZXMgYXJlLCBmcm9tIDAgZm9yIGZsYXQgd2F0ZXIgdG8gMVxuICAgKi9cbiAgd2F2ZVN0cmVuZ3RoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgc3RlZXAgcmlwcGxlcyBhcmUgY29tcGFyZWQgdG8gd2F2ZXNcbiAgICovXG4gIHJpcHBsZVN0cmVuZ3RoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHJpcHBsZXMgdHJhdmVsIGVhY2ggc2Vjb25kLCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmlwcGxlU3BlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIG9mIHRoZWlyIG1vdmVtZW50IHJpcHBsZXMga2VlcCBlYWNoIHN0ZXAsIGZyb20gMCB0byAxXG4gICAqL1xuICByaXBwbGVEYW1waW5nPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiBlYWNoIGNlbGwgaW4gdGhlIHJpcHBsZSBzaW11bGF0aW9uLCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmlwcGxlQ2VsbFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgcmFpbmRyb3BzIGVhY2ggc2Vjb25kLCBmb3IgZXZlcnkgMTAwMDAgc3F1YXJlIHdvcmxkIHVuaXRzXG4gICAqL1xuICByYWluPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCBlYWNoIHJhaW5kcm9wIGRpc3R1cmJzIHRoZSB3YXRlclxuICAgKi9cbiAgcmFpblN0cmVuZ3RoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgc2hpbnkgdGhlIHdhdGVyIGlzIHdoZW4gbGlnaHRpbmcgaXMgdXNlZCwgZnJvbSAwIHRvIDFcbiAgICovXG4gIHNwZWN1bGFyPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgc2xvcGUgb2YgdGhlIHdhdGVyIGNoYW5nZXMgaXRzIGJyaWdodG5lc3MsIHRoaXMgbGV0cyB3YXZlcyBhbmRcbiAgICogcmlwcGxlcyBiZSBzZWVuIGV2ZW4gaWYgdGhlcmUgYXJlbid0IGFueSBsaWdodHNcbiAgICovXG4gIHN1cmZhY2VTaGFkaW5nPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTbmFwIHRoZSB3YXRlciB0byBhIGdyaWQgb2YgdGhpcyBzaXplIGluIHdvcmxkIHVuaXRzIGZvciBhIHBpeGVsIGFydFxuICAgKiBzdHlsZSwgb3IgdXNlIDAgZm9yIHNtb290aCB3YXRlclxuICAgKi9cbiAgcGl4ZWxTaXplPzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBXaGF0J3MgYXQgYSBwb2ludCBpbiB0aGUgd2F0ZXJcbiAqL1xuZXhwb3J0IHR5cGUgV2F0ZXJTYW1wbGUgPSB7XG4gIHJlZ2lvbjogV2F0ZXJSZWdpb247XG4gIGRlcHRoOiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEFuIGFyZWEgb2Ygd2F0ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFdhdGVyUmVnaW9uIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9PUFRJT05TID0ge1xuICAgIHJlcGVhdDogZmFsc2UsXG4gICAgZmxvd1NwZWVkOiAxNixcbiAgICBjb2xvdXI6ICcjM2Y4ZmE4JyxcbiAgICBkZWVwQ29sb3VyOiAnIzEyM2Y2MycsXG4gICAgb3BhY2l0eTogMC43LFxuICAgIHNob3JlQmxlbmQ6IDAuMTUsXG4gICAgcmVmcmFjdGlvbjogNCxcbiAgICByZWZsZWN0aW9uOiAwLjYsXG4gICAgcmVmbGVjdGlvbkRpc3RvcnRpb246IDMsXG4gICAgd2F2ZVNpemU6IDEyOCxcbiAgICB3YXZlU3BlZWQ6IDYsXG4gICAgd2F2ZVN0cmVuZ3RoOiAwLjM1LFxuICAgIHJpcHBsZVN0cmVuZ3RoOiAyLFxuICAgIHJpcHBsZVNwZWVkOiA2MCxcbiAgICByaXBwbGVEYW1waW5nOiAwLjk3LFxuICAgIHJpcHBsZUNlbGxTaXplOiAyLFxuICAgIHJhaW46IDAsXG4gICAgcmFpblN0cmVuZ3RoOiAwLjUsXG4gICAgc3BlY3VsYXI6IDAuNSxcbiAgICBzdXJmYWNlU2hhZGluZzogMC4yLFxuICAgIHBpeGVsU2l6ZTogMCxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfUklQUExFX0NFTExTID0gMjU2O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBSQUlORFJPUF9SQURJVVMgPSAyLjU7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJBSU5fQVJFQSA9IDEwMDAwO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjMjtcbiAgcHVibGljIHNpemU6IHZlYzI7XG4gIHB1YmxpYyBtYXNrOiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgcHVibGljIG5vcm1hbE1hcDogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgcHVibGljIHJlcGVhdDogYm9vbGVhbjtcbiAgcHVibGljIGZsb3dTcGVlZDogbnVtYmVyO1xuICBwdWJsaWMgY29sb3VyOiBzdHJpbmc7XG4gIHB1YmxpYyBkZWVwQ29sb3VyOiBzdHJpbmc7XG4gIHB1YmxpYyBvcGFjaXR5OiBudW1iZXI7XG4gIHB1YmxpYyBzaG9yZUJsZW5kOiBudW1iZXI7XG4gIHB1YmxpYyByZWZyYWN0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyByZWZsZWN0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyByZWZsZWN0aW9uRGlzdG9ydGlvbjogbnVtYmVyO1xuICBwdWJsaWMgd2F2ZVNpemU6IG51bWJlcjtcbiAgcHVibGljIHdhdmVTcGVlZDogbnVtYmVyO1xuICBwdWJsaWMgd2F2ZVN0cmVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyByaXBwbGVTdHJlbmd0aDogbnVtYmVyO1xuICBwdWJsaWMgcmlwcGxlU3BlZWQ6IG51bWJlcjtcbiAgcHVibGljIHJpcHBsZURhbXBpbmc6IG51bWJlcjtcbiAgcHVibGljIHJhaW46IG51bWJlcjtcbiAgcHVibGljIHJhaW5TdHJlbmd0aDogbnVtYmVyO1xuICBwdWJsaWMgc3BlY3VsYXI6IG51bWJlcjtcbiAgcHVibGljIHN1cmZhY2VTaGFkaW5nOiBudW1iZXI7XG4gIHB1YmxpYyBwaXhlbFNpemU6IG51bWJlcjtcblxuICBwdWJsaWMgcmVhZG9ubHkgcmlwcGxlczogUmlwcGxlRmllbGQ7XG5cbiAgLyoqXG4gICAqIFJHQkEgZGF0YSBmb3IgdGhlIGRlcHRoIGFuZCBmbG93IGdyaWRzLCB0aGUgdmVyc2lvbiBudW1iZXJzIGFyZSBjaGFuZ2VkXG4gICAqIHdoZW5ldmVyIHRoZSBkYXRhIGNoYW5nZXNcbiAgICovXG4gIHB1YmxpYyBkZXB0aFBpeGVsczogeyBzaXplOiB2ZWMyOyBkYXRhOiBVaW50OEFycmF5OyB2ZXJzaW9uOiBudW1iZXIgfTtcbiAgcHVibGljIGZsb3dQaXhlbHM6IHsgc2l6ZTogdmVjMjsgZGF0YTogVWludDhBcnJheTsgdmVyc2lvbjogbnVtYmVyIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgY2hhbmdlZCB3aGVuZXZlciB0aGUgbWFzayBuZWVkcyB0byBiZSB1cGxvYWRlZCBhZ2FpblxuICAgKi9cbiAgcHVibGljIG1hc2tWZXJzaW9uOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgc3lzdGVtOiBXYXRlclN5c3RlbTtcbiAgcHJpdmF0ZSBkZXB0aEdyaWQ6IFdhdGVyR3JpZDxudW1iZXI+ID0gW1sxXV07XG4gIHByaXZhdGUgc2hhcGU6IFVpbnQ4QXJyYXkgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByYWluVGltZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBtb3ZlQ2FsbGJhY2tzOiAoKHBvc2l0aW9uOiB2ZWMyKSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgcmVtb3ZlQ2FsbGJhY2tzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzeXN0ZW06IFdhdGVyU3lzdGVtLCBvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpIHtcbiAgICBjb25zdCB7IG1hc2ssIG5vcm1hbE1hcCwgZGVwdGgsIGZsb3csIHBvc2l0aW9uLCBzaXplLCAuLi5zZXR0aW5ncyB9ID1cbiAgICAgIG9wdGlvbnM7XG5cbiAgICB0aGlzLnN5c3RlbSA9IHN5c3RlbTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuICAgIHRoaXMubWFzayA9IG1hc2sgPz8gbnVsbDtcbiAgICB0aGlzLm5vcm1hbE1hcCA9IG5vcm1hbE1hcCA/PyBudWxsO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgV2F0ZXJSZWdpb24uREVGQVVMVF9PUFRJT05TLCBzZXR0aW5ncyk7XG5cbiAgICB0aGlzLmRlcHRoUGl4ZWxzID0geyBzaXplOiB2ZWMyKDEpLCBkYXRhOiBuZXcgVWludDhBcnJheSg0KSwgdmVyc2lvbjogMCB9O1xuICAgIHRoaXMuZmxvd1BpeGVscyA9IHsgc2l6ZTogdmVjMigxKSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkoNCksIHZlcnNpb246IDAgfTtcbiAgICB0aGlzLnNldERlcHRoKGRlcHRoID8/IDEpO1xuICAgIHRoaXMuc2V0RmxvdyhmbG93ID8/IHZlYzIoKSk7XG5cbiAgICBjb25zdCBjZWxsU2l6ZSA9IE1hdGgubWF4KFxuICAgICAgb3B0aW9ucy5yaXBwbGVDZWxsU2l6ZSA/PyBXYXRlclJlZ2lvbi5ERUZBVUxUX09QVElPTlMucmlwcGxlQ2VsbFNpemUsXG4gICAgICBNYXRoLm1heChzaXplLngsIHNpemUueSkgLyBXYXRlclJlZ2lvbi5NQVhfUklQUExFX0NFTExTXG4gICAgKTtcbiAgICBjb25zdCBjZWxscyA9IHZlYzIoXG4gICAgICBNYXRoLm1heChNYXRoLmNlaWwoc2l6ZS54IC8gY2VsbFNpemUpLCAxKSxcbiAgICAgIE1hdGgubWF4KE1hdGguY2VpbChzaXplLnkgLyBjZWxsU2l6ZSksIDEpXG4gICAgKTtcblxuICAgIHRoaXMucmlwcGxlcyA9IG5ldyBSaXBwbGVGaWVsZChcbiAgICAgIGNlbGxzLFxuICAgICAgdmVjMihzaXplLnggLyBjZWxscy54LCBzaXplLnkgLyBjZWxscy55KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGhvdyBkZWVwIHRoZSB3YXRlciBpc1xuICAgKi9cbiAgcHVibGljIHNldERlcHRoKGRlcHRoOiBudW1iZXIgfCBXYXRlckdyaWQ8bnVtYmVyPikge1xuICAgIHRoaXMuZGVwdGhHcmlkID0gdHlwZW9mIGRlcHRoID09PSAnbnVtYmVyJyA/IFtbZGVwdGhdXSA6IGRlcHRoO1xuXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZGVwdGhHcmlkLmxlbmd0aDtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5kZXB0aEdyaWRbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShyb3dzICogY29sdW1ucyAqIDQpO1xuXG4gICAgdGhpcy5kZXB0aEdyaWQuZm9yRWFjaCgocm93LCB5KSA9PlxuICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XG4gICAgICAgIGRhdGFbKHggKyB5ICogY29sdW1ucykgKiA0XSA9IE1hdGgucm91bmQodmFsdWUgKiAyNTUpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5kZXB0aFBpeGVscyA9IHtcbiAgICAgIHNpemU6IHZlYzIoY29sdW1ucywgcm93cyksXG4gICAgICBkYXRhLFxuICAgICAgdmVyc2lvbjogdGhpcy5kZXB0aFBpeGVscy52ZXJzaW9uICsgMSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB3aGljaCB3YXkgdGhlIHdhdGVyIGZsb3dzXG4gICAqL1xuICBwdWJsaWMgc2V0RmxvdyhmbG93OiB2ZWMyIHwgV2F0ZXJHcmlkPHZlYzI+KSB7XG4gICAgY29uc3QgZ3JpZCA9IEFycmF5LmlzQXJyYXkoZmxvdykgPyBmbG93IDogW1tmbG93XV07XG4gICAgY29uc3Qgcm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBncmlkWzBdLmxlbmd0aDtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocm93cyAqIGNvbHVtbnMgKiA0KTtcblxuICAgIC8vIDEyOCBpcyB1c2VkIGZvciAwIHNvIHRoYXQgc3RpbGwgd2F0ZXIgc3RheXMgcGVyZmVjdGx5IHN0aWxsXG4gICAgZ3JpZC5mb3JFYWNoKChyb3csIHkpID0+XG4gICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgICAgZGF0YVsoeCArIHkgKiBjb2x1bW5zKSAqIDRdID0gTWF0aC5yb3VuZCh2YWx1ZS54ICogMTI3KSArIDEyODtcbiAgICAgICAgZGF0YVsoeCArIHkgKiBjb2x1bW5zKSAqIDQgKyAxXSA9IE1hdGgucm91bmQodmFsdWUueSAqIDEyNykgKyAxMjg7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmZsb3dQaXhlbHMgPSB7XG4gICAgICBzaXplOiB2ZWMyKGNvbHVtbnMsIHJvd3MpLFxuICAgICAgZGF0YSxcbiAgICAgIHZlcnNpb246IHRoaXMuZmxvd1BpeGVscy52ZXJzaW9uICsgMSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIG1hc2sgYXQgdGhlIHJlc29sdXRpb24gb2YgdGhlIHJpcHBsZSBncmlkLCBzbyB0aGF0IHdlIGNhbiBmaW5kIG91dFxuICAgKiB3aGVyZSB0aGUgd2F0ZXIgaXMgd2l0aG91dCB1c2luZyB0aGUgR1BVXG4gICAqXG4gICAqIFRoaXMgcmV0dXJucyBudWxsIGlmIHRoZSBtYXNrIGhhc24ndCBsb2FkZWQgeWV0XG4gICAqL1xuICBwcml2YXRlIGdldFNoYXBlKCk6IFVpbnQ4QXJyYXkgfCBudWxsIHtcbiAgICBpZiAodGhpcy5zaGFwZSB8fCAhdGhpcy5tYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaGFwZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm1hc2sud2lkdGggPT09IDAgfHxcbiAgICAgICh0aGlzLm1hc2sgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmICF0aGlzLm1hc2suY29tcGxldGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHg6IGNvbHVtbnMsIHk6IHJvd3MgfSA9IHRoaXMucmlwcGxlcy5zaXplO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IGNvbHVtbnM7XG4gICAgY2FudmFzLmhlaWdodCA9IHJvd3M7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkhO1xuICAgIGNvbnRleHQuc2NhbGUoY29sdW1ucyAvIHRoaXMuc2l6ZS54LCByb3dzIC8gdGhpcy5zaXplLnkpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKC10aGlzLnBvc2l0aW9uLngsIC10aGlzLnBvc2l0aW9uLnkpO1xuICAgIGRyYXdJbWFnZUluUmVjdGFuZ2xlKGNvbnRleHQsIHRoaXMubWFzaywgdGhpcywgdGhpcy5yZXBlYXQpO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjb2x1bW5zLCByb3dzKTtcbiAgICBjb25zdCBzaGFwZSA9IG5ldyBVaW50OEFycmF5KGNvbHVtbnMgKiByb3dzKTtcbiAgICBjb25zdCBibG9ja2VkID0gbmV3IFVpbnQ4QXJyYXkoY29sdW1ucyAqIHJvd3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoYXBlW2ldID0gZGF0YVtpICogNCArIDNdO1xuICAgICAgYmxvY2tlZFtpXSA9IHNoYXBlW2ldIDwgMTI4ID8gMSA6IDA7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIHRoaXMucmlwcGxlcy5zZXRCbG9ja2VkKGJsb2NrZWQpO1xuXG4gICAgcmV0dXJuIHNoYXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmdldCB0aGUgbWFzaydzIHNoYXBlLCB0aGlzIHNob3VsZCBiZSBjYWxsZWQgaWYgdGhlIG1hc2sgaXMgY2hhbmdlZFxuICAgKi9cbiAgcHVibGljIGludmFsaWRhdGVNYXNrKCkge1xuICAgIHRoaXMuc2hhcGUgPSBudWxsO1xuICAgIHRoaXMubWFza1ZlcnNpb24rKztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBkZXB0aCBhdCBhIHdvcmxkIHBvc2l0aW9uLCB0aGlzIGlzIDAgaWYgdGhlcmUncyBubyB3YXRlciB0aGVyZVxuICAgKi9cbiAgcHVibGljIGRlcHRoQXQocG9zaXRpb246IHZlYzIpOiBudW1iZXIge1xuICAgIGNvbnN0IGxvY2FsID0gdmVjMi5zdWIocG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIGlmIChcbiAgICAgIGxvY2FsLnggPCAwIHx8XG4gICAgICBsb2NhbC55IDwgMCB8fFxuICAgICAgbG9jYWwueCA+PSB0aGlzLnNpemUueCB8fFxuICAgICAgbG9jYWwueSA+PSB0aGlzLnNpemUueVxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hhcGUgPSB0aGlzLmdldFNoYXBlKCk7XG4gICAgaWYgKHNoYXBlKSB7XG4gICAgICBjb25zdCB7IHg6IGNvbHVtbnMsIHk6IHJvd3MgfSA9IHRoaXMucmlwcGxlcy5zaXplO1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKGxvY2FsLnggLyB0aGlzLnNpemUueCkgKiBjb2x1bW5zKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKChsb2NhbC55IC8gdGhpcy5zaXplLnkpICogcm93cyk7XG5cbiAgICAgIGlmIChzaGFwZVt4ICsgeSAqIGNvbHVtbnNdIDwgMTI4KSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRlRGVwdGgobG9jYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYSB2YWx1ZSBmcm9tIHRoZSBkZXB0aCBncmlkLCBpbiB0aGUgc2FtZSB3YXkgdGhhdCBhIHRleHR1cmUgd291bGRcbiAgICovXG4gIHByaXZhdGUgaW50ZXJwb2xhdGVEZXB0aChsb2NhbDogdmVjMik6IG51bWJlciB7XG4gICAgY29uc3QgZ3JpZCA9IHRoaXMuZGVwdGhHcmlkO1xuICAgIGNvbnN0IHJvd3MgPSBncmlkLmxlbmd0aDtcbiAgICBjb25zdCBjb2x1bW5zID0gZ3JpZFswXS5sZW5ndGg7XG5cbiAgICBjb25zdCB1ID0gKGxvY2FsLnggLyB0aGlzLnNpemUueCkgKiBjb2x1bW5zIC0gMC41O1xuICAgIGNvbnN0IHYgPSAobG9jYWwueSAvIHRoaXMuc2l6ZS55KSAqIHJvd3MgLSAwLjU7XG4gICAgY29uc3QgY2xhbXBYID0gKHg6IG51bWJlcikgPT4gTWF0aC5taW4oTWF0aC5tYXgoeCwgMCksIGNvbHVtbnMgLSAxKTtcbiAgICBjb25zdCBjbGFtcFkgPSAoeTogbnVtYmVyKSA9PiBNYXRoLm1pbihNYXRoLm1heCh5LCAwKSwgcm93cyAtIDEpO1xuXG4gICAgY29uc3QgeDAgPSBNYXRoLmZsb29yKHUpO1xuICAgIGNvbnN0IHkwID0gTWF0aC5mbG9vcih2KTtcbiAgICBjb25zdCB0eCA9IHUgLSB4MDtcbiAgICBjb25zdCB0eSA9IHYgLSB5MDtcblxuICAgIGNvbnN0IHZhbHVlID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBncmlkW2NsYW1wWSh5KV1bY2xhbXBYKHgpXTtcbiAgICBjb25zdCB0b3AgPSB2YWx1ZSh4MCwgeTApICogKDEgLSB0eCkgKyB2YWx1ZSh4MCArIDEsIHkwKSAqIHR4O1xuICAgIGNvbnN0IGJvdHRvbSA9IHZhbHVlKHgwLCB5MCArIDEpICogKDEgLSB0eCkgKyB2YWx1ZSh4MCArIDEsIHkwICsgMSkgKiB0eDtcblxuICAgIHJldHVybiB0b3AgKiAoMSAtIHR5KSArIGJvdHRvbSAqIHR5O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3R1cmIgdGhlIHdhdGVyIGF0IGEgd29ybGQgcG9zaXRpb24sIGZvciBleGFtcGxlIGlmIHNvbWV0aGluZyBoYXMgZmFsbGVuXG4gICAqIGludG8gaXRcbiAgICovXG4gIHB1YmxpYyBkaXN0dXJiKHBvc2l0aW9uOiB2ZWMyLCBvcHRpb25zOiBSaXBwbGVPcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmdldFNoYXBlKCk7XG4gICAgdGhpcy5yaXBwbGVzLmRpc3R1cmIodmVjMi5zdWIocG9zaXRpb24sIHRoaXMucG9zaXRpb24pLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMudXBkYXRlUmFpbihkdCk7XG4gICAgdGhpcy5yaXBwbGVzLnVwZGF0ZShkdCwgdGhpcy5yaXBwbGVTcGVlZCwgdGhpcy5yaXBwbGVEYW1waW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUmFpbihkdDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMucmFpbiA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJlYSA9IHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBXYXRlclJlZ2lvbi5SQUlOX0FSRUEgLyAodGhpcy5yYWluICogYXJlYSk7XG5cbiAgICB0aGlzLnJhaW5UaW1lICs9IGR0O1xuICAgIHdoaWxlICh0aGlzLnJhaW5UaW1lID49IGludGVydmFsKSB7XG4gICAgICB0aGlzLnJhaW5UaW1lIC09IGludGVydmFsO1xuICAgICAgdGhpcy5kaXN0dXJiKFxuICAgICAgICB2ZWMyKFxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnNpemUueCxcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5zaXplLnlcbiAgICAgICAgKSxcbiAgICAgICAge1xuICAgICAgICAgIHJhZGl1czogV2F0ZXJSZWdpb24uUkFJTkRST1BfUkFESVVTLFxuICAgICAgICAgIHN0cmVuZ3RoOiAtdGhpcy5yYWluU3RyZW5ndGgsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyByZWdpb24gdG8gYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICAgIHRoaXMubW92ZUNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKHRoaXMucG9zaXRpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGlzIHJlZ2lvbiBpcyBtb3ZlZFxuICAgKi9cbiAgcHVibGljIG9uTW92ZShjYWxsYmFjazogKHBvc2l0aW9uOiB2ZWMyKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5tb3ZlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgcmVnaW9uIGlzIHJlbW92ZWRcbiAgICovXG4gIHB1YmxpYyBvblJlbW92ZShjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHJlZ2lvbiBmcm9tIHRoZSB3YXRlciBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5zeXN0ZW0ucmVtb3ZlKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgRnJhbWUsXG4gIEdsQ29udGV4dCxcbiAgaW50ZXJ2YWxUb1JlY3RhbmdsZSxcbiAgbWF4VmVjLFxuICBtaW5WZWMsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIFNjZW5lSW1hZ2UsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUmlwcGxlT3B0aW9ucyB9IGZyb20gJy4vUmlwcGxlRmllbGQnO1xuaW1wb3J0IHsgV2F0ZXJPdXRwdXQsIFdhdGVyUGFzcyB9IGZyb20gJy4vV2F0ZXJQYXNzJztcbmltcG9ydCB7XG4gIFdhdGVyUmVnaW9uLFxuICBXYXRlclJlZ2lvbk9wdGlvbnMsXG4gIFdhdGVyU2FtcGxlLFxufSBmcm9tICcuL1dhdGVyUmVnaW9uJztcblxuZXhwb3J0IHR5cGUgV2F0ZXJTeXN0ZW1PcHRpb25zID0ge1xuICAvKipcbiAgICogVGhlIHJlc29sdXRpb24gb2YgdGhlIHdhdGVyLCBjb21wYXJlZCB0byB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgc2NyZWVuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIG1vc3QgZWZmZWN0aXZlIHdheSBvZiBtYWtpbmcgd2F0ZXIgZmFzdGVyLiBJZiBgcGl4ZWxTaXplYCBpc1xuICAgKiBiZWluZyB1c2VkIHRoZW4gbmVpZ2hib3VyaW5nIHBpeGVscyBhcmUgYWxyZWFkeSB0aGUgc2FtZSwgc28gdGhpcyB3b24ndFxuICAgKiBsb3NlIGFueSBkZXRhaWwgYXMgbG9uZyBhcyB0aGVyZSdzIHN0aWxsIGF0IGxlYXN0IG9uZSBwaXhlbCBmb3IgZWFjaFxuICAgKiBgcGl4ZWxTaXplYCwgZm9yIGV4YW1wbGUgMC41IHdvcmtzIHdlbGwgZm9yIGEgYHBpeGVsU2l6ZWAgb2YgMSBhbmQgYSBjYW1lcmFcbiAgICogd2l0aCBhIHNjYWxlIG9mIDJcbiAgICovXG4gIHJlc29sdXRpb25TY2FsZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgbm9ybWFsIG1hcCB0aGF0J3MgZ2l2ZW4gdG8gdGhlIGxpZ2h0aW5nIHN5c3RlbSxcbiAgICogY29tcGFyZWQgdG8gdGhlIHJlc29sdXRpb24gb2YgdGhlIHNjcmVlbi4gTG93ZXIgdmFsdWVzIGFyZSBmYXN0ZXJcbiAgICovXG4gIGxpZ2h0aW5nTWFwU2NhbGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHJlc29sdXRpb24gb2YgdGhlIHJlZmxlY3Rpb25zIGluIHRoZSB3YXRlciwgY29tcGFyZWQgdG8gdGhlIHJlc29sdXRpb25cbiAgICogb2YgdGhlIHNjcmVlbi4gV2F2ZXMgaGlkZSBtb3N0IG9mIHRoZSBkaWZmZXJlbmNlIGFuZCBsb3dlciB2YWx1ZXMgYXJlXG4gICAqIGZhc3RlclxuICAgKi9cbiAgcmVmbGVjdGlvbk1hcFNjYWxlOiBudW1iZXI7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgd2F0ZXJcbiAqXG4gKiBXYXRlciBzaG93cyB3aGF0J3MgdW5kZXJuZWF0aCBpdCwgc28gdGhpcyBoYXMgdG8gYmUgY2FsbGVkIHBhcnQtd2F5IHRocm91Z2hcbiAqIGRyYXdpbmcgdGhlIHNjZW5lLiBTZWUgYFdvcmxkYCBmb3IgaG93IHRoaXMgZml0cyB0b2dldGhlciB3aXRoIGV2ZXJ5dGhpbmdcbiAqIGVsc2VcbiAqXG4gKiAxLiBDYWxsIGB1cGRhdGUoKWAgZXZlcnkgZnJhbWVcbiAqIDIuIERyYXcgZXZlcnl0aGluZyB0aGF0J3MgdW5kZXJuZWF0aCB0aGUgd2F0ZXJcbiAqIDMuIENhbGwgYGRyYXcoKWBcbiAqIDQuIERyYXcgZXZlcnl0aGluZyB0aGF0J3Mgb24gdG9wIG9mIHRoZSB3YXRlclxuICovXG5leHBvcnQgY2xhc3MgV2F0ZXJTeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlM6IFdhdGVyU3lzdGVtT3B0aW9ucyA9IHtcbiAgICByZXNvbHV0aW9uU2NhbGU6IDEsXG4gICAgbGlnaHRpbmdNYXBTY2FsZTogMC41LFxuICAgIHJlZmxlY3Rpb25NYXBTY2FsZTogMC41LFxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZUNvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwdWJsaWMgb3B0aW9uczogV2F0ZXJTeXN0ZW1PcHRpb25zO1xuXG4gIHByaXZhdGUgcmVnaW9uczogV2F0ZXJSZWdpb25bXSA9IFtdO1xuICBwcml2YXRlIGdsQ29udGV4dDogR2xDb250ZXh0IHwgbnVsbDtcbiAgcHJpdmF0ZSBwYXNzOiBXYXRlclBhc3MgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSB0aW1lOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGZyYW1lOiBGcmFtZSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTY3JlZW4tc2l6ZWQgaW1hZ2VzIG9mIHRoZSB3YXRlcidzIHN1cmZhY2UsIGZvciB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwcml2YXRlIG5vcm1hbE1hcENvbnRleHQgPSBXYXRlclN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBub3JtYWxNYXBDYW52YXMgPSB0aGlzLm5vcm1hbE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc3BlY3VsYXJNYXBDb250ZXh0ID0gV2F0ZXJTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc3BlY3VsYXJNYXBDYW52YXMgPSB0aGlzLnNwZWN1bGFyTWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSByZWZsZWN0aW9uTWFwQ29udGV4dCA9IFdhdGVyU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHJpdmF0ZSBzY2VuZUNvbnRleHQgPSBXYXRlclN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG5cbiAgLyoqXG4gICAqIFdoYXQgdGhlIHNwZWN1bGFyIG1hcCB3YXMgZHJhd24gZnJvbSwgc28gdGhhdCB3ZSBvbmx5IGRyYXcgaXQgYWdhaW4gaWZcbiAgICogc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG4gICAqL1xuICBwcml2YXRlIHNwZWN1bGFyTWFwS2V5OiBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogYGdsQ29udGV4dGAgbGV0cyB0aGUgd2F0ZXIgc3lzdGVtIHNoYXJlIGEgV2ViR0wgY29udGV4dCB3aXRoIG90aGVyIHN5c3RlbXMsXG4gICAqIG90aGVyd2lzZSBpdCB3aWxsIGNyZWF0ZSBpdHMgb3duXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8V2F0ZXJTeXN0ZW1PcHRpb25zPixcbiAgICBnbENvbnRleHQ/OiBHbENvbnRleHRcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5XYXRlclN5c3RlbS5ERUZBVUxUX09QVElPTlMsIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLmdsQ29udGV4dCA9IGdsQ29udGV4dCA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIGEgV2ViR0wgY29udGV4dCB3aXRoIG90aGVyIHN5c3RlbXMsIHRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGJlZm9yZVxuICAgKiB0aGUgZmlyc3QgcmVuZGVyIGFuZCBkb2VzIG5vdGhpbmcgaWYgYSBjb250ZXh0IGhhcyBhbHJlYWR5IGJlZW4gc2V0XG4gICAqL1xuICBwdWJsaWMgdXNlR2xDb250ZXh0KGdsQ29udGV4dDogR2xDb250ZXh0KSB7XG4gICAgdGhpcy5nbENvbnRleHQgPz89IGdsQ29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gYXJlYSBvZiB3YXRlclxuICAgKi9cbiAgcHVibGljIGFkZFJlZ2lvbihvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpOiBXYXRlclJlZ2lvbiB7XG4gICAgY29uc3QgcmVnaW9uID0gbmV3IFdhdGVyUmVnaW9uKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMucmVnaW9ucy5wdXNoKHJlZ2lvbik7XG5cbiAgICByZXR1cm4gcmVnaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBhcmVhIG9mIHdhdGVyXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKHJlZ2lvbjogV2F0ZXJSZWdpb24pIHtcbiAgICB0aGlzLnJlZ2lvbnMgPSB0aGlzLnJlZ2lvbnMuZmlsdGVyKHIgPT4gciAhPT0gcmVnaW9uKTtcbiAgICB0aGlzLnBhc3M/LnJlbGVhc2UocmVnaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB3YXRlciBhdCBhIHdvcmxkIHBvc2l0aW9uLCB0aGlzIGlzIG51bGwgaWYgdGhlcmUgaXNuJ3QgYW55XG4gICAqL1xuICBwdWJsaWMgc2FtcGxlKHBvc2l0aW9uOiB2ZWMyKTogV2F0ZXJTYW1wbGUgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB0aGlzLnJlZ2lvbnMpIHtcbiAgICAgIGNvbnN0IGRlcHRoID0gcmVnaW9uLmRlcHRoQXQocG9zaXRpb24pO1xuICAgICAgaWYgKGRlcHRoID4gMCkge1xuICAgICAgICByZXR1cm4geyByZWdpb24sIGRlcHRoIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGlzdHVyYiB0aGUgd2F0ZXIgYXQgYSB3b3JsZCBwb3NpdGlvbiwgZm9yIGV4YW1wbGUgaWYgc29tZXRoaW5nIGhhcyBmYWxsZW5cbiAgICogaW50byBpdC4gVGhpcyBkb2VzIG5vdGhpbmcgaWYgdGhlcmUncyBubyB3YXRlciB0aGVyZVxuICAgKi9cbiAgcHVibGljIGRpc3R1cmIocG9zaXRpb246IHZlYzIsIG9wdGlvbnM/OiBSaXBwbGVPcHRpb25zKSB7XG4gICAgdGhpcy5zYW1wbGUocG9zaXRpb24pPy5yZWdpb24uZGlzdHVyYihwb3NpdGlvbiwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgd2F0ZXIgZm9yd2FyZCwgdGhpcyBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLnRpbWUgKz0gZHQ7XG4gICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHJlZ2lvbi51cGRhdGUoZHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNoYWRlciBwYXNzLCBpZiBpdCBjYW4gYmUgdXNlZFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYXNzKCk6IFdhdGVyUGFzcyB8IG51bGwge1xuICAgIHRoaXMucGFzcyA/Pz0gbmV3IFdhdGVyUGFzcyh0aGlzLmdsQ29udGV4dCA/PyBuZXcgR2xDb250ZXh0KCkpO1xuXG4gICAgcmV0dXJuIHRoaXMucGFzcy5hdmFpbGFibGUgPyB0aGlzLnBhc3MgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpYmxlUmVnaW9ucyh7IGNhbWVyYSB9OiBGcmFtZSk6IFdhdGVyUmVnaW9uW10ge1xuICAgIGNvbnN0IHZpc2libGUgPSBpbnRlcnZhbFRvUmVjdGFuZ2xlKGNhbWVyYS5ib3VuZHMpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVnaW9ucy5maWx0ZXIocmVnaW9uID0+IHJlY3RhbmdsZXNJbnRlcnNlY3QocmVnaW9uLCB2aXNpYmxlKSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgd2F0ZXIgb250byB0aGUgZnJhbWUncyBjb250ZXh0LCB1c2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZSBhcyB0aGVcbiAgICogc2NlbmUgdW5kZXJuZWF0aCB0aGUgd2F0ZXJcbiAgICovXG4gIHB1YmxpYyBkcmF3KGZyYW1lOiBGcmFtZSkge1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgIGNvbnN0IHJlZ2lvbnMgPSB0aGlzLnZpc2libGVSZWdpb25zKGZyYW1lKTtcbiAgICBjb25zdCBwYXNzID0gcmVnaW9ucy5sZW5ndGggPiAwID8gdGhpcy5nZXRQYXNzKCkgOiBudWxsO1xuICAgIGlmICghcGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcmVzb2x1dGlvblNjYWxlOiBzY2FsZSwgcmVmbGVjdGlvbk1hcFNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBwYXNzLnJlbmRlcihcbiAgICAgIHtcbiAgICAgICAgLi4uZnJhbWUsXG4gICAgICAgIHJlZmxlY3Rpb25NYXA6XG4gICAgICAgICAgZnJhbWUucmVmbGVjdGlvbk1hcCAmJlxuICAgICAgICAgIHRoaXMuc2NhbGVkQ29weShcbiAgICAgICAgICAgIHRoaXMucmVmbGVjdGlvbk1hcENvbnRleHQsXG4gICAgICAgICAgICBmcmFtZS5yZWZsZWN0aW9uTWFwLFxuICAgICAgICAgICAgZnJhbWUsXG4gICAgICAgICAgICByZWZsZWN0aW9uTWFwU2NhbGVcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHJlZ2lvbnMsXG4gICAgICBXYXRlck91dHB1dC5Db2xvdXIsXG4gICAgICB0aGlzLnRpbWUsXG4gICAgICBzY2FsZSxcblxuICAgICAgLy8gV2F0ZXIgd2l0aCBhIGxvdyByZXNvbHV0aW9uIGRvZXNuJ3QgbmVlZCBhbnkgbW9yZSBkZXRhaWwgdGhhbiB0aGlzXG4gICAgICB0aGlzLnNjYWxlZENvcHkodGhpcy5zY2VuZUNvbnRleHQsIGZyYW1lLmNvbnRleHQuY2FudmFzLCBmcmFtZSwgc2NhbGUpXG4gICAgKTtcblxuICAgIHRoaXMuY29weVdhdGVyKHBhc3MsIGZyYW1lLCByZWdpb25zLCBzY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgd2F0ZXIgb250byB0aGUgZnJhbWUncyBjb250ZXh0LCB0aGUgcmVzdCBvZiB0aGUgb3V0cHV0IG9mIHRoZSBwYXNzXG4gICAqIGlzIGVtcHR5IHNvIHdlIG9ubHkgbmVlZCB0byBjb3B5IHRoZSBhcmVhIHRoYXQgdGhlIHdhdGVyIGNvdmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBjb3B5V2F0ZXIoXG4gICAgcGFzczogV2F0ZXJQYXNzLFxuICAgIHsgY29udGV4dCwgY2FtZXJhLCBzY3JlZW4gfTogRnJhbWUsXG4gICAgcmVnaW9uczogV2F0ZXJSZWdpb25bXSxcbiAgICBzY2FsZTogbnVtYmVyXG4gICkge1xuICAgIGNvbnN0IGNvcm5lcnMgPSByZWdpb25zLmZsYXRNYXAoKHsgcG9zaXRpb24sIHNpemUgfSkgPT4gW1xuICAgICAgY2FtZXJhLndvcmxkVG9TY3JlZW4ocG9zaXRpb24pLFxuICAgICAgY2FtZXJhLndvcmxkVG9TY3JlZW4odmVjMi5hZGQocG9zaXRpb24sIHNpemUpKSxcbiAgICBdKTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgoTWF0aC5mbG9vcihtaW5WZWMoLi4uY29ybmVycykueCksIDApO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KE1hdGguZmxvb3IobWluVmVjKC4uLmNvcm5lcnMpLnkpLCAwKTtcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKE1hdGguY2VpbChtYXhWZWMoLi4uY29ybmVycykueCksIHNjcmVlbi54KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbihNYXRoLmNlaWwobWF4VmVjKC4uLmNvcm5lcnMpLnkpLCBzY3JlZW4ueSk7XG5cbiAgICBjb25zdCBvdXRwdXRXaWR0aCA9IE1hdGguY2VpbChzY3JlZW4ueCAqIHNjYWxlKTtcbiAgICBjb25zdCBvdXRwdXRIZWlnaHQgPSBNYXRoLmNlaWwoc2NyZWVuLnkgKiBzY2FsZSk7XG4gICAgY29uc3Qgc2NhbGVYID0gb3V0cHV0V2lkdGggLyBzY3JlZW4ueDtcbiAgICBjb25zdCBzY2FsZVkgPSBvdXRwdXRIZWlnaHQgLyBzY3JlZW4ueTtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgcGFzcy5jYW52YXMsXG4gICAgICBsZWZ0ICogc2NhbGVYLFxuICAgICAgc2NyZWVuLnkgLSBvdXRwdXRIZWlnaHQgKyB0b3AgKiBzY2FsZVksXG4gICAgICAocmlnaHQgLSBsZWZ0KSAqIHNjYWxlWCxcbiAgICAgIChib3R0b20gLSB0b3ApICogc2NhbGVZLFxuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHJpZ2h0IC0gbGVmdCxcbiAgICAgIGJvdHRvbSAtIHRvcFxuICAgICk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHNtYWxsZXIgY29weSBvZiBhIHNjcmVlbi1zaXplZCBpbWFnZSwgdXBsb2FkaW5nIHRoZXNlIGlzIG11Y2ggZmFzdGVyXG4gICAqL1xuICBwcml2YXRlIHNjYWxlZENvcHkoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZyYW1lOiBGcmFtZSxcbiAgICBzY2FsZTogbnVtYmVyXG4gICk6IFNjZW5lSW1hZ2Uge1xuICAgIGlmIChzY2FsZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY2FudmFzIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKGZyYW1lLnNjcmVlbi54ICogc2NhbGUpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChmcmFtZS5zY3JlZW4ueSAqIHNjYWxlKTtcblxuICAgIGlmIChjYW52YXMud2lkdGggIT09IHdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZyYW1lLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBub3JtYWwgbWFwIGFuZCBzcGVjdWxhciBtYXAgb2YgdGhlIHdhdGVyJ3Mgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIGRyYXdMaWdodGluZ01hcHMoZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc3QgcmVnaW9ucyA9IHRoaXMudmlzaWJsZVJlZ2lvbnMoZnJhbWUpO1xuICAgIGNvbnN0IHBhc3MgPSByZWdpb25zLmxlbmd0aCA+IDAgPyB0aGlzLmdldFBhc3MoKSA6IG51bGw7XG4gICAgaWYgKCFwYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsaWdodGluZ01hcFNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBwYXNzLnJlbmRlcihcbiAgICAgIGZyYW1lLFxuICAgICAgcmVnaW9ucyxcbiAgICAgIFdhdGVyT3V0cHV0Lk5vcm1hbCxcbiAgICAgIHRoaXMudGltZSxcbiAgICAgIGxpZ2h0aW5nTWFwU2NhbGVcbiAgICApO1xuICAgIHRoaXMuY29weUxpZ2h0aW5nTWFwKHRoaXMubm9ybWFsTWFwQ29udGV4dCwgcGFzcywgZnJhbWUsIGxpZ2h0aW5nTWFwU2NhbGUpO1xuXG4gICAgLy8gVGhlIHNwZWN1bGFyIG1hcCBpcyB0aGUgc2FtZSBldmVyeSBmcmFtZSB1bmxlc3Mgc29tZXRoaW5nIGhhcyBtb3ZlZFxuICAgIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtcbiAgICAgIGZyYW1lLmNhbWVyYS5ib3VuZHMsXG4gICAgICBmcmFtZS5zY3JlZW4sXG4gICAgICByZWdpb25zLm1hcChyZWdpb24gPT4gW1xuICAgICAgICByZWdpb24ucG9zaXRpb24sXG4gICAgICAgIHJlZ2lvbi5zaXplLFxuICAgICAgICByZWdpb24uc3BlY3VsYXIsXG4gICAgICAgIHJlZ2lvbi5zaG9yZUJsZW5kLFxuICAgICAgICByZWdpb24uZGVwdGhQaXhlbHMudmVyc2lvbixcbiAgICAgICAgcmVnaW9uLm1hc2tWZXJzaW9uLFxuICAgICAgXSksXG4gICAgXSk7XG5cbiAgICBpZiAoa2V5ICE9PSB0aGlzLnNwZWN1bGFyTWFwS2V5KSB7XG4gICAgICB0aGlzLnNwZWN1bGFyTWFwS2V5ID0ga2V5O1xuXG4gICAgICBwYXNzLnJlbmRlcihmcmFtZSwgcmVnaW9ucywgV2F0ZXJPdXRwdXQuU3BlY3VsYXIsIHRoaXMudGltZSk7XG4gICAgICB0aGlzLmNvcHlMaWdodGluZ01hcCh0aGlzLnNwZWN1bGFyTWFwQ29udGV4dCwgcGFzcywgZnJhbWUsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBvdXRwdXQgb2YgYSBwYXNzIHRoYXQgdXNlZCBwYXJ0IG9mIHRoZSBjYW52YXNcbiAgICovXG4gIHByaXZhdGUgY29weUxpZ2h0aW5nTWFwKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBwYXNzOiBXYXRlclBhc3MsXG4gICAgeyBzY3JlZW4gfTogRnJhbWUsXG4gICAgc2NhbGU6IG51bWJlclxuICApIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gY29udGV4dDtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGguY2VpbChzY3JlZW4ueCAqIHNjYWxlKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoc2NyZWVuLnkgKiBzY2FsZSk7XG5cbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICBwYXNzLmNhbnZhcyxcbiAgICAgIDAsXG4gICAgICBzY3JlZW4ueSAtIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBwYXJ0IG9mIGEgc2NyZWVuLXNpemVkIG1hcCBvbnRvIGEgY29udGV4dCB0aGF0J3MgdXNpbmcgdGhlIGNhbWVyYSdzXG4gICAqIHRyYW5zZm9ybXMsIHRoaXMgaXMgZm9yIGFkZGluZyB0aGUgd2F0ZXIncyBzdXJmYWNlIHRvIHRoZSBzY2VuZSdzIG1hcHNcbiAgICovXG4gIHByaXZhdGUgZHJhd1JlZ2lvbk1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvbixcbiAgICBtYXA6IEhUTUxDYW52YXNFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcExlZnQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbihyZWdpb24ucG9zaXRpb24pO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gZnJhbWUuY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICB2ZWMyLmFkZChyZWdpb24ucG9zaXRpb24sIHJlZ2lvbi5zaXplKVxuICAgICk7XG4gICAgY29uc3QgbGVmdCA9IE1hdGgubWF4KE1hdGguZmxvb3IodG9wTGVmdC54KSwgMCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgoTWF0aC5mbG9vcih0b3BMZWZ0LnkpLCAwKTtcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKE1hdGguY2VpbChib3R0b21SaWdodC54KSwgZnJhbWUuc2NyZWVuLngpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKE1hdGguY2VpbChib3R0b21SaWdodC55KSwgZnJhbWUuc2NyZWVuLnkpO1xuICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICAgIGlmICh3aWR0aCA8PSAwIHx8IGhlaWdodCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQm90aCBvZiB0aGVzZSBjYW4gaGF2ZSBhIGxvd2VyIHJlc29sdXRpb24gdGhhbiB0aGUgc2NyZWVuXG4gICAgY29uc3Qgc291cmNlU2NhbGUgPSBtYXAud2lkdGggLyBmcmFtZS5zY3JlZW4ueDtcbiAgICBjb25zdCB0YXJnZXRTY2FsZSA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gZnJhbWUuc2NyZWVuLng7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgIG1hcCxcbiAgICAgIGxlZnQgKiBzb3VyY2VTY2FsZSxcbiAgICAgIHRvcCAqIHNvdXJjZVNjYWxlLFxuICAgICAgd2lkdGggKiBzb3VyY2VTY2FsZSxcbiAgICAgIGhlaWdodCAqIHNvdXJjZVNjYWxlLFxuICAgICAgbGVmdCAqIHRhcmdldFNjYWxlLFxuICAgICAgdG9wICogdGFyZ2V0U2NhbGUsXG4gICAgICB3aWR0aCAqIHRhcmdldFNjYWxlLFxuICAgICAgaGVpZ2h0ICogdGFyZ2V0U2NhbGVcbiAgICApO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdSZWdpb25Ob3JtYWxNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb25cbiAgKSB7XG4gICAgdGhpcy5kcmF3UmVnaW9uTWFwKGNvbnRleHQsIHJlZ2lvbiwgdGhpcy5ub3JtYWxNYXBDYW52YXMpO1xuICB9XG5cbiAgcHVibGljIGRyYXdSZWdpb25TcGVjdWxhck1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvblxuICApIHtcbiAgICB0aGlzLmRyYXdSZWdpb25NYXAoY29udGV4dCwgcmVnaW9uLCB0aGlzLnNwZWN1bGFyTWFwQ2FudmFzKTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgUmlwcGxlRmllbGQgfSBmcm9tICcuL1JpcHBsZUZpZWxkJztcbmV4cG9ydCB0eXBlIHsgUmlwcGxlT3B0aW9ucyB9IGZyb20gJy4vUmlwcGxlRmllbGQnO1xuZXhwb3J0IHsgV2F0ZXJSZWdpb24gfSBmcm9tICcuL1dhdGVyUmVnaW9uJztcbmV4cG9ydCB0eXBlIHtcbiAgV2F0ZXJHcmlkLFxuICBXYXRlclJlZ2lvbk9wdGlvbnMsXG4gIFdhdGVyU2FtcGxlLFxufSBmcm9tICcuL1dhdGVyUmVnaW9uJztcbmV4cG9ydCB7IFdhdGVyU3lzdGVtIH0gZnJvbSAnLi9XYXRlclN5c3RlbSc7XG5leHBvcnQgdHlwZSB7IFdhdGVyU3lzdGVtT3B0aW9ucyB9IGZyb20gJy4vV2F0ZXJTeXN0ZW0nO1xuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBib3VuZGluZ1JlY3RhbmdsZSxcbiAgRnJhbWUsXG4gIEdsQ29udGV4dCxcbiAgUmVjdGFuZ2xlLFxuICBTY2VuZUNhbWVyYSxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBBY3RvcixcbiAgQWN0b3JPcHRpb25zLFxuICBHcm91bmRSZWNlaXZlcixcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBMaWdodCxcbiAgTGlnaHRpbmdTeXN0ZW0sXG4gIExpZ2h0T3B0aW9ucyxcbiAgU3ByaXRlQWN0b3JPcHRpb25zLFxuICBTdXJmYWNlLFxuICBXYWxsLFxuICBXYWxsT3B0aW9ucyxcbiAgV2FsbFJlY2VpdmVyLFxufSBmcm9tICcuLi9saWdodGluZyc7XG5pbXBvcnQgdHlwZSB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gIFJlZmxlY3Rpb25PYmplY3QsXG4gIFJlZmxlY3Rpb25Tb3VyY2UsXG4gIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyxcbiAgUmVmbGVjdGlvblN5c3RlbSxcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4uL3JlZmxlY3Rpb25zJztcbmltcG9ydCB0eXBlIHtcbiAgV2F0ZXJSZWdpb24sXG4gIFdhdGVyUmVnaW9uT3B0aW9ucyxcbiAgV2F0ZXJTeXN0ZW0sXG59IGZyb20gJy4uL3dhdGVyJztcblxuZXhwb3J0IHR5cGUgV29ybGRPcHRpb25zID0ge1xuICAvKipcbiAgICogVGhlIGxpZ2h0aW5nIHN5c3RlbSBmb3IgdGhpcyB3b3JsZFxuICAgKlxuICAgKiBUaGUgbGlnaHRpbmcgc3lzdGVtIGhvbGRzIHRoZSBzY2VuZSwgc28gYSB3b3JsZCBhbHdheXMgaGFzIG9uZS4gSWYgdGhpc1xuICAgKiBpc24ndCBzZXQgdGhlbiB0aGUgc2NlbmUgd2lsbCBiZSBkcmF3biB3aXRob3V0IGFueSBsaWdodGluZ1xuICAgKi9cbiAgbGlnaHRpbmc/OiBMaWdodGluZ1N5c3RlbTtcblxuICAvKipcbiAgICogVGhlIHJlZmxlY3Rpb24gc3lzdGVtIGZvciB0aGlzIHdvcmxkLCBpZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZVxuICAgKiB3b24ndCBoYXZlIGFueSByZWZsZWN0aW9uc1xuICAgKi9cbiAgcmVmbGVjdGlvbnM/OiBSZWZsZWN0aW9uU3lzdGVtO1xuXG4gIC8qKlxuICAgKiBUaGUgd2F0ZXIgc3lzdGVtIGZvciB0aGlzIHdvcmxkLCBpZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZSB3b24ndFxuICAgKiBoYXZlIGFueSB3YXRlclxuICAgKi9cbiAgd2F0ZXI/OiBXYXRlclN5c3RlbTtcblxuICAvKipcbiAgICogVGhlIFdlYkdMIGNvbnRleHQgdG8gc2hhcmUgYmV0d2VlbiBzeXN0ZW1zLCB0aGUgZGVmYXVsdCBpcyBhIG5ldyBjb250ZXh0XG4gICAqL1xuICBnbENvbnRleHQ/OiBHbENvbnRleHQ7XG59O1xuXG50eXBlIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb24gPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBvYmplY3QgYXBwZWFyIGluIHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvIGNvbmZpZ3VyZSBob3dcbiAgICogaXQncyByZWZsZWN0ZWRcbiAgICovXG4gIHJlZmxlY3Rpb25Tb3VyY2U/OiBib29sZWFuIHwgUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzO1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRBY3RvcldhdGVyT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIEhvdyBtdWNoIG9mIHRoaXMgYWN0b3IgaXMgdW5kZXJ3YXRlciBpbiB0aGUgZGVlcGVzdCB3YXRlciwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIG1heERlcHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRoaXMgYWN0b3IncyBmZWV0IGFyZSBhYm92ZSB0aGUgYm90dG9tIGVkZ2Ugb2YgaXRzIGltYWdlXG4gICAqL1xuICBmb290T2Zmc2V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEb2VzIHRoaXMgYWN0b3IgbWFrZSByaXBwbGVzIHdoZW4gaXQgbW92ZXMgdGhyb3VnaCB0aGUgd2F0ZXI/XG4gICAqL1xuICByaXBwbGVzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFdvcmxkQWN0b3JPcHRpb25zID0gKEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9ucykgJlxuICBSZWZsZWN0aW9uU291cmNlT3B0aW9uICYge1xuICAgIC8qKlxuICAgICAqIFNob3VsZCB0aGUgbG93ZXIgcGFydCBvZiB0aGlzIGFjdG9yIGdvIHVuZGVyd2F0ZXIgd2hlbiBpdCBzdGFuZHMgaW5cbiAgICAgKiB3YXRlcj8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgaG93IGl0IGJlaGF2ZXNcbiAgICAgKi9cbiAgICBzdWJtZXJzaWJsZT86IGJvb2xlYW4gfCBXb3JsZEFjdG9yV2F0ZXJPcHRpb25zO1xuICB9O1xuXG5leHBvcnQgdHlwZSBXb3JsZEdyb3VuZE9wdGlvbnMgPSBHcm91bmRSZWNlaXZlck9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBncm91bmQgc2hvdyByZWZsZWN0aW9ucz8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgdGhlXG4gICAqIHJlZmxlY3Rpb24sIGJ5IGRlZmF1bHQgaXQgd2lsbCBjb3ZlciB0aGUgd2hvbGUgYXJlYSBvZiB0aGUgZ3JvdW5kXG4gICAqL1xuICByZWZsZWN0aW9uUmVjZWl2ZXI/OiBib29sZWFuIHwgUGFydGlhbDxGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRXYWxsT3B0aW9ucyA9IFdhbGxPcHRpb25zICZcbiAgUmVmbGVjdGlvblNvdXJjZU9wdGlvbiAmIHtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGhlIGZyb250IG9mIHRoaXMgd2FsbCBzaG93IHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvXG4gICAgICogY29uZmlndXJlIHRoZSByZWZsZWN0aW9uLCBieSBkZWZhdWx0IGl0IHdpbGwgY292ZXIgdGhlIHdob2xlIGZyb250XG4gICAgICovXG4gICAgcmVmbGVjdGlvblJlY2VpdmVyPzogYm9vbGVhbiB8IFBhcnRpYWw8V2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xuICB9O1xuXG50eXBlIFN1Ym1lcnNpYmxlQWN0b3IgPSBSZXF1aXJlZDxXb3JsZEFjdG9yV2F0ZXJPcHRpb25zPiAmIHtcbiAgYWN0b3I6IEFjdG9yO1xuICBzb3VyY2U6IFJlZmxlY3Rpb25Tb3VyY2UgfCBudWxsO1xuICBsYXN0UmlwcGxlOiB2ZWMyIHwgbnVsbDtcbn07XG5cbi8qKlxuICogQSBzY2VuZSB0aGF0J3MgcmVuZGVyZWQgYnkgc2V2ZXJhbCBzeXN0ZW1zIHdvcmtpbmcgdG9nZXRoZXJcbiAqXG4gKiBTeXN0ZW1zIGRvbid0IGtub3cgYWJvdXQgZWFjaCBvdGhlciwgdGhleSBlYWNoIGRyYXcgYSBwYXJ0IG9mIHRoZSBmcmFtZSBhbmRcbiAqIHRoaXMgY2xhc3MgZGVjaWRlcyB0aGUgb3JkZXIuIFRoZSBmcmFtZSBpcyByZW5kZXJlZCBpbiB0aGVzZSBzdGVwczpcbiAqXG4gKiAxLiBEcmF3IHRoZSBncm91bmRcbiAqIDIuIERyYXcgdGhlIHBhcnRzIG9mIGFjdG9ycyB0aGF0IGFyZSB1bmRlcndhdGVyXG4gKiAzLiBEcmF3IHJlZmxlY3Rpb25zIG9udG8gdGhlIGZsb29yXG4gKiA0LiBEcmF3IHRoZSB3YXRlciwgd2hpY2ggc2hvd3MgZXZlcnl0aGluZyBkcmF3biBzbyBmYXIgdW5kZXJuZWF0aCBpdFxuICogNS4gRHJhdyB0aGUgd2FsbHMgYW5kIGFjdG9ycyB0aGF0IHN0YW5kIG9uIHRoZSBncm91bmQsIHJlZmxlY3Rpb25zIGluIGEgd2FsbFxuICogICAgYXJlIGRyYXduIGFsb25nIHdpdGggdGhhdCB3YWxsXG4gKiA2LiBBcHBseSBsaWdodGluZyB0byB0aGUgd2hvbGUgc2NlbmVcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmxkIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FURVJfWl9JTkRFWCA9IDEwMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfV0FURVJfT1BUSU9OUyA9IHtcbiAgICBtYXhEZXB0aDogMjQsXG4gICAgZm9vdE9mZnNldDogMCxcbiAgICByaXBwbGVzOiB0cnVlLFxuICB9O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBSSVBQTEVfRElTVEFOQ0UgPSAxMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUklQUExFX1JBRElVUyA9IDU7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJJUFBMRV9TVFJFTkdUSCA9IDAuMzU7XG5cbiAgcHVibGljIHJlYWRvbmx5IGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbTtcbiAgcHVibGljIHJlYWRvbmx5IHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtIHwgbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IHdhdGVyOiBXYXRlclN5c3RlbSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBzdWJtZXJzaWJsZUFjdG9yczogU3VibWVyc2libGVBY3RvcltdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBXb3JsZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nID1cbiAgICAgIG9wdGlvbnM/LmxpZ2h0aW5nID8/IG5ldyBMaWdodGluZ1N5c3RlbSh7IGxpZ2h0aW5nRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZWZsZWN0aW9ucyA9IG9wdGlvbnM/LnJlZmxlY3Rpb25zID8/IG51bGw7XG4gICAgdGhpcy53YXRlciA9IG9wdGlvbnM/LndhdGVyID8/IG51bGw7XG5cbiAgICBpZiAodGhpcy53YXRlcikge1xuICAgICAgY29uc3QgZ2xDb250ZXh0ID0gb3B0aW9ucz8uZ2xDb250ZXh0ID8/IG5ldyBHbENvbnRleHQoKTtcblxuICAgICAgdGhpcy5saWdodGluZy51c2VHbENvbnRleHQoZ2xDb250ZXh0KTtcbiAgICAgIHRoaXMud2F0ZXIudXNlR2xDb250ZXh0KGdsQ29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzdXJmYWNlIG9yIGEgZ3JvdXAgb2Ygc3VyZmFjZXMgbG9vayBsaWtlIGEgc2luZ2xlIG9iamVjdCB0byB0aGVcbiAgICogcmVmbGVjdGlvbiBzeXN0ZW0sIHRoZSBib3R0b20gb2YgdGhlIGdyb3VwIHNob3VsZCBiZSB3aGVyZSBpdCBtZWV0cyB0aGVcbiAgICogZ3JvdW5kXG4gICAqXG4gICAqIE92ZXJsYXlzIGFyZW4ndCBpbmNsdWRlZCwgdGhleSBtaWdodCBiZSBzaG93aW5nIHJlZmxlY3Rpb25zIHRoZW1zZWx2ZXNcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlZmxlY3Rpb25PYmplY3QoXG4gICAgLi4uc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdXG4gICk6IFJlZmxlY3Rpb25PYmplY3Qge1xuICAgIGNvbnN0IGJvdW5kcyA9ICgpID0+XG4gICAgICBzdXJmYWNlcy5yZWR1Y2U8UmVjdGFuZ2xlPihib3VuZGluZ1JlY3RhbmdsZSwgc3VyZmFjZXNbMF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcygpLnBvc2l0aW9uO1xuICAgICAgfSxcbiAgICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gYm91bmRzKCkuc2l6ZTtcbiAgICAgIH0sXG4gICAgICBkcmF3OiBjb250ZXh0ID0+IHN1cmZhY2VzLmZvckVhY2gocyA9PiBzLmRyYXdDb250ZW50KGNvbnRleHQpKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGFkZEdyb3VuZChvcHRpb25zOiBXb3JsZEdyb3VuZE9wdGlvbnMpOiBHcm91bmRSZWNlaXZlciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLmdyb3VuZCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzdXJmYWNlID0gdGhpcy5saWdodGluZy5hZGRHcm91bmQoZ3JvdW5kKTtcblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkRmxvb3JSZWZsZWN0aW9uKFxuICAgICAgICBzdXJmYWNlLFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VyZmFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBzb2xpZCB3YWxsXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbChvcHRpb25zOiBXb3JsZFdhbGxPcHRpb25zKTogV2FsbCB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLndhbGxPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHdhbGwgPSB0aGlzLmxpZ2h0aW5nLmFkZFdhbGwod2FsbE9wdGlvbnMpO1xuXG4gICAgaWYgKHJlZmxlY3Rpb25Tb3VyY2UpIHtcbiAgICAgIC8vIEEgbWlycm9yIHdvdWxkIHNob3cgdGhlIGJhY2sgb2YgYSB3YWxsLCB3aGljaCB3ZSBkb24ndCBoYXZlIGEgcGljdHVyZVxuICAgICAgLy8gb2YsIHNvIGJ5IGRlZmF1bHQgd2FsbHMgb25seSBhcHBlYXIgaW4gdGhlIGZsb29yXG4gICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnJlZmxlY3Rpb25zPy5hZGRTb3VyY2Uoe1xuICAgICAgICB3YWxsOiBmYWxzZSxcbiAgICAgICAgLi4uKHJlZmxlY3Rpb25Tb3VyY2UgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25Tb3VyY2UpLFxuICAgICAgICBvYmplY3Q6IFdvcmxkLnJlZmxlY3Rpb25PYmplY3Qod2FsbC5mcm9udCwgd2FsbC50b3ApLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgd2FsbC5mcm9udC5vblJlbW92ZSgoKSA9PiBzb3VyY2UucmVtb3ZlKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkTWlycm9yKFxuICAgICAgICB3YWxsLmZyb250LFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBtb3Zpbmcgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgYWRkQWN0b3Iob3B0aW9uczogV29ybGRBY3Rvck9wdGlvbnMpOiBBY3RvciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCBzdWJtZXJzaWJsZSwgLi4uYWN0b3JPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGFjdG9yID0gdGhpcy5saWdodGluZy5hZGRBY3RvcihcbiAgICAgIGFjdG9yT3B0aW9ucyBhcyBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnNcbiAgICApO1xuXG4gICAgY29uc3Qgc291cmNlID0gcmVmbGVjdGlvblNvdXJjZVxuICAgICAgPyB0aGlzLmFkZEFjdG9yUmVmbGVjdGlvbihcbiAgICAgICAgICBhY3RvcixcbiAgICAgICAgICByZWZsZWN0aW9uU291cmNlID09PSB0cnVlID8ge30gOiByZWZsZWN0aW9uU291cmNlXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgYWN0b3Iuc3VyZmFjZS5vblJlbW92ZSgoKSA9PiBzb3VyY2UucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIGlmIChzdWJtZXJzaWJsZSkge1xuICAgICAgY29uc3QgaXRlbTogU3VibWVyc2libGVBY3RvciA9IHtcbiAgICAgICAgLi4uV29ybGQuREVGQVVMVF9XQVRFUl9PUFRJT05TLFxuICAgICAgICAuLi4oc3VibWVyc2libGUgPT09IHRydWUgPyB7fSA6IHN1Ym1lcnNpYmxlKSxcbiAgICAgICAgYWN0b3IsXG4gICAgICAgIHNvdXJjZTogc291cmNlID8/IG51bGwsXG4gICAgICAgIGxhc3RSaXBwbGU6IG51bGwsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN1Ym1lcnNpYmxlQWN0b3JzLnB1c2goaXRlbSk7XG4gICAgICBhY3Rvci5zdXJmYWNlLm9uUmVtb3ZlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdWJtZXJzaWJsZUFjdG9ycyA9IHRoaXMuc3VibWVyc2libGVBY3RvcnMuZmlsdGVyKFxuICAgICAgICAgIG90aGVyID0+IG90aGVyICE9PSBpdGVtXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0b3I7XG4gIH1cblxuICBwcml2YXRlIGFkZEFjdG9yUmVmbGVjdGlvbihcbiAgICBhY3RvcjogQWN0b3IsXG4gICAgc2V0dGluZ3M6IFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5nc1xuICApOiBSZWZsZWN0aW9uU291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9ucz8uYWRkU291cmNlKHtcbiAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgLi4uKGFjdG9yLnNwcml0ZVxuICAgICAgICA/IHsgc3ByaXRlOiBhY3Rvci5zcHJpdGUgfVxuICAgICAgICA6IHsgb2JqZWN0OiBXb3JsZC5yZWZsZWN0aW9uT2JqZWN0KGFjdG9yLnN1cmZhY2UpIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIHdhdGVyLCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgaWYgdGhpcyB3b3JsZCBkb2Vzbid0IGhhdmUgYVxuICAgKiB3YXRlciBzeXN0ZW1cbiAgICpcbiAgICogV2F0ZXIgaXMgbGl0IGluIHRoZSBzYW1lIHdheSBhcyB0aGUgZ3JvdW5kLCBhbmQgaGFzIGl0cyBvd24gc3VyZmFjZSBmb3JcbiAgICogdGhpcyBzbyB0aGF0IHdhdmVzIGNhbiBjYXRjaCB0aGUgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRXYXRlcihvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpOiBXYXRlclJlZ2lvbiB8IG51bGwge1xuICAgIGNvbnN0IHsgd2F0ZXIgfSA9IHRoaXM7XG4gICAgaWYgKCF3YXRlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnaW9uID0gd2F0ZXIuYWRkUmVnaW9uKG9wdGlvbnMpO1xuICAgIGNvbnN0IHN1cmZhY2UgPSB0aGlzLmxpZ2h0aW5nLmFkZEdyb3VuZCh7XG4gICAgICBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbixcbiAgICAgIHNpemU6IG9wdGlvbnMuc2l6ZSxcbiAgICAgIHpJbmRleDogV29ybGQuV0FURVJfWl9JTkRFWCxcbiAgICAgIGN1c3RvbURyYXc6IHtcbiAgICAgICAgaW1hZ2U6ICgpID0+IHt9LFxuICAgICAgICBub3JtYWxNYXA6IGNvbnRleHQgPT4gd2F0ZXIuZHJhd1JlZ2lvbk5vcm1hbE1hcChjb250ZXh0LCByZWdpb24pLFxuICAgICAgICBzcGVjdWxhck1hcDogY29udGV4dCA9PiB3YXRlci5kcmF3UmVnaW9uU3BlY3VsYXJNYXAoY29udGV4dCwgcmVnaW9uKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZWdpb24ub25Nb3ZlKHBvc2l0aW9uID0+IHN1cmZhY2UubW92ZVRvKHBvc2l0aW9uKSk7XG4gICAgcmVnaW9uLm9uUmVtb3ZlKCgpID0+IHN1cmZhY2UucmVtb3ZlKCkpO1xuXG4gICAgcmV0dXJuIHJlZ2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaWdodFxuICAgKi9cbiAgcHVibGljIGFkZExpZ2h0KG9wdGlvbnM6IExpZ2h0T3B0aW9ucyk6IExpZ2h0IHtcbiAgICByZXR1cm4gdGhpcy5saWdodGluZy5hZGRMaWdodChvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHBhcnQgb2YgYW4gYXJlYSBvZiBncm91bmQgcmVmbGVjdGl2ZVxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSBjYWxsZWQgc2V2ZXJhbCB0aW1lcyBmb3IgZGlmZmVyZW50IHBhcnRzIG9mIHRoZSBzYW1lIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGFkZEZsb29yUmVmbGVjdGlvbihcbiAgICBncm91bmQ6IEdyb3VuZFJlY2VpdmVyLFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucz5cbiAgKTogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIgfCBudWxsIHtcbiAgICBjb25zdCByZWNlaXZlciA9XG4gICAgICB0aGlzLnJlZmxlY3Rpb25zPy5hZGRGbG9vclJlY2VpdmVyKHtcbiAgICAgICAgcG9zaXRpb246IGdyb3VuZC5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogZ3JvdW5kLnNpemUsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9KSA/PyBudWxsO1xuXG4gICAgaWYgKHJlY2VpdmVyKSB7XG4gICAgICBncm91bmQub25SZW1vdmUoKCkgPT4gcmVjZWl2ZXIucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZWNlaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHBhcnQgb2YgYSB3YWxsIHJlZmxlY3RpdmVcbiAgICpcbiAgICogVGhlIHJlZmxlY3Rpb24gaXMgZHJhd24gc3RyYWlnaHQgYWZ0ZXIgdGhlIHdhbGwsIHNvIGl0J3MgY292ZXJlZCBieVxuICAgKiBhbnl0aGluZyBpbiBmcm9udCBvZiB0aGUgd2FsbC4gVGhpcyBjYW4gYmUgY2FsbGVkIHNldmVyYWwgdGltZXMgZm9yXG4gICAqIGRpZmZlcmVudCBwYXJ0cyBvZiB0aGUgc2FtZSB3YWxsXG4gICAqL1xuICBwdWJsaWMgYWRkTWlycm9yKFxuICAgIHdhbGw6IFdhbGxSZWNlaXZlcixcbiAgICBvcHRpb25zPzogUGFydGlhbDxXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucz5cbiAgKTogV2FsbFJlZmxlY3Rpb25SZWNlaXZlciB8IG51bGwge1xuICAgIGNvbnN0IHJlY2VpdmVyID1cbiAgICAgIHRoaXMucmVmbGVjdGlvbnM/LmFkZFdhbGxSZWNlaXZlcih7XG4gICAgICAgIHBvc2l0aW9uOiB3YWxsLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiB3YWxsLnNpemUsXG4gICAgICAgIGZvb3Q6IHdhbGwucG9zaXRpb24ueSArIHdhbGwuc2l6ZS55LFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfSkgPz8gbnVsbDtcblxuICAgIGlmIChyZWNlaXZlcikge1xuICAgICAgcmVjZWl2ZXIub25SZW1vdmUod2FsbC5hZGRPdmVybGF5KGNvbnRleHQgPT4gcmVjZWl2ZXIuZHJhdyhjb250ZXh0KSkpO1xuICAgICAgd2FsbC5vblJlbW92ZSgoKSA9PiByZWNlaXZlci5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHdvcmxkIGZvcndhcmQsIHRoaXMgc2hvdWxkIGJlIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy53YXRlcj8udXBkYXRlKGR0KTtcbiAgICB0aGlzLnVwZGF0ZVJpcHBsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHdoZXJlIGEgc3VibWVyc2libGUgYWN0b3IncyBmZWV0IGFyZVxuICAgKi9cbiAgcHJpdmF0ZSBmb290UG9zaXRpb24oeyBhY3RvciwgZm9vdE9mZnNldCB9OiBTdWJtZXJzaWJsZUFjdG9yKTogdmVjMiB7XG4gICAgYWN0b3Iuc3luYygpO1xuXG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gYWN0b3Iuc3VyZmFjZTtcblxuICAgIHJldHVybiB2ZWMyKFxuICAgICAgcG9zaXRpb24ueCArIHNpemUueCAvIDIsXG4gICAgICBwb3NpdGlvbi55ICsgc2l6ZS55IC0gZm9vdE9mZnNldFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWN0b3JzIG1ha2UgcmlwcGxlcyBhcyB0aGV5IG1vdmUgdGhyb3VnaCB0aGUgd2F0ZXJcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlUmlwcGxlcygpIHtcbiAgICBjb25zdCB7IHdhdGVyIH0gPSB0aGlzO1xuICAgIGlmICghd2F0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5zdWJtZXJzaWJsZUFjdG9ycykge1xuICAgICAgaWYgKCFpdGVtLnJpcHBsZXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvb3QgPSB0aGlzLmZvb3RQb3NpdGlvbihpdGVtKTtcbiAgICAgIGNvbnN0IG1vdmVkID1cbiAgICAgICAgaXRlbS5sYXN0UmlwcGxlID09PSBudWxsIHx8XG4gICAgICAgIHZlYzIubGVuKHZlYzIuc3ViKGZvb3QsIGl0ZW0ubGFzdFJpcHBsZSkpID49IFdvcmxkLlJJUFBMRV9ESVNUQU5DRTtcblxuICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgIGl0ZW0ubGFzdFJpcHBsZSA9IGZvb3Q7XG4gICAgICAgIHdhdGVyLmRpc3R1cmIoZm9vdCwge1xuICAgICAgICAgIHJhZGl1czogV29ybGQuUklQUExFX1JBRElVUyxcbiAgICAgICAgICBzdHJlbmd0aDogV29ybGQuUklQUExFX1NUUkVOR1RILFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCBvdXQgaG93IGZhciBlYWNoIHN1Ym1lcnNpYmxlIGFjdG9yIGlzIHVuZGVyd2F0ZXIsIHRoaXMgbmVlZHMgdG8gYmVcbiAgICogZG9uZSBiZWZvcmUgYW55dGhpbmcgaXMgZHJhd24gYmVjYXVzZSBpdCBzcGxpdHMgdGhlIGFjdG9yIGludG8gMiBwYXJ0c1xuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVXYXRlcmxpbmVzKCkge1xuICAgIGNvbnN0IHsgd2F0ZXIgfSA9IHRoaXM7XG4gICAgaWYgKCF3YXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnN1Ym1lcnNpYmxlQWN0b3JzKSB7XG4gICAgICBjb25zdCBmb290ID0gdGhpcy5mb290UG9zaXRpb24oaXRlbSk7XG4gICAgICBjb25zdCBkZXB0aCA9IHdhdGVyLnNhbXBsZShmb290KT8uZGVwdGggPz8gMDtcbiAgICAgIGNvbnN0IHdhdGVybGluZSA9IGRlcHRoID4gMCA/IGZvb3QueSAtIGRlcHRoICogaXRlbS5tYXhEZXB0aCA6IG51bGw7XG5cbiAgICAgIGl0ZW0uYWN0b3Iuc3VyZmFjZS5jbGlwQm90dG9tID0gd2F0ZXJsaW5lO1xuICAgICAgaWYgKGl0ZW0uc291cmNlKSB7XG4gICAgICAgIGl0ZW0uc291cmNlLndhdGVybGluZSA9IHdhdGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbWVyYTogU2NlbmVDYW1lcmEpIHtcbiAgICBjb25zdCBmcmFtZTogRnJhbWUgPSB7XG4gICAgICBjb250ZXh0LFxuICAgICAgY2FtZXJhLFxuICAgICAgc2NyZWVuOiB2ZWMyKGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpLFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdhdGVybGluZXMoKTtcbiAgICB0aGlzLnJlZmxlY3Rpb25zPy5wcmVwYXJlKGZyYW1lKTtcblxuICAgIHRoaXMuZHJhd0xheWVyKGZyYW1lLCAoKSA9PiB7XG4gICAgICB0aGlzLmxpZ2h0aW5nLmRyYXdHcm91bmQoY29udGV4dCk7XG4gICAgICB0aGlzLmRyYXdTdWJtZXJnZWRBY3RvcnMoY29udGV4dCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZsZWN0aW9ucz8uZHJhd0Zsb29yKCk7XG4gICAgdGhpcy5kcmF3V2F0ZXIoZnJhbWUpO1xuICAgIHRoaXMuZHJhd0xheWVyKGZyYW1lLCAoKSA9PiB0aGlzLmxpZ2h0aW5nLmRyYXdXYWxscyhjb250ZXh0KSk7XG4gICAgdGhpcy5hcHBseUxpZ2h0aW5nKGZyYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBwYXJ0cyBvZiBhY3RvcnMgdGhhdCBhcmUgdW5kZXJ3YXRlciwgdGhlIGxvd2VzdCB0aGluZ3Mgb24gdGhlXG4gICAqIHNjcmVlbiBhcmUgZHJhd24gbGFzdFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U3VibWVyZ2VkQWN0b3JzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IGJvdHRvbSA9ICh7IGFjdG9yOiB7IHN1cmZhY2UgfSB9OiBTdWJtZXJzaWJsZUFjdG9yKSA9PlxuICAgICAgc3VyZmFjZS5wb3NpdGlvbi55ICsgc3VyZmFjZS5zaXplLnk7XG5cbiAgICBbLi4udGhpcy5zdWJtZXJzaWJsZUFjdG9yc11cbiAgICAgIC5zb3J0KChhLCBiKSA9PiBib3R0b20oYSkgLSBib3R0b20oYikpXG4gICAgICAuZm9yRWFjaCgoeyBhY3RvciB9KSA9PiBhY3Rvci5zdXJmYWNlLmRyYXdIaWRkZW4oY29udGV4dCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3V2F0ZXIoZnJhbWU6IEZyYW1lKSB7XG4gICAgaWYgKCF0aGlzLndhdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnJhbWUucmVmbGVjdGlvbk1hcCA9IHRoaXMucmVmbGVjdGlvbnM/LmRyYXdGbG9vclNvdXJjZXMoKSA/PyBudWxsO1xuICAgIHRoaXMud2F0ZXIuZHJhdyhmcmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBwYXJ0IG9mIHRoZSBzY2VuZSB3aXRoIHRoZSBjYW1lcmEncyB0cmFuc2Zvcm1zIGFwcGxpZWRcbiAgICovXG4gIHByaXZhdGUgZHJhd0xheWVyKHsgY29udGV4dCwgY2FtZXJhIH06IEZyYW1lLCBkcmF3OiAoKSA9PiB2b2lkKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gICAgZHJhdygpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUxpZ2h0aW5nKGZyYW1lOiBGcmFtZSkge1xuICAgIGNvbnN0IHsgY29udGV4dCwgY2FtZXJhLCBzY3JlZW4gfSA9IGZyYW1lO1xuXG4gICAgY29uc3QgeyBsaWdodGluZ0VuYWJsZWQsIHN1cmZhY2VNYXBzRW5hYmxlZCB9ID0gdGhpcy5saWdodGluZy5vcHRpb25zO1xuXG4gICAgaWYgKGxpZ2h0aW5nRW5hYmxlZCAmJiBzdXJmYWNlTWFwc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMud2F0ZXI/LmRyYXdMaWdodGluZ01hcHMoZnJhbWUpO1xuICAgIH1cblxuICAgIHRoaXMubGlnaHRpbmcucHJlcGFyZShjYW1lcmEsIHNjcmVlbik7XG4gICAgdGhpcy5saWdodGluZy5kcmF3KGNvbnRleHQpO1xuICB9XG59XG4iLCJleHBvcnQgeyBXb3JsZCB9IGZyb20gJy4vV29ybGQnO1xuZXhwb3J0IHR5cGUge1xuICBXb3JsZEFjdG9yT3B0aW9ucyxcbiAgV29ybGRBY3RvcldhdGVyT3B0aW9ucyxcbiAgV29ybGRHcm91bmRPcHRpb25zLFxuICBXb3JsZE9wdGlvbnMsXG4gIFdvcmxkV2FsbE9wdGlvbnMsXG59IGZyb20gJy4vV29ybGQnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9