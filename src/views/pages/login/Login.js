import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom v6
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import logo1 from 'src/assets/images/Capture4.png';

const Login = () => {
  const [identifier , setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validateEmail = (identifier ) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(identifier );
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setValidated(true);

    if (!identifier  || !password || !validateEmail(identifier )) {
      // If email, password, or email format is invalid, return without attempting login
      return;
    }

    try {
      const response = await fetch('http://108.181.215.219:816/api/admin/LoginAdmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier , password }), // send email instead of username
      });
      const data = await response.json();

      if (response.ok) {
        // Navigate to dashboard if login is successful
        navigate("/dashboard");
      } else {
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{
        background: 'linear-gradient(45deg, #2196F3, #4CAF50, #FFEB3B)', 
      }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        invalid={validated && (!identifier  || !validateEmail(identifier ))}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        invalid={validated && !password}
                      />
                    </CInputGroup>
                   
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleLogin}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-0" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <img src={logo1} alt='logo' height={320} width={370}></img>
                    
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
