'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Button, Form, Input, Table, Space, Popconfirm } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminExamManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [exams, setExams] = useState<
    Prisma.ExamGetPayload<{ include: { createdBy: true } }>[]
  >([])
  const [editingExam, setEditingExam] = useState<Prisma.ExamGetPayload<{
    include: { createdBy: true }
  }> | null>(null)
  const [form] = Form.useForm()

  const {
    data: fetchedExams,
    isLoading,
    refetch,
  } = Api.exam.findMany.useQuery({ include: { createdBy: true } })
  const { mutateAsync: createExam } = Api.exam.create.useMutation()
  const { mutateAsync: updateExam } = Api.exam.update.useMutation()
  const { mutateAsync: deleteExam } = Api.exam.delete.useMutation()

  useEffect(() => {
    if (fetchedExams) {
      setExams(fetchedExams)
    }
  }, [fetchedExams])

  const handleCreateOrUpdate = async (values: Prisma.ExamCreateInput) => {
    try {
      if (editingExam) {
        await updateExam({ where: { id: editingExam.id }, data: values })
        enqueueSnackbar('Exam updated successfully', { variant: 'success' })
      } else {
        await createExam({ data: { ...values, createdById: user.id } })
        enqueueSnackbar('Exam created successfully', { variant: 'success' })
      }
      form.resetFields()
      setEditingExam(null)
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to save exam', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteExam({ where: { id } })
      enqueueSnackbar('Exam deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete exam', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (
        text: any,
        record: Prisma.ExamGetPayload<{ include: { createdBy: true } }>,
      ) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => setEditingExam(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this exam?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Exam Management</Title>
      <Paragraph>
        As an admin, you can create, update, or delete exams.
      </Paragraph>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleCreateOrUpdate}
        initialValues={editingExam || {}}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            {editingExam ? 'Update Exam' : 'Create Exam'}
          </Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={exams}
        columns={columns}
        rowKey="id"
        loading={isLoading}
      />
    </PageLayout>
  )
}
