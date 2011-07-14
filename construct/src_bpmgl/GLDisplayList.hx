import hsl.haxe.DirectSignaler;
import hsl.haxe.Signaler;

class GLDisplayList
{
	static var instance : GLDisplayList;

	public var stage : GLStage;

	var hitareaPicker : GLHitareaPicker;
	var lastFrameTime : Float;
	var startTime : Float;
	var cursorClient : GLCursorClient;

	public static function getDefault() : GLDisplayList
	{
		if (instance == null)
		{
			instance = new GLDisplayList();
			instance.stage = new GLStage();
			instance.initDisplayObject(instance.stage);
		}

		return instance;
	}

	public var enterFrameSignaler : Signaler<GLFrame>;


	function new()
	{
		lastFrameTime = Date.now().getTime();
		startTime = lastFrameTime;
		enterFrameSignaler = new DirectSignaler(this);

		hitareaPicker = new GLHitareaPicker();
		GLMouseRegistry.getInstance().mouseDownSignaler.bind(handleMouseDown);
		GLMouseRegistry.getInstance().mouseMoveSignaler.bind(handleMouseMove);
		cursorClient = GLMouseRegistry.getInstance().createCursorClient();
	}

	public function initDisplayObject(displayObject : GLDisplayObject)
	{
		displayObject.stage = stage;
		displayObject.enterFrameSignaler = enterFrameSignaler;
	}

	public function initInteractiveObject(interactiveObject : GLInteractiveObject)
	{
		interactiveObject.mouseDownSignaler = new DirectSignaler(this);
	}

	public function setStageSize(width : Float, height : Float)
	{
		stage.stageWidth = width;
		stage.stageHeight = height;
	}

	public function dispatchEnterFrame()
	{
		var time = Date.now().getTime();

		var frame = new GLFrame();
		frame.time = time;
		frame.timer = time - startTime;
		frame.frameTime = time - lastFrameTime;
		lastFrameTime = time;

		enterFrameSignaler.dispatch(frame);
	}

	function handleMouseDown(position : Vec2)
	{
		var result : GLInteractiveObject = hitareaPicker.pick(stage, position);
		if (result != null)
			result.mouseDownSignaler.dispatch(result);
	}

	function handleMouseMove(position : Vec2)
	{
		var result = hitareaPicker.pick(stage, position);
		if (result != null)
			cursorClient.handCursor();
		else
			cursorClient.defaultCursor();
	}
}
