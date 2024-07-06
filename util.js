//thực hiện render dữ liệu từ API lên giao diện

export default function renderShoesList(arrShoes, idRender) {
    let content = "";
    for (let shoe of arrShoes) {
        let { name, price, image, shortDescription, id } = shoe;
        content += `
             <div class="col-4">
                <!-- Hiển thị hình ảnh giày -->
                <img
                    src="${image}"
                    alt=""
                    class="img-fluid"
                />
                <!-- Tên sản phẩm -->
                <h4>${name}</h4>
                <!-- description -->
                <p>
                  ${shortDescription}
                </p>
                <!-- Price -->
                <p>${price}</p>
                <!-- Action -->
                <button class="custom-button" onclick="chuyenHuongUser(${id})">Mua ngay</button>
            </div>
        `;
    }
    document.getElementById(idRender).innerHTML = content;
}

function chuyenHuongUser(ID) {
    window.location.href = `http://127.0.0.1:5500/detail.html?id=${ID}`; //chuyển hướng user
}

// export let duongDan = {
//     home: "/",
//     detail: "/detail",
// };
