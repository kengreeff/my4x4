import { Flex } from '@chakra-ui/react'
import NextImage from 'next/image'

import type { Image } from '@prisma/client'

import useImageUrl from '@hooks/useImageUrl'

type ProjectImageThumbProps = {
  href?: string,
  image: Image,
}

const ProjectImageThumb = (props: ProjectImageThumbProps) => {
  const { href, image } = props

  const { imageUrl } = useImageUrl({
    enabled: !!image.id,
    path: image.fileKey,
    transformation: [{
      focus: 'auto',
      height: '240',
      width: '240',
    }],
  })

  return (
    <Flex
      as={href ? 'a' : 'div'}
      borderWidth="1px"
      borderRadius="2xl"
      flexShrink="0"
      href={href}
      height="120px"
      overflow="hidden"
      width="120px"
    >
      <NextImage
        alt="Project Image Thumbnail"
        src={imageUrl || ''}
        height={120}
        width={120}
        style={{ objectFit: 'cover' }}
      />
    </Flex>
  )
}

export default ProjectImageThumb