const Sequelize = require('sequelize');
const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

(async () => {
await db.sequelize.sync({ force: true });
try {
    const movie = await Movie.create({
        title: 'Vice',
        runtime: 121,
        releaseDate: '2018-12-13',
        isAvailableOnVHS: false,
    });
    //console.log(movie.toJSON());

    const movie2 = await Movie.create({
        title: 'The Incredibles',
        runtime: 115,
        releaseDate: '2004-04-14',
        isAvailableOnVHS: true,
    });  
    // console.log(movie2.toJSON());
    
    const person = await Person.create({
        firstName: 'Tom',
        lastName: 'Hanks',
    });
    //console.log(person.toJSON());

    // const movieById = await Movie.findByPk(1);
    // console.log(movieById.toJSON());

    // const movieByRuntime = await Movie.findOne({ where: { runtime: 115 } });
    // console.log(movieByRuntime.toJSON());

    // const movies = await Movie.findAll();
    // console.log( movies.map(movie => movie.toJSON()) );

    // const movies = await Movie.findAll({
    //     where: {
    //       runtime: 92,
    //       isAvailableOnVHS: true
    //     }
    //   });
    //   // SELECT * FROM Movies WHERE runtime = 92 AND isAvailableOnVHS = true;
    //   console.log( movies.map(movie => movie.toJSON()) );

    // await sequelize.authenticate();
    // console.log('Connection to the database successful!');
} catch (error) {
    if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map(err => err.message);
        console.error('Validation errors: ', errors);
    } else {
        throw error;
    }
}
})();