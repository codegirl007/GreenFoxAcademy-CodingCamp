
let imagesData = [
    {
        photo: "./images/heian-jingu.jpg",
        title: 'Shrine Heian',
        description: 'The Heian Shrine (Heian-jingū) is a Shinto shrine located in Sakyō-ku, Kyoto. The Shrine is ranked as a Beppyō Jinja (the top rank for shrines) by the Association of Shinto Shrines. It is listed as an important cultural property of Japan.'
    },
    {
        photo: "./images/japanese-garden.jpg",
        title: 'Japanese Garden',
        description: 'Japanese gardens are traditional gardens whose designs are accompanied by Japanese aesthetics and philosophical ideas, avoid artificial ornamentation, and highlight the natural landscape. Plants and worn, aged materials are generally used by Japanese garden designers to suggest an ancient and faraway natural landscape, and to express the fragility of existence as well as time\'s unstoppable advance.'
    },
    {
        photo: "./images/kinkakuji.jpg",
        title: 'Temple of the Golden Pavilion',
        description: 'Kinkaku-ji , officially named Rokuon-ji (literally "Deer Garden Temple"), is a Zen Buddhist temple in Kyoto, Japan. It is one of the most popular buildings in Kyoto, attracting many visitors annually. It is designated as a National Special Historic Site, a National Special Landscape and is one of 17 locations making up the Historic Monuments of Ancient Kyoto which are World Heritage Sites.'
    },
    {
        photo: "./images/koya.jpg",
        title: 'Mount Koya',
        description: 'Mount Kōya (Kōya-san) is a large temple settlement in Wakayama Prefecture, Japan to the south of Osaka. In the strictest sense, Mount Kōya is the mountain name (sangō) of Kongōbu-ji Temple, the ecclesiastical headquarters of the Koyasan sect of Shingon Buddhism.'
    },
    {
        photo: "./images/nara.jpg",
        title: 'Todaiji Temple',
        description: 'Tōdai-ji (Eastern Great Temple) is a Buddhist temple complex that was once one of the powerful Seven Great Temples, located in the city of Nara. Its Great Buddha Hall (Daibutsuden) houses the world\'s largest bronze statue of the Buddha Vairocana, known in Japanese as Daibutsu.'
    },
    {
        photo: "./images/ryoanji.jpg",
        title: 'Zen-temple Ryoanji',
        description: 'Ryōan-ji (The Temple of the Dragon at Peace) is a Zen temple located in northwest Kyoto. It belongs to the Myōshin-ji school of the Rinzai branch of Zen Buddhism. '
    },
    {
        photo: "./images/ryokan.jpg",
        title: 'Japanese ryokan',
        description: 'A ryokan is a type of traditional Japanese inn that typically features tatami-matted rooms, communal baths, and other public areas where visitors may wear yukata and talk with the owner.'
    }
];


imagesData.forEach((item, index) => {
    $('#thumbnail-container').append(`
    <div class="box" id="box${index}" data-index="${index}" style = "background: url('${item.photo}') no-repeat center/cover;" >
    <div class = "thumbnail-arrow" id="arrow${index}"></div>
    <div class = "thumbnail-title" id="thumbnail-title${index}">${item.title}</div>
    </div>
    `);
    $('.box').click((event) => {
      let indexClicked = $(event.target).attr('data-index');
      let numberIndex = parseInt(indexClicked);
      $('#photo').attr('src', imagesData[indexClicked].photo);
      $('#photo-title').text(imagesData[indexClicked].title);
      $('#photo-description').text(imagesData[indexClicked].description);
      $('.box').css('width', '75px').css('height', '75px').css('top', '0px');
      $('#box'+ indexClicked).css('width', '100px').css('height', '100px').css('top', '-10px');
      $('.thumbnail-arrow').css('display', 'none');
      $('#arrow'+ indexClicked).css('display', 'block');
    });
  });

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $('.box').css('width', '75px').css('height', '75px').css('top', '0px');
    $('#box'+ photoNumber).css('width', '100px').css('height', '100px').css('top', '-10px');
    $('.thumbnail-arrow').css('display', 'none');
    $('#arrow'+ photoNumber).css('display', 'block');
}

loadPhoto(currentPhoto);

$('#arrow-left').click(() => {
  if(currentPhoto > 0) {
    currentPhoto--;  
  }
  loadPhoto(currentPhoto);
});

$('#arrow-right').click(() => {
  if(currentPhoto < 7) { 
    currentPhoto++; 
  }
  loadPhoto(currentPhoto);
});




