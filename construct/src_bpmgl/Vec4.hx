class Vec4
{
	public var x : Float;
	public var y : Float;
	public var z : Float;
	public var w : Float;

	public function new(?x : Float, ?y : Float, ?z : Float, ?w : Float)
	{
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}

	public function scale(factor : Float)
	{
		this.x *= factor;
		this.y *= factor;
		this.z *= factor;
		this.w *= factor;

		return this;
	}

	public function multiply(x : Float, y : Float, z : Float, w : Float)
	{
		this.x *= x;
		this.y *= y;
		this.z *= z;
		this.w *= w;

		return this;
	}

	public function subtract(x : Float, y : Float, z : Float, w : Float)
	{
		this.x -= x;
		this.y -= y;
		this.z -= z;
		this.w -= w;

		return this;
	}

	public function length()
	{
		return Math.sqrt(x * x + y * y + z * z + w * w);
	}

	public function transform(matrix : Matrix4)
	{
		var x1 = this.x, y1 = this.y, z1 = this.z, w1 = this.w;
		var mat = matrix.buffer;

		this.x = mat[0]*x1 + mat[4]*y1 + mat[8]*z1 + mat[12] * w1;
		this.y = mat[1]*x1 + mat[5]*y1 + mat[9]*z1 + mat[13] * w1;
		this.z = mat[2]*x1 + mat[6]*y1 + mat[10]*z1 + mat[14] * w1;
		this.w = mat[3]*x1 + mat[7]*y1 + mat[11]*z1 + mat[15] * w1;
	}

	public function project()
	{
		x /= w;
		y /= w;
		z /= w;
		w = 1;
	}

	public function project3D(perspectiveMatrix : Matrix4, objectMatrix : Matrix4)
	{
		x *= w;
		y *= w;
		z *= w;

		var mp = new Matrix4();
		mp.multiply(perspectiveMatrix);
		mp.inverse();
		transform(mp);
		w = 1;

		var mo = new Matrix4();
		mo.multiply(objectMatrix);
		mo.inverse();
		transform(mo);
	}

	public function clone()
	{
		return new Vec4(x, y, z, w);
	}

	public function cloneToVec3()
	{
		return new Vec3(x, y, z);
	}
}
