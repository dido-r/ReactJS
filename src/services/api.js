const host = 'https://parseapi.back4app.com/';

async function request(method, url, obj) {

    let options = {

        method,
        headers: {
            "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
            "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU",
            "Content-Type": "application/json",
            "X-Parse-Revocable-Session": "1",
        }
    }

    if (obj !== undefined) {

        options.body = JSON.stringify(obj);
    }

    try {

        let response = await fetch(host + url, options);

        if (response.status === 204) {

            return response;
        }

        if (response.ok === false) {

            throw new Error();
        }

        let data = await response.json();

        return data;

    } catch (err) {

        throw new Error();
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');