

var app = new Vue({
  el: '#app',
  data: {
    items: [
      { date: '2020.12.16', content: 'フロントエンドチームで新公式サイトのモックアップ制作と会議を行いました.' },
      { date: '2020.12.12', content: 'フロントエンドチームで新公式サイトのモックアップ制作と会議と制作を行いました.' },
      { date: '2020.12.10', content: 'フロントエンドチームで新公式サイトのモックアップ制作と会議を行いました.' },
      { date: '2020.12.08', content: 'フロントエンドチームで新公式サイトのモックアップ制作を行いました.' },
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