package sa.view.shader; class StrangeAttractorVertex { public static function create() {return "

	attribute vec3 vertexPosition;
	attribute vec3 icolor;

	uniform float elapsedTime;
	uniform float elapsedClickTime;
	uniform float peak;

	uniform vec3 specularColor1;
	uniform vec3 specularColor2;
	uniform vec3 clickColor;
	uniform vec3 clickPos;

	uniform mat4 perspectiveMatrix;
	uniform mat4 objectMatrix;
	uniform mat4 cameraMatrix;
	uniform mat4 shadowMatrix;

	varying vec4 color;

	void main(void)
	{
		float v = 0.0;
		float maxTime = 1300.0;
		if (elapsedClickTime > 0.0 && elapsedClickTime < maxTime)
		{
			vec3 distanceToClick = clickPos - vertexPosition;
			float radWidth = 0.5;
			float radMaxSize = 10.0;
			float radius = elapsedClickTime / maxTime * radMaxSize;
			float dist1 = (radius - radWidth - length(distanceToClick)) * 0.1;
			float dist2 = (radius - length(distanceToClick)) * 0.1;
			v = clamp(dist2 - dist2 / dist1, 0.0, 1.0);
		}

		float v2 = clamp(pow(1.0 + peak, 2.0) * 3.0 - 4.0, 0.0, 4.0);
		vec4 vertexPositionWobble = vec4(vertexPosition, 1.0);
		vertexPositionWobble.x += sin(vertexPositionWobble.y * 2.0 + 1.0) * sin(vertexPositionWobble.y * 1.0 + elapsedTime * 0.01) * 0.02 * v2;
		vertexPositionWobble.y += sin(vertexPositionWobble.x * 1.0 + 2.0) * sin(vertexPositionWobble.x * 2.0 + elapsedTime * 0.005) * 0.04 * v2;
		vertexPositionWobble.z += sin(vertexPositionWobble.y * 1.0 + 3.0) * sin(vertexPositionWobble.y * 3.0 + elapsedTime * 0.01) * 0.04 * v2;

		vec4 positionRot = objectMatrix * vertexPositionWobble;

		gl_Position = perspectiveMatrix * positionRot;
		gl_PointSize = clamp(3.0 - gl_Position.z / 7.0, 0.1, 1.5);

		vec3 normalRot = normalize(positionRot.xyz - (objectMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz);
		vec3 lightDir = normalize((cameraMatrix * vec4(10.0, 10.0, 0.0, 1.0)).xyz - positionRot.xyz);

		float diffuse = dot(normalRot, lightDir) * 0.5;

		vec3 viewDir = normalize((cameraMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz - positionRot.xyz);

		vec3 h1 = normalize(lightDir + viewDir);
		float specular1 = pow(dot(normalRot, h1), 60.0);
		if (!(specular1 < 0.0 || specular1 > 0.0))
			specular1 = 0.0;

		vec3 h2 = normalize(-lightDir + viewDir);
		float specular2 = pow(dot(normalRot, h2), 40.0);
		if (!(specular2 < 0.0 || specular2 > 0.0))
			specular2 = 0.0;

		vec3 h3 = normalize(-lightDir + vertexPositionWobble.xyz);
		float specular3 = pow(dot(normalRot, h3), 30.0);
		if (!(specular3 < 0.0 || specular3 > 0.0))
			specular3 = 0.0;

		vec4 shadowPosition = shadowMatrix * positionRot;
		float shadow = (sin(shadowPosition.x * 1.0 + elapsedTime * 0.001 + sin(shadowPosition.y * 1.0 + elapsedTime * 0.002))) * 0.2 + 1.0;
		float shadow2 = sin(cos(shadowPosition.z) * sin(shadowPosition.y * 5.0 + elapsedTime * 0.0015) + shadowPosition.z * 10.0 + 3.0 + elapsedTime * 0.006) * sin((shadowMatrix * positionRot).z * 3.0 + 3.0 + elapsedTime * 0.002) * 0.2 + 1.0;

		color = vec4(
			icolor * 0.1 * shadow * shadow2 +
			icolor * clamp(diffuse, 0.0, 1.0) * shadow * shadow2 +
			specularColor1 * clamp(specular1 * 0.4, 0.0, 1.0) * shadow * shadow2 +
			specularColor2 * clamp(specular2 * 0.8, 0.0, 1.0) * shadow * shadow2 +
			specularColor1 * clamp(specular3 * 0.4, 0.0, 1.0) * shadow * shadow2 +
			clickColor * v * 0.5
			, clamp(diffuse * 2.0, 0.5, 1.0));
	}
";}}
