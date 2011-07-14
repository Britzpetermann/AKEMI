$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof haxe=='undefined') haxe = {}
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
if(typeof bpmjs=='undefined') bpmjs = {}
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
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	$s.push("StringTools::urlEncode");
	var $spos = $s.length;
	{
		var $tmp = encodeURIComponent(s);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.urlDecode = function(s) {
	$s.push("StringTools::urlDecode");
	var $spos = $s.length;
	{
		var $tmp = decodeURIComponent(s.split("+").join(" "));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlEscape = function(s) {
	$s.push("StringTools::htmlEscape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.htmlUnescape = function(s) {
	$s.push("StringTools::htmlUnescape");
	var $spos = $s.length;
	{
		var $tmp = s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.startsWith = function(s,start) {
	$s.push("StringTools::startsWith");
	var $spos = $s.length;
	{
		var $tmp = s.length >= start.length && s.substr(0,start.length) == start;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.endsWith = function(s,end) {
	$s.push("StringTools::endsWith");
	var $spos = $s.length;
	var elen = end.length;
	var slen = s.length;
	{
		var $tmp = slen >= elen && s.substr(slen - elen,elen) == end;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.isSpace = function(s,pos) {
	$s.push("StringTools::isSpace");
	var $spos = $s.length;
	var c = s.charCodeAt(pos);
	{
		var $tmp = c >= 9 && c <= 13 || c == 32;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.ltrim = function(s) {
	$s.push("StringTools::ltrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) {
		var $tmp = s.substr(r,l - r);
		$s.pop();
		return $tmp;
	}
	else {
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.rtrim = function(s) {
	$s.push("StringTools::rtrim");
	var $spos = $s.length;
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		{
			var $tmp = s.substr(0,l - r);
			$s.pop();
			return $tmp;
		}
	}
	else {
		{
			$s.pop();
			return s;
		}
	}
	$s.pop();
}
StringTools.trim = function(s) {
	$s.push("StringTools::trim");
	var $spos = $s.length;
	{
		var $tmp = StringTools.ltrim(StringTools.rtrim(s));
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.rpad = function(s,c,l) {
	$s.push("StringTools::rpad");
	var $spos = $s.length;
	var sl = s.length;
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			s += c.substr(0,l - sl);
			sl = l;
		}
		else {
			s += c;
			sl += cl;
		}
	}
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.lpad = function(s,c,l) {
	$s.push("StringTools::lpad");
	var $spos = $s.length;
	var ns = "";
	var sl = s.length;
	if(sl >= l) {
		$s.pop();
		return s;
	}
	var cl = c.length;
	while(sl < l) {
		if(l - sl < cl) {
			ns += c.substr(0,l - sl);
			sl = l;
		}
		else {
			ns += c;
			sl += cl;
		}
	}
	{
		var $tmp = ns + s;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.replace = function(s,sub,by) {
	$s.push("StringTools::replace");
	var $spos = $s.length;
	{
		var $tmp = s.split(sub).join(by);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.hex = function(n,digits) {
	$s.push("StringTools::hex");
	var $spos = $s.length;
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	{
		$s.pop();
		return s;
	}
	$s.pop();
}
StringTools.fastCodeAt = function(s,index) {
	$s.push("StringTools::fastCodeAt");
	var $spos = $s.length;
	{
		var $tmp = s.cca(index);
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.isEOF = function(c) {
	$s.push("StringTools::isEOF");
	var $spos = $s.length;
	{
		var $tmp = c != c;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
StringTools.prototype.__class__ = StringTools;
if(!haxe.unit) haxe.unit = {}
haxe.unit.TestResult = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestResult::new");
	var $spos = $s.length;
	this.m_tests = new List();
	this.success = true;
	$s.pop();
}}
haxe.unit.TestResult.__name__ = ["haxe","unit","TestResult"];
haxe.unit.TestResult.prototype.m_tests = null;
haxe.unit.TestResult.prototype.success = null;
haxe.unit.TestResult.prototype.add = function(t) {
	$s.push("haxe.unit.TestResult::add");
	var $spos = $s.length;
	this.m_tests.add(t);
	if(!t.success) this.success = false;
	$s.pop();
}
haxe.unit.TestResult.prototype.toString = function() {
	$s.push("haxe.unit.TestResult::toString");
	var $spos = $s.length;
	var buf = new StringBuf();
	var failures = 0;
	{ var $it0 = this.m_tests.iterator();
	while( $it0.hasNext() ) { var test = $it0.next();
	{
		if(test.success == false) {
			buf.b[buf.b.length] = "* ";
			buf.b[buf.b.length] = test.classname;
			buf.b[buf.b.length] = "::";
			buf.b[buf.b.length] = test.method;
			buf.b[buf.b.length] = "()";
			buf.b[buf.b.length] = "\n";
			buf.b[buf.b.length] = "ERR: ";
			if(test.posInfos != null) {
				buf.b[buf.b.length] = test.posInfos.fileName;
				buf.b[buf.b.length] = ":";
				buf.b[buf.b.length] = test.posInfos.lineNumber;
				buf.b[buf.b.length] = "(";
				buf.b[buf.b.length] = test.posInfos.className;
				buf.b[buf.b.length] = ".";
				buf.b[buf.b.length] = test.posInfos.methodName;
				buf.b[buf.b.length] = ") - ";
			}
			buf.b[buf.b.length] = test.error;
			buf.b[buf.b.length] = "\n";
			if(test.backtrace != null) {
				buf.b[buf.b.length] = test.backtrace;
				buf.b[buf.b.length] = "\n";
			}
			buf.b[buf.b.length] = "\n";
			failures++;
		}
	}
	}}
	buf.b[buf.b.length] = "\n";
	if(failures == 0) buf.b[buf.b.length] = "OK ";
	else buf.b[buf.b.length] = "FAILED ";
	buf.b[buf.b.length] = this.m_tests.length;
	buf.b[buf.b.length] = " tests, ";
	buf.b[buf.b.length] = failures;
	buf.b[buf.b.length] = " failed, ";
	buf.b[buf.b.length] = this.m_tests.length - failures;
	buf.b[buf.b.length] = " success";
	buf.b[buf.b.length] = "\n";
	{
		var $tmp = buf.b.join("");
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.unit.TestResult.prototype.__class__ = haxe.unit.TestResult;
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
haxe.Public = function() { }
haxe.Public.__name__ = ["haxe","Public"];
haxe.Public.prototype.__class__ = haxe.Public;
haxe.unit.TestCase = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestCase::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
haxe.unit.TestCase.__name__ = ["haxe","unit","TestCase"];
haxe.unit.TestCase.prototype.currentTest = null;
haxe.unit.TestCase.prototype.setup = function() {
	$s.push("haxe.unit.TestCase::setup");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.unit.TestCase.prototype.tearDown = function() {
	$s.push("haxe.unit.TestCase::tearDown");
	var $spos = $s.length;
	null;
	$s.pop();
}
haxe.unit.TestCase.prototype.print = function(v) {
	$s.push("haxe.unit.TestCase::print");
	var $spos = $s.length;
	haxe.unit.TestRunner.print(v);
	$s.pop();
}
haxe.unit.TestCase.prototype.assertTrue = function(b,c) {
	$s.push("haxe.unit.TestCase::assertTrue");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(b == false) {
		this.currentTest.success = false;
		this.currentTest.error = "expected true but was false";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.assertFalse = function(b,c) {
	$s.push("haxe.unit.TestCase::assertFalse");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(b == true) {
		this.currentTest.success = false;
		this.currentTest.error = "expected false but was true";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.assertEquals = function(expected,actual,c) {
	$s.push("haxe.unit.TestCase::assertEquals");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(actual != expected) {
		this.currentTest.success = false;
		this.currentTest.error = "expected '" + expected + "' but was '" + actual + "'";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
haxe.unit.TestCase.prototype.__class__ = haxe.unit.TestCase;
haxe.unit.TestCase.__interfaces__ = [haxe.Public];
SummerTestCase = function(p) { if( p === $_ ) return; {
	$s.push("SummerTestCase::new");
	var $spos = $s.length;
	haxe.unit.TestCase.call(this);
	$s.pop();
}}
SummerTestCase.__name__ = ["SummerTestCase"];
SummerTestCase.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) SummerTestCase.prototype[k] = haxe.unit.TestCase.prototype[k];
SummerTestCase.prototype.assertNotNull = function(b,c) {
	$s.push("SummerTestCase::assertNotNull");
	var $spos = $s.length;
	this.currentTest.done = true;
	if(b == null) {
		this.currentTest.success = false;
		this.currentTest.error = "expected not null";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
	$s.pop();
}
SummerTestCase.prototype.fail = function(message,c) {
	$s.push("SummerTestCase::fail");
	var $spos = $s.length;
	this.currentTest.done = true;
	this.currentTest.success = false;
	this.currentTest.error = message;
	this.currentTest.posInfos = c;
	throw this.currentTest;
	$s.pop();
}
SummerTestCase.prototype.noFail = function() {
	$s.push("SummerTestCase::noFail");
	var $spos = $s.length;
	this.currentTest.done = true;
	$s.pop();
}
SummerTestCase.prototype.__class__ = SummerTestCase;
bpmjs.TestFrontController = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestFrontController::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.TestFrontController.__name__ = ["bpmjs","TestFrontController"];
bpmjs.TestFrontController.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestFrontController.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestFrontController.receiveCount = null;
bpmjs.TestFrontController.prototype.setup = function() {
	$s.push("bpmjs.TestFrontController::setup");
	var $spos = $s.length;
	bpmjs.TestFrontController.receiveCount = 0;
	$s.pop();
}
bpmjs.TestFrontController.prototype.testWithEvent = function() {
	$s.push("bpmjs.TestFrontController::testWithEvent");
	var $spos = $s.length;
	var dispatchingObject = new bpmjs._TestFrontController.DispatchingObject();
	var receivingObject = new bpmjs._TestFrontController.ReceivingObject();
	var frontController = new bpmjs.DefaultFrontController();
	frontController.addDispatcher(dispatchingObject,"complete");
	frontController.addReceiver(receivingObject,"handleComplete",bpmjs.Event);
	dispatchingObject.doDispatch();
	this.assertEquals(1,bpmjs.TestFrontController.receiveCount,{ fileName : "TestFrontController.hx", lineNumber : 27, className : "bpmjs.TestFrontController", methodName : "testWithEvent"});
	$s.pop();
}
bpmjs.TestFrontController.prototype.testWithCustomEvent = function() {
	$s.push("bpmjs.TestFrontController::testWithCustomEvent");
	var $spos = $s.length;
	var dispatchingObject = new bpmjs._TestFrontController.CustomDispatchingObject();
	var receivingObject = new bpmjs._TestFrontController.CustomReceivingObject();
	var frontController = new bpmjs.DefaultFrontController();
	frontController.addDispatcher(dispatchingObject,bpmjs._TestFrontController.CustomEvent.COMPLETE);
	frontController.addReceiver(receivingObject,"handleComplete",bpmjs._TestFrontController.CustomEvent);
	dispatchingObject.doDispatch();
	this.assertEquals(1,bpmjs.TestFrontController.receiveCount,{ fileName : "TestFrontController.hx", lineNumber : 41, className : "bpmjs.TestFrontController", methodName : "testWithCustomEvent"});
	$s.pop();
}
bpmjs.TestFrontController.prototype.testNoDispatchWithCustomEvent = function() {
	$s.push("bpmjs.TestFrontController::testNoDispatchWithCustomEvent");
	var $spos = $s.length;
	var dispatchingObject = new bpmjs._TestFrontController.DispatchingObject();
	var receivingObject = new bpmjs._TestFrontController.CustomReceivingObject();
	var frontController = new bpmjs.DefaultFrontController();
	frontController.addDispatcher(dispatchingObject,"complete");
	frontController.addReceiver(receivingObject,"handleComplete",bpmjs._TestFrontController.CustomEvent);
	dispatchingObject.doDispatch();
	this.assertEquals(0,bpmjs.TestFrontController.receiveCount,{ fileName : "TestFrontController.hx", lineNumber : 55, className : "bpmjs.TestFrontController", methodName : "testNoDispatchWithCustomEvent"});
	$s.pop();
}
bpmjs.TestFrontController.prototype.__class__ = bpmjs.TestFrontController;
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
if(!bpmjs._TestFrontController) bpmjs._TestFrontController = {}
bpmjs._TestFrontController.DispatchingObject = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestFrontController.DispatchingObject::new");
	var $spos = $s.length;
	bpmjs.EventDispatcher.call(this);
	$s.pop();
}}
bpmjs._TestFrontController.DispatchingObject.__name__ = ["bpmjs","_TestFrontController","DispatchingObject"];
bpmjs._TestFrontController.DispatchingObject.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) bpmjs._TestFrontController.DispatchingObject.prototype[k] = bpmjs.EventDispatcher.prototype[k];
bpmjs._TestFrontController.DispatchingObject.prototype.doDispatch = function() {
	$s.push("bpmjs._TestFrontController.DispatchingObject::doDispatch");
	var $spos = $s.length;
	this.dispatchEvent(new bpmjs.Event("complete"));
	$s.pop();
}
bpmjs._TestFrontController.DispatchingObject.prototype.__class__ = bpmjs._TestFrontController.DispatchingObject;
bpmjs._TestFrontController.ReceivingObject = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestFrontController.ReceivingObject::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestFrontController.ReceivingObject.__name__ = ["bpmjs","_TestFrontController","ReceivingObject"];
bpmjs._TestFrontController.ReceivingObject.prototype.handleComplete = function(event) {
	$s.push("bpmjs._TestFrontController.ReceivingObject::handleComplete");
	var $spos = $s.length;
	bpmjs.TestFrontController.receiveCount++;
	$s.pop();
}
bpmjs._TestFrontController.ReceivingObject.prototype.__class__ = bpmjs._TestFrontController.ReceivingObject;
bpmjs._TestFrontController.CustomDispatchingObject = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestFrontController.CustomDispatchingObject::new");
	var $spos = $s.length;
	bpmjs.EventDispatcher.call(this);
	$s.pop();
}}
bpmjs._TestFrontController.CustomDispatchingObject.__name__ = ["bpmjs","_TestFrontController","CustomDispatchingObject"];
bpmjs._TestFrontController.CustomDispatchingObject.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) bpmjs._TestFrontController.CustomDispatchingObject.prototype[k] = bpmjs.EventDispatcher.prototype[k];
bpmjs._TestFrontController.CustomDispatchingObject.prototype.doDispatch = function() {
	$s.push("bpmjs._TestFrontController.CustomDispatchingObject::doDispatch");
	var $spos = $s.length;
	this.dispatchEvent(new bpmjs._TestFrontController.CustomEvent(bpmjs._TestFrontController.CustomEvent.COMPLETE));
	$s.pop();
}
bpmjs._TestFrontController.CustomDispatchingObject.prototype.__class__ = bpmjs._TestFrontController.CustomDispatchingObject;
bpmjs._TestFrontController.CustomReceivingObject = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestFrontController.CustomReceivingObject::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestFrontController.CustomReceivingObject.__name__ = ["bpmjs","_TestFrontController","CustomReceivingObject"];
bpmjs._TestFrontController.CustomReceivingObject.prototype.handleComplete = function(event) {
	$s.push("bpmjs._TestFrontController.CustomReceivingObject::handleComplete");
	var $spos = $s.length;
	bpmjs.TestFrontController.receiveCount++;
	$s.pop();
}
bpmjs._TestFrontController.CustomReceivingObject.prototype.__class__ = bpmjs._TestFrontController.CustomReceivingObject;
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
bpmjs._TestFrontController.CustomEvent = function(type) { if( type === $_ ) return; {
	$s.push("bpmjs._TestFrontController.CustomEvent::new");
	var $spos = $s.length;
	bpmjs.Event.call(this,type);
	$s.pop();
}}
bpmjs._TestFrontController.CustomEvent.__name__ = ["bpmjs","_TestFrontController","CustomEvent"];
bpmjs._TestFrontController.CustomEvent.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) bpmjs._TestFrontController.CustomEvent.prototype[k] = bpmjs.Event.prototype[k];
bpmjs._TestFrontController.CustomEvent.prototype.__class__ = bpmjs._TestFrontController.CustomEvent;
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
bpmjs.TestError = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestError::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.TestError.__name__ = ["bpmjs","TestError"];
bpmjs.TestError.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestError.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestError.prototype.testContextNotNull = function() {
	$s.push("bpmjs.TestError::testContextNotNull");
	var $spos = $s.length;
	try {
		var context = bpmjs.ContextBuilder.build(bpmjs._TestError.TestConfigWithoutRTTI);
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,String) ) {
			var error = $e0;
			{
				$e = [];
				while($s.length >= $spos) $e.unshift($s.pop());
				$s.push($e[0]);
				this.noFail();
				{
					$s.pop();
					return;
				}
			}
		} else throw($e0);
	}
	this.fail("Expected Error",{ fileName : "TestError.hx", lineNumber : 19, className : "bpmjs.TestError", methodName : "testContextNotNull"});
	$s.pop();
}
bpmjs.TestError.prototype.__class__ = bpmjs.TestError;
if(!bpmjs._TestError) bpmjs._TestError = {}
bpmjs._TestError.TestConfigWithoutRTTI = function() { }
bpmjs._TestError.TestConfigWithoutRTTI.__name__ = ["bpmjs","_TestError","TestConfigWithoutRTTI"];
bpmjs._TestError.TestConfigWithoutRTTI.prototype.__class__ = bpmjs._TestError.TestConfigWithoutRTTI;
haxe.rtti.Infos = function() { }
haxe.rtti.Infos.__name__ = ["haxe","rtti","Infos"];
haxe.rtti.Infos.prototype.__class__ = haxe.rtti.Infos;
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
bpmjs.TestComplete = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestComplete::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.TestComplete.__name__ = ["bpmjs","TestComplete"];
bpmjs.TestComplete.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestComplete.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestComplete.completeCount = null;
bpmjs.TestComplete.postCompleteCount = null;
bpmjs.TestComplete.prototype.setup = function() {
	$s.push("bpmjs.TestComplete::setup");
	var $spos = $s.length;
	bpmjs.TestComplete.completeCount = 0;
	bpmjs.TestComplete.postCompleteCount = 0;
	$s.pop();
}
bpmjs.TestComplete.prototype.testComplete = function() {
	$s.push("bpmjs.TestComplete::testComplete");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestComplete.TestConfigWithA);
	this.assertEquals(1,bpmjs.TestComplete.completeCount,{ fileName : "TestComplete.hx", lineNumber : 19, className : "bpmjs.TestComplete", methodName : "testComplete"});
	$s.pop();
}
bpmjs.TestComplete.prototype.testPostComplete = function() {
	$s.push("bpmjs.TestComplete::testPostComplete");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestComplete.TestConfigWithA);
	this.assertEquals(1,bpmjs.TestComplete.postCompleteCount,{ fileName : "TestComplete.hx", lineNumber : 25, className : "bpmjs.TestComplete", methodName : "testPostComplete"});
	$s.pop();
}
bpmjs.TestComplete.prototype.__class__ = bpmjs.TestComplete;
if(!bpmjs._TestComplete) bpmjs._TestComplete = {}
bpmjs._TestComplete.TestConfigWithA = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestComplete.TestConfigWithA::new");
	var $spos = $s.length;
	this.a = new bpmjs._TestComplete.A();
	$s.pop();
}}
bpmjs._TestComplete.TestConfigWithA.__name__ = ["bpmjs","_TestComplete","TestConfigWithA"];
bpmjs._TestComplete.TestConfigWithA.prototype.a = null;
bpmjs._TestComplete.TestConfigWithA.prototype.__class__ = bpmjs._TestComplete.TestConfigWithA;
bpmjs._TestComplete.TestConfigWithA.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestComplete.A = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestComplete.A::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestComplete.A.__name__ = ["bpmjs","_TestComplete","A"];
bpmjs._TestComplete.A.prototype.handleContextComplete = function() {
	$s.push("bpmjs._TestComplete.A::handleContextComplete");
	var $spos = $s.length;
	bpmjs.TestComplete.completeCount++;
	$s.pop();
}
bpmjs._TestComplete.A.prototype.handleContextPostComplete = function() {
	$s.push("bpmjs._TestComplete.A::handleContextPostComplete");
	var $spos = $s.length;
	bpmjs.TestComplete.postCompleteCount++;
	$s.pop();
}
bpmjs._TestComplete.A.prototype.__class__ = bpmjs._TestComplete.A;
bpmjs._TestComplete.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs.TestConfigure = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestConfigure::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.TestConfigure.__name__ = ["bpmjs","TestConfigure"];
bpmjs.TestConfigure.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestConfigure.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestConfigure.prototype.testObject = function() {
	$s.push("bpmjs.TestConfigure::testObject");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestConfigure.TestConfigWithA);
	bpmjs.ContextBuilder.configure(new bpmjs._TestConfigure.B());
	var b = context.getObjectByType(bpmjs._TestConfigure.B);
	this.assertNotNull(b,{ fileName : "TestConfigure.hx", lineNumber : 14, className : "bpmjs.TestConfigure", methodName : "testObject"});
	$s.pop();
}
bpmjs.TestConfigure.prototype.testInject = function() {
	$s.push("bpmjs.TestConfigure::testInject");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestConfigure.TestConfigWithA);
	bpmjs.ContextBuilder.configure(new bpmjs._TestConfigure.B());
	var b = context.getObjectByType(bpmjs._TestConfigure.B);
	this.assertNotNull(b.a,{ fileName : "TestConfigure.hx", lineNumber : 24, className : "bpmjs.TestConfigure", methodName : "testInject"});
	$s.pop();
}
bpmjs.TestConfigure.prototype.__class__ = bpmjs.TestConfigure;
if(!bpmjs._TestConfigure) bpmjs._TestConfigure = {}
bpmjs._TestConfigure.TestConfigWithA = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestConfigure.TestConfigWithA::new");
	var $spos = $s.length;
	this.a = new bpmjs._TestConfigure.A();
	$s.pop();
}}
bpmjs._TestConfigure.TestConfigWithA.__name__ = ["bpmjs","_TestConfigure","TestConfigWithA"];
bpmjs._TestConfigure.TestConfigWithA.prototype.a = null;
bpmjs._TestConfigure.TestConfigWithA.prototype.__class__ = bpmjs._TestConfigure.TestConfigWithA;
bpmjs._TestConfigure.TestConfigWithA.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestConfigure.A = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestConfigure.A::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestConfigure.A.__name__ = ["bpmjs","_TestConfigure","A"];
bpmjs._TestConfigure.A.prototype.b = null;
bpmjs._TestConfigure.A.prototype.__class__ = bpmjs._TestConfigure.A;
bpmjs._TestConfigure.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestConfigure.B = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestConfigure.B::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestConfigure.B.__name__ = ["bpmjs","_TestConfigure","B"];
bpmjs._TestConfigure.B.prototype.a = null;
bpmjs._TestConfigure.B.prototype.__class__ = bpmjs._TestConfigure.B;
bpmjs._TestConfigure.B.__interfaces__ = [haxe.rtti.Infos];
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
bpmjs.TestEvent = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestEvent::new");
	var $spos = $s.length;
	haxe.unit.TestCase.call(this);
	$s.pop();
}}
bpmjs.TestEvent.__name__ = ["bpmjs","TestEvent"];
bpmjs.TestEvent.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) bpmjs.TestEvent.prototype[k] = haxe.unit.TestCase.prototype[k];
bpmjs.TestEvent.prototype.completeCount = null;
bpmjs.TestEvent.prototype.complete2Count = null;
bpmjs.TestEvent.prototype.setup = function() {
	$s.push("bpmjs.TestEvent::setup");
	var $spos = $s.length;
	this.completeCount = 0;
	this.complete2Count = 0;
	$s.pop();
}
bpmjs.TestEvent.prototype.testSingleEvent = function() {
	$s.push("bpmjs.TestEvent::testSingleEvent");
	var $spos = $s.length;
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	this.assertEquals(1,this.completeCount,{ fileName : "TestEvent.hx", lineNumber : 24, className : "bpmjs.TestEvent", methodName : "testSingleEvent"});
	$s.pop();
}
bpmjs.TestEvent.prototype.testDoubleAddListener = function() {
	$s.push("bpmjs.TestEvent::testDoubleAddListener");
	var $spos = $s.length;
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	this.assertEquals(1,this.completeCount,{ fileName : "TestEvent.hx", lineNumber : 34, className : "bpmjs.TestEvent", methodName : "testDoubleAddListener"});
	$s.pop();
}
bpmjs.TestEvent.prototype.testDoubleDispatch = function() {
	$s.push("bpmjs.TestEvent::testDoubleDispatch");
	var $spos = $s.length;
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	this.assertEquals(2,this.completeCount,{ fileName : "TestEvent.hx", lineNumber : 44, className : "bpmjs.TestEvent", methodName : "testDoubleDispatch"});
	$s.pop();
}
bpmjs.TestEvent.prototype.testMyEvent = function() {
	$s.push("bpmjs.TestEvent::testMyEvent");
	var $spos = $s.length;
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener(bpmjs._TestEvent.MyEvent.COMPLETE2,$closure(this,"incrementComplete2Count"));
	eventDispatcher.dispatchEvent(new bpmjs._TestEvent.MyEvent(bpmjs._TestEvent.MyEvent.COMPLETE2));
	this.assertEquals(1,this.complete2Count,{ fileName : "TestEvent.hx", lineNumber : 53, className : "bpmjs.TestEvent", methodName : "testMyEvent"});
	$s.pop();
}
bpmjs.TestEvent.prototype.incrementCompleteCount = function(event) {
	$s.push("bpmjs.TestEvent::incrementCompleteCount");
	var $spos = $s.length;
	this.completeCount++;
	$s.pop();
}
bpmjs.TestEvent.prototype.incrementComplete2Count = function(event) {
	$s.push("bpmjs.TestEvent::incrementComplete2Count");
	var $spos = $s.length;
	this.complete2Count++;
	$s.pop();
}
bpmjs.TestEvent.prototype.__class__ = bpmjs.TestEvent;
if(!bpmjs._TestEvent) bpmjs._TestEvent = {}
bpmjs._TestEvent.MyEvent = function(type) { if( type === $_ ) return; {
	$s.push("bpmjs._TestEvent.MyEvent::new");
	var $spos = $s.length;
	bpmjs.Event.call(this,type);
	$s.pop();
}}
bpmjs._TestEvent.MyEvent.__name__ = ["bpmjs","_TestEvent","MyEvent"];
bpmjs._TestEvent.MyEvent.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) bpmjs._TestEvent.MyEvent.prototype[k] = bpmjs.Event.prototype[k];
bpmjs._TestEvent.MyEvent.prototype.__class__ = bpmjs._TestEvent.MyEvent;
bpmjs.ContextConfig = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.ContextConfig::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs.ContextConfig.__name__ = ["bpmjs","ContextConfig"];
bpmjs.ContextConfig.prototype.frontController = null;
bpmjs.ContextConfig.prototype.__class__ = bpmjs.ContextConfig;
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
haxe.unit.TestRunner = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestRunner::new");
	var $spos = $s.length;
	this.result = new haxe.unit.TestResult();
	this.cases = new List();
	$s.pop();
}}
haxe.unit.TestRunner.__name__ = ["haxe","unit","TestRunner"];
haxe.unit.TestRunner.print = function(v) {
	$s.push("haxe.unit.TestRunner::print");
	var $spos = $s.length;
	var msg = StringTools.htmlEscape(js.Boot.__string_rec(v,"")).split("\n").join("<br/>");
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("haxe:trace element not found");
	else d.innerHTML += msg;
	$s.pop();
}
haxe.unit.TestRunner.customTrace = function(v,p) {
	$s.push("haxe.unit.TestRunner::customTrace");
	var $spos = $s.length;
	haxe.unit.TestRunner.print(p.fileName + ":" + p.lineNumber + ": " + Std.string(v) + "\n");
	$s.pop();
}
haxe.unit.TestRunner.prototype.result = null;
haxe.unit.TestRunner.prototype.cases = null;
haxe.unit.TestRunner.prototype.add = function(c) {
	$s.push("haxe.unit.TestRunner::add");
	var $spos = $s.length;
	this.cases.add(c);
	$s.pop();
}
haxe.unit.TestRunner.prototype.run = function() {
	$s.push("haxe.unit.TestRunner::run");
	var $spos = $s.length;
	this.result = new haxe.unit.TestResult();
	{ var $it0 = this.cases.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		this.runCase(c);
	}
	}}
	haxe.unit.TestRunner.print(this.result.toString());
	{
		var $tmp = this.result.success;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
haxe.unit.TestRunner.prototype.runCase = function(t) {
	$s.push("haxe.unit.TestRunner::runCase");
	var $spos = $s.length;
	var old = $closure(haxe.Log,"trace");
	haxe.Log.trace = $closure(haxe.unit.TestRunner,"customTrace");
	var cl = Type.getClass(t);
	var fields = Type.getInstanceFields(cl);
	haxe.unit.TestRunner.print("Class: " + Type.getClassName(cl) + " ");
	{
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var fname = f;
			var field = Reflect.field(t,f);
			if(StringTools.startsWith(fname,"test") && Reflect.isFunction(field)) {
				t.currentTest = new haxe.unit.TestStatus();
				t.currentTest.classname = Type.getClassName(cl);
				t.currentTest.method = fname;
				t.setup();
				try {
					field.apply(t,new Array());
					if(t.currentTest.done) {
						t.currentTest.success = true;
						haxe.unit.TestRunner.print(".");
					}
					else {
						t.currentTest.success = false;
						t.currentTest.error = "(warning) no assert";
						haxe.unit.TestRunner.print("W");
					}
				}
				catch( $e0 ) {
					if( js.Boot.__instanceof($e0,haxe.unit.TestStatus) ) {
						var e = $e0;
						{
							$e = [];
							while($s.length >= $spos) $e.unshift($s.pop());
							$s.push($e[0]);
							haxe.unit.TestRunner.print("F");
							t.currentTest.backtrace = haxe.Stack.toString(haxe.Stack.exceptionStack());
						}
					} else {
						var e = $e0;
						{
							$e = [];
							while($s.length >= $spos) $e.unshift($s.pop());
							$s.push($e[0]);
							haxe.unit.TestRunner.print("E");
							if(e.message != null) {
								t.currentTest.error = "exception thrown : " + e + " [" + e.message + "]";
							}
							else {
								t.currentTest.error = "exception thrown : " + e;
							}
							t.currentTest.backtrace = haxe.Stack.toString(haxe.Stack.exceptionStack());
						}
					}
				}
				this.result.add(t.currentTest);
				t.tearDown();
			}
		}
	}
	haxe.unit.TestRunner.print("\n");
	haxe.Log.trace = old;
	$s.pop();
}
haxe.unit.TestRunner.prototype.__class__ = haxe.unit.TestRunner;
if(typeof js=='undefined') js = {}
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
if(!bpmjs.integration) bpmjs.integration = {}
bpmjs.integration.TestMessaging = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.integration.TestMessaging::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.integration.TestMessaging.__name__ = ["bpmjs","integration","TestMessaging"];
bpmjs.integration.TestMessaging.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.integration.TestMessaging.prototype[k] = SummerTestCase.prototype[k];
bpmjs.integration.TestMessaging.messageReceivedCount = null;
bpmjs.integration.TestMessaging.prototype.setup = function() {
	$s.push("bpmjs.integration.TestMessaging::setup");
	var $spos = $s.length;
	bpmjs.integration.TestMessaging.messageReceivedCount = 0;
	$s.pop();
}
bpmjs.integration.TestMessaging.prototype.testDefaultFrontController = function() {
	$s.push("bpmjs.integration.TestMessaging::testDefaultFrontController");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config);
	this.assertNotNull(context.contextConfig.frontController,{ fileName : "TestMessaging.hx", lineNumber : 21, className : "bpmjs.integration.TestMessaging", methodName : "testDefaultFrontController"});
	var frontControllerClass = Type.getClass(context.contextConfig.frontController);
	this.assertEquals(bpmjs.DefaultFrontController,frontControllerClass,{ fileName : "TestMessaging.hx", lineNumber : 24, className : "bpmjs.integration.TestMessaging", methodName : "testDefaultFrontController"});
	$s.pop();
}
bpmjs.integration.TestMessaging.prototype.testCustomFrontController = function() {
	$s.push("bpmjs.integration.TestMessaging::testCustomFrontController");
	var $spos = $s.length;
	var customContextConfig = new bpmjs.ContextConfig();
	customContextConfig.frontController = new bpmjs.integration._TestMessaging.MockFrontController();
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config,customContextConfig);
	this.assertNotNull(context.contextConfig.frontController,{ fileName : "TestMessaging.hx", lineNumber : 33, className : "bpmjs.integration.TestMessaging", methodName : "testCustomFrontController"});
	var frontControllerClass = Type.getClass(context.contextConfig.frontController);
	this.assertEquals(bpmjs.integration._TestMessaging.MockFrontController,frontControllerClass,{ fileName : "TestMessaging.hx", lineNumber : 36, className : "bpmjs.integration.TestMessaging", methodName : "testCustomFrontController"});
	$s.pop();
}
bpmjs.integration.TestMessaging.prototype.testDispatcherAdded = function() {
	$s.push("bpmjs.integration.TestMessaging::testDispatcherAdded");
	var $spos = $s.length;
	var mockFrontController = new bpmjs.integration._TestMessaging.MockFrontController();
	var customContextConfig = new bpmjs.ContextConfig();
	customContextConfig.frontController = mockFrontController;
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config,customContextConfig);
	this.assertEquals(1,mockFrontController.addDispatcherCount,{ fileName : "TestMessaging.hx", lineNumber : 48, className : "bpmjs.integration.TestMessaging", methodName : "testDispatcherAdded"});
	this.assertEquals(context.getObjectByType(bpmjs.integration._TestMessaging.A),mockFrontController.lastDispatcher,{ fileName : "TestMessaging.hx", lineNumber : 49, className : "bpmjs.integration.TestMessaging", methodName : "testDispatcherAdded"});
	this.assertEquals("start",mockFrontController.lastType,{ fileName : "TestMessaging.hx", lineNumber : 50, className : "bpmjs.integration.TestMessaging", methodName : "testDispatcherAdded"});
	$s.pop();
}
bpmjs.integration.TestMessaging.prototype.testReceiverAdded = function() {
	$s.push("bpmjs.integration.TestMessaging::testReceiverAdded");
	var $spos = $s.length;
	var mockFrontController = new bpmjs.integration._TestMessaging.MockFrontController();
	var customContextConfig = new bpmjs.ContextConfig();
	customContextConfig.frontController = mockFrontController;
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config,customContextConfig);
	this.assertEquals(1,mockFrontController.addReceiverCount,{ fileName : "TestMessaging.hx", lineNumber : 62, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
	this.assertEquals(context.getObjectByType(bpmjs.integration._TestMessaging.B),mockFrontController.lastReceivingObject,{ fileName : "TestMessaging.hx", lineNumber : 63, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
	this.assertEquals("handleStart",mockFrontController.lastMethodName,{ fileName : "TestMessaging.hx", lineNumber : 64, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
	this.assertEquals(bpmjs.Event,mockFrontController.lastEventClass,{ fileName : "TestMessaging.hx", lineNumber : 65, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
	$s.pop();
}
bpmjs.integration.TestMessaging.prototype.testMessageReceived = function() {
	$s.push("bpmjs.integration.TestMessaging::testMessageReceived");
	var $spos = $s.length;
	bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config);
	this.assertEquals(1,bpmjs.integration.TestMessaging.messageReceivedCount,{ fileName : "TestMessaging.hx", lineNumber : 71, className : "bpmjs.integration.TestMessaging", methodName : "testMessageReceived"});
	$s.pop();
}
bpmjs.integration.TestMessaging.prototype.__class__ = bpmjs.integration.TestMessaging;
if(!bpmjs.integration._TestMessaging) bpmjs.integration._TestMessaging = {}
bpmjs.integration._TestMessaging.MockFrontController = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.integration._TestMessaging.MockFrontController::new");
	var $spos = $s.length;
	this.addDispatcherCount = 0;
	this.addReceiverCount = 0;
	$s.pop();
}}
bpmjs.integration._TestMessaging.MockFrontController.__name__ = ["bpmjs","integration","_TestMessaging","MockFrontController"];
bpmjs.integration._TestMessaging.MockFrontController.prototype.addDispatcherCount = null;
bpmjs.integration._TestMessaging.MockFrontController.prototype.lastDispatcher = null;
bpmjs.integration._TestMessaging.MockFrontController.prototype.lastType = null;
bpmjs.integration._TestMessaging.MockFrontController.prototype.addReceiverCount = null;
bpmjs.integration._TestMessaging.MockFrontController.prototype.lastReceivingObject = null;
bpmjs.integration._TestMessaging.MockFrontController.prototype.lastMethodName = null;
bpmjs.integration._TestMessaging.MockFrontController.prototype.lastEventClass = null;
bpmjs.integration._TestMessaging.MockFrontController.prototype.addDispatcher = function(dispatcher,type) {
	$s.push("bpmjs.integration._TestMessaging.MockFrontController::addDispatcher");
	var $spos = $s.length;
	this.addDispatcherCount++;
	this.lastDispatcher = dispatcher;
	this.lastType = type;
	$s.pop();
}
bpmjs.integration._TestMessaging.MockFrontController.prototype.addReceiver = function(receivingObject,methodName,eventClass) {
	$s.push("bpmjs.integration._TestMessaging.MockFrontController::addReceiver");
	var $spos = $s.length;
	this.addReceiverCount++;
	this.lastReceivingObject = receivingObject;
	this.lastMethodName = methodName;
	this.lastEventClass = eventClass;
	$s.pop();
}
bpmjs.integration._TestMessaging.MockFrontController.prototype.__class__ = bpmjs.integration._TestMessaging.MockFrontController;
bpmjs.integration._TestMessaging.MockFrontController.__interfaces__ = [bpmjs.FrontController];
bpmjs.integration._TestMessaging.Config = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.integration._TestMessaging.Config::new");
	var $spos = $s.length;
	this.a = new bpmjs.integration._TestMessaging.A();
	this.b = new bpmjs.integration._TestMessaging.B();
	$s.pop();
}}
bpmjs.integration._TestMessaging.Config.__name__ = ["bpmjs","integration","_TestMessaging","Config"];
bpmjs.integration._TestMessaging.Config.prototype.a = null;
bpmjs.integration._TestMessaging.Config.prototype.b = null;
bpmjs.integration._TestMessaging.Config.prototype.__class__ = bpmjs.integration._TestMessaging.Config;
bpmjs.integration._TestMessaging.Config.__interfaces__ = [haxe.rtti.Infos];
bpmjs.integration._TestMessaging.A = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.integration._TestMessaging.A::new");
	var $spos = $s.length;
	bpmjs.EventDispatcher.call(this);
	$s.pop();
}}
bpmjs.integration._TestMessaging.A.__name__ = ["bpmjs","integration","_TestMessaging","A"];
bpmjs.integration._TestMessaging.A.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) bpmjs.integration._TestMessaging.A.prototype[k] = bpmjs.EventDispatcher.prototype[k];
bpmjs.integration._TestMessaging.A.prototype.handleComplete = function() {
	$s.push("bpmjs.integration._TestMessaging.A::handleComplete");
	var $spos = $s.length;
	this.dispatchEvent(new bpmjs.Event("start"));
	$s.pop();
}
bpmjs.integration._TestMessaging.A.prototype.__class__ = bpmjs.integration._TestMessaging.A;
bpmjs.integration._TestMessaging.B = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.integration._TestMessaging.B::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs.integration._TestMessaging.B.__name__ = ["bpmjs","integration","_TestMessaging","B"];
bpmjs.integration._TestMessaging.B.prototype.handleStart = function(event) {
	$s.push("bpmjs.integration._TestMessaging.B::handleStart");
	var $spos = $s.length;
	bpmjs.integration.TestMessaging.messageReceivedCount++;
	$s.pop();
}
bpmjs.integration._TestMessaging.B.prototype.__class__ = bpmjs.integration._TestMessaging.B;
bpmjs.integration._TestMessaging.B.__interfaces__ = [haxe.rtti.Infos];
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
bpmjs.TestDynamic = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestDynamic::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.TestDynamic.__name__ = ["bpmjs","TestDynamic"];
bpmjs.TestDynamic.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestDynamic.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestDynamic.prototype.testObjects = function() {
	$s.push("bpmjs.TestDynamic::testObjects");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs);
	this.assertEquals(3,bpmjs.TestDynamic.bCount,{ fileName : "TestDynamic.hx", lineNumber : 12, className : "bpmjs.TestDynamic", methodName : "testObjects"});
	$s.pop();
}
bpmjs.TestDynamic.prototype.testListInject = function() {
	$s.push("bpmjs.TestDynamic::testListInject");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs);
	var a = context.getObjectByType(bpmjs._TestDynamic.A);
	this.assertEquals(3,a.bList.length,{ fileName : "TestDynamic.hx", lineNumber : 20, className : "bpmjs.TestDynamic", methodName : "testListInject"});
	$s.pop();
}
bpmjs.TestDynamic.prototype.__class__ = bpmjs.TestDynamic;
if(!bpmjs._TestDynamic) bpmjs._TestDynamic = {}
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs::new");
	var $spos = $s.length;
	this.a = new bpmjs._TestDynamic.A();
	this.bList = new Array();
	this.bList.push(new bpmjs._TestDynamic.B());
	this.bList.push(new bpmjs._TestDynamic.B());
	this.bList.push(new bpmjs._TestDynamic.B());
	$s.pop();
}}
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.__name__ = ["bpmjs","_TestDynamic","TestConfigWithAAndDyanmicBs"];
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.prototype.a = null;
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.prototype.bList = null;
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.prototype.__class__ = bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs;
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestDynamic.A = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestDynamic.A::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestDynamic.A.__name__ = ["bpmjs","_TestDynamic","A"];
bpmjs._TestDynamic.A.prototype.bList = null;
bpmjs._TestDynamic.A.prototype.__class__ = bpmjs._TestDynamic.A;
bpmjs._TestDynamic.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestDynamic.B = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestDynamic.B::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestDynamic.B.__name__ = ["bpmjs","_TestDynamic","B"];
bpmjs._TestDynamic.B.prototype.a = null;
bpmjs._TestDynamic.B.prototype.handleComplete = function() {
	$s.push("bpmjs._TestDynamic.B::handleComplete");
	var $spos = $s.length;
	if(this.a != null) bpmjs.TestDynamic.bCount++;
	$s.pop();
}
bpmjs._TestDynamic.B.prototype.__class__ = bpmjs._TestDynamic.B;
bpmjs._TestDynamic.B.__interfaces__ = [haxe.rtti.Infos];
bpmjs.TestGetObject = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestGetObject::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.TestGetObject.__name__ = ["bpmjs","TestGetObject"];
bpmjs.TestGetObject.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestGetObject.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestGetObject.prototype.testGetObjectByName = function() {
	$s.push("bpmjs.TestGetObject::testGetObjectByName");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithA);
	var a = context.getObjectByName("a");
	this.assertNotNull(a,{ fileName : "TestGetObject.hx", lineNumber : 12, className : "bpmjs.TestGetObject", methodName : "testGetObjectByName"});
	$s.pop();
}
bpmjs.TestGetObject.prototype.testGetObjectByNameValidate = function() {
	$s.push("bpmjs.TestGetObject::testGetObjectByNameValidate");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithA);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a,bpmjs._TestGetObject.A),{ fileName : "TestGetObject.hx", lineNumber : 19, className : "bpmjs.TestGetObject", methodName : "testGetObjectByNameValidate"});
	this.assertTrue(a.getValue(),{ fileName : "TestGetObject.hx", lineNumber : 20, className : "bpmjs.TestGetObject", methodName : "testGetObjectByNameValidate"});
	$s.pop();
}
bpmjs.TestGetObject.prototype.testGetObjectByType = function() {
	$s.push("bpmjs.TestGetObject::testGetObjectByType");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithA);
	var a = context.getObjectByType(bpmjs._TestGetObject.A);
	this.assertNotNull(a,{ fileName : "TestGetObject.hx", lineNumber : 27, className : "bpmjs.TestGetObject", methodName : "testGetObjectByType"});
	$s.pop();
}
bpmjs.TestGetObject.prototype.testGetObjectAAndBByName = function() {
	$s.push("bpmjs.TestGetObject::testGetObjectAAndBByName");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a,bpmjs._TestGetObject.A),{ fileName : "TestGetObject.hx", lineNumber : 35, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByName"});
	var b = context.getObjectByName("b");
	this.assertTrue(Std["is"](b,bpmjs._TestGetObject.B),{ fileName : "TestGetObject.hx", lineNumber : 38, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByName"});
	$s.pop();
}
bpmjs.TestGetObject.prototype.testGetObjectAAndBByType = function() {
	$s.push("bpmjs.TestGetObject::testGetObjectAAndBByType");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithAAndB);
	var a = context.getObjectByType(bpmjs._TestGetObject.A);
	this.assertTrue(Std["is"](a,bpmjs._TestGetObject.A),{ fileName : "TestGetObject.hx", lineNumber : 46, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByType"});
	var b = context.getObjectByType(bpmjs._TestGetObject.B);
	this.assertTrue(Std["is"](b,bpmjs._TestGetObject.B),{ fileName : "TestGetObject.hx", lineNumber : 49, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByType"});
	$s.pop();
}
bpmjs.TestGetObject.prototype.__class__ = bpmjs.TestGetObject;
if(!bpmjs._TestGetObject) bpmjs._TestGetObject = {}
bpmjs._TestGetObject.TestConfigWithA = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestGetObject.TestConfigWithA::new");
	var $spos = $s.length;
	this.a = new bpmjs._TestGetObject.A();
	$s.pop();
}}
bpmjs._TestGetObject.TestConfigWithA.__name__ = ["bpmjs","_TestGetObject","TestConfigWithA"];
bpmjs._TestGetObject.TestConfigWithA.prototype.a = null;
bpmjs._TestGetObject.TestConfigWithA.prototype.__class__ = bpmjs._TestGetObject.TestConfigWithA;
bpmjs._TestGetObject.TestConfigWithA.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestGetObject.A = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestGetObject.A::new");
	var $spos = $s.length;
	this.value = true;
	$s.pop();
}}
bpmjs._TestGetObject.A.__name__ = ["bpmjs","_TestGetObject","A"];
bpmjs._TestGetObject.A.prototype.value = null;
bpmjs._TestGetObject.A.prototype.getValue = function() {
	$s.push("bpmjs._TestGetObject.A::getValue");
	var $spos = $s.length;
	{
		var $tmp = this.value;
		$s.pop();
		return $tmp;
	}
	$s.pop();
}
bpmjs._TestGetObject.A.prototype.__class__ = bpmjs._TestGetObject.A;
bpmjs._TestGetObject.TestConfigWithAAndB = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestGetObject.TestConfigWithAAndB::new");
	var $spos = $s.length;
	this.a = new bpmjs._TestGetObject.A();
	this.b = new bpmjs._TestGetObject.B();
	$s.pop();
}}
bpmjs._TestGetObject.TestConfigWithAAndB.__name__ = ["bpmjs","_TestGetObject","TestConfigWithAAndB"];
bpmjs._TestGetObject.TestConfigWithAAndB.prototype.a = null;
bpmjs._TestGetObject.TestConfigWithAAndB.prototype.b = null;
bpmjs._TestGetObject.TestConfigWithAAndB.prototype.__class__ = bpmjs._TestGetObject.TestConfigWithAAndB;
bpmjs._TestGetObject.TestConfigWithAAndB.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestGetObject.B = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestGetObject.B::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestGetObject.B.__name__ = ["bpmjs","_TestGetObject","B"];
bpmjs._TestGetObject.B.prototype.__class__ = bpmjs._TestGetObject.B;
bpmjs.TestInject = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs.TestInject::new");
	var $spos = $s.length;
	SummerTestCase.call(this);
	$s.pop();
}}
bpmjs.TestInject.__name__ = ["bpmjs","TestInject"];
bpmjs.TestInject.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestInject.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestInject.prototype.testInject = function() {
	$s.push("bpmjs.TestInject::testInject");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestInject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a.b,bpmjs._TestInject.B),{ fileName : "TestInject.hx", lineNumber : 12, className : "bpmjs.TestInject", methodName : "testInject"});
	$s.pop();
}
bpmjs.TestInject.prototype.testInjectContext = function() {
	$s.push("bpmjs.TestInject::testInjectContext");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestInject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertEquals(context,a.context,{ fileName : "TestInject.hx", lineNumber : 20, className : "bpmjs.TestInject", methodName : "testInjectContext"});
	$s.pop();
}
bpmjs.TestInject.prototype.testCircularInject = function() {
	$s.push("bpmjs.TestInject::testCircularInject");
	var $spos = $s.length;
	var context = bpmjs.ContextBuilder.build(bpmjs._TestInject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a.b,bpmjs._TestInject.B),{ fileName : "TestInject.hx", lineNumber : 28, className : "bpmjs.TestInject", methodName : "testCircularInject"});
	var b = context.getObjectByName("b");
	this.assertTrue(Std["is"](b.a,bpmjs._TestInject.A),{ fileName : "TestInject.hx", lineNumber : 31, className : "bpmjs.TestInject", methodName : "testCircularInject"});
	$s.pop();
}
bpmjs.TestInject.prototype.__class__ = bpmjs.TestInject;
if(!bpmjs._TestInject) bpmjs._TestInject = {}
bpmjs._TestInject.TestConfigWithAAndB = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestInject.TestConfigWithAAndB::new");
	var $spos = $s.length;
	this.a = new bpmjs._TestInject.A();
	this.b = new bpmjs._TestInject.B();
	$s.pop();
}}
bpmjs._TestInject.TestConfigWithAAndB.__name__ = ["bpmjs","_TestInject","TestConfigWithAAndB"];
bpmjs._TestInject.TestConfigWithAAndB.prototype.a = null;
bpmjs._TestInject.TestConfigWithAAndB.prototype.b = null;
bpmjs._TestInject.TestConfigWithAAndB.prototype.__class__ = bpmjs._TestInject.TestConfigWithAAndB;
bpmjs._TestInject.TestConfigWithAAndB.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestInject.A = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestInject.A::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestInject.A.__name__ = ["bpmjs","_TestInject","A"];
bpmjs._TestInject.A.prototype.b = null;
bpmjs._TestInject.A.prototype.context = null;
bpmjs._TestInject.A.prototype.__class__ = bpmjs._TestInject.A;
bpmjs._TestInject.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestInject.B = function(p) { if( p === $_ ) return; {
	$s.push("bpmjs._TestInject.B::new");
	var $spos = $s.length;
	null;
	$s.pop();
}}
bpmjs._TestInject.B.__name__ = ["bpmjs","_TestInject","B"];
bpmjs._TestInject.B.prototype.a = null;
bpmjs._TestInject.B.prototype.__class__ = bpmjs._TestInject.B;
bpmjs._TestInject.B.__interfaces__ = [haxe.rtti.Infos];
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
haxe.unit.TestStatus = function(p) { if( p === $_ ) return; {
	$s.push("haxe.unit.TestStatus::new");
	var $spos = $s.length;
	this.done = false;
	this.success = false;
	$s.pop();
}}
haxe.unit.TestStatus.__name__ = ["haxe","unit","TestStatus"];
haxe.unit.TestStatus.prototype.done = null;
haxe.unit.TestStatus.prototype.success = null;
haxe.unit.TestStatus.prototype.error = null;
haxe.unit.TestStatus.prototype.method = null;
haxe.unit.TestStatus.prototype.classname = null;
haxe.unit.TestStatus.prototype.posInfos = null;
haxe.unit.TestStatus.prototype.backtrace = null;
haxe.unit.TestStatus.prototype.__class__ = haxe.unit.TestStatus;
TestRunner = function(p) { if( p === $_ ) return; {
	$s.push("TestRunner::new");
	var $spos = $s.length;
	this.runner = new haxe.unit.TestRunner();
	this.addBPMJSTests();
	this.addContextBuilderTests();
	this.addFrontControllerTests();
	this.addIntegrationTests();
	var startTime = Date.now().getTime();
	this.runner.run();
	haxe.Log.trace("Time for testing... " + (Date.now().getTime() - startTime) + "ms",{ fileName : "TestRunner.hx", lineNumber : 35, className : "TestRunner", methodName : "new"});
	$s.pop();
}}
TestRunner.__name__ = ["TestRunner"];
TestRunner.main = function() {
	$s.push("TestRunner::main");
	var $spos = $s.length;
	var runner = new TestRunner();
	$s.pop();
}
TestRunner.prototype.runner = null;
TestRunner.prototype.addBPMJSTests = function() {
	$s.push("TestRunner::addBPMJSTests");
	var $spos = $s.length;
	this.runner.add(new bpmjs.TestEvent());
	$s.pop();
}
TestRunner.prototype.addContextBuilderTests = function() {
	$s.push("TestRunner::addContextBuilderTests");
	var $spos = $s.length;
	this.runner.add(new bpmjs.TestGetObject());
	this.runner.add(new bpmjs.TestInject());
	this.runner.add(new bpmjs.TestComplete());
	this.runner.add(new bpmjs.TestError());
	this.runner.add(new bpmjs.TestConfigure());
	this.runner.add(new bpmjs.TestDynamic());
	$s.pop();
}
TestRunner.prototype.addFrontControllerTests = function() {
	$s.push("TestRunner::addFrontControllerTests");
	var $spos = $s.length;
	this.runner.add(new bpmjs.TestFrontController());
	$s.pop();
}
TestRunner.prototype.addIntegrationTests = function() {
	$s.push("TestRunner::addIntegrationTests");
	var $spos = $s.length;
	this.runner.add(new bpmjs.integration.TestMessaging());
	$s.pop();
}
TestRunner.prototype.__class__ = TestRunner;
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
$_ = {}
js.Boot.__res = {}
$s = [];
$e = [];
js.Boot.__init();
{
	Xml.Element = "element";
	Xml.PCData = "pcdata";
	Xml.CData = "cdata";
	Xml.Comment = "comment";
	Xml.DocType = "doctype";
	Xml.Prolog = "prolog";
	Xml.Document = "document";
}
{
	var d = Date;
	d.now = function() {
		$s.push("Hash::toString");
		var $spos = $s.length;
		{
			var $tmp = new Date();
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	d.fromTime = function(t) {
		$s.push("Hash::toString");
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
		$s.push("Hash::toString");
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
		$s.push("Hash::toString");
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
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		$s.push("Hash::toString");
		var $spos = $s.length;
		{
			var $tmp = isFinite(i);
			$s.pop();
			return $tmp;
		}
		$s.pop();
	}
	Math.isNaN = function(i) {
		$s.push("Hash::toString");
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
bpmjs.Event.COMPLETE = "complete";
bpmjs.Event.START = "start";
bpmjs._TestFrontController.CustomEvent.COMPLETE = "complete";
bpmjs._TestComplete.TestConfigWithA.__rtti = "<class path=\"bpmjs._TestComplete.TestConfigWithA\" params=\"\" private=\"1\" module=\"bpmjs.TestComplete\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestComplete.A\"/></a>\n\t<new public=\"1\" set=\"method\" line=\"33\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestComplete.A.__meta__ = { fields : { handleContextComplete : { Complete : null}, handleContextPostComplete : { PostComplete : null}}};
bpmjs._TestComplete.A.__rtti = "<class path=\"bpmjs._TestComplete.A\" params=\"\" private=\"1\" module=\"bpmjs.TestComplete\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<handleContextComplete public=\"1\" set=\"method\" line=\"46\"><f a=\"\"><e path=\"Void\"/></f></handleContextComplete>\n\t<handleContextPostComplete public=\"1\" set=\"method\" line=\"52\"><f a=\"\"><e path=\"Void\"/></f></handleContextPostComplete>\n\t<new public=\"1\" set=\"method\" line=\"41\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestConfigure.TestConfigWithA.__rtti = "<class path=\"bpmjs._TestConfigure.TestConfigWithA\" params=\"\" private=\"1\" module=\"bpmjs.TestConfigure\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestConfigure.A\"/></a>\n\t<new public=\"1\" set=\"method\" line=\"32\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestConfigure.A.__meta__ = { fields : { b : { Inject : null}}};
bpmjs._TestConfigure.A.__rtti = "<class path=\"bpmjs._TestConfigure.A\" params=\"\" private=\"1\" module=\"bpmjs.TestConfigure\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<b public=\"1\"><c path=\"bpmjs._TestConfigure.B\"/></b>\n\t<new public=\"1\" set=\"method\" line=\"44\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestConfigure.B.__meta__ = { fields : { a : { Inject : null}}};
bpmjs._TestConfigure.B.__rtti = "<class path=\"bpmjs._TestConfigure.B\" params=\"\" private=\"1\" module=\"bpmjs.TestConfigure\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestConfigure.A\"/></a>\n\t<new public=\"1\" set=\"method\" line=\"55\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestEvent.MyEvent.COMPLETE2 = "complete2";
js.Lib.onerror = null;
bpmjs.integration._TestMessaging.Config.__rtti = "<class path=\"bpmjs.integration._TestMessaging.Config\" params=\"\" private=\"1\" module=\"bpmjs.integration.TestMessaging\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs.integration._TestMessaging.A\"/></a>\n\t<b public=\"1\"><c path=\"bpmjs.integration._TestMessaging.B\"/></b>\n\t<new public=\"1\" set=\"method\" line=\"115\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs.integration._TestMessaging.A.__meta__ = { obj : { ManagedEvents : ["start"]}, fields : { handleComplete : { Complete : null}}};
bpmjs.integration._TestMessaging.B.__meta__ = { fields : { handleStart : { MessageHandler : null}}};
bpmjs.integration._TestMessaging.B.__rtti = "<class path=\"bpmjs.integration._TestMessaging.B\" params=\"\" private=\"1\" module=\"bpmjs.integration.TestMessaging\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<handleStart public=\"1\" set=\"method\" line=\"140\"><f a=\"event\">\n\t<c path=\"bpmjs.Event\"/>\n\t<e path=\"Void\"/>\n</f></handleStart>\n\t<new public=\"1\" set=\"method\" line=\"134\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs.TestDynamic.bCount = 0;
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.__rtti = "<class path=\"bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs\" params=\"\" private=\"1\" module=\"bpmjs.TestDynamic\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestDynamic.A\"/></a>\n\t<bList public=\"1\"><c path=\"Array\"><c path=\"bpmjs._TestDynamic.B\"/></c></bList>\n\t<new public=\"1\" set=\"method\" line=\"30\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestDynamic.A.__meta__ = { fields : { bList : { Inject : null}}};
bpmjs._TestDynamic.A.__rtti = "<class path=\"bpmjs._TestDynamic.A\" params=\"\" private=\"1\" module=\"bpmjs.TestDynamic\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<bList public=\"1\"><c path=\"Array\"><c path=\"bpmjs._TestDynamic.B\"/></c></bList>\n\t<new public=\"1\" set=\"method\" line=\"47\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestDynamic.B.__meta__ = { fields : { a : { Inject : null}, handleComplete : { Complete : null}}};
bpmjs._TestDynamic.B.__rtti = "<class path=\"bpmjs._TestDynamic.B\" params=\"\" private=\"1\" module=\"bpmjs.TestDynamic\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestDynamic.A\"/></a>\n\t<handleComplete public=\"1\" set=\"method\" line=\"63\"><f a=\"\"><e path=\"Void\"/></f></handleComplete>\n\t<new public=\"1\" set=\"method\" line=\"58\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestGetObject.TestConfigWithA.__rtti = "<class path=\"bpmjs._TestGetObject.TestConfigWithA\" params=\"\" private=\"1\" module=\"bpmjs.TestGetObject\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestGetObject.A\"/></a>\n\t<new public=\"1\" set=\"method\" line=\"57\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestGetObject.TestConfigWithAAndB.__rtti = "<class path=\"bpmjs._TestGetObject.TestConfigWithAAndB\" params=\"\" private=\"1\" module=\"bpmjs.TestGetObject\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestGetObject.A\"/></a>\n\t<b public=\"1\"><c path=\"bpmjs._TestGetObject.B\"/></b>\n\t<new public=\"1\" set=\"method\" line=\"84\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestInject.TestConfigWithAAndB.__rtti = "<class path=\"bpmjs._TestInject.TestConfigWithAAndB\" params=\"\" private=\"1\" module=\"bpmjs.TestInject\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestInject.A\"/></a>\n\t<b public=\"1\"><c path=\"bpmjs._TestInject.B\"/></b>\n\t<new public=\"1\" set=\"method\" line=\"40\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestInject.A.__meta__ = { fields : { b : { Inject : null}, context : { Inject : null}}};
bpmjs._TestInject.A.__rtti = "<class path=\"bpmjs._TestInject.A\" params=\"\" private=\"1\" module=\"bpmjs.TestInject\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<b public=\"1\"><c path=\"bpmjs._TestInject.B\"/></b>\n\t<context public=\"1\"><c path=\"bpmjs.Context\"/></context>\n\t<new public=\"1\" set=\"method\" line=\"56\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
bpmjs._TestInject.B.__meta__ = { fields : { a : { Inject : null}}};
bpmjs._TestInject.B.__rtti = "<class path=\"bpmjs._TestInject.B\" params=\"\" private=\"1\" module=\"bpmjs.TestInject\">\n\t<implements path=\"haxe.rtti.Infos\"/>\n\t<a public=\"1\"><c path=\"bpmjs._TestInject.A\"/></a>\n\t<new public=\"1\" set=\"method\" line=\"67\"><f a=\"\"><e path=\"Void\"/></f></new>\n</class>";
TestRunner.main()