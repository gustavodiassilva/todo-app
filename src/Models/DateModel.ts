export interface DateModalProps {
    visible: boolean;
    onClose: () => void;
    date: Date;
    onDateChange: (date: Date) => void;
}