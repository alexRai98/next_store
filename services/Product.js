import { getApiRoot } from "./ApiRoot";
import { FetchServicesCustomErrors } from "./BaseFetch";

const API_ROOT = getApiRoot();

export function registerProduct(body, storeId) {
    const endpoint = `${API_ROOT}/store/${storeId}`;
    return FetchServicesCustomErrors({ endpoint, method: "POST", body });
}

export function getAllProducts(storeId) {
    const endpoint = `${API_ROOT}/store/${storeId}`;
    console.log("enpoint", endpoint)
    return FetchServicesCustomErrors({ endpoint });
}
