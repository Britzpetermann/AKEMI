package sa.view.shader; class UnderWater { public static function create() {return "

	#ifdef GL_ES
		precision highp float;
	#endif

	#define NUM_RAYS 20

	uniform float elapsedTime;

	varying vec2 textureCoord;
	varying vec4 vertex;

	void main(void)
	{
		float value = 0.0;
		float num = float(NUM_RAYS);

		float sinT1 = sin(elapsedTime * 0.002) * 0.2;
		float sinT2 = sin(2.0 + elapsedTime * 0.0013) * 0.3;

		for(int i = 0; i < NUM_RAYS; i++)
		{
			float fi = float(i + 2) / num;
			float rad = float(i) * 0.2 + (1.0 + elapsedTime * 0.001) * 0.3;

			vec2 light = vec2(sin(fi * 13.3 + elapsedTime * 0.0002 + sin(fi * 13.3 + elapsedTime * 0.0005)) * 0.1 + 0.8, cos(fi * 18.0 + elapsedTime * 0.0001) * 0.1 + 1.2);
			vec2 lightDir = normalize(vec2(sin(fi * 0.9 * (1.0 + 0.9 * sin(elapsedTime * 0.0001 + 2.0)) + sin(elapsedTime * 0.00005 + 3.0) * 0.1 + 0.3) , cos(0.3 + fi * 0.8 + sin(1.0 + elapsedTime * 0.0003) * 0.1)));

			float lightAngle = dot(lightDir, normalize(light - vertex.xy));
			if (lightAngle > 0.0)
			{
				float dist = distance(light, vertex.xy);
				float xd1 = sin(fi * 30.0 + sinT1 + sinT2);
				float xd2 = sin(fi * 10.0 + sinT1 + sinT2 + 3.0);
				float radius = (xd1 + 1.0) * 600.0 + 100.0;
				value += clamp(pow(lightAngle, radius * dist * dist) * (0.4 + xd1 * 0.3) / pow(1.0 + dist, 9.5 + xd2 * 8.0), 0.0, 1.0);
			}
		}

		vec3 color = vec3(195.0 / 255.0, 164.0 / 255.0, 246.0 / 255.0);
		value = clamp(value * 0.4, 0.0, 0.8);
		gl_FragColor = vec4(color, 1.0) * vec4(value, value, value, 1.0);
	}

";}}
