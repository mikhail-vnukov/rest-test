describe('Player', function() {
	var url = "http://localhost:8080/1/employees";

	beforeEach(function() {
	});

	it("connect and work", function(done) {
		$.get(url).done(function(data) {
			expect(data.success).toEqual(true);
			done();
		});
		// request.get(url, function(res) {
		// 	console.log("Got response: " + res.statusCode);
		// 	expect(res.statusCode).toEqual(200);
		// }).on('error', function(e) {
  // 			console.log("Got error: " + e.message);
		// });
	});

});
