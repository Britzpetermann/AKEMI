package sa.view.shader;
@GLSL("

	#ifdef GL_ES
		precision highp float;
	#endif

	uniform vec3 lightPos;

	varying vec3 vertex;
	varying vec3 normal;

	void main(void)
	{
		vec3 lightDir = normalize(lightPos - vertex);
		float diffuse = dot(normalize(normal), lightDir);
		gl_FragColor = vec4(vec3(1.0, 0.0, 0.0) * diffuse, 1.0);
	}

") class FloorFragment {}