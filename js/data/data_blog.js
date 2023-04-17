const data_blog = [
    {
        id: 1, 
        image: "https://static1.dienanh.net/upload/202301/c1d8781f-16a2-499c-b51b-778bbdb006ab.jpeg",
        title: "Wednesday: Những điều thú vị chắc chắn bạn chưa hề biết về chị Tư",
        text_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum magnam ea quisquam itaque repellat ducimus nulla, accusantium odio ut, numquam dignissimos neque incidunt non saepe vero. Voluptatem, maiores magnam!",
    },
    {
        id: 2, 
        image: "https://cdn.dep365.com/wp-content/uploads/2019/07/Lancome-mask_1200x672_acf_cropped-857x480.jpg",
        title: "Mặt nạ Lancôme Advanced Génifique Hydrogel Melting Mask",
        text_1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum magnam ea quisquam itaque repellat ducimus nulla, accusantium odio ut, numquam dignissimos neque incidunt non saepe vero. Voluptatem, maiores magnam!",
    }
];
var product = "";
data_blog.forEach((value, key) => {
    product += `
        <div class="post">
            <a href="#"><img src=${value.image} alt="" class="image"></a>
            <div class="date">
                <i class="far fa-clock"></i>
                <span>9/12/2022</span>
                <a href="#"><h3 class="title">${value.title}</h3></a>
                <p class="text">${value.text_1}</p>
                <p class="text">${value.text_1}</p>
                <div class="link">
                    <a href="#" class="user">
                        <i class="fas fa-user"></i>
                        <span>by admin</span>
                    </a>
                    <a href="#" class="icon">
                        <i class="fas fa-comment"></i>
                        <span>(45)</span>
                    </a>
                    <a href="#" class="icon">
                        <i class="fas fa-share-square"></i>
                        <span>(29)</span>
                    </a>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.posts-container').innerHTML = product;

//
const data_post = [
    {id: 1, image: "https://static1.dienanh.net/upload/202301/c1d8781f-16a2-499c-b51b-778bbdb006ab.jpeg",
        title: "01. Wednesday: Những điều thú vị chắc chắn bạn chưa hề biết về chị Tư"},
    {id: 2, image: "https://static1.dienanh.net/upload/202212/b3602cf5-b27d-405c-b3f3-3a60aed8c4d8.jpg",
        title: "02. Tà Ác Long - những phản diện cuối cùng của Dragon Ball GT"},
    {id: 3, image: "https://static1.dienanh.net/upload/202301/ba1dd635-8935-4b5f-a867-c7d3fcccad9f.jpeg",
        title: "03. No Way Home gây bão toàn cầu, Sony vẫn chưa sản xuất phần 4"},
    {id: 4, image: "https://static1.dienanh.net/upload/202212/afd291ea-9c43-4e90-985c-5e2ffc49e3eb.jpg",
        title: "04. Vũ trụ DC: Tìm hiểu về Zeus - ông bố ngầu lòi của Wonder Woman"},
];
var product_post = "";
data_post.forEach((value, key) => {
    product_post += `
        <div class="post-d-flex">
            <a href="#"> <img class="hinh-anh" src=${value.image} alt=""></a>
            <a href="#">
                <h3 style="font-size: 1.6rem;">${value.title}</h3>
                <span><i class="fas fa-clock"></i> 9/12/2022</span>
            </a>
        </div>
    `
});
document.querySelector('.p-post').innerHTML = product_post;