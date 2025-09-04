import React, { useState } from 'react'
import { Typography, Form, Input, Select, Button, Row, Col, message } from 'antd'
import { contactFormService } from '../config/formService'
import { SECONDARY_COLOR } from '../config/colors'

const { TextArea } = Input
const { Option } = Select

const ContactForm = ({ title = "Get in Touch with RamRoutes" }) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const onFinish = async (values) => {
        setLoading(true)
        
        try {
            // Save form data to Firestore using the service
            const docId = await contactFormService.add({
                ...values,
                source: 'RamRoutes Landing Site'
            })

            console.log('Contact form submitted with ID: ', docId)
            message.success('Thank you for your message! We\'ll get back to you soon.')
            form.resetFields()
        } catch (error) {
            console.error('Error submitting contact form:', error)
            message.error('Unable to send your message at this time. Please try again or refresh the page and try once more.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '40px', 
            borderRadius: '8px', 
            border: '1px solid #e8e8e8',
            marginTop: '40px'
        }}>
            <Typography.Title level={3} style={{ marginBottom: '20px', color: SECONDARY_COLOR }}>
                {title}
            </Typography.Title>

            <Typography.Paragraph style={{ marginBottom: 24, color: '#666' }}>
                Whether you've found a bug, have a feature suggestion, need technical support, or want to contribute to RamRoutes, we're here to help!
            </Typography.Paragraph>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                style={{ maxWidth: '600px' }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Your Name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input placeholder="Enter your full name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email Address"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email address' }
                            ]}
                        >
                            <Input placeholder="your.email@example.com" />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    name="inquiry_type"
                    label="Type of Inquiry"
                    rules={[{ required: true, message: 'Please select inquiry type' }]}
                >
                    <Select placeholder="Choose the type of your inquiry">
                        <Option value="Bug Report">Bug Report</Option>
                        <Option value="Feature Request">Feature Request</Option>
                        <Option value="Technical Support">Technical Support</Option>
                        <Option value="General Feedback">General Feedback</Option>
                        <Option value="Partnership/Collaboration">Partnership/Collaboration</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="message"
                    label="Your Message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                >
                    <TextArea 
                        rows={4}
                        placeholder="Tell us more about your inquiry. Be as detailed as possible to help us assist you better."
                        maxLength={1000}
                        showCount
                    />
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                                We typically respond within 1-2 business days
                            </Typography.Text>
                        </Col>
                        <Col>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                style={{ backgroundColor: SECONDARY_COLOR, borderColor: SECONDARY_COLOR }}
                            >
                                Send Message
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ContactForm
