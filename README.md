# Fetch Reward's Frontend Take-Home Exercise

Ross Swanson | 1.0.0 | last updated: 11/7/22

This app creates a form for taking in user information. To initialize the form, the app sends a GET request to the `frontend-take-home` API. The API returns an object with occupations and US states which are used to build options for user select inputs. The form also takes in text inputs for user name, email, and password.

On submit, the application checks that all fields have input values, hashes the password value, and sends the data to the `frontend-take-home` api in a POST request.

On success, the app displays a success message. If any errors exist, an error message is displayed.

## Data objects
The `frontend-take-home` returns data in the following shape:
```
{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}

```

The `frontend-take-home` expects to recieve data in the following shape:
```
{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
```

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app uses [Axios](https://www.npmjs.com/package/axios) to send and recieve data from the `frontend-take-home` api

## Further improvements

-  Additional form field validation should be added to ensure email addresses are given in the email field
- The password hashing function is currently just a placeholder and does not do anything but return the string 'TRIVIALLYHASHEDPASSWORD'; this needs to be updated.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
