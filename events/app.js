function image(){
   alert("heavy bike picture clicked")
}


var text = document.getElementById("para")
// text.innerText = "Tayyaba";

console.log(text.innerHTML);


var counter = 0

function increase() {

   document.getElementById("counter").innerText = counter++
}
function decrease() {

   if(counter<0){
      counter = 0
   }
   document.getElementById("counter").innerText = counter--
}


function abc() {

   var input = document.getElementById("input-text")
   input.value = "Tayyaba"



   // if(input.value.trim() == ""){
   //    alert("please fill some data")
   // }
   // else{
   //    alert("form submitted")
   // }
}

// function fillCity() {
//    var cityName;
//    var zipEntered = document.getElementById("zip").value;
//    switch (zipEntered) {
//       case "60608":
//          cityName = "Chicago";
//          break;
//       case "68114":
//          cityName = "Omaha";
//          break;
//       case "53212":
//          cityName = "Milwaukee";
//    }
//    document.getElementById("city").value = cityName;
// }

function expandAndStrech() {
   var fullText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam atque perferendis aliquam doloremque voluptas tempora recusandae deleniti, quisquam iusto officia porro similique incidunt? Pariatur excepturi repellendus quis deleniti odio vitae id beatae distinctio aliquam exercitationem impedit quibusdam, eum maxime porro fugiat, est ex quasi, qui reprehenderit natus nesciunt ab! Quaerat, non. Debitis soluta alias hic fugit autem quibusdam id magnam atque ipsum provident? Deleniti, velit, aut numquam harum sint dicta quam recusandae at, officia cumque repellendus nam tempore dolore. Incidunt soluta sed odit adipisci, reiciendis suscipit tenetur quod fugiat illo perspiciatis impedit distinctio labore maiores provident officiis quis enim doloribus ullam, nam optio culpa exercitationem rerum quia. Saepe odit eligendi facilis esse doloribus quia quos sunt facere aut obcaecati."
   var shortText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam atque perferendis aliquam doloremque voluptas tempora recusandae deleniti, quisquam iusto officia porro similique incidunt? Pariatur excepturi repellendus quis deleniti odio vitae id beatae distinctio aliquam exercitationem impedit quibusdam, eum maxime porro fugiat, est ex quasi,"
   var paraText = document.getElementById("para");
   var button = document.getElementById("btn")


   if (paraText.innerText == shortText) {
      paraText.innerText = fullText
      button.innerText = "Read less"

   }
   else {
      paraText.innerText = shortText
      button.innerText = "Read More"

   }
}
expandAndStrech();


function abc() {

   var text = document.getElementById("hell")

   text.className = "textStyle"
}