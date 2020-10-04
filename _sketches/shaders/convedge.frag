precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
vec2 offset[9];
float kernel[9];
vec4 conv = vec4(0.0);

void main(){

    vec2 uv = vTexCoord;

    uv.y = 1.0 - uv.y;

    kernel[0] = -1.0; kernel[1] = -1.0; kernel[2] = -1.0;
    kernel[3] = -1.0; kernel[4] = 8.0; kernel[5] = -1.0;
    kernel[6] = -1.0; kernel[7] = -1.0; kernel[8] = -1.0;


	offset[0] = vec2(-0.0025, -0.0025); 
	offset[1] = vec2(0.0, -0.0025); 
	offset[2] = vec2(0.0025, -0.0025); 
	offset[3] = vec2(-0.0025, 0.0); 
	offset[4] = vec2(0.0, 0.0); 
	offset[5] = vec2(0.0025, 0.0);
	offset[6] = vec2(-0.0025, 0.0025); 
	offset[7] = vec2(0.0, 0.0025); 
	offset[8] = vec2(0.0025, 0.0025); 

	for(int i = 0; i<9; i++){
		vec4 color = texture2D(tex0, uv + offset[i]);
		conv += color * kernel[i];
	}
	gl_FragColor = vec4(conv.rgb, 1.0);
}