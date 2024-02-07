import { useState } from "react"

const TableHeader = () => {
    const [toggleFilters, setToggleFilters] = useState(false)

    const handleToggleFilters = ()=>{
      setToggleFilters(!toggleFilters)
    }

    return (
    <div  style={{ marginTop: '120px' }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 className="fw-bold">Mi tabla</h2>
        <div>
          <button className="btn btn-sm btn-outline-primary px-4 me-2" id="filtrosBtn">
              <i className="bi bi-sliders"></i> Filtros
          </button>
          <button className="btn btn-sm btn-outline-primary px-4 me-2" >
              <i className="bi bi-pencil"></i> Editar
          </button>
          <button className="btn btn-sm btn-outline-danger px-4 me-2" >
              <i className="bi bi-trash"></i> Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default TableHeader
