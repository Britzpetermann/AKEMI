package sa.view.shader; class Color { public static function create() {return "

	#ifdef GL_ES
		precision highp float;
	#endif
	
	varying vec4 color;
	
	void main(void)
	{
   		gl_FragColor = color;
	}

";}}