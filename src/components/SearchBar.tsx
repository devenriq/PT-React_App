import { ChangeEvent } from "react"

interface SearchBarProps{
  onSearch: (query:string)=>void
}

export const SearchBar:React.FC<SearchBarProps> = ({onSearch}) => {
  const handleInputChange =  (event:ChangeEvent<HTMLInputElement>)=>{
    const query = event.target.value;
    onSearch(query)
  }

  return(
    <>
      <div className="input-group mb-4">
        <div className="form-outline position-relative w-100">
          <input type="search" id="form1" className="form-control" placeholder="Buscar" aria-label="Search" onChange={handleInputChange} />
          <i className="bi bi-search position-absolute text-primary" style={{ right: '20px', top: '50%', transform: 'translateY(-50%)' }}></i>
        </div>
      </div>
    </>
  )
}
