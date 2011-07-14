package bpmjs;

import bpmjs.ContextConfig;

class Context
{
	public var contextConfig : ContextConfig;
	public var objects : Array<ContextObject>;

	public function new()
	{
		objects = new Array();
	}

	public function addObject(name, type, object)
	{
		var contextObject = new ContextObject(name, type, object);
		objects.push(contextObject);
		return contextObject;
	}

	public function getObjectByName(name) : Dynamic
	{
		for(contextObject in objects)
		{
			if (contextObject.name == name)
				return contextObject.object;
		}
		return null;
	}

	public function getObjectByType<T>(type : Class<T>) : Dynamic
	{
		for(contextObject in objects)
		{
			if (contextObject.type == type)
				return contextObject.object;
		}
		return null;
	}
}

class ContextObject
{
	public var name : String;
	public var type : Class<Dynamic>;
	public var object : Dynamic;

	public function new(name, type, object)
	{
		this.name = name;
		this.type = type;
		this.object = object;
	}
}
