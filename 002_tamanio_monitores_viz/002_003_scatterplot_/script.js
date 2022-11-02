let cont = d3.select("#chart")

d3.csv("./data/device-analytics.csv")
    .then((data) => {
        const cleanData = data.map((d) => {
            let [w, h] = d.Resolution.split("x")
            return {
                Device: d.Device,
                Resolution: d.Resolution,
                Width: +w,
                Height: +h,
                Users: +d.Users,
                Sessions: +d.Sessions
            }
        })

        console.table(cleanData)

        const dotChart = Plot.dot(
            cleanData, {
                x: "Width",
                y: "Height",
                fill: "Device",
                fillOpacity: "Sessions",
                // r: "Sessions"
                r: ({ Sessions}) => Math.log(Sessions),
                title: "Resolution"
            }
        ).plot({
            x: { grid: true, domain: [0, 4200]},
            y: {grid: true, domain: [0, 2600]},
            opacity: { type: "log" }
        });


        cont.append(() => dotChart); //Todo dentro del then. Si no, no se lee la variable
    });









