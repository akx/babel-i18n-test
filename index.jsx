import React from 'react';
import SubBloop from './subbloop.jsx';

class Bloop {
    render() {
        return <div id="content">
            <h1 className="fa-calendar">{_('Calendar')}</h1>
            <button>{_('Schedule a beer')}</button>
            <button>{_('Warp time')}</button>
        </div>;
    }
}

