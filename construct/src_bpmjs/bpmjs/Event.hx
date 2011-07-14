package bpmjs;

class Event
{
	public inline static var COMPLETE : String = "complete";
	public inline static var START : String = "start";

	public var type : String;
	public var target : EventDispatcher;

	public function new(type : String)
	{
		this.type = type;
	}
}

class EventDispatcher
{
	private var listeners : Array<ListenerForType>;

	public function new()
	{
		listeners = new Array();
	}

	public function addEventListener(type : String, listener : Event->Void)
	{
		removeEventListener(type, listener);
		listeners.push(new ListenerForType(type, listener));
	}

	public function removeEventListener(type : String, listener : Event->Void)
	{
		for(listenerForType in listeners)
		{
			if (listenerForType.type == type && Reflect.compareMethods(listener, listenerForType.listener))
			{
				listeners.remove(listenerForType);
				return;
			}
		}
	}

	public function dispatchEvent(event : Event)
	{
		//trace("dispatchEvent: " + event + " at: " + this);
		event.target = this;
		for(listener in listeners)
		{
			if (listener.type == event.type)
				listener.listener(event);
		}
	}

	public function toString() : String
	{
		return Type.getClassName(Type.getClass(this));
	}
}

private class ListenerForType
{
	public var type : String;
	public var listener : Event->Void;

	public function new(type, listener)
	{
		this.type = type;
		this.listener = listener;
	}
}
