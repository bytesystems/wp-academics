import {Advertisement} from "./advertisement";
import {useEffect, useState} from "react";

export const AcademicsDisplay = (props) => {

    const {data} = props;

    const [advertisements, setAdvertisements] = useState([])
    const [terms, setTerms] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        setAdvertisements(data.advertisements)
    },[data])

    const clearTerms = () => {
        setTerms([])
        setAdvertisements(data.advertisements)
        setSearchValue('');
    }

    const handleFilterChange = (e) => {
        setSearchValue(e.target.value)
        const search = e.target.value.trim().toLowerCase()

        if(search.length === 0) {
            setTerms([])
            setAdvertisements(data.advertisements)
            return;
        }

        const newTerms = search.split(" ");

        setTerms(newTerms)

        const filteredAdvertisements = data.advertisements.filter((advertisement) => {
            const test = Object.values(advertisement).join('').toLowerCase()
            let found = false;
            newTerms.forEach((term) => {
                if (test.includes(term))
                {
                    found = true
                }
            })
            return found
        } )

        setAdvertisements(filteredAdvertisements)

    }

    const renderLoading = () => {
        return (
            <div className="wp-academics__loader active" />
        )
    }

    const placeholder = window.innerWidth < 600 ? 'Stelle / Fachbereich' : 'Nach welcher Stelle oder welchem Fachbereich suchen Sie?'

    const renderContent = () => {
        return (
            <>
                <div className="wp-academics__filter">
                    <div className="wp-academics-wrapper filter-wrapper">
                        <input type="text" className="filter" onChange={handleFilterChange} placeholder={placeholder} value={searchValue}/>
                    </div>
                </div>
                {terms.length > 0 && <div className="wp-academics__terms">
                    <div className="wp-academics-wrapper terms-wrapper">
                    Ihre Suchergebnisse für<br />
                    »{terms.join(", ")}«
                    </div>
                </div>}
                <div className="wp-academics__listing">
                    <div className="wp-academics-wrapper advertisements-wrapper">
                    {advertisements.map(advertisement => <Advertisement key={advertisement['@attributes'].id} advertisement={advertisement} />)}
                    </div>
                </div>
                {terms.length > 0 && <div className="wp-academics__back">
                    <div className="wp-academics-wrapper back-wrapper">
                        <div className="arrow-button">
                            <div className="elementor-button-link elementor-button elementor-size-xs" onClick={clearTerms}>
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">ZURÜCK ZU ALLEN STELLENANGEBOTEN</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </>
        )
    }

    if(data.loading) return renderLoading();
    return renderContent()

}