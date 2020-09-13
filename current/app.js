
/* jQuery */
$(document).ready(function() { 
  $("select").on('change', function() { 
    $(this).find("option:selected").each(function() { 
      var geeks = $(this).attr("value"); 
      if (geeks) { 
        $(".GFG").not("." + geeks).hide(); 
        $("." + geeks).show(); 
      } else { 
        $(".GFG").hide(); 
      } 

    }); 
  }).change(); 
}); 


 const firstMethod = () => {
    // Declaring values
    const charge = document.getElementById('Q').value;
    const time = document.getElementById('T').value;

    // Result
    const result = parseInt(charge) /  parseInt(time);
    document.getElementById('res').innerHTML = '<B>Result:</B> ' + result + ' A';
 }
  
 const secondMethod = () => {
        // Declaring values
    const potentialDiff = document.getElementById('V').value;
    const resistance = document.getElementById('R').value;

    // Result
    const result = parseInt(potentialDiff) /  parseInt(resistance);
    document.getElementById('res').innerHTML = '<B>Result:</B> ' + result + ' A';
 }
