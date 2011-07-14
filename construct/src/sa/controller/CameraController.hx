package sa.controller;

import sa.model.CommonModel;
import sa.event.LauncherStart;

import haxe.rtti.Infos;
import haxe.Timer;

class CameraController implements Infos
{
	@Inject
	var commonModel : CommonModel;

	var cameraPosition : MoveSetVec2;

	var lastTick : Float;

	public function new()
	{
		cameraPosition = new MoveSetVec2(new Vec2(0,0), new Vec2(0,0), new Vec2(0.0005,0.0005));
	}

	@MessageHandler
	function handleLauncherStart(event : LauncherStart)
	{
		GLMouseRegistry.getInstance().mouseMoveSignaler.bind(handleMouseMove);
		GLAnimationFrame.run(tick);
	}

	function tick()
	{
		var dt = Date.now().getTime() - lastTick;
		var factor = dt / 16;
		cameraPosition.move(factor);

		commonModel.cameraMatrix.lookAt(new Vec3(cameraPosition.current.x,cameraPosition.current.y,0), new Vec3(0,0,-9), new Vec3(0,1,0));
		lastTick = Date.now().getTime();
	}

	function handleMouseMove(mousePos : Vec2)
	{
		var newPosition = mousePos.clone();
		newPosition.subtract(0.5, 0.5);
		newPosition.multiply(-5, 5);

		cameraPosition.to = newPosition;
	}

}
