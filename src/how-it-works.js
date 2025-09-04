import React, { useContext, useState } from 'react';
import { Layout, Row, Col, Typography, Image, Button, Drawer } from 'antd';
import { SECONDARY_COLOR } from './config/colors';
import Header from './components/Header';
import AndroidForm from './components/AndroidForm';

// Import placeholder images - you'll need to replace these with actual screenshots
import registerImage from './images/landscape/joining-new.png';  // Replace with register screenshot
import unlockImage from './images/landscape/unlock-button.PNG';    // Replace with unlock screenshot
import engageImage from './images/landscape/in-building-view.PNG';    // Replace with engage screenshot
import leaderboard from './images/landscape/leaderboard.png';    // Replace with engage screenshot
import cover from './images/landscape/story.png';    // Replace with engage screenshot
import { Context } from './store/Context';

const { Title, Paragraph } = Typography;

function HowItWorks() {
      const {state, dispatch} = useContext(Context)
      const [androidFormVisible, setAndroidFormVisible] = useState(false)
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout.Content>
        <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '40px 20px' }}>
          <Row justify='center'>
            <Col xs={24} sm={20} md={16} lg={14} xl={12}>
              <Row justify='center' style={{ marginBottom: '60px' }}>
                <Col span={24}>
                  <Image 
                    src={cover} 
                    alt="RamRoutes Cover"
                    style={{ 
                      width: '100%',
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                    }}
                    preview={false}
                  />
                </Col>
              </Row>

          {/* Step 1: Register */}
          <Row gutter={[24, 24]} align='middle' style={{ marginBottom: '40px' }}>
            <Col xs={24} md={12}>
              <div style={{ padding: '20px' }}>
                <Title level={3} style={{ color: SECONDARY_COLOR, marginBottom: '15px' }}>
                  1. Sign Up with Cornell Email
                </Title>
                <Paragraph style={{ fontSize: '16px' }}>
                  Sign up using your Cornell email address to verify your student status. If you have issues signing up, please reach out to us.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <Row justify='center'>
                <Image 
                  src={registerImage} 
                  alt="Register with Cornell Email"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                      borderRadius: '9px',
                        
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                  preview={false}
                />
              </Row>
            </Col>
          </Row>

          {/* Step 2: Unlock Buildings */}
          <Row gutter={[24, 24]} align='middle' style={{ marginBottom: '40px' }}>
            <Col xs={24} md={12}>
              <div style={{ padding: '20px' }}>
                <Title level={3} style={{ color: SECONDARY_COLOR, marginBottom: '15px' }}>
                  2. Explore Campus
                </Title>
                <Paragraph style={{ fontSize: '16px' }}>
                  Explore campus by unlocking buildings. There are two types of unlocking:
                  <br /> • Regular unlock: simply hit the unlock button
                  <br /> • GPS unlock: requires you to be physically near the building (higher rewards!)
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <Row justify='center'>
                <Image 
                  src={unlockImage} 
                  alt="Unlock Campus Buildings"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                      borderRadius: '9px',
                        
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                  preview={false}
                />
              </Row>
            </Col>
          
          </Row>

          {/* Step 3: Events */}
          <Row gutter={[24, 24]} align='middle' style={{ marginBottom: '40px' }}>
            <Col xs={24} md={12}>
              <div style={{ padding: '20px' }}>
                <Title level={3} style={{ color: SECONDARY_COLOR, marginBottom: '15px' }}>
                  3. Engage with Events
                </Title>
                <Paragraph style={{ fontSize: '16px' }}>
                  Once you unlock a building, you will see the events happening at the building and get notified when new events are posted.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <Row justify='center'>
                <Image 
                  src={engageImage} 
                  alt="Engage with Events"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                      borderRadius: '9px',
                        
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                  preview={false}
                />
              </Row>
            </Col>
          </Row>



          {/* Step 3: Engage with Community */}
        
            <Row gutter={[32, 32]} align='middle' style={{ marginBottom: '60px' }}>
               
              <Col xs={24} md={12}>
                                  <Title level={3} style={{ color: SECONDARY_COLOR, marginBottom: '15px' }}>
                    Step 4: Engage with the Community
                  </Title>
                  <Paragraph style={{ fontSize: '16px', color: '#333' }}>
                    Get to see what buildings other rams have unlocked and compete with them on leaderboards. 
                  </Paragraph>
                <Row justify='center'>
                  <Image 
                    src={leaderboard} 
                    alt="Engage with Community Events"
                    style={{ 
                      borderRadius: '9px',
                      
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }}
                    preview={false}
                  />
                </Row>
              </Col>
            </Row>

          {/* Call to Action */}
       
            <Row justify='center'>
              <div style={{ 
                textAlign: 'center', 
                backgroundColor: '#f8f9fa', 
                padding: '50px 40px', 
                borderRadius: '20px',
                border: '1px solid #e8e8e8'
              }}>
                                <Title level={2} style={{ color: SECONDARY_COLOR, marginBottom: '20px' }}>
                  Get Started Today!
                </Title>
                <Paragraph style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
                  Download RamRoutes today and begin your Cornell campus adventure!
                </Paragraph>
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
                                  </div>

            </Row>
            </Col>
          </Row>
        </div>
      </Layout.Content>
      
      <Drawer
        title="Request Android Access"
        placement="right"
        onClose={() => setAndroidFormVisible(false)}
        open={androidFormVisible}
        width={400}
      >
        <AndroidForm />
      </Drawer>
    </Layout>
  );
}

export default HowItWorks;
