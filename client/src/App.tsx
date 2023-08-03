import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import KeepLayout from './layout/KeepLayout';
import UserContext, { useUserContext } from './core/context/UserContext';
import UserContextType from './core/types/UserContext';
import { useEffectOnce, useUpdateEffect } from 'react-unique-hooks';
import AuthLayout from './layout/AuthLayout';

function App() {
    const [context, setContext] = React.useState<UserContextType>({
        user: null,
        loading: true
    });

    useEffectOnce(() => {
        setTimeout(() => {
            setContext(old => ({ ...old, loading: false }));
        }, 1000);
    });

    useUpdateEffect(() => {
        if (!context.loading) (window as any).loadingOverlayRemove();
    }, [context.loading]);
    return (
        <UserContext.Provider value={context}>
            <Routes>
                <Route path="/keeper/*" element={<NoAuthNavigate element={<KeepLayout />} />} />
                <Route path="/auth" element={<AuthRedirect element={<AuthLayout />} />} />
                <Route path="/" element={<AuthRedirect element={"hello"} />} />
            </Routes>
        </UserContext.Provider>
    );
}

export default App;

function NoAuthNavigate({ element }: { element: React.ReactNode }) {
    const { user, loading } = useUserContext();

    if (loading) return null;
    if (!user) return <Navigate to="/auth" />;

    return (
        <>{element}</>
    );
}

function AuthRedirect({ element }: { element: React.ReactNode }) {
    const { user, loading } = useUserContext();

    if (loading) return null;
    if (!user) return (<>{element}</>);

    return <Navigate to="/keeper" />;
}