exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "Aaliyah Wilson",
      email: "aaliyahwilson@true.com",
      mood: "Happy",
    },
    {
      id: 2,
      name: "Jordan Wood",
      email: "jwood@skipe.com",
      mood: "Gratitude",
    },
    {
      id: 3,
      name: "Porsha Parks",
      email: "porshaparks@tilted.com",
      mood: "Tired",
    },
    {
      id: 4,
      name: "Lucas Bridge",
      email: "lucasbridge@escape.com",
      mood: "Anxious",
    },
  ]);
};
