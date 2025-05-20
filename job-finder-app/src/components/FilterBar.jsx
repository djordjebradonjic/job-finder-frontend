
function FilterBar(filters, setFilters, onSearch){

    return(
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search by title..."
        value={filters.title}
        onChange={(e) => setFilters({ ...filters, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location..."
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      />
      <button onClick={onSearch}>Search</button>
    </div>
    
    );
}

export default FilterBar;