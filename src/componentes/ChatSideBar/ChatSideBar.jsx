import React, { useState } from 'react';
import { Box, IconButton, Drawer, Typography, TextField, Button, CircularProgress } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const ChatSidebar = () => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('http://localhost:8080/api/ollama/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      // Asumiendo que la respuesta tiene .content
      setResponse(data.content || JSON.stringify(data.message?.content));
    } catch (error) {
      setResponse('❌ Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          left: 16,
          bottom: 16,
          zIndex: 1300,
          bgcolor: 'primary.main',
          color: 'white',
          '&:hover': { bgcolor: 'primary.dark' },
          boxShadow: 3,
        }}
        size="large"
        aria-label="Abrir chat"
      >
        <ChatIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: 320, padding: 2 } }}
      >
        <Typography variant="h6" gutterBottom>PatriGod IA</Typography>
        <TextField
          label="Escribe tu pregunta"
          multiline
          rows={4}
          fullWidth
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSend}
          disabled={loading}
          sx={{ marginTop: 2 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
        </Button>

        {response && (
          <Box mt={3} sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
            <Typography variant="subtitle2" color="text.secondary">
              Respuesta:
            </Typography>
            <Typography>{response}</Typography>
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default ChatSidebar;
