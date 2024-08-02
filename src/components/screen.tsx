"use client"

import { motion, useTransform } from 'framer-motion';
import React from 'react';
import { useScrollTrigger } from './scrollTrigger';

export type ScreenProps = {
  colorStart?: string;
  colorEnd?: string;
  fadeIn?: boolean;
  fadeOut?: boolean;
  showProgress?: boolean;
  title: string;
  children?: React.ReactNode
};

export const Screen: React.FC<ScreenProps> = ({
  colorStart = '#333399',
  colorEnd = '#663399',
  fadeIn = true,
  fadeOut = true,
  showProgress = false,
  title,
  children
}) => {
  const progress = useScrollTrigger();

  const bg = useTransform(progress, [0, 1], [colorStart, colorEnd]);

  const titleOpacity = useTransform(progress, [0, 0.5, 1], [fadeIn ? 0 : 1, 1, fadeOut ? 0 : 1]);

  const bgProgress = useTransform(progress, [0, 1], ['100% 0%', '100% 100%']);

  return (
    <motion.div className="screen" style={{ backgroundColor: bg }}>
      <motion.h2 style={{ opacity: titleOpacity }} className='text-[45px] font-semibold'>{title}</motion.h2>
      {showProgress && (
        <div className="progress">
          <motion.div className="progress-inner" style={{ backgroundSize: bgProgress }} />
        </div>
      )}
      <motion.div
      style={{ opacity: titleOpacity }}>
      {children}
      </motion.div>
    </motion.div>
  );
};

