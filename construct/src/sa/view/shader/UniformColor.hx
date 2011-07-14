package sa.view.shader; class UniformColor { public static function create() {return "

	#ifdef GL_ES
		precision highp float;
	#endif

	uniform vec4 color;

	void main(void)
	{
		gl_FragColor = color;
	}

";}}
