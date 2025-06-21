import { Children } from "react";

export default function App() {
    const ProtectedRoute = ({childrenhildren}) => {
        return <Naavigate to="/login" replace />

    }
    return children;
}

return (<>
<>
    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
<Route path="/" element={
    <ProtectedRoute>
        <PokedexPage />
    </ProtectedRoute>}> 
    <Route path="/pokemon/id" element={
        <ProtectedRoute></ProtectedRoute>
    }

</>)