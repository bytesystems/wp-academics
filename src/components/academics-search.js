export const AcademicsSearch = (props) => {

    const filter = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="wp-academics__filter">
            <input type="text" className="filter" onChange={filter}/>
        </div>
    )
}