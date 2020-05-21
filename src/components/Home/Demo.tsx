import React, { useEffect, useRef, useState } from 'react';
import { Button, Typography } from 'ui-kit';
import {
  DemoSection,
  DemoSectionLeft,
  DemoSectionRight,
  CodeSection,
  DemoSectionTitle,
  DemoStreamStatus,
  DemoRoot,
  Player,
  OfflinePlayer,
} from './styles';
import Container from 'styles/Container';

const getRandomTime = () => Math.floor(Math.random() * 3) + 1;

const Demo = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const player = useRef<any>(null);
  useEffect(() => {
    if (step > 3 && container.current && !player.current) {
      // @ts-expect-error
      player.current = window.IndigoPlayer.init(container.current, {
        sources: [
          {
            type: 'hls',
            src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          },
        ],
      });
    }
  }, [step]);
  useEffect(() => {
    return () => {
      if (player.current) {
        player.current.destroy();
      }
    };
  }, []);
  const handleStep = (step: number) => () => {
    setLoading(true);
    const t = getRandomTime() * 1000;
    setTimeout(() => {
      setStep(step);
      setLoading(false);
    }, t);
  };
  return (
    <DemoRoot>
      <Container>
        <DemoSection>
          <DemoSectionLeft>
            <Typography type="subtitleCaps">Step 1</Typography>
            <DemoSectionTitle type="title" theme="white">
              Create Stream
            </DemoSectionTitle>
            <Button
              type="button"
              onClick={handleStep(2)}
              loading={step === 1 && isLoading}
              disabled={step !== 1}
            >
              Create Stream
            </Button>
          </DemoSectionLeft>
          <DemoSectionRight>
            <Typography type="subtitleCaps">POST</Typography>
            <Typography type="body">/stream</Typography>
            <CodeSection>
              <Typography type="body" opacity="drift">
                {`{
    "name": "file", 
    "input_type": "INPUT_TYPE_FILE", 
    "output_type": "OUTPUT_TYPE_HLS", 
    "profile_id": "190b9d72-208d-4fa2-90b7-5b203c0025d2"
}`}
              </Typography>
            </CodeSection>
          </DemoSectionRight>
        </DemoSection>
        <DemoSection>
          <DemoSectionLeft>
            <Typography
              opacity={step > 1 ? 'full' : 'medium'}
              type="subtitleCaps"
            >
              Step 2
            </Typography>
            <DemoSectionTitle
              type="title"
              theme="white"
              opacity={step > 1 ? 'full' : 'medium'}
            >
              Run Stream
            </DemoSectionTitle>
            <Button
              disabled={step !== 2}
              type="button"
              onClick={handleStep(3)}
              loading={step === 2 && isLoading}
            >
              Run Stream
            </Button>
          </DemoSectionLeft>
          <DemoSectionRight>
            <Typography
              type="subtitleCaps"
              opacity={step > 1 ? 'full' : 'medium'}
            >
              POST
            </Typography>
            <Typography type="body" opacity={step > 1 ? 'full' : 'medium'}>
              {step > 1
                ? '/streams/3f18785d-b757-4f18-77e2-36680043fff6/run'
                : '/stream/ID/run'}
            </Typography>
            <DemoStreamStatus $ready={step > 2}>
              {step > 2 ? 'Stream Ready For Ingest' : 'No Stream Created'}
            </DemoStreamStatus>
          </DemoSectionRight>
        </DemoSection>
        <DemoSection>
          <DemoSectionLeft>
            <Typography
              opacity={step > 2 ? 'full' : 'medium'}
              type="subtitleCaps"
            >
              Step 3
            </Typography>
            <DemoSectionTitle
              type="title"
              theme="white"
              opacity={step > 2 ? 'full' : 'medium'}
            >
              Upload Your Video
            </DemoSectionTitle>
            <Button
              disabled={step !== 3}
              type="button"
              onClick={handleStep(4)}
              loading={step === 3 && isLoading}
            >
              Upload Video
            </Button>
          </DemoSectionLeft>
          <DemoSectionRight>
            <Typography
              type="subtitleCaps"
              opacity={step > 2 ? 'full' : 'medium'}
            >
              POST
            </Typography>
            <Typography type="body" opacity={step > 2 ? 'full' : 'medium'}>
              {step > 2
                ? '/upload/url/3f18785d-b757-4f18-77e2-36680043fff6'
                : '/upload/url/<ID>'}
            </Typography>
            <CodeSection>
              <Typography type="body" opacity="drift">
                {`{
    "url": "http://.../sample.mp4"
}`}
              </Typography>
            </CodeSection>
          </DemoSectionRight>
        </DemoSection>
        <DemoSection>
          <DemoSectionLeft>
            <DemoSectionTitle
              type="title"
              theme="white"
              opacity={step > 3 ? 'full' : 'medium'}
            >
              Distribute Video
            </DemoSectionTitle>
          </DemoSectionLeft>
          <DemoSectionRight>
            <Typography type="body" opacity={step > 3 ? 'full' : 'medium'}>
              {'/<ID>/index.m3u8'}
            </Typography>
            {step > 3 ? (
              <Player ref={container} />
            ) : (
              <OfflinePlayer>
                <Typography type="body">Offline</Typography>
              </OfflinePlayer>
            )}
          </DemoSectionRight>
        </DemoSection>
      </Container>
    </DemoRoot>
  );
};

export default Demo;
