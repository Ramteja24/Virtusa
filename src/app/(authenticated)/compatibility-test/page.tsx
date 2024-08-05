'use client'

import { Typography, Button, Spin, Row, Col } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ComputerCompatibilityTestPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [compatibilityTest, setCompatibilityTest] =
    useState<
      Prisma.CompatibilityTestGetPayload<{ include: { student: true } }>
    >(null)
  const { data, isLoading, refetch } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: { compatibilityTestsAsStudent: true },
  })

  const { mutateAsync: createCompatibilityTest } =
    Api.compatibilityTest.create.useMutation()

  useEffect(() => {
    if (data?.compatibilityTestsAsStudent?.length) {
      setCompatibilityTest(data.compatibilityTestsAsStudent[0])
    }
  }, [data])

  const handleTest = async () => {
    try {
      const newTest = await createCompatibilityTest({
        data: {
          student: { connect: { id: user?.id } },
          testResult: 'Pass', // Placeholder result, replace with actual test logic
          testTime: new Date().toISOString(),
        },
      })
      setCompatibilityTest(newTest)
      enqueueSnackbar('Compatibility test completed successfully!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to complete compatibility test.', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Computer Compatibility Test</Title>
          <Paragraph>
            As a student, you can test your computer compatibility to ensure
            your system meets the requirements for the exam.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          {isLoading ? (
            <Spin size="large" />
          ) : compatibilityTest ? (
            <div>
              <CheckCircleOutlined
                style={{ fontSize: '48px', color: 'green' }}
              />
              <Title level={4}>
                Test Result: {compatibilityTest.testResult}
              </Title>
              <Text>
                Test Time:{' '}
                {dayjs(compatibilityTest.testTime).format(
                  'YYYY-MM-DD HH:mm:ss',
                )}
              </Text>
            </div>
          ) : (
            <Button type="primary" onClick={handleTest}>
              Run Compatibility Test
            </Button>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
