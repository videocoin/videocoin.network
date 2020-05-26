import React from 'react';
import { Typography, MarketingButton, Icon } from 'ui-kit';
import { ApiRoot, ApiDesc, ApiCards, ApiCard, ApiIcon } from './styles';
import Container from 'styles/Container';
const Api = () => {
  return (
    <ApiRoot>
      <Container>
        <ApiDesc>
          <Typography type="display3">Complete API-First Delivery</Typography>
          <Typography type="subtitleThin" opacity="drift">
            Whether its publishing video files or hosting live video streams,
            VideoCoin Network’s API connects viewers to videos.
          </Typography>
        </ApiDesc>
        <ApiCards>
          <ApiCard>
            <Typography type="display4">Video File Encoding</Typography>
            <Typography opacity="drift" type="subtitleThin">
              Ingest and encode your video files and output an HLS stream
            </Typography>
            <a href="https://docs.videocoin.network/developers/vod-stream" target="_blank" rel="noopener noreferrer">
              <MarketingButton theme="link">Encoding features</MarketingButton>
            </a>
            <ApiIcon>
              <Icon name="videoPlay" width={36} height={36} />
            </ApiIcon>
          </ApiCard>
          <ApiCard>
            <Typography type="display4">Livestream With Ease</Typography>
            <Typography opacity="drift" type="subtitleThin">
              Stream live from any RTMP or WebRTC source and output an HLS
              stream
            </Typography>
            <a href="https://docs.videocoin.network/developers/live-stream-over-rtmp" target="_blank" rel="noopener noreferrer">
              <MarketingButton theme="link">
                Livestreaming features
              </MarketingButton>
            </a>
            <ApiIcon>
              <Icon name="livestream" width={36} height={36} />
            </ApiIcon>
          </ApiCard>
        </ApiCards>
      </Container>
    </ApiRoot >
  );
};

export default Api;
