class MoveSet
{
	public var current : Float;
	public var to : Float;
	public var velocity : Float;
	public var acceleration : Float;
	public var warpSpeed : Float;

	public function new(?current : Float = 0, to : Float = 0, ?acceleration : Float = 0.1)
	{
		this.current = current;
		this.to = to;
		this.acceleration = acceleration;
		this.velocity = 0;
		warpSpeed = 10000000;
	}

	public function move(?timeScale : Float = 1) : Void
	{
		var timeScaleInt = Std.int(timeScale);
		if (timeScaleInt < 1)
			timeScaleInt = 1;

		for(i in 0... timeScaleInt)
		{
		var moveSet : MoveSet = this;
		var dx : Float = moveSet.to - moveSet.current;
		if (dx == 0)
			return;

		var accelerationToTarget : Float = signum(dx) * acceleration;
		var accelerationWhenBreaking : Float = -accelerationToTarget;

		// break time
		var timeUntilStopIfBreaking : Float = -moveSet.velocity / accelerationWhenBreaking;
		var wayUntilStopIfBreaking : Float = (moveSet.velocity * timeUntilStopIfBreaking - 0.5 * accelerationWhenBreaking * timeUntilStopIfBreaking * timeUntilStopIfBreaking);

		if (timeUntilStopIfBreaking < 0)
		{
			// moving in wrong direction => break
			if (Math.abs(dx) < Math.abs(accelerationWhenBreaking))
			{
				moveSet.velocity = dx;
			}
			else
			{
				moveSet.velocity -= accelerationWhenBreaking;
			}
		}
		else
		{
			// moving in the right direction => accel or break
			if (Math.abs(wayUntilStopIfBreaking) > Math.abs(dx))
			{
				// break
				if (timeUntilStopIfBreaking < 1)
				{
					// less than one frame until target is reached
					moveSet.velocity = 0;
					moveSet.current = moveSet.to;
				}
				else
				{
					// compute precise break acceleration to reach wayUntilStopIfBreaking = dx
					accelerationWhenBreaking = -(2 * (timeUntilStopIfBreaking * moveSet.velocity - dx)) / (timeUntilStopIfBreaking * timeUntilStopIfBreaking);
					moveSet.velocity += accelerationWhenBreaking;
				}
			}
			else
			{
				// accelerate
				if (Math.abs(dx) < Math.abs(accelerationToTarget))
				{
					accelerationToTarget = dx;
				}

				moveSet.velocity += accelerationToTarget;

				// if we are very fast, go close to target
				if (Math.abs(moveSet.velocity) > warpSpeed)
				{
					moveSet.current = moveSet.to - wayUntilStopIfBreaking;
					moveSet.velocity = signum(moveSet.velocity) * warpSpeed;
				}
			}
		}

		moveSet.current += moveSet.velocity;
		if (Math.abs(moveSet.velocity) > warpSpeed)
		{
			moveSet.velocity = signum(moveSet.velocity) * warpSpeed;
		}
		}
	}

	inline function signum(value : Float) : Float
	{
		return value > 0 ? 1 : value < 0 ? -1 : 0;
	}
}
