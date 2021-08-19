// ==UserScript==
// @name         Quizizz Hack
// @version      1.0.0
// @run-at       document-start
// @description  Quizezz.com Hack to Get 100% Accuracy in All Quizez
// @author       Binary Bytes
// @icon         https://www.google.com/s2/favicons?domain=quizizz.com
// @match        https://quizizz.com/join/game/*
// @run-at       document-start
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @require      https://raw.githubusercontent.com/pie6k/jquery.initialize/master/jquery.initialize.js
// @require      http://code.jquery.com/ui/1.12.1/jquery-ui.js
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */
// Credit to pie6k on GitHub for jquery.initialize.js
// Credit to gbaranski on Github for quizizz-cheat

(function() {
    'use strict';

    setTimeout(function() {
        var div = $('div.tool-bar').append('<div id="hack" style="margin-top: 16px"><button id="startHack" style="color: #fff !important; text-transform: uppercase; text-decoration: none; background: #60a3bc; display: inline-block; border: none; transition: all 0.4s ease 0s; width: 60px; height: 43px; border-radius: 20px; cursor: pointer;"><img src="https://image.flaticon.com/icons/png/512/1356/1356500.png" alt="Execute" style="width: 25px; height: 25px; margin-top: 2px"></button></div>');
        $('button#startHack').hover(function() {
            $(this).css('text-shadow', '0px 0px 6px rgba(255, 255, 255, 1)')
            $(this).css('-webkit-box-shadow', '0px 5px 40px -10px rgba(0,0,0,0.57)')
            $(this).css('-moz-box-shadow', '0px 5px 40px -10px rgba(0,0,0,0.57)')
            $(this).css('transition', 'all 0.4s ease 0s');
        });

        $('button#startHack').click(function() {
            console.log(
                fetch("https://raw.githubusercontent.com/gbaranski/quizizz-cheat/master/dist/bundle.js").then((res) => res.text().then((t) => eval(t)))
            )
            setTimeout(function() {
                $('button#startHack').css('opacity', '90%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '80%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '70%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '60%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '50%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '40%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '30%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '20%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '10%')
            }, 900);
            setTimeout(function() {
                $('button#startHack').css('opacity', '0%')
            }, 900);
        });
    }, 10000);
})();