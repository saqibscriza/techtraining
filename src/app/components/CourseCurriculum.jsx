import { usePathname } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const CourseCurriculum = () => {
    const path = usePathname();

    // All course data organized by categories
    const courseData = {
        frontend: {
            react: {
                title: "React JS Course Curriculum",
                description: "Our course will cover all aspects of making you a master in React JS.",
                topics: [
                    {
                        title: "Introduction to React JS",
                        description: "Overview of React and advantages in web development. Start setting up your development environment and learning JSX.",
                        image: "/React/Intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Components and Props",
                        description: "Learn how to create reusable components and pass data using props.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "State Management",
                        description: "Learn what state is and how it controls the behavior of your application.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "React Hooks",
                        description: "Master the use of Hooks such as useState, useEffect, and useContext to build efficiently.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Routing using React Router",
                        description: "Build SPAs with zero page reload when routing with the least amount of effort.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "State Management using Redux",
                        description: "Learn how Redux makes it easy for complex application states.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "API Integration",
                        description: "Read from the server and display data fetched by using APIs to create dynamic apps.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Real-Time Projects",
                        description: "Design a living project, be it a weather app, a task manager, or maybe an e-commerce website.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Portfolio",
                        description: "This is basically putting all your projects into a professional portfolio for marketing or demonstration purposes.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]

            },
            angular: {
                title: "Angular Course Curriculum",
                description: "Master Angular framework for enterprise applications.",
                topics: [
                    {
                        title: "Introduction to Angular",
                        description: "Overview of Angular framework and its architecture. Setup development environment with Angular CLI.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Components & Templates",
                        description: "Learn to create components and work with Angular templates and data binding.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Directives & Pipes",
                        description: "Master built-in directives and create custom pipes for data transformation.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Dependency Injection",
                        description: "Understand Angular's DI system and how to create injectable services.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Routing & Navigation",
                        description: "Implement single-page application navigation with Angular Router.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Forms & Validation",
                        description: "Build template-driven and reactive forms with robust validation.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "HTTP Client & APIs",
                        description: "Communicate with backend services using Angular's HttpClient.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "State Management (NgRx)",
                        description: "Implement complex state management using NgRx library.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Deployment & Optimization",
                        description: "Learn production build optimization and deployment strategies.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },
            'html-css-js': {
                title: "HTML/CSS/JS Fundamentals",
                description: "Build core web development skills.",
                topics: [
                    {
                        title: "HTML Fundamentals",
                        description: "Master document structure, semantic HTML5 elements, forms, and accessibility best practices.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "CSS Styling",
                        description: "Learn selectors, box model, responsive units, and modern layout techniques with Flexbox/Grid.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Responsive Design",
                        description: "Create mobile-friendly websites using media queries, fluid layouts, and responsive images.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "JavaScript Basics",
                        description: "Understand variables, functions, DOM manipulation, and event handling in vanilla JS.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Advanced JavaScript",
                        description: "Work with ES6+ features, async programming, APIs, and modern browser APIs.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "CSS Animations",
                        description: "Create smooth transitions, transforms, and keyframe animations for engaging UIs.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Web Performance",
                        description: "Optimize loading times, minimize render blocking, and implement best practices.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Projects",
                        description: "Build real-world projects like portfolios, e-commerce sites, and web applications.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Deployment",
                        description: "Learn to host websites using Netlify/Vercel and set up CI/CD workflows.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            }
        },
        backend: {
            node: {
                title: "Node.js Course Curriculum",
                description: "Master server-side JavaScript development.",
                topics: [
                    {
                        title: "Node.js Fundamentals",
                        description: "Learn the event-driven architecture, Node runtime, and core modules like fs and http.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "NPM and Package Management",
                        description: "Master package.json, dependency management, and publishing your own modules.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Express Framework",
                        description: "Build web servers and RESTful APIs using Express middleware and routing.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Asynchronous Programming",
                        description: "Master callbacks, promises, and async/await for non-blocking operations.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Database Integration",
                        description: "Connect to MongoDB and SQL databases using Mongoose and Sequelize.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Authentication & Security",
                        description: "Implement JWT, sessions, password hashing, and security best practices.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "REST API Development",
                        description: "Design and build production-ready REST APIs with proper documentation.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Real-Time Applications",
                        description: "Create chat apps and live features using WebSockets and Socket.IO.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Deployment & DevOps",
                        description: "Deploy Node apps to cloud platforms and set up CI/CD pipelines.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },
            java: {
                title: "Java Backend Development",
                description: "Enterprise applications with Spring framework.",
                topics: [
                    {
                        title: "Java Fundamentals",
                        description: "Master OOP concepts, data structures, and core Java syntax for backend development.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Spring Framework",
                        description: "Learn Spring Core, dependency injection, and inversion of control principles.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Spring Boot",
                        description: "Build production-ready applications quickly with auto-configuration and starters.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Spring MVC",
                        description: "Develop web applications using Model-View-Controller architecture.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Database Integration",
                        description: "Connect to databases using JPA, Hibernate, and Spring Data repositories.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "REST API Development",
                        description: "Create robust RESTful services with proper HTTP methods and status codes.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Security & Authentication",
                        description: "Implement Spring Security for authentication and authorization.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Microservices Architecture",
                        description: "Build distributed systems with Spring Cloud and service discovery.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Deployment & DevOps",
                        description: "Deploy Java applications using Docker, Kubernetes, and cloud platforms.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },
            csharp: {
                title: "C# & .NET Development",
                description: "Build enterprise applications with Microsoft's flagship language.",
                topics: [
                    {
                        title: "C# Fundamentals",
                        description: "Master OOP principles, LINQ, async/await, and .NET basics.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: ".NET Core Framework",
                        description: "Learn cross-platform development with .NET Core CLI and SDK.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "ASP.NET Core",
                        description: "Build web applications with MVC pattern and Razor Pages.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Entity Framework Core",
                        description: "Implement ORM for database interactions with SQL Server.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Web API Development",
                        description: "Create RESTful services with controllers and DTOs.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Blazor Framework",
                        description: "Develop interactive UIs using C# instead of JavaScript.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Azure Integration",
                        description: "Deploy to cloud with Azure App Service and SQL Database.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Windows Desktop Apps",
                        description: "Build WPF and Windows Forms applications.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Microservices with Docker",
                        description: "Containerize .NET apps using Docker and Kubernetes.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },
            python: {
                title: "Python Full Stack Development",
                description: "Master web development and data science with Python.",
                topics: [
                    {
                        title: "Python Fundamentals",
                        description: "Learn syntax, data structures, and OOP concepts.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Django Framework",
                        description: "Build full-featured apps with ORM and admin panel.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Flask Microframework",
                        description: "Create lightweight applications and REST APIs.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Database Integration",
                        description: "Connect to PostgreSQL and MongoDB with ORMs.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "REST API Development",
                        description: "Build APIs with Django REST Framework.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Data Analysis",
                        description: "Use Pandas and NumPy for data manipulation.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Authentication",
                        description: "Implement JWT and OAuth for user security.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Deployment",
                        description: "Deploy to Heroku, AWS, and Docker containers.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },

                ]
            },
            php: {
                title: "PHP & Laravel Development",
                description: "Build modern web applications with PHP's most popular framework.",
                topics: [
                    {
                        title: "PHP Fundamentals",
                        description: "Master syntax, OOP, and web concepts.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Laravel Framework",
                        description: "Learn MVC architecture and Artisan CLI.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Eloquent ORM",
                        description: "Work with databases using active record pattern.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Blade Templating",
                        description: "Create dynamic views with template inheritance.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "API Development",
                        description: "Build RESTful APIs with Laravel Sanctum.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Authentication",
                        description: "Implement login systems with Laravel Breeze.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "E-commerce Features",
                        description: "Develop shopping carts and payment gateways.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Testing",
                        description: "Write PHPUnit tests for application reliability.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Deployment",
                        description: "Deploy to shared hosting and cloud platforms.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },
            ruby: {
                title: "Ruby on Rails Development",
                description: "Build database-backed web applications rapidly.",
                topics: [
                    {
                        title: "Ruby Fundamentals",
                        description: "Learn syntax, blocks, and metaprogramming.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Rails MVC Architecture",
                        description: "Understand models, views, and controllers.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Active Record",
                        description: "Implement database operations with ORM.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "RESTful Routing",
                        description: "Design clean URL structures with resources.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Authentication",
                        description: "Add Devise for user management.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "API Mode",
                        description: "Build JSON APIs for mobile/SPA frontends.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Testing with RSpec",
                        description: "Practice test-driven development.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Background Jobs",
                        description: "Process tasks async with Sidekiq.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Deployment",
                        description: "Launch apps on Heroku and AWS.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            }
        },
        fullstack: {
            mern: {
                title: "MERN Stack Mastery",
                description: "Complete JavaScript full-stack development.",
                topics: [
                    {
                        title: "MERN Architecture",
                        description: "Understand the full stack workflow and component interaction.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "React Fundamentals",
                        description: "Master component-based UI development with React.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Node.js & Express",
                        description: "Build RESTful APIs and server-side logic.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "MongoDB Integration",
                        description: "Work with NoSQL database and Mongoose ODM.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Authentication",
                        description: "Implement JWT and session-based auth systems.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "State Management",
                        description: "Manage application state with Redux/Context API.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "API Integration",
                        description: "Connect frontend to backend services.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Deployment",
                        description: "Deploy full-stack apps to cloud platforms.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Real Project",
                        description: "Build and deploy a complete MERN application.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },
            mean: {
                title: "MEAN Stack Development",
                description: "End-to-end JavaScript with Angular.",
                topics: [
                    {
                        title: "MEAN Architecture",
                        description: "Understand the complete stack setup.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Angular Fundamentals",
                        description: "Master components, directives and services.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "TypeScript",
                        description: "Leverage type safety across the stack.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Express Backend",
                        description: "Build robust APIs with middleware support.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "MongoDB with Mongoose",
                        description: "Model data and create relationships.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "RxJS Observables",
                        description: "Handle asynchronous operations reactively.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Authentication",
                        description: "Implement secure user authentication.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Deployment Strategies",
                        description: "Deploy MEAN apps with best practices.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Capstone Project",
                        description: "Build and present a complete MEAN application.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            }
        },
        mobile: {
            flutter: {
                title: "Flutter Development Curriculum",
                description: "Master cross-platform app development with Flutter framework.",
                topics: [
                    {
                        title: "Introduction to Flutter",
                        description: "Overview of Flutter framework, Dart language basics, and widget architecture.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Widgets & UI Building",
                        description: "Learn to build UIs with Material/Cupertino widgets and custom components.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "State Management",
                        description: "Master various state solutions (Provider, Bloc, Riverpod) for complex apps.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Navigation & Routing",
                        description: "Implement navigation between screens with named routes and arguments.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Firebase Integration",
                        description: "Connect to Firebase services (Auth, Firestore, Storage) in Flutter apps.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Platform Channels",
                        description: "Access native device features using platform-specific code.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "API Integration",
                        description: "Fetch and display data from REST APIs using Dio or http package.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Flutter Animations",
                        description: "Create smooth UI animations using implicit and explicit animation widgets.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "App Publishing",
                        description: "Prepare and publish apps to Google Play Store and Apple App Store.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },
            android: {
                title: "Android (Kotlin) Curriculum",
                description: "Build native Android applications with modern Kotlin.",
                topics: [
                    {
                        title: "Kotlin Fundamentals",
                        description: "Master Kotlin syntax, null safety, extensions, and coroutines.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Android Studio Basics",
                        description: "Navigate Android Studio and understand project structure.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Jetpack Components",
                        description: "Build apps with ViewModel, LiveData, Room, and Navigation.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "UI with Compose",
                        description: "Create modern UIs with declarative Jetpack Compose framework.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Networking & APIs",
                        description: "Make HTTP requests with Retrofit and handle JSON with Moshi/Gson.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Database with Room",
                        description: "Implement local persistence using Room SQLite abstraction.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Dependency Injection",
                        description: "Manage dependencies with Hilt for cleaner architecture.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Testing",
                        description: "Write unit and instrumented tests for Android apps.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Play Store Deployment",
                        description: "Prepare release builds and publish to Google Play Store.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },

        },
        database: {
            sql: {
                title: "SQL Curriculum",
                description: "Learn to query, manage, and manipulate data in relational databases.",
                topics: [
                    {
                        title: "Introduction to Databases & SQL",
                        description: "Understand relational database concepts and SQL syntax basics.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Data Retrieval with SELECT",
                        description: "Query single and multiple tables using SELECT, WHERE, ORDER BY, and LIMIT.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Filtering & Aggregation",
                        description: "Use functions like COUNT, SUM, GROUP BY, HAVING, and DISTINCT.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Joins & Subqueries",
                        description: "Master INNER, LEFT, RIGHT, and FULL JOINs, plus nested queries.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Data Manipulation (DML)",
                        description: "INSERT, UPDATE, DELETE records while maintaining data integrity.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Database Design & Normalization",
                        description: "Design relational schemas and apply 1NF, 2NF, 3NF rules.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Constraints & Indexes",
                        description: "Use PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and performance indexes.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Views & Stored Procedures",
                        description: "Simplify queries with views and encapsulate logic with stored procedures.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Practice & Projects",
                        description: "Hands-on SQL problems and mini-projects with real datasets.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },

            mysql: {
                title: "MySQL Curriculum",
                description: "Learn to manage and optimize databases using MySQL.",
                topics: [
                    {
                        title: "MySQL Basics",
                        description: "Set up MySQL, understand clients/tools, and run basic queries.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "MySQL Data Types & Constraints",
                        description: "Explore column types, constraints, and table creation.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "CRUD Operations",
                        description: "Work with SELECT, INSERT, UPDATE, DELETE commands and conditions.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Joins & Relationships",
                        description: "Connect tables with JOINs and enforce relationships with keys.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "Stored Procedures & Triggers",
                        description: "Automate logic with procedures and use triggers for audits.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "Indexes & Performance",
                        description: "Use indexes and EXPLAIN plans to optimize queries.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Security & Permissions",
                        description: "Manage users, roles, and privileges for secure access.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Backup & Restore",
                        description: "Use mysqldump, data export/import, and restore strategies.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Web App Integration",
                        description: "Connect MySQL to Node.js, PHP or Python for dynamic web apps.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            },

            postgreSql: {
                title: "PostgreSQL Curriculum",
                description: "Build enterprise-grade skills with the advanced PostgreSQL system.",
                topics: [
                    {
                        title: "PostgreSQL Setup & Tools",
                        description: "Install PostgreSQL and use pgAdmin & CLI tools efficiently.",
                        image: "/React/intro.png",
                        bgColor: "#5B72EE"
                    },
                    {
                        title: "Advanced SQL & Joins",
                        description: "Write optimized multi-table queries with window functions & CTEs.",
                        image: "/React/Props.png",
                        bgColor: "#00CBB8"
                    },
                    {
                        title: "Schema Design & Relationships",
                        description: "Model real-world systems with proper normalization and constraints.",
                        image: "/React/state.png",
                        bgColor: "#29B9E7"
                    },
                    {
                        title: "Functions & Triggers",
                        description: "Create PL/pgSQL functions and automate events with triggers.",
                        image: "/React/hooks.png",
                        bgColor: "#EE7D5B"
                    },
                    {
                        title: "JSON & Arrays",
                        description: "Work with semi-structured data using PostgreSQL’s JSON/JSONB types.",
                        image: "/React/hooks.png",
                        bgColor: "#00CB58"
                    },
                    {
                        title: "PostGIS (Geospatial Data)",
                        description: "Query and visualize spatial data with PostGIS extensions.",
                        image: "/React/state.png",
                        bgColor: "#296EE7"
                    },
                    {
                        title: "Indexing & Performance Tuning",
                        description: "Optimize large datasets using B-tree, GIN, BRIN indexes.",
                        image: "/React/api.png",
                        bgColor: "#EE915B"
                    },
                    {
                        title: "Backup, Restore & Replication",
                        description: "Handle data migrations, backups, and master-slave replication.",
                        image: "/React/projects.png",
                        bgColor: "#009FCB"
                    },
                    {
                        title: "Enterprise Use Cases",
                        description: "Apply PostgreSQL to analytics, web apps, and complex business systems.",
                        image: "/React/portfolio.png",
                        bgColor: "#F2526A"
                    }
                ]
            }
        }
    };

    // Extract category and technology from URL
    const getCourseDetails = () => {
        if (!path) return courseData.frontend.react; // Default fallback

        const parts = path.split('/').filter(Boolean);
        const category = parts[1] || 'frontend';
        const tech = parts[2] || 'react';

        return courseData[category]?.[tech] || courseData.frontend.react;
    };

    const { title, description, topics } = getCourseDetails();

    return (
        <CurriculumSection className="py-5">
            <div className="container">
                <SectionHeader className="text-center mb-5">
                    <h1>{title}</h1>
                    <p className="lead">{description}</p>
                </SectionHeader>

                <div className="row">
                    {topics.map((topic, index) => (
                        <div className="col-md-6 col-lg-4 mb-5" key={index}>
                            <TopicCardContainer>
                                <TopicImageContainer $bgColor={topic.bgColor}>
                                    <TopicImage src={topic.image} alt={topic.title} />
                                </TopicImageContainer>
                                <TopicCard>
                                    <TopicContent>
                                        <h3>{topic.title}</h3>
                                        <p>{topic.description}</p>
                                    </TopicContent>
                                </TopicCard>
                            </TopicCardContainer>
                        </div>
                    ))}
                </div>
            </div>
        </CurriculumSection>
    );
};

// Styled components remain exactly the same as in your original

const CurriculumSection = styled.section`
  background-color: #ECF2F9;
  padding: 4rem 8rem;
`;

const SectionHeader = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #252641;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .lead {
    font-size: 1.25rem;
    color: #696984;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const TopicCardContainer = styled.div`
  position: relative;

  height: 100%;
  
  padding-top: 40px; /* Space for the overlapping image */
  max-width:300px;
 
 
`;

const TopicImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background: ${props => props.$bgColor || 'white'}; // Use provided bgColor or default to white
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  
 
`;

const TopicImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const TopicCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 3rem 3rem 1.5rem; /* More top padding */
  min-height:290px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    
    ${TopicImageContainer} {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const TopicContent = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2F327D;
    margin-bottom: 0.75rem;
    text-align: center;
    margin-top: 1rem;
  }
  
  p {
    color: #696984;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
  }
`;

export default CourseCurriculum;