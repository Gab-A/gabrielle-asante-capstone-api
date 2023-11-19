exports.seed = async function (knex) {
  await knex("quotes").del();
  await knex("quotes").insert([
    {
      id: 1,
      content: "There is hope, even when your brain tells you there isn’t.",
      author: "John Green",
    },
    {
      id: 2,
      content:
        "We are not our trauma. We are not our brain chemistry. That’s part of who we are, but we’re so much more than that.",
      author: "Sam J. Miller",
    },
    {
      id: 3,
      content:
        "We would never tell someone with a broken leg that they should stop wallowing and get it together. We don’t consider taking medication for an ear infection something to be ashamed of. We shouldn’t treat mental health conditions any differently.",
      author: "Michelle Obama",
    },
    {
      id: 4,
      content:
        "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle Onassis",
    },
    {
      id: 5,
      content: "If you’re going through hell, keep going.",
      author: "Winston Churchill",
    },
    {
      id: 6,
      content: "Tough times never last, but tough people do!",
      author: "Robert Schuller",
    },
    {
      id: 7,
      content:
        "When you take care of yourself, you’re a better person for others. When you feel good about yourself, you treat others better.",
      author: "Solange Knowles",
    },
    {
      id: 8,
      content:
        "It is okay to have depression, it is okay to have anxiety and it is okay to have an adjustment disorder. We need to improve the conversation. We all have mental health in the same way we all have physical healthIt is okay to have depression, it is okay to have anxiety and it is okay to have an adjustment disorder. We need to improve the conversation. We all have mental health in the same way we all have physical health.",
      author: "Prince Harry, Duke of Sussex",
    },
    {
      id: 9,
      content:
        "I found that with depression, one of the most important things you can realise is that you're not alone. You're not the first to go through it, you're not gonna be the last to go through it.",
      author: "Dwayne The Rock Johnson",
    },
    {
      id: 10,
      content: "The only journey is the journey within.",
      author: "Rainer Maria Rilke",
    },
    {
      id: 11,
      content:
        "The advice I'd give to somebody that's silently struggling is, you don't have to live that way. You don't have to struggle in silence. You can be un-silent. You can live well with a mental health condition, as long as you open up to somebody about it, because it's really important you share your experience with people so that you can get the help that you need.",
      author: "Demi Lovato",
    },
    {
      id: 12,
      content:
        "You don’t have to be positive all the time. It’s perfectly okay to feel sad, angry, annoyed, frustrated, scared and anxious. Having feelings doesn’t make you a negative person. It makes you human.",
      author: "Lori Deschene",
    },
    {
      id: 13,
      content:
        "Many survivors insist they’re not courageous: ‘If I were courageous I would have stopped the abuse.’ ‘If I were courageous, I wouldn’t be scared’… Most of us have it mixed up. You don’t start with courage and then face fear. You become courageous because you face your fear.",
      author: "Laura Davis",
    },
    {
      id: 14,
      content:
        "You don’t have to control your thoughts. You just have to stop letting them control you.",
      author: "Dan Millman",
    },
    {
      id: 15,
      content:
        "What I love about therapy is that they'll tell you what your blind spots are. Although that's uncomfortable and painful, it gives you something to work with.",
      author: " Pink",
    },
    {
      id: 16,
      content:
        "Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.",
      author: "Matt Haig",
    },
    {
      id: 17,
      content:
        "My dark days made me stronger. Or maybe I already was strong, and they made me prove it.",
      author: "Emery Lord",
    },
    {
      id: 18,
      content:
        "Sometimes the people around you won’t understand your journey. They don’t need to, it’s not for them.",
      author: "Joubert Botha",
    },
    {
      id: 19,
      content:
        "You are not alone. You are seen. I am with you. You are not alone.",
      author: "Shonda Rhimes",
    },
    {
      id: 20,
      content:
        "The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen.",
      author: "Elisabeth Kübler-Ross",
    },
    {
      id: 21,
      content:
        "I don’t regret opening up about what I went through [with depression], because, it sounds really cliché, but I have had women come up to me and say, ‘It meant so much to me.’ It means so much when you realize that someone was having a really hard time and feeling shame and was trying to hide this whole thing.",
      author: "Winona Ryder",
    },
    {
      id: 22,
      content:
        "Being vulnerable is actually a strength and not a weakness — that’s why more and more mental health is such an important thing to talk about. It’s the same as being physically sick. And when you keep all those things inside, when you bottle them up, it makes you ill.",
      author: "Cara Delevingne",
    },
    {
      id: 23,
      content:
        "Everyone experiences a version of anxiety or worry in their lives, and maybe we go through it in a different or more intense way for longer periods of time, but there’s nothing wrong with you.",
      author: "Emma Stone",
    },
    {
      id: 24,
      content:
        "What mental health needs is more sunlight, more candor, and more unashamed conversation.",
      author: "Glenn Close",
    },
    {
      id: 25,
      content:
        "Being able to be your true self is one of the strongest components of good mental health.",
      author: "Dr. Lauren Fogel Mersy",
    },
  ]);
};
