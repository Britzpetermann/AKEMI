package bpmjs;

import haxe.unit.TestCase;

import bpmjs.Event;

class TestEvent extends TestCase
{
	private var completeCount : Int;
	private var complete2Count : Int;

	public override function setup() : Void
	{
		completeCount = 0;
		complete2Count = 0;
	}

	public function testSingleEvent()
	{
		var eventDispatcher = new EventDispatcher();
		eventDispatcher.addEventListener(Event.COMPLETE, incrementCompleteCount);
		eventDispatcher.dispatchEvent(new Event(Event.COMPLETE));

		assertEquals(1, completeCount);
	}

	public function testDoubleAddListener()
	{
		var eventDispatcher = new EventDispatcher();
		eventDispatcher.addEventListener(Event.COMPLETE, incrementCompleteCount);
		eventDispatcher.addEventListener(Event.COMPLETE, incrementCompleteCount);
		eventDispatcher.dispatchEvent(new Event(Event.COMPLETE));

		assertEquals(1, completeCount);
	}

	public function testDoubleDispatch()
	{
		var eventDispatcher = new EventDispatcher();
		eventDispatcher.addEventListener(Event.COMPLETE, incrementCompleteCount);
		eventDispatcher.dispatchEvent(new Event(Event.COMPLETE));
		eventDispatcher.dispatchEvent(new Event(Event.COMPLETE));

		assertEquals(2, completeCount);
	}

	public function testMyEvent()
	{
		var eventDispatcher = new EventDispatcher();
		eventDispatcher.addEventListener(MyEvent.COMPLETE2, incrementComplete2Count);
		eventDispatcher.dispatchEvent(new MyEvent(MyEvent.COMPLETE2));

		assertEquals(1, complete2Count);
	}

	private function incrementCompleteCount(event)
	{
		completeCount++;
	}

	private function incrementComplete2Count(event)
	{
		complete2Count++;
	}
}

private class MyEvent extends Event
{
	public static var COMPLETE2 : String = "complete2";
}
