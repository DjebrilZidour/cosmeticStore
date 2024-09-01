const fs = require('fs');
const path = 'data.json';
const idFilePath = 'id.json';

function getCurrentFormattedDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const createCommand = (req, res) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`${path} does not exist`);

      // Initialize ID file
      try {
        fs.writeFileSync(idFilePath, JSON.stringify({ lastId: 0 }), 'utf8');
      } catch (error) {
        console.error('Error initializing id.json:', error);
        return res.status(500).json({ message: "Error initializing ID file" });
      }

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

      try {
        fs.writeFileSync(path, JSON.stringify([newCommand]), 'utf8');
        res.status(200).json({ message: "First command saved" });
      } catch (error) {
        console.error('Error writing to data.json:', error);
        res.status(500).json({ message: "Error saving command" });
      }
    } else {
      console.log(`${path} exists`);

      try {
        const data = fs.readFileSync(path, 'utf8'); // Read existing data
        const parsedData = JSON.parse(data); // Parse existing data

        let idData;
        try {
          idData = JSON.parse(fs.readFileSync(idFilePath, 'utf8'));
        } catch (err) {
          console.error('Error reading id.json:', err);
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
        try {
          fs.writeFileSync(idFilePath, JSON.stringify({ lastId: newId }), 'utf8');
        } catch (error) {
          console.error('Error updating id.json:', error);
          return res.status(500).json({ message: "Error updating ID file" });
        }

        // Write updated data back to data.json
        try {
          fs.writeFileSync(path, JSON.stringify(parsedData), 'utf8');
          res.status(200).json({ message: "Command saved" });
        } catch (error) {
          console.error('Error writing to data.json:', error);
          res.status(500).json({ message: "Error saving command" });
        }
      } catch (error) {
        console.error('Error reading or parsing data.json:', error);
        res.status(500).json({ message: "Error processing command" });
      }
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
      try {
        const data = fs.readFileSync(path, 'utf8');
        const parsedData = JSON.parse(data);
        res.status(200).json({ data: parsedData });
      } catch (error) {
        console.error('Error reading or parsing data.json:', error);
        res.status(500).json({ data: [], message: "Error reading commands" });
      }
    }
  });
};

module.exports = { createCommand, readCommands };
