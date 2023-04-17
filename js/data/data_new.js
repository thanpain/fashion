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