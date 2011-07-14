class GLHitarea
{
	public var position : Vec2;
	public var size : Vec2;

	public function new()
	{
		position = new Vec2();
		size = new Vec2();
	}

	public function isUnder(matrix : Matrix4, positionOnStage : Vec2)
	{
		var tl = position.clone();
		tl.transform(matrix);

		var br = size.clone();
		br.transform(matrix);

		return tl.x <= positionOnStage.x &&
			br.x >= positionOnStage.x &&
			tl.y <= positionOnStage.y &&
			br.y >= positionOnStage.y;
	}
}
