export class HttpError extends Error {
    constructor(status, url, ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HttpError);
        }

        this.name = "HttpError";
        // Custom debugging information
        this.status = status
        this.error = {
            name: this.name,
            status,
            url
        };
    }
}

export class ConnectionError extends Error {
    constructor(...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConnectionError);
        }

        this.name = "ConnectionError";

        this.error = {
            name: this.name
        };
    }
}
