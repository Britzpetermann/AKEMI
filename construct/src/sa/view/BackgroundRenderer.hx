package sa.view;
import js.Lib;

class BackgroundRenderer
{
	public var texture : GLTexture;

	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : GLAttribLocation;
	var vertexBuffer : WebGLBuffer;

	var textureUniform : GLUniformLocation;
	var projectionMatrixUniform : GLUniformLocation;
	var viewWorldMatrixUniform : GLUniformLocation;

	public function new() {}

	public function init()
	{
		shaderProgram = GL.createProgram(sa.view.shader.PassVertex2, sa.view.shader.Texture);

		vertexPositionAttribute = GL.getAttribLocation2("vertexPosition", 2, GL.BYTE);
		vertexPositionAttribute.updateBuffer(new Int8Array([
			-1, -1,
			1, -1,
			-1, 1,
			1, 1,
		]));

		textureUniform = GL.getUniformLocation("texture");
		projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
		viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
	}

	public function render(width : Float, height : Float)
	{
		GL.useProgram(shaderProgram);
		GL.viewport(0, 0, width, height);

		projectionMatrixUniform.setMatrix4(projectionMatrix);

		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendScale(1,-1,1);
		viewWorldMatrix.appendTranslation(0, 0, -40);
		viewWorldMatrix.appendScale(80, 80, 1);
		viewWorldMatrixUniform.setMatrix4(viewWorldMatrix);

		textureUniform.setTexture(texture);

		vertexPositionAttribute.vertexAttribPointer();
		vertexPositionAttribute.drawArrays(GL.TRIANGLE_STRIP);
	}
}
