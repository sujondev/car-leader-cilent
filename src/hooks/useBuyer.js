import { useEffect, useState } from "react";

const useBuyer = email => {
    const [isBuyer, setisBuyer] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://car-leader-server-sujondev.vercel.app/user/seller/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isBuyer) {
                        setisBuyer(data.isBuyer)
                    }
                });
        }
    }, [email]);
    return [isBuyer];
}

export default useBuyer;