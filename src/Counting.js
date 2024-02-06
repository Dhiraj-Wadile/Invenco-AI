import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './Counting.css';

const Counting = ({ selectedAile, onSubmitCount, goBack }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set the number of items to display per page
  const [paginatedData, setPaginatedData] = useState([]);

  // Simulated data, replace with your actual data fetching logic
  const allItems = Array.from({ length: 50 }, (_, i) => i + 1);

  // Validate user inputs
  const isValidCount = (inputCount) => {
    return inputCount >= 0;
  };

  // Calculate the current page's items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setPaginatedData(currentItems);
  }, [currentPage, currentItems]);

  const handleCountSubmit = () => {
    if (isValidCount(count)) {
      setLoading(true);

      // Simulate an API call (replace this with your actual submission logic)
      setTimeout(() => {
        onSubmitCount(selectedAile, count);
        Swal.fire({
          title: 'Count Submitted!',
          text: `Count for Aile ${selectedAile}: ${count} submitted successfully.`,
          icon: 'success',
        });
        setSuccess(true);
        setLoading(false);
      }, 1000); // Simulating a 1-second delay, replace with your actual API call duration
    } else {
      alert('Invalid count');
    }
  };

  const handleSummaryReport = () => {
    // Logic for generating and displaying the summary report
    Swal.fire({
      title: 'Summary Report',
      html: `<p>Aile ${selectedAile} count:</p><p>${count}</p>`,
      icon: 'info',
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="counting-container">
      <h2>Counting for Aile: {selectedAile}</h2>
      <label>Count:</label>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Enter count"
      />
      <br />

      {/* Button container with spacing */}
      <div className="button-container">
        <button onClick={goBack}>Back</button>
        <button onClick={handleCountSubmit} disabled={loading || success}>
          {loading ? 'Submitting...' : success ? 'Submitted' : 'Submit Count'}
        </button>
        <button onClick={handleSummaryReport} className="summary-report-btn">
          Summary Report
        </button>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(allItems.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      {/* Display the current page's items */}
      <ul>
        {paginatedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counting;
