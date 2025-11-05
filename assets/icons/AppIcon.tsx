import Svg, { Path, Rect } from "react-native-svg";

export default function AppIcon() {
    return (
        <Svg class="icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Tarefa completa">
            <Rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
            <Path d="M9 12.2L11 14l4-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <Path d="M7 8.5H8" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <Path d="M7 15.5H8" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </Svg>

    );
}