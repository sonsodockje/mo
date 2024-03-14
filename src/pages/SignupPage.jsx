import React from "react";

function SignupPage() {
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="w-80 h-96 bg-gray-200 rounded-2xl">
        <h2 className="mt-12 text-center text-2xl font-bold text-gray-800">
          로고
        </h2>
        <form className="flex flex-col justify-center items-center">
          <input
            id="nickname"
            name="text"
            type="text"
            autoComplete="text"
            required
            placeholder="닉네임"
            className="mt-14 block w-56 rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-slate-300"
          />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="아이디"
            className="mt-2 block w-56 rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-slate-300"
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="비밀번호"
            className="mt-2 block w-56 rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-slate-300"
          />
          <button
            type="submit"
            className="mt-5 flex w-20 justify-center rounded-md  bg-[#10202D] px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-slate-500 "
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
