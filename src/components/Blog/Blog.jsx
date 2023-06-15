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
                                        <b>Access Token:</b> A refresh token simply allows you to revalidate a user without forcing them to submit their login credentials several times. If the refresh token is legitimate and requests access to confidential resources, the access token is re-issued. <br />

                                        <b>How it works:</b> Access tokens and refresh tokens are components of authentication. Access tokens authorize resource access and have a limited lifespan. Refresh tokens obtain new access tokens when they expire. Store them on the client-side in secure cookies or browser storage, considering security and protection against XSS (cross site scripting) attacks.
                                        <br />

                                        <b>Where should we store it:</b>  It can be stored to your browser's local storage, or can be stored as a HTTP secure only cookie on the client side, which is more secure than local storage or iInstead of storing the token, save the username and password in the browser or client-side cookie, and then get a fresh token by quietly submitting credentials. <br />
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
                                        <b>SQL: </b> SQL databases are based on the relational model, organizing data into structured tables with predefined schemas. They use SQL for querying and manipulation, offering powerful capabilities with operators, functions, and joins. SQL databases scale vertically by adding resources to a single server and are suitable for multi-row transactions, making them ideal for structured data and complex querying scenarios. <br />

                                        <b>NoSQL: </b>NoSQL databases use various data models (key-value, document, columnar, graph) and provide flexibility in data representation without rigid schemas. They scale horizontally by distributing data across multiple servers, enabling seamless scalability for large-scale applications. NoSQL databases offer schema flexibility, making them suitable for unstructured or dynamic data. They often have their own query languages or APIs specific to the data model, catering to efficient retrieval mechanisms. NoSQL excels in handling unstructured data and providing scalable solutions.


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