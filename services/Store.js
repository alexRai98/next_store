import { getApiRoot } from "./ApiRoot";
import { FetchServicesCustomErrors } from "./BaseFetch";

const API_ROOT = getApiRoot();

export function registerStore(body) {
    const endpoint = `${API_ROOT}/store`;
    return FetchServicesCustomErrors({ endpoint, method: "POST", body });
}

