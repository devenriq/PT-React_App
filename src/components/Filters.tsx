import React, { useState, useEffect, useRef } from "react";

interface FiltersProps {
  value: {
    filteredData: { gender: string; nat: string }[] | undefined;
  };
}

const Filters: React.FC<FiltersProps> = ({ value }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [buttonClicked, setButtonClicked] = useState<string | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleClick = (buttonName: string) => {
    setButtonClicked((prevButton) => (prevButton === buttonName ? null : buttonName));
  };

  const handleFilteredSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setButtonClicked(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mt-4 bg-white h-25">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div ref={buttonRef} className="dropdown col">
              <button
                className={`btn btn-secondary dropdown-toggle bg-light text-secondary rounded-2 border-secondary w-100 ${
                  buttonClicked === "Género" ? "border-secondary border-5" : ""
                }`}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => handleClick("Género")}
              >
                Género
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <div className="input-group m-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleFilteredSearch}
                  />
                </div>
                {value.filteredData && (
                  <>
                    {[
                      ...new Set(value.filteredData.map((item) => item.gender)),
                    ].map((gender, index) => (
                      <a className="dropdown-item" key={index} href="#">
                        {gender}
                      </a>
                    ))}
                  </>
                )}
              </div>

            </div>
            <div ref={buttonRef} className="dropdown col">
              <button
                className={`btn btn-secondary dropdown-toggle bg-light text-secondary rounded-2 border-secondary w-100 ${
                  buttonClicked === "Género" ? "border-secondary border-5" : ""
                }`}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => handleClick("Género")}
              >
                Nacionalidad
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <div className="input-group m-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleFilteredSearch}
                  />
                </div>
                {value.filteredData && (
                  <>
                    {[
                      ...new Set(value.filteredData.map((item) => item.nat)),
                    ].map((nat, index) => (
                      <a className="dropdown-item" key={index} href="#">
                        {nat}
                      </a>
                    ))}
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
