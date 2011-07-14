package sa;

import bpmjs.ContextBuilder;

class Main
{
	static function globalErrorHandler(msg : String, stack : Array<String>)
	{
        //trace("Uncaugt error: " + msg);
        //for(line in stack)
        //	trace(line);
        	
        return true;
    }
    
    static function main()
    {
        js.Lib.setErrorHandler(globalErrorHandler);
	}
	
	function new(canvas : Canvas)
	{
		try
		{
			var context = ContextBuilder.build(Config);
		}
		catch(e : Dynamic)
		{
			trace("Error building application: " + e);
		}
	}
}
