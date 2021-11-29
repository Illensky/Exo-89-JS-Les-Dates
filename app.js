let aujourdhui = new Date()

let apresDemain = new Date()
apresDemain.setDate(aujourdhui.getDate() +2)
apresDemain.setHours(aujourdhui.getHours() +6)

document.querySelector("#timestamp").innerHTML = Date.now()
document.querySelector("#localDate").innerHTML = aujourdhui.toLocaleDateString()
document.querySelector("#localTime").innerHTML = aujourdhui.toLocaleTimeString()


if (apresDemain.getTime() > aujourdhui.getTime()) {
    let interval = apresDemain.getTime() - aujourdhui.getTime()

    let days = Math.floor(interval /1000 /60 /60 /24);
    let hours = Math.floor((interval - (days *60 *60 *24 *1000)) /60 /60 /1000)
    let minutes = Math.floor((interval -(days *60 *60 *24 * 1000) -(hours *60 *60 *1000)) /1000 /60 )

    document.querySelector("#compare").innerHTML = "Entre aujourd'hui et aprés demain il y as " +
        interval.toString() + " millisecondes qui se sont écoulés." + "<br>" +
        "soit :" + "<br>" +
        days.toString() + "jours"  + "<br>" +
        hours.toString() + "heures" + "<br>" +
        minutes.toString() + "minutes."
}
