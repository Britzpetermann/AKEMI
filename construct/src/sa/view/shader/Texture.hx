package sa.view.shader; class Texture { public static function create() {return "

	#ifdef GL_ES
		precision highp float;
	#endif
	
    uniform sampler2D texture;
    
	varying vec2 textureCoord;
	    	
	void main(void)
	{
        vec4 color = texture2D(texture, textureCoord);
        gl_FragColor = color;
	}

";}}