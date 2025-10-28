  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';

  export default function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    console.log("Backend URL:", process.env.REACT_APP_Backend_URL);

    const handlesubmit = async (e) => {
      e.preventDefault();

      try {
        let res = await fetch(`${process.env.REACT_APP_Backend_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        let data = await res.json();
        if (res.ok) {
          localStorage.setItem("user", JSON.stringify(data.data));
          alert(data.message);
          setpassword("");
          setusername("");
          navigate("/dashboard");
        } else {
          alert(data.message);
        }
      } catch (err) {
        alert("Network error: " + err.message);
      }
    };

    return (
      <div>
        <div className="md:flex items-center h-screen">
          <div className="flex-1/2 md:py-0 py-10">
            <div className="px-20">
              <h2 className="font-bold text-xl py-2">Welcome back</h2>
              <form onSubmit={handlesubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    required
                    placeholder="email@example.com"
                    id="email"
                    className="mt-1 mb-2 border-[1px] rounded-lg w-full p-1"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="******"
                    id="Password"
                    className="mt-1 mb-2 border-[1px] rounded-lg w-full p-1"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <div>
                  <input type="checkbox" id="chek" required />
                  <label htmlFor="chek" className="text-gray-600 p-0.5">
                    Remember me
                  </label>
                </div>

                <div className="py-2">
                  <input
                    type="submit"
                    value="Sign in"
                    className="bg-blue-700 w-full rounded-lg text-white p-1"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="flex-1/2">
            <div className="px-20 bg-blue-700 h-screen overflow-hidden">
              <div className="translate-y-2/5 h-full">
                <h2 className="text-white text-3xl pb-3 font-bold">ticktok</h2>
                <p className="text-white text-sm">
                  Introducing ticktock, our cutting-edge timesheet web application
                  designed to revolutionize how you manage employee work hours.
                  With ticktock, you can effortlessly track and monitor employee
                  attendance and productivity from anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
