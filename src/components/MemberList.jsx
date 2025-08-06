import React, { useEffect } from 'react';
import '../styles/MemberList.css';
import { useModal } from '../contexts/ModalContext';

const MemberList = ({ members, selectedItems, onCheckboxChange }) => {
  // Reset selected items when members list changes (due to filtering or pagination)
  useEffect(() => {
    // This will clear selected items that are no longer in the current view
    const validSelectedItems = selectedItems.filter(id => 
      members.some(member => member.id === id)
    );
    
    if (validSelectedItems.length !== selectedItems.length) {
      // Update parent component's state with only valid selections
      const invalidItems = selectedItems.filter(id => !validSelectedItems.includes(id));
      invalidItems.forEach(id => onCheckboxChange(id));
    }
  }, [members, selectedItems, onCheckboxChange]);
  const { openModal } = useModal();
  
  const handleViewDetails = (id) => {
    const member = members.find(m => m.id === id);
    if (member) {
      openModal(member);
    }
  };

  return (
    <div className="member-list">
      <table>
        <thead>
          <tr>
            <th className="checkbox-column">
              <input 
                type="checkbox" 
                onChange={(e) => {
                  if (e.target.checked) {
                    onCheckboxChange(members.map(member => member.id));
                  } else {
                    onCheckboxChange([]);
                  }
                }}
                checked={selectedItems.length === members.length && members.length > 0}
              />
            </th>
            <th className="id-column">No</th>
            <th>소득적격</th>
            <th>개인전문</th>
            <th>상태</th>
            <th>신청일시</th>
            <th className="actions-column">액션</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="checkbox-column">
                <input 
                  type="checkbox" 
                  checked={selectedItems.includes(member.id)}
                  onChange={() => onCheckboxChange(member.id)}
                />
              </td>
              <td className="id-column">{member.id}</td>
              <td>{member.type}</td>
              <td>{member.professionalType}</td>
              <td>
                <div className={`status-badge ${member.status === '승인대기' ? 'waiting' : member.status === '승인' ? 'approved' : 'rejected'}`}>
                  {member.status}
                </div>
              </td>
              <td>{member.date}</td>
              <td className="actions-column">
                <button 
                  className="view-button" 
                  onClick={() => handleViewDetails(member.id)}
                >
                  보기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;