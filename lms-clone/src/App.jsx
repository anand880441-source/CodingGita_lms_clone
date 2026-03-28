import './App.css'
import Landing from './pages/Landing.jsx'
import Login from "./pages/Login.jsx";
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard.jsx';
import AttendanceDashboard from './pages/AttendanceDashboard.jsx';
import CalendarDashboard from './pages/CalendarDashboard.jsx';
import ChatDashboard from './pages/ChatDashboard.jsx';

function App() {

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student' element={<StudentDashboard />} />
        <Route path='/student/attendance' element={<AttendanceDashboard />} />
        <Route path='/student/calendar' element={<CalendarDashboard />} />
        <Route path='/student/chat-groups' element={<ChatDashboard />} />
      </Routes>
    </div>
  )
}

export default App