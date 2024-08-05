'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Button, Form, Input, Space, Spin } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function OnlineAptitudeExamPage() {
  const router = useRouter()
  const params = useParams<{ examId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: exam, isLoading: isExamLoading } = Api.exam.findUnique.useQuery(
    {
      where: { id: params.examId },
      include: { studentSubmissions: true },
    },
  )

  const { mutateAsync: submitAnswers } =
    Api.studentSubmission.create.useMutation()

  const [form] = Form.useForm()

  const handleSubmit = async (values: { answers: string }) => {
    try {
      await submitAnswers({
        data: {
          submissionData: values.answers,
          studentId: user.id,
          examId: params.examId,
        },
      })
      enqueueSnackbar('Your answers have been submitted successfully!', {
        variant: 'success',
      })
      router.push(`/results/${params.examId}`)
    } catch (error) {
      enqueueSnackbar('Failed to submit your answers. Please try again.', {
        variant: 'error',
      })
    }
  }

  if (isExamLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Online Aptitude Exam</Title>
      <Paragraph>
        Please complete the following aptitude exam. Your responses will be
        recorded once you submit your answers.
      </Paragraph>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="answers"
          rules={[{ required: true, message: 'Please enter your answers' }]}
        >
          <Input.TextArea rows={10} placeholder="Enter your answers here..." />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
              Submit Answers
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
