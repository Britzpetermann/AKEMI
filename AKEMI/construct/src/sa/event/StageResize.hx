package sa.event;

import bpmjs.Event;

class StageResize extends Event
{
	public function new()
	{
		super("stageResize");
	}
}
