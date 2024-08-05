'use client'

import { Prisma } from '@prisma/client'
import { useState } from 'react'
import { Table, Button, Space, Modal, Form, Input, Typography } from 'antd'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminStudentManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: students, isLoading, refetch } = Api.user.findMany.useQuery({})

  const { mutateAsync: createStudent } = Api.user.create.useMutation()
  const { mutateAsync: updateStudent } = Api.user.update.useMutation()
  const { mutateAsync: deleteStudent } = Api.user.delete.useMutation()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingStudent, setEditingStudent] =
    useState<Prisma.UserCreateInput | null>(null)

  const handleAdd = () => {
    setEditingStudent(null)
    setIsModalVisible(true)
  }

  const handleEdit = (student: Prisma.UserCreateInput) => {
    setEditingStudent(student)
    setIsModalVisible(true)
  }

  const handleDelete = async (id: string) => {
    await deleteStudent({ where: { id } })
    enqueueSnackbar('Student deleted successfully', { variant: 'success' })
    refetch()
  }

  const handleOk = async (values: Prisma.UserCreateInput) => {
    if (editingStudent) {
      await updateStudent({ where: { id: editingStudent.id }, data: values })
      enqueueSnackbar('Student updated successfully', { variant: 'success' })
    } else {
      await createStudent({ data: values })
      enqueueSnackbar('Student created successfully', { variant: 'success' })
    }
    setIsModalVisible(false)
    refetch()
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Prisma.UserCreateInput) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Student Accounts</Title>
      <Paragraph>
        As an admin, you can manage student accounts to ensure only authorized
        users have access to the exams.
      </Paragraph>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: 16 }}
      >
        Add Student
      </Button>
      <Table
        dataSource={students}
        columns={columns}
        loading={isLoading}
        rowKey="id"
      />
      <Modal
        title={editingStudent ? 'Edit Student' : 'Add Student'}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={editingStudent || { name: '', email: '' }}
          onFinish={handleOk}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please input the student name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input the student email!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingStudent ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
