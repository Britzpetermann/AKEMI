package bpmjs;

import TestRunner;

class TestDynamic extends SummerTestCase
{
	public static var bCount : Int = 0;

	public function testObjects()
	{
		var context = ContextBuilder.build(TestConfigWithAAndDyanmicBs);
		assertEquals(3, bCount);
	}

	public function testListInject()
	{
		var context = ContextBuilder.build(TestConfigWithAAndDyanmicBs);

		var a : A = context.getObjectByType(A);
		assertEquals(3, a.bList.length);
	}
}

private class TestConfigWithAAndDyanmicBs implements haxe.rtti.Infos
{
	public var a : A;

	public var bList : Array<B>;

	public function new()
	{
		a = new A();

		bList = new Array<B>();
		bList.push(new B());
		bList.push(new B());
		bList.push(new B());
	}

}

private class A implements haxe.rtti.Infos
{
	@Inject
	public var bList : Array<B>;

	public function new()
	{
	}
}

private class B implements haxe.rtti.Infos
{

	@Inject
	public var a : A;

	public function new()
	{
	}

	@Complete
	public function handleComplete()
	{
		if (a != null)
			TestDynamic.bCount++;
	}
}
