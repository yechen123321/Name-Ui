import { Theme, ThemeColors, ThemeSizes } from '../types'

// 默认主题配置
export const defaultTheme: Theme = {
  colors: {
    primary: '#1890ff',
    secondary: '#6c757d',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#ff4d4f',
    info: '#13c2c2',
    light: '#f8f9fa',
    dark: '#343a40'
  },
  sizes: {
    small: {
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '2px'
    },
    medium: {
      fontSize: '14px',
      padding: '8px 16px',
      borderRadius: '4px'
    },
    large: {
      fontSize: '16px',
      padding: '12px 24px',
      borderRadius: '6px'
    }
  },
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 600
  },
  borderRadius: {
    small: '2px',
    medium: '4px',
    large: '8px'
  },
  boxShadow: {
    small: '0 1px 2px rgba(0, 0, 0, 0.1)',
    medium: '0 2px 8px rgba(0, 0, 0, 0.15)',
    large: '0 4px 16px rgba(0, 0, 0, 0.2)'
  }
}

/**
 * 合并主题配置
 * @param customTheme - 自定义主题配置
 * @returns 合并后的主题配置
 */
export function mergeTheme(customTheme: Partial<Theme> = {}): Theme {
  return {
    ...defaultTheme,
    ...customTheme,
    colors: { ...defaultTheme.colors, ...customTheme.colors },
    sizes: { ...defaultTheme.sizes, ...customTheme.sizes },
    fontWeight: { ...defaultTheme.fontWeight, ...customTheme.fontWeight },
    borderRadius: { ...defaultTheme.borderRadius, ...customTheme.borderRadius },
    boxShadow: { ...defaultTheme.boxShadow, ...customTheme.boxShadow }
  }
}

/**
 * 获取主题颜色
 * @param theme - 主题配置
 * @param colorKey - 颜色键
 * @returns 颜色值
 */
export function getThemeColor(theme: Theme, colorKey: keyof ThemeColors): string {
  return theme.colors[colorKey]
}

/**
 * 获取主题尺寸配置
 * @param theme - 主题配置
 * @param sizeKey - 尺寸键
 * @returns 尺寸配置
 */
export function getThemeSize(theme: Theme, sizeKey: keyof ThemeSizes): ThemeSizes[keyof ThemeSizes] {
  return theme.sizes[sizeKey]
}