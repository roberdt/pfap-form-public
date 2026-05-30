import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import Pfapappbar from '@/components/pfapappbar';
import Pfapcontainer from '@/components/pfapcontainer';
import Pfapfooter from '@/components/pfapfooter';
import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';

/**************************************************
 * Login()
 * Renders a login form with username and password fields
 * Validates inputs and shows error/success messages
 * Calls login() from AuthContext on form submission
 * Handles loading state and redirects on successful login
 **************************************************/
function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();

  /**************************************************
   * validateUsername()
   * Checks if the username is a non-empty string with at least 3 characters and no spaces
   * Returns true if valid, false otherwise
   **************************************************/
  const validateUsername = (value: string): boolean => {
    return typeof value === 'string' && value.trim().length >= 3 && !/\s/.test(value);
  };

  /**************************************************
   * handleSubmit()
   * Validates username and password inputs
   * Shows error messages for invalid inputs
   * Calls login() from AuthContext on valid inputs
   * Handles loading state and displays success/error messages based on login outcome
   **************************************************/
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');


    if (!validateUsername(username)) {
      setError('Please enter a valid username (at least 3 characters, no spaces).');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    login(username, password)
      .then((data) => {
        setLoading(false);
        setSuccess('Login successful.');
        setUsername('');
        setPassword('');
        console.log('login returned', data);
        router.push('/');
      })
      .catch((err: Error) => {
        setLoading(false);
        console.error('Login error', err);
        setError(err.message || 'Network or server error');
      });
  };

  return (
    <div>
      <Pfapappbar />

      <Pfapcontainer maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" sx={{ mb: 2, color: '#00518c' }}>
            Sign in
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ width: '100%', mb: 2 }}>{success}</Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
            </Button>
          </Box>
        </Box>
      </Pfapcontainer>

      <Pfapfooter />
    </div>
  );
}

export default Login;

