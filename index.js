var numberArr = [];
// tạo danh sách array




function themSo(){
    // thêm giá trị vừa nhập vào mảng
 
var number = document.querySelector("#number").value*1;
numberArr.push(number);
 // thêm giá trị vừa nhập vào mảng
 //xử  li kết quả
var demSoDuong = 0 ;
var tongSoDuong = 0 ;
// tìm số nho nhất trong mảng
var soNhoNhat = Math.min(...numberArr) ;
var min = Infinity 



for( var i = 0 ; i < numberArr.length ; i++) {
    if ( numberArr[i] > 0){
        demSoDuong ++
        tongSoDuong += numberArr[i];
        
    }
    if (numberArr[i] > 0 && numberArr[i] < min) {
        min = numberArr[i];
    }// tìm số dương nho nhất trong mảng

    
}
//Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function lastEven(numberArr) {
    for (var i = numberArr.length - 1 ; i >=0 ; i--) {
        if (numberArr[i]%2 == 0 ){
        return numberArr[i];
        
    }else {
        return -1
    }
    
}
    
}
var ketQua = lastEven(numberArr);
//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiChoHaiGiaTri(numberArr, viTri1, viTri2){
    if (viTri1 < 0 || viTri1 >= arr.length || viTri2 < 0 || viTri2 >= arr.length) {
    // Kiểm tra xem vị trí nhập vào có hợp lệ không
    console.log("Vị trí không hợp lệ.");
    return;
  }
  var temp = numberArr[viTri1];
  numberArr[viTri1] = numberArr[viTri2]
  numberArr[viTri2] = temp ;

}
//sắp xếp giá trị tăng dần 
function sortAcesding(numberArr) {
    return numberArr.sort((a, b) => a-b)
    
}
var sapXep = sortAcesding(numberArr);







 var content = `
 <h3>   Các dãy số trong mảng là : ${numberArr}</h3>
 <h3> Tổng số dương là : ${tongSoDuong}</h3>
 <h3> Số dương trong mảng là : ${ demSoDuong}</h3>
 <h3> Số nhỏ nhất trong mảng là : ${ soNhoNhat}</h3>
 <h3> Số dương nhỏ nhất trong mảng là : ${min}</h3>
 <h3> Số chẵn cuối cùng trong dãy là : ${ketQua}</h3>
<h3> Sắp xếp giá trị tăng dần của mẳng : ${sapXep}</h3>
  `;

 document.getElementById("result").innerHTML = content;



}
themSo();