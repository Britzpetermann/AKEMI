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
	
	var blend : GLDisplayObject;
	
	var startButton : GLInteractiveObject;
	
	var creditsButton : GLInteractiveObject;
	
	var modeButton : GLInteractiveObject;
	
	public function new()
	{
		stage = GLDisplayList.getDefault().stage;
	}
	
	@MessageHandler
	function handleLauncherStart(event : LauncherStart)
	{
        blend = new GLDisplayObject();
        blend.width = 2048;
        blend.height = 2048;
        blend.alpha = 0;
		blend.context.drawImage(imageRegistry.get(ImageId.SPLASH), 0, 0);
       	stage.addChild(blend);
		
 		startButton = new GLInteractiveObject();
 		startButton.skipDraw = true;
		startButton.width = 128;
        startButton.height = 64;
        startButton.alpha = 0.1;
        startButton.hitarea.position.set(0,0);
        startButton.hitarea.size.set(startButton.width,startButton.height);
       	stage.addChild(startButton);

        creditsButton = new GLInteractiveObject();
        creditsButton.width = 128;
        creditsButton.height = 128;
        creditsButton.alpha = 0;
        creditsButton.hitarea.position.set(20, 20);
        creditsButton.hitarea.size.set(creditsButton.width - 25, creditsButton.height - 25);
		creditsButton.context.drawImage(imageRegistry.get(ImageId.CREDITS_BTN), 0, 0);
       	stage.addChild(creditsButton);
       	
        modeButton = new GLInteractiveObject();
        modeButton.width = 128;
        modeButton.height = 128;
        modeButton.alpha = 0;
        modeButton.hitarea.position.set(20, 20);
        modeButton.hitarea.size.set(modeButton.width - 25, modeButton.height - 25);
		modeButton.context.drawImage(imageRegistry.get(ImageId.MODE_BTN), 0, 0);
       	stage.addChild(modeButton);
       	
       	layoutElements();
	}
	
	public function start()
	{
		GLTween.to(blend, 1500, {alpha : 1}).complete(handleStartFadeInComplete);
		//handeClick();
	}
	
	function handleStartFadeInComplete(tween : GLTween)
	{
		startButton.mouseDownSignaler.bind(handeClick);
	}
	
	function handeClick(?obj : GLInteractiveObject)
	{
		startButton.mouseDownSignaler.unbind(handeClick);
		stage.removeChild(startButton);
		commonModel.showScene = true;
		
		GLTween.to(blend, 2000, {alpha : 0}).complete(handleStartFadeOutComplete);
		GLTween.to(creditsButton, 1000, {alpha : 1});
		GLTween.to(modeButton, 1000, {alpha : 1});
		
		creditsButton.mouseDownSignaler.bind(handleCreditsButtonClick);
		modeButton.mouseDownSignaler.bind(handleModeButtonClick);
	}

	function handleStartFadeOutComplete(tween : GLTween)
	{
		stage.removeChild(startButton);
		startButton = null;
		
		stage.removeChild(blend);
		blend = null;
		
       	//stage.addChild(new GLStats());
	}
	
	function handleCreditsButtonClick(obj : GLInteractiveObject)
	{
		commonModel.toggleCredits();
	}
	
	function handleModeButtonClick(obj : GLInteractiveObject)
	{
		commonModel.toggleMode();
	}
	
	@MessageHandler
	function handleStageResize(event : StageResize)
	{
		layoutElements();
	}
	
	function layoutElements()
	{
		if (blend != null)
		{
        	blend.x = (stage.stageWidth - blend.width) / 2;
        	blend.y = (stage.stageHeight - blend.height) / 2;
		}
        
        if (startButton != null)
        {
        	startButton.x = (stage.stageWidth - startButton.width) / 2 - 5;
        	startButton.y = (stage.stageHeight - startButton.height) / 2 + 120;
        }
        
        creditsButton.x = stage.stageWidth - 130;
        creditsButton.y = stage.stageHeight - 130;
        
        modeButton.x = stage.stageWidth - 130 - 100;
        modeButton.y = stage.stageHeight - 130;
	}
}
