#myparallaxslider{ /* CSS for specific carousel container called #myparallaxslider. */
width:80%;
height:550px;
}

/* ######### Shared CSS for various parts of slider (in the event of multiple sliders) ######### */

div.parallaxslider{ /* shared CSS for main carousel container */
background: black url(ajaxload.gif) center center no-repeat; /* loading gif while caoursel is loading */
}

div.parallaxslider img.navbutton{ /* CSS for the nav buttons */
}

div.parallaxslider *{
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}

div.parallaxslider div.slide{
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: none;
}

div.parallaxslider div.slide div.bgoverlay{ /* CSS for each image's DIV container within main container */
position: absolute;
z-index: 0;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: black;
background-position: center center; /* center image within carousel */
background-repeat: no-repeat;
background-size: cover; /* CSS3 property to scale image within container? "cover" or "contain" */
}

div.parallaxslider div.selectedslide{ /* CSS for currently selected slide */
}

div.parallaxslider div.slide div.desc{ /* DIV that contains the textual description inside .slide */
position: absolute;
color: white;
padding: 8px;
text-shadow: 0 -1px 1px #8a8a8a; /* CSS3 text shadow */
z-index:5;
pointer-events: none; /* keep this property intact. Disable pointer events on desc divs themselves */
}

div.parallaxslider div.slide div.desc *{
pointer-events: auto; /* keep this property intact. Enable pointer events on individual elements within desc divs, such as links */
}

div.parallaxslider div.selectedslide div.desc{ /* CSS for currently selected slide's desc div */
}


div.parallaxslider div.slide div.desc a{
color:yellow;
text-decoration:none;
}