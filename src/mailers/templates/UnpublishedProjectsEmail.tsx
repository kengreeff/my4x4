import * as React from 'react'
import {
  Button, Heading, Img, Section, Text,
} from '@react-email/components'

import DefaultLayout from '../layouts/DefaultLayout'

const baseUrl = process.env.VERCEL_URL
  ? 'https://www.my4x4.info'
  : 'http://localhost:3001'

const defaultProjects = [{
  id: 'cljqfvw7500043b63jz00zphw',
  slug: 'next-gen-raptor',
  title: '2023 Ford Ranger Raptor Next Gen',
  imageUrl: 'https://ik.imagekit.io/lockedandlifted/development/tr:fo-auto,h-200,w-200/images/7d150f97-28dd-44d0-9854-7ba4af307316.png',
}]

type UnpublishedProjectsEmailProps = {
  generationDate: string,
  projects: { id: string, slug: string, title: string, imageUrl: string }[],
  userEmail: string,
}

const UnpublishedProjectsEmail = (props: UnpublishedProjectsEmailProps) => {
  const {
    generationDate = '12th May 2023',
    projects = defaultProjects,
    userEmail = 'name@email.com',
  } = props

  const manyProjects = projects.length > 1

  return (
    <DefaultLayout
      footerContent={(
        <span>
          This message was sent to {userEmail}. If you don't want to receive these emails from MY4X4 in the future, you can edit your profile.
        </span>
      )}
      generationDate={generationDate}
      title={`Unpublished ${manyProjects ? 'Builds' : 'Build'}`}
    >
      {projects.map(project => (
        <Section className="mt-0" key={project.id}>
          <Img
            src={project.imageUrl}
            width="100"
            height="100"
            alt="MY4X4"
            className="rounded-full mt-4"
          />
          <Heading className="text-[16px]">
            {project.title}
          </Heading>
        </Section>
      ))}

      <Section className="mt-4">
        <Text>
          You have unpublished {manyProjects ? 'builds' : 'build'} on my4x4 click below to mark as published
        </Text>
      </Section>

      <Section className="mt-0">
        <Button
          className="bg-[#000000] rounded text-white text-[16px] mt-4 py-4 px-8"
          href={`${baseUrl}/users/account`}
        >
          Publish
        </Button>
      </Section>
    </DefaultLayout>
  )
}

export default UnpublishedProjectsEmail
