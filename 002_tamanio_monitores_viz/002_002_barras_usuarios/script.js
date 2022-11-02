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

        const barChart = Plot.barY(
            cleanData,
            Plot.groupX({y: "sum", title: "sum"}, {x: "Device", y: "Users", fill: "Device", title: "Users"})
        ).plot({
            marginLeft: 80
        });


        cont.append(() => barChart); //Todo dentro del then. Si no, no se lee la variable
    });









