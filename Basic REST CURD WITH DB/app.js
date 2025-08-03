const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Listing = require("./modules/listing")
const path = require("path");
const methodOverride = require("method-override");

app.listen("3004",()=>{
  console.log("Server is running on port 3004");
})

// mongoose connection
const Mongo_URL = "mongodb://localhost:27017/mydatabase";
async function main(){
  await mongoose.connect(Mongo_URL)
}
main().then(()=>{
  console.log("MongoDB connected successfully");
})
.catch((err)=>{
  console.error("MongoDB connection error:", err);
})
// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// method override for PUT and DELETE requests
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{
  res.send("app is listing ")
})

app.get("/Listings",async(req,res)=>{
  const ListingSchema = new Listing({
    name: "Rishu",
    number: 123,
    city: "Bhopal"
  })
  await ListingSchema.save()
  res.send("Listing created successfully")
})

app.get("/showdata",async(req,res)=>{
  const alldata=await Listing.find();
  res.render("./listing/index.ejs",{alldata});
})

// ========================
app.get("/addListing", (req, res) => {
  res.render("listing/addListing.ejs");
});

app.post("/newdata", async (req, res) => {
    try {
        const { name, number, city } = req.body;
        const newdatalisting = new Listing(req.body);
        await newdatalisting.save();
        console.log("Data was saved");
        const alldata = await Listing.find();
        res.render("./listing/index.ejs", { alldata });
    } catch (err) {
        console.error( err);
    }
});

// update
app.get("/Listings/:id/edit",async(req,res)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("./listing/edit.ejs", {listing});
})

// Handle PUT request for updating a listing
app.put("/Listings/:id", async (req, res) => {
  let { id } = req.params;
  const { name, number, city } = req.body;
  
  try {
    await Listing.findByIdAndUpdate(id, { name, number, city });
    res.redirect("/showdata");
  } catch (err) {
    console.error( err);
  }
});

// Delete  

app.delete("/Listings/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await Listing.findByIdAndDelete(id);
    res.redirect("/showdata");
  } catch (err) {
    console.error( err);
  }
});

 

