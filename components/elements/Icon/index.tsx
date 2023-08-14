import * as Fa from 'react-icons/fa'
import * as Md from 'react-icons/md'
import * as Fi from 'react-icons/fi'
import * as Hi from 'react-icons/hi'
import * as Hi2 from 'react-icons/hi2'
import * as Ai from 'react-icons/ai'
import * as Fc from 'react-icons/fc'
import * as Bi from 'react-icons/bi'
import * as Tfi from 'react-icons/tfi'
import * as Ri from 'react-icons/ri'
import * as Bs from 'react-icons/bs'
import * as Io from 'react-icons/io'
import * as Io5 from 'react-icons/io5'
import * as Go from 'react-icons/go'
/* import * as Lu from 'react-icons/lu'
/* import * as Cg from 'react-icons/cg'
import * as Bi from 'react-icons/bi'
import * as Io from 'react-icons/io'
import * as Bs from 'react-icons/bs'
import * as Hi from 'react-icons/hi' */

export const AllIcons = {
  ...Fi,
  ...Fa,
  ...Hi,
  ...Ai,
  ...Fc,
  ...Bi,
  ...Hi2,
  ...Tfi,
  ...Ri,
  ...Bs,
  ...Io,
  ...Md,
  ...Io5,
  ...Go
  /* ...Lu
  /*   ...Md,

  ...Cg,
  ...Bi,
  ...Io,
  ...Bs, */
}

interface IconProps {
  name: string
  size?: number
  color?: string
  fill?: string
  stroke?: string
  hoverColor?: string
}

export const Icon = ({ name, size, color = '', ...rest }: IconProps) => {
  const RIcon =
    AllIcons[name as keyof typeof AllIcons] || AllIcons.FaRegWindowClose

  return <RIcon size={size} color={color} {...rest} />
}

export const getAllIcons = (searchName = '') => {
  const icons: string[] = []

  if (searchName.length <= 2) return []

  for (const key in AllIcons) {
    if (searchName) {
      const { name = '' } = AllIcons[key as keyof typeof AllIcons]
      if (name.toLowerCase().includes(searchName.toLowerCase())) {
        icons.push(AllIcons[key as keyof typeof AllIcons].name)
      }
    } else {
      icons.push(AllIcons[key as keyof typeof AllIcons].name)
    }
  }

  return icons
}

export default Icon
