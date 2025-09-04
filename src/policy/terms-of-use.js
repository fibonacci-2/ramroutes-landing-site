import React, { useState } from 'react'
import { Typography, Row, Col, Form, Input, Select, message, Layout } from 'antd'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

const TermsOfUse = () => {
    const navigate = useNavigate()

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header />
            <Layout.Content style={{ padding: '20px 0' }}>
                <Typography component='div' style={{ overflow: 'auto' }}>
                    <Row type='flex' justify='center' style={{ margin: '20px' }}>
                        <Col span={20}>
                    <Typography.Title level={2}>
                        TERMS OF USE / SUPPORT
                    </Typography.Title>

                    <Typography.Paragraph style={{'fontStyle': 'italic', 'color': 'gray'}}>
                        Last updated: September 1, 2025
                    </Typography.Paragraph>

                    <Typography.Title level={3}>
                        About the Game
                    </Typography.Title>

                    <Typography.Paragraph>
                        RamRoutes is an interactive campus exploration game designed to help Cornell College students and visitors discover hidden gems and learn about our beautiful campus. The game uses your device's GPS to unlock new areas and challenges as you physically visit different locations around Cornell College.
                    </Typography.Paragraph>

                    <Typography.Title level={3}>
                        Getting Started
                    </Typography.Title>

                    <Typography.Paragraph>
                        <strong>System Requirements:</strong>
                    </Typography.Paragraph>
                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • Android device with GPS capability
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Location services enabled
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Internet connection for initial setup and updates
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Physical presence on or near Cornell College campus
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Title level={3}>
                        How to Play
                    </Typography.Title>

                    <Typography.Paragraph>
                        1. <strong>Enable Location Services:</strong> Make sure your device's GPS is turned on and grant location permissions to RamRoutes.
                    </Typography.Paragraph>
                    
                    <Typography.Paragraph>
                        2. <strong>Start Exploring:</strong> Walk around Cornell College campus to different buildings and outdoor areas.
                    </Typography.Paragraph>
                    
                    <Typography.Paragraph>
                        3. <strong>Unlock Locations:</strong> When you get close to a significant campus location, it will automatically unlock in your game.
                    </Typography.Paragraph>
                    
                    <Typography.Paragraph>
                        4. <strong>Complete Challenges:</strong> Each location may have unique challenges, trivia, or information to discover.
                    </Typography.Paragraph>
                    
                    <Typography.Paragraph>
                        5. <strong>Collect Progress:</strong> Track your exploration progress and see how many campus locations you've discovered.
                    </Typography.Paragraph>

                    <Typography.Title level={3}>
                        Troubleshooting
                    </Typography.Title>

                    <Typography.Paragraph>
                        <strong>App not detecting my location:</strong>
                    </Typography.Paragraph>
                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • Ensure location services are enabled for RamRoutes in your device settings
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Check that you have a clear GPS signal (may not work well indoors)
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Make sure you're physically on or very close to Cornell College campus
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Try restarting the app or your device
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Paragraph>
                        <strong>Locations not unlocking:</strong>
                    </Typography.Paragraph>
                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • Make sure you're close enough to the building or landmark (within ~50 meters)
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Some locations may require you to be at specific entrance points
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Wait a few moments at each location for GPS to stabilize
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Paragraph>
                        <strong>App crashes or performance issues:</strong>
                    </Typography.Paragraph>
                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • Make sure you have the latest version of the app
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Restart your device and try again
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Ensure you have adequate storage space on your device
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Close other apps to free up memory
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Title level={3}>
                        Terms of Service
                    </Typography.Title>

                    <Typography.Paragraph>
                        By using RamRoutes, you agree to:
                    </Typography.Paragraph>
                    <Typography component='div' style={{'marginLeft': '20px'}}>
                        <Typography.Paragraph>
                            • Use the app responsibly and follow all campus rules and regulations
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Respect private areas and do not trespass while playing
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Be aware of your surroundings and prioritize safety over gameplay
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Not attempt to hack, modify, or reverse engineer the app
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            • Report any bugs or issues to help improve the experience for everyone
                        </Typography.Paragraph>
                    </Typography>

                    <Typography.Title level={3}>
                        Privacy & Data
                    </Typography.Title>

                    <Typography.Paragraph>
                        RamRoutes does not collect, store, or share any personal data. Your location is processed entirely on your device and is never transmitted to our servers. For complete details, please see our <strong>Privacy Policy</strong>.
                    </Typography.Paragraph>

                    <Typography.Title level={3}>
                        Contact & Support
                    </Typography.Title>

                    <Typography.Paragraph>
                        Have a question, found a bug, or want to get involved with RamRoutes? We'd love to hear from you!
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        We typically respond to support requests within 24-48 hours during the academic year. Please include as much detail as possible about any technical issues you're experiencing, including your device model and Android version.
                    </Typography.Paragraph>

                    <ContactForm title="Get in Touch with RamRoutes Support" />

                </Col>
            </Row>
                </Typography>
            </Layout.Content>
        </Layout>
    )
}

export default TermsOfUse
