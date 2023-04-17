const data_4 = [
    {id: 1, img: "https://j-p.vn/vnt_upload/news/12_2021/Shop_thoi_trang_nu_dep_khong_the_bo_lo.jpg"},
    {id: 2, img: "https://j-p.vn/vnt_upload/news/12_2021/Vi_sao_khach_hang_luon_chon_J-P_Fashion.jpg"},
    {id: 3, img: "https://j-p.vn/vnt_upload/news/01_2022/Giay_au_nu_tai_cua_hang_thoi_trang_nu_quan_Tan_Phu_doc_dao_va_chat.jpg"},
    {id: 4, img: "https://nativefashionshop.com/wp-content/uploads/2021/12/DSC_2958-scaled.jpg"},
    {id: 5, img: "https://cf.shopee.ph/file/4fdff9a8df900add967043ae81e5ec80"},
    {id: 6, img: "https://hstatic.net/744/1000088744/1000124945/promotion3_2.jpg?"},
    {id: 7, img: "https://hstatic.net/744/1000088744/1/2016/5-7/img_2.1_0bbb41f4-d71a-46a1-6cfc-5f81fb459515_grande.jpg"},
    {id: 8, img: "https://hstatic.net/744/1000088744/1/2016/5-7/img_5_5f073ac8-5f1e-4baa-4725-30ac8d61235b_grande.jpg"},
];

var product_4 = "";
data_4.forEach((value, key) => {
    product_4 += `
        <div class="category-img">
            <img class="image" src=${value.img} alt="">
        </div>
    `;
});
document.querySelector('.category').innerHTML = product_4;

// --------------------
const data_5 = [
    {id: 1, img: "https://hstatic.net/744/1000088744/1/2016/5-7/img_3_810d9a6a-f998-4abf-675b-b16f0646c9b1_grande.jpg"},
    {id: 2, img: "https://hstatic.net/744/1000088744/1/2016/5-7/img_8_grande.jpg"},
    {id: 3, img: "https://toplist.vn/images/800px/j-p-fashion-594821.jpg"},
    {id: 4, img: "https://20yearsold.vn/wp-content/uploads/2022/06/nha-kho-liti-553190.jpg"},
];
var product_5 = "";
data_5.forEach((value, key) => {
    product_5 += `
        <div class="category-img">
            <img class="image" src=${value.img} alt="">
        </div>
    `;
});
document.querySelector('.category-2').innerHTML = product_5;

// 
const data_new = [
    {id: 1, img: "https://ss-ava.saostar.vn/wwebp1000/pc/1679308019644/saostar-vwbubd5emcbdxuko.jpg",
        title: "Bé Quyên căng tràn sức sống với váy dạ hội lấp lánh: Không thi Miss Grand hơi phí", 
        des: "Top 10 Hoa hậu Việt Nam 2022."},
    {id: 2, img: "https://ss-images.saostar.vn/wpr700/pc/1679304439122/saostar-jkie96odme4sewj0.png",
        title: "GIGI Xuân-Hè 2023: Cuộc dạo chơi đầy sắc màu của chuyến đi đến những vùng đất mới", 
        des: "phong cách mới mẻ cho những chuyến du ngoạn mùa hè..."},
    {id: 3, img: "https://ss-images.saostar.vn/wwebp700/pc/1679304272971/saostar-09nykr606t826108.jpg",
        title: "Fan loạn nhịp với outfit ngày hè của Thùy Tiên: Biển xanh, cát trắng", 
        des: "Miss Grand International Nguyễn Thúc Thùy Tiên tạo dáng quyến rũ bên bờ biển..."},
    {id: 4, img: "https://ss-images.saostar.vn/wwebp700/pc/1678939319417/saostar-xkb9fq4ocfxzf9nt.png",
        title: "Hoa hậu H'Hen Niê hoá nàng du mục giữa thảo nguyên hoang dã: 100 điểm thần thái", 
        des: "Top 5 Miss Universe - H'Hen Niê khoe nét đẹp hoang dã trong bộ ảnh mới."},
];
var product_new = "";
data_new.forEach((value, key) => {
    product_new += `
        <div class="news-one" data-aos="fade-up">
            <div class="img">
                <img class="img-news" src=${value.img} alt="">
            </div>
            <div class="news-body">
                <a href="#"><h1>${value.title}</h1></a>
                <p class="new-title">${value.des}</p>
                <p class="post">Posted by admin on January 21, 2022 · 4 mins read</p>
            </div>
        </div>
    `
});
document.querySelector('.news-container').innerHTML = product_new;