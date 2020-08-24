import React, { useState } from 'react';
import View from 'components/View';
import { Icon, Typography } from 'ui-kit';
import { Element } from 'react-scroll';
import { ExpandButton, AppLink, DownloadLinks } from './styles';
import { useBreakpoint } from 'components/BrealpointProvider';

const Version = ({ data }: any) => {
  const { version, description, links } = data;
  const { tablet, mobile } = useBreakpoint();
  const renderLink = ({ name, url, icon }: any) => (
    <AppLink href={url} key={name}>
      {icon && <Icon width={24} height={24} name={icon} />}
      {name}
    </AppLink>
  );
  return (
    <View paddingT={32} paddingL={mobile ? 11 : tablet ? 24 : 40}>
      <Typography type="subtitle">Version {version}</Typography>
      <View marginB={32}>
        <Typography opacity="drift">{description}</Typography>
      </View>
      <View marginB={16}>
        <Typography type="body">Downloads:</Typography>
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
              <Typography type="title">{name}</Typography>
              {!mobile && (
                <View marginL={16}>
                  <Typography type="subtitleCaps">
                    version {lastVersion.version}
                  </Typography>
                </View>
              )}
            </View>
            <Typography opacity="drift">{description}</Typography>
          </View>
          <ExpandButton onClick={toggle}>
            <Icon
              width={24}
              height={24}
              name={isExpanded ? 'arrowUp' : 'arrowDown'}
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
