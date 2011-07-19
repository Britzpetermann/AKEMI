package sa.view.shader;
@GLSL("

	attribute vec2 vertexPosition;

	uniform mat4 perspectiveMatrix;

	varying vec2 textureCoord;
	varying vec4 vertex;

	void main(void)
	{
		gl_Position = perspectiveMatrix * vec4(vertexPosition, 0.0, 1.0);
		vertex = vec4(vertexPosition, 0.0, 1.0);
		textureCoord = (vertexPosition.xy + 1.0) * 0.5;
	}

") class PassVertex {}