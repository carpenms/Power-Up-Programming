# 3308project
# Power Up Programming
​
Our project is a web application that helps users find resources to study the most popular programming languages and software. The amount of educational resources available are rapidly multiplying thanks to websites like youtube and lynda. Although having more options is great, the best resources are often lost as the amount of videos expand exponentially. It is also important to know if the resource you are learning from is accurate. The website will not only provide aggregation of these resources but also use user metrics to feature better and better content over time.
​
## Getting Started

![Gif](./3308proj.gif)

## Installing
This project is based on **Vue.js** and **Node.js** so that make sure to download it correctly.
### Back-end Project setup
make sure you are in 'src/back'

```
npm install 
node server.js
```

### Front-end Project setup
make sure you are in 'src/front/webapp'

```
npm install
npm run serve
```

### Database Set Up
make sure change the database setting in 'src/back/server.js'

The data csv is in './database_design'

Use following code to populate the data instead of populating row one by one.

```
LOAD DATA INFILE 'categories.csv'
INTO TABLE onCategories FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES 
(
    Id, Name
);

LOAD DATA INFILE 'courses.csv'
INTO TABLE onCourses FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  IGNORE 1 LINES
(
    Id, Name, Url, categoryId
);

```
​
## Built With
* node.js 
* vue.js for front-end


## License
​
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
·
