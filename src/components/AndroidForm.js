import React, { useState } from 'react';
import { Modal, Form, Input, Button, Typography, message } from 'antd';
import { colors, PRIMARY_COLOR } from '../config/colors';
import { androidRequestService } from '../config/formService';

const AndroidForm = ({ visible, onClose, onSubmitSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    
    try {
      // Save to Firestore using the service
      const requestData = {
        name: values.name,
        email: values.email,
        subject: 'RamRoutes Android Access Request',
        message: `Android access request from ${values.name} (${values.email})`,
        processed: false,
        timestamp: new Date().toISOString(),
        source: 'Android Access Form'
      };

      const docId = await androidRequestService.add(requestData);
      
      message.success('Request submitted successfully! Your request has been saved and you will receive download instructions via email within 24 hours.');
      form.resetFields();
      if (onSubmitSuccess) onSubmitSuccess();
      onClose();
    } catch (error) {
      console.error('Request submission failed:', error);
      
      // Show error message and provide fallback
      message.error('Unable to submit your request at this time. Please try again or visit our Terms of Use / Support page for alternative contact methods.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Request Android Access"
      open={visible}
      onCancel={onClose}
      footer={null}
      width={500}
    >
      <Typography.Paragraph style={{ marginBottom: 24 }}>
        Fill out this form to get access to RamRoutes on Android. We'll send you download instructions once we receive your request.
      </Typography.Paragraph>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[
            { required: true, message: 'Please enter your name' },
            { min: 2, message: 'Name must be at least 2 characters' }
          ]}
        >
          <Input placeholder="Enter your full name" size="large" />
        </Form.Item>

        <Form.Item
          label="Gmail Address (associated with your Google Play account)"
          name="email"
          rules={[
            { required: true, message: 'Please enter your Gmail address' },
            { 
              type: 'email', 
              message: 'Please enter a valid email address' 
            },
            {
              pattern: /@gmail\.com$/,
              message: 'Please enter a valid Gmail address'
            }
          ]}
        >
          <Input placeholder="your.email@gmail.com" size="large" />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0, marginTop: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
            block
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            Request Access
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AndroidForm;
