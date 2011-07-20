package sa.view;

import sa.event.LauncherStart;
import sa.event.StageResize;

import sa.model.CommonModel;

import hsl.haxe.DirectSignaler;
import hsl.haxe.Signaler;

import haxe.rtti.Infos;

class MainInterfaceView implements Infos
{
	@Inject
	var imageRegistry : GLImageRegistry;

	@Inject
	var commonModel : CommonModel;

	public var stage : GLStage;

	public function new()
	{
		stage = GLDisplayList.getDefault().stage;
	}

	@MessageHandler
	function handleLauncherStart(event : LauncherStart)
	{
		stage.addChild(new GLStats());
	}
}
