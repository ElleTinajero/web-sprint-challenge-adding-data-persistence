exports.seed = function(knex) {
  return knex('Resources').truncate()
    .then(function () {
      return knex('Resources').insert([
        {resourceName: 'Camera', resourceDescription: "Use to film interesting videos." },
        {resourceName: 'Ukuelele', resourceDescription: "Play this fun four stringed instrument."},
        {resourceName: 'Bin', resourceDescription: "Put stuff in here to create space."}
      ]);
    });
};
