var replace = require("../str-replace");
var expect = require("expect.js");

describe("Replace first", function() {
  it("should replace first occurrences", function() {
    expect(replace("a").from("aa").with("e")).to.be("ea");
  });
  it("should replace first occurrences ignoring the case", function() {
    expect(replace("a").ignoringCase().from("AA").with("e")).to.be("eA");
  });
});

describe("Replace all", function() {
  it("should replace all occurrences", function() {
    expect(replace.all("/").from("/home/dir").with("\\")).to.be("\\home\\dir");
  });
  it("should replace all occurrences ignoring the case", function() {
    var replaceAllHouseIgnoringCase = replace.all("house").ignoringCase();
    expect(replaceAllHouseIgnoringCase.from("Many Houses").with("Horse")).to.be("Many Horses");
    expect(replace.all("house").from("Many Houses").with("Horse")).to.be("Many Houses");
  });
});

describe("Replace algorithm", function() {
  it("should replace regex special characters", function() {
    expect(replace(".").from(".").with("a")).to.be("a");
    expect(replace("*").from("*").with("a")).to.be("a");
    expect(replace("+").from("+").with("a")).to.be("a");
    expect(replace("?").from("?").with("a")).to.be("a");
    expect(replace("^").from("^").with("a")).to.be("a");
    expect(replace("$").from("$").with("a")).to.be("a");
    expect(replace("{").from("{").with("a")).to.be("a");
    expect(replace("}").from("}").with("a")).to.be("a");
    expect(replace("(").from("(").with("a")).to.be("a");
    expect(replace(")").from(")").with("a")).to.be("a");
    expect(replace("|").from("|").with("a")).to.be("a");
    expect(replace("[").from("[").with("a")).to.be("a");
    expect(replace("]").from("]").with("a")).to.be("a");
    expect(replace("\\").from("\\").with("a")).to.be("a");
    expect(replace("\d").from("\d").with("a")).to.be("a");
  });
});
