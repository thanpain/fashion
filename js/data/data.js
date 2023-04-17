const data_1 = [
    {id: 1, image: "./img/product/n1.jpg", name: "Thời trang hot năm 2023",
     description: "Nàng fashion đa tài nâng tầm phong cách tối giản bằng bộ đôi áo phông...", price: "1.000.000"},
     {id: 2, image: "./img/product/n2.jpg", name: "Thời trang hot năm 2023",
     description: "Nàng fashion đa tài nâng tầm phong cách tối giản bằng bộ đôi áo phông...", price: "1.000.000"},
     {id: 3, image: "./img/product/n3.jpg", name: "Thời trang hot năm 2023",
     description: "Nàng fashion đa tài nâng tầm phong cách tối giản bằng bộ đôi áo phông...", price: "1.000.000"},
     {id: 4, image: "./img/product/n4.jpg", name: "Thời trang hot năm 2023",
     description: "Nàng fashion đa tài nâng tầm phong cách tối giản bằng bộ đôi áo phông...", price: "1.000.000"},
];
const data_2 = [
    {id: 5, image: "./img/product/n5.jpg", name: "Thời trang hot năm 2023",
     description: "Thời trang nam, chất lượng đến từ sản phẩm uy tín nhất hàng đầu việt...", price: "1.200.000"},
     {id: 6, image: "./img/product/n6.jpg", name: "Thời trang hot năm 2023",
     description: "Thời trang nam, chất lượng đến từ sản phẩm uy tín nhất hàng đầu việt...", price: "1.200.000"},
     {id: 7, image: "./img/product/n7.jpg", name: "Thời trang hot năm 2023",
     description: "Thời trang nam, chất lượng đến từ sản phẩm uy tín nhất hàng đầu việt...", price: "1.200.000"},
     {id: 8, image: "./img/product/n8.jpg", name: "Thời trang hot năm 2023",
     description: "Thời trang nam, chất lượng đến từ sản phẩm uy tín nhất hàng đầu việt...", price: "1.200.000"},
];

var product_1 = "";
var product_2 = "";
data_1.forEach((value, key) => {
    product_1 += `
        <div class="col-md-3" data-aos="fade-up">
            <div class="card-img">
                <a href="#"><img class="image" src=${value.image}></a>
            </div>
            <div class="card-body">
                <a href="#"><p class="title">${value.name}</p></a>
                <p class="description">${value.description}</p>
                <span class="price"><b>$</b> ${value.price}</span>
            </div>
            <div class="card-footer">
                <button class="buy"><i class="fa-solid fa-cart-shopping"></i> Mua Hàng</button>
            </div>
        </div>
    `
});
data_2.forEach((value, key) => {
    product_2 += `
        <div class="col-md-3" data-aos="fade-up">
            <div class="card-img">
                <a href="#"><img class="image" src=${value.image}></a>
            </div>
            <div class="card-body">
                <a href="#"><p class="title">${value.name}</p></a>
                <p class="description">${value.description}</p>
                <span class="price"><b>$</b> ${value.price}</span>
            </div>
            <div class="card-footer">
                <button class="buy"><i class="fa-solid fa-cart-shopping"></i> Mua Hàng</button>
            </div>
        </div>
    `
});
document.querySelector('.row-1').innerHTML = product_1;
document.querySelector('.row-3').innerHTML = product_2;

const data_3 = [
    {id: 1, image: "./img/product/n9.jpg", name: "Áo kiểu tay lỡ phối bèo"},
    {id: 2, image: "./img/product/n10.jpg", name: "Áo thun nữ thời trang công sở"},
    {id: 3, image: "./img/product/n11.jpg", name: "Áo khoác nam cá tính đen"},
    {id: 4, image: "./img/product/n12.jpg", name: "Thời trang thể thao nam"}
];

var product_3 = "";

data_3.forEach((value, key) => {
    product_3 += `
        <div class="col-sm-3" data-aos="fade-up">
            <div class="card-img">
                <a href="#"><img class="image" src=${value.image}></a>
            </div>
            <div class="card-body">
                <a href="#"><p>${value.name}</p></a>
                <p class="start" style="font-size: 2rem;">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                </p>
            </div>  
        </div>
    `
});
document.querySelector('.row-2').innerHTML = product_3;

// data new

