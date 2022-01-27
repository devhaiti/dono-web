export const siteMeta = {
  defaultTitle: 'dono',
  description: `Tying remittance to descision making`,
  imageUrl: '/images/og-image.png',
  twitterUsername: '@donoapp',

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:300',
  maintenance: process.env.MAINTENANCE_MODE || false,

  socials: {
    GitHub: 'https://github.com/devhaiti',
    Twitter: 'https://twitter.com/donoapp'
  }
}
