import axios from 'axios'
import { merge } from 'ramda';
import { getToken } from './getToken';
import { getEnvConfig } from './getEnvConfig';

const { REACT_APP_API_URL } = getEnvConfig();

function getDefaultOptions() {
    const token = getToken()?.token;

    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
}

export const apiManagerRequest = (
    url,
    options,
    successCallback,
    failCallback,
) => {
    const defaultOptions = getDefaultOptions();
    const requestOptions = merge(defaultOptions, options || {});
    requestOptions.url = `${REACT_APP_API_URL}${url}`;
    axios(requestOptions)
        .then(res => {
            successCallback(res.data);
        })
        .catch(err => {
            failCallback(err);
        })
};

//TO PASS BODY USE 'data' FIELD
export const apiRequestPromise = (uri, options) => {
    return new Promise((resolve, reject) => {
        apiManagerRequest(
            uri,
            options,
            res => {
                try {
                    resolve(JSON.parse(res));
                } catch (e) {
                    resolve(res);
                }
            },
            res => reject(res),
        );
    });
};

//TO PASS BODY USE 'json' FIELD
export const apiRequestFetch = (
    uri,
    options,
    successCallback,
    failCallback,
) => {
    const defaultOptions = getDefaultOptions();
    const requestOptions = merge(defaultOptions, options || {});
    fetch(`${REACT_APP_API_URL}${uri}`, requestOptions).then(
        res => {
            if (res.status >= 200 && res.status < 300) {
                if (typeof successCallback === 'function') {
                    successCallback(res);
                }
            } else if (typeof failCallback === 'function') {
                failCallback(res);
            }
        },
        res => {
            if (typeof failCallback === 'function') {
                failCallback(res);
            }
        },
    );
};
