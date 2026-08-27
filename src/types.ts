export interface OptionItem {
  id: string;
  name: string;
  tagline?: string;
  imageUrl: string;
  fallbackColor?: string;
  iconName?: string;
  description?: string;
}

export interface SlideData {
  id: number;
  number: number;
  question: string;
  subtitle?: string;
  promptNote?: string;
  type: 'reveal-options' | 'rating';
  options?: OptionItem[];
}
