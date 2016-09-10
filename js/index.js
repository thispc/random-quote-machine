var currQuote="NONE"
var currAuthor="NONE"

$(document).ready(function()
                   {
   
   
//    $("#tumblr").on("click",function(){
     
//    });
//   $("#twitter").on("click",function()
//                   {
    
//   });
  
    $("#newquote").on("click",function(){
        $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en",function(jsn)
               {
          currQuote=jsn.quoteText;
          currAuthor=jsn.quoteAuthor;
          $("#twit").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currQuote + '" ' + currAuthor));
          var tt="http://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+encodeURIComponent(currAuthor)+"&content=" + encodeURIComponent(currQuote);
          $("#tumb").attr('href',tt);
       $("#text").html(jsn.quoteText);
               $("#author").html(jsn.quoteAuthor);
         
      });
      
      
    });
  });