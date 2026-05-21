import React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

function MutantCard({ mutant }) {
  return (
    <Card
      sx={{
        width: 280,
        borderRadius: 3,
        boxShadow: 3,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6
        }
      }}
    >
      <CardContent>
        {/* Header Row: Name & Level */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h5" component="div" fontWeight="bold" color="text.primary">
            {mutant.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontWeight: 'bold'
            }}
          >
            LVL {mutant.level || 10}
          </Typography>
        </Box>

        {/* Subtitle / Primary Power */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontStyle: 'italic' }}>
          {mutant.power}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        {/* Character Bio Details */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body2">
            <strong>Base:</strong> {mutant.location}
          </Typography>

          <Typography variant="body2">
            🍿 <strong>Snack:</strong> {mutant.favoriteSnack}
          </Typography>

          <Typography variant="body2">
            🎵 <strong>Theme:</strong> "{mutant.themeSong}"
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MutantCard;
