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
	var perspectiveMatrixUniform : WebGLUniformLocation;
	var objectMatrixUniform : WebGLUniformLocation;
	var rotationMatrixUniform : WebGLUniformLocation;
	var cameraMatrixUniform : WebGLUniformLocation;
	var elapsedTimeUniform : WebGLUniformLocation;
	var attractorPositionUniform : WebGLUniformLocation;
	var peakIncrementUniform : WebGLUniformLocation;
	var peakUniform : WebGLUniformLocation;
	
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
		
		shaderProgram = GLUtil.createProgram(gl, sa.view.shader.PlanktonVertex.create(), sa.view.shader.Color.create());

		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
		gl.enableVertexAttribArray(vertexPositionAttribute);
		
		perspectiveMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "perspectiveMatrix");
		objectMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "objectMatrix");
		rotationMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "rotationMatrix");
		cameraMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "cameraMatrix");
		elapsedTimeUniform = GLUtil.getUniformLocation(gl, shaderProgram, "elapsedTime");
		attractorPositionUniform = GLUtil.getUniformLocation(gl, shaderProgram, "attractorPosition");
		peakUniform = GLUtil.getUniformLocation(gl, shaderProgram, "peak");
		peakIncrementUniform = GLUtil.getUniformLocation(gl, shaderProgram, "peakIncrement");
				
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
    	
    	gl.uniformMatrix4fv(perspectiveMatrixUniform, false, projectionMatrix.buffer);
    	gl.uniformMatrix4fv(objectMatrixUniform, false, objectMatrix.buffer);
    	gl.uniformMatrix4fv(cameraMatrixUniform, false, cameraMatrix.buffer);
    	gl.uniformMatrix4fv(rotationMatrixUniform, false, rotationM.buffer); 
    	gl.uniform1f(elapsedTimeUniform, elapsedTime);
    	gl.uniform1f(peakIncrementUniform, peakIncrement);
    	gl.uniform1f(peakUniform, peak);
    	gl.uniform3f(attractorPositionUniform, attractorPosition.x, attractorPosition.y, attractorPosition.z);
    	
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    	gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
    	
    	gl.drawArrays(gl.LINES, 0, numParticles);
    	
    	gl.disable(gl.BLEND);
	}
}
