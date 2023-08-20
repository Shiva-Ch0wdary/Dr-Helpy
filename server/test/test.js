const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const request = require("supertest");
const server = require("../server.js");
const usercreater = require("../models/users");
chai.use(chaiHttp);

setTimeout(() => {
  console.log("stopped testing");
  process.exit(0);
}, 20000);

const test_user = {
  fname: "Arindam",
  lname: "Gh",
  email: "ari@45gmail.com",
  phno: "1234567890",
  password1: "232",
  password2: "232",
  otp: process.env.SAMPLEOTP,
};

// User authentication
describe("/POST Successful user authentication check", function () {
  before(function (done) {
    usercreater.deleteMany({ fname: test_user.fname }).then((res) => {
      console.log("deleting test user if exists");
    });
    done();
  });

  beforeEach(function (done) {
    done();
  });

  it("creating a new user", function (done) {
    this.timeout(16000);
    request(server)
      .post("/signup")
      .send(test_user) // data to be sent
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.be.have.property("accessToken");
        res.body.should.be.have.property("refreshToken");
        res.body.should.be.have.property("id");
        test_user.id = res.body.id;
        done();
      });
  });

  it("creating a new user with same email", function (done) {
    this.timeout(16000);
    request(server)
      .post("/signup")
      .send({ ...test_user, email: "ghosharitro66@gmail.com" }) // data to be sent
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("string");
        res.body.should.be.equal("Someone already registered using same email");
        done();
      });
  });

  it("creating a new user with wrong otp", function (done) {
    this.timeout(16000);
    request(server)
      .post("/signup")
      .send({ ...test_user, email: "test@34gmail.com", otp: "1234" }) // data to be sent
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("string");
        res.body.should.be.equal("OTP expired or not valid");
        done();
      });
  });

  it("logging in the user", function (done) {
    this.timeout(16000);
    request(server)
      .post("/login")
      .send({
        email: "ghosharitro66@gmail.com",
        password: "123",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.be.have.property("accessToken");
        res.body.should.be.have.property("refreshToken");
        done();
      });
  });

  it("Wrong password", function (done) {
    this.timeout(16000);
    request(server)
      .post("/login")
      .send({
        email: "ghosharitro66@gmail.com",
        password: "1234",
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("string");
        res.body.should.be.equal("Wrong password or Wrong user");
        done();
      });
  });

  after(function (done) {
    this.timeout(16000);
    console.log("deleting the user");
    console.log(test_user.id);
    usercreater.findByIdAndDelete(test_user.id).then((res) => {
      console.log("deleted test user successfully");
    });

    done();
  });
  afterEach(function (done) {
    done();
  });
});

// Product List
describe("/GET Product List", function () {
  it("getting the product list", function (done) {
    this.timeout(16000);
    request(server)
      .get("/productlist")
      .set("Authorization", "Bearer " + process.env.SAMPLETOKEN)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("getting the product list without token", function (done) {
    this.timeout(16000);
    request(server)
      .get("/productlist")
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a("string");
        res.body.should.be.equal("You are not authenticated!");
        done();
      });
  });

  it("getting the product list with wrong token", function (done) {
    this.timeout(16000);
    request(server)
      .get("/productlist")
      .set("Authorization", "Bearer " + "rwrwrw")
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.be.a("string");
        res.body.should.be.equal("Token is not valid!");
        done();
      });
  });
});

// Disease List
describe("/GET Disease List", function () {
  it("getting the disease list", function (done) {
    this.timeout(16000);
    request(server)
      .get("/disease")
      .set("Authorization", "Bearer " + process.env.SAMPLETOKEN)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});
