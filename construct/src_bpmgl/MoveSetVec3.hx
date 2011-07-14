class MoveSetVec3
{
	public var current : Vec3;
	public var to : Vec3;
	public var acceleration : Vec3;

	public var moveSetX : MoveSet;
	public var moveSetY : MoveSet;
	public var moveSetZ : MoveSet;

	public function new(current : Vec3, to : Vec3, acceleration : Vec3)
	{
		this.current = current;
		this.to = to;
		this.acceleration = acceleration;
		moveSetX = new MoveSet(current.x, to.x, acceleration.x);
		moveSetY = new MoveSet(current.y, to.y, acceleration.y);
		moveSetZ = new MoveSet(current.z, to.z, acceleration.z);
	}

	public function move(?factor : Float = 1)
	{
		moveSetX.to = to.x;
		moveSetX.acceleration = acceleration.x;
		moveSetX.move(factor);
		current.x = moveSetX.current;

		moveSetY.to = to.y;
		moveSetY.acceleration = acceleration.y;
		moveSetY.move(factor);
		current.y = moveSetY.current;

		moveSetZ.to = to.z;
		moveSetZ.acceleration = acceleration.z;
		moveSetZ.move(factor);
		current.z = moveSetZ.current;

	}
}
