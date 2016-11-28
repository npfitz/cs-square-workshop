function ParseUrlFilter ($sce){
'ngInject';
var urls = /((https?|ftps?):\/\/[^"<\s]+)(?![^<>]*>|[^"]*?<\/a)/gim;
var urlText = />(.*?)<\/a>/gim
 var emails = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;

 return function(text) {
	   /* We want to detect links without anchor tags and make them true links*/
		 if(text != null){
			 if(text.match(urls)) {
				 text = text.replace(urls, '<a href="$1">$1</a>');
		 	}
		 	if(text.match(emails)) {
				 text = text.replace(emails, '<a href=\"mailto:$1\">$1</a>');
		 	}
		}
		return $sce.trustAsHtml(text);
 };
}

export default {
  name: 'parseUrlFilter',
  fn: ParseUrlFilter
};
