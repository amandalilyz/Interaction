document.addEventListener("DOMContentLoaded", function () {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/284680")
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
    })
})

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/484524")
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
    })
})

const CSSPairs = {
    image1ScaleIn: [
        4, 8
    ],
    image1ScaleOut: [
        1, 4
    ]
}

let currentFormat;

if (window.innerWidth < 800) {
    currentFormat = 1
} else {
    currentFormat = 0
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        currentFormat = 1
    } else {
        currentFormat = 0
    }
})


window.onload = function () {
    lax.init();

    lax.addDriver("scrollY", function () {
        return window.scrollY;
    });

    lax.addElements("#image1", {
        scrollY: {
            scale: [
                [0, 2000],
                [CSSPairs.image1ScaleIn[currentFormat], CSSPairs.image1ScaleOut[currentFormat]]
            ],
        }
    });

    lax.addElements("#image1blur", {
        scrollY: {
            opacity: [
                [0, 1000],
                [1, 0]                // Opacity: 1 (100%) to 0 (0%)
            ],
        }
    });

    lax.addElements("#text1", {
        scrollY: {
            opacity: [
                [0, 450],
                [1, 0]                // Opacity: 1 (100%) to 0 (0%)
            ],
        }
    });

    lax.addElements("#w1met", {
        scrollY: {
            opacity: [
                [800, 850, 1250, 1300],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption", {
        scrollY: {
            opacity: [
                [1495, 1500, 1700, 1705],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption2", {
        scrollY: {
            opacity: [
                [1695, 1700, 1900, 1905],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption3", {
        scrollY: {
            opacity: [
                [1895, 1900, 2100, 2105],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption4", {
        scrollY: {
            opacity: [
                [2095, 2100, 2495, 2500],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });
    
    lax.addElements("#w1caption5", {
        scrollY: {
            opacity: [
                [2495, 2500, 2700, 2705],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption6", {
        scrollY: {
            opacity: [
                [2695, 2700, 2900, 2905],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption7", {
        scrollY: {
            opacity: [
                [2895, 2900, 3100, 3105],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption8", {
        scrollY: {
            opacity: [
                [3095, 3100, 3395, 3400],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption9", {
        scrollY: {
            opacity: [
                [3395, 3400, 3600, 3605],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption10", {
        scrollY: {
            opacity: [
                [3595, 3600, 3800, 3805],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption11", {
        scrollY: {
            opacity: [
                [3795, 3800, 4000, 4300],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });
    lax.addElements("#woman2background2", {
        scrollY: {
            translateX: [
                [4000, 5000],
                ["elInX", "elCenterX"]
            ],
    
        },
        
    });

    lax.addElements("#woman2", {
        scrollY: {
            translateX: [
                [4500, 5200],
                ["elInX", "elCenterX"]
            ],
        translateY: [
            [7900, 8900],
            ["elCenterX", "elOutY"]
             ],
         },
    });


    lax.addElements("#w2met", {
        scrollY: {
            opacity: [
                [5100, 5150, 5500, 5650],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w2caption1", {
        scrollY: {
            opacity: [
                [5800, 5805, 6005, 6010],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption2", {
        scrollY: {
            opacity: [
                [6005, 6010, 6210, 6215],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption3", {
        scrollY: {
            opacity: [
                [6200, 6205, 6400, 6405],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption4", {
        scrollY: {
            opacity: [
                [6395, 6400, 6600, 6605],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption5", {
        scrollY: {
            opacity: [
                [6600, 6605, 6800, 6805],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption6", {
        scrollY: {
            opacity: [
                [6800, 6805, 7000, 7005],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption7", {
        scrollY: {
            opacity: [
                [7000, 7005, 7200, 7205],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption8", {
        scrollY: {
            opacity: [
                [7200, 7205, 7400, 7405],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption9", {
        scrollY: {
            opacity: [
                [7400, 7405, 7600, 7605],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })

    lax.addElements("#w2caption10", {
        scrollY: {
            opacity: [
                [7600, 7605, 7800, 7805],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    })


    lax.addElements('#woman3background1', {
        scrollY: {
          translateY: [
            [7950, 8600, 11000, 12000], // Current scrollY range

            [window.innerHeight, 0, 0, window.innerHeight], // Move from 0px offset to negative screen height (top of the screen)
            ["elInY","elOutY"], // Scroll position range from when the element is at the bottom to when it is at the top
          ],
        }
      });

    lax.addElements("#woman3background2", {
        scrollY: {
            translateY: [
                [8200, 8800, 11000, 12000],
                ["elInY", "elCenterY", "elCenterY", "elOutY"],
            ],
            
        }
     
    });

    lax.addElements("#woman3background3", {
        scrollY: {
            translateY: [
                [8500, 9000, 11000, 12000],
                [window.innerHeight, 0, 0, window.innerHeight], // Move from 0px offset to negative screen height (top of the screen)
                ["elInY","elOutY"], // Scroll position range from when the element is at the bottom to when it is at the top
              ], 
        },
     
    });

    lax.addElements("#woman3", {
        scrollY: {
            translateY: [
                [8700, 9200, 11000, 12000], // Current scrollY range
                [window.innerHeight, 0, 0, window.innerHeight], // Move from 0px offset to negative screen height (top of the screen)
                ["elInY","elOutY"], // Scroll position range from when the element is at the bottom to when it is at the top
              ],
        },
     
    });

    lax.addElements('#w3met', {
        scrollY: {
            opacity: [
                [9100, 9300, 9700, 9900],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w3caption1', {
        scrollY: {
            opacity: [
                [10000, 10005 ,10100, 10105],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w3caption2', {
        scrollY: {
            opacity: [
                [10100, 10105 ,10205, 10210],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w3caption3', {
        scrollY: {
            opacity: [
                [10200, 10205 ,10300, 10305],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w3caption4', {
        scrollY: {
            opacity: [
                [10300, 10305 ,10400, 10405],
                [0, 1, 1, 0]
            ]
        }
    });

    lax.addElements('#w3caption5', {
        scrollY: {
            opacity: [
                [10400, 10405 ,10500, 10505],
                [0, 1, 1, 0]
            ]
        }
    });

    lax.addElements('#w3caption6', {
        scrollY: {
            opacity: [
                [10500, 10505 ,10600, 10605],
                [0, 1, 1, 0]
            ]
        }
    });

    lax.addElements('#w3caption7', {
        scrollY: {
            opacity: [
                [10600, 10605 ,10700, 10705],
                [0, 1, 1, 0]
            ]
        }
    });

    lax.addElements('#w3caption8', {
        scrollY: {
            opacity: [
                [10700, 10705 ,10800, 10805],
                [0, 1, 1, 0]
            ]
        }
    });

    lax.addElements('#w3caption9', {
        scrollY: {
            opacity: [
                [10800, 10805 ,10900, 10905],
                [0, 1, 1, 0]
            ]
        }
    });

    lax.addElements('#w3caption10', {
        scrollY: {
            opacity: [
                [10900, 10905 ,11000, 11005],
                [0, 1, 1, 0]
            ]
        }
    });
    lax.addElements('#w3caption11', {
        scrollY: {
            opacity: [
                [11000, 11005 ,11100, 11100],
                [0, 1, 1, 0]
            ]
        }
    });

    lax.addElements("#woman4", {
        scrollY: {
            scale: [
                [12000, 16000],
                [5, 1]
            ],
            opacity: [
                [0, 10000, 10001, 15800, 16000],
                [0, 0, 1, 1, 0]
            ],
            translateY: [
                [12000, 16000],
                [950, 0]
            ],
            translateX: [
                [12000, 16000],
                [-90, 0]
            ],
        },
     
    });

    lax.addElements('#w4met', {
        scrollY: {
            opacity: [
                [11000, 11001, 12100, 12200],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption1', {
        scrollY: {
            opacity: [
                [12400, 12405, 12500, 12505],
                [0, 1, 1, 0]
            ]
        }
    })
    lax.addElements('#w4caption2', {
        scrollY: {
            opacity: [
                [12500, 12505, 12600, 12605],
                [0, 1, 1, 0]
            ]
        }
    })
    lax.addElements('#w4caption3', {
        scrollY: {
            opacity: [
                [12600, 12605, 12700, 12705],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption4', {
        scrollY: {
            opacity: [
                [12700, 12705, 12800, 12805],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption5', {
        scrollY: {
            opacity: [
                [12800, 12805, 12900, 12905],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption6', {
        scrollY: {
            opacity: [
                [12900, 12905, 13000, 13005],
                [0, 1, 1, 0]
            ]
        }
    })
    lax.addElements('#w4caption7', {
        scrollY: {
            opacity: [
                [13000, 13005, 13100, 13105],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption8', {
        scrollY: {
            opacity: [
                [13100, 13105, 13200, 13205],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption9', {
        scrollY: {
            opacity: [
                [13200, 13205, 13300, 13305],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption9', {
        scrollY: {
            opacity: [
                [13300, 13305, 13400, 13405],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements('#w4caption10', {
        scrollY: {
            opacity: [
                [13400, 13405, 13500, 13505],
                [0, 1, 1, 0]
            ]
        }
    })
    lax.addElements('#w4caption11', {
        scrollY: {
            opacity: [
                [13500, 13505, 13600, 13605],
                [0, 1, 1, 0]
            ]
        }
    })
    lax.addElements('#w4caption12', {
        scrollY: {
            opacity: [
                [13600, 13605, 13700, 13705],
                [0, 1, 1, 0]
            ]
        }
    })
    lax.addElements('#w4caption13', {
        scrollY: {
            opacity: [
                [13700, 17505, 13800, 13805],
                [0, 1, 1, 0]
            ]
        }
    })
    lax.addElements('#w4caption14', {
        scrollY: {
            opacity: [
                [13800, 13805, 13900, 13905],
                [0, 1, 1, 0]
            ]
        }
    })

    lax.addElements("#woman5", {
        scrollY: {
            scale: [
                [15800, 18000],
                [14, 1]
            ],
            opacity: [
                [0, 15800, 15801, 19000, 19100],
                [0, 0, 1, 1, 0]
            ],
            translateY: [
                [16000, 18000],
                [60, 0]
            ]
        },
     
    });

    [0, 10000, 10001, 15900, 16000],


    lax.addElements("#woman6", {
        scrollY: {
            scale: [
                [7900, 8700],
                [6, 1]
            ],
            opacity: [
                [0, 7800, 7801],
                [0, 0, 1]
            ],
            translateY: [
                [8000, 8600],
                [200, 0]
            ],
            translateX: [
                [8000, 8600],
                [-500, 0]
            ]
        },
     
    });

    lax.addElements('#w6-cap1', {
        scrollY: {
            opacity: [
                [8650, 8800],
                [0, 1]
            ]
        }
    })

}
