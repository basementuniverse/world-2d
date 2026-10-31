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

/***/ "./node_modules/shader-canvas/dist/shader-canvas.js":
/*!**********************************************************!*\
  !*** ./node_modules/shader-canvas/dist/shader-canvas.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShaderCanvas: () => (/* binding */ ShaderCanvas)
/* harmony export */ });
const defaultVertexShader = `
  #ifdef GL_ES
  precision mediump float;
  #endif
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;
const defaultFragmentShader = `
  #ifdef GL_ES
  precision mediump float;
  #endif
  void main() {
    gl_FragColor = vec4(0.0);
  }
`;
class ShaderCanvas {
    constructor() {
        this.width = 0;
        this.height = 0;
        this.textures = {};
        this.domElement = document.createElement("canvas");
        const gl = this.domElement.getContext("webgl");
        if (!gl) {
            throw new Error("failed to get webgl context");
        }
        this.gl = gl;
        const vs = this.gl.createShader(this.gl.VERTEX_SHADER);
        if (!vs) {
            throw new Error("failed to create vertex shader");
        }
        this.vertexShader = vs;
        const vsErrs = compileShader(this.gl, this.vertexShader, defaultVertexShader);
        if (vsErrs) {
            throw new Error("failed to compile vertex shader");
        }
        const fs = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        if (!fs) {
            throw new Error("failed to create fragment shader");
        }
        this.fragmentShader = fs;
        const fsErrs = compileShader(this.gl, this.fragmentShader, defaultFragmentShader);
        if (fsErrs) {
            throw new Error("failed to compile vertex shader");
        }
        this.shaderProgram = createShaderProgram(this.gl, this.vertexShader, this.fragmentShader);
        bindPositionAttribute(this.gl, this.shaderProgram);
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.useProgram(this.shaderProgram);
        this.setSize(400, 400);
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        const dpr = window.devicePixelRatio;
        this.domElement.width = width * dpr;
        this.domElement.height = height * dpr;
        this.domElement.style.width = width + "px";
        this.domElement.style.height = height + "px";
        this.gl.viewport(0, 0, this.domElement.width, this.domElement.height);
    }
    // getResolution is a convenience method for getting a vec2 representing the
    // size in physical pixels of the canvas.
    // Typical usage is:
    //   shaderCanvas.setUniform("u_resolution", shaderCanvas.getResolution());
    getResolution() {
        return [
            this.domElement.width,
            this.domElement.height,
        ];
    }
    setShader(source) {
        const gl = this.gl;
        const errs = compileShader(gl, this.fragmentShader, source);
        if (errs) {
            return errs;
        }
        gl.linkProgram(this.shaderProgram);
        if (!gl.getProgramParameter(this.shaderProgram, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(this.shaderProgram));
            throw new Error("failed to link program");
        }
    }
    testUniform(name) {
        const location = this.gl.getUniformLocation(this.shaderProgram, name);
        return location !== null;
    }
    setUniform(name, value) {
        // TODO: validate name?
        // TODO OPTIMIZE: cache uniform location
        const location = this.gl.getUniformLocation(this.shaderProgram, name);
        if (location === null) {
            throw new Error(`uniform location for ${name} not found`);
        }
        if (typeof value === "number") {
            this.gl.uniform1f(location, value);
            return;
        }
        switch (value.length) {
            case 2:
                this.gl.uniform2fv(location, value);
                break;
            case 3:
                this.gl.uniform3fv(location, value);
                break;
            case 4:
                this.gl.uniform4fv(location, value);
                break;
        }
    }
    // TODO: accept options, like format, filter, wrap, etc.
    setTexture(name, image) {
        // TODO: validate name?
        const gl = this.gl;
        let t = this.textures[name];
        if (!t) {
            const glTexture = gl.createTexture();
            if (!glTexture) {
                throw new Error(`unable to create glTexture`);
            }
            t = {
                glTexture,
                unit: lowestUnused(Object.keys(this.textures).map((k) => this.textures[k].unit)),
            };
            this.textures[name] = t;
        }
        gl.activeTexture(gl.TEXTURE0 + t.unit);
        gl.bindTexture(gl.TEXTURE_2D, t.glTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        const location = gl.getUniformLocation(this.shaderProgram, name);
        if (location === null) {
            throw new Error(`uniform location for texture ${name} not found`);
        }
        gl.uniform1i(location, t.unit);
    }
    render() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    }
}
function compileShader(gl, shader, source) {
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return;
    }
    const info = gl.getShaderInfoLog(shader);
    if (!info) {
        throw new Error("failed to compile, but found no error log");
    }
    console.error(info);
    return parseErrorMessages(info);
}
function createShaderProgram(gl, vs, fs) {
    const program = gl.createProgram();
    if (program === null) {
        throw new Error("failed to create shader program");
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const info = gl.getProgramInfoLog(program);
        console.error(info);
        throw new Error("failed to link program");
    }
    return program;
}
function bindPositionAttribute(gl, program) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const positions = new Float32Array([
        -1.0, -1.0,
        -1.0, 1.0,
        1.0, -1.0,
        1.0, 1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, "position");
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);
}
function parseErrorMessages(msg) {
    const errorRegex = /^ERROR: \d+:(\d+).*$/mg;
    const messages = [];
    let match = errorRegex.exec(msg);
    while (match) {
        messages.push({
            text: match[0],
            lineNumber: parseInt(match[1], 10),
        });
        // Look for another error:
        match = errorRegex.exec(msg);
    }
    return messages;
}
// This is a flavor of Shlemiel the painter's algorithm.
// http://wiki.c2.com/?ShlemielThePainter
//
// TODO: figure out how to run tests, but I've spot checked these:
//   [] => 0
//   [0, 1, 2, 3, 4] => 5
//   [0, 1, 3, 4] => 2
//   [1, 3, 4] => 0
//   [4] => 0
//   [4, 3, 2, 1, 0] => 5
//   [4, 2, 1, 0] => 3
//   [4, 2, 1, 10] => 0
//   [2, 0, 3, 4] => 1
function lowestUnused(xs) {
    let unused = 0;
    for (let i = 0; i < xs.length; i++) {
        if (xs[i] === unused) {
            unused++;
            i = -1; // go back to the beginning
        }
    }
    return unused;
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
const shader_canvas_1 = __webpack_require__(/*! shader-canvas */ "./node_modules/shader-canvas/dist/shader-canvas.js");
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
const HALF_PI = Math.PI / 2;
const INTERCEPT_X = 0;
const INTERCEPT_T = 1;
class Light {
    constructor(lightingSystem, options) {
        var _a, _b, _c, _d, _e;
        this.shaderCanvas = null;
        this.shaderFailed = false;
        this.dirty = true;
        this.lightingSystem = lightingSystem;
        this.position = vec_1.vec.cpy(options.position);
        this._radius = (_a = options.radius) !== null && _a !== void 0 ? _a : Light.DEFAULT_RADIUS;
        this._colour = (_b = options.colour) !== null && _b !== void 0 ? _b : Light.DEFAULT_COLOUR;
        this._coreRadius = (_c = options.coreRadius) !== null && _c !== void 0 ? _c : Light.DEFAULT_CORE_RADIUS;
        this._intensity = (_d = options.intensity) !== null && _d !== void 0 ? _d : Light.DEFAULT_INTENSITY;
        this.castShadows = (_e = options.castShadows) !== null && _e !== void 0 ? _e : true;
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
        const { position, radius, colour, coreRadius, intensity, castShadows } = options;
        this.position = vec_1.vec.cpy(position !== null && position !== void 0 ? position : this.position);
        this.radius = radius !== null && radius !== void 0 ? radius : this.radius;
        this.colour = colour !== null && colour !== void 0 ? colour : this.colour;
        this.coreRadius = coreRadius !== null && coreRadius !== void 0 ? coreRadius : this.coreRadius;
        this.intensity = intensity !== null && intensity !== void 0 ? intensity : this.intensity;
        this.castShadows = castShadows !== null && castShadows !== void 0 ? castShadows : this.castShadows;
    }
    remove() {
        this.lightingSystem.remove(this);
    }
    destroy() {
        this.releaseShader();
    }
    releaseShader() {
        var _a, _b, _c;
        (_c = (_b = (_a = this.shaderCanvas) === null || _a === void 0 ? void 0 : _a.domElement.getContext('webgl')) === null || _b === void 0 ? void 0 : _b.getExtension('WEBGL_lose_context')) === null || _c === void 0 ? void 0 : _c.loseContext();
        this.shaderCanvas = null;
    }
    prepare(camera, groundShadowReceivers, wallShadowReceivers, regionShadowCasters, spriteShadowCasters, circleShadowCasters) {
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
        if (this.lightingSystem.options.shaderEnabled && !this.shaderFailed) {
            try {
                this.prepareShader(camera);
            }
            catch (e) {
                console.error('Shader disabled for light', this, e);
                this.shaderFailed = true;
                this.releaseShader();
            }
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
        const gradient = this.lightContext.createRadialGradient(this._radius, this._radius, this._radius * this._coreRadius, this._radius, this._radius, this._radius);
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
    prepareShader(camera) {
        if (!this.shaderCanvas) {
            const { shader } = this.lightingSystem.options;
            if (!shader || !this.lightingSystem.canCreateShaderCanvas()) {
                return;
            }
            this.shaderCanvas = new shader_canvas_1.ShaderCanvas();
            this.shaderCanvas.setShader(shader);
        }
        const lightTopLeftScreenPosition = camera.worldToScreen(vec_1.vec.sub(this.position, (0, vec_1.vec)(this._radius)));
        const lightBottomRightScreenPosition = camera.worldToScreen(vec_1.vec.add(this.position, (0, vec_1.vec)(this._radius)));
        const s = (this._radius * 2) / window.devicePixelRatio;
        if (this.shaderCanvas.width !== s) {
            this.shaderCanvas.setSize(s, s);
        }
        this.shaderCanvas.setUniform('u_resolution', [
            this._radius * 2,
            this._radius * 2,
        ]);
        this.shaderCanvas.setUniform('u_lightColour', [
            this.colourObject.r / 255,
            this.colourObject.g / 255,
            this.colourObject.b / 255,
            this.colourObject.a,
        ]);
        this.shaderCanvas.setUniform('u_lightScreenPositionTopLeft', [
            lightTopLeftScreenPosition.x / this.lightingSystem.screen.x,
            lightTopLeftScreenPosition.y / this.lightingSystem.screen.y,
        ]);
        this.shaderCanvas.setUniform('u_lightScreenPositionBottomRight', [
            lightBottomRightScreenPosition.x / this.lightingSystem.screen.x,
            lightBottomRightScreenPosition.y / this.lightingSystem.screen.y,
        ]);
        this.shaderCanvas.setUniform('u_wallLightingYOffset', this.lightingSystem.options.wallLightingYOffset);
        this.shaderCanvas.setUniform('u_highlightAlpha', this.lightingSystem.options.shaderHighlightAlpha);
        this.shaderCanvas.setUniform('u_shadowAlpha', this.lightingSystem.options.shaderShadowAlpha);
        this.shaderCanvas.setUniform('u_specularAlpha', this.lightingSystem.options.shaderSpecularAlpha);
        this.shaderCanvas.setTexture('u_sceneNormalMap', this.lightingSystem.sceneNormalMapCanvas);
        this.shaderCanvas.setTexture('u_sceneSpecularMap', this.lightingSystem.sceneSpecularMapCanvas);
        this.shaderCanvas.setTexture('u_groundLightMap', this.groundLightCanvas);
        this.shaderCanvas.setTexture('u_wall1LightMap', this.wallLight1Canvas);
        this.shaderCanvas.setTexture('u_wall2LightMap', this.wallLight2Canvas);
        this.shaderCanvas.setTexture('u_groundMask', this.lightingSystem.groundMaskCanvas);
        this.shaderCanvas.setTexture('u_wall1Mask', this.lightingSystem.wallMask1Canvas);
        this.shaderCanvas.setTexture('u_wall2Mask', this.lightingSystem.wallMask2Canvas);
        this.shaderCanvas.render();
    }
}
exports.Light = Light;
Light.DEFAULT_RADIUS = 100;
Light.DEFAULT_COLOUR = 'white';
Light.DEFAULT_CORE_RADIUS = 0.2;
Light.DEFAULT_INTENSITY = 1;
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
const Surface_1 = __webpack_require__(/*! ./Surface */ "./src/lighting/Surface.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/lighting/types.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/lighting/utilities.ts");
const Wall_1 = __webpack_require__(/*! ./Wall */ "./src/lighting/Wall.ts");
const defaultShader = __webpack_require__(/*! ./shaders/lighting.glsl */ "./src/lighting/shaders/lighting.glsl");
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
        this.sceneNormalMapContext = LightingSystem.createContext();
        this.sceneNormalMapCanvas = this.sceneNormalMapContext.canvas;
        this.sceneSpecularMapContext = LightingSystem.createContext();
        this.sceneSpecularMapCanvas = this.sceneSpecularMapContext.canvas;
        this.shaderLimitWarningShown = false;
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
            object.destroy();
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
    canCreateShaderCanvas() {
        const shaderLights = this.lights.filter(light => light.shaderCanvas);
        if (shaderLights.length < this.options.maxShaderLights) {
            return true;
        }
        if (!this.shaderLimitWarningShown) {
            console.warn(`Shader limited to the first ${this.options.maxShaderLights} lights`);
            this.shaderLimitWarningShown = true;
        }
        return false;
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
        this.drawSceneNormalMap(camera);
        this.drawSceneSpecularMap(camera);
        const ambientLightDirection = vec_1.vec.rot((0, vec_1.vec)(1, 0), this.options.ambientLightDirection);
        const ambientLightColour = (0, parsecolor_1.parseColor)(this.options.ambientLightColour);
        const ambientLightShadowColour = (0, parsecolor_1.parseColor)(this.options.ambientLightShadowColour);
        const ambientLightHighlightColour = (0, parsecolor_1.parseColor)(this.options.ambientLightHighlightColour);
        const cameraRectangle = (0, utilities_1.intervalToRectangle)(camera.bounds);
        const visibleLights = this.lights.filter(light => (0, utilities_1.rectanglesIntersect)(light.bounds, cameraRectangle));
        visibleLights.forEach(light => light.prepare(camera, this.groundReceivers, this.wallReceivers, this.regionCasters, this.spriteCasters, this.circleCasters));
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
        visibleLights.forEach(light => {
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
        visibleLights.forEach(light => {
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
        visibleLights.forEach(light => {
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
        if (this.options.shaderEnabled) {
            this.lightMapContext.save();
            camera.setTransforms(this.lightMapContext);
            visibleLights.forEach(light => {
                if (!light.shaderCanvas) {
                    return;
                }
                this.lightMapContext.drawImage(light.shaderCanvas.domElement, light.position.x - light.radius, light.position.y - light.radius);
            });
            this.lightMapContext.restore();
        }
        this.lightMapContext.restore();
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
        context.restore();
    }
    drawSceneNormalMap(camera) {
        if (!this.options.shaderEnabled) {
            return;
        }
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
        if (!this.options.shaderEnabled) {
            return;
        }
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
    shader: defaultShader,
    maxShaderLights: 12,
    shaderHighlightAlpha: 0.24,
    shaderShadowAlpha: 0.32,
    shaderSpecularAlpha: 1,
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

/***/ "./src/lighting/shaders/lighting.glsl":
/*!********************************************!*\
  !*** ./src/lighting/shaders/lighting.glsl ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = "precision mediump float;\n\n// -----------------------------------------------------------------------------\n// UNIFORMS\n// -----------------------------------------------------------------------------\nuniform vec4 u_lightColour;\nuniform vec2 u_resolution;\nuniform vec2 u_lightScreenPositionTopLeft;\nuniform vec2 u_lightScreenPositionBottomRight;\nuniform float u_wallLightingYOffset;\nuniform float u_highlightAlpha;\nuniform float u_shadowAlpha;\nuniform float u_specularAlpha;\n\n// -----------------------------------------------------------------------------\n// SAMPLERS\n// -----------------------------------------------------------------------------\nuniform sampler2D u_sceneNormalMap;\nuniform sampler2D u_sceneSpecularMap;\nuniform sampler2D u_groundLightMap;\nuniform sampler2D u_wall1LightMap;\nuniform sampler2D u_wall2LightMap;\nuniform sampler2D u_groundMask;\nuniform sampler2D u_wall1Mask;\nuniform sampler2D u_wall2Mask;\n\n// -----------------------------------------------------------------------------\n// GLOBAL CONSTANTS\n// -----------------------------------------------------------------------------\nfloat LIGHT_HEIGHT = -0.3;\nfloat WALL_NORMAL_Z_OFFSET = 0.2;\n\nfloat HIGHLIGHT_THRESHOLD = 0.849;\nfloat HIGHLIGHT_OFFSET = 0.25;\n\nfloat SPECULAR_THRESHOLD = 1.06;\nfloat SPECULAR_OFFSET = 0.25;\nfloat SPECULAR_SPREAD = 0.1;\nfloat SPECULAR_MULTIPLIER = 100.0;\nfloat SPECULAR_DISTANCE_AMPLITUDE = 0.119;\nfloat SPECULAR_DISTANCE_OFFSET = 0.1;\nfloat SPECULAR_DISTANCE_SPREAD = 0.1;\n\nfloat SHADOW_THRESHOLD = 0.121;\n\nfloat SHADING_FALLOFF = 1.788;\nfloat SHADING_OFFSET = 2.244;\nfloat SHADING_BANDING = 0.1;\n\n// -----------------------------------------------------------------------------\n// UTILITY FUNCTIONS\n// -----------------------------------------------------------------------------\nfloat remap(float i, float a1, float a2, float b1, float b2) {\n  return b1 + (i - a1) * (b2 - b1) / (a2 - a1);\n}\n\nfloat avg(vec3 a) {\n  return (a.r + a.g + a.b) / 3.0;\n}\n\nfloat band(float a, float p) {\n  float ip = 1.0 / p;\n  return floor((a - p) * ip) / ip;\n}\n\nfloat bump(float x, float amplitude, float center, float spread) {\n  return amplitude * (1.0 - pow((x - center) / spread, 2.0));\n}\n\nbool floatEquals(float a, float b, float epsilon) {\n  return abs(a - b) < epsilon;\n}\n\nbool isTransparent(vec4 color) {\n  return floatEquals(color.a, 0.0, 0.01);\n}\n\nbool isBlack(vec4 color) {\n  return (\n    floatEquals(color.r, 0.0, 0.01) &&\n    floatEquals(color.g, 0.0, 0.01) &&\n    floatEquals(color.b, 0.0, 0.01)\n  );\n}\n\n// -----------------------------------------------------------------------------\n// MAIN\n// -----------------------------------------------------------------------------\nstruct SpecularResult\n{\n  vec4 colour;\n  float amount;\n};\n\n// Calculate highlight colour\nvec4 calculateHighlight(float light, float falloff) {\n  vec4 highlightColour = vec4(\n    vec3(clamp(u_lightColour.rgb + HIGHLIGHT_OFFSET, 0.0, 1.0)),\n    u_lightColour.a\n  );\n  float highlightAmount = clamp(\n    band(\n      (0.5 + 0.5 * light) * falloff * highlightColour.a * u_highlightAlpha,\n      SHADING_BANDING\n    ),\n    0.0,\n    1.0\n  );\n\n  return vec4(\n    highlightColour.rgb * highlightAmount,\n    highlightAmount\n  );\n}\n\n// Calculate specular colour and amount\nSpecularResult calculateSpecular(\n  float light,\n  float falloff,\n  float lightDistance,\n  float sceneSpecular\n) {\n  vec4 specularColour = vec4(\n    vec3(clamp(u_lightColour.rgb + SPECULAR_OFFSET, 0.0, 1.0)),\n    1.0\n  );\n  float specularAmount = clamp(\n    band(\n      (0.5 + 0.5 * light) * falloff,\n      SHADING_BANDING\n    ),\n    0.0,\n    1.0\n  );\n  float specularDistance = clamp(bump(\n    lightDistance,\n    SPECULAR_DISTANCE_AMPLITUDE,\n    SPECULAR_DISTANCE_OFFSET,\n    SPECULAR_DISTANCE_SPREAD\n  ), 0.0, 1.0);\n  float specularMixAmount = (\n    sceneSpecular *\n    bump(\n      clamp(light, 0.0, 1.0),\n      SPECULAR_MULTIPLIER,\n      SPECULAR_THRESHOLD,\n      SPECULAR_SPREAD\n    ) *\n    specularDistance *\n    u_specularAlpha\n  );\n\n  vec4 specularResult = vec4(\n    specularColour.rgb * specularAmount,\n    specularAmount\n  );\n\n  return SpecularResult(specularResult, specularMixAmount);\n}\n\n// Calculate shadow colour\nvec4 calculateShadow(float light, float falloff) {\n  vec4 shadowColour = vec4(0.0, 0.0, 0.0, 1.0);\n  float shadowAmount = clamp(\n    band(\n      (0.5 - 0.5 * light) * falloff * u_shadowAlpha,\n      SHADING_BANDING\n    ),\n    0.0,\n    1.0\n  );\n\n  return vec4(shadowColour.rgb * shadowAmount, shadowAmount);\n}\n\n// Fragment shader\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n\n  // We pass in various maps (e.g. normal and specular) for the entire scene,\n  // but we're only interested in the  part of the map under the light's\n  // bounding box\n  vec2 sceneUV = vec2(\n    remap(\n      uv.x,\n      0.0,\n      1.0,\n      u_lightScreenPositionTopLeft.x,\n      u_lightScreenPositionBottomRight.x\n    ),\n    1.0 - remap(\n      uv.y,\n      0.0,\n      1.0,\n      u_lightScreenPositionBottomRight.y,\n      u_lightScreenPositionTopLeft.y\n    )\n  );\n\n  vec4 sceneNormal = texture2D(u_sceneNormalMap, sceneUV);\n  vec4 sceneSpecular = texture2D(u_sceneSpecularMap, sceneUV);\n\n  vec2 lightDirection = normalize(uv - vec2(0.5));\n  vec3 lightNormal = normalize(vec3(\n    lightDirection.x,\n    -lightDirection.y,\n    LIGHT_HEIGHT\n  ));\n\n  // ---------------------------------------------------------------------------\n  // GROUND SHADING\n  // ---------------------------------------------------------------------------\n  vec4 groundMask = texture2D(u_groundMask, sceneUV);\n  if (!isTransparent(groundMask)) {\n    vec4 groundLight = texture2D(u_groundLightMap, uv);\n\n    // We don't need any shading if there's no light on this part of the ground\n    if (isBlack(groundLight)) {\n      gl_FragColor = vec4(0.0);\n      return;\n    }\n\n    // Light intensity\n    float light = -dot(\n      normalize(sceneNormal.rgb - vec3(0.5)),\n      lightNormal\n    );\n\n    // Gradual falloff of light intensity with distance from light\n    float falloff = pow(avg(groundLight.rgb) * SHADING_OFFSET, SHADING_FALLOFF);\n\n    // Highlights\n    if (light >= HIGHLIGHT_THRESHOLD) {\n      vec4 highlightResult = calculateHighlight(light, falloff);\n      SpecularResult specularResult = calculateSpecular(\n        light,\n        falloff,\n        length(uv - vec2(0.5)),\n        sceneSpecular.r\n      );\n\n      gl_FragColor = mix(\n        highlightResult,\n        specularResult.colour,\n        specularResult.amount\n      );\n      return;\n    }\n\n    // Shadows\n    if (light <= SHADOW_THRESHOLD) {\n      gl_FragColor = calculateShadow(light, falloff);\n      return;\n    }\n\n    gl_FragColor = vec4(0.0);\n    return;\n  }\n\n  // ---------------------------------------------------------------------------\n  // WALL LAYER 1 SHADING\n  // ---------------------------------------------------------------------------\n  vec2 wallLightingYOffset = vec2(0.0, u_wallLightingYOffset / u_resolution.y);\n  vec4 wall1Mask = texture2D(u_wall1Mask, sceneUV);\n  if (!isTransparent(wall1Mask)) {\n    vec4 wallLight = texture2D(u_wall1LightMap, uv + wallLightingYOffset);\n\n    // We don't need any shading if there's no light on this part of the wall\n    if (isBlack(wallLight)) {\n      gl_FragColor = vec4(0.0);\n      return;\n    }\n\n    // Light intensity\n    float light = -dot(\n      normalize(sceneNormal.rgb - vec3(0.5, 0.5, 0.5 + WALL_NORMAL_Z_OFFSET)),\n      lightNormal\n    );\n\n    // Gradual falloff of light intensity with distance from light\n    float falloff = pow(avg(wallLight.rgb) * SHADING_OFFSET, SHADING_FALLOFF);\n\n    // Highlights\n    if (light >= HIGHLIGHT_THRESHOLD) {\n      vec4 highlightResult = calculateHighlight(light, falloff);\n      SpecularResult specularResult = calculateSpecular(\n        light,\n        falloff,\n        length(uv - vec2(0.5)),\n        sceneSpecular.r\n      );\n\n      gl_FragColor = mix(\n        highlightResult,\n        specularResult.colour,\n        specularResult.amount\n      );\n      return;\n    }\n\n    // Shadows\n    if (light <= SHADOW_THRESHOLD) {\n      gl_FragColor = calculateShadow(light, falloff);\n      return;\n    }\n\n    gl_FragColor = vec4(0.0);\n    return;\n  }\n\n  // ---------------------------------------------------------------------------\n  // WALL LAYER 2 SHADING\n  // ---------------------------------------------------------------------------\n  vec4 wall2Mask = texture2D(u_wall2Mask, sceneUV);\n  if (!isTransparent(wall2Mask)) {\n    vec4 wallLight = texture2D(u_wall2LightMap, uv + wallLightingYOffset);\n\n    // We don't need any shading if there's no light on this part of the wall\n    if (isBlack(wallLight)) {\n      gl_FragColor = vec4(0.0);\n      return;\n    }\n\n    // Light intensity\n    float light = -dot(\n      normalize(sceneNormal.rgb - vec3(0.5, 0.5, 0.5 + WALL_NORMAL_Z_OFFSET)),\n      lightNormal\n    );\n\n    // Gradual falloff of light intensity with distance from light\n    float falloff = pow(avg(wallLight.rgb) * SHADING_OFFSET, SHADING_FALLOFF);\n\n    // Highlights\n    if (light >= HIGHLIGHT_THRESHOLD) {\n      vec4 highlightResult = calculateHighlight(light, falloff);\n      SpecularResult specularResult = calculateSpecular(\n        light,\n        falloff,\n        length(uv - vec2(0.5)),\n        sceneSpecular.r\n      );\n\n      gl_FragColor = mix(\n        highlightResult,\n        specularResult.colour,\n        specularResult.amount\n      );\n      return;\n    }\n\n    // Shadows\n    if (light <= SHADOW_THRESHOLD) {\n      gl_FragColor = calculateShadow(light, falloff);\n      return;\n    }\n\n    gl_FragColor = vec4(0.0);\n    return;\n  }\n}\n";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFjO0FBRXZCLDhGQUE0QztBQUFuQyxzSEFBVztBQUVwQixrRkFBa0U7QUFBekQsd0hBQWM7QUFBRSwwR0FBTztBQUFFLG9IQUFZO0FBTTlDLDRFQUEwQztBQUFqQyx3SEFBZTtBQUV4Qix5RUFBOEI7QUFBckIsaUdBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWdodGluZy0yZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvci9wYXJzZWNvbG9yLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9ub2RlX21vZHVsZXMvc2hhZGVyLWNhbnZhcy9kaXN0L3NoYWRlci1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvQWN0b3IudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvQ2FzdGVyLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0xpZ2h0LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL0xpZ2h0aW5nU3lzdGVtLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL1NjZW5lT2JqZWN0LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkLy4vc3JjL2xpZ2h0aW5nL1N1cmZhY2UudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvLi9zcmMvbGlnaHRpbmcvV2FsbC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9tZXJnZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy91dGlsaXRpZXMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpZ2h0aW5nLTJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWdodGluZy0yZC8uL3NyYy9saWdodGluZy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMaWdodGluZzJEXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxpZ2h0aW5nMkRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLypcclxuXHJcblBhcnNlIGEgdmFsaWQgQ1NTIGNvbG9yIHN0cmluZyBpbnRvIGFuIG9iamVjdCBsaWtlOiB7IHIsIGcsIGIsIGEgfVxyXG5Qcm9wZXJ0aWVzIHdpbGwgaGF2ZSB0aGUgY29ycmVjdCBpbnRlcnZhbCBhbmQgcHJlY2lzaW9uLlxyXG5WYWxpZCBpbnB1dCBleGFtcGxlczpcclxuXHJcbnJlZFxyXG4jZjAwXHJcbiNmZjAwMDBcclxuI2ZmMDAwMGZmXHJcbnJnYigyNTUsIDAsIDApXHJcbnJnYigxMDAlLCAwJSwgMCUpXHJcbnJnYmEoMjU1LCAwLCAwLCAxKVxyXG5yZ2JhKDEwMCUsIDAlLCAwJSwgMSlcclxuaHNsKDAsIDEwMCUsIDUwJSlcclxuaHNsYSgwLCAxMDAlLCA1MCUsIDEpXHJcblxyXG4qL1xyXG5jb25zdCBwYXJzZUNvbG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IG5hbWVzID0ge1xyXG5cdFx0XCJhbGljZWJsdWVcIjogXCJmMGY4ZmZcIixcclxuXHRcdFwiYW50aXF1ZXdoaXRlXCI6IFwiZmFlYmQ3XCIsXHJcblx0XHRcImFxdWFcIjogXCIwZmZcIixcclxuXHRcdFwiYXF1YW1hcmluZVwiOiBcIjdmZmZkNFwiLFxyXG5cdFx0XCJhenVyZVwiOiBcImYwZmZmZlwiLFxyXG5cdFx0XCJiZWlnZVwiOiBcImY1ZjVkY1wiLFxyXG5cdFx0XCJiaXNxdWVcIjogXCJmZmU0YzRcIixcclxuXHRcdFwiYmxhY2tcIjogXCIwMDBcIixcclxuXHRcdFwiYmxhbmNoZWRhbG1vbmRcIjogXCJmZmViY2RcIixcclxuXHRcdFwiYmx1ZVwiOiBcIjAwZlwiLFxyXG5cdFx0XCJibHVldmlvbGV0XCI6IFwiOGEyYmUyXCIsXHJcblx0XHRcImJyb3duXCI6IFwiYTUyYTJhXCIsXHJcblx0XHRcImJ1cmx5d29vZFwiOiBcImRlYjg4N1wiLFxyXG5cdFx0XCJjYWRldGJsdWVcIjogXCI1ZjllYTBcIixcclxuXHRcdFwiY2hhcnRyZXVzZVwiOiBcIjdmZmYwMFwiLFxyXG5cdFx0XCJjaG9jb2xhdGVcIjogXCJkMjY5MWVcIixcclxuXHRcdFwiY29yYWxcIjogXCJmZjdmNTBcIixcclxuXHRcdFwiY29ybmZsb3dlcmJsdWVcIjogXCI2NDk1ZWRcIixcclxuXHRcdFwiY29ybnNpbGtcIjogXCJmZmY4ZGNcIixcclxuXHRcdFwiY3JpbXNvblwiOiBcImRjMTQzY1wiLFxyXG5cdFx0XCJjeWFuXCI6IFwiMGZmXCIsXHJcblx0XHRcImRhcmtibHVlXCI6IFwiMDAwMDhiXCIsXHJcblx0XHRcImRhcmtjeWFuXCI6IFwiMDA4YjhiXCIsXHJcblx0XHRcImRhcmtnb2xkZW5yb2RcIjogXCJiODg2MGJcIixcclxuXHRcdFwiZGFya2dyYXlcIjogXCJhOWE5YTlcIixcclxuXHRcdFwiZGFya2dyZWVuXCI6IFwiMDA2NDAwXCIsXHJcblx0XHRcImRhcmtncmV5XCI6IFwiYTlhOWE5XCIsXHJcblx0XHRcImRhcmtraGFraVwiOiBcImJkYjc2YlwiLFxyXG5cdFx0XCJkYXJrbWFnZW50YVwiOiBcIjhiMDA4YlwiLFxyXG5cdFx0XCJkYXJrb2xpdmVncmVlblwiOiBcIjU1NmIyZlwiLFxyXG5cdFx0XCJkYXJrb3JhbmdlXCI6IFwiZmY4YzAwXCIsXHJcblx0XHRcImRhcmtvcmNoaWRcIjogXCI5OTMyY2NcIixcclxuXHRcdFwiZGFya3JlZFwiOiBcIjhiMDAwMFwiLFxyXG5cdFx0XCJkYXJrc2FsbW9uXCI6IFwiZTk5NjdhXCIsXHJcblx0XHRcImRhcmtzZWFncmVlblwiOiBcIjhmYmM4ZlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVibHVlXCI6IFwiNDgzZDhiXCIsXHJcblx0XHRcImRhcmtzbGF0ZWdyYXlcIjogXCIyZjRmNGZcIixcclxuXHRcdFwiZGFya3NsYXRlZ3JleVwiOiBcIjJmNGY0ZlwiLFxyXG5cdFx0XCJkYXJrdHVycXVvaXNlXCI6IFwiMDBjZWQxXCIsXHJcblx0XHRcImRhcmt2aW9sZXRcIjogXCI5NDAwZDNcIixcclxuXHRcdFwiZGVlcHBpbmtcIjogXCJmZjE0OTNcIixcclxuXHRcdFwiZGVlcHNreWJsdWVcIjogXCIwMGJmZmZcIixcclxuXHRcdFwiZGltZ3JheVwiOiBcIjY5Njk2OVwiLFxyXG5cdFx0XCJkaW1ncmV5XCI6IFwiNjk2OTY5XCIsXHJcblx0XHRcImRvZGdlcmJsdWVcIjogXCIxZTkwZmZcIixcclxuXHRcdFwiZmlyZWJyaWNrXCI6IFwiYjIyMjIyXCIsXHJcblx0XHRcImZsb3JhbHdoaXRlXCI6IFwiZmZmYWYwXCIsXHJcblx0XHRcImZvcmVzdGdyZWVuXCI6IFwiMjI4YjIyXCIsXHJcblx0XHRcImZ1Y2hzaWFcIjogXCJmMGZcIixcclxuXHRcdFwiZ2FpbnNib3JvXCI6IFwiZGNkY2RjXCIsXHJcblx0XHRcImdob3N0d2hpdGVcIjogXCJmOGY4ZmZcIixcclxuXHRcdFwiZ29sZFwiOiBcImZmZDcwMFwiLFxyXG5cdFx0XCJnb2xkZW5yb2RcIjogXCJkYWE1MjBcIixcclxuXHRcdFwiZ3JheVwiOiBcIjgwODA4MFwiLFxyXG5cdFx0XCJncmVlblwiOiBcIjAwODAwMFwiLFxyXG5cdFx0XCJncmVlbnllbGxvd1wiOiBcImFkZmYyZlwiLFxyXG5cdFx0XCJncmV5XCI6IFwiODA4MDgwXCIsXHJcblx0XHRcImhvbmV5ZGV3XCI6IFwiZjBmZmYwXCIsXHJcblx0XHRcImhvdHBpbmtcIjogXCJmZjY5YjRcIixcclxuXHRcdFwiaW5kaWFucmVkXCI6IFwiY2Q1YzVjXCIsXHJcblx0XHRcImluZGlnb1wiOiBcIjRiMDA4MlwiLFxyXG5cdFx0XCJpdm9yeVwiOiBcImZmZmZmMFwiLFxyXG5cdFx0XCJraGFraVwiOiBcImYwZTY4Y1wiLFxyXG5cdFx0XCJsYXZlbmRlclwiOiBcImU2ZTZmYVwiLFxyXG5cdFx0XCJsYXZlbmRlcmJsdXNoXCI6IFwiZmZmMGY1XCIsXHJcblx0XHRcImxhd25ncmVlblwiOiBcIjdjZmMwMFwiLFxyXG5cdFx0XCJsZW1vbmNoaWZmb25cIjogXCJmZmZhY2RcIixcclxuXHRcdFwibGlnaHRibHVlXCI6IFwiYWRkOGU2XCIsXHJcblx0XHRcImxpZ2h0Y29yYWxcIjogXCJmMDgwODBcIixcclxuXHRcdFwibGlnaHRjeWFuXCI6IFwiZTBmZmZmXCIsXHJcblx0XHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFwiZmFmYWQyXCIsXHJcblx0XHRcImxpZ2h0Z3JheVwiOiBcImQzZDNkM1wiLFxyXG5cdFx0XCJsaWdodGdyZWVuXCI6IFwiOTBlZTkwXCIsXHJcblx0XHRcImxpZ2h0Z3JleVwiOiBcImQzZDNkM1wiLFxyXG5cdFx0XCJsaWdodHBpbmtcIjogXCJmZmI2YzFcIixcclxuXHRcdFwibGlnaHRzYWxtb25cIjogXCJmZmEwN2FcIixcclxuXHRcdFwibGlnaHRzZWFncmVlblwiOiBcIjIwYjJhYVwiLFxyXG5cdFx0XCJsaWdodHNreWJsdWVcIjogXCI4N2NlZmFcIixcclxuXHRcdFwibGlnaHRzbGF0ZWdyYXlcIjogXCI3ODlcIixcclxuXHRcdFwibGlnaHRzbGF0ZWdyZXlcIjogXCI3ODlcIixcclxuXHRcdFwibGlnaHRzdGVlbGJsdWVcIjogXCJiMGM0ZGVcIixcclxuXHRcdFwibGlnaHR5ZWxsb3dcIjogXCJmZmZmZTBcIixcclxuXHRcdFwibGltZVwiOiBcIjBmMFwiLFxyXG5cdFx0XCJsaW1lZ3JlZW5cIjogXCIzMmNkMzJcIixcclxuXHRcdFwibGluZW5cIjogXCJmYWYwZTZcIixcclxuXHRcdFwibWFnZW50YVwiOiBcImYwZlwiLFxyXG5cdFx0XCJtYXJvb25cIjogXCI4MDAwMDBcIixcclxuXHRcdFwibWVkaXVtYXF1YW1hcmluZVwiOiBcIjY2Y2RhYVwiLFxyXG5cdFx0XCJtZWRpdW1ibHVlXCI6IFwiMDAwMGNkXCIsXHJcblx0XHRcIm1lZGl1bW9yY2hpZFwiOiBcImJhNTVkM1wiLFxyXG5cdFx0XCJtZWRpdW1wdXJwbGVcIjogXCI5MzcwZGJcIixcclxuXHRcdFwibWVkaXVtc2VhZ3JlZW5cIjogXCIzY2IzNzFcIixcclxuXHRcdFwibWVkaXVtc2xhdGVibHVlXCI6IFwiN2I2OGVlXCIsXHJcblx0XHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFwiMDBmYTlhXCIsXHJcblx0XHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBcIjQ4ZDFjY1wiLFxyXG5cdFx0XCJtZWRpdW12aW9sZXRyZWRcIjogXCJjNzE1ODVcIixcclxuXHRcdFwibWlkbmlnaHRibHVlXCI6IFwiMTkxOTcwXCIsXHJcblx0XHRcIm1pbnRjcmVhbVwiOiBcImY1ZmZmYVwiLFxyXG5cdFx0XCJtaXN0eXJvc2VcIjogXCJmZmU0ZTFcIixcclxuXHRcdFwibW9jY2FzaW5cIjogXCJmZmU0YjVcIixcclxuXHRcdFwibmF2YWpvd2hpdGVcIjogXCJmZmRlYWRcIixcclxuXHRcdFwibmF2eVwiOiBcIjAwMDA4MFwiLFxyXG5cdFx0XCJvbGRsYWNlXCI6IFwiZmRmNWU2XCIsXHJcblx0XHRcIm9saXZlXCI6IFwiODA4MDAwXCIsXHJcblx0XHRcIm9saXZlZHJhYlwiOiBcIjZiOGUyM1wiLFxyXG5cdFx0XCJvcmFuZ2VcIjogXCJmZmE1MDBcIixcclxuXHRcdFwib3JhbmdlcmVkXCI6IFwiZmY0NTAwXCIsXHJcblx0XHRcIm9yY2hpZFwiOiBcImRhNzBkNlwiLFxyXG5cdFx0XCJwYWxlZ29sZGVucm9kXCI6IFwiZWVlOGFhXCIsXHJcblx0XHRcInBhbGVncmVlblwiOiBcIjk4ZmI5OFwiLFxyXG5cdFx0XCJwYWxldHVycXVvaXNlXCI6IFwiYWZlZWVlXCIsXHJcblx0XHRcInBhbGV2aW9sZXRyZWRcIjogXCJkYjcwOTNcIixcclxuXHRcdFwicGFwYXlhd2hpcFwiOiBcImZmZWZkNVwiLFxyXG5cdFx0XCJwZWFjaHB1ZmZcIjogXCJmZmRhYjlcIixcclxuXHRcdFwicGVydVwiOiBcImNkODUzZlwiLFxyXG5cdFx0XCJwaW5rXCI6IFwiZmZjMGNiXCIsXHJcblx0XHRcInBsdW1cIjogXCJkZGEwZGRcIixcclxuXHRcdFwicG93ZGVyYmx1ZVwiOiBcImIwZTBlNlwiLFxyXG5cdFx0XCJwdXJwbGVcIjogXCI4MDAwODBcIixcclxuXHRcdFwicmViZWNjYXB1cnBsZVwiOiBcIjYzOVwiLFxyXG5cdFx0XCJyZWRcIjogXCJmMDBcIixcclxuXHRcdFwicm9zeWJyb3duXCI6IFwiYmM4ZjhmXCIsXHJcblx0XHRcInJveWFsYmx1ZVwiOiBcIjQxNjllMVwiLFxyXG5cdFx0XCJzYWRkbGVicm93blwiOiBcIjhiNDUxM1wiLFxyXG5cdFx0XCJzYWxtb25cIjogXCJmYTgwNzJcIixcclxuXHRcdFwic2FuZHlicm93blwiOiBcImY0YTQ2MFwiLFxyXG5cdFx0XCJzZWFncmVlblwiOiBcIjJlOGI1N1wiLFxyXG5cdFx0XCJzZWFzaGVsbFwiOiBcImZmZjVlZVwiLFxyXG5cdFx0XCJzaWVubmFcIjogXCJhMDUyMmRcIixcclxuXHRcdFwic2lsdmVyXCI6IFwiYzBjMGMwXCIsXHJcblx0XHRcInNreWJsdWVcIjogXCI4N2NlZWJcIixcclxuXHRcdFwic2xhdGVibHVlXCI6IFwiNmE1YWNkXCIsXHJcblx0XHRcInNsYXRlZ3JheVwiOiBcIjcwODA5MFwiLFxyXG5cdFx0XCJzbGF0ZWdyZXlcIjogXCI3MDgwOTBcIixcclxuXHRcdFwic25vd1wiOiBcImZmZmFmYVwiLFxyXG5cdFx0XCJzcHJpbmdncmVlblwiOiBcIjAwZmY3ZlwiLFxyXG5cdFx0XCJzdGVlbGJsdWVcIjogXCI0NjgyYjRcIixcclxuXHRcdFwidGFuXCI6IFwiZDJiNDhjXCIsXHJcblx0XHRcInRlYWxcIjogXCIwMDgwODBcIixcclxuXHRcdFwidGhpc3RsZVwiOiBcImQ4YmZkOFwiLFxyXG5cdFx0XCJ0b21hdG9cIjogXCJmZjYzNDdcIixcclxuXHRcdFwidHVycXVvaXNlXCI6IFwiNDBlMGQwXCIsXHJcblx0XHRcInZpb2xldFwiOiBcImVlODJlZVwiLFxyXG5cdFx0XCJ3aGVhdFwiOiBcImY1ZGViM1wiLFxyXG5cdFx0XCJ3aGl0ZVwiOiBcImZmZlwiLFxyXG5cdFx0XCJ3aGl0ZXNtb2tlXCI6IFwiZjVmNWY1XCIsXHJcblx0XHRcInllbGxvd1wiOiBcImZmMFwiLFxyXG5cdFx0XCJ5ZWxsb3dncmVlblwiOiBcIjlhY2QzMlwiLFxyXG5cdFx0XCJ0cmFuc3BhcmVudFwiOiBcIjAwMDAwMDAwXCJcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGNsYW1wID0gKG4sIGEsIGIpID0+IG4gPCBhID8gYSA6IChuID4gYiA/IGIgOiBuKSxcdC8vIENsYW1wIG4gaW4gaW50ZXJ2YWwgW2EsIGJdXHJcblx0XHRyb3VuZCA9IChuLCBkKSA9PiB7XHQvLyBSb3VuZCBuIHRvIG5lYXJlc3QgaW50ZWdlciwgb3IgdG8gZCBkZWNpbWFsIHBsYWNlcyAoaWYgZCBpcyBkZWZpbmVkKVxyXG5cdFx0XHR2YXIgcCA9IE1hdGgucG93KDEwLCBkIHx8IDApO1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5yb3VuZChuICogcCkgLyBwO1xyXG5cdFx0fSxcclxuXHRcdGhpID0gbiA9PiBjbGFtcChwYXJzZUludChuLCAxNiksIDAsIDI1NSksXHQvLyBDb252ZXJ0IDItZGlnaXQgaGV4IHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0aGYgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSwgMiksIDAsIDEpLFx0Ly8gQ29udmVydCAyLWRpZ2l0IGhleCB0byBmbG9hdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXMgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRzaSA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSksIDAsIDI1NSksXHQvLyBDb252ZXJ0IHN0cmluZyB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdHNmID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pLCAyKSwgMCwgMSksXHQvLyBDb252ZXJ0IHN0cmluZyB0byBmbG9hdCB3aXRoIDIgZGVjaW1hbCBwbGFjZXMgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRwaSA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSAvIDEwMCAqIDI1NSksIDAsIDI1NSksXHQvLyBDb252ZXJ0IHBlcmNlbnRhZ2Ugc3RyaW5nIHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0dWYgPSBuID0+IGNsYW1wKHBhcnNlRmxvYXQobikgLyAzNjAsIDAsIDEpLFx0Ly8gQ29udmVydCBodWUgc3RyaW5nIHRvIGZsb2F0IGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0cGYgPSBuID0+IGNsYW1wKHBhcnNlRmxvYXQobikgLyAxMDAsIDAsIDEpO1x0Ly8gQ29udmVydCBwZXJjZW50YWdlIHN0cmluZyB0byBmbG9hdCBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcclxuXHQvLyBDb252ZXJ0IGhzbCB0byByZ2IsIGFscGhhIHZhbHVlIGdldHMgcGFzc2VkIHN0cmFpZ2h0IHRocm91Z2hcclxuXHQvLyBoLCBzLCBsIHZhbHVlcyBhcmUgYXNzdW1lZCB0byBiZSBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHQvLyBSZXR1cm5zIGFuIG9iamVjdCBsaWtlIHsgciwgZywgYiwgYSB9XHJcblx0Ly8gaHR0cDovL2F4b25mbHV4LmNvbS9oYW5keS1yZ2ItdG8taHNsLWFuZC1yZ2ItdG8taHN2LWNvbG9yLW1vZGVsLWNcclxuXHRmdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsLCBhKSB7XHJcblx0XHR2YXIgciwgZywgYixcclxuXHRcdFx0aHVlID0gZnVuY3Rpb24ocCwgcSwgdCkge1xyXG5cdFx0XHRcdGlmICh0IDwgMCkgeyB0ICs9IDE7IH1cclxuXHRcdFx0XHRpZiAodCA+IDEpIHsgdCAtPSAxOyB9XHJcblx0XHRcdFx0aWYgKHQgPCAxIC8gNikgeyByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdCB9O1xyXG5cdFx0XHRcdGlmICh0IDwgMSAvIDIpIHsgcmV0dXJuIHE7IH1cclxuXHRcdFx0XHRpZiAodCA8IDIgLyAzKSB7IHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNiB9O1xyXG5cdFx0XHRcdHJldHVybiBwO1xyXG5cdFx0XHR9O1xyXG5cdFx0aWYgKHMgPT0gMCkge1xyXG5cdFx0XHRyID0gZyA9IGIgPSBsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzLFxyXG5cdFx0XHRcdHAgPSAyICogbCAtIHE7XHJcblx0XHRcdHIgPSBodWUocCwgcSwgaCArIDEgLyAzKTtcclxuXHRcdFx0ZyA9IGh1ZShwLCBxLCBoKTtcclxuXHRcdFx0YiA9IGh1ZShwLCBxLCBoIC0gMSAvIDMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHsgcjogcm91bmQociAqIDI1NSksIGc6IHJvdW5kKGcgKiAyNTUpLCBiOiByb3VuZChiICogMjU1KSwgYTogYSB9O1xyXG5cdH1cclxuXHRyZXR1cm4gZnVuY3Rpb24oYykge1xyXG5cdFx0dmFyIG8gPSB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAgfSwgbSA9IG51bGw7XHJcblx0XHRpZiAodHlwZW9mIGMgPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRpZiAoYyBpbiBuYW1lcykgeyBjID0gXCIjXCIgKyBuYW1lc1tjXTsgfVxyXG5cdFx0XHRpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldKShbYS1mMC05XSkoW2EtZjAtOV0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdICsgbVsxXSksIGc6IGhpKG1bMl0gKyBtWzJdKSwgYjogaGkobVszXSArIG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdKSwgZzogaGkobVsyXSksIGI6IGhpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC8jKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSksIGc6IGhpKG1bMl0pLCBiOiBoaShtWzNdKSwgYTogaGYobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2kobVsxXSksIGc6IHNpKG1bMl0pLCBiOiBzaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBwaShtWzFdKSwgZzogcGkobVsyXSksIGI6IHBpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2kobVsxXSksIGc6IHNpKG1bMl0pLCBiOiBzaShtWzNdKSwgYTogc2YobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYmFcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBwaShtWzFdKSwgZzogcGkobVsyXSksIGI6IHBpKG1bM10pLCBhOiBzZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvaHNsXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/KVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihtWzFdKSwgcGYobVsyXSksIHBmKG1bM10pLCAxKTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL2hzbGFcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8pXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihtWzFdKSwgcGYobVsyXSksIHBmKG1bM10pLCBzZihtWzRdKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGMgPT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRpZiAoYy5yICE9PSB1bmRlZmluZWQgJiYgYy5nICE9IHVuZGVmaW5lZCAmJiBjLmIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKGMuciksIGc6IHNpKGMuZyksIGI6IHNpKGMuYiksIGE6IHNmKGMuYSB8fCAxKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGMuaCAhPT0gdW5kZWZpbmVkICYmIGMucyAhPT0gdW5kZWZpbmVkICYmIGMubCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKGMuaCksIHBmKGMucyksIHBmKGMubCksIHNmKGMuYSB8fCAxKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvO1xyXG5cdH07XHJcbn0oKSk7XHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHsgcGFyc2VDb2xvciB9O1xyXG59XHJcbiIsIi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIE51bWJlciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXIgYlxuICogQHBhcmFtIHtudW1iZXJ9IFtwPU51bWJlci5FUFNJTE9OXSBUaGUgcHJlY2lzaW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG51bWJlcnMgYSBhbmQgYiBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICovXG5jb25zdCBmbG9hdEVxdWFscyA9IChhLCBiLCBwID0gTnVtYmVyLkVQU0lMT04pID0+IE1hdGguYWJzKGEgLSBiKSA8IHA7XG5cbi8qKlxuICogQ2xhbXAgYSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciB0byBjbGFtcFxuICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gVGhlIG1pbmltdW0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIFRoZSBtYXhpbXVtIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgY2xhbXBlZCBudW1iZXJcbiAqL1xuY29uc3QgY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG5cbi8qKlxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgZnJvbSB3aGljaCB0byBnZXQgdGhlIGZyYWN0aW9uYWwgcGFydFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcbiAqL1xuY29uc3QgZnJhYyA9IGEgPT4gYSA+PSAwID8gYSAtIE1hdGguZmxvb3IoYSkgOiBhIC0gTWF0aC5jZWlsKGEpO1xuXG4vKipcbiAqIFJvdW5kIG4gdG8gZCBkZWNpbWFsIHBsYWNlc1xuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byByb3VuZFxuICogQHBhcmFtIHtudW1iZXJ9IFtkPTBdIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gcm91bmQgdG9cbiAqIEByZXR1cm4ge251bWJlcn0gQSByb3VuZGVkIG51bWJlclxuICovXG5jb25zdCByb3VuZCA9IChuLCBkID0gMCkgPT4ge1xuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIGQpO1xuICByZXR1cm4gTWF0aC5yb3VuZChuICogcCArIE51bWJlci5FUFNJTE9OKSAvIHA7XG59XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xuXG4vKipcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMCBUb3AtcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaXggSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB4XG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXG4gKi9cbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3QgcmVtYXAgPSAoaSwgYTEsIGEyLCBiMSwgYjIpID0+IGIxICsgKGkgLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG5cbi8qKlxuICogRG8gYSBzbW9vdGggaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBzbW9vdGhzdGVwID0gKGEsIGIsIGkpID0+IGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKi9cbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5jb25zdCByYW5kb21JbnRCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0yXSBUaGUgbnVtYmVyIG9mIHNhbXBsZXNcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbSA9IChtdSA9IDAuNSwgc2lnbWEgPSAwLjUsIHNhbXBsZXMgPSAyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XG4gICAgdG90YWwgKz0gTWF0aC5yYW5kb20oKTtcbiAgfVxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XG59O1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB3IEFuIGFycmF5IG9mIHdlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XG4gKi9cbmNvbnN0IHdlaWdodGVkUmFuZG9tID0gdyA9PiB7XG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICB3aGlsZSAodG90YWwgPiByKSB7XG4gICAgdG90YWwgLT0gd1tuKytdO1xuICB9XG4gIHJldHVybiBuIC0gMTtcbn07XG5cbi8qKlxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxuICogQGNhbGxiYWNrIEludGVycG9sYXRpb25GdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuXG4vKipcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQSBudW1iZXIgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHBhcmFtIHtJbnRlcnBvbGF0aW9uRnVuY3Rpb259IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxuICovXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcbiAgY29uc3QgcCA9IGNsYW1wKE1hdGgudHJ1bmMocyksIDAsIGEubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuXG4vKipcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHJldHVybiB7bnVtYmVyfSBhIVxuICovXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xuICAgIHJlc3VsdCAqPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxuICovXG5jb25zdCBucHIgPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gZmFjdG9yaWFsKG4gLSByKTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuQ3JcbiAqL1xuY29uc3QgbmNyID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbGwgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY29tYmluYXRpb25zKFsxLCAyLCAzXSwgMik7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCAyXSxcbiAqICAgWzEsIDNdLFxuICogICBbMiwgM11cbiAqIF1cbiAqIGBgYFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBjaG9vc2UgaW4gZWFjaCBjb21iaW5hdGlvblxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBjb21iaW5hdGlvbiBhcnJheXNcbiAqL1xuY29uc3QgY29tYmluYXRpb25zID0gKGEsIHIpID0+IHtcbiAgaWYgKHIgPT09IDEpIHtcbiAgICByZXR1cm4gYS5tYXAoaXRlbSA9PiBbaXRlbV0pO1xuICB9XG5cbiAgcmV0dXJuIGEucmVkdWNlKFxuICAgIChhY2MsIGl0ZW0sIGkpID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLmNvbWJpbmF0aW9ucyhhLnNsaWNlKGkgKyAxKSwgciAtIDEpLm1hcChjID0+IFtpdGVtLCAuLi5jXSksXG4gICAgXSxcbiAgICBbXVxuICApO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjYXJ0ZXNpYW4gcHJvZHVjdCBvZiBhcnJheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNhcnRlc2lhbihbMSwgMiwgM10sIFsnYScsICdiJ10pO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgXCJhXCJdLFxuICogICBbMSwgXCJiXCJdLFxuICogICBbMiwgXCJhXCJdLFxuICogICBbMiwgXCJiXCJdLFxuICogICBbMywgXCJhXCJdLFxuICogICBbMywgXCJiXCJdXG4gKiBdXG4gKiBgYGBcbiAqL1xuY29uc3QgY2FydGVzaWFuID0gKC4uLmFycikgPT5cbiAgYXJyLnJlZHVjZShcbiAgICAoYSwgYikgPT4gYS5mbGF0TWFwKGMgPT4gYi5tYXAoZCA9PiBbLi4uYywgZF0pKSxcbiAgICBbW11dXG4gICk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhcnJheSB2YWx1ZXNcbiAqIEBjYWxsYmFjayBUaW1lc0Z1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IFRoZSBhcnJheSB2YWx1ZVxuICovXG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHtUaW1lc0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxuICovXG5jb25zdCB0aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgbnVtYmVycyAwLT4obiAtIDEpXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcbiAqL1xuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XG5cbi8qKlxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBiXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XG4gKi9cbmNvbnN0IHppcCA9IChhLCBiKSA9PiBhLm1hcCgoaywgaSkgPT4gW2ssIGJbaV1dKTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXlbaV0gd2l0aCBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgd3JhcHBpbmdcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gQW4gZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkgd2l0aG91dCByZW1vdmluZyBpdFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHJldHVybiB7Kn0gVGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBwZWVrID0gKGEpID0+IHtcbiAgaWYgKCFhLmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gYVthLmxlbmd0aCAtIDFdO1xufTtcblxuLyoqXG4gKiBDaG9wIGFuIGFycmF5IGludG8gY2h1bmtzIG9mIHNpemUgblxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXkgY2h1bmtzXG4gKi9cbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuXG4vKipcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcbiAqL1xuY29uc3Qgc2h1ZmZsZSA9IGEgPT4gYS5zbGljZSgpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbi8qKlxuICogRmxhdHRlbiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uY2F0ZW5hdG9yIFRoZSBzdHJpbmcgdG8gdXNlIGZvciBjb25jYXRlbmF0aW5nIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQSBmbGF0dGVuZWQgb2JqZWN0XG4gKi9cbmNvbnN0IGZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKG9ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9ba2V5XSAhPT0gJ29iamVjdCcgfHwgIW9ba2V5XSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogb1trZXldLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZmxhdHRlbmVkID0gZmxhdChvW2tleV0sIGNvbmNhdGVuYXRvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5yZWR1Y2UoXG4gICAgICAgIChjaGlsZEFjYywgY2hpbGRLZXkpID0+ICh7XG4gICAgICAgICAgLi4uY2hpbGRBY2MsXG4gICAgICAgICAgW2Ake2tleX0ke2NvbmNhdGVuYXRvcn0ke2NoaWxkS2V5fWBdOiBmbGF0dGVuZWRbY2hpbGRLZXldLFxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgICksXG4gICAgfTtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBVbmZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIGNoZWNrIGZvciBpbiBjb25jYXRlbmF0ZWQga2V5c1xuICogQHJldHVybiB7b2JqZWN0fSBBbiB1bi1mbGF0dGVuZWQgb2JqZWN0XG4gKi9cbmNvbnN0IHVuZmxhdCA9IChvLCBjb25jYXRlbmF0b3IgPSAnLicpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9LCB0ZW1wLCBzdWJzdHJpbmdzLCBwcm9wZXJ0eSwgaTtcblxuICBmb3IgKHByb3BlcnR5IGluIG8pIHtcbiAgICBzdWJzdHJpbmdzID0gcHJvcGVydHkuc3BsaXQoY29uY2F0ZW5hdG9yKTtcbiAgICB0ZW1wID0gcmVzdWx0O1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKCEoc3Vic3RyaW5nc1tpXSBpbiB0ZW1wKSkge1xuICAgICAgICBpZiAoaXNGaW5pdGUoc3Vic3RyaW5nc1tpICsgMV0pKSB7XG4gICAgICAgICAgdGVtcFtzdWJzdHJpbmdzW2ldXSA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGVtcCA9IHRlbXBbc3Vic3RyaW5nc1tpXV07XG4gICAgfVxuICAgIHRlbXBbc3Vic3RyaW5nc1tzdWJzdHJpbmdzLmxlbmd0aCAtIDFdXSA9IG9bcHJvcGVydHldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQSBzcGxpdCBwcmVkaWNhdGVcbiAqIEBjYWxsYmFjayBTcGxpdFByZWRpY2F0ZVxuICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcnJheSBzaG91bGQgc3BsaXQgYXQgdGhpcyBpbmRleFxuICovXG5cbi8qKlxuICogU3BsaXQgYW4gYXJyYXkgaW50byBzdWItYXJyYXlzIGJhc2VkIG9uIGEgcHJlZGljYXRlXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnJheVxuICogQHBhcmFtIHtTcGxpdFByZWRpY2F0ZX0gcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5c1xuICovXG5jb25zdCBzcGxpdCA9IChhcnJheSwgcHJlZGljYXRlKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBsZXQgY3VycmVudCA9IFtdO1xuICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFycmF5KSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBbdmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChjdXJyZW50KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQbHVjayBrZXlzIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IGtleXMgVGhlIGtleXMgdG8gcGx1Y2sgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwbHVja2VkIGtleXNcbiAqL1xuY29uc3QgcGx1Y2sgPSAobywgLi4ua2V5cykgPT4ge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwga2V5KSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBba2V5XTogb1trZXldIH0pLFxuICAgIHt9XG4gICk7XG59O1xuXG4vKipcbiAqIEV4Y2x1ZGUga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBrZXlzIGV4Y2VwdCBleGNsdWRlZCBrZXlzXG4gKi9cbmNvbnN0IGV4Y2x1ZGUgPSAobywgLi4ua2V5cykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKG8pLmZpbHRlcigoW2tleV0pID0+ICFrZXlzLmluY2x1ZGVzKGtleSkpXG4gICk7XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmxvYXRFcXVhbHMsXG4gICAgY2xhbXAsXG4gICAgZnJhYyxcbiAgICByb3VuZCxcbiAgICBsZXJwLFxuICAgIHVubGVycCxcbiAgICBibGVycCxcbiAgICByZW1hcCxcbiAgICBzbW9vdGhzdGVwLFxuICAgIHJhZGlhbnMsXG4gICAgZGVncmVlcyxcbiAgICByYW5kb21CZXR3ZWVuLFxuICAgIHJhbmRvbUludEJldHdlZW4sXG4gICAgY2x0UmFuZG9tLFxuICAgIGNsdFJhbmRvbUludCxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcbiAgICBsZXJwQXJyYXksXG4gICAgZG90LFxuICAgIGZhY3RvcmlhbCxcbiAgICBucHIsXG4gICAgbmNyLFxuICAgIGNvbWJpbmF0aW9ucyxcbiAgICBjYXJ0ZXNpYW4sXG4gICAgdGltZXMsXG4gICAgcmFuZ2UsXG4gICAgemlwLFxuICAgIGF0LFxuICAgIHBlZWssXG4gICAgY2h1bmssXG4gICAgc2h1ZmZsZSxcbiAgICBmbGF0LFxuICAgIHVuZmxhdCxcbiAgICBzcGxpdCxcbiAgICBwbHVjayxcbiAgICBleGNsdWRlLFxuICB9O1xufVxuIiwiY29uc3QgeyB0aW1lcywgY2h1bmssIGRvdCB9ID0gcmVxdWlyZSgnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnKTtcblxuLyoqXG4gKiBAb3ZlcnZpZXcgQSBzbWFsbCB2ZWN0b3IgYW5kIG1hdHJpeCBsaWJyYXJ5XG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBBIG5ldyB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMoMywgMik7ICAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjKDQpOyAgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMoKTsgICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XG4gIHsgeDogMCwgeTogMCB9IDogKHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XG4gICAgeyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfSA6ICh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCA/XG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxuICApXG4pO1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKi9cbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMCwgMSlcbiAqL1xudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcbiAqL1xudmVjLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyBiLngsIHk6IGEueSArIGIueSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKiBiXG4gKi9cbnZlYy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogYiwgeTogYS55ICogYiB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAtIGJcbiAqL1xudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWN9IF5hXG4gKi9cbnZlYy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlY30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMucm90ID0gKGEsIHIpID0+IHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcbiAgICBjID0gTWF0aC5jb3Mocik7XG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjdG9yTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjdG9yTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogQSBtYXRyaXhcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcbiAqL1xuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xuICBtLCBuLFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXG59KTtcblxuLyoqXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcbiAqL1xubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcblxuLyoqXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXG4gKi9cbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcblxuLyoqXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcbiAqL1xubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xuXG4vKipcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LnJvdyA9IChhLCBtKSA9PiB7XG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5jb2wgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bCA9IChhLCBiKSA9PiB7XG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFNjYWxlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcbiAqL1xubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XG5cbi8qKlxuICogVHJhbnNwb3NlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XG4gKi9cbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCB0aW1lcyhpID0+IG1hdC5jb2woYSwgKGkgKyAxKSksIGEubikuZmxhdCgpKTtcblxuLyoqXG4gKiBHZXQgdGhlIG1pbm9yIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBlbnRyaWVzID0gW107XG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcmV0dXJuIHtudW1iZXJ8Ym9vbGVhbn0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQuZGV0ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGEubSA9PT0gMSkge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF07XG4gIH1cbiAgaWYgKGEubSA9PT0gMikge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XG4gIH1cbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XG4gICAgc2lnbiAqPSAtMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59O1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBeYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm5vciA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICByZXR1cm4gbWF0Lm1hcChhLCBpID0+IGkgKiBkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcbiAqIEByZXR1cm4ge21hdH0gVGhlIGFkanVnYXRlIG9mIGFcbiAqL1xubWF0LmFkaiA9IGEgPT4ge1xuICBjb25zdCBtaW5vcnMgPSBtYXQoYS5tLCBhLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KG1pbm9ycywgaSwgaiwgbWF0LmRldChtYXQubWlub3IoYSwgaSwgaikpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29mYWN0b3JzID0gbWF0Lm1hcChtaW5vcnMsICh2LCBpKSA9PiB2ICogKGkgJSAyID8gLTEgOiAxKSk7XG4gIHJldHVybiBtYXQudHJhbnMoY29mYWN0b3JzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxuICovXG5tYXQuaW52ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xuXG4vKipcbiAqIENvcHkgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcbiAqL1xubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHZlYywgbWF0IH07XG59XG4iLCJjb25zdCBkZWZhdWx0VmVydGV4U2hhZGVyID0gYFxuICAjaWZkZWYgR0xfRVNcbiAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4gICNlbmRpZlxuICBhdHRyaWJ1dGUgdmVjMiBwb3NpdGlvbjtcbiAgdm9pZCBtYWluKCkge1xuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbiwgMC4wLCAxLjApO1xuICB9XG5gO1xuY29uc3QgZGVmYXVsdEZyYWdtZW50U2hhZGVyID0gYFxuICAjaWZkZWYgR0xfRVNcbiAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4gICNlbmRpZlxuICB2b2lkIG1haW4oKSB7XG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjApO1xuICB9XG5gO1xuZXhwb3J0IGNsYXNzIFNoYWRlckNhbnZhcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuICAgICAgICBpZiAoIWdsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmYWlsZWQgdG8gZ2V0IHdlYmdsIGNvbnRleHRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICBjb25zdCB2cyA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICAgIGlmICghdnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZhaWxlZCB0byBjcmVhdGUgdmVydGV4IHNoYWRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnRleFNoYWRlciA9IHZzO1xuICAgICAgICBjb25zdCB2c0VycnMgPSBjb21waWxlU2hhZGVyKHRoaXMuZ2wsIHRoaXMudmVydGV4U2hhZGVyLCBkZWZhdWx0VmVydGV4U2hhZGVyKTtcbiAgICAgICAgaWYgKHZzRXJycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZmFpbGVkIHRvIGNvbXBpbGUgdmVydGV4IHNoYWRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcyA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICAgICAgaWYgKCFmcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZmFpbGVkIHRvIGNyZWF0ZSBmcmFnbWVudCBzaGFkZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mcmFnbWVudFNoYWRlciA9IGZzO1xuICAgICAgICBjb25zdCBmc0VycnMgPSBjb21waWxlU2hhZGVyKHRoaXMuZ2wsIHRoaXMuZnJhZ21lbnRTaGFkZXIsIGRlZmF1bHRGcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGlmIChmc0VycnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZhaWxlZCB0byBjb21waWxlIHZlcnRleCBzaGFkZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbSh0aGlzLmdsLCB0aGlzLnZlcnRleFNoYWRlciwgdGhpcy5mcmFnbWVudFNoYWRlcik7XG4gICAgICAgIGJpbmRQb3NpdGlvbkF0dHJpYnV0ZSh0aGlzLmdsLCB0aGlzLnNoYWRlclByb2dyYW0pO1xuICAgICAgICB0aGlzLmdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuc2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSg0MDAsIDQwMCk7XG4gICAgfVxuICAgIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjb25zdCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LndpZHRoID0gd2lkdGggKiBkcHI7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZG9tRWxlbWVudC53aWR0aCwgdGhpcy5kb21FbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIC8vIGdldFJlc29sdXRpb24gaXMgYSBjb252ZW5pZW5jZSBtZXRob2QgZm9yIGdldHRpbmcgYSB2ZWMyIHJlcHJlc2VudGluZyB0aGVcbiAgICAvLyBzaXplIGluIHBoeXNpY2FsIHBpeGVscyBvZiB0aGUgY2FudmFzLlxuICAgIC8vIFR5cGljYWwgdXNhZ2UgaXM6XG4gICAgLy8gICBzaGFkZXJDYW52YXMuc2V0VW5pZm9ybShcInVfcmVzb2x1dGlvblwiLCBzaGFkZXJDYW52YXMuZ2V0UmVzb2x1dGlvbigpKTtcbiAgICBnZXRSZXNvbHV0aW9uKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LndpZHRoLFxuICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmhlaWdodCxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgc2V0U2hhZGVyKHNvdXJjZSkge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XG4gICAgICAgIGNvbnN0IGVycnMgPSBjb21waWxlU2hhZGVyKGdsLCB0aGlzLmZyYWdtZW50U2hhZGVyLCBzb3VyY2UpO1xuICAgICAgICBpZiAoZXJycykge1xuICAgICAgICAgICAgcmV0dXJuIGVycnM7XG4gICAgICAgIH1cbiAgICAgICAgZ2wubGlua1Byb2dyYW0odGhpcy5zaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMuc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHRoaXMuc2hhZGVyUHJvZ3JhbSkpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZmFpbGVkIHRvIGxpbmsgcHJvZ3JhbVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0ZXN0VW5pZm9ybShuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uICE9PSBudWxsO1xuICAgIH1cbiAgICBzZXRVbmlmb3JtKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIC8vIFRPRE86IHZhbGlkYXRlIG5hbWU/XG4gICAgICAgIC8vIFRPRE8gT1BUSU1JWkU6IGNhY2hlIHVuaWZvcm0gbG9jYXRpb25cbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIG5hbWUpO1xuICAgICAgICBpZiAobG9jYXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5pZm9ybSBsb2NhdGlvbiBmb3IgJHtuYW1lfSBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVE9ETzogYWNjZXB0IG9wdGlvbnMsIGxpa2UgZm9ybWF0LCBmaWx0ZXIsIHdyYXAsIGV0Yy5cbiAgICBzZXRUZXh0dXJlKG5hbWUsIGltYWdlKSB7XG4gICAgICAgIC8vIFRPRE86IHZhbGlkYXRlIG5hbWU/XG4gICAgICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcbiAgICAgICAgbGV0IHQgPSB0aGlzLnRleHR1cmVzW25hbWVdO1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdsVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIGlmICghZ2xUZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmFibGUgdG8gY3JlYXRlIGdsVGV4dHVyZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgICAgICBnbFRleHR1cmUsXG4gICAgICAgICAgICAgICAgdW5pdDogbG93ZXN0VW51c2VkKE9iamVjdC5rZXlzKHRoaXMudGV4dHVyZXMpLm1hcCgoaykgPT4gdGhpcy50ZXh0dXJlc1trXS51bml0KSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tuYW1lXSA9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCArIHQudW5pdCk7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHQuZ2xUZXh0dXJlKTtcbiAgICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgMSk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnNoYWRlclByb2dyYW0sIG5hbWUpO1xuICAgICAgICBpZiAobG9jYXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5pZm9ybSBsb2NhdGlvbiBmb3IgdGV4dHVyZSAke25hbWV9IG5vdCBmb3VuZGApO1xuICAgICAgICB9XG4gICAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdC51bml0KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5cyh0aGlzLmdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb21waWxlU2hhZGVyKGdsLCBzaGFkZXIsIHNvdXJjZSkge1xuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICAgIGlmIChnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmZvID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuICAgIGlmICghaW5mbykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmYWlsZWQgdG8gY29tcGlsZSwgYnV0IGZvdW5kIG5vIGVycm9yIGxvZ1wiKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihpbmZvKTtcbiAgICByZXR1cm4gcGFyc2VFcnJvck1lc3NhZ2VzKGluZm8pO1xufVxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyUHJvZ3JhbShnbCwgdnMsIGZzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBpZiAocHJvZ3JhbSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmYWlsZWQgdG8gY3JlYXRlIHNoYWRlciBwcm9ncmFtXCIpO1xuICAgIH1cbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdnMpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcyk7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgICBjb25zdCBpbmZvID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoaW5mbyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImZhaWxlZCB0byBsaW5rIHByb2dyYW1cIik7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmFtO1xufVxuZnVuY3Rpb24gYmluZFBvc2l0aW9uQXR0cmlidXRlKGdsLCBwcm9ncmFtKSB7XG4gICAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC0xLjAsIC0xLjAsXG4gICAgICAgIC0xLjAsIDEuMCxcbiAgICAgICAgMS4wLCAtMS4wLFxuICAgICAgICAxLjAsIDEuMCxcbiAgICBdKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25zLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgY29uc3QgcG9zaXRpb25Mb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwicG9zaXRpb25cIik7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NpdGlvbkxvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uTG9jYXRpb24pO1xufVxuZnVuY3Rpb24gcGFyc2VFcnJvck1lc3NhZ2VzKG1zZykge1xuICAgIGNvbnN0IGVycm9yUmVnZXggPSAvXkVSUk9SOiBcXGQrOihcXGQrKS4qJC9tZztcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIGxldCBtYXRjaCA9IGVycm9yUmVnZXguZXhlYyhtc2cpO1xuICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IG1hdGNoWzBdLFxuICAgICAgICAgICAgbGluZU51bWJlcjogcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIExvb2sgZm9yIGFub3RoZXIgZXJyb3I6XG4gICAgICAgIG1hdGNoID0gZXJyb3JSZWdleC5leGVjKG1zZyk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlcztcbn1cbi8vIFRoaXMgaXMgYSBmbGF2b3Igb2YgU2hsZW1pZWwgdGhlIHBhaW50ZXIncyBhbGdvcml0aG0uXG4vLyBodHRwOi8vd2lraS5jMi5jb20vP1NobGVtaWVsVGhlUGFpbnRlclxuLy9cbi8vIFRPRE86IGZpZ3VyZSBvdXQgaG93IHRvIHJ1biB0ZXN0cywgYnV0IEkndmUgc3BvdCBjaGVja2VkIHRoZXNlOlxuLy8gICBbXSA9PiAwXG4vLyAgIFswLCAxLCAyLCAzLCA0XSA9PiA1XG4vLyAgIFswLCAxLCAzLCA0XSA9PiAyXG4vLyAgIFsxLCAzLCA0XSA9PiAwXG4vLyAgIFs0XSA9PiAwXG4vLyAgIFs0LCAzLCAyLCAxLCAwXSA9PiA1XG4vLyAgIFs0LCAyLCAxLCAwXSA9PiAzXG4vLyAgIFs0LCAyLCAxLCAxMF0gPT4gMFxuLy8gICBbMiwgMCwgMywgNF0gPT4gMVxuZnVuY3Rpb24gbG93ZXN0VW51c2VkKHhzKSB7XG4gICAgbGV0IHVudXNlZCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoeHNbaV0gPT09IHVudXNlZCkge1xuICAgICAgICAgICAgdW51c2VkKys7XG4gICAgICAgICAgICBpID0gLTE7IC8vIGdvIGJhY2sgdG8gdGhlIGJlZ2lubmluZ1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bnVzZWQ7XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHtcbiAgQ2lyY2xlQ2FzdGVyLFxuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBTcHJpdGVDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFdhbGxSZWNlaXZlciwgV2FsbFJlY2VpdmVyT3B0aW9ucyB9IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgeyBSZWN0YW5nbGUsIFdhbGxTaGFkb3dMYXllciB9IGZyb20gJy4vdHlwZXMnO1xuXG50eXBlIEFjdG9yU2hhZG93T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIEhlaWdodCBvZiB0aGUgYXJlYSBhdCB0aGUgYm90dG9tIG9mIHRoZSBhY3RvciB0aGF0IGNhc3RzIGEgc2hhZG93LFxuICAgKiBkZWZhdWx0cyB0byBhIHRoaXJkIG9mIHRoZSBhY3RvcidzIGhlaWdodFxuICAgKi9cbiAgZm9vdHByaW50SGVpZ2h0PzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0b3JTaGFkb3cgPVxuICB8ICdub25lJ1xuICB8ICdzcHJpdGUnXG4gIHwgJ2NpcmNsZSdcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnbm9uZScgfSlcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnc3ByaXRlJyB9ICYgUGFydGlhbDxcbiAgICAgICAgT21pdDxTcHJpdGVDYXN0ZXJPcHRpb25zLCAncG9zaXRpb24nIHwgJ3NpemUnPlxuICAgICAgPilcbiAgfCAoQWN0b3JTaGFkb3dPcHRpb25zICYgeyB0eXBlOiAnY2lyY2xlJyB9ICYgUGFydGlhbDxcbiAgICAgICAgT21pdDxDaXJjbGVDYXN0ZXJPcHRpb25zLCAncG9zaXRpb24nIHwgJ3NpemUnPlxuICAgICAgPik7XG5cbmV4cG9ydCB0eXBlIEFjdG9yT3B0aW9ucyA9IE9taXQ8V2FsbFJlY2VpdmVyT3B0aW9ucywgJ3JlY2VpdmVMaWdodCc+ICYge1xuICAvKipcbiAgICogVGhlIHNoYWRvdyBjYXN0IGJ5IHRoaXMgYWN0b3IsIHRoZSBkZWZhdWx0IGlzIGEgc3RyZXRjaGVkIHNpbGhvdWV0dGUgb2ZcbiAgICogdGhlIGFjdG9yJ3MgaW1hZ2VcbiAgICovXG4gIHNoYWRvdz86IEFjdG9yU2hhZG93O1xufTtcblxuLyoqXG4gKiBBIG1vdmluZyBvYmplY3QgdGhhdCByZWNlaXZlcyBsaWdodCBhbmQgY2FzdHMgYSBzaGFkb3dcbiAqL1xuZXhwb3J0IGNsYXNzIEFjdG9yIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GT09UUFJJTlRfU0NBTEUgPSAxIC8gMztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSEFET1dfTEVOR1RIX1NDQUxFID0gMS4zMztcblxuICBwdWJsaWMgcmVhZG9ubHkgc3VyZmFjZTogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgY2FzdGVyOiBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGZvb3RwcmludEhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IEFjdG9yT3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2hhZG93ID0gJ3Nwcml0ZScsIC4uLnN1cmZhY2UgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgeyB0eXBlLCBmb290cHJpbnRIZWlnaHQsIC4uLmNhc3Rlck9wdGlvbnMgfSA9IChcbiAgICAgIHR5cGVvZiBzaGFkb3cgPT09ICdzdHJpbmcnID8geyB0eXBlOiBzaGFkb3cgfSA6IHNoYWRvd1xuICAgICkgYXMgRXhjbHVkZTxBY3RvclNoYWRvdywgc3RyaW5nPjtcblxuICAgIHRoaXMuZm9vdHByaW50SGVpZ2h0ID1cbiAgICAgIGZvb3RwcmludEhlaWdodCA/PyBvcHRpb25zLnNpemUueSAqIEFjdG9yLkRFRkFVTFRfRk9PVFBSSU5UX1NDQUxFO1xuXG4gICAgLy8gQWN0b3JzIHN0YW5kIGluIGZyb250IG9mIHdhbGxzLCBzbyB0aGV5IG5lZWQgdGhlaXIgb3duIHdhbGwgbGF5ZXJcbiAgICB0aGlzLnN1cmZhY2UgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgbGF5ZXI6IFdhbGxTaGFkb3dMYXllci5Ud28sXG4gICAgICBtZXJnZWFibGU6IGZhbHNlLFxuICAgICAgLi4uc3VyZmFjZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3RwcmludCA9IHRoaXMuZm9vdHByaW50KG9wdGlvbnMucG9zaXRpb24sIG9wdGlvbnMuc2l6ZSk7XG4gICAgaWYgKHR5cGUgPT09ICdzcHJpdGUnKSB7XG4gICAgICBjb25zdCBzaGFkb3dMZW5ndGggPSBvcHRpb25zLnNpemUueSAqIEFjdG9yLkRFRkFVTFRfU0hBRE9XX0xFTkdUSF9TQ0FMRTtcblxuICAgICAgdGhpcy5jYXN0ZXIgPSBsaWdodGluZy5hZGRTcHJpdGVDYXN0ZXIoe1xuICAgICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcbiAgICAgICAgbWluU2hhZG93TGVuZ3RoOiBzaGFkb3dMZW5ndGgsXG4gICAgICAgIG1heFNoYWRvd0xlbmd0aDogc2hhZG93TGVuZ3RoLFxuICAgICAgICAuLi5jYXN0ZXJPcHRpb25zLFxuICAgICAgICAuLi5mb290cHJpbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkQ2lyY2xlQ2FzdGVyKHtcbiAgICAgICAgLi4uY2FzdGVyT3B0aW9ucyxcbiAgICAgICAgLi4uZm9vdHByaW50LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb290cHJpbnQocG9zaXRpb246IHZlYywgc2l6ZTogdmVjKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgc2l6ZS55IC0gdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgICAgc2l6ZTogdmVjKHNpemUueCwgdGhpcy5mb290cHJpbnRIZWlnaHQpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGFjdG9yIHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMpIHtcbiAgICB0aGlzLnN1cmZhY2UubW92ZVRvKHBvc2l0aW9uKTtcbiAgICB0aGlzLmNhc3Rlcj8ubW92ZVRvKHRoaXMuZm9vdHByaW50KHBvc2l0aW9uLCB0aGlzLnN1cmZhY2Uuc2l6ZSkucG9zaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGlzIGFjdG9yIGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLnN1cmZhY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5jYXN0ZXI/LnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgU2NlbmVPYmplY3QsIFNjZW5lT2JqZWN0T3B0aW9ucyB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuaW1wb3J0IHsgTGlnaHRpbmdJbWFnZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgYm91bmRpbmdSZWN0YW5nbGUsIHNpbGhvdWV0dGUgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmV4cG9ydCB0eXBlIFJlZ2lvbkNhc3Rlck9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBTaG91bGQgc2hhZG93cyBpbmNsdWRlIHRoZSByZWN0YW5ndWxhciByZWdpb24gb2YgdGhpcyBjYXN0ZXI/XG4gICAqL1xuICBpbmNsdWRlUmVnaW9uU2hhZG93PzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBwb2x5Z29uYWwgc2hhZG93c1xuICovXG5leHBvcnQgY2xhc3MgUmVnaW9uQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8UmVnaW9uQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgaW5jbHVkZVJlZ2lvblNoYWRvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFJlZ2lvbkNhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsaWdodGluZywgb3B0aW9ucyk7XG4gICAgdGhpcy5zZXQob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgY2FuIGJlIG1lcmdlZCB3aXRoIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgY2FuTWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1lcmdlYWJsZSAmJlxuICAgICAgb3RoZXIubWVyZ2VhYmxlICYmXG4gICAgICB0aGlzLmluY2x1ZGVSZWdpb25TaGFkb3cgPT09IG90aGVyLmluY2x1ZGVSZWdpb25TaGFkb3dcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBjYXN0ZXIgdGhhdCBjb3ZlcnMgdGhpcyBjYXN0ZXIgYW5kIGFub3RoZXIgY2FzdGVyXG4gICAqL1xuICBwdWJsaWMgbWVyZ2Uob3RoZXI6IFJlZ2lvbkNhc3Rlcik6IFJlZ2lvbkNhc3RlciB7XG4gICAgcmV0dXJuIG5ldyBSZWdpb25DYXN0ZXIodGhpcy5saWdodGluZywge1xuICAgICAgLi4uKHRoaXMgYXMgUmVnaW9uQ2FzdGVyKSxcbiAgICAgIC4uLmJvdW5kaW5nUmVjdGFuZ2xlKHRoaXMsIG90aGVyKSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTcHJpdGVDYXN0ZXJPcHRpb25zID0gU2NlbmVPYmplY3RPcHRpb25zICYge1xuICAvKipcbiAgICogVGhlIGltYWdlIHVzZWQgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpdCBzaG91bGQgYmUgYmxhY2sgd2l0aCBhbiBhbHBoYVxuICAgKiBjaGFubmVsXG4gICAqL1xuICBzaGFkb3c/OiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogSWYgYHNoYWRvd2AgaXNuJ3Qgc2V0LCB3ZSdsbCB1c2UgdGhlIHNpbGhvdWV0dGUgb2YgdGhpcyBpbWFnZSBpbnN0ZWFkXG4gICAqL1xuICBpbWFnZT86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVyZSB0aGUgc2hhZG93IGJlZ2lucywgYXMgYSBmcmFjdGlvbiBvZiB0aGUgc2l6ZSBvZiB0aGlzIGNhc3Rlciwgd2hlcmVcbiAgICogKDAsIDApIGlzIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kICgxLCAxKSBpcyB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lclxuICAgKi9cbiAgYW5jaG9yPzogdmVjO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgdGhlIHNoYWRvdyBmcm9tIHRoZSBhbmNob3IsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNoYWRvdyBzaXplXG4gICAqL1xuICBvZmZzZXQ/OiB2ZWM7XG5cbiAgLyoqXG4gICAqIFNoYWRvdyBsZW5ndGggd2hlbiB0aGUgbGlnaHQgaXMgYXQgdGhlIGNlbnRlciBvZiB0aGlzIGNhc3RlclxuICAgKi9cbiAgbWluU2hhZG93TGVuZ3RoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaGFkb3cgbGVuZ3RoIHdoZW4gdGhpcyBjYXN0ZXIgaXMgYXQgdGhlIGVkZ2Ugb2YgdGhlIGxpZ2h0J3MgcmFkaXVzLCBvclxuICAgKiBudWxsIHRvIHVzZSB0aGUgbGlnaHQncyByYWRpdXNcbiAgICovXG4gIG1heFNoYWRvd0xlbmd0aD86IG51bWJlciB8IG51bGw7XG59O1xuXG4vKipcbiAqIEEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgYSBzaGFkb3cgYnkgcm90YXRpbmcgYW5kIHN0cmV0Y2hpbmcgYW4gaW1hZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIFNwcml0ZUNhc3RlciBleHRlbmRzIFNjZW5lT2JqZWN0PFNwcml0ZUNhc3Rlck9wdGlvbnM+IHtcbiAgcHVibGljIHNoYWRvdzogTGlnaHRpbmdJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGFuY2hvcjogdmVjID0gdmVjKDAuNSwgMC45KTtcbiAgcHVibGljIG9mZnNldDogdmVjID0gdmVjKDAuNSwgMC45KTtcbiAgcHVibGljIG1pblNoYWRvd0xlbmd0aDogbnVtYmVyID0gNjQ7XG4gIHB1YmxpYyBtYXhTaGFkb3dMZW5ndGg6IG51bWJlciB8IG51bGwgPSA2NDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBTcHJpdGVDYXN0ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaW1hZ2UgZm9yIHRoaXMgY2FzdGVyJ3Mgc2hhZG93LCBpZiBpdCBoYXMgb25lXG4gICAqL1xuICBwdWJsaWMgZ2V0U2hhZG93KCk6IExpZ2h0aW5nSW1hZ2UgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3cgPz8gKHRoaXMuaW1hZ2UgJiYgc2lsaG91ZXR0ZSh0aGlzLmltYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2lyY2xlQ2FzdGVyT3B0aW9ucyA9IFNjZW5lT2JqZWN0T3B0aW9ucyAmIHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBzaGFkb3cgaXMgY2VudGVyZWQsIGFzIGEgZnJhY3Rpb24gb2YgdGhlIHNpemUgb2YgdGhpcyBjYXN0ZXIsXG4gICAqIHdoZXJlICgwLCAwKSBpcyB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCAoMSwgMSkgaXMgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXJcbiAgICovXG4gIGFuY2hvcj86IHZlYztcblxuICAvKipcbiAgICogRGlzdGFuY2UgZnJvbSB0aGUgYW5jaG9yIHRvIHRoZSBzaGFkb3cgd2hlbiB0aGUgbGlnaHQgaXMgYXQgdGhlIGNlbnRlciBvZlxuICAgKiB0aGlzIGNhc3RlclxuICAgKi9cbiAgbWluU2hhZG93RGlzdGFuY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGZyb20gdGhlIGFuY2hvciB0byB0aGUgc2hhZG93IHdoZW4gdGhpcyBjYXN0ZXIgaXMgYXQgdGhlIGVkZ2Ugb2ZcbiAgICogdGhlIGxpZ2h0J3MgcmFkaXVzLCBvciBudWxsIHRvIHVzZSB0aGUgbGlnaHQncyByYWRpdXNcbiAgICovXG4gIG1heFNoYWRvd0Rpc3RhbmNlPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogT3BhY2l0eSBvZiB0aGUgc2hhZG93XG4gICAqL1xuICBhbHBoYT86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhbiBlbGxpcHRpY2FsIHNoYWRvd1xuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ2FzdGVyIGV4dGVuZHMgU2NlbmVPYmplY3Q8Q2lyY2xlQ2FzdGVyT3B0aW9ucz4ge1xuICBwdWJsaWMgYW5jaG9yOiB2ZWMgPSB2ZWMoMC41LCAwLjkpO1xuICBwdWJsaWMgbWluU2hhZG93RGlzdGFuY2U6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBtYXhTaGFkb3dEaXN0YW5jZTogbnVtYmVyIHwgbnVsbCA9IDIwO1xuICBwdWJsaWMgYWxwaGE6IG51bWJlciA9IDE7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGxpZ2h0aW5nOiBMaWdodGluZ1N5c3RlbSwgb3B0aW9uczogQ2lyY2xlQ2FzdGVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTaGFkb3dDYXN0ZXIgPSBSZWdpb25DYXN0ZXIgfCBTcHJpdGVDYXN0ZXIgfCBDaXJjbGVDYXN0ZXI7XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQge1xuICBhdCxcbiAgY2xhbXAsXG4gIGV4Y2x1ZGUsXG4gIHJlbWFwLFxuICBzbW9vdGhzdGVwLFxuICB1bmxlcnAsXG59IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBTaGFkZXJDYW52YXMgfSBmcm9tICdzaGFkZXItY2FudmFzJztcbmltcG9ydCB7XG4gIENpcmNsZUNhc3RlcixcbiAgUmVnaW9uQ2FzdGVyLFxuICBTaGFkb3dDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlcixcbn0gZnJvbSAnLi9DYXN0ZXInO1xuaW1wb3J0IHR5cGUgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHsgR3JvdW5kUmVjZWl2ZXIsIFdhbGxSZWNlaXZlciB9IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEludGVydmFsMmQsXG4gIExpZ2h0aW5nQ2FtZXJhLFxuICBMaW5lLFxuICBQb2x5Z29uVmVydGljZXMsXG4gIFJlY3RhbmdsZSxcbiAgU2VjdG9yMmQsXG4gIFdhbGxTaGFkb3dMYXllcixcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBjb2xvdXJUb1N0cmluZyxcbiAgbGluZUlzRmFjaW5nLFxuICBsaW5lWUludGVyY2VwdCxcbiAgb3ZlcmxhcDFkLFxuICBwb2x5Z29uLFxuICByZWN0YW5nbGVzSW50ZXJzZWN0LFxuICByZWN0YW5nbGVUb0ludGVydmFsLFxuICByZWN0YW5nbGVWZXJ0aWNlcyxcbiAgc2VjdG9yMmQsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcblxuY29uc3QgSEFMRl9QSSA9IE1hdGguUEkgLyAyO1xuY29uc3QgSU5URVJDRVBUX1ggPSAwO1xuY29uc3QgSU5URVJDRVBUX1QgPSAxO1xuXG5leHBvcnQgdHlwZSBMaWdodE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXb3JsZCBwb3NpdGlvbiBvZiB0aGlzIGxpZ2h0XG4gICAqL1xuICBwb3NpdGlvbjogdmVjO1xuXG4gIC8qKlxuICAgKiBSYWRpdXMgb2YgdGhpcyBsaWdodCBpbiB3b3JsZCB1bml0c1xuICAgKi9cbiAgcmFkaXVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZnVsbHktbGl0IGFyZWEgYXQgdGhlIGNlbnRlciBvZiB0aGlzIGxpZ2h0LCBhcyBhIGZyYWN0aW9uXG4gICAqIG9mIHRoZSByYWRpdXNcbiAgICovXG4gIGNvcmVSYWRpdXM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJyaWdodG5lc3Mgb2YgdGhpcyBsaWdodFxuICAgKi9cbiAgaW50ZW5zaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG91bGQgdGhpcyBsaWdodCBjYXN0IHNoYWRvd3M/XG4gICAqL1xuICBjYXN0U2hhZG93cz86IGJvb2xlYW47XG59O1xuXG50eXBlIFNoYWRvdzxUIGV4dGVuZHMgU2hhZG93Q2FzdGVyPiA9IHtcbiAgLyoqXG4gICAqIFRoZSBlbnRpdHkgdGhhdCBpcyBjYXN0aW5nIHRoaXMgc2hhZG93XG4gICAqL1xuICBjYXN0ZXI6IFQ7XG5cbiAgLyoqXG4gICAqIFRoZSBsZWZ0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3dcbiAgICovXG4gIGxlZnRFZGdlOiBMaW5lIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIHJpZ2h0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3dcbiAgICovXG4gIHJpZ2h0RWRnZTogTGluZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiBhIGNpcmNsZSBzaGFkb3cgKG9ubHkgdXNlZCB3aGVuIHJlbmRlcmluZyBhIGNpcmNsZSBzaGFkb3dcbiAgICogb250byBhIHdhbGwpXG4gICAqL1xuICBwb3NpdGlvbj86IHZlYztcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgYSBjaXJjbGUgc2hhZG93IChvbmx5IHVzZWQgd2hlbiByZW5kZXJpbmcgYSBjaXJjbGUgc2hhZG93IG9udG9cbiAgICogYSB3YWxsKVxuICAgKi9cbiAgc2l6ZT86IHZlYztcbn07XG5cbmV4cG9ydCBjbGFzcyBMaWdodCB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfUkFESVVTID0gMTAwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPTE9VUiA9ICd3aGl0ZSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09SRV9SQURJVVMgPSAwLjI7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSU5URU5TSVRZID0gMTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU0hBRE9XX0JVRkZFUiA9IDIwO1xuXG4gIHByaXZhdGUgbGlnaHRpbmdTeXN0ZW06IExpZ2h0aW5nU3lzdGVtO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjO1xuICBwcml2YXRlIF9yYWRpdXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sb3VyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb2xvdXJPYmplY3Q6IENvbG91cjtcbiAgcHJpdmF0ZSBfY29yZVJhZGl1czogbnVtYmVyO1xuICBwcml2YXRlIF9pbnRlbnNpdHk6IG51bWJlcjtcbiAgcHVibGljIGNhc3RTaGFkb3dzOiBib29sZWFuO1xuXG4gIHB1YmxpYyBsaWdodENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgbGlnaHRDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIGdyb3VuZExpZ2h0Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBncm91bmRMaWdodENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgd2FsbExpZ2h0MUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgd2FsbExpZ2h0MUNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgd2FsbExpZ2h0MkNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgd2FsbExpZ2h0MkNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgc2hhZGVyQ2FudmFzOiBTaGFkZXJDYW52YXMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzaGFkZXJGYWlsZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGRpcnR5ID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmdTeXN0ZW06IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBMaWdodE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtID0gbGlnaHRpbmdTeXN0ZW07XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweShvcHRpb25zLnBvc2l0aW9uKTtcbiAgICB0aGlzLl9yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX1JBRElVUztcbiAgICB0aGlzLl9jb2xvdXIgPSBvcHRpb25zLmNvbG91ciA/PyBMaWdodC5ERUZBVUxUX0NPTE9VUjtcbiAgICB0aGlzLl9jb3JlUmFkaXVzID0gb3B0aW9ucy5jb3JlUmFkaXVzID8/IExpZ2h0LkRFRkFVTFRfQ09SRV9SQURJVVM7XG4gICAgdGhpcy5faW50ZW5zaXR5ID0gb3B0aW9ucy5pbnRlbnNpdHkgPz8gTGlnaHQuREVGQVVMVF9JTlRFTlNJVFk7XG4gICAgdGhpcy5jYXN0U2hhZG93cyA9IG9wdGlvbnMuY2FzdFNoYWRvd3MgPz8gdHJ1ZTtcbiAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodGhpcy5fY29sb3VyKTtcblxuICAgIHRoaXMubGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuICAgIHRoaXMubGlnaHRDb250ZXh0ID0gdGhpcy5saWdodENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5ncm91bmRMaWdodENhbnZhcy5oZWlnaHQgPVxuICAgICAgdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCA9IHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLndhbGxMaWdodDFDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLndhbGxMaWdodDFDYW52YXMud2lkdGggPSB0aGlzLndhbGxMaWdodDFDYW52YXMuaGVpZ2h0ID1cbiAgICAgIHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dCA9IHRoaXMud2FsbExpZ2h0MUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMud2FsbExpZ2h0MkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNhbnZhcy53aWR0aCA9IHRoaXMud2FsbExpZ2h0MkNhbnZhcy5oZWlnaHQgPVxuICAgICAgdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0ID0gdGhpcy53YWxsTGlnaHQyQ2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgLyoqXG4gICAqIEJvdW5kaW5nIGJveCBmb3IgdGhpcyBsaWdodCwgaW5jbHVkaW5nIHRoZSBvZmZzZXQgd2FsbCBsaWdodG1hcHNcbiAgICovXG4gIHB1YmxpYyBnZXQgYm91bmRzKCk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3Qgd2FsbExpZ2h0aW5nWU9mZnNldCA9IHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMoXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5fcmFkaXVzICsgTWF0aC5taW4od2FsbExpZ2h0aW5nWU9mZnNldCwgMClcbiAgICAgICksXG4gICAgICBzaXplOiB2ZWMoXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIsXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIDIgKyBNYXRoLmFicyh3YWxsTGlnaHRpbmdZT2Zmc2V0KVxuICAgICAgKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCByYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3JhZGl1cykge1xuICAgICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICB9XG5cbiAgcHVibGljIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29sb3VyKSB7XG4gICAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih2YWx1ZSk7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvcmVSYWRpdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvcmVSYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IGNvcmVSYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY29yZVJhZGl1cykge1xuICAgICAgdGhpcy5fY29yZVJhZGl1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVuc2l0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2ludGVuc2l0eSkge1xuICAgICAgdGhpcy5faW50ZW5zaXR5ID0gdmFsdWU7XG4gICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGlzIGxpZ2h0IHRvIGEgbmV3IHdvcmxkIHBvc2l0aW9uXG4gICAqL1xuICBwdWJsaWMgbW92ZVRvKHBvc2l0aW9uOiB2ZWMpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweShwb3NpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNvbWUgb2YgdGhlIG9wdGlvbnMgZm9yIHRoaXMgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxMaWdodE9wdGlvbnM+KSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgcmFkaXVzLCBjb2xvdXIsIGNvcmVSYWRpdXMsIGludGVuc2l0eSwgY2FzdFNoYWRvd3MgfSA9XG4gICAgICBvcHRpb25zO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5jcHkocG9zaXRpb24gPz8gdGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgPz8gdGhpcy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXIgPz8gdGhpcy5jb2xvdXI7XG4gICAgdGhpcy5jb3JlUmFkaXVzID0gY29yZVJhZGl1cyA/PyB0aGlzLmNvcmVSYWRpdXM7XG4gICAgdGhpcy5pbnRlbnNpdHkgPSBpbnRlbnNpdHkgPz8gdGhpcy5pbnRlbnNpdHk7XG4gICAgdGhpcy5jYXN0U2hhZG93cyA9IGNhc3RTaGFkb3dzID8/IHRoaXMuY2FzdFNoYWRvd3M7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgbGlnaHQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlKCkge1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgdGhpcyBsaWdodCdzIHJlc291cmNlcywgdGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgbGlnaHQgaXMgcmVtb3ZlZFxuICAgKiBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMucmVsZWFzZVNoYWRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2UgdGhpcyBsaWdodCdzIFdlYkdMIGNvbnRleHQsIGJyb3dzZXJzIG9ubHkgYWxsb3cgYSBsaW1pdGVkIG51bWJlclxuICAgKiBvZiBhY3RpdmUgY29udGV4dHNcbiAgICovXG4gIHByaXZhdGUgcmVsZWFzZVNoYWRlcigpIHtcbiAgICB0aGlzLnNoYWRlckNhbnZhcz8uZG9tRWxlbWVudFxuICAgICAgLmdldENvbnRleHQoJ3dlYmdsJylcbiAgICAgID8uZ2V0RXh0ZW5zaW9uKCdXRUJHTF9sb3NlX2NvbnRleHQnKVxuICAgICAgPy5sb3NlQ29udGV4dCgpO1xuICAgIHRoaXMuc2hhZGVyQ2FudmFzID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlKFxuICAgIGNhbWVyYTogTGlnaHRpbmdDYW1lcmEsXG4gICAgZ3JvdW5kU2hhZG93UmVjZWl2ZXJzOiBHcm91bmRSZWNlaXZlcltdLFxuICAgIHdhbGxTaGFkb3dSZWNlaXZlcnM6IFdhbGxSZWNlaXZlcltdLFxuICAgIHJlZ2lvblNoYWRvd0Nhc3RlcnM6IFJlZ2lvbkNhc3RlcltdLFxuICAgIHNwcml0ZVNoYWRvd0Nhc3RlcnM6IFNwcml0ZUNhc3RlcltdLFxuICAgIGNpcmNsZVNoYWRvd0Nhc3RlcnM6IENpcmNsZUNhc3RlcltdXG4gICkge1xuICAgIC8vIElmIHRoZSBsaWdodCBzZXR0aW5ncyBoYXZlIGNoYW5nZWQsIHdlIG5lZWQgdG8gcmVkcmF3IHRoZSBiYXNlIGxpZ2h0bWFwXG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMucHJlcGFyZUxpZ2h0TWFwKCk7XG4gICAgfVxuXG4gICAgLy8gQm91bmRpbmcgYm94IGZvciB0aGlzIGxpZ2h0XG4gICAgY29uc3QgbGlnaHRSZWN0YW5nbGUgPSB0aGlzLmJvdW5kcztcblxuICAgIC8vIFJlbmRlciBsaWdodCBvbnRvIGdyb3VuZCBsaWdodCBjYW52YXNcbiAgICB0aGlzLnJlc2V0TGlnaHRDb250ZXh0KHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0KTtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodENhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBTdWJ0cmFjdCBzaGFkb3dzIGZyb20gZ3JvdW5kIGxpZ2h0bWFwXG4gICAgbGV0IHJlZ2lvblNoYWRvd3M6IFNoYWRvdzxSZWdpb25DYXN0ZXI+W10gPSBbXTtcbiAgICBsZXQgc3ByaXRlU2hhZG93czogU2hhZG93PFNwcml0ZUNhc3Rlcj5bXSA9IFtdO1xuICAgIGxldCBjaXJjbGVTaGFkb3dzOiBTaGFkb3c8Q2lyY2xlQ2FzdGVyPltdID0gW107XG4gICAgaWYgKHRoaXMuY2FzdFNoYWRvd3MpIHtcbiAgICAgIHJlZ2lvblNoYWRvd3MgPSB0aGlzLnByZXBhcmVHcm91bmRSZWdpb25TaGFkb3dzKFxuICAgICAgICBsaWdodFJlY3RhbmdsZSxcbiAgICAgICAgcmVnaW9uU2hhZG93Q2FzdGVyc1xuICAgICAgKTtcblxuICAgICAgc3ByaXRlU2hhZG93cyA9IHRoaXMucHJlcGFyZUdyb3VuZFNwcml0ZVNoYWRvd3MoXG4gICAgICAgIGxpZ2h0UmVjdGFuZ2xlLFxuICAgICAgICBzcHJpdGVTaGFkb3dDYXN0ZXJzXG4gICAgICApO1xuXG4gICAgICBjaXJjbGVTaGFkb3dzID0gdGhpcy5wcmVwYXJlR3JvdW5kQ2lyY2xlU2hhZG93cyhcbiAgICAgICAgbGlnaHRSZWN0YW5nbGUsXG4gICAgICAgIGNpcmNsZVNoYWRvd0Nhc3RlcnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIGxpZ2h0IG9udG8gd2FsbCBsaWdodCBjYW52YXNlc1xuICAgIHRoaXMucmVzZXRMaWdodENvbnRleHQodGhpcy53YWxsTGlnaHQxQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodENhbnZhcywgMCwgMCk7XG5cbiAgICB0aGlzLnJlc2V0TGlnaHRDb250ZXh0KHRoaXMud2FsbExpZ2h0MkNvbnRleHQpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gUHJlcGFyZSBmdWxsLXdhbGwgc2hhZG93cyBiYXNlZCBvbiB3aGV0aGVyIHRoZSB3YWxsIGlzIGFib3ZlIG9yIGJlbG93XG4gICAgLy8gdGhlIGxpZ2h0IHBvc2l0aW9uXG4gICAgdGhpcy5wcmVwYXJlRnVsbFdhbGxTaGFkb3dzKFxuICAgICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dCxcbiAgICAgIGxpZ2h0UmVjdGFuZ2xlLFxuICAgICAgd2FsbFNoYWRvd1JlY2VpdmVyc1xuICAgICk7XG4gICAgdGhpcy5wcmVwYXJlRnVsbFdhbGxTaGFkb3dzKFxuICAgICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dCxcbiAgICAgIGxpZ2h0UmVjdGFuZ2xlLFxuICAgICAgd2FsbFNoYWRvd1JlY2VpdmVyc1xuICAgICk7XG5cbiAgICAvLyBTdWJ0cmFjdCByZWdpb24gc2hhZG93cyBmcm9tIHdhbGwgbGlnaHRtYXBcbiAgICBpZiAodGhpcy5jYXN0U2hhZG93cykge1xuICAgICAgdGhpcy5wcmVwYXJlV2FsbFJlZ2lvblNoYWRvd3MoXG4gICAgICAgIGxpZ2h0UmVjdGFuZ2xlLFxuICAgICAgICByZWdpb25TaGFkb3dzLFxuICAgICAgICByZWdpb25TaGFkb3dDYXN0ZXJzLFxuICAgICAgICB3YWxsU2hhZG93UmVjZWl2ZXJzXG4gICAgICApO1xuXG4gICAgICB0aGlzLnByZXBhcmVXYWxsU3ByaXRlU2hhZG93cyhcbiAgICAgICAgbGlnaHRSZWN0YW5nbGUsXG4gICAgICAgIHNwcml0ZVNoYWRvd3MsXG4gICAgICAgIHdhbGxTaGFkb3dSZWNlaXZlcnNcbiAgICAgICk7XG5cbiAgICAgIHRoaXMucHJlcGFyZVdhbGxDaXJjbGVTaGFkb3dzKFxuICAgICAgICBsaWdodFJlY3RhbmdsZSxcbiAgICAgICAgY2lyY2xlU2hhZG93cyxcbiAgICAgICAgd2FsbFNoYWRvd1JlY2VpdmVyc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIHRoZSBzaGFkZXIgaWYgaXQncyBlbmFibGVkXG4gICAgaWYgKHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5zaGFkZXJFbmFibGVkICYmICF0aGlzLnNoYWRlckZhaWxlZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5wcmVwYXJlU2hhZGVyKGNhbWVyYSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEZhbGwgYmFjayB0byB1bnNoYWRlZCBsaWdodGluZyByYXRoZXIgdGhhbiBmYWlsaW5nIG9uIGV2ZXJ5IGZyYW1lXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NoYWRlciBkaXNhYmxlZCBmb3IgbGlnaHQnLCB0aGlzLCBlKTtcbiAgICAgICAgdGhpcy5zaGFkZXJGYWlsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlbGVhc2VTaGFkZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIGEgbGlnaHQgY2FudmFzIG1hdGNoZXMgdGhpcyBsaWdodCdzIHNpemVcbiAgICpcbiAgICogVGhlcmUncyBubyBuZWVkIHRvIGNsZWFyIHRoZSBjYW52YXMgYmVjYXVzZSB0aGUgYmFzZSBsaWdodG1hcCBpcyBvcGFxdWUsXG4gICAqIHNvIGRyYXdpbmcgaXQgcmVwbGFjZXMgdGhlIHByZXZpb3VzIGZyYW1lXG4gICAqL1xuICBwcml2YXRlIHJlc2V0TGlnaHRDb250ZXh0KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLmZsb29yKHRoaXMuX3JhZGl1cyAqIDIpO1xuICAgIGlmIChjb250ZXh0LmNhbnZhcy53aWR0aCAhPT0gc2l6ZSkge1xuICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgIH1cblxuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID1cbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVMaWdodE1hcCgpIHtcbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxSZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoLFxuICAgICAgdGhpcy5saWdodENhbnZhcy5oZWlnaHRcbiAgICApO1xuXG4gICAgY29uc3QgZ3JhZGllbnQgPSB0aGlzLmxpZ2h0Q29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyAqIHRoaXMuX2NvcmVSYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICB0aGlzLl9yYWRpdXNcbiAgICApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcbiAgICAgIDAsXG4gICAgICBjb2xvdXJUb1N0cmluZyh7XG4gICAgICAgIC4uLnRoaXMuY29sb3VyT2JqZWN0LFxuICAgICAgICByOiB0aGlzLmNvbG91ck9iamVjdC5yICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgICBnOiB0aGlzLmNvbG91ck9iamVjdC5nICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgICBiOiB0aGlzLmNvbG91ck9iamVjdC5iICogdGhpcy5faW50ZW5zaXR5LFxuICAgICAgfSlcbiAgICApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnYmxhY2snKTtcblxuICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMubGlnaHRDb250ZXh0LmFyYyhcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgIDAsXG4gICAgICBNYXRoLlBJICogMlxuICAgICk7XG4gICAgdGhpcy5saWdodENvbnRleHQuZmlsbCgpO1xuXG4gICAgdGhpcy5saWdodENvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlRnVsbFdhbGxTaGFkb3dzKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHdhbGxTaGFkb3dSZWNlaXZlcnM6IFdhbGxSZWNlaXZlcltdXG4gICkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgK1xuICAgICAgICB0aGlzLl9yYWRpdXMgLVxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IHdhbGwgb2Ygd2FsbFNoYWRvd1JlY2VpdmVycykge1xuICAgICAgY29uc3Qgd2FsbFJlY3RhbmdsZSA9IHtcbiAgICAgICAgcG9zaXRpb246IHdhbGwucG9zaXRpb24sXG4gICAgICAgIHNpemU6IHdhbGwuc2l6ZSxcbiAgICAgIH07XG4gICAgICBjb25zdCB3YWxsSW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHdhbGxSZWN0YW5nbGUpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHdhbGwgc2hhZG93IHJlY2VpdmVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIHdhbGxSZWN0YW5nbGUpKSB7XG4gICAgICAgIC8vIElmIHRoZSB3YWxsIGRvZXNuJ3QgcmVjZWl2ZSBsaWdodCwgaXQgYWxzbyBkb2Vzbid0IHJlY2VpdmVcbiAgICAgICAgLy8gcGFydGlhbCBvciBmdWxsIHNoYWRvd3NcbiAgICAgICAgaWYgKCF3YWxsLnJlY2VpdmVMaWdodCkge1xuICAgICAgICAgIHdhbGwuZHJhd01hc2soY29udGV4dCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgd2FsbCBpcyBvbmx5IGxpdCBieSB0aGlzIGxpZ2h0IGlmIGl0J3MgYWJvdmUgdGhlIGxpZ2h0XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB3YWxsSW50ZXJ2YWwuYm90dG9tKSB7XG4gICAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGNsYW1wKFxuICAgICAgICAgICAgcmVtYXAoXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b20gLSB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy53YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICB3YWxsLmRyYXdNYXNrKGNvbnRleHQpO1xuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlR3JvdW5kUmVnaW9uU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHJlZ2lvblNoYWRvd0Nhc3RlcnM6IFJlZ2lvbkNhc3RlcltdXG4gICk6IFNoYWRvdzxSZWdpb25DYXN0ZXI+W10ge1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyh0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCk7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9yYWRpdXNcbiAgICApO1xuXG4gICAgLy8gU2hhZG93IG1ldGFkYXRhIGZvciBlYWNoIHNoYWRvd1xuICAgIGNvbnN0IHNoYWRvd3M6IFNoYWRvdzxSZWdpb25DYXN0ZXI+W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNhc3RlciBvZiByZWdpb25TaGFkb3dDYXN0ZXJzKSB7XG4gICAgICBjb25zdCBjYXN0ZXJSZWN0YW5nbGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiBjYXN0ZXIucG9zaXRpb24sXG4gICAgICAgIHNpemU6IGNhc3Rlci5zaXplLFxuICAgICAgfTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBjYXN0ZXIgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgY2FzdGVyUmVjdGFuZ2xlKSkge1xuICAgICAgICBjb25zdCBzaGFkb3cgPSB7XG4gICAgICAgICAgY2FzdGVyLFxuICAgICAgICAgIC4uLnRoaXMucHJlcGFyZVJlZ2lvblNoYWRvdyhcbiAgICAgICAgICAgIGNhc3RlclJlY3RhbmdsZSxcbiAgICAgICAgICAgIGNhc3Rlci5pbmNsdWRlUmVnaW9uU2hhZG93XG4gICAgICAgICAgKSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTYXZlIHNoYWRvdyBtZXRhZGF0YSBmb3IgdXNlIGxhdGVyIHdoZW4gcmVuZGVyaW5nIHdhbGwgc2hhZG93c1xuICAgICAgICBzaGFkb3dzLnB1c2goZXhjbHVkZShzaGFkb3csICd2ZXJ0aWNlcycpKTtcblxuICAgICAgICAvLyBSZW5kZXIgdGhlIGdyb3VuZCBzaGFkb3cgcG9seWdvbiBvbnRvIHRoZSBsaWdodG1hcFxuICAgICAgICBwb2x5Z29uKHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LCAuLi5zaGFkb3cudmVydGljZXMpO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIHJldHVybiBzaGFkb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlR3JvdW5kU3ByaXRlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIHNwcml0ZVNoYWRvd0Nhc3RlcnM6IFNwcml0ZUNhc3RlcltdXG4gICk6IFNoYWRvdzxTcHJpdGVDYXN0ZXI+W10ge1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3ModGhpcy5ncm91bmRMaWdodENvbnRleHQpO1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnRyYW5zbGF0ZSh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XG5cbiAgICAvLyBTaGFkb3cgbWV0YWRhdGEgZm9yIGVhY2ggc2hhZG93XG4gICAgY29uc3Qgc2hhZG93czogU2hhZG93PFNwcml0ZUNhc3Rlcj5bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIHNwcml0ZVNoYWRvd0Nhc3RlcnMpIHtcbiAgICAgIGNvbnN0IGNhc3RlclJlY3RhbmdsZSA9IHtcbiAgICAgICAgcG9zaXRpb246IGNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogY2FzdGVyLnNpemUsXG4gICAgICB9O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Nwcml0ZSA9IGNhc3Rlci5nZXRTaGFkb3coKTtcblxuICAgICAgICAvLyBJZiB0aGUgc2hhZG93IHNwcml0ZSBpcyBtaXNzaW5nIGZvciB0aGlzIGNhc3RlciB0aGVuIGl0IGRvZXNuJ3RcbiAgICAgICAgLy8gY2FzdCBhIHNoYWRvd1xuICAgICAgICBpZiAoIXNoYWRvd1Nwcml0ZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyIHRoZSBncm91bmQgc2hhZG93IHNwcml0ZSBvbnRvIHRoZSBsaWdodG1hcFxuICAgICAgICBjb25zdCBzaGFkb3dPcmlnaW4gPSB2ZWMuYWRkKFxuICAgICAgICAgIGNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICB2ZWMoY2FzdGVyLnNpemUueCAqIGNhc3Rlci5hbmNob3IueCwgY2FzdGVyLnNpemUueSAqIGNhc3Rlci5hbmNob3IueSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93TGVuZ3RoID0gc21vb3Roc3RlcChcbiAgICAgICAgICBjYXN0ZXIubWluU2hhZG93TGVuZ3RoLFxuICAgICAgICAgIGNhc3Rlci5tYXhTaGFkb3dMZW5ndGggPz8gdGhpcy5yYWRpdXMsXG4gICAgICAgICAgdW5sZXJwKDAsIHRoaXMucmFkaXVzLCB2ZWMubGVuKHZlYy5zdWIoc2hhZG93T3JpZ2luLCB0aGlzLnBvc2l0aW9uKSkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0VkZ2UgPSB2ZWMubXVsKFxuICAgICAgICAgIHZlYy5ub3IodmVjLnN1YihzaGFkb3dPcmlnaW4sIHRoaXMucG9zaXRpb24pKSxcbiAgICAgICAgICBzaGFkb3dMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2hhZG93RWRnZUxlbmd0aCA9IHZlYy5sZW4oc2hhZG93RWRnZSk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0FuZ2xlID0gdmVjLnJhZChzaGFkb3dFZGdlKSArIEhBTEZfUEk7XG5cbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC50cmFuc2xhdGUoXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnggLSB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgc2hhZG93T3JpZ2luLnkgLSB0aGlzLnBvc2l0aW9uLnlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQucm90YXRlKHNoYWRvd0FuZ2xlKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgIHNoYWRvd1Nwcml0ZSxcbiAgICAgICAgICAtY2FzdGVyLnNpemUueCAqIGNhc3Rlci5vZmZzZXQueCxcbiAgICAgICAgICAtc2hhZG93RWRnZUxlbmd0aCAqIGNhc3Rlci5vZmZzZXQueSxcbiAgICAgICAgICBjYXN0ZXIuc2l6ZS54LFxuICAgICAgICAgIHNoYWRvd0VkZ2VMZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgICAgIC8vIFNhdmUgc2hhZG93IG1ldGFkYXRhIGZvciB1c2UgbGF0ZXIgd2hlbiByZW5kZXJpbmcgd2FsbCBzaGFkb3dzXG4gICAgICAgIGNvbnN0IGxlZnRDb3JuZXIgPSB2ZWMucm90KFxuICAgICAgICAgIHZlYyhjYXN0ZXIuc2l6ZS54ICogY2FzdGVyLm9mZnNldC54LCAwKSxcbiAgICAgICAgICBzaGFkb3dBbmdsZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCByaWdodENvcm5lciA9IHZlYy5yb3QoXG4gICAgICAgICAgdmVjKGNhc3Rlci5zaXplLnggKiAoMSAtIGNhc3Rlci5vZmZzZXQueCksIDApLFxuICAgICAgICAgIHNoYWRvd0FuZ2xlXG4gICAgICAgICk7XG4gICAgICAgIHNoYWRvd3MucHVzaCh7XG4gICAgICAgICAgY2FzdGVyLFxuICAgICAgICAgIGxlZnRFZGdlOiB7XG4gICAgICAgICAgICBzdGFydDogdmVjLnN1YihzaGFkb3dPcmlnaW4sIGxlZnRDb3JuZXIpLFxuICAgICAgICAgICAgZW5kOiB2ZWMuc3ViKHZlYy5hZGQoc2hhZG93T3JpZ2luLCBzaGFkb3dFZGdlKSwgbGVmdENvcm5lciksXG4gICAgICAgICAgfSxcbiAgICAgICAgICByaWdodEVkZ2U6IHtcbiAgICAgICAgICAgIHN0YXJ0OiB2ZWMuYWRkKHNoYWRvd09yaWdpbiwgcmlnaHRDb3JuZXIpLFxuICAgICAgICAgICAgZW5kOiB2ZWMuYWRkKHZlYy5hZGQoc2hhZG93T3JpZ2luLCBzaGFkb3dFZGdlKSwgcmlnaHRDb3JuZXIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICByZXR1cm4gc2hhZG93cztcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUdyb3VuZENpcmNsZVNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBjaXJjbGVTaGFkb3dDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXVxuICApOiBTaGFkb3c8Q2lyY2xlQ2FzdGVyPltdIHtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNldHVwU29mdFNoYWRvd3ModGhpcy5ncm91bmRMaWdodENvbnRleHQpO1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnRyYW5zbGF0ZSh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cyk7XG5cbiAgICAvLyBTaGFkb3cgbWV0YWRhdGEgZm9yIGVhY2ggc2hhZG93XG4gICAgY29uc3Qgc2hhZG93czogU2hhZG93PENpcmNsZUNhc3Rlcj5bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2FzdGVyIG9mIGNpcmNsZVNoYWRvd0Nhc3RlcnMpIHtcbiAgICAgIGNvbnN0IGNhc3RlclJlY3RhbmdsZSA9IHtcbiAgICAgICAgcG9zaXRpb246IGNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogY2FzdGVyLnNpemUsXG4gICAgICB9O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGNhc3RlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgIC8vIFJlbmRlciBhIGNpcmN1bGFyIGdyb3VuZCBzaGFkb3cgb250byB0aGUgbGlnaHRtYXBcbiAgICAgICAgY29uc3Qgc2hhZG93T3JpZ2luID0gdmVjLmFkZChcbiAgICAgICAgICBjYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgdmVjKGNhc3Rlci5zaXplLnggKiBjYXN0ZXIuYW5jaG9yLngsIGNhc3Rlci5zaXplLnkgKiBjYXN0ZXIuYW5jaG9yLnkpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0Rpc3RhbmNlID0gc21vb3Roc3RlcChcbiAgICAgICAgICBjYXN0ZXIubWluU2hhZG93RGlzdGFuY2UsXG4gICAgICAgICAgY2FzdGVyLm1heFNoYWRvd0Rpc3RhbmNlID8/IHRoaXMucmFkaXVzLFxuICAgICAgICAgIHVubGVycCgwLCB0aGlzLnJhZGl1cywgdmVjLmxlbih2ZWMuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFkb3dQb3NpdGlvbiA9IHZlYy5tdWwoXG4gICAgICAgICAgdmVjLm5vcih2ZWMuc3ViKHNoYWRvd09yaWdpbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIHNoYWRvd0Rpc3RhbmNlXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYWRvd1NpemUgPSB2ZWMubXVsKGNhc3Rlci5zaXplLCAwLjUpO1xuXG4gICAgICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZ2xvYmFsQWxwaGEgPSBjYXN0ZXIuYWxwaGE7XG4gICAgICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueCAtIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICBzaGFkb3dPcmlnaW4ueSAtIHRoaXMucG9zaXRpb24ueVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZWxsaXBzZShcbiAgICAgICAgICBzaGFkb3dQb3NpdGlvbi54LFxuICAgICAgICAgIHNoYWRvd1Bvc2l0aW9uLnksXG4gICAgICAgICAgc2hhZG93U2l6ZS54LFxuICAgICAgICAgIHNoYWRvd1NpemUueSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZmlsbCgpO1xuICAgICAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gU2F2ZSBzaGFkb3cgbWV0YWRhdGEgZm9yIHVzZSBsYXRlciB3aGVuIHJlbmRlcmluZyB3YWxsIHNoYWRvd3NcbiAgICAgICAgc2hhZG93cy5wdXNoKHtcbiAgICAgICAgICBjYXN0ZXIsXG4gICAgICAgICAgbGVmdEVkZ2U6IG51bGwsXG4gICAgICAgICAgcmlnaHRFZGdlOiBudWxsLFxuICAgICAgICAgIHBvc2l0aW9uOiB2ZWMuYWRkKHNoYWRvd09yaWdpbiwgc2hhZG93UG9zaXRpb24pLFxuICAgICAgICAgIHNpemU6IHNoYWRvd1NpemUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICByZXR1cm4gc2hhZG93cztcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVdhbGxSZWdpb25TaGFkb3dzKFxuICAgIGxpZ2h0UmVjdGFuZ2xlOiBSZWN0YW5nbGUsXG4gICAgcmVnaW9uU2hhZG93czogU2hhZG93PFJlZ2lvbkNhc3Rlcj5bXSxcbiAgICByZWdpb25TaGFkb3dDYXN0ZXJzOiBSZWdpb25DYXN0ZXJbXSxcbiAgICB3YWxsU2hhZG93UmVjZWl2ZXJzOiBXYWxsUmVjZWl2ZXJbXVxuICApIHtcbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKHRoaXMud2FsbExpZ2h0MUNvbnRleHQpO1xuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgK1xuICAgICAgICB0aGlzLl9yYWRpdXMgLVxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG5cbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKHRoaXMud2FsbExpZ2h0MkNvbnRleHQpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgK1xuICAgICAgICB0aGlzLl9yYWRpdXMgLVxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IHdhbGwgb2Ygd2FsbFNoYWRvd1JlY2VpdmVycykge1xuICAgICAgY29uc3Qgd2FsbFJlY3RhbmdsZSA9IHtcbiAgICAgICAgcG9zaXRpb246IHdhbGwucG9zaXRpb24sXG4gICAgICAgIHNpemU6IHdhbGwuc2l6ZSxcbiAgICAgIH07XG4gICAgICBjb25zdCB3YWxsSW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHdhbGxSZWN0YW5nbGUpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHdhbGwgc2hhZG93IHJlY2VpdmVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIHdhbGxSZWN0YW5nbGUpKSB7XG4gICAgICAgIC8vIElmIHRoZSB3YWxsIGRvZXNuJ3QgcmVjZWl2ZSBsaWdodCwgaXQgYWxzbyBkb2Vzbid0IHJlY2VpdmVcbiAgICAgICAgLy8gcGFydGlhbCBvciBmdWxsIHNoYWRvd3NcbiAgICAgICAgaWYgKCF3YWxsLnJlY2VpdmVMaWdodCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBzaGFkb3cgdG8gc2VlIGlmIGl0IGZ1bGx5IG9yIHBhcnRpYWxseSBzaGFkb3dzIHRoaXMgd2FsbFxuICAgICAgICBmb3IgKGNvbnN0IHNoYWRvdyBvZiByZWdpb25TaGFkb3dzKSB7XG4gICAgICAgICAgY29uc3Qgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IHNoYWRvdy5jYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgICBzaXplOiBzaGFkb3cuY2FzdGVyLnNpemUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGVcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gQSBzaGFkb3cgY2FzdGVyIGRvZXNuJ3QgY2FzdCBhIHNoYWRvdyBvbnRvIGEgcmVjZWl2ZXIgdGhhdFxuICAgICAgICAgIC8vIG92ZXJsYXBzIGl0XG4gICAgICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3Qod2FsbFJlY3RhbmdsZSwgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBzaGFkb3cgaGFzIG5vIGVkZ2VzICh0aGlzIG1lYW5zIHRoZSBsaWdodCBpcyBpbnNpZGVcbiAgICAgICAgICAvLyB0aGUgc2hhZG93IGNhc3RlciByZWdpb24sIGFuZCBhcyBzdWNoIGl0IGRvZXNuJ3QgY2FzdCBhIHNoYWRvdylcbiAgICAgICAgICBpZiAoc2hhZG93LmxlZnRFZGdlID09PSBudWxsICYmIHNoYWRvdy5yaWdodEVkZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIGJvdGggc2hhZG93IGVkZ2VzIGFyZSBub3QgcG9pbnRpbmcgdXAgdGhlbiB0aGlzIHNoYWRvdyBkb2Vzbid0XG4gICAgICAgICAgLy8gY2FzdCBvbiB0aGlzIHdhbGxcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2UgJiZcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZS5zdGFydC55IDw9IHNoYWRvdy5sZWZ0RWRnZS5lbmQueSAmJlxuICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZSAmJlxuICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZS5zdGFydC55IDw9IHNoYWRvdy5yaWdodEVkZ2UuZW5kLnlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCdzIGxvd2VyIGVkZ2UgaXMgYmVsb3cgdGhlIHNoYWRvdyBjYXN0ZXInc1xuICAgICAgICAgIC8vIGxvd2VyIGVkZ2UuIElmIHNvLCB0aGUgY2FzdGVyIGRvZXNuJ3QgY2FzdCBhIHNoYWRvdyBvbiB0aGlzIHdhbGxcbiAgICAgICAgICBpZiAod2FsbEludGVydmFsLmJvdHRvbSA+IHNoYWRvd0Nhc3RlckludGVydmFsLmJvdHRvbSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRWRnZSBjYXNlOiBpZiB0aGUgY2FzdGVyIGlzIHBhcnRpYWxseSBhYm92ZSBhbmQgYmVsb3cgdGhlIHdhbGwnc1xuICAgICAgICAgIC8vIGxvd2VyIGVkZ2UgYW5kIHRoZSBzaGFkb3cgaXMgcG9pbnRpbmcgYXdheSBmcm9tIHRoZSB3YWxsLCB3ZSBkb24ndFxuICAgICAgICAgIC8vIGNhc3QgYSBzaGFkb3dcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJJbnRlcnZhbC50b3AgPD0gd2FsbEludGVydmFsLmJvdHRvbSAmJlxuICAgICAgICAgICAgc2hhZG93Q2FzdGVySW50ZXJ2YWwuYm90dG9tID49IHdhbGxJbnRlcnZhbC5ib3R0b21cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIFNoYWRvdyBjYXN0ZXIgaXMgdG8gdGhlIGxlZnQgb2Ygc2hhZG93IHJlY2VpdmVyXG4gICAgICAgICAgICBpZiAoc2hhZG93Q2FzdGVySW50ZXJ2YWwucmlnaHQgPD0gd2FsbEludGVydmFsLmxlZnQpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChzaGFkb3cucmlnaHRFZGdlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnggPj0gc2hhZG93LnJpZ2h0RWRnZS5lbmQueCkgJiZcbiAgICAgICAgICAgICAgICAoc2hhZG93LmxlZnRFZGdlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2Uuc3RhcnQueCA+PSBzaGFkb3cubGVmdEVkZ2UuZW5kLngpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNoYWRvdyBjYXN0ZXIgaXMgdG8gdGhlIHJpZ2h0IG9mIHNoYWRvdyByZWNlaXZlclxuICAgICAgICAgICAgaWYgKHNoYWRvd0Nhc3RlckludGVydmFsLmxlZnQgPj0gd2FsbEludGVydmFsLnJpZ2h0KSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoc2hhZG93LnJpZ2h0RWRnZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZS5zdGFydC54IDw9IHNoYWRvdy5yaWdodEVkZ2UuZW5kLngpICYmXG4gICAgICAgICAgICAgICAgKHNoYWRvdy5sZWZ0RWRnZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlLnN0YXJ0LnggPD0gc2hhZG93LmxlZnRFZGdlLmVuZC54KVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCdzIGxvd2VyIGVkZ2UgaXMgY29saW5lYXIgd2l0aCB0aGUgc2hhZG93XG4gICAgICAgICAgLy8gY2FzdGVyJ3MgbG93ZXIgZWRnZS4gSWYgc28sIHdlIGFsbG93IGxpZ2h0IHRvIHBhc3MgKGluIG1vc3QgY2FzZXMpXG4gICAgICAgICAgLy8gRWRnZSBjYXNlOiBpZiB0aGVyZSdzIGFub3RoZXIgc2hhZG93IGNhc3RlciBkaXJlY3RseSBiZWxvdyB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IG9uZSwgdGhlbiBpdCBtaWdodCBjcmVhdGUgYSBzaGFkb3dcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tID09PSBzaGFkb3dDYXN0ZXJJbnRlcnZhbC5ib3R0b20gJiZcbiAgICAgICAgICAgICFyZWdpb25TaGFkb3dDYXN0ZXJzLnNvbWUoYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhc3RlckludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbCh7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGMucG9zaXRpb24sXG4gICAgICAgICAgICAgICAgc2l6ZTogYy5zaXplLFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGNhc3RlckludGVydmFsLnRvcCA9PT0gc2hhZG93Q2FzdGVySW50ZXJ2YWwuYm90dG9tICYmXG4gICAgICAgICAgICAgICAgb3ZlcmxhcDFkKFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogY2FzdGVySW50ZXJ2YWwubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBjYXN0ZXJJbnRlcnZhbC5yaWdodCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBzaGFkb3dDYXN0ZXJJbnRlcnZhbC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHNoYWRvd0Nhc3RlckludGVydmFsLnJpZ2h0LFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkgIT09IG51bGxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgbGVmdEludGVyY2VwdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgaWYgKHNoYWRvdy5sZWZ0RWRnZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdEludGVyY2VwdFJlc3VsdCA9IGxpbmVZSW50ZXJjZXB0KFxuICAgICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2UsXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b21cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobGVmdEludGVyY2VwdFJlc3VsdCkge1xuICAgICAgICAgICAgICBbbGVmdEludGVyY2VwdF0gPSBsZWZ0SW50ZXJjZXB0UmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hhZG93LmxlZnRFZGdlLnN0YXJ0LnkgPCBzaGFkb3cubGVmdEVkZ2UuZW5kLnkpIHtcbiAgICAgICAgICAgICAgbGVmdEludGVyY2VwdCA9IHdhbGxJbnRlcnZhbC5sZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCByaWdodEludGVyY2VwdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgaWYgKHNoYWRvdy5yaWdodEVkZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0SW50ZXJjZXB0UmVzdWx0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHNoYWRvdy5yaWdodEVkZ2UsXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b21cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmlnaHRJbnRlcmNlcHRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgW3JpZ2h0SW50ZXJjZXB0XSA9IHJpZ2h0SW50ZXJjZXB0UmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hhZG93LnJpZ2h0RWRnZS5zdGFydC55IDwgc2hhZG93LnJpZ2h0RWRnZS5lbmQueSkge1xuICAgICAgICAgICAgICByaWdodEludGVyY2VwdCA9IHdhbGxJbnRlcnZhbC5yaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1heCh3YWxsSW50ZXJ2YWwubGVmdCwgbGVmdEludGVyY2VwdCA/PyAtSW5maW5pdHkpO1xuICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHdhbGxJbnRlcnZhbC5yaWdodCwgcmlnaHRJbnRlcmNlcHQgPz8gSW5maW5pdHkpO1xuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRoZSBzaGFkb3cgaWYgaXQncyBnb3QgbmVnYXRpdmUgd2lkdGhcbiAgICAgICAgICBpZiAobWluID49IG1heCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRoZSBzaGFkb3cgaWYgaXQncyBvdXRzaWRlIHRoZSB3YWxsIGJvdW5kYXJpZXNcbiAgICAgICAgICBpZiAobWluID4gd2FsbEludGVydmFsLnJpZ2h0IHx8IG1heCA8IHdhbGxJbnRlcnZhbC5sZWZ0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvdmVybGFwMWQoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogbWluLFxuICAgICAgICAgICAgICAgIGVuZDogbWF4LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IHdhbGxJbnRlcnZhbC5sZWZ0LFxuICAgICAgICAgICAgICAgIGVuZDogd2FsbEludGVydmFsLnJpZ2h0LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgICAgICAgc3dpdGNoICh3YWxsLmxheWVyKSB7XG4gICAgICAgICAgICAgIGNhc2UgV2FsbFNoYWRvd0xheWVyLk9uZTpcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcy53YWxsTGlnaHQxQ29udGV4dDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIFdhbGxTaGFkb3dMYXllci5Ud286XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMud2FsbExpZ2h0MkNvbnRleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KG1pbiwgd2FsbEludGVydmFsLnRvcCwgbWF4IC0gbWluLCB3YWxsLnNpemUueSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlV2FsbFNwcml0ZVNoYWRvd3MoXG4gICAgbGlnaHRSZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgICBzcHJpdGVTaGFkb3dzOiBTaGFkb3c8U3ByaXRlQ2FzdGVyPltdLFxuICAgIHdhbGxTaGFkb3dSZWNlaXZlcnM6IFdhbGxSZWNlaXZlcltdXG4gICkge1xuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyh0aGlzLndhbGxMaWdodDFDb250ZXh0KTtcbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIC10aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9yYWRpdXMsXG4gICAgICAtdGhpcy5wb3NpdGlvbi55ICtcbiAgICAgICAgdGhpcy5fcmFkaXVzIC1cbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXRcbiAgICApO1xuXG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5zZXR1cFNvZnRTaGFkb3dzKHRoaXMud2FsbExpZ2h0MkNvbnRleHQpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgK1xuICAgICAgICB0aGlzLl9yYWRpdXMgLVxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IHdhbGwgb2Ygd2FsbFNoYWRvd1JlY2VpdmVycykge1xuICAgICAgY29uc3Qgd2FsbFJlY3RhbmdsZSA9IHtcbiAgICAgICAgcG9zaXRpb246IHdhbGwucG9zaXRpb24sXG4gICAgICAgIHNpemU6IHdhbGwuc2l6ZSxcbiAgICAgIH07XG4gICAgICBjb25zdCB3YWxsSW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHdhbGxSZWN0YW5nbGUpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHdhbGwgc2hhZG93IHJlY2VpdmVyIGlzIGluIHJhbmdlIG9mIHRoZSBsaWdodFxuICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3QobGlnaHRSZWN0YW5nbGUsIHdhbGxSZWN0YW5nbGUpKSB7XG4gICAgICAgIC8vIElmIHRoZSB3YWxsIGRvZXNuJ3QgcmVjZWl2ZSBsaWdodCwgaXQgYWxzbyBkb2Vzbid0IHJlY2VpdmVcbiAgICAgICAgLy8gcGFydGlhbCBvciBmdWxsIHNoYWRvd3NcbiAgICAgICAgaWYgKCF3YWxsLnJlY2VpdmVMaWdodCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBzaGFkb3cgdG8gc2VlIGlmIGl0IG9jY2x1ZGVzIHRoaXMgd2FsbFxuICAgICAgICBmb3IgKGNvbnN0IHNoYWRvdyBvZiBzcHJpdGVTaGFkb3dzKSB7XG4gICAgICAgICAgY29uc3Qgc2hhZG93U3ByaXRlID0gc2hhZG93LmNhc3Rlci5nZXRTaGFkb3coKTtcblxuICAgICAgICAgIC8vIElmIHRoZSBzaGFkb3cgc3ByaXRlIGlzIG1pc3NpbmcgZm9yIHRoaXMgY2FzdGVyIHRoZW4gaXQgZG9lc24ndFxuICAgICAgICAgIC8vIGNhc3QgYSBzaGFkb3dcbiAgICAgICAgICBpZiAoIXNoYWRvd1Nwcml0ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IHNoYWRvdy5jYXN0ZXIucG9zaXRpb24sXG4gICAgICAgICAgICBzaXplOiBzaGFkb3cuY2FzdGVyLnNpemUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwoXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGVcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gQSBzaGFkb3cgY2FzdGVyIGRvZXNuJ3QgY2FzdCBhIHNoYWRvdyBvbnRvIGEgcmVjZWl2ZXIgdGhhdFxuICAgICAgICAgIC8vIG92ZXJsYXBzIGl0XG4gICAgICAgICAgaWYgKHJlY3RhbmdsZXNJbnRlcnNlY3Qod2FsbFJlY3RhbmdsZSwgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBzaGFkb3cgaGFzIG5vIGVkZ2VzICh0aGlzIG1lYW5zIHRoZSBsaWdodCBpcyBpbnNpZGVcbiAgICAgICAgICAvLyB0aGUgc2hhZG93IGNhc3RlciByZWdpb24sIGFuZCBhcyBzdWNoIGl0IGRvZXNuJ3QgY2FzdCBhIHNoYWRvdylcbiAgICAgICAgICBpZiAoc2hhZG93LmxlZnRFZGdlID09PSBudWxsICYmIHNoYWRvdy5yaWdodEVkZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIGJvdGggc2hhZG93IGVkZ2VzIGFyZSBub3QgcG9pbnRpbmcgdXAgdGhlbiB0aGlzIHNoYWRvdyBkb2Vzbid0XG4gICAgICAgICAgLy8gY2FzdCBvbiB0aGlzIHdhbGxcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2UgJiZcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZS5zdGFydC55IDw9IHNoYWRvdy5sZWZ0RWRnZS5lbmQueSAmJlxuICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZSAmJlxuICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZS5zdGFydC55IDw9IHNoYWRvdy5yaWdodEVkZ2UuZW5kLnlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCdzIGxvd2VyIGVkZ2UgaXMgYmVsb3cgdGhlIHNoYWRvdyBjYXN0ZXInc1xuICAgICAgICAgIC8vIGxvd2VyIGVkZ2UuIElmIHNvLCB0aGUgY2FzdGVyIGRvZXNuJ3QgY2FzdCBhIHNoYWRvdyBvbiB0aGlzIHdhbGxcbiAgICAgICAgICBpZiAod2FsbEludGVydmFsLmJvdHRvbSA+IHNoYWRvd0Nhc3RlckludGVydmFsLmJvdHRvbSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGxlZnRJbnRlcmNlcHQ6IFtudW1iZXIsIG51bWJlcl0gfCBudWxsID0gbnVsbDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2UgJiZcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZS5zdGFydC55ID4gc2hhZG93LmxlZnRFZGdlLmVuZC55XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSxcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHJpZ2h0SW50ZXJjZXB0OiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZSAmJlxuICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZS5zdGFydC55ID4gc2hhZG93LnJpZ2h0RWRnZS5lbmQueVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmlnaHRJbnRlcmNlcHQgPSBsaW5lWUludGVyY2VwdChcbiAgICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZSxcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgb25seSB0aGUgdG9wLXJpZ2h0IGNvcm5lciBvZiB0aGUgc3ByaXRlIHNoYWRvdyByZWN0YW5nbGVcbiAgICAgICAgICAvLyBpbnRlcmNlcHRlZCB0aGUgd2FsbCwgdGhlbiB3ZSdsbCBuZWVkIHRvIGZpbmQgd2hlcmUgdGhlIHRvcC1sZWZ0XG4gICAgICAgICAgLy8gY29ybmVyICp3b3VsZCBoYXZlKiBpbnRlcmNlcHRlZCAoYWxsb3dBZnRlciA9IHRydWUpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hhZG93LnJpZ2h0RWRnZSAmJlxuICAgICAgICAgICAgbGVmdEludGVyY2VwdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgcmlnaHRJbnRlcmNlcHQgPT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHNoYWRvdy5yaWdodEVkZ2UsXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b21cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTGlrZXdpc2UsIGlmIG9ubHkgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgc3ByaXRlIHNoYWRvd1xuICAgICAgICAgIC8vIHJlY3RhbmdsZSBpbnRlcmNlcHRlZCB0aGUgd2FsbCwgdGhlbiB3ZSdsbCBuZWVkIHRvIGZpbmQgd2hlcmUgdGhlXG4gICAgICAgICAgLy8gdG9wLWxlZnQgY29ybmVyICp3b3VsZCBoYXZlKiBpbnRlcmNlcHRlZCAoYWxsb3dBZnRlciA9IHRydWUpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlICYmXG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ID09PSBudWxsICYmXG4gICAgICAgICAgICByaWdodEludGVyY2VwdCAhPT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGVmdEludGVyY2VwdCA9IGxpbmVZSW50ZXJjZXB0KFxuICAgICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2UsXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b21cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIGEgc2hhZG93IGlmIGVpdGhlciBpbnRlcmNlcHQgaXMgbWlzc2luZyAodGhpcyBjYW5cbiAgICAgICAgICAvLyBoYXBwZW4gaWYgYm90aCBzaGFkb3cgZWRnZXMgYXJlIHBvaW50aW5nIGRvd24pXG4gICAgICAgICAgaWYgKGxlZnRJbnRlcmNlcHQgPT09IG51bGwgfHwgcmlnaHRJbnRlcmNlcHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERvbid0IHJlbmRlciBhIHNoYWRvdyBpZiB0aGUgaW50ZXJjZXB0cyBhcmUgdGhlIHdyb25nIHdheSAncm91bmRcbiAgICAgICAgICAvLyBvciB0aGUgZ2FwIGJldHdlZW4gdGhlbSBpcyAwXG4gICAgICAgICAgLy8gKG5vdCBzdXJlIGlmIHRoaXMgaXMgcG9zc2libGUsIGJ1dCBqdXN0IG1ha2luZyBzdXJlKVxuICAgICAgICAgIGlmIChsZWZ0SW50ZXJjZXB0W0lOVEVSQ0VQVF9YXSA+PSByaWdodEludGVyY2VwdFtJTlRFUkNFUFRfWF0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERvbid0IHJlbmRlciB0aGUgc2hhZG93IGlmIGl0J3Mgb3V0c2lkZSB0aGUgd2FsbCBib3VuZGFyaWVzXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbGVmdEludGVyY2VwdFtJTlRFUkNFUFRfWF0gPiB3YWxsSW50ZXJ2YWwucmlnaHQgfHxcbiAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0W0lOVEVSQ0VQVF9YXSA8IHdhbGxJbnRlcnZhbC5sZWZ0XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0ID1cbiAgICAgICAgICAgIChsZWZ0SW50ZXJjZXB0W0lOVEVSQ0VQVF9UXSArIHJpZ2h0SW50ZXJjZXB0W0lOVEVSQ0VQVF9UXSkgLyAyICtcbiAgICAgICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5zcHJpdGVXYWxsU2hhZG93SW50ZXJjZXB0T2Zmc2V0O1xuICAgICAgICAgIGNvbnN0IGwgPVxuICAgICAgICAgICAgKHZlYy5sZW4odmVjLnN1YihzaGFkb3cubGVmdEVkZ2UhLnN0YXJ0LCBzaGFkb3cubGVmdEVkZ2UhLmVuZCkpICtcbiAgICAgICAgICAgICAgdmVjLmxlbihcbiAgICAgICAgICAgICAgICB2ZWMuc3ViKHNoYWRvdy5yaWdodEVkZ2UhLnN0YXJ0LCBzaGFkb3cucmlnaHRFZGdlIS5lbmQpXG4gICAgICAgICAgICAgICkpIC9cbiAgICAgICAgICAgIDI7XG4gICAgICAgICAgY29uc3Qgc291cmNlSGVpZ2h0ID0gc2hhZG93U3ByaXRlLmhlaWdodCAqICgxIC0gdCk7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb25IZWlnaHQgPVxuICAgICAgICAgICAgbCAqXG4gICAgICAgICAgICAoMSAtIHQpICpcbiAgICAgICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5zcHJpdGVXYWxsU2hhZG93TGVuZ3RoRmFjdG9yO1xuXG4gICAgICAgICAgbGV0IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICAgICAgICBzd2l0Y2ggKHdhbGwubGF5ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgV2FsbFNoYWRvd0xheWVyLk9uZTpcbiAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMud2FsbExpZ2h0MUNvbnRleHQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFdhbGxTaGFkb3dMYXllci5Ud286XG4gICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLndhbGxMaWdodDJDb250ZXh0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGNvbnRleHQucmVjdChcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUuc2l6ZS54LFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5zaXplLnlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnRleHQuY2xpcCgpO1xuICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgICAgc2hhZG93U3ByaXRlLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBzaGFkb3dTcHJpdGUud2lkdGgsXG4gICAgICAgICAgICBzb3VyY2VIZWlnaHQsXG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0W0lOVEVSQ0VQVF9YXSxcbiAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b20gLSBkZXN0aW5hdGlvbkhlaWdodCxcbiAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0W0lOVEVSQ0VQVF9YXSAtIGxlZnRJbnRlcmNlcHRbSU5URVJDRVBUX1hdLFxuICAgICAgICAgICAgZGVzdGluYXRpb25IZWlnaHRcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVXYWxsQ2lyY2xlU2hhZG93cyhcbiAgICBsaWdodFJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGNpcmNsZVNoYWRvd3M6IFNoYWRvdzxDaXJjbGVDYXN0ZXI+W10sXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVyczogV2FsbFJlY2VpdmVyW11cbiAgKSB7XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy53YWxsTGlnaHQxQ29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyh0aGlzLndhbGxMaWdodDFDb250ZXh0KTtcbiAgICB0aGlzLndhbGxMaWdodDFDb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIC10aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9yYWRpdXMsXG4gICAgICAtdGhpcy5wb3NpdGlvbi55ICtcbiAgICAgICAgdGhpcy5fcmFkaXVzIC1cbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXRcbiAgICApO1xuXG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy53YWxsTGlnaHQyQ29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2V0dXBTb2Z0U2hhZG93cyh0aGlzLndhbGxMaWdodDJDb250ZXh0KTtcbiAgICB0aGlzLndhbGxMaWdodDJDb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIC10aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9yYWRpdXMsXG4gICAgICAtdGhpcy5wb3NpdGlvbi55ICtcbiAgICAgICAgdGhpcy5fcmFkaXVzIC1cbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLndhbGxMaWdodGluZ1lPZmZzZXRcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCB3YWxsIG9mIHdhbGxTaGFkb3dSZWNlaXZlcnMpIHtcbiAgICAgIGNvbnN0IHdhbGxSZWN0YW5nbGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiB3YWxsLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiB3YWxsLnNpemUsXG4gICAgICB9O1xuICAgICAgY29uc3Qgd2FsbEludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbCh3YWxsUmVjdGFuZ2xlKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsIHNoYWRvdyByZWNlaXZlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCB3YWxsUmVjdGFuZ2xlKSkge1xuICAgICAgICAvLyBJZiB0aGUgd2FsbCBkb2Vzbid0IHJlY2VpdmUgbGlnaHQsIGl0IGFsc28gZG9lc24ndCByZWNlaXZlXG4gICAgICAgIC8vIHBhcnRpYWwgb3IgZnVsbCBzaGFkb3dzXG4gICAgICAgIGlmICghd2FsbC5yZWNlaXZlTGlnaHQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGVhY2ggc2hhZG93IHRvIHNlZSBpZiBpdCBvY2NsdWRlcyB0aGlzIHdhbGxcbiAgICAgICAgZm9yIChjb25zdCBzaGFkb3cgb2YgY2lyY2xlU2hhZG93cykge1xuICAgICAgICAgIC8vIElmIHRoZSBzaGFkb3cgZG9lc24ndCBoYXZlIGEgcG9zaXRpb24gb3Igc2l6ZSB0aGVuIGl0J3Mgbm90IGFcbiAgICAgICAgICAvLyB2YWxpZCBjaXJjbGUgc2hhZG93XG4gICAgICAgICAgaWYgKCFzaGFkb3cucG9zaXRpb24gfHwgIXNoYWRvdy5zaXplKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc2hhZG93LmNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICAgIHNpemU6IHNoYWRvdy5jYXN0ZXIuc2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0Nhc3RlckludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBBIHNoYWRvdyBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9udG8gYSByZWNlaXZlciB0aGF0XG4gICAgICAgICAgLy8gb3ZlcmxhcHMgaXRcbiAgICAgICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdCh3YWxsUmVjdGFuZ2xlLCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHdhbGwncyBsb3dlciBlZGdlIGlzIGJlbG93IHRoZSBzaGFkb3cgY2FzdGVyJ3NcbiAgICAgICAgICAvLyBsb3dlciBlZGdlLiBJZiBzbywgdGhlIGNhc3RlciBkb2Vzbid0IGNhc3QgYSBzaGFkb3cgb24gdGhpcyB3YWxsXG4gICAgICAgICAgaWYgKHdhbGxJbnRlcnZhbC5ib3R0b20gPiBzaGFkb3dDYXN0ZXJJbnRlcnZhbC5ib3R0b20pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNoYWRvdy5zaXplIGNvbnRhaW5zIHRoZSByYWRpaSBvZiB0aGUgc2hhZG93IGVsbGlwc2VcbiAgICAgICAgICBjb25zdCBzaGFkb3dSZWN0YW5nbGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjLnN1YihzaGFkb3cucG9zaXRpb24sIHNoYWRvdy5zaXplKSxcbiAgICAgICAgICAgIHNpemU6IHZlYy5tdWwoc2hhZG93LnNpemUsIDIpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBPbmx5IGNhc3QgdGhpcyBzaGFkb3cgaWYgaXQgb3ZlcmxhcHMgdGhlIHdhbGxcbiAgICAgICAgICBpZiAoIXJlY3RhbmdsZXNJbnRlcnNlY3Qod2FsbFJlY3RhbmdsZSwgc2hhZG93UmVjdGFuZ2xlKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICAgICAgICBzd2l0Y2ggKHdhbGwubGF5ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgV2FsbFNoYWRvd0xheWVyLk9uZTpcbiAgICAgICAgICAgICAgY29udGV4dCA9IHRoaXMud2FsbExpZ2h0MUNvbnRleHQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFdhbGxTaGFkb3dMYXllci5Ud286XG4gICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLndhbGxMaWdodDJDb250ZXh0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGNvbnRleHQucmVjdChcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUuc2l6ZS54LFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5zaXplLnlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnRleHQuY2xpcCgpO1xuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY29udGV4dC5lbGxpcHNlKFxuICAgICAgICAgICAgc2hhZG93LnBvc2l0aW9uLngsXG4gICAgICAgICAgICBzaGFkb3cucG9zaXRpb24ueSxcbiAgICAgICAgICAgIHNoYWRvdy5zaXplLngsXG4gICAgICAgICAgICBzaGFkb3cuc2l6ZS55ICpcbiAgICAgICAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLmNpcmNsZVdhbGxTaGFkb3dMZW5ndGhGYWN0b3IsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIE1hdGguUEkgKiAyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gc2hhZG93LmNhc3Rlci5hbHBoYTtcbiAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMud2FsbExpZ2h0MUNvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMud2FsbExpZ2h0MkNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlUmVnaW9uU2hhZG93KFxuICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZTogUmVjdGFuZ2xlLFxuICAgIGluY2x1ZGVDYXN0ZXJSZWdpb246IGJvb2xlYW4gPSBmYWxzZVxuICApOiB7XG4gICAgc2hhZG93Q2FzdGVySW50ZXJ2YWw6IEludGVydmFsMmQ7XG4gICAgbGVmdEVkZ2U6IExpbmUgfCBudWxsO1xuICAgIHJpZ2h0RWRnZTogTGluZSB8IG51bGw7XG4gICAgdmVydGljZXM6IFBvbHlnb25WZXJ0aWNlcztcbiAgfSB7XG4gICAgY29uc3QgbGlnaHRQb3NpdGlvbiA9IHZlYy5jcHkodGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgbGlnaHRSYWRpdXMgPSB0aGlzLl9yYWRpdXM7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVyVmVydGljZXMgPSByZWN0YW5nbGVWZXJ0aWNlcyhzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpO1xuICAgIGNvbnN0IHNoYWRvd0VkZ2VzOiBMaW5lW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhZG93Q2FzdGVyVmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gYXQoc2hhZG93Q2FzdGVyVmVydGljZXMsIGkgLSAxKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzaGFkb3dDYXN0ZXJWZXJ0aWNlc1tpXTtcblxuICAgICAgaWYgKCFsaW5lSXNGYWNpbmcoeyBzdGFydDogcHJldmlvdXMsIGVuZDogY3VycmVudCB9LCB0aGlzLnBvc2l0aW9uKSkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXgxID0gdmVjLnN1YihwcmV2aW91cywgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHZlcnRleDIgPSB2ZWMuc3ViKGN1cnJlbnQsIGxpZ2h0UG9zaXRpb24pO1xuICAgICAgICBzaGFkb3dFZGdlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0OiBwcmV2aW91cyxcbiAgICAgICAgICAgIGVuZDogdmVjLmFkZChcbiAgICAgICAgICAgICAgcHJldmlvdXMsXG4gICAgICAgICAgICAgIHZlYy5tdWwoXG4gICAgICAgICAgICAgICAgdmVjLm5vcih2ZXJ0ZXgxKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIgLSB2ZWMubGVuKHZlcnRleDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IGN1cnJlbnQsXG4gICAgICAgICAgICBlbmQ6IHZlYy5hZGQoXG4gICAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICAgIHZlYy5tdWwoXG4gICAgICAgICAgICAgICAgdmVjLm5vcih2ZXJ0ZXgyKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIgLSB2ZWMubGVuKHZlcnRleDIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbGVmdEVkZ2U6IExpbmUgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcmlnaHRFZGdlOiBMaW5lIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3Qgc2hhZG93UG9seWdvbjogUG9seWdvblZlcnRpY2VzID0gW107XG4gICAgc3dpdGNoIChzZWN0b3IyZCh0aGlzLnBvc2l0aW9uLCBzaGFkb3dDYXN0ZXJJbnRlcnZhbCkpIHtcbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBzaGFkb3dFZGdlc1swXTtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbM107XG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzJdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1sxXTtcbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMl0uZW5kLCBzaGFkb3dFZGdlc1syXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1sxXS5lbmQsIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMl0uZW5kLCBzaGFkb3dFZGdlc1syXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1sxXS5lbmQsIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcFJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzJdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1sxXTtcbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHZlYyhcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnggKyBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZS54LFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5lbmRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5lbmQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1s1XTtcbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkluc2lkZTpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbNF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzNdO1xuICAgICAgICBpZiAoaW5jbHVkZUNhc3RlclJlZ2lvbikge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s0XS5lbmQsIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzNdLmVuZCwgc2hhZG93RWRnZXNbM10uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5lbmQsXG4gICAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s0XS5lbmQsIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzNdLmVuZCwgc2hhZG93RWRnZXNbM10uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBzaGFkb3dFZGdlc1swXTtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbM107XG4gICAgICAgIGlmIChpbmNsdWRlQ2FzdGVyUmVnaW9uKSB7XG4gICAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbM10uZW5kLngsIHNoYWRvd0VkZ2VzWzBdLmVuZC55KSxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgICAgdmVjKFxuICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUuc2l6ZS55XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1szXS5lbmQueCwgc2hhZG93RWRnZXNbMF0uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1s1XTtcbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbVJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1szXTtcbiAgICAgICAgaWYgKGluY2x1ZGVDYXN0ZXJSZWdpb24pIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICB2ZWMuYWRkKHNoYWRvd0Nhc3RlclJlY3RhbmdsZS5wb3NpdGlvbiwgc2hhZG93Q2FzdGVyUmVjdGFuZ2xlLnNpemUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYWRvd0Nhc3RlckludGVydmFsLFxuICAgICAgbGVmdEVkZ2UsXG4gICAgICByaWdodEVkZ2UsXG4gICAgICB2ZXJ0aWNlczogc2hhZG93UG9seWdvbixcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2hhZGVyKGNhbWVyYTogTGlnaHRpbmdDYW1lcmEpIHtcbiAgICAvLyBUaGUgc2hhZGVyIG1pZ2h0IGhhdmUgYmVlbiBlbmFibGVkIGFmdGVyIHRoaXMgbGlnaHQgd2FzIGNyZWF0ZWRcbiAgICBpZiAoIXRoaXMuc2hhZGVyQ2FudmFzKSB7XG4gICAgICBjb25zdCB7IHNoYWRlciB9ID0gdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zO1xuICAgICAgaWYgKCFzaGFkZXIgfHwgIXRoaXMubGlnaHRpbmdTeXN0ZW0uY2FuQ3JlYXRlU2hhZGVyQ2FudmFzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNoYWRlckNhbnZhcyA9IG5ldyBTaGFkZXJDYW52YXMoKTtcbiAgICAgIHRoaXMuc2hhZGVyQ2FudmFzLnNldFNoYWRlcihzaGFkZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpZ2h0VG9wTGVmdFNjcmVlblBvc2l0aW9uID0gY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICB2ZWMuc3ViKHRoaXMucG9zaXRpb24sIHZlYyh0aGlzLl9yYWRpdXMpKVxuICAgICk7XG4gICAgY29uc3QgbGlnaHRCb3R0b21SaWdodFNjcmVlblBvc2l0aW9uID0gY2FtZXJhLndvcmxkVG9TY3JlZW4oXG4gICAgICB2ZWMuYWRkKHRoaXMucG9zaXRpb24sIHZlYyh0aGlzLl9yYWRpdXMpKVxuICAgICk7XG5cbiAgICBjb25zdCBzID0gKHRoaXMuX3JhZGl1cyAqIDIpIC8gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgaWYgKHRoaXMuc2hhZGVyQ2FudmFzLndpZHRoICE9PSBzKSB7XG4gICAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRTaXplKHMsIHMpO1xuICAgIH1cbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRVbmlmb3JtKCd1X3Jlc29sdXRpb24nLCBbXG4gICAgICB0aGlzLl9yYWRpdXMgKiAyLFxuICAgICAgdGhpcy5fcmFkaXVzICogMixcbiAgICBdKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRVbmlmb3JtKCd1X2xpZ2h0Q29sb3VyJywgW1xuICAgICAgdGhpcy5jb2xvdXJPYmplY3QuciAvIDI1NSxcbiAgICAgIHRoaXMuY29sb3VyT2JqZWN0LmcgLyAyNTUsXG4gICAgICB0aGlzLmNvbG91ck9iamVjdC5iIC8gMjU1LFxuICAgICAgdGhpcy5jb2xvdXJPYmplY3QuYSxcbiAgICBdKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRVbmlmb3JtKCd1X2xpZ2h0U2NyZWVuUG9zaXRpb25Ub3BMZWZ0JywgW1xuICAgICAgbGlnaHRUb3BMZWZ0U2NyZWVuUG9zaXRpb24ueCAvIHRoaXMubGlnaHRpbmdTeXN0ZW0uc2NyZWVuLngsXG4gICAgICBsaWdodFRvcExlZnRTY3JlZW5Qb3NpdGlvbi55IC8gdGhpcy5saWdodGluZ1N5c3RlbS5zY3JlZW4ueSxcbiAgICBdKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRVbmlmb3JtKCd1X2xpZ2h0U2NyZWVuUG9zaXRpb25Cb3R0b21SaWdodCcsIFtcbiAgICAgIGxpZ2h0Qm90dG9tUmlnaHRTY3JlZW5Qb3NpdGlvbi54IC8gdGhpcy5saWdodGluZ1N5c3RlbS5zY3JlZW4ueCxcbiAgICAgIGxpZ2h0Qm90dG9tUmlnaHRTY3JlZW5Qb3NpdGlvbi55IC8gdGhpcy5saWdodGluZ1N5c3RlbS5zY3JlZW4ueSxcbiAgICBdKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRVbmlmb3JtKFxuICAgICAgJ3Vfd2FsbExpZ2h0aW5nWU9mZnNldCcsXG4gICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICk7XG4gICAgdGhpcy5zaGFkZXJDYW52YXMuc2V0VW5pZm9ybShcbiAgICAgICd1X2hpZ2hsaWdodEFscGhhJyxcbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5zaGFkZXJIaWdobGlnaHRBbHBoYVxuICAgICk7XG4gICAgdGhpcy5zaGFkZXJDYW52YXMuc2V0VW5pZm9ybShcbiAgICAgICd1X3NoYWRvd0FscGhhJyxcbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ub3B0aW9ucy5zaGFkZXJTaGFkb3dBbHBoYVxuICAgICk7XG4gICAgdGhpcy5zaGFkZXJDYW52YXMuc2V0VW5pZm9ybShcbiAgICAgICd1X3NwZWN1bGFyQWxwaGEnLFxuICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5vcHRpb25zLnNoYWRlclNwZWN1bGFyQWxwaGFcbiAgICApO1xuICAgIHRoaXMuc2hhZGVyQ2FudmFzLnNldFRleHR1cmUoXG4gICAgICAndV9zY2VuZU5vcm1hbE1hcCcsXG4gICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnNjZW5lTm9ybWFsTWFwQ2FudmFzIGFzIHVua25vd24gYXMgSFRNTEltYWdlRWxlbWVudFxuICAgICk7XG4gICAgdGhpcy5zaGFkZXJDYW52YXMuc2V0VGV4dHVyZShcbiAgICAgICd1X3NjZW5lU3BlY3VsYXJNYXAnLFxuICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5zY2VuZVNwZWN1bGFyTWFwQ2FudmFzIGFzIHVua25vd24gYXMgSFRNTEltYWdlRWxlbWVudFxuICAgICk7XG4gICAgdGhpcy5zaGFkZXJDYW52YXMuc2V0VGV4dHVyZShcbiAgICAgICd1X2dyb3VuZExpZ2h0TWFwJyxcbiAgICAgIHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMgYXMgdW5rbm93biBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRUZXh0dXJlKFxuICAgICAgJ3Vfd2FsbDFMaWdodE1hcCcsXG4gICAgICB0aGlzLndhbGxMaWdodDFDYW52YXMgYXMgdW5rbm93biBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRUZXh0dXJlKFxuICAgICAgJ3Vfd2FsbDJMaWdodE1hcCcsXG4gICAgICB0aGlzLndhbGxMaWdodDJDYW52YXMgYXMgdW5rbm93biBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRUZXh0dXJlKFxuICAgICAgJ3VfZ3JvdW5kTWFzaycsXG4gICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLmdyb3VuZE1hc2tDYW52YXMgYXMgdW5rbm93biBhcyBIVE1MSW1hZ2VFbGVtZW50XG4gICAgKTtcbiAgICB0aGlzLnNoYWRlckNhbnZhcy5zZXRUZXh0dXJlKFxuICAgICAgJ3Vfd2FsbDFNYXNrJyxcbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ud2FsbE1hc2sxQ2FudmFzIGFzIHVua25vd24gYXMgSFRNTEltYWdlRWxlbWVudFxuICAgICk7XG4gICAgdGhpcy5zaGFkZXJDYW52YXMuc2V0VGV4dHVyZShcbiAgICAgICd1X3dhbGwyTWFzaycsXG4gICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLndhbGxNYXNrMkNhbnZhcyBhcyB1bmtub3duIGFzIEhUTUxJbWFnZUVsZW1lbnRcbiAgICApO1xuICAgIHRoaXMuc2hhZGVyQ2FudmFzLnJlbmRlcigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBmbG9hdEVxdWFscyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBBY3RvciwgQWN0b3JPcHRpb25zIH0gZnJvbSAnLi9BY3Rvcic7XG5pbXBvcnQge1xuICBDaXJjbGVDYXN0ZXIsXG4gIENpcmNsZUNhc3Rlck9wdGlvbnMsXG4gIFJlZ2lvbkNhc3RlcixcbiAgUmVnaW9uQ2FzdGVyT3B0aW9ucyxcbiAgU3ByaXRlQ2FzdGVyLFxuICBTcHJpdGVDYXN0ZXJPcHRpb25zLFxufSBmcm9tICcuL0Nhc3Rlcic7XG5pbXBvcnQgeyBMaWdodCwgTGlnaHRPcHRpb25zIH0gZnJvbSAnLi9MaWdodCc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWVyZ2UnO1xuaW1wb3J0IHsgU2NlbmVPYmplY3QgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7XG4gIEdyb3VuZFJlY2VpdmVyLFxuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIFN1cmZhY2UsXG4gIFdhbGxSZWNlaXZlcixcbiAgV2FsbFJlY2VpdmVyT3B0aW9ucyxcbn0gZnJvbSAnLi9TdXJmYWNlJztcbmltcG9ydCB7IENvbG91ciwgTGlnaHRpbmdDYW1lcmEsIFdhbGxTaGFkb3dMYXllciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgY29sb3VyVG9TdHJpbmcsXG4gIGludGVydmFsVG9SZWN0YW5nbGUsXG4gIGxlcnBDb2xvdXIsXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCB7IFdhbGwsIFdhbGxPcHRpb25zIH0gZnJvbSAnLi9XYWxsJztcbmltcG9ydCBkZWZhdWx0U2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2xpZ2h0aW5nLmdsc2wnKTtcblxuZXhwb3J0IHR5cGUgTGlnaHRpbmdTeXN0ZW1PcHRpb25zID0ge1xuICAvKipcbiAgICogU2hvdWxkIGltYWdlIHNtb290aGluZyBiZSBlbmFibGVkP1xuICAgKlxuICAgKiBTZXQgdGhpcyB0byBmYWxzZSBmb3IgcGl4ZWwgYXJ0IHN0eWxlXG4gICAqL1xuICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3VsZCBzb2Z0IHNoYWRvd3MgYmUgZW5hYmxlZD9cbiAgICpcbiAgICogVGhpcyB3aWxsIG9ubHkgYXBwbHkgaWYgc29mdFNoYWRvd3NBbW91bnQgaXMgPiAwXG4gICAqL1xuICBzb2Z0U2hhZG93c0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiBzb2Z0IHNoYWRvd3MgdG8gYXBwbHlcbiAgICpcbiAgICogU2V0IHRoaXMgdG8gMCB0byBkaXNhYmxlIHNvZnQgc2hhZG93c1xuICAgKi9cbiAgc29mdFNoYWRvd3NBbW91bnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHRoZSBzaGFkZXIgYmUgZW5hYmxlZD9cbiAgICovXG4gIHNoYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNoYWRlciBmb3Igbm9ybWFsIG1hcHBpbmcgYW5kIHNwZWN1bGFyIGhpZ2hsaWdodHNcbiAgICovXG4gIHNoYWRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBsaWdodHMgdGhhdCBjYW4gdXNlIHRoZSBzaGFkZXJcbiAgICpcbiAgICogRWFjaCBvZiB0aGVzZSBsaWdodHMgbmVlZHMgaXRzIG93biBXZWJHTCBjb250ZXh0LCBhbmQgYnJvd3NlcnMgbG9zZSB0aGVcbiAgICogb2xkZXN0IGNvbnRleHQgd2hlbiB0b28gbWFueSBhcmUgYWN0aXZlICh0aGUgbGltaXQgaXMgMTYgaW4gQ2hyb21lKVxuICAgKi9cbiAgbWF4U2hhZGVyTGlnaHRzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFscGhhIHZhbHVlIGZvciBzaGFkZXIgaGlnaGxpZ2h0c1xuICAgKi9cbiAgc2hhZGVySGlnaGxpZ2h0QWxwaGE6IG51bWJlcjtcblxuICAvKipcbiAgICogQWxwaGEgdmFsdWUgZm9yIHNoYWRlciBzaGFkb3dzXG4gICAqL1xuICBzaGFkZXJTaGFkb3dBbHBoYTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbHBoYSB2YWx1ZSBmb3Igc2hhZGVyIHNwZWN1bGFyIGhpZ2hsaWdodHNcbiAgICovXG4gIHNoYWRlclNwZWN1bGFyQWxwaGE6IG51bWJlcjtcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodENvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb2xvdXIgb2YgYW1iaWVudCAoZ2xvYmFsKSBsaWdodCB3aGVuIGZhY2luZyBhd2F5IGZyb20gdGhlIGxpZ2h0XG4gICAqL1xuICBhbWJpZW50TGlnaHRTaGFkb3dDb2xvdXI6IHN0cmluZztcblxuICAvKipcbiAgICogQ29sb3VyIG9mIGFtYmllbnQgKGdsb2JhbCkgbGlnaHQgd2hlbiBmYWNpbmcgdG93YXJkcyB0aGUgbGlnaHRcbiAgICovXG4gIGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gb2YgYW1iaWVudCBsaWdodCBpbiByYWRpYW5zXG4gICAqL1xuICBhbWJpZW50TGlnaHREaXJlY3Rpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVmVydGljYWwgb2Zmc2V0IGZvciB3YWxsIGxpZ2h0aW5nXG4gICAqL1xuICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3RhbmNlIGFib3ZlIGJvdHRvbSBlZGdlIG9mIHdhbGwgc2hhZG93IHJlY2VpdmVycyBiZWZvcmUgbGlnaHQgaXNcbiAgICogdG90YWxseSBjdXQgb2ZmXG4gICAqL1xuICB3YWxsTGlnaHRpbmdDdXRvZmZEaXN0YW5jZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBMZW5ndGggb2Ygc3ByaXRlIHdhbGwgc2hhZG93cyB3aWxsIGJlIHNjYWxlZCBieSB0aGlzIGFtb3VudFxuICAgKi9cbiAgc3ByaXRlV2FsbFNoYWRvd0xlbmd0aEZhY3RvcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTcHJpdGUgd2FsbCBzaGFkb3cgaW50ZXJjZXB0IHdpbGwgYmUgb2Zmc2V0IGJ5IHRoaXMgYW1vdW50IChhcyBhIGZhY3RvclxuICAgKiBvZiB0aGUgdG90YWwgZWRnZSBsZW5ndGgpXG4gICAqL1xuICBzcHJpdGVXYWxsU2hhZG93SW50ZXJjZXB0T2Zmc2V0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhlaWdodCBvZiBjaXJjbGUgd2FsbCBzaGFkb3dzIHdpbGwgYmUgc2NhbGVkIGJ5IHRoaXMgYW1vdW50XG4gICAqL1xuICBjaXJjbGVXYWxsU2hhZG93TGVuZ3RoRmFjdG9yOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgTGlnaHRpbmdTeXN0ZW0ge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX09QVElPTlM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucyA9IHtcbiAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgc29mdFNoYWRvd3NFbmFibGVkOiBmYWxzZSxcbiAgICBzb2Z0U2hhZG93c0Ftb3VudDogMixcbiAgICBzaGFkZXJFbmFibGVkOiBmYWxzZSxcbiAgICBzaGFkZXI6IGRlZmF1bHRTaGFkZXIsXG4gICAgbWF4U2hhZGVyTGlnaHRzOiAxMixcbiAgICBzaGFkZXJIaWdobGlnaHRBbHBoYTogMC4yNCxcbiAgICBzaGFkZXJTaGFkb3dBbHBoYTogMC4zMixcbiAgICBzaGFkZXJTcGVjdWxhckFscGhhOiAxLFxuICAgIGFtYmllbnRMaWdodENvbG91cjogJ2JsYWNrJyxcbiAgICBhbWJpZW50TGlnaHRTaGFkb3dDb2xvdXI6ICdibGFjaycsXG4gICAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyOiAnYmxhY2snLFxuICAgIGFtYmllbnRMaWdodERpcmVjdGlvbjogMCxcbiAgICB3YWxsTGlnaHRpbmdZT2Zmc2V0OiAtMzAsXG4gICAgd2FsbExpZ2h0aW5nQ3V0b2ZmRGlzdGFuY2U6IDIwLFxuICAgIHNwcml0ZVdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IDAuNzUsXG4gICAgc3ByaXRlV2FsbFNoYWRvd0ludGVyY2VwdE9mZnNldDogMC4xLFxuICAgIGNpcmNsZVdhbGxTaGFkb3dMZW5ndGhGYWN0b3I6IDAuNSxcbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyBjcmVhdGVDb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY29tcGFyZVN1cmZhY2VzKGE6IFN1cmZhY2U8YW55PiwgYjogU3VyZmFjZTxhbnk+KTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS56SW5kZXggLSBiLnpJbmRleCB8fCBhLnBvc2l0aW9uLnkgKyBhLnNpemUueSAtIChiLnBvc2l0aW9uLnkgKyBiLnNpemUueSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9wdGlvbnM6IExpZ2h0aW5nU3lzdGVtT3B0aW9ucztcblxuICBwdWJsaWMgbGlnaHRzOiBMaWdodFtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBtb3N0IHJlY2VudGx5IHJlbmRlcmVkIHNjcmVlblxuICAgKi9cbiAgcHVibGljIHNjcmVlbjogdmVjID0gdmVjKCk7XG5cbiAgcHJpdmF0ZSBncm91bmRSZWNlaXZlcnM6IEdyb3VuZFJlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSB3YWxsUmVjZWl2ZXJzOiBXYWxsUmVjZWl2ZXJbXSA9IFtdO1xuICBwcml2YXRlIHJlZ2lvbkNhc3RlcnM6IFJlZ2lvbkNhc3RlcltdID0gW107XG4gIHByaXZhdGUgc3ByaXRlQ2FzdGVyczogU3ByaXRlQ2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBjaXJjbGVDYXN0ZXJzOiBDaXJjbGVDYXN0ZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgZ3JvdW5kTWFza0NvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBncm91bmRNYXNrQ2FudmFzID0gdGhpcy5ncm91bmRNYXNrQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcyA9IHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHdhbGxNYXNrMUNvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyB3YWxsTWFzazFDYW52YXMgPSB0aGlzLndhbGxNYXNrMUNvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgd2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyB3YWxsTWFza2VkTGlnaHRNYXAxQ2FudmFzID0gdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSB3YWxsTWFzazJDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgd2FsbE1hc2syQ2FudmFzID0gdGhpcy53YWxsTWFzazJDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHdhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgd2FsbE1hc2tlZExpZ2h0TWFwMkNhbnZhcyA9IHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgbGlnaHRNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgbGlnaHRNYXBDYW52YXMgPSB0aGlzLmxpZ2h0TWFwQ29udGV4dC5jYW52YXM7XG5cbiAgcHJpdmF0ZSBzY2VuZU5vcm1hbE1hcENvbnRleHQgPSBMaWdodGluZ1N5c3RlbS5jcmVhdGVDb250ZXh0KCk7XG4gIHB1YmxpYyBzY2VuZU5vcm1hbE1hcENhbnZhcyA9IHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LmNhbnZhcztcblxuICBwcml2YXRlIHNjZW5lU3BlY3VsYXJNYXBDb250ZXh0ID0gTGlnaHRpbmdTeXN0ZW0uY3JlYXRlQ29udGV4dCgpO1xuICBwdWJsaWMgc2NlbmVTcGVjdWxhck1hcENhbnZhcyA9IHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuY2FudmFzO1xuXG4gIHByaXZhdGUgc2hhZGVyTGltaXRXYXJuaW5nU2hvd24gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9ucz86IFBhcnRpYWw8TGlnaHRpbmdTeXN0ZW1PcHRpb25zPikge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIExpZ2h0aW5nU3lzdGVtLkRFRkFVTFRfT1BUSU9OUyxcbiAgICAgIG9wdGlvbnMgPz8ge31cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBhcmVhIG9mIGdyb3VuZCB0aGF0IHJlY2VpdmVzIGxpZ2h0IGFuZCBzaGFkb3dzXG4gICAqL1xuICBwdWJsaWMgYWRkR3JvdW5kKG9wdGlvbnM6IEdyb3VuZFJlY2VpdmVyT3B0aW9ucyk6IEdyb3VuZFJlY2VpdmVyIHtcbiAgICBjb25zdCBncm91bmQgPSBuZXcgR3JvdW5kUmVjZWl2ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMucHVzaChncm91bmQpO1xuXG4gICAgcmV0dXJuIGdyb3VuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBzb2xpZCB3YWxsLCBtYWRlIGZyb20gYSBsaXQgZnJvbnQgZmFjZSwgYW4gdW5saXQgdG9wLCBhbmQgYSBmb290cHJpbnRcbiAgICogdGhhdCBjYXN0cyBzaGFkb3dzXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbChvcHRpb25zOiBXYWxsT3B0aW9ucyk6IFdhbGwge1xuICAgIHJldHVybiBuZXcgV2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBtb3Zpbmcgb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIGNhc3RzIGEgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkQWN0b3Iob3B0aW9uczogQWN0b3JPcHRpb25zKTogQWN0b3Ige1xuICAgIHJldHVybiBuZXcgQWN0b3IodGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGlnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRMaWdodChvcHRpb25zOiBMaWdodE9wdGlvbnMpOiBMaWdodCB7XG4gICAgY29uc3QgbGlnaHQgPSBuZXcgTGlnaHQodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5saWdodHMucHVzaChsaWdodCk7XG5cbiAgICByZXR1cm4gbGlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIG9yIHNwcml0ZSB0aGF0IHJlY2VpdmVzIHdhbGwgc2hhZG93c1xuICAgKlxuICAgKiBUaGlzIGlzIHdoYXQgYGFkZFdhbGwoKWAgYW5kIGBhZGRBY3RvcigpYCB1c2UgdG8gY3JlYXRlIHRoZWlyIHN1cmZhY2VzXG4gICAqL1xuICBwdWJsaWMgYWRkV2FsbFJlY2VpdmVyKG9wdGlvbnM6IFdhbGxSZWNlaXZlck9wdGlvbnMpOiBXYWxsUmVjZWl2ZXIge1xuICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbFJlY2VpdmVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5wdXNoKHdhbGwpO1xuXG4gICAgcmV0dXJuIHdhbGw7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjdGFuZ2xlIHRoYXQgY2FzdHMgcG9seWdvbmFsIHNoYWRvd3NcbiAgICovXG4gIHB1YmxpYyBhZGRSZWdpb25DYXN0ZXIob3B0aW9uczogUmVnaW9uQ2FzdGVyT3B0aW9ucyk6IFJlZ2lvbkNhc3RlciB7XG4gICAgY29uc3QgY2FzdGVyID0gbmV3IFJlZ2lvbkNhc3Rlcih0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnJlZ2lvbkNhc3RlcnMucHVzaChjYXN0ZXIpO1xuXG4gICAgcmV0dXJuIGNhc3RlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByZWN0YW5nbGUgdGhhdCBjYXN0cyBhIHJvdGF0ZWQgYW5kIHN0cmV0Y2hlZCBpbWFnZSBhcyBhIHNoYWRvd1xuICAgKi9cbiAgcHVibGljIGFkZFNwcml0ZUNhc3RlcihvcHRpb25zOiBTcHJpdGVDYXN0ZXJPcHRpb25zKTogU3ByaXRlQ2FzdGVyIHtcbiAgICBjb25zdCBjYXN0ZXIgPSBuZXcgU3ByaXRlQ2FzdGVyKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuc3ByaXRlQ2FzdGVycy5wdXNoKGNhc3Rlcik7XG5cbiAgICByZXR1cm4gY2FzdGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJlY3RhbmdsZSB0aGF0IGNhc3RzIGFuIGVsbGlwdGljYWwgc2hhZG93XG4gICAqL1xuICBwdWJsaWMgYWRkQ2lyY2xlQ2FzdGVyKG9wdGlvbnM6IENpcmNsZUNhc3Rlck9wdGlvbnMpOiBDaXJjbGVDYXN0ZXIge1xuICAgIGNvbnN0IGNhc3RlciA9IG5ldyBDaXJjbGVDYXN0ZXIodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5jaXJjbGVDYXN0ZXJzLnB1c2goY2FzdGVyKTtcblxuICAgIHJldHVybiBjYXN0ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIG9iamVjdCBvciBsaWdodCBmcm9tIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW1vdmUob2JqZWN0OiBTY2VuZU9iamVjdDxhbnk+IHwgTGlnaHQpIHtcbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTGlnaHQpIHtcbiAgICAgIG9iamVjdC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PiBsaWdodCAhPT0gb2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3VuZFJlY2VpdmVycyA9IHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzID0gdGhpcy53YWxsUmVjZWl2ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gdGhpcy5yZWdpb25DYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5zcHJpdGVDYXN0ZXJzID0gdGhpcy5zcHJpdGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gICAgdGhpcy5jaXJjbGVDYXN0ZXJzID0gdGhpcy5jaXJjbGVDYXN0ZXJzLmZpbHRlcihvID0+IG8gIT09IG9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2Ugd2FsbCByZWNlaXZlcnMgYW5kIHJlZ2lvbiBjYXN0ZXJzIHRoYXQgYXJlIGFkamFjZW50IHRvIGVhY2ggb3RoZXJcbiAgICogYW5kIHBlcmZlY3RseSBjb25uZWN0ZWQgb24gb25lIHNpZGUsIHNvIHRoYXQgdGhlcmUgYXJlIGZld2VyIHRvIHByb2Nlc3NcbiAgICpcbiAgICogTWVyZ2VkIG9iamVjdHMgYXJlIHJlbW92ZWQgZnJvbSB0aGUgbGlnaHRpbmcgc3lzdGVtIGFuZCBjYW4ndCBiZSBtb3ZlZFxuICAgKiBhZnRlcndhcmRzLCBzbyB0aGlzIGlzIGludGVuZGVkIGZvciBsZXZlbCBnZW9tZXRyeS4gU2V0IGBtZXJnZWFibGVgIHRvXG4gICAqIGZhbHNlIG9uIGFuIG9iamVjdCB0byBleGNsdWRlIGl0XG4gICAqXG4gICAqIGBvbk1lcmdlYCBpcyBjYWxsZWQgZWFjaCB0aW1lIDIgb2JqZWN0cyBhcmUgcmVwbGFjZWQgd2l0aCBhIHNpbmdsZSBvYmplY3QuXG4gICAqIElmIHRoZSBvYmplY3RzIHdlcmUgZHVwbGljYXRlcywgdGhlIG1lcmdlZCBvYmplY3QgaXMgdGhlIGZpcnN0IG9iamVjdFxuICAgKi9cbiAgcHVibGljIG9wdGltaXNlKFxuICAgIG9uTWVyZ2U/OiAoXG4gICAgICBtZXJnZWQ6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGE6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlcixcbiAgICAgIGI6IFdhbGxSZWNlaXZlciB8IFJlZ2lvbkNhc3RlclxuICAgICkgPT4gdm9pZFxuICApIHtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMgPSBtZXJnZTxXYWxsUmVjZWl2ZXI+KHRoaXMud2FsbFJlY2VpdmVycywgb25NZXJnZSk7XG4gICAgdGhpcy5yZWdpb25DYXN0ZXJzID0gbWVyZ2U8UmVnaW9uQ2FzdGVyPih0aGlzLnJlZ2lvbkNhc3RlcnMsIG9uTWVyZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFub3RoZXIgbGlnaHQgaXMgYWxsb3dlZCB0byBjcmVhdGUgYSBzaGFkZXIgY2FudmFzXG4gICAqL1xuICBwdWJsaWMgY2FuQ3JlYXRlU2hhZGVyQ2FudmFzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHNoYWRlckxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PiBsaWdodC5zaGFkZXJDYW52YXMpO1xuICAgIGlmIChzaGFkZXJMaWdodHMubGVuZ3RoIDwgdGhpcy5vcHRpb25zLm1heFNoYWRlckxpZ2h0cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnNoYWRlckxpbWl0V2FybmluZ1Nob3duKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBTaGFkZXIgbGltaXRlZCB0byB0aGUgZmlyc3QgJHt0aGlzLm9wdGlvbnMubWF4U2hhZGVyTGlnaHRzfSBsaWdodHNgXG4gICAgICApO1xuICAgICAgdGhpcy5zaGFkZXJMaW1pdFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2Ugc3VyZSBhIHNjcmVlbi1zaXplZCBjYW52YXMgbWF0Y2hlcyB0aGUgc2NyZWVuIHNpemUgYW5kIGNsZWFyIGl0XG4gICAqL1xuICBwcml2YXRlIHJlc2V0Q29udGV4dChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gY29udGV4dDtcbiAgICBpZiAoY2FudmFzLndpZHRoICE9PSB0aGlzLnNjcmVlbi54IHx8IGNhbnZhcy5oZWlnaHQgIT09IHRoaXMuc2NyZWVuLnkpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuc2NyZWVuLng7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5zY3JlZW4ueTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5pbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgbGl0IHNjZW5lIG9udG8gYSBjb250ZXh0XG4gICAqXG4gICAqIElmIGBkcmF3U2NlbmVgIGlzIHByb3ZpZGVkIHRoZW4gaXQgd2lsbCBiZSBjYWxsZWQgdG8gZHJhdyB0aGUgc2NlbmUgd2l0aFxuICAgKiB0aGUgY2FtZXJhJ3MgdHJhbnNmb3JtcyBhcHBsaWVkLCBvdGhlcndpc2Ugd2UnbGwgZHJhdyBhbGwgb2YgdGhlIHN1cmZhY2VzXG4gICAqIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBsaWdodGluZyBzeXN0ZW1cbiAgICovXG4gIHB1YmxpYyByZW5kZXIoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIGNhbWVyYTogTGlnaHRpbmdDYW1lcmEsXG4gICAgZHJhd1NjZW5lPzogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZFxuICApIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyhjb250ZXh0KTtcbiAgICBpZiAoZHJhd1NjZW5lKSB7XG4gICAgICBkcmF3U2NlbmUoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd1N1cmZhY2VzKGNvbnRleHQpO1xuICAgIH1cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIHRoaXMucHJlcGFyZShjYW1lcmEsIHZlYyhjb250ZXh0LmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuaGVpZ2h0KSk7XG4gICAgdGhpcy5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYWxsIG9mIHRoZSBzdXJmYWNlcyB0aGF0IGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgbGlnaHRpbmcgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgZHJhd1N1cmZhY2VzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuc29ydFN1cmZhY2VzKCk7XG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4gZ3JvdW5kLmRyYXcoY29udGV4dCkpO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4gd2FsbC5kcmF3KGNvbnRleHQpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydFN1cmZhY2VzKCkge1xuICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLnNvcnQoTGlnaHRpbmdTeXN0ZW0uY29tcGFyZVN1cmZhY2VzKTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuc29ydChMaWdodGluZ1N5c3RlbS5jb21wYXJlU3VyZmFjZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIGxpZ2h0bWFwcyBmb3IgcmVuZGVyaW5nXG4gICAqL1xuICBwdWJsaWMgcHJlcGFyZShjYW1lcmE6IExpZ2h0aW5nQ2FtZXJhLCBzY3JlZW46IHZlYykge1xuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xuICAgIHRoaXMuc29ydFN1cmZhY2VzKCk7XG5cbiAgICB0aGlzLmRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmEpO1xuICAgIHRoaXMuZHJhd1NjZW5lU3BlY3VsYXJNYXAoY2FtZXJhKTtcblxuICAgIC8vIFByZS1jYWxjdWxhdGUgYW1iaWVudCBsaWdodCBwYXJhbWV0ZXJzXG4gICAgY29uc3QgYW1iaWVudExpZ2h0RGlyZWN0aW9uID0gdmVjLnJvdChcbiAgICAgIHZlYygxLCAwKSxcbiAgICAgIHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHREaXJlY3Rpb25cbiAgICApO1xuICAgIGNvbnN0IGFtYmllbnRMaWdodENvbG91ciA9IHBhcnNlQ29sb3IodGhpcy5vcHRpb25zLmFtYmllbnRMaWdodENvbG91cik7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyID0gcGFyc2VDb2xvcihcbiAgICAgIHRoaXMub3B0aW9ucy5hbWJpZW50TGlnaHRTaGFkb3dDb2xvdXJcbiAgICApO1xuICAgIGNvbnN0IGFtYmllbnRMaWdodEhpZ2hsaWdodENvbG91ciA9IHBhcnNlQ29sb3IoXG4gICAgICB0aGlzLm9wdGlvbnMuYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyXG4gICAgKTtcblxuICAgIC8vIExpZ2h0cyBvdXRzaWRlIHRoZSBjYW1lcmEgYm91bmRzIGNhbid0IGFmZmVjdCB0aGUgdmlzaWJsZSBzY2VuZVxuICAgIGNvbnN0IGNhbWVyYVJlY3RhbmdsZSA9IGludGVydmFsVG9SZWN0YW5nbGUoY2FtZXJhLmJvdW5kcyk7XG4gICAgY29uc3QgdmlzaWJsZUxpZ2h0cyA9IHRoaXMubGlnaHRzLmZpbHRlcihsaWdodCA9PlxuICAgICAgcmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodC5ib3VuZHMsIGNhbWVyYVJlY3RhbmdsZSlcbiAgICApO1xuXG4gICAgLy8gUHJlcGFyZSBlYWNoIGxpZ2h0XG4gICAgdmlzaWJsZUxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+XG4gICAgICBsaWdodC5wcmVwYXJlKFxuICAgICAgICBjYW1lcmEsXG4gICAgICAgIHRoaXMuZ3JvdW5kUmVjZWl2ZXJzLFxuICAgICAgICB0aGlzLndhbGxSZWNlaXZlcnMsXG4gICAgICAgIHRoaXMucmVnaW9uQ2FzdGVycyxcbiAgICAgICAgdGhpcy5zcHJpdGVDYXN0ZXJzLFxuICAgICAgICB0aGlzLmNpcmNsZUNhc3RlcnNcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gUHJlcGFyZSBncm91bmQgbWFza1xuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuICAgIHRoaXMuZ3JvdW5kTWFza0NvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuXG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4ge1xuICAgICAgZ3JvdW5kLmRyYXdNYXNrKHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncm91bmRNYXNrQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcblxuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3TWFzayh0aGlzLmdyb3VuZE1hc2tDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ3JvdW5kTWFza0NvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gUHJlcGFyZSB3YWxsIG1hc2sgMVxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMud2FsbE1hc2sxQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTWFzazFDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLndhbGxNYXNrMUNvbnRleHQpO1xuXG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICBpZiAod2FsbC5sYXllciA9PT0gV2FsbFNoYWRvd0xheWVyLk9uZSkge1xuICAgICAgICB3YWxsLmRyYXdNYXNrKHRoaXMud2FsbE1hc2sxQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLndhbGxNYXNrMUNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG5cbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIGlmICh3YWxsLmxheWVyID09PSBXYWxsU2hhZG93TGF5ZXIuVHdvKSB7XG4gICAgICAgIHdhbGwuZHJhd01hc2sodGhpcy53YWxsTWFzazFDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMud2FsbE1hc2sxQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIHdhbGwgbWFzayAyXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy53YWxsTWFzazJDb250ZXh0KTtcbiAgICB0aGlzLndhbGxNYXNrMkNvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMud2FsbE1hc2syQ29udGV4dCk7XG5cbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIGlmICh3YWxsLmxheWVyID09PSBXYWxsU2hhZG93TGF5ZXIuVHdvKSB7XG4gICAgICAgIHdhbGwuZHJhd01hc2sodGhpcy53YWxsTWFzazJDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMud2FsbE1hc2syQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIGdyb3VuZC1tYXNrZWQgbGlnaHRtYXAgY2FudmFzXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQpO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LnNhdmUoKTtcbiAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dCk7XG5cbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9ID0gY2FtZXJhLmJvdW5kcztcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsU3R5bGUgPVxuICAgICAgdGhpcy5vcHRpb25zLmFtYmllbnRMaWdodENvbG91cjtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsUmVjdChcbiAgICAgIGxlZnQsXG4gICAgICB0b3AsXG4gICAgICByaWdodCAtIGxlZnQsXG4gICAgICBib3R0b20gLSB0b3BcbiAgICApO1xuXG4gICAgLy8gRHJhdyBsaWdodHNcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc2NyZWVuJztcbiAgICB2aXNpYmxlTGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICBsaWdodC5ncm91bmRMaWdodENhbnZhcyxcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCAtIGxpZ2h0LnJhZGl1cyxcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSAtIGxpZ2h0LnJhZGl1c1xuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIE1hc2sgZ3JvdW5kXG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPVxuICAgICAgJ2Rlc3RpbmF0aW9uLWF0b3AnO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdyb3VuZE1hc2tDYW52YXMsIDAsIDApO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIHdhbGwtbWFza2VkIGxpZ2h0bWFwIGxheWVyIDEgY2FudmFzXG4gICAgdGhpcy5yZXNldENvbnRleHQodGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dCk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXModGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dCk7XG5cbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIGlmICh3YWxsLmxheWVyID09PSBXYWxsU2hhZG93TGF5ZXIuT25lKSB7XG4gICAgICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuZmlsbFN0eWxlID0gY29sb3VyVG9TdHJpbmcoXG4gICAgICAgICAgdGhpcy5jYWxjdWxhdGVBbWJpZW50TGlnaHQoXG4gICAgICAgICAgICB3YWxsLnN1cmZhY2VOb3JtYWwsXG4gICAgICAgICAgICBhbWJpZW50TGlnaHREaXJlY3Rpb24sXG4gICAgICAgICAgICBhbWJpZW50TGlnaHRDb2xvdXIsXG4gICAgICAgICAgICBhbWJpZW50TGlnaHRTaGFkb3dDb2xvdXIsXG4gICAgICAgICAgICBhbWJpZW50TGlnaHRIaWdobGlnaHRDb2xvdXJcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgd2FsbC5wb3NpdGlvbi54LFxuICAgICAgICAgIHdhbGwucG9zaXRpb24ueSxcbiAgICAgICAgICB3YWxsLnNpemUueCxcbiAgICAgICAgICB3YWxsLnNpemUueVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRHJhdyBsaWdodHNcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzY3JlZW4nO1xuICAgIHZpc2libGVMaWdodHMuZm9yRWFjaChsaWdodCA9PiB7XG4gICAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgbGlnaHQud2FsbExpZ2h0MUNhbnZhcyxcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCAtIGxpZ2h0LnJhZGl1cyxcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSAtIGxpZ2h0LnJhZGl1cyArIHRoaXMub3B0aW9ucy53YWxsTGlnaHRpbmdZT2Zmc2V0XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSB3YWxsLW1hc2tlZCBsaWdodG1hcCAyIGNhbnZhc1xuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQpO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQpO1xuXG4gICAgdGhpcy53YWxsUmVjZWl2ZXJzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICBpZiAod2FsbC5sYXllciA9PT0gV2FsbFNoYWRvd0xheWVyLlR3bykge1xuICAgICAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LmZpbGxTdHlsZSA9IGNvbG91clRvU3RyaW5nKFxuICAgICAgICAgIHRoaXMuY2FsY3VsYXRlQW1iaWVudExpZ2h0KFxuICAgICAgICAgICAgd2FsbC5zdXJmYWNlTm9ybWFsLFxuICAgICAgICAgICAgYW1iaWVudExpZ2h0RGlyZWN0aW9uLFxuICAgICAgICAgICAgYW1iaWVudExpZ2h0Q29sb3VyLFxuICAgICAgICAgICAgYW1iaWVudExpZ2h0U2hhZG93Q29sb3VyLFxuICAgICAgICAgICAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0Q29sb3VyXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAgIHdhbGwucG9zaXRpb24ueCxcbiAgICAgICAgICB3YWxsLnBvc2l0aW9uLnksXG4gICAgICAgICAgd2FsbC5zaXplLngsXG4gICAgICAgICAgd2FsbC5zaXplLnlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERyYXcgbGlnaHRzXG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc2NyZWVuJztcbiAgICB2aXNpYmxlTGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIGxpZ2h0LndhbGxMaWdodDJDYW52YXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnggLSBsaWdodC5yYWRpdXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnkgLSBsaWdodC5yYWRpdXMgKyB0aGlzLm9wdGlvbnMud2FsbExpZ2h0aW5nWU9mZnNldFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIE1hc2sgd2FsbHMgbGF5ZXIgMVxuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMUNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID1cbiAgICAgICdkZXN0aW5hdGlvbi1hdG9wJztcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrMUNhbnZhcywgMCwgMCk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAxQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBNYXNrIHdhbGxzIGxheWVyIDJcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9XG4gICAgICAnZGVzdGluYXRpb24tYXRvcCc7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXAyQ29udGV4dC5kcmF3SW1hZ2UodGhpcy53YWxsTWFzazJDYW52YXMsIDAsIDApO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwMkNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gUHJlcGFyZSBmaW5hbCBsaWdodG1hcFxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMubGlnaHRNYXBDb250ZXh0KTtcbiAgICB0aGlzLmxpZ2h0TWFwQ29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5saWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDFDYW52YXMsIDAsIDApO1xuICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrZWRMaWdodE1hcDJDYW52YXMsIDAsIDApO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zaGFkZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmxpZ2h0TWFwQ29udGV4dC5zYXZlKCk7XG4gICAgICBjYW1lcmEuc2V0VHJhbnNmb3Jtcyh0aGlzLmxpZ2h0TWFwQ29udGV4dCk7XG4gICAgICB2aXNpYmxlTGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgICBpZiAoIWxpZ2h0LnNoYWRlckNhbnZhcykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICBsaWdodC5zaGFkZXJDYW52YXMuZG9tRWxlbWVudCxcbiAgICAgICAgICBsaWdodC5wb3NpdGlvbi54IC0gbGlnaHQucmFkaXVzLFxuICAgICAgICAgIGxpZ2h0LnBvc2l0aW9uLnkgLSBsaWdodC5yYWRpdXNcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saWdodE1hcENvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cbiAgICB0aGlzLmxpZ2h0TWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3R1YWwgY29sb3VyIG9mIGFtYmllbnQgbGlnaHQgYmFzZWQgb24gdGhlIHN1cmZhY2Ugbm9ybWFsXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUFtYmllbnRMaWdodChcbiAgICBzdXJmYWNlTm9ybWFsOiB2ZWMsXG4gICAgYW1iaWVudExpZ2h0RGlyZWN0aW9uOiB2ZWMsXG4gICAgYW1iaWVudExpZ2h0OiBDb2xvdXIsXG4gICAgYW1iaWVudExpZ2h0U2hhZG93OiBDb2xvdXIsXG4gICAgYW1iaWVudExpZ2h0SGlnaGxpZ2h0OiBDb2xvdXJcbiAgKTogQ29sb3VyIHtcbiAgICBpZiAodmVjLmVxKHN1cmZhY2VOb3JtYWwsIHZlYygpKSkge1xuICAgICAgcmV0dXJuIGFtYmllbnRMaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBkb3QgPSB2ZWMuZG90KHZlYy5ub3Ioc3VyZmFjZU5vcm1hbCksIGFtYmllbnRMaWdodERpcmVjdGlvbik7XG4gICAgaWYgKGZsb2F0RXF1YWxzKGRvdCwgMCkpIHtcbiAgICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGRvdCA8IDApIHtcbiAgICAgIHJldHVybiBsZXJwQ29sb3VyKGFtYmllbnRMaWdodCwgYW1iaWVudExpZ2h0SGlnaGxpZ2h0LCAtZG90KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVycENvbG91cihhbWJpZW50TGlnaHQsIGFtYmllbnRMaWdodFNoYWRvdywgZG90KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXAgc29mdCBzaGFkb3cgc2V0dGluZ3Mgb24gdGhlIHNwZWNpZmllZCBjYW52YXMgY29udGV4dFxuICAgKi9cbiAgcHVibGljIHNldHVwU29mdFNoYWRvd3MoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzRW5hYmxlZCAmJlxuICAgICAgdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMub3B0aW9ucy5zb2Z0U2hhZG93c0Ftb3VudCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnYmxhY2snO1xuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gdGhpcy5vcHRpb25zLnNvZnRTaGFkb3dzQW1vdW50O1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gMDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJsYXkgdGhlIGxpZ2h0bWFwIG9udG8gdGhlIGNvbnRleHRcbiAgICovXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRNYXBDYW52YXMsIDAsIDApO1xuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBub3JtYWwgbWFwcyBmb3Igc3VyZmFjZXMgaW4gdGhlIHNjZW5lXG4gICAqL1xuICBwcml2YXRlIGRyYXdTY2VuZU5vcm1hbE1hcChjYW1lcmE6IExpZ2h0aW5nQ2FtZXJhKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuc2hhZGVyRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcbiAgICB0aGlzLnNjZW5lTm9ybWFsTWFwQ29udGV4dC5zYXZlKCk7XG4gICAgY2FtZXJhLnNldFRyYW5zZm9ybXModGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuXG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4ge1xuICAgICAgZ3JvdW5kLmRyYXdOb3JtYWxNYXAodGhpcy5zY2VuZU5vcm1hbE1hcENvbnRleHQpO1xuICAgIH0pO1xuICAgIHRoaXMud2FsbFJlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3Tm9ybWFsTWFwKHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2NlbmVOb3JtYWxNYXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHNwZWN1bGFyIG1hcHMgZm9yIHN1cmZhY2VzIGluIHRoZSBzY2VuZVxuICAgKi9cbiAgcHJpdmF0ZSBkcmF3U2NlbmVTcGVjdWxhck1hcChjYW1lcmE6IExpZ2h0aW5nQ2FtZXJhKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuc2hhZGVyRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRDb250ZXh0KHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQuc2F2ZSgpO1xuICAgIGNhbWVyYS5zZXRUcmFuc2Zvcm1zKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuXG4gICAgdGhpcy5ncm91bmRSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4ge1xuICAgICAgZ3JvdW5kLmRyYXdTcGVjdWxhck1hcCh0aGlzLnNjZW5lU3BlY3VsYXJNYXBDb250ZXh0KTtcbiAgICB9KTtcbiAgICB0aGlzLndhbGxSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIHdhbGwuZHJhd1NwZWN1bGFyTWFwKHRoaXMuc2NlbmVTcGVjdWxhck1hcENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zY2VuZVNwZWN1bGFyTWFwQ29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgdHlwZSB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5cbmV4cG9ydCB0eXBlIFNjZW5lT2JqZWN0T3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdvcmxkIHBvc2l0aW9uIG9mIHRoZSB0b3AtbGVmdCBjb3JuZXIgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHBvc2l0aW9uOiB2ZWM7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhpcyBvYmplY3QgaW4gd29ybGQgdW5pdHNcbiAgICovXG4gIHNpemU6IHZlYztcblxuICAvKipcbiAgICogQ2FuIHRoaXMgb2JqZWN0IGJlIG1lcmdlZCB3aXRoIGl0cyBuZWlnaGJvdXJzIGJ5XG4gICAqIGBMaWdodGluZ1N5c3RlbS5vcHRpbWlzZSgpYD9cbiAgICovXG4gIG1lcmdlYWJsZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFNvbWV0aGluZyB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgd2l0aCBhIGBMaWdodGluZ1N5c3RlbWBcbiAqXG4gKiBUaGVzZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgYExpZ2h0aW5nU3lzdGVtLmFkZC4uLigpYCBtZXRob2RzIGFuZCBhcmUgdXNlZFxuICogdG8gY2hhbmdlIG9yIHJlbW92ZSB0aGUgb2JqZWN0IGxhdGVyIG9uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2VuZU9iamVjdDxPcHRpb25zIGV4dGVuZHMgU2NlbmVPYmplY3RPcHRpb25zPiB7XG4gIHByb3RlY3RlZCBsaWdodGluZzogTGlnaHRpbmdTeXN0ZW07XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWM7XG4gIHB1YmxpYyBzaXplOiB2ZWM7XG4gIHB1YmxpYyBtZXJnZWFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB0aGlzLmxpZ2h0aW5nID0gbGlnaHRpbmc7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5jcHkob3B0aW9ucy5wb3NpdGlvbik7XG4gICAgdGhpcy5zaXplID0gdmVjLmNweShvcHRpb25zLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyBvYmplY3QgdG8gYSBuZXcgd29ybGQgcG9zaXRpb25cbiAgICovXG4gIHB1YmxpYyBtb3ZlVG8ocG9zaXRpb246IHZlYykge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuY3B5KHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHNpemUgb2YgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyByZXNpemUoc2l6ZTogdmVjKSB7XG4gICAgdGhpcy5zaXplID0gdmVjLmNweShzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc29tZSBvZiB0aGUgb3B0aW9ucyBmb3IgdGhpcyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzZXQob3B0aW9uczogUGFydGlhbDxPcHRpb25zPikge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAodGhpcyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNweSh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNpemUgPSB2ZWMuY3B5KHRoaXMuc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgb2JqZWN0IGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLmxpZ2h0aW5nLnJlbW92ZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFNjZW5lT2JqZWN0LCBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmltcG9ydCB7IExpZ2h0aW5nSW1hZ2UsIFdhbGxTaGFkb3dMYXllciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgYm91bmRpbmdSZWN0YW5nbGUsXG4gIGRyYXdJbWFnZUluUmVjdGFuZ2xlLFxuICBzaWxob3VldHRlLFxufSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbnR5cGUgRHJhd0NhbGxiYWNrID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgU3VyZmFjZU9wdGlvbnMgPSBTY2VuZU9iamVjdE9wdGlvbnMgJiB7XG4gIC8qKlxuICAgKiBPcHRpb25hbCBiYWNrZ3JvdW5kIGNvbG91clxuICAgKi9cbiAgY29sb3VyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgaW1hZ2UgZm9yIHRoaXMgc3VyZmFjZVxuICAgKi9cbiAgaW1hZ2U/OiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogT3B0aW9uYWwgbm9ybWFsIG1hcCwgdXNlZCB3aGVuIHRoZSBzaGFkZXIgaXMgZW5hYmxlZFxuICAgKi9cbiAgbm9ybWFsTWFwPzogTGlnaHRpbmdJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHNwZWN1bGFyIG1hcCwgdXNlZCB3aGVuIHRoZSBzaGFkZXIgaXMgZW5hYmxlZFxuICAgKi9cbiAgc3BlY3VsYXJNYXA/OiBMaWdodGluZ0ltYWdlIHwgbnVsbDtcblxuICAvKipcbiAgICogU3VyZmFjZXMgYXJlIGRyYXduIGluIG9yZGVyIG9mIHotaW5kZXggYW5kIHRoZW4gYnkgdGhlaXIgYm90dG9tIGVkZ2VcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogUmVwbGFjZSBhbnkgb2YgdGhlIGRlZmF1bHQgZHJhd2luZyBzdGVwcyBmb3IgdGhpcyBzdXJmYWNlLCBmb3Igb2JqZWN0c1xuICAgKiB0aGF0IGFyZW4ndCBhIHNpbmdsZSBpbWFnZVxuICAgKi9cbiAgY3VzdG9tRHJhdz86IHtcbiAgICBpbWFnZT86IERyYXdDYWxsYmFjaztcbiAgICBtYXNrPzogRHJhd0NhbGxiYWNrO1xuICAgIG5vcm1hbE1hcD86IERyYXdDYWxsYmFjaztcbiAgICBzcGVjdWxhck1hcD86IERyYXdDYWxsYmFjaztcbiAgfTtcbn07XG5cbi8qKlxuICogQW4gb2JqZWN0IHRoYXQgcmVjZWl2ZXMgbGlnaHQgYW5kIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1cmZhY2U8XG4gIE9wdGlvbnMgZXh0ZW5kcyBTdXJmYWNlT3B0aW9uc1xuPiBleHRlbmRzIFNjZW5lT2JqZWN0PE9wdGlvbnM+IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTk9STUFMX01BUF9ERUZBVUxUX0NPTE9VUiA9ICcjN2Y3ZmZmJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1BFQ1VMQVJfTUFQX0RFRkFVTFRfQ09MT1VSID0gJ2JsYWNrJztcblxuICBwdWJsaWMgY29sb3VyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGltYWdlOiBMaWdodGluZ0ltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyBub3JtYWxNYXA6IExpZ2h0aW5nSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIHNwZWN1bGFyTWFwOiBMaWdodGluZ0ltYWdlIHwgbnVsbCA9IG51bGw7XG4gIHB1YmxpYyB6SW5kZXg6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBjdXN0b21EcmF3OiBOb25OdWxsYWJsZTxTdXJmYWNlT3B0aW9uc1snY3VzdG9tRHJhdyddPiA9IHt9O1xuXG4gIC8qKlxuICAgKiBTaG91bGQgaW1hZ2VzIGJlIHJlcGVhdGVkIGFjcm9zcyB0aGlzIHN1cmZhY2UsIG9yIHN0cmV0Y2hlZCB0byBmaXQ/XG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcmVwZWF0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBwYXJ0IG9mIHRoaXMgc3VyZmFjZSB0aGF0IHJlY2VpdmVzIGxpZ2h0aW5nXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZHJhd01hc2soY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZDtcblxuICBwcml2YXRlIGZpbGxCYWNrZ3JvdW5kKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3VyOiBzdHJpbmcpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZHJhd0ltYWdlKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UpIHtcbiAgICBkcmF3SW1hZ2VJblJlY3RhbmdsZShjb250ZXh0LCBpbWFnZSwgdGhpcywgdGhpcy5yZXBlYXQpO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5pbWFnZSkge1xuICAgICAgdGhpcy5jdXN0b21EcmF3LmltYWdlKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgaWYgKHRoaXMuY29sb3VyKSB7XG4gICAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKGNvbnRleHQsIHRoaXMuY29sb3VyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgdGhpcy5pbWFnZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZHJhd0NvbG91ck1hcChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgaW1hZ2U6IExpZ2h0aW5nSW1hZ2UgfCBudWxsLFxuICAgIGRlZmF1bHRDb2xvdXI6IHN0cmluZ1xuICApIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGlmIChpbWFnZSkge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgaW1hZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGxCYWNrZ3JvdW5kKGNvbnRleHQsIGRlZmF1bHRDb2xvdXIpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdOb3JtYWxNYXAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5ub3JtYWxNYXApIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5ub3JtYWxNYXAoY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3Q29sb3VyTWFwKFxuICAgICAgY29udGV4dCxcbiAgICAgIHRoaXMubm9ybWFsTWFwLFxuICAgICAgU3VyZmFjZS5OT1JNQUxfTUFQX0RFRkFVTFRfQ09MT1VSXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3U3BlY3VsYXJNYXAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tRHJhdy5zcGVjdWxhck1hcCkge1xuICAgICAgdGhpcy5jdXN0b21EcmF3LnNwZWN1bGFyTWFwKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZHJhd0NvbG91ck1hcChcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLnNwZWN1bGFyTWFwLFxuICAgICAgU3VyZmFjZS5TUEVDVUxBUl9NQVBfREVGQVVMVF9DT0xPVVJcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbGxNYXNrKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMuZmlsbEJhY2tncm91bmQoY29udGV4dCwgJ2JsYWNrJyk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgR3JvdW5kUmVjZWl2ZXJPcHRpb25zID0gU3VyZmFjZU9wdGlvbnM7XG5cbi8qKlxuICogQSByZWN0YW5nbGUgb2YgZ3JvdW5kIHRoYXQgcmVjZWl2ZXMgZ3JvdW5kIHNoYWRvd3NcbiAqXG4gKiBJbWFnZXMgYXJlIHJlcGVhdGVkIGFjcm9zcyB0aGUgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91bmRSZWNlaXZlciBleHRlbmRzIFN1cmZhY2U8R3JvdW5kUmVjZWl2ZXJPcHRpb25zPiB7XG4gIHB1YmxpYyByZXBlYXQgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IEdyb3VuZFJlY2VpdmVyT3B0aW9ucykge1xuICAgIHN1cGVyKGxpZ2h0aW5nLCBvcHRpb25zKTtcbiAgICB0aGlzLnNldChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3TWFzayhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5jdXN0b21EcmF3Lm1hc2spIHtcbiAgICAgIHRoaXMuY3VzdG9tRHJhdy5tYXNrKGNvbnRleHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuZmlsbE1hc2soY29udGV4dCk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgV2FsbFJlY2VpdmVyT3B0aW9ucyA9IFN1cmZhY2VPcHRpb25zICYge1xuICAvKipcbiAgICogSW1hZ2UgdXNlZCB0byBtYXNrIHRoaXMgc3VyZmFjZSwgaXQgc2hvdWxkIGJlIGJsYWNrIHdpdGggYW4gYWxwaGEgY2hhbm5lbFxuICAgKlxuICAgKiBJZiB0aGlzIGlzbid0IHNldCB0aGVuIHdlJ2xsIHVzZSB0aGUgaW1hZ2UncyBhbHBoYSBjaGFubmVsXG4gICAqL1xuICBtYXNrPzogTGlnaHRpbmdJbWFnZSB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFNob3VsZCB0aGUgaW1hZ2UgYmUgcmVwZWF0ZWQgYWNyb3NzIHRoZSBzdXJmYWNlPyBPdGhlcndpc2UgaXQgd2lsbCBiZVxuICAgKiBzdHJldGNoZWQgdG8gZml0XG4gICAqL1xuICByZXBlYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byBmYWxzZSBpZiB0aGlzIHN1cmZhY2Ugc2hvdWxkIG9ubHkgcmVjZWl2ZSBhbWJpZW50IGxpZ2h0ICh0aGlzXG4gICAqIGlzIHVzZWZ1bCBmb3IgdGhlIHRvcHMgb2Ygd2FsbHMpXG4gICAqL1xuICByZWNlaXZlTGlnaHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhhdCB0aGlzIHN1cmZhY2UgaXMgZmFjaW5nLCBmb3IgYW1iaWVudCBsaWdodGluZ1xuICAgKi9cbiAgc3VyZmFjZU5vcm1hbD86IHZlYztcblxuICAvKipcbiAgICogVXNlIGEgZGlmZmVyZW50IGxheWVyIGZvciBzdXJmYWNlcyB0aGF0IG1pZ2h0IG92ZXJsYXBcbiAgICovXG4gIGxheWVyPzogV2FsbFNoYWRvd0xheWVyO1xufTtcblxuLyoqXG4gKiBBIHJlY3RhbmdsZSBvciBzcHJpdGUgdGhhdCByZWNlaXZlcyB3YWxsIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGxSZWNlaXZlciBleHRlbmRzIFN1cmZhY2U8V2FsbFJlY2VpdmVyT3B0aW9ucz4ge1xuICBwdWJsaWMgbWFzazogTGlnaHRpbmdJbWFnZSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgcmVwZWF0ID0gZmFsc2U7XG4gIHB1YmxpYyByZWNlaXZlTGlnaHQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc3VyZmFjZU5vcm1hbDogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBsYXllcjogV2FsbFNoYWRvd0xheWVyID0gV2FsbFNoYWRvd0xheWVyLk9uZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobGlnaHRpbmc6IExpZ2h0aW5nU3lzdGVtLCBvcHRpb25zOiBXYWxsUmVjZWl2ZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGlnaHRpbmcsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0KG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGRyYXdNYXNrKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGlmICh0aGlzLmN1c3RvbURyYXcubWFzaykge1xuICAgICAgdGhpcy5jdXN0b21EcmF3Lm1hc2soY29udGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBpZiAodGhpcy5jb2xvdXIpIHtcbiAgICAgIHRoaXMuZmlsbE1hc2soY29udGV4dCk7XG4gICAgfVxuXG4gICAgLy8gQSBiYWNrZ3JvdW5kIGNvbG91ciBhbHJlYWR5IGNvdmVycyB0aGUgd2hvbGUgc3VyZmFjZVxuICAgIGNvbnN0IG1hc2sgPVxuICAgICAgdGhpcy5tYXNrID8/ICghdGhpcy5jb2xvdXIgJiYgdGhpcy5pbWFnZSAmJiBzaWxob3VldHRlKHRoaXMuaW1hZ2UpKTtcbiAgICBpZiAobWFzaykge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoY29udGV4dCwgbWFzayk7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhpcyBzdXJmYWNlIGNhbiBiZSBtZXJnZWQgd2l0aCBhbm90aGVyIHN1cmZhY2VcbiAgICovXG4gIHB1YmxpYyBjYW5NZXJnZShvdGhlcjogV2FsbFJlY2VpdmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaGFzSW1hZ2VzID1cbiAgICAgIHRoaXMuaW1hZ2UgfHwgdGhpcy5tYXNrIHx8IHRoaXMubm9ybWFsTWFwIHx8IHRoaXMuc3BlY3VsYXJNYXA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tZXJnZWFibGUgJiZcbiAgICAgIG90aGVyLm1lcmdlYWJsZSAmJlxuICAgICAgLy8gTm9uLXJlcGVhdGluZyBpbWFnZXMgd291bGQgc3RyZXRjaCBhY3Jvc3MgdGhlIG1lcmdlZCBzdXJmYWNlXG4gICAgICAodGhpcy5yZXBlYXQgfHwgIWhhc0ltYWdlcykgJiZcbiAgICAgIHRoaXMuekluZGV4ID09PSBvdGhlci56SW5kZXggJiZcbiAgICAgIHRoaXMuY29sb3VyID09PSBvdGhlci5jb2xvdXIgJiZcbiAgICAgIHRoaXMuaW1hZ2UgPT09IG90aGVyLmltYWdlICYmXG4gICAgICB0aGlzLm1hc2sgPT09IG90aGVyLm1hc2sgJiZcbiAgICAgIHRoaXMubm9ybWFsTWFwID09PSBvdGhlci5ub3JtYWxNYXAgJiZcbiAgICAgIHRoaXMuc3BlY3VsYXJNYXAgPT09IG90aGVyLnNwZWN1bGFyTWFwICYmXG4gICAgICB0aGlzLnJlcGVhdCA9PT0gb3RoZXIucmVwZWF0ICYmXG4gICAgICB0aGlzLnJlY2VpdmVMaWdodCA9PT0gb3RoZXIucmVjZWl2ZUxpZ2h0ICYmXG4gICAgICB2ZWMuZXEodGhpcy5zdXJmYWNlTm9ybWFsLCBvdGhlci5zdXJmYWNlTm9ybWFsKSAmJlxuICAgICAgdGhpcy5sYXllciA9PT0gb3RoZXIubGF5ZXJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBzdXJmYWNlIHRoYXQgY292ZXJzIHRoaXMgc3VyZmFjZSBhbmQgYW5vdGhlciBzdXJmYWNlXG4gICAqL1xuICBwdWJsaWMgbWVyZ2Uob3RoZXI6IFdhbGxSZWNlaXZlcik6IFdhbGxSZWNlaXZlciB7XG4gICAgcmV0dXJuIG5ldyBXYWxsUmVjZWl2ZXIodGhpcy5saWdodGluZywge1xuICAgICAgLi4uKHRoaXMgYXMgV2FsbFJlY2VpdmVyKSxcbiAgICAgIC4uLmJvdW5kaW5nUmVjdGFuZ2xlKHRoaXMsIG90aGVyKSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IFJlZ2lvbkNhc3RlciB9IGZyb20gJy4vQ2FzdGVyJztcbmltcG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFdhbGxSZWNlaXZlciwgV2FsbFJlY2VpdmVyT3B0aW9ucyB9IGZyb20gJy4vU3VyZmFjZSc7XG5pbXBvcnQgeyBMaWdodGluZ0ltYWdlLCBSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgV2FsbE9wdGlvbnMgPSBPbWl0PFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxuICAncG9zaXRpb24nIHwgJ3NpemUnIHwgJ3JlY2VpdmVMaWdodCdcbj4gJiB7XG4gIC8qKlxuICAgKiBUaGUgYXJlYSBvZiB0aGUgZ3JvdW5kIHRoYXQgdGhpcyB3YWxsIHN0YW5kcyBvblxuICAgKi9cbiAgZm9vdHByaW50OiBSZWN0YW5nbGU7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIHdhbGwncyBmcm9udCBmYWNlXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2hvdWxkIHNoYWRvd3MgaW5jbHVkZSB0aGUgd2FsbCdzIGZvb3RwcmludD9cbiAgICovXG4gIGluY2x1ZGVSZWdpb25TaGFkb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcHBlYXJhbmNlIG9mIHRoZSB0b3Agb2YgdGhlIHdhbGwsIGl0IG9ubHkgcmVjZWl2ZXMgYW1iaWVudCBsaWdodFxuICAgKi9cbiAgdG9wPzoge1xuICAgIGNvbG91cj86IHN0cmluZztcbiAgICBpbWFnZT86IExpZ2h0aW5nSW1hZ2UgfCBudWxsO1xuICB9O1xufTtcblxuLyoqXG4gKiBBIHNvbGlkIHdhbGwgaW4gYSAzLzQgdmlld1xuICpcbiAqIFRoaXMgaXMgbWFkZSBmcm9tIGEgZnJvbnQgZmFjZSB0aGF0IHJlY2VpdmVzIGxpZ2h0LCBhIHRvcCB0aGF0IG9ubHkgcmVjZWl2ZXNcbiAqIGFtYmllbnQgbGlnaHQsIGFuZCBhIGZvb3RwcmludCB0aGF0IGNhc3RzIHNoYWRvd3NcbiAqL1xuZXhwb3J0IGNsYXNzIFdhbGwge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1RPUF9DT0xPVVIgPSAnYmxhY2snO1xuXG4gIHB1YmxpYyByZWFkb25seSBmcm9udDogV2FsbFJlY2VpdmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgdG9wOiBXYWxsUmVjZWl2ZXI7XG4gIHB1YmxpYyByZWFkb25seSBjYXN0ZXI6IFJlZ2lvbkNhc3RlcjtcblxuICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihsaWdodGluZzogTGlnaHRpbmdTeXN0ZW0sIG9wdGlvbnM6IFdhbGxPcHRpb25zKSB7XG4gICAgY29uc3QgeyBmb290cHJpbnQsIGhlaWdodCwgaW5jbHVkZVJlZ2lvblNoYWRvdywgdG9wLCAuLi5mcm9udCB9ID0gb3B0aW9ucztcblxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY2FzdGVyID0gbGlnaHRpbmcuYWRkUmVnaW9uQ2FzdGVyKHtcbiAgICAgIC4uLmZvb3RwcmludCxcbiAgICAgIG1lcmdlYWJsZTogb3B0aW9ucy5tZXJnZWFibGUsXG4gICAgICBpbmNsdWRlUmVnaW9uU2hhZG93LFxuICAgIH0pO1xuICAgIHRoaXMuZnJvbnQgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgLi4uZnJvbnQsXG4gICAgICAuLi50aGlzLmZyb250UmVjdGFuZ2xlKGZvb3RwcmludCksXG4gICAgfSk7XG4gICAgdGhpcy50b3AgPSBsaWdodGluZy5hZGRXYWxsUmVjZWl2ZXIoe1xuICAgICAgbGF5ZXI6IG9wdGlvbnMubGF5ZXIsXG4gICAgICB6SW5kZXg6IG9wdGlvbnMuekluZGV4LFxuICAgICAgbWVyZ2VhYmxlOiBvcHRpb25zLm1lcmdlYWJsZSxcbiAgICAgIGNvbG91cjogdG9wPy5jb2xvdXIgPz8gV2FsbC5ERUZBVUxUX1RPUF9DT0xPVVIsXG4gICAgICBpbWFnZTogdG9wPy5pbWFnZSxcbiAgICAgIHJlY2VpdmVMaWdodDogZmFsc2UsXG4gICAgICAuLi50aGlzLnRvcFJlY3RhbmdsZShmb290cHJpbnQpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmcm9udFJlY3RhbmdsZShmb290cHJpbnQ6IFJlY3RhbmdsZSk6IFJlY3RhbmdsZSB7XG4gICAgY29uc3QgYm90dG9tID0gZm9vdHByaW50LnBvc2l0aW9uLnkgKyBmb290cHJpbnQuc2l6ZS55O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMoZm9vdHByaW50LnBvc2l0aW9uLngsIGJvdHRvbSAtIHRoaXMuaGVpZ2h0KSxcbiAgICAgIHNpemU6IHZlYyhmb290cHJpbnQuc2l6ZS54LCB0aGlzLmhlaWdodCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdG9wUmVjdGFuZ2xlKGZvb3RwcmludDogUmVjdGFuZ2xlKTogUmVjdGFuZ2xlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHZlYyhmb290cHJpbnQucG9zaXRpb24ueCwgZm9vdHByaW50LnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCksXG4gICAgICBzaXplOiBmb290cHJpbnQuc2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhpcyB3YWxsIHNvIHRoYXQgaXRzIGZvb3RwcmludCBpcyBhdCBhIG5ldyB3b3JsZCBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIG1vdmVUbyhwb3NpdGlvbjogdmVjKSB7XG4gICAgY29uc3QgZm9vdHByaW50ID0geyBwb3NpdGlvbiwgc2l6ZTogdGhpcy5jYXN0ZXIuc2l6ZSB9O1xuXG4gICAgdGhpcy5jYXN0ZXIubW92ZVRvKHBvc2l0aW9uKTtcbiAgICB0aGlzLmZyb250Lm1vdmVUbyh0aGlzLmZyb250UmVjdGFuZ2xlKGZvb3RwcmludCkucG9zaXRpb24pO1xuICAgIHRoaXMudG9wLm1vdmVUbyh0aGlzLnRvcFJlY3RhbmdsZShmb290cHJpbnQpLnBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyB3YWxsIGZyb20gdGhlIGxpZ2h0aW5nIHN5c3RlbVxuICAgKi9cbiAgcHVibGljIHJlbW92ZSgpIHtcbiAgICB0aGlzLmZyb250LnJlbW92ZSgpO1xuICAgIHRoaXMudG9wLnJlbW92ZSgpO1xuICAgIHRoaXMuY2FzdGVyLnJlbW92ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWN0YW5nbGUsIFNpZGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHJlY3RhbmdsZVRvSW50ZXJ2YWwgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmNvbnN0IE1FUkdFX01BWF9JVEVSQVRJT05TID0gMTAwO1xuY29uc3QgTUVSR0VfT1JERVIgPSBbJ2R1cGxpY2F0ZScsIFNpZGUuQm90dG9tLCBTaWRlLlJpZ2h0LCBTaWRlLlRvcCwgU2lkZS5MZWZ0XTtcblxudHlwZSBNZXJnZWFibGU8VD4gPSBSZWN0YW5nbGUgJiB7XG4gIGNhbk1lcmdlKG90aGVyOiBUKTogYm9vbGVhbjtcbiAgbWVyZ2Uob3RoZXI6IFQpOiBUO1xufTtcblxudHlwZSBNZXJnZTxUPiA9IFtULCBULCBTaWRlIHwgJ2R1cGxpY2F0ZSddO1xuXG4vKipcbiAqIEZpbmQgcGFpcnMgb2YgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgY2FuIGJlIG1lcmdlZFxuICovXG5mdW5jdGlvbiBmaW5kTWVyZ2VzPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KGl0ZW1zOiBUW10pOiBNZXJnZTxUPltdIHtcbiAgY29uc3QgcmVzdWx0OiBNZXJnZTxUPltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGEgPSByZWN0YW5nbGVUb0ludGVydmFsKGl0ZW1zW2ldKTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBiID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChpdGVtc1tqXSk7XG5cbiAgICAgIGlmICghaXRlbXNbaV0uY2FuTWVyZ2UoaXRlbXNbal0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGFuZCBCIGFyZSB0aGUgc2FtZVxuICAgICAgaWYgKFxuICAgICAgICBhLnRvcCA9PT0gYi50b3AgJiZcbiAgICAgICAgYS5ib3R0b20gPT09IGIuYm90dG9tICYmXG4gICAgICAgIGEubGVmdCA9PT0gYi5sZWZ0ICYmXG4gICAgICAgIGEucmlnaHQgPT09IGIucmlnaHRcbiAgICAgICkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCAnZHVwbGljYXRlJ10pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIGJvdHRvbSBlZGdlIG9mIEFcbiAgICAgIGlmIChhLmJvdHRvbSA9PT0gYi50b3AgJiYgYS5sZWZ0ID09PSBiLmxlZnQgJiYgYS5yaWdodCA9PT0gYi5yaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkJvdHRvbV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgdG9wIGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEudG9wID09PSBiLmJvdHRvbSAmJiBhLmxlZnQgPT09IGIubGVmdCAmJiBhLnJpZ2h0ID09PSBiLnJpZ2h0KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuVG9wXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSByaWdodCBlZGdlIG9mIEFcbiAgICAgIGlmIChhLnJpZ2h0ID09PSBiLmxlZnQgJiYgYS50b3AgPT09IGIudG9wICYmIGEuYm90dG9tID09PSBiLmJvdHRvbSkge1xuICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlJpZ2h0XSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSBsZWZ0IGVkZ2Ugb2YgQVxuICAgICAgaWYgKGEubGVmdCA9PT0gYi5yaWdodCAmJiBhLnRvcCA9PT0gYi50b3AgJiYgYS5ib3R0b20gPT09IGIuYm90dG9tKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sIFNpZGUuTGVmdF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogTWVyZ2UgaXRlbXMgdGhhdCBhcmUgYWRqYWNlbnQgdG8gZWFjaCBvdGhlciBhbmQgcGVyZmVjdGx5IGNvbm5lY3RlZCBvbiBvbmVcbiAqIHNpZGUsIG9yIGFyZSBleGFjdCBkdXBsaWNhdGVzIG9mIGVhY2ggb3RoZXJcbiAqXG4gKiBgb25NZXJnZWAgaXMgY2FsbGVkIGVhY2ggdGltZSAyIGl0ZW1zIGFyZSByZXBsYWNlZCB3aXRoIGEgc2luZ2xlIGl0ZW0uIElmXG4gKiB0aGUgaXRlbXMgd2VyZSBkdXBsaWNhdGVzLCB0aGUgbWVyZ2VkIGl0ZW0gaXMgdGhlIGZpcnN0IGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQgZXh0ZW5kcyBNZXJnZWFibGU8VD4+KFxuICBpdGVtczogVFtdLFxuICBvbk1lcmdlPzogKG1lcmdlZDogVCwgYTogVCwgYjogVCkgPT4gdm9pZFxuKTogVFtdIHtcbiAgLy8gU29ydCBpdGVtcyBieSB5LXBvc2l0aW9uIHRoZW4geC1wb3NpdGlvblxuICBsZXQgcmVzdWx0ID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEucG9zaXRpb24ueSA9PT0gYi5wb3NpdGlvbi55KSB7XG4gICAgICByZXR1cm4gYS5wb3NpdGlvbi54IC0gYi5wb3NpdGlvbi54O1xuICAgIH1cblxuICAgIHJldHVybiBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG4gIH0pO1xuXG4gIGxldCBpID0gMDtcbiAgbGV0IG1lcmdlczogTWVyZ2U8VD5bXTtcbiAgd2hpbGUgKFxuICAgIChtZXJnZXMgPSBmaW5kTWVyZ2VzKHJlc3VsdCkpLmxlbmd0aCA+IDAgJiZcbiAgICBpKysgPCBNRVJHRV9NQVhfSVRFUkFUSU9OU1xuICApIHtcbiAgICAvLyBNZXJnZSBpdGVtcyBpbiBhIHNwZWNpZmljIG9yZGVyIChlLmcuIGl0ZW1zIHRoYXQgY29ubmVjdCBvbiB0aGUgYm90dG9tXG4gICAgLy8gZmFjZSBmaXJzdCwgb3IgaXRlbXMgdGhhdCBhcmUgZXhhY3QgZHVwbGljYXRlcyBmaXJzdCwgZXRjLilcbiAgICBtZXJnZXMuc29ydChcbiAgICAgIChhLCBiKSA9PiBNRVJHRV9PUkRFUi5pbmRleE9mKGFbMl0pIC0gTUVSR0VfT1JERVIuaW5kZXhPZihiWzJdKVxuICAgICk7XG5cbiAgICBmb3IgKGNvbnN0IFthLCBiLCBzaWRlXSBvZiBtZXJnZXMpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgaXRlbXMgc3RpbGwgZXhpc3QgKHRoZXkgbWlnaHQgaGF2ZSBiZWVuIG1lcmdlZCBhbmRcbiAgICAgIC8vIHJlbW92ZWQgaW4gYSBwcmV2aW91cyBpdGVyYXRpb24pXG4gICAgICBpZiAoIXJlc3VsdC5pbmNsdWRlcyhhKSB8fCAhcmVzdWx0LmluY2x1ZGVzKGIpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2lkZSA9PT0gJ2R1cGxpY2F0ZScpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGIpO1xuICAgICAgICBvbk1lcmdlPy4oYSwgYSwgYik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXJnZWQgPSBhLm1lcmdlKGIpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGEgJiYgaXRlbSAhPT0gYik7XG4gICAgICByZXN1bHQucHVzaChtZXJnZWQpO1xuICAgICAgb25NZXJnZT8uKG1lcmdlZCwgYSwgYik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5cbi8qKlxuICogQW4gaW1hZ2UgdGhhdCBjYW4gYmUgZHJhd24gb250byBhIGNhbnZhc1xuICovXG5leHBvcnQgdHlwZSBMaWdodGluZ0ltYWdlID0gSFRNTEltYWdlRWxlbWVudCB8IEhUTUxDYW52YXNFbGVtZW50O1xuXG4vKipcbiAqIFRoZSBwYXJ0cyBvZiBhIGNhbWVyYSB0aGF0IGFyZSB1c2VkIGJ5IHRoZSBsaWdodGluZyBzeXN0ZW0sIHRoaXMgaXNcbiAqIGNvbXBhdGlibGUgd2l0aCBAYmFzZW1lbnR1bml2ZXJzZS9jYW1lcmFcbiAqL1xuZXhwb3J0IHR5cGUgTGlnaHRpbmdDYW1lcmEgPSB7XG4gIGJvdW5kczogSW50ZXJ2YWwyZDtcbiAgd29ybGRUb1NjcmVlbihwb3NpdGlvbjogdmVjKTogdmVjO1xuICBzZXRUcmFuc2Zvcm1zKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBDb2xvdXIgPSB7XG4gIHI6IG51bWJlcjtcbiAgZzogbnVtYmVyO1xuICBiOiBudW1iZXI7XG4gIGE6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIExpbmUgPSB7XG4gIHN0YXJ0OiB2ZWM7XG4gIGVuZDogdmVjO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJ2YWwxZCA9IHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBJbnRlcnZhbDJkID0ge1xuICB0b3A6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBlbnVtIFNlY3RvcjFkIHtcbiAgQmVmb3JlID0gJ2JlZm9yZScsXG4gIEluc2lkZSA9ICdpbnNpZGUnLFxuICBBZnRlciA9ICdhZnRlcicsXG59XG5cbmV4cG9ydCBlbnVtIFNlY3RvcjJkIHtcbiAgVG9wTGVmdCA9ICd0b3AtbGVmdCcsXG4gIFRvcCA9ICd0b3AnLFxuICBUb3BSaWdodCA9ICd0b3AtcmlnaHQnLFxuICBMZWZ0ID0gJ2xlZnQnLFxuICBJbnNpZGUgPSAnaW5zaWRlJyxcbiAgUmlnaHQgPSAncmlnaHQnLFxuICBCb3R0b21MZWZ0ID0gJ2JvdHRvbS1sZWZ0JyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIEJvdHRvbVJpZ2h0ID0gJ2JvdHRvbS1yaWdodCcsXG59XG5cbmV4cG9ydCB0eXBlIFJlY3RhbmdsZSA9IHtcbiAgcG9zaXRpb246IHZlYztcbiAgc2l6ZTogdmVjO1xufTtcblxuZXhwb3J0IHR5cGUgUG9seWdvblZlcnRpY2VzID0gKFxuICB8IHZlY1xuICB8ICgoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkKVxuKVtdO1xuXG5leHBvcnQgZW51bSBTaWRlIHtcbiAgVG9wID0gJ3RvcCcsXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIExlZnQgPSAnbGVmdCcsXG59XG5cbmV4cG9ydCBlbnVtIFdhbGxTaGFkb3dMYXllciB7XG4gIE9uZSA9ICdvbmUnLFxuICBUd28gPSAndHdvJyxcbn1cbiIsImltcG9ydCB7IGZsb2F0RXF1YWxzLCBsZXJwIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgSW50ZXJ2YWwxZCxcbiAgSW50ZXJ2YWwyZCxcbiAgTGlnaHRpbmdJbWFnZSxcbiAgTGluZSxcbiAgUG9seWdvblZlcnRpY2VzLFxuICBSZWN0YW5nbGUsXG4gIFNlY3RvcjFkLFxuICBTZWN0b3IyZCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5pbXVtIG9mIGEgc2V0IG9mIHZlY3RvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pblZlYyguLi52ZWN0b3JzOiB2ZWNbXSk6IHZlYyB7XG4gIHJldHVybiB2ZWN0b3JzLnJlZHVjZShcbiAgICAobWluLCB2KSA9PiB2ZWMoTWF0aC5taW4obWluLngsIHYueCksIE1hdGgubWluKG1pbi55LCB2LnkpKSxcbiAgICB2ZWMoSW5maW5pdHksIEluZmluaXR5KVxuICApO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbWF4aW11bSBvZiBhIHNldCBvZiB2ZWN0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhWZWMoLi4udmVjdG9yczogdmVjW10pOiB2ZWMge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1heCwgdikgPT4gdmVjKE1hdGgubWF4KG1heC54LCB2LngpLCBNYXRoLm1heChtYXgueSwgdi55KSksXG4gICAgdmVjKC1JbmZpbml0eSwgLUluZmluaXR5KVxuICApO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc21hbGxlc3QgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgMiByZWN0YW5nbGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3VuZGluZ1JlY3RhbmdsZShhOiBSZWN0YW5nbGUsIGI6IFJlY3RhbmdsZSk6IFJlY3RhbmdsZSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbWluVmVjKGEucG9zaXRpb24sIGIucG9zaXRpb24pO1xuICBjb25zdCBib3R0b21SaWdodCA9IG1heFZlYyhcbiAgICB2ZWMuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSksXG4gICAgdmVjLmFkZChiLnBvc2l0aW9uLCBiLnNpemUpXG4gICk7XG5cbiAgcmV0dXJuIHsgcG9zaXRpb24sIHNpemU6IHZlYy5zdWIoYm90dG9tUmlnaHQsIHBvc2l0aW9uKSB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBjb2xvdXIgb2JqZWN0IHRvIGEgQ1NTIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3VyVG9TdHJpbmcoY29sb3VyOiBDb2xvdXIpOiBzdHJpbmcge1xuICByZXR1cm4gYHJnYmEoJHtjb2xvdXIucn0sICR7Y29sb3VyLmd9LCAke2NvbG91ci5ifSwgJHtjb2xvdXIuYX0pYDtcbn1cblxuLyoqXG4gKiBMaW5lYXIgaW50ZXJwb2xhdGUgYmV0d2VlbiAyIGNvbG91cnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnBDb2xvdXIoYTogQ29sb3VyLCBiOiBDb2xvdXIsIGk6IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIHI6IGxlcnAoYS5yLCBiLnIsIGkpLFxuICAgIGc6IGxlcnAoYS5nLCBiLmcsIGkpLFxuICAgIGI6IGxlcnAoYS5iLCBiLmIsIGkpLFxuICAgIGE6IGxlcnAoYS5hLCBiLmEsIGkpLFxuICB9O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgeCBwb3NpdGlvbiBvZiBhIGxpbmUgd2hlcmUgaXQgaW50ZXJjZXB0cyBhIGdpdmVuIHlcbiAqXG4gKiBSZXR1cm5zIGEgdHVwbGUgY29udGFpbmluZyB0aGUgaW50ZXJjZXB0IHBvc2l0aW9uIGFuZCB0aGUgbm9ybWFsaXNlZFxuICogcHJvZ3Jlc3MgYWxvbmcgdGhlIGxpbmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVZSW50ZXJjZXB0KFxuICBsaW5lOiBMaW5lLFxuICB5OiBudW1iZXIsXG4gIGFsbG93QmVmb3JlOiBib29sZWFuID0gdHJ1ZSxcbiAgYWxsb3dBZnRlcjogYm9vbGVhbiA9IHRydWVcbik6IFtudW1iZXIsIG51bWJlcl0gfCBudWxsIHtcbiAgaWYgKGZsb2F0RXF1YWxzKGxpbmUuc3RhcnQueSwgbGluZS5lbmQueSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHQgPSAoeSAtIGxpbmUuc3RhcnQueSkgLyAobGluZS5lbmQueSAtIGxpbmUuc3RhcnQueSk7XG4gIGlmICh0IDwgMCAmJiAhYWxsb3dCZWZvcmUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAodCA+IDEgJiYgIWFsbG93QWZ0ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBbbGluZS5zdGFydC54ICsgdCAqIChsaW5lLmVuZC54IC0gbGluZS5zdGFydC54KSwgdF07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBsaW5lIHNlZ21lbnQncyBub3JtYWwgaXMgZmFjaW5nIHRvd2FyZHMgYSBwb2ludFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZUlzRmFjaW5nKGxpbmU6IExpbmUsIHBvc2l0aW9uOiB2ZWMpIHtcbiAgY29uc3QgZWRnZSA9IHZlYy5ub3IodmVjLnN1YihsaW5lLmVuZCwgbGluZS5zdGFydCkpO1xuICBjb25zdCBlZGdlTm9ybWFsID0gdmVjKGVkZ2UueSwgLWVkZ2UueCk7XG4gIGNvbnN0IGxpZ2h0Tm9ybWFsID0gdmVjLm5vcihcbiAgICB2ZWMuc3ViKHZlYy5tdWwodmVjLmFkZChsaW5lLnN0YXJ0LCBsaW5lLmVuZCksIDAuNSksIHBvc2l0aW9uKVxuICApO1xuXG4gIHJldHVybiB2ZWMuZG90KGxpZ2h0Tm9ybWFsLCBlZGdlTm9ybWFsKSA8PSAwO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSAyZCBpbnRlcnZhbCB0byBhIHJlY3RhbmdsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJ2YWxUb1JlY3RhbmdsZShpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IFJlY3RhbmdsZSB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHZlYyhpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC50b3ApLFxuICAgIHNpemU6IHZlYyhpbnRlcnZhbC5yaWdodCAtIGludGVydmFsLmxlZnQsIGludGVydmFsLmJvdHRvbSAtIGludGVydmFsLnRvcCksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIHJlY3RhbmdsZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVUb0ludGVydmFsKHJlY3RhbmdsZTogUmVjdGFuZ2xlKTogSW50ZXJ2YWwyZCB7XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgcmlnaHQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54ICsgcmVjdGFuZ2xlLnNpemUueCxcbiAgICB0b3A6IHJlY3RhbmdsZS5wb3NpdGlvbi55LFxuICAgIGJvdHRvbTogcmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyByZWN0YW5nbGUuc2l6ZS55LFxuICB9O1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIG92ZXJsYXAgYmV0d2VlbiAyIDFkIGludGVydmFsc1xuICpcbiAqIElmIHRoZXJlIGlzIG5vIG92ZXJsYXAsIHJldHVybiBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVybGFwMWQoYTogSW50ZXJ2YWwxZCwgYjogSW50ZXJ2YWwxZCk6IEludGVydmFsMWQgfCBudWxsIHtcbiAgaWYgKGEuZW5kIDwgYi5zdGFydCB8fCBhLnN0YXJ0ID4gYi5lbmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IE1hdGgubWF4KGEuc3RhcnQsIGIuc3RhcnQpLFxuICAgIGVuZDogTWF0aC5taW4oYS5lbmQsIGIuZW5kKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiAyIEFBQkJzIGludGVyc2VjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlc0ludGVyc2VjdChhOiBSZWN0YW5nbGUsIGI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xuICBjb25zdCB0bDEgPSBhLnBvc2l0aW9uO1xuICBjb25zdCBicjEgPSB2ZWMuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSk7XG4gIGNvbnN0IHRsMiA9IGIucG9zaXRpb247XG4gIGNvbnN0IGJyMiA9IHZlYy5hZGQoYi5wb3NpdGlvbiwgYi5zaXplKTtcblxuICByZXR1cm4gdGwxLnggPCBicjIueCAmJiBicjEueCA+IHRsMi54ICYmIHRsMS55IDwgYnIyLnkgJiYgYnIxLnkgPiB0bDIueTtcbn1cblxuLyoqXG4gKiBHZXQgYW4gYXJyYXkgb2YgdmVydGljZXMgZm9yIGEgcmVjdGFuZ2xlIGluIENXIHdpbmRpbmcgb3JkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZVZlcnRpY2VzKHJlY3RhbmdsZTogUmVjdGFuZ2xlKTogdmVjW10ge1xuICBjb25zdCB0bCA9IHJlY3RhbmdsZS5wb3NpdGlvbjtcbiAgY29uc3QgYnIgPSB2ZWMuYWRkKHJlY3RhbmdsZS5wb3NpdGlvbiwgcmVjdGFuZ2xlLnNpemUpO1xuXG4gIHJldHVybiBbcmVjdGFuZ2xlLnBvc2l0aW9uLCB2ZWMoYnIueCwgdGwueSksIGJyLCB2ZWModGwueCwgYnIueSldO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBvbHlnb24gcGF0aCBvbiBhIGNhbnZhcyBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKFxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIC4uLnZlcnRpY2VzOiBQb2x5Z29uVmVydGljZXNcbikge1xuICBpZiAodmVydGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZlcnRpY2VzWzBdKGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRleHQubW92ZVRvKHZlcnRpY2VzWzBdLngsIHZlcnRpY2VzWzBdLnkpO1xuICB9XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHZlcnRpY2VzW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAodmVydGljZXNbaV0gYXMgRnVuY3Rpb24pKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmxpbmVUbygodmVydGljZXNbaV0gYXMgdmVjKS54LCAodmVydGljZXNbaV0gYXMgdmVjKS55KTtcbiAgICB9XG4gIH1cbiAgY29udGV4dC5jbG9zZVBhdGgoKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3RvciBvZiBhIHBvaW50IHJlbGF0aXZlIHRvIGEgMWQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3RvcjFkKG46IG51bWJlciwgaW50ZXJ2YWw6IEludGVydmFsMWQpOiBTZWN0b3IxZCB7XG4gIGlmIChuIDw9IGludGVydmFsLnN0YXJ0KSB7XG4gICAgcmV0dXJuIFNlY3RvcjFkLkJlZm9yZTtcbiAgfVxuXG4gIGlmIChuID49IGludGVydmFsLmVuZCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5BZnRlcjtcbiAgfVxuXG4gIHJldHVybiBTZWN0b3IxZC5JbnNpZGU7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IyZChwb2ludDogdmVjLCBpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IFNlY3RvcjJkIHtcbiAgY29uc3QgeCA9IHNlY3RvcjFkKHBvaW50LngsIHsgc3RhcnQ6IGludGVydmFsLmxlZnQsIGVuZDogaW50ZXJ2YWwucmlnaHQgfSk7XG4gIGNvbnN0IHkgPSBzZWN0b3IxZChwb2ludC55LCB7IHN0YXJ0OiBpbnRlcnZhbC50b3AsIGVuZDogaW50ZXJ2YWwuYm90dG9tIH0pO1xuXG4gIHJldHVybiB7XG4gICAgW1NlY3RvcjFkLkJlZm9yZV06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BMZWZ0LFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkxlZnQsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b21MZWZ0LFxuICAgIH0sXG4gICAgW1NlY3RvcjFkLkluc2lkZV06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3AsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuSW5zaWRlLFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tLFxuICAgIH0sXG4gICAgW1NlY3RvcjFkLkFmdGVyXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcFJpZ2h0LFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLlJpZ2h0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tUmlnaHQsXG4gICAgfSxcbiAgfVt4XVt5XTtcbn1cblxuLyoqXG4gKiBEcmF3IGFuIGltYWdlIGludG8gYSByZWN0YW5nbGUsIGVpdGhlciByZXBlYXRpbmcgaXQgb3Igc3RyZXRjaGluZyBpdCB0byBmaXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdJbWFnZUluUmVjdGFuZ2xlKFxuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIGltYWdlOiBMaWdodGluZ0ltYWdlLFxuICByZWN0YW5nbGU6IFJlY3RhbmdsZSxcbiAgcmVwZWF0OiBib29sZWFuXG4pIHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gcmVjdGFuZ2xlO1xuXG4gIGlmICghcmVwZWF0KSB7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCAncmVwZWF0Jyk7XG4gIGlmIChwYXR0ZXJuKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUueCwgc2l6ZS55KTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxufVxuXG5jb25zdCBzaWxob3VldHRlcyA9IG5ldyBXZWFrTWFwPExpZ2h0aW5nSW1hZ2UsIEhUTUxDYW52YXNFbGVtZW50PigpO1xuXG4vKipcbiAqIEdldCBhIGJsYWNrIGNvcHkgb2YgYW4gaW1hZ2Ugd2hpY2gga2VlcHMgdGhlIGltYWdlJ3MgYWxwaGEgY2hhbm5lbCwgb3IgbnVsbFxuICogaWYgdGhlIGltYWdlIGhhc24ndCBsb2FkZWQgeWV0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWxob3VldHRlKGltYWdlOiBMaWdodGluZ0ltYWdlKTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgaWYgKGltYWdlLndpZHRoID09PSAwIHx8IGltYWdlLmhlaWdodCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiAhaW1hZ2UuY29tcGxldGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBzaWxob3VldHRlcy5nZXQoaW1hZ2UpO1xuICBpZiAoIXJlc3VsdCkge1xuICAgIHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJlc3VsdC53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgIHJlc3VsdC5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gcmVzdWx0LmdldENvbnRleHQoJzJkJykhO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2UtaW4nO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHJlc3VsdC53aWR0aCwgcmVzdWx0LmhlaWdodCk7XG5cbiAgICBzaWxob3VldHRlcy5zZXQoaW1hZ2UsIHJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgeyBBY3RvciB9IGZyb20gJy4vQWN0b3InO1xuZXhwb3J0IHR5cGUgeyBBY3Rvck9wdGlvbnMsIEFjdG9yU2hhZG93IH0gZnJvbSAnLi9BY3Rvcic7XG5leHBvcnQgeyBDaXJjbGVDYXN0ZXIsIFJlZ2lvbkNhc3RlciwgU3ByaXRlQ2FzdGVyIH0gZnJvbSAnLi9DYXN0ZXInO1xuZXhwb3J0IHR5cGUge1xuICBDaXJjbGVDYXN0ZXJPcHRpb25zLFxuICBSZWdpb25DYXN0ZXJPcHRpb25zLFxuICBTaGFkb3dDYXN0ZXIsXG4gIFNwcml0ZUNhc3Rlck9wdGlvbnMsXG59IGZyb20gJy4vQ2FzdGVyJztcbmV4cG9ydCB7IExpZ2h0IH0gZnJvbSAnLi9MaWdodCc7XG5leHBvcnQgdHlwZSB7IExpZ2h0T3B0aW9ucyB9IGZyb20gJy4vTGlnaHQnO1xuZXhwb3J0IHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmV4cG9ydCB0eXBlIHsgTGlnaHRpbmdTeXN0ZW1PcHRpb25zIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5leHBvcnQgeyBTY2VuZU9iamVjdCB9IGZyb20gJy4vU2NlbmVPYmplY3QnO1xuZXhwb3J0IHR5cGUgeyBTY2VuZU9iamVjdE9wdGlvbnMgfSBmcm9tICcuL1NjZW5lT2JqZWN0JztcbmV4cG9ydCB7IEdyb3VuZFJlY2VpdmVyLCBTdXJmYWNlLCBXYWxsUmVjZWl2ZXIgfSBmcm9tICcuL1N1cmZhY2UnO1xuZXhwb3J0IHR5cGUge1xuICBHcm91bmRSZWNlaXZlck9wdGlvbnMsXG4gIFN1cmZhY2VPcHRpb25zLFxuICBXYWxsUmVjZWl2ZXJPcHRpb25zLFxufSBmcm9tICcuL1N1cmZhY2UnO1xuZXhwb3J0IHsgV2FsbFNoYWRvd0xheWVyIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgdHlwZSB7IExpZ2h0aW5nQ2FtZXJhLCBMaWdodGluZ0ltYWdlLCBSZWN0YW5nbGUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7IFdhbGwgfSBmcm9tICcuL1dhbGwnO1xuZXhwb3J0IHR5cGUgeyBXYWxsT3B0aW9ucyB9IGZyb20gJy4vV2FsbCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=