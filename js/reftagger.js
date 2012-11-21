/*
Usage:
var script=document.createElement('script');script.src='//edgecaselabs.com/js/reftagger.js';document.getElementsByTagName('head')[0].appendChild(script);
*/
(function(){
    function injectJquery(){
        if(!window.jQuery){
            var script=document.createElement('script');
            script.src='//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        setTimeout(injectReftagger, 500); //wait for download
    }
    function injectReftagger(){
        $('body').append(unescape('%3Cscript src="http://bible.logos.com/jsapi/referencetagging.js"%3E%3C/script%3E'));
        setTimeout(tag, 500); //wait for download
    }
    function tag(){
        Logos.ReferenceTagging.lbsBibleVersion = "ESV";
        Logos.ReferenceTagging.lbsLinksOpenNewWindow = true;
        Logos.ReferenceTagging.lbsLogosLinkIcon = "dark";
        Logos.ReferenceTagging.lbsNoSearchTagNames = [ "h2", "h3", "h3" ];
        Logos.ReferenceTagging.lbsTargetSite = "biblia";
        Logos.ReferenceTagging.tag();
        /*$("a.lbsBibleRef").each(function() {
            $a = $(this);
            ref = $a.text().replace(/\./g, "").trim();
            $a.attr("href", "http://biblia.com/books/esv/" + ref);
            $a.attr("data-reference", ref);
            $a.attr("data-version", "ESV");
            $a.attr("target", "_blank");
        });*/
    }

    injectJquery();
})();