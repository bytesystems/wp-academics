import * as PropTypes from "prop-types";
import {format,parseISO} from "date-fns"


export const Advertisement = (props)  => {

    const {advertisement} = props;

    return (
        <div className="wp-academics__advertisement advertisement" id={`wp-academics__advertisement-${advertisement['@attributes'].id}`} data-advertisement-id={advertisement['@_id']}>
            <div className="advertisement__published">Veröffentlicht {format(parseISO(advertisement.publication), 'dd.MM.yyyy')}</div>
            <h3 className="advertisement__title">
                <a href={advertisement.link} target="_blank" rel="nofollow noindex noopener">
                    {advertisement.title}
                </a>
            </h3>
            <div className="advertisement__university">
                {advertisement.employer}
            </div>
        </div>
    )
}
