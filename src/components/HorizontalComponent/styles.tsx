import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface CarrouselContainerProps {
    snapInterval?: number;
    backgroundColor?: string;
    gap?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    showBackground?: boolean;
}

interface IconsItemProps {
    backgroundColor?: string;
}

interface ItemTextProps {
    color?: string;
}

export const CarrouselContainer = styled(ScrollView).attrs<CarrouselContainerProps>(
    ({ snapInterval = 80, gap = 15, paddingHorizontal = 35 }) => ({
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        decelerationRate: 'fast',
        snapToInterval: snapInterval,
        snapToAlignment: 'center',
        contentContainerStyle: {
            alignItems: 'center',
            gap,
            paddingHorizontal,
            height: 60,
        },
    })
)<CarrouselContainerProps>`
    width: 100%;
    background-color: ${({ backgroundColor, showBackground }) =>
        showBackground ? backgroundColor || '#f8f9fa' : 'transparent'};
    border-radius: 5px;
    padding-vertical: ${({ paddingVertical = 10 }) => paddingVertical}px;
`;

export const IconsItem = styled(TouchableOpacity)<IconsItemProps>`
    padding: 8px 16px;
    background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
    border-radius: 8px;
    min-width: 60px;
    align-items: center;
    justify-content: center;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 3px;
    elevation: 2;
`;

export const ItemText = styled(Text)<ItemTextProps>`
    font-size: 12px;
    color: ${({ color }) => color || '#333'};
    font-weight: 500;
`;
