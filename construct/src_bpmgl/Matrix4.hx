class Matrix4
{
	public var buffer : Float32Array;

	public function new(?cloneFrom : Matrix4)
	{
		buffer = new Float32Array(16);
		if (cloneFrom != null)
		{
			setFrom(cloneFrom);
		}
		else
		{
			identity();
		}
	}

	public function identity() {
		buffer[0] = 1;
		buffer[1] = 0;
		buffer[2] = 0;
		buffer[3] = 0;
		buffer[4] = 0;
		buffer[5] = 1;
		buffer[6] = 0;
		buffer[7] = 0;
		buffer[8] = 0;
		buffer[9] = 0;
		buffer[10] = 1;
		buffer[11] = 0;
		buffer[12] = 0;
		buffer[13] = 0;
		buffer[14] = 0;
		buffer[15] = 1;
	}

	public function setFrom(from : Matrix4)
	{
		buffer[0] = from.buffer[0];
		buffer[1] = from.buffer[1];
		buffer[2] = from.buffer[2];
		buffer[3] = from.buffer[3];
		buffer[4] = from.buffer[4];
		buffer[5] = from.buffer[5];
		buffer[6] = from.buffer[6];
		buffer[7] = from.buffer[7];
		buffer[8] = from.buffer[8];
		buffer[9] = from.buffer[9];
		buffer[10] = from.buffer[10];
		buffer[11] = from.buffer[11];
		buffer[12] = from.buffer[12];
		buffer[13] = from.buffer[13];
		buffer[14] = from.buffer[14];
		buffer[15] = from.buffer[15];
	}

	public function lookAt(eye : Vec3, center : Vec3, up : Vec3)
	{
		var eyex = eye.x,
			eyey = eye.y,
			eyez = eye.z,
			upx = up.x,
			upy = up.y,
			upz = up.z,
			centerx = center.x,
			centery = center.y,
			centerz = center.z;

		if (eyex == centerx && eyey == centery && eyez == centerz) {
			identity();
		}

		var z0,z1,z2,x0,x1,x2,y0,y1,y2,len;

		//vec3.direction(eye, center, z);
		z0 = eyex - center.x;
		z1 = eyey - center.y;
		z2 = eyez - center.z;

		// normalize (no check needed for 0 because of early return)
		len = 1/Math.sqrt(z0*z0 + z1*z1 + z2*z2);
		z0 *= len;
		z1 *= len;
		z2 *= len;

		//vec3.normalize(vec3.cross(up, z, x));
		x0 = upy*z2 - upz*z1;
		x1 = upz*z0 - upx*z2;
		x2 = upx*z1 - upy*z0;
		len = Math.sqrt(x0*x0 + x1*x1 + x2*x2);
		if (Math.isNaN(len)) {
				x0 = 0;
				x1 = 0;
				x2 = 0;
		} else {
				len = 1/len;
				x0 *= len;
				x1 *= len;
				x2 *= len;
		};

		//vec3.normalize(vec3.cross(z, x, y));
		y0 = z1*x2 - z2*x1;
		y1 = z2*x0 - z0*x2;
		y2 = z0*x1 - z1*x0;

		len = Math.sqrt(y0*y0 + y1*y1 + y2*y2);
		if (Math.isNaN(len)) {
				y0 = 0;
				y1 = 0;
				y2 = 0;
		} else {
				len = 1/len;
				y0 *= len;
				y1 *= len;
				y2 *= len;
		}

		buffer[0] = x0;
		buffer[1] = y0;
		buffer[2] = z0;
		buffer[3] = 0;
		buffer[4] = x1;
		buffer[5] = y1;
		buffer[6] = z1;
		buffer[7] = 0;
		buffer[8] = x2;
		buffer[9] = y2;
		buffer[10] = z2;
		buffer[11] = 0;
		buffer[12] = -(x0*eyex + x1*eyey + x2*eyez);
		buffer[13] = -(y0*eyex + y1*eyey + y2*eyez);
		buffer[14] = -(z0*eyex + z1*eyey + z2*eyez);
		buffer[15] = 1;
	}

	public function ortho(left : Float, right : Float, bottom : Float, top : Float, near : Float, far : Float) {
		var rl = (right - left);
		var tb = (top - bottom);
		var fn = (far - near);
		buffer[0] = 2 / rl;
		buffer[1] = 0;
		buffer[2] = 0;
		buffer[3] = 0;
		buffer[4] = 0;
		buffer[5] = 2 / tb;
		buffer[6] = 0;
		buffer[7] = 0;
		buffer[8] = 0;
		buffer[9] = 0;
		buffer[10] = -2 / fn;
		buffer[11] = 0;
		buffer[12] = -(left + right) / rl;
		buffer[13] = -(top + bottom) / tb;
		buffer[14] = -(far + near) / fn;
		buffer[15] = 1;
	}

	public function perspective(fovy : Float, aspect : Float, near : Float, far : Float)
	{
		var top = near * Math.tan(fovy * Math.PI / 360.0);
		var right = top * aspect;
		frustum(-right, right, -top, top, near, far);
	}

	public function frustum(left : Float, right : Float, bottom : Float, top : Float, near : Float, far : Float) {
		var rl = (right - left);
		var tb = (top - bottom);
		var fn = (far - near);
		buffer[0] = (near * 2) / rl;
		buffer[1] = 0;
		buffer[2] = 0;
		buffer[3] = 0;

		buffer[4] = 0;
		buffer[5] = (near * 2) / tb;
		buffer[6] = 0;
		buffer[7] = 0;

		buffer[8] = (right + left) / rl;
		buffer[9] = (top + bottom) / tb;
		buffer[10] = -(far + near) / fn;
		buffer[11] = -1;

		buffer[12] = 0;
		buffer[13] = 0;
		buffer[14] = -(far * near * 2) / fn;
		buffer[15] = 0;
	}

	public static function createTranslation(x : Float, y : Float, z : Float) : Matrix4
	{
		var result = new Matrix4();
		result.buffer[0] = 1;
		result.buffer[1] = 0;
		result.buffer[2] = 0;
		result.buffer[3] = 0;
		result.buffer[4] = 0;
		result.buffer[5] = 1;
		result.buffer[6] = 0;
		result.buffer[7] = 0;
		result.buffer[8] = 0;
		result.buffer[9] = 0;
		result.buffer[10] = 1;
		result.buffer[11] = 0;
		result.buffer[12] = x;
		result.buffer[13] = y;
		result.buffer[14] = z;
		result.buffer[15] = 1;

		return result;
	}

	public function appendTranslation(x : Float, y : Float, z : Float)
	{
		var m = Matrix4.createTranslation(x, y, z);
		multiply(m);
	}

	public function appendScale(x : Float, y : Float, z : Float)
	{
		buffer[0] = buffer[0]*x;
		buffer[1] = buffer[1]*x;
		buffer[2] = buffer[2]*x;
		buffer[3] = buffer[3]*x;
		buffer[4] = buffer[4]*y;
		buffer[5] = buffer[5]*y;
		buffer[6] = buffer[6]*y;
		buffer[7] = buffer[7]*y;
		buffer[8] = buffer[8]*z;
		buffer[9] = buffer[9]*z;
		buffer[10] = buffer[10]*z;
		buffer[11] = buffer[11]*z;
		buffer[12] = buffer[12];
		buffer[13] = buffer[13];
		buffer[14] = buffer[14];
		buffer[15] = buffer[15];
	}

	public function appendRotation(angle, axis : {x : Float, y : Float, z : Float})
	{
		var x = axis.x, y = axis.y, z = axis.y;
		var len = Math.sqrt(x*x + y*y + z*z);
		len = 1 / len;
		x *= len;
		y *= len;
		z *= len;

		var s = Math.sin(angle);
		var c = Math.cos(angle);
		var t = 1-c;

		var a00 = buffer[0], a01 = buffer[1], a02 = buffer[2], a03 = buffer[3];
		var a10 = buffer[4], a11 = buffer[5], a12 = buffer[6], a13 = buffer[7];
		var a20 = buffer[8], a21 = buffer[9], a22 = buffer[10], a23 = buffer[11];

		var b00 = x*x*t + c, b01 = y*x*t + z*s, b02 = z*x*t - y*s;
		var b10 = x*y*t - z*s, b11 = y*y*t + c, b12 = z*y*t + x*s;
		var b20 = x*z*t + y*s, b21 = y*z*t - x*s, b22 = z*z*t + c;

		buffer[0] = a00*b00 + a10*b01 + a20*b02;
		buffer[1] = a01*b00 + a11*b01 + a21*b02;
		buffer[2] = a02*b00 + a12*b01 + a22*b02;
		buffer[3] = a03*b00 + a13*b01 + a23*b02;

		buffer[4] = a00*b10 + a10*b11 + a20*b12;
		buffer[5] = a01*b10 + a11*b11 + a21*b12;
		buffer[6] = a02*b10 + a12*b11 + a22*b12;
		buffer[7] = a03*b10 + a13*b11 + a23*b12;

		buffer[8] = a00*b20 + a10*b21 + a20*b22;
		buffer[9] = a01*b20 + a11*b21 + a21*b22;
		buffer[10] = a02*b20 + a12*b21 + a22*b22;
		buffer[11] = a03*b20 + a13*b21 + a23*b22;
	}

	/** this conversion uses NASA standard aeroplane conventions as described on page:
	*   http://www.euclideanspace.com/maths/geometry/rotations/euler/index.htm
	*   Coordinate System: right hand
	*   Positive angle: right hand
	*   Order of euler angles: heading first, then attitude, then bank
	*   matrix row column ordering:
	*   [m00 m01 m02]
	*   [m10 m11 m12]
	*   [m20 m21 m22]*/
	public function rotateEuler(heading : Float, attitude : Float, bank : Float)
	{
		identity();

		// Assuming the angles are in radians.
		var ch = Math.cos(heading);
		var sh = Math.sin(heading);
		var ca = Math.cos(attitude);
		var sa = Math.sin(attitude);
		var cb = Math.cos(bank);
		var sb = Math.sin(bank);

		buffer[0] = ch * ca;
		buffer[1] = sh*sb - ch*sa*cb;
		buffer[2] = ch*sa*sb + sh*cb;

		buffer[4] = sa;
		buffer[5] = ca*cb;
		buffer[6] = -ca*sb;

		buffer[8] = -sh*ca;
		buffer[9] = sh*sa*cb + ch*sb;
		buffer[10] = -sh*sa*sb + ch*cb;
	}

	public function appendEulerRotation(heading : Float, attitude : Float, bank : Float)
	{
		var mEuler = new Matrix4();
		mEuler.rotateEuler(heading, attitude, bank);
		multiply(mEuler);
	}

	public function inverse()
	{
		var a00 = buffer[0], a01 = buffer[1], a02 = buffer[2], a03 = buffer[3];
		var a10 = buffer[4], a11 = buffer[5], a12 = buffer[6], a13 = buffer[7];
		var a20 = buffer[8], a21 = buffer[9], a22 = buffer[10], a23 = buffer[11];
		var a30 = buffer[12], a31 = buffer[13], a32 = buffer[14], a33 = buffer[15];

		var b00 = a00*a11 - a01*a10;
		var b01 = a00*a12 - a02*a10;
		var b02 = a00*a13 - a03*a10;
		var b03 = a01*a12 - a02*a11;
		var b04 = a01*a13 - a03*a11;
		var b05 = a02*a13 - a03*a12;
		var b06 = a20*a31 - a21*a30;
		var b07 = a20*a32 - a22*a30;
		var b08 = a20*a33 - a23*a30;
		var b09 = a21*a32 - a22*a31;
		var b10 = a21*a33 - a23*a31;
		var b11 = a22*a33 - a23*a32;

		var invDet = 1/(b00*b11 - b01*b10 + b02*b09 + b03*b08 - b04*b07 + b05*b06);

		buffer[0] = (a11*b11 - a12*b10 + a13*b09)*invDet;
		buffer[1] = (-a01*b11 + a02*b10 - a03*b09)*invDet;
		buffer[2] = (a31*b05 - a32*b04 + a33*b03)*invDet;
		buffer[3] = (-a21*b05 + a22*b04 - a23*b03)*invDet;
		buffer[4] = (-a10*b11 + a12*b08 - a13*b07)*invDet;
		buffer[5] = (a00*b11 - a02*b08 + a03*b07)*invDet;
		buffer[6] = (-a30*b05 + a32*b02 - a33*b01)*invDet;
		buffer[7] = (a20*b05 - a22*b02 + a23*b01)*invDet;
		buffer[8] = (a10*b10 - a11*b08 + a13*b06)*invDet;
		buffer[9] = (-a00*b10 + a01*b08 - a03*b06)*invDet;
		buffer[10] = (a30*b04 - a31*b02 + a33*b00)*invDet;
		buffer[11] = (-a20*b04 + a21*b02 - a23*b00)*invDet;
		buffer[12] = (-a10*b09 + a11*b07 - a12*b06)*invDet;
		buffer[13] = (a00*b09 - a01*b07 + a02*b06)*invDet;
		buffer[14] = (-a30*b03 + a31*b01 - a32*b00)*invDet;
		buffer[15] = (a20*b03 - a21*b01 + a22*b00)*invDet;
	}

	public function multiply(mat2 : Matrix4)
	{
		var a00 = buffer[0], a01 = buffer[1], a02 = buffer[2], a03 = buffer[3];
		var a10 = buffer[4], a11 = buffer[5], a12 = buffer[6], a13 = buffer[7];
		var a20 = buffer[8], a21 = buffer[9], a22 = buffer[10], a23 = buffer[11];
		var a30 = buffer[12], a31 = buffer[13], a32 = buffer[14], a33 = buffer[15];

		var b00 = mat2.buffer[0], b01 = mat2.buffer[1], b02 = mat2.buffer[2], b03 = mat2.buffer[3];
		var b10 = mat2.buffer[4], b11 = mat2.buffer[5], b12 = mat2.buffer[6], b13 = mat2.buffer[7];
		var b20 = mat2.buffer[8], b21 = mat2.buffer[9], b22 = mat2.buffer[10], b23 = mat2.buffer[11];
		var b30 = mat2.buffer[12], b31 = mat2.buffer[13], b32 = mat2.buffer[14], b33 = mat2.buffer[15];

		buffer[0] = b00*a00 + b01*a10 + b02*a20 + b03*a30;
		buffer[1] = b00*a01 + b01*a11 + b02*a21 + b03*a31;
		buffer[2] = b00*a02 + b01*a12 + b02*a22 + b03*a32;
		buffer[3] = b00*a03 + b01*a13 + b02*a23 + b03*a33;
		buffer[4] = b10*a00 + b11*a10 + b12*a20 + b13*a30;
		buffer[5] = b10*a01 + b11*a11 + b12*a21 + b13*a31;
		buffer[6] = b10*a02 + b11*a12 + b12*a22 + b13*a32;
		buffer[7] = b10*a03 + b11*a13 + b12*a23 + b13*a33;
		buffer[8] = b20*a00 + b21*a10 + b22*a20 + b23*a30;
		buffer[9] = b20*a01 + b21*a11 + b22*a21 + b23*a31;
		buffer[10] = b20*a02 + b21*a12 + b22*a22 + b23*a32;
		buffer[11] = b20*a03 + b21*a13 + b22*a23 + b23*a33;
		buffer[12] = b30*a00 + b31*a10 + b32*a20 + b33*a30;
		buffer[13] = b30*a01 + b31*a11 + b32*a21 + b33*a31;
		buffer[14] = b30*a02 + b31*a12 + b32*a22 + b33*a32;
		buffer[15] = b30*a03 + b31*a13 + b32*a23 + b33*a33;
	}

	public function toInverseMatrix3() : Matrix3
	{
		var a00 = buffer[0], a01 = buffer[1], a02 = buffer[2];
		var a10 = buffer[4], a11 = buffer[5], a12 = buffer[6];
		var a20 = buffer[8], a21 = buffer[9], a22 = buffer[10];

		var b01 = a22*a11-a12*a21;
		var b11 = -a22*a10+a12*a20;
		var b21 = a21*a10-a11*a20;

		var d = a00*b01 + a01*b11 + a02*b21;
		if (d == null)
			return null;
		var id = 1/d;

		var result = new Matrix3();
		result.buffer[0] = b01*id;
		result.buffer[1] = (-a22*a01 + a02*a21)*id;
		result.buffer[2] = (a12*a01 - a02*a11)*id;
		result.buffer[3] = b11*id;
		result.buffer[4] = (a22*a00 - a02*a20)*id;
		result.buffer[5] = (-a12*a00 + a02*a10)*id;
		result.buffer[6] = b21*id;
		result.buffer[7] = (-a21*a00 + a01*a20)*id;
		result.buffer[8] = (a11*a00 - a01*a10)*id;

		return result;
	}

	public function clone()
	{
		return new Matrix4(this);
	}

	public function toString()
	{
		var result = "Matrix4:";
		result += "\r\t" + buffer[0] + "," +buffer[1] + "," +buffer[2] + "," +buffer[3];
		result += "\r\t" + buffer[4] + "," +buffer[5] + "," +buffer[6] + "," +buffer[7];
		result += "\r\t" + buffer[8] + "," +buffer[9] + "," +buffer[10] + "," +buffer[11];
		result += "\r\t" + buffer[12] + "," +buffer[13] + "," +buffer[14] + "," +buffer[15];

		return result;
	}
}
