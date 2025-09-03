import React, { useMemo } from 'react'
import { ButtonCore, type ButtonProps as CoreButtonProps } from '@name-ui/core'
import './Button.css'

// React 按钮组件属性接口
export interface ButtonProps extends Omit<CoreButtonProps, 'children' | 'onClick'> {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// 加载中图标组件
const LoadingIcon: React.FC = () => (
  <span className="n-button__loading">
    <svg className="n-button__spinner" viewBox="0 0 50 50">
      <circle
        className="n-button__spinner-path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="31.416"
      />
    </svg>
  </span>
)

// React 按钮组件
export const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'medium',
  disabled = false,
  loading = false,
  block = false,
  className,
  style,
  id,
  testId,
  children,
  onClick,
  ...rest
}) => {
  // 创建按钮核心逻辑实例
  const buttonCore = useMemo(() => {
    return new ButtonCore({
      type,
      size,
      disabled,
      loading,
      block,
      className,
      style,
      id,
      testId,
      children,
      onClick: onClick as any
    })
  }, [type, size, disabled, loading, block, className, style, id, testId, children, onClick])

  // 处理点击事件
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const nativeEvent = event.nativeEvent
    buttonCore.handleClick(nativeEvent)
    
    if (buttonCore.isInteractive() && onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className={buttonCore.getClassName()}
      style={buttonCore.getStyle()}
      {...buttonCore.getAttributes()}
      onClick={handleClick}
      {...rest}
    >
      {loading && <LoadingIcon />}
      {(!loading || children) && (
        <span className="n-button__content">
          {children}
        </span>
      )}
    </button>
  )
}

Button.displayName = 'Button'