import { getApiRoot } from "./ApiRoot"
import {FetchServicesCustomErrors} from "./BaseFetch"

const API_ROOT = getApiRoot()

export function registerUser(body) {
    const endpoint = `${API_ROOT}/user`
    return FetchServicesCustomErrors({endpoint, method:"POST", body})
}

export function getUsers() {
    const endpoint = `${API_ROOT}/user`
    return FetchServicesCustomErrors({endpoint})
}
