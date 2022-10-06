const fs = require('fs');

// this is to overwrite our JSON file to persist the data.
// we only need to overwrite data if...
    // POST / CREATE / DELETE / UPDATE

const saveToDatabase = (DB) => {
  fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {
    encoding: 'utf-8',
  });
};

module.exports = { saveToDatabase }