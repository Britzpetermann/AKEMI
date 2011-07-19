package sa.view;

class StrangeAttractorRenderer
{
	public var effectivePosition : Vec3;
	public var peak : Float;

	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var softPeak : Float;

	var defaultZ : Float;
	var numParticles : Int;

	var gl : WebGLRenderingContext;

	var objectMatrix : Matrix4;
	var shadowMatrix : Matrix4;

	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var colorAttribute : Float;
	var colorBuffer : WebGLBuffer;

	var shaderProgram : WebGLProgram;
	var perspectiveMatrixUniform : WebGLUniformLocation;
	var objectMatrixUniform : WebGLUniformLocation;
	var cameraMatrixUniform : WebGLUniformLocation;
	var shadowMatrixUniform : WebGLUniformLocation;
	var elapsedTimeUniform : WebGLUniformLocation;
	var specularColorUniform1 : WebGLUniformLocation;
	var specularColorUniform2 : WebGLUniformLocation;
	var clickColorUniform : WebGLUniformLocation;
	var elapsedClickTimeUniform : WebGLUniformLocation;
	var clickPosUniform : WebGLUniformLocation;
	var peakUniform : WebGLUniformLocation;

	var vertexes : Float32Array;
	var colors : Float32Array;

	var startTime : Float;
	var lastTime : Float;

	var kuler : Kuler;

	var positionMoveSet : MoveSetVec3;
	var rotationMoveSet : MoveSetVec3;

	var clickTime : Float;
	var clickPos : Vec3;

	var positionMoveSpeed : Float;
	var rotationMoveSpeed : Float;

	var mode : Int;

	public function new()
	{
		mode = 0;
		numParticles = 100000;

		positionMoveSpeed = 0.001;
		rotationMoveSpeed = 0.0001;

		defaultZ = -9;
		softPeak = 0;

		var start = new Vec2(Math.random() - 0.5, Math.random() -0.5);
		start.normalize();
		start.scale(4);

		positionMoveSet = new MoveSetVec3(new Vec3(start.x, start.y, defaultZ - 20), new Vec3(0.0, 0.0, defaultZ), new Vec3(positionMoveSpeed, positionMoveSpeed, positionMoveSpeed));
		rotationMoveSet = new MoveSetVec3(new Vec3(0.0, -3.0, -2.0), new Vec3(1.6, 3.0, 0.0), new Vec3(rotationMoveSpeed, rotationMoveSpeed, rotationMoveSpeed));
		effectivePosition = positionMoveSet.current.clone();

		kuler = new Kuler();
		kuler[0].fromHex(0x2fb694);
		kuler[1].fromHex(0xff2e3f);
		kuler[2].fromHex(0xd7fdcc);
		kuler[3].fromHex(0xb788bc);
		kuler[4].fromHex(0xf3cbf5);

		objectMatrix = new Matrix4();
		objectMatrix.identity();

		shadowMatrix = new Matrix4();
		shadowMatrix.identity();

		clickPos = new Vec3();
	}

	public function init(gl : WebGLRenderingContext)
	{
		this.gl = gl;

		shaderProgram = GLUtil.createProgram(gl, sa.view.shader.StrangeAttractorVertex, sa.view.shader.Color);

		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
		colorAttribute = gl.getAttribLocation(shaderProgram, "icolor");
		perspectiveMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "perspectiveMatrix");
		objectMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "objectMatrix");
		cameraMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "cameraMatrix");
		shadowMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "shadowMatrix");
		elapsedTimeUniform = GLUtil.getUniformLocation(gl, shaderProgram, "elapsedTime");
		specularColorUniform1 = GLUtil.getUniformLocation(gl, shaderProgram, "specularColor1");
		specularColorUniform2 = GLUtil.getUniformLocation(gl, shaderProgram, "specularColor2");
		clickColorUniform = GLUtil.getUniformLocation(gl, shaderProgram, "clickColor");
		elapsedClickTimeUniform = GLUtil.getUniformLocation(gl, shaderProgram, "elapsedClickTime");
		clickPosUniform = GLUtil.getUniformLocation(gl, shaderProgram, "clickPos");
		peakUniform = GLUtil.getUniformLocation(gl, shaderProgram, "peak");

		updateMode(0);

		GLMouseRegistry.getInstance().mouseDownSignaler.bind(shake);
	}

	public function updateMode(newMode : Int)
	{
		mode = newMode;
		switch(newMode)
		{
			case 0:
				numParticles = 100000;
			case 1:
				numParticles = 500000;
			case 2:
				numParticles = 20000;
		}
		updateParticleMode();
	}

	function updateParticleMode()
	{
		calculatePositions();

		vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, vertexes, gl.STATIC_DRAW);

		colorBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
	}

	function calculatePositions()
	{
		colors = new Float32Array(numParticles * 3);
		vertexes = new Float32Array(numParticles * 3);

		var _a = 1.111;
		var _b = 1.479;
		var _f = 4.494;
		var _g = 0.44;
		var _d = 0.135;

		var cx = 1.0, cy = 1.0, cz = 1.0, mx = 0.0, my = 0.0, mz = 0.0;

		var color = new Color();
		for (i in 0...numParticles)
		{
			mx = cx + _d * (-_a * cx - cy * cy - cz * cz + _a * _f);
			my = cy + _d * (-cy + cx * cy - _b * cx * cz + _g);
			mz = cz + _d * (-cz + _b * cx * cy + cx * cz);

			cx = mx;
			cy = my;
			cz = mz;

			vertexes[i * 3] = mx * 0.4;
			vertexes[i * 3 + 1] = my * 0.4;
			vertexes[i * 3 + 2] = mz * 0.4;

			var l = Math.sqrt(cx * cx + cy * cy + cz * cz);
			color.mixFrom(kuler[0], kuler[1], l / 4);

			colors[i * 3] = color.r;
			colors[i * 3 + 1] = color.g;
			colors[i * 3 + 2] = color.b;
		}
	}

	public function start()
	{
		startTime = Date.now().getTime();
		lastTime = Date.now().getTime();
	}

	public function render(width : Float, height : Float)
	{
		if (positionMoveSet.current.z >= defaultZ - 3)
			rotationMoveSpeed = 0.001;

		var time = Date.now().getTime();
		var elapsedClickTime = time - clickTime;
		var elapsedTime = time - startTime;
		var frameTime = time - lastTime;
		lastTime = Date.now().getTime();

		positionMoveSet.move(frameTime / 16);
		rotationMoveSet.move(frameTime / 16);

		effectivePosition.x = positionMoveSet.current.x + Math.cos(-elapsedTime / 1100) * 0.1;
		effectivePosition.y = positionMoveSet.current.y + Math.sin(-elapsedTime / 1000) * 0.1;
		effectivePosition.z = positionMoveSet.current.z;

		if (peak - softPeak > 0.4)
			shake(new Vec2(Math.random() * 0.6 + 0.2, Math.random() * 0.6 + 0.2));
		softPeak += (peak - softPeak) * 0.1;

		objectMatrix.setFrom(cameraMatrix);
		objectMatrix.appendTranslation(effectivePosition.x, effectivePosition.y, effectivePosition.z);
		objectMatrix.appendEulerRotation(rotationMoveSet.current.x + Math.sin(-elapsedTime / 2000) * 0.1, rotationMoveSet.current.y + Math.sin(-elapsedTime / 3300) * 0.1, rotationMoveSet.current.z + Math.sin(-elapsedTime / 4000) * 0.1);

		shadowMatrix.appendRotation(frameTime * 0.0001, {x : 0.0, y : 1.0, z : Math.sin(-elapsedTime / 5000)});

		gl.useProgram(shaderProgram);

		gl.enableVertexAttribArray(colorAttribute);
		gl.enableVertexAttribArray(vertexPositionAttribute);

		gl.viewport(0, 0, width, height);

		gl.enable(gl.DEPTH_TEST);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

		gl.uniformMatrix4fv(perspectiveMatrixUniform, false, projectionMatrix.buffer);
		gl.uniformMatrix4fv(objectMatrixUniform, false, objectMatrix.buffer);
		gl.uniformMatrix4fv(shadowMatrixUniform, false, shadowMatrix.buffer);
		gl.uniformMatrix4fv(cameraMatrixUniform, false, cameraMatrix.buffer);
		gl.uniform1f(elapsedTimeUniform, elapsedTime);
		gl.uniform1f(peakUniform, softPeak);
		gl.uniform1f(elapsedClickTimeUniform, elapsedClickTime);
		gl.uniform3f(clickPosUniform, clickPos.x, clickPos.y, clickPos.z);
		gl.uniform3f(specularColorUniform1, kuler[2].r, kuler[2].g, kuler[2].b);
		gl.uniform3f(specularColorUniform2, kuler[3].r, kuler[3].g, kuler[3].b);
		gl.uniform3f(clickColorUniform, kuler[4].r, kuler[4].g, kuler[4].b);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

		gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
		gl.vertexAttribPointer(colorAttribute, 3, gl.FLOAT, false, 0, 0);

		if (mode != 2)
		{
			gl.drawArrays(gl.POINTS, 0, numParticles);
		}
		else
		{
			gl.drawArrays(gl.LINE_LOOP, 0, numParticles);
		}


		if (mode == 0)
		{
			gl.drawArrays(gl.LINES, 0, numParticles * 0.01);
			gl.drawArrays(gl.TRIANGLE_STRIP, numParticles * 0.01, numParticles * 0.001);
		}

		gl.disable(gl.DEPTH_TEST);
	}

	function shake(mousePos : Vec2)
	{
		var angry = false;
		var hit = false;

		rotationMoveSet.acceleration.setFrom(rotationMoveSpeed);
		positionMoveSet.acceleration.setFrom(positionMoveSpeed);

		var elapsedClickTime = Date.now().getTime() - clickTime;
		if (elapsedClickTime < 0 || elapsedClickTime > 200)
		{
			var clickPos4 = new Vec4(mousePos.x, 1 - mousePos.y, 1.0, -defaultZ);
			clickPos4.subtract(0.5, 0.5, 0.0, 0.0);
			clickPos4.multiply(2.0, 2.0, 1.0, 1.0);

			clickPos4.project3D(projectionMatrix, objectMatrix);
			if (clickPos4.length() < 2.5)
			{
				clickPos.setFrom(clickPos4);

				clickTime = Date.now().getTime();
				hit = true;
			}
		}
		else
		{
			angry = true;
			rotationMoveSet.to = new Vec3(0.1 + (Math.random() - 0.5) * 0.3, 2.2, -0.3  + (Math.random() - 0.5) * 0.1);
			rotationMoveSet.to.scale(Math.PI / 2);
			rotationMoveSet.acceleration.setFrom(rotationMoveSpeed * 5);

			positionMoveSet.to = new Vec3(0.0, 0.0, defaultZ + 2.0 + (Math.random() - 0.5) * 0.5);
			positionMoveSet.acceleration.setFrom(positionMoveSpeed * 5);
		}

		if (!angry && !hit)
		{
			var positionTarget = new Vec3(mousePos.x, mousePos.y, 0);
			positionTarget.subtract(0.5, 0.5, 0.0);
			positionTarget.scale(0.8);
			positionTarget.multiply(15.0, -9.0, 0.0);
			positionTarget.z = defaultZ + (mousePos.x - 0.5) * -3;

			positionMoveSet.to = positionTarget;

			if (positionTarget.x > positionMoveSet.current.x)
				rotationMoveSet.to = new Vec3(0.8 - positionTarget.x / 50, -1.7 + positionTarget.y / 20, 0.0);
			else
				rotationMoveSet.to = new Vec3(0.8 + positionTarget.x / 50, 0.0 - positionTarget.y / 20, 2.0);
			rotationMoveSet.to.scale(Math.PI / 2);
		}
	}
}
