const fs = require("fs");

const path = "data.json";


function getCurrentFormattedDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const createCommand = (req, res) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`${path} does not exist`);
      
      // Initialize ID file
      fs.writeFileSync(idFilePath, JSON.stringify({ lastId: 0 }), 'utf8');
      
      const newId = 1;
      const newCommand = {
        id: newId,
        product: req.body.product,
        name: req.body.fullName,
        phone: req.body.phoneNumber,
        wilaya: req.body.wilaya,
        commune: req.body.commune,
        price: req.body.price,
        shippingPrice: req.body.shipping,
        total: req.body.total,
        qte: req.body.qte,
        orderTime: getCurrentFormattedDateTime(),
      };

      fs.writeFileSync(
        path,
        JSON.stringify([newCommand]),
        'utf8'
      );
      res.status(200).json({ message: "first command saved" });
    } else {
      console.log(`${path} exists`);
      
      const data = fs.readFileSync(path, 'utf8'); // Read existing data
      const parsedData = JSON.parse(data); // Parse existing data

      // Read last ID from id.json
      let idData;
      try {
        idData = JSON.parse(fs.readFileSync(idFilePath, 'utf8'));
      } catch (err) {
        idData = { lastId: 0 };
      }
      
      const newId = idData.lastId + 1;
      const newCommand = {
        id: newId,
        product: req.body.product,
        name: req.body.fullName,
        phone: req.body.phoneNumber,
        wilaya: req.body.wilaya,
        commune: req.body.commune,
        price: req.body.price,
        shippingPrice: req.body.shipping,
        total: req.body.total,
        qte: req.body.qte,
        orderTime: getCurrentFormattedDateTime(),
      };
      
      parsedData.push(newCommand);

      // Update last used ID in id.json
      fs.writeFileSync(idFilePath, JSON.stringify({ lastId: newId }), 'utf8');

      // Write updated data back to data.json
      fs.writeFileSync(path, JSON.stringify(parsedData), 'utf8');
      res.status(200).json({ message: "command saved" });
    }
  });
};

const readCommands = (req, res) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`${path} does not exist`);
      res.status(404).json({ data: [] });
    } else {
      console.log(`${path} exists`);
      const data = fs.readFileSync("data.json", "utf8"); // <= JSON
      const parsedData = JSON.parse(data); // list
      res.status(200).json({ data: parsedData });
    }
  });
};

module.exports = { createCommand, readCommands };
