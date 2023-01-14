import {
  Alert,
  AlertDescription,
  Button,
  Flex,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

const CreateAccountNotice = () => {
  const { data: sessionData } = useSession()

  if (sessionData?.user !== undefined) {
    return null
  }

  return (
    <Alert
      borderRadius="xl"
      marginBottom={4}
      padding={8}
      status="success"
      variant="subtle"
    >
      <Flex alignItems="flex-start" direction="column">
        <AlertDescription>
          Create an account to save your build and secure your custom
          url e.g. www.my4x4.info/<strong>black-beauty</strong>
        </AlertDescription>

        <Button
          as="a"
          colorScheme="green"
          href="/users/login"
          marginTop={4}
          size="md"
        >
          Create an Account
        </Button>
      </Flex>
    </Alert>
  )
}

export default CreateAccountNotice