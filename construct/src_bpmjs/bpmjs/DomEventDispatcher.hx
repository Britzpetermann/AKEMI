package bpmjs;

import bpmjs.Event;
import bpmjs.MouseEvent;

import js.Dom;

class DomEventDispatcher extends EventDispatcher {

	static public function lazyInit(domElement : HtmlDom) : DomEventDispatcher
	{
		var dispatcher = untyped domElement.dispatcher;
		if (dispatcher == null)
		{
			dispatcher = new DomEventDispatcher(domElement);
			untyped domElement.dispatcher = dispatcher;
		}

		return dispatcher;
	}

	private var domElement : HtmlDom;

	public function new(element : HtmlDom)
	{
		super();
		domElement = element;
	}

	override public function addEventListener(type : String, listener : Event->Void)
	{
		switch( type ) {
			case MouseEvent.CLICK:
				appendListenerToHtmlElement("click", handleClick);
			case MouseEvent.ROLL_OVER:
				appendListenerToHtmlElement("mouseover", handleRollOver);
			case MouseEvent.ROLL_OUT:
				appendListenerToHtmlElement("mouseout", handleRollOut);
		}

		super.addEventListener(type, listener);
	}

	private function appendListenerToHtmlElement(type : String, method) : Void
	{
		if (js.Lib.isIE)
		{
			untyped domElement.attachEvent(type, method, false);
		}
		else
		{
			untyped domElement.addEventListener(type, method, false);
		}
	}

	private function handleClick() : Void
	{
		dispatchEvent(new MouseEvent(MouseEvent.CLICK));
	}

	private function handleRollOver() : Void
	{
		dispatchEvent(new MouseEvent(MouseEvent.ROLL_OVER));
	}

	private function handleRollOut() : Void
	{
		dispatchEvent(new MouseEvent(MouseEvent.ROLL_OUT));
	}
}
