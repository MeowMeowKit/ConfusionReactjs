const express = require("express");
const app = express();
const path = require("path");
const port = 3003;
app.get("/dishes", (req, res) => {
   res.send([
      {
         id: 0,
         name: "Uthappizza",
         image: "images/pizza.jpg",
         category: "mains",
         label: "Hot",
         price: "4.99",
         featured: true,
         description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
      },
      {
         id: 1,
         name: "Zucchipakoda",
         image: "images/pakoda.jpg",
         category: "appetizer",
         label: "",
         price: "1.99",
         featured: false,
         description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
      },
      {
         id: 2,
         name: "Vadonut",
         image: "images/vada.jpg",
         category: "appetizer",
         label: "New",
         price: "1.99",
         featured: false,
         description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
      },
      {
         id: 3,
         name: "ElaiCheese Cake",
         image: "images/cheesecake.jpg",
         category: "dessert",
         label: "",
         price: "2.99",
         featured: false,
         description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
      },
   ]);
});
app.get("/comments", (req, res) => {
   res.send([
      {
         id: 0,
         dishId: 0,
         rating: 5,
         comment: "Imagine all the eatables, living in conFusion!",
         author: "John Lemon",
         date: "2012-10-16T17:57:28.556094Z",
      },
      {
         id: 1,
         dishId: 0,
         rating: 4,
         comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
         author: "Paul McVites",
         date: "2014-09-05T17:57:28.556094Z",
      },
      {
         id: 2,
         dishId: 0,
         rating: 3,
         comment: "Eat it, just eat it!",
         author: "Michael Jaikishan",
         date: "2015-02-13T17:57:28.556094Z",
      },
      {
         id: 3,
         dishId: 0,
         rating: 4,
         comment: "Ultimate, Reaching for the stars!",
         author: "Ringo Starry",
         date: "2013-12-02T17:57:28.556094Z",
      },
      {
         id: 4,
         dishId: 0,
         rating: 2,
         comment: "It's your birthday, we're gonna party!",
         author: "25 Cent",
         date: "2011-12-02T17:57:28.556094Z",
      },
      {
         id: 5,
         dishId: 1,
         rating: 5,
         comment: "Imagine all the eatables, living in conFusion!",
         author: "John Lemon",
         date: "2012-10-16T17:57:28.556094Z",
      },
      {
         id: 6,
         dishId: 1,
         rating: 4,
         comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
         author: "Paul McVites",
         date: "2014-09-05T17:57:28.556094Z",
      },
      {
         id: 7,
         dishId: 1,
         rating: 3,
         comment: "Eat it, just eat it!",
         author: "Michael Jaikishan",
         date: "2015-02-13T17:57:28.556094Z",
      },
      {
         id: 8,
         dishId: 1,
         rating: 4,
         comment: "Ultimate, Reaching for the stars!",
         author: "Ringo Starry",
         date: "2013-12-02T17:57:28.556094Z",
      },
      {
         id: 9,
         dishId: 1,
         rating: 2,
         comment: "It's your birthday, we're gonna party!",
         author: "25 Cent",
         date: "2011-12-02T17:57:28.556094Z",
      },
      {
         id: 10,
         dishId: 2,
         rating: 5,
         comment: "Imagine all the eatables, living in conFusion!",
         author: "John Lemon",
         date: "2012-10-16T17:57:28.556094Z",
      },
      {
         id: 11,
         dishId: 2,
         rating: 4,
         comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
         author: "Paul McVites",
         date: "2014-09-05T17:57:28.556094Z",
      },
      {
         id: 12,
         dishId: 2,
         rating: 3,
         comment: "Eat it, just eat it!",
         author: "Michael Jaikishan",
         date: "2015-02-13T17:57:28.556094Z",
      },
      {
         id: 13,
         dishId: 2,
         rating: 4,
         comment: "Ultimate, Reaching for the stars!",
         author: "Ringo Starry",
         date: "2013-12-02T17:57:28.556094Z",
      },
      {
         id: 14,
         dishId: 2,
         rating: 2,
         comment: "It's your birthday, we're gonna party!",
         author: "25 Cent",
         date: "2011-12-02T17:57:28.556094Z",
      },
      {
         id: 15,
         dishId: 3,
         rating: 5,
         comment: "Imagine all the eatables, living in conFusion!",
         author: "John Lemon",
         date: "2012-10-16T17:57:28.556094Z",
      },
      {
         id: 16,
         dishId: 3,
         rating: 4,
         comment:
            "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
         author: "Paul McVites",
         date: "2014-09-05T17:57:28.556094Z",
      },
      {
         id: 17,
         dishId: 3,
         rating: 3,
         comment: "Eat it, just eat it!",
         author: "Michael Jaikishan",
         date: "2015-02-13T17:57:28.556094Z",
      },
      {
         id: 18,
         dishId: 3,
         rating: 4,
         comment: "Ultimate, Reaching for the stars!",
         author: "Ringo Starry",
         date: "2013-12-02T17:57:28.556094Z",
      },
      {
         id: 19,
         dishId: 3,
         rating: 2,
         comment: "It's your birthday, we're gonna party!",
         author: "25 Cent",
         date: "2011-12-02T17:57:28.556094Z",
      },
      {
         dishId: 0,
         rating: "2",
         author: "Nikhil",
         comment: "Awsome !!",
         date: "2018-07-01T09:21:52.901Z",
         id: 20,
      },
   ]);
});
// Serve any static files
app.use(express.static(path.join(__dirname, "/build")));
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
