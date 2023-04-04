CountDownTimer('01/11/1999 02:05 AM', 'birth_countdown', '<i class="icofont-rounded-right"></i> <strong>Age: </strong>');

function CountDownTimer(dt, id, text)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var _year = _day * 365.25;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = now - end;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'that\'s the future!';

            return;
        }
        var years = Math.floor(distance / _year);
        //var days = Math.floor((distance % _year) / _day);
        //var hours = Math.floor((distance % _day) / _hour);
        //var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _year) / _second);
        var seconds_percentage = (seconds/31536000)*100;

        document.getElementById(id).innerHTML = text;
        document.getElementById(id).innerHTML += years + ' years old and ';
        //document.getElementById(id).innerHTML += days + 'days ';
        //document.getElementById(id).innerHTML += hours + 'hrs ';
        //document.getElementById(id).innerHTML += minutes + 'mins ';
        document.getElementById(id).innerHTML += seconds_percentage.toFixed(4) + '% ';// + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
}