import {
  Alert, AlertDescription, AlertIcon, Button, Checkbox, Flex, Heading, Text, VStack,
} from '@chakra-ui/react'

import type { Business } from '@prisma/client'

import useBusinessForm from '@hooks/useBusinessForm'

import toggleArray from '@utils/toggleArray'

import Form from '@components/Form'
import Paragraph from '@components/Paragraph'
import SectionDivider from '@components/SectionDivider'

type BusinessFormProps = {
  business?: Business,
}

const BusinessForm = (props: BusinessFormProps) => {
  const { business } = props

  const businessFormPayload = useBusinessForm({ business })
  const {
    createdByOwner,
    formPayload,
    formPayload: {
      setValue,
    },
    serviceKeys,
    services,
  } = businessFormPayload
  console.log(businessFormPayload)

  return (
    <Flex marginTop={8} width="100%">
      <Form
        callbacks={{
          // submitForm: business?.id ? updateFn : createFn,
        }}
        formPayload={formPayload}
      >
        <Heading fontWeight="medium" size="lg">
          {business?.id ? 'Edit' : 'Add'} {createdByOwner ? 'your' : 'a'} Business
        </Heading>

        <Paragraph marginTop={Form.Field.MARGIN_TOP}>
          You can upload your own business, or businesses you&apos;ve used.
        </Paragraph>

        {!createdByOwner && (
          <Alert
            borderRadius="xl"
            marginTop={4}
            padding={8}
            status="warning"
            variant="subtle"
          >
            <AlertIcon />

            <AlertDescription>
              If you create a business on behalf of someone else you <strong>may lose the ability to edit</strong> it if
              the owner claims and verifies it.
            </AlertDescription>
          </Alert>
        )}

        <Form.Field
          label="Are you the Owner?"
          marginTop={Form.Field.MARGIN_TOP}
          name="createdByOwner"
          validationRules={{ required: false }}
        >
          <select onChange={e => setValue('createdByOwner', e.target.value === 'true')}>
            <option value="">Please Select...</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </Form.Field>

        <SectionDivider>BUSINESS</SectionDivider>

        {typeof createdByOwner === 'boolean' && (
          <>
            <Form.Field
              label="Business Name"
              name="title"
              validationRules={{ required: true }}
            >
              <input type="text" />
            </Form.Field>

            <Form.Field
              label="Website"
              marginTop={Form.Field.MARGIN_TOP}
              name="website"
              validationRules={{ required: false }}
            >
              <input type="text" />
            </Form.Field>
          </>
        )}

        <SectionDivider>LOCATION</SectionDivider>

        <Form.Field
          label="Email"
          name="email"
          validationRules={{ required: false }}
        >
          <input type="text" />
        </Form.Field>

        <Form.Field
          label="Phone"
          marginTop={Form.Field.MARGIN_TOP}
          name="phone"
          validationRules={{ required: false }}
        >
          <input type="text" />
        </Form.Field>

        <SectionDivider>SERVICES</SectionDivider>

        <VStack alignItems="flex-start">
          {services.map((service) => {
            const { key, title } = service

            return (
              <Checkbox
                key={key}
                onChange={(e) => {
                  setValue('serviceKeys', toggleArray({
                    array: serviceKeys,
                    value: e.target.value,
                  }))
                }}
                name={key}
                value={key}
              >
                {title}
              </Checkbox>
            )
          })}
        </VStack>
      </Form>
    </Flex>
  )
}

export default BusinessForm
