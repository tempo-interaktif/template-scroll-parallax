var config = {
    style: 'mapbox://styles/ginanjarpamungkas/cke0w011k0bla1aoj8m9q7tuu',
    accessToken: 'pk.eyJ1IjoiZ2luYW5qYXJwYW11bmdrYXMiLCJhIjoiY2swbmg3eTM0MDdzMjNjbXcyN21qamJnYiJ9.qYAJ-y6QU7ZuzBJ8Q-OEuQ',
    showMarkers: false,
    alignment: 'center',
    theme: 'dark',
    byline: '',
    chapters: [
        {
            location: {
                center: [117.84142, -0.73615],
                zoom: 4.36,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            location: {
                center: [106.82719, -6.17537],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 31.20
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            location: {
                center: [107.61860, -6.90183],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            location: {
                center: [106.05342, -6.01674],
                zoom: 16.04,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            location: {
                center: [110.42244, -6.99115],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            location: {
                center: [112.73103, -7.24116],
                zoom: 15.67,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            location: {
                center: [115.21657, -8.64969],
                zoom: 14.51,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        }
]}
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;	  
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";	  
    return {
      url: url + suffix
    }	  
}

config
mapboxgl.accessToken = config.accessToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ginanjarpamungkas/cke0w011k0bla1aoj8m9q7tuu',
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

var scroller = new ScrollMagic.Controller();

trigger1 = new ScrollMagic.Scene({triggerElement: '#trigger-1'}).triggerHook(0.7)
           .on("enter",(e)=>{
                map.flyTo(config.chapters[1].location);
                $('#trigger-1').addClass('active')
                $('#trigger-0').removeClass('active')
            })
            .on("leave",(e)=>{
                map.flyTo(config.chapters[0].location);
                $('#trigger-1').removeClass('active')
                $('#trigger-0').addClass('active')
            }).addTo(controller);
trigger2 = new ScrollMagic.Scene({triggerElement: '#trigger-2'}).triggerHook(0.7)
           .on("enter",(e)=>{
                map.flyTo(config.chapters[2].location);
                $('#trigger-2').addClass('active')
                $('#trigger-1').removeClass('active')
            })
            .on("leave",(e)=>{
                map.flyTo(config.chapters[1].location);
                $('#trigger-2').removeClass('active')
                $('#trigger-1').addClass('active')
            }).addTo(controller);
trigger3 = new ScrollMagic.Scene({triggerElement: '#trigger-3'}).triggerHook(0.7)
            .on("enter",(e)=>{
                 $('#trigger-3').addClass('active')
                 $('#trigger-2').removeClass('active')
                 $('#photo-1').addClass('active')
             })
             .on("leave",(e)=>{
                 map.flyTo(config.chapters[2].location);
                 $('#trigger-3').removeClass('active')
                 $('#trigger-2').addClass('active')
                 $('#photo-1').removeClass('active')
             }).addTo(controller);
trigger4 = new ScrollMagic.Scene({triggerElement: '#trigger-4'}).triggerHook(0.7)
             .on("enter",(e)=>{
                  $('#trigger-4').addClass('active')
                  $('#trigger-3').removeClass('active')
                  $('#photo-2').addClass('active')
                  $('#photo-1').removeClass('active')
              })
              .on("leave",(e)=>{
                  map.flyTo(config.chapters[2].location);
                  $('#trigger-4').removeClass('active')
                  $('#trigger-3').addClass('active')
                  $('#photo-2').removeClass('active')
                  $('#photo-1').addClass('active')
              }).addTo(controller);
trigger5 = new ScrollMagic.Scene({triggerElement: '#trigger-5'}).triggerHook(0.7)
              .on("enter",(e)=>{
                   map.flyTo(config.chapters[3].location);
                   $('#trigger-5').addClass('active')
                   $('#trigger-4').removeClass('active')
                   $('#photo-2').removeClass('active')
               })
               .on("leave",(e)=>{
                    $('#trigger-5').removeClass('active')
                    $('#trigger-4').addClass('active')
                    $('#photo-2').addClass('active')
               }).addTo(controller);
trigger6 = new ScrollMagic.Scene({triggerElement: '#trigger-6'}).triggerHook(0.7)
              .on("enter",(e)=>{
                   map.flyTo(config.chapters[4].location);
                   $('#trigger-6').addClass('active')
                   $('#trigger-5').removeClass('active')
               })
               .on("leave",(e)=>{
                   map.flyTo(config.chapters[3].location);
                   $('#trigger-6').removeClass('active')
                   $('#trigger-5').addClass('active')
               }).addTo(controller);
trigger7 = new ScrollMagic.Scene({triggerElement: '#trigger-7'}).triggerHook(0.7)
               .on("enter",(e)=>{
                    $('#trigger-7').addClass('active')
                    $('#trigger-6').removeClass('active')
                    $('#photo-3').addClass('active')
                })
                .on("leave",(e)=>{
                    map.flyTo(config.chapters[4].location);
                    $('#trigger-7').removeClass('active')
                    $('#trigger-6').addClass('active')
                    $('#photo-3').removeClass('active')
                }).addTo(controller);
trigger8 = new ScrollMagic.Scene({triggerElement: '#trigger-8'}).triggerHook(0.7)
                .on("enter",(e)=>{
                     $('#trigger-8').addClass('active')
                     $('#trigger-7').removeClass('active')
                     $('#photo-4').addClass('active')
                     $('#photo-3').removeClass('active')
                 })
                 .on("leave",(e)=>{
                     map.flyTo(config.chapters[4].location);
                     $('#trigger-8').removeClass('active')
                     $('#trigger-7').addClass('active')
                     $('#photo-4').removeClass('active')
                     $('#photo-3').addClass('active')
                 }).addTo(controller);
trigger9 = new ScrollMagic.Scene({triggerElement: '#trigger-9'}).triggerHook(0.7)
           .on("enter",(e)=>{
                map.flyTo(config.chapters[5].location);
                $('#trigger-9').addClass('active')
                $('#trigger-8').removeClass('active')
                $('#photo-4').removeClass('active')
            })
            .on("leave",(e)=>{
                map.flyTo(config.chapters[4].location);
                $('#trigger-9').removeClass('active')
                $('#trigger-8').addClass('active')
                $('#photo-4').addClass('active')
            }).addTo(controller);
trigger10 = new ScrollMagic.Scene({triggerElement: '#trigger-10'}).triggerHook(0.7)
           .on("enter",(e)=>{
                map.flyTo(config.chapters[6].location);
                $('#trigger-10').addClass('active')
                $('#trigger-9').removeClass('active')
            })
            .on("leave",(e)=>{
                map.flyTo(config.chapters[5].location);
                $('#trigger-10').removeClass('active')
                $('#trigger-9').addClass('active')
            }).addTo(controller);