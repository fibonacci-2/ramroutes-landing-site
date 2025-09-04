import { Typography, Row, Col, Layout } from 'antd'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

function WhoWeAre() {
    console.log('Rendering Who We Are Page')
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout.Content style={{ padding: '20px 0' }}>
        <Typography component='div' style={{ overflow: 'auto' }}>
            <Row type='flex' justify='center' style={{ margin: '20px' }}>
                <Col span={20}>
                <Typography.Title level={2}>
                    OUR STORY
                </Typography.Title>

                <Typography.Paragraph style={{'fontStyle': 'italic', 'color': 'gray'}}>
                    Last updated: September 1, 2025
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Our Vision
                </Typography.Title>

                <Typography.Paragraph>
                    At RamRoutes, we believe that every corner of Cornell College holds a story worth discovering. Our campus exploration game transforms the traditional campus tour into an interactive adventure that encourages students, visitors, and community members to engage with our beautiful historic campus in a completely new way.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    How It All Started
                </Typography.Title>

                <Typography.Paragraph>
                    RamRoutes was born from a simple observation: many students graduate without fully exploring their own campus. We wanted to change that by creating something that would motivate people to step outside their comfort zones and discover the hidden gems that make Cornell College special.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Our team of student developers and campus enthusiasts came together with a shared passion for both technology and the rich history of Cornell College. We saw an opportunity to blend modern mobile gaming with the timeless appeal of exploration and discovery.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Our Mission
                </Typography.Title>

                <Typography.Paragraph>
                    We're on a mission to:
                </Typography.Paragraph>
                <Typography component='div' style={{'marginLeft': '20px'}}>
                    <Typography.Paragraph>
                        • Help students develop a deeper connection with their campus environment
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Encourage physical activity and outdoor exploration
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Share the fascinating history and stories behind Cornell College's buildings and landmarks
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Create a sense of achievement and discovery that extends beyond the classroom
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                        • Foster community engagement between current students, visitors, and campus alumni
                    </Typography.Paragraph>
                </Typography>

                <Typography.Title level={3}>
                    Why Cornell College?
                </Typography.Title>

                <Typography.Paragraph>
                    Cornell College's campus is uniquely suited for an exploration-based game. With its stunning hilltop location, historic architecture, and compact but diverse layout, every building and outdoor space has character and significance. From the iconic King Chapel to the newest academic facilities, there's always something new to discover.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Our game celebrates both the heritage and the ongoing evolution of Cornell College, helping players appreciate the campus as a living, breathing community that has been home to generations of students and scholars.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Looking Forward
                </Typography.Title>

                <Typography.Paragraph>
                    We're constantly working to improve RamRoutes based on player feedback and campus developments. Our roadmap includes new locations, enhanced challenges, seasonal events, and features that will keep the exploration experience fresh and engaging.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We believe that RamRoutes is more than just a game – it's a tool for building lasting connections between people and place. Whether you're a first-year student just getting oriented or an alumnus revisiting your old stomping grounds, RamRoutes offers a unique way to experience Cornell College.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Join Our Community
                </Typography.Title>

                <Typography.Paragraph>
                    RamRoutes is built by students, for students, with input from the entire Cornell College community. We're always excited to hear from players, whether you have feedback, ideas for new features, or want to get involved in development.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If you're passionate about campus life, mobile technology, game design, or just want to contribute to something that brings our community together, we'd love to hear from you. Visit our <strong>Terms of Use / Support</strong> page to get in touch with our team.
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    Thank You
                </Typography.Title>

                <Typography.Paragraph>
                    To everyone who has played RamRoutes, provided feedback, or supported our mission – thank you. You're helping us create something special that we hope will enhance the Cornell College experience for years to come.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Happy exploring!
                </Typography.Paragraph>

                <Typography.Paragraph style={{'fontStyle': 'italic', 'textAlign': 'right', 'marginTop': '40px'}}>
                    — The RamRoutes Development Team
                </Typography.Paragraph>

                <ContactForm title="Connect with the RamRoutes Team" />

                </Col>
            </Row>
        </Typography>
      </Layout.Content>
    </Layout>
  )
}

export default WhoWeAre
