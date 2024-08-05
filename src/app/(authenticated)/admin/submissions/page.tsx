'use client'

import { Prisma } from '@prisma/client'
import { Typography, Table, Spin, Row, Col } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminStudentSubmissionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: submissions,
    isLoading,
    refetch,
  } = Api.studentSubmission.findMany.useQuery({
    include: {
      student: true,
      exam: true,
    },
  })

  const columns = [
    {
      title: 'Student Name',
      dataIndex: ['student', 'name'],
      key: 'studentName',
    },
    {
      title: 'Exam Title',
      dataIndex: ['exam', 'title'],
      key: 'examTitle',
    },
    {
      title: 'Submission Data',
      dataIndex: 'submissionData',
      key: 'submissionData',
    },
    {
      title: 'Submission Time',
      dataIndex: 'submissionTime',
      key: 'submissionTime',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>
            <FileTextOutlined /> Student Submissions
          </Title>
          <Text>
            As an admin, you can view student submissions to evaluate their
            performance.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <Table
              dataSource={submissions}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
