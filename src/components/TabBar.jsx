  import React, { useState } from 'react';
import '../styles/TabBar.css';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('members');
  
  // Korean tab labels to match the image
  const koreanLabels = {
    dashboard: '기본정보 관리',
    members: '투자상품 관리',
    applications: '결제신청 조회',
    reports: '입출금내역 조회',
    settings: '투자내역 조회',
    sms: 'SMS 관리',
    security: '보안설정 관리',
    customer: '1:1문의내역 조회'
  };

  const tabs = [
    { id: 'dashboard', label: '기본정보 관리' },
    { id: 'members', label: '투자상품 관리' },
    { id: 'applications', label: '결제신청 조회' },
    { id: 'reports', label: '입출금내역 조회' },
    { id: 'settings', label: '투자내역 조회' },
    { id: 'sms', label: 'SMS 관리' },
    { id: 'security', label: '보안설정 관리' },
    { id: 'customer', label: '1:1문의내역 조회' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-bar">
      <div className="tab-container">
        <h2 className="tab-title">회원상세 <span className="required">*필수항목</span></h2>
        <div className="tabs-wrapper">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabBar;