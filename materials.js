const MATERIALS = 
{ 
	RED: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(  0.7,   0.0,   0.0) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.2 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	WHITE: {
			cspec:	{ type: "v3", value: new THREE.Vector3(0.004, 0.004, 0.004) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(    1,     1,     1) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.2 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		},
	METAL: {
			cspec:	{ type: "v3", value: new THREE.Vector3(  0.6,   0.6,   0.7) },
			cdiff:	{ type: "v3", value: new THREE.Vector3(    0,     0,     0) },
			clight:	{ type: "v3", value: new THREE.Vector3(  1.0,   1.0,   1.0) },
			roughness: { type: "f", value: 0.5 },
			pointLightPosition:	{ type: "v3", value: new THREE.Vector3(0, 0, 100) }
		}
};
