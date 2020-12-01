import React, { ReactNode, useEffect, useState } from 'react';
import { useBreakpoint } from 'components/BrealpointProvider';
import { Title } from 'components/Footer/styles';
import View from 'components/View';

const Menu = ({ title, children }: { title: string; children: ReactNode }) => {
  const { mobile } = useBreakpoint();
  const [isExpand, setExpand] = useState(!mobile);
  useEffect(() => {
    setExpand(!mobile);
  }, [mobile]);
  const onToggle = () => setExpand(!isExpand);
  return (
    <View paddingL={mobile ? 60 : 0}>
      <Title $isOpen={isExpand} onClick={onToggle}>
        {title}
      </Title>
      {isExpand && <div>{children}</div>}
    </View>
  );
};

export default Menu;
