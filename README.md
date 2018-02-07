# spring-boot-rest-mongo-web-application
spring-boot-rest-mongo-web-application
# Spring-Boot-Rest-Web

Spring-Boot-Rest-Web -JPA-Hibernate-Configuration Why REST? REST In Practice proffers, to borrow Martin Fowler’s phrasing, "the notion that the web is an existence proof of a massively scalable distributed system that works really well, and we can take ideas from that to build integrated systems more easily." I think that’s a pretty good reason: REST embraces the precepts of the web itself, and embraces its architecture, benefits and all.

What benefits? Principally all those that come for free with HTTP as a platform itself. Application security (encryption and authentication) are known quantities today for which there are known solutions. Caching is built into the protocol. Service routing, through DNS, is a resilient and well-known system already ubiquitously support.

REST, however ubiquitous, is not a standard, per se, but an approach, a style, a constraint on the HTTP protocol. Its implementation may vary in style, approach. As an API consumer this can be a frustrating experience. The quality of REST services varies wildly.

# Using appropriate Request Methods

Always use HTTP Methods. Best practices with respect to each HTTP method is described below:

GET : Should not update anything. Should be idempotent (same result in multiple calls). Possible Return Codes 200 (OK) + 404 (NOT FOUND) +400 (BAD REQUEST) POST : Should create new resource. Ideally return JSON with link to newly created resource. Same return codes as get possible. In addition : Return code 201 (CREATED) is possible. PUT : Update a known resource. ex: update client details. Possible Return Codes : 200(OK) DELETE : Used to delete a resource.

REST stands for REpresentational State Transfer. REST specifies a set of architectural constraints. Any service which satisfies these constraints is called RESTful Service.

The five important constraints for RESTful Web Service are

Client - Server : There should be a service producer and a service consumer. The interface (URL) is uniform and exposing resources. The service is stateless. The service results should be Cacheable. HTTP cache, for example. Service should assume a Layered architecture. Client should not assume direct connection to server - it might be getting info from a middle layer - cache.

# Richardson Maturity Model

Richardson Maturity Model is used to identify the maturity level of a Restful Web Service. Following are the different levels and their characteristics:

Level 0 : Expose SOAP web services in REST style. Expose action based services (http://server/getPosts, http://server/deletePosts, http://server/doThis, http://server/doThat etc) using REST. Level 1 : Expose Resources with proper URI’s (using nouns). Ex: http://server/accounts, http://server/accounts/10. However, HTTP Methods are not used. Level 2 : Resources use proper URI’s + HTTP Methods. For example, to update an account, you do a PUT to . The create an account, you do a POST to . Uri’s look like posts/1/comments/5 and accounts/1/friends/1. Level 3 : HATEOAS (Hypermedia as the engine of application state). You will tell not only about the information being requested but also about the next possible actions that the service consumer can do. When requesting information about a facebook user, a REST service can return user details along with information about how to get his recent posts, how to get his recent comments and how to retrieve his friend’s list.
# What is MongoDB?
MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need
  MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time

  The document model maps to the objects in your application code, making data easy to work with

  Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data

  MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use

  MongoDB is free and open-source, published under the GNU Affero General Public License
  
# Install MongoDB
https://docs.mongodb.com/manual/installation/

# MongoDB Download Center
https://www.mongodb.com/download-center?jmp=nav#atlas
