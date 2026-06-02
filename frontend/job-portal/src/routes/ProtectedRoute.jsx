import React from 'react';
import {
    Navigate,
    Outlet,
    useLocation
} from 'react-router-dom';
import { useAuth } from "../../src/context/Authcontext";
import { Briefcase } from "lucide-react";

const ProtectedRoute = ({ requiredRole }) => {
  const location = useLocation();
  const { user, isAuthenticated, loading } = useAuth();
  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
        </div>
        <p className="text-gray-600 font-medium">
            Loading...
        </p>
      </div>
    </div>
  )

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace/>;
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoute
