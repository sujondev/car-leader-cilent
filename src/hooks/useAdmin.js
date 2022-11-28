import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setisAdmin] = useState('');
    const [isAdminLoading, setisAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/admin/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isAdmin) {
                        setisAdmin(data.isAdmin)
                        setisAdminLoading(false)
                    }
                });
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
}

export default useAdmin;