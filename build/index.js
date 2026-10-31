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
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<Array<*>>}
 */
const zip = (a, b) => a.map((k, i) => [k, b[i]]);

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a
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

if (true) {
  module.exports = {
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
    combinations,
    cartesian,
    times,
    range,
    zip,
    at,
    peek,
    chunk,
    shuffle,
    flat,
    unflat,
    split,
    pluck,
    exclude,
  };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { times, chunk, dot } = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");

/**
 * @overview A small vector and matrix library
 * @author Gordon Larrigan
 */

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Create a new vector
 * @param {number|vec} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec} A new vector
 * @example <caption>Various ways to initialise a vector</caption>
 * let a = vec(3, 2);  // (3, 2)
 * let b = vec(4);     // (4, 4)
 * let c = vec(a);     // (3, 2)
 * let d = vec();      // (0, 0)
 */
const vec = (x, y) => (!x && !y ?
  { x: 0, y: 0 } : (typeof x === 'object' ?
    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?
      { x: x, y: x } : { x: x, y: y })
  )
);

/**
 * Get the components of a vector as an array
 * @param {vec} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec.components = a => [a.x, a.y];

/**
 * Return a unit vector (1, 0)
 * @return {vec} A unit vector (1, 0)
 */
vec.ux = () => vec(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec} A unit vector (0, 1)
 */
vec.uy = () => vec(0, 1);

/**
 * Add vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a + b
 */
vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

/**
 * Scale a vector
 * @param {vec} a Vector a
 * @param {number} b Scalar b
 * @return {vec} a * b
 */
vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });

/**
 * Subtract vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a - b
 */
vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

/**
 * Get the length of a vector
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec} a The vector to normalise
 * @return {vec} ^a
 */
vec.nor = a => {
  let len = vec.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec();
};

/**
 * Get a dot product of vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {number} a ∙ b
 */
vec.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec} A rotated vector
 */
vec.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}

/**
 * Check if two vectors are equal
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec} a The vector to copy
 * @return {vec} A copy of vector a
 */
vec.cpy = a => vec(a);

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec} a Vector a
 * @param {vectorMapCallback} f The function to call on each component of the vector
 * @return {vec} Vector a mapped through f
 */
vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

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
mat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);

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
 * @return {mat|boolean} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

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
mat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
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
 * @return {number|boolean} |a| or false if the matrix is not square
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
 * @return {mat|boolean} ^a or false if the matrix is not square
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
 * @return {mat|boolean} a^-1 or false if the matrix has no inverse
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
mat.str = (a, ms = ', ', ns = '\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec, mat };
}


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
const Caster_1 = __webpack_require__(/*! ./Caster */ "./src/lighting/Caster.ts");
class Actor {
    constructor(lighting, options) {
        this.caster = null;
        const { shadow = 'sprite', ...surface } = options;
        const { type, footprintHeight, ...casterOptions } = (typeof shadow === 'string' ? { type: shadow } : shadow);
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
            position: (0, vec_1.vec)(position.x, position.y + size.y - this.footprintHeight),
            size: (0, vec_1.vec)(size.x, this.footprintHeight),
        };
    }
    moveTo(position) {
        var _a;
        this.surface.moveTo(position);
        (_a = this.caster) === null || _a === void 0 ? void 0 : _a.moveTo(this.footprint(position, this.surface.size).position);
    }
    remove() {
        var _a;
        this.surface.remove();
        (_a = this.caster) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
exports.Actor = Actor;
Actor.DEFAULT_FOOTPRINT_SCALE = 1 / 3;
Actor.DEFAULT_SHADOW_LENGTH_SCALE = 1.33;


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
            ...(0, utilities_1.boundingRectangle)(this, other),
        });
    }
}
exports.RegionCaster = RegionCaster;
class SpriteCaster extends SceneObject_1.SceneObject {
    constructor(lighting, options) {
        super(lighting, options);
        this.shadow = null;
        this.image = null;
        this.anchor = (0, vec_1.vec)(0.5, 0.9);
        this.offset = (0, vec_1.vec)(0.5, 0.9);
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
        this.anchor = (0, vec_1.vec)(0.5, 0.9);
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
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
const HALF_PI = Math.PI / 2;
class Light {
    constructor(lightingSystem, options) {
        var _a, _b, _c, _d, _e, _f;
        this.dirty = true;
        this.lightingSystem = lightingSystem;
        this.position = vec_1.vec.cpy(options.position);
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
            position: (0, vec_1.vec)(this.position.x - this._radius, this.position.y - this._radius + Math.min(wallLightingYOffset, 0)),
            size: (0, vec_1.vec)(this._radius * 2, this._radius * 2 + Math.abs(wallLightingYOffset)),
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
        this.position = vec_1.vec.cpy(position);
    }
    set(options) {
        const { position, radius, colour, coreRadius, intensity, height, castShadows, } = options;
        this.position = vec_1.vec.cpy(position !== null && position !== void 0 ? position : this.position);
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
        gradient.addColorStop(0, (0, utilities_1.colourToString)({
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
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, caster)) {
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
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, caster)) {
                const shadowSprite = caster.getShadow();
                if (!shadowSprite) {
                    continue;
                }
                const shadowOrigin = vec_1.vec.add(caster.position, (0, vec_1.vec)(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y));
                const shadowLength = (0, utils_1.smoothstep)(caster.minShadowLength, (_a = caster.maxShadowLength) !== null && _a !== void 0 ? _a : this.radius, (0, utils_1.unlerp)(0, this.radius, vec_1.vec.len(vec_1.vec.sub(shadowOrigin, this.position))));
                const shadowEdge = vec_1.vec.mul(vec_1.vec.nor(vec_1.vec.sub(shadowOrigin, this.position)), shadowLength);
                const shadowEdgeLength = vec_1.vec.len(shadowEdge);
                const shadowAngle = vec_1.vec.rad(shadowEdge) + HALF_PI;
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
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, caster)) {
                const shadowOrigin = vec_1.vec.add(caster.position, (0, vec_1.vec)(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y));
                const shadowDistance = (0, utils_1.smoothstep)(caster.minShadowDistance, (_a = caster.maxShadowDistance) !== null && _a !== void 0 ? _a : this.radius, (0, utils_1.unlerp)(0, this.radius, vec_1.vec.len(vec_1.vec.sub(shadowOrigin, this.position))));
                const shadowPosition = vec_1.vec.mul(vec_1.vec.nor(vec_1.vec.sub(shadowOrigin, this.position)), shadowDistance);
                const shadowSize = vec_1.vec.mul(caster.size, 0.5);
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
        const lightPosition = vec_1.vec.cpy(this.position);
        const lightRadius = this._radius;
        const shadowCasterInterval = (0, utilities_1.rectangleToInterval)(shadowCasterRectangle);
        const shadowCasterVertices = (0, utilities_1.rectangleVertices)(shadowCasterRectangle);
        const shadowEdges = [];
        for (let i = 0; i < shadowCasterVertices.length; i++) {
            const previous = (0, utils_1.at)(shadowCasterVertices, i - 1);
            const current = shadowCasterVertices[i];
            if (!(0, utilities_1.lineIsFacing)({ start: previous, end: current }, this.position)) {
                const vertex1 = vec_1.vec.sub(previous, lightPosition);
                const vertex2 = vec_1.vec.sub(current, lightPosition);
                shadowEdges.push({
                    start: previous,
                    end: vec_1.vec.add(previous, vec_1.vec.mul(vec_1.vec.nor(vertex1), Math.max(Light.SHADOW_BUFFER, lightRadius + Light.SHADOW_BUFFER - vec_1.vec.len(vertex1)))),
                }, {
                    start: current,
                    end: vec_1.vec.add(current, vec_1.vec.mul(vec_1.vec.nor(vertex2), Math.max(Light.SHADOW_BUFFER, lightRadius + Light.SHADOW_BUFFER - vec_1.vec.len(vertex2)))),
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
                    shadowPolygon.push(shadowCasterRectangle.position, shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start);
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                }
                break;
            case types_1.Sector2d.Top:
                if (shadowEdges.length !== 6) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[1].start, shadowEdges[2].start, shadowEdges[2].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[2].end, shadowEdges[2].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[1].end, shadowEdges[1].start)), false);
                    });
                }
                else {
                    shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[2].end, shadowEdges[2].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[1].end, shadowEdges[1].start)), false);
                    }, shadowEdges[1].start, shadowEdges[5].start, shadowEdges[4].start);
                }
                break;
            case types_1.Sector2d.TopRight:
                if (shadowEdges.length !== 4) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[1].start, (0, vec_1.vec)(shadowCasterRectangle.position.x + shadowCasterRectangle.size.x, shadowCasterRectangle.position.y), shadowEdges[2].start, shadowEdges[2].end, (0, vec_1.vec)(shadowEdges[1].end.x, shadowEdges[2].end.y), shadowEdges[1].end);
                }
                else {
                    shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (0, vec_1.vec)(shadowEdges[1].end.x, shadowEdges[2].end.y), shadowEdges[1].end, shadowEdges[1].start, shadowEdges[3].start);
                }
                break;
            case types_1.Sector2d.Left:
                if (shadowEdges.length !== 6) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                    }, shadowEdges[5].start);
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
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
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[4].end, shadowEdges[4].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[3].end, shadowEdges[3].start)), false);
                    });
                }
                else {
                    shadowPolygon.push(shadowEdges[4].start, shadowEdges[4].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[4].end, shadowEdges[4].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[3].end, shadowEdges[3].start)), false);
                    }, shadowEdges[3].start, shadowEdges[2].start, shadowEdges[5].start);
                }
                break;
            case types_1.Sector2d.BottomLeft:
                if (shadowEdges.length !== 4) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[3].end.x, shadowEdges[0].end.y), shadowEdges[3].end, shadowEdges[3].start, (0, vec_1.vec)(shadowCasterRectangle.position.x, shadowCasterRectangle.position.y + shadowCasterRectangle.size.y));
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[3].end.x, shadowEdges[0].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                }
                break;
            case types_1.Sector2d.Bottom:
                if (shadowEdges.length !== 6) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                    }, shadowEdges[5].start);
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                        context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                    }, shadowEdges[5].start, shadowEdges[4].start, shadowEdges[2].start);
                }
                break;
            case types_1.Sector2d.BottomRight:
                if (shadowEdges.length !== 4) {
                    break;
                }
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, vec_1.vec.add(shadowCasterRectangle.position, shadowCasterRectangle.size));
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
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
const Actor_1 = __webpack_require__(/*! ./Actor */ "./src/lighting/Actor.ts");
const Caster_1 = __webpack_require__(/*! ./Caster */ "./src/lighting/Caster.ts");
const Light_1 = __webpack_require__(/*! ./Light */ "./src/lighting/Light.ts");
const merge_1 = __webpack_require__(/*! ./merge */ "./src/lighting/merge.ts");
const ShaderPass_1 = __webpack_require__(/*! ./ShaderPass */ "./src/lighting/ShaderPass.ts");
const Surface_1 = __webpack_require__(/*! ./Surface */ "./src/lighting/Surface.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
const Wall_1 = __webpack_require__(/*! ./Wall */ "./src/lighting/Wall.ts");
class LightingSystem {
    static createContext() {
        return document.createElement('canvas').getContext('2d');
    }
    static compareSurfaces(a, b) {
        return (a.zIndex - b.zIndex || a.position.y + a.size.y - (b.position.y + b.size.y));
    }
    constructor(options) {
        this.lights = [];
        this.screen = (0, vec_1.vec)();
        this.groundReceivers = [];
        this.wallReceivers = [];
        this.regionCasters = [];
        this.spriteCasters = [];
        this.circleCasters = [];
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
        return new Actor_1.Actor(this, options);
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
        var _a;
        (_a = this.shaderPass) !== null && _a !== void 0 ? _a : (this.shaderPass = new ShaderPass_1.ShaderPass());
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
        this.prepare(camera, (0, vec_1.vec)(context.canvas.width, context.canvas.height));
        this.draw(context);
    }
    drawSurfaces(context) {
        this.sortSurfaces();
        this.groundReceivers.forEach(ground => ground.draw(context));
        this.wallReceivers.forEach(wall => wall.draw(context));
    }
    sortSurfaces() {
        this.groundReceivers.sort(LightingSystem.compareSurfaces);
        this.wallReceivers.sort(LightingSystem.compareSurfaces);
    }
    prepare(camera, screen) {
        this.screen = screen;
        this.sortSurfaces();
        const shaderPass = this.getShaderPass();
        if (!shaderPass) {
            return;
        }
        const cameraRectangle = (0, utilities_1.intervalToRectangle)(camera.bounds);
        const surfaces = [...this.groundReceivers, ...this.wallReceivers].filter(surface => (0, utilities_1.rectanglesIntersect)(surface, cameraRectangle));
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
        const visibleLights = this.lights.filter(light => (0, utilities_1.rectanglesIntersect)(light.bounds, cameraRectangle));
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
        const direction = vec_1.vec.rot((0, vec_1.vec)(1, 0), this.options.ambientLightDirection);
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
        if (vec_1.vec.eq(surfaceNormal, (0, vec_1.vec)())) {
            return ambientLight;
        }
        const dot = vec_1.vec.dot(vec_1.vec.nor(surfaceNormal), ambientLightDirection);
        if ((0, utils_1.floatEquals)(dot, 0)) {
            return ambientLight;
        }
        if (dot < 0) {
            return (0, utilities_1.lerpColour)(ambientLight, ambientLightHighlight, -dot);
        }
        return (0, utilities_1.lerpColour)(ambientLight, ambientLightShadow, dot);
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
        this.lighting = lighting;
        this.position = vec_1.vec.cpy(options.position);
        this.size = vec_1.vec.cpy(options.size);
    }
    moveTo(position) {
        this.position = vec_1.vec.cpy(position);
    }
    resize(size) {
        this.size = vec_1.vec.cpy(size);
    }
    set(options) {
        for (const [key, value] of Object.entries(options)) {
            if (value !== undefined) {
                this[key] = value;
            }
        }
        this.position = vec_1.vec.cpy(this.position);
        this.size = vec_1.vec.cpy(this.size);
    }
    remove() {
        this.lighting.remove(this);
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
const Surface_1 = __webpack_require__(/*! ./Surface */ "./src/lighting/Surface.ts");
const copyShader = __webpack_require__(/*! ./shaders/copy.frag.glsl */ "./src/lighting/shaders/copy.frag.glsl");
const diffuseShader = __webpack_require__(/*! ./shaders/diffuse.frag.glsl */ "./src/lighting/shaders/diffuse.frag.glsl");
const maskShader = __webpack_require__(/*! ./shaders/mask.frag.glsl */ "./src/lighting/shaders/mask.frag.glsl");
const quadShader = __webpack_require__(/*! ./shaders/quad.vert.glsl */ "./src/lighting/shaders/quad.vert.glsl");
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
    TextureUnit[TextureUnit["Image"] = 6] = "Image";
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
    constructor() {
        this.canvas = document.createElement('canvas');
        this.gl = null;
        this.imageTextures = new WeakMap();
        this.uploadedCanvases = new Set();
        this.canvas.addEventListener('webglcontextlost', e => e.preventDefault());
        this.canvas.addEventListener('webglcontextrestored', () => this.initialise());
        this.initialise();
    }
    get available() {
        return this.gl !== null && !this.gl.isContextLost();
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
            console.warn('WebGL is not available, lighting has been disabled');
            return;
        }
        try {
            const prepend = (source) => `${surfaceShader}\n${source}`;
            this.copyProgram = this.createProgram(gl, copyShader);
            this.maskProgram = this.createProgram(gl, maskShader);
            this.diffuseProgram = this.createProgram(gl, prepend(diffuseShader));
            this.specularProgram = this.createProgram(gl, prepend(specularShader));
        }
        catch (e) {
            console.error('Lighting has been disabled', e);
            return;
        }
        this.textures = {
            [TextureUnit.NormalMap]: gl.createTexture(),
            [TextureUnit.SpecularMap]: gl.createTexture(),
            [TextureUnit.SurfaceMap]: gl.createTexture(),
            [TextureUnit.LightMap]: gl.createTexture(),
            [TextureUnit.RegionShadowMap]: gl.createTexture(),
            [TextureUnit.ObjectShadowMap]: gl.createTexture(),
            [TextureUnit.Image]: gl.createTexture(),
        };
        this.surfaceTarget = {
            texture: this.textures[TextureUnit.SurfaceMap],
            framebuffer: gl.createFramebuffer(),
        };
        this.specularTarget = {
            texture: gl.createTexture(),
            framebuffer: gl.createFramebuffer(),
        };
        this.imageTextures = new WeakMap();
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
        this.gl = gl;
        this.canvas.width = this.canvas.height = 0;
    }
    compileShader(gl, type, source) {
        var _a;
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS) &&
            !gl.isContextLost()) {
            throw new Error((_a = gl.getShaderInfoLog(shader)) !== null && _a !== void 0 ? _a : 'Unable to compile');
        }
        return shader;
    }
    createProgram(gl, fragmentSource) {
        var _a;
        const program = gl.createProgram();
        gl.attachShader(program, this.compileShader(gl, gl.VERTEX_SHADER, quadShader));
        gl.attachShader(program, this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource));
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
    bindTexture(gl, unit, texture, filter) {
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    upload(gl, unit, image, filter) {
        this.bindTexture(gl, unit, this.textures[unit], filter);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }
    bindImage(gl, image, filter) {
        let texture = this.imageTextures.get(image);
        const isNew = texture === undefined;
        if (!texture) {
            texture = gl.createTexture();
            this.imageTextures.set(image, texture);
        }
        this.bindTexture(gl, TextureUnit.Image, texture, filter);
        const isStale = image instanceof HTMLCanvasElement && !this.uploadedCanvases.has(image);
        if (isNew || isStale) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            this.uploadedCanvases.add(image);
        }
    }
    resizeTarget(gl, { texture, framebuffer }, screen) {
        this.bindTexture(gl, TextureUnit.Image, texture, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, screen.x, screen.y, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    }
    resize(gl, screen) {
        if (this.canvas.width === screen.x && this.canvas.height === screen.y) {
            return;
        }
        this.canvas.width = screen.x;
        this.canvas.height = screen.y;
        gl.viewport(0, 0, screen.x, screen.y);
        this.resizeTarget(gl, this.surfaceTarget, screen);
        this.resizeTarget(gl, this.specularTarget, screen);
    }
    drawQuad(gl, { uniforms }, screenRectangle, worldRectangle = [0, 0, 0, 0], maskRectangle = [0, 0, 0, 0]) {
        gl.uniform4fv(uniforms.u_screenRectangle, screenRectangle);
        gl.uniform4fv(uniforms.u_worldRectangle, worldRectangle);
        gl.uniform4fv(uniforms.u_maskRectangle, maskRectangle);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    drawTexture(gl, texture, screen) {
        const program = this.copyProgram;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.disable(gl.BLEND);
        gl.useProgram(program.program);
        gl.uniform2f(program.uniforms.u_screen, screen.x, screen.y);
        gl.uniform1f(program.uniforms.u_flipY, 1);
        this.bindTexture(gl, TextureUnit.Image, texture, gl.NEAREST);
        gl.uniform1i(program.uniforms.u_image, TextureUnit.Image);
        this.drawQuad(gl, program, [0, 0, screen.x, screen.y]);
        gl.bindTexture(gl.TEXTURE_2D, null);
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
        gl.uniform1i(uniforms.u_mask, TextureUnit.Image);
        for (const item of scene.surfaces) {
            const { surface } = item;
            const mask = surface.getMask();
            if (mask === null) {
                continue;
            }
            let maskRectangle = [0, 0, 1, 1];
            if (mask !== 'solid') {
                this.bindImage(gl, mask, filter);
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
            const bottomRight = scene.camera.worldToScreen(vec_1.vec.add(surface.position, surface.size));
            gl.uniform1f(uniforms.u_useMask, mask === 'solid' ? 0 : 1);
            gl.uniform4fv(uniforms.u_value, getValue(item));
            this.drawQuad(gl, this.maskProgram, [
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
        const bottomRight = scene.camera.worldToScreen(vec_1.vec.add(position, size));
        gl.useProgram(program.program);
        gl.uniform1f(program.uniforms.u_lightRadius, light.radius);
        gl.uniform1f(program.uniforms.u_lightHeight, light.height);
        gl.uniform1f(program.uniforms.u_lightMapSize, light.regionShadowCanvas.width);
        gl.uniform1f(program.uniforms.u_footOrigin, scene.camera.bounds.top - light.position.y);
        this.drawQuad(gl, program, [
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
        const { gl } = this;
        if (!gl) {
            return;
        }
        this.resize(gl, scene.screen);
        this.uploadedCanvases.clear();
        if (scene.normalMap) {
            this.upload(gl, TextureUnit.NormalMap, scene.normalMap, gl.NEAREST);
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
        this.bindTexture(gl, TextureUnit.SurfaceMap, this.surfaceTarget.texture, gl.NEAREST);
        this.setSceneUniforms(gl, this.diffuseProgram, scene);
        gl.uniform1f(this.diffuseProgram.uniforms.u_highlightStrength, scene.highlightStrength);
        gl.uniform1f(this.diffuseProgram.uniforms.u_shadowStrength, scene.shadowStrength);
        if (scene.specularMap) {
            this.upload(gl, TextureUnit.SpecularMap, scene.specularMap, gl.NEAREST);
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
            this.upload(gl, TextureUnit.LightMap, light.lightCanvas, filter);
            this.upload(gl, TextureUnit.RegionShadowMap, light.regionShadowCanvas, filter);
            this.upload(gl, TextureUnit.ObjectShadowMap, light.objectShadowCanvas, filter);
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
        if (this.gl) {
            this.drawTexture(this.gl, this.specularTarget.texture, screen);
        }
    }
    showSurfaces(screen) {
        if (this.gl) {
            this.drawTexture(this.gl, this.surfaceTarget.texture, screen);
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
        this.customMaskContext = null;
    }
    fillBackground(context, colour) {
        context.fillStyle = colour;
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
    drawImage(context, image) {
        (0, utilities_1.drawImageInRectangle)(context, image, this, this.repeat);
    }
    draw(context) {
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
        this.surfaceNormal = (0, vec_1.vec)();
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
            (this.repeat || !hasImages) &&
            this.zIndex === other.zIndex &&
            this.colour === other.colour &&
            this.image === other.image &&
            this.mask === other.mask &&
            this.normalMap === other.normalMap &&
            this.specularMap === other.specularMap &&
            this.repeat === other.repeat &&
            this.receiveLight === other.receiveLight &&
            vec_1.vec.eq(this.surfaceNormal, other.surfaceNormal) &&
            this.shadowBias === other.shadowBias &&
            this.projectShadows === other.projectShadows);
    }
    merge(other) {
        return new WallReceiver(this.lighting, {
            ...this,
            ...(0, utilities_1.boundingRectangle)(this, other),
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
            position: (0, vec_1.vec)(footprint.position.x, bottom - this.height),
            size: (0, vec_1.vec)(footprint.size.x, this.height),
        };
    }
    topRectangle(footprint) {
        return {
            position: (0, vec_1.vec)(footprint.position.x, footprint.position.y - this.height),
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

/***/ "./src/lighting/merge.ts":
/*!*******************************!*\
  !*** ./src/lighting/merge.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.merge = void 0;
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
const MERGE_MAX_ITERATIONS = 100;
const MERGE_ORDER = ['duplicate', types_1.Side.Bottom, types_1.Side.Right, types_1.Side.Top, types_1.Side.Left];
function findMerges(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const a = (0, utilities_1.rectangleToInterval)(items[i]);
        for (let j = i + 1; j < items.length; j++) {
            const b = (0, utilities_1.rectangleToInterval)(items[j]);
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
exports.silhouette = exports.drawImageInRectangle = exports.sector2d = exports.sector1d = exports.polygon = exports.rectangleVertices = exports.rectanglesIntersect = exports.rectangleToInterval = exports.intervalToRectangle = exports.lineIsFacing = exports.lerpColour = exports.colourToString = exports.boundingRectangle = exports.maxVec = exports.minVec = void 0;
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
function minVec(...vectors) {
    return vectors.reduce((min, v) => (0, vec_1.vec)(Math.min(min.x, v.x), Math.min(min.y, v.y)), (0, vec_1.vec)(Infinity, Infinity));
}
exports.minVec = minVec;
function maxVec(...vectors) {
    return vectors.reduce((max, v) => (0, vec_1.vec)(Math.max(max.x, v.x), Math.max(max.y, v.y)), (0, vec_1.vec)(-Infinity, -Infinity));
}
exports.maxVec = maxVec;
function boundingRectangle(a, b) {
    const position = minVec(a.position, b.position);
    const bottomRight = maxVec(vec_1.vec.add(a.position, a.size), vec_1.vec.add(b.position, b.size));
    return { position, size: vec_1.vec.sub(bottomRight, position) };
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
function lineIsFacing(line, position) {
    const edge = vec_1.vec.nor(vec_1.vec.sub(line.end, line.start));
    const edgeNormal = (0, vec_1.vec)(edge.y, -edge.x);
    const lightNormal = vec_1.vec.nor(vec_1.vec.sub(vec_1.vec.mul(vec_1.vec.add(line.start, line.end), 0.5), position));
    return vec_1.vec.dot(lightNormal, edgeNormal) <= 0;
}
exports.lineIsFacing = lineIsFacing;
function intervalToRectangle(interval) {
    return {
        position: (0, vec_1.vec)(interval.left, interval.top),
        size: (0, vec_1.vec)(interval.right - interval.left, interval.bottom - interval.top),
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
    const br1 = vec_1.vec.add(a.position, a.size);
    const tl2 = b.position;
    const br2 = vec_1.vec.add(b.position, b.size);
    return tl1.x < br2.x && br1.x > tl2.x && tl1.y < br2.y && br1.y > tl2.y;
}
exports.rectanglesIntersect = rectanglesIntersect;
function rectangleVertices(rectangle) {
    const tl = rectangle.position;
    const br = vec_1.vec.add(rectangle.position, rectangle.size);
    return [rectangle.position, (0, vec_1.vec)(br.x, tl.y), br, (0, vec_1.vec)(tl.x, br.y)];
}
exports.rectangleVertices = rectangleVertices;
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

/***/ "./src/lighting/shaders/copy.frag.glsl":
/*!*********************************************!*\
  !*** ./src/lighting/shaders/copy.frag.glsl ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\nuniform sampler2D u_image;\nuniform float u_flipY;\n\nvarying vec2 v_sceneUV;\n\nvoid main() {\n  gl_FragColor = texture2D(\n    u_image,\n    vec2(v_sceneUV.x, mix(v_sceneUV.y, 1.0 - v_sceneUV.y, u_flipY))\n  );\n}\n";

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

/***/ "./src/lighting/shaders/quad.vert.glsl":
/*!*********************************************!*\
  !*** ./src/lighting/shaders/quad.vert.glsl ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\nattribute vec2 a_corner;\n\n// Size of the screen in pixels\nuniform vec2 u_screen;\n\n// Area to draw, as (x, y, width, height) in screen pixels\nuniform vec4 u_screenRectangle;\n\n// The same area, as (x, y, width, height) in world units relative to the light\nuniform vec4 u_worldRectangle;\n\n// The same area, as (x, y, width, height) in texture coordinates of a mask\nuniform vec4 u_maskRectangle;\n\nvarying vec2 v_sceneUV;\nvarying vec2 v_fromLight;\nvarying vec2 v_maskUV;\n\nvoid main() {\n  vec2 position = u_screenRectangle.xy + a_corner * u_screenRectangle.zw;\n\n  v_sceneUV = position / u_screen;\n  v_fromLight = u_worldRectangle.xy + a_corner * u_worldRectangle.zw;\n  v_maskUV = u_maskRectangle.xy + a_corner * u_maskRectangle.zw;\n\n  gl_Position = vec4(\n    v_sceneUV.x * 2.0 - 1.0,\n    1.0 - v_sceneUV.y * 2.0,\n    0.0,\n    1.0\n  );\n}\n";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/lighting/index.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wall = exports.WallReceiver = exports.Surface = exports.GroundReceiver = exports.SceneObject = exports.LightingSystem = exports.Light = exports.SpriteCaster = exports.RegionCaster = exports.CircleCaster = exports.Actor = void 0;
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

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsVUFBVTtBQUNWLEtBQUssa0NBQWtDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtBQUNuRSxVQUFVO0FBQ1YsS0FBSyxrQ0FBa0MsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtBQUNoRixVQUFVO0FBQ1YsS0FBSyxtQ0FBbUMsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJO0FBQzVFLFVBQVU7QUFDVixLQUFLLG1DQUFtQyxJQUFJLG1CQUFtQixJQUFJLG1CQUFtQixJQUFJO0FBQzFGLFVBQVU7QUFDVixLQUFLLG9DQUFvQyxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDN0UsVUFBVTtBQUNWLEtBQUssb0NBQW9DLElBQUksbUJBQW1CLElBQUksbUJBQW1CLElBQUk7QUFDM0YsVUFBVTtBQUNWLEtBQUssbUNBQW1DLElBQUksa0JBQWtCLElBQUksbUJBQW1CLElBQUk7QUFDekY7QUFDQSxLQUFLLG9DQUFvQyxJQUFJLGtCQUFrQixJQUFJLG1CQUFtQixJQUFJO0FBQzFGO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxJQUFJLElBQTZCO0FBQ2pDLHFCQUFxQjtBQUNyQjs7Ozs7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksU0FBUztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsdUJBQXVCO0FBQ2xDLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLGVBQWU7QUFDMUIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxHQUFHO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGVBQWU7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixZQUFZLEdBQUc7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixZQUFZLFVBQVU7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUztBQUM1QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksU0FBUztBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsZ0JBQWdCO0FBQzNCLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBNkI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyZkEsUUFBUSxvQkFBb0IsRUFBRSxtQkFBTyxDQUFDLGdGQUF5Qjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksS0FBSztBQUNqQjtBQUNBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCLE1BQU0sMkJBQTJCO0FBQ2pDLFFBQVEsYUFBYSxJQUFJLFlBQVk7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0EsdUJBQXVCLDRCQUE0Qjs7QUFFbkQ7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0EsdUJBQXVCLHdCQUF3Qjs7QUFFL0M7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0EsdUJBQXVCLDRCQUE0Qjs7QUFFbkQ7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFlBQVksU0FBUztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLEtBQUs7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxXQUFXO0FBQ3RCLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksS0FBSztBQUNqQjtBQUNBLHVCQUF1QixnQ0FBZ0M7O0FBRXZEO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBLDhCQUE4QixJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUk7O0FBRTVDO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLGVBQWU7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLEtBQUs7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QixvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxRQUFRO0FBQ25CLFlBQVksS0FBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUIsb0JBQW9CO0FBQ3BCLHFCQUFxQixXQUFXO0FBQ2hDLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixVQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUIsb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksS0FBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksS0FBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQSxJQUFJLElBQTZCO0FBQ2pDLHFCQUFxQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7O0FDaFpBLDhHQUE0QztBQUM1QyxpRkFLa0I7QUFvQ2xCLE1BQWEsS0FBSztJQVNoQixZQUFtQixRQUF3QixFQUFFLE9BQXFCO1FBSmxELFdBQU0sR0FBdUMsSUFBSSxDQUFDO1FBS2hFLE1BQU0sRUFBRSxNQUFNLEdBQUcsUUFBUSxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsYUFBYSxFQUFFLEdBQUcsQ0FDbEQsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUN2QixDQUFDO1FBRWxDLElBQUksQ0FBQyxlQUFlO1lBQ2xCLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztRQUVwRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDdEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsY0FBYyxFQUFFLEtBQUs7WUFDckIsR0FBRyxPQUFPO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDckIsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLDJCQUEyQixDQUFDO1lBRXhFLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztnQkFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixlQUFlLEVBQUUsWUFBWTtnQkFDN0IsZUFBZSxFQUFFLFlBQVk7Z0JBQzdCLEdBQUcsYUFBYTtnQkFDaEIsR0FBRyxTQUFTO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO2dCQUNyQyxHQUFHLGFBQWE7Z0JBQ2hCLEdBQUcsU0FBUzthQUNiLENBQUMsQ0FBQztTQUNKO1FBR0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUtPLFVBQVUsQ0FBQyxNQUFtQzs7UUFDcEQsSUFBSSxNQUFNLFlBQVkscUJBQVksRUFBRTtZQUNsQyxNQUFNLE1BQU0sR0FBRyxZQUFNLENBQUMsZUFBZSxtQ0FBSSxNQUFNLENBQUMsZUFBZSxDQUFDO1lBRWhFLE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sU0FBUyxDQUFDLFFBQWEsRUFBRSxJQUFTO1FBQ3hDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBRyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDckUsSUFBSSxFQUFFLGFBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFLTSxNQUFNLENBQUMsUUFBYTs7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsVUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUtNLE1BQU07O1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixVQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDOztBQXBGSCxzQkFxRkM7QUFwRnlCLDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsaUNBQTJCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1QzdELDhHQUE0QztBQUU1QyxnR0FBZ0U7QUFFaEUsMEZBQTREO0FBWTVELE1BQWEsWUFBYSxTQUFRLHlCQUFnQztJQUdoRSxZQUFtQixRQUF3QixFQUFFLE9BQTRCO1FBQ3ZFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIcEIsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBSTFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUtNLFFBQVEsQ0FBQyxLQUFtQjtRQUNqQyxPQUFPLENBQ0wsSUFBSSxDQUFDLFNBQVM7WUFDZCxLQUFLLENBQUMsU0FBUztZQUNmLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxLQUFLLENBQUMsbUJBQW1CLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBS00sS0FBSyxDQUFDLEtBQW1CO1FBQzlCLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxHQUFJLElBQXFCO1lBQ3pCLEdBQUcsaUNBQWlCLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUE1QkQsb0NBNEJDO0FBd0NELE1BQWEsWUFBYSxTQUFRLHlCQUFnQztJQVFoRSxZQUFtQixRQUF3QixFQUFFLE9BQTRCO1FBQ3ZFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFScEIsV0FBTSxHQUF5QixJQUFJLENBQUM7UUFDcEMsVUFBSyxHQUF5QixJQUFJLENBQUM7UUFDbkMsV0FBTSxHQUFRLGFBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsV0FBTSxHQUFRLGFBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0Isb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBSXpDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUtNLFNBQVM7O1FBQ2QsT0FBTyxVQUFJLENBQUMsTUFBTSxtQ0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksMEJBQVUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFuQkQsb0NBbUJDO0FBOEJELE1BQWEsWUFBYSxTQUFRLHlCQUFnQztJQU1oRSxZQUFtQixRQUF3QixFQUFFLE9BQTRCO1FBQ3ZFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFOcEIsV0FBTSxHQUFRLGFBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7UUFDdEMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUl2QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQVZELG9DQVVDOzs7Ozs7Ozs7Ozs7Ozs7QUMvSUQsMElBQTBEO0FBQzFELHNIQUFpRTtBQUNqRSw4R0FBNEM7QUFHNUMsOEVBTWlCO0FBQ2pCLDBGQVFxQjtBQUVyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQXlDNUIsTUFBYSxLQUFLO0lBdUNoQixZQUFtQixjQUE4QixFQUFFLE9BQXFCOztRQUZoRSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBR25CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFPLENBQUMsTUFBTSxtQ0FBSSxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBTyxDQUFDLE1BQU0sbUNBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQU8sQ0FBQyxVQUFVLG1DQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQU8sQ0FBQyxTQUFTLG1DQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQU8sQ0FBQyxNQUFNLG1DQUFJLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFPLENBQUMsV0FBVyxtQ0FBSSxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRywyQkFBVSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUV2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUVyRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUN2RSxDQUFDO0lBS0QsSUFBVyxNQUFNO1FBQ2YsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUU1RSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQUcsRUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQ2xFO1lBQ0QsSUFBSSxFQUFFLGFBQUcsRUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUNqRDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRywyQkFBVSxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBS00sTUFBTSxDQUFDLFFBQWE7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFLTSxHQUFHLENBQUMsT0FBOEI7UUFDdkMsTUFBTSxFQUNKLFFBQVEsRUFDUixNQUFNLEVBQ04sTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsR0FDWixHQUFHLE9BQU8sQ0FBQztRQUVaLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLGFBQVIsUUFBUSxjQUFSLFFBQVEsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLGFBQU4sTUFBTSxjQUFOLE1BQU0sR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsYUFBVixVQUFVLGNBQVYsVUFBVSxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLGFBQVQsU0FBUyxjQUFULFNBQVMsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsYUFBWCxXQUFXLGNBQVgsV0FBVyxHQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDckQsQ0FBQztJQUtNLE1BQU07UUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sT0FBTyxDQUNaLGFBQTZCLEVBQzdCLGFBQTZCLEVBQzdCLGFBQTZCO1FBRzdCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFbkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBTU8sa0JBQWtCLENBQUMsT0FBaUM7UUFDMUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNyRDtRQUVELE9BQU8sQ0FBQyxxQkFBcUI7WUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUM7UUFDcEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDNUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3hCLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUNyRCxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUNoRSxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO1FBQ0YsUUFBUSxDQUFDLFlBQVksQ0FDbkIsQ0FBQyxFQUNELDhCQUFjLEVBQUM7WUFDYixHQUFHLElBQUksQ0FBQyxZQUFZO1lBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVTtZQUN4QyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFDeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVO1NBQ3pDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLENBQUMsRUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFHTyxvQkFBb0IsQ0FDMUIsY0FBeUIsRUFDekIsYUFBNkI7UUFFN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBRXpDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsQ0FDZixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQy9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FDaEMsQ0FBQztRQUVGLEtBQUssTUFBTSxNQUFNLElBQUksYUFBYSxFQUFFO1lBRWxDLElBQUksbUNBQW1CLEVBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUMvQyx1QkFBTyxFQUNMLE9BQU8sRUFDUCxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQ2hFLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLG9CQUFvQixDQUMxQixjQUF5QixFQUN6QixhQUE2Qjs7UUFFN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBRXpDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5QyxLQUFLLE1BQU0sTUFBTSxJQUFJLGFBQWEsRUFBRTtZQUVsQyxJQUFJLG1DQUFtQixFQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDL0MsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUl4QyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNqQixTQUFTO2lCQUNWO2dCQUVELE1BQU0sWUFBWSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQzFCLE1BQU0sQ0FBQyxRQUFRLEVBQ2YsYUFBRyxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ3RFLENBQUM7Z0JBQ0YsTUFBTSxZQUFZLEdBQUcsc0JBQVUsRUFDN0IsTUFBTSxDQUFDLGVBQWUsRUFDdEIsWUFBTSxDQUFDLGVBQWUsbUNBQUksSUFBSSxDQUFDLE1BQU0sRUFDckMsa0JBQU0sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ3RFLENBQUM7Z0JBQ0YsTUFBTSxVQUFVLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FDeEIsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDN0MsWUFBWSxDQUNiLENBQUM7Z0JBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLFdBQVcsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFFbEQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxTQUFTLENBQ2YsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDaEMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDakMsQ0FBQztnQkFDRixPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLENBQUMsU0FBUyxDQUNmLFlBQVksRUFDWixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNoQyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDYixnQkFBZ0IsQ0FDakIsQ0FBQztnQkFDRixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkI7U0FDRjtRQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU8sb0JBQW9CLENBQzFCLGNBQXlCLEVBQ3pCLGFBQTZCOztRQUU3QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFekMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLEtBQUssTUFBTSxNQUFNLElBQUksYUFBYSxFQUFFO1lBRWxDLElBQUksbUNBQW1CLEVBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUMvQyxNQUFNLFlBQVksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUMxQixNQUFNLENBQUMsUUFBUSxFQUNmLGFBQUcsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUN0RSxDQUFDO2dCQUNGLE1BQU0sY0FBYyxHQUFHLHNCQUFVLEVBQy9CLE1BQU0sQ0FBQyxpQkFBaUIsRUFDeEIsWUFBTSxDQUFDLGlCQUFpQixtQ0FBSSxJQUFJLENBQUMsTUFBTSxFQUN2QyxrQkFBTSxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztnQkFDRixNQUFNLGNBQWMsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUM1QixTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUM3QyxjQUFjLENBQ2YsQ0FBQztnQkFDRixNQUFNLFVBQVUsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRTdDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDZixPQUFPLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQ2YsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDaEMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDakMsQ0FBQztnQkFDRixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQ2IsY0FBYyxDQUFDLENBQUMsRUFDaEIsY0FBYyxDQUFDLENBQUMsRUFDaEIsVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxFQUNaLENBQUMsRUFDRCxDQUFDLEVBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQ1osQ0FBQztnQkFDRixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1NBQ0Y7UUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLG1CQUFtQixDQUN6QixxQkFBZ0MsRUFDaEMsc0JBQStCLEtBQUs7UUFFcEMsTUFBTSxhQUFhLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxNQUFNLG9CQUFvQixHQUFHLG1DQUFtQixFQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDeEUsTUFBTSxvQkFBb0IsR0FBRyxpQ0FBaUIsRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQztRQUUvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELE1BQU0sUUFBUSxHQUFHLGNBQUUsRUFBQyxvQkFBb0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEMsSUFBSSxDQUFDLDRCQUFZLEVBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ25FLE1BQU0sT0FBTyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLE9BQU8sR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDaEQsV0FBVyxDQUFDLElBQUksQ0FDZDtvQkFDRSxLQUFLLEVBQUUsUUFBUTtvQkFDZixHQUFHLEVBQUUsU0FBRyxDQUFDLEdBQUcsQ0FDVixRQUFRLEVBQ1IsU0FBRyxDQUFDLEdBQUcsQ0FDTCxTQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUNoQixJQUFJLENBQUMsR0FBRyxDQUNOLEtBQUssQ0FBQyxhQUFhLEVBQ25CLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQ3JELENBQ0YsQ0FDRjtpQkFDRixFQUNEO29CQUNFLEtBQUssRUFBRSxPQUFPO29CQUNkLEdBQUcsRUFBRSxTQUFHLENBQUMsR0FBRyxDQUNWLE9BQU8sRUFDUCxTQUFHLENBQUMsR0FBRyxDQUNMLFNBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQ2hCLElBQUksQ0FBQyxHQUFHLENBQ04sS0FBSyxDQUFDLGFBQWEsRUFDbkIsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDckQsQ0FDRixDQUNGO2lCQUNGLENBQ0YsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxNQUFNLGFBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQzFDLFFBQVEsd0JBQVEsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLEVBQUU7WUFDckQsS0FBSyxnQkFBUSxDQUFDLE9BQU87Z0JBQ25CLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQzVCLE1BQU07aUJBQ1A7Z0JBRUQsSUFBSSxtQkFBbUIsRUFBRTtvQkFDdkIsYUFBYSxDQUFDLElBQUksQ0FDaEIscUJBQXFCLENBQUMsUUFBUSxFQUM5QixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixhQUFHLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixhQUFHLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtnQkFDRCxNQUFNO1lBRVIsS0FBSyxnQkFBUSxDQUFDLEdBQUc7Z0JBQ2YsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsTUFBTTtpQkFDUDtnQkFFRCxJQUFJLG1CQUFtQixFQUFFO29CQUN2QixhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxDQUNGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsQ0FBQyxPQUFpQyxFQUFFLEVBQUU7d0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsYUFBYSxDQUFDLENBQUMsRUFDZixhQUFhLENBQUMsQ0FBQyxFQUNmLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUNqQyxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELEtBQUssQ0FDTixDQUFDO29CQUNKLENBQUMsRUFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNyQixDQUFDO2lCQUNIO2dCQUNELE1BQU07WUFFUixLQUFLLGdCQUFRLENBQUMsUUFBUTtnQkFDcEIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsTUFBTTtpQkFDUDtnQkFFRCxJQUFJLG1CQUFtQixFQUFFO29CQUN2QixhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixhQUFHLEVBQ0QscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUMvRCxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNqQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUNuQixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNyQixDQUFDO2lCQUNIO2dCQUNELE1BQU07WUFFUixLQUFLLGdCQUFRLENBQUMsSUFBSTtnQkFDaEIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsTUFBTTtpQkFDUDtnQkFFRCxJQUFJLG1CQUFtQixFQUFFO29CQUN2QixhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsQ0FBQyxPQUFpQyxFQUFFLEVBQUU7d0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsYUFBYSxDQUFDLENBQUMsRUFDZixhQUFhLENBQUMsQ0FBQyxFQUNmLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUNqQyxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELEtBQUssQ0FDTixDQUFDO29CQUNKLENBQUMsRUFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNyQixDQUFDO2lCQUNIO2dCQUNELE1BQU07WUFFUixLQUFLLGdCQUFRLENBQUMsTUFBTTtnQkFDbEIsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLENBQUMsT0FBaUMsRUFBRSxFQUFFO3dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsQ0FBQyxDQUFDLEVBQ2YsYUFBYSxDQUFDLENBQUMsRUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFDakMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxLQUFLLENBQ04sQ0FBQztvQkFDSixDQUFDLENBQ0YsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxVQUFVO2dCQUN0QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixhQUFHLEVBQ0QscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDaEMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNoRSxDQUNGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsYUFBRyxFQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQy9DLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxNQUFNO2dCQUNsQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLENBQUMsT0FBaUMsRUFBRSxFQUFFO3dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsQ0FBQyxDQUFDLEVBQ2YsYUFBYSxDQUFDLENBQUMsRUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFDakMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxLQUFLLENBQ04sQ0FBQztvQkFDSixDQUFDLEVBQ0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxXQUFXO2dCQUN2QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixTQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FDcEUsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixhQUFHLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtnQkFDRCxNQUFNO1NBQ1Q7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOztBQTlzQkgsc0JBK3NCQztBQTlzQnlCLG9CQUFjLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLG9CQUFjLEdBQUcsT0FBTyxDQUFDO0FBQ3pCLHlCQUFtQixHQUFHLEdBQUcsQ0FBQztBQUMxQixxQkFBZSxHQUFHLElBQUksQ0FBQztBQUN2Qix1QkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDdEIsb0JBQWMsR0FBRyxFQUFFLENBQUM7QUFDcEIsbUJBQWEsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RFN0MsMElBQTBEO0FBQzFELHNIQUFzRDtBQUN0RCw4R0FBNEM7QUFDNUMsOEVBQThDO0FBQzlDLGlGQU9rQjtBQUNsQiw4RUFBOEM7QUFDOUMsOEVBQWdDO0FBRWhDLDZGQUF5RDtBQUN6RCxvRkFNbUI7QUFFbkIsMEZBSXFCO0FBQ3JCLDJFQUEyQztBQWtHM0MsTUFBYSxjQUFjO0lBcUJqQixNQUFNLENBQUMsYUFBYTtRQUMxQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQzVELENBQUM7SUFFTyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQWUsRUFBRSxDQUFlO1FBQzdELE9BQU8sQ0FDTCxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQWdDRCxZQUFtQixPQUF3QztRQTVCcEQsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUtyQixXQUFNLEdBQVEsYUFBRyxHQUFFLENBQUM7UUFFbkIsb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUVuQyxvQkFBZSxHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsRCxtQkFBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBRTVDLDRCQUF1QixHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxRCwyQkFBc0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1FBRTVELDBCQUFxQixHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCx5QkFBb0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBRXhELDRCQUF1QixHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxRCwyQkFBc0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1FBRTVELGVBQVUsR0FBc0IsSUFBSSxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDMUIsRUFBRSxFQUNGLGNBQWMsQ0FBQyxlQUFlLEVBQzlCLE9BQU8sYUFBUCxPQUFPLGNBQVAsT0FBTyxHQUFJLEVBQUUsQ0FDZCxDQUFDO0lBQ0osQ0FBQztJQUtNLFNBQVMsQ0FBQyxPQUE4QjtRQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFjLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFNTSxPQUFPLENBQUMsT0FBb0I7UUFDakMsT0FBTyxJQUFJLFdBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUtNLFFBQVEsQ0FBQyxPQUFxQjtRQUNuQyxPQUFPLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBS00sUUFBUSxDQUFDLE9BQXFCO1FBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFPTSxlQUFlLENBQUMsT0FBNEI7UUFDakQsTUFBTSxJQUFJLEdBQUcsSUFBSSxzQkFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFLTSxlQUFlLENBQUMsT0FBNEI7UUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBS00sZUFBZSxDQUFDLE9BQTRCO1FBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUtNLGVBQWUsQ0FBQyxPQUE0QjtRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFLTSxNQUFNLENBQUMsTUFBZ0M7UUFDNUMsSUFBSSxNQUFNLFlBQVksYUFBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUM7WUFDNUQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFhTSxRQUFRLENBQ2IsT0FJUztRQUVULElBQUksQ0FBQyxhQUFhLEdBQUcsaUJBQUssRUFBZSxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcsaUJBQUssRUFBZSxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFLTyxhQUFhOztRQUNuQixVQUFJLENBQUMsVUFBVSxvQ0FBZixJQUFJLENBQUMsVUFBVSxHQUFLLElBQUksdUJBQVUsRUFBRSxFQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBS08sWUFBWSxDQUFDLE9BQWlDO1FBQ3BELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDckUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztJQUNyRSxDQUFDO0lBU00sTUFBTSxDQUNYLE9BQWlDLEVBQ2pDLE1BQXNCLEVBQ3RCLFNBQXVEO1FBRXZELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsYUFBRyxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFLTSxZQUFZLENBQUMsT0FBaUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVFNLE9BQU8sQ0FBQyxNQUFzQixFQUFFLE1BQVc7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBRUQsTUFBTSxlQUFlLEdBQUcsbUNBQW1CLEVBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FDdEUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQ0FBbUIsRUFBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQ3pELENBQUM7UUFFRixNQUFNLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVDLE1BQU0sYUFBYSxHQUNqQixrQkFBa0I7WUFDbEIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQzdELENBQUM7UUFDSixNQUFNLGVBQWUsR0FDbkIsa0JBQWtCO1lBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUNqRSxDQUFDO1FBRUosSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDN0M7UUFHRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUMvQyxtQ0FBbUIsRUFBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUNuRCxDQUFDO1FBRUYsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUM1QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQzFFLENBQUM7UUFFRixVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2hCLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTSxFQUFFLGFBQWE7WUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7WUFDL0MsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzNELFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNqRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQjtZQUN6RCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQjtZQUNyRCwwQkFBMEIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQjtZQUNuRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQjtZQUMzRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QjtZQUN2RCxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0I7WUFDakQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0I7WUFDckQsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZTtZQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjO1lBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxlQUFlLEVBQUU7WUFDbkIsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUdoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsR0FBRyxnQkFBZ0IsQ0FBQztZQUN6RSxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFPTSxtQkFBbUI7O1FBQ3hCLFVBQUksQ0FBQyxVQUFVLDBDQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0MsT0FBTyxnQkFBSSxDQUFDLFVBQVUsMENBQUUsTUFBTSxtQ0FBSSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3hELENBQUM7SUFLTyxzQkFBc0IsQ0FBQyxRQUF3QjtRQUNyRCxNQUFNLFNBQVMsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLGFBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sWUFBWSxHQUFHLDJCQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sTUFBTSxHQUFHLDJCQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sU0FBUyxHQUFHLDJCQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXZFLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsT0FBTztZQUNQLFlBQVksRUFDVixPQUFPLFlBQVksc0JBQVk7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQ3hCLE9BQU8sQ0FBQyxhQUFhLEVBQ3JCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLFNBQVMsQ0FDVjtnQkFDSCxDQUFDLENBQUMsWUFBWTtTQUNuQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFLTyxxQkFBcUIsQ0FDM0IsYUFBa0IsRUFDbEIscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLGtCQUEwQixFQUMxQixxQkFBNkI7UUFFN0IsSUFBSSxTQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFHLEdBQUUsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsTUFBTSxHQUFHLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkUsSUFBSSx1QkFBVyxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN2QixPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sMEJBQVUsRUFBQyxZQUFZLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5RDtRQUVELE9BQU8sMEJBQVUsRUFBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUtNLGdCQUFnQixDQUFDLE9BQWlDO1FBQ3ZELElBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0I7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsS0FBSyxTQUFTO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUNsQztZQUNBLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRCxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFLTSxJQUFJLENBQUMsT0FBaUM7UUFDM0MsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWYsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUk3QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztZQUM3QyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUtPLGtCQUFrQixDQUFDLE1BQXNCLEVBQUUsUUFBd0I7UUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVqRCxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUtPLG9CQUFvQixDQUMxQixNQUFzQixFQUN0QixRQUF3QjtRQUV4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRW5ELFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztBQTNjSCx3Q0E0Y0M7QUEzY3lCLDhCQUFlLEdBQTBCO0lBQy9ELHFCQUFxQixFQUFFLElBQUk7SUFDM0Isa0JBQWtCLEVBQUUsS0FBSztJQUN6QixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsdUJBQXVCLEVBQUUsR0FBRztJQUM1QixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLHNCQUFzQixFQUFFLENBQUM7SUFDekIsZUFBZSxFQUFFLEVBQUU7SUFDbkIsY0FBYyxFQUFFLEdBQUc7SUFDbkIsYUFBYSxFQUFFLEdBQUc7SUFDbEIsa0JBQWtCLEVBQUUsT0FBTztJQUMzQix3QkFBd0IsRUFBRSxPQUFPO0lBQ2pDLDJCQUEyQixFQUFFLE9BQU87SUFDcEMscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixtQkFBbUIsRUFBRSxDQUFDLEVBQUU7SUFDeEIsMEJBQTBCLEVBQUUsRUFBRTtJQUM5QixzQkFBc0IsRUFBRSxJQUFJO0NBQzdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xKSiw4R0FBNEM7QUEyQjVDLE1BQXNCLFdBQVc7SUFPL0IsWUFBbUIsUUFBd0IsRUFBRSxPQUFnQjtRQUZ0RCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBS00sTUFBTSxDQUFDLFFBQWE7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFLTSxNQUFNLENBQUMsSUFBUztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUtNLEdBQUcsQ0FBQyxPQUF5QjtRQUNsQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3RCLElBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDNUI7U0FDRjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBS00sTUFBTTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQS9DRCxrQ0ErQ0M7Ozs7Ozs7Ozs7Ozs7OztBQzFFRCw4R0FBNEM7QUFFNUMsb0ZBQWtFO0FBRWxFLGdIQUF3RDtBQUN4RCx5SEFBOEQ7QUFDOUQsZ0hBQXdEO0FBQ3hELGdIQUF3RDtBQUN4RCw0SEFBZ0U7QUFDaEUsK0dBQXlEO0FBMEN6RCxJQUFLLFdBUUo7QUFSRCxXQUFLLFdBQVc7SUFDZCx1REFBUztJQUNULDJEQUFXO0lBQ1gseURBQVU7SUFDVixxREFBUTtJQUNSLG1FQUFlO0lBQ2YsbUVBQWU7SUFDZiwrQ0FBSztBQUNQLENBQUMsRUFSSSxXQUFXLEtBQVgsV0FBVyxRQVFmO0FBTUQsSUFBSyxXQU1KO0FBTkQsV0FBSyxXQUFXO0lBQ2QsNkNBQVE7SUFDUixvREFBYTtJQUNiLGlFQUFtQjtJQUNuQix3REFBZTtJQUNmLCtDQUFTO0FBQ1gsQ0FBQyxFQU5JLFdBQVcsS0FBWCxXQUFXLFFBTWY7QUFhRCxNQUFhLFVBQVU7SUEyQnJCO1FBbkJnQixXQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRCxPQUFFLEdBQWlDLElBQUksQ0FBQztRQWN4QyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUErQixDQUFDO1FBQzNELHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO1FBR2xELElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxDQUN4RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQ2xCLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUtELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUVmLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxLQUFLLEVBQUUsSUFBSTtZQUNYLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7WUFDbkUsT0FBTztTQUNSO1FBRUQsSUFBSTtZQUNGLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxHQUFHLGFBQWEsS0FBSyxNQUFNLEVBQUUsQ0FBQztZQUVsRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFHO1lBQzVDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUc7WUFDOUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRztZQUM3QyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFHO1lBQzNDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxhQUFhLEVBQUc7WUFDbEQsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRztZQUNsRCxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFHO1NBQ3pDLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDOUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRztTQUNyQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixPQUFPLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRztZQUM1QixXQUFXLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixFQUFHO1NBQ3JDLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFbkMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxVQUFVLENBQ1gsRUFBRSxDQUFDLFlBQVksRUFDZixJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMxQyxFQUFFLENBQUMsV0FBVyxDQUNmLENBQUM7UUFDRixFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sYUFBYSxDQUNuQixFQUF5QixFQUN6QixJQUFZLEVBQ1osTUFBYzs7UUFFZCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsSUFDRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkI7WUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLFFBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsbUNBQUksbUJBQW1CLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxhQUFhLENBQ25CLEVBQXlCLEVBQ3pCLGNBQXNCOztRQUV0QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFHLENBQUM7UUFFcEMsRUFBRSxDQUFDLFlBQVksQ0FDYixPQUFPLEVBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FDckQsQ0FBQztRQUNGLEVBQUUsQ0FBQyxZQUFZLENBQ2IsT0FBTyxFQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQzNELENBQUM7UUFDRixFQUFFLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhCLElBQ0UsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDaEQsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQ25CO1lBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLG1DQUFJLGdCQUFnQixDQUFDLENBQUM7U0FDcEU7UUFFRCxNQUFNLFFBQVEsR0FBd0IsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDbEQsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFFLENBQUM7U0FDeEQ7UUFFRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFLTyxXQUFXLENBQ2pCLEVBQXlCLEVBQ3pCLElBQVksRUFDWixPQUFxQixFQUNyQixNQUFjO1FBRWQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBS08sTUFBTSxDQUNaLEVBQXlCLEVBQ3pCLElBQWlCLEVBQ2pCLEtBQW9CLEVBQ3BCLE1BQWM7UUFFZCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFLTyxTQUFTLENBQ2YsRUFBeUIsRUFDekIsS0FBb0IsRUFDcEIsTUFBYztRQUVkLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE1BQU0sS0FBSyxHQUFHLE9BQU8sS0FBSyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFekQsTUFBTSxPQUFPLEdBQ1gsS0FBSyxZQUFZLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRSxJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDcEIsRUFBRSxDQUFDLFVBQVUsQ0FDWCxFQUFFLENBQUMsVUFBVSxFQUNiLENBQUMsRUFDRCxFQUFFLENBQUMsSUFBSSxFQUNQLEVBQUUsQ0FBQyxJQUFJLEVBQ1AsRUFBRSxDQUFDLGFBQWEsRUFDaEIsS0FBSyxDQUNOLENBQUM7WUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUtPLFlBQVksQ0FDbEIsRUFBeUIsRUFDekIsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFnQixFQUN0QyxNQUFXO1FBRVgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELEVBQUUsQ0FBQyxVQUFVLENBQ1gsRUFBRSxDQUFDLFVBQVUsRUFDYixDQUFDLEVBQ0QsRUFBRSxDQUFDLElBQUksRUFDUCxNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxFQUNELEVBQUUsQ0FBQyxJQUFJLEVBQ1AsRUFBRSxDQUFDLGFBQWEsRUFDaEIsSUFBSSxDQUNMLENBQUM7UUFFRixFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLG9CQUFvQixDQUNyQixFQUFFLENBQUMsV0FBVyxFQUNkLEVBQUUsQ0FBQyxpQkFBaUIsRUFDcEIsRUFBRSxDQUFDLFVBQVUsRUFDYixPQUFPLEVBQ1AsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBS08sTUFBTSxDQUFDLEVBQXlCLEVBQUUsTUFBVztRQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNyRSxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBS08sUUFBUSxDQUNkLEVBQXlCLEVBQ3pCLEVBQUUsUUFBUSxFQUFXLEVBQ3JCLGVBQXlCLEVBQ3pCLGlCQUEyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN2QyxnQkFBMEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUtPLFdBQVcsQ0FDakIsRUFBeUIsRUFDekIsT0FBcUIsRUFDckIsTUFBVztRQUVYLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFakMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3ZELEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBS08sWUFBWSxDQUFDLE9BQXFCLEVBQUUsS0FBa0I7UUFDNUQsSUFBSSxPQUFPLFlBQVksd0JBQWMsRUFBRTtZQUNyQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsTUFBTSxJQUFJLEdBQUcsT0FBdUIsQ0FBQztRQUVyQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWM7Z0JBQ3hCLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYTtnQkFDM0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDMUI7UUFHRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUNyQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUN2RCxVQUFVLENBQUMsVUFBVSxDQUN4QixDQUFDO1FBQ0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVuRSxPQUFPO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztZQUNuQyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRztZQUN0QixJQUFJO1NBQ0wsQ0FBQztJQUNKLENBQUM7SUFLTyxZQUFZLENBQ2xCLEVBQXlCLEVBQ3pCLEtBQWtCLEVBQ2xCLFFBQTJDO1FBRTNDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUVwRSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpELEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNqQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLFNBQVM7YUFDVjtZQUVELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBR2pDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO29CQUM5QyxhQUFhLEdBQUc7d0JBQ2QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7d0JBQy9CLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNO3dCQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSzt3QkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07cUJBQzdCLENBQUM7aUJBQ0g7YUFDRjtZQUVELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FDNUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDeEMsQ0FBQztZQUVGLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUNYLEVBQUUsRUFDRixJQUFJLENBQUMsV0FBVyxFQUNoQjtnQkFDRSxPQUFPLENBQUMsQ0FBQztnQkFDVCxPQUFPLENBQUMsQ0FBQztnQkFDVCxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2FBQzFCLEVBQ0QsU0FBUyxFQUNULGFBQWEsQ0FDZCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBS08sZ0JBQWdCLENBQ3RCLEVBQXlCLEVBQ3pCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBVyxFQUM5QixLQUFrQjtRQUVsQixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hFLEVBQUUsQ0FBQyxTQUFTLENBQ1YsUUFBUSxDQUFDLDRCQUE0QixFQUNyQyxLQUFLLENBQUMsMEJBQTBCLENBQ2pDLENBQUM7UUFDRixFQUFFLENBQUMsU0FBUyxDQUNWLFFBQVEsQ0FBQyx3QkFBd0IsRUFDakMsS0FBSyxDQUFDLHNCQUFzQixDQUM3QixDQUFDO1FBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUtPLFNBQVMsQ0FDZixFQUF5QixFQUN6QixPQUFnQixFQUNoQixLQUFZLEVBQ1osS0FBa0I7UUFFbEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFeEUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsRUFBRSxDQUFDLFNBQVMsQ0FDVixPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFDL0IsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FDL0IsQ0FBQztRQUNGLEVBQUUsQ0FBQyxTQUFTLENBQ1YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDM0MsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQ1gsRUFBRSxFQUNGLE9BQU8sRUFDUDtZQUNFLE9BQU8sQ0FBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLENBQUM7WUFDVCxXQUFXLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLFdBQVcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDMUIsRUFDRDtZQUNFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLENBQUM7U0FDUCxDQUNGLENBQUM7SUFDSixDQUFDO0lBTU0sTUFBTSxDQUFDLEtBQWtCO1FBQzlCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFOUIsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckU7UUFJRCxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLFNBQVMsQ0FDVixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNmLENBQUM7UUFFRixFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FDbEMsQ0FBQztRQUdGLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNqRSxDQUFDLEdBQUcsR0FBRztZQUNQLENBQUMsR0FBRyxHQUFHO1lBQ1AsQ0FBQyxHQUFHLEdBQUc7WUFDUCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FDZCxFQUFFLEVBQ0YsV0FBVyxDQUFDLFVBQVUsRUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQzFCLEVBQUUsQ0FBQyxPQUFPLENBQ1gsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxFQUFFLENBQUMsU0FBUyxDQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUNoRCxLQUFLLENBQUMsaUJBQWlCLENBQ3hCLENBQUM7UUFDRixFQUFFLENBQUMsU0FBUyxDQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUM3QyxLQUFLLENBQUMsY0FBYyxDQUNyQixDQUFDO1FBRUYsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFeEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbEQsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBRXBFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FDVCxFQUFFLEVBQ0YsV0FBVyxDQUFDLGVBQWUsRUFDM0IsS0FBSyxDQUFDLGtCQUFrQixFQUN4QixNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQ1QsRUFBRSxFQUNGLFdBQVcsQ0FBQyxlQUFlLEVBQzNCLEtBQUssQ0FBQyxrQkFBa0IsRUFDeEIsTUFBTSxDQUNQLENBQUM7WUFJRixFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXRELElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtnQkFDckIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3BFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7UUFFRCxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQU1NLFlBQVksQ0FBQyxNQUFXO1FBQzdCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFNTSxZQUFZLENBQUMsTUFBVztRQUM3QixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDOztBQXBsQkgsZ0NBcWxCQztBQXBsQnlCLHFCQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsbUJBQVEsR0FBRyxLQUFLLENBQUM7QUFDakIsMEJBQWUsR0FBRyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGaEQsOEdBQTRDO0FBRTVDLGdHQUFnRTtBQUVoRSwwRkFBc0U7QUE2Q3RFLE1BQXNCLE9BRXBCLFNBQVEseUJBQW9CO0lBRjlCOztRQU1TLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUF5QixJQUFJLENBQUM7UUFDbkMsY0FBUyxHQUF5QixJQUFJLENBQUM7UUFDdkMsZ0JBQVcsR0FBeUIsSUFBSSxDQUFDO1FBQ3pDLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZUFBVSxHQUE4QyxFQUFFLENBQUM7UUFFMUQsc0JBQWlCLEdBQW9DLElBQUksQ0FBQztJQTJHcEUsQ0FBQztJQTNGUyxjQUFjLENBQUMsT0FBaUMsRUFBRSxNQUFjO1FBQ3RFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxRQUFRLENBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ1osQ0FBQztJQUNKLENBQUM7SUFFUyxTQUFTLENBQUMsT0FBaUMsRUFBRSxLQUFvQjtRQUN6RSxvQ0FBb0IsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFpQztRQUMzQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQztRQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRVMsYUFBYSxDQUNyQixPQUFpQyxFQUNqQyxLQUEyQixFQUMzQixhQUFxQjtRQUVyQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFZixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sYUFBYSxDQUFDLE9BQWlDO1FBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FDaEIsT0FBTyxFQUNQLElBQUksQ0FBQyxTQUFTLEVBQ2QsT0FBTyxDQUFDLHlCQUF5QixDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVNLGVBQWUsQ0FBQyxPQUFpQztRQUN0RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxhQUFhLENBQ2hCLE9BQU8sRUFDUCxJQUFJLENBQUMsV0FBVyxFQUNoQixPQUFPLENBQUMsMkJBQTJCLENBQ3BDLENBQUM7SUFDSixDQUFDO0lBS1MsZ0JBQWdCLENBQUMsSUFBa0I7O1FBQzNDLFVBQUksQ0FBQyxpQkFBaUIsb0NBQXRCLElBQUksQ0FBQyxpQkFBaUIsR0FBSyxRQUFRO2FBQ2hDLGFBQWEsQ0FBQyxRQUFRLENBQUM7YUFDdkIsVUFBVSxDQUFDLElBQUksQ0FBRSxFQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3hCLENBQUM7O0FBdkhILDBCQXdIQztBQXJIeUIsaUNBQXlCLEdBQUcsU0FBUyxDQUFDO0FBQ3RDLG1DQUEyQixHQUFHLE9BQU8sQ0FBQztBQTZIaEUsTUFBYSxjQUFlLFNBQVEsT0FBOEI7SUFHaEUsWUFBbUIsUUFBd0IsRUFBRSxPQUE4QjtRQUN6RSxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSHBCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFJbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQWZELHdDQWVDO0FBMkNELE1BQWEsWUFBYSxTQUFRLE9BQTRCO0lBUTVELFlBQW1CLFFBQXdCLEVBQUUsT0FBNEI7UUFDdkUsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQVJwQixTQUFJLEdBQXlCLElBQUksQ0FBQztRQUNsQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQWEsR0FBUSxhQUFHLEdBQUUsQ0FBQztRQUMzQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBSXBDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLE9BQU87O1FBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtZQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BEO1FBR0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFFRCxNQUFNLElBQUksR0FBRyxVQUFJLENBQUMsSUFBSSxtQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXJDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRSxDQUFDO0lBS00sUUFBUSxDQUFDLEtBQW1CO1FBQ2pDLE1BQU0sU0FBUyxHQUNiLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFaEUsT0FBTyxDQUNMLElBQUksQ0FBQyxTQUFTO1lBQ2QsS0FBSyxDQUFDLFNBQVM7WUFFZixDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTTtZQUM1QixJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNO1lBQzVCLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUs7WUFDMUIsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSTtZQUN4QixJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxTQUFTO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLFdBQVc7WUFDdEMsSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTTtZQUM1QixJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxZQUFZO1lBQ3hDLFNBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLFVBQVU7WUFDcEMsSUFBSSxDQUFDLGNBQWMsS0FBSyxLQUFLLENBQUMsY0FBYyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUtNLEtBQUssQ0FBQyxLQUFtQjtRQUM5QixPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckMsR0FBSSxJQUFxQjtZQUN6QixHQUFHLGlDQUFpQixFQUFDLElBQUksRUFBRSxLQUFLLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBL0RELG9DQStEQzs7Ozs7Ozs7Ozs7Ozs7O0FDM1NELDhHQUE0QztBQXdDNUMsTUFBYSxJQUFJO0lBU2YsWUFBbUIsUUFBd0IsRUFBRSxPQUFvQjs7UUFDL0QsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNyQyxHQUFHLFNBQVM7WUFDWixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsbUJBQW1CO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNwQyxHQUFHLEtBQUs7WUFDUixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNsQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1lBQzVCLE1BQU0sRUFBRSxTQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTSxtQ0FBSSxJQUFJLENBQUMsa0JBQWtCO1lBQzlDLEtBQUssRUFBRSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsS0FBSztZQUNuQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxjQUFjLENBQUMsU0FBb0I7UUFDekMsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFdkQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFHLEVBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekQsSUFBSSxFQUFFLGFBQUcsRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLFNBQW9CO1FBQ3ZDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBRyxFQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdkUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBS00sTUFBTSxDQUFDLFFBQWE7UUFDekIsTUFBTSxTQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFLTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7QUFsRUgsb0JBbUVDO0FBbEV5Qix1QkFBa0IsR0FBRyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pDdkQsOEVBQTBDO0FBQzFDLDBGQUFrRDtBQUVsRCxNQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztBQUNqQyxNQUFNLFdBQVcsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFJLENBQUMsTUFBTSxFQUFFLFlBQUksQ0FBQyxLQUFLLEVBQUUsWUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFZaEYsU0FBUyxVQUFVLENBQXlCLEtBQVU7SUFDcEQsTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxHQUFHLG1DQUFtQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxNQUFNLENBQUMsR0FBRyxtQ0FBbUIsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsU0FBUzthQUNWO1lBR0QsSUFDRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHO2dCQUNmLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU07Z0JBQ3JCLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUk7Z0JBQ2pCLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFDbkI7Z0JBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsU0FBUzthQUNWO1lBR0QsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDaEQ7WUFHRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM3QztZQUdELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1lBR0QsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDOUM7U0FDRjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQVNELFNBQWdCLEtBQUssQ0FDbkIsS0FBVSxFQUNWLE9BQXlDO0lBR3pDLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNqQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksTUFBa0IsQ0FBQztJQUN2QixPQUNFLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLG9CQUFvQixFQUMxQjtRQUdBLE1BQU0sQ0FBQyxJQUFJLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2hFLENBQUM7UUFFRixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtZQUdqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlDLFNBQVM7YUFDVjtZQUVELElBQUksSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDeEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixTQUFTO2FBQ1Y7WUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6QjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQTlDRCxzQkE4Q0M7Ozs7Ozs7Ozs7Ozs7OztBQzdFRCxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDbEIsNkJBQWlCO0lBQ2pCLDZCQUFpQjtJQUNqQiwyQkFBZTtBQUNqQixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxJQUFZLFFBVVg7QUFWRCxXQUFZLFFBQVE7SUFDbEIsZ0NBQW9CO0lBQ3BCLHVCQUFXO0lBQ1gsa0NBQXNCO0lBQ3RCLHlCQUFhO0lBQ2IsNkJBQWlCO0lBQ2pCLDJCQUFlO0lBQ2Ysc0NBQTBCO0lBQzFCLDZCQUFpQjtJQUNqQix3Q0FBNEI7QUFDOUIsQ0FBQyxFQVZXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBVW5CO0FBWUQsSUFBWSxJQUtYO0FBTEQsV0FBWSxJQUFJO0lBQ2QsbUJBQVc7SUFDWCx1QkFBZTtJQUNmLHlCQUFpQjtJQUNqQixxQkFBYTtBQUNmLENBQUMsRUFMVyxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFLZjs7Ozs7Ozs7Ozs7Ozs7O0FDMUVELHNIQUE0RDtBQUM1RCw4R0FBNEM7QUFDNUMsOEVBVWlCO0FBS2pCLFNBQWdCLE1BQU0sQ0FBQyxHQUFHLE9BQWM7SUFDdEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNuQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0QsYUFBRyxFQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FDeEIsQ0FBQztBQUNKLENBQUM7QUFMRCx3QkFLQztBQUtELFNBQWdCLE1BQU0sQ0FBQyxHQUFHLE9BQWM7SUFDdEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNuQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0QsYUFBRyxFQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQzFCLENBQUM7QUFDSixDQUFDO0FBTEQsd0JBS0M7QUFLRCxTQUFnQixpQkFBaUIsQ0FBQyxDQUFZLEVBQUUsQ0FBWTtJQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUN4QixTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMzQixTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUM1QixDQUFDO0lBRUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUM1RCxDQUFDO0FBUkQsOENBUUM7QUFLRCxTQUFnQixjQUFjLENBQUMsTUFBYztJQUMzQyxPQUFPLFFBQVEsTUFBTSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3BFLENBQUM7QUFGRCx3Q0FFQztBQUtELFNBQWdCLFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDeEQsT0FBTztRQUNMLENBQUMsRUFBRSxnQkFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFFLGdCQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUUsZ0JBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRSxnQkFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDckIsQ0FBQztBQUNKLENBQUM7QUFQRCxnQ0FPQztBQUtELFNBQWdCLFlBQVksQ0FBQyxJQUFVLEVBQUUsUUFBYTtJQUNwRCxNQUFNLElBQUksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwRCxNQUFNLFVBQVUsR0FBRyxhQUFHLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLFdBQVcsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUN6QixTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FDL0QsQ0FBQztJQUVGLE9BQU8sU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFSRCxvQ0FRQztBQUtELFNBQWdCLG1CQUFtQixDQUFDLFFBQW9CO0lBQ3RELE9BQU87UUFDTCxRQUFRLEVBQUUsYUFBRyxFQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMxQyxJQUFJLEVBQUUsYUFBRyxFQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7S0FDMUUsQ0FBQztBQUNKLENBQUM7QUFMRCxrREFLQztBQUtELFNBQWdCLG1CQUFtQixDQUFDLFNBQW9CO0lBQ3RELE9BQU87UUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixNQUFNLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hELENBQUM7QUFDSixDQUFDO0FBUEQsa0RBT0M7QUFLRCxTQUFnQixtQkFBbUIsQ0FBQyxDQUFZLEVBQUUsQ0FBWTtJQUM1RCxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLE1BQU0sR0FBRyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN2QixNQUFNLEdBQUcsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFQRCxrREFPQztBQUtELFNBQWdCLGlCQUFpQixDQUFDLFNBQW9CO0lBQ3BELE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDOUIsTUFBTSxFQUFFLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2RCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxhQUFHLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLGFBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFMRCw4Q0FLQztBQUtELFNBQWdCLE9BQU8sQ0FDckIsT0FBaUMsRUFDakMsR0FBRyxRQUF5QjtJQUU1QixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU87S0FDUjtJQUVELE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQixJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNyQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNwQyxRQUFRLENBQUMsQ0FBQyxDQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBUyxDQUFDLENBQUMsRUFBRyxRQUFRLENBQUMsQ0FBQyxDQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7S0FDRjtJQUNELE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBdEJELDBCQXNCQztBQUtELFNBQWdCLFFBQVEsQ0FBQyxDQUFTLEVBQUUsUUFBb0I7SUFDdEQsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtRQUN2QixPQUFPLGdCQUFRLENBQUMsTUFBTSxDQUFDO0tBQ3hCO0lBRUQsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNyQixPQUFPLGdCQUFRLENBQUMsS0FBSyxDQUFDO0tBQ3ZCO0lBRUQsT0FBTyxnQkFBUSxDQUFDLE1BQU0sQ0FBQztBQUN6QixDQUFDO0FBVkQsNEJBVUM7QUFLRCxTQUFnQixRQUFRLENBQUMsS0FBVSxFQUFFLFFBQW9CO0lBQ3ZELE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRTNFLE9BQU87UUFDTCxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsT0FBTztZQUNuQyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJO1lBQ2hDLENBQUMsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBUSxDQUFDLFVBQVU7U0FDdEM7UUFDRCxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsR0FBRztZQUMvQixDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxNQUFNO1lBQ2xDLENBQUMsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBUSxDQUFDLE1BQU07U0FDbEM7UUFDRCxDQUFDLGdCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEIsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsUUFBUTtZQUNwQyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxLQUFLO1lBQ2pDLENBQUMsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBUSxDQUFDLFdBQVc7U0FDdkM7S0FDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQXJCRCw0QkFxQkM7QUFLRCxTQUFnQixvQkFBb0IsQ0FDbEMsT0FBaUMsRUFDakMsS0FBb0IsRUFDcEIsU0FBb0IsRUFDcEIsTUFBZTtJQUVmLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDO0lBRXJDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsT0FBTztLQUNSO0lBRUQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsSUFBSSxPQUFPLEVBQUU7UUFDWCxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUM1QixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQXBCRCxvREFvQkM7QUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBb0MsQ0FBQztBQU1wRSxTQUFnQixVQUFVLENBQUMsS0FBb0I7SUFDN0MsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUMzQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxLQUFLLFlBQVksZ0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTdCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxXQUFXLENBQUM7UUFDL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDNUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQXpCRCxnQ0F5QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2UEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsNEVBQWdDO0FBQXZCLG9HQUFLO0FBRWQsK0VBQW9FO0FBQTNELG1IQUFZO0FBQUUsbUhBQVk7QUFBRSxtSEFBWTtBQU9qRCw0RUFBZ0M7QUFBdkIsb0dBQUs7QUFFZCx1R0FBa0Q7QUFBekMsK0hBQWM7QUFFdkIsOEZBQTRDO0FBQW5DLHNIQUFXO0FBRXBCLGtGQUFrRTtBQUF6RCx3SEFBYztBQUFFLDBHQUFPO0FBQUUsb0hBQVk7QUFPOUMseUVBQThCO0FBQXJCLGlHQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3IvcGFyc2Vjb2xvci5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0FjdG9yLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0Nhc3Rlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9MaWdodC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9MaWdodGluZ1N5c3RlbS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9TY2VuZU9iamVjdC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9TaGFkZXJQYXNzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL1N1cmZhY2UudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvV2FsbC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9tZXJnZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGlnaHRpbmcyRFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMaWdodGluZzJEXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsIi8qXHJcblxyXG5QYXJzZSBhIHZhbGlkIENTUyBjb2xvciBzdHJpbmcgaW50byBhbiBvYmplY3QgbGlrZTogeyByLCBnLCBiLCBhIH1cclxuUHJvcGVydGllcyB3aWxsIGhhdmUgdGhlIGNvcnJlY3QgaW50ZXJ2YWwgYW5kIHByZWNpc2lvbi5cclxuVmFsaWQgaW5wdXQgZXhhbXBsZXM6XHJcblxyXG5yZWRcclxuI2YwMFxyXG4jZmYwMDAwXHJcbiNmZjAwMDBmZlxyXG5yZ2IoMjU1LCAwLCAwKVxyXG5yZ2IoMTAwJSwgMCUsIDAlKVxyXG5yZ2JhKDI1NSwgMCwgMCwgMSlcclxucmdiYSgxMDAlLCAwJSwgMCUsIDEpXHJcbmhzbCgwLCAxMDAlLCA1MCUpXHJcbmhzbGEoMCwgMTAwJSwgNTAlLCAxKVxyXG5cclxuKi9cclxuY29uc3QgcGFyc2VDb2xvciA9IChmdW5jdGlvbigpIHtcclxuXHRjb25zdCBuYW1lcyA9IHtcclxuXHRcdFwiYWxpY2VibHVlXCI6IFwiZjBmOGZmXCIsXHJcblx0XHRcImFudGlxdWV3aGl0ZVwiOiBcImZhZWJkN1wiLFxyXG5cdFx0XCJhcXVhXCI6IFwiMGZmXCIsXHJcblx0XHRcImFxdWFtYXJpbmVcIjogXCI3ZmZmZDRcIixcclxuXHRcdFwiYXp1cmVcIjogXCJmMGZmZmZcIixcclxuXHRcdFwiYmVpZ2VcIjogXCJmNWY1ZGNcIixcclxuXHRcdFwiYmlzcXVlXCI6IFwiZmZlNGM0XCIsXHJcblx0XHRcImJsYWNrXCI6IFwiMDAwXCIsXHJcblx0XHRcImJsYW5jaGVkYWxtb25kXCI6IFwiZmZlYmNkXCIsXHJcblx0XHRcImJsdWVcIjogXCIwMGZcIixcclxuXHRcdFwiYmx1ZXZpb2xldFwiOiBcIjhhMmJlMlwiLFxyXG5cdFx0XCJicm93blwiOiBcImE1MmEyYVwiLFxyXG5cdFx0XCJidXJseXdvb2RcIjogXCJkZWI4ODdcIixcclxuXHRcdFwiY2FkZXRibHVlXCI6IFwiNWY5ZWEwXCIsXHJcblx0XHRcImNoYXJ0cmV1c2VcIjogXCI3ZmZmMDBcIixcclxuXHRcdFwiY2hvY29sYXRlXCI6IFwiZDI2OTFlXCIsXHJcblx0XHRcImNvcmFsXCI6IFwiZmY3ZjUwXCIsXHJcblx0XHRcImNvcm5mbG93ZXJibHVlXCI6IFwiNjQ5NWVkXCIsXHJcblx0XHRcImNvcm5zaWxrXCI6IFwiZmZmOGRjXCIsXHJcblx0XHRcImNyaW1zb25cIjogXCJkYzE0M2NcIixcclxuXHRcdFwiY3lhblwiOiBcIjBmZlwiLFxyXG5cdFx0XCJkYXJrYmx1ZVwiOiBcIjAwMDA4YlwiLFxyXG5cdFx0XCJkYXJrY3lhblwiOiBcIjAwOGI4YlwiLFxyXG5cdFx0XCJkYXJrZ29sZGVucm9kXCI6IFwiYjg4NjBiXCIsXHJcblx0XHRcImRhcmtncmF5XCI6IFwiYTlhOWE5XCIsXHJcblx0XHRcImRhcmtncmVlblwiOiBcIjAwNjQwMFwiLFxyXG5cdFx0XCJkYXJrZ3JleVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJra2hha2lcIjogXCJiZGI3NmJcIixcclxuXHRcdFwiZGFya21hZ2VudGFcIjogXCI4YjAwOGJcIixcclxuXHRcdFwiZGFya29saXZlZ3JlZW5cIjogXCI1NTZiMmZcIixcclxuXHRcdFwiZGFya29yYW5nZVwiOiBcImZmOGMwMFwiLFxyXG5cdFx0XCJkYXJrb3JjaGlkXCI6IFwiOTkzMmNjXCIsXHJcblx0XHRcImRhcmtyZWRcIjogXCI4YjAwMDBcIixcclxuXHRcdFwiZGFya3NhbG1vblwiOiBcImU5OTY3YVwiLFxyXG5cdFx0XCJkYXJrc2VhZ3JlZW5cIjogXCI4ZmJjOGZcIixcclxuXHRcdFwiZGFya3NsYXRlYmx1ZVwiOiBcIjQ4M2Q4YlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmF5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWdyZXlcIjogXCIyZjRmNGZcIixcclxuXHRcdFwiZGFya3R1cnF1b2lzZVwiOiBcIjAwY2VkMVwiLFxyXG5cdFx0XCJkYXJrdmlvbGV0XCI6IFwiOTQwMGQzXCIsXHJcblx0XHRcImRlZXBwaW5rXCI6IFwiZmYxNDkzXCIsXHJcblx0XHRcImRlZXBza3libHVlXCI6IFwiMDBiZmZmXCIsXHJcblx0XHRcImRpbWdyYXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZGltZ3JleVwiOiBcIjY5Njk2OVwiLFxyXG5cdFx0XCJkb2RnZXJibHVlXCI6IFwiMWU5MGZmXCIsXHJcblx0XHRcImZpcmVicmlja1wiOiBcImIyMjIyMlwiLFxyXG5cdFx0XCJmbG9yYWx3aGl0ZVwiOiBcImZmZmFmMFwiLFxyXG5cdFx0XCJmb3Jlc3RncmVlblwiOiBcIjIyOGIyMlwiLFxyXG5cdFx0XCJmdWNoc2lhXCI6IFwiZjBmXCIsXHJcblx0XHRcImdhaW5zYm9yb1wiOiBcImRjZGNkY1wiLFxyXG5cdFx0XCJnaG9zdHdoaXRlXCI6IFwiZjhmOGZmXCIsXHJcblx0XHRcImdvbGRcIjogXCJmZmQ3MDBcIixcclxuXHRcdFwiZ29sZGVucm9kXCI6IFwiZGFhNTIwXCIsXHJcblx0XHRcImdyYXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiZ3JlZW5cIjogXCIwMDgwMDBcIixcclxuXHRcdFwiZ3JlZW55ZWxsb3dcIjogXCJhZGZmMmZcIixcclxuXHRcdFwiZ3JleVwiOiBcIjgwODA4MFwiLFxyXG5cdFx0XCJob25leWRld1wiOiBcImYwZmZmMFwiLFxyXG5cdFx0XCJob3RwaW5rXCI6IFwiZmY2OWI0XCIsXHJcblx0XHRcImluZGlhbnJlZFwiOiBcImNkNWM1Y1wiLFxyXG5cdFx0XCJpbmRpZ29cIjogXCI0YjAwODJcIixcclxuXHRcdFwiaXZvcnlcIjogXCJmZmZmZjBcIixcclxuXHRcdFwia2hha2lcIjogXCJmMGU2OGNcIixcclxuXHRcdFwibGF2ZW5kZXJcIjogXCJlNmU2ZmFcIixcclxuXHRcdFwibGF2ZW5kZXJibHVzaFwiOiBcImZmZjBmNVwiLFxyXG5cdFx0XCJsYXduZ3JlZW5cIjogXCI3Y2ZjMDBcIixcclxuXHRcdFwibGVtb25jaGlmZm9uXCI6IFwiZmZmYWNkXCIsXHJcblx0XHRcImxpZ2h0Ymx1ZVwiOiBcImFkZDhlNlwiLFxyXG5cdFx0XCJsaWdodGNvcmFsXCI6IFwiZjA4MDgwXCIsXHJcblx0XHRcImxpZ2h0Y3lhblwiOiBcImUwZmZmZlwiLFxyXG5cdFx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBcImZhZmFkMlwiLFxyXG5cdFx0XCJsaWdodGdyYXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRncmVlblwiOiBcIjkwZWU5MFwiLFxyXG5cdFx0XCJsaWdodGdyZXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRwaW5rXCI6IFwiZmZiNmMxXCIsXHJcblx0XHRcImxpZ2h0c2FsbW9uXCI6IFwiZmZhMDdhXCIsXHJcblx0XHRcImxpZ2h0c2VhZ3JlZW5cIjogXCIyMGIyYWFcIixcclxuXHRcdFwibGlnaHRza3libHVlXCI6IFwiODdjZWZhXCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmF5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmV5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c3RlZWxibHVlXCI6IFwiYjBjNGRlXCIsXHJcblx0XHRcImxpZ2h0eWVsbG93XCI6IFwiZmZmZmUwXCIsXHJcblx0XHRcImxpbWVcIjogXCIwZjBcIixcclxuXHRcdFwibGltZWdyZWVuXCI6IFwiMzJjZDMyXCIsXHJcblx0XHRcImxpbmVuXCI6IFwiZmFmMGU2XCIsXHJcblx0XHRcIm1hZ2VudGFcIjogXCJmMGZcIixcclxuXHRcdFwibWFyb29uXCI6IFwiODAwMDAwXCIsXHJcblx0XHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogXCI2NmNkYWFcIixcclxuXHRcdFwibWVkaXVtYmx1ZVwiOiBcIjAwMDBjZFwiLFxyXG5cdFx0XCJtZWRpdW1vcmNoaWRcIjogXCJiYTU1ZDNcIixcclxuXHRcdFwibWVkaXVtcHVycGxlXCI6IFwiOTM3MGRiXCIsXHJcblx0XHRcIm1lZGl1bXNlYWdyZWVuXCI6IFwiM2NiMzcxXCIsXHJcblx0XHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBcIjdiNjhlZVwiLFxyXG5cdFx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBcIjAwZmE5YVwiLFxyXG5cdFx0XCJtZWRpdW10dXJxdW9pc2VcIjogXCI0OGQxY2NcIixcclxuXHRcdFwibWVkaXVtdmlvbGV0cmVkXCI6IFwiYzcxNTg1XCIsXHJcblx0XHRcIm1pZG5pZ2h0Ymx1ZVwiOiBcIjE5MTk3MFwiLFxyXG5cdFx0XCJtaW50Y3JlYW1cIjogXCJmNWZmZmFcIixcclxuXHRcdFwibWlzdHlyb3NlXCI6IFwiZmZlNGUxXCIsXHJcblx0XHRcIm1vY2Nhc2luXCI6IFwiZmZlNGI1XCIsXHJcblx0XHRcIm5hdmFqb3doaXRlXCI6IFwiZmZkZWFkXCIsXHJcblx0XHRcIm5hdnlcIjogXCIwMDAwODBcIixcclxuXHRcdFwib2xkbGFjZVwiOiBcImZkZjVlNlwiLFxyXG5cdFx0XCJvbGl2ZVwiOiBcIjgwODAwMFwiLFxyXG5cdFx0XCJvbGl2ZWRyYWJcIjogXCI2YjhlMjNcIixcclxuXHRcdFwib3JhbmdlXCI6IFwiZmZhNTAwXCIsXHJcblx0XHRcIm9yYW5nZXJlZFwiOiBcImZmNDUwMFwiLFxyXG5cdFx0XCJvcmNoaWRcIjogXCJkYTcwZDZcIixcclxuXHRcdFwicGFsZWdvbGRlbnJvZFwiOiBcImVlZThhYVwiLFxyXG5cdFx0XCJwYWxlZ3JlZW5cIjogXCI5OGZiOThcIixcclxuXHRcdFwicGFsZXR1cnF1b2lzZVwiOiBcImFmZWVlZVwiLFxyXG5cdFx0XCJwYWxldmlvbGV0cmVkXCI6IFwiZGI3MDkzXCIsXHJcblx0XHRcInBhcGF5YXdoaXBcIjogXCJmZmVmZDVcIixcclxuXHRcdFwicGVhY2hwdWZmXCI6IFwiZmZkYWI5XCIsXHJcblx0XHRcInBlcnVcIjogXCJjZDg1M2ZcIixcclxuXHRcdFwicGlua1wiOiBcImZmYzBjYlwiLFxyXG5cdFx0XCJwbHVtXCI6IFwiZGRhMGRkXCIsXHJcblx0XHRcInBvd2RlcmJsdWVcIjogXCJiMGUwZTZcIixcclxuXHRcdFwicHVycGxlXCI6IFwiODAwMDgwXCIsXHJcblx0XHRcInJlYmVjY2FwdXJwbGVcIjogXCI2MzlcIixcclxuXHRcdFwicmVkXCI6IFwiZjAwXCIsXHJcblx0XHRcInJvc3licm93blwiOiBcImJjOGY4ZlwiLFxyXG5cdFx0XCJyb3lhbGJsdWVcIjogXCI0MTY5ZTFcIixcclxuXHRcdFwic2FkZGxlYnJvd25cIjogXCI4YjQ1MTNcIixcclxuXHRcdFwic2FsbW9uXCI6IFwiZmE4MDcyXCIsXHJcblx0XHRcInNhbmR5YnJvd25cIjogXCJmNGE0NjBcIixcclxuXHRcdFwic2VhZ3JlZW5cIjogXCIyZThiNTdcIixcclxuXHRcdFwic2Vhc2hlbGxcIjogXCJmZmY1ZWVcIixcclxuXHRcdFwic2llbm5hXCI6IFwiYTA1MjJkXCIsXHJcblx0XHRcInNpbHZlclwiOiBcImMwYzBjMFwiLFxyXG5cdFx0XCJza3libHVlXCI6IFwiODdjZWViXCIsXHJcblx0XHRcInNsYXRlYmx1ZVwiOiBcIjZhNWFjZFwiLFxyXG5cdFx0XCJzbGF0ZWdyYXlcIjogXCI3MDgwOTBcIixcclxuXHRcdFwic2xhdGVncmV5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNub3dcIjogXCJmZmZhZmFcIixcclxuXHRcdFwic3ByaW5nZ3JlZW5cIjogXCIwMGZmN2ZcIixcclxuXHRcdFwic3RlZWxibHVlXCI6IFwiNDY4MmI0XCIsXHJcblx0XHRcInRhblwiOiBcImQyYjQ4Y1wiLFxyXG5cdFx0XCJ0ZWFsXCI6IFwiMDA4MDgwXCIsXHJcblx0XHRcInRoaXN0bGVcIjogXCJkOGJmZDhcIixcclxuXHRcdFwidG9tYXRvXCI6IFwiZmY2MzQ3XCIsXHJcblx0XHRcInR1cnF1b2lzZVwiOiBcIjQwZTBkMFwiLFxyXG5cdFx0XCJ2aW9sZXRcIjogXCJlZTgyZWVcIixcclxuXHRcdFwid2hlYXRcIjogXCJmNWRlYjNcIixcclxuXHRcdFwid2hpdGVcIjogXCJmZmZcIixcclxuXHRcdFwid2hpdGVzbW9rZVwiOiBcImY1ZjVmNVwiLFxyXG5cdFx0XCJ5ZWxsb3dcIjogXCJmZjBcIixcclxuXHRcdFwieWVsbG93Z3JlZW5cIjogXCI5YWNkMzJcIixcclxuXHRcdFwidHJhbnNwYXJlbnRcIjogXCIwMDAwMDAwMFwiXHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBjbGFtcCA9IChuLCBhLCBiKSA9PiBuIDwgYSA/IGEgOiAobiA+IGIgPyBiIDogbiksXHQvLyBDbGFtcCBuIGluIGludGVydmFsIFthLCBiXVxyXG5cdFx0cm91bmQgPSAobiwgZCkgPT4ge1x0Ly8gUm91bmQgbiB0byBuZWFyZXN0IGludGVnZXIsIG9yIHRvIGQgZGVjaW1hbCBwbGFjZXMgKGlmIGQgaXMgZGVmaW5lZClcclxuXHRcdFx0dmFyIHAgPSBNYXRoLnBvdygxMCwgZCB8fCAwKTtcclxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQobiAqIHApIC8gcDtcclxuXHRcdH0sXHJcblx0XHRoaSA9IG4gPT4gY2xhbXAocGFyc2VJbnQobiwgMTYpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCAyLWRpZ2l0IGhleCB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdGhmID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUsIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0c2kgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRzZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSwgMiksIDAsIDEpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0cGkgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikgLyAxMDAgKiAyNTUpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBwZXJjZW50YWdlIHN0cmluZyB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdHVmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMzYwLCAwLCAxKSxcdC8vIENvbnZlcnQgaHVlIHN0cmluZyB0byBmbG9hdCBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMTAwLCAwLCAxKTtcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHJcblx0Ly8gQ29udmVydCBoc2wgdG8gcmdiLCBhbHBoYSB2YWx1ZSBnZXRzIHBhc3NlZCBzdHJhaWdodCB0aHJvdWdoXHJcblx0Ly8gaCwgcywgbCB2YWx1ZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0Ly8gUmV0dXJucyBhbiBvYmplY3QgbGlrZSB7IHIsIGcsIGIsIGEgfVxyXG5cdC8vIGh0dHA6Ly9heG9uZmx1eC5jb20vaGFuZHktcmdiLXRvLWhzbC1hbmQtcmdiLXRvLWhzdi1jb2xvci1tb2RlbC1jXHJcblx0ZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCwgYSkge1xyXG5cdFx0dmFyIHIsIGcsIGIsXHJcblx0XHRcdGh1ZSA9IGZ1bmN0aW9uKHAsIHEsIHQpIHtcclxuXHRcdFx0XHRpZiAodCA8IDApIHsgdCArPSAxOyB9XHJcblx0XHRcdFx0aWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMSAvIDYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQgfTtcclxuXHRcdFx0XHRpZiAodCA8IDEgLyAyKSB7IHJldHVybiBxOyB9XHJcblx0XHRcdFx0aWYgKHQgPCAyIC8gMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDYgfTtcclxuXHRcdFx0XHRyZXR1cm4gcDtcclxuXHRcdFx0fTtcclxuXHRcdGlmIChzID09IDApIHtcclxuXHRcdFx0ciA9IGcgPSBiID0gbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcyxcclxuXHRcdFx0XHRwID0gMiAqIGwgLSBxO1xyXG5cdFx0XHRyID0gaHVlKHAsIHEsIGggKyAxIC8gMyk7XHJcblx0XHRcdGcgPSBodWUocCwgcSwgaCk7XHJcblx0XHRcdGIgPSBodWUocCwgcSwgaCAtIDEgLyAzKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7IHI6IHJvdW5kKHIgKiAyNTUpLCBnOiByb3VuZChnICogMjU1KSwgYjogcm91bmQoYiAqIDI1NSksIGE6IGEgfTtcclxuXHR9XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGMpIHtcclxuXHRcdHZhciBvID0geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIG0gPSBudWxsO1xyXG5cdFx0aWYgKHR5cGVvZiBjID09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0aWYgKGMgaW4gbmFtZXMpIHsgYyA9IFwiI1wiICsgbmFtZXNbY107IH1cclxuXHRcdFx0aWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XSkoW2EtZjAtOV0pKFthLWYwLTldKSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSArIG1bMV0pLCBnOiBoaShtWzJdICsgbVsyXSksIGI6IGhpKG1bM10gKyBtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSksIGc6IGhpKG1bMl0pLCBiOiBoaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IGhmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYlxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogc2YobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL2hzbFxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/KVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgc2YobVs0XSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0aWYgKGMuciAhPT0gdW5kZWZpbmVkICYmIGMuZyAhPSB1bmRlZmluZWQgJiYgYy5iICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShjLnIpLCBnOiBzaShjLmcpLCBiOiBzaShjLmIpLCBhOiBzZihjLmEgfHwgMSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmIChjLmggIT09IHVuZGVmaW5lZCAmJiBjLnMgIT09IHVuZGVmaW5lZCAmJiBjLmwgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihjLmgpLCBwZihjLnMpLCBwZihjLmwpLCBzZihjLmEgfHwgMSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbztcclxuXHR9O1xyXG59KCkpO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHBhcnNlQ29sb3IgfTtcclxufVxyXG4iLCIvKipcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBSb3VuZCBuIHRvIGQgZGVjaW1hbCBwbGFjZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gcm91bmRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZD0wXSBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHJvdW5kIHRvXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcm91bmRlZCBudW1iZXJcbiAqL1xuY29uc3Qgcm91bmQgPSAobiwgZCA9IDApID0+IHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBkKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAqIHAgKyBOdW1iZXIuRVBTSUxPTikgLyBwO1xufVxuXG4vKipcbiAqIERvIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IGxlcnAgPSAoYSwgYiwgaSkgPT4gYSArIChiIC0gYSkgKiBpO1xuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmNvbnN0IHVubGVycCA9IChhLCBiLCBpKSA9PiAoaSAtIGEpIC8gKGIgLSBhKTtcblxuLyoqXG4gKiBEbyBhIGJpbGluZWFyIGludGVycG9sYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzAxIEJvdHRvbS1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxuICogQHBhcmFtIHtudW1iZXJ9IGl5IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeVxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxuICovXG5jb25zdCBibGVycCA9IChjMDAsIGMxMCwgYzAxLCBjMTEsIGl4LCBpeSkgPT4gbGVycChsZXJwKGMwMCwgYzEwLCBpeCksIGxlcnAoYzAxLCBjMTEsIGl4KSwgaXkpO1xuXG4vKipcbiAqIFJlLW1hcCBhIG51bWJlciBpIGZyb20gcmFuZ2UgYTEuLi5hMiB0byBiMS4uLmIyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxuICogQHBhcmFtIHtudW1iZXJ9IGExXG4gKiBAcGFyYW0ge251bWJlcn0gYTJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxuICogQHBhcmFtIHtudW1iZXJ9IGIyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xuXG4vKipcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzIFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmNvbnN0IHJhZGlhbnMgPSBkZWdyZWVzID0+IChNYXRoLlBJIC8gMTgwKSAqIGRlZ3JlZXM7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKi9cbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggRXhjbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICovXG5jb25zdCByYW5kb21CZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqL1xuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW211PTAuNV0gVGhlIG1lYW4gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICovXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XG4gIH1cbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xufTtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxuICovXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGluZGV4IGZyb20gd1xuICovXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xuICBsZXQgdG90YWwgPSB3LnJlZHVjZSgoYSwgaSkgPT4gYSArIGksIDApLCBuID0gMDtcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcbiAgd2hpbGUgKHRvdGFsID4gcikge1xuICAgIHRvdGFsIC09IHdbbisrXTtcbiAgfVxuICByZXR1cm4gbiAtIDE7XG59O1xuXG4vKipcbiAqIEFuIGludGVycG9sYXRpb24gZnVuY3Rpb25cbiAqIEBjYWxsYmFjayBJbnRlcnBvbGF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gaW50ZXJwb2xhdGVkIHZhbHVlIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEBwYXJhbSB7SW50ZXJwb2xhdGlvbkZ1bmN0aW9ufSBbZj1NYXRoLmxlcnBdIFRoZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRvIHVzZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cbiAqL1xuY29uc3QgbGVycEFycmF5ID0gKGEsIGksIGYgPSBsZXJwKSA9PiB7XG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIGZyYWMocykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbmNvbnN0IGRvdCA9IChhLCBiKSA9PiBhLnJlZHVjZSgobiwgdiwgaSkgPT4gbiArIHYgKiBiW2ldLCAwKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY3RvcmlhbCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcbiAqL1xuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpID0gMjsgaSA8PSBhOyBpKyspIHtcbiAgICByZXN1bHQgKj0gaTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcbiAqL1xuY29uc3QgbnByID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IG5jciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbWJpbmF0aW9ucyhbMSwgMiwgM10sIDIpO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgMl0sXG4gKiAgIFsxLCAzXSxcbiAqICAgWzIsIDNdXG4gKiBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY2hvb3NlIGluIGVhY2ggY29tYmluYXRpb25cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgY29tYmluYXRpb24gYXJyYXlzXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9ucyA9IChhLCByKSA9PiB7XG4gIGlmIChyID09PSAxKSB7XG4gICAgcmV0dXJuIGEubWFwKGl0ZW0gPT4gW2l0ZW1dKTtcbiAgfVxuXG4gIHJldHVybiBhLnJlZHVjZShcbiAgICAoYWNjLCBpdGVtLCBpKSA9PiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5jb21iaW5hdGlvbnMoYS5zbGljZShpICsgMSksIHIgLSAxKS5tYXAoYyA9PiBbaXRlbSwgLi4uY10pLFxuICAgIF0sXG4gICAgW11cbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY2FydGVzaWFuIHByb2R1Y3Qgb2YgYXJyYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjYXJ0ZXNpYW4oWzEsIDIsIDNdLCBbJ2EnLCAnYiddKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIFwiYVwiXSxcbiAqICAgWzEsIFwiYlwiXSxcbiAqICAgWzIsIFwiYVwiXSxcbiAqICAgWzIsIFwiYlwiXSxcbiAqICAgWzMsIFwiYVwiXSxcbiAqICAgWzMsIFwiYlwiXVxuICogXVxuICogYGBgXG4gKi9cbmNvbnN0IGNhcnRlc2lhbiA9ICguLi5hcnIpID0+XG4gIGFyci5yZWR1Y2UoXG4gICAgKGEsIGIpID0+IGEuZmxhdE1hcChjID0+IGIubWFwKGQgPT4gWy4uLmMsIGRdKSksXG4gICAgW1tdXVxuICApO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXG4gKiBAY2FsbGJhY2sgVGltZXNGdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFJldHVybiBhIG5ldyBhcnJheSB3aXRoIGxlbmd0aCBuIGJ5IGNhbGxpbmcgZnVuY3Rpb24gZihpKSBvbiBlYWNoIGVsZW1lbnRcbiAqIEBwYXJhbSB7VGltZXNGdW5jdGlvbn0gZlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTwqPn1cbiAqL1xuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXG4gKi9cbmNvbnN0IHJhbmdlID0gbiA9PiB0aW1lcyhpID0+IGksIG4pO1xuXG4vKipcbiAqIFppcCAyIGFycmF5cyB0b2dldGhlciwgaS5lLiAoWzEsIDIsIDNdLCBbYSwgYiwgY10pID0+IFtbMSwgYV0sIFsyLCBiXSwgWzMsIGNdXVxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtBcnJheTwqPn0gYlxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fVxuICovXG5jb25zdCB6aXAgPSAoYSwgYikgPT4gYS5tYXAoKGssIGkpID0+IFtrLCBiW2ldXSk7XG5cbi8qKlxuICogUmV0dXJuIGFycmF5W2ldIHdpdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHdyYXBwaW5nXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5IHdpdGhvdXQgcmVtb3ZpbmcgaXRcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4geyp9IFRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgcGVlayA9IChhKSA9PiB7XG4gIGlmICghYS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGFbYS5sZW5ndGggLSAxXTtcbn07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4vKipcbiAqIEZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIHVzZSBmb3IgY29uY2F0ZW5hdGluZyBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEEgZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCBmbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChvW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0udG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8ICFvW2tleV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXQob1trZXldLCBjb25jYXRlbmF0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLk9iamVjdC5rZXlzKGZsYXR0ZW5lZCkucmVkdWNlKFxuICAgICAgICAoY2hpbGRBY2MsIGNoaWxkS2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmNoaWxkQWNjLFxuICAgICAgICAgIFtgJHtrZXl9JHtjb25jYXRlbmF0b3J9JHtjaGlsZEtleX1gXTogZmxhdHRlbmVkW2NoaWxkS2V5XSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApLFxuICAgIH07XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogVW5mbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byBjaGVjayBmb3IgaW4gY29uY2F0ZW5hdGVkIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gdW4tZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCB1bmZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIGxldCByZXN1bHQgPSB7fSwgdGVtcCwgc3Vic3RyaW5ncywgcHJvcGVydHksIGk7XG5cbiAgZm9yIChwcm9wZXJ0eSBpbiBvKSB7XG4gICAgc3Vic3RyaW5ncyA9IHByb3BlcnR5LnNwbGl0KGNvbmNhdGVuYXRvcik7XG4gICAgdGVtcCA9IHJlc3VsdDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vic3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmICghKHN1YnN0cmluZ3NbaV0gaW4gdGVtcCkpIHtcbiAgICAgICAgaWYgKGlzRmluaXRlKHN1YnN0cmluZ3NbaSArIDFdKSkge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRlbXAgPSB0ZW1wW3N1YnN0cmluZ3NbaV1dO1xuICAgIH1cbiAgICB0ZW1wW3N1YnN0cmluZ3Nbc3Vic3RyaW5ncy5sZW5ndGggLSAxXV0gPSBvW3Byb3BlcnR5XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEEgc3BsaXQgcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgU3BsaXRQcmVkaWNhdGVcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJyYXkgc2hvdWxkIHNwbGl0IGF0IHRoaXMgaW5kZXhcbiAqL1xuXG4vKipcbiAqIFNwbGl0IGFuIGFycmF5IGludG8gc3ViLWFycmF5cyBiYXNlZCBvbiBhIHByZWRpY2F0ZVxuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyYXlcbiAqIEBwYXJhbSB7U3BsaXRQcmVkaWNhdGV9IHByZWRpY2F0ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheXNcbiAqL1xuY29uc3Qgc3BsaXQgPSAoYXJyYXksIHByZWRpY2F0ZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBbXTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gW3ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goY3VycmVudCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUGx1Y2sga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIHBsdWNrIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGx1Y2tlZCBrZXlzXG4gKi9cbmNvbnN0IHBsdWNrID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9ba2V5XSB9KSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBFeGNsdWRlIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBleGNsdWRlIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwga2V5cyBleGNlcHQgZXhjbHVkZWQga2V5c1xuICovXG5jb25zdCBleGNsdWRlID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhvKS5maWx0ZXIoKFtrZXldKSA9PiAha2V5cy5pbmNsdWRlcyhrZXkpKVxuICApO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZsb2F0RXF1YWxzLFxuICAgIGNsYW1wLFxuICAgIGZyYWMsXG4gICAgcm91bmQsXG4gICAgbGVycCxcbiAgICB1bmxlcnAsXG4gICAgYmxlcnAsXG4gICAgcmVtYXAsXG4gICAgc21vb3Roc3RlcCxcbiAgICByYWRpYW5zLFxuICAgIGRlZ3JlZXMsXG4gICAgcmFuZG9tQmV0d2VlbixcbiAgICByYW5kb21JbnRCZXR3ZWVuLFxuICAgIGNsdFJhbmRvbSxcbiAgICBjbHRSYW5kb21JbnQsXG4gICAgd2VpZ2h0ZWRSYW5kb20sXG4gICAgbGVycEFycmF5LFxuICAgIGRvdCxcbiAgICBmYWN0b3JpYWwsXG4gICAgbnByLFxuICAgIG5jcixcbiAgICBjb21iaW5hdGlvbnMsXG4gICAgY2FydGVzaWFuLFxuICAgIHRpbWVzLFxuICAgIHJhbmdlLFxuICAgIHppcCxcbiAgICBhdCxcbiAgICBwZWVrLFxuICAgIGNodW5rLFxuICAgIHNodWZmbGUsXG4gICAgZmxhdCxcbiAgICB1bmZsYXQsXG4gICAgc3BsaXQsXG4gICAgcGx1Y2ssXG4gICAgZXhjbHVkZSxcbiAgfTtcbn1cbiIsImNvbnN0IHsgdGltZXMsIGNodW5rLCBkb3QgfSA9IHJlcXVpcmUoJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJyk7XG5cbi8qKlxuICogQG92ZXJ2aWV3IEEgc21hbGwgdmVjdG9yIGFuZCBtYXRyaXggbGlicmFyeVxuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIEEgMmQgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSB2ZWNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ8dmVjfSBbeF0gVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIGEgdmVjdG9yIHRvIGNvcHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlY30gQSBuZXcgdmVjdG9yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5WYXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjKDMsIDIpOyAgLy8gKDMsIDIpXG4gKiBsZXQgYiA9IHZlYyg0KTsgICAgIC8vICg0LCA0KVxuICogbGV0IGMgPSB2ZWMoYSk7ICAgICAvLyAoMywgMilcbiAqIGxldCBkID0gdmVjKCk7ICAgICAgLy8gKDAsIDApXG4gKi9cbmNvbnN0IHZlYyA9ICh4LCB5KSA9PiAoIXggJiYgIXkgP1xuICB7IHg6IDAsIHk6IDAgfSA6ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xuICAgIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwIH0gOiAoeSA9PT0gbnVsbCB8fCB5ID09PSB1bmRlZmluZWQgP1xuICAgICAgeyB4OiB4LCB5OiB4IH0gOiB7IHg6IHgsIHk6IHkgfSlcbiAgKVxuKTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gZ2V0IGNvbXBvbmVudHMgZnJvbVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XG4gKi9cbnZlYy5jb21wb25lbnRzID0gYSA9PiBbYS54LCBhLnldO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxuICovXG52ZWMudXggPSAoKSA9PiB2ZWMoMSwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKi9cbnZlYy51eSA9ICgpID0+IHZlYygwLCAxKTtcblxuLyoqXG4gKiBBZGQgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKyBiXG4gKi9cbnZlYy5hZGQgPSAoYSwgYikgPT4gKHsgeDogYS54ICsgYi54LCB5OiBhLnkgKyBiLnkgfSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7dmVjfSBhICogYlxuICovXG52ZWMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIGIsIHk6IGEueSAqIGIgfSk7XG5cbi8qKlxuICogU3VidHJhY3QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgLSBiXG4gKi9cbnZlYy5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLm1hbmhhdHRhbiA9IGEgPT4gTWF0aC5hYnMoYS54KSArIE1hdGguYWJzKGEueSk7XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7dmVjfSBeYVxuICovXG52ZWMubm9yID0gYSA9PiB7XG4gIGxldCBsZW4gPSB2ZWMubGVuKGEpO1xuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiB9IDogdmVjKCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbnZlYy5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnNcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjLnJvdCA9IChhLCByKSA9PiB7XG4gIGxldCBzID0gTWF0aC5zaW4ociksXG4gICAgYyA9IE1hdGguY29zKHIpO1xuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmVjdG9ycyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2ZWN0b3JzIGEgYW5kIGIgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xudmVjLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYy5yYWQgPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLngpO1xuXG4vKipcbiAqIENvcHkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29weVxuICogQHJldHVybiB7dmVjfSBBIGNvcHkgb2YgdmVjdG9yIGFcbiAqL1xudmVjLmNweSA9IGEgPT4gdmVjKGEpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvclxuICogQGNhbGxiYWNrIHZlY3Rvck1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGNvbXBvbmVudCB2YWx1ZVxuICogQHBhcmFtIHsneCcgfCAneSd9IGxhYmVsIFRoZSBjb21wb25lbnQgbGFiZWwgKHggb3IgeSlcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvciBhbmQgYnVpbGQgYSBuZXcgdmVjdG9yIGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY3Rvck1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlY30gVmVjdG9yIGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG52ZWMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xudmVjLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX1gO1xuXG4vKipcbiAqIEEgbWF0cml4XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtIFRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gW209NF0gVGhlIG51bWJlciBvZiByb3dzXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtlbnRyaWVzPVtdXSBNYXRyaXggdmFsdWVzIGluIHJlYWRpbmcgb3JkZXJcbiAqIEByZXR1cm4ge21hdH0gQSBuZXcgbWF0cml4XG4gKi9cbmNvbnN0IG1hdCA9IChtID0gNCwgbiA9IDQsIGVudHJpZXMgPSBbXSkgPT4gKHtcbiAgbSwgbixcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxufSk7XG5cbi8qKlxuICogR2V0IGFuIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XG4gKi9cbm1hdC5pZGVudGl0eSA9IG4gPT4gbWF0KG4sIG4sIEFycmF5KG4gKiBuKS5maWxsKDApLm1hcCgodiwgaSkgPT4gKyhNYXRoLmZsb29yKGkgLyBuKSA9PT0gaSAlIG4pKSk7XG5cbi8qKlxuICogR2V0IGFuIGVudHJ5IGZyb20gYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxuICovXG5tYXQuZ2V0ID0gKGEsIGksIGopID0+IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl07XG5cbi8qKlxuICogU2V0IGFuIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXG4gKi9cbm1hdC5zZXQgPSAoYSwgaSwgaiwgdikgPT4geyBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dID0gdjsgfTtcblxuLyoqXG4gKiBHZXQgYSByb3cgZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSByb3cgb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBSb3cgbSBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5yb3cgPSAoYSwgbSkgPT4ge1xuICBjb25zdCBzID0gKG0gLSAxKSAqIGEubjtcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY29sdW1uIGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQ29sdW1uIG4gZnJvbSBtYXRyaXggYVxuICovXG5tYXQuY29sID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcblxuLyoqXG4gKiBBZGQgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhICsgYlxuICovXG5tYXQuYWRkID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgKyBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSAtIGJcbiAqL1xubWF0LnN1YiA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2IC0gYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBNdWx0aXBseSBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpY2VzIGNhbm5vdCBiZSBtdWx0aXBsaWVkXG4gKi9cbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYS5uICE9PSBiLm0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IHJlc3VsdCA9IG1hdChhLm0sIGIubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYi5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQocmVzdWx0LCBpLCBqLCBkb3QobWF0LnJvdyhhLCBpKSwgbWF0LmNvbChiLCBqKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBTY2FsZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXG4gKi9cbm1hdC5zY2FsZSA9IChhLCBiKSA9PiBtYXQubWFwKGEsIHYgPT4gdiAqIGIpO1xuXG4vKipcbiAqIFRyYW5zcG9zZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcbiAqIEByZXR1cm4ge21hdH0gQSB0cmFuc3Bvc2VkIG1hdHJpeFxuICovXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IFRoZSAoaSwgaikgbWlub3Igb2YgbWF0cml4IGEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZW50cmllcyA9IFtdO1xuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xuICAgIGlmIChpaSA9PT0gaSkgeyBjb250aW51ZTsgfVxuICAgIGZvciAobGV0IGpqID0gMTsgamogPD0gYS5uOyBqaisrKSB7XG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cbiAgICAgIGVudHJpZXMucHVzaChtYXQuZ2V0KGEsIGlpLCBqaikpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0KGEubSAtIDEsIGEubiAtIDEsIGVudHJpZXMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHJldHVybiB7bnVtYmVyfGJvb2xlYW59IHxhfCBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0LmRldCA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChhLm0gPT09IDEpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xuICB9XG4gIGlmIChhLm0gPT09IDIpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xuICB9XG4gIGxldCB0b3RhbCA9IDAsIHNpZ24gPSAxO1xuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgIHRvdGFsICs9IHNpZ24gKiBhLmVudHJpZXNbaiAtIDFdICogbWF0LmRldChtYXQubWlub3IoYSwgMSwgaikpO1xuICAgIHNpZ24gKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gXmEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5ub3IgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgYWRqdWdhdGUgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggZnJvbSB3aGljaCB0byBnZXQgdGhlIGFkanVnYXRlXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXG4gKi9cbm1hdC5hZGogPSBhID0+IHtcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xuICByZXR1cm4gbWF0LnRyYW5zKGNvZmFjdG9ycyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhXi0xIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaGFzIG5vIGludmVyc2VcbiAqL1xubWF0LmludiA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuIG1hdC5zY2FsZShtYXQuYWRqKGEpLCAxIC8gZCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBtYXRyaWNlcyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtYXRyaWNlcyBhIGFuZCBiIGFyZSBpZGVudGljYWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG5tYXQuZXEgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0LnN0cihhKSA9PT0gbWF0LnN0cihiKTtcblxuLyoqXG4gKiBDb3B5IGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXG4gKi9cbm1hdC5jcHkgPSBhID0+IG1hdChhLm0sIGEubiwgWy4uLmEuZW50cmllc10pO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgZW50cnkgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgZW50cnkgaW5kZXhcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBlbnRyeVxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXggYW5kIGJ1aWxkIGEgbmV3IG1hdHJpeCBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXRyaXhNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gTWF0cml4IGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG5tYXQubWFwID0gKGEsIGYpID0+IG1hdChhLm0sIGEubiwgYS5lbnRyaWVzLm1hcChmKSk7XG5cbi8qKlxuICogQ29udmVydCBhIG1hdHJpeCBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbnM9J1xcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcbicpID0+IGNodW5rKGEuZW50cmllcywgYS5uKS5tYXAociA9PiByLmpvaW4obXMpKS5qb2luKG5zKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMsIG1hdCB9O1xufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgU3ByaXRlQ2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBXYWxsUmVjZWl2ZXIsIFdhbGxSZWNlaXZlck9wdGlvbnMgfSBmcm9tICcuL1N1cmZhY2UnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbnR5cGUgQWN0b3JTaGFkb3dPcHRpb25zID0ge1xuICAvKipcbiAgICogSGVpZ2h0IG9mIHRoZSBhcmVhIGF0IHRoZSBib3R0b20gb2YgdGhlIGFjdG9yIHRoYXQgY2FzdHMgYSBzaGFkb3csXG4gICAqIGRlZmF1bHRzIHRvIGEgdGhpcmQgb2YgdGhlIGFjdG9yJ3MgaGVpZ2h0XG4gICAqL1xuICBmb290cHJpbnRIZWlnaHQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBY3RvclNoYWRvdyA9XG4gIHwgJ25vbmUnXG4gIHwgJ3Nwcml0ZSdcbiAgfCAnY2lyY2xlJ1xuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdub25lJyB9KVxuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdzcHJpdGUnIH0gJiBQYXJ0aWFsPFxuICAgICAgICBPbWl0PFNwcml0ZUNhc3Rlck9wdGlvbnMsICdwb3NpdGlvbicgfCAnc2l6ZSc+XG4gICAgICA+KVxuICB8IChBY3RvclNoYWRvd09wdGlvbnMgJiB7IHR5cGU6ICdjaXJjbGUnIH0gJiBQYXJ0aWFsPFxuICAgICAgICBPbWl0PENpcmNsZUNhc3Rlck9wdGlvbnMsICdwb3NpdGlvbicgfCAnc2l6ZSc+XG4gICAgICA+KTtcblxuZXhwb3J0IHR5cGUgQWN0b3JPcHRpb25zID0gT21pdDxXYWxsUmVjZWl2ZXJPcHRpb25zLCAncmVjZWl2ZUxpZ2h0Jz4gJiB7XG4gIC8qKlxuICAgKiBUaGUgc2hhZG93IGNhc3QgYnkgdGhpcyBhY3RvciwgdGhlIGRlZmF1bHQgaXMgYSBzdHJldGNoZWQgc2lsaG91ZXR0ZSBvZlxuICAgKiB0aGUgYWN0b3IncyBpbWFnZVxuICAgKi9cbiAgc2hhZG93PzogQWN0b3JTaGFkb3c7XG59O1xuXG4vKipcbiAqIEEgbW92aW5nIG9iamVjdCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBjYXN0cyBhIHNoYWRvd1xuICovXG5leHBvcnQgY2xhc3MgQWN0b3Ige1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0ZPT1RQUklOVF9TQ0FMRSA9IDEgLyAzO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NIQURPV19MRU5HVEhfU0NBTEUgPSAxLjMzO1xuXG4gIHB1YmxpYyByZWFkb25seSBzdXJmYWNlOiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSBjYXN0ZXI6IFNwcml0ZUNhc3RlciB8IENpcmNsZUNhc3RlciB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgZm9vdHByaW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogQWN0b3JPcHRpb25zKSB7XG4gICAgY29uc3QgeyBzaGFkb3cgPSAnc3ByaXRlJywgLi4uc3VyZmFjZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB7IHR5cGUsIGZvb3RwcmludEhlaWdodCwgLi4uY2FzdGVyT3B0aW9ucyB9ID0gKFxuICAgICAgdHlwZW9mIHNoYWRvdyA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IHNoYWRvdyB9IDogc2hhZG93XG4gICAgKSBhcyBFeGNsdWRlPEFjdG9yU2hhZG93LCBzdHJpbmc+O1xuXG4gICAgdGhpcy5mb290cHJpbnRIZWlnaHQgPVxuICAgICAgZm9vdHByaW50SGVpZ2h0ID8/IG9wdGlvbnMuc2l6ZS55ICogQWN0b3IuREVGQVVMVF9GT09UUFJJTlRfU0NBTEU7XG5cbiAgICB0aGlzLnN1cmZhY2UgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgbWVyZ2VhYmxlOiBmYWxzZSxcbiAgICAgIHByb2plY3RTaGFkb3dzOiBmYWxzZSxcbiAgICAgIC4uLnN1cmZhY2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290cHJpbnQgPSB0aGlzLmZvb3RwcmludChvcHRpb25zLnBvc2l0aW9uLCBvcHRpb25zLnNpemUpO1xuICAgIGlmICh0eXBlID09PSAnc3ByaXRlJykge1xuICAgICAgY29uc3Qgc2hhZG93TGVuZ3RoID0gb3B0aW9ucy5zaXplLnkgKiBBY3Rvci5ERUZBVUxUX1NIQURPV19MRU5HVEhfU0NBTEU7XG5cbiAgICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkU3ByaXRlQ2FzdGVyKHtcbiAgICAgICAgaW1hZ2U6IG9wdGlvbnMuaW1hZ2UsXG4gICAgICAgIG1pblNoYWRvd0xlbmd0aDogc2hhZG93TGVuZ3RoLFxuICAgICAgICBtYXhTaGFkb3dMZW5ndGg6IHNoYWRvd0xlbmd0aCxcbiAgICAgICAgLi4uY2FzdGVyT3B0aW9ucyxcbiAgICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLmNhc3RlciA9IGxpZ2h0aW5nLmFkZENpcmNsZUNhc3Rlcih7XG4gICAgICAgIC4uLmNhc3Rlck9wdGlvbnMsXG4gICAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIExvb2sgZm9yIHNoYWRvd3MgZnJvbSBmYXIgZW5vdWdoIGF3YXkgdG8gYXZvaWQgb3VyIG93biBzaGFkb3dcbiAgICBpZiAodGhpcy5jYXN0ZXIgJiYgb3B0aW9ucy5zaGFkb3dCaWFzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3VyZmFjZS5zaGFkb3dCaWFzID0gdGhpcy5jYXN0ZXJCaWFzKHRoaXMuY2FzdGVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkaXN0YW5jZSB0aGF0IGEgY2FzdGVyJ3Mgc2hhZG93IHJlYWNoZXMgYmFjayB0b3dhcmRzIHRoZSBsaWdodFxuICAgKi9cbiAgcHJpdmF0ZSBjYXN0ZXJCaWFzKGNhc3RlcjogU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyKTogbnVtYmVyIHtcbiAgICBpZiAoY2FzdGVyIGluc3RhbmNlb2YgU3ByaXRlQ2FzdGVyKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBjYXN0ZXIubWF4U2hhZG93TGVuZ3RoID8/IGNhc3Rlci5taW5TaGFkb3dMZW5ndGg7XG5cbiAgICAgIHJldHVybiBsZW5ndGggKiAoMSAtIGNhc3Rlci5vZmZzZXQueSkgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heChjYXN0ZXIuc2l6ZS54LCBjYXN0ZXIuc2l6ZS55KSAvIDIgKyAxO1xuICB9XG5cbiAgcHJpdmF0ZSBmb290cHJpbnQocG9zaXRpb246IHZlYywgc2l6ZTogdmVjKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgc2l6ZS55IC0gdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgICAgc2l6ZTogdmVjKHNpemUueCwgdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGFjdG9yIHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMpIHtcbiAgICB0aGlzLnN1cmZhY2UubW92ZVRvKHBvc2l0aW9uKTtcbiAgICB0aGlzLmNhc3Rlcj8ubW92ZVRvKHRoaXMuZm9vdHByaW50KHBvc2l0aW9uLCB0aGlzLnN1cmZhY2Uuc2l6ZSkucG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIGFjdG9yIGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnN1cmZhY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5jYXN0ZXI/LnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgU2NlbmVPYmplY3QsIFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgTGlnaHRpbmdJbWFnZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYm91bmRpbmdSZWN0YW5nbGUsIHNpbGhvdWV0dGUgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbkNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgc2hhZG93cyBpbmNsdWRlIHRoZSByZWN0YW5ndWxhciByZWdpb24gb2YgdGhpcyBjYXN0ZXI/XG4gICAqL1xuICBpbmNsdWRlUmVnaW9uU2hhZG93PzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBwb2x5Z29uYWwgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgUmVnaW9uQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8UmVnaW9uQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgaW5jbHVkZVJlZ2lvblNoYWRvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFJlZ2lvbkNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgY2FuIGJlIG1lcmdlZCB3aXRoIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgY2FuTWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lcmdlYWJsZSAmJlxuICAgICAgb3RoZXIubWVyZ2VhYmxlICYmXG4gICAgICB0aGlzLmluY2x1ZGVSZWdpb25TaGFkb3cgPT09IG90aGVyLmluY2x1ZGVSZWdpb25TaGFkb3dcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBjYXN0ZXIgdGhhdCBjb3ZlcnMgdGhpcyBjYXN0ZXIgYW5kIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgbWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IFJlZ2lvbkNhc3RlciB7XG4gICAgcmV0dXJuIG5ldyBSZWdpb25DYXN0ZXIodGhpcy5saWdodGluZywge1xuICAgICAgLi4uKHRoaXMgYXMgUmVnaW9uQ2FzdGVyKSxcbiAgICAgIC4uLmJvdW5kaW5nUmVjdGFuZ2xlKHRoaXMsIG90aGVyKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTcHJpdGVDYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogVGhlIGltYWdlIHVzZWQgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpdCBzaG91bGQgYmUgYmxhY2sgd2l0aCBhbiBhbHBoYVxuICAgKiBjaGFubmVsXG4gICAqL1xuICBzaGFkb3c/OiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogSWYgYHNoYWRvd2AgaXNuJ3Qgc2V0LCB3ZSdsbCB1c2UgdGhlIHNpbGhvdWV0dGUgb2YgdGhpcyBpbWFnZSBpbnN0ZWFkXG4gICAqL1xuICBpbWFnZT86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgc2hhZG93IGJlZ2lucywgYXMgYSBmcmFjdGlvbiBvZiB0aGUgc2l6ZSBvZiB0aGlzIGNhc3Rlciwgd2hlcmVcbiAgICogKDAsIDApIGlzIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kICgxLCAxKSBpcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lclxuICAgKi9cbiAgYW5jaG9yPzogdmVjO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgdGhlIHNoYWRvdyBmcm9tIHRoZSBhbmNob3IsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNoYWRvdyBzaXplXG4gICAqL1xuICBvZmZzZXQ/OiB2ZWM7XG5cbiAgLyoqXG4gICAqIFNoYWRvdyBsZW5ndGggd2hlbiB0aGUgbGlnaHQgaXMgYXQgdGhlIGNlbnRlciBvZiB0aGlzIGNhc3RlclxuICAgKi9cbiAgbWluU2hhZG93TGVuZ3RoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaGFkb3cgbGVuZ3RoIHdoZW4gdGhpcyBjYXN0ZXIgaXMgYXQgdGhlIGVkZ2Ugb2YgdGhlIGxpZ2h0J3MgcmFkaXVzLCBvclxuICAgKiBudWxsIHRvIHVzZSB0aGUgbGlnaHQncyByYWRpdXNcbiAgICovXG4gIG1heFNoYWRvd0xlbmd0aD86IG51bWJlciB8IG51bGw7XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYSBzaGFkb3cgYnkgcm90YXRpbmcgYW5kIHN0cmV0Y2hpbmcgYW4gaW1hZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIFNwcml0ZUNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PFNwcml0ZUNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIHNoYWRvdzogTGlnaHRpbmdJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGFuY2hvcjogdmVjID0gdmVjKDAuNSwgMC45KTtcbiAgcHVibGljIG9mZnNldDogdmVjID0gdmVjKDAuNSwgMC45KTtcbiAgcHVibGljIG1pblNoYWRvd0xlbmd0aDogbnVtYmVyID0gNjQ7XG4gIHB1YmxpYyBtYXhTaGFkb3dMZW5ndGg6IG51bWJlciB8IG51bGwgPSA2NDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBTcHJpdGVDYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW1hZ2UgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpZiBpdCBoYXMgb25lXG4gICAqL1xuICBwdWJsaWMgZ2V0U2hhZG93KCk6IExpZ2h0aW5nSW1hZ2UgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3cgPz8gKHRoaXMuaW1hZ2UgJiYgc2lsaG91ZXR0ZSh0aGlzLmltYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2lyY2xlQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBzaGFkb3cgaXMgY2VudGVyZWQsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNpemUgb2YgdGhpcyBjYXN0ZXIsXG4gICAqIHdoZXJlICgwLCAwKSBpcyB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCAoMSwgMSkgaXMgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXJcbiAgICovXG4gIGFuY2hvcj86IHZlYztcblxuICAvKipcbiAgICogRGlzdGFuY2UgZnJvbSB0aGUgYW5jaG9yIHRvIHRoZSBzaGFkb3cgd2hlbiB0aGUgbGlnaHQgaXMgYXQgdGhlIGNlbnRlciBvZlxuICAgKiB0aGlzIGNhc3RlclxuICAgKi9cbiAgbWluU2hhZG93RGlzdGFuY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGZyb20gdGhlIGFuY2hvciB0byB0aGUgc2hhZG93IHdoZW4gdGhpcyBjYXN0ZXIgaXMgYXQgdGhlIGVkZ2Ugb2ZcbiAgICogdGhlIGxpZ2h0J3MgcmFkaXVzLCBvciBudWxsIHRvIHVzZSB0aGUgbGlnaHQncyByYWRpdXNcbiAgICovXG4gIG1heFNoYWRvd0Rpc3RhbmNlPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogT3BhY2l0eSBvZiB0aGUgc2hhZG93XG4gICAqL1xuICBhbHBoYT86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhbiBlbGxpcHRpY2FsIHNoYWRvd1xuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8Q2lyY2xlQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgYW5jaG9yOiB2ZWMgPSB2ZWMoMC41LCAwLjkpO1xuICBwdWJsaWMgbWluU2hhZG93RGlzdGFuY2U6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBtYXhTaGFkb3dEaXN0YW5jZTogbnVtYmVyIHwgbnVsbCA9IDIwO1xuICBwdWJsaWMgYWxwaGE6IG51bWJlciA9IDE7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogQ2lyY2xlQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTaGFkb3dDYXN0ZXIgPSBSZWdpb25DYXN0ZXIgfCBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXI7XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBhdCwgc21vb3Roc3RlcCwgdW5sZXJwIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IENpcmNsZUNhc3RlciwgUmVnaW9uQ2FzdGVyLCBTcHJpdGVDYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIExpbmUsXG4gIFBvbHlnb25WZXJ0aWNlcyxcbiAgUmVjdGFuZ2xlLFxuICBTZWN0b3IyZCxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBjb2xvdXJUb1N0cmluZyxcbiAgbGluZUlzRmFjaW5nLFxuICBwb2x5Z29uLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxuICByZWN0YW5nbGVUb0ludGVydmFsLFxuICByZWN0YW5nbGVWZXJ0aWNlcyxcbiAgc2VjdG9yMmQsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcblxuY29uc3QgSEFMRl9QSSA9IE1hdGguUEkgLyAyO1xuXG5leHBvcnQgdHlwZSBMaWdodE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXb3JsZCBwb3NpdGlvbiBvZiB0aGlzIGxpZ2h0XG4gICAqL1xuICBwb3NpdGlvbjogdmVjO1xuXG4gIC8qKlxuICAgKiBSYWRpdXMgb2YgdGhpcyBsaWdodCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZnVsbHktbGl0IGFyZWEgYXQgdGhlIGNlbnRlciBvZiB0aGlzIGxpZ2h0LCBhcyBhIGZyYWN0aW9uXG4gICAqIG9mIHRoZSByYWRpdXNcbiAgICovXG4gIGNvcmVSYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJyaWdodG5lc3Mgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhpcyBsaWdodCBhYm92ZSB0aGUgZ3JvdW5kLCB0aGlzIGlzIHVzZWQgZm9yIHNoYWRpbmcgbm9ybWFsIG1hcHNcbiAgICogYW5kIHNwZWN1bGFyIG1hcHNcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHRoaXMgbGlnaHQgY2FzdCBzaGFkb3dzP1xuICAgKi9cbiAgY2FzdFNoYWRvd3M/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9SQURJVVMgPSAxMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJ3doaXRlJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT1JFX1JBRElVUyA9IDAuMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX0NPUkVfUkFESVVTID0gMC45OTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9JTlRFTlNJVFkgPSAxO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFSUdIVCA9IDQ4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTSEFET1dfQlVGRkVSID0gMjA7XG5cbiAgcHJpdmF0ZSBsaWdodGluZ1N5c3RlbTogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWM7XG4gIHByaXZhdGUgX3JhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9jb2xvdXI6IHN0cmluZztcbiAgcHVibGljIGNvbG91ck9iamVjdDogQ29sb3VyO1xuICBwcml2YXRlIF9jb3JlUmFkaXVzOiBudW1iZXI7XG4gIHByaXZhdGUgX2ludGVuc2l0eTogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIHB1YmxpYyBjYXN0U2hhZG93czogYm9vbGVhbjtcblxuICBwdWJsaWMgbGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGxpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIC8qKlxuICAgKiBXaGl0ZSB3aGVyZSBsaWdodCByZWFjaGVzIHRoZSBncm91bmQsIGFuZCBibGFjayBpbiB0aGUgc2hhZG93cyBvZiByZWdpb25cbiAgICogY2FzdGVyc1xuICAgKi9cbiAgcHVibGljIHJlZ2lvblNoYWRvd0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgcmVnaW9uU2hhZG93Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIC8qKlxuICAgKiBXaGl0ZSB3aGVyZSBsaWdodCByZWFjaGVzIHRoZSBncm91bmQsIGFuZCBibGFjayBpbiB0aGUgc2hhZG93cyBvZiBzcHJpdGVcbiAgICogYW5kIGNpcmNsZSBjYXN0ZXJzXG4gICAqL1xuICBwdWJsaWMgb2JqZWN0U2hhZG93Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBvYmplY3RTaGFkb3dDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHJpdmF0ZSBkaXJ0eSA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nU3lzdGVtOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogTGlnaHRPcHRpb25zKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbSA9IGxpZ2h0aW5nU3lzdGVtO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5fcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgPz8gTGlnaHQuREVGQVVMVF9SQURJVVM7XG4gICAgdGhpcy5fY29sb3VyID0gb3B0aW9ucy5jb2xvdXIgPz8gTGlnaHQuREVGQVVMVF9DT0xPVVI7XG4gICAgdGhpcy5fY29yZVJhZGl1cyA9IG9wdGlvbnMuY29yZVJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX0NPUkVfUkFESVVTO1xuICAgIHRoaXMuX2ludGVuc2l0eSA9IG9wdGlvbnMuaW50ZW5zaXR5ID8/IExpZ2h0LkRFRkFVTFRfSU5URU5TSVRZO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgPz8gTGlnaHQuREVGQVVMVF9IRUlHSFQ7XG4gICAgdGhpcy5jYXN0U2hhZG93cyA9IG9wdGlvbnMuY2FzdFNoYWRvd3MgPz8gdHJ1ZTtcbiAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodGhpcy5fY29sb3VyKTtcblxuICAgIHRoaXMubGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuICAgIHRoaXMubGlnaHRDb250ZXh0ID0gdGhpcy5saWdodENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMucmVnaW9uU2hhZG93Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5yZWdpb25TaGFkb3dDb250ZXh0ID0gdGhpcy5yZWdpb25TaGFkb3dDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLm9iamVjdFNoYWRvd0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMub2JqZWN0U2hhZG93Q29udGV4dCA9IHRoaXMub2JqZWN0U2hhZG93Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgLyoqXG4gICAqIEJvdW5kaW5nIGJveCBmb3IgdGhpcyBsaWdodCwgaW5jbHVkaW5nIHRoZSBvZmZzZXQgd2FsbCBsaWdodG1hcHNcbiAgICovXG4gIHB1YmxpYyBnZXQgYm91bmRzKCk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3Qgd2FsbExpZ2h0aW5nWU9mZnNldCA9IHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fcmFkaXVzICsgTWF0aC5taW4od2FsbExpZ2h0aW5nWU9mZnNldCwgMClcbiAgICAgICksXG4gICAgICBzaXplOiB2ZWMoXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIsXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIgKyBNYXRoLmFicyh3YWxsTGlnaHRpbmdZT2Zmc2V0KVxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCByYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3JhZGl1cykge1xuICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICB9XG5cbiAgcHVibGljIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29sb3VyKSB7XG4gICAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih2YWx1ZSk7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvcmVSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVSYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvcmVSYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29yZVJhZGl1cykge1xuICAgICAgdGhpcy5fY29yZVJhZGl1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVuc2l0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2ludGVuc2l0eSkge1xuICAgICAgdGhpcy5faW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGxpZ2h0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweShwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNvbWUgb2YgdGhlIG9wdGlvbnMgZm9yIHRoaXMgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxMaWdodE9wdGlvbnM+KSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9zaXRpb24sXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvdXIsXG4gICAgICBjb3JlUmFkaXVzLFxuICAgICAgaW50ZW5zaXR5LFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2FzdFNoYWRvd3MsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweShwb3NpdGlvbiA/PyB0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyA/PyB0aGlzLnJhZGl1cztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91ciA/PyB0aGlzLmNvbG91cjtcbiAgICB0aGlzLmNvcmVSYWRpdXMgPSBjb3JlUmFkaXVzID8/IHRoaXMuY29yZVJhZGl1cztcbiAgICB0aGlzLmludGVuc2l0eSA9IGludGVuc2l0eSA/PyB0aGlzLmludGVuc2l0eTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCA/PyB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmNhc3RTaGFkb3dzID0gY2FzdFNoYWRvd3MgPz8gdGhpcy5jYXN0U2hhZG93cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBsaWdodCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5yZW1vdmUodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShcbiAgICByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXSxcbiAgICBzcHJpdGVDYXN0ZXJzOiBTcHJpdGVDYXN0ZXJbXSxcbiAgICBjaXJjbGVDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXVxuICApIHtcbiAgICAvLyBJZiB0aGUgbGlnaHQgc2V0dGluZ3MgaGF2ZSBjaGFuZ2VkLCB3ZSBuZWVkIHRvIHJlZHJhdyB0aGUgYmFzZSBsaWdodG1hcFxuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLnByZXBhcmVMaWdodE1hcCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRTaGFkb3dDb250ZXh0KHRoaXMucmVnaW9uU2hhZG93Q29udGV4dCk7XG4gICAgdGhpcy5yZXNldFNoYWRvd0NvbnRleHQodGhpcy5vYmplY3RTaGFkb3dDb250ZXh0KTtcblxuICAgIGlmICh0aGlzLmNhc3RTaGFkb3dzKSB7XG4gICAgICBjb25zdCBsaWdodFJlY3RhbmdsZSA9IHRoaXMuYm91bmRzO1xuXG4gICAgICB0aGlzLnByZXBhcmVSZWdpb25TaGFkb3dzKGxpZ2h0UmVjdGFuZ2xlLCByZWdpb25DYXN0ZXJzKTtcbiAgICAgIHRoaXMucHJlcGFyZVNwcml0ZVNoYWRvd3MobGlnaHRSZWN0YW5nbGUsIHNwcml0ZUNhc3RlcnMpO1xuICAgICAgdGhpcy5wcmVwYXJlQ2lyY2xlU2hhZG93cyhsaWdodFJlY3RhbmdsZSwgY2lyY2xlQ2FzdGVycyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNoYWRvdyBjYW52YXMgbWF0Y2hlcyB0aGlzIGxpZ2h0J3Mgc2l6ZSwgYW5kIGZpbGwgaXQgd2l0aCB3aGl0ZVxuICAgKiBzbyB0aGF0IG5vdGhpbmcgaXMgaW4gc2hhZG93XG4gICAqL1xuICBwcml2YXRlIHJlc2V0U2hhZG93Q29udGV4dChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb25zdCBzaXplID0gTWF0aC5mbG9vcih0aGlzLl9yYWRpdXMgKiAyKTtcbiAgICBpZiAoY29udGV4dC5jYW52YXMud2lkdGggIT09IHNpemUpIHtcbiAgICAgIGNvbnRleHQuY2FudmFzLndpZHRoID0gY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9XG4gICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlTGlnaHRNYXAoKSB7XG4gICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGggPSB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDI7XG5cbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsUmVjdChcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgdGhpcy5saWdodENhbnZhcy53aWR0aCxcbiAgICAgIHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0XG4gICAgKTtcblxuICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5saWdodENvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMgKiBNYXRoLm1pbih0aGlzLl9jb3JlUmFkaXVzLCBMaWdodC5NQVhfQ09SRV9SQURJVVMpLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzXG4gICAgKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXG4gICAgICAwLFxuICAgICAgY29sb3VyVG9TdHJpbmcoe1xuICAgICAgICAuLi50aGlzLmNvbG91ck9iamVjdCxcbiAgICAgICAgcjogdGhpcy5jb2xvdXJPYmplY3QuciAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgICAgZzogdGhpcy5jb2xvdXJPYmplY3QuZyAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgICAgYjogdGhpcy5jb2xvdXJPYmplY3QuYiAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ2JsYWNrJyk7XG5cbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5hcmMoXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAwLFxuICAgICAgTWF0aC5QSSAqIDJcbiAgICApO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGwoKTtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBwcmVwYXJlUmVnaW9uU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHJlZ2lvbkNhc3RlcnM6IFJlZ2lvbkNhc3RlcltdXG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLnJlZ2lvblNoYWRvd0NvbnRleHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9yYWRpdXNcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2YgcmVnaW9uQ2FzdGVycykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgY2FzdGVyKSkge1xuICAgICAgICBwb2x5Z29uKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgLi4udGhpcy5wcmVwYXJlUmVnaW9uU2hhZG93KGNhc3RlciwgY2FzdGVyLmluY2x1ZGVSZWdpb25TaGFkb3cpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU3ByaXRlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHNwcml0ZUNhc3RlcnM6IFNwcml0ZUNhc3RlcltdXG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3MoY29udGV4dCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5fcmFkaXVzLCB0aGlzLl9yYWRpdXMpO1xuXG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2Ygc3ByaXRlQ2FzdGVycykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgY2FzdGVyKSkge1xuICAgICAgICBjb25zdCBzaGFkb3dTcHJpdGUgPSBjYXN0ZXIuZ2V0U2hhZG93KCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHNoYWRvdyBzcHJpdGUgaXMgbWlzc2luZyBmb3IgdGhpcyBjYXN0ZXIgdGhlbiBpdCBkb2Vzbid0XG4gICAgICAgIC8vIGNhc3QgYSBzaGFkb3dcbiAgICAgICAgaWYgKCFzaGFkb3dTcHJpdGUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYWRvd09yaWdpbiA9IHZlYy5hZGQoXG4gICAgICAgICAgY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgIHZlYyhjYXN0ZXIuc2l6ZS54ICogY2FzdGVyLmFuY2hvci54LCBjYXN0ZXIuc2l6ZS55ICogY2FzdGVyLmFuY2hvci55KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dMZW5ndGggPSBzbW9vdGhzdGVwKFxuICAgICAgICAgIGNhc3Rlci5taW5TaGFkb3dMZW5ndGgsXG4gICAgICAgICAgY2FzdGVyLm1heFNoYWRvd0xlbmd0aCA/PyB0aGlzLnJhZGl1cyxcbiAgICAgICAgICB1bmxlcnAoMCwgdGhpcy5yYWRpdXMsIHZlYy5sZW4odmVjLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RWRnZSA9IHZlYy5tdWwoXG4gICAgICAgICAgdmVjLm5vcih2ZWMuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIHNoYWRvd0xlbmd0aFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dFZGdlTGVuZ3RoID0gdmVjLmxlbihzaGFkb3dFZGdlKTtcbiAgICAgICAgY29uc3Qgc2hhZG93QW5nbGUgPSB2ZWMucmFkKHNoYWRvd0VkZ2UpICsgSEFMRl9QSTtcblxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnggLSB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnkgLSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUoc2hhZG93QW5nbGUpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBzaGFkb3dTcHJpdGUsXG4gICAgICAgICAgLWNhc3Rlci5zaXplLnggKiBjYXN0ZXIub2Zmc2V0LngsXG4gICAgICAgICAgLXNoYWRvd0VkZ2VMZW5ndGggKiBjYXN0ZXIub2Zmc2V0LnksXG4gICAgICAgICAgY2FzdGVyLnNpemUueCxcbiAgICAgICAgICBzaGFkb3dFZGdlTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlQ2lyY2xlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGNpcmNsZUNhc3RlcnM6IENpcmNsZUNhc3RlcltdXG4gICkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLm9iamVjdFNoYWRvd0NvbnRleHQ7XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcblxuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIGNpcmNsZUNhc3RlcnMpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlcikpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93T3JpZ2luID0gdmVjLmFkZChcbiAgICAgICAgICBjYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgdmVjKGNhc3Rlci5zaXplLnggKiBjYXN0ZXIuYW5jaG9yLngsIGNhc3Rlci5zaXplLnkgKiBjYXN0ZXIuYW5jaG9yLnkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0Rpc3RhbmNlID0gc21vb3Roc3RlcChcbiAgICAgICAgICBjYXN0ZXIubWluU2hhZG93RGlzdGFuY2UsXG4gICAgICAgICAgY2FzdGVyLm1heFNoYWRvd0Rpc3RhbmNlID8/IHRoaXMucmFkaXVzLFxuICAgICAgICAgIHVubGVycCgwLCB0aGlzLnJhZGl1cywgdmVjLmxlbih2ZWMuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dQb3NpdGlvbiA9IHZlYy5tdWwoXG4gICAgICAgICAgdmVjLm5vcih2ZWMuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIHNoYWRvd0Rpc3RhbmNlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd1NpemUgPSB2ZWMubXVsKGNhc3Rlci5zaXplLCAwLjUpO1xuXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gY2FzdGVyLmFscGhhO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueCAtIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueSAtIHRoaXMucG9zaXRpb24ueVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmVsbGlwc2UoXG4gICAgICAgICAgc2hhZG93UG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dQb3NpdGlvbi55LFxuICAgICAgICAgIHNoYWRvd1NpemUueCxcbiAgICAgICAgICBzaGFkb3dTaXplLnksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIE1hdGguUEkgKiAyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVJlZ2lvblNoYWRvdyhcbiAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBpbmNsdWRlQ2FzdGVyUmVnaW9uOiBib29sZWFuID0gZmFsc2VcbiAgKTogUG9seWdvblZlcnRpY2VzIHtcbiAgICBjb25zdCBsaWdodFBvc2l0aW9uID0gdmVjLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICBjb25zdCBsaWdodFJhZGl1cyA9IHRoaXMuX3JhZGl1cztcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlKTtcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcyA9IHJlY3RhbmdsZVZlcnRpY2VzKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93RWRnZXM6IExpbmVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBhdChzaGFkb3dDYXN0ZXJWZXJ0aWNlcywgaSAtIDEpO1xuICAgICAgY29uc3QgY3VycmVudCA9IHNoYWRvd0Nhc3RlclZlcnRpY2VzW2ldO1xuXG4gICAgICBpZiAoIWxpbmVJc0ZhY2luZyh7IHN0YXJ0OiBwcmV2aW91cywgZW5kOiBjdXJyZW50IH0sIHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSB2ZWMuc3ViKHByZXZpb3VzLCBsaWdodFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgdmVydGV4MiA9IHZlYy5zdWIoY3VycmVudCwgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIHNoYWRvd0VkZ2VzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHByZXZpb3VzLFxuICAgICAgICAgICAgZW5kOiB2ZWMuYWRkKFxuICAgICAgICAgICAgICBwcmV2aW91cyxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDEpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogY3VycmVudCxcbiAgICAgICAgICAgIGVuZDogdmVjLmFkZChcbiAgICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoYWRvd1BvbHlnb246IFBvbHlnb25WZXJ0aWNlcyA9IFtdO1xuICAgIHN3aXRjaCAoc2VjdG9yMmQodGhpcy5wb3NpdGlvbiwgc2hhZG93Q2FzdGVySW50ZXJ2YWwpKSB7XG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcExlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICB2ZWMoXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi54ICsgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUueCxcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1sxXS5lbmQueCwgc2hhZG93RWRnZXNbMl0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uZW5kXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1sxXS5lbmQueCwgc2hhZG93RWRnZXNbMl0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkluc2lkZTpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b21MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzNdLmVuZC54LCBzaGFkb3dFZGdlc1swXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHZlYyhcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi55ICsgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUueVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbM10uZW5kLngsIHNoYWRvd0VkZ2VzWzBdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbTpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbVJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHZlYy5hZGQoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZG93UG9seWdvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VDb2xvciB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3InO1xuaW1wb3J0IHsgZmxvYXRFcXVhbHMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgQWN0b3IsIEFjdG9yT3B0aW9ucyB9IGZyb20gJy4vQWN0b3InO1xuaW1wb3J0IHtcbiAgQ2lyY2xlQ2FzdGVyLFxuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBSZWdpb25DYXN0ZXIsXG4gIFJlZ2lvbkNhc3Rlck9wdGlvbnMsXG4gIFNwcml0ZUNhc3RlcixcbiAgU3ByaXRlQ2FzdGVyT3B0aW9ucyxcbn0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHsgTGlnaHQsIExpZ2h0T3B0aW9ucyB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuL21lcmdlJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0IH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5pbXBvcnQgeyBTaGFkZXJQYXNzLCBTaGFkZXJTdXJmYWNlIH0gZnJvbSAnLi9TaGFkZXJQYXNzJztcbmltcG9ydCB7XG4gIEdyb3VuZFJlY2VpdmVyLFxuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIFN1cmZhY2UsXG4gIFdhbGxSZWNlaXZlcixcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9TdXJmYWNlJztcbmltcG9ydCB7IENvbG91ciwgTGlnaHRpbmdDYW1lcmEgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIGxlcnBDb2xvdXIsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCB7IFdhbGwsIFdhbGxPcHRpb25zIH0gZnJvbSAnLi9XYWxsJztcblxuZXhwb3J0IHR5cGUgTGlnaHRpbmdTeXN0ZW1PcHRpb25zID0ge1xuICAvKipcbiAgICogU2hvdWxkIGltYWdlIHNtb290aGluZyBiZSBlbmFibGVkP1xuICAgKlxuICAgKiBTZXQgdGhpcyB0byBmYWxzZSBmb3IgcGl4ZWwgYXJ0IHN0eWxlXG4gICAqL1xuICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzb2Z0IHNoYWRvd3MgYmUgZW5hYmxlZD9cbiAgICpcbiAgICogVGhpcyB3aWxsIG9ubHkgYXBwbHkgaWYgc29mdFNoYWRvd3NBbW91bnQgaXMgPiAwXG4gICAqL1xuICBzb2Z0U2hhZG93c0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiBzb2Z0IHNoYWRvd3MgdG8gYXBwbHlcbiAgICpcbiAgICogU2V0IHRoaXMgdG8gMCB0byBkaXNhYmxlIHNvZnQgc2hhZG93c1xuICAgKi9cbiAgc29mdFNoYWRvd3NBbW91bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIG5vcm1hbCBtYXBzIGFuZCBzcGVjdWxhciBtYXBzIGJlIHVzZWQ/XG4gICAqL1xuICBzdXJmYWNlTWFwc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN0cmVuZ3RoIG9mIGhpZ2hsaWdodHMgZnJvbSBub3JtYWwgbWFwc1xuICAgKi9cbiAgc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogU3RyZW5ndGggb2Ygc2hhZGluZyBmcm9tIG5vcm1hbCBtYXBzXG4gICAqL1xuICBzaGFkZXJTaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdHJlbmd0aCBvZiBzcGVjdWxhciBoaWdobGlnaHRzXG4gICAqL1xuICBzaGFkZXJTcGVjdWxhclN0cmVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNpemUgb2Ygc3BlY3VsYXIgaGlnaGxpZ2h0cywgbGFyZ2VyIG51bWJlcnMgbWFrZSBzbWFsbGVyIGhpZ2hsaWdodHNcbiAgICovXG4gIHNoYWRlclNoaW5pbmVzczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHRoZSBjYW1lcmEgaXMgdGlsdGVkIGF3YXkgZnJvbSBsb29raW5nIHN0cmFpZ2h0IGRvd24sIHRoaXMgbW92ZXNcbiAgICogc3BlY3VsYXIgaGlnaGxpZ2h0cyB0b3dhcmRzIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblxuICAgKi9cbiAgc2hhZGVyVmlld1RpbHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUXVhbnRpemUgc2hhZGluZyBpbnRvIGJhbmRzIG9mIHRoaXMgc2l6ZSwgc2V0IHRoaXMgdG8gMCBmb3Igc21vb3RoIHNoYWRpbmdcbiAgICovXG4gIHNoYWRlckJhbmRpbmc6IG51bWJlcjtcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodENvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodCB3aGVuIGZhY2luZyBhd2F5IGZyb20gdGhlIGxpZ2h0XG4gICAqL1xuICBhbWJpZW50TGlnaHRTaGFkb3dDb2xvdXI6IHN0cmluZztcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHQgd2hlbiBmYWNpbmcgdG93YXJkcyB0aGUgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gb2YgYW1iaWVudCBsaWdodCBpbiByYWRpYW5zXG4gICAqL1xuICBhbWJpZW50TGlnaHREaXJlY3Rpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVmVydGljYWwgb2Zmc2V0IGZvciB3YWxsIGxpZ2h0aW5nXG4gICAqL1xuICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGFib3ZlIGJvdHRvbSBlZGdlIG9mIHdhbGwgc2hhZG93IHJlY2VpdmVycyBiZWZvcmUgbGlnaHQgaXNcbiAgICogdG90YWxseSBjdXQgb2ZmXG4gICAqL1xuICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgZmFyIHNwcml0ZSBhbmQgY2lyY2xlIHNoYWRvd3MgY2xpbWIgd2FsbHMsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxlbmd0aFxuICAgKiBvZiB0aGUgc2hhZG93IHRoYXQgcmVhY2hlcyB0aGUgd2FsbFxuICAgKi9cbiAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0aW5nU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9PUFRJT05TOiBMaWdodGluZ1N5c3RlbU9wdGlvbnMgPSB7XG4gICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0cnVlLFxuICAgIHNvZnRTaGFkb3dzRW5hYmxlZDogZmFsc2UsXG4gICAgc29mdFNoYWRvd3NBbW91bnQ6IDIsXG4gICAgc3VyZmFjZU1hcHNFbmFibGVkOiB0cnVlLFxuICAgIHNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoOiAwLjUsXG4gICAgc2hhZGVyU2hhZG93U3RyZW5ndGg6IDAuNSxcbiAgICBzaGFkZXJTcGVjdWxhclN0cmVuZ3RoOiAxLFxuICAgIHNoYWRlclNoaW5pbmVzczogMTYsXG4gICAgc2hhZGVyVmlld1RpbHQ6IDAuNSxcbiAgICBzaGFkZXJCYW5kaW5nOiAwLjEsXG4gICAgYW1iaWVudExpZ2h0Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiAwLFxuICAgIHdhbGxMaWdodGluZ1lPZmZzZXQ6IC0zMCxcbiAgICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogMjAsXG4gICAgd2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogMC43NSxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyBjcmVhdGVDb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY29tcGFyZVN1cmZhY2VzKGE6IFN1cmZhY2U8YW55PiwgYjogU3VyZmFjZTxhbnk+KTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS56SW5kZXggLSBiLnpJbmRleCB8fCBhLnBvc2l0aW9uLnkgKyBhLnNpemUueSAtIChiLnBvc2l0aW9uLnkgKyBiLnNpemUueSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9wdGlvbnM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucztcblxuICBwdWJsaWMgbGlnaHRzOiBMaWdodFtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBtb3N0IHJlY2VudGx5IHJlbmRlcmVkIHNjcmVlblxuICAgKi9cbiAgcHVibGljIHNjcmVlbjogdmVjID0gdmVjKCk7XG5cbiAgcHJpdmF0ZSBncm91bmRSZWNlaXZlcnM6IEdyb3VuZFJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSB3YWxsUmVjZWl2ZXJzOiBXYWxsUmVjZWl2ZXJbXSA9IFtdO1xuICBwcml2YXRlIHJlZ2lvbkNhc3RlcnM6IFJlZ2lvbkNhc3RlcltdID0gW107XG4gIHByaXZhdGUgc3ByaXRlQ2FzdGVyczogU3ByaXRlQ2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBjaXJjbGVDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgbGlnaHRNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgbGlnaHRNYXBDYW52YXMgPSB0aGlzLmxpZ2h0TWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzcGVjdWxhckxpZ2h0TWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNwZWN1bGFyTGlnaHRNYXBDYW52YXMgPSB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNjZW5lTm9ybWFsTWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHNjZW5lTm9ybWFsTWFwQ2FudmFzID0gdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc2NlbmVTcGVjdWxhck1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzY2VuZVNwZWN1bGFyTWFwQ2FudmFzID0gdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzaGFkZXJQYXNzOiBTaGFkZXJQYXNzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3BlY3VsYXJWaXNpYmxlID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYXJ0aWFsPExpZ2h0aW5nU3lzdGVtT3B0aW9ucz4pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBMaWdodGluZ1N5c3RlbS5ERUZBVUxUX09QVElPTlMsXG4gICAgICBvcHRpb25zID8/IHt9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gYXJlYSBvZiBncm91bmQgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZEdyb3VuZChvcHRpb25zOiBHcm91bmRSZWNlaXZlck9wdGlvbnMpOiBHcm91bmRSZWNlaXZlciB7XG4gICAgY29uc3QgZ3JvdW5kID0gbmV3IEdyb3VuZFJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLnB1c2goZ3JvdW5kKTtcblxuICAgIHJldHVybiBncm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgc29saWQgd2FsbCwgbWFkZSBmcm9tIGEgbGl0IGZyb250IGZhY2UsIGFuIHVubGl0IHRvcCwgYW5kIGEgZm9vdHByaW50XG4gICAqIHRoYXQgY2FzdHMgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZFdhbGwob3B0aW9uczogV2FsbE9wdGlvbnMpOiBXYWxsIHtcbiAgICByZXR1cm4gbmV3IFdhbGwodGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbW92aW5nIG9iamVjdCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBjYXN0cyBhIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZEFjdG9yKG9wdGlvbnM6IEFjdG9yT3B0aW9ucyk6IEFjdG9yIHtcbiAgICByZXR1cm4gbmV3IEFjdG9yKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpZ2h0XG4gICAqL1xuICBwdWJsaWMgYWRkTGlnaHQob3B0aW9uczogTGlnaHRPcHRpb25zKTogTGlnaHQge1xuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IExpZ2h0KHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMubGlnaHRzLnB1c2gobGlnaHQpO1xuXG4gICAgcmV0dXJuIGxpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSBvciBzcHJpdGUgdGhhdCByZWNlaXZlcyB3YWxsIHNoYWRvd3NcbiAgICpcbiAgICogVGhpcyBpcyB3aGF0IGBhZGRXYWxsKClgIGFuZCBgYWRkQWN0b3IoKWAgdXNlIHRvIGNyZWF0ZSB0aGVpciBzdXJmYWNlc1xuICAgKi9cbiAgcHVibGljIGFkZFdhbGxSZWNlaXZlcihvcHRpb25zOiBXYWxsUmVjZWl2ZXJPcHRpb25zKTogV2FsbFJlY2VpdmVyIHtcbiAgICBjb25zdCB3YWxsID0gbmV3IFdhbGxSZWNlaXZlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMucHVzaCh3YWxsKTtcblxuICAgIHJldHVybiB3YWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIHBvbHlnb25hbCBzaGFkb3dzXG4gICAqL1xuICBwdWJsaWMgYWRkUmVnaW9uQ2FzdGVyKG9wdGlvbnM6IFJlZ2lvbkNhc3Rlck9wdGlvbnMpOiBSZWdpb25DYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBSZWdpb25DYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYSByb3RhdGVkIGFuZCBzdHJldGNoZWQgaW1hZ2UgYXMgYSBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRTcHJpdGVDYXN0ZXIob3B0aW9uczogU3ByaXRlQ2FzdGVyT3B0aW9ucyk6IFNwcml0ZUNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IFNwcml0ZUNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnNwcml0ZUNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhbiBlbGxpcHRpY2FsIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZENpcmNsZUNhc3RlcihvcHRpb25zOiBDaXJjbGVDYXN0ZXJPcHRpb25zKTogQ2lyY2xlQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgQ2lyY2xlQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2lyY2xlQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBvYmplY3Qgb3IgbGlnaHQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKG9iamVjdDogU2NlbmVPYmplY3Q8YW55PiB8IExpZ2h0KSB7XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIExpZ2h0KSB7XG4gICAgICB0aGlzLmxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PiBsaWdodCAhPT0gb2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycyA9IHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzID0gdGhpcy53YWxsUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gdGhpcy5yZWdpb25DYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5zcHJpdGVDYXN0ZXJzID0gdGhpcy5zcHJpdGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5jaXJjbGVDYXN0ZXJzID0gdGhpcy5jaXJjbGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2Ugd2FsbCByZWNlaXZlcnMgYW5kIHJlZ2lvbiBjYXN0ZXJzIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXJcbiAgICogYW5kIHBlcmZlY3RseSBjb25uZWN0ZWQgb24gb25lIHNpZGUsIHNvIHRoYXQgdGhlcmUgYXJlIGZld2VyIHRvIHByb2Nlc3NcbiAgICpcbiAgICogTWVyZ2VkIG9iamVjdHMgYXJlIHJlbW92ZWQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtIGFuZCBjYW4ndCBiZSBtb3ZlZFxuICAgKiBhZnRlcndhcmRzLCBzbyB0aGlzIGlzIGludGVuZGVkIGZvciBsZXZlbCBnZW9tZXRyeS4gU2V0IGBtZXJnZWFibGVgIHRvXG4gICAqIGZhbHNlIG9uIGFuIG9iamVjdCB0byBleGNsdWRlIGl0XG4gICAqXG4gICAqIGBvbk1lcmdlYCBpcyBjYWxsZWQgZWFjaCB0aW1lIDIgb2JqZWN0cyBhcmUgcmVwbGFjZWQgd2l0aCBhIHNpbmdsZSBvYmplY3QuXG4gICAqIElmIHRoZSBvYmplY3RzIHdlcmUgZHVwbGljYXRlcywgdGhlIG1lcmdlZCBvYmplY3QgaXMgdGhlIGZpcnN0IG9iamVjdFxuICAgKi9cbiAgcHVibGljIG9wdGltaXNlKFxuICAgIG9uTWVyZ2U/OiAoXG4gICAgICBtZXJnZWQ6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGE6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGI6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlclxuICAgICkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSBtZXJnZTxXYWxsUmVjZWl2ZXI+KHRoaXMud2FsbFJlY2VpdmVycywgb25NZXJnZSk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gbWVyZ2U8UmVnaW9uQ2FzdGVyPih0aGlzLnJlZ2lvbkNhc3RlcnMsIG9uTWVyZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hhZGVyIHBhc3MsIGlmIGl0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwcml2YXRlIGdldFNoYWRlclBhc3MoKTogU2hhZGVyUGFzcyB8IG51bGwge1xuICAgIHRoaXMuc2hhZGVyUGFzcyA/Pz0gbmV3IFNoYWRlclBhc3MoKTtcblxuICAgIHJldHVybiB0aGlzLnNoYWRlclBhc3MuYXZhaWxhYmxlID8gdGhpcy5zaGFkZXJQYXNzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzY3JlZW4tc2l6ZWQgY2FudmFzIG1hdGNoZXMgdGhlIHNjcmVlbiBzaXplIGFuZCBjbGVhciBpdFxuICAgKi9cbiAgcHJpdmF0ZSByZXNldENvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gdGhpcy5zY3JlZW4ueCB8fCBjYW52YXMuaGVpZ2h0ICE9PSB0aGlzLnNjcmVlbi55KSB7XG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLnNjcmVlbi54O1xuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuc2NyZWVuLnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIGxpdCBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKlxuICAgKiBJZiBgZHJhd1NjZW5lYCBpcyBwcm92aWRlZCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIHRvIGRyYXcgdGhlIHNjZW5lIHdpdGhcbiAgICogdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZCwgb3RoZXJ3aXNlIHdlJ2xsIGRyYXcgYWxsIG9mIHRoZSBzdXJmYWNlc1xuICAgKiB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBjYW1lcmE6IExpZ2h0aW5nQ2FtZXJhLFxuICAgIGRyYXdTY2VuZT86IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWRcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gICAgaWYgKGRyYXdTY2VuZSkge1xuICAgICAgZHJhd1NjZW5lKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdTdXJmYWNlcyhjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLnByZXBhcmUoY2FtZXJhLCB2ZWMoY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCkpO1xuICAgIHRoaXMuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGFsbCBvZiB0aGUgc3VyZmFjZXMgdGhhdCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIGRyYXdTdXJmYWNlcyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnNvcnRTdXJmYWNlcygpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC5kcmF3KGNvbnRleHQpKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZHJhdyhjb250ZXh0KSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRTdXJmYWNlcygpIHtcbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycy5zb3J0KExpZ2h0aW5nU3lzdGVtLmNvbXBhcmVTdXJmYWNlcyk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLnNvcnQoTGlnaHRpbmdTeXN0ZW0uY29tcGFyZVN1cmZhY2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBsaWdodG1hcHMgZm9yIHJlbmRlcmluZ1xuICAgKlxuICAgKiBJZiBXZWJHTCBpc24ndCBhdmFpbGFibGUgdGhlbiBsaWdodG1hcHMgYXJlIGxlZnQgYXMgdGhleSBhcmUsIHNvIHRoZSBzY2VuZVxuICAgKiBrZWVwcyBpdHMgbGFzdCBsaWdodGluZyB3aGVuIHRoZSBjb250ZXh0IGlzIGxvc3QgYW5kIHRoZW4gcmVzdG9yZWRcbiAgICovXG4gIHB1YmxpYyBwcmVwYXJlKGNhbWVyYTogTGlnaHRpbmdDYW1lcmEsIHNjcmVlbjogdmVjKSB7XG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XG4gICAgdGhpcy5zb3J0U3VyZmFjZXMoKTtcblxuICAgIGNvbnN0IHNoYWRlclBhc3MgPSB0aGlzLmdldFNoYWRlclBhc3MoKTtcbiAgICBpZiAoIXNoYWRlclBhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmFSZWN0YW5nbGUgPSBpbnRlcnZhbFRvUmVjdGFuZ2xlKGNhbWVyYS5ib3VuZHMpO1xuICAgIGNvbnN0IHN1cmZhY2VzID0gWy4uLnRoaXMuZ3JvdW5kUmVjZWl2ZXJzLCAuLi50aGlzLndhbGxSZWNlaXZlcnNdLmZpbHRlcihcbiAgICAgIHN1cmZhY2UgPT4gcmVjdGFuZ2xlc0ludGVyc2VjdChzdXJmYWNlLCBjYW1lcmFSZWN0YW5nbGUpXG4gICAgKTtcblxuICAgIGNvbnN0IHsgc3VyZmFjZU1hcHNFbmFibGVkIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgaGFzTm9ybWFsTWFwcyA9XG4gICAgICBzdXJmYWNlTWFwc0VuYWJsZWQgJiZcbiAgICAgIHN1cmZhY2VzLnNvbWUoXG4gICAgICAgIHN1cmZhY2UgPT4gc3VyZmFjZS5ub3JtYWxNYXAgfHwgc3VyZmFjZS5jdXN0b21EcmF3Lm5vcm1hbE1hcFxuICAgICAgKTtcbiAgICBjb25zdCBoYXNTcGVjdWxhck1hcHMgPVxuICAgICAgc3VyZmFjZU1hcHNFbmFibGVkICYmXG4gICAgICBzdXJmYWNlcy5zb21lKFxuICAgICAgICBzdXJmYWNlID0+IHN1cmZhY2Uuc3BlY3VsYXJNYXAgfHwgc3VyZmFjZS5jdXN0b21EcmF3LnNwZWN1bGFyTWFwXG4gICAgICApO1xuXG4gICAgaWYgKGhhc05vcm1hbE1hcHMpIHtcbiAgICAgIHRoaXMuZHJhd1NjZW5lTm9ybWFsTWFwKGNhbWVyYSwgc3VyZmFjZXMpO1xuICAgIH1cbiAgICBpZiAoaGFzU3BlY3VsYXJNYXBzKSB7XG4gICAgICB0aGlzLmRyYXdTY2VuZVNwZWN1bGFyTWFwKGNhbWVyYSwgc3VyZmFjZXMpO1xuICAgIH1cblxuICAgIC8vIExpZ2h0cyBvdXRzaWRlIHRoZSBjYW1lcmEgYm91bmRzIGNhbid0IGFmZmVjdCB0aGUgdmlzaWJsZSBzY2VuZVxuICAgIGNvbnN0IHZpc2libGVMaWdodHMgPSB0aGlzLmxpZ2h0cy5maWx0ZXIobGlnaHQgPT5cbiAgICAgIHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHQuYm91bmRzLCBjYW1lcmFSZWN0YW5nbGUpXG4gICAgKTtcblxuICAgIHZpc2libGVMaWdodHMuZm9yRWFjaChsaWdodCA9PlxuICAgICAgbGlnaHQucHJlcGFyZSh0aGlzLnJlZ2lvbkNhc3RlcnMsIHRoaXMuc3ByaXRlQ2FzdGVycywgdGhpcy5jaXJjbGVDYXN0ZXJzKVxuICAgICk7XG5cbiAgICBzaGFkZXJQYXNzLnJlbmRlcih7XG4gICAgICBjYW1lcmEsXG4gICAgICBzY3JlZW4sXG4gICAgICBsaWdodHM6IHZpc2libGVMaWdodHMsXG4gICAgICBzdXJmYWNlczogdGhpcy5jYWxjdWxhdGVBbWJpZW50TGlnaHRzKHN1cmZhY2VzKSxcbiAgICAgIG5vcm1hbE1hcDogaGFzTm9ybWFsTWFwcyA/IHRoaXMuc2NlbmVOb3JtYWxNYXBDYW52YXMgOiBudWxsLFxuICAgICAgc3BlY3VsYXJNYXA6IGhhc1NwZWN1bGFyTWFwcyA/IHRoaXMuc2NlbmVTcGVjdWxhck1hcENhbnZhcyA6IG51bGwsXG4gICAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IHRoaXMub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQsXG4gICAgICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiB0aGlzLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldCxcbiAgICAgIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiB0aGlzLm9wdGlvbnMud2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2UsXG4gICAgICB3YWxsU2hhZG93TGVuZ3RoRmFjdG9yOiB0aGlzLm9wdGlvbnMud2FsbFNoYWRvd0xlbmd0aEZhY3RvcixcbiAgICAgIGhpZ2hsaWdodFN0cmVuZ3RoOiB0aGlzLm9wdGlvbnMuc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGgsXG4gICAgICBzaGFkb3dTdHJlbmd0aDogdGhpcy5vcHRpb25zLnNoYWRlclNoYWRvd1N0cmVuZ3RoLFxuICAgICAgc3BlY3VsYXJTdHJlbmd0aDogdGhpcy5vcHRpb25zLnNoYWRlclNwZWN1bGFyU3RyZW5ndGgsXG4gICAgICBzaGluaW5lc3M6IHRoaXMub3B0aW9ucy5zaGFkZXJTaGluaW5lc3MsXG4gICAgICB2aWV3VGlsdDogdGhpcy5vcHRpb25zLnNoYWRlclZpZXdUaWx0LFxuICAgICAgYmFuZGluZzogdGhpcy5vcHRpb25zLnNoYWRlckJhbmRpbmcsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLmxpZ2h0TWFwQ29udGV4dCk7XG4gICAgdGhpcy5saWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHNoYWRlclBhc3MuY2FudmFzLCAwLCAwKTtcblxuICAgIHRoaXMuc3BlY3VsYXJWaXNpYmxlID0gaGFzU3BlY3VsYXJNYXBzO1xuICAgIGlmIChoYXNTcGVjdWxhck1hcHMpIHtcbiAgICAgIHNoYWRlclBhc3Muc2hvd1NwZWN1bGFyKHNjcmVlbik7XG5cbiAgICAgIC8vIEhpZ2hsaWdodHMgY2FuIG9ubHkgYXBwZWFyIG9uIHRoZSBzdXJmYWNlcyBpbiB0aGUgbGlnaHQgbWFwXG4gICAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0KTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuc2F2ZSgpO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2Uoc2hhZGVyUGFzcy5jYW52YXMsIDAsIDApO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgY2FudmFzIHNob3dpbmcgd2hpY2ggc3VyZmFjZSBpcyBhdCBlYWNoIHBpeGVsLCBmb3IgZGVidWdnaW5nXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGRyYXduIHN0cmFpZ2h0IGF3YXksIGJlY2F1c2UgdGhlIGNhbnZhcyBpcyByZXVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXRTdXJmYWNlTWFwQ2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICB0aGlzLnNoYWRlclBhc3M/LnNob3dTdXJmYWNlcyh0aGlzLnNjcmVlbik7XG5cbiAgICByZXR1cm4gdGhpcy5zaGFkZXJQYXNzPy5jYW52YXMgPz8gdGhpcy5saWdodE1hcENhbnZhcztcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBhbWJpZW50IGxpZ2h0IG9uIGVhY2ggc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBbWJpZW50TGlnaHRzKHN1cmZhY2VzOiBTdXJmYWNlPGFueT5bXSk6IFNoYWRlclN1cmZhY2VbXSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdmVjLnJvdCh2ZWMoMSwgMCksIHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHREaXJlY3Rpb24pO1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IHBhcnNlQ29sb3IodGhpcy5vcHRpb25zLmFtYmllbnRMaWdodENvbG91cik7XG4gICAgY29uc3Qgc2hhZG93ID0gcGFyc2VDb2xvcih0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyKTtcbiAgICBjb25zdCBoaWdobGlnaHQgPSBwYXJzZUNvbG9yKHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXIpO1xuXG4gICAgcmV0dXJuIHN1cmZhY2VzLm1hcChzdXJmYWNlID0+ICh7XG4gICAgICBzdXJmYWNlLFxuICAgICAgYW1iaWVudExpZ2h0OlxuICAgICAgICBzdXJmYWNlIGluc3RhbmNlb2YgV2FsbFJlY2VpdmVyXG4gICAgICAgICAgPyB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICAgICAgICAgICAgc3VyZmFjZS5zdXJmYWNlTm9ybWFsLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICAgIGFtYmllbnRMaWdodCxcbiAgICAgICAgICAgICAgc2hhZG93LFxuICAgICAgICAgICAgICBoaWdobGlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGFtYmllbnRMaWdodCxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3R1YWwgY29sb3VyIG9mIGFtYmllbnQgbGlnaHQgYmFzZWQgb24gdGhlIHN1cmZhY2Ugbm9ybWFsXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICBzdXJmYWNlTm9ybWFsOiB2ZWMsXG4gICAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiB2ZWMsXG4gICAgYW1iaWVudExpZ2h0OiBDb2xvdXIsXG4gICAgYW1iaWVudExpZ2h0U2hhZG93OiBDb2xvdXIsXG4gICAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0OiBDb2xvdXJcbiAgKTogQ29sb3VyIHtcbiAgICBpZiAodmVjLmVxKHN1cmZhY2VOb3JtYWwsIHZlYygpKSkge1xuICAgICAgcmV0dXJuIGFtYmllbnRMaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBkb3QgPSB2ZWMuZG90KHZlYy5ub3Ioc3VyZmFjZU5vcm1hbCksIGFtYmllbnRMaWdodERpcmVjdGlvbik7XG4gICAgaWYgKGZsb2F0RXF1YWxzKGRvdCwgMCkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGRvdCA8IDApIHtcbiAgICAgIHJldHVybiBsZXJwQ29sb3VyKGFtYmllbnRMaWdodCwgYW1iaWVudExpZ2h0SGlnaGxpZ2h0LCAtZG90KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVycENvbG91cihhbWJpZW50TGlnaHQsIGFtYmllbnRMaWdodFNoYWRvdywgZG90KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgc29mdCBzaGFkb3cgc2V0dGluZ3Mgb24gdGhlIHNwZWNpZmllZCBjYW52YXMgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHNldHVwU29mdFNoYWRvd3MoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzRW5hYmxlZCAmJlxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnYmxhY2snO1xuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50O1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsYXkgdGhlIGxpZ2h0bWFwIG9udG8gdGhlIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgYWZ0ZXJ3YXJkcyBzbyB0aGF0IHRoZXkgY2FuIGJlIGJyaWdodGVyXG4gICAgLy8gdGhhbiB0aGUgc2NlbmUgdW5kZXJuZWF0aCB0aGVtXG4gICAgaWYgKHRoaXMuc3BlY3VsYXJWaXNpYmxlKSB7XG4gICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuc3BlY3VsYXJMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBub3JtYWwgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmE6IExpZ2h0aW5nQ2FtZXJhLCBzdXJmYWNlczogU3VyZmFjZTxhbnk+W10pIHtcbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dCk7XG4gICAgdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcblxuICAgIHN1cmZhY2VzLmZvckVhY2goc3VyZmFjZSA9PiB7XG4gICAgICBzdXJmYWNlLmRyYXdOb3JtYWxNYXAodGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgc3BlY3VsYXIgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZVNwZWN1bGFyTWFwKFxuICAgIGNhbWVyYTogTGlnaHRpbmdDYW1lcmEsXG4gICAgc3VyZmFjZXM6IFN1cmZhY2U8YW55PltdXG4gICkge1xuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuXG4gICAgc3VyZmFjZXMuZm9yRWFjaChzdXJmYWNlID0+IHtcbiAgICAgIHN1cmZhY2UuZHJhd1NwZWN1bGFyTWFwKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5cbmV4cG9ydCB0eXBlIFNjZW5lT2JqZWN0T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdvcmxkIHBvc2l0aW9uIG9mIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHBvc2l0aW9uOiB2ZWM7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhpcyBvYmplY3QgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHNpemU6IHZlYztcblxuICAvKipcbiAgICogQ2FuIHRoaXMgb2JqZWN0IGJlIG1lcmdlZCB3aXRoIGl0cyBuZWlnaGJvdXJzIGJ5XG4gICAqIGBMaWdodGluZ1N5c3RlbS5vcHRpbWlzZSgpYD9cbiAgICovXG4gIG1lcmdlYWJsZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgd2l0aCBhIGBMaWdodGluZ1N5c3RlbWBcbiAqXG4gKiBUaGVzZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgYExpZ2h0aW5nU3lzdGVtLmFkZC4uLigpYCBtZXRob2RzIGFuZCBhcmUgdXNlZFxuICogdG8gY2hhbmdlIG9yIHJlbW92ZSB0aGUgb2JqZWN0IGxhdGVyIG9uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuZU9iamVjdDxPcHRpb25zIGV4dGVuZHMgU2NlbmVPYmplY3RPcHRpb25zPiB7XG4gIHByb3RlY3RlZCBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWM7XG4gIHB1YmxpYyBzaXplOiB2ZWM7XG4gIHB1YmxpYyBtZXJnZWFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nID0gbGlnaHRpbmc7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjLmNweShvcHRpb25zLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBvYmplY3QgdG8gYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYykge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuY3B5KHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHNpemUgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2l6ZTogdmVjKSB7XG4gICAgdGhpcy5zaXplID0gdmVjLmNweShzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc29tZSBvZiB0aGUgb3B0aW9ucyBmb3IgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxPcHRpb25zPikge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAodGhpcyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMuY3B5KHRoaXMuc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgb2JqZWN0IGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLmxpZ2h0aW5nLnJlbW92ZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB0eXBlIHsgTGlnaHQgfSBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCB7IEdyb3VuZFJlY2VpdmVyLCBTdXJmYWNlLCBXYWxsUmVjZWl2ZXIgfSBmcm9tICcuL1N1cmZhY2UnO1xuaW1wb3J0IHsgQ29sb3VyLCBMaWdodGluZ0NhbWVyYSwgTGlnaHRpbmdJbWFnZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNvcHlTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvY29weS5mcmFnLmdsc2wnKTtcbmltcG9ydCBkaWZmdXNlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2RpZmZ1c2UuZnJhZy5nbHNsJyk7XG5pbXBvcnQgbWFza1NoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9tYXNrLmZyYWcuZ2xzbCcpO1xuaW1wb3J0IHF1YWRTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvcXVhZC52ZXJ0Lmdsc2wnKTtcbmltcG9ydCBzcGVjdWxhclNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9zcGVjdWxhci5mcmFnLmdsc2wnKTtcbmltcG9ydCBzdXJmYWNlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3N1cmZhY2UuZ2xzbCcpO1xuXG4vKipcbiAqIEEgc3VyZmFjZSB0aGF0J3MgdmlzaWJsZSBpbiB0aGUgc2NlbmUsIGFuZCBpdHMgYW1iaWVudCBsaWdodFxuICovXG5leHBvcnQgdHlwZSBTaGFkZXJTdXJmYWNlID0ge1xuICBzdXJmYWNlOiBTdXJmYWNlPGFueT47XG4gIGFtYmllbnRMaWdodDogQ29sb3VyO1xufTtcblxuLyoqXG4gKiBFdmVyeXRoaW5nIHRoYXQgdGhlIHNoYWRlcnMgbmVlZCBmb3IgcmVuZGVyaW5nIGEgZnJhbWVcbiAqL1xuZXhwb3J0IHR5cGUgU2hhZGVyU2NlbmUgPSB7XG4gIGNhbWVyYTogTGlnaHRpbmdDYW1lcmE7XG4gIHNjcmVlbjogdmVjO1xuICBsaWdodHM6IExpZ2h0W107XG4gIHN1cmZhY2VzOiBTaGFkZXJTdXJmYWNlW107XG4gIG5vcm1hbE1hcDogTGlnaHRpbmdJbWFnZSB8IG51bGw7XG4gIHNwZWN1bGFyTWFwOiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcbiAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiBib29sZWFuO1xuICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiBudW1iZXI7XG4gIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiBudW1iZXI7XG4gIHdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IG51bWJlcjtcbiAgaGlnaGxpZ2h0U3RyZW5ndGg6IG51bWJlcjtcbiAgc2hhZG93U3RyZW5ndGg6IG51bWJlcjtcbiAgc3BlY3VsYXJTdHJlbmd0aDogbnVtYmVyO1xuICBzaGluaW5lc3M6IG51bWJlcjtcbiAgdmlld1RpbHQ6IG51bWJlcjtcbiAgYmFuZGluZzogbnVtYmVyO1xufTtcblxudHlwZSBQcm9ncmFtID0ge1xuICBwcm9ncmFtOiBXZWJHTFByb2dyYW07XG4gIHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbj47XG59O1xuXG50eXBlIFJlbmRlclRhcmdldCA9IHtcbiAgdGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBmcmFtZWJ1ZmZlcjogV2ViR0xGcmFtZWJ1ZmZlcjtcbn07XG5cbmVudW0gVGV4dHVyZVVuaXQge1xuICBOb3JtYWxNYXAsXG4gIFNwZWN1bGFyTWFwLFxuICBTdXJmYWNlTWFwLFxuICBMaWdodE1hcCxcbiAgUmVnaW9uU2hhZG93TWFwLFxuICBPYmplY3RTaGFkb3dNYXAsXG4gIEltYWdlLFxufVxuXG4vKipcbiAqIFRoZSBhbHBoYSBjaGFubmVsIG9mIHRoZSBzdXJmYWNlIG1hcCBzYXlzIHdoYXQncyBhdCBlYWNoIHBpeGVsLCB0aGVzZSB2YWx1ZXNcbiAqIGFyZSBhbHNvIGluIHRoZSBzaGFkZXJzXG4gKi9cbmVudW0gU3VyZmFjZVR5cGUge1xuICBOb25lID0gMCxcbiAgR3JvdW5kID0gMC4yNSxcbiAgUHJvamVjdGVkV2FsbCA9IDAuNSxcbiAgRmxhdFdhbGwgPSAwLjc1LFxuICBVbmxpdCA9IDEsXG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgbGlnaHRpbmcgZm9yIGEgc2NlbmUgdXNpbmcgYSBzaW5nbGUgV2ViR0wgY29udGV4dFxuICpcbiAqIFN1cmZhY2VzIGFyZSBkcmF3biBpbnRvIGEgc3VyZmFjZSBtYXAgd2l0aG91dCBhbnkgYmxlbmRpbmcsIHNvIGVhY2ggcGl4ZWxcbiAqIGJlbG9uZ3MgdG8gZXhhY3RseSBvbmUgc3VyZmFjZSBhbmQga25vd3Mgd2hlcmUgdGhhdCBzdXJmYWNlIG1lZXRzIHRoZSBncm91bmQuXG4gKiBUaGlzIG1lYW5zIG92ZXJsYXBwaW5nIHN1cmZhY2VzIGRvbid0IG5lZWQgYW55IHNwZWNpYWwgaGFuZGxpbmcuXG4gKlxuICogRWFjaCBsaWdodCBpcyB0aGVuIHNoYWRlZCBzZXBhcmF0ZWx5IGFuZCBibGVuZGVkIGludG8gYSBsaWdodCBtYXAsIHNvIGFcbiAqIGxpZ2h0J3MgYnVtcHMgb25seSBhZmZlY3QgdGhhdCBsaWdodC4gU3BlY3VsYXIgaGlnaGxpZ2h0cyBhcmUgYWRkZWQgdXAgaW4gYVxuICogc2VwYXJhdGUgYnVmZmVyLCBiZWNhdXNlIHRoZXkgbmVlZCB0byBiZSBicmlnaHRlciB0aGFuIHRoZSBzY2VuZVxuICovXG5leHBvcnQgY2xhc3MgU2hhZGVyUGFzcyB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPT1RfU0NBTEUgPSA0O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT09UX01BWCA9IDY1NTM1O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0hBRE9XX0JJQVMgPSAyNTU7XG5cbiAgLyoqXG4gICAqIFRoZSBvdXRwdXQgb2YgdGhlIG1vc3QgcmVjZW50IHBhc3NcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGNvcHlQcm9ncmFtOiBQcm9ncmFtO1xuICBwcml2YXRlIG1hc2tQcm9ncmFtOiBQcm9ncmFtO1xuICBwcml2YXRlIGRpZmZ1c2VQcm9ncmFtOiBQcm9ncmFtO1xuICBwcml2YXRlIHNwZWN1bGFyUHJvZ3JhbTogUHJvZ3JhbTtcblxuICBwcml2YXRlIHRleHR1cmVzOiBSZWNvcmQ8VGV4dHVyZVVuaXQsIFdlYkdMVGV4dHVyZT47XG4gIHByaXZhdGUgc3VyZmFjZVRhcmdldDogUmVuZGVyVGFyZ2V0O1xuICBwcml2YXRlIHNwZWN1bGFyVGFyZ2V0OiBSZW5kZXJUYXJnZXQ7XG5cbiAgLyoqXG4gICAqIEltYWdlcyBvbmx5IG5lZWQgdG8gYmUgdXBsb2FkZWQgb25jZSwgYnV0IGNhbnZhc2VzIG1pZ2h0IGNoYW5nZVxuICAgKi9cbiAgcHJpdmF0ZSBpbWFnZVRleHR1cmVzID0gbmV3IFdlYWtNYXA8TGlnaHRpbmdJbWFnZSwgV2ViR0xUZXh0dXJlPigpO1xuICBwcml2YXRlIHVwbG9hZGVkQ2FudmFzZXMgPSBuZXcgU2V0PExpZ2h0aW5nSW1hZ2U+KCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dGxvc3QnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCAoKSA9PlxuICAgICAgdGhpcy5pbml0aWFsaXNlKClcbiAgICApO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoYWRlcnMgY2FuIGJlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdsICE9PSBudWxsICYmICF0aGlzLmdsLmlzQ29udGV4dExvc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmdsID0gbnVsbDtcblxuICAgIGNvbnN0IGdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCB7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG4gICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgZGVwdGg6IGZhbHNlLFxuICAgICAgc3RlbmNpbDogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKCFnbCkge1xuICAgICAgY29uc29sZS53YXJuKCdXZWJHTCBpcyBub3QgYXZhaWxhYmxlLCBsaWdodGluZyBoYXMgYmVlbiBkaXNhYmxlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcmVwZW5kID0gKHNvdXJjZTogc3RyaW5nKSA9PiBgJHtzdXJmYWNlU2hhZGVyfVxcbiR7c291cmNlfWA7XG5cbiAgICAgIHRoaXMuY29weVByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oZ2wsIGNvcHlTaGFkZXIpO1xuICAgICAgdGhpcy5tYXNrUHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbShnbCwgbWFza1NoYWRlcik7XG4gICAgICB0aGlzLmRpZmZ1c2VQcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKGdsLCBwcmVwZW5kKGRpZmZ1c2VTaGFkZXIpKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJQcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKGdsLCBwcmVwZW5kKHNwZWN1bGFyU2hhZGVyKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignTGlnaHRpbmcgaGFzIGJlZW4gZGlzYWJsZWQnLCBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHR1cmVzID0ge1xuICAgICAgW1RleHR1cmVVbml0Lk5vcm1hbE1hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0LlN1cmZhY2VNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0LkxpZ2h0TWFwXTogZ2wuY3JlYXRlVGV4dHVyZSgpISxcbiAgICAgIFtUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXBdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgW1RleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcF06IGdsLmNyZWF0ZVRleHR1cmUoKSEsXG4gICAgICBbVGV4dHVyZVVuaXQuSW1hZ2VdOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgIH07XG4gICAgdGhpcy5zdXJmYWNlVGFyZ2V0ID0ge1xuICAgICAgdGV4dHVyZTogdGhpcy50ZXh0dXJlc1tUZXh0dXJlVW5pdC5TdXJmYWNlTWFwXSxcbiAgICAgIGZyYW1lYnVmZmVyOiBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpISxcbiAgICB9O1xuICAgIHRoaXMuc3BlY3VsYXJUYXJnZXQgPSB7XG4gICAgICB0ZXh0dXJlOiBnbC5jcmVhdGVUZXh0dXJlKCkhLFxuICAgICAgZnJhbWVidWZmZXI6IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCkhLFxuICAgIH07XG4gICAgdGhpcy5pbWFnZVRleHR1cmVzID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBnbC5jcmVhdGVCdWZmZXIoKSk7XG4gICAgZ2wuYnVmZmVyRGF0YShcbiAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDEsIDAsIDAsIDEsIDEsIDFdKSxcbiAgICAgIGdsLlNUQVRJQ19EUkFXXG4gICAgKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0NPTE9SU1BBQ0VfQ09OVkVSU0lPTl9XRUJHTCwgZ2wuTk9ORSk7XG5cbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5oZWlnaHQgPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21waWxlU2hhZGVyKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgdHlwZTogbnVtYmVyLFxuICAgIHNvdXJjZTogc3RyaW5nXG4gICk6IFdlYkdMU2hhZGVyIHtcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSkhO1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gICAgaWYgKFxuICAgICAgIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSAmJlxuICAgICAgIWdsLmlzQ29udGV4dExvc3QoKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSA/PyAnVW5hYmxlIHRvIGNvbXBpbGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9ncmFtKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgZnJhZ21lbnRTb3VyY2U6IHN0cmluZ1xuICApOiBQcm9ncmFtIHtcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpITtcblxuICAgIGdsLmF0dGFjaFNoYWRlcihcbiAgICAgIHByb2dyYW0sXG4gICAgICB0aGlzLmNvbXBpbGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHF1YWRTaGFkZXIpXG4gICAgKTtcbiAgICBnbC5hdHRhY2hTaGFkZXIoXG4gICAgICBwcm9ncmFtLFxuICAgICAgdGhpcy5jb21waWxlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U291cmNlKVxuICAgICk7XG4gICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsICdhX2Nvcm5lcicpO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgaWYgKFxuICAgICAgIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpICYmXG4gICAgICAhZ2wuaXNDb250ZXh0TG9zdCgpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkgPz8gJ1VuYWJsZSB0byBsaW5rJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5pZm9ybXM6IFByb2dyYW1bJ3VuaWZvcm1zJ10gPSB7fTtcbiAgICBjb25zdCBjb3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKSE7XG4gICAgICB1bmlmb3Jtc1tuYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvZ3JhbSwgdW5pZm9ybXMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEgdGV4dHVyZSBhbmQgc2V0IGl0cyBmaWx0ZXJpbmdcbiAgICovXG4gIHByaXZhdGUgYmluZFRleHR1cmUoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICB1bml0OiBudW1iZXIsXG4gICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZmlsdGVyKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZmlsdGVyKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWQgYW4gaW1hZ2UgdG8gb25lIG9mIHRoZSBzaGFyZWQgdGV4dHVyZXNcbiAgICovXG4gIHByaXZhdGUgdXBsb2FkKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgdW5pdDogVGV4dHVyZVVuaXQsXG4gICAgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UsXG4gICAgZmlsdGVyOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5iaW5kVGV4dHVyZShnbCwgdW5pdCwgdGhpcy50ZXh0dXJlc1t1bml0XSwgZmlsdGVyKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEgc3VyZmFjZSdzIG1hc2ssIHVwbG9hZGluZyBpdCBpZiB3ZSBoYXZlbid0IHNlZW4gaXQgYmVmb3JlXG4gICAqL1xuICBwcml2YXRlIGJpbmRJbWFnZShcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIGltYWdlOiBMaWdodGluZ0ltYWdlLFxuICAgIGZpbHRlcjogbnVtYmVyXG4gICkge1xuICAgIGxldCB0ZXh0dXJlID0gdGhpcy5pbWFnZVRleHR1cmVzLmdldChpbWFnZSk7XG4gICAgY29uc3QgaXNOZXcgPSB0ZXh0dXJlID09PSB1bmRlZmluZWQ7XG4gICAgaWYgKCF0ZXh0dXJlKSB7XG4gICAgICB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpITtcbiAgICAgIHRoaXMuaW1hZ2VUZXh0dXJlcy5zZXQoaW1hZ2UsIHRleHR1cmUpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZFRleHR1cmUoZ2wsIFRleHR1cmVVbml0LkltYWdlLCB0ZXh0dXJlLCBmaWx0ZXIpO1xuXG4gICAgY29uc3QgaXNTdGFsZSA9XG4gICAgICBpbWFnZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50ICYmICF0aGlzLnVwbG9hZGVkQ2FudmFzZXMuaGFzKGltYWdlKTtcbiAgICBpZiAoaXNOZXcgfHwgaXNTdGFsZSkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgMCxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuUkdCQSxcbiAgICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgICAgaW1hZ2VcbiAgICAgICk7XG4gICAgICB0aGlzLnVwbG9hZGVkQ2FudmFzZXMuYWRkKGltYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzaXplIG9mIGEgdGV4dHVyZSB0aGF0IHdlJ3JlIHJlbmRlcmluZyBpbnRvXG4gICAqL1xuICBwcml2YXRlIHJlc2l6ZVRhcmdldChcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHsgdGV4dHVyZSwgZnJhbWVidWZmZXIgfTogUmVuZGVyVGFyZ2V0LFxuICAgIHNjcmVlbjogdmVjXG4gICkge1xuICAgIHRoaXMuYmluZFRleHR1cmUoZ2wsIFRleHR1cmVVbml0LkltYWdlLCB0ZXh0dXJlLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhJbWFnZTJEKFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIDAsXG4gICAgICBnbC5SR0JBLFxuICAgICAgc2NyZWVuLngsXG4gICAgICBzY3JlZW4ueSxcbiAgICAgIDAsXG4gICAgICBnbC5SR0JBLFxuICAgICAgZ2wuVU5TSUdORURfQllURSxcbiAgICAgIG51bGxcbiAgICApO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmcmFtZWJ1ZmZlcik7XG4gICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQoXG4gICAgICBnbC5GUkFNRUJVRkZFUixcbiAgICAgIGdsLkNPTE9SX0FUVEFDSE1FTlQwLFxuICAgICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAgIHRleHR1cmUsXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgdGhlIG91dHB1dCBhbmQgdGhlIHJlbmRlciB0YXJnZXRzIG1hdGNoIHRoZSBzY3JlZW4gc2l6ZVxuICAgKi9cbiAgcHJpdmF0ZSByZXNpemUoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgc2NyZWVuOiB2ZWMpIHtcbiAgICBpZiAodGhpcy5jYW52YXMud2lkdGggPT09IHNjcmVlbi54ICYmIHRoaXMuY2FudmFzLmhlaWdodCA9PT0gc2NyZWVuLnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHNjcmVlbi54O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHNjcmVlbi55O1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIHNjcmVlbi54LCBzY3JlZW4ueSk7XG5cbiAgICB0aGlzLnJlc2l6ZVRhcmdldChnbCwgdGhpcy5zdXJmYWNlVGFyZ2V0LCBzY3JlZW4pO1xuICAgIHRoaXMucmVzaXplVGFyZ2V0KGdsLCB0aGlzLnNwZWN1bGFyVGFyZ2V0LCBzY3JlZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYSBxdWFkIGNvdmVyaW5nIHBhcnQgb2YgdGhlIHNjcmVlblxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3UXVhZChcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHsgdW5pZm9ybXMgfTogUHJvZ3JhbSxcbiAgICBzY3JlZW5SZWN0YW5nbGU6IG51bWJlcltdLFxuICAgIHdvcmxkUmVjdGFuZ2xlOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXSxcbiAgICBtYXNrUmVjdGFuZ2xlOiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXVxuICApIHtcbiAgICBnbC51bmlmb3JtNGZ2KHVuaWZvcm1zLnVfc2NyZWVuUmVjdGFuZ2xlLCBzY3JlZW5SZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV93b3JsZFJlY3RhbmdsZSwgd29ybGRSZWN0YW5nbGUpO1xuICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV9tYXNrUmVjdGFuZ2xlLCBtYXNrUmVjdGFuZ2xlKTtcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgdGV4dHVyZSBvdmVyIHRoZSB3aG9sZSBzY3JlZW4sIHJlcGxhY2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3VGV4dHVyZShcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBzY3JlZW46IHZlY1xuICApIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb3B5UHJvZ3JhbTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtLnByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZihwcm9ncmFtLnVuaWZvcm1zLnVfc2NyZWVuLCBzY3JlZW4ueCwgc2NyZWVuLnkpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfZmxpcFksIDEpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZShnbCwgVGV4dHVyZVVuaXQuSW1hZ2UsIHRleHR1cmUsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnVuaWZvcm0xaShwcm9ncmFtLnVuaWZvcm1zLnVfaW1hZ2UsIFRleHR1cmVVbml0LkltYWdlKTtcblxuICAgIHRoaXMuZHJhd1F1YWQoZ2wsIHByb2dyYW0sIFswLCAwLCBzY3JlZW4ueCwgc2NyZWVuLnldKTtcblxuICAgIC8vIEEgdGV4dHVyZSBjYW4ndCBzdGF5IGJvdW5kIHdoaWxlIHdlJ3JlIHJlbmRlcmluZyBpbnRvIGl0XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoYXQgd2UgbmVlZCB0byB3cml0ZSB0byB0aGUgc3VyZmFjZSBtYXAgZm9yIGEgc3VyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBzdXJmYWNlVmFsdWUoc3VyZmFjZTogU3VyZmFjZTxhbnk+LCBzY2VuZTogU2hhZGVyU2NlbmUpOiBudW1iZXJbXSB7XG4gICAgaWYgKHN1cmZhY2UgaW5zdGFuY2VvZiBHcm91bmRSZWNlaXZlcikge1xuICAgICAgcmV0dXJuIFswLCAwLCAwLCBTdXJmYWNlVHlwZS5Hcm91bmRdO1xuICAgIH1cblxuICAgIGNvbnN0IHdhbGwgPSBzdXJmYWNlIGFzIFdhbGxSZWNlaXZlcjtcblxuICAgIGxldCB0eXBlID0gU3VyZmFjZVR5cGUuVW5saXQ7XG4gICAgaWYgKHdhbGwucmVjZWl2ZUxpZ2h0KSB7XG4gICAgICB0eXBlID0gd2FsbC5wcm9qZWN0U2hhZG93c1xuICAgICAgICA/IFN1cmZhY2VUeXBlLlByb2plY3RlZFdhbGxcbiAgICAgICAgOiBTdXJmYWNlVHlwZS5GbGF0V2FsbDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9vdCBwb3NpdGlvbiBpcyBzdG9yZWQgcmVsYXRpdmUgdG8gdGhlIHRvcCBvZiB0aGUgY2FtZXJhJ3Mgdmlld1xuICAgIGNvbnN0IGZvb3QgPSBNYXRoLnJvdW5kKFxuICAgICAgKHdhbGwucG9zaXRpb24ueSArIHdhbGwuc2l6ZS55IC0gc2NlbmUuY2FtZXJhLmJvdW5kcy50b3ApICpcbiAgICAgICAgU2hhZGVyUGFzcy5GT09UX1NDQUxFXG4gICAgKTtcbiAgICBjb25zdCBjbGFtcGVkRm9vdCA9IE1hdGgubWluKE1hdGgubWF4KGZvb3QsIDApLCBTaGFkZXJQYXNzLkZPT1RfTUFYKTtcbiAgICBjb25zdCBiaWFzID0gTWF0aC5taW4od2FsbC5zaGFkb3dCaWFzLCBTaGFkZXJQYXNzLk1BWF9TSEFET1dfQklBUyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5mbG9vcihjbGFtcGVkRm9vdCAvIDI1NikgLyAyNTUsXG4gICAgICAoY2xhbXBlZEZvb3QgJSAyNTYpIC8gMjU1LFxuICAgICAgTWF0aC5yb3VuZChiaWFzKSAvIDI1NSxcbiAgICAgIHR5cGUsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGVhY2ggdmlzaWJsZSBzdXJmYWNlLCB3cml0aW5nIGEgdmFsdWUgdG8gYWxsIG9mIHRoZSBzdXJmYWNlJ3MgcGl4ZWxzXG4gICAqL1xuICBwcml2YXRlIGRyYXdTdXJmYWNlcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZSxcbiAgICBnZXRWYWx1ZTogKGl0ZW06IFNoYWRlclN1cmZhY2UpID0+IG51bWJlcltdXG4gICkge1xuICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMubWFza1Byb2dyYW07XG4gICAgY29uc3QgZmlsdGVyID0gc2NlbmUuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVDtcblxuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X21hc2ssIFRleHR1cmVVbml0LkltYWdlKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzY2VuZS5zdXJmYWNlcykge1xuICAgICAgY29uc3QgeyBzdXJmYWNlIH0gPSBpdGVtO1xuICAgICAgY29uc3QgbWFzayA9IHN1cmZhY2UuZ2V0TWFzaygpO1xuICAgICAgaWYgKG1hc2sgPT09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXNrUmVjdGFuZ2xlID0gWzAsIDAsIDEsIDFdO1xuICAgICAgaWYgKG1hc2sgIT09ICdzb2xpZCcpIHtcbiAgICAgICAgdGhpcy5iaW5kSW1hZ2UoZ2wsIG1hc2ssIGZpbHRlcik7XG5cbiAgICAgICAgLy8gUmVwZWF0ZWQgaW1hZ2VzIGFyZSBsaW5lZCB1cCB3aXRoIHRoZSB3b3JsZCwgdGhlIHNhbWUgYXMgYSBwYXR0ZXJuXG4gICAgICAgIGlmIChzdXJmYWNlLnJlcGVhdCAmJiAhc3VyZmFjZS5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgICAgICBtYXNrUmVjdGFuZ2xlID0gW1xuICAgICAgICAgICAgc3VyZmFjZS5wb3NpdGlvbi54IC8gbWFzay53aWR0aCxcbiAgICAgICAgICAgIHN1cmZhY2UucG9zaXRpb24ueSAvIG1hc2suaGVpZ2h0LFxuICAgICAgICAgICAgc3VyZmFjZS5zaXplLnggLyBtYXNrLndpZHRoLFxuICAgICAgICAgICAgc3VyZmFjZS5zaXplLnkgLyBtYXNrLmhlaWdodCxcbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvcExlZnQgPSBzY2VuZS5jYW1lcmEud29ybGRUb1NjcmVlbihzdXJmYWNlLnBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gc2NlbmUuY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICAgIHZlYy5hZGQoc3VyZmFjZS5wb3NpdGlvbiwgc3VyZmFjZS5zaXplKVxuICAgICAgKTtcblxuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTWFzaywgbWFzayA9PT0gJ3NvbGlkJyA/IDAgOiAxKTtcbiAgICAgIGdsLnVuaWZvcm00ZnYodW5pZm9ybXMudV92YWx1ZSwgZ2V0VmFsdWUoaXRlbSkpO1xuICAgICAgdGhpcy5kcmF3UXVhZChcbiAgICAgICAgZ2wsXG4gICAgICAgIHRoaXMubWFza1Byb2dyYW0sXG4gICAgICAgIFtcbiAgICAgICAgICB0b3BMZWZ0LngsXG4gICAgICAgICAgdG9wTGVmdC55LFxuICAgICAgICAgIGJvdHRvbVJpZ2h0LnggLSB0b3BMZWZ0LngsXG4gICAgICAgICAgYm90dG9tUmlnaHQueSAtIHRvcExlZnQueSxcbiAgICAgICAgXSxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICBtYXNrUmVjdGFuZ2xlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHVuaWZvcm1zIHRoYXQgYXJlIHRoZSBzYW1lIGZvciBldmVyeSBsaWdodCBpbiB0aGUgc2NlbmVcbiAgICovXG4gIHByaXZhdGUgc2V0U2NlbmVVbmlmb3JtcyhcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHsgcHJvZ3JhbSwgdW5pZm9ybXMgfTogUHJvZ3JhbSxcbiAgICBzY2VuZTogU2hhZGVyU2NlbmVcbiAgKSB7XG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybXMudV9zY3JlZW4sIHNjZW5lLnNjcmVlbi54LCBzY2VuZS5zY3JlZW4ueSk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfdXNlTm9ybWFsTWFwLCBzY2VuZS5ub3JtYWxNYXAgPyAxIDogMCk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfd2FsbExpZ2h0aW5nWU9mZnNldCwgc2NlbmUud2FsbExpZ2h0aW5nWU9mZnNldCk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdW5pZm9ybXMudV93YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZSxcbiAgICAgIHNjZW5lLndhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB1bmlmb3Jtcy51X3dhbGxTaGFkb3dMZW5ndGhGYWN0b3IsXG4gICAgICBzY2VuZS53YWxsU2hhZG93TGVuZ3RoRmFjdG9yXG4gICAgKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9iYW5kaW5nLCBzY2VuZS5iYW5kaW5nKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zY2VuZU5vcm1hbE1hcCwgVGV4dHVyZVVuaXQuTm9ybWFsTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zdXJmYWNlTWFwLCBUZXh0dXJlVW5pdC5TdXJmYWNlTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9saWdodE1hcCwgVGV4dHVyZVVuaXQuTGlnaHRNYXApO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X3JlZ2lvblNoYWRvd01hcCwgVGV4dHVyZVVuaXQuUmVnaW9uU2hhZG93TWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9vYmplY3RTaGFkb3dNYXAsIFRleHR1cmVVbml0Lk9iamVjdFNoYWRvd01hcCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB1bmlmb3JtcyBmb3IgYSBsaWdodCBhbmQgZHJhdyBpdHMgYm91bmRpbmcgYm94XG4gICAqL1xuICBwcml2YXRlIGRyYXdMaWdodChcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHByb2dyYW06IFByb2dyYW0sXG4gICAgbGlnaHQ6IExpZ2h0LFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZVxuICApIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSBsaWdodC5ib3VuZHM7XG4gICAgY29uc3QgdG9wTGVmdCA9IHNjZW5lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHBvc2l0aW9uKTtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IHNjZW5lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHZlYy5hZGQocG9zaXRpb24sIHNpemUpKTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMWYocHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0UmFkaXVzLCBsaWdodC5yYWRpdXMpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRIZWlnaHQsIGxpZ2h0LmhlaWdodCk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgcHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0TWFwU2l6ZSxcbiAgICAgIGxpZ2h0LnJlZ2lvblNoYWRvd0NhbnZhcy53aWR0aFxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgcHJvZ3JhbS51bmlmb3Jtcy51X2Zvb3RPcmlnaW4sXG4gICAgICBzY2VuZS5jYW1lcmEuYm91bmRzLnRvcCAtIGxpZ2h0LnBvc2l0aW9uLnlcbiAgICApO1xuXG4gICAgdGhpcy5kcmF3UXVhZChcbiAgICAgIGdsLFxuICAgICAgcHJvZ3JhbSxcbiAgICAgIFtcbiAgICAgICAgdG9wTGVmdC54LFxuICAgICAgICB0b3BMZWZ0LnksXG4gICAgICAgIGJvdHRvbVJpZ2h0LnggLSB0b3BMZWZ0LngsXG4gICAgICAgIGJvdHRvbVJpZ2h0LnkgLSB0b3BMZWZ0LnksXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBwb3NpdGlvbi54IC0gbGlnaHQucG9zaXRpb24ueCxcbiAgICAgICAgcG9zaXRpb24ueSAtIGxpZ2h0LnBvc2l0aW9uLnksXG4gICAgICAgIHNpemUueCxcbiAgICAgICAgc2l6ZS55LFxuICAgICAgXVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzY2VuZSdzIGxpZ2h0IG1hcCBpbnRvIHRoZSBjYW52YXMsIGFuZCBhZGQgdXAgdGhlIHNjZW5lJ3NcbiAgICogc3BlY3VsYXIgaGlnaGxpZ2h0cyBpZiBpdCBoYXMgYSBzcGVjdWxhciBtYXBcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoc2NlbmU6IFNoYWRlclNjZW5lKSB7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcztcbiAgICBpZiAoIWdsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXNpemUoZ2wsIHNjZW5lLnNjcmVlbik7XG4gICAgdGhpcy51cGxvYWRlZENhbnZhc2VzLmNsZWFyKCk7XG5cbiAgICBpZiAoc2NlbmUubm9ybWFsTWFwKSB7XG4gICAgICB0aGlzLnVwbG9hZChnbCwgVGV4dHVyZVVuaXQuTm9ybWFsTWFwLCBzY2VuZS5ub3JtYWxNYXAsIGdsLk5FQVJFU1QpO1xuICAgIH1cblxuICAgIC8vIEVhY2ggcGl4ZWwgb2YgdGhlIHN1cmZhY2UgbWFwIGJlbG9uZ3MgdG8gb25lIHN1cmZhY2UsIHNvIHRoZXJlJ3Mgbm9cbiAgICAvLyBibGVuZGluZyBhbmQgc3VyZmFjZXMgY292ZXIgd2hhdGV2ZXIncyB1bmRlcm5lYXRoIHRoZW1cbiAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMubWFza1Byb2dyYW0ucHJvZ3JhbSk7XG4gICAgZ2wudW5pZm9ybTJmKFxuICAgICAgdGhpcy5tYXNrUHJvZ3JhbS51bmlmb3Jtcy51X3NjcmVlbixcbiAgICAgIHNjZW5lLnNjcmVlbi54LFxuICAgICAgc2NlbmUuc2NyZWVuLnlcbiAgICApO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCB0aGlzLnN1cmZhY2VUYXJnZXQuZnJhbWVidWZmZXIpO1xuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgU3VyZmFjZVR5cGUuTm9uZSk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgdGhpcy5kcmF3U3VyZmFjZXMoZ2wsIHNjZW5lLCAoeyBzdXJmYWNlIH0pID0+XG4gICAgICB0aGlzLnN1cmZhY2VWYWx1ZShzdXJmYWNlLCBzY2VuZSlcbiAgICApO1xuXG4gICAgLy8gU3RhcnQgdGhlIGxpZ2h0IG1hcCB3aXRoIHRoZSBhbWJpZW50IGxpZ2h0IG9uIGVhY2ggc3VyZmFjZVxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAwKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgICB0aGlzLmRyYXdTdXJmYWNlcyhnbCwgc2NlbmUsICh7IGFtYmllbnRMaWdodDogeyByLCBnLCBiLCBhIH0gfSkgPT4gW1xuICAgICAgciAvIDI1NSxcbiAgICAgIGcgLyAyNTUsXG4gICAgICBiIC8gMjU1LFxuICAgICAgYSxcbiAgICBdKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmUoXG4gICAgICBnbCxcbiAgICAgIFRleHR1cmVVbml0LlN1cmZhY2VNYXAsXG4gICAgICB0aGlzLnN1cmZhY2VUYXJnZXQudGV4dHVyZSxcbiAgICAgIGdsLk5FQVJFU1RcbiAgICApO1xuXG4gICAgdGhpcy5zZXRTY2VuZVVuaWZvcm1zKGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBzY2VuZSk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdGhpcy5kaWZmdXNlUHJvZ3JhbS51bmlmb3Jtcy51X2hpZ2hsaWdodFN0cmVuZ3RoLFxuICAgICAgc2NlbmUuaGlnaGxpZ2h0U3RyZW5ndGhcbiAgICApO1xuICAgIGdsLnVuaWZvcm0xZihcbiAgICAgIHRoaXMuZGlmZnVzZVByb2dyYW0udW5pZm9ybXMudV9zaGFkb3dTdHJlbmd0aCxcbiAgICAgIHNjZW5lLnNoYWRvd1N0cmVuZ3RoXG4gICAgKTtcblxuICAgIGlmIChzY2VuZS5zcGVjdWxhck1hcCkge1xuICAgICAgdGhpcy51cGxvYWQoZ2wsIFRleHR1cmVVbml0LlNwZWN1bGFyTWFwLCBzY2VuZS5zcGVjdWxhck1hcCwgZ2wuTkVBUkVTVCk7XG5cbiAgICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMuc3BlY3VsYXJQcm9ncmFtO1xuICAgICAgdGhpcy5zZXRTY2VuZVVuaWZvcm1zKGdsLCB0aGlzLnNwZWN1bGFyUHJvZ3JhbSwgc2NlbmUpO1xuICAgICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfc2NlbmVTcGVjdWxhck1hcCwgVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXApO1xuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc3BlY3VsYXJTdHJlbmd0aCwgc2NlbmUuc3BlY3VsYXJTdHJlbmd0aCk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zaGluaW5lc3MsIHNjZW5lLnNoaW5pbmVzcyk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV92aWV3VGlsdCwgc2NlbmUudmlld1RpbHQpO1xuXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuc3BlY3VsYXJUYXJnZXQuZnJhbWVidWZmZXIpO1xuICAgICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAxKTtcbiAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlciA9IHNjZW5lLmltYWdlU21vb3RoaW5nRW5hYmxlZCA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1Q7XG5cbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgIGZvciAoY29uc3QgbGlnaHQgb2Ygc2NlbmUubGlnaHRzKSB7XG4gICAgICB0aGlzLnVwbG9hZChnbCwgVGV4dHVyZVVuaXQuTGlnaHRNYXAsIGxpZ2h0LmxpZ2h0Q2FudmFzLCBmaWx0ZXIpO1xuICAgICAgdGhpcy51cGxvYWQoXG4gICAgICAgIGdsLFxuICAgICAgICBUZXh0dXJlVW5pdC5SZWdpb25TaGFkb3dNYXAsXG4gICAgICAgIGxpZ2h0LnJlZ2lvblNoYWRvd0NhbnZhcyxcbiAgICAgICAgZmlsdGVyXG4gICAgICApO1xuICAgICAgdGhpcy51cGxvYWQoXG4gICAgICAgIGdsLFxuICAgICAgICBUZXh0dXJlVW5pdC5PYmplY3RTaGFkb3dNYXAsXG4gICAgICAgIGxpZ2h0Lm9iamVjdFNoYWRvd0NhbnZhcyxcbiAgICAgICAgZmlsdGVyXG4gICAgICApO1xuXG4gICAgICAvLyBCbGVuZCB0aGUgc2FtZSB3YXkgYXMgdGhlICdzY3JlZW4nIGNvbXBvc2l0ZSBvcGVyYXRpb24sIGFuZCBsZWF2ZSB0aGVcbiAgICAgIC8vIGFscGhhIGNoYW5uZWwgYWxvbmVcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICBnbC5ibGVuZEZ1bmNTZXBhcmF0ZShnbC5PTkUsIGdsLk9ORV9NSU5VU19TUkNfQ09MT1IsIGdsLlpFUk8sIGdsLk9ORSk7XG4gICAgICB0aGlzLmRyYXdMaWdodChnbCwgdGhpcy5kaWZmdXNlUHJvZ3JhbSwgbGlnaHQsIHNjZW5lKTtcblxuICAgICAgaWYgKHNjZW5lLnNwZWN1bGFyTWFwKSB7XG4gICAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zcGVjdWxhclRhcmdldC5mcmFtZWJ1ZmZlcik7XG4gICAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLk9ORSwgZ2wuT05FLCBnbC5aRVJPLCBnbC5PTkUpO1xuICAgICAgICB0aGlzLmRyYXdMaWdodChnbCwgdGhpcy5zcGVjdWxhclByb2dyYW0sIGxpZ2h0LCBzY2VuZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiB0aGUgY2FudmFzIHdpdGggdGhlIHNwZWN1bGFyIGhpZ2hsaWdodHMgZnJvbSB0aGVcbiAgICogbW9zdCByZWNlbnQgcmVuZGVyXG4gICAqL1xuICBwdWJsaWMgc2hvd1NwZWN1bGFyKHNjcmVlbjogdmVjKSB7XG4gICAgaWYgKHRoaXMuZ2wpIHtcbiAgICAgIHRoaXMuZHJhd1RleHR1cmUodGhpcy5nbCwgdGhpcy5zcGVjdWxhclRhcmdldC50ZXh0dXJlLCBzY3JlZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiB0aGUgY2FudmFzIHdpdGggdGhlIHN1cmZhY2UgbWFwIGZyb20gdGhlIG1vc3RcbiAgICogcmVjZW50IHJlbmRlclxuICAgKi9cbiAgcHVibGljIHNob3dTdXJmYWNlcyhzY3JlZW46IHZlYykge1xuICAgIGlmICh0aGlzLmdsKSB7XG4gICAgICB0aGlzLmRyYXdUZXh0dXJlKHRoaXMuZ2wsIHRoaXMuc3VyZmFjZVRhcmdldC50ZXh0dXJlLCBzY3JlZW4pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7IExpZ2h0aW5nSW1hZ2UgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGJvdW5kaW5nUmVjdGFuZ2xlLCBkcmF3SW1hZ2VJblJlY3RhbmdsZSB9IGZyb20gJy4vdXRpbGl0aWVzJztcblxudHlwZSBEcmF3Q2FsbGJhY2sgPSAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBTdXJmYWNlT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGJhY2tncm91bmQgY29sb3VyXG4gICAqL1xuICBjb2xvdXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBpbWFnZSBmb3IgdGhpcyBzdXJmYWNlXG4gICAqL1xuICBpbWFnZT86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBub3JtYWwgbWFwLCB1c2VkIHdoZW4gdGhlIHNoYWRlciBpcyBlbmFibGVkXG4gICAqL1xuICBub3JtYWxNYXA/OiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgc3BlY3VsYXIgbWFwLCB1c2VkIHdoZW4gdGhlIHNoYWRlciBpcyBlbmFibGVkXG4gICAqL1xuICBzcGVjdWxhck1hcD86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTdXJmYWNlcyBhcmUgZHJhd24gaW4gb3JkZXIgb2Ygei1pbmRleCBhbmQgdGhlbiBieSB0aGVpciBib3R0b20gZWRnZVxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGFueSBvZiB0aGUgZGVmYXVsdCBkcmF3aW5nIHN0ZXBzIGZvciB0aGlzIHN1cmZhY2UsIGZvciBvYmplY3RzXG4gICAqIHRoYXQgYXJlbid0IGEgc2luZ2xlIGltYWdlXG4gICAqL1xuICBjdXN0b21EcmF3Pzoge1xuICAgIGltYWdlPzogRHJhd0NhbGxiYWNrO1xuICAgIG1hc2s/OiBEcmF3Q2FsbGJhY2s7XG4gICAgbm9ybWFsTWFwPzogRHJhd0NhbGxiYWNrO1xuICAgIHNwZWN1bGFyTWFwPzogRHJhd0NhbGxiYWNrO1xuICB9O1xufTtcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgc2hhZG93c1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VyZmFjZTxcbiAgT3B0aW9ucyBleHRlbmRzIFN1cmZhY2VPcHRpb25zXG4+IGV4dGVuZHMgU2NlbmVPYmplY3Q8T3B0aW9ucz4ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBOT1JNQUxfTUFQX0RFRkFVTFRfQ09MT1VSID0gJyM3ZjdmZmYnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTUEVDVUxBUl9NQVBfREVGQVVMVF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyBjb2xvdXI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIG5vcm1hbE1hcDogTGlnaHRpbmdJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgc3BlY3VsYXJNYXA6IExpZ2h0aW5nSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHpJbmRleDogbnVtYmVyID0gMDtcbiAgcHVibGljIGN1c3RvbURyYXc6IE5vbk51bGxhYmxlPFN1cmZhY2VPcHRpb25zWydjdXN0b21EcmF3J10+ID0ge307XG5cbiAgcHJpdmF0ZSBjdXN0b21NYXNrQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBpbWFnZXMgYmUgcmVwZWF0ZWQgYWNyb3NzIHRoaXMgc3VyZmFjZSwgb3Igc3RyZXRjaGVkIHRvIGZpdD9cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCByZXBlYXQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW1hZ2Ugd2hvc2UgYWxwaGEgY2hhbm5lbCBkZWNpZGVzIHdoaWNoIHBhcnRzIG9mIHRoaXMgc3VyZmFjZVxuICAgKiByZWNlaXZlIGxpZ2h0aW5nXG4gICAqXG4gICAqIFJldHVybnMgJ3NvbGlkJyBpZiB0aGUgd2hvbGUgc3VyZmFjZSByZWNlaXZlcyBsaWdodGluZywgb3IgbnVsbCBpZiBub3RoaW5nXG4gICAqIGRvZXMgKGZvciBleGFtcGxlIGlmIHRoZSBpbWFnZSBoYXNuJ3QgbG9hZGVkIHlldClcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXRNYXNrKCk6IExpZ2h0aW5nSW1hZ2UgfCAnc29saWQnIHwgbnVsbDtcblxuICBwcml2YXRlIGZpbGxCYWNrZ3JvdW5kKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3VyOiBzdHJpbmcpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZHJhd0ltYWdlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UpIHtcbiAgICBkcmF3SW1hZ2VJblJlY3RhbmdsZShjb250ZXh0LCBpbWFnZSwgdGhpcywgdGhpcy5yZXBlYXQpO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5pbWFnZSkge1xuICAgICAgdGhpcy5jdXN0b21EcmF3LmltYWdlKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKGNvbnRleHQsIHRoaXMuY29sb3VyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgdGhpcy5pbWFnZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZHJhd0NvbG91ck1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UgfCBudWxsLFxuICAgIGRlZmF1bHRDb2xvdXI6IHN0cmluZ1xuICApIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGlmIChpbWFnZSkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgaW1hZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKGNvbnRleHQsIGRlZmF1bHRDb2xvdXIpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdOb3JtYWxNYXAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5ub3JtYWxNYXApIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5ub3JtYWxNYXAoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3Q29sb3VyTWFwKFxuICAgICAgY29udGV4dCxcbiAgICAgIHRoaXMubm9ybWFsTWFwLFxuICAgICAgU3VyZmFjZS5OT1JNQUxfTUFQX0RFRkFVTFRfQ09MT1VSXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3U3BlY3VsYXJNYXAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5zcGVjdWxhck1hcCkge1xuICAgICAgdGhpcy5jdXN0b21EcmF3LnNwZWN1bGFyTWFwKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0NvbG91ck1hcChcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLnNwZWN1bGFyTWFwLFxuICAgICAgU3VyZmFjZS5TUEVDVUxBUl9NQVBfREVGQVVMVF9DT0xPVVJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIGN1c3RvbSBtYXNrLCByZWxhdGl2ZSB0byB0aGUgcG9zaXRpb24gb2YgdGhpcyBzdXJmYWNlXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVuZGVyQ3VzdG9tTWFzayhkcmF3OiBEcmF3Q2FsbGJhY2spOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgdGhpcy5jdXN0b21NYXNrQ29udGV4dCA/Pz0gZG9jdW1lbnRcbiAgICAgIC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY3VzdG9tTWFza0NvbnRleHQ7XG4gICAgY29udGV4dC5jYW52YXMud2lkdGggPSBNYXRoLmNlaWwodGhpcy5zaXplLngpO1xuICAgIGNvbnRleHQuY2FudmFzLmhlaWdodCA9IE1hdGguY2VpbCh0aGlzLnNpemUueSk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoLXRoaXMucG9zaXRpb24ueCwgLXRoaXMucG9zaXRpb24ueSk7XG4gICAgZHJhdyhjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250ZXh0LmNhbnZhcztcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBHcm91bmRSZWNlaXZlck9wdGlvbnMgPSBTdXJmYWNlT3B0aW9ucztcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSBvZiBncm91bmQgdGhhdCByZWNlaXZlcyBncm91bmQgc2hhZG93c1xuICpcbiAqIEltYWdlcyBhcmUgcmVwZWF0ZWQgYWNyb3NzIHRoZSByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VuZFJlY2VpdmVyIGV4dGVuZHMgU3VyZmFjZTxHcm91bmRSZWNlaXZlck9wdGlvbnM+IHtcbiAgcHVibGljIHJlcGVhdCA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogR3JvdW5kUmVjZWl2ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldE1hc2soKTogTGlnaHRpbmdJbWFnZSB8ICdzb2xpZCcgfCBudWxsIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckN1c3RvbU1hc2sodGhpcy5jdXN0b21EcmF3Lm1hc2spO1xuICAgIH1cblxuICAgIHJldHVybiAnc29saWQnO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdhbGxSZWNlaXZlck9wdGlvbnMgPSBTdXJmYWNlT3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIEltYWdlIHdob3NlIGFscGhhIGNoYW5uZWwgZGVjaWRlcyB3aGljaCBwYXJ0cyBvZiB0aGlzIHN1cmZhY2UgcmVjZWl2ZVxuICAgKiBsaWdodGluZywgdGhlIGRlZmF1bHQgaXMgdGhlIGFscGhhIGNoYW5uZWwgb2YgYGltYWdlYFxuICAgKi9cbiAgbWFzaz86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhlIGltYWdlIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgc3VyZmFjZT8gT3RoZXJ3aXNlIGl0IHdpbGwgYmVcbiAgICogc3RyZXRjaGVkIHRvIGZpdFxuICAgKi9cbiAgcmVwZWF0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gZmFsc2UgaWYgdGhpcyBzdXJmYWNlIHNob3VsZCBvbmx5IHJlY2VpdmUgYW1iaWVudCBsaWdodCAodGhpc1xuICAgKiBpcyB1c2VmdWwgZm9yIHRoZSB0b3BzIG9mIHdhbGxzKVxuICAgKi9cbiAgcmVjZWl2ZUxpZ2h0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlyZWN0aW9uIHRoYXQgdGhpcyBzdXJmYWNlIGlzIGZhY2luZywgZm9yIGFtYmllbnQgbGlnaHRpbmdcbiAgICovXG4gIHN1cmZhY2VOb3JtYWw/OiB2ZWM7XG5cbiAgLyoqXG4gICAqIEhvdyBmYXIgdG93YXJkcyB0aGUgbGlnaHQgdG8gbG9vayBmb3Igc2hhZG93cyBvbiB0aGUgZ3JvdW5kLCBpbiB3b3JsZFxuICAgKiB1bml0cy4gVGhpcyBzaG91bGQgYmUgZW5vdWdoIHRvIGdldCBvdXQgb2YgdGhlIHN1cmZhY2UncyBvd24gc2hhZG93XG4gICAqL1xuICBzaGFkb3dCaWFzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGFuZCBjaXJjbGUgc2hhZG93cyBjbGltYiB0aGlzIHN1cmZhY2U/IFRoaXMgc2hvdWxkIGJlIGZhbHNlXG4gICAqIGZvciBhbnl0aGluZyB0aGF0IGNhc3RzIG9uZSBvZiB0aGVzZSBzaGFkb3dzLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBpbiBpdHNcbiAgICogb3duIHNoYWRvd1xuICAgKi9cbiAgcHJvamVjdFNoYWRvd3M/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSBvciBzcHJpdGUgdGhhdCByZWNlaXZlcyB3YWxsIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGxSZWNlaXZlciBleHRlbmRzIFN1cmZhY2U8V2FsbFJlY2VpdmVyT3B0aW9ucz4ge1xuICBwdWJsaWMgbWFzazogTGlnaHRpbmdJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgcmVwZWF0ID0gZmFsc2U7XG4gIHB1YmxpYyByZWNlaXZlTGlnaHQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc3VyZmFjZU5vcm1hbDogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaGFkb3dCaWFzOiBudW1iZXIgPSAxO1xuICBwdWJsaWMgcHJvamVjdFNoYWRvd3M6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFdhbGxSZWNlaXZlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFzaygpOiBMaWdodGluZ0ltYWdlIHwgJ3NvbGlkJyB8IG51bGwge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcubWFzaykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ3VzdG9tTWFzayh0aGlzLmN1c3RvbURyYXcubWFzayk7XG4gICAgfVxuXG4gICAgLy8gQSBiYWNrZ3JvdW5kIGNvbG91ciBjb3ZlcnMgdGhlIHdob2xlIHN1cmZhY2VcbiAgICBpZiAodGhpcy5jb2xvdXIpIHtcbiAgICAgIHJldHVybiAnc29saWQnO1xuICAgIH1cblxuICAgIGNvbnN0IG1hc2sgPSB0aGlzLm1hc2sgPz8gdGhpcy5pbWFnZTtcblxuICAgIHJldHVybiBtYXNrICYmIG1hc2sud2lkdGggPiAwICYmIG1hc2suaGVpZ2h0ID4gMCA/IG1hc2sgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoaXMgc3VyZmFjZSBjYW4gYmUgbWVyZ2VkIHdpdGggYW5vdGhlciBzdXJmYWNlXG4gICAqL1xuICBwdWJsaWMgY2FuTWVyZ2Uob3RoZXI6IFdhbGxSZWNlaXZlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhhc0ltYWdlcyA9XG4gICAgICB0aGlzLmltYWdlIHx8IHRoaXMubWFzayB8fCB0aGlzLm5vcm1hbE1hcCB8fCB0aGlzLnNwZWN1bGFyTWFwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWVyZ2VhYmxlICYmXG4gICAgICBvdGhlci5tZXJnZWFibGUgJiZcbiAgICAgIC8vIE5vbi1yZXBlYXRpbmcgaW1hZ2VzIHdvdWxkIHN0cmV0Y2ggYWNyb3NzIHRoZSBtZXJnZWQgc3VyZmFjZVxuICAgICAgKHRoaXMucmVwZWF0IHx8ICFoYXNJbWFnZXMpICYmXG4gICAgICB0aGlzLnpJbmRleCA9PT0gb3RoZXIuekluZGV4ICYmXG4gICAgICB0aGlzLmNvbG91ciA9PT0gb3RoZXIuY29sb3VyICYmXG4gICAgICB0aGlzLmltYWdlID09PSBvdGhlci5pbWFnZSAmJlxuICAgICAgdGhpcy5tYXNrID09PSBvdGhlci5tYXNrICYmXG4gICAgICB0aGlzLm5vcm1hbE1hcCA9PT0gb3RoZXIubm9ybWFsTWFwICYmXG4gICAgICB0aGlzLnNwZWN1bGFyTWFwID09PSBvdGhlci5zcGVjdWxhck1hcCAmJlxuICAgICAgdGhpcy5yZXBlYXQgPT09IG90aGVyLnJlcGVhdCAmJlxuICAgICAgdGhpcy5yZWNlaXZlTGlnaHQgPT09IG90aGVyLnJlY2VpdmVMaWdodCAmJlxuICAgICAgdmVjLmVxKHRoaXMuc3VyZmFjZU5vcm1hbCwgb3RoZXIuc3VyZmFjZU5vcm1hbCkgJiZcbiAgICAgIHRoaXMuc2hhZG93QmlhcyA9PT0gb3RoZXIuc2hhZG93QmlhcyAmJlxuICAgICAgdGhpcy5wcm9qZWN0U2hhZG93cyA9PT0gb3RoZXIucHJvamVjdFNoYWRvd3NcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBzdXJmYWNlIHRoYXQgY292ZXJzIHRoaXMgc3VyZmFjZSBhbmQgYW5vdGhlciBzdXJmYWNlXG4gICAqL1xuICBwdWJsaWMgbWVyZ2Uob3RoZXI6IFdhbGxSZWNlaXZlcik6IFdhbGxSZWNlaXZlciB7XG4gICAgcmV0dXJuIG5ldyBXYWxsUmVjZWl2ZXIodGhpcy5saWdodGluZywge1xuICAgICAgLi4uKHRoaXMgYXMgV2FsbFJlY2VpdmVyKSxcbiAgICAgIC4uLmJvdW5kaW5nUmVjdGFuZ2xlKHRoaXMsIG90aGVyKSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFJlZ2lvbkNhc3RlciB9IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFdhbGxSZWNlaXZlciwgV2FsbFJlY2VpdmVyT3B0aW9ucyB9IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgeyBMaWdodGluZ0ltYWdlLCBSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgV2FsbE9wdGlvbnMgPSBPbWl0PFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxuICAncG9zaXRpb24nIHwgJ3NpemUnIHwgJ3JlY2VpdmVMaWdodCdcbj4gJiB7XG4gIC8qKlxuICAgKiBUaGUgYXJlYSBvZiB0aGUgZ3JvdW5kIHRoYXQgdGhpcyB3YWxsIHN0YW5kcyBvblxuICAgKi9cbiAgZm9vdHByaW50OiBSZWN0YW5nbGU7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHdhbGwncyBmcm9udCBmYWNlXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHNoYWRvd3MgaW5jbHVkZSB0aGUgd2FsbCdzIGZvb3RwcmludD9cbiAgICovXG4gIGluY2x1ZGVSZWdpb25TaGFkb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBlYXJhbmNlIG9mIHRoZSB0b3Agb2YgdGhlIHdhbGwsIGl0IG9ubHkgcmVjZWl2ZXMgYW1iaWVudCBsaWdodFxuICAgKi9cbiAgdG9wPzoge1xuICAgIGNvbG91cj86IHN0cmluZztcbiAgICBpbWFnZT86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuICB9O1xufTtcblxuLyoqXG4gKiBBIHNvbGlkIHdhbGwgaW4gYSAzLzQgdmlld1xuICpcbiAqIFRoaXMgaXMgbWFkZSBmcm9tIGEgZnJvbnQgZmFjZSB0aGF0IHJlY2VpdmVzIGxpZ2h0LCBhIHRvcCB0aGF0IG9ubHkgcmVjZWl2ZXNcbiAqIGFtYmllbnQgbGlnaHQsIGFuZCBhIGZvb3RwcmludCB0aGF0IGNhc3RzIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGwge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RPUF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyByZWFkb25seSBmcm9udDogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgdG9wOiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSBjYXN0ZXI6IFJlZ2lvbkNhc3RlcjtcblxuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFdhbGxPcHRpb25zKSB7XG4gICAgY29uc3QgeyBmb290cHJpbnQsIGhlaWdodCwgaW5jbHVkZVJlZ2lvblNoYWRvdywgdG9wLCAuLi5mcm9udCB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkUmVnaW9uQ2FzdGVyKHtcbiAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBpbmNsdWRlUmVnaW9uU2hhZG93LFxuICAgIH0pO1xuICAgIHRoaXMuZnJvbnQgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgLi4uZnJvbnQsXG4gICAgICAuLi50aGlzLmZyb250UmVjdGFuZ2xlKGZvb3RwcmludCksXG4gICAgfSk7XG4gICAgdGhpcy50b3AgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgekluZGV4OiBvcHRpb25zLnpJbmRleCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBjb2xvdXI6IHRvcD8uY29sb3VyID8/IFdhbGwuREVGQVVMVF9UT1BfQ09MT1VSLFxuICAgICAgaW1hZ2U6IHRvcD8uaW1hZ2UsXG4gICAgICByZWNlaXZlTGlnaHQ6IGZhbHNlLFxuICAgICAgLi4udGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50OiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IGJvdHRvbSA9IGZvb3RwcmludC5wb3NpdGlvbi55ICsgZm9vdHByaW50LnNpemUueTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjKGZvb3RwcmludC5wb3NpdGlvbi54LCBib3R0b20gLSB0aGlzLmhlaWdodCksXG4gICAgICBzaXplOiB2ZWMoZm9vdHByaW50LnNpemUueCwgdGhpcy5oZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHRvcFJlY3RhbmdsZShmb290cHJpbnQ6IFJlY3RhbmdsZSk6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMoZm9vdHByaW50LnBvc2l0aW9uLngsIGZvb3RwcmludC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogZm9vdHByaW50LnNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgd2FsbCBzbyB0aGF0IGl0cyBmb290cHJpbnQgaXMgYXQgYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYykge1xuICAgIGNvbnN0IGZvb3RwcmludCA9IHsgcG9zaXRpb24sIHNpemU6IHRoaXMuY2FzdGVyLnNpemUgfTtcblxuICAgIHRoaXMuY2FzdGVyLm1vdmVUbyhwb3NpdGlvbik7XG4gICAgdGhpcy5mcm9udC5tb3ZlVG8odGhpcy5mcm9udFJlY3RhbmdsZShmb290cHJpbnQpLnBvc2l0aW9uKTtcbiAgICB0aGlzLnRvcC5tb3ZlVG8odGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KS5wb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgd2FsbCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5mcm9udC5yZW1vdmUoKTtcbiAgICB0aGlzLnRvcC5yZW1vdmUoKTtcbiAgICB0aGlzLmNhc3Rlci5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCBTaWRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyByZWN0YW5nbGVUb0ludGVydmFsIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5jb25zdCBNRVJHRV9NQVhfSVRFUkFUSU9OUyA9IDEwMDtcbmNvbnN0IE1FUkdFX09SREVSID0gWydkdXBsaWNhdGUnLCBTaWRlLkJvdHRvbSwgU2lkZS5SaWdodCwgU2lkZS5Ub3AsIFNpZGUuTGVmdF07XG5cbnR5cGUgTWVyZ2VhYmxlPFQ+ID0gUmVjdGFuZ2xlICYge1xuICBjYW5NZXJnZShvdGhlcjogVCk6IGJvb2xlYW47XG4gIG1lcmdlKG90aGVyOiBUKTogVDtcbn07XG5cbnR5cGUgTWVyZ2U8VD4gPSBbVCwgVCwgU2lkZSB8ICdkdXBsaWNhdGUnXTtcblxuLyoqXG4gKiBGaW5kIHBhaXJzIG9mIGl0ZW1zIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXIgYW5kIGNhbiBiZSBtZXJnZWRcbiAqL1xuZnVuY3Rpb24gZmluZE1lcmdlczxUIGV4dGVuZHMgTWVyZ2VhYmxlPFQ+PihpdGVtczogVFtdKTogTWVyZ2U8VD5bXSB7XG4gIGNvbnN0IHJlc3VsdDogTWVyZ2U8VD5bXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChpdGVtc1tpXSk7XG5cbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgYiA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoaXRlbXNbal0pO1xuXG4gICAgICBpZiAoIWl0ZW1zW2ldLmNhbk1lcmdlKGl0ZW1zW2pdKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQSBhbmQgQiBhcmUgdGhlIHNhbWVcbiAgICAgIGlmIChcbiAgICAgICAgYS50b3AgPT09IGIudG9wICYmXG4gICAgICAgIGEuYm90dG9tID09PSBiLmJvdHRvbSAmJlxuICAgICAgICBhLmxlZnQgPT09IGIubGVmdCAmJlxuICAgICAgICBhLnJpZ2h0ID09PSBiLnJpZ2h0XG4gICAgICApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgJ2R1cGxpY2F0ZSddKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSBib3R0b20gZWRnZSBvZiBBXG4gICAgICBpZiAoYS5ib3R0b20gPT09IGIudG9wICYmIGEubGVmdCA9PT0gYi5sZWZ0ICYmIGEucmlnaHQgPT09IGIucmlnaHQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5Cb3R0b21dKTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIHRvcCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLnRvcCA9PT0gYi5ib3R0b20gJiYgYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS5yaWdodCA9PT0gYi5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlRvcF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgcmlnaHQgZWRnZSBvZiBBXG4gICAgICBpZiAoYS5yaWdodCA9PT0gYi5sZWZ0ICYmIGEudG9wID09PSBiLnRvcCAmJiBhLmJvdHRvbSA9PT0gYi5ib3R0b20pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5SaWdodF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgbGVmdCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLmxlZnQgPT09IGIucmlnaHQgJiYgYS50b3AgPT09IGIudG9wICYmIGEuYm90dG9tID09PSBiLmJvdHRvbSkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkxlZnRdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIE1lcmdlIGl0ZW1zIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXIgYW5kIHBlcmZlY3RseSBjb25uZWN0ZWQgb24gb25lXG4gKiBzaWRlLCBvciBhcmUgZXhhY3QgZHVwbGljYXRlcyBvZiBlYWNoIG90aGVyXG4gKlxuICogYG9uTWVyZ2VgIGlzIGNhbGxlZCBlYWNoIHRpbWUgMiBpdGVtcyBhcmUgcmVwbGFjZWQgd2l0aCBhIHNpbmdsZSBpdGVtLiBJZlxuICogdGhlIGl0ZW1zIHdlcmUgZHVwbGljYXRlcywgdGhlIG1lcmdlZCBpdGVtIGlzIHRoZSBmaXJzdCBpdGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxUIGV4dGVuZHMgTWVyZ2VhYmxlPFQ+PihcbiAgaXRlbXM6IFRbXSxcbiAgb25NZXJnZT86IChtZXJnZWQ6IFQsIGE6IFQsIGI6IFQpID0+IHZvaWRcbik6IFRbXSB7XG4gIC8vIFNvcnQgaXRlbXMgYnkgeS1wb3NpdGlvbiB0aGVuIHgtcG9zaXRpb25cbiAgbGV0IHJlc3VsdCA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLnBvc2l0aW9uLnkgPT09IGIucG9zaXRpb24ueSkge1xuICAgICAgcmV0dXJuIGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueDtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5wb3NpdGlvbi55IC0gYi5wb3NpdGlvbi55O1xuICB9KTtcblxuICBsZXQgaSA9IDA7XG4gIGxldCBtZXJnZXM6IE1lcmdlPFQ+W107XG4gIHdoaWxlIChcbiAgICAobWVyZ2VzID0gZmluZE1lcmdlcyhyZXN1bHQpKS5sZW5ndGggPiAwICYmXG4gICAgaSsrIDwgTUVSR0VfTUFYX0lURVJBVElPTlNcbiAgKSB7XG4gICAgLy8gTWVyZ2UgaXRlbXMgaW4gYSBzcGVjaWZpYyBvcmRlciAoZS5nLiBpdGVtcyB0aGF0IGNvbm5lY3Qgb24gdGhlIGJvdHRvbVxuICAgIC8vIGZhY2UgZmlyc3QsIG9yIGl0ZW1zIHRoYXQgYXJlIGV4YWN0IGR1cGxpY2F0ZXMgZmlyc3QsIGV0Yy4pXG4gICAgbWVyZ2VzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gTUVSR0VfT1JERVIuaW5kZXhPZihhWzJdKSAtIE1FUkdFX09SREVSLmluZGV4T2YoYlsyXSlcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCBbYSwgYiwgc2lkZV0gb2YgbWVyZ2VzKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGl0ZW1zIHN0aWxsIGV4aXN0ICh0aGV5IG1pZ2h0IGhhdmUgYmVlbiBtZXJnZWQgYW5kXG4gICAgICAvLyByZW1vdmVkIGluIGEgcHJldmlvdXMgaXRlcmF0aW9uKVxuICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMoYSkgfHwgIXJlc3VsdC5pbmNsdWRlcyhiKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNpZGUgPT09ICdkdXBsaWNhdGUnKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBiKTtcbiAgICAgICAgb25NZXJnZT8uKGEsIGEsIGIpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVyZ2VkID0gYS5tZXJnZShiKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBhICYmIGl0ZW0gIT09IGIpO1xuICAgICAgcmVzdWx0LnB1c2gobWVyZ2VkKTtcbiAgICAgIG9uTWVyZ2U/LihtZXJnZWQsIGEsIGIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG4vKipcbiAqIEFuIGltYWdlIHRoYXQgY2FuIGJlIGRyYXduIG9udG8gYSBjYW52YXNcbiAqL1xuZXhwb3J0IHR5cGUgTGlnaHRpbmdJbWFnZSA9IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudDtcblxuLyoqXG4gKiBUaGUgcGFydHMgb2YgYSBjYW1lcmEgdGhhdCBhcmUgdXNlZCBieSB0aGUgbGlnaHRpbmcgc3lzdGVtLCB0aGlzIGlzXG4gKiBjb21wYXRpYmxlIHdpdGggQGJhc2VtZW50dW5pdmVyc2UvY2FtZXJhXG4gKi9cbmV4cG9ydCB0eXBlIExpZ2h0aW5nQ2FtZXJhID0ge1xuICBib3VuZHM6IEludGVydmFsMmQ7XG4gIHdvcmxkVG9TY3JlZW4ocG9zaXRpb246IHZlYyk6IHZlYztcbiAgc2V0VHJhbnNmb3Jtcyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkO1xufTtcblxuZXhwb3J0IHR5cGUgQ29sb3VyID0ge1xuICByOiBudW1iZXI7XG4gIGc6IG51bWJlcjtcbiAgYjogbnVtYmVyO1xuICBhOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBMaW5lID0ge1xuICBzdGFydDogdmVjO1xuICBlbmQ6IHZlYztcbn07XG5cbmV4cG9ydCB0eXBlIEludGVydmFsMWQgPSB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJ2YWwyZCA9IHtcbiAgdG9wOiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZW51bSBTZWN0b3IxZCB7XG4gIEJlZm9yZSA9ICdiZWZvcmUnLFxuICBJbnNpZGUgPSAnaW5zaWRlJyxcbiAgQWZ0ZXIgPSAnYWZ0ZXInLFxufVxuXG5leHBvcnQgZW51bSBTZWN0b3IyZCB7XG4gIFRvcExlZnQgPSAndG9wLWxlZnQnLFxuICBUb3AgPSAndG9wJyxcbiAgVG9wUmlnaHQgPSAndG9wLXJpZ2h0JyxcbiAgTGVmdCA9ICdsZWZ0JyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcbiAgQm90dG9tTGVmdCA9ICdib3R0b20tbGVmdCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBCb3R0b21SaWdodCA9ICdib3R0b20tcmlnaHQnLFxufVxuXG5leHBvcnQgdHlwZSBSZWN0YW5nbGUgPSB7XG4gIHBvc2l0aW9uOiB2ZWM7XG4gIHNpemU6IHZlYztcbn07XG5cbmV4cG9ydCB0eXBlIFBvbHlnb25WZXJ0aWNlcyA9IChcbiAgfCB2ZWNcbiAgfCAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZClcbilbXTtcblxuZXhwb3J0IGVudW0gU2lkZSB7XG4gIFRvcCA9ICd0b3AnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBMZWZ0ID0gJ2xlZnQnLFxufVxuIiwiaW1wb3J0IHsgZmxvYXRFcXVhbHMsIGxlcnAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBJbnRlcnZhbDFkLFxuICBJbnRlcnZhbDJkLFxuICBMaWdodGluZ0ltYWdlLFxuICBMaW5lLFxuICBQb2x5Z29uVmVydGljZXMsXG4gIFJlY3RhbmdsZSxcbiAgU2VjdG9yMWQsXG4gIFNlY3RvcjJkLFxufSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBHZXQgdGhlIG1pbmltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWluVmVjKC4uLnZlY3RvcnM6IHZlY1tdKTogdmVjIHtcbiAgcmV0dXJuIHZlY3RvcnMucmVkdWNlKFxuICAgIChtaW4sIHYpID0+IHZlYyhNYXRoLm1pbihtaW4ueCwgdi54KSwgTWF0aC5taW4obWluLnksIHYueSkpLFxuICAgIHZlYyhJbmZpbml0eSwgSW5maW5pdHkpXG4gICk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBtYXhpbXVtIG9mIGEgc2V0IG9mIHZlY3RvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heFZlYyguLi52ZWN0b3JzOiB2ZWNbXSk6IHZlYyB7XG4gIHJldHVybiB2ZWN0b3JzLnJlZHVjZShcbiAgICAobWF4LCB2KSA9PiB2ZWMoTWF0aC5tYXgobWF4LngsIHYueCksIE1hdGgubWF4KG1heC55LCB2LnkpKSxcbiAgICB2ZWMoLUluZmluaXR5LCAtSW5maW5pdHkpXG4gICk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzbWFsbGVzdCByZWN0YW5nbGUgdGhhdCBjb250YWlucyAyIHJlY3RhbmdsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kaW5nUmVjdGFuZ2xlKGE6IFJlY3RhbmdsZSwgYjogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgY29uc3QgcG9zaXRpb24gPSBtaW5WZWMoYS5wb3NpdGlvbiwgYi5wb3NpdGlvbik7XG4gIGNvbnN0IGJvdHRvbVJpZ2h0ID0gbWF4VmVjKFxuICAgIHZlYy5hZGQoYS5wb3NpdGlvbiwgYS5zaXplKSxcbiAgICB2ZWMuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSlcbiAgKTtcblxuICByZXR1cm4geyBwb3NpdGlvbiwgc2l6ZTogdmVjLnN1Yihib3R0b21SaWdodCwgcG9zaXRpb24pIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIGNvbG91ciBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvdXJUb1N0cmluZyhjb2xvdXI6IENvbG91cik6IHN0cmluZyB7XG4gIHJldHVybiBgcmdiYSgke2NvbG91ci5yfSwgJHtjb2xvdXIuZ30sICR7Y29sb3VyLmJ9LCAke2NvbG91ci5hfSlgO1xufVxuXG4vKipcbiAqIExpbmVhciBpbnRlcnBvbGF0ZSBiZXR3ZWVuIDIgY29sb3Vyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycENvbG91cihhOiBDb2xvdXIsIGI6IENvbG91ciwgaTogbnVtYmVyKSB7XG4gIHJldHVybiB7XG4gICAgcjogbGVycChhLnIsIGIuciwgaSksXG4gICAgZzogbGVycChhLmcsIGIuZywgaSksXG4gICAgYjogbGVycChhLmIsIGIuYiwgaSksXG4gICAgYTogbGVycChhLmEsIGIuYSwgaSksXG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBsaW5lIHNlZ21lbnQncyBub3JtYWwgaXMgZmFjaW5nIHRvd2FyZHMgYSBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZUlzRmFjaW5nKGxpbmU6IExpbmUsIHBvc2l0aW9uOiB2ZWMpIHtcbiAgY29uc3QgZWRnZSA9IHZlYy5ub3IodmVjLnN1YihsaW5lLmVuZCwgbGluZS5zdGFydCkpO1xuICBjb25zdCBlZGdlTm9ybWFsID0gdmVjKGVkZ2UueSwgLWVkZ2UueCk7XG4gIGNvbnN0IGxpZ2h0Tm9ybWFsID0gdmVjLm5vcihcbiAgICB2ZWMuc3ViKHZlYy5tdWwodmVjLmFkZChsaW5lLnN0YXJ0LCBsaW5lLmVuZCksIDAuNSksIHBvc2l0aW9uKVxuICApO1xuXG4gIHJldHVybiB2ZWMuZG90KGxpZ2h0Tm9ybWFsLCBlZGdlTm9ybWFsKSA8PSAwO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSAyZCBpbnRlcnZhbCB0byBhIHJlY3RhbmdsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJ2YWxUb1JlY3RhbmdsZShpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IFJlY3RhbmdsZSB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHZlYyhpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC50b3ApLFxuICAgIHNpemU6IHZlYyhpbnRlcnZhbC5yaWdodCAtIGludGVydmFsLmxlZnQsIGludGVydmFsLmJvdHRvbSAtIGludGVydmFsLnRvcCksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIHJlY3RhbmdsZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVUb0ludGVydmFsKHJlY3RhbmdsZTogUmVjdGFuZ2xlKTogSW50ZXJ2YWwyZCB7XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgcmlnaHQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54ICsgcmVjdGFuZ2xlLnNpemUueCxcbiAgICB0b3A6IHJlY3RhbmdsZS5wb3NpdGlvbi55LFxuICAgIGJvdHRvbTogcmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyByZWN0YW5nbGUuc2l6ZS55LFxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIDIgQUFCQnMgaW50ZXJzZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVzSW50ZXJzZWN0KGE6IFJlY3RhbmdsZSwgYjogUmVjdGFuZ2xlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRsMSA9IGEucG9zaXRpb247XG4gIGNvbnN0IGJyMSA9IHZlYy5hZGQoYS5wb3NpdGlvbiwgYS5zaXplKTtcbiAgY29uc3QgdGwyID0gYi5wb3NpdGlvbjtcbiAgY29uc3QgYnIyID0gdmVjLmFkZChiLnBvc2l0aW9uLCBiLnNpemUpO1xuXG4gIHJldHVybiB0bDEueCA8IGJyMi54ICYmIGJyMS54ID4gdGwyLnggJiYgdGwxLnkgPCBicjIueSAmJiBicjEueSA+IHRsMi55O1xufVxuXG4vKipcbiAqIEdldCBhbiBhcnJheSBvZiB2ZXJ0aWNlcyBmb3IgYSByZWN0YW5nbGUgaW4gQ1cgd2luZGluZyBvcmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVmVydGljZXMocmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB2ZWNbXSB7XG4gIGNvbnN0IHRsID0gcmVjdGFuZ2xlLnBvc2l0aW9uO1xuICBjb25zdCBiciA9IHZlYy5hZGQocmVjdGFuZ2xlLnBvc2l0aW9uLCByZWN0YW5nbGUuc2l6ZSk7XG5cbiAgcmV0dXJuIFtyZWN0YW5nbGUucG9zaXRpb24sIHZlYyhici54LCB0bC55KSwgYnIsIHZlYyh0bC54LCBici55KV07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcG9seWdvbiBwYXRoIG9uIGEgY2FudmFzIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb24oXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgLi4udmVydGljZXM6IFBvbHlnb25WZXJ0aWNlc1xuKSB7XG4gIGlmICh2ZXJ0aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBpZiAodHlwZW9mIHZlcnRpY2VzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmVydGljZXNbMF0oY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5tb3ZlVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdmVydGljZXNbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICh2ZXJ0aWNlc1tpXSBhcyBGdW5jdGlvbikoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQubGluZVRvKCh2ZXJ0aWNlc1tpXSBhcyB2ZWMpLngsICh2ZXJ0aWNlc1tpXSBhcyB2ZWMpLnkpO1xuICAgIH1cbiAgfVxuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdG9yIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG8gYSAxZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VjdG9yMWQobjogbnVtYmVyLCBpbnRlcnZhbDogSW50ZXJ2YWwxZCk6IFNlY3RvcjFkIHtcbiAgaWYgKG4gPD0gaW50ZXJ2YWwuc3RhcnQpIHtcbiAgICByZXR1cm4gU2VjdG9yMWQuQmVmb3JlO1xuICB9XG5cbiAgaWYgKG4gPj0gaW50ZXJ2YWwuZW5kKSB7XG4gICAgcmV0dXJuIFNlY3RvcjFkLkFmdGVyO1xuICB9XG5cbiAgcmV0dXJuIFNlY3RvcjFkLkluc2lkZTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3RvciBvZiBhIHBvaW50IHJlbGF0aXZlIHRvIGEgMmQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3RvcjJkKHBvaW50OiB2ZWMsIGludGVydmFsOiBJbnRlcnZhbDJkKTogU2VjdG9yMmQge1xuICBjb25zdCB4ID0gc2VjdG9yMWQocG9pbnQueCwgeyBzdGFydDogaW50ZXJ2YWwubGVmdCwgZW5kOiBpbnRlcnZhbC5yaWdodCB9KTtcbiAgY29uc3QgeSA9IHNlY3RvcjFkKHBvaW50LnksIHsgc3RhcnQ6IGludGVydmFsLnRvcCwgZW5kOiBpbnRlcnZhbC5ib3R0b20gfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBbU2VjdG9yMWQuQmVmb3JlXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcExlZnQsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbUxlZnQsXG4gICAgfSxcbiAgICBbU2VjdG9yMWQuSW5zaWRlXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5JbnNpZGUsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b20sXG4gICAgfSxcbiAgICBbU2VjdG9yMWQuQWZ0ZXJdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wUmlnaHQsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuUmlnaHQsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b21SaWdodCxcbiAgICB9LFxuICB9W3hdW3ldO1xufVxuXG4vKipcbiAqIERyYXcgYW4gaW1hZ2UgaW50byBhIHJlY3RhbmdsZSwgZWl0aGVyIHJlcGVhdGluZyBpdCBvciBzdHJldGNoaW5nIGl0IHRvIGZpdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd0ltYWdlSW5SZWN0YW5nbGUoXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UsXG4gIHJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICByZXBlYXQ6IGJvb2xlYW5cbikge1xuICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSByZWN0YW5nbGU7XG5cbiAgaWYgKCFyZXBlYXQpIHtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm4gPSBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsICdyZXBlYXQnKTtcbiAgaWYgKHBhdHRlcm4pIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0LnJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG59XG5cbmNvbnN0IHNpbGhvdWV0dGVzID0gbmV3IFdlYWtNYXA8TGlnaHRpbmdJbWFnZSwgSFRNTENhbnZhc0VsZW1lbnQ+KCk7XG5cbi8qKlxuICogR2V0IGEgYmxhY2sgY29weSBvZiBhbiBpbWFnZSB3aGljaCBrZWVwcyB0aGUgaW1hZ2UncyBhbHBoYSBjaGFubmVsLCBvciBudWxsXG4gKiBpZiB0aGUgaW1hZ2UgaGFzbid0IGxvYWRlZCB5ZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbGhvdWV0dGUoaW1hZ2U6IExpZ2h0aW5nSW1hZ2UpOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwge1xuICBpZiAoaW1hZ2Uud2lkdGggPT09IDAgfHwgaW1hZ2UuaGVpZ2h0ID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmICFpbWFnZS5jb21wbGV0ZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHNpbGhvdWV0dGVzLmdldChpbWFnZSk7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgcmVzdWx0LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgcmVzdWx0LmhlaWdodCA9IGltYWdlLmhlaWdodDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSByZXN1bHQuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgcmVzdWx0LndpZHRoLCByZXN1bHQuaGVpZ2h0KTtcblxuICAgIHNpbGhvdWV0dGVzLnNldChpbWFnZSwgcmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiZXhwb3J0IHsgQWN0b3IgfSBmcm9tICcuL0FjdG9yJztcbmV4cG9ydCB0eXBlIHsgQWN0b3JPcHRpb25zLCBBY3RvclNoYWRvdyB9IGZyb20gJy4vQWN0b3InO1xuZXhwb3J0IHsgQ2lyY2xlQ2FzdGVyLCBSZWdpb25DYXN0ZXIsIFNwcml0ZUNhc3RlciB9IGZyb20gJy4vQ2FzdGVyJztcbmV4cG9ydCB0eXBlIHtcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgUmVnaW9uQ2FzdGVyT3B0aW9ucyxcbiAgU2hhZG93Q2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5leHBvcnQgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuZXhwb3J0IHR5cGUgeyBMaWdodE9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0JztcbmV4cG9ydCB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5leHBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtT3B0aW9ucyB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuZXhwb3J0IHsgU2NlbmVPYmplY3QgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmV4cG9ydCB0eXBlIHsgU2NlbmVPYmplY3RPcHRpb25zIH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5leHBvcnQgeyBHcm91bmRSZWNlaXZlciwgU3VyZmFjZSwgV2FsbFJlY2VpdmVyIH0gZnJvbSAnLi9TdXJmYWNlJztcbmV4cG9ydCB0eXBlIHtcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBTdXJmYWNlT3B0aW9ucyxcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9TdXJmYWNlJztcbmV4cG9ydCB0eXBlIHsgTGlnaHRpbmdDYW1lcmEsIExpZ2h0aW5nSW1hZ2UsIFJlY3RhbmdsZSB9IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IHsgV2FsbCB9IGZyb20gJy4vV2FsbCc7XG5leHBvcnQgdHlwZSB7IFdhbGxPcHRpb25zIH0gZnJvbSAnLi9XYWxsJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==