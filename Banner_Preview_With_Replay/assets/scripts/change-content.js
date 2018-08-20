// JavaScript Document
$(function () {
    window.changeContent = function (a, b, c, d) {
        if (!Date.now) {
            Date.now = function() { return new Date().getTime(); }
        }
        var cacheBuster = '?v='+Math.floor(Date.now() / 1000);
        if (b == "img") {

            a = a + cacheBuster;
            //CHANGE 'CONTENT' TO IMAGE DEFINED WITH VAR 'a'
            document.getElementById("content").innerHTML = '<img src=\"work-images/' + a + '\"  alt=\"\" \/ >';

        } else if (b == "txt") {

            //CHANGE 'CONTENT' TO TEXT CONTENT DEFINED WITH VAR 'a'
            document.getElementById("content").innerHTML = '<h1>' + a + '</h1>';

        } else if (b == "html") {
            // a = a + cacheBuster;
            //CHANGE 'CONTENT' TO IFRAME WITH URL DEFINED WITH VAR 'a' - USE FOR HTML PAGES AND PDFS
            setTimeout(() => {
                var myWidth, myHeight;
                if( getBrowserName() === "Safari" ){
                     myWidth = document.documentElement.clientWidth;
                     myHeight = document.documentElement.clientHeight;
                }else{
                     myWidth = getWidth();
                     myHeight = getHeight();
                }
                var type = 'html';
                document.getElementById("content").innerHTML = '<iframe id=\"myframe\" frameborder=\"0\" src=\"' + a + '\" width=\"' + myWidth + '\" height=\"' + myHeight + '\"></iframe>'
                                                                +'<div class=\"features\"><a id=\"downloadImg\" href=\"#\" onclick=\'DownloadImage()\'>Save JPEG</a>'
                                                                +'<a id=\"replay\" href=\"#\" onclick=\'changeContent(\"' + a + '\",\"'+type+'\");\'>Replay</a></div>';
            }, 50);
        }
    };
    window.DownloadImage = function(){
        // console.log('Clicked!!!!', document.getElementById('myframe').contentWindow.document.getElementById('container'));
        html2canvas(document.getElementById("menu")).then(canvas => {
            console.log('in html image generator');
            document.body.appendChild(canvas);
        });
        // html2canvas(document.getElementById('myframe').contentWindow.document.getElementById('container'))
        // .then(function(canvas) {
        //     document.body.appendChild(canvas);
        // });
    };
    function getBrowserName() {
        var name = "Unknown";
        if(navigator.userAgent.indexOf("MSIE")!=-1){
            name = "MSIE";
        }
        else if(navigator.userAgent.indexOf("Firefox")!=-1){
            name = "Firefox";
        }
        else if(navigator.userAgent.indexOf("Opera")!=-1){
            name = "Opera";
        }
        else if(navigator.userAgent.indexOf("Chrome") != -1){
            name = "Chrome";
        }
        else if(navigator.userAgent.indexOf("Safari")!=-1){
            name = "Safari";
        }
        return name;   
    }

    function getWidth(){
        return Number(document.querySelector(".myClass").innerHTML.split('x')[0]);
    }
    function getHeight(){
        return Number(document.querySelector(".myClass").innerHTML.split('x')[1]);
    }

    $('ul li a').on('click',function(event) {
        // console.log($(this.parentElement.parentElement).children().length);
        var el = document.querySelectorAll('ul li a');//getting all 'a' tags
        for(var a in el){
            if(typeof el[a] === 'object')
            el[a].removeAttribute('class', 'myClass');//removing myClass if assigned
        }
        if(this !== undefined) this.setAttribute('class', 'myClass');// adding the class to the clicked object
        // $('#html5-banner li a').removeClass('myClass');
        // $('#html5-banner li a:focus').addClass('myClass');
    });

    

    function requestConfig(a, b, c, d) {

        //$.ajax({
        //    url: "./config.csv",
        //    async: false,
        //    success: function (csvd) {
        //        data = $.csv2Array(csvd);
        //    },
        //    error: function () {
        //        console.log('error');
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = './config.js';

        document.body.appendChild(script);
        //$("body").append(script);
        //    },
        //    dataType: "text",
        //    complete: function () {
        //        // call a function on complete
        //    }
        //});
    }

    window.loadConfig = function (config) {
        //console.log(config);
        $('head title').text(config["Page Title"]);
        $("#client-name").text(config["Client Name"]);
        $("#job-number").text(config["Job Number"]);
        $("#job-description").text(config["Job Description"]);

        var banner;
        var indexBanner;
        // for (indexBanner in config["Flash Banner"]) {
        //     banner = config["Flash Banner"][indexBanner]
        //     //console.log(banner);

        //     $('#flash-banner').append(
        //         $('<li>').append(
        //             $('<a>').attr('href', '#')
        //                 .attr('onclick', "changeContent('" + banner.path + "','" + banner.type + "')")
        //                 .append(banner.description)
        //         )
        //     );
        // }

        for (indexBanner in config["HTML5 Banner"]) {
            banner = config["HTML5 Banner"][indexBanner]
            // console.log("12312",banner);

            $('#html5-banner').append(
                $('<li>').append(
                    $('<a>').attr('href', '#')
                        .attr('onclick', "changeContent('" + banner.path + "','" + banner.type + "')")
                        .append(banner.description)
                )
            );
        }

        // for (indexBanner in config["Static Images PDF"]) {
        //     banner = config["Static Images PDF"][indexBanner]
        //     //console.log(banner);

        //     $('#static-images-pdf').append(
        //         $('<li>').append(
        //             $('<a>').attr('href', '#')
        //                 .attr('onclick', "changeContent('" + banner.path + "','" + banner.type + "')")
        //                 .append(banner.description)
        //         )
        //     );
        // }
    };

    function initMobileMenu() {
        // Create the dropdown base
        var select = $("<select />").appendTo(".mobile-menu");
        var customEvents = [];
        var i = 0;

        select.change(function(){
            console.log('customEvents',customEvents, 'select.val()', select.val());
            var index = select.val();
            if (index >= 0) {
                var params = customEvents[index].split('\'');
                changeContent(params[1], params[3]);
            }
        })

        // Create default option "Go to..."
        $("<option />", {
            "selected": "selected",
            "value": "",
            "text": "Go to..."
        }).appendTo(".leftcontent select");

        // $("<option />", {
        //     "value": '',
        //     "text": "Animated Flash Banners",
        //     "disabled": "disabled"
        // }).appendTo(".leftcontent select");

        // Populate dropdown with menu items
        // $(".leftcontent ul#flash-banner li").each(function () {
        //     var el = $(this);
        //     window.axel =el;
        //     //console.log('el', el)
        //     $("<option />", {
        //         "value": i,
        //         "text": '| '+el.text()
        //     }).appendTo(".leftcontent select");
        //     customEvents[i] = el.find('a').attr("onclick");
        //     i++;
        // });

        $("<option />", {
            "value": '',
            "text": "HTML5 Banners",
            "disabled": "disabled"
        }).appendTo(".leftcontent select");

        // Populate dropdown with menu items
        $(".leftcontent ul#html5-banner li").each(function () {
            var el = $(this);
            window.axel =el;
            //console.log('el', el)
            $("<option />", {
                "value": i,
                "text": '| '+el.text()
            }).appendTo(".leftcontent select");
            customEvents[i] = el.find('a').attr("onclick");
            i++;
        });

        // $("<option />", {
        //     "value": '',
        //     "text": "Static Images & PDF",
        //     "disabled": "disabled"
        // }).appendTo(".leftcontent select");

        // Populate dropdown with menu items
        // $(".leftcontent ul#static-images-pdf li").each(function () {
        //     var el = $(this);
        //     window.axel =el;
        //     //console.log('el', el)
        //     $("<option />", {
        //         "value": i,
        //         "text": '| '+el.text()
        //     }).appendTo(".leftcontent select");
        //     customEvents[i] = el.find('a').attr("onclick");
        //     i++;
        // });
    }
    initMobileMenu();
    requestConfig();
});