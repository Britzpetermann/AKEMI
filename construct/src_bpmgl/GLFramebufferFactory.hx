class GLFramebufferFactory
{
	public var gl : WebGLRenderingContext;

	public function new(gl : WebGLRenderingContext)
	{
		this.gl = gl;
	}

	public function create(width : Int, height : Int) : GLFramebuffer
	{
		var result = new GLFramebuffer();
		result.width = width;
		result.height = height;

		result.framebuffer = gl.createFramebuffer();
		gl.bindFramebuffer(gl.FRAMEBUFFER, result.framebuffer);

		result.texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, result.texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

		gl.texImage2DArrayBufferView(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, result.texture, 0);

		gl.bindTexture(gl.TEXTURE_2D, null);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);

		return result;
	}
}
