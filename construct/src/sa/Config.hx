package sa;

import sa.controller.StageResizeAction;
import sa.controller.Launcher;
import sa.controller.AudioController;
import sa.controller.CameraController;

import sa.model.CommonModel;

import sa.view.CanvasView;
import sa.view.PreloaderView;
import sa.view.MainInterfaceView;

import js.Lib;

import haxe.rtti.Infos;

class Config implements Infos
{
	public var commonModel : CommonModel;

	public var textureRegistry : GLTextureRegistry;

	public var imageRegistry : GLImageRegistry;

	public var stageResizeAction : StageResizeAction;

	public var launcher : Launcher;

	public var audioController : AudioController;

	public var cameraController : CameraController;

	public var canvasView : CanvasView;

	public var preloaderView : PreloaderView;

	public var mainInterfaceView : MainInterfaceView;

	public function new()
	{
		controller();
		model();
		view();
	}

	function controller()
	{
		launcher = new Launcher();
		stageResizeAction = new StageResizeAction();
		audioController = new AudioController();
		cameraController = new CameraController();
	}

	function model()
	{
		commonModel = new CommonModel();
		commonModel.canvas = untyped Lib.document.getElementById("content");
		commonModel.gl = GL.initGL(commonModel.canvas, true);
		commonModel.windowWidth = Std.int(Lib.window.innerWidth / 2 * 2);
		commonModel.windowHeight = Std.int(Lib.window.innerHeight / 2 * 2);
		commonModel.showScene = false;
		commonModel.showCredits = false;

		imageRegistry = new GLImageRegistry();

		textureRegistry = new GLTextureRegistry();
		textureRegistry.gl = commonModel.gl;

		GLMouseRegistry.getInstance().init(commonModel.canvas);

		GLDisplayList.getDefault().stage.stageWidth = commonModel.windowWidth;
		GLDisplayList.getDefault().stage.stageHeight = commonModel.windowHeight;
	}

	function view()
	{
		canvasView = new CanvasView();
		preloaderView = new PreloaderView();
		preloaderView.complete();

		mainInterfaceView = new MainInterfaceView();
	}
}
