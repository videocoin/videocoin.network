import React, { useState } from 'react';
import View from 'components/View';
import { Element } from 'react-scroll';
import { ExpandButton, AppLink, DownloadLinks } from './styles';
import { useBreakpoint } from 'components/BrealpointProvider';
import Text from 'components/UI/Text';
import appleIcon from 'icons/apple.svg';
import windowsIcon from 'icons/windows.svg';
import linuxIcon from 'icons/linux.svg';
import dockerIcon from 'icons/dockerHub.svg';
import githubIcon from 'icons/github.svg';
import webIcon from 'icons/web.svg';
import androidIcon from 'icons/android.svg';
import arrowUpIcon from 'icons/arrowUp.svg';
import arrowDownIcon from 'icons/arrowDown.svg';
import Button from 'components/UI/Button';

const icons: any = {
  apple: appleIcon,
  windows: windowsIcon,
  linux: linuxIcon,
  dockerHub: dockerIcon,
  web: webIcon,
  android: androidIcon,
  github: githubIcon,
};

const Version = ({ data }: any) => {
  const { version, description, links } = data;
  const { tablet, mobile } = useBreakpoint();
  const renderLink = ({ name, url, icon }: any) => (
    <AppLink href={url} key={name}>
      <Button btnTheme="secondary">
        <View row as="span" centerV>
          {icon && <img width={24} height={24} src={icons[icon]} />}
          <span>{name}</span>
        </View>
      </Button>
    </AppLink>
  );
  return (
    <View paddingT={32} paddingL={mobile ? 11 : tablet ? 24 : 40}>
      <Text variant="smallBodyAlt">Version {version}</Text>
      <View marginB={32}>
        <Text variant="smallBody" color="grey70_72">
          {description}
        </Text>
      </View>
      <View marginB={16}>
        <Text variant="smallBodyAlt">Downloads:</Text>
      </View>
      <DownloadLinks>{links.map(renderLink)}</DownloadLinks>
    </View>
  );
};

const App = ({ item }: any) => {
  const [isExpanded, setExpand] = useState(false);
  const { id, name, versions, description } = item;
  const [lastVersion] = versions;
  const { mobile } = useBreakpoint();
  const toggle = () => setExpand(!isExpanded);
  return (
    <Element name={id}>
      <View marginB={64}>
        <View row>
          <View>
            <View base row marginB={8}>
              <Text variant="title2" color="violet80">
                {name}
              </Text>
              {!mobile && (
                <View marginL={16}>
                  <Text variant="caption">version {lastVersion.version}</Text>
                </View>
              )}
            </View>
            <Text variant="smallBody">{description}</Text>
          </View>
          <ExpandButton onClick={toggle}>
            <img
              width={24}
              height={24}
              src={isExpanded ? arrowUpIcon : arrowDownIcon}
            />
          </ExpandButton>
        </View>
        {isExpanded && (
          <>
            <Version data={lastVersion} />
          </>
        )}
      </View>
    </Element>
  );
};

export default App;
