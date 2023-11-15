exports.seed = async function (knex) {
  await knex("journal").del();
  await knex("journal").insert([
    {
      id: 1,
      title: "Heart is full of gratitude",
      content:
        "My parents gifted me with something that I have always wanted. How thoughful and generous of them, my heart is full of gratitude.",
      mood: "Gratitude",
      users_id: 2,
    },
    {
      id: 2,
      title: "Tired & In Need Of A Break",
      content:
        "Really tired. Feel like I need a break and some rest, but my other resposnbilites makes it hard for me to do so. ",
      mood: "Tired",
      users_id: 3,
    },
    {
      id: 3,
      title: "Excited About Career Transition",
      content:
        "Happy about entering this career transition in my life. So happy and excited to learn about technology and continue to expand my learning and skills ",
      mood: "Happy",
      users_id: 1,
    },
    {
      id: 4,
      title: "Anxious About Exam Results",
      content:
        "Feel so anxious about my exam results. I do not know what I will get. I cannot for sure say it went bad, but I also cannot say it went good either.",
      mood: "Anxious",
      users_id: 4,
    },
  ]);
};
