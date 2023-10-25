import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import UiElements from './views/UiElements';
import RoutesWrapper from './views/RoutesWrapper';
import Landingpage from './views/LandingPage/landingpage';
import Courses from './views/Courses/Courses';
import CourseBuilder from './views/CourseBuilder/CourseBuilder';
import PricingPlans from './views/PricingPlans/pricingPlans';
import Quizes from './views/Quizes/Quizes';
import QuizBuilder from './views/QuizBuilder/QuizBuilder';
import './assets/styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <RoutesWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landingpage" element={<Landingpage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/create-course" element={<CourseBuilder />} />
            <Route path="/ui-elements" element={<UiElements />} />
            {/* <Route path="/teacher" element={<TeacherDashboard />} /> */}
            <Route path="/pricingPlans" element={<PricingPlans />} />
            <Route path="/quizes" element={<Quizes />} />
            <Route path="/create-quiz" element={<QuizBuilder />} />
          </Routes>
        </RoutesWrapper>
      </Router>
    </div>
  );
}

export default App;
