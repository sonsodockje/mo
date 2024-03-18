import { useNavigate } from "react-router-dom";
import { useSignUpStore } from "../store";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // 이거 지워지면 안됩니다.

function SignupPage() {
  const navigate = useNavigate();

  const email = useSignUpStore((state) => state.email);
  const password = useSignUpStore((state) => state.password);
  const name = useSignUpStore((state) => state.name);

  const emailAction = useSignUpStore((state) => state.setEmail);
  const passwordAction = useSignUpStore((state) => state.setPassword);
  const nameAction = useSignUpStore((state) => state.setName);

  function handleSignup(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("회원가입 됨.");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        //비밀번호가 약할 때 띄우는 에러코드라지만 6글자보다 작으면 실행되는듯
        if (errorCode === "auth/weak-password") {
          alert("비밀번호는 최소 6글자 이상이어야 합니다.");
        }
      });
  }

  function handleClick() {
    handleSignup(email, password);
  }

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="w-80 h-96 bg-gray-200 rounded-2xl">
        <h2 className="mt-12 text-center text-2xl font-bold text-gray-800">
          로고
        </h2>
        <div className="flex flex-col justify-center items-center">
          <input
            id="nickname"
            name="text"
            type="text"
            autoComplete="text"
            required
            placeholder="닉네임"
            className="mt-14 block w-56 rounded-md border-0 p-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:bg-slate-300"
            onChange={(e) => nameAction(e.target.value)}
            value={name}
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
            onChange={(e) => emailAction(e.target.value)}
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
            onChange={(e) => passwordAction(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="mt-5 flex w-20 justify-center rounded-md  bg-[#10202D] px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-slate-500 "
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
