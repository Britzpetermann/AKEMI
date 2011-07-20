package sa.view.shader;
@GLSL("

	attribute vec2 vertexPosition;
	attribute vec3 vertexNormal;

	uniform mat3 normalMatrix;
	uniform mat4 projectionMatrix;
	uniform mat4 viewWorldMatrix;

	varying vec3 vertex;
	varying vec3 normal;

	void main(void)
	{
		vec4 vertexPositionTransformed = viewWorldMatrix * vec4(vertexPosition, 0.0, 1.0);

		vertex = vertexPositionTransformed.xyz;
		normal = normalMatrix * vertexNormal;

		gl_Position = projectionMatrix * vertexPositionTransformed;
	}

") class FloorVertex {}