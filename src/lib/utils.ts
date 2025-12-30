// Utilidad para combinar clases condicionalmente (como clsx o classnames)
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
} 