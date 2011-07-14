class Color
{
	public var r : Float;
	public var g : Float;
	public var b : Float;
	public var a : Float;

	public function new(r : Float = 1.0, g : Float = 0.0, b : Float = 1.0, a : Float = 1.0)
	{
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	public function fromHex(hex : Int)
	{
		r = ((hex >> 16) & 0xff) / 0xff;
		g = ((hex >> 8) & 0xff) / 0xff;
		b = (hex & 0xff) / 0xff;
		a = 1.0;

		return this;
	}

	public function scaleRGB(factor : Float)
	{
		r *= factor;
		g *= factor;
		b *= factor;
	}

	public function mixFrom(color1 : Color, color2 : Color, color1Mix : Float)
	{
		if (color1Mix < 0)
			color1Mix = 0;

		if (color1Mix > 1)
			color1Mix = 1;

		var color2Mix = 1 - color1Mix;

		r = color1.r * color1Mix + color2.r * color2Mix;
		g = color1.g * color1Mix + color2.g * color2Mix;
		b = color1.b * color1Mix + color2.b * color2Mix;
	}

	public function toContextRGB()
	{
		return "rgb(" + r * 255 + "," + g * 255 + "," + b * 255 + ")";
	}

	public function toContextRGBA()
	{
		return "rgba(" + Std.int(r * 255) + "," + Std.int(g * 255) + "," + Std.int(b * 255) + "," + a + ")";
	}

	public function toString()
	{
		return "Color: " + r + "," + g + "," + b + "," + a;
	}
}
