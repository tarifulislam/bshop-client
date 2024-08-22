
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"pease pay to eat"}></SectionTitle>  
            <div>
                <Elements stripe={stripePromise} >
                        <CheckoutForm></CheckoutForm>
                 </Elements>    
            </div>          
        </div>
    );
};

export default Payment;

// npm install @stripe/react-stripe-js @stripe/stripe-js  ---  add this in client side.

// TarifStar@#$123 ----- stripe password

// 4242 4242 4242 4242   04 29 565 78945

// npm install --save stripe  -- add this in server side.


