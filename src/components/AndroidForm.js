import React, { useState } from 'react';
import { Modal, Form, Input, Button, Typography, message } from 'antd';
import { colors, PRIMARY_COLOR } from '../config/colors';
import { androidRequestsService } from '../config/firestoreService';

const AndroidForm = ({ visible, onClose, onSubmitSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    
    try {
      // First, save to Firestore using the service
      const requestData = {
        name: values.name,
        email: values.email,
        subject: 'RamRoutes Android Access Request',
        message: `Android access request from ${values.name} (${values.email})`,
        processed: false
      };

      const docId = await androidRequestsService.add(requestData); // No admin mode for user forms

      // Then send email via Web3Forms
      const web3formsAccessKey = '5c0685d8-7695-48a3-be3c-1bc7b2a941c6';

      const formData = {
        access_key: web3formsAccessKey,
        name: values.name,
        email: values.email,
        subject: 'RamRoutes Android Access Request',
        message: `Hello RamRoutes Team,

I would like to request access to the RamRoutes Android app.

Name: ${values.name}
Gmail Address: ${values.email}

Please send me the download instructions.

Thank you!`,
        from_name: values.name,
        reply_to: values.email,
        // Optional: specify recipient email
        to: 'gosaadmakhal@gmail.com,jseibel25@cornellcollege.edu,smankarious26@cornellcollege.edu,josieseibel@gmail.com'
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        message.success('Request submitted successfully! Your request has been saved and you will receive download instructions via email within 24 hours.');
        form.resetFields();
        if (onSubmitSuccess) onSubmitSuccess();
        onClose();
      } else {
        // Email failed but Firestore succeeded
        message.success('Your request has been saved successfully! We have your information and will contact you within 24 hours with download instructions.');
        form.resetFields();
        if (onSubmitSuccess) onSubmitSuccess();
        onClose();
      }
    } catch (error) {
      console.error('Request submission failed:', error);
      
      // Show error message and provide fallback
      message.error('Unable to submit your request at this time. Please try again or contact us directly at gosaadmakhal@gmail.com');
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
