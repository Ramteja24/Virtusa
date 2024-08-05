'use client'

import { Typography, List, Card, Spin, Row, Col } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: exams,
    isLoading,
    refetch,
  } = Api.exam.findMany.useQuery({
    include: {
      createdBy: true,
      studentSubmissions: true,
      results: true,
    },
  })

  if (!user) {
    return null
  }

  const handleExamClick = (examId: string, examType: string) => {
    if (examType === 'coding') {
      router.push(`/exams/coding/${examId}`)
    } else if (examType === 'aptitude') {
      router.push(`/exams/aptitude/${examId}`)
    } else {
      enqueueSnackbar('Unknown exam type', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={2}>Available Exams</Title>
          <Text>Choose an exam to start preparing.</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={exams}
              renderItem={exam => (
                <List.Item>
                  <Card
                    title={exam.title}
                    extra={<BookOutlined />}
                    onClick={() => handleExamClick(exam.id, exam.type)}
                  >
                    <Text>{exam.description}</Text>
                    <br />
                    <Text type="secondary">
                      Created by: {exam.createdBy?.name}
                    </Text>
                    <br />
                    <Text type="secondary">
                      Date Created:{' '}
                      {dayjs(exam.dateCreated).format('DD/MM/YYYY')}
                    </Text>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
