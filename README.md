# React Frequently Asked Question board

React FAQ board is a simple app, where you can add new questions, comment those questions and rate those comments!
The top rated comment is shown on the main board, so answers can be seen quickly for a question.

## How does it work?

It's easy and straight forward, first you must "login" to the application, then you are redirected to the front page which is the "main board" where all the questions are. If you click a question, you will be shown the question details page, where you can see all the comments for it, add comments and rate them. The top rated comment is shown below the question on the main board. Also, on the question details page, the comments are sorted with their scorings. Also, all this info is explained on the main board when you start the application.

### Why does this repository exist?

I created this app to learn React and to show what I can do with react.

### Is there any other things used than React?

Yes! When I started creating this application, I decided to use Redux for state handling, React-Router to make it as a single page application, Transition Groups to add some animations and TypeScript.

### Possible features that could be added

- Backend, to actually store some data, which could be shared with other users.
- Only single upvote/downvote for user per comment
- OAuth (or something similar) to make "login" an actual login
- Different roles for users
    - Admin to delete anything
    - "Normal" user to only delete own questions and comments
- Maybe an feature to hide/delete comments with low score

### How to run after cloning?

Navigate to the folder with your terminal of choice and run `npm install` and `npm start`  
Developed with node.Js v16.13.0, I don't quarantee it working with newer or older versions.

### Noticed an issue with the code?

Create a new issue and I will see to it, and propably do something about it.  
Or, if you don't want to open an issue you can contact me on twitter @Void_Cooper
