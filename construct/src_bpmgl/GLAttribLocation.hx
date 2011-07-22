import WebGLRenderingContext;

class GLAttribLocation
{
	public var location : Float;
	public var size : GLint;
	public var type : GLenum;
	public var buffer : WebGLBuffer;
	public var currentLength : Float;

	public function new(){}

	public function updateBuffer(arrayBuffer : ArrayBuffer)
	{
		if (buffer != null)
			GL.deleteBuffer(buffer);

		currentLength = arrayBuffer.byteLength;
		buffer = GL.createArrayBuffer(arrayBuffer);
	}

	public function vertexAttribPointer()
	{
		GL.bindBuffer(GL.ARRAY_BUFFER, buffer);
		GL.enableVertexAttribArray(location);
		GL.vertexAttribPointer(location, size, type, false, 0, 0);
	}

	public function drawArrays(mode : GLenum, ?first : GLint = 0, ?count : GLsizei = null)
	{
		if (count == null)
		{
			count = currentLength / size;
			if (type == GL.FLOAT)
				count /= 4;
		}
		GL.drawArrays(mode, first, count);
	}
}
