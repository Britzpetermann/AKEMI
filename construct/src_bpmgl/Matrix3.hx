class Matrix3
{
	public var buffer : Float32Array;

	public function new(?cloneFrom : Matrix3)
	{
		buffer = new Float32Array(9);
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
		buffer[4] = 1;
		buffer[5] = 0;
		buffer[6] = 0;
		buffer[7] = 0;
		buffer[8] = 1;
	}

	public function transpose()
	{
		var a01 = buffer[1], a02 = buffer[2];
		var a12 = buffer[5];

		buffer[1] = buffer[3];
		buffer[2] = buffer[6];
		buffer[3] = a01;
		buffer[5] = buffer[7];
		buffer[6] = a02;
		buffer[7] = a12;
	}

	public function setFrom(from : Matrix3)
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
	}

	public function clone()
	{
		return new Matrix3(this);
	}

	public function toString()
	{
		var result = "Matrix3:";
		result += "\r\t" + buffer[0] + "," +buffer[1] + "," +buffer[2];
		result += "\r\t" + buffer[3] + "," +buffer[4] + "," +buffer[5];
		result += "\r\t" + buffer[6] + "," +buffer[7] + "," +buffer[8];

		return result;
	}
}
