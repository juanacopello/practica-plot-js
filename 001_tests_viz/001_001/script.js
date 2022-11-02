d3.json('./data/githubTestJobs.json')
.then((data) => {
    const cellChart = Plot.plot({
        marks: [Plot.cell(data, {x: "run_number", y: "name", fill: "conclusion"})],
        marginLeft: 160,
        marginBottom: 80,  
        x: {tickRotate: 45} //No es buena práctica, chequear cómo separar cada columna para que se lean las marcas en X
    })
    //Se apendea al DOM
    d3.select("#chart").append(() => cellChart); //Todo dentro del then. Si no, no se lee la variabñe
}) 



