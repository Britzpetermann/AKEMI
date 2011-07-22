import WebGLRenderingContext;

class GLUniformLocation
{
	public var location : WebGLUniformLocation;

	public function new(){}

	public inline function uniform1f(v : GLfloat) : Void
	{
		GL.gl.uniform1f(location, v);
	}

	public inline function uniform1fv(v : Array<Float>) : Void
	{
		GL.gl.uniform1fv(location, v);
	}

	public inline function uniform1i(v : GLint) : Void
	{
		GL.gl.uniform1i(location, v);
	}

	public inline function uniform1iv(v : Array<Int>) : Void
	{
		GL.gl.uniform1iv(location, v);
	}

	public inline function uniform2f(x : GLfloat, y : GLfloat) : Void
	{
		GL.gl.uniform2f(location, x, y);
	}

	public inline function uniform2fv(v : Array<Float>) : Void
	{
		GL.gl.uniform2fv(location, v);
	}

	public inline function uniform2i(x : GLint, y : GLint) : Void
	{
		GL.gl.uniform2i(location, x, y);
	}

	public inline function uniform2iv(v : Array<Int>) : Void
	{
		GL.gl.uniform2iv(location, v);
	}

	public inline function uniform3f(x : GLfloat, y : GLfloat, z : GLfloat) : Void
	{
		GL.gl.uniform3f(location, x, y, z);
	}

	public inline function uniform3fv(v : Array<Float>) : Void
	{
		GL.gl.uniform3fv(location, v);
	}

	public inline function uniform3i(x : GLint, y : GLint, z : GLint) : Void
	{
		GL.gl.uniform3i(location, x, y, z);
	}

	public inline function uniform3iv(v : Array<Int>) : Void
	{
		GL.gl.uniform3iv(location, v);
	}

	public inline function uniform4f(x : GLfloat, y : GLfloat, z : GLfloat, w : GLfloat) : Void
	{
		GL.gl.uniform4f(location, x, y, z, w);
	}

	public inline function uniform4fv(v : Array<Float>) : Void
	{
		GL.gl.uniform4fv(location, v);
	}

	public inline function uniform4i(x : GLint, y : GLint, z : GLint, w : GLint) : Void
	{
		GL.gl.uniform4i(location, x, y, z, w);
	}

	public inline function uniform4iv(v : Array<Int>) : Void
	{
		GL.gl.uniform4iv(location, v);
	}

	public inline function uniformMatrix2fv(?transpose : GLboolean = false, value : Float32Array) : Void
	{
		GL.gl.uniformMatrix2fv(location, transpose, value);
	}

	public inline function uniformMatrix3fv(?transpose : GLboolean = false, value : Float32Array) : Void
	{
		GL.gl.uniformMatrix3fv(location, transpose, value);
	}

	public inline function uniformMatrix4fv(?transpose : GLboolean = false, value : Float32Array) : Void
	{
		GL.gl.uniformMatrix4fv(location, transpose, value);
	}

	public inline function setMatrix3(matrix : Matrix3) : Void
	{
		GL.gl.uniformMatrix3fv(location, false, matrix.buffer);
	}

	public inline function setMatrix4(matrix : Matrix4) : Void
	{
		GL.gl.uniformMatrix4fv(location, false, matrix.buffer);
	}

	public inline function setVec3(vec : Vec3) : Void
	{
		GL.gl.uniform3f(location, vec.x, vec.y, vec.z);
	}

	public inline function setRGB(color : Color) : Void
	{
		GL.gl.uniform3f(location, color.r, color.g, color.b);
	}

	public inline function setRGBA(color : Color) : Void
	{
		GL.gl.uniform4f(location, color.r, color.g, color.b, color.a);
	}

	public inline function setTexture(texture : GLTexture, ?index : GLint = 0) : Void
	{
		GL.activeTexture(cast GL.TEXTURE0 + index);
		GL.bindTexture(GL.TEXTURE_2D, texture.texture);
		uniform1i(index);
	}
}
