class Store {
    constructor(user){
        this.paypal = new Paypal();
        this.user = user;
        //this.stripe = new Stripe(user);
    }

    purchaseBike(quantity){
        //this.stripe.makePayment(200 * quantity * 100);
        this.paypal.makePayment(this.user, 200 * quantity);
    }

    purchaseHelmet(quantity){
        //this.stripe.makePayment(15 * quantity * 100);
        this.paypal.makePayment(this.user, 15 * quantity);
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
    makePayment(user, amountInDollars){
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

const Store = new Store('John');
Store.purchaseBike(2);
Store.purchaseHelment(2);
