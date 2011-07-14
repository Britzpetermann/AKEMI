import hsl.haxe.DirectSignaler;
import hsl.haxe.Signaler;

class GLMouseRegistry
{

	static var instance : GLMouseRegistry;

	public static function getInstance()
	{
		if (instance == null)
			instance = new GLMouseRegistry();

		return instance;
	}

	public var mouseDownSignaler(default, null):Signaler<Vec2>;
	public var mouseMoveSignaler(default, null):Signaler<Vec2>;

	var canvas : Canvas;

	function new() {}

	public function init(canvas : Canvas)
	{
		this.canvas = canvas;

		mouseDownSignaler = new DirectSignaler(this);
		mouseMoveSignaler = new DirectSignaler(this);

		canvas.onmousedown = onMouseDown;
		canvas.onmousemove = onMouseMove;
	}

	public function setCursor(cursor : String)
	{
		canvas.style.cursor = cursor;
	}

	public function createCursorClient()
	{
		var client = new GLCursorClient();
		return client;
	}

	function onMouseDown (e : Dynamic)
	{
		try
		{
			mouseDownSignaler.dispatch(new Vec2(e.layerX / canvas.clientWidth, e.layerY / canvas.clientHeight));
		}
		catch (e : Dynamic)
		{
			trace(e);
		}
	}

	function onMouseMove (e : Dynamic)
	{
		try
		{
			mouseMoveSignaler.dispatch(new Vec2(e.layerX / canvas.clientWidth, e.layerY / canvas.clientHeight));
		}
		catch (e : Dynamic)
		{
			trace(e);
		}
	}
}
