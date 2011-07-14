class GLTweenManager
{
	static var instance : GLTweenManager;

	public static function getInstance()
	{
		if (instance == null)
			instance = new GLTweenManager();
		return instance;
	}

	var tweens : Array<GLTween>;
	var time : Float;

	function new()
	{
		time = Date.now().getTime();
		tweens = new Array();
		GLAnimationFrame.run(tick);
	}

	public function add(tween : GLTween)
	{
		tween.init(time);
		tweens.push(tween);
	}

	function tick()
	{
		time = Date.now().getTime();

		for(tween in tweens)
		{
			tween.run(time);
			if (!tween.isActive)
				tweens.remove(tween);
		}
	}
}
