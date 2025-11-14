// src/components/ui/Button.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  href,
  className = '',
  variant = 'default',
  download = false,    // supports download
  target,
  ...rest
}) {
  const base = 'px-4 py-2 rounded-full font-medium transition inline-flex items-center'
  const styles = {
    default: 'bg-amber-500 hover:bg-amber-600 text-black',
    ghost: 'border border-white/10 text-white hover:bg-white/10',
    outline: 'border border-white/20 text-white hover:bg-white/10'
  }

  const classes = `${base} ${styles[variant] || styles.default} ${className}`.trim()

  // If download requested, render a normal anchor with download attribute.
  if (href && download) {
    return (
      <a
        href={href}
        className={classes}
        download
        target={target || '_self'}
        rel={target === '_blank' ? 'noreferrer noopener' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  // Internal router link
  if (href?.startsWith('/')) {
    return <Link to={href} className={classes} {...rest}>{children}</Link>
  }

  // External anchor
  if (href) {
    return <a href={href} className={classes} target={target || '_blank'} rel="noreferrer">{children}</a>
  }

  // Plain button
  return <button className={classes} {...rest}>{children}</button>
}
