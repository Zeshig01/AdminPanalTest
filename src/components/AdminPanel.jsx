import React, { useState, useEffect } from 'react';
import '../styles/AdminPanel.css';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';
import Pagination from './Pagination';

const AdminPanel = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [sortOrder, setSortOrder] = useState('신청일시순');
  const [approvalFilter, setApprovalFilter] = useState('승인여부 전체');
  
  // Mock data for demonstration
  const [allMembers, setAllMembers] = useState([
    { id: 1, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-10 09:00:00' },
    { id: 2, type: '소득적격', professionalType: '개인전문', status: '승인', date: '2023-01-11 10:15:00' },
    { id: 3, type: '소득적격', professionalType: '법인전문', status: '거절', date: '2023-01-12 11:30:00' },
    { id: 4, type: '전문투자자', professionalType: '개인전문', status: '승인대기', date: '2023-01-13 12:45:00' },
    { id: 5, type: '전문투자자', professionalType: '법인전문', status: '승인', date: '2023-01-14 13:00:00' },
    { id: 6, type: '전문투자자', professionalType: '개인전문', status: '거절', date: '2023-01-15 14:15:00' },
    { id: 7, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-16 15:30:00' },
    { id: 8, type: '소득적격', professionalType: '법인전문', status: '승인', date: '2023-01-17 16:45:00' },
    { id: 9, type: '소득적격', professionalType: '개인전문', status: '거절', date: '2023-01-18 17:00:00' },
    { id: 10, type: '전문투자자', professionalType: '법인전문', status: '승인대기', date: '2023-01-19 18:15:00' },
    { id: 11, type: '전문투자자', professionalType: '개인전문', status: '승인', date: '2023-01-20 19:30:00' },
    { id: 12, type: '전문투자자', professionalType: '법인전문', status: '거절', date: '2023-01-21 20:45:00' },
    { id: 13, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-22 21:00:00' },
    { id: 14, type: '소득적격', professionalType: '법인전문', status: '승인', date: '2023-01-23 22:15:00' },
    { id: 15, type: '소득적격', professionalType: '개인전문', status: '거절', date: '2023-01-24 23:30:00' },
    { id: 16, type: '전문투자자', professionalType: '법인전문', status: '승인대기', date: '2023-01-25 00:45:00' },
    { id: 17, type: '전문투자자', professionalType: '개인전문', status: '승인', date: '2023-01-26 01:00:00' },
    { id: 18, type: '전문투자자', professionalType: '법인전문', status: '거절', date: '2023-01-27 02:15:00' },
    { id: 19, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-28 03:30:00' },
    { id: 20, type: '소득적격', professionalType: '법인전문', status: '승인', date: '2023-01-29 04:45:00' },
  ]);
  
  // Initialize members data
  useEffect(() => {
    setAllMembers([
      { id: 1, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-10 09:00:00' },
      { id: 2, type: '소득적격', professionalType: '개인전문', status: '승인', date: '2023-01-11 10:15:00' },
      { id: 3, type: '소득적격', professionalType: '법인전문', status: '거절', date: '2023-01-12 11:30:00' },
      { id: 4, type: '전문투자자', professionalType: '개인전문', status: '승인대기', date: '2023-01-13 12:45:00' },
      { id: 5, type: '전문투자자', professionalType: '법인전문', status: '승인', date: '2023-01-14 13:00:00' },
      { id: 6, type: '전문투자자', professionalType: '개인전문', status: '거절', date: '2023-01-15 14:15:00' },
      { id: 7, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-16 15:30:00' },
      { id: 8, type: '소득적격', professionalType: '법인전문', status: '승인', date: '2023-01-17 16:45:00' },
      { id: 9, type: '소득적격', professionalType: '개인전문', status: '거절', date: '2023-01-18 17:00:00' },
      { id: 10, type: '전문투자자', professionalType: '법인전문', status: '승인대기', date: '2023-01-19 18:15:00' },
      { id: 11, type: '전문투자자', professionalType: '개인전문', status: '승인', date: '2023-01-20 19:30:00' },
      { id: 12, type: '전문투자자', professionalType: '법인전문', status: '거절', date: '2023-01-21 20:45:00' },
      { id: 13, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-22 21:00:00' },
      { id: 14, type: '소득적격', professionalType: '법인전문', status: '승인', date: '2023-01-23 22:15:00' },
      { id: 15, type: '소득적격', professionalType: '개인전문', status: '거절', date: '2023-01-24 23:30:00' },
      { id: 16, type: '전문투자자', professionalType: '법인전문', status: '승인대기', date: '2023-01-25 00:45:00' },
      { id: 17, type: '전문투자자', professionalType: '개인전문', status: '승인', date: '2023-01-26 01:00:00' },
      { id: 18, type: '전문투자자', professionalType: '법인전문', status: '거절', date: '2023-01-27 02:15:00' },
      { id: 19, type: '소득적격', professionalType: '개인전문', status: '승인대기', date: '2023-01-28 03:30:00' },
      { id: 20, type: '소득적격', professionalType: '법인전문', status: '승인', date: '2023-01-29 04:45:00' },
    ]);
  }, []);
  
  // Filter and sort members based on current filters
  const getFilteredMembers = () => {
    let filtered = [...allMembers];
    
    // Apply approval filter
    if (approvalFilter !== '승인여부 전체') {
      filtered = filtered.filter(member => member.status === approvalFilter);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      if (sortOrder === '신청일시순') {
        return new Date(a.date) - new Date(b.date); // Oldest first
      } else if (sortOrder === '이름순') {
        return a.id - b.id; // Sort by ID as a proxy for name
      } else if (sortOrder === '상태순') {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });
    
    return filtered;
  };
  
  const filteredMembers = getFilteredMembers();
  const totalItems = filteredMembers.length;
  
  // Get current page members
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleApprovalFilterChange = (value) => {
    setApprovalFilter(value);
    setCurrentPage(1); // Reset to first page when filter changes
    setSelectedItems([]); // Clear selected items when filter changes
  };

  const handleSortOrderChange = (value) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page when sort order changes
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleSaveChanges = () => {
    // Implement save functionality
    console.log('Saving changes for selected items:', selectedItems);
  };

  return (
    <div className="admin-panel">
      <div className="panel-header">
        <div className="header-title">
          <h2>신청 목록</h2>
          <span className="header-subtitle">
            (총 {totalItems}명 | 승인대기 {filteredMembers.filter(m => m.status === '승인대기').length}건)
          </span>
        </div>
        
        <div className="header-filters">
          <div className="dropdown">
            <select 
              value={approvalFilter} 
              onChange={(e) => handleApprovalFilterChange(e.target.value)}
            >
              <option value="승인여부 전체">승인여부 전체</option>
              <option value="승인대기">승인대기</option>
              <option value="승인">승인</option>
              <option value="거절">거절</option>
            </select>
            <div className="dropdown-arrow"></div>
          </div>
          
          <div className="dropdown">
            <select 
              value={sortOrder} 
              onChange={(e) => handleSortOrderChange(e.target.value)}
            >
              <option value="신청일시순">신청일시순</option>
              <option value="이름순">이름순</option>
              <option value="상태순">상태순</option>
            </select>
            <div className="dropdown-arrow"></div>
          </div>
          
          <div className="dropdown">
            <select 
              value={itemsPerPage} 
              onChange={(e) => handleItemsPerPageChange(e.target.value)}
            >
              <option value="50">50개씩 보기</option>
              <option value="100">100개씩 보기</option>
              <option value="200">200개씩 보기</option>
            </select>
            <div className="dropdown-arrow"></div>
          </div>
        </div>
      </div>
      
      <div className="scroll-container">
        <div className="scroll-track">
          <div className="scroll-thumb"></div>
        </div>
      </div>
      
      <hr className="divider" />
      
      <div className="action-bar">
        <span className="selected-count">선택한 {selectedItems.length}건</span>
        
        <div className="action-buttons">
          <div className="dropdown">
            <select 
              onChange={(e) => {
                if (e.target.value && selectedItems.length > 0) {
                  // Update the status of selected members
                  const updatedMembers = [...allMembers];
                  selectedItems.forEach(id => {
                    const memberIndex = updatedMembers.findIndex(m => m.id === id);
                    if (memberIndex !== -1) {
                      updatedMembers[memberIndex] = {
                        ...updatedMembers[memberIndex],
                        status: e.target.value
                      };
                    }
                  });
                  
                  // Update the allMembers state with the modified array
                  setAllMembers(updatedMembers);
                  console.log('Updated status to', e.target.value, 'for', selectedItems.length, 'members');
                  
                  // Clear selected items after action
                  setSelectedItems([]);
                  
                  // Reset the dropdown
                  e.target.value = '';
                }
              }}
              value=""
            >
              <option value="">승인상태 변경</option>
              <option value="승인대기">승인대기</option>
              <option value="승인">승인</option>
              <option value="거절">거절</option>
            </select>
            <div className="dropdown-arrow"></div>
          </div>
          
          <button className="save-button" onClick={handleSaveChanges}>저장</button>
        </div>
      </div>
      
      <MemberList 
        members={currentMembers} 
        selectedItems={selectedItems} 
        onCheckboxChange={handleCheckboxChange} 
      />
      
      <Pagination 
        currentPage={currentPage} 
        totalItems={totalItems} 
        itemsPerPage={itemsPerPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default AdminPanel;