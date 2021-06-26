const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios')

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT);

    //<-- 236 DISPLAY 1 ROUTES -->//

  //Display 1 mongoose Schema
  //How should I include data to copy from UPC scan??
  //UPC is attached to 'tickets' collection

const Display1Schema = new mongoose.Schema({ 
  id: String, 
  game: String, 
  size: Number
  },
  { collection: '236_1' });
  const Display1 = mongoose.model('display1', Display1Schema);

  //Get all slots for Display1

app.get("/236/display1", async (req, res) => {
  try {
      const display1 = await Display1.find().sort({id: 1});
      res.json(display1);
    } catch (err) {
      res.status(500).json({message: err.message});
  };
});

const D031aSchema = new mongoose.Schema({ 
  id: String, 
  game: String, 
  size: Number
  },
  { collection: '031_1' });
  const D031a = mongoose.model('031display1', D031aSchema);

  //Get all slots for Display1

app.get("/031/display1", async (req, res) => {
  try {
      const display031a = await D031a.find().sort({id: 1});
      res.json(display031a);
    } catch (err) {
      res.status(500).json({message: err.message});
  };
});

const D031bSchema = new mongoose.Schema({ 
  id: String, 
  game: String, 
  size: Number
  },
  { collection: '031_2' });
  const D031b = mongoose.model('d031b', D031bSchema);

  //<-- DISPLAY 2 ROUTES -->//

  //Get all slots for Display2

app.get("/031/display2", async (req, res) => {
  try {
      const d031b = await D031b.find().sort({id: 1});
      res.json(d031b);
    } catch (err) {
      res.status(500).json({message: err.message});
  };
});
app.put("/031/display2/updateSize/:id", async (req, res) => {
  try {
      const updateSize031b = await D031b.updateOne({id: req.params.id},
      { $inc: {size: -1}});
      res.json(updateSize031b);
    } catch (error) {
      res.json({message: error})
  }
});

app.put("/031/display1/updateSize/:id", async (req, res) => {
  try {
      const updateSize031a = await D031a.updateOne({id: req.params.id},
      { $inc: {size: -1}});
      res.json(updateSize031a);
    } catch (error) {
      res.json({message: error})
  }
});



  //Get Display1 Slot by ID

app.get("/236/display1/:id", async (req, res) => {
  try {
      const slotId = await Display1.findOne({id: req.params.id});
      res.json(slotId);
    } catch (error) {
      res.json({message: error})
  }
});

  // Update Display1 Ticket #

app.put("/236/display1/updateSize/:id", async (req, res) => {
  try {
      const updateSize = await Display1.updateOne({id: req.params.id},
      { $inc: {size: -1}});
      res.json(updateSize);
    } catch (error) {
      res.json({message: error})
  }
});

  // Update Display1 Game

app.put("/236/display1/updateGame/:id", async (req, res) => {
  try {
      const updateGame = await Display1.updateOne({_id: req.params.id},
      { $set: {game: req.body.game}});
      res.json(updateGame);
    } catch (error) {
      res.json({message: error})
      }
    });

  //<-- END DISPLAY 1 -->//


  //<-- DISPLAY 2 SCHEMA -->//
    
const Display2Schema = new mongoose.Schema({ 
  id: String, 
  game: String, 
  size: Number
  },
  { collection: '236_2' });
  const Display2 = mongoose.model('display2', Display2Schema);

  //<-- DISPLAY 2 ROUTES -->//

  //Get all slots for Display2

app.get("/236/display2", async (req, res) => {
  try {
      const display2 = await Display2.find().sort({id: 1});
      res.json(display2);
    } catch (err) {
      res.status(500).json({message: err.message});
  };

  
  //Get Display2 Slot by ID

app.get("/236/display2/:id", async (req, res) => {
  try {
      const slotId2 = await Display2.findOne({id: req.params.id});
      res.json(slotId2);
    } catch (error) {
      res.json({message: error})
  }
});

  // Update Display2 Ticket #

app.put("/236/display2/updateSize/:id", async (req, res) => {
  try {
      const updateSize2 = await Display2.updateOne({id: req.params.id},
      { $inc: {size: -1}});
      res.json(updateSize2);
    } catch (error) {
      res.json({message: error})
  }
});

  // Update Display1 Game

      //<-- 031 DISPLAY 1 ROUTES -->//




app.put("/236/display1/updateGame/:id", async (req, res) => {
  try {
      const updateGame2 = await Display2.updateOne({_id: req.params.id},
      { $set: {game: req.body.game}});
      res.json(updateGame2);
    } catch (error) {
      res.json({message: error})
      }
    });
});