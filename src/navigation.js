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
        // {
        //   text: 'Buy Crypto with Fiat',
        //   href: getPermalink('/#buy-crypto-with-fiat'),
        // },
        {
          text: 'Open Source and Non-Custodial',
          href: getPermalink('/#open-source-and-non-custodial'),
        }
      ],
    },
    {
      text: 'Get Started',
      href: getPermalink('/get-started'),
    },
    {
      text: 'About the Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { text: 'Download App', href: getPermalink('/download')}
  ],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [],
    },
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#onboard-on-defi') },
        { text: 'Connect Under a Minute', href: getPermalink('/#connect-to-your-wallet') },
        { text: 'Swap tokens', href: getPermalink('/#swap-between-1000-tokens') },
        { text: 'DeFi Loan Markets', href: getPermalink('/#defi-loan-markets') },
        { text: 'Liquid Staking', href: getPermalink('/#increase-income-with-liquid-staking')},
        // { text: 'Fiat onRamp', href: getPermalink('/#fiat-onramp') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Download', href: getPermalink('/download') },
        { text: 'Launch App', href: 'https://app.hexa-lite.io', target: '_blank' },
        { text: 'Become contributor', href: 'https://github.com/hexaonelabs/hexa-lite/pulls' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About the Team', href: getPermalink('/team') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Snapshot', href: 'https://snapshot.org/#/hexaonelabs.eth', target: '_blank', rel: 'noopener' },
        { text: 'HexaOne Labs', href: 'https://hexaonelabs.com', target: '_blank', rel: 'noopener' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms & Privacy Policy', href: getPermalink('/terms'), target: '_blank', rel: 'noopener' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/hexa_one_labs', target: '_blank', rel: 'noopener' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/hexaonelabs', target: '_blank', rel: 'noopener' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://hexaonelabs.com/" rel="noopener"> HexaOne Labs</a>.
  `,
};
