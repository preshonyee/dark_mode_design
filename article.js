const cards = document.querySelector('.article_container');

// array of all articles resource
const articles = [
  {
    id: 1,
    title: 'Advanced Dark Mode - WWDC 2018',
    overline: 'apple',
    articleUrl: 'https://developer.apple.com/videos/play/wwdc2018/218/',
    imageUrl: './assets/images/apple/apple_demo.jpg',
    imageAlt: 'apple demo thumbnail'
  },
  {
    id: 2,
    title: 'Building Dark Mode On Desktop',
    overline: 'slack',
    articleUrl:
      'https://slack.engineering/building-dark-mode-on-desktop-811508b5d15f',
    imageUrl: './assets/images/slacka.jpg',
    imageAlt: 'slack thumbnail'
  },
  {
    id: 3,
    title: 'Designing for Dark Mode: More Than Flipping a Switch',
    overline: 'microsoft',
    articleUrl:
      'https://medium.com/microsoft-design/designing-for-dark-mode-more-than-flipping-a-switch-c21fb38722d2',
    imageUrl: './assets/images/microsoft/msft.png',
    imageAlt: 'microsoft thumbnail'
  },
  {
    id: 4,
    title: 'How To Design Delightful Dark Themes',
    overline: 'superhuman',
    articleUrl:
      'https://blog.superhuman.com/how-to-design-delightful-dark-themes-7b3da644ff1f',
    imageUrl: './assets/images/superhuman.png',
    imageAlt: 'superhuman thumbnail'
  },
  {
    id: 5,
    title: 'Implementing Dark Mode In iOS 13',
    overline: 'instagram',
    articleUrl:
      'https://instagram-engineering.com/instagram-darkmode-58802b43c0f2',
    imageUrl: './assets/images/instagram.png',
    imageAlt: 'instagram thumbnail'
  },
  {
    id: 6,
    title: 'Design a Dark Theme With Material and Figma',
    overline: 'google codelabs',
    articleUrl:
      'https://codelabs.developers.google.com/codelabs/design-material-darktheme/#0',
    imageUrl: './assets/images/google/codelabs.png',
    imageAlt: 'google codelabs thumbnail'
  },
  {
    id: 7,
    title: 'Supporting Dark Mode in Your Web Content - WWDC 2019',
    overline: 'apple',
    articleUrl: 'https://developer.apple.com/videos/play/wwdc2019/511/',
    imageUrl: './assets/images/apple/safari_dark.png',
    imageAlt: 'apple thumbnail'
  },
  {
    id: 8,
    title: 'Building Dark Mode Into a Complex Web App',
    overline: 'clubhouse',
    articleUrl:
      'https://clubhouse.io/blog/building-dark-mode-into-a-complex-web-app/',
    imageUrl: './assets/images/club_house.jpg',
    imageAlt: 'clubhouse thumbnail'
  },
  {
    id: 9,
    title: 'How To Design a Dark Theme For Your Android App',
    overline: 'medium.com',
    articleUrl:
      'https://blog.prototypr.io/how-to-design-a-dark-theme-for-your-android-app-3daeb264637',
    imageUrl: './assets/images/medium/chethan.jpg',
    imageAlt: 'medium.com article thumbnail'
  },
  {
    id: 10,
    title: 'Designing Dark Mode',
    overline: 'microsoft',
    articleUrl:
      'https://medium.com/microsoft-design/designing-dark-mode-31400530787a',
    imageUrl: './assets/images/microsoft/outlook.png',
    imageAlt: 'medium.com thumbnail'
  },
  {
    id: 11,
    title: 'How To Design a Dark Theme Using Material - I/O 2019',
    overline: 'google',
    articleUrl: 'https://www.youtube.com/watch?v=9NDLR3COU7Y&t=3s',
    imageUrl: 'assets/images/google/material_design.jpg',
    imageAlt: 'google thumbnail'
  },
  {
    id: 12,
    title: 'The Ultimate Guide on Designing a Dark Theme for Your Android App',
    overline: 'youtube | chethan kvs',
    articleUrl: 'https://www.youtube.com/watch?v=FSxgFKlbV9Y&feature=youtu.be',
    imageUrl: './assets/images/chethan_video.jpg',
    imageAlt: 'youtube video thumbnail'
  },
  {
    id: 13,
    title: 'Dark Mode - Human Interface Guidelines',
    overline: 'apple',
    articleUrl:
      'https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/',
    imageUrl: './assets/images/apple/mac_os.png',
    imageAlt: 'apple thumbnail'
  },
  {
    id: 14,
    title: 'Turn The Lights Off - Designing for Dark Mode',
    overline: 'medium.com',
    articleUrl:
      'https://uxdesign.cc/turn-the-lights-off-designing-the-dark-mode-of-wego-ios-app-6c4967e59dd6',
    imageUrl: './assets/images/medium/turn_off2.png',
    imageAlt: 'medium.com article thumbnail'
  },
  {
    id: 15,
    title: 'Dark Theme - Material Design',
    overline: 'google',
    articleUrl: 'https://material.io/design/color/dark-theme.html#usage',
    imageUrl: './assets/images/google/dark_material.png',
    imageAlt: 'google thumbnail'
  },
  {
    id: 16,
    title: 'Dark Theme & Gesture Navigation - I/O 2019',
    overline: 'google',
    articleUrl: 'https://www.youtube.com/watch?v=OCHEjeLC_UY&t=923s',
    imageUrl: './assets/images/google/dark_gesture.jpg',
    imageAlt: 'google thumbnail'
  },
  {
    id: 17,
    title: 'Into The Dark',
    overline: 'google',
    articleUrl:
      'https://design.google/library/material-design-dark-theme/?utm_source=materialnewsletter&amp;utm_medium=email&amp;utm_campaign=issue1#hierarchy-simplify-uis-for-glanceable-information',
    imageUrl: './assets/images/google/google_photos.png',
    imageAlt: 'google design article thumbnail'
  },
  {
    id: 18,
    title: 'Introducing Dark Mode - WWDC 2018',
    overline: 'apple',
    articleUrl: 'https://developer.apple.com/videos/play/wwdc2018/210/',
    imageUrl: './assets/images/apple/mac_dark.png',
    imageAlt: 'apple developer video thumbnail'
  },
  {
    id: 19,
    title: 'Implementing Dark Mode on iOS - WWDC 2019',
    overline: 'apple',
    articleUrl: 'https://developer.apple.com/videos/play/wwdc2019/214/',
    imageUrl: './assets/images/apple/swift_ui.jpg',
    imageAlt: 'apple developer video thumbnail'
  },
  {
    id: 20,
    title: 'Designing a Dark Theme for OLED iPhones',
    overline: 'lookup',
    articleUrl:
      'https://medium.com/lookup-design/designing-a-dark-theme-for-oled-iphones-e13cdfea7ffe',
    imageUrl: './assets/images/medium/lookup.png',
    imageAlt: 'lookup design article thumbnail'
  },
  {
    id: 21,
    title: 'Refactoring UI: UI Design Tip for Developers and Designers',
    overline: 'refactoring ui',
    articleUrl: 'https://refactoringui.com/',
    imageUrl: './assets/images/refac_ui.png',
    imageAlt: 'refactoring ui screenshot'
  },
  {
    id: 22,
    title: "There's More To Mailplane's Dark Mode Than You Think",
    overline: 'mailplane',
    articleUrl:
      'https://mailplaneapp.com/blog/entry/designing_dark_mode_for_mailplane.html',
    imageUrl: './assets/images/mail_plane.png',
    imageAlt: 'mailplane design article thumbnail'
  },
  {
    id: 23,
    title: "Google's Dark Mode App Roundup: Everything Available So Far",
    overline: '9togoogle',
    articleUrl:
      'https://9to5google.com/2019/10/10/google-dark-mode-apps-gallery/',
    imageUrl: 'assets/images/9to5.jpg',
    imageAlt: "9to5Google's article thumbnail"
  },
  {
    id: 24,
    title: "Google's Dark Mode App Roundup: Everything Available So Far",
    overline: '9togoogle',
    articleUrl:
      'https://9to5google.com/2019/10/10/google-dark-mode-apps-gallery/',
    imageUrl: 'assets/images/9to5.jpg',
    imageAlt: "9to5Google's article thumbnail"
  }
];

let html = ``;

articles.forEach(function(article) {
  html += `
  <article>
  <a href="${article.articleUrl}" target="_blank" rel="noreferrer noopener">
    <div class="card_image">
      <img alt="${article.imageAlt}" src="${article.imageUrl}">
    </div>
    <div class="card_text">
      <p class="overline">${article.overline.toUpperCase()}</p>
      <p class="card_title">${article.title}</p>
    </div>
  </a> 
  </article>
  `;
});

cards.innerHTML = html;
