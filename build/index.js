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
        this.depthGrid = [[1]];
        this.flowGrid = [[(0, vec_1.vec2)()]];
        this.maskVersion = 0;
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
        this.flowGrid = Array.isArray(flow) ? flow : [[flow]];
        const rows = this.flowGrid.length;
        const columns = this.flowGrid[0].length;
        const data = new Uint8Array(rows * columns * 4);
        this.flowGrid.forEach((row, y) => row.forEach((value, x) => {
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
    gridSize(size) {
        const { gridCellSize } = this.options;
        return vec_1.vec2.map(size, length => Math.max(Math.ceil(length / gridCellSize), 1));
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
    gridCellSize: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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a0IsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBRXRFLElBQUksZUFBZSxJQUFJLGtCQUFrQixFQUFFO1lBQ3pDLFVBQUksQ0FBQyxLQUFLLDBDQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O0FBOVhILHNCQStYQztBQTlYeUIsbUJBQWEsR0FBRyxJQUFJLENBQUM7QUFDckIsMkJBQXFCLEdBQUc7SUFDOUMsUUFBUSxFQUFFLEVBQUU7SUFDWixVQUFVLEVBQUUsQ0FBQztJQUNiLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUNzQixxQkFBZSxHQUFHLEVBQUUsQ0FBQztBQUNyQixtQkFBYSxHQUFHLENBQUMsQ0FBQztBQUNsQixxQkFBZSxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakpqRCx5RUFBZ0M7QUFBdkIsb0dBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FkO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvci9wYXJzZWNvbG9yLmpzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvY29yZS9HbENvbnRleHQudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9jb3JlL3V0aWxpdGllcy50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9BY3Rvci50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9DYXN0ZXIudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvTGlnaHQudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvTGlnaHRpbmdTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvU2NlbmVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvU2hhZGVyUGFzcy50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9saWdodGluZy9TdXJmYWNlLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL2xpZ2h0aW5nL1dhbGwudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvbGlnaHRpbmcvdXRpbGl0aWVzLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3JlZmxlY3Rpb25zL1JlZmxlY3Rpb25SZWNlaXZlci50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS93b3JsZC0yZC8uL3NyYy9yZWZsZWN0aW9ucy9SZWZsZWN0aW9uU291cmNlLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3JlZmxlY3Rpb25zL1JlZmxlY3Rpb25TeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvcmVmbGVjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvd2F0ZXIvUmlwcGxlRmllbGQudHMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvLi9zcmMvd2F0ZXIvV2F0ZXJQYXNzLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3dhdGVyL1dhdGVyUmVnaW9uLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3dhdGVyL1dhdGVyU3lzdGVtLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3dhdGVyL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3dvcmxkL1dvcmxkLnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkLy4vc3JjL3dvcmxkL2luZGV4LnRzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvd29ybGQtMmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3dvcmxkLTJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCYXNlbWVudFVuaXZlcnNlV29ybGQyRFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCYXNlbWVudFVuaXZlcnNlV29ybGQyRFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvKlxyXG5cclxuUGFyc2UgYSB2YWxpZCBDU1MgY29sb3Igc3RyaW5nIGludG8gYW4gb2JqZWN0IGxpa2U6IHsgciwgZywgYiwgYSB9XHJcblByb3BlcnRpZXMgd2lsbCBoYXZlIHRoZSBjb3JyZWN0IGludGVydmFsIGFuZCBwcmVjaXNpb24uXHJcblZhbGlkIGlucHV0IGV4YW1wbGVzOlxyXG5cclxucmVkXHJcbiNmMDBcclxuI2ZmMDAwMFxyXG4jZmYwMDAwZmZcclxucmdiKDI1NSwgMCwgMClcclxucmdiKDEwMCUsIDAlLCAwJSlcclxucmdiYSgyNTUsIDAsIDAsIDEpXHJcbnJnYmEoMTAwJSwgMCUsIDAlLCAxKVxyXG5oc2woMCwgMTAwJSwgNTAlKVxyXG5oc2xhKDAsIDEwMCUsIDUwJSwgMSlcclxuXHJcbiovXHJcbmNvbnN0IHBhcnNlQ29sb3IgPSAoZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgbmFtZXMgPSB7XHJcblx0XHRcImFsaWNlYmx1ZVwiOiBcImYwZjhmZlwiLFxyXG5cdFx0XCJhbnRpcXVld2hpdGVcIjogXCJmYWViZDdcIixcclxuXHRcdFwiYXF1YVwiOiBcIjBmZlwiLFxyXG5cdFx0XCJhcXVhbWFyaW5lXCI6IFwiN2ZmZmQ0XCIsXHJcblx0XHRcImF6dXJlXCI6IFwiZjBmZmZmXCIsXHJcblx0XHRcImJlaWdlXCI6IFwiZjVmNWRjXCIsXHJcblx0XHRcImJpc3F1ZVwiOiBcImZmZTRjNFwiLFxyXG5cdFx0XCJibGFja1wiOiBcIjAwMFwiLFxyXG5cdFx0XCJibGFuY2hlZGFsbW9uZFwiOiBcImZmZWJjZFwiLFxyXG5cdFx0XCJibHVlXCI6IFwiMDBmXCIsXHJcblx0XHRcImJsdWV2aW9sZXRcIjogXCI4YTJiZTJcIixcclxuXHRcdFwiYnJvd25cIjogXCJhNTJhMmFcIixcclxuXHRcdFwiYnVybHl3b29kXCI6IFwiZGViODg3XCIsXHJcblx0XHRcImNhZGV0Ymx1ZVwiOiBcIjVmOWVhMFwiLFxyXG5cdFx0XCJjaGFydHJldXNlXCI6IFwiN2ZmZjAwXCIsXHJcblx0XHRcImNob2NvbGF0ZVwiOiBcImQyNjkxZVwiLFxyXG5cdFx0XCJjb3JhbFwiOiBcImZmN2Y1MFwiLFxyXG5cdFx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBcIjY0OTVlZFwiLFxyXG5cdFx0XCJjb3Juc2lsa1wiOiBcImZmZjhkY1wiLFxyXG5cdFx0XCJjcmltc29uXCI6IFwiZGMxNDNjXCIsXHJcblx0XHRcImN5YW5cIjogXCIwZmZcIixcclxuXHRcdFwiZGFya2JsdWVcIjogXCIwMDAwOGJcIixcclxuXHRcdFwiZGFya2N5YW5cIjogXCIwMDhiOGJcIixcclxuXHRcdFwiZGFya2dvbGRlbnJvZFwiOiBcImI4ODYwYlwiLFxyXG5cdFx0XCJkYXJrZ3JheVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJrZ3JlZW5cIjogXCIwMDY0MDBcIixcclxuXHRcdFwiZGFya2dyZXlcIjogXCJhOWE5YTlcIixcclxuXHRcdFwiZGFya2toYWtpXCI6IFwiYmRiNzZiXCIsXHJcblx0XHRcImRhcmttYWdlbnRhXCI6IFwiOGIwMDhiXCIsXHJcblx0XHRcImRhcmtvbGl2ZWdyZWVuXCI6IFwiNTU2YjJmXCIsXHJcblx0XHRcImRhcmtvcmFuZ2VcIjogXCJmZjhjMDBcIixcclxuXHRcdFwiZGFya29yY2hpZFwiOiBcIjk5MzJjY1wiLFxyXG5cdFx0XCJkYXJrcmVkXCI6IFwiOGIwMDAwXCIsXHJcblx0XHRcImRhcmtzYWxtb25cIjogXCJlOTk2N2FcIixcclxuXHRcdFwiZGFya3NlYWdyZWVuXCI6IFwiOGZiYzhmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWJsdWVcIjogXCI0ODNkOGJcIixcclxuXHRcdFwiZGFya3NsYXRlZ3JheVwiOiBcIjJmNGY0ZlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmV5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmt0dXJxdW9pc2VcIjogXCIwMGNlZDFcIixcclxuXHRcdFwiZGFya3Zpb2xldFwiOiBcIjk0MDBkM1wiLFxyXG5cdFx0XCJkZWVwcGlua1wiOiBcImZmMTQ5M1wiLFxyXG5cdFx0XCJkZWVwc2t5Ymx1ZVwiOiBcIjAwYmZmZlwiLFxyXG5cdFx0XCJkaW1ncmF5XCI6IFwiNjk2OTY5XCIsXHJcblx0XHRcImRpbWdyZXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZG9kZ2VyYmx1ZVwiOiBcIjFlOTBmZlwiLFxyXG5cdFx0XCJmaXJlYnJpY2tcIjogXCJiMjIyMjJcIixcclxuXHRcdFwiZmxvcmFsd2hpdGVcIjogXCJmZmZhZjBcIixcclxuXHRcdFwiZm9yZXN0Z3JlZW5cIjogXCIyMjhiMjJcIixcclxuXHRcdFwiZnVjaHNpYVwiOiBcImYwZlwiLFxyXG5cdFx0XCJnYWluc2Jvcm9cIjogXCJkY2RjZGNcIixcclxuXHRcdFwiZ2hvc3R3aGl0ZVwiOiBcImY4ZjhmZlwiLFxyXG5cdFx0XCJnb2xkXCI6IFwiZmZkNzAwXCIsXHJcblx0XHRcImdvbGRlbnJvZFwiOiBcImRhYTUyMFwiLFxyXG5cdFx0XCJncmF5XCI6IFwiODA4MDgwXCIsXHJcblx0XHRcImdyZWVuXCI6IFwiMDA4MDAwXCIsXHJcblx0XHRcImdyZWVueWVsbG93XCI6IFwiYWRmZjJmXCIsXHJcblx0XHRcImdyZXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiaG9uZXlkZXdcIjogXCJmMGZmZjBcIixcclxuXHRcdFwiaG90cGlua1wiOiBcImZmNjliNFwiLFxyXG5cdFx0XCJpbmRpYW5yZWRcIjogXCJjZDVjNWNcIixcclxuXHRcdFwiaW5kaWdvXCI6IFwiNGIwMDgyXCIsXHJcblx0XHRcIml2b3J5XCI6IFwiZmZmZmYwXCIsXHJcblx0XHRcImtoYWtpXCI6IFwiZjBlNjhjXCIsXHJcblx0XHRcImxhdmVuZGVyXCI6IFwiZTZlNmZhXCIsXHJcblx0XHRcImxhdmVuZGVyYmx1c2hcIjogXCJmZmYwZjVcIixcclxuXHRcdFwibGF3bmdyZWVuXCI6IFwiN2NmYzAwXCIsXHJcblx0XHRcImxlbW9uY2hpZmZvblwiOiBcImZmZmFjZFwiLFxyXG5cdFx0XCJsaWdodGJsdWVcIjogXCJhZGQ4ZTZcIixcclxuXHRcdFwibGlnaHRjb3JhbFwiOiBcImYwODA4MFwiLFxyXG5cdFx0XCJsaWdodGN5YW5cIjogXCJlMGZmZmZcIixcclxuXHRcdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogXCJmYWZhZDJcIixcclxuXHRcdFwibGlnaHRncmF5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0Z3JlZW5cIjogXCI5MGVlOTBcIixcclxuXHRcdFwibGlnaHRncmV5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0cGlua1wiOiBcImZmYjZjMVwiLFxyXG5cdFx0XCJsaWdodHNhbG1vblwiOiBcImZmYTA3YVwiLFxyXG5cdFx0XCJsaWdodHNlYWdyZWVuXCI6IFwiMjBiMmFhXCIsXHJcblx0XHRcImxpZ2h0c2t5Ymx1ZVwiOiBcIjg3Y2VmYVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JheVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JleVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBcImIwYzRkZVwiLFxyXG5cdFx0XCJsaWdodHllbGxvd1wiOiBcImZmZmZlMFwiLFxyXG5cdFx0XCJsaW1lXCI6IFwiMGYwXCIsXHJcblx0XHRcImxpbWVncmVlblwiOiBcIjMyY2QzMlwiLFxyXG5cdFx0XCJsaW5lblwiOiBcImZhZjBlNlwiLFxyXG5cdFx0XCJtYWdlbnRhXCI6IFwiZjBmXCIsXHJcblx0XHRcIm1hcm9vblwiOiBcIjgwMDAwMFwiLFxyXG5cdFx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFwiNjZjZGFhXCIsXHJcblx0XHRcIm1lZGl1bWJsdWVcIjogXCIwMDAwY2RcIixcclxuXHRcdFwibWVkaXVtb3JjaGlkXCI6IFwiYmE1NWQzXCIsXHJcblx0XHRcIm1lZGl1bXB1cnBsZVwiOiBcIjkzNzBkYlwiLFxyXG5cdFx0XCJtZWRpdW1zZWFncmVlblwiOiBcIjNjYjM3MVwiLFxyXG5cdFx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogXCI3YjY4ZWVcIixcclxuXHRcdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogXCIwMGZhOWFcIixcclxuXHRcdFwibWVkaXVtdHVycXVvaXNlXCI6IFwiNDhkMWNjXCIsXHJcblx0XHRcIm1lZGl1bXZpb2xldHJlZFwiOiBcImM3MTU4NVwiLFxyXG5cdFx0XCJtaWRuaWdodGJsdWVcIjogXCIxOTE5NzBcIixcclxuXHRcdFwibWludGNyZWFtXCI6IFwiZjVmZmZhXCIsXHJcblx0XHRcIm1pc3R5cm9zZVwiOiBcImZmZTRlMVwiLFxyXG5cdFx0XCJtb2NjYXNpblwiOiBcImZmZTRiNVwiLFxyXG5cdFx0XCJuYXZham93aGl0ZVwiOiBcImZmZGVhZFwiLFxyXG5cdFx0XCJuYXZ5XCI6IFwiMDAwMDgwXCIsXHJcblx0XHRcIm9sZGxhY2VcIjogXCJmZGY1ZTZcIixcclxuXHRcdFwib2xpdmVcIjogXCI4MDgwMDBcIixcclxuXHRcdFwib2xpdmVkcmFiXCI6IFwiNmI4ZTIzXCIsXHJcblx0XHRcIm9yYW5nZVwiOiBcImZmYTUwMFwiLFxyXG5cdFx0XCJvcmFuZ2VyZWRcIjogXCJmZjQ1MDBcIixcclxuXHRcdFwib3JjaGlkXCI6IFwiZGE3MGQ2XCIsXHJcblx0XHRcInBhbGVnb2xkZW5yb2RcIjogXCJlZWU4YWFcIixcclxuXHRcdFwicGFsZWdyZWVuXCI6IFwiOThmYjk4XCIsXHJcblx0XHRcInBhbGV0dXJxdW9pc2VcIjogXCJhZmVlZWVcIixcclxuXHRcdFwicGFsZXZpb2xldHJlZFwiOiBcImRiNzA5M1wiLFxyXG5cdFx0XCJwYXBheWF3aGlwXCI6IFwiZmZlZmQ1XCIsXHJcblx0XHRcInBlYWNocHVmZlwiOiBcImZmZGFiOVwiLFxyXG5cdFx0XCJwZXJ1XCI6IFwiY2Q4NTNmXCIsXHJcblx0XHRcInBpbmtcIjogXCJmZmMwY2JcIixcclxuXHRcdFwicGx1bVwiOiBcImRkYTBkZFwiLFxyXG5cdFx0XCJwb3dkZXJibHVlXCI6IFwiYjBlMGU2XCIsXHJcblx0XHRcInB1cnBsZVwiOiBcIjgwMDA4MFwiLFxyXG5cdFx0XCJyZWJlY2NhcHVycGxlXCI6IFwiNjM5XCIsXHJcblx0XHRcInJlZFwiOiBcImYwMFwiLFxyXG5cdFx0XCJyb3N5YnJvd25cIjogXCJiYzhmOGZcIixcclxuXHRcdFwicm95YWxibHVlXCI6IFwiNDE2OWUxXCIsXHJcblx0XHRcInNhZGRsZWJyb3duXCI6IFwiOGI0NTEzXCIsXHJcblx0XHRcInNhbG1vblwiOiBcImZhODA3MlwiLFxyXG5cdFx0XCJzYW5keWJyb3duXCI6IFwiZjRhNDYwXCIsXHJcblx0XHRcInNlYWdyZWVuXCI6IFwiMmU4YjU3XCIsXHJcblx0XHRcInNlYXNoZWxsXCI6IFwiZmZmNWVlXCIsXHJcblx0XHRcInNpZW5uYVwiOiBcImEwNTIyZFwiLFxyXG5cdFx0XCJzaWx2ZXJcIjogXCJjMGMwYzBcIixcclxuXHRcdFwic2t5Ymx1ZVwiOiBcIjg3Y2VlYlwiLFxyXG5cdFx0XCJzbGF0ZWJsdWVcIjogXCI2YTVhY2RcIixcclxuXHRcdFwic2xhdGVncmF5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNsYXRlZ3JleVwiOiBcIjcwODA5MFwiLFxyXG5cdFx0XCJzbm93XCI6IFwiZmZmYWZhXCIsXHJcblx0XHRcInNwcmluZ2dyZWVuXCI6IFwiMDBmZjdmXCIsXHJcblx0XHRcInN0ZWVsYmx1ZVwiOiBcIjQ2ODJiNFwiLFxyXG5cdFx0XCJ0YW5cIjogXCJkMmI0OGNcIixcclxuXHRcdFwidGVhbFwiOiBcIjAwODA4MFwiLFxyXG5cdFx0XCJ0aGlzdGxlXCI6IFwiZDhiZmQ4XCIsXHJcblx0XHRcInRvbWF0b1wiOiBcImZmNjM0N1wiLFxyXG5cdFx0XCJ0dXJxdW9pc2VcIjogXCI0MGUwZDBcIixcclxuXHRcdFwidmlvbGV0XCI6IFwiZWU4MmVlXCIsXHJcblx0XHRcIndoZWF0XCI6IFwiZjVkZWIzXCIsXHJcblx0XHRcIndoaXRlXCI6IFwiZmZmXCIsXHJcblx0XHRcIndoaXRlc21va2VcIjogXCJmNWY1ZjVcIixcclxuXHRcdFwieWVsbG93XCI6IFwiZmYwXCIsXHJcblx0XHRcInllbGxvd2dyZWVuXCI6IFwiOWFjZDMyXCIsXHJcblx0XHRcInRyYW5zcGFyZW50XCI6IFwiMDAwMDAwMDBcIlxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgY2xhbXAgPSAobiwgYSwgYikgPT4gbiA8IGEgPyBhIDogKG4gPiBiID8gYiA6IG4pLFx0Ly8gQ2xhbXAgbiBpbiBpbnRlcnZhbCBbYSwgYl1cclxuXHRcdHJvdW5kID0gKG4sIGQpID0+IHtcdC8vIFJvdW5kIG4gdG8gbmVhcmVzdCBpbnRlZ2VyLCBvciB0byBkIGRlY2ltYWwgcGxhY2VzIChpZiBkIGlzIGRlZmluZWQpXHJcblx0XHRcdHZhciBwID0gTWF0aC5wb3coMTAsIGQgfHwgMCk7XHJcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKG4gKiBwKSAvIHA7XHJcblx0XHR9LFxyXG5cdFx0aGkgPSBuID0+IGNsYW1wKHBhcnNlSW50KG4sIDE2KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRoZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1LCAyKSwgMCwgMSksXHQvLyBDb252ZXJ0IDItZGlnaXQgaGV4IHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHNpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pKSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0c2YgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobiksIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pIC8gMTAwICogMjU1KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHR1ZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDM2MCwgMCwgMSksXHQvLyBDb252ZXJ0IGh1ZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRwZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDEwMCwgMCwgMSk7XHQvLyBDb252ZXJ0IHBlcmNlbnRhZ2Ugc3RyaW5nIHRvIGZsb2F0IGluIGludGVydmFsIFswLCAxXVxyXG5cdFxyXG5cdC8vIENvbnZlcnQgaHNsIHRvIHJnYiwgYWxwaGEgdmFsdWUgZ2V0cyBwYXNzZWQgc3RyYWlnaHQgdGhyb3VnaFxyXG5cdC8vIGgsIHMsIGwgdmFsdWVzIGFyZSBhc3N1bWVkIHRvIGJlIGluIGludGVydmFsIFswLCAxXVxyXG5cdC8vIFJldHVybnMgYW4gb2JqZWN0IGxpa2UgeyByLCBnLCBiLCBhIH1cclxuXHQvLyBodHRwOi8vYXhvbmZsdXguY29tL2hhbmR5LXJnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY1xyXG5cdGZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwsIGEpIHtcclxuXHRcdHZhciByLCBnLCBiLFxyXG5cdFx0XHRodWUgPSBmdW5jdGlvbihwLCBxLCB0KSB7XHJcblx0XHRcdFx0aWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxyXG5cdFx0XHRcdGlmICh0ID4gMSkgeyB0IC09IDE7IH1cclxuXHRcdFx0XHRpZiAodCA8IDEgLyA2KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0IH07XHJcblx0XHRcdFx0aWYgKHQgPCAxIC8gMikgeyByZXR1cm4gcTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMiAvIDMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2IH07XHJcblx0XHRcdFx0cmV0dXJuIHA7XHJcblx0XHRcdH07XHJcblx0XHRpZiAocyA9PSAwKSB7XHJcblx0XHRcdHIgPSBnID0gYiA9IGw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHMsXHJcblx0XHRcdFx0cCA9IDIgKiBsIC0gcTtcclxuXHRcdFx0ciA9IGh1ZShwLCBxLCBoICsgMSAvIDMpO1xyXG5cdFx0XHRnID0gaHVlKHAsIHEsIGgpO1xyXG5cdFx0XHRiID0gaHVlKHAsIHEsIGggLSAxIC8gMyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4geyByOiByb3VuZChyICogMjU1KSwgZzogcm91bmQoZyAqIDI1NSksIGI6IHJvdW5kKGIgKiAyNTUpLCBhOiBhIH07XHJcblx0fVxyXG5cdHJldHVybiBmdW5jdGlvbihjKSB7XHJcblx0XHR2YXIgbyA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBtID0gbnVsbDtcclxuXHRcdGlmICh0eXBlb2YgYyA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGlmIChjIGluIG5hbWVzKSB7IGMgPSBcIiNcIiArIG5hbWVzW2NdOyB9XHJcblx0XHRcdGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV0pKFthLWYwLTldKShbYS1mMC05XSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0gKyBtWzFdKSwgZzogaGkobVsyXSArIG1bMl0pLCBiOiBoaShtWzNdICsgbVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdKSwgZzogaGkobVsyXSksIGI6IGhpKG1bM10pLCBhOiBoZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiBzZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8pXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvaHNsYVxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIHNmKG1bNF0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYyA9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGlmIChjLnIgIT09IHVuZGVmaW5lZCAmJiBjLmcgIT0gdW5kZWZpbmVkICYmIGMuYiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2koYy5yKSwgZzogc2koYy5nKSwgYjogc2koYy5iKSwgYTogc2YoYy5hIHx8IDEpIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoYy5oICE9PSB1bmRlZmluZWQgJiYgYy5zICE9PSB1bmRlZmluZWQgJiYgYy5sICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYoYy5oKSwgcGYoYy5zKSwgcGYoYy5sKSwgc2YoYy5hIHx8IDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG87XHJcblx0fTtcclxufSgpKTtcclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0geyBwYXJzZUNvbG9yIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBNZW1vaXplIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGYgVGhlIGZ1bmN0aW9uIHRvIG1lbW9pemVcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBtZW1vaXplZCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvblxuICovXG5jb25zdCBtZW1vaXplID0gZiA9PiB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIHJldHVybiBjYWNoZVthcmdzXSA/PyAoY2FjaGVbYXJnc10gPSBmLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIE51bWJlciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXIgYlxuICogQHBhcmFtIHtudW1iZXJ9IFtwPU51bWJlci5FUFNJTE9OXSBUaGUgcHJlY2lzaW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG51bWJlcnMgYSBhbmQgYiBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICovXG5jb25zdCBmbG9hdEVxdWFscyA9IChhLCBiLCBwID0gTnVtYmVyLkVQU0lMT04pID0+IE1hdGguYWJzKGEgLSBiKSA8IHA7XG5cbi8qKlxuICogQ2xhbXAgYSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciB0byBjbGFtcFxuICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gVGhlIG1pbmltdW0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIFRoZSBtYXhpbXVtIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgY2xhbXBlZCBudW1iZXJcbiAqL1xuY29uc3QgY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG5cbi8qKlxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgZnJvbSB3aGljaCB0byBnZXQgdGhlIGZyYWN0aW9uYWwgcGFydFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcbiAqL1xuY29uc3QgZnJhYyA9IGEgPT4gYSA+PSAwID8gYSAtIE1hdGguZmxvb3IoYSkgOiBhIC0gTWF0aC5jZWlsKGEpO1xuXG4vKipcbiAqIFJvdW5kIG4gdG8gZCBkZWNpbWFsIHBsYWNlc1xuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byByb3VuZFxuICogQHBhcmFtIHtudW1iZXJ9IFtkPTBdIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gcm91bmQgdG9cbiAqIEByZXR1cm4ge251bWJlcn0gQSByb3VuZGVkIG51bWJlclxuICovXG5jb25zdCByb3VuZCA9IChuLCBkID0gMCkgPT4ge1xuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIGQpO1xuICByZXR1cm4gTWF0aC5yb3VuZChuICogcCArIE51bWJlci5FUFNJTE9OKSAvIHA7XG59XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xuXG4vKipcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMCBUb3AtcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaXggSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB4XG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXG4gKi9cbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3QgcmVtYXAgPSAoaSwgYTEsIGEyLCBiMSwgYjIpID0+IGIxICsgKGkgLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG5cbi8qKlxuICogRG8gYSBzbW9vdGggaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBzbW9vdGhzdGVwID0gKGEsIGIsIGkpID0+IGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKi9cbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5jb25zdCByYW5kb21JbnRCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0yXSBUaGUgbnVtYmVyIG9mIHNhbXBsZXNcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbSA9IChtdSA9IDAuNSwgc2lnbWEgPSAwLjUsIHNhbXBsZXMgPSAyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XG4gICAgdG90YWwgKz0gTWF0aC5yYW5kb20oKTtcbiAgfVxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XG59O1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB3IEFuIGFycmF5IG9mIHdlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XG4gKi9cbmNvbnN0IHdlaWdodGVkUmFuZG9tID0gdyA9PiB7XG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICB3aGlsZSAodG90YWwgPiByKSB7XG4gICAgdG90YWwgLT0gd1tuKytdO1xuICB9XG4gIHJldHVybiBuIC0gMTtcbn07XG5cbi8qKlxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxuICogQGNhbGxiYWNrIEludGVycG9sYXRpb25GdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuXG4vKipcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQSBudW1iZXIgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHBhcmFtIHtJbnRlcnBvbGF0aW9uRnVuY3Rpb259IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxuICovXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcbiAgY29uc3QgcCA9IGNsYW1wKE1hdGgudHJ1bmMocyksIDAsIGEubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuXG4vKipcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHJldHVybiB7bnVtYmVyfSBhIVxuICovXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xuICAgIHJlc3VsdCAqPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxuICovXG5jb25zdCBucHIgPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gZmFjdG9yaWFsKG4gLSByKTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuQ3JcbiAqL1xuY29uc3QgbmNyID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbGwgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogcGVybXV0YXRpb25zKFsxLCAyLCAzXSwgMik7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCAyXSxcbiAqICAgWzEsIDNdLFxuICogICBbMiwgMV0sXG4gKiAgIFsyLCAzXSxcbiAqICAgWzMsIDFdLFxuICogICBbMywgMl1cbiAqIF1cbiAqIGBgYFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBjaG9vc2UgaW4gZWFjaCBwZXJtdXRhdGlvblxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBwZXJtdXRhdGlvbiBhcnJheXNcbiAqL1xuY29uc3QgcGVybXV0YXRpb25zID0gKGEsIHIpID0+IHtcbiAgaWYgKHIgPT09IDEpIHtcbiAgICByZXR1cm4gYS5tYXAoaXRlbSA9PiBbaXRlbV0pO1xuICB9XG5cbiAgcmV0dXJuIGEucmVkdWNlKFxuICAgIChhY2MsIGl0ZW0sIGkpID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLnBlcm11dGF0aW9ucyhhLnNsaWNlKDAsIGkpLmNvbmNhdChhLnNsaWNlKGkgKyAxKSksIHIgLSAxKS5tYXAoYyA9PiBbaXRlbSwgLi4uY10pLFxuICAgIF0sXG4gICAgW11cbiAgKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbGwgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY29tYmluYXRpb25zKFsxLCAyLCAzXSwgMik7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCAyXSxcbiAqICAgWzEsIDNdLFxuICogICBbMiwgM11cbiAqIF1cbiAqIGBgYFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBjaG9vc2UgaW4gZWFjaCBjb21iaW5hdGlvblxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBjb21iaW5hdGlvbiBhcnJheXNcbiAqL1xuY29uc3QgY29tYmluYXRpb25zID0gKGEsIHIpID0+IHtcbiAgaWYgKHIgPT09IDEpIHtcbiAgICByZXR1cm4gYS5tYXAoaXRlbSA9PiBbaXRlbV0pO1xuICB9XG5cbiAgcmV0dXJuIGEucmVkdWNlKFxuICAgIChhY2MsIGl0ZW0sIGkpID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLmNvbWJpbmF0aW9ucyhhLnNsaWNlKGkgKyAxKSwgciAtIDEpLm1hcChjID0+IFtpdGVtLCAuLi5jXSksXG4gICAgXSxcbiAgICBbXVxuICApO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjYXJ0ZXNpYW4gcHJvZHVjdCBvZiBhcnJheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNhcnRlc2lhbihbMSwgMiwgM10sIFsnYScsICdiJ10pO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgXCJhXCJdLFxuICogICBbMSwgXCJiXCJdLFxuICogICBbMiwgXCJhXCJdLFxuICogICBbMiwgXCJiXCJdLFxuICogICBbMywgXCJhXCJdLFxuICogICBbMywgXCJiXCJdXG4gKiBdXG4gKiBgYGBcbiAqL1xuY29uc3QgY2FydGVzaWFuID0gKC4uLmFycikgPT5cbiAgYXJyLnJlZHVjZShcbiAgICAoYSwgYikgPT4gYS5mbGF0TWFwKGMgPT4gYi5tYXAoZCA9PiBbLi4uYywgZF0pKSxcbiAgICBbW11dXG4gICk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhcnJheSB2YWx1ZXNcbiAqIEBjYWxsYmFjayBUaW1lc0Z1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IFRoZSBhcnJheSB2YWx1ZVxuICovXG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHtUaW1lc0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxuICovXG5jb25zdCB0aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgbnVtYmVycyAwLT4obiAtIDEpXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcbiAqL1xuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XG5cbi8qKlxuICogWmlwIG11bHRpcGxlIGFycmF5cyB0b2dldGhlciwgaS5lLiAoWzEsIDIsIDNdLCBbYSwgYiwgY10pID0+IFtbMSwgYV0sIFsyLCBiXSwgWzMsIGNdXVxuICogQHBhcmFtIHsuLi5BcnJheTwqPn0gYSBUaGUgYXJyYXlzIHRvIHppcFxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fVxuICovXG5jb25zdCB6aXAgPSAoLi4uYSkgPT4gdGltZXMoaSA9PiBhLm1hcChhID0+IGFbaV0pLCBNYXRoLm1heCguLi5hLm1hcChhID0+IGEubGVuZ3RoKSkpO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQHBhcmFtIHtBcnJheTwqPn0gYSBUaGUgYXJyYXkgdG8gYWNjZXNzXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5IHdpdGhvdXQgcmVtb3ZpbmcgaXRcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4geyp9IFRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgcGVlayA9IChhKSA9PiB7XG4gIGlmICghYS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGFbYS5sZW5ndGggLSAxXTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBwb3NpdGlvbiBpbiBhbiB1bnJvbGxlZCAyZCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHggVGhlIHggcG9zaXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSB5IHBvc2l0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gdyBUaGUgd2lkdGggb2YgdGhlIDJkIGFycmF5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgaW5kZXggaW4gdGhlIHVucm9sbGVkIGFycmF5XG4gKi9cbmNvbnN0IGluZCA9ICh4LCB5LCB3KSA9PiB4ICsgeSAqIHc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwb3NpdGlvbiBmb3IgYSBnaXZlbiBpbmRleCBpbiBhbiB1bnJvbGxlZCAyZCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gdyBUaGUgd2lkdGggb2YgdGhlIDJkIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXk8bnVtYmVyPn0gVGhlIHBvc2l0aW9uIGFzIGEgMi10dXBsZVxuICovXG5jb25zdCBwb3MgPSAoaSwgdykgPT4gW2kgJSB3LCBNYXRoLmZsb29yKGkgLyB3KV07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4vKipcbiAqIEZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIHVzZSBmb3IgY29uY2F0ZW5hdGluZyBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEEgZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCBmbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChvW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0udG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8ICFvW2tleV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXQob1trZXldLCBjb25jYXRlbmF0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLk9iamVjdC5rZXlzKGZsYXR0ZW5lZCkucmVkdWNlKFxuICAgICAgICAoY2hpbGRBY2MsIGNoaWxkS2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmNoaWxkQWNjLFxuICAgICAgICAgIFtgJHtrZXl9JHtjb25jYXRlbmF0b3J9JHtjaGlsZEtleX1gXTogZmxhdHRlbmVkW2NoaWxkS2V5XSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApLFxuICAgIH07XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogVW5mbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byBjaGVjayBmb3IgaW4gY29uY2F0ZW5hdGVkIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gdW4tZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCB1bmZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIGxldCByZXN1bHQgPSB7fSwgdGVtcCwgc3Vic3RyaW5ncywgcHJvcGVydHksIGk7XG5cbiAgZm9yIChwcm9wZXJ0eSBpbiBvKSB7XG4gICAgc3Vic3RyaW5ncyA9IHByb3BlcnR5LnNwbGl0KGNvbmNhdGVuYXRvcik7XG4gICAgdGVtcCA9IHJlc3VsdDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vic3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmICghKHN1YnN0cmluZ3NbaV0gaW4gdGVtcCkpIHtcbiAgICAgICAgaWYgKGlzRmluaXRlKHN1YnN0cmluZ3NbaSArIDFdKSkge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRlbXAgPSB0ZW1wW3N1YnN0cmluZ3NbaV1dO1xuICAgIH1cbiAgICB0ZW1wW3N1YnN0cmluZ3Nbc3Vic3RyaW5ncy5sZW5ndGggLSAxXV0gPSBvW3Byb3BlcnR5XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEEgc3BsaXQgcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgU3BsaXRQcmVkaWNhdGVcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJyYXkgc2hvdWxkIHNwbGl0IGF0IHRoaXMgaW5kZXhcbiAqL1xuXG4vKipcbiAqIFNwbGl0IGFuIGFycmF5IGludG8gc3ViLWFycmF5cyBiYXNlZCBvbiBhIHByZWRpY2F0ZVxuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyYXlcbiAqIEBwYXJhbSB7U3BsaXRQcmVkaWNhdGV9IHByZWRpY2F0ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheXNcbiAqL1xuY29uc3Qgc3BsaXQgPSAoYXJyYXksIHByZWRpY2F0ZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBbXTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gW3ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goY3VycmVudCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUGx1Y2sga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIHBsdWNrIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGx1Y2tlZCBrZXlzXG4gKi9cbmNvbnN0IHBsdWNrID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9ba2V5XSB9KSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBFeGNsdWRlIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBleGNsdWRlIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwga2V5cyBleGNlcHQgZXhjbHVkZWQga2V5c1xuICovXG5jb25zdCBleGNsdWRlID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhvKS5maWx0ZXIoKFtrZXldKSA9PiAha2V5cy5pbmNsdWRlcyhrZXkpKVxuICApO1xufTtcblxuLyoqXG4gKiBBIGtleSB0cmFuc2Zvcm0gcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgS2V5VHJhbnNmb3JtRnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBvIFRoZSBvYmplY3QgYmVpbmcgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBjdXJyZW50IHBhdGggaW4gZG90IG5vdGF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBjdXJyZW50IGtleVxuICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gVGhlIHRyYW5zZm9ybWVkIGtleSwgb3IgbnVsbCB0byBvbWl0IHRoZSBrZXlcbiAqL1xuXG4vKipcbiAqIEEgdmFsdWUgdHJhbnNmb3JtIHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIFZhbHVlVHJhbnNmb3JtRnVuY3Rpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBvIFRoZSBvYmplY3QgYmVpbmcgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBjdXJyZW50IHBhdGggaW4gZG90IG5vdGF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBjdXJyZW50IGtleVxuICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9IFRoZSB0cmFuc2Zvcm1lZCB2YWx1ZVxuICovXG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhbnNmb3JtIHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gbyBUaGUgb2JqZWN0IHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtLZXlUcmFuc2Zvcm1GdW5jdGlvbn0gW2tmPXVuZGVmaW5lZF0gT3B0aW9uYWwga2V5IHRyYW5zZm9ybVxuICogQHBhcmFtIHtWYWx1ZVRyYW5zZm9ybUZ1bmN0aW9ufSBbdmY9dW5kZWZpbmVkXSBPcHRpb25hbCB2YWx1ZSB0cmFuc2Zvcm1cbiAqIEByZXR1cm4ge29iamVjdH0gVGhlIHRyYW5zZm9ybWVkIG9iamVjdFxuICovXG5jb25zdCB0cmFuc2Zvcm0gPSAobywga2YgPSB1bmRlZmluZWQsIHZmID0gdW5kZWZpbmVkKSA9PiB7XG4gIGNvbnN0IGlubmVyVHJhbnNmb3JtID0gKG9iaiwgY3VycmVudFBhdGgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBsZXQgbmV3S2V5ID0ga2V5O1xuICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICBjb25zdCBwYXRoID0gY3VycmVudFBhdGggPyBgJHtjdXJyZW50UGF0aH0uJHtrZXl9YCA6IGtleTtcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgIG5ld1ZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICEobmV3VmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShuZXdWYWx1ZSlcbiAgICAgICkge1xuICAgICAgICBuZXdWYWx1ZSA9IGlubmVyVHJhbnNmb3JtKG5ld1ZhbHVlLCBwYXRoKTtcbiAgICAgIH0gZWxzZSBpZiAodmYpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB2ZihvYmosIHBhdGgsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGtmKSB7XG4gICAgICAgIG5ld0tleSA9IGtmKG9iaiwgcGF0aCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdLZXkgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW25ld0tleV06IG5ld1ZhbHVlLFxuICAgICAgfTtcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIGlubmVyVHJhbnNmb3JtKG8sICcnKTtcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtZW1vaXplLFxuICAgIGZsb2F0RXF1YWxzLFxuICAgIGNsYW1wLFxuICAgIGZyYWMsXG4gICAgcm91bmQsXG4gICAgbGVycCxcbiAgICB1bmxlcnAsXG4gICAgYmxlcnAsXG4gICAgcmVtYXAsXG4gICAgc21vb3Roc3RlcCxcbiAgICByYWRpYW5zLFxuICAgIGRlZ3JlZXMsXG4gICAgcmFuZG9tQmV0d2VlbixcbiAgICByYW5kb21JbnRCZXR3ZWVuLFxuICAgIGNsdFJhbmRvbSxcbiAgICBjbHRSYW5kb21JbnQsXG4gICAgd2VpZ2h0ZWRSYW5kb20sXG4gICAgbGVycEFycmF5LFxuICAgIGRvdCxcbiAgICBmYWN0b3JpYWwsXG4gICAgbnByLFxuICAgIG5jcixcbiAgICBwZXJtdXRhdGlvbnMsXG4gICAgY29tYmluYXRpb25zLFxuICAgIGNhcnRlc2lhbixcbiAgICB0aW1lcyxcbiAgICByYW5nZSxcbiAgICB6aXAsXG4gICAgYXQsXG4gICAgcGVlayxcbiAgICBpbmQsXG4gICAgcG9zLFxuICAgIGNodW5rLFxuICAgIHNodWZmbGUsXG4gICAgZmxhdCxcbiAgICB1bmZsYXQsXG4gICAgc3BsaXQsXG4gICAgcGx1Y2ssXG4gICAgZXhjbHVkZSxcbiAgICB0cmFuc2Zvcm0sXG4gIH07XG59XG4iLCIvKipcbiAqIEBvdmVydmlldyBBIHNtYWxsIHZlY3RvciBhbmQgbWF0cml4IGxpYnJhcnlcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuY29uc3QgX3ZlY190aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5jb25zdCBfdmVjX2NodW5rID0gKGEsIG4pID0+IF92ZWNfdGltZXMoaSA9PiBhLnNsaWNlKGkgKiBuLCBpICogbiArIG4pLCBNYXRoLmNlaWwoYS5sZW5ndGggLyBuKSk7XG5jb25zdCBfdmVjX2RvdCA9IChhLCBiKSA9PiBhLnJlZHVjZSgobiwgdiwgaSkgPT4gbiArIHYgKiBiW2ldLCAwKTtcbmNvbnN0IF92ZWNfaXNfdmVjMiA9IGEgPT4gdHlwZW9mIGEgPT09ICdvYmplY3QnICYmICd4JyBpbiBhICYmICd5JyBpbiBhO1xuY29uc3QgX3ZlY19pc192ZWMzID0gYSA9PiB0eXBlb2YgYSA9PT0gJ29iamVjdCcgJiYgJ3gnIGluIGEgJiYgJ3knIGluIGEgJiYgJ3onIGluIGE7XG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlYzJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIDJkIHZlY3RvclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgMmQgdmVjdG9yLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNWZWMyKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgJ3gnIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnggPT09ICdudW1iZXInICYmXG4gICAgJ3knIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnkgPT09ICdudW1iZXInICYmXG4gICAgISgneicgaW4gdmFsdWUpXG4gICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IDJkIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ8dmVjMn0gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIG5ldyAyZCB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMyKDMsIDIpOyAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjMig0KTsgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYzIoYSk7ICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMyKCk7ICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjMiA9ICh4LCB5KSA9PiB7XG4gIGlmICgheCAmJiAheSkge1xuICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgfVxuICBpZiAoX3ZlY19pc192ZWMyKHgpKSB7XG4gICAgcmV0dXJuIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwIH07XG4gIH1cbiAgcmV0dXJuIHsgeDogeCwgeTogeSA/PyB4IH07XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gZ2V0IGNvbXBvbmVudHMgZnJvbVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XG4gKi9cbnZlYzIuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcblxuLyoqXG4gKiBDcmVhdGUgYSB2ZWN0b3IgZnJvbSBhbiBhcnJheSBvZiBjb21wb25lbnRzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbXBvbmVudHMgVGhlIGNvbXBvbmVudHMgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gQSBuZXcgdmVjdG9yXG4gKi9cbnZlYzIuZnJvbUNvbXBvbmVudHMgPSBjb21wb25lbnRzID0+IHZlYzIoLi4uY29tcG9uZW50cy5zbGljZSgwLCAyKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxuICovXG52ZWMyLnV4ID0gKCkgPT4gdmVjMigxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKi9cbnZlYzIudXkgPSAoKSA9PiB2ZWMyKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMnxudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMyfSBhICsgYlxuICovXG52ZWMyLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyAoYi54ID8/IGIpLCB5OiBhLnkgKyAoYi55ID8/IGIpIH0pO1xuXG4vKipcbiAqIEFkZCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBhZGRcbiAqIEByZXR1cm5zIHt2ZWMyfSBUaGUgc3VtIG9mIHRoZSB2ZWN0b3JzXG4gKi9cbnZlYzIuYWRkbSA9ICguLi52KSA9PiB2LnJlZHVjZSgoYSwgYikgPT4gdmVjMi5hZGQoYSwgYiksIHZlYzIoKSk7XG5cbi8qKlxuICogU3VidHJhY3QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJ8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSAtIGJcbiAqL1xudmVjMi5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gKGIueCA/PyBiKSwgeTogYS55IC0gKGIueSA/PyBiKSB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtdWx0aXBsZSB2ZWN0b3JzXG4gKiBAcGFyYW0gIHsuLi5hbnl9IHYgVmVjdG9ycyB0byBzdWJ0cmFjdFxuICogQHJldHVybnMge3ZlYzJ9IFRoZSByZXN1bHQgb2Ygc3VidHJhY3RpbmcgdGhlIHZlY3RvcnNcbiAqL1xudmVjMi5zdWJtID0gKC4uLnYpID0+IHYucmVkdWNlKChhLCBiKSA9PiB2ZWMyLnN1YihhLCBiKSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgKiBiXG4gKi9cbnZlYzIubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIChiLnggPz8gYiksIHk6IGEueSAqIChiLnkgPz8gYikgfSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3IgYnkgYSBzY2FsYXIsIGFsaWFzIGZvciB2ZWMyLm11bFxuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7dmVjMn0gYSAqIGJcbiAqL1xudmVjMi5zY2FsZSA9IChhLCBiKSA9PiB2ZWMyLm11bChhLCBiKTtcblxuLyoqXG4gKiBEaXZpZGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzJ9IGEgLyBiXG4gKi9cbnZlYzIuZGl2ID0gKGEsIGIpID0+ICh7IHg6IGEueCAvIChiLnggPz8gYiksIHk6IGEueSAvIChiLnkgPz8gYikgfSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMi5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjMi5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWMyfSBeYVxuICovXG52ZWMyLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjMi5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMyKCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjMi5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjMn0gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMyLnJvdCA9IChhLCByKSA9PiB7XG4gIGxldCBzID0gTWF0aC5zaW4ociksXG4gICAgYyA9IE1hdGguY29zKHIpO1xuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcbn07XG5cbi8qKlxuICogRmFzdCBtZXRob2QgdG8gcm90YXRlIGEgdmVjdG9yIGJ5IC05MCwgOTAgb3IgMTgwIGRlZ3JlZXNcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgMSBmb3IgOTAgZGVncmVlcyAoY3cpLCAtMSBmb3IgLTkwIGRlZ3JlZXMgKGNjdyksIDIgb3IgLTIgZm9yIDE4MCBkZWdyZWVzXG4gKiBAcmV0dXJuIHt2ZWMyfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzIucm90ZiA9IChhLCByKSA9PiB7XG4gIHN3aXRjaCAocikge1xuICAgIGNhc2UgMTogcmV0dXJuIHZlYzIoYS55LCAtYS54KTtcbiAgICBjYXNlIC0xOiByZXR1cm4gdmVjMigtYS55LCBhLngpO1xuICAgIGNhc2UgMjogY2FzZSAtMjogcmV0dXJuIHZlYzIoLWEueCwgLWEueSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIGE7XG4gIH1cbn07XG5cbi8qKlxuICogU2NhbGFyIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjMn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMyfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEgw5cgYlxuICovXG52ZWMyLmNyb3NzID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIGEueCAqIGIueSAtIGEueSAqIGIueDtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjMn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2ZWN0b3JzIGEgYW5kIGIgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xudmVjMi5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjMi5yYWQgPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLngpO1xuXG4vKipcbiAqIENvcHkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlYzJ9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMyLmNweSA9IGEgPT4gdmVjMihhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSAyZCB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWMyTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWMyfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzJNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMyfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYzIubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzIuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogU3dpenpsZSBhIHZlY3RvciB3aXRoIGEgc3RyaW5nIG9mIGNvbXBvbmVudCBsYWJlbHNcbiAqXG4gKiBUaGUgc3RyaW5nIGNhbiBjb250YWluOlxuICogLSBgeGAgb3IgYHlgXG4gKiAtIGB1YCBvciBgdmAgKGFsaWFzZXMgZm9yIGB4YCBhbmQgYHlgLCByZXNwZWN0aXZlbHkpXG4gKiAtIGBYYCwgYFlgLCBgVWAsIGBWYCAobmVnYXRlZCB2ZXJzaW9ucyBvZiB0aGUgYWJvdmUpXG4gKiAtIGAwYCBvciBgMWAgKHRoZXNlIHdpbGwgYmUgcGFzc2VkIHRocm91Z2ggdW5jaGFuZ2VkKVxuICogLSBgLmAgdG8gcmV0dXJuIHRoZSBjb21wb25lbnQgdGhhdCB3b3VsZCBub3JtYWxseSBiZSBhdCB0aGlzIHBvc2l0aW9uIChvciAwKVxuICpcbiAqIEFueSBvdGhlciBjaGFyYWN0ZXJzIHdpbGwgZGVmYXVsdCB0byAwXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgVGhlIHZlY3RvciB0byBzd2l6emxlXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9Jy4uJ10gVGhlIHN3aXp6bGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgc3dpenpsZWQgY29tcG9uZW50c1xuICogQGV4YW1wbGUgPGNhcHRpb24+c3dpenpsaW5nIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMyKDMsIC0yKTtcbiAqIHZlYzIuc3dpeihhLCAneCcpOyAgICAvLyBbM11cbiAqIHZlYzIuc3dpeihhLCAneXgnKTsgICAvLyBbLTIsIDNdXG4gKiB2ZWMyLnN3aXooYSwgJ3hZJyk7ICAgLy8gWzMsIDJdXG4gKiB2ZWMyLnN3aXooYSwgJ1l5Jyk7ICAgLy8gWzIsIC0yXVxuICogdmVjMi5zd2l6KGEsICd4LngnKTsgIC8vIFszLCAtMiwgM11cbiAqIHZlYzIuc3dpeihhLCAneTAxeCcpOyAvLyBbLTIsIDAsIDEsIDNdXG4gKi9cbnZlYzIuc3dpeiA9IChhLCBzID0gJy4uJykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgcy5zcGxpdCgnJykuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSAneCc6IGNhc2UgJ3UnOiByZXN1bHQucHVzaChhLngpOyBicmVhaztcbiAgICAgIGNhc2UgJ3knOiBjYXNlICd2JzogcmVzdWx0LnB1c2goYS55KTsgYnJlYWs7XG4gICAgICBjYXNlICdYJzogY2FzZSAnVSc6IHJlc3VsdC5wdXNoKC1hLngpOyBicmVhaztcbiAgICAgIGNhc2UgJ1knOiBjYXNlICdWJzogcmVzdWx0LnB1c2goLWEueSk7IGJyZWFrO1xuICAgICAgY2FzZSAnMCc6IHJlc3VsdC5wdXNoKDApOyBicmVhaztcbiAgICAgIGNhc2UgJzEnOiByZXN1bHQucHVzaCgxKTsgYnJlYWs7XG4gICAgICBjYXNlICcuJzogcmVzdWx0LnB1c2goW2EueCwgYS55XVtpXSA/PyAwKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiByZXN1bHQucHVzaCgwKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQb2xhciBjb29yZGluYXRlcyBmb3IgYSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHBvbGFyQ29vcmRpbmF0ZXMyZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHIgVGhlIG1hZ25pdHVkZSAocmFkaXVzKSBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGhldGEgVGhlIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBwb2xhciBjb29yZGluYXRlc1xuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHJldHVybiB7cG9sYXJDb29yZGluYXRlczJkfSBUaGUgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzIucG9sYXIgPSBhID0+ICh7IHI6IHZlYzIubGVuKGEpLCB0aGV0YTogTWF0aC5hdGFuMihhLnksIGEueCkgfSk7XG5cbi8qKlxuICogQ29udmVydCBwb2xhciBjb29yZGluYXRlcyBpbnRvIGEgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbWFnbml0dWRlIChyYWRpdXMpIG9mIHRoZSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGV0YSBUaGUgYW5nbGUgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjMn0gQSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gYW5nbGUgYW5kIG1hZ25pdHVkZVxuICovXG52ZWMyLmZyb21Qb2xhciA9IChyLCB0aGV0YSkgPT4gdmVjMihyICogTWF0aC5jb3ModGhldGEpLCByICogTWF0aC5zaW4odGhldGEpKTtcblxuLyoqXG4gKiBBIDNkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjM1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geiBUaGUgeiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIDNkIHZlY3RvclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgM2QgdmVjdG9yLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNWZWMzKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgJiZcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgJ3gnIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnggPT09ICdudW1iZXInICYmXG4gICAgJ3knIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnkgPT09ICdudW1iZXInICYmXG4gICAgJ3onIGluIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlLnogPT09ICdudW1iZXInXG4gICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IDNkIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ8dmVjM3x2ZWMyfSBbeF0gVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIGEgdmVjdG9yIHRvIGNvcHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIHRoZSB6IGNvbXBvbmVudCBpZiB4IGlzIGEgdmVjMlxuICogQHBhcmFtIHtudW1iZXJ9IFt6XSBUaGUgeiBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjM30gQSBuZXcgM2QgdmVjdG9yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj52YXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMygzLCAyLCAxKTsgICAgICAgLy8gKDMsIDIsIDEpXG4gKiBsZXQgYiA9IHZlYzMoNCwgNSk7ICAgICAgICAgIC8vICg0LCA1LCAwKVxuICogbGV0IGMgPSB2ZWMzKDYpOyAgICAgICAgICAgICAvLyAoNiwgNiwgNilcbiAqIGxldCBkID0gdmVjMyhhKTsgICAgICAgICAgICAgLy8gKDMsIDIsIDEpXG4gKiBsZXQgZSA9IHZlYzMoKTsgICAgICAgICAgICAgIC8vICgwLCAwLCAwKVxuICogbGV0IGYgPSB2ZWMzKHZlYzIoMSwgMiksIDMpOyAvLyAoMSwgMiwgMylcbiAqIGxldCBnID0gdmVjMyh2ZWMyKDQsIDUpKTsgICAgLy8gKDQsIDUsIDApXG4gKi9cbmNvbnN0IHZlYzMgPSAoeCwgeSwgeikgPT4ge1xuICBpZiAoIXggJiYgIXkgJiYgIXopIHtcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwLCB6OiAwIH07XG4gIH1cbiAgaWYgKF92ZWNfaXNfdmVjMyh4KSkge1xuICAgIHJldHVybiB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCwgejogeC56IHx8IDAgfTtcbiAgfVxuICBpZiAoX3ZlY19pc192ZWMyKHgpKSB7XG4gICAgcmV0dXJuIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwLCB6OiB5IHx8IDAgfTtcbiAgfVxuICByZXR1cm4geyB4OiB4LCB5OiB5ID8/IHgsIHo6IHogPz8geCB9O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMzLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueSwgYS56XTtcblxuLyoqXG4gKiBDcmVhdGUgYSB2ZWN0b3IgZnJvbSBhbiBhcnJheSBvZiBjb21wb25lbnRzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbXBvbmVudHMgVGhlIGNvbXBvbmVudHMgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjM30gQSBuZXcgdmVjdG9yXG4gKi9cbnZlYzMuZnJvbUNvbXBvbmVudHMgPSBjb21wb25lbnRzID0+IHZlYzMoLi4uY29tcG9uZW50cy5zbGljZSgwLCAzKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDAsIDApXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHVuaXQgdmVjdG9yICgxLCAwLCAwKVxuICovXG52ZWMzLnV4ID0gKCkgPT4gdmVjMygxLCAwLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSwgMClcbiAqIEByZXR1cm4ge3ZlYzN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEsIDApXG4gKi9cbnZlYzMudXkgPSAoKSA9PiB2ZWMzKDAsIDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAwLCAxKVxuICogQHJldHVybiB7dmVjM30gQSB1bml0IHZlY3RvciAoMCwgMCwgMSlcbiAqL1xudmVjMy51eiA9ICgpID0+IHZlYzMoMCwgMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfG51bWJlcn0gYiBWZWN0b3Igb3Igc2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlYzN9IGEgKyBiXG4gKi9cbnZlYzMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIChiLnggPz8gYiksIHk6IGEueSArIChiLnkgPz8gYiksIHo6IGEueiArIChiLnogPz8gYikgfSk7XG5cbi8qKlxuICogQWRkIG11bHRpcGxlIHZlY3RvcnNcbiAqIEBwYXJhbSAgey4uLmFueX0gdiBWZWN0b3JzIHRvIGFkZFxuICogQHJldHVybnMge3ZlYzN9IFRoZSBzdW0gb2YgdGhlIHZlY3RvcnNcbiAqL1xudmVjMy5hZGRtID0gKC4uLnYpID0+IHYucmVkdWNlKChhLCBiKSA9PiB2ZWMzLmFkZChhLCBiKSwgdmVjMygpKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM3xudW1iZXJ9IGIgVmVjdG9yIG9yIHNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhIC0gYlxuICovXG52ZWMzLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSAoYi54ID8/IGIpLCB5OiBhLnkgLSAoYi55ID8/IGIpLCB6OiBhLnogLSAoYi56ID8/IGIpIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG11bHRpcGxlIHZlY3RvcnNcbiAqIEBwYXJhbSAgey4uLmFueX0gdiBWZWN0b3JzIHRvIHN1YnRyYWN0XG4gKiBAcmV0dXJucyB7dmVjM30gVGhlIHJlc3VsdCBvZiBzdWJ0cmFjdGluZyB0aGUgdmVjdG9yc1xuICovXG52ZWMzLnN1Ym0gPSAoLi4udikgPT4gdi5yZWR1Y2UoKGEsIGIpID0+IHZlYzMuc3ViKGEsIGIpKTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAqIGJcbiAqL1xudmVjMy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogKGIueCA/PyBiKSwgeTogYS55ICogKGIueSA/PyBiKSwgejogYS56ICogKGIueiA/PyBiKSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvciBieSBhIHNjYWxhciwgYWxpYXMgZm9yIHZlYzMubXVsXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhICogYlxuICovXG52ZWMzLnNjYWxlID0gKGEsIGIpID0+IHZlYzMubXVsKGEsIGIpO1xuXG4vKipcbiAqIERpdmlkZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN8bnVtYmVyfSBiIFZlY3RvciBvciBzY2FsYXIgYlxuICogQHJldHVybiB7dmVjM30gYSAvIGJcbiAqL1xudmVjMy5kaXYgPSAoYSwgYikgPT4gKHsgeDogYS54IC8gKGIueCA/PyBiKSwgeTogYS55IC8gKGIueSA/PyBiKSwgejogYS56IC8gKGIueiA/PyBiKSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMzLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueik7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMzLm1hbmhhdHRhbiA9IGEgPT4gTWF0aC5hYnMoYS54KSArIE1hdGguYWJzKGEueSkgKyBNYXRoLmFicyhhLnopO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWMzfSBeYVxuICovXG52ZWMzLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjMy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuLCB6OiBhLnogLyBsZW4gfSA6IHZlYzMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMzLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIHVzaW5nIGEgcm90YXRpb24gbWF0cml4XG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bWF0fSBtIFRoZSByb3RhdGlvbiBtYXRyaXhcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3QgPSAoYSwgbSkgPT4gdmVjMyhcbiAgdmVjMy5kb3QodmVjMy5mcm9tQ29tcG9uZW50cyhtYXQucm93KG0sIDEpKSwgYSksXG4gIHZlYzMuZG90KHZlYzMuZnJvbUNvbXBvbmVudHMobWF0LnJvdyhtLCAyKSksIGEpLFxuICB2ZWMzLmRvdCh2ZWMzLmZyb21Db21wb25lbnRzKG1hdC5yb3cobSwgMykpLCBhKVxuKTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zIGFyb3VuZCB0aGUgeCBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3R4ID0gKGEsIHIpID0+IHZlYzMoXG4gIGEueCxcbiAgYS55ICogTWF0aC5jb3MocikgLSBhLnogKiBNYXRoLnNpbihyKSxcbiAgYS55ICogTWF0aC5zaW4ocikgKyBhLnogKiBNYXRoLmNvcyhyKVxuKTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zIGFyb3VuZCB0aGUgeSBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3R5ID0gKGEsIHIpID0+IHZlYzMoXG4gIGEueCAqIE1hdGguY29zKHIpICsgYS56ICogTWF0aC5zaW4ociksXG4gIGEueSxcbiAgLWEueCAqIE1hdGguc2luKHIpICsgYS56ICogTWF0aC5jb3Mocilcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFucyBhcm91bmQgdGhlIHogYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90eiA9IChhLCByKSA9PiB2ZWMzKFxuICBhLnggKiBNYXRoLmNvcyhyKSAtIGEueSAqIE1hdGguc2luKHIpLFxuICBhLnggKiBNYXRoLnNpbihyKSArIGEueSAqIE1hdGguY29zKHIpLFxuICBhLnpcbik7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIHVzaW5nIGEgcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHEgVGhlIHF1YXRlcm5pb24gdG8gcm90YXRlIGJ5XG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYzMucm90cSA9ICh2LCBxKSA9PiB7XG4gIGlmIChxLmxlbmd0aCAhPT0gNCkge1xuICAgIHJldHVybiB2ZWMzKCk7XG4gIH1cblxuICBjb25zdCBkID0gTWF0aC5zcXJ0KHFbMF0gKiBxWzBdICsgcVsxXSAqIHFbMV0gKyBxWzJdICogcVsyXSArIHFbM10gKiBxWzNdKTtcbiAgaWYgKGQgPT09IDApIHtcbiAgICByZXR1cm4gdmVjMygpO1xuICB9XG5cbiAgY29uc3QgdXEgPSBbcVswXSAvIGQsIHFbMV0gLyBkLCBxWzJdIC8gZCwgcVszXSAvIGRdO1xuICBjb25zdCB1ID0gdmVjMyguLi51cS5zbGljZSgwLCAzKSk7XG4gIGNvbnN0IHMgPSB1cVszXTtcbiAgcmV0dXJuIHZlYzMuYWRkKFxuICAgIHZlYzMuYWRkKFxuICAgICAgdmVjMy5tdWwodSwgMiAqIHZlYzMuZG90KHUsIHYpKSxcbiAgICAgIHZlYzMubXVsKHYsIHMgKiBzIC0gdmVjMy5kb3QodSwgdSkpXG4gICAgKSxcbiAgICB2ZWMzLm11bCh2ZWMzLmNyb3NzKHUsIHYpLCAyICogcylcbiAgKTtcbn07XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIHVzaW5nIEV1bGVyIGFuZ2xlc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGUgVGhlIEV1bGVyIGFuZ2xlcyB0byByb3RhdGUgYnlcbiAqIEByZXR1cm4ge3ZlYzN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjMy5yb3RhID0gKGEsIGUpID0+IHZlYzMucm90eih2ZWMzLnJvdHkodmVjMy5yb3R4KGEsIGUueCksIGUueSksIGUueik7XG5cbi8qKlxuICogR2V0IHRoZSBjcm9zcyBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWMzfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWMzfSBhIMOXIGJcbiAqL1xudmVjMy5jcm9zcyA9IChhLCBiKSA9PiB2ZWMzKFxuICBhLnkgKiBiLnogLSBhLnogKiBiLnksXG4gIGEueiAqIGIueCAtIGEueCAqIGIueixcbiAgYS54ICogYi55IC0gYS55ICogYi54XG4pO1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYzMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnkgJiYgYS56ID09PSBiLno7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvciBmcm9tIHRoZSB4IGF4aXNcbiAqIEBwYXJhbSB7dmVjM30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMzLnJhZHggPSBhID0+IE1hdGguYXRhbjIoYS56LCBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IgZnJvbSB0aGUgeSBheGlzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjMy5yYWR5ID0gYSA9PiBNYXRoLmF0YW4yKGEueCwgYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yIGZyb20gdGhlIHogYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYzMucmFkeiA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueik7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWN0b3IgdG8gY29weVxuICogQHJldHVybiB7dmVjM30gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYzMuY3B5ID0gYSA9PiB2ZWMzKGEpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIDNkIHZlY3RvclxuICogQGNhbGxiYWNrIHZlYzNNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knIHwgJ3onfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4LCB5IG9yIHopXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjM01hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlYzN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjMy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpLCB6OiBmKGEueiwgJ3onKSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fSR7c30ke2Euen1gO1xuXG4vKipcbiAqIFN3aXp6bGUgYSB2ZWN0b3Igd2l0aCBhIHN0cmluZyBvZiBjb21wb25lbnQgbGFiZWxzXG4gKlxuICogVGhlIHN0cmluZyBjYW4gY29udGFpbjpcbiAqIC0gYHhgLCBgeWAgb3IgYHpgXG4gKiAtIGB1YCwgYHZgIG9yIGB3YCAoYWxpYXNlcyBmb3IgYHhgLCBgeWAgYW5kIGB6YCwgcmVzcGVjdGl2ZWx5KVxuICogLSBgcmAsIGBnYCBvciBgYmAgKGFsaWFzZXMgZm9yIGB4YCwgYHlgIGFuZCBgemAsIHJlc3BlY3RpdmVseSlcbiAqIC0gYFhgLCBgWWAsIGBaYCwgYFVgLCBgVmAsIGBXYCwgYFJgLCBgR2AsIGBCYCAobmVnYXRlZCB2ZXJzaW9ucyBvZiB0aGUgYWJvdmUpXG4gKiAtIGAwYCBvciBgMWAgKHRoZXNlIHdpbGwgYmUgcGFzc2VkIHRocm91Z2ggdW5jaGFuZ2VkKVxuICogLSBgLmAgdG8gcmV0dXJuIHRoZSBjb21wb25lbnQgdGhhdCB3b3VsZCBub3JtYWxseSBiZSBhdCB0aGlzIHBvc2l0aW9uIChvciAwKVxuICpcbiAqIEFueSBvdGhlciBjaGFyYWN0ZXJzIHdpbGwgZGVmYXVsdCB0byAwXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBzd2l6emxlXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9Jy4uLiddIFRoZSBzd2l6emxlIHN0cmluZ1xuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHN3aXp6bGVkIGNvbXBvbmVudHNcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnN3aXp6bGluZyBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjMygzLCAtMiwgMSk7XG4gKiB2ZWMzLnN3aXooYSwgJ3gnKTsgICAgIC8vIFszXVxuICogdmVjMy5zd2l6KGEsICd6eXgnKTsgICAvLyBbMSwgLTIsIDNdXG4gKiB2ZWMzLnN3aXooYSwgJ3hZWicpOyAgIC8vIFszLCAyLCAtMV1cbiAqIHZlYzMuc3dpeihhLCAnWnp4Jyk7ICAgLy8gWy0xLCAxLCAzXVxuICogdmVjMy5zd2l6KGEsICd4LngnKTsgICAvLyBbMywgLTIsIDNdXG4gKiB2ZWMzLnN3aXooYSwgJ3kwMXp4Jyk7IC8vIFstMiwgMCwgMSwgMSwgM11cbiAqL1xudmVjMy5zd2l6ID0gKGEsIHMgPSAnLi4uJykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgcy5zcGxpdCgnJykuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSAneCc6IGNhc2UgJ3UnOiBjYXNlICdyJzogcmVzdWx0LnB1c2goYS54KTsgYnJlYWs7XG4gICAgICBjYXNlICd5JzogY2FzZSAndic6IGNhc2UgJ2cnOiByZXN1bHQucHVzaChhLnkpOyBicmVhaztcbiAgICAgIGNhc2UgJ3onOiBjYXNlICd3JzogY2FzZSAnYic6IHJlc3VsdC5wdXNoKGEueik7IGJyZWFrO1xuICAgICAgY2FzZSAnWCc6IGNhc2UgJ1UnOiBjYXNlICdSJzogcmVzdWx0LnB1c2goLWEueCk7IGJyZWFrO1xuICAgICAgY2FzZSAnWSc6IGNhc2UgJ1YnOiBjYXNlICdHJzogcmVzdWx0LnB1c2goLWEueSk7IGJyZWFrO1xuICAgICAgY2FzZSAnWic6IGNhc2UgJ1cnOiBjYXNlICdCJzogcmVzdWx0LnB1c2goLWEueik7IGJyZWFrO1xuICAgICAgY2FzZSAnMCc6IHJlc3VsdC5wdXNoKDApOyBicmVhaztcbiAgICAgIGNhc2UgJzEnOiByZXN1bHQucHVzaCgxKTsgYnJlYWs7XG4gICAgICBjYXNlICcuJzogcmVzdWx0LnB1c2goW2EueCwgYS55LCBhLnpdW2ldID8/IDApOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHJlc3VsdC5wdXNoKDApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBvbGFyIGNvb3JkaW5hdGVzIGZvciBhIDNkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gcG9sYXJDb29yZGluYXRlczNkXG4gKiBAcHJvcGVydHkge251bWJlcn0gciBUaGUgbWFnbml0dWRlIChyYWRpdXMpIG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aGV0YSBUaGUgdGlsdCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gcGhpIFRoZSBwYW4gYW5nbGUgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIHBvbGFyIGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcmV0dXJuIHtwb2xhckNvb3JkaW5hdGVzM2R9IFRoZSBtYWduaXR1ZGUsIHRpbHQgYW5kIHBhbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYzMucG9sYXIgPSBhID0+IHtcbiAgbGV0IHIgPSB2ZWMzLmxlbihhKSxcbiAgICB0aGV0YSA9IE1hdGguYWNvcyhhLnkgLyByKSxcbiAgICBwaGkgPSBNYXRoLmF0YW4yKGEueiwgYS54KTtcbiAgcmV0dXJuIHsgciwgdGhldGEsIHBoaSB9O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHBvbGFyIGNvb3JkaW5hdGVzIGludG8gYSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBtYWduaXR1ZGUgKHJhZGl1cykgb2YgdGhlIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IHRoZXRhIFRoZSB0aWx0IG9mIHRoZSB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfSBwaGkgVGhlIHBhbiBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWMzfSBBIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBhbmdsZSBhbmQgbWFnbml0dWRlXG4gKi9cbnZlYzMuZnJvbVBvbGFyID0gKHIsIHRoZXRhLCBwaGkpID0+IHtcbiAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSk7XG4gIHJldHVybiB2ZWMzKFxuICAgIHIgKiBzaW5UaGV0YSAqIE1hdGguY29zKHBoaSksXG4gICAgciAqIE1hdGguY29zKHRoZXRhKSxcbiAgICByICogc2luVGhldGEgKiBNYXRoLnNpbihwaGkpXG4gICk7XG59O1xuXG4vKipcbiAqIEEgbWF0cml4XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtIFRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbWF0cml4XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBtYXRyaXgsIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc01hdCh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlICYmXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICdtJyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS5tID09PSAnbnVtYmVyJyAmJlxuICAgICduJyBpbiB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZS5uID09PSAnbnVtYmVyJyAmJlxuICAgICdlbnRyaWVzJyBpbiB2YWx1ZSAmJlxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUuZW50cmllcylcbiAgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gW209NF0gVGhlIG51bWJlciBvZiByb3dzXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtlbnRyaWVzPVtdXSBNYXRyaXggdmFsdWVzIGluIHJlYWRpbmcgb3JkZXJcbiAqIEByZXR1cm4ge21hdH0gQSBuZXcgbWF0cml4XG4gKi9cbmNvbnN0IG1hdCA9IChtID0gNCwgbiA9IDQsIGVudHJpZXMgPSBbXSkgPT4gKHtcbiAgbSwgbixcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxufSk7XG5cbi8qKlxuICogR2V0IGFuIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XG4gKi9cbm1hdC5pZGVudGl0eSA9IG4gPT4gbWF0KG4sIG4sIEFycmF5KG4gKiBuKS5maWxsKDApLm1hcCgodiwgaSkgPT4gKyhNYXRoLmZsb29yKGkgLyBuKSA9PT0gaSAlIG4pKSk7XG5cbi8qKlxuICogR2V0IGFuIGVudHJ5IGZyb20gYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxuICovXG5tYXQuZ2V0ID0gKGEsIGksIGopID0+IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl07XG5cbi8qKlxuICogU2V0IGFuIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXG4gKi9cbm1hdC5zZXQgPSAoYSwgaSwgaiwgdikgPT4geyBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dID0gdjsgfTtcblxuLyoqXG4gKiBHZXQgYSByb3cgZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSByb3cgb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBSb3cgbSBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5yb3cgPSAoYSwgbSkgPT4ge1xuICBjb25zdCBzID0gKG0gLSAxKSAqIGEubjtcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY29sdW1uIGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQ29sdW1uIG4gZnJvbSBtYXRyaXggYVxuICovXG5tYXQuY29sID0gKGEsIG4pID0+IF92ZWNfdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpY2VzIGNhbm5vdCBiZSBtdWx0aXBsaWVkXG4gKi9cbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYS5uICE9PSBiLm0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IHJlc3VsdCA9IG1hdChhLm0sIGIubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYi5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQocmVzdWx0LCBpLCBqLCBfdmVjX2RvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIE11bHRpcGx5IGEgbWF0cml4IGJ5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHt2ZWMyfHZlYzN8bnVtYmVyW119IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlYzJ8dmVjM3xudW1iZXJbXXxmYWxzZX0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBhbmQgdmVjdG9yIGNhbm5vdCBiZSBtdWx0aXBsaWVkXG4gKi9cbm1hdC5tdWx2ID0gKGEsIGIpID0+IHtcbiAgbGV0IG4sIGJiLCBydDtcbiAgaWYgKF92ZWNfaXNfdmVjMyhiKSkge1xuICAgIGJiID0gdmVjMy5jb21wb25lbnRzKGIpO1xuICAgIG4gPSAzO1xuICAgIHJ0ID0gdmVjMy5mcm9tQ29tcG9uZW50cztcbiAgfSBlbHNlIGlmIChfdmVjX2lzX3ZlYzIoYikpIHtcbiAgICBiYiA9IHZlYzIuY29tcG9uZW50cyhiKTtcbiAgICBuID0gMjtcbiAgICBydCA9IHZlYzIuZnJvbUNvbXBvbmVudHM7XG4gIH0gZWxzZSB7XG4gICAgYmIgPSBiO1xuICAgIG4gPSBiLmxlbmd0aCA/PyAwO1xuICAgIHJ0ID0gdiA9PiB2O1xuICB9XG4gIGlmIChhLm4gIT09IG4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKF92ZWNfZG90KG1hdC5yb3coYSwgaSksIGJiKSk7XG4gIH1cbiAgcmV0dXJuIHJ0KHJlc3VsdCk7XG59XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIF92ZWNfdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bWF0fGZhbHNlfSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxmYWxzZX0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQuZGV0ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGEubSA9PT0gMSkge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF07XG4gIH1cbiAgaWYgKGEubSA9PT0gMikge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XG4gIH1cbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XG4gICAgc2lnbiAqPSAtMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59O1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gXmEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5ub3IgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgYWRqdWdhdGUgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggZnJvbSB3aGljaCB0byBnZXQgdGhlIGFkanVnYXRlXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXG4gKi9cbm1hdC5hZGogPSBhID0+IHtcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xuICByZXR1cm4gbWF0LnRyYW5zKGNvZmFjdG9ycyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm4ge21hdHxmYWxzZX0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBfdmVjX2NodW5rKGEuZW50cmllcywgYS5uKS5tYXAociA9PiByLmpvaW4obXMpKS5qb2luKG5zKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMyLCB2ZWMzLCBtYXQsIGlzVmVjMiwgaXNWZWMzLCBpc01hdCB9O1xufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBTY2VuZUltYWdlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgY29weVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9jb3B5LmZyYWcuZ2xzbCcpO1xuaW1wb3J0IHF1YWRTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvcXVhZC52ZXJ0Lmdsc2wnKTtcblxuZXhwb3J0IHR5cGUgR2xQcm9ncmFtID0ge1xuICBwcm9ncmFtOiBXZWJHTFByb2dyYW07XG4gIHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbj47XG59O1xuXG5leHBvcnQgdHlwZSBHbFJlbmRlclRhcmdldCA9IHtcbiAgdGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBmcmFtZWJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlcjtcbiAgc2l6ZTogdmVjMjtcbn07XG5cbi8qKlxuICogQSBXZWJHTCBjb250ZXh0IHRoYXQgY2FuIGJlIHNoYXJlZCBieSBhbnl0aGluZyByZW5kZXJpbmcgcGFydCBvZiBhIHNjZW5lXG4gKlxuICogVGV4dHVyZXMgY2FuJ3QgYmUgc2hhcmVkIGJldHdlZW4gY29udGV4dHMsIHNvIHNoYXJpbmcgYSBjb250ZXh0IG1lYW5zIHRoYXRcbiAqIHRoZSBvdXRwdXQgb2Ygb25lIHBhc3MgY2FuIGJlIHVzZWQgYnkgYW5vdGhlciB3aXRob3V0IGNvcHlpbmcgaXQgdGhyb3VnaCBhXG4gKiBjYW52YXMuXG4gKlxuICogRXZlcnl0aGluZyBpbiB0aGUgY29udGV4dCBpcyBsb3N0IHdoZW4gdGhlIGNvbnRleHQgaXMgbG9zdCwgc28gYW55dGhpbmcgdXNpbmdcbiAqIHRoaXMgc2hvdWxkIGNyZWF0ZSBpdHMgcHJvZ3JhbXMgYW5kIHRleHR1cmVzIGluIGFuIGBvbkluaXRpYWxpc2UoKWAgY2FsbGJhY2suXG4gKiBUaGUgbWV0aG9kcyBoZXJlIHNob3VsZCBvbmx5IGJlIHVzZWQgZnJvbSB0aGF0IGNhbGxiYWNrLCBvciB3aGlsZSBgYXZhaWxhYmxlYFxuICogaXMgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgR2xDb250ZXh0IHtcbiAgLyoqXG4gICAqIFRoZSB0ZXh0dXJlIHVuaXQgdXNlZCBmb3IgaW1hZ2VzIHRoYXQgYXJlIG9ubHkgbmVlZGVkIGZvciBhIHNpbmdsZSBkcmF3XG4gICAqXG4gICAqIFdlYkdMIGd1YXJhbnRlZXMgOCB0ZXh0dXJlIHVuaXRzLCB0aGlzIGlzIHRoZSBsYXN0IG9mIHRoZW1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU1BR0VfVU5JVCA9IDc7XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgb2YgdGhlIG1vc3QgcmVjZW50IHBhc3NcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICBwdWJsaWMgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgY29weVByb2dyYW06IEdsUHJvZ3JhbTtcblxuICBwcml2YXRlIGluaXRpYWxpc2VDYWxsYmFja3M6ICgoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbWFnZXMgb25seSBuZWVkIHRvIGJlIHVwbG9hZGVkIG9uY2UsIGJ1dCBjYW52YXNlcyBtaWdodCBjaGFuZ2VcbiAgICovXG4gIHByaXZhdGUgaW1hZ2VUZXh0dXJlcyA9IG5ldyBXZWFrTWFwPFNjZW5lSW1hZ2UsIFdlYkdMVGV4dHVyZT4oKTtcbiAgcHJpdmF0ZSB1cGxvYWRlZENhbnZhc2VzID0gbmV3IFNldDxTY2VuZUltYWdlPigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3ZWJnbGNvbnRleHRsb3N0JywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dHJlc3RvcmVkJywgKCkgPT5cbiAgICAgIHRoaXMuaW5pdGlhbGlzZSgpXG4gICAgKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBjb250ZXh0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nbCAhPT0gbnVsbCAmJiAhdGhpcy5nbC5pc0NvbnRleHRMb3N0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB0aGF0IHNldHMgdXAgcHJvZ3JhbXMgYW5kIHRleHR1cmVzXG4gICAqXG4gICAqIFRoaXMgaXMgY2FsbGVkIHN0cmFpZ2h0IGF3YXkgaWYgdGhlIGNvbnRleHQgaXMgcmVhZHksIGFuZCBhZ2FpbiB3aGVuZXZlclxuICAgKiB0aGUgY29udGV4dCBpcyByZXN0b3JlZFxuICAgKi9cbiAgcHVibGljIG9uSW5pdGlhbGlzZShjYWxsYmFjazogKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpID0+IHZvaWQpIHtcbiAgICB0aGlzLmluaXRpYWxpc2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cbiAgICBpZiAodGhpcy5nbCkge1xuICAgICAgY2FsbGJhY2sodGhpcy5nbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuZ2wgPSBudWxsO1xuXG4gICAgY29uc3QgZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIHtcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcbiAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICBkZXB0aDogZmFsc2UsXG4gICAgICBzdGVuY2lsOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAoIWdsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dlYkdMIGlzIG5vdCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdsID0gZ2w7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5jb3B5UHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbShjb3B5U2hhZGVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXZWJHTCBoYXMgYmVlbiBkaXNhYmxlZCcsIGUpO1xuICAgICAgdGhpcy5nbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZVRleHR1cmVzID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBnbC5jcmVhdGVCdWZmZXIoKSk7XG4gICAgZ2wuYnVmZmVyRGF0YShcbiAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDEsIDAsIDAsIDEsIDEsIDFdKSxcbiAgICAgIGdsLlNUQVRJQ19EUkFXXG4gICAgKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0NPTE9SU1BBQ0VfQ09OVkVSU0lPTl9XRUJHTCwgZ2wuTk9ORSk7XG5cbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLmhlaWdodCA9IDA7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhnbCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21waWxlU2hhZGVyKHR5cGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcpOiBXZWJHTFNoYWRlciB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSkhO1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgaWYgKFxuICAgICAgIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSAmJlxuICAgICAgIWdsLmlzQ29udGV4dExvc3QoKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSA/PyAnVW5hYmxlIHRvIGNvbXBpbGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHByb2dyYW0gZnJvbSBhIGZyYWdtZW50IHNoYWRlciwgdGhpcyB3aWxsIHVzZSB0aGUgcXVhZCB2ZXJ0ZXhcbiAgICogc2hhZGVyIHNvIGl0IGNhbiBiZSBkcmF3biB3aXRoIGBkcmF3UXVhZCgpYFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVByb2dyYW0oZnJhZ21lbnRTb3VyY2U6IHN0cmluZyk6IEdsUHJvZ3JhbSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpITtcblxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB0aGlzLmNvbXBpbGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUiwgcXVhZFNoYWRlcikpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihcbiAgICAgIHByb2dyYW0sXG4gICAgICB0aGlzLmNvbXBpbGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNvdXJjZSlcbiAgICApO1xuICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAwLCAnYV9jb3JuZXInKTtcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGlmIChcbiAgICAgICFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSAmJlxuICAgICAgIWdsLmlzQ29udGV4dExvc3QoKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pID8/ICdVbmFibGUgdG8gbGluaycpO1xuICAgIH1cblxuICAgIGNvbnN0IHVuaWZvcm1zOiBHbFByb2dyYW1bJ3VuaWZvcm1zJ10gPSB7fTtcbiAgICBjb25zdCBjb3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKSE7XG4gICAgICB1bmlmb3Jtc1tuYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvZ3JhbSwgdW5pZm9ybXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0ZXh0dXJlIHRoYXQgY2FuIGJlIHJlbmRlcmVkIGludG8sIHRoaXMgd2lsbCBuZWVkIHRvIGJlIGdpdmVuIGFcbiAgICogc2l6ZSB1c2luZyBgcmVzaXplVGFyZ2V0KClgXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUmVuZGVyVGFyZ2V0KCk6IEdsUmVuZGVyVGFyZ2V0IHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHR1cmU6IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBmcmFtZWJ1ZmZlcjogZ2wuY3JlYXRlRnJhbWVidWZmZXIoKSEsXG4gICAgICBzaXplOiB2ZWMyKCksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEgdGV4dHVyZSBhbmQgc2V0IGl0cyBmaWx0ZXJpbmdcbiAgICpcbiAgICogVGV4dHVyZXMgY2FuIG9ubHkgcmVwZWF0IGlmIHRoZWlyIHNpemUgaXMgYSBwb3dlciBvZiAyXG4gICAqL1xuICBwdWJsaWMgYmluZFRleHR1cmUoXG4gICAgdW5pdDogbnVtYmVyLFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBmaWx0ZXI6IG51bWJlcixcbiAgICByZXBlYXQ6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuICAgIGNvbnN0IHdyYXAgPSByZXBlYXQgPyBnbC5SRVBFQVQgOiBnbC5DTEFNUF9UT19FREdFO1xuXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHVuaXQpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBmaWx0ZXIpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBmaWx0ZXIpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIHdyYXApO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIHdyYXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIGEgdGV4dHVyZSB3aXRoIGFuIGltYWdlXG4gICAqL1xuICBwdWJsaWMgdXBsb2FkKFxuICAgIHVuaXQ6IG51bWJlcixcbiAgICB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsXG4gICAgaW1hZ2U6IFNjZW5lSW1hZ2UsXG4gICAgZmlsdGVyOiBudW1iZXIsXG4gICAgcmVwZWF0OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIHRoaXMuYmluZFRleHR1cmUodW5pdCwgdGV4dHVyZSwgZmlsdGVyLCByZXBlYXQpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIGEgdGV4dHVyZSB3aXRoIFJHQkEgcGl4ZWwgZGF0YVxuICAgKi9cbiAgcHVibGljIHVwbG9hZERhdGEoXG4gICAgdW5pdDogbnVtYmVyLFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBzaXplOiB2ZWMyLFxuICAgIGRhdGE6IFVpbnQ4QXJyYXksXG4gICAgZmlsdGVyOiBudW1iZXIsXG4gICAgcmVwZWF0OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIHRoaXMuYmluZFRleHR1cmUodW5pdCwgdGV4dHVyZSwgZmlsdGVyLCByZXBlYXQpO1xuICAgIGdsLnRleEltYWdlMkQoXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBzaXplLngsXG4gICAgICBzaXplLnksXG4gICAgICAwLFxuICAgICAgZ2wuUkdCQSxcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGFuIGltYWdlIHRvIGBJTUFHRV9VTklUYCwgdXBsb2FkaW5nIGl0IGlmIHdlIGhhdmVuJ3Qgc2VlbiBpdCBiZWZvcmVcbiAgICovXG4gIHB1YmxpYyBiaW5kSW1hZ2UoaW1hZ2U6IFNjZW5lSW1hZ2UsIGZpbHRlcjogbnVtYmVyKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIGxldCB0ZXh0dXJlID0gdGhpcy5pbWFnZVRleHR1cmVzLmdldChpbWFnZSk7XG4gICAgY29uc3QgaXNOZXcgPSB0ZXh0dXJlID09PSB1bmRlZmluZWQ7XG4gICAgaWYgKCF0ZXh0dXJlKSB7XG4gICAgICB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpITtcbiAgICAgIHRoaXMuaW1hZ2VUZXh0dXJlcy5zZXQoaW1hZ2UsIHRleHR1cmUpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZFRleHR1cmUoR2xDb250ZXh0LklNQUdFX1VOSVQsIHRleHR1cmUsIGZpbHRlcik7XG5cbiAgICBjb25zdCBpc1N0YWxlID1cbiAgICAgIGltYWdlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgJiYgIXRoaXMudXBsb2FkZWRDYW52YXNlcy5oYXMoaW1hZ2UpO1xuICAgIGlmIChpc05ldyB8fCBpc1N0YWxlKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgICAwLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5SR0JBLFxuICAgICAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICBpbWFnZVxuICAgICAgKTtcbiAgICAgIHRoaXMudXBsb2FkZWRDYW52YXNlcy5hZGQoaW1hZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYW52YXNlcyBtaWdodCBoYXZlIGNoYW5nZWQgc2luY2UgdGhleSB3ZXJlIGxhc3QgdXNlZCwgc28gYGJpbmRJbWFnZSgpYFxuICAgKiBzaG91bGQgdXBsb2FkIHRoZW0gYWdhaW5cbiAgICovXG4gIHB1YmxpYyBpbnZhbGlkYXRlQ2FudmFzZXMoKSB7XG4gICAgdGhpcy51cGxvYWRlZENhbnZhc2VzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzaXplIG9mIGEgdGV4dHVyZSB0aGF0IHdlJ3JlIHJlbmRlcmluZyBpbnRvXG4gICAqL1xuICBwdWJsaWMgcmVzaXplVGFyZ2V0KHRhcmdldDogR2xSZW5kZXJUYXJnZXQsIHNpemU6IHZlYzIpIHtcbiAgICBpZiAodGFyZ2V0LnNpemUueCA9PT0gc2l6ZS54ICYmIHRhcmdldC5zaXplLnkgPT09IHNpemUueSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdsID0gdGhpcy5nbCE7XG5cbiAgICB0YXJnZXQuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZShHbENvbnRleHQuSU1BR0VfVU5JVCwgdGFyZ2V0LnRleHR1cmUsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnRleEltYWdlMkQoXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgMCxcbiAgICAgIGdsLlJHQkEsXG4gICAgICBzaXplLngsXG4gICAgICBzaXplLnksXG4gICAgICAwLFxuICAgICAgZ2wuUkdCQSxcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICBudWxsXG4gICAgKTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChcbiAgICAgIGdsLkZSQU1FQlVGRkVSLFxuICAgICAgZ2wuQ09MT1JfQVRUQUNITUVOVDAsXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgdGFyZ2V0LnRleHR1cmUsXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhlIG91dHB1dCBtYXRjaGVzIHRoZSBzY3JlZW4gc2l6ZVxuICAgKi9cbiAgcHVibGljIHJlc2l6ZShzY3JlZW46IHZlYzIpIHtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggPT09IHNjcmVlbi54ICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gc2NyZWVuLnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHNjcmVlbi54O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHNjcmVlbi55O1xuICAgIHRoaXMuZ2whLnZpZXdwb3J0KDAsIDAsIHNjcmVlbi54LCBzY3JlZW4ueSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIHF1YWQgY292ZXJpbmcgcGFydCBvZiB0aGUgc2NyZWVuXG4gICAqL1xuICBwdWJsaWMgZHJhd1F1YWQoXG4gICAgeyB1bmlmb3JtcyB9OiBHbFByb2dyYW0sXG4gICAgc2NyZWVuUmVjdGFuZ2xlOiBudW1iZXJbXSxcbiAgICB3b3JsZFJlY3RhbmdsZTogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF0sXG4gICAgbWFza1JlY3RhbmdsZTogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF1cbiAgKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsITtcblxuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV9zY3JlZW5SZWN0YW5nbGUsIHNjcmVlblJlY3RhbmdsZSk7XG4gICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X3dvcmxkUmVjdGFuZ2xlLCB3b3JsZFJlY3RhbmdsZSk7XG4gICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X21hc2tSZWN0YW5nbGUsIG1hc2tSZWN0YW5nbGUpO1xuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSB0ZXh0dXJlIG92ZXIgdGhlIHdob2xlIHNjcmVlbiwgcmVwbGFjaW5nIHdoYXQncyBhbHJlYWR5IHRoZXJlXG4gICAqL1xuICBwdWJsaWMgZHJhd1RleHR1cmUodGV4dHVyZTogV2ViR0xUZXh0dXJlLCBzY3JlZW46IHZlYzIpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2whO1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvcHlQcm9ncmFtO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0ucHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKHByb2dyYW0udW5pZm9ybXMudV9zY3JlZW4sIHNjcmVlbi54LCBzY3JlZW4ueSk7XG4gICAgZ2wudW5pZm9ybTFmKHByb2dyYW0udW5pZm9ybXMudV9mbGlwWSwgMSk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlKEdsQ29udGV4dC5JTUFHRV9VTklULCB0ZXh0dXJlLCBnbC5ORUFSRVNUKTtcbiAgICBnbC51bmlmb3JtMWkocHJvZ3JhbS51bmlmb3Jtcy51X2ltYWdlLCBHbENvbnRleHQuSU1BR0VfVU5JVCk7XG5cbiAgICB0aGlzLmRyYXdRdWFkKHByb2dyYW0sIFswLCAwLCBzY3JlZW4ueCwgc2NyZWVuLnldKTtcblxuICAgIC8vIEEgdGV4dHVyZSBjYW4ndCBzdGF5IGJvdW5kIHdoaWxlIHdlJ3JlIHJlbmRlcmluZyBpbnRvIGl0XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEdsQ29udGV4dCB9IGZyb20gJy4vR2xDb250ZXh0JztcbmV4cG9ydCB0eXBlIHsgR2xQcm9ncmFtLCBHbFJlbmRlclRhcmdldCB9IGZyb20gJy4vR2xDb250ZXh0JztcbmV4cG9ydCB0eXBlIHtcbiAgQ29sb3VyLFxuICBGcmFtZSxcbiAgSW50ZXJ2YWwxZCxcbiAgSW50ZXJ2YWwyZCxcbiAgUmVjdGFuZ2xlLFxuICBTY2VuZUNhbWVyYSxcbiAgU2NlbmVJbWFnZSxcbn0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQge1xuICBib3VuZGluZ1JlY3RhbmdsZSxcbiAgY29sb3VyVG9TdHJpbmcsXG4gIGRyYXdJbWFnZUluUmVjdGFuZ2xlLFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICBsZXJwQ29sb3VyLFxuICBtYXhWZWMsXG4gIG1pblZlYyxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbiAgcmVjdGFuZ2xlVG9JbnRlcnZhbCxcbiAgcmVjdGFuZ2xlVmVydGljZXMsXG4gIHNwcml0ZUJvdW5kcyxcbn0gZnJvbSAnLi91dGlsaXRpZXMnO1xuIiwiaW1wb3J0IHR5cGUgeyBTcHJpdGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zcHJpdGUnO1xuaW1wb3J0IHsgbGVycCB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgQ29sb3VyLCBJbnRlcnZhbDJkLCBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBHZXQgdGhlIG1pbmltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWluVmVjKC4uLnZlY3RvcnM6IHZlYzJbXSk6IHZlYzIge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1pbiwgdikgPT4gdmVjMihNYXRoLm1pbihtaW4ueCwgdi54KSwgTWF0aC5taW4obWluLnksIHYueSkpLFxuICAgIHZlYzIoSW5maW5pdHksIEluZmluaXR5KVxuICApO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbWF4aW11bSBvZiBhIHNldCBvZiB2ZWN0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhWZWMoLi4udmVjdG9yczogdmVjMltdKTogdmVjMiB7XG4gIHJldHVybiB2ZWN0b3JzLnJlZHVjZShcbiAgICAobWF4LCB2KSA9PiB2ZWMyKE1hdGgubWF4KG1heC54LCB2LngpLCBNYXRoLm1heChtYXgueSwgdi55KSksXG4gICAgdmVjMigtSW5maW5pdHksIC1JbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNtYWxsZXN0IHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIDIgcmVjdGFuZ2xlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYm91bmRpbmdSZWN0YW5nbGUoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICBjb25zdCBwb3NpdGlvbiA9IG1pblZlYyhhLnBvc2l0aW9uLCBiLnBvc2l0aW9uKTtcbiAgY29uc3QgYm90dG9tUmlnaHQgPSBtYXhWZWMoXG4gICAgdmVjMi5hZGQoYS5wb3NpdGlvbiwgYS5zaXplKSxcbiAgICB2ZWMyLmFkZChiLnBvc2l0aW9uLCBiLnNpemUpXG4gICk7XG5cbiAgcmV0dXJuIHsgcG9zaXRpb24sIHNpemU6IHZlYzIuc3ViKGJvdHRvbVJpZ2h0LCBwb3NpdGlvbikgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgY29sb3VyIG9iamVjdCB0byBhIENTUyBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG91clRvU3RyaW5nKGNvbG91cjogQ29sb3VyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGByZ2JhKCR7Y29sb3VyLnJ9LCAke2NvbG91ci5nfSwgJHtjb2xvdXIuYn0sICR7Y29sb3VyLmF9KWA7XG59XG5cbi8qKlxuICogTGluZWFyIGludGVycG9sYXRlIGJldHdlZW4gMiBjb2xvdXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwQ29sb3VyKGE6IENvbG91ciwgYjogQ29sb3VyLCBpOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByOiBsZXJwKGEuciwgYi5yLCBpKSxcbiAgICBnOiBsZXJwKGEuZywgYi5nLCBpKSxcbiAgICBiOiBsZXJwKGEuYiwgYi5iLCBpKSxcbiAgICBhOiBsZXJwKGEuYSwgYi5hLCBpKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgMmQgaW50ZXJ2YWwgdG8gYSByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVydmFsVG9SZWN0YW5nbGUoaW50ZXJ2YWw6IEludGVydmFsMmQpOiBSZWN0YW5nbGUge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiB2ZWMyKGludGVydmFsLmxlZnQsIGludGVydmFsLnRvcCksXG4gICAgc2l6ZTogdmVjMihpbnRlcnZhbC5yaWdodCAtIGludGVydmFsLmxlZnQsIGludGVydmFsLmJvdHRvbSAtIGludGVydmFsLnRvcCksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIHJlY3RhbmdsZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVUb0ludGVydmFsKHJlY3RhbmdsZTogUmVjdGFuZ2xlKTogSW50ZXJ2YWwyZCB7XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgcmlnaHQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54ICsgcmVjdGFuZ2xlLnNpemUueCxcbiAgICB0b3A6IHJlY3RhbmdsZS5wb3NpdGlvbi55LFxuICAgIGJvdHRvbTogcmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyByZWN0YW5nbGUuc2l6ZS55LFxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIDIgQUFCQnMgaW50ZXJzZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVzSW50ZXJzZWN0KGE6IFJlY3RhbmdsZSwgYjogUmVjdGFuZ2xlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRsMSA9IGEucG9zaXRpb247XG4gIGNvbnN0IGJyMSA9IHZlYzIuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSk7XG4gIGNvbnN0IHRsMiA9IGIucG9zaXRpb247XG4gIGNvbnN0IGJyMiA9IHZlYzIuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSk7XG5cbiAgcmV0dXJuIHRsMS54IDwgYnIyLnggJiYgYnIxLnggPiB0bDIueCAmJiB0bDEueSA8IGJyMi55ICYmIGJyMS55ID4gdGwyLnk7XG59XG5cbi8qKlxuICogR2V0IGFuIGFycmF5IG9mIHZlcnRpY2VzIGZvciBhIHJlY3RhbmdsZSBpbiBDVyB3aW5kaW5nIG9yZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVWZXJ0aWNlcyhyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IHZlYzJbXSB7XG4gIGNvbnN0IHRsID0gcmVjdGFuZ2xlLnBvc2l0aW9uO1xuICBjb25zdCBiciA9IHZlYzIuYWRkKHJlY3RhbmdsZS5wb3NpdGlvbiwgcmVjdGFuZ2xlLnNpemUpO1xuXG4gIHJldHVybiBbcmVjdGFuZ2xlLnBvc2l0aW9uLCB2ZWMyKGJyLngsIHRsLnkpLCBiciwgdmVjMih0bC54LCBici55KV07XG59XG5cbi8qKlxuICogR2V0IHRoZSBhcmVhIGNvdmVyZWQgYnkgYSBzcHJpdGUncyBjdXJyZW50IGZyYW1lLCB0aGlzIG1hdGNoZXMgd2hlcmVcbiAqIGBTcHJpdGUuZHJhdygpYCBwdXRzIHRoZSBpbWFnZSAoaWYgdGhlIHNwcml0ZSBpc24ndCByb3RhdGVkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByaXRlQm91bmRzKHNwcml0ZTogU3ByaXRlKTogUmVjdGFuZ2xlIHtcbiAgY29uc3QgeyBpbWFnZSB9ID0gc3ByaXRlO1xuICBjb25zdCBzaXplID0gaW1hZ2UgPyB2ZWMyKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpIDogc3ByaXRlLnNpemU7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogdmVjMi5zdWIoc3ByaXRlLnBvc2l0aW9uLCB2ZWMyLm11bChzcHJpdGUub3JpZ2luLCBzcHJpdGUuc2NhbGUpKSxcbiAgICBzaXplOiB2ZWMyLm11bChzaXplLCBzcHJpdGUuc2NhbGUpLFxuICB9O1xufVxuXG4vKipcbiAqIERyYXcgYW4gaW1hZ2UgaW50byBhIHJlY3RhbmdsZSwgZWl0aGVyIHJlcGVhdGluZyBpdCBvciBzdHJldGNoaW5nIGl0IHRvIGZpdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd0ltYWdlSW5SZWN0YW5nbGUoXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgaW1hZ2U6IFNjZW5lSW1hZ2UsXG4gIHJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICByZXBlYXQ6IGJvb2xlYW5cbikge1xuICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSByZWN0YW5nbGU7XG5cbiAgaWYgKCFyZXBlYXQpIHtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsICdyZXBlYXQnKTtcbiAgaWYgKHBhdHRlcm4pIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG59XG4iLCJleHBvcnQgdHlwZSB7IEZyYW1lIH0gZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vbGlnaHRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWZsZWN0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3dhdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vd29ybGQnO1xuIiwiaW1wb3J0IHR5cGUgeyBTcHJpdGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zcHJpdGUnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIHNwcml0ZUJvdW5kcyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2lyY2xlQ2FzdGVyLFxuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBTcHJpdGVDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFdhbGxSZWNlaXZlciwgV2FsbFJlY2VpdmVyT3B0aW9ucyB9IGZyb20gJy4vU3VyZmFjZSc7XG5cbnR5cGUgQWN0b3JTaGFkb3dPcHRpb25zID0ge1xuICAvKipcbiAgICogSGVpZ2h0IG9mIHRoZSBhcmVhIGF0IHRoZSBib3R0b20gb2YgdGhlIGFjdG9yIHRoYXQgY2FzdHMgYSBzaGFkb3csXG4gICAqIGRlZmF1bHRzIHRvIGEgdGhpcmQgb2YgdGhlIGFjdG9yJ3MgaGVpZ2h0XG4gICAqL1xuICBmb290cHJpbnRIZWlnaHQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBY3RvclNoYWRvdyA9XG4gIHwgJ25vbmUnXG4gIHwgJ3Nwcml0ZSdcbiAgfCAnY2lyY2xlJ1xuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdub25lJyB9KVxuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdzcHJpdGUnIH0gJiBQYXJ0aWFsPFxuICAgICAgICBPbWl0PFNwcml0ZUNhc3Rlck9wdGlvbnMsICdwb3NpdGlvbicgfCAnc2l6ZSc+XG4gICAgICA+KVxuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdjaXJjbGUnIH0gJiBQYXJ0aWFsPFxuICAgICAgICBPbWl0PENpcmNsZUNhc3Rlck9wdGlvbnMsICdwb3NpdGlvbicgfCAnc2l6ZSc+XG4gICAgICA+KTtcblxuZXhwb3J0IHR5cGUgQWN0b3JPcHRpb25zID0gT21pdDxXYWxsUmVjZWl2ZXJPcHRpb25zLCAncmVjZWl2ZUxpZ2h0Jz4gJiB7XG4gIC8qKlxuICAgKiBUaGUgc2hhZG93IGNhc3QgYnkgdGhpcyBhY3RvciwgdGhlIGRlZmF1bHQgaXMgYSBzdHJldGNoZWQgc2lsaG91ZXR0ZSBvZlxuICAgKiB0aGUgYWN0b3IncyBpbWFnZVxuICAgKi9cbiAgc2hhZG93PzogQWN0b3JTaGFkb3c7XG59O1xuXG5leHBvcnQgdHlwZSBTcHJpdGVBY3Rvck9wdGlvbnMgPSBPbWl0PFxuICBBY3Rvck9wdGlvbnMsXG4gICdwb3NpdGlvbicgfCAnc2l6ZScgfCAnaW1hZ2UnIHwgJ21hc2snIHwgJ25vcm1hbE1hcCcgfCAnc3BlY3VsYXJNYXAnXG4+ICYge1xuICAvKipcbiAgICogVGhlIHNwcml0ZSB0aGF0IHRoaXMgYWN0b3IgZm9sbG93c1xuICAgKlxuICAgKiBUaGUgYWN0b3IncyBwb3NpdGlvbiwgc2l6ZSwgYW5kIGltYWdlcyBjb21lIGZyb20gdGhlIHNwcml0ZSBldmVyeSB0aW1lIHRoZVxuICAgKiBzY2VuZSBpcyByZW5kZXJlZC4gTm9ybWFsIG1hcHMgYW5kIHNwZWN1bGFyIG1hcHMgY29tZSBmcm9tIHRoZSBzcHJpdGUnc1xuICAgKiBgbm9ybWFsYCBhbmQgYHNwZWN1bGFyYCBsYXllcnNcbiAgICovXG4gIHNwcml0ZTogU3ByaXRlO1xufTtcblxuLyoqXG4gKiBBIG1vdmluZyBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgY2FzdHMgYSBzaGFkb3dcbiAqL1xuZXhwb3J0IGNsYXNzIEFjdG9yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GT09UUFJJTlRfU0NBTEUgPSAxIC8gMztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSEFET1dfTEVOR1RIX1NDQUxFID0gMS4zMztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9STUFMX0xBWUVSID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNQRUNVTEFSX0xBWUVSID0gJ3NwZWN1bGFyJztcblxuICBwdWJsaWMgcmVhZG9ubHkgc3VyZmFjZTogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgY2FzdGVyOiBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXIgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlIHwgbnVsbDtcblxuICBwcml2YXRlIGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbTtcbiAgcHJpdmF0ZSBmb290cHJpbnRIZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogR2V0IHRoZSBhcmVhIGNvdmVyZWQgYnkgYSBzcHJpdGUncyBjdXJyZW50IGZyYW1lIGFuZCB0aGUgaW1hZ2VzIGZvciBpdFxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgc3ByaXRlRnJhbWUoc3ByaXRlOiBTcHJpdGUpIHtcbiAgICBjb25zdCB7IGltYWdlIH0gPSBzcHJpdGU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3ByaXRlQm91bmRzKHNwcml0ZSksXG4gICAgICBpbWFnZSxcbiAgICAgIG5vcm1hbE1hcDogaW1hZ2UgJiYgc3ByaXRlLmdldEltYWdlKHVuZGVmaW5lZCwgQWN0b3IuTk9STUFMX0xBWUVSKSxcbiAgICAgIHNwZWN1bGFyTWFwOiBpbWFnZSAmJiBzcHJpdGUuZ2V0SW1hZ2UodW5kZWZpbmVkLCBBY3Rvci5TUEVDVUxBUl9MQVlFUiksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHNwcml0ZSBhY3RvciBvcHRpb25zIGludG8gdGhlIGVxdWl2YWxlbnQgYWN0b3Igb3B0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVzb2x2ZU9wdGlvbnMoXG4gICAgb3B0aW9uczogQWN0b3JPcHRpb25zIHwgU3ByaXRlQWN0b3JPcHRpb25zXG4gICk6IEFjdG9yT3B0aW9ucyB7XG4gICAgaWYgKCEoJ3Nwcml0ZScgaW4gb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3ByaXRlLCAuLi5hY3RvciB9ID0gb3B0aW9ucztcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY3RvcixcbiAgICAgIC4uLkFjdG9yLnNwcml0ZUZyYW1lKHNwcml0ZSksXG4gICAgICBjdXN0b21EcmF3OiB7XG4gICAgICAgIGltYWdlOiBjb250ZXh0ID0+IHNwcml0ZS5kcmF3KGNvbnRleHQpLFxuICAgICAgICAuLi5hY3Rvci5jdXN0b21EcmF3LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSxcbiAgICBhY3Rvck9wdGlvbnM6IEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9uc1xuICApIHtcbiAgICBjb25zdCBvcHRpb25zID0gQWN0b3IucmVzb2x2ZU9wdGlvbnMoYWN0b3JPcHRpb25zKTtcbiAgICBjb25zdCB7IHNoYWRvdyA9ICdzcHJpdGUnLCAuLi5zdXJmYWNlIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHsgdHlwZSwgZm9vdHByaW50SGVpZ2h0LCAuLi5jYXN0ZXJPcHRpb25zIH0gPSAoXG4gICAgICB0eXBlb2Ygc2hhZG93ID09PSAnc3RyaW5nJyA/IHsgdHlwZTogc2hhZG93IH0gOiBzaGFkb3dcbiAgICApIGFzIEV4Y2x1ZGU8QWN0b3JTaGFkb3csIHN0cmluZz47XG5cbiAgICB0aGlzLmxpZ2h0aW5nID0gbGlnaHRpbmc7XG4gICAgdGhpcy5zcHJpdGUgPSAnc3ByaXRlJyBpbiBhY3Rvck9wdGlvbnMgPyBhY3Rvck9wdGlvbnMuc3ByaXRlIDogbnVsbDtcbiAgICB0aGlzLmZvb3RwcmludEhlaWdodCA9XG4gICAgICBmb290cHJpbnRIZWlnaHQgPz8gb3B0aW9ucy5zaXplLnkgKiBBY3Rvci5ERUZBVUxUX0ZPT1RQUklOVF9TQ0FMRTtcblxuICAgIHRoaXMuc3VyZmFjZSA9IGxpZ2h0aW5nLmFkZFdhbGxSZWNlaXZlcih7XG4gICAgICBtZXJnZWFibGU6IGZhbHNlLFxuICAgICAgcHJvamVjdFNoYWRvd3M6IGZhbHNlLFxuICAgICAgLi4uc3VyZmFjZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3RwcmludCA9IHRoaXMuZm9vdHByaW50KG9wdGlvbnMucG9zaXRpb24sIG9wdGlvbnMuc2l6ZSk7XG4gICAgaWYgKHR5cGUgPT09ICdzcHJpdGUnKSB7XG4gICAgICBjb25zdCBzaGFkb3dMZW5ndGggPSBvcHRpb25zLnNpemUueSAqIEFjdG9yLkRFRkFVTFRfU0hBRE9XX0xFTkdUSF9TQ0FMRTtcblxuICAgICAgdGhpcy5jYXN0ZXIgPSBsaWdodGluZy5hZGRTcHJpdGVDYXN0ZXIoe1xuICAgICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcbiAgICAgICAgbWluU2hhZG93TGVuZ3RoOiBzaGFkb3dMZW5ndGgsXG4gICAgICAgIG1heFNoYWRvd0xlbmd0aDogc2hhZG93TGVuZ3RoLFxuICAgICAgICAuLi5jYXN0ZXJPcHRpb25zLFxuICAgICAgICAuLi5mb290cHJpbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkQ2lyY2xlQ2FzdGVyKHtcbiAgICAgICAgLi4uY2FzdGVyT3B0aW9ucyxcbiAgICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTG9vayBmb3Igc2hhZG93cyBmcm9tIGZhciBlbm91Z2ggYXdheSB0byBhdm9pZCBvdXIgb3duIHNoYWRvd1xuICAgIGlmICh0aGlzLmNhc3RlciAmJiBvcHRpb25zLnNoYWRvd0JpYXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdXJmYWNlLnNoYWRvd0JpYXMgPSB0aGlzLmNhc3RlckJpYXModGhpcy5jYXN0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRpc3RhbmNlIHRoYXQgYSBjYXN0ZXIncyBzaGFkb3cgcmVhY2hlcyBiYWNrIHRvd2FyZHMgdGhlIGxpZ2h0XG4gICAqL1xuICBwcml2YXRlIGNhc3RlckJpYXMoY2FzdGVyOiBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXIpOiBudW1iZXIge1xuICAgIGlmIChjYXN0ZXIgaW5zdGFuY2VvZiBTcHJpdGVDYXN0ZXIpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGNhc3Rlci5tYXhTaGFkb3dMZW5ndGggPz8gY2FzdGVyLm1pblNoYWRvd0xlbmd0aDtcblxuICAgICAgcmV0dXJuIGxlbmd0aCAqICgxIC0gY2FzdGVyLm9mZnNldC55KSArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KGNhc3Rlci5zaXplLngsIGNhc3Rlci5zaXplLnkpIC8gMiArIDE7XG4gIH1cblxuICBwcml2YXRlIGZvb3RwcmludChwb3NpdGlvbjogdmVjMiwgc2l6ZTogdmVjMik6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyBzaXplLnkgLSB0aGlzLmZvb3RwcmludEhlaWdodCksXG4gICAgICBzaXplOiB2ZWMyKHNpemUueCwgdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgY3VycmVudCBwb3NpdGlvbiwgc2l6ZSwgYW5kIGltYWdlcyBmcm9tIHRoaXMgYWN0b3IncyBzcHJpdGUsIHRoaXNcbiAgICogaXMgY2FsbGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgc2NlbmUgaXMgcmVuZGVyZWRcbiAgICovXG4gIHB1YmxpYyBzeW5jKCkge1xuICAgIGlmICghdGhpcy5zcHJpdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmcmFtZSA9IEFjdG9yLnNwcml0ZUZyYW1lKHRoaXMuc3ByaXRlKTtcblxuICAgIHRoaXMuc3VyZmFjZS5zZXQoZnJhbWUpO1xuICAgIHRoaXMuY2FzdGVyPy5zZXQodGhpcy5mb290cHJpbnQoZnJhbWUucG9zaXRpb24sIGZyYW1lLnNpemUpKTtcblxuICAgIGlmICh0aGlzLmNhc3RlciBpbnN0YW5jZW9mIFNwcml0ZUNhc3Rlcikge1xuICAgICAgdGhpcy5jYXN0ZXIuaW1hZ2UgPSBmcmFtZS5pbWFnZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGFjdG9yIHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqXG4gICAqIElmIHRoaXMgYWN0b3IgaGFzIGEgc3ByaXRlIHRoZW4gdGhpcyB3aWxsIHNldCB0aGUgc3ByaXRlJ3MgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICAgICAgdGhpcy5zeW5jKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdXJmYWNlLm1vdmVUbyhwb3NpdGlvbik7XG4gICAgdGhpcy5jYXN0ZXI/Lm1vdmVUbyh0aGlzLmZvb3RwcmludChwb3NpdGlvbiwgdGhpcy5zdXJmYWNlLnNpemUpLnBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBhY3RvciBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5zdXJmYWNlLnJlbW92ZSgpO1xuICAgIHRoaXMuY2FzdGVyPy5yZW1vdmUoKTtcbiAgICB0aGlzLmxpZ2h0aW5nLnJlbW92ZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBib3VuZGluZ1JlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgU2NlbmVPYmplY3QsIFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgc2lsaG91ZXR0ZSB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxuZXhwb3J0IHR5cGUgUmVnaW9uQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFNob3VsZCBzaGFkb3dzIGluY2x1ZGUgdGhlIHJlY3Rhbmd1bGFyIHJlZ2lvbiBvZiB0aGlzIGNhc3Rlcj9cbiAgICovXG4gIGluY2x1ZGVSZWdpb25TaGFkb3c/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSB0aGF0IGNhc3RzIHBvbHlnb25hbCBzaGFkb3dzXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWdpb25DYXN0ZXIgZXh0ZW5kcyBTY2VuZU9iamVjdDxSZWdpb25DYXN0ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBpbmNsdWRlUmVnaW9uU2hhZG93OiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogUmVnaW9uQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGlzIGNhc3RlciBjYW4gYmUgbWVyZ2VkIHdpdGggYW5vdGhlciBjYXN0ZXJcbiAgICovXG4gIHB1YmxpYyBjYW5NZXJnZShvdGhlcjogUmVnaW9uQ2FzdGVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWVyZ2VhYmxlICYmXG4gICAgICBvdGhlci5tZXJnZWFibGUgJiZcbiAgICAgIHRoaXMuaW5jbHVkZVJlZ2lvblNoYWRvdyA9PT0gb3RoZXIuaW5jbHVkZVJlZ2lvblNoYWRvd1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGNhc3RlciB0aGF0IGNvdmVycyB0aGlzIGNhc3RlciBhbmQgYW5vdGhlciBjYXN0ZXJcbiAgICovXG4gIHB1YmxpYyBtZXJnZShvdGhlcjogUmVnaW9uQ2FzdGVyKTogUmVnaW9uQ2FzdGVyIHtcbiAgICByZXR1cm4gbmV3IFJlZ2lvbkNhc3Rlcih0aGlzLmxpZ2h0aW5nLCB7XG4gICAgICAuLi4odGhpcyBhcyBSZWdpb25DYXN0ZXIpLFxuICAgICAgLi4uYm91bmRpbmdSZWN0YW5nbGUodGhpcywgb3RoZXIpLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNwcml0ZUNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgdXNlZCBmb3IgdGhpcyBjYXN0ZXIncyBzaGFkb3csIGl0IHNob3VsZCBiZSBibGFjayB3aXRoIGFuIGFscGhhXG4gICAqIGNoYW5uZWxcbiAgICovXG4gIHNoYWRvdz86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBJZiBgc2hhZG93YCBpc24ndCBzZXQsIHdlJ2xsIHVzZSB0aGUgc2lsaG91ZXR0ZSBvZiB0aGlzIGltYWdlIGluc3RlYWRcbiAgICovXG4gIGltYWdlPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBzaGFkb3cgYmVnaW5zLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBzaXplIG9mIHRoaXMgY2FzdGVyLCB3aGVyZVxuICAgKiAoMCwgMCkgaXMgdGhlIHRvcC1sZWZ0IGNvcm5lciBhbmQgKDEsIDEpIGlzIHRoZSBib3R0b20tcmlnaHQgY29ybmVyXG4gICAqL1xuICBhbmNob3I/OiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgdGhlIHNoYWRvdyBmcm9tIHRoZSBhbmNob3IsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNoYWRvdyBzaXplXG4gICAqL1xuICBvZmZzZXQ/OiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBTaGFkb3cgbGVuZ3RoIHdoZW4gdGhlIGxpZ2h0IGlzIGF0IHRoZSBjZW50ZXIgb2YgdGhpcyBjYXN0ZXJcbiAgICovXG4gIG1pblNoYWRvd0xlbmd0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hhZG93IGxlbmd0aCB3aGVuIHRoaXMgY2FzdGVyIGlzIGF0IHRoZSBlZGdlIG9mIHRoZSBsaWdodCdzIHJhZGl1cywgb3JcbiAgICogbnVsbCB0byB1c2UgdGhlIGxpZ2h0J3MgcmFkaXVzXG4gICAqL1xuICBtYXhTaGFkb3dMZW5ndGg/OiBudW1iZXIgfCBudWxsO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGEgc2hhZG93IGJ5IHJvdGF0aW5nIGFuZCBzdHJldGNoaW5nIGFuIGltYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBTcHJpdGVDYXN0ZXIgZXh0ZW5kcyBTY2VuZU9iamVjdDxTcHJpdGVDYXN0ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBzaGFkb3c6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGltYWdlOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBhbmNob3I6IHZlYzIgPSB2ZWMyKDAuNSwgMC45KTtcbiAgcHVibGljIG9mZnNldDogdmVjMiA9IHZlYzIoMC41LCAwLjkpO1xuICBwdWJsaWMgbWluU2hhZG93TGVuZ3RoOiBudW1iZXIgPSA2NDtcbiAgcHVibGljIG1heFNoYWRvd0xlbmd0aDogbnVtYmVyIHwgbnVsbCA9IDY0O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFNwcml0ZUNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBpbWFnZSBmb3IgdGhpcyBjYXN0ZXIncyBzaGFkb3csIGlmIGl0IGhhcyBvbmVcbiAgICovXG4gIHB1YmxpYyBnZXRTaGFkb3coKTogU2NlbmVJbWFnZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnNoYWRvdyA/PyAodGhpcy5pbWFnZSAmJiBzaWxob3VldHRlKHRoaXMuaW1hZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDaXJjbGVDYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogV2hlcmUgdGhlIHNoYWRvdyBpcyBjZW50ZXJlZCwgYXMgYSBmcmFjdGlvbiBvZiB0aGUgc2l6ZSBvZiB0aGlzIGNhc3RlcixcbiAgICogd2hlcmUgKDAsIDApIGlzIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kICgxLCAxKSBpcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lclxuICAgKi9cbiAgYW5jaG9yPzogdmVjMjtcblxuICAvKipcbiAgICogRGlzdGFuY2UgZnJvbSB0aGUgYW5jaG9yIHRvIHRoZSBzaGFkb3cgd2hlbiB0aGUgbGlnaHQgaXMgYXQgdGhlIGNlbnRlciBvZlxuICAgKiB0aGlzIGNhc3RlclxuICAgKi9cbiAgbWluU2hhZG93RGlzdGFuY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGZyb20gdGhlIGFuY2hvciB0byB0aGUgc2hhZG93IHdoZW4gdGhpcyBjYXN0ZXIgaXMgYXQgdGhlIGVkZ2Ugb2ZcbiAgICogdGhlIGxpZ2h0J3MgcmFkaXVzLCBvciBudWxsIHRvIHVzZSB0aGUgbGlnaHQncyByYWRpdXNcbiAgICovXG4gIG1heFNoYWRvd0Rpc3RhbmNlPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogT3BhY2l0eSBvZiB0aGUgc2hhZG93XG4gICAqL1xuICBhbHBoYT86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhbiBlbGxpcHRpY2FsIHNoYWRvd1xuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8Q2lyY2xlQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgYW5jaG9yOiB2ZWMyID0gdmVjMigwLjUsIDAuOSk7XG4gIHB1YmxpYyBtaW5TaGFkb3dEaXN0YW5jZTogbnVtYmVyID0gNTtcbiAgcHVibGljIG1heFNoYWRvd0Rpc3RhbmNlOiBudW1iZXIgfCBudWxsID0gMjA7XG4gIHB1YmxpYyBhbHBoYTogbnVtYmVyID0gMTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBDaXJjbGVDYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFNoYWRvd0Nhc3RlciA9IFJlZ2lvbkNhc3RlciB8IFNwcml0ZUNhc3RlciB8IENpcmNsZUNhc3RlcjtcbiIsImltcG9ydCB7IHBhcnNlQ29sb3IgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yJztcbmltcG9ydCB7IGF0LCBzbW9vdGhzdGVwLCB1bmxlcnAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgY29sb3VyVG9TdHJpbmcsXG4gIFJlY3RhbmdsZSxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbiAgcmVjdGFuZ2xlVG9JbnRlcnZhbCxcbiAgcmVjdGFuZ2xlVmVydGljZXMsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgQ2lyY2xlQ2FzdGVyLCBSZWdpb25DYXN0ZXIsIFNwcml0ZUNhc3RlciB9IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IExpbmUsIFBvbHlnb25WZXJ0aWNlcywgU2VjdG9yMmQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGxpbmVJc0ZhY2luZywgcG9seWdvbiwgc2VjdG9yMmQgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IEhBTEZfUEkgPSBNYXRoLlBJIC8gMjtcblxuZXhwb3J0IHR5cGUgTGlnaHRPcHRpb25zID0ge1xuICAvKipcbiAgICogV29ybGQgcG9zaXRpb24gb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgcG9zaXRpb246IHZlYzI7XG5cbiAgLyoqXG4gICAqIFJhZGl1cyBvZiB0aGlzIGxpZ2h0IGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiB0aGlzIGxpZ2h0XG4gICAqL1xuICBjb2xvdXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmdWxseS1saXQgYXJlYSBhdCB0aGUgY2VudGVyIG9mIHRoaXMgbGlnaHQsIGFzIGEgZnJhY3Rpb25cbiAgICogb2YgdGhlIHJhZGl1c1xuICAgKi9cbiAgY29yZVJhZGl1cz86IG51bWJlcjtcblxuICAvKipcbiAgICogQnJpZ2h0bmVzcyBvZiB0aGlzIGxpZ2h0XG4gICAqL1xuICBpbnRlbnNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhlaWdodCBvZiB0aGlzIGxpZ2h0IGFib3ZlIHRoZSBncm91bmQsIHRoaXMgaXMgdXNlZCBmb3Igc2hhZGluZyBub3JtYWwgbWFwc1xuICAgKiBhbmQgc3BlY3VsYXIgbWFwc1xuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBsaWdodCBjYXN0IHNoYWRvd3M/XG4gICAqL1xuICBjYXN0U2hhZG93cz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgTGlnaHQge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1JBRElVUyA9IDEwMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT0xPVVIgPSAnd2hpdGUnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPUkVfUkFESVVTID0gMC4yO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfQ09SRV9SQURJVVMgPSAwLjk5O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0lOVEVOU0lUWSA9IDE7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSEVJR0hUID0gNDg7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNIQURPV19CVUZGRVIgPSAyMDtcblxuICBwcml2YXRlIGxpZ2h0aW5nU3lzdGVtOiBMaWdodGluZ1N5c3RlbTtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYzI7XG4gIHByaXZhdGUgX3JhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9jb2xvdXI6IHN0cmluZztcbiAgcHVibGljIGNvbG91ck9iamVjdDogQ29sb3VyO1xuICBwcml2YXRlIF9jb3JlUmFkaXVzOiBudW1iZXI7XG4gIHByaXZhdGUgX2ludGVuc2l0eTogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIHB1YmxpYyBjYXN0U2hhZG93czogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhpcyBpcyBjaGFuZ2VkIHdoZW5ldmVyIGBsaWdodENhbnZhc2AgaXMgcmVkcmF3blxuICAgKi9cbiAgcHVibGljIGxpZ2h0TWFwVmVyc2lvbjogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgbGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGxpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIC8qKlxuICAgKiBXaGl0ZSB3aGVyZSBsaWdodCByZWFjaGVzIHRoZSBncm91bmQsIGFuZCBibGFjayBpbiB0aGUgc2hhZG93cyBvZiByZWdpb25cbiAgICogY2FzdGVyc1xuICAgKi9cbiAgcHVibGljIHJlZ2lvblNoYWRvd0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgcmVnaW9uU2hhZG93Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIC8qKlxuICAgKiBXaGl0ZSB3aGVyZSBsaWdodCByZWFjaGVzIHRoZSBncm91bmQsIGFuZCBibGFjayBpbiB0aGUgc2hhZG93cyBvZiBzcHJpdGVcbiAgICogYW5kIGNpcmNsZSBjYXN0ZXJzXG4gICAqL1xuICBwdWJsaWMgb2JqZWN0U2hhZG93Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBvYmplY3RTaGFkb3dDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHJpdmF0ZSBkaXJ0eSA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nU3lzdGVtOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogTGlnaHRPcHRpb25zKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbSA9IGxpZ2h0aW5nU3lzdGVtO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KG9wdGlvbnMucG9zaXRpb24pO1xuICAgIHRoaXMuX3JhZGl1cyA9IG9wdGlvbnMucmFkaXVzID8/IExpZ2h0LkRFRkFVTFRfUkFESVVTO1xuICAgIHRoaXMuX2NvbG91ciA9IG9wdGlvbnMuY29sb3VyID8/IExpZ2h0LkRFRkFVTFRfQ09MT1VSO1xuICAgIHRoaXMuX2NvcmVSYWRpdXMgPSBvcHRpb25zLmNvcmVSYWRpdXMgPz8gTGlnaHQuREVGQVVMVF9DT1JFX1JBRElVUztcbiAgICB0aGlzLl9pbnRlbnNpdHkgPSBvcHRpb25zLmludGVuc2l0eSA/PyBMaWdodC5ERUZBVUxUX0lOVEVOU0lUWTtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ID8/IExpZ2h0LkRFRkFVTFRfSEVJR0hUO1xuICAgIHRoaXMuY2FzdFNoYWRvd3MgPSBvcHRpb25zLmNhc3RTaGFkb3dzID8/IHRydWU7XG4gICAgdGhpcy5jb2xvdXJPYmplY3QgPSBwYXJzZUNvbG9yKHRoaXMuX2NvbG91cik7XG5cbiAgICB0aGlzLmxpZ2h0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dCA9IHRoaXMubGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLnJlZ2lvblNoYWRvd0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMucmVnaW9uU2hhZG93Q29udGV4dCA9IHRoaXMucmVnaW9uU2hhZG93Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy5vYmplY3RTaGFkb3dDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQgPSB0aGlzLm9iamVjdFNoYWRvd0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIC8qKlxuICAgKiBCb3VuZGluZyBib3ggZm9yIHRoaXMgbGlnaHQsIGluY2x1ZGluZyB0aGUgb2Zmc2V0IHdhbGwgbGlnaHRtYXBzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGJvdW5kcygpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IHdhbGxMaWdodGluZ1lPZmZzZXQgPSB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldDtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLl9yYWRpdXMgKyBNYXRoLm1pbih3YWxsTGlnaHRpbmdZT2Zmc2V0LCAwKVxuICAgICAgKSxcbiAgICAgIHNpemU6IHZlYzIoXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIsXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIgKyBNYXRoLmFicyh3YWxsTGlnaHRpbmdZT2Zmc2V0KVxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCByYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3JhZGl1cykge1xuICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICB9XG5cbiAgcHVibGljIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29sb3VyKSB7XG4gICAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih2YWx1ZSk7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvcmVSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVSYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvcmVSYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29yZVJhZGl1cykge1xuICAgICAgdGhpcy5fY29yZVJhZGl1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVuc2l0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2ludGVuc2l0eSkge1xuICAgICAgdGhpcy5faW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGxpZ2h0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc29tZSBvZiB0aGUgb3B0aW9ucyBmb3IgdGhpcyBsaWdodFxuICAgKi9cbiAgcHVibGljIHNldChvcHRpb25zOiBQYXJ0aWFsPExpZ2h0T3B0aW9ucz4pIHtcbiAgICBjb25zdCB7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIHJhZGl1cyxcbiAgICAgIGNvbG91cixcbiAgICAgIGNvcmVSYWRpdXMsXG4gICAgICBpbnRlbnNpdHksXG4gICAgICBoZWlnaHQsXG4gICAgICBjYXN0U2hhZG93cyxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbiA/PyB0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyA/PyB0aGlzLnJhZGl1cztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91ciA/PyB0aGlzLmNvbG91cjtcbiAgICB0aGlzLmNvcmVSYWRpdXMgPSBjb3JlUmFkaXVzID8/IHRoaXMuY29yZVJhZGl1cztcbiAgICB0aGlzLmludGVuc2l0eSA9IGludGVuc2l0eSA/PyB0aGlzLmludGVuc2l0eTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCA/PyB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmNhc3RTaGFkb3dzID0gY2FzdFNoYWRvd3MgPz8gdGhpcy5jYXN0U2hhZG93cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBsaWdodCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5yZW1vdmUodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShcbiAgICByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXSxcbiAgICBzcHJpdGVDYXN0ZXJzOiBTcHJpdGVDYXN0ZXJbXSxcbiAgICBjaXJjbGVDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXVxuICApIHtcbiAgICAvLyBJZiB0aGUgbGlnaHQgc2V0dGluZ3MgaGF2ZSBjaGFuZ2VkLCB3ZSBuZWVkIHRvIHJlZHJhdyB0aGUgYmFzZSBsaWdodG1hcFxuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLnByZXBhcmVMaWdodE1hcCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRTaGFkb3dDb250ZXh0KHRoaXMucmVnaW9uU2hhZG93Q29udGV4dCk7XG4gICAgdGhpcy5yZXNldFNoYWRvd0NvbnRleHQodGhpcy5vYmplY3RTaGFkb3dDb250ZXh0KTtcblxuICAgIGlmICh0aGlzLmNhc3RTaGFkb3dzKSB7XG4gICAgICBjb25zdCBsaWdodFJlY3RhbmdsZSA9IHRoaXMuYm91bmRzO1xuXG4gICAgICB0aGlzLnByZXBhcmVSZWdpb25TaGFkb3dzKGxpZ2h0UmVjdGFuZ2xlLCByZWdpb25DYXN0ZXJzKTtcbiAgICAgIHRoaXMucHJlcGFyZVNwcml0ZVNoYWRvd3MobGlnaHRSZWN0YW5nbGUsIHNwcml0ZUNhc3RlcnMpO1xuICAgICAgdGhpcy5wcmVwYXJlQ2lyY2xlU2hhZG93cyhsaWdodFJlY3RhbmdsZSwgY2lyY2xlQ2FzdGVycyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNoYWRvdyBjYW52YXMgbWF0Y2hlcyB0aGlzIGxpZ2h0J3Mgc2l6ZSwgYW5kIGZpbGwgaXQgd2l0aCB3aGl0ZVxuICAgKiBzbyB0aGF0IG5vdGhpbmcgaXMgaW4gc2hhZG93XG4gICAqL1xuICBwcml2YXRlIHJlc2V0U2hhZG93Q29udGV4dChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb25zdCBzaXplID0gTWF0aC5mbG9vcih0aGlzLl9yYWRpdXMgKiAyKTtcbiAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHNpemUgfHwgY29udGV4dC5jYW52YXMuaGVpZ2h0ICE9PSBzaXplKSB7XG4gICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGNvbnRleHQuY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPVxuICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUxpZ2h0TWFwKCkge1xuICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0TWFwVmVyc2lvbisrO1xuICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGggPSB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDI7XG5cbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsUmVjdChcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgdGhpcy5saWdodENhbnZhcy53aWR0aCxcbiAgICAgIHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5saWdodENvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMgKiBNYXRoLm1pbih0aGlzLl9jb3JlUmFkaXVzLCBMaWdodC5NQVhfQ09SRV9SQURJVVMpLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzXG4gICAgKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXG4gICAgICAwLFxuICAgICAgY29sb3VyVG9TdHJpbmcoe1xuICAgICAgICAuLi50aGlzLmNvbG91ck9iamVjdCxcbiAgICAgICAgcjogdGhpcy5jb2xvdXJPYmplY3QuciAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgICAgZzogdGhpcy5jb2xvdXJPYmplY3QuZyAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgICAgYjogdGhpcy5jb2xvdXJPYmplY3QuYiAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ2JsYWNrJyk7XG5cbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5hcmMoXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAwLFxuICAgICAgTWF0aC5QSSAqIDJcbiAgICApO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGwoKTtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBwcmVwYXJlUmVnaW9uU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHJlZ2lvbkNhc3RlcnM6IFJlZ2lvbkNhc3RlcltdXG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnJlZ2lvblNoYWRvd0NvbnRleHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9yYWRpdXNcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2YgcmVnaW9uQ2FzdGVycykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgY2FzdGVyKSkge1xuICAgICAgICBwb2x5Z29uKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgLi4udGhpcy5wcmVwYXJlUmVnaW9uU2hhZG93KGNhc3RlciwgY2FzdGVyLmluY2x1ZGVSZWdpb25TaGFkb3cpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU3ByaXRlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHNwcml0ZUNhc3RlcnM6IFNwcml0ZUNhc3RlcltdXG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3MoY29udGV4dCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5fcmFkaXVzLCB0aGlzLl9yYWRpdXMpO1xuXG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2Ygc3ByaXRlQ2FzdGVycykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgY2FzdGVyKSkge1xuICAgICAgICBjb25zdCBzaGFkb3dTcHJpdGUgPSBjYXN0ZXIuZ2V0U2hhZG93KCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHNoYWRvdyBzcHJpdGUgaXMgbWlzc2luZyBmb3IgdGhpcyBjYXN0ZXIgdGhlbiBpdCBkb2Vzbid0XG4gICAgICAgIC8vIGNhc3QgYSBzaGFkb3dcbiAgICAgICAgaWYgKCFzaGFkb3dTcHJpdGUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYWRvd09yaWdpbiA9IHZlYzIuYWRkKFxuICAgICAgICAgIGNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICB2ZWMyKGNhc3Rlci5zaXplLnggKiBjYXN0ZXIuYW5jaG9yLngsIGNhc3Rlci5zaXplLnkgKiBjYXN0ZXIuYW5jaG9yLnkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0xlbmd0aCA9IHNtb290aHN0ZXAoXG4gICAgICAgICAgY2FzdGVyLm1pblNoYWRvd0xlbmd0aCxcbiAgICAgICAgICBjYXN0ZXIubWF4U2hhZG93TGVuZ3RoID8/IHRoaXMucmFkaXVzLFxuICAgICAgICAgIHVubGVycChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIHZlYzIubGVuKHZlYzIuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dFZGdlID0gdmVjMi5tdWwoXG4gICAgICAgICAgdmVjMi5ub3IodmVjMi5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSksXG4gICAgICAgICAgc2hhZG93TGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0VkZ2VMZW5ndGggPSB2ZWMyLmxlbihzaGFkb3dFZGdlKTtcbiAgICAgICAgY29uc3Qgc2hhZG93QW5nbGUgPSB2ZWMyLnJhZChzaGFkb3dFZGdlKSArIEhBTEZfUEk7XG5cbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgICAgIHNoYWRvd09yaWdpbi54IC0gdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgIHNoYWRvd09yaWdpbi55IC0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQucm90YXRlKHNoYWRvd0FuZ2xlKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgc2hhZG93U3ByaXRlLFxuICAgICAgICAgIC1jYXN0ZXIuc2l6ZS54ICogY2FzdGVyLm9mZnNldC54LFxuICAgICAgICAgIC1zaGFkb3dFZGdlTGVuZ3RoICogY2FzdGVyLm9mZnNldC55LFxuICAgICAgICAgIGNhc3Rlci5zaXplLngsXG4gICAgICAgICAgc2hhZG93RWRnZUxlbmd0aFxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUNpcmNsZVNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBjaXJjbGVDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXVxuICApIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5vYmplY3RTaGFkb3dDb250ZXh0O1xuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyhjb250ZXh0KTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XG5cbiAgICBmb3IgKGNvbnN0IGNhc3RlciBvZiBjaXJjbGVDYXN0ZXJzKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXIpKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd09yaWdpbiA9IHZlYzIuYWRkKFxuICAgICAgICAgIGNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICB2ZWMyKGNhc3Rlci5zaXplLnggKiBjYXN0ZXIuYW5jaG9yLngsIGNhc3Rlci5zaXplLnkgKiBjYXN0ZXIuYW5jaG9yLnkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0Rpc3RhbmNlID0gc21vb3Roc3RlcChcbiAgICAgICAgICBjYXN0ZXIubWluU2hhZG93RGlzdGFuY2UsXG4gICAgICAgICAgY2FzdGVyLm1heFNoYWRvd0Rpc3RhbmNlID8/IHRoaXMucmFkaXVzLFxuICAgICAgICAgIHVubGVycChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIHZlYzIubGVuKHZlYzIuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dQb3NpdGlvbiA9IHZlYzIubXVsKFxuICAgICAgICAgIHZlYzIubm9yKHZlYzIuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIHNoYWRvd0Rpc3RhbmNlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd1NpemUgPSB2ZWMyLm11bChjYXN0ZXIuc2l6ZSwgMC41KTtcblxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGNhc3Rlci5hbHBoYTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnggLSB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnkgLSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29udGV4dC5lbGxpcHNlKFxuICAgICAgICAgIHNoYWRvd1Bvc2l0aW9uLngsXG4gICAgICAgICAgc2hhZG93UG9zaXRpb24ueSxcbiAgICAgICAgICBzaGFkb3dTaXplLngsXG4gICAgICAgICAgc2hhZG93U2l6ZS55LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBNYXRoLlBJICogMlxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVSZWdpb25TaGFkb3coXG4gICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgaW5jbHVkZUNhc3RlclJlZ2lvbjogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFBvbHlnb25WZXJ0aWNlcyB7XG4gICAgY29uc3QgbGlnaHRQb3NpdGlvbiA9IHZlYzIuY3B5KHRoaXMucG9zaXRpb24pO1xuICAgIGNvbnN0IGxpZ2h0UmFkaXVzID0gdGhpcy5fcmFkaXVzO1xuICAgIGNvbnN0IHNoYWRvd0Nhc3RlckludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpO1xuICAgIGNvbnN0IHNoYWRvd0Nhc3RlclZlcnRpY2VzID0gcmVjdGFuZ2xlVmVydGljZXMoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlKTtcbiAgICBjb25zdCBzaGFkb3dFZGdlczogTGluZVtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoYWRvd0Nhc3RlclZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IGF0KHNoYWRvd0Nhc3RlclZlcnRpY2VzLCBpIC0gMSk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gc2hhZG93Q2FzdGVyVmVydGljZXNbaV07XG5cbiAgICAgIGlmICghbGluZUlzRmFjaW5nKHsgc3RhcnQ6IHByZXZpb3VzLCBlbmQ6IGN1cnJlbnQgfSwgdGhpcy5wb3NpdGlvbikpIHtcbiAgICAgICAgY29uc3QgdmVydGV4MSA9IHZlYzIuc3ViKHByZXZpb3VzLCBsaWdodFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgdmVydGV4MiA9IHZlYzIuc3ViKGN1cnJlbnQsIGxpZ2h0UG9zaXRpb24pO1xuICAgICAgICBzaGFkb3dFZGdlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0OiBwcmV2aW91cyxcbiAgICAgICAgICAgIGVuZDogdmVjMi5hZGQoXG4gICAgICAgICAgICAgIHByZXZpb3VzLFxuICAgICAgICAgICAgICB2ZWMyLm11bChcbiAgICAgICAgICAgICAgICB2ZWMyLm5vcih2ZXJ0ZXgxKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIgLSB2ZWMyLmxlbih2ZXJ0ZXgxKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0OiBjdXJyZW50LFxuICAgICAgICAgICAgZW5kOiB2ZWMyLmFkZChcbiAgICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgICAgdmVjMi5tdWwoXG4gICAgICAgICAgICAgICAgdmVjMi5ub3IodmVydGV4MiksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSIC0gdmVjMi5sZW4odmVydGV4MilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoYWRvd1BvbHlnb246IFBvbHlnb25WZXJ0aWNlcyA9IFtdO1xuICAgIHN3aXRjaCAoc2VjdG9yMmQodGhpcy5wb3NpdGlvbiwgc2hhZG93Q2FzdGVySW50ZXJ2YWwpKSB7XG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcExlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3A6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbMl0uZW5kLCBzaGFkb3dFZGdlc1syXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzJdLmVuZCwgc2hhZG93RWRnZXNbMl0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1sxXS5lbmQsIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcFJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgdmVjMihcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnggKyBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZS54LFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1sxXS5lbmQueCwgc2hhZG93RWRnZXNbMl0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uZW5kXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMV0uZW5kLngsIHNoYWRvd0VkZ2VzWzJdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkxlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkluc2lkZTpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNF0uZW5kLCBzaGFkb3dFZGdlc1s0XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzNdLmVuZCwgc2hhZG93RWRnZXNbM10uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYzIucmFkKHZlYzIuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1szXS5lbmQsIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbUxlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMyKHNoYWRvd0VkZ2VzWzNdLmVuZC54LCBzaGFkb3dFZGdlc1swXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHZlYzIoXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueSArIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5zaXplLnlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1szXS5lbmQueCwgc2hhZG93RWRnZXNbMF0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMyLnJhZCh2ZWMyLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjMi5yYWQodmVjMi5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b21SaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYzIoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgdmVjMi5hZGQoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjMihzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoYWRvd1BvbHlnb247XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlQ29sb3IgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yJztcbmltcG9ydCB7IGZsb2F0RXF1YWxzIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEdsQ29udGV4dCxcbiAgaW50ZXJ2YWxUb1JlY3RhbmdsZSxcbiAgbGVycENvbG91cixcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbiAgU2NlbmVDYW1lcmEsXG59IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgQWN0b3IsIEFjdG9yT3B0aW9ucywgU3ByaXRlQWN0b3JPcHRpb25zIH0gZnJvbSAnLi9BY3Rvcic7XG5pbXBvcnQge1xuICBDaXJjbGVDYXN0ZXIsXG4gIENpcmNsZUNhc3Rlck9wdGlvbnMsXG4gIFJlZ2lvbkNhc3RlcixcbiAgUmVnaW9uQ2FzdGVyT3B0aW9ucyxcbiAgU3ByaXRlQ2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgeyBMaWdodCwgTGlnaHRPcHRpb25zIH0gZnJvbSAnLi9MaWdodCc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWVyZ2UnO1xuaW1wb3J0IHsgU2NlbmVPYmplY3QgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7IFNoYWRlclBhc3MsIFNoYWRlclN1cmZhY2UgfSBmcm9tICcuL1NoYWRlclBhc3MnO1xuaW1wb3J0IHtcbiAgR3JvdW5kUmVjZWl2ZXIsXG4gIEdyb3VuZFJlY2VpdmVyT3B0aW9ucyxcbiAgU3VyZmFjZSxcbiAgV2FsbFJlY2VpdmVyLFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1N1cmZhY2UnO1xuaW1wb3J0IHsgV2FsbCwgV2FsbE9wdGlvbnMgfSBmcm9tICcuL1dhbGwnO1xuXG5leHBvcnQgdHlwZSBMaWdodGluZ1N5c3RlbU9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgbGlnaHRpbmcgYmUgYXBwbGllZCB0byB0aGUgc2NlbmU/XG4gICAqXG4gICAqIElmIHRoaXMgaXMgZmFsc2UgdGhlbiB0aGUgc2NlbmUgd2lsbCBiZSBkcmF3biB3aXRob3V0IGFueSBsaWdodGluZywgYW5kXG4gICAqIFdlYkdMIHdvbid0IGJlIHVzZWRcbiAgICovXG4gIGxpZ2h0aW5nRW5hYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdWxkIGltYWdlIHNtb290aGluZyBiZSBlbmFibGVkP1xuICAgKlxuICAgKiBTZXQgdGhpcyB0byBmYWxzZSBmb3IgcGl4ZWwgYXJ0IHN0eWxlXG4gICAqL1xuICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzb2Z0IHNoYWRvd3MgYmUgZW5hYmxlZD9cbiAgICpcbiAgICogVGhpcyB3aWxsIG9ubHkgYXBwbHkgaWYgc29mdFNoYWRvd3NBbW91bnQgaXMgPiAwXG4gICAqL1xuICBzb2Z0U2hhZG93c0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiBzb2Z0IHNoYWRvd3MgdG8gYXBwbHlcbiAgICpcbiAgICogU2V0IHRoaXMgdG8gMCB0byBkaXNhYmxlIHNvZnQgc2hhZG93c1xuICAgKi9cbiAgc29mdFNoYWRvd3NBbW91bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIG5vcm1hbCBtYXBzIGFuZCBzcGVjdWxhciBtYXBzIGJlIHVzZWQ/XG4gICAqL1xuICBzdXJmYWNlTWFwc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFJlc29sdXRpb24gb2YgdGhlIHNjZW5lJ3Mgbm9ybWFsIG1hcCBhbmQgc3BlY3VsYXIgbWFwLCBjb21wYXJlZCB0byB0aGVcbiAgICogcmVzb2x1dGlvbiBvZiB0aGUgc2NyZWVuXG4gICAqXG4gICAqIFVwbG9hZGluZyB0aGVzZSBtYXBzIHRha2VzIHVwIGEgbG90IG9mIGVhY2ggZnJhbWUsIHNvIGxvd2VyIHZhbHVlcyBhcmVcbiAgICogZmFzdGVyLiBJZiB0aGUgY2FtZXJhIGlzIHpvb21lZCBpbiB0aGVuIHRoaXMgd29uJ3QgbG9zZSBhbnkgZGV0YWlsIGFzIGxvbmdcbiAgICogYXMgdGhlcmUncyBzdGlsbCBhdCBsZWFzdCBvbmUgcGl4ZWwgZm9yIGVhY2ggcGl4ZWwgaW4gdGhlIG9yaWdpbmFsIGltYWdlcyxcbiAgICogZm9yIGV4YW1wbGUgMC41IHdvcmtzIHdlbGwgZm9yIGEgY2FtZXJhIHdpdGggYSBzY2FsZSBvZiAyXG4gICAqL1xuICBzdXJmYWNlTWFwU2NhbGU6IG51bWJlcjtcblxuICAvKipcbiAgICogU3RyZW5ndGggb2YgaGlnaGxpZ2h0cyBmcm9tIG5vcm1hbCBtYXBzXG4gICAqL1xuICBzaGFkZXJIaWdobGlnaHRTdHJlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdHJlbmd0aCBvZiBzaGFkaW5nIGZyb20gbm9ybWFsIG1hcHNcbiAgICovXG4gIHNoYWRlclNoYWRvd1N0cmVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0cmVuZ3RoIG9mIHNwZWN1bGFyIGhpZ2hsaWdodHNcbiAgICovXG4gIHNoYWRlclNwZWN1bGFyU3RyZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogU2l6ZSBvZiBzcGVjdWxhciBoaWdobGlnaHRzLCBsYXJnZXIgbnVtYmVycyBtYWtlIHNtYWxsZXIgaGlnaGxpZ2h0c1xuICAgKi9cbiAgc2hhZGVyU2hpbmluZXNzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhlIGNhbWVyYSBpcyB0aWx0ZWQgYXdheSBmcm9tIGxvb2tpbmcgc3RyYWlnaHQgZG93biwgdGhpcyBtb3Zlc1xuICAgKiBzcGVjdWxhciBoaWdobGlnaHRzIHRvd2FyZHMgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuXG4gICAqL1xuICBzaGFkZXJWaWV3VGlsdDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBRdWFudGl6ZSBzaGFkaW5nIGludG8gYmFuZHMgb2YgdGhpcyBzaXplLCBzZXQgdGhpcyB0byAwIGZvciBzbW9vdGggc2hhZGluZ1xuICAgKi9cbiAgc2hhZGVyQmFuZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiBhbWJpZW50IChnbG9iYWwpIGxpZ2h0IHdoZW4gZmFjaW5nIGF3YXkgZnJvbSB0aGUgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodCB3aGVuIGZhY2luZyB0b3dhcmRzIHRoZSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiBvZiBhbWJpZW50IGxpZ2h0IGluIHJhZGlhbnNcbiAgICovXG4gIGFtYmllbnRMaWdodERpcmVjdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBvZmZzZXQgZm9yIHdhbGwgbGlnaHRpbmdcbiAgICovXG4gIHdhbGxMaWdodGluZ1lPZmZzZXQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzdGFuY2UgYWJvdmUgYm90dG9tIGVkZ2Ugb2Ygd2FsbCBzaGFkb3cgcmVjZWl2ZXJzIGJlZm9yZSBsaWdodCBpc1xuICAgKiB0b3RhbGx5IGN1dCBvZmZcbiAgICovXG4gIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgc3ByaXRlIGFuZCBjaXJjbGUgc2hhZG93cyBjbGltYiB3YWxscywgYXMgYSBmcmFjdGlvbiBvZiB0aGUgbGVuZ3RoXG4gICAqIG9mIHRoZSBzaGFkb3cgdGhhdCByZWFjaGVzIHRoZSB3YWxsXG4gICAqL1xuICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgTGlnaHRpbmdTeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucyA9IHtcbiAgICBsaWdodGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0cnVlLFxuICAgIHNvZnRTaGFkb3dzRW5hYmxlZDogZmFsc2UsXG4gICAgc29mdFNoYWRvd3NBbW91bnQ6IDIsXG4gICAgc3VyZmFjZU1hcHNFbmFibGVkOiB0cnVlLFxuICAgIHN1cmZhY2VNYXBTY2FsZTogMSxcbiAgICBzaGFkZXJIaWdobGlnaHRTdHJlbmd0aDogMC41LFxuICAgIHNoYWRlclNoYWRvd1N0cmVuZ3RoOiAwLjUsXG4gICAgc2hhZGVyU3BlY3VsYXJTdHJlbmd0aDogMSxcbiAgICBzaGFkZXJTaGluaW5lc3M6IDE2LFxuICAgIHNoYWRlclZpZXdUaWx0OiAwLjUsXG4gICAgc2hhZGVyQmFuZGluZzogMC4xLFxuICAgIGFtYmllbnRMaWdodENvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHRTaGFkb3dDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodERpcmVjdGlvbjogMCxcbiAgICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiAtMzAsXG4gICAgd2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2U6IDIwLFxuICAgIHdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IDAuNzUsXG4gIH07XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNvbXBhcmVTdXJmYWNlcyhhOiBTdXJmYWNlPGFueT4sIGI6IFN1cmZhY2U8YW55Pik6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEuekluZGV4IC0gYi56SW5kZXggfHwgYS5wb3NpdGlvbi55ICsgYS5zaXplLnkgLSAoYi5wb3NpdGlvbi55ICsgYi5zaXplLnkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvcHRpb25zOiBMaWdodGluZ1N5c3RlbU9wdGlvbnM7XG5cbiAgcHVibGljIGxpZ2h0czogTGlnaHRbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgbW9zdCByZWNlbnRseSByZW5kZXJlZCBzY3JlZW5cbiAgICovXG4gIHB1YmxpYyBzY3JlZW46IHZlYzIgPSB2ZWMyKCk7XG5cbiAgcHJpdmF0ZSBncm91bmRSZWNlaXZlcnM6IEdyb3VuZFJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSB3YWxsUmVjZWl2ZXJzOiBXYWxsUmVjZWl2ZXJbXSA9IFtdO1xuICBwcml2YXRlIHJlZ2lvbkNhc3RlcnM6IFJlZ2lvbkNhc3RlcltdID0gW107XG4gIHByaXZhdGUgc3ByaXRlQ2FzdGVyczogU3ByaXRlQ2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBjaXJjbGVDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIGFjdG9yczogQWN0b3JbXSA9IFtdO1xuXG4gIHByaXZhdGUgbGlnaHRNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgbGlnaHRNYXBDYW52YXMgPSB0aGlzLmxpZ2h0TWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzcGVjdWxhckxpZ2h0TWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNwZWN1bGFyTGlnaHRNYXBDYW52YXMgPSB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNjZW5lTm9ybWFsTWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNjZW5lTm9ybWFsTWFwQ2FudmFzID0gdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc2NlbmVTcGVjdWxhck1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzY2VuZVNwZWN1bGFyTWFwQ2FudmFzID0gdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBnbENvbnRleHQ6IEdsQ29udGV4dCB8IG51bGw7XG4gIHByaXZhdGUgc2hhZGVyUGFzczogU2hhZGVyUGFzcyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNwZWN1bGFyVmlzaWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBgZ2xDb250ZXh0YCBsZXRzIHRoZSBsaWdodGluZyBzeXN0ZW0gc2hhcmUgYSBXZWJHTCBjb250ZXh0IHdpdGggb3RoZXJcbiAgICogc3lzdGVtcywgb3RoZXJ3aXNlIGl0IHdpbGwgY3JlYXRlIGl0cyBvd25cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBvcHRpb25zPzogUGFydGlhbDxMaWdodGluZ1N5c3RlbU9wdGlvbnM+LFxuICAgIGdsQ29udGV4dD86IEdsQ29udGV4dFxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBMaWdodGluZ1N5c3RlbS5ERUZBVUxUX09QVElPTlMsXG4gICAgICBvcHRpb25zID8/IHt9XG4gICAgKTtcbiAgICB0aGlzLmdsQ29udGV4dCA9IGdsQ29udGV4dCA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIGdyb3VuZCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBzaGFkb3dzXG4gICAqL1xuICBwdWJsaWMgYWRkR3JvdW5kKG9wdGlvbnM6IEdyb3VuZFJlY2VpdmVyT3B0aW9ucyk6IEdyb3VuZFJlY2VpdmVyIHtcbiAgICBjb25zdCBncm91bmQgPSBuZXcgR3JvdW5kUmVjZWl2ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMucHVzaChncm91bmQpO1xuXG4gICAgcmV0dXJuIGdyb3VuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBzb2xpZCB3YWxsLCBtYWRlIGZyb20gYSBsaXQgZnJvbnQgZmFjZSwgYW4gdW5saXQgdG9wLCBhbmQgYSBmb290cHJpbnRcbiAgICogdGhhdCBjYXN0cyBzaGFkb3dzXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbChvcHRpb25zOiBXYWxsT3B0aW9ucyk6IFdhbGwge1xuICAgIHJldHVybiBuZXcgV2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBtb3Zpbmcgb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIGNhc3RzIGEgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkQWN0b3Iob3B0aW9uczogQWN0b3JPcHRpb25zIHwgU3ByaXRlQWN0b3JPcHRpb25zKTogQWN0b3Ige1xuICAgIGNvbnN0IGFjdG9yID0gbmV3IEFjdG9yKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuYWN0b3JzLnB1c2goYWN0b3IpO1xuXG4gICAgcmV0dXJuIGFjdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpZ2h0XG4gICAqL1xuICBwdWJsaWMgYWRkTGlnaHQob3B0aW9uczogTGlnaHRPcHRpb25zKTogTGlnaHQge1xuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IExpZ2h0KHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMubGlnaHRzLnB1c2gobGlnaHQpO1xuXG4gICAgcmV0dXJuIGxpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSBvciBzcHJpdGUgdGhhdCByZWNlaXZlcyB3YWxsIHNoYWRvd3NcbiAgICpcbiAgICogVGhpcyBpcyB3aGF0IGBhZGRXYWxsKClgIGFuZCBgYWRkQWN0b3IoKWAgdXNlIHRvIGNyZWF0ZSB0aGVpciBzdXJmYWNlc1xuICAgKi9cbiAgcHVibGljIGFkZFdhbGxSZWNlaXZlcihvcHRpb25zOiBXYWxsUmVjZWl2ZXJPcHRpb25zKTogV2FsbFJlY2VpdmVyIHtcbiAgICBjb25zdCB3YWxsID0gbmV3IFdhbGxSZWNlaXZlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMucHVzaCh3YWxsKTtcblxuICAgIHJldHVybiB3YWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIHBvbHlnb25hbCBzaGFkb3dzXG4gICAqL1xuICBwdWJsaWMgYWRkUmVnaW9uQ2FzdGVyKG9wdGlvbnM6IFJlZ2lvbkNhc3Rlck9wdGlvbnMpOiBSZWdpb25DYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBSZWdpb25DYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYSByb3RhdGVkIGFuZCBzdHJldGNoZWQgaW1hZ2UgYXMgYSBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRTcHJpdGVDYXN0ZXIob3B0aW9uczogU3ByaXRlQ2FzdGVyT3B0aW9ucyk6IFNwcml0ZUNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IFNwcml0ZUNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNwcml0ZUNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhbiBlbGxpcHRpY2FsIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZENpcmNsZUNhc3RlcihvcHRpb25zOiBDaXJjbGVDYXN0ZXJPcHRpb25zKTogQ2lyY2xlQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgQ2lyY2xlQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2lyY2xlQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBvYmplY3Qgb3IgbGlnaHQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKG9iamVjdDogU2NlbmVPYmplY3Q8YW55PiB8IExpZ2h0IHwgQWN0b3IpIHtcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTGlnaHQpIHtcbiAgICAgIHRoaXMubGlnaHRzID0gdGhpcy5saWdodHMuZmlsdGVyKGxpZ2h0ID0+IGxpZ2h0ICE9PSBvYmplY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBBY3Rvcikge1xuICAgICAgdGhpcy5hY3RvcnMgPSB0aGlzLmFjdG9ycy5maWx0ZXIoYWN0b3IgPT4gYWN0b3IgIT09IG9iamVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMgPSB0aGlzLmdyb3VuZFJlY2VpdmVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycyA9IHRoaXMud2FsbFJlY2VpdmVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMucmVnaW9uQ2FzdGVycyA9IHRoaXMucmVnaW9uQ2FzdGVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMuc3ByaXRlQ2FzdGVycyA9IHRoaXMuc3ByaXRlQ2FzdGVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMuY2lyY2xlQ2FzdGVycyA9IHRoaXMuY2lyY2xlQ2FzdGVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHdhbGwgcmVjZWl2ZXJzIGFuZCByZWdpb24gY2FzdGVycyB0aGF0IGFyZSBhZGphY2VudCB0byBlYWNoIG90aGVyXG4gICAqIGFuZCBwZXJmZWN0bHkgY29ubmVjdGVkIG9uIG9uZSBzaWRlLCBzbyB0aGF0IHRoZXJlIGFyZSBmZXdlciB0byBwcm9jZXNzXG4gICAqXG4gICAqIE1lcmdlZCBvYmplY3RzIGFyZSByZW1vdmVkIGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbSBhbmQgY2FuJ3QgYmUgbW92ZWRcbiAgICogYWZ0ZXJ3YXJkcywgc28gdGhpcyBpcyBpbnRlbmRlZCBmb3IgbGV2ZWwgZ2VvbWV0cnkuIFNldCBgbWVyZ2VhYmxlYCB0b1xuICAgKiBmYWxzZSBvbiBhbiBvYmplY3QgdG8gZXhjbHVkZSBpdFxuICAgKlxuICAgKiBgb25NZXJnZWAgaXMgY2FsbGVkIGVhY2ggdGltZSAyIG9iamVjdHMgYXJlIHJlcGxhY2VkIHdpdGggYSBzaW5nbGUgb2JqZWN0LlxuICAgKiBJZiB0aGUgb2JqZWN0cyB3ZXJlIGR1cGxpY2F0ZXMsIHRoZSBtZXJnZWQgb2JqZWN0IGlzIHRoZSBmaXJzdCBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBvcHRpbWlzZShcbiAgICBvbk1lcmdlPzogKFxuICAgICAgbWVyZ2VkOiBXYWxsUmVjZWl2ZXIgfCBSZWdpb25DYXN0ZXIsXG4gICAgICBhOiBXYWxsUmVjZWl2ZXIgfCBSZWdpb25DYXN0ZXIsXG4gICAgICBiOiBXYWxsUmVjZWl2ZXIgfCBSZWdpb25DYXN0ZXJcbiAgICApID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzID0gbWVyZ2U8V2FsbFJlY2VpdmVyPih0aGlzLndhbGxSZWNlaXZlcnMsIG9uTWVyZ2UpO1xuICAgIHRoaXMucmVnaW9uQ2FzdGVycyA9IG1lcmdlPFJlZ2lvbkNhc3Rlcj4odGhpcy5yZWdpb25DYXN0ZXJzLCBvbk1lcmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSBhIFdlYkdMIGNvbnRleHQgd2l0aCBvdGhlciBzeXN0ZW1zLCB0aGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBiZWZvcmVcbiAgICogdGhlIGZpcnN0IHJlbmRlciBhbmQgZG9lcyBub3RoaW5nIGlmIGEgY29udGV4dCBoYXMgYWxyZWFkeSBiZWVuIHNldFxuICAgKi9cbiAgcHVibGljIHVzZUdsQ29udGV4dChnbENvbnRleHQ6IEdsQ29udGV4dCkge1xuICAgIHRoaXMuZ2xDb250ZXh0ID8/PSBnbENvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzaGFkZXIgcGFzcywgaWYgaXQgY2FuIGJlIHVzZWRcbiAgICovXG4gIHByaXZhdGUgZ2V0U2hhZGVyUGFzcygpOiBTaGFkZXJQYXNzIHwgbnVsbCB7XG4gICAgdGhpcy5zaGFkZXJQYXNzID8/PSBuZXcgU2hhZGVyUGFzcyh0aGlzLmdsQ29udGV4dCA/PyBuZXcgR2xDb250ZXh0KCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2hhZGVyUGFzcy5hdmFpbGFibGUgPyB0aGlzLnNoYWRlclBhc3MgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNjcmVlbi1zaXplZCBjYW52YXMgbWF0Y2hlcyB0aGUgc2NyZWVuIHNpemUgYW5kIGNsZWFyIGl0XG4gICAqL1xuICBwcml2YXRlIHJlc2V0Q29udGV4dChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNjYWxlOiBudW1iZXIgPSAxKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLmNlaWwodGhpcy5zY3JlZW4ueCAqIHNjYWxlKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5zY3JlZW4ueSAqIHNjYWxlKTtcblxuICAgIGlmIChjYW52YXMud2lkdGggIT09IHdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbWFwIHJlYWR5IGZvciBkcmF3aW5nIHN1cmZhY2VzIGluIHdvcmxkIGNvb3JkaW5hdGVzLCBhdCB0aGVcbiAgICogcmVzb2x1dGlvbiBvZiB0aGUgc2NlbmUncyBzdXJmYWNlIG1hcHNcbiAgICovXG4gIHByaXZhdGUgcHJlcGFyZVN1cmZhY2VNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGNhbWVyYTogU2NlbmVDYW1lcmFcbiAgKSB7XG4gICAgY29uc3QgeyBzdXJmYWNlTWFwU2NhbGU6IHNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICB0aGlzLnJlc2V0Q29udGV4dChjb250ZXh0LCBzY2FsZSk7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG5cbiAgICBpZiAoc2NhbGUgIT09IDEpIHtcbiAgICAgIGNvbnN0IHsgYSwgYiwgYywgZCwgZSwgZiB9ID0gY29udGV4dC5nZXRUcmFuc2Zvcm0oKTtcblxuICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgIGEgKiBzY2FsZSxcbiAgICAgICAgYiAqIHNjYWxlLFxuICAgICAgICBjICogc2NhbGUsXG4gICAgICAgIGQgKiBzY2FsZSxcbiAgICAgICAgZSAqIHNjYWxlLFxuICAgICAgICBmICogc2NhbGVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIGxpdCBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKlxuICAgKiBJZiBgZHJhd1NjZW5lYCBpcyBwcm92aWRlZCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIHRvIGRyYXcgdGhlIHNjZW5lIHdpdGhcbiAgICogdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZCwgb3RoZXJ3aXNlIHdlJ2xsIGRyYXcgYWxsIG9mIHRoZSBzdXJmYWNlc1xuICAgKiB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBjYW1lcmE6IFNjZW5lQ2FtZXJhLFxuICAgIGRyYXdTY2VuZT86IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWRcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gICAgaWYgKGRyYXdTY2VuZSkge1xuICAgICAgZHJhd1NjZW5lKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdTdXJmYWNlcyhjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLnByZXBhcmUoY2FtZXJhLCB2ZWMyKGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpKTtcbiAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhbGwgb2YgdGhlIHN1cmZhY2VzIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyBkcmF3U3VyZmFjZXMoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3R3JvdW5kKGNvbnRleHQpO1xuICAgIHRoaXMuZHJhd1dhbGxzKGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIGdyb3VuZCwgdGhpcyBpcyB0aGUgcGFydCBvZiB0aGUgc2NlbmUgdGhhdCdzIHVuZGVybmVhdGggZXZlcnl0aGluZ1xuICAgKiBlbHNlXG4gICAqL1xuICBwdWJsaWMgZHJhd0dyb3VuZChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4gZ3JvdW5kLmRyYXcoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHdhbGxzIGFuZCBhY3RvcnMgdGhhdCBzdGFuZCBvbiB0aGUgZ3JvdW5kXG4gICAqL1xuICBwdWJsaWMgZHJhd1dhbGxzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMudXBkYXRlU3VyZmFjZXMoKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZHJhdyhjb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHN1cmZhY2VzIGFyZSB1cCB0byBkYXRlIGFuZCBpbiBkcmF3aW5nIG9yZGVyLCBhY3RvcnMgY29tZSBmaXJzdFxuICAgKiBiZWNhdXNlIG1vdmluZyBhbiBhY3RvciBjYW4gY2hhbmdlIHRoZSBvcmRlclxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVTdXJmYWNlcygpIHtcbiAgICB0aGlzLmFjdG9ycy5mb3JFYWNoKGFjdG9yID0+IGFjdG9yLnN5bmMoKSk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuc29ydChMaWdodGluZ1N5c3RlbS5jb21wYXJlU3VyZmFjZXMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5zb3J0KExpZ2h0aW5nU3lzdGVtLmNvbXBhcmVTdXJmYWNlcyk7XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbGlnaHRtYXBzIGZvciByZW5kZXJpbmdcbiAgICpcbiAgICogSWYgV2ViR0wgaXNuJ3QgYXZhaWxhYmxlIHRoZW4gbGlnaHRtYXBzIGFyZSBsZWZ0IGFzIHRoZXkgYXJlLCBzbyB0aGUgc2NlbmVcbiAgICoga2VlcHMgaXRzIGxhc3QgbGlnaHRpbmcgd2hlbiB0aGUgY29udGV4dCBpcyBsb3N0IGFuZCB0aGVuIHJlc3RvcmVkXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZShjYW1lcmE6IFNjZW5lQ2FtZXJhLCBzY3JlZW46IHZlYzIpIHtcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB0aGlzLnVwZGF0ZVN1cmZhY2VzKCk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5saWdodGluZ0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZXJQYXNzID0gdGhpcy5nZXRTaGFkZXJQYXNzKCk7XG4gICAgaWYgKCFzaGFkZXJQYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhUmVjdGFuZ2xlID0gaW50ZXJ2YWxUb1JlY3RhbmdsZShjYW1lcmEuYm91bmRzKTtcbiAgICBjb25zdCBzdXJmYWNlcyA9IFsuLi50aGlzLmdyb3VuZFJlY2VpdmVycywgLi4udGhpcy53YWxsUmVjZWl2ZXJzXS5maWx0ZXIoXG4gICAgICBzdXJmYWNlID0+IHJlY3RhbmdsZXNJbnRlcnNlY3Qoc3VyZmFjZSwgY2FtZXJhUmVjdGFuZ2xlKVxuICAgICk7XG5cbiAgICBjb25zdCB7IHN1cmZhY2VNYXBzRW5hYmxlZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGhhc05vcm1hbE1hcHMgPVxuICAgICAgc3VyZmFjZU1hcHNFbmFibGVkICYmXG4gICAgICBzdXJmYWNlcy5zb21lKFxuICAgICAgICBzdXJmYWNlID0+IHN1cmZhY2Uubm9ybWFsTWFwIHx8IHN1cmZhY2UuY3VzdG9tRHJhdy5ub3JtYWxNYXBcbiAgICAgICk7XG4gICAgY29uc3QgaGFzU3BlY3VsYXJNYXBzID1cbiAgICAgIHN1cmZhY2VNYXBzRW5hYmxlZCAmJlxuICAgICAgc3VyZmFjZXMuc29tZShcbiAgICAgICAgc3VyZmFjZSA9PiBzdXJmYWNlLnNwZWN1bGFyTWFwIHx8IHN1cmZhY2UuY3VzdG9tRHJhdy5zcGVjdWxhck1hcFxuICAgICAgKTtcblxuICAgIGlmIChoYXNOb3JtYWxNYXBzKSB7XG4gICAgICB0aGlzLmRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmEsIHN1cmZhY2VzKTtcbiAgICB9XG4gICAgaWYgKGhhc1NwZWN1bGFyTWFwcykge1xuICAgICAgdGhpcy5kcmF3U2NlbmVTcGVjdWxhck1hcChjYW1lcmEsIHN1cmZhY2VzKTtcbiAgICB9XG5cbiAgICAvLyBMaWdodHMgb3V0c2lkZSB0aGUgY2FtZXJhIGJvdW5kcyBjYW4ndCBhZmZlY3QgdGhlIHZpc2libGUgc2NlbmVcbiAgICBjb25zdCB2aXNpYmxlTGlnaHRzID0gdGhpcy5saWdodHMuZmlsdGVyKGxpZ2h0ID0+XG4gICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0LmJvdW5kcywgY2FtZXJhUmVjdGFuZ2xlKVxuICAgICk7XG5cbiAgICB2aXNpYmxlTGlnaHRzLmZvckVhY2gobGlnaHQgPT5cbiAgICAgIGxpZ2h0LnByZXBhcmUodGhpcy5yZWdpb25DYXN0ZXJzLCB0aGlzLnNwcml0ZUNhc3RlcnMsIHRoaXMuY2lyY2xlQ2FzdGVycylcbiAgICApO1xuXG4gICAgc2hhZGVyUGFzcy5yZW5kZXIoe1xuICAgICAgY2FtZXJhLFxuICAgICAgc2NyZWVuLFxuICAgICAgbGlnaHRzOiB2aXNpYmxlTGlnaHRzLFxuICAgICAgYWxsTGlnaHRzOiB0aGlzLmxpZ2h0cyxcbiAgICAgIHN1cmZhY2VzOiB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodHMoc3VyZmFjZXMpLFxuICAgICAgbm9ybWFsTWFwOiBoYXNOb3JtYWxNYXBzID8gdGhpcy5zY2VuZU5vcm1hbE1hcENhbnZhcyA6IG51bGwsXG4gICAgICBzcGVjdWxhck1hcDogaGFzU3BlY3VsYXJNYXBzID8gdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ2FudmFzIDogbnVsbCxcbiAgICAgIHN1cmZhY2VNYXBGaWx0ZXI6XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdXJmYWNlTWFwU2NhbGUgPCAxICYmIHRoaXMub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWRcbiAgICAgICAgICA/ICdsaW5lYXInXG4gICAgICAgICAgOiAnbmVhcmVzdCcsXG4gICAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IHRoaXMub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiB0aGlzLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldCxcbiAgICAgIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiB0aGlzLm9wdGlvbnMud2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2UsXG4gICAgICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiB0aGlzLm9wdGlvbnMud2FsbFNoYWRvd0xlbmd0aEZhY3RvcixcbiAgICAgIGhpZ2hsaWdodFN0cmVuZ3RoOiB0aGlzLm9wdGlvbnMuc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGgsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogdGhpcy5vcHRpb25zLnNoYWRlclNoYWRvd1N0cmVuZ3RoLFxuICAgICAgc3BlY3VsYXJTdHJlbmd0aDogdGhpcy5vcHRpb25zLnNoYWRlclNwZWN1bGFyU3RyZW5ndGgsXG4gICAgICBzaGluaW5lc3M6IHRoaXMub3B0aW9ucy5zaGFkZXJTaGluaW5lc3MsXG4gICAgICB2aWV3VGlsdDogdGhpcy5vcHRpb25zLnNoYWRlclZpZXdUaWx0LFxuICAgICAgYmFuZGluZzogdGhpcy5vcHRpb25zLnNoYWRlckJhbmRpbmcsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLmxpZ2h0TWFwQ29udGV4dCk7XG4gICAgdGhpcy5saWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHNoYWRlclBhc3MuY2FudmFzLCAwLCAwKTtcblxuICAgIHRoaXMuc3BlY3VsYXJWaXNpYmxlID0gaGFzU3BlY3VsYXJNYXBzO1xuICAgIGlmIChoYXNTcGVjdWxhck1hcHMpIHtcbiAgICAgIHNoYWRlclBhc3Muc2hvd1NwZWN1bGFyKHNjcmVlbik7XG5cbiAgICAgIC8vIEhpZ2hsaWdodHMgY2FuIG9ubHkgYXBwZWFyIG9uIHRoZSBzdXJmYWNlcyBpbiB0aGUgbGlnaHQgbWFwXG4gICAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0KTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuc2F2ZSgpO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2Uoc2hhZGVyUGFzcy5jYW52YXMsIDAsIDApO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgY2FudmFzIHNob3dpbmcgd2hpY2ggc3VyZmFjZSBpcyBhdCBlYWNoIHBpeGVsLCBmb3IgZGVidWdnaW5nXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGRyYXduIHN0cmFpZ2h0IGF3YXksIGJlY2F1c2UgdGhlIGNhbnZhcyBpcyByZXVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXRTdXJmYWNlTWFwQ2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICB0aGlzLnNoYWRlclBhc3M/LnNob3dTdXJmYWNlcyh0aGlzLnNjcmVlbik7XG5cbiAgICByZXR1cm4gdGhpcy5zaGFkZXJQYXNzPy5jYW52YXMgPz8gdGhpcy5saWdodE1hcENhbnZhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBhbWJpZW50IGxpZ2h0IG9uIGVhY2ggc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBbWJpZW50TGlnaHRzKHN1cmZhY2VzOiBTdXJmYWNlPGFueT5bXSk6IFNoYWRlclN1cmZhY2VbXSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdmVjMi5yb3QodmVjMigxLCAwKSwgdGhpcy5vcHRpb25zLmFtYmllbnRMaWdodERpcmVjdGlvbik7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gcGFyc2VDb2xvcih0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0Q29sb3VyKTtcbiAgICBjb25zdCBzaGFkb3cgPSBwYXJzZUNvbG9yKHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRTaGFkb3dDb2xvdXIpO1xuICAgIGNvbnN0IGhpZ2hsaWdodCA9IHBhcnNlQ29sb3IodGhpcy5vcHRpb25zLmFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91cik7XG5cbiAgICByZXR1cm4gc3VyZmFjZXMubWFwKHN1cmZhY2UgPT4gKHtcbiAgICAgIHN1cmZhY2UsXG4gICAgICBhbWJpZW50TGlnaHQ6XG4gICAgICAgIHN1cmZhY2UgaW5zdGFuY2VvZiBXYWxsUmVjZWl2ZXJcbiAgICAgICAgICA/IHRoaXMuY2FsY3VsYXRlQW1iaWVudExpZ2h0KFxuICAgICAgICAgICAgICBzdXJmYWNlLnN1cmZhY2VOb3JtYWwsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgICAgYW1iaWVudExpZ2h0LFxuICAgICAgICAgICAgICBzaGFkb3csXG4gICAgICAgICAgICAgIGhpZ2hsaWdodFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogYW1iaWVudExpZ2h0LFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFjdHVhbCBjb2xvdXIgb2YgYW1iaWVudCBsaWdodCBiYXNlZCBvbiB0aGUgc3VyZmFjZSBub3JtYWxcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlQW1iaWVudExpZ2h0KFxuICAgIHN1cmZhY2VOb3JtYWw6IHZlYzIsXG4gICAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiB2ZWMyLFxuICAgIGFtYmllbnRMaWdodDogQ29sb3VyLFxuICAgIGFtYmllbnRMaWdodFNoYWRvdzogQ29sb3VyLFxuICAgIGFtYmllbnRMaWdodEhpZ2hsaWdodDogQ29sb3VyXG4gICk6IENvbG91ciB7XG4gICAgaWYgKHZlYzIuZXEoc3VyZmFjZU5vcm1hbCwgdmVjMigpKSkge1xuICAgICAgcmV0dXJuIGFtYmllbnRMaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBkb3QgPSB2ZWMyLmRvdCh2ZWMyLm5vcihzdXJmYWNlTm9ybWFsKSwgYW1iaWVudExpZ2h0RGlyZWN0aW9uKTtcbiAgICBpZiAoZmxvYXRFcXVhbHMoZG90LCAwKSkge1xuICAgICAgcmV0dXJuIGFtYmllbnRMaWdodDtcbiAgICB9XG5cbiAgICBpZiAoZG90IDwgMCkge1xuICAgICAgcmV0dXJuIGxlcnBDb2xvdXIoYW1iaWVudExpZ2h0LCBhbWJpZW50TGlnaHRIaWdobGlnaHQsIC1kb3QpO1xuICAgIH1cblxuICAgIHJldHVybiBsZXJwQ29sb3VyKGFtYmllbnRMaWdodCwgYW1iaWVudExpZ2h0U2hhZG93LCBkb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1cCBzb2Z0IHNoYWRvdyBzZXR0aW5ncyBvbiB0aGUgc3BlY2lmaWVkIGNhbnZhcyBjb250ZXh0XG4gICAqL1xuICBwdWJsaWMgc2V0dXBTb2Z0U2hhZG93cyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMuc29mdFNoYWRvd3NFbmFibGVkICYmXG4gICAgICB0aGlzLm9wdGlvbnMuc29mdFNoYWRvd3NBbW91bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50ID4gMFxuICAgICkge1xuICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9ICdibGFjayc7XG4gICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSB0aGlzLm9wdGlvbnMuc29mdFNoYWRvd3NBbW91bnQ7XG4gICAgICBjb250ZXh0LnNoYWRvd09mZnNldFggPSAwO1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRZID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3ZlcmxheSB0aGUgbGlnaHRtYXAgb250byB0aGUgY29udGV4dFxuICAgKi9cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubGlnaHRpbmdFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodE1hcENhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBTcGVjdWxhciBoaWdobGlnaHRzIGFyZSBhZGRlZCBhZnRlcndhcmRzIHNvIHRoYXQgdGhleSBjYW4gYmUgYnJpZ2h0ZXJcbiAgICAvLyB0aGFuIHRoZSBzY2VuZSB1bmRlcm5lYXRoIHRoZW1cbiAgICBpZiAodGhpcy5zcGVjdWxhclZpc2libGUpIHtcbiAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcGVjdWxhckxpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IG5vcm1hbCBtYXBzIGZvciBzdXJmYWNlcyBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHByaXZhdGUgZHJhd1NjZW5lTm9ybWFsTWFwKGNhbWVyYTogU2NlbmVDYW1lcmEsIHN1cmZhY2VzOiBTdXJmYWNlPGFueT5bXSkge1xuICAgIHRoaXMucHJlcGFyZVN1cmZhY2VNYXAodGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQsIGNhbWVyYSk7XG5cbiAgICBzdXJmYWNlcy5mb3JFYWNoKHN1cmZhY2UgPT4ge1xuICAgICAgc3VyZmFjZS5kcmF3Tm9ybWFsTWFwKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHNwZWN1bGFyIG1hcHMgZm9yIHN1cmZhY2VzIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U2NlbmVTcGVjdWxhck1hcChcbiAgICBjYW1lcmE6IFNjZW5lQ2FtZXJhLFxuICAgIHN1cmZhY2VzOiBTdXJmYWNlPGFueT5bXVxuICApIHtcbiAgICB0aGlzLnByZXBhcmVTdXJmYWNlTWFwKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQsIGNhbWVyYSk7XG5cbiAgICBzdXJmYWNlcy5mb3JFYWNoKHN1cmZhY2UgPT4ge1xuICAgICAgc3VyZmFjZS5kcmF3U3BlY3VsYXJNYXAodGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5cbmV4cG9ydCB0eXBlIFNjZW5lT2JqZWN0T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdvcmxkIHBvc2l0aW9uIG9mIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHBvc2l0aW9uOiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoaXMgb2JqZWN0IGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICBzaXplOiB2ZWMyO1xuXG4gIC8qKlxuICAgKiBDYW4gdGhpcyBvYmplY3QgYmUgbWVyZ2VkIHdpdGggaXRzIG5laWdoYm91cnMgYnlcbiAgICogYExpZ2h0aW5nU3lzdGVtLm9wdGltaXNlKClgP1xuICAgKi9cbiAgbWVyZ2VhYmxlPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogU29tZXRoaW5nIHRoYXQgaGFzIGJlZW4gcmVnaXN0ZXJlZCB3aXRoIGEgYExpZ2h0aW5nU3lzdGVtYFxuICpcbiAqIFRoZXNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBgTGlnaHRpbmdTeXN0ZW0uYWRkLi4uKClgIG1ldGhvZHMgYW5kIGFyZSB1c2VkXG4gKiB0byBjaGFuZ2Ugb3IgcmVtb3ZlIHRoZSBvYmplY3QgbGF0ZXIgb25cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjZW5lT2JqZWN0PE9wdGlvbnMgZXh0ZW5kcyBTY2VuZU9iamVjdE9wdGlvbnM+IHtcbiAgcHJvdGVjdGVkIGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbTtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYzI7XG4gIHB1YmxpYyBzaXplOiB2ZWMyO1xuICBwdWJsaWMgbWVyZ2VhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcml2YXRlIHJlbW92ZUNhbGxiYWNrczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgdGhpcy5saWdodGluZyA9IGxpZ2h0aW5nO1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweShvcHRpb25zLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBvYmplY3QgdG8gYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgc2l6ZSBvZiB0aGlzIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHJlc2l6ZShzaXplOiB2ZWMyKSB7XG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkoc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNvbWUgb2YgdGhlIG9wdGlvbnMgZm9yIHRoaXMgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc2V0KG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4pIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgKHRoaXMgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYzIuY3B5KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHRoaXMuc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhpcyBvYmplY3QgaXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIG9uUmVtb3ZlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgb2JqZWN0IGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLmxpZ2h0aW5nLnJlbW92ZSh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUNhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgR2xDb250ZXh0LFxuICBHbFByb2dyYW0sXG4gIEdsUmVuZGVyVGFyZ2V0LFxuICBTY2VuZUNhbWVyYSxcbiAgU2NlbmVJbWFnZSxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IExpZ2h0IH0gZnJvbSAnLi9MaWdodCc7XG5pbXBvcnQgeyBHcm91bmRSZWNlaXZlciwgU3VyZmFjZSwgV2FsbFJlY2VpdmVyIH0gZnJvbSAnLi9TdXJmYWNlJztcbmltcG9ydCBkaWZmdXNlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2RpZmZ1c2UuZnJhZy5nbHNsJyk7XG5pbXBvcnQgbWFza1NoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9tYXNrLmZyYWcuZ2xzbCcpO1xuaW1wb3J0IHNwZWN1bGFyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3NwZWN1bGFyLmZyYWcuZ2xzbCcpO1xuaW1wb3J0IHN1cmZhY2VTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvc3VyZmFjZS5nbHNsJyk7XG5cbi8qKlxuICogQSBzdXJmYWNlIHRoYXQncyB2aXNpYmxlIGluIHRoZSBzY2VuZSwgYW5kIGl0cyBhbWJpZW50IGxpZ2h0XG4gKi9cbmV4cG9ydCB0eXBlIFNoYWRlclN1cmZhY2UgPSB7XG4gIHN1cmZhY2U6IFN1cmZhY2U8YW55PjtcbiAgYW1iaWVudExpZ2h0OiBDb2xvdXI7XG59O1xuXG4vKipcbiAqIEV2ZXJ5dGhpbmcgdGhhdCB0aGUgc2hhZGVycyBuZWVkIGZvciByZW5kZXJpbmcgYSBmcmFtZVxuICovXG5leHBvcnQgdHlwZSBTaGFkZXJTY2VuZSA9IHtcbiAgY2FtZXJhOiBTY2VuZUNhbWVyYTtcbiAgc2NyZWVuOiB2ZWMyO1xuICBsaWdodHM6IExpZ2h0W107XG4gIGFsbExpZ2h0czogTGlnaHRbXTtcbiAgc3VyZmFjZXM6IFNoYWRlclN1cmZhY2VbXTtcbiAgbm9ybWFsTWFwOiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgc3BlY3VsYXJNYXA6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBzdXJmYWNlTWFwRmlsdGVyOiAnbmVhcmVzdCcgfCAnbGluZWFyJztcbiAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiBib29sZWFuO1xuICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiBudW1iZXI7XG4gIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiBudW1iZXI7XG4gIHdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IG51bWJlcjtcbiAgaGlnaGxpZ2h0U3RyZW5ndGg6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgc3BlY3VsYXJTdHJlbmd0aDogbnVtYmVyO1xuICBzaGluaW5lc3M6IG51bWJlcjtcbiAgdmlld1RpbHQ6IG51bWJlcjtcbiAgYmFuZGluZzogbnVtYmVyO1xufTtcblxuZW51bSBUZXh0dXJlVW5pdCB7XG4gIE5vcm1hbE1hcCxcbiAgU3BlY3VsYXJNYXAsXG4gIFN1cmZhY2VNYXAsXG4gIExpZ2h0TWFwLFxuICBSZWdpb25TaGFkb3dNYXAsXG4gIE9iamVjdFNoYWRvd01hcCxcbn1cblxuLyoqXG4gKiBUaGUgYWxwaGEgY2hhbm5lbCBvZiB0aGUgc3VyZmFjZSBtYXAgc2F5cyB3aGF0J3MgYXQgZWFjaCBwaXhlbCwgdGhlc2UgdmFsdWVzXG4gKiBhcmUgYWxzbyBpbiB0aGUgc2hhZGVyc1xuICovXG5lbnVtIFN1cmZhY2VUeXBlIHtcbiAgTm9uZSA9IDAsXG4gIEdyb3VuZCA9IDAuMjUsXG4gIFByb2plY3RlZFdhbGwgPSAwLjUsXG4gIEZsYXRXYWxsID0gMC43NSxcbiAgVW5saXQgPSAxLFxufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGxpZ2h0aW5nIGZvciBhIHNjZW5lXG4gKlxuICogU3VyZmFjZXMgYXJlIGRyYXduIGludG8gYSBzdXJmYWNlIG1hcCB3aXRob3V0IGFueSBibGVuZGluZywgc28gZWFjaCBwaXhlbFxuICogYmVsb25ncyB0byBleGFjdGx5IG9uZSBzdXJmYWNlIGFuZCBrbm93cyB3aGVyZSB0aGF0IHN1cmZhY2UgbWVldHMgdGhlIGdyb3VuZC5cbiAqIFRoaXMgbWVhbnMgb3ZlcmxhcHBpbmcgc3VyZmFjZXMgZG9uJ3QgbmVlZCBhbnkgc3BlY2lhbCBoYW5kbGluZy5cbiAqXG4gKiBFYWNoIGxpZ2h0IGlzIHRoZW4gc2hhZGVkIHNlcGFyYXRlbHkgYW5kIGJsZW5kZWQgaW50byBhIGxpZ2h0IG1hcCwgc28gYVxuICogbGlnaHQncyBidW1wcyBvbmx5IGFmZmVjdCB0aGF0IGxpZ2h0LiBTcGVjdWxhciBoaWdobGlnaHRzIGFyZSBhZGRlZCB1cCBpbiBhXG4gKiBzZXBhcmF0ZSBidWZmZXIsIGJlY2F1c2UgdGhleSBuZWVkIHRvIGJlIGJyaWdodGVyIHRoYW4gdGhlIHNjZW5lXG4gKi9cbmV4cG9ydCBjbGFzcyBTaGFkZXJQYXNzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9PVF9TQ0FMRSA9IDQ7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPT1RfTUFYID0gNjU1MzU7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9TSEFET1dfQklBUyA9IDI1NTtcblxuICBwcml2YXRlIGNvbnRleHQ6IEdsQ29udGV4dDtcblxuICBwcml2YXRlIGluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBtYXNrUHJvZ3JhbTogR2xQcm9ncmFtO1xuICBwcml2YXRlIGRpZmZ1c2VQcm9ncmFtOiBHbFByb2dyYW07XG4gIHByaXZhdGUgc3BlY3VsYXJQcm9ncmFtOiBHbFByb2dyYW07XG5cbiAgcHJpdmF0ZSB0ZXh0dXJlczogUmVjb3JkPFxuICAgIEV4Y2x1ZGU8VGV4dHVyZVVuaXQsIFRleHR1cmVVbml0LlN1cmZhY2VNYXA+LFxuICAgIFdlYkdMVGV4dHVyZVxuICA+O1xuICBwcml2YXRlIHN1cmZhY2VUYXJnZXQ6IEdsUmVuZGVyVGFyZ2V0O1xuICBwcml2YXRlIHNwZWN1bGFyVGFyZ2V0OiBHbFJlbmRlclRhcmdldDtcblxuICAvKipcbiAgICogVGhlIGdyYWRpZW50IGZvciBlYWNoIGxpZ2h0IG9ubHkgbmVlZHMgdXBsb2FkaW5nIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgcHJpdmF0ZSBsaWdodFRleHR1cmVzID0gbmV3IE1hcDxcbiAgICBMaWdodCxcbiAgICB7IHRleHR1cmU6IFdlYkdMVGV4dHVyZTsgdmVyc2lvbjogbnVtYmVyIH1cbiAgPigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0OiBHbENvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29udGV4dC5vbkluaXRpYWxpc2UoZ2wgPT4gdGhpcy5pbml0aWFsaXNlKGdsKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG91dHB1dCBvZiB0aGUgbW9zdCByZWNlbnQgcGFzc1xuICAgKi9cbiAgcHVibGljIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuY2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzaGFkZXJzIGNhbiBiZSB1c2VkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZCAmJiB0aGlzLmNvbnRleHQuYXZhaWxhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXNlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJlcGVuZCA9IChzb3VyY2U6IHN0cmluZykgPT4gYCR7c3VyZmFjZVNoYWRlcn1cXG4ke3NvdXJjZX1gO1xuXG4gICAgICB0aGlzLm1hc2tQcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0obWFza1NoYWRlcik7XG4gICAgICB0aGlzLmRpZmZ1c2VQcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0ocHJlcGVuZChkaWZmdXNlU2hhZGVyKSk7XG4gICAgICB0aGlzLnNwZWN1bGFyUHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKFxuICAgICAgICBwcmVwZW5kKHNwZWN1bGFyU2hhZGVyKVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMaWdodGluZyBoYXMgYmVlbiBkaXNhYmxlZCcsIGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dHVyZXMgPSB7XG4gICAgICBbVGV4dHVyZVVuaXQuTm9ybWFsTWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5TcGVjdWxhck1hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuTGlnaHRNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0LlJlZ2lvblNoYWRvd01hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuT2JqZWN0U2hhZG93TWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICB9O1xuICAgIHRoaXMuc3VyZmFjZVRhcmdldCA9IHRoaXMuY29udGV4dC5jcmVhdGVSZW5kZXJUYXJnZXQoKTtcbiAgICB0aGlzLnNwZWN1bGFyVGFyZ2V0ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJlbmRlclRhcmdldCgpO1xuICAgIHRoaXMubGlnaHRUZXh0dXJlcyA9IG5ldyBNYXAoKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZCBhbiBpbWFnZSB0byBvbmUgb2YgdGhlIHNoYXJlZCB0ZXh0dXJlc1xuICAgKi9cbiAgcHJpdmF0ZSB1cGxvYWQoXG4gICAgdW5pdDogRXhjbHVkZTxUZXh0dXJlVW5pdCwgVGV4dHVyZVVuaXQuU3VyZmFjZU1hcD4sXG4gICAgaW1hZ2U6IFNjZW5lSW1hZ2UsXG4gICAgZmlsdGVyOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5jb250ZXh0LnVwbG9hZCh1bml0LCB0aGlzLnRleHR1cmVzW3VuaXRdLCBpbWFnZSwgZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEgbGlnaHQncyBncmFkaWVudCwgdXBsb2FkaW5nIGl0IGlmIGl0IGhhcyBjaGFuZ2VkXG4gICAqL1xuICBwcml2YXRlIGJpbmRMaWdodChnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBsaWdodDogTGlnaHQsIGZpbHRlcjogbnVtYmVyKSB7XG4gICAgbGV0IGNhY2hlZCA9IHRoaXMubGlnaHRUZXh0dXJlcy5nZXQobGlnaHQpO1xuICAgIGlmICghY2FjaGVkKSB7XG4gICAgICBjYWNoZWQgPSB7IHRleHR1cmU6IGdsLmNyZWF0ZVRleHR1cmUoKSEsIHZlcnNpb246IC0xIH07XG4gICAgICB0aGlzLmxpZ2h0VGV4dHVyZXMuc2V0KGxpZ2h0LCBjYWNoZWQpO1xuICAgIH1cblxuICAgIGlmIChjYWNoZWQudmVyc2lvbiA9PT0gbGlnaHQubGlnaHRNYXBWZXJzaW9uKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVGV4dHVyZVVuaXQuTGlnaHRNYXAsIGNhY2hlZC50ZXh0dXJlLCBmaWx0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkKFxuICAgICAgICBUZXh0dXJlVW5pdC5MaWdodE1hcCxcbiAgICAgICAgY2FjaGVkLnRleHR1cmUsXG4gICAgICAgIGxpZ2h0LmxpZ2h0Q2FudmFzLFxuICAgICAgICBmaWx0ZXJcbiAgICAgICk7XG4gICAgICBjYWNoZWQudmVyc2lvbiA9IGxpZ2h0LmxpZ2h0TWFwVmVyc2lvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yZ2V0IGFib3V0IHRleHR1cmVzIGZvciBsaWdodHMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgKi9cbiAgcHJpdmF0ZSByZWxlYXNlTGlnaHRzKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGxpZ2h0czogU2V0PExpZ2h0Pikge1xuICAgIHRoaXMubGlnaHRUZXh0dXJlcy5mb3JFYWNoKCh7IHRleHR1cmUgfSwgbGlnaHQpID0+IHtcbiAgICAgIGlmICghbGlnaHRzLmhhcyhsaWdodCkpIHtcbiAgICAgICAgZ2wuZGVsZXRlVGV4dHVyZSh0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5saWdodFRleHR1cmVzLmRlbGV0ZShsaWdodCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBvdXRwdXQgYW5kIHRoZSByZW5kZXIgdGFyZ2V0cyBtYXRjaCB0aGUgc2NyZWVuIHNpemVcbiAgICovXG4gIHByaXZhdGUgcmVzaXplKHNjcmVlbjogdmVjMikge1xuICAgIHRoaXMuY29udGV4dC5yZXNpemUoc2NyZWVuKTtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplVGFyZ2V0KHRoaXMuc3VyZmFjZVRhcmdldCwgc2NyZWVuKTtcbiAgICB0aGlzLmNvbnRleHQucmVzaXplVGFyZ2V0KHRoaXMuc3BlY3VsYXJUYXJnZXQsIHNjcmVlbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoYXQgd2UgbmVlZCB0byB3cml0ZSB0byB0aGUgc3VyZmFjZSBtYXAgZm9yIGEgc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBzdXJmYWNlVmFsdWUoc3VyZmFjZTogU3VyZmFjZTxhbnk+LCBzY2VuZTogU2hhZGVyU2NlbmUpOiBudW1iZXJbXSB7XG4gICAgaWYgKHN1cmZhY2UgaW5zdGFuY2VvZiBHcm91bmRSZWNlaXZlcikge1xuICAgICAgcmV0dXJuIFswLCAwLCAwLCBTdXJmYWNlVHlwZS5Hcm91bmRdO1xuICAgIH1cblxuICAgIGNvbnN0IHdhbGwgPSBzdXJmYWNlIGFzIFdhbGxSZWNlaXZlcjtcblxuICAgIGxldCB0eXBlID0gU3VyZmFjZVR5cGUuVW5saXQ7XG4gICAgaWYgKHdhbGwucmVjZWl2ZUxpZ2h0KSB7XG4gICAgICB0eXBlID0gd2FsbC5wcm9qZWN0U2hhZG93c1xuICAgICAgICA/IFN1cmZhY2VUeXBlLlByb2plY3RlZFdhbGxcbiAgICAgICAgOiBTdXJmYWNlVHlwZS5GbGF0V2FsbDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9vdCBwb3NpdGlvbiBpcyBzdG9yZWQgcmVsYXRpdmUgdG8gdGhlIHRvcCBvZiB0aGUgY2FtZXJhJ3Mgdmlld1xuICAgIGNvbnN0IGZvb3QgPSBNYXRoLnJvdW5kKFxuICAgICAgKHdhbGwucG9zaXRpb24ueSArIHdhbGwuc2l6ZS55IC0gc2NlbmUuY2FtZXJhLmJvdW5kcy50b3ApICpcbiAgICAgICAgU2hhZGVyUGFzcy5GT09UX1NDQUxFXG4gICAgKTtcbiAgICBjb25zdCBjbGFtcGVkRm9vdCA9IE1hdGgubWluKE1hdGgubWF4KGZvb3QsIDApLCBTaGFkZXJQYXNzLkZPT1RfTUFYKTtcbiAgICBjb25zdCBiaWFzID0gTWF0aC5taW4od2FsbC5zaGFkb3dCaWFzLCBTaGFkZXJQYXNzLk1BWF9TSEFET1dfQklBUyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5mbG9vcihjbGFtcGVkRm9vdCAvIDI1NikgLyAyNTUsXG4gICAgICAoY2xhbXBlZEZvb3QgJSAyNTYpIC8gMjU1LFxuICAgICAgTWF0aC5yb3VuZChiaWFzKSAvIDI1NSxcbiAgICAgIHR5cGUsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGVhY2ggdmlzaWJsZSBzdXJmYWNlLCB3cml0aW5nIGEgdmFsdWUgdG8gYWxsIG9mIHRoZSBzdXJmYWNlJ3MgcGl4ZWxzXG4gICAqL1xuICBwcml2YXRlIGRyYXdTdXJmYWNlcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZSxcbiAgICBnZXRWYWx1ZTogKGl0ZW06IFNoYWRlclN1cmZhY2UpID0+IG51bWJlcltdXG4gICkge1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMubWFza1Byb2dyYW07XG4gICAgY29uc3QgZmlsdGVyID0gc2NlbmUuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X21hc2ssIEdsQ29udGV4dC5JTUFHRV9VTklUKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzY2VuZS5zdXJmYWNlcykge1xuICAgICAgY29uc3QgeyBzdXJmYWNlIH0gPSBpdGVtO1xuICAgICAgY29uc3QgbWFzayA9IHN1cmZhY2UuZ2V0TWFzaygpO1xuICAgICAgaWYgKG1hc2sgPT09IG51bGwgfHwgc3VyZmFjZS52aXNpYmxlSGVpZ2h0IDw9IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXNrUmVjdGFuZ2xlID0gWzAsIDAsIDEsIDFdO1xuICAgICAgaWYgKG1hc2sgIT09ICdzb2xpZCcpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRJbWFnZShtYXNrLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIFJlcGVhdGVkIGltYWdlcyBhcmUgbGluZWQgdXAgd2l0aCB0aGUgd29ybGQsIHRoZSBzYW1lIGFzIGEgcGF0dGVyblxuICAgICAgICBpZiAoc3VyZmFjZS5yZXBlYXQgJiYgIXN1cmZhY2UuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICAgICAgbWFza1JlY3RhbmdsZSA9IFtcbiAgICAgICAgICAgIHN1cmZhY2UucG9zaXRpb24ueCAvIG1hc2sud2lkdGgsXG4gICAgICAgICAgICBzdXJmYWNlLnBvc2l0aW9uLnkgLyBtYXNrLmhlaWdodCxcbiAgICAgICAgICAgIHN1cmZhY2Uuc2l6ZS54IC8gbWFzay53aWR0aCxcbiAgICAgICAgICAgIHN1cmZhY2Uuc2l6ZS55IC8gbWFzay5oZWlnaHQsXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2aXNpYmxlU2l6ZSA9IHZlYzIoc3VyZmFjZS5zaXplLngsIHN1cmZhY2UudmlzaWJsZUhlaWdodCk7XG4gICAgICBtYXNrUmVjdGFuZ2xlWzNdICo9IHZpc2libGVTaXplLnkgLyBzdXJmYWNlLnNpemUueTtcblxuICAgICAgY29uc3QgdG9wTGVmdCA9IHNjZW5lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHN1cmZhY2UucG9zaXRpb24pO1xuICAgICAgY29uc3QgYm90dG9tUmlnaHQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihcbiAgICAgICAgdmVjMi5hZGQoc3VyZmFjZS5wb3NpdGlvbiwgdmlzaWJsZVNpemUpXG4gICAgICApO1xuXG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VNYXNrLCBtYXNrID09PSAnc29saWQnID8gMCA6IDEpO1xuICAgICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X3ZhbHVlLCBnZXRWYWx1ZShpdGVtKSk7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICAgIHRoaXMubWFza1Byb2dyYW0sXG4gICAgICAgIFtcbiAgICAgICAgICB0b3BMZWZ0LngsXG4gICAgICAgICAgdG9wTGVmdC55LFxuICAgICAgICAgIGJvdHRvbVJpZ2h0LnggLSB0b3BMZWZ0LngsXG4gICAgICAgICAgYm90dG9tUmlnaHQueSAtIHRvcExlZnQueSxcbiAgICAgICAgXSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICBtYXNrUmVjdGFuZ2xlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHVuaWZvcm1zIHRoYXQgYXJlIHRoZSBzYW1lIGZvciBldmVyeSBsaWdodCBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHByaXZhdGUgc2V0U2NlbmVVbmlmb3JtcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHsgcHJvZ3JhbSwgdW5pZm9ybXMgfTogR2xQcm9ncmFtLFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZVxuICApIHtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3Jtcy51X3NjcmVlbiwgc2NlbmUuc2NyZWVuLngsIHNjZW5lLnNjcmVlbi55KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VOb3JtYWxNYXAsIHNjZW5lLm5vcm1hbE1hcCA/IDEgOiAwKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YWxsTGlnaHRpbmdZT2Zmc2V0LCBzY2VuZS53YWxsTGlnaHRpbmdZT2Zmc2V0KTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB1bmlmb3Jtcy51X3dhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlLFxuICAgICAgc2NlbmUud2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2VcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHVuaWZvcm1zLnVfd2FsbFNoYWRvd0xlbmd0aEZhY3RvcixcbiAgICAgIHNjZW5lLndhbGxTaGFkb3dMZW5ndGhGYWN0b3JcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X2JhbmRpbmcsIHNjZW5lLmJhbmRpbmcpO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3NjZW5lTm9ybWFsTWFwLCBUZXh0dXJlVW5pdC5Ob3JtYWxNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3N1cmZhY2VNYXAsIFRleHR1cmVVbml0LlN1cmZhY2VNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X2xpZ2h0TWFwLCBUZXh0dXJlVW5pdC5MaWdodE1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfcmVnaW9uU2hhZG93TWFwLCBUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X29iamVjdFNoYWRvd01hcCwgVGV4dHVyZVVuaXQuT2JqZWN0U2hhZG93TWFwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHVuaWZvcm1zIGZvciBhIGxpZ2h0IGFuZCBkcmF3IGl0cyBib3VuZGluZyBib3hcbiAgICovXG4gIHByaXZhdGUgZHJhd0xpZ2h0KFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgcHJvZ3JhbTogR2xQcm9ncmFtLFxuICAgIGxpZ2h0OiBMaWdodCxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmVcbiAgKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gbGlnaHQuYm91bmRzO1xuICAgIGNvbnN0IHRvcExlZnQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihwb3NpdGlvbik7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbih2ZWMyLmFkZChwb3NpdGlvbiwgc2l6ZSkpO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRSYWRpdXMsIGxpZ2h0LnJhZGl1cyk7XG4gICAgZ2wudW5pZm9ybTFmKHByb2dyYW0udW5pZm9ybXMudV9saWdodEhlaWdodCwgbGlnaHQuaGVpZ2h0KTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICBwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRNYXBTaXplLFxuICAgICAgbGlnaHQucmVnaW9uU2hhZG93Q2FudmFzLndpZHRoXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICBwcm9ncmFtLnVuaWZvcm1zLnVfZm9vdE9yaWdpbixcbiAgICAgIHNjZW5lLmNhbWVyYS5ib3VuZHMudG9wIC0gbGlnaHQucG9zaXRpb24ueVxuICAgICk7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICBwcm9ncmFtLFxuICAgICAgW1xuICAgICAgICB0b3BMZWZ0LngsXG4gICAgICAgIHRvcExlZnQueSxcbiAgICAgICAgYm90dG9tUmlnaHQueCAtIHRvcExlZnQueCxcbiAgICAgICAgYm90dG9tUmlnaHQueSAtIHRvcExlZnQueSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHBvc2l0aW9uLnggLSBsaWdodC5wb3NpdGlvbi54LFxuICAgICAgICBwb3NpdGlvbi55IC0gbGlnaHQucG9zaXRpb24ueSxcbiAgICAgICAgc2l6ZS54LFxuICAgICAgICBzaXplLnksXG4gICAgICBdXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNjZW5lJ3MgbGlnaHQgbWFwIGludG8gdGhlIGNhbnZhcywgYW5kIGFkZCB1cCB0aGUgc2NlbmUnc1xuICAgKiBzcGVjdWxhciBoaWdobGlnaHRzIGlmIGl0IGhhcyBhIHNwZWN1bGFyIG1hcFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihzY2VuZTogU2hhZGVyU2NlbmUpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgaWYgKCFnbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplKHNjZW5lLnNjcmVlbik7XG4gICAgdGhpcy5jb250ZXh0LmludmFsaWRhdGVDYW52YXNlcygpO1xuXG4gICAgY29uc3Qgc3VyZmFjZU1hcEZpbHRlciA9XG4gICAgICBzY2VuZS5zdXJmYWNlTWFwRmlsdGVyID09PSAnbGluZWFyJyA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1Q7XG5cbiAgICBpZiAoc2NlbmUubm9ybWFsTWFwKSB7XG4gICAgICB0aGlzLnVwbG9hZChUZXh0dXJlVW5pdC5Ob3JtYWxNYXAsIHNjZW5lLm5vcm1hbE1hcCwgc3VyZmFjZU1hcEZpbHRlcik7XG4gICAgfVxuXG4gICAgLy8gRWFjaCBwaXhlbCBvZiB0aGUgc3VyZmFjZSBtYXAgYmVsb25ncyB0byBvbmUgc3VyZmFjZSwgc28gdGhlcmUncyBub1xuICAgIC8vIGJsZW5kaW5nIGFuZCBzdXJmYWNlcyBjb3ZlciB3aGF0ZXZlcidzIHVuZGVybmVhdGggdGhlbVxuICAgIGdsLmRpc2FibGUoZ2wuQkxFTkQpO1xuICAgIGdsLnVzZVByb2dyYW0odGhpcy5tYXNrUHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMmYoXG4gICAgICB0aGlzLm1hc2tQcm9ncmFtLnVuaWZvcm1zLnVfc2NyZWVuLFxuICAgICAgc2NlbmUuc2NyZWVuLngsXG4gICAgICBzY2VuZS5zY3JlZW4ueVxuICAgICk7XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuc3VyZmFjZVRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCBTdXJmYWNlVHlwZS5Ob25lKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB0aGlzLmRyYXdTdXJmYWNlcyhnbCwgc2NlbmUsICh7IHN1cmZhY2UgfSkgPT5cbiAgICAgIHRoaXMuc3VyZmFjZVZhbHVlKHN1cmZhY2UsIHNjZW5lKVxuICAgICk7XG5cbiAgICAvLyBTdGFydCB0aGUgbGlnaHQgbWFwIHdpdGggdGhlIGFtYmllbnQgbGlnaHQgb24gZWFjaCBzdXJmYWNlXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIHRoaXMuZHJhd1N1cmZhY2VzKGdsLCBzY2VuZSwgKHsgYW1iaWVudExpZ2h0OiB7IHIsIGcsIGIsIGEgfSB9KSA9PiBbXG4gICAgICByIC8gMjU1LFxuICAgICAgZyAvIDI1NSxcbiAgICAgIGIgLyAyNTUsXG4gICAgICBhLFxuICAgIF0pO1xuXG4gICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFxuICAgICAgVGV4dHVyZVVuaXQuU3VyZmFjZU1hcCxcbiAgICAgIHRoaXMuc3VyZmFjZVRhcmdldC50ZXh0dXJlLFxuICAgICAgZ2wuTkVBUkVTVFxuICAgICk7XG5cbiAgICB0aGlzLnNldFNjZW5lVW5pZm9ybXMoZ2wsIHRoaXMuZGlmZnVzZVByb2dyYW0sIHNjZW5lKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB0aGlzLmRpZmZ1c2VQcm9ncmFtLnVuaWZvcm1zLnVfaGlnaGxpZ2h0U3RyZW5ndGgsXG4gICAgICBzY2VuZS5oaWdobGlnaHRTdHJlbmd0aFxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdGhpcy5kaWZmdXNlUHJvZ3JhbS51bmlmb3Jtcy51X3NoYWRvd1N0cmVuZ3RoLFxuICAgICAgc2NlbmUuc2hhZG93U3RyZW5ndGhcbiAgICApO1xuXG4gICAgaWYgKHNjZW5lLnNwZWN1bGFyTWFwKSB7XG4gICAgICB0aGlzLnVwbG9hZChUZXh0dXJlVW5pdC5TcGVjdWxhck1hcCwgc2NlbmUuc3BlY3VsYXJNYXAsIHN1cmZhY2VNYXBGaWx0ZXIpO1xuXG4gICAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLnNwZWN1bGFyUHJvZ3JhbTtcbiAgICAgIHRoaXMuc2V0U2NlbmVVbmlmb3JtcyhnbCwgdGhpcy5zcGVjdWxhclByb2dyYW0sIHNjZW5lKTtcbiAgICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3NjZW5lU3BlY3VsYXJNYXAsIFRleHR1cmVVbml0LlNwZWN1bGFyTWFwKTtcbiAgICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3NwZWN1bGFyU3RyZW5ndGgsIHNjZW5lLnNwZWN1bGFyU3RyZW5ndGgpO1xuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc2hpbmluZXNzLCBzY2VuZS5zaGluaW5lc3MpO1xuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdmlld1RpbHQsIHNjZW5lLnZpZXdUaWx0KTtcblxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnNwZWN1bGFyVGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMSk7XG4gICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXIgPSBzY2VuZS5pbWFnZVNtb290aGluZ0VuYWJsZWQgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUO1xuXG4gICAgdGhpcy5yZWxlYXNlTGlnaHRzKGdsLCBuZXcgU2V0KHNjZW5lLmFsbExpZ2h0cykpO1xuXG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIHNjZW5lLmxpZ2h0cykge1xuICAgICAgdGhpcy5iaW5kTGlnaHQoZ2wsIGxpZ2h0LCBmaWx0ZXIpO1xuICAgICAgdGhpcy51cGxvYWQoXG4gICAgICAgIFRleHR1cmVVbml0LlJlZ2lvblNoYWRvd01hcCxcbiAgICAgICAgbGlnaHQucmVnaW9uU2hhZG93Q2FudmFzLFxuICAgICAgICBmaWx0ZXJcbiAgICAgICk7XG4gICAgICB0aGlzLnVwbG9hZChcbiAgICAgICAgVGV4dHVyZVVuaXQuT2JqZWN0U2hhZG93TWFwLFxuICAgICAgICBsaWdodC5vYmplY3RTaGFkb3dDYW52YXMsXG4gICAgICAgIGZpbHRlclxuICAgICAgKTtcblxuICAgICAgLy8gQmxlbmQgdGhlIHNhbWUgd2F5IGFzIHRoZSAnc2NyZWVuJyBjb21wb3NpdGUgb3BlcmF0aW9uLCBhbmQgbGVhdmUgdGhlXG4gICAgICAvLyBhbHBoYSBjaGFubmVsIGFsb25lXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgZ2wuYmxlbmRGdW5jU2VwYXJhdGUoZ2wuT05FLCBnbC5PTkVfTUlOVVNfU1JDX0NPTE9SLCBnbC5aRVJPLCBnbC5PTkUpO1xuICAgICAgdGhpcy5kcmF3TGlnaHQoZ2wsIHRoaXMuZGlmZnVzZVByb2dyYW0sIGxpZ2h0LCBzY2VuZSk7XG5cbiAgICAgIGlmIChzY2VuZS5zcGVjdWxhck1hcCkge1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuc3BlY3VsYXJUYXJnZXQuZnJhbWVidWZmZXIpO1xuICAgICAgICBnbC5ibGVuZEZ1bmNTZXBhcmF0ZShnbC5PTkUsIGdsLk9ORSwgZ2wuWkVSTywgZ2wuT05FKTtcbiAgICAgICAgdGhpcy5kcmF3TGlnaHQoZ2wsIHRoaXMuc3BlY3VsYXJQcm9ncmFtLCBsaWdodCwgc2NlbmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSB0aGUgY29udGVudHMgb2YgdGhlIGNhbnZhcyB3aXRoIHRoZSBzcGVjdWxhciBoaWdobGlnaHRzIGZyb20gdGhlXG4gICAqIG1vc3QgcmVjZW50IHJlbmRlclxuICAgKi9cbiAgcHVibGljIHNob3dTcGVjdWxhcihzY3JlZW46IHZlYzIpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0LmdsKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd1RleHR1cmUodGhpcy5zcGVjdWxhclRhcmdldC50ZXh0dXJlLCBzY3JlZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiB0aGUgY2FudmFzIHdpdGggdGhlIHN1cmZhY2UgbWFwIGZyb20gdGhlIG1vc3RcbiAgICogcmVjZW50IHJlbmRlclxuICAgKi9cbiAgcHVibGljIHNob3dTdXJmYWNlcyhzY3JlZW46IHZlYzIpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0LmdsKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd1RleHR1cmUodGhpcy5zdXJmYWNlVGFyZ2V0LnRleHR1cmUsIHNjcmVlbik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IGJvdW5kaW5nUmVjdGFuZ2xlLCBkcmF3SW1hZ2VJblJlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgU2NlbmVPYmplY3QsIFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgdGludGVkSW1hZ2UgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbnR5cGUgRHJhd0NhbGxiYWNrID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgU3VyZmFjZU9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBiYWNrZ3JvdW5kIGNvbG91clxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgZm9yIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgaW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgbm9ybWFsIG1hcCwgdXNlZCB3aGVuIHRoZSBzaGFkZXIgaXMgZW5hYmxlZFxuICAgKi9cbiAgbm9ybWFsTWFwPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHNwZWN1bGFyIG1hcCwgdXNlZCB3aGVuIHRoZSBzaGFkZXIgaXMgZW5hYmxlZFxuICAgKi9cbiAgc3BlY3VsYXJNYXA/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU3VyZmFjZXMgYXJlIGRyYXduIGluIG9yZGVyIG9mIHotaW5kZXggYW5kIHRoZW4gYnkgdGhlaXIgYm90dG9tIGVkZ2VcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVwbGFjZSBhbnkgb2YgdGhlIGRlZmF1bHQgZHJhd2luZyBzdGVwcyBmb3IgdGhpcyBzdXJmYWNlLCBmb3Igb2JqZWN0c1xuICAgKiB0aGF0IGFyZW4ndCBhIHNpbmdsZSBpbWFnZVxuICAgKi9cbiAgY3VzdG9tRHJhdz86IHtcbiAgICBpbWFnZT86IERyYXdDYWxsYmFjaztcbiAgICBtYXNrPzogRHJhd0NhbGxiYWNrO1xuICAgIG5vcm1hbE1hcD86IERyYXdDYWxsYmFjaztcbiAgICBzcGVjdWxhck1hcD86IERyYXdDYWxsYmFjaztcbiAgfTtcbn07XG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1cmZhY2U8XG4gIE9wdGlvbnMgZXh0ZW5kcyBTdXJmYWNlT3B0aW9uc1xuPiBleHRlbmRzIFNjZW5lT2JqZWN0PE9wdGlvbnM+IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9STUFMX01BUF9ERUZBVUxUX0NPTE9VUiA9ICcjN2Y3ZmZmJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1BFQ1VMQVJfTUFQX0RFRkFVTFRfQ09MT1VSID0gJ2JsYWNrJztcblxuICBwdWJsaWMgY29sb3VyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGltYWdlOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBub3JtYWxNYXA6IFNjZW5lSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHNwZWN1bGFyTWFwOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyB6SW5kZXg6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBjdXN0b21EcmF3OiBOb25OdWxsYWJsZTxTdXJmYWNlT3B0aW9uc1snY3VzdG9tRHJhdyddPiA9IHt9O1xuXG4gIC8qKlxuICAgKiBXb3JsZCB5LXBvc2l0aW9uIHdoZXJlIHRoaXMgc3VyZmFjZSBzdG9wcywgb3IgbnVsbCB0byBzaG93IGFsbCBvZiBpdFxuICAgKlxuICAgKiBUaGUgcmVzdCBvZiB0aGUgc3VyZmFjZSBpcyBoaWRkZW4gYW5kIGRvZXNuJ3QgcmVjZWl2ZSBhbnkgbGlnaHRpbmcsIHRoaXMgaXNcbiAgICogdXNlZnVsIGZvciBzb21ldGhpbmcgdGhhdCdzIHN0YW5kaW5nIGluIHdhdGVyXG4gICAqL1xuICBwdWJsaWMgY2xpcEJvdHRvbTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIG92ZXJsYXlzOiBEcmF3Q2FsbGJhY2tbXSA9IFtdO1xuXG4gIHByaXZhdGUgY3VzdG9tTWFza0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgaW1hZ2VzIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGlzIHN1cmZhY2UsIG9yIHN0cmV0Y2hlZCB0byBmaXQ/XG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcmVwZWF0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGltYWdlIHdob3NlIGFscGhhIGNoYW5uZWwgZGVjaWRlcyB3aGljaCBwYXJ0cyBvZiB0aGlzIHN1cmZhY2VcbiAgICogcmVjZWl2ZSBsaWdodGluZ1xuICAgKlxuICAgKiBSZXR1cm5zICdzb2xpZCcgaWYgdGhlIHdob2xlIHN1cmZhY2UgcmVjZWl2ZXMgbGlnaHRpbmcsIG9yIG51bGwgaWYgbm90aGluZ1xuICAgKiBkb2VzIChmb3IgZXhhbXBsZSBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXQpXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZ2V0TWFzaygpOiBTY2VuZUltYWdlIHwgJ3NvbGlkJyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBmaWxsQmFja2dyb3VuZChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG91cjogc3RyaW5nKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvdXI7XG4gICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgdGhpcy5zaXplLnlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdJbWFnZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGltYWdlOiBTY2VuZUltYWdlKSB7XG4gICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgaW1hZ2UsIHRoaXMsIHRoaXMucmVwZWF0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgc29tZXRoaW5nIHRvIGJlIGRyYXduIG9uIHRvcCBvZiB0aGlzIHN1cmZhY2UsIGl0J3MgZHJhd24gc3RyYWlnaHQgYWZ0ZXJcbiAgICogdGhlIHN1cmZhY2Ugc28gdGhhdCBhbnl0aGluZyBpbiBmcm9udCBvZiB0aGUgc3VyZmFjZSB3aWxsIGNvdmVyIGl0XG4gICAqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCByZW1vdmVzIHRoZSBvdmVybGF5LiBPdmVybGF5cyBkb24ndCBjaGFuZ2UgdGhlXG4gICAqIHNoYXBlIG9mIHRoZSBzdXJmYWNlLCBhbmQgc3VyZmFjZXMgd2l0aCBvdmVybGF5cyBjYW4ndCBiZSBtZXJnZWRcbiAgICovXG4gIHB1YmxpYyBhZGRPdmVybGF5KGRyYXc6IERyYXdDYWxsYmFjayk6ICgpID0+IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheXMucHVzaChkcmF3KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJsYXlzID0gdGhpcy5vdmVybGF5cy5maWx0ZXIob3ZlcmxheSA9PiBvdmVybGF5ICE9PSBkcmF3KTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3Q29udGVudChjb250ZXh0KTtcbiAgICB0aGlzLm92ZXJsYXlzLmZvckVhY2gob3ZlcmxheSA9PiBvdmVybGF5KGNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJ0IG9mIHRoaXMgc3VyZmFjZSBhYm92ZSBgY2xpcEJvdHRvbWBcbiAgICovXG4gIHB1YmxpYyBnZXQgdmlzaWJsZUhlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNsaXBCb3R0b20gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpemUueTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNsaXBCb3R0b20gLSB0aGlzLnBvc2l0aW9uLnk7XG5cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCAwKSwgdGhpcy5zaXplLnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBkcmF3aW5nIGZ1bmN0aW9uLCBrZWVwaW5nIGl0IGluc2lkZSB0aGUgdmlzaWJsZSBwYXJ0IG9mIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3VmlzaWJsZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGRyYXc6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5jbGlwQm90dG9tID09PSBudWxsKSB7XG4gICAgICBkcmF3KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUueCxcbiAgICAgIHRoaXMudmlzaWJsZUhlaWdodFxuICAgICk7XG4gICAgY29udGV4dC5jbGlwKCk7XG4gICAgZHJhdygpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhpcyBzdXJmYWNlIHdpdGhvdXQgaXRzIG92ZXJsYXlzXG4gICAqL1xuICBwdWJsaWMgZHJhd0NvbnRlbnQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgdGhpcy5kcmF3VmlzaWJsZShjb250ZXh0LCAoKSA9PiB0aGlzLmRyYXdXaG9sZVN1cmZhY2UoY29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdGhlIHBhcnQgb2YgdGhpcyBzdXJmYWNlIHRoYXQncyBoaWRkZW4gYnkgYGNsaXBCb3R0b21gXG4gICAqL1xuICBwdWJsaWMgZHJhd0hpZGRlbihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5jbGlwQm90dG9tID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudmlzaWJsZUhlaWdodDtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHkgKyBoZWlnaHQsIHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSAtIGhlaWdodCk7XG4gICAgY29udGV4dC5jbGlwKCk7XG4gICAgdGhpcy5kcmF3V2hvbGVTdXJmYWNlKGNvbnRleHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3V2hvbGVTdXJmYWNlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcuaW1hZ2UpIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5pbWFnZShjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGlmICh0aGlzLmNvbG91cikge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCB0aGlzLmNvbG91cik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIHRoaXMuaW1hZ2UpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdDb2xvdXJNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGltYWdlOiBTY2VuZUltYWdlIHwgbnVsbCxcbiAgICBkZWZhdWx0Q29sb3VyOiBzdHJpbmdcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIGltYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxsU2hhcGUoY29udGV4dCwgZGVmYXVsdENvbG91cik7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsbCB0aGUgc2hhcGUgb2YgdGhpcyBzdXJmYWNlIHdpdGggYSBjb2xvdXIsIHNvIHRoYXQgYSBzcHJpdGUgZG9lc24ndFxuICAgKiBjb3ZlciB0aGUgbm9ybWFsIG1hcCBvciBzcGVjdWxhciBtYXAgb2Ygd2hhdGV2ZXIncyBiZWhpbmQgaXRcbiAgICovXG4gIHByaXZhdGUgZmlsbFNoYXBlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3VyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXNrID0gdGhpcy5jdXN0b21EcmF3Lm1hc2sgPyAnc29saWQnIDogdGhpcy5nZXRNYXNrKCk7XG5cbiAgICBpZiAobWFzayA9PT0gJ3NvbGlkJykge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCBjb2xvdXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNoYXBlID0gbWFzayAmJiB0aW50ZWRJbWFnZShtYXNrLCBjb2xvdXIpO1xuICAgIGlmIChzaGFwZSkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgc2hhcGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkcmF3Tm9ybWFsTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd1Zpc2libGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5ub3JtYWxNYXApIHtcbiAgICAgICAgdGhpcy5jdXN0b21EcmF3Lm5vcm1hbE1hcChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYXdDb2xvdXJNYXAoXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHRoaXMubm9ybWFsTWFwLFxuICAgICAgICBTdXJmYWNlLk5PUk1BTF9NQVBfREVGQVVMVF9DT0xPVVJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZHJhd1NwZWN1bGFyTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZHJhd1Zpc2libGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5zcGVjdWxhck1hcCkge1xuICAgICAgICB0aGlzLmN1c3RvbURyYXcuc3BlY3VsYXJNYXAoY29udGV4dCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmF3Q29sb3VyTWFwKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB0aGlzLnNwZWN1bGFyTWFwLFxuICAgICAgICBTdXJmYWNlLlNQRUNVTEFSX01BUF9ERUZBVUxUX0NPTE9VUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBjdXN0b20gbWFzaywgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uIG9mIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgcHJvdGVjdGVkIHJlbmRlckN1c3RvbU1hc2soZHJhdzogRHJhd0NhbGxiYWNrKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHRoaXMuY3VzdG9tTWFza0NvbnRleHQgPz89IGRvY3VtZW50XG4gICAgICAuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIC5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmN1c3RvbU1hc2tDb250ZXh0O1xuICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gTWF0aC5jZWlsKHRoaXMuc2l6ZS54KTtcbiAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBNYXRoLmNlaWwodGhpcy5zaXplLnkpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKC10aGlzLnBvc2l0aW9uLngsIC10aGlzLnBvc2l0aW9uLnkpO1xuICAgIGRyYXcoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGV4dC5jYW52YXM7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR3JvdW5kUmVjZWl2ZXJPcHRpb25zID0gU3VyZmFjZU9wdGlvbnM7XG5cbi8qKlxuICogQSByZWN0YW5nbGUgb2YgZ3JvdW5kIHRoYXQgcmVjZWl2ZXMgZ3JvdW5kIHNoYWRvd3NcbiAqXG4gKiBJbWFnZXMgYXJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91bmRSZWNlaXZlciBleHRlbmRzIFN1cmZhY2U8R3JvdW5kUmVjZWl2ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyByZXBlYXQgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IEdyb3VuZFJlY2VpdmVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXNrKCk6IFNjZW5lSW1hZ2UgfCAnc29saWQnIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDdXN0b21NYXNrKHRoaXMuY3VzdG9tRHJhdy5tYXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJ3NvbGlkJztcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBXYWxsUmVjZWl2ZXJPcHRpb25zID0gU3VyZmFjZU9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hpY2ggcGFydHMgb2YgdGhpcyBzdXJmYWNlIHJlY2VpdmVcbiAgICogbGlnaHRpbmcsIHRoZSBkZWZhdWx0IGlzIHRoZSBhbHBoYSBjaGFubmVsIG9mIGBpbWFnZWBcbiAgICovXG4gIG1hc2s/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBpbWFnZSBiZSByZXBlYXRlZCBhY3Jvc3MgdGhlIHN1cmZhY2U/IE90aGVyd2lzZSBpdCB3aWxsIGJlXG4gICAqIHN0cmV0Y2hlZCB0byBmaXRcbiAgICovXG4gIHJlcGVhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIGZhbHNlIGlmIHRoaXMgc3VyZmFjZSBzaG91bGQgb25seSByZWNlaXZlIGFtYmllbnQgbGlnaHQgKHRoaXNcbiAgICogaXMgdXNlZnVsIGZvciB0aGUgdG9wcyBvZiB3YWxscylcbiAgICovXG4gIHJlY2VpdmVMaWdodD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpcmVjdGlvbiB0aGF0IHRoaXMgc3VyZmFjZSBpcyBmYWNpbmcsIGZvciBhbWJpZW50IGxpZ2h0aW5nXG4gICAqL1xuICBzdXJmYWNlTm9ybWFsPzogdmVjMjtcblxuICAvKipcbiAgICogSG93IGZhciB0b3dhcmRzIHRoZSBsaWdodCB0byBsb29rIGZvciBzaGFkb3dzIG9uIHRoZSBncm91bmQsIGluIHdvcmxkXG4gICAqIHVuaXRzLiBUaGlzIHNob3VsZCBiZSBlbm91Z2ggdG8gZ2V0IG91dCBvZiB0aGUgc3VyZmFjZSdzIG93biBzaGFkb3dcbiAgICovXG4gIHNoYWRvd0JpYXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzcHJpdGUgYW5kIGNpcmNsZSBzaGFkb3dzIGNsaW1iIHRoaXMgc3VyZmFjZT8gVGhpcyBzaG91bGQgYmUgZmFsc2VcbiAgICogZm9yIGFueXRoaW5nIHRoYXQgY2FzdHMgb25lIG9mIHRoZXNlIHNoYWRvd3MsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGluIGl0c1xuICAgKiBvd24gc2hhZG93XG4gICAqL1xuICBwcm9qZWN0U2hhZG93cz86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIG9yIHNwcml0ZSB0aGF0IHJlY2VpdmVzIHdhbGwgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgV2FsbFJlY2VpdmVyIGV4dGVuZHMgU3VyZmFjZTxXYWxsUmVjZWl2ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBtYXNrOiBTY2VuZUltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyByZXBlYXQgPSBmYWxzZTtcbiAgcHVibGljIHJlY2VpdmVMaWdodDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzdXJmYWNlTm9ybWFsOiB2ZWMyID0gdmVjMigpO1xuICBwdWJsaWMgc2hhZG93QmlhczogbnVtYmVyID0gMTtcbiAgcHVibGljIHByb2plY3RTaGFkb3dzOiBib29sZWFuID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBXYWxsUmVjZWl2ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1hc2soKTogU2NlbmVJbWFnZSB8ICdzb2xpZCcgfCBudWxsIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckN1c3RvbU1hc2sodGhpcy5jdXN0b21EcmF3Lm1hc2spO1xuICAgIH1cblxuICAgIC8vIEEgYmFja2dyb3VuZCBjb2xvdXIgY292ZXJzIHRoZSB3aG9sZSBzdXJmYWNlXG4gICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICByZXR1cm4gJ3NvbGlkJztcbiAgICB9XG5cbiAgICBjb25zdCBtYXNrID0gdGhpcy5tYXNrID8/IHRoaXMuaW1hZ2U7XG5cbiAgICByZXR1cm4gbWFzayAmJiBtYXNrLndpZHRoID4gMCAmJiBtYXNrLmhlaWdodCA+IDAgPyBtYXNrIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGlzIHN1cmZhY2UgY2FuIGJlIG1lcmdlZCB3aXRoIGFub3RoZXIgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIGNhbk1lcmdlKG90aGVyOiBXYWxsUmVjZWl2ZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBoYXNJbWFnZXMgPVxuICAgICAgdGhpcy5pbWFnZSB8fCB0aGlzLm1hc2sgfHwgdGhpcy5ub3JtYWxNYXAgfHwgdGhpcy5zcGVjdWxhck1hcDtcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lcmdlYWJsZSAmJlxuICAgICAgb3RoZXIubWVyZ2VhYmxlICYmXG4gICAgICB0aGlzLm92ZXJsYXlzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgb3RoZXIub3ZlcmxheXMubGVuZ3RoID09PSAwICYmXG4gICAgICAvLyBOb24tcmVwZWF0aW5nIGltYWdlcyB3b3VsZCBzdHJldGNoIGFjcm9zcyB0aGUgbWVyZ2VkIHN1cmZhY2VcbiAgICAgICh0aGlzLnJlcGVhdCB8fCAhaGFzSW1hZ2VzKSAmJlxuICAgICAgdGhpcy56SW5kZXggPT09IG90aGVyLnpJbmRleCAmJlxuICAgICAgdGhpcy5jb2xvdXIgPT09IG90aGVyLmNvbG91ciAmJlxuICAgICAgdGhpcy5pbWFnZSA9PT0gb3RoZXIuaW1hZ2UgJiZcbiAgICAgIHRoaXMubWFzayA9PT0gb3RoZXIubWFzayAmJlxuICAgICAgdGhpcy5ub3JtYWxNYXAgPT09IG90aGVyLm5vcm1hbE1hcCAmJlxuICAgICAgdGhpcy5zcGVjdWxhck1hcCA9PT0gb3RoZXIuc3BlY3VsYXJNYXAgJiZcbiAgICAgIHRoaXMucmVwZWF0ID09PSBvdGhlci5yZXBlYXQgJiZcbiAgICAgIHRoaXMucmVjZWl2ZUxpZ2h0ID09PSBvdGhlci5yZWNlaXZlTGlnaHQgJiZcbiAgICAgIHZlYzIuZXEodGhpcy5zdXJmYWNlTm9ybWFsLCBvdGhlci5zdXJmYWNlTm9ybWFsKSAmJlxuICAgICAgdGhpcy5zaGFkb3dCaWFzID09PSBvdGhlci5zaGFkb3dCaWFzICYmXG4gICAgICB0aGlzLnByb2plY3RTaGFkb3dzID09PSBvdGhlci5wcm9qZWN0U2hhZG93c1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHN1cmZhY2UgdGhhdCBjb3ZlcnMgdGhpcyBzdXJmYWNlIGFuZCBhbm90aGVyIHN1cmZhY2VcbiAgICovXG4gIHB1YmxpYyBtZXJnZShvdGhlcjogV2FsbFJlY2VpdmVyKTogV2FsbFJlY2VpdmVyIHtcbiAgICByZXR1cm4gbmV3IFdhbGxSZWNlaXZlcih0aGlzLmxpZ2h0aW5nLCB7XG4gICAgICAuLi4odGhpcyBhcyBXYWxsUmVjZWl2ZXIpLFxuICAgICAgLi4uYm91bmRpbmdSZWN0YW5nbGUodGhpcywgb3RoZXIpLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFJlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUmVnaW9uQ2FzdGVyIH0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgV2FsbFJlY2VpdmVyLCBXYWxsUmVjZWl2ZXJPcHRpb25zIH0gZnJvbSAnLi9TdXJmYWNlJztcblxuZXhwb3J0IHR5cGUgV2FsbE9wdGlvbnMgPSBPbWl0PFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxuICAncG9zaXRpb24nIHwgJ3NpemUnIHwgJ3JlY2VpdmVMaWdodCdcbj4gJiB7XG4gIC8qKlxuICAgKiBUaGUgYXJlYSBvZiB0aGUgZ3JvdW5kIHRoYXQgdGhpcyB3YWxsIHN0YW5kcyBvblxuICAgKi9cbiAgZm9vdHByaW50OiBSZWN0YW5nbGU7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHdhbGwncyBmcm9udCBmYWNlXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHNoYWRvd3MgaW5jbHVkZSB0aGUgd2FsbCdzIGZvb3RwcmludD9cbiAgICovXG4gIGluY2x1ZGVSZWdpb25TaGFkb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBlYXJhbmNlIG9mIHRoZSB0b3Agb2YgdGhlIHdhbGwsIGl0IG9ubHkgcmVjZWl2ZXMgYW1iaWVudCBsaWdodFxuICAgKi9cbiAgdG9wPzoge1xuICAgIGNvbG91cj86IHN0cmluZztcbiAgICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuICB9O1xufTtcblxuLyoqXG4gKiBBIHNvbGlkIHdhbGwgaW4gYSAzLzQgdmlld1xuICpcbiAqIFRoaXMgaXMgbWFkZSBmcm9tIGEgZnJvbnQgZmFjZSB0aGF0IHJlY2VpdmVzIGxpZ2h0LCBhIHRvcCB0aGF0IG9ubHkgcmVjZWl2ZXNcbiAqIGFtYmllbnQgbGlnaHQsIGFuZCBhIGZvb3RwcmludCB0aGF0IGNhc3RzIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGwge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RPUF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyByZWFkb25seSBmcm9udDogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgdG9wOiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSBjYXN0ZXI6IFJlZ2lvbkNhc3RlcjtcblxuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFdhbGxPcHRpb25zKSB7XG4gICAgY29uc3QgeyBmb290cHJpbnQsIGhlaWdodCwgaW5jbHVkZVJlZ2lvblNoYWRvdywgdG9wLCAuLi5mcm9udCB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkUmVnaW9uQ2FzdGVyKHtcbiAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBpbmNsdWRlUmVnaW9uU2hhZG93LFxuICAgIH0pO1xuICAgIHRoaXMuZnJvbnQgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgLi4uZnJvbnQsXG4gICAgICAuLi50aGlzLmZyb250UmVjdGFuZ2xlKGZvb3RwcmludCksXG4gICAgfSk7XG4gICAgdGhpcy50b3AgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgekluZGV4OiBvcHRpb25zLnpJbmRleCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBjb2xvdXI6IHRvcD8uY29sb3VyID8/IFdhbGwuREVGQVVMVF9UT1BfQ09MT1VSLFxuICAgICAgaW1hZ2U6IHRvcD8uaW1hZ2UsXG4gICAgICByZWNlaXZlTGlnaHQ6IGZhbHNlLFxuICAgICAgLi4udGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50OiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IGJvdHRvbSA9IGZvb3RwcmludC5wb3NpdGlvbi55ICsgZm9vdHByaW50LnNpemUueTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihmb290cHJpbnQucG9zaXRpb24ueCwgYm90dG9tIC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogdmVjMihmb290cHJpbnQuc2l6ZS54LCB0aGlzLmhlaWdodCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdG9wUmVjdGFuZ2xlKGZvb3RwcmludDogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYzIoZm9vdHByaW50LnBvc2l0aW9uLngsIGZvb3RwcmludC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogZm9vdHByaW50LnNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgd2FsbCBzbyB0aGF0IGl0cyBmb290cHJpbnQgaXMgYXQgYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYzIpIHtcbiAgICBjb25zdCBmb290cHJpbnQgPSB7IHBvc2l0aW9uLCBzaXplOiB0aGlzLmNhc3Rlci5zaXplIH07XG5cbiAgICB0aGlzLmNhc3Rlci5tb3ZlVG8ocG9zaXRpb24pO1xuICAgIHRoaXMuZnJvbnQubW92ZVRvKHRoaXMuZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50KS5wb3NpdGlvbik7XG4gICAgdGhpcy50b3AubW92ZVRvKHRoaXMudG9wUmVjdGFuZ2xlKGZvb3RwcmludCkucG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHdhbGwgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMuZnJvbnQucmVtb3ZlKCk7XG4gICAgdGhpcy50b3AucmVtb3ZlKCk7XG4gICAgdGhpcy5jYXN0ZXIucmVtb3ZlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEdsQ29udGV4dCB9IGZyb20gJy4uL2NvcmUnO1xuZXhwb3J0IHR5cGUgeyBSZWN0YW5nbGUsIFNjZW5lQ2FtZXJhLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5leHBvcnQgeyBBY3RvciB9IGZyb20gJy4vQWN0b3InO1xuZXhwb3J0IHR5cGUgeyBBY3Rvck9wdGlvbnMsIEFjdG9yU2hhZG93LCBTcHJpdGVBY3Rvck9wdGlvbnMgfSBmcm9tICcuL0FjdG9yJztcbmV4cG9ydCB7IENpcmNsZUNhc3RlciwgUmVnaW9uQ2FzdGVyLCBTcHJpdGVDYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5leHBvcnQgdHlwZSB7XG4gIENpcmNsZUNhc3Rlck9wdGlvbnMsXG4gIFJlZ2lvbkNhc3Rlck9wdGlvbnMsXG4gIFNoYWRvd0Nhc3RlcixcbiAgU3ByaXRlQ2FzdGVyT3B0aW9ucyxcbn0gZnJvbSAnLi9DYXN0ZXInO1xuZXhwb3J0IHsgTGlnaHQgfSBmcm9tICcuL0xpZ2h0JztcbmV4cG9ydCB0eXBlIHsgTGlnaHRPcHRpb25zIH0gZnJvbSAnLi9MaWdodCc7XG5leHBvcnQgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuZXhwb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbU9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmV4cG9ydCB7IFNjZW5lT2JqZWN0IH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5leHBvcnQgdHlwZSB7IFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuZXhwb3J0IHsgR3JvdW5kUmVjZWl2ZXIsIFN1cmZhY2UsIFdhbGxSZWNlaXZlciB9IGZyb20gJy4vU3VyZmFjZSc7XG5leHBvcnQgdHlwZSB7XG4gIEdyb3VuZFJlY2VpdmVyT3B0aW9ucyxcbiAgU3VyZmFjZU9wdGlvbnMsXG4gIFdhbGxSZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vU3VyZmFjZSc7XG5leHBvcnQgeyBXYWxsIH0gZnJvbSAnLi9XYWxsJztcbmV4cG9ydCB0eXBlIHsgV2FsbE9wdGlvbnMgfSBmcm9tICcuL1dhbGwnO1xuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCByZWN0YW5nbGVUb0ludGVydmFsIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBTaWRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IE1FUkdFX01BWF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgTUVSR0VfT1JERVIgPSBbJ2R1cGxpY2F0ZScsIFNpZGUuQm90dG9tLCBTaWRlLlJpZ2h0LCBTaWRlLlRvcCwgU2lkZS5MZWZ0XTtcblxudHlwZSBNZXJnZWFibGU8VD4gPSBSZWN0YW5nbGUgJiB7XG4gIGNhbk1lcmdlKG90aGVyOiBUKTogYm9vbGVhbjtcbiAgbWVyZ2Uob3RoZXI6IFQpOiBUO1xufTtcblxudHlwZSBNZXJnZTxUPiA9IFtULCBULCBTaWRlIHwgJ2R1cGxpY2F0ZSddO1xuXG4vKipcbiAqIEZpbmQgcGFpcnMgb2YgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgY2FuIGJlIG1lcmdlZFxuICovXG5mdW5jdGlvbiBmaW5kTWVyZ2VzPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KGl0ZW1zOiBUW10pOiBNZXJnZTxUPltdIHtcbiAgY29uc3QgcmVzdWx0OiBNZXJnZTxUPltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGEgPSByZWN0YW5nbGVUb0ludGVydmFsKGl0ZW1zW2ldKTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBiID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChpdGVtc1tqXSk7XG5cbiAgICAgIGlmICghaXRlbXNbaV0uY2FuTWVyZ2UoaXRlbXNbal0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGFuZCBCIGFyZSB0aGUgc2FtZVxuICAgICAgaWYgKFxuICAgICAgICBhLnRvcCA9PT0gYi50b3AgJiZcbiAgICAgICAgYS5ib3R0b20gPT09IGIuYm90dG9tICYmXG4gICAgICAgIGEubGVmdCA9PT0gYi5sZWZ0ICYmXG4gICAgICAgIGEucmlnaHQgPT09IGIucmlnaHRcbiAgICAgICkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCAnZHVwbGljYXRlJ10pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIGJvdHRvbSBlZGdlIG9mIEFcbiAgICAgIGlmIChhLmJvdHRvbSA9PT0gYi50b3AgJiYgYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS5yaWdodCA9PT0gYi5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkJvdHRvbV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgdG9wIGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEudG9wID09PSBiLmJvdHRvbSAmJiBhLmxlZnQgPT09IGIubGVmdCAmJiBhLnJpZ2h0ID09PSBiLnJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuVG9wXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSByaWdodCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLnJpZ2h0ID09PSBiLmxlZnQgJiYgYS50b3AgPT09IGIudG9wICYmIGEuYm90dG9tID09PSBiLmJvdHRvbSkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlJpZ2h0XSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSBsZWZ0IGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEubGVmdCA9PT0gYi5yaWdodCAmJiBhLnRvcCA9PT0gYi50b3AgJiYgYS5ib3R0b20gPT09IGIuYm90dG9tKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuTGVmdF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogTWVyZ2UgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgcGVyZmVjdGx5IGNvbm5lY3RlZCBvbiBvbmVcbiAqIHNpZGUsIG9yIGFyZSBleGFjdCBkdXBsaWNhdGVzIG9mIGVhY2ggb3RoZXJcbiAqXG4gKiBgb25NZXJnZWAgaXMgY2FsbGVkIGVhY2ggdGltZSAyIGl0ZW1zIGFyZSByZXBsYWNlZCB3aXRoIGEgc2luZ2xlIGl0ZW0uIElmXG4gKiB0aGUgaXRlbXMgd2VyZSBkdXBsaWNhdGVzLCB0aGUgbWVyZ2VkIGl0ZW0gaXMgdGhlIGZpcnN0IGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KFxuICBpdGVtczogVFtdLFxuICBvbk1lcmdlPzogKG1lcmdlZDogVCwgYTogVCwgYjogVCkgPT4gdm9pZFxuKTogVFtdIHtcbiAgLy8gU29ydCBpdGVtcyBieSB5LXBvc2l0aW9uIHRoZW4geC1wb3NpdGlvblxuICBsZXQgcmVzdWx0ID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEucG9zaXRpb24ueSA9PT0gYi5wb3NpdGlvbi55KSB7XG4gICAgICByZXR1cm4gYS5wb3NpdGlvbi54IC0gYi5wb3NpdGlvbi54O1xuICAgIH1cblxuICAgIHJldHVybiBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG4gIH0pO1xuXG4gIGxldCBpID0gMDtcbiAgbGV0IG1lcmdlczogTWVyZ2U8VD5bXTtcbiAgd2hpbGUgKFxuICAgIChtZXJnZXMgPSBmaW5kTWVyZ2VzKHJlc3VsdCkpLmxlbmd0aCA+IDAgJiZcbiAgICBpKysgPCBNRVJHRV9NQVhfSVRFUkFUSU9OU1xuICApIHtcbiAgICAvLyBNZXJnZSBpdGVtcyBpbiBhIHNwZWNpZmljIG9yZGVyIChlLmcuIGl0ZW1zIHRoYXQgY29ubmVjdCBvbiB0aGUgYm90dG9tXG4gICAgLy8gZmFjZSBmaXJzdCwgb3IgaXRlbXMgdGhhdCBhcmUgZXhhY3QgZHVwbGljYXRlcyBmaXJzdCwgZXRjLilcbiAgICBtZXJnZXMuc29ydChcbiAgICAgIChhLCBiKSA9PiBNRVJHRV9PUkRFUi5pbmRleE9mKGFbMl0pIC0gTUVSR0VfT1JERVIuaW5kZXhPZihiWzJdKVxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IFthLCBiLCBzaWRlXSBvZiBtZXJnZXMpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaXRlbXMgc3RpbGwgZXhpc3QgKHRoZXkgbWlnaHQgaGF2ZSBiZWVuIG1lcmdlZCBhbmRcbiAgICAgIC8vIHJlbW92ZWQgaW4gYSBwcmV2aW91cyBpdGVyYXRpb24pXG4gICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhhKSB8fCAhcmVzdWx0LmluY2x1ZGVzKGIpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2lkZSA9PT0gJ2R1cGxpY2F0ZScpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGIpO1xuICAgICAgICBvbk1lcmdlPy4oYSwgYSwgYik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXJnZWQgPSBhLm1lcmdlKGIpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGEgJiYgaXRlbSAhPT0gYik7XG4gICAgICByZXN1bHQucHVzaChtZXJnZWQpO1xuICAgICAgb25NZXJnZT8uKG1lcmdlZCwgYSwgYik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG5leHBvcnQgdHlwZSBMaW5lID0ge1xuICBzdGFydDogdmVjMjtcbiAgZW5kOiB2ZWMyO1xufTtcblxuZXhwb3J0IGVudW0gU2VjdG9yMWQge1xuICBCZWZvcmUgPSAnYmVmb3JlJyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIEFmdGVyID0gJ2FmdGVyJyxcbn1cblxuZXhwb3J0IGVudW0gU2VjdG9yMmQge1xuICBUb3BMZWZ0ID0gJ3RvcC1sZWZ0JyxcbiAgVG9wID0gJ3RvcCcsXG4gIFRvcFJpZ2h0ID0gJ3RvcC1yaWdodCcsXG4gIExlZnQgPSAnbGVmdCcsXG4gIEluc2lkZSA9ICdpbnNpZGUnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbUxlZnQgPSAnYm90dG9tLWxlZnQnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgQm90dG9tUmlnaHQgPSAnYm90dG9tLXJpZ2h0Jyxcbn1cblxuZXhwb3J0IHR5cGUgUG9seWdvblZlcnRpY2VzID0gKFxuICB8IHZlYzJcbiAgfCAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZClcbilbXTtcblxuZXhwb3J0IGVudW0gU2lkZSB7XG4gIFRvcCA9ICd0b3AnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBMZWZ0ID0gJ2xlZnQnLFxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBJbnRlcnZhbDFkLCBJbnRlcnZhbDJkLCBTY2VuZUltYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBMaW5lLCBQb2x5Z29uVmVydGljZXMsIFNlY3RvcjFkLCBTZWN0b3IyZCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbGluZSBzZWdtZW50J3Mgbm9ybWFsIGlzIGZhY2luZyB0b3dhcmRzIGEgcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJc0ZhY2luZyhsaW5lOiBMaW5lLCBwb3NpdGlvbjogdmVjMikge1xuICBjb25zdCBlZGdlID0gdmVjMi5ub3IodmVjMi5zdWIobGluZS5lbmQsIGxpbmUuc3RhcnQpKTtcbiAgY29uc3QgZWRnZU5vcm1hbCA9IHZlYzIoZWRnZS55LCAtZWRnZS54KTtcbiAgY29uc3QgbGlnaHROb3JtYWwgPSB2ZWMyLm5vcihcbiAgICB2ZWMyLnN1Yih2ZWMyLm11bCh2ZWMyLmFkZChsaW5lLnN0YXJ0LCBsaW5lLmVuZCksIDAuNSksIHBvc2l0aW9uKVxuICApO1xuXG4gIHJldHVybiB2ZWMyLmRvdChsaWdodE5vcm1hbCwgZWRnZU5vcm1hbCkgPD0gMDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwb2x5Z29uIHBhdGggb24gYSBjYW52YXMgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbihcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAuLi52ZXJ0aWNlczogUG9seWdvblZlcnRpY2VzXG4pIHtcbiAgaWYgKHZlcnRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGlmICh0eXBlb2YgdmVydGljZXNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2ZXJ0aWNlc1swXShjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHZlcnRpY2VzW2ldIGFzIEZ1bmN0aW9uKShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5saW5lVG8oKHZlcnRpY2VzW2ldIGFzIHZlYzIpLngsICh2ZXJ0aWNlc1tpXSBhcyB2ZWMyKS55KTtcbiAgICB9XG4gIH1cbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3RvciBvZiBhIHBvaW50IHJlbGF0aXZlIHRvIGEgMWQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3RvcjFkKG46IG51bWJlciwgaW50ZXJ2YWw6IEludGVydmFsMWQpOiBTZWN0b3IxZCB7XG4gIGlmIChuIDw9IGludGVydmFsLnN0YXJ0KSB7XG4gICAgcmV0dXJuIFNlY3RvcjFkLkJlZm9yZTtcbiAgfVxuXG4gIGlmIChuID49IGludGVydmFsLmVuZCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5BZnRlcjtcbiAgfVxuXG4gIHJldHVybiBTZWN0b3IxZC5JbnNpZGU7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IyZChwb2ludDogdmVjMiwgaW50ZXJ2YWw6IEludGVydmFsMmQpOiBTZWN0b3IyZCB7XG4gIGNvbnN0IHggPSBzZWN0b3IxZChwb2ludC54LCB7IHN0YXJ0OiBpbnRlcnZhbC5sZWZ0LCBlbmQ6IGludGVydmFsLnJpZ2h0IH0pO1xuICBjb25zdCB5ID0gc2VjdG9yMWQocG9pbnQueSwgeyBzdGFydDogaW50ZXJ2YWwudG9wLCBlbmQ6IGludGVydmFsLmJvdHRvbSB9KTtcblxuICByZXR1cm4ge1xuICAgIFtTZWN0b3IxZC5CZWZvcmVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5MZWZ0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tTGVmdCxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5JbnNpZGVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wLFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkluc2lkZSxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbSxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5BZnRlcl06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BSaWdodCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5SaWdodCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbVJpZ2h0LFxuICAgIH0sXG4gIH1beF1beV07XG59XG5cbmNvbnN0IHRpbnRzID0gbmV3IFdlYWtNYXA8U2NlbmVJbWFnZSwgTWFwPHN0cmluZywgSFRNTENhbnZhc0VsZW1lbnQ+PigpO1xuXG4vKipcbiAqIEdldCBhIGNvcHkgb2YgYW4gaW1hZ2UgaW4gYSBzaW5nbGUgY29sb3VyIHdoaWNoIGtlZXBzIHRoZSBpbWFnZSdzIGFscGhhXG4gKiBjaGFubmVsLCBvciBudWxsIGlmIHRoZSBpbWFnZSBoYXNuJ3QgbG9hZGVkIHlldFxuICovXG5leHBvcnQgZnVuY3Rpb24gdGludGVkSW1hZ2UoXG4gIGltYWdlOiBTY2VuZUltYWdlLFxuICBjb2xvdXI6IHN0cmluZ1xuKTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgaWYgKGltYWdlLndpZHRoID09PSAwIHx8IGltYWdlLmhlaWdodCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiAhaW1hZ2UuY29tcGxldGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBpbWFnZVRpbnRzID0gdGludHMuZ2V0KGltYWdlKTtcbiAgaWYgKCFpbWFnZVRpbnRzKSB7XG4gICAgaW1hZ2VUaW50cyA9IG5ldyBNYXAoKTtcbiAgICB0aW50cy5zZXQoaW1hZ2UsIGltYWdlVGludHMpO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IGltYWdlVGludHMuZ2V0KGNvbG91cik7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcmVzdWx0LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgcmVzdWx0LmhlaWdodCA9IGltYWdlLmhlaWdodDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSByZXN1bHQuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvdXI7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCByZXN1bHQud2lkdGgsIHJlc3VsdC5oZWlnaHQpO1xuXG4gICAgaW1hZ2VUaW50cy5zZXQoY29sb3VyLCByZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgYSBibGFjayBjb3B5IG9mIGFuIGltYWdlIHdoaWNoIGtlZXBzIHRoZSBpbWFnZSdzIGFscGhhIGNoYW5uZWwsIG9yIG51bGxcbiAqIGlmIHRoZSBpbWFnZSBoYXNuJ3QgbG9hZGVkIHlldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2lsaG91ZXR0ZShpbWFnZTogU2NlbmVJbWFnZSk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIHJldHVybiB0aW50ZWRJbWFnZShpbWFnZSwgJ2JsYWNrJyk7XG59XG4iLCJpbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IGRyYXdJbWFnZUluUmVjdGFuZ2xlLCBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB0eXBlIHsgUmVmbGVjdGlvblN5c3RlbSB9IGZyb20gJy4vUmVmbGVjdGlvblN5c3RlbSc7XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgPSBSZWN0YW5nbGUgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hpY2ggcGFydHMgb2YgdGhpcyByZWN0YW5nbGUgYXJlXG4gICAqIHJlZmxlY3RpdmUsIHRoZSBkZWZhdWx0IGlzIHRoZSB3aG9sZSByZWN0YW5nbGVcbiAgICovXG4gIG1hc2s/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBtYXNrIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVjdGFuZ2xlPyBPdGhlcndpc2UgaXQgd2lsbCBiZVxuICAgKiBzdHJldGNoZWQgdG8gZml0XG4gICAqL1xuICByZXBlYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIb3cgc3Ryb25nIHRoZSByZWZsZWN0aW9uIGlzLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgc3RyZW5ndGg/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEFuIGFyZWEgdGhhdCBzaG93cyByZWZsZWN0aW9uc1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1hc2s6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBwdWJsaWMgcmVwZWF0OiBib29sZWFuO1xuICBwdWJsaWMgc3RyZW5ndGg6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW07XG5cbiAgcHJpdmF0ZSByZW1vdmVDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gICAgZGVmYXVsdFN0cmVuZ3RoOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucyA9IHJlZmxlY3Rpb25zO1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMyLmNweShvcHRpb25zLnNpemUpO1xuICAgIHRoaXMubWFzayA9IG9wdGlvbnMubWFzayA/PyBudWxsO1xuICAgIHRoaXMucmVwZWF0ID0gb3B0aW9ucy5yZXBlYXQgPz8gZmFsc2U7XG4gICAgdGhpcy5zdHJlbmd0aCA9IG9wdGlvbnMuc3RyZW5ndGggPz8gZGVmYXVsdFN0cmVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbGwgdGhpcyBhcmVhLCBzbyB0aGF0IHRoZSBjb250ZXh0IG9ubHkga2VlcHMgcmVmbGVjdGl2ZSBwYXJ0cyBvciBzbyB0aGF0XG4gICAqIGl0IHNob3dzIHdoaWNoIHBhcnRzIGFyZSByZWZsZWN0aXZlXG4gICAqL1xuICBwdWJsaWMgZHJhd01hc2soY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgdGhpcy5tYXNrLCB0aGlzLCB0aGlzLnJlcGVhdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB0aGlzLnNpemUueCxcbiAgICAgICAgdGhpcy5zaXplLnlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgcmVjZWl2ZXIgaXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIG9uUmVtb3ZlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgcmVjZWl2ZXIgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5yZWZsZWN0aW9ucy5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMgPSBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zO1xuXG4vKipcbiAqIEEgcmVmbGVjdGl2ZSBwYXJ0IG9mIHRoZSBmbG9vclxuICovXG5leHBvcnQgY2xhc3MgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIgZXh0ZW5kcyBSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NUUkVOR1RIID0gMC41O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICByZWZsZWN0aW9uczogUmVmbGVjdGlvblN5c3RlbSxcbiAgICBvcHRpb25zOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIocmVmbGVjdGlvbnMsIG9wdGlvbnMsIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLkRFRkFVTFRfU1RSRU5HVEgpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zID0gUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSB3YWxsIG1lZXRzIHRoZSBncm91bmQsIHRoZSBkZWZhdWx0IGlzIHRoZSBib3R0b20gb2YgdGhlIHJlY3RhbmdsZVxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBzZXQgaWYgdGhlIHJlY3RhbmdsZSBpcyBvbmx5IHBhcnQgb2YgYSB3YWxsLCBmb3IgZXhhbXBsZSBhXG4gICAqIG1pcnJvciB0aGF0J3MgaGFuZ2luZyBhYm92ZSB0aGUgZmxvb3JcbiAgICovXG4gIGZvb3Q/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgcmVmbGVjdGl2ZSBwYXJ0IG9mIGEgd2FsbFxuICovXG5leHBvcnQgY2xhc3MgV2FsbFJlZmxlY3Rpb25SZWNlaXZlciBleHRlbmRzIFJlZmxlY3Rpb25SZWNlaXZlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU1RSRU5HVEggPSAxO1xuXG4gIHB1YmxpYyBmb290OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKHJlZmxlY3Rpb25zLCBvcHRpb25zLCBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLkRFRkFVTFRfU1RSRU5HVEgpO1xuICAgIHRoaXMuZm9vdCA9IG9wdGlvbnMuZm9vdCA/PyB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgcmVjZWl2ZXIncyByZWZsZWN0aW9ucyB3aXRoIHRoZSBjYW1lcmEncyB0cmFuc2Zvcm1zIGFwcGxpZWRcbiAgICpcbiAgICogUmVmbGVjdGlvbnMgaW4gd2FsbHMgY2FuIGJlIGNvdmVyZWQgYnkgdGhpbmdzIHRoYXQgYXJlIGRyYXduIGFmdGVyd2FyZHMsIHNvXG4gICAqIHRoaXMgbmVlZHMgdG8gYmUgZHJhd24gc3RyYWlnaHQgYWZ0ZXIgdGhlIHdhbGxcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMucmVmbGVjdGlvbnMuZHJhd1dhbGxSZWNlaXZlcih0aGlzLCBjb250ZXh0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBTcHJpdGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zcHJpdGUnO1xuaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIFNjZW5lSW1hZ2UsIHNwcml0ZUJvdW5kcyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBSZWZsZWN0aW9uU3lzdGVtIH0gZnJvbSAnLi9SZWZsZWN0aW9uU3lzdGVtJztcblxuLyoqXG4gKiBTb21ldGhpbmcgdGhhdCBpc24ndCBhIHNwcml0ZSBidXQgY2FuIHN0aWxsIGJlIHJlZmxlY3RlZFxuICpcbiAqIFRoaXMgb2JqZWN0IGlzIHJlYWQgZXZlcnkgZnJhbWUsIHNvIGl0IGNhbiBiZSBtb3ZlZCBieSBjaGFuZ2luZyBpdHMgcG9zaXRpb25cbiAqL1xuZXhwb3J0IHR5cGUgUmVmbGVjdGlvbk9iamVjdCA9IFJlY3RhbmdsZSAmIHtcbiAgLyoqXG4gICAqIFRoZSBpbWFnZSBmb3IgdGhpcyBvYmplY3QsIHRoaXMgaXMgc3RyZXRjaGVkIHRvIGZpdCB0aGUgcmVjdGFuZ2xlXG4gICAqL1xuICBpbWFnZT86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgb2JqZWN0IGluIHdvcmxkIGNvb3JkaW5hdGVzLCB0aGlzIGlzIHVzZWQgaW5zdGVhZCBvZiBgaW1hZ2VgXG4gICAqL1xuICBkcmF3PzogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyA9IHtcbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhlIG9iamVjdCdzIGZlZXQgYXJlIGFib3ZlIHRoZSBib3R0b20gZWRnZSBvZiBpdHMgcmVjdGFuZ2xlLCB0aGlzXG4gICAqIGlzIHVzZWZ1bCBpZiBhbiBpbWFnZSBoYXMgc29tZSBlbXB0eSBzcGFjZSB1bmRlcm5lYXRoIHRoZSBvYmplY3RcbiAgICovXG4gIGZvb3RPZmZzZXQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdG8gbW92ZSB0aGlzIHNvdXJjZSdzIHJlZmxlY3Rpb24gdXAgdGhlIHNjcmVlbiwgdGhpcyBjYW4gYmUgdXNlZFxuICAgKiB0byBjbG9zZSB0aGUgZ2FwIGJldHdlZW4gYW4gaW1hZ2UncyBmZWV0IGFuZCBpdHMgcmVmbGVjdGlvblxuICAgKlxuICAgKiBUaGlzIGlzbid0IHVzZWQgZm9yIHJlZmxlY3Rpb25zIGluIHdhdGVyLCB3aGljaCBzdGFydCBhdCB0aGUgd2F0ZXJsaW5lXG4gICAqL1xuICBmbG9vck9mZnNldD86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIG92ZXIgd2hpY2ggdGhpcyBzb3VyY2UncyByZWZsZWN0aW9uIGZhZGVzIGluLCBtZWFzdXJlZCBmcm9tXG4gICAqIHRoZSBmZWV0LiBUaGlzIGNhbiBiZSB1c2VkIHRvIGhpZGUgYW55IG92ZXJsYXAgd2l0aCB0aGUgc291cmNlXG4gICAqL1xuICBmbG9vckZhZGU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBsYXllciBpbiBhIHNwcml0ZSdzIGFuaW1hdGlvbnMgdGhhdCBoYXMgaW1hZ2VzIGZvciBmbG9vclxuICAgKiByZWZsZWN0aW9ucywgdGhlIGRlZmF1bHQgaXMgYGZsb29yLXJlZmxlY3Rpb25gXG4gICAqXG4gICAqIEltYWdlcyBpbiBhIDMvNCB2aWV3IGNhbiBsb29rIHN0cmFuZ2Ugd2hlbiB0aGV5J3JlIGZsaXBwZWQgdXBzaWRlLWRvd24sIHNvXG4gICAqIHRoaXMgY2FuIGJlIHVzZWQgZm9yIGltYWdlcyB0aGF0IGFyZSBkcmF3biBmb3IgdGhpcyBwdXJwb3NlLiBUaGVzZSBhcmVcbiAgICogZmxpcHBlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIHNwcml0ZS4gSWYgYW4gYW5pbWF0aW9uIGRvZXNuJ3QgaGF2ZSBhblxuICAgKiBpbWFnZSBpbiB0aGlzIGxheWVyIHRoZW4gdGhlIHNwcml0ZSBpcyB1c2VkIGluc3RlYWRcbiAgICovXG4gIGZsb29yTGF5ZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpbWFnZSB0byB1c2UgaW4gZmxvb3JzIGZvciBhbiBvYmplY3QgdGhhdCBpc24ndCBhIHNwcml0ZSwgdGhpcyBpc1xuICAgKiBmbGlwcGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgb2JqZWN0XG4gICAqL1xuICBmbG9vckltYWdlPzogU2NlbmVJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIHNvdXJjZSBhcHBlYXIgaW4gZmxvb3JzP1xuICAgKi9cbiAgZmxvb3I/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBzb3VyY2UgYXBwZWFyIGluIHdhbGxzP1xuICAgKi9cbiAgd2FsbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoaWNoIHdheSBhIHNwcml0ZSBhcHBlYXJzIHRvIGJlIGZhY2luZyBpbiBhIHdhbGwsIGZvciBlYWNoIGRpcmVjdGlvbiB0aGF0XG4gICAqIGl0IGNvdWxkIGJlIGZhY2luZy4gRGlyZWN0aW9ucyB0aGF0IGFyZW4ndCBpbiB0aGlzIGxpc3Qgd2lsbCBzdGF5IHRoZSBzYW1lXG4gICAqXG4gICAqIFdhbGxzIGZhY2UgdGhlIGNhbWVyYSwgc28gdGhpcyBzaG91bGQgc3dhcCBkaXJlY3Rpb25zIHdoaWNoIHBvaW50IHRvd2FyZHNcbiAgICogYW5kIGF3YXkgZnJvbSB0aGUgY2FtZXJhLiBUaGUgZGVmYXVsdCBzd2FwcyBub3J0aCBhbmQgc291dGgsIGFuZCB1cCBhbmRcbiAgICogZG93blxuICAgKi9cbiAgd2FsbERpcmVjdGlvbnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgZm9yIGFuIG9iamVjdCB3aGVuIGl0J3Mgc2VlbiBpbiBhIHdhbGwsIHRoaXMgc2hvdWxkIHNob3cgdGhlXG4gICAqIG9wcG9zaXRlIHNpZGUgb2YgdGhlIG9iamVjdC4gSWYgdGhpcyBpc24ndCBzZXQgdGhlbiB0aGUgb2JqZWN0IGxvb2tzIHRoZVxuICAgKiBzYW1lIGFzIGl0IGRvZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICB3YWxsSW1hZ2U/OiBTY2VuZUltYWdlIHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zID0gUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzICZcbiAgKHsgc3ByaXRlOiBTcHJpdGUgfSB8IHsgb2JqZWN0OiBSZWZsZWN0aW9uT2JqZWN0IH0pO1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGFwcGVhcnMgaW4gZmxvb3JzIGFuZCB3YWxscyB0aGF0IGFyZSByZWZsZWN0aXZlXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uU291cmNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GTE9PUl9MQVlFUiA9ICdmbG9vci1yZWZsZWN0aW9uJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9XQUxMX0RJUkVDVElPTlM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgbm9ydGg6ICdzb3V0aCcsXG4gICAgc291dGg6ICdub3J0aCcsXG4gICAgdXA6ICdkb3duJyxcbiAgICBkb3duOiAndXAnLFxuICB9O1xuXG4gIHB1YmxpYyByZWFkb25seSBzcHJpdGU6IFNwcml0ZSB8IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSBvYmplY3Q6IFJlZmxlY3Rpb25PYmplY3QgfCBudWxsO1xuXG4gIHB1YmxpYyBmb290T2Zmc2V0OiBudW1iZXI7XG4gIHB1YmxpYyBmbG9vck9mZnNldDogbnVtYmVyO1xuICBwdWJsaWMgZmxvb3JGYWRlOiBudW1iZXI7XG4gIHB1YmxpYyBmbG9vckxheWVyOiBzdHJpbmc7XG4gIHB1YmxpYyBmbG9vckltYWdlOiBTY2VuZUltYWdlIHwgbnVsbDtcbiAgcHVibGljIGZsb29yOiBib29sZWFuO1xuICBwdWJsaWMgd2FsbDogYm9vbGVhbjtcbiAgcHVibGljIHdhbGxEaXJlY3Rpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBwdWJsaWMgd2FsbEltYWdlOiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogV29ybGQgeS1wb3NpdGlvbiB3aGVyZSB0aGlzIHNvdXJjZSBtZWV0cyB0aGUgc3VyZmFjZSBvZiBzb21lIHdhdGVyLCBvciBudWxsXG4gICAqIGlmIGl0IGlzbid0IGluIHdhdGVyXG4gICAqXG4gICAqIE9ubHkgdGhlIHBhcnQgYWJvdmUgdGhpcyBsaW5lIGlzIHJlZmxlY3RlZCwgYW5kIGl0J3MgcmVmbGVjdGVkIGFyb3VuZCB0aGlzXG4gICAqIGxpbmUgaW5zdGVhZCBvZiBhcm91bmQgdGhlIHNvdXJjZSdzIGZlZXRcbiAgICovXG4gIHB1YmxpYyB3YXRlcmxpbmU6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcmVmbGVjdGlvbnM6IFJlZmxlY3Rpb25TeXN0ZW07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtLFxuICAgIG9wdGlvbnM6IFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zXG4gICkge1xuICAgIHRoaXMucmVmbGVjdGlvbnMgPSByZWZsZWN0aW9ucztcbiAgICB0aGlzLnNwcml0ZSA9ICdzcHJpdGUnIGluIG9wdGlvbnMgPyBvcHRpb25zLnNwcml0ZSA6IG51bGw7XG4gICAgdGhpcy5vYmplY3QgPSAnb2JqZWN0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5vYmplY3QgOiBudWxsO1xuICAgIHRoaXMuZm9vdE9mZnNldCA9IG9wdGlvbnMuZm9vdE9mZnNldCA/PyAwO1xuICAgIHRoaXMuZmxvb3JPZmZzZXQgPSBvcHRpb25zLmZsb29yT2Zmc2V0ID8/IDA7XG4gICAgdGhpcy5mbG9vckZhZGUgPSBvcHRpb25zLmZsb29yRmFkZSA/PyAwO1xuICAgIHRoaXMuZmxvb3JMYXllciA9XG4gICAgICBvcHRpb25zLmZsb29yTGF5ZXIgPz8gUmVmbGVjdGlvblNvdXJjZS5ERUZBVUxUX0ZMT09SX0xBWUVSO1xuICAgIHRoaXMuZmxvb3JJbWFnZSA9IG9wdGlvbnMuZmxvb3JJbWFnZSA/PyBudWxsO1xuICAgIHRoaXMuZmxvb3IgPSBvcHRpb25zLmZsb29yID8/IHRydWU7XG4gICAgdGhpcy53YWxsID0gb3B0aW9ucy53YWxsID8/IHRydWU7XG4gICAgdGhpcy53YWxsRGlyZWN0aW9ucyA9XG4gICAgICBvcHRpb25zLndhbGxEaXJlY3Rpb25zID8/IFJlZmxlY3Rpb25Tb3VyY2UuREVGQVVMVF9XQUxMX0RJUkVDVElPTlM7XG4gICAgdGhpcy53YWxsSW1hZ2UgPSBvcHRpb25zLndhbGxJbWFnZSA/PyBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcmVhIGNvdmVyZWQgYnkgdGhpcyBzb3VyY2UgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwdWJsaWMgZ2V0IGJvdW5kcygpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiB0aGlzLnNwcml0ZSA/IHNwcml0ZUJvdW5kcyh0aGlzLnNwcml0ZSkgOiB0aGlzLm9iamVjdCE7XG4gIH1cblxuICAvKipcbiAgICogV2hlcmUgdGhpcyBzb3VyY2UgbWVldHMgdGhlIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGdldCBmb290KCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICByZXR1cm4gcG9zaXRpb24ueSArIHNpemUueSAtIHRoaXMuZm9vdE9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbGluZSB0aGF0IHRoaXMgc291cmNlIGlzIHJlZmxlY3RlZCBhcm91bmQgaW4gYSBmbG9vclxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgZmxvb3JBeGlzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2F0ZXJsaW5lID8/IHRoaXMuZm9vdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd29ybGQgeS1wb3NpdGlvbiB3aGVyZSB0aGlzIHNvdXJjZSdzIHJlZmxlY3Rpb24gaW4gYSBmbG9vciBzdGFydHMsIHRoaXNcbiAgICogaXMgdGhlIHNhbWUgYXMgdGhlIGxpbmUgaXQncyByZWZsZWN0ZWQgYXJvdW5kIHVubGVzcyBpdCBoYXMgYW4gb2Zmc2V0XG4gICAqL1xuICBwdWJsaWMgZ2V0IGZsb29yU3RhcnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53YXRlcmxpbmUgPT09IG51bGxcbiAgICAgID8gdGhpcy5mbG9vckF4aXMgLSB0aGlzLmZsb29yT2Zmc2V0XG4gICAgICA6IHRoaXMuZmxvb3JBeGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdGhpcyBzb3VyY2UncyByZWZsZWN0aW9uIGhhcyBiZWVuIG1vdmVkIGFsb25nIHRoZSBzY3JlZW5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZsb29yU2hpZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5mbG9vclN0YXJ0IC0gdGhpcy5mbG9vckF4aXM7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFyZWEgY292ZXJlZCBieSB0aGlzIHNvdXJjZSB3aGVuIGl0J3MgcmVmbGVjdGVkIGluIGEgZmxvb3JcbiAgICovXG4gIHB1YmxpYyBnZXQgZmxvb3JCb3VuZHMoKTogUmVjdGFuZ2xlIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjMihcbiAgICAgICAgcG9zaXRpb24ueCxcbiAgICAgICAgdGhpcy5mbG9vckF4aXMgKiAyICsgdGhpcy5mbG9vclNoaWZ0IC0gKHBvc2l0aW9uLnkgKyBzaXplLnkpXG4gICAgICApLFxuICAgICAgc2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcmVhIGNvdmVyZWQgYnkgdGhpcyBzb3VyY2Ugd2hlbiBpdCdzIHJlZmxlY3RlZCBpbiBhIHdhbGxcbiAgICovXG4gIHB1YmxpYyB3YWxsQm91bmRzKHdhbGxGb290OiBudW1iZXIpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMuYm91bmRzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyAod2FsbEZvb3QgLSB0aGlzLmZvb3QpICogMiksXG4gICAgICBzaXplLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGlzIHNvdXJjZSdzIHJlZmxlY3Rpb24gaW4gYSBmbG9vclxuICAgKlxuICAgKiBHb2luZyBiZWxvdyB0aGUgZmxvb3IgZG9lc24ndCBjaGFuZ2Ugd2hlcmUgc29tZXRoaW5nJ3MgZmVldCBhcmUsIHNvIHRoZVxuICAgKiByZWZsZWN0aW9uIGlzIGZsaXBwZWQgdXBzaWRlLWRvd24gYXJvdW5kIGl0cyBmZWV0XG4gICAqL1xuICBwdWJsaWMgZHJhd0luRmxvb3IoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoMCwgdGhpcy5mbG9vckF4aXMgKiAyICsgdGhpcy5mbG9vclNoaWZ0KTtcbiAgICBjb250ZXh0LnNjYWxlKDEsIC0xKTtcblxuICAgIGlmICh0aGlzLndhdGVybGluZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gdGhpcy5ib3VuZHM7XG5cbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0LnJlY3QoXG4gICAgICAgIHBvc2l0aW9uLngsXG4gICAgICAgIHBvc2l0aW9uLnksXG4gICAgICAgIHNpemUueCxcbiAgICAgICAgdGhpcy53YXRlcmxpbmUgLSBwb3NpdGlvbi55XG4gICAgICApO1xuICAgICAgY29udGV4dC5jbGlwKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3Rmxvb3JJbWFnZShjb250ZXh0KTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoaXMgc291cmNlJ3MgcmVmbGVjdGlvbiBpbiBhIHdhbGxcbiAgICpcbiAgICogVGhlIHJlZmxlY3Rpb24gaXMgYXMgZmFyIGJlaGluZCB0aGUgd2FsbCBhcyB0aGlzIHNvdXJjZSBpcyBpbiBmcm9udCBvZiBpdCxcbiAgICogc28gaXQncyB0aGUgc2FtZSB3YXkgdXAgYnV0IGZ1cnRoZXIgdXAgdGhlIHNjcmVlbiwgYW5kIHdlIGNhbiBzZWUgdGhlIHNpZGVcbiAgICogb2YgdGhpcyBzb3VyY2UgdGhhdCBmYWNlcyB0aGUgd2FsbFxuICAgKi9cbiAgcHVibGljIGRyYXdJbldhbGwoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB3YWxsRm9vdDogbnVtYmVyKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoMCwgKHdhbGxGb290IC0gdGhpcy5mb290KSAqIDIpO1xuXG4gICAgaWYgKHRoaXMuc3ByaXRlKSB7XG4gICAgICB0aGlzLmRyYXdTcHJpdGVJbldhbGwoY29udGV4dCwgdGhpcy5zcHJpdGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy53YWxsSW1hZ2UpIHtcbiAgICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHRoaXMuYm91bmRzO1xuXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgdGhpcy53YWxsSW1hZ2UsXG4gICAgICAgIHBvc2l0aW9uLngsXG4gICAgICAgIHBvc2l0aW9uLnksXG4gICAgICAgIHNpemUueCxcbiAgICAgICAgc2l6ZS55XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXcoY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdGbG9vckltYWdlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHsgc3ByaXRlLCBmbG9vckltYWdlIH0gPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZSkge1xuICAgICAgY29uc3QgaW1hZ2UgPVxuICAgICAgICBzcHJpdGUuaW1hZ2UgJiYgc3ByaXRlLmdldEltYWdlKHVuZGVmaW5lZCwgdGhpcy5mbG9vckxheWVyKTtcblxuICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgIHRoaXMuZHJhd1Nwcml0ZUltYWdlKGNvbnRleHQsIHNwcml0ZSwgaW1hZ2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmbG9vckltYWdlKSB7XG4gICAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSB0aGlzLmJvdW5kcztcblxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UoZmxvb3JJbWFnZSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1Nwcml0ZUluV2FsbChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNwcml0ZTogU3ByaXRlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID1cbiAgICAgIHRoaXMud2FsbERpcmVjdGlvbnNbc3ByaXRlLmRpcmVjdGlvbl0gPz8gc3ByaXRlLmRpcmVjdGlvbjtcblxuICAgIC8vIFRoZSBzcHJpdGUgY2FuIG9ubHkgZHJhdyBpdHNlbGYgZmFjaW5nIGl0cyBjdXJyZW50IGRpcmVjdGlvblxuICAgIGlmIChkaXJlY3Rpb24gPT09IHNwcml0ZS5kaXJlY3Rpb24pIHtcbiAgICAgIHNwcml0ZS5kcmF3KGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlID0gc3ByaXRlLmdldEltYWdlKGRpcmVjdGlvbik7XG4gICAgaWYgKGltYWdlKSB7XG4gICAgICB0aGlzLmRyYXdTcHJpdGVJbWFnZShjb250ZXh0LCBzcHJpdGUsIGltYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIHNwcml0ZSB3aXRoIGEgZGlmZmVyZW50IGltYWdlLCBpbiB0aGUgc2FtZSB3YXkgYXMgYFNwcml0ZS5kcmF3KClgXG4gICAqL1xuICBwcml2YXRlIGRyYXdTcHJpdGVJbWFnZShcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgc3ByaXRlOiBTcHJpdGUsXG4gICAgaW1hZ2U6IFNjZW5lSW1hZ2VcbiAgKSB7XG4gICAgY29udGV4dC50cmFuc2xhdGUoc3ByaXRlLnBvc2l0aW9uLngsIHNwcml0ZS5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnNjYWxlKHNwcml0ZS5zY2FsZSwgc3ByaXRlLnNjYWxlKTtcbiAgICBjb250ZXh0LnJvdGF0ZShzcHJpdGUucm90YXRpb24pO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgaW1hZ2UsXG4gICAgICAtc3ByaXRlLm9yaWdpbi54LFxuICAgICAgLXNwcml0ZS5vcmlnaW4ueSxcbiAgICAgIGltYWdlLndpZHRoLFxuICAgICAgaW1hZ2UuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5zcHJpdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLmRyYXcoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSwgaW1hZ2UsIGRyYXcgfSA9IHRoaXMub2JqZWN0ITtcblxuICAgIGlmIChkcmF3KSB7XG4gICAgICBkcmF3KGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAoaW1hZ2UpIHtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLngsIHNpemUueSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIHNvdXJjZSBmcm9tIHRoZSByZWZsZWN0aW9uIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnJlZmxlY3Rpb25zLnJlbW92ZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBGcmFtZSxcbiAgaW50ZXJ2YWxUb1JlY3RhbmdsZSxcbiAgUmVjdGFuZ2xlLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxufSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gIFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vUmVmbGVjdGlvblJlY2VpdmVyJztcbmltcG9ydCB7IFJlZmxlY3Rpb25Tb3VyY2UsIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zIH0gZnJvbSAnLi9SZWZsZWN0aW9uU291cmNlJztcblxuLyoqXG4gKiBSZW5kZXJzIGZsb29yIGFuZCB3YWxsIHJlZmxlY3Rpb25zXG4gKlxuICogUmVmbGVjdGlvbnMgYXJlIGRyYXduIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjZW5lLCBzbyB0aGlzIGhhcyB0byBiZSBjYWxsZWQgaW5cbiAqIHNldmVyYWwgc3RlcHMuIFNlZSBgV29ybGRgIGZvciBob3cgdGhpcyBmaXRzIHRvZ2V0aGVyIHdpdGggZXZlcnl0aGluZyBlbHNlXG4gKlxuICogMS4gQ2FsbCBgcHJlcGFyZSgpYCBhdCB0aGUgc3RhcnQgb2YgZWFjaCBmcmFtZVxuICogMi4gRHJhdyB0aGUgZ3JvdW5kXG4gKiAzLiBDYWxsIGBkcmF3Rmxvb3IoKWBcbiAqIDQuIERyYXcgd2FsbHMgYW5kIGFjdG9ycywgY2FsbGluZyBgZHJhdygpYCBvbiBlYWNoIHdhbGwgcmVjZWl2ZXIgYXMgc29vbiBhc1xuICogICAgaXRzIHdhbGwgaGFzIGJlZW4gZHJhd25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZmxlY3Rpb25TeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyBjcmVhdGVDb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3VyY2VzOiBSZWZsZWN0aW9uU291cmNlW10gPSBbXTtcbiAgcHJpdmF0ZSBmbG9vclJlY2VpdmVyczogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJbXSA9IFtdO1xuICBwcml2YXRlIHdhbGxSZWNlaXZlcnM6IFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgc2NyZWVuLXNpemVkIGNhbnZhc2VzIHRoYXQgcmVmbGVjdGlvbnMgYXJlIGRyYXduIGludG9cbiAgICpcbiAgICogYGZsb29yU291cmNlc0NhbnZhc2Agc2hvd3MgZXZlcnkgc291cmNlIHJlZmxlY3RlZCBpbiB0aGUgZmxvb3IsIGFzIGlmIHRoZVxuICAgKiB3aG9sZSBmbG9vciB3YXMgcmVmbGVjdGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBmbG9vclNvdXJjZXNDb250ZXh0ID0gUmVmbGVjdGlvblN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBmbG9vclNvdXJjZXNDYW52YXMgPSB0aGlzLmZsb29yU291cmNlc0NvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgZmxvb3JDb250ZXh0ID0gUmVmbGVjdGlvblN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHByaXZhdGUgZmFkZUNvbnRleHQgPSBSZWZsZWN0aW9uU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHJpdmF0ZSB3YWxsQ29udGV4dCA9IFJlZmxlY3Rpb25TeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuXG4gIHByaXZhdGUgZnJhbWU6IEZyYW1lIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZmxvb3JTb3VyY2VzUmVhZHkgPSBmYWxzZTtcblxuICAvKipcbiAgICogQWRkIHNvbWV0aGluZyB0aGF0IGFwcGVhcnMgaW4gcmVmbGVjdGlvbnNcbiAgICovXG4gIHB1YmxpYyBhZGRTb3VyY2Uob3B0aW9uczogUmVmbGVjdGlvblNvdXJjZU9wdGlvbnMpOiBSZWZsZWN0aW9uU291cmNlIHtcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgUmVmbGVjdGlvblNvdXJjZSh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNvdXJjZXMucHVzaChzb3VyY2UpO1xuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWZsZWN0aXZlIHBhcnQgb2YgdGhlIGZsb29yXG4gICAqL1xuICBwdWJsaWMgYWRkRmxvb3JSZWNlaXZlcihcbiAgICBvcHRpb25zOiBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnNcbiAgKTogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIge1xuICAgIGNvbnN0IHJlY2VpdmVyID0gbmV3IEZsb29yUmVmbGVjdGlvblJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZmxvb3JSZWNlaXZlcnMucHVzaChyZWNlaXZlcik7XG5cbiAgICByZXR1cm4gcmVjZWl2ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVmbGVjdGl2ZSBwYXJ0IG9mIGEgd2FsbFxuICAgKi9cbiAgcHVibGljIGFkZFdhbGxSZWNlaXZlcihcbiAgICBvcHRpb25zOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9uc1xuICApOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyIHtcbiAgICBjb25zdCByZWNlaXZlciA9IG5ldyBXYWxsUmVmbGVjdGlvblJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5wdXNoKHJlY2VpdmVyKTtcblxuICAgIHJldHVybiByZWNlaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBzb3VyY2Ugb3IgcmVjZWl2ZXIgZnJvbSB0aGUgcmVmbGVjdGlvbiBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUob2JqZWN0OiBSZWZsZWN0aW9uU291cmNlIHwgUmVmbGVjdGlvblJlY2VpdmVyKSB7XG4gICAgdGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2VzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5mbG9vclJlY2VpdmVycyA9IHRoaXMuZmxvb3JSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSB0aGlzLndhbGxSZWNlaXZlcnMuZmlsdGVyKG8gPT4gbyAhPT0gb2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVhZHkgdG8gZHJhdyByZWZsZWN0aW9ucyBmb3IgYSBmcmFtZVxuICAgKi9cbiAgcHVibGljIHByZXBhcmUoZnJhbWU6IEZyYW1lKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZmxvb3JTb3VyY2VzUmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYGZsb29yU291cmNlc0NhbnZhc2AgaXMgdXAgdG8gZGF0ZSBmb3IgdGhpcyBmcmFtZVxuICAgKi9cbiAgcHVibGljIGRyYXdGbG9vclNvdXJjZXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSB8fCB0aGlzLmZsb29yU291cmNlc1JlYWR5KSB7XG4gICAgICByZXR1cm4gdGhpcy5mbG9vclNvdXJjZXNDYW52YXM7XG4gICAgfVxuXG4gICAgY29uc3QgdmlzaWJsZSA9IHRoaXMudmlzaWJsZUFyZWEoZnJhbWUpO1xuICAgIGNvbnN0IHNvdXJjZXMgPSB0aGlzLnNvcnRlZFNvdXJjZXMoXG4gICAgICB0aGlzLnNvdXJjZXMuZmlsdGVyKFxuICAgICAgICBzb3VyY2UgPT5cbiAgICAgICAgICBzb3VyY2UuZmxvb3IgJiYgcmVjdGFuZ2xlc0ludGVyc2VjdChzb3VyY2UuZmxvb3JCb3VuZHMsIHZpc2libGUpXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dCwgZnJhbWUpO1xuICAgIGlmIChzb3VyY2VzLnNvbWUoc291cmNlID0+IHNvdXJjZS5mbG9vckZhZGUgPiAwKSkge1xuICAgICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5mYWRlQ29udGV4dCwgZnJhbWUpO1xuICAgIH1cblxuICAgIHNvdXJjZXMuZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgaWYgKHNvdXJjZS5mbG9vckZhZGUgPiAwKSB7XG4gICAgICAgIHRoaXMuZHJhd0ZhZGVkU291cmNlKHNvdXJjZSwgZnJhbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlLmRyYXdJbkZsb29yKHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mbG9vclNvdXJjZXNSZWFkeSA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcy5mbG9vclNvdXJjZXNDYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhIHNvdXJjZSdzIHJlZmxlY3Rpb24gb24gaXRzIG93biBzbyB0aGF0IGl0IGNhbiBmYWRlIGluIHdpdGhvdXRcbiAgICogYWZmZWN0aW5nIHRoZSByZWZsZWN0aW9ucyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGRyYXduXG4gICAqL1xuICBwcml2YXRlIGRyYXdGYWRlZFNvdXJjZShzb3VyY2U6IFJlZmxlY3Rpb25Tb3VyY2UsIGZyYW1lOiBGcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmZhZGVDb250ZXh0O1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHNvdXJjZS5mbG9vckJvdW5kcztcbiAgICBjb25zdCBzdGFydCA9IHNvdXJjZS5mbG9vclN0YXJ0O1xuXG4gICAgc291cmNlLmRyYXdJbkZsb29yKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZmFkZSA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoXG4gICAgICAwLFxuICAgICAgc3RhcnQsXG4gICAgICAwLFxuICAgICAgc3RhcnQgKyBzb3VyY2UuZmxvb3JGYWRlXG4gICAgKTtcbiAgICBmYWRlLmFkZENvbG9yU3RvcCgwLCAnYmxhY2snKTtcbiAgICBmYWRlLmFkZENvbG9yU3RvcCgxLCAndHJhbnNwYXJlbnQnKTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmYWRlO1xuICAgIGNvbnRleHQuZmlsbFJlY3QocG9zaXRpb24ueCwgc3RhcnQsIHNpemUueCwgc291cmNlLmZsb29yRmFkZSk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgLy8gT25seSB0aGUgYXJlYSBhcm91bmQgdGhpcyBzb3VyY2UgbmVlZHMgdG8gYmUgY29waWVkIGFuZCBjbGVhcmVkXG4gICAgY29uc3QgdG9wTGVmdCA9IGZyYW1lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHBvc2l0aW9uKTtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IGZyYW1lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHZlYzIuYWRkKHBvc2l0aW9uLCBzaXplKSk7XG4gICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3IodG9wTGVmdC54KTtcbiAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHRvcExlZnQueSk7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLmNlaWwoYm90dG9tUmlnaHQueCkgLSBsZWZ0O1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChib3R0b21SaWdodC55KSAtIHRvcDtcblxuICAgIHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5mbG9vclNvdXJjZXNDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB0aGlzLmZsb29yU291cmNlc0NvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgY29udGV4dC5jYW52YXMsXG4gICAgICBsZWZ0LFxuICAgICAgdG9wLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBsZWZ0LFxuICAgICAgdG9wLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICApO1xuICAgIHRoaXMuZmxvb3JTb3VyY2VzQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdChsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNjcmVlbi1zaXplZCBjb250ZXh0IG1hdGNoZXMgdGhlIGZyYW1lIGFuZCBjbGVhciBpdCwgcmVhZHkgZm9yXG4gICAqIGRyYXdpbmcgaW4gd29ybGQgY29vcmRpbmF0ZXNcbiAgICovXG4gIHByaXZhdGUgcmVzZXRDb250ZXh0KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gZnJhbWUuc2NyZWVuLnggfHwgY2FudmFzLmhlaWdodCAhPT0gZnJhbWUuc2NyZWVuLnkpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGZyYW1lLnNjcmVlbi54O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGZyYW1lLnNjcmVlbi55O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmcmFtZS5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgICBmcmFtZS5jYW1lcmEuc2V0VHJhbnNmb3Jtcyhjb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgdmlzaWJsZUFyZWEoeyBjYW1lcmEgfTogRnJhbWUpOiBSZWN0YW5nbGUge1xuICAgIHJldHVybiBpbnRlcnZhbFRvUmVjdGFuZ2xlKGNhbWVyYS5ib3VuZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzb3VyY2VzIGluIHRoZSBvcmRlciB0aGF0IHRoZXkgc2hvdWxkIGJlIGRyYXduLCBzb3VyY2VzIHdpdGggZmVldFxuICAgKiBmdXJ0aGVyIGRvd24gdGhlIHNjcmVlbiBhcmUgZHJhd24gbGFzdFxuICAgKi9cbiAgcHJpdmF0ZSBzb3J0ZWRTb3VyY2VzKHNvdXJjZXM6IFJlZmxlY3Rpb25Tb3VyY2VbXSk6IFJlZmxlY3Rpb25Tb3VyY2VbXSB7XG4gICAgcmV0dXJuIHNvdXJjZXNcbiAgICAgIC5tYXAoc291cmNlID0+ICh7IHNvdXJjZSwgZm9vdDogc291cmNlLmZvb3QgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5mb290IC0gYi5mb290KVxuICAgICAgLm1hcCgoeyBzb3VyY2UgfSkgPT4gc291cmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHJlZmxlY3Rpb25zIG9udG8gdGhlIGZsb29yLCB0aGlzIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgZHJhd2luZyB0aGVcbiAgICogZ3JvdW5kIGFuZCBiZWZvcmUgZHJhd2luZyBhbnl0aGluZyB0aGF0IHN0YW5kcyBvbiBpdFxuICAgKi9cbiAgcHVibGljIGRyYXdGbG9vcigpIHtcbiAgICBjb25zdCB7IGZyYW1lIH0gPSB0aGlzO1xuICAgIGlmICghZnJhbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2aXNpYmxlID0gdGhpcy52aXNpYmxlQXJlYShmcmFtZSk7XG4gICAgY29uc3QgcmVjZWl2ZXJzID0gdGhpcy5mbG9vclJlY2VpdmVycy5maWx0ZXIocmVjZWl2ZXIgPT5cbiAgICAgIHJlY3RhbmdsZXNJbnRlcnNlY3QocmVjZWl2ZXIsIHZpc2libGUpXG4gICAgKTtcbiAgICBpZiAocmVjZWl2ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0Zsb29yU291cmNlcygpO1xuXG4gICAgLy8gU3RhcnQgd2l0aCB0aGUgc2hhcGUgb2YgdGhlIHJlY2VpdmVycyBhbmQga2VlcCB0aGUgc291cmNlcyBpbnNpZGUgaXQsXG4gICAgLy8gdGhpcyB3YXkgc291cmNlcyBkb24ndCBzaG93IHRocm91Z2ggZWFjaCBvdGhlciB3aGVuIHN0cmVuZ3RoIGlzIGJlbG93IDFcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5mbG9vckNvbnRleHQ7XG4gICAgdGhpcy5yZXNldENvbnRleHQoY29udGV4dCwgZnJhbWUpO1xuICAgIHJlY2VpdmVycy5mb3JFYWNoKHJlY2VpdmVyID0+IHtcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSByZWNlaXZlci5zdHJlbmd0aDtcbiAgICAgIHJlY2VpdmVyLmRyYXdNYXNrKGNvbnRleHQpO1xuICAgIH0pO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5mbG9vclNvdXJjZXNDYW52YXMsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgIGZyYW1lLmNvbnRleHQuc2F2ZSgpO1xuICAgIGZyYW1lLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGZyYW1lLmNvbnRleHQuZHJhd0ltYWdlKGNvbnRleHQuY2FudmFzLCAwLCAwKTtcbiAgICBmcmFtZS5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSByZWZsZWN0aW9ucyBpbiBhIHdhbGwgcmVjZWl2ZXJcbiAgICovXG4gIHB1YmxpYyBkcmF3V2FsbFJlY2VpdmVyKFxuICAgIHJlY2VpdmVyOiBXYWxsUmVmbGVjdGlvblJlY2VpdmVyLFxuICAgIHRhcmdldDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICkge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSB8fCAhcmVjdGFuZ2xlc0ludGVyc2VjdChyZWNlaXZlciwgdGhpcy52aXNpYmxlQXJlYShmcmFtZSkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT25seSB0aGluZ3MgaW4gZnJvbnQgb2YgdGhlIHdhbGwgY2FuIGJlIHNlZW4gaW4gaXRcbiAgICBjb25zdCBzb3VyY2VzID0gdGhpcy5zb3J0ZWRTb3VyY2VzKFxuICAgICAgdGhpcy5zb3VyY2VzLmZpbHRlcihcbiAgICAgICAgc291cmNlID0+XG4gICAgICAgICAgc291cmNlLndhbGwgJiZcbiAgICAgICAgICBzb3VyY2UuZm9vdCA+IHJlY2VpdmVyLmZvb3QgJiZcbiAgICAgICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KHNvdXJjZS53YWxsQm91bmRzKHJlY2VpdmVyLmZvb3QpLCByZWNlaXZlcilcbiAgICAgIClcbiAgICApO1xuICAgIGlmIChzb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLndhbGxDb250ZXh0O1xuICAgIHRoaXMucmVzZXRDb250ZXh0KGNvbnRleHQsIGZyYW1lKTtcblxuICAgIC8vIFRoZSBjbG9zZXN0IHRoaW5nIHRvIHRoZSB3YWxsIGlzIGFsc28gdGhlIGNsb3Nlc3QgdGhpbmcgdG8gdXMgd2hlbiB3ZVxuICAgIC8vIGxvb2sgaW50byB0aGUgcmVmbGVjdGlvbiwgc28gc291cmNlcyBhcmUgZHJhd24gaW4gcmV2ZXJzZSBvcmRlclxuICAgIHNvdXJjZXNcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKHNvdXJjZSA9PiBzb3VyY2UuZHJhd0luV2FsbChjb250ZXh0LCByZWNlaXZlci5mb290KSk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgcmVjZWl2ZXIuZHJhd01hc2soY29udGV4dCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgdGFyZ2V0LnNhdmUoKTtcbiAgICB0YXJnZXQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIHRhcmdldC5nbG9iYWxBbHBoYSA9IHJlY2VpdmVyLnN0cmVuZ3RoO1xuICAgIHRhcmdldC5kcmF3SW1hZ2UoY29udGV4dC5jYW52YXMsIDAsIDApO1xuICAgIHRhcmdldC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXIsXG4gIFdhbGxSZWZsZWN0aW9uUmVjZWl2ZXIsXG59IGZyb20gJy4vUmVmbGVjdGlvblJlY2VpdmVyJztcbmV4cG9ydCB0eXBlIHtcbiAgRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBSZWZsZWN0aW9uUmVjZWl2ZXJPcHRpb25zLFxuICBXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9SZWZsZWN0aW9uUmVjZWl2ZXInO1xuZXhwb3J0IHsgUmVmbGVjdGlvblNvdXJjZSB9IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5leHBvcnQgdHlwZSB7XG4gIFJlZmxlY3Rpb25PYmplY3QsXG4gIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb25zLFxuICBSZWZsZWN0aW9uU291cmNlU2V0dGluZ3MsXG59IGZyb20gJy4vUmVmbGVjdGlvblNvdXJjZSc7XG5leHBvcnQgeyBSZWZsZWN0aW9uU3lzdGVtIH0gZnJvbSAnLi9SZWZsZWN0aW9uU3lzdGVtJztcbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG5leHBvcnQgdHlwZSBSaXBwbGVPcHRpb25zID0ge1xuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIGNvdmVyZWQgYnkgdGhlIGRpc3R1cmJhbmNlLCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgaGFyZCB0aGUgd2F0ZXIgaXMgcHVzaGVkLCB0aGlzIGNhbiBiZSBuZWdhdGl2ZVxuICAgKi9cbiAgc3RyZW5ndGg/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgZ3JpZCBvZiB3YXRlciBoZWlnaHRzIHRoYXQgc3ByZWFkcyBkaXN0dXJiYW5jZXMgb3V0IGFzIHJpcHBsZXNcbiAqXG4gKiBUaGlzIHVzZXMgdGhlIHdhdmUgZXF1YXRpb24sIGVhY2ggY2VsbCBpcyBwdWxsZWQgdG93YXJkcyB0aGUgYXZlcmFnZSBvZiBpdHNcbiAqIG5laWdoYm91cnMgYW5kIGtlZXBzIG1vdmluZyBhZnRlcndhcmRzLiBUaGVyZSdzIGEgZml4ZWQgdGltZSBzdGVwIHNvIHRoYXRcbiAqIHJpcHBsZXMgYmVoYXZlIHRoZSBzYW1lIHdheSBhdCBhbnkgZnJhbWUgcmF0ZSwgYW5kIG5vdGhpbmcgaXMgY2FsY3VsYXRlZFxuICogd2hpbGUgdGhlIHdhdGVyIGlzIHN0aWxsXG4gKi9cbmV4cG9ydCBjbGFzcyBSaXBwbGVGaWVsZCB7XG4gIC8qKlxuICAgKiBSaXBwbGVzIGFyZSBzdG9wcGVkIHdoZW4gdGhleSdyZSBzbWFsbGVyIHRoYW4gdGhpc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX0hFSUdIVCA9IDAuMDAyO1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCBvZiBpdHMgaGVpZ2h0IHRoZSB3YXRlciBrZWVwcyBlYWNoIHN0ZXAsIHdpdGhvdXQgdGhpcyBhIHNwbGFzaFxuICAgKiB3b3VsZCByYWlzZSB0aGUgbGV2ZWwgb2YgdGhlIHdhdGVyIGZvcmV2ZXIgYmVjYXVzZSB0aGUgd2F2ZXMgb25seSBtb3ZlXG4gICAqIHdhdGVyIGFyb3VuZFxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSEVJR0hUX1JFVEFJTkVEID0gMC45OTU7XG5cbiAgLyoqXG4gICAqIEhpZ2hlciBzcGVlZHMgdGhhbiB0aGlzIG1ha2UgdGhlIHNpbXVsYXRpb24gdW5zdGFibGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9XQVZFX05VTUJFUiA9IDAuNTtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRJTUVfU1RFUCA9IDEgLyA2MDtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGdyaWQsIGluIGNlbGxzXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc2l6ZTogdmVjMjtcblxuICAvKipcbiAgICogUkdCQSBkYXRhIHdpdGggdGhlIHNsb3BlIG9mIHRoZSB3YXRlciBpbiB0aGUgcmVkIGFuZCBncmVlbiBjaGFubmVscywgYW5kXG4gICAqIHRoZSBoZWlnaHQgb2YgdGhlIHdhdGVyIGluIHRoZSBibHVlIGNoYW5uZWxcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBwaXhlbHM6IFVpbnQ4QXJyYXk7XG5cbiAgLyoqXG4gICAqIElzIHRoZSB3YXRlciBtb3Zpbmc/XG4gICAqL1xuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjZWxsU2l6ZTogdmVjMjtcbiAgcHJpdmF0ZSBoZWlnaHQ6IEZsb2F0MzJBcnJheTtcbiAgcHJpdmF0ZSBwcmV2aW91czogRmxvYXQzMkFycmF5O1xuXG4gIC8qKlxuICAgKiBDZWxscyB3aXRoIGEgdmFsdWUgb2YgMSBhcmUgbGFuZCwgd2hpY2ggc3RvcHMgcmlwcGxlc1xuICAgKi9cbiAgcHJpdmF0ZSBibG9ja2VkOiBVaW50OEFycmF5IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSB0aW1lOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiB2ZWMyLCBjZWxsU2l6ZTogdmVjMikge1xuICAgIGNvbnN0IGNlbGxzID0gc2l6ZS54ICogc2l6ZS55O1xuXG4gICAgdGhpcy5zaXplID0gdmVjMi5jcHkoc2l6ZSk7XG4gICAgdGhpcy5jZWxsU2l6ZSA9IHZlYzIuY3B5KGNlbGxTaXplKTtcbiAgICB0aGlzLmhlaWdodCA9IG5ldyBGbG9hdDMyQXJyYXkoY2VsbHMpO1xuICAgIHRoaXMucHJldmlvdXMgPSBuZXcgRmxvYXQzMkFycmF5KGNlbGxzKTtcbiAgICB0aGlzLnBpeGVscyA9IG5ldyBVaW50OEFycmF5KGNlbGxzICogNCk7XG4gICAgdGhpcy51cGRhdGVQaXhlbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hpY2ggY2VsbHMgYXJlIGxhbmRcbiAgICovXG4gIHB1YmxpYyBzZXRCbG9ja2VkKGJsb2NrZWQ6IFVpbnQ4QXJyYXkpIHtcbiAgICB0aGlzLmJsb2NrZWQgPSBibG9ja2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggdGhlIHdhdGVyIGF0IGEgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHRvcC1sZWZ0IG9mIHRoZSBncmlkLCBtZWFzdXJlZFxuICAgKiBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcHVibGljIGRpc3R1cmIocG9zaXRpb246IHZlYzIsIHsgcmFkaXVzID0gNiwgc3RyZW5ndGggPSAxIH06IFJpcHBsZU9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHNpemUsIGNlbGxTaXplIH0gPSB0aGlzO1xuICAgIGNvbnN0IHJlYWNoID0gdmVjMihyYWRpdXMgKiAyLCByYWRpdXMgKiAyKTtcbiAgICBjb25zdCBmaXJzdCA9IHZlYzIubWFwKHZlYzIuc3ViKHBvc2l0aW9uLCByZWFjaCksIE1hdGguZmxvb3IpO1xuICAgIGNvbnN0IGxhc3QgPSB2ZWMyLm1hcCh2ZWMyLmFkZChwb3NpdGlvbiwgcmVhY2gpLCBNYXRoLmNlaWwpO1xuXG4gICAgY29uc3Qgc3RhcnRYID0gTWF0aC5tYXgoTWF0aC5mbG9vcihmaXJzdC54IC8gY2VsbFNpemUueCksIDApO1xuICAgIGNvbnN0IGVuZFggPSBNYXRoLm1pbihNYXRoLmNlaWwobGFzdC54IC8gY2VsbFNpemUueCksIHNpemUueCAtIDEpO1xuICAgIGNvbnN0IHN0YXJ0WSA9IE1hdGgubWF4KE1hdGguZmxvb3IoZmlyc3QueSAvIGNlbGxTaXplLnkpLCAwKTtcbiAgICBjb25zdCBlbmRZID0gTWF0aC5taW4oTWF0aC5jZWlsKGxhc3QueSAvIGNlbGxTaXplLnkpLCBzaXplLnkgLSAxKTtcblxuICAgIGZvciAobGV0IHkgPSBzdGFydFk7IHkgPD0gZW5kWTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gc3RhcnRYOyB4IDw9IGVuZFg7IHgrKykge1xuICAgICAgICBjb25zdCBkeCA9ICh4ICsgMC41KSAqIGNlbGxTaXplLnggLSBwb3NpdGlvbi54O1xuICAgICAgICBjb25zdCBkeSA9ICh5ICsgMC41KSAqIGNlbGxTaXplLnkgLSBwb3NpdGlvbi55O1xuICAgICAgICBjb25zdCBhbW91bnQgPVxuICAgICAgICAgIHN0cmVuZ3RoICogTWF0aC5leHAoLShkeCAqIGR4ICsgZHkgKiBkeSkgLyAocmFkaXVzICogcmFkaXVzKSk7XG5cbiAgICAgICAgdGhpcy5oZWlnaHRbeCArIHkgKiBzaXplLnhdICs9IGFtb3VudDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1t4ICsgeSAqIHNpemUueF0gKz0gYW1vdW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBzaW11bGF0aW9uIGZvcndhcmRcbiAgICpcbiAgICogYHNwZWVkYCBpcyBob3cgZmFyIHJpcHBsZXMgdHJhdmVsIGVhY2ggc2Vjb25kLCBpbiB3b3JsZCB1bml0cywgYW5kXG4gICAqIGBkYW1waW5nYCBpcyBob3cgbXVjaCBvZiB0aGVpciBtb3ZlbWVudCBpcyBrZXB0IGVhY2ggc3RlcFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyLCBzcGVlZDogbnVtYmVyLCBkYW1waW5nOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50aW1lICs9IGR0O1xuXG4gICAgLy8gRG9uJ3QgdHJ5IHRvIGNhdGNoIHVwIGFmdGVyIGEgbG9uZyBwYXVzZVxuICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4oTWF0aC5mbG9vcih0aGlzLnRpbWUgLyBSaXBwbGVGaWVsZC5USU1FX1NURVApLCA0KTtcbiAgICB0aGlzLnRpbWUgJT0gUmlwcGxlRmllbGQuVElNRV9TVEVQO1xuXG4gICAgY29uc3QgY2VsbCA9IE1hdGgubWluKHRoaXMuY2VsbFNpemUueCwgdGhpcy5jZWxsU2l6ZS55KTtcbiAgICBjb25zdCB3YXZlID0gTWF0aC5taW4oXG4gICAgICBzcGVlZCAqIFJpcHBsZUZpZWxkLlRJTUVfU1RFUCAvIGNlbGwsXG4gICAgICBSaXBwbGVGaWVsZC5NQVhfV0FWRV9OVU1CRVJcbiAgICApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGVwczsgaSsrKSB7XG4gICAgICB0aGlzLnN0ZXAod2F2ZSAqIHdhdmUsIGRhbXBpbmcpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGl4ZWxzKCk7XG4gIH1cblxuICBwcml2YXRlIHN0ZXAod2F2ZTogbnVtYmVyLCBkYW1waW5nOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgcHJldmlvdXMsIGJsb2NrZWQgfSA9IHRoaXM7XG4gICAgY29uc3QgeyB4OiBjb2x1bW5zLCB5OiByb3dzIH0gPSB0aGlzLnNpemU7XG5cbiAgICBsZXQgbGFyZ2VzdCA9IDA7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHJvd3M7IHkrKykge1xuICAgICAgY29uc3QgdXAgPSB5ID4gMCA/IC1jb2x1bW5zIDogMDtcbiAgICAgIGNvbnN0IGRvd24gPSB5IDwgcm93cyAtIDEgPyBjb2x1bW5zIDogMDtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjb2x1bW5zOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9IHggKyB5ICogY29sdW1ucztcblxuICAgICAgICBpZiAoYmxvY2tlZD8uW2ldKSB7XG4gICAgICAgICAgcHJldmlvdXNbaV0gPSAwO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVmdCA9IHggPiAwID8gLTEgOiAwO1xuICAgICAgICBjb25zdCByaWdodCA9IHggPCBjb2x1bW5zIC0gMSA/IDEgOiAwO1xuICAgICAgICBjb25zdCBuZWlnaGJvdXJzID1cbiAgICAgICAgICBoZWlnaHRbaSArIGxlZnRdICtcbiAgICAgICAgICBoZWlnaHRbaSArIHJpZ2h0XSArXG4gICAgICAgICAgaGVpZ2h0W2kgKyB1cF0gK1xuICAgICAgICAgIGhlaWdodFtpICsgZG93bl07XG5cbiAgICAgICAgLy8gVGhlIHByZXZpb3VzIGhlaWdodCBpcyBvdmVyd3JpdHRlbiBoZXJlIGJlY2F1c2UgdGhhdCdzIGFsbCB3ZSBuZWVkXG4gICAgICAgIC8vIGl0IGZvciwgc28gdGhlc2UgMiBhcnJheXMgc3dhcCByb2xlcyBhZnRlciBlYWNoIHN0ZXBcbiAgICAgICAgY29uc3QgbmV4dCA9XG4gICAgICAgICAgKGhlaWdodFtpXSArXG4gICAgICAgICAgICAoaGVpZ2h0W2ldIC0gcHJldmlvdXNbaV0pICogZGFtcGluZyArXG4gICAgICAgICAgICAobmVpZ2hib3VycyAtIGhlaWdodFtpXSAqIDQpICogd2F2ZSkgKlxuICAgICAgICAgIFJpcHBsZUZpZWxkLkhFSUdIVF9SRVRBSU5FRDtcblxuICAgICAgICBwcmV2aW91c1tpXSA9IG5leHQ7XG4gICAgICAgIGxhcmdlc3QgPSBNYXRoLm1heChsYXJnZXN0LCBNYXRoLmFicyhuZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oZWlnaHQgPSBwcmV2aW91cztcbiAgICB0aGlzLnByZXZpb3VzID0gaGVpZ2h0O1xuXG4gICAgaWYgKGxhcmdlc3QgPCBSaXBwbGVGaWVsZC5NSU5fSEVJR0hUKSB7XG4gICAgICB0aGlzLmhlaWdodC5maWxsKDApO1xuICAgICAgdGhpcy5wcmV2aW91cy5maWxsKDApO1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBpeGVscygpIHtcbiAgICBjb25zdCB7IGhlaWdodCwgcGl4ZWxzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgeDogY29sdW1ucywgeTogcm93cyB9ID0gdGhpcy5zaXplO1xuXG4gICAgY29uc3QgZW5jb2RlID0gKHZhbHVlOiBudW1iZXIpID0+XG4gICAgICBNYXRoLm1pbihNYXRoLm1heChNYXRoLnJvdW5kKHZhbHVlICogMTI3KSArIDEyOCwgMCksIDI1NSk7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHJvd3M7IHkrKykge1xuICAgICAgY29uc3QgdXAgPSB5ID4gMCA/IC1jb2x1bW5zIDogMDtcbiAgICAgIGNvbnN0IGRvd24gPSB5IDwgcm93cyAtIDEgPyBjb2x1bW5zIDogMDtcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjb2x1bW5zOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9IHggKyB5ICogY29sdW1ucztcbiAgICAgICAgY29uc3QgbGVmdCA9IHggPiAwID8gLTEgOiAwO1xuICAgICAgICBjb25zdCByaWdodCA9IHggPCBjb2x1bW5zIC0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHBpeGVsc1tpICogNF0gPSBlbmNvZGUoKGhlaWdodFtpICsgcmlnaHRdIC0gaGVpZ2h0W2kgKyBsZWZ0XSkgLyAyKTtcbiAgICAgICAgcGl4ZWxzW2kgKiA0ICsgMV0gPSBlbmNvZGUoKGhlaWdodFtpICsgZG93bl0gLSBoZWlnaHRbaSArIHVwXSkgLyAyKTtcbiAgICAgICAgcGl4ZWxzW2kgKiA0ICsgMl0gPSBlbmNvZGUoaGVpZ2h0W2ldKTtcbiAgICAgICAgcGl4ZWxzW2kgKiA0ICsgM10gPSAyNTU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyB2ZWMyIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IEZyYW1lLCBHbENvbnRleHQsIEdsUHJvZ3JhbSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBXYXRlclJlZ2lvbiB9IGZyb20gJy4vV2F0ZXJSZWdpb24nO1xuaW1wb3J0IHdhdGVyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3dhdGVyLmZyYWcuZ2xzbCcpO1xuXG5lbnVtIFRleHR1cmVVbml0IHtcbiAgU2NlbmUsXG4gIFJlZmxlY3Rpb25NYXAsXG4gIE1hc2ssXG4gIERlcHRoTWFwLFxuICBGbG93TWFwLFxuICBXYXZlTWFwLFxuICBOb2lzZU1hcCxcbiAgUmlwcGxlTWFwLFxufVxuXG4vKipcbiAqIFdoYXQgdGhlIHNoYWRlciBzaG91bGQgb3V0cHV0LCB0aGVzZSB2YWx1ZXMgYXJlIGFsc28gaW4gdGhlIHNoYWRlclxuICovXG5leHBvcnQgZW51bSBXYXRlck91dHB1dCB7XG4gIENvbG91ciA9IDAsXG4gIE5vcm1hbCA9IDEsXG4gIFNwZWN1bGFyID0gMixcbn1cblxudHlwZSBSZWdpb25UZXh0dXJlcyA9IHtcbiAgbWFzazogV2ViR0xUZXh0dXJlO1xuICBtYXNrSW1hZ2U6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBtYXNrVmVyc2lvbjogbnVtYmVyO1xuICBkZXB0aDogV2ViR0xUZXh0dXJlO1xuICBkZXB0aFZlcnNpb246IG51bWJlcjtcbiAgZmxvdzogV2ViR0xUZXh0dXJlO1xuICBmbG93VmVyc2lvbjogbnVtYmVyO1xuICByaXBwbGVzOiBXZWJHTFRleHR1cmU7XG4gIHJpcHBsZXNVcGxvYWRlZDogYm9vbGVhbjtcbiAgd2F2ZXM6IFdlYkdMVGV4dHVyZSB8IG51bGw7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgd2F0ZXIgdXNpbmcgYSBzaGFyZWQgV2ViR0wgY29udGV4dFxuICovXG5leHBvcnQgY2xhc3MgV2F0ZXJQYXNzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FWRV9NQVBfU0laRSA9IDI1NjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FWRV9DT1VOVCA9IDMyO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBXQVZFX01BWF9GUkVRVUVOQ1kgPSAxNDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9JU0VfV0FWRV9DT1VOVCA9IDg7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PSVNFX01BWF9GUkVRVUVOQ1kgPSAzO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGTE9XX0NZQ0xFID0gMjtcblxuICBwcml2YXRlIHN0YXRpYyB3YXZlTWFwRGF0YTogVWludDhBcnJheSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBNYWtlIGEgdGlsaW5nIG5vcm1hbCBtYXAgd2l0aCBub2lzZSBpbiB0aGUgYmx1ZSBjaGFubmVsLCB0aGUgbm9ybWFsIG1hcCBpc1xuICAgKiBtYWRlIGZyb20gc2luZSB3YXZlcyB0aGF0IHJlcGVhdCBhIHdob2xlIG51bWJlciBvZiB0aW1lcyBhY3Jvc3MgdGhlIHRleHR1cmVcbiAgICogc28gdGhhdCBpdCB0aWxlcyBwZXJmZWN0bHlcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGdldFdhdmVNYXBEYXRhKCk6IFVpbnQ4QXJyYXkge1xuICAgIGlmIChXYXRlclBhc3Mud2F2ZU1hcERhdGEpIHtcbiAgICAgIHJldHVybiBXYXRlclBhc3Mud2F2ZU1hcERhdGE7XG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IFdhdGVyUGFzcy5XQVZFX01BUF9TSVpFO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShzaXplICogc2l6ZSAqIDQpO1xuICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguUEkgKiAyKSAvIHNpemU7XG5cbiAgICAvLyBUaGUgdGV4dHVyZXMgc2hvdWxkIGJlIHRoZSBzYW1lIGV2ZXJ5IHRpbWUsIHNvIHRoaXMgdXNlcyBhIHNtYWxsIHJhbmRvbVxuICAgIC8vIG51bWJlciBnZW5lcmF0b3IgaW5zdGVhZCBvZiBNYXRoLnJhbmRvbSgpXG4gICAgbGV0IHNlZWQgPSAxMjM0NTtcbiAgICBjb25zdCByYW5kb20gPSAoKSA9PiB7XG4gICAgICBzZWVkID0gKHNlZWQgKiAxNjgwNykgJSAyMTQ3NDgzNjQ3O1xuXG4gICAgICByZXR1cm4gc2VlZCAvIDIxNDc0ODM2NDc7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVdhdmVzID0gKGNvdW50OiBudW1iZXIsIG1heEZyZXF1ZW5jeTogbnVtYmVyKSA9PlxuICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmcmVxdWVuY3kgPSAoKSA9PlxuICAgICAgICAgIE1hdGgucm91bmQoKHJhbmRvbSgpICogMiAtIDEpICogbWF4RnJlcXVlbmN5KSB8fCAxO1xuICAgICAgICBjb25zdCB4ID0gZnJlcXVlbmN5KCk7XG4gICAgICAgIGNvbnN0IHkgPSBmcmVxdWVuY3koKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBwaGFzZTogcmFuZG9tKCkgKiBNYXRoLlBJICogMixcbiAgICAgICAgICBhbXBsaXR1ZGU6IDEgLyBNYXRoLmh5cG90KHgsIHkpLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBjb25zdCB3YXZlcyA9IGNyZWF0ZVdhdmVzKFxuICAgICAgV2F0ZXJQYXNzLldBVkVfQ09VTlQsXG4gICAgICBXYXRlclBhc3MuV0FWRV9NQVhfRlJFUVVFTkNZXG4gICAgKTtcbiAgICBjb25zdCBub2lzZSA9IGNyZWF0ZVdhdmVzKFxuICAgICAgV2F0ZXJQYXNzLk5PSVNFX1dBVkVfQ09VTlQsXG4gICAgICBXYXRlclBhc3MuTk9JU0VfTUFYX0ZSRVFVRU5DWVxuICAgICk7XG5cbiAgICBjb25zdCBzbG9wZXMgPSBuZXcgRmxvYXQzMkFycmF5KHNpemUgKiBzaXplICogMik7XG4gICAgY29uc3QgaGVpZ2h0cyA9IG5ldyBGbG9hdDMyQXJyYXkoc2l6ZSAqIHNpemUpO1xuICAgIGxldCBsYXJnZXN0U2xvcGUgPSAwO1xuICAgIGxldCBsYXJnZXN0SGVpZ2h0ID0gMDtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemU7IHgrKykge1xuICAgICAgICBjb25zdCBpID0geCArIHkgKiBzaXplO1xuXG4gICAgICAgIGZvciAoY29uc3Qgd2F2ZSBvZiB3YXZlcykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5jb3MoXG4gICAgICAgICAgICAod2F2ZS54ICogeCArIHdhdmUueSAqIHkpICogYW5nbGUgKyB3YXZlLnBoYXNlXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHNsb3Blc1tpICogMl0gKz0gd2F2ZS5hbXBsaXR1ZGUgKiB3YXZlLnggKiB2YWx1ZTtcbiAgICAgICAgICBzbG9wZXNbaSAqIDIgKyAxXSArPSB3YXZlLmFtcGxpdHVkZSAqIHdhdmUueSAqIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCB3YXZlIG9mIG5vaXNlKSB7XG4gICAgICAgICAgaGVpZ2h0c1tpXSArPVxuICAgICAgICAgICAgd2F2ZS5hbXBsaXR1ZGUgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKHdhdmUueCAqIHggKyB3YXZlLnkgKiB5KSAqIGFuZ2xlICsgd2F2ZS5waGFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXJnZXN0U2xvcGUgPSBNYXRoLm1heChcbiAgICAgICAgICBsYXJnZXN0U2xvcGUsXG4gICAgICAgICAgTWF0aC5hYnMoc2xvcGVzW2kgKiAyXSksXG4gICAgICAgICAgTWF0aC5hYnMoc2xvcGVzW2kgKiAyICsgMV0pXG4gICAgICAgICk7XG4gICAgICAgIGxhcmdlc3RIZWlnaHQgPSBNYXRoLm1heChsYXJnZXN0SGVpZ2h0LCBNYXRoLmFicyhoZWlnaHRzW2ldKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplICogc2l6ZTsgaSsrKSB7XG4gICAgICBkYXRhW2kgKiA0XSA9IChzbG9wZXNbaSAqIDJdIC8gbGFyZ2VzdFNsb3BlKSAqIDEyNy41ICsgMTI3LjU7XG4gICAgICBkYXRhW2kgKiA0ICsgMV0gPSAoc2xvcGVzW2kgKiAyICsgMV0gLyBsYXJnZXN0U2xvcGUpICogMTI3LjUgKyAxMjcuNTtcbiAgICAgIGRhdGFbaSAqIDQgKyAyXSA9IChoZWlnaHRzW2ldIC8gbGFyZ2VzdEhlaWdodCkgKiAxMjcuNSArIDEyNy41O1xuICAgICAgZGF0YVtpICogNCArIDNdID0gMjU1O1xuICAgIH1cblxuICAgIFdhdGVyUGFzcy53YXZlTWFwRGF0YSA9IGRhdGE7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgY29udGV4dDogR2xDb250ZXh0O1xuICBwcml2YXRlIGluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBwcm9ncmFtOiBHbFByb2dyYW07XG4gIHByaXZhdGUgc2NlbmVUZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIHByaXZhdGUgcmVmbGVjdGlvblRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgcHJpdmF0ZSB3YXZlVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBwcml2YXRlIHJlZ2lvblRleHR1cmVzID0gbmV3IE1hcDxXYXRlclJlZ2lvbiwgUmVnaW9uVGV4dHVyZXM+KCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRleHQ6IEdsQ29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0Lm9uSW5pdGlhbGlzZShnbCA9PiB0aGlzLmluaXRpYWxpc2UoZ2wpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IG9mIHRoZSBtb3N0IHJlY2VudCBwYXNzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5jYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoYWRlcnMgY2FuIGJlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuY29udGV4dC5hdmFpbGFibGU7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpc2UoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSh3YXRlclNoYWRlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignV2F0ZXIgaGFzIGJlZW4gZGlzYWJsZWQnLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjZW5lVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgdGhpcy5yZWZsZWN0aW9uVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgdGhpcy53YXZlVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgdGhpcy5yZWdpb25UZXh0dXJlcyA9IG5ldyBNYXAoKTtcblxuICAgIHRoaXMuY29udGV4dC51cGxvYWREYXRhKFxuICAgICAgVGV4dHVyZVVuaXQuV2F2ZU1hcCxcbiAgICAgIHRoaXMud2F2ZVRleHR1cmUsXG4gICAgICB2ZWMyKFdhdGVyUGFzcy5XQVZFX01BUF9TSVpFKSxcbiAgICAgIFdhdGVyUGFzcy5nZXRXYXZlTWFwRGF0YSgpLFxuICAgICAgZ2wuTElORUFSLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JnZXQgYWJvdXQgYSByZWdpb24ncyB0ZXh0dXJlc1xuICAgKi9cbiAgcHVibGljIHJlbGVhc2UocmVnaW9uOiBXYXRlclJlZ2lvbikge1xuICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5yZWdpb25UZXh0dXJlcy5nZXQocmVnaW9uKTtcbiAgICBpZiAoIXRleHR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGdsPy5kZWxldGVUZXh0dXJlKHRleHR1cmVzLm1hc2spO1xuICAgIGdsPy5kZWxldGVUZXh0dXJlKHRleHR1cmVzLmRlcHRoKTtcbiAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy5mbG93KTtcbiAgICBnbD8uZGVsZXRlVGV4dHVyZSh0ZXh0dXJlcy5yaXBwbGVzKTtcbiAgICBpZiAodGV4dHVyZXMud2F2ZXMpIHtcbiAgICAgIGdsPy5kZWxldGVUZXh0dXJlKHRleHR1cmVzLndhdmVzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZ2lvblRleHR1cmVzLmRlbGV0ZShyZWdpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZXh0dXJlcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb25cbiAgKTogUmVnaW9uVGV4dHVyZXMge1xuICAgIGxldCB0ZXh0dXJlcyA9IHRoaXMucmVnaW9uVGV4dHVyZXMuZ2V0KHJlZ2lvbik7XG4gICAgaWYgKCF0ZXh0dXJlcykge1xuICAgICAgdGV4dHVyZXMgPSB7XG4gICAgICAgIG1hc2s6IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICAgIG1hc2tJbWFnZTogbnVsbCxcbiAgICAgICAgbWFza1ZlcnNpb246IC0xLFxuICAgICAgICBkZXB0aDogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgICAgZGVwdGhWZXJzaW9uOiAtMSxcbiAgICAgICAgZmxvdzogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgICAgZmxvd1ZlcnNpb246IC0xLFxuICAgICAgICByaXBwbGVzOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgICByaXBwbGVzVXBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICB3YXZlczogcmVnaW9uLm5vcm1hbE1hcCA/IGdsLmNyZWF0ZVRleHR1cmUoKSEgOiBudWxsLFxuICAgICAgfTtcbiAgICAgIHRoaXMucmVnaW9uVGV4dHVyZXMuc2V0KHJlZ2lvbiwgdGV4dHVyZXMpO1xuXG4gICAgICBpZiAocmVnaW9uLm5vcm1hbE1hcCAmJiB0ZXh0dXJlcy53YXZlcykge1xuICAgICAgICB0aGlzLmNvbnRleHQudXBsb2FkKFxuICAgICAgICAgIFRleHR1cmVVbml0LldhdmVNYXAsXG4gICAgICAgICAgdGV4dHVyZXMud2F2ZXMsXG4gICAgICAgICAgdGhpcy5wb3dlck9mVHdvSW1hZ2UocmVnaW9uLm5vcm1hbE1hcCksXG4gICAgICAgICAgZ2wuTElORUFSLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZXM7XG4gIH1cblxuICAvKipcbiAgICogVGV4dHVyZXMgY2FuIG9ubHkgdGlsZSBpZiB0aGVpciBzaXplIGlzIGEgcG93ZXIgb2YgMlxuICAgKi9cbiAgcHJpdmF0ZSBwb3dlck9mVHdvSW1hZ2UoaW1hZ2U6IFNjZW5lSW1hZ2UpOiBTY2VuZUltYWdlIHtcbiAgICBjb25zdCBpc1Bvd2VyT2ZUd28gPSAobjogbnVtYmVyKSA9PiAobiAmIChuIC0gMSkpID09PSAwO1xuICAgIGlmIChpc1Bvd2VyT2ZUd28oaW1hZ2Uud2lkdGgpICYmIGlzUG93ZXJPZlR3byhpbWFnZS5oZWlnaHQpKSB7XG4gICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IFdhdGVyUGFzcy5XQVZFX01BUF9TSVpFO1xuICAgIGNhbnZhc1xuICAgICAgLmdldENvbnRleHQoJzJkJykhXG4gICAgICAuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXNrcyBjYW4gYmUgY2FudmFzZXMsIGJ1dCB0aGV5IGRvbid0IGNoYW5nZSB2ZXJ5IG9mdGVuIHNvIHRoZXkncmUgb25seVxuICAgKiB1cGxvYWRlZCBpZiB3ZSdyZSB0b2xkIGFib3V0IGEgY2hhbmdlXG4gICAqL1xuICBwcml2YXRlIGJpbmRNYXNrKFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb24sXG4gICAgdGV4dHVyZXM6IFJlZ2lvblRleHR1cmVzLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIGNvbnN0IHsgbWFzaywgbWFza1ZlcnNpb24gfSA9IHJlZ2lvbjtcbiAgICBpZiAoIW1hc2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGV4dHVyZXMubWFza0ltYWdlID09PSBtYXNrICYmIHRleHR1cmVzLm1hc2tWZXJzaW9uID09PSBtYXNrVmVyc2lvbikge1xuICAgICAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRleHR1cmVVbml0Lk1hc2ssIHRleHR1cmVzLm1hc2ssIGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGV4dC51cGxvYWQoVGV4dHVyZVVuaXQuTWFzaywgdGV4dHVyZXMubWFzaywgbWFzaywgZmlsdGVyKTtcbiAgICAgIHRleHR1cmVzLm1hc2tJbWFnZSA9IG1hc2s7XG4gICAgICB0ZXh0dXJlcy5tYXNrVmVyc2lvbiA9IG1hc2tWZXJzaW9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSByZWdpb24ncyB0ZXh0dXJlcyBhcmUgdXAgdG8gZGF0ZSBhbmQgYmluZCB0aGVtXG4gICAqL1xuICBwcml2YXRlIGJpbmRSZWdpb24oXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICByZWdpb246IFdhdGVyUmVnaW9uLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIGNvbnN0IHRleHR1cmVzID0gdGhpcy5nZXRUZXh0dXJlcyhnbCwgcmVnaW9uKTtcbiAgICBjb25zdCB7IGRlcHRoUGl4ZWxzLCBmbG93UGl4ZWxzLCByaXBwbGVzIH0gPSByZWdpb247XG5cbiAgICB0aGlzLmJpbmRNYXNrKHJlZ2lvbiwgdGV4dHVyZXMsIGZpbHRlcik7XG5cbiAgICBpZiAodGV4dHVyZXMuZGVwdGhWZXJzaW9uID09PSBkZXB0aFBpeGVscy52ZXJzaW9uKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVGV4dHVyZVVuaXQuRGVwdGhNYXAsIHRleHR1cmVzLmRlcHRoLCBnbC5MSU5FQVIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkRGF0YShcbiAgICAgICAgVGV4dHVyZVVuaXQuRGVwdGhNYXAsXG4gICAgICAgIHRleHR1cmVzLmRlcHRoLFxuICAgICAgICBkZXB0aFBpeGVscy5zaXplLFxuICAgICAgICBkZXB0aFBpeGVscy5kYXRhLFxuICAgICAgICBnbC5MSU5FQVJcbiAgICAgICk7XG4gICAgICB0ZXh0dXJlcy5kZXB0aFZlcnNpb24gPSBkZXB0aFBpeGVscy52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmICh0ZXh0dXJlcy5mbG93VmVyc2lvbiA9PT0gZmxvd1BpeGVscy52ZXJzaW9uKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVGV4dHVyZVVuaXQuRmxvd01hcCwgdGV4dHVyZXMuZmxvdywgZ2wuTElORUFSKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZERhdGEoXG4gICAgICAgIFRleHR1cmVVbml0LkZsb3dNYXAsXG4gICAgICAgIHRleHR1cmVzLmZsb3csXG4gICAgICAgIGZsb3dQaXhlbHMuc2l6ZSxcbiAgICAgICAgZmxvd1BpeGVscy5kYXRhLFxuICAgICAgICBnbC5MSU5FQVJcbiAgICAgICk7XG4gICAgICB0ZXh0dXJlcy5mbG93VmVyc2lvbiA9IGZsb3dQaXhlbHMudmVyc2lvbjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoXG4gICAgICBUZXh0dXJlVW5pdC5XYXZlTWFwLFxuICAgICAgdGV4dHVyZXMud2F2ZXMgPz8gdGhpcy53YXZlVGV4dHVyZSxcbiAgICAgIGdsLkxJTkVBUixcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgLy8gUmlwcGxlcyBvbmx5IG5lZWQgdXBsb2FkaW5nIHdoaWxlIHRoZXkncmUgbW92aW5nXG4gICAgaWYgKHJpcHBsZXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmNvbnRleHQudXBsb2FkRGF0YShcbiAgICAgICAgVGV4dHVyZVVuaXQuUmlwcGxlTWFwLFxuICAgICAgICB0ZXh0dXJlcy5yaXBwbGVzLFxuICAgICAgICByaXBwbGVzLnNpemUsXG4gICAgICAgIHJpcHBsZXMucGl4ZWxzLFxuICAgICAgICBnbC5MSU5FQVJcbiAgICAgICk7XG4gICAgICB0ZXh0dXJlcy5yaXBwbGVzVXBsb2FkZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGV4dHVyZXMucmlwcGxlc1VwbG9hZGVkKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoXG4gICAgICAgIFRleHR1cmVVbml0LlJpcHBsZU1hcCxcbiAgICAgICAgdGV4dHVyZXMucmlwcGxlcyxcbiAgICAgICAgZ2wuTElORUFSXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UmVnaW9uVW5pZm9ybXMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgcmVnaW9uOiBXYXRlclJlZ2lvbikge1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMucHJvZ3JhbTtcbiAgICBjb25zdCBjb2xvdXIgPSBwYXJzZUNvbG9yKHJlZ2lvbi5jb2xvdXIpO1xuICAgIGNvbnN0IGRlZXBDb2xvdXIgPSBwYXJzZUNvbG9yKHJlZ2lvbi5kZWVwQ29sb3VyKTtcbiAgICBjb25zdCB7IG1hc2sgfSA9IHJlZ2lvbjtcblxuICAgIGdsLnVuaWZvcm0yZihcbiAgICAgIHVuaWZvcm1zLnVfcmVnaW9uUG9zaXRpb24sXG4gICAgICByZWdpb24ucG9zaXRpb24ueCxcbiAgICAgIHJlZ2lvbi5wb3NpdGlvbi55XG4gICAgKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9yZWdpb25TaXplLCByZWdpb24uc2l6ZS54LCByZWdpb24uc2l6ZS55KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV91c2VNYXNrLCBtYXNrID8gMSA6IDApO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3VzZU1hc2tSZXBlYXQsIHJlZ2lvbi5yZXBlYXQgPyAxIDogMCk7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGdsLnVuaWZvcm0yZih1bmlmb3Jtcy51X21hc2tTaXplLCBtYXNrLndpZHRoLCBtYXNrLmhlaWdodCk7XG4gICAgfVxuXG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlUmlwcGxlcywgcmVnaW9uLnJpcHBsZXMuYWN0aXZlID8gMSA6IDApO1xuICAgIGdsLnVuaWZvcm0zZihcbiAgICAgIHVuaWZvcm1zLnVfY29sb3VyLFxuICAgICAgY29sb3VyLnIgLyAyNTUsXG4gICAgICBjb2xvdXIuZyAvIDI1NSxcbiAgICAgIGNvbG91ci5iIC8gMjU1XG4gICAgKTtcbiAgICBnbC51bmlmb3JtM2YoXG4gICAgICB1bmlmb3Jtcy51X2RlZXBDb2xvdXIsXG4gICAgICBkZWVwQ29sb3VyLnIgLyAyNTUsXG4gICAgICBkZWVwQ29sb3VyLmcgLyAyNTUsXG4gICAgICBkZWVwQ29sb3VyLmIgLyAyNTVcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X29wYWNpdHksIHJlZ2lvbi5vcGFjaXR5KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zaG9yZUJsZW5kLCByZWdpb24uc2hvcmVCbGVuZCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfcmVmcmFjdGlvbiwgcmVnaW9uLnJlZnJhY3Rpb24pO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3JlZmxlY3Rpb24sIHJlZ2lvbi5yZWZsZWN0aW9uKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9yZWZsZWN0aW9uRGlzdG9ydGlvbiwgcmVnaW9uLnJlZmxlY3Rpb25EaXN0b3J0aW9uKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YXZlU2l6ZSwgcmVnaW9uLndhdmVTaXplKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YXZlU3BlZWQsIHJlZ2lvbi53YXZlU3BlZWQpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3dhdmVTdHJlbmd0aCwgcmVnaW9uLndhdmVTdHJlbmd0aCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfcmlwcGxlU3RyZW5ndGgsIHJlZ2lvbi5yaXBwbGVTdHJlbmd0aCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfZmxvd0N5Y2xlLCBXYXRlclBhc3MuRkxPV19DWUNMRSk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdW5pZm9ybXMudV9mbG93RGlzdGFuY2UsXG4gICAgICByZWdpb24uZmxvd1NwZWVkICogV2F0ZXJQYXNzLkZMT1dfQ1lDTEVcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3NwZWN1bGFyLCByZWdpb24uc3BlY3VsYXIpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3N1cmZhY2VTaGFkaW5nLCByZWdpb24uc3VyZmFjZVNoYWRpbmcpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3BpeGVsU2l6ZSwgcmVnaW9uLnBpeGVsU2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdSZWdpb24oXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICByZWdpb246IFdhdGVyUmVnaW9uLFxuICAgIGZyYW1lOiBGcmFtZVxuICApIHtcbiAgICBjb25zdCB0b3BMZWZ0ID0gZnJhbWUuY2FtZXJhLndvcmxkVG9TY3JlZW4ocmVnaW9uLnBvc2l0aW9uKTtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IGZyYW1lLmNhbWVyYS53b3JsZFRvU2NyZWVuKFxuICAgICAgdmVjMi5hZGQocmVnaW9uLnBvc2l0aW9uLCByZWdpb24uc2l6ZSlcbiAgICApO1xuICAgIGNvbnN0IHNpemUgPSB2ZWMyLnN1Yihib3R0b21SaWdodCwgdG9wTGVmdCk7XG4gICAgY29uc3QgeyB1bmlmb3JtcyB9ID0gdGhpcy5wcm9ncmFtO1xuXG4gICAgdGhpcy5iaW5kUmVnaW9uKFxuICAgICAgZ2wsXG4gICAgICByZWdpb24sXG4gICAgICBmcmFtZS5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1RcbiAgICApO1xuICAgIHRoaXMuc2V0UmVnaW9uVW5pZm9ybXMoZ2wsIHJlZ2lvbik7XG4gICAgZ2wudW5pZm9ybTJmKHVuaWZvcm1zLnVfcmVnaW9uU2NyZWVuUG9zaXRpb24sIHRvcExlZnQueCwgdG9wTGVmdC55KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9jYW1lcmFTY2FsZSwgc2l6ZS54IC8gcmVnaW9uLnNpemUueCk7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd1F1YWQoXG4gICAgICB0aGlzLnByb2dyYW0sXG4gICAgICBbdG9wTGVmdC54LCB0b3BMZWZ0LnksIHNpemUueCwgc2l6ZS55XSxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIFswLCAwLCAxLCAxXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHNvbWUgd2F0ZXIgaW50byB0aGUgY2FudmFzXG4gICAqXG4gICAqIFdpdGggYSBgc2NhbGVgIGJlbG93IDEgdGhlIG91dHB1dCBpcyBzbWFsbGVyIHRoYW4gdGhlIGNhbnZhcywgYW5kIGl0J3MgaW5cbiAgICogdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBvZiB0aGUgY2FudmFzXG4gICAqXG4gICAqIGBzY2VuZWAgaXMgd2hhdCdzIHVuZGVybmVhdGggdGhlIHdhdGVyLCBpdCBjYW4gYmUgYSBzbWFsbGVyIGNvcHkgb2YgdGhlXG4gICAqIGZyYW1lJ3MgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihcbiAgICBmcmFtZTogRnJhbWUsXG4gICAgcmVnaW9uczogV2F0ZXJSZWdpb25bXSxcbiAgICBvdXRwdXQ6IFdhdGVyT3V0cHV0LFxuICAgIHRpbWU6IG51bWJlcixcbiAgICBzY2FsZTogbnVtYmVyID0gMSxcbiAgICBzY2VuZTogU2NlbmVJbWFnZSA9IGZyYW1lLmNvbnRleHQuY2FudmFzXG4gICkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuY29udGV4dDtcbiAgICBpZiAoIWdsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyB1bmlmb3JtcywgcHJvZ3JhbSB9ID0gdGhpcy5wcm9ncmFtO1xuICAgIGNvbnN0IGZpbHRlciA9IGZyYW1lLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIHRoaXMuY29udGV4dC5yZXNpemUoZnJhbWUuc2NyZWVuKTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wudmlld3BvcnQoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIE1hdGguY2VpbChmcmFtZS5zY3JlZW4ueCAqIHNjYWxlKSxcbiAgICAgIE1hdGguY2VpbChmcmFtZS5zY3JlZW4ueSAqIHNjYWxlKVxuICAgICk7XG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcblxuICAgIC8vIFRoZSBzY2VuZSBhbmQgaXRzIHJlZmxlY3Rpb25zIG9ubHkgbWF0dGVyIGZvciB0aGUgd2F0ZXIncyBjb2xvdXJcbiAgICBpZiAob3V0cHV0ID09PSBXYXRlck91dHB1dC5Db2xvdXIpIHtcbiAgICAgIHRoaXMuY29udGV4dC51cGxvYWQoXG4gICAgICAgIFRleHR1cmVVbml0LlNjZW5lLFxuICAgICAgICB0aGlzLnNjZW5lVGV4dHVyZSxcbiAgICAgICAgc2NlbmUsXG4gICAgICAgIGZpbHRlclxuICAgICAgKTtcblxuICAgICAgaWYgKGZyYW1lLnJlZmxlY3Rpb25NYXApIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnVwbG9hZChcbiAgICAgICAgICBUZXh0dXJlVW5pdC5SZWZsZWN0aW9uTWFwLFxuICAgICAgICAgIHRoaXMucmVmbGVjdGlvblRleHR1cmUsXG4gICAgICAgICAgZnJhbWUucmVmbGVjdGlvbk1hcCxcbiAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgbm9pc2UgaXMgYWx3YXlzIGluIHRoZSBkZWZhdWx0IG1hcCwgZXZlbiBpZiBhIHJlZ2lvbiBoYXMgaXRzIG93blxuICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShcbiAgICAgIFRleHR1cmVVbml0Lk5vaXNlTWFwLFxuICAgICAgdGhpcy53YXZlVGV4dHVyZSxcbiAgICAgIGdsLkxJTkVBUixcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9zY3JlZW4sIGZyYW1lLnNjcmVlbi54LCBmcmFtZS5zY3JlZW4ueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdGltZSwgdGltZSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfb3V0cHV0LCBvdXRwdXQpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3Jtcy51X3VzZVJlZmxlY3Rpb24sIGZyYW1lLnJlZmxlY3Rpb25NYXAgPyAxIDogMCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfc2NlbmUsIFRleHR1cmVVbml0LlNjZW5lKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9yZWZsZWN0aW9uTWFwLCBUZXh0dXJlVW5pdC5SZWZsZWN0aW9uTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9tYXNrLCBUZXh0dXJlVW5pdC5NYXNrKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9kZXB0aE1hcCwgVGV4dHVyZVVuaXQuRGVwdGhNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X2Zsb3dNYXAsIFRleHR1cmVVbml0LkZsb3dNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3dhdmVNYXAsIFRleHR1cmVVbml0LldhdmVNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X25vaXNlTWFwLCBUZXh0dXJlVW5pdC5Ob2lzZU1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfcmlwcGxlTWFwLCBUZXh0dXJlVW5pdC5SaXBwbGVNYXApO1xuXG4gICAgcmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB0aGlzLmRyYXdSZWdpb24oZ2wsIHJlZ2lvbiwgZnJhbWUpKTtcblxuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGZyYW1lLnNjcmVlbi54LCBmcmFtZS5zY3JlZW4ueSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYzIgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgZHJhd0ltYWdlSW5SZWN0YW5nbGUsIFJlY3RhbmdsZSwgU2NlbmVJbWFnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUmlwcGxlRmllbGQsIFJpcHBsZU9wdGlvbnMgfSBmcm9tICcuL1JpcHBsZUZpZWxkJztcbmltcG9ydCB0eXBlIHsgV2F0ZXJTeXN0ZW0gfSBmcm9tICcuL1dhdGVyU3lzdGVtJztcblxuLyoqXG4gKiBBIGdyaWQgb2YgdmFsdWVzIHRoYXQgY292ZXJzIGEgcmVnaW9uLCB0aGUgZmlyc3QgaW5kZXggaXMgdGhlIHJvd1xuICpcbiAqIFZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIGJldHdlZW4gdGhlIGNlbnRlcnMgb2YgdGhlIGNlbGxzXG4gKi9cbmV4cG9ydCB0eXBlIFdhdGVyR3JpZDxUPiA9IFRbXVtdO1xuXG5leHBvcnQgdHlwZSBXYXRlclJlZ2lvbk9wdGlvbnMgPSBSZWN0YW5nbGUgJiB7XG4gIC8qKlxuICAgKiBJbWFnZSB3aG9zZSBhbHBoYSBjaGFubmVsIGRlY2lkZXMgd2hlcmUgdGhlIHdhdGVyIGlzLCB0aGUgZGVmYXVsdCBpcyB0aGVcbiAgICogd2hvbGUgcmVjdGFuZ2xlXG4gICAqXG4gICAqIFRoZSBlZGdlIG9mIHRoZSBtYXNrIGlzIGEgaGFyZCBlZGdlIHVubGVzcyB0aGUgd2F0ZXIgZ2V0cyBzaGFsbG93ZXIgdG93YXJkc1xuICAgKiBpdCwgc28gdGhpcyBjYW4gYmUgdXNlZCBmb3Igc2hvcmVzIHRoYXQgZm9sbG93IHRoZSBzaGFwZSBvZiB0aGUgdGVycmFpblxuICAgKi9cbiAgbWFzaz86IFNjZW5lSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhlIG1hc2sgYmUgcmVwZWF0ZWQgYWNyb3NzIHRoZSByZWdpb24/IE90aGVyd2lzZSBpdCB3aWxsIGJlXG4gICAqIHN0cmV0Y2hlZCB0byBmaXRcbiAgICovXG4gIHJlcGVhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhvdyBkZWVwIHRoZSB3YXRlciBpcywgZnJvbSAwIGF0IHRoZSBzaG9yZSB0byAxIGluIHRoZSBkZWVwZXN0IHBhcnRzXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIGEgc2luZ2xlIG51bWJlciBvciBhIGdyaWRcbiAgICovXG4gIGRlcHRoPzogbnVtYmVyIHwgV2F0ZXJHcmlkPG51bWJlcj47XG5cbiAgLyoqXG4gICAqIFdoaWNoIHdheSB0aGUgd2F0ZXIgZmxvd3MgYW5kIGhvdyBxdWlja2x5LCB0aGVzZSB2ZWN0b3JzIHNob3VsZCBiZSBub1xuICAgKiBsb25nZXIgdGhhbiAxXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIGEgc2luZ2xlIHZlY3RvciBvciBhIGdyaWRcbiAgICovXG4gIGZsb3c/OiB2ZWMyIHwgV2F0ZXJHcmlkPHZlYzI+O1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSB0aGF0IHdhdGVyIG1vdmVzIGVhY2ggc2Vjb25kIHdoZW4gYSBmbG93IHZlY3RvciBoYXMgYSBsZW5ndGggb2YgMVxuICAgKi9cbiAgZmxvd1NwZWVkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgY29sb3VyIG9mIHNoYWxsb3cgd2F0ZXJcbiAgICovXG4gIGNvbG91cj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGNvbG91ciBvZiBkZWVwIHdhdGVyXG4gICAqL1xuICBkZWVwQ29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIb3cgbXVjaCB0aGUgd2F0ZXIgaGlkZXMgd2hhdCdzIHVuZGVybmVhdGggaXQgYXQgdGhlIGRlZXBlc3QgcG9pbnQsIGZyb20gMFxuICAgKiB0byAxXG4gICAqL1xuICBvcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVwdGggYXQgd2hpY2ggd2F0ZXIgaXMgZnVsbHkgdmlzaWJsZSwgaXQgZmFkZXMgb3V0IGF0IGRlcHRocyBiZWxvd1xuICAgKiB0aGlzIHRvIGJsZW5kIHdpdGggdGhlIHNob3JlLiBVc2UgMCBmb3Igd2F0ZXIgdGhhdCBkb2Vzbid0IGZhZGUgb3V0XG4gICAqL1xuICBzaG9yZUJsZW5kPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHdhdmVzIGNhbiBiZW5kIHdoYXQncyB1bmRlcm5lYXRoIHRoZSB3YXRlciwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJlZnJhY3Rpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzdHJvbmcgcmVmbGVjdGlvbnMgYXJlLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgcmVmbGVjdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGZhciB3YXZlcyBjYW4gYmVuZCByZWZsZWN0aW9ucywgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJlZmxlY3Rpb25EaXN0b3J0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIHRpbGluZyBub3JtYWwgbWFwIGZvciB3YXZlcywgdGhlIGRlZmF1bHQgaXMgYSBnZW5lcmF0ZWQgb25lXG4gICAqL1xuICBub3JtYWxNYXA/OiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIG5vcm1hbCBtYXAgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHdhdmVTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgcXVpY2tseSB3YXZlcyBtb3ZlLCBpbiB3b3JsZCB1bml0cyBwZXIgc2Vjb25kXG4gICAqL1xuICB3YXZlU3BlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzdGVlcCB3YXZlcyBhcmUsIGZyb20gMCBmb3IgZmxhdCB3YXRlciB0byAxXG4gICAqL1xuICB3YXZlU3RyZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzdGVlcCByaXBwbGVzIGFyZSBjb21wYXJlZCB0byB3YXZlc1xuICAgKi9cbiAgcmlwcGxlU3RyZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgcmlwcGxlcyB0cmF2ZWwgZWFjaCBzZWNvbmQsIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByaXBwbGVTcGVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IG11Y2ggb2YgdGhlaXIgbW92ZW1lbnQgcmlwcGxlcyBrZWVwIGVhY2ggc3RlcCwgZnJvbSAwIHRvIDFcbiAgICovXG4gIHJpcHBsZURhbXBpbmc/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIGVhY2ggY2VsbCBpbiB0aGUgcmlwcGxlIHNpbXVsYXRpb24sIGluIHdvcmxkIHVuaXRzXG4gICAqL1xuICByaXBwbGVDZWxsU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiByYWluZHJvcHMgZWFjaCBzZWNvbmQsIGZvciBldmVyeSAxMDAwMCBzcXVhcmUgd29ybGQgdW5pdHNcbiAgICovXG4gIHJhaW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIGVhY2ggcmFpbmRyb3AgZGlzdHVyYnMgdGhlIHdhdGVyXG4gICAqL1xuICByYWluU3RyZW5ndGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBzaGlueSB0aGUgd2F0ZXIgaXMgd2hlbiBsaWdodGluZyBpcyB1c2VkLCBmcm9tIDAgdG8gMVxuICAgKi9cbiAgc3BlY3VsYXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhvdyBtdWNoIHRoZSBzbG9wZSBvZiB0aGUgd2F0ZXIgY2hhbmdlcyBpdHMgYnJpZ2h0bmVzcywgdGhpcyBsZXRzIHdhdmVzIGFuZFxuICAgKiByaXBwbGVzIGJlIHNlZW4gZXZlbiBpZiB0aGVyZSBhcmVuJ3QgYW55IGxpZ2h0c1xuICAgKi9cbiAgc3VyZmFjZVNoYWRpbmc/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNuYXAgdGhlIHdhdGVyIHRvIGEgZ3JpZCBvZiB0aGlzIHNpemUgaW4gd29ybGQgdW5pdHMgZm9yIGEgcGl4ZWwgYXJ0XG4gICAqIHN0eWxlLCBvciB1c2UgMCBmb3Igc21vb3RoIHdhdGVyXG4gICAqL1xuICBwaXhlbFNpemU/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIFdoYXQncyBhdCBhIHBvaW50IGluIHRoZSB3YXRlclxuICovXG5leHBvcnQgdHlwZSBXYXRlclNhbXBsZSA9IHtcbiAgcmVnaW9uOiBXYXRlclJlZ2lvbjtcbiAgZGVwdGg6IG51bWJlcjtcbn07XG5cbi8qKlxuICogQW4gYXJlYSBvZiB3YXRlclxuICovXG5leHBvcnQgY2xhc3MgV2F0ZXJSZWdpb24ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlMgPSB7XG4gICAgcmVwZWF0OiBmYWxzZSxcbiAgICBmbG93U3BlZWQ6IDE2LFxuICAgIGNvbG91cjogJyMzZjhmYTgnLFxuICAgIGRlZXBDb2xvdXI6ICcjMTIzZjYzJyxcbiAgICBvcGFjaXR5OiAwLjcsXG4gICAgc2hvcmVCbGVuZDogMC4xNSxcbiAgICByZWZyYWN0aW9uOiA0LFxuICAgIHJlZmxlY3Rpb246IDAuNixcbiAgICByZWZsZWN0aW9uRGlzdG9ydGlvbjogMyxcbiAgICB3YXZlU2l6ZTogMTI4LFxuICAgIHdhdmVTcGVlZDogNixcbiAgICB3YXZlU3RyZW5ndGg6IDAuMzUsXG4gICAgcmlwcGxlU3RyZW5ndGg6IDIsXG4gICAgcmlwcGxlU3BlZWQ6IDYwLFxuICAgIHJpcHBsZURhbXBpbmc6IDAuOTcsXG4gICAgcmlwcGxlQ2VsbFNpemU6IDIsXG4gICAgcmFpbjogMCxcbiAgICByYWluU3RyZW5ndGg6IDAuNSxcbiAgICBzcGVjdWxhcjogMC41LFxuICAgIHN1cmZhY2VTaGFkaW5nOiAwLjIsXG4gICAgcGl4ZWxTaXplOiAwLFxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9SSVBQTEVfQ0VMTFMgPSAyNTY7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJBSU5EUk9QX1JBRElVUyA9IDIuNTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUkFJTl9BUkVBID0gMTAwMDA7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMyO1xuICBwdWJsaWMgc2l6ZTogdmVjMjtcbiAgcHVibGljIG1hc2s6IFNjZW5lSW1hZ2UgfCBudWxsO1xuICBwdWJsaWMgbm9ybWFsTWFwOiBTY2VuZUltYWdlIHwgbnVsbDtcblxuICBwdWJsaWMgcmVwZWF0OiBib29sZWFuO1xuICBwdWJsaWMgZmxvd1NwZWVkOiBudW1iZXI7XG4gIHB1YmxpYyBjb2xvdXI6IHN0cmluZztcbiAgcHVibGljIGRlZXBDb2xvdXI6IHN0cmluZztcbiAgcHVibGljIG9wYWNpdHk6IG51bWJlcjtcbiAgcHVibGljIHNob3JlQmxlbmQ6IG51bWJlcjtcbiAgcHVibGljIHJlZnJhY3Rpb246IG51bWJlcjtcbiAgcHVibGljIHJlZmxlY3Rpb246IG51bWJlcjtcbiAgcHVibGljIHJlZmxlY3Rpb25EaXN0b3J0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyB3YXZlU2l6ZTogbnVtYmVyO1xuICBwdWJsaWMgd2F2ZVNwZWVkOiBudW1iZXI7XG4gIHB1YmxpYyB3YXZlU3RyZW5ndGg6IG51bWJlcjtcbiAgcHVibGljIHJpcHBsZVN0cmVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyByaXBwbGVTcGVlZDogbnVtYmVyO1xuICBwdWJsaWMgcmlwcGxlRGFtcGluZzogbnVtYmVyO1xuICBwdWJsaWMgcmFpbjogbnVtYmVyO1xuICBwdWJsaWMgcmFpblN0cmVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyBzcGVjdWxhcjogbnVtYmVyO1xuICBwdWJsaWMgc3VyZmFjZVNoYWRpbmc6IG51bWJlcjtcbiAgcHVibGljIHBpeGVsU2l6ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyByZWFkb25seSByaXBwbGVzOiBSaXBwbGVGaWVsZDtcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgZGVwdGggYW5kIGZsb3csIGEgc2luZ2xlIHZhbHVlIGlzIGEgZ3JpZCB3aXRoIDEgY2VsbFxuICAgKi9cbiAgcHVibGljIGRlcHRoR3JpZDogV2F0ZXJHcmlkPG51bWJlcj4gPSBbWzFdXTtcbiAgcHVibGljIGZsb3dHcmlkOiBXYXRlckdyaWQ8dmVjMj4gPSBbW3ZlYzIoKV1dO1xuXG4gIC8qKlxuICAgKiBSR0JBIGRhdGEgZm9yIHRoZSBkZXB0aCBhbmQgZmxvdyBncmlkcywgdGhlIHZlcnNpb24gbnVtYmVycyBhcmUgY2hhbmdlZFxuICAgKiB3aGVuZXZlciB0aGUgZGF0YSBjaGFuZ2VzXG4gICAqL1xuICBwdWJsaWMgZGVwdGhQaXhlbHM6IHsgc2l6ZTogdmVjMjsgZGF0YTogVWludDhBcnJheTsgdmVyc2lvbjogbnVtYmVyIH07XG4gIHB1YmxpYyBmbG93UGl4ZWxzOiB7IHNpemU6IHZlYzI7IGRhdGE6IFVpbnQ4QXJyYXk7IHZlcnNpb246IG51bWJlciB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGNoYW5nZWQgd2hlbmV2ZXIgdGhlIG1hc2sgbmVlZHMgdG8gYmUgdXBsb2FkZWQgYWdhaW5cbiAgICovXG4gIHB1YmxpYyBtYXNrVmVyc2lvbjogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHN5c3RlbTogV2F0ZXJTeXN0ZW07XG4gIHByaXZhdGUgc2hhcGU6IFVpbnQ4QXJyYXkgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByYWluVGltZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBtb3ZlQ2FsbGJhY2tzOiAoKHBvc2l0aW9uOiB2ZWMyKSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgcmVtb3ZlQ2FsbGJhY2tzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzeXN0ZW06IFdhdGVyU3lzdGVtLCBvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpIHtcbiAgICBjb25zdCB7IG1hc2ssIG5vcm1hbE1hcCwgZGVwdGgsIGZsb3csIHBvc2l0aW9uLCBzaXplLCAuLi5zZXR0aW5ncyB9ID1cbiAgICAgIG9wdGlvbnM7XG5cbiAgICB0aGlzLnN5c3RlbSA9IHN5c3RlbTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjMi5jcHkocG9zaXRpb24pO1xuICAgIHRoaXMuc2l6ZSA9IHZlYzIuY3B5KHNpemUpO1xuICAgIHRoaXMubWFzayA9IG1hc2sgPz8gbnVsbDtcbiAgICB0aGlzLm5vcm1hbE1hcCA9IG5vcm1hbE1hcCA/PyBudWxsO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgV2F0ZXJSZWdpb24uREVGQVVMVF9PUFRJT05TLCBzZXR0aW5ncyk7XG5cbiAgICB0aGlzLmRlcHRoUGl4ZWxzID0geyBzaXplOiB2ZWMyKDEpLCBkYXRhOiBuZXcgVWludDhBcnJheSg0KSwgdmVyc2lvbjogMCB9O1xuICAgIHRoaXMuZmxvd1BpeGVscyA9IHsgc2l6ZTogdmVjMigxKSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkoNCksIHZlcnNpb246IDAgfTtcbiAgICB0aGlzLnNldERlcHRoKGRlcHRoID8/IDEpO1xuICAgIHRoaXMuc2V0RmxvdyhmbG93ID8/IHZlYzIoKSk7XG5cbiAgICBjb25zdCBjZWxsU2l6ZSA9IE1hdGgubWF4KFxuICAgICAgb3B0aW9ucy5yaXBwbGVDZWxsU2l6ZSA/PyBXYXRlclJlZ2lvbi5ERUZBVUxUX09QVElPTlMucmlwcGxlQ2VsbFNpemUsXG4gICAgICBNYXRoLm1heChzaXplLngsIHNpemUueSkgLyBXYXRlclJlZ2lvbi5NQVhfUklQUExFX0NFTExTXG4gICAgKTtcbiAgICBjb25zdCBjZWxscyA9IHZlYzIoXG4gICAgICBNYXRoLm1heChNYXRoLmNlaWwoc2l6ZS54IC8gY2VsbFNpemUpLCAxKSxcbiAgICAgIE1hdGgubWF4KE1hdGguY2VpbChzaXplLnkgLyBjZWxsU2l6ZSksIDEpXG4gICAgKTtcblxuICAgIHRoaXMucmlwcGxlcyA9IG5ldyBSaXBwbGVGaWVsZChcbiAgICAgIGNlbGxzLFxuICAgICAgdmVjMihzaXplLnggLyBjZWxscy54LCBzaXplLnkgLyBjZWxscy55KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGhvdyBkZWVwIHRoZSB3YXRlciBpc1xuICAgKi9cbiAgcHVibGljIHNldERlcHRoKGRlcHRoOiBudW1iZXIgfCBXYXRlckdyaWQ8bnVtYmVyPikge1xuICAgIHRoaXMuZGVwdGhHcmlkID0gdHlwZW9mIGRlcHRoID09PSAnbnVtYmVyJyA/IFtbZGVwdGhdXSA6IGRlcHRoO1xuXG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZGVwdGhHcmlkLmxlbmd0aDtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5kZXB0aEdyaWRbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShyb3dzICogY29sdW1ucyAqIDQpO1xuXG4gICAgdGhpcy5kZXB0aEdyaWQuZm9yRWFjaCgocm93LCB5KSA9PlxuICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XG4gICAgICAgIGRhdGFbKHggKyB5ICogY29sdW1ucykgKiA0XSA9IE1hdGgucm91bmQodmFsdWUgKiAyNTUpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5kZXB0aFBpeGVscyA9IHtcbiAgICAgIHNpemU6IHZlYzIoY29sdW1ucywgcm93cyksXG4gICAgICBkYXRhLFxuICAgICAgdmVyc2lvbjogdGhpcy5kZXB0aFBpeGVscy52ZXJzaW9uICsgMSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB3aGljaCB3YXkgdGhlIHdhdGVyIGZsb3dzXG4gICAqL1xuICBwdWJsaWMgc2V0RmxvdyhmbG93OiB2ZWMyIHwgV2F0ZXJHcmlkPHZlYzI+KSB7XG4gICAgdGhpcy5mbG93R3JpZCA9IEFycmF5LmlzQXJyYXkoZmxvdykgPyBmbG93IDogW1tmbG93XV07XG5cbiAgICBjb25zdCByb3dzID0gdGhpcy5mbG93R3JpZC5sZW5ndGg7XG4gICAgY29uc3QgY29sdW1ucyA9IHRoaXMuZmxvd0dyaWRbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShyb3dzICogY29sdW1ucyAqIDQpO1xuXG4gICAgLy8gMTI4IGlzIHVzZWQgZm9yIDAgc28gdGhhdCBzdGlsbCB3YXRlciBzdGF5cyBwZXJmZWN0bHkgc3RpbGxcbiAgICB0aGlzLmZsb3dHcmlkLmZvckVhY2goKHJvdywgeSkgPT5cbiAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xuICAgICAgICBkYXRhWyh4ICsgeSAqIGNvbHVtbnMpICogNF0gPSBNYXRoLnJvdW5kKHZhbHVlLnggKiAxMjcpICsgMTI4O1xuICAgICAgICBkYXRhWyh4ICsgeSAqIGNvbHVtbnMpICogNCArIDFdID0gTWF0aC5yb3VuZCh2YWx1ZS55ICogMTI3KSArIDEyODtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZmxvd1BpeGVscyA9IHtcbiAgICAgIHNpemU6IHZlYzIoY29sdW1ucywgcm93cyksXG4gICAgICBkYXRhLFxuICAgICAgdmVyc2lvbjogdGhpcy5mbG93UGl4ZWxzLnZlcnNpb24gKyAxLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgbWFzayBhdCB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcmlwcGxlIGdyaWQsIHNvIHRoYXQgd2UgY2FuIGZpbmQgb3V0XG4gICAqIHdoZXJlIHRoZSB3YXRlciBpcyB3aXRob3V0IHVzaW5nIHRoZSBHUFVcbiAgICpcbiAgICogVGhpcyByZXR1cm5zIG51bGwgaWYgdGhlIG1hc2sgaGFzbid0IGxvYWRlZCB5ZXRcbiAgICovXG4gIHByaXZhdGUgZ2V0U2hhcGUoKTogVWludDhBcnJheSB8IG51bGwge1xuICAgIGlmICh0aGlzLnNoYXBlIHx8ICF0aGlzLm1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLnNoYXBlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMubWFzay53aWR0aCA9PT0gMCB8fFxuICAgICAgKHRoaXMubWFzayBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgIXRoaXMubWFzay5jb21wbGV0ZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgeDogY29sdW1ucywgeTogcm93cyB9ID0gdGhpcy5yaXBwbGVzLnNpemU7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gY29sdW1ucztcbiAgICBjYW52YXMuaGVpZ2h0ID0gcm93cztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSE7XG4gICAgY29udGV4dC5zY2FsZShjb2x1bW5zIC8gdGhpcy5zaXplLngsIHJvd3MgLyB0aGlzLnNpemUueSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoLXRoaXMucG9zaXRpb24ueCwgLXRoaXMucG9zaXRpb24ueSk7XG4gICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgdGhpcy5tYXNrLCB0aGlzLCB0aGlzLnJlcGVhdCk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNvbHVtbnMsIHJvd3MpO1xuICAgIGNvbnN0IHNoYXBlID0gbmV3IFVpbnQ4QXJyYXkoY29sdW1ucyAqIHJvd3MpO1xuICAgIGNvbnN0IGJsb2NrZWQgPSBuZXcgVWludDhBcnJheShjb2x1bW5zICogcm93cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFwZS5sZW5ndGg7IGkrKykge1xuICAgICAgc2hhcGVbaV0gPSBkYXRhW2kgKiA0ICsgM107XG4gICAgICBibG9ja2VkW2ldID0gc2hhcGVbaV0gPCAxMjggPyAxIDogMDtcbiAgICB9XG5cbiAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgdGhpcy5yaXBwbGVzLnNldEJsb2NrZWQoYmxvY2tlZCk7XG5cbiAgICByZXR1cm4gc2hhcGU7XG4gIH1cblxuICAvKipcbiAgICogRm9yZ2V0IHRoZSBtYXNrJ3Mgc2hhcGUsIHRoaXMgc2hvdWxkIGJlIGNhbGxlZCBpZiB0aGUgbWFzayBpcyBjaGFuZ2VkXG4gICAqL1xuICBwdWJsaWMgaW52YWxpZGF0ZU1hc2soKSB7XG4gICAgdGhpcy5zaGFwZSA9IG51bGw7XG4gICAgdGhpcy5tYXNrVmVyc2lvbisrO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGRlcHRoIGF0IGEgd29ybGQgcG9zaXRpb24sIHRoaXMgaXMgMCBpZiB0aGVyZSdzIG5vIHdhdGVyIHRoZXJlXG4gICAqL1xuICBwdWJsaWMgZGVwdGhBdChwb3NpdGlvbjogdmVjMik6IG51bWJlciB7XG4gICAgY29uc3QgbG9jYWwgPSB2ZWMyLnN1Yihwb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgaWYgKFxuICAgICAgbG9jYWwueCA8IDAgfHxcbiAgICAgIGxvY2FsLnkgPCAwIHx8XG4gICAgICBsb2NhbC54ID49IHRoaXMuc2l6ZS54IHx8XG4gICAgICBsb2NhbC55ID49IHRoaXMuc2l6ZS55XG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoKTtcbiAgICBpZiAoc2hhcGUpIHtcbiAgICAgIGNvbnN0IHsgeDogY29sdW1ucywgeTogcm93cyB9ID0gdGhpcy5yaXBwbGVzLnNpemU7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigobG9jYWwueCAvIHRoaXMuc2l6ZS54KSAqIGNvbHVtbnMpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoKGxvY2FsLnkgLyB0aGlzLnNpemUueSkgKiByb3dzKTtcblxuICAgICAgaWYgKHNoYXBlW3ggKyB5ICogY29sdW1uc10gPCAxMjgpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGVEZXB0aChsb2NhbCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhIHZhbHVlIGZyb20gdGhlIGRlcHRoIGdyaWQsIGluIHRoZSBzYW1lIHdheSB0aGF0IGEgdGV4dHVyZSB3b3VsZFxuICAgKi9cbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZURlcHRoKGxvY2FsOiB2ZWMyKTogbnVtYmVyIHtcbiAgICBjb25zdCBncmlkID0gdGhpcy5kZXB0aEdyaWQ7XG4gICAgY29uc3Qgcm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBncmlkWzBdLmxlbmd0aDtcblxuICAgIGNvbnN0IHUgPSAobG9jYWwueCAvIHRoaXMuc2l6ZS54KSAqIGNvbHVtbnMgLSAwLjU7XG4gICAgY29uc3QgdiA9IChsb2NhbC55IC8gdGhpcy5zaXplLnkpICogcm93cyAtIDAuNTtcbiAgICBjb25zdCBjbGFtcFggPSAoeDogbnVtYmVyKSA9PiBNYXRoLm1pbihNYXRoLm1heCh4LCAwKSwgY29sdW1ucyAtIDEpO1xuICAgIGNvbnN0IGNsYW1wWSA9ICh5OiBudW1iZXIpID0+IE1hdGgubWluKE1hdGgubWF4KHksIDApLCByb3dzIC0gMSk7XG5cbiAgICBjb25zdCB4MCA9IE1hdGguZmxvb3IodSk7XG4gICAgY29uc3QgeTAgPSBNYXRoLmZsb29yKHYpO1xuICAgIGNvbnN0IHR4ID0gdSAtIHgwO1xuICAgIGNvbnN0IHR5ID0gdiAtIHkwO1xuXG4gICAgY29uc3QgdmFsdWUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IGdyaWRbY2xhbXBZKHkpXVtjbGFtcFgoeCldO1xuICAgIGNvbnN0IHRvcCA9IHZhbHVlKHgwLCB5MCkgKiAoMSAtIHR4KSArIHZhbHVlKHgwICsgMSwgeTApICogdHg7XG4gICAgY29uc3QgYm90dG9tID0gdmFsdWUoeDAsIHkwICsgMSkgKiAoMSAtIHR4KSArIHZhbHVlKHgwICsgMSwgeTAgKyAxKSAqIHR4O1xuXG4gICAgcmV0dXJuIHRvcCAqICgxIC0gdHkpICsgYm90dG9tICogdHk7XG4gIH1cblxuICAvKipcbiAgICogRGlzdHVyYiB0aGUgd2F0ZXIgYXQgYSB3b3JsZCBwb3NpdGlvbiwgZm9yIGV4YW1wbGUgaWYgc29tZXRoaW5nIGhhcyBmYWxsZW5cbiAgICogaW50byBpdFxuICAgKi9cbiAgcHVibGljIGRpc3R1cmIocG9zaXRpb246IHZlYzIsIG9wdGlvbnM6IFJpcHBsZU9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZ2V0U2hhcGUoKTtcbiAgICB0aGlzLnJpcHBsZXMuZGlzdHVyYih2ZWMyLnN1Yihwb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiksIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy51cGRhdGVSYWluKGR0KTtcbiAgICB0aGlzLnJpcHBsZXMudXBkYXRlKGR0LCB0aGlzLnJpcHBsZVNwZWVkLCB0aGlzLnJpcHBsZURhbXBpbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSYWluKGR0OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5yYWluIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhcmVhID0gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IFdhdGVyUmVnaW9uLlJBSU5fQVJFQSAvICh0aGlzLnJhaW4gKiBhcmVhKTtcblxuICAgIHRoaXMucmFpblRpbWUgKz0gZHQ7XG4gICAgd2hpbGUgKHRoaXMucmFpblRpbWUgPj0gaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMucmFpblRpbWUgLT0gaW50ZXJ2YWw7XG4gICAgICB0aGlzLmRpc3R1cmIoXG4gICAgICAgIHZlYzIoXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMuc2l6ZS54LFxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnNpemUueVxuICAgICAgICApLFxuICAgICAgICB7XG4gICAgICAgICAgcmFkaXVzOiBXYXRlclJlZ2lvbi5SQUlORFJPUF9SQURJVVMsXG4gICAgICAgICAgc3RyZW5ndGg6IC10aGlzLnJhaW5TdHJlbmd0aCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIHJlZ2lvbiB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjMikge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMyLmNweShwb3NpdGlvbik7XG4gICAgdGhpcy5tb3ZlQ2FsbGJhY2tzLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2sodGhpcy5wb3NpdGlvbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoaXMgcmVnaW9uIGlzIG1vdmVkXG4gICAqL1xuICBwdWJsaWMgb25Nb3ZlKGNhbGxiYWNrOiAocG9zaXRpb246IHZlYzIpID0+IHZvaWQpIHtcbiAgICB0aGlzLm1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhpcyByZWdpb24gaXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIG9uUmVtb3ZlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgcmVnaW9uIGZyb20gdGhlIHdhdGVyIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnN5c3RlbS5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVDYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBGcmFtZSxcbiAgR2xDb250ZXh0LFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICBtYXhWZWMsXG4gIG1pblZlYyxcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbiAgU2NlbmVJbWFnZSxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBSaXBwbGVPcHRpb25zIH0gZnJvbSAnLi9SaXBwbGVGaWVsZCc7XG5pbXBvcnQgeyBXYXRlck91dHB1dCwgV2F0ZXJQYXNzIH0gZnJvbSAnLi9XYXRlclBhc3MnO1xuaW1wb3J0IHtcbiAgV2F0ZXJSZWdpb24sXG4gIFdhdGVyUmVnaW9uT3B0aW9ucyxcbiAgV2F0ZXJTYW1wbGUsXG59IGZyb20gJy4vV2F0ZXJSZWdpb24nO1xuXG5leHBvcnQgdHlwZSBXYXRlclN5c3RlbU9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgd2F0ZXIsIGNvbXBhcmVkIHRvIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBzY3JlZW5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgbW9zdCBlZmZlY3RpdmUgd2F5IG9mIG1ha2luZyB3YXRlciBmYXN0ZXIuIElmIGBwaXhlbFNpemVgIGlzXG4gICAqIGJlaW5nIHVzZWQgdGhlbiBuZWlnaGJvdXJpbmcgcGl4ZWxzIGFyZSBhbHJlYWR5IHRoZSBzYW1lLCBzbyB0aGlzIHdvbid0XG4gICAqIGxvc2UgYW55IGRldGFpbCBhcyBsb25nIGFzIHRoZXJlJ3Mgc3RpbGwgYXQgbGVhc3Qgb25lIHBpeGVsIGZvciBlYWNoXG4gICAqIGBwaXhlbFNpemVgLCBmb3IgZXhhbXBsZSAwLjUgd29ya3Mgd2VsbCBmb3IgYSBgcGl4ZWxTaXplYCBvZiAxIGFuZCBhIGNhbWVyYVxuICAgKiB3aXRoIGEgc2NhbGUgb2YgMlxuICAgKi9cbiAgcmVzb2x1dGlvblNjYWxlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSByZXNvbHV0aW9uIG9mIHRoZSBub3JtYWwgbWFwIHRoYXQncyBnaXZlbiB0byB0aGUgbGlnaHRpbmcgc3lzdGVtLFxuICAgKiBjb21wYXJlZCB0byB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgc2NyZWVuLiBMb3dlciB2YWx1ZXMgYXJlIGZhc3RlclxuICAgKi9cbiAgbGlnaHRpbmdNYXBTY2FsZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzb2x1dGlvbiBvZiB0aGUgcmVmbGVjdGlvbnMgaW4gdGhlIHdhdGVyLCBjb21wYXJlZCB0byB0aGUgcmVzb2x1dGlvblxuICAgKiBvZiB0aGUgc2NyZWVuLiBXYXZlcyBoaWRlIG1vc3Qgb2YgdGhlIGRpZmZlcmVuY2UgYW5kIGxvd2VyIHZhbHVlcyBhcmVcbiAgICogZmFzdGVyXG4gICAqL1xuICByZWZsZWN0aW9uTWFwU2NhbGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgZWFjaCBjZWxsIGluIHRoZSBkZXB0aCBhbmQgZmxvdyBncmlkcywgaW4gd29ybGQgdW5pdHNcbiAgICpcbiAgICogRXZlcnkgcmVnaW9uIHVzZXMgY2VsbHMgb2YgdGhpcyBzaXplLCBgZ3JpZFNpemUoKWAgd2lsbCBmaW5kIHRoZSBudW1iZXIgb2ZcbiAgICogY2VsbHMgdGhhdCBhIHJlZ2lvbiBuZWVkcy4gTG93ZXIgdmFsdWVzIGFsbG93IG1vcmUgZGV0YWlsIGJ1dCB1c2UgbW9yZVxuICAgKiBtZW1vcnksIGFuZCBncmlkcyB0aGF0IGhhdmUgYSBkaWZmZXJlbnQgc2l6ZSBhcmUgc3RyZXRjaGVkIHRvIGZpdFxuICAgKi9cbiAgZ3JpZENlbGxTaXplOiBudW1iZXI7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgd2F0ZXJcbiAqXG4gKiBXYXRlciBzaG93cyB3aGF0J3MgdW5kZXJuZWF0aCBpdCwgc28gdGhpcyBoYXMgdG8gYmUgY2FsbGVkIHBhcnQtd2F5IHRocm91Z2hcbiAqIGRyYXdpbmcgdGhlIHNjZW5lLiBTZWUgYFdvcmxkYCBmb3IgaG93IHRoaXMgZml0cyB0b2dldGhlciB3aXRoIGV2ZXJ5dGhpbmdcbiAqIGVsc2VcbiAqXG4gKiAxLiBDYWxsIGB1cGRhdGUoKWAgZXZlcnkgZnJhbWVcbiAqIDIuIERyYXcgZXZlcnl0aGluZyB0aGF0J3MgdW5kZXJuZWF0aCB0aGUgd2F0ZXJcbiAqIDMuIENhbGwgYGRyYXcoKWBcbiAqIDQuIERyYXcgZXZlcnl0aGluZyB0aGF0J3Mgb24gdG9wIG9mIHRoZSB3YXRlclxuICovXG5leHBvcnQgY2xhc3MgV2F0ZXJTeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlM6IFdhdGVyU3lzdGVtT3B0aW9ucyA9IHtcbiAgICByZXNvbHV0aW9uU2NhbGU6IDEsXG4gICAgbGlnaHRpbmdNYXBTY2FsZTogMC41LFxuICAgIHJlZmxlY3Rpb25NYXBTY2FsZTogMC41LFxuICAgIGdyaWRDZWxsU2l6ZTogOCxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyBjcmVhdGVDb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgcHVibGljIG9wdGlvbnM6IFdhdGVyU3lzdGVtT3B0aW9ucztcblxuICBwcml2YXRlIHJlZ2lvbnM6IFdhdGVyUmVnaW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBnbENvbnRleHQ6IEdsQ29udGV4dCB8IG51bGw7XG4gIHByaXZhdGUgcGFzczogV2F0ZXJQYXNzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdGltZTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBmcmFtZTogRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogU2NyZWVuLXNpemVkIGltYWdlcyBvZiB0aGUgd2F0ZXIncyBzdXJmYWNlLCBmb3IgdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxNYXBDb250ZXh0ID0gV2F0ZXJTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgbm9ybWFsTWFwQ2FudmFzID0gdGhpcy5ub3JtYWxNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNwZWN1bGFyTWFwQ29udGV4dCA9IFdhdGVyU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNwZWN1bGFyTWFwQ2FudmFzID0gdGhpcy5zcGVjdWxhck1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgcmVmbGVjdGlvbk1hcENvbnRleHQgPSBXYXRlclN5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHByaXZhdGUgc2NlbmVDb250ZXh0ID0gV2F0ZXJTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuXG4gIC8qKlxuICAgKiBXaGF0IHRoZSBzcGVjdWxhciBtYXAgd2FzIGRyYXduIGZyb20sIHNvIHRoYXQgd2Ugb25seSBkcmF3IGl0IGFnYWluIGlmXG4gICAqIHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuICAgKi9cbiAgcHJpdmF0ZSBzcGVjdWxhck1hcEtleTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIGBnbENvbnRleHRgIGxldHMgdGhlIHdhdGVyIHN5c3RlbSBzaGFyZSBhIFdlYkdMIGNvbnRleHQgd2l0aCBvdGhlciBzeXN0ZW1zLFxuICAgKiBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgaXRzIG93blxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPFdhdGVyU3lzdGVtT3B0aW9ucz4sXG4gICAgZ2xDb250ZXh0PzogR2xDb250ZXh0XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uV2F0ZXJTeXN0ZW0uREVGQVVMVF9PUFRJT05TLCAuLi5vcHRpb25zIH07XG4gICAgdGhpcy5nbENvbnRleHQgPSBnbENvbnRleHQgPz8gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSBhIFdlYkdMIGNvbnRleHQgd2l0aCBvdGhlciBzeXN0ZW1zLCB0aGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBiZWZvcmVcbiAgICogdGhlIGZpcnN0IHJlbmRlciBhbmQgZG9lcyBub3RoaW5nIGlmIGEgY29udGV4dCBoYXMgYWxyZWFkeSBiZWVuIHNldFxuICAgKi9cbiAgcHVibGljIHVzZUdsQ29udGV4dChnbENvbnRleHQ6IEdsQ29udGV4dCkge1xuICAgIHRoaXMuZ2xDb250ZXh0ID8/PSBnbENvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGFyZWEgb2Ygd2F0ZXJcbiAgICovXG4gIHB1YmxpYyBhZGRSZWdpb24ob3B0aW9uczogV2F0ZXJSZWdpb25PcHRpb25zKTogV2F0ZXJSZWdpb24ge1xuICAgIGNvbnN0IHJlZ2lvbiA9IG5ldyBXYXRlclJlZ2lvbih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnJlZ2lvbnMucHVzaChyZWdpb24pO1xuXG4gICAgcmV0dXJuIHJlZ2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gYXJlYSBvZiB3YXRlclxuICAgKi9cbiAgcHVibGljIHJlbW92ZShyZWdpb246IFdhdGVyUmVnaW9uKSB7XG4gICAgdGhpcy5yZWdpb25zID0gdGhpcy5yZWdpb25zLmZpbHRlcihyID0+IHIgIT09IHJlZ2lvbik7XG4gICAgdGhpcy5wYXNzPy5yZWxlYXNlKHJlZ2lvbik7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHJvd3MgaW4gYSBncmlkIHRoYXQgY292ZXJzIGFuIGFyZWEgb2YgdGhpc1xuICAgKiBzaXplLCB0aGUgY2VsbHMgYXJlIHN0cmV0Y2hlZCB0byBmaXQgaWYgdGhlIHNpemUgaXNuJ3QgYSBtdWx0aXBsZSBvZlxuICAgKiBgZ3JpZENlbGxTaXplYFxuICAgKi9cbiAgcHVibGljIGdyaWRTaXplKHNpemU6IHZlYzIpOiB2ZWMyIHtcbiAgICBjb25zdCB7IGdyaWRDZWxsU2l6ZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgcmV0dXJuIHZlYzIubWFwKHNpemUsIGxlbmd0aCA9PlxuICAgICAgTWF0aC5tYXgoTWF0aC5jZWlsKGxlbmd0aCAvIGdyaWRDZWxsU2l6ZSksIDEpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB3YXRlciBhdCBhIHdvcmxkIHBvc2l0aW9uLCB0aGlzIGlzIG51bGwgaWYgdGhlcmUgaXNuJ3QgYW55XG4gICAqL1xuICBwdWJsaWMgc2FtcGxlKHBvc2l0aW9uOiB2ZWMyKTogV2F0ZXJTYW1wbGUgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiB0aGlzLnJlZ2lvbnMpIHtcbiAgICAgIGNvbnN0IGRlcHRoID0gcmVnaW9uLmRlcHRoQXQocG9zaXRpb24pO1xuICAgICAgaWYgKGRlcHRoID4gMCkge1xuICAgICAgICByZXR1cm4geyByZWdpb24sIGRlcHRoIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGlzdHVyYiB0aGUgd2F0ZXIgYXQgYSB3b3JsZCBwb3NpdGlvbiwgZm9yIGV4YW1wbGUgaWYgc29tZXRoaW5nIGhhcyBmYWxsZW5cbiAgICogaW50byBpdC4gVGhpcyBkb2VzIG5vdGhpbmcgaWYgdGhlcmUncyBubyB3YXRlciB0aGVyZVxuICAgKi9cbiAgcHVibGljIGRpc3R1cmIocG9zaXRpb246IHZlYzIsIG9wdGlvbnM/OiBSaXBwbGVPcHRpb25zKSB7XG4gICAgdGhpcy5zYW1wbGUocG9zaXRpb24pPy5yZWdpb24uZGlzdHVyYihwb3NpdGlvbiwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgd2F0ZXIgZm9yd2FyZCwgdGhpcyBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLnRpbWUgKz0gZHQ7XG4gICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHJlZ2lvbi51cGRhdGUoZHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNoYWRlciBwYXNzLCBpZiBpdCBjYW4gYmUgdXNlZFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRQYXNzKCk6IFdhdGVyUGFzcyB8IG51bGwge1xuICAgIHRoaXMucGFzcyA/Pz0gbmV3IFdhdGVyUGFzcyh0aGlzLmdsQ29udGV4dCA/PyBuZXcgR2xDb250ZXh0KCkpO1xuXG4gICAgcmV0dXJuIHRoaXMucGFzcy5hdmFpbGFibGUgPyB0aGlzLnBhc3MgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB2aXNpYmxlUmVnaW9ucyh7IGNhbWVyYSB9OiBGcmFtZSk6IFdhdGVyUmVnaW9uW10ge1xuICAgIGNvbnN0IHZpc2libGUgPSBpbnRlcnZhbFRvUmVjdGFuZ2xlKGNhbWVyYS5ib3VuZHMpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVnaW9ucy5maWx0ZXIocmVnaW9uID0+IHJlY3RhbmdsZXNJbnRlcnNlY3QocmVnaW9uLCB2aXNpYmxlKSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyB0aGUgd2F0ZXIgb250byB0aGUgZnJhbWUncyBjb250ZXh0LCB1c2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZSBhcyB0aGVcbiAgICogc2NlbmUgdW5kZXJuZWF0aCB0aGUgd2F0ZXJcbiAgICovXG4gIHB1YmxpYyBkcmF3KGZyYW1lOiBGcmFtZSkge1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgIGNvbnN0IHJlZ2lvbnMgPSB0aGlzLnZpc2libGVSZWdpb25zKGZyYW1lKTtcbiAgICBjb25zdCBwYXNzID0gcmVnaW9ucy5sZW5ndGggPiAwID8gdGhpcy5nZXRQYXNzKCkgOiBudWxsO1xuICAgIGlmICghcGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcmVzb2x1dGlvblNjYWxlOiBzY2FsZSwgcmVmbGVjdGlvbk1hcFNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBwYXNzLnJlbmRlcihcbiAgICAgIHtcbiAgICAgICAgLi4uZnJhbWUsXG4gICAgICAgIHJlZmxlY3Rpb25NYXA6XG4gICAgICAgICAgZnJhbWUucmVmbGVjdGlvbk1hcCAmJlxuICAgICAgICAgIHRoaXMuc2NhbGVkQ29weShcbiAgICAgICAgICAgIHRoaXMucmVmbGVjdGlvbk1hcENvbnRleHQsXG4gICAgICAgICAgICBmcmFtZS5yZWZsZWN0aW9uTWFwLFxuICAgICAgICAgICAgZnJhbWUsXG4gICAgICAgICAgICByZWZsZWN0aW9uTWFwU2NhbGVcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHJlZ2lvbnMsXG4gICAgICBXYXRlck91dHB1dC5Db2xvdXIsXG4gICAgICB0aGlzLnRpbWUsXG4gICAgICBzY2FsZSxcblxuICAgICAgLy8gV2F0ZXIgd2l0aCBhIGxvdyByZXNvbHV0aW9uIGRvZXNuJ3QgbmVlZCBhbnkgbW9yZSBkZXRhaWwgdGhhbiB0aGlzXG4gICAgICB0aGlzLnNjYWxlZENvcHkodGhpcy5zY2VuZUNvbnRleHQsIGZyYW1lLmNvbnRleHQuY2FudmFzLCBmcmFtZSwgc2NhbGUpXG4gICAgKTtcblxuICAgIHRoaXMuY29weVdhdGVyKHBhc3MsIGZyYW1lLCByZWdpb25zLCBzY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSB0aGUgd2F0ZXIgb250byB0aGUgZnJhbWUncyBjb250ZXh0LCB0aGUgcmVzdCBvZiB0aGUgb3V0cHV0IG9mIHRoZSBwYXNzXG4gICAqIGlzIGVtcHR5IHNvIHdlIG9ubHkgbmVlZCB0byBjb3B5IHRoZSBhcmVhIHRoYXQgdGhlIHdhdGVyIGNvdmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBjb3B5V2F0ZXIoXG4gICAgcGFzczogV2F0ZXJQYXNzLFxuICAgIHsgY29udGV4dCwgY2FtZXJhLCBzY3JlZW4gfTogRnJhbWUsXG4gICAgcmVnaW9uczogV2F0ZXJSZWdpb25bXSxcbiAgICBzY2FsZTogbnVtYmVyXG4gICkge1xuICAgIGNvbnN0IGNvcm5lcnMgPSByZWdpb25zLmZsYXRNYXAoKHsgcG9zaXRpb24sIHNpemUgfSkgPT4gW1xuICAgICAgY2FtZXJhLndvcmxkVG9TY3JlZW4ocG9zaXRpb24pLFxuICAgICAgY2FtZXJhLndvcmxkVG9TY3JlZW4odmVjMi5hZGQocG9zaXRpb24sIHNpemUpKSxcbiAgICBdKTtcbiAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgoTWF0aC5mbG9vcihtaW5WZWMoLi4uY29ybmVycykueCksIDApO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KE1hdGguZmxvb3IobWluVmVjKC4uLmNvcm5lcnMpLnkpLCAwKTtcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKE1hdGguY2VpbChtYXhWZWMoLi4uY29ybmVycykueCksIHNjcmVlbi54KTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbihNYXRoLmNlaWwobWF4VmVjKC4uLmNvcm5lcnMpLnkpLCBzY3JlZW4ueSk7XG5cbiAgICBjb25zdCBvdXRwdXRXaWR0aCA9IE1hdGguY2VpbChzY3JlZW4ueCAqIHNjYWxlKTtcbiAgICBjb25zdCBvdXRwdXRIZWlnaHQgPSBNYXRoLmNlaWwoc2NyZWVuLnkgKiBzY2FsZSk7XG4gICAgY29uc3Qgc2NhbGVYID0gb3V0cHV0V2lkdGggLyBzY3JlZW4ueDtcbiAgICBjb25zdCBzY2FsZVkgPSBvdXRwdXRIZWlnaHQgLyBzY3JlZW4ueTtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgcGFzcy5jYW52YXMsXG4gICAgICBsZWZ0ICogc2NhbGVYLFxuICAgICAgc2NyZWVuLnkgLSBvdXRwdXRIZWlnaHQgKyB0b3AgKiBzY2FsZVksXG4gICAgICAocmlnaHQgLSBsZWZ0KSAqIHNjYWxlWCxcbiAgICAgIChib3R0b20gLSB0b3ApICogc2NhbGVZLFxuICAgICAgbGVmdCxcbiAgICAgIHRvcCxcbiAgICAgIHJpZ2h0IC0gbGVmdCxcbiAgICAgIGJvdHRvbSAtIHRvcFxuICAgICk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIHNtYWxsZXIgY29weSBvZiBhIHNjcmVlbi1zaXplZCBpbWFnZSwgdXBsb2FkaW5nIHRoZXNlIGlzIG11Y2ggZmFzdGVyXG4gICAqL1xuICBwcml2YXRlIHNjYWxlZENvcHkoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGltYWdlOiBTY2VuZUltYWdlLFxuICAgIGZyYW1lOiBGcmFtZSxcbiAgICBzY2FsZTogbnVtYmVyXG4gICk6IFNjZW5lSW1hZ2Uge1xuICAgIGlmIChzY2FsZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY2FudmFzIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKGZyYW1lLnNjcmVlbi54ICogc2NhbGUpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguY2VpbChmcmFtZS5zY3JlZW4ueSAqIHNjYWxlKTtcblxuICAgIGlmIChjYW52YXMud2lkdGggIT09IHdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZyYW1lLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBub3JtYWwgbWFwIGFuZCBzcGVjdWxhciBtYXAgb2YgdGhlIHdhdGVyJ3Mgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIGRyYXdMaWdodGluZ01hcHMoZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc3QgcmVnaW9ucyA9IHRoaXMudmlzaWJsZVJlZ2lvbnMoZnJhbWUpO1xuICAgIGNvbnN0IHBhc3MgPSByZWdpb25zLmxlbmd0aCA+IDAgPyB0aGlzLmdldFBhc3MoKSA6IG51bGw7XG4gICAgaWYgKCFwYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsaWdodGluZ01hcFNjYWxlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBwYXNzLnJlbmRlcihcbiAgICAgIGZyYW1lLFxuICAgICAgcmVnaW9ucyxcbiAgICAgIFdhdGVyT3V0cHV0Lk5vcm1hbCxcbiAgICAgIHRoaXMudGltZSxcbiAgICAgIGxpZ2h0aW5nTWFwU2NhbGVcbiAgICApO1xuICAgIHRoaXMuY29weUxpZ2h0aW5nTWFwKHRoaXMubm9ybWFsTWFwQ29udGV4dCwgcGFzcywgZnJhbWUsIGxpZ2h0aW5nTWFwU2NhbGUpO1xuXG4gICAgLy8gVGhlIHNwZWN1bGFyIG1hcCBpcyB0aGUgc2FtZSBldmVyeSBmcmFtZSB1bmxlc3Mgc29tZXRoaW5nIGhhcyBtb3ZlZFxuICAgIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtcbiAgICAgIGZyYW1lLmNhbWVyYS5ib3VuZHMsXG4gICAgICBmcmFtZS5zY3JlZW4sXG4gICAgICByZWdpb25zLm1hcChyZWdpb24gPT4gW1xuICAgICAgICByZWdpb24ucG9zaXRpb24sXG4gICAgICAgIHJlZ2lvbi5zaXplLFxuICAgICAgICByZWdpb24uc3BlY3VsYXIsXG4gICAgICAgIHJlZ2lvbi5zaG9yZUJsZW5kLFxuICAgICAgICByZWdpb24uZGVwdGhQaXhlbHMudmVyc2lvbixcbiAgICAgICAgcmVnaW9uLm1hc2tWZXJzaW9uLFxuICAgICAgXSksXG4gICAgXSk7XG5cbiAgICBpZiAoa2V5ICE9PSB0aGlzLnNwZWN1bGFyTWFwS2V5KSB7XG4gICAgICB0aGlzLnNwZWN1bGFyTWFwS2V5ID0ga2V5O1xuXG4gICAgICBwYXNzLnJlbmRlcihmcmFtZSwgcmVnaW9ucywgV2F0ZXJPdXRwdXQuU3BlY3VsYXIsIHRoaXMudGltZSk7XG4gICAgICB0aGlzLmNvcHlMaWdodGluZ01hcCh0aGlzLnNwZWN1bGFyTWFwQ29udGV4dCwgcGFzcywgZnJhbWUsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSBvdXRwdXQgb2YgYSBwYXNzIHRoYXQgdXNlZCBwYXJ0IG9mIHRoZSBjYW52YXNcbiAgICovXG4gIHByaXZhdGUgY29weUxpZ2h0aW5nTWFwKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBwYXNzOiBXYXRlclBhc3MsXG4gICAgeyBzY3JlZW4gfTogRnJhbWUsXG4gICAgc2NhbGU6IG51bWJlclxuICApIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gY29udGV4dDtcbiAgICBjb25zdCB3aWR0aCA9IE1hdGguY2VpbChzY3JlZW4ueCAqIHNjYWxlKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoc2NyZWVuLnkgKiBzY2FsZSk7XG5cbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICBwYXNzLmNhbnZhcyxcbiAgICAgIDAsXG4gICAgICBzY3JlZW4ueSAtIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBwYXJ0IG9mIGEgc2NyZWVuLXNpemVkIG1hcCBvbnRvIGEgY29udGV4dCB0aGF0J3MgdXNpbmcgdGhlIGNhbWVyYSdzXG4gICAqIHRyYW5zZm9ybXMsIHRoaXMgaXMgZm9yIGFkZGluZyB0aGUgd2F0ZXIncyBzdXJmYWNlIHRvIHRoZSBzY2VuZSdzIG1hcHNcbiAgICovXG4gIHByaXZhdGUgZHJhd1JlZ2lvbk1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvbixcbiAgICBtYXA6IEhUTUxDYW52YXNFbGVtZW50XG4gICkge1xuICAgIGNvbnN0IHsgZnJhbWUgfSA9IHRoaXM7XG4gICAgaWYgKCFmcmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcExlZnQgPSBmcmFtZS5jYW1lcmEud29ybGRUb1NjcmVlbihyZWdpb24ucG9zaXRpb24pO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gZnJhbWUuY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICB2ZWMyLmFkZChyZWdpb24ucG9zaXRpb24sIHJlZ2lvbi5zaXplKVxuICAgICk7XG4gICAgY29uc3QgbGVmdCA9IE1hdGgubWF4KE1hdGguZmxvb3IodG9wTGVmdC54KSwgMCk7XG4gICAgY29uc3QgdG9wID0gTWF0aC5tYXgoTWF0aC5mbG9vcih0b3BMZWZ0LnkpLCAwKTtcbiAgICBjb25zdCByaWdodCA9IE1hdGgubWluKE1hdGguY2VpbChib3R0b21SaWdodC54KSwgZnJhbWUuc2NyZWVuLngpO1xuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKE1hdGguY2VpbChib3R0b21SaWdodC55KSwgZnJhbWUuc2NyZWVuLnkpO1xuICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICAgIGlmICh3aWR0aCA8PSAwIHx8IGhlaWdodCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQm90aCBvZiB0aGVzZSBjYW4gaGF2ZSBhIGxvd2VyIHJlc29sdXRpb24gdGhhbiB0aGUgc2NyZWVuXG4gICAgY29uc3Qgc291cmNlU2NhbGUgPSBtYXAud2lkdGggLyBmcmFtZS5zY3JlZW4ueDtcbiAgICBjb25zdCB0YXJnZXRTY2FsZSA9IGNvbnRleHQuY2FudmFzLndpZHRoIC8gZnJhbWUuc2NyZWVuLng7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgIG1hcCxcbiAgICAgIGxlZnQgKiBzb3VyY2VTY2FsZSxcbiAgICAgIHRvcCAqIHNvdXJjZVNjYWxlLFxuICAgICAgd2lkdGggKiBzb3VyY2VTY2FsZSxcbiAgICAgIGhlaWdodCAqIHNvdXJjZVNjYWxlLFxuICAgICAgbGVmdCAqIHRhcmdldFNjYWxlLFxuICAgICAgdG9wICogdGFyZ2V0U2NhbGUsXG4gICAgICB3aWR0aCAqIHRhcmdldFNjYWxlLFxuICAgICAgaGVpZ2h0ICogdGFyZ2V0U2NhbGVcbiAgICApO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdSZWdpb25Ob3JtYWxNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHJlZ2lvbjogV2F0ZXJSZWdpb25cbiAgKSB7XG4gICAgdGhpcy5kcmF3UmVnaW9uTWFwKGNvbnRleHQsIHJlZ2lvbiwgdGhpcy5ub3JtYWxNYXBDYW52YXMpO1xuICB9XG5cbiAgcHVibGljIGRyYXdSZWdpb25TcGVjdWxhck1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcmVnaW9uOiBXYXRlclJlZ2lvblxuICApIHtcbiAgICB0aGlzLmRyYXdSZWdpb25NYXAoY29udGV4dCwgcmVnaW9uLCB0aGlzLnNwZWN1bGFyTWFwQ2FudmFzKTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgUmlwcGxlRmllbGQgfSBmcm9tICcuL1JpcHBsZUZpZWxkJztcbmV4cG9ydCB0eXBlIHsgUmlwcGxlT3B0aW9ucyB9IGZyb20gJy4vUmlwcGxlRmllbGQnO1xuZXhwb3J0IHsgV2F0ZXJSZWdpb24gfSBmcm9tICcuL1dhdGVyUmVnaW9uJztcbmV4cG9ydCB0eXBlIHtcbiAgV2F0ZXJHcmlkLFxuICBXYXRlclJlZ2lvbk9wdGlvbnMsXG4gIFdhdGVyU2FtcGxlLFxufSBmcm9tICcuL1dhdGVyUmVnaW9uJztcbmV4cG9ydCB7IFdhdGVyU3lzdGVtIH0gZnJvbSAnLi9XYXRlclN5c3RlbSc7XG5leHBvcnQgdHlwZSB7IFdhdGVyU3lzdGVtT3B0aW9ucyB9IGZyb20gJy4vV2F0ZXJTeXN0ZW0nO1xuIiwiaW1wb3J0IHsgdmVjMiB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBib3VuZGluZ1JlY3RhbmdsZSxcbiAgRnJhbWUsXG4gIEdsQ29udGV4dCxcbiAgUmVjdGFuZ2xlLFxuICBTY2VuZUNhbWVyYSxcbn0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge1xuICBBY3RvcixcbiAgQWN0b3JPcHRpb25zLFxuICBHcm91bmRSZWNlaXZlcixcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBMaWdodCxcbiAgTGlnaHRpbmdTeXN0ZW0sXG4gIExpZ2h0T3B0aW9ucyxcbiAgU3ByaXRlQWN0b3JPcHRpb25zLFxuICBTdXJmYWNlLFxuICBXYWxsLFxuICBXYWxsT3B0aW9ucyxcbiAgV2FsbFJlY2VpdmVyLFxufSBmcm9tICcuLi9saWdodGluZyc7XG5pbXBvcnQgdHlwZSB7XG4gIEZsb29yUmVmbGVjdGlvblJlY2VpdmVyLFxuICBGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG4gIFJlZmxlY3Rpb25PYmplY3QsXG4gIFJlZmxlY3Rpb25Tb3VyY2UsXG4gIFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5ncyxcbiAgUmVmbGVjdGlvblN5c3RlbSxcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlcixcbiAgV2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4uL3JlZmxlY3Rpb25zJztcbmltcG9ydCB0eXBlIHtcbiAgV2F0ZXJSZWdpb24sXG4gIFdhdGVyUmVnaW9uT3B0aW9ucyxcbiAgV2F0ZXJTeXN0ZW0sXG59IGZyb20gJy4uL3dhdGVyJztcblxuZXhwb3J0IHR5cGUgV29ybGRPcHRpb25zID0ge1xuICAvKipcbiAgICogVGhlIGxpZ2h0aW5nIHN5c3RlbSBmb3IgdGhpcyB3b3JsZFxuICAgKlxuICAgKiBUaGUgbGlnaHRpbmcgc3lzdGVtIGhvbGRzIHRoZSBzY2VuZSwgc28gYSB3b3JsZCBhbHdheXMgaGFzIG9uZS4gSWYgdGhpc1xuICAgKiBpc24ndCBzZXQgdGhlbiB0aGUgc2NlbmUgd2lsbCBiZSBkcmF3biB3aXRob3V0IGFueSBsaWdodGluZ1xuICAgKi9cbiAgbGlnaHRpbmc/OiBMaWdodGluZ1N5c3RlbTtcblxuICAvKipcbiAgICogVGhlIHJlZmxlY3Rpb24gc3lzdGVtIGZvciB0aGlzIHdvcmxkLCBpZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZVxuICAgKiB3b24ndCBoYXZlIGFueSByZWZsZWN0aW9uc1xuICAgKi9cbiAgcmVmbGVjdGlvbnM/OiBSZWZsZWN0aW9uU3lzdGVtO1xuXG4gIC8qKlxuICAgKiBUaGUgd2F0ZXIgc3lzdGVtIGZvciB0aGlzIHdvcmxkLCBpZiB0aGlzIGlzbid0IHNldCB0aGVuIHRoZSBzY2VuZSB3b24ndFxuICAgKiBoYXZlIGFueSB3YXRlclxuICAgKi9cbiAgd2F0ZXI/OiBXYXRlclN5c3RlbTtcblxuICAvKipcbiAgICogVGhlIFdlYkdMIGNvbnRleHQgdG8gc2hhcmUgYmV0d2VlbiBzeXN0ZW1zLCB0aGUgZGVmYXVsdCBpcyBhIG5ldyBjb250ZXh0XG4gICAqL1xuICBnbENvbnRleHQ/OiBHbENvbnRleHQ7XG59O1xuXG50eXBlIFJlZmxlY3Rpb25Tb3VyY2VPcHRpb24gPSB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBvYmplY3QgYXBwZWFyIGluIHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvIGNvbmZpZ3VyZSBob3dcbiAgICogaXQncyByZWZsZWN0ZWRcbiAgICovXG4gIHJlZmxlY3Rpb25Tb3VyY2U/OiBib29sZWFuIHwgUmVmbGVjdGlvblNvdXJjZVNldHRpbmdzO1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRBY3RvcldhdGVyT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIEhvdyBtdWNoIG9mIHRoaXMgYWN0b3IgaXMgdW5kZXJ3YXRlciBpbiB0aGUgZGVlcGVzdCB3YXRlciwgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIG1heERlcHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRoaXMgYWN0b3IncyBmZWV0IGFyZSBhYm92ZSB0aGUgYm90dG9tIGVkZ2Ugb2YgaXRzIGltYWdlXG4gICAqL1xuICBmb290T2Zmc2V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEb2VzIHRoaXMgYWN0b3IgbWFrZSByaXBwbGVzIHdoZW4gaXQgbW92ZXMgdGhyb3VnaCB0aGUgd2F0ZXI/XG4gICAqL1xuICByaXBwbGVzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFdvcmxkQWN0b3JPcHRpb25zID0gKEFjdG9yT3B0aW9ucyB8IFNwcml0ZUFjdG9yT3B0aW9ucykgJlxuICBSZWZsZWN0aW9uU291cmNlT3B0aW9uICYge1xuICAgIC8qKlxuICAgICAqIFNob3VsZCB0aGUgbG93ZXIgcGFydCBvZiB0aGlzIGFjdG9yIGdvIHVuZGVyd2F0ZXIgd2hlbiBpdCBzdGFuZHMgaW5cbiAgICAgKiB3YXRlcj8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgaG93IGl0IGJlaGF2ZXNcbiAgICAgKi9cbiAgICBzdWJtZXJzaWJsZT86IGJvb2xlYW4gfCBXb3JsZEFjdG9yV2F0ZXJPcHRpb25zO1xuICB9O1xuXG5leHBvcnQgdHlwZSBXb3JsZEdyb3VuZE9wdGlvbnMgPSBHcm91bmRSZWNlaXZlck9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBncm91bmQgc2hvdyByZWZsZWN0aW9ucz8gVXNlIGFuIG9iamVjdCB0byBjb25maWd1cmUgdGhlXG4gICAqIHJlZmxlY3Rpb24sIGJ5IGRlZmF1bHQgaXQgd2lsbCBjb3ZlciB0aGUgd2hvbGUgYXJlYSBvZiB0aGUgZ3JvdW5kXG4gICAqL1xuICByZWZsZWN0aW9uUmVjZWl2ZXI/OiBib29sZWFuIHwgUGFydGlhbDxGbG9vclJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xufTtcblxuZXhwb3J0IHR5cGUgV29ybGRXYWxsT3B0aW9ucyA9IFdhbGxPcHRpb25zICZcbiAgUmVmbGVjdGlvblNvdXJjZU9wdGlvbiAmIHtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgdGhlIGZyb250IG9mIHRoaXMgd2FsbCBzaG93IHJlZmxlY3Rpb25zPyBVc2UgYW4gb2JqZWN0IHRvXG4gICAgICogY29uZmlndXJlIHRoZSByZWZsZWN0aW9uLCBieSBkZWZhdWx0IGl0IHdpbGwgY292ZXIgdGhlIHdob2xlIGZyb250XG4gICAgICovXG4gICAgcmVmbGVjdGlvblJlY2VpdmVyPzogYm9vbGVhbiB8IFBhcnRpYWw8V2FsbFJlZmxlY3Rpb25SZWNlaXZlck9wdGlvbnM+O1xuICB9O1xuXG50eXBlIFN1Ym1lcnNpYmxlQWN0b3IgPSBSZXF1aXJlZDxXb3JsZEFjdG9yV2F0ZXJPcHRpb25zPiAmIHtcbiAgYWN0b3I6IEFjdG9yO1xuICBzb3VyY2U6IFJlZmxlY3Rpb25Tb3VyY2UgfCBudWxsO1xuICBsYXN0UmlwcGxlOiB2ZWMyIHwgbnVsbDtcbn07XG5cbi8qKlxuICogQSBzY2VuZSB0aGF0J3MgcmVuZGVyZWQgYnkgc2V2ZXJhbCBzeXN0ZW1zIHdvcmtpbmcgdG9nZXRoZXJcbiAqXG4gKiBTeXN0ZW1zIGRvbid0IGtub3cgYWJvdXQgZWFjaCBvdGhlciwgdGhleSBlYWNoIGRyYXcgYSBwYXJ0IG9mIHRoZSBmcmFtZSBhbmRcbiAqIHRoaXMgY2xhc3MgZGVjaWRlcyB0aGUgb3JkZXIuIFRoZSBmcmFtZSBpcyByZW5kZXJlZCBpbiB0aGVzZSBzdGVwczpcbiAqXG4gKiAxLiBEcmF3IHRoZSBncm91bmRcbiAqIDIuIERyYXcgdGhlIHBhcnRzIG9mIGFjdG9ycyB0aGF0IGFyZSB1bmRlcndhdGVyXG4gKiAzLiBEcmF3IHJlZmxlY3Rpb25zIG9udG8gdGhlIGZsb29yXG4gKiA0LiBEcmF3IHRoZSB3YXRlciwgd2hpY2ggc2hvd3MgZXZlcnl0aGluZyBkcmF3biBzbyBmYXIgdW5kZXJuZWF0aCBpdFxuICogNS4gRHJhdyB0aGUgd2FsbHMgYW5kIGFjdG9ycyB0aGF0IHN0YW5kIG9uIHRoZSBncm91bmQsIHJlZmxlY3Rpb25zIGluIGEgd2FsbFxuICogICAgYXJlIGRyYXduIGFsb25nIHdpdGggdGhhdCB3YWxsXG4gKiA2LiBBcHBseSBsaWdodGluZyB0byB0aGUgd2hvbGUgc2NlbmVcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmxkIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0FURVJfWl9JTkRFWCA9IDEwMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfV0FURVJfT1BUSU9OUyA9IHtcbiAgICBtYXhEZXB0aDogMjQsXG4gICAgZm9vdE9mZnNldDogMCxcbiAgICByaXBwbGVzOiB0cnVlLFxuICB9O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBSSVBQTEVfRElTVEFOQ0UgPSAxMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUklQUExFX1JBRElVUyA9IDU7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJJUFBMRV9TVFJFTkdUSCA9IDAuMzU7XG5cbiAgcHVibGljIHJlYWRvbmx5IGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbTtcbiAgcHVibGljIHJlYWRvbmx5IHJlZmxlY3Rpb25zOiBSZWZsZWN0aW9uU3lzdGVtIHwgbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IHdhdGVyOiBXYXRlclN5c3RlbSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBzdWJtZXJzaWJsZUFjdG9yczogU3VibWVyc2libGVBY3RvcltdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBXb3JsZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nID1cbiAgICAgIG9wdGlvbnM/LmxpZ2h0aW5nID8/IG5ldyBMaWdodGluZ1N5c3RlbSh7IGxpZ2h0aW5nRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgdGhpcy5yZWZsZWN0aW9ucyA9IG9wdGlvbnM/LnJlZmxlY3Rpb25zID8/IG51bGw7XG4gICAgdGhpcy53YXRlciA9IG9wdGlvbnM/LndhdGVyID8/IG51bGw7XG5cbiAgICBpZiAodGhpcy53YXRlcikge1xuICAgICAgY29uc3QgZ2xDb250ZXh0ID0gb3B0aW9ucz8uZ2xDb250ZXh0ID8/IG5ldyBHbENvbnRleHQoKTtcblxuICAgICAgdGhpcy5saWdodGluZy51c2VHbENvbnRleHQoZ2xDb250ZXh0KTtcbiAgICAgIHRoaXMud2F0ZXIudXNlR2xDb250ZXh0KGdsQ29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBzdXJmYWNlIG9yIGEgZ3JvdXAgb2Ygc3VyZmFjZXMgbG9vayBsaWtlIGEgc2luZ2xlIG9iamVjdCB0byB0aGVcbiAgICogcmVmbGVjdGlvbiBzeXN0ZW0sIHRoZSBib3R0b20gb2YgdGhlIGdyb3VwIHNob3VsZCBiZSB3aGVyZSBpdCBtZWV0cyB0aGVcbiAgICogZ3JvdW5kXG4gICAqXG4gICAqIE92ZXJsYXlzIGFyZW4ndCBpbmNsdWRlZCwgdGhleSBtaWdodCBiZSBzaG93aW5nIHJlZmxlY3Rpb25zIHRoZW1zZWx2ZXNcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHJlZmxlY3Rpb25PYmplY3QoXG4gICAgLi4uc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdXG4gICk6IFJlZmxlY3Rpb25PYmplY3Qge1xuICAgIGNvbnN0IGJvdW5kcyA9ICgpID0+XG4gICAgICBzdXJmYWNlcy5yZWR1Y2U8UmVjdGFuZ2xlPihib3VuZGluZ1JlY3RhbmdsZSwgc3VyZmFjZXNbMF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kcygpLnBvc2l0aW9uO1xuICAgICAgfSxcbiAgICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gYm91bmRzKCkuc2l6ZTtcbiAgICAgIH0sXG4gICAgICBkcmF3OiBjb250ZXh0ID0+IHN1cmZhY2VzLmZvckVhY2gocyA9PiBzLmRyYXdDb250ZW50KGNvbnRleHQpKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGFkZEdyb3VuZChvcHRpb25zOiBXb3JsZEdyb3VuZE9wdGlvbnMpOiBHcm91bmRSZWNlaXZlciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLmdyb3VuZCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzdXJmYWNlID0gdGhpcy5saWdodGluZy5hZGRHcm91bmQoZ3JvdW5kKTtcblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkRmxvb3JSZWZsZWN0aW9uKFxuICAgICAgICBzdXJmYWNlLFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VyZmFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBzb2xpZCB3YWxsXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbChvcHRpb25zOiBXb3JsZFdhbGxPcHRpb25zKTogV2FsbCB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCByZWZsZWN0aW9uUmVjZWl2ZXIsIC4uLndhbGxPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHdhbGwgPSB0aGlzLmxpZ2h0aW5nLmFkZFdhbGwod2FsbE9wdGlvbnMpO1xuXG4gICAgaWYgKHJlZmxlY3Rpb25Tb3VyY2UpIHtcbiAgICAgIC8vIEEgbWlycm9yIHdvdWxkIHNob3cgdGhlIGJhY2sgb2YgYSB3YWxsLCB3aGljaCB3ZSBkb24ndCBoYXZlIGEgcGljdHVyZVxuICAgICAgLy8gb2YsIHNvIGJ5IGRlZmF1bHQgd2FsbHMgb25seSBhcHBlYXIgaW4gdGhlIGZsb29yXG4gICAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnJlZmxlY3Rpb25zPy5hZGRTb3VyY2Uoe1xuICAgICAgICB3YWxsOiBmYWxzZSxcbiAgICAgICAgLi4uKHJlZmxlY3Rpb25Tb3VyY2UgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25Tb3VyY2UpLFxuICAgICAgICBvYmplY3Q6IFdvcmxkLnJlZmxlY3Rpb25PYmplY3Qod2FsbC5mcm9udCwgd2FsbC50b3ApLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgd2FsbC5mcm9udC5vblJlbW92ZSgoKSA9PiBzb3VyY2UucmVtb3ZlKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZsZWN0aW9uUmVjZWl2ZXIpIHtcbiAgICAgIHRoaXMuYWRkTWlycm9yKFxuICAgICAgICB3YWxsLmZyb250LFxuICAgICAgICByZWZsZWN0aW9uUmVjZWl2ZXIgPT09IHRydWUgPyB7fSA6IHJlZmxlY3Rpb25SZWNlaXZlclxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBtb3Zpbmcgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgYWRkQWN0b3Iob3B0aW9uczogV29ybGRBY3Rvck9wdGlvbnMpOiBBY3RvciB7XG4gICAgY29uc3QgeyByZWZsZWN0aW9uU291cmNlLCBzdWJtZXJzaWJsZSwgLi4uYWN0b3JPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGFjdG9yID0gdGhpcy5saWdodGluZy5hZGRBY3RvcihcbiAgICAgIGFjdG9yT3B0aW9ucyBhcyBBY3Rvck9wdGlvbnMgfCBTcHJpdGVBY3Rvck9wdGlvbnNcbiAgICApO1xuXG4gICAgY29uc3Qgc291cmNlID0gcmVmbGVjdGlvblNvdXJjZVxuICAgICAgPyB0aGlzLmFkZEFjdG9yUmVmbGVjdGlvbihcbiAgICAgICAgICBhY3RvcixcbiAgICAgICAgICByZWZsZWN0aW9uU291cmNlID09PSB0cnVlID8ge30gOiByZWZsZWN0aW9uU291cmNlXG4gICAgICAgIClcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgYWN0b3Iuc3VyZmFjZS5vblJlbW92ZSgoKSA9PiBzb3VyY2UucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIGlmIChzdWJtZXJzaWJsZSkge1xuICAgICAgY29uc3QgaXRlbTogU3VibWVyc2libGVBY3RvciA9IHtcbiAgICAgICAgLi4uV29ybGQuREVGQVVMVF9XQVRFUl9PUFRJT05TLFxuICAgICAgICAuLi4oc3VibWVyc2libGUgPT09IHRydWUgPyB7fSA6IHN1Ym1lcnNpYmxlKSxcbiAgICAgICAgYWN0b3IsXG4gICAgICAgIHNvdXJjZTogc291cmNlID8/IG51bGwsXG4gICAgICAgIGxhc3RSaXBwbGU6IG51bGwsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN1Ym1lcnNpYmxlQWN0b3JzLnB1c2goaXRlbSk7XG4gICAgICBhY3Rvci5zdXJmYWNlLm9uUmVtb3ZlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdWJtZXJzaWJsZUFjdG9ycyA9IHRoaXMuc3VibWVyc2libGVBY3RvcnMuZmlsdGVyKFxuICAgICAgICAgIG90aGVyID0+IG90aGVyICE9PSBpdGVtXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0b3I7XG4gIH1cblxuICBwcml2YXRlIGFkZEFjdG9yUmVmbGVjdGlvbihcbiAgICBhY3RvcjogQWN0b3IsXG4gICAgc2V0dGluZ3M6IFJlZmxlY3Rpb25Tb3VyY2VTZXR0aW5nc1xuICApOiBSZWZsZWN0aW9uU291cmNlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9ucz8uYWRkU291cmNlKHtcbiAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgLi4uKGFjdG9yLnNwcml0ZVxuICAgICAgICA/IHsgc3ByaXRlOiBhY3Rvci5zcHJpdGUgfVxuICAgICAgICA6IHsgb2JqZWN0OiBXb3JsZC5yZWZsZWN0aW9uT2JqZWN0KGFjdG9yLnN1cmZhY2UpIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIHdhdGVyLCB0aGlzIHdpbGwgcmV0dXJuIG51bGwgaWYgdGhpcyB3b3JsZCBkb2Vzbid0IGhhdmUgYVxuICAgKiB3YXRlciBzeXN0ZW1cbiAgICpcbiAgICogV2F0ZXIgaXMgbGl0IGluIHRoZSBzYW1lIHdheSBhcyB0aGUgZ3JvdW5kLCBhbmQgaGFzIGl0cyBvd24gc3VyZmFjZSBmb3JcbiAgICogdGhpcyBzbyB0aGF0IHdhdmVzIGNhbiBjYXRjaCB0aGUgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRXYXRlcihvcHRpb25zOiBXYXRlclJlZ2lvbk9wdGlvbnMpOiBXYXRlclJlZ2lvbiB8IG51bGwge1xuICAgIGNvbnN0IHsgd2F0ZXIgfSA9IHRoaXM7XG4gICAgaWYgKCF3YXRlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnaW9uID0gd2F0ZXIuYWRkUmVnaW9uKG9wdGlvbnMpO1xuICAgIGNvbnN0IHN1cmZhY2UgPSB0aGlzLmxpZ2h0aW5nLmFkZEdyb3VuZCh7XG4gICAgICBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbixcbiAgICAgIHNpemU6IG9wdGlvbnMuc2l6ZSxcbiAgICAgIHpJbmRleDogV29ybGQuV0FURVJfWl9JTkRFWCxcbiAgICAgIGN1c3RvbURyYXc6IHtcbiAgICAgICAgaW1hZ2U6ICgpID0+IHt9LFxuICAgICAgICBub3JtYWxNYXA6IGNvbnRleHQgPT4gd2F0ZXIuZHJhd1JlZ2lvbk5vcm1hbE1hcChjb250ZXh0LCByZWdpb24pLFxuICAgICAgICBzcGVjdWxhck1hcDogY29udGV4dCA9PiB3YXRlci5kcmF3UmVnaW9uU3BlY3VsYXJNYXAoY29udGV4dCwgcmVnaW9uKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZWdpb24ub25Nb3ZlKHBvc2l0aW9uID0+IHN1cmZhY2UubW92ZVRvKHBvc2l0aW9uKSk7XG4gICAgcmVnaW9uLm9uUmVtb3ZlKCgpID0+IHN1cmZhY2UucmVtb3ZlKCkpO1xuXG4gICAgcmV0dXJuIHJlZ2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaWdodFxuICAgKi9cbiAgcHVibGljIGFkZExpZ2h0KG9wdGlvbnM6IExpZ2h0T3B0aW9ucyk6IExpZ2h0IHtcbiAgICByZXR1cm4gdGhpcy5saWdodGluZy5hZGRMaWdodChvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHBhcnQgb2YgYW4gYXJlYSBvZiBncm91bmQgcmVmbGVjdGl2ZVxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSBjYWxsZWQgc2V2ZXJhbCB0aW1lcyBmb3IgZGlmZmVyZW50IHBhcnRzIG9mIHRoZSBzYW1lIGdyb3VuZFxuICAgKi9cbiAgcHVibGljIGFkZEZsb29yUmVmbGVjdGlvbihcbiAgICBncm91bmQ6IEdyb3VuZFJlY2VpdmVyLFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPEZsb29yUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucz5cbiAgKTogRmxvb3JSZWZsZWN0aW9uUmVjZWl2ZXIgfCBudWxsIHtcbiAgICBjb25zdCByZWNlaXZlciA9XG4gICAgICB0aGlzLnJlZmxlY3Rpb25zPy5hZGRGbG9vclJlY2VpdmVyKHtcbiAgICAgICAgcG9zaXRpb246IGdyb3VuZC5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogZ3JvdW5kLnNpemUsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9KSA/PyBudWxsO1xuXG4gICAgaWYgKHJlY2VpdmVyKSB7XG4gICAgICBncm91bmQub25SZW1vdmUoKCkgPT4gcmVjZWl2ZXIucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZWNlaXZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHBhcnQgb2YgYSB3YWxsIHJlZmxlY3RpdmVcbiAgICpcbiAgICogVGhlIHJlZmxlY3Rpb24gaXMgZHJhd24gc3RyYWlnaHQgYWZ0ZXIgdGhlIHdhbGwsIHNvIGl0J3MgY292ZXJlZCBieVxuICAgKiBhbnl0aGluZyBpbiBmcm9udCBvZiB0aGUgd2FsbC4gVGhpcyBjYW4gYmUgY2FsbGVkIHNldmVyYWwgdGltZXMgZm9yXG4gICAqIGRpZmZlcmVudCBwYXJ0cyBvZiB0aGUgc2FtZSB3YWxsXG4gICAqL1xuICBwdWJsaWMgYWRkTWlycm9yKFxuICAgIHdhbGw6IFdhbGxSZWNlaXZlcixcbiAgICBvcHRpb25zPzogUGFydGlhbDxXYWxsUmVmbGVjdGlvblJlY2VpdmVyT3B0aW9ucz5cbiAgKTogV2FsbFJlZmxlY3Rpb25SZWNlaXZlciB8IG51bGwge1xuICAgIGNvbnN0IHJlY2VpdmVyID1cbiAgICAgIHRoaXMucmVmbGVjdGlvbnM/LmFkZFdhbGxSZWNlaXZlcih7XG4gICAgICAgIHBvc2l0aW9uOiB3YWxsLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiB3YWxsLnNpemUsXG4gICAgICAgIGZvb3Q6IHdhbGwucG9zaXRpb24ueSArIHdhbGwuc2l6ZS55LFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfSkgPz8gbnVsbDtcblxuICAgIGlmIChyZWNlaXZlcikge1xuICAgICAgcmVjZWl2ZXIub25SZW1vdmUod2FsbC5hZGRPdmVybGF5KGNvbnRleHQgPT4gcmVjZWl2ZXIuZHJhdyhjb250ZXh0KSkpO1xuICAgICAgd2FsbC5vblJlbW92ZSgoKSA9PiByZWNlaXZlci5yZW1vdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY2VpdmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHdvcmxkIGZvcndhcmQsIHRoaXMgc2hvdWxkIGJlIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy53YXRlcj8udXBkYXRlKGR0KTtcbiAgICB0aGlzLnVwZGF0ZVJpcHBsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHdoZXJlIGEgc3VibWVyc2libGUgYWN0b3IncyBmZWV0IGFyZVxuICAgKi9cbiAgcHJpdmF0ZSBmb290UG9zaXRpb24oeyBhY3RvciwgZm9vdE9mZnNldCB9OiBTdWJtZXJzaWJsZUFjdG9yKTogdmVjMiB7XG4gICAgYWN0b3Iuc3luYygpO1xuXG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gYWN0b3Iuc3VyZmFjZTtcblxuICAgIHJldHVybiB2ZWMyKFxuICAgICAgcG9zaXRpb24ueCArIHNpemUueCAvIDIsXG4gICAgICBwb3NpdGlvbi55ICsgc2l6ZS55IC0gZm9vdE9mZnNldFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWN0b3JzIG1ha2UgcmlwcGxlcyBhcyB0aGV5IG1vdmUgdGhyb3VnaCB0aGUgd2F0ZXJcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlUmlwcGxlcygpIHtcbiAgICBjb25zdCB7IHdhdGVyIH0gPSB0aGlzO1xuICAgIGlmICghd2F0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5zdWJtZXJzaWJsZUFjdG9ycykge1xuICAgICAgaWYgKCFpdGVtLnJpcHBsZXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvb3QgPSB0aGlzLmZvb3RQb3NpdGlvbihpdGVtKTtcbiAgICAgIGNvbnN0IG1vdmVkID1cbiAgICAgICAgaXRlbS5sYXN0UmlwcGxlID09PSBudWxsIHx8XG4gICAgICAgIHZlYzIubGVuKHZlYzIuc3ViKGZvb3QsIGl0ZW0ubGFzdFJpcHBsZSkpID49IFdvcmxkLlJJUFBMRV9ESVNUQU5DRTtcblxuICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgIGl0ZW0ubGFzdFJpcHBsZSA9IGZvb3Q7XG4gICAgICAgIHdhdGVyLmRpc3R1cmIoZm9vdCwge1xuICAgICAgICAgIHJhZGl1czogV29ybGQuUklQUExFX1JBRElVUyxcbiAgICAgICAgICBzdHJlbmd0aDogV29ybGQuUklQUExFX1NUUkVOR1RILFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCBvdXQgaG93IGZhciBlYWNoIHN1Ym1lcnNpYmxlIGFjdG9yIGlzIHVuZGVyd2F0ZXIsIHRoaXMgbmVlZHMgdG8gYmVcbiAgICogZG9uZSBiZWZvcmUgYW55dGhpbmcgaXMgZHJhd24gYmVjYXVzZSBpdCBzcGxpdHMgdGhlIGFjdG9yIGludG8gMiBwYXJ0c1xuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVXYXRlcmxpbmVzKCkge1xuICAgIGNvbnN0IHsgd2F0ZXIgfSA9IHRoaXM7XG4gICAgaWYgKCF3YXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnN1Ym1lcnNpYmxlQWN0b3JzKSB7XG4gICAgICBjb25zdCBmb290ID0gdGhpcy5mb290UG9zaXRpb24oaXRlbSk7XG4gICAgICBjb25zdCBkZXB0aCA9IHdhdGVyLnNhbXBsZShmb290KT8uZGVwdGggPz8gMDtcbiAgICAgIGNvbnN0IHdhdGVybGluZSA9IGRlcHRoID4gMCA/IGZvb3QueSAtIGRlcHRoICogaXRlbS5tYXhEZXB0aCA6IG51bGw7XG5cbiAgICAgIGl0ZW0uYWN0b3Iuc3VyZmFjZS5jbGlwQm90dG9tID0gd2F0ZXJsaW5lO1xuICAgICAgaWYgKGl0ZW0uc291cmNlKSB7XG4gICAgICAgIGl0ZW0uc291cmNlLndhdGVybGluZSA9IHdhdGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbWVyYTogU2NlbmVDYW1lcmEpIHtcbiAgICBjb25zdCBmcmFtZTogRnJhbWUgPSB7XG4gICAgICBjb250ZXh0LFxuICAgICAgY2FtZXJhLFxuICAgICAgc2NyZWVuOiB2ZWMyKGNvbnRleHQuY2FudmFzLndpZHRoLCBjb250ZXh0LmNhbnZhcy5oZWlnaHQpLFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVdhdGVybGluZXMoKTtcbiAgICB0aGlzLnJlZmxlY3Rpb25zPy5wcmVwYXJlKGZyYW1lKTtcblxuICAgIHRoaXMuZHJhd0xheWVyKGZyYW1lLCAoKSA9PiB7XG4gICAgICB0aGlzLmxpZ2h0aW5nLmRyYXdHcm91bmQoY29udGV4dCk7XG4gICAgICB0aGlzLmRyYXdTdWJtZXJnZWRBY3RvcnMoY29udGV4dCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZsZWN0aW9ucz8uZHJhd0Zsb29yKCk7XG4gICAgdGhpcy5kcmF3V2F0ZXIoZnJhbWUpO1xuICAgIHRoaXMuZHJhd0xheWVyKGZyYW1lLCAoKSA9PiB0aGlzLmxpZ2h0aW5nLmRyYXdXYWxscyhjb250ZXh0KSk7XG4gICAgdGhpcy5hcHBseUxpZ2h0aW5nKGZyYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBwYXJ0cyBvZiBhY3RvcnMgdGhhdCBhcmUgdW5kZXJ3YXRlciwgdGhlIGxvd2VzdCB0aGluZ3Mgb24gdGhlXG4gICAqIHNjcmVlbiBhcmUgZHJhd24gbGFzdFxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U3VibWVyZ2VkQWN0b3JzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IGJvdHRvbSA9ICh7IGFjdG9yOiB7IHN1cmZhY2UgfSB9OiBTdWJtZXJzaWJsZUFjdG9yKSA9PlxuICAgICAgc3VyZmFjZS5wb3NpdGlvbi55ICsgc3VyZmFjZS5zaXplLnk7XG5cbiAgICBbLi4udGhpcy5zdWJtZXJzaWJsZUFjdG9yc11cbiAgICAgIC5zb3J0KChhLCBiKSA9PiBib3R0b20oYSkgLSBib3R0b20oYikpXG4gICAgICAuZm9yRWFjaCgoeyBhY3RvciB9KSA9PiBhY3Rvci5zdXJmYWNlLmRyYXdIaWRkZW4oY29udGV4dCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3V2F0ZXIoZnJhbWU6IEZyYW1lKSB7XG4gICAgaWYgKCF0aGlzLndhdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnJhbWUucmVmbGVjdGlvbk1hcCA9IHRoaXMucmVmbGVjdGlvbnM/LmRyYXdGbG9vclNvdXJjZXMoKSA/PyBudWxsO1xuICAgIHRoaXMud2F0ZXIuZHJhdyhmcmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBwYXJ0IG9mIHRoZSBzY2VuZSB3aXRoIHRoZSBjYW1lcmEncyB0cmFuc2Zvcm1zIGFwcGxpZWRcbiAgICovXG4gIHByaXZhdGUgZHJhd0xheWVyKHsgY29udGV4dCwgY2FtZXJhIH06IEZyYW1lLCBkcmF3OiAoKSA9PiB2b2lkKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gICAgZHJhdygpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUxpZ2h0aW5nKGZyYW1lOiBGcmFtZSkge1xuICAgIGNvbnN0IHsgY29udGV4dCwgY2FtZXJhLCBzY3JlZW4gfSA9IGZyYW1lO1xuXG4gICAgY29uc3QgeyBsaWdodGluZ0VuYWJsZWQsIHN1cmZhY2VNYXBzRW5hYmxlZCB9ID0gdGhpcy5saWdodGluZy5vcHRpb25zO1xuXG4gICAgaWYgKGxpZ2h0aW5nRW5hYmxlZCAmJiBzdXJmYWNlTWFwc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMud2F0ZXI/LmRyYXdMaWdodGluZ01hcHMoZnJhbWUpO1xuICAgIH1cblxuICAgIHRoaXMubGlnaHRpbmcucHJlcGFyZShjYW1lcmEsIHNjcmVlbik7XG4gICAgdGhpcy5saWdodGluZy5kcmF3KGNvbnRleHQpO1xuICB9XG59XG4iLCJleHBvcnQgeyBXb3JsZCB9IGZyb20gJy4vV29ybGQnO1xuZXhwb3J0IHR5cGUge1xuICBXb3JsZEFjdG9yT3B0aW9ucyxcbiAgV29ybGRBY3RvcldhdGVyT3B0aW9ucyxcbiAgV29ybGRHcm91bmRPcHRpb25zLFxuICBXb3JsZE9wdGlvbnMsXG4gIFdvcmxkV2FsbE9wdGlvbnMsXG59IGZyb20gJy4vV29ybGQnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9