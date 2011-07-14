import js.Lib;

import hsl.haxe.DirectSignaler;
import hsl.haxe.Signaler;

class GLDisplayObject
{
	private static var nextId : Int;

	public var id : Int;

	public var stage : GLStage;

	public var skipDraw : Bool;

	public var alpha : Float;
	public var x(default, setX) : Float;
	public var y(default, setY) : Float;
	public var width(default, setWidth) : Float;
	public var height(default, setHeight) : Float;
	public var scaleX(default, setScaleX) : Float;
	public var scaleY(default, setScaleY) : Float;

	public var transformIsInvalid : Bool;
	public var canvasIsInvalid : Bool;

	public var canvas(getCanvas, null) : Canvas;
	public var context(getContext, null) : CanvasRenderingContext2D;

	public var matrix : Matrix4;

	public var enterFrameSignaler : Signaler<GLFrame>;

	public function new()
	{
		if (nextId == null)
			nextId = 0;
		id = nextId;
		nextId++;

		GLDisplayList.getDefault().initDisplayObject(this);

		skipDraw = false;

		alpha = 1;

		matrix = new Matrix4();

		x = 0;
		y = 0;
		width = 256;
		height = 128;
		scaleX = 1;
		scaleY = 1;
		transformIsInvalid = true;

		canvas = cast Lib.document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;

		var context = canvas.getContext("2d");
		context.fillStyle = "rgba(0, 0, 0, 0.0)";
		context.fillRect (0, 0, width, height);

		canvasIsInvalid = true;
	}

	public function validateTransform()
	{
		if (transformIsInvalid)
		{
			transformIsInvalid = false;

			if (canvas.width != width)
				canvas.width = width;

			if (canvas.height != height)
				canvas.height = height;

			matrix.identity();
			matrix.appendTranslation(x, y, 0);
			matrix.appendScale(scaleX, scaleY, 1);
		}
	}

	public function toString()
	{
		return "DisplayObject: " + id;
	}

	function setX(?value : Float)
	{
		if (x != value)
		{
			x = value;
			transformIsInvalid = true;
		}
		return value;
	}

	function setY(?value : Float)
	{
		if (y != value)
		{
			y = value;
			transformIsInvalid = true;
		}
		return value;
	}

	function setScaleX(?value : Float)
	{
		if (scaleX != value)
		{
			scaleX = value;
			transformIsInvalid = true;
		}
		return value;
	}

	function setScaleY(?value : Float)
	{
		if (scaleY != value)
		{
			scaleY = value;
			transformIsInvalid = true;
		}
		return value;
	}

	function setWidth(?value : Float)
	{
		if (width != value)
		{
			width = value;
			transformIsInvalid = true;
			canvasIsInvalid = true;
		}
		return value;
	}

	function setHeight(?value : Float)
	{
		if (height != value)
		{
			height = value;
			transformIsInvalid = true;
			canvasIsInvalid = true;
		}
		return value;
	}

	function getCanvas()
	{
		validateTransform();
		return canvas;
	}

	function getContext()
	{
		validateTransform();
		return canvas.getContext("2d");
	}
}
