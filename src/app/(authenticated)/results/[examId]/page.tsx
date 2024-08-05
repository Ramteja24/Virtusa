'use client'

import { Prisma } from '@prisma/client'
import { Typography, Spin, Row, Col, Card } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ExamResultsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: results,
    isLoading,
    refetch,
  } = Api.result.findMany.useQuery({
    where: { studentId: user?.id },
    include: { exam: true },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Exam Results</Title>
      <Paragraph>
        As a student, you can view your exam results below to see your
        performance.
      </Paragraph>
      <Row gutter={[16, 16]}>
        {results?.map(result => (
          <Col xs={24} sm={12} md={8} key={result.id}>
            <Card
              title={result.exam?.title}
              bordered={false}
              actions={[
                result.score >= 50 ? (
                  <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                  <CloseCircleOutlined style={{ color: 'red' }} />
                ),
              ]}
            >
              <Text strong>Score: </Text>
              <Text>{result.score?.toString()}</Text>
              <br />
              <Text strong>Feedback: </Text>
              <Text>{result.feedback}</Text>
              <br />
              <Text strong>Date: </Text>
              <Text>{dayjs(result.dateCreated).format('DD/MM/YYYY')}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
