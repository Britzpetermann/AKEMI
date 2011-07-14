$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof haxe=='undefined') haxe = {}
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
if(typeof bpmjs=='undefined') bpmjs = {}
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
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) {
		r++;
	}
	if(r > 0) return s.substr(r,l - r);
	else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) {
		r++;
	}
	if(r > 0) {
		return s.substr(0,l - r);
	}
	else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
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
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
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
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
if(!haxe.unit) haxe.unit = {}
haxe.unit.TestResult = function(p) { if( p === $_ ) return; {
	this.m_tests = new List();
	this.success = true;
}}
haxe.unit.TestResult.__name__ = ["haxe","unit","TestResult"];
haxe.unit.TestResult.prototype.m_tests = null;
haxe.unit.TestResult.prototype.success = null;
haxe.unit.TestResult.prototype.add = function(t) {
	this.m_tests.add(t);
	if(!t.success) this.success = false;
}
haxe.unit.TestResult.prototype.toString = function() {
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
	return buf.b.join("");
}
haxe.unit.TestResult.prototype.__class__ = haxe.unit.TestResult;
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
haxe.Public = function() { }
haxe.Public.__name__ = ["haxe","Public"];
haxe.Public.prototype.__class__ = haxe.Public;
haxe.unit.TestCase = function(p) { if( p === $_ ) return; {
	null;
}}
haxe.unit.TestCase.__name__ = ["haxe","unit","TestCase"];
haxe.unit.TestCase.prototype.currentTest = null;
haxe.unit.TestCase.prototype.setup = function() {
	null;
}
haxe.unit.TestCase.prototype.tearDown = function() {
	null;
}
haxe.unit.TestCase.prototype.print = function(v) {
	haxe.unit.TestRunner.print(v);
}
haxe.unit.TestCase.prototype.assertTrue = function(b,c) {
	this.currentTest.done = true;
	if(b == false) {
		this.currentTest.success = false;
		this.currentTest.error = "expected true but was false";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
}
haxe.unit.TestCase.prototype.assertFalse = function(b,c) {
	this.currentTest.done = true;
	if(b == true) {
		this.currentTest.success = false;
		this.currentTest.error = "expected false but was true";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
}
haxe.unit.TestCase.prototype.assertEquals = function(expected,actual,c) {
	this.currentTest.done = true;
	if(actual != expected) {
		this.currentTest.success = false;
		this.currentTest.error = "expected '" + expected + "' but was '" + actual + "'";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
}
haxe.unit.TestCase.prototype.__class__ = haxe.unit.TestCase;
haxe.unit.TestCase.__interfaces__ = [haxe.Public];
SummerTestCase = function(p) { if( p === $_ ) return; {
	haxe.unit.TestCase.call(this);
}}
SummerTestCase.__name__ = ["SummerTestCase"];
SummerTestCase.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) SummerTestCase.prototype[k] = haxe.unit.TestCase.prototype[k];
SummerTestCase.prototype.assertNotNull = function(b,c) {
	this.currentTest.done = true;
	if(b == null) {
		this.currentTest.success = false;
		this.currentTest.error = "expected not null";
		this.currentTest.posInfos = c;
		throw this.currentTest;
	}
}
SummerTestCase.prototype.fail = function(message,c) {
	this.currentTest.done = true;
	this.currentTest.success = false;
	this.currentTest.error = message;
	this.currentTest.posInfos = c;
	throw this.currentTest;
}
SummerTestCase.prototype.noFail = function() {
	this.currentTest.done = true;
}
SummerTestCase.prototype.__class__ = SummerTestCase;
bpmjs.TestFrontController = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.TestFrontController.__name__ = ["bpmjs","TestFrontController"];
bpmjs.TestFrontController.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestFrontController.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestFrontController.receiveCount = null;
bpmjs.TestFrontController.prototype.setup = function() {
	bpmjs.TestFrontController.receiveCount = 0;
}
bpmjs.TestFrontController.prototype.testWithEvent = function() {
	var dispatchingObject = new bpmjs._TestFrontController.DispatchingObject();
	var receivingObject = new bpmjs._TestFrontController.ReceivingObject();
	var frontController = new bpmjs.DefaultFrontController();
	frontController.addDispatcher(dispatchingObject,"complete");
	frontController.addReceiver(receivingObject,"handleComplete",bpmjs.Event);
	dispatchingObject.doDispatch();
	this.assertEquals(1,bpmjs.TestFrontController.receiveCount,{ fileName : "TestFrontController.hx", lineNumber : 27, className : "bpmjs.TestFrontController", methodName : "testWithEvent"});
}
bpmjs.TestFrontController.prototype.testWithCustomEvent = function() {
	var dispatchingObject = new bpmjs._TestFrontController.CustomDispatchingObject();
	var receivingObject = new bpmjs._TestFrontController.CustomReceivingObject();
	var frontController = new bpmjs.DefaultFrontController();
	frontController.addDispatcher(dispatchingObject,bpmjs._TestFrontController.CustomEvent.COMPLETE);
	frontController.addReceiver(receivingObject,"handleComplete",bpmjs._TestFrontController.CustomEvent);
	dispatchingObject.doDispatch();
	this.assertEquals(1,bpmjs.TestFrontController.receiveCount,{ fileName : "TestFrontController.hx", lineNumber : 41, className : "bpmjs.TestFrontController", methodName : "testWithCustomEvent"});
}
bpmjs.TestFrontController.prototype.testNoDispatchWithCustomEvent = function() {
	var dispatchingObject = new bpmjs._TestFrontController.DispatchingObject();
	var receivingObject = new bpmjs._TestFrontController.CustomReceivingObject();
	var frontController = new bpmjs.DefaultFrontController();
	frontController.addDispatcher(dispatchingObject,"complete");
	frontController.addReceiver(receivingObject,"handleComplete",bpmjs._TestFrontController.CustomEvent);
	dispatchingObject.doDispatch();
	this.assertEquals(0,bpmjs.TestFrontController.receiveCount,{ fileName : "TestFrontController.hx", lineNumber : 55, className : "bpmjs.TestFrontController", methodName : "testNoDispatchWithCustomEvent"});
}
bpmjs.TestFrontController.prototype.__class__ = bpmjs.TestFrontController;
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
if(!bpmjs._TestFrontController) bpmjs._TestFrontController = {}
bpmjs._TestFrontController.DispatchingObject = function(p) { if( p === $_ ) return; {
	bpmjs.EventDispatcher.call(this);
}}
bpmjs._TestFrontController.DispatchingObject.__name__ = ["bpmjs","_TestFrontController","DispatchingObject"];
bpmjs._TestFrontController.DispatchingObject.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) bpmjs._TestFrontController.DispatchingObject.prototype[k] = bpmjs.EventDispatcher.prototype[k];
bpmjs._TestFrontController.DispatchingObject.prototype.doDispatch = function() {
	this.dispatchEvent(new bpmjs.Event("complete"));
}
bpmjs._TestFrontController.DispatchingObject.prototype.__class__ = bpmjs._TestFrontController.DispatchingObject;
bpmjs._TestFrontController.ReceivingObject = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestFrontController.ReceivingObject.__name__ = ["bpmjs","_TestFrontController","ReceivingObject"];
bpmjs._TestFrontController.ReceivingObject.prototype.handleComplete = function(event) {
	bpmjs.TestFrontController.receiveCount++;
}
bpmjs._TestFrontController.ReceivingObject.prototype.__class__ = bpmjs._TestFrontController.ReceivingObject;
bpmjs._TestFrontController.CustomDispatchingObject = function(p) { if( p === $_ ) return; {
	bpmjs.EventDispatcher.call(this);
}}
bpmjs._TestFrontController.CustomDispatchingObject.__name__ = ["bpmjs","_TestFrontController","CustomDispatchingObject"];
bpmjs._TestFrontController.CustomDispatchingObject.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) bpmjs._TestFrontController.CustomDispatchingObject.prototype[k] = bpmjs.EventDispatcher.prototype[k];
bpmjs._TestFrontController.CustomDispatchingObject.prototype.doDispatch = function() {
	this.dispatchEvent(new bpmjs._TestFrontController.CustomEvent(bpmjs._TestFrontController.CustomEvent.COMPLETE));
}
bpmjs._TestFrontController.CustomDispatchingObject.prototype.__class__ = bpmjs._TestFrontController.CustomDispatchingObject;
bpmjs._TestFrontController.CustomReceivingObject = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestFrontController.CustomReceivingObject.__name__ = ["bpmjs","_TestFrontController","CustomReceivingObject"];
bpmjs._TestFrontController.CustomReceivingObject.prototype.handleComplete = function(event) {
	bpmjs.TestFrontController.receiveCount++;
}
bpmjs._TestFrontController.CustomReceivingObject.prototype.__class__ = bpmjs._TestFrontController.CustomReceivingObject;
bpmjs.Event = function(type) { if( type === $_ ) return; {
	this.type = type;
}}
bpmjs.Event.__name__ = ["bpmjs","Event"];
bpmjs.Event.prototype.type = null;
bpmjs.Event.prototype.target = null;
bpmjs.Event.prototype.__class__ = bpmjs.Event;
bpmjs._TestFrontController.CustomEvent = function(type) { if( type === $_ ) return; {
	bpmjs.Event.call(this,type);
}}
bpmjs._TestFrontController.CustomEvent.__name__ = ["bpmjs","_TestFrontController","CustomEvent"];
bpmjs._TestFrontController.CustomEvent.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) bpmjs._TestFrontController.CustomEvent.prototype[k] = bpmjs.Event.prototype[k];
bpmjs._TestFrontController.CustomEvent.prototype.__class__ = bpmjs._TestFrontController.CustomEvent;
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
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
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
bpmjs.TestError = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.TestError.__name__ = ["bpmjs","TestError"];
bpmjs.TestError.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestError.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestError.prototype.testContextNotNull = function() {
	try {
		var context = bpmjs.ContextBuilder.build(bpmjs._TestError.TestConfigWithoutRTTI);
	}
	catch( $e0 ) {
		if( js.Boot.__instanceof($e0,String) ) {
			var error = $e0;
			{
				this.noFail();
				return;
			}
		} else throw($e0);
	}
	this.fail("Expected Error",{ fileName : "TestError.hx", lineNumber : 19, className : "bpmjs.TestError", methodName : "testContextNotNull"});
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
bpmjs.TestComplete = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.TestComplete.__name__ = ["bpmjs","TestComplete"];
bpmjs.TestComplete.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestComplete.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestComplete.completeCount = null;
bpmjs.TestComplete.postCompleteCount = null;
bpmjs.TestComplete.prototype.setup = function() {
	bpmjs.TestComplete.completeCount = 0;
	bpmjs.TestComplete.postCompleteCount = 0;
}
bpmjs.TestComplete.prototype.testComplete = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestComplete.TestConfigWithA);
	this.assertEquals(1,bpmjs.TestComplete.completeCount,{ fileName : "TestComplete.hx", lineNumber : 19, className : "bpmjs.TestComplete", methodName : "testComplete"});
}
bpmjs.TestComplete.prototype.testPostComplete = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestComplete.TestConfigWithA);
	this.assertEquals(1,bpmjs.TestComplete.postCompleteCount,{ fileName : "TestComplete.hx", lineNumber : 25, className : "bpmjs.TestComplete", methodName : "testPostComplete"});
}
bpmjs.TestComplete.prototype.__class__ = bpmjs.TestComplete;
if(!bpmjs._TestComplete) bpmjs._TestComplete = {}
bpmjs._TestComplete.TestConfigWithA = function(p) { if( p === $_ ) return; {
	this.a = new bpmjs._TestComplete.A();
}}
bpmjs._TestComplete.TestConfigWithA.__name__ = ["bpmjs","_TestComplete","TestConfigWithA"];
bpmjs._TestComplete.TestConfigWithA.prototype.a = null;
bpmjs._TestComplete.TestConfigWithA.prototype.__class__ = bpmjs._TestComplete.TestConfigWithA;
bpmjs._TestComplete.TestConfigWithA.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestComplete.A = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestComplete.A.__name__ = ["bpmjs","_TestComplete","A"];
bpmjs._TestComplete.A.prototype.handleContextComplete = function() {
	bpmjs.TestComplete.completeCount++;
}
bpmjs._TestComplete.A.prototype.handleContextPostComplete = function() {
	bpmjs.TestComplete.postCompleteCount++;
}
bpmjs._TestComplete.A.prototype.__class__ = bpmjs._TestComplete.A;
bpmjs._TestComplete.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs.TestConfigure = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.TestConfigure.__name__ = ["bpmjs","TestConfigure"];
bpmjs.TestConfigure.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestConfigure.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestConfigure.prototype.testObject = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestConfigure.TestConfigWithA);
	bpmjs.ContextBuilder.configure(new bpmjs._TestConfigure.B());
	var b = context.getObjectByType(bpmjs._TestConfigure.B);
	this.assertNotNull(b,{ fileName : "TestConfigure.hx", lineNumber : 14, className : "bpmjs.TestConfigure", methodName : "testObject"});
}
bpmjs.TestConfigure.prototype.testInject = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestConfigure.TestConfigWithA);
	bpmjs.ContextBuilder.configure(new bpmjs._TestConfigure.B());
	var b = context.getObjectByType(bpmjs._TestConfigure.B);
	this.assertNotNull(b.a,{ fileName : "TestConfigure.hx", lineNumber : 24, className : "bpmjs.TestConfigure", methodName : "testInject"});
}
bpmjs.TestConfigure.prototype.__class__ = bpmjs.TestConfigure;
if(!bpmjs._TestConfigure) bpmjs._TestConfigure = {}
bpmjs._TestConfigure.TestConfigWithA = function(p) { if( p === $_ ) return; {
	this.a = new bpmjs._TestConfigure.A();
}}
bpmjs._TestConfigure.TestConfigWithA.__name__ = ["bpmjs","_TestConfigure","TestConfigWithA"];
bpmjs._TestConfigure.TestConfigWithA.prototype.a = null;
bpmjs._TestConfigure.TestConfigWithA.prototype.__class__ = bpmjs._TestConfigure.TestConfigWithA;
bpmjs._TestConfigure.TestConfigWithA.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestConfigure.A = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestConfigure.A.__name__ = ["bpmjs","_TestConfigure","A"];
bpmjs._TestConfigure.A.prototype.b = null;
bpmjs._TestConfigure.A.prototype.__class__ = bpmjs._TestConfigure.A;
bpmjs._TestConfigure.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestConfigure.B = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestConfigure.B.__name__ = ["bpmjs","_TestConfigure","B"];
bpmjs._TestConfigure.B.prototype.a = null;
bpmjs._TestConfigure.B.prototype.__class__ = bpmjs._TestConfigure.B;
bpmjs._TestConfigure.B.__interfaces__ = [haxe.rtti.Infos];
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
bpmjs.TestEvent = function(p) { if( p === $_ ) return; {
	haxe.unit.TestCase.call(this);
}}
bpmjs.TestEvent.__name__ = ["bpmjs","TestEvent"];
bpmjs.TestEvent.__super__ = haxe.unit.TestCase;
for(var k in haxe.unit.TestCase.prototype ) bpmjs.TestEvent.prototype[k] = haxe.unit.TestCase.prototype[k];
bpmjs.TestEvent.prototype.completeCount = null;
bpmjs.TestEvent.prototype.complete2Count = null;
bpmjs.TestEvent.prototype.setup = function() {
	this.completeCount = 0;
	this.complete2Count = 0;
}
bpmjs.TestEvent.prototype.testSingleEvent = function() {
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	this.assertEquals(1,this.completeCount,{ fileName : "TestEvent.hx", lineNumber : 24, className : "bpmjs.TestEvent", methodName : "testSingleEvent"});
}
bpmjs.TestEvent.prototype.testDoubleAddListener = function() {
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	this.assertEquals(1,this.completeCount,{ fileName : "TestEvent.hx", lineNumber : 34, className : "bpmjs.TestEvent", methodName : "testDoubleAddListener"});
}
bpmjs.TestEvent.prototype.testDoubleDispatch = function() {
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener("complete",$closure(this,"incrementCompleteCount"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	eventDispatcher.dispatchEvent(new bpmjs.Event("complete"));
	this.assertEquals(2,this.completeCount,{ fileName : "TestEvent.hx", lineNumber : 44, className : "bpmjs.TestEvent", methodName : "testDoubleDispatch"});
}
bpmjs.TestEvent.prototype.testMyEvent = function() {
	var eventDispatcher = new bpmjs.EventDispatcher();
	eventDispatcher.addEventListener(bpmjs._TestEvent.MyEvent.COMPLETE2,$closure(this,"incrementComplete2Count"));
	eventDispatcher.dispatchEvent(new bpmjs._TestEvent.MyEvent(bpmjs._TestEvent.MyEvent.COMPLETE2));
	this.assertEquals(1,this.complete2Count,{ fileName : "TestEvent.hx", lineNumber : 53, className : "bpmjs.TestEvent", methodName : "testMyEvent"});
}
bpmjs.TestEvent.prototype.incrementCompleteCount = function(event) {
	this.completeCount++;
}
bpmjs.TestEvent.prototype.incrementComplete2Count = function(event) {
	this.complete2Count++;
}
bpmjs.TestEvent.prototype.__class__ = bpmjs.TestEvent;
if(!bpmjs._TestEvent) bpmjs._TestEvent = {}
bpmjs._TestEvent.MyEvent = function(type) { if( type === $_ ) return; {
	bpmjs.Event.call(this,type);
}}
bpmjs._TestEvent.MyEvent.__name__ = ["bpmjs","_TestEvent","MyEvent"];
bpmjs._TestEvent.MyEvent.__super__ = bpmjs.Event;
for(var k in bpmjs.Event.prototype ) bpmjs._TestEvent.MyEvent.prototype[k] = bpmjs.Event.prototype[k];
bpmjs._TestEvent.MyEvent.prototype.__class__ = bpmjs._TestEvent.MyEvent;
bpmjs.ContextConfig = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs.ContextConfig.__name__ = ["bpmjs","ContextConfig"];
bpmjs.ContextConfig.prototype.frontController = null;
bpmjs.ContextConfig.prototype.__class__ = bpmjs.ContextConfig;
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
haxe.unit.TestRunner = function(p) { if( p === $_ ) return; {
	this.result = new haxe.unit.TestResult();
	this.cases = new List();
}}
haxe.unit.TestRunner.__name__ = ["haxe","unit","TestRunner"];
haxe.unit.TestRunner.print = function(v) {
	var msg = StringTools.htmlEscape(js.Boot.__string_rec(v,"")).split("\n").join("<br/>");
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("haxe:trace element not found");
	else d.innerHTML += msg;
}
haxe.unit.TestRunner.customTrace = function(v,p) {
	haxe.unit.TestRunner.print(p.fileName + ":" + p.lineNumber + ": " + Std.string(v) + "\n");
}
haxe.unit.TestRunner.prototype.result = null;
haxe.unit.TestRunner.prototype.cases = null;
haxe.unit.TestRunner.prototype.add = function(c) {
	this.cases.add(c);
}
haxe.unit.TestRunner.prototype.run = function() {
	this.result = new haxe.unit.TestResult();
	{ var $it0 = this.cases.iterator();
	while( $it0.hasNext() ) { var c = $it0.next();
	{
		this.runCase(c);
	}
	}}
	haxe.unit.TestRunner.print(this.result.toString());
	return this.result.success;
}
haxe.unit.TestRunner.prototype.runCase = function(t) {
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
							haxe.unit.TestRunner.print("F");
							t.currentTest.backtrace = haxe.Stack.toString(haxe.Stack.exceptionStack());
						}
					} else {
						var e = $e0;
						{
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
if(!bpmjs.integration) bpmjs.integration = {}
bpmjs.integration.TestMessaging = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.integration.TestMessaging.__name__ = ["bpmjs","integration","TestMessaging"];
bpmjs.integration.TestMessaging.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.integration.TestMessaging.prototype[k] = SummerTestCase.prototype[k];
bpmjs.integration.TestMessaging.messageReceivedCount = null;
bpmjs.integration.TestMessaging.prototype.setup = function() {
	bpmjs.integration.TestMessaging.messageReceivedCount = 0;
}
bpmjs.integration.TestMessaging.prototype.testDefaultFrontController = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config);
	this.assertNotNull(context.contextConfig.frontController,{ fileName : "TestMessaging.hx", lineNumber : 21, className : "bpmjs.integration.TestMessaging", methodName : "testDefaultFrontController"});
	var frontControllerClass = Type.getClass(context.contextConfig.frontController);
	this.assertEquals(bpmjs.DefaultFrontController,frontControllerClass,{ fileName : "TestMessaging.hx", lineNumber : 24, className : "bpmjs.integration.TestMessaging", methodName : "testDefaultFrontController"});
}
bpmjs.integration.TestMessaging.prototype.testCustomFrontController = function() {
	var customContextConfig = new bpmjs.ContextConfig();
	customContextConfig.frontController = new bpmjs.integration._TestMessaging.MockFrontController();
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config,customContextConfig);
	this.assertNotNull(context.contextConfig.frontController,{ fileName : "TestMessaging.hx", lineNumber : 33, className : "bpmjs.integration.TestMessaging", methodName : "testCustomFrontController"});
	var frontControllerClass = Type.getClass(context.contextConfig.frontController);
	this.assertEquals(bpmjs.integration._TestMessaging.MockFrontController,frontControllerClass,{ fileName : "TestMessaging.hx", lineNumber : 36, className : "bpmjs.integration.TestMessaging", methodName : "testCustomFrontController"});
}
bpmjs.integration.TestMessaging.prototype.testDispatcherAdded = function() {
	var mockFrontController = new bpmjs.integration._TestMessaging.MockFrontController();
	var customContextConfig = new bpmjs.ContextConfig();
	customContextConfig.frontController = mockFrontController;
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config,customContextConfig);
	this.assertEquals(1,mockFrontController.addDispatcherCount,{ fileName : "TestMessaging.hx", lineNumber : 48, className : "bpmjs.integration.TestMessaging", methodName : "testDispatcherAdded"});
	this.assertEquals(context.getObjectByType(bpmjs.integration._TestMessaging.A),mockFrontController.lastDispatcher,{ fileName : "TestMessaging.hx", lineNumber : 49, className : "bpmjs.integration.TestMessaging", methodName : "testDispatcherAdded"});
	this.assertEquals("start",mockFrontController.lastType,{ fileName : "TestMessaging.hx", lineNumber : 50, className : "bpmjs.integration.TestMessaging", methodName : "testDispatcherAdded"});
}
bpmjs.integration.TestMessaging.prototype.testReceiverAdded = function() {
	var mockFrontController = new bpmjs.integration._TestMessaging.MockFrontController();
	var customContextConfig = new bpmjs.ContextConfig();
	customContextConfig.frontController = mockFrontController;
	var context = bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config,customContextConfig);
	this.assertEquals(1,mockFrontController.addReceiverCount,{ fileName : "TestMessaging.hx", lineNumber : 62, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
	this.assertEquals(context.getObjectByType(bpmjs.integration._TestMessaging.B),mockFrontController.lastReceivingObject,{ fileName : "TestMessaging.hx", lineNumber : 63, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
	this.assertEquals("handleStart",mockFrontController.lastMethodName,{ fileName : "TestMessaging.hx", lineNumber : 64, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
	this.assertEquals(bpmjs.Event,mockFrontController.lastEventClass,{ fileName : "TestMessaging.hx", lineNumber : 65, className : "bpmjs.integration.TestMessaging", methodName : "testReceiverAdded"});
}
bpmjs.integration.TestMessaging.prototype.testMessageReceived = function() {
	bpmjs.ContextBuilder.build(bpmjs.integration._TestMessaging.Config);
	this.assertEquals(1,bpmjs.integration.TestMessaging.messageReceivedCount,{ fileName : "TestMessaging.hx", lineNumber : 71, className : "bpmjs.integration.TestMessaging", methodName : "testMessageReceived"});
}
bpmjs.integration.TestMessaging.prototype.__class__ = bpmjs.integration.TestMessaging;
if(!bpmjs.integration._TestMessaging) bpmjs.integration._TestMessaging = {}
bpmjs.integration._TestMessaging.MockFrontController = function(p) { if( p === $_ ) return; {
	this.addDispatcherCount = 0;
	this.addReceiverCount = 0;
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
	this.addDispatcherCount++;
	this.lastDispatcher = dispatcher;
	this.lastType = type;
}
bpmjs.integration._TestMessaging.MockFrontController.prototype.addReceiver = function(receivingObject,methodName,eventClass) {
	this.addReceiverCount++;
	this.lastReceivingObject = receivingObject;
	this.lastMethodName = methodName;
	this.lastEventClass = eventClass;
}
bpmjs.integration._TestMessaging.MockFrontController.prototype.__class__ = bpmjs.integration._TestMessaging.MockFrontController;
bpmjs.integration._TestMessaging.MockFrontController.__interfaces__ = [bpmjs.FrontController];
bpmjs.integration._TestMessaging.Config = function(p) { if( p === $_ ) return; {
	this.a = new bpmjs.integration._TestMessaging.A();
	this.b = new bpmjs.integration._TestMessaging.B();
}}
bpmjs.integration._TestMessaging.Config.__name__ = ["bpmjs","integration","_TestMessaging","Config"];
bpmjs.integration._TestMessaging.Config.prototype.a = null;
bpmjs.integration._TestMessaging.Config.prototype.b = null;
bpmjs.integration._TestMessaging.Config.prototype.__class__ = bpmjs.integration._TestMessaging.Config;
bpmjs.integration._TestMessaging.Config.__interfaces__ = [haxe.rtti.Infos];
bpmjs.integration._TestMessaging.A = function(p) { if( p === $_ ) return; {
	bpmjs.EventDispatcher.call(this);
}}
bpmjs.integration._TestMessaging.A.__name__ = ["bpmjs","integration","_TestMessaging","A"];
bpmjs.integration._TestMessaging.A.__super__ = bpmjs.EventDispatcher;
for(var k in bpmjs.EventDispatcher.prototype ) bpmjs.integration._TestMessaging.A.prototype[k] = bpmjs.EventDispatcher.prototype[k];
bpmjs.integration._TestMessaging.A.prototype.handleComplete = function() {
	this.dispatchEvent(new bpmjs.Event("start"));
}
bpmjs.integration._TestMessaging.A.prototype.__class__ = bpmjs.integration._TestMessaging.A;
bpmjs.integration._TestMessaging.B = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs.integration._TestMessaging.B.__name__ = ["bpmjs","integration","_TestMessaging","B"];
bpmjs.integration._TestMessaging.B.prototype.handleStart = function(event) {
	bpmjs.integration.TestMessaging.messageReceivedCount++;
}
bpmjs.integration._TestMessaging.B.prototype.__class__ = bpmjs.integration._TestMessaging.B;
bpmjs.integration._TestMessaging.B.__interfaces__ = [haxe.rtti.Infos];
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
bpmjs.TestDynamic = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.TestDynamic.__name__ = ["bpmjs","TestDynamic"];
bpmjs.TestDynamic.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestDynamic.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestDynamic.prototype.testObjects = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs);
	this.assertEquals(3,bpmjs.TestDynamic.bCount,{ fileName : "TestDynamic.hx", lineNumber : 12, className : "bpmjs.TestDynamic", methodName : "testObjects"});
}
bpmjs.TestDynamic.prototype.testListInject = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs);
	var a = context.getObjectByType(bpmjs._TestDynamic.A);
	this.assertEquals(3,a.bList.length,{ fileName : "TestDynamic.hx", lineNumber : 20, className : "bpmjs.TestDynamic", methodName : "testListInject"});
}
bpmjs.TestDynamic.prototype.__class__ = bpmjs.TestDynamic;
if(!bpmjs._TestDynamic) bpmjs._TestDynamic = {}
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs = function(p) { if( p === $_ ) return; {
	this.a = new bpmjs._TestDynamic.A();
	this.bList = new Array();
	this.bList.push(new bpmjs._TestDynamic.B());
	this.bList.push(new bpmjs._TestDynamic.B());
	this.bList.push(new bpmjs._TestDynamic.B());
}}
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.__name__ = ["bpmjs","_TestDynamic","TestConfigWithAAndDyanmicBs"];
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.prototype.a = null;
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.prototype.bList = null;
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.prototype.__class__ = bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs;
bpmjs._TestDynamic.TestConfigWithAAndDyanmicBs.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestDynamic.A = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestDynamic.A.__name__ = ["bpmjs","_TestDynamic","A"];
bpmjs._TestDynamic.A.prototype.bList = null;
bpmjs._TestDynamic.A.prototype.__class__ = bpmjs._TestDynamic.A;
bpmjs._TestDynamic.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestDynamic.B = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestDynamic.B.__name__ = ["bpmjs","_TestDynamic","B"];
bpmjs._TestDynamic.B.prototype.a = null;
bpmjs._TestDynamic.B.prototype.handleComplete = function() {
	if(this.a != null) bpmjs.TestDynamic.bCount++;
}
bpmjs._TestDynamic.B.prototype.__class__ = bpmjs._TestDynamic.B;
bpmjs._TestDynamic.B.__interfaces__ = [haxe.rtti.Infos];
bpmjs.TestGetObject = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.TestGetObject.__name__ = ["bpmjs","TestGetObject"];
bpmjs.TestGetObject.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestGetObject.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestGetObject.prototype.testGetObjectByName = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithA);
	var a = context.getObjectByName("a");
	this.assertNotNull(a,{ fileName : "TestGetObject.hx", lineNumber : 12, className : "bpmjs.TestGetObject", methodName : "testGetObjectByName"});
}
bpmjs.TestGetObject.prototype.testGetObjectByNameValidate = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithA);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a,bpmjs._TestGetObject.A),{ fileName : "TestGetObject.hx", lineNumber : 19, className : "bpmjs.TestGetObject", methodName : "testGetObjectByNameValidate"});
	this.assertTrue(a.getValue(),{ fileName : "TestGetObject.hx", lineNumber : 20, className : "bpmjs.TestGetObject", methodName : "testGetObjectByNameValidate"});
}
bpmjs.TestGetObject.prototype.testGetObjectByType = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithA);
	var a = context.getObjectByType(bpmjs._TestGetObject.A);
	this.assertNotNull(a,{ fileName : "TestGetObject.hx", lineNumber : 27, className : "bpmjs.TestGetObject", methodName : "testGetObjectByType"});
}
bpmjs.TestGetObject.prototype.testGetObjectAAndBByName = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a,bpmjs._TestGetObject.A),{ fileName : "TestGetObject.hx", lineNumber : 35, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByName"});
	var b = context.getObjectByName("b");
	this.assertTrue(Std["is"](b,bpmjs._TestGetObject.B),{ fileName : "TestGetObject.hx", lineNumber : 38, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByName"});
}
bpmjs.TestGetObject.prototype.testGetObjectAAndBByType = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestGetObject.TestConfigWithAAndB);
	var a = context.getObjectByType(bpmjs._TestGetObject.A);
	this.assertTrue(Std["is"](a,bpmjs._TestGetObject.A),{ fileName : "TestGetObject.hx", lineNumber : 46, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByType"});
	var b = context.getObjectByType(bpmjs._TestGetObject.B);
	this.assertTrue(Std["is"](b,bpmjs._TestGetObject.B),{ fileName : "TestGetObject.hx", lineNumber : 49, className : "bpmjs.TestGetObject", methodName : "testGetObjectAAndBByType"});
}
bpmjs.TestGetObject.prototype.__class__ = bpmjs.TestGetObject;
if(!bpmjs._TestGetObject) bpmjs._TestGetObject = {}
bpmjs._TestGetObject.TestConfigWithA = function(p) { if( p === $_ ) return; {
	this.a = new bpmjs._TestGetObject.A();
}}
bpmjs._TestGetObject.TestConfigWithA.__name__ = ["bpmjs","_TestGetObject","TestConfigWithA"];
bpmjs._TestGetObject.TestConfigWithA.prototype.a = null;
bpmjs._TestGetObject.TestConfigWithA.prototype.__class__ = bpmjs._TestGetObject.TestConfigWithA;
bpmjs._TestGetObject.TestConfigWithA.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestGetObject.A = function(p) { if( p === $_ ) return; {
	this.value = true;
}}
bpmjs._TestGetObject.A.__name__ = ["bpmjs","_TestGetObject","A"];
bpmjs._TestGetObject.A.prototype.value = null;
bpmjs._TestGetObject.A.prototype.getValue = function() {
	return this.value;
}
bpmjs._TestGetObject.A.prototype.__class__ = bpmjs._TestGetObject.A;
bpmjs._TestGetObject.TestConfigWithAAndB = function(p) { if( p === $_ ) return; {
	this.a = new bpmjs._TestGetObject.A();
	this.b = new bpmjs._TestGetObject.B();
}}
bpmjs._TestGetObject.TestConfigWithAAndB.__name__ = ["bpmjs","_TestGetObject","TestConfigWithAAndB"];
bpmjs._TestGetObject.TestConfigWithAAndB.prototype.a = null;
bpmjs._TestGetObject.TestConfigWithAAndB.prototype.b = null;
bpmjs._TestGetObject.TestConfigWithAAndB.prototype.__class__ = bpmjs._TestGetObject.TestConfigWithAAndB;
bpmjs._TestGetObject.TestConfigWithAAndB.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestGetObject.B = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestGetObject.B.__name__ = ["bpmjs","_TestGetObject","B"];
bpmjs._TestGetObject.B.prototype.__class__ = bpmjs._TestGetObject.B;
bpmjs.TestInject = function(p) { if( p === $_ ) return; {
	SummerTestCase.call(this);
}}
bpmjs.TestInject.__name__ = ["bpmjs","TestInject"];
bpmjs.TestInject.__super__ = SummerTestCase;
for(var k in SummerTestCase.prototype ) bpmjs.TestInject.prototype[k] = SummerTestCase.prototype[k];
bpmjs.TestInject.prototype.testInject = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestInject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a.b,bpmjs._TestInject.B),{ fileName : "TestInject.hx", lineNumber : 12, className : "bpmjs.TestInject", methodName : "testInject"});
}
bpmjs.TestInject.prototype.testInjectContext = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestInject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertEquals(context,a.context,{ fileName : "TestInject.hx", lineNumber : 20, className : "bpmjs.TestInject", methodName : "testInjectContext"});
}
bpmjs.TestInject.prototype.testCircularInject = function() {
	var context = bpmjs.ContextBuilder.build(bpmjs._TestInject.TestConfigWithAAndB);
	var a = context.getObjectByName("a");
	this.assertTrue(Std["is"](a.b,bpmjs._TestInject.B),{ fileName : "TestInject.hx", lineNumber : 28, className : "bpmjs.TestInject", methodName : "testCircularInject"});
	var b = context.getObjectByName("b");
	this.assertTrue(Std["is"](b.a,bpmjs._TestInject.A),{ fileName : "TestInject.hx", lineNumber : 31, className : "bpmjs.TestInject", methodName : "testCircularInject"});
}
bpmjs.TestInject.prototype.__class__ = bpmjs.TestInject;
if(!bpmjs._TestInject) bpmjs._TestInject = {}
bpmjs._TestInject.TestConfigWithAAndB = function(p) { if( p === $_ ) return; {
	this.a = new bpmjs._TestInject.A();
	this.b = new bpmjs._TestInject.B();
}}
bpmjs._TestInject.TestConfigWithAAndB.__name__ = ["bpmjs","_TestInject","TestConfigWithAAndB"];
bpmjs._TestInject.TestConfigWithAAndB.prototype.a = null;
bpmjs._TestInject.TestConfigWithAAndB.prototype.b = null;
bpmjs._TestInject.TestConfigWithAAndB.prototype.__class__ = bpmjs._TestInject.TestConfigWithAAndB;
bpmjs._TestInject.TestConfigWithAAndB.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestInject.A = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestInject.A.__name__ = ["bpmjs","_TestInject","A"];
bpmjs._TestInject.A.prototype.b = null;
bpmjs._TestInject.A.prototype.context = null;
bpmjs._TestInject.A.prototype.__class__ = bpmjs._TestInject.A;
bpmjs._TestInject.A.__interfaces__ = [haxe.rtti.Infos];
bpmjs._TestInject.B = function(p) { if( p === $_ ) return; {
	null;
}}
bpmjs._TestInject.B.__name__ = ["bpmjs","_TestInject","B"];
bpmjs._TestInject.B.prototype.a = null;
bpmjs._TestInject.B.prototype.__class__ = bpmjs._TestInject.B;
bpmjs._TestInject.B.__interfaces__ = [haxe.rtti.Infos];
if(!bpmjs._Event) bpmjs._Event = {}
bpmjs._Event.ListenerForType = function(type,listener) { if( type === $_ ) return; {
	this.type = type;
	this.listener = listener;
}}
bpmjs._Event.ListenerForType.__name__ = ["bpmjs","_Event","ListenerForType"];
bpmjs._Event.ListenerForType.prototype.type = null;
bpmjs._Event.ListenerForType.prototype.listener = null;
bpmjs._Event.ListenerForType.prototype.__class__ = bpmjs._Event.ListenerForType;
haxe.unit.TestStatus = function(p) { if( p === $_ ) return; {
	this.done = false;
	this.success = false;
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
	this.runner = new haxe.unit.TestRunner();
	this.addBPMJSTests();
	this.addContextBuilderTests();
	this.addFrontControllerTests();
	this.addIntegrationTests();
	var startTime = Date.now().getTime();
	this.runner.run();
	haxe.Log.trace("Time for testing... " + (Date.now().getTime() - startTime) + "ms",{ fileName : "TestRunner.hx", lineNumber : 35, className : "TestRunner", methodName : "new"});
}}
TestRunner.__name__ = ["TestRunner"];
TestRunner.main = function() {
	var runner = new TestRunner();
}
TestRunner.prototype.runner = null;
TestRunner.prototype.addBPMJSTests = function() {
	this.runner.add(new bpmjs.TestEvent());
}
TestRunner.prototype.addContextBuilderTests = function() {
	this.runner.add(new bpmjs.TestGetObject());
	this.runner.add(new bpmjs.TestInject());
	this.runner.add(new bpmjs.TestComplete());
	this.runner.add(new bpmjs.TestError());
	this.runner.add(new bpmjs.TestConfigure());
	this.runner.add(new bpmjs.TestDynamic());
}
TestRunner.prototype.addFrontControllerTests = function() {
	this.runner.add(new bpmjs.TestFrontController());
}
TestRunner.prototype.addIntegrationTests = function() {
	this.runner.add(new bpmjs.integration.TestMessaging());
}
TestRunner.prototype.__class__ = TestRunner;
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
$_ = {}
js.Boot.__res = {}
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
		return isFinite(i);
	}
	Math.isNaN = function(i) {
		return isNaN(i);
	}
}
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