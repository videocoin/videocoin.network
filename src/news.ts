import { format, parseISO } from 'date-fns';

const formatDate = (date: string) => {
  return format(parseISO(date), 'LLLL do, yyyy');
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
};

export default news;
