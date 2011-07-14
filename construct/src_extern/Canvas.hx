extern class Canvas
{
	public var width : Float;
	public var height : Float;

	public var clientWidth : Float;
	public var clientHeight : Float;

	public var style : Dynamic;

	public var onmousedown : Dynamic->Void;
	public var onmousemove : Dynamic->Void;

	function getContext(context : String, ?config : Dynamic) : Dynamic;
}
