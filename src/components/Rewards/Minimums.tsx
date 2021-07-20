import React from 'react';
import { MinimumsCard, Section } from 'components/Rewards/styles';
import MainBlock from 'components/MainBlock';
import Text from 'components/UI/Text';
import Card from 'components/Card';

const Right = () => {
  return (
    <Card>
      <MinimumsCard>
        <ul>
          <li>
            <Text variant="smallBody" withGradient>
              Worker Node
            </Text>
            <Text color="violet70" variant="smallBodyAlt">
              50,000 VID minimum stake
            </Text>
            <Text variant="caption" color="grey10">
              *minimum will be re-evaluated every month
            </Text>
          </li>
          <li>
            <Text variant="smallBody" withGradient>
              Delegate
            </Text>
            <Text color="violet70" variant="smallBodyAlt">
              1 VID token minimum to stake
            </Text>
          </li>
        </ul>
      </MinimumsCard>
    </Card>
  );
};

const Minimums = () => {
  return (
    <MainBlock
      reverse
      left={
        <Section>
          <Right />
        </Section>
      }
      right={
        <>
          <Text variant="title" marginB={16}>
            Secure but <br /> Attainable Minimums
          </Text>
          <Text>
            Worker Node minimums are far lower than the $8.6M USD average
            minimum stake on similar projects.
          </Text>
        </>
      }
    />
  );
};

export default Minimums;
