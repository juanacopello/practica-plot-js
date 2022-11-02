d3.json('./data/githubTestJobs.json')
.then((data) => {
    const cellChart = Plot.plot({
        marks: [Plot.cell(data, {x: "run_number", y: "name", fill: "conclusion", fillOpacity: "minutes", stroke: "conclusion", title: (d) => `${d.conclusion} after ${d.minutes} minutes`})],
        color: {
            domain: ["success", "failure", "cancelled"],
            range: ["#06942e", "rgb(196, 6, 12)", "rgb(162, 163, 162)"]
        },
        marginLeft: 160,
        marginBottom: 80,  
        x: {tickRotate: 45} //No es buena práctica, chequear cómo separar cada columna para que se lean las marcas en X
    })
    //Se apendea al DOM
    d3.select("#chart").append(() => cellChart); //Todo dentro del then. Si no, no se lee la variabñe
}) 



