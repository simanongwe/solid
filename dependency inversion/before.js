// you don't want high level code to depend on low level implementation e.g how a specific payment gateway works
class Store {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    purchaseBike(qty){
        this.stripe.makePayment(200 * qty * 100)
    }

    purchaseHelmet(qty){
        this.stripe.makePayment(15 * qty * 100)
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

class PayPal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $ ${amountInDollars / 100} with Stripe.`)
    }
}

const store = new Store('Kim');
store.purchaseBike(2);
store.purchaseHelmet(2)