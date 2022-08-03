const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectMongoDb = require("./config/connectMongoDb");
const data = require("./data");
const person = require("./models/Person");

const app = express();
Port = process.env.Port || 3000;

//Installing and setting up Mongoose
connectMongoDb();


//Create and Save a Record of a Model:

person1 = new person({
  name: "Kels",
  age: 16,
  favoriteFoods: ["Akpu", "Ukazi Soup"],
});
person1.save(function (err, data) {
  if (err) return console.error(err);
  console.log("Data inserted succussfully : ", data);
});


//Create Many Records with model.create()

(async () => {
  try {
    const result = await person.create([
      { name: "Eno", age: 40, favoriteFoods: ["Banga and Starch", "Egg and Yam"] },
      { name: "Samuel", age: 13, favoriteFoods: ["Eba", "Rice"] },
      { name: "Enyinna", age: 30, favoriteFoods: ["Oat meal", "Pepper Soup"] },
    ]);
    console.log("Multiple records added successfully");
  } catch (error) {
    console.log(error);
  }
})();


//Use model.find() to Search Your Database 

(async () => {
  try {
    const result = await person.find({ name: "Kels" });
    console.log("Result of search : ", result);
  } catch (error) {
    console.log(error);
  }
})();


//Use model.findOne() to Return a Single Matching Document from Your Database

(async () => {
  try {
    const result = await person.findOne({ name: "Amala" });
    console.log("Result of search with findone : ", result);
  } catch (error) {
    console.log(error);
  }
})();


//Use model.findById() to Search Your Database By _id

/*(async () => {
  try {
    const result = await person.findOne({ _id: "60fabe8c17e2743f20cb42a" });
    console.log("Result of search with Id : ", result);
  } catch (error) {
    console.log(error);
  }
})();
*/

//Perform Classic Updates by Running Find, Edit, then Save

/*(async () => {
  try {
    const result = await person.findOne({ _id: "60fabe8c17e2743f20cb42a4" });
    result.favoriteFoods.push("hamburger");
    result.markModified("favoriteFoods");
    await result.save();
  } catch (error) {
    console.log(error);
  }
})();
*/

//Perform New Updates on a Document Using model.findOneAndUpdate()

(async () => {
  try {
    const result = await person.findOneAndUpdate(
      { name: "Jessica" },
      { $set: { age: 28 } },
      { new: true }
    );
    console.log("Result of findOneAndUpdate : ", result);
  } catch (error) {
    console.log(error);
  }
})();


//Delete One Document Using model.findByIdAndRemove

/*(async () => {
  try {
    const result = await person.findByIdAndRemove({
      _id: "60fabf0f6064770808257df6",
    });
    console.log("Result of findByIdAndRemove : ", result);
  } catch (error) {
    console.log(error);
  }
})();
*/

//MongoDB and Mongoose - Delete Many Documents with model.remove()

/*(async () => {
  try {
    person.remove({ name: "Isaac" }, function (err, res) {
      if (err) console.log(err);
      else console.log("Result of remove : ", res);
    });
  } catch (error) {
    console.log(error);
  }
})();
*/

//Chain Search Query Helpers to Narrow Search Results

(async () => {
  try {
    await person
      .find({ favoriteFoods: "Cereal" })
      .sort({ age: 1})
      .limit(2)
      .select({ age: false })
      .exec()
      .then((data) => console.log("The last result : ", data))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
})();


//Creation of a listener for the app

app.listen(Port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`server is listening on port ${Port}`);
  }
});