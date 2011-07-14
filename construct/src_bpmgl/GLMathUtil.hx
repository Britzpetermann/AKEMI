class GLMathUtil
{
	public static function getNextPowerOfTwo(value : Float)
	{
		var n = Std.int(value);
		n--;
		n |= n >> 1;
		n |= n >> 2;
		n |= n >> 4;
		n |= n >> 8;
		n |= n >> 16;
		n++;
		return n;
	}
}
