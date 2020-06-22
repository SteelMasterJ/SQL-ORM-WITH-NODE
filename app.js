const Sequelize = require('sequelize');
const db = require('./db');
const { Movie } = db.models;

(async () => {
await db.sequelize.sync({ force: true });
try {
    const movie = await Movie.create({
        title: 'Vice'
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
        title: 'The Incredibles'
        });  
        console.log(movie2.toJSON());

    const movie3 = await Movie.create({
        title: 'The Matrix'
        });  
        console.log(movie3.toJSON());
    // await sequelize.authenticate();
    // console.log('Connection to the database successful!');
} catch (error) {
    console.error('Error connecting to the database: ', error);
}
})();