$(document).ready(function()
                 {
  var searchTerm;
  $('#search').click(function()
                    {
    searchTerm= $('#searchTerm').val();

  
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +" &format=json&callback=?";
    $.ajax(
    {
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data)
      { 
        
        for(var i=0;i<data[1].length;i++)
          {
         $('#output').prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a> <p>"+data[2][i]+"</p></li>");
          }
        // console.log(data[1][0]);headlines
        //console.log(data[2][0]);description
         //console.log(data[3][0]);link
      },  
      error:function(errorMessage)
      {
        alert("Error");
      }
    }); 
    
  });
});