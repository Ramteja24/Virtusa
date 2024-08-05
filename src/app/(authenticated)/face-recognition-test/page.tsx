'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Spin, Row, Col, Upload, message } from 'antd'
import { UploadOutlined, CheckCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function FaceRecognitionTestPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const {
    data: faceRecognitionTests,
    isLoading,
    refetch,
  } = Api.faceRecognitionTest.findMany.useQuery({
    where: { studentId: user?.id },
  })
  const { mutateAsync: createFaceRecognitionTest } =
    Api.faceRecognitionTest.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const [fileList, setFileList] = useState([])

  const handleUpload = async () => {
    if (fileList.length === 0) {
      enqueueSnackbar('Please select a file to upload.', { variant: 'error' })
      return
    }

    const file = fileList[0]
    try {
      const { url } = await upload({ file })
      await createFaceRecognitionTest({
        data: { studentId: user?.id, testResult: url },
      })
      enqueueSnackbar('Face recognition test uploaded successfully!', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to upload face recognition test.', {
        variant: 'error',
      })
    }
  }

  const uploadProps = {
    onRemove: file => {
      setFileList(prev => {
        const index = prev.indexOf(file)
        const newFileList = prev.slice()
        newFileList.splice(index, 1)
        return newFileList
      })
    },
    beforeUpload: file => {
      setFileList([file])
      return false
    },
    fileList,
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={24}>
          <Title level={2}>Face Recognition Test</Title>
          <Paragraph>
            As a student, you need to perform a face recognition test to verify
            your identity before taking the exam.
          </Paragraph>
          {isLoading ? (
            <Spin />
          ) : (
            <>
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Select File</Button>
              </Upload>
              <Button
                type="primary"
                onClick={handleUpload}
                style={{ marginTop: 16 }}
              >
                Upload
              </Button>
              {faceRecognitionTests?.length > 0 && (
                <div style={{ marginTop: 24 }}>
                  <Title level={4}>Previous Face Recognition Tests</Title>
                  {faceRecognitionTests.map(test => (
                    <div key={test.id} style={{ marginBottom: 16 }}>
                      <CheckCircleOutlined
                        style={{ color: 'green', marginRight: 8 }}
                      />
                      <Text>{test.testResult}</Text>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
