package bpmjs;

import haxe.Timer;
import js.Lib;
import js.Dom;

class Stats {

	private static var initialized : Bool;
	private static var lastTime : Float;
	private static var fps : Float = 0;
	private static var times : Array<{start : Float, stop : Float, message : String}>;
	private static var finishedTimes : Array<{start : Float, stop : Float, message : String}>;
	private static var messages : Array<String>;

	public static function init(content : HtmlDom)
	{
		clear();
		initialized = true;
	}

	public static function clear()
	{
		times = new Array();
		finishedTimes = new Array();
		messages = new Array();
	}

	public static function measureFPS()
	{
		checkInit();
		var time = Date.now().getTime();
		fps = 1000 / (time - lastTime);
		lastTime = time;
	}

	public static function checkStart(message : String)
	{
		checkInit();
		var time = Date.now().getTime();
		times.push({start : time, stop : 0.0, message : message});
	}

	public static function addMessage(message : String)
	{
		checkInit();
		messages.push(message);
	}

	public static function checkStop()
	{
		checkInit();

		var timeAndMessage = times.pop();
		timeAndMessage.stop = Date.now().getTime();

		finishedTimes.push(timeAndMessage);
	}

	public static function getContents()
	{
		var finalMessages : Array<String> = new Array();

		finalMessages.push("FPS: " + Math.round(fps));

		for(timeAndMessage in finishedTimes)
		{
			finalMessages.push(" > " + timeAndMessage.message + ": " + (timeAndMessage.stop - timeAndMessage.start) + " ms");
		}

		for(message in messages)
		{
			finalMessages.push(message);
		}

		return finalMessages;
	}

	static function checkInit()
	{
		if (!initialized)
			init(Lib.document.body);
	}

}
