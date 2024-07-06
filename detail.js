import renderShoesList from "./util.js";

// render : B1 : lấy dữ liệu
//B2: render ra view;

function getDetailShoe(id = 5) {
    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
        //quan trọng : headers truyền token;  data truyền body; query thì param
    });

    promise
        .then((res) => {
            // console.log(res);
            console.log("API response:", res.data.content);
            renderDetailShoe(res.data.content);
        })
        .catch((err) => {
            console.log(err);
        });
}

getDetailShoe();

function renderDetailShoe(giay, idTheCha = "baiTap3") {
    console.log("Rendering shoe details:", giay);
    let { image, name, description, price, size, relatedProducts } = giay;

    let content = `
        <div class="col-12 col-lg-5">
                    <img
                        src="${image}"
                        alt=""
                        class="img-fluid"
                    />
                </div>
                <div class="col-12 col-lg-7">
                    <h3>${name}</h3>
                    <!-- mô tả -->
                    <p>
                        ${description}
                    </p>
                    <!-- Số size giày -->   
                    <div>
                         ${renderShoeSize(size)}
                    </div>
                    <!-- Giá tiền -->
                    <p class="m-3 fw-bold alert alert-warning d-inline-block">${price}</p>
                    <!-- Action -->
                    <button class="custom-button">Thêm vào giỏ</button>
                </div> 
    `;
    document.getElementById(idTheCha).innerHTML = content;
    renderShoesList(relatedProducts, "baiTap4");
}

function renderShoeSize(arrSize) {
    let content = "";
    for (let item of arrSize) {
        content += `<button class='badge bg-info me-2'>${item}</button>`;
    }
    return content;
    //trả về 1 chuỗi HTML chứa các button size từ tham số size API
}

//render Related Product
// function renderShoesList(arrShoes, idRender = "baiTap4") {
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
