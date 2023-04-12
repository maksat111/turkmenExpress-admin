import { Navigate, useLocation } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();

    if (!isLogin()) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;