
var gl;
var points;
var count = 0;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 0.82, 0.01, 1.0 );
    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
	
    //  Load shaders and initialize attribute buffers
	canvas.onclick = function fun(){
		var num = 0;
		count++;
		if(count == 1){
			 var vertices1 = new Float32Array([
				-1, -1 ,
				0, 1 ,
				1, -1 
			]); 
			console.log("hello1");
			// Load the data into the GPU
			var bufferId = gl.createBuffer();
			gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
			gl.bufferData( gl.ARRAY_BUFFER, vertices1, gl.STATIC_DRAW );
			num =3;
		}
		if(2 == count){
			var vertices2 = new Float32Array([
				-0.5, 0.5,
				0.5, 0.5,
				-0.5, -0.5,
				-0.5, -0.5,
				0.5, 0.5,
				0.5, -0.5,
			]); 
			console.log("hello2");
			// Load the data into the GPU
			var bufferId = gl.createBuffer();
			gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
			gl.bufferData( gl.ARRAY_BUFFER, vertices2, gl.STATIC_DRAW );
			num =6;
		}
		if(3 == count){
			var vertices3 = new Float32Array([
				0, -1 ,
				1, 0.5 ,
				-1, 0.5,
				0, 1,
				1, -0.5,
				-1, -0.5
			]); 
			console.log("hello3");
			count = 0;
			// Load the data into the GPU
			var bufferId = gl.createBuffer();
			gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
			gl.bufferData( gl.ARRAY_BUFFER, vertices3, gl.STATIC_DRAW );
			num = 6;
		}
		console.log(count)
    
	
    // Associate our shader variables with our data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition ); 
    render(num);
	}
};


function render(num) {
    gl.clear( gl.COLOR_BUFFER_BIT );
	gl.drawArrays( gl.TRIANGLES, 0, num );
}
