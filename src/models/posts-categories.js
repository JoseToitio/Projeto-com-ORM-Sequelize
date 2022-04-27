module.exports = (Sequelize, DataTypes) => {
  const PostCategory = Sequelize.define('PostsCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, { timestamps: false });

  PostCategory.associate = (models) => {
    PostCategory.hasMany(models.BlogPost, { foreignKey: 'id', as: 'posts' });
    PostCategory.hasMany(models.Category, { foreignKey: 'id', as: 'categories' });
  };

  return PostCategory;
};