import React from 'react';
import { Typography } from 'ui-kit';
import TutorialsList from 'components/Developers/Tutorials/List';
import { Root } from './styles';
import { useTranslation } from 'react-i18next';

const Tutorials = () => {
  const { t } = useTranslation('developers');
  return (
    <Root>
      <Typography type="display3" align="center">
        {t('Developer Tutorials')}
      </Typography>
      <Typography type="subtitleThin" opacity="drift" align="center">
        {t('Learn how to build applications on the VideoCoin Network')}
      </Typography>
      <TutorialsList />
    </Root>
  );
};

export default Tutorials;
