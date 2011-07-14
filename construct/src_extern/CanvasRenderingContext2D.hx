extern class CanvasRenderingContext2D {
	// back-reference to the canvas
	var canvas(default,null):Canvas;

	// state
	function save():Void; // push state on state stack
	function restore():Void; // pop state stack and restore state

	// transformations (default transform is the identity matrix)
	function scale( x:Float,y:Float):Void;
	function rotate( angle:Float):Void;
	function translate( x:Float, y:Float):Void;
	function transform( m11:Float, m12:Float, m21:Float, m22:Float, dx:Float, dy:Float):Void;
	function setTransform(m11:Float, m12:Float, m21:Float, m22:Float, dx:Float, dy:Float):Void;

	// compositing
	var globalAlpha:Float; // (default 1.0)
	var globalCompositeOperation:String; // (default source-over)

	// colors and styles
	var strokeStyle:Dynamic; // (default black)
	var fillStyle:Dynamic; // (default black)
	function createLinearGradient(x0:Float, y0:Float, x1:Float, y1:Float):CanvasGradient;
	function createRadialGradient(x0:Float, y0:Float, r0:Float, x1:Float, y1:Float, r1:Float):CanvasGradient;
	function createPattern(image:Image, repetition:String):CanvasPattern;

	// line caps/joins
	var lineWidth:Float; // (default 1)
	var lineCap:String; // "butt", "round", "square" (default "butt")
	var lineJoin:String; // "round", "bevel", "miter" (default "miter")
	var miterLimit:Float; // (default 10)

	// shadows
	var shadowOffsetX:Float; // (default 0)
	var shadowOffsetY:Float; // (default 0)
	var shadowBlur:Float; // (default 0)
	var shadowColor:String; // (default transparent black)

	// rects
	function clearRect( x:Float, y:Float, w:Float, h:Float):Void;
	function fillRect( x:Float, y:Float, w:Float, h:Float):Void;
	function strokeRect( x:Float, y:Float, w:Float, h:Float):Void;

	// path API
	function beginPath():Void;
	function closePath():Void;
	function moveTo( x:Float, y:Float):Void;
	function lineTo( x:Float, y:Float):Void;
	function quadraticCurveTo( cpx:Float, cpy:Float, x:Float, y:Float):Void;
	function bezierCurveTo( cp1x:Float, cp1y:Float, cp2x:Float, cp2y:Float, x:Float, y:Float):Void;
	function arcTo( x1:Float, y1:Float, x2:Float, y2:Float, radius:Float):Void;
	function rect( x:Float, y:Float, w:Float, h:Float):Void;
	function arc( x:Float, y:Float, radius:Float, startAngle:Float, endAngle:Float, anticlockwise:Bool):Void;
	function fill():Void;
	function stroke():Void;
	function clip():Void;
	function isPointInPath( x:Float, y:Float):Bool;

	// text
	var font:String; // (default 10px sans-serif)
	var textAlign:String; // "start", "end", "left", "right", "center" (default: "start")
	var textBaseline:String; // "top", "hanging", "middle", "alphabetic", "ideographic", "bottom" (default: "alphabetic")
	function fillText( text:String, x:Float, y:Float, ?maxWidth:Float):Void;
	function strokeText( text:String, x:Float, y:Float, ?maxWidth:Float):Void;
	function measureText( text:String ):TextMetrics;

	// drawing images
	function drawImage( image:Dynamic, sx:Float, sy:Float, ?sw:Float, ?sh:Float, ?dx:Float, ?dy:Float, ?dw:Float, ?dh:Float):Void;

	// pixel manipulation
	function createImageData(sw:Float, sh:Float):ImageData;
	function getImageData(sx:Float, sy:Float, sw:Float, sh:Float):ImageData;
	function putImageData(imagedata:ImageData, dx:Float, dy:Float, ?dirtyX:Float, ?dirtyY:Float, ?dirtyWidth:Float, ?dirtyHeight:Float):Void;
}
