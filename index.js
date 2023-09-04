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


// Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function isPrime(n) {
    if (n<=1){
        return false ;

    }
    if (n <= 3){
        return true ;
    }
    if ( n%2 === 0 || n%3 ===0 ){
        return false;


    }
    var i = 5 ;
    while ( i*i <= n){
        if( n % i === 0 || n%(i+2) === 0){
            return false ;

        }
        i += 6
    }
    return true ;

}
function findFirstPrime(numberArr) {
    for (var i = 0; i< numberArr.length; i++ ){
        if (isPrime(numberArr[i])){
            return numberArr[i];
        }
    }
    return -1

}
var firstPrime = findFirstPrime(numberArr);
//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function countInteger(numberArr) {
    var count = 0 ;
    for (var num of numberArr ){
        if (Number.isInteger(num)){
            count++ ;
        }
    }
    return count;
}
var countOfInteger = countInteger(numberArr);
//So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function countPositiveAndNegative(numberArr) {
    var positiveCount = 0;
    var negativeCount = 0;

    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0) {
            positiveCount++;
        } else if (numberArr[i] < 0) {
            negativeCount++;
        }
    }
 
    if (negativeCount > positiveCount) {
        console.log("Số âm nhiều hơn số dương.");
    } else if (negativeCount < positiveCount){
        console.log("số dương nhiều hơn số âm");
    }else{
        console.log("số duong bằng số âm");
    }
 }
 countPositiveAndNegative(numberArr);












 var content = `
 <h3>   Các dãy số trong mảng là : ${numberArr}</h3>
 <h3> Tổng số dương là : ${tongSoDuong}</h3>
 <h3> Số dương trong mảng là : ${ demSoDuong}</h3>
 <h3> Số nhỏ nhất trong mảng là : ${ soNhoNhat}</h3>
 <h3> Số dương nhỏ nhất trong mảng là : ${min}</h3>
 <h3> Số chẵn cuối cùng trong dãy là : ${ketQua}</h3>
<h3> Sắp xếp giá trị tăng dần của mẳng : ${sapXep}</h3>
 <h3> Số nguyên tố đầu tiên trong mang là :  ${firstPrime }</h3> 
 <h3> Số lượng số nguyên trong mảng :  ${countOfInteger}</h3> 
 
 
 `;

 document.getElementById("result").innerHTML = content;



}
themSo();