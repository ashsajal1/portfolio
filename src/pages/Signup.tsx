

function Signup() {
  // Define your functions for social login and form submission here

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4">
        {/* Social login buttons */}
        <div className="space-y-2">
          <button className="btn btn-google w-full" >
            Login with Google
          </button>
          <button className="btn btn-facebook w-full" >
            Login with Facebook
          </button>
          <button className="btn btn-github w-full">
            Login with GitHub
          </button>
        </div>

        {/* Or Divider */}
        <div className="text-gray-500 flex items-center space-x-2">
          <div className="w-full h-px bg-gray-300"></div>
          <div>or</div>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Signup Form */}
        <form>
          {/* Add your form fields here */}
          <div className="space-y-4">
            <label className="text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="input input-bordered w-full"
              type="email"
              id="email"
              name="email"
              required
            />

            <label className="text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="input input-bordered w-full"
              type="password"
              id="password"
              name="password"
              required
            />

            {/* Add more form fields as needed */}
          </div>

          <button className="mt-2 btn btn-primary w-full" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
