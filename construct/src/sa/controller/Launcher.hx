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
		var gl = textureRegistry.gl;

		var group = new TaskGroup();
		group.completeSignaler.bind(handleComplete);

		preloaderView.max = group.tasks.length;
		group.start();
	}

	function handleComplete(task : TaskGroup)
	{
		preloaderView.complete();
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
