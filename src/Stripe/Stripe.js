import { loadStripe } from "@stripe/stripe-js";

//publish key is ok to display
export const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
