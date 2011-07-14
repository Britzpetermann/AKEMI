class Vec2
{
	public var x : Float;
	public var y : Float;

	public function new(?x : Float, ?y : Float)
	{
		this.x = x;
		this.y = y;
	}

	public function set(x : Float, y : Float)
	{
		this.x = x;
		this.y = y;
	}

	public function scale(factor : Float)
	{
		this.x *= factor;
		this.y *= factor;
	}

	public function multiply(x : Float, y : Float)
	{
		this.x *= x;
		this.y *= y;
	}

	public function subtract(x : Float, y : Float)
	{
		this.x -= x;
		this.y -= y;
	}

	public function normalize()
	{
		var invLength = 1 / Math.sqrt(x * x + y * y);
		x *= invLength;
		y *= invLength;
	}

	public function transform(matrix : Matrix4)
	{
		var x1 = this.x, y1 = this.y, z1 = 0, w1 = 1;
		var mat = matrix.buffer;

		this.x = mat[0]*x1 + mat[4]*y1 + mat[8]*z1 + mat[12] * w1;
		this.y = mat[1]*x1 + mat[5]*y1 + mat[9]*z1 + mat[13] * w1;
	}

	public function clone() : Vec2
	{
		return new Vec2(x, y);
	}
}
