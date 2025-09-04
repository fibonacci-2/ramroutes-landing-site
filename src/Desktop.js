import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Button,
    Tooltip,
    Popover,
    Drawer,
    Menu,
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

// props: image
function FloatImageCol(props) {
    return (
        <Col span={12}>
            <Row justify='center'>
            <motion.div 
                    initial={{y: 300, opacity: 0}} 
                    whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Image height={400} preview={false} src={props.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></Image>
            </motion.div>
            </Row>
        </Col>
    )
}

// props title, text
function FloatTextCol(props) {
    return (
        <Col span={12}>
            <motion.div 
                    initial={{y: 300, opacity: 0}} 
                    whileInView={{y: 0, opacity: 1, transition: {type: 'spring', bounce: 0, duration: 1}}} 
                    viewport={{once: true}}>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography.Title>
                        {props.title}
                    </Typography.Title>
                </Row>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography style={{'fontSize': '16px'}}>
                        {props.text}
                    </Typography>
                </Row>
            </motion.div>
        </Col>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheLeft(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                <FloatImageCol image={props.sectionItem.image} />
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
            </Row>
        </Row>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheRight(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
                <FloatImageCol image={props.sectionItem.image} />
            </Row>
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
                    index % 2 === 0?
                        <SectionItemImageOnTheLeft sectionItem={sectionItem} backgroundColor={'white'} />
                        :
                        <SectionItemImageOnTheRight sectionItem={sectionItem} backgroundColor={null} />
                )

            })
        }
        </>
    )
}

function Desktop() {
    const {state, dispatch} = useContext(Context)
    const [androidFormVisible, setAndroidFormVisible] = useState(false)
    const [hasSubmittedForm, setHasSubmittedForm] = useState(false)
    const [drawerVisible, setDrawerVisible] = useState(false)

    // Handle successful form submission
    const handleFormSubmitted = () => {
        setHasSubmittedForm(true)
    }

    return (
        <Layout style={{'minWidth': '1000px'}}>
            <Affix offsetTop={0}>
                <Layout.Header style={{'background': 'white', 'height': '70px'}}>
                    <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '100%'}}>
                        <Row justify='space-between' align='middle' style={{'maxWidth': '2000px', 'width': '100%', 'height': '100%', 'backgroundColor': 'white', 'padding': '0 50px'}}>
                            <Col style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                                <Row justify='center' align='middle'>
                                    <Col>
                                        <Image height={30} width={30} preview={false} src={state.appLogo} style={{'padding': '2px'}}></Image>
                                    </Col>
                                    <Col>
                                        <Typography.Title level={3} style={{'color': 'black', 'marginLeft': '10px', 'margin': 0}}>{state.appName}</Typography.Title>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                {/* Desktop Menu - Hidden on mobile */}
                                <Row gutter={32} align='middle' style={{display: 'none'}} className="desktop-menu">
                                    <Col>
                                        <a href={state.appURL + '/how-it-works'} rel="noopener noreferrer">
                                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                                How It Works
                                            </Typography.Text>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href={state.appURL + '/who-we-are'} rel="noopener noreferrer">
                                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                                Our Story
                                            </Typography.Text>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href={state.appURL + '/policy/privacy'} rel="noopener noreferrer">
                                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                                Privacy Policy
                                            </Typography.Text>
                                        </a>
                                    </Col>
                                </Row>

                                {/* Mobile Menu Button - Shown on mobile */}
                                <Button 
                                    type="text" 
                                    icon={<MenuOutlined />} 
                                    onClick={() => setDrawerVisible(true)}
                                    style={{display: 'none'}}
                                    className="mobile-menu-button"
                                />
                            </Col>
                        </Row>
                    </Row>
                </Layout.Header>
            </Affix>

            <Layout.Content>
                {/* cover headline */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '1000px'}}>
                <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                    <Col style={{'width': '40%'}}>
                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography.Title>
                                {state.coverTitle}
                            </Typography.Title>
                        </Row>

                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography style={{'fontSize': '16px'}}>
                                {state.coverText}
                            </Typography>
                        </Row>

                        <Row justify='center' style={{'marginTop': '50px'}}>
                            {
                                state.appleStoreLink &&
                                <Col style={{'width': '200px', 'marginRight': '20px'}}>
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
                                        <Image height={60} width={180} preview={false} src={state.appleStoreBadge}></Image>
                                    </a>
                                    </Row>
                                </Col>
                            }
                            <Col style={{'width': '200px', 'marginRight': '20px'}}>
                                <Row justify='center' style={{ marginBottom: '10px' }}>
                                    <Typography.Title level={4} style={{ color: '#52c41a', margin: 0 }}>
                                        Android
                                    </Typography.Title>
                                </Row>
                                <Row justify='center' style={{ marginBottom: '10px' }}>
                                    <Typography.Text style={{ fontSize: '14px', textAlign: 'center' }}>
                                        You need to request access to the Android app
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
                                            fontSize: '14px',
                                            width: '180px',
                                            height: '60px',
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
                    </Col>

                    <Col style={{'width': '60%'}}>
                        <Row justify='center'>
                        <Image width={800} height={700} preview={false} src={state.coverImage}></Image>
                        </Row>
                    </Col>
                </Row>
                </Row>

                {/* features section */}
                <Row justify='center' align='middle' style={{'backgroundColor': '#f8f9fa', 'minHeight': '600px', 'padding': '100px'}}>
                    <Row justify='center' style={{'maxWidth': '1200px', 'width': '100%'}}>
                        <Col span={24}>
                            <Row justify='center' style={{ marginBottom: '80px' }}>
                                <Typography.Title level={1} style={{ color: SECONDARY_COLOR, textAlign: 'center' }}>
                                    {state.featuresSection.title}
                                </Typography.Title>
                            </Row>
                            
                            <Row gutter={[48, 48]} justify='center'>
                                {state.featuresSection.features.map((feature, index) => (
                                    <Col xs={24} sm={8} key={index}>
                                        <motion.div
                                            initial={{y: 50, opacity: 0}} 
                                            whileInView={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.1 + index * 0.1}}} 
                                            viewport={{once: true}}
                                        >
                                            <Row justify='center' style={{ marginBottom: '20px' }}>
                                                <div style={{ 
                                                    width: '80px', 
                                                    height: '80px', 
                                                    borderRadius: '50%', 
                                                    backgroundColor: feature.backgroundColor === '#e6f3ff' ? SECONDARY_COLOR : 
                                                                    feature.backgroundColor === '#f0f8e6' ? '#52c41a' : '#722ed1', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center' 
                                                }}>
                                                    <Typography.Text style={{ fontSize: '32px', color: 'white' }}>{feature.icon}</Typography.Text>
                                                </div>
                                            </Row>
                                            <Row justify='center' style={{ marginBottom: '15px' }}>
                                                <Typography.Title level={3} style={{ textAlign: 'center', margin: 0 }}>
                                                    {feature.title}
                                                </Typography.Title>
                                            </Row>
                                            <Row justify='center'>
                                                <Typography.Text style={{ fontSize: '16px', textAlign: 'center', color: '#666' }}>
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
                <SectionList sectionList={state.sectionList} />


                {/* policies */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '500px', 'padding': '100px'}}>
                <Row justify='left' align='top' style={{'maxWidth': '2000px', 'width': '100%'}}>
                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                            <Col>
                                <Image height={30} width={30} preview={false} src={state.appLogo} style={{'filter': "grayscale(1)", 'opacity': '0.7'}}></Image>
                            </Col>
                            <Col>
                                <Typography.Title level={3} style={{'color': 'gray', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                            </Col>
                        </Row>
                        {/* <Row justify='start' align='middle' style={{'marginTop': '125px'}}>
                            <Col>
                                <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' danger onClick={() => { window.scrollTo(0, 0)}}>Download</Button>
                            </Col>

                        </Row> */}
                    </Col>

                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/how-it-works'} rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                How It Works
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/who-we-are'} rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                Our Story
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/privacy'} rel="noopener noreferrer">
                            <Typography.Title  level={5}>
                                Privacy Policy
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/terms-of-use'} rel="noopener noreferrer">
                            <Typography.Title  level={5}>
                                Terms of Use
                            </Typography.Title>
                        </a>
                        </Row>
                    </Col>

                    <Col style={{'padding': '0px 20px'}}>
                        {/* <Row justify='start' align='middle' style={{'margin': '20px 0'}}>
                            <Typography>
                                Need help?
                            </Typography>
                        </Row> */}
                        {/* <Row justify='start' align='middle' style={{'cursor': 'pointer'}}>
                            <Popover placement='top' title='Contact Us' content={

                                <a href={state.discordLink} target='_blank' rel="noopener noreferrer">
                                    <Row justify='start' align='middle'>
                                        <Col>
                                            <Image height={40} preview={false} src={state.discordImage}></Image>
                                        </Col>
                                        <Col style={{'marginLeft': '5px'}}>
                                            <Typography>Join our Discord</Typography>  
                                        </Col>
                                    </Row>

                                </a>
                            } trigger='click'>
                                <Typography.Title level={5}>
                                    Contact Us
                                </Typography.Title>
                            </Popover>
                        </Row> */}
                    </Col>
                </Row>                
                </Row>

                <Row justify="center" align='middle' style={{'backgroundColor': 'white', 'padding': '0 0 40px 0'}}>
                    <Col>
                        <Typography.Text type="secondary" style={{'fontSize': 12}}>
                            {state.appName} © {new Date().getFullYear()}
                        </Typography.Text>
                    </Col>
                </Row>

            </Layout.Content>

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
                width={300}
            >
                <Menu mode="vertical" style={{border: 'none'}}>
                    <Menu.Item key="how-it-works">
                        <a href={state.appURL + '/how-it-works'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                How It Works
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="our-story">
                        <a href={state.appURL + '/who-we-are'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                Our Story
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="privacy">
                        <a href={state.appURL + '/policy/privacy'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{'fontSize': '16px', 'color': SECONDARY_COLOR, 'fontWeight': '500'}}>
                                Privacy Policy
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                </Menu>
            </Drawer>

        </Layout>
    )
}

export default Desktop
