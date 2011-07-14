package sa.model;

import hsl.haxe.DirectSignaler;
import hsl.haxe.Signal;
import hsl.haxe.Signaler;

import js.Dom;

class CommonModel
{
	public var modeChangeSignaler : Signaler<Int>;

	public var gl : WebGLRenderingContext;

	public var canvas : Canvas;

	public var windowWidth : Int;

	public var windowHeight : Int;

	public var peak : Float;

	public var showScene : Bool;

	public var showCredits : Bool;

	public var projectionMatrix : Matrix4;

	public var cameraMatrix : Matrix4;

	public var mode : Int;

	public function new()
	{
		projectionMatrix = new Matrix4();
		projectionMatrix.perspective(45, 1/1, 0.1, 100.0);

		cameraMatrix = new Matrix4();
		cameraMatrix.lookAt(new Vec3(0,0,0), new Vec3(0,0,-15), new Vec3(0,1,0));

		modeChangeSignaler = new DirectSignaler(this);
	}

	public function toggleMode()
	{
		mode++;
		mode = mode % 3;
		modeChangeSignaler.dispatch(mode);
	}

	public function toggleCredits()
	{
		showCredits = !showCredits;
	}
}
