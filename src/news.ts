import { format, parseISO } from 'date-fns';

const formatDate = (date: string) => {
  return format(parseISO(date), 'LLL d, ’yy');
};

const news = {
  1: {
    id: 1,
    cover: '1',
    title: 'Have Questions About NFT Marketplace Alpha? We’ve Got Answers!',
    date: formatDate('2021-07-14'),
    link: 'https://medium.com/videocoin/have-questions-about-nft-marketplace-alpha-weve-got-answers-852b757102f0',
    source: 'VideoCoin News',
    description:
      'The launch of our NFT Marketplace Alpha has been a great success: It is now easier than ever to create your own NFT marketplace! Earlier this month, we also released the Alpha source code for the app. While we have been getting a lot of interest and positive feedback, there have also been some questions from the community. We’d like to answer some of those questions here',
  },
  2: {
    id: 2,
    cover: '2',
    title: 'VideoCoin NFT Marketplace Alpha Now Live',
    date: formatDate('2021-07-01'),
    link: 'https://medium.com/videocoin/videocoin-nft-marketplace-alpha-now-live-e3e344da407e',
    source: 'VideoCoin News',
    description:
      'We’re excited to announce the Alpha launch of the VideoCoin NFT Marketplace app. We encourage users to start creating and launching their very own marketplaces starting today, the repository can be found on the VideoCoin Github.',
  },
  3: {
    id: 3,
    cover: 'cryptomodethumb',
    title:
      'Mogul Productions One of Several Startups Bringing NFTs to Film Industry',
    date: formatDate('2021-06-24'),
    link: 'https://cryptomode.com/mogul-productions-one-of-several-startups-bringing-nfts-to-film-industry/',
    source: 'Crypto Mode',
    description:
      'In April, film and comic book legend Frank Miller teamed up with gaming art maker Concept Art House and blockchain game company Gala Games to produce nonfungible token (NFT) collectibles based on his uber-popular Sin City series.',
  },
  4: {
    id: 4,
    cover: 'forbesthumb',
    title: 'Are Movies And Streaming The Next Frontier For NFTs?',
    date: formatDate('2021-06-01'),
    link: 'https://www.forbes.com/sites/lawrencewintermeyer/2021/06/01/are-movies-and-streaming-the-next-frontier-for-nfts/?sh=67f878af2b13',
    source: 'Forbes',
    description:
      'Few industries have had to adapt as dramatically to digital and transform as the film and entertainment sectors. Gen Xers witnessed VHS triumph over Betamax in the VCR wars, the first major format to bring movies into households.',
  },
  5: {
    id: 5,
    cover: 'crytponingthumb',
    title:
      'Built on Filecoin and IPFS, NFT.Storage offers free protection for NFT asset data',
    date: formatDate('2021-04-29'),
    link: 'https://www.cryptoninjas.net/2021/04/29/built-on-filecoin-and-ipfs-nft-storage-offers-free-protection-for-nft-asset-data/',
    source: 'CryptoNinjas',
    description:
      'NFT.Storage, a service specifically created for storing NFT data and backed by Protocol Labs and Pinat, has announced its launch. NFT.Storage allows developers to store non-fungible token (NFT) data on decentralized networks easily, securely, and for free.',
  },
  6: {
    id: 6,
    cover: '6',
    title:
      'Filecoin (FIL) to Power Video NFTs Through Integration with VideoCoin',
    date: formatDate('2021-04-10'),
    link: 'https://en.ethereumworldnews.com/filecoin-fil-to-power-video-nfts-through-integration-with-videocoin/',
    source: 'Ethereum World News',
    description:
      'The decentralized file storage project of Filecoin (FIL) will soon be the home of video NFTs thanks to an integration with VideoCoin (VID). The latter project is working on creating a solution for the reliable creation, storage and trading of video NFTs on the Ethereum network.',
  },
  7: {
    id: 7,
    cover: 'coinspeakethumb',
    title: 'DeFi World Is About to Get Its First Video NFT Platform',
    date: formatDate('2021-04-09'),
    link: 'https://www.coinspeaker.com/defi-world-video-nft-platform/',
    source: 'Coinspeaker',
    description:
      'If you’re a follower of the crypto/blockchain world, there’s a good chance that you might have heard of NTFs (non-fungible tokens) by now. Though once an ambiguous part of blockchain technology, NFTs are now taking on the digital art and gaming world by storm. ',
  },
  8: {
    id: 8,
    cover: '8',
    date: formatDate('2021-07-22'),
    title: 'Everybody Wants to Get Into the NFT Act!',
    link: 'https://medium.com/videocoin/everybody-wants-to-get-into-the-nft-act-813b29bc024b',
    source: 'VideoCoin News',
    description:
      'Technology and content go hand-in-hand. Content creators and creatives must also be technologists with expertise over the tech that powers their mediums.',
  },
  9: {
    id: 9,
    cover: '9',
    date: formatDate('2021-08-13'),
    title:
      'This Week in NFTs: As the NFT Boom Roars Back, Musicians, Influencers, and Athletes Take Notice',
    link: 'https://medium.com/videocoin/this-week-in-nfts-as-the-nft-boom-roars-back-musicians-influencers-and-athletes-take-notice-685e7f50bd09',
    source: 'VideoCoin News',
    description:
      'Musicians, Influencers, and Athletes are taking NFTs more seriously as they come back into the spotlight. Following high-profile NFT drops in the first quarter of the year, other public figures have since quietly spent their time developing their NFT strategies.',
  },

  10: {
    id: 10,
    cover: '10',
    date: formatDate('2021-09-21'),
    title:
      'Live Planet Receives Strategic Investment from Liberty City Ventures',
    link: 'https://medium.com/videocoin/live-planet-receives-strategic-investment-from-liberty-city-ventures-6c577aff4820',
    source: 'VideoCoin News',
    description:
      'Live Planet joins LCV’s select ecosystem of blockchain-focused portfolio companies; Jeremy Drane joins as an external advisor\n',
  },
  11: {
    id: 11,
    cover: '11',
    date: formatDate('2021-10-08'),
    title:
      'VideoCoin NFT Marketplace Beta Milestone: Mixed Media NFTs, On-chain DRM for NFTs, Auctions, and more',
    link: 'https://medium.com/videocoin/videocoin-nft-marketplace-beta-milestone-mixed-media-nfts-on-chain-drm-for-nfts-auctions-and-872ee2632fcc',
    source: 'VideoCoin News',
    description:
      'We are excited to announce the launch of VideoCoin’s NFT Marketplace Beta has gone live on October 7, 2021.',
  },
  12: {
    id: 12,
    cover: '12',
    date: formatDate('2021-10-08'),
    title: 'Robert Powers - Head of strategy at VideoCoin',
    link: 'https://www.blockhashpodcast.com/podcast/robert-powers-head-of-strategy-at-videocoin',
    source: 'Blockhash',
    description:
      'Today on the podcast, Robert Powers joins Brandon Zemp to discuss his role at VideoCoin as Head of Strategy. Leverage the only solution optimized for the unique demands of Video NFT applications, a complete suite of capabilities coming soon from both VideoCoin and Filecoin.',
  },
  13: {
    id: 13,
    cover: '8',
    date: formatDate('2021-10-15'),
    title:
      'Live Planet Announces Strategic Partnership with Mint Werx to Offer Full Service NFT Solutions',
    link: 'https://medium.com/videocoin/live-planet-announces-strategic-partnership-with-mint-werx-to-offer-full-service-nft-solutions-9c50c8a14a44',
    source: 'VideoCoin News',
    description:
      'Partnership Makes Full Service Dynamic NFT Solutions Simple for Brands and Creators',
  },
  14: {
    id: 14,
    cover: '14',
    date: formatDate('2021-11-04'),
    title:
      'Tarantino To Auction NFTs Featuring Seven Never-Before-Told ‘Pulp Fiction’ Secrets',
    link: 'https://finance.yahoo.com/news/tarantino-auction-nfts-featuring-seven-151627796.html',
    source: 'Yahoo',
    description:
      'Quentin Tarantino is jumping on the NFT bandwagon, announcing he will auction off seven uncut “Pulp Fiction” scenes as “Secret NFTs,” on NFT marketplace OpenSea.',
  },
  15: {
    id: 15,
    cover: '15',
    date: formatDate('2021-11-02'),
    title: 'VideoCoin Bringing the NFT+ Conversation to NFTNYC',
    link: 'https://medium.com/videocoin/videocoin-bringing-the-nft-conversation-to-nftnyc-cb2689aa7035',
    source: 'VideoCoin News',
    description:
      'VideoCoin is hitting Times Square for this year’s NFT NYC, the leading Non-Fungible Token conference. Join us as we bring VideoCoin to the forefront of the largest NFT conversation going on right now.',
  },
  16: {
    id: 16,
    cover: '16',
    date: formatDate('2021-10-31'),
    title:
      'What is the worst nightmare that could happen to crypto? Experts answer',
    link: 'https://cointelegraph.com/explained/what-is-the-worst-nightmare-that-could-happen-to-crypto-experts-answer',
    source: 'Cointelegraph',
    description:
      'Back on Oct. 31, 2008, a person — or a group of people — who called themself Satoshi Nakamoto published a nine-page paper describing a “purely peer-to-peer version of electronic cash” th',
  },
  17: {
    id: 17,
    cover: '17',
    date: formatDate('2021-01-27'),
    link: 'https://medium.com/vivid-labs/stableduel-and-vivid-labs-announce-horse-racings-first-nft-marketplace-319030762a9a',
    title: 'StableDuel and Vivid Labs Announce Horse Racing’s First NFT Marketplace',
    source: 'Vivid Labs News',
    description: 'First of its kind partnership will debut certified breeder and horse racing moment NFTs'
  },
  19: {
    id: 19,
    cover: '19',
    date: formatDate('2021-01-27'),
    link: 'https://medium.com/vivid-labs/nft-its-video-and-beyond-26bd69506c2f',
    title: 'NFT+ :: It’s Video … and Beyond!\n',
    source: 'Vivid Labs News',
    description: 'With the rush of NFTs into the mainstream, we at Vivid Labs wonder if something is being left behind. If NFTs really are the revolutionary new media container that they are said to be, shouldn’t they have the technical capability to do more?'
  },
  18: {
    id: 18,
    cover: '18',
    date: formatDate('2021-02-01'),
    link: 'https://news.yahoo.com/nft-marketplace-opensea-refunds-users-185745493.html',
    title: 'NFT Marketplace OpenSea Refunds Users $1.8 Million After Buyers Exploit Loophole for Massive Profit',
    source: 'Yahoo',
    description: 'OpenSea, one of the leading NFT marketplaces, has suffered a so-called exploit — the described exploit enabling users to purchase NFTs from users at well below market value.'
  }
};

export default news;
