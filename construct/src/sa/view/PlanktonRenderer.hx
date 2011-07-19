package sa.view;

class PlanktonRenderer
{
	public var attractorPosition : Vec3;
	public var peak : Float;
	public var peakIncrement : Float;

	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var numParticles : Int;
	var numParticlesEachSide : Int;

	var gl : WebGLRenderingContext;

	var objectMatrix : Matrix4;
	var shadowMatrix : Matrix4;

	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var shaderProgram : WebGLProgram;
	var perspectiveMatrixUniform : GLUniformLocation;
	var objectMatrixUniform : GLUniformLocation;
	var rotationMatrixUniform : GLUniformLocation;
	var cameraMatrixUniform : GLUniformLocation;
	var elapsedTimeUniform : GLUniformLocation;
	var attractorPositionUniform : GLUniformLocation;
	var peakIncrementUniform : GLUniformLocation;
	var peakUniform : GLUniformLocation;

	var vertexes : Float32Array;

	var startTime : Float;
	var lastTime : Float;

	var kuler : Kuler;

	var clickTime : Float;
	var clickPos : Vec3;

	public function new()
	{
		peakIncrement = 0;
		kuler = new Kuler();
		kuler[0].fromHex(0x00ff00);
		kuler[1].fromHex(0x0000ff);
		kuler[2].fromHex(0x0);
		kuler[3].fromHex(0x0);
		kuler[4].fromHex(0xff0000);

		numParticlesEachSide = 150;
		numParticles = numParticlesEachSide * numParticlesEachSide;

		objectMatrix = new Matrix4();
		objectMatrix.identity();

		shadowMatrix = new Matrix4();
		shadowMatrix.identity();

		clickPos = new Vec3();
	}

	public function init(gl : WebGLRenderingContext)
	{
		this.gl = gl;

		shaderProgram = GL.createProgram(sa.view.shader.PlanktonVertex, sa.view.shader.Color);

		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
		gl.enableVertexAttribArray(vertexPositionAttribute);

		perspectiveMatrixUniform = GL.getUniformLocation("perspectiveMatrix");
		objectMatrixUniform = GL.getUniformLocation("objectMatrix");
		rotationMatrixUniform = GL.getUniformLocation("rotationMatrix");
		cameraMatrixUniform = GL.getUniformLocation("cameraMatrix");
		elapsedTimeUniform = GL.getUniformLocation("elapsedTime");
		attractorPositionUniform = GL.getUniformLocation("attractorPosition");
		peakUniform = GL.getUniformLocation("peak");
		peakIncrementUniform = GL.getUniformLocation("peakIncrement");

		calculatePositions();

		vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, vertexes, gl.STATIC_DRAW);

		startTime = Date.now().getTime();
	}

	function calculatePositions()
	{
		vertexes = new Float32Array(numParticles * 3);

		var particleSize = 250;

		//plane1
		var i = 0;
		for (x in 0 ... numParticlesEachSide)
		for (y in 0 ... numParticlesEachSide)
		{

			var mx = (x - numParticlesEachSide / 2) / numParticlesEachSide * particleSize * 0.2;
			var my = (y - numParticlesEachSide / 2) / numParticlesEachSide * particleSize * 0.3;
			var mz = 0;

			vertexes[i * 3] = mx * 1.0;
			vertexes[i * 3 + 1] = my * 1.0;
			vertexes[i * 3 + 2] = mz * 1.0;

			i++;
		}
	}

	public function render(width : Float, height : Float)
	{
		peakIncrement += peak;
		var time = Date.now().getTime();
		var elapsedClickTime = time - clickTime;
		var elapsedTime = time - startTime;
		var frameTime = time - lastTime;
		lastTime = time;

		var rotationM = new Matrix4();
		rotationM.appendEulerRotation(0, Math.PI / 2, 0);
		rotationM.appendEulerRotation(0, 0, 0.9);
		rotationM.appendEulerRotation(0.3, 0, 0);

		objectMatrix.setFrom(cameraMatrix);
		//objectMatrix.appendTranslation(40, 7, -120);
		objectMatrix.appendTranslation(4, 2, -40);
		objectMatrix.multiply(rotationM);
		objectMatrix.appendTranslation(0, 7, 0);

		shadowMatrix.appendRotation(frameTime * 0.0001, {x : 0.0, y : 1.0, z : Math.sin(-elapsedTime / 5000)});

		gl.useProgram(shaderProgram);

		gl.viewport(0, 0, width, height);

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

		gl.uniformMatrix4fv(perspectiveMatrixUniform.location, false, projectionMatrix.buffer);
		gl.uniformMatrix4fv(objectMatrixUniform.location, false, objectMatrix.buffer);
		gl.uniformMatrix4fv(cameraMatrixUniform.location, false, cameraMatrix.buffer);
		gl.uniformMatrix4fv(rotationMatrixUniform.location, false, rotationM.buffer);
		gl.uniform1f(elapsedTimeUniform.location, elapsedTime);
		gl.uniform1f(peakIncrementUniform.location, peakIncrement);
		gl.uniform1f(peakUniform.location, peak);
		gl.uniform3f(attractorPositionUniform.location, attractorPosition.x, attractorPosition.y, attractorPosition.z);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

		gl.drawArrays(gl.LINES, 0, numParticles);

		gl.disable(gl.BLEND);
	}
}
