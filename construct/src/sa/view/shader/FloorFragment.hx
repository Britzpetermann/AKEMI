package sa.view.shader;
@GLSL("

	#ifdef GL_ES
		precision highp float;
	#endif

	uniform mat4 viewWorldMatrix;
	uniform int darkSpotCount;

	uniform vec3 lightPositions[5];
	uniform vec3 lightDiffuseColors[5];
	uniform vec3 lightSpecularColors[5];
	uniform vec3 darkSpots[100];

	varying vec3 vertex;
	varying vec3 normal;

	void main(void)
	{
		vec3 finalColor;

		vec3 N = normalize(normal);
		vec3 E = normalize(-vertex.xyz);

		float DR = 2.4;

		float darkSpotValue;
		for(int darkSpotIndex = 0; darkSpotIndex < 100; darkSpotIndex++)
		{
			if (darkSpotIndex == darkSpotCount)
				break;

			vec3 darkSpot = darkSpots[darkSpotIndex];
			float distToDarkSpot = length(darkSpot - vertex.xyz);
			darkSpotValue += clamp(pow(distToDarkSpot, 0.4), 0.0, DR) / DR;
		}

		darkSpotValue = pow(darkSpotValue / float(darkSpotCount), 2.0);

		float ambient = 0.3 * darkSpotValue;

		for(int lightIndex = 0; lightIndex < 3; lightIndex++)
		{

			vec3 light = lightPositions[lightIndex];
			vec3 L = normalize(light - vertex);

			float D =  pow(length(light - vertex), 0.4) * 0.3;

			float diffuse = clamp(dot(N, L), 0.0, 1.0) / D;

			vec3 reflectionDirection = normalize(-reflect(L, N));
			float specular = pow(max(clamp(dot(reflectionDirection, E), 0.0, 1.0), 0.0), 50.0) * darkSpotValue;

			//specular = 0.0;
			//diffuse = 0.0;

			finalColor +=
				lightDiffuseColors[lightIndex] * ambient +
				lightDiffuseColors[lightIndex] * diffuse * 0.5 +
				lightSpecularColors[lightIndex] * specular * 0.5;
		}

		gl_FragColor = vec4(finalColor, 1.0);
	}

") class FloorFragment {}