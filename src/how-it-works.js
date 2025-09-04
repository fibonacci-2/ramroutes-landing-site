import React from 'react';
import { Layout, Row, Col, Typography, Image, Button } from 'antd';
import { motion } from 'framer-motion';
import { colors, PRIMARY_COLOR, SECONDARY_COLOR } from './config/colors';
import Header from './components/Header';

// Import placeholder images - you'll need to replace these with actual screenshots
import registerImage from './images/joining-new.PNG';  // Replace with register screenshot
import unlockImage from './images/app_2.png';    // Replace with unlock screenshot
import engageImage from './images/app_3.png';    // Replace with engage screenshot

const { Title, Paragraph } = Typography;

function HowItWorks() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout.Content>
        <div style={{ backgroundColor: 'white', minHeight: '100vh', padding: '50px 20px' }}>
          <Row justify='center'>
            <Col xs={24} sm={20} md={16} lg={14} xl={12}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Row justify='center' style={{ marginBottom: '60px' }}>
              <Title level={1} style={{ color: SECONDARY_COLOR, textAlign: 'center' }}>
                How RamRoutes Works
              </Title>
              <Paragraph style={{ fontSize: '18px', textAlign: 'center', color: '#666' }}>
                Get started with RamRoutes in three simple steps and discover your campus like never before!
              </Paragraph>
            </Row>
          </motion.div>

          {/* Step 1: Register */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} align='middle' style={{ marginBottom: '80px' }}>
              <Col xs={24} md={12}>
                <div style={{ 
                  backgroundColor: '#f0f8ff', 
                  padding: '40px', 
                  borderRadius: '15px',
                  border: '2px solid ' + SECONDARY_COLOR
                }}>
                  <div style={{ 
                    backgroundColor: SECONDARY_COLOR, 
                    color: 'white', 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '20px'
                  }}>
                    1
                  </div>
                                    <Title level={3} style={{ color: SECONDARY_COLOR, marginBottom: '15px' }}>
                    Step 1: Sign Up with Cornell Email
                  </Title>
                  <Paragraph style={{ fontSize: '16px', color: '#333' }}>
                    Sign up using your Cornell email address to verify your student status. This ensures you're part of the authentic Cornell community experience.
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
                      borderRadius: '15px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }}
                    preview={false}
                  />
                </Row>
              </Col>
            </Row>
          </motion.div>

          {/* Step 2: Unlock Buildings */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} align='middle' style={{ marginBottom: '80px' }}>
              <Col xs={24} md={12} order={{ xs: 2, md: 1 }}>
                <Row justify='center'>
                  <Image 
                    src={unlockImage} 
                    alt="Unlock Campus Buildings"
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto',
                      borderRadius: '15px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }}
                    preview={false}
                  />
                </Row>
              </Col>
              <Col xs={24} md={12} order={{ xs: 1, md: 2 }}>
                <div style={{ 
                  backgroundColor: '#f6ffed', 
                  padding: '40px', 
                  borderRadius: '15px',
                  border: '2px solid ' + SECONDARY_COLOR
                }}>
                  <div style={{ 
                    backgroundColor: SECONDARY_COLOR, 
                    color: 'white', 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '20px'
                  }}>
                    2
                  </div>
                                    <Title level={3} style={{ color: SECONDARY_COLOR, marginBottom: '15px' }}>
                    Step 2: Explore & Unlock Buildings
                  </Title>
                  <Paragraph style={{ fontSize: '16px', color: '#333' }}>
                    Explore campus buildings and unlock new locations as you discover them. Each building you visit adds to your campus exploration journey and reveals hidden gems around Cornell.
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </motion.div>

          {/* Step 3: Engage with Community */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} align='middle' style={{ marginBottom: '60px' }}>
              <Col xs={24} md={12}>
                <div style={{ 
                  backgroundColor: '#f9f0ff', 
                  padding: '40px', 
                  borderRadius: '15px',
                  border: '2px solid ' + SECONDARY_COLOR
                }}>
                  <div style={{ 
                    backgroundColor: SECONDARY_COLOR, 
                    color: 'white', 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '20px'
                  }}>
                    3
                  </div>
                                    <Title level={3} style={{ color: SECONDARY_COLOR, marginBottom: '15px' }}>
                    Step 3: Share with the Community
                  </Title>
                  <Paragraph style={{ fontSize: '16px', color: '#333' }}>
                    Connect with fellow Cornell students and stay updated on campus events. Discover events happening around you, and build meaningful connections within the Cornell community.
                  </Paragraph>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <Row justify='center'>
                  <Image 
                    src={engageImage} 
                    alt="Engage with Community Events"
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto',
                      borderRadius: '15px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }}
                    preview={false}
                  />
                </Row>
              </Col>
            </Row>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
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
              </div>
            </Row>
          </motion.div>
            </Col>
          </Row>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default HowItWorks;
