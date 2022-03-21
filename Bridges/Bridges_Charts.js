
    /* Get chart canvas and contex  */
    let chartCanvas = document.querySelector('#bridges-chart');
    let ctx = chartCanvas.getContext('2d');


    let chart= new Chart(ctx,{
        type:'bar',

        data:{
            labels:['Verrazano-Narrows Bridge','Golden Gate Bridge','Mackinac Bridge','George Washington Bridge','Tacoma Narrows Bridge'],
            datasets:[{
                data:[1298.4,1280.2,1158.0,1067.0,853.44],
                backgroundColor:['Pink', 'orange', 'dodgerblue', 'mediumseagreen', 'Black' ]
            }],


            options:{
                scales:{
                    yAkes:[{
                        ticks:{
                            beginAtZero:true
                        }
                    }]
                }
            }
        },
    })








