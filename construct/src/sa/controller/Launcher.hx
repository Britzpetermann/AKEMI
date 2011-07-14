package sa.controller;

import sa.event.LauncherStart;
import sa.view.TextureId;
import sa.view.ImageId;
import sa.view.PreloaderView;

import bpmjs.TaskGroup;
import bpmjs.ImageLoaderTask;
import bpmjs.Event;
import hsl.haxe.Signal;
import js.Lib;

import haxe.rtti.Infos;

@ManagedEvents("launcherStart")
class Launcher extends EventDispatcher, implements Infos
{
	@Inject
	var textureRegistry : GLTextureRegistry;

	@Inject
	var imageRegistry : GLImageRegistry;

	@Inject
	var preloaderView : PreloaderView;

	@PostComplete
	public function handlePostComplete()
	{
		preloaderView.start("Fonts");

		//GLUtil.loadFonts([""], fontsLoaded);
		fontsLoaded();
	}

	function fontsLoaded()
	{
		preloaderView.complete();

		var gl = textureRegistry.gl;

		var group = new TaskGroup();
		group.add(createTextureTask("image/Stripe1.png", TextureId.STRIPE1, textureRegistry.gl.LINEAR));
		group.add(createTextureTask("image/Flighter.png", TextureId.FLIGHTER, textureRegistry.gl.LINEAR));
		group.add(createTextureTask("image/Stripe2.png", TextureId.STRIPE2, textureRegistry.gl.LINEAR));
		group.add(createTextureTask("image/Stones.png", TextureId.STONES_RIGHT, textureRegistry.gl.LINEAR));
		group.add(createTextureTask("image/Stones2.png", TextureId.STONES_LEFT, textureRegistry.gl.LINEAR));
		group.add(createTextureTask("image/RockLeft2.png", TextureId.ROCK_LEFT, textureRegistry.gl.LINEAR));
		group.add(createTextureTask("image/RockRight3.png", TextureId.ROCK_RIGHT, textureRegistry.gl.LINEAR));
		group.add(createTextureTask("image/BG3.jpg", TextureId.BACKGROUND, textureRegistry.gl.NEAREST));
		group.add(createTextureTask("image/Credits2.png", TextureId.CREDITS, textureRegistry.gl.LINEAR));
		group.add(createImageTask("image/SplashWithText.jpg", ImageId.SPLASH));
		group.add(createImageTask("image/CreditsBt.png", ImageId.CREDITS_BTN));
		group.add(createImageTask("image/ModeBt.png", ImageId.MODE_BTN));
		group.completeSignaler.bind(handleComplete);

		preloaderView.max = group.tasks.length + 1;
		group.start();
	}

	function handleComplete(task : TaskGroup)
	{
		try
		{
			dispatchEvent(new LauncherStart());
		}
		catch(e : Dynamic)
		{
			trace("Could not launch Experiment!\n\t" + e);
		}
	}

	function createTextureTask(location : String, texture : TextureId, scaleMod : Int)
	{
		var inst = this;
		var imageLoaderTask = new ImageLoaderTask();
		imageLoaderTask.location = location;
		imageLoaderTask.startSignaler.bind(function (task : ImageLoaderTask)
		{
			inst.preloaderView.start(task.location);
		});
		imageLoaderTask.completeSignaler.bind(function (task : ImageLoaderTask)
		{
			inst.preloaderView.complete();
			inst.textureRegistry.register(texture, inst.textureRegistry.createGLTextureFromImage(task.image, scaleMod));
		});
		return imageLoaderTask;
	}

	function createImageTask(location : String, image : ImageId)
	{
		var inst = this;
		var imageLoaderTask = new ImageLoaderTask();
		imageLoaderTask.location = location;
		imageLoaderTask.startSignaler.bind(function (task : ImageLoaderTask)
		{
			inst.preloaderView.start(task.location);
		});
		imageLoaderTask.completeSignaler.bind(function (task : ImageLoaderTask)
		{
			inst.preloaderView.complete();
			inst.imageRegistry.register(image, task.image);
		});
		return imageLoaderTask;
	}
}
