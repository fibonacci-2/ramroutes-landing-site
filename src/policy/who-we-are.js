import { Typography, Row, Col, Form, Input, Button, message } from 'antd'
import { useState } from 'react'
import { colors, PRIMARY_COLOR } from '../config/colors'
import { teamApplicationsService } from '../config/firestoreService'

const { TextArea } = Input

function WhoWeAre() {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (values) => {
        setLoading(true)
        try {
            // First, save to Firestore using the service
            const applicationData = {
                name: values.name,
                email: values.email,
                role: values.role,
                message: values.message,
                processed: false
            };

            const docId = await teamApplicationsService.add(applicationData); // No admin mode for user forms

            // Then send email via Web3Forms
            const web3formsAccessKey = '5c0685d8-7695-48a3-be3c-1bc7b2a941c6';

            const formData = {
                access_key: web3formsAccessKey,
                name: values.name,
                email: values.email,
                subject: `RamRoutes Team Application - ${values.role}`,
                message: `Hi RamRoutes Team,

I'm interested in joining your team and contributing to your mission of transforming campus life.

Name: ${values.name}
Email: ${values.email}
Role/Contribution: ${values.role}

Message:
${values.message}

Looking forward to hearing from you!

Best regards,
${values.name}`,
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

            if (result.success) {
                message.success('Thank you! Your application has been saved and sent successfully. We\'ll get back to you soon!');
                form.resetFields();
            } else {
                // Email failed but Firestore succeeded
                message.success('Thank you! Your application has been saved successfully. We have your information and will get back to you soon!');
                form.resetFields();
            }
            
        } catch (error) {
            console.error('Error sending application:', error);
            message.error('Sorry, there was an error saving your application. Please try again or email us directly at gosaadmakhal@gmail.com');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Typography component='div' style={{'height': '100vh', 'overflow': 'auto'}}>
            <Row type='flex' justify='center' style={{'margin': '20px'}}>
                <Col span={20}>
                    <Typography.Title level={2}>
                        WHO WE ARE
                    </Typography.Title>

                    <Typography.Paragraph style={{'fontStyle': 'italic', 'color': 'gray'}}>
                        Last updated: September 1, 2025
                    </Typography.Paragraph>

                    <Typography.Title level={3}>
                        Our Story
                    </Typography.Title>

                    <Typography.Paragraph>
                        RamRoutes was born from the shared vision of two recent Cornell College graduates who recognized a common challenge across college campuses: student disconnection from their physical environment. During our time at Cornell College, we observed that many students, despite spending four years on campus, never fully explored or engaged with the rich history, hidden gems, and unique spaces that make each campus special.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        As recent graduates ourselves, we experienced firsthand how easy it is to fall into routine patterns, walking the same paths to class, eating at the same dining hall, and studying in the same spots. We realized that this limited exploration meant missing out on countless opportunities for discovery, community building, and creating memorable college experiences.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        This realization sparked the idea for RamRoutes: what if we could gamify campus exploration? What if discovering new places, learning campus history, and connecting with fellow students could be as engaging as playing your favorite mobile game? We set out to create an application that would encourage students to step outside their comfort zones and truly discover the magic of their campus community.
                    </Typography.Paragraph>

                    <Typography.Title level={3}>
                        Our Mission
                    </Typography.Title>

                    <Typography.Paragraph>
                        <strong>To transform campus life by making exploration fun, social, and rewarding.</strong>
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        We believe that every college campus has untold stories, hidden treasures, and incredible spaces waiting to be discovered. Our mission is to bridge the gap between students and their campus environment through innovative, location-based gaming that encourages:
                    </Typography.Paragraph>

                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • <strong>Active Exploration:</strong> Moving beyond familiar routes to discover new places and experiences
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • <strong>Community Building:</strong> Creating opportunities for students to connect with peers through shared adventures
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • <strong>Campus Appreciation:</strong> Fostering deeper connections and pride in one's educational environment
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • <strong>Memorable Experiences:</strong> Turning everyday campus navigation into exciting discoveries and achievements
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Title level={3}>
                        Our Vision
                    </Typography.Title>

                    <Typography.Paragraph>
                        <strong>A world where every student feels deeply connected to their campus community and has explored every corner of their educational home.</strong>
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        We envision RamRoutes becoming the catalyst that transforms how students interact with their campus environment. We see a future where:
                    </Typography.Paragraph>

                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • Students graduate having fully explored and appreciated their campus, not just attended classes there
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Campus exploration becomes a shared social experience that brings students together
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Universities can better engage students with their facilities, history, and community resources
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • The concept of "campus life" extends beyond academics to include adventure, discovery, and genuine connection
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Paragraph>
                        We believe that when students are more engaged with their physical campus, they become more invested in their entire college experience, leading to stronger school spirit, better retention rates, and more meaningful educational journeys.
                    </Typography.Paragraph>

                    <Typography.Title level={3}>
                        Join Our Team
                    </Typography.Title>

                    <Typography.Paragraph>
                        <strong>Are you passionate about transforming campus life and creating meaningful student experiences?</strong>
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        We're looking for driven, creative individuals who share our vision of making campus exploration engaging and fun. Whether you're a developer, designer, marketer, student affairs professional, or someone with fresh ideas about improving student life, we'd love to hear from you.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        <strong>We're particularly interested in:</strong>
                    </Typography.Paragraph>

                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • Software developers with mobile app/game engine experience (e.g., CSharp, Unity, Javascript)
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • UX/UI designers passionate about gamification
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Marketing professionals who understand student audiences
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Creative Writing and Content Creation enthusiasts
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Anyone with innovative ideas for enhancing student engagement
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Title level={4} style={{'marginTop': '40px'}}>
                        Get In Touch
                    </Typography.Title>

                    <Typography.Paragraph>
                        Ready to help us revolutionize campus life? Send us a message and tell us how you'd like to contribute to our mission.
                    </Typography.Paragraph>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        style={{'marginTop': '30px', 'maxWidth': '600px'}}
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
                            name="role"
                            label="How would you like to contribute?"
                            rules={[{ required: true, message: 'Please tell us your area of interest' }]}
                        >
                            <Input placeholder="e.g., Software Development, Design, Marketing, Campus Partnerships..." />
                        </Form.Item>

                        <Form.Item
                            name="message"
                            label="Tell us about yourself and your vision"
                            rules={[{ required: true, message: 'Please share your thoughts with us' }]}
                        >
                            <TextArea 
                                rows={4} 
                                placeholder="Tell us about your background, why you're interested in RamRoutes, and any ideas you have for improving student campus engagement..."
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                loading={loading}
                                size="large"
                                style={{'backgroundColor': PRIMARY_COLOR, 'borderColor': PRIMARY_COLOR}}
                            >
                                {loading ? 'Sending...' : '� Send Application'}
                            </Button>
                        </Form.Item>
                    </Form>

                    <Typography.Paragraph style={{'marginTop': '30px', 'color': 'gray', 'fontSize': '14px'}}>
                        <strong>You can also reach us directly at:</strong><br />
                        <a href='mailto:gosaadmakhal@gmail.com' style={{'color': PRIMARY_COLOR}}>gosaadmakhal@gmail.com</a><br />
                        <a href='mailto:josieseibel@gmail.com' style={{'color': PRIMARY_COLOR}}>josieseibel@gmail.com</a>
                    </Typography.Paragraph>

                </Col>
            </Row>
        </Typography>
    )
}

export default WhoWeAre
