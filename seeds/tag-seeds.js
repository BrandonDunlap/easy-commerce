const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'New',
  },
  {
    tag_name: 'Sale',
  },
  {
    tag_name: 'Popular',
  },
  {
    tag_name: 'Discount',
  },
  {
    tag_name: 'Exclusive',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
