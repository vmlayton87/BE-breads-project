// require mongoose
const mongoose = require(`mongoose`)

// create a shorhand for the Schema constructor
const {Schema} = mongoose

// schema for bread. Used to create an array of bread objects
const breadSchema = new Schema ({
  // schema will be written here
  name: { type: String, required:true },
  hasGluten: Boolean,
  image:{ type: String, default: `http://placekitten.com/200/400` },
})

// creating a model named Bread out of the schema
const Bread = mongoose.model('Bread', breadSchema)

// Let's break down what we just wrote.
// 1.	const Bread: The variable we are saving our model to. Conventionally, it should be capitalized and use the singular version of the collection the model is for.
// 2.	mongoose.model: A Mongoose method that creates a model for us based on the arguments we pass it. This is what will later allow us to interact with our Mongo database.
// 3.	Bread: The first argument we passed is the name of the collection we want to connect this model to. As with the variable, this should be capitalized and use the singular version of the collection name. In our case, we want to connect it to a collection named breads, so that becomes Bread when singular and capitalized.
// 4.	breadSchema: The second argument we passed is the schema we want our model to use.

module.exports = Bread








// module.exports = [
//     {
//       name: 'Rye',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'French',
//       hasGluten: true,
//        image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//       name: 'Gluten-Free',
//       hasGluten: false,
//       image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'Pumpernickel',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     }
//   ]
  