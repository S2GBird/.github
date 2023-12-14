import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LoginPage from 'frontend/src/Pages/Login Page/LoginPage.jsx'
import '@testing-library/jest-dom'

describe('LoginPage Component', () => {
  test('renders login form with necessary fields', () => {
    const { getByLabelText, getByRole } = render(
      <Router>
        <LoginPage />
      </Router>
    )

    // Check for username input field
    expect(getByLabelText(/Username/i)).toBeInTheDocument()

    // Check for password input field
    expect(getByLabelText(/Password/i)).toBeInTheDocument()

    // Check for login button
    expect(getByRole('button', { name: /Login/i })).toBeInTheDocument()
    // more test will be added on. this at the moment is just for rendering login page and check of fields
  })
})
