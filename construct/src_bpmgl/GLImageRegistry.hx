import js.Lib;

class GLImageRegistry
{
	public var images : Array<Image>;

	public function new()
	{
		images = new Array();
	}

	public function register(name : Dynamic, image : Image)
	{
		images[name] = image;
	}

	public function get(name : Dynamic)
	{
		return images[name];
	}
}
