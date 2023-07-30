function selectedValues()
{
  var x=document.getElementById("options");
  var selectedValues= '';
  for (var i = 0; i < x.options.length; i++) {
     if(x.options[i].selected ==true){
          selectedValues += x.options[i].value + ", ";
      }
  }
  alert("You selected: "+ selectedValues.slice(0, -2));
}
