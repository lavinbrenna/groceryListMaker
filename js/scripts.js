$(document).ready(function(){
  $("form#grocery-form").submit(function(){
    const groceryArray = [];
    const groceryItem1 = $("input#grocery-item1").val();
    const groceryItem2 = $("input#grocery-item2").val();
    const groceryItem3 = $("input#grocery-item3").val();
    const groceryItem4 = $("input#grocery-item4").val();
    const groceryItem5 = $("input#grocery-item5").val();
    const groceryItem6 = $("input#grocery-item6").val();
    const groceryItem7 = $("input#grocery-item7").val();
    const groceryItem8 = $("input#grocery-item8").val();
    const groceryItem9 = $("input#grocery-item9").val();
    const groceryItem10 = $("input#grocery-item10").val();

    function makeGroceryList(groceryItem){
      if(groceryItem != ""){
        groceryArray.push(groceryItem);
      }
      return groceryArray;
    }
    makeGroceryList(groceryItem1);
    makeGroceryList(groceryItem2);
    makeGroceryList(groceryItem3);
    makeGroceryList(groceryItem4);
    makeGroceryList(groceryItem5);
    makeGroceryList(groceryItem6);
    makeGroceryList(groceryItem7);
    makeGroceryList(groceryItem8);
    makeGroceryList(groceryItem9);
    makeGroceryList(groceryItem10);

    function showList(array){
      if(array.length > 0){
        $("form#grocery-form").hide();
        $(".grocery-list").show();
        }
    }

    groceryArray.forEach(function(grocery){
      $("ul#groceries").append("<li>"+grocery+"</li>");
    })

    showList(groceryArray);
    event.preventDefault();

  })


})