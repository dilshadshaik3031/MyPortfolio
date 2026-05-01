// src/components/ui/AvatarHex.jsx
import React from 'react'

export default function AvatarHex({ src, size = 224, alt = 'avatar', className = '' }) {
  const w = size
  const h = size

  const roundedHexPath = `
    M50 3
    L82 20
    A4 4 0 0 1 86 24
    L86 76
    A4 4 0 0 1 82 80
    L50 97
    L18 80
    A4 4 0 0 1 14 76
    L14 24
    A4 4 0 0 1 18 20
    Z
  `

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`avatar-hex ${className}`}
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <clipPath id="hexClip">
          <path d={roundedHexPath} />
        </clipPath>
      </defs>

      <image
        x="0"
        y="0"
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid slice"
        href={src}
        clipPath="url(#hexClip)"
      />

      <path
        d={roundedHexPath}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1.6"
      />
    </svg>
  )
}
