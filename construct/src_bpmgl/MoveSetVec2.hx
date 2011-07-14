class MoveSetVec2
{
	public var current : Vec2;
	public var to : Vec2;
	public var acceleration : Vec2;

	public var moveSetX : MoveSet;
	public var moveSetY : MoveSet;

	public function new(current : Vec2, to : Vec2, acceleration : Vec2)
	{
		this.current = current;
		this.to = to;
		this.acceleration = acceleration;
		moveSetX = new MoveSet(current.x, to.x, acceleration.x);
		moveSetY = new MoveSet(current.y, to.y, acceleration.y);
	}

	public function move(?factor : Float = 1)
	{
		moveSetX.to = to.x;
		moveSetX.acceleration = acceleration.x;
		moveSetX.move(factor);

		moveSetY.to = to.y;
		moveSetY.acceleration = acceleration.y;
		moveSetY.move(factor);

		current.x = moveSetX.current;
		current.y = moveSetY.current;
	}
}
