const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('cors');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//<-- START Schemas -->

//236 Schemas
const D236aSchema = new mongoose.Schema({
  id: String,
  game: String,
  size: Number
},
  { collection: '236_1' });
const D236a = mongoose.model('236display1', D236aSchema);

const D236bSchema = new mongoose.Schema({
  id: String,
  game: String,
  size: Number
},
  { collection: '236_2' });
const D236b = mongoose.model('236display2', D236bSchema);

const D2361bSchema = new mongoose.Schema({
  id: Number,
  game: String,
  size: Number
},
  { collection: '236_1a' });
const D2361b = mongoose.model('236display1b', D2361bSchema);

const D2362bSchema = new mongoose.Schema({
  id: Number,
  game: String,
  size: Number
},
  { collection: '236_2a' });
const D2362b = mongoose.model('236display2b', D2362bSchema);

//031 Schemas
const D031aSchema = new mongoose.Schema({
  id: String,
  game: String,
  size: Number
},
  { collection: '031_1' });
const D031a = mongoose.model('031display1', D031aSchema);

const D031bSchema = new mongoose.Schema({
  id: String,
  game: String,
  size: Number
},
  { collection: '031_2' });
const D031b = mongoose.model('031display2', D031bSchema);

//<-- END Schemas -->

//<-- START Routes -->

//<-- START Display GET Routes -->

//236
app.get("/236/display1", async (req, res) => {
  try {
    const display236a = await D236a.find().sort({ id: 1 });
    res.json(display236a);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

app.get("/236/display1b", async (req, res) => {
  try {
    const display2361b = await D2361b.find().sort({ id: 1 });
    res.json(display2361b);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});

app.get("/236/display2", async (req, res) => {
  try {
    const display236b = await D236b.find().sort({ id: 1 });
    res.json(display236b);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };
});
app.get("/236/display2b", async (req, res) => {
  try {
    const display2362b = await D2362b.find().sort({ id: 1 });
    res.json(display2362b);
  } catch (err) {
    res.status(500).json({ message: err.message });
  };

  //031
  app.get("/031/display1", async (req, res) => {
    try {
      const display031a = await D031a.find().sort({ id: 1 });
      res.json(display031a);
    } catch (err) {
      res.status(500).json({ message: err.message });
    };
  });

  app.get("/031/display2", async (req, res) => {
    try {
      const display031b = await D031b.find().sort({ id: 1 });
      res.json(display031b);
    } catch (err) {
      res.status(500).json({ message: err.message });
    };
  });

  //END Display GET Routes

  //START Ticket Size PUT Routes

  //START 236

  //Display 1 Decrement Ticket #
  app.put("/236/display1/dec/:id", async (req, res) => {
    try {
      const dec236a = await D236a.updateOne({ id: req.params.id },
        { $inc: { size: -1 } });
      res.json(dec236a);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //Display 1 Increment Ticket #
  app.put("/236/display1/inc/:id", async (req, res) => {
    try {
      const inc236a = await D236a.updateOne({ id: req.params.id },
        { $inc: { size: 1 } });
      res.json(inc236a);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //Display 2 Decrement Ticket #
  app.put("/236/display2/dec/:id", async (req, res) => {
    try {
      const dec236b = await D236b.updateOne({ id: req.params.id },
        { $inc: { size: -1 } });
      res.json(dec236b);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //Display 2 Increment Ticket #
  app.put("/236/display2/inc/:id", async (req, res) => {
    try {
      const inc236b = await D236b.updateOne({ id: req.params.id },
        { $inc: { size: 1 } });
      res.json(inc236b);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //END 236

  //START 031

  //Display 1 Decrement Ticket #
  app.put("/031/display1/dec/:id", async (req, res) => {
    try {
      const dec031a = await D031a.updateOne({ id: req.params.id },
        { $inc: { size: -1 } });
      res.json(dec031a);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //Display 1 Increment Ticket #
  app.put("/031/display1/inc/:id", async (req, res) => {
    try {
      const dec031a = await D031a.updateOne({ id: req.params.id },
        { $inc: { size: 1 } });
      res.json(dec031a);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //Display 2 Decrement Ticket #
  app.put("/031/display2/dec/:id", async (req, res) => {
    try {
      const dec031b = await D031b.updateOne({ id: req.params.id },
        { $inc: { size: -1 } });
      res.json(dec031b);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //Display 2 Increment Ticket #
  app.put("/031/display2/inc/:id", async (req, res) => {
    try {
      const inc031b = await D031b.updateOne({ id: req.params.id },
        { $inc: { size: 1 } });
      res.json(inc031b);
    } catch (error) {
      res.json({ message: error })
    }
  });

  //END 031

  //END Ticket Size PUT Routes


  app.put("/236/change/:id", async (req, res) => {
    try {
      const change236a = await D236a.findByIdAndUpdate({ id: req.params.id },
        { $set: { game: req.body.game, size: req.body.size } });
      res.json(change236a);
    } catch (error) {
      res.status(500).send(error);
    }
  });
});