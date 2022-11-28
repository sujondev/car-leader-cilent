import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../context/Authprovider';

const BookingModal = ({ resellCar }) => {
    const { name, resellPrice, _id, img } = resellCar;
    const { user } = useContext(Authcontext)
    const navigate = useNavigate()
    const handleBooking = (event) => {
        event.preventDefault()
        const phoeneNumber = event.target.phone.value
        const mettingLocation = event.target.location.value
        const booking = {
            buyerName: user.displayName,
            productId: _id,
            email: user.email,
            productName: name,
            img,
            resellPrice,
            phoeneNumber,
            mettingLocation
        }
        fetch('https://car-leader-server-sujondev.vercel.app/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("booking complete")
                    navigate('/dashboard')


                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        <input type="text" defaultValue={name} disabled className="input w-full input-bordered" />
                        <input type="text" defaultValue={`$${resellPrice}`} disabled className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Metting Location" className="input w-full input-bordered" required />
                        <button className="btn">submit</button>
                    </form>
                </div>
            </div >
        </>
    );
};
export default BookingModal;