import React from 'react'
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar/Navbar';
test('renders Navbar component', () => {
    render(<Navbar />);
    
    // Check if the ChirpLogo is rendered
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();

    // Check if the login and signup links are rendered when user is logged out
    const loginLink = screen.getByText('Login');
    expect(loginLink).toBeInTheDocument();
    const signupLink = screen.getByText('Sign Up');
    expect(signupLink).toBeInTheDocument();

    // Check if the dashboard and logout links are rendered when user is logged in
    const dashboardLink = screen.getByText('Dashboard');
    expect(dashboardLink).toBeInTheDocument();
    const logoutLink = screen.getByText('Logout');
    expect(logoutLink).toBeInTheDocument();
});
