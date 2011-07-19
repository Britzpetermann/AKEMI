package sa.view;
import js.Lib;

class RocksRenderer
{
	public var textureRegistry : GLTextureRegistry;

	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var gl : WebGLRenderingContext;

	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var textureUniform : GLUniformLocation;
	var projectionMatrixUniform : GLUniformLocation;
	var viewWorldMatrixUniform : GLUniformLocation;

	var first : Bool;
	var lastFrameTime : Float;
	var flighters : Array<Flighter>;

	var lastTexture : WebGLTexture;

	public function new()
	{
		first = false;
		flighters = new Array();

		for (i in 0 ... 30)
		{
			var flighter = new Flighter();
			flighter.position.x = 3 + Math.random() * 30 - 20;
			flighter.position.y = -2 -Math.random() * 3;
			flighter.position.z = -25 + flighter.rnd1 * 6;

			flighter.scale = 0.1 + (flighter.rnd1) * 0.2;

			flighters.push(flighter);
		}
	}

	public function init(gl : WebGLRenderingContext)
	{
		this.gl = gl;

		shaderProgram = GL.createProgram(sa.view.shader.PassVertex2, sa.view.shader.Texture);

		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
		gl.enableVertexAttribArray(vertexPositionAttribute);

		vertexBuffer = GL.createArrayBuffer(new Int8Array([
			1, -1,
			-1,  1,
			-1, -1,
			1, -1,
			1,  1,
			-1,  1,
		]));

		textureUniform = GL.getUniformLocation("texture");
		projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
		viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
	}

	public function render(width : Float, height : Float)
	{
		var time = Date.now().getTime();
		if (!first)
		{
			first = true;
			lastFrameTime = time;
		}
		var dt = time - lastFrameTime;
		lastFrameTime = time;

		gl.useProgram(shaderProgram);
		gl.viewport(0, 0, width, height);

		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.BYTE, false, 0, 0);
		gl.uniformMatrix4fv(projectionMatrixUniform.location, false, projectionMatrix.buffer);

		gl.activeTexture(gl.TEXTURE0);
		gl.uniform1i(textureUniform.location, 0);

		showTexture(TextureId.ROCK_RIGHT, 10, 0, -25, 25, 25);
		showTexture(TextureId.STONES_RIGHT, 3, -5, -23, 4.5, 4.5, 0, 0, -45);

		flighters.sort(f);
		for (flighter in flighters)
		{
			flighter.position.x += 0.001 * dt;
			flighter.position.z += 0.0005 * dt;
			if (flighter.position.x > 20)
			{
				flighter.position.x = -10;
				flighter.position.z = -25 + flighter.rnd1 * 6;
			}
			showTexture(TextureId.FLIGHTER, flighter.position.x, flighter.position.y, flighter.position.z, flighter.scale, flighter.scale, 0, 0, 0);
		}

		showTexture(TextureId.ROCK_LEFT, -10, 0, -16, 16, 16);
		showTexture(TextureId.STONES_LEFT, -1, -4, -14, 4.5, 4.5, 0, 0, -45);
		showTexture(TextureId.STRIPE2, -2, -2, -12, 3 / 4, 3, 0, 0, 0);
		showTexture(TextureId.STRIPE1, -1.7, -2, -13, 3 / 4, 3, 0, 0, 0);

		gl.disable(gl.BLEND);
	}

	function f(f1 : Flighter, f2 : Flighter)
	{
		if (f1.position.z > f2.position.z)
			return 1
		else if (f1.position.z < f2.position.z)
			return -1
		else
			return 0;
	}

	function showTexture(textureId : TextureId, x : Float, y : Float, z : Float, sx : Float, sy : Float, ?ry : Float = 0, ?rz : Float = 0, ?rx : Float = 0)
	{
		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendScale(1,-1,1);
		viewWorldMatrix.appendTranslation(x, y, z);
		viewWorldMatrix.appendScale(sx, sy, 1);
		if (rx != 0 || ry != 0 || rz != 0)
			viewWorldMatrix.appendEulerRotation(ry, rz, rx);

		gl.uniformMatrix4fv(viewWorldMatrixUniform.location, false, viewWorldMatrix.buffer);

		var texture = textureRegistry.get(textureId).texture;
		if (texture != lastTexture)
		{
			gl.bindTexture(gl.TEXTURE_2D, texture);
			lastTexture = texture;
		}

		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
}

class Flighter
{
	public var position : Vec3;
	public var scale : Float;
	public var rnd1 : Float;
	public var rnd2 : Float;

	public function new()
	{
		rnd1 = Math.random();
		rnd2 = Math.random();
		position = new Vec3();
	}
}
