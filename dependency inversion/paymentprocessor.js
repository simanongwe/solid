
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(qty){
        this.paymentProcessor.pay(200 * qty)
    }

    purchaseHelmet(qty){
        this.paymentProcessor.pay(15 * qty)
    }
}


class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $ ${amountInCents / 100} with Stripe.`)
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $ ${amountInDollars} with Stripe.`)
    }
}

// line that changes
const store = new Store(new StripePaymentProcessor('Kim'));
store.purchaseBike(2);
store.purchaseHelmet(2)