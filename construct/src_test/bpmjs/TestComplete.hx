package bpmjs;

import TestRunner;

class TestComplete extends SummerTestCase
{
	public static var completeCount;
	public static var postCompleteCount;

	public override function setup()
	{
		completeCount = 0;
		postCompleteCount = 0;
	}

	public function testComplete()
	{
		var context = ContextBuilder.build(TestConfigWithA);
		assertEquals(1, completeCount);
	}

	public function testPostComplete()
	{
		var context = ContextBuilder.build(TestConfigWithA);
		assertEquals(1, postCompleteCount);
	}
}

private class TestConfigWithA implements haxe.rtti.Infos
{
	public var a : A;

	public function new()
	{
		a = new A();
	}
}

private class A implements haxe.rtti.Infos
{
	public function new()
	{
	}

	@Complete
	public function handleContextComplete()
	{
		TestComplete.completeCount++;
	}

	@PostComplete
	public function handleContextPostComplete()
	{
		TestComplete.postCompleteCount++;
	}
}
