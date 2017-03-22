function dataHandling2(arr){
  arr.splice(4,1,"Pria","SMA Internasional Metro");
  console.log(arr);
  
  var arrDate = arr[3];
  var splittedDate = arrDate.split("/");
  
  if(splittedDate[1]==="01"){
    console.log("Januari");
  }
  else if(splittedDate[1]==="02"){
    console.log("Februari");
  }
  else if(splittedDate[1]==="03"){
    console.log("Maret");
  }
  else if(splittedDate[1]==="04"){
    console.log("April");
  }
  else if(splittedDate[1]==="05"){
    console.log("Mei");
  }
  else if(splittedDate[1]==="06"){
    console.log("Juni");
  }
  else if(splittedDate[1]==="07"){
    console.log("Juli");
  }
  else if(splittedDate[1]==="08"){
    console.log("Agustus");
  }
  else if(splittedDate[1]==="09"){
    console.log("September");
  }
  else if(splittedDate[1]==="10"){
    console.log("Oktober");
  }
  else if(splittedDate[1]==="11"){
    console.log("November");
  }
  else if(splittedDate[1]==="12"){
    console.log("Desember");
  }
  
  splittedDate.sort(function(value1, value2) { return value2 - value1; });
  console.log(splittedDate);
  
  var joinDate = splittedDate.join("-");
  console.log(joinDate);
  
  var arrName = arr[1];
  arrName.slice(0,15);
  console.log(arrName);
  
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
