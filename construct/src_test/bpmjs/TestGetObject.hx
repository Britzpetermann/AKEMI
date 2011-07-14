package bpmjs;

import TestRunner;

class TestGetObject extends SummerTestCase
{

	public function testGetObjectByName()
	{
		var context = ContextBuilder.build(TestConfigWithA);
		var a = context.getObjectByName("a");
		assertNotNull(a);
	}

	public function testGetObjectByNameValidate()
	{
		var context = ContextBuilder.build(TestConfigWithA);
		var a : A = context.getObjectByName("a");
		assertTrue(Std.is(a, A));
		assertTrue(a.getValue());
	}

	public function testGetObjectByType()
	{
		var context = ContextBuilder.build(TestConfigWithA);
		var a : A = context.getObjectByType(A);
		assertNotNull(a);
	}

	public function testGetObjectAAndBByName()
	{
		var context = ContextBuilder.build(TestConfigWithAAndB);

		var a : A = context.getObjectByName("a");
		assertTrue(Std.is(a, A));

		var b : B = context.getObjectByName("b");
		assertTrue(Std.is(b, B));
	}

	public function testGetObjectAAndBByType()
	{
		var context = ContextBuilder.build(TestConfigWithAAndB);

		var a : A = context.getObjectByType(A);
		assertTrue(Std.is(a, A));

		var b : B = context.getObjectByType(B);
		assertTrue(Std.is(b, B));
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

private class A
{
	private var value : Bool;

	public function new()
	{
		value = true;
	}

	public function getValue()
	{
		return value;
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

private class B
{
	public function new()
	{
	}
}
