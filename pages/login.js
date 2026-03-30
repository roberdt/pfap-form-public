import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Pfapappbar from './components/pfapappbar';
import Pfapfooter from './components/pfapfooter';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login } = useAuth();

    const validateUsername = (value) => {
        // simple username validation: non-empty, no spaces, at least 3 characters
        return typeof value === 'string' && value.trim().length >= 3 && !/\s/.test(value);
    };

    const handleSubmit = (e) => {
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
                setRemember(false);
                console.log('login returned', data);
            })
            .catch((err) => {
                setLoading(false);
                console.error('Login error', err);
                setError(err.message || 'Network or server error');
            });
    };

    return (
        <div>
            <Pfapappbar />

            <Container maxWidth="sm">
                <Box sx={{ mt: 6, mb: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

                        <FormControlLabel
                            control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} color="primary" />}
                            label="Remember me"
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
            </Container>

            <Pfapfooter />
        </div>
    );
}

export default Login;

