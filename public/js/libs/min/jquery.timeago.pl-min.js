function numpf(n,i,u){var t=n%10;return t>1&&5>t&&(n>20||10>n)?i:u}jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"za",suffixAgo:"temu",suffixFromNow:null,seconds:"mniej niż minutę",minute:"minutę",minutes:function(n){return numpf(n,"%d minuty","%d minut")},hour:"godzinę",hours:function(n){return numpf(n,"%d godziny","%d godzin")},day:"dzień",days:"%d dni",month:"miesiąc",months:function(n){return numpf(n,"%d miesiące","%d miesięcy")},year:"rok",years:function(n){return numpf(n,"%d lata","%d lat")}};