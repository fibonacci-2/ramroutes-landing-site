import { Typography, Row, Col } from 'antd'

function Terms() {
  return (
    <Typography component='div' style={{'height': '100vh', 'overflow': 'auto'}}>
        <Row type='flex' justify='center' style={{'margin': '20px'}}>
            <Col span={20}>
                <Typography.Title level={2}>
                TERMS OF SERVICE
                </Typography.Title>

                <Typography.Paragraph>
                Last updated: September 1, 2025
                </Typography.Paragraph>

                <Typography.Title level={3}>
                AGREEMENT TO TERMS
                </Typography.Title>

                <Typography.Paragraph>
                These Terms of Service constitute a legally binding agreement between you and RamRoutes ("we", "us", or "our") concerning your use of the RamRoutes mobile application and related services. By using our app, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our app.
                </Typography.Paragraph>

                <Typography.Paragraph>
                We may update these Terms from time to time. We will notify you of any material changes by updating the "Last updated" date. Your continued use of the app after such changes constitutes your acceptance of the new Terms.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                USE OF THE APP
                </Typography.Title>

                <Typography.Paragraph>
                RamRoutes is a carpooling app designed to help college students find and share rides. You may use the app to:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                <Typography.Paragraph>
                    • Find available rides posted by other users
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Post rides you are offering to other users
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Communicate with other users about ride arrangements
                </Typography.Paragraph>
                </Typography>

                <Typography.Title level={3}>
                SAFETY AND LIABILITY
                </Typography.Title>

                <Typography.Paragraph>
                RamRoutes is a platform that connects users for carpooling. We do not provide transportation services ourselves. You understand that:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                <Typography.Paragraph>
                    • All rides are arranged directly between users
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • We are not responsible for the conduct of any user
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • You participate in rides at your own risk
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • We recommend meeting in safe, public locations
                </Typography.Paragraph>
                </Typography>

                <Typography.Title level={3}>
                USER RESPONSIBILITIES
                </Typography.Title>

                <Typography.Paragraph>
                By using RamRoutes, you agree to:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                <Typography.Paragraph>
                    • Provide accurate and truthful information about yourself and your rides
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Be respectful and courteous to other users
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Use the app only for legitimate carpooling purposes
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Not engage in any illegal, harmful, or inappropriate behavior
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Comply with all applicable laws and regulations
                </Typography.Paragraph>
                </Typography>

                <Typography.Title level={3}>
                PROHIBITED ACTIVITIES
                </Typography.Title>

                <Typography.Paragraph>
                You may not use RamRoutes to:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                <Typography.Paragraph>
                    • Post false or misleading information
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Harass, abuse, or harm other users
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Use the app for commercial purposes without permission
                </Typography.Paragraph>

                <Typography.Paragraph>
                    • Violate any applicable laws or regulations
                </Typography.Paragraph>
                </Typography>

                <Typography.Title level={3}>
                ACCOUNT TERMINATION
                </Typography.Title>

                <Typography.Paragraph>
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in behavior that we deem inappropriate or harmful to other users.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                PRIVACY
                </Typography.Title>

                <Typography.Paragraph>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                DISCLAIMER
                </Typography.Title>

                <Typography.Paragraph>
                RamRoutes is provided "as is" without warranties of any kind. We do not guarantee the availability, reliability, or safety of rides arranged through our app. Use of our service is at your own risk.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                LIMITATION OF LIABILITY
                </Typography.Title>

                <Typography.Paragraph>
                To the fullest extent permitted by law, RamRoutes shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our service.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                GOVERNING LAW
                </Typography.Title>

                <Typography.Paragraph>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                CHANGES TO TERMS
                </Typography.Title>

                <Typography.Paragraph>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date at the top of these Terms.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                CONTACT INFORMATION
                </Typography.Title>

                <Typography.Paragraph>
                If you have any questions about these Terms of Service, please contact us through the app or visit our website.
                </Typography.Paragraph>

            </Col>
        </Row>
    </Typography>
  )
}

export default Terms
