const { Comment } = require('../models');

const commentData = [{
        comment_text: "Amet et enim ad do non.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Elit non dolore pariatur sunt dolor eu deserunt eiusmod amet exercitation culpa ad reprehenderit.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Anim id excepteur eiusmod est culpa cillum irure nulla reprehenderit proident culpa esse.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;