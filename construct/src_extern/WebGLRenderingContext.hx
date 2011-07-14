typedef GLboolean = Bool;
typedef GLfloat = Float;
typedef GLint = Float;
typedef GLuint = Float;
typedef GLsizei = Float;
typedef GLclampf = Float;
typedef GLenum = Int;
typedef DOMString = String;
typedef GLbitfield = Int;
typedef GLsizeiptr = Int;

extern class WebGLRenderingContext
{
	var ARRAY_BUFFER : GLenum;
	var BLEND : GLenum;
	var BYTE : GLenum;
	var COLOR_BUFFER_BIT : GLenum;
	var COLOR_ATTACHMENT0 : GLenum;
	var COMPILE_STATUS : GLenum;
	var DEPTH_ATTACHMENT : GLenum;
	var DEPTH_BUFFER_BIT : GLenum;
	var DEPTH_COMPONENT16 : GLenum;
	var DEPTH_TEST : GLenum;
	var DST_ALPHA : GLenum;
	var DST_COLOR : GLenum;
	var FLOAT : GLenum;
	var FRAGMENT_SHADER : GLenum;
	var FRAMEBUFFER : GLenum;
	var LINEAR : GLenum;
	var LINES : GLenum;
	var LINE_LOOP : GLenum;
	var LINE_STRIP : GLenum;
	var LINK_STATUS : GLenum;
	var NEAREST : GLenum;
	var ONE : GLenum;
	var ONE_MINUS_DST_ALPHA : GLenum;
	var ONE_MINUS_SRC_ALPHA : GLenum;
	var POINTS : GLenum;
	var RENDERBUFFER : GLenum;
	var RGBA : GLenum;
	var SRC_ALPHA : GLenum;
	var SRC_COLOR : GLenum;
	var STATIC_DRAW : GLenum;
	var TEXTURE0 : GLenum;
	var TEXTURE1 : GLenum;
	var TEXTURE_2D : GLenum;
	var TEXTURE_MAG_FILTER : GLenum;
	var TEXTURE_MIN_FILTER : GLenum;
	var TRIANGLES : GLenum;
	var TRIANGLE_STRIP : GLenum;
	var TRIANGLE_FAN : GLenum;
	var UNSIGNED_BYTE : GLenum;
	var VERTEX_SHADER : GLenum;
	var ZERO : GLenum;

	var NEAREST_MIPMAP_NEAREST : GLenum;
	var NEAREST_MIPMAP_LINEAR : GLenum;
	var LINEAR_MIPMAP_NEAREST : GLenum;
	var LINEAR_MIPMAP_LINEAR : GLenum;

	function activeTexture(texture : GLenum) : Void;
	function attachShader(program : WebGLProgram, shader : WebGLShader) : Void;

	function bindBuffer(target : GLenum, buffer : WebGLBuffer) : Void;
	function bindFramebuffer(target : GLenum, framebuffer : WebGLFramebuffer) : Void;
	function bindRenderbuffer(target : GLenum, renderbuffer : WebGLRenderbuffer) : Void;
	function bindTexture(target:GLenum, texture:WebGLTexture) : Void;
	function blendFunc(sfactor : GLenum, dfactor : GLenum) : Void;
	function bufferData(target : GLenum, data : ArrayBuffer , usage : GLenum ) : Void;

	function clear(mask : GLbitfield) : Void;
	function clearColor(red : GLclampf, green : GLclampf, blue : GLclampf, alpha : GLclampf) : Void;
	function clearDepth(depth : GLclampf) : Void;
	function compileShader(shader : WebGLShader) : Void;
	function createBuffer() : WebGLBuffer;
	function createFramebuffer() : WebGLFramebuffer;
	function createProgram() : WebGLProgram;
	function createRenderbuffer() : WebGLRenderbuffer;
	function createTexture() : WebGLTexture;
	function createShader(type : GLenum) : WebGLShader;

	function disable(cap : GLenum):Void;
	function drawArrays(mode : GLenum, first : GLint, count : GLsizei) : Void;

	function enable(cap : GLenum):Void;
	function enableVertexAttribArray(index : GLuint) : Void;

	function framebufferRenderbuffer(target : GLenum, attachment : GLenum, renderbuffertarget : GLenum, renderbuffer : WebGLRenderbuffer) : Void;
	function framebufferTexture2D(target : GLenum, attachment : GLenum, textarget : GLenum, texture : WebGLTexture, level : GLint) : Void;

	function generateMipmap(target : GLenum) : Void;
	function getAttribLocation(program : WebGLProgram, name : DOMString) : GLint;
	function getShaderInfoLog(shader : WebGLShader) : DOMString;
	function getShaderParameter(shader : WebGLShader, pname : GLenum) : Dynamic;
	function getProgramParameter(program : WebGLProgram, pname : GLenum) : Dynamic;
	function linkProgram(program : WebGLProgram) : Void;

	function renderbufferStorage(target : GLenum, internalformat : GLenum, width : GLsizei, height : GLsizei) : Void;
	function shaderSource(shader : WebGLShader, source : DOMString) : Void;

	inline function texImage2DArrayBufferView(target : GLenum, level : GLint, internalformat : GLenum, width : GLsizei, height : GLsizei, border : GLint, format : GLenum, type : GLenum, pixels : ArrayBufferView) : Void
	{
		untyped this.texImage2D(target, level, internalformat, width, height, border, format, type, pixels);
	}

	inline function texImage2DImageData(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, pixels : ImageData) : Void
	{
		untyped this.texImage2D(target, level, internalformat, format, type, pixels);
	}

	inline function texImage2DImage(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, image : Image) : Void
	{
		untyped this.texImage2D(target, level, internalformat, format, type, image);
	}

	inline function texImage2DCanvas(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, canvas : Canvas) : Void
	{
		untyped this.texImage2D(target, level, internalformat, format, type, canvas);
	}

	inline function texImage2DVideo(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, video : Video) : Void
	{
		untyped this.texImage2D(target, level, internalformat, format, type, video);
	}

	function texParameteri(target : GLenum, pname : GLenum, param : GLint) : Void;

	function useProgram(program : WebGLProgram) : Void;

	function vertexAttribPointer(indx : GLuint, size : GLint, type:GLenum, normalized : GLboolean, stride : GLsizei, offset : GLsizeiptr) : Void;

	function viewport(x : GLint, y : GLint, width : GLsizei, height : GLsizei) : Void;

	public function getActiveUniform(program:GLuint, index:GLuint):WebGLActiveInfo;
	public function getUniformLocation(program:WebGLProgram, name:String):WebGLUniformLocation;
	public function uniform1f(location:WebGLUniformLocation, x:GLfloat):Void;
	public function uniform1fv(location:WebGLUniformLocation, v:Array<Float>):Void;
	public function uniform1i(location:WebGLUniformLocation, x:GLint):Void;
	public function uniform1iv(location:WebGLUniformLocation, v:Array<Int>):Void;
	public function uniform2f(location:WebGLUniformLocation, x:GLfloat, y:GLfloat):Void;
	public function uniform2fv(location:WebGLUniformLocation, v:Array<Float>):Void;
	public function uniform2i(location:WebGLUniformLocation, x:GLint, y:GLint):Void;
	public function uniform2iv(location:WebGLUniformLocation, v:Array<Int>):Void;
	public function uniform3f(location:WebGLUniformLocation, x:GLfloat, y:GLfloat, z:GLfloat):Void;
	public function uniform3fv(location:WebGLUniformLocation, v:Array<Float>):Void;
	public function uniform3i(location:WebGLUniformLocation, x:GLint, y:GLint, z:GLint):Void;
	public function uniform3iv(location:WebGLUniformLocation, v:Array<Int>):Void;
	public function uniform4f(location:WebGLUniformLocation, x:GLfloat, y:GLfloat, z:GLfloat, w:GLfloat):Void;
	public function uniform4fv(location:WebGLUniformLocation, v:Array<Float>):Void;
	public function uniform4i(location:WebGLUniformLocation, x:GLint, y:GLint, z:GLint, w:GLint):Void;
	public function uniform4iv(location:WebGLUniformLocation, v:Array<Int>):Void;
	public function uniformMatrix2fv(location:WebGLUniformLocation, transpose:GLboolean, value:Float32Array):Void;
	public function uniformMatrix3fv(location:WebGLUniformLocation, transpose:GLboolean, value:Float32Array):Void;
	public function uniformMatrix4fv(location:WebGLUniformLocation, transpose:GLboolean, value:Float32Array):Void;
	public function getUniform(program:WebGLProgram, location:WebGLUniformLocation):Dynamic;
}
