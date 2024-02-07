import { useContext, useEffect } from "react"
import { AppContext, Register } from "../context/AppContext"


export const Table = () => {
  const value = useContext(AppContext)

  const isChecked = false
  const handleCheckboxChange = () => {
    // Lógica de cambio de checkbox
  }

  useEffect(() => {
    value?.fetchData()
  }, [])

  useEffect(() => {
    value?.filterRegisters()
  }, [value?.searchQuery])

  return (
    <>
      <table className="table table-hover table-light table-bordered">
        <thead>
          <tr className="table-secondary">
            <th scope="col"><i className="bi bi-check-lg"></i></th>
            <th scope="col">Nombre</th>
            <th scope="col">Genero</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Celular</th>
            <th scope="col">Nacionalidad</th>
          </tr>
        </thead>
        <tbody>
          {value?.filteredData.map((register: Register, index: number) => (
            <tr key={index}>
              <th>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </th>
              <td>{`${register.name.first} ${register.name.last}`}</td>
              <td>{register.gender}</td>
              <td>{register.email}</td>
              <td>{register.cell}</td>
              <td>{register.nat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    
  )
}
