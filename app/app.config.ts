export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/64379870?s=400&u=e273e99c805313bf665463c58d1c7079134a0d2c&v=4',
      light: 'https://avatars.githubusercontent.com/u/64379870?s=400&u=e273e99c805313bf665463c58d1c7079134a0d2c&v=4',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'vilewing7@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-itchdotio',
      'to': 'https://vilewing.itch.io',
      'target': '_blank',
      'aria-label': 'Itch.io'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Vilewing',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-bluesky',
      'to': 'https://bsky.app/profile/vilewing.bsky.social',
      'target': '_blank',
      'aria-label': 'Bluesky'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/vilewing',
      'target': '_blank',
      'aria-label': 'Twitter'
    }]
  }
})
