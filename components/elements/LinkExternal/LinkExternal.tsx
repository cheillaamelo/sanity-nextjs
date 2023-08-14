import { ReactNode } from 'react'

export interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode
}

export const LinkExternal = ({ children, className, href }: Props) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...{ href, className }}>
      {children}
    </a>
  )
}
