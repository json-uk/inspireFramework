/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'inspiredGridIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'ellipsis' : '&#x74;&#x68;&#x72;&#x65;&#x65;',
			'dots' : '&#x74;&#x77;&#x6f;',
			'dot' : '&#x6f;&#x6e;&#x65;',
			'twitter-sign' : '&#x74;&#x77;&#x69;&#x74;&#x74;&#x65;&#x72;',
			'facebook-sign' : '&#x66;&#x61;&#x63;&#x65;&#x62;&#x6f;&#x6f;&#x6b;',
			'linkedin-sign' : '&#x6c;&#x69;&#x6e;&#x6b;&#x65;&#x64;&#x69;&#x6e;',
			'pinterest-sign' : '&#x70;&#x69;&#x6e;&#x74;&#x65;&#x72;&#x65;&#x73;&#x74;',
			'google-plus-sign' : '&#x67;&#x6f;&#x6f;&#x67;&#x6c;&#x65;&#x70;&#x6c;&#x75;&#x73;',
			'star' : '&#x72;&#x61;&#x74;&#x65;&#x66;&#x75;&#x6c;&#x6c;',
			'remove' : '&#x64;&#x65;&#x6c;&#x65;&#x74;&#x65;',
			'zoom-in' : '&#x65;&#x6e;&#x6c;&#x61;&#x72;&#x67;&#x65;',
			'zoom-out' : '&#x72;&#x65;&#x64;&#x75;&#x63;&#x65;',
			'search' : '&#x73;&#x65;&#x61;&#x72;&#x63;&#x68;',
			'cog' : '&#x73;&#x65;&#x74;&#x74;&#x69;&#x6e;&#x67;&#x73;',
			'lock' : '&#x73;&#x65;&#x63;&#x75;&#x72;&#x65;',
			'tags' : '&#x74;&#x61;&#x67;&#x73;',
			'play-circle' : '&#x70;&#x6c;&#x61;&#x79;',
			'share' : '&#x62;&#x61;&#x63;&#x6b;',
			'edit' : '&#x65;&#x64;&#x69;&#x74;',
			'ok' : '&#x63;&#x6f;&#x6e;&#x66;&#x69;&#x72;&#x6d;',
			'time' : '&#x74;&#x69;&#x6d;&#x65;',
			'bookmark' : '&#x62;&#x6f;&#x6f;&#x6b;&#x6d;&#x61;&#x72;&#x6b;',
			'camera' : '&#x70;&#x68;&#x6f;&#x74;&#x6f;',
			'map-marker' : '&#x6c;&#x6f;&#x63;&#x61;&#x74;&#x69;&#x6f;&#x6e;',
			'ban-circle' : '&#x63;&#x61;&#x6e;&#x63;&#x65;&#x6c;',
			'info-sign' : '&#x6e;&#x6f;&#x74;&#x69;&#x63;&#x65;',
			'question-sign' : '&#x68;&#x65;&#x6c;&#x70;',
			'ok-sign' : '&#x73;&#x75;&#x63;&#x63;&#x65;&#x73;&#x73;',
			'remove-sign' : '&#x63;&#x6c;&#x6f;&#x73;&#x65;',
			'minus-sign' : '&#x72;&#x65;&#x6d;&#x6f;&#x76;&#x65;',
			'plus-sign' : '&#x61;&#x64;&#x64;',
			'chevron-right' : '&#x72;&#x69;&#x67;&#x68;&#x74;&#x61;&#x6c;&#x74;',
			'comment' : '&#x63;&#x6f;&#x6d;&#x6d;&#x65;&#x6e;&#x74;',
			'chevron-up' : '&#x75;&#x70;&#x61;&#x6c;&#x74;',
			'star-half' : '&#x72;&#x61;&#x74;&#x65;&#x68;&#x61;&#x6c;&#x66;',
			'signout' : '&#x6c;&#x65;&#x61;&#x76;&#x65;',
			'external-link' : '&#x6e;&#x65;&#x77;&#x77;&#x69;&#x6e;&#x64;&#x6f;&#x77;',
			'signin' : '&#x65;&#x6e;&#x74;&#x65;&#x72;',
			'github-sign' : '&#x67;&#x69;&#x74;&#x68;&#x75;&#x62;',
			'unlock' : '&#x69;&#x6e;&#x73;&#x65;&#x63;&#x75;&#x72;&#x65;',
			'rss' : '&#x72;&#x73;&#x73;',
			'credit' : '&#x70;&#x75;&#x72;&#x63;&#x68;&#x61;&#x73;&#x65;',
			'pushpin' : '&#x70;&#x69;&#x6e;',
			'sort' : '&#x73;&#x6f;&#x72;&#x74;',
			'sort-down' : '&#x73;&#x6f;&#x72;&#x74;&#x64;&#x65;&#x73;&#x63;&#x65;&#x6e;&#x64;',
			'sort-up' : '&#x73;&#x6f;&#x72;&#x74;&#x61;&#x73;&#x63;&#x65;&#x6e;&#x64;',
			'envelope-alt' : '&#x6d;&#x61;&#x69;&#x6c;',
			'comments' : '&#x63;&#x6f;&#x6d;&#x6d;&#x65;&#x6e;&#x74;&#x73;',
			'thumbs-up' : '&#x6c;&#x69;&#x6b;&#x65;',
			'thumbs-down' : '&#x64;&#x69;&#x73;&#x6c;&#x69;&#x6b;&#x65;',
			'desktop' : '&#x64;&#x65;&#x73;&#x6b;&#x74;&#x6f;&#x70;',
			'laptop' : '&#x6c;&#x61;&#x70;&#x74;&#x6f;&#x70;',
			'tablet' : '&#x74;&#x61;&#x62;&#x6c;&#x65;&#x74;',
			'mobile' : '&#x6d;&#x6f;&#x62;&#x69;&#x6c;&#x65;',
			'code' : '&#x63;&#x6f;&#x64;&#x65;',
			'chevron-sign-right' : '&#x72;&#x69;&#x67;&#x68;&#x74;',
			'html5' : '&#x68;&#x74;&#x6d;&#x6c;',
			'css3' : '&#x63;&#x73;&#x73;',
			'play-sign' : '&#x70;&#x6c;&#x61;&#x79;&#x61;&#x6c;&#x74;',
			'compass' : '&#x63;&#x6f;&#x6d;&#x70;&#x61;&#x73;&#x73;',
			'android' : '&#x61;&#x6e;&#x64;&#x72;&#x6f;&#x69;&#x64;',
			'windows' : '&#x77;&#x69;&#x6e;&#x64;&#x6f;&#x77;&#x73;',
			'apple' : '&#x61;&#x70;&#x70;&#x6c;&#x65;',
			'youtube-sign' : '&#x79;&#x6f;&#x75;&#x74;&#x75;&#x62;&#x65;',
			'calendar-empty' : '&#x64;&#x61;&#x74;&#x65;',
			'phone-sign' : '&#x63;&#x6f;&#x6e;&#x74;&#x61;&#x63;&#x74;',
			'spinner' : '&#x70;&#x72;&#x6f;&#x67;&#x72;&#x65;&#x73;&#x73;',
			'info' : '&#x6e;&#x6f;&#x74;&#x69;&#x63;&#x65;&#x61;&#x6c;&#x74;',
			'question' : '&#x68;&#x65;&#x6c;&#x70;&#x61;&#x6c;&#x74;',
			'exclamation' : '&#x69;&#x6d;&#x70;&#x6f;&#x72;&#x74;&#x61;&#x6e;&#x74;&#x61;&#x6c;&#x74;',
			'repeat' : '&#x72;&#x65;&#x6c;&#x6f;&#x61;&#x64;',
			'print' : '&#x70;&#x72;&#x69;&#x6e;&#x74;',
			'chevron-left' : '&#x70;&#x72;&#x65;&#x76;&#x61;&#x6c;&#x74;',
			'film' : '&#x76;&#x69;&#x64;&#x65;&#x6f;',
			'user' : '&#x75;&#x73;&#x65;&#x72;',
			'caret-down' : '&#x65;&#x78;&#x70;&#x61;&#x6e;&#x64;',
			'caret-up' : '&#x63;&#x6f;&#x6c;&#x6c;&#x61;&#x70;&#x73;&#x65;',
			'chevron-sign-left' : '&#x6c;&#x65;&#x66;&#x74;',
			'dropbox' : '&#x64;&#x72;&#x6f;&#x70;&#x62;&#x6f;&#x78;',
			'chevron-sign-up' : '&#x75;&#x70;',
			'chevron-sign-down' : '&#x64;&#x6f;&#x77;&#x6e;',
			'smile' : '&#x73;&#x61;&#x74;&#x69;&#x73;&#x66;&#x69;&#x65;&#x64;',
			'frown' : '&#x75;&#x6e;&#x73;&#x61;&#x74;&#x69;&#x73;&#x66;&#x69;&#x65;&#x64;',
			'meh' : '&#x6e;&#x65;&#x75;&#x74;&#x72;&#x61;&#x6c;',
			'chevron-down' : '&#x64;&#x6f;&#x77;&#x6e;&#x61;&#x6c;&#x74;',
			'shopping-cart' : '&#x63;&#x61;&#x72;&#x74;',
			'exclamation-sign' : '&#x69;&#x6d;&#x70;&#x6f;&#x72;&#x74;&#x61;&#x6e;&#x74;',
			'flag' : '&#x66;&#x6c;&#x61;&#x67;',
			'tag' : '&#x74;&#x61;&#x67;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};