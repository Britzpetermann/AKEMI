package sa.view;
import js.Lib;

class BackgroundRenderer
{
	public var texture : GLTexture;

	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var textureUniform : GLUniformLocation;
	var projectionMatrixUniform : GLUniformLocation;
	var viewWorldMatrixUniform : GLUniformLocation;

	public function new() {}

	public function init()
	{
		shaderProgram = GL.createProgram(sa.view.shader.PassVertex2, sa.view.shader.Texture);

		vertexPositionAttribute = GL.getAttribLocation(shaderProgram, "vertexPosition");
		GL.enableVertexAttribArray(vertexPositionAttribute);

		vertexBuffer = GL.createArrayBuffer(new Int8Array([
			1, -1,
			-1,  1,
			-1, -1,
			1, -1,
			1,  1,
			-1,  1,
		]));

		textureUniform = GL.getUniformLocation("texture");
		projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
		viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
	}

	public function render(width : Float, height : Float)
	{
		GL.useProgram(shaderProgram);
		GL.viewport(0, 0, width, height);

		GL.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer);
		GL.vertexAttribPointer(vertexPositionAttribute, 2, GL.BYTE, false, 0, 0);
		projectionMatrixUniform.setMatrix4(projectionMatrix);

		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendScale(1,-1,1);
		viewWorldMatrix.appendTranslation(0, 0, -40);
		viewWorldMatrix.appendScale(80, 80, 1);
		viewWorldMatrixUniform.uniformMatrix4fv(viewWorldMatrix.buffer);

		GL.activeTexture(GL.TEXTURE0);
		GL.bindTexture(GL.TEXTURE_2D, texture.texture);
		textureUniform.uniform1i(0);

		GL.drawArrays(GL.TRIANGLES, 0, 6);
	}
}
