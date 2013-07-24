/*
Version: 1.0.3
Usage:
var script=document.createElement('script');script.src='//edgecaselabs.com/chrome-extension-reftagger/1.0.3/reftagger.js';document.getElementsByTagName('head')[0].appendChild(script);
*/
(function(){
    function inject(){
        var script=document.createElement('script');
        script.src='//bible.logos.com/jsapi/referencetagging.js';
        document.getElementsByTagName('head')[0].appendChild(script);
        setTimeout(tag, 500); //wait for download
    }
    function tag(){
        Logos.ReferenceTagging.lbsBibleVersion = "ESV";
        Logos.ReferenceTagging.lbsLinksOpenNewWindow = true;
        Logos.ReferenceTagging.lbsLogosLinkIcon = "dark";
        Logos.ReferenceTagging.lbsNoSearchTagNames = [ "h2", "h3", "h3" ];
        Logos.ReferenceTagging.lbsTargetSite = "biblia";
        Logos.ReferenceTagging.tag();
    }

    inject();
})();