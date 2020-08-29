exports.seed = function(knex) {
  return knex('Tasks').truncate()
    .then(function () {
      return knex('Tasks').insert([
        {taskDecription: 'Write down some ideas.', taskNotes: "Learn html!", taskCompletion: false, project_id: 1},
        {taskDecription: 'Listen to a song you would like to learn.', taskNotes: "Somewhere over the rainbow???", taskCompletion: true, project_id: 2},
        {taskDecription: 'Think of the most disorganized part of your house.', taskNotes: "Garage?" , taskCompletion: false, project_id: 3}
      ]);
    });
};
