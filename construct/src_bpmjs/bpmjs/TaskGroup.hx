package bpmjs;

class TaskGroup extends Task<TaskGroup>
{
	public var tasks : Array<Task<Dynamic>>;

	public function new()
	{
		super();
		tasks = new Array();
	}

	public function add(task : Task<Dynamic>)
	{
		tasks.push(task);
	}

	override public function doStart()
	{
		nextTask();
	}

	function nextTask()
	{
		if (tasks.length > 0)
		{
			var task = tasks.pop();
			task.completeSignaler.bind(handleTaskComplete);
			task.start();
		}
		else
		{
			complete();
		}
	}

	function handleTaskComplete(task : Task<Dynamic>)
	{
		nextTask();
	}
}
