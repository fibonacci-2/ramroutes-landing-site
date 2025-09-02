import React, { useState, useEffect } from 'react';
import { Typography, Table, Button, Space, message, Modal, Tabs, Input, Switch } from 'antd';
import { CopyOutlined, DeleteOutlined, ReloadOutlined, LockOutlined } from '@ant-design/icons';
import { androidRequestsService, teamApplicationsService, firestoreService } from '../config/firestoreService';

const AdminRequests = ({ isPage = false, onStatsUpdate = null }) => {
  const [androidRequests, setAndroidRequests] = useState([]);
  const [teamRequests, setTeamRequests] = useState([]);
  const [visible, setVisible] = useState(isPage); // If it's a page, always show the content
  const [isAuthenticated, setIsAuthenticated] = useState(isPage); // If it's a page, assume authenticated
  const [password, setPassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Admin password (in production, this should be in environment variables)
  const ADMIN_PASSWORD = 'ramroutes2025';

  const loadRequests = async () => {
    setLoading(true);
    try {
      const [androidFirestoreData, teamFirestoreData] = await Promise.all([
        androidRequestsService.getAll(true), // Admin mode enabled
        teamApplicationsService.getAll(true)  // Admin mode enabled
      ]);
      
      setAndroidRequests(androidFirestoreData);
      setTeamRequests(teamFirestoreData);

      if (!isPage) {
        message.success('Data loaded successfully');
      }
      
      // Notify parent component of stats update
      if (onStatsUpdate) {
        onStatsUpdate();
      }
    } catch (error) {
      console.error('Error loading from Firestore:', error);
      message.error('Failed to load data from Firestore. Please check your connection.');
      setAndroidRequests([]);
      setTeamRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadRequests();
    }
    
    // Check if user is already authenticated in this session (only for modal mode)
    if (!isPage) {
      const authStatus = sessionStorage.getItem('adminAuthenticated');
      if (authStatus === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, [isAuthenticated, isPage]);

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email);
    message.success('Email copied to clipboard!');
  };

  const copyAllEmails = (requests) => {
    const uniqueEmails = [...new Set(requests.map(req => req.email))];
    const emails = uniqueEmails.join(', ');
    navigator.clipboard.writeText(emails);
    message.success(`${uniqueEmails.length} unique emails copied to clipboard!`);
  };

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordPrompt(false);
      setPassword('');
      sessionStorage.setItem('adminAuthenticated', 'true');
      message.success('Access granted!');
    } else {
      message.error('Incorrect password');
      setPassword('');
    }
  };

  const handleAdminPanelClick = () => {
    if (isAuthenticated) {
      setVisible(true);
    } else {
      setShowPasswordPrompt(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
    setVisible(false);
    message.info('Logged out');
  };

  const deleteRequest = async (id, type) => {
    try {
      if (type === 'android') {
        await androidRequestsService.delete(id, true); // Admin mode enabled
        const updatedRequests = androidRequests.filter(req => req.id !== id);
        setAndroidRequests(updatedRequests);
      } else {
        await teamApplicationsService.delete(id, true); // Admin mode enabled
        const updatedRequests = teamRequests.filter(req => req.id !== id);
        setTeamRequests(updatedRequests);
      }
      message.success('Request deleted successfully');
      
      // Update stats if callback provided
      if (onStatsUpdate) {
        onStatsUpdate();
      }
    } catch (error) {
      console.error('Error deleting request:', error);
      message.error('Error deleting request');
    }
  };

  const markAsProcessed = async (id, type, processed) => {
    try {
      if (type === 'android') {
        await androidRequestsService.markProcessed(id, processed, true); // Admin mode enabled
        const updated = androidRequests.map(req => 
          req.id === id ? { ...req, processed } : req
        );
        setAndroidRequests(updated);
      } else {
        await teamApplicationsService.markProcessed(id, processed, true); // Admin mode enabled
        const updated = teamRequests.map(req => 
          req.id === id ? { ...req, processed } : req
        );
        setTeamRequests(updated);
      }
      
      message.success(`Request marked as ${processed ? 'processed' : 'unprocessed'}`);
      
      // Update stats if callback provided
      if (onStatsUpdate) {
        onStatsUpdate();
      }
    } catch (error) {
      console.error('Error updating request:', error);
      message.error('Error updating request');
    }
  };

  const getTotalCount = () => {
    return androidRequests.length + teamRequests.length;
  };

  const createAndroidColumns = () => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email) => (
        <Space>
          <span>{email}</span>
          <Button 
            icon={<CopyOutlined />} 
            size="small" 
            onClick={() => copyEmail(email)}
          />
        </Space>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp) => {
        if (!timestamp) return 'N/A';
        const date = new Date(timestamp);
        return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
      },
    },
    {
      title: 'Status',
      dataIndex: 'processed',
      key: 'processed',
      render: (processed, record) => (
        <Switch
          checked={processed || false}
          onChange={(checked) => markAsProcessed(record.id, 'android', checked)}
          checkedChildren="Done"
          unCheckedChildren="Pending"
        />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button 
          icon={<DeleteOutlined />} 
          size="small" 
          danger
          onClick={() => deleteRequest(record.id, 'android')}
        />
      ),
    },
  ];

  const createTeamColumns = () => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email) => (
        <Space>
          <span>{email}</span>
          <Button 
            icon={<CopyOutlined />} 
            size="small" 
            onClick={() => copyEmail(email)}
          />
        </Space>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      render: (message) => (
        <div style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {message ? message.substring(0, 50) + '...' : 'N/A'}
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp) => {
        if (!timestamp) return 'N/A';
        const date = new Date(timestamp);
        return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
      },
    },
    {
      title: 'Status',
      dataIndex: 'processed',
      key: 'processed',
      render: (processed, record) => (
        <Switch
          checked={processed || false}
          onChange={(checked) => markAsProcessed(record.id, 'team', checked)}
          checkedChildren="Done"
          unCheckedChildren="Pending"
        />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button 
          icon={<DeleteOutlined />} 
          size="small" 
          danger
          onClick={() => deleteRequest(record.id, 'team')}
        />
      ),
    },
  ];

  // Render the admin content (tables and actions)
  const renderAdminContent = () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space wrap>
        <Button 
          icon={<CopyOutlined />} 
          onClick={() => copyAllEmails(androidRequests)}
        >
          Copy Android Emails ({androidRequests.length})
        </Button>
        <Button 
          icon={<CopyOutlined />} 
          onClick={() => copyAllEmails(teamRequests)}
        >
          Copy Team Emails ({teamRequests.length})
        </Button>
        <Button 
          icon={<ReloadOutlined />} 
          loading={loading} 
          onClick={() => loadRequests()}
        >
          Refresh
        </Button>
      </Space>
      
      <Tabs defaultActiveKey="android" items={[
        {
          key: 'android',
          label: `Android Requests (${androidRequests.length})`,
          children: (
            <Table 
              columns={createAndroidColumns()} 
              dataSource={androidRequests} 
              rowKey="id" 
              pagination={{ pageSize: 10 }}
              size="small"
              locale={{
                emptyText: 'No Android requests found.'
              }}
            />
          )
        },
        {
          key: 'team',
          label: `Team Applications (${teamRequests.length})`,
          children: (
            <Table 
              columns={createTeamColumns()} 
              dataSource={teamRequests} 
              rowKey="id" 
              pagination={{ pageSize: 10 }}
              size="small"
              locale={{
                emptyText: 'No team applications found.'
              }}
            />
          )
        }
      ]} />
    </Space>
  );

  // If it's used as a page component, return the content directly
  if (isPage) {
    return renderAdminContent();
  }

  // Otherwise, render as floating button with modal
  return (
    <>
      <Button 
        type="primary" 
        onClick={handleAdminPanelClick}
        style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}
        icon={isAuthenticated ? undefined : <LockOutlined />}
      >
        {isAuthenticated ? `Admin Panel (${getTotalCount()})` : 'Admin'}
      </Button>

      {/* Password Prompt Modal */}
      <Modal
        title="Admin Authentication"
        open={showPasswordPrompt}
        onCancel={() => {setShowPasswordPrompt(false); setPassword('');}}
        onOk={handlePasswordSubmit}
        okText="Login"
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>Please enter the admin password:</Typography.Text>
          <Input.Password
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onPressEnter={handlePasswordSubmit}
            autoFocus
          />
        </Space>
      </Modal>

      <Modal
        title="Admin Panel - Firestore Requests"
        open={visible && isAuthenticated}
        onCancel={() => setVisible(false)}
        width={900}
        footer={[
          <Button key="logout" onClick={logout}>
            Logout
          </Button>,
          <Button key="close" onClick={() => setVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {renderAdminContent()}
      </Modal>
    </>
  );
};

export default AdminRequests;
