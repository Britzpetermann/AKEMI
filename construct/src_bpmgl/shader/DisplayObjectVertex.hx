package shader;
@GLSL("

	attribute vec2 vertexPosition;

	uniform mat4 projectionMatrix;
	uniform mat4 objectMatrix;
	uniform vec2 size;

	varying vec2 textureCoord;

	void main(void)
	{
		gl_Position = projectionMatrix * objectMatrix * (vec4(size, 1.0, 1.0) * vec4(vertexPosition, 0.0, 1.0));
		textureCoord = vertexPosition.xy;
	}

") class DisplayObjectVertex {}