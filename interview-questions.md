# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

Researched answer:

- A developer can update a database to include a foreign key by first creating a migration. The migration should reference the change that is being made (editing a column, updating a column, etc), and then add the code required to perform the change in the migration file. After the migration file has been updating to include the correct code, the user inputs rails db:migrate into the console to update the schema. The foreign key would be named cohort_id. The foreign key would be located on the Student model as a student can have only one cohort, but the Cohort model will have many students.

2. Which RESTful routes must always be passed params? Why?

Your answer:

-

Researched answer:

- The RESTful routes that always need to be passed params are `show`, `update`, `destroy`. The reason is because those methods would need to know what hashes the user wants to execute upon while `index` is everything and `create` is making something completely new.

3. Name three rails generator commands. What is created by each?

Your answer: rails generate db:migrate, rails generate resource, and rails generate

Researched answer:

- rails g migration: Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables.

- rails g model: A Rails Model is a Ruby class that can add database records (think of whole rows in an Excel table), find particular data you're looking for, update that data, or remove data.

- rails g controller: The Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model. The controller is also a home to a number of important ancillary services. It is responsible for routing external requests to internal actions.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students

- def index -- returns all the enteries in the students table

action: "POST" route: /students

- def create -- create a new instance in the the BD tablr students

action: "GET" route: /students/new

- def new -- return a form that we will use to create a student

action: "GET" route: /students/2

-

action: "GET" route: /students/2/edit

- def edit -- edit

action: "PATCH" route: /students/2

- def update -- update the instance of the student table where id = 2

action: "DELETE" route: /students/2

- def destroy -- deleting the instance of the student table where id = 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

   1. As a user, I can see a webpage where, "Do It" is in bold and centered at the top of the page.

   2. As a user, I see 4 links. Under the "Do It" header.

      - My Lists
      - Create a new Do It list
      - Edit Lists
      - About the creater of "Do It lists."

   3. As a user, I can see a link on the homepage which says, "My Lists".

   4. As a user, I can click on the "My Lists" link and it takes me to another webpage where I see lists that were created.

   5. As a user, below the header "My Lists", I can see my lists with their title, as links.

   6. As a user, I can click on any of the links and I am navigated to another webpage that shows the list name (as the header), tasks to do (listed below one another), and a box showing if they are completed or not. (green check mark or red "x")

   7. As a user, I can click any of the boxes to make it incomplete or complete, according to the color that is shown and the "x" or check mark. (red or green)

   8. As a user, I can see at the bottom of each of the "My Lists," webpages, (that show a single list) there is a traash can image, button on the right-hand side of the items on the "Do It" list).

   9. As a user, I can click on the trashcan button and two options pop up, as rectangle buttons, text says "trash" or "cancel".

   10. As a user, if I click on "trash," it deletes the list -- if I click on "cancel," the buttons disappear and I see the last list I had opened.

   11. As a user, at the bottom of the page, there is a link with text saying "Home."

   12. As a user, I can click on the "Home" link and it navigates me back to the Home webpage.

   13. As a user, I can see a link on the homepage that says, "Create a new Do It list".

   14. As a user, I can click on the "Create a New List" link and it takes me to a webpage where I see a header with the text, "Create a new Do It list".
