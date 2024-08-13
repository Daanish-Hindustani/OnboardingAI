const SearchBar = () => {
  return (
    <div className="flex border rounded-md bg-black">
      <input type="text" placeholder="Search..." className="ml-3 p-2 bg-black text-sm" />
      <svg className="h-5 w-5 mr-3 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
  );
};

export default SearchBar;


