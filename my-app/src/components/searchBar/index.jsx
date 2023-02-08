import React from 'react'
import './style.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchfield = () => {
  return (
    <>
    <div className="search-widget">
        <form>
            <input type="search" placeholder="Search products ..." />
            <button className='icon-btn'>
                <SearchOutlinedIcon />
            </button>
        </form>
    </div>
    </>
  )
}

export default Searchfield;