/**
 * 合并 CSS 类名的工具函数
 * @param classes - 类名数组
 * @returns 合并后的类名字符串
 */
export function classNames(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(' ').trim()
}

/**
 * 生成组件基础类名
 * @param componentName - 组件名称
 * @param modifiers - 修饰符对象
 * @returns 类名字符串
 */
export function createComponentClass(
  componentName: string,
  modifiers: Record<string, boolean | string | undefined> = {}
): string {
  const baseClass = `n-${componentName}`
  const modifierClasses = Object.entries(modifiers)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${baseClass}--${key}-${value}`
      }
      return `${baseClass}--${key}`
    })

  return classNames(baseClass, ...modifierClasses)
}

/**
 * 合并样式对象
 * @param styles - 样式对象数组
 * @returns 合并后的样式对象
 */
export function mergeStyles(
  ...styles: (Record<string, any> | undefined)[]
): Record<string, any> {
  return styles.reduce<Record<string, any>>((merged, style) => {
    if (style) {
      return { ...merged, ...style }
    }
    return merged
  }, {})
}
