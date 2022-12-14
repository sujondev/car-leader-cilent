import BookingModal from './BookingModal/BookingModal';
import { HiCheckCircle } from "react-icons/hi";
const Resellcar = ({ resellCar }) => {
    const { name, img, location, orginalPrice, resellPrice, yearofusing, conditon, isverify, description, sellerName } = resellCar;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description?.length > 180 ? description?.slice(0, 180) + '.' : description}</p>
                    <p className='text-primary text-semibold'>Loacation: {location}</p>
                    <p className='text-primary text-semibold'>OrginalPrice: ${orginalPrice}</p>
                    <p className='text-primary text-semibold'>ResellPrice: ${resellPrice}</p>
                    <p className='text-primary text-semibold'>Yearofusing: {yearofusing}month</p>
                    <p className='text-primary text-semibold'>Conditon: {conditon}</p>
                    <p className='text-primary text-semibold'>SellerName: {sellerName}</p>
                    {isverify && <div className='flex'><HiCheckCircle className="text-blue-600 text-2xl"></HiCheckCircle><span className='text-blue-400 font-semibold ml-1'>verified</span></div>}
                    <div className="card-actions justify-end">
                        <label htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
            <BookingModal resellCar={resellCar}></BookingModal>
        </div>
    );
};

export default Resellcar;