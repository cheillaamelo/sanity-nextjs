import Link from 'next/link'
import { ReactNode } from 'react'

export interface IButtonBase {
  children: ReactNode
  href?: string
  onClick?: () => void
  className: string
  id?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const ButtonBase = ({
  children,
  onClick,
  href,
  className,
  id,
  type = 'button',
  disabled
}: IButtonBase) => {
  return href ? (
    <Link className={className} href={href} id={id}>
      {children}
    </Link>
  ) : (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  )
}
