package bpmjs;

import TestRunner;

class TestInject extends SummerTestCase
{
	public function testInject()
	{
		var context = ContextBuilder.build(TestConfigWithAAndB);

		var a : A = context.getObjectByName("a");
		assertTrue(Std.is(a.b, B));
	}

	public function testInjectContext()
	{
		var context = ContextBuilder.build(TestConfigWithAAndB);

		var a : A = context.getObjectByName("a");
		assertEquals(context, a.context);
	}

	public function testCircularInject()
	{
		var context = ContextBuilder.build(TestConfigWithAAndB);

		var a : A = context.getObjectByName("a");
		assertTrue(Std.is(a.b, B));

		var b : B = context.getObjectByName("b");
		assertTrue(Std.is(b.a, A));
	}
}

private class TestConfigWithAAndB implements haxe.rtti.Infos
{
	public var a : A;
	public var b : B;

	public function new()
	{
		a = new A();
		b = new B();
	}

}

private class A implements haxe.rtti.Infos
{
	@Inject
	public var b : B;

	@Inject
	public var context : Context;

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
}
