const item_list = ['lms', 'usaint', 'old-lms', 'notice', 'fun-system'];
const link = [
    'https://class.ssu.ac.kr/',
    'https://saint.ssu.ac.kr/',
    'https://myclass.ssu.ac.kr/',
    'https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/',
    'https://fun.ssu.ac.kr/'
];
document.addEventListener('click', function (e) {
    const clicked_ID = e.target.getAttribute('id');
    for (let i = 0; i < item_list.length; i++) {
        if (item_list[i] === clicked_ID) {
            window.open(link[i], '_blank');
            break;
        }
    }
});