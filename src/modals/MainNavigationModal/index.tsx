import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import {
  FaPlusCircle, FaHome, FaSignOutAlt, FaTruckMonster, FaUserEdit,
} from 'react-icons/fa'
import { signOut, useSession } from 'next-auth/react'

import NavigationItem from './NavigationItem'

type MainNavigationModalProps = {
  callbacks: {
    closeModal: VoidFunction,
  },
  showModal: boolean,
}

const MainNavigationModal = (props: MainNavigationModalProps) => {
  const { callbacks: { closeModal }, showModal } = props

  const { data: sessionData } = useSession()

  return (
    <Drawer
      isOpen={showModal}
      placement="right"
      size="xl"
      onClose={closeModal}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Navigation</DrawerHeader>

        <DrawerBody paddingTop={12}>
          <NavigationItem
            href="/"
            icon={<FaHome />}
            title="Home"
          />

          <NavigationItem
            href="/feed"
            icon={<FaTruckMonster />}
            title="Latest Builds"
          />

          <NavigationItem
            href="/projects/new"
            icon={<FaPlusCircle />}
            title="Add a Build"
          />

          {!!sessionData && (
            <>
              <NavigationItem
                href="/users/account"
                icon={<FaUserEdit />}
                title="Account"
              />

              <NavigationItem
                icon={<FaSignOutAlt />}
                onClick={() => signOut({ callbackUrl: '/' })}
                title="Sign Out"
              />
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MainNavigationModal