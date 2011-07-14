package sa.controller;

import sa.model.CommonModel;

import sa.event.StageResize;
import sa.event.LauncherStart;

import js.Lib;
import js.Dom;

import bpmjs.Event;

import haxe.rtti.Infos;

@ManagedEvents("stageResize")
class StageResizeAction extends EventDispatcher, implements Infos
{
	@Inject
	public var commonModel : CommonModel;

	@Complete
	public function handleComplete()
	{
		updateSize();
	}

	@MessageHandler
	public function handleLauncherStart(event : LauncherStart)
	{
		GLAnimationFrame.run(timerUpdate);
		Lib.window.onresize = onResize;
	}

	function timerUpdate()
	{
		if (commonModel.windowWidth != Lib.window.innerWidth || commonModel.windowHeight != Lib.window.innerHeight)
			onResize();
	}

	function onResize(?event : Event)
	{
		updateSize();
		fireUpdate();
	}

	function updateSize()
	{
		commonModel.windowWidth = Std.int(Lib.window.innerWidth);
		commonModel.windowHeight = Std.int(Lib.window.innerHeight);

		var aspect = commonModel.windowWidth / commonModel.windowHeight;
		var fov = (aspect - 1.6) * 10;
		if (fov < -30)
			fov = -30;
		commonModel.projectionMatrix.perspective(40 - fov, aspect, 0.1, 500.0);

		GLDisplayList.getDefault().setStageSize(commonModel.windowWidth, commonModel.windowHeight);
	}

	private function fireUpdate()
	{
		dispatchEvent(new StageResize());
	}
}
