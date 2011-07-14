package bpmjs;

import TestRunner;

class TestConfigure extends SummerTestCase
{
	public function testObject()
	{
		var context = ContextBuilder.build(TestConfigWithA);

		ContextBuilder.configure(new B());

		var b : B = context.getObjectByType(B);
		assertNotNull(b);
	}

	public function testInject()
	{
		var context = ContextBuilder.build(TestConfigWithA);

		ContextBuilder.configure(new B());

		var b : B = context.getObjectByType(B);
		assertNotNull(b.a);
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
	@Inject
	public var b : B;

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
