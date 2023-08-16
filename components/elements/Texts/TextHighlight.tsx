import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const TextHighlight = ({ children }: Props) => (
  <span className="text-primary-100">{children}</span>
)
