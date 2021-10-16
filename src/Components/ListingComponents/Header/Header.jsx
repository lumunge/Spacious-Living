import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="pageTitle">
        <p className="housesNumber">500+</p>
        <p className="listingTitle">Houses in nairobi</p>
      </div>
      <div className="filteringContainer">
        <div className="filter">
          <span>Filter by</span>
        </div>
        <div className="filter">
          <select className="filterSelect">
            <option value="">Price</option>
            <option value="">20000</option>
            <option value="">30000</option>
            <option value="">40000</option>
            <option value="">50000</option>
          </select>
        </div>
        <div className="filter">
          <select className="filterSelect">
            <option value="">House type</option>
            <option value="">1 Bedroom Apartment</option>
            <option value="">2 Bedroom Apartment</option>
            <option value="">Cabin</option>
            <option value="">SQ</option>
            <option value="">Studio</option>
          </select>
        </div>
        <div className="filter">
          <select className="filterSelect">
            <option value="">Location</option>
            <option value="">Nairobi</option>
            <option value="">Meru</option>
            <option value="">Kisumu</option>
            <option value="">Mombasa</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
