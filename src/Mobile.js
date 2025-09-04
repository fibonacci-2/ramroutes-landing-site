import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Button,
    Menu,
    Drawer,
} from 'antd'

import {
    DownloadOutlined,
    MenuOutlined,
} from '@ant-design/icons'

import {
    motion,
} from 'framer-motion'

import {
    useContext,
    useState,
    useEffect,
} from 'react'

import { Context } from './store/Context'
import { SECONDARY_COLOR } from './config/colors'
import AndroidForm from './components/AndroidForm'
import ContactForm from './components/ContactForm'

// props: sectionItem, backgroundColor
function SectionItem(props) {
    return (
        <Row justify='center' align='top' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '70px 20px'}}>
            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Row justify='center'>
                    <Typography.Title level={2}>
                        {props.sectionItem.title}
                    </Typography.Title>
                </Row>
                <Row justify='center'>
                    <Typography style={{'fontSize': '16px'}}>
                        {props.sectionItem.text}
                    </Typography>
                </Row>
            </motion.div>

            <motion.div 
                    initial={{x: -300, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Image preview={false} src={props.sectionItem.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 'maxWidth': '600px'}}></Image>
            </motion.div>
        </Row>
    )
}

// props: sectionList
function SectionList(props) {
    return (
        <>
        {
            props.sectionList.map((sectionItem, index) => {
                return (
                    <SectionItem sectionItem={sectionItem} backgroundColor={index % 2 === 0? 'white': null} />    
                )

            })
        }
        </>
    )
}

function Mobile() {
    const {state, dispatch} = useContext(Context)
    const [androidFormVisible, setAndroidFormVisible] = useState(false)
    const [hasSubmittedForm, setHasSubmittedForm] = useState(false)
    const [drawerVisible, setDrawerVisible] = useState(false)

    // Handle successful form submission
    const handleFormSubmitted = () => {
        setHasSubmittedForm(true)
    }

    return (
        <>
        <Layout style={{'overflow-x': 'hidden'}}>
            <Affix offsetTop={0}>
                <Layout.Header style={{'background': 'white', 'width': '100%'}}>
                    <Row justify='space-between' align='middle' style={{'backgroundColor': 'white', 'width': '100%', 'height': '100%', 'padding': '0 20px'}}>
                        <Col>
                            <Row align='middle'>
                                <Col>
                                    <Image width={30} height={30} preview={false} src={state.appLogo} style={{'padding':'2px'}}></Image>
                                </Col>
                                <Col>
                                    <Typography.Title level={3} style={{'color': 'black', 'marginLeft': '10px', 'margin': 0}}>{state.appName}</Typography.Title>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Button 
                                type="text" 
                                icon={<MenuOutlined style={{fontSize: '18px', color: SECONDARY_COLOR}} />} 
                                onClick={() => setDrawerVisible(true)}
                                size="large"
                            />
                        </Col>
                    </Row>
                </Layout.Header>
            </Affix>

            <Layout.Content>
                {/* cover headline */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '800px', 'paddingTop': '50px', 'paddingLeft': '20px', 'paddingRight': '20px'}}>
                    <Row justify='center'>
                        <Typography.Title level={2}>
                            {state.coverTitle}
                        </Typography.Title>
                    </Row>

                    <Row justify='center' style={{'padding': '20px 20px'}}>
                        <Typography style={{'fontSize': '16px', 'padding': '20px'}}>
                            {state.coverText}
                        </Typography>
                    </Row>

                    <Row justify='space-around' style={{ 'marginBottom': '30px'}}>
                        {
                            state.appleStoreLink &&
                            <Col style={{'width': '45%', 'paddingRight': '50px'}}>
                                <Row justify='center' style={{ marginBottom: '10px' }}>
                                    <Typography.Title level={4} style={{ color: SECONDARY_COLOR, margin: 0 }}>
                                        iOS
                                    </Typography.Title>
                                </Row>
                                <Row justify='center' style={{ marginBottom: '10px' }}>
                                    <Typography.Text style={{ fontSize: '14px', textAlign: 'center' }}>
                                        RamRoutes is now available for iOS!
                                    </Typography.Text>
                                </Row>
                                <Row justify='center'>
                                <a href={state.appleStoreLink} target='_blank' rel="noopener noreferrer">
                                    <Image height={50} width={150} preview={false} src={state.appleStoreBadge}></Image>
                                </a>
                                </Row>
                            </Col>
                            
                        }
                        <Col style={{'width': '45%', 'paddingRight': '50px'}}>
                            <Row justify='center' style={{ marginBottom: '10px' }}>
                                <Typography.Title level={4} style={{ color: SECONDARY_COLOR, margin: 0 }}>
                                    Android
                                </Typography.Title>
                            </Row>
                            <Row justify='center' style={{ marginBottom: '10px' }}>
                                <Typography.Text style={{ fontSize: '14px', textAlign: 'center' }}>
                                    Request access to the Android app
                                </Typography.Text>
                            </Row>
                            <Row justify='center'>
                                <Button 
                                    type="primary" 
                                    size="large"
                                    onClick={() => setAndroidFormVisible(true)}
                                    style={{ 
                                        backgroundColor: SECONDARY_COLOR, 
                                        borderColor: SECONDARY_COLOR, 
                                        fontSize: '12px',
                                        width: '150px',
                                        height: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    Request Android Access
                                </Button>
                            </Row>
                        </Col>
                        
                    </Row>

                    <Row justify='center'>
                        <div style={{ margin: '20px' }}>
                            <Image 
                                preview={false} 
                                src={state.coverImage} 
                                style={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </div>
                    </Row>
                </Row>

                {/* features section */}
                <Row justify='center' align='middle' style={{'backgroundColor': '#f8f9fa', 'minHeight': '500px', 'padding': '70px 20px'}}>
                    <Row justify='center' style={{'maxWidth': '800px', 'width': '100%'}}>
                        <Col span={24}>
                            <Row justify='center' style={{ marginBottom: '50px' }}>
                                <Typography.Title level={2} style={{ color: SECONDARY_COLOR, textAlign: 'center' }}>
                                    {state.featuresSection.title}
                                </Typography.Title>
                            </Row>
                            
                            <Row gutter={[16, 32]} justify='center'>
                                {state.featuresSection.features.map((feature, index) => (
                                    <Col xs={24} sm={8} key={index}>
                                        <motion.div
                                            initial={{y: 50, opacity: 0}} 
                                            whileInView={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.1 + index * 0.1}}} 
                                            viewport={{once: true}}
                                        >
                                            <Row justify='center' style={{ marginBottom: '15px' }}>
                                                <div style={{ 
                                                    width: '60px', 
                                                    height: '60px', 
                                                    borderRadius: '50%', 
                                                    backgroundColor: feature.backgroundColor === '#e6f3ff' ? SECONDARY_COLOR : 
                                                                    feature.backgroundColor === '#f0f8e6' ? '#52c41a' : '#722ed1', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center' 
                                                }}>
                                                    <Typography.Text style={{ fontSize: '24px', color: 'white' }}>{feature.icon}</Typography.Text>
                                                </div>
                                            </Row>
                                            <Row justify='center' style={{ marginBottom: '10px' }}>
                                                <Typography.Title level={4} style={{ textAlign: 'center', margin: 0 }}>
                                                    {feature.title}
                                                </Typography.Title>
                                            </Row>
                                            <Row justify='center'>
                                                <Typography.Text style={{ fontSize: '14px', textAlign: 'center', color: '#666' }}>
                                                    {feature.description}
                                                </Typography.Text>
                                            </Row>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Row>

                {/* endorsement list */}
               

                {/* section list */}
                {/* <SectionList sectionList={state.sectionList} /> */}

                {/* policies */}
                {/* <Row justify='center' align='top' style={{'backgroundColor': 'white', 'height': '450px', 'padding': '70px 20px'}}> */}
{/*                 
                    <Row justify='center' align='top' style={{'width': '100%'}}>
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' danger onClick={() => { window.scrollTo(0, 0)}}>Download</Button>
                    </Row> */}
{/* 
                    <Row justify='space-around' align='top' style={{'width': '100%','marginTop': '100px'}}>
                        <Col>
                            <Row justify='start' align='middle'>
                                 <a href={state.appURL + '/how-it-works'} rel="noopener noreferrer">
                                <Typography.Title level={5} style={{'margin': '0px','marginTop': '20px'}}>
                                    How It Works
                                </Typography.Title>
                            </a>
                            </Row>
                            <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                                 <a href={state.appURL + '/who-we-are'} rel="noopener noreferrer">
                                <Typography.Title level={5} style={{'margin': '0px'}}>
                                    Our Story
                                </Typography.Title>
                            </a>
                            </Row>
                            <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                            <a href={state.appURL + '/policy/privacy'} rel="noopener noreferrer">
                                <Typography.Title level={5} style={{'margin': '0px'}}>
                                    Privacy Policy
                                </Typography.Title>
                            </a>
                            </Row>
                            <Row justify='start' align='middle' style={{'marginTop': '20px'}}>
                            <a href={state.appURL + '/policy/terms-of-use'} rel="noopener noreferrer">
                                <Typography.Title level={5} style={{'margin': '0px'}}>
                                    Terms of Use
                                </Typography.Title>
                            </a>
                            </Row>
                        </Col>
                    </Row> */}

                {/* </Row> */}
                <Row justify='center' align='top' style={{'backgroundColor': 'white', 'height': '450px', 'padding': '70px 20px'}}>
                    <Col span={24}>
                        <Row justify='center' style={{ marginBottom: '40px' }}>
                                        <ContactForm title="Get in Touch with RamRoutes Support" isMobile={true} />
                        </Row>
                    </Col>
                </Row>

               

            </Layout.Content>

            {/*
            <Layout.Footer>


            </Layout.Footer>
            */}

            </Layout>

            <AndroidForm 
                visible={androidFormVisible} 
                onClose={() => setAndroidFormVisible(false)} 
                onSubmitSuccess={handleFormSubmitted}
            />

            {/* Mobile Drawer Menu */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
                width={280}
            >
                <Menu mode="vertical" style={{border: 'none'}}>
                    <Menu.Item key="how-it-works" style={{height: 'auto', padding: '15px 0'}}>
                        <a href={state.appURL + '/how-it-works'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                How It Works
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="our-story" style={{height: 'auto', padding: '15px 0'}}>
                        <a href={state.appURL + '/who-we-are'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                Our Story
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="privacy" style={{height: 'auto', padding: '15px 0'}}>
                        <a href={state.appURL + '/policy/privacy'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                Privacy Policy
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                </Menu>
            </Drawer>
            
        </>
    )
}

export default Mobile
