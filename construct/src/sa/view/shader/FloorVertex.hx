package sa.view.shader;
@GLSL("

	attribute vec3 vertexPosition;
	attribute vec3 vertexNormal;

	uniform mat3 normalMatrix;
	uniform mat4 projectionMatrix;
	uniform mat4 viewWorldMatrix;
	uniform mat4 cameraMatrix;

	varying vec3 vertex;
	varying vec3 normal;
	varying vec3 darkSpots[3];

	void main(void)
	{
		vec4 vertexPositionTransformed = viewWorldMatrix * vec4(vertexPosition, 1.0);
		vertex = vertexPositionTransformed.xyz;
		normal = normalMatrix * vertexNormal;
		gl_Position = projectionMatrix * vertexPositionTransformed;
		gl_PointSize = 2.0;

		darkSpots[0] = (cameraMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
		darkSpots[1] = (cameraMatrix * vec4(6.0, 0.0, 0.0, 1.0)).xyz;
		darkSpots[2] = (cameraMatrix * vec4(3.0, 3.0, 0.0, 1.0)).xyz;
	}

") class FloorVertex {}