import React, { createContext, useState, useContext } from 'react';
import MemberDetail from '../components/MemberDetail';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Clear the selected member after a short delay to allow for animation
    setTimeout(() => {
      setSelectedMember(null);
    }, 300);
  };

  const handleStatusChange = (memberId, newStatus) => {
    // This would typically update the status in your data store or API
    console.log(`Status changed for member ${memberId} to ${newStatus}`);
    // For now, we'll just close the modal
    closeModal();
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalOpen && (
        <MemberDetail 
          member={selectedMember} 
          onClose={closeModal} 
          onStatusChange={handleStatusChange} 
        />
      )}
    </ModalContext.Provider>
  );
};

export default ModalContext;