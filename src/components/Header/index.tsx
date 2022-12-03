import Image from 'next/image'
import { Flex, Link } from '@chakra-ui/react'

import LogoUrl from './assets/logo.svg'

const Header = () => {
  return (
    <Flex
      alignItems="center"
      height="64px"
      justifyContent={['center']}
      marginBottom="6"
      paddingX={[4, 8]}
      width="100%"
    >
      <Link href="/">
        <Image priority src={LogoUrl} height={30} width={82} alt="MY4X4 Logo" />
      </Link>
    </Flex>
  )
}

export default Header
