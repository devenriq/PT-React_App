import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Footer = () => {
  const value = useContext(AppContext)

  return (
    <div>
      <p className="fw-lighter">#Registros: {value?.totalResults}</p>
    </div>
  )
}

export default Footer