class Kuler implements ArrayAccess<Color>
{
	public function new()
	{
		this[0] = new Color(Math.random(), Math.random(), Math.random());
		this[1] = new Color(Math.random(), Math.random(), Math.random());
		this[2] = new Color(Math.random(), Math.random(), Math.random());
		this[3] = new Color(Math.random(), Math.random(), Math.random());
		this[4] = new Color(Math.random(), Math.random(), Math.random());
	}

	public function scaleRGB(factor : Float)
	{
		this[0].scaleRGB(factor);
		this[1].scaleRGB(factor);
		this[2].scaleRGB(factor);
		this[3].scaleRGB(factor);
		this[4].scaleRGB(factor);
	}
}
