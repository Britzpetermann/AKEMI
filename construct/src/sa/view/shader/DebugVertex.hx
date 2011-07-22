package sa.view.shader;
@GLSL("

	attribute vec3 vertexPosition;
	attribute vec4 vertexColor;

	uniform mat4 projectionMatrix;
	uniform mat4 viewWorldMatrix;

	varying vec4 color;

	void main(void)
	{
		color = vertexColor;
		gl_Position = projectionMatrix * viewWorldMatrix * vec4(vertexPosition, 1.0);
	}

") class DebugVertex {}