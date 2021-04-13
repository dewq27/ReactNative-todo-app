import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PlusIcon = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );
};

export default PlusIcon;
