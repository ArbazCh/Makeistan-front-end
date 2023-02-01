import React,{useState , useEffect} from 'react'
import './style.css'
// import dataSlice from '../../redux/slices/allproducts'
// import {useSelector,useDispatch} from 'react-redux';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchfield = () => {
  // const {  searchTerm } = useSelector((state) => state.data);
// const dispatch = useDispatch();
  // const [searchVal, setSearchVal ] = useState<string>('');
  // useEffect(() =>{
  //  oninput(searchVal)
  // }, [searchVal])
  // const handleSearchTermChange = (e) => {
  //   dispatch(dataSlice.actions.setSearchTerm(e.target.value));
  // };
  return (
    <>
    <div class="search-widget">
        <form>
            <input type="search" placeholder="Search products ..." 
            // value={searchTerm}
          //  onChange={handleSearchTermChange} 
          />
            <button className='icon-btn'>
                <SearchOutlinedIcon />
            </button>
        </form>
    </div>
    </>
  )
}

export default Searchfield;