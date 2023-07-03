let test = require("../handler");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);

describe("/GET", () => {
  //   it("SAMPLE 1-- testing get call status...", (done) => {
  //     chai
  //       .request("http://localhost:3000")
  //       .get("/")
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         done();
  //       });
  //   });
  //   it("SAMPLE 2-- testing get call message...", (done) => {
  //     chai
  //       .request("http://localhost:3000")
  //       .get("/")
  //       .end((err, res) => {
  //         expect(res.text).equals("Welcome to lambda CI/CD demo!!");
  //         done();
  //       });
  //   });
  it("Type check of the random integer", async () => {
    const number = await test.generateRandomNumber();
    console.log(typeof(number))
    expect(typeof(number)).equals('number')
  });
});
