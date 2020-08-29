exports.seed = function(knex) {
  return knex('Projects').truncate()
    .then(function () {
      return knex('Projects').insert([
        {projectName: 'Starting a Youtube Channel', projectDescription: "Create a youtube channel about coding and software.", projectCompletion: false},
        {projectName: 'Learn Song', projectDescription: "Grab that dusty old ukuelele and learn a new song.", projectCompletion: false},
        {projectName: 'Organize', projectDescription: "Organize everything you own basically", projectCompletion: false}
      ]);
    });
};
