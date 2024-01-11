import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import SignupPage from 'frontend/src/Pages/SignupPage/SignupPage.jsx'
import '@testing-library/jest-dom'

describe('SignupPage Component', () => {
  test('renders sign up form with necessary fields', () => {
    render(
      <Router>
        <SignupPage />
      </Router>
    )

    const firstNameElem = screen.getByLabelText(/Enter first name/i)
    const lastNameElem = screen.getByLabelText(/Enter last name/i)
    const usernameElem = screen.getByLabelText(/Enter username/i)
    const emailElem = screen.getByLabelText(/Enter email/i)
    const passwordElem = screen.getByLabelText(/Enter password/i)
    const confirmPasswordElem = screen.getByLabelText(/Confirm password/i)
    const checkboxElem = screen.getByRole('checkbox', { name: /I have read and accept Terms and Conditions/i })
    const buttonElem = screen.getByRole('button', { name: /Register/i })

    // Check for first name input field
    expect(firstNameElem).toBeInTheDocument()

    // Check for last name input field
    expect(lastNameElem).toBeInTheDocument()

    // Check for username input field
    expect(usernameElem).toBeInTheDocument()

    // Check for email input field
    expect(emailElem).toBeInTheDocument()

    // Check for password input field
    expect(passwordElem).toBeInTheDocument()

    // Check for confirm password input field
    expect(confirmPasswordElem).toBeInTheDocument()

    // Check for checkbox
    expect(checkboxElem).toBeInTheDocument()

    // Check for register button
    expect(buttonElem).toBeInTheDocument()
  })
})
