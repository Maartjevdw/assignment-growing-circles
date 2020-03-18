//gegeven:
let myData = [1, 2, 3, 4, 5];


d3.select('svg')
    .selectAll('circle').data(myData).enter().append('circle')

    .attr('r', 25)
    .attr('cx', (myData) => myData * 25)
    .attr('cy', (myData) => myData * 25)

    .style('fill', (d, i) => {
        if (i % 2 === 0) {
            return 'rgb(0,100,0)'
        } else {
            return 'rgb(255,0,0)'
        }
    })
