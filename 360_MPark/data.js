var APP_DATA = {
  "scenes": [
    {
      "id": "0-memorialparkfield",
      "name": "MemorialParkField",
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
          "yaw": -2.7404573641131407,
          "pitch": 0.0026683698398066724,
          "rotation": 0,
          "target": "1-memorialparkgrass"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-memorialparkgrass",
      "name": "MemorialParkGrass",
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
          "yaw": -0.0026196107714362427,
          "pitch": -0.013686994539359176,
          "rotation": 0,
          "target": "0-memorialparkfield"
        },
        {
          "yaw": -2.730666932009038,
          "pitch": 0.03453310972667367,
          "rotation": 0,
          "target": "2-memorialparkstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-memorialparkstairs",
      "name": "MemorialParkStairs",
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
          "yaw": -0.21550600235148565,
          "pitch": 0.139065704646832,
          "rotation": 0,
          "target": "0-memorialparkfield"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
