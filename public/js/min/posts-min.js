var posts=[],ajax_connections=0,load_more=$(".load-more"),board={config:""},$container=$("#posts");!function(){$container.isotope({masonry:{columnWidth:270,isFitWidth:!0,gutter:20}}),$.ajax({url:base+"/board/"+hashtag,type:"GET",success:function(a,t,s){if(board.config=a,1==a.has_instagram)var o=get_instagram_posts();if(0==ajax_connections){var i=$(prepare_posts(posts));i.imagesLoaded(function(){$container.isotope("insert",i),$("abbr.timeago").timeago()}),posts=[]}}}),load_more.click(function(a){get_more_posts(),a.preventDefault()})}();var get_more_posts=function(){1==board.config.has_instagram&&(max_id=load_more.attr("data-instagram-max-id"),$.ajax({url:base+"/api/instagram/more/"+hashtag+"/"+max_id,type:"GET",async:!1,success:function(a,t,s){posts.push(a),load_more.attr("data-instagram-max-id",a.next_url)}}));var a=$(prepare_posts(posts));a.imagesLoaded(function(){$container.isotope("insert",a),$("abbr.timeago").timeago()}),posts=[]},get_instagram_posts=function(){$.ajax({url:base+"/api/instagram/"+hashtag,type:"GET",beforeSend:function(){ajax_connections++},async:!1,success:function(a,t,s){ajax_connections--,posts.push(a),load_more.attr("data-instagram-max-id",a.next_url)}})},prepare_posts=function(a){var t="";console.log(a.length);for(var s=0;s<a.length;s++){console.log();for(var o=0;o<a[s].posts.length;o++){var i=a[s].posts[o];t+='<div class="post">',t+='<div class="filter filter-'+i.vendor+' pull-right"><i class="fa fa-'+i.vendor+'"></i></div>',t+='<div class="user-info pull-left">',i.username&&i.user_img_url&&(t+='<img src="'+i.user_img_url+'" />',t+='<a href="http://www.instagram.com/'+i.username+'">'+i.username+"</a>"),t+='<p><abbr class="timeago" title="'+i.date_created+'">'+i.date_created+"</abbr></p>",t+="</div>","image"==i.post_type?(t+='<div class="post-img">',t+='<img src="'+i.img_url+'" />',t+="</div>"):"video"==i.post_type&&(t+="video!!!!!"),i.caption&&(t+='<div class="post-description">',t+="<p>"+i.caption.replace(/#([^\s#]+)/g,'<a class="hashtag" href="'+base+'/$1/szukaj">#$1</a> ')+"</p>",t+="</div></div>")}}return t};!function(){function a(a,t,s){var o=a%10;return o>1&&5>o&&(a>20||10>a)?t:s}jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"za",suffixAgo:"temu",suffixFromNow:null,seconds:"mniej niż minutę",minute:"minutę",minutes:function(t){return a(t,"%d minuty","%d minut")},hour:"godzinę",hours:function(t){return a(t,"%d godziny","%d godzin")},day:"dzień",days:"%d dni",month:"miesiąc",months:function(t){return a(t,"%d miesiące","%d miesięcy")},year:"rok",years:function(t){return a(t,"%d lata","%d lat")}}}();