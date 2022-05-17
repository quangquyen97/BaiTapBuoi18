// nhập mảng
var numArray = [];
function nhapSo() {
  var num = Number(document.getElementById("number").value);
  numArray.push(num);
  console.log(numArray);
}
// B1: Tính Tổng số dương trong mảng
function tongSoDuong() {
  var tong = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      tong += numArray[i];
    }
  }
  document.getElementById("txt").innerHTML =
    `Tổng các số dương trong dãy: ` + tong;
}

// B2: Đếm các số dương trong mảng
function demSoDuong() {
  var count = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      count++;
    }
  }
  document.getElementById("txt").innerHTML =
    `Có ` + count + " số dương trong mảng";
}

// B3: Tìm số nhỏ nhất trong mảng
function timSoNhoNhat() {
  for (var i = 0; i < numArray.length; i++) {
    var min = numArray[0];
    if (numArray[i] < min) {
      min = numArray[i];
    }
  }
  document.getElementById("txt").innerHTML = "Số nhỏ nhất là: " + min;
}

// B4: Tìm số dương nhỏ nhất trong mảng
function timSoDuongNhoNhat() {
  var minDuongArray = [];
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      minDuongArray.push(numArray[i]);
    }
  }
  var minDuong = minDuongArray[0];
  for (var j = 1; j < minDuongArray.length; j++) {
    if (minDuongArray[j] < minDuong) {
      minDuong = minDuongArray[j];
    }
  }
  document.getElementById("txt").innerHTML =
    "Số dương nhỏ nhất là: " + minDuong + " trong mảng " + minDuongArray;
}

// B5: Tìm số chẵn cuối cùng trong mảng
//C1;
// function timSoChan(){
//     var soChanArray = [];
//     for(var j = 0; j < numArray.length; j++){
//         soChanArray.push(numArray[j])
//     }
//     var soChanCC = soChanArray[0]
//     for(var i = 0; i < soChanArray.length; i++){
//         if(soChanArray.length == 0){
//             soChanCC = -1;
//         }else{
//             if(soChanArray[i] % 2 == 0){
//                 soChanCC = soChanArray[i]
//             }
//         }
//     }
//     document.getElementById('txt').innerHTML = 'số chẵn cuối cùng của mảng: ' + soChanCC;
// }
//C2:
function timSoChan() {
  var soChanCC = -1;
  for (var i = numArray.length - 1; i >= 0; i--) {
    if (numArray[i] % 2 == 0) {
      soChanCC = numArray[i];
      break;
    }
  }
  document.getElementById("txt").innerHTML =
    "số chẵn cuối cùng của mảng: " + soChanCC;
}

// B6: Đổi vị trí 2 phần tử trong mảng
function doiViTri() {
  var viTri1 = Number(document.getElementById("viTriI").value);
  var viTri2 = Number(document.getElementById("viTriII").value);
  var middle = 0;

  middle = numArray[viTri1];
  numArray[viTri1] = numArray[viTri2];
  numArray[viTri2] = middle;
  document.getElementById("txt").innerHTML = numArray;
}

//B7 : sắp xếp theo thứ tự tăng dần
function sapXep() {
  var middle = 0;
  for (var i = 0; i < numArray.length - 1; i++) {
    for (var j = i + 1; j <= numArray.length; j++) {
      if (numArray[i] > numArray[j]) {
        middle = numArray[j];
        numArray[j] = numArray[i];
        numArray[i] = middle;
      }
    }
  }
  document.getElementById("txt").innerHTML =
    "Sắp xếp theo giá trị tăng dần: " + numArray;
}

// B8: Tìm số nguyên tố đầu tiên trong mảng
function soNTDauTien() {
  var sNT = -1;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] != 1 && numArray[i] > 0) {
      if (
        numArray[i] / 2 == 1 ||
        numArray[i] / 3 == 1 ||
        numArray[i] / 5 == 1 ||
        (numArray[i] % 2 != 0 &&
        numArray[i] % 3 != 0 &&
        numArray[i] % 5 != 0)
      ) {
        document.getElementById("txt").innerHTML =
          "Số nguyên tố đầu tiên là : " + numArray[i];
        break;
      } else {
        document.getElementById("txt").innerHTML =
          "Không có số nào là số NT : " + sNT;
      }
    }
  }
}

// B9: Nhập thêm số thực, đếm có bn số nguyên
function soThuc(){
    var count = 0;
    for(var i = 0; i < numArray.length; i++){
        if(Number.isInteger(numArray[i]) == true ){
            count++;
        }
    }
    document.getElementById("txt").innerHTML = "Mảng có " + count + " số nguyên."
}


// B10: So sánh số âm và dương
function soSanh() {
    var countD = 0;
    var countA = 0;
    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] != 0) {
        if (numArray[i] >= 1) {
          countD++;
        } else {
          countA++;
        }
      }
    }
    if(countA > countD){
        document.getElementById('txt').innerHTML = "Có "+countD + " số dương" +"<br>Có " +countA + " số âm" + "<br> Số Âm nhiều hơn số Dương";
    }else if(countA < countD){
        document.getElementById('txt').innerHTML = "Có "+countD + " số dương" +"<br>Có " +countA + " số âm" + "<br> Số Âm ít hơn số Dương";
    }else{
        document.getElementById('txt').innerHTML = "Có "+countD + " số dương" +"<br>Có " +countA + " số âm" + "<br> Số Âm bằng số Dương";
    }
    
  }
  
  