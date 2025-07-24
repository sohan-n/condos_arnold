import React from 'react';

interface CustomGoogleCalendarProps {
  height?: number;
  width?: number;
}

const CustomGoogleCalendar: React.FC<CustomGoogleCalendarProps> = ({
  height = 600,
  width = 1500
}) => {
  return (
    <iframe 
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showTitle=0&showTabs=0&showCalendars=0&src=dGlvcXNpM2lsYmtiaGs5c2pmb3JxMGNyM3NtdHI1bnFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23d81b60" 
      style={{ borderWidth: 0 }} 
      width={width} 
      height={height}
    />
  );
};

export default CustomGoogleCalendar; 