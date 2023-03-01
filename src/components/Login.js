import React from "react";
const Login = () => {
  return (
    <div class="h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center">
      <div class="lg:w-2/5 md:w-1/2 w-2/3">
        <form class="bg-indigo-100 p-10 rounded-2xl shadow-lg min-w-full">
          <h1 class="bg-gradient-to-tl from-blue-600 to-pink-500 text-transparent bg-clip-text text-center text-2xl mb-2   duration-500 font-bold font-sans">
            Welcome
          </h1>

          <hr class="border-2 rounded-full border-indigo-500  hover:border-red-500 duration-500" />
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="email"
            >
              Email
            </label>
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
            />
          </div>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="password"
            >
              Password
            </label>
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Login
          </button>
          {/* <button
            type="submit"
            class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans"
          >
            Login
          </button> */}
          <p>

          Don't have an account? Sign up
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
