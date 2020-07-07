import React from 'react';
import { DisclaimerText } from './styles';
import { useTranslation } from 'react-i18next';

const Disclaimer = () => {
  const { t } = useTranslation('rewards');
  return (
    <DisclaimerText>
      * {t('cash only for May 27th Everest release')}
    </DisclaimerText>
  );
};

export default Disclaimer;
