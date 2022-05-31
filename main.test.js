const supertest = require('supertest');
const request = supertest('http://localhost:3000');  //,'staff_id':'050','phonenumber':'012345678'})

describe('Express Route Test', function () {
	it('should return hello world', async () => {
	return request.get('/hello')
		.expect(200)
		.expect('Content-Type', /text/)
		.then(res => {
		expect(res.text).toBe('Hello BENR2423');
		});
	 })

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({'username': "niqo", 'password': "4567" })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("login successful!");
			});
	});
    it('register', async () => {
        return request
			.post('/register')
			.send({'username': 'Jason Nash', 'password': '4321','name': 'Jason','staff_id':'020','phonenumber': '0123456789' })
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("user successfully saved.");
			});
	});

	it('login failed', async () => {
		return request
			.post('/login')
			.send({'username': "niqo01", 'password': "4567" })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Username not existed");
			});
	})

	it('login failed', async () => {
		return request
			.post('/login')
			.send({'username': "niqo", 'password': "01234" })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Wrong password");
			});
	})

	it('register failed', async () => {
		return request
			.post('/register')
			.send({'username': 'niqo', 'password': "4567",'name':'alif','staff_id':'050','phonenumber':'012345678' })
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("user duplicate!");
			});
	})

	it('delete successfully', async () => {
		return request
			.delete('/delete')
			.send({'username': 'Jason Nash', 'password': "4321"})
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("delete successfully.");
			});
	})

	it('delete failed', async () => {
		return request
			.delete('/delete')
			.send({'username': 'Bob', 'password': "1010"})
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Invalid username or invalid password");
			});
	})

		it('update successful.', async () => {
		return request
			.patch('/update')
			.send({'username': 'niqo', 'password': "4567",'name':'alif'})
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("update successful.");
			});
	})

	it('update failed.', async () => {
		return request
			.patch('/update')
			.send({'username': 'niqB', 'password': "4567",'name':'alif'})
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Invalid username");
			});
	})

	it('update failed.', async () => {
		return request
			.patch('/update')
			.send({'username': 'niqo', 'password': "4560",'name':'alif'})
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("invalid password");
			});
	})

});