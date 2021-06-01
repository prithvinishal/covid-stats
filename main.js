$(document).ready(function() {
    var url = "https://api.covid19india.org/data.json"

    alert("Use desktop view for better interface")
    $.getJSON(url, function(data) {
        console.log(data)

        var total_active, total_recovered, total_confirmed, total_death


        var state = []
        var confirmed = []
        var recovered = []
        var deaths = []

        $.each(data.statewise, function(id, obj) {
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)

        })



        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift
        console.log(state)


        total_active = data.statewise[0].active
        total_recovered = data.statewise[0].recovered
        total_confirmed = data.statewise[0].confirmed
        total_death = data.statewise[0].deaths


        $("#active").append(total_active)
        $("#recovered").append(total_recovered)
        $("#confirmed").append(total_confirmed)
        $("#deaths").append(total_death)



        var myChart = document.getElementById("myChart").getContext('2d')


        var chart = new Chart(myChart, {
            type: 'line',
            data: {
                labels: state,

                datasets: [{
                        label: "Confirmed Cases",
                        data: confirmed,
                        backgroundColor: "#f1c40f",
                        minBarLength: 100

                    },
                    {
                        label: "Recovered",
                        data: recovered,
                        backgroundColor: "#2ecc71",
                        minBarLength: 100

                    },
                    {
                        label: "Deceased",
                        data: deaths,
                        backgroundColor: "#e74c3c",
                        minBarLength: 100

                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }

        })

    })
})
