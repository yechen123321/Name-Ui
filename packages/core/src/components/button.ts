import { ButtonProps } from '../types'
import { createComponentClass } from '../utils'

/**
 * 按钮组件的核心逻辑类
 */
export class ButtonCore {
  private props: ButtonProps

  constructor(props: ButtonProps) {
    this.props = props
  }

  /**
   * 获取按钮的 CSS 类名
   */
  getClassName(): string {
    const { type = 'default', size = 'medium', disabled, loading, block, className } = this.props

    const componentClass = createComponentClass('button', {
      type,
      size,
      disabled: disabled || loading,
      loading,
      block
    })

    return className ? `${componentClass} ${className}` : componentClass
  }

  /**
   * 获取按钮的样式对象
   */
  getStyle(): Record<string, any> {
    const { style } = this.props
    return style || {}
  }

  /**
   * 获取按钮的属性
   */
  getAttributes(): Record<string, any> {
    const { id, testId, disabled, loading } = this.props

    return {
      ...(id && { id }),
      ...(testId && { 'data-testid': testId }),
      disabled: disabled || loading,
      'aria-disabled': disabled || loading
    }
  }

  /**
   * 处理点击事件
   */
  handleClick(event: Event): void {
    const { onClick, disabled, loading } = this.props

    if (disabled || loading) {
      event.preventDefault()
      return
    }

    onClick?.(event)
  }

  /**
   * 获取按钮内容
   */
  getContent(): any {
    const { children, loading } = this.props

    if (loading) {
      return this.renderLoadingContent()
    }

    return children
  }

  /**
   * 渲染加载状态内容
   */
  private renderLoadingContent(): any {
    // 这里返回一个加载状态的标识，具体的渲染由框架适配器处理
    return {
      type: 'loading',
      content: this.props.children
    }
  }

  /**
   * 检查按钮是否处于可交互状态
   */
  isInteractive(): boolean {
    const { disabled, loading } = this.props
    return !disabled && !loading
  }
}