package sa.view;
import js.Lib;

class DebugRenderer
{
	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : GLAttribLocation;
	var vertexColorAttribute : GLAttribLocation;

	var projectionMatrixUniform : GLUniformLocation;
	var viewWorldMatrixUniform : GLUniformLocation;

	public function new() {}

	public function init()
	{
		shaderProgram = GL.createProgram(sa.view.shader.DebugVertex, sa.view.shader.DebugFragment);

		vertexPositionAttribute = GL.getAttribLocation2("vertexPosition", 3, GL.FLOAT);
		vertexPositionAttribute.updateBuffer(new Float32Array([
			0, 0, 0,
			1, 0, 0,
			0, 1, 0,
			1, 1, 0,
			0, 0, 1,
			1, 0, 1,
			0, 1, 1,
			1, 1, 1,
		]));

		vertexColorAttribute = GL.getAttribLocation2("vertexColor", 4, GL.FLOAT);
		vertexColorAttribute.updateBuffer(new Float32Array([
			0, 0, 0, 1,
			1, 0, 0, 1,
			0, 1, 0, 1,
			1, 1, 0, 1,
			0, 0, 1, 1,
			1, 0, 1, 1,
			0, 1, 1, 1,
			1, 1, 1, 1,
		]));

		projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
		viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
	}

	public function render(width : Float, height : Float)
	{
		var time = Date.now().getTime();

		GL.useProgram(shaderProgram);
		GL.viewport(0, 0, width, height);

		projectionMatrixUniform.setMatrix4(projectionMatrix);

		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendScale(5, 5, 1);
		viewWorldMatrix.appendEulerRotation(time / 2000, 0, 0);
		viewWorldMatrixUniform.setMatrix4(viewWorldMatrix);

		vertexColorAttribute.vertexAttribPointer();
		vertexPositionAttribute.vertexAttribPointer();
		vertexPositionAttribute.drawArrays(GL.TRIANGLE_STRIP);
		//vertexPositionAttribute.drawArrays(GL.LINES);
	}
}
