import js.Lib;

class GLDisplayListRenderer
{
	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var textureUniform : GLUniformLocation;
	var projectionMatrixUniform : GLUniformLocation;
	var objectMatrixUniform : GLUniformLocation;
	var sizeUniform : GLUniformLocation;
	var alphaUniform : GLUniformLocation;

	var textures : IntHash<WebGLTexture>;

	public function new()
	{
		textures = new IntHash();
	}

	public function init()
	{
		var gl = GL.gl;

		shaderProgram = GL.createProgram(shader.DisplayObjectVertex, shader.DisplayObjectFragment);

		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");

		vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		var vertices : Array<Int> = [
			0,  0,
			1,  0,
			0,  1,
			1,  1,
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(vertices), gl.STATIC_DRAW);

		textureUniform = GL.getUniformLocation("texture");
		projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
		objectMatrixUniform = GL.getUniformLocation("objectMatrix");
		sizeUniform = GL.getUniformLocation("size");
		alphaUniform = GL.getUniformLocation("alpha");
	}

	public function render(width : Float, height : Float)
	{
		var gl = GL.gl;

		GL.useProgram(shaderProgram);
		gl.viewport(0, 0, width, height);

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		GL.enableVertexAttribArray(vertexPositionAttribute);
		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.BYTE, false, 0, 0);

		var projectionMatrix = new Matrix4();
		projectionMatrix.ortho(0, width, height, 0, 0, 1);
		gl.uniformMatrix4fv(projectionMatrixUniform.location, false, projectionMatrix.buffer);

		var stage = GLDisplayList.getDefault().stage;

		gl.activeTexture(gl.TEXTURE0);
		gl.uniform1i(textureUniform.location, 0);

		renderRecursive(stage, new Matrix4());
		gl.disable(gl.BLEND);
	}

	function renderRecursive(displayObjectContainer :  GLDisplayObjectContainer, parentMatrix : Matrix4)
	{
		for (displayObject in displayObjectContainer.children)
		{
			var matrix = renderDisplayObject(displayObject, parentMatrix);
			if (Std.is(displayObject, GLDisplayObjectContainer))
			{
				renderRecursive(cast displayObject, matrix);
			}
		}
	}

	function renderDisplayObject(displayObject : GLDisplayObject, parentMatrix : Matrix4)
	{
		var gl = GL.gl;

		displayObject.validateTransform();

		var result = new Matrix4();
		result.multiply(parentMatrix);
		result.multiply(displayObject.matrix);

		if (displayObject.skipDraw)
			return result;

		var texture;
		if (!textures.exists(displayObject.id))
		{
			texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			textures.set(displayObject.id, texture);
		}
		else
		{
			texture = textures.get(displayObject.id);
			gl.bindTexture(gl.TEXTURE_2D, texture);
		}

		if (displayObject.canvasIsInvalid)
		{
			gl.texImage2DCanvas(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, displayObject.canvas);
			displayObject.canvasIsInvalid = false;
		}

		gl.uniformMatrix4fv(objectMatrixUniform.location, false, result.buffer);
		gl.uniform2f(sizeUniform.location, displayObject.width, displayObject.height);
		gl.uniform1f(alphaUniform.location, displayObject.alpha);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

		return result;
	}
}
