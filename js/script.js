var price , pastpapers_price, topping_price ;
let total = 0;
function printing( name ,pages ,pastpapers, total ){
  this.subject= name;
  this.pages = pages;
  this.passtpapers = pastpapers;
  this.total = total;
}


// proceed button
// $(document).ready(function(){
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);
  // });
  // $("button.proceed").click(function(event){
  //  let pname = $(".name option:selected").val();
  //  let ppages = $("#pages option:selected").val();
  //  let ppastpapers = $("#pastpapers option:selected").val();
   

  //  switch(ppages){
  //   case "0":
  //     price =0;
  //   break;
  //   case "large":
  //      price = 2500;
  //      console.log(price);
  //    break;
  //    case "medium":
  //      price = 1250;
  //      console.log("The price is "+price);
  //    break;
  //    case "small":
  //      price = 900;
  //      console.log(price);
  //    default:
  //      console.log("error"); 
  //  }
  //  switch(ppastpapers){
  //     case "0":
  //       pastpapers_price = 0;
  //     break;
  //     case "Crispy":
  //       pastpapers_price = 200;
  //     break;
  //     case "Stuffed":
  //       pastpapers_price = 250;
  //     break;
  //     case "Gluten-free":
  //       pastpapers_price = 255;
  //     break;
  //     default:
  //       console.log("No price"); 
  //   }


  //   if((ppages == "0") && (ppastpapers == "0")){
  //     console.log("nothing selected");
  //     $("button.proceed").show();
  //     $("#information").show();
  //     $("div.choise").hide();
  //     alert("Please select subject passpapers and pages"); 
  //   }
  //   else{
  //     $("button.proceed").hide();
  //     $("#information").hide();
  //     $("div.choise").slideDown(1000);
  //   }

  // }