import React, { useState } from 'react';
import '../styles/MemberDetail.css';

const MemberDetail = ({ member, onClose, onStatusChange }) => {
  const [status, setStatus] = useState(member?.status || '승인대기');
  
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };
  
  const handleSave = () => {
    onStatusChange(member.id, status);
    onClose();
  };
  
  if (!member) return null;
  
  return (
    <div className="member-detail-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>회원 상세 정보</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="detail-section">
            <h4>기본 정보</h4>
            <div className="detail-row">
              <div className="detail-label">회원 ID</div>
              <div className="detail-value">{member.id}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">신청일시</div>
              <div className="detail-value">{member.date}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">투자자 유형</div>
              <div className="detail-value">{member.type}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">전문투자자 유형</div>
              <div className="detail-value">{member.professionalType}</div>
            </div>
          </div>
          
          <div className="detail-section">
            <h4>승인 상태 관리</h4>
            <div className="status-buttons">
              <button 
                className={`status-button waiting ${status === '승인대기' ? 'active' : ''}`}
                onClick={() => handleStatusChange('승인대기')}
              >
                승인대기
              </button>
              <button 
                className={`status-button approved ${status === '승인' ? 'active' : ''}`}
                onClick={() => handleStatusChange('승인')}
              >
                승인
              </button>
              <button 
                className={`status-button rejected ${status === '거절' ? 'active' : ''}`}
                onClick={() => handleStatusChange('거절')}
              >
                거절
              </button>
            </div>
            
            {status === '거절' && (
              <div className="rejection-reason">
                <label htmlFor="rejection-reason">거절 사유</label>
                <textarea 
                  id="rejection-reason" 
                  placeholder="거절 사유를 입력하세요"
                  rows="4"
                ></textarea>
              </div>
            )}
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>취소</button>
          <button className="save-button" onClick={handleSave}>저장</button>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;