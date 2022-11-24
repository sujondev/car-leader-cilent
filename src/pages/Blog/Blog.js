import React from 'react';

const Blog = () => {
    return (
        <>
            <div className='mt-5 w-3/4 mx-auto'>
                <div className="collapse rounded-xl">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <h2 className='text-xl text-center'> What are the different ways to manage a state in a React application?</h2>
                    </div>
                    <div className="collapse-content bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <p className='text-lg'>There are four main types of state you need to properly manage in your React apps:
                            <ul>
                                <li>Local state</li>
                                <li> Global state</li>
                                <li>Server state</li>
                                <li> URL state</li>
                            </ul>
                            Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.
                        </p>
                        <p>Golbal Once you attempt to manage state across multiple components, things get a bit trickier.

                            You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                            What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.</p>
                        <p>
                            Server state can be deceptively challenging to manage.

                            At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.
                        </p>
                        <p>URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 w-3/4 mx-auto'>
                <div className="collapse rounded-xl">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <h2 className='text-xl text-center'> How does prototypical inheritance work?</h2>
                    </div>
                    <div className="collapse-content bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <p className='text-lg'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 w-3/4 mx-auto'>
                <div className="collapse rounded-xl">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <h2 className='text-xl text-center'> What is a unit test? Why should we write unit tests?</h2>
                    </div>
                    <div className="collapse-content bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <p className="text-lg">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
            </div>
            <div className='mt-5 w-3/4 mx-auto'>
                <div className="collapse rounded-xl">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <h2 className='text-xl text-center'> React vs. Angular vs. Vue?</h2>
                    </div>
                    <div className="collapse-content bg-primary text-white peer-checked:bg-secondary peer-checked:text-white">
                        <p className="text-lg mb-3">Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works</p>
                        <p className="text-lg mb-3">React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.</p>
                        <p className="text-lg">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;