import logo from './hacker-news.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchBody from './components/SearchBody/SearchBody';
import FavesButton from './components/FavesButton/FavesButton';
import { useEffect, useMemo, useState } from 'react';
import { fetchData } from './services/fetchData';
import Pagination from './components/Pagination/PaginationBar';

function App() {
  const [searchFilter, setSearchFilter] = useState('')
  const [ favoriteList, setFavoriteList ] = useState<number[]>([]);
  const [isAllActive, setIsAllActive] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [ searchData, setSearchData ] = useState([]);
  const [ page, setPage ] = useState(0);

  useEffect(() => {
    if(searchFilter.length !== 0){
      getInformation();
    }
  }, [searchFilter])

  const getInformation = async() => {
      const newInfo:any = await fetchData(searchFilter, page);
      setSearchData(newInfo);
  }

  const toggleOptions = (value: boolean) => {
    setIsHidden(value)
  }

  const manageSearchFilter = (value: string) => {
    setSearchFilter(value);
    toggleOptions(true);
  }

  const handleToggle = (value: boolean) => {
    setIsAllActive(value);
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = ((page+1) - 1) * 8;
    const lastPageIndex = firstPageIndex + 8;
    return searchData.slice(firstPageIndex, lastPageIndex);
  }, [page]);

  const filteredData = currentTableData.map(({created_at, story_title, story_id, created_at_i, story_url}: any) => ({
    created_at,
    story_title,
    story_id,
    created_at_i,
    story_url
  }));  

  const filterFavorites = (value: number) => {
    if(favoriteList.includes(value)){
      setFavoriteList(favoriteList.filter((current: number) => current !== value))
    } else {
      setFavoriteList([value, ...favoriteList])
    }
  }

  useEffect(() => {
    localStorage.setItem("Favorite List", JSON.stringify(favoriteList));
  }, [favoriteList])
  

  return (
    <div className="App">
      <div className="Front-End-Test---Home-view">
        <div className="Rectangle-2-Copy">
          <img className="HACKER-NEWS Text-Style" src={logo} alt="" />
        </div>
        <FavesButton isAllActive={isAllActive} handleToggle={handleToggle} />
        <SearchBar toggleOptions={toggleOptions} isHidden={isHidden} manageSearchFilter={manageSearchFilter} searchFilter={searchFilter}/>
        <SearchBody infoToRender={isAllActive ? (filteredData) : (filteredData.filter((ele: { story_id: any; }) => favoriteList.includes(ele.story_id)))} setFavorite={filterFavorites} favoriteList={favoriteList} />
        <Pagination
          className="pagination-bar"
          currentPage={ page === 0 ? 1 : page}
          totalCount={searchData.length}
          pageSize={8}
          onPageChange={(page: any) => setPage(page)}
        />
      </div>
    </div>
  );
}

export default App;
