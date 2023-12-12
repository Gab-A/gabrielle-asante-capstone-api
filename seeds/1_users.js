exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      first_name: "Aaliyah",
      last_name: "Wilson",
      email: "aaliyahwilson@true.com",
      password: "password123",
    },
    {
      id: 2,
      first_name: "Jordan",
      last_name: "Wood",
      email: "jwood@skipe.com",
      password: "example78",
    },
    {
      id: 3,
      first_name: "Porsha",
      last_name: "Parks",
      email: "porshaparks@tilted.com",
      password: "password246",
    },
    {
      id: 4,
      first_name: "Lucas",
      last_name: "Bridge",
      email: "lucasbridge@escape.com",
      password: "example235",
    },
  ]);
};
