const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const GuardSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			minlength: [3, "First Name must be 3 characters long"]
		},
		lastName: {
			type: String,
			required: true,
			minlength: [3, "Last Name must be 3  characters long"]
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minlength: [5, "Email must be 5  characters long"]
		},
		password: {
			type: String,
			required: true,
			minlength: [4, "Password must be 4  characters long"]
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		pic: {
			type: String,
			required: true,
			default: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
		},
},
	{ timestamps: true }
);

GuardSchema.pre('save', async function (next) {
	if(!this.isModified('password')){
		next()
	}

	const salt = await bcrypt.genSalt(3);
	this.password = await bcrypt.hash(this.password, salt);
});

GuardSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
}



const Guard = mongoose.model("Guard", GuardSchema);

module.exports = Guard;