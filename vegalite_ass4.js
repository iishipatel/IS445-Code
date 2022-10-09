{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing body mass and flipper lengths of penguins.",
  "data": {
    "url": "data/penguins.json"
  },
  "vconcat":[
  {"hconcat": [
    {
      "mark": "circle",
  "encoding": {
    "x": {
      "field": "Beak Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field": "Beak Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "color": {"field": "Species", "type": "nominal"}
  }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
   {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    }

  ]},
  {"hconcat": [
    {
      "mark": "circle",
  "encoding": {
    "x": {
      "field": "Beak Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field": "Beak Depth (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "color": {"field": "Species", "type": "nominal"}
  }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
   {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    }

  ]},
  {"hconcat": [
    {
      "mark": "circle",
  "encoding": {
    "x": {
      "field": "Beak Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field":"Flipper Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "color": {"field": "Species", "type": "nominal"}
  }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
   {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    }

  ]},
  {"hconcat": [
    {
      "mark": "circle",
  "encoding": {
    "x": {
      "field": "Beak Length (mm)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field":"Body Mass (g)",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "color": {"field": "Species", "type": "nominal"}
  }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Beak Depth (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
    {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Flipper Length (mm)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    },
   {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "Body Mass (g)",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {"field": "Species", "type": "nominal"}
      }
    }

  ]}
  ]
}

