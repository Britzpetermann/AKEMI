package sa.view;
import sa.event.StageResize;
import haxe.rtti.Infos;
import sa.model.CommonModel;
import sa.event.LauncherStart;
import js.Lib;
import bpmjs.Stats;

class CanvasView implements Infos
{
	@Inject
	var commonModel : CommonModel;

	@Inject
	var textureRegistry : GLTextureRegistry;

	@Inject
	var mainInterfaceView : MainInterfaceView;

	var gl : WebGLRenderingContext;
	var canvas : Canvas;

	var floorRenderer : FloorRenderer;
	var debugRenderer : DebugRenderer;
	var displayListRenderer : GLDisplayListRenderer;

	public function new() {}

	@MessageHandler
	function handleLauncherStart(event : LauncherStart)
	{
		gl = commonModel.gl;
		canvas = commonModel.canvas;

		updateCanvas();

		floorRenderer = new FloorRenderer();
		floorRenderer.projectionMatrix = commonModel.projectionMatrix;
		floorRenderer.cameraMatrix = commonModel.cameraMatrix;
		floorRenderer.init();

		debugRenderer = new DebugRenderer();
		debugRenderer.projectionMatrix = commonModel.projectionMatrix;
		debugRenderer.cameraMatrix = commonModel.cameraMatrix;
		debugRenderer.init();

		displayListRenderer = new GLDisplayListRenderer();
		displayListRenderer.init();

		var inst = this;
		GLTimeout.executeLater(function()
		{
			GLAnimationFrame.run(inst.tick);
		});
	}

	@MessageHandler
	function handleStageResize(event : StageResize)
	{
		updateCanvas();
	}

	function updateCanvas()
	{
		canvas.width = commonModel.windowWidth;
		canvas.height = commonModel.windowHeight;
	}

	function tick()
	{
		Stats.clear();
		Stats.measureFPS();

		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		if (commonModel.showScene)
			renderScene();

		renderInterface();
	}

	function renderScene()
	{
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		floorRenderer.render(canvas.width, canvas.height);
		//debugRenderer.render(canvas.width, canvas.height);
	}

	function renderInterface()
	{
		GLDisplayList.getDefault().dispatchEnterFrame();
		displayListRenderer.render(canvas.width, canvas.height);
	}
}
