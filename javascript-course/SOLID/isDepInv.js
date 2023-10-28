class Store {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity){
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity){
        this.paymentProcessor.pay(15 * quantity);
    }
}

class StripePaymentProcessor{
    constructor(user){
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars){
        this.stripe.makePayment(this.user, amountInDollars * 100);
    }
}

class PaypalPaymentProcessor{
    constructor(user){
        this.paypal = new Paypal(user);
    }

    pay(amountInDollars){
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

class Stripe {
    constructor(user){
        this.user = user;
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
    }
}

class Paypal {
    constructor(user){
        this.user = user;
    }

    makePayment(amountInDollars){
        console.log(`${this.user} made payment of $${amountInDollars} with Paypal`);
    }
}

const store = new Store(new StripePaymentProcessor('John'));
store.purchaseBike(2);
store.purchaseHelmet(2);

const store2 = new Store(new PaypalPaymentProcessor('John'));
store2.purchaseBike(2);
store2.purchaseHelmet(2);

//we have a payment abstraction that we can use to make payments with different payment processors without having to change the code inside of the store class
//we now can easily add a new payment processor and wrap that api we want to use and pass that into the store 
//paypal class wrapping the paypal payment processor -> meaning that we are able to keep adding these different services while keeping the store class exactly the same