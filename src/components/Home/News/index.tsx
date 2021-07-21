import React, { useState } from 'react';
import SwiperCore, { Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import * as S from './styles';
import Text from 'components/UI/Text';
import Colors from 'styles/Colors';
import news from '../../../news';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const Arrow = () => {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 4l9 8.296L8 20"
        stroke={Colors.grey90}
        strokeWidth="2"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};

SwiperCore.use([Controller, Pagination]);

const sort = [4, 1, 3, 2, 5, 6, 7];

const News = () => {
  const [swiper, setControlledSwiper] = useState<SwiperCore | null>(null);
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "news" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: FIXED, height: 96, width: 192)
            }
          }
        }
      }
    }
  `);
  const sortedNews = sort.map((id) => {
    const { node } = allFile.edges.find(
      ({ node }) => node.name === news[id].cover
    );
    return { ...news[id], cover: node.childImageSharp.gatsbyImageData };
  });

  const handleNext = () => swiper?.slideNext();
  const handlePrev = () => swiper?.slidePrev();
  const renderItem = ({ id, link, cover, date, title }) => {
    return (
      <SwiperSlide key={id}>
        <S.NewsItem href={link} target="_blank" rel="noopener noreferrer">
          <div>
            <GatsbyImage alt="" image={cover} />
          </div>
          <div>
            <Text variant="caption" color="violet60">
              {date}
            </Text>
            <Text variant="caption" color="grey50">
              {title}
            </Text>
          </div>
        </S.NewsItem>
      </SwiperSlide>
    );
  };
  return (
    <S.Root>
      <S.Controls>
        <Text marginR={36} variant="subtitle" color="grey90">
          News
        </Text>
        <button onClick={handlePrev} type="button">
          <Arrow />
        </button>
        <button onClick={handleNext} type="button">
          <Arrow />
        </button>
      </S.Controls>
      <S.Inner>
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          onSwiper={setControlledSwiper}
          spaceBetween={36}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {sortedNews.map(renderItem)}
        </Swiper>
      </S.Inner>
    </S.Root>
  );
};

export default News;
