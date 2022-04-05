
import "../sidebar-component/sidebar-component.css"

export default function SidebarComponent(){
    return(
        <aside className="products-listing-page-sidebar">
        <div className="filter-container">
            <span className="material-icons-outlined menu-toggle-button">
            menu
            </span>
            <div className="sidebar-heading">Filters</div>
            <a className="filter-link" href="#">Clear</a>
        </div>

        <div className="all-filter-items-container">
            <div className="category-container">
                <div className="sidebar-heading">Category</div>
                <div className="category-all-input-items">
                    <div className="input-data-item">
                        <input type="checkbox" name="terms" id="men-clothing"/>
                        <label htmlFor="men-clothing">Men </label>
                    </div>
                    <div className="input-data-item">
                        <input type="checkbox" name="terms" id="women-clothing"/>
                        <label htmlFor="women-clothing">Women </label>
                    </div>
                    <div className="input-data-item">
                        <input type="checkbox" name="terms" id="boy-clothing"/>
                        <label htmlFor="boy-clothing">Boy</label>
                    </div>
                    <div className="input-data-item">
                        <input type="checkbox" name="terms" id="girl-clothing"/>
                        <label htmlFor="girl-clothing">Girl </label>
                    </div>
                </div>
            </div>
            <div className="rating-container">
                <div className="sidebar-heading">Rating </div>
                <div className="rating-all-input-items">
                    <div className="input-data-item">
                        <input type="radio" name="rating" id="4star"/>
                        <label htmlFor="4star"> 4 Stars & above</label>
                    </div>
                    <div className="input-data-item">
                        <input type="radio" name="rating" id="3star"/>
                        <label htmlFor="3star"> 3 Stars & above</label>
                    </div>
                    <div className="input-data-item">
                        <input type="radio" name="rating" id="2star"/>
                        <label htmlFor="2star"> 2 Stars & above</label>
                    </div>
                    <div className="input-data-item">
                        <input type="radio" name="rating" id="1star"/>
                        <label htmlFor="1star"> 1 Stars & above</label>
                    </div>
                </div>
            </div>

            <div className="sortby-container">
                <div className="sidebar-heading">Sort By </div>
                <div className="sortby-all-input-items">
                    <div className="input-data-item">
                        <input type="radio" name="sortby" id="low-to-high"/>
                        <label htmlFor="low-to-high"> price - low to high</label>
                    </div>
                    <div className="input-data-item">
                        <input type="radio" name="sortby" id="high-to-low"/>
                        <label htmlFor="high-to-low"> price - high to low</label>
                    </div>

                </div>
            </div>
        </div>
    </aside>
    )
}