import js.Lib;

class GLTextureRegistry
{
	public var images : Array<GLTexture>;

	public var gl : WebGLRenderingContext;

	public function new()
	{
		images = new Array();
	}

	public function register(name : Dynamic, texture : GLTexture)
	{
		images[name] = texture;
	}

	public function get(name : Dynamic)
	{
		return images[name];
	}

	public function createGLTextureFromImage(image : Image, ?filter : Int = null)
	{
		var texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2DImage(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter != null ? filter : gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter != null ? filter : gl.NEAREST);

		if (
			filter == gl.NEAREST_MIPMAP_NEAREST ||
			filter == gl.NEAREST_MIPMAP_LINEAR ||
			filter == gl.LINEAR_MIPMAP_NEAREST ||
			filter == gl.LINEAR_MIPMAP_LINEAR
			)
		{
			gl.generateMipmap(gl.TEXTURE_2D);
		}

		var result = new GLTexture();
		result.width = image.width;
		result.height = image.height;
		result.texture = texture;

		return result;
	}

	public function createGLTextureFromCanvas(canvas : Canvas)
	{
		var testPowerOfTwoWidth = Std.int(GLMathUtil.getNextPowerOfTwo(canvas.width));
		var testPowerOfTwoHight = Std.int(GLMathUtil.getNextPowerOfTwo(canvas.height));
		if (testPowerOfTwoWidth != canvas.width || testPowerOfTwoHight != canvas.height)
			throw "Canvas size must be a valid texture size!";

		var texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2DCanvas(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

		var result = new GLTexture();
		result.width = canvas.width;
		result.height = canvas.height;
		result.texture = texture;

		return result;
	}

	public function updateGLTextureFromCanvas(texture : GLTexture, canvas : Canvas)
	{
		var testPowerOfTwoWidth = Std.int(GLMathUtil.getNextPowerOfTwo(canvas.width));
		var testPowerOfTwoHight = Std.int(GLMathUtil.getNextPowerOfTwo(canvas.height));
		if (testPowerOfTwoWidth != canvas.width || testPowerOfTwoHight != canvas.height)
			throw "Canvas size must be a valid texture size!";

		gl.bindTexture(gl.TEXTURE_2D, texture.texture);
		gl.texImage2DCanvas(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);

		texture.width = canvas.width;
		texture.height = canvas.height;
	}

}
