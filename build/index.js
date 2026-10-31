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
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
class Actor {
    constructor(lighting, options) {
        this.caster = null;
        const { shadow = 'sprite', ...surface } = options;
        const { type, footprintHeight, ...casterOptions } = (typeof shadow === 'string' ? { type: shadow } : shadow);
        this.footprintHeight =
            footprintHeight !== null && footprintHeight !== void 0 ? footprintHeight : options.size.y * Actor.DEFAULT_FOOTPRINT_SCALE;
        this.surface = lighting.addWallReceiver({
            layer: types_1.WallShadowLayer.Two,
            mergeable: false,
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
const INTERCEPT_X = 0;
const INTERCEPT_T = 1;
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
        this.groundLightCanvas = document.createElement('canvas');
        this.groundLightCanvas.width = this.groundLightCanvas.height =
            this._radius * 2;
        this.groundLightContext = this.groundLightCanvas.getContext('2d');
        this.wallLight1Canvas = document.createElement('canvas');
        this.wallLight1Canvas.width = this.wallLight1Canvas.height =
            this._radius * 2;
        this.wallLight1Context = this.wallLight1Canvas.getContext('2d');
        this.wallLight2Canvas = document.createElement('canvas');
        this.wallLight2Canvas.width = this.wallLight2Canvas.height =
            this._radius * 2;
        this.wallLight2Context = this.wallLight2Canvas.getContext('2d');
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
    prepare(groundShadowReceivers, wallShadowReceivers, regionShadowCasters, spriteShadowCasters, circleShadowCasters) {
        if (this.dirty) {
            this.prepareLightMap();
        }
        const lightRectangle = this.bounds;
        this.resetLightContext(this.groundLightContext);
        this.groundLightContext.drawImage(this.lightCanvas, 0, 0);
        let regionShadows = [];
        let spriteShadows = [];
        let circleShadows = [];
        if (this.castShadows) {
            regionShadows = this.prepareGroundRegionShadows(lightRectangle, regionShadowCasters);
            spriteShadows = this.prepareGroundSpriteShadows(lightRectangle, spriteShadowCasters);
            circleShadows = this.prepareGroundCircleShadows(lightRectangle, circleShadowCasters);
        }
        this.resetLightContext(this.wallLight1Context);
        this.wallLight1Context.drawImage(this.lightCanvas, 0, 0);
        this.resetLightContext(this.wallLight2Context);
        this.wallLight2Context.drawImage(this.lightCanvas, 0, 0);
        this.prepareFullWallShadows(this.wallLight1Context, lightRectangle, wallShadowReceivers);
        this.prepareFullWallShadows(this.wallLight2Context, lightRectangle, wallShadowReceivers);
        if (this.castShadows) {
            this.prepareWallRegionShadows(lightRectangle, regionShadows, regionShadowCasters, wallShadowReceivers);
            this.prepareWallSpriteShadows(lightRectangle, spriteShadows, wallShadowReceivers);
            this.prepareWallCircleShadows(lightRectangle, circleShadows, wallShadowReceivers);
        }
    }
    resetLightContext(context) {
        const size = Math.floor(this._radius * 2);
        if (context.canvas.width !== size) {
            context.canvas.width = context.canvas.height = size;
        }
        context.imageSmoothingEnabled =
            this.lightingSystem.options.imageSmoothingEnabled;
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
    prepareFullWallShadows(context, lightRectangle, wallShadowReceivers) {
        context.save();
        context.translate(-this.position.x + this._radius, -this.position.y +
            this._radius -
            this.lightingSystem.options.wallLightingYOffset);
        for (const wall of wallShadowReceivers) {
            const wallRectangle = {
                position: wall.position,
                size: wall.size,
            };
            const wallInterval = (0, utilities_1.rectangleToInterval)(wallRectangle);
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, wallRectangle)) {
                if (!wall.receiveLight) {
                    wall.drawMask(context);
                    continue;
                }
                if (this.position.y < wallInterval.bottom) {
                    context.save();
                    context.globalAlpha = (0, utils_1.clamp)((0, utils_1.remap)(wallInterval.bottom - this.position.y, 0, this.lightingSystem.options.wallLightingCutoffDistance, 0, 1), 0, 1);
                    wall.drawMask(context);
                    context.restore();
                }
            }
        }
        context.restore();
    }
    prepareGroundRegionShadows(lightRectangle, regionShadowCasters) {
        this.groundLightContext.save();
        this.groundLightContext.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(this.groundLightContext);
        this.groundLightContext.translate(-this.position.x + this._radius, -this.position.y + this._radius);
        const shadows = [];
        for (const caster of regionShadowCasters) {
            const casterRectangle = {
                position: caster.position,
                size: caster.size,
            };
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, casterRectangle)) {
                const shadow = {
                    caster,
                    ...this.prepareRegionShadow(casterRectangle, caster.includeRegionShadow),
                };
                shadows.push((0, utils_1.exclude)(shadow, 'vertices'));
                (0, utilities_1.polygon)(this.groundLightContext, ...shadow.vertices);
                this.groundLightContext.fill();
            }
        }
        this.groundLightContext.restore();
        return shadows;
    }
    prepareGroundSpriteShadows(lightRectangle, spriteShadowCasters) {
        var _a;
        this.groundLightContext.save();
        this.lightingSystem.setupSoftShadows(this.groundLightContext);
        this.groundLightContext.translate(this._radius, this._radius);
        const shadows = [];
        for (const caster of spriteShadowCasters) {
            const casterRectangle = {
                position: caster.position,
                size: caster.size,
            };
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, casterRectangle)) {
                const shadowSprite = caster.getShadow();
                if (!shadowSprite) {
                    continue;
                }
                const shadowOrigin = vec_1.vec.add(caster.position, (0, vec_1.vec)(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y));
                const shadowLength = (0, utils_1.smoothstep)(caster.minShadowLength, (_a = caster.maxShadowLength) !== null && _a !== void 0 ? _a : this.radius, (0, utils_1.unlerp)(0, this.radius, vec_1.vec.len(vec_1.vec.sub(shadowOrigin, this.position))));
                const shadowEdge = vec_1.vec.mul(vec_1.vec.nor(vec_1.vec.sub(shadowOrigin, this.position)), shadowLength);
                const shadowEdgeLength = vec_1.vec.len(shadowEdge);
                const shadowAngle = vec_1.vec.rad(shadowEdge) + HALF_PI;
                this.groundLightContext.save();
                this.groundLightContext.translate(shadowOrigin.x - this.position.x, shadowOrigin.y - this.position.y);
                this.groundLightContext.rotate(shadowAngle);
                this.groundLightContext.drawImage(shadowSprite, -caster.size.x * caster.offset.x, -shadowEdgeLength * caster.offset.y, caster.size.x, shadowEdgeLength);
                this.groundLightContext.restore();
                const leftCorner = vec_1.vec.rot((0, vec_1.vec)(caster.size.x * caster.offset.x, 0), shadowAngle);
                const rightCorner = vec_1.vec.rot((0, vec_1.vec)(caster.size.x * (1 - caster.offset.x), 0), shadowAngle);
                shadows.push({
                    caster,
                    leftEdge: {
                        start: vec_1.vec.sub(shadowOrigin, leftCorner),
                        end: vec_1.vec.sub(vec_1.vec.add(shadowOrigin, shadowEdge), leftCorner),
                    },
                    rightEdge: {
                        start: vec_1.vec.add(shadowOrigin, rightCorner),
                        end: vec_1.vec.add(vec_1.vec.add(shadowOrigin, shadowEdge), rightCorner),
                    },
                });
            }
        }
        this.groundLightContext.restore();
        return shadows;
    }
    prepareGroundCircleShadows(lightRectangle, circleShadowCasters) {
        var _a;
        this.groundLightContext.save();
        this.groundLightContext.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(this.groundLightContext);
        this.groundLightContext.translate(this._radius, this._radius);
        const shadows = [];
        for (const caster of circleShadowCasters) {
            const casterRectangle = {
                position: caster.position,
                size: caster.size,
            };
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, casterRectangle)) {
                const shadowOrigin = vec_1.vec.add(caster.position, (0, vec_1.vec)(caster.size.x * caster.anchor.x, caster.size.y * caster.anchor.y));
                const shadowDistance = (0, utils_1.smoothstep)(caster.minShadowDistance, (_a = caster.maxShadowDistance) !== null && _a !== void 0 ? _a : this.radius, (0, utils_1.unlerp)(0, this.radius, vec_1.vec.len(vec_1.vec.sub(shadowOrigin, this.position))));
                const shadowPosition = vec_1.vec.mul(vec_1.vec.nor(vec_1.vec.sub(shadowOrigin, this.position)), shadowDistance);
                const shadowSize = vec_1.vec.mul(caster.size, 0.5);
                this.groundLightContext.save();
                this.groundLightContext.globalAlpha = caster.alpha;
                this.groundLightContext.translate(shadowOrigin.x - this.position.x, shadowOrigin.y - this.position.y);
                this.groundLightContext.beginPath();
                this.groundLightContext.ellipse(shadowPosition.x, shadowPosition.y, shadowSize.x, shadowSize.y, 0, 0, Math.PI * 2);
                this.groundLightContext.fill();
                this.groundLightContext.restore();
                shadows.push({
                    caster,
                    leftEdge: null,
                    rightEdge: null,
                    position: vec_1.vec.add(shadowOrigin, shadowPosition),
                    size: shadowSize,
                });
            }
        }
        this.groundLightContext.restore();
        return shadows;
    }
    prepareWallRegionShadows(lightRectangle, regionShadows, regionShadowCasters, wallShadowReceivers) {
        this.wallLight1Context.save();
        this.wallLight1Context.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(this.wallLight1Context);
        this.wallLight1Context.translate(-this.position.x + this._radius, -this.position.y +
            this._radius -
            this.lightingSystem.options.wallLightingYOffset);
        this.wallLight2Context.save();
        this.wallLight2Context.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(this.wallLight2Context);
        this.wallLight2Context.translate(-this.position.x + this._radius, -this.position.y +
            this._radius -
            this.lightingSystem.options.wallLightingYOffset);
        for (const wall of wallShadowReceivers) {
            const wallRectangle = {
                position: wall.position,
                size: wall.size,
            };
            const wallInterval = (0, utilities_1.rectangleToInterval)(wallRectangle);
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, wallRectangle)) {
                if (!wall.receiveLight) {
                    continue;
                }
                for (const shadow of regionShadows) {
                    const shadowCasterRectangle = {
                        position: shadow.caster.position,
                        size: shadow.caster.size,
                    };
                    const shadowCasterInterval = (0, utilities_1.rectangleToInterval)(shadowCasterRectangle);
                    if ((0, utilities_1.rectanglesIntersect)(wallRectangle, shadowCasterRectangle)) {
                        continue;
                    }
                    if (shadow.leftEdge === null && shadow.rightEdge === null) {
                        continue;
                    }
                    if (shadow.leftEdge &&
                        shadow.leftEdge.start.y <= shadow.leftEdge.end.y &&
                        shadow.rightEdge &&
                        shadow.rightEdge.start.y <= shadow.rightEdge.end.y) {
                        continue;
                    }
                    if (wallInterval.bottom > shadowCasterInterval.bottom) {
                        continue;
                    }
                    if (shadowCasterInterval.top <= wallInterval.bottom &&
                        shadowCasterInterval.bottom >= wallInterval.bottom) {
                        if (shadowCasterInterval.right <= wallInterval.left) {
                            if ((shadow.rightEdge === null ||
                                shadow.rightEdge.start.x >= shadow.rightEdge.end.x) &&
                                (shadow.leftEdge === null ||
                                    shadow.leftEdge.start.x >= shadow.leftEdge.end.x)) {
                                continue;
                            }
                        }
                        if (shadowCasterInterval.left >= wallInterval.right) {
                            if ((shadow.rightEdge === null ||
                                shadow.rightEdge.start.x <= shadow.rightEdge.end.x) &&
                                (shadow.leftEdge === null ||
                                    shadow.leftEdge.start.x <= shadow.leftEdge.end.x)) {
                                continue;
                            }
                        }
                    }
                    if (wallInterval.bottom === shadowCasterInterval.bottom &&
                        !regionShadowCasters.some(c => {
                            const casterInterval = (0, utilities_1.rectangleToInterval)({
                                position: c.position,
                                size: c.size,
                            });
                            return (casterInterval.top === shadowCasterInterval.bottom &&
                                (0, utilities_1.overlap1d)({
                                    start: casterInterval.left,
                                    end: casterInterval.right,
                                }, {
                                    start: shadowCasterInterval.left,
                                    end: shadowCasterInterval.right,
                                }) !== null);
                        })) {
                        continue;
                    }
                    let leftIntercept = null;
                    if (shadow.leftEdge) {
                        const leftInterceptResult = (0, utilities_1.lineYIntercept)(shadow.leftEdge, wallInterval.bottom);
                        if (leftInterceptResult) {
                            [leftIntercept] = leftInterceptResult;
                        }
                        if (shadow.leftEdge.start.y < shadow.leftEdge.end.y) {
                            leftIntercept = wallInterval.left;
                        }
                    }
                    let rightIntercept = null;
                    if (shadow.rightEdge) {
                        const rightInterceptResult = (0, utilities_1.lineYIntercept)(shadow.rightEdge, wallInterval.bottom);
                        if (rightInterceptResult) {
                            [rightIntercept] = rightInterceptResult;
                        }
                        if (shadow.rightEdge.start.y < shadow.rightEdge.end.y) {
                            rightIntercept = wallInterval.right;
                        }
                    }
                    const min = Math.max(wallInterval.left, leftIntercept !== null && leftIntercept !== void 0 ? leftIntercept : -Infinity);
                    const max = Math.min(wallInterval.right, rightIntercept !== null && rightIntercept !== void 0 ? rightIntercept : Infinity);
                    if (min >= max) {
                        continue;
                    }
                    if (min > wallInterval.right || max < wallInterval.left) {
                        continue;
                    }
                    if ((0, utilities_1.overlap1d)({
                        start: min,
                        end: max,
                    }, {
                        start: wallInterval.left,
                        end: wallInterval.right,
                    })) {
                        let context;
                        switch (wall.layer) {
                            case types_1.WallShadowLayer.One:
                                context = this.wallLight1Context;
                                break;
                            case types_1.WallShadowLayer.Two:
                                context = this.wallLight2Context;
                                break;
                        }
                        context.fillRect(min, wallInterval.top, max - min, wall.size.y);
                    }
                }
            }
        }
        this.wallLight1Context.restore();
        this.wallLight2Context.restore();
    }
    prepareWallSpriteShadows(lightRectangle, spriteShadows, wallShadowReceivers) {
        this.wallLight1Context.save();
        this.lightingSystem.setupSoftShadows(this.wallLight1Context);
        this.wallLight1Context.translate(-this.position.x + this._radius, -this.position.y +
            this._radius -
            this.lightingSystem.options.wallLightingYOffset);
        this.wallLight2Context.save();
        this.lightingSystem.setupSoftShadows(this.wallLight2Context);
        this.wallLight2Context.translate(-this.position.x + this._radius, -this.position.y +
            this._radius -
            this.lightingSystem.options.wallLightingYOffset);
        for (const wall of wallShadowReceivers) {
            const wallRectangle = {
                position: wall.position,
                size: wall.size,
            };
            const wallInterval = (0, utilities_1.rectangleToInterval)(wallRectangle);
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, wallRectangle)) {
                if (!wall.receiveLight) {
                    continue;
                }
                for (const shadow of spriteShadows) {
                    const shadowSprite = shadow.caster.getShadow();
                    if (!shadowSprite) {
                        continue;
                    }
                    const shadowCasterRectangle = {
                        position: shadow.caster.position,
                        size: shadow.caster.size,
                    };
                    const shadowCasterInterval = (0, utilities_1.rectangleToInterval)(shadowCasterRectangle);
                    if ((0, utilities_1.rectanglesIntersect)(wallRectangle, shadowCasterRectangle)) {
                        continue;
                    }
                    if (shadow.leftEdge === null && shadow.rightEdge === null) {
                        continue;
                    }
                    if (shadow.leftEdge &&
                        shadow.leftEdge.start.y <= shadow.leftEdge.end.y &&
                        shadow.rightEdge &&
                        shadow.rightEdge.start.y <= shadow.rightEdge.end.y) {
                        continue;
                    }
                    if (wallInterval.bottom > shadowCasterInterval.bottom) {
                        continue;
                    }
                    let leftIntercept = null;
                    if (shadow.leftEdge &&
                        shadow.leftEdge.start.y > shadow.leftEdge.end.y) {
                        leftIntercept = (0, utilities_1.lineYIntercept)(shadow.leftEdge, wallInterval.bottom, false);
                    }
                    let rightIntercept = null;
                    if (shadow.rightEdge &&
                        shadow.rightEdge.start.y > shadow.rightEdge.end.y) {
                        rightIntercept = (0, utilities_1.lineYIntercept)(shadow.rightEdge, wallInterval.bottom, false);
                    }
                    if (shadow.rightEdge &&
                        leftIntercept !== null &&
                        rightIntercept === null) {
                        rightIntercept = (0, utilities_1.lineYIntercept)(shadow.rightEdge, wallInterval.bottom);
                    }
                    if (shadow.leftEdge &&
                        leftIntercept === null &&
                        rightIntercept !== null) {
                        leftIntercept = (0, utilities_1.lineYIntercept)(shadow.leftEdge, wallInterval.bottom);
                    }
                    if (leftIntercept === null || rightIntercept === null) {
                        continue;
                    }
                    if (leftIntercept[INTERCEPT_X] >= rightIntercept[INTERCEPT_X]) {
                        continue;
                    }
                    if (leftIntercept[INTERCEPT_X] > wallInterval.right ||
                        rightIntercept[INTERCEPT_X] < wallInterval.left) {
                        continue;
                    }
                    const t = (leftIntercept[INTERCEPT_T] + rightIntercept[INTERCEPT_T]) / 2 +
                        this.lightingSystem.options.spriteWallShadowInterceptOffset;
                    const l = (vec_1.vec.len(vec_1.vec.sub(shadow.leftEdge.start, shadow.leftEdge.end)) +
                        vec_1.vec.len(vec_1.vec.sub(shadow.rightEdge.start, shadow.rightEdge.end))) /
                        2;
                    const sourceHeight = shadowSprite.height * (1 - t);
                    const destinationHeight = l *
                        (1 - t) *
                        this.lightingSystem.options.spriteWallShadowLengthFactor;
                    let context;
                    switch (wall.layer) {
                        case types_1.WallShadowLayer.One:
                            context = this.wallLight1Context;
                            break;
                        case types_1.WallShadowLayer.Two:
                            context = this.wallLight2Context;
                            break;
                    }
                    context.save();
                    context.beginPath();
                    context.rect(wallRectangle.position.x, wallRectangle.position.y, wallRectangle.size.x, wallRectangle.size.y);
                    context.clip();
                    context.drawImage(shadowSprite, 0, 0, shadowSprite.width, sourceHeight, leftIntercept[INTERCEPT_X], wallInterval.bottom - destinationHeight, rightIntercept[INTERCEPT_X] - leftIntercept[INTERCEPT_X], destinationHeight);
                    context.restore();
                }
            }
        }
        this.wallLight1Context.restore();
        this.wallLight2Context.restore();
    }
    prepareWallCircleShadows(lightRectangle, circleShadows, wallShadowReceivers) {
        this.wallLight1Context.save();
        this.wallLight1Context.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(this.wallLight1Context);
        this.wallLight1Context.translate(-this.position.x + this._radius, -this.position.y +
            this._radius -
            this.lightingSystem.options.wallLightingYOffset);
        this.wallLight2Context.save();
        this.wallLight2Context.fillStyle = 'black';
        this.lightingSystem.setupSoftShadows(this.wallLight2Context);
        this.wallLight2Context.translate(-this.position.x + this._radius, -this.position.y +
            this._radius -
            this.lightingSystem.options.wallLightingYOffset);
        for (const wall of wallShadowReceivers) {
            const wallRectangle = {
                position: wall.position,
                size: wall.size,
            };
            const wallInterval = (0, utilities_1.rectangleToInterval)(wallRectangle);
            if ((0, utilities_1.rectanglesIntersect)(lightRectangle, wallRectangle)) {
                if (!wall.receiveLight) {
                    continue;
                }
                for (const shadow of circleShadows) {
                    if (!shadow.position || !shadow.size) {
                        continue;
                    }
                    const shadowCasterRectangle = {
                        position: shadow.caster.position,
                        size: shadow.caster.size,
                    };
                    const shadowCasterInterval = (0, utilities_1.rectangleToInterval)(shadowCasterRectangle);
                    if ((0, utilities_1.rectanglesIntersect)(wallRectangle, shadowCasterRectangle)) {
                        continue;
                    }
                    if (wallInterval.bottom > shadowCasterInterval.bottom) {
                        continue;
                    }
                    const shadowRectangle = {
                        position: vec_1.vec.sub(shadow.position, shadow.size),
                        size: vec_1.vec.mul(shadow.size, 2),
                    };
                    if (!(0, utilities_1.rectanglesIntersect)(wallRectangle, shadowRectangle)) {
                        continue;
                    }
                    let context;
                    switch (wall.layer) {
                        case types_1.WallShadowLayer.One:
                            context = this.wallLight1Context;
                            break;
                        case types_1.WallShadowLayer.Two:
                            context = this.wallLight2Context;
                            break;
                    }
                    context.save();
                    context.beginPath();
                    context.rect(wallRectangle.position.x, wallRectangle.position.y, wallRectangle.size.x, wallRectangle.size.y);
                    context.clip();
                    context.beginPath();
                    context.ellipse(shadow.position.x, shadow.position.y, shadow.size.x, shadow.size.y *
                        this.lightingSystem.options.circleWallShadowLengthFactor, 0, 0, Math.PI * 2);
                    context.globalAlpha = shadow.caster.alpha;
                    context.fill();
                    context.restore();
                }
            }
        }
        this.wallLight1Context.restore();
        this.wallLight2Context.restore();
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
        let leftEdge = null;
        let rightEdge = null;
        const shadowPolygon = [];
        switch ((0, utilities_1.sector2d)(this.position, shadowCasterInterval)) {
            case types_1.Sector2d.TopLeft:
                if (shadowEdges.length !== 4) {
                    break;
                }
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[3];
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
                leftEdge = shadowEdges[2];
                rightEdge = shadowEdges[1];
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
                leftEdge = shadowEdges[2];
                rightEdge = shadowEdges[1];
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
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[5];
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
                leftEdge = shadowEdges[4];
                rightEdge = shadowEdges[3];
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
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[3];
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
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[5];
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
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[3];
                if (includeCasterRegion) {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, vec_1.vec.add(shadowCasterRectangle.position, shadowCasterRectangle.size));
                }
                else {
                    shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                }
                break;
        }
        return {
            shadowCasterInterval,
            leftEdge,
            rightEdge,
            vertices: shadowPolygon,
        };
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
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
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
        this.groundMaskContext = LightingSystem.createContext();
        this.groundMaskCanvas = this.groundMaskContext.canvas;
        this.groundMaskedLightMapContext = LightingSystem.createContext();
        this.groundMaskedLightMapCanvas = this.groundMaskedLightMapContext.canvas;
        this.wallMask1Context = LightingSystem.createContext();
        this.wallMask1Canvas = this.wallMask1Context.canvas;
        this.wallMaskedLightMap1Context = LightingSystem.createContext();
        this.wallMaskedLightMap1Canvas = this.wallMaskedLightMap1Context.canvas;
        this.wallMask2Context = LightingSystem.createContext();
        this.wallMask2Canvas = this.wallMask2Context.canvas;
        this.wallMaskedLightMap2Context = LightingSystem.createContext();
        this.wallMaskedLightMap2Canvas = this.wallMaskedLightMap2Context.canvas;
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
        if (!this.options.shaderEnabled) {
            return null;
        }
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
        const hasSpecularMaps = shaderPass !== null &&
            [...this.groundReceivers, ...this.wallReceivers].some(surface => surface.specularMap || surface.customDraw.specularMap);
        if (shaderPass) {
            this.drawSceneNormalMap(camera);
        }
        if (hasSpecularMaps) {
            this.drawSceneSpecularMap(camera);
        }
        const ambientLightDirection = vec_1.vec.rot((0, vec_1.vec)(1, 0), this.options.ambientLightDirection);
        const ambientLightColour = (0, parsecolor_1.parseColor)(this.options.ambientLightColour);
        const ambientLightShadowColour = (0, parsecolor_1.parseColor)(this.options.ambientLightShadowColour);
        const ambientLightHighlightColour = (0, parsecolor_1.parseColor)(this.options.ambientLightHighlightColour);
        const cameraRectangle = (0, utilities_1.intervalToRectangle)(camera.bounds);
        const visibleLights = this.lights.filter(light => (0, utilities_1.rectanglesIntersect)(light.bounds, cameraRectangle));
        const canvasLights = shaderPass ? [] : visibleLights;
        visibleLights.forEach(light => light.prepare(this.groundReceivers, this.wallReceivers, this.regionCasters, this.spriteCasters, this.circleCasters));
        this.resetContext(this.groundMaskContext);
        this.groundMaskContext.save();
        camera.setTransforms(this.groundMaskContext);
        this.groundReceivers.forEach(ground => {
            ground.drawMask(this.groundMaskContext);
        });
        this.groundMaskContext.globalCompositeOperation = 'destination-out';
        this.wallReceivers.forEach(wall => {
            wall.drawMask(this.groundMaskContext);
        });
        this.groundMaskContext.restore();
        this.resetContext(this.wallMask1Context);
        this.wallMask1Context.save();
        camera.setTransforms(this.wallMask1Context);
        this.wallReceivers.forEach(wall => {
            if (wall.layer === types_1.WallShadowLayer.One) {
                wall.drawMask(this.wallMask1Context);
            }
        });
        this.wallMask1Context.globalCompositeOperation = 'destination-out';
        this.wallReceivers.forEach(wall => {
            if (wall.layer === types_1.WallShadowLayer.Two) {
                wall.drawMask(this.wallMask1Context);
            }
        });
        this.wallMask1Context.restore();
        this.resetContext(this.wallMask2Context);
        this.wallMask2Context.save();
        camera.setTransforms(this.wallMask2Context);
        this.wallReceivers.forEach(wall => {
            if (wall.layer === types_1.WallShadowLayer.Two) {
                wall.drawMask(this.wallMask2Context);
            }
        });
        this.wallMask2Context.restore();
        this.resetContext(this.groundMaskedLightMapContext);
        this.groundMaskedLightMapContext.save();
        camera.setTransforms(this.groundMaskedLightMapContext);
        const { top, bottom, left, right } = camera.bounds;
        this.groundMaskedLightMapContext.fillStyle =
            this.options.ambientLightColour;
        this.groundMaskedLightMapContext.fillRect(left, top, right - left, bottom - top);
        this.groundMaskedLightMapContext.globalCompositeOperation = 'screen';
        canvasLights.forEach(light => {
            this.groundMaskedLightMapContext.drawImage(light.groundLightCanvas, light.position.x - light.radius, light.position.y - light.radius);
        });
        this.groundMaskedLightMapContext.save();
        this.groundMaskedLightMapContext.setTransform(1, 0, 0, 1, 0, 0);
        this.groundMaskedLightMapContext.globalCompositeOperation =
            'destination-atop';
        this.groundMaskedLightMapContext.drawImage(this.groundMaskCanvas, 0, 0);
        this.groundMaskedLightMapContext.restore();
        this.groundMaskedLightMapContext.restore();
        this.resetContext(this.wallMaskedLightMap1Context);
        this.wallMaskedLightMap1Context.save();
        camera.setTransforms(this.wallMaskedLightMap1Context);
        this.wallReceivers.forEach(wall => {
            if (wall.layer === types_1.WallShadowLayer.One) {
                this.wallMaskedLightMap1Context.fillStyle = (0, utilities_1.colourToString)(this.calculateAmbientLight(wall.surfaceNormal, ambientLightDirection, ambientLightColour, ambientLightShadowColour, ambientLightHighlightColour));
                this.wallMaskedLightMap1Context.fillRect(wall.position.x, wall.position.y, wall.size.x, wall.size.y);
            }
        });
        this.wallMaskedLightMap1Context.globalCompositeOperation = 'screen';
        canvasLights.forEach(light => {
            this.wallMaskedLightMap1Context.drawImage(light.wallLight1Canvas, light.position.x - light.radius, light.position.y - light.radius + this.options.wallLightingYOffset);
        });
        this.resetContext(this.wallMaskedLightMap2Context);
        this.wallMaskedLightMap2Context.save();
        camera.setTransforms(this.wallMaskedLightMap2Context);
        this.wallReceivers.forEach(wall => {
            if (wall.layer === types_1.WallShadowLayer.Two) {
                this.wallMaskedLightMap2Context.fillStyle = (0, utilities_1.colourToString)(this.calculateAmbientLight(wall.surfaceNormal, ambientLightDirection, ambientLightColour, ambientLightShadowColour, ambientLightHighlightColour));
                this.wallMaskedLightMap2Context.fillRect(wall.position.x, wall.position.y, wall.size.x, wall.size.y);
            }
        });
        this.wallMaskedLightMap2Context.globalCompositeOperation = 'screen';
        canvasLights.forEach(light => {
            this.wallMaskedLightMap2Context.drawImage(light.wallLight2Canvas, light.position.x - light.radius, light.position.y - light.radius + this.options.wallLightingYOffset);
        });
        this.wallMaskedLightMap1Context.save();
        this.wallMaskedLightMap1Context.setTransform(1, 0, 0, 1, 0, 0);
        this.wallMaskedLightMap1Context.globalCompositeOperation =
            'destination-atop';
        this.wallMaskedLightMap1Context.drawImage(this.wallMask1Canvas, 0, 0);
        this.wallMaskedLightMap1Context.restore();
        this.wallMaskedLightMap1Context.restore();
        this.wallMaskedLightMap2Context.save();
        this.wallMaskedLightMap2Context.setTransform(1, 0, 0, 1, 0, 0);
        this.wallMaskedLightMap2Context.globalCompositeOperation =
            'destination-atop';
        this.wallMaskedLightMap2Context.drawImage(this.wallMask2Canvas, 0, 0);
        this.wallMaskedLightMap2Context.restore();
        this.wallMaskedLightMap2Context.restore();
        this.resetContext(this.lightMapContext);
        this.lightMapContext.save();
        this.lightMapContext.drawImage(this.groundMaskedLightMapCanvas, 0, 0);
        this.lightMapContext.drawImage(this.wallMaskedLightMap1Canvas, 0, 0);
        this.lightMapContext.drawImage(this.wallMaskedLightMap2Canvas, 0, 0);
        this.lightMapContext.restore();
        this.specularVisible = hasSpecularMaps;
        if (shaderPass) {
            shaderPass.render({
                camera,
                screen,
                lights: visibleLights,
                ambientLightMap: this.lightMapCanvas,
                normalMap: this.sceneNormalMapCanvas,
                specularMap: hasSpecularMaps ? this.sceneSpecularMapCanvas : null,
                groundMask: this.groundMaskCanvas,
                wall1Mask: this.wallMask1Canvas,
                wall2Mask: this.wallMask2Canvas,
                imageSmoothingEnabled: this.options.imageSmoothingEnabled,
                wallLightingYOffset: this.options.wallLightingYOffset,
                highlightStrength: this.options.shaderHighlightStrength,
                shadowStrength: this.options.shaderShadowStrength,
                specularStrength: this.options.shaderSpecularStrength,
                shininess: this.options.shaderShininess,
                viewTilt: this.options.shaderViewTilt,
                banding: this.options.shaderBanding,
            });
            this.resetContext(this.lightMapContext);
            this.lightMapContext.drawImage(shaderPass.canvas, 0, 0);
        }
        if (shaderPass && hasSpecularMaps) {
            shaderPass.showSpecular(screen);
            this.resetContext(this.specularLightMapContext);
            this.specularLightMapContext.save();
            this.specularLightMapContext.drawImage(shaderPass.canvas, 0, 0);
            this.specularLightMapContext.globalCompositeOperation = 'destination-in';
            this.specularLightMapContext.drawImage(this.lightMapCanvas, 0, 0);
            this.specularLightMapContext.restore();
        }
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
    drawSceneNormalMap(camera) {
        this.resetContext(this.sceneNormalMapContext);
        this.sceneNormalMapContext.save();
        camera.setTransforms(this.sceneNormalMapContext);
        this.groundReceivers.forEach(ground => {
            ground.drawNormalMap(this.sceneNormalMapContext);
        });
        this.wallReceivers.forEach(wall => {
            wall.drawNormalMap(this.sceneNormalMapContext);
        });
        this.sceneNormalMapContext.restore();
    }
    drawSceneSpecularMap(camera) {
        this.resetContext(this.sceneSpecularMapContext);
        this.sceneSpecularMapContext.save();
        camera.setTransforms(this.sceneSpecularMapContext);
        this.groundReceivers.forEach(ground => {
            ground.drawSpecularMap(this.sceneSpecularMapContext);
        });
        this.wallReceivers.forEach(wall => {
            wall.drawSpecularMap(this.sceneSpecularMapContext);
        });
        this.sceneSpecularMapContext.restore();
    }
}
exports.LightingSystem = LightingSystem;
LightingSystem.DEFAULT_OPTIONS = {
    imageSmoothingEnabled: true,
    softShadowsEnabled: false,
    softShadowsAmount: 2,
    shaderEnabled: false,
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
    spriteWallShadowLengthFactor: 0.75,
    spriteWallShadowInterceptOffset: 0.1,
    circleWallShadowLengthFactor: 0.5,
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
const copyShader = __webpack_require__(/*! ./shaders/copy.frag.glsl */ "./src/lighting/shaders/copy.frag.glsl");
const diffuseShader = __webpack_require__(/*! ./shaders/diffuse.frag.glsl */ "./src/lighting/shaders/diffuse.frag.glsl");
const quadShader = __webpack_require__(/*! ./shaders/quad.vert.glsl */ "./src/lighting/shaders/quad.vert.glsl");
const specularShader = __webpack_require__(/*! ./shaders/specular.frag.glsl */ "./src/lighting/shaders/specular.frag.glsl");
const surfaceShader = __webpack_require__(/*! ./shaders/surface.glsl */ "./src/lighting/shaders/surface.glsl");
var TextureUnit;
(function (TextureUnit) {
    TextureUnit[TextureUnit["NormalMap"] = 0] = "NormalMap";
    TextureUnit[TextureUnit["GroundMask"] = 1] = "GroundMask";
    TextureUnit[TextureUnit["Wall1Mask"] = 2] = "Wall1Mask";
    TextureUnit[TextureUnit["Wall2Mask"] = 3] = "Wall2Mask";
    TextureUnit[TextureUnit["GroundLightMap"] = 4] = "GroundLightMap";
    TextureUnit[TextureUnit["Wall1LightMap"] = 5] = "Wall1LightMap";
    TextureUnit[TextureUnit["Wall2LightMap"] = 6] = "Wall2LightMap";
    TextureUnit[TextureUnit["SpecularMap"] = 7] = "SpecularMap";
})(TextureUnit || (TextureUnit = {}));
class ShaderPass {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.gl = null;
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
            console.warn('WebGL is not available, the shader has been disabled');
            return;
        }
        try {
            const prepend = (source) => `${surfaceShader}\n${source}`;
            this.copyProgram = this.createProgram(gl, copyShader);
            this.diffuseProgram = this.createProgram(gl, prepend(diffuseShader));
            this.specularProgram = this.createProgram(gl, prepend(specularShader));
        }
        catch (e) {
            console.error('The shader has been disabled', e);
            return;
        }
        this.textures = Object.values(TextureUnit)
            .filter(unit => typeof unit === 'number')
            .map(() => gl.createTexture());
        this.ambientTexture = gl.createTexture();
        this.specularTexture = gl.createTexture();
        this.specularFramebuffer = gl.createFramebuffer();
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
    upload(gl, unit, texture, image, filter) {
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }
    resize(gl, screen) {
        if (this.canvas.width === screen.x && this.canvas.height === screen.y) {
            return;
        }
        this.canvas.width = screen.x;
        this.canvas.height = screen.y;
        gl.viewport(0, 0, screen.x, screen.y);
        gl.activeTexture(gl.TEXTURE0 + TextureUnit.SpecularMap);
        gl.bindTexture(gl.TEXTURE_2D, this.specularTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, screen.x, screen.y, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularFramebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.specularTexture, 0);
    }
    drawQuad(gl, { uniforms }, screenRectangle, worldRectangle = [0, 0, 0, 0]) {
        gl.uniform4fv(uniforms.u_screenRectangle, screenRectangle);
        gl.uniform4fv(uniforms.u_worldRectangle, worldRectangle);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    drawTexture(gl, texture, screen, flipY) {
        const program = this.copyProgram;
        gl.disable(gl.BLEND);
        gl.useProgram(program.program);
        gl.uniform2f(program.uniforms.u_screen, screen.x, screen.y);
        gl.uniform1f(program.uniforms.u_flipY, flipY ? 1 : 0);
        gl.activeTexture(gl.TEXTURE0 + TextureUnit.SpecularMap);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(program.uniforms.u_image, TextureUnit.SpecularMap);
        this.drawQuad(gl, program, [0, 0, screen.x, screen.y]);
    }
    setSceneUniforms(gl, { program, uniforms }, scene) {
        gl.useProgram(program);
        gl.uniform2f(uniforms.u_screen, scene.screen.x, scene.screen.y);
        gl.uniform1f(uniforms.u_wallLightingYOffset, scene.wallLightingYOffset);
        gl.uniform1f(uniforms.u_banding, scene.banding);
        gl.uniform1i(uniforms.u_sceneNormalMap, TextureUnit.NormalMap);
        gl.uniform1i(uniforms.u_groundMask, TextureUnit.GroundMask);
        gl.uniform1i(uniforms.u_wall1Mask, TextureUnit.Wall1Mask);
        gl.uniform1i(uniforms.u_wall2Mask, TextureUnit.Wall2Mask);
        gl.uniform1i(uniforms.u_groundLightMap, TextureUnit.GroundLightMap);
        gl.uniform1i(uniforms.u_wall1LightMap, TextureUnit.Wall1LightMap);
        gl.uniform1i(uniforms.u_wall2LightMap, TextureUnit.Wall2LightMap);
    }
    drawLight(gl, program, light, scene) {
        const { position, size } = light.bounds;
        const topLeft = scene.camera.worldToScreen(position);
        const bottomRight = scene.camera.worldToScreen(vec_1.vec.add(position, size));
        gl.useProgram(program.program);
        gl.uniform1f(program.uniforms.u_lightRadius, light.radius);
        gl.uniform1f(program.uniforms.u_lightHeight, light.height);
        gl.uniform1f(program.uniforms.u_lightMapSize, light.groundLightCanvas.width);
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
        const light = scene.imageSmoothingEnabled ? gl.LINEAR : gl.NEAREST;
        const maps = [
            [TextureUnit.NormalMap, scene.normalMap],
            [TextureUnit.GroundMask, scene.groundMask],
            [TextureUnit.Wall1Mask, scene.wall1Mask],
            [TextureUnit.Wall2Mask, scene.wall2Mask],
        ];
        for (const [unit, image] of maps) {
            this.upload(gl, unit, this.textures[unit], image, gl.NEAREST);
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        this.upload(gl, TextureUnit.SpecularMap, this.ambientTexture, scene.ambientLightMap, gl.NEAREST);
        this.drawTexture(gl, this.ambientTexture, scene.screen, false);
        this.setSceneUniforms(gl, this.diffuseProgram, scene);
        gl.uniform1f(this.diffuseProgram.uniforms.u_highlightStrength, scene.highlightStrength);
        gl.uniform1f(this.diffuseProgram.uniforms.u_shadowStrength, scene.shadowStrength);
        if (scene.specularMap) {
            this.upload(gl, TextureUnit.SpecularMap, this.textures[TextureUnit.SpecularMap], scene.specularMap, gl.NEAREST);
            const { uniforms } = this.specularProgram;
            this.setSceneUniforms(gl, this.specularProgram, scene);
            gl.uniform1i(uniforms.u_sceneSpecularMap, TextureUnit.SpecularMap);
            gl.uniform1f(uniforms.u_specularStrength, scene.specularStrength);
            gl.uniform1f(uniforms.u_shininess, scene.shininess);
            gl.uniform1f(uniforms.u_viewTilt, scene.viewTilt);
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularFramebuffer);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
        gl.enable(gl.BLEND);
        for (const item of scene.lights) {
            this.upload(gl, TextureUnit.GroundLightMap, this.textures[TextureUnit.GroundLightMap], item.groundLightCanvas, light);
            this.upload(gl, TextureUnit.Wall1LightMap, this.textures[TextureUnit.Wall1LightMap], item.wallLight1Canvas, light);
            this.upload(gl, TextureUnit.Wall2LightMap, this.textures[TextureUnit.Wall2LightMap], item.wallLight2Canvas, light);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ZERO, gl.ONE);
            this.drawLight(gl, this.diffuseProgram, item, scene);
            if (scene.specularMap) {
                gl.bindFramebuffer(gl.FRAMEBUFFER, this.specularFramebuffer);
                gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE);
                this.drawLight(gl, this.specularProgram, item, scene);
            }
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    showSpecular(screen) {
        if (this.gl) {
            this.drawTexture(this.gl, this.specularTexture, screen, true);
        }
    }
}
exports.ShaderPass = ShaderPass;


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
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
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
    fillMask(context) {
        this.fillBackground(context, 'black');
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
    drawMask(context) {
        if (this.customDraw.mask) {
            this.customDraw.mask(context);
            return;
        }
        context.save();
        this.fillMask(context);
        context.restore();
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
        this.layer = types_1.WallShadowLayer.One;
        this.set(options);
    }
    drawMask(context) {
        var _a;
        if (this.customDraw.mask) {
            this.customDraw.mask(context);
            return;
        }
        context.save();
        if (this.colour) {
            this.fillMask(context);
        }
        const mask = (_a = this.mask) !== null && _a !== void 0 ? _a : (!this.colour && this.image && (0, utilities_1.silhouette)(this.image));
        if (mask) {
            this.drawImage(context, mask);
        }
        context.restore();
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
            this.layer === other.layer);
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
            layer: options.layer,
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
exports.WallShadowLayer = exports.Side = exports.Sector2d = exports.Sector1d = void 0;
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
var WallShadowLayer;
(function (WallShadowLayer) {
    WallShadowLayer["One"] = "one";
    WallShadowLayer["Two"] = "two";
})(WallShadowLayer = exports.WallShadowLayer || (exports.WallShadowLayer = {}));


/***/ }),

/***/ "./src/lighting/utilities.ts":
/*!***********************************!*\
  !*** ./src/lighting/utilities.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.silhouette = exports.drawImageInRectangle = exports.sector2d = exports.sector1d = exports.polygon = exports.rectangleVertices = exports.rectanglesIntersect = exports.overlap1d = exports.rectangleToInterval = exports.intervalToRectangle = exports.lineIsFacing = exports.lineYIntercept = exports.lerpColour = exports.colourToString = exports.boundingRectangle = exports.maxVec = exports.minVec = void 0;
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
function lineYIntercept(line, y, allowBefore = true, allowAfter = true) {
    if ((0, utils_1.floatEquals)(line.start.y, line.end.y)) {
        return null;
    }
    const t = (y - line.start.y) / (line.end.y - line.start.y);
    if (t < 0 && !allowBefore) {
        return null;
    }
    if (t > 1 && !allowAfter) {
        return null;
    }
    return [line.start.x + t * (line.end.x - line.start.x), t];
}
exports.lineYIntercept = lineYIntercept;
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
function overlap1d(a, b) {
    if (a.end < b.start || a.start > b.end) {
        return null;
    }
    return {
        start: Math.max(a.start, b.start),
        end: Math.min(a.end, b.end),
    };
}
exports.overlap1d = overlap1d;
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

/***/ "./src/lighting/shaders/quad.vert.glsl":
/*!*********************************************!*\
  !*** ./src/lighting/shaders/quad.vert.glsl ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision highp float;\n\nattribute vec2 a_corner;\n\n// Size of the screen in pixels\nuniform vec2 u_screen;\n\n// Area to draw, as (x, y, width, height) in screen pixels\nuniform vec4 u_screenRectangle;\n\n// The same area, as (x, y, width, height) in world units relative to the light\nuniform vec4 u_worldRectangle;\n\nvarying vec2 v_sceneUV;\nvarying vec2 v_fromLight;\n\nvoid main() {\n  vec2 position = u_screenRectangle.xy + a_corner * u_screenRectangle.zw;\n\n  v_sceneUV = position / u_screen;\n  v_fromLight = u_worldRectangle.xy + a_corner * u_worldRectangle.zw;\n\n  gl_Position = vec4(\n    v_sceneUV.x * 2.0 - 1.0,\n    1.0 - v_sceneUV.y * 2.0,\n    0.0,\n    1.0\n  );\n}\n";

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
module.exports = "precision highp float;\n\n// -----------------------------------------------------------------------------\n// SAMPLERS\n// -----------------------------------------------------------------------------\nuniform sampler2D u_sceneNormalMap;\nuniform sampler2D u_groundMask;\nuniform sampler2D u_wall1Mask;\nuniform sampler2D u_wall2Mask;\nuniform sampler2D u_groundLightMap;\nuniform sampler2D u_wall1LightMap;\nuniform sampler2D u_wall2LightMap;\n\n// -----------------------------------------------------------------------------\n// UNIFORMS\n// -----------------------------------------------------------------------------\nuniform float u_lightRadius;\nuniform float u_lightHeight;\nuniform float u_lightMapSize;\nuniform float u_wallLightingYOffset;\nuniform float u_banding;\n\n// -----------------------------------------------------------------------------\n// VARYINGS\n// -----------------------------------------------------------------------------\nvarying vec2 v_sceneUV;\nvarying vec2 v_fromLight;\n\n// -----------------------------------------------------------------------------\n// GLOBAL CONSTANTS\n// -----------------------------------------------------------------------------\nconst float MIN_COVERAGE = 0.004;\n\n// The red and green channels of a flat normal map (#7f7fff)\nconst float NORMAL_MAP_CENTER = 127.0 / 255.0;\n\n// Walls face the camera less directly than the ground, so bumps look stronger\nconst float WALL_NORMAL_Z_OFFSET = 0.2;\n\n// -----------------------------------------------------------------------------\n// UTILITY FUNCTIONS\n// -----------------------------------------------------------------------------\nfloat band(float amount) {\n  if (u_banding <= 0.0) {\n    return amount;\n  }\n\n  return floor(amount / u_banding + 0.5) * u_banding;\n}\n\n// Sample a light map, nothing outside of the map receives this light\nvec3 sampleLightMap(sampler2D map, vec2 uv) {\n  vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));\n\n  return texture2D(map, uv).rgb * inside.x * inside.y;\n}\n\n// -----------------------------------------------------------------------------\n// SURFACE\n// -----------------------------------------------------------------------------\nstruct Surface {\n  // Light from this light that reaches this surface, including shadows\n  vec3 light;\n\n  // Unit normal, where x is right, y is down the screen, and z is towards the\n  // camera\n  vec3 normal;\n\n  // From this surface to the light, not normalized\n  vec3 toLight;\n};\n\n// Find the surface at this fragment, whether it's on the ground or a wall\nSurface getSurface() {\n  float ground = texture2D(u_groundMask, v_sceneUV).a;\n  float wall1 = texture2D(u_wall1Mask, v_sceneUV).a;\n  float wall2 = texture2D(u_wall2Mask, v_sceneUV).a;\n\n  float coverage = ground + wall1 + wall2;\n  if (coverage < MIN_COVERAGE) {\n    discard;\n  }\n\n  // These overlap at the anti-aliased edges of surfaces\n  float groundAmount = ground / coverage;\n  float wall1Amount = wall1 / coverage;\n  float wall2Amount = wall2 / coverage;\n  float wallAmount = wall1Amount + wall2Amount;\n\n  // Wall light maps are offset from the light's position\n  vec2 wallOffset = vec2(0.0, u_wallLightingYOffset);\n  vec2 groundUV = (v_fromLight + u_lightRadius) / u_lightMapSize;\n  vec2 wallUV = (v_fromLight + u_lightRadius - wallOffset) / u_lightMapSize;\n\n  vec3 light =\n    sampleLightMap(u_groundLightMap, groundUV) * groundAmount +\n    sampleLightMap(u_wall1LightMap, wallUV) * wall1Amount +\n    sampleLightMap(u_wall2LightMap, wallUV) * wall2Amount;\n\n  vec3 normal = texture2D(u_sceneNormalMap, v_sceneUV).rgb;\n\n  return Surface(\n    light,\n    normalize(vec3(\n      normal.rg - NORMAL_MAP_CENTER,\n      normal.b - 0.5 - WALL_NORMAL_Z_OFFSET * wallAmount\n    )),\n    vec3(wallOffset * wallAmount - v_fromLight, max(u_lightHeight, 1.0))\n  );\n}\n";

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
exports.Wall = exports.WallShadowLayer = exports.WallReceiver = exports.Surface = exports.GroundReceiver = exports.SceneObject = exports.LightingSystem = exports.Light = exports.SpriteCaster = exports.RegionCaster = exports.CircleCaster = exports.Actor = void 0;
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
var types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
Object.defineProperty(exports, "WallShadowLayer", ({ enumerable: true, get: function () { return types_1.WallShadowLayer; } }));
var Wall_1 = __webpack_require__(/*! ./Wall */ "./src/lighting/Wall.ts");
Object.defineProperty(exports, "Wall", ({ enumerable: true, get: function () { return Wall_1.Wall; } }));

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsVUFBVTtBQUNWLEtBQUssa0NBQWtDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtBQUNuRSxVQUFVO0FBQ1YsS0FBSyxrQ0FBa0MsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRTtBQUNoRixVQUFVO0FBQ1YsS0FBSyxtQ0FBbUMsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJO0FBQzVFLFVBQVU7QUFDVixLQUFLLG1DQUFtQyxJQUFJLG1CQUFtQixJQUFJLG1CQUFtQixJQUFJO0FBQzFGLFVBQVU7QUFDVixLQUFLLG9DQUFvQyxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDN0UsVUFBVTtBQUNWLEtBQUssb0NBQW9DLElBQUksbUJBQW1CLElBQUksbUJBQW1CLElBQUk7QUFDM0YsVUFBVTtBQUNWLEtBQUssbUNBQW1DLElBQUksa0JBQWtCLElBQUksbUJBQW1CLElBQUk7QUFDekY7QUFDQSxLQUFLLG9DQUFvQyxJQUFJLGtCQUFrQixJQUFJLG1CQUFtQixJQUFJO0FBQzFGO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxJQUFJLElBQTZCO0FBQ2pDLHFCQUFxQjtBQUNyQjs7Ozs7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksU0FBUztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsdUJBQXVCO0FBQ2xDLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLGVBQWU7QUFDMUIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxHQUFHO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGVBQWU7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsUUFBUTtBQUNuQixZQUFZLEdBQUc7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixZQUFZLFVBQVU7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUztBQUM1QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksU0FBUztBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsZ0JBQWdCO0FBQzNCLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFdBQVc7QUFDdEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsV0FBVztBQUN0QixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBNkI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyZkEsUUFBUSxvQkFBb0IsRUFBRSxtQkFBTyxDQUFDLGdGQUF5Qjs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksS0FBSztBQUNqQjtBQUNBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCLE1BQU0sMkJBQTJCO0FBQ2pDLFFBQVEsYUFBYSxJQUFJLFlBQVk7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksZUFBZTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0EsdUJBQXVCLDRCQUE0Qjs7QUFFbkQ7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0EsdUJBQXVCLHdCQUF3Qjs7QUFFL0M7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0EsdUJBQXVCLDRCQUE0Qjs7QUFFbkQ7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFlBQVksU0FBUztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLEtBQUs7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxXQUFXO0FBQ3RCLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksS0FBSztBQUNqQjtBQUNBLHVCQUF1QixnQ0FBZ0M7O0FBRXZEO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBLDhCQUE4QixJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUk7O0FBRTVDO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLGVBQWU7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLEtBQUs7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxlQUFlO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QixvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxRQUFRO0FBQ25CLFlBQVksS0FBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxLQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUIsb0JBQW9CO0FBQ3BCLHFCQUFxQixXQUFXO0FBQ2hDLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixVQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUIsb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixZQUFZLFNBQVM7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVksS0FBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsbUJBQW1CO0FBQzlCLFlBQVksS0FBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQSxJQUFJLElBQTZCO0FBQ2pDLHFCQUFxQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7O0FDaFpBLDhHQUE0QztBQVM1Qyw4RUFBcUQ7QUFpQ3JELE1BQWEsS0FBSztJQVNoQixZQUFtQixRQUF3QixFQUFFLE9BQXFCO1FBSmxELFdBQU0sR0FBdUMsSUFBSSxDQUFDO1FBS2hFLE1BQU0sRUFBRSxNQUFNLEdBQUcsUUFBUSxFQUFFLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ2xELE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsYUFBYSxFQUFFLEdBQUcsQ0FDbEQsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUN2QixDQUFDO1FBRWxDLElBQUksQ0FBQyxlQUFlO1lBQ2xCLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztRQUdwRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDdEMsS0FBSyxFQUFFLHVCQUFlLENBQUMsR0FBRztZQUMxQixTQUFTLEVBQUUsS0FBSztZQUNoQixHQUFHLE9BQU87U0FDWCxDQUFDLENBQUM7UUFFSCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNyQixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsMkJBQTJCLENBQUM7WUFFeEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO2dCQUNyQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLGVBQWUsRUFBRSxZQUFZO2dCQUM3QixlQUFlLEVBQUUsWUFBWTtnQkFDN0IsR0FBRyxhQUFhO2dCQUNoQixHQUFHLFNBQVM7YUFDYixDQUFDLENBQUM7U0FDSjtRQUVELElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQ3JDLEdBQUcsYUFBYTtnQkFDaEIsR0FBRyxTQUFTO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU8sU0FBUyxDQUFDLFFBQWEsRUFBRSxJQUFTO1FBQ3hDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBRyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDckUsSUFBSSxFQUFFLGFBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFLTSxNQUFNLENBQUMsUUFBYTs7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsVUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUtNLE1BQU07O1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixVQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDOztBQW5FSCxzQkFvRUM7QUFuRXlCLDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsaUNBQTJCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1QzdELDhHQUE0QztBQUU1QyxnR0FBZ0U7QUFFaEUsMEZBQTREO0FBWTVELE1BQWEsWUFBYSxTQUFRLHlCQUFnQztJQUdoRSxZQUFtQixRQUF3QixFQUFFLE9BQTRCO1FBQ3ZFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIcEIsd0JBQW1CLEdBQVksS0FBSyxDQUFDO1FBSTFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUtNLFFBQVEsQ0FBQyxLQUFtQjtRQUNqQyxPQUFPLENBQ0wsSUFBSSxDQUFDLFNBQVM7WUFDZCxLQUFLLENBQUMsU0FBUztZQUNmLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxLQUFLLENBQUMsbUJBQW1CLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBS00sS0FBSyxDQUFDLEtBQW1CO1FBQzlCLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxHQUFJLElBQXFCO1lBQ3pCLEdBQUcsaUNBQWlCLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUE1QkQsb0NBNEJDO0FBd0NELE1BQWEsWUFBYSxTQUFRLHlCQUFnQztJQVFoRSxZQUFtQixRQUF3QixFQUFFLE9BQTRCO1FBQ3ZFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFScEIsV0FBTSxHQUF5QixJQUFJLENBQUM7UUFDcEMsVUFBSyxHQUF5QixJQUFJLENBQUM7UUFDbkMsV0FBTSxHQUFRLGFBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsV0FBTSxHQUFRLGFBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsb0JBQWUsR0FBVyxFQUFFLENBQUM7UUFDN0Isb0JBQWUsR0FBa0IsRUFBRSxDQUFDO1FBSXpDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUtNLFNBQVM7O1FBQ2QsT0FBTyxVQUFJLENBQUMsTUFBTSxtQ0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksMEJBQVUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFuQkQsb0NBbUJDO0FBOEJELE1BQWEsWUFBYSxTQUFRLHlCQUFnQztJQU1oRSxZQUFtQixRQUF3QixFQUFFLE9BQTRCO1FBQ3ZFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFOcEIsV0FBTSxHQUFRLGFBQUcsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7UUFDdEMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUl2QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQVZELG9DQVVDOzs7Ozs7Ozs7Ozs7Ozs7QUMvSUQsMElBQTBEO0FBQzFELHNIQU9pQztBQUNqQyw4R0FBNEM7QUFTNUMsOEVBUWlCO0FBQ2pCLDBGQVVxQjtBQUVyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QixNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDdEIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBc0V0QixNQUFhLEtBQUs7SUFrQ2hCLFlBQW1CLGNBQThCLEVBQUUsT0FBcUI7O1FBRmhFLFVBQUssR0FBRyxJQUFJLENBQUM7UUFHbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFFckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQU8sQ0FBQyxNQUFNLG1DQUFJLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFPLENBQUMsTUFBTSxtQ0FBSSxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBTyxDQUFDLFVBQVUsbUNBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQ25FLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBTyxDQUFDLFNBQVMsbUNBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDO1FBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBTyxDQUFDLE1BQU0sbUNBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQU8sQ0FBQyxXQUFXLG1DQUFJLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLDJCQUFVLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRXZELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU07WUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7UUFFbkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTTtZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztRQUVqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQ25FLENBQUM7SUFLRCxJQUFXLE1BQU07UUFDZixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBRTVFLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBRyxFQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FDbEU7WUFDRCxJQUFJLEVBQUUsYUFBRyxFQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQ2pEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLDJCQUFVLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7SUFLTSxNQUFNLENBQUMsUUFBYTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUtNLEdBQUcsQ0FBQyxPQUE4QjtRQUN2QyxNQUFNLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxHQUNaLEdBQUcsT0FBTyxDQUFDO1FBRVosSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsYUFBUixRQUFRLGNBQVIsUUFBUSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLGFBQU4sTUFBTSxjQUFOLE1BQU0sR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxhQUFWLFVBQVUsY0FBVixVQUFVLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsYUFBVCxTQUFTLGNBQVQsU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLGFBQU4sTUFBTSxjQUFOLE1BQU0sR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxhQUFYLFdBQVcsY0FBWCxXQUFXLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyRCxDQUFDO0lBS00sTUFBTTtRQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxPQUFPLENBQ1oscUJBQXVDLEVBQ3ZDLG1CQUFtQyxFQUNuQyxtQkFBbUMsRUFDbkMsbUJBQW1DLEVBQ25DLG1CQUFtQztRQUduQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7UUFHRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBR25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRzFELElBQUksYUFBYSxHQUEyQixFQUFFLENBQUM7UUFDL0MsSUFBSSxhQUFhLEdBQTJCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLGFBQWEsR0FBMkIsRUFBRSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUM3QyxjQUFjLEVBQ2QsbUJBQW1CLENBQ3BCLENBQUM7WUFFRixhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUM3QyxjQUFjLEVBQ2QsbUJBQW1CLENBQ3BCLENBQUM7WUFFRixhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUM3QyxjQUFjLEVBQ2QsbUJBQW1CLENBQ3BCLENBQUM7U0FDSDtRQUdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBSXpELElBQUksQ0FBQyxzQkFBc0IsQ0FDekIsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixjQUFjLEVBQ2QsbUJBQW1CLENBQ3BCLENBQUM7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsY0FBYyxFQUNkLG1CQUFtQixDQUNwQixDQUFDO1FBR0YsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyx3QkFBd0IsQ0FDM0IsY0FBYyxFQUNkLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsbUJBQW1CLENBQ3BCLENBQUM7WUFFRixJQUFJLENBQUMsd0JBQXdCLENBQzNCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsbUJBQW1CLENBQ3BCLENBQUM7WUFFRixJQUFJLENBQUMsd0JBQXdCLENBQzNCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsbUJBQW1CLENBQ3BCLENBQUM7U0FDSDtJQUNILENBQUM7SUFRTyxpQkFBaUIsQ0FBQyxPQUFpQztRQUN6RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3JEO1FBRUQsT0FBTyxDQUFDLHFCQUFxQjtZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztJQUN0RCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDeEIsQ0FBQyxFQUNELENBQUMsRUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3hCLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUNyRCxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUNoRSxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO1FBQ0YsUUFBUSxDQUFDLFlBQVksQ0FDbkIsQ0FBQyxFQUNELDhCQUFjLEVBQUM7WUFDYixHQUFHLElBQUksQ0FBQyxZQUFZO1lBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVTtZQUN4QyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFDeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVO1NBQ3pDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLENBQUMsRUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxzQkFBc0IsQ0FDNUIsT0FBaUMsRUFDakMsY0FBeUIsRUFDekIsbUJBQW1DO1FBRW5DLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxTQUFTLENBQ2YsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUMvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQ2xELENBQUM7UUFFRixLQUFLLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFO1lBQ3RDLE1BQU0sYUFBYSxHQUFHO2dCQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNoQixDQUFDO1lBQ0YsTUFBTSxZQUFZLEdBQUcsbUNBQW1CLEVBQUMsYUFBYSxDQUFDLENBQUM7WUFHeEQsSUFBSSxtQ0FBbUIsRUFBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBR3RELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN2QixTQUFTO2lCQUNWO2dCQUdELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRTtvQkFDekMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxXQUFXLEdBQUcsaUJBQUssRUFDekIsaUJBQUssRUFDSCxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNyQyxDQUFDLEVBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQ3RELENBQUMsRUFDRCxDQUFDLENBQ0YsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUNGLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLDBCQUEwQixDQUNoQyxjQUF5QixFQUN6QixtQkFBbUM7UUFFbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FDL0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUMvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQ2hDLENBQUM7UUFHRixNQUFNLE9BQU8sR0FBMkIsRUFBRSxDQUFDO1FBQzNDLEtBQUssTUFBTSxNQUFNLElBQUksbUJBQW1CLEVBQUU7WUFDeEMsTUFBTSxlQUFlLEdBQUc7Z0JBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDekIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2FBQ2xCLENBQUM7WUFHRixJQUFJLG1DQUFtQixFQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDeEQsTUFBTSxNQUFNLEdBQUc7b0JBQ2IsTUFBTTtvQkFDTixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsZUFBZSxFQUNmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDM0I7aUJBQ0YsQ0FBQztnQkFHRixPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBRzFDLHVCQUFPLEVBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEM7U0FDRjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVsQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU8sMEJBQTBCLENBQ2hDLGNBQXlCLEVBQ3pCLG1CQUFtQzs7UUFFbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUc5RCxNQUFNLE9BQU8sR0FBMkIsRUFBRSxDQUFDO1FBQzNDLEtBQUssTUFBTSxNQUFNLElBQUksbUJBQW1CLEVBQUU7WUFDeEMsTUFBTSxlQUFlLEdBQUc7Z0JBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDekIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2FBQ2xCLENBQUM7WUFHRixJQUFJLG1DQUFtQixFQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDeEQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUl4QyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNqQixTQUFTO2lCQUNWO2dCQUdELE1BQU0sWUFBWSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQzFCLE1BQU0sQ0FBQyxRQUFRLEVBQ2YsYUFBRyxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ3RFLENBQUM7Z0JBQ0YsTUFBTSxZQUFZLEdBQUcsc0JBQVUsRUFDN0IsTUFBTSxDQUFDLGVBQWUsRUFDdEIsWUFBTSxDQUFDLGVBQWUsbUNBQUksSUFBSSxDQUFDLE1BQU0sRUFDckMsa0JBQU0sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ3RFLENBQUM7Z0JBQ0YsTUFBTSxVQUFVLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FDeEIsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDN0MsWUFBWSxDQUNiLENBQUM7Z0JBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLFdBQVcsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFFbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUMvQixZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNoQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNqQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQy9CLFlBQVksRUFDWixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNoQyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDYixnQkFBZ0IsQ0FDakIsQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBR2xDLE1BQU0sVUFBVSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQ3hCLGFBQUcsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkMsV0FBVyxDQUNaLENBQUM7Z0JBQ0YsTUFBTSxXQUFXLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FDekIsYUFBRyxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzdDLFdBQVcsQ0FDWixDQUFDO2dCQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ1gsTUFBTTtvQkFDTixRQUFRLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQzt3QkFDeEMsR0FBRyxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUUsVUFBVSxDQUFDO3FCQUM1RDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsS0FBSyxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzt3QkFDekMsR0FBRyxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUUsV0FBVyxDQUFDO3FCQUM3RDtpQkFDRixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWxDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTywwQkFBMEIsQ0FDaEMsY0FBeUIsRUFDekIsbUJBQW1DOztRQUVuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzlELE1BQU0sT0FBTyxHQUEyQixFQUFFLENBQUM7UUFDM0MsS0FBSyxNQUFNLE1BQU0sSUFBSSxtQkFBbUIsRUFBRTtZQUN4QyxNQUFNLGVBQWUsR0FBRztnQkFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2dCQUN6QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7YUFDbEIsQ0FBQztZQUdGLElBQUksbUNBQW1CLEVBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxFQUFFO2dCQUV4RCxNQUFNLFlBQVksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUMxQixNQUFNLENBQUMsUUFBUSxFQUNmLGFBQUcsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUN0RSxDQUFDO2dCQUNGLE1BQU0sY0FBYyxHQUFHLHNCQUFVLEVBQy9CLE1BQU0sQ0FBQyxpQkFBaUIsRUFDeEIsWUFBTSxDQUFDLGlCQUFpQixtQ0FBSSxJQUFJLENBQUMsTUFBTSxFQUN2QyxrQkFBTSxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztnQkFDRixNQUFNLGNBQWMsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUM1QixTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUM3QyxjQUFjLENBQ2YsQ0FBQztnQkFDRixNQUFNLFVBQVUsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUMvQixZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNoQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNqQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FDN0IsY0FBYyxDQUFDLENBQUMsRUFDaEIsY0FBYyxDQUFDLENBQUMsRUFDaEIsVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxFQUNaLENBQUMsRUFDRCxDQUFDLEVBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQ1osQ0FBQztnQkFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFHbEMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDWCxNQUFNO29CQUNOLFFBQVEsRUFBRSxJQUFJO29CQUNkLFNBQVMsRUFBRSxJQUFJO29CQUNmLFFBQVEsRUFBRSxTQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQy9DLElBQUksRUFBRSxVQUFVO2lCQUNqQixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWxDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyx3QkFBd0IsQ0FDOUIsY0FBeUIsRUFDekIsYUFBcUMsRUFDckMsbUJBQW1DLEVBQ25DLG1CQUFtQztRQUVuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUM5QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQy9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLE9BQU87WUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDbEQsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQzlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFDL0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUNsRCxDQUFDO1FBRUYsS0FBSyxNQUFNLElBQUksSUFBSSxtQkFBbUIsRUFBRTtZQUN0QyxNQUFNLGFBQWEsR0FBRztnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsQ0FBQztZQUNGLE1BQU0sWUFBWSxHQUFHLG1DQUFtQixFQUFDLGFBQWEsQ0FBQyxDQUFDO1lBR3hELElBQUksbUNBQW1CLEVBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxFQUFFO2dCQUd0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDdEIsU0FBUztpQkFDVjtnQkFHRCxLQUFLLE1BQU0sTUFBTSxJQUFJLGFBQWEsRUFBRTtvQkFDbEMsTUFBTSxxQkFBcUIsR0FBRzt3QkFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDaEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtxQkFDekIsQ0FBQztvQkFDRixNQUFNLG9CQUFvQixHQUFHLG1DQUFtQixFQUM5QyxxQkFBcUIsQ0FDdEIsQ0FBQztvQkFJRixJQUFJLG1DQUFtQixFQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFO3dCQUM3RCxTQUFTO3FCQUNWO29CQUlELElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7d0JBQ3pELFNBQVM7cUJBQ1Y7b0JBSUQsSUFDRSxNQUFNLENBQUMsUUFBUTt3QkFDZixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLFNBQVM7d0JBQ2hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2xEO3dCQUNBLFNBQVM7cUJBQ1Y7b0JBSUQsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sRUFBRTt3QkFDckQsU0FBUztxQkFDVjtvQkFLRCxJQUNFLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTTt3QkFDL0Msb0JBQW9CLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQ2xEO3dCQUVBLElBQUksb0JBQW9CLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUU7NEJBQ25ELElBQ0UsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUk7Z0NBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQ3JELENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJO29DQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ25EO2dDQUNBLFNBQVM7NkJBQ1Y7eUJBQ0Y7d0JBR0QsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTs0QkFDbkQsSUFDRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSTtnQ0FDeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDckQsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUk7b0NBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDbkQ7Z0NBQ0EsU0FBUzs2QkFDVjt5QkFDRjtxQkFDRjtvQkFNRCxJQUNFLFlBQVksQ0FBQyxNQUFNLEtBQUssb0JBQW9CLENBQUMsTUFBTTt3QkFDbkQsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQzVCLE1BQU0sY0FBYyxHQUFHLG1DQUFtQixFQUFDO2dDQUN6QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0NBQ3BCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTs2QkFDYixDQUFDLENBQUM7NEJBRUgsT0FBTyxDQUNMLGNBQWMsQ0FBQyxHQUFHLEtBQUssb0JBQW9CLENBQUMsTUFBTTtnQ0FDbEQseUJBQVMsRUFDUDtvQ0FDRSxLQUFLLEVBQUUsY0FBYyxDQUFDLElBQUk7b0NBQzFCLEdBQUcsRUFBRSxjQUFjLENBQUMsS0FBSztpQ0FDMUIsRUFDRDtvQ0FDRSxLQUFLLEVBQUUsb0JBQW9CLENBQUMsSUFBSTtvQ0FDaEMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLEtBQUs7aUNBQ2hDLENBQ0YsS0FBSyxJQUFJLENBQ1gsQ0FBQzt3QkFDSixDQUFDLENBQUMsRUFDRjt3QkFDQSxTQUFTO3FCQUNWO29CQUVELElBQUksYUFBYSxHQUFrQixJQUFJLENBQUM7b0JBQ3hDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTt3QkFDbkIsTUFBTSxtQkFBbUIsR0FBRyw4QkFBYyxFQUN4QyxNQUFNLENBQUMsUUFBUSxFQUNmLFlBQVksQ0FBQyxNQUFNLENBQ3BCLENBQUM7d0JBQ0YsSUFBSSxtQkFBbUIsRUFBRTs0QkFDdkIsQ0FBQyxhQUFhLENBQUMsR0FBRyxtQkFBbUIsQ0FBQzt5QkFDdkM7d0JBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOzRCQUNuRCxhQUFhLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQzt5QkFDbkM7cUJBQ0Y7b0JBRUQsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQztvQkFDekMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO3dCQUNwQixNQUFNLG9CQUFvQixHQUFHLDhCQUFjLEVBQ3pDLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLFlBQVksQ0FBQyxNQUFNLENBQ3BCLENBQUM7d0JBQ0YsSUFBSSxvQkFBb0IsRUFBRTs0QkFDeEIsQ0FBQyxjQUFjLENBQUMsR0FBRyxvQkFBb0IsQ0FBQzt5QkFDekM7d0JBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOzRCQUNyRCxjQUFjLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQzt5QkFDckM7cUJBQ0Y7b0JBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsYUFBYixhQUFhLGNBQWIsYUFBYSxHQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxRQUFRLENBQUMsQ0FBQztvQkFHckUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO3dCQUNkLFNBQVM7cUJBQ1Y7b0JBR0QsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEtBQUssSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRTt3QkFDdkQsU0FBUztxQkFDVjtvQkFFRCxJQUNFLHlCQUFTLEVBQ1A7d0JBQ0UsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsR0FBRyxFQUFFLEdBQUc7cUJBQ1QsRUFDRDt3QkFDRSxLQUFLLEVBQUUsWUFBWSxDQUFDLElBQUk7d0JBQ3hCLEdBQUcsRUFBRSxZQUFZLENBQUMsS0FBSztxQkFDeEIsQ0FDRixFQUNEO3dCQUNBLElBQUksT0FBaUMsQ0FBQzt3QkFDdEMsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUNsQixLQUFLLHVCQUFlLENBQUMsR0FBRztnQ0FDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDakMsTUFBTTs0QkFFUixLQUFLLHVCQUFlLENBQUMsR0FBRztnQ0FDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDakMsTUFBTTt5QkFDVDt3QkFDRCxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDakU7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sd0JBQXdCLENBQzlCLGNBQXlCLEVBQ3pCLGFBQXFDLEVBQ3JDLG1CQUFtQztRQUVuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUM5QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQy9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLE9BQU87WUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDbEQsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQzlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFDL0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUNsRCxDQUFDO1FBRUYsS0FBSyxNQUFNLElBQUksSUFBSSxtQkFBbUIsRUFBRTtZQUN0QyxNQUFNLGFBQWEsR0FBRztnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsQ0FBQztZQUNGLE1BQU0sWUFBWSxHQUFHLG1DQUFtQixFQUFDLGFBQWEsQ0FBQyxDQUFDO1lBR3hELElBQUksbUNBQW1CLEVBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxFQUFFO2dCQUd0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDdEIsU0FBUztpQkFDVjtnQkFHRCxLQUFLLE1BQU0sTUFBTSxJQUFJLGFBQWEsRUFBRTtvQkFDbEMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFJL0MsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDakIsU0FBUztxQkFDVjtvQkFFRCxNQUFNLHFCQUFxQixHQUFHO3dCQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRO3dCQUNoQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO3FCQUN6QixDQUFDO29CQUNGLE1BQU0sb0JBQW9CLEdBQUcsbUNBQW1CLEVBQzlDLHFCQUFxQixDQUN0QixDQUFDO29CQUlGLElBQUksbUNBQW1CLEVBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLEVBQUU7d0JBQzdELFNBQVM7cUJBQ1Y7b0JBSUQsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTt3QkFDekQsU0FBUztxQkFDVjtvQkFJRCxJQUNFLE1BQU0sQ0FBQyxRQUFRO3dCQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoRCxNQUFNLENBQUMsU0FBUzt3QkFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDbEQ7d0JBQ0EsU0FBUztxQkFDVjtvQkFJRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxFQUFFO3dCQUNyRCxTQUFTO3FCQUNWO29CQUVELElBQUksYUFBYSxHQUE0QixJQUFJLENBQUM7b0JBQ2xELElBQ0UsTUFBTSxDQUFDLFFBQVE7d0JBQ2YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDL0M7d0JBQ0EsYUFBYSxHQUFHLDhCQUFjLEVBQzVCLE1BQU0sQ0FBQyxRQUFRLEVBQ2YsWUFBWSxDQUFDLE1BQU0sRUFDbkIsS0FBSyxDQUNOLENBQUM7cUJBQ0g7b0JBRUQsSUFBSSxjQUFjLEdBQTRCLElBQUksQ0FBQztvQkFDbkQsSUFDRSxNQUFNLENBQUMsU0FBUzt3QkFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDakQ7d0JBQ0EsY0FBYyxHQUFHLDhCQUFjLEVBQzdCLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLFlBQVksQ0FBQyxNQUFNLEVBQ25CLEtBQUssQ0FDTixDQUFDO3FCQUNIO29CQUtELElBQ0UsTUFBTSxDQUFDLFNBQVM7d0JBQ2hCLGFBQWEsS0FBSyxJQUFJO3dCQUN0QixjQUFjLEtBQUssSUFBSSxFQUN2Qjt3QkFDQSxjQUFjLEdBQUcsOEJBQWMsRUFDN0IsTUFBTSxDQUFDLFNBQVMsRUFDaEIsWUFBWSxDQUFDLE1BQU0sQ0FDcEIsQ0FBQztxQkFDSDtvQkFLRCxJQUNFLE1BQU0sQ0FBQyxRQUFRO3dCQUNmLGFBQWEsS0FBSyxJQUFJO3dCQUN0QixjQUFjLEtBQUssSUFBSSxFQUN2Qjt3QkFDQSxhQUFhLEdBQUcsOEJBQWMsRUFDNUIsTUFBTSxDQUFDLFFBQVEsRUFDZixZQUFZLENBQUMsTUFBTSxDQUNwQixDQUFDO3FCQUNIO29CQUlELElBQUksYUFBYSxLQUFLLElBQUksSUFBSSxjQUFjLEtBQUssSUFBSSxFQUFFO3dCQUNyRCxTQUFTO3FCQUNWO29CQUtELElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDN0QsU0FBUztxQkFDVjtvQkFHRCxJQUNFLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSzt3QkFDL0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQy9DO3dCQUNBLFNBQVM7cUJBQ1Y7b0JBRUQsTUFBTSxDQUFDLEdBQ0wsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFDOUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7b0JBQzlELE1BQU0sQ0FBQyxHQUNMLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzdELFNBQUcsQ0FBQyxHQUFHLENBQ0wsU0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBVSxDQUFDLEdBQUcsQ0FBQyxDQUN4RCxDQUFDO3dCQUNKLENBQUMsQ0FBQztvQkFDSixNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxNQUFNLGlCQUFpQixHQUNyQixDQUFDO3dCQUNELENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztvQkFFM0QsSUFBSSxPQUFpQyxDQUFDO29CQUN0QyxRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ2xCLEtBQUssdUJBQWUsQ0FBQyxHQUFHOzRCQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzRCQUNqQyxNQUFNO3dCQUVSLEtBQUssdUJBQWUsQ0FBQyxHQUFHOzRCQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzRCQUNqQyxNQUFNO3FCQUNUO29CQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDZixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3hCLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUN4QixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDcEIsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3JCLENBQUM7b0JBQ0YsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxTQUFTLENBQ2YsWUFBWSxFQUNaLENBQUMsRUFDRCxDQUFDLEVBQ0QsWUFBWSxDQUFDLEtBQUssRUFDbEIsWUFBWSxFQUNaLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFDMUIsWUFBWSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsRUFDdkMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFDeEQsaUJBQWlCLENBQ2xCLENBQUM7b0JBQ0YsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuQjthQUNGO1NBQ0Y7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTyx3QkFBd0IsQ0FDOUIsY0FBeUIsRUFDekIsYUFBcUMsRUFDckMsbUJBQW1DO1FBRW5DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQzlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFDL0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUNsRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FDOUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUMvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQ2xELENBQUM7UUFFRixLQUFLLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFO1lBQ3RDLE1BQU0sYUFBYSxHQUFHO2dCQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNoQixDQUFDO1lBQ0YsTUFBTSxZQUFZLEdBQUcsbUNBQW1CLEVBQUMsYUFBYSxDQUFDLENBQUM7WUFHeEQsSUFBSSxtQ0FBbUIsRUFBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUU7Z0JBR3RELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUN0QixTQUFTO2lCQUNWO2dCQUdELEtBQUssTUFBTSxNQUFNLElBQUksYUFBYSxFQUFFO29CQUdsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ3BDLFNBQVM7cUJBQ1Y7b0JBRUQsTUFBTSxxQkFBcUIsR0FBRzt3QkFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDaEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtxQkFDekIsQ0FBQztvQkFDRixNQUFNLG9CQUFvQixHQUFHLG1DQUFtQixFQUM5QyxxQkFBcUIsQ0FDdEIsQ0FBQztvQkFJRixJQUFJLG1DQUFtQixFQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFO3dCQUM3RCxTQUFTO3FCQUNWO29CQUlELElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7d0JBQ3JELFNBQVM7cUJBQ1Y7b0JBR0QsTUFBTSxlQUFlLEdBQUc7d0JBQ3RCLFFBQVEsRUFBRSxTQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDL0MsSUFBSSxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7cUJBQzlCLENBQUM7b0JBR0YsSUFBSSxDQUFDLG1DQUFtQixFQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsRUFBRTt3QkFDeEQsU0FBUztxQkFDVjtvQkFFRCxJQUFJLE9BQWlDLENBQUM7b0JBQ3RDLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTt3QkFDbEIsS0FBSyx1QkFBZSxDQUFDLEdBQUc7NEJBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7NEJBQ2pDLE1BQU07d0JBRVIsS0FBSyx1QkFBZSxDQUFDLEdBQUc7NEJBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7NEJBQ2pDLE1BQU07cUJBQ1Q7b0JBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FDVixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDeEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNwQixhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDckIsQ0FBQztvQkFDRixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2YsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNwQixPQUFPLENBQUMsT0FBTyxDQUNiLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNqQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUMxRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUNaLENBQUM7b0JBQ0YsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDMUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNmLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDbkI7YUFDRjtTQUNGO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sbUJBQW1CLENBQ3pCLHFCQUFnQyxFQUNoQyxzQkFBK0IsS0FBSztRQU9wQyxNQUFNLGFBQWEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pDLE1BQU0sb0JBQW9CLEdBQUcsbUNBQW1CLEVBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN4RSxNQUFNLG9CQUFvQixHQUFHLGlDQUFpQixFQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdEUsTUFBTSxXQUFXLEdBQVcsRUFBRSxDQUFDO1FBRS9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEQsTUFBTSxRQUFRLEdBQUcsY0FBRSxFQUFDLG9CQUFvQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4QyxJQUFJLENBQUMsNEJBQVksRUFBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbkUsTUFBTSxPQUFPLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sT0FBTyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRCxXQUFXLENBQUMsSUFBSSxDQUNkO29CQUNFLEtBQUssRUFBRSxRQUFRO29CQUNmLEdBQUcsRUFBRSxTQUFHLENBQUMsR0FBRyxDQUNWLFFBQVEsRUFDUixTQUFHLENBQUMsR0FBRyxDQUNMLFNBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQ2hCLElBQUksQ0FBQyxHQUFHLENBQ04sS0FBSyxDQUFDLGFBQWEsRUFDbkIsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDckQsQ0FDRixDQUNGO2lCQUNGLEVBQ0Q7b0JBQ0UsS0FBSyxFQUFFLE9BQU87b0JBQ2QsR0FBRyxFQUFFLFNBQUcsQ0FBQyxHQUFHLENBQ1YsT0FBTyxFQUNQLFNBQUcsQ0FBQyxHQUFHLENBQ0wsU0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FDTixLQUFLLENBQUMsYUFBYSxFQUNuQixXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUNyRCxDQUNGLENBQ0Y7aUJBQ0YsQ0FDRixDQUFDO2FBQ0g7U0FDRjtRQUVELElBQUksUUFBUSxHQUFnQixJQUFJLENBQUM7UUFDakMsSUFBSSxTQUFTLEdBQWdCLElBQUksQ0FBQztRQUNsQyxNQUFNLGFBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQzFDLFFBQVEsd0JBQVEsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLEVBQUU7WUFDckQsS0FBSyxnQkFBUSxDQUFDLE9BQU87Z0JBQ25CLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQzVCLE1BQU07aUJBQ1A7Z0JBRUQsUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxtQkFBbUIsRUFBRTtvQkFDdkIsYUFBYSxDQUFDLElBQUksQ0FDaEIscUJBQXFCLENBQUMsUUFBUSxFQUM5QixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixhQUFHLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixhQUFHLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtnQkFDRCxNQUFNO1lBRVIsS0FBSyxnQkFBUSxDQUFDLEdBQUc7Z0JBQ2YsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsTUFBTTtpQkFDUDtnQkFFRCxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLG1CQUFtQixFQUFFO29CQUN2QixhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxDQUNGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsQ0FBQyxPQUFpQyxFQUFFLEVBQUU7d0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsYUFBYSxDQUFDLENBQUMsRUFDZixhQUFhLENBQUMsQ0FBQyxFQUNmLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUNqQyxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELEtBQUssQ0FDTixDQUFDO29CQUNKLENBQUMsRUFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNyQixDQUFDO2lCQUNIO2dCQUNELE1BQU07WUFFUixLQUFLLGdCQUFRLENBQUMsUUFBUTtnQkFDcEIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsTUFBTTtpQkFDUDtnQkFFRCxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLG1CQUFtQixFQUFFO29CQUN2QixhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixhQUFHLEVBQ0QscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUMvRCxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNqQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUNuQixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNyQixDQUFDO2lCQUNIO2dCQUNELE1BQU07WUFFUixLQUFLLGdCQUFRLENBQUMsSUFBSTtnQkFDaEIsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDNUIsTUFBTTtpQkFDUDtnQkFFRCxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLG1CQUFtQixFQUFFO29CQUN2QixhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsQ0FBQyxPQUFpQyxFQUFFLEVBQUU7d0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQ1QsYUFBYSxDQUFDLENBQUMsRUFDZixhQUFhLENBQUMsQ0FBQyxFQUNmLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUNqQyxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELEtBQUssQ0FDTixDQUFDO29CQUNKLENBQUMsRUFDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNyQixDQUFDO2lCQUNIO2dCQUNELE1BQU07WUFFUixLQUFLLGdCQUFRLENBQUMsTUFBTTtnQkFDbEIsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxLQUFLO2dCQUNqQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLENBQUMsT0FBaUMsRUFBRSxFQUFFO3dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsQ0FBQyxDQUFDLEVBQ2YsYUFBYSxDQUFDLENBQUMsRUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFDakMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxLQUFLLENBQ04sQ0FBQztvQkFDSixDQUFDLENBQ0YsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxVQUFVO2dCQUN0QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixhQUFHLEVBQ0QscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDaEMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNoRSxDQUNGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsYUFBRyxFQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQy9DLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxNQUFNO2dCQUNsQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLENBQUMsT0FBaUMsRUFBRSxFQUFFO3dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUNULGFBQWEsQ0FBQyxDQUFDLEVBQ2YsYUFBYSxDQUFDLENBQUMsRUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFDakMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzFELFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxLQUFLLENBQ04sQ0FBQztvQkFDSixDQUFDLEVBQ0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixDQUFDLE9BQWlDLEVBQUUsRUFBRTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FDVCxhQUFhLENBQUMsQ0FBQyxFQUNmLGFBQWEsQ0FBQyxDQUFDLEVBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQ2pDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMxRCxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUQsS0FBSyxDQUNOLENBQUM7b0JBQ0osQ0FBQyxFQUNELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3JCLENBQUM7aUJBQ0g7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssZ0JBQVEsQ0FBQyxXQUFXO2dCQUN2QixJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QixNQUFNO2lCQUNQO2dCQUVELFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQ2xCLGFBQUcsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixTQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FDcEUsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNwQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNsQixhQUFHLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDbEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDckIsQ0FBQztpQkFDSDtnQkFDRCxNQUFNO1NBQ1Q7UUFFRCxPQUFPO1lBQ0wsb0JBQW9CO1lBQ3BCLFFBQVE7WUFDUixTQUFTO1lBQ1QsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQztJQUNKLENBQUM7O0FBOTdDSCxzQkErN0NDO0FBOTdDeUIsb0JBQWMsR0FBRyxHQUFHLENBQUM7QUFDckIsb0JBQWMsR0FBRyxPQUFPLENBQUM7QUFDekIseUJBQW1CLEdBQUcsR0FBRyxDQUFDO0FBQzFCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLHVCQUFpQixHQUFHLENBQUMsQ0FBQztBQUN0QixvQkFBYyxHQUFHLEVBQUUsQ0FBQztBQUNwQixtQkFBYSxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEg3QywwSUFBMEQ7QUFDMUQsc0hBQXNEO0FBQ3RELDhHQUE0QztBQUM1Qyw4RUFBOEM7QUFDOUMsaUZBT2tCO0FBQ2xCLDhFQUE4QztBQUM5Qyw4RUFBZ0M7QUFFaEMsNkZBQTBDO0FBQzFDLG9GQU1tQjtBQUNuQiw4RUFBa0U7QUFDbEUsMEZBS3FCO0FBQ3JCLDJFQUEyQztBQTRHM0MsTUFBYSxjQUFjO0lBdUJqQixNQUFNLENBQUMsYUFBYTtRQUMxQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQzVELENBQUM7SUFFTyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQWUsRUFBRSxDQUFlO1FBQzdELE9BQU8sQ0FDTCxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUMzRSxDQUFDO0lBQ0osQ0FBQztJQWtERCxZQUFtQixPQUF3QztRQTlDcEQsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUtyQixXQUFNLEdBQVEsYUFBRyxHQUFFLENBQUM7UUFFbkIsb0JBQWUsR0FBcUIsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUVuQyxzQkFBaUIsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEQscUJBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztRQUVoRCxnQ0FBMkIsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUQsK0JBQTBCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQztRQUVwRSxxQkFBZ0IsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkQsb0JBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBRTlDLCtCQUEwQixHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3RCw4QkFBeUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDO1FBRWxFLHFCQUFnQixHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuRCxvQkFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFFOUMsK0JBQTBCLEdBQUcsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdELDhCQUF5QixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUM7UUFFbEUsb0JBQWUsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEQsbUJBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUU1Qyw0QkFBdUIsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUQsMkJBQXNCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztRQUU1RCwwQkFBcUIsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEQseUJBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQztRQUV4RCw0QkFBdUIsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUQsMkJBQXNCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztRQUU1RCxlQUFVLEdBQXNCLElBQUksQ0FBQztRQUNyQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUc5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzFCLEVBQUUsRUFDRixjQUFjLENBQUMsZUFBZSxFQUM5QixPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxFQUFFLENBQ2QsQ0FBQztJQUNKLENBQUM7SUFLTSxTQUFTLENBQUMsT0FBOEI7UUFDN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSx3QkFBYyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBTU0sT0FBTyxDQUFDLE9BQW9CO1FBQ2pDLE9BQU8sSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFLTSxRQUFRLENBQUMsT0FBcUI7UUFDbkMsT0FBTyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUtNLFFBQVEsQ0FBQyxPQUFxQjtRQUNuQyxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBT00sZUFBZSxDQUFDLE9BQTRCO1FBQ2pELE1BQU0sSUFBSSxHQUFHLElBQUksc0JBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBS00sZUFBZSxDQUFDLE9BQTRCO1FBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFaEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUtNLGVBQWUsQ0FBQyxPQUE0QjtRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFLTSxlQUFlLENBQUMsT0FBNEI7UUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBS00sTUFBTSxDQUFDLE1BQWdDO1FBQzVDLElBQUksTUFBTSxZQUFZLGFBQUssRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQzVELE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBYU0sUUFBUSxDQUNiLE9BSVM7UUFFVCxJQUFJLENBQUMsYUFBYSxHQUFHLGlCQUFLLEVBQWUsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLGlCQUFLLEVBQWUsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBS08sYUFBYTs7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxVQUFJLENBQUMsVUFBVSxvQ0FBZixJQUFJLENBQUMsVUFBVSxHQUFLLElBQUksdUJBQVUsRUFBRSxFQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBS08sWUFBWSxDQUFDLE9BQWlDO1FBQ3BELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDckUsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztJQUNyRSxDQUFDO0lBU00sTUFBTSxDQUNYLE9BQWlDLEVBQ2pDLE1BQXNCLEVBQ3RCLFNBQXVEO1FBRXZELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsYUFBRyxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFLTSxZQUFZLENBQUMsT0FBaUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUtNLE9BQU8sQ0FBQyxNQUFzQixFQUFFLE1BQVc7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxNQUFNLGVBQWUsR0FDbkIsVUFBVSxLQUFLLElBQUk7WUFDbkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUNuRCxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQ2pFLENBQUM7UUFFSixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztRQUdELE1BQU0scUJBQXFCLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FDbkMsYUFBRyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUNuQyxDQUFDO1FBQ0YsTUFBTSxrQkFBa0IsR0FBRywyQkFBVSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RSxNQUFNLHdCQUF3QixHQUFHLDJCQUFVLEVBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQ3RDLENBQUM7UUFDRixNQUFNLDJCQUEyQixHQUFHLDJCQUFVLEVBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQ3pDLENBQUM7UUFHRixNQUFNLGVBQWUsR0FBRyxtQ0FBbUIsRUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDL0MsbUNBQW1CLEVBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FDbkQsQ0FBQztRQUdGLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFHckQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUM1QixLQUFLLENBQUMsT0FBTyxDQUNYLElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQ0YsQ0FBQztRQUdGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsR0FBRyxpQkFBaUIsQ0FBQztRQUVwRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBR2pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLHVCQUFlLENBQUMsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEdBQUcsaUJBQWlCLENBQUM7UUFFbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLHVCQUFlLENBQUMsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssdUJBQWUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUdoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXZELE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25ELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxTQUFTO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDbEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsQ0FDdkMsSUFBSSxFQUNKLEdBQUcsRUFDSCxLQUFLLEdBQUcsSUFBSSxFQUNaLE1BQU0sR0FBRyxHQUFHLENBQ2IsQ0FBQztRQUdGLElBQUksQ0FBQywyQkFBMkIsQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUM7UUFDckUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUN4QyxLQUFLLENBQUMsaUJBQWlCLEVBQ3ZCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQy9CLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ2hDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUdILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLHdCQUF3QjtZQUN2RCxrQkFBa0IsQ0FBQztRQUNyQixJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUczQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyx1QkFBZSxDQUFDLEdBQUcsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsR0FBRyw4QkFBYyxFQUN4RCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsd0JBQXdCLEVBQ3hCLDJCQUEyQixDQUM1QixDQUNGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ1osQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDO1FBQ3BFLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FDdkMsS0FBSyxDQUFDLGdCQUFnQixFQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUMvQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQ25FLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUdILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLHVCQUFlLENBQUMsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxHQUFHLDhCQUFjLEVBQ3hELElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIscUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQix3QkFBd0IsRUFDeEIsMkJBQTJCLENBQzVCLENBQ0YsQ0FBQztnQkFDRixJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDWixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUdILElBQUksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUM7UUFDcEUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUN2QyxLQUFLLENBQUMsZ0JBQWdCLEVBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQy9CLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDbkUsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCO1lBQ3RELGtCQUFrQixDQUFDO1FBQ3JCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUcxQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0I7WUFDdEQsa0JBQWtCLENBQUM7UUFDckIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hCLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixNQUFNLEVBQUUsYUFBYTtnQkFDckIsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNwQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtnQkFDcEMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNqRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQy9CLHFCQUFxQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCO2dCQUN6RCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQjtnQkFDckQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUI7Z0JBQ3ZELGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQjtnQkFDakQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0I7Z0JBQ3JELFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWU7Z0JBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWM7Z0JBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7YUFDcEMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLFVBQVUsSUFBSSxlQUFlLEVBQUU7WUFDakMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUdoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsR0FBRyxnQkFBZ0IsQ0FBQztZQUN6RSxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFLTyxxQkFBcUIsQ0FDM0IsYUFBa0IsRUFDbEIscUJBQTBCLEVBQzFCLFlBQW9CLEVBQ3BCLGtCQUEwQixFQUMxQixxQkFBNkI7UUFFN0IsSUFBSSxTQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFHLEdBQUUsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsTUFBTSxHQUFHLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkUsSUFBSSx1QkFBVyxFQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUN2QixPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sMEJBQVUsRUFBQyxZQUFZLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5RDtRQUVELE9BQU8sMEJBQVUsRUFBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUtNLGdCQUFnQixDQUFDLE9BQWlDO1FBQ3ZELElBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0I7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsS0FBSyxTQUFTO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUNsQztZQUNBLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRCxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFLTSxJQUFJLENBQUMsT0FBaUM7UUFDM0MsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWYsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUk3QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztZQUM3QyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUtPLGtCQUFrQixDQUFDLE1BQXNCO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUtPLG9CQUFvQixDQUFDLE1BQXNCO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7QUFsb0JILHdDQW1vQkM7QUFsb0J5Qiw4QkFBZSxHQUEwQjtJQUMvRCxxQkFBcUIsRUFBRSxJQUFJO0lBQzNCLGtCQUFrQixFQUFFLEtBQUs7SUFDekIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixhQUFhLEVBQUUsS0FBSztJQUNwQix1QkFBdUIsRUFBRSxHQUFHO0lBQzVCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsc0JBQXNCLEVBQUUsQ0FBQztJQUN6QixlQUFlLEVBQUUsRUFBRTtJQUNuQixjQUFjLEVBQUUsR0FBRztJQUNuQixhQUFhLEVBQUUsR0FBRztJQUNsQixrQkFBa0IsRUFBRSxPQUFPO0lBQzNCLHdCQUF3QixFQUFFLE9BQU87SUFDakMsMkJBQTJCLEVBQUUsT0FBTztJQUNwQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLG1CQUFtQixFQUFFLENBQUMsRUFBRTtJQUN4QiwwQkFBMEIsRUFBRSxFQUFFO0lBQzlCLDRCQUE0QixFQUFFLElBQUk7SUFDbEMsK0JBQStCLEVBQUUsR0FBRztJQUNwQyw0QkFBNEIsRUFBRSxHQUFHO0NBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9KSiw4R0FBNEM7QUEyQjVDLE1BQXNCLFdBQVc7SUFPL0IsWUFBbUIsUUFBd0IsRUFBRSxPQUFnQjtRQUZ0RCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBS00sTUFBTSxDQUFDLFFBQWE7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFLTSxNQUFNLENBQUMsSUFBUztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUtNLEdBQUcsQ0FBQyxPQUF5QjtRQUNsQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3RCLElBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDNUI7U0FDRjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBS00sTUFBTTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQS9DRCxrQ0ErQ0M7Ozs7Ozs7Ozs7Ozs7OztBQzFFRCw4R0FBNEM7QUFHNUMsZ0hBQXdEO0FBQ3hELHlIQUE4RDtBQUM5RCxnSEFBd0Q7QUFDeEQsNEhBQWdFO0FBQ2hFLCtHQUF5RDtBQWlDekQsSUFBSyxXQVNKO0FBVEQsV0FBSyxXQUFXO0lBQ2QsdURBQVM7SUFDVCx5REFBVTtJQUNWLHVEQUFTO0lBQ1QsdURBQVM7SUFDVCxpRUFBYztJQUNkLCtEQUFhO0lBQ2IsK0RBQWE7SUFDYiwyREFBVztBQUNiLENBQUMsRUFUSSxXQUFXLEtBQVgsV0FBVyxRQVNmO0FBU0QsTUFBYSxVQUFVO0lBb0JyQjtRQWJnQixXQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRCxPQUFFLEdBQWlDLElBQUksQ0FBQztRQVk5QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsQ0FDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUNsQixDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFLRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFZixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDekMsS0FBSyxFQUFFLElBQUk7WUFDWCxrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQ3JFLE9BQU87U0FDUjtRQUVELElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsR0FBRyxhQUFhLEtBQUssTUFBTSxFQUFFLENBQUM7WUFFbEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDeEU7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUM7YUFDeEMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRyxDQUFDO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUcsQ0FBQztRQUVuRCxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLFVBQVUsQ0FDWCxFQUFFLENBQUMsWUFBWSxFQUNmLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzFDLEVBQUUsQ0FBQyxXQUFXLENBQ2YsQ0FBQztRQUNGLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsa0NBQWtDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxhQUFhLENBQ25CLEVBQXlCLEVBQ3pCLElBQVksRUFDWixNQUFjOztRQUVkLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDdEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixJQUNFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2pELENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUNuQjtZQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxtQ0FBSSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3JFO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGFBQWEsQ0FDbkIsRUFBeUIsRUFDekIsY0FBc0I7O1FBRXRCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUcsQ0FBQztRQUVwQyxFQUFFLENBQUMsWUFBWSxDQUNiLE9BQU8sRUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUNyRCxDQUFDO1FBQ0YsRUFBRSxDQUFDLFlBQVksQ0FDYixPQUFPLEVBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FDM0QsQ0FBQztRQUNGLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEIsSUFDRSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNoRCxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkI7WUFDQSxNQUFNLElBQUksS0FBSyxDQUFDLFFBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsbUNBQUksZ0JBQWdCLENBQUMsQ0FBQztTQUNwRTtRQUVELE1BQU0sUUFBUSxHQUF3QixFQUFFLENBQUM7UUFDekMsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUUsQ0FBQztZQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUUsQ0FBQztTQUN4RDtRQUVELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUtPLE1BQU0sQ0FDWixFQUF5QixFQUN6QixJQUFZLEVBQ1osT0FBcUIsRUFDckIsS0FBb0IsRUFDcEIsTUFBYztRQUVkLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBS08sTUFBTSxDQUFDLEVBQXlCLEVBQUUsTUFBVztRQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNyRSxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLEVBQUUsQ0FBQyxVQUFVLENBQ1gsRUFBRSxDQUFDLFVBQVUsRUFDYixDQUFDLEVBQ0QsRUFBRSxDQUFDLElBQUksRUFDUCxNQUFNLENBQUMsQ0FBQyxFQUNSLE1BQU0sQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxFQUNELEVBQUUsQ0FBQyxJQUFJLEVBQ1AsRUFBRSxDQUFDLGFBQWEsRUFDaEIsSUFBSSxDQUNMLENBQUM7UUFFRixFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDN0QsRUFBRSxDQUFDLG9CQUFvQixDQUNyQixFQUFFLENBQUMsV0FBVyxFQUNkLEVBQUUsQ0FBQyxpQkFBaUIsRUFDcEIsRUFBRSxDQUFDLFVBQVUsRUFDYixJQUFJLENBQUMsZUFBZSxFQUNwQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFLTyxRQUFRLENBQ2QsRUFBeUIsRUFDekIsRUFBRSxRQUFRLEVBQVcsRUFDckIsZUFBeUIsRUFDekIsaUJBQTJCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzNELEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUtPLFdBQVcsQ0FDakIsRUFBeUIsRUFDekIsT0FBcUIsRUFDckIsTUFBVyxFQUNYLEtBQWM7UUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRWpDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdEQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFLTyxnQkFBZ0IsQ0FDdEIsRUFBeUIsRUFDekIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFXLEVBQzlCLEtBQWtCO1FBRWxCLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDeEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BFLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBS08sU0FBUyxDQUNmLEVBQXlCLEVBQ3pCLE9BQWdCLEVBQ2hCLEtBQVksRUFDWixLQUFrQjtRQUVsQixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDeEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV4RSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsU0FBUyxDQUNWLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUMvQixLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUM5QixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FDWCxFQUFFLEVBQ0YsT0FBTyxFQUNQO1lBQ0UsT0FBTyxDQUFDLENBQUM7WUFDVCxPQUFPLENBQUMsQ0FBQztZQUNULFdBQVcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDekIsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUMxQixFQUNEO1lBQ0UsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztTQUNQLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFNTSxNQUFNLENBQUMsS0FBa0I7UUFDOUIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNuRSxNQUFNLElBQUksR0FBbUM7WUFDM0MsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDeEMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDMUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDeEMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDekMsQ0FBQztRQUNGLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvRDtRQUlELEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUNULEVBQUUsRUFDRixXQUFXLENBQUMsV0FBVyxFQUN2QixJQUFJLENBQUMsY0FBYyxFQUNuQixLQUFLLENBQUMsZUFBZSxFQUNyQixFQUFFLENBQUMsT0FBTyxDQUNYLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxTQUFTLENBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQ2hELEtBQUssQ0FBQyxpQkFBaUIsQ0FDeEIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxTQUFTLENBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQzdDLEtBQUssQ0FBQyxjQUFjLENBQ3JCLENBQUM7UUFFRixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FDVCxFQUFFLEVBQ0YsV0FBVyxDQUFDLFdBQVcsRUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQ3RDLEtBQUssQ0FBQyxXQUFXLEVBQ2pCLEVBQUUsQ0FBQyxPQUFPLENBQ1gsQ0FBQztZQUVGLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2RCxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRCxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWxELEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0I7UUFFRCxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FDVCxFQUFFLEVBQ0YsV0FBVyxDQUFDLGNBQWMsRUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ3pDLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsS0FBSyxDQUNOLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUNULEVBQUUsRUFDRixXQUFXLENBQUMsYUFBYSxFQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsRUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixLQUFLLENBQ04sQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQ1QsRUFBRSxFQUNGLFdBQVcsQ0FBQyxhQUFhLEVBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLEtBQUssQ0FDTixDQUFDO1lBSUYsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVyRCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkQ7U0FDRjtRQUVELEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBTU0sWUFBWSxDQUFDLE1BQVc7UUFDN0IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztDQUNGO0FBdlpELGdDQXVaQzs7Ozs7Ozs7Ozs7Ozs7O0FDamRELDhHQUE0QztBQUU1QyxnR0FBZ0U7QUFDaEUsOEVBQXlEO0FBQ3pELDBGQUlxQjtBQTZDckIsTUFBc0IsT0FFcEIsU0FBUSx5QkFBb0I7SUFGOUI7O1FBTVMsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQXlCLElBQUksQ0FBQztRQUNuQyxjQUFTLEdBQXlCLElBQUksQ0FBQztRQUN2QyxnQkFBVyxHQUF5QixJQUFJLENBQUM7UUFDekMsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixlQUFVLEdBQThDLEVBQUUsQ0FBQztJQTBGcEUsQ0FBQztJQTlFUyxjQUFjLENBQUMsT0FBaUMsRUFBRSxNQUFjO1FBQ3RFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxRQUFRLENBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ1osQ0FBQztJQUNKLENBQUM7SUFFUyxTQUFTLENBQUMsT0FBaUMsRUFBRSxLQUFvQjtRQUN6RSxvQ0FBb0IsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFpQztRQUMzQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQztRQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRVMsYUFBYSxDQUNyQixPQUFpQyxFQUNqQyxLQUEyQixFQUMzQixhQUFxQjtRQUVyQixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFZixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sYUFBYSxDQUFDLE9BQWlDO1FBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FDaEIsT0FBTyxFQUNQLElBQUksQ0FBQyxTQUFTLEVBQ2QsT0FBTyxDQUFDLHlCQUF5QixDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVNLGVBQWUsQ0FBQyxPQUFpQztRQUN0RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxhQUFhLENBQ2hCLE9BQU8sRUFDUCxJQUFJLENBQUMsV0FBVyxFQUNoQixPQUFPLENBQUMsMkJBQTJCLENBQ3BDLENBQUM7SUFDSixDQUFDO0lBRVMsUUFBUSxDQUFDLE9BQWlDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O0FBcEdILDBCQXFHQztBQWxHeUIsaUNBQXlCLEdBQUcsU0FBUyxDQUFDO0FBQ3RDLG1DQUEyQixHQUFHLE9BQU8sQ0FBQztBQTBHaEUsTUFBYSxjQUFlLFNBQVEsT0FBOEI7SUFHaEUsWUFBbUIsUUFBd0IsRUFBRSxPQUE4QjtRQUN6RSxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSHBCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFJbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sUUFBUSxDQUFDLE9BQWlDO1FBQy9DLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBbEJELHdDQWtCQztBQW9DRCxNQUFhLFlBQWEsU0FBUSxPQUE0QjtJQU81RCxZQUFtQixRQUF3QixFQUFFLE9BQTRCO1FBQ3ZFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFQcEIsU0FBSSxHQUF5QixJQUFJLENBQUM7UUFDbEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGtCQUFhLEdBQVEsYUFBRyxHQUFFLENBQUM7UUFDM0IsVUFBSyxHQUFvQix1QkFBZSxDQUFDLEdBQUcsQ0FBQztRQUlsRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBaUM7O1FBQy9DLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWYsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUdELE1BQU0sSUFBSSxHQUNSLFVBQUksQ0FBQyxJQUFJLG1DQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksMEJBQVUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBbUI7UUFDakMsTUFBTSxTQUFTLEdBQ2IsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVoRSxPQUFPLENBQ0wsSUFBSSxDQUFDLFNBQVM7WUFDZCxLQUFLLENBQUMsU0FBUztZQUVmLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNO1lBQzVCLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU07WUFDNUIsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSztZQUMxQixJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLFNBQVM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsV0FBVztZQUN0QyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNO1lBQzVCLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLFlBQVk7WUFDeEMsU0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUMzQixDQUFDO0lBQ0osQ0FBQztJQUtNLEtBQUssQ0FBQyxLQUFtQjtRQUM5QixPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckMsR0FBSSxJQUFxQjtZQUN6QixHQUFHLGlDQUFpQixFQUFDLElBQUksRUFBRSxLQUFLLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBcEVELG9DQW9FQzs7Ozs7Ozs7Ozs7Ozs7O0FDN1JELDhHQUE0QztBQXdDNUMsTUFBYSxJQUFJO0lBU2YsWUFBbUIsUUFBd0IsRUFBRSxPQUFvQjs7UUFDL0QsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBRTFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNyQyxHQUFHLFNBQVM7WUFDWixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsbUJBQW1CO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNwQyxHQUFHLEtBQUs7WUFDUixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNsQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztZQUM1QixNQUFNLEVBQUUsU0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU0sbUNBQUksSUFBSSxDQUFDLGtCQUFrQjtZQUM5QyxLQUFLLEVBQUUsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sY0FBYyxDQUFDLFNBQW9CO1FBQ3pDLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXZELE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBRyxFQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pELElBQUksRUFBRSxhQUFHLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxTQUFvQjtRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQUcsRUFBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZFLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtTQUNyQixDQUFDO0lBQ0osQ0FBQztJQUtNLE1BQU0sQ0FBQyxRQUFhO1FBQ3pCLE1BQU0sU0FBUyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXZELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBS00sTUFBTTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O0FBbkVILG9CQW9FQztBQW5FeUIsdUJBQWtCLEdBQUcsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6Q3ZELDhFQUEwQztBQUMxQywwRkFBa0Q7QUFFbEQsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUM7QUFDakMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFJLENBQUMsS0FBSyxFQUFFLFlBQUksQ0FBQyxHQUFHLEVBQUUsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBWWhGLFNBQVMsVUFBVSxDQUF5QixLQUFVO0lBQ3BELE1BQU0sTUFBTSxHQUFlLEVBQUUsQ0FBQztJQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxNQUFNLENBQUMsR0FBRyxtQ0FBbUIsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsTUFBTSxDQUFDLEdBQUcsbUNBQW1CLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLFNBQVM7YUFDVjtZQUdELElBQ0UsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRztnQkFDZixDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNO2dCQUNyQixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJO2dCQUNqQixDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQ25CO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLFNBQVM7YUFDVjtZQUdELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBR0QsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0M7WUFHRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMvQztZQUdELElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFTRCxTQUFnQixLQUFLLENBQ25CLEtBQVUsRUFDVixPQUF5QztJQUd6QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDakMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixJQUFJLE1BQWtCLENBQUM7SUFDdkIsT0FDRSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUN4QyxDQUFDLEVBQUUsR0FBRyxvQkFBb0IsRUFDMUI7UUFHQSxNQUFNLENBQUMsSUFBSSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoRSxDQUFDO1FBRUYsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFHakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5QyxTQUFTO2FBQ1Y7WUFFRCxJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBQ3hCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsU0FBUzthQUNWO1lBRUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekI7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUE5Q0Qsc0JBOENDOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUQsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDZCQUFpQjtJQUNqQiw2QkFBaUI7SUFDakIsMkJBQWU7QUFDakIsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBRUQsSUFBWSxRQVVYO0FBVkQsV0FBWSxRQUFRO0lBQ2xCLGdDQUFvQjtJQUNwQix1QkFBVztJQUNYLGtDQUFzQjtJQUN0Qix5QkFBYTtJQUNiLDZCQUFpQjtJQUNqQiwyQkFBZTtJQUNmLHNDQUEwQjtJQUMxQiw2QkFBaUI7SUFDakIsd0NBQTRCO0FBQzlCLENBQUMsRUFWVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQVVuQjtBQVlELElBQVksSUFLWDtBQUxELFdBQVksSUFBSTtJQUNkLG1CQUFXO0lBQ1gsdUJBQWU7SUFDZix5QkFBaUI7SUFDakIscUJBQWE7QUFDZixDQUFDLEVBTFcsSUFBSSxHQUFKLFlBQUksS0FBSixZQUFJLFFBS2Y7QUFFRCxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsOEJBQVc7SUFDWCw4QkFBVztBQUNiLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0VELHNIQUE0RDtBQUM1RCw4R0FBNEM7QUFDNUMsOEVBVWlCO0FBS2pCLFNBQWdCLE1BQU0sQ0FBQyxHQUFHLE9BQWM7SUFDdEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNuQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0QsYUFBRyxFQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FDeEIsQ0FBQztBQUNKLENBQUM7QUFMRCx3QkFLQztBQUtELFNBQWdCLE1BQU0sQ0FBQyxHQUFHLE9BQWM7SUFDdEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNuQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0QsYUFBRyxFQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQzFCLENBQUM7QUFDSixDQUFDO0FBTEQsd0JBS0M7QUFLRCxTQUFnQixpQkFBaUIsQ0FBQyxDQUFZLEVBQUUsQ0FBWTtJQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUN4QixTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMzQixTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUM1QixDQUFDO0lBRUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUM1RCxDQUFDO0FBUkQsOENBUUM7QUFLRCxTQUFnQixjQUFjLENBQUMsTUFBYztJQUMzQyxPQUFPLFFBQVEsTUFBTSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3BFLENBQUM7QUFGRCx3Q0FFQztBQUtELFNBQWdCLFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDeEQsT0FBTztRQUNMLENBQUMsRUFBRSxnQkFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFFLGdCQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQUUsZ0JBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRSxnQkFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDckIsQ0FBQztBQUNKLENBQUM7QUFQRCxnQ0FPQztBQVFELFNBQWdCLGNBQWMsQ0FDNUIsSUFBVSxFQUNWLENBQVMsRUFDVCxjQUF1QixJQUFJLEVBQzNCLGFBQXNCLElBQUk7SUFFMUIsSUFBSSx1QkFBVyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDekMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUN6QixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBbkJELHdDQW1CQztBQUtELFNBQWdCLFlBQVksQ0FBQyxJQUFVLEVBQUUsUUFBYTtJQUNwRCxNQUFNLElBQUksR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwRCxNQUFNLFVBQVUsR0FBRyxhQUFHLEVBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLFdBQVcsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUN6QixTQUFHLENBQUMsR0FBRyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FDL0QsQ0FBQztJQUVGLE9BQU8sU0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFSRCxvQ0FRQztBQUtELFNBQWdCLG1CQUFtQixDQUFDLFFBQW9CO0lBQ3RELE9BQU87UUFDTCxRQUFRLEVBQUUsYUFBRyxFQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMxQyxJQUFJLEVBQUUsYUFBRyxFQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7S0FDMUUsQ0FBQztBQUNKLENBQUM7QUFMRCxrREFLQztBQUtELFNBQWdCLG1CQUFtQixDQUFDLFNBQW9CO0lBQ3RELE9BQU87UUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixNQUFNLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hELENBQUM7QUFDSixDQUFDO0FBUEQsa0RBT0M7QUFPRCxTQUFnQixTQUFTLENBQUMsQ0FBYSxFQUFFLENBQWE7SUFDcEQsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUM1QixDQUFDO0FBQ0osQ0FBQztBQVRELDhCQVNDO0FBS0QsU0FBZ0IsbUJBQW1CLENBQUMsQ0FBWSxFQUFFLENBQVk7SUFDNUQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUN2QixNQUFNLEdBQUcsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDdkIsTUFBTSxHQUFHLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxRSxDQUFDO0FBUEQsa0RBT0M7QUFLRCxTQUFnQixpQkFBaUIsQ0FBQyxTQUFvQjtJQUNwRCxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBQzlCLE1BQU0sRUFBRSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsYUFBRyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxhQUFHLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBTEQsOENBS0M7QUFLRCxTQUFnQixPQUFPLENBQ3JCLE9BQWlDLEVBQ2pDLEdBQUcsUUFBeUI7SUFFNUIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPO0tBQ1I7SUFFRCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEIsSUFBSSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7UUFDckMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3RCO1NBQU07UUFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDcEMsUUFBUSxDQUFDLENBQUMsQ0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxPQUFPLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQVMsQ0FBQyxDQUFDLEVBQUcsUUFBUSxDQUFDLENBQUMsQ0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO0tBQ0Y7SUFDRCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQXRCRCwwQkFzQkM7QUFLRCxTQUFnQixRQUFRLENBQUMsQ0FBUyxFQUFFLFFBQW9CO0lBQ3RELElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDdkIsT0FBTyxnQkFBUSxDQUFDLE1BQU0sQ0FBQztLQUN4QjtJQUVELElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDckIsT0FBTyxnQkFBUSxDQUFDLEtBQUssQ0FBQztLQUN2QjtJQUVELE9BQU8sZ0JBQVEsQ0FBQyxNQUFNLENBQUM7QUFDekIsQ0FBQztBQVZELDRCQVVDO0FBS0QsU0FBZ0IsUUFBUSxDQUFDLEtBQVUsRUFBRSxRQUFvQjtJQUN2RCxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzRSxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUUzRSxPQUFPO1FBQ0wsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLENBQUMsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBUSxDQUFDLE9BQU87WUFDbkMsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsSUFBSTtZQUNoQyxDQUFDLGdCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxVQUFVO1NBQ3RDO1FBQ0QsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pCLENBQUMsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBUSxDQUFDLEdBQUc7WUFDL0IsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsTUFBTTtZQUNsQyxDQUFDLGdCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxNQUFNO1NBQ2xDO1FBQ0QsQ0FBQyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLENBQUMsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxnQkFBUSxDQUFDLFFBQVE7WUFDcEMsQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFRLENBQUMsS0FBSztZQUNqQyxDQUFDLGdCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsZ0JBQVEsQ0FBQyxXQUFXO1NBQ3ZDO0tBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUM7QUFyQkQsNEJBcUJDO0FBS0QsU0FBZ0Isb0JBQW9CLENBQ2xDLE9BQWlDLEVBQ2pDLEtBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQWU7SUFFZixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUVyQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU87S0FDUjtJQUVELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDNUIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQjtBQUNILENBQUM7QUFwQkQsb0RBb0JDO0FBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxPQUFPLEVBQW9DLENBQUM7QUFNcEUsU0FBZ0IsVUFBVSxDQUFDLEtBQW9CO0lBQzdDLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0MsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksS0FBSyxZQUFZLGdCQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN4RCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU3QixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsd0JBQXdCLEdBQUcsV0FBVyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNoQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUF6QkQsZ0NBeUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xTRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCQSw0RUFBZ0M7QUFBdkIsb0dBQUs7QUFFZCwrRUFBb0U7QUFBM0QsbUhBQVk7QUFBRSxtSEFBWTtBQUFFLG1IQUFZO0FBT2pELDRFQUFnQztBQUF2QixvR0FBSztBQUVkLHVHQUFrRDtBQUF6QywrSEFBYztBQUV2Qiw4RkFBNEM7QUFBbkMsc0hBQVc7QUFFcEIsa0ZBQWtFO0FBQXpELHdIQUFjO0FBQUUsMEdBQU87QUFBRSxvSEFBWTtBQU05Qyw0RUFBMEM7QUFBakMsd0hBQWU7QUFFeEIseUVBQThCO0FBQXJCLGlHQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3IvcGFyc2Vjb2xvci5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0FjdG9yLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0Nhc3Rlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9MaWdodC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9MaWdodGluZ1N5c3RlbS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9TY2VuZU9iamVjdC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9TaGFkZXJQYXNzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL1N1cmZhY2UudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvV2FsbC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9tZXJnZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGlnaHRpbmcyRFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMaWdodGluZzJEXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsIi8qXHJcblxyXG5QYXJzZSBhIHZhbGlkIENTUyBjb2xvciBzdHJpbmcgaW50byBhbiBvYmplY3QgbGlrZTogeyByLCBnLCBiLCBhIH1cclxuUHJvcGVydGllcyB3aWxsIGhhdmUgdGhlIGNvcnJlY3QgaW50ZXJ2YWwgYW5kIHByZWNpc2lvbi5cclxuVmFsaWQgaW5wdXQgZXhhbXBsZXM6XHJcblxyXG5yZWRcclxuI2YwMFxyXG4jZmYwMDAwXHJcbiNmZjAwMDBmZlxyXG5yZ2IoMjU1LCAwLCAwKVxyXG5yZ2IoMTAwJSwgMCUsIDAlKVxyXG5yZ2JhKDI1NSwgMCwgMCwgMSlcclxucmdiYSgxMDAlLCAwJSwgMCUsIDEpXHJcbmhzbCgwLCAxMDAlLCA1MCUpXHJcbmhzbGEoMCwgMTAwJSwgNTAlLCAxKVxyXG5cclxuKi9cclxuY29uc3QgcGFyc2VDb2xvciA9IChmdW5jdGlvbigpIHtcclxuXHRjb25zdCBuYW1lcyA9IHtcclxuXHRcdFwiYWxpY2VibHVlXCI6IFwiZjBmOGZmXCIsXHJcblx0XHRcImFudGlxdWV3aGl0ZVwiOiBcImZhZWJkN1wiLFxyXG5cdFx0XCJhcXVhXCI6IFwiMGZmXCIsXHJcblx0XHRcImFxdWFtYXJpbmVcIjogXCI3ZmZmZDRcIixcclxuXHRcdFwiYXp1cmVcIjogXCJmMGZmZmZcIixcclxuXHRcdFwiYmVpZ2VcIjogXCJmNWY1ZGNcIixcclxuXHRcdFwiYmlzcXVlXCI6IFwiZmZlNGM0XCIsXHJcblx0XHRcImJsYWNrXCI6IFwiMDAwXCIsXHJcblx0XHRcImJsYW5jaGVkYWxtb25kXCI6IFwiZmZlYmNkXCIsXHJcblx0XHRcImJsdWVcIjogXCIwMGZcIixcclxuXHRcdFwiYmx1ZXZpb2xldFwiOiBcIjhhMmJlMlwiLFxyXG5cdFx0XCJicm93blwiOiBcImE1MmEyYVwiLFxyXG5cdFx0XCJidXJseXdvb2RcIjogXCJkZWI4ODdcIixcclxuXHRcdFwiY2FkZXRibHVlXCI6IFwiNWY5ZWEwXCIsXHJcblx0XHRcImNoYXJ0cmV1c2VcIjogXCI3ZmZmMDBcIixcclxuXHRcdFwiY2hvY29sYXRlXCI6IFwiZDI2OTFlXCIsXHJcblx0XHRcImNvcmFsXCI6IFwiZmY3ZjUwXCIsXHJcblx0XHRcImNvcm5mbG93ZXJibHVlXCI6IFwiNjQ5NWVkXCIsXHJcblx0XHRcImNvcm5zaWxrXCI6IFwiZmZmOGRjXCIsXHJcblx0XHRcImNyaW1zb25cIjogXCJkYzE0M2NcIixcclxuXHRcdFwiY3lhblwiOiBcIjBmZlwiLFxyXG5cdFx0XCJkYXJrYmx1ZVwiOiBcIjAwMDA4YlwiLFxyXG5cdFx0XCJkYXJrY3lhblwiOiBcIjAwOGI4YlwiLFxyXG5cdFx0XCJkYXJrZ29sZGVucm9kXCI6IFwiYjg4NjBiXCIsXHJcblx0XHRcImRhcmtncmF5XCI6IFwiYTlhOWE5XCIsXHJcblx0XHRcImRhcmtncmVlblwiOiBcIjAwNjQwMFwiLFxyXG5cdFx0XCJkYXJrZ3JleVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJra2hha2lcIjogXCJiZGI3NmJcIixcclxuXHRcdFwiZGFya21hZ2VudGFcIjogXCI4YjAwOGJcIixcclxuXHRcdFwiZGFya29saXZlZ3JlZW5cIjogXCI1NTZiMmZcIixcclxuXHRcdFwiZGFya29yYW5nZVwiOiBcImZmOGMwMFwiLFxyXG5cdFx0XCJkYXJrb3JjaGlkXCI6IFwiOTkzMmNjXCIsXHJcblx0XHRcImRhcmtyZWRcIjogXCI4YjAwMDBcIixcclxuXHRcdFwiZGFya3NhbG1vblwiOiBcImU5OTY3YVwiLFxyXG5cdFx0XCJkYXJrc2VhZ3JlZW5cIjogXCI4ZmJjOGZcIixcclxuXHRcdFwiZGFya3NsYXRlYmx1ZVwiOiBcIjQ4M2Q4YlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmF5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWdyZXlcIjogXCIyZjRmNGZcIixcclxuXHRcdFwiZGFya3R1cnF1b2lzZVwiOiBcIjAwY2VkMVwiLFxyXG5cdFx0XCJkYXJrdmlvbGV0XCI6IFwiOTQwMGQzXCIsXHJcblx0XHRcImRlZXBwaW5rXCI6IFwiZmYxNDkzXCIsXHJcblx0XHRcImRlZXBza3libHVlXCI6IFwiMDBiZmZmXCIsXHJcblx0XHRcImRpbWdyYXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZGltZ3JleVwiOiBcIjY5Njk2OVwiLFxyXG5cdFx0XCJkb2RnZXJibHVlXCI6IFwiMWU5MGZmXCIsXHJcblx0XHRcImZpcmVicmlja1wiOiBcImIyMjIyMlwiLFxyXG5cdFx0XCJmbG9yYWx3aGl0ZVwiOiBcImZmZmFmMFwiLFxyXG5cdFx0XCJmb3Jlc3RncmVlblwiOiBcIjIyOGIyMlwiLFxyXG5cdFx0XCJmdWNoc2lhXCI6IFwiZjBmXCIsXHJcblx0XHRcImdhaW5zYm9yb1wiOiBcImRjZGNkY1wiLFxyXG5cdFx0XCJnaG9zdHdoaXRlXCI6IFwiZjhmOGZmXCIsXHJcblx0XHRcImdvbGRcIjogXCJmZmQ3MDBcIixcclxuXHRcdFwiZ29sZGVucm9kXCI6IFwiZGFhNTIwXCIsXHJcblx0XHRcImdyYXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiZ3JlZW5cIjogXCIwMDgwMDBcIixcclxuXHRcdFwiZ3JlZW55ZWxsb3dcIjogXCJhZGZmMmZcIixcclxuXHRcdFwiZ3JleVwiOiBcIjgwODA4MFwiLFxyXG5cdFx0XCJob25leWRld1wiOiBcImYwZmZmMFwiLFxyXG5cdFx0XCJob3RwaW5rXCI6IFwiZmY2OWI0XCIsXHJcblx0XHRcImluZGlhbnJlZFwiOiBcImNkNWM1Y1wiLFxyXG5cdFx0XCJpbmRpZ29cIjogXCI0YjAwODJcIixcclxuXHRcdFwiaXZvcnlcIjogXCJmZmZmZjBcIixcclxuXHRcdFwia2hha2lcIjogXCJmMGU2OGNcIixcclxuXHRcdFwibGF2ZW5kZXJcIjogXCJlNmU2ZmFcIixcclxuXHRcdFwibGF2ZW5kZXJibHVzaFwiOiBcImZmZjBmNVwiLFxyXG5cdFx0XCJsYXduZ3JlZW5cIjogXCI3Y2ZjMDBcIixcclxuXHRcdFwibGVtb25jaGlmZm9uXCI6IFwiZmZmYWNkXCIsXHJcblx0XHRcImxpZ2h0Ymx1ZVwiOiBcImFkZDhlNlwiLFxyXG5cdFx0XCJsaWdodGNvcmFsXCI6IFwiZjA4MDgwXCIsXHJcblx0XHRcImxpZ2h0Y3lhblwiOiBcImUwZmZmZlwiLFxyXG5cdFx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBcImZhZmFkMlwiLFxyXG5cdFx0XCJsaWdodGdyYXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRncmVlblwiOiBcIjkwZWU5MFwiLFxyXG5cdFx0XCJsaWdodGdyZXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRwaW5rXCI6IFwiZmZiNmMxXCIsXHJcblx0XHRcImxpZ2h0c2FsbW9uXCI6IFwiZmZhMDdhXCIsXHJcblx0XHRcImxpZ2h0c2VhZ3JlZW5cIjogXCIyMGIyYWFcIixcclxuXHRcdFwibGlnaHRza3libHVlXCI6IFwiODdjZWZhXCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmF5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmV5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c3RlZWxibHVlXCI6IFwiYjBjNGRlXCIsXHJcblx0XHRcImxpZ2h0eWVsbG93XCI6IFwiZmZmZmUwXCIsXHJcblx0XHRcImxpbWVcIjogXCIwZjBcIixcclxuXHRcdFwibGltZWdyZWVuXCI6IFwiMzJjZDMyXCIsXHJcblx0XHRcImxpbmVuXCI6IFwiZmFmMGU2XCIsXHJcblx0XHRcIm1hZ2VudGFcIjogXCJmMGZcIixcclxuXHRcdFwibWFyb29uXCI6IFwiODAwMDAwXCIsXHJcblx0XHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogXCI2NmNkYWFcIixcclxuXHRcdFwibWVkaXVtYmx1ZVwiOiBcIjAwMDBjZFwiLFxyXG5cdFx0XCJtZWRpdW1vcmNoaWRcIjogXCJiYTU1ZDNcIixcclxuXHRcdFwibWVkaXVtcHVycGxlXCI6IFwiOTM3MGRiXCIsXHJcblx0XHRcIm1lZGl1bXNlYWdyZWVuXCI6IFwiM2NiMzcxXCIsXHJcblx0XHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBcIjdiNjhlZVwiLFxyXG5cdFx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBcIjAwZmE5YVwiLFxyXG5cdFx0XCJtZWRpdW10dXJxdW9pc2VcIjogXCI0OGQxY2NcIixcclxuXHRcdFwibWVkaXVtdmlvbGV0cmVkXCI6IFwiYzcxNTg1XCIsXHJcblx0XHRcIm1pZG5pZ2h0Ymx1ZVwiOiBcIjE5MTk3MFwiLFxyXG5cdFx0XCJtaW50Y3JlYW1cIjogXCJmNWZmZmFcIixcclxuXHRcdFwibWlzdHlyb3NlXCI6IFwiZmZlNGUxXCIsXHJcblx0XHRcIm1vY2Nhc2luXCI6IFwiZmZlNGI1XCIsXHJcblx0XHRcIm5hdmFqb3doaXRlXCI6IFwiZmZkZWFkXCIsXHJcblx0XHRcIm5hdnlcIjogXCIwMDAwODBcIixcclxuXHRcdFwib2xkbGFjZVwiOiBcImZkZjVlNlwiLFxyXG5cdFx0XCJvbGl2ZVwiOiBcIjgwODAwMFwiLFxyXG5cdFx0XCJvbGl2ZWRyYWJcIjogXCI2YjhlMjNcIixcclxuXHRcdFwib3JhbmdlXCI6IFwiZmZhNTAwXCIsXHJcblx0XHRcIm9yYW5nZXJlZFwiOiBcImZmNDUwMFwiLFxyXG5cdFx0XCJvcmNoaWRcIjogXCJkYTcwZDZcIixcclxuXHRcdFwicGFsZWdvbGRlbnJvZFwiOiBcImVlZThhYVwiLFxyXG5cdFx0XCJwYWxlZ3JlZW5cIjogXCI5OGZiOThcIixcclxuXHRcdFwicGFsZXR1cnF1b2lzZVwiOiBcImFmZWVlZVwiLFxyXG5cdFx0XCJwYWxldmlvbGV0cmVkXCI6IFwiZGI3MDkzXCIsXHJcblx0XHRcInBhcGF5YXdoaXBcIjogXCJmZmVmZDVcIixcclxuXHRcdFwicGVhY2hwdWZmXCI6IFwiZmZkYWI5XCIsXHJcblx0XHRcInBlcnVcIjogXCJjZDg1M2ZcIixcclxuXHRcdFwicGlua1wiOiBcImZmYzBjYlwiLFxyXG5cdFx0XCJwbHVtXCI6IFwiZGRhMGRkXCIsXHJcblx0XHRcInBvd2RlcmJsdWVcIjogXCJiMGUwZTZcIixcclxuXHRcdFwicHVycGxlXCI6IFwiODAwMDgwXCIsXHJcblx0XHRcInJlYmVjY2FwdXJwbGVcIjogXCI2MzlcIixcclxuXHRcdFwicmVkXCI6IFwiZjAwXCIsXHJcblx0XHRcInJvc3licm93blwiOiBcImJjOGY4ZlwiLFxyXG5cdFx0XCJyb3lhbGJsdWVcIjogXCI0MTY5ZTFcIixcclxuXHRcdFwic2FkZGxlYnJvd25cIjogXCI4YjQ1MTNcIixcclxuXHRcdFwic2FsbW9uXCI6IFwiZmE4MDcyXCIsXHJcblx0XHRcInNhbmR5YnJvd25cIjogXCJmNGE0NjBcIixcclxuXHRcdFwic2VhZ3JlZW5cIjogXCIyZThiNTdcIixcclxuXHRcdFwic2Vhc2hlbGxcIjogXCJmZmY1ZWVcIixcclxuXHRcdFwic2llbm5hXCI6IFwiYTA1MjJkXCIsXHJcblx0XHRcInNpbHZlclwiOiBcImMwYzBjMFwiLFxyXG5cdFx0XCJza3libHVlXCI6IFwiODdjZWViXCIsXHJcblx0XHRcInNsYXRlYmx1ZVwiOiBcIjZhNWFjZFwiLFxyXG5cdFx0XCJzbGF0ZWdyYXlcIjogXCI3MDgwOTBcIixcclxuXHRcdFwic2xhdGVncmV5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNub3dcIjogXCJmZmZhZmFcIixcclxuXHRcdFwic3ByaW5nZ3JlZW5cIjogXCIwMGZmN2ZcIixcclxuXHRcdFwic3RlZWxibHVlXCI6IFwiNDY4MmI0XCIsXHJcblx0XHRcInRhblwiOiBcImQyYjQ4Y1wiLFxyXG5cdFx0XCJ0ZWFsXCI6IFwiMDA4MDgwXCIsXHJcblx0XHRcInRoaXN0bGVcIjogXCJkOGJmZDhcIixcclxuXHRcdFwidG9tYXRvXCI6IFwiZmY2MzQ3XCIsXHJcblx0XHRcInR1cnF1b2lzZVwiOiBcIjQwZTBkMFwiLFxyXG5cdFx0XCJ2aW9sZXRcIjogXCJlZTgyZWVcIixcclxuXHRcdFwid2hlYXRcIjogXCJmNWRlYjNcIixcclxuXHRcdFwid2hpdGVcIjogXCJmZmZcIixcclxuXHRcdFwid2hpdGVzbW9rZVwiOiBcImY1ZjVmNVwiLFxyXG5cdFx0XCJ5ZWxsb3dcIjogXCJmZjBcIixcclxuXHRcdFwieWVsbG93Z3JlZW5cIjogXCI5YWNkMzJcIixcclxuXHRcdFwidHJhbnNwYXJlbnRcIjogXCIwMDAwMDAwMFwiXHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBjbGFtcCA9IChuLCBhLCBiKSA9PiBuIDwgYSA/IGEgOiAobiA+IGIgPyBiIDogbiksXHQvLyBDbGFtcCBuIGluIGludGVydmFsIFthLCBiXVxyXG5cdFx0cm91bmQgPSAobiwgZCkgPT4ge1x0Ly8gUm91bmQgbiB0byBuZWFyZXN0IGludGVnZXIsIG9yIHRvIGQgZGVjaW1hbCBwbGFjZXMgKGlmIGQgaXMgZGVmaW5lZClcclxuXHRcdFx0dmFyIHAgPSBNYXRoLnBvdygxMCwgZCB8fCAwKTtcclxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQobiAqIHApIC8gcDtcclxuXHRcdH0sXHJcblx0XHRoaSA9IG4gPT4gY2xhbXAocGFyc2VJbnQobiwgMTYpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCAyLWRpZ2l0IGhleCB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdGhmID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUsIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0c2kgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRzZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSwgMiksIDAsIDEpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0cGkgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikgLyAxMDAgKiAyNTUpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBwZXJjZW50YWdlIHN0cmluZyB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdHVmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMzYwLCAwLCAxKSxcdC8vIENvbnZlcnQgaHVlIHN0cmluZyB0byBmbG9hdCBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMTAwLCAwLCAxKTtcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHJcblx0Ly8gQ29udmVydCBoc2wgdG8gcmdiLCBhbHBoYSB2YWx1ZSBnZXRzIHBhc3NlZCBzdHJhaWdodCB0aHJvdWdoXHJcblx0Ly8gaCwgcywgbCB2YWx1ZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0Ly8gUmV0dXJucyBhbiBvYmplY3QgbGlrZSB7IHIsIGcsIGIsIGEgfVxyXG5cdC8vIGh0dHA6Ly9heG9uZmx1eC5jb20vaGFuZHktcmdiLXRvLWhzbC1hbmQtcmdiLXRvLWhzdi1jb2xvci1tb2RlbC1jXHJcblx0ZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCwgYSkge1xyXG5cdFx0dmFyIHIsIGcsIGIsXHJcblx0XHRcdGh1ZSA9IGZ1bmN0aW9uKHAsIHEsIHQpIHtcclxuXHRcdFx0XHRpZiAodCA8IDApIHsgdCArPSAxOyB9XHJcblx0XHRcdFx0aWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMSAvIDYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQgfTtcclxuXHRcdFx0XHRpZiAodCA8IDEgLyAyKSB7IHJldHVybiBxOyB9XHJcblx0XHRcdFx0aWYgKHQgPCAyIC8gMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDYgfTtcclxuXHRcdFx0XHRyZXR1cm4gcDtcclxuXHRcdFx0fTtcclxuXHRcdGlmIChzID09IDApIHtcclxuXHRcdFx0ciA9IGcgPSBiID0gbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcyxcclxuXHRcdFx0XHRwID0gMiAqIGwgLSBxO1xyXG5cdFx0XHRyID0gaHVlKHAsIHEsIGggKyAxIC8gMyk7XHJcblx0XHRcdGcgPSBodWUocCwgcSwgaCk7XHJcblx0XHRcdGIgPSBodWUocCwgcSwgaCAtIDEgLyAzKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7IHI6IHJvdW5kKHIgKiAyNTUpLCBnOiByb3VuZChnICogMjU1KSwgYjogcm91bmQoYiAqIDI1NSksIGE6IGEgfTtcclxuXHR9XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGMpIHtcclxuXHRcdHZhciBvID0geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIG0gPSBudWxsO1xyXG5cdFx0aWYgKHR5cGVvZiBjID09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0aWYgKGMgaW4gbmFtZXMpIHsgYyA9IFwiI1wiICsgbmFtZXNbY107IH1cclxuXHRcdFx0aWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XSkoW2EtZjAtOV0pKFthLWYwLTldKSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSArIG1bMV0pLCBnOiBoaShtWzJdICsgbVsyXSksIGI6IGhpKG1bM10gKyBtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSksIGc6IGhpKG1bMl0pLCBiOiBoaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IGhmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYlxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogc2YobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL2hzbFxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/KVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgc2YobVs0XSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0aWYgKGMuciAhPT0gdW5kZWZpbmVkICYmIGMuZyAhPSB1bmRlZmluZWQgJiYgYy5iICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShjLnIpLCBnOiBzaShjLmcpLCBiOiBzaShjLmIpLCBhOiBzZihjLmEgfHwgMSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmIChjLmggIT09IHVuZGVmaW5lZCAmJiBjLnMgIT09IHVuZGVmaW5lZCAmJiBjLmwgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihjLmgpLCBwZihjLnMpLCBwZihjLmwpLCBzZihjLmEgfHwgMSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbztcclxuXHR9O1xyXG59KCkpO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHBhcnNlQ29sb3IgfTtcclxufVxyXG4iLCIvKipcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBSb3VuZCBuIHRvIGQgZGVjaW1hbCBwbGFjZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gcm91bmRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZD0wXSBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHJvdW5kIHRvXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcm91bmRlZCBudW1iZXJcbiAqL1xuY29uc3Qgcm91bmQgPSAobiwgZCA9IDApID0+IHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBkKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAqIHAgKyBOdW1iZXIuRVBTSUxPTikgLyBwO1xufVxuXG4vKipcbiAqIERvIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IGxlcnAgPSAoYSwgYiwgaSkgPT4gYSArIChiIC0gYSkgKiBpO1xuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmNvbnN0IHVubGVycCA9IChhLCBiLCBpKSA9PiAoaSAtIGEpIC8gKGIgLSBhKTtcblxuLyoqXG4gKiBEbyBhIGJpbGluZWFyIGludGVycG9sYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzAxIEJvdHRvbS1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxuICogQHBhcmFtIHtudW1iZXJ9IGl5IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeVxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxuICovXG5jb25zdCBibGVycCA9IChjMDAsIGMxMCwgYzAxLCBjMTEsIGl4LCBpeSkgPT4gbGVycChsZXJwKGMwMCwgYzEwLCBpeCksIGxlcnAoYzAxLCBjMTEsIGl4KSwgaXkpO1xuXG4vKipcbiAqIFJlLW1hcCBhIG51bWJlciBpIGZyb20gcmFuZ2UgYTEuLi5hMiB0byBiMS4uLmIyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxuICogQHBhcmFtIHtudW1iZXJ9IGExXG4gKiBAcGFyYW0ge251bWJlcn0gYTJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxuICogQHBhcmFtIHtudW1iZXJ9IGIyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xuXG4vKipcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzIFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmNvbnN0IHJhZGlhbnMgPSBkZWdyZWVzID0+IChNYXRoLlBJIC8gMTgwKSAqIGRlZ3JlZXM7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKi9cbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggRXhjbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICovXG5jb25zdCByYW5kb21CZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqL1xuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW211PTAuNV0gVGhlIG1lYW4gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICovXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XG4gIH1cbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xufTtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxuICovXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGluZGV4IGZyb20gd1xuICovXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xuICBsZXQgdG90YWwgPSB3LnJlZHVjZSgoYSwgaSkgPT4gYSArIGksIDApLCBuID0gMDtcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcbiAgd2hpbGUgKHRvdGFsID4gcikge1xuICAgIHRvdGFsIC09IHdbbisrXTtcbiAgfVxuICByZXR1cm4gbiAtIDE7XG59O1xuXG4vKipcbiAqIEFuIGludGVycG9sYXRpb24gZnVuY3Rpb25cbiAqIEBjYWxsYmFjayBJbnRlcnBvbGF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gaW50ZXJwb2xhdGVkIHZhbHVlIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEBwYXJhbSB7SW50ZXJwb2xhdGlvbkZ1bmN0aW9ufSBbZj1NYXRoLmxlcnBdIFRoZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRvIHVzZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cbiAqL1xuY29uc3QgbGVycEFycmF5ID0gKGEsIGksIGYgPSBsZXJwKSA9PiB7XG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIGZyYWMocykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbmNvbnN0IGRvdCA9IChhLCBiKSA9PiBhLnJlZHVjZSgobiwgdiwgaSkgPT4gbiArIHYgKiBiW2ldLCAwKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY3RvcmlhbCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcbiAqL1xuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpID0gMjsgaSA8PSBhOyBpKyspIHtcbiAgICByZXN1bHQgKj0gaTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcbiAqL1xuY29uc3QgbnByID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IG5jciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbWJpbmF0aW9ucyhbMSwgMiwgM10sIDIpO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgMl0sXG4gKiAgIFsxLCAzXSxcbiAqICAgWzIsIDNdXG4gKiBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY2hvb3NlIGluIGVhY2ggY29tYmluYXRpb25cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgY29tYmluYXRpb24gYXJyYXlzXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9ucyA9IChhLCByKSA9PiB7XG4gIGlmIChyID09PSAxKSB7XG4gICAgcmV0dXJuIGEubWFwKGl0ZW0gPT4gW2l0ZW1dKTtcbiAgfVxuXG4gIHJldHVybiBhLnJlZHVjZShcbiAgICAoYWNjLCBpdGVtLCBpKSA9PiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5jb21iaW5hdGlvbnMoYS5zbGljZShpICsgMSksIHIgLSAxKS5tYXAoYyA9PiBbaXRlbSwgLi4uY10pLFxuICAgIF0sXG4gICAgW11cbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY2FydGVzaWFuIHByb2R1Y3Qgb2YgYXJyYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjYXJ0ZXNpYW4oWzEsIDIsIDNdLCBbJ2EnLCAnYiddKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIFwiYVwiXSxcbiAqICAgWzEsIFwiYlwiXSxcbiAqICAgWzIsIFwiYVwiXSxcbiAqICAgWzIsIFwiYlwiXSxcbiAqICAgWzMsIFwiYVwiXSxcbiAqICAgWzMsIFwiYlwiXVxuICogXVxuICogYGBgXG4gKi9cbmNvbnN0IGNhcnRlc2lhbiA9ICguLi5hcnIpID0+XG4gIGFyci5yZWR1Y2UoXG4gICAgKGEsIGIpID0+IGEuZmxhdE1hcChjID0+IGIubWFwKGQgPT4gWy4uLmMsIGRdKSksXG4gICAgW1tdXVxuICApO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXG4gKiBAY2FsbGJhY2sgVGltZXNGdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFJldHVybiBhIG5ldyBhcnJheSB3aXRoIGxlbmd0aCBuIGJ5IGNhbGxpbmcgZnVuY3Rpb24gZihpKSBvbiBlYWNoIGVsZW1lbnRcbiAqIEBwYXJhbSB7VGltZXNGdW5jdGlvbn0gZlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTwqPn1cbiAqL1xuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXG4gKi9cbmNvbnN0IHJhbmdlID0gbiA9PiB0aW1lcyhpID0+IGksIG4pO1xuXG4vKipcbiAqIFppcCAyIGFycmF5cyB0b2dldGhlciwgaS5lLiAoWzEsIDIsIDNdLCBbYSwgYiwgY10pID0+IFtbMSwgYV0sIFsyLCBiXSwgWzMsIGNdXVxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtBcnJheTwqPn0gYlxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fVxuICovXG5jb25zdCB6aXAgPSAoYSwgYikgPT4gYS5tYXAoKGssIGkpID0+IFtrLCBiW2ldXSk7XG5cbi8qKlxuICogUmV0dXJuIGFycmF5W2ldIHdpdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHdyYXBwaW5nXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5IHdpdGhvdXQgcmVtb3ZpbmcgaXRcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4geyp9IFRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgcGVlayA9IChhKSA9PiB7XG4gIGlmICghYS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGFbYS5sZW5ndGggLSAxXTtcbn07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4vKipcbiAqIEZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIHVzZSBmb3IgY29uY2F0ZW5hdGluZyBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEEgZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCBmbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChvW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0udG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8ICFvW2tleV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXQob1trZXldLCBjb25jYXRlbmF0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLk9iamVjdC5rZXlzKGZsYXR0ZW5lZCkucmVkdWNlKFxuICAgICAgICAoY2hpbGRBY2MsIGNoaWxkS2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmNoaWxkQWNjLFxuICAgICAgICAgIFtgJHtrZXl9JHtjb25jYXRlbmF0b3J9JHtjaGlsZEtleX1gXTogZmxhdHRlbmVkW2NoaWxkS2V5XSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApLFxuICAgIH07XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogVW5mbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byBjaGVjayBmb3IgaW4gY29uY2F0ZW5hdGVkIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gdW4tZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCB1bmZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIGxldCByZXN1bHQgPSB7fSwgdGVtcCwgc3Vic3RyaW5ncywgcHJvcGVydHksIGk7XG5cbiAgZm9yIChwcm9wZXJ0eSBpbiBvKSB7XG4gICAgc3Vic3RyaW5ncyA9IHByb3BlcnR5LnNwbGl0KGNvbmNhdGVuYXRvcik7XG4gICAgdGVtcCA9IHJlc3VsdDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vic3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmICghKHN1YnN0cmluZ3NbaV0gaW4gdGVtcCkpIHtcbiAgICAgICAgaWYgKGlzRmluaXRlKHN1YnN0cmluZ3NbaSArIDFdKSkge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRlbXAgPSB0ZW1wW3N1YnN0cmluZ3NbaV1dO1xuICAgIH1cbiAgICB0ZW1wW3N1YnN0cmluZ3Nbc3Vic3RyaW5ncy5sZW5ndGggLSAxXV0gPSBvW3Byb3BlcnR5XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEEgc3BsaXQgcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgU3BsaXRQcmVkaWNhdGVcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJyYXkgc2hvdWxkIHNwbGl0IGF0IHRoaXMgaW5kZXhcbiAqL1xuXG4vKipcbiAqIFNwbGl0IGFuIGFycmF5IGludG8gc3ViLWFycmF5cyBiYXNlZCBvbiBhIHByZWRpY2F0ZVxuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyYXlcbiAqIEBwYXJhbSB7U3BsaXRQcmVkaWNhdGV9IHByZWRpY2F0ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheXNcbiAqL1xuY29uc3Qgc3BsaXQgPSAoYXJyYXksIHByZWRpY2F0ZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBbXTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gW3ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goY3VycmVudCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUGx1Y2sga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIHBsdWNrIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGx1Y2tlZCBrZXlzXG4gKi9cbmNvbnN0IHBsdWNrID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9ba2V5XSB9KSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBFeGNsdWRlIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBleGNsdWRlIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwga2V5cyBleGNlcHQgZXhjbHVkZWQga2V5c1xuICovXG5jb25zdCBleGNsdWRlID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhvKS5maWx0ZXIoKFtrZXldKSA9PiAha2V5cy5pbmNsdWRlcyhrZXkpKVxuICApO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZsb2F0RXF1YWxzLFxuICAgIGNsYW1wLFxuICAgIGZyYWMsXG4gICAgcm91bmQsXG4gICAgbGVycCxcbiAgICB1bmxlcnAsXG4gICAgYmxlcnAsXG4gICAgcmVtYXAsXG4gICAgc21vb3Roc3RlcCxcbiAgICByYWRpYW5zLFxuICAgIGRlZ3JlZXMsXG4gICAgcmFuZG9tQmV0d2VlbixcbiAgICByYW5kb21JbnRCZXR3ZWVuLFxuICAgIGNsdFJhbmRvbSxcbiAgICBjbHRSYW5kb21JbnQsXG4gICAgd2VpZ2h0ZWRSYW5kb20sXG4gICAgbGVycEFycmF5LFxuICAgIGRvdCxcbiAgICBmYWN0b3JpYWwsXG4gICAgbnByLFxuICAgIG5jcixcbiAgICBjb21iaW5hdGlvbnMsXG4gICAgY2FydGVzaWFuLFxuICAgIHRpbWVzLFxuICAgIHJhbmdlLFxuICAgIHppcCxcbiAgICBhdCxcbiAgICBwZWVrLFxuICAgIGNodW5rLFxuICAgIHNodWZmbGUsXG4gICAgZmxhdCxcbiAgICB1bmZsYXQsXG4gICAgc3BsaXQsXG4gICAgcGx1Y2ssXG4gICAgZXhjbHVkZSxcbiAgfTtcbn1cbiIsImNvbnN0IHsgdGltZXMsIGNodW5rLCBkb3QgfSA9IHJlcXVpcmUoJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJyk7XG5cbi8qKlxuICogQG92ZXJ2aWV3IEEgc21hbGwgdmVjdG9yIGFuZCBtYXRyaXggbGlicmFyeVxuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIEEgMmQgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSB2ZWNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ8dmVjfSBbeF0gVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIGEgdmVjdG9yIHRvIGNvcHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlY30gQSBuZXcgdmVjdG9yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5WYXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjKDMsIDIpOyAgLy8gKDMsIDIpXG4gKiBsZXQgYiA9IHZlYyg0KTsgICAgIC8vICg0LCA0KVxuICogbGV0IGMgPSB2ZWMoYSk7ICAgICAvLyAoMywgMilcbiAqIGxldCBkID0gdmVjKCk7ICAgICAgLy8gKDAsIDApXG4gKi9cbmNvbnN0IHZlYyA9ICh4LCB5KSA9PiAoIXggJiYgIXkgP1xuICB7IHg6IDAsIHk6IDAgfSA6ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xuICAgIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwIH0gOiAoeSA9PT0gbnVsbCB8fCB5ID09PSB1bmRlZmluZWQgP1xuICAgICAgeyB4OiB4LCB5OiB4IH0gOiB7IHg6IHgsIHk6IHkgfSlcbiAgKVxuKTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gZ2V0IGNvbXBvbmVudHMgZnJvbVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XG4gKi9cbnZlYy5jb21wb25lbnRzID0gYSA9PiBbYS54LCBhLnldO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxuICovXG52ZWMudXggPSAoKSA9PiB2ZWMoMSwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKi9cbnZlYy51eSA9ICgpID0+IHZlYygwLCAxKTtcblxuLyoqXG4gKiBBZGQgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKyBiXG4gKi9cbnZlYy5hZGQgPSAoYSwgYikgPT4gKHsgeDogYS54ICsgYi54LCB5OiBhLnkgKyBiLnkgfSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7dmVjfSBhICogYlxuICovXG52ZWMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIGIsIHk6IGEueSAqIGIgfSk7XG5cbi8qKlxuICogU3VidHJhY3QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgLSBiXG4gKi9cbnZlYy5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLm1hbmhhdHRhbiA9IGEgPT4gTWF0aC5hYnMoYS54KSArIE1hdGguYWJzKGEueSk7XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7dmVjfSBeYVxuICovXG52ZWMubm9yID0gYSA9PiB7XG4gIGxldCBsZW4gPSB2ZWMubGVuKGEpO1xuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiB9IDogdmVjKCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbnZlYy5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnNcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjLnJvdCA9IChhLCByKSA9PiB7XG4gIGxldCBzID0gTWF0aC5zaW4ociksXG4gICAgYyA9IE1hdGguY29zKHIpO1xuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmVjdG9ycyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2ZWN0b3JzIGEgYW5kIGIgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xudmVjLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYy5yYWQgPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLngpO1xuXG4vKipcbiAqIENvcHkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29weVxuICogQHJldHVybiB7dmVjfSBBIGNvcHkgb2YgdmVjdG9yIGFcbiAqL1xudmVjLmNweSA9IGEgPT4gdmVjKGEpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvclxuICogQGNhbGxiYWNrIHZlY3Rvck1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGNvbXBvbmVudCB2YWx1ZVxuICogQHBhcmFtIHsneCcgfCAneSd9IGxhYmVsIFRoZSBjb21wb25lbnQgbGFiZWwgKHggb3IgeSlcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvciBhbmQgYnVpbGQgYSBuZXcgdmVjdG9yIGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY3Rvck1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlY30gVmVjdG9yIGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG52ZWMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xudmVjLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX1gO1xuXG4vKipcbiAqIEEgbWF0cml4XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtIFRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gW209NF0gVGhlIG51bWJlciBvZiByb3dzXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtlbnRyaWVzPVtdXSBNYXRyaXggdmFsdWVzIGluIHJlYWRpbmcgb3JkZXJcbiAqIEByZXR1cm4ge21hdH0gQSBuZXcgbWF0cml4XG4gKi9cbmNvbnN0IG1hdCA9IChtID0gNCwgbiA9IDQsIGVudHJpZXMgPSBbXSkgPT4gKHtcbiAgbSwgbixcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxufSk7XG5cbi8qKlxuICogR2V0IGFuIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XG4gKi9cbm1hdC5pZGVudGl0eSA9IG4gPT4gbWF0KG4sIG4sIEFycmF5KG4gKiBuKS5maWxsKDApLm1hcCgodiwgaSkgPT4gKyhNYXRoLmZsb29yKGkgLyBuKSA9PT0gaSAlIG4pKSk7XG5cbi8qKlxuICogR2V0IGFuIGVudHJ5IGZyb20gYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxuICovXG5tYXQuZ2V0ID0gKGEsIGksIGopID0+IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl07XG5cbi8qKlxuICogU2V0IGFuIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXG4gKi9cbm1hdC5zZXQgPSAoYSwgaSwgaiwgdikgPT4geyBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dID0gdjsgfTtcblxuLyoqXG4gKiBHZXQgYSByb3cgZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSByb3cgb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBSb3cgbSBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5yb3cgPSAoYSwgbSkgPT4ge1xuICBjb25zdCBzID0gKG0gLSAxKSAqIGEubjtcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY29sdW1uIGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQ29sdW1uIG4gZnJvbSBtYXRyaXggYVxuICovXG5tYXQuY29sID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcblxuLyoqXG4gKiBBZGQgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhICsgYlxuICovXG5tYXQuYWRkID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgKyBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSAtIGJcbiAqL1xubWF0LnN1YiA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2IC0gYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBNdWx0aXBseSBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpY2VzIGNhbm5vdCBiZSBtdWx0aXBsaWVkXG4gKi9cbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYS5uICE9PSBiLm0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IHJlc3VsdCA9IG1hdChhLm0sIGIubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYi5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQocmVzdWx0LCBpLCBqLCBkb3QobWF0LnJvdyhhLCBpKSwgbWF0LmNvbChiLCBqKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBTY2FsZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXG4gKi9cbm1hdC5zY2FsZSA9IChhLCBiKSA9PiBtYXQubWFwKGEsIHYgPT4gdiAqIGIpO1xuXG4vKipcbiAqIFRyYW5zcG9zZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcbiAqIEByZXR1cm4ge21hdH0gQSB0cmFuc3Bvc2VkIG1hdHJpeFxuICovXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IFRoZSAoaSwgaikgbWlub3Igb2YgbWF0cml4IGEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZW50cmllcyA9IFtdO1xuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xuICAgIGlmIChpaSA9PT0gaSkgeyBjb250aW51ZTsgfVxuICAgIGZvciAobGV0IGpqID0gMTsgamogPD0gYS5uOyBqaisrKSB7XG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cbiAgICAgIGVudHJpZXMucHVzaChtYXQuZ2V0KGEsIGlpLCBqaikpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0KGEubSAtIDEsIGEubiAtIDEsIGVudHJpZXMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHJldHVybiB7bnVtYmVyfGJvb2xlYW59IHxhfCBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0LmRldCA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChhLm0gPT09IDEpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xuICB9XG4gIGlmIChhLm0gPT09IDIpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xuICB9XG4gIGxldCB0b3RhbCA9IDAsIHNpZ24gPSAxO1xuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgIHRvdGFsICs9IHNpZ24gKiBhLmVudHJpZXNbaiAtIDFdICogbWF0LmRldChtYXQubWlub3IoYSwgMSwgaikpO1xuICAgIHNpZ24gKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gXmEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5ub3IgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgYWRqdWdhdGUgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggZnJvbSB3aGljaCB0byBnZXQgdGhlIGFkanVnYXRlXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXG4gKi9cbm1hdC5hZGogPSBhID0+IHtcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xuICByZXR1cm4gbWF0LnRyYW5zKGNvZmFjdG9ycyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhXi0xIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaGFzIG5vIGludmVyc2VcbiAqL1xubWF0LmludiA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuIG1hdC5zY2FsZShtYXQuYWRqKGEpLCAxIC8gZCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBtYXRyaWNlcyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtYXRyaWNlcyBhIGFuZCBiIGFyZSBpZGVudGljYWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG5tYXQuZXEgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0LnN0cihhKSA9PT0gbWF0LnN0cihiKTtcblxuLyoqXG4gKiBDb3B5IGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXG4gKi9cbm1hdC5jcHkgPSBhID0+IG1hdChhLm0sIGEubiwgWy4uLmEuZW50cmllc10pO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgZW50cnkgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgZW50cnkgaW5kZXhcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBlbnRyeVxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXggYW5kIGJ1aWxkIGEgbmV3IG1hdHJpeCBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXRyaXhNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gTWF0cml4IGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG5tYXQubWFwID0gKGEsIGYpID0+IG1hdChhLm0sIGEubiwgYS5lbnRyaWVzLm1hcChmKSk7XG5cbi8qKlxuICogQ29udmVydCBhIG1hdHJpeCBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbnM9J1xcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcbicpID0+IGNodW5rKGEuZW50cmllcywgYS5uKS5tYXAociA9PiByLmpvaW4obXMpKS5qb2luKG5zKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMsIG1hdCB9O1xufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgU3ByaXRlQ2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBXYWxsUmVjZWl2ZXIsIFdhbGxSZWNlaXZlck9wdGlvbnMgfSBmcm9tICcuL1N1cmZhY2UnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlLCBXYWxsU2hhZG93TGF5ZXIgfSBmcm9tICcuL3R5cGVzJztcblxudHlwZSBBY3RvclNoYWRvd09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgdGhlIGFyZWEgYXQgdGhlIGJvdHRvbSBvZiB0aGUgYWN0b3IgdGhhdCBjYXN0cyBhIHNoYWRvdyxcbiAgICogZGVmYXVsdHMgdG8gYSB0aGlyZCBvZiB0aGUgYWN0b3IncyBoZWlnaHRcbiAgICovXG4gIGZvb3RwcmludEhlaWdodD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdG9yU2hhZG93ID1cbiAgfCAnbm9uZSdcbiAgfCAnc3ByaXRlJ1xuICB8ICdjaXJjbGUnXG4gIHwgKEFjdG9yU2hhZG93T3B0aW9ucyAmIHsgdHlwZTogJ25vbmUnIH0pXG4gIHwgKEFjdG9yU2hhZG93T3B0aW9ucyAmIHsgdHlwZTogJ3Nwcml0ZScgfSAmIFBhcnRpYWw8XG4gICAgICAgIE9taXQ8U3ByaXRlQ2FzdGVyT3B0aW9ucywgJ3Bvc2l0aW9uJyB8ICdzaXplJz5cbiAgICAgID4pXG4gIHwgKEFjdG9yU2hhZG93T3B0aW9ucyAmIHsgdHlwZTogJ2NpcmNsZScgfSAmIFBhcnRpYWw8XG4gICAgICAgIE9taXQ8Q2lyY2xlQ2FzdGVyT3B0aW9ucywgJ3Bvc2l0aW9uJyB8ICdzaXplJz5cbiAgICAgID4pO1xuXG5leHBvcnQgdHlwZSBBY3Rvck9wdGlvbnMgPSBPbWl0PFdhbGxSZWNlaXZlck9wdGlvbnMsICdyZWNlaXZlTGlnaHQnPiAmIHtcbiAgLyoqXG4gICAqIFRoZSBzaGFkb3cgY2FzdCBieSB0aGlzIGFjdG9yLCB0aGUgZGVmYXVsdCBpcyBhIHN0cmV0Y2hlZCBzaWxob3VldHRlIG9mXG4gICAqIHRoZSBhY3RvcidzIGltYWdlXG4gICAqL1xuICBzaGFkb3c/OiBBY3RvclNoYWRvdztcbn07XG5cbi8qKlxuICogQSBtb3Zpbmcgb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIGNhc3RzIGEgc2hhZG93XG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RvciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRk9PVFBSSU5UX1NDQUxFID0gMSAvIDM7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0hBRE9XX0xFTkdUSF9TQ0FMRSA9IDEuMzM7XG5cbiAgcHVibGljIHJlYWRvbmx5IHN1cmZhY2U6IFdhbGxSZWNlaXZlcjtcbiAgcHVibGljIHJlYWRvbmx5IGNhc3RlcjogU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBmb290cHJpbnRIZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBBY3Rvck9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHNoYWRvdyA9ICdzcHJpdGUnLCAuLi5zdXJmYWNlIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHsgdHlwZSwgZm9vdHByaW50SGVpZ2h0LCAuLi5jYXN0ZXJPcHRpb25zIH0gPSAoXG4gICAgICB0eXBlb2Ygc2hhZG93ID09PSAnc3RyaW5nJyA/IHsgdHlwZTogc2hhZG93IH0gOiBzaGFkb3dcbiAgICApIGFzIEV4Y2x1ZGU8QWN0b3JTaGFkb3csIHN0cmluZz47XG5cbiAgICB0aGlzLmZvb3RwcmludEhlaWdodCA9XG4gICAgICBmb290cHJpbnRIZWlnaHQgPz8gb3B0aW9ucy5zaXplLnkgKiBBY3Rvci5ERUZBVUxUX0ZPT1RQUklOVF9TQ0FMRTtcblxuICAgIC8vIEFjdG9ycyBzdGFuZCBpbiBmcm9udCBvZiB3YWxscywgc28gdGhleSBuZWVkIHRoZWlyIG93biB3YWxsIGxheWVyXG4gICAgdGhpcy5zdXJmYWNlID0gbGlnaHRpbmcuYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgIGxheWVyOiBXYWxsU2hhZG93TGF5ZXIuVHdvLFxuICAgICAgbWVyZ2VhYmxlOiBmYWxzZSxcbiAgICAgIC4uLnN1cmZhY2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290cHJpbnQgPSB0aGlzLmZvb3RwcmludChvcHRpb25zLnBvc2l0aW9uLCBvcHRpb25zLnNpemUpO1xuICAgIGlmICh0eXBlID09PSAnc3ByaXRlJykge1xuICAgICAgY29uc3Qgc2hhZG93TGVuZ3RoID0gb3B0aW9ucy5zaXplLnkgKiBBY3Rvci5ERUZBVUxUX1NIQURPV19MRU5HVEhfU0NBTEU7XG5cbiAgICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkU3ByaXRlQ2FzdGVyKHtcbiAgICAgICAgaW1hZ2U6IG9wdGlvbnMuaW1hZ2UsXG4gICAgICAgIG1pblNoYWRvd0xlbmd0aDogc2hhZG93TGVuZ3RoLFxuICAgICAgICBtYXhTaGFkb3dMZW5ndGg6IHNoYWRvd0xlbmd0aCxcbiAgICAgICAgLi4uY2FzdGVyT3B0aW9ucyxcbiAgICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLmNhc3RlciA9IGxpZ2h0aW5nLmFkZENpcmNsZUNhc3Rlcih7XG4gICAgICAgIC4uLmNhc3Rlck9wdGlvbnMsXG4gICAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9vdHByaW50KHBvc2l0aW9uOiB2ZWMsIHNpemU6IHZlYyk6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIHNpemUueSAtIHRoaXMuZm9vdHByaW50SGVpZ2h0KSxcbiAgICAgIHNpemU6IHZlYyhzaXplLngsIHRoaXMuZm9vdHByaW50SGVpZ2h0KSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBhY3RvciB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjKSB7XG4gICAgdGhpcy5zdXJmYWNlLm1vdmVUbyhwb3NpdGlvbik7XG4gICAgdGhpcy5jYXN0ZXI/Lm1vdmVUbyh0aGlzLmZvb3RwcmludChwb3NpdGlvbiwgdGhpcy5zdXJmYWNlLnNpemUpLnBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBhY3RvciBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5zdXJmYWNlLnJlbW92ZSgpO1xuICAgIHRoaXMuY2FzdGVyPy5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7IExpZ2h0aW5nSW1hZ2UgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGJvdW5kaW5nUmVjdGFuZ2xlLCBzaWxob3VldHRlIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5leHBvcnQgdHlwZSBSZWdpb25DYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogU2hvdWxkIHNoYWRvd3MgaW5jbHVkZSB0aGUgcmVjdGFuZ3VsYXIgcmVnaW9uIG9mIHRoaXMgY2FzdGVyP1xuICAgKi9cbiAgaW5jbHVkZVJlZ2lvblNoYWRvdz86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgcG9seWdvbmFsIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFJlZ2lvbkNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PFJlZ2lvbkNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIGluY2x1ZGVSZWdpb25TaGFkb3c6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBSZWdpb25DYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoaXMgY2FzdGVyIGNhbiBiZSBtZXJnZWQgd2l0aCBhbm90aGVyIGNhc3RlclxuICAgKi9cbiAgcHVibGljIGNhbk1lcmdlKG90aGVyOiBSZWdpb25DYXN0ZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tZXJnZWFibGUgJiZcbiAgICAgIG90aGVyLm1lcmdlYWJsZSAmJlxuICAgICAgdGhpcy5pbmNsdWRlUmVnaW9uU2hhZG93ID09PSBvdGhlci5pbmNsdWRlUmVnaW9uU2hhZG93XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY2FzdGVyIHRoYXQgY292ZXJzIHRoaXMgY2FzdGVyIGFuZCBhbm90aGVyIGNhc3RlclxuICAgKi9cbiAgcHVibGljIG1lcmdlKG90aGVyOiBSZWdpb25DYXN0ZXIpOiBSZWdpb25DYXN0ZXIge1xuICAgIHJldHVybiBuZXcgUmVnaW9uQ2FzdGVyKHRoaXMubGlnaHRpbmcsIHtcbiAgICAgIC4uLih0aGlzIGFzIFJlZ2lvbkNhc3RlciksXG4gICAgICAuLi5ib3VuZGluZ1JlY3RhbmdsZSh0aGlzLCBvdGhlciksXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3ByaXRlQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFRoZSBpbWFnZSB1c2VkIGZvciB0aGlzIGNhc3RlcidzIHNoYWRvdywgaXQgc2hvdWxkIGJlIGJsYWNrIHdpdGggYW4gYWxwaGFcbiAgICogY2hhbm5lbFxuICAgKi9cbiAgc2hhZG93PzogTGlnaHRpbmdJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIElmIGBzaGFkb3dgIGlzbid0IHNldCwgd2UnbGwgdXNlIHRoZSBzaWxob3VldHRlIG9mIHRoaXMgaW1hZ2UgaW5zdGVhZFxuICAgKi9cbiAgaW1hZ2U/OiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogV2hlcmUgdGhlIHNoYWRvdyBiZWdpbnMsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNpemUgb2YgdGhpcyBjYXN0ZXIsIHdoZXJlXG4gICAqICgwLCAwKSBpcyB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCAoMSwgMSkgaXMgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXJcbiAgICovXG4gIGFuY2hvcj86IHZlYztcblxuICAvKipcbiAgICogT2Zmc2V0IHRoZSBzaGFkb3cgZnJvbSB0aGUgYW5jaG9yLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBzaGFkb3cgc2l6ZVxuICAgKi9cbiAgb2Zmc2V0PzogdmVjO1xuXG4gIC8qKlxuICAgKiBTaGFkb3cgbGVuZ3RoIHdoZW4gdGhlIGxpZ2h0IGlzIGF0IHRoZSBjZW50ZXIgb2YgdGhpcyBjYXN0ZXJcbiAgICovXG4gIG1pblNoYWRvd0xlbmd0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2hhZG93IGxlbmd0aCB3aGVuIHRoaXMgY2FzdGVyIGlzIGF0IHRoZSBlZGdlIG9mIHRoZSBsaWdodCdzIHJhZGl1cywgb3JcbiAgICogbnVsbCB0byB1c2UgdGhlIGxpZ2h0J3MgcmFkaXVzXG4gICAqL1xuICBtYXhTaGFkb3dMZW5ndGg/OiBudW1iZXIgfCBudWxsO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGEgc2hhZG93IGJ5IHJvdGF0aW5nIGFuZCBzdHJldGNoaW5nIGFuIGltYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBTcHJpdGVDYXN0ZXIgZXh0ZW5kcyBTY2VuZU9iamVjdDxTcHJpdGVDYXN0ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyBzaGFkb3c6IExpZ2h0aW5nSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGltYWdlOiBMaWdodGluZ0ltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBhbmNob3I6IHZlYyA9IHZlYygwLjUsIDAuOSk7XG4gIHB1YmxpYyBvZmZzZXQ6IHZlYyA9IHZlYygwLjUsIDAuOSk7XG4gIHB1YmxpYyBtaW5TaGFkb3dMZW5ndGg6IG51bWJlciA9IDY0O1xuICBwdWJsaWMgbWF4U2hhZG93TGVuZ3RoOiBudW1iZXIgfCBudWxsID0gNjQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogU3ByaXRlQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGltYWdlIGZvciB0aGlzIGNhc3RlcidzIHNoYWRvdywgaWYgaXQgaGFzIG9uZVxuICAgKi9cbiAgcHVibGljIGdldFNoYWRvdygpOiBMaWdodGluZ0ltYWdlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93ID8/ICh0aGlzLmltYWdlICYmIHNpbGhvdWV0dGUodGhpcy5pbWFnZSkpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENpcmNsZUNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgc2hhZG93IGlzIGNlbnRlcmVkLCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBzaXplIG9mIHRoaXMgY2FzdGVyLFxuICAgKiB3aGVyZSAoMCwgMCkgaXMgdGhlIHRvcC1sZWZ0IGNvcm5lciBhbmQgKDEsIDEpIGlzIHRoZSBib3R0b20tcmlnaHQgY29ybmVyXG4gICAqL1xuICBhbmNob3I/OiB2ZWM7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGZyb20gdGhlIGFuY2hvciB0byB0aGUgc2hhZG93IHdoZW4gdGhlIGxpZ2h0IGlzIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogdGhpcyBjYXN0ZXJcbiAgICovXG4gIG1pblNoYWRvd0Rpc3RhbmNlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSBmcm9tIHRoZSBhbmNob3IgdG8gdGhlIHNoYWRvdyB3aGVuIHRoaXMgY2FzdGVyIGlzIGF0IHRoZSBlZGdlIG9mXG4gICAqIHRoZSBsaWdodCdzIHJhZGl1cywgb3IgbnVsbCB0byB1c2UgdGhlIGxpZ2h0J3MgcmFkaXVzXG4gICAqL1xuICBtYXhTaGFkb3dEaXN0YW5jZT86IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wYWNpdHkgb2YgdGhlIHNoYWRvd1xuICAgKi9cbiAgYWxwaGE/OiBudW1iZXI7XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYW4gZWxsaXB0aWNhbCBzaGFkb3dcbiAqL1xuZXhwb3J0IGNsYXNzIENpcmNsZUNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PENpcmNsZUNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIGFuY2hvcjogdmVjID0gdmVjKDAuNSwgMC45KTtcbiAgcHVibGljIG1pblNoYWRvd0Rpc3RhbmNlOiBudW1iZXIgPSA1O1xuICBwdWJsaWMgbWF4U2hhZG93RGlzdGFuY2U6IG51bWJlciB8IG51bGwgPSAyMDtcbiAgcHVibGljIGFscGhhOiBudW1iZXIgPSAxO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IENpcmNsZUNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2hhZG93Q2FzdGVyID0gUmVnaW9uQ2FzdGVyIHwgU3ByaXRlQ2FzdGVyIHwgQ2lyY2xlQ2FzdGVyO1xuIiwiaW1wb3J0IHsgcGFyc2VDb2xvciB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3InO1xuaW1wb3J0IHtcbiAgYXQsXG4gIGNsYW1wLFxuICBleGNsdWRlLFxuICByZW1hcCxcbiAgc21vb3Roc3RlcCxcbiAgdW5sZXJwLFxufSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgQ2lyY2xlQ2FzdGVyLFxuICBSZWdpb25DYXN0ZXIsXG4gIFNoYWRvd0Nhc3RlcixcbiAgU3ByaXRlQ2FzdGVyLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBHcm91bmRSZWNlaXZlciwgV2FsbFJlY2VpdmVyIH0gZnJvbSAnLi9TdXJmYWNlJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgSW50ZXJ2YWwyZCxcbiAgTGluZSxcbiAgUG9seWdvblZlcnRpY2VzLFxuICBSZWN0YW5nbGUsXG4gIFNlY3RvcjJkLFxuICBXYWxsU2hhZG93TGF5ZXIsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgY29sb3VyVG9TdHJpbmcsXG4gIGxpbmVJc0ZhY2luZyxcbiAgbGluZVlJbnRlcmNlcHQsXG4gIG92ZXJsYXAxZCxcbiAgcG9seWdvbixcbiAgcmVjdGFuZ2xlc0ludGVyc2VjdCxcbiAgcmVjdGFuZ2xlVG9JbnRlcnZhbCxcbiAgcmVjdGFuZ2xlVmVydGljZXMsXG4gIHNlY3RvcjJkLFxufSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IEhBTEZfUEkgPSBNYXRoLlBJIC8gMjtcbmNvbnN0IElOVEVSQ0VQVF9YID0gMDtcbmNvbnN0IElOVEVSQ0VQVF9UID0gMTtcblxuZXhwb3J0IHR5cGUgTGlnaHRPcHRpb25zID0ge1xuICAvKipcbiAgICogV29ybGQgcG9zaXRpb24gb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgcG9zaXRpb246IHZlYztcblxuICAvKipcbiAgICogUmFkaXVzIG9mIHRoaXMgbGlnaHQgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHJhZGl1cz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ29sb3VyIG9mIHRoaXMgbGlnaHRcbiAgICovXG4gIGNvbG91cj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGZ1bGx5LWxpdCBhcmVhIGF0IHRoZSBjZW50ZXIgb2YgdGhpcyBsaWdodCwgYXMgYSBmcmFjdGlvblxuICAgKiBvZiB0aGUgcmFkaXVzXG4gICAqL1xuICBjb3JlUmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBCcmlnaHRuZXNzIG9mIHRoaXMgbGlnaHRcbiAgICovXG4gIGludGVuc2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogSGVpZ2h0IG9mIHRoaXMgbGlnaHQgYWJvdmUgdGhlIGdyb3VuZCwgdGhpcyBpcyB1c2VkIGZvciBzaGFkaW5nIG5vcm1hbCBtYXBzXG4gICAqIGFuZCBzcGVjdWxhciBtYXBzXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGlzIGxpZ2h0IGNhc3Qgc2hhZG93cz9cbiAgICovXG4gIGNhc3RTaGFkb3dzPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgU2hhZG93PFQgZXh0ZW5kcyBTaGFkb3dDYXN0ZXI+ID0ge1xuICAvKipcbiAgICogVGhlIGVudGl0eSB0aGF0IGlzIGNhc3RpbmcgdGhpcyBzaGFkb3dcbiAgICovXG4gIGNhc3RlcjogVDtcblxuICAvKipcbiAgICogVGhlIGxlZnRtb3N0IGVkZ2Ugb2YgdGhlIHNoYWRvd1xuICAgKi9cbiAgbGVmdEVkZ2U6IExpbmUgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgcmlnaHRtb3N0IGVkZ2Ugb2YgdGhlIHNoYWRvd1xuICAgKi9cbiAgcmlnaHRFZGdlOiBMaW5lIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIGEgY2lyY2xlIHNoYWRvdyAob25seSB1c2VkIHdoZW4gcmVuZGVyaW5nIGEgY2lyY2xlIHNoYWRvd1xuICAgKiBvbnRvIGEgd2FsbClcbiAgICovXG4gIHBvc2l0aW9uPzogdmVjO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiBhIGNpcmNsZSBzaGFkb3cgKG9ubHkgdXNlZCB3aGVuIHJlbmRlcmluZyBhIGNpcmNsZSBzaGFkb3cgb250b1xuICAgKiBhIHdhbGwpXG4gICAqL1xuICBzaXplPzogdmVjO1xufTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9SQURJVVMgPSAxMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJ3doaXRlJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT1JFX1JBRElVUyA9IDAuMjtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX0NPUkVfUkFESVVTID0gMC45OTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9JTlRFTlNJVFkgPSAxO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFSUdIVCA9IDQ4O1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTSEFET1dfQlVGRkVSID0gMjA7XG5cbiAgcHJpdmF0ZSBsaWdodGluZ1N5c3RlbTogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWM7XG4gIHByaXZhdGUgX3JhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9jb2xvdXI6IHN0cmluZztcbiAgcHVibGljIGNvbG91ck9iamVjdDogQ29sb3VyO1xuICBwcml2YXRlIF9jb3JlUmFkaXVzOiBudW1iZXI7XG4gIHByaXZhdGUgX2ludGVuc2l0eTogbnVtYmVyO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIHB1YmxpYyBjYXN0U2hhZG93czogYm9vbGVhbjtcblxuICBwdWJsaWMgbGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGxpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyBncm91bmRMaWdodENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgZ3JvdW5kTGlnaHRDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIHdhbGxMaWdodDFDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHdhbGxMaWdodDFDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIHdhbGxMaWdodDJDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHdhbGxMaWdodDJDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHJpdmF0ZSBkaXJ0eSA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nU3lzdGVtOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogTGlnaHRPcHRpb25zKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbSA9IGxpZ2h0aW5nU3lzdGVtO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5fcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgPz8gTGlnaHQuREVGQVVMVF9SQURJVVM7XG4gICAgdGhpcy5fY29sb3VyID0gb3B0aW9ucy5jb2xvdXIgPz8gTGlnaHQuREVGQVVMVF9DT0xPVVI7XG4gICAgdGhpcy5fY29yZVJhZGl1cyA9IG9wdGlvbnMuY29yZVJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX0NPUkVfUkFESVVTO1xuICAgIHRoaXMuX2ludGVuc2l0eSA9IG9wdGlvbnMuaW50ZW5zaXR5ID8/IExpZ2h0LkRFRkFVTFRfSU5URU5TSVRZO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgPz8gTGlnaHQuREVGQVVMVF9IRUlHSFQ7XG4gICAgdGhpcy5jYXN0U2hhZG93cyA9IG9wdGlvbnMuY2FzdFNoYWRvd3MgPz8gdHJ1ZTtcbiAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodGhpcy5fY29sb3VyKTtcblxuICAgIHRoaXMubGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuICAgIHRoaXMubGlnaHRDb250ZXh0ID0gdGhpcy5saWdodENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5ncm91bmRMaWdodENhbnZhcy5oZWlnaHQgPVxuICAgICAgdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCA9IHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLndhbGxMaWdodDFDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLndhbGxMaWdodDFDYW52YXMud2lkdGggPSB0aGlzLndhbGxMaWdodDFDYW52YXMuaGVpZ2h0ID1cbiAgICAgIHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dCA9IHRoaXMud2FsbExpZ2h0MUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMud2FsbExpZ2h0MkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNhbnZhcy53aWR0aCA9IHRoaXMud2FsbExpZ2h0MkNhbnZhcy5oZWlnaHQgPVxuICAgICAgdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0ID0gdGhpcy53YWxsTGlnaHQyQ2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgLyoqXG4gICAqIEJvdW5kaW5nIGJveCBmb3IgdGhpcyBsaWdodCwgaW5jbHVkaW5nIHRoZSBvZmZzZXQgd2FsbCBsaWdodG1hcHNcbiAgICovXG4gIHB1YmxpYyBnZXQgYm91bmRzKCk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3Qgd2FsbExpZ2h0aW5nWU9mZnNldCA9IHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fcmFkaXVzICsgTWF0aC5taW4od2FsbExpZ2h0aW5nWU9mZnNldCwgMClcbiAgICAgICksXG4gICAgICBzaXplOiB2ZWMoXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIsXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIgKyBNYXRoLmFicyh3YWxsTGlnaHRpbmdZT2Zmc2V0KVxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCByYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3JhZGl1cykge1xuICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICB9XG5cbiAgcHVibGljIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29sb3VyKSB7XG4gICAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih2YWx1ZSk7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvcmVSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVSYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvcmVSYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29yZVJhZGl1cykge1xuICAgICAgdGhpcy5fY29yZVJhZGl1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVuc2l0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2ludGVuc2l0eSkge1xuICAgICAgdGhpcy5faW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGxpZ2h0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweShwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNvbWUgb2YgdGhlIG9wdGlvbnMgZm9yIHRoaXMgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxMaWdodE9wdGlvbnM+KSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9zaXRpb24sXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvdXIsXG4gICAgICBjb3JlUmFkaXVzLFxuICAgICAgaW50ZW5zaXR5LFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2FzdFNoYWRvd3MsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweShwb3NpdGlvbiA/PyB0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyA/PyB0aGlzLnJhZGl1cztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91ciA/PyB0aGlzLmNvbG91cjtcbiAgICB0aGlzLmNvcmVSYWRpdXMgPSBjb3JlUmFkaXVzID8/IHRoaXMuY29yZVJhZGl1cztcbiAgICB0aGlzLmludGVuc2l0eSA9IGludGVuc2l0eSA/PyB0aGlzLmludGVuc2l0eTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCA/PyB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmNhc3RTaGFkb3dzID0gY2FzdFNoYWRvd3MgPz8gdGhpcy5jYXN0U2hhZG93cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBsaWdodCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5yZW1vdmUodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShcbiAgICBncm91bmRTaGFkb3dSZWNlaXZlcnM6IEdyb3VuZFJlY2VpdmVyW10sXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVyczogV2FsbFJlY2VpdmVyW10sXG4gICAgcmVnaW9uU2hhZG93Q2FzdGVyczogUmVnaW9uQ2FzdGVyW10sXG4gICAgc3ByaXRlU2hhZG93Q2FzdGVyczogU3ByaXRlQ2FzdGVyW10sXG4gICAgY2lyY2xlU2hhZG93Q2FzdGVyczogQ2lyY2xlQ2FzdGVyW11cbiAgKSB7XG4gICAgLy8gSWYgdGhlIGxpZ2h0IHNldHRpbmdzIGhhdmUgY2hhbmdlZCwgd2UgbmVlZCB0byByZWRyYXcgdGhlIGJhc2UgbGlnaHRtYXBcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5wcmVwYXJlTGlnaHRNYXAoKTtcbiAgICB9XG5cbiAgICAvLyBCb3VuZGluZyBib3ggZm9yIHRoaXMgbGlnaHRcbiAgICBjb25zdCBsaWdodFJlY3RhbmdsZSA9IHRoaXMuYm91bmRzO1xuXG4gICAgLy8gUmVuZGVyIGxpZ2h0IG9udG8gZ3JvdW5kIGxpZ2h0IGNhbnZhc1xuICAgIHRoaXMucmVzZXRMaWdodENvbnRleHQodGhpcy5ncm91bmRMaWdodENvbnRleHQpO1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0Q2FudmFzLCAwLCAwKTtcblxuICAgIC8vIFN1YnRyYWN0IHNoYWRvd3MgZnJvbSBncm91bmQgbGlnaHRtYXBcbiAgICBsZXQgcmVnaW9uU2hhZG93czogU2hhZG93PFJlZ2lvbkNhc3Rlcj5bXSA9IFtdO1xuICAgIGxldCBzcHJpdGVTaGFkb3dzOiBTaGFkb3c8U3ByaXRlQ2FzdGVyPltdID0gW107XG4gICAgbGV0IGNpcmNsZVNoYWRvd3M6IFNoYWRvdzxDaXJjbGVDYXN0ZXI+W10gPSBbXTtcbiAgICBpZiAodGhpcy5jYXN0U2hhZG93cykge1xuICAgICAgcmVnaW9uU2hhZG93cyA9IHRoaXMucHJlcGFyZUdyb3VuZFJlZ2lvblNoYWRvd3MoXG4gICAgICAgIGxpZ2h0UmVjdGFuZ2xlLFxuICAgICAgICByZWdpb25TaGFkb3dDYXN0ZXJzXG4gICAgICApO1xuXG4gICAgICBzcHJpdGVTaGFkb3dzID0gdGhpcy5wcmVwYXJlR3JvdW5kU3ByaXRlU2hhZG93cyhcbiAgICAgICAgbGlnaHRSZWN0YW5nbGUsXG4gICAgICAgIHNwcml0ZVNoYWRvd0Nhc3RlcnNcbiAgICAgICk7XG5cbiAgICAgIGNpcmNsZVNoYWRvd3MgPSB0aGlzLnByZXBhcmVHcm91bmRDaXJjbGVTaGFkb3dzKFxuICAgICAgICBsaWdodFJlY3RhbmdsZSxcbiAgICAgICAgY2lyY2xlU2hhZG93Q2FzdGVyc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgbGlnaHQgb250byB3YWxsIGxpZ2h0IGNhbnZhc2VzXG4gICAgdGhpcy5yZXNldExpZ2h0Q29udGV4dCh0aGlzLndhbGxMaWdodDFDb250ZXh0KTtcbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0Q2FudmFzLCAwLCAwKTtcblxuICAgIHRoaXMucmVzZXRMaWdodENvbnRleHQodGhpcy53YWxsTGlnaHQyQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodENhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBQcmVwYXJlIGZ1bGwtd2FsbCBzaGFkb3dzIGJhc2VkIG9uIHdoZXRoZXIgdGhlIHdhbGwgaXMgYWJvdmUgb3IgYmVsb3dcbiAgICAvLyB0aGUgbGlnaHQgcG9zaXRpb25cbiAgICB0aGlzLnByZXBhcmVGdWxsV2FsbFNoYWRvd3MoXG4gICAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LFxuICAgICAgbGlnaHRSZWN0YW5nbGUsXG4gICAgICB3YWxsU2hhZG93UmVjZWl2ZXJzXG4gICAgKTtcbiAgICB0aGlzLnByZXBhcmVGdWxsV2FsbFNoYWRvd3MoXG4gICAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LFxuICAgICAgbGlnaHRSZWN0YW5nbGUsXG4gICAgICB3YWxsU2hhZG93UmVjZWl2ZXJzXG4gICAgKTtcblxuICAgIC8vIFN1YnRyYWN0IHJlZ2lvbiBzaGFkb3dzIGZyb20gd2FsbCBsaWdodG1hcFxuICAgIGlmICh0aGlzLmNhc3RTaGFkb3dzKSB7XG4gICAgICB0aGlzLnByZXBhcmVXYWxsUmVnaW9uU2hhZG93cyhcbiAgICAgICAgbGlnaHRSZWN0YW5nbGUsXG4gICAgICAgIHJlZ2lvblNoYWRvd3MsXG4gICAgICAgIHJlZ2lvblNoYWRvd0Nhc3RlcnMsXG4gICAgICAgIHdhbGxTaGFkb3dSZWNlaXZlcnNcbiAgICAgICk7XG5cbiAgICAgIHRoaXMucHJlcGFyZVdhbGxTcHJpdGVTaGFkb3dzKFxuICAgICAgICBsaWdodFJlY3RhbmdsZSxcbiAgICAgICAgc3ByaXRlU2hhZG93cyxcbiAgICAgICAgd2FsbFNoYWRvd1JlY2VpdmVyc1xuICAgICAgKTtcblxuICAgICAgdGhpcy5wcmVwYXJlV2FsbENpcmNsZVNoYWRvd3MoXG4gICAgICAgIGxpZ2h0UmVjdGFuZ2xlLFxuICAgICAgICBjaXJjbGVTaGFkb3dzLFxuICAgICAgICB3YWxsU2hhZG93UmVjZWl2ZXJzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBsaWdodCBjYW52YXMgbWF0Y2hlcyB0aGlzIGxpZ2h0J3Mgc2l6ZVxuICAgKlxuICAgKiBUaGVyZSdzIG5vIG5lZWQgdG8gY2xlYXIgdGhlIGNhbnZhcyBiZWNhdXNlIHRoZSBiYXNlIGxpZ2h0bWFwIGlzIG9wYXF1ZSxcbiAgICogc28gZHJhd2luZyBpdCByZXBsYWNlcyB0aGUgcHJldmlvdXMgZnJhbWVcbiAgICovXG4gIHByaXZhdGUgcmVzZXRMaWdodENvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguZmxvb3IodGhpcy5fcmFkaXVzICogMik7XG4gICAgaWYgKGNvbnRleHQuY2FudmFzLndpZHRoICE9PSBzaXplKSB7XG4gICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGNvbnRleHQuY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPVxuICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUxpZ2h0TWFwKCkge1xuICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGgsXG4gICAgICB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodFxuICAgICk7XG5cbiAgICBjb25zdCBncmFkaWVudCA9IHRoaXMubGlnaHRDb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzICogTWF0aC5taW4odGhpcy5fY29yZVJhZGl1cywgTGlnaHQuTUFYX0NPUkVfUkFESVVTKSxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1c1xuICAgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxuICAgICAgMCxcbiAgICAgIGNvbG91clRvU3RyaW5nKHtcbiAgICAgICAgLi4udGhpcy5jb2xvdXJPYmplY3QsXG4gICAgICAgIHI6IHRoaXMuY29sb3VyT2JqZWN0LnIgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICAgIGc6IHRoaXMuY29sb3VyT2JqZWN0LmcgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICAgIGI6IHRoaXMuY29sb3VyT2JqZWN0LmIgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICB9KVxuICAgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdibGFjaycpO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgdGhpcy5saWdodENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5saWdodENvbnRleHQuYXJjKFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkgKiAyXG4gICAgKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsKCk7XG5cbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVGdWxsV2FsbFNoYWRvd3MoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVyczogV2FsbFJlY2VpdmVyW11cbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArXG4gICAgICAgIHRoaXMuX3JhZGl1cyAtXG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0XG4gICAgKTtcblxuICAgIGZvciAoY29uc3Qgd2FsbCBvZiB3YWxsU2hhZG93UmVjZWl2ZXJzKSB7XG4gICAgICBjb25zdCB3YWxsUmVjdGFuZ2xlID0ge1xuICAgICAgICBwb3NpdGlvbjogd2FsbC5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogd2FsbC5zaXplLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdhbGxJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwod2FsbFJlY3RhbmdsZSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCBzaGFkb3cgcmVjZWl2ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgd2FsbFJlY3RhbmdsZSkpIHtcbiAgICAgICAgLy8gSWYgdGhlIHdhbGwgZG9lc24ndCByZWNlaXZlIGxpZ2h0LCBpdCBhbHNvIGRvZXNuJ3QgcmVjZWl2ZVxuICAgICAgICAvLyBwYXJ0aWFsIG9yIGZ1bGwgc2hhZG93c1xuICAgICAgICBpZiAoIXdhbGwucmVjZWl2ZUxpZ2h0KSB7XG4gICAgICAgICAgd2FsbC5kcmF3TWFzayhjb250ZXh0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSB3YWxsIGlzIG9ubHkgbGl0IGJ5IHRoaXMgbGlnaHQgaWYgaXQncyBhYm92ZSB0aGUgbGlnaHRcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IHdhbGxJbnRlcnZhbC5ib3R0b20pIHtcbiAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gY2xhbXAoXG4gICAgICAgICAgICByZW1hcChcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbSAtIHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLndhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICAgIHdhbGwuZHJhd01hc2soY29udGV4dCk7XG4gICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVHcm91bmRSZWdpb25TaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgcmVnaW9uU2hhZG93Q2FzdGVyczogUmVnaW9uQ2FzdGVyW11cbiAgKTogU2hhZG93PFJlZ2lvbkNhc3Rlcj5bXSB7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0KTtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArIHRoaXMuX3JhZGl1c1xuICAgICk7XG5cbiAgICAvLyBTaGFkb3cgbWV0YWRhdGEgZm9yIGVhY2ggc2hhZG93XG4gICAgY29uc3Qgc2hhZG93czogU2hhZG93PFJlZ2lvbkNhc3Rlcj5bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIHJlZ2lvblNoYWRvd0Nhc3RlcnMpIHtcbiAgICAgIGNvbnN0IGNhc3RlclJlY3RhbmdsZSA9IHtcbiAgICAgICAgcG9zaXRpb246IGNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogY2FzdGVyLnNpemUsXG4gICAgICB9O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHtcbiAgICAgICAgICBjYXN0ZXIsXG4gICAgICAgICAgLi4udGhpcy5wcmVwYXJlUmVnaW9uU2hhZG93KFxuICAgICAgICAgICAgY2FzdGVyUmVjdGFuZ2xlLFxuICAgICAgICAgICAgY2FzdGVyLmluY2x1ZGVSZWdpb25TaGFkb3dcbiAgICAgICAgICApLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFNhdmUgc2hhZG93IG1ldGFkYXRhIGZvciB1c2UgbGF0ZXIgd2hlbiByZW5kZXJpbmcgd2FsbCBzaGFkb3dzXG4gICAgICAgIHNoYWRvd3MucHVzaChleGNsdWRlKHNoYWRvdywgJ3ZlcnRpY2VzJykpO1xuXG4gICAgICAgIC8vIFJlbmRlciB0aGUgZ3JvdW5kIHNoYWRvdyBwb2x5Z29uIG9udG8gdGhlIGxpZ2h0bWFwXG4gICAgICAgIHBvbHlnb24odGhpcy5ncm91bmRMaWdodENvbnRleHQsIC4uLnNoYWRvdy52ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgcmV0dXJuIHNoYWRvd3M7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVHcm91bmRTcHJpdGVTaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgc3ByaXRlU2hhZG93Q2FzdGVyczogU3ByaXRlQ2FzdGVyW11cbiAgKTogU2hhZG93PFNwcml0ZUNhc3Rlcj5bXSB7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyh0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCk7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQudHJhbnNsYXRlKHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcblxuICAgIC8vIFNoYWRvdyBtZXRhZGF0YSBmb3IgZWFjaCBzaGFkb3dcbiAgICBjb25zdCBzaGFkb3dzOiBTaGFkb3c8U3ByaXRlQ2FzdGVyPltdID0gW107XG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2Ygc3ByaXRlU2hhZG93Q2FzdGVycykge1xuICAgICAgY29uc3QgY2FzdGVyUmVjdGFuZ2xlID0ge1xuICAgICAgICBwb3NpdGlvbjogY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiBjYXN0ZXIuc2l6ZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlclJlY3RhbmdsZSkpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93U3ByaXRlID0gY2FzdGVyLmdldFNoYWRvdygpO1xuXG4gICAgICAgIC8vIElmIHRoZSBzaGFkb3cgc3ByaXRlIGlzIG1pc3NpbmcgZm9yIHRoaXMgY2FzdGVyIHRoZW4gaXQgZG9lc24ndFxuICAgICAgICAvLyBjYXN0IGEgc2hhZG93XG4gICAgICAgIGlmICghc2hhZG93U3ByaXRlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgdGhlIGdyb3VuZCBzaGFkb3cgc3ByaXRlIG9udG8gdGhlIGxpZ2h0bWFwXG4gICAgICAgIGNvbnN0IHNoYWRvd09yaWdpbiA9IHZlYy5hZGQoXG4gICAgICAgICAgY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgIHZlYyhjYXN0ZXIuc2l6ZS54ICogY2FzdGVyLmFuY2hvci54LCBjYXN0ZXIuc2l6ZS55ICogY2FzdGVyLmFuY2hvci55KVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dMZW5ndGggPSBzbW9vdGhzdGVwKFxuICAgICAgICAgIGNhc3Rlci5taW5TaGFkb3dMZW5ndGgsXG4gICAgICAgICAgY2FzdGVyLm1heFNoYWRvd0xlbmd0aCA/PyB0aGlzLnJhZGl1cyxcbiAgICAgICAgICB1bmxlcnAoMCwgdGhpcy5yYWRpdXMsIHZlYy5sZW4odmVjLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RWRnZSA9IHZlYy5tdWwoXG4gICAgICAgICAgdmVjLm5vcih2ZWMuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIHNoYWRvd0xlbmd0aFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dFZGdlTGVuZ3RoID0gdmVjLmxlbihzaGFkb3dFZGdlKTtcbiAgICAgICAgY29uc3Qgc2hhZG93QW5nbGUgPSB2ZWMucmFkKHNoYWRvd0VkZ2UpICsgSEFMRl9QSTtcblxuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5zYXZlKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueCAtIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueSAtIHRoaXMucG9zaXRpb24ueVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yb3RhdGUoc2hhZG93QW5nbGUpO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgc2hhZG93U3ByaXRlLFxuICAgICAgICAgIC1jYXN0ZXIuc2l6ZS54ICogY2FzdGVyLm9mZnNldC54LFxuICAgICAgICAgIC1zaGFkb3dFZGdlTGVuZ3RoICogY2FzdGVyLm9mZnNldC55LFxuICAgICAgICAgIGNhc3Rlci5zaXplLngsXG4gICAgICAgICAgc2hhZG93RWRnZUxlbmd0aFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gU2F2ZSBzaGFkb3cgbWV0YWRhdGEgZm9yIHVzZSBsYXRlciB3aGVuIHJlbmRlcmluZyB3YWxsIHNoYWRvd3NcbiAgICAgICAgY29uc3QgbGVmdENvcm5lciA9IHZlYy5yb3QoXG4gICAgICAgICAgdmVjKGNhc3Rlci5zaXplLnggKiBjYXN0ZXIub2Zmc2V0LngsIDApLFxuICAgICAgICAgIHNoYWRvd0FuZ2xlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJpZ2h0Q29ybmVyID0gdmVjLnJvdChcbiAgICAgICAgICB2ZWMoY2FzdGVyLnNpemUueCAqICgxIC0gY2FzdGVyLm9mZnNldC54KSwgMCksXG4gICAgICAgICAgc2hhZG93QW5nbGVcbiAgICAgICAgKTtcbiAgICAgICAgc2hhZG93cy5wdXNoKHtcbiAgICAgICAgICBjYXN0ZXIsXG4gICAgICAgICAgbGVmdEVkZ2U6IHtcbiAgICAgICAgICAgIHN0YXJ0OiB2ZWMuc3ViKHNoYWRvd09yaWdpbiwgbGVmdENvcm5lciksXG4gICAgICAgICAgICBlbmQ6IHZlYy5zdWIodmVjLmFkZChzaGFkb3dPcmlnaW4sIHNoYWRvd0VkZ2UpLCBsZWZ0Q29ybmVyKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJpZ2h0RWRnZToge1xuICAgICAgICAgICAgc3RhcnQ6IHZlYy5hZGQoc2hhZG93T3JpZ2luLCByaWdodENvcm5lciksXG4gICAgICAgICAgICBlbmQ6IHZlYy5hZGQodmVjLmFkZChzaGFkb3dPcmlnaW4sIHNoYWRvd0VkZ2UpLCByaWdodENvcm5lciksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIHJldHVybiBzaGFkb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlR3JvdW5kQ2lyY2xlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGNpcmNsZVNoYWRvd0Nhc3RlcnM6IENpcmNsZUNhc3RlcltdXG4gICk6IFNoYWRvdzxDaXJjbGVDYXN0ZXI+W10ge1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyh0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCk7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQudHJhbnNsYXRlKHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzKTtcblxuICAgIC8vIFNoYWRvdyBtZXRhZGF0YSBmb3IgZWFjaCBzaGFkb3dcbiAgICBjb25zdCBzaGFkb3dzOiBTaGFkb3c8Q2lyY2xlQ2FzdGVyPltdID0gW107XG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2YgY2lyY2xlU2hhZG93Q2FzdGVycykge1xuICAgICAgY29uc3QgY2FzdGVyUmVjdGFuZ2xlID0ge1xuICAgICAgICBwb3NpdGlvbjogY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiBjYXN0ZXIuc2l6ZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgY2FzdGVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIGNhc3RlclJlY3RhbmdsZSkpIHtcbiAgICAgICAgLy8gUmVuZGVyIGEgY2lyY3VsYXIgZ3JvdW5kIHNoYWRvdyBvbnRvIHRoZSBsaWdodG1hcFxuICAgICAgICBjb25zdCBzaGFkb3dPcmlnaW4gPSB2ZWMuYWRkKFxuICAgICAgICAgIGNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICB2ZWMoY2FzdGVyLnNpemUueCAqIGNhc3Rlci5hbmNob3IueCwgY2FzdGVyLnNpemUueSAqIGNhc3Rlci5hbmNob3IueSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RGlzdGFuY2UgPSBzbW9vdGhzdGVwKFxuICAgICAgICAgIGNhc3Rlci5taW5TaGFkb3dEaXN0YW5jZSxcbiAgICAgICAgICBjYXN0ZXIubWF4U2hhZG93RGlzdGFuY2UgPz8gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgdW5sZXJwKDAsIHRoaXMucmFkaXVzLCB2ZWMubGVuKHZlYy5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Bvc2l0aW9uID0gdmVjLm11bChcbiAgICAgICAgICB2ZWMubm9yKHZlYy5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSksXG4gICAgICAgICAgc2hhZG93RGlzdGFuY2VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93U2l6ZSA9IHZlYy5tdWwoY2FzdGVyLnNpemUsIDAuNSk7XG5cbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5nbG9iYWxBbHBoYSA9IGNhc3Rlci5hbHBoYTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQudHJhbnNsYXRlKFxuICAgICAgICAgIHNoYWRvd09yaWdpbi54IC0gdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgIHNoYWRvd09yaWdpbi55IC0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5lbGxpcHNlKFxuICAgICAgICAgIHNoYWRvd1Bvc2l0aW9uLngsXG4gICAgICAgICAgc2hhZG93UG9zaXRpb24ueSxcbiAgICAgICAgICBzaGFkb3dTaXplLngsXG4gICAgICAgICAgc2hhZG93U2l6ZS55LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBNYXRoLlBJICogMlxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5maWxsKCk7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcblxuICAgICAgICAvLyBTYXZlIHNoYWRvdyBtZXRhZGF0YSBmb3IgdXNlIGxhdGVyIHdoZW4gcmVuZGVyaW5nIHdhbGwgc2hhZG93c1xuICAgICAgICBzaGFkb3dzLnB1c2goe1xuICAgICAgICAgIGNhc3RlcixcbiAgICAgICAgICBsZWZ0RWRnZTogbnVsbCxcbiAgICAgICAgICByaWdodEVkZ2U6IG51bGwsXG4gICAgICAgICAgcG9zaXRpb246IHZlYy5hZGQoc2hhZG93T3JpZ2luLCBzaGFkb3dQb3NpdGlvbiksXG4gICAgICAgICAgc2l6ZTogc2hhZG93U2l6ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIHJldHVybiBzaGFkb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlV2FsbFJlZ2lvblNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICByZWdpb25TaGFkb3dzOiBTaGFkb3c8UmVnaW9uQ2FzdGVyPltdLFxuICAgIHJlZ2lvblNoYWRvd0Nhc3RlcnM6IFJlZ2lvbkNhc3RlcltdLFxuICAgIHdhbGxTaGFkb3dSZWNlaXZlcnM6IFdhbGxSZWNlaXZlcltdXG4gICkge1xuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3ModGhpcy53YWxsTGlnaHQxQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArXG4gICAgICAgIHRoaXMuX3JhZGl1cyAtXG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0XG4gICAgKTtcblxuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3ModGhpcy53YWxsTGlnaHQyQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArXG4gICAgICAgIHRoaXMuX3JhZGl1cyAtXG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0XG4gICAgKTtcblxuICAgIGZvciAoY29uc3Qgd2FsbCBvZiB3YWxsU2hhZG93UmVjZWl2ZXJzKSB7XG4gICAgICBjb25zdCB3YWxsUmVjdGFuZ2xlID0ge1xuICAgICAgICBwb3NpdGlvbjogd2FsbC5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogd2FsbC5zaXplLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdhbGxJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwod2FsbFJlY3RhbmdsZSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCBzaGFkb3cgcmVjZWl2ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgd2FsbFJlY3RhbmdsZSkpIHtcbiAgICAgICAgLy8gSWYgdGhlIHdhbGwgZG9lc24ndCByZWNlaXZlIGxpZ2h0LCBpdCBhbHNvIGRvZXNuJ3QgcmVjZWl2ZVxuICAgICAgICAvLyBwYXJ0aWFsIG9yIGZ1bGwgc2hhZG93c1xuICAgICAgICBpZiAoIXdhbGwucmVjZWl2ZUxpZ2h0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBlYWNoIHNoYWRvdyB0byBzZWUgaWYgaXQgZnVsbHkgb3IgcGFydGlhbGx5IHNoYWRvd3MgdGhpcyB3YWxsXG4gICAgICAgIGZvciAoY29uc3Qgc2hhZG93IG9mIHJlZ2lvblNoYWRvd3MpIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc2hhZG93LmNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICAgIHNpemU6IHNoYWRvdy5jYXN0ZXIuc2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0Nhc3RlckludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBBIHNoYWRvdyBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9udG8gYSByZWNlaXZlciB0aGF0XG4gICAgICAgICAgLy8gb3ZlcmxhcHMgaXRcbiAgICAgICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdCh3YWxsUmVjdGFuZ2xlLCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHNoYWRvdyBoYXMgbm8gZWRnZXMgKHRoaXMgbWVhbnMgdGhlIGxpZ2h0IGlzIGluc2lkZVxuICAgICAgICAgIC8vIHRoZSBzaGFkb3cgY2FzdGVyIHJlZ2lvbiwgYW5kIGFzIHN1Y2ggaXQgZG9lc24ndCBjYXN0IGEgc2hhZG93KVxuICAgICAgICAgIGlmIChzaGFkb3cubGVmdEVkZ2UgPT09IG51bGwgJiYgc2hhZG93LnJpZ2h0RWRnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgYm90aCBzaGFkb3cgZWRnZXMgYXJlIG5vdCBwb2ludGluZyB1cCB0aGVuIHRoaXMgc2hhZG93IGRvZXNuJ3RcbiAgICAgICAgICAvLyBjYXN0IG9uIHRoaXMgd2FsbFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSAmJlxuICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlLnN0YXJ0LnkgPD0gc2hhZG93LmxlZnRFZGdlLmVuZC55ICYmXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlICYmXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnkgPD0gc2hhZG93LnJpZ2h0RWRnZS5lbmQueVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsJ3MgbG93ZXIgZWRnZSBpcyBiZWxvdyB0aGUgc2hhZG93IGNhc3RlcidzXG4gICAgICAgICAgLy8gbG93ZXIgZWRnZS4gSWYgc28sIHRoZSBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9uIHRoaXMgd2FsbFxuICAgICAgICAgIGlmICh3YWxsSW50ZXJ2YWwuYm90dG9tID4gc2hhZG93Q2FzdGVySW50ZXJ2YWwuYm90dG9tKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFZGdlIGNhc2U6IGlmIHRoZSBjYXN0ZXIgaXMgcGFydGlhbGx5IGFib3ZlIGFuZCBiZWxvdyB0aGUgd2FsbCdzXG4gICAgICAgICAgLy8gbG93ZXIgZWRnZSBhbmQgdGhlIHNoYWRvdyBpcyBwb2ludGluZyBhd2F5IGZyb20gdGhlIHdhbGwsIHdlIGRvbid0XG4gICAgICAgICAgLy8gY2FzdCBhIHNoYWRvd1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlckludGVydmFsLnRvcCA8PSB3YWxsSW50ZXJ2YWwuYm90dG9tICYmXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJJbnRlcnZhbC5ib3R0b20gPj0gd2FsbEludGVydmFsLmJvdHRvbVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgbGVmdCBvZiBzaGFkb3cgcmVjZWl2ZXJcbiAgICAgICAgICAgIGlmIChzaGFkb3dDYXN0ZXJJbnRlcnZhbC5yaWdodCA8PSB3YWxsSW50ZXJ2YWwubGVmdCkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHNoYWRvdy5yaWdodEVkZ2UgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIHNoYWRvdy5yaWdodEVkZ2Uuc3RhcnQueCA+PSBzaGFkb3cucmlnaHRFZGdlLmVuZC54KSAmJlxuICAgICAgICAgICAgICAgIChzaGFkb3cubGVmdEVkZ2UgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZS5zdGFydC54ID49IHNoYWRvdy5sZWZ0RWRnZS5lbmQueClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgcmlnaHQgb2Ygc2hhZG93IHJlY2VpdmVyXG4gICAgICAgICAgICBpZiAoc2hhZG93Q2FzdGVySW50ZXJ2YWwubGVmdCA+PSB3YWxsSW50ZXJ2YWwucmlnaHQpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChzaGFkb3cucmlnaHRFZGdlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnggPD0gc2hhZG93LnJpZ2h0RWRnZS5lbmQueCkgJiZcbiAgICAgICAgICAgICAgICAoc2hhZG93LmxlZnRFZGdlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2Uuc3RhcnQueCA8PSBzaGFkb3cubGVmdEVkZ2UuZW5kLngpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsJ3MgbG93ZXIgZWRnZSBpcyBjb2xpbmVhciB3aXRoIHRoZSBzaGFkb3dcbiAgICAgICAgICAvLyBjYXN0ZXIncyBsb3dlciBlZGdlLiBJZiBzbywgd2UgYWxsb3cgbGlnaHQgdG8gcGFzcyAoaW4gbW9zdCBjYXNlcylcbiAgICAgICAgICAvLyBFZGdlIGNhc2U6IGlmIHRoZXJlJ3MgYW5vdGhlciBzaGFkb3cgY2FzdGVyIGRpcmVjdGx5IGJlbG93IHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgb25lLCB0aGVuIGl0IG1pZ2h0IGNyZWF0ZSBhIHNoYWRvd1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b20gPT09IHNoYWRvd0Nhc3RlckludGVydmFsLmJvdHRvbSAmJlxuICAgICAgICAgICAgIXJlZ2lvblNoYWRvd0Nhc3RlcnMuc29tZShjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYy5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBzaXplOiBjLnNpemUsXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgY2FzdGVySW50ZXJ2YWwudG9wID09PSBzaGFkb3dDYXN0ZXJJbnRlcnZhbC5ib3R0b20gJiZcbiAgICAgICAgICAgICAgICBvdmVybGFwMWQoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBjYXN0ZXJJbnRlcnZhbC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IGNhc3RlckludGVydmFsLnJpZ2h0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHNoYWRvd0Nhc3RlckludGVydmFsLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogc2hhZG93Q2FzdGVySW50ZXJ2YWwucmlnaHQsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSAhPT0gbnVsbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBsZWZ0SW50ZXJjZXB0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICBpZiAoc2hhZG93LmxlZnRFZGdlKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0SW50ZXJjZXB0UmVzdWx0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSxcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChsZWZ0SW50ZXJjZXB0UmVzdWx0KSB7XG4gICAgICAgICAgICAgIFtsZWZ0SW50ZXJjZXB0XSA9IGxlZnRJbnRlcmNlcHRSZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaGFkb3cubGVmdEVkZ2Uuc3RhcnQueSA8IHNoYWRvdy5sZWZ0RWRnZS5lbmQueSkge1xuICAgICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ID0gd2FsbEludGVydmFsLmxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHJpZ2h0SW50ZXJjZXB0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICBpZiAoc2hhZG93LnJpZ2h0RWRnZSkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHRJbnRlcmNlcHRSZXN1bHQgPSBsaW5lWUludGVyY2VwdChcbiAgICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZSxcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChyaWdodEludGVyY2VwdFJlc3VsdCkge1xuICAgICAgICAgICAgICBbcmlnaHRJbnRlcmNlcHRdID0gcmlnaHRJbnRlcmNlcHRSZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnkgPCBzaGFkb3cucmlnaHRFZGdlLmVuZC55KSB7XG4gICAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ID0gd2FsbEludGVydmFsLnJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWF4KHdhbGxJbnRlcnZhbC5sZWZ0LCBsZWZ0SW50ZXJjZXB0ID8/IC1JbmZpbml0eSk7XG4gICAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5taW4od2FsbEludGVydmFsLnJpZ2h0LCByaWdodEludGVyY2VwdCA/PyBJbmZpbml0eSk7XG5cbiAgICAgICAgICAvLyBEb24ndCByZW5kZXIgdGhlIHNoYWRvdyBpZiBpdCdzIGdvdCBuZWdhdGl2ZSB3aWR0aFxuICAgICAgICAgIGlmIChtaW4gPj0gbWF4KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEb24ndCByZW5kZXIgdGhlIHNoYWRvdyBpZiBpdCdzIG91dHNpZGUgdGhlIHdhbGwgYm91bmRhcmllc1xuICAgICAgICAgIGlmIChtaW4gPiB3YWxsSW50ZXJ2YWwucmlnaHQgfHwgbWF4IDwgd2FsbEludGVydmFsLmxlZnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG92ZXJsYXAxZChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBtaW4sXG4gICAgICAgICAgICAgICAgZW5kOiBtYXgsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogd2FsbEludGVydmFsLmxlZnQsXG4gICAgICAgICAgICAgICAgZW5kOiB3YWxsSW50ZXJ2YWwucmlnaHQsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgICAgICAgICBzd2l0Y2ggKHdhbGwubGF5ZXIpIHtcbiAgICAgICAgICAgICAgY2FzZSBXYWxsU2hhZG93TGF5ZXIuT25lOlxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLndhbGxMaWdodDFDb250ZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgV2FsbFNoYWRvd0xheWVyLlR3bzpcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy53YWxsTGlnaHQyQ29udGV4dDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QobWluLCB3YWxsSW50ZXJ2YWwudG9wLCBtYXggLSBtaW4sIHdhbGwuc2l6ZS55KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVXYWxsU3ByaXRlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHNwcml0ZVNoYWRvd3M6IFNoYWRvdzxTcHJpdGVDYXN0ZXI+W10sXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVyczogV2FsbFJlY2VpdmVyW11cbiAgKSB7XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKHRoaXMud2FsbExpZ2h0MUNvbnRleHQpO1xuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgK1xuICAgICAgICB0aGlzLl9yYWRpdXMgLVxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG5cbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3ModGhpcy53YWxsTGlnaHQyQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArXG4gICAgICAgIHRoaXMuX3JhZGl1cyAtXG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0XG4gICAgKTtcblxuICAgIGZvciAoY29uc3Qgd2FsbCBvZiB3YWxsU2hhZG93UmVjZWl2ZXJzKSB7XG4gICAgICBjb25zdCB3YWxsUmVjdGFuZ2xlID0ge1xuICAgICAgICBwb3NpdGlvbjogd2FsbC5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogd2FsbC5zaXplLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdhbGxJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwod2FsbFJlY3RhbmdsZSk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCBzaGFkb3cgcmVjZWl2ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgd2FsbFJlY3RhbmdsZSkpIHtcbiAgICAgICAgLy8gSWYgdGhlIHdhbGwgZG9lc24ndCByZWNlaXZlIGxpZ2h0LCBpdCBhbHNvIGRvZXNuJ3QgcmVjZWl2ZVxuICAgICAgICAvLyBwYXJ0aWFsIG9yIGZ1bGwgc2hhZG93c1xuICAgICAgICBpZiAoIXdhbGwucmVjZWl2ZUxpZ2h0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBlYWNoIHNoYWRvdyB0byBzZWUgaWYgaXQgb2NjbHVkZXMgdGhpcyB3YWxsXG4gICAgICAgIGZvciAoY29uc3Qgc2hhZG93IG9mIHNwcml0ZVNoYWRvd3MpIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dTcHJpdGUgPSBzaGFkb3cuY2FzdGVyLmdldFNoYWRvdygpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIHNoYWRvdyBzcHJpdGUgaXMgbWlzc2luZyBmb3IgdGhpcyBjYXN0ZXIgdGhlbiBpdCBkb2Vzbid0XG4gICAgICAgICAgLy8gY2FzdCBhIHNoYWRvd1xuICAgICAgICAgIGlmICghc2hhZG93U3ByaXRlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc2hhZG93LmNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICAgIHNpemU6IHNoYWRvdy5jYXN0ZXIuc2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0Nhc3RlckludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBBIHNoYWRvdyBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9udG8gYSByZWNlaXZlciB0aGF0XG4gICAgICAgICAgLy8gb3ZlcmxhcHMgaXRcbiAgICAgICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdCh3YWxsUmVjdGFuZ2xlLCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHNoYWRvdyBoYXMgbm8gZWRnZXMgKHRoaXMgbWVhbnMgdGhlIGxpZ2h0IGlzIGluc2lkZVxuICAgICAgICAgIC8vIHRoZSBzaGFkb3cgY2FzdGVyIHJlZ2lvbiwgYW5kIGFzIHN1Y2ggaXQgZG9lc24ndCBjYXN0IGEgc2hhZG93KVxuICAgICAgICAgIGlmIChzaGFkb3cubGVmdEVkZ2UgPT09IG51bGwgJiYgc2hhZG93LnJpZ2h0RWRnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgYm90aCBzaGFkb3cgZWRnZXMgYXJlIG5vdCBwb2ludGluZyB1cCB0aGVuIHRoaXMgc2hhZG93IGRvZXNuJ3RcbiAgICAgICAgICAvLyBjYXN0IG9uIHRoaXMgd2FsbFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSAmJlxuICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlLnN0YXJ0LnkgPD0gc2hhZG93LmxlZnRFZGdlLmVuZC55ICYmXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlICYmXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnkgPD0gc2hhZG93LnJpZ2h0RWRnZS5lbmQueVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsJ3MgbG93ZXIgZWRnZSBpcyBiZWxvdyB0aGUgc2hhZG93IGNhc3RlcidzXG4gICAgICAgICAgLy8gbG93ZXIgZWRnZS4gSWYgc28sIHRoZSBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9uIHRoaXMgd2FsbFxuICAgICAgICAgIGlmICh3YWxsSW50ZXJ2YWwuYm90dG9tID4gc2hhZG93Q2FzdGVySW50ZXJ2YWwuYm90dG9tKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgbGVmdEludGVyY2VwdDogW251bWJlciwgbnVtYmVyXSB8IG51bGwgPSBudWxsO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSAmJlxuICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlLnN0YXJ0LnkgPiBzaGFkb3cubGVmdEVkZ2UuZW5kLnlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxlZnRJbnRlcmNlcHQgPSBsaW5lWUludGVyY2VwdChcbiAgICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlLFxuICAgICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgcmlnaHRJbnRlcmNlcHQ6IFtudW1iZXIsIG51bWJlcl0gfCBudWxsID0gbnVsbDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlICYmXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnkgPiBzaGFkb3cucmlnaHRFZGdlLmVuZC55XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByaWdodEludGVyY2VwdCA9IGxpbmVZSW50ZXJjZXB0KFxuICAgICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLFxuICAgICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiBvbmx5IHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBzcHJpdGUgc2hhZG93IHJlY3RhbmdsZVxuICAgICAgICAgIC8vIGludGVyY2VwdGVkIHRoZSB3YWxsLCB0aGVuIHdlJ2xsIG5lZWQgdG8gZmluZCB3aGVyZSB0aGUgdG9wLWxlZnRcbiAgICAgICAgICAvLyBjb3JuZXIgKndvdWxkIGhhdmUqIGludGVyY2VwdGVkIChhbGxvd0FmdGVyID0gdHJ1ZSlcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlICYmXG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ICE9PSBudWxsICYmXG4gICAgICAgICAgICByaWdodEludGVyY2VwdCA9PT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmlnaHRJbnRlcmNlcHQgPSBsaW5lWUludGVyY2VwdChcbiAgICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZSxcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMaWtld2lzZSwgaWYgb25seSB0aGUgdG9wLWxlZnQgY29ybmVyIG9mIHRoZSBzcHJpdGUgc2hhZG93XG4gICAgICAgICAgLy8gcmVjdGFuZ2xlIGludGVyY2VwdGVkIHRoZSB3YWxsLCB0aGVuIHdlJ2xsIG5lZWQgdG8gZmluZCB3aGVyZSB0aGVcbiAgICAgICAgICAvLyB0b3AtbGVmdCBjb3JuZXIgKndvdWxkIGhhdmUqIGludGVyY2VwdGVkIChhbGxvd0FmdGVyID0gdHJ1ZSlcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2UgJiZcbiAgICAgICAgICAgIGxlZnRJbnRlcmNlcHQgPT09IG51bGwgJiZcbiAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ICE9PSBudWxsXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSxcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEb24ndCByZW5kZXIgYSBzaGFkb3cgaWYgZWl0aGVyIGludGVyY2VwdCBpcyBtaXNzaW5nICh0aGlzIGNhblxuICAgICAgICAgIC8vIGhhcHBlbiBpZiBib3RoIHNoYWRvdyBlZGdlcyBhcmUgcG9pbnRpbmcgZG93bilcbiAgICAgICAgICBpZiAobGVmdEludGVyY2VwdCA9PT0gbnVsbCB8fCByaWdodEludGVyY2VwdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIGEgc2hhZG93IGlmIHRoZSBpbnRlcmNlcHRzIGFyZSB0aGUgd3Jvbmcgd2F5ICdyb3VuZFxuICAgICAgICAgIC8vIG9yIHRoZSBnYXAgYmV0d2VlbiB0aGVtIGlzIDBcbiAgICAgICAgICAvLyAobm90IHN1cmUgaWYgdGhpcyBpcyBwb3NzaWJsZSwgYnV0IGp1c3QgbWFraW5nIHN1cmUpXG4gICAgICAgICAgaWYgKGxlZnRJbnRlcmNlcHRbSU5URVJDRVBUX1hdID49IHJpZ2h0SW50ZXJjZXB0W0lOVEVSQ0VQVF9YXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRoZSBzaGFkb3cgaWYgaXQncyBvdXRzaWRlIHRoZSB3YWxsIGJvdW5kYXJpZXNcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0W0lOVEVSQ0VQVF9YXSA+IHdhbGxJbnRlcnZhbC5yaWdodCB8fFxuICAgICAgICAgICAgcmlnaHRJbnRlcmNlcHRbSU5URVJDRVBUX1hdIDwgd2FsbEludGVydmFsLmxlZnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHQgPVxuICAgICAgICAgICAgKGxlZnRJbnRlcmNlcHRbSU5URVJDRVBUX1RdICsgcmlnaHRJbnRlcmNlcHRbSU5URVJDRVBUX1RdKSAvIDIgK1xuICAgICAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLnNwcml0ZVdhbGxTaGFkb3dJbnRlcmNlcHRPZmZzZXQ7XG4gICAgICAgICAgY29uc3QgbCA9XG4gICAgICAgICAgICAodmVjLmxlbih2ZWMuc3ViKHNoYWRvdy5sZWZ0RWRnZSEuc3RhcnQsIHNoYWRvdy5sZWZ0RWRnZSEuZW5kKSkgK1xuICAgICAgICAgICAgICB2ZWMubGVuKFxuICAgICAgICAgICAgICAgIHZlYy5zdWIoc2hhZG93LnJpZ2h0RWRnZSEuc3RhcnQsIHNoYWRvdy5yaWdodEVkZ2UhLmVuZClcbiAgICAgICAgICAgICAgKSkgL1xuICAgICAgICAgICAgMjtcbiAgICAgICAgICBjb25zdCBzb3VyY2VIZWlnaHQgPSBzaGFkb3dTcHJpdGUuaGVpZ2h0ICogKDEgLSB0KTtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbkhlaWdodCA9XG4gICAgICAgICAgICBsICpcbiAgICAgICAgICAgICgxIC0gdCkgKlxuICAgICAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLnNwcml0ZVdhbGxTaGFkb3dMZW5ndGhGYWN0b3I7XG5cbiAgICAgICAgICBsZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgICAgIHN3aXRjaCAod2FsbC5sYXllcikge1xuICAgICAgICAgICAgY2FzZSBXYWxsU2hhZG93TGF5ZXIuT25lOlxuICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy53YWxsTGlnaHQxQ29udGV4dDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgV2FsbFNoYWRvd0xheWVyLlR3bzpcbiAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMud2FsbExpZ2h0MkNvbnRleHQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY29udGV4dC5yZWN0KFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5wb3NpdGlvbi55LFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5zaXplLngsXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnNpemUueVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29udGV4dC5jbGlwKCk7XG4gICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBzaGFkb3dTcHJpdGUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHNoYWRvd1Nwcml0ZS53aWR0aCxcbiAgICAgICAgICAgIHNvdXJjZUhlaWdodCxcbiAgICAgICAgICAgIGxlZnRJbnRlcmNlcHRbSU5URVJDRVBUX1hdLFxuICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbSAtIGRlc3RpbmF0aW9uSGVpZ2h0LFxuICAgICAgICAgICAgcmlnaHRJbnRlcmNlcHRbSU5URVJDRVBUX1hdIC0gbGVmdEludGVyY2VwdFtJTlRFUkNFUFRfWF0sXG4gICAgICAgICAgICBkZXN0aW5hdGlvbkhlaWdodFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVdhbGxDaXJjbGVTaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgY2lyY2xlU2hhZG93czogU2hhZG93PENpcmNsZUNhc3Rlcj5bXSxcbiAgICB3YWxsU2hhZG93UmVjZWl2ZXJzOiBXYWxsUmVjZWl2ZXJbXVxuICApIHtcbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKHRoaXMud2FsbExpZ2h0MUNvbnRleHQpO1xuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgK1xuICAgICAgICB0aGlzLl9yYWRpdXMgLVxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG5cbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKHRoaXMud2FsbExpZ2h0MkNvbnRleHQpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgK1xuICAgICAgICB0aGlzLl9yYWRpdXMgLVxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IHdhbGwgb2Ygd2FsbFNoYWRvd1JlY2VpdmVycykge1xuICAgICAgY29uc3Qgd2FsbFJlY3RhbmdsZSA9IHtcbiAgICAgICAgcG9zaXRpb246IHdhbGwucG9zaXRpb24sXG4gICAgICAgIHNpemU6IHdhbGwuc2l6ZSxcbiAgICAgIH07XG4gICAgICBjb25zdCB3YWxsSW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHdhbGxSZWN0YW5nbGUpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHdhbGwgc2hhZG93IHJlY2VpdmVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIHdhbGxSZWN0YW5nbGUpKSB7XG4gICAgICAgIC8vIElmIHRoZSB3YWxsIGRvZXNuJ3QgcmVjZWl2ZSBsaWdodCwgaXQgYWxzbyBkb2Vzbid0IHJlY2VpdmVcbiAgICAgICAgLy8gcGFydGlhbCBvciBmdWxsIHNoYWRvd3NcbiAgICAgICAgaWYgKCF3YWxsLnJlY2VpdmVMaWdodCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBzaGFkb3cgdG8gc2VlIGlmIGl0IG9jY2x1ZGVzIHRoaXMgd2FsbFxuICAgICAgICBmb3IgKGNvbnN0IHNoYWRvdyBvZiBjaXJjbGVTaGFkb3dzKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHNoYWRvdyBkb2Vzbid0IGhhdmUgYSBwb3NpdGlvbiBvciBzaXplIHRoZW4gaXQncyBub3QgYVxuICAgICAgICAgIC8vIHZhbGlkIGNpcmNsZSBzaGFkb3dcbiAgICAgICAgICBpZiAoIXNoYWRvdy5wb3NpdGlvbiB8fCAhc2hhZG93LnNpemUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNoYWRvd0Nhc3RlclJlY3RhbmdsZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzaGFkb3cuY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2l6ZTogc2hhZG93LmNhc3Rlci5zaXplLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3Qgc2hhZG93Q2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKFxuICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIEEgc2hhZG93IGNhc3RlciBkb2Vzbid0IGNhc3QgYSBzaGFkb3cgb250byBhIHJlY2VpdmVyIHRoYXRcbiAgICAgICAgICAvLyBvdmVybGFwcyBpdFxuICAgICAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KHdhbGxSZWN0YW5nbGUsIHNoYWRvd0Nhc3RlclJlY3RhbmdsZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCdzIGxvd2VyIGVkZ2UgaXMgYmVsb3cgdGhlIHNoYWRvdyBjYXN0ZXInc1xuICAgICAgICAgIC8vIGxvd2VyIGVkZ2UuIElmIHNvLCB0aGUgY2FzdGVyIGRvZXNuJ3QgY2FzdCBhIHNoYWRvdyBvbiB0aGlzIHdhbGxcbiAgICAgICAgICBpZiAod2FsbEludGVydmFsLmJvdHRvbSA+IHNoYWRvd0Nhc3RlckludGVydmFsLmJvdHRvbSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2hhZG93LnNpemUgY29udGFpbnMgdGhlIHJhZGlpIG9mIHRoZSBzaGFkb3cgZWxsaXBzZVxuICAgICAgICAgIGNvbnN0IHNoYWRvd1JlY3RhbmdsZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2ZWMuc3ViKHNoYWRvdy5wb3NpdGlvbiwgc2hhZG93LnNpemUpLFxuICAgICAgICAgICAgc2l6ZTogdmVjLm11bChzaGFkb3cuc2l6ZSwgMiksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIE9ubHkgY2FzdCB0aGlzIHNoYWRvdyBpZiBpdCBvdmVybGFwcyB0aGUgd2FsbFxuICAgICAgICAgIGlmICghcmVjdGFuZ2xlc0ludGVyc2VjdCh3YWxsUmVjdGFuZ2xlLCBzaGFkb3dSZWN0YW5nbGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgICAgIHN3aXRjaCAod2FsbC5sYXllcikge1xuICAgICAgICAgICAgY2FzZSBXYWxsU2hhZG93TGF5ZXIuT25lOlxuICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy53YWxsTGlnaHQxQ29udGV4dDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgV2FsbFNoYWRvd0xheWVyLlR3bzpcbiAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMud2FsbExpZ2h0MkNvbnRleHQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY29udGV4dC5yZWN0KFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5wb3NpdGlvbi55LFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5zaXplLngsXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnNpemUueVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29udGV4dC5jbGlwKCk7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBjb250ZXh0LmVsbGlwc2UoXG4gICAgICAgICAgICBzaGFkb3cucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHNoYWRvdy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgc2hhZG93LnNpemUueCxcbiAgICAgICAgICAgIHNoYWRvdy5zaXplLnkgKlxuICAgICAgICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMuY2lyY2xlV2FsbFNoYWRvd0xlbmd0aEZhY3RvcixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBzaGFkb3cuY2FzdGVyLmFscGhhO1xuICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVSZWdpb25TaGFkb3coXG4gICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgaW5jbHVkZUNhc3RlclJlZ2lvbjogYm9vbGVhbiA9IGZhbHNlXG4gICk6IHtcbiAgICBzaGFkb3dDYXN0ZXJJbnRlcnZhbDogSW50ZXJ2YWwyZDtcbiAgICBsZWZ0RWRnZTogTGluZSB8IG51bGw7XG4gICAgcmlnaHRFZGdlOiBMaW5lIHwgbnVsbDtcbiAgICB2ZXJ0aWNlczogUG9seWdvblZlcnRpY2VzO1xuICB9IHtcbiAgICBjb25zdCBsaWdodFBvc2l0aW9uID0gdmVjLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICBjb25zdCBsaWdodFJhZGl1cyA9IHRoaXMuX3JhZGl1cztcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlKTtcbiAgICBjb25zdCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcyA9IHJlY3RhbmdsZVZlcnRpY2VzKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93RWRnZXM6IExpbmVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFkb3dDYXN0ZXJWZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBhdChzaGFkb3dDYXN0ZXJWZXJ0aWNlcywgaSAtIDEpO1xuICAgICAgY29uc3QgY3VycmVudCA9IHNoYWRvd0Nhc3RlclZlcnRpY2VzW2ldO1xuXG4gICAgICBpZiAoIWxpbmVJc0ZhY2luZyh7IHN0YXJ0OiBwcmV2aW91cywgZW5kOiBjdXJyZW50IH0sIHRoaXMucG9zaXRpb24pKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSB2ZWMuc3ViKHByZXZpb3VzLCBsaWdodFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgdmVydGV4MiA9IHZlYy5zdWIoY3VycmVudCwgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIHNoYWRvd0VkZ2VzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHByZXZpb3VzLFxuICAgICAgICAgICAgZW5kOiB2ZWMuYWRkKFxuICAgICAgICAgICAgICBwcmV2aW91cyxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDEpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogY3VycmVudCxcbiAgICAgICAgICAgIGVuZDogdmVjLmFkZChcbiAgICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsZWZ0RWRnZTogTGluZSB8IG51bGwgPSBudWxsO1xuICAgIGxldCByaWdodEVkZ2U6IExpbmUgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBzaGFkb3dQb2x5Z29uOiBQb2x5Z29uVmVydGljZXMgPSBbXTtcbiAgICBzd2l0Y2ggKHNlY3RvcjJkKHRoaXMucG9zaXRpb24sIHNoYWRvd0Nhc3RlckludGVydmFsKSkge1xuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BMZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1szXTtcbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3A6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMl07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzFdO1xuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1syXS5lbmQsIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMl07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzFdO1xuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgdmVjKFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueCArIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5zaXplLngsXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbMV0uZW5kLngsIHNoYWRvd0VkZ2VzWzJdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLmVuZFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbMV0uZW5kLngsIHNoYWRvd0VkZ2VzWzJdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkxlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzVdO1xuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuSW5zaWRlOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5SaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBzaGFkb3dFZGdlc1s0XTtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbM107XG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b21MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1szXTtcbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1szXS5lbmQueCwgc2hhZG93RWRnZXNbMF0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICB2ZWMoXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueSArIHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5zaXplLnlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzNdLmVuZC54LCBzaGFkb3dFZGdlc1swXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b206XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzVdO1xuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzNdO1xuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHZlYy5hZGQoc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2hhZG93Q2FzdGVySW50ZXJ2YWwsXG4gICAgICBsZWZ0RWRnZSxcbiAgICAgIHJpZ2h0RWRnZSxcbiAgICAgIHZlcnRpY2VzOiBzaGFkb3dQb2x5Z29uLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IHBhcnNlQ29sb3IgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yJztcbmltcG9ydCB7IGZsb2F0RXF1YWxzIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IEFjdG9yLCBBY3Rvck9wdGlvbnMgfSBmcm9tICcuL0FjdG9yJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgQ2lyY2xlQ2FzdGVyT3B0aW9ucyxcbiAgUmVnaW9uQ2FzdGVyLFxuICBSZWdpb25DYXN0ZXJPcHRpb25zLFxuICBTcHJpdGVDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB7IExpZ2h0LCBMaWdodE9wdGlvbnMgfSBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9tZXJnZSc7XG5pbXBvcnQgeyBTY2VuZU9iamVjdCB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgU2hhZGVyUGFzcyB9IGZyb20gJy4vU2hhZGVyUGFzcyc7XG5pbXBvcnQge1xuICBHcm91bmRSZWNlaXZlcixcbiAgR3JvdW5kUmVjZWl2ZXJPcHRpb25zLFxuICBTdXJmYWNlLFxuICBXYWxsUmVjZWl2ZXIsXG4gIFdhbGxSZWNlaXZlck9wdGlvbnMsXG59IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgeyBDb2xvdXIsIExpZ2h0aW5nQ2FtZXJhLCBXYWxsU2hhZG93TGF5ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIGNvbG91clRvU3RyaW5nLFxuICBpbnRlcnZhbFRvUmVjdGFuZ2xlLFxuICBsZXJwQ29sb3VyLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxufSBmcm9tICcuL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBXYWxsLCBXYWxsT3B0aW9ucyB9IGZyb20gJy4vV2FsbCc7XG5cbmV4cG9ydCB0eXBlIExpZ2h0aW5nU3lzdGVtT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBpbWFnZSBzbW9vdGhpbmcgYmUgZW5hYmxlZD9cbiAgICpcbiAgICogU2V0IHRoaXMgdG8gZmFsc2UgZm9yIHBpeGVsIGFydCBzdHlsZVxuICAgKi9cbiAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgc29mdCBzaGFkb3dzIGJlIGVuYWJsZWQ/XG4gICAqXG4gICAqIFRoaXMgd2lsbCBvbmx5IGFwcGx5IGlmIHNvZnRTaGFkb3dzQW1vdW50IGlzID4gMFxuICAgKi9cbiAgc29mdFNoYWRvd3NFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2Ygc29mdCBzaGFkb3dzIHRvIGFwcGx5XG4gICAqXG4gICAqIFNldCB0aGlzIHRvIDAgdG8gZGlzYWJsZSBzb2Z0IHNoYWRvd3NcbiAgICovXG4gIHNvZnRTaGFkb3dzQW1vdW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGUgc2hhZGVyIGJlIGVuYWJsZWQ/XG4gICAqL1xuICBzaGFkZXJFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTdHJlbmd0aCBvZiBoaWdobGlnaHRzIGZyb20gbm9ybWFsIG1hcHNcbiAgICovXG4gIHNoYWRlckhpZ2hsaWdodFN0cmVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN0cmVuZ3RoIG9mIHNoYWRpbmcgZnJvbSBub3JtYWwgbWFwc1xuICAgKi9cbiAgc2hhZGVyU2hhZG93U3RyZW5ndGg6IG51bWJlcjtcblxuICAvKipcbiAgICogU3RyZW5ndGggb2Ygc3BlY3VsYXIgaGlnaGxpZ2h0c1xuICAgKi9cbiAgc2hhZGVyU3BlY3VsYXJTdHJlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHNwZWN1bGFyIGhpZ2hsaWdodHMsIGxhcmdlciBudW1iZXJzIG1ha2Ugc21hbGxlciBoaWdobGlnaHRzXG4gICAqL1xuICBzaGFkZXJTaGluaW5lc3M6IG51bWJlcjtcblxuICAvKipcbiAgICogSG93IGZhciB0aGUgY2FtZXJhIGlzIHRpbHRlZCBhd2F5IGZyb20gbG9va2luZyBzdHJhaWdodCBkb3duLCB0aGlzIG1vdmVzXG4gICAqIHNwZWN1bGFyIGhpZ2hsaWdodHMgdG93YXJkcyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cbiAgICovXG4gIHNoYWRlclZpZXdUaWx0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFF1YW50aXplIHNoYWRpbmcgaW50byBiYW5kcyBvZiB0aGlzIHNpemUsIHNldCB0aGlzIHRvIDAgZm9yIHNtb290aCBzaGFkaW5nXG4gICAqL1xuICBzaGFkZXJCYW5kaW5nOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiBhbWJpZW50IChnbG9iYWwpIGxpZ2h0XG4gICAqL1xuICBhbWJpZW50TGlnaHRDb2xvdXI6IHN0cmluZztcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHQgd2hlbiBmYWNpbmcgYXdheSBmcm9tIHRoZSBsaWdodFxuICAgKi9cbiAgYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbG91ciBvZiBhbWJpZW50IChnbG9iYWwpIGxpZ2h0IHdoZW4gZmFjaW5nIHRvd2FyZHMgdGhlIGxpZ2h0XG4gICAqL1xuICBhbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXI6IHN0cmluZztcblxuICAvKipcbiAgICogRGlyZWN0aW9uIG9mIGFtYmllbnQgbGlnaHQgaW4gcmFkaWFuc1xuICAgKi9cbiAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZlcnRpY2FsIG9mZnNldCBmb3Igd2FsbCBsaWdodGluZ1xuICAgKi9cbiAgd2FsbExpZ2h0aW5nWU9mZnNldDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXN0YW5jZSBhYm92ZSBib3R0b20gZWRnZSBvZiB3YWxsIHNoYWRvdyByZWNlaXZlcnMgYmVmb3JlIGxpZ2h0IGlzXG4gICAqIHRvdGFsbHkgY3V0IG9mZlxuICAgKi9cbiAgd2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2U6IG51bWJlcjtcblxuICAvKipcbiAgICogTGVuZ3RoIG9mIHNwcml0ZSB3YWxsIHNoYWRvd3Mgd2lsbCBiZSBzY2FsZWQgYnkgdGhpcyBhbW91bnRcbiAgICovXG4gIHNwcml0ZVdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IG51bWJlcjtcblxuICAvKipcbiAgICogU3ByaXRlIHdhbGwgc2hhZG93IGludGVyY2VwdCB3aWxsIGJlIG9mZnNldCBieSB0aGlzIGFtb3VudCAoYXMgYSBmYWN0b3JcbiAgICogb2YgdGhlIHRvdGFsIGVkZ2UgbGVuZ3RoKVxuICAgKi9cbiAgc3ByaXRlV2FsbFNoYWRvd0ludGVyY2VwdE9mZnNldDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIZWlnaHQgb2YgY2lyY2xlIHdhbGwgc2hhZG93cyB3aWxsIGJlIHNjYWxlZCBieSB0aGlzIGFtb3VudFxuICAgKi9cbiAgY2lyY2xlV2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIExpZ2h0aW5nU3lzdGVtIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9PUFRJT05TOiBMaWdodGluZ1N5c3RlbU9wdGlvbnMgPSB7XG4gICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiB0cnVlLFxuICAgIHNvZnRTaGFkb3dzRW5hYmxlZDogZmFsc2UsXG4gICAgc29mdFNoYWRvd3NBbW91bnQ6IDIsXG4gICAgc2hhZGVyRW5hYmxlZDogZmFsc2UsXG4gICAgc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGg6IDAuNSxcbiAgICBzaGFkZXJTaGFkb3dTdHJlbmd0aDogMC41LFxuICAgIHNoYWRlclNwZWN1bGFyU3RyZW5ndGg6IDEsXG4gICAgc2hhZGVyU2hpbmluZXNzOiAxNixcbiAgICBzaGFkZXJWaWV3VGlsdDogMC41LFxuICAgIHNoYWRlckJhbmRpbmc6IDAuMSxcbiAgICBhbWJpZW50TGlnaHRDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHREaXJlY3Rpb246IDAsXG4gICAgd2FsbExpZ2h0aW5nWU9mZnNldDogLTMwLFxuICAgIHdhbGxMaWdodGluZ0N1dG9mZkRpc3RhbmNlOiAyMCxcbiAgICBzcHJpdGVXYWxsU2hhZG93TGVuZ3RoRmFjdG9yOiAwLjc1LFxuICAgIHNwcml0ZVdhbGxTaGFkb3dJbnRlcmNlcHRPZmZzZXQ6IDAuMSxcbiAgICBjaXJjbGVXYWxsU2hhZG93TGVuZ3RoRmFjdG9yOiAwLjUsXG4gIH07XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNvbXBhcmVTdXJmYWNlcyhhOiBTdXJmYWNlPGFueT4sIGI6IFN1cmZhY2U8YW55Pik6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEuekluZGV4IC0gYi56SW5kZXggfHwgYS5wb3NpdGlvbi55ICsgYS5zaXplLnkgLSAoYi5wb3NpdGlvbi55ICsgYi5zaXplLnkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvcHRpb25zOiBMaWdodGluZ1N5c3RlbU9wdGlvbnM7XG5cbiAgcHVibGljIGxpZ2h0czogTGlnaHRbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgbW9zdCByZWNlbnRseSByZW5kZXJlZCBzY3JlZW5cbiAgICovXG4gIHB1YmxpYyBzY3JlZW46IHZlYyA9IHZlYygpO1xuXG4gIHByaXZhdGUgZ3JvdW5kUmVjZWl2ZXJzOiBHcm91bmRSZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgd2FsbFJlY2VpdmVyczogV2FsbFJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSByZWdpb25DYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIHNwcml0ZUNhc3RlcnM6IFNwcml0ZUNhc3RlcltdID0gW107XG4gIHByaXZhdGUgY2lyY2xlQ2FzdGVyczogQ2lyY2xlQ2FzdGVyW10gPSBbXTtcblxuICBwcml2YXRlIGdyb3VuZE1hc2tDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgZ3JvdW5kTWFza0NhbnZhcyA9IHRoaXMuZ3JvdW5kTWFza0NvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMgPSB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSB3YWxsTWFzazFDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgd2FsbE1hc2sxQ2FudmFzID0gdGhpcy53YWxsTWFzazFDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHdhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgd2FsbE1hc2tlZExpZ2h0TWFwMUNhbnZhcyA9IHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgd2FsbE1hc2syQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHdhbGxNYXNrMkNhbnZhcyA9IHRoaXMud2FsbE1hc2syQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSB3YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIHdhbGxNYXNrZWRMaWdodE1hcDJDYW52YXMgPSB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIGxpZ2h0TWFwQ29udGV4dCA9IExpZ2h0aW5nU3lzdGVtLmNyZWF0ZUNvbnRleHQoKTtcbiAgcHVibGljIGxpZ2h0TWFwQ2FudmFzID0gdGhpcy5saWdodE1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc3BlY3VsYXJMaWdodE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzcGVjdWxhckxpZ2h0TWFwQ2FudmFzID0gdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzY2VuZU5vcm1hbE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzY2VuZU5vcm1hbE1hcENhbnZhcyA9IHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNjZW5lU3BlY3VsYXJNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc2NlbmVTcGVjdWxhck1hcENhbnZhcyA9IHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc2hhZGVyUGFzczogU2hhZGVyUGFzcyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHNwZWN1bGFyVmlzaWJsZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFydGlhbDxMaWdodGluZ1N5c3RlbU9wdGlvbnM+KSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgTGlnaHRpbmdTeXN0ZW0uREVGQVVMVF9PUFRJT05TLFxuICAgICAgb3B0aW9ucyA/PyB7fVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGFyZWEgb2YgZ3JvdW5kIHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRHcm91bmQob3B0aW9uczogR3JvdW5kUmVjZWl2ZXJPcHRpb25zKTogR3JvdW5kUmVjZWl2ZXIge1xuICAgIGNvbnN0IGdyb3VuZCA9IG5ldyBHcm91bmRSZWNlaXZlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycy5wdXNoKGdyb3VuZCk7XG5cbiAgICByZXR1cm4gZ3JvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNvbGlkIHdhbGwsIG1hZGUgZnJvbSBhIGxpdCBmcm9udCBmYWNlLCBhbiB1bmxpdCB0b3AsIGFuZCBhIGZvb3RwcmludFxuICAgKiB0aGF0IGNhc3RzIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsKG9wdGlvbnM6IFdhbGxPcHRpb25zKTogV2FsbCB7XG4gICAgcmV0dXJuIG5ldyBXYWxsKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1vdmluZyBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgY2FzdHMgYSBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRBY3RvcihvcHRpb25zOiBBY3Rvck9wdGlvbnMpOiBBY3RvciB7XG4gICAgcmV0dXJuIG5ldyBBY3Rvcih0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaWdodFxuICAgKi9cbiAgcHVibGljIGFkZExpZ2h0KG9wdGlvbnM6IExpZ2h0T3B0aW9ucyk6IExpZ2h0IHtcbiAgICBjb25zdCBsaWdodCA9IG5ldyBMaWdodCh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmxpZ2h0cy5wdXNoKGxpZ2h0KTtcblxuICAgIHJldHVybiBsaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgb3Igc3ByaXRlIHRoYXQgcmVjZWl2ZXMgd2FsbCBzaGFkb3dzXG4gICAqXG4gICAqIFRoaXMgaXMgd2hhdCBgYWRkV2FsbCgpYCBhbmQgYGFkZEFjdG9yKClgIHVzZSB0byBjcmVhdGUgdGhlaXIgc3VyZmFjZXNcbiAgICovXG4gIHB1YmxpYyBhZGRXYWxsUmVjZWl2ZXIob3B0aW9uczogV2FsbFJlY2VpdmVyT3B0aW9ucyk6IFdhbGxSZWNlaXZlciB7XG4gICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsUmVjZWl2ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLnB1c2god2FsbCk7XG5cbiAgICByZXR1cm4gd2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBwb2x5Z29uYWwgc2hhZG93c1xuICAgKi9cbiAgcHVibGljIGFkZFJlZ2lvbkNhc3RlcihvcHRpb25zOiBSZWdpb25DYXN0ZXJPcHRpb25zKTogUmVnaW9uQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgUmVnaW9uQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMucmVnaW9uQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGEgcm90YXRlZCBhbmQgc3RyZXRjaGVkIGltYWdlIGFzIGEgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkU3ByaXRlQ2FzdGVyKG9wdGlvbnM6IFNwcml0ZUNhc3Rlck9wdGlvbnMpOiBTcHJpdGVDYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBTcHJpdGVDYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5zcHJpdGVDYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYW4gZWxsaXB0aWNhbCBzaGFkb3dcbiAgICovXG4gIHB1YmxpYyBhZGRDaXJjbGVDYXN0ZXIob3B0aW9uczogQ2lyY2xlQ2FzdGVyT3B0aW9ucyk6IENpcmNsZUNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IENpcmNsZUNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmNpcmNsZUNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gb2JqZWN0IG9yIGxpZ2h0IGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZShvYmplY3Q6IFNjZW5lT2JqZWN0PGFueT4gfCBMaWdodCkge1xuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBMaWdodCkge1xuICAgICAgdGhpcy5saWdodHMgPSB0aGlzLmxpZ2h0cy5maWx0ZXIobGlnaHQgPT4gbGlnaHQgIT09IG9iamVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMgPSB0aGlzLmdyb3VuZFJlY2VpdmVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycyA9IHRoaXMud2FsbFJlY2VpdmVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMucmVnaW9uQ2FzdGVycyA9IHRoaXMucmVnaW9uQ2FzdGVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMuc3ByaXRlQ2FzdGVycyA9IHRoaXMuc3ByaXRlQ2FzdGVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICAgIHRoaXMuY2lyY2xlQ2FzdGVycyA9IHRoaXMuY2lyY2xlQ2FzdGVycy5maWx0ZXIobyA9PiBvICE9PSBvYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHdhbGwgcmVjZWl2ZXJzIGFuZCByZWdpb24gY2FzdGVycyB0aGF0IGFyZSBhZGphY2VudCB0byBlYWNoIG90aGVyXG4gICAqIGFuZCBwZXJmZWN0bHkgY29ubmVjdGVkIG9uIG9uZSBzaWRlLCBzbyB0aGF0IHRoZXJlIGFyZSBmZXdlciB0byBwcm9jZXNzXG4gICAqXG4gICAqIE1lcmdlZCBvYmplY3RzIGFyZSByZW1vdmVkIGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbSBhbmQgY2FuJ3QgYmUgbW92ZWRcbiAgICogYWZ0ZXJ3YXJkcywgc28gdGhpcyBpcyBpbnRlbmRlZCBmb3IgbGV2ZWwgZ2VvbWV0cnkuIFNldCBgbWVyZ2VhYmxlYCB0b1xuICAgKiBmYWxzZSBvbiBhbiBvYmplY3QgdG8gZXhjbHVkZSBpdFxuICAgKlxuICAgKiBgb25NZXJnZWAgaXMgY2FsbGVkIGVhY2ggdGltZSAyIG9iamVjdHMgYXJlIHJlcGxhY2VkIHdpdGggYSBzaW5nbGUgb2JqZWN0LlxuICAgKiBJZiB0aGUgb2JqZWN0cyB3ZXJlIGR1cGxpY2F0ZXMsIHRoZSBtZXJnZWQgb2JqZWN0IGlzIHRoZSBmaXJzdCBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBvcHRpbWlzZShcbiAgICBvbk1lcmdlPzogKFxuICAgICAgbWVyZ2VkOiBXYWxsUmVjZWl2ZXIgfCBSZWdpb25DYXN0ZXIsXG4gICAgICBhOiBXYWxsUmVjZWl2ZXIgfCBSZWdpb25DYXN0ZXIsXG4gICAgICBiOiBXYWxsUmVjZWl2ZXIgfCBSZWdpb25DYXN0ZXJcbiAgICApID0+IHZvaWRcbiAgKSB7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzID0gbWVyZ2U8V2FsbFJlY2VpdmVyPih0aGlzLndhbGxSZWNlaXZlcnMsIG9uTWVyZ2UpO1xuICAgIHRoaXMucmVnaW9uQ2FzdGVycyA9IG1lcmdlPFJlZ2lvbkNhc3Rlcj4odGhpcy5yZWdpb25DYXN0ZXJzLCBvbk1lcmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNoYWRlciBwYXNzLCBpZiB0aGUgc2hhZGVyIGlzIGVuYWJsZWQgYW5kIGl0IGNhbiBiZSB1c2VkXG4gICAqL1xuICBwcml2YXRlIGdldFNoYWRlclBhc3MoKTogU2hhZGVyUGFzcyB8IG51bGwge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnNoYWRlckVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2hhZGVyUGFzcyA/Pz0gbmV3IFNoYWRlclBhc3MoKTtcblxuICAgIHJldHVybiB0aGlzLnNoYWRlclBhc3MuYXZhaWxhYmxlID8gdGhpcy5zaGFkZXJQYXNzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHN1cmUgYSBzY3JlZW4tc2l6ZWQgY2FudmFzIG1hdGNoZXMgdGhlIHNjcmVlbiBzaXplIGFuZCBjbGVhciBpdFxuICAgKi9cbiAgcHJpdmF0ZSByZXNldENvbnRleHQoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IGNvbnRleHQ7XG4gICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gdGhpcy5zY3JlZW4ueCB8fCBjYW52YXMuaGVpZ2h0ICE9PSB0aGlzLnNjcmVlbi55KSB7XG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLnNjcmVlbi54O1xuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuc2NyZWVuLnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIGxpdCBzY2VuZSBvbnRvIGEgY29udGV4dFxuICAgKlxuICAgKiBJZiBgZHJhd1NjZW5lYCBpcyBwcm92aWRlZCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIHRvIGRyYXcgdGhlIHNjZW5lIHdpdGhcbiAgICogdGhlIGNhbWVyYSdzIHRyYW5zZm9ybXMgYXBwbGllZCwgb3RoZXJ3aXNlIHdlJ2xsIGRyYXcgYWxsIG9mIHRoZSBzdXJmYWNlc1xuICAgKiB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBjYW1lcmE6IExpZ2h0aW5nQ2FtZXJhLFxuICAgIGRyYXdTY2VuZT86IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWRcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXMoY29udGV4dCk7XG4gICAgaWYgKGRyYXdTY2VuZSkge1xuICAgICAgZHJhd1NjZW5lKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdTdXJmYWNlcyhjb250ZXh0KTtcbiAgICB9XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICB0aGlzLnByZXBhcmUoY2FtZXJhLCB2ZWMoY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCkpO1xuICAgIHRoaXMuZHJhdyhjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGFsbCBvZiB0aGUgc3VyZmFjZXMgdGhhdCBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIGRyYXdTdXJmYWNlcyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLnNvcnRTdXJmYWNlcygpO1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC5kcmF3KGNvbnRleHQpKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZHJhdyhjb250ZXh0KSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRTdXJmYWNlcygpIHtcbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycy5zb3J0KExpZ2h0aW5nU3lzdGVtLmNvbXBhcmVTdXJmYWNlcyk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLnNvcnQoTGlnaHRpbmdTeXN0ZW0uY29tcGFyZVN1cmZhY2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBsaWdodG1hcHMgZm9yIHJlbmRlcmluZ1xuICAgKi9cbiAgcHVibGljIHByZXBhcmUoY2FtZXJhOiBMaWdodGluZ0NhbWVyYSwgc2NyZWVuOiB2ZWMpIHtcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB0aGlzLnNvcnRTdXJmYWNlcygpO1xuXG4gICAgY29uc3Qgc2hhZGVyUGFzcyA9IHRoaXMuZ2V0U2hhZGVyUGFzcygpO1xuICAgIGNvbnN0IGhhc1NwZWN1bGFyTWFwcyA9XG4gICAgICBzaGFkZXJQYXNzICE9PSBudWxsICYmXG4gICAgICBbLi4udGhpcy5ncm91bmRSZWNlaXZlcnMsIC4uLnRoaXMud2FsbFJlY2VpdmVyc10uc29tZShcbiAgICAgICAgc3VyZmFjZSA9PiBzdXJmYWNlLnNwZWN1bGFyTWFwIHx8IHN1cmZhY2UuY3VzdG9tRHJhdy5zcGVjdWxhck1hcFxuICAgICAgKTtcblxuICAgIGlmIChzaGFkZXJQYXNzKSB7XG4gICAgICB0aGlzLmRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmEpO1xuICAgIH1cbiAgICBpZiAoaGFzU3BlY3VsYXJNYXBzKSB7XG4gICAgICB0aGlzLmRyYXdTY2VuZVNwZWN1bGFyTWFwKGNhbWVyYSk7XG4gICAgfVxuXG4gICAgLy8gUHJlLWNhbGN1bGF0ZSBhbWJpZW50IGxpZ2h0IHBhcmFtZXRlcnNcbiAgICBjb25zdCBhbWJpZW50TGlnaHREaXJlY3Rpb24gPSB2ZWMucm90KFxuICAgICAgdmVjKDEsIDApLFxuICAgICAgdGhpcy5vcHRpb25zLmFtYmllbnRMaWdodERpcmVjdGlvblxuICAgICk7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0Q29sb3VyID0gcGFyc2VDb2xvcih0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0Q29sb3VyKTtcbiAgICBjb25zdCBhbWJpZW50TGlnaHRTaGFkb3dDb2xvdXIgPSBwYXJzZUNvbG9yKFxuICAgICAgdGhpcy5vcHRpb25zLmFtYmllbnRMaWdodFNoYWRvd0NvbG91clxuICAgICk7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyID0gcGFyc2VDb2xvcihcbiAgICAgIHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXJcbiAgICApO1xuXG4gICAgLy8gTGlnaHRzIG91dHNpZGUgdGhlIGNhbWVyYSBib3VuZHMgY2FuJ3QgYWZmZWN0IHRoZSB2aXNpYmxlIHNjZW5lXG4gICAgY29uc3QgY2FtZXJhUmVjdGFuZ2xlID0gaW50ZXJ2YWxUb1JlY3RhbmdsZShjYW1lcmEuYm91bmRzKTtcbiAgICBjb25zdCB2aXNpYmxlTGlnaHRzID0gdGhpcy5saWdodHMuZmlsdGVyKGxpZ2h0ID0+XG4gICAgICByZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0LmJvdW5kcywgY2FtZXJhUmVjdGFuZ2xlKVxuICAgICk7XG5cbiAgICAvLyBUaGUgc2hhZGVyIGJsZW5kcyBsaWdodHMgaW50byB0aGUgbGlnaHQgbWFwIGl0c2VsZlxuICAgIGNvbnN0IGNhbnZhc0xpZ2h0cyA9IHNoYWRlclBhc3MgPyBbXSA6IHZpc2libGVMaWdodHM7XG5cbiAgICAvLyBQcmVwYXJlIGVhY2ggbGlnaHRcbiAgICB2aXNpYmxlTGlnaHRzLmZvckVhY2gobGlnaHQgPT5cbiAgICAgIGxpZ2h0LnByZXBhcmUoXG4gICAgICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLFxuICAgICAgICB0aGlzLndhbGxSZWNlaXZlcnMsXG4gICAgICAgIHRoaXMucmVnaW9uQ2FzdGVycyxcbiAgICAgICAgdGhpcy5zcHJpdGVDYXN0ZXJzLFxuICAgICAgICB0aGlzLmNpcmNsZUNhc3RlcnNcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gUHJlcGFyZSBncm91bmQgbWFza1xuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuICAgIHRoaXMuZ3JvdW5kTWFza0NvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuXG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4ge1xuICAgICAgZ3JvdW5kLmRyYXdNYXNrKHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncm91bmRNYXNrQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcblxuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3TWFzayh0aGlzLmdyb3VuZE1hc2tDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ3JvdW5kTWFza0NvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gUHJlcGFyZSB3YWxsIG1hc2sgMVxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMud2FsbE1hc2sxQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTWFzazFDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLndhbGxNYXNrMUNvbnRleHQpO1xuXG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICBpZiAod2FsbC5sYXllciA9PT0gV2FsbFNoYWRvd0xheWVyLk9uZSkge1xuICAgICAgICB3YWxsLmRyYXdNYXNrKHRoaXMud2FsbE1hc2sxQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLndhbGxNYXNrMUNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG5cbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIGlmICh3YWxsLmxheWVyID09PSBXYWxsU2hhZG93TGF5ZXIuVHdvKSB7XG4gICAgICAgIHdhbGwuZHJhd01hc2sodGhpcy53YWxsTWFzazFDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMud2FsbE1hc2sxQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIHdhbGwgbWFzayAyXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy53YWxsTWFzazJDb250ZXh0KTtcbiAgICB0aGlzLndhbGxNYXNrMkNvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMud2FsbE1hc2syQ29udGV4dCk7XG5cbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIGlmICh3YWxsLmxheWVyID09PSBXYWxsU2hhZG93TGF5ZXIuVHdvKSB7XG4gICAgICAgIHdhbGwuZHJhd01hc2sodGhpcy53YWxsTWFzazJDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMud2FsbE1hc2syQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIGdyb3VuZC1tYXNrZWQgbGlnaHRtYXAgY2FudmFzXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQpO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dCk7XG5cbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9ID0gY2FtZXJhLmJvdW5kcztcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsU3R5bGUgPVxuICAgICAgdGhpcy5vcHRpb25zLmFtYmllbnRMaWdodENvbG91cjtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsUmVjdChcbiAgICAgIGxlZnQsXG4gICAgICB0b3AsXG4gICAgICByaWdodCAtIGxlZnQsXG4gICAgICBib3R0b20gLSB0b3BcbiAgICApO1xuXG4gICAgLy8gRHJhdyBsaWdodHNcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc2NyZWVuJztcbiAgICBjYW52YXNMaWdodHMuZm9yRWFjaChsaWdodCA9PiB7XG4gICAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIGxpZ2h0Lmdyb3VuZExpZ2h0Q2FudmFzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi54IC0gbGlnaHQucmFkaXVzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi55IC0gbGlnaHQucmFkaXVzXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gTWFzayBncm91bmRcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9XG4gICAgICAnZGVzdGluYXRpb24tYXRvcCc7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuZ3JvdW5kTWFza0NhbnZhcywgMCwgMCk7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIC8vIFByZXBhcmUgd2FsbC1tYXNrZWQgbGlnaHRtYXAgbGF5ZXIgMSBjYW52YXNcbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0KTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0KTtcblxuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgaWYgKHdhbGwubGF5ZXIgPT09IFdhbGxTaGFkb3dMYXllci5PbmUpIHtcbiAgICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5maWxsU3R5bGUgPSBjb2xvdXJUb1N0cmluZyhcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICAgICAgICAgIHdhbGwuc3VyZmFjZU5vcm1hbCxcbiAgICAgICAgICAgIGFtYmllbnRMaWdodERpcmVjdGlvbixcbiAgICAgICAgICAgIGFtYmllbnRMaWdodENvbG91cixcbiAgICAgICAgICAgIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cixcbiAgICAgICAgICAgIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91clxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5maWxsUmVjdChcbiAgICAgICAgICB3YWxsLnBvc2l0aW9uLngsXG4gICAgICAgICAgd2FsbC5wb3NpdGlvbi55LFxuICAgICAgICAgIHdhbGwuc2l6ZS54LFxuICAgICAgICAgIHdhbGwuc2l6ZS55XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEcmF3IGxpZ2h0c1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NjcmVlbic7XG4gICAgY2FudmFzTGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIGxpZ2h0LndhbGxMaWdodDFDYW52YXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnggLSBsaWdodC5yYWRpdXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnkgLSBsaWdodC5yYWRpdXMgKyB0aGlzLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgd2FsbC1tYXNrZWQgbGlnaHRtYXAgMiBjYW52YXNcbiAgICB0aGlzLnJlc2V0Q29udGV4dCh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0KTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0KTtcblxuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgaWYgKHdhbGwubGF5ZXIgPT09IFdhbGxTaGFkb3dMYXllci5Ud28pIHtcbiAgICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dC5maWxsU3R5bGUgPSBjb2xvdXJUb1N0cmluZyhcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICAgICAgICAgIHdhbGwuc3VyZmFjZU5vcm1hbCxcbiAgICAgICAgICAgIGFtYmllbnRMaWdodERpcmVjdGlvbixcbiAgICAgICAgICAgIGFtYmllbnRMaWdodENvbG91cixcbiAgICAgICAgICAgIGFtYmllbnRMaWdodFNoYWRvd0NvbG91cixcbiAgICAgICAgICAgIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91clxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dC5maWxsUmVjdChcbiAgICAgICAgICB3YWxsLnBvc2l0aW9uLngsXG4gICAgICAgICAgd2FsbC5wb3NpdGlvbi55LFxuICAgICAgICAgIHdhbGwuc2l6ZS54LFxuICAgICAgICAgIHdhbGwuc2l6ZS55XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEcmF3IGxpZ2h0c1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NjcmVlbic7XG4gICAgY2FudmFzTGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIGxpZ2h0LndhbGxMaWdodDJDYW52YXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnggLSBsaWdodC5yYWRpdXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnkgLSBsaWdodC5yYWRpdXMgKyB0aGlzLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIE1hc2sgd2FsbHMgbGF5ZXIgMVxuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID1cbiAgICAgICdkZXN0aW5hdGlvbi1hdG9wJztcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrMUNhbnZhcywgMCwgMCk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBNYXNrIHdhbGxzIGxheWVyIDJcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9XG4gICAgICAnZGVzdGluYXRpb24tYXRvcCc7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dC5kcmF3SW1hZ2UodGhpcy53YWxsTWFzazJDYW52YXMsIDAsIDApO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gUHJlcGFyZSBmaW5hbCBsaWdodG1hcFxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMubGlnaHRNYXBDb250ZXh0KTtcbiAgICB0aGlzLmxpZ2h0TWFwQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDYW52YXMsIDAsIDApO1xuICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDYW52YXMsIDAsIDApO1xuXG4gICAgdGhpcy5saWdodE1hcENvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgdGhpcy5zcGVjdWxhclZpc2libGUgPSBoYXNTcGVjdWxhck1hcHM7XG4gICAgaWYgKHNoYWRlclBhc3MpIHtcbiAgICAgIHNoYWRlclBhc3MucmVuZGVyKHtcbiAgICAgICAgY2FtZXJhLFxuICAgICAgICBzY3JlZW4sXG4gICAgICAgIGxpZ2h0czogdmlzaWJsZUxpZ2h0cyxcbiAgICAgICAgYW1iaWVudExpZ2h0TWFwOiB0aGlzLmxpZ2h0TWFwQ2FudmFzLFxuICAgICAgICBub3JtYWxNYXA6IHRoaXMuc2NlbmVOb3JtYWxNYXBDYW52YXMsXG4gICAgICAgIHNwZWN1bGFyTWFwOiBoYXNTcGVjdWxhck1hcHMgPyB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDYW52YXMgOiBudWxsLFxuICAgICAgICBncm91bmRNYXNrOiB0aGlzLmdyb3VuZE1hc2tDYW52YXMsXG4gICAgICAgIHdhbGwxTWFzazogdGhpcy53YWxsTWFzazFDYW52YXMsXG4gICAgICAgIHdhbGwyTWFzazogdGhpcy53YWxsTWFzazJDYW52YXMsXG4gICAgICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZDogdGhpcy5vcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZCxcbiAgICAgICAgd2FsbExpZ2h0aW5nWU9mZnNldDogdGhpcy5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXQsXG4gICAgICAgIGhpZ2hsaWdodFN0cmVuZ3RoOiB0aGlzLm9wdGlvbnMuc2hhZGVySGlnaGxpZ2h0U3RyZW5ndGgsXG4gICAgICAgIHNoYWRvd1N0cmVuZ3RoOiB0aGlzLm9wdGlvbnMuc2hhZGVyU2hhZG93U3RyZW5ndGgsXG4gICAgICAgIHNwZWN1bGFyU3RyZW5ndGg6IHRoaXMub3B0aW9ucy5zaGFkZXJTcGVjdWxhclN0cmVuZ3RoLFxuICAgICAgICBzaGluaW5lc3M6IHRoaXMub3B0aW9ucy5zaGFkZXJTaGluaW5lc3MsXG4gICAgICAgIHZpZXdUaWx0OiB0aGlzLm9wdGlvbnMuc2hhZGVyVmlld1RpbHQsXG4gICAgICAgIGJhbmRpbmc6IHRoaXMub3B0aW9ucy5zaGFkZXJCYW5kaW5nLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMubGlnaHRNYXBDb250ZXh0KTtcbiAgICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShzaGFkZXJQYXNzLmNhbnZhcywgMCwgMCk7XG4gICAgfVxuXG4gICAgaWYgKHNoYWRlclBhc3MgJiYgaGFzU3BlY3VsYXJNYXBzKSB7XG4gICAgICBzaGFkZXJQYXNzLnNob3dTcGVjdWxhcihzY3JlZW4pO1xuXG4gICAgICAvLyBIaWdobGlnaHRzIGNhbiBvbmx5IGFwcGVhciBvbiB0aGUgc3VyZmFjZXMgaW4gdGhlIGxpZ2h0IG1hcFxuICAgICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dCk7XG4gICAgICB0aGlzLnNwZWN1bGFyTGlnaHRNYXBDb250ZXh0LnNhdmUoKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHNoYWRlclBhc3MuY2FudmFzLCAwLCAwKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgIHRoaXMuc3BlY3VsYXJMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgICAgdGhpcy5zcGVjdWxhckxpZ2h0TWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgYWN0dWFsIGNvbG91ciBvZiBhbWJpZW50IGxpZ2h0IGJhc2VkIG9uIHRoZSBzdXJmYWNlIG5vcm1hbFxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBbWJpZW50TGlnaHQoXG4gICAgc3VyZmFjZU5vcm1hbDogdmVjLFxuICAgIGFtYmllbnRMaWdodERpcmVjdGlvbjogdmVjLFxuICAgIGFtYmllbnRMaWdodDogQ29sb3VyLFxuICAgIGFtYmllbnRMaWdodFNoYWRvdzogQ29sb3VyLFxuICAgIGFtYmllbnRMaWdodEhpZ2hsaWdodDogQ29sb3VyXG4gICk6IENvbG91ciB7XG4gICAgaWYgKHZlYy5lcShzdXJmYWNlTm9ybWFsLCB2ZWMoKSkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgZG90ID0gdmVjLmRvdCh2ZWMubm9yKHN1cmZhY2VOb3JtYWwpLCBhbWJpZW50TGlnaHREaXJlY3Rpb24pO1xuICAgIGlmIChmbG9hdEVxdWFscyhkb3QsIDApKSB7XG4gICAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICAgIH1cblxuICAgIGlmIChkb3QgPCAwKSB7XG4gICAgICByZXR1cm4gbGVycENvbG91cihhbWJpZW50TGlnaHQsIGFtYmllbnRMaWdodEhpZ2hsaWdodCwgLWRvdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlcnBDb2xvdXIoYW1iaWVudExpZ2h0LCBhbWJpZW50TGlnaHRTaGFkb3csIGRvdCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHVwIHNvZnQgc2hhZG93IHNldHRpbmdzIG9uIHRoZSBzcGVjaWZpZWQgY2FudmFzIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBzZXR1cFNvZnRTaGFkb3dzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0VuYWJsZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLm9wdGlvbnMuc29mdFNoYWRvd3NBbW91bnQgPiAwXG4gICAgKSB7XG4gICAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gJ2JsYWNrJztcbiAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IDA7XG4gICAgICBjb250ZXh0LnNoYWRvd09mZnNldFkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVybGF5IHRoZSBsaWdodG1hcCBvbnRvIHRoZSBjb250ZXh0XG4gICAqL1xuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcblxuICAgIC8vIFNwZWN1bGFyIGhpZ2hsaWdodHMgYXJlIGFkZGVkIGFmdGVyd2FyZHMgc28gdGhhdCB0aGV5IGNhbiBiZSBicmlnaHRlclxuICAgIC8vIHRoYW4gdGhlIHNjZW5lIHVuZGVybmVhdGggdGhlbVxuICAgIGlmICh0aGlzLnNwZWN1bGFyVmlzaWJsZSkge1xuICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwZWN1bGFyTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgbm9ybWFsIG1hcHMgZm9yIHN1cmZhY2VzIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U2NlbmVOb3JtYWxNYXAoY2FtZXJhOiBMaWdodGluZ0NhbWVyYSkge1xuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcbiAgICB0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXModGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuXG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4ge1xuICAgICAgZ3JvdW5kLmRyYXdOb3JtYWxNYXAodGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3Tm9ybWFsTWFwKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHNwZWN1bGFyIG1hcHMgZm9yIHN1cmZhY2VzIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U2NlbmVTcGVjdWxhck1hcChjYW1lcmE6IExpZ2h0aW5nQ2FtZXJhKSB7XG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dCk7XG4gICAgdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXModGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dCk7XG5cbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycy5mb3JFYWNoKGdyb3VuZCA9PiB7XG4gICAgICBncm91bmQuZHJhd1NwZWN1bGFyTWFwKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3U3BlY3VsYXJNYXAodGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcblxuZXhwb3J0IHR5cGUgU2NlbmVPYmplY3RPcHRpb25zID0ge1xuICAvKipcbiAgICogV29ybGQgcG9zaXRpb24gb2YgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGlzIG9iamVjdFxuICAgKi9cbiAgcG9zaXRpb246IHZlYztcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGlzIG9iamVjdCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgc2l6ZTogdmVjO1xuXG4gIC8qKlxuICAgKiBDYW4gdGhpcyBvYmplY3QgYmUgbWVyZ2VkIHdpdGggaXRzIG5laWdoYm91cnMgYnlcbiAgICogYExpZ2h0aW5nU3lzdGVtLm9wdGltaXNlKClgP1xuICAgKi9cbiAgbWVyZ2VhYmxlPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogU29tZXRoaW5nIHRoYXQgaGFzIGJlZW4gcmVnaXN0ZXJlZCB3aXRoIGEgYExpZ2h0aW5nU3lzdGVtYFxuICpcbiAqIFRoZXNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBgTGlnaHRpbmdTeXN0ZW0uYWRkLi4uKClgIG1ldGhvZHMgYW5kIGFyZSB1c2VkXG4gKiB0byBjaGFuZ2Ugb3IgcmVtb3ZlIHRoZSBvYmplY3QgbGF0ZXIgb25cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjZW5lT2JqZWN0PE9wdGlvbnMgZXh0ZW5kcyBTY2VuZU9iamVjdE9wdGlvbnM+IHtcbiAgcHJvdGVjdGVkIGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbTtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYztcbiAgcHVibGljIHNpemU6IHZlYztcbiAgcHVibGljIG1lcmdlYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogT3B0aW9ucykge1xuICAgIHRoaXMubGlnaHRpbmcgPSBsaWdodGluZztcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMuY3B5KG9wdGlvbnMuc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIG9iamVjdCB0byBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5jcHkocG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgc2l6ZSBvZiB0aGlzIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHJlc2l6ZShzaXplOiB2ZWMpIHtcbiAgICB0aGlzLnNpemUgPSB2ZWMuY3B5KHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzb21lIG9mIHRoZSBvcHRpb25zIGZvciB0aGlzIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHNldChvcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+KSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuY3B5KHRoaXMucG9zaXRpb24pO1xuICAgIHRoaXMuc2l6ZSA9IHZlYy5jcHkodGhpcy5zaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyBvYmplY3QgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMubGlnaHRpbmcucmVtb3ZlKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHR5cGUgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgTGlnaHRpbmdDYW1lcmEsIExpZ2h0aW5nSW1hZ2UgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjb3B5U2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2NvcHkuZnJhZy5nbHNsJyk7XG5pbXBvcnQgZGlmZnVzZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9kaWZmdXNlLmZyYWcuZ2xzbCcpO1xuaW1wb3J0IHF1YWRTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlcnMvcXVhZC52ZXJ0Lmdsc2wnKTtcbmltcG9ydCBzcGVjdWxhclNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVycy9zcGVjdWxhci5mcmFnLmdsc2wnKTtcbmltcG9ydCBzdXJmYWNlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL3N1cmZhY2UuZ2xzbCcpO1xuXG4vKipcbiAqIEV2ZXJ5dGhpbmcgdGhhdCB0aGUgc2hhZGVycyBuZWVkIGZvciByZW5kZXJpbmcgYSBmcmFtZVxuICovXG5leHBvcnQgdHlwZSBTaGFkZXJTY2VuZSA9IHtcbiAgY2FtZXJhOiBMaWdodGluZ0NhbWVyYTtcbiAgc2NyZWVuOiB2ZWM7XG4gIGxpZ2h0czogTGlnaHRbXTtcbiAgYW1iaWVudExpZ2h0TWFwOiBMaWdodGluZ0ltYWdlO1xuICBub3JtYWxNYXA6IExpZ2h0aW5nSW1hZ2U7XG4gIHNwZWN1bGFyTWFwOiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcbiAgZ3JvdW5kTWFzazogTGlnaHRpbmdJbWFnZTtcbiAgd2FsbDFNYXNrOiBMaWdodGluZ0ltYWdlO1xuICB3YWxsMk1hc2s6IExpZ2h0aW5nSW1hZ2U7XG4gIGltYWdlU21vb3RoaW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgd2FsbExpZ2h0aW5nWU9mZnNldDogbnVtYmVyO1xuICBoaWdobGlnaHRTdHJlbmd0aDogbnVtYmVyO1xuICBzaGFkb3dTdHJlbmd0aDogbnVtYmVyO1xuICBzcGVjdWxhclN0cmVuZ3RoOiBudW1iZXI7XG4gIHNoaW5pbmVzczogbnVtYmVyO1xuICB2aWV3VGlsdDogbnVtYmVyO1xuICBiYW5kaW5nOiBudW1iZXI7XG59O1xuXG50eXBlIFByb2dyYW0gPSB7XG4gIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcbiAgdW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIFdlYkdMVW5pZm9ybUxvY2F0aW9uPjtcbn07XG5cbi8qKlxuICogV2ViR0wgb25seSBndWFyYW50ZWVzIDggdGV4dHVyZSB1bml0cywgd2hpY2ggaXMgZXhhY3RseSB3aGF0IHdlJ3JlIHVzaW5nXG4gKi9cbmVudW0gVGV4dHVyZVVuaXQge1xuICBOb3JtYWxNYXAsXG4gIEdyb3VuZE1hc2ssXG4gIFdhbGwxTWFzayxcbiAgV2FsbDJNYXNrLFxuICBHcm91bmRMaWdodE1hcCxcbiAgV2FsbDFMaWdodE1hcCxcbiAgV2FsbDJMaWdodE1hcCxcbiAgU3BlY3VsYXJNYXAsXG59XG5cbi8qKlxuICogU2hhZGVzIGFsbCBvZiB0aGUgbGlnaHRzIGluIGEgc2NlbmUgdXNpbmcgYSBzaW5nbGUgV2ViR0wgY29udGV4dFxuICpcbiAqIEVhY2ggbGlnaHQgaXMgc2hhZGVkIHNlcGFyYXRlbHkgYW5kIHRoZW4gYmxlbmRlZCBpbnRvIGEgbGlnaHQgbWFwLCBzbyBhXG4gKiBsaWdodCdzIGJ1bXBzIG9ubHkgYWZmZWN0IHRoYXQgbGlnaHQuIFNwZWN1bGFyIGhpZ2hsaWdodHMgYXJlIGFkZGVkIHVwIGluIGFcbiAqIHNlcGFyYXRlIGJ1ZmZlciwgYmVjYXVzZSB0aGV5IG5lZWQgdG8gYmUgYnJpZ2h0ZXIgdGhhbiB0aGUgc2NlbmVcbiAqL1xuZXhwb3J0IGNsYXNzIFNoYWRlclBhc3Mge1xuICAvKipcbiAgICogVGhlIG91dHB1dCBvZiB0aGUgbW9zdCByZWNlbnQgcGFzc1xuICAgKlxuICAgKiBUaGlzIGRvZXNuJ3QgdXNlIHByZW11bHRpcGxpZWQgYWxwaGEgYmVjYXVzZSBibGVuZGVkIGxpZ2h0cyBjYW4gYmUgYnJpZ2h0ZXJcbiAgICogdGhhbiBhIHBhcnRseSB0cmFuc3BhcmVudCBlZGdlIG9mIHRoZSBsaWdodCBtYXBcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuICBwcml2YXRlIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGNvcHlQcm9ncmFtOiBQcm9ncmFtO1xuICBwcml2YXRlIGRpZmZ1c2VQcm9ncmFtOiBQcm9ncmFtO1xuICBwcml2YXRlIHNwZWN1bGFyUHJvZ3JhbTogUHJvZ3JhbTtcblxuICBwcml2YXRlIHRleHR1cmVzOiBXZWJHTFRleHR1cmVbXTtcbiAgcHJpdmF0ZSBhbWJpZW50VGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBwcml2YXRlIHNwZWN1bGFyVGV4dHVyZTogV2ViR0xUZXh0dXJlO1xuICBwcml2YXRlIHNwZWN1bGFyRnJhbWVidWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmdsY29udGV4dGxvc3QnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCAoKSA9PlxuICAgICAgdGhpcy5pbml0aWFsaXNlKClcbiAgICApO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHNoYWRlcnMgY2FuIGJlIHVzZWRcbiAgICovXG4gIHB1YmxpYyBnZXQgYXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdsICE9PSBudWxsICYmICF0aGlzLmdsLmlzQ29udGV4dExvc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmdsID0gbnVsbDtcblxuICAgIGNvbnN0IGdsID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCB7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG4gICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgZGVwdGg6IGZhbHNlLFxuICAgICAgc3RlbmNpbDogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKCFnbCkge1xuICAgICAgY29uc29sZS53YXJuKCdXZWJHTCBpcyBub3QgYXZhaWxhYmxlLCB0aGUgc2hhZGVyIGhhcyBiZWVuIGRpc2FibGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByZXBlbmQgPSAoc291cmNlOiBzdHJpbmcpID0+IGAke3N1cmZhY2VTaGFkZXJ9XFxuJHtzb3VyY2V9YDtcblxuICAgICAgdGhpcy5jb3B5UHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbShnbCwgY29weVNoYWRlcik7XG4gICAgICB0aGlzLmRpZmZ1c2VQcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKGdsLCBwcmVwZW5kKGRpZmZ1c2VTaGFkZXIpKTtcbiAgICAgIHRoaXMuc3BlY3VsYXJQcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKGdsLCBwcmVwZW5kKHNwZWN1bGFyU2hhZGVyKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignVGhlIHNoYWRlciBoYXMgYmVlbiBkaXNhYmxlZCcsIGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGV4dHVyZXMgPSBPYmplY3QudmFsdWVzKFRleHR1cmVVbml0KVxuICAgICAgLmZpbHRlcih1bml0ID0+IHR5cGVvZiB1bml0ID09PSAnbnVtYmVyJylcbiAgICAgIC5tYXAoKCkgPT4gZ2wuY3JlYXRlVGV4dHVyZSgpISk7XG4gICAgdGhpcy5hbWJpZW50VGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XG4gICAgdGhpcy5zcGVjdWxhclRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgIHRoaXMuc3BlY3VsYXJGcmFtZWJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCkhO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGdsLmNyZWF0ZUJ1ZmZlcigpKTtcbiAgICBnbC5idWZmZXJEYXRhKFxuICAgICAgZ2wuQVJSQVlfQlVGRkVSLFxuICAgICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMV0pLFxuICAgICAgZ2wuU1RBVElDX0RSQVdcbiAgICApO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMLCBnbC5OT05FKTtcblxuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLmhlaWdodCA9IDA7XG4gIH1cblxuICBwcml2YXRlIGNvbXBpbGVTaGFkZXIoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICB0eXBlOiBudW1iZXIsXG4gICAgc291cmNlOiBzdHJpbmdcbiAgKTogV2ViR0xTaGFkZXIge1xuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKSE7XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICBpZiAoXG4gICAgICAhZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpICYmXG4gICAgICAhZ2wuaXNDb250ZXh0TG9zdCgpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpID8/ICdVbmFibGUgdG8gY29tcGlsZScpO1xuICAgIH1cblxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICBmcmFnbWVudFNvdXJjZTogc3RyaW5nXG4gICk6IFByb2dyYW0ge1xuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCkhO1xuXG4gICAgZ2wuYXR0YWNoU2hhZGVyKFxuICAgICAgcHJvZ3JhbSxcbiAgICAgIHRoaXMuY29tcGlsZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgcXVhZFNoYWRlcilcbiAgICApO1xuICAgIGdsLmF0dGFjaFNoYWRlcihcbiAgICAgIHByb2dyYW0sXG4gICAgICB0aGlzLmNvbXBpbGVTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTb3VyY2UpXG4gICAgKTtcbiAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgMCwgJ2FfY29ybmVyJyk7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICBpZiAoXG4gICAgICAhZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykgJiZcbiAgICAgICFnbC5pc0NvbnRleHRMb3N0KClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSA/PyAnVW5hYmxlIHRvIGxpbmsnKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmlmb3JtczogUHJvZ3JhbVsndW5pZm9ybXMnXSA9IHt9O1xuICAgIGNvbnN0IGNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHByb2dyYW0sIGkpITtcbiAgICAgIHVuaWZvcm1zW25hbWVdID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpITtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9ncmFtLCB1bmlmb3JtcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZCBhbiBpbWFnZSB0byBhIHRleHR1cmVcbiAgICovXG4gIHByaXZhdGUgdXBsb2FkKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgdW5pdDogbnVtYmVyLFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBpbWFnZTogTGlnaHRpbmdJbWFnZSxcbiAgICBmaWx0ZXI6IG51bWJlclxuICApIHtcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdW5pdCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGZpbHRlcik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGZpbHRlcik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoZSBvdXRwdXQgYW5kIHRoZSBzcGVjdWxhciBidWZmZXIgbWF0Y2ggdGhlIHNjcmVlbiBzaXplXG4gICAqL1xuICBwcml2YXRlIHJlc2l6ZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBzY3JlZW46IHZlYykge1xuICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCA9PT0gc2NyZWVuLnggJiYgdGhpcy5jYW52YXMuaGVpZ2h0ID09PSBzY3JlZW4ueSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gc2NyZWVuLng7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gc2NyZWVuLnk7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgc2NyZWVuLngsIHNjcmVlbi55KTtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyBUZXh0dXJlVW5pdC5TcGVjdWxhck1hcCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5zcGVjdWxhclRleHR1cmUpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4SW1hZ2UyRChcbiAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAwLFxuICAgICAgZ2wuUkdCQSxcbiAgICAgIHNjcmVlbi54LFxuICAgICAgc2NyZWVuLnksXG4gICAgICAwLFxuICAgICAgZ2wuUkdCQSxcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICBudWxsXG4gICAgKTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5zcGVjdWxhckZyYW1lYnVmZmVyKTtcbiAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChcbiAgICAgIGdsLkZSQU1FQlVGRkVSLFxuICAgICAgZ2wuQ09MT1JfQVRUQUNITUVOVDAsXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgdGhpcy5zcGVjdWxhclRleHR1cmUsXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgcXVhZCBjb3ZlcmluZyBwYXJ0IG9mIHRoZSBzY3JlZW5cbiAgICovXG4gIHByaXZhdGUgZHJhd1F1YWQoXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgICB7IHVuaWZvcm1zIH06IFByb2dyYW0sXG4gICAgc2NyZWVuUmVjdGFuZ2xlOiBudW1iZXJbXSxcbiAgICB3b3JsZFJlY3RhbmdsZTogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF1cbiAgKSB7XG4gICAgZ2wudW5pZm9ybTRmdih1bmlmb3Jtcy51X3NjcmVlblJlY3RhbmdsZSwgc2NyZWVuUmVjdGFuZ2xlKTtcbiAgICBnbC51bmlmb3JtNGZ2KHVuaWZvcm1zLnVfd29ybGRSZWN0YW5nbGUsIHdvcmxkUmVjdGFuZ2xlKTtcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGEgdGV4dHVyZSBvdmVyIHRoZSB3aG9sZSBzY3JlZW4sIHJlcGxhY2luZyB3aGF0J3MgYWxyZWFkeSB0aGVyZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3VGV4dHVyZShcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZSxcbiAgICBzY3JlZW46IHZlYyxcbiAgICBmbGlwWTogYm9vbGVhblxuICApIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb3B5UHJvZ3JhbTtcblxuICAgIGdsLmRpc2FibGUoZ2wuQkxFTkQpO1xuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMmYocHJvZ3JhbS51bmlmb3Jtcy51X3NjcmVlbiwgc2NyZWVuLngsIHNjcmVlbi55KTtcbiAgICBnbC51bmlmb3JtMWYocHJvZ3JhbS51bmlmb3Jtcy51X2ZsaXBZLCBmbGlwWSA/IDEgOiAwKTtcblxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyBUZXh0dXJlVW5pdC5TcGVjdWxhck1hcCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgZ2wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudV9pbWFnZSwgVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXApO1xuXG4gICAgdGhpcy5kcmF3UXVhZChnbCwgcHJvZ3JhbSwgWzAsIDAsIHNjcmVlbi54LCBzY3JlZW4ueV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdW5pZm9ybXMgdGhhdCBhcmUgdGhlIHNhbWUgZm9yIGV2ZXJ5IGxpZ2h0IGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXRTY2VuZVVuaWZvcm1zKFxuICAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsXG4gICAgeyBwcm9ncmFtLCB1bmlmb3JtcyB9OiBQcm9ncmFtLFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZVxuICApIHtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3Jtcy51X3NjcmVlbiwgc2NlbmUuc2NyZWVuLngsIHNjZW5lLnNjcmVlbi55KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV93YWxsTGlnaHRpbmdZT2Zmc2V0LCBzY2VuZS53YWxsTGlnaHRpbmdZT2Zmc2V0KTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9iYW5kaW5nLCBzY2VuZS5iYW5kaW5nKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9zY2VuZU5vcm1hbE1hcCwgVGV4dHVyZVVuaXQuTm9ybWFsTWFwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV9ncm91bmRNYXNrLCBUZXh0dXJlVW5pdC5Hcm91bmRNYXNrKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybXMudV93YWxsMU1hc2ssIFRleHR1cmVVbml0LldhbGwxTWFzayk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfd2FsbDJNYXNrLCBUZXh0dXJlVW5pdC5XYWxsMk1hc2spO1xuICAgIGdsLnVuaWZvcm0xaSh1bmlmb3Jtcy51X2dyb3VuZExpZ2h0TWFwLCBUZXh0dXJlVW5pdC5Hcm91bmRMaWdodE1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfd2FsbDFMaWdodE1hcCwgVGV4dHVyZVVuaXQuV2FsbDFMaWdodE1hcCk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfd2FsbDJMaWdodE1hcCwgVGV4dHVyZVVuaXQuV2FsbDJMaWdodE1hcCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB1bmlmb3JtcyBmb3IgYSBsaWdodCBhbmQgZHJhdyBpdHMgYm91bmRpbmcgYm94XG4gICAqL1xuICBwcml2YXRlIGRyYXdMaWdodChcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxuICAgIHByb2dyYW06IFByb2dyYW0sXG4gICAgbGlnaHQ6IExpZ2h0LFxuICAgIHNjZW5lOiBTaGFkZXJTY2VuZVxuICApIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSBsaWdodC5ib3VuZHM7XG4gICAgY29uc3QgdG9wTGVmdCA9IHNjZW5lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHBvc2l0aW9uKTtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IHNjZW5lLmNhbWVyYS53b3JsZFRvU2NyZWVuKHZlYy5hZGQocG9zaXRpb24sIHNpemUpKTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBnbC51bmlmb3JtMWYocHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0UmFkaXVzLCBsaWdodC5yYWRpdXMpO1xuICAgIGdsLnVuaWZvcm0xZihwcm9ncmFtLnVuaWZvcm1zLnVfbGlnaHRIZWlnaHQsIGxpZ2h0LmhlaWdodCk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgcHJvZ3JhbS51bmlmb3Jtcy51X2xpZ2h0TWFwU2l6ZSxcbiAgICAgIGxpZ2h0Lmdyb3VuZExpZ2h0Q2FudmFzLndpZHRoXG4gICAgKTtcblxuICAgIHRoaXMuZHJhd1F1YWQoXG4gICAgICBnbCxcbiAgICAgIHByb2dyYW0sXG4gICAgICBbXG4gICAgICAgIHRvcExlZnQueCxcbiAgICAgICAgdG9wTGVmdC55LFxuICAgICAgICBib3R0b21SaWdodC54IC0gdG9wTGVmdC54LFxuICAgICAgICBib3R0b21SaWdodC55IC0gdG9wTGVmdC55LFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgcG9zaXRpb24ueCAtIGxpZ2h0LnBvc2l0aW9uLngsXG4gICAgICAgIHBvc2l0aW9uLnkgLSBsaWdodC5wb3NpdGlvbi55LFxuICAgICAgICBzaXplLngsXG4gICAgICAgIHNpemUueSxcbiAgICAgIF1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgc2NlbmUncyBsaWdodCBtYXAgaW50byB0aGUgY2FudmFzLCBhbmQgYWRkIHVwIHRoZSBzY2VuZSdzXG4gICAqIHNwZWN1bGFyIGhpZ2hsaWdodHMgaWYgaXQgaGFzIGEgc3BlY3VsYXIgbWFwXG4gICAqL1xuICBwdWJsaWMgcmVuZGVyKHNjZW5lOiBTaGFkZXJTY2VuZSkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXM7XG4gICAgaWYgKCFnbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplKGdsLCBzY2VuZS5zY3JlZW4pO1xuXG4gICAgY29uc3QgbGlnaHQgPSBzY2VuZS5pbWFnZVNtb290aGluZ0VuYWJsZWQgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNUO1xuICAgIGNvbnN0IG1hcHM6IFtUZXh0dXJlVW5pdCwgTGlnaHRpbmdJbWFnZV1bXSA9IFtcbiAgICAgIFtUZXh0dXJlVW5pdC5Ob3JtYWxNYXAsIHNjZW5lLm5vcm1hbE1hcF0sXG4gICAgICBbVGV4dHVyZVVuaXQuR3JvdW5kTWFzaywgc2NlbmUuZ3JvdW5kTWFza10sXG4gICAgICBbVGV4dHVyZVVuaXQuV2FsbDFNYXNrLCBzY2VuZS53YWxsMU1hc2tdLFxuICAgICAgW1RleHR1cmVVbml0LldhbGwyTWFzaywgc2NlbmUud2FsbDJNYXNrXSxcbiAgICBdO1xuICAgIGZvciAoY29uc3QgW3VuaXQsIGltYWdlXSBvZiBtYXBzKSB7XG4gICAgICB0aGlzLnVwbG9hZChnbCwgdW5pdCwgdGhpcy50ZXh0dXJlc1t1bml0XSwgaW1hZ2UsIGdsLk5FQVJFU1QpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHdpdGggdGhlIGFtYmllbnQgbGlnaHQsIHdoaWNoIGFscmVhZHkgaGFzIHRoZSBhbHBoYSBjaGFubmVsIHRoYXRcbiAgICAvLyB3ZSB3YW50IGZvciB0aGUgZmluYWwgbGlnaHQgbWFwXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICB0aGlzLnVwbG9hZChcbiAgICAgIGdsLFxuICAgICAgVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXAsXG4gICAgICB0aGlzLmFtYmllbnRUZXh0dXJlLFxuICAgICAgc2NlbmUuYW1iaWVudExpZ2h0TWFwLFxuICAgICAgZ2wuTkVBUkVTVFxuICAgICk7XG4gICAgdGhpcy5kcmF3VGV4dHVyZShnbCwgdGhpcy5hbWJpZW50VGV4dHVyZSwgc2NlbmUuc2NyZWVuLCBmYWxzZSk7XG5cbiAgICB0aGlzLnNldFNjZW5lVW5pZm9ybXMoZ2wsIHRoaXMuZGlmZnVzZVByb2dyYW0sIHNjZW5lKTtcbiAgICBnbC51bmlmb3JtMWYoXG4gICAgICB0aGlzLmRpZmZ1c2VQcm9ncmFtLnVuaWZvcm1zLnVfaGlnaGxpZ2h0U3RyZW5ndGgsXG4gICAgICBzY2VuZS5oaWdobGlnaHRTdHJlbmd0aFxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKFxuICAgICAgdGhpcy5kaWZmdXNlUHJvZ3JhbS51bmlmb3Jtcy51X3NoYWRvd1N0cmVuZ3RoLFxuICAgICAgc2NlbmUuc2hhZG93U3RyZW5ndGhcbiAgICApO1xuXG4gICAgaWYgKHNjZW5lLnNwZWN1bGFyTWFwKSB7XG4gICAgICB0aGlzLnVwbG9hZChcbiAgICAgICAgZ2wsXG4gICAgICAgIFRleHR1cmVVbml0LlNwZWN1bGFyTWFwLFxuICAgICAgICB0aGlzLnRleHR1cmVzW1RleHR1cmVVbml0LlNwZWN1bGFyTWFwXSxcbiAgICAgICAgc2NlbmUuc3BlY3VsYXJNYXAsXG4gICAgICAgIGdsLk5FQVJFU1RcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMuc3BlY3VsYXJQcm9ncmFtO1xuICAgICAgdGhpcy5zZXRTY2VuZVVuaWZvcm1zKGdsLCB0aGlzLnNwZWN1bGFyUHJvZ3JhbSwgc2NlbmUpO1xuICAgICAgZ2wudW5pZm9ybTFpKHVuaWZvcm1zLnVfc2NlbmVTcGVjdWxhck1hcCwgVGV4dHVyZVVuaXQuU3BlY3VsYXJNYXApO1xuICAgICAgZ2wudW5pZm9ybTFmKHVuaWZvcm1zLnVfc3BlY3VsYXJTdHJlbmd0aCwgc2NlbmUuc3BlY3VsYXJTdHJlbmd0aCk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV9zaGluaW5lc3MsIHNjZW5lLnNoaW5pbmVzcyk7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybXMudV92aWV3VGlsdCwgc2NlbmUudmlld1RpbHQpO1xuXG4gICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuc3BlY3VsYXJGcmFtZWJ1ZmZlcik7XG4gICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgfVxuXG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc2NlbmUubGlnaHRzKSB7XG4gICAgICB0aGlzLnVwbG9hZChcbiAgICAgICAgZ2wsXG4gICAgICAgIFRleHR1cmVVbml0Lkdyb3VuZExpZ2h0TWFwLFxuICAgICAgICB0aGlzLnRleHR1cmVzW1RleHR1cmVVbml0Lkdyb3VuZExpZ2h0TWFwXSxcbiAgICAgICAgaXRlbS5ncm91bmRMaWdodENhbnZhcyxcbiAgICAgICAgbGlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLnVwbG9hZChcbiAgICAgICAgZ2wsXG4gICAgICAgIFRleHR1cmVVbml0LldhbGwxTGlnaHRNYXAsXG4gICAgICAgIHRoaXMudGV4dHVyZXNbVGV4dHVyZVVuaXQuV2FsbDFMaWdodE1hcF0sXG4gICAgICAgIGl0ZW0ud2FsbExpZ2h0MUNhbnZhcyxcbiAgICAgICAgbGlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLnVwbG9hZChcbiAgICAgICAgZ2wsXG4gICAgICAgIFRleHR1cmVVbml0LldhbGwyTGlnaHRNYXAsXG4gICAgICAgIHRoaXMudGV4dHVyZXNbVGV4dHVyZVVuaXQuV2FsbDJMaWdodE1hcF0sXG4gICAgICAgIGl0ZW0ud2FsbExpZ2h0MkNhbnZhcyxcbiAgICAgICAgbGlnaHRcbiAgICAgICk7XG5cbiAgICAgIC8vIEJsZW5kIHRoZSBzYW1lIHdheSBhcyB0aGUgJ3NjcmVlbicgY29tcG9zaXRlIG9wZXJhdGlvbiwgYW5kIGxlYXZlIHRoZVxuICAgICAgLy8gYWxwaGEgY2hhbm5lbCBhbG9uZVxuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLk9ORSwgZ2wuT05FX01JTlVTX1NSQ19DT0xPUiwgZ2wuWkVSTywgZ2wuT05FKTtcbiAgICAgIHRoaXMuZHJhd0xpZ2h0KGdsLCB0aGlzLmRpZmZ1c2VQcm9ncmFtLCBpdGVtLCBzY2VuZSk7XG5cbiAgICAgIGlmIChzY2VuZS5zcGVjdWxhck1hcCkge1xuICAgICAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIHRoaXMuc3BlY3VsYXJGcmFtZWJ1ZmZlcik7XG4gICAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLk9ORSwgZ2wuT05FLCBnbC5aRVJPLCBnbC5PTkUpO1xuICAgICAgICB0aGlzLmRyYXdMaWdodChnbCwgdGhpcy5zcGVjdWxhclByb2dyYW0sIGl0ZW0sIHNjZW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgc3BlY3VsYXIgaGlnaGxpZ2h0cyBmcm9tIHRoZVxuICAgKiBtb3N0IHJlY2VudCByZW5kZXJcbiAgICovXG4gIHB1YmxpYyBzaG93U3BlY3VsYXIoc2NyZWVuOiB2ZWMpIHtcbiAgICBpZiAodGhpcy5nbCkge1xuICAgICAgdGhpcy5kcmF3VGV4dHVyZSh0aGlzLmdsLCB0aGlzLnNwZWN1bGFyVGV4dHVyZSwgc2NyZWVuLCB0cnVlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBTY2VuZU9iamVjdCwgU2NlbmVPYmplY3RPcHRpb25zIH0gZnJvbSAnLi9TY2VuZU9iamVjdCc7XG5pbXBvcnQgeyBMaWdodGluZ0ltYWdlLCBXYWxsU2hhZG93TGF5ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIGJvdW5kaW5nUmVjdGFuZ2xlLFxuICBkcmF3SW1hZ2VJblJlY3RhbmdsZSxcbiAgc2lsaG91ZXR0ZSxcbn0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG50eXBlIERyYXdDYWxsYmFjayA9IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFN1cmZhY2VPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogT3B0aW9uYWwgYmFja2dyb3VuZCBjb2xvdXJcbiAgICovXG4gIGNvbG91cj86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGltYWdlIGZvciB0aGlzIHN1cmZhY2VcbiAgICovXG4gIGltYWdlPzogTGlnaHRpbmdJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIG5vcm1hbCBtYXAsIHVzZWQgd2hlbiB0aGUgc2hhZGVyIGlzIGVuYWJsZWRcbiAgICovXG4gIG5vcm1hbE1hcD86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBzcGVjdWxhciBtYXAsIHVzZWQgd2hlbiB0aGUgc2hhZGVyIGlzIGVuYWJsZWRcbiAgICovXG4gIHNwZWN1bGFyTWFwPzogTGlnaHRpbmdJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFN1cmZhY2VzIGFyZSBkcmF3biBpbiBvcmRlciBvZiB6LWluZGV4IGFuZCB0aGVuIGJ5IHRoZWlyIGJvdHRvbSBlZGdlXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYW55IG9mIHRoZSBkZWZhdWx0IGRyYXdpbmcgc3RlcHMgZm9yIHRoaXMgc3VyZmFjZSwgZm9yIG9iamVjdHNcbiAgICogdGhhdCBhcmVuJ3QgYSBzaW5nbGUgaW1hZ2VcbiAgICovXG4gIGN1c3RvbURyYXc/OiB7XG4gICAgaW1hZ2U/OiBEcmF3Q2FsbGJhY2s7XG4gICAgbWFzaz86IERyYXdDYWxsYmFjaztcbiAgICBub3JtYWxNYXA/OiBEcmF3Q2FsbGJhY2s7XG4gICAgc3BlY3VsYXJNYXA/OiBEcmF3Q2FsbGJhY2s7XG4gIH07XG59O1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBzaGFkb3dzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdXJmYWNlPFxuICBPcHRpb25zIGV4dGVuZHMgU3VyZmFjZU9wdGlvbnNcbj4gZXh0ZW5kcyBTY2VuZU9iamVjdDxPcHRpb25zPiB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE5PUk1BTF9NQVBfREVGQVVMVF9DT0xPVVIgPSAnIzdmN2ZmZic7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNQRUNVTEFSX01BUF9ERUZBVUxUX0NPTE9VUiA9ICdibGFjayc7XG5cbiAgcHVibGljIGNvbG91cjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBpbWFnZTogTGlnaHRpbmdJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgbm9ybWFsTWFwOiBMaWdodGluZ0ltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBzcGVjdWxhck1hcDogTGlnaHRpbmdJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgekluZGV4OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY3VzdG9tRHJhdzogTm9uTnVsbGFibGU8U3VyZmFjZU9wdGlvbnNbJ2N1c3RvbURyYXcnXT4gPSB7fTtcblxuICAvKipcbiAgICogU2hvdWxkIGltYWdlcyBiZSByZXBlYXRlZCBhY3Jvc3MgdGhpcyBzdXJmYWNlLCBvciBzdHJldGNoZWQgdG8gZml0P1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHJlcGVhdDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRHJhdyB0aGUgcGFydCBvZiB0aGlzIHN1cmZhY2UgdGhhdCByZWNlaXZlcyBsaWdodGluZ1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGRyYXdNYXNrKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQ7XG5cbiAgcHJpdmF0ZSBmaWxsQmFja2dyb3VuZChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG91cjogc3RyaW5nKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvdXI7XG4gICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgdGhpcy5zaXplLnlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdJbWFnZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGltYWdlOiBMaWdodGluZ0ltYWdlKSB7XG4gICAgZHJhd0ltYWdlSW5SZWN0YW5nbGUoY29udGV4dCwgaW1hZ2UsIHRoaXMsIHRoaXMucmVwZWF0KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcuaW1hZ2UpIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5pbWFnZShjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGlmICh0aGlzLmNvbG91cikge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCB0aGlzLmNvbG91cik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIHRoaXMuaW1hZ2UpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRyYXdDb2xvdXJNYXAoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGltYWdlOiBMaWdodGluZ0ltYWdlIHwgbnVsbCxcbiAgICBkZWZhdWx0Q29sb3VyOiBzdHJpbmdcbiAgKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIGltYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxsQmFja2dyb3VuZChjb250ZXh0LCBkZWZhdWx0Q29sb3VyKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3Tm9ybWFsTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcubm9ybWFsTWFwKSB7XG4gICAgICB0aGlzLmN1c3RvbURyYXcubm9ybWFsTWFwKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0NvbG91ck1hcChcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLm5vcm1hbE1hcCxcbiAgICAgIFN1cmZhY2UuTk9STUFMX01BUF9ERUZBVUxUX0NPTE9VUlxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZHJhd1NwZWN1bGFyTWFwKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcuc3BlY3VsYXJNYXApIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5zcGVjdWxhck1hcChjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdDb2xvdXJNYXAoXG4gICAgICBjb250ZXh0LFxuICAgICAgdGhpcy5zcGVjdWxhck1hcCxcbiAgICAgIFN1cmZhY2UuU1BFQ1VMQVJfTUFQX0RFRkFVTFRfQ09MT1VSXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaWxsTWFzayhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKGNvbnRleHQsICdibGFjaycpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIEdyb3VuZFJlY2VpdmVyT3B0aW9ucyA9IFN1cmZhY2VPcHRpb25zO1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIG9mIGdyb3VuZCB0aGF0IHJlY2VpdmVzIGdyb3VuZCBzaGFkb3dzXG4gKlxuICogSW1hZ2VzIGFyZSByZXBlYXRlZCBhY3Jvc3MgdGhlIHJlY3RhbmdsZVxuICovXG5leHBvcnQgY2xhc3MgR3JvdW5kUmVjZWl2ZXIgZXh0ZW5kcyBTdXJmYWNlPEdyb3VuZFJlY2VpdmVyT3B0aW9ucz4ge1xuICBwdWJsaWMgcmVwZWF0ID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBHcm91bmRSZWNlaXZlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZHJhd01hc2soY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5tYXNrKSB7XG4gICAgICB0aGlzLmN1c3RvbURyYXcubWFzayhjb250ZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmZpbGxNYXNrKGNvbnRleHQpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFdhbGxSZWNlaXZlck9wdGlvbnMgPSBTdXJmYWNlT3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIEltYWdlIHVzZWQgdG8gbWFzayB0aGlzIHN1cmZhY2UsIGl0IHNob3VsZCBiZSBibGFjayB3aXRoIGFuIGFscGhhIGNoYW5uZWxcbiAgICpcbiAgICogSWYgdGhpcyBpc24ndCBzZXQgdGhlbiB3ZSdsbCB1c2UgdGhlIGltYWdlJ3MgYWxwaGEgY2hhbm5lbFxuICAgKi9cbiAgbWFzaz86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhlIGltYWdlIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgc3VyZmFjZT8gT3RoZXJ3aXNlIGl0IHdpbGwgYmVcbiAgICogc3RyZXRjaGVkIHRvIGZpdFxuICAgKi9cbiAgcmVwZWF0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gZmFsc2UgaWYgdGhpcyBzdXJmYWNlIHNob3VsZCBvbmx5IHJlY2VpdmUgYW1iaWVudCBsaWdodCAodGhpc1xuICAgKiBpcyB1c2VmdWwgZm9yIHRoZSB0b3BzIG9mIHdhbGxzKVxuICAgKi9cbiAgcmVjZWl2ZUxpZ2h0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlyZWN0aW9uIHRoYXQgdGhpcyBzdXJmYWNlIGlzIGZhY2luZywgZm9yIGFtYmllbnQgbGlnaHRpbmdcbiAgICovXG4gIHN1cmZhY2VOb3JtYWw/OiB2ZWM7XG5cbiAgLyoqXG4gICAqIFVzZSBhIGRpZmZlcmVudCBsYXllciBmb3Igc3VyZmFjZXMgdGhhdCBtaWdodCBvdmVybGFwXG4gICAqL1xuICBsYXllcj86IFdhbGxTaGFkb3dMYXllcjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgb3Igc3ByaXRlIHRoYXQgcmVjZWl2ZXMgd2FsbCBzaGFkb3dzXG4gKi9cbmV4cG9ydCBjbGFzcyBXYWxsUmVjZWl2ZXIgZXh0ZW5kcyBTdXJmYWNlPFdhbGxSZWNlaXZlck9wdGlvbnM+IHtcbiAgcHVibGljIG1hc2s6IExpZ2h0aW5nSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHJlcGVhdCA9IGZhbHNlO1xuICBwdWJsaWMgcmVjZWl2ZUxpZ2h0OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHN1cmZhY2VOb3JtYWw6IHZlYyA9IHZlYygpO1xuICBwdWJsaWMgbGF5ZXI6IFdhbGxTaGFkb3dMYXllciA9IFdhbGxTaGFkb3dMYXllci5PbmU7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogV2FsbFJlY2VpdmVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3TWFzayhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5tYXNrKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICB0aGlzLmZpbGxNYXNrKGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8vIEEgYmFja2dyb3VuZCBjb2xvdXIgYWxyZWFkeSBjb3ZlcnMgdGhlIHdob2xlIHN1cmZhY2VcbiAgICBjb25zdCBtYXNrID1cbiAgICAgIHRoaXMubWFzayA/PyAoIXRoaXMuY29sb3VyICYmIHRoaXMuaW1hZ2UgJiYgc2lsaG91ZXR0ZSh0aGlzLmltYWdlKSk7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKGNvbnRleHQsIG1hc2spO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoaXMgc3VyZmFjZSBjYW4gYmUgbWVyZ2VkIHdpdGggYW5vdGhlciBzdXJmYWNlXG4gICAqL1xuICBwdWJsaWMgY2FuTWVyZ2Uob3RoZXI6IFdhbGxSZWNlaXZlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhhc0ltYWdlcyA9XG4gICAgICB0aGlzLmltYWdlIHx8IHRoaXMubWFzayB8fCB0aGlzLm5vcm1hbE1hcCB8fCB0aGlzLnNwZWN1bGFyTWFwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWVyZ2VhYmxlICYmXG4gICAgICBvdGhlci5tZXJnZWFibGUgJiZcbiAgICAgIC8vIE5vbi1yZXBlYXRpbmcgaW1hZ2VzIHdvdWxkIHN0cmV0Y2ggYWNyb3NzIHRoZSBtZXJnZWQgc3VyZmFjZVxuICAgICAgKHRoaXMucmVwZWF0IHx8ICFoYXNJbWFnZXMpICYmXG4gICAgICB0aGlzLnpJbmRleCA9PT0gb3RoZXIuekluZGV4ICYmXG4gICAgICB0aGlzLmNvbG91ciA9PT0gb3RoZXIuY29sb3VyICYmXG4gICAgICB0aGlzLmltYWdlID09PSBvdGhlci5pbWFnZSAmJlxuICAgICAgdGhpcy5tYXNrID09PSBvdGhlci5tYXNrICYmXG4gICAgICB0aGlzLm5vcm1hbE1hcCA9PT0gb3RoZXIubm9ybWFsTWFwICYmXG4gICAgICB0aGlzLnNwZWN1bGFyTWFwID09PSBvdGhlci5zcGVjdWxhck1hcCAmJlxuICAgICAgdGhpcy5yZXBlYXQgPT09IG90aGVyLnJlcGVhdCAmJlxuICAgICAgdGhpcy5yZWNlaXZlTGlnaHQgPT09IG90aGVyLnJlY2VpdmVMaWdodCAmJlxuICAgICAgdmVjLmVxKHRoaXMuc3VyZmFjZU5vcm1hbCwgb3RoZXIuc3VyZmFjZU5vcm1hbCkgJiZcbiAgICAgIHRoaXMubGF5ZXIgPT09IG90aGVyLmxheWVyXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgc3VyZmFjZSB0aGF0IGNvdmVycyB0aGlzIHN1cmZhY2UgYW5kIGFub3RoZXIgc3VyZmFjZVxuICAgKi9cbiAgcHVibGljIG1lcmdlKG90aGVyOiBXYWxsUmVjZWl2ZXIpOiBXYWxsUmVjZWl2ZXIge1xuICAgIHJldHVybiBuZXcgV2FsbFJlY2VpdmVyKHRoaXMubGlnaHRpbmcsIHtcbiAgICAgIC4uLih0aGlzIGFzIFdhbGxSZWNlaXZlciksXG4gICAgICAuLi5ib3VuZGluZ1JlY3RhbmdsZSh0aGlzLCBvdGhlciksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBSZWdpb25DYXN0ZXIgfSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBXYWxsUmVjZWl2ZXIsIFdhbGxSZWNlaXZlck9wdGlvbnMgfSBmcm9tICcuL1N1cmZhY2UnO1xuaW1wb3J0IHsgTGlnaHRpbmdJbWFnZSwgUmVjdGFuZ2xlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFdhbGxPcHRpb25zID0gT21pdDxcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbiAgJ3Bvc2l0aW9uJyB8ICdzaXplJyB8ICdyZWNlaXZlTGlnaHQnXG4+ICYge1xuICAvKipcbiAgICogVGhlIGFyZWEgb2YgdGhlIGdyb3VuZCB0aGF0IHRoaXMgd2FsbCBzdGFuZHMgb25cbiAgICovXG4gIGZvb3RwcmludDogUmVjdGFuZ2xlO1xuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSB3YWxsJ3MgZnJvbnQgZmFjZVxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzaGFkb3dzIGluY2x1ZGUgdGhlIHdhbGwncyBmb290cHJpbnQ/XG4gICAqL1xuICBpbmNsdWRlUmVnaW9uU2hhZG93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQXBwZWFyYW5jZSBvZiB0aGUgdG9wIG9mIHRoZSB3YWxsLCBpdCBvbmx5IHJlY2VpdmVzIGFtYmllbnQgbGlnaHRcbiAgICovXG4gIHRvcD86IHtcbiAgICBjb2xvdXI/OiBzdHJpbmc7XG4gICAgaW1hZ2U/OiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcbiAgfTtcbn07XG5cbi8qKlxuICogQSBzb2xpZCB3YWxsIGluIGEgMy80IHZpZXdcbiAqXG4gKiBUaGlzIGlzIG1hZGUgZnJvbSBhIGZyb250IGZhY2UgdGhhdCByZWNlaXZlcyBsaWdodCwgYSB0b3AgdGhhdCBvbmx5IHJlY2VpdmVzXG4gKiBhbWJpZW50IGxpZ2h0LCBhbmQgYSBmb290cHJpbnQgdGhhdCBjYXN0cyBzaGFkb3dzXG4gKi9cbmV4cG9ydCBjbGFzcyBXYWxsIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9UT1BfQ09MT1VSID0gJ2JsYWNrJztcblxuICBwdWJsaWMgcmVhZG9ubHkgZnJvbnQ6IFdhbGxSZWNlaXZlcjtcbiAgcHVibGljIHJlYWRvbmx5IHRvcDogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgY2FzdGVyOiBSZWdpb25DYXN0ZXI7XG5cbiAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBXYWxsT3B0aW9ucykge1xuICAgIGNvbnN0IHsgZm9vdHByaW50LCBoZWlnaHQsIGluY2x1ZGVSZWdpb25TaGFkb3csIHRvcCwgLi4uZnJvbnQgfSA9IG9wdGlvbnM7XG5cbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmNhc3RlciA9IGxpZ2h0aW5nLmFkZFJlZ2lvbkNhc3Rlcih7XG4gICAgICAuLi5mb290cHJpbnQsXG4gICAgICBtZXJnZWFibGU6IG9wdGlvbnMubWVyZ2VhYmxlLFxuICAgICAgaW5jbHVkZVJlZ2lvblNoYWRvdyxcbiAgICB9KTtcbiAgICB0aGlzLmZyb250ID0gbGlnaHRpbmcuYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgIC4uLmZyb250LFxuICAgICAgLi4udGhpcy5mcm9udFJlY3RhbmdsZShmb290cHJpbnQpLFxuICAgIH0pO1xuICAgIHRoaXMudG9wID0gbGlnaHRpbmcuYWRkV2FsbFJlY2VpdmVyKHtcbiAgICAgIGxheWVyOiBvcHRpb25zLmxheWVyLFxuICAgICAgekluZGV4OiBvcHRpb25zLnpJbmRleCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBjb2xvdXI6IHRvcD8uY29sb3VyID8/IFdhbGwuREVGQVVMVF9UT1BfQ09MT1VSLFxuICAgICAgaW1hZ2U6IHRvcD8uaW1hZ2UsXG4gICAgICByZWNlaXZlTGlnaHQ6IGZhbHNlLFxuICAgICAgLi4udGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZnJvbnRSZWN0YW5nbGUoZm9vdHByaW50OiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICAgIGNvbnN0IGJvdHRvbSA9IGZvb3RwcmludC5wb3NpdGlvbi55ICsgZm9vdHByaW50LnNpemUueTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogdmVjKGZvb3RwcmludC5wb3NpdGlvbi54LCBib3R0b20gLSB0aGlzLmhlaWdodCksXG4gICAgICBzaXplOiB2ZWMoZm9vdHByaW50LnNpemUueCwgdGhpcy5oZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHRvcFJlY3RhbmdsZShmb290cHJpbnQ6IFJlY3RhbmdsZSk6IFJlY3RhbmdsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMoZm9vdHByaW50LnBvc2l0aW9uLngsIGZvb3RwcmludC5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQpLFxuICAgICAgc2l6ZTogZm9vdHByaW50LnNpemUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoaXMgd2FsbCBzbyB0aGF0IGl0cyBmb290cHJpbnQgaXMgYXQgYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYykge1xuICAgIGNvbnN0IGZvb3RwcmludCA9IHsgcG9zaXRpb24sIHNpemU6IHRoaXMuY2FzdGVyLnNpemUgfTtcblxuICAgIHRoaXMuY2FzdGVyLm1vdmVUbyhwb3NpdGlvbik7XG4gICAgdGhpcy5mcm9udC5tb3ZlVG8odGhpcy5mcm9udFJlY3RhbmdsZShmb290cHJpbnQpLnBvc2l0aW9uKTtcbiAgICB0aGlzLnRvcC5tb3ZlVG8odGhpcy50b3BSZWN0YW5nbGUoZm9vdHByaW50KS5wb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgd2FsbCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUoKSB7XG4gICAgdGhpcy5mcm9udC5yZW1vdmUoKTtcbiAgICB0aGlzLnRvcC5yZW1vdmUoKTtcbiAgICB0aGlzLmNhc3Rlci5yZW1vdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCBTaWRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyByZWN0YW5nbGVUb0ludGVydmFsIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG5jb25zdCBNRVJHRV9NQVhfSVRFUkFUSU9OUyA9IDEwMDtcbmNvbnN0IE1FUkdFX09SREVSID0gWydkdXBsaWNhdGUnLCBTaWRlLkJvdHRvbSwgU2lkZS5SaWdodCwgU2lkZS5Ub3AsIFNpZGUuTGVmdF07XG5cbnR5cGUgTWVyZ2VhYmxlPFQ+ID0gUmVjdGFuZ2xlICYge1xuICBjYW5NZXJnZShvdGhlcjogVCk6IGJvb2xlYW47XG4gIG1lcmdlKG90aGVyOiBUKTogVDtcbn07XG5cbnR5cGUgTWVyZ2U8VD4gPSBbVCwgVCwgU2lkZSB8ICdkdXBsaWNhdGUnXTtcblxuLyoqXG4gKiBGaW5kIHBhaXJzIG9mIGl0ZW1zIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXIgYW5kIGNhbiBiZSBtZXJnZWRcbiAqL1xuZnVuY3Rpb24gZmluZE1lcmdlczxUIGV4dGVuZHMgTWVyZ2VhYmxlPFQ+PihpdGVtczogVFtdKTogTWVyZ2U8VD5bXSB7XG4gIGNvbnN0IHJlc3VsdDogTWVyZ2U8VD5bXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChpdGVtc1tpXSk7XG5cbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgYiA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoaXRlbXNbal0pO1xuXG4gICAgICBpZiAoIWl0ZW1zW2ldLmNhbk1lcmdlKGl0ZW1zW2pdKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQSBhbmQgQiBhcmUgdGhlIHNhbWVcbiAgICAgIGlmIChcbiAgICAgICAgYS50b3AgPT09IGIudG9wICYmXG4gICAgICAgIGEuYm90dG9tID09PSBiLmJvdHRvbSAmJlxuICAgICAgICBhLmxlZnQgPT09IGIubGVmdCAmJlxuICAgICAgICBhLnJpZ2h0ID09PSBiLnJpZ2h0XG4gICAgICApIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgJ2R1cGxpY2F0ZSddKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSBib3R0b20gZWRnZSBvZiBBXG4gICAgICBpZiAoYS5ib3R0b20gPT09IGIudG9wICYmIGEubGVmdCA9PT0gYi5sZWZ0ICYmIGEucmlnaHQgPT09IGIucmlnaHQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5Cb3R0b21dKTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIHRvcCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLnRvcCA9PT0gYi5ib3R0b20gJiYgYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS5yaWdodCA9PT0gYi5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlRvcF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgcmlnaHQgZWRnZSBvZiBBXG4gICAgICBpZiAoYS5yaWdodCA9PT0gYi5sZWZ0ICYmIGEudG9wID09PSBiLnRvcCAmJiBhLmJvdHRvbSA9PT0gYi5ib3R0b20pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5SaWdodF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgbGVmdCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLmxlZnQgPT09IGIucmlnaHQgJiYgYS50b3AgPT09IGIudG9wICYmIGEuYm90dG9tID09PSBiLmJvdHRvbSkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkxlZnRdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIE1lcmdlIGl0ZW1zIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXIgYW5kIHBlcmZlY3RseSBjb25uZWN0ZWQgb24gb25lXG4gKiBzaWRlLCBvciBhcmUgZXhhY3QgZHVwbGljYXRlcyBvZiBlYWNoIG90aGVyXG4gKlxuICogYG9uTWVyZ2VgIGlzIGNhbGxlZCBlYWNoIHRpbWUgMiBpdGVtcyBhcmUgcmVwbGFjZWQgd2l0aCBhIHNpbmdsZSBpdGVtLiBJZlxuICogdGhlIGl0ZW1zIHdlcmUgZHVwbGljYXRlcywgdGhlIG1lcmdlZCBpdGVtIGlzIHRoZSBmaXJzdCBpdGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxUIGV4dGVuZHMgTWVyZ2VhYmxlPFQ+PihcbiAgaXRlbXM6IFRbXSxcbiAgb25NZXJnZT86IChtZXJnZWQ6IFQsIGE6IFQsIGI6IFQpID0+IHZvaWRcbik6IFRbXSB7XG4gIC8vIFNvcnQgaXRlbXMgYnkgeS1wb3NpdGlvbiB0aGVuIHgtcG9zaXRpb25cbiAgbGV0IHJlc3VsdCA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLnBvc2l0aW9uLnkgPT09IGIucG9zaXRpb24ueSkge1xuICAgICAgcmV0dXJuIGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueDtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5wb3NpdGlvbi55IC0gYi5wb3NpdGlvbi55O1xuICB9KTtcblxuICBsZXQgaSA9IDA7XG4gIGxldCBtZXJnZXM6IE1lcmdlPFQ+W107XG4gIHdoaWxlIChcbiAgICAobWVyZ2VzID0gZmluZE1lcmdlcyhyZXN1bHQpKS5sZW5ndGggPiAwICYmXG4gICAgaSsrIDwgTUVSR0VfTUFYX0lURVJBVElPTlNcbiAgKSB7XG4gICAgLy8gTWVyZ2UgaXRlbXMgaW4gYSBzcGVjaWZpYyBvcmRlciAoZS5nLiBpdGVtcyB0aGF0IGNvbm5lY3Qgb24gdGhlIGJvdHRvbVxuICAgIC8vIGZhY2UgZmlyc3QsIG9yIGl0ZW1zIHRoYXQgYXJlIGV4YWN0IGR1cGxpY2F0ZXMgZmlyc3QsIGV0Yy4pXG4gICAgbWVyZ2VzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gTUVSR0VfT1JERVIuaW5kZXhPZihhWzJdKSAtIE1FUkdFX09SREVSLmluZGV4T2YoYlsyXSlcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCBbYSwgYiwgc2lkZV0gb2YgbWVyZ2VzKSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGl0ZW1zIHN0aWxsIGV4aXN0ICh0aGV5IG1pZ2h0IGhhdmUgYmVlbiBtZXJnZWQgYW5kXG4gICAgICAvLyByZW1vdmVkIGluIGEgcHJldmlvdXMgaXRlcmF0aW9uKVxuICAgICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMoYSkgfHwgIXJlc3VsdC5pbmNsdWRlcyhiKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNpZGUgPT09ICdkdXBsaWNhdGUnKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBiKTtcbiAgICAgICAgb25NZXJnZT8uKGEsIGEsIGIpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVyZ2VkID0gYS5tZXJnZShiKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBhICYmIGl0ZW0gIT09IGIpO1xuICAgICAgcmVzdWx0LnB1c2gobWVyZ2VkKTtcbiAgICAgIG9uTWVyZ2U/LihtZXJnZWQsIGEsIGIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG4vKipcbiAqIEFuIGltYWdlIHRoYXQgY2FuIGJlIGRyYXduIG9udG8gYSBjYW52YXNcbiAqL1xuZXhwb3J0IHR5cGUgTGlnaHRpbmdJbWFnZSA9IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudDtcblxuLyoqXG4gKiBUaGUgcGFydHMgb2YgYSBjYW1lcmEgdGhhdCBhcmUgdXNlZCBieSB0aGUgbGlnaHRpbmcgc3lzdGVtLCB0aGlzIGlzXG4gKiBjb21wYXRpYmxlIHdpdGggQGJhc2VtZW50dW5pdmVyc2UvY2FtZXJhXG4gKi9cbmV4cG9ydCB0eXBlIExpZ2h0aW5nQ2FtZXJhID0ge1xuICBib3VuZHM6IEludGVydmFsMmQ7XG4gIHdvcmxkVG9TY3JlZW4ocG9zaXRpb246IHZlYyk6IHZlYztcbiAgc2V0VHJhbnNmb3Jtcyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkO1xufTtcblxuZXhwb3J0IHR5cGUgQ29sb3VyID0ge1xuICByOiBudW1iZXI7XG4gIGc6IG51bWJlcjtcbiAgYjogbnVtYmVyO1xuICBhOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBMaW5lID0ge1xuICBzdGFydDogdmVjO1xuICBlbmQ6IHZlYztcbn07XG5cbmV4cG9ydCB0eXBlIEludGVydmFsMWQgPSB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJ2YWwyZCA9IHtcbiAgdG9wOiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZW51bSBTZWN0b3IxZCB7XG4gIEJlZm9yZSA9ICdiZWZvcmUnLFxuICBJbnNpZGUgPSAnaW5zaWRlJyxcbiAgQWZ0ZXIgPSAnYWZ0ZXInLFxufVxuXG5leHBvcnQgZW51bSBTZWN0b3IyZCB7XG4gIFRvcExlZnQgPSAndG9wLWxlZnQnLFxuICBUb3AgPSAndG9wJyxcbiAgVG9wUmlnaHQgPSAndG9wLXJpZ2h0JyxcbiAgTGVmdCA9ICdsZWZ0JyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcbiAgQm90dG9tTGVmdCA9ICdib3R0b20tbGVmdCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBCb3R0b21SaWdodCA9ICdib3R0b20tcmlnaHQnLFxufVxuXG5leHBvcnQgdHlwZSBSZWN0YW5nbGUgPSB7XG4gIHBvc2l0aW9uOiB2ZWM7XG4gIHNpemU6IHZlYztcbn07XG5cbmV4cG9ydCB0eXBlIFBvbHlnb25WZXJ0aWNlcyA9IChcbiAgfCB2ZWNcbiAgfCAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZClcbilbXTtcblxuZXhwb3J0IGVudW0gU2lkZSB7XG4gIFRvcCA9ICd0b3AnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBMZWZ0ID0gJ2xlZnQnLFxufVxuXG5leHBvcnQgZW51bSBXYWxsU2hhZG93TGF5ZXIge1xuICBPbmUgPSAnb25lJyxcbiAgVHdvID0gJ3R3bycsXG59XG4iLCJpbXBvcnQgeyBmbG9hdEVxdWFscywgbGVycCB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEludGVydmFsMWQsXG4gIEludGVydmFsMmQsXG4gIExpZ2h0aW5nSW1hZ2UsXG4gIExpbmUsXG4gIFBvbHlnb25WZXJ0aWNlcyxcbiAgUmVjdGFuZ2xlLFxuICBTZWN0b3IxZCxcbiAgU2VjdG9yMmQsXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEdldCB0aGUgbWluaW11bSBvZiBhIHNldCBvZiB2ZWN0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW5WZWMoLi4udmVjdG9yczogdmVjW10pOiB2ZWMge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1pbiwgdikgPT4gdmVjKE1hdGgubWluKG1pbi54LCB2LngpLCBNYXRoLm1pbihtaW4ueSwgdi55KSksXG4gICAgdmVjKEluZmluaXR5LCBJbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1heGltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4VmVjKC4uLnZlY3RvcnM6IHZlY1tdKTogdmVjIHtcbiAgcmV0dXJuIHZlY3RvcnMucmVkdWNlKFxuICAgIChtYXgsIHYpID0+IHZlYyhNYXRoLm1heChtYXgueCwgdi54KSwgTWF0aC5tYXgobWF4LnksIHYueSkpLFxuICAgIHZlYygtSW5maW5pdHksIC1JbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNtYWxsZXN0IHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIDIgcmVjdGFuZ2xlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYm91bmRpbmdSZWN0YW5nbGUoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBSZWN0YW5nbGUge1xuICBjb25zdCBwb3NpdGlvbiA9IG1pblZlYyhhLnBvc2l0aW9uLCBiLnBvc2l0aW9uKTtcbiAgY29uc3QgYm90dG9tUmlnaHQgPSBtYXhWZWMoXG4gICAgdmVjLmFkZChhLnBvc2l0aW9uLCBhLnNpemUpLFxuICAgIHZlYy5hZGQoYi5wb3NpdGlvbiwgYi5zaXplKVxuICApO1xuXG4gIHJldHVybiB7IHBvc2l0aW9uLCBzaXplOiB2ZWMuc3ViKGJvdHRvbVJpZ2h0LCBwb3NpdGlvbikgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgY29sb3VyIG9iamVjdCB0byBhIENTUyBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG91clRvU3RyaW5nKGNvbG91cjogQ29sb3VyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGByZ2JhKCR7Y29sb3VyLnJ9LCAke2NvbG91ci5nfSwgJHtjb2xvdXIuYn0sICR7Y29sb3VyLmF9KWA7XG59XG5cbi8qKlxuICogTGluZWFyIGludGVycG9sYXRlIGJldHdlZW4gMiBjb2xvdXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwQ29sb3VyKGE6IENvbG91ciwgYjogQ29sb3VyLCBpOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICByOiBsZXJwKGEuciwgYi5yLCBpKSxcbiAgICBnOiBsZXJwKGEuZywgYi5nLCBpKSxcbiAgICBiOiBsZXJwKGEuYiwgYi5iLCBpKSxcbiAgICBhOiBsZXJwKGEuYSwgYi5hLCBpKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHggcG9zaXRpb24gb2YgYSBsaW5lIHdoZXJlIGl0IGludGVyY2VwdHMgYSBnaXZlbiB5XG4gKlxuICogUmV0dXJucyBhIHR1cGxlIGNvbnRhaW5pbmcgdGhlIGludGVyY2VwdCBwb3NpdGlvbiBhbmQgdGhlIG5vcm1hbGlzZWRcbiAqIHByb2dyZXNzIGFsb25nIHRoZSBsaW5lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lWUludGVyY2VwdChcbiAgbGluZTogTGluZSxcbiAgeTogbnVtYmVyLFxuICBhbGxvd0JlZm9yZTogYm9vbGVhbiA9IHRydWUsXG4gIGFsbG93QWZ0ZXI6IGJvb2xlYW4gPSB0cnVlXG4pOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbCB7XG4gIGlmIChmbG9hdEVxdWFscyhsaW5lLnN0YXJ0LnksIGxpbmUuZW5kLnkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB0ID0gKHkgLSBsaW5lLnN0YXJ0LnkpIC8gKGxpbmUuZW5kLnkgLSBsaW5lLnN0YXJ0LnkpO1xuICBpZiAodCA8IDAgJiYgIWFsbG93QmVmb3JlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHQgPiAxICYmICFhbGxvd0FmdGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gW2xpbmUuc3RhcnQueCArIHQgKiAobGluZS5lbmQueCAtIGxpbmUuc3RhcnQueCksIHRdO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbGluZSBzZWdtZW50J3Mgbm9ybWFsIGlzIGZhY2luZyB0b3dhcmRzIGEgcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJc0ZhY2luZyhsaW5lOiBMaW5lLCBwb3NpdGlvbjogdmVjKSB7XG4gIGNvbnN0IGVkZ2UgPSB2ZWMubm9yKHZlYy5zdWIobGluZS5lbmQsIGxpbmUuc3RhcnQpKTtcbiAgY29uc3QgZWRnZU5vcm1hbCA9IHZlYyhlZGdlLnksIC1lZGdlLngpO1xuICBjb25zdCBsaWdodE5vcm1hbCA9IHZlYy5ub3IoXG4gICAgdmVjLnN1Yih2ZWMubXVsKHZlYy5hZGQobGluZS5zdGFydCwgbGluZS5lbmQpLCAwLjUpLCBwb3NpdGlvbilcbiAgKTtcblxuICByZXR1cm4gdmVjLmRvdChsaWdodE5vcm1hbCwgZWRnZU5vcm1hbCkgPD0gMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgMmQgaW50ZXJ2YWwgdG8gYSByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVydmFsVG9SZWN0YW5nbGUoaW50ZXJ2YWw6IEludGVydmFsMmQpOiBSZWN0YW5nbGUge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiB2ZWMoaW50ZXJ2YWwubGVmdCwgaW50ZXJ2YWwudG9wKSxcbiAgICBzaXplOiB2ZWMoaW50ZXJ2YWwucmlnaHQgLSBpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC5ib3R0b20gLSBpbnRlcnZhbC50b3ApLFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByZWN0YW5nbGUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IEludGVydmFsMmQge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgIHJpZ2h0OiByZWN0YW5nbGUucG9zaXRpb24ueCArIHJlY3RhbmdsZS5zaXplLngsXG4gICAgdG9wOiByZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICBib3R0b206IHJlY3RhbmdsZS5wb3NpdGlvbi55ICsgcmVjdGFuZ2xlLnNpemUueSxcbiAgfTtcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBvdmVybGFwIGJldHdlZW4gMiAxZCBpbnRlcnZhbHNcbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBvdmVybGFwLCByZXR1cm4gbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmxhcDFkKGE6IEludGVydmFsMWQsIGI6IEludGVydmFsMWQpOiBJbnRlcnZhbDFkIHwgbnVsbCB7XG4gIGlmIChhLmVuZCA8IGIuc3RhcnQgfHwgYS5zdGFydCA+IGIuZW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBNYXRoLm1heChhLnN0YXJ0LCBiLnN0YXJ0KSxcbiAgICBlbmQ6IE1hdGgubWluKGEuZW5kLCBiLmVuZCksXG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgMiBBQUJCcyBpbnRlcnNlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZXNJbnRlcnNlY3QoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgY29uc3QgdGwxID0gYS5wb3NpdGlvbjtcbiAgY29uc3QgYnIxID0gdmVjLmFkZChhLnBvc2l0aW9uLCBhLnNpemUpO1xuICBjb25zdCB0bDIgPSBiLnBvc2l0aW9uO1xuICBjb25zdCBicjIgPSB2ZWMuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSk7XG5cbiAgcmV0dXJuIHRsMS54IDwgYnIyLnggJiYgYnIxLnggPiB0bDIueCAmJiB0bDEueSA8IGJyMi55ICYmIGJyMS55ID4gdGwyLnk7XG59XG5cbi8qKlxuICogR2V0IGFuIGFycmF5IG9mIHZlcnRpY2VzIGZvciBhIHJlY3RhbmdsZSBpbiBDVyB3aW5kaW5nIG9yZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVWZXJ0aWNlcyhyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IHZlY1tdIHtcbiAgY29uc3QgdGwgPSByZWN0YW5nbGUucG9zaXRpb247XG4gIGNvbnN0IGJyID0gdmVjLmFkZChyZWN0YW5nbGUucG9zaXRpb24sIHJlY3RhbmdsZS5zaXplKTtcblxuICByZXR1cm4gW3JlY3RhbmdsZS5wb3NpdGlvbiwgdmVjKGJyLngsIHRsLnkpLCBiciwgdmVjKHRsLngsIGJyLnkpXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwb2x5Z29uIHBhdGggb24gYSBjYW52YXMgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbihcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAuLi52ZXJ0aWNlczogUG9seWdvblZlcnRpY2VzXG4pIHtcbiAgaWYgKHZlcnRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGlmICh0eXBlb2YgdmVydGljZXNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2ZXJ0aWNlc1swXShjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHZlcnRpY2VzW2ldIGFzIEZ1bmN0aW9uKShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5saW5lVG8oKHZlcnRpY2VzW2ldIGFzIHZlYykueCwgKHZlcnRpY2VzW2ldIGFzIHZlYykueSk7XG4gICAgfVxuICB9XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDFkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IxZChuOiBudW1iZXIsIGludGVydmFsOiBJbnRlcnZhbDFkKTogU2VjdG9yMWQge1xuICBpZiAobiA8PSBpbnRlcnZhbC5zdGFydCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5CZWZvcmU7XG4gIH1cblxuICBpZiAobiA+PSBpbnRlcnZhbC5lbmQpIHtcbiAgICByZXR1cm4gU2VjdG9yMWQuQWZ0ZXI7XG4gIH1cblxuICByZXR1cm4gU2VjdG9yMWQuSW5zaWRlO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdG9yIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VjdG9yMmQocG9pbnQ6IHZlYywgaW50ZXJ2YWw6IEludGVydmFsMmQpOiBTZWN0b3IyZCB7XG4gIGNvbnN0IHggPSBzZWN0b3IxZChwb2ludC54LCB7IHN0YXJ0OiBpbnRlcnZhbC5sZWZ0LCBlbmQ6IGludGVydmFsLnJpZ2h0IH0pO1xuICBjb25zdCB5ID0gc2VjdG9yMWQocG9pbnQueSwgeyBzdGFydDogaW50ZXJ2YWwudG9wLCBlbmQ6IGludGVydmFsLmJvdHRvbSB9KTtcblxuICByZXR1cm4ge1xuICAgIFtTZWN0b3IxZC5CZWZvcmVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5MZWZ0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tTGVmdCxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5JbnNpZGVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wLFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkluc2lkZSxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbSxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5BZnRlcl06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BSaWdodCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5SaWdodCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbVJpZ2h0LFxuICAgIH0sXG4gIH1beF1beV07XG59XG5cbi8qKlxuICogRHJhdyBhbiBpbWFnZSBpbnRvIGEgcmVjdGFuZ2xlLCBlaXRoZXIgcmVwZWF0aW5nIGl0IG9yIHN0cmV0Y2hpbmcgaXQgdG8gZml0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmF3SW1hZ2VJblJlY3RhbmdsZShcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICBpbWFnZTogTGlnaHRpbmdJbWFnZSxcbiAgcmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gIHJlcGVhdDogYm9vbGVhblxuKSB7XG4gIGNvbnN0IHsgcG9zaXRpb24sIHNpemUgfSA9IHJlY3RhbmdsZTtcblxuICBpZiAoIXJlcGVhdCkge1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLngsIHNpemUueSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUGF0dGVybihpbWFnZSwgJ3JlcGVhdCcpO1xuICBpZiAocGF0dGVybikge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcGF0dGVybjtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLngsIHNpemUueSk7XG4gICAgY29udGV4dC5maWxsKCk7XG4gIH1cbn1cblxuY29uc3Qgc2lsaG91ZXR0ZXMgPSBuZXcgV2Vha01hcDxMaWdodGluZ0ltYWdlLCBIVE1MQ2FudmFzRWxlbWVudD4oKTtcblxuLyoqXG4gKiBHZXQgYSBibGFjayBjb3B5IG9mIGFuIGltYWdlIHdoaWNoIGtlZXBzIHRoZSBpbWFnZSdzIGFscGhhIGNoYW5uZWwsIG9yIG51bGxcbiAqIGlmIHRoZSBpbWFnZSBoYXNuJ3QgbG9hZGVkIHlldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2lsaG91ZXR0ZShpbWFnZTogTGlnaHRpbmdJbWFnZSk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gIGlmIChpbWFnZS53aWR0aCA9PT0gMCB8fCBpbWFnZS5oZWlnaHQgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgIWltYWdlLmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gc2lsaG91ZXR0ZXMuZ2V0KGltYWdlKTtcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICByZXN1bHQud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICByZXN1bHQuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHJlc3VsdC5nZXRDb250ZXh0KCcyZCcpITtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLWluJztcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCByZXN1bHQud2lkdGgsIHJlc3VsdC5oZWlnaHQpO1xuXG4gICAgc2lsaG91ZXR0ZXMuc2V0KGltYWdlLCByZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJleHBvcnQgeyBBY3RvciB9IGZyb20gJy4vQWN0b3InO1xuZXhwb3J0IHR5cGUgeyBBY3Rvck9wdGlvbnMsIEFjdG9yU2hhZG93IH0gZnJvbSAnLi9BY3Rvcic7XG5leHBvcnQgeyBDaXJjbGVDYXN0ZXIsIFJlZ2lvbkNhc3RlciwgU3ByaXRlQ2FzdGVyIH0gZnJvbSAnLi9DYXN0ZXInO1xuZXhwb3J0IHR5cGUge1xuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBSZWdpb25DYXN0ZXJPcHRpb25zLFxuICBTaGFkb3dDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmV4cG9ydCB7IExpZ2h0IH0gZnJvbSAnLi9MaWdodCc7XG5leHBvcnQgdHlwZSB7IExpZ2h0T3B0aW9ucyB9IGZyb20gJy4vTGlnaHQnO1xuZXhwb3J0IHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmV4cG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW1PcHRpb25zIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5leHBvcnQgeyBTY2VuZU9iamVjdCB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuZXhwb3J0IHR5cGUgeyBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmV4cG9ydCB7IEdyb3VuZFJlY2VpdmVyLCBTdXJmYWNlLCBXYWxsUmVjZWl2ZXIgfSBmcm9tICcuL1N1cmZhY2UnO1xuZXhwb3J0IHR5cGUge1xuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIFN1cmZhY2VPcHRpb25zLFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1N1cmZhY2UnO1xuZXhwb3J0IHsgV2FsbFNoYWRvd0xheWVyIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgdHlwZSB7IExpZ2h0aW5nQ2FtZXJhLCBMaWdodGluZ0ltYWdlLCBSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7IFdhbGwgfSBmcm9tICcuL1dhbGwnO1xuZXhwb3J0IHR5cGUgeyBXYWxsT3B0aW9ucyB9IGZyb20gJy4vV2FsbCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=