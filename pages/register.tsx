import React, { useState } from 'react';
import Pfapappbar from '@/components/pfapappbar';
import Pfapcontainer from '@/components/pfapcontainer';
import Pfapfooter from '@/components/pfapfooter';
import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { register as registerUser } from '../services/auth';
import { useMessage } from '@/context/MessageContext';
import { useRouter } from 'next/router';

function Register() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { setMessage } = useMessage();
  const router = useRouter();

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || username.length > 10) {
      setError('Username is required and must be at most 10 characters.');
      return;
    }
    if (!firstName || firstName.length > 100) {
      setError('First name is required and must be at most 100 characters.');
      return;
    }
    if (!lastName || lastName.length > 100) {
      setError('Last name is required and must be at most 100 characters.');
      return;
    }
    if (!validateEmail(email) || email.length > 100) {
      setError('A valid email (max 100 chars) is required.');
      return;
    }
    if (!password || password.length < 8 || password.length > 255) {
      setError('Password is required (8-255 characters).');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    setLoading(true);

    try {
      const body = { username, firstName, lastName, email, password };
      const data = await registerUser(body);

      const msg = 'Registration successful. ' + (data.message ? data.message : '');
      setMessage(msg);
      setUsername('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      router.push('/');
    } catch (err: unknown) {
      console.error('Registration error', err);
      setError(err instanceof Error ? err.message : 'Registration error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Pfapappbar />

      <Pfapcontainer maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" sx={{ mb: 2, color: '#00518c' }}>
            Register
          </Typography>

          {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ width: '100%', mb: 2 }}>{success}</Alert>}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              inputProps={{ maxLength: 10 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              inputProps={{ maxLength: 100 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              inputProps={{ maxLength: 100 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ maxLength: 100 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{ maxLength: 255 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              inputProps={{ maxLength: 255 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Register'}
            </Button>
          </Box>
        </Box>
      </Pfapcontainer>

      <Pfapfooter />
    </div>
  );
}

export default Register;

