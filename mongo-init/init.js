db = db.getSiblingDB('DATA_DB_300');

//collections
db.createCollection('customer_collections');
db.createCollection('loan_products');
db.createCollection('loan_applications');
db.createCollection('loan_collections');
db.createCollection('compliance_collections');


db.customer_collections.insertOne({ initialized: true });
db.loan_products.insertOne({ initialized: true });
db.loan_applications.insertOne({ initialized: true });
db.loan_collections.insertOne({ initialized: true });
db.compliance_collections.insertOne({ initialized: true });