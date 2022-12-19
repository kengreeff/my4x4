import { useCallback } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import { FileInput, ProgressBar } from '@uppy/react'

import type { Project } from '@prisma/client'

import { trpc } from '@utils/trpc'

import useImageUrl from '@hooks/useImageUrl'
import useUppy from '@hooks/useUppy'

import FileUploadButton from '@components/FileUploadButton'

type MainImageProps = {
  project: Project,
}

const MainImage = (props: MainImageProps) => {
  const { project } = props

  const image = project?.projectsImages?.[0]?.image
  const hasImage = !!image

  const { imageUrl } = useImageUrl({
    enabled: hasImage,
    path: image?.fileKey,
    transformation: [{
      focus: 'auto',
      height: '710',
      width: '568',
    }],
  })

  const createProjectsImageMutation = trpc.projectsImages.createProjectsImage.useMutation({
    onSuccess: (data) => {
      console.log('Created Image', data)
    },
  })

  const { mutate } = createProjectsImageMutation

  const uploadSuccess = useCallback((file) => {
    const params = {
      projectId: project?.id,
      image: {
        id: file?.meta?.fileId,
        fileKey: file?.meta?.fileKey,
        filename: file?.meta?.filename,
        originalFilename: file?.meta?.originalFilename,
      },
    }

    mutate(params)

    return params
  }, [project?.id])

  const uppy = useUppy(
    {
      callbacks: {
        uploadSuccess,
      },
    },
    [project?.id],
  )

  return (
    <>
      <Flex
        border="2px dashed"
        borderColor={hasImage ? 'white' : '#efefef'}
        borderRadius={20}
        flexDirection="column"
        overflow="hidden"
        position="relative"
        maxWidth="100%"
        style={{ aspectRatio: '4 / 5' }}
      >
        {hasImage && <Image alt="Project Main Image" fill src={imageUrl} style={{ objectFit: 'cover' }} />}

        <Flex
          background={
            hasImage
              ? 'linear-gradient(0deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.8) 60%, rgba(255,255,255,0) 100%)'
              : undefined
          }
          direction="column"
          marginTop="auto"
          padding="8"
          zIndex="1"
        >
          <Flex alignItems="center">
            <Text
              color={hasImage ? 'white' : 'black'}
              fontSize="3xl"
              fontWeight="bold"
              lineHeight={1.3}
              marginBottom="8"
              width="75%"
            >
              {project?.title}
            </Text>

            <Link href={`/projects/${project?.id}/edit/details`} style={{ marginLeft: 'auto' }}>
              Edit
            </Link>
          </Flex>

          {!!uppy && (
            <FileUploadButton
              buttonProps={{
                backgroundColor: hasImage ? 'whiteAlpha.300' : 'blackAlpha.300',
                colorScheme: hasImage ? 'whiteAlpha' : 'blackAlpha',
                marginTop: 'auto',
                size: 'lg',
                zIndex: '1',
                width: '100%',
                _hover: {
                  backgroundColor: hasImage ? 'whiteAlpha.400' : 'blackAlpha.400',
                },
              }}
              buttonText={`${hasImage ? 'Change' : 'Add'} Photo`}
              uppy={uppy}
            />
          )}
        </Flex>
      </Flex>

      {!!uppy && (
        <ProgressBar uppy={uppy} fixed hideAfterFinish />
      )}
    </>
  )
}

export default MainImage
