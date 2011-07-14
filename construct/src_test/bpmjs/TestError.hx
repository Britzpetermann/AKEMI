package bpmjs;
import TestRunner;

class TestError extends SummerTestCase
{

	public function testContextNotNull()
	{
		try
		{
			var context = ContextBuilder.build(TestConfigWithoutRTTI);
		}
		catch (error : String)
		{
			noFail();
			return;
		}

		fail("Expected Error");
	}
}

private class TestConfigWithoutRTTI
{
}
