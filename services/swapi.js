import fetch from 'fetch-everywhere'
export const fetchPeople = () => {

    return fetch(`https://swapi.co/api/people/`)

        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        })
        .then(response => response.json())
        .then(res => {
            return Promise.resolve(res)
        })
}
export const fetchDetails = (_id) => {
   

    return fetch(_id)
    
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }   
    })
    .then(response => response.json())
    .then(res => {
        return Promise.resolve(res)
    })
}

