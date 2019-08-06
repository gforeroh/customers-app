
export const apiGet = (urlCustomers) => () => fetch(urlCustomers).then(v => v.json());

export const apiPut = (urlCustomers, id, obj) => () =>
    fetch(`${urlCustomers}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then(r => {
        if(r.error){
            return Promise.reject(r.validation);
        }
        return r;
    });

export const apiPost = (urlCustomers, obj) => () =>
    fetch(`${urlCustomers}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then(r => {
        if (r.error) {
            return Promise.reject(r.validation);
        }
        return r;
    });

export const apiDelete = (urlCustomers, id) => () =>
    fetch(`${urlCustomers}/${id}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
    .then(r => {
        if (r.error) {
            return Promise.reject(r.validation);
        }
        return id;
    });