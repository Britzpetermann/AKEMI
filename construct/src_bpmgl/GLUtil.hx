import haxe.rtti.Meta;

class GLUtil
{
	public static function initGL(canvas : Canvas, antialias : Bool) : WebGLRenderingContext
	{
		var gl = canvas.getContext("experimental-webgl", {antialias : antialias});
		if (gl == null)
		{
			throw "Could not initialise WebGL.";
		}
		return gl;
	}

	public static function createProgram(gl : WebGLRenderingContext, vertexSourceClass : Class<Dynamic>, fragmentSourceClass : Class<Dynamic>) : WebGLProgram
	{
		var shaderProgram = gl.createProgram();

		var vs = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vs, createGLSLFromClass(vertexSourceClass));
		gl.compileShader(vs);
		if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS))
			throw gl.getShaderInfoLog(vs);

		var fs = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fs, createGLSLFromClass(fragmentSourceClass));
		gl.compileShader(fs);
		if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS))
			throw gl.getShaderInfoLog(fs);

		gl.attachShader(shaderProgram, vs);
		gl.attachShader(shaderProgram, fs);
		gl.linkProgram(shaderProgram);

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
			throw "Could not link shader!";

		return shaderProgram;
	}

	public static function createGLSLFromClass(shaderClass : Class<Dynamic>)
	{
		var metaDatas = Meta.getType(shaderClass);
		var glsl : Array<String> = Reflect.field(metaDatas, "GLSL");
		if (glsl.length != 1)
			throw "Missing GLSL metadata in shader class: " + shaderClass;
		return glsl[0];
	}

	public static function createInt8VertexBuffer(gl : WebGLRenderingContext, vertexes : Array<Int>) : WebGLBuffer
	{
		var vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(vertexes), gl.STATIC_DRAW);
		return vertexBuffer;
	}

	public static function getUniformLocation(gl : WebGLRenderingContext, shaderProgram : WebGLProgram, name : String)
	{
		var result = gl.getUniformLocation(shaderProgram, name);
		if (result == null)
			trace ("Could not find " + name + " in shader");
		return result;
	}

	public static function loadFonts(fonts : Array<String>, complete : Void->Void)
	{
		untyped
		{
			WebFontConfig = {
					google: { families: fonts },
					active: function() {
						complete();
					},
				};

			var wf = document.createElement('script');
			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		}
	}
}
