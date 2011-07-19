$estr = function() { return js.Boot.__string_rec(this,''); }
GLDisplayObject = function(p) { if( p === $_ ) return; {
	$s.push("GLDisplayObject::new");
	var $spos = $s.length;
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
	$s.pop();
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
	$s.push("GLDisplayObject::validateTransform");
	var $spos = $s.length;
	if(this.transformIsInvalid) {
		this.transformIsInvalid = false;
		if(this.getCanvas().width != this.width) this.getCanvas().width = this.width;
		if(this.getCanvas().height != this.height) this.getCanvas().height = this.height;
		this.matrix.identity();
		this.matrix.appendTranslation(this.x,this.y,0);
		this.matrix.appendScale(this.scaleX,this.scaleY,1);
	}
	$s.pop();
}
GLDisplayObject.prototype.toString = function() {
	$s.push("GLDisplayObject::toString");
	var $spos = $s.length;
	{
		var $tmp = "DisplayObject: " + this.id;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLDisplayObject.prototype.setX = function(value) {
	$s.push("GLDisplayObject::setX");
	var $spos = $s.length;
	if(this.x != value) {
		this.x = value;
		this.transformIsInvalid = true;
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
GLDisplayObject.prototype.setY = function(value) {
	$s.push("GLDisplayObject::setY");
	var $spos = $s.length;
	if(this.y != value) {
		this.y = value;
		this.transformIsInvalid = true;
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
GLDisplayObject.prototype.setScaleX = function(value) {
	$s.push("GLDisplayObject::setScaleX");
	var $spos = $s.length;
	if(this.scaleX != value) {
		this.scaleX = value;
		this.transformIsInvalid = true;
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
GLDisplayObject.prototype.setScaleY = function(value) {
	$s.push("GLDisplayObject::setScaleY");
	var $spos = $s.length;
	if(this.scaleY != value) {
		this.scaleY = value;
		this.transformIsInvalid = true;
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
GLDisplayObject.prototype.setWidth = function(value) {
	$s.push("GLDisplayObject::setWidth");
	var $spos = $s.length;
	if(this.width != value) {
		this.width = value;
		this.transformIsInvalid = true;
		this.canvasIsInvalid = true;
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
GLDisplayObject.prototype.setHeight = function(value) {
	$s.push("GLDisplayObject::setHeight");
	var $spos = $s.length;
	if(this.height != value) {
		this.height = value;
		this.transformIsInvalid = true;
		this.canvasIsInvalid = true;
	}
	{
		$s.pop();
		return value;
	}
	$s.pop();
}
GLDisplayObject.prototype.getCanvas = function() {
	$s.push("GLDisplayObject::getCanvas");
	var $spos = $s.length;
	this.validateTransform();
	{
		var $tmp = this.canvas;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLDisplayObject.prototype.getContext = function() {
	$s.push("GLDisplayObject::getContext");
	var $spos = $s.length;
	this.validateTransform();
	{
		var $tmp = this.getCanvas().getContext("2d");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLDisplayObject.prototype.__class__ = GLDisplayObject;
GLInteractiveObject = function(p) { if( p === $_ ) return; {
	$s.push("GLInteractiveObject::new");
	var $spos = $s.length;
	GLDisplayObject.call(this);
	GLDisplayList.getDefault().initInteractiveObject(this);
	this.hitarea = new GLHitarea();
	$s.pop();
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
	$s.push("haxe.rtti.XmlParser::new");
	var $spos = $s.length;
	this.root = new Array();
	$s.pop();
}}
haxe.rtti.XmlParser.__name__ = ["haxe","rtti","XmlParser"];
haxe.rtti.XmlParser.prototype.root = null;
haxe.rtti.XmlParser.prototype.curplatform = null;
haxe.rtti.XmlParser.prototype.sort = function(l) {
	$s.push("haxe.rtti.XmlParser::sort");
	var $spos = $s.length;
	if(l == null) l = this.root;
	l.sort(function(e1,e2) {
		$s.push("haxe.rtti.XmlParser::sort@40");
		var $spos = $s.length;
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
		if(n1 > n2) {
			$s.pop();
			return 1;
		}
		{
			$s.pop();
			return -1;
		}
		$s.pop();
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
	$s.pop();
}
haxe.rtti.XmlParser.prototype.sortFields = function(fl) {
	$s.push("haxe.rtti.XmlParser::sortFields");
	var $spos = $s.length;
	var a = Lambda.array(fl);
	a.sort(function(f1,f2) {
		$s.push("haxe.rtti.XmlParser::sortFields@66");
		var $spos = $s.length;
		var v1 = haxe.rtti.TypeApi.isVar(f1.type);
		var v2 = haxe.rtti.TypeApi.isVar(f2.type);
		if(v1 && !v2) {
			$s.pop();
			return -1;
		}
		if(v2 && !v1) {
			$s.pop();
			return 1;
		}
		if(f1.name == "new") {
			$s.pop();
			return -1;
		}
		if(f2.name == "new") {
			$s.pop();
			return 1;
		}
		if(f1.name > f2.name) {
			$s.pop();
			return 1;
		}
		{
			$s.pop();
			return -1;
		}
		$s.pop();
	});
	{
		var $tmp = Lambda.list(a);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.process = function(x,platform) {
	$s.push("haxe.rtti.XmlParser::process");
	var $spos = $s.length;
	this.curplatform = platform;
	this.xroot(new haxe.xml.Fast(x));
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mergeRights = function(f1,f2) {
	$s.push("haxe.rtti.XmlParser::mergeRights");
	var $spos = $s.length;
	if(f1.get == haxe.rtti.Rights.RInline && f1.set == haxe.rtti.Rights.RNo && f2.get == haxe.rtti.Rights.RNormal && f2.set == haxe.rtti.Rights.RMethod) {
		f1.get = haxe.rtti.Rights.RNormal;
		f1.set = haxe.rtti.Rights.RMethod;
		{
			$s.pop();
			return true;
		}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mergeFields = function(f,f2) {
	$s.push("haxe.rtti.XmlParser::mergeFields");
	var $spos = $s.length;
	{
		var $tmp = haxe.rtti.TypeApi.fieldEq(f,f2) || f.name == f2.name && (this.mergeRights(f,f2) || this.mergeRights(f2,f)) && haxe.rtti.TypeApi.fieldEq(f,f2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mergeClasses = function(c,c2) {
	$s.push("haxe.rtti.XmlParser::mergeClasses");
	var $spos = $s.length;
	if(c.isInterface != c2.isInterface) {
		$s.pop();
		return false;
	}
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
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mergeEnums = function(e,e2) {
	$s.push("haxe.rtti.XmlParser::mergeEnums");
	var $spos = $s.length;
	if(e.isExtern != e2.isExtern) {
		$s.pop();
		return false;
	}
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
		if(found == null) {
			$s.pop();
			return false;
		}
		if(this.curplatform != null) found.platforms.add(this.curplatform);
	}
	}}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mergeTypedefs = function(t,t2) {
	$s.push("haxe.rtti.XmlParser::mergeTypedefs");
	var $spos = $s.length;
	if(this.curplatform == null) {
		$s.pop();
		return false;
	}
	t.platforms.add(this.curplatform);
	t.types.set(this.curplatform,t2.type);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.merge = function(t) {
	$s.push("haxe.rtti.XmlParser::merge");
	var $spos = $s.length;
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
					{
						$e = [];
						while($s.length >= $spos) $e.unshift($s.pop());
						$s.push($e[0]);
						continue;
					}
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
						if(this.mergeClasses(c,c2)) {
							$s.pop();
							return;
						}
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
						if(this.mergeEnums(e,e2)) {
							$s.pop();
							return;
						}
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
						if(this.mergeTypedefs(td,td2)) {
							$s.pop();
							return;
						}
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
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mkPath = function(p) {
	$s.push("haxe.rtti.XmlParser::mkPath");
	var $spos = $s.length;
	{
		$s.pop();
		return p;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mkTypeParams = function(p) {
	$s.push("haxe.rtti.XmlParser::mkTypeParams");
	var $spos = $s.length;
	var pl = p.split(":");
	if(pl[0] == "") {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
	{
		$s.pop();
		return pl;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.mkRights = function(r) {
	$s.push("haxe.rtti.XmlParser::mkRights");
	var $spos = $s.length;
	{
		var $tmp = (function($this) {
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
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xerror = function(c) {
	$s.push("haxe.rtti.XmlParser::xerror");
	var $spos = $s.length;
	{
		var $tmp = (function($this) {
			var $r;
			throw "Invalid " + c.getName();
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xroot = function(x) {
	$s.push("haxe.rtti.XmlParser::xroot");
	var $spos = $s.length;
	{ var $it0 = x.x.elements();
	while( $it0.hasNext() ) { var c = $it0.next();
	this.merge(this.processElement(c));
	}}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.processElement = function(x) {
	$s.push("haxe.rtti.XmlParser::processElement");
	var $spos = $s.length;
	var c = new haxe.xml.Fast(x);
	{
		var $tmp = (function($this) {
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
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xpath = function(x) {
	$s.push("haxe.rtti.XmlParser::xpath");
	var $spos = $s.length;
	var path = this.mkPath(x.att.resolve("path"));
	var params = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	params.add(this.xtype(c));
	}}
	{
		var $tmp = { path : path, params : params};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xclass = function(x) {
	$s.push("haxe.rtti.XmlParser::xclass");
	var $spos = $s.length;
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
	{
		var $tmp = { path : this.mkPath(x.att.resolve("path")), module : x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null, doc : doc, isPrivate : x.x.exists("private"), isExtern : x.x.exists("extern"), isInterface : x.x.exists("interface"), params : this.mkTypeParams(x.att.resolve("params")), superClass : csuper, interfaces : interfaces, fields : fields, statics : statics, tdynamic : tdynamic, platforms : this.defplat()};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xclassfield = function(x) {
	$s.push("haxe.rtti.XmlParser::xclassfield");
	var $spos = $s.length;
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
	{
		var $tmp = { name : x.getName(), type : t, isPublic : x.x.exists("public"), isOverride : x.x.exists("override"), doc : doc, get : x.has.resolve("get")?this.mkRights(x.att.resolve("get")):haxe.rtti.Rights.RNormal, set : x.has.resolve("set")?this.mkRights(x.att.resolve("set")):haxe.rtti.Rights.RNormal, params : x.has.resolve("params")?this.mkTypeParams(x.att.resolve("params")):null, platforms : this.defplat()};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xenum = function(x) {
	$s.push("haxe.rtti.XmlParser::xenum");
	var $spos = $s.length;
	var cl = new List();
	var doc = null;
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	if(c.getName() == "haxe_doc") doc = c.getInnerData();
	else cl.add(this.xenumfield(c));
	}}
	{
		var $tmp = { path : this.mkPath(x.att.resolve("path")), module : x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null, doc : doc, isPrivate : x.x.exists("private"), isExtern : x.x.exists("extern"), params : this.mkTypeParams(x.att.resolve("params")), constructors : cl, platforms : this.defplat()};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xenumfield = function(x) {
	$s.push("haxe.rtti.XmlParser::xenumfield");
	var $spos = $s.length;
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
	{
		var $tmp = { name : x.getName(), args : args, doc : xdoc == null?null:new haxe.xml.Fast(xdoc).getInnerData(), platforms : this.defplat()};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xtypedef = function(x) {
	$s.push("haxe.rtti.XmlParser::xtypedef");
	var $spos = $s.length;
	var doc = null;
	var t = null;
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	if(c.getName() == "haxe_doc") doc = c.getInnerData();
	else t = this.xtype(c);
	}}
	var types = new Hash();
	if(this.curplatform != null) types.set(this.curplatform,t);
	{
		var $tmp = { path : this.mkPath(x.att.resolve("path")), module : x.has.resolve("module")?this.mkPath(x.att.resolve("module")):null, doc : doc, isPrivate : x.x.exists("private"), params : this.mkTypeParams(x.att.resolve("params")), type : t, types : types, platforms : this.defplat()};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xtype = function(x) {
	$s.push("haxe.rtti.XmlParser::xtype");
	var $spos = $s.length;
	{
		var $tmp = (function($this) {
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
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.xtypeparams = function(x) {
	$s.push("haxe.rtti.XmlParser::xtypeparams");
	var $spos = $s.length;
	var p = new List();
	{ var $it0 = x.getElements();
	while( $it0.hasNext() ) { var c = $it0.next();
	p.add(this.xtype(c));
	}}
	{
		$s.pop();
		return p;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.defplat = function() {
	$s.push("haxe.rtti.XmlParser::defplat");
	var $spos = $s.length;
	var l = new List();
	if(this.curplatform != null) l.add(this.curplatform);
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
haxe.rtti.XmlParser.prototype.__class__ = haxe.rtti.XmlParser;
GLDisplayListRenderer = function(p) { if( p === $_ ) return; {
	$s.push("GLDisplayListRenderer::new");
	var $spos = $s.length;
	this.textures = new IntHash();
	$s.pop();
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
	$s.push("GLDisplayListRenderer::init");
	var $spos = $s.length;
	this.gl = gl;
	this.shaderProgram = GL.createProgram(shader.DisplayObjectVertex,shader.DisplayObjectFragment);
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	GL.gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	var vertices = [0,0,1,0,0,1,1,1];
	gl.bufferData(gl.ARRAY_BUFFER,new Int8Array(vertices),gl.STATIC_DRAW);
	this.textureUniform = GL.getUniformLocation("texture");
	this.projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
	this.objectMatrixUniform = GL.getUniformLocation("objectMatrix");
	this.sizeUniform = GL.getUniformLocation("size");
	this.alphaUniform = GL.getUniformLocation("alpha");
	$s.pop();
}
GLDisplayListRenderer.prototype.render = function(width,height) {
	$s.push("GLDisplayListRenderer::render");
	var $spos = $s.length;
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	var projectionMatrix = new Matrix4();
	projectionMatrix.ortho(0,width,height,0,0,1);
	this.gl.uniformMatrix4fv(this.projectionMatrixUniform.location,false,projectionMatrix.buffer);
	var stage = GLDisplayList.getDefault().stage;
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.uniform1i(this.textureUniform.location,0);
	this.renderRecursive(stage,new Matrix4());
	this.gl.disable(this.gl.BLEND);
	$s.pop();
}
GLDisplayListRenderer.prototype.renderRecursive = function(displayObjectContainer,parentMatrix) {
	$s.push("GLDisplayListRenderer::renderRecursive");
	var $spos = $s.length;
	var _g = 0, _g1 = displayObjectContainer.children;
	while(_g < _g1.length) {
		var displayObject = _g1[_g];
		++_g;
		var matrix = this.renderDisplayObject(displayObject,parentMatrix);
		if(Std["is"](displayObject,GLDisplayObjectContainer)) {
			this.renderRecursive(displayObject,matrix);
		}
	}
	$s.pop();
}
GLDisplayListRenderer.prototype.renderDisplayObject = function(displayObject,parentMatrix) {
	$s.push("GLDisplayListRenderer::renderDisplayObject");
	var $spos = $s.length;
	displayObject.validateTransform();
	var result = new Matrix4();
	result.multiply(parentMatrix);
	result.multiply(displayObject.matrix);
	if(displayObject.skipDraw) {
		$s.pop();
		return result;
	}
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
	this.gl.uniformMatrix4fv(this.objectMatrixUniform.location,false,result.buffer);
	this.gl.uniform2f(this.sizeUniform.location,displayObject.width,displayObject.height);
	this.gl.uniform1f(this.alphaUniform.location,displayObject.alpha);
	this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4);
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
GLDisplayListRenderer.prototype.__class__ = GLDisplayListRenderer;
if(typeof sa=='undefined') sa = {}
if(!sa.view) sa.view = {}
if(!sa.view.shader) sa.view.shader = {}
sa.view.shader.PassVertex2 = function() { }
sa.view.shader.PassVertex2.__name__ = ["sa","view","shader","PassVertex2"];
sa.view.shader.PassVertex2.prototype.__class__ = sa.view.shader.PassVertex2;
if(typeof bpmjs=='undefined') bpmjs = {}
bpmjs.TaskError = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TaskError::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs.TaskError.__name__ = ["bpmjs","TaskError"];
bpmjs.TaskError.prototype.task = null;
bpmjs.TaskError.prototype.error = null;
bpmjs.TaskError.prototype.__class__ = bpmjs.TaskError;
Color = function(r,g,b,a) { if( r === $_ ) return; {
	$s.push("Color::new");
	var $spos = $s.length;
	if(a == null) a = 1.0;
	if(b == null) b = 1.0;
	if(g == null) g = 0.0;
	if(r == null) r = 1.0;
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
	$s.pop();
}}
Color.__name__ = ["Color"];
Color.prototype.r = null;
Color.prototype.g = null;
Color.prototype.b = null;
Color.prototype.a = null;
Color.prototype.fromHex = function(hex) {
	$s.push("Color::fromHex");
	var $spos = $s.length;
	this.r = (hex >> 16 & 255) / 255;
	this.g = (hex >> 8 & 255) / 255;
	this.b = (hex & 255) / 255;
	this.a = 1.0;
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
Color.prototype.scaleRGB = function(factor) {
	$s.push("Color::scaleRGB");
	var $spos = $s.length;
	this.r *= factor;
	this.g *= factor;
	this.b *= factor;
	$s.pop();
}
Color.prototype.mixFrom = function(color1,color2,color1Mix) {
	$s.push("Color::mixFrom");
	var $spos = $s.length;
	if(color1Mix < 0) color1Mix = 0;
	if(color1Mix > 1) color1Mix = 1;
	var color2Mix = 1 - color1Mix;
	this.r = color1.r * color1Mix + color2.r * color2Mix;
	this.g = color1.g * color1Mix + color2.g * color2Mix;
	this.b = color1.b * color1Mix + color2.b * color2Mix;
	$s.pop();
}
Color.prototype.toContextRGB = function() {
	$s.push("Color::toContextRGB");
	var $spos = $s.length;
	{
		var $tmp = "rgb(" + this.r * 255 + "," + this.g * 255 + "," + this.b * 255 + ")";
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Color.prototype.toContextRGBA = function() {
	$s.push("Color::toContextRGBA");
	var $spos = $s.length;
	{
		var $tmp = "rgba(" + Std["int"](this.r * 255) + "," + Std["int"](this.g * 255) + "," + Std["int"](this.b * 255) + "," + this.a + ")";
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Color.prototype.toString = function() {
	$s.push("Color::toString");
	var $spos = $s.length;
	{
		var $tmp = "Color: " + this.r + "," + this.g + "," + this.b + "," + this.a;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Color.prototype.__class__ = Color;
List = function(p) { if( p === $_ ) return; {
	$s.push("List::new");
	var $spos = $s.length;
	this.length = 0;
	$s.pop();
}}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	$s.push("List::add");
	var $spos = $s.length;
	var x = [item];
	if(this.h == null) this.h = x;
	else this.q[1] = x;
	this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.push = function(item) {
	$s.push("List::push");
	var $spos = $s.length;
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
	$s.pop();
}
List.prototype.first = function() {
	$s.push("List::first");
	var $spos = $s.length;
	{
		var $tmp = this.h == null?null:this.h[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.last = function() {
	$s.push("List::last");
	var $spos = $s.length;
	{
		var $tmp = this.q == null?null:this.q[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.pop = function() {
	$s.push("List::pop");
	var $spos = $s.length;
	if(this.h == null) {
		$s.pop();
		return null;
	}
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	{
		$s.pop();
		return x;
	}
	$s.pop();
}
List.prototype.isEmpty = function() {
	$s.push("List::isEmpty");
	var $spos = $s.length;
	{
		var $tmp = this.h == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.clear = function() {
	$s.push("List::clear");
	var $spos = $s.length;
	this.h = null;
	this.q = null;
	this.length = 0;
	$s.pop();
}
List.prototype.remove = function(v) {
	$s.push("List::remove");
	var $spos = $s.length;
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1];
			else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			{
				$s.pop();
				return true;
			}
		}
		prev = l;
		l = l[1];
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
List.prototype.iterator = function() {
	$s.push("List::iterator");
	var $spos = $s.length;
	{
		var $tmp = { h : this.h, hasNext : function() {
			$s.push("List::iterator@155");
			var $spos = $s.length;
			{
				var $tmp = this.h != null;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("List::iterator@158");
			var $spos = $s.length;
			if(this.h == null) {
				$s.pop();
				return null;
			}
			var x = this.h[0];
			this.h = this.h[1];
			{
				$s.pop();
				return x;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.toString = function() {
	$s.push("List::toString");
	var $spos = $s.length;
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
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.join = function(sep) {
	$s.push("List::join");
	var $spos = $s.length;
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false;
		else s.b[s.b.length] = sep;
		s.b[s.b.length] = l[0];
		l = l[1];
	}
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
List.prototype.filter = function(f) {
	$s.push("List::filter");
	var $spos = $s.length;
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	{
		$s.pop();
		return l2;
	}
	$s.pop();
}
List.prototype.map = function(f) {
	$s.push("List::map");
	var $spos = $s.length;
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
List.prototype.__class__ = List;
GLFramebufferFactory = function(gl) { if( gl === $_ ) return; {
	$s.push("GLFramebufferFactory::new");
	var $spos = $s.length;
	this.gl = gl;
	$s.pop();
}}
GLFramebufferFactory.__name__ = ["GLFramebufferFactory"];
GLFramebufferFactory.prototype.gl = null;
GLFramebufferFactory.prototype.create = function(width,height) {
	$s.push("GLFramebufferFactory::create");
	var $spos = $s.length;
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
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
GLFramebufferFactory.prototype.__class__ = GLFramebufferFactory;
IntIter = function(min,max) { if( min === $_ ) return; {
	$s.push("IntIter::new");
	var $spos = $s.length;
	this.min = min;
	this.max = max;
	$s.pop();
}}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	$s.push("IntIter::hasNext");
	var $spos = $s.length;
	{
		var $tmp = this.min < this.max;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.next = function() {
	$s.push("IntIter::next");
	var $spos = $s.length;
	{
		var $tmp = this.min++;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntIter.prototype.__class__ = IntIter;
Kuler = function(p) { if( p === $_ ) return; {
	$s.push("Kuler::new");
	var $spos = $s.length;
	this[0] = new Color(Math.random(),Math.random(),Math.random());
	this[1] = new Color(Math.random(),Math.random(),Math.random());
	this[2] = new Color(Math.random(),Math.random(),Math.random());
	this[3] = new Color(Math.random(),Math.random(),Math.random());
	this[4] = new Color(Math.random(),Math.random(),Math.random());
	$s.pop();
}}
Kuler.__name__ = ["Kuler"];
Kuler.prototype.scaleRGB = function(factor) {
	$s.push("Kuler::scaleRGB");
	var $spos = $s.length;
	this[0].scaleRGB(factor);
	this[1].scaleRGB(factor);
	this[2].scaleRGB(factor);
	this[3].scaleRGB(factor);
	this[4].scaleRGB(factor);
	$s.pop();
}
Kuler.prototype.__class__ = Kuler;
Matrix4 = function(cloneFrom) { if( cloneFrom === $_ ) return; {
	$s.push("Matrix4::new");
	var $spos = $s.length;
	this.buffer = new Float32Array(16);
	if(cloneFrom != null) {
		this.setFrom(cloneFrom);
	}
	else {
		this.identity();
	}
	$s.pop();
}}
Matrix4.__name__ = ["Matrix4"];
Matrix4.prototype.buffer = null;
Matrix4.prototype.identity = function() {
	$s.push("Matrix4::identity");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.setFrom = function(from) {
	$s.push("Matrix4::setFrom");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.lookAt = function(eye,center,up) {
	$s.push("Matrix4::lookAt");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.ortho = function(left,right,bottom,top,near,far) {
	$s.push("Matrix4::ortho");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.perspective = function(fovy,aspect,near,far) {
	$s.push("Matrix4::perspective");
	var $spos = $s.length;
	var top = near * Math.tan(fovy * Math.PI / 360.0);
	var right = top * aspect;
	this.frustum(-right,right,-top,top,near,far);
	$s.pop();
}
Matrix4.prototype.frustum = function(left,right,bottom,top,near,far) {
	$s.push("Matrix4::frustum");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.appendTranslation = function(x,y,z) {
	$s.push("Matrix4::appendTranslation");
	var $spos = $s.length;
	this.buffer[12] = this.buffer[0] * x + this.buffer[4] * y + this.buffer[8] * z + this.buffer[12];
	this.buffer[13] = this.buffer[1] * x + this.buffer[5] * y + this.buffer[9] * z + this.buffer[13];
	this.buffer[14] = this.buffer[2] * x + this.buffer[6] * y + this.buffer[10] * z + this.buffer[14];
	this.buffer[15] = this.buffer[3] * x + this.buffer[7] * y + this.buffer[11] * z + this.buffer[15];
	$s.pop();
}
Matrix4.prototype.appendScale = function(x,y,z) {
	$s.push("Matrix4::appendScale");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.appendRotation = function(angle,axis) {
	$s.push("Matrix4::appendRotation");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.rotateEuler = function(heading,attitude,bank) {
	$s.push("Matrix4::rotateEuler");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.appendEulerRotation = function(heading,attitude,bank) {
	$s.push("Matrix4::appendEulerRotation");
	var $spos = $s.length;
	var mEuler = new Matrix4();
	mEuler.rotateEuler(heading,attitude,bank);
	this.multiply(mEuler);
	$s.pop();
}
Matrix4.prototype.inverse = function() {
	$s.push("Matrix4::inverse");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.multiply = function(mat2) {
	$s.push("Matrix4::multiply");
	var $spos = $s.length;
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
	$s.pop();
}
Matrix4.prototype.clone = function() {
	$s.push("Matrix4::clone");
	var $spos = $s.length;
	{
		var $tmp = new Matrix4(this);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Matrix4.prototype.toString = function() {
	$s.push("Matrix4::toString");
	var $spos = $s.length;
	var result = "Matrix4:";
	result += "\r\t" + this.buffer[0] + "," + this.buffer[1] + "," + this.buffer[2] + "," + this.buffer[3];
	result += "\r\t" + this.buffer[4] + "," + this.buffer[5] + "," + this.buffer[6] + "," + this.buffer[7];
	result += "\r\t" + this.buffer[8] + "," + this.buffer[9] + "," + this.buffer[10] + "," + this.buffer[11];
	result += "\r\t" + this.buffer[12] + "," + this.buffer[13] + "," + this.buffer[14] + "," + this.buffer[15];
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
Matrix4.prototype.__class__ = Matrix4;
Hash = function(p) { if( p === $_ ) return; {
	$s.push("Hash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
	$s.pop();
}}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	$s.push("Hash::set");
	var $spos = $s.length;
	this.h["$" + key] = value;
	$s.pop();
}
Hash.prototype.get = function(key) {
	$s.push("Hash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h["$" + key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.exists = function(key) {
	$s.push("Hash::exists");
	var $spos = $s.length;
	try {
		key = "$" + key;
		{
			var $tmp = this.hasOwnProperty.call(this.h,key);
			$s.pop();
			return $tmp;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				
				for(var i in this.h)
					if( i == key ) return true;
			;
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	$s.pop();
}
Hash.prototype.remove = function(key) {
	$s.push("Hash::remove");
	var $spos = $s.length;
	if(!this.exists(key)) {
		$s.pop();
		return false;
	}
	delete(this.h["$" + key]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Hash.prototype.keys = function() {
	$s.push("Hash::keys");
	var $spos = $s.length;
	var a = new Array();
	
			for(var i in this.h)
				a.push(i.substr(1));
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.iterator = function() {
	$s.push("Hash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("Hash::iterator@81");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Hash::iterator@82");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref["$" + i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.toString = function() {
	$s.push("Hash::toString");
	var $spos = $s.length;
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
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Hash.prototype.__class__ = Hash;
if(!sa.model) sa.model = {}
sa.model.CommonModel = function(p) { if( p === $_ ) return; {
	$s.push("sa.model.CommonModel::new");
	var $spos = $s.length;
	this.projectionMatrix = new Matrix4();
	this.projectionMatrix.perspective(45,1 / 1,0.1,100.0);
	this.cameraMatrix = new Matrix4();
	this.cameraMatrix.lookAt(new Vec3(0,0,0),new Vec3(0,0,-15),new Vec3(0,1,0));
	this.modeChangeSignaler = new hsl.haxe.DirectSignaler(this);
	$s.pop();
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
	$s.push("sa.model.CommonModel::toggleMode");
	var $spos = $s.length;
	this.mode++;
	this.mode = this.mode % 3;
	this.modeChangeSignaler.dispatch(this.mode,null,{ fileName : "CommonModel.hx", lineNumber : 48, className : "sa.model.CommonModel", methodName : "toggleMode"});
	$s.pop();
}
sa.model.CommonModel.prototype.toggleCredits = function() {
	$s.push("sa.model.CommonModel::toggleCredits");
	var $spos = $s.length;
	this.showCredits = !this.showCredits;
	$s.pop();
}
sa.model.CommonModel.prototype.__class__ = sa.model.CommonModel;
GLDisplayObjectContainer = function(p) { if( p === $_ ) return; {
	$s.push("GLDisplayObjectContainer::new");
	var $spos = $s.length;
	GLDisplayObject.call(this);
	this.children = new Array();
	$s.pop();
}}
GLDisplayObjectContainer.__name__ = ["GLDisplayObjectContainer"];
GLDisplayObjectContainer.__super__ = GLDisplayObject;
for(var k in GLDisplayObject.prototype ) GLDisplayObjectContainer.prototype[k] = GLDisplayObject.prototype[k];
GLDisplayObjectContainer.prototype.children = null;
GLDisplayObjectContainer.prototype.addChild = function(child) {
	$s.push("GLDisplayObjectContainer::addChild");
	var $spos = $s.length;
	this.children.push(child);
	$s.pop();
}
GLDisplayObjectContainer.prototype.removeChild = function(child) {
	$s.push("GLDisplayObjectContainer::removeChild");
	var $spos = $s.length;
	this.children.remove(child);
	$s.pop();
}
GLDisplayObjectContainer.prototype.__class__ = GLDisplayObjectContainer;
GLStage = function(p) { if( p === $_ ) return; {
	$s.push("GLStage::new");
	var $spos = $s.length;
	GLDisplayObjectContainer.call(this);
	$s.pop();
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
	$s.push("IntHash::new");
	var $spos = $s.length;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
	else null;
	$s.pop();
}}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	$s.push("IntHash::set");
	var $spos = $s.length;
	this.h[key] = value;
	$s.pop();
}
IntHash.prototype.get = function(key) {
	$s.push("IntHash::get");
	var $spos = $s.length;
	{
		var $tmp = this.h[key];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntHash.prototype.exists = function(key) {
	$s.push("IntHash::exists");
	var $spos = $s.length;
	{
		var $tmp = this.h[key] != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntHash.prototype.remove = function(key) {
	$s.push("IntHash::remove");
	var $spos = $s.length;
	if(this.h[key] == null) {
		$s.pop();
		return false;
	}
	delete(this.h[key]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
IntHash.prototype.keys = function() {
	$s.push("IntHash::keys");
	var $spos = $s.length;
	var a = new Array();
	
			for( x in this.h )
				a.push(x);
		;
	{
		var $tmp = a.iterator();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntHash.prototype.iterator = function() {
	$s.push("IntHash::iterator");
	var $spos = $s.length;
	{
		var $tmp = { ref : this.h, it : this.keys(), hasNext : function() {
			$s.push("IntHash::iterator@69");
			var $spos = $s.length;
			{
				var $tmp = this.it.hasNext();
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("IntHash::iterator@70");
			var $spos = $s.length;
			var i = this.it.next();
			{
				var $tmp = this.ref[i];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntHash.prototype.toString = function() {
	$s.push("IntHash::toString");
	var $spos = $s.length;
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
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
IntHash.prototype.__class__ = IntHash;
sa.view.shader.UniformColor = function() { }
sa.view.shader.UniformColor.__name__ = ["sa","view","shader","UniformColor"];
sa.view.shader.UniformColor.prototype.__class__ = sa.view.shader.UniformColor;
GLFrame = function(p) { if( p === $_ ) return; {
	$s.push("GLFrame::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
GLFrame.__name__ = ["GLFrame"];
GLFrame.prototype.time = null;
GLFrame.prototype.timer = null;
GLFrame.prototype.frameTime = null;
GLFrame.prototype.__class__ = GLFrame;
sa.view.shader.PassVertex = function() { }
sa.view.shader.PassVertex.__name__ = ["sa","view","shader","PassVertex"];
sa.view.shader.PassVertex.prototype.__class__ = sa.view.shader.PassVertex;
sa.Main = function(canvas) { if( canvas === $_ ) return; {
	$s.push("sa.Main::new");
	var $spos = $s.length;
	try {
		var context = bpmjs.ContextBuilder.build(sa.Config);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				haxe.Log.trace("Error building application: " + e,{ fileName : "Main.hx", lineNumber : 29, className : "sa.Main", methodName : "new"});
			}
		}
	}
	$s.pop();
}}
sa.Main.__name__ = ["sa","Main"];
sa.Main.globalErrorHandler = function(msg,stack) {
	$s.push("sa.Main::globalErrorHandler");
	var $spos = $s.length;
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
sa.Main.main = function() {
	$s.push("sa.Main::main");
	var $spos = $s.length;
	js.Lib.setErrorHandler($closure(sa.Main,"globalErrorHandler"));
	$s.pop();
}
sa.Main.prototype.__class__ = sa.Main;
GLCursorClient = function(p) { if( p === $_ ) return; {
	$s.push("GLCursorClient::new");
	var $spos = $s.length;
	this.lastCursor = "";
	$s.pop();
}}
GLCursorClient.__name__ = ["GLCursorClient"];
GLCursorClient.prototype.lastCursor = null;
GLCursorClient.prototype.defaultCursor = function() {
	$s.push("GLCursorClient::defaultCursor");
	var $spos = $s.length;
	if(this.lastCursor != GLCursorClient.DEFAULT) {
		this.lastCursor = GLCursorClient.DEFAULT;
		GLMouseRegistry.getInstance().setCursor(this.lastCursor);
	}
	$s.pop();
}
GLCursorClient.prototype.handCursor = function(message) {
	$s.push("GLCursorClient::handCursor");
	var $spos = $s.length;
	if(this.lastCursor != GLCursorClient.HAND) {
		this.lastCursor = GLCursorClient.HAND;
		GLMouseRegistry.getInstance().setCursor(this.lastCursor);
		if(message != null) js.Lib.window.status = message;
	}
	$s.pop();
}
GLCursorClient.prototype.__class__ = GLCursorClient;
bpmjs.EventDispatcher = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.EventDispatcher::new");
	var $spos = $s.length;
	this.listeners = new Array();
	$s.pop();
}}
bpmjs.EventDispatcher.__name__ = ["bpmjs","EventDispatcher"];
bpmjs.EventDispatcher.prototype.listeners = null;
bpmjs.EventDispatcher.prototype.addEventListener = function(type,listener) {
	$s.push("bpmjs.EventDispatcher::addEventListener");
	var $spos = $s.length;
	this.removeEventListener(type,listener);
	this.listeners.push(new bpmjs._Event.ListenerForType(type,listener));
	$s.pop();
}
bpmjs.EventDispatcher.prototype.removeEventListener = function(type,listener) {
	$s.push("bpmjs.EventDispatcher::removeEventListener");
	var $spos = $s.length;
	var _g = 0, _g1 = this.listeners;
	while(_g < _g1.length) {
		var listenerForType = _g1[_g];
		++_g;
		if(listenerForType.type == type && Reflect.compareMethods(listener,listenerForType.listener)) {
			this.listeners.remove(listenerForType);
			{
				$s.pop();
				return;
			}
		}
	}
	$s.pop();
}
bpmjs.EventDispatcher.prototype.dispatchEvent = function(event) {
	$s.push("bpmjs.EventDispatcher::dispatchEvent");
	var $spos = $s.length;
	event.target = this;
	{
		var _g = 0, _g1 = this.listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			if(listener.type == event.type) listener.listener(event);
		}
	}
	$s.pop();
}
bpmjs.EventDispatcher.prototype.toString = function() {
	$s.push("bpmjs.EventDispatcher::toString");
	var $spos = $s.length;
	{
		var $tmp = Type.getClassName(Type.getClass(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
bpmjs.EventDispatcher.prototype.__class__ = bpmjs.EventDispatcher;
haxe.rtti.Infos = function() { }
haxe.rtti.Infos.__name__ = ["haxe","rtti","Infos"];
haxe.rtti.Infos.prototype.__class__ = haxe.rtti.Infos;
if(!sa.controller) sa.controller = {}
sa.controller.Launcher = function(p) { if( p === $_ ) return; {
	$s.push("sa.controller.Launcher::new");
	var $spos = $s.length;
	bpmjs.EventDispatcher.call(this);
	$s.pop();
}}
sa.controller.Launcher.__name__ = ["sa","controller","Launcher"];
sa.controller.Launcher.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) sa.controller.Launcher.prototype[k] = bpmjs.EventDispatcher.prototype[k];
sa.controller.Launcher.prototype.textureRegistry = null;
sa.controller.Launcher.prototype.imageRegistry = null;
sa.controller.Launcher.prototype.preloaderView = null;
sa.controller.Launcher.prototype.handlePostComplete = function() {
	$s.push("sa.controller.Launcher::handlePostComplete");
	var $spos = $s.length;
	this.preloaderView.start("Fonts");
	this.fontsLoaded();
	$s.pop();
}
sa.controller.Launcher.prototype.fontsLoaded = function() {
	$s.push("sa.controller.Launcher::fontsLoaded");
	var $spos = $s.length;
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
	$s.pop();
}
sa.controller.Launcher.prototype.handleComplete = function(task) {
	$s.push("sa.controller.Launcher::handleComplete");
	var $spos = $s.length;
	try {
		this.dispatchEvent(new sa.event.LauncherStart());
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				haxe.Log.trace("Could not launch Experiment!\n\t" + e,{ fileName : "Launcher.hx", lineNumber : 70, className : "sa.controller.Launcher", methodName : "handleComplete"});
			}
		}
	}
	$s.pop();
}
sa.controller.Launcher.prototype.createTextureTask = function(location,texture,scaleMod) {
	$s.push("sa.controller.Launcher::createTextureTask");
	var $spos = $s.length;
	var inst = this;
	var imageLoaderTask = new bpmjs.ImageLoaderTask();
	imageLoaderTask.location = location;
	imageLoaderTask.startSignaler.bind(function(task) {
		$s.push("sa.controller.Launcher::createTextureTask@79");
		var $spos = $s.length;
		inst.preloaderView.start(task.location);
		$s.pop();
	});
	imageLoaderTask.completeSignaler.bind(function(task) {
		$s.push("sa.controller.Launcher::createTextureTask@83");
		var $spos = $s.length;
		inst.preloaderView.complete();
		inst.textureRegistry.register(texture,inst.textureRegistry.createGLTextureFromImage(task.image,scaleMod));
		$s.pop();
	});
	{
		$s.pop();
		return imageLoaderTask;
	}
	$s.pop();
}
sa.controller.Launcher.prototype.createImageTask = function(location,image) {
	$s.push("sa.controller.Launcher::createImageTask");
	var $spos = $s.length;
	var inst = this;
	var imageLoaderTask = new bpmjs.ImageLoaderTask();
	imageLoaderTask.location = location;
	imageLoaderTask.startSignaler.bind(function(task) {
		$s.push("sa.controller.Launcher::createImageTask@96");
		var $spos = $s.length;
		inst.preloaderView.start(task.location);
		$s.pop();
	});
	imageLoaderTask.completeSignaler.bind(function(task) {
		$s.push("sa.controller.Launcher::createImageTask@100");
		var $spos = $s.length;
		inst.preloaderView.complete();
		inst.imageRegistry.register(image,task.image);
		$s.pop();
	});
	{
		$s.pop();
		return imageLoaderTask;
	}
	$s.pop();
}
sa.controller.Launcher.prototype.__class__ = sa.controller.Launcher;
sa.controller.Launcher.__interfaces__ = [haxe.rtti.Infos];
bpmjs.Task = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.Task::new");
	var $spos = $s.length;
	this.startSignaler = new hsl.haxe.DirectSignaler(this);
	this.completeSignaler = new hsl.haxe.DirectSignaler(this);
	this.errorSignaler = new hsl.haxe.DirectSignaler(this);
	$s.pop();
}}
bpmjs.Task.__name__ = ["bpmjs","Task"];
bpmjs.Task.prototype.startSignaler = null;
bpmjs.Task.prototype.completeSignaler = null;
bpmjs.Task.prototype.errorSignaler = null;
bpmjs.Task.prototype.start = function(positionInformation) {
	$s.push("bpmjs.Task::start");
	var $spos = $s.length;
	try {
		var t = this;
		this.startSignaler.dispatch(t,null,{ fileName : "Task.hx", lineNumber : 25, className : "bpmjs.Task", methodName : "start"});
		this.doStart();
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				haxe.Log.trace("Error starting Task: " + e,{ fileName : "Task.hx", lineNumber : 30, className : "bpmjs.Task", methodName : "start"});
			}
		}
	}
	$s.pop();
}
bpmjs.Task.prototype.doStart = function() {
	$s.push("bpmjs.Task::doStart");
	var $spos = $s.length;
	null;
	$s.pop();
}
bpmjs.Task.prototype.complete = function() {
	$s.push("bpmjs.Task::complete");
	var $spos = $s.length;
	var t = this;
	this.completeSignaler.dispatch(t,null,{ fileName : "Task.hx", lineNumber : 41, className : "bpmjs.Task", methodName : "complete"});
	$s.pop();
}
bpmjs.Task.prototype.error = function(result,error) {
	$s.push("bpmjs.Task::error");
	var $spos = $s.length;
	var taskError = new bpmjs.TaskError();
	taskError.task = result;
	taskError.error = error;
	this.errorSignaler.dispatch(taskError,null,{ fileName : "Task.hx", lineNumber : 49, className : "bpmjs.Task", methodName : "error"});
	$s.pop();
}
bpmjs.Task.prototype.__class__ = bpmjs.Task;
bpmjs.ImageLoaderTask = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.ImageLoaderTask::new");
	var $spos = $s.length;
	bpmjs.Task.call(this);
	$s.pop();
}}
bpmjs.ImageLoaderTask.__name__ = ["bpmjs","ImageLoaderTask"];
bpmjs.ImageLoaderTask.__super__ = bpmjs.Task;
for(var k in bpmjs.Task.prototype ) bpmjs.ImageLoaderTask.prototype[k] = bpmjs.Task.prototype[k];
bpmjs.ImageLoaderTask.prototype.location = null;
bpmjs.ImageLoaderTask.prototype.image = null;
bpmjs.ImageLoaderTask.prototype.doStart = function() {
	$s.push("bpmjs.ImageLoaderTask::doStart");
	var $spos = $s.length;
	this.image = new Image();
	this.image.onload = $closure(this,"handleImageLoaded");
	this.image.src = this.location;
	$s.pop();
}
bpmjs.ImageLoaderTask.prototype.handleImageLoaded = function() {
	$s.push("bpmjs.ImageLoaderTask::handleImageLoaded");
	var $spos = $s.length;
	this.complete();
	$s.pop();
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
	$s.push("hsl.haxe.DirectSignaler::new");
	var $spos = $s.length;
	if(null == subject) {
		throw new haxe.exception.ArgumentNullException("subject",1);
	}
	this.subject = subject;
	this.rejectNullData = rejectNullData;
	this.sentinel = new hsl.haxe._DirectSignaler.SentinelBond();
	$s.pop();
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
	$s.push("hsl.haxe.DirectSignaler::addBubblingTarget");
	var $spos = $s.length;
	if(null == this.bubblingTargets) {
		this.bubblingTargets = new List();
	}
	this.bubblingTargets.add(value);
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.addNotificationTarget = function(value) {
	$s.push("hsl.haxe.DirectSignaler::addNotificationTarget");
	var $spos = $s.length;
	if(null == this.notificationTargets) {
		this.notificationTargets = new List();
	}
	this.notificationTargets.add(value);
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.bind = function(listener) {
	$s.push("hsl.haxe.DirectSignaler::bind");
	var $spos = $s.length;
	if(null == listener) {
		throw new haxe.exception.ArgumentNullException("listener",1);
	}
	{
		var $tmp = this.sentinel.add(new hsl.haxe._DirectSignaler.RegularBond(listener));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.bindAdvanced = function(listener) {
	$s.push("hsl.haxe.DirectSignaler::bindAdvanced");
	var $spos = $s.length;
	if(null == listener) {
		throw new haxe.exception.ArgumentNullException("listener",1);
	}
	{
		var $tmp = this.sentinel.add(new hsl.haxe._DirectSignaler.AdvancedBond(listener));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.bindVoid = function(listener) {
	$s.push("hsl.haxe.DirectSignaler::bindVoid");
	var $spos = $s.length;
	if(null == listener) {
		throw new haxe.exception.ArgumentNullException("listener",1);
	}
	{
		var $tmp = this.sentinel.add(new hsl.haxe._DirectSignaler.NiladicBond(listener));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.bubble = function(data,origin) {
	$s.push("hsl.haxe.DirectSignaler::bubble");
	var $spos = $s.length;
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
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.dispatch = function(data,origin,positionInformation) {
	$s.push("hsl.haxe.DirectSignaler::dispatch");
	var $spos = $s.length;
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
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.getIsListenedTo = function() {
	$s.push("hsl.haxe.DirectSignaler::getIsListenedTo");
	var $spos = $s.length;
	{
		var $tmp = this.sentinel.getIsConnected();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.getOrigin = function(origin) {
	$s.push("hsl.haxe.DirectSignaler::getOrigin");
	var $spos = $s.length;
	{
		var $tmp = null == origin?this.subject:origin;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.verifyCaller = function(positionInformation) {
	$s.push("hsl.haxe.DirectSignaler::verifyCaller");
	var $spos = $s.length;
	if(null == this.subjectClassNames) {
		this.subjectClassNames = haxe.TypeTools.getClassNames(this.subject);
	}
	{ var $it0 = this.subjectClassNames.iterator();
	while( $it0.hasNext() ) { var subjectClassName = $it0.next();
	{
		if(subjectClassName == positionInformation.className) {
			{
				$s.pop();
				return;
			}
		}
	}
	}}
	throw new haxe.exception.Exception("This method may only be called by the subject of the signaler.",null,2);
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.removeBubblingTarget = function(value) {
	$s.push("hsl.haxe.DirectSignaler::removeBubblingTarget");
	var $spos = $s.length;
	if(null != this.bubblingTargets) {
		this.bubblingTargets.remove(value);
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.removeNotificationTarget = function(value) {
	$s.push("hsl.haxe.DirectSignaler::removeNotificationTarget");
	var $spos = $s.length;
	if(null != this.notificationTargets) {
		this.notificationTargets.remove(value);
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.toString = function() {
	$s.push("hsl.haxe.DirectSignaler::toString");
	var $spos = $s.length;
	{
		var $tmp = "[Signaler isListenedTo=" + this.getIsListenedTo() + "]";
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.unbind = function(listener) {
	$s.push("hsl.haxe.DirectSignaler::unbind");
	var $spos = $s.length;
	this.sentinel.remove(new hsl.haxe._DirectSignaler.RegularBond(listener));
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.unbindAdvanced = function(listener) {
	$s.push("hsl.haxe.DirectSignaler::unbindAdvanced");
	var $spos = $s.length;
	this.sentinel.remove(new hsl.haxe._DirectSignaler.AdvancedBond(listener));
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.unbindVoid = function(listener) {
	$s.push("hsl.haxe.DirectSignaler::unbindVoid");
	var $spos = $s.length;
	this.sentinel.remove(new hsl.haxe._DirectSignaler.NiladicBond(listener));
	$s.pop();
}
hsl.haxe.DirectSignaler.prototype.__class__ = hsl.haxe.DirectSignaler;
hsl.haxe.DirectSignaler.__interfaces__ = [hsl.haxe.Signaler];
hsl.haxe.Bond = function(p) { if( p === $_ ) return; {
	$s.push("hsl.haxe.Bond::new");
	var $spos = $s.length;
	this.halted = false;
	$s.pop();
}}
hsl.haxe.Bond.__name__ = ["hsl","haxe","Bond"];
hsl.haxe.Bond.prototype.halted = null;
hsl.haxe.Bond.prototype.willDestroyOnUse = null;
hsl.haxe.Bond.prototype.destroy = function() {
	$s.push("hsl.haxe.Bond::destroy");
	var $spos = $s.length;
	null;
	$s.pop();
}
hsl.haxe.Bond.prototype.destroyOnUse = function() {
	$s.push("hsl.haxe.Bond::destroyOnUse");
	var $spos = $s.length;
	this.willDestroyOnUse = true;
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
hsl.haxe.Bond.prototype.halt = function() {
	$s.push("hsl.haxe.Bond::halt");
	var $spos = $s.length;
	this.halted = true;
	$s.pop();
}
hsl.haxe.Bond.prototype.resume = function() {
	$s.push("hsl.haxe.Bond::resume");
	var $spos = $s.length;
	this.halted = false;
	$s.pop();
}
hsl.haxe.Bond.prototype.toString = function() {
	$s.push("hsl.haxe.Bond::toString");
	var $spos = $s.length;
	{
		$s.pop();
		return "[Bond]";
	}
	$s.pop();
}
hsl.haxe.Bond.prototype.__class__ = hsl.haxe.Bond;
if(!hsl.haxe._DirectSignaler) hsl.haxe._DirectSignaler = {}
hsl.haxe._DirectSignaler.LinkedBond = function(p) { if( p === $_ ) return; {
	$s.push("hsl.haxe._DirectSignaler.LinkedBond::new");
	var $spos = $s.length;
	hsl.haxe.Bond.call(this);
	this.destroyed = false;
	$s.pop();
}}
hsl.haxe._DirectSignaler.LinkedBond.__name__ = ["hsl","haxe","_DirectSignaler","LinkedBond"];
hsl.haxe._DirectSignaler.LinkedBond.__super__ = hsl.haxe.Bond;
for(var k in hsl.haxe.Bond.prototype ) hsl.haxe._DirectSignaler.LinkedBond.prototype[k] = hsl.haxe.Bond.prototype[k];
hsl.haxe._DirectSignaler.LinkedBond.prototype.destroyed = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.next = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.previous = null;
hsl.haxe._DirectSignaler.LinkedBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	$s.push("hsl.haxe._DirectSignaler.LinkedBond::callListener");
	var $spos = $s.length;
	{
		$s.pop();
		return 0;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.determineEquals = function(value) {
	$s.push("hsl.haxe._DirectSignaler.LinkedBond::determineEquals");
	var $spos = $s.length;
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.destroy = function() {
	$s.push("hsl.haxe._DirectSignaler.LinkedBond::destroy");
	var $spos = $s.length;
	if(false == this.destroyed) {
		this.previous.next = this.next;
		this.next.previous = this.previous;
		this.destroyed = true;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.unlink = function() {
	$s.push("hsl.haxe._DirectSignaler.LinkedBond::unlink");
	var $spos = $s.length;
	if(false == this.destroyed) {
		this.previous.next = this.next;
		this.next.previous = this.previous;
		this.destroyed = true;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.LinkedBond.prototype.__class__ = hsl.haxe._DirectSignaler.LinkedBond;
hsl.haxe._DirectSignaler.SentinelBond = function(p) { if( p === $_ ) return; {
	$s.push("hsl.haxe._DirectSignaler.SentinelBond::new");
	var $spos = $s.length;
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.next = this.previous = this;
	$s.pop();
}}
hsl.haxe._DirectSignaler.SentinelBond.__name__ = ["hsl","haxe","_DirectSignaler","SentinelBond"];
hsl.haxe._DirectSignaler.SentinelBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.SentinelBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.SentinelBond.prototype.isConnected = null;
hsl.haxe._DirectSignaler.SentinelBond.prototype.add = function(value) {
	$s.push("hsl.haxe._DirectSignaler.SentinelBond::add");
	var $spos = $s.length;
	value.next = this;
	value.previous = this.previous;
	{
		var $tmp = this.previous = this.previous.next = value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	$s.push("hsl.haxe._DirectSignaler.SentinelBond::callListener");
	var $spos = $s.length;
	var node = this.next;
	while(node != this && 1 != propagationStatus) {
		propagationStatus = node.callListener(data,currentTarget,origin,propagationStatus);
		node = node.next;
	}
	{
		$s.pop();
		return propagationStatus;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.getIsConnected = function() {
	$s.push("hsl.haxe._DirectSignaler.SentinelBond::getIsConnected");
	var $spos = $s.length;
	{
		var $tmp = this.next != this;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.remove = function(value) {
	$s.push("hsl.haxe._DirectSignaler.SentinelBond::remove");
	var $spos = $s.length;
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
	$s.pop();
}
hsl.haxe._DirectSignaler.SentinelBond.prototype.__class__ = hsl.haxe._DirectSignaler.SentinelBond;
hsl.haxe._DirectSignaler.RegularBond = function(listener) { if( listener === $_ ) return; {
	$s.push("hsl.haxe._DirectSignaler.RegularBond::new");
	var $spos = $s.length;
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.listener = listener;
	$s.pop();
}}
hsl.haxe._DirectSignaler.RegularBond.__name__ = ["hsl","haxe","_DirectSignaler","RegularBond"];
hsl.haxe._DirectSignaler.RegularBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.RegularBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.RegularBond.prototype.listener = null;
hsl.haxe._DirectSignaler.RegularBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	$s.push("hsl.haxe._DirectSignaler.RegularBond::callListener");
	var $spos = $s.length;
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
	{
		$s.pop();
		return propagationStatus;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.RegularBond.prototype.determineEquals = function(value) {
	$s.push("hsl.haxe._DirectSignaler.RegularBond::determineEquals");
	var $spos = $s.length;
	{
		var $tmp = Std["is"](value,hsl.haxe._DirectSignaler.RegularBond) && Reflect.compareMethods(value.listener,this.listener);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.RegularBond.prototype.__class__ = hsl.haxe._DirectSignaler.RegularBond;
hsl.haxe._DirectSignaler.NiladicBond = function(listener) { if( listener === $_ ) return; {
	$s.push("hsl.haxe._DirectSignaler.NiladicBond::new");
	var $spos = $s.length;
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.listener = listener;
	$s.pop();
}}
hsl.haxe._DirectSignaler.NiladicBond.__name__ = ["hsl","haxe","_DirectSignaler","NiladicBond"];
hsl.haxe._DirectSignaler.NiladicBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.NiladicBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.NiladicBond.prototype.listener = null;
hsl.haxe._DirectSignaler.NiladicBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	$s.push("hsl.haxe._DirectSignaler.NiladicBond::callListener");
	var $spos = $s.length;
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
	{
		$s.pop();
		return propagationStatus;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.NiladicBond.prototype.determineEquals = function(value) {
	$s.push("hsl.haxe._DirectSignaler.NiladicBond::determineEquals");
	var $spos = $s.length;
	{
		var $tmp = Std["is"](value,hsl.haxe._DirectSignaler.NiladicBond) && Reflect.compareMethods(value.listener,this.listener);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.NiladicBond.prototype.__class__ = hsl.haxe._DirectSignaler.NiladicBond;
hsl.haxe._DirectSignaler.AdvancedBond = function(listener) { if( listener === $_ ) return; {
	$s.push("hsl.haxe._DirectSignaler.AdvancedBond::new");
	var $spos = $s.length;
	hsl.haxe._DirectSignaler.LinkedBond.call(this);
	this.listener = listener;
	$s.pop();
}}
hsl.haxe._DirectSignaler.AdvancedBond.__name__ = ["hsl","haxe","_DirectSignaler","AdvancedBond"];
hsl.haxe._DirectSignaler.AdvancedBond.__super__ = hsl.haxe._DirectSignaler.LinkedBond;
for(var k in hsl.haxe._DirectSignaler.LinkedBond.prototype ) hsl.haxe._DirectSignaler.AdvancedBond.prototype[k] = hsl.haxe._DirectSignaler.LinkedBond.prototype[k];
hsl.haxe._DirectSignaler.AdvancedBond.prototype.listener = null;
hsl.haxe._DirectSignaler.AdvancedBond.prototype.callListener = function(data,currentTarget,origin,propagationStatus) {
	$s.push("hsl.haxe._DirectSignaler.AdvancedBond::callListener");
	var $spos = $s.length;
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
			{
				$s.pop();
				return 1;
			}
		}
		else if(signal.propagationStopped) {
			{
				$s.pop();
				return 2;
			}
		}
	}
	{
		$s.pop();
		return propagationStatus;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.AdvancedBond.prototype.determineEquals = function(value) {
	$s.push("hsl.haxe._DirectSignaler.AdvancedBond::determineEquals");
	var $spos = $s.length;
	{
		var $tmp = Std["is"](value,hsl.haxe._DirectSignaler.AdvancedBond) && Reflect.compareMethods(value.listener,this.listener);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe._DirectSignaler.AdvancedBond.prototype.__class__ = hsl.haxe._DirectSignaler.AdvancedBond;
hsl.haxe._DirectSignaler.PropagationStatus = function() { }
hsl.haxe._DirectSignaler.PropagationStatus.__name__ = ["hsl","haxe","_DirectSignaler","PropagationStatus"];
hsl.haxe._DirectSignaler.PropagationStatus.prototype.__class__ = hsl.haxe._DirectSignaler.PropagationStatus;
sa.view.shader.HitareaVertex = function() { }
sa.view.shader.HitareaVertex.__name__ = ["sa","view","shader","HitareaVertex"];
sa.view.shader.HitareaVertex.prototype.__class__ = sa.view.shader.HitareaVertex;
hsl.haxe.Signal = function(data,currentBond,currentTarget,origin) { if( data === $_ ) return; {
	$s.push("hsl.haxe.Signal::new");
	var $spos = $s.length;
	this.data = data;
	this.currentBond = currentBond;
	this.currentTarget = currentTarget;
	this.origin = origin;
	this.immediatePropagationStopped = false;
	this.propagationStopped = false;
	$s.pop();
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
	$s.push("hsl.haxe.Signal::getData");
	var $spos = $s.length;
	{
		var $tmp = this.data;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.Signal.prototype.stopImmediatePropagation = function() {
	$s.push("hsl.haxe.Signal::stopImmediatePropagation");
	var $spos = $s.length;
	this.immediatePropagationStopped = true;
	$s.pop();
}
hsl.haxe.Signal.prototype.stopPropagation = function() {
	$s.push("hsl.haxe.Signal::stopPropagation");
	var $spos = $s.length;
	this.propagationStopped = true;
	$s.pop();
}
hsl.haxe.Signal.prototype.toString = function() {
	$s.push("hsl.haxe.Signal::toString");
	var $spos = $s.length;
	{
		var $tmp = "[GenericSignal data=" + this.data + "]";
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
hsl.haxe.Signal.prototype.__class__ = hsl.haxe.Signal;
GLFramebuffer = function(p) { if( p === $_ ) return; {
	$s.push("GLFramebuffer::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
GLFramebuffer.__name__ = ["GLFramebuffer"];
GLFramebuffer.prototype.framebuffer = null;
GLFramebuffer.prototype.texture = null;
GLFramebuffer.prototype.width = null;
GLFramebuffer.prototype.height = null;
GLFramebuffer.prototype.__class__ = GLFramebuffer;
Vec2 = function(x,y) { if( x === $_ ) return; {
	$s.push("Vec2::new");
	var $spos = $s.length;
	this.x = x;
	this.y = y;
	$s.pop();
}}
Vec2.__name__ = ["Vec2"];
Vec2.prototype.x = null;
Vec2.prototype.y = null;
Vec2.prototype.set = function(x,y) {
	$s.push("Vec2::set");
	var $spos = $s.length;
	this.x = x;
	this.y = y;
	$s.pop();
}
Vec2.prototype.scale = function(factor) {
	$s.push("Vec2::scale");
	var $spos = $s.length;
	this.x *= factor;
	this.y *= factor;
	$s.pop();
}
Vec2.prototype.multiply = function(x,y) {
	$s.push("Vec2::multiply");
	var $spos = $s.length;
	this.x *= x;
	this.y *= y;
	$s.pop();
}
Vec2.prototype.subtract = function(x,y) {
	$s.push("Vec2::subtract");
	var $spos = $s.length;
	this.x -= x;
	this.y -= y;
	$s.pop();
}
Vec2.prototype.normalize = function() {
	$s.push("Vec2::normalize");
	var $spos = $s.length;
	var invLength = 1 / Math.sqrt(this.x * this.x + this.y * this.y);
	this.x *= invLength;
	this.y *= invLength;
	$s.pop();
}
Vec2.prototype.transform = function(matrix) {
	$s.push("Vec2::transform");
	var $spos = $s.length;
	var x1 = this.x, y1 = this.y, z1 = 0, w1 = 1;
	var mat = matrix.buffer;
	this.x = mat[0] * x1 + mat[4] * y1 + mat[8] * z1 + mat[12] * w1;
	this.y = mat[1] * x1 + mat[5] * y1 + mat[9] * z1 + mat[13] * w1;
	$s.pop();
}
Vec2.prototype.clone = function() {
	$s.push("Vec2::clone");
	var $spos = $s.length;
	{
		var $tmp = new Vec2(this.x,this.y);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Vec2.prototype.__class__ = Vec2;
sa.view.TextureRenderer = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.TextureRenderer::new");
	var $spos = $s.length;
	null;
	$s.pop();
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
	$s.push("sa.view.TextureRenderer::init");
	var $spos = $s.length;
	this.gl = gl;
	this.shaderProgram = GL.createProgram(sa.view.shader.PassVertex,sa.view.shader.Texture);
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GL.createArrayBuffer(new Int8Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]));
	this.textureUniform = GL.getUniformLocation("texture");
	this.perspectiveMatrixUniform = GL.getUniformLocation("perspectiveMatrix");
	$s.pop();
}
sa.view.TextureRenderer.prototype.render = function(width,height) {
	$s.push("sa.view.TextureRenderer::render");
	var $spos = $s.length;
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
	this.gl.uniform1i(this.textureUniform.location,0);
	this.gl.uniformMatrix4fv(this.perspectiveMatrixUniform.location,false,matrix.buffer);
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
	$s.pop();
}
sa.view.TextureRenderer.prototype.__class__ = sa.view.TextureRenderer;
sa.view.shader.PlanktonVertex = function() { }
sa.view.shader.PlanktonVertex.__name__ = ["sa","view","shader","PlanktonVertex"];
sa.view.shader.PlanktonVertex.prototype.__class__ = sa.view.shader.PlanktonVertex;
sa.view.shader.Texture = function() { }
sa.view.shader.Texture.__name__ = ["sa","view","shader","Texture"];
sa.view.shader.Texture.prototype.__class__ = sa.view.shader.Texture;
sa.view.BackgroundRenderer = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.BackgroundRenderer::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
sa.view.BackgroundRenderer.__name__ = ["sa","view","BackgroundRenderer"];
sa.view.BackgroundRenderer.prototype.texture = null;
sa.view.BackgroundRenderer.prototype.projectionMatrix = null;
sa.view.BackgroundRenderer.prototype.cameraMatrix = null;
sa.view.BackgroundRenderer.prototype.shaderProgram = null;
sa.view.BackgroundRenderer.prototype.vertexPositionAttribute = null;
sa.view.BackgroundRenderer.prototype.vertexBuffer = null;
sa.view.BackgroundRenderer.prototype.textureUniform = null;
sa.view.BackgroundRenderer.prototype.projectionMatrixUniform = null;
sa.view.BackgroundRenderer.prototype.viewWorldMatrixUniform = null;
sa.view.BackgroundRenderer.prototype.init = function() {
	$s.push("sa.view.BackgroundRenderer::init");
	var $spos = $s.length;
	this.shaderProgram = GL.createProgram(sa.view.shader.PassVertex2,sa.view.shader.Texture);
	this.vertexPositionAttribute = GL.gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	GL.gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GL.createArrayBuffer(new Int8Array([1,-1,-1,1,-1,-1,1,-1,1,1,-1,1]));
	this.textureUniform = GL.getUniformLocation("texture");
	this.projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
	this.viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
	$s.pop();
}
sa.view.BackgroundRenderer.prototype.render = function(width,height) {
	$s.push("sa.view.BackgroundRenderer::render");
	var $spos = $s.length;
	GL.useProgram(this.shaderProgram);
	GL.gl.viewport(0,0,width,height);
	GL.gl.bindBuffer(34962,this.vertexBuffer);
	GL.gl.vertexAttribPointer(this.vertexPositionAttribute,2,5120,false,0,0);
	GL.gl.uniformMatrix4fv(this.projectionMatrixUniform.location,false,this.projectionMatrix.buffer);
	var viewWorldMatrix = new Matrix4(this.cameraMatrix);
	viewWorldMatrix.appendScale(1,-1,1);
	viewWorldMatrix.appendTranslation(0,0,-40);
	viewWorldMatrix.appendScale(80,80,1);
	GL.gl.uniformMatrix4fv(this.viewWorldMatrixUniform.location,false,viewWorldMatrix.buffer);
	GL.gl.activeTexture(33984);
	GL.gl.bindTexture(3553,this.texture.texture);
	GL.gl.uniform1i(this.textureUniform.location,0);
	GL.gl.drawArrays(4,0,6);
	$s.pop();
}
sa.view.BackgroundRenderer.prototype.__class__ = sa.view.BackgroundRenderer;
Vec4 = function(x,y,z,w) { if( x === $_ ) return; {
	$s.push("Vec4::new");
	var $spos = $s.length;
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
	$s.pop();
}}
Vec4.__name__ = ["Vec4"];
Vec4.prototype.x = null;
Vec4.prototype.y = null;
Vec4.prototype.z = null;
Vec4.prototype.w = null;
Vec4.prototype.scale = function(factor) {
	$s.push("Vec4::scale");
	var $spos = $s.length;
	this.x *= factor;
	this.y *= factor;
	this.z *= factor;
	this.w *= factor;
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
Vec4.prototype.multiply = function(x,y,z,w) {
	$s.push("Vec4::multiply");
	var $spos = $s.length;
	this.x *= x;
	this.y *= y;
	this.z *= z;
	this.w *= w;
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
Vec4.prototype.subtract = function(x,y,z,w) {
	$s.push("Vec4::subtract");
	var $spos = $s.length;
	this.x -= x;
	this.y -= y;
	this.z -= z;
	this.w -= w;
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
Vec4.prototype.length = function() {
	$s.push("Vec4::length");
	var $spos = $s.length;
	{
		var $tmp = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Vec4.prototype.transform = function(matrix) {
	$s.push("Vec4::transform");
	var $spos = $s.length;
	var x1 = this.x, y1 = this.y, z1 = this.z, w1 = this.w;
	var mat = matrix.buffer;
	this.x = mat[0] * x1 + mat[4] * y1 + mat[8] * z1 + mat[12] * w1;
	this.y = mat[1] * x1 + mat[5] * y1 + mat[9] * z1 + mat[13] * w1;
	this.z = mat[2] * x1 + mat[6] * y1 + mat[10] * z1 + mat[14] * w1;
	this.w = mat[3] * x1 + mat[7] * y1 + mat[11] * z1 + mat[15] * w1;
	$s.pop();
}
Vec4.prototype.project = function() {
	$s.push("Vec4::project");
	var $spos = $s.length;
	this.x /= this.w;
	this.y /= this.w;
	this.z /= this.w;
	this.w = 1;
	$s.pop();
}
Vec4.prototype.project3D = function(perspectiveMatrix,objectMatrix) {
	$s.push("Vec4::project3D");
	var $spos = $s.length;
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
	$s.pop();
}
Vec4.prototype.clone = function() {
	$s.push("Vec4::clone");
	var $spos = $s.length;
	{
		var $tmp = new Vec4(this.x,this.y,this.z,this.w);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Vec4.prototype.cloneToVec3 = function() {
	$s.push("Vec4::cloneToVec3");
	var $spos = $s.length;
	{
		var $tmp = new Vec3(this.x,this.y,this.z);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Vec4.prototype.__class__ = Vec4;
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	$s.push("js.Boot::__unhtml");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__trace = function(v,i) {
	$s.push("js.Boot::__trace");
	var $spos = $s.length;
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg);
	else d.innerHTML += msg;
	$s.pop();
}
js.Boot.__clear_trace = function() {
	$s.push("js.Boot::__clear_trace");
	var $spos = $s.length;
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
	else null;
	$s.pop();
}
js.Boot.__closure = function(o,f) {
	$s.push("js.Boot::__closure");
	var $spos = $s.length;
	var m = o[f];
	if(m == null) {
		$s.pop();
		return null;
	}
	var f1 = function() {
		$s.push("js.Boot::__closure@67");
		var $spos = $s.length;
		{
			var $tmp = m.apply(o,arguments);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	f1.scope = o;
	f1.method = m;
	{
		$s.pop();
		return f1;
	}
	$s.pop();
}
js.Boot.__string_rec = function(o,s) {
	$s.push("js.Boot::__string_rec");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return "null";
	}
	if(s.length >= 5) {
		$s.pop();
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":{
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) {
					var $tmp = o[0];
					$s.pop();
					return $tmp;
				}
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
				{
					var $tmp = str + ")";
					$s.pop();
					return $tmp;
				}
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
			{
				$s.pop();
				return str;
			}
		}
		var tostr;
		try {
			tostr = o.toString;
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					{
						$s.pop();
						return "???";
					}
				}
			}
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				$s.pop();
				return s2;
			}
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
		{
			$s.pop();
			return str;
		}
	}break;
	case "function":{
		{
			$s.pop();
			return "<function>";
		}
	}break;
	case "string":{
		{
			$s.pop();
			return o;
		}
	}break;
	default:{
		{
			var $tmp = String(o);
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__interfLoop = function(cc,cl) {
	$s.push("js.Boot::__interfLoop");
	var $spos = $s.length;
	if(cc == null) {
		$s.pop();
		return false;
	}
	if(cc == cl) {
		$s.pop();
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) {
				$s.pop();
				return true;
			}
		}
	}
	{
		var $tmp = js.Boot.__interfLoop(cc.__super__,cl);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Boot.__instanceof = function(o,cl) {
	$s.push("js.Boot::__instanceof");
	var $spos = $s.length;
	try {
		if(o instanceof cl) {
			if(cl == Array) {
				var $tmp = o.__enum__ == null;
				$s.pop();
				return $tmp;
			}
			{
				$s.pop();
				return true;
			}
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) {
			$s.pop();
			return true;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				if(cl == null) {
					$s.pop();
					return false;
				}
			}
		}
	}
	switch(cl) {
	case Int:{
		{
			var $tmp = Math.ceil(o%2147483648.0) === o;
			$s.pop();
			return $tmp;
		}
	}break;
	case Float:{
		{
			var $tmp = typeof(o) == "number";
			$s.pop();
			return $tmp;
		}
	}break;
	case Bool:{
		{
			var $tmp = o === true || o === false;
			$s.pop();
			return $tmp;
		}
	}break;
	case String:{
		{
			var $tmp = typeof(o) == "string";
			$s.pop();
			return $tmp;
		}
	}break;
	case Dynamic:{
		{
			$s.pop();
			return true;
		}
	}break;
	default:{
		if(o == null) {
			$s.pop();
			return false;
		}
		{
			var $tmp = o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
js.Boot.__init = function() {
	$s.push("js.Boot::__init");
	var $spos = $s.length;
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		$s.push("js.Boot::__init@205");
		var $spos = $s.length;
		this.splice(i,0,x);
		$s.pop();
	}
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		$s.push("js.Boot::__init@208");
		var $spos = $s.length;
		var idx = this.indexOf(obj);
		if(idx == -1) {
			$s.pop();
			return false;
		}
		this.splice(idx,1);
		{
			$s.pop();
			return true;
		}
		$s.pop();
	}:function(obj) {
		$s.push("js.Boot::__init@213");
		var $spos = $s.length;
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				{
					$s.pop();
					return true;
				}
			}
			i++;
		}
		{
			$s.pop();
			return false;
		}
		$s.pop();
	}
	Array.prototype.iterator = function() {
		$s.push("js.Boot::__init@225");
		var $spos = $s.length;
		{
			var $tmp = { cur : 0, arr : this, hasNext : function() {
				$s.push("js.Boot::__init@225@229");
				var $spos = $s.length;
				{
					var $tmp = this.cur < this.arr.length;
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}, next : function() {
				$s.push("js.Boot::__init@225@232");
				var $spos = $s.length;
				{
					var $tmp = this.arr[this.cur++];
					$s.pop();
					return $tmp;
				}
				$s.pop();
			}};
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		$s.push("js.Boot::__init@239");
		var $spos = $s.length;
		var x = this.cca(i);
		if(x != x) {
			$s.pop();
			return null;
		}
		{
			$s.pop();
			return x;
		}
		$s.pop();
	}
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		$s.push("js.Boot::__init@246");
		var $spos = $s.length;
		if(pos != null && pos != 0 && len != null && len < 0) {
			$s.pop();
			return "";
		}
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		}
		else if(len < 0) {
			len = this.length + len - pos;
		}
		{
			var $tmp = oldsub.apply(this,[pos,len]);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	$closure = js.Boot.__closure;
	$s.pop();
}
js.Boot.prototype.__class__ = js.Boot;
GLTextureRegistry = function(p) { if( p === $_ ) return; {
	$s.push("GLTextureRegistry::new");
	var $spos = $s.length;
	this.images = new Array();
	$s.pop();
}}
GLTextureRegistry.__name__ = ["GLTextureRegistry"];
GLTextureRegistry.prototype.images = null;
GLTextureRegistry.prototype.gl = null;
GLTextureRegistry.prototype.register = function(name,texture) {
	$s.push("GLTextureRegistry::register");
	var $spos = $s.length;
	this.images[name] = texture;
	$s.pop();
}
GLTextureRegistry.prototype.get = function(name) {
	$s.push("GLTextureRegistry::get");
	var $spos = $s.length;
	{
		var $tmp = this.images[name];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLTextureRegistry.prototype.createGLTextureFromImage = function(image,filter) {
	$s.push("GLTextureRegistry::createGLTextureFromImage");
	var $spos = $s.length;
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
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
GLTextureRegistry.prototype.createGLTextureFromCanvas = function(canvas) {
	$s.push("GLTextureRegistry::createGLTextureFromCanvas");
	var $spos = $s.length;
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
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
GLTextureRegistry.prototype.updateGLTextureFromCanvas = function(texture,canvas) {
	$s.push("GLTextureRegistry::updateGLTextureFromCanvas");
	var $spos = $s.length;
	var testPowerOfTwoWidth = Std["int"](GLMathUtil.getNextPowerOfTwo(canvas.width));
	var testPowerOfTwoHight = Std["int"](GLMathUtil.getNextPowerOfTwo(canvas.height));
	if(testPowerOfTwoWidth != canvas.width || testPowerOfTwoHight != canvas.height) throw "Canvas size must be a valid texture size!";
	this.gl.bindTexture(this.gl.TEXTURE_2D,texture.texture);
	this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,canvas);
	texture.width = canvas.width;
	texture.height = canvas.height;
	$s.pop();
}
GLTextureRegistry.prototype.__class__ = GLTextureRegistry;
bpmjs.ContextBuilder = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.ContextBuilder::new");
	var $spos = $s.length;
	this.context = new bpmjs.Context();
	$s.pop();
}}
bpmjs.ContextBuilder.__name__ = ["bpmjs","ContextBuilder"];
bpmjs.ContextBuilder.defaultContext = null;
bpmjs.ContextBuilder.build = function(configClass,contextConfig) {
	$s.push("bpmjs.ContextBuilder::build");
	var $spos = $s.length;
	var builder = new bpmjs.ContextBuilder();
	bpmjs.ContextBuilder.defaultContext = builder.context;
	builder.contextConfig = contextConfig == null?bpmjs.ContextBuilder.createDefaultContextConfig():contextConfig;
	builder.configClass = configClass;
	builder.buildInternal();
	{
		var $tmp = bpmjs.ContextBuilder.defaultContext;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
bpmjs.ContextBuilder.configure = function(object) {
	$s.push("bpmjs.ContextBuilder::configure");
	var $spos = $s.length;
	var builder = new bpmjs.ContextBuilder();
	if(bpmjs.ContextBuilder.defaultContext == null) throw builder.createError("Cannot configure Object as no context is available!");
	builder.contextConfig = bpmjs.ContextBuilder.defaultContext.contextConfig;
	builder.context = bpmjs.ContextBuilder.defaultContext;
	builder.configureInternal(object);
	$s.pop();
}
bpmjs.ContextBuilder.createDefaultContextConfig = function() {
	$s.push("bpmjs.ContextBuilder::createDefaultContextConfig");
	var $spos = $s.length;
	var defaultContextConfig = new bpmjs.ContextConfig();
	defaultContextConfig.frontController = new bpmjs.DefaultFrontController();
	{
		$s.pop();
		return defaultContextConfig;
	}
	$s.pop();
}
bpmjs.ContextBuilder.prototype.context = null;
bpmjs.ContextBuilder.prototype.contextConfig = null;
bpmjs.ContextBuilder.prototype.configClass = null;
bpmjs.ContextBuilder.prototype.config = null;
bpmjs.ContextBuilder.prototype.configureInternal = function(object) {
	$s.push("bpmjs.ContextBuilder::configureInternal");
	var $spos = $s.length;
	var contextObject = this.context.addObject("configured",Type.getClass(object),object);
	this.wireContextObject(contextObject);
	this.registerDispatchersForContextObject(contextObject);
	this.registerReceiversForContextObject(contextObject);
	this.doCompleteCallForContextObject(contextObject);
	$s.pop();
}
bpmjs.ContextBuilder.prototype.buildInternal = function() {
	$s.push("bpmjs.ContextBuilder::buildInternal");
	var $spos = $s.length;
	this.context.contextConfig = this.contextConfig;
	this.config = Type.createInstance(this.configClass,[]);
	this.createObjects();
	this.wireInjections();
	this.registerDispatchers();
	this.registerReceivers();
	this.doCompleteCall();
	this.doPostCompleteCall();
	$s.pop();
}
bpmjs.ContextBuilder.prototype.createObjects = function() {
	$s.push("bpmjs.ContextBuilder::createObjects");
	var $spos = $s.length;
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
	$s.pop();
}
bpmjs.ContextBuilder.prototype.wireInjections = function() {
	$s.push("bpmjs.ContextBuilder::wireInjections");
	var $spos = $s.length;
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.wireContextObject(contextObject);
	}
	$s.pop();
}
bpmjs.ContextBuilder.prototype.wireContextObject = function(contextObject) {
	$s.push("bpmjs.ContextBuilder::wireContextObject");
	var $spos = $s.length;
	if(contextObject.type.__rtti == null) {
		$s.pop();
		return;
	}
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
	$s.pop();
}
bpmjs.ContextBuilder.prototype.registerDispatchers = function() {
	$s.push("bpmjs.ContextBuilder::registerDispatchers");
	var $spos = $s.length;
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.registerDispatchersForContextObject(contextObject);
	}
	$s.pop();
}
bpmjs.ContextBuilder.prototype.registerDispatchersForContextObject = function(contextObject) {
	$s.push("bpmjs.ContextBuilder::registerDispatchersForContextObject");
	var $spos = $s.length;
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
	$s.pop();
}
bpmjs.ContextBuilder.prototype.registerReceivers = function() {
	$s.push("bpmjs.ContextBuilder::registerReceivers");
	var $spos = $s.length;
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.registerReceiversForContextObject(contextObject);
	}
	$s.pop();
}
bpmjs.ContextBuilder.prototype.registerReceiversForContextObject = function(contextObject) {
	$s.push("bpmjs.ContextBuilder::registerReceiversForContextObject");
	var $spos = $s.length;
	if(contextObject.type.__rtti == null) {
		$s.pop();
		return;
	}
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
	$s.pop();
}
bpmjs.ContextBuilder.prototype.doCompleteCall = function() {
	$s.push("bpmjs.ContextBuilder::doCompleteCall");
	var $spos = $s.length;
	var _g = 0, _g1 = this.context.objects;
	while(_g < _g1.length) {
		var contextObject = _g1[_g];
		++_g;
		this.doCompleteCallForContextObject(contextObject);
	}
	$s.pop();
}
bpmjs.ContextBuilder.prototype.doCompleteCallForContextObject = function(contextObject) {
	$s.push("bpmjs.ContextBuilder::doCompleteCallForContextObject");
	var $spos = $s.length;
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
	$s.pop();
}
bpmjs.ContextBuilder.prototype.doPostCompleteCall = function() {
	$s.push("bpmjs.ContextBuilder::doPostCompleteCall");
	var $spos = $s.length;
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
	$s.pop();
}
bpmjs.ContextBuilder.prototype.createError = function(message) {
	$s.push("bpmjs.ContextBuilder::createError");
	var $spos = $s.length;
	{
		var $tmp = "ContextBuilder ERROR: " + message;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
bpmjs.ContextBuilder.prototype.__class__ = bpmjs.ContextBuilder;
GLDisplayList = function(p) { if( p === $_ ) return; {
	$s.push("GLDisplayList::new");
	var $spos = $s.length;
	this.lastFrameTime = Date.now().getTime();
	this.startTime = this.lastFrameTime;
	this.enterFrameSignaler = new hsl.haxe.DirectSignaler(this);
	this.hitareaPicker = new GLHitareaPicker();
	GLMouseRegistry.getInstance().mouseDownSignaler.bind($closure(this,"handleMouseDown"));
	GLMouseRegistry.getInstance().mouseMoveSignaler.bind($closure(this,"handleMouseMove"));
	this.cursorClient = GLMouseRegistry.getInstance().createCursorClient();
	$s.pop();
}}
GLDisplayList.__name__ = ["GLDisplayList"];
GLDisplayList.instance = null;
GLDisplayList.getDefault = function() {
	$s.push("GLDisplayList::getDefault");
	var $spos = $s.length;
	if(GLDisplayList.instance == null) {
		GLDisplayList.instance = new GLDisplayList();
		GLDisplayList.instance.stage = new GLStage();
		GLDisplayList.instance.initDisplayObject(GLDisplayList.instance.stage);
	}
	{
		var $tmp = GLDisplayList.instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLDisplayList.prototype.stage = null;
GLDisplayList.prototype.hitareaPicker = null;
GLDisplayList.prototype.lastFrameTime = null;
GLDisplayList.prototype.startTime = null;
GLDisplayList.prototype.cursorClient = null;
GLDisplayList.prototype.enterFrameSignaler = null;
GLDisplayList.prototype.initDisplayObject = function(displayObject) {
	$s.push("GLDisplayList::initDisplayObject");
	var $spos = $s.length;
	displayObject.stage = this.stage;
	displayObject.enterFrameSignaler = this.enterFrameSignaler;
	$s.pop();
}
GLDisplayList.prototype.initInteractiveObject = function(interactiveObject) {
	$s.push("GLDisplayList::initInteractiveObject");
	var $spos = $s.length;
	interactiveObject.mouseDownSignaler = new hsl.haxe.DirectSignaler(this);
	$s.pop();
}
GLDisplayList.prototype.setStageSize = function(width,height) {
	$s.push("GLDisplayList::setStageSize");
	var $spos = $s.length;
	this.stage.stageWidth = width;
	this.stage.stageHeight = height;
	$s.pop();
}
GLDisplayList.prototype.dispatchEnterFrame = function() {
	$s.push("GLDisplayList::dispatchEnterFrame");
	var $spos = $s.length;
	var time = Date.now().getTime();
	var frame = new GLFrame();
	frame.time = time;
	frame.timer = time - this.startTime;
	frame.frameTime = time - this.lastFrameTime;
	this.lastFrameTime = time;
	this.enterFrameSignaler.dispatch(frame,null,{ fileName : "GLDisplayList.hx", lineNumber : 69, className : "GLDisplayList", methodName : "dispatchEnterFrame"});
	$s.pop();
}
GLDisplayList.prototype.handleMouseDown = function(position) {
	$s.push("GLDisplayList::handleMouseDown");
	var $spos = $s.length;
	var result = this.hitareaPicker.pick(this.stage,position);
	if(result != null) result.mouseDownSignaler.dispatch(result,null,{ fileName : "GLDisplayList.hx", lineNumber : 76, className : "GLDisplayList", methodName : "handleMouseDown"});
	$s.pop();
}
GLDisplayList.prototype.handleMouseMove = function(position) {
	$s.push("GLDisplayList::handleMouseMove");
	var $spos = $s.length;
	var result = this.hitareaPicker.pick(this.stage,position);
	if(result != null) this.cursorClient.handCursor();
	else this.cursorClient.defaultCursor();
	$s.pop();
}
GLDisplayList.prototype.__class__ = GLDisplayList;
GLAnimationFrame = function() { }
GLAnimationFrame.__name__ = ["GLAnimationFrame"];
GLAnimationFrame.run = function(method,ms) {
	$s.push("GLAnimationFrame::run");
	var $spos = $s.length;
	if(ms == null) ms = 0;
	var secureMethod = function() {
		$s.push("GLAnimationFrame::run@8");
		var $spos = $s.length;
		try {
			method();
		}
		catch( $e0 ) {
			{
				var e = $e0;
				{
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					null;
				}
			}
		}
		$s.pop();
	}
	if(ms == 0) {
		var window = js.Lib.window;
		var requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
		if(requestAnimationFrame == null) {
			var requester = function() {
				$s.push("GLAnimationFrame::run@30");
				var $spos = $s.length;
				requestAnimationFrame(requester);
				secureMethod();
				$s.pop();
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
	$s.pop();
}
GLAnimationFrame.prototype.__class__ = GLAnimationFrame;
sa.view.shader.Color = function() { }
sa.view.shader.Color.__name__ = ["sa","view","shader","Color"];
sa.view.shader.Color.prototype.__class__ = sa.view.shader.Color;
bpmjs.Event = function(type) { if( type === $_ ) return; {
	$s.push("bpmjs.Event::new");
	var $spos = $s.length;
	this.type = type;
	$s.pop();
}}
bpmjs.Event.__name__ = ["bpmjs","Event"];
bpmjs.Event.prototype.type = null;
bpmjs.Event.prototype.target = null;
bpmjs.Event.prototype.__class__ = bpmjs.Event;
if(!bpmjs._Event) bpmjs._Event = {}
bpmjs._Event.ListenerForType = function(type,listener) { if( type === $_ ) return; {
	$s.push("bpmjs._Event.ListenerForType::new");
	var $spos = $s.length;
	this.type = type;
	this.listener = listener;
	$s.pop();
}}
bpmjs._Event.ListenerForType.__name__ = ["bpmjs","_Event","ListenerForType"];
bpmjs._Event.ListenerForType.prototype.type = null;
bpmjs._Event.ListenerForType.prototype.listener = null;
bpmjs._Event.ListenerForType.prototype.__class__ = bpmjs._Event.ListenerForType;
if(!sa.event) sa.event = {}
sa.event.StageResize = function(p) { if( p === $_ ) return; {
	$s.push("sa.event.StageResize::new");
	var $spos = $s.length;
	bpmjs.Event.call(this,"stageResize");
	$s.pop();
}}
sa.event.StageResize.__name__ = ["sa","event","StageResize"];
sa.event.StageResize.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) sa.event.StageResize.prototype[k] = bpmjs.Event.prototype[k];
sa.event.StageResize.prototype.__class__ = sa.event.StageResize;
sa.controller.AudioController = function(p) { if( p === $_ ) return; {
	$s.push("sa.controller.AudioController::new");
	var $spos = $s.length;
	this.audio = js.Lib.document.getElementById("audio");
	this.audio.loop = "loop";
	{
		this.peaks = peak;
	}
	$s.pop();
}}
sa.controller.AudioController.__name__ = ["sa","controller","AudioController"];
sa.controller.AudioController.prototype.commonModel = null;
sa.controller.AudioController.prototype.audio = null;
sa.controller.AudioController.prototype.peaks = null;
sa.controller.AudioController.prototype.handleLauncherStart = function(event) {
	$s.push("sa.controller.AudioController::handleLauncherStart");
	var $spos = $s.length;
	var timer = new haxe.Timer(Std["int"](1000 / 30));
	timer.run = $closure(this,"handleTimer");
	$s.pop();
}
sa.controller.AudioController.prototype.handleTimer = function() {
	$s.push("sa.controller.AudioController::handleTimer");
	var $spos = $s.length;
	var frame = Math.round(this.audio.currentTime * 1000 / 30);
	if(frame < this.peaks.length) this.commonModel.peak = this.peaks[frame] / 1000;
	else this.commonModel.peak = 0;
	$s.pop();
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
	$s.push("haxe.Stack::callStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$s");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.exceptionStack = function() {
	$s.push("haxe.Stack::exceptionStack");
	var $spos = $s.length;
	{
		var $tmp = haxe.Stack.makeStack("$e");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.toString = function(stack) {
	$s.push("haxe.Stack::toString");
	var $spos = $s.length;
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
	{
		var $tmp = b.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Stack.itemToString = function(b,s) {
	$s.push("haxe.Stack::itemToString");
	var $spos = $s.length;
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
	$s.pop();
}
haxe.Stack.makeStack = function(s) {
	$s.push("haxe.Stack::makeStack");
	var $spos = $s.length;
	var a = (function($this) {
		var $r;
		try {
			$r = eval(s);
		}
		catch( $e0 ) {
			{
				var e = $e0;
				$r = (function($this) {
					var $r;
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
					$r = [];
					return $r;
				}($this));
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
	{
		$s.pop();
		return m;
	}
	$s.pop();
}
haxe.Stack.prototype.__class__ = haxe.Stack;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	$s.push("js.Lib::alert");
	var $spos = $s.length;
	alert(js.Boot.__string_rec(v,""));
	$s.pop();
}
js.Lib.eval = function(code) {
	$s.push("js.Lib::eval");
	var $spos = $s.length;
	{
		var $tmp = eval(code);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
js.Lib.setErrorHandler = function(f) {
	$s.push("js.Lib::setErrorHandler");
	var $spos = $s.length;
	js.Lib.onerror = f;
	$s.pop();
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
	$s.push("Type::getClass");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	if(o.__enum__ != null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__class__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnum = function(o) {
	$s.push("Type::getEnum");
	var $spos = $s.length;
	if(o == null) {
		$s.pop();
		return null;
	}
	{
		var $tmp = o.__enum__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getSuperClass = function(c) {
	$s.push("Type::getSuperClass");
	var $spos = $s.length;
	{
		var $tmp = c.__super__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getClassName = function(c) {
	$s.push("Type::getClassName");
	var $spos = $s.length;
	var a = c.__name__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getEnumName = function(e) {
	$s.push("Type::getEnumName");
	var $spos = $s.length;
	var a = e.__ename__;
	{
		var $tmp = a.join(".");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.resolveClass = function(name) {
	$s.push("Type::resolveClass");
	var $spos = $s.length;
	var cl;
	try {
		cl = eval(name);
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				cl = null;
			}
		}
	}
	if(cl == null || cl.__name__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return cl;
	}
	$s.pop();
}
Type.resolveEnum = function(name) {
	$s.push("Type::resolveEnum");
	var $spos = $s.length;
	var e;
	try {
		e = eval(name);
	}
	catch( $e0 ) {
		{
			var err = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				e = null;
			}
		}
	}
	if(e == null || e.__ename__ == null) {
		$s.pop();
		return null;
	}
	{
		$s.pop();
		return e;
	}
	$s.pop();
}
Type.createInstance = function(cl,args) {
	$s.push("Type::createInstance");
	var $spos = $s.length;
	if(args.length <= 3) {
		var $tmp = new cl(args[0],args[1],args[2]);
		$s.pop();
		return $tmp;
	}
	if(args.length > 8) throw "Too many arguments";
	{
		var $tmp = new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEmptyInstance = function(cl) {
	$s.push("Type::createEmptyInstance");
	var $spos = $s.length;
	{
		var $tmp = new cl($_);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.createEnum = function(e,constr,params) {
	$s.push("Type::createEnum");
	var $spos = $s.length;
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		{
			var $tmp = f.apply(e,params);
			$s.pop();
			return $tmp;
		}
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	{
		$s.pop();
		return f;
	}
	$s.pop();
}
Type.createEnumIndex = function(e,index,params) {
	$s.push("Type::createEnumIndex");
	var $spos = $s.length;
	var c = Type.getEnumConstructs(e)[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	{
		var $tmp = Type.createEnum(e,c,params);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.getInstanceFields = function(c) {
	$s.push("Type::getInstanceFields");
	var $spos = $s.length;
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.getClassFields = function(c) {
	$s.push("Type::getClassFields");
	var $spos = $s.length;
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Type.getEnumConstructs = function(e) {
	$s.push("Type::getEnumConstructs");
	var $spos = $s.length;
	{
		var $tmp = e.__constructs__;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type["typeof"] = function(v) {
	$s.push("Type::typeof");
	var $spos = $s.length;
	switch(typeof(v)) {
	case "boolean":{
		{
			var $tmp = ValueType.TBool;
			$s.pop();
			return $tmp;
		}
	}break;
	case "string":{
		{
			var $tmp = ValueType.TClass(String);
			$s.pop();
			return $tmp;
		}
	}break;
	case "number":{
		if(Math.ceil(v) == v % 2147483648.0) {
			var $tmp = ValueType.TInt;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFloat;
			$s.pop();
			return $tmp;
		}
	}break;
	case "object":{
		if(v == null) {
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
		var e = v.__enum__;
		if(e != null) {
			var $tmp = ValueType.TEnum(e);
			$s.pop();
			return $tmp;
		}
		var c = v.__class__;
		if(c != null) {
			var $tmp = ValueType.TClass(c);
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
	}break;
	case "function":{
		if(v.__name__ != null) {
			var $tmp = ValueType.TObject;
			$s.pop();
			return $tmp;
		}
		{
			var $tmp = ValueType.TFunction;
			$s.pop();
			return $tmp;
		}
	}break;
	case "undefined":{
		{
			var $tmp = ValueType.TNull;
			$s.pop();
			return $tmp;
		}
	}break;
	default:{
		{
			var $tmp = ValueType.TUnknown;
			$s.pop();
			return $tmp;
		}
	}break;
	}
	$s.pop();
}
Type.enumEq = function(a,b) {
	$s.push("Type::enumEq");
	var $spos = $s.length;
	if(a == b) {
		$s.pop();
		return true;
	}
	try {
		if(a[0] != b[0]) {
			$s.pop();
			return false;
		}
		{
			var _g1 = 2, _g = a.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Type.enumEq(a[i],b[i])) {
					$s.pop();
					return false;
				}
			}
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) {
			$s.pop();
			return false;
		}
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				{
					$s.pop();
					return false;
				}
			}
		}
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Type.enumConstructor = function(e) {
	$s.push("Type::enumConstructor");
	var $spos = $s.length;
	{
		var $tmp = e[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumParameters = function(e) {
	$s.push("Type::enumParameters");
	var $spos = $s.length;
	{
		var $tmp = e.slice(2);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.enumIndex = function(e) {
	$s.push("Type::enumIndex");
	var $spos = $s.length;
	{
		var $tmp = e[1];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Type.prototype.__class__ = Type;
GLTimeout = function() { }
GLTimeout.__name__ = ["GLTimeout"];
GLTimeout.executeLater = function(ms,method) {
	$s.push("GLTimeout::executeLater");
	var $spos = $s.length;
	var timer = new haxe.Timer(ms == null?10:ms);
	timer.run = function() {
		$s.push("GLTimeout::executeLater@8");
		var $spos = $s.length;
		method();
		timer.stop();
		$s.pop();
	}
	$s.pop();
}
GLTimeout.prototype.__class__ = GLTimeout;
bpmjs.TaskGroup = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TaskGroup::new");
	var $spos = $s.length;
	bpmjs.Task.call(this);
	this.tasks = new Array();
	$s.pop();
}}
bpmjs.TaskGroup.__name__ = ["bpmjs","TaskGroup"];
bpmjs.TaskGroup.__super__ = bpmjs.Task;
for(var k in bpmjs.Task.prototype ) bpmjs.TaskGroup.prototype[k] = bpmjs.Task.prototype[k];
bpmjs.TaskGroup.prototype.tasks = null;
bpmjs.TaskGroup.prototype.add = function(task) {
	$s.push("bpmjs.TaskGroup::add");
	var $spos = $s.length;
	this.tasks.push(task);
	$s.pop();
}
bpmjs.TaskGroup.prototype.doStart = function() {
	$s.push("bpmjs.TaskGroup::doStart");
	var $spos = $s.length;
	this.nextTask();
	$s.pop();
}
bpmjs.TaskGroup.prototype.nextTask = function() {
	$s.push("bpmjs.TaskGroup::nextTask");
	var $spos = $s.length;
	if(this.tasks.length > 0) {
		var task = this.tasks.pop();
		task.completeSignaler.bind($closure(this,"handleTaskComplete"));
		task.start({ fileName : "TaskGroup.hx", lineNumber : 29, className : "bpmjs.TaskGroup", methodName : "nextTask"});
	}
	else {
		this.complete();
	}
	$s.pop();
}
bpmjs.TaskGroup.prototype.handleTaskComplete = function(task) {
	$s.push("bpmjs.TaskGroup::handleTaskComplete");
	var $spos = $s.length;
	this.nextTask();
	$s.pop();
}
bpmjs.TaskGroup.prototype.__class__ = bpmjs.TaskGroup;
sa.view.shader.StrangeAttractorVertex = function() { }
sa.view.shader.StrangeAttractorVertex.__name__ = ["sa","view","shader","StrangeAttractorVertex"];
sa.view.shader.StrangeAttractorVertex.prototype.__class__ = sa.view.shader.StrangeAttractorVertex;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	$s.push("Reflect::hasField");
	var $spos = $s.length;
	if(o.hasOwnProperty != null) {
		var $tmp = o.hasOwnProperty(field);
		$s.pop();
		return $tmp;
	}
	var arr = Reflect.fields(o);
	{ var $it0 = arr.iterator();
	while( $it0.hasNext() ) { var t = $it0.next();
	if(t == field) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Reflect.field = function(o,field) {
	$s.push("Reflect::field");
	var $spos = $s.length;
	var v = null;
	try {
		v = o[field];
	}
	catch( $e0 ) {
		{
			var e = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				null;
			}
		}
	}
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
Reflect.setField = function(o,field,value) {
	$s.push("Reflect::setField");
	var $spos = $s.length;
	o[field] = value;
	$s.pop();
}
Reflect.callMethod = function(o,func,args) {
	$s.push("Reflect::callMethod");
	var $spos = $s.length;
	{
		var $tmp = func.apply(o,args);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.fields = function(o) {
	$s.push("Reflect::fields");
	var $spos = $s.length;
	if(o == null) {
		var $tmp = new Array();
		$s.pop();
		return $tmp;
	}
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
					$e = [];
					while($s.length >= $spos) $e.unshift($s.pop());
					$s.push($e[0]);
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
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Reflect.isFunction = function(f) {
	$s.push("Reflect::isFunction");
	var $spos = $s.length;
	{
		var $tmp = typeof(f) == "function" && f.__name__ == null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compare = function(a,b) {
	$s.push("Reflect::compare");
	var $spos = $s.length;
	{
		var $tmp = a == b?0:a > b?1:-1;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.compareMethods = function(f1,f2) {
	$s.push("Reflect::compareMethods");
	var $spos = $s.length;
	if(f1 == f2) {
		$s.pop();
		return true;
	}
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) {
		$s.pop();
		return false;
	}
	{
		var $tmp = f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.isObject = function(v) {
	$s.push("Reflect::isObject");
	var $spos = $s.length;
	if(v == null) {
		$s.pop();
		return false;
	}
	var t = typeof(v);
	{
		var $tmp = t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.deleteField = function(o,f) {
	$s.push("Reflect::deleteField");
	var $spos = $s.length;
	if(!Reflect.hasField(o,f)) {
		$s.pop();
		return false;
	}
	delete(o[f]);
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Reflect.copy = function(o) {
	$s.push("Reflect::copy");
	var $spos = $s.length;
	var o2 = { };
	{
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			o2[f] = Reflect.field(o,f);
		}
	}
	{
		$s.pop();
		return o2;
	}
	$s.pop();
}
Reflect.makeVarArgs = function(f) {
	$s.push("Reflect::makeVarArgs");
	var $spos = $s.length;
	{
		var $tmp = function() {
			$s.push("Reflect::makeVarArgs@116");
			var $spos = $s.length;
			var a = new Array();
			{
				var _g1 = 0, _g = arguments.length;
				while(_g1 < _g) {
					var i = _g1++;
					a.push(arguments[i]);
				}
			}
			{
				var $tmp = f(a);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Reflect.prototype.__class__ = Reflect;
sa.event.LauncherStart = function(p) { if( p === $_ ) return; {
	$s.push("sa.event.LauncherStart::new");
	var $spos = $s.length;
	bpmjs.Event.call(this,"launcherStart");
	$s.pop();
}}
sa.event.LauncherStart.__name__ = ["sa","event","LauncherStart"];
sa.event.LauncherStart.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) sa.event.LauncherStart.prototype[k] = bpmjs.Event.prototype[k];
sa.event.LauncherStart.prototype.__class__ = sa.event.LauncherStart;
sa.view.PlanktonRenderer = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.PlanktonRenderer::new");
	var $spos = $s.length;
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
	$s.pop();
}}
sa.view.PlanktonRenderer.__name__ = ["sa","view","PlanktonRenderer"];
sa.view.PlanktonRenderer.prototype.attractorPosition = null;
sa.view.PlanktonRenderer.prototype.peak = null;
sa.view.PlanktonRenderer.prototype.peakIncrement = null;
sa.view.PlanktonRenderer.prototype.projectionMatrix = null;
sa.view.PlanktonRenderer.prototype.cameraMatrix = null;
sa.view.PlanktonRenderer.prototype.numParticles = null;
sa.view.PlanktonRenderer.prototype.numParticlesEachSide = null;
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
sa.view.PlanktonRenderer.prototype.init = function() {
	$s.push("sa.view.PlanktonRenderer::init");
	var $spos = $s.length;
	this.shaderProgram = GL.createProgram(sa.view.shader.PlanktonVertex,sa.view.shader.Color);
	this.vertexPositionAttribute = GL.gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	GL.gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.perspectiveMatrixUniform = GL.getUniformLocation("perspectiveMatrix");
	this.objectMatrixUniform = GL.getUniformLocation("objectMatrix");
	this.rotationMatrixUniform = GL.getUniformLocation("rotationMatrix");
	this.cameraMatrixUniform = GL.getUniformLocation("cameraMatrix");
	this.elapsedTimeUniform = GL.getUniformLocation("elapsedTime");
	this.attractorPositionUniform = GL.getUniformLocation("attractorPosition");
	this.peakUniform = GL.getUniformLocation("peak");
	this.peakIncrementUniform = GL.getUniformLocation("peakIncrement");
	this.calculatePositions();
	this.vertexBuffer = GL.createArrayBuffer(this.vertexes);
	this.startTime = Date.now().getTime();
	$s.pop();
}
sa.view.PlanktonRenderer.prototype.calculatePositions = function() {
	$s.push("sa.view.PlanktonRenderer::calculatePositions");
	var $spos = $s.length;
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
	$s.pop();
}
sa.view.PlanktonRenderer.prototype.render = function(width,height) {
	$s.push("sa.view.PlanktonRenderer::render");
	var $spos = $s.length;
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
	GL.useProgram(this.shaderProgram);
	GL.gl.viewport(0,0,width,height);
	GL.gl.enable(3042);
	GL.gl.blendFunc(770,1);
	GL.gl.uniformMatrix4fv(this.perspectiveMatrixUniform.location,false,this.projectionMatrix.buffer);
	GL.gl.uniformMatrix4fv(this.objectMatrixUniform.location,false,this.objectMatrix.buffer);
	GL.gl.uniformMatrix4fv(this.cameraMatrixUniform.location,false,this.cameraMatrix.buffer);
	GL.gl.uniformMatrix4fv(this.rotationMatrixUniform.location,false,rotationM.buffer);
	GL.gl.uniform1f(this.elapsedTimeUniform.location,elapsedTime);
	GL.gl.uniform1f(this.peakIncrementUniform.location,this.peakIncrement);
	GL.gl.uniform1f(this.peakUniform.location,this.peak);
	this.attractorPositionUniform.setVec3(this.attractorPosition);
	GL.gl.bindBuffer(34962,this.vertexBuffer);
	GL.gl.vertexAttribPointer(this.vertexPositionAttribute,3,5126,false,0,0);
	GL.gl.drawArrays(1,0,this.numParticles);
	GL.gl.disable(3042);
	$s.pop();
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
	$s.push("haxe.rtti.TypeApi::typeInfos");
	var $spos = $s.length;
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
	{
		$s.pop();
		return inf;
	}
	$s.pop();
}
haxe.rtti.TypeApi.isVar = function(t) {
	$s.push("haxe.rtti.TypeApi::isVar");
	var $spos = $s.length;
	{
		var $tmp = (function($this) {
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
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.TypeApi.leq = function(f,l1,l2) {
	$s.push("haxe.rtti.TypeApi::leq");
	var $spos = $s.length;
	var it = l2.iterator();
	{ var $it0 = l1.iterator();
	while( $it0.hasNext() ) { var e1 = $it0.next();
	{
		if(!it.hasNext()) {
			$s.pop();
			return false;
		}
		var e2 = it.next();
		if(!f(e1,e2)) {
			$s.pop();
			return false;
		}
	}
	}}
	if(it.hasNext()) {
		$s.pop();
		return false;
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.rtti.TypeApi.rightsEq = function(r1,r2) {
	$s.push("haxe.rtti.TypeApi::rightsEq");
	var $spos = $s.length;
	if(r1 == r2) {
		$s.pop();
		return true;
	}
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
			{
				var $tmp = m1 == m2;
				$s.pop();
				return $tmp;
			}
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
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
haxe.rtti.TypeApi.typeEq = function(t1,t2) {
	$s.push("haxe.rtti.TypeApi::typeEq");
	var $spos = $s.length;
	var $e = t1;
	switch( $e[1] ) {
	case 0:
	{
		{
			var $tmp = t2 == haxe.rtti.CType.CUnknown;
			$s.pop();
			return $tmp;
		}
	}break;
	case 1:
	var params = $e[3], name = $e[2];
	{
		var $e = t2;
		switch( $e[1] ) {
		case 1:
		var params2 = $e[3], name2 = $e[2];
		{
			{
				var $tmp = name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
				$s.pop();
				return $tmp;
			}
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
			{
				var $tmp = name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
				$s.pop();
				return $tmp;
			}
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
			{
				var $tmp = name == name2 && haxe.rtti.TypeApi.leq($closure(haxe.rtti.TypeApi,"typeEq"),params,params2);
				$s.pop();
				return $tmp;
			}
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
			{
				var $tmp = haxe.rtti.TypeApi.leq(function(a,b) {
					$s.push("haxe.rtti.TypeApi::typeEq@187");
					var $spos = $s.length;
					{
						var $tmp = a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
						$s.pop();
						return $tmp;
					}
					$s.pop();
				},args,args2) && haxe.rtti.TypeApi.typeEq(ret,ret2);
				$s.pop();
				return $tmp;
			}
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
			{
				var $tmp = haxe.rtti.TypeApi.leq(function(a,b) {
					$s.push("haxe.rtti.TypeApi::typeEq@195");
					var $spos = $s.length;
					{
						var $tmp = a.name == b.name && haxe.rtti.TypeApi.typeEq(a.t,b.t);
						$s.pop();
						return $tmp;
					}
					$s.pop();
				},fields,fields2);
				$s.pop();
				return $tmp;
			}
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
			if(t == null != (t21 == null)) {
				$s.pop();
				return false;
			}
			{
				var $tmp = t == null || haxe.rtti.TypeApi.typeEq(t,t21);
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			null;
		}break;
		}
	}break;
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
haxe.rtti.TypeApi.fieldEq = function(f1,f2) {
	$s.push("haxe.rtti.TypeApi::fieldEq");
	var $spos = $s.length;
	if(f1.name != f2.name) {
		$s.pop();
		return false;
	}
	if(!haxe.rtti.TypeApi.typeEq(f1.type,f2.type)) {
		$s.pop();
		return false;
	}
	if(f1.isPublic != f2.isPublic) {
		$s.pop();
		return false;
	}
	if(f1.doc != f2.doc) {
		$s.pop();
		return false;
	}
	if(!haxe.rtti.TypeApi.rightsEq(f1.get,f2.get)) {
		$s.pop();
		return false;
	}
	if(!haxe.rtti.TypeApi.rightsEq(f1.set,f2.set)) {
		$s.pop();
		return false;
	}
	if(f1.params == null != (f2.params == null)) {
		$s.pop();
		return false;
	}
	if(f1.params != null && f1.params.join(":") != f2.params.join(":")) {
		$s.pop();
		return false;
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.rtti.TypeApi.constructorEq = function(c1,c2) {
	$s.push("haxe.rtti.TypeApi::constructorEq");
	var $spos = $s.length;
	if(c1.name != c2.name) {
		$s.pop();
		return false;
	}
	if(c1.doc != c2.doc) {
		$s.pop();
		return false;
	}
	if(c1.args == null != (c2.args == null)) {
		$s.pop();
		return false;
	}
	if(c1.args != null && !haxe.rtti.TypeApi.leq(function(a,b) {
		$s.push("haxe.rtti.TypeApi::constructorEq@239");
		var $spos = $s.length;
		{
			var $tmp = a.name == b.name && a.opt == b.opt && haxe.rtti.TypeApi.typeEq(a.t,b.t);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	},c1.args,c2.args)) {
		$s.pop();
		return false;
	}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
haxe.rtti.TypeApi.prototype.__class__ = haxe.rtti.TypeApi;
GLMouseRegistry = function(p) { if( p === $_ ) return; {
	$s.push("GLMouseRegistry::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
GLMouseRegistry.__name__ = ["GLMouseRegistry"];
GLMouseRegistry.instance = null;
GLMouseRegistry.getInstance = function() {
	$s.push("GLMouseRegistry::getInstance");
	var $spos = $s.length;
	if(GLMouseRegistry.instance == null) GLMouseRegistry.instance = new GLMouseRegistry();
	{
		var $tmp = GLMouseRegistry.instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLMouseRegistry.prototype.mouseDownSignaler = null;
GLMouseRegistry.prototype.mouseMoveSignaler = null;
GLMouseRegistry.prototype.canvas = null;
GLMouseRegistry.prototype.init = function(canvas) {
	$s.push("GLMouseRegistry::init");
	var $spos = $s.length;
	this.canvas = canvas;
	this.mouseDownSignaler = new hsl.haxe.DirectSignaler(this);
	this.mouseMoveSignaler = new hsl.haxe.DirectSignaler(this);
	canvas.onmousedown = $closure(this,"onMouseDown");
	canvas.onmousemove = $closure(this,"onMouseMove");
	$s.pop();
}
GLMouseRegistry.prototype.setCursor = function(cursor) {
	$s.push("GLMouseRegistry::setCursor");
	var $spos = $s.length;
	this.canvas.style.cursor = cursor;
	$s.pop();
}
GLMouseRegistry.prototype.createCursorClient = function() {
	$s.push("GLMouseRegistry::createCursorClient");
	var $spos = $s.length;
	var client = new GLCursorClient();
	{
		$s.pop();
		return client;
	}
	$s.pop();
}
GLMouseRegistry.prototype.onMouseDown = function(e) {
	$s.push("GLMouseRegistry::onMouseDown");
	var $spos = $s.length;
	try {
		this.mouseDownSignaler.dispatch(new Vec2(e.layerX / this.canvas.clientWidth,e.layerY / this.canvas.clientHeight),null,{ fileName : "GLMouseRegistry.hx", lineNumber : 50, className : "GLMouseRegistry", methodName : "onMouseDown"});
	}
	catch( $e0 ) {
		{
			var e1 = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				haxe.Log.trace(e1,{ fileName : "GLMouseRegistry.hx", lineNumber : 54, className : "GLMouseRegistry", methodName : "onMouseDown"});
			}
		}
	}
	$s.pop();
}
GLMouseRegistry.prototype.onMouseMove = function(e) {
	$s.push("GLMouseRegistry::onMouseMove");
	var $spos = $s.length;
	try {
		this.mouseMoveSignaler.dispatch(new Vec2(e.layerX / this.canvas.clientWidth,e.layerY / this.canvas.clientHeight),null,{ fileName : "GLMouseRegistry.hx", lineNumber : 62, className : "GLMouseRegistry", methodName : "onMouseMove"});
	}
	catch( $e0 ) {
		{
			var e1 = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				haxe.Log.trace(e1,{ fileName : "GLMouseRegistry.hx", lineNumber : 66, className : "GLMouseRegistry", methodName : "onMouseMove"});
			}
		}
	}
	$s.pop();
}
GLMouseRegistry.prototype.__class__ = GLMouseRegistry;
MoveSetVec3 = function(current,to,acceleration) { if( current === $_ ) return; {
	$s.push("MoveSetVec3::new");
	var $spos = $s.length;
	this.current = current;
	this.to = to;
	this.acceleration = acceleration;
	this.moveSetX = new MoveSet(current.x,to.x,acceleration.x);
	this.moveSetY = new MoveSet(current.y,to.y,acceleration.y);
	this.moveSetZ = new MoveSet(current.z,to.z,acceleration.z);
	$s.pop();
}}
MoveSetVec3.__name__ = ["MoveSetVec3"];
MoveSetVec3.prototype.current = null;
MoveSetVec3.prototype.to = null;
MoveSetVec3.prototype.acceleration = null;
MoveSetVec3.prototype.moveSetX = null;
MoveSetVec3.prototype.moveSetY = null;
MoveSetVec3.prototype.moveSetZ = null;
MoveSetVec3.prototype.move = function(factor) {
	$s.push("MoveSetVec3::move");
	var $spos = $s.length;
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
	$s.pop();
}
MoveSetVec3.prototype.__class__ = MoveSetVec3;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	$s.push("Lambda::array");
	var $spos = $s.length;
	var a = new Array();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	a.push(i);
	}}
	{
		$s.pop();
		return a;
	}
	$s.pop();
}
Lambda.list = function(it) {
	$s.push("Lambda::list");
	var $spos = $s.length;
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var i = $it0.next();
	l.add(i);
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.map = function(it,f) {
	$s.push("Lambda::map");
	var $spos = $s.length;
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(x));
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.mapi = function(it,f) {
	$s.push("Lambda::mapi");
	var $spos = $s.length;
	var l = new List();
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(f(i++,x));
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.has = function(it,elt,cmp) {
	$s.push("Lambda::has");
	var $spos = $s.length;
	if(cmp == null) {
		{ var $it0 = it.iterator();
		while( $it0.hasNext() ) { var x = $it0.next();
		if(x == elt) {
			$s.pop();
			return true;
		}
		}}
	}
	else {
		{ var $it1 = it.iterator();
		while( $it1.hasNext() ) { var x = $it1.next();
		if(cmp(x,elt)) {
			$s.pop();
			return true;
		}
		}}
	}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Lambda.exists = function(it,f) {
	$s.push("Lambda::exists");
	var $spos = $s.length;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) {
		$s.pop();
		return true;
	}
	}}
	{
		$s.pop();
		return false;
	}
	$s.pop();
}
Lambda.foreach = function(it,f) {
	$s.push("Lambda::foreach");
	var $spos = $s.length;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(!f(x)) {
		$s.pop();
		return false;
	}
	}}
	{
		$s.pop();
		return true;
	}
	$s.pop();
}
Lambda.iter = function(it,f) {
	$s.push("Lambda::iter");
	var $spos = $s.length;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	f(x);
	}}
	$s.pop();
}
Lambda.filter = function(it,f) {
	$s.push("Lambda::filter");
	var $spos = $s.length;
	var l = new List();
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	if(f(x)) l.add(x);
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.fold = function(it,f,first) {
	$s.push("Lambda::fold");
	var $spos = $s.length;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	first = f(x,first);
	}}
	{
		$s.pop();
		return first;
	}
	$s.pop();
}
Lambda.count = function(it,pred) {
	$s.push("Lambda::count");
	var $spos = $s.length;
	var n = 0;
	if(pred == null) { var $it0 = it.iterator();
	while( $it0.hasNext() ) { var _ = $it0.next();
	n++;
	}}
	else { var $it1 = it.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	if(pred(x)) n++;
	}}
	{
		$s.pop();
		return n;
	}
	$s.pop();
}
Lambda.empty = function(it) {
	$s.push("Lambda::empty");
	var $spos = $s.length;
	{
		var $tmp = !it.iterator().hasNext();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Lambda.indexOf = function(it,v) {
	$s.push("Lambda::indexOf");
	var $spos = $s.length;
	var i = 0;
	{ var $it0 = it.iterator();
	while( $it0.hasNext() ) { var v2 = $it0.next();
	{
		if(v == v2) {
			$s.pop();
			return i;
		}
		i++;
	}
	}}
	{
		$s.pop();
		return -1;
	}
	$s.pop();
}
Lambda.concat = function(a,b) {
	$s.push("Lambda::concat");
	var $spos = $s.length;
	var l = new List();
	{ var $it0 = a.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(x);
	}}
	{ var $it1 = b.iterator();
	while( $it1.hasNext() ) { var x = $it1.next();
	l.add(x);
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
Lambda.prototype.__class__ = Lambda;
sa.view.StrangeAttractorRenderer = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.StrangeAttractorRenderer::new");
	var $spos = $s.length;
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
	$s.pop();
}}
sa.view.StrangeAttractorRenderer.__name__ = ["sa","view","StrangeAttractorRenderer"];
sa.view.StrangeAttractorRenderer.prototype.effectivePosition = null;
sa.view.StrangeAttractorRenderer.prototype.peak = null;
sa.view.StrangeAttractorRenderer.prototype.projectionMatrix = null;
sa.view.StrangeAttractorRenderer.prototype.cameraMatrix = null;
sa.view.StrangeAttractorRenderer.prototype.softPeak = null;
sa.view.StrangeAttractorRenderer.prototype.defaultZ = null;
sa.view.StrangeAttractorRenderer.prototype.numParticles = null;
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
	$s.push("sa.view.StrangeAttractorRenderer::init");
	var $spos = $s.length;
	var gl1 = GL.gl;
	this.shaderProgram = GL.createProgram(sa.view.shader.StrangeAttractorVertex,sa.view.shader.Color);
	this.vertexPositionAttribute = gl1.getAttribLocation(this.shaderProgram,"vertexPosition");
	this.colorAttribute = gl1.getAttribLocation(this.shaderProgram,"icolor");
	this.perspectiveMatrixUniform = GL.getUniformLocation("perspectiveMatrix");
	this.objectMatrixUniform = GL.getUniformLocation("objectMatrix");
	this.cameraMatrixUniform = GL.getUniformLocation("cameraMatrix");
	this.shadowMatrixUniform = GL.getUniformLocation("shadowMatrix");
	this.elapsedTimeUniform = GL.getUniformLocation("elapsedTime");
	this.specularColorUniform1 = GL.getUniformLocation("specularColor1");
	this.specularColorUniform2 = GL.getUniformLocation("specularColor2");
	this.clickColorUniform = GL.getUniformLocation("clickColor");
	this.elapsedClickTimeUniform = GL.getUniformLocation("elapsedClickTime");
	this.clickPosUniform = GL.getUniformLocation("clickPos");
	this.peakUniform = GL.getUniformLocation("peak");
	this.updateMode(0);
	GLMouseRegistry.getInstance().mouseDownSignaler.bind($closure(this,"shake"));
	$s.pop();
}
sa.view.StrangeAttractorRenderer.prototype.updateMode = function(newMode) {
	$s.push("sa.view.StrangeAttractorRenderer::updateMode");
	var $spos = $s.length;
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
	$s.pop();
}
sa.view.StrangeAttractorRenderer.prototype.updateParticleMode = function() {
	$s.push("sa.view.StrangeAttractorRenderer::updateParticleMode");
	var $spos = $s.length;
	this.calculatePositions();
	var gl = GL.gl;
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER,this.vertexes,gl.STATIC_DRAW);
	this.colorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER,this.colors,gl.STATIC_DRAW);
	$s.pop();
}
sa.view.StrangeAttractorRenderer.prototype.calculatePositions = function() {
	$s.push("sa.view.StrangeAttractorRenderer::calculatePositions");
	var $spos = $s.length;
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
	$s.pop();
}
sa.view.StrangeAttractorRenderer.prototype.start = function() {
	$s.push("sa.view.StrangeAttractorRenderer::start");
	var $spos = $s.length;
	this.startTime = Date.now().getTime();
	this.lastTime = Date.now().getTime();
	$s.pop();
}
sa.view.StrangeAttractorRenderer.prototype.render = function(width,height) {
	$s.push("sa.view.StrangeAttractorRenderer::render");
	var $spos = $s.length;
	var gl = GL.gl;
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
	GL.useProgram(this.shaderProgram);
	gl.enableVertexAttribArray(this.colorAttribute);
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	gl.viewport(0,0,width,height);
	gl.enable(gl.DEPTH_TEST);
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.SRC_ALPHA,gl.ONE);
	GL.gl.uniformMatrix4fv(this.perspectiveMatrixUniform.location,false,this.projectionMatrix.buffer);
	GL.gl.uniformMatrix4fv(this.objectMatrixUniform.location,false,this.objectMatrix.buffer);
	GL.gl.uniformMatrix4fv(this.shadowMatrixUniform.location,false,this.shadowMatrix.buffer);
	GL.gl.uniformMatrix4fv(this.cameraMatrixUniform.location,false,this.cameraMatrix.buffer);
	GL.gl.uniform1f(this.elapsedTimeUniform.location,elapsedTime);
	GL.gl.uniform1f(this.peakUniform.location,this.softPeak);
	GL.gl.uniform1f(this.elapsedClickTimeUniform.location,elapsedClickTime);
	this.clickPosUniform.setVec3(this.clickPos);
	this.specularColorUniform1.setRGB(this.kuler[2]);
	this.specularColorUniform2.setRGB(this.kuler[3]);
	this.clickColorUniform.setRGB(this.kuler[4]);
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	gl.vertexAttribPointer(this.vertexPositionAttribute,3,gl.FLOAT,false,0,0);
	gl.bindBuffer(gl.ARRAY_BUFFER,this.colorBuffer);
	gl.enableVertexAttribArray(this.colorAttribute);
	gl.vertexAttribPointer(this.colorAttribute,3,gl.FLOAT,false,0,0);
	if(this.mode != 2) {
		gl.drawArrays(gl.POINTS,0,this.numParticles);
	}
	else {
		gl.drawArrays(gl.LINE_LOOP,0,this.numParticles);
	}
	if(this.mode == 0) {
		gl.drawArrays(gl.LINES,0,this.numParticles * 0.01);
		gl.drawArrays(gl.TRIANGLE_STRIP,this.numParticles * 0.01,this.numParticles * 0.001);
	}
	gl.disable(gl.DEPTH_TEST);
	$s.pop();
}
sa.view.StrangeAttractorRenderer.prototype.shake = function(mousePos) {
	$s.push("sa.view.StrangeAttractorRenderer::shake");
	var $spos = $s.length;
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
	$s.pop();
}
sa.view.StrangeAttractorRenderer.prototype.__class__ = sa.view.StrangeAttractorRenderer;
GLTexture = function(p) { if( p === $_ ) return; {
	$s.push("GLTexture::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
GLTexture.__name__ = ["GLTexture"];
GLTexture.prototype.width = null;
GLTexture.prototype.height = null;
GLTexture.prototype.texture = null;
GLTexture.prototype.__class__ = GLTexture;
haxe.TypeTools = function() { }
haxe.TypeTools.__name__ = ["haxe","TypeTools"];
haxe.TypeTools.getClassNames = function(value) {
	$s.push("haxe.TypeTools::getClassNames");
	var $spos = $s.length;
	var result = new List();
	var valueClass = Std["is"](value,Class)?value:Type.getClass(value);
	while(null != valueClass) {
		result.add(Type.getClassName(valueClass));
		valueClass = Type.getSuperClass(valueClass);
	}
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
haxe.TypeTools.prototype.__class__ = haxe.TypeTools;
StringBuf = function(p) { if( p === $_ ) return; {
	$s.push("StringBuf::new");
	var $spos = $s.length;
	this.b = new Array();
	$s.pop();
}}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	$s.push("StringBuf::add");
	var $spos = $s.length;
	this.b[this.b.length] = x;
	$s.pop();
}
StringBuf.prototype.addSub = function(s,pos,len) {
	$s.push("StringBuf::addSub");
	var $spos = $s.length;
	this.b[this.b.length] = s.substr(pos,len);
	$s.pop();
}
StringBuf.prototype.addChar = function(c) {
	$s.push("StringBuf::addChar");
	var $spos = $s.length;
	this.b[this.b.length] = String.fromCharCode(c);
	$s.pop();
}
StringBuf.prototype.toString = function() {
	$s.push("StringBuf::toString");
	var $spos = $s.length;
	{
		var $tmp = this.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	$s.push("haxe.Log::trace");
	var $spos = $s.length;
	js.Boot.__trace(v,infos);
	$s.pop();
}
haxe.Log.clear = function() {
	$s.push("haxe.Log::clear");
	var $spos = $s.length;
	js.Boot.__clear_trace();
	$s.pop();
}
haxe.Log.prototype.__class__ = haxe.Log;
sa.view.PreloaderView = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.PreloaderView::new");
	var $spos = $s.length;
	this.current = 0;
	$s.pop();
}}
sa.view.PreloaderView.__name__ = ["sa","view","PreloaderView"];
sa.view.PreloaderView.prototype.current = null;
sa.view.PreloaderView.prototype.max = null;
sa.view.PreloaderView.prototype.start = function(message) {
	$s.push("sa.view.PreloaderView::start");
	var $spos = $s.length;
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
	$s.pop();
}
sa.view.PreloaderView.prototype.complete = function() {
	$s.push("sa.view.PreloaderView::complete");
	var $spos = $s.length;
	if(this.current == this.max) {
		document.getElementById("preloader").innerHTML = "";
	}
	$s.pop();
}
sa.view.PreloaderView.prototype.__class__ = sa.view.PreloaderView;
GLUniformLocation = function(p) { if( p === $_ ) return; {
	$s.push("GLUniformLocation::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
GLUniformLocation.__name__ = ["GLUniformLocation"];
GLUniformLocation.prototype.location = null;
GLUniformLocation.prototype.uniform1f = function(v) {
	$s.push("GLUniformLocation::uniform1f");
	var $spos = $s.length;
	GL.gl.uniform1f(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform1fv = function(v) {
	$s.push("GLUniformLocation::uniform1fv");
	var $spos = $s.length;
	GL.gl.uniform1fv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform1i = function(v) {
	$s.push("GLUniformLocation::uniform1i");
	var $spos = $s.length;
	GL.gl.uniform1i(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform1iv = function(v) {
	$s.push("GLUniformLocation::uniform1iv");
	var $spos = $s.length;
	GL.gl.uniform1iv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform2f = function(x,y) {
	$s.push("GLUniformLocation::uniform2f");
	var $spos = $s.length;
	GL.gl.uniform2f(this.location,x,y);
	$s.pop();
}
GLUniformLocation.prototype.uniform2fv = function(v) {
	$s.push("GLUniformLocation::uniform2fv");
	var $spos = $s.length;
	GL.gl.uniform2fv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform2i = function(x,y) {
	$s.push("GLUniformLocation::uniform2i");
	var $spos = $s.length;
	GL.gl.uniform2i(this.location,x,y);
	$s.pop();
}
GLUniformLocation.prototype.uniform2iv = function(v) {
	$s.push("GLUniformLocation::uniform2iv");
	var $spos = $s.length;
	GL.gl.uniform2iv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform3f = function(x,y,z) {
	$s.push("GLUniformLocation::uniform3f");
	var $spos = $s.length;
	GL.gl.uniform3f(this.location,x,y,z);
	$s.pop();
}
GLUniformLocation.prototype.uniform3fv = function(v) {
	$s.push("GLUniformLocation::uniform3fv");
	var $spos = $s.length;
	GL.gl.uniform3fv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform3i = function(x,y,z) {
	$s.push("GLUniformLocation::uniform3i");
	var $spos = $s.length;
	GL.gl.uniform3i(this.location,x,y,z);
	$s.pop();
}
GLUniformLocation.prototype.uniform3iv = function(v) {
	$s.push("GLUniformLocation::uniform3iv");
	var $spos = $s.length;
	GL.gl.uniform3iv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform4f = function(x,y,z,w) {
	$s.push("GLUniformLocation::uniform4f");
	var $spos = $s.length;
	GL.gl.uniform4f(this.location,x,y,z,w);
	$s.pop();
}
GLUniformLocation.prototype.uniform4fv = function(v) {
	$s.push("GLUniformLocation::uniform4fv");
	var $spos = $s.length;
	GL.gl.uniform4fv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniform4i = function(x,y,z,w) {
	$s.push("GLUniformLocation::uniform4i");
	var $spos = $s.length;
	GL.gl.uniform4i(this.location,x,y,z,w);
	$s.pop();
}
GLUniformLocation.prototype.uniform4iv = function(v) {
	$s.push("GLUniformLocation::uniform4iv");
	var $spos = $s.length;
	GL.gl.uniform4iv(this.location,v);
	$s.pop();
}
GLUniformLocation.prototype.uniformMatrix2fv = function(transpose,value) {
	$s.push("GLUniformLocation::uniformMatrix2fv");
	var $spos = $s.length;
	if(transpose == null) transpose = false;
	GL.gl.uniformMatrix2fv(this.location,transpose,value);
	$s.pop();
}
GLUniformLocation.prototype.uniformMatrix3fv = function(transpose,value) {
	$s.push("GLUniformLocation::uniformMatrix3fv");
	var $spos = $s.length;
	if(transpose == null) transpose = false;
	GL.gl.uniformMatrix3fv(this.location,transpose,value);
	$s.pop();
}
GLUniformLocation.prototype.uniformMatrix4fv = function(transpose,value) {
	$s.push("GLUniformLocation::uniformMatrix4fv");
	var $spos = $s.length;
	if(transpose == null) transpose = false;
	GL.gl.uniformMatrix4fv(this.location,transpose,value);
	$s.pop();
}
GLUniformLocation.prototype.setMatrix4 = function(matrix) {
	$s.push("GLUniformLocation::setMatrix4");
	var $spos = $s.length;
	GL.gl.uniformMatrix4fv(this.location,false,matrix.buffer);
	$s.pop();
}
GLUniformLocation.prototype.setVec3 = function(vec) {
	$s.push("GLUniformLocation::setVec3");
	var $spos = $s.length;
	GL.gl.uniform3f(this.location,vec.x,vec.y,vec.z);
	$s.pop();
}
GLUniformLocation.prototype.setRGB = function(color) {
	$s.push("GLUniformLocation::setRGB");
	var $spos = $s.length;
	GL.gl.uniform3f(this.location,color.r,color.g,color.b);
	$s.pop();
}
GLUniformLocation.prototype.__class__ = GLUniformLocation;
GLMathUtil = function() { }
GLMathUtil.__name__ = ["GLMathUtil"];
GLMathUtil.getNextPowerOfTwo = function(value) {
	$s.push("GLMathUtil::getNextPowerOfTwo");
	var $spos = $s.length;
	var n = Std["int"](value);
	n--;
	n |= n >> 1;
	n |= n >> 2;
	n |= n >> 4;
	n |= n >> 8;
	n |= n >> 16;
	n++;
	{
		$s.pop();
		return n;
	}
	$s.pop();
}
GLMathUtil.prototype.__class__ = GLMathUtil;
sa.Config = function(p) { if( p === $_ ) return; {
	$s.push("sa.Config::new");
	var $spos = $s.length;
	this.controller();
	this.model();
	this.view();
	$s.pop();
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
	$s.push("sa.Config::controller");
	var $spos = $s.length;
	this.launcher = new sa.controller.Launcher();
	this.stageResizeAction = new sa.controller.StageResizeAction();
	this.audioController = new sa.controller.AudioController();
	this.cameraController = new sa.controller.CameraController();
	$s.pop();
}
sa.Config.prototype.model = function() {
	$s.push("sa.Config::model");
	var $spos = $s.length;
	this.commonModel = new sa.model.CommonModel();
	this.commonModel.canvas = js.Lib.document.getElementById("content");
	this.commonModel.gl = GL.initGL(this.commonModel.canvas,true);
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
	$s.pop();
}
sa.Config.prototype.view = function() {
	$s.push("sa.Config::view");
	var $spos = $s.length;
	this.canvasView = new sa.view.CanvasView();
	this.preloaderView = new sa.view.PreloaderView();
	this.preloaderView.complete();
	this.mainInterfaceView = new sa.view.MainInterfaceView();
	$s.pop();
}
sa.Config.prototype.__class__ = sa.Config;
sa.Config.__interfaces__ = [haxe.rtti.Infos];
GLHitarea = function(p) { if( p === $_ ) return; {
	$s.push("GLHitarea::new");
	var $spos = $s.length;
	this.position = new Vec2();
	this.size = new Vec2();
	$s.pop();
}}
GLHitarea.__name__ = ["GLHitarea"];
GLHitarea.prototype.position = null;
GLHitarea.prototype.size = null;
GLHitarea.prototype.isUnder = function(matrix,positionOnStage) {
	$s.push("GLHitarea::isUnder");
	var $spos = $s.length;
	var tl = this.position.clone();
	tl.transform(matrix);
	var br = this.size.clone();
	br.transform(matrix);
	{
		var $tmp = tl.x <= positionOnStage.x && br.x >= positionOnStage.x && tl.y <= positionOnStage.y && br.y >= positionOnStage.y;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLHitarea.prototype.__class__ = GLHitarea;
sa.view.RocksRenderer = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.RocksRenderer::new");
	var $spos = $s.length;
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
	$s.pop();
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
	$s.push("sa.view.RocksRenderer::init");
	var $spos = $s.length;
	this.gl = gl;
	this.shaderProgram = GL.createProgram(sa.view.shader.PassVertex2,sa.view.shader.Texture);
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GL.createArrayBuffer(new Int8Array([1,-1,-1,1,-1,-1,1,-1,1,1,-1,1]));
	this.textureUniform = GL.getUniformLocation("texture");
	this.projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
	this.viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
	$s.pop();
}
sa.view.RocksRenderer.prototype.render = function(width,height) {
	$s.push("sa.view.RocksRenderer::render");
	var $spos = $s.length;
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
	this.gl.uniformMatrix4fv(this.projectionMatrixUniform.location,false,this.projectionMatrix.buffer);
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.uniform1i(this.textureUniform.location,0);
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
	$s.pop();
}
sa.view.RocksRenderer.prototype.f = function(f1,f2) {
	$s.push("sa.view.RocksRenderer::f");
	var $spos = $s.length;
	if(f1.position.z > f2.position.z) {
		$s.pop();
		return 1;
	}
	else if(f1.position.z < f2.position.z) {
		$s.pop();
		return -1;
	}
	else {
		$s.pop();
		return 0;
	}
	$s.pop();
}
sa.view.RocksRenderer.prototype.showTexture = function(textureId,x,y,z,sx,sy,ry,rz,rx) {
	$s.push("sa.view.RocksRenderer::showTexture");
	var $spos = $s.length;
	if(rx == null) rx = 0;
	if(rz == null) rz = 0;
	if(ry == null) ry = 0;
	var viewWorldMatrix = new Matrix4(this.cameraMatrix);
	viewWorldMatrix.appendScale(1,-1,1);
	viewWorldMatrix.appendTranslation(x,y,z);
	viewWorldMatrix.appendScale(sx,sy,1);
	if(rx != 0 || ry != 0 || rz != 0) viewWorldMatrix.appendEulerRotation(ry,rz,rx);
	this.gl.uniformMatrix4fv(this.viewWorldMatrixUniform.location,false,viewWorldMatrix.buffer);
	var texture = this.textureRegistry.get(textureId).texture;
	if(texture != this.lastTexture) {
		this.gl.bindTexture(this.gl.TEXTURE_2D,texture);
		this.lastTexture = texture;
	}
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
	$s.pop();
}
sa.view.RocksRenderer.prototype.__class__ = sa.view.RocksRenderer;
sa.view.Flighter = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.Flighter::new");
	var $spos = $s.length;
	this.rnd1 = Math.random();
	this.rnd2 = Math.random();
	this.position = new Vec3();
	$s.pop();
}}
sa.view.Flighter.__name__ = ["sa","view","Flighter"];
sa.view.Flighter.prototype.position = null;
sa.view.Flighter.prototype.scale = null;
sa.view.Flighter.prototype.rnd1 = null;
sa.view.Flighter.prototype.rnd2 = null;
sa.view.Flighter.prototype.__class__ = sa.view.Flighter;
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
if(typeof ease=='undefined') ease = {}
ease.Quad = function() { }
ease.Quad.__name__ = ["ease","Quad"];
ease.Quad.easeIn = function(t,b,c,d) {
	$s.push("ease.Quad::easeIn");
	var $spos = $s.length;
	{
		var $tmp = c * (t /= d) * t + b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
ease.Quad.easeOut = function(t,b,c,d) {
	$s.push("ease.Quad::easeOut");
	var $spos = $s.length;
	{
		var $tmp = -c * (t /= d) * (t - 2) + b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
ease.Quad.easeInOut = function(t,b,c,d) {
	$s.push("ease.Quad::easeInOut");
	var $spos = $s.length;
	if((t /= d / 2) < 1) {
		var $tmp = c / 2 * t * t + b;
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = -c / 2 * (--t * (t - 2) - 1) + b;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
ease.Quad.prototype.__class__ = ease.Quad;
sa.view.shader.UnderWater = function() { }
sa.view.shader.UnderWater.__name__ = ["sa","view","shader","UnderWater"];
sa.view.shader.UnderWater.prototype.__class__ = sa.view.shader.UnderWater;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	$s.push("Std::is");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__instanceof(v,t);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.string = function(s) {
	$s.push("Std::string");
	var $spos = $s.length;
	{
		var $tmp = js.Boot.__string_rec(s,"");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std["int"] = function(x) {
	$s.push("Std::int");
	var $spos = $s.length;
	if(x < 0) {
		var $tmp = Math.ceil(x);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = Math.floor(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseInt = function(x) {
	$s.push("Std::parseInt");
	var $spos = $s.length;
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) {
		$s.pop();
		return null;
	}
	{
		var $tmp = v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.parseFloat = function(x) {
	$s.push("Std::parseFloat");
	var $spos = $s.length;
	{
		var $tmp = parseFloat(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.random = function(x) {
	$s.push("Std::random");
	var $spos = $s.length;
	{
		var $tmp = Math.floor(Math.random() * x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Std.prototype.__class__ = Std;
sa.view.MainInterfaceView = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.MainInterfaceView::new");
	var $spos = $s.length;
	this.stage = GLDisplayList.getDefault().stage;
	$s.pop();
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
	$s.push("sa.view.MainInterfaceView::handleLauncherStart");
	var $spos = $s.length;
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
	$s.pop();
}
sa.view.MainInterfaceView.prototype.start = function() {
	$s.push("sa.view.MainInterfaceView::start");
	var $spos = $s.length;
	GLTween.to(this.blend,1500,{ alpha : 1}).complete($closure(this,"handleStartFadeInComplete"));
	$s.pop();
}
sa.view.MainInterfaceView.prototype.handleStartFadeInComplete = function(tween) {
	$s.push("sa.view.MainInterfaceView::handleStartFadeInComplete");
	var $spos = $s.length;
	this.startButton.mouseDownSignaler.bind($closure(this,"handeClick"));
	$s.pop();
}
sa.view.MainInterfaceView.prototype.handeClick = function(obj) {
	$s.push("sa.view.MainInterfaceView::handeClick");
	var $spos = $s.length;
	this.startButton.mouseDownSignaler.unbind($closure(this,"handeClick"));
	this.stage.removeChild(this.startButton);
	this.commonModel.showScene = true;
	GLTween.to(this.blend,2000,{ alpha : 0}).complete($closure(this,"handleStartFadeOutComplete"));
	GLTween.to(this.creditsButton,1000,{ alpha : 1});
	GLTween.to(this.modeButton,1000,{ alpha : 1});
	this.creditsButton.mouseDownSignaler.bind($closure(this,"handleCreditsButtonClick"));
	this.modeButton.mouseDownSignaler.bind($closure(this,"handleModeButtonClick"));
	$s.pop();
}
sa.view.MainInterfaceView.prototype.handleStartFadeOutComplete = function(tween) {
	$s.push("sa.view.MainInterfaceView::handleStartFadeOutComplete");
	var $spos = $s.length;
	this.stage.removeChild(this.startButton);
	this.startButton = null;
	this.stage.removeChild(this.blend);
	this.blend = null;
	$s.pop();
}
sa.view.MainInterfaceView.prototype.handleCreditsButtonClick = function(obj) {
	$s.push("sa.view.MainInterfaceView::handleCreditsButtonClick");
	var $spos = $s.length;
	this.commonModel.toggleCredits();
	$s.pop();
}
sa.view.MainInterfaceView.prototype.handleModeButtonClick = function(obj) {
	$s.push("sa.view.MainInterfaceView::handleModeButtonClick");
	var $spos = $s.length;
	this.commonModel.toggleMode();
	$s.pop();
}
sa.view.MainInterfaceView.prototype.handleStageResize = function(event) {
	$s.push("sa.view.MainInterfaceView::handleStageResize");
	var $spos = $s.length;
	this.layoutElements();
	$s.pop();
}
sa.view.MainInterfaceView.prototype.layoutElements = function() {
	$s.push("sa.view.MainInterfaceView::layoutElements");
	var $spos = $s.length;
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
	$s.pop();
}
sa.view.MainInterfaceView.prototype.__class__ = sa.view.MainInterfaceView;
sa.view.MainInterfaceView.__interfaces__ = [haxe.rtti.Infos];
sa.view.CanvasView = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.CanvasView::new");
	var $spos = $s.length;
	null;
	$s.pop();
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
	$s.push("sa.view.CanvasView::handleLauncherStart");
	var $spos = $s.length;
	this.commonModel.modeChangeSignaler.bind($closure(this,"handleModeChanged"));
	this.gl = this.commonModel.gl;
	this.canvas = this.commonModel.canvas;
	this.updateCanvas();
	this.framebuffer = new GLFramebufferFactory(this.gl).create(128,128);
	this.backgroundRenderer = new sa.view.BackgroundRenderer();
	this.backgroundRenderer.texture = this.textureRegistry.get(sa.view.TextureId.BACKGROUND);
	this.backgroundRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.backgroundRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.backgroundRenderer.init();
	this.planktonRenderer = new sa.view.PlanktonRenderer();
	this.planktonRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.planktonRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.planktonRenderer.init();
	this.creditsRenderer = new sa.view.CreditsRenderer();
	this.creditsRenderer.commonModel = this.commonModel;
	this.creditsRenderer.texture = this.textureRegistry.get(sa.view.TextureId.CREDITS);
	this.creditsRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.creditsRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.underWaterRenderer = new sa.view.UnderWaterRenderer();
	this.textureRenderer = new sa.view.TextureRenderer();
	this.textureRenderer.texture = this.framebuffer.texture;
	this.saRenderer = new sa.view.StrangeAttractorRenderer();
	this.saRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.saRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.rocksRenderer = new sa.view.RocksRenderer();
	this.rocksRenderer.textureRegistry = this.textureRegistry;
	this.rocksRenderer.projectionMatrix = this.commonModel.projectionMatrix;
	this.rocksRenderer.cameraMatrix = this.commonModel.cameraMatrix;
	this.displayListRenderer = new GLDisplayListRenderer();
	this.displayListRenderer.init(this.gl);
	var inst = this;
	GLTimeout.executeLater(1000,function() {
		$s.push("sa.view.CanvasView::handleLauncherStart@86");
		var $spos = $s.length;
		inst.mainInterfaceView.start();
		GLAnimationFrame.run($closure(inst,"tick"));
		$s.pop();
	});
	$s.pop();
}
sa.view.CanvasView.prototype.handleModeChanged = function(newMode) {
	$s.push("sa.view.CanvasView::handleModeChanged");
	var $spos = $s.length;
	this.saRenderer.updateMode(newMode);
	$s.pop();
}
sa.view.CanvasView.prototype.handleStageResize = function(event) {
	$s.push("sa.view.CanvasView::handleStageResize");
	var $spos = $s.length;
	this.updateCanvas();
	$s.pop();
}
sa.view.CanvasView.prototype.updateCanvas = function() {
	$s.push("sa.view.CanvasView::updateCanvas");
	var $spos = $s.length;
	this.canvas.width = this.commonModel.windowWidth;
	this.canvas.height = this.commonModel.windowHeight;
	$s.pop();
}
sa.view.CanvasView.prototype.tick = function() {
	$s.push("sa.view.CanvasView::tick");
	var $spos = $s.length;
	bpmjs.Stats.clear();
	bpmjs.Stats.measureFPS();
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
	this.gl.clearColor(0.0,1.0,0.0,1.0);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	if(this.commonModel.showScene) this.renderScene();
	else this.saRenderer.start();
	this.renderInterface();
	$s.pop();
}
sa.view.CanvasView.prototype.renderScene = function() {
	$s.push("sa.view.CanvasView::renderScene");
	var $spos = $s.length;
	this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);
	this.backgroundRenderer.render(this.canvas.width,this.canvas.height);
	this.planktonRenderer.peak = this.commonModel.peak;
	this.planktonRenderer.attractorPosition = this.saRenderer.effectivePosition;
	this.planktonRenderer.render(this.canvas.width,this.canvas.height);
	{
		$s.pop();
		return;
	}
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
	$s.pop();
}
sa.view.CanvasView.prototype.renderInterface = function() {
	$s.push("sa.view.CanvasView::renderInterface");
	var $spos = $s.length;
	GLDisplayList.getDefault().dispatchEnterFrame();
	this.displayListRenderer.render(this.canvas.width,this.canvas.height);
	$s.pop();
}
sa.view.CanvasView.prototype.__class__ = sa.view.CanvasView;
sa.view.CanvasView.__interfaces__ = [haxe.rtti.Infos];
if(!haxe.exception) haxe.exception = {}
haxe.exception.Exception = function(message,innerException,numberOfStackTraceShifts) { if( message === $_ ) return; {
	$s.push("haxe.exception.Exception::new");
	var $spos = $s.length;
	this.message = null == message?"Unknown exception":message;
	this.innerException = innerException;
	this.generateStackTrace(numberOfStackTraceShifts);
	this.stackTrace = this.stackTraceArray;
	$s.pop();
}}
haxe.exception.Exception.__name__ = ["haxe","exception","Exception"];
haxe.exception.Exception.prototype.baseException = null;
haxe.exception.Exception.prototype.innerException = null;
haxe.exception.Exception.prototype.message = null;
haxe.exception.Exception.prototype.stackTrace = null;
haxe.exception.Exception.prototype.stackTraceArray = null;
haxe.exception.Exception.prototype.generateStackTrace = function(numberOfStackTraceShifts) {
	$s.push("haxe.exception.Exception::generateStackTrace");
	var $spos = $s.length;
	this.stackTraceArray = haxe.Stack.callStack().slice(numberOfStackTraceShifts + 1);
	var exceptionClass = Type.getClass(this);
	while(haxe.exception.Exception != exceptionClass) {
		this.stackTraceArray.shift();
		exceptionClass = Type.getSuperClass(exceptionClass);
	}
	$s.pop();
}
haxe.exception.Exception.prototype.getBaseException = function() {
	$s.push("haxe.exception.Exception::getBaseException");
	var $spos = $s.length;
	var result = this;
	while(null != result.innerException) {
		result = result.innerException;
	}
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
haxe.exception.Exception.prototype.toString = function() {
	$s.push("haxe.exception.Exception::toString");
	var $spos = $s.length;
	{
		var $tmp = this.message + haxe.Stack.toString(this.stackTraceArray);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.exception.Exception.prototype.__class__ = haxe.exception.Exception;
haxe.Timer = function(time_ms) { if( time_ms === $_ ) return; {
	$s.push("haxe.Timer::new");
	var $spos = $s.length;
	this.id = haxe.Timer.arr.length;
	haxe.Timer.arr[this.id] = this;
	this.timerId = window.setInterval("haxe.Timer.arr[" + this.id + "].run();",time_ms);
	$s.pop();
}}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	$s.push("haxe.Timer::delay");
	var $spos = $s.length;
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		$s.push("haxe.Timer::delay@78");
		var $spos = $s.length;
		t.stop();
		f();
		$s.pop();
	}
	{
		$s.pop();
		return t;
	}
	$s.pop();
}
haxe.Timer.measure = function(f,pos) {
	$s.push("haxe.Timer::measure");
	var $spos = $s.length;
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
haxe.Timer.stamp = function() {
	$s.push("haxe.Timer::stamp");
	var $spos = $s.length;
	{
		var $tmp = Date.now().getTime() / 1000;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	$s.push("haxe.Timer::stop");
	var $spos = $s.length;
	if(this.id == null) {
		$s.pop();
		return;
	}
	window.clearInterval(this.timerId);
	haxe.Timer.arr[this.id] = null;
	if(this.id > 100 && this.id == haxe.Timer.arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && haxe.Timer.arr[p] == null) p--;
		haxe.Timer.arr = haxe.Timer.arr.slice(0,p + 1);
	}
	this.id = null;
	$s.pop();
}
haxe.Timer.prototype.run = function() {
	$s.push("haxe.Timer::run");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.Timer.prototype.__class__ = haxe.Timer;
Vec3 = function(x,y,z) { if( x === $_ ) return; {
	$s.push("Vec3::new");
	var $spos = $s.length;
	this.x = x;
	this.y = y;
	this.z = z;
	$s.pop();
}}
Vec3.__name__ = ["Vec3"];
Vec3.prototype.x = null;
Vec3.prototype.y = null;
Vec3.prototype.z = null;
Vec3.prototype.scale = function(factor) {
	$s.push("Vec3::scale");
	var $spos = $s.length;
	this.x *= factor;
	this.y *= factor;
	this.z *= factor;
	$s.pop();
}
Vec3.prototype.multiply = function(x,y,z) {
	$s.push("Vec3::multiply");
	var $spos = $s.length;
	this.x *= x;
	this.y *= y;
	this.z *= z;
	$s.pop();
}
Vec3.prototype.subtract = function(x,y,z) {
	$s.push("Vec3::subtract");
	var $spos = $s.length;
	this.x -= x;
	this.y -= y;
	this.z -= z;
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
Vec3.prototype.normalize = function() {
	$s.push("Vec3::normalize");
	var $spos = $s.length;
	var length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	this.x /= length;
	this.y /= length;
	this.z /= length;
	$s.pop();
}
Vec3.prototype.cross = function(vec) {
	$s.push("Vec3::cross");
	var $spos = $s.length;
	var x = this.y * vec.z - this.z * vec.y;
	var y = this.z * vec.x - this.x * vec.z;
	var z = this.x * vec.y - this.y * vec.x;
	{
		var $tmp = new Vec3(x,y,z);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Vec3.prototype.dot = function(vec) {
	$s.push("Vec3::dot");
	var $spos = $s.length;
	{
		var $tmp = this.x * vec.x + this.y * vec.y + this.z * vec.z;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Vec3.prototype.transform = function(matrix) {
	$s.push("Vec3::transform");
	var $spos = $s.length;
	var x1 = this.x, y1 = this.y, z1 = this.z;
	var mat = matrix.buffer;
	this.x = mat[0] * x1 + mat[4] * y1 + mat[8] * z1 + mat[12];
	this.y = mat[1] * x1 + mat[5] * y1 + mat[9] * z1 + mat[13];
	this.z = mat[2] * x1 + mat[6] * y1 + mat[10] * z1 + mat[14];
	$s.pop();
}
Vec3.prototype.setFrom = function(value,vec3) {
	$s.push("Vec3::setFrom");
	var $spos = $s.length;
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
	$s.pop();
}
Vec3.prototype.clone = function() {
	$s.push("Vec3::clone");
	var $spos = $s.length;
	{
		var $tmp = new Vec3(this.x,this.y,this.z);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Vec3.prototype.__class__ = Vec3;
if(!haxe.xml) haxe.xml = {}
if(!haxe.xml._Fast) haxe.xml._Fast = {}
haxe.xml._Fast.NodeAccess = function(x) { if( x === $_ ) return; {
	$s.push("haxe.xml._Fast.NodeAccess::new");
	var $spos = $s.length;
	this.__x = x;
	$s.pop();
}}
haxe.xml._Fast.NodeAccess.__name__ = ["haxe","xml","_Fast","NodeAccess"];
haxe.xml._Fast.NodeAccess.prototype.__x = null;
haxe.xml._Fast.NodeAccess.prototype.resolve = function(name) {
	$s.push("haxe.xml._Fast.NodeAccess::resolve");
	var $spos = $s.length;
	var x = this.__x.elementsNamed(name).next();
	if(x == null) {
		var xname = this.__x.nodeType == Xml.Document?"Document":this.__x.getNodeName();
		throw xname + " is missing element " + name;
	}
	{
		var $tmp = new haxe.xml.Fast(x);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml._Fast.NodeAccess.prototype.__class__ = haxe.xml._Fast.NodeAccess;
haxe.xml._Fast.AttribAccess = function(x) { if( x === $_ ) return; {
	$s.push("haxe.xml._Fast.AttribAccess::new");
	var $spos = $s.length;
	this.__x = x;
	$s.pop();
}}
haxe.xml._Fast.AttribAccess.__name__ = ["haxe","xml","_Fast","AttribAccess"];
haxe.xml._Fast.AttribAccess.prototype.__x = null;
haxe.xml._Fast.AttribAccess.prototype.resolve = function(name) {
	$s.push("haxe.xml._Fast.AttribAccess::resolve");
	var $spos = $s.length;
	if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
	var v = this.__x.get(name);
	if(v == null) throw this.__x.getNodeName() + " is missing attribute " + name;
	{
		$s.pop();
		return v;
	}
	$s.pop();
}
haxe.xml._Fast.AttribAccess.prototype.__class__ = haxe.xml._Fast.AttribAccess;
haxe.xml._Fast.HasAttribAccess = function(x) { if( x === $_ ) return; {
	$s.push("haxe.xml._Fast.HasAttribAccess::new");
	var $spos = $s.length;
	this.__x = x;
	$s.pop();
}}
haxe.xml._Fast.HasAttribAccess.__name__ = ["haxe","xml","_Fast","HasAttribAccess"];
haxe.xml._Fast.HasAttribAccess.prototype.__x = null;
haxe.xml._Fast.HasAttribAccess.prototype.resolve = function(name) {
	$s.push("haxe.xml._Fast.HasAttribAccess::resolve");
	var $spos = $s.length;
	if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
	{
		var $tmp = this.__x.exists(name);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml._Fast.HasAttribAccess.prototype.__class__ = haxe.xml._Fast.HasAttribAccess;
haxe.xml._Fast.HasNodeAccess = function(x) { if( x === $_ ) return; {
	$s.push("haxe.xml._Fast.HasNodeAccess::new");
	var $spos = $s.length;
	this.__x = x;
	$s.pop();
}}
haxe.xml._Fast.HasNodeAccess.__name__ = ["haxe","xml","_Fast","HasNodeAccess"];
haxe.xml._Fast.HasNodeAccess.prototype.__x = null;
haxe.xml._Fast.HasNodeAccess.prototype.resolve = function(name) {
	$s.push("haxe.xml._Fast.HasNodeAccess::resolve");
	var $spos = $s.length;
	{
		var $tmp = this.__x.elementsNamed(name).hasNext();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml._Fast.HasNodeAccess.prototype.__class__ = haxe.xml._Fast.HasNodeAccess;
haxe.xml._Fast.NodeListAccess = function(x) { if( x === $_ ) return; {
	$s.push("haxe.xml._Fast.NodeListAccess::new");
	var $spos = $s.length;
	this.__x = x;
	$s.pop();
}}
haxe.xml._Fast.NodeListAccess.__name__ = ["haxe","xml","_Fast","NodeListAccess"];
haxe.xml._Fast.NodeListAccess.prototype.__x = null;
haxe.xml._Fast.NodeListAccess.prototype.resolve = function(name) {
	$s.push("haxe.xml._Fast.NodeListAccess::resolve");
	var $spos = $s.length;
	var l = new List();
	{ var $it0 = this.__x.elementsNamed(name);
	while( $it0.hasNext() ) { var x = $it0.next();
	l.add(new haxe.xml.Fast(x));
	}}
	{
		$s.pop();
		return l;
	}
	$s.pop();
}
haxe.xml._Fast.NodeListAccess.prototype.__class__ = haxe.xml._Fast.NodeListAccess;
haxe.xml.Fast = function(x) { if( x === $_ ) return; {
	$s.push("haxe.xml.Fast::new");
	var $spos = $s.length;
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw "Invalid nodeType " + x.nodeType;
	this.x = x;
	this.node = new haxe.xml._Fast.NodeAccess(x);
	this.nodes = new haxe.xml._Fast.NodeListAccess(x);
	this.att = new haxe.xml._Fast.AttribAccess(x);
	this.has = new haxe.xml._Fast.HasAttribAccess(x);
	this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
	$s.pop();
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
	$s.push("haxe.xml.Fast::getName");
	var $spos = $s.length;
	{
		var $tmp = this.x.nodeType == Xml.Document?"Document":this.x.getNodeName();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Fast.prototype.getInnerData = function() {
	$s.push("haxe.xml.Fast::getInnerData");
	var $spos = $s.length;
	var it = this.x.iterator();
	if(!it.hasNext()) throw this.getName() + " does not have data";
	var v = it.next();
	if(it.hasNext()) throw this.getName() + " does not only have data";
	if(v.nodeType != Xml.PCData && v.nodeType != Xml.CData) throw this.getName() + " does not have data";
	{
		var $tmp = v.getNodeValue();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Fast.prototype.getInnerHTML = function() {
	$s.push("haxe.xml.Fast::getInnerHTML");
	var $spos = $s.length;
	var s = new StringBuf();
	{ var $it0 = this.x.iterator();
	while( $it0.hasNext() ) { var x = $it0.next();
	s.b[s.b.length] = x.toString();
	}}
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Fast.prototype.getElements = function() {
	$s.push("haxe.xml.Fast::getElements");
	var $spos = $s.length;
	var it = this.x.elements();
	{
		var $tmp = { hasNext : $closure(it,"hasNext"), next : function() {
			$s.push("haxe.xml.Fast::getElements@163");
			var $spos = $s.length;
			var x = it.next();
			if(x == null) {
				$s.pop();
				return null;
			}
			{
				var $tmp = new haxe.xml.Fast(x);
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.xml.Fast.prototype.__class__ = haxe.xml.Fast;
haxe.rtti.Meta = function() { }
haxe.rtti.Meta.__name__ = ["haxe","rtti","Meta"];
haxe.rtti.Meta.getType = function(t) {
	$s.push("haxe.rtti.Meta::getType");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = meta == null?meta:meta.obj;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.getStatics = function(t) {
	$s.push("haxe.rtti.Meta::getStatics");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = meta == null?meta:meta.statics;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.getFields = function(t) {
	$s.push("haxe.rtti.Meta::getFields");
	var $spos = $s.length;
	var meta = t.__meta__;
	{
		var $tmp = meta == null?meta:meta.fields;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.rtti.Meta.prototype.__class__ = haxe.rtti.Meta;
if(typeof shader=='undefined') shader = {}
shader.DisplayObjectVertex = function() { }
shader.DisplayObjectVertex.__name__ = ["shader","DisplayObjectVertex"];
shader.DisplayObjectVertex.prototype.__class__ = shader.DisplayObjectVertex;
GL = function() { }
GL.__name__ = ["GL"];
GL.gl = null;
GL.currentProgramm = null;
GL.initGL = function(canvas,antialias) {
	$s.push("GL::initGL");
	var $spos = $s.length;
	GL.gl = canvas.getContext("experimental-webgl",{ antialias : antialias});
	if(GL.gl == null) {
		throw "Could not initialise WebGL.";
	}
	{
		var $tmp = GL.gl;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.useProgram = function(shaderProgramm) {
	$s.push("GL::useProgram");
	var $spos = $s.length;
	GL.currentProgramm = shaderProgramm;
	GL.gl.useProgram(GL.currentProgramm);
	$s.pop();
}
GL.createProgram = function(vertexSourceClass,fragmentSourceClass) {
	$s.push("GL::createProgram");
	var $spos = $s.length;
	GL.currentProgramm = GL.gl.createProgram();
	var vs = GL.gl.createShader(GL.gl.VERTEX_SHADER);
	GL.gl.shaderSource(vs,GL.createGLSLFromClass(vertexSourceClass));
	GL.gl.compileShader(vs);
	if(!GL.gl.getShaderParameter(vs,GL.gl.COMPILE_STATUS)) throw GL.gl.getShaderInfoLog(vs);
	var fs = GL.gl.createShader(GL.gl.FRAGMENT_SHADER);
	GL.gl.shaderSource(fs,GL.createGLSLFromClass(fragmentSourceClass));
	GL.gl.compileShader(fs);
	if(!GL.gl.getShaderParameter(fs,GL.gl.COMPILE_STATUS)) throw GL.gl.getShaderInfoLog(fs);
	GL.gl.attachShader(GL.currentProgramm,vs);
	GL.gl.attachShader(GL.currentProgramm,fs);
	GL.gl.linkProgram(GL.currentProgramm);
	if(!GL.gl.getProgramParameter(GL.currentProgramm,GL.gl.LINK_STATUS)) throw "Could not link shader!";
	{
		var $tmp = GL.currentProgramm;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.createGLSLFromClass = function(shaderClass) {
	$s.push("GL::createGLSLFromClass");
	var $spos = $s.length;
	var metaDatas = haxe.rtti.Meta.getType(shaderClass);
	var glsl = Reflect.field(metaDatas,"GLSL");
	if(glsl.length != 1) throw "Missing GLSL metadata in shader class: " + shaderClass;
	{
		var $tmp = glsl[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.createArrayBuffer = function(array) {
	$s.push("GL::createArrayBuffer");
	var $spos = $s.length;
	var vertexBuffer = GL.gl.createBuffer();
	GL.gl.bindBuffer(GL.gl.ARRAY_BUFFER,vertexBuffer);
	GL.gl.bufferData(GL.gl.ARRAY_BUFFER,array,GL.gl.STATIC_DRAW);
	{
		$s.pop();
		return vertexBuffer;
	}
	$s.pop();
}
GL.getUniformLocation = function(name) {
	$s.push("GL::getUniformLocation");
	var $spos = $s.length;
	var location = GL.gl.getUniformLocation(GL.currentProgramm,name);
	if(location == null) haxe.Log.trace("Could not find " + name + " in shader",{ fileName : "GL.hx", lineNumber : 453, className : "GL", methodName : "getUniformLocation"});
	var result = new GLUniformLocation();
	result.location = location;
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
GL.activeTexture = function(texture) {
	$s.push("GL::activeTexture");
	var $spos = $s.length;
	GL.gl.activeTexture(texture);
	$s.pop();
}
GL.bindBuffer = function(target,buffer) {
	$s.push("GL::bindBuffer");
	var $spos = $s.length;
	GL.gl.bindBuffer(target,buffer);
	$s.pop();
}
GL.bindFramebuffer = function(target,framebuffer) {
	$s.push("GL::bindFramebuffer");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.bindRenderbuffer = function(target,renderbuffer) {
	$s.push("GL::bindRenderbuffer");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.bindTexture = function(target,texture) {
	$s.push("GL::bindTexture");
	var $spos = $s.length;
	GL.gl.bindTexture(target,texture);
	$s.pop();
}
GL.blendFunc = function(sfactor,dfactor) {
	$s.push("GL::blendFunc");
	var $spos = $s.length;
	GL.gl.blendFunc(sfactor,dfactor);
	$s.pop();
}
GL.bufferData = function(target,data,usage) {
	$s.push("GL::bufferData");
	var $spos = $s.length;
	GL.gl.bufferData(target,data,usage);
	$s.pop();
}
GL.clear = function(mask) {
	$s.push("GL::clear");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.clearColor = function(red,green,blue,alpha) {
	$s.push("GL::clearColor");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.clearDepth = function(depth) {
	$s.push("GL::clearDepth");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.compileShader = function(shader) {
	$s.push("GL::compileShader");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.createBuffer = function() {
	$s.push("GL::createBuffer");
	var $spos = $s.length;
	{
		var $tmp = GL.gl.createBuffer();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.createFramebuffer = function() {
	$s.push("GL::createFramebuffer");
	var $spos = $s.length;
	{
		var $tmp = GL.gl.createFramebuffer();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.createRenderbuffer = function() {
	$s.push("GL::createRenderbuffer");
	var $spos = $s.length;
	{
		var $tmp = GL.gl.createRenderbuffer();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.createTexture = function() {
	$s.push("GL::createTexture");
	var $spos = $s.length;
	{
		var $tmp = GL.gl.createTexture();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.createShader = function(type) {
	$s.push("GL::createShader");
	var $spos = $s.length;
	{
		var $tmp = GL.gl.createShader(type);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.disable = function(cap) {
	$s.push("GL::disable");
	var $spos = $s.length;
	GL.gl.disable(cap);
	$s.pop();
}
GL.drawArrays = function(mode,first,count) {
	$s.push("GL::drawArrays");
	var $spos = $s.length;
	GL.gl.drawArrays(mode,first,count);
	$s.pop();
}
GL.enable = function(cap) {
	$s.push("GL::enable");
	var $spos = $s.length;
	GL.gl.enable(cap);
	$s.pop();
}
GL.enableVertexAttribArray = function(index) {
	$s.push("GL::enableVertexAttribArray");
	var $spos = $s.length;
	GL.gl.enableVertexAttribArray(index);
	$s.pop();
}
GL.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {
	$s.push("GL::framebufferRenderbuffer");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.framebufferTexture2D = function(target,attachment,textarget,texture,level) {
	$s.push("GL::framebufferTexture2D");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.generateMipmap = function(target) {
	$s.push("GL::generateMipmap");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.getAttribLocation = function(program,name) {
	$s.push("GL::getAttribLocation");
	var $spos = $s.length;
	{
		var $tmp = GL.gl.getAttribLocation(program,name);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.getShaderInfoLog = function(shader) {
	$s.push("GL::getShaderInfoLog");
	var $spos = $s.length;
	{
		var $tmp = GL.gl.getShaderInfoLog(shader);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GL.getShaderParameter = function(shader,pname) {
	$s.push("GL::getShaderParameter");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.getProgramParameter = function(program,pname) {
	$s.push("GL::getProgramParameter");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.linkProgram = function(program) {
	$s.push("GL::linkProgram");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.renderbufferStorage = function(target,internalformat,width,height) {
	$s.push("GL::renderbufferStorage");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.shaderSource = function(shader,source) {
	$s.push("GL::shaderSource");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.texImage2DArrayBufferView = function(target,level,internalformat,width,height,border,format,type,pixels) {
	$s.push("GL::texImage2DArrayBufferView");
	var $spos = $s.length;
	GL.gl.texImage2D(target,level,internalformat,width,height,border,format,type,pixels);
	$s.pop();
}
GL.texImage2DImageData = function(target,level,internalformat,format,type,pixels) {
	$s.push("GL::texImage2DImageData");
	var $spos = $s.length;
	GL.gl.texImage2D(target,level,internalformat,format,type,pixels);
	$s.pop();
}
GL.texImage2DImage = function(target,level,internalformat,format,type,image) {
	$s.push("GL::texImage2DImage");
	var $spos = $s.length;
	GL.gl.texImage2D(target,level,internalformat,format,type,image);
	$s.pop();
}
GL.texImage2DCanvas = function(target,level,internalformat,format,type,canvas) {
	$s.push("GL::texImage2DCanvas");
	var $spos = $s.length;
	GL.gl.texImage2D(target,level,internalformat,format,type,canvas);
	$s.pop();
}
GL.texImage2DVideo = function(target,level,internalformat,format,type,video) {
	$s.push("GL::texImage2DVideo");
	var $spos = $s.length;
	GL.gl.texImage2D(target,level,internalformat,format,type,video);
	$s.pop();
}
GL.texParameteri = function(target,pname,param) {
	$s.push("GL::texParameteri");
	var $spos = $s.length;
	null;
	$s.pop();
}
GL.vertexAttribPointer = function(indx,size,type,normalized,stride,offset) {
	$s.push("GL::vertexAttribPointer");
	var $spos = $s.length;
	GL.gl.vertexAttribPointer(indx,size,type,normalized,stride,offset);
	$s.pop();
}
GL.viewport = function(x,y,width,height) {
	$s.push("GL::viewport");
	var $spos = $s.length;
	GL.gl.viewport(x,y,width,height);
	$s.pop();
}
GL.prototype.__class__ = GL;
GLHitareaPicker = function(p) { if( p === $_ ) return; {
	$s.push("GLHitareaPicker::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
GLHitareaPicker.__name__ = ["GLHitareaPicker"];
GLHitareaPicker.prototype.stageMousePosition = null;
GLHitareaPicker.prototype.result = null;
GLHitareaPicker.prototype.pick = function(stage,mousePosition) {
	$s.push("GLHitareaPicker::pick");
	var $spos = $s.length;
	this.stageMousePosition = mousePosition.clone();
	this.stageMousePosition.multiply(stage.stageWidth,stage.stageHeight);
	this.result = null;
	this.pickRecursive(stage,new Matrix4());
	{
		var $tmp = this.result;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLHitareaPicker.prototype.pickRecursive = function(displayObjectContainer,parentMatrix) {
	$s.push("GLHitareaPicker::pickRecursive");
	var $spos = $s.length;
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
	$s.pop();
}
GLHitareaPicker.prototype.pickDisplayObject = function(displayObject,parentMatrix) {
	$s.push("GLHitareaPicker::pickDisplayObject");
	var $spos = $s.length;
	displayObject.validateTransform();
	var result = new Matrix4();
	result.multiply(parentMatrix);
	result.multiply(displayObject.matrix);
	{
		$s.pop();
		return result;
	}
	$s.pop();
}
GLHitareaPicker.prototype.__class__ = GLHitareaPicker;
shader.DisplayObjectFragment = function() { }
shader.DisplayObjectFragment.__name__ = ["shader","DisplayObjectFragment"];
shader.DisplayObjectFragment.prototype.__class__ = shader.DisplayObjectFragment;
haxe.exception.ArgumentNullException = function(argumentName,numberOfStackTraceShifts) { if( argumentName === $_ ) return; {
	$s.push("haxe.exception.ArgumentNullException::new");
	var $spos = $s.length;
	haxe.exception.Exception.call(this,"Argument " + argumentName + " must be non-null",null,numberOfStackTraceShifts);
	$s.pop();
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
	$s.push("bpmjs.DefaultFrontController::new");
	var $spos = $s.length;
	this.receivers = new Array();
	$s.pop();
}}
bpmjs.DefaultFrontController.__name__ = ["bpmjs","DefaultFrontController"];
bpmjs.DefaultFrontController.prototype.receivers = null;
bpmjs.DefaultFrontController.prototype.addDispatcher = function(dispatcher,type) {
	$s.push("bpmjs.DefaultFrontController::addDispatcher");
	var $spos = $s.length;
	dispatcher.addEventListener(type,$closure(this,"handleEvent"));
	$s.pop();
}
bpmjs.DefaultFrontController.prototype.addReceiver = function(receivingObject,methodName,eventClass) {
	$s.push("bpmjs.DefaultFrontController::addReceiver");
	var $spos = $s.length;
	this.receivers.push(new bpmjs._FrontController.Receiver(receivingObject,methodName,eventClass));
	$s.pop();
}
bpmjs.DefaultFrontController.prototype.handleEvent = function(event) {
	$s.push("bpmjs.DefaultFrontController::handleEvent");
	var $spos = $s.length;
	var _g = 0, _g1 = this.receivers;
	while(_g < _g1.length) {
		var receiver = _g1[_g];
		++_g;
		if(Type.getClass(event) == receiver.eventClass) {
			receiver.method.apply(receiver.receiver,[event]);
		}
	}
	$s.pop();
}
bpmjs.DefaultFrontController.prototype.__class__ = bpmjs.DefaultFrontController;
bpmjs.DefaultFrontController.__interfaces__ = [bpmjs.FrontController];
if(!bpmjs._FrontController) bpmjs._FrontController = {}
bpmjs._FrontController.Receiver = function(receiver,methodName,eventClass) { if( receiver === $_ ) return; {
	$s.push("bpmjs._FrontController.Receiver::new");
	var $spos = $s.length;
	this.receiver = receiver;
	this.eventClass = eventClass;
	this.method = Reflect.field(receiver,methodName);
	$s.pop();
}}
bpmjs._FrontController.Receiver.__name__ = ["bpmjs","_FrontController","Receiver"];
bpmjs._FrontController.Receiver.prototype.receiver = null;
bpmjs._FrontController.Receiver.prototype.method = null;
bpmjs._FrontController.Receiver.prototype.eventClass = null;
bpmjs._FrontController.Receiver.prototype.matches = function(event) {
	$s.push("bpmjs._FrontController.Receiver::matches");
	var $spos = $s.length;
	{
		var $tmp = Type.getClass(event) == this.eventClass;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
bpmjs._FrontController.Receiver.prototype.execute = function(event) {
	$s.push("bpmjs._FrontController.Receiver::execute");
	var $spos = $s.length;
	this.method.apply(this.receiver,[event]);
	$s.pop();
}
bpmjs._FrontController.Receiver.prototype.__class__ = bpmjs._FrontController.Receiver;
sa.view.CreditsRenderer = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.CreditsRenderer::new");
	var $spos = $s.length;
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
	$s.pop();
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
	$s.push("sa.view.CreditsRenderer::init");
	var $spos = $s.length;
	this.gl = gl;
	this.shaderProgram = GL.createProgram(sa.view.shader.PassVertex2,sa.view.shader.Texture);
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = GL.createArrayBuffer(new Int8Array([1,-1,-1,1,-1,-1,1,-1,1,1,-1,1]));
	this.textureUniform = GL.getUniformLocation("texture");
	this.projectionMatrixUniform = GL.getUniformLocation("projectionMatrix");
	this.viewWorldMatrixUniform = GL.getUniformLocation("viewWorldMatrix");
	this.shaderProgramButton = GL.createProgram(sa.view.shader.HitareaVertex,sa.view.shader.UniformColor);
	this.projectionMatrixButtonUniform = GL.getUniformLocation("projectionMatrix");
	this.viewWorldMatrixButtonUniform = GL.getUniformLocation("viewWorldMatrix");
	this.colorButtonUniform = GL.getUniformLocation("color");
	GLMouseRegistry.getInstance().mouseDownSignaler.bind($closure(this,"mouseDown"));
	GLMouseRegistry.getInstance().mouseMoveSignaler.bind($closure(this,"mouseMove"));
	this.cursorClient = GLMouseRegistry.getInstance().createCursorClient();
	$s.pop();
}
sa.view.CreditsRenderer.prototype.render = function(width,height) {
	$s.push("sa.view.CreditsRenderer::render");
	var $spos = $s.length;
	this.moveSet.move();
	if(this.commonModel.showCredits) this.moveSet.to = this.defaultTargetIn;
	else this.moveSet.to = this.defaultTargetOut;
	if(this.moveSet.current == this.defaultTargetOut) {
		$s.pop();
		return;
	}
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.enable(this.gl.BLEND);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	this.gl.uniformMatrix4fv(this.projectionMatrixUniform.location,false,this.projectionMatrix.buffer);
	var scale = this.computeScale(width,height);
	var viewWorldMatrix = new Matrix4(this.cameraMatrix);
	viewWorldMatrix.appendScale(1,-1,1);
	viewWorldMatrix.appendTranslation(0,this.moveSet.current,-7);
	viewWorldMatrix.appendScale(scale,scale,1);
	this.gl.uniformMatrix4fv(this.viewWorldMatrixUniform.location,false,viewWorldMatrix.buffer);
	this.gl.activeTexture(this.gl.TEXTURE0);
	this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture.texture);
	this.gl.uniform1i(this.textureUniform.location,0);
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
	this.gl.useProgram(this.shaderProgramButton);
	this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE);
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
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
			this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
			this.gl.uniformMatrix4fv(this.projectionMatrixButtonUniform.location,false,this.projectionMatrix.buffer);
			this.gl.uniformMatrix4fv(this.viewWorldMatrixButtonUniform.location,false,viewWorldMatrixButton.buffer);
			if(this.isUnderMouse(viewWorldMatrixButton)) {
				this.cursorClient.handCursor(button.url);
				button.isActive = true;
				this.gl.uniform4f(this.colorButtonUniform.location,1,1,1,0.2);
			}
			else {
				button.isActive = false;
				this.gl.uniform4f(this.colorButtonUniform.location,1,1,1,0.1);
			}
			this.gl.drawArrays(this.gl.TRIANGLES,0,6);
		}
	}
	this.gl.disable(this.gl.BLEND);
	$s.pop();
}
sa.view.CreditsRenderer.prototype.computeScale = function(width,height) {
	$s.push("sa.view.CreditsRenderer::computeScale");
	var $spos = $s.length;
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
	{
		var $tmp = 1024 / tl.x;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sa.view.CreditsRenderer.prototype.createButton = function(width,height,x,y,url) {
	$s.push("sa.view.CreditsRenderer::createButton");
	var $spos = $s.length;
	var button = new sa.view.Button();
	button.size = new Vec2(width,height);
	button.pos = new Vec2(x,y);
	button.isActive = false;
	button.url = url;
	this.buttons.push(button);
	$s.pop();
}
sa.view.CreditsRenderer.prototype.mouseMove = function(mousePos) {
	$s.push("sa.view.CreditsRenderer::mouseMove");
	var $spos = $s.length;
	this.mousePos = mousePos;
	$s.pop();
}
sa.view.CreditsRenderer.prototype.isUnderMouse = function(matrix) {
	$s.push("sa.view.CreditsRenderer::isUnderMouse");
	var $spos = $s.length;
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
	{
		var $tmp = u > 0 && u < 1 && v > 0 && v < 1;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
sa.view.CreditsRenderer.prototype.mouseDown = function(mousePos) {
	$s.push("sa.view.CreditsRenderer::mouseDown");
	var $spos = $s.length;
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
			{
				$s.pop();
				return;
			}
		}
	}
	$s.pop();
}
sa.view.CreditsRenderer.prototype.__class__ = sa.view.CreditsRenderer;
sa.view.Button = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.Button::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
sa.view.Button.__name__ = ["sa","view","Button"];
sa.view.Button.prototype.size = null;
sa.view.Button.prototype.pos = null;
sa.view.Button.prototype.isActive = null;
sa.view.Button.prototype.url = null;
sa.view.Button.prototype.__class__ = sa.view.Button;
bpmjs.Context = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.Context::new");
	var $spos = $s.length;
	this.objects = new Array();
	$s.pop();
}}
bpmjs.Context.__name__ = ["bpmjs","Context"];
bpmjs.Context.prototype.contextConfig = null;
bpmjs.Context.prototype.objects = null;
bpmjs.Context.prototype.addObject = function(name,type,object) {
	$s.push("bpmjs.Context::addObject");
	var $spos = $s.length;
	var contextObject = new bpmjs.ContextObject(name,type,object);
	this.objects.push(contextObject);
	{
		$s.pop();
		return contextObject;
	}
	$s.pop();
}
bpmjs.Context.prototype.getObjectByName = function(name) {
	$s.push("bpmjs.Context::getObjectByName");
	var $spos = $s.length;
	{
		var _g = 0, _g1 = this.objects;
		while(_g < _g1.length) {
			var contextObject = _g1[_g];
			++_g;
			if(contextObject.name == name) {
				var $tmp = contextObject.object;
				$s.pop();
				return $tmp;
			}
		}
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
bpmjs.Context.prototype.getObjectByType = function(type) {
	$s.push("bpmjs.Context::getObjectByType");
	var $spos = $s.length;
	{
		var _g = 0, _g1 = this.objects;
		while(_g < _g1.length) {
			var contextObject = _g1[_g];
			++_g;
			if(contextObject.type == type) {
				var $tmp = contextObject.object;
				$s.pop();
				return $tmp;
			}
		}
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
bpmjs.Context.prototype.__class__ = bpmjs.Context;
bpmjs.ContextObject = function(name,type,object) { if( name === $_ ) return; {
	$s.push("bpmjs.ContextObject::new");
	var $spos = $s.length;
	this.name = name;
	this.type = type;
	this.object = object;
	$s.pop();
}}
bpmjs.ContextObject.__name__ = ["bpmjs","ContextObject"];
bpmjs.ContextObject.prototype.name = null;
bpmjs.ContextObject.prototype.type = null;
bpmjs.ContextObject.prototype.object = null;
bpmjs.ContextObject.prototype.__class__ = bpmjs.ContextObject;
GLTweenManager = function(p) { if( p === $_ ) return; {
	$s.push("GLTweenManager::new");
	var $spos = $s.length;
	this.time = Date.now().getTime();
	this.tweens = new Array();
	GLAnimationFrame.run($closure(this,"tick"));
	$s.pop();
}}
GLTweenManager.__name__ = ["GLTweenManager"];
GLTweenManager.instance = null;
GLTweenManager.getInstance = function() {
	$s.push("GLTweenManager::getInstance");
	var $spos = $s.length;
	if(GLTweenManager.instance == null) GLTweenManager.instance = new GLTweenManager();
	{
		var $tmp = GLTweenManager.instance;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLTweenManager.prototype.tweens = null;
GLTweenManager.prototype.time = null;
GLTweenManager.prototype.add = function(tween) {
	$s.push("GLTweenManager::add");
	var $spos = $s.length;
	tween.init(this.time);
	this.tweens.push(tween);
	$s.pop();
}
GLTweenManager.prototype.tick = function() {
	$s.push("GLTweenManager::tick");
	var $spos = $s.length;
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
	$s.pop();
}
GLTweenManager.prototype.__class__ = GLTweenManager;
bpmjs.ContextConfig = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.ContextConfig::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs.ContextConfig.__name__ = ["bpmjs","ContextConfig"];
bpmjs.ContextConfig.prototype.frontController = null;
bpmjs.ContextConfig.prototype.__class__ = bpmjs.ContextConfig;
GLTween = function(o,ms,params) { if( o === $_ ) return; {
	$s.push("GLTween::new");
	var $spos = $s.length;
	this.o = o;
	this.ms = ms;
	this.params = params;
	this.isActive = true;
	this.properties = new Array();
	this.completeSignaler = new hsl.haxe.DirectSignaler(this);
	$s.pop();
}}
GLTween.__name__ = ["GLTween"];
GLTween.to = function(o,ms,params) {
	$s.push("GLTween::to");
	var $spos = $s.length;
	var result = new GLTween(o,ms,params);
	GLTweenManager.getInstance().add(result);
	{
		$s.pop();
		return result;
	}
	$s.pop();
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
	$s.push("GLTween::complete");
	var $spos = $s.length;
	this.completeSignaler.bind(method);
	{
		$s.pop();
		return this;
	}
	$s.pop();
}
GLTween.prototype.init = function(time) {
	$s.push("GLTween::init");
	var $spos = $s.length;
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
	$s.pop();
}
GLTween.prototype.run = function(time) {
	$s.push("GLTween::run");
	var $spos = $s.length;
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
	$s.pop();
}
GLTween.prototype.__class__ = GLTween;
Property = function(p) { if( p === $_ ) return; {
	$s.push("Property::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
Property.__name__ = ["Property"];
Property.prototype.from = null;
Property.prototype.to = null;
Property.prototype.field = null;
Property.prototype.ease = function(tween,dt) {
	$s.push("Property::ease");
	var $spos = $s.length;
	var o = tween.o;
	var value = tween.easeFunction(dt,this.from,this.to - this.from,tween.ms);
	o[this.field] = value;
	$s.pop();
}
Property.prototype.__class__ = Property;
sa.controller.CameraController = function(p) { if( p === $_ ) return; {
	$s.push("sa.controller.CameraController::new");
	var $spos = $s.length;
	this.cameraPosition = new MoveSetVec2(new Vec2(0,0),new Vec2(0,0),new Vec2(0.0005,0.0005));
	$s.pop();
}}
sa.controller.CameraController.__name__ = ["sa","controller","CameraController"];
sa.controller.CameraController.prototype.commonModel = null;
sa.controller.CameraController.prototype.cameraPosition = null;
sa.controller.CameraController.prototype.lastTick = null;
sa.controller.CameraController.prototype.handleLauncherStart = function(event) {
	$s.push("sa.controller.CameraController::handleLauncherStart");
	var $spos = $s.length;
	GLMouseRegistry.getInstance().mouseMoveSignaler.bind($closure(this,"handleMouseMove"));
	GLAnimationFrame.run($closure(this,"tick"));
	$s.pop();
}
sa.controller.CameraController.prototype.tick = function() {
	$s.push("sa.controller.CameraController::tick");
	var $spos = $s.length;
	var dt = Date.now().getTime() - this.lastTick;
	var factor = dt / 16;
	this.cameraPosition.move(factor);
	this.commonModel.cameraMatrix.lookAt(new Vec3(this.cameraPosition.current.x,this.cameraPosition.current.y,0),new Vec3(0,0,-9),new Vec3(0,1,0));
	this.lastTick = Date.now().getTime();
	$s.pop();
}
sa.controller.CameraController.prototype.handleMouseMove = function(mousePos) {
	$s.push("sa.controller.CameraController::handleMouseMove");
	var $spos = $s.length;
	var newPosition = mousePos.clone();
	newPosition.subtract(0.5,0.5);
	newPosition.multiply(-5,5);
	this.cameraPosition.to = newPosition;
	$s.pop();
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
	$s.push("bpmjs.Stats::init");
	var $spos = $s.length;
	bpmjs.Stats.clear();
	bpmjs.Stats.initialized = true;
	$s.pop();
}
bpmjs.Stats.clear = function() {
	$s.push("bpmjs.Stats::clear");
	var $spos = $s.length;
	bpmjs.Stats.times = new Array();
	bpmjs.Stats.finishedTimes = new Array();
	bpmjs.Stats.messages = new Array();
	$s.pop();
}
bpmjs.Stats.measureFPS = function() {
	$s.push("bpmjs.Stats::measureFPS");
	var $spos = $s.length;
	bpmjs.Stats.checkInit();
	var time = Date.now().getTime();
	bpmjs.Stats.fps = 1000 / (time - bpmjs.Stats.lastTime);
	bpmjs.Stats.lastTime = time;
	$s.pop();
}
bpmjs.Stats.checkStart = function(message) {
	$s.push("bpmjs.Stats::checkStart");
	var $spos = $s.length;
	bpmjs.Stats.checkInit();
	var time = Date.now().getTime();
	bpmjs.Stats.times.push({ start : time, stop : 0.0, message : message});
	$s.pop();
}
bpmjs.Stats.addMessage = function(message) {
	$s.push("bpmjs.Stats::addMessage");
	var $spos = $s.length;
	bpmjs.Stats.checkInit();
	bpmjs.Stats.messages.push(message);
	$s.pop();
}
bpmjs.Stats.checkStop = function() {
	$s.push("bpmjs.Stats::checkStop");
	var $spos = $s.length;
	bpmjs.Stats.checkInit();
	var timeAndMessage = bpmjs.Stats.times.pop();
	timeAndMessage.stop = Date.now().getTime();
	bpmjs.Stats.finishedTimes.push(timeAndMessage);
	$s.pop();
}
bpmjs.Stats.getContents = function() {
	$s.push("bpmjs.Stats::getContents");
	var $spos = $s.length;
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
	{
		$s.pop();
		return finalMessages;
	}
	$s.pop();
}
bpmjs.Stats.checkInit = function() {
	$s.push("bpmjs.Stats::checkInit");
	var $spos = $s.length;
	if(!bpmjs.Stats.initialized) bpmjs.Stats.init(js.Lib.document.body);
	$s.pop();
}
bpmjs.Stats.prototype.__class__ = bpmjs.Stats;
MoveSetVec2 = function(current,to,acceleration) { if( current === $_ ) return; {
	$s.push("MoveSetVec2::new");
	var $spos = $s.length;
	this.current = current;
	this.to = to;
	this.acceleration = acceleration;
	this.moveSetX = new MoveSet(current.x,to.x,acceleration.x);
	this.moveSetY = new MoveSet(current.y,to.y,acceleration.y);
	$s.pop();
}}
MoveSetVec2.__name__ = ["MoveSetVec2"];
MoveSetVec2.prototype.current = null;
MoveSetVec2.prototype.to = null;
MoveSetVec2.prototype.acceleration = null;
MoveSetVec2.prototype.moveSetX = null;
MoveSetVec2.prototype.moveSetY = null;
MoveSetVec2.prototype.move = function(factor) {
	$s.push("MoveSetVec2::move");
	var $spos = $s.length;
	if(factor == null) factor = 1;
	this.moveSetX.to = this.to.x;
	this.moveSetX.acceleration = this.acceleration.x;
	this.moveSetX.move(factor);
	this.moveSetY.to = this.to.y;
	this.moveSetY.acceleration = this.acceleration.y;
	this.moveSetY.move(factor);
	this.current.x = this.moveSetX.current;
	this.current.y = this.moveSetY.current;
	$s.pop();
}
MoveSetVec2.prototype.__class__ = MoveSetVec2;
sa.view.UnderWaterRenderer = function(p) { if( p === $_ ) return; {
	$s.push("sa.view.UnderWaterRenderer::new");
	var $spos = $s.length;
	null;
	$s.pop();
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
	$s.push("sa.view.UnderWaterRenderer::init");
	var $spos = $s.length;
	this.gl = gl;
	this.shaderProgram = GL.createProgram(sa.view.shader.PassVertex,sa.view.shader.UnderWater);
	this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram,"vertexPosition");
	gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
	var vertices = [-1,-1,1,-1,-1,1,1,-1,-1,1,1,1];
	gl.bufferData(gl.ARRAY_BUFFER,new Int8Array(vertices),gl.STATIC_DRAW);
	this.elapsedTimeUniform = GL.getUniformLocation("elapsedTime");
	this.perspectiveMatrixUniform = GL.getUniformLocation("perspectiveMatrix");
	this.startTime = Date.now().getTime();
	$s.pop();
}
sa.view.UnderWaterRenderer.prototype.render = function(width,height,aspect) {
	$s.push("sa.view.UnderWaterRenderer::render");
	var $spos = $s.length;
	var elapsedTime = Date.now().getTime() - this.startTime;
	var matrix = new Matrix4();
	matrix.ortho(-1,1,1,-1,0,1);
	this.gl.useProgram(this.shaderProgram);
	this.gl.viewport(0,0,width,height);
	this.gl.enableVertexAttribArray(this.vertexPositionAttribute);
	this.gl.uniform1f(this.elapsedTimeUniform.location,elapsedTime);
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer);
	this.gl.vertexAttribPointer(this.vertexPositionAttribute,2,this.gl.BYTE,false,0,0);
	this.gl.uniformMatrix4fv(this.perspectiveMatrixUniform.location,false,matrix.buffer);
	this.gl.drawArrays(this.gl.TRIANGLES,0,6);
	$s.pop();
}
sa.view.UnderWaterRenderer.prototype.__class__ = sa.view.UnderWaterRenderer;
GLImageRegistry = function(p) { if( p === $_ ) return; {
	$s.push("GLImageRegistry::new");
	var $spos = $s.length;
	this.images = new Array();
	$s.pop();
}}
GLImageRegistry.__name__ = ["GLImageRegistry"];
GLImageRegistry.prototype.images = null;
GLImageRegistry.prototype.register = function(name,image) {
	$s.push("GLImageRegistry::register");
	var $spos = $s.length;
	this.images[name] = image;
	$s.pop();
}
GLImageRegistry.prototype.get = function(name) {
	$s.push("GLImageRegistry::get");
	var $spos = $s.length;
	{
		var $tmp = this.images[name];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
GLImageRegistry.prototype.__class__ = GLImageRegistry;
EReg = function(r,opt) { if( r === $_ ) return; {
	$s.push("EReg::new");
	var $spos = $s.length;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
	$s.pop();
}}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	$s.push("EReg::match");
	var $spos = $s.length;
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	{
		var $tmp = this.r.m != null;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matched = function(n) {
	$s.push("EReg::matched");
	var $spos = $s.length;
	{
		var $tmp = this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedLeft = function() {
	$s.push("EReg::matchedLeft");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) {
		var $tmp = this.r.s.substr(0,this.r.m.index);
		$s.pop();
		return $tmp;
	}
	{
		var $tmp = this.r.l;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedRight = function() {
	$s.push("EReg::matchedRight");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		{
			var $tmp = this.r.s.substr(sz,this.r.s.length - sz);
			$s.pop();
			return $tmp;
		}
	}
	{
		var $tmp = this.r.r;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.matchedPos = function() {
	$s.push("EReg::matchedPos");
	var $spos = $s.length;
	if(this.r.m == null) throw "No string matched";
	{
		var $tmp = { pos : this.r.m.index, len : this.r.m[0].length};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.split = function(s) {
	$s.push("EReg::split");
	var $spos = $s.length;
	var d = "#__delim__#";
	{
		var $tmp = s.replace(this.r,d).split(d);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.replace = function(s,by) {
	$s.push("EReg::replace");
	var $spos = $s.length;
	{
		var $tmp = s.replace(this.r,by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.customReplace = function(s,f) {
	$s.push("EReg::customReplace");
	var $spos = $s.length;
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.b[buf.b.length] = this.matchedLeft();
		buf.b[buf.b.length] = f(this);
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s;
	{
		var $tmp = buf.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
EReg.prototype.__class__ = EReg;
sa.controller.StageResizeAction = function(p) { if( p === $_ ) return; {
	$s.push("sa.controller.StageResizeAction::new");
	var $spos = $s.length;
	bpmjs.EventDispatcher.call(this);
	$s.pop();
}}
sa.controller.StageResizeAction.__name__ = ["sa","controller","StageResizeAction"];
sa.controller.StageResizeAction.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) sa.controller.StageResizeAction.prototype[k] = bpmjs.EventDispatcher.prototype[k];
sa.controller.StageResizeAction.prototype.commonModel = null;
sa.controller.StageResizeAction.prototype.handleComplete = function() {
	$s.push("sa.controller.StageResizeAction::handleComplete");
	var $spos = $s.length;
	this.updateSize();
	$s.pop();
}
sa.controller.StageResizeAction.prototype.handleLauncherStart = function(event) {
	$s.push("sa.controller.StageResizeAction::handleLauncherStart");
	var $spos = $s.length;
	GLAnimationFrame.run($closure(this,"timerUpdate"));
	js.Lib.window.onresize = $closure(this,"onResize");
	$s.pop();
}
sa.controller.StageResizeAction.prototype.timerUpdate = function() {
	$s.push("sa.controller.StageResizeAction::timerUpdate");
	var $spos = $s.length;
	if(this.commonModel.windowWidth != js.Lib.window.innerWidth || this.commonModel.windowHeight != js.Lib.window.innerHeight) this.onResize();
	$s.pop();
}
sa.controller.StageResizeAction.prototype.onResize = function(event) {
	$s.push("sa.controller.StageResizeAction::onResize");
	var $spos = $s.length;
	this.updateSize();
	this.fireUpdate();
	$s.pop();
}
sa.controller.StageResizeAction.prototype.updateSize = function() {
	$s.push("sa.controller.StageResizeAction::updateSize");
	var $spos = $s.length;
	this.commonModel.windowWidth = Std["int"](js.Lib.window.innerWidth);
	this.commonModel.windowHeight = Std["int"](js.Lib.window.innerHeight);
	var aspect = this.commonModel.windowWidth / this.commonModel.windowHeight;
	var fov = (aspect - 1.6) * 10;
	if(fov < -30) fov = -30;
	this.commonModel.projectionMatrix.perspective(40 - fov,aspect,0.1,500.0);
	GLDisplayList.getDefault().setStageSize(this.commonModel.windowWidth,this.commonModel.windowHeight);
	$s.pop();
}
sa.controller.StageResizeAction.prototype.fireUpdate = function() {
	$s.push("sa.controller.StageResizeAction::fireUpdate");
	var $spos = $s.length;
	this.dispatchEvent(new sa.event.StageResize());
	$s.pop();
}
sa.controller.StageResizeAction.prototype.__class__ = sa.controller.StageResizeAction;
sa.controller.StageResizeAction.__interfaces__ = [haxe.rtti.Infos];
MoveSet = function(current,to,acceleration) { if( current === $_ ) return; {
	$s.push("MoveSet::new");
	var $spos = $s.length;
	if(acceleration == null) acceleration = 0.1;
	if(to == null) to = 0;
	if(current == null) current = 0;
	this.current = current;
	this.to = to;
	this.acceleration = acceleration;
	this.velocity = 0;
	this.warpSpeed = 10000000;
	$s.pop();
}}
MoveSet.__name__ = ["MoveSet"];
MoveSet.prototype.current = null;
MoveSet.prototype.to = null;
MoveSet.prototype.velocity = null;
MoveSet.prototype.acceleration = null;
MoveSet.prototype.warpSpeed = null;
MoveSet.prototype.move = function(timeScale) {
	$s.push("MoveSet::move");
	var $spos = $s.length;
	if(timeScale == null) timeScale = 1;
	var timeScaleInt = Std["int"](timeScale);
	if(timeScaleInt < 1) timeScaleInt = 1;
	{
		var _g = 0;
		while(_g < timeScaleInt) {
			var i = _g++;
			var moveSet = this;
			var dx = moveSet.to - moveSet.current;
			if(dx == 0) {
				$s.pop();
				return;
			}
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
	$s.pop();
}
MoveSet.prototype.signum = function(value) {
	$s.push("MoveSet::signum");
	var $spos = $s.length;
	{
		var $tmp = value > 0?1:value < 0?-1:0;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
MoveSet.prototype.__class__ = MoveSet;
Xml = function(p) { if( p === $_ ) return; {
	$s.push("Xml::new");
	var $spos = $s.length;
	null;
	$s.pop();
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
	$s.push("Xml::parse");
	var $spos = $s.length;
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
	{
		$s.pop();
		return current;
	}
	$s.pop();
}
Xml.createElement = function(name) {
	$s.push("Xml::createElement");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new Hash();
	r.setNodeName(name);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
Xml.createPCData = function(data) {
	$s.push("Xml::createPCData");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
Xml.createCData = function(data) {
	$s.push("Xml::createCData");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
Xml.createComment = function(data) {
	$s.push("Xml::createComment");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
Xml.createDocType = function(data) {
	$s.push("Xml::createDocType");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
Xml.createProlog = function(data) {
	$s.push("Xml::createProlog");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(data);
	{
		$s.pop();
		return r;
	}
	$s.pop();
}
Xml.createDocument = function() {
	$s.push("Xml::createDocument");
	var $spos = $s.length;
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	{
		$s.pop();
		return r;
	}
	$s.pop();
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
	$s.push("Xml::getNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.setNodeName = function(n) {
	$s.push("Xml::setNodeName");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._nodeName = n;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.getNodeValue = function() {
	$s.push("Xml::getNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.setNodeValue = function(v) {
	$s.push("Xml::setNodeValue");
	var $spos = $s.length;
	if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
	{
		var $tmp = this._nodeValue = v;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.getParent = function() {
	$s.push("Xml::getParent");
	var $spos = $s.length;
	{
		var $tmp = this._parent;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.get = function(att) {
	$s.push("Xml::get");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.get(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.set = function(att,value) {
	$s.push("Xml::set");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.set(att,value);
	$s.pop();
}
Xml.prototype.remove = function(att) {
	$s.push("Xml::remove");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	this._attributes.remove(att);
	$s.pop();
}
Xml.prototype.exists = function(att) {
	$s.push("Xml::exists");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.exists(att);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.attributes = function() {
	$s.push("Xml::attributes");
	var $spos = $s.length;
	if(this.nodeType != Xml.Element) throw "bad nodeType";
	{
		var $tmp = this._attributes.keys();
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.iterator = function() {
	$s.push("Xml::iterator");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("Xml::iterator@281");
			var $spos = $s.length;
			{
				var $tmp = this.cur < this.x.length;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Xml::iterator@284");
			var $spos = $s.length;
			{
				var $tmp = this.x[this.cur++];
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.elements = function() {
	$s.push("Xml::elements");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("Xml::elements@295");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Xml::elements@306");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.elementsNamed = function(name) {
	$s.push("Xml::elementsNamed");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = { cur : 0, x : this._children, hasNext : function() {
			$s.push("Xml::elementsNamed@327");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			{
				var $tmp = k < l;
				$s.pop();
				return $tmp;
			}
			$s.pop();
		}, next : function() {
			$s.push("Xml::elementsNamed@339");
			var $spos = $s.length;
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k++;
				if(n.nodeType == Xml.Element && n._nodeName == name) {
					this.cur = k;
					{
						$s.pop();
						return n;
					}
				}
			}
			{
				$s.pop();
				return null;
			}
			$s.pop();
		}};
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.firstChild = function() {
	$s.push("Xml::firstChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	{
		var $tmp = this._children[0];
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.firstElement = function() {
	$s.push("Xml::firstElement");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var cur = 0;
	var l = this._children.length;
	while(cur < l) {
		var n = this._children[cur];
		if(n.nodeType == Xml.Element) {
			$s.pop();
			return n;
		}
		cur++;
	}
	{
		$s.pop();
		return null;
	}
	$s.pop();
}
Xml.prototype.addChild = function(x) {
	$s.push("Xml::addChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.push(x);
	$s.pop();
}
Xml.prototype.removeChild = function(x) {
	$s.push("Xml::removeChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	var b = this._children.remove(x);
	if(b) x._parent = null;
	{
		$s.pop();
		return b;
	}
	$s.pop();
}
Xml.prototype.insertChild = function(x,pos) {
	$s.push("Xml::insertChild");
	var $spos = $s.length;
	if(this._children == null) throw "bad nodetype";
	if(x._parent != null) x._parent._children.remove(x);
	x._parent = this;
	this._children.insert(pos,x);
	$s.pop();
}
Xml.prototype.toString = function() {
	$s.push("Xml::toString");
	var $spos = $s.length;
	if(this.nodeType == Xml.PCData) {
		var $tmp = this._nodeValue;
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.CData) {
		var $tmp = "<![CDATA[" + this._nodeValue + "]]>";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.Comment) {
		var $tmp = "<!--" + this._nodeValue + "-->";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.DocType) {
		var $tmp = "<!DOCTYPE " + this._nodeValue + ">";
		$s.pop();
		return $tmp;
	}
	if(this.nodeType == Xml.Prolog) {
		var $tmp = "<?" + this._nodeValue + "?>";
		$s.pop();
		return $tmp;
	}
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
			{
				var $tmp = s.b.join("");
				$s.pop();
				return $tmp;
			}
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
	{
		var $tmp = s.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
Xml.prototype.__class__ = Xml;
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var stack = $s.copy();
		var f = js.Lib.onerror;
		$s.splice(0,$s.length);
		if( f == null ) {
			var i = stack.length;
			var s = "";
			while( --i >= 0 )
				s += "Called from "+stack[i]+"\n";
			alert(msg+"\n\n"+s);
			return false;
		}
		return f(msg,stack);
	}
}
{
	var d = Date;
	d.now = function() {
		$s.push("Xml::toString");
		var $spos = $s.length;
		{
			var $tmp = new Date();
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	d.fromTime = function(t) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var d1 = new Date();
		d1["setTime"](t);
		{
			$s.pop();
			return d1;
		}
		$s.pop();
	}
	d.fromString = function(s) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		switch(s.length) {
		case 8:{
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			{
				$s.pop();
				return d1;
			}
		}break;
		case 10:{
			var k = s.split("-");
			{
				var $tmp = new Date(k[0],k[1] - 1,k[2],0,0,0);
				$s.pop();
				return $tmp;
			}
		}break;
		case 19:{
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			{
				var $tmp = new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
				$s.pop();
				return $tmp;
			}
		}break;
		default:{
			throw "Invalid date format : " + s;
		}break;
		}
		$s.pop();
	}
	d.prototype["toString"] = function() {
		$s.push("Xml::toString");
		var $spos = $s.length;
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		{
			var $tmp = date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
			$s.pop();
			return $tmp;
		}
		$s.pop();
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
		$s.push("Xml::toString");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("Xml::toString");
		var $spos = $s.length;
		{
			var $tmp = isNaN(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
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
sa.view.shader.PassVertex2.__meta__ = { obj : { GLSL : ["\n\n\tattribute vec2 vertexPosition;\n\n\tuniform mat4 projectionMatrix;\n\tuniform mat4 viewWorldMatrix;\n\n\tvarying vec2 textureCoord;\n\tvarying vec4 vertex;\n\n\tvoid main(void)\n\t{\n\t\tgl_Position = projectionMatrix * viewWorldMatrix * vec4(vertexPosition, 0.0, 1.0);\n\t\tvertex = vec4(vertexPosition, 0.0, 1.0);\n\t\ttextureCoord = (vertexPosition.xy + 1.0) * 0.5;\n\t}\n\n"]}};
sa.view.shader.UniformColor.__meta__ = { obj : { GLSL : ["\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\n\tuniform vec4 color;\n\n\tvoid main(void)\n\t{\n\t\tgl_FragColor = color;\n\t}\n\n"]}};
sa.view.shader.PassVertex.__meta__ = { obj : { GLSL : ["\n\n\tattribute vec2 vertexPosition;\n\n\tuniform mat4 perspectiveMatrix;\n\n\tvarying vec2 textureCoord;\n\tvarying vec4 vertex;\n\n\tvoid main(void)\n\t{\n\t\tgl_Position = perspectiveMatrix * vec4(vertexPosition, 0.0, 1.0);\n\t\tvertex = vec4(vertexPosition, 0.0, 1.0);\n\t\ttextureCoord = (vertexPosition.xy + 1.0) * 0.5;\n\t}\n\n"]}};
GLCursorClient.DEFAULT = "default";
GLCursorClient.HAND = "pointer";
sa.controller.Launcher.__meta__ = { obj : { ManagedEvents : ["launcherStart"]}, fields : { textureRegistry : { Inject : null}, imageRegistry : { Inject : null}, preloaderView : { Inject : null}, handlePostComplete : { PostComplete : null}}};
sa.controller.Launcher.__rtti = "<class path=\"sa.controller.Launcher\" params=\"\">\n\t<extends path=\"bpmjs.EventDispatcher\"/>\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<textureRegistry><c path=\"GLTextureRegistry\"/></textureRegistry>\n\t<imageRegistry><c path=\"GLImageRegistry\"/></imageRegistry>\n\t<preloaderView><c path=\"sa.view.PreloaderView\"/></preloaderView>\n\t<handlePostComplete public=\"1\" set=\"method\" line=\"29\"><f a=\"\"><e path=\"Void\"/></f></handlePostComplete>\n\t<fontsLoaded set=\"method\" line=\"37\"><f a=\"\"><e path=\"Void\"/></f></fontsLoaded>\n\t<handleComplete set=\"method\" line=\"62\"><f a=\"task\">\n\t<c path=\"bpmjs.TaskGroup\"/>\n\t<e path=\"Void\"/>\n</f></handleComplete>\n\t<createTextureTask set=\"method\" line=\"74\"><f a=\"location:texture:scaleMod\">\n\t<c path=\"String\"/>\n\t<e path=\"sa.view.TextureId\"/>\n\t<c path=\"Int\"/>\n\t<c path=\"bpmjs.ImageLoaderTask\"/>\n</f></createTextureTask>\n\t<createImageTask set=\"method\" line=\"91\"><f a=\"location:image\">\n\t<c path=\"String\"/>\n\t<e path=\"sa.view.ImageId\"/>\n\t<c path=\"bpmjs.ImageLoaderTask\"/>\n</f></createImageTask>\n\t<new public=\"1\" set=\"method\" line=\"17\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
hsl.haxe._DirectSignaler.PropagationStatus.IMMEDIATELY_STOPPED = 1;
hsl.haxe._DirectSignaler.PropagationStatus.STOPPED = 2;
hsl.haxe._DirectSignaler.PropagationStatus.UNDISTURBED = 3;
sa.view.shader.HitareaVertex.__meta__ = { obj : { GLSL : ["\n\n\tattribute vec2 vertexPosition;\n\n\tuniform mat4 projectionMatrix;\n\tuniform mat4 viewWorldMatrix;\n\n\tvoid main(void)\n\t{\n\t\tgl_Position = projectionMatrix * viewWorldMatrix * vec4(vertexPosition, 0.0, 1.0);\n\t}\n\n"]}};
sa.view.shader.PlanktonVertex.__meta__ = { obj : { GLSL : ["\n\n\tattribute vec3 vertexPosition;\n\n\tuniform float elapsedTime;\n\tuniform float elapsedClickTime;\n\tuniform float peak;\n\tuniform float peakIncrement;\n\n\tuniform vec3 specularColor;\n\tuniform vec3 clickPos;\n\tuniform vec3 attractorPosition;\n\n\tuniform mat4 perspectiveMatrix;\n\tuniform mat4 objectMatrix;\n\tuniform mat4 rotationMatrix;\n\tuniform mat4 cameraMatrix;\n\n\tvarying vec4 color;\n\n\tvoid main(void)\n\t{\n\t\tvec4 worldPosition = objectMatrix * vec4(vertexPosition, 1.0);\n\t\tgl_PointSize = 1.0;\n\n\t\tfloat radiusSquared = pow(2.0, 2.0);\n\t\tvec3 spherePosition = attractorPosition;\n\t\tvec3 rayDir = normalize((cameraMatrix * vec4(0.0, 0.0, 10.0, 1.0)).xyz - worldPosition.xyz);\n\t\tvec3 sphereIntersectionToCenter = spherePosition - worldPosition.xyz;\n\n\t\tfloat sphereClosestApproach = dot(sphereIntersectionToCenter, rayDir);\n\n\t\tfloat value = 1.0;\n\t\tif (sphereClosestApproach > 0.0)\n\t\t{\n\t\t\tfloat l = length(sphereIntersectionToCenter);\n\t\t\tfloat sphereHalfCord2 = (radiusSquared - (l * l)) + (sphereClosestApproach * sphereClosestApproach);\n\n\t\t\tif (sphereHalfCord2 >= 0.0)\n\t\t\t{\n\t\t\t\tfloat dist = sphereClosestApproach - 1.0 / sphereHalfCord2;\n\t\t\t\tvalue = 0.4;\n\t\t\t\tworldPosition.z *= 1.0 + dist / 20.0;\n\t\t\t}\n\t\t}\n\t\t//value = clamp(value, 0.0, 1.0);\n\n\t\tfloat diffuse;\n\t\tfloat side;\n\t\tvec3 normal;\n\t\tif (vertexPosition.z == 0.0)\n\t\t{\n\t\t\tside = 0.0;\n\t\t\tdiffuse = 0.1;\n\t\t\tnormal = vec3(0.0, 1.0, 0.0);\n\t\t}\n\t\telse\n\t\t{\n\t\t\tside = 0.3;\n\t\t\tdiffuse = 1.0;\n\t\t\tnormal = vec3(0.0, -1.0, 0.0);\n\t\t}\n\n\t\tvalue += (worldPosition.z + 20.0) * 0.017;\n\t\tvalue = clamp(value, 0.0, 1.0);\n\n\t\tvec3 normalRot = normalize((rotationMatrix * vec4(normal, 1.0)).xyz);\n\t\tvec3 lightDir = normalize(attractorPosition.xyz - worldPosition.xyz);\n\n\t\tdiffuse = clamp(dot(normalRot, lightDir) * 1.0, 0.1, 1.0);\n\n\t\tfloat sinValue = clamp((sin(worldPosition.z * worldPosition.x * 0.03 + elapsedTime * 0.001 + peakIncrement) + 1.0) * 0.3, 0.0, 1.0);\n\t\tvec3 colorBase = vec3(111.0 / 255.0, 78.0 / 255.0, 129.0 / 255.0);\n\t\tvec3 colorSound = vec3(107.0 / 255.0, 186.0 / 255.0, 183.0 / 255.0);\n\t\tgl_Position = perspectiveMatrix * worldPosition;\n\t\tcolor = vec4(\n\t\t\tcolorBase * value * 0.2 * (0.5 + peak) +\n\t\t\tcolorSound * sinValue * 0.2 * value * (0.5 + peak)\n\t\t\t, 1.0);\n\t}\n\n"]}};
sa.view.shader.Texture.__meta__ = { obj : { GLSL : ["\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\n\tuniform sampler2D texture;\n\n\tvarying vec2 textureCoord;\n\n\tvoid main(void)\n\t{\n\t\tvec4 color = texture2D(texture, textureCoord);\n\t\tgl_FragColor = color;\n\t}\n\n"]}};
sa.view.shader.Color.__meta__ = { obj : { GLSL : ["\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\n\tvarying vec4 color;\n\n\tvoid main(void)\n\t{\n\t\tgl_FragColor = color;\n\t}\n\n"]}};
bpmjs.Event.COMPLETE = "complete";
bpmjs.Event.START = "start";
sa.controller.AudioController.__meta__ = { fields : { commonModel : { Inject : null}, handleLauncherStart : { MessageHandler : null}}};
sa.controller.AudioController.__rtti = "<class path=\"sa.controller.AudioController\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel public=\"1\"><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<audio><c path=\"Audio\"/></audio>\n\t<peaks><c path=\"Array\"><c path=\"Float\"/></c></peaks>\n\t<handleLauncherStart public=\"1\" set=\"method\" line=\"30\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<handleTimer set=\"method\" line=\"39\"><f a=\"\"><e path=\"Void\"/></f></handleTimer>\n\t<new public=\"1\" set=\"method\" line=\"18\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
js.Lib.onerror = null;
sa.view.shader.StrangeAttractorVertex.__meta__ = { obj : { GLSL : ["\n\n\tattribute vec3 vertexPosition;\n\tattribute vec3 icolor;\n\n\tuniform float elapsedTime;\n\tuniform float elapsedClickTime;\n\tuniform float peak;\n\n\tuniform vec3 specularColor1;\n\tuniform vec3 specularColor2;\n\tuniform vec3 clickColor;\n\tuniform vec3 clickPos;\n\n\tuniform mat4 perspectiveMatrix;\n\tuniform mat4 objectMatrix;\n\tuniform mat4 cameraMatrix;\n\tuniform mat4 shadowMatrix;\n\n\tvarying vec4 color;\n\n\tvoid main(void)\n\t{\n\t\tfloat v = 0.0;\n\t\tfloat maxTime = 1300.0;\n\t\tif (elapsedClickTime > 0.0 && elapsedClickTime < maxTime)\n\t\t{\n\t\t\tvec3 distanceToClick = clickPos - vertexPosition;\n\t\t\tfloat radWidth = 0.5;\n\t\t\tfloat radMaxSize = 10.0;\n\t\t\tfloat radius = elapsedClickTime / maxTime * radMaxSize;\n\t\t\tfloat dist1 = (radius - radWidth - length(distanceToClick)) * 0.1;\n\t\t\tfloat dist2 = (radius - length(distanceToClick)) * 0.1;\n\t\t\tv = clamp(dist2 - dist2 / dist1, 0.0, 1.0);\n\t\t}\n\n\t\tfloat v2 = clamp(pow(1.0 + peak, 2.0) * 3.0 - 4.0, 0.0, 4.0);\n\t\tvec4 vertexPositionWobble = vec4(vertexPosition, 1.0);\n\t\tvertexPositionWobble.x += sin(vertexPositionWobble.y * 2.0 + 1.0) * sin(vertexPositionWobble.y * 1.0 + elapsedTime * 0.01) * 0.02 * v2;\n\t\tvertexPositionWobble.y += sin(vertexPositionWobble.x * 1.0 + 2.0) * sin(vertexPositionWobble.x * 2.0 + elapsedTime * 0.005) * 0.04 * v2;\n\t\tvertexPositionWobble.z += sin(vertexPositionWobble.y * 1.0 + 3.0) * sin(vertexPositionWobble.y * 3.0 + elapsedTime * 0.01) * 0.04 * v2;\n\n\t\tvec4 positionRot = objectMatrix * vertexPositionWobble;\n\n\t\tgl_Position = perspectiveMatrix * positionRot;\n\t\tgl_PointSize = clamp(3.0 - gl_Position.z / 7.0, 0.1, 1.5);\n\n\t\tvec3 normalRot = normalize(positionRot.xyz - (objectMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz);\n\t\tvec3 lightDir = normalize((cameraMatrix * vec4(10.0, 10.0, 0.0, 1.0)).xyz - positionRot.xyz);\n\n\t\tfloat diffuse = dot(normalRot, lightDir) * 0.5;\n\n\t\tvec3 viewDir = normalize((cameraMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz - positionRot.xyz);\n\n\t\tvec3 h1 = normalize(lightDir + viewDir);\n\t\tfloat specular1 = pow(dot(normalRot, h1), 60.0);\n\t\tif (!(specular1 < 0.0 || specular1 > 0.0))\n\t\t\tspecular1 = 0.0;\n\n\t\tvec3 h2 = normalize(-lightDir + viewDir);\n\t\tfloat specular2 = pow(dot(normalRot, h2), 40.0);\n\t\tif (!(specular2 < 0.0 || specular2 > 0.0))\n\t\t\tspecular2 = 0.0;\n\n\t\tvec3 h3 = normalize(-lightDir + vertexPositionWobble.xyz);\n\t\tfloat specular3 = pow(dot(normalRot, h3), 30.0);\n\t\tif (!(specular3 < 0.0 || specular3 > 0.0))\n\t\t\tspecular3 = 0.0;\n\n\t\tvec4 shadowPosition = shadowMatrix * positionRot;\n\t\tfloat shadow = (sin(shadowPosition.x * 1.0 + elapsedTime * 0.001 + sin(shadowPosition.y * 1.0 + elapsedTime * 0.002))) * 0.2 + 1.0;\n\t\tfloat shadow2 = sin(cos(shadowPosition.z) * sin(shadowPosition.y * 5.0 + elapsedTime * 0.0015) + shadowPosition.z * 10.0 + 3.0 + elapsedTime * 0.006) * sin((shadowMatrix * positionRot).z * 3.0 + 3.0 + elapsedTime * 0.002) * 0.2 + 1.0;\n\n\t\tcolor = vec4(\n\t\t\ticolor * 0.1 * shadow * shadow2 +\n\t\t\ticolor * clamp(diffuse, 0.0, 1.0) * shadow * shadow2 +\n\t\t\tspecularColor1 * clamp(specular1 * 0.4, 0.0, 1.0) * shadow * shadow2 +\n\t\t\tspecularColor2 * clamp(specular2 * 0.8, 0.0, 1.0) * shadow * shadow2 +\n\t\t\tspecularColor1 * clamp(specular3 * 0.4, 0.0, 1.0) * shadow * shadow2 +\n\t\t\tclickColor * v * 0.5\n\t\t\t, clamp(diffuse * 2.0, 0.5, 1.0));\n\t}\n\n"]}};
sa.Config.__rtti = "<class path=\"sa.Config\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel public=\"1\"><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<textureRegistry public=\"1\"><c path=\"GLTextureRegistry\"/></textureRegistry>\n\t<imageRegistry public=\"1\"><c path=\"GLImageRegistry\"/></imageRegistry>\n\t<stageResizeAction public=\"1\"><c path=\"sa.controller.StageResizeAction\"/></stageResizeAction>\n\t<launcher public=\"1\"><c path=\"sa.controller.Launcher\"/></launcher>\n\t<audioController public=\"1\"><c path=\"sa.controller.AudioController\"/></audioController>\n\t<cameraController public=\"1\"><c path=\"sa.controller.CameraController\"/></cameraController>\n\t<canvasView public=\"1\"><c path=\"sa.view.CanvasView\"/></canvasView>\n\t<preloaderView public=\"1\"><c path=\"sa.view.PreloaderView\"/></preloaderView>\n\t<mainInterfaceView public=\"1\"><c path=\"sa.view.MainInterfaceView\"/></mainInterfaceView>\n\t<controller set=\"method\" line=\"47\"><f a=\"\"><e path=\"Void\"/></f></controller>\n\t<model set=\"method\" line=\"55\"><f a=\"\"><e path=\"Void\"/></f></model>\n\t<view set=\"method\" line=\"76\"><f a=\"\"><e path=\"Void\"/></f></view>\n\t<new public=\"1\" set=\"method\" line=\"40\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
sa.view.shader.UnderWater.__meta__ = { obj : { GLSL : ["\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\n\t#define NUM_RAYS 20\n\n\tuniform float elapsedTime;\n\n\tvarying vec2 textureCoord;\n\tvarying vec4 vertex;\n\n\tvoid main(void)\n\t{\n\t\tfloat value = 0.0;\n\t\tfloat num = float(NUM_RAYS);\n\n\t\tfloat sinT1 = sin(elapsedTime * 0.002) * 0.2;\n\t\tfloat sinT2 = sin(2.0 + elapsedTime * 0.0013) * 0.3;\n\n\t\tfor(int i = 0; i < NUM_RAYS; i++)\n\t\t{\n\t\t\tfloat fi = float(i + 2) / num;\n\t\t\tfloat rad = float(i) * 0.2 + (1.0 + elapsedTime * 0.001) * 0.3;\n\n\t\t\tvec2 light = vec2(sin(fi * 13.3 + elapsedTime * 0.0002 + sin(fi * 13.3 + elapsedTime * 0.0005)) * 0.1 + 0.8, cos(fi * 18.0 + elapsedTime * 0.0001) * 0.1 + 1.2);\n\t\t\tvec2 lightDir = normalize(vec2(sin(fi * 0.9 * (1.0 + 0.9 * sin(elapsedTime * 0.0001 + 2.0)) + sin(elapsedTime * 0.00005 + 3.0) * 0.1 + 0.3) , cos(0.3 + fi * 0.8 + sin(1.0 + elapsedTime * 0.0003) * 0.1)));\n\n\t\t\tfloat lightAngle = dot(lightDir, normalize(light - vertex.xy));\n\t\t\tif (lightAngle > 0.0)\n\t\t\t{\n\t\t\t\tfloat dist = distance(light, vertex.xy);\n\t\t\t\tfloat xd1 = sin(fi * 30.0 + sinT1 + sinT2);\n\t\t\t\tfloat xd2 = sin(fi * 10.0 + sinT1 + sinT2 + 3.0);\n\t\t\t\tfloat radius = (xd1 + 1.0) * 600.0 + 100.0;\n\t\t\t\tvalue += clamp(pow(lightAngle, radius * dist * dist) * (0.4 + xd1 * 0.3) / pow(1.0 + dist, 9.5 + xd2 * 8.0), 0.0, 1.0);\n\t\t\t}\n\t\t}\n\n\t\tvec3 color = vec3(195.0 / 255.0, 164.0 / 255.0, 246.0 / 255.0);\n\t\tvalue = clamp(value * 0.4, 0.0, 0.8);\n\t\tgl_FragColor = vec4(color, 1.0) * vec4(value, value, value, 1.0);\n\t}\n\n"]}};
sa.view.MainInterfaceView.__meta__ = { fields : { imageRegistry : { Inject : null}, commonModel : { Inject : null}, handleLauncherStart : { MessageHandler : null}, handleStageResize : { MessageHandler : null}}};
sa.view.MainInterfaceView.__rtti = "<class path=\"sa.view.MainInterfaceView\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<imageRegistry><c path=\"GLImageRegistry\"/></imageRegistry>\n\t<commonModel><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<stage public=\"1\"><c path=\"GLStage\"/></stage>\n\t<blend><c path=\"GLDisplayObject\"/></blend>\n\t<startButton><c path=\"GLInteractiveObject\"/></startButton>\n\t<creditsButton><c path=\"GLInteractiveObject\"/></creditsButton>\n\t<modeButton><c path=\"GLInteractiveObject\"/></modeButton>\n\t<handleLauncherStart set=\"method\" line=\"37\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<start public=\"1\" set=\"method\" line=\"76\"><f a=\"\"><e path=\"Void\"/></f></start>\n\t<handleStartFadeInComplete set=\"method\" line=\"82\"><f a=\"tween\">\n\t<c path=\"GLTween\"/>\n\t<e path=\"Void\"/>\n</f></handleStartFadeInComplete>\n\t<handeClick set=\"method\" line=\"87\"><f a=\"?obj\">\n\t<c path=\"GLInteractiveObject\"/>\n\t<e path=\"Void\"/>\n</f></handeClick>\n\t<handleStartFadeOutComplete set=\"method\" line=\"101\"><f a=\"tween\">\n\t<c path=\"GLTween\"/>\n\t<e path=\"Void\"/>\n</f></handleStartFadeOutComplete>\n\t<handleCreditsButtonClick set=\"method\" line=\"112\"><f a=\"obj\">\n\t<c path=\"GLInteractiveObject\"/>\n\t<e path=\"Void\"/>\n</f></handleCreditsButtonClick>\n\t<handleModeButtonClick set=\"method\" line=\"117\"><f a=\"obj\">\n\t<c path=\"GLInteractiveObject\"/>\n\t<e path=\"Void\"/>\n</f></handleModeButtonClick>\n\t<handleStageResize set=\"method\" line=\"123\"><f a=\"event\">\n\t<c path=\"sa.event.StageResize\"/>\n\t<e path=\"Void\"/>\n</f></handleStageResize>\n\t<layoutElements set=\"method\" line=\"128\"><f a=\"\"><e path=\"Void\"/></f></layoutElements>\n\t<new public=\"1\" set=\"method\" line=\"31\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
sa.view.CanvasView.__meta__ = { fields : { commonModel : { Inject : null}, textureRegistry : { Inject : null}, mainInterfaceView : { Inject : null}, handleLauncherStart : { MessageHandler : null}, handleStageResize : { MessageHandler : null}}};
sa.view.CanvasView.__rtti = "<class path=\"sa.view.CanvasView\" params=\"\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<commonModel><c path=\"sa.model.CommonModel\"/></commonModel>\n\t<textureRegistry><c path=\"GLTextureRegistry\"/></textureRegistry>\n\t<mainInterfaceView><c path=\"sa.view.MainInterfaceView\"/></mainInterfaceView>\n\t<gl><c path=\"WebGLRenderingContext\"/></gl>\n\t<canvas><c path=\"Canvas\"/></canvas>\n\t<framebuffer><c path=\"GLFramebuffer\"/></framebuffer>\n\t<backgroundRenderer><c path=\"sa.view.BackgroundRenderer\"/></backgroundRenderer>\n\t<underWaterRenderer><c path=\"sa.view.UnderWaterRenderer\"/></underWaterRenderer>\n\t<textureRenderer><c path=\"sa.view.TextureRenderer\"/></textureRenderer>\n\t<planktonRenderer><c path=\"sa.view.PlanktonRenderer\"/></planktonRenderer>\n\t<rocksRenderer><c path=\"sa.view.RocksRenderer\"/></rocksRenderer>\n\t<saRenderer><c path=\"sa.view.StrangeAttractorRenderer\"/></saRenderer>\n\t<displayListRenderer><c path=\"GLDisplayListRenderer\"/></displayListRenderer>\n\t<creditsRenderer><c path=\"sa.view.CreditsRenderer\"/></creditsRenderer>\n\t<handleLauncherStart set=\"method\" line=\"36\"><f a=\"event\">\n\t<c path=\"sa.event.LauncherStart\"/>\n\t<e path=\"Void\"/>\n</f></handleLauncherStart>\n\t<handleModeChanged set=\"method\" line=\"93\"><f a=\"newMode\">\n\t<c path=\"Int\"/>\n\t<e path=\"Void\"/>\n</f></handleModeChanged>\n\t<handleStageResize set=\"method\" line=\"99\"><f a=\"event\">\n\t<c path=\"sa.event.StageResize\"/>\n\t<e path=\"Void\"/>\n</f></handleStageResize>\n\t<updateCanvas set=\"method\" line=\"104\"><f a=\"\"><e path=\"Void\"/></f></updateCanvas>\n\t<tick set=\"method\" line=\"110\"><f a=\"\"><e path=\"Void\"/></f></tick>\n\t<renderScene set=\"method\" line=\"127\"><f a=\"\"><e path=\"Void\"/></f></renderScene>\n\t<renderInterface set=\"method\" line=\"161\"><f a=\"\"><e path=\"Void\"/></f></renderInterface>\n\t<new public=\"1\" set=\"method\" line=\"33\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
haxe.Timer.arr = new Array();
shader.DisplayObjectVertex.__meta__ = { obj : { GLSL : ["\n\n\tattribute vec2 vertexPosition;\n\n\tuniform mat4 projectionMatrix;\n\tuniform mat4 objectMatrix;\n\tuniform vec2 size;\n\n\tvarying vec2 textureCoord;\n\n\tvoid main(void)\n\t{\n\t\tgl_Position = projectionMatrix * objectMatrix * (vec4(size, 1.0, 1.0) * vec4(vertexPosition, 0.0, 1.0));\n\t\ttextureCoord = vertexPosition.xy;\n\t}\n\n"]}};
GL.DEPTH_BUFFER_BIT = 256;
GL.STENCIL_BUFFER_BIT = 1024;
GL.COLOR_BUFFER_BIT = 16384;
GL.POINTS = 0;
GL.LINES = 1;
GL.LINE_LOOP = 2;
GL.LINE_STRIP = 3;
GL.TRIANGLES = 4;
GL.TRIANGLE_STRIP = 5;
GL.TRIANGLE_FAN = 6;
GL.ZERO = 0;
GL.ONE = 1;
GL.SRC_COLOR = 768;
GL.ONE_MINUS_SRC_COLOR = 769;
GL.SRC_ALPHA = 770;
GL.ONE_MINUS_SRC_ALPHA = 771;
GL.DST_ALPHA = 772;
GL.ONE_MINUS_DST_ALPHA = 773;
GL.DST_COLOR = 774;
GL.ONE_MINUS_DST_COLOR = 775;
GL.SRC_ALPHA_SATURATE = 776;
GL.FUNC_ADD = 32774;
GL.BLEND_EQUATION = 32777;
GL.BLEND_EQUATION_RGB = 32777;
GL.BLEND_EQUATION_ALPHA = 34877;
GL.FUNC_SUBTRACT = 32778;
GL.FUNC_REVERSE_SUBTRACT = 32779;
GL.BLEND_DST_RGB = 32968;
GL.BLEND_SRC_RGB = 32969;
GL.BLEND_DST_ALPHA = 32970;
GL.BLEND_SRC_ALPHA = 32971;
GL.CONSTANT_COLOR = 32769;
GL.ONE_MINUS_CONSTANT_COLOR = 32770;
GL.CONSTANT_ALPHA = 32771;
GL.ONE_MINUS_CONSTANT_ALPHA = 32772;
GL.BLEND_COLOR = 32773;
GL.ARRAY_BUFFER = 34962;
GL.ELEMENT_ARRAY_BUFFER = 34963;
GL.ARRAY_BUFFER_BINDING = 34964;
GL.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
GL.STREAM_DRAW = 35040;
GL.STATIC_DRAW = 35044;
GL.DYNAMIC_DRAW = 35048;
GL.BUFFER_SIZE = 34660;
GL.BUFFER_USAGE = 34661;
GL.CURRENT_VERTEX_ATTRIB = 34342;
GL.FRONT = 1028;
GL.BACK = 1029;
GL.FRONT_AND_BACK = 1032;
GL.CULL_FACE = 2884;
GL.BLEND = 3042;
GL.DITHER = 3024;
GL.STENCIL_TEST = 2960;
GL.DEPTH_TEST = 2929;
GL.SCISSOR_TEST = 3089;
GL.POLYGON_OFFSET_FILL = 32823;
GL.SAMPLE_ALPHA_TO_COVERAGE = 32926;
GL.SAMPLE_COVERAGE = 32928;
GL.NO_ERROR = 0;
GL.INVALID_ENUM = 1280;
GL.INVALID_VALUE = 1281;
GL.INVALID_OPERATION = 1282;
GL.OUT_OF_MEMORY = 1285;
GL.CW = 2304;
GL.CCW = 2305;
GL.LINE_WIDTH = 2849;
GL.ALIASED_POINT_SIZE_RANGE = 33901;
GL.ALIASED_LINE_WIDTH_RANGE = 33902;
GL.CULL_FACE_MODE = 2885;
GL.FRONT_FACE = 2886;
GL.DEPTH_RANGE = 2928;
GL.DEPTH_WRITEMASK = 2930;
GL.DEPTH_CLEAR_VALUE = 2931;
GL.DEPTH_FUNC = 2932;
GL.STENCIL_CLEAR_VALUE = 2961;
GL.STENCIL_FUNC = 2962;
GL.STENCIL_FAIL = 2964;
GL.STENCIL_PASS_DEPTH_FAIL = 2965;
GL.STENCIL_PASS_DEPTH_PASS = 2966;
GL.STENCIL_REF = 2967;
GL.STENCIL_VALUE_MASK = 2963;
GL.STENCIL_WRITEMASK = 2968;
GL.STENCIL_BACK_FUNC = 34816;
GL.STENCIL_BACK_FAIL = 34817;
GL.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
GL.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
GL.STENCIL_BACK_REF = 36003;
GL.STENCIL_BACK_VALUE_MASK = 36004;
GL.STENCIL_BACK_WRITEMASK = 36005;
GL.VIEWPORT = 2978;
GL.SCISSOR_BOX = 3088;
GL.COLOR_CLEAR_VALUE = 3106;
GL.COLOR_WRITEMASK = 3107;
GL.UNPACK_ALIGNMENT = 3317;
GL.PACK_ALIGNMENT = 3333;
GL.MAX_TEXTURE_SIZE = 3379;
GL.MAX_VIEWPORT_DIMS = 3386;
GL.SUBPIXEL_BITS = 3408;
GL.RED_BITS = 3410;
GL.GREEN_BITS = 3411;
GL.BLUE_BITS = 3412;
GL.ALPHA_BITS = 3413;
GL.DEPTH_BITS = 3414;
GL.STENCIL_BITS = 3415;
GL.POLYGON_OFFSET_UNITS = 10752;
GL.POLYGON_OFFSET_FACTOR = 32824;
GL.TEXTURE_BINDING_2D = 32873;
GL.SAMPLE_BUFFERS = 32936;
GL.SAMPLES = 32937;
GL.SAMPLE_COVERAGE_VALUE = 32938;
GL.SAMPLE_COVERAGE_INVERT = 32939;
GL.NUM_COMPRESSED_TEXTURE_FORMATS = 34466;
GL.COMPRESSED_TEXTURE_FORMATS = 34467;
GL.DONT_CARE = 4352;
GL.FASTEST = 4353;
GL.NICEST = 4354;
GL.GENERATE_MIPMAP_HINT = 33170;
GL.BYTE = 5120;
GL.UNSIGNED_BYTE = 5121;
GL.SHORT = 5122;
GL.UNSIGNED_SHORT = 5123;
GL.INT = 5124;
GL.UNSIGNED_INT = 5125;
GL.FLOAT = 5126;
GL.DEPTH_COMPONENT = 6402;
GL.ALPHA = 6406;
GL.RGB = 6407;
GL.RGBA = 6408;
GL.LUMINANCE = 6409;
GL.LUMINANCE_ALPHA = 6410;
GL.UNSIGNED_SHORT_4_4_4_4 = 32819;
GL.UNSIGNED_SHORT_5_5_5_1 = 32820;
GL.UNSIGNED_SHORT_5_6_5 = 33635;
GL.FRAGMENT_SHADER = 35632;
GL.VERTEX_SHADER = 35633;
GL.MAX_VERTEX_ATTRIBS = 34921;
GL.MAX_VERTEX_UNIFORM_VECTORS = 36347;
GL.MAX_VARYING_VECTORS = 36348;
GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
GL.MAX_TEXTURE_IMAGE_UNITS = 34930;
GL.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
GL.SHADER_TYPE = 35663;
GL.DELETE_STATUS = 35712;
GL.LINK_STATUS = 35714;
GL.VALIDATE_STATUS = 35715;
GL.ATTACHED_SHADERS = 35717;
GL.ACTIVE_UNIFORMS = 35718;
GL.ACTIVE_UNIFORM_MAX_LENGTH = 35719;
GL.ACTIVE_ATTRIBUTES = 35721;
GL.ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722;
GL.SHADING_LANGUAGE_VERSION = 35724;
GL.CURRENT_PROGRAM = 35725;
GL.NEVER = 512;
GL.LESS = 513;
GL.EQUAL = 514;
GL.LEQUAL = 515;
GL.GREATER = 516;
GL.NOTEQUAL = 517;
GL.GEQUAL = 518;
GL.ALWAYS = 519;
GL.KEEP = 7680;
GL.REPLACE = 7681;
GL.INCR = 7682;
GL.DECR = 7683;
GL.INVERT = 5386;
GL.INCR_WRAP = 34055;
GL.DECR_WRAP = 34056;
GL.VENDOR = 7936;
GL.RENDERER = 7937;
GL.VERSION = 7938;
GL.EXTENSIONS = 7939;
GL.NEAREST = 9728;
GL.LINEAR = 9729;
GL.NEAREST_MIPMAP_NEAREST = 9984;
GL.LINEAR_MIPMAP_NEAREST = 9985;
GL.NEAREST_MIPMAP_LINEAR = 9986;
GL.LINEAR_MIPMAP_LINEAR = 9987;
GL.TEXTURE_MAG_FILTER = 10240;
GL.TEXTURE_MIN_FILTER = 10241;
GL.TEXTURE_WRAP_S = 10242;
GL.TEXTURE_WRAP_T = 10243;
GL.TEXTURE_2D = 3553;
GL.TEXTURE = 5890;
GL.TEXTURE_CUBE_MAP = 34067;
GL.TEXTURE_BINDING_CUBE_MAP = 34068;
GL.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
GL.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
GL.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
GL.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
GL.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
GL.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
GL.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
GL.TEXTURE0 = 33984;
GL.TEXTURE1 = 33985;
GL.TEXTURE2 = 33986;
GL.TEXTURE3 = 33987;
GL.TEXTURE4 = 33988;
GL.TEXTURE5 = 33989;
GL.TEXTURE6 = 33990;
GL.TEXTURE7 = 33991;
GL.TEXTURE8 = 33992;
GL.TEXTURE9 = 33993;
GL.TEXTURE10 = 33994;
GL.TEXTURE11 = 33995;
GL.TEXTURE12 = 33996;
GL.TEXTURE13 = 33997;
GL.TEXTURE14 = 33998;
GL.TEXTURE15 = 33999;
GL.TEXTURE16 = 34000;
GL.TEXTURE17 = 34001;
GL.TEXTURE18 = 34002;
GL.TEXTURE19 = 34003;
GL.TEXTURE20 = 34004;
GL.TEXTURE21 = 34005;
GL.TEXTURE22 = 34006;
GL.TEXTURE23 = 34007;
GL.TEXTURE24 = 34008;
GL.TEXTURE25 = 34009;
GL.TEXTURE26 = 34010;
GL.TEXTURE27 = 34011;
GL.TEXTURE28 = 34012;
GL.TEXTURE29 = 34013;
GL.TEXTURE30 = 34014;
GL.TEXTURE31 = 34015;
GL.ACTIVE_TEXTURE = 34016;
GL.REPEAT = 10497;
GL.CLAMP_TO_EDGE = 33071;
GL.MIRRORED_REPEAT = 33648;
GL.FLOAT_VEC2 = 35664;
GL.FLOAT_VEC3 = 35665;
GL.FLOAT_VEC4 = 35666;
GL.INT_VEC2 = 35667;
GL.INT_VEC3 = 35668;
GL.INT_VEC4 = 35669;
GL.BOOL = 35670;
GL.BOOL_VEC2 = 35671;
GL.BOOL_VEC3 = 35672;
GL.BOOL_VEC4 = 35673;
GL.FLOAT_MAT2 = 35674;
GL.FLOAT_MAT3 = 35675;
GL.FLOAT_MAT4 = 35676;
GL.SAMPLER_2D = 35678;
GL.SAMPLER_CUBE = 35680;
GL.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
GL.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
GL.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
GL.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
GL.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
GL.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
GL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
GL.IMPLEMENTATION_COLOR_READ_TYPE = 35738;
GL.IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
GL.COMPILE_STATUS = 35713;
GL.INFO_LOG_LENGTH = 35716;
GL.SHADER_SOURCE_LENGTH = 35720;
GL.SHADER_COMPILER = 36346;
GL.LOW_FLOAT = 36336;
GL.MEDIUM_FLOAT = 36337;
GL.HIGH_FLOAT = 36338;
GL.LOW_INT = 36339;
GL.MEDIUM_INT = 36340;
GL.HIGH_INT = 36341;
GL.FRAMEBUFFER = 36160;
GL.RENDERBUFFER = 36161;
GL.RGBA4 = 32854;
GL.RGB5_A1 = 32855;
GL.RGB565 = 36194;
GL.DEPTH_COMPONENT16 = 33189;
GL.STENCIL_INDEX = 6401;
GL.STENCIL_INDEX8 = 36168;
GL.RENDERBUFFER_WIDTH = 36162;
GL.RENDERBUFFER_HEIGHT = 36163;
GL.RENDERBUFFER_INTERNAL_FORMAT = 36164;
GL.RENDERBUFFER_RED_SIZE = 36176;
GL.RENDERBUFFER_GREEN_SIZE = 36177;
GL.RENDERBUFFER_BLUE_SIZE = 36178;
GL.RENDERBUFFER_ALPHA_SIZE = 36179;
GL.RENDERBUFFER_DEPTH_SIZE = 36180;
GL.RENDERBUFFER_STENCIL_SIZE = 36181;
GL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
GL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
GL.COLOR_ATTACHMENT0 = 36064;
GL.DEPTH_ATTACHMENT = 36096;
GL.STENCIL_ATTACHMENT = 36128;
GL.NONE = 0;
GL.FRAMEBUFFER_COMPLETE = 36053;
GL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
GL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
GL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
GL.FRAMEBUFFER_UNSUPPORTED = 36061;
GL.FRAMEBUFFER_BINDING = 36006;
GL.RENDERBUFFER_BINDING = 36007;
GL.MAX_RENDERBUFFER_SIZE = 34024;
GL.INVALID_FRAMEBUFFER_OPERATION = 1286;
shader.DisplayObjectFragment.__meta__ = { obj : { GLSL : ["\n\n\t#ifdef GL_ES\n\t\tprecision highp float;\n\t#endif\n\n\tuniform sampler2D texture;\n\tuniform float alpha;\n\n\tvarying vec2 textureCoord;\n\n\tvoid main(void)\n\t{\n\t\tvec4 color = texture2D(texture, textureCoord);\n\t\tgl_FragColor = color * vec4(1.0, 1.0, 1.0, alpha);\n\t}\n\n"]}};
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