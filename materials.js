const MATERIALS = 
{ 
	RED: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(  0.7,   0.0,   0.0) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.2 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	GREEN: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(  0.05,   0.5,   0.01) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.2 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	BLUE: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(  0.05,   0.05,   0.8) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.2 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	WHITE: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(    1,     1,     1) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.2 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 10, 100) }
		},
	METAL: {
			cspec:	{ type: "v3", value: new THREE.Vector3(  0.6,   0.6,   0.7) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(    0,     0,     0) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.5 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	IRON: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.562, 0.565, 0.578) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(    0,     0,     0) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.8 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	ALLUMINIUM: {
				cspec:	{ type: "v3", value: new THREE.Vector3(0.913, 0.922, 0.924) },
				cdiff:	{ type: "v3", value: new THREE.Vector3(    0,     0,     0) },
				clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
				roughness: { type: "f", value: 0.7 },
				pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	COPPER: {
				cspec:	{ type: "v3", value: new THREE.Vector3(0.955, 0.638, 0.538) },
				cdiff:	{ type: "v3", value: new THREE.Vector3(    0,     0,     0) },
				clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
				roughness: { type: "f", value: 0.75 },
				pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	BLUEMETAL: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.05,  0.05,    0.7)},
			cdiff:	{ type: "v3", value: new THREE.Vector3(    0,     0,     0) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.5 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
	},
	REDMETAL: {
		cspec:	{ type: "v3", value: new THREE.Vector3(0.7,  0.05,    0.05)},
		cdiff:	{ type: "v3", value: new THREE.Vector3(    0,     0,     0) },
		clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
		roughness: { type: "f", value: 0.5 },
		pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
}

};


