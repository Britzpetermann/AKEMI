package sa.view.shader;
@GLSL("

	#ifdef GL_ES
		precision highp float;
	#endif

	uniform vec3 lightPositions[5];
	uniform vec3 lightDiffuseColors[5];
	uniform vec3 lightSpecularColors[5];

	varying vec3 vertex;
	varying vec3 normal;
	void main(void)
	{
		vec3 final = vec3(0.0, 0.0, 0.0);
		for(int lightIndex = 0; lightIndex < 2; lightIndex++)
		{
			vec3 light = lightPositions[lightIndex];
			vec3 lightDir = normalize(light - vertex);
			float diffuse = dot(normalize(normal), lightDir);

			vec3 viewDir = normalize(-vertex.xyz);
			vec3 reflectionDirection = reflect(lightDir, normal);

			float specular = pow(max(dot(-reflectionDirection, viewDir), 0.0), 30.0);

			final += lightDiffuseColors[lightIndex] * 0.2 + lightDiffuseColors[lightIndex] * diffuse + lightSpecularColors[lightIndex] * specular;
		}

		gl_FragColor = vec4(final, 1.0);
	}

") class FloorFragment {}