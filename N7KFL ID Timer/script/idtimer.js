/*
	N7KFL ID Timer
	Version 3.0.1
    Version 3.0.1 updated to latest jQuery library after testing.
    Changes in version 3.0.0 included stylized buttons, improvements in CSS elements. 
	Last Modified 9 February 2021
	All Copyrights and Trademarks are properties of their respective owners.
	Copyright 2021 David A. Poulson, N7KFL
*/

"use strict";
var $ = function (id) { return document.getElementById(id); };

var timer;
var seconds = 60;
var minutes = 10;
var isRunning = false;

window.onload = function () {
};

function timerWindow() {
    var idTimerWindow = window.open("n7kfl_id_timer.html", "N7KFL ID Timer", "width=470,height=325");
};

function startTimer() {
    // test to make sure clock is not at 0:00 before starting
    if (seconds == 0 && minutes == 0) {
        alert("Press 'Reset' then press 'Start' again.");
    }
		// test to make sure timer is not running
	else if (isRunning == true) {
		alert("N7KFL ID Timer is already running.");
	}
    else {
		isRunning = true;
        // create a timer that calls the updateCounter function repeatedly
        timer = setInterval(function () { 
            if (seconds == 60) {
                minutes--;
                $("minutes").firstChild.nodeValue = minutes;
            }
            seconds--;
            $("seconds").firstChild.nodeValue = seconds;
            if (seconds < 10 && seconds >= 0) {
                $("seconds").firstChild.nodeValue = "0" + seconds;
            }
            if (seconds == 0 && minutes != 0) {
                seconds = 60;
            }
            if (minutes == 0 && seconds == 0) {
				isRunning = false;
                clearInterval(timer);
                $("head3").firstChild.nodeValue = "Identify NOW!";
                alert("It's time to ID");
            }
        }, 1000);
    } // end else
};

function resetTimer() {
    window.location.reload();
};

function stopTimer() {
    clearInterval(timer);
	isRunning = false;
};