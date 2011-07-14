typedef Vec3Components = {x : Float, y : Float, z : Float};

class Vec3
{
	public var x : Float;
	public var y : Float;
	public var z : Float;

	public function new(?x : Float, ?y : Float, ?z : Float)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public function scale(factor : Float)
	{
		this.x *= factor;
		this.y *= factor;
		this.z *= factor;
	}

	public function multiply(x : Float, y : Float, z : Float)
	{
		this.x *= x;
		this.y *= y;
		this.z *= z;
	}

	public function subtract(x : Float, y : Float, z : Float)
	{
		this.x -= x;
		this.y -= y;
		this.z -= z;

		return this;
	}

	public function normalize()
	{
		var length = Math.sqrt(x * x + y * y + z * z);
		x /= length;
		y /= length;
		z /= length;
	}

	public function cross(vec : Vec3)
	{
		var x = this.y * vec.z - this.z * vec.y;
		var y = this.z * vec.x - this.x * vec.z;
		var z = this.x * vec.y - this.y * vec.x;
		return new Vec3(x, y, z);
	}

	public function dot(vec : Vec3)
	{
		return x * vec.x + y * vec.y + z * vec.z;
	}

	public function transform(matrix : Matrix4)
	{
		var x1 = this.x, y1 = this.y, z1 = this.z;
		var mat = matrix.buffer;

		this.x = mat[0]*x1 + mat[4]*y1 + mat[8]*z1 + mat[12];
		this.y = mat[1]*x1 + mat[5]*y1 + mat[9]*z1 + mat[13];
		this.z = mat[2]*x1 + mat[6]*y1 + mat[10]*z1 + mat[14];
	}

	public function setFrom(?value : Float, ?vec3 : Vec3Components)
	{
		if (value != null)
		{
			x = value;
			y = value;
			z = value;
		}
		else if (vec3 != null)
		{
			x = vec3.x;
			y = vec3.y;
			z = vec3.z;
		}
	}

	public function clone() : Vec3
	{
		return new Vec3(x, y, z);
	}
}
