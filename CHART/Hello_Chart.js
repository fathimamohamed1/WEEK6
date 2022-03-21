
let canvas=document.querySelector('#soda-chart')
let Context=canvas.getContext('2d')

let chart= new Chart (Context,{
    type:'bar',
    data:{
        labels:['Coke','Pepsi','Either','Neither'],
        datasets:[{
            label:'Number of votes',
            data:[18,14,7,10],
            backgroundColor:['Blue','Brown', ' Green', 'Black']
        }]
    },
    options:{
        scales:{
            yAkes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
})