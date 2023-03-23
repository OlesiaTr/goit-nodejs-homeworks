/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const { DB_HOST } = process.env;

describe('Test the signin controller', () => {
  beforeAll(() => {
    mongoose
      .connect(DB_HOST)
      .then(() => {
        console.log('Connected to database successfully');
        app.listen(3040, () => {
          console.log('Server is running on port: 3030');
        });
      })
      .catch((err) => {
        console.log(`Server isn't running. ${err.message}`);
        process.exit(1);
      });
  });

  // Test for successful signin
  it('Should return a token and a user object with email and subscription fields', async () => {
    const response = await request(app)
      .post('/api/users/signin')
      .send({ email: 'lesia@gmail.com', password: '1236987' });

    // Check if the response body contains an error message when the findOne() method times out
    if (
      response.body.message ===
      'Operation `users.findOne()` buffering timed out after 10000ms'
    )
      throw new Error('findOne() method timed out');

    const { Lesia: user } = response.body;

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(user).toHaveProperty('email', 'lesia@gmail.com');
    expect(typeof user.email).toBe('string');
    expect(user).toHaveProperty('subscription');
    expect(typeof user.subscription).toBe('string');
  }, 30000);

  // Test for unsuccessful signin when given wrong password
  it('Should return an error message for incorrect login details', async () => {
    const response = await request(app)
      .post('/api/users/signin')
      .send({ email: 'lesia@gmail.com', password: '1236988' });

    // Check if the response body contains an error message when the findOne() method times out
    if (
      response.body.message ===
      'Operation `users.findOne()` buffering timed out after 10000ms'
    )
      throw new Error('findOne() method timed out');

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'The password was wrong');
  });

  // Test for unsuccessful signin when given wrong email
  it('Should return an error message for incorrect login details', async () => {
    const response = await request(app)
      .post('/api/users/signin')
      .send({ email: 'lesya@gmail.com', password: '1236987' });

    // Check if the response body contains an error message when the findOne() method times out
    if (
      response.body.message ===
      'Operation `users.findOne()` buffering timed out after 10000ms'
    )
      throw new Error('findOne() method timed out');

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty(
      'message',
      'Email or password was wrong'
    );
  });
});
