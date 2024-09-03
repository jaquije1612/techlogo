import React, { useState } from 'react'
import { RiArrowDownSLine, RiSearch2Line } from 'react-icons/ri';
import { MdDelete } from "react-icons/md";
import useLoadTiposProductos from '../../hooks/useLoadTiposProductos';

const Cabecera = ({ props }) => {

  const filterSend = {
    categoriafilter : 0,
    textFilter : ''
  }

  const cabecera__a_inactive = "cabecera__a--inactive py-2 pr-4"
  const cabecera__a_active = "cabecera__a--active relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]";
  const lTiposProductos = useLoadTiposProductos();

  const [activeButton, setActiveButton] = useState(null);

  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    filterSend.categoriafilter=buttonIndex;
    if(buttonIndex==0){
      filterSend.textFilter='';
      setInputValue('')
    }
    props(filterSend);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Actualiza el estado con el valor actual del input
    filterSend.textFilter=event.target.value
    props(filterSend);
  };

  return (
    <header>
      {/* Titulo y buscador por nombre y productor */}
      <div className="cabecera__div--titulo flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">TechLogo</h1>
          <p className="text-gray-500">25 Agosto 2024</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="cabecera__icon--search absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="cabecera__input--search bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="cabecera__nav text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        {
          lTiposProductos.map(item => {
            return (
              <a key={item.id} className={activeButton === item.id ? cabecera__a_active : cabecera__a_inactive}
                onClick={() => handleButtonClick(item.id)}>
                {item.name}
              </a>)
          })
        }
        <button key={0} className="cabecera__button--clearfilter flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg pl-10"
          onClick={() => handleButtonClick(0)}>
          <MdDelete /> Borrar Filtro
        </button>
      </nav>
    </header>
  );
}

export default Cabecera