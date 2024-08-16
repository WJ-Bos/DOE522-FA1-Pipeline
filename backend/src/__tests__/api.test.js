// backend/src/__tests__/api.test.js
const request = require("supertest");
const app = require("../../App"); // Ensure path is correct

describe("GET /message", () => {
  it("should return the correct response", (done) => {
    request(app)
      .get("/message")
      .expect(200)
      .expect('{\"message\":\"This is message sent from the express server 👋\"}')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
