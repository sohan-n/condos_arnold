import React from 'react';
import { Card } from '@mui/material';
import type { CardProps } from '@mui/material';

interface BlurCardProps extends Omit<CardProps, 'elevation'> {
  blurIntensity?: 'light' | 'medium' | 'heavy' | 'ultra';
  opacity?: number;
  borderRadius?: number;
  children: React.ReactNode;
}

const BlurCard: React.FC<BlurCardProps> = ({
  blurIntensity = 'medium',
  opacity,
  borderRadius,
  children,
  sx = {},
  ...props
}) => {
  const getBlurStyles = () => {
    const intensityMap = {
      light: {
        blur: 5,
        saturation: 110,
        defaultOpacity: 0.15,
        shadow: '0 4px 20px rgba(0,0,0,0.08)',
        insetHighlight: 'rgba(255,255,255,0.1)',
        border: 'rgba(255,255,255,0.15)'
      },
      medium: {
        blur: 8,
        saturation: 115,
        defaultOpacity: 0.12,
        shadow: '0 8px 32px rgba(0,0,0,0.12)',
        insetHighlight: 'rgba(255,255,255,0.15)',
        border: 'rgba(255,255,255,0.12)'
      },
      heavy: {
        blur: 12,
        saturation: 120,
        defaultOpacity: 0.1,
        shadow: '0 16px 64px rgba(0,0,0,0.12)',
        insetHighlight: 'rgba(255,255,255,0.2)',
        border: 'rgba(255,255,255,0.1)'
      },
      ultra: {
        blur: 15,
        saturation: 125,
        defaultOpacity: 0.08,
        shadow: '0 20px 80px rgba(0,0,0,0.1)',
        insetHighlight: 'rgba(255,255,255,0.25)',
        border: 'rgba(255,255,255,0.08)'
      }
    };

    const config = intensityMap[blurIntensity];
    const finalOpacity = opacity !== undefined ? opacity : config.defaultOpacity;

    return {
      bgcolor: `rgba(255,255,255,${finalOpacity})`,
      backdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%)`,
      WebkitBackdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%)`,
      border: `1px solid ${config.border}`,
      borderRadius: borderRadius !== undefined ? borderRadius : 1,
      boxShadow: `${config.shadow}, inset 0 1px 0 ${config.insetHighlight}`,
      overflow: 'hidden'
    };
  };

  const blurStyles = getBlurStyles();

  return (
    <Card
      elevation={0}
      sx={{
        ...blurStyles,
        ...sx
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default BlurCard; 