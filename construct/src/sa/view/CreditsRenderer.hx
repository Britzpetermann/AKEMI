package sa.view;

import sa.model.CommonModel;

import js.Lib;

class CreditsRenderer
{
	public var commonModel : CommonModel;

	public var texture : GLTexture;

	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;

	var gl : WebGLRenderingContext;

	var shaderProgram : WebGLProgram;
	var shaderProgramButton : WebGLProgram;
	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;

	var textureUniform : WebGLUniformLocation;
	var projectionMatrixUniform : WebGLUniformLocation;
	var viewWorldMatrixUniform : WebGLUniformLocation;
	var projectionMatrixButtonUniform : WebGLUniformLocation;
	var viewWorldMatrixButtonUniform : WebGLUniformLocation;
	var colorButtonUniform : WebGLUniformLocation;

	var moveSet : MoveSet;
	var defaultTargetIn : Float;
	var defaultTargetOut : Float;

	var mousePos : Vec2;
	var buttons : Array<Button>;
	var cursorClient : GLCursorClient;

	public function new()
	{
		mousePos = new Vec2();

		defaultTargetIn = 0;
		defaultTargetOut = 8;

		moveSet = new MoveSet();
		moveSet.current = defaultTargetOut;
		moveSet.to = defaultTargetOut;
		moveSet.acceleration = 0.03;

		buttons = new Array();
		var lineHeight = 0.031;
		createButton(0.19, 0.19, 0.4, -0.4, "close");
		createButton(0.17, 0.015, 0, 0.035, "http://www.audiotool.com/track/carsberg");
		createButton(0.17, 0.015, 0, 0.035 + lineHeight * 1, "http://www.bit-101.com");
		createButton(0.17, 0.015, 0, 0.035 + lineHeight * 2, "http://fontfabric.com/code-pro");
		createButton(0.17, 0.015, 0, 0.035 + lineHeight * 3, "http://www.omkrets.se/typografi");
		createButton(0.17, 0.015, 0, 0.035 + lineHeight * 4, "http://www.britzpetermann.com");
		createButton(0.25, 0.02, 0, 0.28, "http://www.britzpetermann.com/blog/akemi");
	}

	public function init(gl : WebGLRenderingContext)
	{
		this.gl = gl;

		shaderProgram = GLUtil.createProgram(gl, sa.view.shader.PassVertex2, sa.view.shader.Texture);
		vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "vertexPosition");
		gl.enableVertexAttribArray(vertexPositionAttribute);
		vertexBuffer = GLUtil.createInt8VertexBuffer(gl, [
			1, -1,
			-1,  1,
			-1, -1,
			1, -1,
			1,  1,
			-1,  1,
		]);
		textureUniform = GLUtil.getUniformLocation(gl, shaderProgram, "texture");
		projectionMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "projectionMatrix");
		viewWorldMatrixUniform = GLUtil.getUniformLocation(gl, shaderProgram, "viewWorldMatrix");

		#if debug
			shaderProgramButton = GLUtil.createProgram(gl, sa.view.shader.HitareaVertex, sa.view.shader.UniformColor);
			projectionMatrixButtonUniform = GLUtil.getUniformLocation(gl, shaderProgramButton, "projectionMatrix");
			viewWorldMatrixButtonUniform = GLUtil.getUniformLocation(gl, shaderProgramButton, "viewWorldMatrix");
			colorButtonUniform = GLUtil.getUniformLocation(gl, shaderProgramButton, "color");
		#end

		GLMouseRegistry.getInstance().mouseDownSignaler.bind(mouseDown);
		GLMouseRegistry.getInstance().mouseMoveSignaler.bind(mouseMove);
		cursorClient = GLMouseRegistry.getInstance().createCursorClient();
	}

	public function render(width : Float, height : Float)
	{
		moveSet.move();

		if (commonModel.showCredits)
			moveSet.to = defaultTargetIn;
		else
			moveSet.to = defaultTargetOut;

		if (moveSet.current == defaultTargetOut)
			return;

		gl.useProgram(shaderProgram);
		gl.viewport(0, 0, width, height);

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.BYTE, false, 0, 0);
		gl.uniformMatrix4fv(projectionMatrixUniform, false, projectionMatrix.buffer);

		var scale = computeScale(width, height);
		var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendScale(1,-1,1);
		viewWorldMatrix.appendTranslation(0, moveSet.current, -7);
		viewWorldMatrix.appendScale(scale, scale, 1);

		gl.uniformMatrix4fv(viewWorldMatrixUniform, false, viewWorldMatrix.buffer);

		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, texture.texture);
		gl.uniform1i(textureUniform, 0);

		gl.drawArrays(gl.TRIANGLES, 0, 6);

		#if debug
			gl.useProgram(shaderProgramButton);
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
		#end

		cursorClient.defaultCursor();
		for (button in buttons)
		{
			var viewWorldMatrixButton = new Matrix4(cameraMatrix);
			viewWorldMatrixButton.appendScale(1,-1,1);
			viewWorldMatrixButton.appendTranslation(0, moveSet.current, -7);
			viewWorldMatrixButton.appendScale(scale, scale, 1);
			viewWorldMatrixButton.appendTranslation(button.pos.x, button.pos.y, 0);
			viewWorldMatrixButton.appendScale(button.size.x, button.size.y, 1);

			#if debug
				gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
				gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.BYTE, false, 0, 0);
				gl.uniformMatrix4fv(projectionMatrixButtonUniform, false, projectionMatrix.buffer);
				gl.uniformMatrix4fv(viewWorldMatrixButtonUniform, false, viewWorldMatrixButton.buffer);
			#end

			if (isUnderMouse(viewWorldMatrixButton))
			{
				cursorClient.handCursor(button.url);
				button.isActive = true;
				#if debug
					gl.uniform4f(colorButtonUniform, 1, 1, 1, 0.2);
				#end
			}
			else
			{
				button.isActive = false;
				#if debug
					gl.uniform4f(colorButtonUniform, 1, 1, 1, 0.1);
				#end
			}

			#if debug
				gl.drawArrays(gl.TRIANGLES, 0, 6);
			#end
		}

		gl.disable(gl.BLEND);
	}

	function computeScale(width : Float, height : Float)
	{
		var viewWorldMatrix = new Matrix4();
		viewWorldMatrix.appendScale(1,-1,1);
		viewWorldMatrix.appendTranslation(0, 0, -7);
		viewWorldMatrix.appendScale(1, 1, 1);

		var finalMatrix = new Matrix4(projectionMatrix);
		finalMatrix.multiply(viewWorldMatrix);
		var tl = new Vec4(2, 2, 0, 1);
		tl.transform(finalMatrix);
		tl.project();
		tl.multiply(width / 2, -height / 2, 1, 1);

		return 1024 / tl.x;
	}

	function createButton(width : Float, height : Float, x: Float, y : Float, url : String)
	{
		var button = new Button();
		button.size = new Vec2(width, height);
		button.pos = new Vec2(x, y);
		button.isActive = false;
		button.url = url;
		buttons.push(button);
	}

	function mouseMove(mousePos : Vec2)
	{
		this.mousePos = mousePos;
	}

	function isUnderMouse(matrix : Matrix4)
	{
		var far = new Vec4(mousePos.x, 1 - mousePos.y, 0, 1);
		far.subtract(0.5, 0.5, 0.0, 0.0);
		far.multiply(2.0, 2.0, 1.0, 1.0);
		far.project3D(projectionMatrix, new Matrix4());
		var far = far.cloneToVec3();

		//intersect camera and plane
		var p0 = new Vec3(1, 1, 0);
		p0.transform(matrix);
		var p1 = new Vec3(1, -1, 0);
		p1.transform(matrix);
		var p2 = new Vec3(-1, 1, 0);
		p2.transform(matrix);
		var edge1 = p0.clone().subtract(p1.x, p1.y, p1.z);
		var edge2 = p0.clone().subtract(p2.x, p2.y, p2.z);
		var pVec = far.cross(edge2);
		var det = edge1.dot(pVec);
		var tVec = far.clone().subtract(p0.x, p0.y, p0.z);
		var qVec = tVec.clone().cross(edge1);
		var u = 1 + tVec.dot(pVec) / det;
		var v = 1 + far.dot(qVec) / det;
		return u > 0 && u < 1 && v > 0 && v < 1;
	}

	function mouseDown(mousePos : Vec2)
	{
		for(button in buttons)
		{
			if (button.isActive)
			{
				if (button.url == "close")
				{
					commonModel.showCredits = false;
				}
				else
				{
					js.Lib.window.open(button.url, "_self");
				}
				return;
			}
		}
	}
}

class Button
{
	public var size : Vec2;
	public var pos : Vec2;
	public var isActive : Bool;
	public var url : String;

	public function new(){}
}
