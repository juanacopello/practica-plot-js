d3.json('./data/apiLogData.json')
.then((data) => {
const dataParsed = data.map(d => {
    return {
        duration: d.duration,
        status_code: d.status_code,
        path: d.path,
        timestamp: new Date(d.timestamp)
    }
})
console.log(dataParsed)

const dotChart = Plot.dot(dataParsed, {
    x: "timestamp", 
    y: "duration"
}).plot()

d3.select("#chart").append(() => dotChart)
})


