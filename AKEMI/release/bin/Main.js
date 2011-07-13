$estr = function() { return js.Boot.__string_rec(this,''); }
GLDisplayObject = function(p) { if( p === $_ ) return; {
	if(GLDisplayObject.nextId == null) GLDisplayObject.nextId = 0;
	this.id = GLDisplayObject.nextId;
	GLDisplayObject.nextId++;
	GLDisplayList.getDefault().initDisplayObject(this);
	this.skipDraw = false;
	this.alpha = 1;
	this.matrix = new Matrix4();
	this.setX(0);
	this.setY(0);
	this.setWidth(256);
	this.setHeight(128);
	this.setScaleX(1);
	this.setScaleY(1);
	this.transformIsInvalid = true;
	this.canvas = js.Lib.document.createElement("canvas");
	this.getCanvas().width = this.width;
	this.getCanvas().height = this.height;
	var context = this.getCanvas().getContext("2d");
	context.fillStyle = "rgba(0, 0, 0, 0.0)";
	context.fillRect(0,0,this.width,this.height);
	this.canvasIsInvalid = true;
}}
GLDisplayObject.__name__ = ["GLDisplayObject"];
GLDisplayObject.nextId = null;
GLDisplayObject.prototype.id = null;
GLDisplayObject.prototype.stage = null;
GLDisplayObject.prototype.skipDraw = null;
GLDisplayObject.prototype.alpha = null;
GLDisplayObject.prototype.x = null;
GLDisplayObject.prototype.y = null;
GLDisplayObject.prototype.width = null;
GLDisplayObject.prototype.height = null;
GLDisplayObject.prototype.scaleX = null;
GLDisplayObject.prototype.scaleY = null;
GLDisplayObject.prototype.transformIsInvalid = null;
GLDisplayObject.prototype.canvasIsInvalid = null;
GLDisplayObject.prototype.canvas = null;
GLDisplayObject.prototype.context = null;
GLDisplayObject.prototype.matrix = null;
GLDisplayObject.prototype.enterFrameSignaler = null;
GLDisplayObject.prototype.validateTransform = function() {
	if(this.transformIsInvalid) {
		this.transformIsInvalid = false;
		if(this.getCanvas().width != this.width) this.getCanvas().width = this.width;
		if(this.getCanvas().height != this.height) this.getCanvas().height = this.height;
		this.matrix.identity();
		this.matrix.appendTranslation(this.x,this.y,0);
		this.matrix.appendScale(this.scaleX,this.scaleY,1);
	}
}
GLDisplayObject.prototype.toString = function() {
	return "DisplayObject: " + this.id;
}
GLDisplayObject.prototype.setX = function(value) {
	if(this.x != value) {
		this.x = value;
		this.transformIsInvalid = true;
	}
	return value;
}
GLDisplayObject.prototype.setY = function(value) {
	if(this.y != value) {
		this.y = value;
		this.transformIsInvalid = true;
	}
	return value;
}
GLDisplayObject.prototype.setScaleX = function(value) {
	if(this.scaleX != value) {
		this.scaleX = value;
		this.transformIsInvalid = true;
	}
	return value;
}
GLDisplayObject.prototype.setScaleY = function(value) {
	if(this.scaleY != value) {
		this.scaleY = value;
		this.transformIsInvalid = true;
	}
	return value;
}
GLDisplayObject.prototype.setWidth = function(value) {
	if(this.width != value) {
		this.width = value;
		this.transformIsInvalid = true;
		this.canvasIsInvalid = true;
	}
	return value;
}
GLDisplayObject.prototype.setHeight = function(value) {
	if(this.height != value) {
		this.height = value;
		this.transformIsInvalid = true;
		this.canvasIsInvalid = true;
	}
	return value;
}
GLDisplayObject.prototype.getCanvas = function() {
	this.validateTransform();
	return this.canvas;
}
GLDisplayObject.prototype.getContext = function() {
	this.validateTransform();
	return this.getCanvas().getContext("2d");
}
GLDisplayObject.prototype.__class__ = GLDisplayObject;
GLInteractiveObject = function(p) { if( p === $_ ) return; {
	GLDisplayObject.call(this);
	GLDisplayList.getDefault().initInteractiveObject(this);
	this.hitarea = new GLHitarea();
}}
GLInteractiveObject.__name__ = ["GLInteractiveObject"];
GLInteractiveObject.__super__ = GLDisplayObject;
for(var k in GLDisplayObject.prototype ) GLInteractiveObject.prototype[k] = GLDisplayObject.prototype[k];
GLInteractiveObject.prototype.hitarea = null;
GLInteractiveObject.prototype.mouseDownSignaler = null;
GLInteractiveObject.prototype.__class__ = GLInteractiveObject;
if(typeof haxe=='undefined') haxe = {}
if(!haxe.rtti) haxe.rtti = {}
haxe.rtti.XmlParser = function(p) { if( p === $_ ) return; {
	this.root = new Array();
}}
haxe.rtti.XmlParser.__name__ = ["haxe","rtti","XmlParser"];
haxe.rtti.XmlParser.prototype.root = null;
haxe.rtti.XmlParser.prototype.curplatform = null;
haxe.rtti.XmlParser.prototype.sort = function(l) {
	if(l == null) l = this.root;
	l.sort(function(e1,e2) {
		var n1 = (function($this) {
			var $r;
			var $e = e1;
			switch( $e[1] ) {
			case 0:
			var p = $e[2];
			{
				$r = " " + p;
			}break;
			default:{
				$r = haxe.rtti.TypeApi.typeInfos(e1).path;
			}break;
			}
			return $r;
		}(this));
		var n2 = (function($this) {
			var $r;
			var $e = e2;
			switch( $e[1] ) {
			case 0:
			var p = $e[2];
			{
				$r = " " + p;
			}break;
			default:{
				$r = haxe.rtti.TypeApi.typeInfos(e2).path;
			}break;
			}
			return $r;
		}(this));
		if(n1 > n2) return 1;
		return -1;
	});
	{
		var _g = 0;
		while(_g < l.length) {
			var x = l[_g];
			++_g;
			var $e = x;
			switch( $e[1] ) {
			case 0:
			var l1 = $e[4];
			{
				this.sort(l1);
			}break;
			case 1:
			var c = $e[2];
			{
				c.fields = this.sortFields(c.fields);
				c.statics = this.sortFields(c.statics);
			}break;
			case 2:
			var e = $e[2];
			{
				null;
			}break;
			case 3:
			{
				null;
			}break;
			}
		}
	}
}
haxe.rtti.XmlParser.prototype.sortFields = function(fl) {
	var a = Lambda.array(fl);
	a.sort(function(f1,f2) {
		var v1 = haxe.rtti.TypeApi.isVar(f1.type);
		var v2 = haxe.rtti.TypeApi.isVar(f2.type);
		if(v1 && !v2) return -1;
		if(v2 && !v1) return 1;
		if(f1.name == "new") return -1;
		if(f2.name == "new") return 1;
		if(f1.name > f2.name) return 1;
		return -1;
	});
	return Lambda.list(a);
}
haxe.rtti.XmlParser.prototype.process = function(x,platform) {
	this.curplatform = platform;
	this.xroot(new haxe.xml.Fast(x));
}
haxe.rtti.XmlParser.prototype.mergeRights = function(f1,f2) {
	if(f1.get == haxe.rtti.Rights.RInline && f1.set == haxe.rtti.Rights.RNo && f2.get == haxe.rtti.Rights.RNormal && f2.set == haxe.rtti.Rights.RMethod) {
		f1.get = haxe.rtti.Rights.RNormal;
		f1.set = haxe.rtti.Rights.RMethod;
		return true;
	}
	return false;
}
haxe.rtti.XmlParser.prototype.mergeFields = function(f,f2) {
	return haxe.rtti.TypeApi.fieldEq(f,f2) || f.name == f2.name && (this.mergeRights(f,f2) || this.mergeRights(f2,f)) && haxe.rtti.TypeApi.fieldEq(f,f2);
}
haxe.rtti.XmlParser.prototype.mergeClasses = function(c,c2) {
	if(c.isInterface != c2.isInterface) return false;
	if(this.curplatform != null) c.platforms.add(this.curplatform);
	if(c.isExtern != c2.isExtern) c.isExtern = false;
	{ var $it0 = c2.fields.iterator();
	while( $it0.hasNext() ) { var f2 = $it0.next();
	{
		var found = null;
		{ var $it1 = c.fields.iterator();
		while( $it1.hasNext() ) { var f = $it1.next();
		if(this.mergeFields(f,f2)) {
			found = f;
			break;
		}
		}}
		if(found == null) c.fields.add(f2);
		else if(this.curplatform != null) found.platforms.add(this.curplatform);
	}
	}}
	{ var $it2 = c2.statics.iterator();
	while( $it2.hasNext() ) { var f2 = $it2.next();
	{
		var found = null;
		{ var $it3 = c.statics.iterator();
		while( $it3.hasNext() ) { var f = $it3.next();
		if(this.mergeFields(f,f2)) {
			found = f;
			break;
		}
		}}
		if(found == null) c.statics.add(f2);
		else if(this.curplatform != null) found.platforms.add(this.curplatform);
	}
	}}
	return true;
}
haxe.rtti.XmlParser.prototype.mergeEnums = function(e,e2) {
	if(e.isExtern != e2.isExtern) return false;
	if(this.curplatform != null) e.platforms.add(this.curplatform);
	{ var $it0 = e2.constructors.iterator();
	while( $it0.hasNext() ) { var c2 = $it0.next();
	{
		var found = null;
		{ var $it1 = e.constructors.iterator();
		while( $it1.hasNext() ) { var c = $it1.next();
		if(haxe.rtti.TypeApi.constructorEq(c,c2)) {
			found = c;
			break;
		}
		}}
		if(found == null) return false;
		if(this.curplatform != null) found.platforms.add(this.curplatform);
	}
	}}
	return true;
}
haxe.rtti.XmlParser.prototype.mergeTypedefs = function(t,t2) {
	if(this.curplatform == null) return false;
	t.platforms.add(this.curplatform);
	t.types.set(this.curplatform,t2.type);
	return true;
}
haxe.rtti.XmlParser.prototype.merge = function(t) {
	var inf = haxe.rtti.TypeApi.typeInfos(t);
	var pack = inf.path.split(".");
	var cur = this.root;
	var curpack = new Array();
	pack.pop();
	{
		var _g = 0;
		while(_g < pack.length) {
			var p = pack[_g];
			++_g;
			var found = false;
			{
				var _g1 = 0;
				try {
					while(_g1 < cur.length) {
						var pk = cur[_g1];
						++_g1;
						var $e = pk;
						switch( $e[1] ) {
						case 0:
						var subs = $e[4], pname = $e[2];
						{
							if(pname == p) {
								found = true;
								cur = subs;
								throw "__break__";
							}
						}break;
						default:{
							null;
						}break;
						}
					}
				} catch( e ) { if( e != "__break__" ) throw e; }
			}
			curpack.push(p);
			if(!found) {
				var pk = new Array();
				cur.push(haxe.rtti.TypeTree.TPackage(p,curpack.join("."),pk));
				cur = pk;
			}
		}
	}
	var prev = null;
	{
		var _g = 0;
		while(_g < cur.length) {
			var ct = cur[_g];
			++_g;
			var tinf;
			try {
				tinf = haxe.rtti.TypeApi.typeInfos(ct);
			}
			catch( $e0 ) {
				{
					var e = $e0;
					continue;
				}
			}
			if(tinf.path == inf.path) {
				if(tinf.module == inf.module && tinf.doc == inf.doc && tinf.isPrivate == inf.isPrivate) var $e = ct;
				switch( $e[1] ) {
				case 1:
				var c = $e[2];
				{
					var $e = t;
					switch( $e[1] ) {
					case 1:
					var c2 = $e[2];
					{
						if(this.mergeClasses(c,c2)) return;
					}break;
					default:{
						null;
					}break;
					}
				}break;
				case 2:
				var e = $e[2];
				{
					var $e = t;
					switch( $e[1] ) {
					case 2:
					var e2 = $e[2];
					{
						if(this.mergeEnums(e,e2)) return;
					}break;
					default:{
						null;
					}break;
					}
				}break;
				case 3:
				var td = $e[2];
				{
					var $e = t;
					switch( $e[1] ) {
					case 3:
					var td2 = $e[2];
					{
						if(this.mergeTypedefs(td,td2)) return;
					}break;
					default:{
						null;
					}break;
					}
				}break;
				case 0:
				{
					null;
				}break;
				}
				throw "Incompatibilities between " + tinf.path + " in " + tinf.platforms.join(",") + " and " + this.curplatform;
			}
		}
	}
	cur.push(t);
}
haxe.rtti.XmlParser.prototype.mkPath = function(p) {
	return p;
}
haxe.rtti.XmlParser.prototype.mkTypeParams = function(p) {
	var pl = p.split(":");
	if(pl[0] == "") return new Array();
	return pl;
}
haxe.rtti.XmlParser.prototype.mkRights = function(r) {
	return (function($this) {
		var $r;
		switch(r) {
		case "null":{
			$r = haxe.rtti.Rights.RNo;
		}break;
		case "method":{
			$r = haxe.rtti.Rights.RMethod;
		}break;
		case "dynamic":{
			$r = haxe.rtti.Rights.RDynamic;
		}break;
		case "inline":{
			$r = haxe.rtti.Rights.RInline;
		}break;
		default:{
			$r = haxe.rtti.Rights.RCall(r);
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.xerror = function(c) {
	return (function($this) {
		var $r;
		throw "Invalid " + c.getName();
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.xroot = function(x) {
	{ var $it0 = x.x.elements();
	while( $it0.hasNext() ) { var c = $it0.next();
	this.merge(this.processElement(c));
	}}
}
haxe.rtti.XmlParser.prototype.processElement = function(x) {
	var c = new haxe.xml.Fast(x);
	return (function($this) {
		var $r;
		switch(c.getName()) {
		case "class":{
			$r = haxe.rtti.TypeTree.TClassdecl($this.xclass(c));
		}break;
		case "enum":{
			$r = haxe.rtti.TypeTree.TEnumdecl($this.xenum(c));
		}break;
		case "typedef":{
			$r = haxe.rtti.TypeTree.TTypedecl($this.xtypedef(c));
		}break;
		default:{
			$r = $this.xerror(c);
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.xpath = function(x) {
	var path = this.mkPath(x.att.resolve("path"));
	var params = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	params.add(this.xtype(c));
	}}
	return { path : path, params : params};
}
haxe.rtti.XmlParser.prototype.xclass = function(x) {
	var csuper = null;
	var doc = null;
	var tdynamic = null;
	var interfaces = new List();
	var fields = new List();
	var statics = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	switch(c.getName()) {
	case "haxe_doc":{
		doc = c.getInnerData();
	}break;
	case "extends":{
		csuper = this.xpath(c);
	}break;
	case "implements":{
		interfaces.add(this.xpath(c));
	}break;
	case "haxe_dynamic":{
		tdynamic = this.xtype(new haxe.xml.Fast(c.x.firstElement()));
	}break;
	default:{
		if(c.x.exists("static")) statics.add(this.xclassfield(c));
		else fields.add(this.xclassfield(c));
	}break;
	}
	}}
	return { path : this.mkPath(x.att.resolve("path")), module : x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null, doc : doc, isPrivate : x.x.exists("private"), isExtern : x.x.exists("extern"), isInterface : x.x.exists("interface"), params : this.mkTypeParams(x.att.resolve("params")), superClass : csuper, interfaces : interfaces, fields : fields, statics : statics, tdynamic : tdynamic, platforms : this.defplat()};
}
haxe.rtti.XmlParser.prototype.xclassfield = function(x) {
	var e = x.getElements();
	var t = this.xtype(e.next());
	var doc = null;
	{ var $it0 = e;
	while( $it0.hasNext() ) { var c = $it0.next();
	switch(c.getName()) {
	case "haxe_doc":{
		doc = c.getInnerData();
	}break;
	default:{
		this.xerror(c);
	}break;
	}
	}}
	return { name : x.getName(), type : t, isPublic : x.x.exists("public"), isOverride : x.x.exists("override"), doc : doc, get : x.has.resolve("get")?this.mkRights(x.att.resolve("get")):haxe.rtti.Rights.RNormal, set : x.has.resolve("set")?this.mkRights(x.att.resolve("set")):haxe.rtti.Rights.RNormal, params : x.has.resolve("params")?this.mkTypeParams(x.att.resolve("params")):null, platforms : this.defplat()};
}
haxe.rtti.XmlParser.prototype.xenum = function(x) {
	var cl = new List();
	var doc = null;
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	if(c.getName() == "haxe_doc") doc = c.getInnerData();
	else cl.add(this.xenumfield(c));
	}}
	return { path : this.mkPath(x.att.resolve("path")), module : x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null, doc : doc, isPrivate : x.x.exists("private"), isExtern : x.x.exists("extern"), params : this.mkTypeParams(x.att.resolve("params")), constructors : cl, platforms : this.defplat()};
}
haxe.rtti.XmlParser.prototype.xenumfield = function(x) {
	var args = null;
	var xdoc = x.x.elementsNamed("haxe_doc").next();
	if(x.has.resolve("a")) {
		var names = x.att.resolve("a").split(":");
		var elts = x.getElements();
		args = new List();
		{
			var _g = 0;
			while(_g < names.length) {
				var c = names[_g];
				++_g;
				var opt = false;
				if(c.charAt(0) == "?") {
					opt = true;
					c = c.substr(1);
				}
				args.add({ name : c, opt : opt, t : this.xtype(elts.next())});
			}
		}
	}
	return { name : x.getName(), args : args, doc : xdoc == null?null:new haxe.xml.Fast(xdoc).getInnerData(), platforms : this.defplat()};
}
haxe.rtti.XmlParser.prototype.xtypedef = function(x) {
	var doc = null;
	var t = null;
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	if(c.getName() == "haxe_doc") doc = c.getInnerData();
	else t = this.xtype(c);
	}}
	var types = new Hash();
	if(this.curplatform != null) types.set(this.curplatform,t);
	return { path : this.mkPath(x.att.resolve("path")), module : x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null, doc : doc, isPrivate : x.x.exists("private"), params : this.mkTypeParams(x.att.resolve("params")), type : t, types : types, platforms : this.defplat()};
}
haxe.rtti.XmlParser.prototype.xtype = function(x) {
	return (function($this) {
		var $r;
		switch(x.getName()) {
		case "unknown":{
			$r = haxe.rtti.CType.CUnknown;
		}break;
		case "e":{
			$r = haxe.rtti.CType.CEnum($this.mkPath(x.att.resolve("path")),$this.xtypeparams(x));
		}break;
		case "c":{
			$r = haxe.rtti.CType.CClass($this.mkPath(x.att.resolve("path")),$this.xtypeparams(x));
		}break;
		case "t":{
			$r = haxe.rtti.CType.CTypedef($this.mkPath(x.att.resolve("path")),$this.xtypeparams(x));
		}break;
		case "f":{
			$r = (function($this) {
				var $r;
				var args = new List();
				var aname = x.att.resolve("a").split(":");
				var eargs = aname.iterator();
				{ var $it0 = x.getElements();
				while( $it0.hasNext() ) { var e = $it0.next();
				{
					var opt = false;
					var a = eargs.next();
					if(a == null) a = "";
					if(a.charAt(0) == "?") {
						opt = true;
						a = a.substr(1);
					}
					args.add({ name : a, opt : opt, t : $this.xtype(e)});
				}
				}}
				var ret = args.last();
				args.remove(ret);
				$r = haxe.rtti.CType.CFunction(args,ret.t);
				return $r;
			}($this));
		}break;
		case "a":{
			$r = (function($this) {
				var $r;
				var fields = new List();
				{ var $it1 = x.getElements();
				while( $it1.hasNext() ) { var f = $it1.next();
				fields.add({ name : f.getName(), t : $this.xtype(new haxe.xml.Fast(f.x.firstElement()))});
				}}
				$r = haxe.rtti.CType.CAnonymous(fields);
				return $r;
			}($this));
		}break;
		case "d":{
			$r = (function($this) {
				var $r;
				var t = null;
				var tx = x.x.firstElement();
				if(tx != null) t = $this.xtype(new haxe.xml.Fast(tx));
				$r = haxe.rtti.CType.CDynamic(t);
				return $r;
			}($this));
		}break;
		default:{
			$r = $this.xerror(x);
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.XmlParser.prototype.xtypeparams = function(x) {
	var p = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	p.add(this.xtype(c));
	}}
	return p;
}
haxe.rtti.XmlParser.prototype.defplat = function() {
	var l = new List();
	if(this.curplatform != null) l.add(this.curplatform);
	return l;
}
haxe.rtti.XmlParser.prototype.__class__ = haxe.rtti.XmlParser;
GLDisplayListRenderer = function(p) { if( p === $_ ) return; {
	this.textures = new IntHash();
}}
GLDisplayListRenderer.__name__ = ["GLDisplayListRenderer"];
GLDisplayListRenderer.prototype.gl = null;
GLDisplayListRenderer.prototype.shaderProgram = null;
GLDisplayListRenderer.prototype.vertexPositionAttribute = null;
GLDisplayListRenderer.prototype.vertexBuffer = null;
GLDisplayListRenderer.prototype.textureUniform = null;
GLDisplayListRenderer.prototype.projectionMatrixUniform = null;
GLDisplayListRenderer.prototype.objectMatrixUniform = null;
GLDisplayListRenderer.prototype.sizeUniform = null;
GLDisplayListRenderer.prototype.alphaUniform = null;
GLDisplayListRenderer.prototype.textures = null;
GLDisplayListRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = gl.createProgram();
	var vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs,shader.DisplayObjectVertex.create());
	gl.compileShader(vs);
	if(!gl.getShaderParameter(vs,gl.COMPILE_STATUS)) {
		haxe.Log.trace(gl.getShaderInfoLog(vs),{ fileName : "GLDisplayListRenderer.hx", lineNumber : 34, className : "GLDisplayListRenderer", methodName : "init"});
		return;
	}
	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs,shader.DisplayObjectFragment.create());
	gl.compileShader(fs);
	if(!gl.getShaderParameter(fs,gl.COMPILE_STATUS)) {
		haxe.Log.trace(gl.getShaderInfoLog(fs),{ fileName : "GLDisplayListRenderer.hx", lineNumber : 42, className : "GLDisplayListRenderer", methodName : "init"});
		return;
	}
	gl.attachShader(this.shaderProgram,vs);
	gl.attachShader(this.shaderProgram,fs);
	gl.linkProgram(this.shaderProgram);
	if(!gl.getProgramParameter(this.shaderProgram,gl.LINK_STATUS)) {
		haxe.Log.trace("Could not initialise shaders",{ fileName : "GLDisplayListRenderer.hx", lineNumber : 52, className : "GLDisplayListRenderer", methodName : "init"});
		return;
	}
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	var vertices = [0,0,1,0,0,1,1,1];
	gl.bufferData(gl.ARRAY_BUFFER,new Int8Array(vertices),gl.STATIC_DRAW);
	this.textureUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"texture");
	this.projectionMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"projectionMatrix");
	this.objectMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"objectMatrix");
	this.sizeUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"size");
	this.alphaUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"alpha");
}
GLDisplayListRenderer.prototype.render = function(width,height) {
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	var projectionMatrix = new Matrix4();
	projectionMatrix.ortho(0,width,height,0,0,1);
	this.gl.uniformMatrix4fv(this.projectionMatrixUniform,false,projectionMatrix.buffer);
	var stage = GLDisplayList.getDefault().stage;
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.uniform1i(this.textureUniform,0);
	this.renderRecursive(stage,new Matrix4());
	this.gl.disable(this.gl.BLEND);
}
GLDisplayListRenderer.prototype.renderRecursive = function(displayObjectContainer,parentMatrix) {
	var _g = 0, _g1 = displayObjectContainer.children;
	while(_g < _g1.length) {
		var displayObject = _g1[_g];
		++_g;
		var matrix = this.renderDisplayObject(displayObject,parentMatrix);
		if(Std["is"](displayObject,GLDisplayObjectContainer)) {
			this.renderRecursive(displayObject,matrix);
		}
	}
}
GLDisplayListRenderer.prototype.renderDisplayObject = function(displayObject,parentMatrix) {
	displayObject.validateTransform();
	var result = new Matrix4();
	result.multiply(parentMatrix);
	result.multiply(displayObject.matrix);
	if(displayObject.skipDraw) return result;
	var texture;
	if(!this.textures.exists(displayObject.id)) {
		texture = this.gl.createTexture();
		this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
		this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);
		this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST);
		this.textures.set(displayObject.id,texture);
	}
	else {
		texture = this.textures.get(displayObject.id);
		this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
	}
	if(displayObject.canvasIsInvalid) {
		this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,displayObject.getCanvas());
		displayObject.canvasIsInvalid = false;
	}
	this.gl.uniformMatrix4fv(this.objectMatrixUniform,false,result.buffer);
	this.gl.uniform2f(this.sizeUniform,displayObject.width,displayObject.height);
	this.gl.uniform1f(this.alphaUniform,displayObject.alpha);
	this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4);
	return result;
}
GLDisplayListRenderer.prototype.__class__ = GLDisplayListRenderer;
if(typeof sa=='undefined') sa = {}
if(!sa.view) sa.view = {}
if(!sa.view.shader) sa.view.shader = {}
sa.view.shader.PassVertex2 = function() { }
sa.view.shader.PassVertex2.__name__ = ["sa","view","shader","PassVertex2"];
sa.view.shader.PassVertex2.create = function() {
	return "\n\n\tattribute vec2 vertexPosition;\n\t\n\tuniform mat4 projectionMatrix;\n\tuniform mat4 viewWorldMatrix;\n\t\t\t\t\n\tvarying vec2 textureCoord;\n\tvarying vec4 vertex;\n\t\n\tvoid main(void)\n\t{\n\t    gl_Position = projectionMatrix * viewWorldMatrix * vec4(vertexPosition, 0.0, 1.0);\n\t    vertex = vec4(vertexPosition, 0.0, 1.0);\n\t\ttextureCoord = (vertexPosition.xy + 1.0) * 0.5;\n\t}\n\n";
}
sa.view.shader.PassVertex2.prototype.__class__ = sa.view.shader.PassVertex2;
if(typeof bpmjs=='undefined') bpmjs = {}
bpmjs.TaskError = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs.TaskError.__name__ = ["bpmjs","TaskError"];
bpmjs.TaskError.prototype.task = null;
bpmjs.TaskError.prototype.error = null;
bpmjs.TaskError.prototype.__class__ = bpmjs.TaskError;
Color = function(r,g,b,a) { if( r === $_ ) return; {
	if(a == null) a = 1.0;
	if(b == null) b = 1.0;
	if(g == null) g = 0.0;
	if(r == null) r = 1.0;
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
}}
Color.__name__ = ["Color"];
Color.prototype.r = null;
Color.prototype.g = null;
Color.prototype.b = null;
Color.prototype.a = null;
Color.prototype.fromHex = function(hex) {
	this.r = (hex >> 16 & 255) / 255;
	this.g = (hex >> 8 & 255) / 255;
	this.b = (hex & 255) / 255;
	this.a = 1.0;
	return this;
}
Color.prototype.scaleRGB = function(factor) {
	this.r *= factor;
	this.g *= factor;
	this.b *= factor;
}
Color.prototype.mixFrom = function(color1,color2,color1Mix) {
	if(color1Mix < 0) color1Mix = 0;
	if(color1Mix > 1) color1Mix = 1;
	var color2Mix = 1 - color1Mix;
	this.r = color1.r * color1Mix + color2.r * color2Mix;
	this.g = color1.g * color1Mix + color2.g * color2Mix;
	this.b = color1.b * color1Mix + color2.b * color2Mix;
}
Color.prototype.toContextRGB = function() {
	return "rgb(" + this.r * 255 + "," + this.g * 255 + "," + this.b * 255 + ")";
}
Color.prototype.toContextRGBA = function() {
	return "rgba(" + Std["int"](this.r * 255) + "," + Std["int"](this.g * 255) + "," + Std["int"](this.b * 255) + "," + this.a + ")";
}
Color.prototype.toString = function() {
	return "Color: " + this.r + "," + this.g + "," + this.b + "," + this.a;
}
Color.prototype.__class__ = Color;
List = function(p) { if( p === $_ ) return; {
	this.length = 0;
}}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{";
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = ", ";
		s.b[s.b.length] = Std.string(l[0]);
		l = l[1];
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
GLFramebufferFactory = function(gl) { if( gl === $_ ) return; {
	this.gl = gl;
}}
GLFramebufferFactory.__name__ = ["GLFramebufferFactory"];
GLFramebufferFactory.prototype.gl = null;
GLFramebufferFactory.prototype.create = function(width,height) {
	var result = new GLFramebuffer();
	result.width = width;
	result.height = height;
	result.framebuffer = this.gl.createFramebuffer();
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,result.framebuffer);
	result.texture = this.gl.createTexture();
	this.gl.bindTexture(this.gl.TEXTURE_2D,result.texture);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST);
	this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,width,height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,null);
	this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,result.texture,0);
	this.gl.bindTexture(this.gl.TEXTURE_2D,null);
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
	return result;
}
GLFramebufferFactory.prototype.__class__ = GLFramebufferFactory;
IntIter = function(min,max) { if( min === $_ ) return; {
	this.min = min;
	this.max = max;
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
Kuler = function(p) { if( p === $_ ) return; {
	this[0] = new Color(Math.random(),Math.random(),Math.random());
	this[1] = new Color(Math.random(),Math.random(),Math.random());
	this[2] = new Color(Math.random(),Math.random(),Math.random());
	this[3] = new Color(Math.random(),Math.random(),Math.random());
	this[4] = new Color(Math.random(),Math.random(),Math.random());
}}
Kuler.__name__ = ["Kuler"];
Kuler.prototype.scaleRGB = function(factor) {
	this[0].scaleRGB(factor);
	this[1].scaleRGB(factor);
	this[2].scaleRGB(factor);
	this[3].scaleRGB(factor);
	this[4].scaleRGB(factor);
}
Kuler.prototype.__class__ = Kuler;
Matrix4 = function(cloneFrom) { if( cloneFrom === $_ ) return; {
	this.buffer = new Float32Array(16);
	if(cloneFrom != null) {
		this.setFrom(cloneFrom);
	}
	else {
		this.identity();
	}
}}
Matrix4.__name__ = ["Matrix4"];
Matrix4.prototype.buffer = null;
Matrix4.prototype.identity = function() {
	this.buffer[0] = 1;
	this.buffer[1] = 0;
	this.buffer[2] = 0;
	this.buffer[3] = 0;
	this.buffer[4] = 0;
	this.buffer[5] = 1;
	this.buffer[6] = 0;
	this.buffer[7] = 0;
	this.buffer[8] = 0;
	this.buffer[9] = 0;
	this.buffer[10] = 1;
	this.buffer[11] = 0;
	this.buffer[12] = 0;
	this.buffer[13] = 0;
	this.buffer[14] = 0;
	this.buffer[15] = 1;
}
Matrix4.prototype.setFrom = function(from) {
	this.buffer[0] = from.buffer[0];
	this.buffer[1] = from.buffer[1];
	this.buffer[2] = from.buffer[2];
	this.buffer[3] = from.buffer[3];
	this.buffer[4] = from.buffer[4];
	this.buffer[5] = from.buffer[5];
	this.buffer[6] = from.buffer[6];
	this.buffer[7] = from.buffer[7];
	this.buffer[8] = from.buffer[8];
	this.buffer[9] = from.buffer[9];
	this.buffer[10] = from.buffer[10];
	this.buffer[11] = from.buffer[11];
	this.buffer[12] = from.buffer[12];
	this.buffer[13] = from.buffer[13];
	this.buffer[14] = from.buffer[14];
	this.buffer[15] = from.buffer[15];
}
Matrix4.prototype.lookAt = function(eye,center,up) {
	var eyex = eye.x, eyey = eye.y, eyez = eye.z, upx = up.x, upy = up.y, upz = up.z, centerx = center.x, centery = center.y, centerz = center.z;
	if(eyex == centerx && eyey == centery && eyez == centerz) {
		this.identity();
	}
	var z0, z1, z2, x0, x1, x2, y0, y1, y2, len;
	z0 = eyex - center.x;
	z1 = eyey - center.y;
	z2 = eyez - center.z;
	len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;
	x0 = upy * z2 - upz * z1;
	x1 = upz * z0 - upx * z2;
	x2 = upx * z1 - upy * z0;
	len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	if(Math.isNaN(len)) {
		x0 = 0;
		x1 = 0;
		x2 = 0;
	}
	else {
		len = 1 / len;
		x0 *= len;
		x1 *= len;
		x2 *= len;
	}
	y0 = z1 * x2 - z2 * x1;
	y1 = z2 * x0 - z0 * x2;
	y2 = z0 * x1 - z1 * x0;
	len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	if(Math.isNaN(len)) {
		y0 = 0;
		y1 = 0;
		y2 = 0;
	}
	else {
		len = 1 / len;
		y0 *= len;
		y1 *= len;
		y2 *= len;
	}
	this.buffer[0] = x0;
	this.buffer[1] = y0;
	this.buffer[2] = z0;
	this.buffer[3] = 0;
	this.buffer[4] = x1;
	this.buffer[5] = y1;
	this.buffer[6] = z1;
	this.buffer[7] = 0;
	this.buffer[8] = x2;
	this.buffer[9] = y2;
	this.buffer[10] = z2;
	this.buffer[11] = 0;
	this.buffer[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	this.buffer[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	this.buffer[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	this.buffer[15] = 1;
}
Matrix4.prototype.ortho = function(left,right,bottom,top,near,far) {
	var rl = right - left;
	var tb = top - bottom;
	var fn = far - near;
	this.buffer[0] = 2 / rl;
	this.buffer[1] = 0;
	this.buffer[2] = 0;
	this.buffer[3] = 0;
	this.buffer[4] = 0;
	this.buffer[5] = 2 / tb;
	this.buffer[6] = 0;
	this.buffer[7] = 0;
	this.buffer[8] = 0;
	this.buffer[9] = 0;
	this.buffer[10] = -2 / fn;
	this.buffer[11] = 0;
	this.buffer[12] = -(left + right) / rl;
	this.buffer[13] = -(top + bottom) / tb;
	this.buffer[14] = -(far + near) / fn;
	this.buffer[15] = 1;
}
Matrix4.prototype.perspective = function(fovy,aspect,near,far) {
	var top = near * Math.tan(fovy * Math.PI / 360.0);
	var right = top * aspect;
	this.frustum(-right,right,-top,top,near,far);
}
Matrix4.prototype.frustum = function(left,right,bottom,top,near,far) {
	var rl = right - left;
	var tb = top - bottom;
	var fn = far - near;
	this.buffer[0] = near * 2 / rl;
	this.buffer[1] = 0;
	this.buffer[2] = 0;
	this.buffer[3] = 0;
	this.buffer[4] = 0;
	this.buffer[5] = near * 2 / tb;
	this.buffer[6] = 0;
	this.buffer[7] = 0;
	this.buffer[8] = (right + left) / rl;
	this.buffer[9] = (top + bottom) / tb;
	this.buffer[10] = -(far + near) / fn;
	this.buffer[11] = -1;
	this.buffer[12] = 0;
	this.buffer[13] = 0;
	this.buffer[14] = -(far * near * 2) / fn;
	this.buffer[15] = 0;
}
Matrix4.prototype.appendTranslation = function(x,y,z) {
	this.buffer[12] = this.buffer[0] * x + this.buffer[4] * y + this.buffer[8] * z + this.buffer[12];
	this.buffer[13] = this.buffer[1] * x + this.buffer[5] * y + this.buffer[9] * z + this.buffer[13];
	this.buffer[14] = this.buffer[2] * x + this.buffer[6] * y + this.buffer[10] * z + this.buffer[14];
	this.buffer[15] = this.buffer[3] * x + this.buffer[7] * y + this.buffer[11] * z + this.buffer[15];
}
Matrix4.prototype.appendScale = function(x,y,z) {
	this.buffer[0] = this.buffer[0] * x;
	this.buffer[1] = this.buffer[1] * x;
	this.buffer[2] = this.buffer[2] * x;
	this.buffer[3] = this.buffer[3] * x;
	this.buffer[4] = this.buffer[4] * y;
	this.buffer[5] = this.buffer[5] * y;
	this.buffer[6] = this.buffer[6] * y;
	this.buffer[7] = this.buffer[7] * y;
	this.buffer[8] = this.buffer[8] * z;
	this.buffer[9] = this.buffer[9] * z;
	this.buffer[10] = this.buffer[10] * z;
	this.buffer[11] = this.buffer[11] * z;
	this.buffer[12] = this.buffer[12];
	this.buffer[13] = this.buffer[13];
	this.buffer[14] = this.buffer[14];
	this.buffer[15] = this.buffer[15];
}
Matrix4.prototype.appendRotation = function(angle,axis) {
	var x = axis.x, y = axis.y, z = axis.y;
	var len = Math.sqrt(x * x + y * y + z * z);
	len = 1 / len;
	x *= len;
	y *= len;
	z *= len;
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var t = 1 - c;
	var a00 = this.buffer[0], a01 = this.buffer[1], a02 = this.buffer[2], a03 = this.buffer[3];
	var a10 = this.buffer[4], a11 = this.buffer[5], a12 = this.buffer[6], a13 = this.buffer[7];
	var a20 = this.buffer[8], a21 = this.buffer[9], a22 = this.buffer[10], a23 = this.buffer[11];
	var b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s;
	var b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s;
	var b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
	this.buffer[0] = a00 * b00 + a10 * b01 + a20 * b02;
	this.buffer[1] = a01 * b00 + a11 * b01 + a21 * b02;
	this.buffer[2] = a02 * b00 + a12 * b01 + a22 * b02;
	this.buffer[3] = a03 * b00 + a13 * b01 + a23 * b02;
	this.buffer[4] = a00 * b10 + a10 * b11 + a20 * b12;
	this.buffer[5] = a01 * b10 + a11 * b11 + a21 * b12;
	this.buffer[6] = a02 * b10 + a12 * b11 + a22 * b12;
	this.buffer[7] = a03 * b10 + a13 * b11 + a23 * b12;
	this.buffer[8] = a00 * b20 + a10 * b21 + a20 * b22;
	this.buffer[9] = a01 * b20 + a11 * b21 + a21 * b22;
	this.buffer[10] = a02 * b20 + a12 * b21 + a22 * b22;
	this.buffer[11] = a03 * b20 + a13 * b21 + a23 * b22;
}
Matrix4.prototype.rotateEuler = function(heading,attitude,bank) {
	this.identity();
	var ch = Math.cos(heading);
	var sh = Math.sin(heading);
	var ca = Math.cos(attitude);
	var sa = Math.sin(attitude);
	var cb = Math.cos(bank);
	var sb = Math.sin(bank);
	this.buffer[0] = ch * ca;
	this.buffer[1] = sh * sb - ch * sa * cb;
	this.buffer[2] = ch * sa * sb + sh * cb;
	this.buffer[4] = sa;
	this.buffer[5] = ca * cb;
	this.buffer[6] = -ca * sb;
	this.buffer[8] = -sh * ca;
	this.buffer[9] = sh * sa * cb + ch * sb;
	this.buffer[10] = -sh * sa * sb + ch * cb;
}
Matrix4.prototype.appendEulerRotation = function(heading,attitude,bank) {
	var mEuler = new Matrix4();
	mEuler.rotateEuler(heading,attitude,bank);
	this.multiply(mEuler);
}
Matrix4.prototype.inverse = function() {
	var a00 = this.buffer[0], a01 = this.buffer[1], a02 = this.buffer[2], a03 = this.buffer[3];
	var a10 = this.buffer[4], a11 = this.buffer[5], a12 = this.buffer[6], a13 = this.buffer[7];
	var a20 = this.buffer[8], a21 = this.buffer[9], a22 = this.buffer[10], a23 = this.buffer[11];
	var a30 = this.buffer[12], a31 = this.buffer[13], a32 = this.buffer[14], a33 = this.buffer[15];
	var b00 = a00 * a11 - a01 * a10;
	var b01 = a00 * a12 - a02 * a10;
	var b02 = a00 * a13 - a03 * a10;
	var b03 = a01 * a12 - a02 * a11;
	var b04 = a01 * a13 - a03 * a11;
	var b05 = a02 * a13 - a03 * a12;
	var b06 = a20 * a31 - a21 * a30;
	var b07 = a20 * a32 - a22 * a30;
	var b08 = a20 * a33 - a23 * a30;
	var b09 = a21 * a32 - a22 * a31;
	var b10 = a21 * a33 - a23 * a31;
	var b11 = a22 * a33 - a23 * a32;
	var invDet = 1 / (b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06);
	this.buffer[0] = (a11 * b11 - a12 * b10 + a13 * b09) * invDet;
	this.buffer[1] = (-a01 * b11 + a02 * b10 - a03 * b09) * invDet;
	this.buffer[2] = (a31 * b05 - a32 * b04 + a33 * b03) * invDet;
	this.buffer[3] = (-a21 * b05 + a22 * b04 - a23 * b03) * invDet;
	this.buffer[4] = (-a10 * b11 + a12 * b08 - a13 * b07) * invDet;
	this.buffer[5] = (a00 * b11 - a02 * b08 + a03 * b07) * invDet;
	this.buffer[6] = (-a30 * b05 + a32 * b02 - a33 * b01) * invDet;
	this.buffer[7] = (a20 * b05 - a22 * b02 + a23 * b01) * invDet;
	this.buffer[8] = (a10 * b10 - a11 * b08 + a13 * b06) * invDet;
	this.buffer[9] = (-a00 * b10 + a01 * b08 - a03 * b06) * invDet;
	this.buffer[10] = (a30 * b04 - a31 * b02 + a33 * b00) * invDet;
	this.buffer[11] = (-a20 * b04 + a21 * b02 - a23 * b00) * invDet;
	this.buffer[12] = (-a10 * b09 + a11 * b07 - a12 * b06) * invDet;
	this.buffer[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
	this.buffer[14] = (-a30 * b03 + a31 * b01 - a32 * b00) * invDet;
	this.buffer[15] = (a20 * b03 - a21 * b01 + a22 * b00) * invDet;
}
Matrix4.prototype.multiply = function(mat2) {
	var a00 = this.buffer[0], a01 = this.buffer[1], a02 = this.buffer[2], a03 = this.buffer[3];
	var a10 = this.buffer[4], a11 = this.buffer[5], a12 = this.buffer[6], a13 = this.buffer[7];
	var a20 = this.buffer[8], a21 = this.buffer[9], a22 = this.buffer[10], a23 = this.buffer[11];
	var a30 = this.buffer[12], a31 = this.buffer[13], a32 = this.buffer[14], a33 = this.buffer[15];
	var b00 = mat2.buffer[0], b01 = mat2.buffer[1], b02 = mat2.buffer[2], b03 = mat2.buffer[3];
	var b10 = mat2.buffer[4], b11 = mat2.buffer[5], b12 = mat2.buffer[6], b13 = mat2.buffer[7];
	var b20 = mat2.buffer[8], b21 = mat2.buffer[9], b22 = mat2.buffer[10], b23 = mat2.buffer[11];
	var b30 = mat2.buffer[12], b31 = mat2.buffer[13], b32 = mat2.buffer[14], b33 = mat2.buffer[15];
	this.buffer[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
	this.buffer[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
	this.buffer[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
	this.buffer[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
	this.buffer[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
	this.buffer[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
	this.buffer[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
	this.buffer[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
	this.buffer[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
	this.buffer[9] = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
	this.buffer[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
	this.buffer[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
	this.buffer[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
	this.buffer[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
	this.buffer[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
	this.buffer[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
}
Matrix4.prototype.clone = function() {
	return new Matrix4(this);
}
Matrix4.prototype.toString = function() {
	var result = "Matrix4:";
	result += "\r\t" + this.buffer[0] + "," + this.buffer[1] + "," + this.buffer[2] + "," + this.buffer[3];
	result += "\r\t" + this.buffer[4] + "," + this.buffer[5] + "," + this.buffer[6] + "," + this.buffer[7];
	result += "\r\t" + this.buffer[8] + "," + this.buffer[9] + "," + this.buffer[10] + "," + this.buffer[11];
	result += "\r\t" + this.buffer[12] + "," + this.buffer[13] + "," + this.buffer[14] + "," + this.buffer[15];
	return result;
}
Matrix4.prototype.__class__ = Matrix4;
Hash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				return false;
			}
		}
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
if(!sa.model) sa.model = {}
sa.model.CommonModel = function(p) { if( p === $_ ) return; {
	this.projectionMatrix = new Matrix4();
	this.projectionMatrix.perspective(45,1 / 1,0.1,100.0);
	this.cameraMatrix = new Matrix4();
	this.cameraMatrix.lookAt(new Vec3(0,0,0),new Vec3(0,0,-15),new Vec3(0,1,0));
	this.modeChangeSignaler = new hsl.haxe.DirectSignaler(this);
}}
sa.model.CommonModel.__name__ = ["sa","model","CommonModel"];
sa.model.CommonModel.prototype.modeChangeSignaler = null;
sa.model.CommonModel.prototype.gl = null;
sa.model.CommonModel.prototype.canvas = null;
sa.model.CommonModel.prototype.windowWidth = null;
sa.model.CommonModel.prototype.windowHeight = null;
sa.model.CommonModel.prototype.peak = null;
sa.model.CommonModel.prototype.showScene = null;
sa.model.CommonModel.prototype.showCredits = null;
sa.model.CommonModel.prototype.projectionMatrix = null;
sa.model.CommonModel.prototype.cameraMatrix = null;
sa.model.CommonModel.prototype.mode = null;
sa.model.CommonModel.prototype.toggleMode = function() {
	this.mode++;
	this.mode = this.mode % 3;
	this.modeChangeSignaler.dispatch(this.mode,null,{ fileName : "CommonModel.hx", lineNumber : 48, className : "sa.model.CommonModel", methodName : "toggleMode"});
}
sa.model.CommonModel.prototype.toggleCredits = function() {
	this.showCredits = !this.showCredits;
}
sa.model.CommonModel.prototype.__class__ = sa.model.CommonModel;
GLDisplayObjectContainer = function(p) { if( p === $_ ) return; {
	GLDisplayObject.call(this);
	this.children = new Array();
}}
GLDisplayObjectContainer.__name__ = ["GLDisplayObjectContainer"];
GLDisplayObjectContainer.__super__ = GLDisplayObject;
for(var k in GLDisplayObject.prototype ) GLDisplayObjectContainer.prototype[k] = GLDisplayObject.prototype[k];
GLDisplayObjectContainer.prototype.children = null;
GLDisplayObjectContainer.prototype.addChild = function(child) {
	this.children.push(child);
}
GLDisplayObjectContainer.prototype.removeChild = function(child) {
	this.children.remove(child);
}
GLDisplayObjectContainer.prototype.__class__ = GLDisplayObjectContainer;
GLStage = function(p) { if( p === $_ ) return; {
	GLDisplayObjectContainer.call(this);
}}
GLStage.__name__ = ["GLStage"];
GLStage.__super__ = GLDisplayObjectContainer;
for(var k in GLDisplayObjectContainer.prototype ) GLStage.prototype[k] = GLDisplayObjectContainer.prototype[k];
GLStage.prototype.stageWidth = null;
GLStage.prototype.stageHeight = null;
GLStage.prototype.__class__ = GLStage;
sa.view.ImageId = { __ename__ : ["sa","view","ImageId"], __constructs__ : ["SPLASH","CREDITS_BTN","MODE_BTN"] }
sa.view.ImageId.SPLASH = ["SPLASH",0];
sa.view.ImageId.SPLASH.toString = $estr;
sa.view.ImageId.SPLASH.__enum__ = sa.view.ImageId;
sa.view.ImageId.CREDITS_BTN = ["CREDITS_BTN",1];
sa.view.ImageId.CREDITS_BTN.toString = $estr;
sa.view.ImageId.CREDITS_BTN.__enum__ = sa.view.ImageId;
sa.view.ImageId.MODE_BTN = ["MODE_BTN",2];
sa.view.ImageId.MODE_BTN.toString = $estr;
sa.view.ImageId.MODE_BTN.__enum__ = sa.view.ImageId;
IntHash = function(p) { if( p === $_ ) return; {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	{ var $it0 = it;
	while( $it0.hasNext() ) { var i = $it0.next();
	{
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	}}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
sa.view.shader.UniformColor = function() { }
sa.view.shader.UniformColor.__name__ = ["sa","view","shader","UniformColor"];
sa.view.shader.UniformColor.create = function() {
	return "\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\n\tuniform vec4 color;\t\n\n\tvoid main(void)\n\t{\n   \t\tgl_FragColor = color;\n\t}\n\n";
}
sa.view.shader.UniformColor.prototype.__class__ = sa.view.shader.UniformColor;
GLFrame = function(p) { if( p === $_ ) return; {
	null;
}}
GLFrame.__name__ = ["GLFrame"];
GLFrame.prototype.time = null;
GLFrame.prototype.timer = null;
GLFrame.prototype.frameTime = null;
GLFrame.prototype.__class__ = GLFrame;
sa.Main = function(canvas) { if( canvas === $_ ) return; {
	try {
		var context = bpmjs.ContextBuilder.build(sa.Config);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				haxe.Log.trace("Error building application: " + e,{ fileName : "Main.hx", lineNumber : 29, className : "sa.Main", methodName : "new"});
			}
		}
	}
}}
sa.Main.__name__ = ["sa","Main"];
sa.Main.globalErrorHandler = function(msg,stack) {
	haxe.Log.trace("Uncaugt error: " + msg,{ fileName : "Main.hx", lineNumber : 9, className : "sa.Main", methodName : "globalErrorHandler"});
	{
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			haxe.Log.trace(line,{ fileName : "Main.hx", lineNumber : 11, className : "sa.Main", methodName : "globalErrorHandler"});
		}
	}
	return true;
}
sa.Main.main = function() {
	js.Lib.setErrorHandler($closure(sa.Main,"globalErrorHandler"));
}
sa.Main.prototype.__class__ = sa.Main;
sa.view.shader.PassVertex = function() { }
sa.view.shader.PassVertex.__name__ = ["sa","view","shader","PassVertex"];
sa.view.shader.PassVertex.create = function() {
	return "\n\n\tattribute vec2 vertexPosition;\n\t\n\tuniform mat4 perspectiveMatrix;\n\t\t\t\t\n\tvarying vec2 textureCoord;\n\tvarying vec4 vertex;\n\t\n\tvoid main(void)\n\t{\n\t    gl_Position = perspectiveMatrix * vec4(vertexPosition, 0.0, 1.0);\n\t    vertex = vec4(vertexPosition, 0.0, 1.0);\n\t\ttextureCoord = (vertexPosition.xy + 1.0) * 0.5;\n\t}\n\n";
}
sa.view.shader.PassVertex.prototype.__class__ = sa.view.shader.PassVertex;
GLCursorClient = function(p) { if( p === $_ ) return; {
	this.lastCursor = "";
}}
GLCursorClient.__name__ = ["GLCursorClient"];
GLCursorClient.prototype.lastCursor = null;
GLCursorClient.prototype.defaultCursor = function() {
	if(this.lastCursor != GLCursorClient.DEFAULT) {
		this.lastCursor = GLCursorClient.DEFAULT;
		GLMouseRegistry.getInstance().setCursor(this.lastCursor);
	}
}
GLCursorClient.prototype.handCursor = function(message) {
	if(this.lastCursor != GLCursorClient.HAND) {
		this.lastCursor = GLCursorClient.HAND;
		GLMouseRegistry.getInstance().setCursor(this.lastCursor);
		if(message != null) js.Lib.window.status = message;
	}
}
GLCursorClient.prototype.__class__ = GLCursorClient;
bpmjs.EventDispatcher = function(p) { if( p === $_ ) return; {
	this.listeners = new Array();
}}
bpmjs.EventDispatcher.__name__ = ["bpmjs","EventDispatcher"];
bpmjs.EventDispatcher.prototype.listeners = null;
bpmjs.EventDispatcher.prototype.addEventListener = function(type,listener) {
	this.removeEventListener(type,listener);
	this.listeners.push(new bpmjs._Event.ListenerForType(type,listener));
}
bpmjs.EventDispatcher.prototype.removeEventListener = function(type,listener) {
	var _g = 0, _g1 = this.listeners;
	while(_g < _g1.length) {
		var listenerForType = _g1[_g];
		++_g;
		if(listenerForType.type == type && Reflect.compareMethods(listener,listenerForType.listener)) {
			this.listeners.remove(listenerForType);
			return;
		}
	}
}
bpmjs.EventDispatcher.prototype.dispatchEvent = function(event) {
	event.target = this;
	{
		var _g = 0, _g1 = this.listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			if(listener.type == event.type) listener.listener(event);
		}
	}
}
bpmjs.EventDispatcher.prototype.toString = function() {
	return Type.getClassName(Type.getClass(this));
}
bpmjs.EventDispatcher.prototype.__class__ = bpmjs.EventDispatcher;
haxe.rtti.Infos = function() { }
haxe.rtti.Infos.__name__ = ["haxe","rtti","Infos"];
haxe.rtti.Infos.prototype.__class__ = haxe.rtti.Infos;
if(!sa.controller) sa.controller = {}
sa.controller.Launcher = function(p) { if( p === $_ ) return; {
	bpmjs.EventDispatcher.call(this);
}}
sa.controller.Launcher.__name__ = ["sa","controller","Launcher"];
sa.controller.Launcher.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) sa.controller.Launcher.prototype[k] = bpmjs.EventDispatcher.prototype[k];
sa.controller.Launcher.prototype.textureRegistry = null;
sa.controller.Launcher.prototype.imageRegistry = null;
sa.controller.Launcher.prototype.preloaderView = null;
sa.controller.Launcher.prototype.handlePostComplete = function() {
	this.preloaderView.start("Fonts");
	this.fontsLoaded();
}
sa.controller.Launcher.prototype.fontsLoaded = function() {
	this.preloaderView.complete();
	var gl = this.textureRegistry.gl;
	var group = new bpmjs.TaskGroup();
	group.add(this.createTextureTask("image/Stripe1.png",sa.view.TextureId.STRIPE1,this.textureRegistry.gl.LINEAR));
	group.add(this.createTextureTask("image/Flighter.png",sa.view.TextureId.FLIGHTER,this.textureRegistry.gl.LINEAR));
	group.add(this.createTextureTask("image/Stripe2.png",sa.view.TextureId.STRIPE2,this.textureRegistry.gl.LINEAR));
	group.add(this.createTextureTask("image/Stones.png",sa.view.TextureId.STONES_RIGHT,this.textureRegistry.gl.LINEAR));
	group.add(this.createTextureTask("image/Stones2.png",sa.view.TextureId.STONES_LEFT,this.textureRegistry.gl.LINEAR));
	group.add(this.createTextureTask("image/RockLeft2.png",sa.view.TextureId.ROCK_LEFT,this.textureRegistry.gl.LINEAR));
	group.add(this.createTextureTask("image/RockRight3.png",sa.view.TextureId.ROCK_RIGHT,this.textureRegistry.gl.LINEAR));
	group.add(this.createTextureTask("image/BG3.jpg",sa.view.TextureId.BACKGROUND,this.textureRegistry.gl.NEAREST));
	group.add(this.createTextureTask("image/Credits2.png",sa.view.TextureId.CREDITS,this.textureRegistry.gl.LINEAR));
	group.add(this.createImageTask("image/SplashWithText.jpg",sa.view.ImageId.SPLASH));
	group.add(this.createImageTask("image/CreditsBt.png",sa.view.ImageId.CREDITS_BTN));
	group.add(this.createImageTask("image/ModeBt.png",sa.view.ImageId.MODE_BTN));
	group.completeSignaler.bind($closure(this,"handleComplete"));
	this.preloaderView.max = group.tasks.length + 1;
	group.start({ fileName : "Launcher.hx", lineNumber : 59, className : "sa.controller.Launcher", methodName : "fontsLoaded"});
}
sa.controller.Launcher.prototype.handleComplete = function(task) {
	try {
		this.dispatchEvent(new sa.event.LauncherStart());
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				haxe.Log.trace("Could not launch Experiment!\n\t" + e,{ fileName : "Launcher.hx", lineNumber : 70, className : "sa.controller.Launcher", methodName : "handleComplete"});
			}
		}
	}
}
sa.controller.Launcher.prototype.createTextureTask = function(location,texture,scaleMod) {
	var inst = this;
	var imageLoaderTask = new bpmjs.ImageLoaderTask();
	imageLoaderTask.location = location;
	imageLoaderTask.startSignaler.bind(function(task) {
		inst.preloaderView.start(task.location);
	});
	imageLoaderTask.completeSignaler.bind(function(task) {
		inst.preloaderView.complete();
		inst.textureRegistry.register(texture,inst.textureRegistry.createGLTextureFromImage(task.image,scaleMod));
	});
	return imageLoaderTask;
}
sa.controller.Launcher.prototype.createImageTask = function(location,image) {
	var inst = this;
	var imageLoaderTask = new bpmjs.ImageLoaderTask();
	imageLoaderTask.location = location;
	imageLoaderTask.startSignaler.bind(function(task) {
		inst.preloaderView.start(task.location);
	});
	imageLoaderTask.completeSignaler.bind(function(task) {
		inst.preloaderView.complete();
		inst.imageRegistry.register(image,task.image);
	});
	return imageLoaderTask;
}
sa.controller.Launcher.prototype.__class__ = sa.controller.Launcher;
sa.controller.Launcher.__interfaces__ = [haxe.rtti.Infos];
bpmjs.Task = function(p) { if( p === $_ ) return; {
	this.startSignaler = new hsl.haxe.DirectSignaler(this);
	this.completeSignaler = new hsl.haxe.DirectSignaler(this);
	this.errorSignaler = new hsl.haxe.DirectSignaler(this);
}}
bpmjs.Task.__name__ = ["bpmjs","Task"];
bpmjs.Task.prototype.startSignaler = null;
bpmjs.Task.prototype.completeSignaler = null;
bpmjs.Task.prototype.errorSignaler = null;
bpmjs.Task.prototype.start = function(positionInformation) {
	try {
		var t = this;
		this.startSignaler.dispatch(t,null,{ fileName : "Task.hx", lineNumber : 25, className : "bpmjs.Task", methodName : "start"});
		this.doStart();
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				haxe.Log.trace("Error starting Task: " + e,{ fileName : "Task.hx", lineNumber : 30, className : "bpmjs.Task", methodName : "start"});
			}
		}
	}
}
bpmjs.Task.prototype.doStart = function() {
	null;
}
bpmjs.Task.prototype.complete = function() {
	var t = this;
	this.completeSignaler.dispatch(t,null,{ fileName : "Task.hx", lineNumber : 41, className : "bpmjs.Task", methodName : "complete"});
}
bpmjs.Task.prototype.error = function(result,error) {
	var taskError = new bpmjs.TaskError();
	taskError.task = result;
	taskError.error = error;
	this.errorSignaler.dispatch(taskError,null,{ fileName : "Task.hx", lineNumber : 49, className : "bpmjs.Task", methodName : "error"});
}
bpmjs.Task.prototype.__class__ = bpmjs.Task;
bpmjs.ImageLoaderTask = function(p) { if( p === $_ ) return; {
	bpmjs.Task.call(this);
}}
bpmjs.ImageLoaderTask.__name__ = ["bpmjs","ImageLoaderTask"];
bpmjs.ImageLoaderTask.__super__ = bpmjs.Task;
for(var k in bpmjs.Task.prototype ) bpmjs.ImageLoaderTask.prototype[k] = bpmjs.Task.prototype[k];
bpmjs.ImageLoaderTask.prototype.location = null;
bpmjs.ImageLoaderTask.prototype.image = null;
bpmjs.ImageLoaderTask.prototype.doStart = function() {
	this.image = new Image();
	this.image.onload = $closure(this,"handleImageLoaded");
	this.image.src = this.location;
}
bpmjs.ImageLoaderTask.prototype.handleImageLoaded = function() {
	this.complete();
}
bpmjs.ImageLoaderTask.prototype.__class__ = bpmjs.ImageLoaderTask;
if(typeof hsl=='undefined') hsl = {}
if(!hsl.haxe) hsl.haxe = {}
hsl.haxe.Signaler = function() { }
hsl.haxe.Signaler.__name__ = ["hsl","haxe","Signaler"];
hsl.haxe.Signaler.prototype.isListenedTo = null;
hsl.haxe.Signaler.prototype.subject = null;
hsl.haxe.Signaler.prototype.addBubblingTarget = null;
hsl.haxe.Signaler.prototype.addNotificationTarget = null;
hsl.haxe.Signaler.prototype.bind = null;
hsl.haxe.Signaler.prototype.bindAdvanced = null;
hsl.haxe.Signaler.prototype.bindVoid = null;
hsl.haxe.Signaler.prototype.dispatch = null;
hsl.haxe.Signaler.prototype.getIsListenedTo = null;
hsl.haxe.Signaler.prototype.removeBubblingTarget = null;
hsl.haxe.Signaler.prototype.removeNotificationTarget = null;
hsl.haxe.Signaler.prototype.unbind = null;
hsl.haxe.Signaler.prototype.unbindAdvanced = null;
hsl.haxe.Signaler.prototype.unbindVoid = null;
hsl.haxe.Signaler.prototype.__class__ = hsl.haxe.Signaler;
hsl.haxe.DirectSignaler = function(subject,rejectNullData) { if( subject === $_ ) return; {
	if(null == subject) {
		throw new haxe.exception.ArgumentNullException("subject",1);
	}
	this.subject = subject;
	this.rejectNullData = rejectNullData;
	this.sentinel = new hsl.haxe._DirectSignaler.SentinelBond();
}}
hsl.haxe.DirectSignaler.__name__ = ["hsl","haxe","DirectSignaler"];
hsl.haxe.DirectSignaler.prototype.bubblingTargets = null;
hsl.haxe.DirectSignaler.prototype.isListenedTo = null;
hsl.haxe.DirectSignaler.prototype.notificationTargets = null;
hsl.haxe.DirectSignaler.prototype.rejectNullData = null;
hsl.haxe.DirectSignaler.prototype.sentinel = null;
hsl.haxe.DirectSignaler.prototype.subject = null;
hsl.haxe.DirectSignaler.prototype.subjectClassNames = null;
hsl.haxe.DirectSignaler.prototype.addBubblingTarget = function(value) {
	if(null == this.bubblingTargets) {
		this.bubblingTargets = new List();
	}
	this.bubblingTargets.add(value);
}
hsl.haxe.DirectSignaler.prototype.addNotificationTarget = function(value) {
	if(null == this.notificationTargets) {
		this.notificationTargets = new List();
	}
	this.notificationTargets.add(value);
}
hsl.haxe.DirectSignaler.prototype.bind = function(listener) {
	if(null == listener) {
		throw new haxe.exception.ArgumentNullException("listener",1);
	}
	return this.sentinel.add(new hsl.haxe._DirectSignaler.RegularBond(listener));
}
hsl.haxe.DirectSignaler.prototype.bindAdvanced = function(listener) {
	if(null == listener) {
		throw new haxe.exception.ArgumentNullException("listener",1);
	}
	return this.sentinel.add(new hsl.haxe._DirectSignaler.AdvancedBond(listener));
}
hsl.haxe.DirectSignaler.prototype.bindVoid = function(listener) {
	if(null == listener) {
		throw new haxe.exception.ArgumentNullException("listener",1);
	}
	return this.sentinel.add(new hsl.haxe._DirectSignaler.NiladicBond(listener));
}
hsl.haxe.DirectSignaler.prototype.bubble = function(data,origin) {
	if(null != this.bubblingTargets) {
		{ var $it0 = this.bubblingTargets.iterator();
		while( $it0.hasNext() ) { var bubblingTarget = $it0.next();
		{
			bubblingTarget.dispatch(data,origin,{ fileName : "DirectSignaler.hx", lineNumber : 109, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
		}
		}}
	}
	if(null != this.notificationTargets) {
		{ var $it1 = this.notificationTargets.iterator();
		while( $it1.hasNext() ) { var notificationTarget = $it1.next();
		{
			notificationTarget.dispatch(null,origin,{ fileName : "DirectSignaler.hx", lineNumber : 114, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
		}
		}}
	}
}
hsl.haxe.DirectSignaler.prototype.dispatch = function(data,origin,positionInformation) {
	if("dispatchNative" != positionInformation.methodName && "bubble" != positionInformation.methodName) {
		this.verifyCaller(positionInformation);
	}
	if(this.rejectNullData && null == data) {
		throw new haxe.exception.Exception("Some data that was passed is null, but this signaler has been set to reject null data.",null,1);
	}
	origin = null == origin?this.subject:origin;
	if(3 == this.sentinel.callListener(data,this.subject,origin,3)) {
		{
			if(null != this.bubblingTargets) {
				{ var $it0 = this.bubblingTargets.iterator();
				while( $it0.hasNext() ) { var bubblingTarget = $it0.next();
				{
					bubblingTarget.dispatch(data,origin,{ fileName : "DirectSignaler.hx", lineNumber : 109, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
				}
				}}
			}
			if(null != this.notificationTargets) {
				{ var $it1 = this.notificationTargets.iterator();
				while( $it1.hasNext() ) { var notificationTarget = $it1.next();
				{
					notificationTarget.dispatch(null,origin,{ fileName : "DirectSignaler.hx", lineNumber : 114, className : "hsl.haxe.DirectSignaler", methodName : "bubble"});
				}
				}}
			}
		}
	}
}
hsl.haxe.DirectSignaler.prototype.getIsListenedTo = function() {
	return this.sentinel.getIsConnected();
}
hsl.haxe.DirectSignaler.prototype.getOrigin = function(origin) {
	return null == origin?this.subject:origin;
}
hsl.haxe.DirectSignaler.prototype.verifyCaller = function(positionInformation) {
	if(null == this.subjectClassNames) {
		this.subjectClassNames = haxe.TypeTools.getClassNames(this.subject);
	}
	{ var $it0 = this.subjectClassNames.iterator();
	while( $it0.hasNext() ) { var subjectClassName = $it0.next();
	{
		if(subjectClassName == positionInformation.className) {
			return;
		}
	}
	}}
	throw new haxe.exception.Exception("This method may only be called by the subject of the signaler.",null,2);
}
hsl.haxe.DirectSignaler.prototype.removeBubblingTarget = function(value) {
	if(null != this.bubblingTargets) {
		this.bubblingTargets.remove(value);
	}
}
hsl.haxe.DirectSignaler.prototype.removeNotificationTarget = function(value) {
	if(null != this.notificationTargets) {
		this.notificationTargets.remove(value);
	}
}
hsl.haxe.DirectSignaler.prototype.unbind = function(listener) {
	this.sentinel.remove(new hsl.haxe._DirectSignaler.RegularBond(listener));
}
hsl.haxe.DirectSignaler.prototype.unbindAdvanced = function(listener) {
	this.sentinel.remove(new hsl.haxe._DirectSignaler.AdvancedBond(listener));
}
hsl.haxe.DirectSignaler.prototype.unbindVoid = function(listener) {
	this.sentinel.remove(new hsl.haxe._DirectSignaler.NiladicBond(listener));
}
hsl.haxe.DirectSignaler.prototype.__class__ = hsl.haxe.DirectSignaler;
hsl.haxe.DirectSignaler.__interfaces__ = [hsl.haxe.Signaler];
hsl.haxe.Bond = function(p) { if( p === $_ ) return; {
	this.halted = false;
}}
hsl.haxe.Bond.__name__ = ["hsl","haxe","Bond"];
hsl.haxe.Bond.prototype.halted = null;
hsl.haxe.Bond.prototype.willDestroyOnUse = null;
hsl.haxe.Bond.prototype.destroy = function() {
	null;
}
hsl.haxe.Bond.prototype.destroyOnUse = function() {
	this.willDestroyOnUse = true;
	return this;
}
hsl.haxe.Bond.prototype.halt = function() {
	this.halted = true;
}
hsl.haxe.Bond.prototype.resume = function() {
	this.halted = false;
}
hsl.haxe.Bond.prototype.__class__ = hsl.haxe.Bond;
if(!hsl.haxe._DirectSignaler) hsl.haxe._DirectSignaler = {}
hsl.haxe._DirectSignaler.LinkedBond = function(p) { if( p === $_ ) return; {
	hsl.haxe.Bond.call(this);
	this.destroyed = false;
}}
hsl.haxe._DirectSignaler.LinkedBond.__name__ = ["hsl","haxe","_DirectSignaler","LinkedBond"];
hsl.haxe._DirectSignaler.LinkedBond.__super__ = hsl.haxe.Bond;
for(var k in hsl.haxe.Bond.prototype ) hsl.haxe._DirectSignaler.LinkedBond.prototype[k] = hsl.haxe.Bond.prototype[k];
hsl.haxe._DirectSignaler.LinkedBond.prototype.destroyed = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.next = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.previous = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	return 0;
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.determineEquals = function(value) {
	return false;
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.destroy = function() {
	if(false == this.destroyed) {
		this.previous.next = this.next;
		this.next.previous = this.previous;
		this.destroyed = true;
	}
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.unlink = function() {
	if(false == this.destroyed) {
		this.previous.next = this.next;
		this.next.previous = this.previous;
		this.destroyed = true;
	}
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.__class__ = hsl.haxe._DirectSignaler.LinkedBond;
hsl.haxe._DirectSignaler.SentinelBond = function(p) { if( p === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.next = this.previous = this;
}}
hsl.haxe._DirectSignaler.SentinelBond.__name__ = ["hsl","haxe","_DirectSignaler","SentinelBond"];
hsl.haxe._DirectSignaler.SentinelBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.SentinelBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.SentinelBond.prototype.isConnected = null;
hsl.haxe._DirectSignaler.SentinelBond.prototype.add = function(value) {
	value.next = this;
	value.previous = this.previous;
	return this.previous = this.previous.next = value;
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	var node = this.next;
	while(node != this && 1 != propagationStatus) {
		propagationStatus = node.callListener(data,currentTarget,origin,propagationStatus);
		node = node.next;
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.getIsConnected = function() {
	return this.next != this;
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.remove = function(value) {
	var node = this.next;
	while(node != this) {
		if(node.determineEquals(value)) {
			if(false == node.destroyed) {
				node.previous.next = node.next;
				node.next.previous = node.previous;
				node.destroyed = true;
			}
			break;
		}
		node = node.next;
	}
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.__class__ = hsl.haxe._DirectSignaler.SentinelBond;
hsl.haxe._DirectSignaler.RegularBond = function(listener) { if( listener === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.listener = listener;
}}
hsl.haxe._DirectSignaler.RegularBond.__name__ = ["hsl","haxe","_DirectSignaler","RegularBond"];
hsl.haxe._DirectSignaler.RegularBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.RegularBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.RegularBond.prototype.listener = null;
hsl.haxe._DirectSignaler.RegularBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	if(false == this.halted) {
		this.listener(data);
		if(this.willDestroyOnUse) {
			if(false == this.destroyed) {
				this.previous.next = this.next;
				this.next.previous = this.previous;
				this.destroyed = true;
			}
		}
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.RegularBond.prototype.determineEquals = function(value) {
	return Std["is"](value,hsl.haxe._DirectSignaler.RegularBond) && Reflect.compareMethods(value.listener,this.listener);
}
hsl.haxe._DirectSignaler.RegularBond.prototype.__class__ = hsl.haxe._DirectSignaler.RegularBond;
hsl.haxe._DirectSignaler.NiladicBond = function(listener) { if( listener === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.listener = listener;
}}
hsl.haxe._DirectSignaler.NiladicBond.__name__ = ["hsl","haxe","_DirectSignaler","NiladicBond"];
hsl.haxe._DirectSignaler.NiladicBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.NiladicBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.NiladicBond.prototype.listener = null;
hsl.haxe._DirectSignaler.NiladicBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	if(false == this.halted) {
		this.listener();
		if(this.willDestroyOnUse) {
			if(false == this.destroyed) {
				this.previous.next = this.next;
				this.next.previous = this.previous;
				this.destroyed = true;
			}
		}
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.NiladicBond.prototype.determineEquals = function(value) {
	return Std["is"](value,hsl.haxe._DirectSignaler.NiladicBond) && Reflect.compareMethods(value.listener,this.listener);
}
hsl.haxe._DirectSignaler.NiladicBond.prototype.__class__ = hsl.haxe._DirectSignaler.NiladicBond;
hsl.haxe._DirectSignaler.AdvancedBond = function(listener) { if( listener === $_ ) return; {
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.listener = listener;
}}
hsl.haxe._DirectSignaler.AdvancedBond.__name__ = ["hsl","haxe","_DirectSignaler","AdvancedBond"];
hsl.haxe._DirectSignaler.AdvancedBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.AdvancedBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.AdvancedBond.prototype.listener = null;
hsl.haxe._DirectSignaler.AdvancedBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	if(this.halted == false) {
		var signal = new hsl.haxe.Signal(data,this,currentTarget,origin);
		this.listener(signal);
		if(this.willDestroyOnUse) {
			if(false == this.destroyed) {
				this.previous.next = this.next;
				this.next.previous = this.previous;
				this.destroyed = true;
			}
		}
		if(signal.immediatePropagationStopped) {
			return 1;
		}
		else if(signal.propagationStopped) {
			return 2;
		}
	}
	return propagationStatus;
}
hsl.haxe._DirectSignaler.AdvancedBond.prototype.determineEquals = function(value) {
	return Std["is"](value,hsl.haxe._DirectSignaler.AdvancedBond) && Reflect.compareMethods(value.listener,this.listener);
}
hsl.haxe._DirectSignaler.AdvancedBond.prototype.__class__ = hsl.haxe._DirectSignaler.AdvancedBond;
hsl.haxe._DirectSignaler.PropagationStatus = function() { }
hsl.haxe._DirectSignaler.PropagationStatus.__name__ = ["hsl","haxe","_DirectSignaler","PropagationStatus"];
hsl.haxe._DirectSignaler.PropagationStatus.prototype.__class__ = hsl.haxe._DirectSignaler.PropagationStatus;
sa.view.shader.HitareaVertex = function() { }
sa.view.shader.HitareaVertex.__name__ = ["sa","view","shader","HitareaVertex"];
sa.view.shader.HitareaVertex.create = function() {
	return "\n\n\tattribute vec2 vertexPosition;\n\t\n\tuniform mat4 projectionMatrix;\n\tuniform mat4 viewWorldMatrix;\n\t\t\t\t\n\tvoid main(void)\n\t{\n\t    gl_Position = projectionMatrix * viewWorldMatrix * vec4(vertexPosition, 0.0, 1.0);\n\t}\n\n";
}
sa.view.shader.HitareaVertex.prototype.__class__ = sa.view.shader.HitareaVertex;
hsl.haxe.Signal = function(data,currentBond,currentTarget,origin) { if( data === $_ ) return; {
	this.data = data;
	this.currentBond = currentBond;
	this.currentTarget = currentTarget;
	this.origin = origin;
	this.immediatePropagationStopped = false;
	this.propagationStopped = false;
}}
hsl.haxe.Signal.__name__ = ["hsl","haxe","Signal"];
hsl.haxe.Signal.prototype.currentBond = null;
hsl.haxe.Signal.prototype.currentTarget = null;
hsl.haxe.Signal.prototype.data = null;
hsl.haxe.Signal.prototype.data1 = null;
hsl.haxe.Signal.prototype.immediatePropagationStopped = null;
hsl.haxe.Signal.prototype.origin = null;
hsl.haxe.Signal.prototype.propagationStopped = null;
hsl.haxe.Signal.prototype.getData = function() {
	return this.data;
}
hsl.haxe.Signal.prototype.stopImmediatePropagation = function() {
	this.immediatePropagationStopped = true;
}
hsl.haxe.Signal.prototype.stopPropagation = function() {
	this.propagationStopped = true;
}
hsl.haxe.Signal.prototype.__class__ = hsl.haxe.Signal;
GLFramebuffer = function(p) { if( p === $_ ) return; {
	null;
}}
GLFramebuffer.__name__ = ["GLFramebuffer"];
GLFramebuffer.prototype.framebuffer = null;
GLFramebuffer.prototype.texture = null;
GLFramebuffer.prototype.width = null;
GLFramebuffer.prototype.height = null;
GLFramebuffer.prototype.__class__ = GLFramebuffer;
Vec2 = function(x,y) { if( x === $_ ) return; {
	this.x = x;
	this.y = y;
}}
Vec2.__name__ = ["Vec2"];
Vec2.prototype.x = null;
Vec2.prototype.y = null;
Vec2.prototype.set = function(x,y) {
	this.x = x;
	this.y = y;
}
Vec2.prototype.scale = function(factor) {
	this.x *= factor;
	this.y *= factor;
}
Vec2.prototype.multiply = function(x,y) {
	this.x *= x;
	this.y *= y;
}
Vec2.prototype.subtract = function(x,y) {
	this.x -= x;
	this.y -= y;
}
Vec2.prototype.normalize = function() {
	var invLength = 1 / Math.sqrt(this.x * this.x + this.y * this.y);
	this.x *= invLength;
	this.y *= invLength;
}
Vec2.prototype.transform = function(matrix) {
	var x1 = this.x, y1 = this.y, z1 = 0, w1 = 1;
	var mat = matrix.buffer;
	this.x = mat[0] * x1 + mat[4] * y1 + mat[8] * z1 + mat[12] * w1;
	this.y = mat[1] * x1 + mat[5] * y1 + mat[9] * z1 + mat[13] * w1;
}
Vec2.prototype.clone = function() {
	return new Vec2(this.x,this.y);
}
Vec2.prototype.__class__ = Vec2;
sa.view.TextureRenderer = function(p) { if( p === $_ ) return; {
	null;
}}
sa.view.TextureRenderer.__name__ = ["sa","view","TextureRenderer"];
sa.view.TextureRenderer.prototype.texture = null;
sa.view.TextureRenderer.prototype.gl = null;
sa.view.TextureRenderer.prototype.shaderProgram = null;
sa.view.TextureRenderer.prototype.vertexPositionAttribute = null;
sa.view.TextureRenderer.prototype.vertexBuffer = null;
sa.view.TextureRenderer.prototype.textureUniform = null;
sa.view.TextureRenderer.prototype.perspectiveMatrixUniform = null;
sa.view.TextureRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = GLUtil.createProgram(gl,sa.view.shader.PassVertex.create(),sa.view.shader.Texture.create());
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GLUtil.createInt8VertexBuffer(gl,[-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]);
	this.textureUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"texture");
	this.perspectiveMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"perspectiveMatrix");
}
sa.view.TextureRenderer.prototype.render = function(width,height) {
	var matrix = new Matrix4();
	matrix.ortho(-1,1,1,-1,0,1);
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(-10,-10,width + 20,height + 20);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR);
	this.gl.uniform1i(this.textureUniform,0);
	this.gl.uniformMatrix4fv(this.perspectiveMatrixUniform,false,matrix.buffer);
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
}
sa.view.TextureRenderer.prototype.__class__ = sa.view.TextureRenderer;
sa.view.shader.PlanktonVertex = function() { }
sa.view.shader.PlanktonVertex.__name__ = ["sa","view","shader","PlanktonVertex"];
sa.view.shader.PlanktonVertex.create = function() {
	return "\n\n\tattribute vec3 vertexPosition;\n\t\n\tuniform float elapsedTime;\n\tuniform float elapsedClickTime;\n\tuniform float peak;\n\tuniform float peakIncrement;\n\n\tuniform vec3 specularColor;\n\tuniform vec3 clickPos;\n\tuniform vec3 attractorPosition;\n\t\n\tuniform mat4 perspectiveMatrix;\n\tuniform mat4 objectMatrix;\n\tuniform mat4 rotationMatrix;\n\tuniform mat4 cameraMatrix;\n\t\n\tvarying vec4 color;\n\t\n\tvoid main(void)\n\t{\n\t\tvec4 worldPosition = objectMatrix * vec4(vertexPosition, 1.0);\n\t\tgl_PointSize = 1.0;\n\t\t\n\t\tfloat radiusSquared = pow(2.0, 2.0);\n\t\tvec3 spherePosition = attractorPosition;\n\t\tvec3 rayDir = normalize((cameraMatrix * vec4(0.0, 0.0, 10.0, 1.0)).xyz - worldPosition.xyz);\n\t\tvec3 sphereIntersectionToCenter = spherePosition - worldPosition.xyz;\n\t\t\n\t\tfloat sphereClosestApproach = dot(sphereIntersectionToCenter, rayDir);\n\t\t\n\t\tfloat value = 1.0;\n\t\tif (sphereClosestApproach > 0.0)\n\t\t{\n\t\t\tfloat l = length(sphereIntersectionToCenter);\n\t\t\tfloat sphereHalfCord2 = (radiusSquared - (l * l)) + (sphereClosestApproach * sphereClosestApproach);\n\n\t\t\tif (sphereHalfCord2 >= 0.0)\n\t\t\t{\t\t\t\n\t\t\t\tfloat dist = sphereClosestApproach - 1.0 / sphereHalfCord2;\n\t\t\t\tvalue = 0.4;\n\t\t\t\tworldPosition.z *= 1.0 + dist / 20.0;\n\t\t\t}\n\t\t}\n\t\t//value = clamp(value, 0.0, 1.0);\n\t\t\n\t\tfloat diffuse;\n\t\tfloat side;\n\t\tvec3 normal;\n\t\tif (vertexPosition.z == 0.0)\n\t\t{\n\t\t\tside = 0.0;\n\t\t\tdiffuse = 0.1;\n\t\t\tnormal = vec3(0.0, 1.0, 0.0);\n\t\t}\n\t\telse\n\t\t{\n\t\t\tside = 0.3;\n\t\t\tdiffuse = 1.0;\n\t\t\tnormal = vec3(0.0, -1.0, 0.0);\n\t\t}\n\t\t\n\t\tvalue += (worldPosition.z + 20.0) * 0.017;\n\t\tvalue = clamp(value, 0.0, 1.0);\n\t\t\t\n\t\tvec3 normalRot = normalize((rotationMatrix * vec4(normal, 1.0)).xyz);\n\t\tvec3 lightDir = normalize(attractorPosition.xyz - worldPosition.xyz);\n\t\t\n\t\tdiffuse = clamp(dot(normalRot, lightDir) * 1.0, 0.1, 1.0);\n\t\t\n\t\tfloat sinValue = clamp((sin(worldPosition.z * worldPosition.x * 0.03 + elapsedTime * 0.001 + peakIncrement) + 1.0) * 0.3, 0.0, 1.0);\n\t\tvec3 colorBase = vec3(111.0 / 255.0, 78.0 / 255.0, 129.0 / 255.0);\n\t\tvec3 colorSound = vec3(107.0 / 255.0, 186.0 / 255.0, 183.0 / 255.0);\n\t    gl_Position = perspectiveMatrix * worldPosition;\n\t\tcolor = vec4(\n\t\t\tcolorBase * value * 0.2 * (0.5 + peak) +   \n\t\t\tcolorSound * sinValue * 0.2 * value * (0.5 + peak)\n\t\t\t, 1.0);\n\t}\n";
}
sa.view.shader.PlanktonVertex.prototype.__class__ = sa.view.shader.PlanktonVertex;
sa.view.shader.Texture = function() { }
sa.view.shader.Texture.__name__ = ["sa","view","shader","Texture"];
sa.view.shader.Texture.create = function() {
	return "\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\t\n    uniform sampler2D texture;\n    \n\tvarying vec2 textureCoord;\n\t    \t\n\tvoid main(void)\n\t{\n        vec4 color = texture2D(texture, textureCoord);\n        gl_FragColor = color;\n\t}\n\n";
}
sa.view.shader.Texture.prototype.__class__ = sa.view.shader.Texture;
sa.view.BackgroundRenderer = function(p) { if( p === $_ ) return; {
	null;
}}
sa.view.BackgroundRenderer.__name__ = ["sa","view","BackgroundRenderer"];
sa.view.BackgroundRenderer.prototype.texture = null;
sa.view.BackgroundRenderer.prototype.projectionMatrix = null;
sa.view.BackgroundRenderer.prototype.cameraMatrix = null;
sa.view.BackgroundRenderer.prototype.gl = null;
sa.view.BackgroundRenderer.prototype.shaderProgram = null;
sa.view.BackgroundRenderer.prototype.vertexPositionAttribute = null;
sa.view.BackgroundRenderer.prototype.vertexBuffer = null;
sa.view.BackgroundRenderer.prototype.textureUniform = null;
sa.view.BackgroundRenderer.prototype.projectionMatrixUniform = null;
sa.view.BackgroundRenderer.prototype.viewWorldMatrixUniform = null;
sa.view.BackgroundRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = GLUtil.createProgram(gl,sa.view.shader.PassVertex2.create(),sa.view.shader.Texture.create());
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GLUtil.createInt8VertexBuffer(gl,[1,-1,-1,1,-1,-1,1,-1,1,1,-1,1]);
	this.textureUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"texture");
	this.projectionMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"projectionMatrix");
	this.viewWorldMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"viewWorldMatrix");
}
sa.view.BackgroundRenderer.prototype.render = function(width,height) {
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	this.gl.uniformMatrix4fv(this.projectionMatrixUniform,false,this.projectionMatrix.buffer);
	var viewWorldMatrix = new Matrix4(this.cameraMatrix);
	viewWorldMatrix.appendScale(1,-1,1);
	viewWorldMatrix.appendTranslation(0,0,-40);
	viewWorldMatrix.appendScale(80,80,1);
	this.gl.uniformMatrix4fv(this.viewWorldMatrixUniform,false,viewWorldMatrix.buffer);
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture);
	this.gl.uniform1i(this.textureUniform,0);
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
}
sa.view.BackgroundRenderer.prototype.__class__ = sa.view.BackgroundRenderer;
Vec4 = function(x,y,z,w) { if( x === $_ ) return; {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
}}
Vec4.__name__ = ["Vec4"];
Vec4.prototype.x = null;
Vec4.prototype.y = null;
Vec4.prototype.z = null;
Vec4.prototype.w = null;
Vec4.prototype.scale = function(factor) {
	this.x *= factor;
	this.y *= factor;
	this.z *= factor;
	this.w *= factor;
	return this;
}
Vec4.prototype.multiply = function(x,y,z,w) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
	this.w *= w;
	return this;
}
Vec4.prototype.subtract = function(x,y,z,w) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	this.w -= w;
	return this;
}
Vec4.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
}
Vec4.prototype.transform = function(matrix) {
	var x1 = this.x, y1 = this.y, z1 = this.z, w1 = this.w;
	var mat = matrix.buffer;
	this.x = mat[0] * x1 + mat[4] * y1 + mat[8] * z1 + mat[12] * w1;
	this.y = mat[1] * x1 + mat[5] * y1 + mat[9] * z1 + mat[13] * w1;
	this.z = mat[2] * x1 + mat[6] * y1 + mat[10] * z1 + mat[14] * w1;
	this.w = mat[3] * x1 + mat[7] * y1 + mat[11] * z1 + mat[15] * w1;
}
Vec4.prototype.project = function() {
	this.x /= this.w;
	this.y /= this.w;
	this.z /= this.w;
	this.w = 1;
}
Vec4.prototype.project3D = function(perspectiveMatrix,objectMatrix) {
	this.x *= this.w;
	this.y *= this.w;
	this.z *= this.w;
	var mp = new Matrix4();
	mp.multiply(perspectiveMatrix);
	mp.inverse();
	this.transform(mp);
	this.w = 1;
	var mo = new Matrix4();
	mo.multiply(objectMatrix);
	mo.inverse();
	this.transform(mo);
}
Vec4.prototype.clone = function() {
	return new Vec4(this.x,this.y,this.z,this.w);
}
Vec4.prototype.cloneToVec3 = function() {
	return new Vec3(this.x,this.y,this.z);
}
Vec4.prototype.__class__ = Vec4;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	}
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				{
					var _g1 = 2, _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) str += "," + js.Boot.__string_rec(o[i],s);
						else str += js.Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			{
				var _g = 0;
				while(_g < l) {
					var i1 = _g++;
					str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
				}
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					return "???";
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) continue;
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") continue;
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	}break;
	case "function":{
		return "<function>";
	}break;
	case "string":{
		return o;
	}break;
	default:{
		return String(o);
	}break;
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				if(cl == null) return false;
			}
		}
	}
	switch(cl) {
	case Int:{
		return Math.ceil(o%2147483648.0) === o;
	}break;
	case Float:{
		return typeof(o) == "number";
	}break;
	case Bool:{
		return o === true || o === false;
	}break;
	case String:{
		return typeof(o) == "string";
	}break;
	case Dynamic:{
		return true;
	}break;
	default:{
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}break;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	}
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	}
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		return oldsub.apply(this,[pos,len]);
	}
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
GLTextureRegistry = function(p) { if( p === $_ ) return; {
	this.images = new Array();
}}
GLTextureRegistry.__name__ = ["GLTextureRegistry"];
GLTextureRegistry.prototype.images = null;
GLTextureRegistry.prototype.gl = null;
GLTextureRegistry.prototype.register = function(name,texture) {
	this.images[name] = texture;
}
GLTextureRegistry.prototype.get = function(name) {
	return this.images[name];
}
GLTextureRegistry.prototype.createGLTextureFromImage = function(image,filter) {
	var texture = this.gl.createTexture();
	this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
	this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,image);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,filter != null?filter:this.gl.NEAREST);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,filter != null?filter:this.gl.NEAREST);
	if(filter == this.gl.NEAREST_MIPMAP_NEAREST || filter == this.gl.NEAREST_MIPMAP_LINEAR || filter == this.gl.LINEAR_MIPMAP_NEAREST || filter == this.gl.LINEAR_MIPMAP_LINEAR) {
		this.gl.generateMipmap(this.gl.TEXTURE_2D);
	}
	var result = new GLTexture();
	result.width = image.width;
	result.height = image.height;
	result.texture = texture;
	return result;
}
GLTextureRegistry.prototype.createGLTextureFromCanvas = function(canvas) {
	var testPowerOfTwoWidth = Std["int"](GLMathUtil.getNextPowerOfTwo(canvas.width));
	var testPowerOfTwoHight = Std["int"](GLMathUtil.getNextPowerOfTwo(canvas.height));
	if(testPowerOfTwoWidth != canvas.width || testPowerOfTwoHight != canvas.height) throw "Canvas size must be a valid texture size!";
	var texture = this.gl.createTexture();
	this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
	this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,canvas);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);
	this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST);
	var result = new GLTexture();
	result.width = canvas.width;
	result.height = canvas.height;
	result.texture = texture;
	return result;
}
GLTextureRegistry.prototype.updateGLTextureFromCanvas = function(texture,canvas) {
	var testPowerOfTwoWidth = Std["int"](GLMathUtil.getNextPowerOfTwo(canvas.width));
	var testPowerOfTwoHight = Std["int"](GLMathUtil.getNextPowerOfTwo(canvas.height));
	if(testPowerOfTwoWidth != canvas.width || testPowerOfTwoHight != canvas.height) throw "Canvas size must be a valid texture size!";
	this.gl.bindTexture(this.gl.TEXTURE_2D,texture.texture);
	this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,canvas);
	texture.width = canvas.width;
	texture.height = canvas.height;
}
GLTextureRegistry.prototype.__class__ = GLTextureRegistry;
bpmjs.ContextBuilder = function(p) { if( p === $_ ) return; {
	this.context = new bpmjs.Context();
}}
bpmjs.ContextBuilder.__name__ = ["bpmjs","ContextBuilder"];
bpmjs.ContextBuilder.defaultContext = null;
bpmjs.ContextBuilder.build = function(configClass,contextConfig) {
	var builder = new bpmjs.ContextBuilder();
	bpmjs.ContextBuilder.defaultContext = builder.context;
	builder.contextConfig = contextConfig == null?bpmjs.ContextBuilder.createDefaultContextConfig():contextConfig;
	builder.configClass = configClass;
	builder.buildInternal();
	return bpmjs.ContextBuilder.defaultContext;
}
bpmjs.ContextBuilder.configure = function(object) {
	var builder = new bpmjs.ContextBuilder();
	if(bpmjs.ContextBuilder.defaultContext == null) throw builder.createError("Cannot configure Object as no context is available!");
	builder.contextConfig = bpmjs.ContextBuilder.defaultContext.contextConfig;
	builder.context = bpmjs.ContextBuilder.defaultContext;
	builder.configureInternal(object);
}
bpmjs.ContextBuilder.createDefaultContextConfig = function() {
	var defaultContextConfig = new bpmjs.ContextConfig();
	defaultContextConfig.frontController = new bpmjs.DefaultFrontController();
	return defaultContextConfig;
}
bpmjs.ContextBuilder.prototype.context = null;
bpmjs.ContextBuilder.prototype.contextConfig = null;
bpmjs.ContextBuilder.prototype.configClass = null;
bpmjs.ContextBuilder.prototype.config = null;
bpmjs.ContextBuilder.prototype.configureInternal = function(object) {
	var contextObject = this.context.addObject("configured",Type.getClass(object),object);
	this.wireContextObject(contextObject);
	this.registerDispatchersForContextObject(contextObject);
	this.registerReceiversForContextObject(contextObject);
	this.doCompleteCallForContextObject(contextObject);
}
bpmjs.ContextBuilder.prototype.buildInternal = function() {
	this.context.contextConfig = this.contextConfig;
	this.config = Type.createInstance(this.configClass,[]);
	this.createObjects();
	this.wireInjections();
	this.registerDispatchers();
	this.registerReceivers();
	this.doCompleteCall();
	this.doPostCompleteCall();
}
bpmjs.ContextBuilder.prototype.createObjects = function() {
	if(this.configClass.__rtti == null) throw this.createError("Config class must have RTTI enabled!");
	var infos = new haxe.rtti.XmlParser().processElement(Xml.parse(this.configClass.__rtti).firstElement());
	var classDef = haxe.rtti.TypeApi.typeInfos(infos);
	{ var $it0 = classDef.fields.iterator();
	while( $it0.hasNext() ) { var field = $it0.next();
	{
		var $e = field.type;
		switch( $e[1] ) {
		case 2:
		var params = $e[3], name = $e[2];
		{
			var type = Type.resolveClass(name);
			var instance = Reflect.field(this.config,field.name);
			this.context.addObject(field.name,type,instance);
			if(type == Array) {
				var list = instance;
				{
					var _g = 0;
					while(_g < list.length) {
						var listInstance = list[_g];
						++_g;
						this.context.addObject("dynamic",Type.getClass(listInstance),listInstance);
					}
				}
			}
		}break;
		default:{
			continue;
		}break;
		}
	}
	}}
}
bpmjs.ContextBuilder.prototype.wireInjections = function() {
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.wireContextObject(contextObject);
	}
}
bpmjs.ContextBuilder.prototype.wireContextObject = function(contextObject) {
	if(contextObject.type.__rtti == null) return;
	var infos = new haxe.rtti.XmlParser().processElement(Xml.parse(contextObject.type.__rtti).firstElement());
	var classDef = haxe.rtti.TypeApi.typeInfos(infos);
	var metaDatas = haxe.rtti.Meta.getFields(contextObject.type);
	{ var $it0 = classDef.fields.iterator();
	while( $it0.hasNext() ) { var field = $it0.next();
	{
		var $e = field.type;
		switch( $e[1] ) {
		case 2:
		var params = $e[3], name = $e[2];
		{
			var meta = Reflect.field(metaDatas,field.name);
			if(meta != null && Reflect.hasField(meta,"Inject")) {
				var type = Type.resolveClass(name);
				var wiredObject = type == bpmjs.Context?this.context:this.context.getObjectByType(type);
				contextObject.object[field.name] = wiredObject;
			}
		}break;
		default:{
			continue;
		}break;
		}
	}
	}}
}
bpmjs.ContextBuilder.prototype.registerDispatchers = function() {
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.registerDispatchersForContextObject(contextObject);
	}
}
bpmjs.ContextBuilder.prototype.registerDispatchersForContextObject = function(contextObject) {
	var metaDatas = haxe.rtti.Meta.getType(contextObject.type);
	var managedEvents = Reflect.field(metaDatas,"ManagedEvents");
	if(managedEvents != null) {
		{
			var _g = 0;
			while(_g < managedEvents.length) {
				var eventType = managedEvents[_g];
				++_g;
				this.contextConfig.frontController.addDispatcher(contextObject.object,eventType);
			}
		}
	}
}
bpmjs.ContextBuilder.prototype.registerReceivers = function() {
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.registerReceiversForContextObject(contextObject);
	}
}
bpmjs.ContextBuilder.prototype.registerReceiversForContextObject = function(contextObject) {
	if(contextObject.type.__rtti == null) return;
	var infos = new haxe.rtti.XmlParser().processElement(Xml.parse(contextObject.type.__rtti).firstElement());
	var classDef = haxe.rtti.TypeApi.typeInfos(infos);
	var metaDatas = haxe.rtti.Meta.getFields(contextObject.type);
	{ var $it0 = classDef.fields.iterator();
	while( $it0.hasNext() ) { var field = $it0.next();
	{
		var $e = field.type;
		switch( $e[1] ) {
		case 4:
		var ret = $e[3], args = $e[2];
		{
			var meta = Reflect.field(metaDatas,field.name);
			if(meta != null && Reflect.hasField(meta,"MessageHandler")) {
				{ var $it1 = args.iterator();
				while( $it1.hasNext() ) { var argument = $it1.next();
				{
					var $e = argument.t;
					switch( $e[1] ) {
					case 2:
					var params = $e[3], name = $e[2];
					{
						var type = Type.resolveClass(name);
						this.contextConfig.frontController.addReceiver(contextObject.object,field.name,type);
					}break;
					default:{
						continue;
					}break;
					}
					break;
				}
				}}
			}
		}break;
		default:{
			continue;
		}break;
		}
	}
	}}
}
bpmjs.ContextBuilder.prototype.doCompleteCall = function() {
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.doCompleteCallForContextObject(contextObject);
	}
}
bpmjs.ContextBuilder.prototype.doCompleteCallForContextObject = function(contextObject) {
	var object = contextObject.object;
	var metaDatas = haxe.rtti.Meta.getFields(contextObject.type);
	{
		var _g = 0, _g1 = Reflect.fields(metaDatas);
		while(_g < _g1.length) {
			var fieldName = _g1[_g];
			++_g;
			var meta = Reflect.field(metaDatas,fieldName);
			if(Reflect.hasField(meta,"Complete")) {
				Reflect.field(object,fieldName).apply(object,[]);
			}
		}
	}
}
bpmjs.ContextBuilder.prototype.doPostCompleteCall = function() {
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		var object = contextObject.object;
		var metaDatas = haxe.rtti.Meta.getFields(contextObject.type);
		{
			var _g2 = 0, _g3 = Reflect.fields(metaDatas);
			while(_g2 < _g3.length) {
				var fieldName = _g3[_g2];
				++_g2;
				var meta = Reflect.field(metaDatas,fieldName);
				if(Reflect.hasField(meta,"PostComplete")) {
					Reflect.field(object,fieldName).apply(object,[]);
				}
			}
		}
	}
}
bpmjs.ContextBuilder.prototype.createError = function(message) {
	return "ContextBuilder ERROR: " + message;
}
bpmjs.ContextBuilder.prototype.__class__ = bpmjs.ContextBuilder;
GLDisplayList = function(p) { if( p === $_ ) return; {
	this.lastFrameTime = Date.now().getTime();
	this.startTime = this.lastFrameTime;
	this.enterFrameSignaler = new hsl.haxe.DirectSignaler(this);
	this.hitareaPicker = new GLHitareaPicker();
	GLMouseRegistry.getInstance().mouseDownSignaler.bind($closure(this,"handleMouseDown"));
	GLMouseRegistry.getInstance().mouseMoveSignaler.bind($closure(this,"handleMouseMove"));
	this.cursorClient = GLMouseRegistry.getInstance().createCursorClient();
}}
GLDisplayList.__name__ = ["GLDisplayList"];
GLDisplayList.instance = null;
GLDisplayList.getDefault = function() {
	if(GLDisplayList.instance == null) {
		GLDisplayList.instance = new GLDisplayList();
		GLDisplayList.instance.stage = new GLStage();
		GLDisplayList.instance.initDisplayObject(GLDisplayList.instance.stage);
	}
	return GLDisplayList.instance;
}
GLDisplayList.prototype.stage = null;
GLDisplayList.prototype.hitareaPicker = null;
GLDisplayList.prototype.lastFrameTime = null;
GLDisplayList.prototype.startTime = null;
GLDisplayList.prototype.cursorClient = null;
GLDisplayList.prototype.enterFrameSignaler = null;
GLDisplayList.prototype.initDisplayObject = function(displayObject) {
	displayObject.stage = this.stage;
	displayObject.enterFrameSignaler = this.enterFrameSignaler;
}
GLDisplayList.prototype.initInteractiveObject = function(interactiveObject) {
	interactiveObject.mouseDownSignaler = new hsl.haxe.DirectSignaler(this);
}
GLDisplayList.prototype.setStageSize = function(width,height) {
	this.stage.stageWidth = width;
	this.stage.stageHeight = height;
}
GLDisplayList.prototype.dispatchEnterFrame = function() {
	var time = Date.now().getTime();
	var frame = new GLFrame();
	frame.time = time;
	frame.timer = time - this.startTime;
	frame.frameTime = time - this.lastFrameTime;
	this.lastFrameTime = time;
	this.enterFrameSignaler.dispatch(frame,null,{ fileName : "GLDisplayList.hx", lineNumber : 69, className : "GLDisplayList", methodName : "dispatchEnterFrame"});
}
GLDisplayList.prototype.handleMouseDown = function(position) {
	var result = this.hitareaPicker.pick(this.stage,position);
	if(result != null) result.mouseDownSignaler.dispatch(result,null,{ fileName : "GLDisplayList.hx", lineNumber : 76, className : "GLDisplayList", methodName : "handleMouseDown"});
}
GLDisplayList.prototype.handleMouseMove = function(position) {
	var result = this.hitareaPicker.pick(this.stage,position);
	if(result != null) this.cursorClient.handCursor();
	else this.cursorClient.defaultCursor();
}
GLDisplayList.prototype.__class__ = GLDisplayList;
GLAnimationFrame = function() { }
GLAnimationFrame.__name__ = ["GLAnimationFrame"];
GLAnimationFrame.run = function(method,ms) {
	if(ms == null) ms = 0;
	var secureMethod = function() {
		try {
			method();
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					haxe.Log.trace("Error executing GLAnimationFrame: " + e,{ fileName : "GLAnimationFrame.hx", lineNumber : 16, className : "GLAnimationFrame", methodName : "run"});
				}
			}
		}
	}
	if(ms == 0) {
		var window = js.Lib.window;
		var requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
		if(requestAnimationFrame == null) {
			var requester = function() {
				requestAnimationFrame(requester);
				secureMethod();
			}
			requestAnimationFrame(requester);
		}
		else {
			var timer = new haxe.Timer(Std["int"](1000 / 60));
			timer.run = secureMethod;
		}
	}
	else {
		var timer = new haxe.Timer(Std["int"](1000 / ms));
		timer.run = secureMethod;
	}
}
GLAnimationFrame.prototype.__class__ = GLAnimationFrame;
sa.view.shader.Color = function() { }
sa.view.shader.Color.__name__ = ["sa","view","shader","Color"];
sa.view.shader.Color.create = function() {
	return "\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\t\n\tvarying vec4 color;\n\t\n\tvoid main(void)\n\t{\n   \t\tgl_FragColor = color;\n\t}\n\n";
}
sa.view.shader.Color.prototype.__class__ = sa.view.shader.Color;
bpmjs.Event = function(type) { if( type === $_ ) return; {
	this.type = type;
}}
bpmjs.Event.__name__ = ["bpmjs","Event"];
bpmjs.Event.prototype.type = null;
bpmjs.Event.prototype.target = null;
bpmjs.Event.prototype.__class__ = bpmjs.Event;
if(!bpmjs._Event) bpmjs._Event = {}
bpmjs._Event.ListenerForType = function(type,listener) { if( type === $_ ) return; {
	this.type = type;
	this.listener = listener;
}}
bpmjs._Event.ListenerForType.__name__ = ["bpmjs","_Event","ListenerForType"];
bpmjs._Event.ListenerForType.prototype.type = null;
bpmjs._Event.ListenerForType.prototype.listener = null;
bpmjs._Event.ListenerForType.prototype.__class__ = bpmjs._Event.ListenerForType;
if(!sa.event) sa.event = {}
sa.event.StageResize = function(p) { if( p === $_ ) return; {
	bpmjs.Event.call(this,"stageResize");
}}
sa.event.StageResize.__name__ = ["sa","event","StageResize"];
sa.event.StageResize.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) sa.event.StageResize.prototype[k] = bpmjs.Event.prototype[k];
sa.event.StageResize.prototype.__class__ = sa.event.StageResize;
sa.controller.AudioController = function(p) { if( p === $_ ) return; {
	this.audio = js.Lib.document.getElementById("audio");
	this.audio.loop = "loop";
	{
		this.peaks = peak;
	}
}}
sa.controller.AudioController.__name__ = ["sa","controller","AudioController"];
sa.controller.AudioController.prototype.commonModel = null;
sa.controller.AudioController.prototype.audio = null;
sa.controller.AudioController.prototype.peaks = null;
sa.controller.AudioController.prototype.handleLauncherStart = function(event) {
	this.audio.play();
	var timer = new haxe.Timer(Std["int"](1000 / 30));
	timer.run = $closure(this,"handleTimer");
}
sa.controller.AudioController.prototype.handleTimer = function() {
	var frame = Math.round(this.audio.currentTime * 1000 / 30);
	if(frame < this.peaks.length) this.commonModel.peak = this.peaks[frame] / 1000;
	else this.commonModel.peak = 0;
}
sa.controller.AudioController.prototype.__class__ = sa.controller.AudioController;
sa.controller.AudioController.__interfaces__ = [haxe.rtti.Infos];
haxe.StackItem = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.Stack = function() { }
haxe.Stack.__name__ = ["haxe","Stack"];
haxe.Stack.callStack = function() {
	return haxe.Stack.makeStack("$s");
}
haxe.Stack.exceptionStack = function() {
	return haxe.Stack.makeStack("$e");
}
haxe.Stack.toString = function(stack) {
	var b = new StringBuf();
	{
		var _g = 0;
		while(_g < stack.length) {
			var s = stack[_g];
			++_g;
			b.b[b.b.length] = "\nCalled from ";
			haxe.Stack.itemToString(b,s);
		}
	}
	return b.b.join("");
}
haxe.Stack.itemToString = function(b,s) {
	var $e = s;
	switch( $e[1] ) {
	case 0:
	{
		b.b[b.b.length] = "a C function";
	}break;
	case 1:
	var m = $e[2];
	{
		b.b[b.b.length] = "module ";
		b.b[b.b.length] = m;
	}break;
	case 2:
	var line = $e[4], file = $e[3], s1 = $e[2];
	{
		if(s1 != null) {
			haxe.Stack.itemToString(b,s1);
			b.b[b.b.length] = " (";
		}
		b.b[b.b.length] = file;
		b.b[b.b.length] = " line ";
		b.b[b.b.length] = line;
		if(s1 != null) b.b[b.b.length] = ")";
	}break;
	case 3:
	var meth = $e[3], cname = $e[2];
	{
		b.b[b.b.length] = cname;
		b.b[b.b.length] = ".";
		b.b[b.b.length] = meth;
	}break;
	case 4:
	var n = $e[2];
	{
		b.b[b.b.length] = "local function #";
		b.b[b.b.length] = n;
	}break;
	}
}
haxe.Stack.makeStack = function(s) {
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = [];
			}
		}
		return $r;
	}(this));
	var m = new Array();
	{
		var _g1 = 0, _g = a.length - (s == "$s"?2:0);
		while(_g1 < _g) {
			var i = _g1++;
			var d = a[i].split("::");
			m.unshift(haxe.StackItem.Method(d[0],d[1]));
		}
	}
	return m;
}
haxe.Stack.prototype.__class__ = haxe.Stack;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__;
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":{
		return ValueType.TBool;
	}break;
	case "string":{
		return ValueType.TClass(String);
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	}break;
	case "object":{
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	}break;
	case "function":{
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	}break;
	case "undefined":{
		return ValueType.TNull;
	}break;
	default:{
		return ValueType.TUnknown;
	}break;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) return false;
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				return false;
			}
		}
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
GLTimeout = function() { }
GLTimeout.__name__ = ["GLTimeout"];
GLTimeout.executeLater = function(ms,method) {
	var timer = new haxe.Timer(ms == null?10:ms);
	timer.run = function() {
		method();
		timer.stop();
	}
}
GLTimeout.prototype.__class__ = GLTimeout;
bpmjs.TaskGroup = function(p) { if( p === $_ ) return; {
	bpmjs.Task.call(this);
	this.tasks = new Array();
}}
bpmjs.TaskGroup.__name__ = ["bpmjs","TaskGroup"];
bpmjs.TaskGroup.__super__ = bpmjs.Task;
for(var k in bpmjs.Task.prototype ) bpmjs.TaskGroup.prototype[k] = bpmjs.Task.prototype[k];
bpmjs.TaskGroup.prototype.tasks = null;
bpmjs.TaskGroup.prototype.add = function(task) {
	this.tasks.push(task);
}
bpmjs.TaskGroup.prototype.doStart = function() {
	this.nextTask();
}
bpmjs.TaskGroup.prototype.nextTask = function() {
	if(this.tasks.length > 0) {
		var task = this.tasks.pop();
		task.completeSignaler.bind($closure(this,"handleTaskComplete"));
		task.start({ fileName : "TaskGroup.hx", lineNumber : 29, className : "bpmjs.TaskGroup", methodName : "nextTask"});
	}
	else {
		this.complete();
	}
}
bpmjs.TaskGroup.prototype.handleTaskComplete = function(task) {
	this.nextTask();
}
bpmjs.TaskGroup.prototype.__class__ = bpmjs.TaskGroup;
sa.view.shader.StrangeAttractorVertex = function() { }
sa.view.shader.StrangeAttractorVertex.__name__ = ["sa","view","shader","StrangeAttractorVertex"];
sa.view.shader.StrangeAttractorVertex.create = function() {
	return "\n\n\tattribute vec3 vertexPosition;\n\tattribute vec3 icolor;\n\t\n\tuniform float elapsedTime;\n\tuniform float elapsedClickTime;\n\tuniform float peak;\n\n\tuniform vec3 specularColor1;\n\tuniform vec3 specularColor2;\n\tuniform vec3 clickColor;\n\tuniform vec3 clickPos;\n\t\n\tuniform mat4 perspectiveMatrix;\n\tuniform mat4 objectMatrix;\n\tuniform mat4 cameraMatrix;\n\tuniform mat4 shadowMatrix;\n\t\n\tvarying vec4 color;\n\t\n\tvoid main(void)\n\t{\n\t\tfloat v = 0.0;\n\t\tfloat maxTime = 1300.0;\n\t\tif (elapsedClickTime > 0.0 && elapsedClickTime < maxTime)\n\t\t{\n\t\t\tvec3 distanceToClick = clickPos - vertexPosition;\n\t\t\tfloat radWidth = 0.5;\n\t\t\tfloat radMaxSize = 10.0;\n\t\t\tfloat radius = elapsedClickTime / maxTime * radMaxSize;\n\t\t\tfloat dist1 = (radius - radWidth - length(distanceToClick)) * 0.1;\n\t\t\tfloat dist2 = (radius - length(distanceToClick)) * 0.1;\n\t\t\tv = clamp(dist2 - dist2 / dist1, 0.0, 1.0);\n\t\t}\n\n\t\tfloat v2 = clamp(pow(1.0 + peak, 2.0) * 3.0 - 4.0, 0.0, 4.0);\t\t\t\n\t\tvec4 vertexPositionWobble = vec4(vertexPosition, 1.0);\n\t\tvertexPositionWobble.x += sin(vertexPositionWobble.y * 2.0 + 1.0) * sin(vertexPositionWobble.y * 1.0 + elapsedTime * 0.01) * 0.02 * v2;\n\t\tvertexPositionWobble.y += sin(vertexPositionWobble.x * 1.0 + 2.0) * sin(vertexPositionWobble.x * 2.0 + elapsedTime * 0.005) * 0.04 * v2;\n\t\tvertexPositionWobble.z += sin(vertexPositionWobble.y * 1.0 + 3.0) * sin(vertexPositionWobble.y * 3.0 + elapsedTime * 0.01) * 0.04 * v2;\n\t\t\n\t\tvec4 positionRot = objectMatrix * vertexPositionWobble;\n\t\t\n\t    gl_Position = perspectiveMatrix * positionRot;\n\t\tgl_PointSize = clamp(3.0 - gl_Position.z / 7.0, 0.1, 1.5);\n\t\t\n\t\tvec3 normalRot = normalize(positionRot.xyz - (objectMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz);\n\t\tvec3 lightDir = normalize((cameraMatrix * vec4(10.0, 10.0, 0.0, 1.0)).xyz - positionRot.xyz);\n\t\t\n\t\tfloat diffuse = dot(normalRot, lightDir) * 0.5;\n\t\t\t\n\t\tvec3 viewDir = normalize((cameraMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz - positionRot.xyz);\n\t\t\n\t\tvec3 h1 = normalize(lightDir + viewDir);\n\t\tfloat specular1 = pow(dot(normalRot, h1), 60.0);\n\t\tif (!(specular1 < 0.0 || specular1 > 0.0))\n\t\t\tspecular1 = 0.0;\n\t\t\t\n\t\tvec3 h2 = normalize(-lightDir + viewDir);\n\t\tfloat specular2 = pow(dot(normalRot, h2), 40.0);\n\t\tif (!(specular2 < 0.0 || specular2 > 0.0))\n\t\t\tspecular2 = 0.0;\n\n\t\tvec3 h3 = normalize(-lightDir + vertexPositionWobble.xyz);\n\t\tfloat specular3 = pow(dot(normalRot, h3), 30.0);\n\t\tif (!(specular3 < 0.0 || specular3 > 0.0))\n\t\t\tspecular3 = 0.0;\n\n\t\tvec4 shadowPosition = shadowMatrix * positionRot;\n\t\tfloat shadow = (sin(shadowPosition.x * 1.0 + elapsedTime * 0.001 + sin(shadowPosition.y * 1.0 + elapsedTime * 0.002))) * 0.2 + 1.0;\n\t\tfloat shadow2 = sin(cos(shadowPosition.z) * sin(shadowPosition.y * 5.0 + elapsedTime * 0.0015) + shadowPosition.z * 10.0 + 3.0 + elapsedTime * 0.006) * sin((shadowMatrix * positionRot).z * 3.0 + 3.0 + elapsedTime * 0.002) * 0.2 + 1.0;\n\n\t\tcolor = vec4(\n\t\t\ticolor * 0.1 * shadow * shadow2 + \n\t\t\ticolor * clamp(diffuse, 0.0, 1.0) * shadow * shadow2 + \n\t\t\tspecularColor1 * clamp(specular1 * 0.4, 0.0, 1.0) * shadow * shadow2 + \n\t\t\tspecularColor2 * clamp(specular2 * 0.8, 0.0, 1.0) * shadow * shadow2 + \n\t\t\tspecularColor1 * clamp(specular3 * 0.4, 0.0, 1.0) * shadow * shadow2 + \n\t\t\tclickColor * v * 0.5\n\t\t\t, clamp(diffuse * 2.0, 0.5, 1.0));\n\t}\n";
}
sa.view.shader.StrangeAttractorVertex.prototype.__class__ = sa.view.shader.StrangeAttractorVertex;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) return true;
	}}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			null;
		}
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		
				for(var i in o)
					if( o.hasOwnProperty(i) )
						a.push(i);
			;
	}
	else {
		var t;
		try {
			t = o.__proto__;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					t = null;
				}
			}
		}
		if(t != null) o.__proto__ = null;
		
				for(var i in o)
					if( i != "__proto__" )
						a.push(i);
			;
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		{
			var _g1 = 0, _g = arguments.length;
			while(_g1 < _g) {
				var i = _g1++;
				a.push(arguments[i]);
			}
		}
		return f(a);
	}
}
Reflect.prototype.__class__ = Reflect;
sa.event.LauncherStart = function(p) { if( p === $_ ) return; {
	bpmjs.Event.call(this,"launcherStart");
}}
sa.event.LauncherStart.__name__ = ["sa","event","LauncherStart"];
sa.event.LauncherStart.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) sa.event.LauncherStart.prototype[k] = bpmjs.Event.prototype[k];
sa.event.LauncherStart.prototype.__class__ = sa.event.LauncherStart;
sa.view.PlanktonRenderer = function(p) { if( p === $_ ) return; {
	this.peakIncrement = 0;
	this.kuler = new Kuler();
	this.kuler[0].fromHex(65280);
	this.kuler[1].fromHex(255);
	this.kuler[2].fromHex(0);
	this.kuler[3].fromHex(0);
	this.kuler[4].fromHex(16711680);
	this.numParticlesEachSide = 150;
	this.numParticles = this.numParticlesEachSide * this.numParticlesEachSide;
	this.objectMatrix = new Matrix4();
	this.objectMatrix.identity();
	this.shadowMatrix = new Matrix4();
	this.shadowMatrix.identity();
	this.clickPos = new Vec3();
}}
sa.view.PlanktonRenderer.__name__ = ["sa","view","PlanktonRenderer"];
sa.view.PlanktonRenderer.prototype.attractorPosition = null;
sa.view.PlanktonRenderer.prototype.peak = null;
sa.view.PlanktonRenderer.prototype.peakIncrement = null;
sa.view.PlanktonRenderer.prototype.projectionMatrix = null;
sa.view.PlanktonRenderer.prototype.cameraMatrix = null;
sa.view.PlanktonRenderer.prototype.numParticles = null;
sa.view.PlanktonRenderer.prototype.numParticlesEachSide = null;
sa.view.PlanktonRenderer.prototype.gl = null;
sa.view.PlanktonRenderer.prototype.objectMatrix = null;
sa.view.PlanktonRenderer.prototype.shadowMatrix = null;
sa.view.PlanktonRenderer.prototype.vertexPositionAttribute = null;
sa.view.PlanktonRenderer.prototype.vertexBuffer = null;
sa.view.PlanktonRenderer.prototype.shaderProgram = null;
sa.view.PlanktonRenderer.prototype.perspectiveMatrixUniform = null;
sa.view.PlanktonRenderer.prototype.objectMatrixUniform = null;
sa.view.PlanktonRenderer.prototype.rotationMatrixUniform = null;
sa.view.PlanktonRenderer.prototype.cameraMatrixUniform = null;
sa.view.PlanktonRenderer.prototype.elapsedTimeUniform = null;
sa.view.PlanktonRenderer.prototype.attractorPositionUniform = null;
sa.view.PlanktonRenderer.prototype.peakIncrementUniform = null;
sa.view.PlanktonRenderer.prototype.peakUniform = null;
sa.view.PlanktonRenderer.prototype.vertexes = null;
sa.view.PlanktonRenderer.prototype.startTime = null;
sa.view.PlanktonRenderer.prototype.lastTime = null;
sa.view.PlanktonRenderer.prototype.kuler = null;
sa.view.PlanktonRenderer.prototype.clickTime = null;
sa.view.PlanktonRenderer.prototype.clickPos = null;
sa.view.PlanktonRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = GLUtil.createProgram(gl,sa.view.shader.PlanktonVertex.create(),sa.view.shader.Color.create());
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.perspectiveMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"perspectiveMatrix");
	this.objectMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"objectMatrix");
	this.rotationMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"rotationMatrix");
	this.cameraMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"cameraMatrix");
	this.elapsedTimeUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"elapsedTime");
	this.attractorPositionUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"attractorPosition");
	this.peakUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"peak");
	this.peakIncrementUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"peakIncrement");
	this.calculatePositions();
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER,this.vertexes,gl.STATIC_DRAW);
	this.startTime = Date.now().getTime();
}
sa.view.PlanktonRenderer.prototype.calculatePositions = function() {
	this.vertexes = new Float32Array(this.numParticles * 3);
	var particleSize = 250;
	var i = 0;
	{
		var _g1 = 0, _g = this.numParticlesEachSide;
		while(_g1 < _g) {
			var x = _g1++;
			var _g3 = 0, _g2 = this.numParticlesEachSide;
			while(_g3 < _g2) {
				var y = _g3++;
				var mx = (x - this.numParticlesEachSide / 2) / this.numParticlesEachSide * particleSize * 0.2;
				var my = (y - this.numParticlesEachSide / 2) / this.numParticlesEachSide * particleSize * 0.3;
				var mz = 0;
				this.vertexes[i * 3] = mx;
				this.vertexes[i * 3 + 1] = my;
				this.vertexes[i * 3 + 2] = mz * 1.0;
				i++;
			}
		}
	}
}
sa.view.PlanktonRenderer.prototype.render = function(width,height) {
	this.peakIncrement += this.peak;
	var time = Date.now().getTime();
	var elapsedClickTime = time - this.clickTime;
	var elapsedTime = time - this.startTime;
	var frameTime = time - this.lastTime;
	this.lastTime = time;
	var rotationM = new Matrix4();
	rotationM.appendEulerRotation(0,Math.PI / 2,0);
	rotationM.appendEulerRotation(0,0,0.9);
	rotationM.appendEulerRotation(0.3,0,0);
	this.objectMatrix.setFrom(this.cameraMatrix);
	this.objectMatrix.appendTranslation(4,2,-40);
	this.objectMatrix.multiply(rotationM);
	this.objectMatrix.appendTranslation(0,7,0);
	this.shadowMatrix.appendRotation(frameTime * 0.0001,{ x : 0.0, y : 1.0, z : Math.sin(-elapsedTime / 5000)});
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE);
	this.gl.uniformMatrix4fv(this.perspectiveMatrixUniform,false,this.projectionMatrix.buffer);
	this.gl.uniformMatrix4fv(this.objectMatrixUniform,false,this.objectMatrix.buffer);
	this.gl.uniformMatrix4fv(this.cameraMatrixUniform,false,this.cameraMatrix.buffer);
	this.gl.uniformMatrix4fv(this.rotationMatrixUniform,false,rotationM.buffer);
	this.gl.uniform1f(this.elapsedTimeUniform,elapsedTime);
	this.gl.uniform1f(this.peakIncrementUniform,this.peakIncrement);
	this.gl.uniform1f(this.peakUniform,this.peak);
	this.gl.uniform3f(this.attractorPositionUniform,this.attractorPosition.x,this.attractorPosition.y,this.attractorPosition.z);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,3,this.gl.FLOAT,false,0,0);
	this.gl.drawArrays(this.gl.LINES,0,this.numParticles);
	this.gl.disable(this.gl.BLEND);
}
sa.view.PlanktonRenderer.prototype.__class__ = sa.view.PlanktonRenderer;
haxe.rtti.CType = { __ename__ : ["haxe","rtti","CType"], __constructs__ : ["CUnknown","CEnum","CClass","CTypedef","CFunction","CAnonymous","CDynamic"] }
haxe.rtti.CType.CUnknown = ["CUnknown",0];
haxe.rtti.CType.CUnknown.toString = $estr;
haxe.rtti.CType.CUnknown.__enum__ = haxe.rtti.CType;
haxe.rtti.CType.CEnum = function(name,params) { var $x = ["CEnum",1,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CClass = function(name,params) { var $x = ["CClass",2,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CTypedef = function(name,params) { var $x = ["CTypedef",3,name,params]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CFunction = function(args,ret) { var $x = ["CFunction",4,args,ret]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CAnonymous = function(fields) { var $x = ["CAnonymous",5,fields]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.CType.CDynamic = function(t) { var $x = ["CDynamic",6,t]; $x.__enum__ = haxe.rtti.CType; $x.toString = $estr; return $x; }
haxe.rtti.Rights = { __ename__ : ["haxe","rtti","Rights"], __constructs__ : ["RNormal","RNo","RCall","RMethod","RDynamic","RInline"] }
haxe.rtti.Rights.RNormal = ["RNormal",0];
haxe.rtti.Rights.RNormal.toString = $estr;
haxe.rtti.Rights.RNormal.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RNo = ["RNo",1];
haxe.rtti.Rights.RNo.toString = $estr;
haxe.rtti.Rights.RNo.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RCall = function(m) { var $x = ["RCall",2,m]; $x.__enum__ = haxe.rtti.Rights; $x.toString = $estr; return $x; }
haxe.rtti.Rights.RMethod = ["RMethod",3];
haxe.rtti.Rights.RMethod.toString = $estr;
haxe.rtti.Rights.RMethod.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RDynamic = ["RDynamic",4];
haxe.rtti.Rights.RDynamic.toString = $estr;
haxe.rtti.Rights.RDynamic.__enum__ = haxe.rtti.Rights;
haxe.rtti.Rights.RInline = ["RInline",5];
haxe.rtti.Rights.RInline.toString = $estr;
haxe.rtti.Rights.RInline.__enum__ = haxe.rtti.Rights;
haxe.rtti.TypeTree = { __ename__ : ["haxe","rtti","TypeTree"], __constructs__ : ["TPackage","TClassdecl","TEnumdecl","TTypedecl"] }
haxe.rtti.TypeTree.TPackage = function(name,full,subs) { var $x = ["TPackage",0,name,full,subs]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TClassdecl = function(c) { var $x = ["TClassdecl",1,c]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TEnumdecl = function(e) { var $x = ["TEnumdecl",2,e]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeTree.TTypedecl = function(t) { var $x = ["TTypedecl",3,t]; $x.__enum__ = haxe.rtti.TypeTree; $x.toString = $estr; return $x; }
haxe.rtti.TypeApi = function() { }
haxe.rtti.TypeApi.__name__ = ["haxe","rtti","TypeApi"];
haxe.rtti.TypeApi.typeInfos = function(t) {
	var inf;
	var $e = t;
	switch( $e[1] ) {
	case 1:
	var c = $e[2];
	{
		inf = c;
	}break;
	case 2:
	var e = $e[2];
	{
		inf = e;
	}break;
	case 3:
	var t1 = $e[2];
	{
		inf = t1;
	}break;
	case 0:
	{
		throw "Unexpected Package";
	}break;
	}
	return inf;
}
haxe.rtti.TypeApi.isVar = function(t) {
	return (function($this) {
		var $r;
		var $e = t;
		switch( $e[1] ) {
		case 4:
		{
			$r = false;
		}break;
		default:{
			$r = true;
		}break;
		}
		return $r;
	}(this));
}
haxe.rtti.TypeApi.leq = function(f,l1,l2) {
	var it = l2.iterator();
	{ var $it0 = l1.iterator();
	while( $it0.hasNext() ) { var e1 = $it0.next();
	{
		if(!it.hasNext()) return false;
		var e2 = it.next();
		if(!f(e1,e2)) return false;
	}
	}}
	if(it.hasNext()) return false;
	return true;
}
haxe.rtti.TypeApi.rightsEq = function(r1,r2) {
	if(r1 == r2) return true;
	var $e = r1;
	switch( $e[1] ) {
	case 2:
	var m1 = $e[2];
	{
		var $e = r2;
		switch( $e[1] ) {
		case 2:
		var m2 = $e[2];
		{
			return m1 == m2;
		}break;
		default:{
			null;
		}break;
		}
	}break;
	default:{
		null;
	}break;
	}
	return false;
}
haxe.rtti.TypeApi.typeEq = function(t1,t2) {
	var $e = t1;
	switch( $e[1] ) {
	case 0:
	{
		return t2 == haxe.rtti.CType.CUnknown;
	}break;
	case 1:
	var params = $e[3], name = $e[2];
	{
		var $e = t2;
		switch( $e[1] ) {
		case 1:
		var params2 = $e[3], name2 = $e[2];
		{
			return name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 2:
	var params = $e[3], name = $e[2];
	{
		var $e = t2;
		switch( $e[1] ) {
		case 2:
		var params2 = $e[3], name2 = $e[2];
		{
			return name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 3:
	var params = $e[3], name = $e[2];
	{
		var $e = t2;
		switch( $e[1] ) {
		case 3:
		var params2 = $e[3], name2 = $e[2];
		{
			return name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 4:
	var ret = $e[3], args = $e[2];
	{
		var $e = t2;
		switch( $e[1] ) {
		case 4:
		var ret2 = $e[3], args2 = $e[2];
		{
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},args,args2) && haxe.rtti.TypeApi.typeEq(ret,ret2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 5:
	var fields = $e[2];
	{
		var $e = t2;
		switch( $e[1] ) {
		case 5:
		var fields2 = $e[2];
		{
			return haxe.rtti.TypeApi.leq(function(a,b) {
				return a.name == b.name && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			},fields,fields2);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	case 6:
	var t = $e[2];
	{
		var $e = t2;
		switch( $e[1] ) {
		case 6:
		var t21 = $e[2];
		{
			if(t == null != (t21 == null)) return false;
			return t == null || haxe.rtti.TypeApi.typeEq(t,t21);
		}break;
		default:{
			null;
		}break;
		}
	}break;
	}
	return false;
}
haxe.rtti.TypeApi.fieldEq = function(f1,f2) {
	if(f1.name != f2.name) return false;
	if(!haxe.rtti.TypeApi.typeEq(f1.type,f2.type)) return false;
	if(f1.isPublic != f2.isPublic) return false;
	if(f1.doc != f2.doc) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.get,f2.get)) return false;
	if(!haxe.rtti.TypeApi.rightsEq(f1.set,f2.set)) return false;
	if(f1.params == null != (f2.params == null)) return false;
	if(f1.params != null && f1.params.join(":") != f2.params.join(":")) return false;
	return true;
}
haxe.rtti.TypeApi.constructorEq = function(c1,c2) {
	if(c1.name != c2.name) return false;
	if(c1.doc != c2.doc) return false;
	if(c1.args == null != (c2.args == null)) return false;
	if(c1.args != null && !haxe.rtti.TypeApi.leq(function(a,b) {
		return a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
	},c1.args,c2.args)) return false;
	return true;
}
haxe.rtti.TypeApi.prototype.__class__ = haxe.rtti.TypeApi;
GLMouseRegistry = function(p) { if( p === $_ ) return; {
	null;
}}
GLMouseRegistry.__name__ = ["GLMouseRegistry"];
GLMouseRegistry.instance = null;
GLMouseRegistry.getInstance = function() {
	if(GLMouseRegistry.instance == null) GLMouseRegistry.instance = new GLMouseRegistry();
	return GLMouseRegistry.instance;
}
GLMouseRegistry.prototype.mouseDownSignaler = null;
GLMouseRegistry.prototype.mouseMoveSignaler = null;
GLMouseRegistry.prototype.canvas = null;
GLMouseRegistry.prototype.init = function(canvas) {
	this.canvas = canvas;
	this.mouseDownSignaler = new hsl.haxe.DirectSignaler(this);
	this.mouseMoveSignaler = new hsl.haxe.DirectSignaler(this);
	canvas.onmousedown = $closure(this,"onMouseDown");
	canvas.onmousemove = $closure(this,"onMouseMove");
}
GLMouseRegistry.prototype.setCursor = function(cursor) {
	this.canvas.style.cursor = cursor;
}
GLMouseRegistry.prototype.createCursorClient = function() {
	var client = new GLCursorClient();
	return client;
}
GLMouseRegistry.prototype.onMouseDown = function(e) {
	try {
		this.mouseDownSignaler.dispatch(new Vec2(e.layerX / this.canvas.clientWidth,e.layerY / this.canvas.clientHeight),null,{ fileName : "GLMouseRegistry.hx", lineNumber : 50, className : "GLMouseRegistry", methodName : "onMouseDown"});
	}
	catch( $e0 ) {
		{
			var e1 = $e0;
			{
				haxe.Log.trace(e1,{ fileName : "GLMouseRegistry.hx", lineNumber : 54, className : "GLMouseRegistry", methodName : "onMouseDown"});
			}
		}
	}
}
GLMouseRegistry.prototype.onMouseMove = function(e) {
	try {
		this.mouseMoveSignaler.dispatch(new Vec2(e.layerX / this.canvas.clientWidth,e.layerY / this.canvas.clientHeight),null,{ fileName : "GLMouseRegistry.hx", lineNumber : 62, className : "GLMouseRegistry", methodName : "onMouseMove"});
	}
	catch( $e0 ) {
		{
			var e1 = $e0;
			{
				haxe.Log.trace(e1,{ fileName : "GLMouseRegistry.hx", lineNumber : 66, className : "GLMouseRegistry", methodName : "onMouseMove"});
			}
		}
	}
}
GLMouseRegistry.prototype.__class__ = GLMouseRegistry;
MoveSetVec3 = function(current,to,acceleration) { if( current === $_ ) return; {
	this.current = current;
	this.to = to;
	this.acceleration = acceleration;
	this.moveSetX = new MoveSet(current.x,to.x,acceleration.x);
	this.moveSetY = new MoveSet(current.y,to.y,acceleration.y);
	this.moveSetZ = new MoveSet(current.z,to.z,acceleration.z);
}}
MoveSetVec3.__name__ = ["MoveSetVec3"];
MoveSetVec3.prototype.current = null;
MoveSetVec3.prototype.to = null;
MoveSetVec3.prototype.acceleration = null;
MoveSetVec3.prototype.moveSetX = null;
MoveSetVec3.prototype.moveSetY = null;
MoveSetVec3.prototype.moveSetZ = null;
MoveSetVec3.prototype.move = function(factor) {
	if(factor == null) factor = 1;
	this.moveSetX.to = this.to.x;
	this.moveSetX.acceleration = this.acceleration.x;
	this.moveSetX.move(factor);
	this.current.x = this.moveSetX.current;
	this.moveSetY.to = this.to.y;
	this.moveSetY.acceleration = this.acceleration.y;
	this.moveSetY.move(factor);
	this.current.y = this.moveSetY.current;
	this.moveSetZ.to = this.to.z;
	this.moveSetZ.acceleration = this.acceleration.z;
	this.moveSetZ.move(factor);
	this.current.z = this.moveSetZ.current;
}
MoveSetVec3.prototype.__class__ = MoveSetVec3;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	a.push(i);
	}}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	l.add(i);
	}}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(x));
	}}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(i++,x));
	}}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		{ var $it0 = it.iterator();
		while( $it0.hasNext() ) { var x = $it0.next();
		if(x == elt) return true;
		}}
	}
	else {
		{ var $it1 = it.iterator();
		while( $it1.hasNext() ) { var x = $it1.next();
		if(cmp(x,elt)) return true;
		}}
	}
	return false;
}
Lambda.exists = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) return true;
	}}
	return false;
}
Lambda.foreach = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(!f(x)) return false;
	}}
	return true;
}
Lambda.iter = function(it,f) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	f(x);
	}}
}
Lambda.filter = function(it,f) {
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) l.add(x);
	}}
	return l;
}
Lambda.fold = function(it,f,first) {
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	first = f(x,first);
	}}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) { var $it0 = it.iterator();
	while( $it0.hasNext() ) { var _ = $it0.next();
	n++;
	}}
	else { var $it1 = it.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	if(pred(x)) n++;
	}}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var v2 = $it0.next();
	{
		if(v == v2) return i;
		i++;
	}
	}}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	{ var $it0 = a.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(x);
	}}
	{ var $it1 = b.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	l.add(x);
	}}
	return l;
}
Lambda.prototype.__class__ = Lambda;
GLUtil = function() { }
GLUtil.__name__ = ["GLUtil"];
GLUtil.initGL = function(canvas,antialias) {
	var gl = canvas.getContext("experimental-webgl",{ antialias : antialias});
	if(gl == null) {
		throw "Could not initialise WebGL.";
	}
	return gl;
}
GLUtil.createProgram = function(gl,vertexSource,fragmentSource) {
	var shaderProgram = gl.createProgram();
	var vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs,vertexSource);
	gl.compileShader(vs);
	if(!gl.getShaderParameter(vs,gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(vs);
	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs,fragmentSource);
	gl.compileShader(fs);
	if(!gl.getShaderParameter(fs,gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(fs);
	gl.attachShader(shaderProgram,vs);
	gl.attachShader(shaderProgram,fs);
	gl.linkProgram(shaderProgram);
	if(!gl.getProgramParameter(shaderProgram,gl.LINK_STATUS)) throw "Could not link shader!";
	return shaderProgram;
}
GLUtil.createInt8VertexBuffer = function(gl,vertexes) {
	var vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER,new Int8Array(vertexes),gl.STATIC_DRAW);
	return vertexBuffer;
}
GLUtil.getUniformLocation = function(gl,shaderProgram,name) {
	var result = gl.getUniformLocation(shaderProgram,name);
	if(result == null) haxe.Log.trace("Could not find " + name + " in shader",{ fileName : "GLUtil.hx", lineNumber : 51, className : "GLUtil", methodName : "getUniformLocation"});
	return result;
}
GLUtil.loadFonts = function(fonts,complete) {
	WebFontConfig = { google : { families : fonts}, active : function() {
		complete();
	}};
	var wf = document.createElement("script");
	wf.src = ("https:" == document.location.protocol?"https":"http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
	wf.type = "text/javascript";
	wf.async = "true";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(wf,s);
}
GLUtil.prototype.__class__ = GLUtil;
sa.view.StrangeAttractorRenderer = function(p) { if( p === $_ ) return; {
	this.mode = 0;
	this.numParticles = 100000;
	this.positionMoveSpeed = 0.001;
	this.rotationMoveSpeed = 0.0001;
	this.defaultZ = -9;
	this.softPeak = 0;
	var start = new Vec2(Math.random() - 0.5,Math.random() - 0.5);
	start.normalize();
	start.scale(4);
	this.positionMoveSet = new MoveSetVec3(new Vec3(start.x,start.y,this.defaultZ - 20),new Vec3(0.0,0.0,this.defaultZ),new Vec3(this.positionMoveSpeed,this.positionMoveSpeed,this.positionMoveSpeed));
	this.rotationMoveSet = new MoveSetVec3(new Vec3(0.0,-3.0,-2.0),new Vec3(1.6,3.0,0.0),new Vec3(this.rotationMoveSpeed,this.rotationMoveSpeed,this.rotationMoveSpeed));
	this.effectivePosition = this.positionMoveSet.current.clone();
	this.kuler = new Kuler();
	this.kuler[0].fromHex(3126932);
	this.kuler[1].fromHex(16723519);
	this.kuler[2].fromHex(14155212);
	this.kuler[3].fromHex(12028092);
	this.kuler[4].fromHex(15977461);
	this.objectMatrix = new Matrix4();
	this.objectMatrix.identity();
	this.shadowMatrix = new Matrix4();
	this.shadowMatrix.identity();
	this.clickPos = new Vec3();
}}
sa.view.StrangeAttractorRenderer.__name__ = ["sa","view","StrangeAttractorRenderer"];
sa.view.StrangeAttractorRenderer.prototype.effectivePosition = null;
sa.view.StrangeAttractorRenderer.prototype.peak = null;
sa.view.StrangeAttractorRenderer.prototype.projectionMatrix = null;
sa.view.StrangeAttractorRenderer.prototype.cameraMatrix = null;
sa.view.StrangeAttractorRenderer.prototype.softPeak = null;
sa.view.StrangeAttractorRenderer.prototype.defaultZ = null;
sa.view.StrangeAttractorRenderer.prototype.numParticles = null;
sa.view.StrangeAttractorRenderer.prototype.gl = null;
sa.view.StrangeAttractorRenderer.prototype.objectMatrix = null;
sa.view.StrangeAttractorRenderer.prototype.shadowMatrix = null;
sa.view.StrangeAttractorRenderer.prototype.vertexPositionAttribute = null;
sa.view.StrangeAttractorRenderer.prototype.vertexBuffer = null;
sa.view.StrangeAttractorRenderer.prototype.colorAttribute = null;
sa.view.StrangeAttractorRenderer.prototype.colorBuffer = null;
sa.view.StrangeAttractorRenderer.prototype.shaderProgram = null;
sa.view.StrangeAttractorRenderer.prototype.perspectiveMatrixUniform = null;
sa.view.StrangeAttractorRenderer.prototype.objectMatrixUniform = null;
sa.view.StrangeAttractorRenderer.prototype.cameraMatrixUniform = null;
sa.view.StrangeAttractorRenderer.prototype.shadowMatrixUniform = null;
sa.view.StrangeAttractorRenderer.prototype.elapsedTimeUniform = null;
sa.view.StrangeAttractorRenderer.prototype.specularColorUniform1 = null;
sa.view.StrangeAttractorRenderer.prototype.specularColorUniform2 = null;
sa.view.StrangeAttractorRenderer.prototype.clickColorUniform = null;
sa.view.StrangeAttractorRenderer.prototype.elapsedClickTimeUniform = null;
sa.view.StrangeAttractorRenderer.prototype.clickPosUniform = null;
sa.view.StrangeAttractorRenderer.prototype.peakUniform = null;
sa.view.StrangeAttractorRenderer.prototype.vertexes = null;
sa.view.StrangeAttractorRenderer.prototype.colors = null;
sa.view.StrangeAttractorRenderer.prototype.startTime = null;
sa.view.StrangeAttractorRenderer.prototype.lastTime = null;
sa.view.StrangeAttractorRenderer.prototype.kuler = null;
sa.view.StrangeAttractorRenderer.prototype.positionMoveSet = null;
sa.view.StrangeAttractorRenderer.prototype.rotationMoveSet = null;
sa.view.StrangeAttractorRenderer.prototype.clickTime = null;
sa.view.StrangeAttractorRenderer.prototype.clickPos = null;
sa.view.StrangeAttractorRenderer.prototype.positionMoveSpeed = null;
sa.view.StrangeAttractorRenderer.prototype.rotationMoveSpeed = null;
sa.view.StrangeAttractorRenderer.prototype.mode = null;
sa.view.StrangeAttractorRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = GLUtil.createProgram(gl,sa.view.shader.StrangeAttractorVertex.create(),sa.view.shader.Color.create());
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	this.colorAttribute = gl.getAttribLocation(this.shaderProgram,"icolor");
	this.perspectiveMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"perspectiveMatrix");
	this.objectMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"objectMatrix");
	this.cameraMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"cameraMatrix");
	this.shadowMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"shadowMatrix");
	this.elapsedTimeUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"elapsedTime");
	this.specularColorUniform1 = GLUtil.getUniformLocation(gl,this.shaderProgram,"specularColor1");
	this.specularColorUniform2 = GLUtil.getUniformLocation(gl,this.shaderProgram,"specularColor2");
	this.clickColorUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"clickColor");
	this.elapsedClickTimeUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"elapsedClickTime");
	this.clickPosUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"clickPos");
	this.peakUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"peak");
	this.updateMode(0);
	GLMouseRegistry.getInstance().mouseDownSignaler.bind($closure(this,"shake"));
}
sa.view.StrangeAttractorRenderer.prototype.updateMode = function(newMode) {
	this.mode = newMode;
	switch(newMode) {
	case 0:{
		this.numParticles = 100000;
	}break;
	case 1:{
		this.numParticles = 500000;
	}break;
	case 2:{
		this.numParticles = 20000;
	}break;
	}
	this.updateParticleMode();
}
sa.view.StrangeAttractorRenderer.prototype.updateParticleMode = function() {
	this.calculatePositions();
	this.vertexBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertexes,this.gl.STATIC_DRAW);
	this.colorBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer);
	this.gl.bufferData(this.gl.ARRAY_BUFFER,this.colors,this.gl.STATIC_DRAW);
}
sa.view.StrangeAttractorRenderer.prototype.calculatePositions = function() {
	this.colors = new Float32Array(this.numParticles * 3);
	this.vertexes = new Float32Array(this.numParticles * 3);
	var _a = 1.111;
	var _b = 1.479;
	var _f = 4.494;
	var _g = 0.44;
	var _d = 0.135;
	var cx = 1.0, cy = 1.0, cz = 1.0, mx = 0.0, my = 0.0, mz = 0.0;
	var color = new Color();
	{
		var _g2 = 0, _g1 = this.numParticles;
		while(_g2 < _g1) {
			var i = _g2++;
			mx = cx + _d * (-_a * cx - cy * cy - cz * cz + _a * _f);
			my = cy + _d * (-cy + cx * cy - _b * cx * cz + _g);
			mz = cz + _d * (-cz + _b * cx * cy + cx * cz);
			cx = mx;
			cy = my;
			cz = mz;
			this.vertexes[i * 3] = mx * 0.4;
			this.vertexes[i * 3 + 1] = my * 0.4;
			this.vertexes[i * 3 + 2] = mz * 0.4;
			var l = Math.sqrt(cx * cx + cy * cy + cz * cz);
			color.mixFrom(this.kuler[0],this.kuler[1],l / 4);
			this.colors[i * 3] = color.r;
			this.colors[i * 3 + 1] = color.g;
			this.colors[i * 3 + 2] = color.b;
		}
	}
}
sa.view.StrangeAttractorRenderer.prototype.start = function() {
	this.startTime = Date.now().getTime();
	this.lastTime = Date.now().getTime();
}
sa.view.StrangeAttractorRenderer.prototype.render = function(width,height) {
	if(this.positionMoveSet.current.z >= this.defaultZ - 3) this.rotationMoveSpeed = 0.001;
	var time = Date.now().getTime();
	var elapsedClickTime = time - this.clickTime;
	var elapsedTime = time - this.startTime;
	var frameTime = time - this.lastTime;
	this.lastTime = Date.now().getTime();
	this.positionMoveSet.move(frameTime / 16);
	this.rotationMoveSet.move(frameTime / 16);
	this.effectivePosition.x = this.positionMoveSet.current.x + Math.cos(-elapsedTime / 1100) * 0.1;
	this.effectivePosition.y = this.positionMoveSet.current.y + Math.sin(-elapsedTime / 1000) * 0.1;
	this.effectivePosition.z = this.positionMoveSet.current.z;
	if(this.peak - this.softPeak > 0.4) this.shake(new Vec2(Math.random() * 0.6 + 0.2,Math.random() * 0.6 + 0.2));
	this.softPeak += (this.peak - this.softPeak) * 0.1;
	this.objectMatrix.setFrom(this.cameraMatrix);
	this.objectMatrix.appendTranslation(this.effectivePosition.x,this.effectivePosition.y,this.effectivePosition.z);
	this.objectMatrix.appendEulerRotation(this.rotationMoveSet.current.x + Math.sin(-elapsedTime / 2000) * 0.1,this.rotationMoveSet.current.y + Math.sin(-elapsedTime / 3300) * 0.1,this.rotationMoveSet.current.z + Math.sin(-elapsedTime / 4000) * 0.1);
	this.shadowMatrix.appendRotation(frameTime * 0.0001,{ x : 0.0, y : 1.0, z : Math.sin(-elapsedTime / 5000)});
	this.gl.useProgram(this.shaderProgram);
	this.gl.enableVertexAttribArray(this.colorAttribute);
	this.gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.gl.viewport(0,0,width,height);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE);
	this.gl.uniformMatrix4fv(this.perspectiveMatrixUniform,false,this.projectionMatrix.buffer);
	this.gl.uniformMatrix4fv(this.objectMatrixUniform,false,this.objectMatrix.buffer);
	this.gl.uniformMatrix4fv(this.shadowMatrixUniform,false,this.shadowMatrix.buffer);
	this.gl.uniformMatrix4fv(this.cameraMatrixUniform,false,this.cameraMatrix.buffer);
	this.gl.uniform1f(this.elapsedTimeUniform,elapsedTime);
	this.gl.uniform1f(this.peakUniform,this.softPeak);
	this.gl.uniform1f(this.elapsedClickTimeUniform,elapsedClickTime);
	this.gl.uniform3f(this.clickPosUniform,this.clickPos.x,this.clickPos.y,this.clickPos.z);
	this.gl.uniform3f(this.specularColorUniform1,this.kuler[2].r,this.kuler[2].g,this.kuler[2].b);
	this.gl.uniform3f(this.specularColorUniform2,this.kuler[3].r,this.kuler[3].g,this.kuler[3].b);
	this.gl.uniform3f(this.clickColorUniform,this.kuler[4].r,this.kuler[4].g,this.kuler[4].b);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,3,this.gl.FLOAT,false,0,0);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorBuffer);
	this.gl.vertexAttribPointer(this.colorAttribute,3,this.gl.FLOAT,false,0,0);
	if(this.mode != 2) {
		this.gl.drawArrays(this.gl.POINTS,0,this.numParticles);
	}
	else {
		this.gl.drawArrays(this.gl.LINE_LOOP,0,this.numParticles);
	}
	if(this.mode == 0) {
		this.gl.drawArrays(this.gl.LINES,0,this.numParticles * 0.01);
		this.gl.drawArrays(this.gl.TRIANGLE_STRIP,this.numParticles * 0.01,this.numParticles * 0.001);
	}
	this.gl.disable(this.gl.DEPTH_TEST);
}
sa.view.StrangeAttractorRenderer.prototype.shake = function(mousePos) {
	var angry = false;
	var hit = false;
	this.rotationMoveSet.acceleration.setFrom(this.rotationMoveSpeed);
	this.positionMoveSet.acceleration.setFrom(this.positionMoveSpeed);
	var elapsedClickTime = Date.now().getTime() - this.clickTime;
	if(elapsedClickTime < 0 || elapsedClickTime > 200) {
		var clickPos4 = new Vec4(mousePos.x,1 - mousePos.y,1.0,-this.defaultZ);
		clickPos4.subtract(0.5,0.5,0.0,0.0);
		clickPos4.multiply(2.0,2.0,1.0,1.0);
		clickPos4.project3D(this.projectionMatrix,this.objectMatrix);
		if(clickPos4.length() < 2.5) {
			this.clickPos.setFrom(null,clickPos4);
			this.clickTime = Date.now().getTime();
			hit = true;
		}
	}
	else {
		angry = true;
		this.rotationMoveSet.to = new Vec3(0.1 + (Math.random() - 0.5) * 0.3,2.2,-0.3 + (Math.random() - 0.5) * 0.1);
		this.rotationMoveSet.to.scale(Math.PI / 2);
		this.rotationMoveSet.acceleration.setFrom(this.rotationMoveSpeed * 5);
		this.positionMoveSet.to = new Vec3(0.0,0.0,this.defaultZ + 2.0 + (Math.random() - 0.5) * 0.5);
		this.positionMoveSet.acceleration.setFrom(this.positionMoveSpeed * 5);
	}
	if(!angry && !hit) {
		var positionTarget = new Vec3(mousePos.x,mousePos.y,0);
		positionTarget.subtract(0.5,0.5,0.0);
		positionTarget.scale(0.8);
		positionTarget.multiply(15.0,-9.0,0.0);
		positionTarget.z = this.defaultZ + (mousePos.x - 0.5) * -3;
		this.positionMoveSet.to = positionTarget;
		if(positionTarget.x > this.positionMoveSet.current.x) this.rotationMoveSet.to = new Vec3(0.8 - positionTarget.x / 50,-1.7 + positionTarget.y / 20,0.0);
		else this.rotationMoveSet.to = new Vec3(0.8 + positionTarget.x / 50,0.0 - positionTarget.y / 20,2.0);
		this.rotationMoveSet.to.scale(Math.PI / 2);
	}
}
sa.view.StrangeAttractorRenderer.prototype.__class__ = sa.view.StrangeAttractorRenderer;
GLTexture = function(p) { if( p === $_ ) return; {
	null;
}}
GLTexture.__name__ = ["GLTexture"];
GLTexture.prototype.width = null;
GLTexture.prototype.height = null;
GLTexture.prototype.texture = null;
GLTexture.prototype.__class__ = GLTexture;
haxe.TypeTools = function() { }
haxe.TypeTools.__name__ = ["haxe","TypeTools"];
haxe.TypeTools.getClassNames = function(value) {
	var result = new List();
	var valueClass = Std["is"](value,Class)?value:Type.getClass(value);
	while(null != valueClass) {
		result.add(Type.getClassName(valueClass));
		valueClass = Type.getSuperClass(valueClass);
	}
	return result;
}
haxe.TypeTools.prototype.__class__ = haxe.TypeTools;
StringBuf = function(p) { if( p === $_ ) return; {
	this.b = new Array();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
sa.view.PreloaderView = function(p) { if( p === $_ ) return; {
	this.current = 0;
}}
sa.view.PreloaderView.__name__ = ["sa","view","PreloaderView"];
sa.view.PreloaderView.prototype.current = null;
sa.view.PreloaderView.prototype.max = null;
sa.view.PreloaderView.prototype.start = function(message) {
	message = "";
	this.current++;
	var dots = "";
	{
		var _g1 = 0, _g = this.max;
		while(_g1 < _g) {
			var i = _g1++;
			if(i < this.current) dots += "=";
			else dots += "-";
		}
	}
	{
		document.getElementById("preloader").innerHTML = "Loading " + dots + " " + message + "";
	}
}
sa.view.PreloaderView.prototype.complete = function() {
	if(this.current == this.max) {
		document.getElementById("preloader").innerHTML = "";
	}
}
sa.view.PreloaderView.prototype.__class__ = sa.view.PreloaderView;
GLMathUtil = function() { }
GLMathUtil.__name__ = ["GLMathUtil"];
GLMathUtil.getNextPowerOfTwo = function(value) {
	var n = Std["int"](value);
	n--;
	n |= n >> 1;
	n |= n >> 2;
	n |= n >> 4;
	n |= n >> 8;
	n |= n >> 16;
	n++;
	return n;
}
GLMathUtil.prototype.__class__ = GLMathUtil;
sa.Config = function(p) { if( p === $_ ) return; {
	this.controller();
	this.model();
	this.view();
}}
sa.Config.__name__ = ["sa","Config"];
sa.Config.prototype.commonModel = null;
sa.Config.prototype.textureRegistry = null;
sa.Config.prototype.imageRegistry = null;
sa.Config.prototype.stageResizeAction = null;
sa.Config.prototype.launcher = null;
sa.Config.prototype.audioController = null;
sa.Config.prototype.cameraController = null;
sa.Config.prototype.canvasView = null;
sa.Config.prototype.preloaderView = null;
sa.Config.prototype.mainInterfaceView = null;
sa.Config.prototype.controller = function() {
	this.launcher = new sa.controller.Launcher();
	this.stageResizeAction = new sa.controller.StageResizeAction();
	this.audioController = new sa.controller.AudioController();
	this.cameraController = new sa.controller.CameraController();
}
sa.Config.prototype.model = function() {
	this.commonModel = new sa.model.CommonModel();
	this.commonModel.canvas = js.Lib.document.getElementById("content");
	this.commonModel.gl = GLUtil.initGL(this.commonModel.canvas,true);
	this.commonModel.windowWidth = Std["int"](js.Lib.window.innerWidth / 2 * 2);
	this.commonModel.windowHeight = Std["int"](js.Lib.window.innerHeight / 2 * 2);
	this.commonModel.showScene = false;
	this.commonModel.showCredits = false;
	this.imageRegistry = new GLImageRegistry();
	this.textureRegistry = new GLTextureRegistry();
	this.textureRegistry.gl = this.commonModel.gl;
	GLMouseRegistry.getInstance().init(this.commonModel.canvas);
	GLDisplayList.getDefault().stage.stageWidth = this.commonModel.windowWidth;
	GLDisplayList.getDefault().stage.stageHeight = this.commonModel.windowHeight;
}
sa.Config.prototype.view = function() {
	this.canvasView = new sa.view.CanvasView();
	this.preloaderView = new sa.view.PreloaderView();
	this.preloaderView.complete();
	this.mainInterfaceView = new sa.view.MainInterfaceView();
}
sa.Config.prototype.__class__ = sa.Config;
sa.Config.__interfaces__ = [haxe.rtti.Infos];
GLHitarea = function(p) { if( p === $_ ) return; {
	this.position = new Vec2();
	this.size = new Vec2();
}}
GLHitarea.__name__ = ["GLHitarea"];
GLHitarea.prototype.position = null;
GLHitarea.prototype.size = null;
GLHitarea.prototype.isUnder = function(matrix,positionOnStage) {
	var tl = this.position.clone();
	tl.transform(matrix);
	var br = this.size.clone();
	br.transform(matrix);
	return tl.x <= positionOnStage.x && br.x >= positionOnStage.x && tl.y <= positionOnStage.y && br.y >= positionOnStage.y;
}
GLHitarea.prototype.__class__ = GLHitarea;
sa.view.RocksRenderer = function(p) { if( p === $_ ) return; {
	this.first = false;
	this.flighters = new Array();
	{
		var _g = 0;
		while(_g < 30) {
			var i = _g++;
			var flighter = new sa.view.Flighter();
			flighter.position.x = 3 + Math.random() * 30 - 20;
			flighter.position.y = -2 - Math.random() * 3;
			flighter.position.z = -25 + flighter.rnd1 * 6;
			flighter.scale = 0.1 + flighter.rnd1 * 0.2;
			this.flighters.push(flighter);
		}
	}
}}
sa.view.RocksRenderer.__name__ = ["sa","view","RocksRenderer"];
sa.view.RocksRenderer.prototype.textureRegistry = null;
sa.view.RocksRenderer.prototype.projectionMatrix = null;
sa.view.RocksRenderer.prototype.cameraMatrix = null;
sa.view.RocksRenderer.prototype.gl = null;
sa.view.RocksRenderer.prototype.shaderProgram = null;
sa.view.RocksRenderer.prototype.vertexPositionAttribute = null;
sa.view.RocksRenderer.prototype.vertexBuffer = null;
sa.view.RocksRenderer.prototype.textureUniform = null;
sa.view.RocksRenderer.prototype.projectionMatrixUniform = null;
sa.view.RocksRenderer.prototype.viewWorldMatrixUniform = null;
sa.view.RocksRenderer.prototype.first = null;
sa.view.RocksRenderer.prototype.lastFrameTime = null;
sa.view.RocksRenderer.prototype.flighters = null;
sa.view.RocksRenderer.prototype.lastTexture = null;
sa.view.RocksRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = GLUtil.createProgram(gl,sa.view.shader.PassVertex2.create(),sa.view.shader.Texture.create());
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GLUtil.createInt8VertexBuffer(gl,[1,-1,-1,1,-1,-1,1,-1,1,1,-1,1]);
	this.textureUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"texture");
	this.projectionMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"projectionMatrix");
	this.viewWorldMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"viewWorldMatrix");
}
sa.view.RocksRenderer.prototype.render = function(width,height) {
	var time = Date.now().getTime();
	if(!this.first) {
		this.first = true;
		this.lastFrameTime = time;
	}
	var dt = time - this.lastFrameTime;
	this.lastFrameTime = time;
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.clearColor(1.0,1.0,1.0,1.0);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	this.gl.uniformMatrix4fv(this.projectionMatrixUniform,false,this.projectionMatrix.buffer);
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.uniform1i(this.textureUniform,0);
	this.showTexture(sa.view.TextureId.ROCK_RIGHT,10,0,-25,25,25);
	this.showTexture(sa.view.TextureId.STONES_RIGHT,3,-5,-23,4.5,4.5,0,0,-45);
	this.flighters.sort($closure(this,"f"));
	{
		var _g = 0, _g1 = this.flighters;
		while(_g < _g1.length) {
			var flighter = _g1[_g];
			++_g;
			flighter.position.x += 0.001 * dt;
			flighter.position.z += 0.0005 * dt;
			if(flighter.position.x > 20) {
				flighter.position.x = -10;
				flighter.position.z = -25 + flighter.rnd1 * 6;
			}
			this.showTexture(sa.view.TextureId.FLIGHTER,flighter.position.x,flighter.position.y,flighter.position.z,flighter.scale,flighter.scale,0,0,0);
		}
	}
	this.showTexture(sa.view.TextureId.ROCK_LEFT,-10,0,-16,16,16);
	this.showTexture(sa.view.TextureId.STONES_LEFT,-1,-4,-14,4.5,4.5,0,0,-45);
	this.showTexture(sa.view.TextureId.STRIPE2,-2,-2,-12,3 / 4,3,0,0,0);
	this.showTexture(sa.view.TextureId.STRIPE1,-1.7,-2,-13,3 / 4,3,0,0,0);
	this.gl.disable(this.gl.BLEND);
}
sa.view.RocksRenderer.prototype.f = function(f1,f2) {
	if(f1.position.z > f2.position.z) return 1;
	else if(f1.position.z < f2.position.z) return -1;
	else return 0;
}
sa.view.RocksRenderer.prototype.showTexture = function(textureId,x,y,z,sx,sy,ry,rz,rx) {
	if(rx == null) rx = 0;
	if(rz == null) rz = 0;
	if(ry == null) ry = 0;
	var viewWorldMatrix = new Matrix4(this.cameraMatrix);
	viewWorldMatrix.appendScale(1,-1,1);
	viewWorldMatrix.appendTranslation(x,y,z);
	viewWorldMatrix.appendScale(sx,sy,1);
	if(rx != 0 || ry != 0 || rz != 0) viewWorldMatrix.appendEulerRotation(ry,rz,rx);
	this.gl.uniformMatrix4fv(this.viewWorldMatrixUniform,false,viewWorldMatrix.buffer);
	var texture = this.textureRegistry.get(textureId).texture;
	if(texture != this.lastTexture) {
		this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
		this.lastTexture = texture;
	}
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
}
sa.view.RocksRenderer.prototype.__class__ = sa.view.RocksRenderer;
sa.view.Flighter = function(p) { if( p === $_ ) return; {
	this.rnd1 = Math.random();
	this.rnd2 = Math.random();
	this.position = new Vec3();
}}
sa.view.Flighter.__name__ = ["sa","view","Flighter"];
sa.view.Flighter.prototype.position = null;
sa.view.Flighter.prototype.scale = null;
sa.view.Flighter.prototype.rnd1 = null;
sa.view.Flighter.prototype.rnd2 = null;
sa.view.Flighter.prototype.__class__ = sa.view.Flighter;
if(typeof ease=='undefined') ease = {}
ease.Quad = function() { }
ease.Quad.__name__ = ["ease","Quad"];
ease.Quad.easeIn = function(t,b,c,d) {
	return c * (t /= d) * t + b;
}
ease.Quad.easeOut = function(t,b,c,d) {
	return -c * (t /= d) * (t - 2) + b;
}
ease.Quad.easeInOut = function(t,b,c,d) {
	if((t /= d / 2) < 1) return c / 2 * t * t + b;
	return -c / 2 * (--t * (t - 2) - 1) + b;
}
ease.Quad.prototype.__class__ = ease.Quad;
sa.view.TextureId = { __ename__ : ["sa","view","TextureId"], __constructs__ : ["STRIPE1","STRIPE2","BACKGROUND","STONES_RIGHT","STONES_LEFT","ROCK_LEFT","ROCK_RIGHT","CREDITS","FLIGHTER"] }
sa.view.TextureId.STRIPE1 = ["STRIPE1",0];
sa.view.TextureId.STRIPE1.toString = $estr;
sa.view.TextureId.STRIPE1.__enum__ = sa.view.TextureId;
sa.view.TextureId.STRIPE2 = ["STRIPE2",1];
sa.view.TextureId.STRIPE2.toString = $estr;
sa.view.TextureId.STRIPE2.__enum__ = sa.view.TextureId;
sa.view.TextureId.BACKGROUND = ["BACKGROUND",2];
sa.view.TextureId.BACKGROUND.toString = $estr;
sa.view.TextureId.BACKGROUND.__enum__ = sa.view.TextureId;
sa.view.TextureId.STONES_RIGHT = ["STONES_RIGHT",3];
sa.view.TextureId.STONES_RIGHT.toString = $estr;
sa.view.TextureId.STONES_RIGHT.__enum__ = sa.view.TextureId;
sa.view.TextureId.STONES_LEFT = ["STONES_LEFT",4];
sa.view.TextureId.STONES_LEFT.toString = $estr;
sa.view.TextureId.STONES_LEFT.__enum__ = sa.view.TextureId;
sa.view.TextureId.ROCK_LEFT = ["ROCK_LEFT",5];
sa.view.TextureId.ROCK_LEFT.toString = $estr;
sa.view.TextureId.ROCK_LEFT.__enum__ = sa.view.TextureId;
sa.view.TextureId.ROCK_RIGHT = ["ROCK_RIGHT",6];
sa.view.TextureId.ROCK_RIGHT.toString = $estr;
sa.view.TextureId.ROCK_RIGHT.__enum__ = sa.view.TextureId;
sa.view.TextureId.CREDITS = ["CREDITS",7];
sa.view.TextureId.CREDITS.toString = $estr;
sa.view.TextureId.CREDITS.__enum__ = sa.view.TextureId;
sa.view.TextureId.FLIGHTER = ["FLIGHTER",8];
sa.view.TextureId.FLIGHTER.toString = $estr;
sa.view.TextureId.FLIGHTER.__enum__ = sa.view.TextureId;
sa.view.shader.UnderWater = function() { }
sa.view.shader.UnderWater.__name__ = ["sa","view","shader","UnderWater"];
sa.view.shader.UnderWater.create = function() {
	return "\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\t\n\t#define NUM_RAYS 20\n\t\n    uniform float elapsedTime;\n    \n\tvarying vec2 textureCoord;\n\tvarying vec4 vertex;\n\t    \t\n\tvoid main(void)\n\t{\n   \t\tfloat value = 0.0;\n   \t\tfloat num = float(NUM_RAYS);\n   \t\t\n   \t\tfloat sinT1 = sin(elapsedTime * 0.002) * 0.2;\n   \t\tfloat sinT2 = sin(2.0 + elapsedTime * 0.0013) * 0.3;\n   \t\t\n   \t\tfor(int i = 0; i < NUM_RAYS; i++)\n   \t\t{\n   \t\t\tfloat fi = float(i + 2) / num;\n   \t\t\tfloat rad = float(i) * 0.2 + (1.0 + elapsedTime * 0.001) * 0.3;\n   \t\t\t\n\t   \t\tvec2 light = vec2(sin(fi * 13.3 + elapsedTime * 0.0002 + sin(fi * 13.3 + elapsedTime * 0.0005)) * 0.1 + 0.8, cos(fi * 18.0 + elapsedTime * 0.0001) * 0.1 + 1.2);\n\t   \t\tvec2 lightDir = normalize(vec2(sin(fi * 0.9 * (1.0 + 0.9 * sin(elapsedTime * 0.0001 + 2.0)) + sin(elapsedTime * 0.00005 + 3.0) * 0.1 + 0.3) , cos(0.3 + fi * 0.8 + sin(1.0 + elapsedTime * 0.0003) * 0.1)));\n\t   \t\t\n\t   \t\tfloat lightAngle = dot(lightDir, normalize(light - vertex.xy));\n\t   \t\tif (lightAngle > 0.0)\n\t   \t\t{\n\t\t\t   \tfloat dist = distance(light, vertex.xy);\n\t\t   \t\tfloat xd1 = sin(fi * 30.0 + sinT1 + sinT2);\n\t\t   \t\tfloat xd2 = sin(fi * 10.0 + sinT1 + sinT2 + 3.0);\n\t\t   \t\tfloat radius = (xd1 + 1.0) * 600.0 + 100.0;\n\t\t\t\tvalue += clamp(pow(lightAngle, radius * dist * dist) * (0.4 + xd1 * 0.3) / pow(1.0 + dist, 9.5 + xd2 * 8.0), 0.0, 1.0);\n\t   \t\t}\n   \t\t}\n   \t\t\n\t\tvec3 color = vec3(195.0 / 255.0, 164.0 / 255.0, 246.0 / 255.0);\n   \t\tvalue = clamp(value * 0.4, 0.0, 0.8);\n        gl_FragColor = vec4(color, 1.0) * vec4(value, value, value, 1.0);\n\t}\n\n";
}
sa.view.shader.UnderWater.prototype.__class__ = sa.view.shader.UnderWater;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
sa.view.MainInterfaceView = function(p) { if( p === $_ ) return; {
	this.stage = GLDisplayList.getDefault().stage;
}}
sa.view.MainInterfaceView.__name__ = ["sa","view","MainInterfaceView"];
sa.view.MainInterfaceView.prototype.imageRegistry = null;
sa.view.MainInterfaceView.prototype.commonModel = null;
sa.view.MainInterfaceView.prototype.stage = null;
sa.view.MainInterfaceView.prototype.blend = null;
sa.view.MainInterfaceView.prototype.startButton = null;
sa.view.MainInterfaceView.prototype.creditsButton = null;
sa.view.MainInterfaceView.prototype.modeButton = null;
sa.view.MainInterfaceView.prototype.handleLauncherStart = function(event) {
	this.blend = new GLDisplayObject();
	this.blend.setWidth(2048);
	this.blend.setHeight(2048);
	this.blend.alpha = 0;
	this.blend.getContext().drawImage(this.imageRegistry.get(sa.view.ImageId.SPLASH),0,0);
	this.stage.addChild(this.blend);
	this.startButton = new GLInteractiveObject();
	this.startButton.skipDraw = true;
	this.startButton.setWidth(128);
	this.startButton.setHeight(64);
	this.startButton.alpha = 0.1;
	this.startButton.hitarea.position.set(0,0);
	this.startButton.hitarea.size.set(this.startButton.width,this.startButton.height);
	this.stage.addChild(this.startButton);
	this.creditsButton = new GLInteractiveObject();
	this.creditsButton.setWidth(128);
	this.creditsButton.setHeight(128);
	this.creditsButton.alpha = 0;
	this.creditsButton.hitarea.position.set(20,20);
	this.creditsButton.hitarea.size.set(this.creditsButton.width - 25,this.creditsButton.height - 25);
	this.creditsButton.getContext().drawImage(this.imageRegistry.get(sa.view.ImageId.CREDITS_BTN),0,0);
	this.stage.addChild(this.creditsButton);
	this.modeButton = new GLInteractiveObject();
	this.modeButton.setWidth(128);
	this.modeButton.setHeight(128);
	this.modeButton.alpha = 0;
	this.modeButton.hitarea.position.set(20,20);
	this.modeButton.hitarea.size.set(this.modeButton.width - 25,this.modeButton.height - 25);
	this.modeButton.getContext().drawImage(this.imageRegistry.get(sa.view.ImageId.MODE_BTN),0,0);
	this.stage.addChild(this.modeButton);
	this.layoutElements();
}
sa.view.MainInterfaceView.prototype.start = function() {
	GLTween.to(this.blend,1500,{ alpha : 1}).complete($closure(this,"handleStartFadeInComplete"));
}
sa.view.MainInterfaceView.prototype.handleStartFadeInComplete = function(tween) {
	this.startButton.mouseDownSignaler.bind($closure(this,"handeClick"));
}
sa.view.MainInterfaceView.prototype.handeClick = function(obj) {
	this.startButton.mouseDownSignaler.unbind($closure(this,"handeClick"));
	this.stage.removeChild(this.startButton);
	this.commonModel.showScene = true;
	GLTween.to(this.blend,2000,{ alpha : 0}).complete($closure(this,"handleStartFadeOutComplete"));
	GLTween.to(this.creditsButton,1000,{ alpha : 1});
	GLTween.to(this.modeButton,1000,{ alpha : 1});
	this.creditsButton.mouseDownSignaler.bind($closure(this,"handleCreditsButtonClick"));
	this.modeButton.mouseDownSignaler.bind($closure(this,"handleModeButtonClick"));
}
sa.view.MainInterfaceView.prototype.handleStartFadeOutComplete = function(tween) {
	this.stage.removeChild(this.startButton);
	this.startButton = null;
	this.stage.removeChild(this.blend);
	this.blend = null;
}
sa.view.MainInterfaceView.prototype.handleCreditsButtonClick = function(obj) {
	this.commonModel.toggleCredits();
}
sa.view.MainInterfaceView.prototype.handleModeButtonClick = function(obj) {
	this.commonModel.toggleMode();
}
sa.view.MainInterfaceView.prototype.handleStageResize = function(event) {
	this.layoutElements();
}
sa.view.MainInterfaceView.prototype.layoutElements = function() {
	if(this.blend != null) {
		this.blend.setX((this.stage.stageWidth - this.blend.width) / 2);
		this.blend.setY((this.stage.stageHeight - this.blend.height) / 2);
	}
	if(this.startButton != null) {
		this.startButton.setX((this.stage.stageWidth - this.startButton.width) / 2 - 5);
		this.startButton.setY((this.stage.stageHeight - this.startButton.height) / 2 + 120);
	}
	this.creditsButton.setX(this.stage.stageWidth - 130);
	this.creditsButton.setY(this.stage.stageHeight - 130);
	this.modeButton.setX(this.stage.stageWidth - 130 - 100);
	this.modeButton.setY(this.stage.stageHeight - 130);
}
sa.view.MainInterfaceView.prototype.__class__ = sa.view.MainInterfaceView;
sa.view.MainInterfaceView.__interfaces__ = [haxe.rtti.Infos];
sa.view.CanvasView = function(p) { if( p === $_ ) return; {
	null;
}}
sa.view.CanvasView.__name__ = ["sa","view","CanvasView"];
sa.view.CanvasView.prototype.commonModel = null;
sa.view.CanvasView.prototype.textureRegistry = null;
sa.view.CanvasView.prototype.mainInterfaceView = null;
sa.view.CanvasView.prototype.gl = null;
sa.view.CanvasView.prototype.canvas = null;
sa.view.CanvasView.prototype.framebuffer = null;
sa.view.CanvasView.prototype.backgroundRenderer = null;
sa.view.CanvasView.prototype.underWaterRenderer = null;
sa.view.CanvasView.prototype.textureRenderer = null;
sa.view.CanvasView.prototype.planktonRenderer = null;
sa.view.CanvasView.prototype.rocksRenderer = null;
sa.view.CanvasView.prototype.saRenderer = null;
sa.view.CanvasView.prototype.displayListRenderer = null;
sa.view.CanvasView.prototype.creditsRenderer = null;
sa.view.CanvasView.prototype.handleLauncherStart = function(event) {
	this.commonModel.modeChangeSignaler.bind($closure(this,"handleModeChanged"));
	this.gl = this.commonModel.gl;
	this.canvas = this.commonModel.canvas;
	this.updateCanvas();
	this.framebuffer = new GLFramebufferFactory(this.gl).create(128,128);
	this.backgroundRenderer = new sa.view.BackgroundRenderer();
	this.backgroundRenderer.texture = this.textureRegistry.get(sa.view.TextureId.BACKGROUND);
	this.backgroundRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.backgroundRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.backgroundRenderer.init(this.gl);
	this.creditsRenderer = new sa.view.CreditsRenderer();
	this.creditsRenderer.commonModel = this.commonModel;
	this.creditsRenderer.texture = this.textureRegistry.get(sa.view.TextureId.CREDITS);
	this.creditsRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.creditsRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.creditsRenderer.init(this.gl);
	this.underWaterRenderer = new sa.view.UnderWaterRenderer();
	this.underWaterRenderer.init(this.gl);
	this.textureRenderer = new sa.view.TextureRenderer();
	this.textureRenderer.texture = this.framebuffer.texture;
	this.textureRenderer.init(this.gl);
	this.saRenderer = new sa.view.StrangeAttractorRenderer();
	this.saRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.saRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.saRenderer.init(this.gl);
	this.planktonRenderer = new sa.view.PlanktonRenderer();
	this.planktonRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.planktonRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.planktonRenderer.init(this.gl);
	this.rocksRenderer = new sa.view.RocksRenderer();
	this.rocksRenderer.textureRegistry = this.textureRegistry;
	this.rocksRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.rocksRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.rocksRenderer.init(this.gl);
	this.displayListRenderer = new GLDisplayListRenderer();
	this.displayListRenderer.init(this.gl);
	var inst = this;
	GLTimeout.executeLater(1000,function() {
		inst.mainInterfaceView.start();
		GLAnimationFrame.run($closure(inst,"tick"));
	});
}
sa.view.CanvasView.prototype.handleModeChanged = function(newMode) {
	this.saRenderer.updateMode(newMode);
}
sa.view.CanvasView.prototype.handleStageResize = function(event) {
	this.updateCanvas();
}
sa.view.CanvasView.prototype.updateCanvas = function() {
	this.canvas.width = this.commonModel.windowWidth;
	this.canvas.height = this.commonModel.windowHeight;
}
sa.view.CanvasView.prototype.tick = function() {
	bpmjs.Stats.clear();
	bpmjs.Stats.measureFPS();
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
	this.gl.clearColor(0.1,0.0,0.1,1.0);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	if(this.commonModel.showScene) this.renderScene();
	else this.saRenderer.start();
	this.renderInterface();
}
sa.view.CanvasView.prototype.renderScene = function() {
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
	this.backgroundRenderer.render(this.canvas.width,this.canvas.height);
	this.planktonRenderer.peak = this.commonModel.peak;
	this.planktonRenderer.attractorPosition = this.saRenderer.effectivePosition;
	this.planktonRenderer.render(this.canvas.width,this.canvas.height);
	this.rocksRenderer.render(this.canvas.width,this.canvas.height);
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer.framebuffer);
	this.gl.viewport(0,0,this.framebuffer.width,this.framebuffer.height);
	this.gl.clearColor(0.0,0.0,0.0,1.0);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	this.underWaterRenderer.render(this.framebuffer.width,this.framebuffer.height,1);
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
	this.gl.viewport(0,0,this.canvas.width,this.canvas.height);
	this.saRenderer.peak = this.commonModel.peak;
	this.saRenderer.render(this.canvas.width,this.canvas.height);
	this.creditsRenderer.render(this.canvas.width,this.canvas.height);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE);
	this.textureRenderer.render(this.canvas.width,this.canvas.height);
	this.gl.disable(this.gl.BLEND);
}
sa.view.CanvasView.prototype.renderInterface = function() {
	GLDisplayList.getDefault().dispatchEnterFrame();
	this.displayListRenderer.render(this.canvas.width,this.canvas.height);
}
sa.view.CanvasView.prototype.__class__ = sa.view.CanvasView;
sa.view.CanvasView.__interfaces__ = [haxe.rtti.Infos];
if(!haxe.exception) haxe.exception = {}
haxe.exception.Exception = function(message,innerException,numberOfStackTraceShifts) { if( message === $_ ) return; {
	this.message = null == message?"Unknown exception":message;
	this.innerException = innerException;
	this.generateStackTrace(numberOfStackTraceShifts);
	this.stackTrace = this.stackTraceArray;
}}
haxe.exception.Exception.__name__ = ["haxe","exception","Exception"];
haxe.exception.Exception.prototype.baseException = null;
haxe.exception.Exception.prototype.innerException = null;
haxe.exception.Exception.prototype.message = null;
haxe.exception.Exception.prototype.stackTrace = null;
haxe.exception.Exception.prototype.stackTraceArray = null;
haxe.exception.Exception.prototype.generateStackTrace = function(numberOfStackTraceShifts) {
	this.stackTraceArray = haxe.Stack.callStack().slice(numberOfStackTraceShifts + 1);
	var exceptionClass = Type.getClass(this);
	while(haxe.exception.Exception != exceptionClass) {
		this.stackTraceArray.shift();
		exceptionClass = Type.getSuperClass(exceptionClass);
	}
}
haxe.exception.Exception.prototype.getBaseException = function() {
	var result = this;
	while(null != result.innerException) {
		result = result.innerException;
	}
	return result;
}
haxe.exception.Exception.prototype.toString = function() {
	return this.message + haxe.Stack.toString(this.stackTraceArray);
}
haxe.exception.Exception.prototype.__class__ = haxe.exception.Exception;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	}
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
	null;
}
haxe.Timer.prototype.__class__ = haxe.Timer;
Vec3 = function(x,y,z) { if( x === $_ ) return; {
	this.x = x;
	this.y = y;
	this.z = z;
}}
Vec3.__name__ = ["Vec3"];
Vec3.prototype.x = null;
Vec3.prototype.y = null;
Vec3.prototype.z = null;
Vec3.prototype.scale = function(factor) {
	this.x *= factor;
	this.y *= factor;
	this.z *= factor;
}
Vec3.prototype.multiply = function(x,y,z) {
	this.x *= x;
	this.y *= y;
	this.z *= z;
}
Vec3.prototype.subtract = function(x,y,z) {
	this.x -= x;
	this.y -= y;
	this.z -= z;
	return this;
}
Vec3.prototype.normalize = function() {
	var length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	this.x /= length;
	this.y /= length;
	this.z /= length;
}
Vec3.prototype.cross = function(vec) {
	var x = this.y * vec.z - this.z * vec.y;
	var y = this.z * vec.x - this.x * vec.z;
	var z = this.x * vec.y - this.y * vec.x;
	return new Vec3(x,y,z);
}
Vec3.prototype.dot = function(vec) {
	return this.x * vec.x + this.y * vec.y + this.z * vec.z;
}
Vec3.prototype.transform = function(matrix) {
	var x1 = this.x, y1 = this.y, z1 = this.z;
	var mat = matrix.buffer;
	this.x = mat[0] * x1 + mat[4] * y1 + mat[8] * z1 + mat[12];
	this.y = mat[1] * x1 + mat[5] * y1 + mat[9] * z1 + mat[13];
	this.z = mat[2] * x1 + mat[6] * y1 + mat[10] * z1 + mat[14];
}
Vec3.prototype.setFrom = function(value,vec3) {
	if(value != null) {
		this.x = value;
		this.y = value;
		this.z = value;
	}
	else if(vec3 != null) {
		this.x = vec3.x;
		this.y = vec3.y;
		this.z = vec3.z;
	}
}
Vec3.prototype.clone = function() {
	return new Vec3(this.x,this.y,this.z);
}
Vec3.prototype.__class__ = Vec3;
if(!haxe.xml) haxe.xml = {}
if(!haxe.xml._Fast) haxe.xml._Fast = {}
haxe.xml._Fast.NodeAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.NodeAccess.__name__ = ["haxe","xml","_Fast","NodeAccess"];
haxe.xml._Fast.NodeAccess.prototype.__x = null;
haxe.xml._Fast.NodeAccess.prototype.resolve = function(name) {
	var x = this.__x.elementsNamed(name).next();
	if(x == null) {
		var xname = this.__x.nodeType == Xml.Document?"Document":this.__x.getNodeName();
		throw xname + " is missing element " + name;
	}
	return new haxe.xml.Fast(x);
}
haxe.xml._Fast.NodeAccess.prototype.__class__ = haxe.xml._Fast.NodeAccess;
haxe.xml._Fast.AttribAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.AttribAccess.__name__ = ["haxe","xml","_Fast","AttribAccess"];
haxe.xml._Fast.AttribAccess.prototype.__x = null;
haxe.xml._Fast.AttribAccess.prototype.resolve = function(name) {
	if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
	var v = this.__x.get(name);
	if(v == null) throw this.__x.getNodeName() + " is missing attribute " + name;
	return v;
}
haxe.xml._Fast.AttribAccess.prototype.__class__ = haxe.xml._Fast.AttribAccess;
haxe.xml._Fast.HasAttribAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.HasAttribAccess.__name__ = ["haxe","xml","_Fast","HasAttribAccess"];
haxe.xml._Fast.HasAttribAccess.prototype.__x = null;
haxe.xml._Fast.HasAttribAccess.prototype.resolve = function(name) {
	if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
	return this.__x.exists(name);
}
haxe.xml._Fast.HasAttribAccess.prototype.__class__ = haxe.xml._Fast.HasAttribAccess;
haxe.xml._Fast.HasNodeAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.HasNodeAccess.__name__ = ["haxe","xml","_Fast","HasNodeAccess"];
haxe.xml._Fast.HasNodeAccess.prototype.__x = null;
haxe.xml._Fast.HasNodeAccess.prototype.resolve = function(name) {
	return this.__x.elementsNamed(name).hasNext();
}
haxe.xml._Fast.HasNodeAccess.prototype.__class__ = haxe.xml._Fast.HasNodeAccess;
haxe.xml._Fast.NodeListAccess = function(x) { if( x === $_ ) return; {
	this.__x = x;
}}
haxe.xml._Fast.NodeListAccess.__name__ = ["haxe","xml","_Fast","NodeListAccess"];
haxe.xml._Fast.NodeListAccess.prototype.__x = null;
haxe.xml._Fast.NodeListAccess.prototype.resolve = function(name) {
	var l = new List();
	{ var $it0 = this.__x.elementsNamed(name);
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(new haxe.xml.Fast(x));
	}}
	return l;
}
haxe.xml._Fast.NodeListAccess.prototype.__class__ = haxe.xml._Fast.NodeListAccess;
haxe.xml.Fast = function(x) { if( x === $_ ) return; {
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw "Invalid nodeType " + x.nodeType;
	this.x = x;
	this.node = new haxe.xml._Fast.NodeAccess(x);
	this.nodes = new haxe.xml._Fast.NodeListAccess(x);
	this.att = new haxe.xml._Fast.AttribAccess(x);
	this.has = new haxe.xml._Fast.HasAttribAccess(x);
	this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
}}
haxe.xml.Fast.__name__ = ["haxe","xml","Fast"];
haxe.xml.Fast.prototype.x = null;
haxe.xml.Fast.prototype.name = null;
haxe.xml.Fast.prototype.innerData = null;
haxe.xml.Fast.prototype.innerHTML = null;
haxe.xml.Fast.prototype.node = null;
haxe.xml.Fast.prototype.nodes = null;
haxe.xml.Fast.prototype.att = null;
haxe.xml.Fast.prototype.has = null;
haxe.xml.Fast.prototype.hasNode = null;
haxe.xml.Fast.prototype.elements = null;
haxe.xml.Fast.prototype.getName = function() {
	return this.x.nodeType == Xml.Document?"Document":this.x.getNodeName();
}
haxe.xml.Fast.prototype.getInnerData = function() {
	var it = this.x.iterator();
	if(!it.hasNext()) throw this.getName() + " does not have data";
	var v = it.next();
	if(it.hasNext()) throw this.getName() + " does not only have data";
	if(v.nodeType != Xml.PCData && v.nodeType != Xml.CData) throw this.getName() + " does not have data";
	return v.getNodeValue();
}
haxe.xml.Fast.prototype.getInnerHTML = function() {
	var s = new StringBuf();
	{ var $it0 = this.x.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	s.b[s.b.length] = x.toString();
	}}
	return s.b.join("");
}
haxe.xml.Fast.prototype.getElements = function() {
	var it = this.x.elements();
	return { hasNext : $closure(it,"hasNext"), next : function() {
		var x = it.next();
		if(x == null) return null;
		return new haxe.xml.Fast(x);
	}};
}
haxe.xml.Fast.prototype.__class__ = haxe.xml.Fast;
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	var meta = t.__meta__;
	return meta == null?meta:meta.obj;
}
haxe.rtti.Meta.getStatics = function(t) {
	var meta = t.__meta__;
	return meta == null?meta:meta.statics;
}
haxe.rtti.Meta.getFields = function(t) {
	var meta = t.__meta__;
	return meta == null?meta:meta.fields;
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
if(typeof shader=='undefined') shader = {}
shader.DisplayObjectVertex = function() { }
shader.DisplayObjectVertex.__name__ = ["shader","DisplayObjectVertex"];
shader.DisplayObjectVertex.create = function() {
	return "\n\n\tattribute vec2 vertexPosition;\n\t\n\tuniform mat4 projectionMatrix;\n\tuniform mat4 objectMatrix;\n\tuniform vec2 size;\n\t\t\t\t\n\tvarying vec2 textureCoord;\n\t\n\tvoid main(void)\n\t{\n\t    gl_Position = projectionMatrix * objectMatrix * (vec4(size, 1.0, 1.0) * vec4(vertexPosition, 0.0, 1.0));\n\t\ttextureCoord = vertexPosition.xy;\n\t}\n\n";
}
shader.DisplayObjectVertex.prototype.__class__ = shader.DisplayObjectVertex;
GLHitareaPicker = function(p) { if( p === $_ ) return; {
	null;
}}
GLHitareaPicker.__name__ = ["GLHitareaPicker"];
GLHitareaPicker.prototype.stageMousePosition = null;
GLHitareaPicker.prototype.result = null;
GLHitareaPicker.prototype.pick = function(stage,mousePosition) {
	this.stageMousePosition = mousePosition.clone();
	this.stageMousePosition.multiply(stage.stageWidth,stage.stageHeight);
	this.result = null;
	this.pickRecursive(stage,new Matrix4());
	return this.result;
}
GLHitareaPicker.prototype.pickRecursive = function(displayObjectContainer,parentMatrix) {
	var _g = 0, _g1 = displayObjectContainer.children;
	while(_g < _g1.length) {
		var displayObject = _g1[_g];
		++_g;
		var matrix = this.pickDisplayObject(displayObject,parentMatrix);
		if(Std["is"](displayObject,GLInteractiveObject)) {
			var interactiveObject = (function($this) {
				var $r;
				var $t = displayObject;
				if(Std["is"]($t,GLInteractiveObject)) $t;
				else throw "Class cast error";
				$r = $t;
				return $r;
			}(this));
			if(interactiveObject.hitarea.isUnder(matrix,this.stageMousePosition)) this.result = interactiveObject;
		}
		if(Std["is"](displayObject,GLDisplayObjectContainer)) {
			this.pickRecursive(displayObject,matrix);
		}
	}
}
GLHitareaPicker.prototype.pickDisplayObject = function(displayObject,parentMatrix) {
	displayObject.validateTransform();
	var result = new Matrix4();
	result.multiply(parentMatrix);
	result.multiply(displayObject.matrix);
	return result;
}
GLHitareaPicker.prototype.__class__ = GLHitareaPicker;
shader.DisplayObjectFragment = function() { }
shader.DisplayObjectFragment.__name__ = ["shader","DisplayObjectFragment"];
shader.DisplayObjectFragment.create = function() {
	return "\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\t\n    uniform sampler2D texture;\n    uniform float alpha;\n    \n\tvarying vec2 textureCoord;\n\t    \t\n\tvoid main(void)\n\t{\n        vec4 color = texture2D(texture, textureCoord);\n        gl_FragColor = color * vec4(1.0, 1.0, 1.0, alpha);\n\t}\n\n";
}
shader.DisplayObjectFragment.prototype.__class__ = shader.DisplayObjectFragment;
haxe.exception.ArgumentNullException = function(argumentName,numberOfStackTraceShifts) { if( argumentName === $_ ) return; {
	haxe.exception.Exception.call(this,"Argument " + argumentName + " must be non-null",null,numberOfStackTraceShifts);
}}
haxe.exception.ArgumentNullException.__name__ = ["haxe","exception","ArgumentNullException"];
haxe.exception.ArgumentNullException.__super__ = haxe.exception.Exception;
for(var k in haxe.exception.Exception.prototype ) haxe.exception.ArgumentNullException.prototype[k] = haxe.exception.Exception.prototype[k];
haxe.exception.ArgumentNullException.prototype.__class__ = haxe.exception.ArgumentNullException;
bpmjs.FrontController = function() { }
bpmjs.FrontController.__name__ = ["bpmjs","FrontController"];
bpmjs.FrontController.prototype.addDispatcher = null;
bpmjs.FrontController.prototype.addReceiver = null;
bpmjs.FrontController.prototype.__class__ = bpmjs.FrontController;
bpmjs.DefaultFrontController = function(p) { if( p === $_ ) return; {
	this.receivers = new Array();
}}
bpmjs.DefaultFrontController.__name__ = ["bpmjs","DefaultFrontController"];
bpmjs.DefaultFrontController.prototype.receivers = null;
bpmjs.DefaultFrontController.prototype.addDispatcher = function(dispatcher,type) {
	dispatcher.addEventListener(type,$closure(this,"handleEvent"));
}
bpmjs.DefaultFrontController.prototype.addReceiver = function(receivingObject,methodName,eventClass) {
	this.receivers.push(new bpmjs._FrontController.Receiver(receivingObject,methodName,eventClass));
}
bpmjs.DefaultFrontController.prototype.handleEvent = function(event) {
	var _g = 0, _g1 = this.receivers;
	while(_g < _g1.length) {
		var receiver = _g1[_g];
		++_g;
		if(Type.getClass(event) == receiver.eventClass) {
			receiver.method.apply(receiver.receiver,[event]);
		}
	}
}
bpmjs.DefaultFrontController.prototype.__class__ = bpmjs.DefaultFrontController;
bpmjs.DefaultFrontController.__interfaces__ = [bpmjs.FrontController];
if(!bpmjs._FrontController) bpmjs._FrontController = {}
bpmjs._FrontController.Receiver = function(receiver,methodName,eventClass) { if( receiver === $_ ) return; {
	this.receiver = receiver;
	this.eventClass = eventClass;
	this.method = Reflect.field(receiver,methodName);
}}
bpmjs._FrontController.Receiver.__name__ = ["bpmjs","_FrontController","Receiver"];
bpmjs._FrontController.Receiver.prototype.receiver = null;
bpmjs._FrontController.Receiver.prototype.method = null;
bpmjs._FrontController.Receiver.prototype.eventClass = null;
bpmjs._FrontController.Receiver.prototype.matches = function(event) {
	return Type.getClass(event) == this.eventClass;
}
bpmjs._FrontController.Receiver.prototype.execute = function(event) {
	this.method.apply(this.receiver,[event]);
}
bpmjs._FrontController.Receiver.prototype.__class__ = bpmjs._FrontController.Receiver;
sa.view.CreditsRenderer = function(p) { if( p === $_ ) return; {
	this.mousePos = new Vec2();
	this.defaultTargetIn = 0;
	this.defaultTargetOut = 8;
	this.moveSet = new MoveSet();
	this.moveSet.current = this.defaultTargetOut;
	this.moveSet.to = this.defaultTargetOut;
	this.moveSet.acceleration = 0.03;
	this.buttons = new Array();
	var lineHeight = 0.031;
	this.createButton(0.19,0.19,0.4,-0.4,"close");
	this.createButton(0.17,0.015,0,0.035,"http://www.audiotool.com/track/carsberg");
	this.createButton(0.17,0.015,0,0.035 + lineHeight,"http://www.bit-101.com");
	this.createButton(0.17,0.015,0,0.035 + lineHeight * 2,"http://fontfabric.com/code-pro");
	this.createButton(0.17,0.015,0,0.035 + lineHeight * 3,"http://www.omkrets.se/typografi");
	this.createButton(0.17,0.015,0,0.035 + lineHeight * 4,"http://www.britzpetermann.com");
	this.createButton(0.25,0.02,0,0.28,"http://www.britzpetermann.com/blog/akemi");
}}
sa.view.CreditsRenderer.__name__ = ["sa","view","CreditsRenderer"];
sa.view.CreditsRenderer.prototype.commonModel = null;
sa.view.CreditsRenderer.prototype.texture = null;
sa.view.CreditsRenderer.prototype.projectionMatrix = null;
sa.view.CreditsRenderer.prototype.cameraMatrix = null;
sa.view.CreditsRenderer.prototype.gl = null;
sa.view.CreditsRenderer.prototype.shaderProgram = null;
sa.view.CreditsRenderer.prototype.shaderProgramButton = null;
sa.view.CreditsRenderer.prototype.vertexPositionAttribute = null;
sa.view.CreditsRenderer.prototype.vertexBuffer = null;
sa.view.CreditsRenderer.prototype.textureUniform = null;
sa.view.CreditsRenderer.prototype.projectionMatrixUniform = null;
sa.view.CreditsRenderer.prototype.viewWorldMatrixUniform = null;
sa.view.CreditsRenderer.prototype.projectionMatrixButtonUniform = null;
sa.view.CreditsRenderer.prototype.viewWorldMatrixButtonUniform = null;
sa.view.CreditsRenderer.prototype.colorButtonUniform = null;
sa.view.CreditsRenderer.prototype.moveSet = null;
sa.view.CreditsRenderer.prototype.defaultTargetIn = null;
sa.view.CreditsRenderer.prototype.defaultTargetOut = null;
sa.view.CreditsRenderer.prototype.mousePos = null;
sa.view.CreditsRenderer.prototype.buttons = null;
sa.view.CreditsRenderer.prototype.cursorClient = null;
sa.view.CreditsRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = GLUtil.createProgram(gl,sa.view.shader.PassVertex2.create(),sa.view.shader.Texture.create());
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GLUtil.createInt8VertexBuffer(gl,[1,-1,-1,1,-1,-1,1,-1,1,1,-1,1]);
	this.textureUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"texture");
	this.projectionMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"projectionMatrix");
	this.viewWorldMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"viewWorldMatrix");
	if(sa.view.CreditsRenderer.DEBUG_DRAW_HITAREAS) {
		this.shaderProgramButton = GLUtil.createProgram(gl,sa.view.shader.HitareaVertex.create(),sa.view.shader.UniformColor.create());
		this.projectionMatrixButtonUniform = GLUtil.getUniformLocation(gl,this.shaderProgramButton,"projectionMatrix");
		this.viewWorldMatrixButtonUniform = GLUtil.getUniformLocation(gl,this.shaderProgramButton,"viewWorldMatrix");
		this.colorButtonUniform = GLUtil.getUniformLocation(gl,this.shaderProgramButton,"color");
	}
	GLMouseRegistry.getInstance().mouseDownSignaler.bind($closure(this,"mouseDown"));
	GLMouseRegistry.getInstance().mouseMoveSignaler.bind($closure(this,"mouseMove"));
	this.cursorClient = GLMouseRegistry.getInstance().createCursorClient();
}
sa.view.CreditsRenderer.prototype.render = function(width,height) {
	this.moveSet.move();
	if(this.commonModel.showCredits) this.moveSet.to = this.defaultTargetIn;
	else this.moveSet.to = this.defaultTargetOut;
	if(this.moveSet.current == this.defaultTargetOut) return;
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	this.gl.uniformMatrix4fv(this.projectionMatrixUniform,false,this.projectionMatrix.buffer);
	var scale = this.computeScale(width,height);
	var viewWorldMatrix = new Matrix4(this.cameraMatrix);
	viewWorldMatrix.appendScale(1,-1,1);
	viewWorldMatrix.appendTranslation(0,this.moveSet.current,-7);
	viewWorldMatrix.appendScale(scale,scale,1);
	this.gl.uniformMatrix4fv(this.viewWorldMatrixUniform,false,viewWorldMatrix.buffer);
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture);
	this.gl.uniform1i(this.textureUniform,0);
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
	if(sa.view.CreditsRenderer.DEBUG_DRAW_HITAREAS) {
		this.gl.useProgram(this.shaderProgramButton);
		this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE);
	}
	this.cursorClient.defaultCursor();
	{
		var _g = 0, _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			var viewWorldMatrixButton = new Matrix4(this.cameraMatrix);
			viewWorldMatrixButton.appendScale(1,-1,1);
			viewWorldMatrixButton.appendTranslation(0,this.moveSet.current,-7);
			viewWorldMatrixButton.appendScale(scale,scale,1);
			viewWorldMatrixButton.appendTranslation(button.pos.x,button.pos.y,0);
			viewWorldMatrixButton.appendScale(button.size.x,button.size.y,1);
			if(sa.view.CreditsRenderer.DEBUG_DRAW_HITAREAS) {
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
				this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
				this.gl.uniformMatrix4fv(this.projectionMatrixButtonUniform,false,this.projectionMatrix.buffer);
				this.gl.uniformMatrix4fv(this.viewWorldMatrixButtonUniform,false,viewWorldMatrixButton.buffer);
			}
			if(this.isUnderMouse(viewWorldMatrixButton)) {
				this.cursorClient.handCursor(button.url);
				button.isActive = true;
				if(sa.view.CreditsRenderer.DEBUG_DRAW_HITAREAS) this.gl.uniform4f(this.colorButtonUniform,1,1,1,0.2);
			}
			else {
				button.isActive = false;
				if(sa.view.CreditsRenderer.DEBUG_DRAW_HITAREAS) this.gl.uniform4f(this.colorButtonUniform,1,1,1,0.1);
			}
			if(sa.view.CreditsRenderer.DEBUG_DRAW_HITAREAS) this.gl.drawArrays(this.gl.TRIANGLES,0,6);
		}
	}
	this.gl.disable(this.gl.BLEND);
}
sa.view.CreditsRenderer.prototype.computeScale = function(width,height) {
	var viewWorldMatrix = new Matrix4();
	viewWorldMatrix.appendScale(1,-1,1);
	viewWorldMatrix.appendTranslation(0,0,-7);
	viewWorldMatrix.appendScale(1,1,1);
	var finalMatrix = new Matrix4(this.projectionMatrix);
	finalMatrix.multiply(viewWorldMatrix);
	var tl = new Vec4(2,2,0,1);
	tl.transform(finalMatrix);
	tl.project();
	tl.multiply(width / 2,-height / 2,1,1);
	return 1024 / tl.x;
}
sa.view.CreditsRenderer.prototype.createButton = function(width,height,x,y,url) {
	var button = new sa.view.Button();
	button.size = new Vec2(width,height);
	button.pos = new Vec2(x,y);
	button.isActive = false;
	button.url = url;
	this.buttons.push(button);
}
sa.view.CreditsRenderer.prototype.mouseMove = function(mousePos) {
	this.mousePos = mousePos;
}
sa.view.CreditsRenderer.prototype.isUnderMouse = function(matrix) {
	var far = new Vec4(this.mousePos.x,1 - this.mousePos.y,0,1);
	far.subtract(0.5,0.5,0.0,0.0);
	far.multiply(2.0,2.0,1.0,1.0);
	far.project3D(this.projectionMatrix,new Matrix4());
	var far1 = far.cloneToVec3();
	var p0 = new Vec3(1,1,0);
	p0.transform(matrix);
	var p1 = new Vec3(1,-1,0);
	p1.transform(matrix);
	var p2 = new Vec3(-1,1,0);
	p2.transform(matrix);
	var edge1 = p0.clone().subtract(p1.x,p1.y,p1.z);
	var edge2 = p0.clone().subtract(p2.x,p2.y,p2.z);
	var pVec = far1.cross(edge2);
	var det = edge1.dot(pVec);
	var tVec = far1.clone().subtract(p0.x,p0.y,p0.z);
	var qVec = tVec.clone().cross(edge1);
	var u = 1 + tVec.dot(pVec) / det;
	var v = 1 + far1.dot(qVec) / det;
	return u > 0 && u < 1 && v > 0 && v < 1;
}
sa.view.CreditsRenderer.prototype.mouseDown = function(mousePos) {
	var _g = 0, _g1 = this.buttons;
	while(_g < _g1.length) {
		var button = _g1[_g];
		++_g;
		if(button.isActive) {
			if(button.url == "close") {
				this.commonModel.showCredits = false;
			}
			else {
				js.Lib.window.open(button.url,"_self");
			}
			return;
		}
	}
}
sa.view.CreditsRenderer.prototype.__class__ = sa.view.CreditsRenderer;
sa.view.Button = function(p) { if( p === $_ ) return; {
	null;
}}
sa.view.Button.__name__ = ["sa","view","Button"];
sa.view.Button.prototype.size = null;
sa.view.Button.prototype.pos = null;
sa.view.Button.prototype.isActive = null;
sa.view.Button.prototype.url = null;
sa.view.Button.prototype.__class__ = sa.view.Button;
bpmjs.Context = function(p) { if( p === $_ ) return; {
	this.objects = new Array();
}}
bpmjs.Context.__name__ = ["bpmjs","Context"];
bpmjs.Context.prototype.contextConfig = null;
bpmjs.Context.prototype.objects = null;
bpmjs.Context.prototype.addObject = function(name,type,object) {
	var contextObject = new bpmjs.ContextObject(name,type,object);
	this.objects.push(contextObject);
	return contextObject;
}
bpmjs.Context.prototype.getObjectByName = function(name) {
	{
		var _g = 0, _g1 = this.objects;
		while(_g < _g1.length) {
			var contextObject = _g1[_g];
			++_g;
			if(contextObject.name == name) return contextObject.object;
		}
	}
	return null;
}
bpmjs.Context.prototype.getObjectByType = function(type) {
	{
		var _g = 0, _g1 = this.objects;
		while(_g < _g1.length) {
			var contextObject = _g1[_g];
			++_g;
			if(contextObject.type == type) return contextObject.object;
		}
	}
	return null;
}
bpmjs.Context.prototype.__class__ = bpmjs.Context;
bpmjs.ContextObject = function(name,type,object) { if( name === $_ ) return; {
	this.name = name;
	this.type = type;
	this.object = object;
}}
bpmjs.ContextObject.__name__ = ["bpmjs","ContextObject"];
bpmjs.ContextObject.prototype.name = null;
bpmjs.ContextObject.prototype.type = null;
bpmjs.ContextObject.prototype.object = null;
bpmjs.ContextObject.prototype.__class__ = bpmjs.ContextObject;
GLTweenManager = function(p) { if( p === $_ ) return; {
	this.time = Date.now().getTime();
	this.tweens = new Array();
	GLAnimationFrame.run($closure(this,"tick"));
}}
GLTweenManager.__name__ = ["GLTweenManager"];
GLTweenManager.instance = null;
GLTweenManager.getInstance = function() {
	if(GLTweenManager.instance == null) GLTweenManager.instance = new GLTweenManager();
	return GLTweenManager.instance;
}
GLTweenManager.prototype.tweens = null;
GLTweenManager.prototype.time = null;
GLTweenManager.prototype.add = function(tween) {
	tween.init(this.time);
	this.tweens.push(tween);
}
GLTweenManager.prototype.tick = function() {
	this.time = Date.now().getTime();
	{
		var _g = 0, _g1 = this.tweens;
		while(_g < _g1.length) {
			var tween = _g1[_g];
			++_g;
			tween.run(this.time);
			if(!tween.isActive) this.tweens.remove(tween);
		}
	}
}
GLTweenManager.prototype.__class__ = GLTweenManager;
bpmjs.ContextConfig = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs.ContextConfig.__name__ = ["bpmjs","ContextConfig"];
bpmjs.ContextConfig.prototype.frontController = null;
bpmjs.ContextConfig.prototype.__class__ = bpmjs.ContextConfig;
GLTween = function(o,ms,params) { if( o === $_ ) return; {
	this.o = o;
	this.ms = ms;
	this.params = params;
	this.isActive = true;
	this.properties = new Array();
	this.completeSignaler = new hsl.haxe.DirectSignaler(this);
}}
GLTween.__name__ = ["GLTween"];
GLTween.to = function(o,ms,params) {
	var result = new GLTween(o,ms,params);
	GLTweenManager.getInstance().add(result);
	return result;
}
GLTween.prototype.isActive = null;
GLTween.prototype.startTime = null;
GLTween.prototype.o = null;
GLTween.prototype.ms = null;
GLTween.prototype.params = null;
GLTween.prototype.properties = null;
GLTween.prototype.easeFunction = null;
GLTween.prototype.completeSignaler = null;
GLTween.prototype.complete = function(method) {
	this.completeSignaler.bind(method);
	return this;
}
GLTween.prototype.init = function(time) {
	this.startTime = time;
	this.easeFunction = $closure(ease.Quad,"easeInOut");
	var fields = Reflect.fields(this.params);
	{
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			if(Reflect.hasField(this.o,field)) {
				var property = new Property();
				property.from = Reflect.field(this.o,field);
				property.to = Reflect.field(this.params,field);
				property.field = field;
				this.properties.push(property);
			}
			else {
				haxe.Log.trace("Unkown field: " + field,{ fileName : "GLTween.hx", lineNumber : 56, className : "GLTween", methodName : "init"});
			}
		}
	}
}
GLTween.prototype.run = function(time) {
	var dt = time - this.startTime;
	if(dt > this.ms) {
		dt = this.ms;
		if(this.isActive) {
			this.completeSignaler.dispatch(this,null,{ fileName : "GLTween.hx", lineNumber : 69, className : "GLTween", methodName : "run"});
			this.isActive = false;
		}
	}
	{
		var _g = 0, _g1 = this.properties;
		while(_g < _g1.length) {
			var property = _g1[_g];
			++_g;
			property.ease(this,dt);
		}
	}
}
GLTween.prototype.__class__ = GLTween;
Property = function(p) { if( p === $_ ) return; {
	null;
}}
Property.__name__ = ["Property"];
Property.prototype.from = null;
Property.prototype.to = null;
Property.prototype.field = null;
Property.prototype.ease = function(tween,dt) {
	var o = tween.o;
	var value = tween.easeFunction(dt,this.from,this.to - this.from,tween.ms);
	o[this.field] = value;
}
Property.prototype.__class__ = Property;
sa.controller.CameraController = function(p) { if( p === $_ ) return; {
	this.cameraPosition = new MoveSetVec2(new Vec2(0,0),new Vec2(0,0),new Vec2(0.0005,0.0005));
}}
sa.controller.CameraController.__name__ = ["sa","controller","CameraController"];
sa.controller.CameraController.prototype.commonModel = null;
sa.controller.CameraController.prototype.cameraPosition = null;
sa.controller.CameraController.prototype.lastTick = null;
sa.controller.CameraController.prototype.handleLauncherStart = function(event) {
	GLMouseRegistry.getInstance().mouseMoveSignaler.bind($closure(this,"handleMouseMove"));
	GLAnimationFrame.run($closure(this,"tick"));
}
sa.controller.CameraController.prototype.tick = function() {
	var dt = Date.now().getTime() - this.lastTick;
	var factor = dt / 16;
	this.cameraPosition.move(factor);
	this.commonModel.cameraMatrix.lookAt(new Vec3(this.cameraPosition.current.x,this.cameraPosition.current.y,0),new Vec3(0,0,-9),new Vec3(0,1,0));
	this.lastTick = Date.now().getTime();
}
sa.controller.CameraController.prototype.handleMouseMove = function(mousePos) {
	var newPosition = mousePos.clone();
	newPosition.subtract(0.5,0.5);
	newPosition.multiply(-5,5);
	this.cameraPosition.to = newPosition;
}
sa.controller.CameraController.prototype.__class__ = sa.controller.CameraController;
sa.controller.CameraController.__interfaces__ = [haxe.rtti.Infos];
bpmjs.Stats = function() { }
bpmjs.Stats.__name__ = ["bpmjs","Stats"];
bpmjs.Stats.initialized = null;
bpmjs.Stats.lastTime = null;
bpmjs.Stats.times = null;
bpmjs.Stats.finishedTimes = null;
bpmjs.Stats.messages = null;
bpmjs.Stats.init = function(content) {
	bpmjs.Stats.clear();
	bpmjs.Stats.initialized = true;
}
bpmjs.Stats.clear = function() {
	bpmjs.Stats.times = new Array();
	bpmjs.Stats.finishedTimes = new Array();
	bpmjs.Stats.messages = new Array();
}
bpmjs.Stats.measureFPS = function() {
	bpmjs.Stats.checkInit();
	var time = Date.now().getTime();
	bpmjs.Stats.fps = 1000 / (time - bpmjs.Stats.lastTime);
	bpmjs.Stats.lastTime = time;
}
bpmjs.Stats.checkStart = function(message) {
	bpmjs.Stats.checkInit();
	var time = Date.now().getTime();
	bpmjs.Stats.times.push({ start : time, stop : 0.0, message : message});
}
bpmjs.Stats.addMessage = function(message) {
	bpmjs.Stats.checkInit();
	bpmjs.Stats.messages.push(message);
}
bpmjs.Stats.checkStop = function() {
	bpmjs.Stats.checkInit();
	var timeAndMessage = bpmjs.Stats.times.pop();
	timeAndMessage.stop = Date.now().getTime();
	bpmjs.Stats.finishedTimes.push(timeAndMessage);
}
bpmjs.Stats.getContents = function() {
	var finalMessages = new Array();
	finalMessages.push("FPS: " + Math.round(bpmjs.Stats.fps));
	{
		var _g = 0, _g1 = bpmjs.Stats.finishedTimes;
		while(_g < _g1.length) {
			var timeAndMessage = _g1[_g];
			++_g;
			finalMessages.push(" > " + timeAndMessage.message + ": " + (timeAndMessage.stop - timeAndMessage.start) + " ms");
		}
	}
	{
		var _g = 0, _g1 = bpmjs.Stats.messages;
		while(_g < _g1.length) {
			var message = _g1[_g];
			++_g;
			finalMessages.push(message);
		}
	}
	return finalMessages;
}
bpmjs.Stats.checkInit = function() {
	if(!bpmjs.Stats.initialized) bpmjs.Stats.init(js.Lib.document.body);
}
bpmjs.Stats.prototype.__class__ = bpmjs.Stats;
MoveSetVec2 = function(current,to,acceleration) { if( current === $_ ) return; {
	this.current = current;
	this.to = to;
	this.acceleration = acceleration;
	this.moveSetX = new MoveSet(current.x,to.x,acceleration.x);
	this.moveSetY = new MoveSet(current.y,to.y,acceleration.y);
}}
MoveSetVec2.__name__ = ["MoveSetVec2"];
MoveSetVec2.prototype.current = null;
MoveSetVec2.prototype.to = null;
MoveSetVec2.prototype.acceleration = null;
MoveSetVec2.prototype.moveSetX = null;
MoveSetVec2.prototype.moveSetY = null;
MoveSetVec2.prototype.move = function(factor) {
	if(factor == null) factor = 1;
	this.moveSetX.to = this.to.x;
	this.moveSetX.acceleration = this.acceleration.x;
	this.moveSetX.move(factor);
	this.moveSetY.to = this.to.y;
	this.moveSetY.acceleration = this.acceleration.y;
	this.moveSetY.move(factor);
	this.current.x = this.moveSetX.current;
	this.current.y = this.moveSetY.current;
}
MoveSetVec2.prototype.__class__ = MoveSetVec2;
sa.view.UnderWaterRenderer = function(p) { if( p === $_ ) return; {
	null;
}}
sa.view.UnderWaterRenderer.__name__ = ["sa","view","UnderWaterRenderer"];
sa.view.UnderWaterRenderer.prototype.gl = null;
sa.view.UnderWaterRenderer.prototype.shaderProgram = null;
sa.view.UnderWaterRenderer.prototype.vertexPositionAttribute = null;
sa.view.UnderWaterRenderer.prototype.vertexBuffer = null;
sa.view.UnderWaterRenderer.prototype.elapsedTimeUniform = null;
sa.view.UnderWaterRenderer.prototype.perspectiveMatrixUniform = null;
sa.view.UnderWaterRenderer.prototype.startTime = null;
sa.view.UnderWaterRenderer.prototype.init = function(gl) {
	this.gl = gl;
	this.shaderProgram = gl.createProgram();
	var vs = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vs,sa.view.shader.PassVertex.create());
	gl.compileShader(vs);
	if(!gl.getShaderParameter(vs,gl.COMPILE_STATUS)) {
		haxe.Log.trace(gl.getShaderInfoLog(vs),{ fileName : "UnderWaterRenderer.hx", lineNumber : 31, className : "sa.view.UnderWaterRenderer", methodName : "init"});
		return;
	}
	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fs,sa.view.shader.UnderWater.create());
	gl.compileShader(fs);
	var status = gl.getShaderParameter(fs,gl.COMPILE_STATUS);
	if(!status) {
		haxe.Log.trace(gl.getShaderInfoLog(fs),{ fileName : "UnderWaterRenderer.hx", lineNumber : 40, className : "sa.view.UnderWaterRenderer", methodName : "init"});
		return;
	}
	gl.attachShader(this.shaderProgram,vs);
	gl.attachShader(this.shaderProgram,fs);
	gl.linkProgram(this.shaderProgram);
	if(!gl.getProgramParameter(this.shaderProgram,gl.LINK_STATUS)) {
		haxe.Log.trace("Could not initialise shaders",{ fileName : "UnderWaterRenderer.hx", lineNumber : 49, className : "sa.view.UnderWaterRenderer", methodName : "init"});
		return;
	}
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	var vertices = [-1,-1,1,-1,-1,1,1,-1,-1,1,1,1];
	gl.bufferData(gl.ARRAY_BUFFER,new Int8Array(vertices),gl.STATIC_DRAW);
	this.elapsedTimeUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"elapsedTime");
	this.perspectiveMatrixUniform = GLUtil.getUniformLocation(gl,this.shaderProgram,"perspectiveMatrix");
	this.startTime = Date.now().getTime();
}
sa.view.UnderWaterRenderer.prototype.render = function(width,height,aspect) {
	var elapsedTime = Date.now().getTime() - this.startTime;
	var matrix = new Matrix4();
	matrix.ortho(-1,1,1,-1,0,1);
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.gl.uniform1f(this.elapsedTimeUniform,elapsedTime);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	this.gl.uniformMatrix4fv(this.perspectiveMatrixUniform,false,matrix.buffer);
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
}
sa.view.UnderWaterRenderer.prototype.__class__ = sa.view.UnderWaterRenderer;
GLImageRegistry = function(p) { if( p === $_ ) return; {
	this.images = new Array();
}}
GLImageRegistry.__name__ = ["GLImageRegistry"];
GLImageRegistry.prototype.images = null;
GLImageRegistry.prototype.register = function(name,image) {
	this.images[name] = image;
}
GLImageRegistry.prototype.get = function(name) {
	return this.images[name];
}
GLImageRegistry.prototype.__class__ = GLImageRegistry;
EReg = function(r,opt) { if( r === $_ ) return; {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
sa.controller.StageResizeAction = function(p) { if( p === $_ ) return; {
	bpmjs.EventDispatcher.call(this);
}}
sa.controller.StageResizeAction.__name__ = ["sa","controller","StageResizeAction"];
sa.controller.StageResizeAction.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) sa.controller.StageResizeAction.prototype[k] = bpmjs.EventDispatcher.prototype[k];
sa.controller.StageResizeAction.prototype.commonModel = null;
sa.controller.StageResizeAction.prototype.handleComplete = function() {
	this.updateSize();
}
sa.controller.StageResizeAction.prototype.handleLauncherStart = function(event) {
	GLAnimationFrame.run($closure(this,"timerUpdate"));
	js.Lib.window.onresize = $closure(this,"onResize");
}
sa.controller.StageResizeAction.prototype.timerUpdate = function() {
	if(this.commonModel.windowWidth != js.Lib.window.innerWidth || this.commonModel.windowHeight != js.Lib.window.innerHeight) this.onResize();
}
sa.controller.StageResizeAction.prototype.onResize = function(event) {
	this.updateSize();
	this.fireUpdate();
}
sa.controller.StageResizeAction.prototype.updateSize = function() {
	this.commonModel.windowWidth = Std["int"](js.Lib.window.innerWidth);
	this.commonModel.windowHeight = Std["int"](js.Lib.window.innerHeight);
	var aspect = this.commonModel.windowWidth / this.commonModel.windowHeight;
	var fov = (aspect - 1.6) * 10;
	if(fov < -30) fov = -30;
	this.commonModel.projectionMatrix.perspective(40 - fov,aspect,0.1,500.0);
	GLDisplayList.getDefault().setStageSize(this.commonModel.windowWidth,this.commonModel.windowHeight);
}
sa.controller.StageResizeAction.prototype.fireUpdate = function() {
	this.dispatchEvent(new sa.event.StageResize());
}
sa.controller.StageResizeAction.prototype.__class__ = sa.controller.StageResizeAction;
sa.controller.StageResizeAction.__interfaces__ = [haxe.rtti.Infos];
MoveSet = function(current,to,acceleration) { if( current === $_ ) return; {
	if(acceleration == null) acceleration = 0.1;
	if(to == null) to = 0;
	if(current == null) current = 0;
	this.current = current;
	this.to = to;
	this.acceleration = acceleration;
	this.velocity = 0;
	this.warpSpeed = 10000000;
}}
MoveSet.__name__ = ["MoveSet"];
MoveSet.prototype.current = null;
MoveSet.prototype.to = null;
MoveSet.prototype.velocity = null;
MoveSet.prototype.acceleration = null;
MoveSet.prototype.warpSpeed = null;
MoveSet.prototype.move = function(timeScale) {
	if(timeScale == null) timeScale = 1;
	var timeScaleInt = Std["int"](timeScale);
	if(timeScaleInt < 1) timeScaleInt = 1;
	{
		var _g = 0;
		while(_g < timeScaleInt) {
			var i = _g++;
			var moveSet = this;
			var dx = moveSet.to - moveSet.current;
			if(dx == 0) return;
			var accelerationToTarget = (dx > 0?1:dx < 0?-1:0) * this.acceleration;
			var accelerationWhenBreaking = -accelerationToTarget;
			var timeUntilStopIfBreaking = -moveSet.velocity / accelerationWhenBreaking;
			var wayUntilStopIfBreaking = moveSet.velocity * timeUntilStopIfBreaking - 0.5 * accelerationWhenBreaking * timeUntilStopIfBreaking * timeUntilStopIfBreaking;
			if(timeUntilStopIfBreaking < 0) {
				if(Math.abs(dx) < Math.abs(accelerationWhenBreaking)) {
					moveSet.velocity = dx;
				}
				else {
					moveSet.velocity -= accelerationWhenBreaking;
				}
			}
			else {
				if(Math.abs(wayUntilStopIfBreaking) > Math.abs(dx)) {
					if(timeUntilStopIfBreaking < 1) {
						moveSet.velocity = 0;
						moveSet.current = moveSet.to;
					}
					else {
						accelerationWhenBreaking = -(2 * (timeUntilStopIfBreaking * moveSet.velocity - dx)) / (timeUntilStopIfBreaking * timeUntilStopIfBreaking);
						moveSet.velocity += accelerationWhenBreaking;
					}
				}
				else {
					if(Math.abs(dx) < Math.abs(accelerationToTarget)) {
						accelerationToTarget = dx;
					}
					moveSet.velocity += accelerationToTarget;
					if(Math.abs(moveSet.velocity) > this.warpSpeed) {
						moveSet.current = moveSet.to - wayUntilStopIfBreaking;
						moveSet.velocity = this.signum(moveSet.velocity) * this.warpSpeed;
					}
				}
			}
			moveSet.current += moveSet.velocity;
			if(Math.abs(moveSet.velocity) > this.warpSpeed) {
				moveSet.velocity = this.signum(moveSet.velocity) * this.warpSpeed;
			}
		}
	}
}
MoveSet.prototype.signum = function(value) {
	return value > 0?1:value < 0?-1:0;
}
MoveSet.prototype.__class__ = MoveSet;
Xml = function(p) { if( p === $_ ) return; {
	null;
}}
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	var rules = [Xml.enode,Xml.epcdata,Xml.eend,Xml.ecdata,Xml.edoctype,Xml.ecomment,Xml.eprolog];
	var nrules = rules.length;
	var current = Xml.createDocument();
	var stack = new List();
	while(str.length > 0) {
		var i = 0;
		try {
			while(i < nrules) {
				var r = rules[i];
				if(r.match(str)) {
					switch(i) {
					case 0:{
						var x = Xml.createElement(r.matched(1));
						current.addChild(x);
						str = r.matchedRight();
						while(Xml.eattribute.match(str)) {
							x.set(Xml.eattribute.matched(1),Xml.eattribute.matched(3));
							str = Xml.eattribute.matchedRight();
						}
						if(!Xml.eclose.match(str)) {
							i = nrules;
							throw "__break__";
						}
						if(Xml.eclose.matched(1) == ">") {
							stack.push(current);
							current = x;
						}
						str = Xml.eclose.matchedRight();
					}break;
					case 1:{
						var x = Xml.createPCData(r.matched(0));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					case 2:{
						if(current._children != null && current._children.length == 0) {
							var e = Xml.createPCData("");
							current.addChild(e);
						}
						else null;
						if(r.matched(1) != current._nodeName || stack.isEmpty()) {
							i = nrules;
							throw "__break__";
						}
						else null;
						current = stack.pop();
						str = r.matchedRight();
					}break;
					case 3:{
						str = r.matchedRight();
						if(!Xml.ecdata_end.match(str)) throw "End of CDATA section not found";
						var x = Xml.createCData(Xml.ecdata_end.matchedLeft());
						current.addChild(x);
						str = Xml.ecdata_end.matchedRight();
					}break;
					case 4:{
						var pos = 0;
						var count = 0;
						var old = str;
						try {
							while(true) {
								if(!Xml.edoctype_elt.match(str)) throw "End of DOCTYPE section not found";
								var p = Xml.edoctype_elt.matchedPos();
								pos += p.pos + p.len;
								str = Xml.edoctype_elt.matchedRight();
								switch(Xml.edoctype_elt.matched(0)) {
								case "[":{
									count++;
								}break;
								case "]":{
									count--;
									if(count < 0) throw "Invalid ] found in DOCTYPE declaration";
								}break;
								default:{
									if(count == 0) throw "__break__";
								}break;
								}
							}
						} catch( e ) { if( e != "__break__" ) throw e; }
						var x = Xml.createDocType(old.substr(10,pos - 11));
						current.addChild(x);
					}break;
					case 5:{
						if(!Xml.ecomment_end.match(str)) throw "Unclosed Comment";
						var p = Xml.ecomment_end.matchedPos();
						var x = Xml.createComment(str.substr(4,p.pos + p.len - 7));
						current.addChild(x);
						str = Xml.ecomment_end.matchedRight();
					}break;
					case 6:{
						var prolog = r.matched(0);
						var x = Xml.createProlog(prolog.substr(2,prolog.length - 4));
						current.addChild(x);
						str = r.matchedRight();
					}break;
					}
					throw "__break__";
				}
				i += 1;
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		if(i == nrules) {
			if(str.length > 10) throw "Xml parse error : Unexpected " + str.substr(0,10) + "...";
			else throw "Xml parse error : Unexpected " + str;
		}
	}
	if(!stack.isEmpty()) throw "Xml parse error : Unclosed " + stack.last().getNodeName();
	return current;
}
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	return r;
}
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	return r;
}
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	return r;
}
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	return r;
}
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	return r;
}
Xml.createProlog = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	return r;
}
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
}
Xml.prototype.nodeType = null;
Xml.prototype.nodeName = null;
Xml.prototype.nodeValue = null;
Xml.prototype.parent = null;
Xml.prototype._nodeName = null;
Xml.prototype._nodeValue = null;
Xml.prototype._attributes = null;
Xml.prototype._children = null;
Xml.prototype._parent = null;
Xml.prototype.getNodeName = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName;
}
Xml.prototype.setNodeName = function(n) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._nodeName = n;
}
Xml.prototype.getNodeValue = function() {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue;
}
Xml.prototype.setNodeValue = function(v) {
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	return this._nodeValue = v;
}
Xml.prototype.getParent = function() {
	return this._parent;
}
Xml.prototype.get = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.get(att);
}
Xml.prototype.set = function(att,value) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
}
Xml.prototype.remove = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
}
Xml.prototype.exists = function(att) {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.exists(att);
}
Xml.prototype.attributes = function() {
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	return this._attributes.keys();
}
Xml.prototype.iterator = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		return this.cur < this.x.length;
	}, next : function() {
		return this.x[this.cur++];
	}};
}
Xml.prototype.elements = function() {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			if(this.x[k].nodeType == Xml.Element) break;
			k += 1;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k += 1;
			if(n.nodeType == Xml.Element) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.elementsNamed = function(name) {
	if(this._children == null) throw "bad nodetype";
	return { cur : 0, x : this._children, hasNext : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			if(n.nodeType == Xml.Element && n._nodeName == name) break;
			k++;
		}
		this.cur = k;
		return k < l;
	}, next : function() {
		var k = this.cur;
		var l = this.x.length;
		while(k < l) {
			var n = this.x[k];
			k++;
			if(n.nodeType == Xml.Element && n._nodeName == name) {
				this.cur = k;
				return n;
			}
		}
		return null;
	}};
}
Xml.prototype.firstChild = function() {
	if(this._children == null) throw "bad nodetype";
	return this._children[0];
}
Xml.prototype.firstElement = function() {
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) return n;
		cur++;
	}
	return null;
}
Xml.prototype.addChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
}
Xml.prototype.removeChild = function(x) {
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	return b;
}
Xml.prototype.insertChild = function(x,pos) {
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
}
Xml.prototype.toString = function() {
	if(this.nodeType == Xml.PCData) return this._nodeValue;
	if(this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
	if(this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
	if(this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
	if(this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
	var s = new StringBuf();
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "<";
		s.b[s.b.length] = this._nodeName;
		{ var $it0 = this._attributes.keys();
		while( $it0.hasNext() ) { var k = $it0.next();
		{
			s.b[s.b.length] = " ";
			s.b[s.b.length] = k;
			s.b[s.b.length] = "=\"";
			s.b[s.b.length] = this._attributes.get(k);
			s.b[s.b.length] = "\"";
		}
		}}
		if(this._children.length == 0) {
			s.b[s.b.length] = "/>";
			return s.b.join("");
		}
		s.b[s.b.length] = ">";
	}
	{ var $it1 = this.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	s.b[s.b.length] = x.toString();
	}}
	if(this.nodeType == Xml.Element) {
		s.b[s.b.length] = "</";
		s.b[s.b.length] = this._nodeName;
		s.b[s.b.length] = ">";
	}
	return s.b.join("");
}
Xml.prototype.__class__ = Xml;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	}
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	}
	d.fromString = function(s) {
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		}break;
		case 10:{
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
	}
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	}
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
GLCursorClient.DEFAULT = "default";
GLCursorClient.HAND = "pointer";
sa.controller.Launcher.__meta__ = { obj : { ManagedEvents : ["launcherStart"]}, fields : { textureRegistry : { Inject : null}, imageRegistry : { Inject : null}, preloaderView : { Inject : null}, handlePostComplete : { PostComplete : null}}};
sa.controller.Launcher.__rtti = "<class path=\"sa.controller.Launcher\" params=\"\">\n\t<extends path=\"bpmjs.EventDispatcher\"/>\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<textureRegistry><c path=\"GLTextureRegistry\"/></textureRegistry>\n\t<imageRegistry><c path=\"GLImageRegistry\"/></imageRegistry>\n\t<preloaderView><c path=\"sa.view.PreloaderView\"/></preloaderView>\n\t<handlePostComplete public=\"1\" set=\"method\" line=\"29\"><f a=\"\"><e path=\"Void\"/></f></handlePostComplete>\n\t<fontsLoaded set=\"method\" line=\"37\"><f a=\"\"><e path=\"Void\"/></f></fontsLoaded>\n\t<handleComplete set=\"method\" line=\"62\"><f a=\"task\">\n\t<c path=\"bpmjs.TaskGroup\"/>\n\t<e path=\"Void\"/>\n</f></handleComplete>\n\t<createTextureTask set=\"method\" line=\"74\"><f a=\"location:texture:scaleMod\">\n\t<c path=\"String\"/>\n\t<e path=\"sa.view.TextureId\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"bpmjs.ImageLoaderTask\"/>\n</f></createTextureTask>\n\t<createImageTask set=\"method\" line=\"91\"><f a=\"location:image\">\n\t<c path=\"String\"/>\n\t<e path=\"sa.view.ImageId\"/>\n\t<c path=\"bpmjs.ImageLoaderTask\"/>\n</f></createImageTask>\n\t<new public=\"1\" set=\"method\" line=\"17\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
hsl.haxe._DirectSignaler.PropagationStatus.IMMEDIATELY_STOPPED = 1;
hsl.haxe._DirectSignaler.PropagationStatus.STOPPED = 2;
hsl.haxe._DirectSignaler.PropagationStatus.UNDISTURBED = 3;
bpmjs.Event.COMPLETE = "complete";
bpmjs.Event.START = "start";
sa.controller.AudioController.__meta__ = { fields : { commonModel : { Inject : null}, handleLauncherStart : { MessageHandler : null}}};
sa.controller.AudioController.__rtti = "<class path=\"sa.controller.AudioController\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel public=\"1\"><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<audio><c path=\"Audio\"/></audio>\n\t<peaks><c path=\"Array\"><c path=\"Float\"/></c></peaks>\n\t<handleLauncherStart public=\"1\" set=\"method\" line=\"30\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<handleTimer set=\"method\" line=\"37\"><f a=\"\"><e path=\"Void\"/></f></handleTimer>\n\t<new public=\"1\" set=\"method\" line=\"18\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
js.Lib.onerror = null;
sa.Config.__rtti = "<class path=\"sa.Config\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel public=\"1\"><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<textureRegistry public=\"1\"><c path=\"GLTextureRegistry\"/></textureRegistry>\n\t<imageRegistry public=\"1\"><c path=\"GLImageRegistry\"/></imageRegistry>\n\t<stageResizeAction public=\"1\"><c path=\"sa.controller.StageResizeAction\"/></stageResizeAction>\n\t<launcher public=\"1\"><c path=\"sa.controller.Launcher\"/></launcher>\n\t<audioController public=\"1\"><c path=\"sa.controller.AudioController\"/></audioController>\n\t<cameraController public=\"1\"><c path=\"sa.controller.CameraController\"/></cameraController>\n\t<canvasView public=\"1\"><c path=\"sa.view.CanvasView\"/></canvasView>\n\t<preloaderView public=\"1\"><c path=\"sa.view.PreloaderView\"/></preloaderView>\n\t<mainInterfaceView public=\"1\"><c path=\"sa.view.MainInterfaceView\"/></mainInterfaceView>\n\t<controller set=\"method\" line=\"47\"><f a=\"\"><e path=\"Void\"/></f></controller>\n\t<model set=\"method\" line=\"55\"><f a=\"\"><e path=\"Void\"/></f></model>\n\t<view set=\"method\" line=\"76\"><f a=\"\"><e path=\"Void\"/></f></view>\n\t<new public=\"1\" set=\"method\" line=\"40\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
sa.view.MainInterfaceView.__meta__ = { fields : { imageRegistry : { Inject : null}, commonModel : { Inject : null}, handleLauncherStart : { MessageHandler : null}, handleStageResize : { MessageHandler : null}}};
sa.view.MainInterfaceView.__rtti = "<class path=\"sa.view.MainInterfaceView\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<imageRegistry><c path=\"GLImageRegistry\"/></imageRegistry>\n\t<commonModel><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<stage public=\"1\"><c path=\"GLStage\"/></stage>\n\t<blend><c path=\"GLDisplayObject\"/></blend>\n\t<startButton><c path=\"GLInteractiveObject\"/></startButton>\n\t<creditsButton><c path=\"GLInteractiveObject\"/></creditsButton>\n\t<modeButton><c path=\"GLInteractiveObject\"/></modeButton>\n\t<handleLauncherStart set=\"method\" line=\"37\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<start public=\"1\" set=\"method\" line=\"76\"><f a=\"\"><e path=\"Void\"/></f></start>\n\t<handleStartFadeInComplete set=\"method\" line=\"82\"><f a=\"tween\">\n\t<c path=\"GLTween\"/>\n\t<e path=\"Void\"/>\n</f></handleStartFadeInComplete>\n\t<handeClick set=\"method\" line=\"87\"><f a=\"?obj\">\n\t<c path=\"GLInteractiveObject\"/>\n\t<e path=\"Void\"/>\n</f></handeClick>\n\t<handleStartFadeOutComplete set=\"method\" line=\"101\"><f a=\"tween\">\n\t<c path=\"GLTween\"/>\n\t<e path=\"Void\"/>\n</f></handleStartFadeOutComplete>\n\t<handleCreditsButtonClick set=\"method\" line=\"112\"><f a=\"obj\">\n\t<c path=\"GLInteractiveObject\"/>\n\t<e path=\"Void\"/>\n</f></handleCreditsButtonClick>\n\t<handleModeButtonClick set=\"method\" line=\"117\"><f a=\"obj\">\n\t<c path=\"GLInteractiveObject\"/>\n\t<e path=\"Void\"/>\n</f></handleModeButtonClick>\n\t<handleStageResize set=\"method\" line=\"123\"><f a=\"event\">\n\t<c path=\"sa.event.StageResize\"/>\n\t<e path=\"Void\"/>\n</f></handleStageResize>\n\t<layoutElements set=\"method\" line=\"128\"><f a=\"\"><e path=\"Void\"/></f></layoutElements>\n\t<new public=\"1\" set=\"method\" line=\"31\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
sa.view.CanvasView.__meta__ = { fields : { commonModel : { Inject : null}, textureRegistry : { Inject : null}, mainInterfaceView : { Inject : null}, handleLauncherStart : { MessageHandler : null}, handleStageResize : { MessageHandler : null}}};
sa.view.CanvasView.__rtti = "<class path=\"sa.view.CanvasView\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<textureRegistry><c path=\"GLTextureRegistry\"/></textureRegistry>\n\t<mainInterfaceView><c path=\"sa.view.MainInterfaceView\"/></mainInterfaceView>\n\t<gl><c path=\"WebGLRenderingContext\"/></gl>\n\t<canvas><c path=\"Canvas\"/></canvas>\n\t<framebuffer><c path=\"GLFramebuffer\"/></framebuffer>\n\t<backgroundRenderer><c path=\"sa.view.BackgroundRenderer\"/></backgroundRenderer>\n\t<underWaterRenderer><c path=\"sa.view.UnderWaterRenderer\"/></underWaterRenderer>\n\t<textureRenderer><c path=\"sa.view.TextureRenderer\"/></textureRenderer>\n\t<planktonRenderer><c path=\"sa.view.PlanktonRenderer\"/></planktonRenderer>\n\t<rocksRenderer><c path=\"sa.view.RocksRenderer\"/></rocksRenderer>\n\t<saRenderer><c path=\"sa.view.StrangeAttractorRenderer\"/></saRenderer>\n\t<displayListRenderer><c path=\"GLDisplayListRenderer\"/></displayListRenderer>\n\t<creditsRenderer><c path=\"sa.view.CreditsRenderer\"/></creditsRenderer>\n\t<handleLauncherStart set=\"method\" line=\"36\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<handleModeChanged set=\"method\" line=\"93\"><f a=\"newMode\">\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></handleModeChanged>\n\t<handleStageResize set=\"method\" line=\"99\"><f a=\"event\">\n\t<c path=\"sa.event.StageResize\"/>\n\t<e path=\"Void\"/>\n</f></handleStageResize>\n\t<updateCanvas set=\"method\" line=\"104\"><f a=\"\"><e path=\"Void\"/></f></updateCanvas>\n\t<tick set=\"method\" line=\"110\"><f a=\"\"><e path=\"Void\"/></f></tick>\n\t<renderScene set=\"method\" line=\"127\"><f a=\"\"><e path=\"Void\"/></f></renderScene>\n\t<renderInterface set=\"method\" line=\"158\"><f a=\"\"><e path=\"Void\"/></f></renderInterface>\n\t<new public=\"1\" set=\"method\" line=\"33\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
haxe.Timer.arr = new Array();
sa.view.CreditsRenderer.DEBUG_DRAW_HITAREAS = false;
sa.controller.CameraController.__meta__ = { fields : { commonModel : { Inject : null}, handleLauncherStart : { MessageHandler : null}}};
sa.controller.CameraController.__rtti = "<class path=\"sa.controller.CameraController\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<cameraPosition><c path=\"MoveSetVec2\"/></cameraPosition>\n\t<lastTick><c path=\"Float\"/></lastTick>\n\t<handleLauncherStart set=\"method\" line=\"24\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<tick set=\"method\" line=\"30\"><f a=\"\"><e path=\"Void\"/></f></tick>\n\t<handleMouseMove set=\"method\" line=\"40\"><f a=\"mousePos\">\n\t<c path=\"Vec2\"/>\n\t<e path=\"Void\"/>\n</f></handleMouseMove>\n\t<new public=\"1\" set=\"method\" line=\"18\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs.Stats.fps = 0;
sa.controller.StageResizeAction.__meta__ = { obj : { ManagedEvents : ["stageResize"]}, fields : { commonModel : { Inject : null}, handleComplete : { Complete : null}, handleLauncherStart : { MessageHandler : null}}};
sa.controller.StageResizeAction.__rtti = "<class path=\"sa.controller.StageResizeAction\" params=\"\">\n\t<extends path=\"bpmjs.EventDispatcher\"/>\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel public=\"1\"><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<handleComplete public=\"1\" set=\"method\" line=\"22\"><f a=\"\"><e path=\"Void\"/></f></handleComplete>\n\t<handleLauncherStart public=\"1\" set=\"method\" line=\"28\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<timerUpdate set=\"method\" line=\"34\"><f a=\"\"><e path=\"Void\"/></f></timerUpdate>\n\t<onResize set=\"method\" line=\"40\"><f a=\"?event\">\n\t<t path=\"js.Event\"/>\n\t<e path=\"Void\"/>\n</f></onResize>\n\t<updateSize set=\"method\" line=\"46\"><f a=\"\"><e path=\"Void\"/></f></updateSize>\n\t<fireUpdate set=\"method\" line=\"60\"><f a=\"\"><e path=\"Void\"/></f></fireUpdate>\n\t<new public=\"1\" set=\"method\" line=\"16\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
Xml.enode = new EReg("^<([a-zA-Z0-9:_-]+)","");
Xml.ecdata = new EReg("^<!\\[CDATA\\[","i");
Xml.edoctype = new EReg("^<!DOCTYPE ","i");
Xml.eend = new EReg("^</([a-zA-Z0-9:_-]+)>","");
Xml.epcdata = new EReg("^[^<]+","");
Xml.ecomment = new EReg("^<!--","");
Xml.eprolog = new EReg("^<\\?[^\\?]+\\?>","");
Xml.eattribute = new EReg("^\\s*([a-zA-Z0-9:_-]+)\\s*=\\s*([\"'])([^\\2]*?)\\2","");
Xml.eclose = new EReg("^[ \r\n\t]*(>|(/>))","");
Xml.ecdata_end = new EReg("\\]\\]>","");
Xml.edoctype_elt = new EReg("[\\[|\\]>]","");
Xml.ecomment_end = new EReg("-->","");
sa.Main.main()