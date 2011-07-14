package sa.view;

class UnderWaterRenderer
{
	var gl : WebGLRenderingContext;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var elapsedTimeUniform : WebGLUniformLocation;
	var perspectiveMatrixUniform : WebGLUniformLocation;

	var startTime : Float;

	public function new()
	{

	}

	public function init(gl : WebGLRenderingContext)
	{
		this.gl = gl;

		shaderProgram = gl.createProgram();

		var vs = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vs, sa.view.shader.PassVertex.create());
		gl.compileShader(vs);
		if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
			trace(gl.getShaderInfoLog(vs));
			return;
		}

		var fs = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fs, sa.view.shader.UnderWater.create());
		gl.compileShader(fs);
		var status = gl.getShaderParameter(fs, gl.COMPILE_STATUS);
		if (!status) {
			trace(gl.getShaderInfoLog(fs));
			return;
		}

		gl.attachShader(shaderProgram, vs);
		gl.attachShader(shaderProgram, fs);
		gl.linkProgram(shaderProgram);
		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
		{
			trace("Could not initialise shaders");
			return;
		}

		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
		gl.enableVertexAttribArray(vertexPositionAttribute);

		vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

		var vertices : Array<Int> = [
			-1, -1,
			1, -1,
			-1,  1,
			1, -1,
			-1,  1,
			1,  1,
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(vertices), gl.STATIC_DRAW);

		elapsedTimeUniform = GLUtil.getUniformLocation(gl, shaderProgram, "elapsedTime");
		perspectiveMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "perspectiveMatrix");

		startTime = Date.now().getTime();
	}

	public function render(width : Float, height : Float, aspect : Float)
	{
		var elapsedTime = Date.now().getTime() - startTime;

		var matrix = new Matrix4();
		matrix.ortho(-1, 1, 1, -1, 0, 1);

		gl.useProgram(shaderProgram);
		gl.viewport(0, 0, width, height);
		gl.enableVertexAttribArray(vertexPositionAttribute);

		gl.uniform1f(elapsedTimeUniform, elapsedTime);
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.BYTE, false, 0, 0);

		gl.uniformMatrix4fv(perspectiveMatrixUniform, false, matrix.buffer);

		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
}
