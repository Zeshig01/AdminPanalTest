import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  const handleFirstPage = () => {
    onPageChange(1);
  };
  
  const handleLastPage = () => {
    onPageChange(totalPages);
  };
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // If total pages are less than max pages to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of page range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis if needed before middle pages
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis if needed after middle pages
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  
  return (
    <div className="pagination">
      <button 
        className="pagination-button first-page" 
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        <span className="sr-only">First Page</span>
      </button>
      
      <button 
        className="pagination-button prev-page" 
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <span className="sr-only">Previous Page</span>
      </button>
      
      <div className="page-numbers">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`page-number ${page === currentPage ? 'active' : ''} ${page === '...' ? 'ellipsis' : ''}`}
            onClick={() => page !== '...' && handlePageClick(page)}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button 
        className="pagination-button next-page" 
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next Page</span>
      </button>
      
      <button 
        className="pagination-button last-page" 
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Last Page</span>
      </button>
    </div>
  );
};

export default Pagination;