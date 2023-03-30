var APP_DATA = {
  "scenes": [
    {
      "id": "0-officemarcel",
      "name": "officeMarcel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5532068578951872,
          "pitch": 0.392035344861668,
          "rotation": 0.7853981633974483,
          "target": "1-towardsoffice"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-towardsoffice",
      "name": "towardsOffice",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2567179595813744,
          "pitch": 0.1574143973452955,
          "rotation": 0,
          "target": "2-stairsup"
        },
        {
          "yaw": -3.105863700500862,
          "pitch": 0.22300416693584424,
          "rotation": 0,
          "target": "0-officemarcel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stairsup",
      "name": "stairsUp",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7932613542581795,
          "pitch": 0.038264008125002746,
          "rotation": 5.497787143782138,
          "target": "1-towardsoffice"
        },
        {
          "yaw": 0.29215236053432925,
          "pitch": 0.7106405967027793,
          "rotation": 0,
          "target": "4-stairsdown"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.39672242016667525,
        "pitch": -0.09022733562011354,
        "fov": 1.5645001081069043
      },
      "linkHotspots": [
        {
          "yaw": 0.2727800562409186,
          "pitch": 0.15717532913157584,
          "rotation": 6.283185307179586,
          "target": "4-stairsdown"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stairsdown",
      "name": "stairsDown",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7709574087119488,
          "pitch": 0.08524001609604248,
          "rotation": 0,
          "target": "2-stairsup"
        },
        {
          "yaw": 1.6285362694391594,
          "pitch": 0.31968321964811963,
          "rotation": 7.0685834705770345,
          "target": "5-towardslinac"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-towardslinac",
      "name": "towardsLinac",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.13851927721877,
          "pitch": 0.5881637506357933,
          "rotation": 0.7853981633974483,
          "target": "6-downlinac"
        },
        {
          "yaw": -0.5400593021028222,
          "pitch": 0.1847556839800113,
          "rotation": 0.7853981633974483,
          "target": "4-stairsdown"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-downlinac",
      "name": "downLinac",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8025265082602786,
          "pitch": 0.40677559062367763,
          "rotation": 0.7853981633974483,
          "target": "5-towardslinac"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-coffeespotright",
      "name": "coffeeSpotRight",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2112380393321516,
          "pitch": 0.30101710722331987,
          "rotation": 0.7853981633974483,
          "target": "5-towardslinac"
        },
        {
          "yaw": 0.14909069008805353,
          "pitch": 0.3919046509808801,
          "rotation": 0,
          "target": "8-coffeespotleft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-coffeespotleft",
      "name": "coffeeSpotLeft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7239391300458102,
          "pitch": 0.30242018857215136,
          "rotation": 0,
          "target": "7-coffeespotright"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
