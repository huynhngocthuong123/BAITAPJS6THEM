function kiemTraNguyenTo(a) {
    var count = 0;
    var u = "";
    for (var i = 1; i <= a; i++) {
        if (a % i == 0) count++   
    }
    if (count == 2) u += a + " ,"; return u;
}
function timNguyenTo() {
    var soNhap = document.getElementById('nhapSoN').value;
    var ketQua = "";
    for (var i = 1; i <= soNhap; i++) {
     ketQua += kiemTraNguyenTo(i);
    }
    document.getElementById('inketqua').innerHTML = ketQua;
}
