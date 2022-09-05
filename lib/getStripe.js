import {loadStripe} from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        let publishableKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`;
        stripePromise = loadStripe(publishableKey);
    }

    return stripePromise;
}

export default getStripe;