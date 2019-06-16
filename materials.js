const AO = loadTexture( "textures/aomap_plane_1.png" );
const AO_NO_HOLDER = loadTexture( "textures/aomap_plane_2.png" );

const DIFFUSE_MAP_DARK = loadTexture( "textures/Wood06_col.jpg" );
const ROUGHNESS_MAP_DARK = loadTexture( "textures/Wood06_rgh.jpg" );
const NORMAL_MAP_DARK = loadTexture( "textures/Wood06_nrm.jpg" );
			
const DIFFUSE_MAP_LIGHT = loadTexture( "textures/Wood03_col.jpg" );
const ROUGHNESS_MAP_LIGHT = loadTexture( "textures/Wood03_rgh.jpg" );
const NORMAL_MAP_LIGHT = loadTexture( "textures/Wood03_nrm.jpg" );

const ZEROS = new THREE.Vector3(0, 0, 0);
const BLACK_LIGHT = { type: "v3", value: ZEROS };
const LIGHTS_INT = { type: "v3", value: new THREE.Vector3(  0.7,   0.7,   0.7)};
const LIGHTS = { value:
[
	new THREE.Vector3(70, 20, -70),
	new THREE.Vector3(-70, 20, -70),
	new THREE.Vector3(0, 20, 100),
]};

const UNIFORMS = 
{ 
	RED: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
		cdiff:	{ type: "v3", value: new THREE.Vector3(  0.7,   0.0,   0.0) },
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.2 },
		pointLightPosition: LIGHTS
	},
	GREEN: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
		cdiff:	{ type: "v3", value: new THREE.Vector3(  0.05,   0.5,   0.01) },
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.2 },
		pointLightPosition: LIGHTS
	},
	BLUE: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
		cdiff:	{ type: "v3", value: new THREE.Vector3(  0.05,   0.05,   0.8) },
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.2 },
		pointLightPosition: LIGHTS
	},
	WHITE: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
		cdiff:	{ type: "v3", value: new THREE.Vector3(    1,     1,     1) },
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.2 },
		pointLightPosition: LIGHTS
	},
	METAL: {
		cspec:	{ type: "v3", value: new THREE.Vector3(  0.6,   0.6,   0.7) },
		cdiff:	BLACK_LIGHT,
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.5 },
		pointLightPosition: LIGHTS
	},
	IRON: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.562, 0.565, 0.578) },
		cdiff:	BLACK_LIGHT,
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.8 },
		pointLightPosition: LIGHTS
	},
	ALUMINIUM: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.913, 0.922, 0.924) },
		cdiff:	BLACK_LIGHT,
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.7 },
		pointLightPosition: LIGHTS
	},
	COPPER: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.955, 0.638, 0.538) },
		cdiff:	BLACK_LIGHT,
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.75 },
		pointLightPosition: LIGHTS
	},
	BLUEMETAL: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.05,  0.05,    0.7)},
		cdiff:	BLACK_LIGHT,
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.5 },
		pointLightPosition: LIGHTS
	},
	REDMETAL: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.7,  0.05,    0.05)},
		cdiff:	BLACK_LIGHT,
		clight:	LIGHTS_INT,
		roughness: { type: "f", value: 0.5 },
		pointLightPosition: LIGHTS
	},
	PLANE: {
		aoMap:	{ type: "t", value: AO},
		aoMapNoHolder:	{ type: "t", value: AO_NO_HOLDER},
		holder: { type: "f", value: 1.0 }
	},
	DARKWOOD: {
		diffuseMap:	{ type: "t", value: DIFFUSE_MAP_DARK},
		roughnessMap:	{ type: "t", value: ROUGHNESS_MAP_DARK},
		normalMap:	{ type: "t", value: NORMAL_MAP_DARK},
		normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
		pointLightPosition: LIGHTS,
		clight:	LIGHTS_INT,
		spec_col:	{ type: "v3", value: new THREE.Vector3(0.12,  0.12,    0.12) },
		textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) }
	},
	LIGHTWOOD: {
		diffuseMap:	{ type: "t", value: DIFFUSE_MAP_LIGHT},
		roughnessMap:	{ type: "t", value: ROUGHNESS_MAP_LIGHT},
		normalMap:	{ type: "t", value: NORMAL_MAP_LIGHT},
		normalScale: {type: "v2", value: new THREE.Vector2(1,1)},
		pointLightPosition: LIGHTS,
		clight:	LIGHTS_INT,
		spec_col:	{ type: "v3", value: new THREE.Vector3(0.12,  0.12,    0.12) },
		textureRepeat: { type: "v2", value: new THREE.Vector2(1,1) }
	}
};

MATERIALS =
{
	RED: {
		NAME: "Plastic Red",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.RED, vertexShader: VS, fragmentShader: FS })
	},
	BLUE: {
		NAME: "Plastic Blue",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.BLUE, vertexShader: VS, fragmentShader: FS })
	},
	GREEN: {
		NAME: "Plastic Green",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.GREEN, vertexShader: VS, fragmentShader: FS })
	},
	WHITE: {
		NAME: "White",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.WHITE, vertexShader: VS, fragmentShader: FS })
	},
	METAL: {
		NAME: "Steel",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.METAL, vertexShader: VS, fragmentShader: FS })
	},
	IRON: {
		NAME: "Iron",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.IRON, vertexShader: VS, fragmentShader: FS })
	},
	ALUMINIUM: {
		NAME: "Aluminium",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.ALUMINIUM, vertexShader: VS, fragmentShader: FS })
	},
	COPPER: {
		NAME: "Copper",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.COPPER, vertexShader: VS, fragmentShader: FS })
	},
	BLUEMETAL: {
		NAME: "Metal Blue",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.BLUEMETAL, vertexShader: VS, fragmentShader: FS })
	},
	REDMETAL: {
		NAME: "Metal Red",
		M: new THREE.ShaderMaterial({ uniforms: UNIFORMS.REDMETAL, vertexShader: VS, fragmentShader: FS })
	},
	DARKWOOD: {
		NAME: "Woodlike Dark",
		M: new THREE.ShaderMaterial({uniforms: UNIFORMS.DARKWOOD, vertexShader:VST ,fragmentShader:FST})
	},
	LIGHTWOOD: {
		NAME: "Woodlike Light",
		M: new THREE.ShaderMaterial({uniforms: UNIFORMS.LIGHTWOOD, vertexShader:VST ,fragmentShader:FST})
	},
	PLANE: {
		NAME: "Plane",
		M: new THREE.ShaderMaterial({uniforms: UNIFORMS.PLANE, vertexShader: VSP, fragmentShader: FSP})
	}
};

MATERIALS.DARKWOOD.M.extensions = { derivatives: true };
MATERIALS.LIGHTWOOD.M.extensions = { derivatives: true };

function loadTexture(file) {
	var texture = new THREE.TextureLoader().load( file , function ( texture ) {
		texture.minFilter = THREE.LinearMipMapLinearFilter;
		texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.offset.set( 0, 0 );
		texture.needsUpdate = true;
		render();
		} );
	return texture;
}
