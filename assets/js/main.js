/*====================================================
  TABLE OF CONTENT
  1. function declearetion
  2. Initialization
====================================================*/

/*===========================
 1. function declearetion
 ==========================*/
var themeApp = {
	featuredMedia: function(){
		$(".post").each(function() {
			var thiseliment = $(this);
			var media_wrapper = $(this).find('featured');
			var media_content_image = media_wrapper.find($('img'));
			var media_content_embeded = media_wrapper.find('iframe');
			if (media_content_image.length > 0) {
				$(media_content_image).insertAfter(thiseliment.find('.post-head')).wrap("<div class='featured-media'></div>");
				thiseliment.addClass('post-type-image');
				media_wrapper.remove();
			}
			else if (media_content_embeded.length > 0) {
				$(media_content_embeded).insertAfter(thiseliment.find('.post-head')).wrap("<div class='featured-media'></div>");
				thiseliment.addClass('post-type-embeded');
			}
		});
	},
	responsiveIframe: function() {
		$('.post').fitVids();
	},
	sidebarConfig:function() {
		if(sidebar_left == true) {
			$('.main-content').addClass('col-md-push-4');
			$('.sidebar').addClass('col-md-pull-8');
		}
	},
	recentPost:function() {
		var feed_url = "/rss/";
		var code = String('');
		$.get(feed_url, function(data) {
			$(data).find('item').slice(0,recent_post_count).each(function(){
				var full = $(this).find('description').text();
				var content = $(this).contentSnippet;
				var link = $(this).find('link').text();
				var title = $(this).find('title').text();
				var published_date = $(this).find('pubDate').text();
				function format_date (dt) {
					var d = new Date(dt);
					var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
					var month = month_name[d.getMonth()];
					var date = d.getDate();
					var year = d.getFullYear();
					var formatted_dt = month+' '+date+','+' '+year;
					return formatted_dt;
				}
				code += '<div class="recent-single-post">';
				code += '<a href="' + link + '" class="post-title">' + title + '</a><div class="date">' + format_date(published_date) + '</div>';
				code += '</div>';
			})
			$(".recent-post").html(code);
		});
	},
	// highlighter: function() {
	// 	$('pre code').each(function(i, block) {
	// 	    hljs.highlightBlock(block);
	// 	  });
	// },
	backToTop: function() {
		
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop : 0},1000);
			return false;
		});
	},

	setToc: function(){
		//设置toc内容
		//toc插件参考：https://github.com/nghuuphuoc/tocjs?utm_source=jquer.in&utm_medium=website&utm_campaign=content-curation
		$('#toc').toc({
			selector : "h1, h2, h3, h4, h5, h6",
			elementClass: 'bs-docs-sidebar',
			// rootUlClass: 'fixed',
			ulClass: 'nav nav-stacked',
			heading: '文章目录',
			indexingFormats : {
				'h1': 'number',
				'h2': 'number',
				'h3': 'number',
				'h4': 'number',
				'h5': 'number',
				'h6': 'number'
				
				// 'h1': 'upperRoman',
				// 'h2': 'number',
				// 'h3': 'upperAlphabet',
				// 'h4': 'lowerAlphabet',
				// 'h5': 'number'
			}
		});
		//设置滚动，依赖
		$('body').scrollspy({
			target: '.bs-docs-sidebar',
			offset: 40
		});

		//滚动页面时，固定toc的位置
		$(".toc-ul-root").affix({
			offset: {
				/* 
				由于布局top部分比较高，而设置toc显示是距离顶部 20px, 会导致向下滚动比较小的px时，
				toc就顶到顶部了，所以设置向下滚动比较多才触发
				 */				
				top: 400
			}
		});		
	},

	init: function() {
		themeApp.featuredMedia();
		themeApp.responsiveIframe();
		// themeApp.sidebarConfig();
		// themeApp.recentPost();
		// themeApp.highlighter();
		themeApp.backToTop();
		themeApp.setToc();
	}
}

/*===========================
2. Initialization
==========================*/
$(document).ready(function(){
  themeApp.init();
});