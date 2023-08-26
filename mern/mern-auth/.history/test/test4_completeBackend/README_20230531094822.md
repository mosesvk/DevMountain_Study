## test 3 - Connect to Mongoose

</br>

<details open>
    <summary>Mongoose Setup</summary>
    <ul>
        <li>use a config file called 'db.js' to connect to mongoose. make sure the .env file is in the right path</li>
        <li>use mongoose.connect to connect to mongoDB string</li>
        <li>use a try catch to see if this connection works</li>
        <li>if it doesn't work. use console.error along with process.exit(1) which indicates a failure to stop nodejs processing</li>
        <li>create a mongoose model for creating the user.</li>
        <ul>
            <li>use mongoose.Schema({})</li>
            <li>each User will have a property of name, email, and password</li>
            <li>each property will be a string type, required true </li>
            <li>only the email property will be unique</li>
            <li>make sure to include timestamps as true</li>
        </ul>

    </ul>
</details>


