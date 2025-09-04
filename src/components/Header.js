import React, { useState, useContext } from 'react'
import { Layout, Row, Col, Image, Typography, Button, Menu, Drawer, Affix } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Context } from '../store/Context'
import { SECONDARY_COLOR } from '../config/colors'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const { state } = useContext(Context)
    const [drawerVisible, setDrawerVisible] = useState(false)
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate('/')
    }

    return (
        <>
            <Affix offsetTop={0}>
                <Layout.Header style={{ background: 'white', height: '70px' }}>
                    <Row justify='center' align='middle' style={{ backgroundColor: 'white', height: '100%' }}>
                        <Row justify='space-between' align='middle' style={{ maxWidth: '2000px', width: '100%', height: '100%', backgroundColor: 'white', padding: '0 50px' }}>
                            <Col style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
                                <Row justify='center' align='middle'>
                                    <Col>
                                        <Image height={30} width={30} preview={false} src={state.appLogo} style={{ padding: '2px' }} />
                                    </Col>
                                    <Col>
                                        <Typography.Title level={3} style={{ color: 'black', marginLeft: '10px', margin: 0 }}>
                                            {state.appName}
                                        </Typography.Title>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                {/* Desktop Menu - Hidden on mobile */}
                                <Row gutter={32} align='middle' style={{ display: 'none' }} className="desktop-menu">
                                    <Col>
                                        <a href={state.appURL + '/how-it-works'} rel="noopener noreferrer">
                                            <Typography.Text style={{ fontSize: '16px', color: SECONDARY_COLOR, fontWeight: '500' }}>
                                                How It Works
                                            </Typography.Text>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href={state.appURL + '/who-we-are'} rel="noopener noreferrer">
                                            <Typography.Text style={{ fontSize: '16px', color: SECONDARY_COLOR, fontWeight: '500' }}>
                                                Our Story
                                            </Typography.Text>
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href={state.appURL + '/policy/privacy'} rel="noopener noreferrer">
                                            <Typography.Text style={{ fontSize: '16px', color: SECONDARY_COLOR, fontWeight: '500' }}>
                                                Privacy Policy
                                            </Typography.Text>
                                        </a>
                                    </Col>
                                </Row>

                                {/* Mobile Menu Button - Shown on mobile */}
                                <Button 
                                    type="text" 
                                    icon={<MenuOutlined style={{ fontSize: '18px', color: SECONDARY_COLOR }} />} 
                                    onClick={() => setDrawerVisible(true)}
                                    style={{ display: 'none' }}
                                    className="mobile-menu-button"
                                />
                            </Col>
                        </Row>
                    </Row>
                </Layout.Header>
            </Affix>

            {/* Mobile Drawer Menu */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
                width={300}
            >
                <Menu mode="vertical" style={{ border: 'none' }}>
                    <Menu.Item key="how-it-works">
                        <a href={state.appURL + '/how-it-works'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{ fontSize: '16px', color: SECONDARY_COLOR, fontWeight: '500' }}>
                                How It Works
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="our-story">
                        <a href={state.appURL + '/who-we-are'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{ fontSize: '16px', color: SECONDARY_COLOR, fontWeight: '500' }}>
                                Our Story
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                    <Menu.Item key="privacy">
                        <a href={state.appURL + '/policy/privacy'} rel="noopener noreferrer" onClick={() => setDrawerVisible(false)}>
                            <Typography.Text style={{ fontSize: '16px', color: SECONDARY_COLOR, fontWeight: '500' }}>
                                Privacy Policy
                            </Typography.Text>
                        </a>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    )
}

export default Header
