import { Dimensions, I18nManager } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (windowWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (windowHeight / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const WriteDirection = I18nManager.isRTL ? 'rtl' : 'auto';
export { scale, verticalScale, moderateScale, windowHeight, windowWidth, WriteDirection };
