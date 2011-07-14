import hsl.haxe.DirectSignaler;
import hsl.haxe.Signaler;

class GLTween
{
	public static function to(o : Dynamic, ms : Float, params : Dynamic) : GLTween
	{
		var result = new GLTween(o, ms, params);
		GLTweenManager.getInstance().add(result);
		return result;
	}

	public var isActive : Bool;
	public var startTime : Float;
	public var o : Dynamic;
	public var ms : Float;
	public var params : Dynamic;
	public var properties : Array<Property>;
	public var easeFunction : Float->Float->Float->Float->Float;
	public var completeSignaler : Signaler<GLTween>;

	public function new(o : Dynamic, ms : Float, params : Dynamic)
	{
		this.o = o;
		this.ms = ms;
		this.params = params;

		isActive = true;
		properties = new Array();
		completeSignaler = new DirectSignaler(this);
	}

	public function complete(method : GLTween->Void)
	{
		completeSignaler.bind(method);
		return this;
	}

	public function init(time : Float)
	{
		this.startTime = time;
		this.easeFunction = ease.Quad.easeInOut;
		var fields = Reflect.fields(params);
		for (field in fields)
		{
			if (Reflect.hasField(o, field))
			{
				var property = new Property();
				property.from = Reflect.field(o, field);
				property.to = Reflect.field(params, field);
				property.field = field;
				properties.push(property);
			}
			else
			{
				trace("Unkown field: " + field);
			}
		}
	}

	public function run(time : Float)
	{
		var dt = (time - startTime);
		if (dt > ms)
		{
			dt = ms;
			if (isActive)
			{
				completeSignaler.dispatch(this);
				isActive = false;
			}
		}

		for(property in properties)
		{
			property.ease(this, dt);
		}
	}
}

class Property
{
	public var from : Dynamic;
	public var to : Dynamic;
	public var field : String;

	public function new(){}

	public function ease(tween : GLTween, dt : Float)
	{
		var o = tween.o;
		var value = tween.easeFunction(dt, from, to - from, tween.ms);
		Reflect.setField(o, field, value);
	}
}
