window.onload = function() {
    var d = new Date();
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth();
    var year = d.getFullYear();
    var firstDate = monthName[month] + " " + 1 + " " + year;
    var tmp = new Date(firstDate).toDateString();
    var firstDay = tmp.substring(0, 3); //the day of the week where the first date falls on
    var weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var noDay = weekDay.indexOf(firstDay);
    var days = new Date(year, month + 1, 0).getDate();
    var calendar = get_calendar(noDay, days);

    document.getElementById("currentMonth").innerHTML = monthName[month] + " " + year;
    document.getElementById("calendar").appendChild(calendar);
}

function get_calendar(noDay, days) {
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    //row for the days of the week
    for (var i = 0; i <= 6; i++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS" [i];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //create the second row
    tr = document.createElement('tr');

    for (var i = 0; i <= 6; i++) {
        if (i == noDay) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }

    var count = 1;
    for (;i <= 6; i++) {
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //creating rows for the rest of the dates in the month
    for (var r = 3; r <= 7; r++) {
        tr = document.createElement('tr');
        for (var c = 0; c <= 6; c++) {
            if (count > days) {
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
