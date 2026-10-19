export type ScreenType = "select" | "letter";

export type PokemonId = "bulbasaur" | "charmander" | "squirtle" | "pikachu";

export interface PokemonTheme {
  primary: string; // Main brand color for card headers, buttons
  primaryHover: string;
  secondary: string; // Accent color for highlights
  bgSoft: string; // Soft tint for card backgrounds / letter tints
  border: string; // Pixel border color
  shadow: string; // Hard pixel shadow color
  badgeBg: string; // Badge background
  badgeText: string; // Badge text color
  taglineColor: string;
}

export interface LetterContent {
  title: string;
  subtitle: string;
  badge: string;
  paragraphs: string[];
  signature: string;
  quote?: string;
}

export interface PokemonData {
  id: PokemonId;
  name: string;
  role: string; // Short classification like "Kỳ nhông hạt cỏ", "Rồng lửa năng động"
  type: string; // Element type e.g. "Cỏ & Độc", "Lửa", "Nước", "Điện"
  typeBadge: string; // Short badge label
  sprite: string; // Path to sprite image
  tagline: string; // Short punchy tagline for selection card
  greeting: string; // Companion message
  soundEffectText: string; // e.g. "Bulba! 🌱", "Char char! 🔥"
  theme: PokemonTheme;
  letter: LetterContent;
}
