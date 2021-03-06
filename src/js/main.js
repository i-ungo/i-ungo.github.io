

var app = new Vue({
  el: '#app',
  data: {
    items: [
      { date: '2021.3.7', content: '特別企画「アイデアソン」の最終発表会を開催しました.' },
      { date: '2021.3.7', content: 'i-ungo Officialサイトを更新しました.' },
      { date: '2021.3.6', content: '国立大学の前期合格発表に合わせて, リニューアルした公式サイトを発表しました.' },
      { date: '2021.2.28', content: '特別企画「アイデアソン」の中間発表を行いました ' },
      { date: '2020.12.16', content: 'フロントエンドチームで新公式サイトのモックアップ制作と会議を行いました.' },
    ],
    width: 0,
    isOpen: false,
  },
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
      console.log(this.width);
    },
    asyncFadeOut: function() {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 300);
    },
    noScroll: function(event) {
      event.preventDefault();
    }
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize, false);
    this.handleResize();
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize, false)
  },
});

Vue.use(VueScrollTo, {
  duration: 450,
  easing: 'ease-in-out'
})


const btnNews = document.querySelector('#btn_news');
btnNews.addEventListener("click", () => {
  window.alert('このページは準備中です。もうしばらくお待ちください！')
})
