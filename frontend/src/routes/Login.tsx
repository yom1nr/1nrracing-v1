// // frontend/src/routes/Login.tsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login, register } from '../api';

// type Props = { onAuthed: (token: string) => void };

// const Login: React.FC<Props> = ({ onAuthed }) => {
//   const [mode, setMode] = useState<'login'|'signup'>('login');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate(); 

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true); setError(null);

//     try {
//       if (mode === 'login') {
//         const res = await login(email, password);

//         localStorage.setItem('token', res.token);
//         localStorage.setItem('user', JSON.stringify(res.user));

//         onAuthed(res.token);
//       } else {
//         const res = await register(name, email, password);

//         localStorage.setItem('token', res.token);
//         localStorage.setItem('user', JSON.stringify(res.user));

//         onAuthed(res.token);
//       }

//       navigate('/');

//     } catch (err: any) {
//       setError(err?.response?.data?.message || err.message || 'Request failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-wrap">
//       <div className="auth-card">
//         <div className="tabs">
//           <button className={mode==='login'?'active':''} onClick={()=>setMode('login')}>Login</button>
//           <button className={mode==='signup'?'active':''} onClick={()=>setMode('signup')}>Sign Up</button>
//         </div>

//         <form onSubmit={submit}>
//           {mode === 'signup' && (
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={e=>setName(e.target.value)}
//               required
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={e=>setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={e=>setPassword(e.target.value)}
//             required
//           />
//           {error && <div className="error">{error}</div>}
//           <button type="submit" disabled={loading}>
//             {loading ? 'Please wait…' : (mode === 'login' ? 'Login' : 'Create account')}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// frontend/src/routes/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { login, register } from '../api'; // เราปิดไว้ก่อน เพราะจะใช้แบบจำลอง (Mock)

type Props = { onAuthed: (token: string) => void };

const Login: React.FC<Props> = ({ onAuthed }) => {
  const [mode, setMode] = useState<'login'|'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); 
    setError(null);

    // --- ส่วนนี้คือ Mock Logic (จำลองการทำงาน) ---
    console.log(`Attempting to ${mode} with email: ${email}`);

    // สั่งให้รอ 1 วินาที เพื่อให้ดูเหมือนกำลังโหลดข้อมูลจริง
    setTimeout(() => {
      try {
        // 1. สร้างข้อมูลปลอมๆ ขึ้นมา
        const mockToken = "mock-token-" + Math.random().toString(36).substring(7);
        const mockUser = {
            id: 999,
            name: name || (mode === 'login' ? "Racer 01" : "New Member"),
            email: email,
            role: "user"
        };

        // 2. บันทึกลง LocalStorage (เหมือนกับที่ระบบจริงทำ)
        localStorage.setItem('token', mockToken);
        localStorage.setItem('user', JSON.stringify(mockUser));

        // 3. แจ้ง App ว่า Login สำเร็จแล้ว
        onAuthed(mockToken);
        
        // 4. แจ้งเตือนและเปลี่ยนหน้า
        // alert(mode === 'login' ? "เข้าสู่ระบบ (Demo) สำเร็จ!" : "สมัครสมาชิก (Demo) สำเร็จ!");
        navigate('/');
        
      } catch (err: any) {
        setError('Something went wrong during demo login.');
      } finally {
        setLoading(false);
      }
    }, 1000); // Delay 1000ms (1 วินาที)
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="tabs">
          <button className={mode==='login'?'active':''} onClick={()=>setMode('login')}>Login</button>
          <button className={mode==='signup'?'active':''} onClick={()=>setMode('signup')}>Sign Up</button>
        </div>

        <form onSubmit={submit}>
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e=>setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : (mode === 'login' ? 'Login' : 'Create account')}
          </button>
        </form>
        
        <p style={{marginTop: '20px', fontSize: '0.8rem', color: '#666', textAlign: 'center'}}>
        </p>
      </div>
    </div>
  );
};

export default Login;