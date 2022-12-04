import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setisAdmin] = useState(false);
    const [isAdminLoading, setisAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://car-leader-server-sujondev.vercel.app/user/admin/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setisAdmin(data.isAdmin)
                    setisAdminLoading(false)
                });
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
}

export default useAdmin;