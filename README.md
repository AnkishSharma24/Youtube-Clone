# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



--------------------------------------------------------------------------------------------------------------------------------
                                                        PROJECT START

# STEP 1
In terminal change directory to (cd Desktop)
-> npx create-react-app youtube-clone

# STEP 2

Setting up tailwind

# STEP 3
Create all components as per requirements.

# STEP 4
Installing Redux toolkit for Sidebar collapse and emerge.
-> npm install @reduxjs/toolkit
-> npm install react-redux

# STEP 5


# STEP

HIGHER ORDER FUNCTION

Takes a function and returns a function. Mainly used for slight modification.

Example -> here Ad video card is higher order function.
export const AdVideoCard = ({info})=>{

    return(
        <div className=" border-[5px] border-red-600 rounded-lg">     
        <VideoCard info ={info}/>
      <h3>This Ad is sponsored by Apple🍎</h3>
        </div>
    )}


# STEP

Debouncing - Debouncing is a technique in programming that helps improve the performance of web applications by controlling the frequency at which time-consuming tasks are triggered. If a task is triggered too often—like when a user types quickly or rapidly clicks a button—it can lead to performance issues. 

LINK - https://www.geeksforgeeks.org/debouncing-in-javascript/#:~:text=Debouncing%20is%20a%20technique%20in,can%20lead%20to%20performance%20issues.

Performance is improved
typing slow (diff between key strokes)  = 200ms
typing fast (diff between key strokes)  = 30ms (does not require suggestions i.e. API calls not required for suggestions)


# STEP
 
 Using redus as a cache to save the above made API calls 

 Cache:

 time complexity to find in an array O(n)              [i, ip, iph, ipho, iphon, iphone]
 time complexity to find in an object is O(1)           
   {  i:
      ip:
      iph:
      ipho:
   } 

Created searchSlice.js component and aadded cache data

 dispatch(
                cacheResults(
                    {[searchQuery]: json[1],}))
        }
and save it so that our app does not need to make API calls again and again for the same results. Thus, improving performance.

# STEP

Making n level nesting comments section

Use recursions to create more comments
const CommentList =({comments}) =>{
    // do not use index as key while using map
    return (comments.map((comment, index)=> (
        <div>
        <Comment key={index} data={comment}/>
          <div className="pl-5 border-l-2 border-gray-400">
            <CommentList comments={comment.replies} />
           </div>
        </div>
   ) )
)}

NOTE: above is a example of n level nesting