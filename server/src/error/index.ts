export interface ErrorCode {
    code: string;
    message: string;
    target?: string;
}

export type ErrorCodeObject = {
    request: {
        empty: {
            email: ErrorCode;
            password: ErrorCode;
        };
        invalid: {
            email: ErrorCode;
            password: ErrorCode;
        };
    };
    cloud: {
        failed: ErrorCode;
    },
    auth: {
        exist: ErrorCode;
    }
}

const errorCodes: ErrorCodeObject = {
    request: {
        empty: {
            email: {
                code: "request/empty-email",
                message: "Email field can't be empty",
                target: "email",
            },
            password: {
                code: "request/empty-password",
                message: "Password field can't be empty",
                target: "password",
            },
        },
        invalid: {
            email: {
                code: "request/invalid-email",
                message: "Email address is not a valid email",
                target: "email",
            },
            password: {
                code: "request/invalid-password",
                message: "Password should contain at least 6 characters",
                target: "password",
            },
        },
    },
    cloud: {
        failed: {
            code: "cloud/failed to connect",
            message: "Failed to connect to cloud database",
        },
    },
    auth: {
        exist: {
            code: "auth/email-already-in-use",
            message: "This email address is already in use",
        },
    },
};

export default errorCodes;
