import { HttpError, ConnectionError } from "./CustomErrors";


export function FetchServicesCustomErrors({ endpoint, method = "GET", body }) {

    return fetch(endpoint, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body && JSON.stringify(body)
    }).then(
        (response) => {
            if (!response.ok) {
                throw new HttpError(response.status, response.url, response.statusText);
            }
            return response.json();
        },
        () => {
            throw new ConnectionError();
        }
    );
}
