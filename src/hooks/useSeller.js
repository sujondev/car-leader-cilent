import { useEffect, useState } from "react";

const useSeller = email => {
    const [isSeller, setisSeller] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/seller/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isSeller) {
                        setisSeller(data.isSeller)
                    }
                });
        }
    }, [email]);
    return [isSeller];
}

export default useSeller;