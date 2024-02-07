import React, { createContext, ReactNode, useState } from "react";
import axios, { AxiosResponse } from "axios";

export interface Register {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  cell: string;
  nat: string;
}

interface Info {
  results: number;
  page: number;
  totalPages: number;
}

interface ApiResponse {
  results: Register[];
  info: Info;
}

interface AppContextType {
  filteredData: Register[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  fetchData: () => Promise<void>;
  filterRegisters: () => void;
  totalResults: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  changePage: (page: number) => void;
  changePageSize: (size: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Register[]>([])
  const [filteredData, setFilteredData] = useState<Register[]>([])
  const [totalResults, setTotalResults] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);


  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const changePageSize = (size: number) => {
    setPageSize(size);
  };

  const fetchData = async () => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(
        `https://randomuser.me/api?results=${pageSize}&page=${currentPage}`
      );

      setData(response.data.results);
      setFilteredData(response.data.results);
      setTotalResults(response.data.info.results);

      setTotalResults(response.data.info.results);
      setTotalPages(response.data.info.totalPages);
    } catch (error: any) {
      console.error(`Error al obtener los datos: ${error.message}`);
    }
  };

  const filterRegisters = () => {
    const filteredData = data.filter((register) =>
      `${register.name.first} ${register.name.last}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredData)
    setTotalResults(filteredData.length)
  }

  console.log(totalResults)

  const value: AppContextType = {
    filteredData,
    searchQuery,
    setSearchQuery,
    fetchData,
    filterRegisters,
    totalResults,
    currentPage,
    pageSize,
    totalPages,
    changePage,
    changePageSize
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
