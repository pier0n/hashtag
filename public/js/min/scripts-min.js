function updateViewportDimensions(){var t=window,e=document,i=e.documentElement,n=e.getElementsByTagName("body")[0],a=t.innerWidth||i.clientWidth||n.clientWidth,o=t.innerHeight||i.clientHeight||n.clientHeight;return{width:a,height:o}}var viewport=updateViewportDimensions(),waitForFinalEvent=function(){var t={};return function(e,i,n){n||(n="Don't call this twice without a uniqueId"),t[n]&&clearTimeout(t[n]),t[n]=setTimeout(e,i)}}(),timeToWaitForLast=100;jQuery(document).ready(function($){var t=$(".nav-main"),e=$(".nav-main-link"),i=$(".offcanvas-wrap");e.click(function(){return e.toggleClass("active"),i.toggleClass("active"),!1})});