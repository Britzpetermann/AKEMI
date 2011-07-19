package sa.view;

class TextureRenderer
{
	public var texture : WebGLTexture;

	var gl : WebGLRenderingContext;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var textureUniform : WebGLUniformLocation;
	var perspectiveMatrixUniform : WebGLUniformLocation;

	public function new(){}

	public function init(gl : WebGLRenderingContext)
	{
		this.gl = gl;

		shaderProgram = GLUtil.createProgram(gl, sa.view.shader.PassVertex, sa.view.shader.Texture);

		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
		gl.enableVertexAttribArray(vertexPositionAttribute);

		vertexBuffer = GLUtil.createInt8VertexBuffer(gl, [
			-1, -1,
			1, -1,
			-1,  1,
			1, -1,
			-1,  1,
			1,  1,
		]);

		textureUniform = GLUtil.getUniformLocation(gl, shaderProgram, "texture");
		perspectiveMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "perspectiveMatrix");
	}

	public function render(width : Float, height : Float)
	{
		var matrix = new Matrix4();
		matrix.ortho(-1, 1, 1, -1, 0, 1);

		gl.useProgram(shaderProgram);
		gl.viewport(-10, -10, width + 20, height + 20);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.BYTE, false, 0, 0);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.uniform1i(textureUniform, 0);

		gl.uniformMatrix4fv(perspectiveMatrixUniform, false, matrix.buffer);

		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
}
