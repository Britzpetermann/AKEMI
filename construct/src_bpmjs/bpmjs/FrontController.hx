package bpmjs;
import bpmjs.Event;

interface FrontController
{
	function addDispatcher(dispatcher : EventDispatcher, type : String) : Void;
	
	function addReceiver(receivingObject : Dynamic, methodName : String, eventClass : Class<Dynamic>) : Void;
}

class DefaultFrontController implements FrontController {
	
	var receivers : Array<Receiver>;
	
	public function new()
	{
		receivers = new Array();
	}
	
	public function addDispatcher(dispatcher : EventDispatcher, type : String)
	{
		//trace("addDispatcher: " + type);
		dispatcher.addEventListener(type, handleEvent);
	}
	
	public function addReceiver(receivingObject : Dynamic, methodName : String, eventClass : Class<Dynamic>)
	{
		//trace("addReceiver: " + methodName);
		receivers.push(new Receiver(receivingObject, methodName, eventClass));
	}
	
	function handleEvent(event : Event)
	{
		//trace("handleEvent: " + event);
		for(receiver in receivers)
		{
			if (receiver.matches(event))
			{
				receiver.execute(event);
			}
		}
	}
}

private class Receiver
{
	public var receiver : Dynamic;
	public var method : Dynamic;
	public var eventClass : Class<Dynamic>;
	
	public function new(receiver : Dynamic, methodName : String, eventClass : Class<Dynamic>)
	{
		this.receiver = receiver;	
		this.eventClass = eventClass;
		this.method = Reflect.field(receiver, methodName);
	}
	
	inline public function matches(event : Event)
	{
		return Type.getClass(event) == eventClass;
	}
	
	inline public function execute(event : Event)
	{
		Reflect.callMethod(receiver, method, [event]);
	}
}