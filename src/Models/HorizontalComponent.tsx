export interface CarrouselItem {
    id: string | number;
    label: string;
    icon?: string;
    data?: any;
}

export interface HorizontalCarrouselProps {
    items: CarrouselItem[];
    snapInterval?: number;
    renderItem?: (item: CarrouselItem, index: number) => React.ReactNode;
    onItemPress?: (item: CarrouselItem, index: number) => void;
    backgroundColor?: string;
    gap?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    showBackground?: boolean;
    itemBackgroundColor?: string;
    itemTextColor?: string;
}