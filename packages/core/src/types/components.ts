// 基础组件属性
export interface BaseComponentProps {
  className?: string
  style?: Record<string, any>
  id?: string
  testId?: string
}

// 按钮组件类型
export type ButtonType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends BaseComponentProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  block?: boolean
  onClick?: (event: Event) => void
  children?: any
}

// 输入框组件类型  
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
export type InputSize = 'small' | 'medium' | 'large'

export interface InputProps extends BaseComponentProps {
  type?: InputType
  size?: InputSize
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  value?: string
  defaultValue?: string
  onChange?: (value: string, event: Event) => void
  onFocus?: (event: Event) => void
  onBlur?: (event: Event) => void
}

// 事件处理器类型
export interface EventHandlers {
  onClick?: (event: Event) => void
  onMouseEnter?: (event: Event) => void
  onMouseLeave?: (event: Event) => void
  onFocus?: (event: Event) => void
  onBlur?: (event: Event) => void
}

// 组件渲染函数类型
export type RenderFunction<P = any> = (props: P) => any