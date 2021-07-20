import React, { ReactNode } from 'react';
import { Root, StepItem, StepN, List } from './styles';
import Card from 'components/Card';
import View from 'components/View';
import numberIcon from './assets/numberIcon.png';
import Text from 'components/UI/Text';
import Container from 'styles/Container';
import { TColors } from 'styles/Colors';

interface Step {
  id: number;
  title: string;
  desc: ReactNode;
}

const renderStep = (step: Step) => (
  <StepItem key={step.id}>
    <Card>
      <View marginL={-4} row centerV marginT={7} marginB={12}>
        <StepN>
          <img src={numberIcon} width={40} height={40} alt="" />
          <Text variant="bodyAlt" color="violet60">
            {step.id}
          </Text>
        </StepN>
        <Text variant="bodyAlt" color="violet70">
          {step.title}
        </Text>
      </View>
      <Text variant="smallBody">{step.desc}</Text>
    </Card>
  </StepItem>
);

const HowItWorks = ({ color, steps }: { color?: TColors; steps: Step[] }) => {
  return (
    <Root color={color}>
      <Container>
        <Text align="center" variant="display1" marginB={24}>
          How it Works
        </Text>
        <List>{steps.map(renderStep)}</List>
      </Container>
    </Root>
  );
};

export default HowItWorks;
