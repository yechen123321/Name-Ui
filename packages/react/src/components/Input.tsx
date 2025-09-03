import React, { useMemo, useState, useEffect } from 'react'
import { InputCore, type InputProps as CoreInputProps } from '@name-ui/core'
import './Input.css'

// React 输入框组件属性接口
export interface InputProps extends Omit<CoreInputProps, 'onChange' | 'onFocus' | 'onBlur'> {
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

// React 输入框组件
export const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'medium',
  placeholder,
  disabled = false,
  readonly = false,
  value,
  defaultValue = '',
  className,
  style,
  id,
  testId,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) => {
  // 内部状态管理
  const [internalValue, setInternalValue] = useState(value !== undefined ? value : defaultValue)

  // 当外部 value 改变时同步内部状态
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  // 创建输入框核心逻辑实例
  const inputCore = useMemo(() => {
    return new InputCore({
      type,
      size,
      placeholder,
      disabled,
      readonly,
      value: value !== undefined ? value : internalValue,
      defaultValue,
      className,
      style,
      id,
      testId,
      onChange: onChange as any,
      onFocus: onFocus as any,
      onBlur: onBlur as any
    })
  }, [
    type,
    size,
    placeholder,
    disabled,
    readonly,
    value,
    internalValue,
    defaultValue,
    className,
    style,
    id,
    testId,
    onChange,
    onFocus,
    onBlur
  ])

  // 处理输入事件
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    if (value === undefined) {
      setInternalValue(newValue)
    }

    onChange?.(newValue, event)
  }

  // 处理变化事件
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nativeEvent = event.nativeEvent
    inputCore.handleChange(nativeEvent)
  }

  // 处理焦点事件
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const nativeEvent = event.nativeEvent
    inputCore.handleFocus(nativeEvent)
    onFocus?.(event)
  }

  // 处理失焦事件
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const nativeEvent = event.nativeEvent
    inputCore.handleBlur(nativeEvent)
    onBlur?.(event)
  }

  return (
    <input
      className={inputCore.getClassName()}
      style={inputCore.getStyle()}
      {...inputCore.getAttributes()}
      value={inputCore.getValue()}
      onChange={handleInput}
      onInput={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...rest}
    />
  )
}

Input.displayName = 'Input'