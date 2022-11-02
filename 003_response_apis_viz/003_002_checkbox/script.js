let statusCodes =  [200, 204, 302, 304, 404, 503]



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
    y: "timestamp", 
    x: "duration",
    fill: "path",
    r: 4,
    opacity: 0.5,
    title: "timestamp"
}).plot()

d3.select("#chart").append(() => dotChart)
})


