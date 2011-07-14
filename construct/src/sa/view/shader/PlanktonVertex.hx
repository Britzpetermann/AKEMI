package sa.view.shader; class PlanktonVertex { public static function create() {return "

	attribute vec3 vertexPosition;
	
	uniform float elapsedTime;
	uniform float elapsedClickTime;
	uniform float peak;
	uniform float peakIncrement;

	uniform vec3 specularColor;
	uniform vec3 clickPos;
	uniform vec3 attractorPosition;
	
	uniform mat4 perspectiveMatrix;
	uniform mat4 objectMatrix;
	uniform mat4 rotationMatrix;
	uniform mat4 cameraMatrix;
	
	varying vec4 color;
	
	void main(void)
	{
		vec4 worldPosition = objectMatrix * vec4(vertexPosition, 1.0);
		gl_PointSize = 1.0;
		
		float radiusSquared = pow(2.0, 2.0);
		vec3 spherePosition = attractorPosition;
		vec3 rayDir = normalize((cameraMatrix * vec4(0.0, 0.0, 10.0, 1.0)).xyz - worldPosition.xyz);
		vec3 sphereIntersectionToCenter = spherePosition - worldPosition.xyz;
		
		float sphereClosestApproach = dot(sphereIntersectionToCenter, rayDir);
		
		float value = 1.0;
		if (sphereClosestApproach > 0.0)
		{
			float l = length(sphereIntersectionToCenter);
			float sphereHalfCord2 = (radiusSquared - (l * l)) + (sphereClosestApproach * sphereClosestApproach);

			if (sphereHalfCord2 >= 0.0)
			{			
				float dist = sphereClosestApproach - 1.0 / sphereHalfCord2;
				value = 0.4;
				worldPosition.z *= 1.0 + dist / 20.0;
			}
		}
		//value = clamp(value, 0.0, 1.0);
		
		float diffuse;
		float side;
		vec3 normal;
		if (vertexPosition.z == 0.0)
		{
			side = 0.0;
			diffuse = 0.1;
			normal = vec3(0.0, 1.0, 0.0);
		}
		else
		{
			side = 0.3;
			diffuse = 1.0;
			normal = vec3(0.0, -1.0, 0.0);
		}
		
		value += (worldPosition.z + 20.0) * 0.017;
		value = clamp(value, 0.0, 1.0);
			
		vec3 normalRot = normalize((rotationMatrix * vec4(normal, 1.0)).xyz);
		vec3 lightDir = normalize(attractorPosition.xyz - worldPosition.xyz);
		
		diffuse = clamp(dot(normalRot, lightDir) * 1.0, 0.1, 1.0);
		
		float sinValue = clamp((sin(worldPosition.z * worldPosition.x * 0.03 + elapsedTime * 0.001 + peakIncrement) + 1.0) * 0.3, 0.0, 1.0);
		vec3 colorBase = vec3(111.0 / 255.0, 78.0 / 255.0, 129.0 / 255.0);
		vec3 colorSound = vec3(107.0 / 255.0, 186.0 / 255.0, 183.0 / 255.0);
	    gl_Position = perspectiveMatrix * worldPosition;
		color = vec4(
			colorBase * value * 0.2 * (0.5 + peak) +   
			colorSound * sinValue * 0.2 * value * (0.5 + peak)
			, 1.0);
	}
";}}