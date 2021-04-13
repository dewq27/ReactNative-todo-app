import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CheckIcon = (props: SvgProps) =>  {
  return (
    <Svg
      width={24}
      height={24}
      strokeWidth={3}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  );
};

export default CheckIcon;
