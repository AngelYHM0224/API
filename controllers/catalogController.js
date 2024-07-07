const Catalog = require('../models/catalog');

exports.listItems = async (req, res) => {
    try {
        const items = await Catalog.find({}, '_id name description price');
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send('Error interno');
    }
};

exports.register = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        let item = new Catalog({ name, description, price });
        item = await item.save();
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
