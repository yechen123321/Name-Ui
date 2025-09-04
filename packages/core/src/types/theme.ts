// 主题颜色配置
export interface ThemeColors {
  primary: string
  secondary: string
  success: string
  warning: string
  danger: string
  info: string
  light: string
  dark: string
}

// 主题尺寸配置
export interface ThemeSizes {
  small: {
    fontSize: string
    padding: string
    borderRadius: string
  }
  medium: {
    fontSize: string
    padding: string
    borderRadius: string
  }
  large: {
    fontSize: string
    padding: string
    borderRadius: string
  }
}

// 主题配置
export interface Theme {
  colors: ThemeColors
  sizes: ThemeSizes
  fontFamily: string
  fontWeight: {
    normal: number
    medium: number
    bold: number
  }
  borderRadius: {
    small: string
    medium: string
    large: string
  }
  boxShadow: {
    small: string
    medium: string
    large: string
  }
}

// 主题提供者属性
export interface ThemeProviderProps {
  theme?: Partial<Theme>
  children: any
}
