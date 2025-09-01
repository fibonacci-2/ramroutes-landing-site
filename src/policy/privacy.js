import { Typography, Row, Col } from 'antd'

function Privacy() {
    console.log('Rendering Privacy Policy Page')
  return (
    <Typography component='div' style={{'height': '100vh', 'overflow': 'auto'}}>
        <Row type='flex' justify='center' style={{'margin': '20px'}}>
            <Col span={20}>
                <Typography.Title level={2}>
                    PRIVACY POLICY
                </Typography.Title>

                <Typography.Paragraph>
                    This app does not collect, store, or share any personal data from users.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Location Services
                </Typography.Title>

                <Typography.Paragraph>
                    The app uses your device's GPS solely to unlock in-game locations based on your real-world position. This data is used in real-time and is not stored, shared, or transmitted to any server.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Third-Party Services
                </Typography.Title>

                <Typography.Paragraph>
                    This app does not use third-party services that collect user information.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Children's Privacy
                </Typography.Title>

                <Typography.Paragraph>
                    This app does not knowingly collect personal information from anyone, including children under the age of 13.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Changes
                </Typography.Title>

                <Typography.Paragraph>
                    We may update this privacy policy as needed. Changes will be reflected on this page.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Contact
                </Typography.Title>

                <Typography.Paragraph>
                    For questions or concerns, please contact us at <a href='mailto:gosaadmakhal@gmail.com' style={{'color': 'blue'}}>gosaadmakhal@gmail.com</a>.
                </Typography.Paragraph>

            </Col>
        </Row>
    </Typography>
  )
}

export default Privacy
