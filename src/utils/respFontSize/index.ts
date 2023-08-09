import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

const RFValueConverter =(value: number) => {
    return RFValue(value);
};

const RFPercentageConverter = (value: number) => {
    return RFPercentage(value);
};

export { RFValueConverter, RFPercentageConverter };