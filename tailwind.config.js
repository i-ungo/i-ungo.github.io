module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#f7f7f7',
      green: '#839B97',
      brown: '#B87233',
    },
    extend: {
      colors: {
        // cyan: '#9cdbff',
        // rightGreen: '#839B97'
        lightGreen: '#575757',
        morelightGreen: '#4B4B4B',
        deepGreen: '#34626C',
        orange: '#FD6F63',
      },
      screens: {
        // md: '1120px',
        tablet: '54rem',
      },
      minHeight: {
        '980': '98rem'
      },
      width: {
        '77': '18.63rem',
        '9/10': '90%',
      },
      maxWidth: {
        '256': '64rem',
        '272': '68rem',
        '280': '70rem',
        '448': '120rem'
      },
      height: {
        'screen2': '110vh',
        '480': '48rem'
      },
      minHeight: {
        '980': '98rem',
        '1000': '100rem'
      },
      margin: {
        '3p': '3%',
        '6p': '6.13%',
        '7p': '6.5%',
        '15p': '15%',
        '81': '21rem'
      },
      fontFamily: {
        Righteoues: ['Righteous', 'cursive'],
        NotoSansJP: ['Noto Sans JP', 'sans-serif']
      },
      fontSize: {
        '3xl': '1.8rem',
        '23xl': '2rem',
        '56xl': '3rem',
        '65xl': '4rem',
        '67xl': '4.2rem',
        '74xl': '4.8rem',
        '82xl': '6.4rem',
        '85xl': '7rem',
        '86xl': '7.2rem'
      },
      lineHeight: {
        '20': '6rem'
      },
      inset: {
        '144': '36rem',
        '4/10': '40%',
        '1/2': '52%',
        '6/10': '67%',
        '16p': '16%',
        '8p': '8.3%'
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
