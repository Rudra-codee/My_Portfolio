import { useEffect, useRef } from 'react';

const CursorBalls = () => {
  const containerRef = useRef(null);
  const ballsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create balls
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
    const balls = [];
    
    for (let i = 0; i < 15; i++) {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.style.width = `${Math.random() * 20 + 10}px`;
      ball.style.height = ball.style.width;
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.borderRadius = '50%';
      ball.style.position = 'absolute';
      ball.style.transition = 'transform 0.1s ease-out';
      container.appendChild(ball);
      balls.push(ball);
    }
    ballsRef.current = balls;

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      balls.forEach((ball, index) => {
        const delay = index * 0.05;
        setTimeout(() => {
          const ballX = x + (Math.random() - 0.5) * 100;
          const ballY = y + (Math.random() - 0.5) * 100;
          ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
        }, delay * 1000);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      balls.forEach(ball => ball.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #1a1a1a, #2a2a2a)' }}
    />
  );
};

export default CursorBalls; 