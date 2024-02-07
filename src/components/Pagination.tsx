import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Pagination: React.FC = () => {
  const {
    totalResults,
    currentPage,
    pageSize,
    totalPages,
    changePage,
    changePageSize,
    fetchData, // Supongo que hay una función fetchData en tu contexto para obtener datos
  } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize, fetchData]);

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <span>Página actual: {currentPage}</span>
      <span>Total de páginas: {totalPages}</span>
      <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      {pageNumbers.map((page) => (
        <button key={page} onClick={() => changePage(page)} className={page === currentPage ? "active" : ""}>
          {page}
        </button>
      ))}
      <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
      </button>
      <select value={pageSize} onChange={(e) => changePageSize(Number(e.target.value))}>
        <option value={5}>5 por página</option>
        <option value={10}>10 por página</option>
        <option value={20}>20 por página</option>
      </select>
    </div>
  );
};

export default Pagination;
