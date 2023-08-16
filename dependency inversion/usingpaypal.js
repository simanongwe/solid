// prices changes pricing and we switch to paupal
// Also refred to adapter pattern
// you don't want high level code to depend on low level implementation e.g how a specific payment gateway works
class Store {
    constructor(user) {
        this.paypal = new Paypal();
        this.user = user;
    }

    purchaseBike(qty){
        this.paypal.makePayment(this.user, 200 * qty)
    }

    purchaseHelmet(qty){
        this.paypal.makePayment(this.user, 15 * qty)
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

const store = new Store('Kim');
store.purchaseBike(2);
store.purchaseHelmet(2)