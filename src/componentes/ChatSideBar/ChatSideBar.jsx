import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Divider,
  Avatar,
  Tooltip,
  Fade
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import api from '../../servicios/api';

const AVATAR_USER = <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}><PersonIcon /></Avatar>;
const AVATAR_BOT = <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}><SmartToyIcon /></Avatar>;

const initialWelcome = [
  {
    role: 'assistant',
    content: '¡Hola! Soy PatriGod IA 🤖. ¿En qué puedo ayudarte hoy? Pregúntame sobre ciudades, monumentos, eventos, comidas o cualquier cosa relacionada con la app.'
  }
];

const ChatSidebar = () => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState(initialWelcome);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const chatEndRef = useRef(null);

  const toggleDrawer = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open, loading]);

  const handleSend = async () => {
    if (!prompt.trim() || loading) return;
    setError('');
    const userMsg = { role: 'user', content: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt('');
    setLoading(true);

    try {
      const res = await api.post('http://localhost:8080/api/ollama/chat', { prompt });
      // El backend responde con .message.content
      const data = res.data || {};
      const botMsg = {
        role: data.message?.role || 'assistant',
        content: data.message?.content || 'No se recibió respuesta.'
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '❌ Error al conectar con el servidor. Inténtalo más tarde.' }
      ]);
      setError('Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages(initialWelcome);
    setError('');
    setPrompt('');
  };

  return (
    <>
      <Tooltip title="Abrir chat IA" arrow>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'fixed',
            left: 16,
            bottom: 16,
            zIndex: 2000,
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'secondary.main',
              transform: 'scale(1.08) rotate(-8deg)',
              boxShadow: 6,
            },
            boxShadow: 5,
            border: '3px solid #fff',
            transition: 'all 0.2s cubic-bezier(.4,2,.6,1)',
            animation: open ? 'none' : 'pulse 1.5s infinite',
            '@keyframes pulse': {
              '0%': { boxShadow: '0 0 0 0 #1976d2' },
              '70%': { boxShadow: '0 0 0 10px rgba(25,118,210,0)' },
              '100%': { boxShadow: '0 0 0 0 #1976d2' }
            }
          }}
          size="large"
          aria-label="Abrir chat"
        >
          <ChatIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: { xs: '100vw', sm: 400 },
            maxWidth: 440,
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
            borderTopRightRadius: 32,
            borderBottomRightRadius: 32,
            boxShadow: 10,
            overflow: 'hidden'
          }
        }}
        transitionDuration={350}
      >
        <Box sx={{
          p: 2,
          pb: 1,
          bgcolor: 'primary.main',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderBottomLeftRadius: 32,
          boxShadow: 2,
          background: 'linear-gradient(90deg, #1976d2 60%, #ec407a 100%)'
        }}>
          <SmartToyIcon sx={{ mr: 1, fontSize: 32 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
            PatriGod IA
          </Typography>
          <Tooltip title="Limpiar chat" arrow>
            <IconButton color="inherit" onClick={handleClear} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}>
              <DeleteSweepIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider />
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: 2,
            py: 1,
            bgcolor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)'
          }}
        >
          {messages.map((msg, idx) => (
            <Fade in key={idx}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 1,
                  flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  animation: msg.role === 'user'
                    ? 'slideInRight 0.4s cubic-bezier(.4,2,.6,1)'
                    : 'slideInLeft 0.4s cubic-bezier(.4,2,.6,1)',
                  '@keyframes slideInRight': {
                    from: { opacity: 0, transform: 'translateX(60px)' },
                    to: { opacity: 1, transform: 'translateX(0)' }
                  },
                  '@keyframes slideInLeft': {
                    from: { opacity: 0, transform: 'translateX(-60px)' },
                    to: { opacity: 1, transform: 'translateX(0)' }
                  }
                }}
              >
                {msg.role === 'user' ? AVATAR_USER : AVATAR_BOT}
                <Box
                  sx={{
                    bgcolor: msg.role === 'user'
                      ? 'linear-gradient(90deg, #1976d2 70%, #42a5f5 100%)'
                      : 'linear-gradient(90deg, #ec407a 70%, #f06292 100%)',
                    color: '#111', // Cambia el texto a negro
                    px: 2,
                    py: 1.2,
                    borderRadius: msg.role === 'user'
                      ? '18px 2px 18px 18px'
                      : '2px 18px 18px 18px',
                    maxWidth: '75%',
                    boxShadow: 2,
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'inherit',
                    fontSize: '1.07rem',
                    fontWeight: 400,
                    border: msg.role === 'user'
                      ? '2px solid #1976d2'
                      : '2px solid #ec407a',
                    transition: 'all 0.2s cubic-bezier(.4,2,.6,1)'
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#111' }}>{msg.content}</Typography>
                </Box>
              </Box>
            </Fade>
          ))}
          {loading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
              {AVATAR_BOT}
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Escribiendo...
              </Typography>
              <CircularProgress size={16} color="secondary" />
            </Box>
          )}
          <div ref={chatEndRef} />
        </Box>
        <Divider />
        <Box sx={{
          p: 2,
          pt: 1,
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
          boxShadow: 2,
          background: 'linear-gradient(90deg, #fff 60%, #fce4ec 100%)'
        }}>
          <TextField
            label="Escribe tu mensaje"
            multiline
            minRows={2}
            maxRows={5}
            fullWidth
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleInputKeyDown}
            variant="outlined"
            disabled={loading}
            autoFocus={open}
            sx={{
              mb: 1,
              background: 'rgba(255,255,255,0.8)',
              borderRadius: 2,
              boxShadow: 1
            }}
            inputProps={{ 'aria-label': 'Mensaje para el chatbot' }}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={handleSend}
              disabled={loading || !prompt.trim()}
              fullWidth
              sx={{
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: 1,
                py: 1.2,
                borderRadius: 2,
                boxShadow: 3,
                background: 'linear-gradient(90deg, #1976d2 60%, #ec407a 100%)'
              }}
            >
              {loading ? <CircularProgress size={22} color="inherit" /> : 'Enviar'}
            </Button>
          </Box>
          {error && (
            <Typography color="error" variant="caption" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', textAlign: 'center' }}>
            Presiona <b>Enter</b> para enviar, <b>Shift+Enter</b> para salto de línea.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default ChatSidebar;
