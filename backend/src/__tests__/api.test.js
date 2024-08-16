const request = require("supertest");
const { app, server } = require("../../App");

// message endpoint test
describe("GET /message", () => {
  it("should return the correct response", (done) => {
    request(app)
      .get("/message")
      .expect(200)
      .expect('{"message":"This is message sent from the express server 👋"}')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

// greeting endpoint test
describe("GET /greet", () => {
  it("should return the correct response", (done) => {
    request(app)
      .get("/greet")
      .expect(200)
      .expect("Hello User, welcome to the Application")
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

// time-this-took-me endpoint test
describe("GET /time-this-took-me", () => {
  it("should return the correct response", (done) => {
    request(app)
      .get("/time-this-took-me")
      .expect(200)
      .expect("This took me 6 Hours lol.")
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

// close the server after all tests are done
afterAll((done) => {
  server.close(done);
});
