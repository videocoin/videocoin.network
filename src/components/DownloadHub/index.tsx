import React from 'react';
import Sidebar from 'components/DownloadHub/Sidebar';
import { Container } from './styles';
import { Typography } from 'ui-kit';
import App from './App';
import apps from 'components/DownloadHub/apps';
import View from 'components/View';
const DownloadHub = () => {
  const renderApp = (app: any) => <App item={app} key={app.id} />;
  return (
    <div>
      <Container>
        <Sidebar />
        <div>
          <Typography align="center" type="subtitleCaps">
            VideoCoin Network
          </Typography>
          <View marginB={72}>
            <Typography type="display3" align="center">
              Download Hub
            </Typography>
          </View>
          {apps.map(renderApp)}
        </div>
      </Container>
    </div>
  );
};

export default DownloadHub;
