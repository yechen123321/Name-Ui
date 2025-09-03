import { describe, it, expect, vi } from 'vitest'
import { ButtonCore } from '../src/components/button'

describe('ButtonCore', () => {
  it('should create button with default props', () => {
    const button = new ButtonCore({})
    
    expect(button.getClassName()).toContain('n-button')
    expect(button.getClassName()).toContain('n-button--type-default')
    expect(button.getClassName()).toContain('n-button--size-medium')
  })

  it('should create button with custom props', () => {
    const button = new ButtonCore({
      type: 'primary',
      size: 'large',
      disabled: true
    })
    
    const className = button.getClassName()
    expect(className).toContain('n-button--type-primary')
    expect(className).toContain('n-button--size-large')
    expect(className).toContain('n-button--disabled')
  })

  it('should handle click events', () => {
    const onClick = vi.fn()
    const button = new ButtonCore({ onClick })
    
    const event = new Event('click')
    button.handleClick(event)
    
    expect(onClick).toHaveBeenCalledWith(event)
  })

  it('should prevent click when disabled', () => {
    const onClick = vi.fn()
    const button = new ButtonCore({ onClick, disabled: true })
    
    const event = new Event('click')
    Object.defineProperty(event, 'preventDefault', {
      value: vi.fn(),
      writable: true
    })
    
    button.handleClick(event)
    
    expect(event.preventDefault).toHaveBeenCalled()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('should show loading content', () => {
    const button = new ButtonCore({ loading: true, children: 'Click me' })
    
    const content = button.getContent()
    expect(content).toEqual({
      type: 'loading',
      content: 'Click me'
    })
  })

  it('should check interactive state', () => {
    const normalButton = new ButtonCore({})
    const disabledButton = new ButtonCore({ disabled: true })
    const loadingButton = new ButtonCore({ loading: true })
    
    expect(normalButton.isInteractive()).toBe(true)
    expect(disabledButton.isInteractive()).toBe(false)
    expect(loadingButton.isInteractive()).toBe(false)
  })
})