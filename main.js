
document.querySelector('.header').addEventListener('click', () => {
    // Creating the X sumbol by changing the .bar div position.
    document.querySelector('#bar1').classList.toggle('bar1-clicked');
    document.querySelector('#bar2').classList.toggle('bar2-clicked');
    document.querySelector('#bar3').classList.toggle('bar3-clicked');
  
    // poping up the mobile menu
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu-trans');
  });
  
  // closing the popup menu onclicking the popup menu items
  
  const menu = Array.from(document.querySelectorAll('.menu a'));
  menu.forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.mobile-menu').classList.remove('mobile-menu-trans');
      document.querySelector('#bar1').classList.remove('bar1-clicked');
      document.querySelector('#bar2').classList.remove('bar2-clicked');
      document.querySelector('#bar3').classList.remove('bar3-clicked');
    });
  });
  

  // Storing the guest data in a varible

  const guestSpeakers = [
    {
        name: 'Yochai Benkler',
        image: './image/speaker_01.png',
        info: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        work: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
      },
      {
        name: 'Sohyeong Noh',
        image: './image/speaker_02.png',
        infon: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        work: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
      },
      {
        name: 'Lila Tretkov',
        image: './image/speaker_03.png',
        info: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        work: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
      },
      {
        name: 'Kelnam Chon',
        image: './image/speaker_04.png',
        info: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        work: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
      },

      {
        name: 'Julia Leda',
        image: './image/speaker_05.png',
        info: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        work: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
      },

      {
        name: 'Ryan Merkley',
        image: './image/speaker_06.png',
        info: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        work: 'Benkler studies commons-based peer production, and publish his seminal book The Wealth of Networks in 2006.',
      }, 
];

//Appending the guests data inside the .speaker-details div
const speakers = document.querySelector('.speaker-details');

guestSpeakers.forEach((guest) => {
  const speaker = document.createElement('article');
  speaker.className = 'speaker justify-content-center justify-content-between p-4';
  speaker.id = `speaker-${guestSpeakers.indexOf(guest)}`;
  speaker.innerHTML = `<a><img class="speaker" src="${guest.image}" alt="Speaker photo"></a><div class="speaker-info p-2"> <h3 class="text-dark">${guest.name}</h3> <p class="speaker-prof fst-italic">${guest.info}</p> <p>${guest.work}</p> </div>`;
  speakers.appendChild(speaker);  
});


// document.querySelector('#speaker-5').classList.toggle('dropdown-dispaly-invisible');
// document.querySelector('#speaker-4').classList.toggle('dropdown-dispaly-invisible');
// document.querySelector('#speaker-3').classList.toggle('dropdown-dispaly-invisible');

// activating the dropdown menu
const dropDown = document.querySelector('.dropdown-arrow');
dropDown.addEventListener('click', () => {
//   dispalying the hidden speakers
//   document.querySelector('#speaker-5').classList.toggle('dropdown-dispaly');
//   document.querySelector('#speaker-4').classList.toggle('dropdown-dispaly');
//   document.querySelector('#speaker-3').classList.toggle('dropdown-dispaly');
 
//   turning the arrow sighn to 180 degree
  document.querySelector('.dropdown-arrow').classList.toggle('dropdown-arrow-reverse');
});