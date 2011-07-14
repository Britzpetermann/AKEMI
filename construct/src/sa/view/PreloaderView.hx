package sa.view;

class PreloaderView
{
	public var current : Int;
	public var max : Int;

	public function new()
	{
		current = 0;
	}

	public function start(message : String)
	{
		message = "";
		current++;
		var dots = "";
		for (i in 0...max)
		{
			if (i < current)
				dots += "=";
			else
				dots += "-";
		}

		untyped
		{
			document.getElementById("preloader").innerHTML = "Loading " + dots + " " + message + "";
		}
	}

	public function complete()
	{
		if (current == max)
			untyped
			{
				document.getElementById("preloader").innerHTML = "";
			}
	}
}
