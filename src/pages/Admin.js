import React, { useState, useEffect } from 'react';
import { Typography, Layout, Button, Space, message, Card, Statistic, Row, Col, Input, Modal } from 'antd';
import { ArrowLeftOutlined, UserOutlined, TeamOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import AdminRequests from '../components/AdminRequests';
import { firestoreService } from '../config/firestoreService';
import { SECONDARY_COLOR } from '../config/colors';

const { Header, Content } = Layout;
const { Title } = Typography;

const Admin = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  
  // Admin password (should match AdminRequests component)
  const ADMIN_PASSWORD = 'ramroutes2025';

  useEffect(() => {
    // Check if user is already authenticated in this session
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      setShowPasswordPrompt(false);
      loadStats();
    }
  }, []);

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordPrompt(false);
      setPassword('');
      sessionStorage.setItem('adminAuthenticated', 'true');
      message.success('Access granted!');
      loadStats();
    } else {
      message.error('Incorrect password');
      setPassword('');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
    message.info('Logged out');
    navigate('/');
  };

  const loadStats = async () => {
    setLoading(true);
    try {
      const statsData = await firestoreService.getStats();
      setStats(statsData);
    } catch (error) {
      console.error('Error loading stats:', error);
      message.error('Failed to load statistics');
    } finally {
      setLoading(false);
    }
  };

  // Show password prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card style={{ width: 400, textAlign: 'center' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <LockOutlined style={{ fontSize: '48px', color: SECONDARY_COLOR }} />
            <Title level={3}>Admin Access Required</Title>
            <Typography.Text type="secondary">
              Please enter the admin password to access the admin panel.
            </Typography.Text>
            
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input.Password
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onPressEnter={handlePasswordSubmit}
                size="large"
              />
              <Button 
                type="primary" 
                size="large" 
                block 
                onClick={handlePasswordSubmit}
                loading={loading}
              >
                Access Admin Panel
              </Button>
              <Button 
                type="text" 
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </Space>
          </Space>
        </Card>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header style={{ 
        backgroundColor: '#fff', 
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Space>
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/')}
            size="large"
          >
            Back to Home
          </Button>
          <Title level={3} style={{ margin: 0, color: SECONDARY_COLOR }}>
            RamRoutes Admin Panel
          </Title>
        </Space>
        
        <Button onClick={logout} type="text">
          Logout
        </Button>
      </Header>

      <Content style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Statistics Cards */}
        {stats && !loading && (
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Android Requests"
                  value={stats.androidRequests.total}
                  prefix={<UserOutlined />}
                  suffix={
                    <Space>
                      <span style={{ fontSize: '14px', color: '#52c41a' }}>
                        {stats.androidRequests.processed} done
                      </span>
                      <span style={{ fontSize: '14px', color: '#faad14' }}>
                        {stats.androidRequests.pending} pending
                      </span>
                    </Space>
                  }
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Team Applications"
                  value={stats.teamApplications.total}
                  prefix={<TeamOutlined />}
                  suffix={
                    <Space>
                      <span style={{ fontSize: '14px', color: '#52c41a' }}>
                        {stats.teamApplications.processed} done
                      </span>
                      <span style={{ fontSize: '14px', color: '#faad14' }}>
                        {stats.teamApplications.pending} pending
                      </span>
                    </Space>
                  }
                />
              </Card>
            </Col>
          </Row>
        )}

        {/* Admin Requests Component */}
        <Card title="Manage Requests" style={{ width: '100%' }}>
          <AdminRequests isPage={true} onStatsUpdate={loadStats} />
        </Card>
      </Content>
    </Layout>
  );
};

export default Admin;
