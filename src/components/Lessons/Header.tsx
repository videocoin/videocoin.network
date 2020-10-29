import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from 'ui-kit';
import { Link } from 'react-scroll';
import * as S from './styles';

const Header = () => {
  const { t } = useTranslation('lessons');
  return (
    <S.Header>
      <div>
        <Typography theme="white" type="display2">
          {t('Welcome to VideoCoin 101')}.
        </Typography>
        <Typography type="subtitleThin">
          {t(
            'Learn about the VideoCoin Network become an advocate and earn VID'
          )}
        </Typography>
        <Link to="lessons" smooth offset={-50}>
          <Button>Get Started</Button>
        </Link>
      </div>
      <div>
        <img src="http://placehold.it/400x400" alt="" />
      </div>
    </S.Header>
  );
};

export default Header;
