import React from 'react';
import Sidebar from 'components/DownloadHub/Sidebar';
import { Container } from './styles';
import App from './App';
import apps from 'components/DownloadHub/apps';
import View from 'components/View';
import Text from 'components/UI/Text';

const DownloadHub = () => {
  const renderApp = (app: any) => <App item={app} key={app.id} />;
  return (
    <View paddingT={64} column centerV centerH>
      <Text align="center" variant="subtitle" withGradient>
        VideoCoin Network
      </Text>
      <View marginB={72}>
        <Text variant="display2" align="center">
          Download Hub
        </Text>
      </View>
      <Container>
        <Sidebar />
        <div>{apps.map(renderApp)}</div>
      </Container>
    </View>
  );
};

export default DownloadHub;
