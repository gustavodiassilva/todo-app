import { CarrouselItem, HorizontalCarrouselProps } from '@/Models/HorizontalComponent';
import React from 'react';
import { CarrouselContainer, IconsItem, ItemText } from './styles';

export const HorizontalCarrousel: React.FC<HorizontalCarrouselProps> = ({
    items,
    snapInterval = 80,
    renderItem,
    onItemPress,
    backgroundColor,
    gap,
    paddingHorizontal,
    paddingVertical,
    showBackground = true,
    itemBackgroundColor,
    itemTextColor,
}) => {
    const handleItemPress = (item: CarrouselItem, index: number) => {
        if (onItemPress) {
            onItemPress(item, index);
        }
    };

    const defaultRenderItem = (item: CarrouselItem, index: number) => (
        <IconsItem
            key={item.id}
            onPress={() => handleItemPress(item, index)}
            activeOpacity={0.7}
            backgroundColor={itemBackgroundColor}
        >
            <ItemText color={itemTextColor}>{item.label}</ItemText>
        </IconsItem>
    );

    return (
        <CarrouselContainer
            snapInterval={snapInterval}
            backgroundColor={backgroundColor}
            gap={gap}
            paddingHorizontal={paddingHorizontal}
            paddingVertical={paddingVertical}
            showBackground={showBackground}
        >
            {items.map((item, index) =>
                renderItem ? (
                    <React.Fragment key={item.id}>
                        {renderItem(item, index)}
                    </React.Fragment>
                ) : (
                    defaultRenderItem(item, index)
                )
            )}
        </CarrouselContainer>
    );
};
