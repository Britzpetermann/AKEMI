package sa.view;
import js.Lib;

class BackgroundRenderer
{
	public var texture : GLTexture;
	
	public var projectionMatrix : Matrix4;
	public var cameraMatrix : Matrix4;
	
	var gl : WebGLRenderingContext;
	
	var shaderProgram : WebGLProgram;
	var vertexPositionAttribute : Float;
	var vertexBuffer : WebGLBuffer;
	
	var textureUniform : WebGLUniformLocation;
	var projectionMatrixUniform : WebGLUniformLocation;
	var viewWorldMatrixUniform : WebGLUniformLocation;
	
	public function new() {}
	
	public function init(gl : WebGLRenderingContext)
	{
		this.gl = gl;

		shaderProgram = GLUtil.createProgram(gl, sa.view.shader.PassVertex2.create(), sa.view.shader.Texture.create());
		
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
	}
	
	public function render(width : Float, height : Float)
	{
    	gl.useProgram(shaderProgram);
    	gl.viewport(0, 0, width, height);
    	
    	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    	gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.BYTE, false, 0, 0);
        gl.uniformMatrix4fv(projectionMatrixUniform, false, projectionMatrix.buffer);
            	
       	var viewWorldMatrix = new Matrix4(cameraMatrix);
		viewWorldMatrix.appendScale(1,-1,1);
		viewWorldMatrix.appendTranslation(0, 0, -40);
		viewWorldMatrix.appendScale(80, 80, 1);
        gl.uniformMatrix4fv(viewWorldMatrixUniform, false, viewWorldMatrix.buffer);
        
		gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture.texture);
        gl.uniform1i(textureUniform, 0);
        
    	gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
}
