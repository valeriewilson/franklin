from unittest import TestCase
from server import app


class FlaskTests(TestCase):

    def setUp(self):
        """ Set-up for each test """

        app.config['TESTING'] = True

    def test_login_route(self):
        """ Verify that login page renders correctly """

        result = self.client.get("/login")
        self.assertEqual(result.status_code, 200)
        self.assertIn('<h1>Log In</h1>', result.data)
