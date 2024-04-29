import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      links: [
        {
          text: 'Connect Under a Minute',
          href: getPermalink('/#connect-to-your-wallet'),
        },
        {
          text: 'Swap between +1000 tokens',
          href: getPermalink('/#swap-between-1000-tokens'),
        },
        {
          text: 'Earn more with DeFi Loan Markets',
          href: getPermalink('/#defi-loan-markets'),
        },
        {
          text: 'Increase Income with Liquid Staking',
          href: getPermalink('/#increase-income-with-liquid-staking'),
        },
        {
          text: 'Open Source and Non-Custodial',
          href: getPermalink('/#open-source-and-non-custodial'),
        }
      ],
    },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: 'Learn',
      href: getPermalink('/learn'),
    },
    {
      text: 'About the Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
  ],
  actions: [
    { text: 'Download App', href: getPermalink('/download'), target: '_blank' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#onboard-on-defi') },
        { text: 'Connect Under a Minute', href: getPermalink('/connect-to-your-wallet') },
        { text: 'Swap tokens', href: getPermalink('/swap-tokens') },
        { text: 'DeFi Loan Markets', href: getPermalink('/defi-loan-markets') },
        { text: 'Liquid Staking', href: getPermalink('/liquid-staking') },
        { text: 'Fiat onRamp', href: getPermalink('/fiat-onramp') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Multi Device App', href: getPermalink('/multi-device-app') },
        { text: 'Download', href: getPermalink('/multi-device-app') },
        { text: 'Launch App', href: 'https://app.hexa-lite.io' },
      ],
    },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: 'About the Team', href: getPermalink('/team') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Snapshot', href: 'https://snapshot.org/#/hexaonelabs.eth' },
        { text: 'HexaOne Labs', href: 'https://hexaonelabs.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/hexa_one_labs' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/hexaonelabs' }
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://hexaonelabs.com/"> HexaOne Labs</a>.
  `,
};
