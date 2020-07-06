import React from 'react';
import { MarketingButton, Typography } from 'ui-kit/*';
import { Root, Btns } from './styles';
import Container from 'styles/Container';
import img from './img.svg';
import { useTranslation } from 'react-i18next';
const Community = () => {
  const { t } = useTranslation('developers');
  return (
    <Container>
      <Root>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <Typography type="smallTitle">
            {t('Have Questions')}
            <br />
            {t('Need Help Setting Up')}
          </Typography>
          <Typography type="bodyThin">
            {t('Check out our community forum to chat with others')}
          </Typography>
          <Btns>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forum.videocoin.network"
            >
              <MarketingButton>{t('Join Community')}</MarketingButton>
            </a>
          </Btns>
        </div>
      </Root>
    </Container>
  );
};

export default Community;
