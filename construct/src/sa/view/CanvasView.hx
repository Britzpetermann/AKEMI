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

	var framebuffer : GLFramebuffer;
	var backgroundRenderer : BackgroundRenderer;
	var underWaterRenderer : UnderWaterRenderer;
	var textureRenderer : TextureRenderer;
	var planktonRenderer : PlanktonRenderer;
	var rocksRenderer : RocksRenderer;
	var saRenderer : StrangeAttractorRenderer;
	var displayListRenderer : GLDisplayListRenderer;
	var creditsRenderer : CreditsRenderer;

	public function new() {}

	@MessageHandler
	function handleLauncherStart(event : LauncherStart)
	{
		commonModel.modeChangeSignaler.bind(handleModeChanged);
		gl = commonModel.gl;
		canvas = commonModel.canvas;

		updateCanvas();

		framebuffer = new GLFramebufferFactory(gl).create(128, 128);

		backgroundRenderer = new BackgroundRenderer();
		backgroundRenderer.texture = textureRegistry.get(TextureId.BACKGROUND);
		backgroundRenderer.projectionMatrix = commonModel.projectionMatrix;
		backgroundRenderer.cameraMatrix = commonModel.cameraMatrix;
		backgroundRenderer.init();

		planktonRenderer = new PlanktonRenderer();
		planktonRenderer.projectionMatrix = commonModel.projectionMatrix;
		planktonRenderer.cameraMatrix = commonModel.cameraMatrix;
		planktonRenderer.init();

		creditsRenderer = new CreditsRenderer();
		creditsRenderer.commonModel = commonModel;
		creditsRenderer.texture = textureRegistry.get(TextureId.CREDITS);
		creditsRenderer.projectionMatrix = commonModel.projectionMatrix;
		creditsRenderer.cameraMatrix = commonModel.cameraMatrix;
		//creditsRenderer.init(gl);

		underWaterRenderer = new UnderWaterRenderer();
		//underWaterRenderer.init(gl);

		textureRenderer = new TextureRenderer();
		textureRenderer.texture = framebuffer.texture;
		//textureRenderer.init(gl);

		saRenderer = new StrangeAttractorRenderer();
		saRenderer.projectionMatrix = commonModel.projectionMatrix;
		saRenderer.cameraMatrix = commonModel.cameraMatrix;
		//saRenderer.init(gl);

		rocksRenderer = new RocksRenderer();
		rocksRenderer.textureRegistry = textureRegistry;
		rocksRenderer.projectionMatrix = commonModel.projectionMatrix;
		rocksRenderer.cameraMatrix = commonModel.cameraMatrix;
		//rocksRenderer.init(gl);

		displayListRenderer = new GLDisplayListRenderer();
		displayListRenderer.init();

		var inst = this;
		GLTimeout.executeLater(1000, function()
		{
			inst.mainInterfaceView.start();
			GLAnimationFrame.run(inst.tick);
		});
	}

	function handleModeChanged(newMode : Int)
	{
		saRenderer.updateMode(newMode);
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
		gl.clearColor(0.0, 1.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		if (commonModel.showScene)
			renderScene();
		else
			saRenderer.start();

		renderInterface();
	}

	function renderScene()
	{
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		backgroundRenderer.render(canvas.width, canvas.height);

		planktonRenderer.peak = commonModel.peak;
		planktonRenderer.attractorPosition = saRenderer.effectivePosition;
		planktonRenderer.render(canvas.width, canvas.height);

		//rocksRenderer.render(canvas.width, canvas.height);

		gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer.framebuffer);
		gl.viewport(0, 0, framebuffer.width, framebuffer.height);
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		//underWaterRenderer.render(framebuffer.width, framebuffer.height, 1);

		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.viewport(0, 0, canvas.width, canvas.height);

		saRenderer.peak = commonModel.peak;
		//saRenderer.render(canvas.width, canvas.height);

		//creditsRenderer.render(canvas.width, canvas.height);

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
		//textureRenderer.render(canvas.width, canvas.height);
		gl.disable(gl.BLEND);
	}

	function renderInterface()
	{
		GLDisplayList.getDefault().dispatchEnterFrame();
		displayListRenderer.render(canvas.width, canvas.height);
	}
}
