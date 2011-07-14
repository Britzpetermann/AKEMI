package sa.controller;

import sa.event.LauncherStart;
import sa.model.CommonModel;

import haxe.rtti.Infos;
import haxe.Timer;
import js.Lib;

class AudioController implements Infos
{
	@Inject
	public var commonModel : CommonModel;

	var audio : Audio;
	var peaks : Array<Float>;

	public function new()
	{
		audio = cast Lib.document.getElementById("audio");
		untyped audio.loop = "loop";

		untyped
		{
			this.peaks = peak;
		}
	}

	@MessageHandler
	public function handleLauncherStart(event : LauncherStart)
	{
		audio.play();
		var timer = new Timer(Std.int(1000 / 30));
		timer.run = handleTimer;
	}

	function handleTimer()
	{
		var frame : Int = Math.round(audio.currentTime * 1000 / 30);
		if (frame < peaks.length)
			commonModel.peak = peaks[frame] / 1000;
		else
			commonModel.peak = 0;
	}
}
