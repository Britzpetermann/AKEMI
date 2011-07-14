import bpmjs.Stats;

class GLStats extends GLDisplayObject
{
	var lastDraw : Float;

	public function new()
	{
		super();

		width = 64;
		height = 32;
		context.fillStyle = "rgba(0, 40, 0, 0.6)";
		context.fillRect (0, 0, width, height);

		enterFrameSignaler.bind(handleEnterFrame);
	}

	function handleEnterFrame(frame : GLFrame)
	{
		if (lastDraw < frame.time - 100)
		{
			lastDraw = frame.time;
			context.clearRect(0, 0, width, height);
			context.fillStyle = "rgba(0, 0, 0, 0.2)";
			context.fillRect (0, 0, width, Stats.getContents().length * 12 + 4);
			context.font = "12px Arial";
			context.fillStyle = "rgba(0, 255, 0, 0.4)";

			var line = 0;
			for(message in Stats.getContents())
			{
				context.fillText(message, 6, 12 + line * 12);
				line++;
			}
			canvasIsInvalid = true;
		}
	}
}
