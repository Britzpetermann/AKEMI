import hsl.haxe.DirectSignaler;
import hsl.haxe.Signaler;

class GLInteractiveObject extends GLDisplayObject
{
	public var hitarea : GLHitarea;

	public var mouseDownSignaler : Signaler<GLInteractiveObject>;

	public function new()
	{
		super();

		GLDisplayList.getDefault().initInteractiveObject(this);

		hitarea = new GLHitarea();
	}
}
