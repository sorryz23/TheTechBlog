const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum I',
        content: 'Reprehenderit minim ut nisi cupidatat aliqua esse.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum II',
        content: 'Veniam cupidatat consectetur aute consectetur duis aliquip labore sunt anim officia.Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum III',
        content: 'Ad Lorem eu proident consequat enim est eu eiusmod incididunt in fugiat velit officia.Ut etiam sit amet nisl purus in mollis.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;