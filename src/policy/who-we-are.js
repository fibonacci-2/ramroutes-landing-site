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

                {/* <Typography.Title level={3}>
                    Our Vision
                </Typography.Title>

                <Typography.Paragraph>
                    At RamRoutes, we believe that every corner of Cornell College holds a story worth discovering. Our campus exploration game transforms the traditional campus tour into an interactive adventure that encourages students, visitors, and community members to engage with our beautiful historic campus in a completely new way.
                </Typography.Paragraph> */}

                <Typography.Title level={3}>
                    How It All Started
                </Typography.Title>

                <Typography.Paragraph>
RamRoutes was born from the shared vision of two recent Cornell College graduates who recognized a common challenge across college campuses: student disconnection from their physical environment. During our time at Cornell College, we observed that many students, despite spending four years on campus, never fully explored or engaged with the rich history, hidden gems, and unique spaces that make our campus special.
                </Typography.Paragraph>

                <Typography.Paragraph>
In our final year at college, we decided to use both our skill sets to collaborate on our capstone project. We managed to create a pixel art platformer video game. One that gamifies education about two prominent topics of climate change: waste management and community disaster relief. Two significant problems to tackle that specifically require community engagement. Ramroutes: Trials of Venus was the predecessor for RamRoutes: discover the magic of campus. What better way to engage a community than creating a space of play and updated information directly from all parts of the community? In this space, players can enjoy an intriguing love story then find out what’s happening at specific buildings on campus like club events, Greek life, holidays, and so much more. 
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
                    Looking Forward
                </Typography.Title>

                <Typography.Paragraph>
                    We're constantly working to improve RamRoutes based on player feedback and campus developments. Our roadmap includes new locations, enhanced challenges, seasonal events, and features that will keep the exploration experience fresh and engaging.
                </Typography.Paragraph>

              
                <Typography.Title level={3}>
                    Join Our Community
                </Typography.Title>

                <Typography.Paragraph>
                    RamRoutes is built by students, for students, with input from the entire Cornell College community. We're always excited to hear from players, whether you have feedback, ideas for new features, or want to get involved in development.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If you're passionate about campus life, mobile technology, game design, or just want to contribute to something that brings our community together, we'd love to hear from you. Fill in the form below to get in touch!
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
