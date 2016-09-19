// Description:
//   Hubot script to generate web-related job titles
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   @hubot jobtitle
//
// Author:
//   Jorge Epuñan | @jorgeepunan

const pre = [
  'Brand', 
  'Fullstack',
  'Digital',
  'Information',
  'Big-Data',
  'Chief',
  'Uber',
  'Senior',
  'Leader',
  'UX',
  'Junior',
  'Ninja',
  'Engagement',
  'Web',
  'E-Commerce'
];

const post = [
  'Technologist',
  'Developer',
  'Consultant',
  'Designer',
  'Maintainer',
  'Hacker',
  'Ninja',
  'Manager'
];

const randomItem = array => array[~~(Math.random() * array.length)];

module.exports = function(robot) {
  robot.respond(/jobtitle/i, res => {
    msg = `Your new job title: ${randomItem(pre)} ${randomItem(post)}`;
    res.send(msg);
  });
};
