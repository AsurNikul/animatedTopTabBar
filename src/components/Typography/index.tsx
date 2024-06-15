import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import colors from '../../constants/colors';
import {HEIGHT} from '../../utils/commSty';

interface Txt extends TextProps {
  txtStyle?: TextStyle | TextStyle[];
  title?: string | number | any;
  size?: number;
  color?: string;
  font?: string;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  align?: 'auto' | 'center' | 'left' | 'right' | 'justify';
}

const Typography: React.FC<Txt> = props => {
  const {txtStyle, title, color, size, font, mt, ml, mr, mb, align} = props;

  return (
    <Text
      style={[
        txtStyle,
        {
          fontSize: HEIGHT / 35,
        },
      ]}
      {...props}>
      {title}
    </Text>
  );
};

export default Typography;
