package bpmjs;

class ImageLoaderTask extends Task<ImageLoaderTask>
{
	public var location : String;

	public var image : Image;

	override function doStart()
	{
		image = new Image();
		image.onload = handleImageLoaded;
		image.src = location;
	}

	function handleImageLoaded()
	{
		complete();
	}
}
