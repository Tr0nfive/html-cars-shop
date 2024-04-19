function on(value) {
  if(value==1){
    document.getElementById(overlays[0]).style.visibility = "visible";
  }
  if (value==2){
    document.getElementById(overlays[1]).style.visibility = "visible";
  }
  if(value == 3 ){
    document.getElementById(overlays[2]).style.visibility = "visible";
  }
 if(value==4){
   document.getElementById(overlays[3]).style.visibility = "visible";
 }
//  if(value==5){
//   document.getElementById(overlays[4]).style.visibility = "visible";
//  }
// if(Value==6){
//   document.getElementById(overlays[5]).style.visibility = "visible";
// }


}
  function off() {
    
    document.getElementById(overlays[0]).style.visibility = "hidden";
    document.getElementById(overlays[1]).style.visibility = "hidden";
    document.getElementById(overlays[2]).style.visibility = "hidden";
    document.getElementById(overlays[3]).style.visibility = "hidden";
    document.getElementById(overlays[5]).style.visibility = "hidden";
    document.getElementById(overlays[4]).style.visibility = "hidden";
    
    
  //  document.getElementById(overlays.active).style.display = "none";
  }

  var index1 = 0;
  var imageList = Array();
 imageList[0] = "./images/nissan qashqai 2020.jpg";
 imageList[1] = "./images/nissan qashqai 22.jpg";

 function Change_nissan_left(){
index1 = index1 -1;
if (index1 < 0){
  index1 = 1 ;
}
var images1 = document.getElementById("nis_chg_img");
images1.src = imageList[index1]

}

function Change_nissan_right(){
  index1 = index1 +1;
  if (index1 == imageList.length){
    index1 = 0 ;
  }
  var images1 = document.getElementById("nis_chg_img");
  images1.src = imageList[index1]
  
  }

const overlays = [];
overlays[0] = "overlay1";
overlays[1] = "overlay2";
overlays[2] = "overlay3";
overlays[3] = "overlay4";
overlays[4] = "overlay5";
overlays[5] = "overlay6";
var active ;


// active = document.getElementById("OverLayBtn").click.value;
// var over = overlays.find(active);

  // function on(){
     
  //    document.getElementById(over).style.display = "block";
     
  // }

