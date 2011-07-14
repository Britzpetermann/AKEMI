package sa.view.shader; class HitareaVertex { public static function create() {return "

	attribute vec2 vertexPosition;
	
	uniform mat4 projectionMatrix;
	uniform mat4 viewWorldMatrix;
				
	void main(void)
	{
	    gl_Position = projectionMatrix * viewWorldMatrix * vec4(vertexPosition, 0.0, 1.0);
	}

";}}