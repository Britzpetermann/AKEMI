package sa.view.shader;
@GLSL("

	attribute vec2 vertexPosition;

	uniform mat4 projectionMatrix;
	uniform mat4 viewWorldMatrix;

	varying vec2 textureCoord;
	varying vec4 vertex;

	void main(void)
	{
		gl_Position = projectionMatrix * viewWorldMatrix * vec4(vertexPosition, 0.0, 1.0);
		vertex = vec4(vertexPosition, 0.0, 1.0);
		textureCoord = (vertexPosition.xy + 1.0) * 0.5;
	}

") class PassVertex2 {}