if (window.__hs_fm) {
    __hs_fm.dropped = false;
    __hs_fm.drop = function(html) {
        if (this.dropped) {
            return;
        }
        this.dropped = true;

        var tags = this.getTags();
        for (var i = 0; i < tags.length; ++i) {
            tags[i].innerHTML = html;
        }
    };
    __hs_fm.getTags = function() {
        var allTags,
            check,
            tags = [];
        if (document.getElementsByClassName) {
            allTags = document.getElementsByClassName('hs_followme');
            check = ['nodeName', 'DIV'];
        } else {
            allTags = document.getElementsByTagName("div");
            check = ['className', 'hs_followme'];
        }

        for (var i = 0; i < allTags.length; ++i) {
            if (allTags[i][check[0]] == check[1]) {
                tags.push(allTags[i]);
            }
        }

        return tags;
    };
    __hs_fm.getPayload = function() {
        var fm = document.createElement('script');
        fm.type = 'text/javascript';
        fm.async = true;
        var bucket = (this.host.match(/qa/i)) ? "hubspot.com-qa" : "hubspot.com";
        var noblog = this.blog ? "no_blog_" : "";
        fm.src = '//s3.amazonaws.com/'+bucket+'/socialmedia/followme/'+this.portal+'/'+noblog+'fm.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(fm);
    };
    __hs_fm.refresh = function() {
        __hs_fm.dropped = false;
        __hs_fm.getPayload();
    };
    __hs_fm.getPayload();
}
