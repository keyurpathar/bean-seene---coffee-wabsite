import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const flag = sessionStorage.getItem('isLogin')
    
    return flag ? <Outlet /> : <Navigate to={'/signin'} />
            
}

export default PrivateRouter
