import { Button } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import { trpc } from '@utils/trpc'

import type { Post } from '@prisma/client'

type LikeButtonProps = {
  post: Post,
}

const LikeButton = (props: LikeButtonProps) => {
  const { post } = props

  const { data: sessionData } = useSession()

  const { postLikes: { getLikesCountForPostId: { invalidate } } } = trpc.useContext()

  // Create Like
  const { mutate: createPostLikeFn } = trpc.postLikes.createPostLike.useMutation({
    onSuccess() {
      invalidate({ id: post?.id })
    },
  })

  // Delete Like
  const { mutate: deletePostLikeFn } = trpc.postLikes.deletePostLike.useMutation({
    onSuccess() {
      invalidate({ id: post?.id })
    },
  })

  // Total Likes
  const postLikesQuery = trpc.postLikes.getLikesCountForPostId.useQuery(
    { id: post?.id },
    { enabled: !!post?.id },
  )
  const { data: postLikesCount } = postLikesQuery

  // User Likes
  const userPostLikesQuery = trpc.postLikes.getLikesCountForPostId.useQuery(
    { id: post?.id, currentUserOnly: true },
    { enabled: !!post?.id },
  )
  const { data: userPostLikesCount } = userPostLikesQuery

  return (
    <Button
      as={sessionData?.user?.id ? 'button' : 'a'}
      colorScheme={userPostLikesCount ? 'red' : 'gray'}
      leftIcon={userPostLikesCount ? <HiHeart fontSize={24} /> : <HiOutlineHeart fontSize={24} />}
      href={sessionData?.user?.id ? undefined : `/users/login?redirect=/${post?.id}`}
      onClick={userPostLikesCount
        ? () => deletePostLikeFn({
          id: post?.id,
        })
        : () => createPostLikeFn({
          id: post?.id,
        })}
      size="md"
    >
      {postLikesCount} {postLikesCount === 1 ? 'Like' : 'Likes'}
    </Button>
  )
}

export default LikeButton