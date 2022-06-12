import React from 'react';
import { View } from 'react-native';
import { Metrics } from '../styles';

interface SizedBoxProps {
    height?: number;
    width?: number;
}

const SizedBox: React.FC<SizedBoxProps> = ({ width = Metrics.moderateScale(10), height = Metrics.verticalScale(10) }) => {
    return (
        <View style={{ width: width, height: height }} />
    );
}

export default SizedBox;