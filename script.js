let img_d = document.getElementById('din');

window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 1000) {
        img_d.style.backgroundImage = "url('./images/img1.jpg')";
        document.body.style.backgroundColor = "#8dd9d8";
    }
    if (scrollTop >= 1000 && scrollTop < 2000) {
        img_d.style.backgroundImage = "url('./images/img2.jpg')";
        document.body.style.backgroundColor = "#d794ab";
    }
    if (scrollTop >= 2000 && scrollTop < 3000) {
        img_d.style.backgroundImage = "url('./images/img3.jpg')";
        document.body.style.backgroundColor = "#2b670b";
    }
    if (scrollTop >= 3000) {
        img_d.style.backgroundImage = "url('./images/img4.jpg')";
        document.body.style.backgroundColor = "#c3440b";
    }
};