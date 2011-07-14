package bpmjs;

import hsl.haxe.DirectSignaler;
import hsl.haxe.Signaler;
import hsl.haxe.Subject;

class Task<T>
{
	public var startSignaler : Signaler<T>;
	public var completeSignaler : Signaler<T>;
	public var errorSignaler : Signaler<TaskError<T>>;

	public function new()
	{
		startSignaler = new DirectSignaler(this);
		completeSignaler = new DirectSignaler(this);
		errorSignaler = new DirectSignaler(this);
	}

	public function start(?positionInformation:haxe.PosInfos)
	{
		try
		{
			var t : T = cast this;
			startSignaler.dispatch(t);
			doStart();
		}
		catch(e : Dynamic)
		{
			trace("Error starting Task: " + e);
		}
	}

	public function doStart()
	{
	}

	public function complete()
	{
		var t : T = cast this;
		completeSignaler.dispatch(t);
	}

	public function error(result : T, error : String)
	{
		var taskError = new TaskError<T>();
		taskError.task = result;
		taskError.error = error;
		errorSignaler.dispatch(taskError);
	}
}
