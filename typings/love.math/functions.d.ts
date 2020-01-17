/**
 * Provides system-independent mathematical functions.
 *
 * @noResolution
 * @noSelf
 * @link [love.math](https://love2d.org/wiki/love.math)
 */
declare module "love.math" {
    /**
     * Converts a color from 0..1 to 0..255 range.
     * @param rgba The red, green, blue and optional alpha component.
     * @returns The red, green, blue and optional alpha component converted to a 255 range.
     * @tupleReturn
     * @link [love.math.colorToBytes](https://love2d.org/wiki/love.math.colorToBytes)
     * @since 11.3
     */
    export function colorToBytes<T extends [number, number, number, number?]>(...rgba: T): T;

    /**
     * Converts a color from gamma-space (sRGB) to linear-space (RGB). This is useful
     * when doing gamma-correct rendering and you need to do math in linear RGB in the
     * few cases where LÖVE doesn't handle conversions automatically.
     *
     * @param r The red channel of the sRGB color to convert.
     * @param g The green channel of the sRGB color to convert.
     * @param b The blue channel of the sRGB color to convert.
     * @return lr, The red channel of the converted color in linear RGB space.
     * @return lg, The green channel of the converted color in linear RGB space.
     * @return lb, The blue channel of the converted color in linear RGB space.
     * @tupleReturn
     * @link [love.math.gammaToLinear](https://love2d.org/wiki/love.math.gammaToLinear)
     */
    export function gammaToLinear(r: number, g: number, b: number): [number, number, number];

    /**
     * Converts a color from gamma-space (sRGB) to linear-space (RGB). This is useful
     * when doing gamma-correct rendering and you need to do math in linear RGB in the
     * few cases where LÖVE doesn't handle conversions automatically.
     *
     * @param color An array with the red, green, and blue channels of the sRGB color to convert.
     * @return lr, The red channel of the converted color in linear RGB space.
     * @return lg, The green channel of the converted color in linear RGB space.
     * @return lb, The blue channel of the converted color in linear RGB space.
     * @tupleReturn
     * @link [love.math.gammaToLinear](https://love2d.org/wiki/love.math.gammaToLinear)
     */
    export function gammaToLinear(color: [number, number, number]): [number, number, number];

    /**
     * Converts a color from gamma-space (sRGB) to linear-space (RGB). This is useful
     * when doing gamma-correct rendering and you need to do math in linear RGB in the
     * few cases where LÖVE doesn't handle conversions automatically.
     *
     * @param c The value of a color channel in sRGB space to convert.
     * @return lc, The value of the color channel in linear RGB space.
     * @link [love.math.gammaToLinear](https://love2d.org/wiki/love.math.gammaToLinear)
     */
    export function gammaToLinear(c: number): number;

    /**
     * Gets the seed of the random number generator.
     *
     * The state is split into two numbers due to Lua's use of doubles for all number
     * values - doubles can't accurately represent integer values above 2^53.
     *
     * @return low, Integer number representing the lower 32 bits of the random number generator's 64 bit state value.
     * @return high, Integer number representing the higher 32 bits of the random number generator's 64 bit state value.
     * @tupleReturn
     * @link [love.math.getRandomSeed](https://love2d.org/wiki/love.math.getRandomSeed)
     */
    export function getRandomSeed(): [number, number];

    /**
     * Gets the current state of the random number generator. This returns an opaque
     * implementation-dependent string which is only useful for later use with
     * RandomGenerator:setState.
     *
     * This is different from RandomGenerator:getSeed in that getState gets the
     * RandomGenerator's current state, whereas getSeed gets the previously set seed
     * number.
     *
     * The value of the state string does not depend on the current operating system.
     *
     * @return state, The current state of the RandomGenerator object, represented as a string.
     * @link [love.math.getRandomState](https://love2d.org/wiki/love.math.getRandomState)
     */
    export function getRandomState(): string;

    /**
     * Checks whether a polygon is convex.
     *
     * PolygonShapes in love.physics, some forms of Mesh, and polygons drawn with
     * love.graphics.polygon must be simple convex polygons.
     *
     * @param vertices The vertices of the polygon as a table in the form of [x1, y1, x2, y2, x3, y3, ...].
     * @return convex, Whether the given polygon is convex.
     * @link [love.math.isConvex](https://love2d.org/wiki/love.math.isConvex)
     */
    export function isConvex(vertices: Array<number>): boolean;
    export function isConvex(...vertices: Array<number>): boolean;

    /**
     * Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful
     * when storing linear RGB color values in an image, because the linear RGB color
     * space has less precision than sRGB for dark colors, which can result in
     * noticeable color banding when drawing.
     *
     * In general, colors chosen based on what they look like on-screen are already in
     * gamma-space and should not be double-converted. Colors calculated using math
     * are often in the linear RGB space.
     *
     * @param lr The red channel of the linear RGB color to convert.
     * @param lg The green channel of the linear RGB color to convert.
     * @param lb The blue channel of the linear RGB color to convert.
     * @return cr, The red channel of the converted color in gamma sRGB space.
     * @return cg, The green channel of the converted color in gamma sRGB space.
     * @return cb, The blue channel of the converted color in gamma sRGB space.
     * @tupleReturn
     * @link [love.math.linearToGamma](https://love2d.org/wiki/love.math.linearToGamma)
     */
    export function linearToGamma(lr: number, lg: number, lb: number): [number, number, number];

    /**
     * Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful
     * when storing linear RGB color values in an image, because the linear RGB color
     * space has less precision than sRGB for dark colors, which can result in
     * noticeable color banding when drawing.
     *
     * In general, colors chosen based on what they look like on-screen are already in
     * gamma-space and should not be double-converted. Colors calculated using math
     * are often in the linear RGB space.
     *
     * @param color An array with the red, green, and blue channels of the linear RGB color to convert.
     * @return cr, The red channel of the converted color in gamma sRGB space.
     * @return cg, The green channel of the converted color in gamma sRGB space.
     * @return cb, The blue channel of the converted color in gamma sRGB space.
     * @tupleReturn
     * @link [love.math.linearToGamma](https://love2d.org/wiki/love.math.linearToGamma)
     */
    export function linearToGamma(color: [number, number, number]): [number, number, number];

    /**
     * Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful
     * when storing linear RGB color values in an image, because the linear RGB color
     * space has less precision than sRGB for dark colors, which can result in
     * noticeable color banding when drawing.
     *
     * In general, colors chosen based on what they look like on-screen are already in
     * gamma-space and should not be double-converted. Colors calculated using math
     * are often in the linear RGB space.
     *
     * @param lc The value of a color channel in linear RGB space to convert.
     * @return c, The value of the color channel in gamma sRGB space.
     * @link [love.math.linearToGamma](https://love2d.org/wiki/love.math.linearToGamma)
     */
    export function linearToGamma(lc: number): number;

    /**
     * Creates a new BezierCurve object.
     *
     * The number of vertices in the control polygon determines the degree of the
     * curve, e.g. three vertices define a quadratic (degree 2) Bézier curve, four
     * vertices define a cubic (degree 3) Bézier curve, etc.
     *
     * @param vertices The vertices of the control polygon as a table in the form of {x1, y1, x2, y2, x3, y3, ...}.
     * @return curve, A Bézier curve object.
     * @link [love.math.newBezierCurve](https://love2d.org/wiki/love.math.newBezierCurve)
     */
    export function newBezierCurve(vertices: Array<number>): BezierCurve;
    export function newBezierCurve(...vertices: Array<number>): BezierCurve;

    /**
     * Creates a new RandomGenerator object which is completely independent of other
     * RandomGenerator objects and random functions.
     *
     * @return rng, The new Random Number Generator object.
     * @link [love.math.newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator)
     */
    export function newRandomGenerator(): RandomGenerator;

    /**
     * Creates a new RandomGenerator object which is completely independent of other
     * RandomGenerator objects and random functions.
     *
     * @param seed The initial seed number to use for this object.
     * @return rng, The new Random Number Generator object.
     * @link [love.math.newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator)
     */
    export function newRandomGenerator(seed: number): RandomGenerator;

    /**
     * Creates a new RandomGenerator object which is completely independent of other
     * RandomGenerator objects and random functions.
     *
     * @param low The lower 32 bits of the state number to use for this instance of the object.
     * @param high The higher 32 bits of the state number to use for this instance of the object.
     * @return rng, The new Random Number Generator object.
     * @link [love.math.newRandomGenerator](https://love2d.org/wiki/love.math.newRandomGenerator)
     */
    export function newRandomGenerator(low: number, high: number): RandomGenerator;

    /**
     * Creates a new Transform object.
     *
     * @return transform, The new Transform object.
     * @link [love.math.newTransform](https://love2d.org/wiki/love.math.newTransform)
     */
    export function newTransform(): Transform;

    /**
     * Creates a new Transform object.
     *
     * @param x The position of the new Transform on the x-axis.
     * @param y The position of the new Transform on the y-axis.
     * @param angle The orientation of the new Transform in radians.
     * @param sx Scale factor on the x-axis.
     * @param sy Scale factor on the y-axis.
     * @param ox Origin offset on the x-axis.
     * @param oy Origin offset on the y-axis.
     * @param kx Shearing / skew factor on the x-axis.
     * @param ky Shearing / skew factor on the y-axis.
     * @return transform, The new Transform object.
     * @link [love.math.newTransform](https://love2d.org/wiki/love.math.newTransform)
     */
    export function newTransform(
        x: number,
        y: number,
        angle?: number,
        sx?: number,
        sy?: number,
        ox?: number,
        oy?: number,
        kx?: number,
        ky?: number
    ): Transform;

    /**
     * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
     * will always be the same, given the same arguments.
     *
     * Simplex noise is closely related to Perlin noise. It is widely used for
     * procedural content generation.
     *
     * There are many webpages which discuss Perlin and Simplex noise in detail.
     *
     * @param x The number used to generate the noise value.
     * @return value, The noise value in the range of [0, 1].
     * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
     */
    export function noise(x: number): number;

    /**
     * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
     * will always be the same, given the same arguments.
     *
     * Simplex noise is closely related to Perlin noise. It is widely used for
     * procedural content generation.
     *
     * There are many webpages which discuss Perlin and Simplex noise in detail.
     *
     * @param x The first value of the 2-dimensional vector used to generate the noise value.
     * @param y The second value of the 2-dimensional vector used to generate the noise value.
     * @return value, The noise value in the range of [0, 1].
     * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
     */
    export function noise(x: number, y: number): number;

    /**
     * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
     * will always be the same, given the same arguments.
     *
     * Simplex noise is closely related to Perlin noise. It is widely used for
     * procedural content generation.
     *
     * There are many webpages which discuss Perlin and Simplex noise in detail.
     *
     * @param x The first value of the 3-dimensional vector used to generate the noise value.
     * @param y The second value of the 3-dimensional vector used to generate the noise value.
     * @param z The third value of the 3-dimensional vector used to generate the noise value.
     * @return value, The noise value in the range of [0, 1].
     * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
     */
    export function noise(x: number, y: number, z: number): number;

    /**
     * Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value
     * will always be the same, given the same arguments.
     *
     * Simplex noise is closely related to Perlin noise. It is widely used for
     * procedural content generation.
     *
     * There are many webpages which discuss Perlin and Simplex noise in detail.
     *
     * @param x The first value of the 4-dimensional vector used to generate the noise value.
     * @param y The second value of the 4-dimensional vector used to generate the noise value.
     * @param z The third value of the 4-dimensional vector used to generate the noise value.
     * @param w The fourth value of the 4-dimensional vector used to generate the noise value.
     * @return value, The noise value in the range of [0, 1].
     * @link [love.math.noise](https://love2d.org/wiki/love.math.noise)
     */
    export function noise(x: number, y: number, z: number, w: number): number;

    /**
     * Generates a pseudo-random number in a platform independent manner.
     *
     * @return number, The pseudo-random number.
     * @link [love.math.random](https://love2d.org/wiki/love.math.random)
     */
    export function random(): number;

    /**
     * Generates a pseudo-random number in a platform independent manner.
     *
     * @param max The maximum possible value it should return.
     * @return number, The pseudo-random integer number.
     * @link [love.math.random](https://love2d.org/wiki/love.math.random)
     */
    export function random(max: number): number;

    /**
     * Generates a pseudo-random number in a platform independent manner.
     *
     * @param min The minimum possible value it should return.
     * @param max The maximum possible value it should return.
     * @return number, The pseudo-random integer number.
     * @link [love.math.random](https://love2d.org/wiki/love.math.random)
     */
    export function random(min: number, max: number): number;

    /**
     * Get a normally distributed pseudo random number.
     *
     * @param stddev Standard deviation of the distribution.
     * @param mean The mean of the distribution.
     * @return number, Normally distributed random number with variance (stddev)² and the specified mean.
     * @link [love.math.randomNormal](https://love2d.org/wiki/love.math.randomNormal)
     */
    export function randomNormal(stddev?: number, mean?: number): number;

    /**
     * Sets the seed of the random number generator using the specified integer
     * number.
     *
     * @param seed The integer number with which you want to seed the randomization. Must be within the range of [1, 2^53].
     * @link [love.math.setRandomSeed](https://love2d.org/wiki/love.math.setRandomSeed)
     */
    export function setRandomSeed(seed: number): void;

    /**
     * Sets the seed of the random number generator using the specified integer
     * number.
     *
     * @param low The lower 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
     * @param high The higher 32 bits of the state value. Must be within the range of [0, 2^32 - 1].
     * @link [love.math.setRandomSeed](https://love2d.org/wiki/love.math.setRandomSeed)
     */
    export function setRandomSeed(low: number, high: number): void;

    /**
     * Gets the current state of the random number generator. This returns an opaque
     * implementation-dependent string which is only useful for later use with
     * RandomGenerator:setState.
     *
     * This is different from RandomGenerator:getSeed in that getState gets the
     * RandomGenerator's current state, whereas getSeed gets the previously set seed
     * number.
     *
     * The value of the state string does not depend on the current operating system.
     *
     * @param state The current state of the RandomGenerator object, represented as a string.
     * @link [love.math.setRandomState](https://love2d.org/wiki/love.math.setRandomState)
     */
    export function setRandomState(state: string): void;

    /**
     * Triangulate a simple polygon.
     *
     * @param polygon Polygon to triangulate. Must not intersect itself.
     * @return triangles, List of triangles the polygon is composed of, in the form of [[x1, y1, x2, y2, x3, y3], [x1, y1, x2, y2, x3, y3], ...].
     * @link [love.math.triangulate](https://love2d.org/wiki/love.math.triangulate)
     */
    export function triangulate(polygon: Array<number>): Array<Array<number>>;
    export function triangulate(...polygon: Array<number>): Array<Array<number>>;
}