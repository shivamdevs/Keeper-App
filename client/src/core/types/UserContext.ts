export default interface UserContext {
    user: User | null;
    loading: boolean;
    error?: Error;
};

export interface User {
    _id: any;
    displayName: string;
    email: string;
};