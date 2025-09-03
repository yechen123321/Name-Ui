import { InputProps } from '../types'
import { createComponentClass } from '../utils'

/**
 * 输入框组件的核心逻辑类
 */
export class InputCore {
  private props: InputProps
  private value: string

  constructor(props: InputProps) {
    this.props = props
    this.value = props.value || props.defaultValue || ''
  }

  /**
   * 获取输入框的 CSS 类名
   */
  getClassName(): string {
    const { size = 'medium', disabled, readonly, className } = this.props

    const componentClass = createComponentClass('input', {
      size,
      disabled,
      readonly
    })

    return className ? `${componentClass} ${className}` : componentClass
  }

  /**
   * 获取输入框的样式对象
   */
  getStyle(): Record<string, any> {
    const { style } = this.props
    return style || {}
  }

  /**
   * 获取输入框的属性
   */
  getAttributes(): Record<string, any> {
    const { 
      id, 
      testId, 
      type = 'text', 
      placeholder, 
      disabled, 
      readonly 
    } = this.props

    return {
      ...(id && { id }),
      ...(testId && { 'data-testid': testId }),
      type,
      placeholder,
      disabled,
      readonly,
      value: this.getValue(),
      'aria-disabled': disabled
    }
  }

  /**
   * 获取当前值
   */
  getValue(): string {
    return this.props.value !== undefined ? this.props.value : this.value
  }

  /**
   * 设置值
   */
  setValue(newValue: string): void {
    if (this.props.value === undefined) {
      this.value = newValue
    }
  }

  /**
   * 处理输入变化事件
   */
  handleChange(event: Event): void {
    const { onChange, disabled, readonly } = this.props

    if (disabled || readonly) {
      return
    }

    const target = event.target as HTMLInputElement
    const newValue = target.value

    this.setValue(newValue)
    onChange?.(newValue, event)
  }

  /**
   * 处理焦点事件
   */
  handleFocus(event: Event): void {
    const { onFocus, disabled } = this.props

    if (disabled) {
      return
    }

    onFocus?.(event)
  }

  /**
   * 处理失焦事件
   */
  handleBlur(event: Event): void {
    const { onBlur, disabled } = this.props

    if (disabled) {
      return
    }

    onBlur?.(event)
  }

  /**
   * 检查输入框是否处于可交互状态
   */
  isInteractive(): boolean {
    const { disabled, readonly } = this.props
    return !disabled && !readonly
  }

  /**
   * 验证输入值
   */
  validate(): boolean {
    // 基础验证逻辑，可以根据需要扩展
    const value = this.getValue()
    const { type } = this.props

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    }

    if (type === 'url') {
      try {
        new URL(value)
        return true
      } catch {
        return false
      }
    }

    return true
  }
}