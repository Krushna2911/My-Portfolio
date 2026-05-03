export default function GlobalStyles() {
  return (
    <style>{`
      /* Prevent scrollbar flickering during animations */
      html {
        scrollbar-gutter: stable;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.4; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-18px); }
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }
      @keyframes shimmer {
        from { background-position: -200% center; }
        to   { background-position:  200% center; }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.93); }
        to   { opacity: 1; transform: scale(1); }
      }
    `}</style>
  );
}