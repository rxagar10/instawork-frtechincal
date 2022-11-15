# Documentation for Instawork Frontend Take-Home Assignment
by Rishi Agarwal

## <b> Building the Project </b>
<p> This project is built using ReactJS and it is meant to display three screens for the user to view, edit and add team members to the system. All data is stored on the client and manages local state through the useState() hooks. General Structure of the app starts with the App component which has a child component as Main.js. Main.js has 3 child components: List.js, Add.js, and Edit.js. </p>

### Main.js Component

#### <i> Variables </i>
<p> The Main.js component establishes two state variables: members and id. The members variable is an array of objects that contains the information for every member in the system. This information includes: first and last name, email address, phone number, role, and a unqiue id for that specific team member. The id state variable is a variable that keeps track of which new id needs to be used when adding a new member to the system. The inital state of the id is 0.
</p>

#### <i> Structure </i>
<p>
The component uses the 'react-router-dom' toolkit to establish the Route paths of each of the child components. Where the List path is "/", the Add path is "/add" and the Edit path is "/edit". These also establish the props that need to be sent to each of the child components
</p>


### List.js Component

#### <i> Variables and Methods </i>
<p> 
The List.js component provides the user a view of all the team members in the system. There is a button at the top that directs you to adding a member to the system and then followed by statement of the number of members in your system and then a list of all of the members in the team with all of thier relevant information on display and if a member is a admin it will indicate as such next to their name. Each team member is a link to the edit page where if you select them you will be able to edit their information in the system.
</p>

#### <i> Structure </i>
<p>
In terms of the structure of the component there is a method displayName which takes in a member and determines how to display their name on the page if they are an admin or not. There is a variable called memberlist which maps over the member list to create a list of Links and divs for each member to be displayed on the page when rendered. If the link is selected the edit pathname will have the id of the member selected a query parameter for the edit page to access. When the component is rendered there is the button to add members, the header information and then the memberlist as an unordered list
</p>

### Add.js Component

#### <i> Variables and Methods </i>
<p> 
The Add.js component is designed so that the user can add a team member to the system after inputting the information. There are state variables for each of the fields that are used as information for a team member. There is also a method named addMember that is called when the "Save" button is called at the bottom of the page. Which will add the new member to members state variable which stores all of the members. This method also increases the id state variable
</p>

#### <i> Structure </i>
<p>
When the Add.js page is rendered there is header to indicate what the page is and a cancel button at the top of the page that allows the user to exit back to the List page. Then is followed by input fields to enter first name, last name, email, phone number, and radio buttons to select which role the member will be (defaulting at regular). As changes are made in the input field the state variable is updated onChange. Lastly is a save button that adds the user to the system and redirects the user back to the list page.
</p>

### Edit.js Component

#### <i> Variables and Methods </i>
<p> 
The Edit.js component is a page that allows the user to edit the information of the user they selected on the first page. The page first uses the id in searchParams to find the member in the members state variable. The each of the state variables that initalized with the current information for the member to be edited. There is a delete member method which will remove the editing member from the list of members which is called when the delete button is clicked. There is also a saveEdits method which will remove the current version of the member in the system and replace them with the newer version in the system that was provided from the fields on the page. 
</p>

#### <i> Structure </i>
<p> 
When the Edit.js page is rendered it is quite similar to the Add.js page. There is a cancel button that takes the user back to the list page. Followed by the headers to indicate what page the user is on and then all of the input fields pre-filled with the current information stored for the member being edited. At the bottom of the page there are two buttons delete and save. The delete button will remove the current member being edited and return back to the List page and the save button will save the current information filled out for the user and return back to the list page. 
</p>

## <b> Testing the Project </b>
<p>
The project was tested mainly through using the Web developer tools available in Safari and Google chrome. This testing was mainly to make sure that visually the pages were being rendered correctly and that the actual interactions with page were going as I planned to be. Another form of testing for this project was placing console.log statements throuhgout the program. This was particularly useful when the page was rendering incorrectly or not all so these statements gave me insight into how the project was acutally behaving. </p>

## <b> Other Notes </b>
Before I submit I want to mention some short-comings in the project and features I would've wanted to add to the project
<ol> 
    <li> Currently this iteration has no styling and it quite unappealing to look at. I spent the majority of my time implementing the functionality of the project and combined with the class scheuling and TA work, I was unable to address the styling on the project. So I defintelty would have wanted to make the pages look better than just the vanilla look that they have right now</li>
    <li> One feature that I would've wanted to implement was if there was missing information on the Add member or edit pages. Currently the add and edit pages do not care if you have all the information in the input fields. This practically is an issue and something I would've wanted to add</li>

</ol>
