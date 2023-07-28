1. function userDetails(username) {
    if (username) {
      console.log(salary);
      console.log(age);
      let age = 30;
      var salary = 10000;
    }
    console.log(salary);
    console.log(age);
  }
  userDetails("John");
  
  What will be the output of the above code and why?
  2 points
  2. const obj1 = {
  name: "PW Skills"
  }
  
  const obj2  = {
  name: "PW Skills"
  }
  
  console.log(obj1 === obj2)
  
  What will be the output of the following code and why? Explain any other way to perform the operation properly.
  2 points
  3. const numbers = [1, 2, 3, 4, 5];
  const result = numbers.reduce((acc, num) => {
  
    if (num % 2 === 0) {
  
      acc.evens.push(num);
  
    } else {
  
      acc.odds.push(num);
  
    }
  
    return acc;
  
  });
  
  
  console.log(result);
  
  
  Check the above-given code, if there are any issues, fix them and explain the output.
  
  
  2 points
  4. function debounce(func, delay) {
    let timeoutId;
  
  
    return function (...args) {
  
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => func.apply(this, args), delay);
  
    };
  
  }
  
  
  function fetchDataFromAPI(query) {
  
    // Some asynchronous API call based on the query
  
    console.log('Fetching data for query:', query);
  
  }
  
  
  const debouncedFetchData = debounce(fetchDataFromAPI, 500);
  
  
  debouncedFetchData('apple');
  
  debouncedFetchData('banana');
  
  debouncedFetchData('orange');
  
  
  Explain how the debounce function works to delay the execution of the fetchDataFromAPI function. What will be the output in the console when the debouncedFetchData function is called multiple times with different queries?
  
  
  2 points
  5. for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100)
  
  }
  
  
  Explain the output of the above-given code and explain why?
  
  
  2 points








  6. console.log(1);

setTimeout(() => {

  console.log(2);


  setTimeout(() => {

    console.log(3)

  }, 100);


  setTimeout(() => {

    console.log(4)

  }, 50);

}, 1000);


console.log(5);


What will the above code's output be in sequence and explain why?


2 points
7. function printNumber(num) {
  console.log(num);

}


console.log(1);


setTimeout(printNumber, 0, 2);


setTimeout(printNumber, 100, 3);


console.log(4);



What will the above code's output be in sequence and explain why?


2 points
8. const Post = require('./models/post');

app.put('/api/posts', (req, res) => {

  const postId = req.params.id;

  const updatedPost = req.body;

  Post.findByIdAndUpdate(postId, updatedPost, { new: true }, (err, post) => {

    if (err) {

      return res.status(500).json({ error: 'Error updating the post.' });

    }

    res.json(post);

  });

});


Find the problem in the above-given code (if any), and explain what does the code do.


2 points
9. db.users.aggregate([
  { $match: { isActive: true } },

  { $group: { _id: '$department', averageAge: { $avg: '$age' } } },

  { $sort: { averageAge: -1 } },

  { $limit: 5 }

])


Analyze the above aggregation pipeline, explain each stage of the pipeline, and what will be the final output.


2 points
10. db.users.aggregate([
  { $unwind: '$friends' },

  { $lookup: { from: 'users', localField: 'friends', foreignField: '_id', as: 'friendDetails' } },

  { $unwind: '$friendDetails' },

  { $group: { _id: '$_id', friends: { $push: '$friendDetails.username' } } }

])


Analyze the above aggregation pipeline, explain each stage of the pipeline, and what will be the final output.


2 points

  