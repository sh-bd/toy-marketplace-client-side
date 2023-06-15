import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
     useTitle('Blog')

     return (
          <div className='mt-5 pt-5'>
               <h1 className='py-lg-5 text-center'>Blog</h1>
               <div className='my-5 container'>
                    <div className="accordion" id="accordionExample">
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                   </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>Access Token:</b> An access token is a credential that is issued by an authentication server after a user successfully authenticates and grants permission to an application. It represents the user's authorization to access specific resources or perform certain actions on behalf of the user. Access tokens are typically short-lived and have an expiration time, after which they become invalid. They are used to authenticate API requests to protected resources by including them in the request headers. <br />

                                        <b>Refresh Token:</b> A refresh token is also issued by the authentication server but has a longer lifetime compared to the access token. It is used to obtain a new access token once the previous one expires. When an access token expires, instead of requiring the user to re-authenticate, the application can use the refresh token to request a new access token from the server without involving the user. This helps to improve the user experience by avoiding frequent re-authentication. <br />

                                        <b>In-memory storage:</b> For web applications, you can store the tokens in memory variables, which are cleared when the user closes the browser. This approach is suitable if you don't need to persist the tokens across sessions or page refreshes, and you obtain new tokens each time the user logs in. <br />

                                        <b>Cookies:</b> You can store the tokens in HTTP-only secure cookies, which are accessible by the server but not by JavaScript code running in the browser. This approach provides some level of protection against cross-site scripting (XSS) attacks. However, be cautious about the security implications and make sure to set the appropriate expiration times for the cookies.
                                        <br />

                                        <b>Local storage or session storage:</b> These are browser-based storage mechanisms that allow storing data on the client-side. While convenient, these storage options are more vulnerable to cross-site scripting (XSS) attacks. If you choose this approach, make sure to take appropriate security measures and avoid storing sensitive information in these storage mechanisms. <br />
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Compare SQL and NoSQL databases?                                   </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>SQL: </b> databases are based on the relational data model. They organize data into structured tables with predefined schemas, where relationships between tables are established through primary and foreign keys.
                                        SQL databases typically scale vertically by adding more resources to a single server. While they can handle a significant amount of data, their scalability is limited by the capacity of a single machine.
                                        SQL databases have a rigid schema, meaning that the structure of the data is defined in advance. Any changes to the schema require altering the tables, which can be complex and time-consuming.
                                        SQL databases use the SQL language, a standardized language for querying and manipulating structured data. SQL provides powerful querying capabilities with a rich set of operators, functions, and joins. <br />

                                        <b>NoSQL: </b>NoSQL databases use various data models, such as key-value, document, columnar, and graph. They provide more flexibility in data representation and do not enforce rigid schemas. NoSQL databases can handle unstructured or semi-structured data more efficiently.NoSQL databases are designed for horizontal scalability. They distribute data across multiple servers, allowing for seamless scalability by adding more servers to the database cluster. This makes them more suitable for handling large-scale, high-volume applications.NoSQL databases offer schema flexibility, allowing developers to store data without predefined structures. This makes them suitable for scenarios where the data schema is dynamic or evolves over time.NoSQL databases often have their own query languages or APIs specific to the data model they support. Some NoSQL databases provide query languages similar to SQL, while others offer simpler key-value or document-based retrieval mechanisms.


                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingThree">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is express js? What is Nest JS?                                   </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>Express.js: </b> Express.js is a minimal and flexible web application framework for Node.js, providing a simple and unopinionated approach to building web applications and APIs. It simplifies handling HTTP requests, routing, middleware management, and template rendering.  <br />



                                        <b>Nest.js: </b> Express.js is known for its simplicity, extensibility, and wide usage in the Node.js ecosystem. Additionally, Nest.js is a progressive framework built with TypeScript, inspired by Angular's concepts. It combines object-oriented, functional, and reactive programming to offer a structured and scalable development experience, particularly suited for enterprise-level applications and APIs.
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFour">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What is MongoDB aggregate and how does it work?                                   </button>
                              </h2>
                              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>MongoDB: </b>
                                        In MongoDB, the aggregate framework empowers users to perform complex data processing operations, transformations, and advanced queries on document collections. It enables data aggregation, manipulation, and provides a powerful way to process and analyze data within the database. The aggregate function, with its pipeline-like approach and additional stages, facilitates advanced analytics, grouping, and calculations, leveraging MongoDB's document-based data model for comprehensive data analysis.
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Blog;