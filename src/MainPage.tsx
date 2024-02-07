import { useContext } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { SearchBar } from "./components/SearchBar"
import { Table } from "./components/Table"
import TableHeader from "./components/TableHeader"
import { AppContext } from "./context/AppContext"
import Filters from "./components/Filters"
import Pagination from "./components/Pagination"

const MainPage = () => {
  const value = useContext(AppContext)

  const handleSearch = (query:string)=>{
    value?.setSearchQuery(query)
  }



  return (
    <div className="container">
        <Navbar/>
        <TableHeader />
        <Filters value={value}/>
        <SearchBar onSearch={handleSearch}/>
        <Table />
        <Pagination value={value}/>
        <Footer />
      </div>
  )
}

export default MainPage
