describe("fbMapperConfig.service", () => {
  var service;

  beforeEach(inject(($injector) => {
    var log = $injector.get("$log");
    var q = $injector.get("$q");
    var resource = $injector.get("$resource");
    var api = $injector.get("/tmp/whatever");
    service = new fbMapperConfig(log, q, resource, api);
  }));

  describe("setElement", () => {
    it("should add the element to the configuration", () => {
      expect(service._getElement("foo")).toEqual(null);
      element = { name: "foo" };
      service.setElement(element);
      expect(service._getElement("foo")).toEqual(element);
    });
  });
});
