import haxe.rtti.Meta;

import WebGLRenderingContext;

class GL
{
	/* ClearBufferMask */
	public static inline var DEPTH_BUFFER_BIT	= 0x00000100;
	public static inline var STENCIL_BUFFER_BIT	= 0x00000400;
	public static inline var COLOR_BUFFER_BIT	= 0x00004000;

	/* BeginMode */
	public static inline var POINTS			= 0x0000;
	public static inline var LINES			= 0x0001;
	public static inline var LINE_LOOP		= 0x0002;
	public static inline var LINE_STRIP		= 0x0003;
	public static inline var TRIANGLES		= 0x0004;
	public static inline var TRIANGLE_STRIP	= 0x0005;
	public static inline var TRIANGLE_FAN	= 0x0006;

	/* BlendingFactorDest */
	public static inline var ZERO					= 0;
	public static inline var ONE					= 1;
	public static inline var SRC_COLOR				= 0x0300;
	public static inline var ONE_MINUS_SRC_COLOR	= 0x0301;
	public static inline var SRC_ALPHA				= 0x0302;
	public static inline var ONE_MINUS_SRC_ALPHA	= 0x0303;
	public static inline var DST_ALPHA				= 0x0304;
	public static inline var ONE_MINUS_DST_ALPHA	= 0x0305;

	public static inline var DST_COLOR                      = 0x0306;
	public static inline var ONE_MINUS_DST_COLOR            = 0x0307;
	public static inline var SRC_ALPHA_SATURATE             = 0x0308;

	/* BlendEquationSeparate */
	public static inline var FUNC_ADD                       = 0x8006;
	public static inline var BLEND_EQUATION                 = 0x8009;
	public static inline var BLEND_EQUATION_RGB             = 0x8009;
	public static inline var BLEND_EQUATION_ALPHA           = 0x883D;

	/* BlendSubtract */
	public static inline var FUNC_SUBTRACT                  = 0x800A;
	public static inline var FUNC_REVERSE_SUBTRACT          = 0x800B;

	/* Separate Blend Functions */
	public static inline var BLEND_DST_RGB                  = 0x80C8;
	public static inline var BLEND_SRC_RGB                  = 0x80C9;
	public static inline var BLEND_DST_ALPHA                = 0x80CA;
	public static inline var BLEND_SRC_ALPHA                = 0x80CB;
	public static inline var CONSTANT_COLOR                 = 0x8001;
	public static inline var ONE_MINUS_CONSTANT_COLOR       = 0x8002;
	public static inline var CONSTANT_ALPHA                 = 0x8003;
	public static inline var ONE_MINUS_CONSTANT_ALPHA       = 0x8004;
	public static inline var BLEND_COLOR                    = 0x8005;

	/* Buffer Objects */
	public static inline var ARRAY_BUFFER                   = 0x8892;
	public static inline var ELEMENT_ARRAY_BUFFER           = 0x8893;
	public static inline var ARRAY_BUFFER_BINDING           = 0x8894;
	public static inline var ELEMENT_ARRAY_BUFFER_BINDING   = 0x8895;

	public static inline var STREAM_DRAW                    = 0x88E0;
	public static inline var STATIC_DRAW                    = 0x88E4;
	public static inline var DYNAMIC_DRAW                   = 0x88E8;

	public static inline var BUFFER_SIZE                    = 0x8764;
	public static inline var BUFFER_USAGE                   = 0x8765;

	public static inline var CURRENT_VERTEX_ATTRIB          = 0x8626;

	/* CullFaceMode */
	public static inline var FRONT                          = 0x0404;
	public static inline var BACK                           = 0x0405;
	public static inline var FRONT_AND_BACK                 = 0x0408;

	/* TEXTURE_2D */
	public static inline var CULL_FACE                      = 0x0B44;
	public static inline var BLEND                          = 0x0BE2;
	public static inline var DITHER                         = 0x0BD0;
	public static inline var STENCIL_TEST                   = 0x0B90;
	public static inline var DEPTH_TEST                     = 0x0B71;
	public static inline var SCISSOR_TEST                   = 0x0C11;
	public static inline var POLYGON_OFFSET_FILL            = 0x8037;
	public static inline var SAMPLE_ALPHA_TO_COVERAGE       = 0x809E;
	public static inline var SAMPLE_COVERAGE                = 0x80A0;

	/* ErrorCode */
	public static inline var NO_ERROR                       = 0;
	public static inline var INVALID_ENUM                   = 0x0500;
	public static inline var INVALID_VALUE                  = 0x0501;
	public static inline var INVALID_OPERATION              = 0x0502;
	public static inline var OUT_OF_MEMORY                  = 0x0505;

	/* FrontFaceDirection */
	public static inline var CW                             = 0x0900;
	public static inline var CCW                            = 0x0901;

	/* GetPName */
	public static inline var LINE_WIDTH                     = 0x0B21;
	public static inline var ALIASED_POINT_SIZE_RANGE       = 0x846D;
	public static inline var ALIASED_LINE_WIDTH_RANGE       = 0x846E;
	public static inline var CULL_FACE_MODE                 = 0x0B45;
	public static inline var FRONT_FACE                     = 0x0B46;
	public static inline var DEPTH_RANGE                    = 0x0B70;
	public static inline var DEPTH_WRITEMASK                = 0x0B72;
	public static inline var DEPTH_CLEAR_VALUE              = 0x0B73;
	public static inline var DEPTH_FUNC                     = 0x0B74;
	public static inline var STENCIL_CLEAR_VALUE            = 0x0B91;
	public static inline var STENCIL_FUNC                   = 0x0B92;
	public static inline var STENCIL_FAIL                   = 0x0B94;
	public static inline var STENCIL_PASS_DEPTH_FAIL        = 0x0B95;
	public static inline var STENCIL_PASS_DEPTH_PASS        = 0x0B96;
	public static inline var STENCIL_REF                    = 0x0B97;
	public static inline var STENCIL_VALUE_MASK             = 0x0B93;
	public static inline var STENCIL_WRITEMASK              = 0x0B98;
	public static inline var STENCIL_BACK_FUNC              = 0x8800;
	public static inline var STENCIL_BACK_FAIL              = 0x8801;
	public static inline var STENCIL_BACK_PASS_DEPTH_FAIL   = 0x8802;
	public static inline var STENCIL_BACK_PASS_DEPTH_PASS   = 0x8803;
	public static inline var STENCIL_BACK_REF               = 0x8CA3;
	public static inline var STENCIL_BACK_VALUE_MASK        = 0x8CA4;
	public static inline var STENCIL_BACK_WRITEMASK         = 0x8CA5;
	public static inline var VIEWPORT                       = 0x0BA2;
	public static inline var SCISSOR_BOX                    = 0x0C10;
	/*      SCISSOR_TEST */
	public static inline var COLOR_CLEAR_VALUE              = 0x0C22;
	public static inline var COLOR_WRITEMASK                = 0x0C23;
	public static inline var UNPACK_ALIGNMENT               = 0x0CF5;
	public static inline var PACK_ALIGNMENT                 = 0x0D05;
	public static inline var MAX_TEXTURE_SIZE               = 0x0D33;
	public static inline var MAX_VIEWPORT_DIMS              = 0x0D3A;
	public static inline var SUBPIXEL_BITS                  = 0x0D50;
	public static inline var RED_BITS                       = 0x0D52;
	public static inline var GREEN_BITS                     = 0x0D53;
	public static inline var BLUE_BITS                      = 0x0D54;
	public static inline var ALPHA_BITS                     = 0x0D55;
	public static inline var DEPTH_BITS                     = 0x0D56;
	public static inline var STENCIL_BITS                   = 0x0D57;
	public static inline var POLYGON_OFFSET_UNITS           = 0x2A00;
	/*      POLYGON_OFFSET_FILL */
	public static inline var POLYGON_OFFSET_FACTOR          = 0x8038;
	public static inline var TEXTURE_BINDING_2D             = 0x8069;
	public static inline var SAMPLE_BUFFERS                 = 0x80A8;
	public static inline var SAMPLES                        = 0x80A9;
	public static inline var SAMPLE_COVERAGE_VALUE          = 0x80AA;
	public static inline var SAMPLE_COVERAGE_INVERT         = 0x80AB;

	public static inline var NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
	public static inline var COMPRESSED_TEXTURE_FORMATS     = 0x86A3;

	/* HintMode */
	public static inline var DONT_CARE                      = 0x1100;
	public static inline var FASTEST                        = 0x1101;
	public static inline var NICEST                         = 0x1102;

	/* HintTarget */
	public static inline var GENERATE_MIPMAP_HINT            = 0x8192;

	/* DataType */
	public static inline var BYTE                           = 0x1400;
	public static inline var UNSIGNED_BYTE                  = 0x1401;
	public static inline var SHORT                          = 0x1402;
	public static inline var UNSIGNED_SHORT                 = 0x1403;
	public static inline var INT                            = 0x1404;
	public static inline var UNSIGNED_INT                   = 0x1405;
	public static inline var FLOAT                          = 0x1406;

	/* PixelFormat */
	public static inline var DEPTH_COMPONENT                = 0x1902;
	public static inline var ALPHA                          = 0x1906;
	public static inline var RGB                            = 0x1907;
	public static inline var RGBA                           = 0x1908;
	public static inline var LUMINANCE                      = 0x1909;
	public static inline var LUMINANCE_ALPHA                = 0x190A;

	/* PixelType */
	public static inline var UNSIGNED_SHORT_4_4_4_4         = 0x8033;
	public static inline var UNSIGNED_SHORT_5_5_5_1         = 0x8034;
	public static inline var UNSIGNED_SHORT_5_6_5           = 0x8363;

	/* Shaders */
	public static inline var FRAGMENT_SHADER                  = 0x8B30;
	public static inline var VERTEX_SHADER                    = 0x8B31;
	public static inline var MAX_VERTEX_ATTRIBS               = 0x8869;
	public static inline var MAX_VERTEX_UNIFORM_VECTORS       = 0x8DFB;
	public static inline var MAX_VARYING_VECTORS              = 0x8DFC;
	public static inline var MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
	public static inline var MAX_VERTEX_TEXTURE_IMAGE_UNITS   = 0x8B4C;
	public static inline var MAX_TEXTURE_IMAGE_UNITS          = 0x8872;
	public static inline var MAX_FRAGMENT_UNIFORM_VECTORS     = 0x8DFD;
	public static inline var SHADER_TYPE                      = 0x8B4F;
	public static inline var DELETE_STATUS                    = 0x8B80;
	public static inline var LINK_STATUS                      = 0x8B82;
	public static inline var VALIDATE_STATUS                  = 0x8B83;
	public static inline var ATTACHED_SHADERS                 = 0x8B85;
	public static inline var ACTIVE_UNIFORMS                  = 0x8B86;
	public static inline var ACTIVE_UNIFORM_MAX_LENGTH        = 0x8B87;
	public static inline var ACTIVE_ATTRIBUTES                = 0x8B89;
	public static inline var ACTIVE_ATTRIBUTE_MAX_LENGTH      = 0x8B8A;
	public static inline var SHADING_LANGUAGE_VERSION         = 0x8B8C;
	public static inline var CURRENT_PROGRAM                  = 0x8B8D;

	/* StencilFunction */
	public static inline var NEVER                          = 0x0200;
	public static inline var LESS                           = 0x0201;
	public static inline var EQUAL                          = 0x0202;
	public static inline var LEQUAL                         = 0x0203;
	public static inline var GREATER                        = 0x0204;
	public static inline var NOTEQUAL                       = 0x0205;
	public static inline var GEQUAL                         = 0x0206;
	public static inline var ALWAYS                         = 0x0207;

	/* StencilOp */
	public static inline var KEEP                           = 0x1E00;
	public static inline var REPLACE                        = 0x1E01;
	public static inline var INCR                           = 0x1E02;
	public static inline var DECR                           = 0x1E03;
	public static inline var INVERT                         = 0x150A;
	public static inline var INCR_WRAP                      = 0x8507;
	public static inline var DECR_WRAP                      = 0x8508;

	/* StringName */
	public static inline var VENDOR                         = 0x1F00;
	public static inline var RENDERER                       = 0x1F01;
	public static inline var VERSION                        = 0x1F02;
	public static inline var EXTENSIONS                     = 0x1F03;

	/* TextureMagFilter */
	public static inline var NEAREST                        = 0x2600;
	public static inline var LINEAR                         = 0x2601;

	/* TextureMinFilter */
	public static inline var NEAREST_MIPMAP_NEAREST         = 0x2700;
	public static inline var LINEAR_MIPMAP_NEAREST          = 0x2701;
	public static inline var NEAREST_MIPMAP_LINEAR          = 0x2702;
	public static inline var LINEAR_MIPMAP_LINEAR           = 0x2703;

	/* TextureParameterName */
	public static inline var TEXTURE_MAG_FILTER             = 0x2800;
	public static inline var TEXTURE_MIN_FILTER             = 0x2801;
	public static inline var TEXTURE_WRAP_S                 = 0x2802;
	public static inline var TEXTURE_WRAP_T                 = 0x2803;

	/* TextureTarget */
	public static inline var TEXTURE_2D                     = 0x0DE1;
	public static inline var TEXTURE                        = 0x1702;

	public static inline var TEXTURE_CUBE_MAP               = 0x8513;
	public static inline var TEXTURE_BINDING_CUBE_MAP       = 0x8514;
	public static inline var TEXTURE_CUBE_MAP_POSITIVE_X    = 0x8515;
	public static inline var TEXTURE_CUBE_MAP_NEGATIVE_X    = 0x8516;
	public static inline var TEXTURE_CUBE_MAP_POSITIVE_Y    = 0x8517;
	public static inline var TEXTURE_CUBE_MAP_NEGATIVE_Y    = 0x8518;
	public static inline var TEXTURE_CUBE_MAP_POSITIVE_Z    = 0x8519;
	public static inline var TEXTURE_CUBE_MAP_NEGATIVE_Z    = 0x851A;
	public static inline var MAX_CUBE_MAP_TEXTURE_SIZE      = 0x851C;

	/* TextureUnit */
	public static inline var TEXTURE0                       = 0x84C0;
	public static inline var TEXTURE1                       = 0x84C1;
	public static inline var TEXTURE2                       = 0x84C2;
	public static inline var TEXTURE3                       = 0x84C3;
	public static inline var TEXTURE4                       = 0x84C4;
	public static inline var TEXTURE5                       = 0x84C5;
	public static inline var TEXTURE6                       = 0x84C6;
	public static inline var TEXTURE7                       = 0x84C7;
	public static inline var TEXTURE8                       = 0x84C8;
	public static inline var TEXTURE9                       = 0x84C9;
	public static inline var TEXTURE10                      = 0x84CA;
	public static inline var TEXTURE11                      = 0x84CB;
	public static inline var TEXTURE12                      = 0x84CC;
	public static inline var TEXTURE13                      = 0x84CD;
	public static inline var TEXTURE14                      = 0x84CE;
	public static inline var TEXTURE15                      = 0x84CF;
	public static inline var TEXTURE16                      = 0x84D0;
	public static inline var TEXTURE17                      = 0x84D1;
	public static inline var TEXTURE18                      = 0x84D2;
	public static inline var TEXTURE19                      = 0x84D3;
	public static inline var TEXTURE20                      = 0x84D4;
	public static inline var TEXTURE21                      = 0x84D5;
	public static inline var TEXTURE22                      = 0x84D6;
	public static inline var TEXTURE23                      = 0x84D7;
	public static inline var TEXTURE24                      = 0x84D8;
	public static inline var TEXTURE25                      = 0x84D9;
	public static inline var TEXTURE26                      = 0x84DA;
	public static inline var TEXTURE27                      = 0x84DB;
	public static inline var TEXTURE28                      = 0x84DC;
	public static inline var TEXTURE29                      = 0x84DD;
	public static inline var TEXTURE30                      = 0x84DE;
	public static inline var TEXTURE31                      = 0x84DF;
	public static inline var ACTIVE_TEXTURE                 = 0x84E0;

	/* TextureWrapMode */
	public static inline var REPEAT                         = 0x2901;
	public static inline var CLAMP_TO_EDGE                  = 0x812F;
	public static inline var MIRRORED_REPEAT                = 0x8370;

	/* Uniform Types */
	public static inline var FLOAT_VEC2                     = 0x8B50;
	public static inline var FLOAT_VEC3                     = 0x8B51;
	public static inline var FLOAT_VEC4                     = 0x8B52;
	public static inline var INT_VEC2                       = 0x8B53;
	public static inline var INT_VEC3                       = 0x8B54;
	public static inline var INT_VEC4                       = 0x8B55;
	public static inline var BOOL                           = 0x8B56;
	public static inline var BOOL_VEC2                      = 0x8B57;
	public static inline var BOOL_VEC3                      = 0x8B58;
	public static inline var BOOL_VEC4                      = 0x8B59;
	public static inline var FLOAT_MAT2                     = 0x8B5A;
	public static inline var FLOAT_MAT3                     = 0x8B5B;
	public static inline var FLOAT_MAT4                     = 0x8B5C;
	public static inline var SAMPLER_2D                     = 0x8B5E;
	public static inline var SAMPLER_CUBE                   = 0x8B60;

	/* Vertex Arrays */
	public static inline var VERTEX_ATTRIB_ARRAY_ENABLED        = 0x8622;
	public static inline var VERTEX_ATTRIB_ARRAY_SIZE           = 0x8623;
	public static inline var VERTEX_ATTRIB_ARRAY_STRIDE         = 0x8624;
	public static inline var VERTEX_ATTRIB_ARRAY_TYPE           = 0x8625;
	public static inline var VERTEX_ATTRIB_ARRAY_NORMALIZED     = 0x886A;
	public static inline var VERTEX_ATTRIB_ARRAY_POINTER        = 0x8645;
	public static inline var VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;

	/* Read Format */
	public static inline var IMPLEMENTATION_COLOR_READ_TYPE   = 0x8B9A;
	public static inline var IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;

	/* Shader Source */
	public static inline var COMPILE_STATUS                 = 0x8B81;
	public static inline var INFO_LOG_LENGTH                = 0x8B84;
	public static inline var SHADER_SOURCE_LENGTH           = 0x8B88;
	public static inline var SHADER_COMPILER                = 0x8DFA;

	/* Shader Precision-Specified Types */
	public static inline var LOW_FLOAT                      = 0x8DF0;
	public static inline var MEDIUM_FLOAT                   = 0x8DF1;
	public static inline var HIGH_FLOAT                     = 0x8DF2;
	public static inline var LOW_INT                        = 0x8DF3;
	public static inline var MEDIUM_INT                     = 0x8DF4;
	public static inline var HIGH_INT                       = 0x8DF5;

	/* Framebuffer Object. */
	public static inline var FRAMEBUFFER                    = 0x8D40;
	public static inline var RENDERBUFFER                   = 0x8D41;

	public static inline var RGBA4                          = 0x8056;
	public static inline var RGB5_A1                        = 0x8057;
	public static inline var RGB565                         = 0x8D62;
	public static inline var DEPTH_COMPONENT16              = 0x81A5;
	public static inline var STENCIL_INDEX                  = 0x1901;
	public static inline var STENCIL_INDEX8                 = 0x8D48;

	public static inline var RENDERBUFFER_WIDTH             = 0x8D42;
	public static inline var RENDERBUFFER_HEIGHT            = 0x8D43;
	public static inline var RENDERBUFFER_INTERNAL_FORMAT   = 0x8D44;
	public static inline var RENDERBUFFER_RED_SIZE          = 0x8D50;
	public static inline var RENDERBUFFER_GREEN_SIZE        = 0x8D51;
	public static inline var RENDERBUFFER_BLUE_SIZE         = 0x8D52;
	public static inline var RENDERBUFFER_ALPHA_SIZE        = 0x8D53;
	public static inline var RENDERBUFFER_DEPTH_SIZE        = 0x8D54;
	public static inline var RENDERBUFFER_STENCIL_SIZE      = 0x8D55;

	public static inline var FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE           = 0x8CD0;
	public static inline var FRAMEBUFFER_ATTACHMENT_OBJECT_NAME           = 0x8CD1;
	public static inline var FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL         = 0x8CD2;
	public static inline var FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE	= 0x8CD3;

	public static inline var COLOR_ATTACHMENT0              = 0x8CE0;
	public static inline var DEPTH_ATTACHMENT               = 0x8D00;
	public static inline var STENCIL_ATTACHMENT             = 0x8D20;

	public static inline var NONE                           = 0;

	public static inline var FRAMEBUFFER_COMPLETE                      = 0x8CD5;
	public static inline var FRAMEBUFFER_INCOMPLETE_ATTACHMENT         = 0x8CD6;
	public static inline var FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
	public static inline var FRAMEBUFFER_INCOMPLETE_DIMENSIONS         = 0x8CD9;
	public static inline var FRAMEBUFFER_UNSUPPORTED                   = 0x8CDD;

	public static inline var FRAMEBUFFER_BINDING            = 0x8CA6;
	public static inline var RENDERBUFFER_BINDING           = 0x8CA7;
	public static inline var MAX_RENDERBUFFER_SIZE          = 0x84E8;

	public static inline var INVALID_FRAMEBUFFER_OPERATION  = 0x0506;

	public static var gl : WebGLRenderingContext;

	public static var currentProgramm : WebGLProgram;

	public static function initGL(canvas : Canvas, antialias : Bool) : WebGLRenderingContext
	{
		gl = canvas.getContext("experimental-webgl", {antialias : antialias});
		if (gl == null)
		{
			throw "Could not initialise WebGL.";
		}
		return gl;
	}

	public static function useProgram(shaderProgramm : WebGLProgram) : Void
	{
		currentProgramm = shaderProgramm;
		gl.useProgram(currentProgramm);
	}

	public static function createProgram(vertexSourceClass : Class<Dynamic>, fragmentSourceClass : Class<Dynamic>) : WebGLProgram
	{
		currentProgramm = gl.createProgram();

		var vs = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vs, createGLSLFromClass(vertexSourceClass));
		gl.compileShader(vs);
		if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS))
			throw gl.getShaderInfoLog(vs);

		var fs = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fs, createGLSLFromClass(fragmentSourceClass));
		gl.compileShader(fs);
		if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS))
			throw gl.getShaderInfoLog(fs);

		gl.attachShader(currentProgramm, vs);
		gl.attachShader(currentProgramm, fs);
		gl.linkProgram(currentProgramm);

		if (!gl.getProgramParameter(currentProgramm, gl.LINK_STATUS))
			throw "Could not link shader!";

		return currentProgramm;
	}

	public static function createGLSLFromClass(shaderClass : Class<Dynamic>)
	{
		var metaDatas = Meta.getType(shaderClass);
		var glsl : Array<String> = Reflect.field(metaDatas, "GLSL");
		if (glsl.length != 1)
			throw "Missing GLSL metadata in shader class: " + shaderClass;
		return glsl[0];
	}

	public static function createArrayBuffer(array : ArrayBuffer) : WebGLBuffer
	{
		var vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
		return vertexBuffer;
	}

	public static function getUniformLocation(name : String)
	{
		var location = gl.getUniformLocation(currentProgramm, name);
		if (location == null)
			trace ("Could not find " + name + " in shader");

		var result = new GLUniformLocation();
		result.location = location;
		return result;
	}

	public static inline function activeTexture(texture : GLenum) : Void
	{
		gl.activeTexture(texture);
	}

	public static inline function bindBuffer(target : GLenum, buffer : WebGLBuffer) : Void
	{
		gl.bindBuffer(target, buffer);
	}

	public static inline function bindFramebuffer(target : GLenum, framebuffer : WebGLFramebuffer) : Void;
	public static inline function bindRenderbuffer(target : GLenum, renderbuffer : WebGLRenderbuffer) : Void;
	public static inline function bindTexture(target:GLenum, texture:WebGLTexture) : Void
	{
		gl.bindTexture(target, texture);
	}

	public static inline function blendFunc(sfactor : GLenum, dfactor : GLenum) : Void
	{
		gl.blendFunc(sfactor, dfactor);
	}

	public static inline function bufferData(target : GLenum, data : ArrayBuffer , usage : GLenum ) : Void
	{
		gl.bufferData(target, data, usage);
	}

	public static inline function clear(mask : GLbitfield) : Void;
	public static inline function clearColor(red : GLclampf, green : GLclampf, blue : GLclampf, alpha : GLclampf) : Void;
	public static inline function clearDepth(depth : GLclampf) : Void;
	public static inline function compileShader(shader : WebGLShader) : Void;

	public static inline function createBuffer() : WebGLBuffer
	{
		return gl.createBuffer();
	}

	public static inline function createFramebuffer() : WebGLFramebuffer
	{
		return gl.createFramebuffer();
	}

	public static inline function createRenderbuffer() : WebGLRenderbuffer
	{
		return gl.createRenderbuffer();
	}

	public static inline function createTexture() : WebGLTexture
	{
		return gl.createTexture();
	}

	public static inline function createShader(type : GLenum) : WebGLShader
	{
		return gl.createShader(type);
	}

	public static inline function disable(cap : GLenum) : Void
	{
		gl.disable(cap);
	}

	public static inline function drawArrays(mode : GLenum, first : GLint, count : GLsizei) : Void
	{
		gl.drawArrays(mode, first, count);
	}

	public static inline function enable(cap : GLenum) : Void
	{
		gl.enable(cap);
	}

	public static inline function enableVertexAttribArray(index : GLuint) : Void
	{
		gl.enableVertexAttribArray(index);
	}

	public static inline function framebufferRenderbuffer(target : GLenum, attachment : GLenum, renderbuffertarget : GLenum, renderbuffer : WebGLRenderbuffer) : Void;
	public static inline function framebufferTexture2D(target : GLenum, attachment : GLenum, textarget : GLenum, texture : WebGLTexture, level : GLint) : Void;

	public static inline function generateMipmap(target : GLenum) : Void;
	public static inline function getAttribLocation(program : WebGLProgram, name : DOMString) : GLint
	{
		return gl.getAttribLocation(program, name);
	}

	public static inline function getShaderInfoLog(shader : WebGLShader) : DOMString
	{
		return gl.getShaderInfoLog(shader);
	}

	public static inline function getShaderParameter(shader : WebGLShader, pname : GLenum) : Dynamic;
	public static inline function getProgramParameter(program : WebGLProgram, pname : GLenum) : Dynamic;
	public static inline function linkProgram(program : WebGLProgram) : Void;

	public static inline function renderbufferStorage(target : GLenum, internalformat : GLenum, width : GLsizei, height : GLsizei) : Void;
	public static inline function shaderSource(shader : WebGLShader, source : DOMString) : Void;

	public static inline function texImage2DArrayBufferView(target : GLenum, level : GLint, internalformat : GLenum, width : GLsizei, height : GLsizei, border : GLint, format : GLenum, type : GLenum, pixels : ArrayBufferView) : Void
	{
		untyped gl.texImage2D(target, level, internalformat, width, height, border, format, type, pixels);
	}

	public static inline function texImage2DImageData(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, pixels : ImageData) : Void
	{
		untyped gl.texImage2D(target, level, internalformat, format, type, pixels);
	}

	public static inline function texImage2DImage(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, image : Image) : Void
	{
		untyped gl.texImage2D(target, level, internalformat, format, type, image);
	}

	public static inline function texImage2DCanvas(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, canvas : Canvas) : Void
	{
		untyped gl.texImage2D(target, level, internalformat, format, type, canvas);
	}

	public static inline function texImage2DVideo(target : GLenum, level : GLint, internalformat : GLenum, format : GLenum, type : GLenum, video : Video) : Void
	{
		untyped gl.texImage2D(target, level, internalformat, format, type, video);
	}

	public static inline function texParameteri(target : GLenum, pname : GLenum, param : GLint) : Void;

	public static inline function vertexAttribPointer(indx : GLuint, size : GLint, type:GLenum, normalized : GLboolean, stride : GLsizei, offset : GLsizeiptr) : Void
	{
		gl.vertexAttribPointer(indx, size, type, normalized, stride, offset);
	}

	public static inline function viewport(x : GLint, y : GLint, width : GLsizei, height : GLsizei) : Void
	{
		gl.viewport(x, y, width, height);
	}
}
