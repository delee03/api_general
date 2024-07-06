import renderShoesList from "./util.js";

//ôn tập hiển thị nội dung lên giao diện
let arrMonAn = [
    {
        ten: "Mì xào",
        soLuong: 5,
        gia: 10000,
        trangThai: true,
    },
    {
        ten: "Bún bò",
        soLuong: 3,
        gia: 15000,
        trangThai: false,
    },
    {
        ten: "Sushi",
        soLuong: 10000,
        gia: 20000,
        trangThai: true,
    },
    {
        ten: "Mì cay",
        soLuong: 12,
        gia: 30000,
        trangThai: false,
    },
];

//hàm hiển thị lên giao diện
function renderMonAn(arr) {
    let content = "";

    for (let monAn of arr) {
        let { ten, soLuong, gia, trangThai } = monAn;
        if (trangThai) {
            content += `
            <div class="col-3">
                <!-- Tên món -->
                <h3>${ten}</h3>
                <!-- chứa số lượng món -->
                <p>${soLuong}</p>
                <!-- Chứa giá tiền -->
                <p>${gia}</p>
            </div>
        `;
        }
    }
    document.getElementById("baiTap1").innerHTML = content;
}

renderMonAn(arrMonAn);

//Bài tập 2 shoe shop hiển thị
//lấy dữ liệu từ BE

function layDanhSachGiay() {
    let promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
    });

    promise
        .then((res) => {
            console.log(res);
            renderShoesList(res.data.content, "baiTap2");
            // res..data.content
        })
        .catch((err) => {
            console.log(err);
        });
}

layDanhSachGiay();

//thực hiện render dữ liệu từ API lên giao diện

// function renderShoesList(arrShoes, idRender = "baiTap2") {
//     let content = "";
//     for (let shoe of arrShoes) {
//         let { name, price, image, shortDescription, id } = shoe;
//         content += `
//              <div class="col-4">
//                 <!-- Hiển thị hình ảnh giày -->
//                 <img
//                     src="${image}"
//                     alt=""
//                     class="img-fluid"
//                 />
//                 <!-- Tên sản phẩm -->
//                 <h4>${name}</h4>
//                 <!-- description -->
//                 <p>
//                   ${shortDescription}
//                 </p>
//                 <!-- Price -->
//                 <p>${price}</p>
//                 <!-- Action -->
//                 <button class="custom-button" onclick="chuyenHuongUser(${id})">Mua ngay</button>
//             </div>
//         `;
//     }
//     document.getElementById(idRender).innerHTML = content;
// }
