import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
// 모르겠어서 물어보니까 이걸로 페이지 전환이 되더라고용..
import { useNavigate } from "react-router-dom";

//닉넴은 어떻게 해야할지 모르겠어요 도움 ㅠ

function SignupPage() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //회원가입 성공 시 인풋 비우기->어차피 창전환되니까 필요없는 것 같기도..
        setNickname("");
        setEmail("");
        setPassword("");
        //회원가입 성공 시 로그인페이지로 이동
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //비밀번호가 약할 때 띄우는 에러코드라지만 6글자보다 작으면 실행되는듯
        if (errorCode === "auth/weak-password") {
          alert("비밀번호는 최소 6글자 이상이어야 합니다.");
        }
      });
  };

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="w-80 h-96 bg-gray-200 rounded-2xl">
        <h2 className="mt-12 text-center text-2xl font-bold text-gray-800">
          로고
        </h2>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSignup}
        >
          <input
            id="nickname"
            name="text"
            type="text"
            autoComplete="text"
            required
            placeholder="닉네임"
            className="mt-14 block w-56 rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-slate-300"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="아이디"
            className="mt-2 block w-56 rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-slate-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="비밀번호"
            className="mt-2 block w-56 rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-slate-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
