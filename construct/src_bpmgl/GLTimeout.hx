import haxe.Timer;

class GLTimeout
{
	public static function executeLater(?ms : Int, method : Void->Void)
	{
		var timer = new Timer(ms == null ? 10 : ms);
		timer.run = function()
		{
			method();
			timer.stop();
		};
	}
}
