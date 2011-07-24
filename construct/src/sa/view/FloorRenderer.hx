package sa.view;
import js.Lib;

class FloorRenderer
{
	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : GLAttribLocation;
	var vertexNormalAttribute : GLAttribLocation;

	var projectionMatrixUniform : GLUniformLocation;
	var viewWorldMatrixUniform : GLUniformLocation;
	var normalMatrixUniform : GLUniformLocation;
	var cameraMatrixUniform : GLUniformLocation;
	var lightPositionsUniform : GLUniformLocation;
	var lightDiffuseColorsUniform : GLUniformLocation;
	var lightSpecularColorsUniform : GLUniformLocation;
	var moonVertexIndexBuffer : WebGLBuffer;

	public function new() {}

	public function init()
	{
		shaderProgram = GL.createProgram(sa.view.shader.FloorVertex, sa.view.shader.FloorFragment);

		vertexPositionAttribute = GL.getAttribLocation2("vertexPosition", 3, GL.FLOAT);
		vertexNormalAttribute = GL.getAttribLocation2("vertexNormal", 3, GL.FLOAT);

		lightPositionsUniform = GL.getUniformLocation("lightPositions");
		lightDiffuseColorsUniform = GL.getUniformLocation("lightDiffuseColors");
		lightSpecularColorsUniform = GL.getUniformLocation("lightSpecularColors");

		projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
		viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
		normalMatrixUniform = GL.getUniformLocation("normalMatrix");
		cameraMatrixUniform = GL.getUniformLocation("cameraMatrix");

		moonVertexIndexBuffer = GL.createBuffer();
	}

	public function render(width : Float, height : Float)
	{
		var time = Date.now().getTime();

		GL.useProgram(shaderProgram);
		GL.viewport(0, 0, width, height);

		cameraMatrixUniform.setMatrix4(cameraMatrix);
		projectionMatrixUniform.setMatrix4(projectionMatrix);

		var lights = [];

		var light = new Vec3(Math.sin(time / 4000) * 50, 7, Math.cos(time / 2400) * 115);
		light.transform(cameraMatrix);
		lights.push(light.x);
		lights.push(light.y);
		lights.push(light.z);

		var light = new Vec3(Math.sin(time / 3000) * 115, 7, Math.cos(time / 2000) * 115);
		light.transform(cameraMatrix);
		lights.push(light.x);
		lights.push(light.y);
		lights.push(light.z);

		var light = new Vec3(Math.sin(time / 2000) * 20, 7, Math.cos(time / 3000) * 16);
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
		diffuseColors.push(1);
		diffuseColors.push(0);

		diffuseColors.push(0);
		diffuseColors.push(0);
		diffuseColors.push(1);
		GL.gl.uniform3fv(lightDiffuseColorsUniform.location, diffuseColors);

		var d = 1.0;
		var specularColors = [];
		specularColors.push(1.0 * d);
		specularColors.push(0.0 * d);
		specularColors.push(0.0 * d);
		specularColors.push(0.0 * d);
		specularColors.push(1.0 * d);
		specularColors.push(0.0 * d);
		specularColors.push(0.0 * d);
		specularColors.push(0.0 * d);
		specularColors.push(1.0 * d);
		GL.gl.uniform3fv(lightSpecularColorsUniform.location, specularColors);

		GL.gl.enable(GL.DEPTH_TEST);
		drawFloor();
		drawSpheres();
		GL.gl.disable(GL.DEPTH_TEST);
	}

	function drawFloor()
	{
		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendTranslation(0, 0, 0);
		viewWorldMatrix.appendScale(5000, 5000, 5000);

		viewWorldMatrixUniform.setMatrix4(viewWorldMatrix);

		var normalMatrix = viewWorldMatrix.toInverseMatrix3();
		normalMatrix.transpose();
		normalMatrixUniform.setMatrix3(normalMatrix);

		vertexPositionAttribute.updateBuffer(new Float32Array([
			-1, 0, -1,
			1, 0, -1,
			-1, 0, 1,
			1, 0, 1,
		]));
		vertexNormalAttribute.updateBuffer(new Float32Array([
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		]));
		vertexPositionAttribute.vertexAttribPointer();
		vertexNormalAttribute.vertexAttribPointer();
		vertexPositionAttribute.drawArrays(GL.TRIANGLE_STRIP, 0, 4);
	}

	function drawSpheres()
	{

		var sphere = createSphere(20, 20);
		vertexPositionAttribute.updateBuffer(new Float32Array(sphere.vertexPositionData));
		vertexNormalAttribute.updateBuffer(new Float32Array(sphere.normalData));
		vertexPositionAttribute.vertexAttribPointer();
		vertexNormalAttribute.vertexAttribPointer();

		GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, moonVertexIndexBuffer);
		GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(sphere.indexData), GL.STATIC_DRAW);

		drawSphere(0,3,0, sphere);
		drawSphere(6,3,0, sphere);
		//drawSphere(-6,3,0, sphere);
		//drawSphere(0,3,6, sphere);
		//drawSphere(6,3,6, sphere);
		//drawSphere(-6,3,6, sphere);
		//drawSphere(0,3,-6, sphere);
		//drawSphere(6,3,-6, sphere);
		//drawSphere(-6,3,-6, sphere);

		//drawSphere(0-3,3 + 4.2,6-3, sphere);
		//drawSphere(0-3,3 + 4.2,0-3, sphere);
		//drawSphere(6-3,3 + 4.2,6-3, sphere);
		//drawSphere(6-3,3 + 4.2,0-3, sphere);

		//drawSphere(0,3 + 4.2 * 2,0, sphere);
	}

	function drawSphere(x : Float, y : Float, z : Float, sphere)
	{
		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendTranslation(x, y, z);
		viewWorldMatrix.appendScale(3, 3, 3);
		viewWorldMatrixUniform.setMatrix4(viewWorldMatrix);

		var normalMatrix = viewWorldMatrix.toInverseMatrix3();
		normalMatrix.transpose();
		normalMatrixUniform.setMatrix3(normalMatrix);

		untyped GL.gl.drawElements(GL.TRIANGLES, sphere.indexData.length, GL.UNSIGNED_SHORT, 0);
	}

	function createSphere(latitudeBands : Int, longitudeBands : Int)
	{
		var vertexPositionData = [];
		var normalData = [];

		for (latNumber in 0 ... latitudeBands + 1) {
			var theta = latNumber * Math.PI / latitudeBands;
			var sinTheta = Math.sin(theta);
			var cosTheta = Math.cos(theta);

			for (longNumber in 0 ... longitudeBands + 1) {
				var phi = longNumber * 2 * Math.PI / longitudeBands;
				var sinPhi = Math.sin(phi);
				var cosPhi = Math.cos(phi);

				var x = cosPhi * sinTheta;
				var y = cosTheta;
				var z = sinPhi * sinTheta;

				normalData.push(x);
				normalData.push(y);
				normalData.push(z);
				vertexPositionData.push(x);
				vertexPositionData.push(y);
				vertexPositionData.push(z);
			}
		}

		var indexData = [];
		for (latNumber in 0 ... latitudeBands) {
			for (longNumber in 0 ... longitudeBands) {
				var first = (latNumber * (longitudeBands + 1)) + longNumber;
				var second = first + longitudeBands + 1;
				indexData.push(first);
				indexData.push(second);
				indexData.push(first + 1);

				indexData.push(second);
				indexData.push(second + 1);
				indexData.push(first + 1);
			}
		}

		return {vertexPositionData : vertexPositionData, normalData : normalData, indexData : indexData, length : vertexPositionData.length};
	}
}
