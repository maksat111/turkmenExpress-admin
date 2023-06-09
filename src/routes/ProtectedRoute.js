import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

const ProtectedRoute = ({ children }) => {

    if (!isLogin()) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;