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
	var lightPositionsUniform : GLUniformLocation;
	var lightDiffuseColorsUniform : GLUniformLocation;
	var lightSpecularColorsUniform : GLUniformLocation;

	public function new() {}

	public function init()
	{
		shaderProgram = GL.createProgram(sa.view.shader.FloorVertex, sa.view.shader.FloorFragment);

		vertexPositionAttribute = GL.getAttribLocation2("vertexPosition", 3, GL.FLOAT);
		vertexPositionAttribute.updateBuffer(new Float32Array([
			-1, 0, -1,
			1, 0, -1,
			-1, 0, 1,
			1, 0, 1
		]));

		vertexNormalAttribute = GL.getAttribLocation2("vertexNormal", 3, GL.BYTE);
		vertexNormalAttribute.updateBuffer(new Int8Array([
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		]));

		lightPositionsUniform = GL.getUniformLocation("lightPositions");
		lightDiffuseColorsUniform = GL.getUniformLocation("lightDiffuseColors");
		lightSpecularColorsUniform = GL.getUniformLocation("lightSpecularColors");

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
		viewWorldMatrix.appendTranslation(0, 0, 0);
		viewWorldMatrix.appendScale(50, 50, 50);

		viewWorldMatrixUniform.setMatrix4(viewWorldMatrix);

		var normalMatrix = viewWorldMatrix.toInverseMatrix3();
		normalMatrix.transpose();
		normalMatrixUniform.setMatrix3(normalMatrix);

		vertexPositionAttribute.vertexAttribPointer();
		vertexNormalAttribute.vertexAttribPointer();

		var lights = [];

		var light = new Vec3(Math.sin(time / 1000) * 5, 1, Math.cos(time / 1000) * 5);
		light.transform(cameraMatrix);
		lights.push(light.x);
		lights.push(light.y);
		lights.push(light.z);

		var light = new Vec3(Math.sin(time / 1000) * 20, 2, Math.cos(time / 300) * 10);
		light.transform(cameraMatrix);
		lights.push(light.x);
		lights.push(light.y);
		lights.push(light.z);

		GL.gl.uniform3fv(lightPositionsUniform.location, lights);

		var diffuseColors = [];
		diffuseColors.push(1.0);
		diffuseColors.push(0);
		diffuseColors.push(0);
		diffuseColors.push(0);
		diffuseColors.push(0);
		diffuseColors.push(1);
		GL.gl.uniform3fv(lightDiffuseColorsUniform.location, diffuseColors);

		var specularColors = [];
		specularColors.push(1.0);
		specularColors.push(0.5);
		specularColors.push(0.5);
		specularColors.push(0.5);
		specularColors.push(0.5);
		specularColors.push(1);
		GL.gl.uniform3fv(lightSpecularColorsUniform.location, specularColors);

		vertexPositionAttribute.drawArrays(GL.TRIANGLE_STRIP, 0, 4);
	}
}
