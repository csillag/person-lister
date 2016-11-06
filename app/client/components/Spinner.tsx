import * as React from 'react';
import * as classNames from 'classnames';

export const Spinner = () => {
    const classes:ClassDictionary = {
        "glyphicon": true,
        "glyphicon-repeat": true,
    }
    classes["fast-right-spinner"] = true;
    return (<span className={classNames(classes)}></span>);
}
