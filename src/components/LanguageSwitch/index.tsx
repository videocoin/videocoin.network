import React, { useRef, useState } from 'react';
import { Popup, Root, Handler } from './styles';
import i18n from '../../i18n';
import useOnClickOutside from '../../hooks/useOnclickOutside';
import { Icon, Typography } from 'ui-kit';
import en from './assets/en.svg';
import ch from './assets/ch.svg';
import kr from './assets/kr.svg';

const icons = {
  en,
  ch,
  kr,
};

export enum Locale {
  en = 'en',
  ch = 'ch',
  kr = 'kr',
}

export const LANGUAGE_KEY = 'LANGUAGE_KEY';

const languages: Record<Locale, string> = {
  en: 'English',
  ch: 'Chinese',
  kr: 'Korean',
};

const LanguageSwitch = () => {
  const [isOpen, setOpen] = useState(false);
  const [locale, setLocale] = useState(i18n.language || 'en');
  const hide = () => setOpen(false);
  const popup = useRef(null);
  useOnClickOutside(popup, hide);
  const togglePopup = () => setOpen(!isOpen);
  const switchLocale = (locale: Locale) => {
    setLocale(locale);
    i18n.changeLanguage(locale);
  };
  const renderLangBtn = (locale: Locale) => {
    const onClick = () => {
      switchLocale(locale);
      hide();
    };
    return (
      <button key={locale} type="button" onClick={onClick}>
        <Typography type="body" theme="dark">
          {languages[locale]}
        </Typography>
      </button>
    );
  };
  return (
    <Root>
      <Handler onClick={togglePopup}>
        <img src={icons[locale]} alt="" />
        <Icon name="arrowDown" />
      </Handler>
      {isOpen && (
        <Popup ref={popup}>{Object.keys(languages).map(renderLangBtn)}</Popup>
      )}
    </Root>
  );
};

export default LanguageSwitch;
