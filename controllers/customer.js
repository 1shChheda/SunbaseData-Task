const axios = require('axios');

const getDashboard = async (req, res) => {

    res.render('home/dashboard');
};

const getCreateCustomer = async (req, res) => {
    res.render('home/create-customer');
};

const postCreateCustomer = async (req, res) => {
    const { first_name, last_name, street, address, city, state, email, phone } = req.body;

    try {
        const accessToken = req.session.accessToken;

        const response = await axios.post('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create', {
            // cmd: 'create',
            first_name: first_name,
            last_name: last_name,
            street: street,
            address: address,
            city: city,
            state: state,
            email: email,
            phone: phone
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (response.status === 201) {
            return res.status(201).send('Customer created successfully');
        } else {
            return res.status(400).send('Failed to create customer: First Name or Last Name is missing');
        }
    } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
            return res.status(401).send('Invalid Authorization');
        } else if (err.response.status === 500) {
            return res.status(500).send('Invalid Command');
        } else {
            return res.status(500).send('Something went wrong');
        }
    }
};

const getCustomerList = async (req, res) => {
    try {
        const accessToken = req.session.accessToken;

        const response = await axios.get('https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const customers = response.data;
        // console.log(customers);
        res.render('home/customer-list', {
            customers: customers
        });
    } catch (err) {
        console.error('Error fetching customer list:', err.response.data);
        if (err.response.status === 401) {
            return res.status(401).send('Invalid Authorization');
        } else if (err.response.status === 500) {
            return res.status(500).send('Invalid Command');
        } else {
            return res.status(500).send('Something went wrong');
        }
    }
};

const getDeleteCustomer = async (req, res) => {
    res.render('home/delete-customer');
};

const postDeleteCustomer = async (req, res) => {
    const { uuid } = req.body;

    try {
        const accessToken = req.session.accessToken;

        const response = await axios.post(`https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${uuid}`,{
            cmd: 'delete',
            uuid: uuid
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (response.status === 200) {
            return res.status(200).send('Successfully deleted');
        } else if (response.status === 400) {
            return res.status(400).send('UUID not found');
        } else {
            return res.status(500).send('Error: Not deleted');
        }
    } catch (err) {
        console.error('Error deleting customer:', err);
        if (err.response.status === 401) {
            return res.status(401).send('Invalid Authorization');
        } else {
            return res.status(500).send('Something went wrong');
        }
    }
};

module.exports = {
    getDashboard: getDashboard,
    getCreateCustomer: getCreateCustomer,
    postCreateCustomer: postCreateCustomer,
    getCustomerList: getCustomerList,
    getDeleteCustomer: getDeleteCustomer,
    postDeleteCustomer: postDeleteCustomer
}