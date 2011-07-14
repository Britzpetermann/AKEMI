extern class Image implements ImageData
{
	var onload : Void->Void;
	var src : String;

	var width : Int;
	var height : Int;

	function new() : Void;
}
