package sa.view;
import js.Lib;

class FloorRenderer
{
	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : GLAttribLocation;
	var vertexNormalAttribute : GLAttribLocation;
	var vertexBuffer : WebGLBuffer;

	var projectionMatrixUniform : GLUniformLocation;
	var viewWorldMatrixUniform : GLUniformLocation;
	var normalMatrixUniform : GLUniformLocation;
	var lightPosUniform : GLUniformLocation;

	public function new() {}

	public function init()
	{
		shaderProgram = GL.createProgram(sa.view.shader.FloorVertex, sa.view.shader.FloorFragment);

		vertexPositionAttribute = GL.getAttribLocation2("vertexPosition", 2, GL.BYTE);
		vertexPositionAttribute.updateBuffer(new Int8Array([
			-1, -1,
			1, -1,
			-1, 1,
			1, 1,
		]));

		vertexNormalAttribute = GL.getAttribLocation2("vertexNormal", 3, GL.BYTE);
		vertexNormalAttribute.updateBuffer(new Int8Array([
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		]));

		lightPosUniform = GL.getUniformLocation("lightPos");
		projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
		viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
		normalMatrixUniform = GL.getUniformLocation("normalMatrix");
	}

	public function render(width : Float, height : Float)
	{
		var time = Date.now().getTime();

		GL.useProgram(shaderProgram);
		GL.viewport(0, 0, width, height);

		projectionMatrixUniform.setMatrix4(projectionMatrix);

		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendTranslation(0, -10, -40);
		viewWorldMatrix.appendScale(40, 40, 1);
		viewWorldMatrix.appendRotation(Math.PI / 2, new Vec3(1, 0, 0));
		viewWorldMatrixUniform.setMatrix4(viewWorldMatrix);

		var normalMatrix = viewWorldMatrix.toInverseMatrix3();
		normalMatrix.transpose();
		normalMatrixUniform.setMatrix3(normalMatrix);

		vertexPositionAttribute.vertexAttribPointer();
		vertexNormalAttribute.vertexAttribPointer();

		var light = new Vec3(0, 10, -30);
		light.transform(cameraMatrix);
		lightPosUniform.setVec3(light);

		vertexPositionAttribute.drawArrays(GL.TRIANGLE_STRIP);
	}
}
