const jf = require("jsonfile");

const ORDERS_JSON_FILE = "HW/HW04_MicroServicesArchitecture/data/orders.json";

const getOrdersFromFile = () => jf.readFile(ORDERS_JSON_FILE);

module.exports = {
    getOrdersFromFile
}