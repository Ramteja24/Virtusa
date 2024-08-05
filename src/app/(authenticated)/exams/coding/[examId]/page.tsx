'use client'

import { useEffect, useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Form, Input, Button, Spin, Row, Col } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function OnlineCodingExamPage() {
  const router = useRouter()
  const params = useParams<{ examId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [submissionData, setSubmissionData] = useState<string>('')

  const { data: exam, isLoading: isExamLoading } = Api.exam.findUnique.useQuery(
    {
      where: { id: params.examId },
      include: { studentSubmissions: true },
    },
  )

  const { mutateAsync: createSubmission } =
    Api.studentSubmission.create.useMutation()

  const handleSubmit = async () => {
    try {
      await createSubmission({
        data: {
          submissionData,
          studentId: user.id,
          examId: params.examId,
        },
      })
      enqueueSnackbar('Submission successful!', { variant: 'success' })
      router.push('/results/' + params.examId)
    } catch (error) {
      enqueueSnackbar('Submission failed. Please try again.', {
        variant: 'error',
      })
    }
  }

  if (isExamLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Online Coding Exam</Title>
          <Paragraph>
            Complete the coding assessment below and submit your answers.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Title level={3}>{exam?.title}</Title>
          <Paragraph>{exam?.description}</Paragraph>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Your Solution" required>
              <Input.TextArea
                rows={10}
                value={submissionData}
                onChange={e => setSubmissionData(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
