package bpmjs;

import TestRunner;
import bpmjs.FrontController;
import bpmjs.Event;

class TestFrontController extends SummerTestCase
{
	public static var receiveCount;

	public override function setup()
	{
		receiveCount = 0;
	}

	public function testWithEvent()
	{
		var dispatchingObject = new DispatchingObject();
		var receivingObject = new ReceivingObject();

		var frontController = new DefaultFrontController();
		frontController.addDispatcher(dispatchingObject, Event.COMPLETE);
		frontController.addReceiver(receivingObject, "handleComplete", Event);

		dispatchingObject.doDispatch();

		assertEquals(1, receiveCount);
	}

	public function testWithCustomEvent()
	{
		var dispatchingObject = new CustomDispatchingObject();
		var receivingObject = new CustomReceivingObject();

		var frontController = new DefaultFrontController();
		frontController.addDispatcher(dispatchingObject, CustomEvent.COMPLETE);
		frontController.addReceiver(receivingObject, "handleComplete", CustomEvent);

		dispatchingObject.doDispatch();

		assertEquals(1, receiveCount);
	}

	public function testNoDispatchWithCustomEvent()
	{
		var dispatchingObject = new DispatchingObject();
		var receivingObject = new CustomReceivingObject();

		var frontController = new DefaultFrontController();
		frontController.addDispatcher(dispatchingObject, Event.COMPLETE);
		frontController.addReceiver(receivingObject, "handleComplete", CustomEvent);

		dispatchingObject.doDispatch();

		assertEquals(0, receiveCount);
	}
}

private class DispatchingObject extends EventDispatcher
{
	public function new()
	{
		super();
	}

	public function doDispatch()
	{
		dispatchEvent(new Event(Event.COMPLETE));
	}
}

private class ReceivingObject
{
	public function new()
	{

	}

	public function handleComplete(event : Event)
	{
		TestFrontController.receiveCount++;
	}
}

private class CustomDispatchingObject extends EventDispatcher
{
	public function new()
	{
		super();
	}

	public function doDispatch()
	{
		dispatchEvent(new CustomEvent(CustomEvent.COMPLETE));
	}
}

private class CustomReceivingObject
{
	public function new()
	{

	}

	public function handleComplete(event : CustomEvent)
	{
		TestFrontController.receiveCount++;
	}
}

private class CustomEvent extends Event
{
	public static var COMPLETE : String = "complete";
}
