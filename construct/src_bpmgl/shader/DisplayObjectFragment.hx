package shader;
@GLSL("

	#ifdef GL_ES
		precision highp float;
	#endif

	uniform sampler2D texture;
	uniform float alpha;

	varying vec2 textureCoord;

	void main(void)
	{
		vec4 color = texture2D(texture, textureCoord);
		gl_FragColor = color * vec4(1.0, 1.0, 1.0, alpha);
	}

") class DisplayObjectFragment {}