
let tinhTB = (...resParam) => {
    let kq = 0;
    let slpt = resParam.length
    for (let i = 0; i< slpt; i++) {
        kq += resParam[i];
    }
    return (kq/slpt).toFixed(2);
};

document.getElementById('btnKhoi1').addEventListener('click', () => {
    let toan = +document.getElementById('inpToan').value;
    let ly = +document.getElementById('inpLy').value;
    let hoa = +document.getElementById('inpHoa').value;
    document.getElementById('tbKhoi1').innerHTML = tinhTB(toan, ly, hoa)
    })

document.getElementById('btnKhoi2').addEventListener('click', () => {
    let van = +document.getElementById('inpVan').value;
    let su = +document.getElementById('inpSu').value;
    let dia = +document.getElementById('inpDia').value;
    let anh = +document.getElementById('inpEnglish').value;
    document.getElementById('tbKhoi2').innerHTML = tinhTB(van, su, dia, anh)
})