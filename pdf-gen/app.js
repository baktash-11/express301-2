const niceInvoice = require('nice-invoice');


const invoiceDetail = {
    shipping: {
        name: 'Baktash', 
        address: '71 main street', 
        city: 'Ajax', 
        provence: 'Ontario', 
        country : 'Canada', 
        postal: 'L1T2J5'
    }, 
    items: [
        {
            item: 'Laptop', 
            description : "XPS 15 4k", 
            quantity: 1, 
            price: 2500, 
            tax: '13%'
        }, 
        {
            item: 'cellphone', 
            description : "google pixel 6 pro", 
            quantity: 1, 
            price: 1500, 
            tax: '13%'
        }, 
    ], 
    subtotal: 4000, 
    total:4000, 
    order_number: 12332, 
    header:{
        company_name: "MyCompany Invoice", 
        company_logo: "logo.png", 
        company_address: "23 King street east Pickering Ontario Canada"
    }, 
    footer:{
        text:'Any footer text - you can add any text here'
    },
    currency_symbol: '$', 
    date:{
        billing_date: '09 nov 2020', 
        due_date: '30 nov 2020'
    }
    
};

niceInvoice(invoiceDetail, 'Baktash Sana invoice.pdf');