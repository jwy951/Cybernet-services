$(document).ready(function(){
   $("form#mc-embedded-subscribe-form").submit(function(event){
       event.preventDefault();
     let contactIdentity=$("input#mce-CONTACT1").val();
     let contEmail=$("input#mce-EMAIL").val();
     let  contactLocation=$("input#mce-CONTACT2").val();
     let  contactMessage=$("input#mce-CONTACT3").val(); 
     alert("thank you "+contactIdentity+" "+"we will get back to you shortly");

    //  $("button.cont-but").click(function(){
    //      alert("thank you "+contactIdentity+" "+"we will get back to you shortly");
    //  })
   });

   $("form.kra").submit(function(event){
    event.preventDefault();

    });
   
       $("button#kracard").click(function(){
            $("div.service-border1").toggle("2000");
       });

       $("button#landcard").click(function(){
        $("div.land-dispaly").toggle("3000");
       });

       $("button#marriagecard").click(function(){
        $("div.wedding").toggle("3000");
       });

       $("button#dlcard").click(function(){
        $("div.driving-display").toggle("3000");
       });
});