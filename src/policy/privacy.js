import { Typography, Row, Col, Layout } from 'antd'
import Header from '../components/Header'

function Privacy() {
    console.log('Rendering Privacy Policy Page')
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout.Content style={{ padding: '20px 0' }}>
        <Typography component='div' style={{ overflow: 'auto' }}>
            <Row type='flex' justify='center' style={{ margin: '20px' }}>
                <Col span={20}>
                <Typography.Title level={2}>
                    PRIVACY POLICY
                </Typography.Title>

                <Typography.Paragraph style={{'fontStyle': 'italic', 'color': 'gray'}}>
                    Last updated: September 1, 2025
                </Typography.Paragraph>

                <Typography.Paragraph>
                    RamRoutes does not collect, store, or share any personal data from users. We are committed to protecting your privacy while providing you with an engaging campus exploration experience. No personal information, user accounts, or identifying data are required or collected by our application.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Location Services
                </Typography.Title>

                <Typography.Paragraph>
                    RamRoutes requires access to your device's GPS location services to provide core gameplay functionality. Specifically, we use your real-time location data to:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '20px'}}>
                    <Typography.Paragraph>
                        • Determine when you are physically present at specific campus buildings and locations
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Unlock new areas, challenges, and content as you explore different parts of the campus
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Provide location-based gameplay mechanics and rewards
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Ensure gameplay integrity by verifying physical presence at required locations
                    </Typography.Paragraph>
                </Typography>

                <Typography.Paragraph>
                    <strong>Important:</strong> Your location data is processed entirely on your device in real-time and is never stored, cached, transmitted to our servers, or shared with any third parties. The app only uses your current location to determine proximity to campus landmarks and immediately discards this information once processed.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Internet Access
                </Typography.Title>

                <Typography.Paragraph>
                    RamRoutes requires internet connectivity to function properly. We use internet access for:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '20px'}}>
                    <Typography.Paragraph>
                        • Downloading game content, maps, and location data for campus buildings
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Receiving updates about new campus locations and features
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Ensuring you have the latest version of campus information and gameplay content
                    </Typography.Paragraph>
                </Typography>

                <Typography.Paragraph>
                    No personal data is transmitted during these communications - only anonymous requests for game content and location information are made.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Third-Party Services
                </Typography.Title>

                <Typography.Paragraph>
                    RamRoutes does not integrate with or use any third-party analytics, advertising, or data collection services. We do not use tracking pixels, cookies, or any other mechanisms that could collect or share your information with external parties. The app operates independently without relying on third-party services that might compromise your privacy.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Children's Privacy
                </Typography.Title>

                <Typography.Paragraph>
                    RamRoutes is designed to be safe for users of all ages, including children under 13. Since our app does not collect, store, or transmit any personal information whatsoever, there are no privacy concerns related to children's data. Parents can feel confident that their children can enjoy exploring campus through our app without any risk to their privacy or personal information.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We comply with the Children's Online Privacy Protection Act (COPPA) by design, as we simply do not collect any data that would fall under COPPA regulations.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Data Security
                </Typography.Title>

                <Typography.Paragraph>
                    Since RamRoutes does not collect or store any user data, there is no risk of data breaches or unauthorized access to personal information. All location processing happens locally on your device, and no sensitive information ever leaves your device or enters our systems.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Changes
                </Typography.Title>

                <Typography.Paragraph>
                    We may update this privacy policy as needed to reflect changes in our app's functionality or to comply with legal requirements. Any changes will be reflected on this page with an updated date. Since we maintain a no-data-collection policy, any updates will continue to prioritize your privacy and will not introduce data collection practices.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We encourage you to review this policy periodically, though our core commitment to not collecting personal data will remain unchanged.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Contact
                </Typography.Title>

                <Typography.Paragraph>
                    For questions or concerns about our privacy policy, please visit our <a href='/policy/terms-of-use' style={{'color': 'blue'}}>Terms of Use / Support</a> page and use our contact form.
                </Typography.Paragraph>

                </Col>
            </Row>
        </Typography>
      </Layout.Content>
    </Layout>
  )
}

export default Privacy
